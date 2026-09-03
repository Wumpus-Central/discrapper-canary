n.d(t, { Cp: () => _, Gf: () => N, Sw: () => R, V4: () => b, ak: () => v, dK: () => y, dZ: () => S }), n(321073);
var l = n(435558),
    i = n.n(l),
    s = n(636537),
    r = n(406935),
    a = n(765178),
    o = n(228366),
    u = n(181658),
    c = n(268429),
    d = n(236285),
    h = n(7584),
    m = n(635222),
    f = n(597643),
    p = n(594061),
    g = n(919638),
    x = n(403362),
    A = n(157559),
    E = n(652215),
    C = n(355097),
    I = n(375708);
function y(e) {
    p.wc.updateAsync(
        "textAndImages",
        (t) => {
            (t.diversitySurrogate = r.hU.create()), (t.diversitySurrogate.value = e);
        },
        C.Sb.FREQUENT_USER_ACTION,
    );
}
function S(e) {
    o.h.dispatch({ type: "EMOJI_FETCH", guildId: e }),
        s.Bo.get({ url: E.Rsh.GUILD_EMOJIS(e), oldFormErrors: !0, rejectWithError: !0 }).then(
            (t) => o.h.dispatch({ type: "EMOJI_FETCH_SUCCESS", guildId: e, emojis: t.body }),
            () => o.h.dispatch({ type: "EMOJI_FETCH_FAILURE", guildId: e }),
        );
}
function N(e) {
    let { guildId: t, image: n, name: l, roles: i, analyticsLocation: r, originalMd5: a } = e;
    return (
        o.h.dispatch({ type: "EMOJI_UPLOAD_START", guildId: t }),
        s.Bo.post({
            url: E.Rsh.GUILD_EMOJIS(t),
            body: { image: n, name: l, roles: i },
            headers: c.A.buildHeadersForMd5(a),
            context: { client_event_source: r?.page },
            oldFormErrors: !0,
            rejectWithError: (0, s.fT)(),
        }).then(
            (e) => (o.h.dispatch({ type: "EMOJI_UPLOAD_STOP", guildId: t }), e.body),
            (e) => (o.h.dispatch({ type: "EMOJI_UPLOAD_STOP", guildId: t }), Promise.reject(e)),
        )
    );
}
function v(e, t, n) {
    return (
        o.h.dispatch({ type: "EMOJI_DELETE", guildId: e, emojiId: t }),
        s.Bo.del({
            url: E.Rsh.GUILD_EMOJI(e, t),
            body: null != n ? { replaced_by: n } : void 0,
            oldFormErrors: !0,
            rejectWithError: (0, s.fT)(),
        }).then(() => {
            a.O.announce(I.intl.string(I.t.L3UUha));
        })
    );
}
async function _(e) {
    let { guildId: t, emojiId: n, name: l, roles: i } = e;
    try {
        return await s.Bo.patch({
            url: E.Rsh.GUILD_EMOJI(t, n),
            body: { name: l, roles: i },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    } catch (e) {
        throw new u.A(e);
    }
}
function T(e) {
    if (g.A.totalUnavailableGuilds > 0 || !f.A.isConnected()) return e;
    let t = e.map((e) => d.Ay.getCustomEmojiById(e) ?? h.Ay.getByName(e)).filter(x.Vq);
    return [...(0, m.A)(t).keys()];
}
function j(e) {
    return null == e ? null : (e.id ?? h.Ay.convertSurrogateToBase(e.surrogates)?.name ?? e.name);
}
function b(e) {
    let t = j(e);
    null != t &&
        p.bW.updateAsync(
            "favoriteEmojis",
            (e) =>
                ((e.emojis = T(e.emojis)), i().size(e.emojis) >= 250)
                    ? (A.A.show({
                          title: I.intl.string(I.t["+XYXtZ"]),
                          body: I.intl.formatToPlainString(I.t.JaIyFi, { count: 250 }),
                      }),
                      !1)
                    : !e.emojis.includes(t) && void e.emojis.push(t),
            C.Sb.INFREQUENT_USER_ACTION,
        );
}
function R(e) {
    let t = j(e);
    null != t &&
        p.bW.updateAsync(
            "favoriteEmojis",
            (e) => {
                if (((e.emojis = T(e.emojis)), !e.emojis.includes(t))) return !1;
                e.emojis = e.emojis.filter((e) => t !== e);
            },
            C.Sb.INFREQUENT_USER_ACTION,
        );
}
