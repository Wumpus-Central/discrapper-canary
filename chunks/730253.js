"use strict";
n.d(t, { A: () => H }), n(321073);
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
    j = n(5180),
    R = n(210082),
    O = n(780645),
    L = n(332396),
    M = n(652215),
    D = n(97483),
    G = n(49999),
    U = n(788868),
    P = n(665606),
    w = n(985018),
    k = n(299446),
    V = n(988572);
let B = { analyticsSource: { page: M.liQ.GUILD_CHANNEL, section: M.JJy.CHANNEL_LIST, object: M.ZSU.CHANNEL } };
function H(e) {
    let t,
        H,
        F,
        K,
        W,
        Y,
        z,
        q,
        X,
        Q,
        J,
        $,
        { shouldShowIntroPopover: Z, markIntroPopoverAsDismissed: ee } = e,
        et = (0, l.Vd)("favorites"),
        { favoriteAdded: en, clearFavoriteAdded: ei } = (0, y.CJ)(),
        es = s.useRef(null),
        { analyticsLocations: el } = (0, A.Ay)(h.A.FAVORITES_GUILD_BUTTON),
        [er, ea] = s.useState(!1),
        eo = (0, O.$)("favorite-server-context"),
        {
            favoriteGuildEnabled: ec,
            favoriteGuildMuted: ed,
            favoriteChannels: eu,
        } = (0, r.cf)([T.A], () => ({
            favoriteGuildEnabled: T.A.favoriteGuildEnabled,
            favoriteChannels: T.A.getFavoriteChannels(),
            favoriteGuildMuted: T.A.favoriteGuildMuted,
        })),
        eh = (0, r.bG)([N.A], () => N.A.getChannelId(M.YYv)),
        eA = (0, r.bG)([I.A], () => I.A.getChannel(eh)),
        em = (0, x.A)((e) => e.guildId),
        ep = (0, j.ai)(em),
        { badge: eg, unread: e_ } = (0, R.A)(eu),
        ef =
            ((H = null != (t = (0, r.bG)([N.A], () => N.A.getVoiceChannelId())) && null != eu[t]),
            (F = (0, r.bG)([E.A], () => {
                if (!H) return !1;
                let e = E.A.getCurrentUserActiveStream();
                return null != e && null != eu[e.channelId];
            })),
            (K = (0, r.bG)([E.A], () => E.A.getAllApplicationStreams().some((e) => null != eu[e.channelId]))),
            (W = (0, r.bG)([b.A], () => H && null != t && b.A.hasVideo(t), [H, t])),
            (Y = (0, r.yK)([d.Ay], () =>
                S.default.keys(eu).reduce((e, t) => (e.push(...d.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (z = (0, r.bG)([d.Ay], () =>
                Array.from(d.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, u.H)(t);
                    return null != n && null != eu[n];
                }),
            )),
            (q = Y.length > 0),
            (X = !1),
            (Q = !1),
            (J = !1),
            ($ = !1),
            H ? ((X = !W), (Q = W), (J = F), ($ = z)) : ((J = K), ($ = q)),
            (0, g.oi)({ audio: X, video: Q, screenshare: J, liveStage: !1, isCurrentUserConnected: H, activity: $ })),
        ex = eg > 0 ? (0, _.w)(eg) : null,
        eC = s.useRef(!1),
        { hasAccess: eE } = (0, y.TW)("FavoritesButton"),
        eI = s.useCallback(
            (e, t) => {
                (eC.current = !0), ee(e, t);
            },
            [ee],
        ),
        eN = s.useCallback(
            (e) => {
                e && (0, C.u)(M.YYv),
                    eE
                        ? (ec || (0, v.tV)(!0),
                          e &&
                              (0, o.mMO)(async () => {
                                  let { default: e } = await n.e("59839").then(n.bind(n, 889186));
                                  return (t) => (0, i.jsx)(e, { ...t, parentId: null });
                              }))
                        : e && (0, f.A)({ subscriptionTier: U.pe.TIER_2, analyticsLocations: el }),
                    eI(G.i.TAKE_ACTION);
            },
            [eI, ec, eE, el],
        );
    return (
        s.useEffect(() => {
            Z && (eC.current = !1);
        }, [Z]),
        s.useEffect(
            () => () => {
                Z && !eC.current && eI(G.i.AUTO_DISMISS, !0);
            },
            [eI, Z],
        ),
        s.useEffect(() => {
            if (en) {
                let e = (0, o.createToast)(w.intl.string(w.t["4tSWQg"]), D.Ck.FAVORITE);
                (0, o.showToast)(e);
                let t = setTimeout(ei, e.options?.duration ?? D.jg.duration);
                return () => {
                    ei(), clearTimeout(t);
                };
            }
        }, [en, ei]),
        (0, i.jsxs)(p.c, {
            children: [
                (0, i.jsx)(m.A, { selected: ep, hovered: er, unread: e_ && !ed, className: k.I }),
                (0, i.jsx)(L.A, {
                    children: (0, i.jsx)(o.Qk9, {
                        selected: !0,
                        upperBadge: ef,
                        lowerBadge: ex,
                        children: (0, i.jsx)("div", {
                            ref: es,
                            children: (0, i.jsx)(o.jlP, {
                                ...et,
                                ariaLabel: w.intl.formatToPlainString(w.t["/uzRss"], {
                                    guildName: w.intl.string(w.t.wMWyci),
                                    mentions: eg,
                                }),
                                "aria-selected": ep,
                                to: { pathname: M.BVt.CHANNEL(M.YYv, eh), state: B },
                                selected: ep || er,
                                onClick: () => {
                                    Z && eN(!1);
                                },
                                onMouseEnter: () => ea(!0),
                                onMouseLeave: () => ea(!1),
                                onMouseDown: function () {
                                    null != eA && c.A.preload(eA.guild_id, eA.id);
                                },
                                onContextMenu: eo,
                                children: (0, i.jsx)(o.Gg5, {
                                    size: "custom",
                                    color: "currentColor",
                                    className: k.w,
                                    width: 20,
                                    height: 20,
                                }),
                            }),
                        }),
                    }),
                }),
                Z &&
                    (0, i.jsx)(a.AM, {
                        targetElementRef: es,
                        gradientColor: "nitro-pink",
                        position: "right",
                        alignmentStrategy: "edge",
                        align: "top",
                        caretConfig: { align: "start" },
                        badge: { type: "beta", variant: "expressive" },
                        graphic: { src: V.A, type: "image", aspectRatio: "16/9" },
                        title: w.intl.string(P.default["bu/mLv"]),
                        body: w.intl.string(P.default["/x2jT7"]),
                        onRequestClose: () => eI(G.i.USER_DISMISS),
                        actions: [
                            {
                                icon: o.tvc,
                                text: eE ? w.intl.string(P.default["0lHa0Z"]) : w.intl.string(P.default["0nZZEk"]),
                                onClick: () => eN(!0),
                                variant: eE ? void 0 : "expressive",
                            },
                        ],
                    }),
            ],
        })
    );
}
