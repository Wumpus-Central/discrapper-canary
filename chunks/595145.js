t.d(n, { Z: () => eo }), t(388685);
var l = t(951288),
    i = t(647438),
    r = t(6383),
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
    E = t(621853),
    A = t(687158),
    S = t(771362),
    C = t(510659),
    w = t(899007),
    _ = t(648052),
    D = t(867176),
    R = t(280885),
    L = t(537006),
    M = t(681837),
    U = t(78806),
    k = t(91433),
    B = t(451834),
    V = t(900927),
    F = t(944043),
    G = t(502762),
    z = t(530),
    K = t(4517),
    W = t(179828),
    Y = t(993160),
    H = t(574887),
    J = t(996921),
    q = t(693408),
    X = t(661462),
    Q = t(76076),
    $ = t(872269),
    ee = t(768111),
    en = t(228168),
    et = t(981631),
    el = t(671955),
    ei = t(388032),
    er = t(7938);
function eo(e) {
    var n;
    let {
            user: t,
            currentUser: eo,
            guildId: es,
            channelId: ea,
            messageId: ec,
            roleId: ed,
            sessionId: eu,
            initialSection: em,
            initialSubsection: ef,
            transitionState: ep,
            customStatusPrompt: eh,
            openedAt: ej,
            onClose: ex,
            showGuildProfile: ev = !0,
            sourceAnalyticsLocations: eg = [],
            disableActionsForPreview: eb = !1,
        } = e,
        { analyticsLocations: ey } = (0, m.ZP)([...eg, u.Z.USER_PROFILE_MODAL_V2]),
        eO = (0, N.ZB)({
            layout: "MODAL_V2",
            userId: t.id,
            sourceSessionId: eu,
            guildId: es,
            channelId: ea,
            messageId: ec,
            roleId: ed,
            showGuildProfile: ev,
        }),
        eZ = i.useRef(null),
        eI = (0, c.Z)(eZ),
        [eP, eN] = i.useState(!1),
        { defaultWishlistId: eT } = (0, o.cj)([E.Z], () => ({ defaultWishlistId: E.Z.getFirstWishlistId(t.id) }));
    (0, b.k)(eT);
    let eE = (0, C.$m)(),
        eA = (0, s.q_F)({
            opacity: +(null != eE.interactionType),
            config: { duration: 150 },
        }),
        eS = i.useMemo(() => (null != es ? { [es]: [t.id] } : {}), [es, t.id]);
    (0, d.$)(eS, "UserProfileModalV2");
    let eC = (0, A.ZP)(t.id, ev ? es : void 0),
        ew = I.ZP.useName(null == eC ? void 0 : eC.guildId, ea, t),
        { relationshipType: e_, originApplicationId: eD } = (0, o.cj)([y.Z], () => ({
            relationshipType: y.Z.getRelationshipType(t.id),
            originApplicationId: y.Z.getOriginApplicationId(t.id),
        })),
        eR = (0, o.e7)([O.Z], () => O.Z.hidePersonalInformation),
        eL =
            null == eC
                ? void 0
                : eC.getBannerURL({
                      canAnimate: !1,
                      size: 1024,
                  }),
        eM = (0, p.p)({ location: "UserProfileModalV2" }),
        eU = i.useMemo(() => (null != eh ? eh : (0, h.Z)()), [eh]),
        ek = (0, ee.Z)({
            user: t,
            currentUser: eo,
        }),
        eB = (0, x.Y)({ userId: t.id }),
        eV = (0, j.vh)(t.id),
        eF = (0, S.Z)(t.id),
        eG = (0, f.Dt)(),
        ez = ei.intl.format(ei.t.KRe1Fh, { name: ew });
    return (
        i.useEffect(() => {
            let e = () => {
                eN(!0),
                    setTimeout(() => {
                        eN(!1);
                    }, 1000);
            };
            return (
                Z.S.subscribe(et.CkL.SHAKE_PROFILE_MODAL, e),
                () => {
                    Z.S.unsubscribe(et.CkL.SHAKE_PROFILE_MODAL, e), (0, $.L$)(null);
                }
            );
        }, []),
        (0, l.jsx)(m.Gt, {
            value: ey,
            children: (0, l.jsx)(N.Mt, {
                value: eO,
                openedAt: ej,
                fetchStartedAt: null == eC ? void 0 : eC.fetchStartedAt,
                fetchEndedAt: null == eC ? void 0 : eC.fetchEndedAt,
                isLoaded: null == eC ? void 0 : eC.isLoaded,
                children: (0, l.jsx)(C.NJ, {
                    value: eE,
                    children: (0, l.jsxs)(s.Y0X, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: er.root,
                        transitionState: ep,
                        "aria-labelledby": eG,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, l.jsxs)(s.UkV, {
                                isShaking: eP,
                                intensity: 1.4,
                                children: [
                                    eb
                                        ? (0, l.jsxs)("div", {
                                              className: er.previewBar,
                                              children: [
                                                  (0, l.jsxs)(s.X6q, {
                                                      id: eG,
                                                      variant: "heading-sm/normal",
                                                      color: "text-primary",
                                                      children: [
                                                          (0, l.jsx)(s.nn4, {
                                                              children: ""
                                                                  .concat(ei.intl.string(ei.t.apViam), ": ")
                                                                  .concat(ez),
                                                          }),
                                                          (0, l.jsx)("span", {
                                                              "aria-hidden": !0,
                                                              children: ei.intl.string(ei.t.apViam),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, l.jsx)(s.zxk, {
                                                      size: "sm",
                                                      variant: "secondary",
                                                      text: ei.intl.string(ei.t.ojM1xM),
                                                      onClick: ex,
                                                      "aria-label": ei.intl.string(ei.t.cpT0Cg),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsx)(s.nn4, {
                                              children: (0, l.jsx)(s.H, {
                                                  id: eG,
                                                  children: ez,
                                              }),
                                          }),
                                    (0, l.jsx)(s.y5t, {
                                        children: (0, l.jsxs)(G.Z, {
                                            className: eb ? er.disabled : void 0,
                                            user: t,
                                            displayProfile: eC,
                                            themeType: el.l.MODAL_V2,
                                            children: [
                                                null != eL &&
                                                    (0, l.jsx)("div", {
                                                        className: er.backgroundImage,
                                                        style: { backgroundImage: "url(".concat(eL, ")") },
                                                    }),
                                                null != eE.interactionType &&
                                                    (0, l.jsx)(r.animated.div, {
                                                        style: eA,
                                                        className: er.backdrop,
                                                    }),
                                                (0, l.jsx)(Q.Z, {
                                                    onAutoHide: () => (0, $.L$)(null),
                                                    className: er.toast,
                                                }),
                                                (0, l.jsxs)("div", {
                                                    className: er.profile,
                                                    ref: (null == eC ? void 0 : eC.profileEffect) != null ? eZ : void 0,
                                                    children: [
                                                        (0, l.jsxs)("div", {
                                                            className: er.profileHeader,
                                                            children: [
                                                                (0, l.jsx)(D.Z, {
                                                                    user: t,
                                                                    displayProfile: eC,
                                                                    themeType: el.l.MODAL_V2,
                                                                }),
                                                                (0, l.jsx)(B.Z, {
                                                                    userId: t.id,
                                                                    onClose: ex,
                                                                    className: er.interactionToast,
                                                                }),
                                                                (0, l.jsx)(w.Z, {
                                                                    user: t,
                                                                    displayProfile: eC,
                                                                    guildId: es,
                                                                    channelId: ea,
                                                                    themeType: el.l.MODAL_V2,
                                                                }),
                                                                (0, l.jsx)(K.Z, {
                                                                    user: t,
                                                                    guildId: es,
                                                                    channelId: ea,
                                                                    themeType: el.l.MODAL_V2,
                                                                    hasEntered: ep === s.Dvm.ENTERED,
                                                                    prompt: eM && t.id === eo.id ? eU : null,
                                                                    disableToolbar: eb,
                                                                }),
                                                            ],
                                                        }),
                                                        (0, l.jsxs)(s.Ttm, {
                                                            fade: !0,
                                                            className: er.profileBody,
                                                            children: [
                                                                (0, l.jsx)(z.Z, {
                                                                    user: t,
                                                                    onClose: ex,
                                                                    nickname: I.ZP.useName(
                                                                        null == eC ? void 0 : eC.guildId,
                                                                        ea,
                                                                        t,
                                                                    ),
                                                                    nicknameIcons: (0, l.jsx)(M.Z, {
                                                                        size: "sm",
                                                                        userId: t.id,
                                                                    }),
                                                                    nicknameVariant: "heading-xl/semibold",
                                                                    pronouns: null == eC ? void 0 : eC.pronouns,
                                                                    tags: (0, l.jsx)(_.Z, {
                                                                        displayProfile: eC,
                                                                        themeType: el.l.MODAL_V2,
                                                                        onClose: ex,
                                                                    }),
                                                                }),
                                                                e_ === et.OGo.PENDING_INCOMING &&
                                                                    (0, l.jsx)(G.Z.Overlay, {
                                                                        className: er.profileOverlay,
                                                                        children: (0, l.jsx)(k.Z, {
                                                                            user: t,
                                                                            applicationId: eD,
                                                                            guildId:
                                                                                null !=
                                                                                (n = null == eC ? void 0 : eC.guildId)
                                                                                    ? n
                                                                                    : void 0,
                                                                            channelId: ea,
                                                                            className: er.profileBanner,
                                                                        }),
                                                                    }),
                                                                eV.map((e) => {
                                                                    var n;
                                                                    let { applicationId: i } = e;
                                                                    return (0, l.jsx)(
                                                                        G.Z.Overlay,
                                                                        {
                                                                            className: er.profileOverlay,
                                                                            children: (0, l.jsx)(k.Z, {
                                                                                user: t,
                                                                                guildId:
                                                                                    null !=
                                                                                    (n =
                                                                                        null == eC
                                                                                            ? void 0
                                                                                            : eC.guildId)
                                                                                        ? n
                                                                                        : void 0,
                                                                                channelId: ea,
                                                                                isGameRelationship: !0,
                                                                                applicationId: i,
                                                                                className: er.profileBanner,
                                                                            }),
                                                                        },
                                                                        i,
                                                                    );
                                                                }),
                                                                t.isProvisional &&
                                                                    (0, l.jsx)(G.Z.Overlay, {
                                                                        className: er.profileOverlay,
                                                                        children: (0, l.jsx)(q.Z, {
                                                                            heading: ei.intl.string(ei.t.Iyka0d),
                                                                            headingVariant: "text-md/semibold",
                                                                            headingIcon: (0, l.jsx)(s.Mgn, {
                                                                                size: "xs",
                                                                                color: "currentColor",
                                                                            }),
                                                                            className: er.profileBanner,
                                                                            children: (0, l.jsx)(g.n, {
                                                                                userId: t.id,
                                                                                variant: "text-sm/normal",
                                                                            }),
                                                                        }),
                                                                    }),
                                                                t.id === eo.id &&
                                                                    (0, l.jsx)(L.Z, {
                                                                        isPremiumUser: (0, P.I5)(eo),
                                                                        onInteraction: ex,
                                                                    }),
                                                                (0, l.jsx)(F.Z, {
                                                                    user: t,
                                                                    className: er.profileBanner,
                                                                }),
                                                                (0, l.jsx)("div", {
                                                                    className: er.profileButtons,
                                                                    children: (0, l.jsx)(Y.Z, {
                                                                        user: t,
                                                                        currentUser: eo,
                                                                        guildId: es,
                                                                        channelId: ea,
                                                                        displayProfile: eC,
                                                                        relationshipType: e_,
                                                                        onClose: ex,
                                                                    }),
                                                                }),
                                                                (null == eC ? void 0 : eC.bio) != null &&
                                                                    (null == eC ? void 0 : eC.bio) !== "" &&
                                                                    !eR &&
                                                                    (0, l.jsx)(R.Z, {
                                                                        userBio: eC.bio,
                                                                        setLineClamp: !1,
                                                                    }),
                                                                eB.length > 0 &&
                                                                    (0, l.jsx)(q.Z, {
                                                                        heading: ei.intl.string(ei.t["Uv/eT0"]),
                                                                        children: (0, l.jsx)(U.Z, {
                                                                            applicationIds: eB,
                                                                        }),
                                                                    }),
                                                                (0, l.jsx)(q.Z, {
                                                                    heading: ei.intl.string(ei.t.a6XYDw),
                                                                    children: (0, l.jsx)(V.Z, {
                                                                        userId: t.id,
                                                                        guildId: null == eC ? void 0 : eC.guildId,
                                                                        tooltipDelay: en.vB,
                                                                    }),
                                                                }),
                                                                (null == eC ? void 0 : eC.guildId) != null &&
                                                                    (0, l.jsx)(W.Z, {
                                                                        user: t,
                                                                        currentUser: eo,
                                                                        guildId: eC.guildId,
                                                                        className: er.profileRolesSection,
                                                                        headingVariant: "text-xs/medium",
                                                                        headingColor: "currentColor",
                                                                        scrollIntoView: ef === en.Tb.ROLES,
                                                                    }),
                                                                eF.length > 0 &&
                                                                    (0, l.jsx)(q.Z, {
                                                                        heading: ei.intl.string(ei.t["3fe7U1"]),
                                                                        scrollIntoView: ef === en.Tb.CONNECTIONS,
                                                                        children: (0, l.jsx)(H.Z, {
                                                                            connections: eF,
                                                                            userId: t.id,
                                                                            className: er.profileAppConnections,
                                                                        }),
                                                                    }),
                                                                (0, l.jsx)(q.Z, {
                                                                    heading: ei.intl.string(ei.t["mQKv+v"]),
                                                                    scrollIntoView: ef === en.Tb.NOTE,
                                                                    children: (0, l.jsx)(a.Z, {
                                                                        userId: t.id,
                                                                        className: er.profileNote,
                                                                        autoFocus: ef === en.Tb.NOTE,
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
                                                        (null == eC ? void 0 : eC.profileEffect) != null &&
                                                            (0, l.jsx)(v.Z, {
                                                                profileEffectId:
                                                                    null == eC ? void 0 : eC.profileEffect.id,
                                                                isHovering: eI,
                                                            }),
                                                    ],
                                                }),
                                                (0, l.jsx)(X.Z, {
                                                    user: t,
                                                    currentUser: eo,
                                                    displayProfile: eC,
                                                    guildId: es,
                                                    channelId: ea,
                                                    items: ek,
                                                    initialSection: em,
                                                    initialSubsection: ef,
                                                    onClose: ex,
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            (0, l.jsx)(J.Z, {
                                userId: t.id,
                                className: er.editingToolbar,
                            }),
                        ],
                    }),
                }),
            }),
        })
    );
}
