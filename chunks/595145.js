t.d(n, { Z: () => ea }), t(388685);
var l = t(951288),
    i = t(647438),
    o = t(509442),
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
    es = t(7938);
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
            initialSubsection: ex,
            transitionState: eh,
            customStatusPrompt: ev,
            openedAt: ej,
            onClose: eg,
            showGuildProfile: eb = !0,
            sourceAnalyticsLocations: eI = [],
            disableActionsForPreview: ey = !1,
        } = e,
        { analyticsLocations: e_ } = (0, u.ZP)([...eI, d.Z.USER_PROFILE_MODAL_V2]),
        eZ = (0, N.ZB)({
            layout: "MODAL_V2",
            userId: t.id,
            sourceSessionId: ep,
            guildId: ec,
            channelId: ed,
            messageId: eu,
            roleId: em,
            showGuildProfile: eb,
        }),
        eO = i.useRef(null),
        eN = (0, p.X)(eO),
        [eA, eT] = i.useState(!1),
        { defaultWishlistId: eP } = (0, r.cj)([T.Z], () => ({ defaultWishlistId: T.Z.getFirstWishlistId(t.id) }));
    (0, b.kZ)(eP, t.id);
    let eE = (0, S.$m)(),
        eC = (0, s.q_F)({
            opacity: +(null != eE.interactionType),
            config: { duration: 150 },
        }),
        eS = i.useMemo(() => (null != ec ? { [ec]: [t.id] } : {}), [ec, t.id]);
    (0, c.$)(eS, "UserProfileModalV2");
    let ew = (0, P.ZP)(t.id, eb ? ec : void 0),
        eD = Z.ZP.useName(null == ew ? void 0 : ew.guildId, ed, t),
        { relationshipType: eR, originApplicationId: eL } = (0, r.cj)([I.Z], () => ({
            relationshipType: I.Z.getRelationshipType(t.id),
            originApplicationId: I.Z.getOriginApplicationId(t.id),
        })),
        eM = (0, r.e7)([y.Z], () => y.Z.hidePersonalInformation),
        eB =
            null == ew
                ? void 0
                : ew.getBannerURL({
                      canAnimate: !1,
                      size: 1024,
                  }),
        eU = (0, f.p)({ location: "UserProfileModalV2" }),
        ek = i.useMemo(() => (null != ev ? ev : (0, x.Z)()), [ev]),
        eG = (0, et.Z)({
            user: t,
            currentUser: ea,
        }),
        eV = (0, v.Y)({ userId: t.id }),
        eF = (0, h.vh)(t.id),
        eW = (0, C.Z)(t.id),
        eH = (0, E.Z)(t.id),
        ez = (0, m.Dt)(),
        eY = er.intl.format(er.t.KRe1Fk, { name: eD });
    return (
        i.useEffect(() => {
            let e = () => {
                eT(!0),
                    setTimeout(() => {
                        eT(!1);
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
            value: e_,
            children: (0, l.jsx)(N.Mt, {
                value: eZ,
                openedAt: ej,
                fetchStartedAt: null == ew ? void 0 : ew.fetchStartedAt,
                fetchEndedAt: null == ew ? void 0 : ew.fetchEndedAt,
                isLoaded: null == ew ? void 0 : ew.isLoaded,
                children: (0, l.jsx)(S.NJ, {
                    value: eE,
                    children: (0, l.jsxs)(s.Y0X, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: es.root,
                        transitionState: eh,
                        "aria-labelledby": ez,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, l.jsxs)(s.UkV, {
                                isShaking: eA,
                                intensity: 1.4,
                                children: [
                                    ey
                                        ? (0, l.jsxs)("div", {
                                              className: es.previewBar,
                                              children: [
                                                  (0, l.jsxs)(s.Heading, {
                                                      id: ez,
                                                      variant: "heading-sm/normal",
                                                      color: "text-primary",
                                                      children: [
                                                          (0, l.jsx)(s.nn4, {
                                                              children: ""
                                                                  .concat(er.intl.string(er.t.apVial), ": ")
                                                                  .concat(eY),
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
                                                      onClick: eg,
                                                      "aria-label": er.intl.string(er.t.cpT0Cq),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsx)(s.nn4, {
                                              children: (0, l.jsx)(s.H, {
                                                  id: ez,
                                                  children: eY,
                                              }),
                                          }),
                                    (0, l.jsx)(s.y5t, {
                                        children: (0, l.jsxs)(W.Z, {
                                            className: ey ? es.disabled : void 0,
                                            user: t,
                                            displayProfile: ew,
                                            themeType: eo.l.MODAL_V2,
                                            children: [
                                                null != eB &&
                                                    (0, l.jsx)("div", {
                                                        className: es.backgroundImage,
                                                        style: { backgroundImage: "url(".concat(eB, ")") },
                                                    }),
                                                null != eE.interactionType &&
                                                    (0, l.jsx)(o.animated.div, {
                                                        style: eC,
                                                        className: es.backdrop,
                                                    }),
                                                (0, l.jsx)(ee.Z, {
                                                    onAutoHide: () => (0, en.L$)(null),
                                                    className: es.toast,
                                                }),
                                                (0, l.jsxs)("div", {
                                                    className: es.profile,
                                                    ref: (null == ew ? void 0 : ew.profileEffect) != null ? eO : void 0,
                                                    children: [
                                                        (0, l.jsxs)("div", {
                                                            className: es.profileHeader,
                                                            children: [
                                                                (0, l.jsx)(R.Z, {
                                                                    user: t,
                                                                    displayProfile: ew,
                                                                    themeType: eo.l.MODAL_V2,
                                                                }),
                                                                (0, l.jsx)(G.Z, {
                                                                    userId: t.id,
                                                                    onClose: eg,
                                                                    className: es.interactionToast,
                                                                }),
                                                                (0, l.jsx)(w.Z, {
                                                                    user: t,
                                                                    displayProfile: ew,
                                                                    guildId: ec,
                                                                    channelId: ed,
                                                                    themeType: eo.l.MODAL_V2,
                                                                }),
                                                                (0, l.jsx)(z.Z, {
                                                                    user: t,
                                                                    guildId: ec,
                                                                    channelId: ed,
                                                                    themeType: eo.l.MODAL_V2,
                                                                    hasEntered: eh === s.Dvm.ENTERED,
                                                                    prompt: eU && t.id === ea.id ? ek : null,
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
                                                                    nickname: Z.ZP.useName(
                                                                        null == ew ? void 0 : ew.guildId,
                                                                        ed,
                                                                        t,
                                                                    ),
                                                                    nicknameIcons: (0, l.jsx)(B.Z, {
                                                                        size: "sm",
                                                                        userId: t.id,
                                                                    }),
                                                                    nicknameVariant: "heading-xl/semibold",
                                                                    pronouns: null == ew ? void 0 : ew.pronouns,
                                                                    tags: (0, l.jsx)(D.Z, {
                                                                        displayProfile: ew,
                                                                        themeType: eo.l.MODAL_V2,
                                                                        onClose: eg,
                                                                    }),
                                                                }),
                                                                eR === ei.OGo.PENDING_INCOMING &&
                                                                    (0, l.jsx)(W.Z.Overlay, {
                                                                        className: es.profileOverlay,
                                                                        children: (0, l.jsx)(k.Z, {
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
                                                                eF.map((e) => {
                                                                    var n;
                                                                    let { applicationId: i } = e;
                                                                    return (0, l.jsx)(
                                                                        W.Z.Overlay,
                                                                        {
                                                                            className: es.profileOverlay,
                                                                            children: (0, l.jsx)(k.Z, {
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
                                                                                userId: t.id,
                                                                                variant: "text-sm/normal",
                                                                            }),
                                                                        }),
                                                                    }),
                                                                t.id === ea.id &&
                                                                    (0, l.jsx)(M.Z, {
                                                                        isPremiumUser: (0, O.I5)(ea),
                                                                        onInteraction: eg,
                                                                    }),
                                                                (0, l.jsx)(F.Z, {
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
                                                                eV.length > 0 &&
                                                                    (0, l.jsx)(Q.Z, {
                                                                        heading: er.intl.string(er.t["Uv/eTx"]),
                                                                        children: (0, l.jsx)(U.Z, {
                                                                            applicationIds: eV,
                                                                        }),
                                                                    }),
                                                                (0, l.jsx)(Q.Z, {
                                                                    heading: er.intl.string(er.t.a6XYD9),
                                                                    children: (0, l.jsx)(V.Z, {
                                                                        userId: t.id,
                                                                        guildId: null == ew ? void 0 : ew.guildId,
                                                                        tooltipDelay: el.vB,
                                                                    }),
                                                                }),
                                                                (null == ew ? void 0 : ew.guildId) != null &&
                                                                    (0, l.jsx)(Y.Z, {
                                                                        user: t,
                                                                        currentUser: ea,
                                                                        guildId: ew.guildId,
                                                                        className: es.profileRolesSection,
                                                                        headingVariant: "text-xs/medium",
                                                                        headingColor: "currentColor",
                                                                        scrollIntoView: ex === el.Tb.ROLES,
                                                                    }),
                                                                eW.length > 0 &&
                                                                    (0, l.jsx)(Q.Z, {
                                                                        heading: er.intl.string(er.t["3fe7U5"]),
                                                                        scrollIntoView: ex === el.Tb.CONNECTIONS,
                                                                        children: (0, l.jsx)(q.Z, {
                                                                            connections: eW,
                                                                            userId: t.id,
                                                                            className: es.profileAppConnections,
                                                                        }),
                                                                    }),
                                                                eH.length > 0 &&
                                                                    (0, l.jsx)(Q.Z, {
                                                                        heading: er.intl.string(er.t.PHjkRE),
                                                                        scrollIntoView: ex === el.Tb.APPS,
                                                                        children: (0, l.jsx)(K.Z, {
                                                                            applicationRoleConnections: eH,
                                                                            onClose: eg,
                                                                            className: es.profileAppConnections,
                                                                        }),
                                                                    }),
                                                                (0, l.jsx)(Q.Z, {
                                                                    heading: er.intl.string(er.t["mQKv+v"]),
                                                                    scrollIntoView: ex === el.Tb.NOTE,
                                                                    children: (0, l.jsx)(a.Z, {
                                                                        userId: t.id,
                                                                        className: es.profileNote,
                                                                        autoFocus: ex === el.Tb.NOTE,
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
                                                                                })({ action: "SET_NOTE" }, eZ),
                                                                            ),
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                        (null == ew ? void 0 : ew.profileEffect) != null &&
                                                            (0, l.jsx)(j.Z, {
                                                                skuId: null == ew ? void 0 : ew.profileEffect.skuId,
                                                                isHovering: eN,
                                                            }),
                                                    ],
                                                }),
                                                (0, l.jsx)($.Z, {
                                                    user: t,
                                                    currentUser: ea,
                                                    displayProfile: ew,
                                                    guildId: ec,
                                                    channelId: ed,
                                                    items: eG,
                                                    initialSection: ef,
                                                    initialSubsection: ex,
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
