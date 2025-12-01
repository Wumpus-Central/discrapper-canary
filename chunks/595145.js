t.d(n, { Z: () => ea }), t(388685);
var l = t(54381),
    i = t(473749),
    o = t(666917),
    r = t(442837),
    s = t(481060),
    a = t(666520),
    c = t(616780),
    d = t(100527),
    u = t(906732),
    m = t(313201),
    p = t(104505),
    f = t(368326),
    x = t(429467),
    h = t(320582),
    v = t(246016),
    j = t(680295),
    g = t(189156),
    b = t(602733),
    I = t(699516),
    y = t(246946),
    _ = t(585483),
    Z = t(5192),
    O = t(111361),
    N = t(785717),
    A = t(221292),
    T = t(621853),
    P = t(687158),
    E = t(250822),
    C = t(771362),
    S = t(510659),
    w = t(899007),
    D = t(648052),
    R = t(867176),
    L = t(280885),
    M = t(537006),
    B = t(681837),
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
    es = t(293496);
function ea(e) {
    var n, t;
    let {
            user: ea,
            currentUser: ec,
            guildId: ed,
            channelId: eu,
            messageId: em,
            roleId: ep,
            sessionId: ef,
            initialSection: ex,
            initialSubsection: eh,
            transitionState: ev,
            customStatusPrompt: ej,
            openedAt: eg,
            onClose: eb,
            showGuildProfile: eI = !0,
            sourceAnalyticsLocations: ey = [],
            disableActionsForPreview: e_ = !1,
        } = e,
        { analyticsLocations: eZ } = (0, u.ZP)([...ey, d.Z.USER_PROFILE_MODAL_V2]),
        eO = (0, N.ZB)({
            layout: "MODAL_V2",
            userId: ea.id,
            sourceSessionId: ef,
            guildId: ed,
            channelId: eu,
            messageId: em,
            roleId: ep,
            showGuildProfile: eI,
        }),
        eN = i.useRef(null),
        eA = (0, p.X)(eN),
        [eT, eP] = i.useState(!1),
        { defaultWishlistId: eE } = (0, r.cj)([T.Z], () => ({ defaultWishlistId: T.Z.getFirstWishlistId(ea.id) }));
    (0, b.kZ)(eE, ea.id);
    let eC = (0, S.$m)(),
        eS = (0, s.q_F)({
            opacity: +(null != eC.interactionType),
            config: { duration: 150 },
        }),
        ew = i.useMemo(() => (null != ed ? { [ed]: [ea.id] } : {}), [ed, ea.id]);
    (0, c.$)(ew, "UserProfileModalV2");
    let eD = (0, P.ZP)(ea.id, eI ? ed : void 0),
        eR = Z.ZP.useName(null == eD ? void 0 : eD.guildId, eu, ea),
        { relationshipType: eL, originApplicationId: eM } = (0, r.cj)([I.Z], () => ({
            relationshipType: I.Z.getRelationshipType(ea.id),
            originApplicationId: I.Z.getOriginApplicationId(ea.id),
        })),
        eB = (0, r.e7)([y.Z], () => y.Z.hidePersonalInformation),
        eU =
            null == eD
                ? void 0
                : eD.getBannerURL({
                      canAnimate: !1,
                      size: 1024,
                  }),
        ek = (0, f.p)({ location: "UserProfileModalV2" }),
        eG = i.useMemo(() => (null != ej ? ej : (0, x.Z)()), [ej]),
        eV = (0, et.Z)({
            user: ea,
            currentUser: ec,
        }),
        eF = (0, v.Y)({ userId: ea.id }),
        eW = (0, h.vh)(ea.id),
        eH = (0, C.Z)(ea.id),
        ez = (0, E.Z)(ea.id),
        eY = (0, m.Dt)(),
        eK = er.intl.format(er.t.KRe1Fk, { name: eR });
    return (
        i.useEffect(() => {
            let e = () => {
                eP(!0),
                    setTimeout(() => {
                        eP(!1);
                    }, 1000);
            };
            return (
                _.S.subscribe(ei.CkL.SHAKE_PROFILE_MODAL, e),
                () => {
                    _.S.unsubscribe(ei.CkL.SHAKE_PROFILE_MODAL, e), (0, en.L$)(null);
                }
            );
        }, []),
        (0, l.jsx)(u.Gt, {
            value: eZ,
            children: (0, l.jsx)(N.Mt, {
                value: eO,
                openedAt: eg,
                fetchStartedAt: null == eD ? void 0 : eD.fetchStartedAt,
                fetchEndedAt: null == eD ? void 0 : eD.fetchEndedAt,
                isLoaded: null == eD ? void 0 : eD.isLoaded,
                children: (0, l.jsx)(S.NJ, {
                    value: eC,
                    children: (0, l.jsxs)(s.Y0X, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: es.root,
                        transitionState: ev,
                        "aria-labelledby": eY,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, l.jsxs)(s.UkV, {
                                isShaking: eT,
                                intensity: 1.4,
                                children: [
                                    e_
                                        ? (0, l.jsxs)("div", {
                                              className: es.previewBar,
                                              children: [
                                                  (0, l.jsxs)(s.Heading, {
                                                      id: eY,
                                                      variant: "heading-sm/normal",
                                                      color: "text-primary",
                                                      children: [
                                                          (0, l.jsx)(s.nn4, {
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
                                                  (0, l.jsx)(s.Button, {
                                                      size: "sm",
                                                      variant: "secondary",
                                                      text: er.intl.string(er.t.ojM1xJ),
                                                      onClick: eb,
                                                      "aria-label": er.intl.string(er.t.cpT0Cq),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsx)(s.nn4, {
                                              children: (0, l.jsx)(s.H, {
                                                  id: eY,
                                                  children: eK,
                                              }),
                                          }),
                                    (0, l.jsx)(s.y5t, {
                                        children: (0, l.jsxs)(W.Z, {
                                            className: e_ ? es.disabled : void 0,
                                            user: ea,
                                            displayProfile: eD,
                                            themeType: eo.l.MODAL_V2,
                                            children: [
                                                null != eU &&
                                                    (0, l.jsx)("div", {
                                                        className: es.backgroundImage,
                                                        style: { backgroundImage: "url(".concat(eU, ")") },
                                                    }),
                                                null != eC.interactionType &&
                                                    (0, l.jsx)(o.animated.div, {
                                                        style: eS,
                                                        className: es.backdrop,
                                                    }),
                                                (0, l.jsx)(ee.Z, {
                                                    onAutoHide: () => (0, en.L$)(null),
                                                    className: es.toast,
                                                }),
                                                (0, l.jsxs)("div", {
                                                    className: es.profile,
                                                    ref: (null == eD ? void 0 : eD.profileEffect) != null ? eN : void 0,
                                                    children: [
                                                        (0, l.jsxs)("div", {
                                                            className: es.profileHeader,
                                                            children: [
                                                                (0, l.jsx)(R.Z, {
                                                                    user: ea,
                                                                    displayProfile: eD,
                                                                    themeType: eo.l.MODAL_V2,
                                                                }),
                                                                (0, l.jsx)(G.Z, {
                                                                    userId: ea.id,
                                                                    onClose: eb,
                                                                    className: es.interactionToast,
                                                                }),
                                                                (0, l.jsx)(w.Z, {
                                                                    user: ea,
                                                                    displayProfile: eD,
                                                                    guildId: ed,
                                                                    channelId: eu,
                                                                    themeType: eo.l.MODAL_V2,
                                                                }),
                                                                (0, l.jsx)(z.Z, {
                                                                    user: ea,
                                                                    guildId: ed,
                                                                    channelId: eu,
                                                                    themeType: eo.l.MODAL_V2,
                                                                    hasEntered: ev === s.Dvm.ENTERED,
                                                                    prompt: ek && ea.id === ec.id ? eG : null,
                                                                    disableToolbar: e_,
                                                                }),
                                                            ],
                                                        }),
                                                        (0, l.jsxs)(s.Ttm, {
                                                            fade: !0,
                                                            className: es.profileBody,
                                                            children: [
                                                                (0, l.jsx)(H.Z, {
                                                                    user: ea,
                                                                    guildId:
                                                                        null != (n = null == eD ? void 0 : eD.guildId)
                                                                            ? n
                                                                            : void 0,
                                                                    onClose: eb,
                                                                    nickname: Z.ZP.useName(
                                                                        null == eD ? void 0 : eD.guildId,
                                                                        eu,
                                                                        ea,
                                                                    ),
                                                                    nicknameIcons: (0, l.jsx)(B.Z, {
                                                                        size: "sm",
                                                                        userId: ea.id,
                                                                    }),
                                                                    nicknameVariant: "heading-xl/semibold",
                                                                    pronouns: null == eD ? void 0 : eD.pronouns,
                                                                    tags: (0, l.jsx)(D.Z, {
                                                                        displayProfile: eD,
                                                                        themeType: eo.l.MODAL_V2,
                                                                        onClose: eb,
                                                                    }),
                                                                }),
                                                                eL === ei.OGo.PENDING_INCOMING &&
                                                                    (0, l.jsx)(W.Z.Overlay, {
                                                                        className: es.profileOverlay,
                                                                        children: (0, l.jsx)(k.Z, {
                                                                            user: ea,
                                                                            applicationId: eM,
                                                                            guildId:
                                                                                null !=
                                                                                (t = null == eD ? void 0 : eD.guildId)
                                                                                    ? t
                                                                                    : void 0,
                                                                            channelId: eu,
                                                                            className: es.profileBanner,
                                                                        }),
                                                                    }),
                                                                eW.map((e) => {
                                                                    var n;
                                                                    let { applicationId: t } = e;
                                                                    return (0, l.jsx)(
                                                                        W.Z.Overlay,
                                                                        {
                                                                            className: es.profileOverlay,
                                                                            children: (0, l.jsx)(k.Z, {
                                                                                user: ea,
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
                                                                                className: es.profileBanner,
                                                                            }),
                                                                        },
                                                                        t,
                                                                    );
                                                                }),
                                                                ea.isProvisional &&
                                                                    (0, l.jsx)(W.Z.Overlay, {
                                                                        className: es.profileOverlay,
                                                                        children: (0, l.jsx)(Q.Z, {
                                                                            heading: er.intl.string(er.t.Iyka0U),
                                                                            headingVariant: "text-md/semibold",
                                                                            headingIcon: (0, l.jsx)(s.Mgn, {
                                                                                size: "xs",
                                                                                color: "currentColor",
                                                                            }),
                                                                            className: es.profileBanner,
                                                                            children: (0, l.jsx)(g.n, {
                                                                                userId: ea.id,
                                                                                variant: "text-sm/normal",
                                                                            }),
                                                                        }),
                                                                    }),
                                                                ea.id === ec.id &&
                                                                    (0, l.jsx)(M.Z, {
                                                                        isPremiumUser: (0, O.I5)(ec),
                                                                        onInteraction: eb,
                                                                    }),
                                                                (0, l.jsx)(F.Z, {
                                                                    user: ea,
                                                                    className: es.profileBanner,
                                                                }),
                                                                (0, l.jsx)("div", {
                                                                    className: es.profileButtons,
                                                                    children: (0, l.jsx)(J.Z, {
                                                                        user: ea,
                                                                        currentUser: ec,
                                                                        guildId: ed,
                                                                        channelId: eu,
                                                                        displayProfile: eD,
                                                                        relationshipType: eL,
                                                                        onClose: eb,
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
                                                                        userId: ea.id,
                                                                        guildId: null == eD ? void 0 : eD.guildId,
                                                                        tooltipDelay: el.vB,
                                                                    }),
                                                                }),
                                                                (null == eD ? void 0 : eD.guildId) != null &&
                                                                    (0, l.jsx)(Y.Z, {
                                                                        user: ea,
                                                                        currentUser: ec,
                                                                        guildId: eD.guildId,
                                                                        className: es.profileRolesSection,
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
                                                                            userId: ea.id,
                                                                            className: es.profileAppConnections,
                                                                        }),
                                                                    }),
                                                                ez.length > 0 &&
                                                                    (0, l.jsx)(Q.Z, {
                                                                        heading: er.intl.string(er.t.PHjkRE),
                                                                        scrollIntoView: eh === el.Tb.APPS,
                                                                        children: (0, l.jsx)(K.Z, {
                                                                            applicationRoleConnections: ez,
                                                                            onClose: eb,
                                                                            className: es.profileAppConnections,
                                                                        }),
                                                                    }),
                                                                (0, l.jsx)(Q.Z, {
                                                                    heading: er.intl.string(er.t["mQKv+v"]),
                                                                    scrollIntoView: eh === el.Tb.NOTE,
                                                                    children: (0, l.jsx)(a.Z, {
                                                                        userId: ea.id,
                                                                        className: es.profileNote,
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
                                                                                })({ action: "SET_NOTE" }, eO),
                                                                            ),
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                        (null == eD ? void 0 : eD.profileEffect) != null &&
                                                            (0, l.jsx)(j.Z, {
                                                                skuId: null == eD ? void 0 : eD.profileEffect.skuId,
                                                                isHovering: eA,
                                                            }),
                                                    ],
                                                }),
                                                (0, l.jsx)($.Z, {
                                                    user: ea,
                                                    currentUser: ec,
                                                    displayProfile: eD,
                                                    guildId: ed,
                                                    channelId: eu,
                                                    items: eV,
                                                    initialSection: ex,
                                                    initialSubsection: eh,
                                                    onClose: eb,
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            (0, l.jsx)(X.Z, {
                                userId: ea.id,
                                className: es.editingToolbar,
                            }),
                        ],
                    }),
                }),
            }),
        })
    );
}
