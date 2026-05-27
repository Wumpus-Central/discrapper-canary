l.r(i), l.d(i, { default: () => eX });
var s = l(627968),
    n = l(64700),
    a = l(503698),
    r = l.n(a),
    t = l(873174),
    d = l(17928),
    o = l(868285),
    c = l(717421),
    u = l(477782),
    p = l(305866),
    h = l(871682),
    A = l(140735),
    x = l(707554),
    f = l(80682),
    j = l(793574),
    I = l(688810),
    g = l(480335),
    m = l(31956),
    P = l(361628),
    v = l(744808),
    y = l(282389),
    T = l(915089),
    O = l(713517),
    C = l(645507),
    E = l(267102),
    N = l(71393),
    w = l(562153),
    U = l(183555),
    k = l(47675),
    S = l(570287),
    b = l(999291);
let F = (0, l(945810).mj)({
    kind: "user",
    name: "2026-03-friend-request-wave",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var R = l(679492),
    _ = l(975732),
    L = l(718019),
    V = l(915614),
    M = l(439053),
    G = l(312381),
    H = l(946356),
    q = l(587168),
    W = l(193738),
    D = l(713608),
    z = l(901472),
    B = l(985925),
    X = l(468689),
    $ = l(474397),
    Z = l(378570),
    J = l(495544),
    K = l(309010),
    Q = l(993401),
    Y = l(652215),
    ee = l(746080),
    ei = l(486974),
    el = l(375708);
function es(e) {
    let { user: i, guildId: l, channelId: n, onClose: a, appContext: r } = e,
        { newestAnalyticsLocation: t } = (0, I.Ay)(),
        o = (0, E.aL)(),
        c = (0, d.bG)([J.default], () => J.default.getId() === i?.id),
        u = (0, B.q)(l ?? null),
        p = (0, d.bG)([K.A], () => n ?? K.A.getChannelId(l, !0), [n, l]);
    return null == l || !u || c
        ? null
        : (0, s.jsx)(Q.br, {
              action: "PRESS_MOD_VIEW",
              icon: D.q,
              tooltipText: el.intl.string(el.t.kj3tz2),
              onClick: () => {
                  X.A.close(),
                      null != p && (0, Z.iN)(p),
                      (0, $.A)(r),
                      o.dispatch(Y.jej.POPOUT_CLOSE),
                      (0, z.z)(l, i.id, p ?? ee.VV.MEMBER_SAFETY, { modViewPanel: ei.g.INFO, sourceLocation: t }),
                      a?.();
              },
          });
}
var en = l(700174),
    ea = l(983495),
    er = l(789645),
    et = l(661531),
    ed = l(834730),
    eo = l(821609),
    ec = l(308528),
    eu = l(720149),
    ep = l(56562),
    eh = l(330001),
    eA = l(432222),
    ex = l(976860),
    ef = l(734057),
    ej = l(232835),
    eI = l(381941),
    eg = l(901123),
    em = l(656884);
function eP(e) {
    var i;
    let l,
        { userId: a, onSendWave: r } = e,
        { enabled: t } = F.useConfig({ location: "Friend Request Toast" }),
        [d, o] = n.useState(null),
        [c, u] = n.useState(!1),
        p =
            ((i = "User Profile Friend Request Toast"),
            (l = n.useRef(!1)),
            n.useCallback(
                async (e, s) => {
                    try {
                        if (l.current) return;
                        l.current = !0;
                        let s = await ec.A.openPrivateChannel({ recipientIds: a, location: i, navigateToChannel: !1 }),
                            n = ef.A.getChannel(s);
                        if (null == n) throw Error("Failed to open private channel");
                        (0, eh.W)({ channelId: n.id, source: i }),
                            await eu.A.sendStickers(n.id, [eA.w], "", { location: eI.Hx.SEND_WAVE }),
                            e?.(),
                            (0, ex.pX)(Y.BVt.CHANNEL(eg.ME, n.id)),
                            eu.A.jumpToMessage({
                                channelId: n.id,
                                messageId: ej.A.getLastMessage(n.id)?.id ?? "",
                                jumpType: ep.US.INSTANT,
                            });
                    } catch (e) {
                        s(el.intl.string(el.t.Q97Gke));
                    } finally {
                        l.current = !1;
                    }
                },
                [i, a],
            )),
        h = n.useCallback(async () => {
            u(!0), await p(r, o), u(!1);
        }, [r, p]);
    return t
        ? (0, s.jsx)("div", {
              className: em.$J,
              children:
                  null != d
                      ? (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)("div", {
                                    className: em.i3,
                                    children: (0, s.jsx)(er.P, { color: et.A.colors.STATUS_DANGER }),
                                }),
                                (0, s.jsx)(ed.E, { variant: "text-sm/normal", color: "text-muted", children: d }),
                            ],
                        })
                      : (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)(ed.E, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: el.intl.string(el.t.XcTHmQ),
                                }),
                                (0, s.jsx)(eo.$, {
                                    disabled: c,
                                    variant: "secondary",
                                    text: el.intl.string(el.t.pVlP58),
                                    size: "sm",
                                    onClick: h,
                                }),
                            ],
                        }),
          })
        : null;
}
var ev = l(364522),
    ey = l(695366),
    eT = l(922590),
    eO = l(93246),
    eC = l(994500),
    eE = l(351906),
    eN = l(428262),
    ew = l(328296),
    eU = l(744753),
    ek = l(559506),
    eS = l(931481),
    eb = l(501193),
    eF = l(383448),
    eR = l(900179),
    e_ = l(646986),
    eL = l(349419),
    eV = l(878555),
    eM = l(243166),
    eG = l(442228),
    eH = l(192867),
    eq = l(403369),
    eW = l(360563),
    eD = l(996988);
function ez(e) {
    let {
            user: i,
            currentUser: l,
            displayProfile: n,
            guild: a,
            isHoveringOrFocusing: r,
            onOpenProfile: t,
            channelId: o,
            onClose: c,
        } = e,
        u = w.Ay.useName(a?.id, o, i),
        { relationshipType: p, originApplicationId: h } = (0, d.cf)([eC.A], () => ({
            relationshipType: eC.A.getRelationshipType(i.id),
            originApplicationId: eC.A.getOriginApplicationId(i.id),
        })),
        A = (0, eT.fi)(i.id),
        x = (0, d.bG)([eE.A], () => eE.A.hidePersonalInformation),
        f = i.id === l.id,
        j = n?.widgets != null && n.widgets.length > 0,
        I = (0, eN.TW)(l);
    return (0, s.jsxs)(ev.Ip, {
        fade: !0,
        className: em.rf,
        children: [
            (0, s.jsx)(ek.A, { userId: i.id }),
            (0, s.jsx)(eV.Ay, {
                user: i,
                guildId: a?.id,
                displayName: u,
                onClickName: t,
                displayNameTrailing: x ? null : (0, s.jsx)(eM.A, { userId: i.id, isVisible: r, onOpenProfile: t }),
                pronouns: n?.pronouns,
                onClose: c,
                usernameIcon: i.hasAvatarForGuild(a?.id) && (0, s.jsx)(eH.A, { user: i, nickname: u }),
                trailing: (0, s.jsx)(ew.A, { displayProfile: n, themeType: eD.d.POPOUT, onClose: c }),
            }),
            p === Y.eA$.PENDING_INCOMING &&
                (0, s.jsx)(H.A.Overlay, {
                    children: (0, s.jsx)(eS.A, { user: i, guildId: a?.id, channelId: o, applicationId: h }),
                }),
            A.map((e) =>
                (0, s.jsx)(
                    H.A.Overlay,
                    {
                        children: (0, s.jsx)(eS.A, {
                            user: i,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: o,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, s.jsx)(eF.A, { user: i }),
            !f && (0, s.jsx)(eW.A, { user: i, onOpenProfile: (e) => t?.({ tabSection: e }) }),
            n?.private && (0, s.jsx)(H.A.Overlay, { children: (0, s.jsx)(eb.A, { username: u }) }),
            f && (0, s.jsx)(eU.A, { isPremiumUser: I, onInteraction: c }),
            i.isProvisional
                ? (0, s.jsx)(H.A.Overlay, {
                      className: em.Nr,
                      children: (0, s.jsx)(eR.A, {
                          heading: el.intl.string(el.t.Iyka0U),
                          headingIcon: (0, s.jsx)(ey.E, { size: "xxs", color: et.A.colors.TEXT_STRONG }),
                          headingColor: "text-strong",
                          children: (0, s.jsx)(eO.T, { userId: i.id }),
                      }),
                  })
                : (0, s.jsx)(eG.A, { user: i, bio: n?.bio, hidePersonalInformation: x, onClose: c }),
            j && (0, s.jsx)(eL.A, { user: i, widgets: n?.widgets, onOpenUserProfileModal: t }),
            (0, s.jsx)(e_.A, { user: i, currentUser: l, guildId: a?.id, onOpenUserProfileModal: t, onClose: c }),
            null != a && (0, s.jsx)(eq.A, { userId: i.id, guild: a }),
        ],
    });
}
var eB = l(920947);
function eX(e) {
    let {
            user: i,
            currentUser: l,
            guildId: a,
            channelId: D,
            messageId: z,
            roleId: B,
            openedAt: X,
            closePopout: $,
            setPopoutRef: Z,
            disableUserProfileLink: J = __OVERLAY__,
            newAnalyticsLocations: K = [],
            appContext: Q,
            disableAutoFocus: ee = !1,
            onClickContainer: ei,
        } = e,
        { analyticsLocations: er } = (0, I.Ay)([...K, j.A.USER_PROFILE_POPOUT]),
        et = (0, E.aL)(),
        ed = (0, U.pb)({ layout: "POPOUT", userId: i.id, guildId: a, channelId: D, messageId: z, roleId: B }),
        eo = (0, d.bG)([N.A], () => (null != a ? N.A.getGuild(a) : null)),
        ec = n.useMemo(() => (null != a ? { [a]: [i.id] } : {}), [a, i.id]);
    (0, f.Eq)(ec, "UserProfilePopout");
    let eu = n.useRef(null),
        ep = (0, b.Ay)(i.id, a),
        [eh, eA] = n.useState(!1),
        ex = (0, S.A)(i.id, a),
        { enabled: ef } = F.useConfig({ location: "UserProfilePopout" }),
        { isHoveringOrFocusing: ej, isHovering: eI } = (0, O.A)(eu),
        eg = (0, R.fC)(),
        ev = (0, P.A)(ep?.profileFrame?.skuId, "UserProfilePopout"),
        ey = (0, y.A)(ep?.profileFrame?.skuId);
    (0, m.A)({ skuId: ep?.profileFrame?.skuId, openedAt: X, context: ed, analyticsLocations: er });
    let eT = (0, c.z)({ opacity: +(null != eg.interactionType), config: { duration: 150 } });
    n.useEffect(() => {
        Z?.(eu?.current);
    }, [eu, Z, ev?.skuId]);
    let eO = n.useRef(null),
        eC = i.id === l.id,
        eE = n.useMemo(() => (0, C.A)(), []),
        eN = (e) => {
            $?.(),
                et.dispatch(Y.jej.POPOUT_CLOSE),
                (0, _.openUserProfileModal)({
                    sourceAnalyticsLocations: er,
                    hideRestrictedProfile: !0,
                    customStatusPrompt: eE,
                    ...ed,
                    ...e,
                    appContext: Q,
                });
        },
        ew = ee ? "div" : p.l,
        eU = (0, T.GV)(),
        ek = w.Ay.useName(eo?.id, D, i);
    return (0, s.jsx)(I.f5, {
        value: er,
        children: (0, s.jsx)(U.of, {
            value: ed,
            openedAt: X,
            fetchStartedAt: ep?.fetchStartedAt,
            fetchEndedAt: ep?.fetchEndedAt,
            isLoaded: ep?.isLoaded,
            children: (0, s.jsx)(R.Hl, {
                value: eg,
                children: (0, s.jsxs)(ew, {
                    ref: eu,
                    "aria-labelledby": eU,
                    onClick: ei,
                    children: [
                        ex &&
                            eh &&
                            (0, s.jsx)(o.F, {
                                component: "div",
                                className: em.g$,
                                children: (0, s.jsx)(h.F, {
                                    children: (0, s.jsx)(eP, { userId: i.id, onSendWave: $ }),
                                }),
                            }),
                        (0, s.jsx)(A.A, {
                            children: (0, s.jsx)(x.H, { id: eU, children: el.intl.format(el.t.KRe1Fk, { name: ek }) }),
                        }),
                        (0, s.jsx)(x.F, {
                            children: (0, s.jsxs)(H.A, {
                                user: i,
                                displayProfile: ep,
                                themeType: eD.d.POPOUT,
                                className: r()(em.BK, ey),
                                isPrivate: ep?.private === !0,
                                children: [
                                    ep?.private === !0 && (0, s.jsx)(G.A, {}),
                                    null != eg.interactionType &&
                                        (0, s.jsx)(t.animated.div, { style: eT, className: em.tB }),
                                    (0, s.jsxs)(q.A, {
                                        children: [
                                            (0, s.jsx)(es, {
                                                shouldShowTooltip: null === eg.interactionType,
                                                user: i,
                                                guildId: a,
                                                channelId: D,
                                                onClose: $,
                                                appContext: Q,
                                            }),
                                            (0, s.jsx)(W.A, {
                                                themeType: eD.d.POPOUT,
                                                user: i,
                                                setFriendRequestSent: eA,
                                                toastShowing: ex && eh && ef,
                                            }),
                                            !eC &&
                                                (0, s.jsx)(en.yo, {
                                                    user: i,
                                                    guildId: a,
                                                    viewProfileItem: J
                                                        ? null
                                                        : (0, s.jsx)(u.Dr, {
                                                              id: "view-profile",
                                                              label: el.intl.string(el.t["+Xp3hq"]),
                                                              action: () => {
                                                                  eN(),
                                                                      (0, k.Wn)({
                                                                          action: "PRESS_VIEW_PROFILE",
                                                                          analyticsLocations: er,
                                                                          ...ed,
                                                                      });
                                                              },
                                                          }),
                                                    appContext: Q,
                                                }),
                                        ],
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: em.wx,
                                        children: [
                                            (0, s.jsx)(V.A, {
                                                user: i,
                                                displayProfile: ep,
                                                guildId: a,
                                                themeType: eD.d.POPOUT,
                                            }),
                                            (0, s.jsx)(M.A, { userId: i.id, className: em.oR, onClose: $ }),
                                            (0, s.jsx)(L.A, {
                                                user: i,
                                                displayProfile: ep,
                                                guildId: a,
                                                channelId: D,
                                                themeType: eD.d.POPOUT,
                                                onOpenProfile: J ? void 0 : eN,
                                            }),
                                            (0, s.jsx)(ea.A, {
                                                ref: eO,
                                                user: i,
                                                guildId: a,
                                                channelId: D,
                                                themeType: eD.d.POPOUT,
                                                onCloseProfile: $,
                                                prompt: eE,
                                            }),
                                        ],
                                    }),
                                    (0, s.jsx)(ez, {
                                        user: i,
                                        currentUser: l,
                                        displayProfile: ep,
                                        guild: eo,
                                        isHoveringOrFocusing: null == eg.interactionType && ej,
                                        onOpenProfile: J ? void 0 : eN,
                                        channelId: D,
                                        onClose: $,
                                    }),
                                    (0, s.jsx)(eB.A, {
                                        user: i,
                                        guildId: a,
                                        channelId: D,
                                        onClose: $,
                                        appContext: Q,
                                        disableAutoFocus: ee,
                                    }),
                                    ep?.profileEffect != null &&
                                        (0, s.jsx)(g.A, { skuId: ep?.profileEffect?.skuId, isHovering: eI }),
                                    null != ev && (0, s.jsx)(v.A, { frame: ev }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
