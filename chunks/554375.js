"use strict";
n.d(t, { Cp: () => S, Gf: () => v, Sw: () => j, V4: () => T, ak: () => y, dK: () => E, dZ: () => I }), n(321073);
var i = n(735438),
    l = n.n(i),
    s = n(562465),
    r = n(406935),
    a = n(765178),
    o = n(73153),
    c = n(181658),
    u = n(508675),
    d = n(7584),
    h = n(635222),
    m = n(142120),
    p = n(594061),
    f = n(919638),
    g = n(403362),
    _ = n(157559),
    x = n(652215),
    A = n(355097),
    C = n(985018);
function E(e) {
    p.wc.updateAsync(
        "textAndImages",
        (t) => {
            (t.diversitySurrogate = r.hU.create()), (t.diversitySurrogate.value = e);
        },
        A.Sb.FREQUENT_USER_ACTION,
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
    let { guildId: t, image: n, name: i, roles: l, analyticsLocation: r } = e;
    return (
        o.h.dispatch({ type: "EMOJI_UPLOAD_START", guildId: t }),
        s.Bo.post({
            url: x.Rsh.GUILD_EMOJIS(t),
            body: { image: n, name: i, roles: l },
            context: { client_event_source: r?.page },
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
            a.O.announce(C.intl.string(C.t.L3UUha));
        })
    );
}
async function S(e) {
    let { guildId: t, emojiId: n, name: i, roles: l } = e;
    try {
        return await s.Bo.patch({
            url: x.Rsh.GUILD_EMOJI(t, n),
            body: { name: i, roles: l },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    } catch (e) {
        throw new c.A(e);
    }
}
function b(e) {
    if (f.A.totalUnavailableGuilds > 0 || !m.A.isConnected()) return e;
    let t = e.map((e) => u.Ay.getCustomEmojiById(e) ?? d.Ay.getByName(e)).filter(g.Vq);
    return [...(0, h.A)(t).keys()];
}
function N(e) {
    return null == e ? null : (e.id ?? d.Ay.convertSurrogateToBase(e.surrogates)?.name ?? e.name);
}
function T(e) {
    let t = N(e);
    null != t &&
        p.bW.updateAsync(
            "favoriteEmojis",
            (e) =>
                ((e.emojis = b(e.emojis)), l().size(e.emojis) >= 250)
                    ? (_.A.show({
                          title: C.intl.string(C.t["+XYXtZ"]),
                          body: C.intl.formatToPlainString(C.t.JaIyFi, { count: 250 }),
                      }),
                      !1)
                    : !e.emojis.includes(t) && void e.emojis.push(t),
            A.Sb.INFREQUENT_USER_ACTION,
        );
}
function j(e) {
    let t = N(e);
    null != t &&
        p.bW.updateAsync(
            "favoriteEmojis",
            (e) => {
                if (((e.emojis = b(e.emojis)), !e.emojis.includes(t))) return !1;
                e.emojis = e.emojis.filter((e) => t !== e);
            },
            A.Sb.INFREQUENT_USER_ACTION,
        );
}
