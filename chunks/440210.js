s.r(i), s.d(i, { default: () => e$ });
var n = s(627968),
    l = s(64700),
    r = s(503698),
    t = s.n(r),
    a = s(785651),
    d = s(17928),
    o = s(73939),
    u = s(717421),
    c = s(477782),
    p = s(305866),
    A = s(871682),
    x = s(140735),
    h = s(707554),
    f = s(80682),
    j = s(793574),
    I = s(688810),
    m = s(480335),
    P = s(31956),
    g = s(361628),
    y = s(744808),
    O = s(282389),
    T = s(915089),
    v = s(713517),
    C = s(645507),
    E = s(267102),
    N = s(71393),
    k = s(562153),
    S = s(183555),
    U = s(47675),
    b = s(570287),
    F = s(999291);
let R = (0, s(945810).mj)({
    kind: "user",
    name: "2026-03-friend-request-wave",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var _ = s(679492),
    w = s(975732),
    G = s(718019),
    L = s(915614),
    M = s(439053),
    V = s(312381),
    q = s(946356),
    H = s(587168),
    W = s(193738),
    z = s(713608),
    D = s(901472),
    B = s(985925),
    X = s(997509),
    $ = s(474397),
    K = s(378570),
    Q = s(495544),
    Y = s(309010),
    J = s(993401),
    Z = s(652215),
    ee = s(746080),
    ei = s(486974),
    es = s(985018);
function en(e) {
    let { user: i, guildId: s, channelId: l, onClose: r, appContext: t } = e,
        { newestAnalyticsLocation: a } = (0, I.Ay)(),
        o = (0, E.aL)(),
        u = (0, d.bG)([Q.default], () => Q.default.getId() === i?.id),
        c = (0, B.q)(s ?? null),
        p = (0, d.bG)([Y.A], () => l ?? Y.A.getChannelId(s, !0), [l, s]);
    return null == s || !c || u
        ? null
        : (0, n.jsx)(J.br, {
              action: "PRESS_MOD_VIEW",
              icon: z.q,
              tooltipText: es.intl.string(es.t.kj3tz2),
              onClick: () => {
                  X.A.close(),
                      null != p && (0, K.iN)(p),
                      (0, $.A)(t),
                      o.dispatch(Z.jej.POPOUT_CLOSE),
                      (0, D.z)(s, i.id, p ?? ee.VV.MEMBER_SAFETY, { modViewPanel: ei.g.INFO, sourceLocation: a }),
                      r?.();
              },
          });
}
var el = s(700174),
    er = s(983495),
    et = s(789645),
    ea = s(661531),
    ed = s(834730),
    eo = s(821609),
    eu = s(308528),
    ec = s(720149),
    ep = s(56562),
    eA = s(330001),
    ex = s(432222),
    eh = s(976860),
    ef = s(734057),
    ej = s(232835),
    eI = s(381941),
    em = s(901123),
    eP = s(656884);
function eg(e) {
    var i;
    let s,
        { userId: r, onSendWave: t } = e,
        { enabled: a } = R.useConfig({ location: "Friend Request Toast" }),
        [d, o] = l.useState(null),
        [u, c] = l.useState(!1),
        p =
            ((i = "User Profile Friend Request Toast"),
            (s = l.useRef(!1)),
            l.useCallback(
                async (e, n) => {
                    try {
                        if (s.current) return;
                        s.current = !0;
                        let n = await eu.A.openPrivateChannel({ recipientIds: r, location: i, navigateToChannel: !1 }),
                            l = ef.A.getChannel(n);
                        if (null == l) throw Error("Failed to open private channel");
                        (0, eA.W)({ channelId: l.id, source: i }),
                            await ec.A.sendStickers(l.id, [ex.w], "", { location: eI.Hx.SEND_WAVE }),
                            e?.(),
                            (0, eh.pX)(Z.BVt.CHANNEL(em.ME, l.id)),
                            ec.A.jumpToMessage({
                                channelId: l.id,
                                messageId: ej.A.getLastMessage(l.id)?.id ?? "",
                                jumpType: ep.US.INSTANT,
                            });
                    } catch (e) {
                        n(es.intl.string(es.t.Q97Gke));
                    } finally {
                        s.current = !1;
                    }
                },
                [i, r],
            )),
        A = l.useCallback(async () => {
            c(!0), await p(t, o), c(!1);
        }, [t, p]);
    return a
        ? (0, n.jsx)("div", {
              className: eP.$J,
              children:
                  null != d
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)("div", {
                                    className: eP.i3,
                                    children: (0, n.jsx)(et.P, { color: ea.A.colors.STATUS_DANGER }),
                                }),
                                (0, n.jsx)(ed.E, { variant: "text-sm/normal", color: "text-muted", children: d }),
                            ],
                        })
                      : (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(ed.E, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: es.intl.string(es.t.XcTHmQ),
                                }),
                                (0, n.jsx)(eo.$, {
                                    disabled: u,
                                    variant: "secondary",
                                    text: es.intl.string(es.t.pVlP58),
                                    size: "sm",
                                    onClick: A,
                                }),
                            ],
                        }),
          })
        : null;
}
var ey = s(364522),
    eO = s(695366),
    eT = s(922590),
    ev = s(93246),
    eC = s(994500),
    eE = s(351906),
    eN = s(927578),
    ek = s(694720),
    eS = s(744753),
    eU = s(559506),
    eb = s(886891),
    eF = s(501193),
    eR = s(383448),
    e_ = s(900179),
    ew = s(646986),
    eG = s(349419),
    eL = s(878555),
    eM = s(243166),
    eV = s(442228),
    eq = s(568704),
    eH = s(192867),
    eW = s(403369),
    ez = s(360563),
    eD = s(996988);
function eB(e) {
    let {
            user: i,
            currentUser: s,
            displayProfile: l,
            guild: r,
            isHoveringOrFocusing: t,
            onOpenProfile: a,
            channelId: o,
            onClose: u,
        } = e,
        c = k.Ay.useName(r?.id, o, i),
        { relationshipType: p, originApplicationId: A } = (0, d.cf)([eC.A], () => ({
            relationshipType: eC.A.getRelationshipType(i.id),
            originApplicationId: eC.A.getOriginApplicationId(i.id),
        })),
        x = (0, eT.fi)(i.id),
        h = (0, d.bG)([eE.A], () => eE.A.hidePersonalInformation),
        f = i.id === s.id,
        j = l?.widgets != null && l.widgets.length > 0,
        I = (0, eN.TW)(s),
        m = (0, b.A)(i.id, r?.id);
    return (0, n.jsxs)(ey.Ip, {
        fade: !0,
        className: eP.rf,
        children: [
            (0, n.jsx)(eU.A, { userId: i.id }),
            (0, n.jsx)(eL.Ay, {
                user: i,
                guildId: r?.id,
                displayName: c,
                onClickName: a,
                displayNameTrailing: h ? null : (0, n.jsx)(eM.A, { userId: i.id, isVisible: t, onOpenProfile: a }),
                pronouns: l?.pronouns,
                onClose: u,
                usernameIcon: i.hasAvatarForGuild(r?.id) && (0, n.jsx)(eH.A, { user: i, nickname: c }),
                trailing: (0, n.jsx)(ek.A, { displayProfile: l, themeType: eD.d.POPOUT, onClose: u }),
            }),
            p === Z.eA$.PENDING_INCOMING &&
                (0, n.jsx)(q.A.Overlay, {
                    children: (0, n.jsx)(eb.A, { user: i, guildId: r?.id, channelId: o, applicationId: A }),
                }),
            x.map((e) =>
                (0, n.jsx)(
                    q.A.Overlay,
                    {
                        children: (0, n.jsx)(eb.A, {
                            user: i,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: o,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, n.jsx)(eR.A, { user: i }),
            !f && (0, n.jsx)(ez.A, { user: i, onOpenProfile: (e) => a?.({ tabSection: e }) }),
            m && (0, n.jsx)(eq.A, { user: i, onClose: u }),
            l?.private && (0, n.jsx)(q.A.Overlay, { children: (0, n.jsx)(eF.A, { username: c }) }),
            f && (0, n.jsx)(eS.A, { isPremiumUser: I, onInteraction: u }),
            i.isProvisional
                ? (0, n.jsx)(q.A.Overlay, {
                      className: eP.Nr,
                      children: (0, n.jsx)(e_.A, {
                          heading: es.intl.string(es.t.Iyka0U),
                          headingIcon: (0, n.jsx)(eO.E, { size: "xxs", color: ea.A.colors.TEXT_STRONG }),
                          headingColor: "text-strong",
                          children: (0, n.jsx)(ev.T, { userId: i.id }),
                      }),
                  })
                : (0, n.jsx)(eV.A, { user: i, bio: l?.bio, hidePersonalInformation: h, onClose: u }),
            j && (0, n.jsx)(eG.A, { user: i, widgets: l?.widgets, onOpenUserProfileModal: a }),
            (0, n.jsx)(ew.A, { user: i, currentUser: s, guildId: r?.id, onOpenUserProfileModal: a, onClose: u }),
            null != r && (0, n.jsx)(eW.A, { userId: i.id, guild: r }),
        ],
    });
}
var eX = s(693955);
function e$(e) {
    let {
            user: i,
            currentUser: s,
            guildId: r,
            channelId: z,
            messageId: D,
            roleId: B,
            openedAt: X,
            closePopout: $,
            setPopoutRef: K,
            disableUserProfileLink: Q = __OVERLAY__,
            newAnalyticsLocations: Y = [],
            appContext: J,
            disableAutoFocus: ee = !1,
            onClickContainer: ei,
        } = e,
        { analyticsLocations: et } = (0, I.Ay)([...Y, j.A.USER_PROFILE_POPOUT]),
        ea = (0, E.aL)(),
        ed = (0, S.pb)({ layout: "POPOUT", userId: i.id, guildId: r, channelId: z, messageId: D, roleId: B }),
        eo = (0, d.bG)([N.A], () => (null != r ? N.A.getGuild(r) : null)),
        eu = l.useMemo(() => (null != r ? { [r]: [i.id] } : {}), [r, i.id]);
    (0, f.Eq)(eu, "UserProfilePopout");
    let ec = l.useRef(null),
        ep = (0, F.Ay)(i.id, r),
        [eA, ex] = l.useState(!1),
        eh = (0, b.A)(i.id, r),
        { enabled: ef } = R.useConfig({ location: "UserProfilePopout" }),
        { isHoveringOrFocusing: ej, isHovering: eI } = (0, v.A)(ec),
        em = (0, _.fC)(),
        ey = (0, g.A)(ep?.profileFrame?.skuId, "UserProfilePopout"),
        eO = (0, O.A)(ep?.profileFrame?.skuId);
    (0, P.A)({ skuId: ep?.profileFrame?.skuId, openedAt: X, context: ed, analyticsLocations: et });
    let eT = (0, u.z)({ opacity: +(null != em.interactionType), config: { duration: 150 } });
    l.useEffect(() => {
        K?.(ec?.current);
    }, [ec, K, ey?.skuId]);
    let ev = l.useRef(null),
        eC = i.id === s.id,
        eE = l.useMemo(() => (0, C.A)(), []),
        eN = (e) => {
            $?.(),
                ea.dispatch(Z.jej.POPOUT_CLOSE),
                (0, w.openUserProfileModal)({
                    sourceAnalyticsLocations: et,
                    hideRestrictedProfile: !0,
                    customStatusPrompt: eE,
                    ...ed,
                    ...e,
                    appContext: J,
                });
        },
        ek = ee ? "div" : p.l,
        eS = (0, T.GV)(),
        eU = k.Ay.useName(eo?.id, z, i);
    return (0, n.jsx)(I.f5, {
        value: et,
        children: (0, n.jsx)(S.of, {
            value: ed,
            openedAt: X,
            fetchStartedAt: ep?.fetchStartedAt,
            fetchEndedAt: ep?.fetchEndedAt,
            isLoaded: ep?.isLoaded,
            children: (0, n.jsx)(_.Hl, {
                value: em,
                children: (0, n.jsxs)(ek, {
                    ref: ec,
                    "aria-labelledby": eS,
                    onClick: ei,
                    children: [
                        eh &&
                            eA &&
                            (0, n.jsx)(o.F, {
                                component: "div",
                                className: eP.g$,
                                children: (0, n.jsx)(A.F, {
                                    children: (0, n.jsx)(eg, { userId: i.id, onSendWave: $ }),
                                }),
                            }),
                        (0, n.jsx)(x.A, {
                            children: (0, n.jsx)(h.H, { id: eS, children: es.intl.format(es.t.KRe1Fk, { name: eU }) }),
                        }),
                        (0, n.jsx)(h.F, {
                            children: (0, n.jsxs)(q.A, {
                                user: i,
                                displayProfile: ep,
                                themeType: eD.d.POPOUT,
                                className: t()(eP.BK, eO),
                                isPrivate: ep?.private === !0,
                                children: [
                                    ep?.private === !0 && (0, n.jsx)(V.A, {}),
                                    null != em.interactionType &&
                                        (0, n.jsx)(a.animated.div, { style: eT, className: eP.tB }),
                                    (0, n.jsxs)(H.A, {
                                        children: [
                                            (0, n.jsx)(en, {
                                                shouldShowTooltip: null === em.interactionType,
                                                user: i,
                                                guildId: r,
                                                channelId: z,
                                                onClose: $,
                                                appContext: J,
                                            }),
                                            (0, n.jsx)(W.A, {
                                                themeType: eD.d.POPOUT,
                                                user: i,
                                                setFriendRequestSent: ex,
                                                toastShowing: eh && eA && ef,
                                            }),
                                            !eC &&
                                                (0, n.jsx)(el.yo, {
                                                    user: i,
                                                    guildId: r,
                                                    viewProfileItem: Q
                                                        ? null
                                                        : (0, n.jsx)(c.Dr, {
                                                              id: "view-profile",
                                                              label: es.intl.string(es.t["+Xp3hq"]),
                                                              action: () => {
                                                                  eN(),
                                                                      (0, U.Wn)({
                                                                          action: "PRESS_VIEW_PROFILE",
                                                                          analyticsLocations: et,
                                                                          ...ed,
                                                                      });
                                                              },
                                                          }),
                                                    appContext: J,
                                                }),
                                        ],
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: eP.wx,
                                        children: [
                                            (0, n.jsx)(L.A, {
                                                user: i,
                                                displayProfile: ep,
                                                guildId: r,
                                                themeType: eD.d.POPOUT,
                                            }),
                                            (0, n.jsx)(M.A, { userId: i.id, className: eP.oR, onClose: $ }),
                                            (0, n.jsx)(G.A, {
                                                user: i,
                                                displayProfile: ep,
                                                guildId: r,
                                                channelId: z,
                                                themeType: eD.d.POPOUT,
                                                onOpenProfile: Q ? void 0 : eN,
                                            }),
                                            (0, n.jsx)(er.A, {
                                                ref: ev,
                                                user: i,
                                                guildId: r,
                                                channelId: z,
                                                themeType: eD.d.POPOUT,
                                                onCloseProfile: $,
                                                prompt: eE,
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(eB, {
                                        user: i,
                                        currentUser: s,
                                        displayProfile: ep,
                                        guild: eo,
                                        isHoveringOrFocusing: null == em.interactionType && ej,
                                        onOpenProfile: Q ? void 0 : eN,
                                        channelId: z,
                                        onClose: $,
                                    }),
                                    (0, n.jsx)(eX.A, {
                                        user: i,
                                        guildId: r,
                                        channelId: z,
                                        onClose: $,
                                        appContext: J,
                                        disableAutoFocus: ee,
                                    }),
                                    ep?.profileEffect != null &&
                                        (0, n.jsx)(m.A, { skuId: ep?.profileEffect?.skuId, isHovering: eI }),
                                    null != ey && (0, n.jsx)(y.A, { frame: ey }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
