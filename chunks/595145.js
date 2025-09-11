t.d(n, { Z: () => er }), t(388685);
var o = t(951288),
    r = t(647438),
    l = t(938288),
    i = t(442837),
    c = t(481060),
    a = t(666520),
    s = t(727637),
    d = t(616780),
    u = t(100527),
    f = t(906732),
    p = t(313201),
    m = t(368326),
    x = t(429467),
    b = t(320582),
    h = t(246016),
    g = t(680295),
    j = t(189156),
    v = t(699516),
    y = t(246946),
    _ = t(585483),
    I = t(5192),
    O = t(111361),
    Z = t(785717),
    P = t(221292),
    T = t(687158),
    N = t(771362),
    A = t(510659),
    C = t(899007),
    E = t(648052),
    S = t(867176),
    w = t(280885),
    B = t(537006),
    D = t(681837),
    L = t(78806),
    R = t(91433),
    M = t(451834),
    U = t(900927),
    k = t(944043),
    V = t(502762),
    F = t(530),
    G = t(4517),
    z = t(179828),
    H = t(993160),
    K = t(574887),
    W = t(996921),
    Y = t(693408),
    J = t(661462),
    q = t(76076),
    X = t(872269),
    Q = t(768111),
    $ = t(228168),
    ee = t(981631),
    en = t(671955),
    et = t(388032),
    eo = t(7938);
function er(e) {
    var n;
    let {
            user: t,
            currentUser: er,
            guildId: el,
            channelId: ei,
            messageId: ec,
            roleId: ea,
            sessionId: es,
            initialSection: ed,
            initialSubsection: eu,
            transitionState: ef,
            customStatusPrompt: ep,
            openedAt: em,
            onClose: ex,
            showGuildProfile: eb = !0,
            sourceAnalyticsLocations: eh = [],
            disableActionsForPreview: eg = !1,
        } = e,
        { analyticsLocations: ej } = (0, f.ZP)([...eh, u.Z.USER_PROFILE_MODAL_V2]),
        ev = (0, Z.ZB)({
            layout: "MODAL_V2",
            userId: t.id,
            sourceSessionId: es,
            guildId: el,
            channelId: ei,
            messageId: ec,
            roleId: ea,
            showGuildProfile: eb,
        }),
        ey = r.useRef(null),
        e_ = (0, s.Z)(ey),
        [eI, eO] = r.useState(!1),
        eZ = (0, A.$m)(),
        eP = (0, c.q_F)({
            opacity: +(null != eZ.interactionType),
            config: { duration: 150 },
        }),
        eT = r.useMemo(() => (null != el ? { [el]: [t.id] } : {}), [el, t.id]);
    (0, d.$)(eT, "UserProfileModalV2");
    let eN = (0, T.ZP)(t.id, eb ? el : void 0),
        eA = I.ZP.useName(null == eN ? void 0 : eN.guildId, ei, t),
        { relationshipType: eC, originApplicationId: eE } = (0, i.cj)([v.Z], () => ({
            relationshipType: v.Z.getRelationshipType(t.id),
            originApplicationId: v.Z.getOriginApplicationId(t.id),
        })),
        eS = (0, i.e7)([y.Z], () => y.Z.hidePersonalInformation),
        ew =
            null == eN
                ? void 0
                : eN.getBannerURL({
                      canAnimate: !1,
                      size: 1024,
                  }),
        eB = (0, m.p)({ location: "UserProfileModalV2" }),
        eD = r.useMemo(() => (null != ep ? ep : (0, x.Z)()), [ep]),
        eL = (0, Q.Z)({
            user: t,
            currentUser: er,
        }),
        eR = (0, h.Y)({ userId: t.id }),
        eM = (0, b.vh)(t.id),
        eU = (0, N.Z)(t.id),
        ek = (0, p.Dt)(),
        eV = et.intl.format(et.t.KRe1Fh, { name: eA });
    return (
        r.useEffect(() => {
            let e = () => {
                eO(!0),
                    setTimeout(() => {
                        eO(!1);
                    }, 1000);
            };
            return (
                _.S.subscribe(ee.CkL.SHAKE_PROFILE_MODAL, e),
                () => {
                    _.S.unsubscribe(ee.CkL.SHAKE_PROFILE_MODAL, e), (0, X.L$)(null);
                }
            );
        }, []),
        (0, o.jsx)(f.Gt, {
            value: ej,
            children: (0, o.jsx)(Z.Mt, {
                value: ev,
                openedAt: em,
                fetchStartedAt: null == eN ? void 0 : eN.fetchStartedAt,
                fetchEndedAt: null == eN ? void 0 : eN.fetchEndedAt,
                isLoaded: null == eN ? void 0 : eN.isLoaded,
                children: (0, o.jsx)(A.NJ, {
                    value: eZ,
                    children: (0, o.jsxs)(c.Y0X, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: eo.root,
                        transitionState: ef,
                        "aria-labelledby": ek,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, o.jsxs)(c.UkV, {
                                isShaking: eI,
                                intensity: 1.4,
                                children: [
                                    eg
                                        ? (0, o.jsxs)("div", {
                                              className: eo.previewBar,
                                              children: [
                                                  (0, o.jsxs)(c.X6q, {
                                                      id: ek,
                                                      variant: "heading-sm/normal",
                                                      color: "text-primary",
                                                      children: [
                                                          (0, o.jsx)(c.nn4, {
                                                              children: ""
                                                                  .concat(et.intl.string(et.t.apViam), ": ")
                                                                  .concat(eV),
                                                          }),
                                                          (0, o.jsx)("span", {
                                                              "aria-hidden": !0,
                                                              children: et.intl.string(et.t.apViam),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, o.jsx)(c.zxk, {
                                                      size: "sm",
                                                      variant: "secondary",
                                                      text: et.intl.string(et.t.ojM1xM),
                                                      onClick: ex,
                                                      "aria-label": et.intl.string(et.t.cpT0Cg),
                                                  }),
                                              ],
                                          })
                                        : (0, o.jsx)(c.nn4, {
                                              children: (0, o.jsx)(c.H, {
                                                  id: ek,
                                                  children: eV,
                                              }),
                                          }),
                                    (0, o.jsx)(c.y5t, {
                                        children: (0, o.jsxs)(V.Z, {
                                            className: eg ? eo.disabled : void 0,
                                            user: t,
                                            displayProfile: eN,
                                            themeType: en.l.MODAL_V2,
                                            children: [
                                                null != ew &&
                                                    (0, o.jsx)("div", {
                                                        className: eo.backgroundImage,
                                                        style: { backgroundImage: "url(".concat(ew, ")") },
                                                    }),
                                                null != eZ.interactionType &&
                                                    (0, o.jsx)(l.animated.div, {
                                                        style: eP,
                                                        className: eo.backdrop,
                                                    }),
                                                (0, o.jsx)(q.Z, {
                                                    onAutoHide: () => (0, X.L$)(null),
                                                    className: eo.toast,
                                                }),
                                                (0, o.jsxs)("div", {
                                                    className: eo.profile,
                                                    ref: (null == eN ? void 0 : eN.profileEffect) != null ? ey : void 0,
                                                    children: [
                                                        (0, o.jsxs)("div", {
                                                            className: eo.profileHeader,
                                                            children: [
                                                                (0, o.jsx)(S.Z, {
                                                                    user: t,
                                                                    displayProfile: eN,
                                                                    themeType: en.l.MODAL_V2,
                                                                }),
                                                                (0, o.jsx)(M.Z, {
                                                                    userId: t.id,
                                                                    onClose: ex,
                                                                    className: eo.interactionToast,
                                                                }),
                                                                (0, o.jsx)(C.Z, {
                                                                    user: t,
                                                                    displayProfile: eN,
                                                                    guildId: el,
                                                                    channelId: ei,
                                                                    themeType: en.l.MODAL_V2,
                                                                }),
                                                                (0, o.jsx)(G.Z, {
                                                                    user: t,
                                                                    guildId: el,
                                                                    channelId: ei,
                                                                    themeType: en.l.MODAL_V2,
                                                                    hasEntered: ef === c.Dvm.ENTERED,
                                                                    prompt: eB && t.id === er.id ? eD : null,
                                                                    disableToolbar: eg,
                                                                }),
                                                            ],
                                                        }),
                                                        (0, o.jsxs)(c.Ttm, {
                                                            fade: !0,
                                                            className: eo.profileBody,
                                                            children: [
                                                                (0, o.jsx)(F.Z, {
                                                                    user: t,
                                                                    onClose: ex,
                                                                    nickname: I.ZP.useName(
                                                                        null == eN ? void 0 : eN.guildId,
                                                                        ei,
                                                                        t,
                                                                    ),
                                                                    nicknameIcons: (0, o.jsx)(D.Z, {
                                                                        size: "sm",
                                                                        userId: t.id,
                                                                    }),
                                                                    nicknameVariant: "heading-xl/semibold",
                                                                    pronouns: null == eN ? void 0 : eN.pronouns,
                                                                    tags: (0, o.jsx)(E.Z, {
                                                                        displayProfile: eN,
                                                                        themeType: en.l.MODAL_V2,
                                                                        onClose: ex,
                                                                    }),
                                                                }),
                                                                eC === ee.OGo.PENDING_INCOMING &&
                                                                    (0, o.jsx)(V.Z.Overlay, {
                                                                        className: eo.profileOverlay,
                                                                        children: (0, o.jsx)(R.Z, {
                                                                            user: t,
                                                                            applicationId: eE,
                                                                            guildId:
                                                                                null !=
                                                                                (n = null == eN ? void 0 : eN.guildId)
                                                                                    ? n
                                                                                    : void 0,
                                                                            channelId: ei,
                                                                            className: eo.profileBanner,
                                                                        }),
                                                                    }),
                                                                eM.map((e) => {
                                                                    var n;
                                                                    let { applicationId: r } = e;
                                                                    return (0, o.jsx)(
                                                                        V.Z.Overlay,
                                                                        {
                                                                            className: eo.profileOverlay,
                                                                            children: (0, o.jsx)(R.Z, {
                                                                                user: t,
                                                                                guildId:
                                                                                    null !=
                                                                                    (n =
                                                                                        null == eN
                                                                                            ? void 0
                                                                                            : eN.guildId)
                                                                                        ? n
                                                                                        : void 0,
                                                                                channelId: ei,
                                                                                isGameRelationship: !0,
                                                                                applicationId: r,
                                                                                className: eo.profileBanner,
                                                                            }),
                                                                        },
                                                                        r,
                                                                    );
                                                                }),
                                                                t.isProvisional &&
                                                                    (0, o.jsx)(V.Z.Overlay, {
                                                                        className: eo.profileOverlay,
                                                                        children: (0, o.jsx)(Y.Z, {
                                                                            heading: et.intl.string(et.t.Iyka0d),
                                                                            headingVariant: "text-md/semibold",
                                                                            headingIcon: (0, o.jsx)(c.Mgn, {
                                                                                size: "xs",
                                                                                color: "currentColor",
                                                                            }),
                                                                            className: eo.profileBanner,
                                                                            children: (0, o.jsx)(j.n, {
                                                                                userId: t.id,
                                                                                variant: "text-sm/normal",
                                                                            }),
                                                                        }),
                                                                    }),
                                                                t.id === er.id &&
                                                                    (0, o.jsx)(B.Z, {
                                                                        isPremiumUser: (0, O.I5)(er),
                                                                        onInteraction: ex,
                                                                    }),
                                                                (0, o.jsx)(k.Z, {
                                                                    user: t,
                                                                    className: eo.profileBanner,
                                                                }),
                                                                (0, o.jsx)("div", {
                                                                    className: eo.profileButtons,
                                                                    children: (0, o.jsx)(H.Z, {
                                                                        user: t,
                                                                        currentUser: er,
                                                                        guildId: el,
                                                                        channelId: ei,
                                                                        displayProfile: eN,
                                                                        relationshipType: eC,
                                                                        onClose: ex,
                                                                    }),
                                                                }),
                                                                (null == eN ? void 0 : eN.bio) != null &&
                                                                    (null == eN ? void 0 : eN.bio) !== "" &&
                                                                    !eS &&
                                                                    (0, o.jsx)(w.Z, {
                                                                        userBio: eN.bio,
                                                                        setLineClamp: !1,
                                                                    }),
                                                                eR.length > 0 &&
                                                                    (0, o.jsx)(Y.Z, {
                                                                        heading: et.intl.string(et.t["Uv/eT0"]),
                                                                        children: (0, o.jsx)(L.Z, {
                                                                            applicationIds: eR,
                                                                        }),
                                                                    }),
                                                                (0, o.jsx)(Y.Z, {
                                                                    heading: et.intl.string(et.t.a6XYDw),
                                                                    children: (0, o.jsx)(U.Z, {
                                                                        userId: t.id,
                                                                        guildId: null == eN ? void 0 : eN.guildId,
                                                                        tooltipDelay: $.vB,
                                                                    }),
                                                                }),
                                                                (null == eN ? void 0 : eN.guildId) != null &&
                                                                    (0, o.jsx)(z.Z, {
                                                                        user: t,
                                                                        currentUser: er,
                                                                        guildId: eN.guildId,
                                                                        className: eo.profileRolesSection,
                                                                        headingVariant: "text-xs/medium",
                                                                        headingColor: "currentColor",
                                                                        scrollIntoView: eu === $.Tb.ROLES,
                                                                    }),
                                                                eU.length > 0 &&
                                                                    (0, o.jsx)(Y.Z, {
                                                                        heading: et.intl.string(et.t["3fe7U1"]),
                                                                        scrollIntoView: eu === $.Tb.CONNECTIONS,
                                                                        children: (0, o.jsx)(K.Z, {
                                                                            connections: eU,
                                                                            userId: t.id,
                                                                            className: eo.profileAppConnections,
                                                                        }),
                                                                    }),
                                                                (0, o.jsx)(Y.Z, {
                                                                    heading: et.intl.string(et.t["mQKv+v"]),
                                                                    scrollIntoView: eu === $.Tb.NOTE,
                                                                    children: (0, o.jsx)(a.Z, {
                                                                        userId: t.id,
                                                                        className: eo.profileNote,
                                                                        autoFocus: eu === $.Tb.NOTE,
                                                                        onUpdate: () =>
                                                                            (0, P.pQ)(
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
                                                                                            o = Object.keys(t);
                                                                                        "function" ==
                                                                                            typeof Object.getOwnPropertySymbols &&
                                                                                            (o = o.concat(
                                                                                                Object.getOwnPropertySymbols(
                                                                                                    t,
                                                                                                ).filter(function (e) {
                                                                                                    return Object.getOwnPropertyDescriptor(
                                                                                                        t,
                                                                                                        e,
                                                                                                    ).enumerable;
                                                                                                }),
                                                                                            )),
                                                                                            o.forEach(function (n) {
                                                                                                var o;
                                                                                                (o = t[n]),
                                                                                                    n in e
                                                                                                        ? Object.defineProperty(
                                                                                                              e,
                                                                                                              n,
                                                                                                              {
                                                                                                                  value: o,
                                                                                                                  enumerable:
                                                                                                                      !0,
                                                                                                                  configurable:
                                                                                                                      !0,
                                                                                                                  writable:
                                                                                                                      !0,
                                                                                                              },
                                                                                                          )
                                                                                                        : (e[n] = o);
                                                                                            });
                                                                                    }
                                                                                    return e;
                                                                                })({ action: "SET_NOTE" }, ev),
                                                                            ),
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                        (null == eN ? void 0 : eN.profileEffect) != null &&
                                                            (0, o.jsx)(g.Z, {
                                                                profileEffectId:
                                                                    null == eN ? void 0 : eN.profileEffect.id,
                                                                isHovering: e_,
                                                            }),
                                                    ],
                                                }),
                                                (0, o.jsx)(J.Z, {
                                                    user: t,
                                                    currentUser: er,
                                                    displayProfile: eN,
                                                    guildId: el,
                                                    channelId: ei,
                                                    items: eL,
                                                    initialSection: ed,
                                                    initialSubsection: eu,
                                                    onClose: ex,
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            (0, o.jsx)(W.Z, {
                                userId: t.id,
                                className: eo.editingToolbar,
                            }),
                        ],
                    }),
                }),
            }),
        })
    );
}
