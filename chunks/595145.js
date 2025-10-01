t.d(n, { Z: () => ea }), t(388685);
var l = t(951288),
    i = t(647438),
    r = t(137317),
    o = t(442837),
    s = t(481060),
    a = t(666520),
    c = t(727637),
    d = t(616780),
    u = t(100527),
    m = t(906732),
    p = t(313201),
    f = t(368326),
    h = t(429467),
    j = t(320582),
    x = t(246016),
    v = t(680295),
    g = t(189156),
    b = t(602733),
    y = t(699516),
    O = t(246946),
    I = t(585483),
    Z = t(5192),
    P = t(111361),
    N = t(785717),
    T = t(221292),
    A = t(621853),
    E = t(687158),
    S = t(250822),
    C = t(771362),
    w = t(510659),
    _ = t(899007),
    D = t(648052),
    R = t(867176),
    L = t(280885),
    M = t(537006),
    U = t(681837),
    k = t(78806),
    B = t(91433),
    F = t(451834),
    V = t(900927),
    G = t(944043),
    z = t(502762),
    K = t(530),
    W = t(4517),
    Y = t(179828),
    H = t(769321),
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
            initialSubsection: eh,
            transitionState: ej,
            customStatusPrompt: ex,
            openedAt: ev,
            onClose: eg,
            showGuildProfile: eb = !0,
            sourceAnalyticsLocations: ey = [],
            disableActionsForPreview: eO = !1,
        } = e,
        { analyticsLocations: eI } = (0, m.ZP)([...ey, u.Z.USER_PROFILE_MODAL_V2]),
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
        eP = i.useRef(null),
        eN = (0, c.Z)(eP),
        [eT, eA] = i.useState(!1),
        { defaultWishlistId: eE } = (0, o.cj)([A.Z], () => ({ defaultWishlistId: A.Z.getFirstWishlistId(t.id) }));
    (0, b.k)(eE);
    let eS = (0, w.$m)(),
        eC = (0, s.q_F)({
            opacity: +(null != eS.interactionType),
            config: { duration: 150 },
        }),
        ew = i.useMemo(() => (null != ec ? { [ec]: [t.id] } : {}), [ec, t.id]);
    (0, d.$)(ew, "UserProfileModalV2");
    let e_ = (0, E.ZP)(t.id, eb ? ec : void 0),
        eD = Z.ZP.useName(null == e_ ? void 0 : e_.guildId, ed, t),
        { relationshipType: eR, originApplicationId: eL } = (0, o.cj)([y.Z], () => ({
            relationshipType: y.Z.getRelationshipType(t.id),
            originApplicationId: y.Z.getOriginApplicationId(t.id),
        })),
        eM = (0, o.e7)([O.Z], () => O.Z.hidePersonalInformation),
        eU =
            null == e_
                ? void 0
                : e_.getBannerURL({
                      canAnimate: !1,
                      size: 1024,
                  }),
        ek = (0, f.p)({ location: "UserProfileModalV2" }),
        eB = i.useMemo(() => (null != ex ? ex : (0, h.Z)()), [ex]),
        eF = (0, et.Z)({
            user: t,
            currentUser: ea,
        }),
        eV = (0, x.Y)({ userId: t.id }),
        eG = (0, j.vh)(t.id),
        ez = (0, C.Z)(t.id),
        eK = (0, S.Z)(t.id),
        eW = (0, p.Dt)(),
        eY = eo.intl.format(eo.t.KRe1Fh, { name: eD });
    return (
        i.useEffect(() => {
            let e = () => {
                eA(!0),
                    setTimeout(() => {
                        eA(!1);
                    }, 1000);
            };
            return (
                I.S.subscribe(ei.CkL.SHAKE_PROFILE_MODAL, e),
                () => {
                    I.S.unsubscribe(ei.CkL.SHAKE_PROFILE_MODAL, e), (0, en.L$)(null);
                }
            );
        }, []),
        (0, l.jsx)(m.Gt, {
            value: eI,
            children: (0, l.jsx)(N.Mt, {
                value: eZ,
                openedAt: ev,
                fetchStartedAt: null == e_ ? void 0 : e_.fetchStartedAt,
                fetchEndedAt: null == e_ ? void 0 : e_.fetchEndedAt,
                isLoaded: null == e_ ? void 0 : e_.isLoaded,
                children: (0, l.jsx)(w.NJ, {
                    value: eS,
                    children: (0, l.jsxs)(s.Y0X, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: es.root,
                        transitionState: ej,
                        "aria-labelledby": eW,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, l.jsxs)(s.UkV, {
                                isShaking: eT,
                                intensity: 1.4,
                                children: [
                                    eO
                                        ? (0, l.jsxs)("div", {
                                              className: es.previewBar,
                                              children: [
                                                  (0, l.jsxs)(s.X6q, {
                                                      id: eW,
                                                      variant: "heading-sm/normal",
                                                      color: "text-primary",
                                                      children: [
                                                          (0, l.jsx)(s.nn4, {
                                                              children: ""
                                                                  .concat(eo.intl.string(eo.t.apViam), ": ")
                                                                  .concat(eY),
                                                          }),
                                                          (0, l.jsx)("span", {
                                                              "aria-hidden": !0,
                                                              children: eo.intl.string(eo.t.apViam),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, l.jsx)(s.zxk, {
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
                                                  children: eY,
                                              }),
                                          }),
                                    (0, l.jsx)(s.y5t, {
                                        children: (0, l.jsxs)(z.Z, {
                                            className: eO ? es.disabled : void 0,
                                            user: t,
                                            displayProfile: e_,
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
                                                    ref: (null == e_ ? void 0 : e_.profileEffect) != null ? eP : void 0,
                                                    children: [
                                                        (0, l.jsxs)("div", {
                                                            className: es.profileHeader,
                                                            children: [
                                                                (0, l.jsx)(R.Z, {
                                                                    user: t,
                                                                    displayProfile: e_,
                                                                    themeType: er.l.MODAL_V2,
                                                                }),
                                                                (0, l.jsx)(F.Z, {
                                                                    userId: t.id,
                                                                    onClose: eg,
                                                                    className: es.interactionToast,
                                                                }),
                                                                (0, l.jsx)(_.Z, {
                                                                    user: t,
                                                                    displayProfile: e_,
                                                                    guildId: ec,
                                                                    channelId: ed,
                                                                    themeType: er.l.MODAL_V2,
                                                                }),
                                                                (0, l.jsx)(W.Z, {
                                                                    user: t,
                                                                    guildId: ec,
                                                                    channelId: ed,
                                                                    themeType: er.l.MODAL_V2,
                                                                    hasEntered: ej === s.Dvm.ENTERED,
                                                                    prompt: ek && t.id === ea.id ? eB : null,
                                                                    disableToolbar: eO,
                                                                }),
                                                            ],
                                                        }),
                                                        (0, l.jsxs)(s.Ttm, {
                                                            fade: !0,
                                                            className: es.profileBody,
                                                            children: [
                                                                (0, l.jsx)(K.Z, {
                                                                    user: t,
                                                                    onClose: eg,
                                                                    nickname: Z.ZP.useName(
                                                                        null == e_ ? void 0 : e_.guildId,
                                                                        ed,
                                                                        t,
                                                                    ),
                                                                    nicknameIcons: (0, l.jsx)(U.Z, {
                                                                        size: "sm",
                                                                        userId: t.id,
                                                                    }),
                                                                    nicknameVariant: "heading-xl/semibold",
                                                                    pronouns: null == e_ ? void 0 : e_.pronouns,
                                                                    tags: (0, l.jsx)(D.Z, {
                                                                        displayProfile: e_,
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
                                                                                (n = null == e_ ? void 0 : e_.guildId)
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
                                                                                        null == e_
                                                                                            ? void 0
                                                                                            : e_.guildId)
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
                                                                        isPremiumUser: (0, P.I5)(ea),
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
                                                                        displayProfile: e_,
                                                                        relationshipType: eR,
                                                                        onClose: eg,
                                                                    }),
                                                                }),
                                                                (null == e_ ? void 0 : e_.bio) != null &&
                                                                    (null == e_ ? void 0 : e_.bio) !== "" &&
                                                                    !eM &&
                                                                    (0, l.jsx)(L.Z, {
                                                                        userBio: e_.bio,
                                                                        setLineClamp: !1,
                                                                    }),
                                                                eV.length > 0 &&
                                                                    (0, l.jsx)(Q.Z, {
                                                                        heading: eo.intl.string(eo.t["Uv/eT0"]),
                                                                        children: (0, l.jsx)(k.Z, {
                                                                            applicationIds: eV,
                                                                        }),
                                                                    }),
                                                                (0, l.jsx)(Q.Z, {
                                                                    heading: eo.intl.string(eo.t.a6XYDw),
                                                                    children: (0, l.jsx)(V.Z, {
                                                                        userId: t.id,
                                                                        guildId: null == e_ ? void 0 : e_.guildId,
                                                                        tooltipDelay: el.vB,
                                                                    }),
                                                                }),
                                                                (null == e_ ? void 0 : e_.guildId) != null &&
                                                                    (0, l.jsx)(Y.Z, {
                                                                        user: t,
                                                                        currentUser: ea,
                                                                        guildId: e_.guildId,
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
                                                                eK.length > 0 &&
                                                                    (0, l.jsx)(Q.Z, {
                                                                        heading: eo.intl.string(eo.t.PHjkRE),
                                                                        scrollIntoView: eh === el.Tb.APPS,
                                                                        children: (0, l.jsx)(H.Z, {
                                                                            applicationRoleConnections: eK,
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
                                                                                })({ action: "SET_NOTE" }, eZ),
                                                                            ),
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                        (null == e_ ? void 0 : e_.profileEffect) != null &&
                                                            (0, l.jsx)(v.Z, {
                                                                skuId: null == e_ ? void 0 : e_.profileEffect.skuId,
                                                                isHovering: eN,
                                                            }),
                                                    ],
                                                }),
                                                (0, l.jsx)($.Z, {
                                                    user: t,
                                                    currentUser: ea,
                                                    displayProfile: e_,
                                                    guildId: ec,
                                                    channelId: ed,
                                                    items: eF,
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
