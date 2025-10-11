t.d(n, { Z: () => ea }), t(388685);
var l = t(951288),
    i = t(647438),
    r = t(599273),
    o = t(442837),
    s = t(481060),
    a = t(666520),
    c = t(616780),
    d = t(100527),
    u = t(906732),
    m = t(313201),
    p = t(104505),
    f = t(368326),
    h = t(429467),
    x = t(320582),
    j = t(246016),
    v = t(680295),
    g = t(189156),
    b = t(602733),
    I = t(699516),
    y = t(246946),
    Z = t(585483),
    O = t(5192),
    N = t(111361),
    P = t(785717),
    T = t(221292),
    A = t(621853),
    E = t(687158),
    S = t(250822),
    C = t(771362),
    _ = t(510659),
    w = t(899007),
    D = t(648052),
    R = t(867176),
    L = t(280885),
    M = t(537006),
    U = t(681837),
    k = t(78806),
    B = t(91433),
    V = t(451834),
    F = t(900927),
    G = t(944043),
    z = t(502762),
    H = t(530),
    W = t(4517),
    K = t(179828),
    Y = t(769321),
    J = t(993160),
    q = t(574887),
    X = t(996921),
    Q = t(693408),
    $ = t(661462),
    ee = t(76076),
    en = t(872269),
    et = t(768111),
    el = t(228168),
    ei = t(981631),
    er = t(671955),
    eo = t(388032),
    es = t(293496);
function ea(e) {
    var n;
    let {
            user: t,
            currentUser: ea,
            guildId: ec,
            channelId: ed,
            messageId: eu,
            roleId: em,
            sessionId: ep,
            initialSection: ef,
            initialSubsection: eh,
            transitionState: ex,
            customStatusPrompt: ej,
            openedAt: ev,
            onClose: eg,
            showGuildProfile: eb = !0,
            sourceAnalyticsLocations: eI = [],
            disableActionsForPreview: ey = !1,
        } = e,
        { analyticsLocations: eZ } = (0, u.ZP)([...eI, d.Z.USER_PROFILE_MODAL_V2]),
        eO = (0, P.ZB)({
            layout: "MODAL_V2",
            userId: t.id,
            sourceSessionId: ep,
            guildId: ec,
            channelId: ed,
            messageId: eu,
            roleId: em,
            showGuildProfile: eb,
        }),
        eN = i.useRef(null),
        eP = (0, p.X)(eN),
        [eT, eA] = i.useState(!1),
        { defaultWishlistId: eE } = (0, o.cj)([A.Z], () => ({ defaultWishlistId: A.Z.getFirstWishlistId(t.id) }));
    (0, b.kZ)(eE, t.id);
    let eS = (0, _.$m)(),
        eC = (0, s.q_F)({
            opacity: +(null != eS.interactionType),
            config: { duration: 150 },
        }),
        e_ = i.useMemo(() => (null != ec ? { [ec]: [t.id] } : {}), [ec, t.id]);
    (0, c.$)(e_, "UserProfileModalV2");
    let ew = (0, E.ZP)(t.id, eb ? ec : void 0),
        eD = O.ZP.useName(null == ew ? void 0 : ew.guildId, ed, t),
        { relationshipType: eR, originApplicationId: eL } = (0, o.cj)([I.Z], () => ({
            relationshipType: I.Z.getRelationshipType(t.id),
            originApplicationId: I.Z.getOriginApplicationId(t.id),
        })),
        eM = (0, o.e7)([y.Z], () => y.Z.hidePersonalInformation),
        eU =
            null == ew
                ? void 0
                : ew.getBannerURL({
                      canAnimate: !1,
                      size: 1024,
                  }),
        ek = (0, f.p)({ location: "UserProfileModalV2" }),
        eB = i.useMemo(() => (null != ej ? ej : (0, h.Z)()), [ej]),
        eV = (0, et.Z)({
            user: t,
            currentUser: ea,
        }),
        eF = (0, j.Y)({ userId: t.id }),
        eG = (0, x.vh)(t.id),
        ez = (0, C.Z)(t.id),
        eH = (0, S.Z)(t.id),
        eW = (0, m.Dt)(),
        eK = eo.intl.format(eo.t.KRe1Fh, { name: eD });
    return (
        i.useEffect(() => {
            let e = () => {
                eA(!0),
                    setTimeout(() => {
                        eA(!1);
                    }, 1000);
            };
            return (
                Z.S.subscribe(ei.CkL.SHAKE_PROFILE_MODAL, e),
                () => {
                    Z.S.unsubscribe(ei.CkL.SHAKE_PROFILE_MODAL, e), (0, en.L$)(null);
                }
            );
        }, []),
        (0, l.jsx)(u.Gt, {
            value: eZ,
            children: (0, l.jsx)(P.Mt, {
                value: eO,
                openedAt: ev,
                fetchStartedAt: null == ew ? void 0 : ew.fetchStartedAt,
                fetchEndedAt: null == ew ? void 0 : ew.fetchEndedAt,
                isLoaded: null == ew ? void 0 : ew.isLoaded,
                children: (0, l.jsx)(_.NJ, {
                    value: eS,
                    children: (0, l.jsxs)(s.Y0X, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: es.root,
                        transitionState: ex,
                        "aria-labelledby": eW,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, l.jsxs)(s.UkV, {
                                isShaking: eT,
                                intensity: 1.4,
                                children: [
                                    ey
                                        ? (0, l.jsxs)("div", {
                                              className: es.previewBar,
                                              children: [
                                                  (0, l.jsxs)(s.Heading, {
                                                      id: eW,
                                                      variant: "heading-sm/normal",
                                                      color: "text-primary",
                                                      children: [
                                                          (0, l.jsx)(s.nn4, {
                                                              children: ""
                                                                  .concat(eo.intl.string(eo.t.apViam), ": ")
                                                                  .concat(eK),
                                                          }),
                                                          (0, l.jsx)("span", {
                                                              "aria-hidden": !0,
                                                              children: eo.intl.string(eo.t.apViam),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, l.jsx)(s.Button, {
                                                      size: "sm",
                                                      variant: "secondary",
                                                      text: eo.intl.string(eo.t.ojM1xM),
                                                      onClick: eg,
                                                      "aria-label": eo.intl.string(eo.t.cpT0Cg),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsx)(s.nn4, {
                                              children: (0, l.jsx)(s.H, {
                                                  id: eW,
                                                  children: eK,
                                              }),
                                          }),
                                    (0, l.jsx)(s.y5t, {
                                        children: (0, l.jsxs)(z.Z, {
                                            className: ey ? es.disabled : void 0,
                                            user: t,
                                            displayProfile: ew,
                                            themeType: er.l.MODAL_V2,
                                            children: [
                                                null != eU &&
                                                    (0, l.jsx)("div", {
                                                        className: es.backgroundImage,
                                                        style: { backgroundImage: "url(".concat(eU, ")") },
                                                    }),
                                                null != eS.interactionType &&
                                                    (0, l.jsx)(r.animated.div, {
                                                        style: eC,
                                                        className: es.backdrop,
                                                    }),
                                                (0, l.jsx)(ee.Z, {
                                                    onAutoHide: () => (0, en.L$)(null),
                                                    className: es.toast,
                                                }),
                                                (0, l.jsxs)("div", {
                                                    className: es.profile,
                                                    ref: (null == ew ? void 0 : ew.profileEffect) != null ? eN : void 0,
                                                    children: [
                                                        (0, l.jsxs)("div", {
                                                            className: es.profileHeader,
                                                            children: [
                                                                (0, l.jsx)(R.Z, {
                                                                    user: t,
                                                                    displayProfile: ew,
                                                                    themeType: er.l.MODAL_V2,
                                                                }),
                                                                (0, l.jsx)(V.Z, {
                                                                    userId: t.id,
                                                                    onClose: eg,
                                                                    className: es.interactionToast,
                                                                }),
                                                                (0, l.jsx)(w.Z, {
                                                                    user: t,
                                                                    displayProfile: ew,
                                                                    guildId: ec,
                                                                    channelId: ed,
                                                                    themeType: er.l.MODAL_V2,
                                                                }),
                                                                (0, l.jsx)(W.Z, {
                                                                    user: t,
                                                                    guildId: ec,
                                                                    channelId: ed,
                                                                    themeType: er.l.MODAL_V2,
                                                                    hasEntered: ex === s.Dvm.ENTERED,
                                                                    prompt: ek && t.id === ea.id ? eB : null,
                                                                    disableToolbar: ey,
                                                                }),
                                                            ],
                                                        }),
                                                        (0, l.jsxs)(s.Ttm, {
                                                            fade: !0,
                                                            className: es.profileBody,
                                                            children: [
                                                                (0, l.jsx)(H.Z, {
                                                                    user: t,
                                                                    guildId: ec,
                                                                    onClose: eg,
                                                                    nickname: O.ZP.useName(
                                                                        null == ew ? void 0 : ew.guildId,
                                                                        ed,
                                                                        t,
                                                                    ),
                                                                    nicknameIcons: (0, l.jsx)(U.Z, {
                                                                        size: "sm",
                                                                        userId: t.id,
                                                                    }),
                                                                    nicknameVariant: "heading-xl/semibold",
                                                                    pronouns: null == ew ? void 0 : ew.pronouns,
                                                                    tags: (0, l.jsx)(D.Z, {
                                                                        displayProfile: ew,
                                                                        themeType: er.l.MODAL_V2,
                                                                        onClose: eg,
                                                                    }),
                                                                }),
                                                                eR === ei.OGo.PENDING_INCOMING &&
                                                                    (0, l.jsx)(z.Z.Overlay, {
                                                                        className: es.profileOverlay,
                                                                        children: (0, l.jsx)(B.Z, {
                                                                            user: t,
                                                                            applicationId: eL,
                                                                            guildId:
                                                                                null !=
                                                                                (n = null == ew ? void 0 : ew.guildId)
                                                                                    ? n
                                                                                    : void 0,
                                                                            channelId: ed,
                                                                            className: es.profileBanner,
                                                                        }),
                                                                    }),
                                                                eG.map((e) => {
                                                                    var n;
                                                                    let { applicationId: i } = e;
                                                                    return (0, l.jsx)(
                                                                        z.Z.Overlay,
                                                                        {
                                                                            className: es.profileOverlay,
                                                                            children: (0, l.jsx)(B.Z, {
                                                                                user: t,
                                                                                guildId:
                                                                                    null !=
                                                                                    (n =
                                                                                        null == ew
                                                                                            ? void 0
                                                                                            : ew.guildId)
                                                                                        ? n
                                                                                        : void 0,
                                                                                channelId: ed,
                                                                                isGameRelationship: !0,
                                                                                applicationId: i,
                                                                                className: es.profileBanner,
                                                                            }),
                                                                        },
                                                                        i,
                                                                    );
                                                                }),
                                                                t.isProvisional &&
                                                                    (0, l.jsx)(z.Z.Overlay, {
                                                                        className: es.profileOverlay,
                                                                        children: (0, l.jsx)(Q.Z, {
                                                                            heading: eo.intl.string(eo.t.Iyka0d),
                                                                            headingVariant: "text-md/semibold",
                                                                            headingIcon: (0, l.jsx)(s.Mgn, {
                                                                                size: "xs",
                                                                                color: "currentColor",
                                                                            }),
                                                                            className: es.profileBanner,
                                                                            children: (0, l.jsx)(g.n, {
                                                                                userId: t.id,
                                                                                variant: "text-sm/normal",
                                                                            }),
                                                                        }),
                                                                    }),
                                                                t.id === ea.id &&
                                                                    (0, l.jsx)(M.Z, {
                                                                        isPremiumUser: (0, N.I5)(ea),
                                                                        onInteraction: eg,
                                                                    }),
                                                                (0, l.jsx)(G.Z, {
                                                                    user: t,
                                                                    className: es.profileBanner,
                                                                }),
                                                                (0, l.jsx)("div", {
                                                                    className: es.profileButtons,
                                                                    children: (0, l.jsx)(J.Z, {
                                                                        user: t,
                                                                        currentUser: ea,
                                                                        guildId: ec,
                                                                        channelId: ed,
                                                                        displayProfile: ew,
                                                                        relationshipType: eR,
                                                                        onClose: eg,
                                                                    }),
                                                                }),
                                                                (null == ew ? void 0 : ew.bio) != null &&
                                                                    (null == ew ? void 0 : ew.bio) !== "" &&
                                                                    !eM &&
                                                                    (0, l.jsx)(L.Z, {
                                                                        userBio: ew.bio,
                                                                        setLineClamp: !1,
                                                                    }),
                                                                eF.length > 0 &&
                                                                    (0, l.jsx)(Q.Z, {
                                                                        heading: eo.intl.string(eo.t["Uv/eT0"]),
                                                                        children: (0, l.jsx)(k.Z, {
                                                                            applicationIds: eF,
                                                                        }),
                                                                    }),
                                                                (0, l.jsx)(Q.Z, {
                                                                    heading: eo.intl.string(eo.t.a6XYDw),
                                                                    children: (0, l.jsx)(F.Z, {
                                                                        userId: t.id,
                                                                        guildId: null == ew ? void 0 : ew.guildId,
                                                                        tooltipDelay: el.vB,
                                                                    }),
                                                                }),
                                                                (null == ew ? void 0 : ew.guildId) != null &&
                                                                    (0, l.jsx)(K.Z, {
                                                                        user: t,
                                                                        currentUser: ea,
                                                                        guildId: ew.guildId,
                                                                        className: es.profileRolesSection,
                                                                        headingVariant: "text-xs/medium",
                                                                        headingColor: "currentColor",
                                                                        scrollIntoView: eh === el.Tb.ROLES,
                                                                    }),
                                                                ez.length > 0 &&
                                                                    (0, l.jsx)(Q.Z, {
                                                                        heading: eo.intl.string(eo.t["3fe7U1"]),
                                                                        scrollIntoView: eh === el.Tb.CONNECTIONS,
                                                                        children: (0, l.jsx)(q.Z, {
                                                                            connections: ez,
                                                                            userId: t.id,
                                                                            className: es.profileAppConnections,
                                                                        }),
                                                                    }),
                                                                eH.length > 0 &&
                                                                    (0, l.jsx)(Q.Z, {
                                                                        heading: eo.intl.string(eo.t.PHjkRE),
                                                                        scrollIntoView: eh === el.Tb.APPS,
                                                                        children: (0, l.jsx)(Y.Z, {
                                                                            applicationRoleConnections: eH,
                                                                            onClose: eg,
                                                                            className: es.profileAppConnections,
                                                                        }),
                                                                    }),
                                                                (0, l.jsx)(Q.Z, {
                                                                    heading: eo.intl.string(eo.t["mQKv+v"]),
                                                                    scrollIntoView: eh === el.Tb.NOTE,
                                                                    children: (0, l.jsx)(a.Z, {
                                                                        userId: t.id,
                                                                        className: es.profileNote,
                                                                        autoFocus: eh === el.Tb.NOTE,
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
                                                                                })({ action: "SET_NOTE" }, eO),
                                                                            ),
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                        (null == ew ? void 0 : ew.profileEffect) != null &&
                                                            (0, l.jsx)(v.Z, {
                                                                skuId: null == ew ? void 0 : ew.profileEffect.skuId,
                                                                isHovering: eP,
                                                            }),
                                                    ],
                                                }),
                                                (0, l.jsx)($.Z, {
                                                    user: t,
                                                    currentUser: ea,
                                                    displayProfile: ew,
                                                    guildId: ec,
                                                    channelId: ed,
                                                    items: eV,
                                                    initialSection: ef,
                                                    initialSubsection: eh,
                                                    onClose: eg,
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            (0, l.jsx)(X.Z, {
                                userId: t.id,
                                className: es.editingToolbar,
                            }),
                        ],
                    }),
                }),
            }),
        })
    );
}
