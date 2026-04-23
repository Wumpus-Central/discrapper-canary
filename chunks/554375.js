"use strict";
n.d(t, { Cp: () => v, Gf: () => y, Sw: () => b, V4: () => R, ak: () => N, dK: () => T, dZ: () => S }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(562465),
    a = n(406935),
    o = n(765178),
    l = n(73153),
    u = n(181658),
    c = n(508675),
    d = n(7584),
    _ = n(635222),
    f = n(142120),
    p = n(594061),
    h = n(919638),
    E = n(403362),
    m = n(157559),
    g = n(652215),
    A = n(355097),
    I = n(985018);
function T(e) {
    p.wc.updateAsync(
        "textAndImages",
        (t) => {
            (t.diversitySurrogate = a.hU.create()), (t.diversitySurrogate.value = e);
        },
        A.Sb.FREQUENT_USER_ACTION,
    );
}
function S(e) {
    l.h.dispatch({ type: "EMOJI_FETCH", guildId: e }),
        s.Bo.get({ url: g.Rsh.GUILD_EMOJIS(e), oldFormErrors: !0, rejectWithError: !0 }).then(
            (t) => l.h.dispatch({ type: "EMOJI_FETCH_SUCCESS", guildId: e, emojis: t.body }),
            () => l.h.dispatch({ type: "EMOJI_FETCH_FAILURE", guildId: e }),
        );
}
function y(e) {
    let { guildId: t, image: n, name: r, roles: i, analyticsLocation: a } = e;
    return (
        l.h.dispatch({ type: "EMOJI_UPLOAD_START", guildId: t }),
        s.Bo.post({
            url: g.Rsh.GUILD_EMOJIS(t),
            body: { image: n, name: r, roles: i },
            context: { client_event_source: a?.page },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (e) => (l.h.dispatch({ type: "EMOJI_UPLOAD_STOP", guildId: t }), e.body),
            (e) => (l.h.dispatch({ type: "EMOJI_UPLOAD_STOP", guildId: t }), Promise.reject(e)),
        )
    );
}
function N(e, t, n) {
    return (
        l.h.dispatch({ type: "EMOJI_DELETE", guildId: e, emojiId: t }),
        s.Bo.del({
            url: g.Rsh.GUILD_EMOJI(e, t),
            body: null != n ? { replaced_by: n } : void 0,
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(() => {
            o.O.announce(I.intl.string(I.t.L3UUha));
        })
    );
}
async function v(e) {
    let { guildId: t, emojiId: n, name: r, roles: i } = e;
    try {
        return await s.Bo.patch({
            url: g.Rsh.GUILD_EMOJI(t, n),
            body: { name: r, roles: i },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    } catch (e) {
        throw new u.A(e);
    }
}
function C(e) {
    if (h.A.totalUnavailableGuilds > 0 || !f.A.isConnected()) return e;
    let t = e.map((e) => c.Ay.getCustomEmojiById(e) ?? d.Ay.getByName(e)).filter(E.Vq);
    return [...(0, _.A)(t).keys()];
}
function O(e) {
    return null == e ? null : (e.id ?? d.Ay.convertSurrogateToBase(e.surrogates)?.name ?? e.name);
}
function R(e) {
    let t = O(e);
    null != t &&
        p.bW.updateAsync(
            "favoriteEmojis",
            (e) =>
                ((e.emojis = C(e.emojis)), i().size(e.emojis) >= 250)
                    ? (m.A.show({
                          title: I.intl.string(I.t["+XYXtZ"]),
                          body: I.intl.formatToPlainString(I.t.JaIyFi, { count: 250 }),
                      }),
                      !1)
                    : !e.emojis.includes(t) && void e.emojis.push(t),
            A.Sb.INFREQUENT_USER_ACTION,
        );
}
function b(e) {
    let t = O(e);
    null != t &&
        p.bW.updateAsync(
            "favoriteEmojis",
            (e) => {
                if (((e.emojis = C(e.emojis)), !e.emojis.includes(t))) return !1;
                e.emojis = e.emojis.filter((e) => t !== e);
            },
            A.Sb.INFREQUENT_USER_ACTION,
        );
}
