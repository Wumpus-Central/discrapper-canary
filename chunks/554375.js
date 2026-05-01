"use strict";
n.d(t, { Cp: () => v, Gf: () => y, Sw: () => D, V4: () => b, ak: () => C, dK: () => S, dZ: () => N }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(636537),
    a = n(406935),
    o = n(765178),
    l = n(228366),
    u = n(181658),
    c = n(77257),
    d = n(159273),
    _ = n(7584),
    f = n(635222),
    h = n(587626),
    p = n(594061),
    E = n(919638),
    m = n(403362),
    g = n(157559),
    A = n(652215),
    I = n(355097),
    T = n(375708);
function S(e) {
    p.wc.updateAsync(
        "textAndImages",
        (t) => {
            (t.diversitySurrogate = a.hU.create()), (t.diversitySurrogate.value = e);
        },
        I.Sb.FREQUENT_USER_ACTION,
    );
}
function N(e) {
    l.h.dispatch({ type: "EMOJI_FETCH", guildId: e }),
        s.Bo.get({ url: A.Rsh.GUILD_EMOJIS(e), oldFormErrors: !0, rejectWithError: !0 }).then(
            (t) => l.h.dispatch({ type: "EMOJI_FETCH_SUCCESS", guildId: e, emojis: t.body }),
            () => l.h.dispatch({ type: "EMOJI_FETCH_FAILURE", guildId: e }),
        );
}
function y(e) {
    let { guildId: t, image: n, name: i, roles: r, analyticsLocation: a, originalMd5: o } = e;
    return (
        l.h.dispatch({ type: "EMOJI_UPLOAD_START", guildId: t }),
        s.Bo.post({
            url: A.Rsh.GUILD_EMOJIS(t),
            body: { image: n, name: i, roles: r },
            headers: c.A.buildHeadersForMd5(o),
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
            url: A.Rsh.GUILD_EMOJI(e, t),
            body: null != n ? { replaced_by: n } : void 0,
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(() => {
            o.O.announce(T.intl.string(T.t.L3UUha));
        })
    );
}
async function v(e) {
    let { guildId: t, emojiId: n, name: i, roles: r } = e;
    try {
        return await s.Bo.patch({
            url: A.Rsh.GUILD_EMOJI(t, n),
            body: { name: i, roles: r },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    } catch (e) {
        throw new u.A(e);
    }
}
function O(e) {
    if (E.A.totalUnavailableGuilds > 0 || !h.A.isConnected()) return e;
    let t = e.map((e) => d.Ay.getCustomEmojiById(e) ?? _.Ay.getByName(e)).filter(m.Vq);
    return [...(0, f.A)(t).keys()];
}
function R(e) {
    return null == e ? null : (e.id ?? _.Ay.convertSurrogateToBase(e.surrogates)?.name ?? e.name);
}
function b(e) {
    let t = R(e);
    null != t &&
        p.bW.updateAsync(
            "favoriteEmojis",
            (e) =>
                ((e.emojis = O(e.emojis)), r().size(e.emojis) >= 250)
                    ? (g.A.show({
                          title: T.intl.string(T.t["+XYXtZ"]),
                          body: T.intl.formatToPlainString(T.t.JaIyFi, { count: 250 }),
                      }),
                      !1)
                    : !e.emojis.includes(t) && void e.emojis.push(t),
            I.Sb.INFREQUENT_USER_ACTION,
        );
}
function D(e) {
    let t = R(e);
    null != t &&
        p.bW.updateAsync(
            "favoriteEmojis",
            (e) => {
                if (((e.emojis = O(e.emojis)), !e.emojis.includes(t))) return !1;
                e.emojis = e.emojis.filter((e) => t !== e);
            },
            I.Sb.INFREQUENT_USER_ACTION,
        );
}
