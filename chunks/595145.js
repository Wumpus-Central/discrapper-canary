n.d(t, { Z: () => er }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(815061),
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
    h = n(699516),
    x = n(246946),
    v = n(585483),
    _ = n(5192),
    I = n(111361),
    P = n(785717),
    E = n(221292),
    T = n(687158),
    Z = n(771362),
    N = n(510659),
    w = n(113557),
    S = n(648052),
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
    W = n(179828),
    Y = n(993160),
    z = n(574887),
    K = n(693408),
    H = n(661462),
    X = n(76076),
    q = n(872269),
    J = n(768111),
    Q = n(228168),
    $ = n(981631),
    ee = n(671955),
    et = n(388032),
    en = n(293496);
function er(e) {
    var t;
    let {
            user: n,
            currentUser: er,
            guildId: ei,
            channelId: el,
            messageId: eo,
            roleId: ea,
            sessionId: ec,
            initialSection: es,
            initialSubsection: ed,
            transitionState: eu,
            customStatusPrompt: ef,
            openedAt: ep,
            onClose: em,
            showGuildProfile: eg = !0,
            sourceAnalyticsLocations: eb = [],
            disableActionsForPreview: ej = !1,
        } = e,
        { analyticsLocations: ey } = (0, f.ZP)([...eb, u.Z.USER_PROFILE_MODAL_V2]),
        eO = (0, P.ZB)({
            layout: "MODAL_V2",
            userId: n.id,
            sourceSessionId: ec,
            guildId: ei,
            channelId: el,
            messageId: eo,
            roleId: ea,
            showGuildProfile: eg,
        }),
        eh = i.useRef(null),
        ex = (0, s.Z)(eh),
        [ev, e_] = i.useState(!1),
        eI = (0, N.$m)(),
        eP = (0, a.q_F)({
            opacity: +(null != eI.interactionType),
            config: { duration: 150 },
        }),
        eE = i.useMemo(() => (null != ei ? { [ei]: [n.id] } : {}), [ei, n.id]);
    (0, d.$)(eE);
    let eT = (0, T.ZP)(n.id, eg ? ei : void 0),
        eZ = _.ZP.useName(null == eT ? void 0 : eT.guildId, el, n),
        { relationshipType: eN, originApplicationId: ew } = (0, o.cj)([h.Z], () => ({
            relationshipType: h.Z.getRelationshipType(n.id),
            originApplicationId: h.Z.getOriginApplicationId(n.id),
        })),
        eS = (0, o.e7)([x.Z], () => x.Z.hidePersonalInformation),
        eA =
            null == eT
                ? void 0
                : eT.getBannerURL({
                      canAnimate: !1,
                      size: 1024,
                  }),
        eC = (0, m.p)({ location: "UserProfileModalV2" }),
        eD = i.useMemo(() => (null != ef ? ef : (0, g.Z)()), [ef]),
        eL = (0, J.Z)({
            user: n,
            currentUser: er,
        }),
        eR = (0, j.Y)({ userId: n.id }),
        eG = (0, b.vh)(n.id),
        ek = (0, Z.Z)(n.id),
        eB = (0, p.Dt)(),
        eM = et.intl.format(et.t.KRe1Fh, { name: eZ });
    return (
        i.useEffect(() => {
            let e = () => {
                e_(!0),
                    setTimeout(() => {
                        e_(!1);
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
            value: ey,
            children: (0, r.jsx)(P.Mt, {
                value: eO,
                openedAt: ep,
                fetchStartedAt: null == eT ? void 0 : eT.fetchStartedAt,
                fetchEndedAt: null == eT ? void 0 : eT.fetchEndedAt,
                isLoaded: null == eT ? void 0 : eT.isLoaded,
                children: (0, r.jsx)(N.NJ, {
                    value: eI,
                    children: (0, r.jsx)(a.UkV, {
                        isShaking: ev,
                        intensity: 1.4,
                        children: (0, r.jsxs)(a.Y0X, {
                            "data-migration-pending": !0,
                            hideShadow: !0,
                            className: en.root,
                            transitionState: eu,
                            "aria-labelledby": eB,
                            parentComponent: "UserProfileModalV2",
                            children: [
                                ej
                                    ? (0, r.jsxs)("div", {
                                          className: en.previewBar,
                                          children: [
                                              (0, r.jsxs)(a.X6q, {
                                                  id: eB,
                                                  variant: "heading-sm/normal",
                                                  color: "text-primary",
                                                  children: [
                                                      (0, r.jsx)(a.nn4, {
                                                          children: ""
                                                              .concat(et.intl.string(et.t.apViam), ": ")
                                                              .concat(eM),
                                                      }),
                                                      (0, r.jsx)("span", {
                                                          "aria-hidden": !0,
                                                          children: et.intl.string(et.t.apViam),
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)(a.zxk, {
                                                  size: "sm",
                                                  variant: "secondary",
                                                  text: et.intl.string(et.t.ojM1xM),
                                                  onClick: em,
                                                  "aria-label": et.intl.string(et.t.cpT0Cg),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(a.nn4, {
                                          children: (0, r.jsx)(a.H, {
                                              id: eB,
                                              children: eM,
                                          }),
                                      }),
                                (0, r.jsx)(a.y5t, {
                                    children: (0, r.jsxs)(U.Z, {
                                        className: ej ? en.disabled : void 0,
                                        user: n,
                                        displayProfile: eT,
                                        themeType: ee.l.MODAL_V2,
                                        children: [
                                            null != eA &&
                                                (0, r.jsx)("div", {
                                                    className: en.backgroundImage,
                                                    style: { backgroundImage: "url(".concat(eA, ")") },
                                                }),
                                            null != eI.interactionType &&
                                                (0, r.jsx)(l.animated.div, {
                                                    style: eP,
                                                    className: en.backdrop,
                                                }),
                                            (0, r.jsx)(X.Z, {
                                                onAutoHide: () => (0, q.L$)(null),
                                                className: en.toast,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: en.profile,
                                                ref: (null == eT ? void 0 : eT.profileEffectId) != null ? eh : void 0,
                                                children: [
                                                    (0, r.jsxs)("div", {
                                                        className: en.profileHeader,
                                                        children: [
                                                            (0, r.jsx)(A.Z, {
                                                                user: n,
                                                                displayProfile: eT,
                                                                themeType: ee.l.MODAL_V2,
                                                            }),
                                                            (0, r.jsx)(k.Z, {
                                                                userId: n.id,
                                                                onClose: em,
                                                                className: en.interactionToast,
                                                            }),
                                                            (0, r.jsx)(w.Z, {
                                                                location: "UserProfileModalV2",
                                                                user: n,
                                                                displayProfile: eT,
                                                                guildId: ei,
                                                                channelId: el,
                                                                themeType: ee.l.MODAL_V2,
                                                            }),
                                                            (0, r.jsx)(V.Z, {
                                                                location: "UserProfileModalV2",
                                                                user: n,
                                                                guildId: ei,
                                                                channelId: el,
                                                                themeType: ee.l.MODAL_V2,
                                                                hasEntered: eu === a.Dvm.ENTERED,
                                                                prompt: eC && n.id === er.id ? eD : null,
                                                                disableToolbar: ej,
                                                            }),
                                                        ],
                                                    }),
                                                    (0, r.jsxs)(a.Ttm, {
                                                        fade: !0,
                                                        className: en.profileBody,
                                                        children: [
                                                            (0, r.jsx)(F.Z, {
                                                                user: n,
                                                                onClose: em,
                                                                nickname: _.ZP.useName(
                                                                    null == eT ? void 0 : eT.guildId,
                                                                    el,
                                                                    n,
                                                                ),
                                                                nicknameIcons: (0, r.jsx)(L.Z, {
                                                                    size: "sm",
                                                                    userId: n.id,
                                                                }),
                                                                nicknameVariant: "heading-xl/semibold",
                                                                pronouns: null == eT ? void 0 : eT.pronouns,
                                                                tags: (0, r.jsx)(S.Z, {
                                                                    displayProfile: eT,
                                                                    themeType: ee.l.MODAL_V2,
                                                                    onClose: em,
                                                                }),
                                                            }),
                                                            eN === $.OGo.PENDING_INCOMING &&
                                                                (0, r.jsx)(U.Z.Overlay, {
                                                                    className: en.profileOverlay,
                                                                    children: (0, r.jsx)(G.Z, {
                                                                        user: n,
                                                                        applicationId: ew,
                                                                        guildId:
                                                                            null !=
                                                                            (t = null == eT ? void 0 : eT.guildId)
                                                                                ? t
                                                                                : void 0,
                                                                        channelId: el,
                                                                        className: en.profileBanner,
                                                                    }),
                                                                }),
                                                            eG.map((e) => {
                                                                var t;
                                                                let { applicationId: i } = e;
                                                                return (0, r.jsx)(
                                                                    U.Z.Overlay,
                                                                    {
                                                                        className: en.profileOverlay,
                                                                        children: (0, r.jsx)(G.Z, {
                                                                            user: n,
                                                                            guildId:
                                                                                null !=
                                                                                (t = null == eT ? void 0 : eT.guildId)
                                                                                    ? t
                                                                                    : void 0,
                                                                            channelId: el,
                                                                            isGameRelationship: !0,
                                                                            applicationId: i,
                                                                            className: en.profileBanner,
                                                                        }),
                                                                    },
                                                                    i,
                                                                );
                                                            }),
                                                            n.isProvisional &&
                                                                (0, r.jsx)(U.Z.Overlay, {
                                                                    className: en.profileOverlay,
                                                                    children: (0, r.jsx)(K.Z, {
                                                                        heading: et.intl.string(et.t.Iyka0d),
                                                                        headingVariant: "text-md/semibold",
                                                                        headingIcon: (0, r.jsx)(a.Mgn, {
                                                                            size: "xs",
                                                                            color: "currentColor",
                                                                        }),
                                                                        className: en.profileBanner,
                                                                        children: (0, r.jsx)(O.n, {
                                                                            userId: n.id,
                                                                            variant: "text-sm/normal",
                                                                        }),
                                                                    }),
                                                                }),
                                                            n.id === er.id &&
                                                                (0, r.jsx)(D.Z, {
                                                                    isPremiumUser: (0, I.I5)(er),
                                                                    onInteraction: em,
                                                                }),
                                                            (0, r.jsx)(M.Z, {
                                                                user: n,
                                                                className: en.profileBanner,
                                                            }),
                                                            (0, r.jsx)("div", {
                                                                className: en.profileButtons,
                                                                children: (0, r.jsx)(Y.Z, {
                                                                    user: n,
                                                                    currentUser: er,
                                                                    guildId: ei,
                                                                    channelId: el,
                                                                    displayProfile: eT,
                                                                    relationshipType: eN,
                                                                    onClose: em,
                                                                }),
                                                            }),
                                                            (null == eT ? void 0 : eT.bio) != null &&
                                                                (null == eT ? void 0 : eT.bio) !== "" &&
                                                                !eS &&
                                                                (0, r.jsx)(C.Z, {
                                                                    userBio: eT.bio,
                                                                    setLineClamp: !1,
                                                                }),
                                                            eR.length > 0 &&
                                                                (0, r.jsx)(K.Z, {
                                                                    heading: et.intl.string(et.t["Uv/eT0"]),
                                                                    children: (0, r.jsx)(R.Z, { applicationIds: eR }),
                                                                }),
                                                            (0, r.jsx)(K.Z, {
                                                                heading: et.intl.string(et.t.a6XYDw),
                                                                children: (0, r.jsx)(B.Z, {
                                                                    userId: n.id,
                                                                    guildId: null == eT ? void 0 : eT.guildId,
                                                                    tooltipDelay: Q.vB,
                                                                }),
                                                            }),
                                                            (null == eT ? void 0 : eT.guildId) != null &&
                                                                (0, r.jsx)(W.Z, {
                                                                    user: n,
                                                                    currentUser: er,
                                                                    guildId: eT.guildId,
                                                                    className: en.profileRolesSection,
                                                                    headingVariant: "text-xs/medium",
                                                                    headingColor: "currentColor",
                                                                    scrollIntoView: ed === Q.Tb.ROLES,
                                                                }),
                                                            ek.length > 0 &&
                                                                (0, r.jsx)(K.Z, {
                                                                    heading: et.intl.string(et.t["3fe7U1"]),
                                                                    scrollIntoView: ed === Q.Tb.CONNECTIONS,
                                                                    children: (0, r.jsx)(z.Z, {
                                                                        connections: ek,
                                                                        userId: n.id,
                                                                        className: en.profileAppConnections,
                                                                    }),
                                                                }),
                                                            (0, r.jsx)(K.Z, {
                                                                heading: et.intl.string(et.t["mQKv+v"]),
                                                                scrollIntoView: ed === Q.Tb.NOTE,
                                                                children: (0, r.jsx)(c.Z, {
                                                                    userId: n.id,
                                                                    className: en.profileNote,
                                                                    autoFocus: ed === Q.Tb.NOTE,
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
                                                                            })({ action: "SET_NOTE" }, eO),
                                                                        ),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    (null == eT ? void 0 : eT.profileEffectId) != null &&
                                                        (0, r.jsx)(y.Z, {
                                                            profileEffectId: null == eT ? void 0 : eT.profileEffectId,
                                                            isHovering: ex,
                                                        }),
                                                ],
                                            }),
                                            (0, r.jsx)(H.Z, {
                                                user: n,
                                                currentUser: er,
                                                displayProfile: eT,
                                                guildId: ei,
                                                channelId: el,
                                                items: eL,
                                                initialSection: es,
                                                initialSubsection: ed,
                                                onClose: em,
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
