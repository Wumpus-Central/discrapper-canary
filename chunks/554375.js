"use strict";
n.d(t, { Cp: () => N, Gf: () => v, Sw: () => b, V4: () => T, ak: () => S, dK: () => I, dZ: () => y }), n(321073);
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
    m = n(446458),
    p = n(594061),
    f = n(919638),
    g = n(403362),
    x = n(157559),
    C = n(652215),
    A = n(355097),
    E = n(985018);
function I(e) {
    p.wc.updateAsync(
        "textAndImages",
        (t) => {
            (t.diversitySurrogate = a.hU.create()), (t.diversitySurrogate.value = e);
        },
        A.Sb.FREQUENT_USER_ACTION,
    );
}
function y(e) {
    o.h.dispatch({ type: "EMOJI_FETCH", guildId: e }),
        s.Bo.get({ url: C.Rsh.GUILD_EMOJIS(e), oldFormErrors: !0, rejectWithError: !0 }).then(
            (t) => o.h.dispatch({ type: "EMOJI_FETCH_SUCCESS", guildId: e, emojis: t.body }),
            () => o.h.dispatch({ type: "EMOJI_FETCH_FAILURE", guildId: e }),
        );
}
function v(e) {
    let { guildId: t, image: n, name: l, roles: i, analyticsLocation: a } = e;
    return (
        o.h.dispatch({ type: "EMOJI_UPLOAD_START", guildId: t }),
        s.Bo.post({
            url: C.Rsh.GUILD_EMOJIS(t),
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
function S(e, t, n) {
    return (
        o.h.dispatch({ type: "EMOJI_DELETE", guildId: e, emojiId: t }),
        s.Bo.del({
            url: C.Rsh.GUILD_EMOJI(e, t),
            body: null != n ? { replaced_by: n } : void 0,
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(() => {
            r.O.announce(E.intl.string(E.t.L3UUha));
        })
    );
}
async function N(e) {
    let { guildId: t, emojiId: n, name: l, roles: i } = e;
    try {
        return await s.Bo.patch({
            url: C.Rsh.GUILD_EMOJI(t, n),
            body: { name: l, roles: i },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    } catch (e) {
        throw new c.A(e);
    }
}
function j(e) {
    if (f.A.totalUnavailableGuilds > 0 || !m.A.isConnected()) return e;
    let t = e.map((e) => u.Ay.getCustomEmojiById(e) ?? d.Ay.getByName(e)).filter(g.Vq);
    return [...(0, h.A)(t).keys()];
}
function _(e) {
    return null == e ? null : (e.id ?? d.Ay.convertSurrogateToBase(e.surrogates)?.name ?? e.name);
}
function T(e) {
    let t = _(e);
    null != t &&
        p.bW.updateAsync(
            "favoriteEmojis",
            (e) =>
                ((e.emojis = j(e.emojis)), i().size(e.emojis) >= 250)
                    ? (x.A.show({
                          title: E.intl.string(E.t["+XYXtZ"]),
                          body: E.intl.formatToPlainString(E.t.JaIyFi, { count: 250 }),
                      }),
                      !1)
                    : !e.emojis.includes(t) && void e.emojis.push(t),
            A.Sb.INFREQUENT_USER_ACTION,
        );
}
function b(e) {
    let t = _(e);
    null != t &&
        p.bW.updateAsync(
            "favoriteEmojis",
            (e) => {
                if (((e.emojis = j(e.emojis)), !e.emojis.includes(t))) return !1;
                e.emojis = e.emojis.filter((e) => t !== e);
            },
            A.Sb.INFREQUENT_USER_ACTION,
        );
}
