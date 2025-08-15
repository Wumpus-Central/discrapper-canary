n.d(t, { Z: () => en }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(717976),
    o = n(442837),
    a = n(481060),
    c = n(666520),
    s = n(727637),
    d = n(616780),
    u = n(100527),
    f = n(906732),
    p = n(313201),
    m = n(368326),
    g = n(429467),
    b = n(320582),
    j = n(246016),
    y = n(680295),
    O = n(189156),
    x = n(699516),
    h = n(246946),
    v = n(585483),
    _ = n(5192),
    I = n(111361),
    P = n(785717),
    E = n(221292),
    T = n(687158),
    Z = n(771362),
    N = n(510659),
    S = n(113557),
    w = n(648052),
    A = n(867176),
    C = n(280885),
    D = n(537006),
    L = n(681837),
    R = n(78806),
    G = n(91433),
    k = n(451834),
    B = n(900927),
    M = n(944043),
    U = n(502762),
    F = n(530),
    V = n(4517),
    Y = n(179828),
    W = n(993160),
    z = n(574887),
    H = n(693408),
    K = n(661462),
    X = n(76076),
    q = n(872269),
    J = n(768111),
    Q = n(228168),
    $ = n(981631),
    ee = n(388032),
    et = n(293496);
function en(e) {
    var t;
    let {
            user: n,
            currentUser: en,
            guildId: er,
            channelId: ei,
            messageId: el,
            roleId: eo,
            sessionId: ea,
            initialSection: ec,
            initialSubsection: es,
            transitionState: ed,
            customStatusPrompt: eu,
            openedAt: ef,
            onClose: ep,
            showGuildProfile: em = !0,
            sourceAnalyticsLocations: eg = [],
            disableActionsForPreview: eb = !1,
        } = e,
        { analyticsLocations: ej } = (0, f.ZP)([...eg, u.Z.USER_PROFILE_MODAL_V2]),
        ey = (0, P.ZB)({
            layout: "MODAL_V2",
            userId: n.id,
            sourceSessionId: ea,
            guildId: er,
            channelId: ei,
            messageId: el,
            roleId: eo,
            showGuildProfile: em,
        }),
        eO = i.useRef(null),
        ex = (0, s.Z)(eO),
        [eh, ev] = i.useState(!1),
        e_ = (0, N.$m)(),
        eI = (0, a.q_F)({
            opacity: +(null != e_.interactionType),
            config: { duration: 150 },
        }),
        eP = i.useMemo(() => (null != er ? { [er]: [n.id] } : {}), [er, n.id]);
    (0, d.$)(eP);
    let eE = (0, T.ZP)(n.id, em ? er : void 0),
        eT = _.ZP.useName(null == eE ? void 0 : eE.guildId, ei, n),
        { relationshipType: eZ, originApplicationId: eN } = (0, o.cj)([x.Z], () => ({
            relationshipType: x.Z.getRelationshipType(n.id),
            originApplicationId: x.Z.getOriginApplicationId(n.id),
        })),
        eS = (0, o.e7)([h.Z], () => h.Z.hidePersonalInformation),
        ew =
            null == eE
                ? void 0
                : eE.getBannerURL({
                      canAnimate: !1,
                      size: 1024,
                  }),
        eA = (0, m.p)({ location: "UserProfileModalV2" }),
        eC = i.useMemo(() => (null != eu ? eu : (0, g.Z)()), [eu]),
        eD = (0, J.Z)({
            user: n,
            currentUser: en,
        }),
        eL = (0, j.Y)({ userId: n.id }),
        eR = (0, b.vh)(n.id),
        eG = (0, Z.Z)(n.id),
        ek = (0, p.Dt)(),
        eB = ee.intl.format(ee.t.KRe1Fh, { name: eT });
    return (
        i.useEffect(() => {
            let e = () => {
                ev(!0),
                    setTimeout(() => {
                        ev(!1);
                    }, 1000);
            };
            return (
                v.S.subscribe($.CkL.SHAKE_PROFILE_MODAL, e),
                () => {
                    v.S.unsubscribe($.CkL.SHAKE_PROFILE_MODAL, e), (0, q.L$)(null);
                }
            );
        }, []),
        (0, r.jsx)(f.Gt, {
            value: ej,
            children: (0, r.jsx)(P.Mt, {
                value: ey,
                openedAt: ef,
                fetchStartedAt: null == eE ? void 0 : eE.fetchStartedAt,
                fetchEndedAt: null == eE ? void 0 : eE.fetchEndedAt,
                isLoaded: null == eE ? void 0 : eE.isLoaded,
                children: (0, r.jsx)(N.NJ, {
                    value: e_,
                    children: (0, r.jsx)(a.UkV, {
                        isShaking: eh,
                        intensity: 1.4,
                        children: (0, r.jsxs)(a.Y0X, {
                            "data-migration-pending": !0,
                            hideShadow: !0,
                            className: et.root,
                            transitionState: ed,
                            "aria-labelledby": ek,
                            parentComponent: "UserProfileModalV2",
                            children: [
                                eb
                                    ? (0, r.jsxs)("div", {
                                          className: et.previewBar,
                                          children: [
                                              (0, r.jsxs)(a.X6q, {
                                                  id: ek,
                                                  variant: "heading-sm/normal",
                                                  color: "text-primary",
                                                  children: [
                                                      (0, r.jsx)(a.nn4, {
                                                          children: ""
                                                              .concat(ee.intl.string(ee.t.apViam), ": ")
                                                              .concat(eB),
                                                      }),
                                                      (0, r.jsx)("span", {
                                                          "aria-hidden": !0,
                                                          children: ee.intl.string(ee.t.apViam),
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)(a.zxk, {
                                                  size: "sm",
                                                  variant: "secondary",
                                                  text: ee.intl.string(ee.t.ojM1xM),
                                                  onClick: ep,
                                                  "aria-label": ee.intl.string(ee.t.cpT0Cg),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(a.nn4, {
                                          children: (0, r.jsx)(a.H, {
                                              id: ek,
                                              children: eB,
                                          }),
                                      }),
                                (0, r.jsx)(a.y5t, {
                                    children: (0, r.jsxs)(U.Z, {
                                        className: eb ? et.disabled : void 0,
                                        user: n,
                                        displayProfile: eE,
                                        themeType: Q.lY.MODAL_V2,
                                        children: [
                                            null != ew &&
                                                (0, r.jsx)("div", {
                                                    className: et.backgroundImage,
                                                    style: { backgroundImage: "url(".concat(ew, ")") },
                                                }),
                                            null != e_.interactionType &&
                                                (0, r.jsx)(l.animated.div, {
                                                    style: eI,
                                                    className: et.backdrop,
                                                }),
                                            (0, r.jsx)(X.Z, {
                                                onAutoHide: () => (0, q.L$)(null),
                                                className: et.toast,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: et.profile,
                                                ref: (null == eE ? void 0 : eE.profileEffectId) != null ? eO : void 0,
                                                children: [
                                                    (0, r.jsxs)("div", {
                                                        className: et.profileHeader,
                                                        children: [
                                                            (0, r.jsx)(A.Z, {
                                                                user: n,
                                                                displayProfile: eE,
                                                                themeType: Q.lY.MODAL_V2,
                                                            }),
                                                            (0, r.jsx)(k.Z, {
                                                                userId: n.id,
                                                                onClose: ep,
                                                                className: et.interactionToast,
                                                            }),
                                                            (0, r.jsx)(S.Z, {
                                                                location: "UserProfileModalV2",
                                                                user: n,
                                                                displayProfile: eE,
                                                                guildId: er,
                                                                channelId: ei,
                                                                themeType: Q.lY.MODAL_V2,
                                                            }),
                                                            (0, r.jsx)(V.Z, {
                                                                location: "UserProfileModalV2",
                                                                user: n,
                                                                guildId: er,
                                                                channelId: ei,
                                                                themeType: Q.lY.MODAL_V2,
                                                                hasEntered: ed === a.Dvm.ENTERED,
                                                                prompt: eA && n.id === en.id ? eC : null,
                                                                disableToolbar: eb,
                                                            }),
                                                        ],
                                                    }),
                                                    (0, r.jsxs)(a.Ttm, {
                                                        fade: !0,
                                                        className: et.profileBody,
                                                        children: [
                                                            (0, r.jsx)(F.Z, {
                                                                user: n,
                                                                onClose: ep,
                                                                nickname: _.ZP.useName(
                                                                    null == eE ? void 0 : eE.guildId,
                                                                    ei,
                                                                    n,
                                                                ),
                                                                nicknameIcons: (0, r.jsx)(L.Z, {
                                                                    size: "sm",
                                                                    userId: n.id,
                                                                }),
                                                                nicknameVariant: "heading-xl/semibold",
                                                                pronouns: null == eE ? void 0 : eE.pronouns,
                                                                tags: (0, r.jsx)(w.Z, {
                                                                    displayProfile: eE,
                                                                    themeType: Q.lY.MODAL_V2,
                                                                    onClose: ep,
                                                                }),
                                                            }),
                                                            eZ === $.OGo.PENDING_INCOMING &&
                                                                (0, r.jsx)(U.Z.Overlay, {
                                                                    className: et.profileOverlay,
                                                                    children: (0, r.jsx)(G.Z, {
                                                                        user: n,
                                                                        applicationId: eN,
                                                                        guildId:
                                                                            null !=
                                                                            (t = null == eE ? void 0 : eE.guildId)
                                                                                ? t
                                                                                : void 0,
                                                                        channelId: ei,
                                                                        className: et.profileBanner,
                                                                    }),
                                                                }),
                                                            eR.map((e) => {
                                                                var t;
                                                                let { applicationId: i } = e;
                                                                return (0, r.jsx)(
                                                                    U.Z.Overlay,
                                                                    {
                                                                        className: et.profileOverlay,
                                                                        children: (0, r.jsx)(G.Z, {
                                                                            user: n,
                                                                            guildId:
                                                                                null !=
                                                                                (t = null == eE ? void 0 : eE.guildId)
                                                                                    ? t
                                                                                    : void 0,
                                                                            channelId: ei,
                                                                            isGameRelationship: !0,
                                                                            applicationId: i,
                                                                            className: et.profileBanner,
                                                                        }),
                                                                    },
                                                                    i,
                                                                );
                                                            }),
                                                            n.isProvisional &&
                                                                (0, r.jsx)(U.Z.Overlay, {
                                                                    className: et.profileOverlay,
                                                                    children: (0, r.jsx)(H.Z, {
                                                                        heading: ee.intl.string(ee.t.Iyka0d),
                                                                        headingVariant: "text-md/semibold",
                                                                        headingIcon: (0, r.jsx)(a.Mgn, {
                                                                            size: "xs",
                                                                            color: "currentColor",
                                                                        }),
                                                                        className: et.profileBanner,
                                                                        children: (0, r.jsx)(O.n, {
                                                                            userId: n.id,
                                                                            variant: "text-sm/normal",
                                                                        }),
                                                                    }),
                                                                }),
                                                            n.id === en.id &&
                                                                (0, r.jsx)(D.Z, {
                                                                    isPremiumUser: (0, I.I5)(en),
                                                                    onInteraction: ep,
                                                                }),
                                                            (0, r.jsx)(M.Z, {
                                                                user: n,
                                                                className: et.profileBanner,
                                                            }),
                                                            (0, r.jsx)("div", {
                                                                className: et.profileButtons,
                                                                children: (0, r.jsx)(W.Z, {
                                                                    user: n,
                                                                    currentUser: en,
                                                                    guildId: er,
                                                                    channelId: ei,
                                                                    displayProfile: eE,
                                                                    relationshipType: eZ,
                                                                    onClose: ep,
                                                                }),
                                                            }),
                                                            (null == eE ? void 0 : eE.bio) != null &&
                                                                (null == eE ? void 0 : eE.bio) !== "" &&
                                                                !eS &&
                                                                (0, r.jsx)(C.Z, {
                                                                    userBio: eE.bio,
                                                                    setLineClamp: !1,
                                                                }),
                                                            eL.length > 0 &&
                                                                (0, r.jsx)(H.Z, {
                                                                    heading: ee.intl.string(ee.t["Uv/eT0"]),
                                                                    children: (0, r.jsx)(R.Z, { applicationIds: eL }),
                                                                }),
                                                            (0, r.jsx)(H.Z, {
                                                                heading: ee.intl.string(ee.t.a6XYDw),
                                                                children: (0, r.jsx)(B.Z, {
                                                                    userId: n.id,
                                                                    guildId: null == eE ? void 0 : eE.guildId,
                                                                    tooltipDelay: Q.vB,
                                                                }),
                                                            }),
                                                            (null == eE ? void 0 : eE.guildId) != null &&
                                                                (0, r.jsx)(Y.Z, {
                                                                    user: n,
                                                                    currentUser: en,
                                                                    guildId: eE.guildId,
                                                                    className: et.profileRolesSection,
                                                                    headingVariant: "text-xs/medium",
                                                                    headingColor: "currentColor",
                                                                    scrollIntoView: es === Q.Tb.ROLES,
                                                                }),
                                                            eG.length > 0 &&
                                                                (0, r.jsx)(H.Z, {
                                                                    heading: ee.intl.string(ee.t["3fe7U1"]),
                                                                    scrollIntoView: es === Q.Tb.CONNECTIONS,
                                                                    children: (0, r.jsx)(z.Z, {
                                                                        connections: eG,
                                                                        userId: n.id,
                                                                        className: et.profileAppConnections,
                                                                    }),
                                                                }),
                                                            (0, r.jsx)(H.Z, {
                                                                heading: ee.intl.string(ee.t["mQKv+v"]),
                                                                scrollIntoView: es === Q.Tb.NOTE,
                                                                children: (0, r.jsx)(c.Z, {
                                                                    userId: n.id,
                                                                    className: et.profileNote,
                                                                    autoFocus: es === Q.Tb.NOTE,
                                                                    onUpdate: () =>
                                                                        (0, E.pQ)(
                                                                            (function (e) {
                                                                                for (
                                                                                    var t = 1;
                                                                                    t < arguments.length;
                                                                                    t++
                                                                                ) {
                                                                                    var n =
                                                                                            null != arguments[t]
                                                                                                ? arguments[t]
                                                                                                : {},
                                                                                        r = Object.keys(n);
                                                                                    "function" ==
                                                                                        typeof Object.getOwnPropertySymbols &&
                                                                                        (r = r.concat(
                                                                                            Object.getOwnPropertySymbols(
                                                                                                n,
                                                                                            ).filter(function (e) {
                                                                                                return Object.getOwnPropertyDescriptor(
                                                                                                    n,
                                                                                                    e,
                                                                                                ).enumerable;
                                                                                            }),
                                                                                        )),
                                                                                        r.forEach(function (t) {
                                                                                            var r;
                                                                                            (r = n[t]),
                                                                                                t in e
                                                                                                    ? Object.defineProperty(
                                                                                                          e,
                                                                                                          t,
                                                                                                          {
                                                                                                              value: r,
                                                                                                              enumerable:
                                                                                                                  !0,
                                                                                                              configurable:
                                                                                                                  !0,
                                                                                                              writable:
                                                                                                                  !0,
                                                                                                          },
                                                                                                      )
                                                                                                    : (e[t] = r);
                                                                                        });
                                                                                }
                                                                                return e;
                                                                            })({ action: "SET_NOTE" }, ey),
                                                                        ),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    (null == eE ? void 0 : eE.profileEffectId) != null &&
                                                        (0, r.jsx)(y.Z, {
                                                            profileEffectId: null == eE ? void 0 : eE.profileEffectId,
                                                            isHovering: ex,
                                                        }),
                                                ],
                                            }),
                                            (0, r.jsx)(K.Z, {
                                                user: n,
                                                currentUser: en,
                                                displayProfile: eE,
                                                guildId: er,
                                                channelId: ei,
                                                items: eD,
                                                initialSection: ec,
                                                initialSubsection: es,
                                                onClose: ep,
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
            }),
        })
    );
}
