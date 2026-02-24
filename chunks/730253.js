"use strict";
n.d(t, { A: () => M }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(837381),
    o = n(311907),
    c = n(397927),
    d = n(308528),
    u = n(442433),
    h = n(933958),
    A = n(969151),
    p = n(941971),
    g = n(900848),
    m = n(65611),
    _ = n(855725),
    f = n(366811),
    x = n(616356),
    C = n(734057),
    E = n(309010),
    I = n(977997),
    N = n(661191),
    b = n(181079),
    S = n(93055),
    T = n(210082),
    y = n(595567),
    v = n(332396),
    j = n(652215),
    R = n(985018),
    O = n(4720);
let L = { analyticsSource: { page: j.liQ.GUILD_CHANNEL, section: j.JJy.CHANNEL_LIST, object: j.ZSU.CHANNEL } };
function M() {
    let e,
        t,
        l,
        M,
        D,
        G,
        U,
        P,
        w,
        k,
        V,
        B,
        H = (0, a.Vd)("favorites"),
        { favoriteAdded: F, clearFavoriteAdded: K } = (0, S.CJ)(),
        [W, Y] = s.useState(!1),
        { favoriteServerMuted: z, favoriteChannels: X } = (0, o.cf)([b.A], () => ({
            favoriteChannels: b.A.getFavoriteChannels(),
            favoriteServerMuted: b.A.favoriteServerMuted,
        })),
        q = (0, o.bG)([E.A], () => E.A.getChannelId(j.YYv)),
        J = (0, o.bG)([C.A], () => C.A.getChannel(q)),
        Q = (0, f.A)((e) => e.guildId) === j.YYv,
        { badge: $, unread: Z } = (0, T.A)(X),
        ee =
            ((t = null != (e = (0, o.bG)([E.A], () => E.A.getVoiceChannelId())) && null != X[e]),
            (l = (0, o.bG)([x.A], () => {
                if (!t) return !1;
                let e = x.A.getCurrentUserActiveStream();
                return null != e && null != X[e.channelId];
            })),
            (M = (0, o.bG)([x.A], () => x.A.getAllApplicationStreams().some((e) => null != X[e.channelId]))),
            (D = (0, o.bG)([I.A], () => t && null != e && I.A.hasVideo(e), [t, e])),
            (G = (0, o.yK)([h.Ay], () =>
                N.default.keys(X).reduce((e, t) => (e.push(...h.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (U = (0, o.bG)([h.Ay], () =>
                Array.from(h.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, A.H)(t);
                    return null != n && null != X[n];
                }),
            )),
            (P = G.length > 0),
            (w = !1),
            (k = !1),
            (V = !1),
            (B = !1),
            t ? ((w = !D), (k = D), (V = l), (B = U)) : ((V = M), (B = P)),
            (0, m.oi)({ audio: w, video: k, screenshare: V, liveStage: !1, isCurrentUserConnected: t, activity: B })),
        et = $ > 0 ? (0, _.w)($) : null,
        en = s.useCallback(() => {
            K();
        }, [K]);
    return (0, i.jsxs)(g.c, {
        children: [
            (0, i.jsx)(p.A, { selected: Q, hovered: W, unread: Z && !z, className: O.Io }),
            (0, i.jsx)(v.A, {
                onShow: en,
                children: (0, i.jsx)(y.Q, {
                    children: (0, i.jsx)(c.Qk9, {
                        selected: !0,
                        upperBadge: ee,
                        lowerBadge: et,
                        children: (0, i.jsx)(c.jlP, {
                            ...H,
                            ariaLabel: R.intl.formatToPlainString(R.t["/uzRss"], {
                                guildName: R.intl.string(R.t.wMWyci),
                                mentions: $,
                            }),
                            "aria-selected": Q,
                            to: { pathname: j.BVt.CHANNEL(j.YYv, q), state: L },
                            selected: Q || W,
                            onMouseEnter: () => Y(!0),
                            onMouseLeave: () => Y(!1),
                            onMouseDown: function () {
                                null != J && d.A.preload(J.guild_id, J.id);
                            },
                            onContextMenu: function (e) {
                                (0, u.L3)(e, async () => {
                                    let { default: e } = await n.e("74654").then(n.bind(n, 521709));
                                    return (t) => (0, i.jsx)(e, { ...t });
                                });
                            },
                            children: (0, i.jsx)("div", {
                                className: r()(O.hN, { [O.b1]: F }),
                                children: (0, i.jsx)(c.Gg5, {
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
