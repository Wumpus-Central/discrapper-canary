n.d(t, { A: () => M }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(837381),
    o = n(311907),
    d = n(397927),
    c = n(308528),
    u = n(442433),
    h = n(933958),
    A = n(969151),
    m = n(941971),
    p = n(900848),
    g = n(65611),
    _ = n(855725),
    f = n(366811),
    x = n(616356),
    C = n(734057),
    E = n(309010),
    I = n(977997),
    b = n(661191),
    N = n(181079),
    S = n(93055),
    T = n(210082),
    v = n(595567),
    y = n(332396),
    j = n(652215),
    R = n(985018),
    O = n(299446);
let L = { analyticsSource: { page: j.liQ.GUILD_CHANNEL, section: j.JJy.CHANNEL_LIST, object: j.ZSU.CHANNEL } };
function M() {
    let e,
        t,
        s,
        M,
        D,
        G,
        U,
        P,
        w,
        k,
        V,
        B,
        H = (0, r.Vd)("favorites"),
        { favoriteAdded: F, clearFavoriteAdded: K } = (0, S.CJ)(),
        [W, Y] = l.useState(!1),
        { favoriteServerMuted: z, favoriteChannels: q } = (0, o.cf)([N.A], () => ({
            favoriteChannels: N.A.getFavoriteChannels(),
            favoriteServerMuted: N.A.favoriteServerMuted,
        })),
        X = (0, o.bG)([E.A], () => E.A.getChannelId(j.YYv)),
        J = (0, o.bG)([C.A], () => C.A.getChannel(X)),
        Q = (0, f.A)((e) => e.guildId) === j.YYv,
        { badge: $, unread: Z } = (0, T.A)(q),
        ee =
            ((t = null != (e = (0, o.bG)([E.A], () => E.A.getVoiceChannelId())) && null != q[e]),
            (s = (0, o.bG)([x.A], () => {
                if (!t) return !1;
                let e = x.A.getCurrentUserActiveStream();
                return null != e && null != q[e.channelId];
            })),
            (M = (0, o.bG)([x.A], () => x.A.getAllApplicationStreams().some((e) => null != q[e.channelId]))),
            (D = (0, o.bG)([I.A], () => t && null != e && I.A.hasVideo(e), [t, e])),
            (G = (0, o.yK)([h.Ay], () =>
                b.default.keys(q).reduce((e, t) => (e.push(...h.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (U = (0, o.bG)([h.Ay], () =>
                Array.from(h.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, A.H)(t);
                    return null != n && null != q[n];
                }),
            )),
            (P = G.length > 0),
            (w = !1),
            (k = !1),
            (V = !1),
            (B = !1),
            t ? ((w = !D), (k = D), (V = s), (B = U)) : ((V = M), (B = P)),
            (0, g.oi)({ audio: w, video: k, screenshare: V, liveStage: !1, isCurrentUserConnected: t, activity: B })),
        et = $ > 0 ? (0, _.w)($) : null,
        en = l.useCallback(() => {
            K();
        }, [K]);
    return (0, i.jsxs)(p.c, {
        children: [
            (0, i.jsx)(m.A, { selected: Q, hovered: W, unread: Z && !z, className: O.Io }),
            (0, i.jsx)(y.A, {
                onShow: en,
                children: (0, i.jsx)(v.Q, {
                    children: (0, i.jsx)(d.Qk9, {
                        selected: !0,
                        upperBadge: ee,
                        lowerBadge: et,
                        children: (0, i.jsx)(d.jlP, {
                            ...H,
                            ariaLabel: R.intl.formatToPlainString(R.t["/uzRss"], {
                                guildName: R.intl.string(R.t.wMWyci),
                                mentions: $,
                            }),
                            "aria-selected": Q,
                            to: { pathname: j.BVt.CHANNEL(j.YYv, X), state: L },
                            selected: Q || W,
                            onMouseEnter: () => Y(!0),
                            onMouseLeave: () => Y(!1),
                            onMouseDown: function () {
                                null != J && c.A.preload(J.guild_id, J.id);
                            },
                            onContextMenu: function (e) {
                                (0, u.L3)(e, async () => {
                                    let { default: e } = await n.e("74654").then(n.bind(n, 521709));
                                    return (t) => (0, i.jsx)(e, { ...t });
                                });
                            },
                            children: (0, i.jsx)("div", {
                                className: a()(O.hN, { [O.b1]: F }),
                                children: (0, i.jsx)(d.Gg5, {
                                    size: "custom",
                                    color: "currentColor",
                                    className: O.wB,
                                    width: 20,
                                    height: 20,
                                }),
                            }),
                        }),
                    }),
                }),
            }),
        ],
    });
}
