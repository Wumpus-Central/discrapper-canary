n.d(t, { A: () => X }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(837381),
    a = n(311907),
    r = n(265486),
    o = n(192308),
    d = n(857250),
    c = n(691540),
    u = n(862328),
    h = n(67811),
    A = n(27232),
    _ = n(403581),
    m = n(308528),
    g = n(933958),
    p = n(969151),
    f = n(793574),
    E = n(688810),
    x = n(941971),
    I = n(900848),
    C = n(65611),
    b = n(855725),
    N = n(532794),
    S = n(366811),
    v = n(345942),
    T = n(616356),
    y = n(734057),
    R = n(309010),
    j = n(977997),
    L = n(661191),
    O = n(181079),
    G = n(422258),
    D = n(668267),
    M = n(93055),
    U = n(5180),
    P = n(210082),
    w = n(780645),
    k = n(332396),
    V = n(652215),
    B = n(97483),
    H = n(49999),
    F = n(788868),
    W = n(335993),
    Y = n(985018),
    K = n(959495),
    z = n(988572);
let q = { analyticsSource: { page: V.liQ.GUILD_CHANNEL, section: V.JJy.CHANNEL_LIST, object: V.ZSU.CHANNEL } };
function X(e) {
    let t,
        X,
        Q,
        J,
        Z,
        $,
        ee,
        et,
        en,
        ei,
        el,
        es,
        { shouldShowIntroPopover: ea, markIntroPopoverAsDismissed: er } = e,
        eo = (0, s.Vd)("favorites"),
        { favoriteAdded: ed, clearFavoriteAdded: ec } = (0, M.CJ)(),
        eu = l.useRef(null),
        { analyticsLocations: eh } = (0, E.Ay)(f.A.FAVORITES_GUILD_BUTTON),
        [eA, e_] = l.useState(!1),
        em = (0, w.$)("favorite-server-context"),
        {
            favoriteGuildEnabled: eg,
            favoriteGuildMuted: ep,
            favoriteChannels: ef,
        } = (0, a.cf)([O.A], () => ({
            favoriteGuildEnabled: O.A.favoriteGuildEnabled,
            favoriteChannels: O.A.getFavoriteChannels(),
            favoriteGuildMuted: O.A.favoriteGuildMuted,
        })),
        eE = (0, a.bG)([R.A], () => R.A.getChannelId(V.YYv)),
        ex = (0, a.bG)([y.A], () => y.A.getChannel(eE)),
        eI = (0, S.A)((e) => e.guildId),
        eC = (0, U.ai)(eI),
        { badge: eb, unread: eN } = (0, P.A)(ef),
        eS =
            ((X = null != (t = (0, a.bG)([R.A], () => R.A.getVoiceChannelId())) && null != ef[t]),
            (Q = (0, a.bG)([T.A], () => {
                if (!X) return !1;
                let e = T.A.getCurrentUserActiveStream();
                return null != e && null != ef[e.channelId];
            })),
            (J = (0, a.bG)([T.A], () => T.A.getAllApplicationStreams().some((e) => null != ef[e.channelId]))),
            (Z = (0, a.bG)([j.A], () => X && null != t && j.A.hasVideo(t), [X, t])),
            ($ = (0, a.yK)([g.Ay], () =>
                L.default.keys(ef).reduce((e, t) => (e.push(...g.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (ee = (0, a.bG)([g.Ay], () =>
                Array.from(g.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, p.H)(t);
                    return null != n && null != ef[n];
                }),
            )),
            (et = $.length > 0),
            (en = !1),
            (ei = !1),
            (el = !1),
            (es = !1),
            X ? ((en = !Z), (ei = Z), (el = Q), (es = ee)) : ((el = J), (es = et)),
            (0, C.oi)({
                audio: en,
                video: ei,
                screenshare: el,
                liveStage: !1,
                isCurrentUserConnected: X,
                activity: es,
            })),
        ev = eb > 0 ? (0, b.w)(eb) : null,
        eT = l.useRef(!1),
        { hasAccess: ey } = (0, M.TW)("FavoritesButton"),
        eR = l.useCallback(
            (e, t) => {
                (eT.current = !0), er(e, t);
            },
            [er],
        ),
        ej = l.useCallback(
            (e) => {
                e && ((0, D.mv)("intro_dc"), (0, v.u)(V.YYv)),
                    ey
                        ? (eg || (0, G.tV)(!0, "favorites_button_onboarding"),
                          e &&
                              (0, o.openModalLazy)(async () => {
                                  let { default: e } = await n.e("59839").then(n.bind(n, 889186));
                                  return (t) =>
                                      (0, i.jsx)(e, { ...t, parentId: null, source: "favorites_button_onboarding" });
                              }))
                        : e && (0, N.A)({ subscriptionTier: F.pe.TIER_2, analyticsLocations: eh }),
                    eR(H.i.TAKE_ACTION);
            },
            [eR, eg, ey, eh],
        );
    return (
        l.useEffect(() => {
            ea && (eT.current = !1);
        }, [ea]),
        l.useEffect(
            () => () => {
                ea && !eT.current && eR(H.i.AUTO_DISMISS, !0);
            },
            [eR, ea],
        ),
        l.useEffect(() => {
            if (ed) {
                let e = (0, d.o)(Y.intl.string(Y.t["4tSWQg"]), B.Ck.FAVORITE);
                (0, c.P0)(e);
                let t = setTimeout(ec, e.options?.duration ?? B.jg.duration);
                return () => {
                    ec(), clearTimeout(t);
                };
            }
        }, [ed, ec]),
        (0, i.jsxs)(I.c, {
            children: [
                (0, i.jsx)(x.A, { selected: eC, hovered: eA, unread: eN && !ep, className: K.I }),
                (0, i.jsx)(k.A, {
                    children: (0, i.jsx)(u.Q, {
                        selected: !0,
                        upperBadge: eS,
                        lowerBadge: ev,
                        children: (0, i.jsx)("div", {
                            ref: eu,
                            children: (0, i.jsx)(h.j, {
                                ...eo,
                                ariaLabel: Y.intl.formatToPlainString(Y.t["/uzRss"], {
                                    guildName: Y.intl.string(Y.t.wMWyci),
                                    mentions: eb,
                                }),
                                "aria-selected": eC,
                                to: { pathname: V.BVt.CHANNEL(V.YYv, eE), state: q },
                                selected: eC || eA,
                                onClick: () => {
                                    ea && ej(!1);
                                },
                                onMouseEnter: () => e_(!0),
                                onMouseLeave: () => e_(!1),
                                onMouseDown: function () {
                                    null != ex && m.A.preload(ex.guild_id, ex.id);
                                },
                                onContextMenu: em,
                                children: (0, i.jsx)(A.G, {
                                    size: "custom",
                                    color: "currentColor",
                                    className: K.w,
                                    width: 20,
                                    height: 20,
                                }),
                            }),
                        }),
                    }),
                }),
                ea &&
                    (0, i.jsx)(r.A, {
                        targetElementRef: eu,
                        gradientColor: "nitro-pink",
                        position: "right",
                        alignmentStrategy: "edge",
                        align: "top",
                        caretConfig: { align: "start" },
                        badge: { type: "beta", variant: "expressive" },
                        graphic: { src: z.A, type: "image", aspectRatio: "16/9" },
                        title: Y.intl.string(W.default["bu/mLv"]),
                        body: Y.intl.string(W.default["/x2jT7"]),
                        onRequestClose: () => eR(H.i.USER_DISMISS),
                        actions: [
                            {
                                icon: _.t,
                                text: ey ? Y.intl.string(W.default["0lHa0Z"]) : Y.intl.string(W.default["0nZZEk"]),
                                onClick: () => ej(!0),
                                variant: ey ? void 0 : "expressive",
                            },
                        ],
                    }),
            ],
        })
    );
}
