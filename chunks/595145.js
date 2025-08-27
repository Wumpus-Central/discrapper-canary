t.d(n, { Z: () => er }), t(388685);
var r = t(951288),
    l = t(647438),
    o = t(202841),
    i = t(442837),
    c = t(481060),
    s = t(666520),
    a = t(727637),
    d = t(616780),
    u = t(100527),
    f = t(906732),
    m = t(313201),
    p = t(368326),
    h = t(429467),
    x = t(320582),
    b = t(246016),
    j = t(680295),
    g = t(189156),
    v = t(699516),
    y = t(246946),
    O = t(585483),
    I = t(5192),
    _ = t(111361),
    Z = t(785717),
    P = t(221292),
    T = t(687158),
    N = t(771362),
    A = t(510659),
    E = t(899007),
    C = t(648052),
    S = t(867176),
    w = t(280885),
    D = t(537006),
    L = t(681837),
    B = t(78806),
    R = t(91433),
    U = t(451834),
    M = t(900927),
    k = t(944043),
    G = t(502762),
    F = t(530),
    V = t(4517),
    Y = t(179828),
    W = t(993160),
    z = t(574887),
    K = t(693408),
    H = t(661462),
    J = t(76076),
    X = t(872269),
    q = t(768111),
    Q = t(228168),
    $ = t(981631),
    ee = t(671955),
    en = t(388032),
    et = t(293496);
function er(e) {
    var n;
    let {
            user: t,
            currentUser: er,
            guildId: el,
            channelId: eo,
            messageId: ei,
            roleId: ec,
            sessionId: es,
            initialSection: ea,
            initialSubsection: ed,
            transitionState: eu,
            customStatusPrompt: ef,
            openedAt: em,
            onClose: ep,
            showGuildProfile: eh = !0,
            sourceAnalyticsLocations: ex = [],
            disableActionsForPreview: eb = !1,
        } = e,
        { analyticsLocations: ej } = (0, f.ZP)([...ex, u.Z.USER_PROFILE_MODAL_V2]),
        eg = (0, Z.ZB)({
            layout: "MODAL_V2",
            userId: t.id,
            sourceSessionId: es,
            guildId: el,
            channelId: eo,
            messageId: ei,
            roleId: ec,
            showGuildProfile: eh,
        }),
        ev = l.useRef(null),
        ey = (0, a.Z)(ev),
        [eO, eI] = l.useState(!1),
        e_ = (0, A.$m)(),
        eZ = (0, c.q_F)({
            opacity: +(null != e_.interactionType),
            config: { duration: 150 },
        }),
        eP = l.useMemo(() => (null != el ? { [el]: [t.id] } : {}), [el, t.id]);
    (0, d.$)(eP, "UserProfileModalV2");
    let eT = (0, T.ZP)(t.id, eh ? el : void 0),
        eN = I.ZP.useName(null == eT ? void 0 : eT.guildId, eo, t),
        { relationshipType: eA, originApplicationId: eE } = (0, i.cj)([v.Z], () => ({
            relationshipType: v.Z.getRelationshipType(t.id),
            originApplicationId: v.Z.getOriginApplicationId(t.id),
        })),
        eC = (0, i.e7)([y.Z], () => y.Z.hidePersonalInformation),
        eS =
            null == eT
                ? void 0
                : eT.getBannerURL({
                      canAnimate: !1,
                      size: 1024,
                  }),
        ew = (0, p.p)({ location: "UserProfileModalV2" }),
        eD = l.useMemo(() => (null != ef ? ef : (0, h.Z)()), [ef]),
        eL = (0, q.Z)({
            user: t,
            currentUser: er,
        }),
        eB = (0, b.Y)({ userId: t.id }),
        eR = (0, x.vh)(t.id),
        eU = (0, N.Z)(t.id),
        eM = (0, m.Dt)(),
        ek = en.intl.format(en.t.KRe1Fh, { name: eN });
    return (
        l.useEffect(() => {
            let e = () => {
                eI(!0),
                    setTimeout(() => {
                        eI(!1);
                    }, 1000);
            };
            return (
                O.S.subscribe($.CkL.SHAKE_PROFILE_MODAL, e),
                () => {
                    O.S.unsubscribe($.CkL.SHAKE_PROFILE_MODAL, e), (0, X.L$)(null);
                }
            );
        }, []),
        (0, r.jsx)(f.Gt, {
            value: ej,
            children: (0, r.jsx)(Z.Mt, {
                value: eg,
                openedAt: em,
                fetchStartedAt: null == eT ? void 0 : eT.fetchStartedAt,
                fetchEndedAt: null == eT ? void 0 : eT.fetchEndedAt,
                isLoaded: null == eT ? void 0 : eT.isLoaded,
                children: (0, r.jsx)(A.NJ, {
                    value: e_,
                    children: (0, r.jsx)(c.UkV, {
                        isShaking: eO,
                        intensity: 1.4,
                        children: (0, r.jsxs)(c.Y0X, {
                            "data-migration-pending": !0,
                            hideShadow: !0,
                            className: et.root,
                            transitionState: eu,
                            "aria-labelledby": eM,
                            parentComponent: "UserProfileModalV2",
                            children: [
                                eb
                                    ? (0, r.jsxs)("div", {
                                          className: et.previewBar,
                                          children: [
                                              (0, r.jsxs)(c.X6q, {
                                                  id: eM,
                                                  variant: "heading-sm/normal",
                                                  color: "text-primary",
                                                  children: [
                                                      (0, r.jsx)(c.nn4, {
                                                          children: ""
                                                              .concat(en.intl.string(en.t.apViam), ": ")
                                                              .concat(ek),
                                                      }),
                                                      (0, r.jsx)("span", {
                                                          "aria-hidden": !0,
                                                          children: en.intl.string(en.t.apViam),
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)(c.zxk, {
                                                  size: "sm",
                                                  variant: "secondary",
                                                  text: en.intl.string(en.t.ojM1xM),
                                                  onClick: ep,
                                                  "aria-label": en.intl.string(en.t.cpT0Cg),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(c.nn4, {
                                          children: (0, r.jsx)(c.H, {
                                              id: eM,
                                              children: ek,
                                          }),
                                      }),
                                (0, r.jsx)(c.y5t, {
                                    children: (0, r.jsxs)(G.Z, {
                                        className: eb ? et.disabled : void 0,
                                        user: t,
                                        displayProfile: eT,
                                        themeType: ee.l.MODAL_V2,
                                        children: [
                                            null != eS &&
                                                (0, r.jsx)("div", {
                                                    className: et.backgroundImage,
                                                    style: { backgroundImage: "url(".concat(eS, ")") },
                                                }),
                                            null != e_.interactionType &&
                                                (0, r.jsx)(o.animated.div, {
                                                    style: eZ,
                                                    className: et.backdrop,
                                                }),
                                            (0, r.jsx)(J.Z, {
                                                onAutoHide: () => (0, X.L$)(null),
                                                className: et.toast,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: et.profile,
                                                ref: (null == eT ? void 0 : eT.profileEffect) != null ? ev : void 0,
                                                children: [
                                                    (0, r.jsxs)("div", {
                                                        className: et.profileHeader,
                                                        children: [
                                                            (0, r.jsx)(S.Z, {
                                                                user: t,
                                                                displayProfile: eT,
                                                                themeType: ee.l.MODAL_V2,
                                                            }),
                                                            (0, r.jsx)(U.Z, {
                                                                userId: t.id,
                                                                onClose: ep,
                                                                className: et.interactionToast,
                                                            }),
                                                            (0, r.jsx)(E.Z, {
                                                                user: t,
                                                                displayProfile: eT,
                                                                guildId: el,
                                                                channelId: eo,
                                                                themeType: ee.l.MODAL_V2,
                                                            }),
                                                            (0, r.jsx)(V.Z, {
                                                                user: t,
                                                                guildId: el,
                                                                channelId: eo,
                                                                themeType: ee.l.MODAL_V2,
                                                                hasEntered: eu === c.Dvm.ENTERED,
                                                                prompt: ew && t.id === er.id ? eD : null,
                                                                disableToolbar: eb,
                                                            }),
                                                        ],
                                                    }),
                                                    (0, r.jsxs)(c.Ttm, {
                                                        fade: !0,
                                                        className: et.profileBody,
                                                        children: [
                                                            (0, r.jsx)(F.Z, {
                                                                user: t,
                                                                onClose: ep,
                                                                nickname: I.ZP.useName(
                                                                    null == eT ? void 0 : eT.guildId,
                                                                    eo,
                                                                    t,
                                                                ),
                                                                nicknameIcons: (0, r.jsx)(L.Z, {
                                                                    size: "sm",
                                                                    userId: t.id,
                                                                }),
                                                                nicknameVariant: "heading-xl/semibold",
                                                                pronouns: null == eT ? void 0 : eT.pronouns,
                                                                tags: (0, r.jsx)(C.Z, {
                                                                    displayProfile: eT,
                                                                    themeType: ee.l.MODAL_V2,
                                                                    onClose: ep,
                                                                }),
                                                            }),
                                                            eA === $.OGo.PENDING_INCOMING &&
                                                                (0, r.jsx)(G.Z.Overlay, {
                                                                    className: et.profileOverlay,
                                                                    children: (0, r.jsx)(R.Z, {
                                                                        user: t,
                                                                        applicationId: eE,
                                                                        guildId:
                                                                            null !=
                                                                            (n = null == eT ? void 0 : eT.guildId)
                                                                                ? n
                                                                                : void 0,
                                                                        channelId: eo,
                                                                        className: et.profileBanner,
                                                                    }),
                                                                }),
                                                            eR.map((e) => {
                                                                var n;
                                                                let { applicationId: l } = e;
                                                                return (0, r.jsx)(
                                                                    G.Z.Overlay,
                                                                    {
                                                                        className: et.profileOverlay,
                                                                        children: (0, r.jsx)(R.Z, {
                                                                            user: t,
                                                                            guildId:
                                                                                null !=
                                                                                (n = null == eT ? void 0 : eT.guildId)
                                                                                    ? n
                                                                                    : void 0,
                                                                            channelId: eo,
                                                                            isGameRelationship: !0,
                                                                            applicationId: l,
                                                                            className: et.profileBanner,
                                                                        }),
                                                                    },
                                                                    l,
                                                                );
                                                            }),
                                                            t.isProvisional &&
                                                                (0, r.jsx)(G.Z.Overlay, {
                                                                    className: et.profileOverlay,
                                                                    children: (0, r.jsx)(K.Z, {
                                                                        heading: en.intl.string(en.t.Iyka0d),
                                                                        headingVariant: "text-md/semibold",
                                                                        headingIcon: (0, r.jsx)(c.Mgn, {
                                                                            size: "xs",
                                                                            color: "currentColor",
                                                                        }),
                                                                        className: et.profileBanner,
                                                                        children: (0, r.jsx)(g.n, {
                                                                            userId: t.id,
                                                                            variant: "text-sm/normal",
                                                                        }),
                                                                    }),
                                                                }),
                                                            t.id === er.id &&
                                                                (0, r.jsx)(D.Z, {
                                                                    isPremiumUser: (0, _.I5)(er),
                                                                    onInteraction: ep,
                                                                }),
                                                            (0, r.jsx)(k.Z, {
                                                                user: t,
                                                                className: et.profileBanner,
                                                            }),
                                                            (0, r.jsx)("div", {
                                                                className: et.profileButtons,
                                                                children: (0, r.jsx)(W.Z, {
                                                                    user: t,
                                                                    currentUser: er,
                                                                    guildId: el,
                                                                    channelId: eo,
                                                                    displayProfile: eT,
                                                                    relationshipType: eA,
                                                                    onClose: ep,
                                                                }),
                                                            }),
                                                            (null == eT ? void 0 : eT.bio) != null &&
                                                                (null == eT ? void 0 : eT.bio) !== "" &&
                                                                !eC &&
                                                                (0, r.jsx)(w.Z, {
                                                                    userBio: eT.bio,
                                                                    setLineClamp: !1,
                                                                }),
                                                            eB.length > 0 &&
                                                                (0, r.jsx)(K.Z, {
                                                                    heading: en.intl.string(en.t["Uv/eT0"]),
                                                                    children: (0, r.jsx)(B.Z, { applicationIds: eB }),
                                                                }),
                                                            (0, r.jsx)(K.Z, {
                                                                heading: en.intl.string(en.t.a6XYDw),
                                                                children: (0, r.jsx)(M.Z, {
                                                                    userId: t.id,
                                                                    guildId: null == eT ? void 0 : eT.guildId,
                                                                    tooltipDelay: Q.vB,
                                                                }),
                                                            }),
                                                            (null == eT ? void 0 : eT.guildId) != null &&
                                                                (0, r.jsx)(Y.Z, {
                                                                    user: t,
                                                                    currentUser: er,
                                                                    guildId: eT.guildId,
                                                                    className: et.profileRolesSection,
                                                                    headingVariant: "text-xs/medium",
                                                                    headingColor: "currentColor",
                                                                    scrollIntoView: ed === Q.Tb.ROLES,
                                                                }),
                                                            eU.length > 0 &&
                                                                (0, r.jsx)(K.Z, {
                                                                    heading: en.intl.string(en.t["3fe7U1"]),
                                                                    scrollIntoView: ed === Q.Tb.CONNECTIONS,
                                                                    children: (0, r.jsx)(z.Z, {
                                                                        connections: eU,
                                                                        userId: t.id,
                                                                        className: et.profileAppConnections,
                                                                    }),
                                                                }),
                                                            (0, r.jsx)(K.Z, {
                                                                heading: en.intl.string(en.t["mQKv+v"]),
                                                                scrollIntoView: ed === Q.Tb.NOTE,
                                                                children: (0, r.jsx)(s.Z, {
                                                                    userId: t.id,
                                                                    className: et.profileNote,
                                                                    autoFocus: ed === Q.Tb.NOTE,
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
                                                                                        r = Object.keys(t);
                                                                                    "function" ==
                                                                                        typeof Object.getOwnPropertySymbols &&
                                                                                        (r = r.concat(
                                                                                            Object.getOwnPropertySymbols(
                                                                                                t,
                                                                                            ).filter(function (e) {
                                                                                                return Object.getOwnPropertyDescriptor(
                                                                                                    t,
                                                                                                    e,
                                                                                                ).enumerable;
                                                                                            }),
                                                                                        )),
                                                                                        r.forEach(function (n) {
                                                                                            var r;
                                                                                            (r = t[n]),
                                                                                                n in e
                                                                                                    ? Object.defineProperty(
                                                                                                          e,
                                                                                                          n,
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
                                                                                                    : (e[n] = r);
                                                                                        });
                                                                                }
                                                                                return e;
                                                                            })({ action: "SET_NOTE" }, eg),
                                                                        ),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    (null == eT ? void 0 : eT.profileEffect) != null &&
                                                        (0, r.jsx)(j.Z, {
                                                            profileEffectId: null == eT ? void 0 : eT.profileEffect.id,
                                                            isHovering: ey,
                                                        }),
                                                ],
                                            }),
                                            (0, r.jsx)(H.Z, {
                                                user: t,
                                                currentUser: er,
                                                displayProfile: eT,
                                                guildId: el,
                                                channelId: eo,
                                                items: eL,
                                                initialSection: ea,
                                                initialSubsection: ed,
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
