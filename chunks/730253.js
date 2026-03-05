"use strict";
n.d(t, { A: () => B }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(837381),
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
    b = n(734057),
    S = n(309010),
    T = n(977997),
    v = n(661191),
    y = n(181079),
    j = n(379587),
    R = n(93055),
    O = n(957300),
    L = n(210082),
    M = n(595567),
    D = n(332396),
    G = n(652215),
    U = n(49999),
    P = n(665606),
    w = n(985018),
    k = n(299446);
let V = { analyticsSource: { page: G.liQ.GUILD_CHANNEL, section: G.JJy.CHANNEL_LIST, object: G.ZSU.CHANNEL } };
function B() {
    let e,
        t,
        l,
        B,
        H,
        F,
        K,
        W,
        Y,
        z,
        q,
        X,
        J = (0, r.Vd)("favorites"),
        { favoriteAdded: Q, clearFavoriteAdded: $ } = (0, R.CJ)(),
        Z = s.useRef(null),
        [ee, et] = s.useState(!1),
        { favoriteGuildMuted: en, favoriteChannels: ei } = (0, o.cf)([y.A], () => ({
            favoriteChannels: y.A.getFavoriteChannels(),
            favoriteGuildMuted: y.A.favoriteGuildMuted,
        })),
        es = (0, o.bG)([S.A], () => S.A.getChannelId(G.YYv)),
        el = (0, o.bG)([b.A], () => b.A.getChannel(es)),
        ea = (0, I.A)((e) => e.guildId) === G.YYv,
        { badge: er, unread: eo } = (0, L.A)(ei),
        ec =
            ((t = null != (e = (0, o.bG)([S.A], () => S.A.getVoiceChannelId())) && null != ei[e]),
            (l = (0, o.bG)([N.A], () => {
                if (!t) return !1;
                let e = N.A.getCurrentUserActiveStream();
                return null != e && null != ei[e.channelId];
            })),
            (B = (0, o.bG)([N.A], () => N.A.getAllApplicationStreams().some((e) => null != ei[e.channelId]))),
            (H = (0, o.bG)([T.A], () => t && null != e && T.A.hasVideo(e), [t, e])),
            (F = (0, o.yK)([m.Ay], () =>
                v.default.keys(ei).reduce((e, t) => (e.push(...m.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (K = (0, o.bG)([m.Ay], () =>
                Array.from(m.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, p.H)(t);
                    return null != n && null != ei[n];
                }),
            )),
            (W = F.length > 0),
            (Y = !1),
            (z = !1),
            (q = !1),
            (X = !1),
            t ? ((Y = !H), (z = H), (q = l), (X = K)) : ((q = B), (X = W)),
            (0, x.oi)({ audio: Y, video: z, screenshare: q, liveStage: !1, isCurrentUserConnected: t, activity: X })),
        ed = er > 0 ? (0, C.w)(er) : null,
        eu = (0, j.m)({ location: "FavoritesButton" }).enabled,
        [eh, eA] = (0, g.kn)(eu ? [c.M.FAVORITES_SERVER_ONBOARDING_INTRO] : []),
        em = eh === c.M.FAVORITES_SERVER_ONBOARDING_INTRO,
        [ep] = (0, g.kn)(em ? [c.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : [], void 0, !0),
        eg = ep === c.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        e_ = s.useRef(!1),
        ef = (0, E.L)(),
        ex = s.useCallback(
            (e, t) => {
                (e_.current = !0), eA(e, t);
            },
            [eA],
        );
    s.useEffect(() => {
        eg && (e_.current = !1);
    }, [eg]),
        s.useEffect(
            () => () => {
                eg && !e_.current && ex(U.i.AUTO_DISMISS, !0);
            },
            [eg, ex],
        );
    let eC = s.useCallback(() => {
        $();
    }, [$]);
    return (0, i.jsxs)(f.c, {
        children: [
            (0, i.jsx)(_.A, { selected: ea, hovered: ee, unread: eo && !en, className: k.Io }),
            (0, i.jsx)(D.A, {
                onShow: eC,
                children: (0, i.jsx)(M.Q, {
                    children: (0, i.jsx)(u.Qk9, {
                        selected: !0,
                        upperBadge: ec,
                        lowerBadge: ed,
                        children: (0, i.jsx)(u.jlP, {
                            ...J,
                            ariaLabel: w.intl.formatToPlainString(w.t["/uzRss"], {
                                guildName: w.intl.string(w.t.wMWyci),
                                mentions: er,
                            }),
                            "aria-selected": ea,
                            to: { pathname: G.BVt.CHANNEL(G.YYv, es), state: V },
                            selected: ea || ee,
                            onMouseEnter: () => et(!0),
                            onMouseLeave: () => et(!1),
                            onMouseDown: function () {
                                null != el && h.A.preload(el.guild_id, el.id);
                            },
                            onContextMenu: function (e) {
                                if (O.E.getState().isPreviewMode) {
                                    e.preventDefault(), e.stopPropagation();
                                    return;
                                }
                                (0, A.L3)(e, async () => {
                                    let { default: e } = await n.e("38167").then(n.bind(n, 342186));
                                    return (t) => (0, i.jsx)(e, { ...t, navId: "favorite-server-context" });
                                });
                            },
                            children: (0, i.jsx)("div", {
                                ref: Z,
                                className: a()(k.hN, { [k.b1]: Q }),
                                children: (0, i.jsx)(u.Gg5, {
                                    size: "custom",
                                    color: "currentColor",
                                    className: k.wB,
                                    width: 20,
                                    height: 20,
                                }),
                            }),
                        }),
                    }),
                }),
            }),
            eg &&
                (0, i.jsx)(d.AM, {
                    targetElementRef: Z,
                    position: "right",
                    alignmentStrategy: "edge",
                    align: "top",
                    caretConfig: { align: "start" },
                    badge: { type: "beta" },
                    title: w.intl.string(P.default["bu/mLv"]),
                    body: w.intl.string(P.default["/x2jT7"]),
                    onRequestClose: () => ex(U.i.USER_DISMISS),
                    actions: [
                        {
                            icon: u.tvc,
                            text: ef ? w.intl.string(P.default["0lHa0Z"]) : w.intl.string(P.default["0nZZEk"]),
                            onClick: () => ex(U.i.TAKE_ACTION),
                        },
                    ],
                }),
        ],
    });
}
