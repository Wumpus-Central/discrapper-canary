"use strict";
n.d(t, { A: () => F }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(837381),
    a = n(311907),
    r = n(342494),
    o = n(397927),
    c = n(308528),
    d = n(933958),
    u = n(969151),
    h = n(793574),
    A = n(688810),
    m = n(941971),
    g = n(900848),
    p = n(65611),
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
    y = n(668267),
    j = n(93055),
    R = n(5180),
    O = n(210082),
    L = n(780645),
    M = n(332396),
    D = n(652215),
    G = n(97483),
    U = n(49999),
    P = n(788868),
    w = n(525736),
    k = n(985018),
    V = n(4720),
    B = n(988572);
let H = { analyticsSource: { page: D.liQ.GUILD_CHANNEL, section: D.JJy.CHANNEL_LIST, object: D.ZSU.CHANNEL } };
function F(e) {
    let t,
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
        Z,
        { shouldShowIntroPopover: ee, markIntroPopoverAsDismissed: et } = e,
        en = (0, l.Vd)("favorites"),
        { favoriteAdded: ei, clearFavoriteAdded: es } = (0, j.CJ)(),
        el = s.useRef(null),
        { analyticsLocations: ea } = (0, A.Ay)(h.A.FAVORITES_GUILD_BUTTON),
        [er, eo] = s.useState(!1),
        ec = (0, L.$)("favorite-server-context"),
        {
            favoriteGuildEnabled: ed,
            favoriteGuildMuted: eu,
            favoriteChannels: eh,
        } = (0, a.cf)([T.A], () => ({
            favoriteGuildEnabled: T.A.favoriteGuildEnabled,
            favoriteChannels: T.A.getFavoriteChannels(),
            favoriteGuildMuted: T.A.favoriteGuildMuted,
        })),
        eA = (0, a.bG)([N.A], () => N.A.getChannelId(D.YYv)),
        em = (0, a.bG)([I.A], () => I.A.getChannel(eA)),
        eg = (0, x.A)((e) => e.guildId),
        ep = (0, R.ai)(eg),
        { badge: e_, unread: ef } = (0, O.A)(eh),
        ex =
            ((F = null != (t = (0, a.bG)([N.A], () => N.A.getVoiceChannelId())) && null != eh[t]),
            (K = (0, a.bG)([E.A], () => {
                if (!F) return !1;
                let e = E.A.getCurrentUserActiveStream();
                return null != e && null != eh[e.channelId];
            })),
            (W = (0, a.bG)([E.A], () => E.A.getAllApplicationStreams().some((e) => null != eh[e.channelId]))),
            (Y = (0, a.bG)([b.A], () => F && null != t && b.A.hasVideo(t), [F, t])),
            (z = (0, a.yK)([d.Ay], () =>
                S.default.keys(eh).reduce((e, t) => (e.push(...d.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (q = (0, a.bG)([d.Ay], () =>
                Array.from(d.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, u.H)(t);
                    return null != n && null != eh[n];
                }),
            )),
            (X = z.length > 0),
            (J = !1),
            (Q = !1),
            ($ = !1),
            (Z = !1),
            F ? ((J = !Y), (Q = Y), ($ = K), (Z = q)) : (($ = W), (Z = X)),
            (0, p.oi)({ audio: J, video: Q, screenshare: $, liveStage: !1, isCurrentUserConnected: F, activity: Z })),
        eC = e_ > 0 ? (0, _.w)(e_) : null,
        eE = s.useRef(!1),
        { hasAccess: eI } = (0, j.TW)("FavoritesButton"),
        eN = s.useCallback(
            (e, t) => {
                (eE.current = !0), et(e, t);
            },
            [et],
        ),
        eb = s.useCallback(
            (e) => {
                e && ((0, y.mv)("intro_dc"), (0, C.u)(D.YYv)),
                    eI
                        ? (ed || (0, v.tV)(!0, "favorites_button_onboarding"),
                          e &&
                              (0, o.mMO)(async () => {
                                  let { default: e } = await n.e("59839").then(n.bind(n, 889186));
                                  return (t) =>
                                      (0, i.jsx)(e, { ...t, parentId: null, source: "favorites_button_onboarding" });
                              }))
                        : e && (0, f.A)({ subscriptionTier: P.pe.TIER_2, analyticsLocations: ea }),
                    eN(U.i.TAKE_ACTION);
            },
            [eN, ed, eI, ea],
        );
    return (
        s.useEffect(() => {
            ee && (eE.current = !1);
        }, [ee]),
        s.useEffect(
            () => () => {
                ee && !eE.current && eN(U.i.AUTO_DISMISS, !0);
            },
            [eN, ee],
        ),
        s.useEffect(() => {
            if (ei) {
                let e = (0, o.createToast)(k.intl.string(k.t["4tSWQg"]), G.Ck.FAVORITE);
                (0, o.showToast)(e);
                let t = setTimeout(es, e.options?.duration ?? G.jg.duration);
                return () => {
                    es(), clearTimeout(t);
                };
            }
        }, [ei, es]),
        (0, i.jsxs)(g.c, {
            children: [
                (0, i.jsx)(m.A, { selected: ep, hovered: er, unread: ef && !eu, className: V.I }),
                (0, i.jsx)(M.A, {
                    children: (0, i.jsx)(o.Qk9, {
                        selected: !0,
                        upperBadge: ex,
                        lowerBadge: eC,
                        children: (0, i.jsx)("div", {
                            ref: el,
                            children: (0, i.jsx)(o.jlP, {
                                ...en,
                                ariaLabel: k.intl.formatToPlainString(k.t["/uzRss"], {
                                    guildName: k.intl.string(k.t.wMWyci),
                                    mentions: e_,
                                }),
                                "aria-selected": ep,
                                to: { pathname: D.BVt.CHANNEL(D.YYv, eA), state: H },
                                selected: ep || er,
                                onClick: () => {
                                    ee && eb(!1);
                                },
                                onMouseEnter: () => eo(!0),
                                onMouseLeave: () => eo(!1),
                                onMouseDown: function () {
                                    null != em && c.A.preload(em.guild_id, em.id);
                                },
                                onContextMenu: ec,
                                children: (0, i.jsx)(o.Gg5, {
                                    size: "custom",
                                    color: "currentColor",
                                    className: V.w,
                                    width: 20,
                                    height: 20,
                                }),
                            }),
                        }),
                    }),
                }),
                ee &&
                    (0, i.jsx)(r.AM, {
                        targetElementRef: el,
                        gradientColor: "nitro-pink",
                        position: "right",
                        alignmentStrategy: "edge",
                        align: "top",
                        caretConfig: { align: "start" },
                        badge: { type: "beta", variant: "expressive" },
                        graphic: { src: B.A, type: "image", aspectRatio: "16/9" },
                        title: k.intl.string(w.default["bu/mLv"]),
                        body: k.intl.string(w.default["/x2jT7"]),
                        onRequestClose: () => eN(U.i.USER_DISMISS),
                        actions: [
                            {
                                icon: o.tvc,
                                text: eI ? k.intl.string(w.default["0lHa0Z"]) : k.intl.string(w.default["0nZZEk"]),
                                onClick: () => eb(!0),
                                variant: eI ? void 0 : "expressive",
                            },
                        ],
                    }),
            ],
        })
    );
}
