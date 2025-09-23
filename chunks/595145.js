t.d(n, { Z: () => er }), t(388685);
var l = t(951288),
    i = t(647438),
    r = t(401393),
    o = t(442837),
    s = t(481060),
    a = t(666520),
    c = t(727637),
    d = t(616780),
    u = t(100527),
    m = t(906732),
    f = t(313201),
    p = t(368326),
    h = t(429467),
    j = t(320582),
    x = t(246016),
    v = t(680295),
    g = t(189156),
    b = t(602733),
    y = t(699516),
    O = t(246946),
    Z = t(585483),
    I = t(5192),
    P = t(111361),
    N = t(785717),
    T = t(221292),
    E = t(687158),
    A = t(771362),
    S = t(510659),
    C = t(899007),
    w = t(648052),
    _ = t(867176),
    D = t(280885),
    R = t(537006),
    L = t(681837),
    M = t(78806),
    U = t(91433),
    k = t(451834),
    B = t(900927),
    V = t(944043),
    F = t(502762),
    G = t(530),
    z = t(4517),
    K = t(179828),
    W = t(993160),
    Y = t(574887),
    H = t(996921),
    J = t(693408),
    q = t(661462),
    X = t(76076),
    Q = t(872269),
    $ = t(768111),
    ee = t(228168),
    en = t(981631),
    et = t(671955),
    el = t(388032),
    ei = t(7938);
function er(e) {
    var n;
    let {
            user: t,
            currentUser: er,
            guildId: eo,
            channelId: es,
            messageId: ea,
            roleId: ec,
            sessionId: ed,
            initialSection: eu,
            initialSubsection: em,
            transitionState: ef,
            customStatusPrompt: ep,
            openedAt: eh,
            onClose: ej,
            showGuildProfile: ex = !0,
            sourceAnalyticsLocations: ev = [],
            disableActionsForPreview: eg = !1,
        } = e,
        { analyticsLocations: eb } = (0, m.ZP)([...ev, u.Z.USER_PROFILE_MODAL_V2]),
        ey = (0, N.ZB)({
            layout: "MODAL_V2",
            userId: t.id,
            sourceSessionId: ed,
            guildId: eo,
            channelId: es,
            messageId: ea,
            roleId: ec,
            showGuildProfile: ex,
        }),
        eO = i.useRef(null),
        eZ = (0, c.Z)(eO),
        [eI, eP] = i.useState(!1);
    (0, b.k)("123");
    let eN = (0, S.$m)(),
        eT = (0, s.q_F)({
            opacity: +(null != eN.interactionType),
            config: { duration: 150 },
        }),
        eE = i.useMemo(() => (null != eo ? { [eo]: [t.id] } : {}), [eo, t.id]);
    (0, d.$)(eE, "UserProfileModalV2");
    let eA = (0, E.ZP)(t.id, ex ? eo : void 0),
        eS = I.ZP.useName(null == eA ? void 0 : eA.guildId, es, t),
        { relationshipType: eC, originApplicationId: ew } = (0, o.cj)([y.Z], () => ({
            relationshipType: y.Z.getRelationshipType(t.id),
            originApplicationId: y.Z.getOriginApplicationId(t.id),
        })),
        e_ = (0, o.e7)([O.Z], () => O.Z.hidePersonalInformation),
        eD =
            null == eA
                ? void 0
                : eA.getBannerURL({
                      canAnimate: !1,
                      size: 1024,
                  }),
        eR = (0, p.p)({ location: "UserProfileModalV2" }),
        eL = i.useMemo(() => (null != ep ? ep : (0, h.Z)()), [ep]),
        eM = (0, $.Z)({
            user: t,
            currentUser: er,
        }),
        eU = (0, x.Y)({ userId: t.id }),
        ek = (0, j.vh)(t.id),
        eB = (0, A.Z)(t.id),
        eV = (0, f.Dt)(),
        eF = el.intl.format(el.t.KRe1Fh, { name: eS });
    return (
        i.useEffect(() => {
            let e = () => {
                eP(!0),
                    setTimeout(() => {
                        eP(!1);
                    }, 1000);
            };
            return (
                Z.S.subscribe(en.CkL.SHAKE_PROFILE_MODAL, e),
                () => {
                    Z.S.unsubscribe(en.CkL.SHAKE_PROFILE_MODAL, e), (0, Q.L$)(null);
                }
            );
        }, []),
        (0, l.jsx)(m.Gt, {
            value: eb,
            children: (0, l.jsx)(N.Mt, {
                value: ey,
                openedAt: eh,
                fetchStartedAt: null == eA ? void 0 : eA.fetchStartedAt,
                fetchEndedAt: null == eA ? void 0 : eA.fetchEndedAt,
                isLoaded: null == eA ? void 0 : eA.isLoaded,
                children: (0, l.jsx)(S.NJ, {
                    value: eN,
                    children: (0, l.jsxs)(s.Y0X, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: ei.root,
                        transitionState: ef,
                        "aria-labelledby": eV,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, l.jsxs)(s.UkV, {
                                isShaking: eI,
                                intensity: 1.4,
                                children: [
                                    eg
                                        ? (0, l.jsxs)("div", {
                                              className: ei.previewBar,
                                              children: [
                                                  (0, l.jsxs)(s.X6q, {
                                                      id: eV,
                                                      variant: "heading-sm/normal",
                                                      color: "text-primary",
                                                      children: [
                                                          (0, l.jsx)(s.nn4, {
                                                              children: ""
                                                                  .concat(el.intl.string(el.t.apViam), ": ")
                                                                  .concat(eF),
                                                          }),
                                                          (0, l.jsx)("span", {
                                                              "aria-hidden": !0,
                                                              children: el.intl.string(el.t.apViam),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, l.jsx)(s.zxk, {
                                                      size: "sm",
                                                      variant: "secondary",
                                                      text: el.intl.string(el.t.ojM1xM),
                                                      onClick: ej,
                                                      "aria-label": el.intl.string(el.t.cpT0Cg),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsx)(s.nn4, {
                                              children: (0, l.jsx)(s.H, {
                                                  id: eV,
                                                  children: eF,
                                              }),
                                          }),
                                    (0, l.jsx)(s.y5t, {
                                        children: (0, l.jsxs)(F.Z, {
                                            className: eg ? ei.disabled : void 0,
                                            user: t,
                                            displayProfile: eA,
                                            themeType: et.l.MODAL_V2,
                                            children: [
                                                null != eD &&
                                                    (0, l.jsx)("div", {
                                                        className: ei.backgroundImage,
                                                        style: { backgroundImage: "url(".concat(eD, ")") },
                                                    }),
                                                null != eN.interactionType &&
                                                    (0, l.jsx)(r.animated.div, {
                                                        style: eT,
                                                        className: ei.backdrop,
                                                    }),
                                                (0, l.jsx)(X.Z, {
                                                    onAutoHide: () => (0, Q.L$)(null),
                                                    className: ei.toast,
                                                }),
                                                (0, l.jsxs)("div", {
                                                    className: ei.profile,
                                                    ref: (null == eA ? void 0 : eA.profileEffect) != null ? eO : void 0,
                                                    children: [
                                                        (0, l.jsxs)("div", {
                                                            className: ei.profileHeader,
                                                            children: [
                                                                (0, l.jsx)(_.Z, {
                                                                    user: t,
                                                                    displayProfile: eA,
                                                                    themeType: et.l.MODAL_V2,
                                                                }),
                                                                (0, l.jsx)(k.Z, {
                                                                    userId: t.id,
                                                                    onClose: ej,
                                                                    className: ei.interactionToast,
                                                                }),
                                                                (0, l.jsx)(C.Z, {
                                                                    user: t,
                                                                    displayProfile: eA,
                                                                    guildId: eo,
                                                                    channelId: es,
                                                                    themeType: et.l.MODAL_V2,
                                                                }),
                                                                (0, l.jsx)(z.Z, {
                                                                    user: t,
                                                                    guildId: eo,
                                                                    channelId: es,
                                                                    themeType: et.l.MODAL_V2,
                                                                    hasEntered: ef === s.Dvm.ENTERED,
                                                                    prompt: eR && t.id === er.id ? eL : null,
                                                                    disableToolbar: eg,
                                                                }),
                                                            ],
                                                        }),
                                                        (0, l.jsxs)(s.Ttm, {
                                                            fade: !0,
                                                            className: ei.profileBody,
                                                            children: [
                                                                (0, l.jsx)(G.Z, {
                                                                    user: t,
                                                                    onClose: ej,
                                                                    nickname: I.ZP.useName(
                                                                        null == eA ? void 0 : eA.guildId,
                                                                        es,
                                                                        t,
                                                                    ),
                                                                    nicknameIcons: (0, l.jsx)(L.Z, {
                                                                        size: "sm",
                                                                        userId: t.id,
                                                                    }),
                                                                    nicknameVariant: "heading-xl/semibold",
                                                                    pronouns: null == eA ? void 0 : eA.pronouns,
                                                                    tags: (0, l.jsx)(w.Z, {
                                                                        displayProfile: eA,
                                                                        themeType: et.l.MODAL_V2,
                                                                        onClose: ej,
                                                                    }),
                                                                }),
                                                                eC === en.OGo.PENDING_INCOMING &&
                                                                    (0, l.jsx)(F.Z.Overlay, {
                                                                        className: ei.profileOverlay,
                                                                        children: (0, l.jsx)(U.Z, {
                                                                            user: t,
                                                                            applicationId: ew,
                                                                            guildId:
                                                                                null !=
                                                                                (n = null == eA ? void 0 : eA.guildId)
                                                                                    ? n
                                                                                    : void 0,
                                                                            channelId: es,
                                                                            className: ei.profileBanner,
                                                                        }),
                                                                    }),
                                                                ek.map((e) => {
                                                                    var n;
                                                                    let { applicationId: i } = e;
                                                                    return (0, l.jsx)(
                                                                        F.Z.Overlay,
                                                                        {
                                                                            className: ei.profileOverlay,
                                                                            children: (0, l.jsx)(U.Z, {
                                                                                user: t,
                                                                                guildId:
                                                                                    null !=
                                                                                    (n =
                                                                                        null == eA
                                                                                            ? void 0
                                                                                            : eA.guildId)
                                                                                        ? n
                                                                                        : void 0,
                                                                                channelId: es,
                                                                                isGameRelationship: !0,
                                                                                applicationId: i,
                                                                                className: ei.profileBanner,
                                                                            }),
                                                                        },
                                                                        i,
                                                                    );
                                                                }),
                                                                t.isProvisional &&
                                                                    (0, l.jsx)(F.Z.Overlay, {
                                                                        className: ei.profileOverlay,
                                                                        children: (0, l.jsx)(J.Z, {
                                                                            heading: el.intl.string(el.t.Iyka0d),
                                                                            headingVariant: "text-md/semibold",
                                                                            headingIcon: (0, l.jsx)(s.Mgn, {
                                                                                size: "xs",
                                                                                color: "currentColor",
                                                                            }),
                                                                            className: ei.profileBanner,
                                                                            children: (0, l.jsx)(g.n, {
                                                                                userId: t.id,
                                                                                variant: "text-sm/normal",
                                                                            }),
                                                                        }),
                                                                    }),
                                                                t.id === er.id &&
                                                                    (0, l.jsx)(R.Z, {
                                                                        isPremiumUser: (0, P.I5)(er),
                                                                        onInteraction: ej,
                                                                    }),
                                                                (0, l.jsx)(V.Z, {
                                                                    user: t,
                                                                    className: ei.profileBanner,
                                                                }),
                                                                (0, l.jsx)("div", {
                                                                    className: ei.profileButtons,
                                                                    children: (0, l.jsx)(W.Z, {
                                                                        user: t,
                                                                        currentUser: er,
                                                                        guildId: eo,
                                                                        channelId: es,
                                                                        displayProfile: eA,
                                                                        relationshipType: eC,
                                                                        onClose: ej,
                                                                    }),
                                                                }),
                                                                (null == eA ? void 0 : eA.bio) != null &&
                                                                    (null == eA ? void 0 : eA.bio) !== "" &&
                                                                    !e_ &&
                                                                    (0, l.jsx)(D.Z, {
                                                                        userBio: eA.bio,
                                                                        setLineClamp: !1,
                                                                    }),
                                                                eU.length > 0 &&
                                                                    (0, l.jsx)(J.Z, {
                                                                        heading: el.intl.string(el.t["Uv/eT0"]),
                                                                        children: (0, l.jsx)(M.Z, {
                                                                            applicationIds: eU,
                                                                        }),
                                                                    }),
                                                                (0, l.jsx)(J.Z, {
                                                                    heading: el.intl.string(el.t.a6XYDw),
                                                                    children: (0, l.jsx)(B.Z, {
                                                                        userId: t.id,
                                                                        guildId: null == eA ? void 0 : eA.guildId,
                                                                        tooltipDelay: ee.vB,
                                                                    }),
                                                                }),
                                                                (null == eA ? void 0 : eA.guildId) != null &&
                                                                    (0, l.jsx)(K.Z, {
                                                                        user: t,
                                                                        currentUser: er,
                                                                        guildId: eA.guildId,
                                                                        className: ei.profileRolesSection,
                                                                        headingVariant: "text-xs/medium",
                                                                        headingColor: "currentColor",
                                                                        scrollIntoView: em === ee.Tb.ROLES,
                                                                    }),
                                                                eB.length > 0 &&
                                                                    (0, l.jsx)(J.Z, {
                                                                        heading: el.intl.string(el.t["3fe7U1"]),
                                                                        scrollIntoView: em === ee.Tb.CONNECTIONS,
                                                                        children: (0, l.jsx)(Y.Z, {
                                                                            connections: eB,
                                                                            userId: t.id,
                                                                            className: ei.profileAppConnections,
                                                                        }),
                                                                    }),
                                                                (0, l.jsx)(J.Z, {
                                                                    heading: el.intl.string(el.t["mQKv+v"]),
                                                                    scrollIntoView: em === ee.Tb.NOTE,
                                                                    children: (0, l.jsx)(a.Z, {
                                                                        userId: t.id,
                                                                        className: ei.profileNote,
                                                                        autoFocus: em === ee.Tb.NOTE,
                                                                        onUpdate: () =>
                                                                            (0, T.pQ)(
                                                                                (function (e) {
                                                                                    for (
                                                                                        var n = 1;
                                                                                        n < arguments.length;
                                                                                        n++
                                                                                    ) {
                                                                                        var t =
                                                                                                null != arguments[n]
                                                                                                    ? arguments[n]
                                                                                                    : {},
                                                                                            l = Object.keys(t);
                                                                                        "function" ==
                                                                                            typeof Object.getOwnPropertySymbols &&
                                                                                            (l = l.concat(
                                                                                                Object.getOwnPropertySymbols(
                                                                                                    t,
                                                                                                ).filter(function (e) {
                                                                                                    return Object.getOwnPropertyDescriptor(
                                                                                                        t,
                                                                                                        e,
                                                                                                    ).enumerable;
                                                                                                }),
                                                                                            )),
                                                                                            l.forEach(function (n) {
                                                                                                var l;
                                                                                                (l = t[n]),
                                                                                                    n in e
                                                                                                        ? Object.defineProperty(
                                                                                                              e,
                                                                                                              n,
                                                                                                              {
                                                                                                                  value: l,
                                                                                                                  enumerable:
                                                                                                                      !0,
                                                                                                                  configurable:
                                                                                                                      !0,
                                                                                                                  writable:
                                                                                                                      !0,
                                                                                                              },
                                                                                                          )
                                                                                                        : (e[n] = l);
                                                                                            });
                                                                                    }
                                                                                    return e;
                                                                                })({ action: "SET_NOTE" }, ey),
                                                                            ),
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                        (null == eA ? void 0 : eA.profileEffect) != null &&
                                                            (0, l.jsx)(v.Z, {
                                                                profileEffectId:
                                                                    null == eA ? void 0 : eA.profileEffect.id,
                                                                isHovering: eZ,
                                                            }),
                                                    ],
                                                }),
                                                (0, l.jsx)(q.Z, {
                                                    user: t,
                                                    currentUser: er,
                                                    displayProfile: eA,
                                                    guildId: eo,
                                                    channelId: es,
                                                    items: eM,
                                                    initialSection: eu,
                                                    initialSubsection: em,
                                                    onClose: ej,
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            (0, l.jsx)(H.Z, {
                                userId: t.id,
                                className: ei.editingToolbar,
                            }),
                        ],
                    }),
                }),
            }),
        })
    );
}
