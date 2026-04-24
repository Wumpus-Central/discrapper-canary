n.r(t), n.d(t, { default: () => eB });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(419354),
    o = n(17928),
    d = n(73939),
    c = n(717421),
    u = n(477782),
    f = n(305866),
    A = n(871682),
    p = n(140735),
    _ = n(707554),
    h = n(80682),
    m = n(793574),
    g = n(688810),
    x = n(480335),
    I = n(361628),
    v = n(744808),
    E = n(282389),
    N = n(915089),
    b = n(713517),
    C = n(645507),
    j = n(267102),
    P = n(71393),
    y = n(562153),
    R = n(183555),
    S = n(47675),
    M = n(570287),
    O = n(999291);
let T = (0, n(945810).mj)({
    kind: "user",
    name: "2026-03-friend-request-wave",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var L = n(679492),
    w = n(975732),
    G = n(718019),
    U = n(915614),
    F = n(439053),
    D = n(312381),
    V = n(946356),
    k = n(587168),
    W = n(193738),
    H = n(713608),
    X = n(901472),
    Z = n(985925),
    q = n(997509),
    B = n(474397),
    z = n(378570),
    Y = n(495544),
    $ = n(309010),
    K = n(993401),
    Q = n(652215),
    J = n(746080),
    ee = n(486974),
    et = n(985018);
function en(e) {
    let { user: t, guildId: n, channelId: a, onClose: i, appContext: r } = e,
        { newestAnalyticsLocation: s } = (0, g.Ay)(),
        d = (0, j.aL)(),
        c = (0, o.bG)([Y.default], () => Y.default.getId() === t?.id),
        u = (0, Z.q)(n ?? null),
        f = (0, o.bG)([$.A], () => a ?? $.A.getChannelId(n, !0), [a, n]);
    return null == n || !u || c
        ? null
        : (0, l.jsx)(K.br, {
              action: "PRESS_MOD_VIEW",
              icon: H.q,
              tooltipText: et.intl.string(et.t.kj3tz2),
              onClick: () => {
                  q.A.close(),
                      null != f && (0, z.iN)(f),
                      (0, B.A)(r),
                      d.dispatch(Q.jej.POPOUT_CLOSE),
                      (0, X.z)(n, t.id, f ?? J.VV.MEMBER_SAFETY, { modViewPanel: ee.g.INFO, sourceLocation: s }),
                      i?.();
              },
          });
}
var el = n(700174),
    ea = n(983495),
    ei = n(789645),
    er = n(661531),
    es = n(834730),
    eo = n(821609),
    ed = n(308528),
    ec = n(720149),
    eu = n(56562),
    ef = n(432222),
    eA = n(976860),
    ep = n(734057),
    e_ = n(232835),
    eh = n(954571),
    em = n(381941),
    eg = n(901123),
    ex = n(656884);
function eI(e) {
    var t;
    let n,
        { userId: i, onSendWave: r } = e,
        { enabled: s } = T.useConfig({ location: "Friend Request Toast" }),
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
                        let l = await ed.A.openPrivateChannel({ recipientIds: i, location: t, navigateToChannel: !1 }),
                            a = ep.A.getChannel(l);
                        if (null == a) throw Error("Failed to open private channel");
                        eh.default.track(Q.HAw.WAVE_CTA_CLICKED, { source: t }),
                            await ec.A.sendStickers(a.id, [ef.w], "", { location: em.Hx.SEND_WAVE }),
                            e?.(),
                            (0, eA.pX)(Q.BVt.CHANNEL(eg.ME, a.id)),
                            ec.A.jumpToMessage({
                                channelId: a.id,
                                messageId: e_.A.getLastMessage(a.id)?.id ?? "",
                                jumpType: eu.US.INSTANT,
                            });
                    } catch (e) {
                        l(et.intl.string(et.t.Q97Gke));
                    } finally {
                        n.current = !1;
                    }
                },
                [t, i],
            )),
        A = a.useCallback(async () => {
            u(!0), await f(r, d), u(!1);
        }, [r, f]);
    return s
        ? (0, l.jsx)("div", {
              className: ex.$J,
              children:
                  null != o
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", {
                                    className: ex.i3,
                                    children: (0, l.jsx)(ei.P, { color: er.A.colors.STATUS_DANGER }),
                                }),
                                (0, l.jsx)(es.E, { variant: "text-sm/normal", color: "text-muted", children: o }),
                            ],
                        })
                      : (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(es.E, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: et.intl.string(et.t.XcTHmQ),
                                }),
                                (0, l.jsx)(eo.$, {
                                    disabled: c,
                                    variant: "secondary",
                                    text: et.intl.string(et.t.pVlP58),
                                    size: "sm",
                                    onClick: A,
                                }),
                            ],
                        }),
          })
        : null;
}
var ev = n(364522),
    eE = n(695366),
    eN = n(922590),
    eb = n(93246),
    eC = n(994500),
    ej = n(351906),
    eP = n(927578),
    ey = n(694720),
    eR = n(744753),
    eS = n(559506),
    eM = n(886891),
    eO = n(501193),
    eT = n(383448),
    eL = n(900179),
    ew = n(646986),
    eG = n(349419),
    eU = n(878555),
    eF = n(243166),
    eD = n(442228),
    eV = n(568704),
    ek = n(192867),
    eW = n(403369),
    eH = n(360563),
    eX = n(996988);
function eZ(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: a,
            guild: i,
            isHoveringOrFocusing: r,
            onOpenProfile: s,
            channelId: d,
            onClose: c,
        } = e,
        u = y.Ay.useName(i?.id, d, t),
        { relationshipType: f, originApplicationId: A } = (0, o.cf)([eC.A], () => ({
            relationshipType: eC.A.getRelationshipType(t.id),
            originApplicationId: eC.A.getOriginApplicationId(t.id),
        })),
        p = (0, eN.fi)(t.id),
        _ = (0, o.bG)([ej.A], () => ej.A.hidePersonalInformation),
        h = t.id === n.id,
        m = a?.widgets != null && a.widgets.length > 0,
        g = (0, eP.TW)(n),
        x = (0, M.A)(t.id, i?.id);
    return (0, l.jsxs)(ev.Ip, {
        fade: !0,
        className: ex.rf,
        children: [
            (0, l.jsx)(eS.A, { userId: t.id }),
            (0, l.jsx)(eU.Ay, {
                user: t,
                guildId: i?.id,
                displayName: u,
                onClickName: s,
                displayNameTrailing: _ ? null : (0, l.jsx)(eF.A, { userId: t.id, isVisible: r, onOpenProfile: s }),
                pronouns: a?.pronouns,
                onClose: c,
                usernameIcon: t.hasAvatarForGuild(i?.id) && (0, l.jsx)(ek.A, { user: t, nickname: u }),
                trailing: (0, l.jsx)(ey.A, { displayProfile: a, themeType: eX.d.POPOUT, onClose: c }),
            }),
            f === Q.eA$.PENDING_INCOMING &&
                (0, l.jsx)(V.A.Overlay, {
                    children: (0, l.jsx)(eM.A, { user: t, guildId: i?.id, channelId: d, applicationId: A }),
                }),
            p.map((e) =>
                (0, l.jsx)(
                    V.A.Overlay,
                    {
                        children: (0, l.jsx)(eM.A, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: d,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(eT.A, { user: t }),
            !h && (0, l.jsx)(eH.A, { user: t, onOpenProfile: (e) => s?.({ tabSection: e }) }),
            x && (0, l.jsx)(eV.A, { user: t, onClose: c }),
            a?.private && (0, l.jsx)(V.A.Overlay, { children: (0, l.jsx)(eO.A, { username: u }) }),
            h && (0, l.jsx)(eR.A, { isPremiumUser: g, onInteraction: c }),
            t.isProvisional
                ? (0, l.jsx)(V.A.Overlay, {
                      className: ex.Nr,
                      children: (0, l.jsx)(eL.A, {
                          heading: et.intl.string(et.t.Iyka0U),
                          headingIcon: (0, l.jsx)(eE.E, { size: "xxs", color: er.A.colors.TEXT_STRONG }),
                          headingColor: "text-strong",
                          children: (0, l.jsx)(eb.T, { userId: t.id }),
                      }),
                  })
                : (0, l.jsx)(eD.A, { user: t, bio: a?.bio, hidePersonalInformation: _, onClose: c }),
            m && (0, l.jsx)(eG.A, { user: t, widgets: a?.widgets, onOpenUserProfileModal: s }),
            (0, l.jsx)(ew.A, { user: t, currentUser: n, guildId: i?.id, onOpenUserProfileModal: s, onClose: c }),
            null != i && (0, l.jsx)(eW.A, { userId: t.id, guild: i }),
        ],
    });
}
var eq = n(693955);
function eB(e) {
    let {
            user: t,
            currentUser: n,
            guildId: i,
            channelId: H,
            messageId: X,
            roleId: Z,
            openedAt: q,
            closePopout: B,
            setPopoutRef: z,
            disableUserProfileLink: Y = __OVERLAY__,
            newAnalyticsLocations: $ = [],
            appContext: K,
            disableAutoFocus: J = !1,
            onClickContainer: ee,
        } = e,
        { analyticsLocations: ei } = (0, g.Ay)([...$, m.A.USER_PROFILE_POPOUT]),
        er = (0, j.aL)(),
        es = (0, R.pb)({ layout: "POPOUT", userId: t.id, guildId: i, channelId: H, messageId: X, roleId: Z }),
        eo = (0, o.bG)([P.A], () => (null != i ? P.A.getGuild(i) : null)),
        ed = a.useMemo(() => (null != i ? { [i]: [t.id] } : {}), [i, t.id]);
    (0, h.Eq)(ed, "UserProfilePopout");
    let ec = a.useRef(null),
        eu = (0, O.Ay)(t.id, i),
        ef = (0, I.A)(eu?.profileFrame?.skuId, "UserProfilePopout"),
        eA = (0, E.A)(eu?.profileFrame?.skuId),
        [ep, e_] = a.useState(!1),
        eh = (0, M.A)(t.id, i),
        { enabled: em } = T.useConfig({ location: "UserProfilePopout" }),
        { isHoveringOrFocusing: eg, isHovering: ev } = (0, b.A)(ec),
        eE = (0, L.fC)(),
        eN = (0, c.z)({ opacity: +(null != eE.interactionType), config: { duration: 150 } });
    a.useEffect(() => {
        z?.(ec?.current);
    }, [ec, z, ef?.skuId]);
    let eb = a.useRef(null),
        eC = t.id === n.id,
        ej = a.useMemo(() => (0, C.A)(), []),
        eP = (e) => {
            B?.(),
                er.dispatch(Q.jej.POPOUT_CLOSE),
                (0, w.openUserProfileModal)({
                    sourceAnalyticsLocations: ei,
                    hideRestrictedProfile: !0,
                    customStatusPrompt: ej,
                    ...es,
                    ...e,
                    appContext: K,
                });
        },
        ey = J ? "div" : f.l,
        eR = (0, N.GV)(),
        eS = y.Ay.useName(eo?.id, H, t);
    return (0, l.jsx)(g.f5, {
        value: ei,
        children: (0, l.jsx)(R.of, {
            value: es,
            openedAt: q,
            fetchStartedAt: eu?.fetchStartedAt,
            fetchEndedAt: eu?.fetchEndedAt,
            isLoaded: eu?.isLoaded,
            children: (0, l.jsx)(L.Hl, {
                value: eE,
                children: (0, l.jsxs)(ey, {
                    ref: ec,
                    "aria-labelledby": eR,
                    onClick: ee,
                    children: [
                        eh &&
                            ep &&
                            (0, l.jsx)(d.F, {
                                component: "div",
                                className: ex.g$,
                                children: (0, l.jsx)(A.F, {
                                    children: (0, l.jsx)(eI, { userId: t.id, onSendWave: B }),
                                }),
                            }),
                        (0, l.jsx)(p.A, {
                            children: (0, l.jsx)(_.H, { id: eR, children: et.intl.format(et.t.KRe1Fk, { name: eS }) }),
                        }),
                        (0, l.jsx)(_.F, {
                            children: (0, l.jsxs)(V.A, {
                                user: t,
                                displayProfile: eu,
                                themeType: eX.d.POPOUT,
                                className: r()(ex.BK, eA),
                                isPrivate: eu?.private === !0,
                                children: [
                                    eu?.private === !0 && (0, l.jsx)(D.A, {}),
                                    null != eE.interactionType &&
                                        (0, l.jsx)(s.animated.div, { style: eN, className: ex.tB }),
                                    (0, l.jsxs)(k.A, {
                                        children: [
                                            (0, l.jsx)(en, {
                                                shouldShowTooltip: null === eE.interactionType,
                                                user: t,
                                                guildId: i,
                                                channelId: H,
                                                onClose: B,
                                                appContext: K,
                                            }),
                                            (0, l.jsx)(W.A, {
                                                themeType: eX.d.POPOUT,
                                                user: t,
                                                setFriendRequestSent: e_,
                                                toastShowing: eh && ep && em,
                                            }),
                                            !eC &&
                                                (0, l.jsx)(el.yo, {
                                                    user: t,
                                                    guildId: i,
                                                    viewProfileItem: Y
                                                        ? null
                                                        : (0, l.jsx)(u.Dr, {
                                                              id: "view-profile",
                                                              label: et.intl.string(et.t["+Xp3hq"]),
                                                              action: () => {
                                                                  eP(),
                                                                      (0, S.Wn)({
                                                                          action: "PRESS_VIEW_PROFILE",
                                                                          analyticsLocations: ei,
                                                                          ...es,
                                                                      });
                                                              },
                                                          }),
                                                    appContext: K,
                                                }),
                                        ],
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: ex.wx,
                                        children: [
                                            (0, l.jsx)(U.A, {
                                                user: t,
                                                displayProfile: eu,
                                                guildId: i,
                                                themeType: eX.d.POPOUT,
                                            }),
                                            (0, l.jsx)(F.A, { userId: t.id, className: ex.oR, onClose: B }),
                                            (0, l.jsx)(G.A, {
                                                user: t,
                                                displayProfile: eu,
                                                guildId: i,
                                                channelId: H,
                                                themeType: eX.d.POPOUT,
                                                onOpenProfile: Y ? void 0 : eP,
                                            }),
                                            (0, l.jsx)(ea.A, {
                                                ref: eb,
                                                user: t,
                                                guildId: i,
                                                channelId: H,
                                                themeType: eX.d.POPOUT,
                                                onCloseProfile: B,
                                                prompt: ej,
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(eZ, {
                                        user: t,
                                        currentUser: n,
                                        displayProfile: eu,
                                        guild: eo,
                                        isHoveringOrFocusing: null == eE.interactionType && eg,
                                        onOpenProfile: Y ? void 0 : eP,
                                        channelId: H,
                                        onClose: B,
                                    }),
                                    (0, l.jsx)(eq.A, {
                                        user: t,
                                        guildId: i,
                                        channelId: H,
                                        onClose: B,
                                        appContext: K,
                                        disableAutoFocus: J,
                                    }),
                                    eu?.profileEffect != null &&
                                        (0, l.jsx)(x.A, { skuId: eu?.profileEffect?.skuId, isHovering: ev }),
                                    null != ef && (0, l.jsx)(v.A, { frame: ef, layout: "POPOUT" }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
