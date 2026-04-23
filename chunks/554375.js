"use strict";
n.d(t, { Cp: () => R, Gf: () => N, Sw: () => D, V4: () => v, ak: () => C, dK: () => T, dZ: () => S }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(636537),
    a = n(406935),
    o = n(765178),
    l = n(228366),
    d = n(181658),
    _ = n(159273),
    u = n(7584),
    c = n(635222),
    E = n(366853),
    h = n(594061),
    m = n(919638),
    f = n(403362),
    g = n(157559),
    p = n(652215),
    A = n(355097),
    I = n(985018);
function T(e) {
    h.wc.updateAsync(
        "textAndImages",
        (t) => {
            (t.diversitySurrogate = a.hU.create()), (t.diversitySurrogate.value = e);
        },
        A.Sb.FREQUENT_USER_ACTION,
    );
}
function S(e) {
    l.h.dispatch({ type: "EMOJI_FETCH", guildId: e }),
        s.Bo.get({ url: p.Rsh.GUILD_EMOJIS(e), oldFormErrors: !0, rejectWithError: !0 }).then(
            (t) => l.h.dispatch({ type: "EMOJI_FETCH_SUCCESS", guildId: e, emojis: t.body }),
            () => l.h.dispatch({ type: "EMOJI_FETCH_FAILURE", guildId: e }),
        );
}
function N(e) {
    let { guildId: t, image: n, name: i, roles: r, analyticsLocation: a } = e;
    return (
        l.h.dispatch({ type: "EMOJI_UPLOAD_START", guildId: t }),
        s.Bo.post({
            url: p.Rsh.GUILD_EMOJIS(t),
            body: { image: n, name: i, roles: r },
            context: { client_event_source: a?.page },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (e) => (l.h.dispatch({ type: "EMOJI_UPLOAD_STOP", guildId: t }), e.body),
            (e) => (l.h.dispatch({ type: "EMOJI_UPLOAD_STOP", guildId: t }), Promise.reject(e)),
        )
    );
}
function C(e, t, n) {
    return (
        l.h.dispatch({ type: "EMOJI_DELETE", guildId: e, emojiId: t }),
        s.Bo.del({
            url: p.Rsh.GUILD_EMOJI(e, t),
            body: null != n ? { replaced_by: n } : void 0,
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(() => {
            o.O.announce(I.intl.string(I.t.L3UUha));
        })
    );
}
async function R(e) {
    let { guildId: t, emojiId: n, name: i, roles: r } = e;
    try {
        return await s.Bo.patch({
            url: p.Rsh.GUILD_EMOJI(t, n),
            body: { name: i, roles: r },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    } catch (e) {
        throw new d.A(e);
    }
}
function O(e) {
    if (m.A.totalUnavailableGuilds > 0 || !E.A.isConnected()) return e;
    let t = e.map((e) => _.Ay.getCustomEmojiById(e) ?? u.Ay.getByName(e)).filter(f.Vq);
    return [...(0, c.A)(t).keys()];
}
function y(e) {
    return null == e ? null : (e.id ?? u.Ay.convertSurrogateToBase(e.surrogates)?.name ?? e.name);
}
function v(e) {
    let t = y(e);
    null != t &&
        h.bW.updateAsync(
            "favoriteEmojis",
            (e) =>
                ((e.emojis = O(e.emojis)), r().size(e.emojis) >= 250)
                    ? (g.A.show({
                          title: I.intl.string(I.t["+XYXtZ"]),
                          body: I.intl.formatToPlainString(I.t.JaIyFi, { count: 250 }),
                      }),
                      !1)
                    : !e.emojis.includes(t) && void e.emojis.push(t),
            A.Sb.INFREQUENT_USER_ACTION,
        );
}
function D(e) {
    let t = y(e);
    null != t &&
        h.bW.updateAsync(
            "favoriteEmojis",
            (e) => {
                if (((e.emojis = O(e.emojis)), !e.emojis.includes(t))) return !1;
                e.emojis = e.emojis.filter((e) => t !== e);
            },
            A.Sb.INFREQUENT_USER_ACTION,
        );
}
