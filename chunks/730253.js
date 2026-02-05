n.d(t, { A: () => D }), n(321073);
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
    g = n(941971),
    m = n(900848),
    p = n(65611),
    _ = n(855725),
    x = n(366811),
    f = n(616356),
    E = n(734057),
    C = n(309010),
    I = n(977997),
    S = n(661191),
    b = n(181079),
    N = n(93055),
    T = n(210082),
    j = n(595567),
    v = n(332396),
    y = n(652215),
    R = n(985018),
    O = n(299446);
let L = { analyticsSource: { page: y.liQ.GUILD_CHANNEL, section: y.JJy.CHANNEL_LIST, object: y.ZSU.CHANNEL } };
function D() {
    let e,
        t,
        s,
        D,
        M,
        G,
        U,
        P,
        k,
        w,
        V,
        B,
        H = (0, r.Vd)("favorites"),
        { favoriteAdded: F, clearFavoriteAdded: Y } = (0, N.CJ)(),
        [W, K] = l.useState(!1),
        { favoriteServerMuted: z, favoriteChannels: X } = (0, o.cf)([b.A], () => ({
            favoriteChannels: b.A.getFavoriteChannels(),
            favoriteServerMuted: b.A.favoriteServerMuted,
        })),
        q = (0, o.bG)([C.A], () => C.A.getChannelId(y.YYv)),
        J = (0, o.bG)([E.A], () => E.A.getChannel(q)),
        Q = (0, x.A)((e) => e.guildId) === y.YYv,
        { badge: Z, unread: $ } = (0, T.A)(X),
        ee =
            ((t = null != (e = (0, o.bG)([C.A], () => C.A.getVoiceChannelId())) && null != X[e]),
            (s = (0, o.bG)([f.A], () => {
                if (!t) return !1;
                let e = f.A.getCurrentUserActiveStream();
                return null != e && null != X[e.channelId];
            })),
            (D = (0, o.bG)([f.A], () => f.A.getAllApplicationStreams().some((e) => null != X[e.channelId]))),
            (M = (0, o.bG)([I.A], () => t && null != e && I.A.hasVideo(e), [t, e])),
            (G = (0, o.yK)([h.Ay], () =>
                S.default.keys(X).reduce((e, t) => (e.push(...h.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (U = (0, o.bG)([h.Ay], () =>
                Array.from(h.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, A.H)(t);
                    return null != n && null != X[n];
                }),
            )),
            (P = G.length > 0),
            (k = !1),
            (w = !1),
            (V = !1),
            (B = !1),
            t ? ((k = !M), (w = M), (V = s), (B = U)) : ((V = D), (B = P)),
            (0, p.oi)({ audio: k, video: w, screenshare: V, liveStage: !1, isCurrentUserConnected: t, activity: B })),
        et = Z > 0 ? (0, _.w)(Z) : null,
        en = l.useCallback(() => {
            Y();
        }, [Y]);
    return (0, i.jsxs)(m.c, {
        children: [
            (0, i.jsx)(g.A, { selected: Q, hovered: W, unread: $ && !z, className: O.Io }),
            (0, i.jsx)(v.A, {
                onShow: en,
                children: (0, i.jsx)(j.Q, {
                    children: (0, i.jsx)(d.Qk9, {
                        selected: !0,
                        upperBadge: ee,
                        lowerBadge: et,
                        children: (0, i.jsx)(d.jlP, {
                            ...H,
                            ariaLabel: R.intl.formatToPlainString(R.t["/uzRss"], {
                                guildName: R.intl.string(R.t.wMWyci),
                                mentions: Z,
                            }),
                            "aria-selected": Q,
                            to: { pathname: y.BVt.CHANNEL(y.YYv, q), state: L },
                            selected: Q || W,
                            onMouseEnter: () => K(!0),
                            onMouseLeave: () => K(!1),
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
