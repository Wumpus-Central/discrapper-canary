t.d(n, { Z: () => ec }), t(388685);
var l = t(54381),
    i = t(473749),
    o = t(467721),
    r = t(442837),
    a = t(481060),
    c = t(666520),
    s = t(616780),
    d = t(100527),
    u = t(906732),
    f = t(313201),
    m = t(104505),
    p = t(368326),
    x = t(429467),
    h = t(320582),
    b = t(246016),
    v = t(680295),
    j = t(189156),
    g = t(602733),
    I = t(699516),
    y = t(246946),
    Z = t(585483),
    O = t(5192),
    N = t(111361),
    T = t(785717),
    A = t(221292),
    P = t(621853),
    E = t(687158),
    _ = t(250822),
    C = t(771362),
    S = t(510659),
    w = t(899007),
    D = t(648052),
    R = t(867176),
    L = t(280885),
    M = t(537006),
    B = t(407699),
    U = t(78806),
    k = t(91433),
    G = t(451834),
    V = t(900927),
    F = t(944043),
    W = t(502762),
    H = t(530),
    z = t(4517),
    Y = t(179828),
    K = t(769321),
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
    eo = t(671955),
    er = t(388032),
    ea = t(871893);
function ec(e) {
    var n, t;
    let {
            user: ec,
            currentUser: es,
            guildId: ed,
            channelId: eu,
            messageId: ef,
            roleId: em,
            sessionId: ep,
            initialSection: ex,
            initialSubsection: eh,
            transitionState: eb,
            customStatusPrompt: ev,
            openedAt: ej,
            onClose: eg,
            showGuildProfile: eI = !0,
            sourceAnalyticsLocations: ey = [],
            disableActionsForPreview: eZ = !1,
        } = e,
        { analyticsLocations: eO } = (0, u.ZP)([...ey, d.Z.USER_PROFILE_MODAL_V2]),
        eN = (0, T.ZB)({
            layout: "MODAL_V2",
            userId: ec.id,
            sourceSessionId: ep,
            guildId: ed,
            channelId: eu,
            messageId: ef,
            roleId: em,
            showGuildProfile: eI,
        }),
        eT = i.useRef(null),
        eA = (0, m.X)(eT),
        [eP, eE] = i.useState(!1),
        { defaultWishlistId: e_ } = (0, r.cj)([P.Z], () => ({ defaultWishlistId: P.Z.getFirstWishlistId(ec.id) }));
    (0, g.kZ)({
        wishlistId: e_,
        userId: ec.id,
    });
    let eC = (0, S.$m)(),
        eS = (0, a.q_F)({
            opacity: +(null != eC.interactionType),
            config: { duration: 150 },
        }),
        ew = i.useMemo(() => (null != ed ? { [ed]: [ec.id] } : {}), [ed, ec.id]);
    (0, s.$)(ew, "UserProfileModalV2");
    let eD = (0, E.ZP)(ec.id, eI ? ed : void 0),
        eR = O.ZP.useName(null == eD ? void 0 : eD.guildId, eu, ec),
        { relationshipType: eL, originApplicationId: eM } = (0, r.cj)([I.Z], () => ({
            relationshipType: I.Z.getRelationshipType(ec.id),
            originApplicationId: I.Z.getOriginApplicationId(ec.id),
        })),
        eB = (0, r.e7)([y.Z], () => y.Z.hidePersonalInformation),
        eU =
            null == eD
                ? void 0
                : eD.getBannerURL({
                      canAnimate: !1,
                      size: 1024,
                  }),
        ek = (0, p.p)({ location: "UserProfileModalV2" }),
        eG = i.useMemo(() => (null != ev ? ev : (0, x.Z)()), [ev]),
        eV = (0, et.Z)({
            user: ec,
            currentUser: es,
        }),
        eF = (0, b.Y)({ userId: ec.id }),
        eW = (0, h.vh)(ec.id),
        eH = (0, C.Z)(ec.id),
        ez = (0, _.Z)(ec.id),
        eY = (0, f.Dt)(),
        eK = er.intl.format(er.t.KRe1Fk, { name: eR });
    return (
        i.useEffect(() => {
            let e = () => {
                eE(!0),
                    setTimeout(() => {
                        eE(!1);
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
            value: eO,
            children: (0, l.jsx)(T.Mt, {
                value: eN,
                openedAt: ej,
                fetchStartedAt: null == eD ? void 0 : eD.fetchStartedAt,
                fetchEndedAt: null == eD ? void 0 : eD.fetchEndedAt,
                isLoaded: null == eD ? void 0 : eD.isLoaded,
                children: (0, l.jsx)(S.NJ, {
                    value: eC,
                    children: (0, l.jsxs)(a.Y0X, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: ea.root,
                        transitionState: eb,
                        "aria-labelledby": eY,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, l.jsxs)(a.UkV, {
                                isShaking: eP,
                                intensity: 1.4,
                                children: [
                                    eZ
                                        ? (0, l.jsxs)("div", {
                                              className: ea.previewBar,
                                              children: [
                                                  (0, l.jsxs)(a.Heading, {
                                                      id: eY,
                                                      variant: "heading-sm/normal",
                                                      color: "text-strong",
                                                      children: [
                                                          (0, l.jsx)(a.nn4, {
                                                              children: ""
                                                                  .concat(er.intl.string(er.t.apVial), ": ")
                                                                  .concat(eK),
                                                          }),
                                                          (0, l.jsx)("span", {
                                                              "aria-hidden": !0,
                                                              children: er.intl.string(er.t.apVial),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, l.jsx)(a.Button, {
                                                      size: "sm",
                                                      variant: "secondary",
                                                      text: er.intl.string(er.t.ojM1xJ),
                                                      onClick: eg,
                                                      "aria-label": er.intl.string(er.t.cpT0Cq),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsx)(a.nn4, {
                                              children: (0, l.jsx)(a.H, {
                                                  id: eY,
                                                  children: eK,
                                              }),
                                          }),
                                    (0, l.jsx)(a.y5t, {
                                        children: (0, l.jsxs)(W.Z, {
                                            className: eZ ? ea.disabled : void 0,
                                            user: ec,
                                            displayProfile: eD,
                                            themeType: eo.l.MODAL_V2,
                                            children: [
                                                null != eU &&
                                                    (0, l.jsx)("div", {
                                                        className: ea.backgroundImage,
                                                        style: { backgroundImage: "url(".concat(eU, ")") },
                                                    }),
                                                null != eC.interactionType &&
                                                    (0, l.jsx)(o.animated.div, {
                                                        style: eS,
                                                        className: ea.backdrop,
                                                    }),
                                                (0, l.jsx)(ee.Z, {
                                                    onAutoHide: () => (0, en.L$)(null),
                                                    className: ea.toast,
                                                }),
                                                (0, l.jsxs)("div", {
                                                    className: ea.profile,
                                                    ref: (null == eD ? void 0 : eD.profileEffect) != null ? eT : void 0,
                                                    children: [
                                                        (0, l.jsxs)("div", {
                                                            className: ea.profileHeader,
                                                            children: [
                                                                (0, l.jsx)(R.Z, {
                                                                    user: ec,
                                                                    displayProfile: eD,
                                                                    themeType: eo.l.MODAL_V2,
                                                                }),
                                                                (0, l.jsx)(G.Z, {
                                                                    userId: ec.id,
                                                                    onClose: eg,
                                                                    className: ea.interactionToast,
                                                                }),
                                                                (0, l.jsx)(w.Z, {
                                                                    user: ec,
                                                                    displayProfile: eD,
                                                                    guildId: ed,
                                                                    channelId: eu,
                                                                    themeType: eo.l.MODAL_V2,
                                                                }),
                                                                (0, l.jsx)(z.Z, {
                                                                    user: ec,
                                                                    guildId: ed,
                                                                    channelId: eu,
                                                                    themeType: eo.l.MODAL_V2,
                                                                    hasEntered: eb === a.Dvm.ENTERED,
                                                                    prompt: ek && ec.id === es.id ? eG : null,
                                                                    disableToolbar: eZ,
                                                                }),
                                                            ],
                                                        }),
                                                        (0, l.jsxs)(a.Ttm, {
                                                            fade: !0,
                                                            className: ea.profileBody,
                                                            children: [
                                                                (0, l.jsx)(B.Z, { userId: ec.id }),
                                                                (0, l.jsx)(H.Z, {
                                                                    user: ec,
                                                                    guildId:
                                                                        null != (n = null == eD ? void 0 : eD.guildId)
                                                                            ? n
                                                                            : void 0,
                                                                    onClose: eg,
                                                                    nickname: O.ZP.useName(
                                                                        null == eD ? void 0 : eD.guildId,
                                                                        eu,
                                                                        ec,
                                                                    ),
                                                                    nicknameVariant: "heading-xl/semibold",
                                                                    pronouns: null == eD ? void 0 : eD.pronouns,
                                                                    tags: (0, l.jsx)(D.Z, {
                                                                        displayProfile: eD,
                                                                        themeType: eo.l.MODAL_V2,
                                                                        onClose: eg,
                                                                    }),
                                                                }),
                                                                eL === ei.OGo.PENDING_INCOMING &&
                                                                    (0, l.jsx)(W.Z.Overlay, {
                                                                        className: ea.profileOverlay,
                                                                        children: (0, l.jsx)(k.Z, {
                                                                            user: ec,
                                                                            applicationId: eM,
                                                                            guildId:
                                                                                null !=
                                                                                (t = null == eD ? void 0 : eD.guildId)
                                                                                    ? t
                                                                                    : void 0,
                                                                            channelId: eu,
                                                                            className: ea.profileBanner,
                                                                        }),
                                                                    }),
                                                                eW.map((e) => {
                                                                    var n;
                                                                    let { applicationId: t } = e;
                                                                    return (0, l.jsx)(
                                                                        W.Z.Overlay,
                                                                        {
                                                                            className: ea.profileOverlay,
                                                                            children: (0, l.jsx)(k.Z, {
                                                                                user: ec,
                                                                                guildId:
                                                                                    null !=
                                                                                    (n =
                                                                                        null == eD
                                                                                            ? void 0
                                                                                            : eD.guildId)
                                                                                        ? n
                                                                                        : void 0,
                                                                                channelId: eu,
                                                                                isGameRelationship: !0,
                                                                                applicationId: t,
                                                                                className: ea.profileBanner,
                                                                            }),
                                                                        },
                                                                        t,
                                                                    );
                                                                }),
                                                                ec.isProvisional &&
                                                                    (0, l.jsx)(W.Z.Overlay, {
                                                                        className: ea.profileOverlay,
                                                                        children: (0, l.jsx)(Q.Z, {
                                                                            heading: er.intl.string(er.t.Iyka0U),
                                                                            headingVariant: "text-md/semibold",
                                                                            headingIcon: (0, l.jsx)(a.Mgn, {
                                                                                size: "xs",
                                                                                color: "currentColor",
                                                                            }),
                                                                            className: ea.profileBanner,
                                                                            children: (0, l.jsx)(j.n, {
                                                                                userId: ec.id,
                                                                                variant: "text-sm/normal",
                                                                            }),
                                                                        }),
                                                                    }),
                                                                ec.id === es.id &&
                                                                    (0, l.jsx)(M.Z, {
                                                                        isPremiumUser: (0, N.I5)(es),
                                                                        onInteraction: eg,
                                                                    }),
                                                                (0, l.jsx)(F.Z, {
                                                                    user: ec,
                                                                    className: ea.profileBanner,
                                                                }),
                                                                (0, l.jsx)("div", {
                                                                    className: ea.profileButtons,
                                                                    children: (0, l.jsx)(J.Z, {
                                                                        user: ec,
                                                                        currentUser: es,
                                                                        guildId: ed,
                                                                        channelId: eu,
                                                                        displayProfile: eD,
                                                                        relationshipType: eL,
                                                                        onClose: eg,
                                                                    }),
                                                                }),
                                                                (null == eD ? void 0 : eD.bio) != null &&
                                                                    (null == eD ? void 0 : eD.bio) !== "" &&
                                                                    !eB &&
                                                                    (0, l.jsx)(L.Z, {
                                                                        userBio: eD.bio,
                                                                        setLineClamp: !1,
                                                                    }),
                                                                eF.length > 0 &&
                                                                    (0, l.jsx)(Q.Z, {
                                                                        heading: er.intl.string(er.t["Uv/eTx"]),
                                                                        children: (0, l.jsx)(U.Z, {
                                                                            applicationIds: eF,
                                                                        }),
                                                                    }),
                                                                (0, l.jsx)(Q.Z, {
                                                                    heading: er.intl.string(er.t.a6XYD9),
                                                                    children: (0, l.jsx)(V.Z, {
                                                                        userId: ec.id,
                                                                        guildId: null == eD ? void 0 : eD.guildId,
                                                                        tooltipDelay: el.vB,
                                                                    }),
                                                                }),
                                                                (null == eD ? void 0 : eD.guildId) != null &&
                                                                    (0, l.jsx)(Y.Z, {
                                                                        user: ec,
                                                                        currentUser: es,
                                                                        guildId: eD.guildId,
                                                                        className: ea.profileRolesSection,
                                                                        headingVariant: "text-xs/medium",
                                                                        headingColor: "currentColor",
                                                                        scrollIntoView: eh === el.Tb.ROLES,
                                                                    }),
                                                                eH.length > 0 &&
                                                                    (0, l.jsx)(Q.Z, {
                                                                        heading: er.intl.string(er.t["3fe7U5"]),
                                                                        scrollIntoView: eh === el.Tb.CONNECTIONS,
                                                                        children: (0, l.jsx)(q.Z, {
                                                                            connections: eH,
                                                                            userId: ec.id,
                                                                            className: ea.profileAppConnections,
                                                                        }),
                                                                    }),
                                                                ez.length > 0 &&
                                                                    (0, l.jsx)(Q.Z, {
                                                                        heading: er.intl.string(er.t.PHjkRE),
                                                                        scrollIntoView: eh === el.Tb.APPS,
                                                                        children: (0, l.jsx)(K.Z, {
                                                                            applicationRoleConnections: ez,
                                                                            onClose: eg,
                                                                            className: ea.profileAppConnections,
                                                                        }),
                                                                    }),
                                                                (0, l.jsx)(Q.Z, {
                                                                    heading: er.intl.string(er.t["mQKv+v"]),
                                                                    scrollIntoView: eh === el.Tb.NOTE,
                                                                    children: (0, l.jsx)(c.Z, {
                                                                        userId: ec.id,
                                                                        className: ea.profileNote,
                                                                        autoFocus: eh === el.Tb.NOTE,
                                                                        onUpdate: () =>
                                                                            (0, A.pQ)(
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
                                                                                })({ action: "SET_NOTE" }, eN),
                                                                            ),
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                        (null == eD ? void 0 : eD.profileEffect) != null &&
                                                            (0, l.jsx)(v.Z, {
                                                                skuId: null == eD ? void 0 : eD.profileEffect.skuId,
                                                                isHovering: eA,
                                                            }),
                                                    ],
                                                }),
                                                (0, l.jsx)($.Z, {
                                                    user: ec,
                                                    currentUser: es,
                                                    displayProfile: eD,
                                                    guildId: ed,
                                                    channelId: eu,
                                                    items: eV,
                                                    initialSection: ex,
                                                    initialSubsection: eh,
                                                    onClose: eg,
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            (0, l.jsx)(X.Z, {
                                userId: ec.id,
                                className: ea.editingToolbar,
                            }),
                        ],
                    }),
                }),
            }),
        })
    );
}
