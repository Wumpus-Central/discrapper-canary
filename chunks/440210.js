n.r(t), n.d(t, { default: () => ez });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(487514),
    o = n(17928),
    d = n(73939),
    c = n(717421),
    u = n(477782),
    f = n(305866),
    A = n(871682),
    p = n(140735),
    _ = n(707554),
    m = n(80682),
    h = n(793574),
    g = n(688810),
    x = n(480335),
    I = n(31956),
    v = n(361628),
    E = n(744808),
    b = n(282389),
    N = n(915089),
    j = n(713517),
    y = n(645507),
    C = n(267102),
    P = n(71393),
    S = n(562153),
    R = n(183555),
    M = n(47675),
    O = n(570287),
    T = n(999291);
let L = (0, n(945810).mj)({
    kind: "user",
    name: "2026-03-friend-request-wave",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var w = n(679492),
    G = n(975732),
    U = n(718019),
    F = n(915614),
    k = n(439053),
    D = n(312381),
    V = n(946356),
    W = n(587168),
    H = n(193738),
    X = n(713608),
    Z = n(901472),
    q = n(985925),
    B = n(997509),
    z = n(474397),
    Y = n(378570),
    $ = n(495544),
    Q = n(309010),
    K = n(993401),
    J = n(652215),
    ee = n(746080),
    et = n(486974),
    en = n(985018);
function el(e) {
    let { user: t, guildId: n, channelId: a, onClose: r, appContext: i } = e,
        { newestAnalyticsLocation: s } = (0, g.Ay)(),
        d = (0, C.aL)(),
        c = (0, o.bG)([$.default], () => $.default.getId() === t?.id),
        u = (0, q.q)(n ?? null),
        f = (0, o.bG)([Q.A], () => a ?? Q.A.getChannelId(n, !0), [a, n]);
    return null == n || !u || c
        ? null
        : (0, l.jsx)(K.br, {
              action: "PRESS_MOD_VIEW",
              icon: X.q,
              tooltipText: en.intl.string(en.t.kj3tz2),
              onClick: () => {
                  B.A.close(),
                      null != f && (0, Y.iN)(f),
                      (0, z.A)(i),
                      d.dispatch(J.jej.POPOUT_CLOSE),
                      (0, Z.z)(n, t.id, f ?? ee.VV.MEMBER_SAFETY, { modViewPanel: et.g.INFO, sourceLocation: s }),
                      r?.();
              },
          });
}
var ea = n(700174),
    er = n(983495),
    ei = n(789645),
    es = n(661531),
    eo = n(834730),
    ed = n(821609),
    ec = n(308528),
    eu = n(720149),
    ef = n(56562),
    eA = n(432222),
    ep = n(976860),
    e_ = n(734057),
    em = n(232835),
    eh = n(954571),
    eg = n(381941),
    ex = n(901123),
    eI = n(656884);
function ev(e) {
    var t;
    let n,
        { userId: r, onSendWave: i } = e,
        { enabled: s } = L.useConfig({ location: "Friend Request Toast" }),
        [o, d] = a.useState(null),
        [c, u] = a.useState(!1),
        f =
            ((t = "User Profile Friend Request Toast"),
            (n = a.useRef(!1)),
            a.useCallback(
                async (e, l) => {
                    try {
                        if (n.current) return;
                        n.current = !0;
                        let l = await ec.A.openPrivateChannel({ recipientIds: r, location: t, navigateToChannel: !1 }),
                            a = e_.A.getChannel(l);
                        if (null == a) throw Error("Failed to open private channel");
                        eh.default.track(J.HAw.WAVE_CTA_CLICKED, { source: t }),
                            await eu.A.sendStickers(a.id, [eA.w], "", { location: eg.Hx.SEND_WAVE }),
                            e?.(),
                            (0, ep.pX)(J.BVt.CHANNEL(ex.ME, a.id)),
                            eu.A.jumpToMessage({
                                channelId: a.id,
                                messageId: em.A.getLastMessage(a.id)?.id ?? "",
                                jumpType: ef.US.INSTANT,
                            });
                    } catch (e) {
                        l(en.intl.string(en.t.Q97Gke));
                    } finally {
                        n.current = !1;
                    }
                },
                [t, r],
            )),
        A = a.useCallback(async () => {
            u(!0), await f(i, d), u(!1);
        }, [i, f]);
    return s
        ? (0, l.jsx)("div", {
              className: eI.$J,
              children:
                  null != o
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", {
                                    className: eI.i3,
                                    children: (0, l.jsx)(ei.P, { color: es.A.colors.STATUS_DANGER }),
                                }),
                                (0, l.jsx)(eo.E, { variant: "text-sm/normal", color: "text-muted", children: o }),
                            ],
                        })
                      : (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(eo.E, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: en.intl.string(en.t.XcTHmQ),
                                }),
                                (0, l.jsx)(ed.$, {
                                    disabled: c,
                                    variant: "secondary",
                                    text: en.intl.string(en.t.pVlP58),
                                    size: "sm",
                                    onClick: A,
                                }),
                            ],
                        }),
          })
        : null;
}
var eE = n(364522),
    eb = n(695366),
    eN = n(922590),
    ej = n(93246),
    ey = n(994500),
    eC = n(351906),
    eP = n(927578),
    eS = n(694720),
    eR = n(744753),
    eM = n(559506),
    eO = n(886891),
    eT = n(501193),
    eL = n(383448),
    ew = n(900179),
    eG = n(646986),
    eU = n(349419),
    eF = n(878555),
    ek = n(243166),
    eD = n(442228),
    eV = n(568704),
    eW = n(192867),
    eH = n(403369),
    eX = n(360563),
    eZ = n(996988);
function eq(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: a,
            guild: r,
            isHoveringOrFocusing: i,
            onOpenProfile: s,
            channelId: d,
            onClose: c,
        } = e,
        u = S.Ay.useName(r?.id, d, t),
        { relationshipType: f, originApplicationId: A } = (0, o.cf)([ey.A], () => ({
            relationshipType: ey.A.getRelationshipType(t.id),
            originApplicationId: ey.A.getOriginApplicationId(t.id),
        })),
        p = (0, eN.fi)(t.id),
        _ = (0, o.bG)([eC.A], () => eC.A.hidePersonalInformation),
        m = t.id === n.id,
        h = a?.widgets != null && a.widgets.length > 0,
        g = (0, eP.TW)(n),
        x = (0, O.A)(t.id, r?.id);
    return (0, l.jsxs)(eE.Ip, {
        fade: !0,
        className: eI.rf,
        children: [
            (0, l.jsx)(eM.A, { userId: t.id }),
            (0, l.jsx)(eF.Ay, {
                user: t,
                guildId: r?.id,
                displayName: u,
                onClickName: s,
                displayNameTrailing: _ ? null : (0, l.jsx)(ek.A, { userId: t.id, isVisible: i, onOpenProfile: s }),
                pronouns: a?.pronouns,
                onClose: c,
                usernameIcon: t.hasAvatarForGuild(r?.id) && (0, l.jsx)(eW.A, { user: t, nickname: u }),
                trailing: (0, l.jsx)(eS.A, { displayProfile: a, themeType: eZ.d.POPOUT, onClose: c }),
            }),
            f === J.eA$.PENDING_INCOMING &&
                (0, l.jsx)(V.A.Overlay, {
                    children: (0, l.jsx)(eO.A, { user: t, guildId: r?.id, channelId: d, applicationId: A }),
                }),
            p.map((e) =>
                (0, l.jsx)(
                    V.A.Overlay,
                    {
                        children: (0, l.jsx)(eO.A, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: d,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(eL.A, { user: t }),
            !m && (0, l.jsx)(eX.A, { user: t, onOpenProfile: (e) => s?.({ tabSection: e }) }),
            x && (0, l.jsx)(eV.A, { user: t, onClose: c }),
            a?.private && (0, l.jsx)(V.A.Overlay, { children: (0, l.jsx)(eT.A, { username: u }) }),
            m && (0, l.jsx)(eR.A, { isPremiumUser: g, onInteraction: c }),
            t.isProvisional
                ? (0, l.jsx)(V.A.Overlay, {
                      className: eI.Nr,
                      children: (0, l.jsx)(ew.A, {
                          heading: en.intl.string(en.t.Iyka0U),
                          headingIcon: (0, l.jsx)(eb.E, { size: "xxs", color: es.A.colors.TEXT_STRONG }),
                          headingColor: "text-strong",
                          children: (0, l.jsx)(ej.T, { userId: t.id }),
                      }),
                  })
                : (0, l.jsx)(eD.A, { user: t, bio: a?.bio, hidePersonalInformation: _, onClose: c }),
            h && (0, l.jsx)(eU.A, { user: t, widgets: a?.widgets, onOpenUserProfileModal: s }),
            (0, l.jsx)(eG.A, { user: t, currentUser: n, guildId: r?.id, onOpenUserProfileModal: s, onClose: c }),
            null != r && (0, l.jsx)(eH.A, { userId: t.id, guild: r }),
        ],
    });
}
var eB = n(693955);
function ez(e) {
    let {
            user: t,
            currentUser: n,
            guildId: r,
            channelId: X,
            messageId: Z,
            roleId: q,
            openedAt: B,
            closePopout: z,
            setPopoutRef: Y,
            disableUserProfileLink: $ = __OVERLAY__,
            newAnalyticsLocations: Q = [],
            appContext: K,
            disableAutoFocus: ee = !1,
            onClickContainer: et,
        } = e,
        { analyticsLocations: ei } = (0, g.Ay)([...Q, h.A.USER_PROFILE_POPOUT]),
        es = (0, C.aL)(),
        eo = (0, R.pb)({ layout: "POPOUT", userId: t.id, guildId: r, channelId: X, messageId: Z, roleId: q }),
        ed = (0, o.bG)([P.A], () => (null != r ? P.A.getGuild(r) : null)),
        ec = a.useMemo(() => (null != r ? { [r]: [t.id] } : {}), [r, t.id]);
    (0, m.Eq)(ec, "UserProfilePopout");
    let eu = a.useRef(null),
        ef = (0, T.Ay)(t.id, r),
        [eA, ep] = a.useState(!1),
        e_ = (0, O.A)(t.id, r),
        { enabled: em } = L.useConfig({ location: "UserProfilePopout" }),
        { isHoveringOrFocusing: eh, isHovering: eg } = (0, j.A)(eu),
        ex = (0, w.fC)(),
        eE = (0, v.A)(ef?.profileFrame?.skuId, "UserProfilePopout"),
        eb = (0, b.A)(ef?.profileFrame?.skuId);
    (0, I.A)({ skuId: ef?.profileFrame?.skuId, openedAt: B, context: eo, analyticsLocations: ei });
    let eN = (0, c.z)({ opacity: +(null != ex.interactionType), config: { duration: 150 } });
    a.useEffect(() => {
        Y?.(eu?.current);
    }, [eu, Y, eE?.skuId]);
    let ej = a.useRef(null),
        ey = t.id === n.id,
        eC = a.useMemo(() => (0, y.A)(), []),
        eP = (e) => {
            z?.(),
                es.dispatch(J.jej.POPOUT_CLOSE),
                (0, G.openUserProfileModal)({
                    sourceAnalyticsLocations: ei,
                    hideRestrictedProfile: !0,
                    customStatusPrompt: eC,
                    ...eo,
                    ...e,
                    appContext: K,
                });
        },
        eS = ee ? "div" : f.l,
        eR = (0, N.GV)(),
        eM = S.Ay.useName(ed?.id, X, t);
    return (0, l.jsx)(g.f5, {
        value: ei,
        children: (0, l.jsx)(R.of, {
            value: eo,
            openedAt: B,
            fetchStartedAt: ef?.fetchStartedAt,
            fetchEndedAt: ef?.fetchEndedAt,
            isLoaded: ef?.isLoaded,
            children: (0, l.jsx)(w.Hl, {
                value: ex,
                children: (0, l.jsxs)(eS, {
                    ref: eu,
                    "aria-labelledby": eR,
                    onClick: et,
                    children: [
                        e_ &&
                            eA &&
                            (0, l.jsx)(d.F, {
                                component: "div",
                                className: eI.g$,
                                children: (0, l.jsx)(A.F, {
                                    children: (0, l.jsx)(ev, { userId: t.id, onSendWave: z }),
                                }),
                            }),
                        (0, l.jsx)(p.A, {
                            children: (0, l.jsx)(_.H, { id: eR, children: en.intl.format(en.t.KRe1Fk, { name: eM }) }),
                        }),
                        (0, l.jsx)(_.F, {
                            children: (0, l.jsxs)(V.A, {
                                user: t,
                                displayProfile: ef,
                                themeType: eZ.d.POPOUT,
                                className: i()(eI.BK, eb),
                                isPrivate: ef?.private === !0,
                                children: [
                                    ef?.private === !0 && (0, l.jsx)(D.A, {}),
                                    null != ex.interactionType &&
                                        (0, l.jsx)(s.animated.div, { style: eN, className: eI.tB }),
                                    (0, l.jsxs)(W.A, {
                                        children: [
                                            (0, l.jsx)(el, {
                                                shouldShowTooltip: null === ex.interactionType,
                                                user: t,
                                                guildId: r,
                                                channelId: X,
                                                onClose: z,
                                                appContext: K,
                                            }),
                                            (0, l.jsx)(H.A, {
                                                themeType: eZ.d.POPOUT,
                                                user: t,
                                                setFriendRequestSent: ep,
                                                toastShowing: e_ && eA && em,
                                            }),
                                            !ey &&
                                                (0, l.jsx)(ea.yo, {
                                                    user: t,
                                                    guildId: r,
                                                    viewProfileItem: $
                                                        ? null
                                                        : (0, l.jsx)(u.Dr, {
                                                              id: "view-profile",
                                                              label: en.intl.string(en.t["+Xp3hq"]),
                                                              action: () => {
                                                                  eP(),
                                                                      (0, M.Wn)({
                                                                          action: "PRESS_VIEW_PROFILE",
                                                                          analyticsLocations: ei,
                                                                          ...eo,
                                                                      });
                                                              },
                                                          }),
                                                    appContext: K,
                                                }),
                                        ],
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: eI.wx,
                                        children: [
                                            (0, l.jsx)(F.A, {
                                                user: t,
                                                displayProfile: ef,
                                                guildId: r,
                                                themeType: eZ.d.POPOUT,
                                            }),
                                            (0, l.jsx)(k.A, { userId: t.id, className: eI.oR, onClose: z }),
                                            (0, l.jsx)(U.A, {
                                                user: t,
                                                displayProfile: ef,
                                                guildId: r,
                                                channelId: X,
                                                themeType: eZ.d.POPOUT,
                                                onOpenProfile: $ ? void 0 : eP,
                                            }),
                                            (0, l.jsx)(er.A, {
                                                ref: ej,
                                                user: t,
                                                guildId: r,
                                                channelId: X,
                                                themeType: eZ.d.POPOUT,
                                                onCloseProfile: z,
                                                prompt: eC,
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(eq, {
                                        user: t,
                                        currentUser: n,
                                        displayProfile: ef,
                                        guild: ed,
                                        isHoveringOrFocusing: null == ex.interactionType && eh,
                                        onOpenProfile: $ ? void 0 : eP,
                                        channelId: X,
                                        onClose: z,
                                    }),
                                    (0, l.jsx)(eB.A, {
                                        user: t,
                                        guildId: r,
                                        channelId: X,
                                        onClose: z,
                                        appContext: K,
                                        disableAutoFocus: ee,
                                    }),
                                    ef?.profileEffect != null &&
                                        (0, l.jsx)(x.A, { skuId: ef?.profileEffect?.skuId, isHovering: eg }),
                                    null != eE && (0, l.jsx)(E.A, { frame: eE, layout: "POPOUT" }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
