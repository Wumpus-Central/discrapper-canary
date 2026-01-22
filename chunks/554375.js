n.d(t, {
    Cp: () => I,
    Gf: () => v,
    Sw: () => R,
    V4: () => N,
    ak: () => S,
    dK: () => O,
    dZ: () => A,
}),
    n(896048),
    n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(562465),
    s = n(406935),
    o = n(582754),
    l = n(73153),
    c = n(181658),
    u = n(508675),
    d = n(7584),
    f = n(635222),
    p = n(142120),
    _ = n(594061),
    h = n(919638),
    m = n(403362),
    g = n(157559),
    E = n(652215),
    b = n(355097),
    y = n(985018);

function O(e) {
    _.wc.updateAsync(
        "textAndImages",
        (t) => {
            (t.diversitySurrogate = s.hU.create()), (t.diversitySurrogate.value = e);
        },
        b.Sb.FREQUENT_USER_ACTION,
    );
}

function A(e) {
    l.h.dispatch({
        type: "EMOJI_FETCH",
        guildId: e,
    }),
        a.Bo.get({
            url: E.Rsh.GUILD_EMOJIS(e),
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (t) =>
                l.h.dispatch({
                    type: "EMOJI_FETCH_SUCCESS",
                    guildId: e,
                    emojis: t.body,
                }),
            () =>
                l.h.dispatch({
                    type: "EMOJI_FETCH_FAILURE",
                    guildId: e,
                }),
        );
}

function v(e) {
    let { guildId: t, image: n, name: r, roles: i, analyticsLocation: s } = e;
    return (
        l.h.dispatch({
            type: "EMOJI_UPLOAD_START",
            guildId: t,
        }),
        a.Bo.post({
            url: E.Rsh.GUILD_EMOJIS(t),
            body: {
                image: n,
                name: r,
                roles: i,
            },
            context: {
                client_event_source: null == s ? void 0 : s.page,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (e) => (
                l.h.dispatch({
                    type: "EMOJI_UPLOAD_STOP",
                    guildId: t,
                }),
                e.body
            ),
            (e) => (
                l.h.dispatch({
                    type: "EMOJI_UPLOAD_STOP",
                    guildId: t,
                }),
                Promise.reject(e)
            ),
        )
    );
}

function S(e, t, n) {
    return (
        l.h.dispatch({
            type: "EMOJI_DELETE",
            guildId: e,
            emojiId: t,
        }),
        a.Bo.del({
            url: E.Rsh.GUILD_EMOJI(e, t),
            body:
                null != n
                    ? {
                          replaced_by: n,
                      }
                    : void 0,
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(() => {
            o.OR.announce(y.intl.string(y.t.L3UUha));
        })
    );
}
async function I(e) {
    let { guildId: t, emojiId: n, name: r, roles: i } = e;
    try {
        return await a.Bo.patch({
            url: E.Rsh.GUILD_EMOJI(t, n),
            body: {
                name: r,
                roles: i,
            },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    } catch (e) {
        throw new c.A(e);
    }
}

function T(e) {
    if (h.A.totalUnavailableGuilds > 0 || !p.A.isConnected()) return e;
    let t = e
        .map((e) => {
            var t;
            return null != (t = u.Ay.getCustomEmojiById(e)) ? t : d.Ay.getByName(e);
        })
        .filter(m.Vq);
    return [...(0, f.A)(t).keys()];
}

function C(e) {
    var t, n, r;
    return null == e
        ? null
        : null !=
            (t = null != (n = e.id) ? n : null == (r = d.Ay.convertSurrogateToBase(e.surrogates)) ? void 0 : r.name)
          ? t
          : e.name;
}

function N(e) {
    let t = C(e);
    null != t &&
        _.bW.updateAsync(
            "favoriteEmojis",
            (e) =>
                ((e.emojis = T(e.emojis)), i().size(e.emojis) >= 250)
                    ? (g.A.show({
                          title: y.intl.string(y.t["+XYXtZ"]),
                          body: y.intl.formatToPlainString(y.t.JaIyFi, {
                              count: 250,
                          }),
                      }),
                      !1)
                    : !e.emojis.includes(t) && void e.emojis.push(t),
            b.Sb.INFREQUENT_USER_ACTION,
        );
}

function R(e) {
    let t = C(e);
    null != t &&
        _.bW.updateAsync(
            "favoriteEmojis",
            (e) => {
                if (((e.emojis = T(e.emojis)), !e.emojis.includes(t))) return !1;
                e.emojis = e.emojis.filter((e) => t !== e);
            },
            b.Sb.INFREQUENT_USER_ACTION,
        );
}
