t.d(n, { Z: () => ei }), t(388685);
var l = t(951288),
    i = t(647438),
    r = t(401393),
    o = t(442837),
    s = t(481060),
    a = t(666520),
    c = t(727637),
    d = t(616780),
    u = t(100527),
    f = t(906732),
    m = t(313201),
    p = t(368326),
    h = t(429467),
    j = t(320582),
    x = t(246016),
    v = t(680295),
    g = t(189156),
    b = t(699516),
    y = t(246946),
    O = t(585483),
    Z = t(5192),
    I = t(111361),
    P = t(785717),
    N = t(221292),
    T = t(687158),
    E = t(771362),
    A = t(510659),
    S = t(899007),
    C = t(648052),
    w = t(867176),
    _ = t(280885),
    D = t(537006),
    R = t(681837),
    L = t(78806),
    M = t(91433),
    U = t(451834),
    k = t(900927),
    B = t(944043),
    V = t(502762),
    F = t(530),
    G = t(4517),
    z = t(179828),
    K = t(993160),
    W = t(574887),
    Y = t(996921),
    H = t(693408),
    J = t(661462),
    q = t(76076),
    X = t(872269),
    Q = t(768111),
    $ = t(228168),
    ee = t(981631),
    en = t(671955),
    et = t(388032),
    el = t(7938);
function ei(e) {
    var n;
    let {
            user: t,
            currentUser: ei,
            guildId: er,
            channelId: eo,
            messageId: es,
            roleId: ea,
            sessionId: ec,
            initialSection: ed,
            initialSubsection: eu,
            transitionState: ef,
            customStatusPrompt: em,
            openedAt: ep,
            onClose: eh,
            showGuildProfile: ej = !0,
            sourceAnalyticsLocations: ex = [],
            disableActionsForPreview: ev = !1,
        } = e,
        { analyticsLocations: eg } = (0, f.ZP)([...ex, u.Z.USER_PROFILE_MODAL_V2]),
        eb = (0, P.ZB)({
            layout: "MODAL_V2",
            userId: t.id,
            sourceSessionId: ec,
            guildId: er,
            channelId: eo,
            messageId: es,
            roleId: ea,
            showGuildProfile: ej,
        }),
        ey = i.useRef(null),
        eO = (0, c.Z)(ey),
        [eZ, eI] = i.useState(!1),
        eP = (0, A.$m)(),
        eN = (0, s.q_F)({
            opacity: +(null != eP.interactionType),
            config: { duration: 150 },
        }),
        eT = i.useMemo(() => (null != er ? { [er]: [t.id] } : {}), [er, t.id]);
    (0, d.$)(eT, "UserProfileModalV2");
    let eE = (0, T.ZP)(t.id, ej ? er : void 0),
        eA = Z.ZP.useName(null == eE ? void 0 : eE.guildId, eo, t),
        { relationshipType: eS, originApplicationId: eC } = (0, o.cj)([b.Z], () => ({
            relationshipType: b.Z.getRelationshipType(t.id),
            originApplicationId: b.Z.getOriginApplicationId(t.id),
        })),
        ew = (0, o.e7)([y.Z], () => y.Z.hidePersonalInformation),
        e_ =
            null == eE
                ? void 0
                : eE.getBannerURL({
                      canAnimate: !1,
                      size: 1024,
                  }),
        eD = (0, p.p)({ location: "UserProfileModalV2" }),
        eR = i.useMemo(() => (null != em ? em : (0, h.Z)()), [em]),
        eL = (0, Q.Z)({
            user: t,
            currentUser: ei,
        }),
        eM = (0, x.Y)({ userId: t.id }),
        eU = (0, j.vh)(t.id),
        ek = (0, E.Z)(t.id),
        eB = (0, m.Dt)(),
        eV = et.intl.format(et.t.KRe1Fh, { name: eA });
    return (
        i.useEffect(() => {
            let e = () => {
                eI(!0),
                    setTimeout(() => {
                        eI(!1);
                    }, 1000);
            };
            return (
                O.S.subscribe(ee.CkL.SHAKE_PROFILE_MODAL, e),
                () => {
                    O.S.unsubscribe(ee.CkL.SHAKE_PROFILE_MODAL, e), (0, X.L$)(null);
                }
            );
        }, []),
        (0, l.jsx)(f.Gt, {
            value: eg,
            children: (0, l.jsx)(P.Mt, {
                value: eb,
                openedAt: ep,
                fetchStartedAt: null == eE ? void 0 : eE.fetchStartedAt,
                fetchEndedAt: null == eE ? void 0 : eE.fetchEndedAt,
                isLoaded: null == eE ? void 0 : eE.isLoaded,
                children: (0, l.jsx)(A.NJ, {
                    value: eP,
                    children: (0, l.jsxs)(s.Y0X, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: el.root,
                        transitionState: ef,
                        "aria-labelledby": eB,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, l.jsxs)(s.UkV, {
                                isShaking: eZ,
                                intensity: 1.4,
                                children: [
                                    ev
                                        ? (0, l.jsxs)("div", {
                                              className: el.previewBar,
                                              children: [
                                                  (0, l.jsxs)(s.X6q, {
                                                      id: eB,
                                                      variant: "heading-sm/normal",
                                                      color: "text-primary",
                                                      children: [
                                                          (0, l.jsx)(s.nn4, {
                                                              children: ""
                                                                  .concat(et.intl.string(et.t.apViam), ": ")
                                                                  .concat(eV),
                                                          }),
                                                          (0, l.jsx)("span", {
                                                              "aria-hidden": !0,
                                                              children: et.intl.string(et.t.apViam),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, l.jsx)(s.zxk, {
                                                      size: "sm",
                                                      variant: "secondary",
                                                      text: et.intl.string(et.t.ojM1xM),
                                                      onClick: eh,
                                                      "aria-label": et.intl.string(et.t.cpT0Cg),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsx)(s.nn4, {
                                              children: (0, l.jsx)(s.H, {
                                                  id: eB,
                                                  children: eV,
                                              }),
                                          }),
                                    (0, l.jsx)(s.y5t, {
                                        children: (0, l.jsxs)(V.Z, {
                                            className: ev ? el.disabled : void 0,
                                            user: t,
                                            displayProfile: eE,
                                            themeType: en.l.MODAL_V2,
                                            children: [
                                                null != e_ &&
                                                    (0, l.jsx)("div", {
                                                        className: el.backgroundImage,
                                                        style: { backgroundImage: "url(".concat(e_, ")") },
                                                    }),
                                                null != eP.interactionType &&
                                                    (0, l.jsx)(r.animated.div, {
                                                        style: eN,
                                                        className: el.backdrop,
                                                    }),
                                                (0, l.jsx)(q.Z, {
                                                    onAutoHide: () => (0, X.L$)(null),
                                                    className: el.toast,
                                                }),
                                                (0, l.jsxs)("div", {
                                                    className: el.profile,
                                                    ref: (null == eE ? void 0 : eE.profileEffect) != null ? ey : void 0,
                                                    children: [
                                                        (0, l.jsxs)("div", {
                                                            className: el.profileHeader,
                                                            children: [
                                                                (0, l.jsx)(w.Z, {
                                                                    user: t,
                                                                    displayProfile: eE,
                                                                    themeType: en.l.MODAL_V2,
                                                                }),
                                                                (0, l.jsx)(U.Z, {
                                                                    userId: t.id,
                                                                    onClose: eh,
                                                                    className: el.interactionToast,
                                                                }),
                                                                (0, l.jsx)(S.Z, {
                                                                    user: t,
                                                                    displayProfile: eE,
                                                                    guildId: er,
                                                                    channelId: eo,
                                                                    themeType: en.l.MODAL_V2,
                                                                }),
                                                                (0, l.jsx)(G.Z, {
                                                                    user: t,
                                                                    guildId: er,
                                                                    channelId: eo,
                                                                    themeType: en.l.MODAL_V2,
                                                                    hasEntered: ef === s.Dvm.ENTERED,
                                                                    prompt: eD && t.id === ei.id ? eR : null,
                                                                    disableToolbar: ev,
                                                                }),
                                                            ],
                                                        }),
                                                        (0, l.jsxs)(s.Ttm, {
                                                            fade: !0,
                                                            className: el.profileBody,
                                                            children: [
                                                                (0, l.jsx)(F.Z, {
                                                                    user: t,
                                                                    onClose: eh,
                                                                    nickname: Z.ZP.useName(
                                                                        null == eE ? void 0 : eE.guildId,
                                                                        eo,
                                                                        t,
                                                                    ),
                                                                    nicknameIcons: (0, l.jsx)(R.Z, {
                                                                        size: "sm",
                                                                        userId: t.id,
                                                                    }),
                                                                    nicknameVariant: "heading-xl/semibold",
                                                                    pronouns: null == eE ? void 0 : eE.pronouns,
                                                                    tags: (0, l.jsx)(C.Z, {
                                                                        displayProfile: eE,
                                                                        themeType: en.l.MODAL_V2,
                                                                        onClose: eh,
                                                                    }),
                                                                }),
                                                                eS === ee.OGo.PENDING_INCOMING &&
                                                                    (0, l.jsx)(V.Z.Overlay, {
                                                                        className: el.profileOverlay,
                                                                        children: (0, l.jsx)(M.Z, {
                                                                            user: t,
                                                                            applicationId: eC,
                                                                            guildId:
                                                                                null !=
                                                                                (n = null == eE ? void 0 : eE.guildId)
                                                                                    ? n
                                                                                    : void 0,
                                                                            channelId: eo,
                                                                            className: el.profileBanner,
                                                                        }),
                                                                    }),
                                                                eU.map((e) => {
                                                                    var n;
                                                                    let { applicationId: i } = e;
                                                                    return (0, l.jsx)(
                                                                        V.Z.Overlay,
                                                                        {
                                                                            className: el.profileOverlay,
                                                                            children: (0, l.jsx)(M.Z, {
                                                                                user: t,
                                                                                guildId:
                                                                                    null !=
                                                                                    (n =
                                                                                        null == eE
                                                                                            ? void 0
                                                                                            : eE.guildId)
                                                                                        ? n
                                                                                        : void 0,
                                                                                channelId: eo,
                                                                                isGameRelationship: !0,
                                                                                applicationId: i,
                                                                                className: el.profileBanner,
                                                                            }),
                                                                        },
                                                                        i,
                                                                    );
                                                                }),
                                                                t.isProvisional &&
                                                                    (0, l.jsx)(V.Z.Overlay, {
                                                                        className: el.profileOverlay,
                                                                        children: (0, l.jsx)(H.Z, {
                                                                            heading: et.intl.string(et.t.Iyka0d),
                                                                            headingVariant: "text-md/semibold",
                                                                            headingIcon: (0, l.jsx)(s.Mgn, {
                                                                                size: "xs",
                                                                                color: "currentColor",
                                                                            }),
                                                                            className: el.profileBanner,
                                                                            children: (0, l.jsx)(g.n, {
                                                                                userId: t.id,
                                                                                variant: "text-sm/normal",
                                                                            }),
                                                                        }),
                                                                    }),
                                                                t.id === ei.id &&
                                                                    (0, l.jsx)(D.Z, {
                                                                        isPremiumUser: (0, I.I5)(ei),
                                                                        onInteraction: eh,
                                                                    }),
                                                                (0, l.jsx)(B.Z, {
                                                                    user: t,
                                                                    className: el.profileBanner,
                                                                }),
                                                                (0, l.jsx)("div", {
                                                                    className: el.profileButtons,
                                                                    children: (0, l.jsx)(K.Z, {
                                                                        user: t,
                                                                        currentUser: ei,
                                                                        guildId: er,
                                                                        channelId: eo,
                                                                        displayProfile: eE,
                                                                        relationshipType: eS,
                                                                        onClose: eh,
                                                                    }),
                                                                }),
                                                                (null == eE ? void 0 : eE.bio) != null &&
                                                                    (null == eE ? void 0 : eE.bio) !== "" &&
                                                                    !ew &&
                                                                    (0, l.jsx)(_.Z, {
                                                                        userBio: eE.bio,
                                                                        setLineClamp: !1,
                                                                    }),
                                                                eM.length > 0 &&
                                                                    (0, l.jsx)(H.Z, {
                                                                        heading: et.intl.string(et.t["Uv/eT0"]),
                                                                        children: (0, l.jsx)(L.Z, {
                                                                            applicationIds: eM,
                                                                        }),
                                                                    }),
                                                                (0, l.jsx)(H.Z, {
                                                                    heading: et.intl.string(et.t.a6XYDw),
                                                                    children: (0, l.jsx)(k.Z, {
                                                                        userId: t.id,
                                                                        guildId: null == eE ? void 0 : eE.guildId,
                                                                        tooltipDelay: $.vB,
                                                                    }),
                                                                }),
                                                                (null == eE ? void 0 : eE.guildId) != null &&
                                                                    (0, l.jsx)(z.Z, {
                                                                        user: t,
                                                                        currentUser: ei,
                                                                        guildId: eE.guildId,
                                                                        className: el.profileRolesSection,
                                                                        headingVariant: "text-xs/medium",
                                                                        headingColor: "currentColor",
                                                                        scrollIntoView: eu === $.Tb.ROLES,
                                                                    }),
                                                                ek.length > 0 &&
                                                                    (0, l.jsx)(H.Z, {
                                                                        heading: et.intl.string(et.t["3fe7U1"]),
                                                                        scrollIntoView: eu === $.Tb.CONNECTIONS,
                                                                        children: (0, l.jsx)(W.Z, {
                                                                            connections: ek,
                                                                            userId: t.id,
                                                                            className: el.profileAppConnections,
                                                                        }),
                                                                    }),
                                                                (0, l.jsx)(H.Z, {
                                                                    heading: et.intl.string(et.t["mQKv+v"]),
                                                                    scrollIntoView: eu === $.Tb.NOTE,
                                                                    children: (0, l.jsx)(a.Z, {
                                                                        userId: t.id,
                                                                        className: el.profileNote,
                                                                        autoFocus: eu === $.Tb.NOTE,
                                                                        onUpdate: () =>
                                                                            (0, N.pQ)(
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
                                                                                })({ action: "SET_NOTE" }, eb),
                                                                            ),
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                        (null == eE ? void 0 : eE.profileEffect) != null &&
                                                            (0, l.jsx)(v.Z, {
                                                                profileEffectId:
                                                                    null == eE ? void 0 : eE.profileEffect.id,
                                                                isHovering: eO,
                                                            }),
                                                    ],
                                                }),
                                                (0, l.jsx)(J.Z, {
                                                    user: t,
                                                    currentUser: ei,
                                                    displayProfile: eE,
                                                    guildId: er,
                                                    channelId: eo,
                                                    items: eL,
                                                    initialSection: ed,
                                                    initialSubsection: eu,
                                                    onClose: eh,
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            (0, l.jsx)(Y.Z, {
                                userId: t.id,
                                className: el.editingToolbar,
                            }),
                        ],
                    }),
                }),
            }),
        })
    );
}
