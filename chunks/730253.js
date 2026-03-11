"use strict";
n.d(t, { A: () => F }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(837381),
    o = n(311907),
    c = n(342494),
    d = n(397927),
    u = n(308528),
    h = n(933958),
    A = n(969151),
    m = n(793574),
    p = n(688810),
    g = n(941971),
    _ = n(900848),
    f = n(65611),
    x = n(855725),
    C = n(532794),
    E = n(366811),
    I = n(345942),
    N = n(616356),
    b = n(734057),
    S = n(309010),
    T = n(977997),
    v = n(661191),
    y = n(181079),
    j = n(422258),
    R = n(93055),
    O = n(210082),
    L = n(780645),
    M = n(595567),
    D = n(332396),
    G = n(652215),
    U = n(49999),
    P = n(788868),
    w = n(665606),
    k = n(985018),
    V = n(299446),
    B = n(988572);
let H = { analyticsSource: { page: G.liQ.GUILD_CHANNEL, section: G.JJy.CHANNEL_LIST, object: G.ZSU.CHANNEL } };
function F(e) {
    let t,
        l,
        F,
        K,
        W,
        Y,
        z,
        q,
        X,
        J,
        Q,
        $,
        { shouldShowIntroPopover: Z, markIntroPopoverAsDismissed: ee } = e,
        et = (0, r.Vd)("favorites"),
        { favoriteAdded: en, clearFavoriteAdded: ei } = (0, R.CJ)(),
        es = s.useRef(null),
        { analyticsLocations: el } = (0, p.Ay)(m.A.FAVORITES_GUILD_BUTTON),
        [ea, er] = s.useState(!1),
        eo = (0, L.$)("FavoritesButton", "favorite-server-context"),
        {
            favoriteGuildEnabled: ec,
            favoriteGuildMuted: ed,
            favoriteChannels: eu,
        } = (0, o.cf)([y.A], () => ({
            favoriteGuildEnabled: y.A.favoriteGuildEnabled,
            favoriteChannels: y.A.getFavoriteChannels(),
            favoriteGuildMuted: y.A.favoriteGuildMuted,
        })),
        eh = (0, o.bG)([S.A], () => S.A.getChannelId(G.YYv)),
        eA = (0, o.bG)([b.A], () => b.A.getChannel(eh)),
        em = (0, E.A)((e) => e.guildId) === G.YYv,
        { badge: ep, unread: eg } = (0, O.A)(eu),
        e_ =
            ((l = null != (t = (0, o.bG)([S.A], () => S.A.getVoiceChannelId())) && null != eu[t]),
            (F = (0, o.bG)([N.A], () => {
                if (!l) return !1;
                let e = N.A.getCurrentUserActiveStream();
                return null != e && null != eu[e.channelId];
            })),
            (K = (0, o.bG)([N.A], () => N.A.getAllApplicationStreams().some((e) => null != eu[e.channelId]))),
            (W = (0, o.bG)([T.A], () => l && null != t && T.A.hasVideo(t), [l, t])),
            (Y = (0, o.yK)([h.Ay], () =>
                v.default.keys(eu).reduce((e, t) => (e.push(...h.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (z = (0, o.bG)([h.Ay], () =>
                Array.from(h.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, A.H)(t);
                    return null != n && null != eu[n];
                }),
            )),
            (q = Y.length > 0),
            (X = !1),
            (J = !1),
            (Q = !1),
            ($ = !1),
            l ? ((X = !W), (J = W), (Q = F), ($ = z)) : ((Q = K), ($ = q)),
            (0, f.oi)({ audio: X, video: J, screenshare: Q, liveStage: !1, isCurrentUserConnected: l, activity: $ })),
        ef = ep > 0 ? (0, x.w)(ep) : null,
        ex = s.useRef(!1),
        { hasAccess: eC } = (0, R.TW)("FavoritesButton"),
        eE = s.useCallback(
            (e, t) => {
                (ex.current = !0), ee(e, t);
            },
            [ee],
        ),
        eI = s.useCallback(
            (e) => {
                e && (0, I.u)(G.YYv),
                    eC
                        ? (ec || (0, j.tV)(!0),
                          e &&
                              (0, d.mMO)(async () => {
                                  let { default: e } = await n.e("15077").then(n.bind(n, 889186));
                                  return (t) => (0, i.jsx)(e, { ...t, parentId: null });
                              }))
                        : (0, C.A)({ subscriptionTier: P.pe.TIER_2, analyticsLocations: el }),
                    eE(U.i.TAKE_ACTION);
            },
            [eE, ec, eC, el],
        );
    s.useEffect(() => {
        Z && (ex.current = !1);
    }, [Z]),
        s.useEffect(
            () => () => {
                Z && !ex.current && eE(U.i.AUTO_DISMISS, !0);
            },
            [eE, Z],
        );
    let eN = s.useCallback(() => {
        ei();
    }, [ei]);
    return (0, i.jsxs)(_.c, {
        children: [
            (0, i.jsx)(g.A, { selected: em, hovered: ea, unread: eg && !ed, className: V.Io }),
            (0, i.jsx)(D.A, {
                onShow: eN,
                children: (0, i.jsx)(M.Q, {
                    children: (0, i.jsx)(d.Qk9, {
                        selected: !0,
                        upperBadge: e_,
                        lowerBadge: ef,
                        children: (0, i.jsx)(d.jlP, {
                            ...et,
                            ariaLabel: k.intl.formatToPlainString(k.t["/uzRss"], {
                                guildName: k.intl.string(k.t.wMWyci),
                                mentions: ep,
                            }),
                            "aria-selected": em,
                            to: { pathname: G.BVt.CHANNEL(G.YYv, eh), state: H },
                            selected: em || ea,
                            onClick: () => {
                                Z && eI(!1);
                            },
                            onMouseEnter: () => er(!0),
                            onMouseLeave: () => er(!1),
                            onMouseDown: function () {
                                null != eA && u.A.preload(eA.guild_id, eA.id);
                            },
                            onContextMenu: eo,
                            children: (0, i.jsx)("div", {
                                ref: es,
                                className: a()(V.hN, { [V.b1]: en }),
                                children: (0, i.jsx)(d.Gg5, {
                                    size: "custom",
                                    color: "currentColor",
                                    className: V.wB,
                                    width: 20,
                                    height: 20,
                                }),
                            }),
                        }),
                    }),
                }),
            }),
            Z &&
                (0, i.jsx)(c.AM, {
                    targetElementRef: es,
                    gradientColor: "purple",
                    position: "right",
                    alignmentStrategy: "edge",
                    align: "top",
                    caretConfig: { align: "start" },
                    badge: { type: "beta", variant: "expressive" },
                    graphic: { src: B.A, type: "image", aspectRatio: "16/9" },
                    title: k.intl.string(w.default["bu/mLv"]),
                    body: k.intl.string(w.default["/x2jT7"]),
                    onRequestClose: () => eE(U.i.USER_DISMISS),
                    actions: [
                        {
                            icon: d.tvc,
                            text: eC ? k.intl.string(w.default["0lHa0Z"]) : k.intl.string(w.default["0nZZEk"]),
                            onClick: () => eI(!0),
                            variant: eC ? void 0 : "expressive",
                        },
                    ],
                }),
        ],
    });
}
