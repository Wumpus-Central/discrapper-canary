n.r(t), n.d(t, { default: () => eX });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    o = n(419354),
    s = n(17928),
    d = n(73939),
    c = n(717421),
    u = n(477782),
    _ = n(305866),
    f = n(871682),
    p = n(140735),
    A = n(707554),
    g = n(80682),
    h = n(793574),
    m = n(688810),
    x = n(480335),
    I = n(361628),
    b = n(744808),
    v = n(282389),
    C = n(915089),
    y = n(713517),
    P = n(645507),
    E = n(267102),
    S = n(71393),
    T = n(562153),
    N = n(183555),
    j = n(47675),
    O = n(570287),
    w = n(999291);
let R = (0, n(945810).mj)({
    kind: "user",
    name: "2026-03-friend-request-wave",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var M = n(679492),
    L = n(975732),
    k = n(718019),
    G = n(915614),
    U = n(439053),
    D = n(312381),
    F = n(946356),
    V = n(587168),
    H = n(193738),
    W = n(713608),
    B = n(901472),
    q = n(985925),
    Y = n(997509),
    X = n(474397),
    K = n(378570),
    Q = n(495544),
    J = n(309010),
    $ = n(993401),
    Z = n(652215),
    z = n(746080),
    ee = n(486974),
    et = n(985018);
function en(e) {
    let { user: t, guildId: n, channelId: i, onClose: l, appContext: r } = e,
        { newestAnalyticsLocation: o } = (0, m.Ay)(),
        d = (0, E.aL)(),
        c = (0, s.bG)([Q.default], () => Q.default.getId() === t?.id),
        u = (0, q.q)(n ?? null),
        _ = (0, s.bG)([J.A], () => i ?? J.A.getChannelId(n, !0), [i, n]);
    return null == n || !u || c
        ? null
        : (0, a.jsx)($.br, {
              action: "PRESS_MOD_VIEW",
              icon: W.q,
              tooltipText: et.intl.string(et.t.kj3tz2),
              onClick: () => {
                  Y.A.close(),
                      null != _ && (0, K.iN)(_),
                      (0, X.A)(r),
                      d.dispatch(Z.jej.POPOUT_CLOSE),
                      (0, B.z)(n, t.id, _ ?? z.VV.MEMBER_SAFETY, { modViewPanel: ee.g.INFO, sourceLocation: o }),
                      l?.();
              },
          });
}
var ea = n(700174),
    ei = n(983495),
    el = n(789645),
    er = n(661531),
    eo = n(834730),
    es = n(821609),
    ed = n(308528),
    ec = n(720149),
    eu = n(56562),
    e_ = n(432222),
    ef = n(976860),
    ep = n(734057),
    eA = n(232835),
    eg = n(954571),
    eh = n(381941),
    em = n(901123),
    ex = n(656884);
function eI(e) {
    var t;
    let n,
        { userId: l, onSendWave: r } = e,
        { enabled: o } = R.useConfig({ location: "Friend Request Toast" }),
        [s, d] = i.useState(null),
        [c, u] = i.useState(!1),
        _ =
            ((t = "User Profile Friend Request Toast"),
            (n = i.useRef(!1)),
            i.useCallback(
                async (e, a) => {
                    try {
                        if (n.current) return;
                        n.current = !0;
                        let a = await ed.A.openPrivateChannel({ recipientIds: l, location: t, navigateToChannel: !1 }),
                            i = ep.A.getChannel(a);
                        if (null == i) throw Error("Failed to open private channel");
                        eg.default.track(Z.HAw.WAVE_CTA_CLICKED, { source: t }),
                            await ec.A.sendStickers(i.id, [e_.w], "", { location: eh.Hx.SEND_WAVE }),
                            e?.(),
                            (0, ef.pX)(Z.BVt.CHANNEL(em.ME, i.id)),
                            ec.A.jumpToMessage({
                                channelId: i.id,
                                messageId: eA.A.getLastMessage(i.id)?.id ?? "",
                                jumpType: eu.US.INSTANT,
                            });
                    } catch (e) {
                        a(et.intl.string(et.t.Q97Gke));
                    } finally {
                        n.current = !1;
                    }
                },
                [t, l],
            )),
        f = i.useCallback(async () => {
            u(!0), await _(r, d), u(!1);
        }, [r, _]);
    return o
        ? (0, a.jsx)("div", {
              className: ex.$J,
              children:
                  null != s
                      ? (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)("div", {
                                    className: ex.i3,
                                    children: (0, a.jsx)(el.P, { color: er.A.colors.STATUS_DANGER }),
                                }),
                                (0, a.jsx)(eo.E, { variant: "text-sm/normal", color: "text-muted", children: s }),
                            ],
                        })
                      : (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(eo.E, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: et.intl.string(et.t.XcTHmQ),
                                }),
                                (0, a.jsx)(es.$, {
                                    disabled: c,
                                    variant: "secondary",
                                    text: et.intl.string(et.t.pVlP58),
                                    size: "sm",
                                    onClick: f,
                                }),
                            ],
                        }),
          })
        : null;
}
var eb = n(364522),
    ev = n(695366),
    eC = n(922590),
    ey = n(93246),
    eP = n(994500),
    eE = n(351906),
    eS = n(927578),
    eT = n(694720),
    eN = n(744753),
    ej = n(559506),
    eO = n(886891),
    ew = n(501193),
    eR = n(383448),
    eM = n(900179),
    eL = n(646986),
    ek = n(349419),
    eG = n(586644),
    eU = n(243166),
    eD = n(442228),
    eF = n(568704),
    eV = n(192867),
    eH = n(403369),
    eW = n(360563),
    eB = n(996988);
function eq(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: i,
            guild: l,
            isHoveringOrFocusing: r,
            onOpenProfile: o,
            channelId: d,
            onClose: c,
        } = e,
        u = T.Ay.useName(l?.id, d, t),
        { relationshipType: _, originApplicationId: f } = (0, s.cf)([eP.A], () => ({
            relationshipType: eP.A.getRelationshipType(t.id),
            originApplicationId: eP.A.getOriginApplicationId(t.id),
        })),
        p = (0, eC.fi)(t.id),
        A = (0, s.bG)([eE.A], () => eE.A.hidePersonalInformation),
        g = t.id === n.id,
        h = i?.widgets != null && i.widgets.length > 0,
        m = (0, eS.TW)(n),
        x = (0, O.A)(t.id, l?.id);
    return (0, a.jsxs)(eb.Ip, {
        fade: !0,
        className: ex.rf,
        children: [
            (0, a.jsx)(ej.A, { userId: t.id }),
            (0, a.jsx)(eG.A, {
                user: t,
                guildId: l?.id,
                onOpenProfile: o,
                onClose: c,
                usernameIcon: t.hasAvatarForGuild(l?.id) && (0, a.jsx)(eV.A, { user: t, nickname: u }),
                nickname: u,
                pronouns: i?.pronouns,
                tags: (0, a.jsx)(eT.A, { displayProfile: i, themeType: eB.d.POPOUT, onClose: c }),
                nicknameIcons: A ? null : (0, a.jsx)(eU.A, { userId: t.id, isVisible: r, onOpenProfile: o }),
            }),
            _ === Z.eA$.PENDING_INCOMING &&
                (0, a.jsx)(F.A.Overlay, {
                    children: (0, a.jsx)(eO.A, { user: t, guildId: l?.id, channelId: d, applicationId: f }),
                }),
            p.map((e) =>
                (0, a.jsx)(
                    F.A.Overlay,
                    {
                        children: (0, a.jsx)(eO.A, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: d,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, a.jsx)(eR.A, { user: t }),
            !g && (0, a.jsx)(eW.A, { user: t, onOpenProfile: (e) => o?.({ tabSection: e }) }),
            x && (0, a.jsx)(eF.A, { user: t, onClose: c }),
            i?.private && (0, a.jsx)(F.A.Overlay, { children: (0, a.jsx)(ew.A, { username: u }) }),
            g && (0, a.jsx)(eN.A, { isPremiumUser: m, onInteraction: c }),
            t.isProvisional
                ? (0, a.jsx)(F.A.Overlay, {
                      className: ex.Nr,
                      children: (0, a.jsx)(eM.A, {
                          heading: et.intl.string(et.t.Iyka0U),
                          headingIcon: (0, a.jsx)(ev.E, { size: "xxs", color: er.A.colors.TEXT_STRONG }),
                          headingColor: "text-strong",
                          children: (0, a.jsx)(ey.T, { userId: t.id }),
                      }),
                  })
                : (0, a.jsx)(eD.A, { user: t, bio: i?.bio, hidePersonalInformation: A, onClose: c }),
            h && (0, a.jsx)(ek.A, { user: t, widgets: i?.widgets, onOpenUserProfileModal: o }),
            (0, a.jsx)(eL.A, { user: t, currentUser: n, guildId: l?.id, onOpenUserProfileModal: o, onClose: c }),
            null != l && (0, a.jsx)(eH.A, { userId: t.id, guild: l }),
        ],
    });
}
var eY = n(693955);
function eX(e) {
    let {
            user: t,
            currentUser: n,
            guildId: l,
            channelId: W,
            messageId: B,
            roleId: q,
            openedAt: Y,
            closePopout: X,
            setPopoutRef: K,
            disableUserProfileLink: Q = __OVERLAY__,
            newAnalyticsLocations: J = [],
            appContext: $,
            disableAutoFocus: z = !1,
            onClickContainer: ee,
        } = e,
        { analyticsLocations: el } = (0, m.Ay)([...J, h.A.USER_PROFILE_POPOUT]),
        er = (0, E.aL)(),
        eo = (0, N.pb)({ layout: "POPOUT", userId: t.id, guildId: l, channelId: W, messageId: B, roleId: q }),
        es = (0, s.bG)([S.A], () => (null != l ? S.A.getGuild(l) : null)),
        ed = i.useMemo(() => (null != l ? { [l]: [t.id] } : {}), [l, t.id]);
    (0, g.Eq)(ed, "UserProfilePopout");
    let ec = i.useRef(null),
        eu = (0, w.Ay)(t.id, l),
        e_ = (0, I.A)(eu?.profileFrame?.skuId, "UserProfilePopout"),
        ef = (0, v.A)(eu?.profileFrame?.skuId),
        [ep, eA] = i.useState(!1),
        eg = (0, O.A)(t.id, l),
        { enabled: eh } = R.useConfig({ location: "UserProfilePopout" }),
        { isHoveringOrFocusing: em, isHovering: eb } = (0, y.A)(ec),
        ev = (0, M.fC)(),
        eC = (0, c.z)({ opacity: +(null != ev.interactionType), config: { duration: 150 } });
    i.useEffect(() => {
        K?.(ec?.current);
    }, [ec, K, e_?.skuId]);
    let ey = i.useRef(null),
        eP = t.id === n.id,
        eE = i.useMemo(() => (0, P.A)(), []),
        eS = (e) => {
            X?.(),
                er.dispatch(Z.jej.POPOUT_CLOSE),
                (0, L.openUserProfileModal)({
                    sourceAnalyticsLocations: el,
                    hideRestrictedProfile: !0,
                    customStatusPrompt: eE,
                    ...eo,
                    ...e,
                    appContext: $,
                });
        },
        eT = z ? "div" : _.l,
        eN = (0, C.GV)(),
        ej = T.Ay.useName(es?.id, W, t);
    return (0, a.jsx)(m.f5, {
        value: el,
        children: (0, a.jsx)(N.of, {
            value: eo,
            openedAt: Y,
            fetchStartedAt: eu?.fetchStartedAt,
            fetchEndedAt: eu?.fetchEndedAt,
            isLoaded: eu?.isLoaded,
            children: (0, a.jsx)(M.Hl, {
                value: ev,
                children: (0, a.jsxs)(eT, {
                    ref: ec,
                    "aria-labelledby": eN,
                    onClick: ee,
                    children: [
                        eg &&
                            ep &&
                            (0, a.jsx)(d.F, {
                                component: "div",
                                className: ex.g$,
                                children: (0, a.jsx)(f.F, {
                                    children: (0, a.jsx)(eI, { userId: t.id, onSendWave: X }),
                                }),
                            }),
                        (0, a.jsx)(p.A, {
                            children: (0, a.jsx)(A.H, { id: eN, children: et.intl.format(et.t.KRe1Fk, { name: ej }) }),
                        }),
                        (0, a.jsx)(A.F, {
                            children: (0, a.jsxs)(F.A, {
                                user: t,
                                displayProfile: eu,
                                themeType: eB.d.POPOUT,
                                className: r()(ex.BK, ef),
                                privateBanner: eu?.private === !0 ? (0, a.jsx)(D.A, {}) : void 0,
                                children: [
                                    null != ev.interactionType &&
                                        (0, a.jsx)(o.animated.div, { style: eC, className: ex.tB }),
                                    (0, a.jsxs)(V.A, {
                                        children: [
                                            (0, a.jsx)(en, {
                                                shouldShowTooltip: null === ev.interactionType,
                                                user: t,
                                                guildId: l,
                                                channelId: W,
                                                onClose: X,
                                                appContext: $,
                                            }),
                                            (0, a.jsx)(H.A, {
                                                themeType: eB.d.POPOUT,
                                                user: t,
                                                setFriendRequestSent: eA,
                                                toastShowing: eg && ep && eh,
                                            }),
                                            !eP &&
                                                (0, a.jsx)(ea.yo, {
                                                    user: t,
                                                    guildId: l,
                                                    viewProfileItem: Q
                                                        ? null
                                                        : (0, a.jsx)(u.Dr, {
                                                              id: "view-profile",
                                                              label: et.intl.string(et.t["+Xp3hq"]),
                                                              action: () => {
                                                                  eS(),
                                                                      (0, j.Wn)({
                                                                          action: "PRESS_VIEW_PROFILE",
                                                                          analyticsLocations: el,
                                                                          ...eo,
                                                                      });
                                                              },
                                                          }),
                                                    appContext: $,
                                                }),
                                        ],
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: ex.wx,
                                        children: [
                                            (0, a.jsx)(G.A, {
                                                user: t,
                                                displayProfile: eu,
                                                guildId: l,
                                                themeType: eB.d.POPOUT,
                                            }),
                                            (0, a.jsx)(U.A, { userId: t.id, className: ex.oR, onClose: X }),
                                            (0, a.jsx)(k.A, {
                                                user: t,
                                                displayProfile: eu,
                                                guildId: l,
                                                channelId: W,
                                                themeType: eB.d.POPOUT,
                                                onOpenProfile: Q ? void 0 : eS,
                                            }),
                                            (0, a.jsx)(ei.A, {
                                                ref: ey,
                                                user: t,
                                                guildId: l,
                                                channelId: W,
                                                themeType: eB.d.POPOUT,
                                                onCloseProfile: X,
                                                prompt: eE,
                                            }),
                                        ],
                                    }),
                                    (0, a.jsx)(eq, {
                                        user: t,
                                        currentUser: n,
                                        displayProfile: eu,
                                        guild: es,
                                        isHoveringOrFocusing: null == ev.interactionType && em,
                                        onOpenProfile: Q ? void 0 : eS,
                                        channelId: W,
                                        onClose: X,
                                    }),
                                    (0, a.jsx)(eY.A, {
                                        user: t,
                                        guildId: l,
                                        channelId: W,
                                        onClose: X,
                                        appContext: $,
                                        disableAutoFocus: z,
                                    }),
                                    eu?.profileEffect != null &&
                                        (0, a.jsx)(x.A, { skuId: eu?.profileEffect?.skuId, isHovering: eb }),
                                    null != e_ && (0, a.jsx)(b.A, { frame: e_, layout: "POPOUT" }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
