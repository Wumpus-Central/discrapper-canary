"use strict";
n.d(t, { A: () => B }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(837381),
    r = n(311907),
    a = n(342494),
    o = n(397927),
    c = n(308528),
    d = n(933958),
    u = n(969151),
    h = n(793574),
    A = n(688810),
    m = n(941971),
    p = n(900848),
    g = n(65611),
    _ = n(855725),
    f = n(532794),
    x = n(366811),
    C = n(345942),
    E = n(616356),
    I = n(734057),
    N = n(309010),
    b = n(977997),
    S = n(661191),
    T = n(181079),
    v = n(422258),
    y = n(93055),
    j = n(210082),
    R = n(780645),
    O = n(332396),
    L = n(652215),
    M = n(97483),
    D = n(49999),
    G = n(788868),
    U = n(665606),
    P = n(985018),
    w = n(299446),
    k = n(988572);
let V = { analyticsSource: { page: L.liQ.GUILD_CHANNEL, section: L.JJy.CHANNEL_LIST, object: L.ZSU.CHANNEL } };
function B(e) {
    let t,
        B,
        H,
        F,
        K,
        Y,
        W,
        z,
        q,
        X,
        Q,
        J,
        { shouldShowIntroPopover: $, markIntroPopoverAsDismissed: Z } = e,
        ee = (0, l.Vd)("favorites"),
        { favoriteAdded: et, clearFavoriteAdded: en } = (0, y.CJ)(),
        ei = s.useRef(null),
        { analyticsLocations: es } = (0, A.Ay)(h.A.FAVORITES_GUILD_BUTTON),
        [el, er] = s.useState(!1),
        ea = (0, R.$)("favorite-server-context"),
        {
            favoriteGuildEnabled: eo,
            favoriteGuildMuted: ec,
            favoriteChannels: ed,
        } = (0, r.cf)([T.A], () => ({
            favoriteGuildEnabled: T.A.favoriteGuildEnabled,
            favoriteChannels: T.A.getFavoriteChannels(),
            favoriteGuildMuted: T.A.favoriteGuildMuted,
        })),
        eu = (0, r.bG)([N.A], () => N.A.getChannelId(L.YYv)),
        eh = (0, r.bG)([I.A], () => I.A.getChannel(eu)),
        eA = (0, x.A)((e) => e.guildId) === L.YYv,
        { badge: em, unread: ep } = (0, j.A)(ed),
        eg =
            ((B = null != (t = (0, r.bG)([N.A], () => N.A.getVoiceChannelId())) && null != ed[t]),
            (H = (0, r.bG)([E.A], () => {
                if (!B) return !1;
                let e = E.A.getCurrentUserActiveStream();
                return null != e && null != ed[e.channelId];
            })),
            (F = (0, r.bG)([E.A], () => E.A.getAllApplicationStreams().some((e) => null != ed[e.channelId]))),
            (K = (0, r.bG)([b.A], () => B && null != t && b.A.hasVideo(t), [B, t])),
            (Y = (0, r.yK)([d.Ay], () =>
                S.default.keys(ed).reduce((e, t) => (e.push(...d.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (W = (0, r.bG)([d.Ay], () =>
                Array.from(d.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, u.H)(t);
                    return null != n && null != ed[n];
                }),
            )),
            (z = Y.length > 0),
            (q = !1),
            (X = !1),
            (Q = !1),
            (J = !1),
            B ? ((q = !K), (X = K), (Q = H), (J = W)) : ((Q = F), (J = z)),
            (0, g.oi)({ audio: q, video: X, screenshare: Q, liveStage: !1, isCurrentUserConnected: B, activity: J })),
        e_ = em > 0 ? (0, _.w)(em) : null,
        ef = s.useRef(!1),
        { hasAccess: ex } = (0, y.TW)("FavoritesButton"),
        eC = s.useCallback(
            (e, t) => {
                (ef.current = !0), Z(e, t);
            },
            [Z],
        ),
        eE = s.useCallback(
            (e) => {
                e && (0, C.u)(L.YYv),
                    ex
                        ? (eo || (0, v.tV)(!0),
                          e &&
                              (0, o.mMO)(async () => {
                                  let { default: e } = await Promise.all([n.e("59839"), n.e("13121")]).then(
                                      n.bind(n, 889186),
                                  );
                                  return (t) => (0, i.jsx)(e, { ...t, parentId: null });
                              }))
                        : e && (0, f.A)({ subscriptionTier: G.pe.TIER_2, analyticsLocations: es }),
                    eC(D.i.TAKE_ACTION);
            },
            [eC, eo, ex, es],
        );
    return (
        s.useEffect(() => {
            $ && (ef.current = !1);
        }, [$]),
        s.useEffect(
            () => () => {
                $ && !ef.current && eC(D.i.AUTO_DISMISS, !0);
            },
            [eC, $],
        ),
        s.useEffect(() => {
            if (et) {
                let e = (0, o.createToast)(P.intl.string(P.t["4tSWQg"]), M.Ck.FAVORITE);
                (0, o.showToast)(e);
                let t = setTimeout(en, e.options?.duration ?? M.jg.duration);
                return () => {
                    en(), clearTimeout(t);
                };
            }
        }, [et, en]),
        (0, i.jsxs)(p.c, {
            children: [
                (0, i.jsx)(m.A, { selected: eA, hovered: el, unread: ep && !ec, className: w.I }),
                (0, i.jsx)(O.A, {
                    children: (0, i.jsx)(o.Qk9, {
                        selected: !0,
                        upperBadge: eg,
                        lowerBadge: e_,
                        children: (0, i.jsx)("div", {
                            ref: ei,
                            children: (0, i.jsx)(o.jlP, {
                                ...ee,
                                ariaLabel: P.intl.formatToPlainString(P.t["/uzRss"], {
                                    guildName: P.intl.string(P.t.wMWyci),
                                    mentions: em,
                                }),
                                "aria-selected": eA,
                                to: { pathname: L.BVt.CHANNEL(L.YYv, eu), state: V },
                                selected: eA || el,
                                onClick: () => {
                                    $ && eE(!1);
                                },
                                onMouseEnter: () => er(!0),
                                onMouseLeave: () => er(!1),
                                onMouseDown: function () {
                                    null != eh && c.A.preload(eh.guild_id, eh.id);
                                },
                                onContextMenu: ea,
                                children: (0, i.jsx)(o.Gg5, {
                                    size: "custom",
                                    color: "currentColor",
                                    className: w.w,
                                    width: 20,
                                    height: 20,
                                }),
                            }),
                        }),
                    }),
                }),
                $ &&
                    (0, i.jsx)(a.AM, {
                        targetElementRef: ei,
                        gradientColor: "nitro-pink",
                        position: "right",
                        alignmentStrategy: "edge",
                        align: "top",
                        caretConfig: { align: "start" },
                        badge: { type: "beta", variant: "expressive" },
                        graphic: { src: k.A, type: "image", aspectRatio: "16/9" },
                        title: P.intl.string(U.default["bu/mLv"]),
                        body: P.intl.string(U.default["/x2jT7"]),
                        onRequestClose: () => eC(D.i.USER_DISMISS),
                        actions: [
                            {
                                icon: o.tvc,
                                text: ex ? P.intl.string(U.default["0lHa0Z"]) : P.intl.string(U.default["0nZZEk"]),
                                onClick: () => eE(!0),
                                variant: ex ? void 0 : "expressive",
                            },
                        ],
                    }),
            ],
        })
    );
}
