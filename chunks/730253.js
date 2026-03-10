"use strict";
n.d(t, { A: () => V }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(837381),
    o = n(311907),
    c = n(554146),
    d = n(342494),
    u = n(397927),
    h = n(308528),
    A = n(933958),
    m = n(969151),
    p = n(932001),
    g = n(941971),
    _ = n(900848),
    f = n(65611),
    x = n(855725),
    C = n(757036),
    E = n(366811),
    I = n(616356),
    N = n(734057),
    b = n(309010),
    S = n(977997),
    T = n(661191),
    v = n(181079),
    y = n(379587),
    j = n(93055),
    R = n(210082),
    O = n(780645),
    L = n(595567),
    M = n(332396),
    D = n(652215),
    G = n(49999),
    U = n(665606),
    P = n(985018),
    w = n(299446);
let k = { analyticsSource: { page: D.liQ.GUILD_CHANNEL, section: D.JJy.CHANNEL_LIST, object: D.ZSU.CHANNEL } };
function V() {
    let e,
        t,
        n,
        l,
        V,
        B,
        H,
        F,
        K,
        W,
        Y,
        z,
        q = (0, a.Vd)("favorites"),
        { favoriteAdded: X, clearFavoriteAdded: J } = (0, j.CJ)(),
        Q = s.useRef(null),
        [$, Z] = s.useState(!1),
        ee = (0, O.$)("FavoritesButton", "favorite-server-context"),
        { favoriteGuildMuted: et, favoriteChannels: en } = (0, o.cf)([v.A], () => ({
            favoriteChannels: v.A.getFavoriteChannels(),
            favoriteGuildMuted: v.A.favoriteGuildMuted,
        })),
        ei = (0, o.bG)([b.A], () => b.A.getChannelId(D.YYv)),
        es = (0, o.bG)([N.A], () => N.A.getChannel(ei)),
        el = (0, E.A)((e) => e.guildId) === D.YYv,
        { badge: er, unread: ea } = (0, R.A)(en),
        eo =
            ((t = null != (e = (0, o.bG)([b.A], () => b.A.getVoiceChannelId())) && null != en[e]),
            (n = (0, o.bG)([I.A], () => {
                if (!t) return !1;
                let e = I.A.getCurrentUserActiveStream();
                return null != e && null != en[e.channelId];
            })),
            (l = (0, o.bG)([I.A], () => I.A.getAllApplicationStreams().some((e) => null != en[e.channelId]))),
            (V = (0, o.bG)([S.A], () => t && null != e && S.A.hasVideo(e), [t, e])),
            (B = (0, o.yK)([A.Ay], () =>
                T.default.keys(en).reduce((e, t) => (e.push(...A.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (H = (0, o.bG)([A.Ay], () =>
                Array.from(A.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, m.H)(t);
                    return null != n && null != en[n];
                }),
            )),
            (F = B.length > 0),
            (K = !1),
            (W = !1),
            (Y = !1),
            (z = !1),
            t ? ((K = !V), (W = V), (Y = n), (z = H)) : ((Y = l), (z = F)),
            (0, f.oi)({ audio: K, video: W, screenshare: Y, liveStage: !1, isCurrentUserConnected: t, activity: z })),
        ec = er > 0 ? (0, x.w)(er) : null,
        ed = (0, y.m)({ location: "FavoritesButton" }).enabled,
        [eu, eh] = (0, p.kn)(ed ? [c.M.FAVORITES_SERVER_ONBOARDING_INTRO] : []),
        eA = eu === c.M.FAVORITES_SERVER_ONBOARDING_INTRO,
        [em] = (0, p.kn)(eA ? [c.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : [], void 0, !0),
        ep = em === c.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        eg = s.useRef(!1),
        e_ = (0, C.L)(),
        ef = s.useCallback(
            (e, t) => {
                (eg.current = !0), eh(e, t);
            },
            [eh],
        );
    s.useEffect(() => {
        ep && (eg.current = !1);
    }, [ep]),
        s.useEffect(
            () => () => {
                ep && !eg.current && ef(G.i.AUTO_DISMISS, !0);
            },
            [ep, ef],
        );
    let ex = s.useCallback(() => {
        J();
    }, [J]);
    return (0, i.jsxs)(_.c, {
        children: [
            (0, i.jsx)(g.A, { selected: el, hovered: $, unread: ea && !et, className: w.Io }),
            (0, i.jsx)(M.A, {
                onShow: ex,
                children: (0, i.jsx)(L.Q, {
                    children: (0, i.jsx)(u.Qk9, {
                        selected: !0,
                        upperBadge: eo,
                        lowerBadge: ec,
                        children: (0, i.jsx)(u.jlP, {
                            ...q,
                            ariaLabel: P.intl.formatToPlainString(P.t["/uzRss"], {
                                guildName: P.intl.string(P.t.wMWyci),
                                mentions: er,
                            }),
                            "aria-selected": el,
                            to: { pathname: D.BVt.CHANNEL(D.YYv, ei), state: k },
                            selected: el || $,
                            onMouseEnter: () => Z(!0),
                            onMouseLeave: () => Z(!1),
                            onMouseDown: function () {
                                null != es && h.A.preload(es.guild_id, es.id);
                            },
                            onContextMenu: ee,
                            children: (0, i.jsx)("div", {
                                ref: Q,
                                className: r()(w.hN, { [w.b1]: X }),
                                children: (0, i.jsx)(u.Gg5, {
                                    size: "custom",
                                    color: "currentColor",
                                    className: w.wB,
                                    width: 20,
                                    height: 20,
                                }),
                            }),
                        }),
                    }),
                }),
            }),
            ep &&
                (0, i.jsx)(d.AM, {
                    targetElementRef: Q,
                    position: "right",
                    alignmentStrategy: "edge",
                    align: "top",
                    caretConfig: { align: "start" },
                    badge: { type: "beta" },
                    title: P.intl.string(U.default["bu/mLv"]),
                    body: P.intl.string(U.default["/x2jT7"]),
                    onRequestClose: () => ef(G.i.USER_DISMISS),
                    actions: [
                        {
                            icon: u.tvc,
                            text: e_ ? P.intl.string(U.default["0lHa0Z"]) : P.intl.string(U.default["0nZZEk"]),
                            onClick: () => ef(G.i.TAKE_ACTION),
                        },
                    ],
                }),
        ],
    });
}
