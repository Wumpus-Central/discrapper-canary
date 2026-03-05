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
    A = n(442433),
    m = n(933958),
    p = n(969151),
    g = n(932001),
    _ = n(941971),
    f = n(900848),
    x = n(65611),
    C = n(855725),
    E = n(757036),
    I = n(366811),
    N = n(616356),
    S = n(734057),
    b = n(309010),
    T = n(977997),
    v = n(661191),
    y = n(181079),
    j = n(379587),
    R = n(93055),
    O = n(210082),
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
        l,
        V,
        B,
        H,
        F,
        K,
        W,
        Y,
        z,
        q,
        X = (0, a.Vd)("favorites"),
        { favoriteAdded: J, clearFavoriteAdded: Q } = (0, R.CJ)(),
        $ = s.useRef(null),
        [Z, ee] = s.useState(!1),
        { favoriteGuildMuted: et, favoriteChannels: en } = (0, o.cf)([y.A], () => ({
            favoriteChannels: y.A.getFavoriteChannels(),
            favoriteGuildMuted: y.A.favoriteGuildMuted,
        })),
        ei = (0, o.bG)([b.A], () => b.A.getChannelId(D.YYv)),
        es = (0, o.bG)([S.A], () => S.A.getChannel(ei)),
        el = (0, I.A)((e) => e.guildId) === D.YYv,
        { badge: er, unread: ea } = (0, O.A)(en),
        eo =
            ((t = null != (e = (0, o.bG)([b.A], () => b.A.getVoiceChannelId())) && null != en[e]),
            (l = (0, o.bG)([N.A], () => {
                if (!t) return !1;
                let e = N.A.getCurrentUserActiveStream();
                return null != e && null != en[e.channelId];
            })),
            (V = (0, o.bG)([N.A], () => N.A.getAllApplicationStreams().some((e) => null != en[e.channelId]))),
            (B = (0, o.bG)([T.A], () => t && null != e && T.A.hasVideo(e), [t, e])),
            (H = (0, o.yK)([m.Ay], () =>
                v.default.keys(en).reduce((e, t) => (e.push(...m.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (F = (0, o.bG)([m.Ay], () =>
                Array.from(m.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, p.H)(t);
                    return null != n && null != en[n];
                }),
            )),
            (K = H.length > 0),
            (W = !1),
            (Y = !1),
            (z = !1),
            (q = !1),
            t ? ((W = !B), (Y = B), (z = l), (q = F)) : ((z = V), (q = K)),
            (0, x.oi)({ audio: W, video: Y, screenshare: z, liveStage: !1, isCurrentUserConnected: t, activity: q })),
        ec = er > 0 ? (0, C.w)(er) : null,
        ed = (0, j.m)({ location: "FavoritesButton" }).enabled,
        [eu, eh] = (0, g.kn)(ed ? [c.M.FAVORITES_SERVER_ONBOARDING_INTRO] : []),
        eA = eu === c.M.FAVORITES_SERVER_ONBOARDING_INTRO,
        [em] = (0, g.kn)(eA ? [c.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : [], void 0, !0),
        ep = em === c.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        eg = s.useRef(!1),
        e_ = (0, E.L)(),
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
        Q();
    }, [Q]);
    return (0, i.jsxs)(f.c, {
        children: [
            (0, i.jsx)(_.A, { selected: el, hovered: Z, unread: ea && !et, className: w.Io }),
            (0, i.jsx)(M.A, {
                onShow: ex,
                children: (0, i.jsx)(L.Q, {
                    children: (0, i.jsx)(u.Qk9, {
                        selected: !0,
                        upperBadge: eo,
                        lowerBadge: ec,
                        children: (0, i.jsx)(u.jlP, {
                            ...X,
                            ariaLabel: P.intl.formatToPlainString(P.t["/uzRss"], {
                                guildName: P.intl.string(P.t.wMWyci),
                                mentions: er,
                            }),
                            "aria-selected": el,
                            to: { pathname: D.BVt.CHANNEL(D.YYv, ei), state: k },
                            selected: el || Z,
                            onMouseEnter: () => ee(!0),
                            onMouseLeave: () => ee(!1),
                            onMouseDown: function () {
                                null != es && h.A.preload(es.guild_id, es.id);
                            },
                            onContextMenu: function (e) {
                                (0, A.L3)(e, async () => {
                                    let { default: e } = await n.e("74654").then(n.bind(n, 521709));
                                    return (t) => (0, i.jsx)(e, { ...t });
                                });
                            },
                            children: (0, i.jsx)("div", {
                                ref: $,
                                className: r()(w.hN, { [w.b1]: J }),
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
                    targetElementRef: $,
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
