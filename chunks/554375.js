(n.d(t, { Cp: () => T, Gf: () => x, Sw: () => R, V4: () => b, ak: () => O, dK: () => C, dZ: () => S }), n(321073));
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
    f = n(635222),
    E = n(595528),
    I = n(594061),
    h = n(919638),
    g = n(403362),
    p = n(157559),
    A = n(652215),
    _ = n(355097),
    N = n(105292);
function C(e) {
    I.wc.updateAsync(
        "textAndImages",
        (t) => {
            ((t.diversitySurrogate = r.hU.create()), (t.diversitySurrogate.value = e));
        },
        _.Sb.FREQUENT_USER_ACTION,
    );
}
function S(e) {
    (o.h.dispatch({ type: "EMOJI_FETCH", guildId: e }),
        l.Bo.get({ url: A.Rsh.GUILD_EMOJIS(e), oldFormErrors: !0, rejectWithError: !0 }).then(
            (t) => o.h.dispatch({ type: "EMOJI_FETCH_SUCCESS", guildId: e, emojis: t.body }),
            () => o.h.dispatch({ type: "EMOJI_FETCH_FAILURE", guildId: e }),
        ));
}
function x(e) {
    let { guildId: t, image: n, name: i, roles: s, analyticsLocation: r, originalMd5: a } = e;
    return (
        o.h.dispatch({ type: "EMOJI_UPLOAD_START", guildId: t }),
        l.Bo.post({
            url: A.Rsh.GUILD_EMOJIS(t),
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
function O(e, t, n) {
    return (
        o.h.dispatch({ type: "EMOJI_DELETE", guildId: e, emojiId: t }),
        l.Bo.del({
            url: A.Rsh.GUILD_EMOJI(e, t),
            body: null != n ? { replaced_by: n } : void 0,
            oldFormErrors: !0,
            rejectWithError: (0, l.fT)(),
        }).then(() => {
            a.O.announce(N.intl.string(N.t.L3UUha));
        })
    );
}
async function T(e) {
    let { guildId: t, emojiId: n, name: i, roles: s } = e;
    try {
        return await l.Bo.patch({
            url: A.Rsh.GUILD_EMOJI(t, n),
            body: { name: i, roles: s },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    } catch (e) {
        throw new c.A(e);
    }
}
function j(e) {
    if (h.A.totalUnavailableGuilds > 0 || !E.A.isConnected()) return e;
    let t = e.map((e) => d.Ay.getCustomEmojiById(e) ?? m.Ay.getByName(e)).filter(g.Vq);
    return [...(0, f.A)(t).keys()];
}
function y(e) {
    return null == e ? null : (e.id ?? m.Ay.convertSurrogateToBase(e.surrogates)?.name ?? e.name);
}
function b(e) {
    let t = y(e);
    null != t &&
        I.bW.updateAsync(
            "favoriteEmojis",
            (e) =>
                ((e.emojis = j(e.emojis)), s().size(e.emojis) >= 250)
                    ? (p.A.show({
                          title: N.intl.string(N.t["+XYXtZ"]),
                          body: N.intl.formatToPlainString(N.t.JaIyFi, { count: 250 }),
                      }),
                      !1)
                    : !e.emojis.includes(t) && void e.emojis.push(t),
            _.Sb.INFREQUENT_USER_ACTION,
        );
}
function R(e) {
    let t = y(e);
    null != t &&
        I.bW.updateAsync(
            "favoriteEmojis",
            (e) => {
                if (((e.emojis = j(e.emojis)), !e.emojis.includes(t))) return !1;
                e.emojis = e.emojis.filter((e) => t !== e);
            },
            _.Sb.INFREQUENT_USER_ACTION,
        );
}
