"use strict";
n.d(t, { Cp: () => j, Gf: () => S, Sw: () => R, V4: () => b, ak: () => N, dK: () => y, dZ: () => v }), n(321073);
var l = n(735438),
    i = n.n(l),
    s = n(636537),
    a = n(406935),
    r = n(765178),
    o = n(228366),
    c = n(181658),
    u = n(870218),
    d = n(159273),
    h = n(7584),
    m = n(635222),
    p = n(446458),
    f = n(594061),
    g = n(919638),
    x = n(403362),
    C = n(157559),
    A = n(652215),
    E = n(355097),
    I = n(985018);
function y(e) {
    f.wc.updateAsync(
        "textAndImages",
        (t) => {
            (t.diversitySurrogate = a.hU.create()), (t.diversitySurrogate.value = e);
        },
        E.Sb.FREQUENT_USER_ACTION,
    );
}
function v(e) {
    o.h.dispatch({ type: "EMOJI_FETCH", guildId: e }),
        s.Bo.get({ url: A.Rsh.GUILD_EMOJIS(e), oldFormErrors: !0, rejectWithError: !0 }).then(
            (t) => o.h.dispatch({ type: "EMOJI_FETCH_SUCCESS", guildId: e, emojis: t.body }),
            () => o.h.dispatch({ type: "EMOJI_FETCH_FAILURE", guildId: e }),
        );
}
function S(e) {
    let { guildId: t, image: n, name: l, roles: i, analyticsLocation: a, originalMd5: r } = e;
    return (
        o.h.dispatch({ type: "EMOJI_UPLOAD_START", guildId: t }),
        s.Bo.post({
            url: A.Rsh.GUILD_EMOJIS(t),
            body: { image: n, name: l, roles: i },
            headers: u.A.buildHeadersForMd5(r),
            context: { client_event_source: a?.page },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (e) => (o.h.dispatch({ type: "EMOJI_UPLOAD_STOP", guildId: t }), e.body),
            (e) => (o.h.dispatch({ type: "EMOJI_UPLOAD_STOP", guildId: t }), Promise.reject(e)),
        )
    );
}
function N(e, t, n) {
    return (
        o.h.dispatch({ type: "EMOJI_DELETE", guildId: e, emojiId: t }),
        s.Bo.del({
            url: A.Rsh.GUILD_EMOJI(e, t),
            body: null != n ? { replaced_by: n } : void 0,
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(() => {
            r.O.announce(I.intl.string(I.t.L3UUha));
        })
    );
}
async function j(e) {
    let { guildId: t, emojiId: n, name: l, roles: i } = e;
    try {
        return await s.Bo.patch({
            url: A.Rsh.GUILD_EMOJI(t, n),
            body: { name: l, roles: i },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    } catch (e) {
        throw new c.A(e);
    }
}
function _(e) {
    if (g.A.totalUnavailableGuilds > 0 || !p.A.isConnected()) return e;
    let t = e.map((e) => d.Ay.getCustomEmojiById(e) ?? h.Ay.getByName(e)).filter(x.Vq);
    return [...(0, m.A)(t).keys()];
}
function T(e) {
    return null == e ? null : (e.id ?? h.Ay.convertSurrogateToBase(e.surrogates)?.name ?? e.name);
}
function b(e) {
    let t = T(e);
    null != t &&
        f.bW.updateAsync(
            "favoriteEmojis",
            (e) =>
                ((e.emojis = _(e.emojis)), i().size(e.emojis) >= 250)
                    ? (C.A.show({
                          title: I.intl.string(I.t["+XYXtZ"]),
                          body: I.intl.formatToPlainString(I.t.JaIyFi, { count: 250 }),
                      }),
                      !1)
                    : !e.emojis.includes(t) && void e.emojis.push(t),
            E.Sb.INFREQUENT_USER_ACTION,
        );
}
function R(e) {
    let t = T(e);
    null != t &&
        f.bW.updateAsync(
            "favoriteEmojis",
            (e) => {
                if (((e.emojis = _(e.emojis)), !e.emojis.includes(t))) return !1;
                e.emojis = e.emojis.filter((e) => t !== e);
            },
            E.Sb.INFREQUENT_USER_ACTION,
        );
}
