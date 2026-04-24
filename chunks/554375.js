"use strict";
n.d(t, { Cp: () => b, Gf: () => v, Sw: () => T, V4: () => j, ak: () => y, dK: () => E, dZ: () => I }), n(321073);
var l = n(735438),
    i = n.n(l),
    s = n(636537),
    a = n(406935),
    r = n(765178),
    o = n(228366),
    c = n(181658),
    u = n(159273),
    d = n(7584),
    h = n(635222),
    m = n(366853),
    p = n(594061),
    f = n(919638),
    g = n(403362),
    _ = n(157559),
    x = n(652215),
    C = n(355097),
    A = n(985018);
function E(e) {
    p.wc.updateAsync(
        "textAndImages",
        (t) => {
            (t.diversitySurrogate = a.hU.create()), (t.diversitySurrogate.value = e);
        },
        C.Sb.FREQUENT_USER_ACTION,
    );
}
function I(e) {
    o.h.dispatch({ type: "EMOJI_FETCH", guildId: e }),
        s.Bo.get({ url: x.Rsh.GUILD_EMOJIS(e), oldFormErrors: !0, rejectWithError: !0 }).then(
            (t) => o.h.dispatch({ type: "EMOJI_FETCH_SUCCESS", guildId: e, emojis: t.body }),
            () => o.h.dispatch({ type: "EMOJI_FETCH_FAILURE", guildId: e }),
        );
}
function v(e) {
    let { guildId: t, image: n, name: l, roles: i, analyticsLocation: a } = e;
    return (
        o.h.dispatch({ type: "EMOJI_UPLOAD_START", guildId: t }),
        s.Bo.post({
            url: x.Rsh.GUILD_EMOJIS(t),
            body: { image: n, name: l, roles: i },
            context: { client_event_source: a?.page },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (e) => (o.h.dispatch({ type: "EMOJI_UPLOAD_STOP", guildId: t }), e.body),
            (e) => (o.h.dispatch({ type: "EMOJI_UPLOAD_STOP", guildId: t }), Promise.reject(e)),
        )
    );
}
function y(e, t, n) {
    return (
        o.h.dispatch({ type: "EMOJI_DELETE", guildId: e, emojiId: t }),
        s.Bo.del({
            url: x.Rsh.GUILD_EMOJI(e, t),
            body: null != n ? { replaced_by: n } : void 0,
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(() => {
            r.O.announce(A.intl.string(A.t.L3UUha));
        })
    );
}
async function b(e) {
    let { guildId: t, emojiId: n, name: l, roles: i } = e;
    try {
        return await s.Bo.patch({
            url: x.Rsh.GUILD_EMOJI(t, n),
            body: { name: l, roles: i },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    } catch (e) {
        throw new c.A(e);
    }
}
function S(e) {
    if (f.A.totalUnavailableGuilds > 0 || !m.A.isConnected()) return e;
    let t = e.map((e) => u.Ay.getCustomEmojiById(e) ?? d.Ay.getByName(e)).filter(g.Vq);
    return [...(0, h.A)(t).keys()];
}
function N(e) {
    return null == e ? null : (e.id ?? d.Ay.convertSurrogateToBase(e.surrogates)?.name ?? e.name);
}
function j(e) {
    let t = N(e);
    null != t &&
        p.bW.updateAsync(
            "favoriteEmojis",
            (e) =>
                ((e.emojis = S(e.emojis)), i().size(e.emojis) >= 250)
                    ? (_.A.show({
                          title: A.intl.string(A.t["+XYXtZ"]),
                          body: A.intl.formatToPlainString(A.t.JaIyFi, { count: 250 }),
                      }),
                      !1)
                    : !e.emojis.includes(t) && void e.emojis.push(t),
            C.Sb.INFREQUENT_USER_ACTION,
        );
}
function T(e) {
    let t = N(e);
    null != t &&
        p.bW.updateAsync(
            "favoriteEmojis",
            (e) => {
                if (((e.emojis = S(e.emojis)), !e.emojis.includes(t))) return !1;
                e.emojis = e.emojis.filter((e) => t !== e);
            },
            C.Sb.INFREQUENT_USER_ACTION,
        );
}
