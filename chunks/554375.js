(n.d(t, { Cp: () => O, Gf: () => j, Sw: () => v, V4: () => R, ak: () => T, dK: () => x, dZ: () => y }), n(321073));
var i = n(435558),
    s = n.n(i),
    l = n(636537),
    r = n(406935),
    a = n(765178),
    o = n(73153),
    c = n(181658),
    u = n(268429),
    d = n(236285),
    m = n(7584),
    f = n(182159),
    E = n(635222),
    I = n(276602),
    g = n(594061),
    h = n(919638),
    p = n(403362),
    A = n(157559),
    _ = n(652215),
    N = n(355097),
    C = n(105292);
function x(e) {
    g.wc.updateAsync(
        "textAndImages",
        (t) => {
            ((t.diversitySurrogate = r.hU.create()), (t.diversitySurrogate.value = e));
        },
        N.Sb.FREQUENT_USER_ACTION,
    );
}
function y(e) {
    (o.h.dispatch({ type: "EMOJI_FETCH", guildId: e }),
        l.Bo.get({ url: _.Rsh.GUILD_EMOJIS(e), oldFormErrors: !0, rejectWithError: !0 }).then(
            (t) => o.h.dispatch({ type: "EMOJI_FETCH_SUCCESS", guildId: e, emojis: t.body }),
            () => o.h.dispatch({ type: "EMOJI_FETCH_FAILURE", guildId: e }),
        ));
}
function j(e) {
    let { guildId: t, image: n, name: i, roles: s, analyticsLocation: r, originalMd5: a } = e;
    return (
        o.h.dispatch({ type: "EMOJI_UPLOAD_START", guildId: t }),
        l.Bo.post({
            url: _.Rsh.GUILD_EMOJIS(t),
            body: { image: n, name: i, roles: s },
            headers: u.A.buildHeadersForMd5(a),
            context: { client_event_source: r?.page },
            oldFormErrors: !0,
            rejectWithError: (0, l.fT)(),
        }).then(
            (e) => (o.h.dispatch({ type: "EMOJI_UPLOAD_STOP", guildId: t }), e.body),
            (e) => (o.h.dispatch({ type: "EMOJI_UPLOAD_STOP", guildId: t }), Promise.reject(e)),
        )
    );
}
function T(e, t, n) {
    return (
        o.h.dispatch({ type: "EMOJI_DELETE", guildId: e, emojiId: t }),
        l.Bo.del({
            url: _.Rsh.GUILD_EMOJI(e, t),
            body: null != n ? { replaced_by: n } : void 0,
            oldFormErrors: !0,
            rejectWithError: (0, l.fT)(),
        }).then(() => {
            a.O.announce(C.intl.string(C.t.L3UUha));
        })
    );
}
async function O(e) {
    let { guildId: t, emojiId: n, name: i, roles: s } = e;
    try {
        return await l.Bo.patch({
            url: _.Rsh.GUILD_EMOJI(t, n),
            body: { name: i, roles: s },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    } catch (e) {
        throw new c.A(e);
    }
}
function S(e) {
    if (h.A.totalUnavailableGuilds > 0 || !I.A.isConnected()) return e;
    let t = e.map((e) => d.Ay.getCustomEmojiById(e) ?? f.A.getEmoji(e) ?? m.Ay.getByName(e)).filter(p.Vq);
    return [...(0, E.A)(t).keys()];
}
function b(e) {
    return null == e ? null : (e.id ?? m.Ay.convertSurrogateToBase(e.surrogates)?.name ?? e.name);
}
function R(e) {
    let t = b(e);
    null != t &&
        g.bW.updateAsync(
            "favoriteEmojis",
            (e) =>
                ((e.emojis = S(e.emojis)), s().size(e.emojis) >= 250)
                    ? (A.A.show({
                          title: C.intl.string(C.t["+XYXtZ"]),
                          body: C.intl.formatToPlainString(C.t.JaIyFi, { count: 250 }),
                      }),
                      !1)
                    : !e.emojis.includes(t) && void e.emojis.push(t),
            N.Sb.INFREQUENT_USER_ACTION,
        );
}
function v(e) {
    let t = b(e);
    null != t &&
        g.bW.updateAsync(
            "favoriteEmojis",
            (e) => {
                if (((e.emojis = S(e.emojis)), !e.emojis.includes(t))) return !1;
                e.emojis = e.emojis.filter((e) => t !== e);
            },
            N.Sb.INFREQUENT_USER_ACTION,
        );
}
