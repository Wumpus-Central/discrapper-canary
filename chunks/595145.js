t.d(n, { Z: () => eo }), t(388685);
var o = t(951288),
    l = t(647438),
    r = t(261616),
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
    j = t(680295),
    g = t(189156),
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
    D = t(537006),
    B = t(681837),
    L = t(78806),
    R = t(91433),
    M = t(451834),
    U = t(900927),
    k = t(944043),
    V = t(502762),
    F = t(530),
    G = t(4517),
    z = t(179828),
    K = t(993160),
    H = t(574887),
    W = t(693408),
    Y = t(661462),
    J = t(76076),
    q = t(872269),
    X = t(768111),
    Q = t(228168),
    $ = t(981631),
    ee = t(671955),
    en = t(388032),
    et = t(7938);
function eo(e) {
    var n;
    let {
            user: t,
            currentUser: eo,
            guildId: el,
            channelId: er,
            messageId: ei,
            roleId: ec,
            sessionId: ea,
            initialSection: es,
            initialSubsection: ed,
            transitionState: eu,
            customStatusPrompt: ef,
            openedAt: ep,
            onClose: em,
            showGuildProfile: ex = !0,
            sourceAnalyticsLocations: eb = [],
            disableActionsForPreview: eh = !1,
        } = e,
        { analyticsLocations: ej } = (0, f.ZP)([...eb, u.Z.USER_PROFILE_MODAL_V2]),
        eg = (0, Z.ZB)({
            layout: "MODAL_V2",
            userId: t.id,
            sourceSessionId: ea,
            guildId: el,
            channelId: er,
            messageId: ei,
            roleId: ec,
            showGuildProfile: ex,
        }),
        ev = l.useRef(null),
        ey = (0, s.Z)(ev),
        [e_, eI] = l.useState(!1),
        eO = (0, A.$m)(),
        eZ = (0, c.q_F)({
            opacity: +(null != eO.interactionType),
            config: { duration: 150 },
        }),
        eP = l.useMemo(() => (null != el ? { [el]: [t.id] } : {}), [el, t.id]);
    (0, d.$)(eP, "UserProfileModalV2");
    let eT = (0, T.ZP)(t.id, ex ? el : void 0),
        eN = I.ZP.useName(null == eT ? void 0 : eT.guildId, er, t),
        { relationshipType: eA, originApplicationId: eC } = (0, i.cj)([v.Z], () => ({
            relationshipType: v.Z.getRelationshipType(t.id),
            originApplicationId: v.Z.getOriginApplicationId(t.id),
        })),
        eE = (0, i.e7)([y.Z], () => y.Z.hidePersonalInformation),
        eS =
            null == eT
                ? void 0
                : eT.getBannerURL({
                      canAnimate: !1,
                      size: 1024,
                  }),
        ew = (0, m.p)({ location: "UserProfileModalV2" }),
        eD = l.useMemo(() => (null != ef ? ef : (0, x.Z)()), [ef]),
        eB = (0, X.Z)({
            user: t,
            currentUser: eo,
        }),
        eL = (0, h.Y)({ userId: t.id }),
        eR = (0, b.vh)(t.id),
        eM = (0, N.Z)(t.id),
        eU = (0, p.Dt)(),
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
                _.S.subscribe($.CkL.SHAKE_PROFILE_MODAL, e),
                () => {
                    _.S.unsubscribe($.CkL.SHAKE_PROFILE_MODAL, e), (0, q.L$)(null);
                }
            );
        }, []),
        (0, o.jsx)(f.Gt, {
            value: ej,
            children: (0, o.jsx)(Z.Mt, {
                value: eg,
                openedAt: ep,
                fetchStartedAt: null == eT ? void 0 : eT.fetchStartedAt,
                fetchEndedAt: null == eT ? void 0 : eT.fetchEndedAt,
                isLoaded: null == eT ? void 0 : eT.isLoaded,
                children: (0, o.jsx)(A.NJ, {
                    value: eO,
                    children: (0, o.jsx)(c.UkV, {
                        isShaking: e_,
                        intensity: 1.4,
                        children: (0, o.jsxs)(c.Y0X, {
                            "data-migration-pending": !0,
                            hideShadow: !0,
                            className: et.root,
                            transitionState: eu,
                            "aria-labelledby": eU,
                            parentComponent: "UserProfileModalV2",
                            children: [
                                eh
                                    ? (0, o.jsxs)("div", {
                                          className: et.previewBar,
                                          children: [
                                              (0, o.jsxs)(c.X6q, {
                                                  id: eU,
                                                  variant: "heading-sm/normal",
                                                  color: "text-primary",
                                                  children: [
                                                      (0, o.jsx)(c.nn4, {
                                                          children: ""
                                                              .concat(en.intl.string(en.t.apViam), ": ")
                                                              .concat(ek),
                                                      }),
                                                      (0, o.jsx)("span", {
                                                          "aria-hidden": !0,
                                                          children: en.intl.string(en.t.apViam),
                                                      }),
                                                  ],
                                              }),
                                              (0, o.jsx)(c.zxk, {
                                                  size: "sm",
                                                  variant: "secondary",
                                                  text: en.intl.string(en.t.ojM1xM),
                                                  onClick: em,
                                                  "aria-label": en.intl.string(en.t.cpT0Cg),
                                              }),
                                          ],
                                      })
                                    : (0, o.jsx)(c.nn4, {
                                          children: (0, o.jsx)(c.H, {
                                              id: eU,
                                              children: ek,
                                          }),
                                      }),
                                (0, o.jsx)(c.y5t, {
                                    children: (0, o.jsxs)(V.Z, {
                                        className: eh ? et.disabled : void 0,
                                        user: t,
                                        displayProfile: eT,
                                        themeType: ee.l.MODAL_V2,
                                        children: [
                                            null != eS &&
                                                (0, o.jsx)("div", {
                                                    className: et.backgroundImage,
                                                    style: { backgroundImage: "url(".concat(eS, ")") },
                                                }),
                                            null != eO.interactionType &&
                                                (0, o.jsx)(r.animated.div, {
                                                    style: eZ,
                                                    className: et.backdrop,
                                                }),
                                            (0, o.jsx)(J.Z, {
                                                onAutoHide: () => (0, q.L$)(null),
                                                className: et.toast,
                                            }),
                                            (0, o.jsxs)("div", {
                                                className: et.profile,
                                                ref: (null == eT ? void 0 : eT.profileEffect) != null ? ev : void 0,
                                                children: [
                                                    (0, o.jsxs)("div", {
                                                        className: et.profileHeader,
                                                        children: [
                                                            (0, o.jsx)(S.Z, {
                                                                user: t,
                                                                displayProfile: eT,
                                                                themeType: ee.l.MODAL_V2,
                                                            }),
                                                            (0, o.jsx)(M.Z, {
                                                                userId: t.id,
                                                                onClose: em,
                                                                className: et.interactionToast,
                                                            }),
                                                            (0, o.jsx)(C.Z, {
                                                                user: t,
                                                                displayProfile: eT,
                                                                guildId: el,
                                                                channelId: er,
                                                                themeType: ee.l.MODAL_V2,
                                                            }),
                                                            (0, o.jsx)(G.Z, {
                                                                user: t,
                                                                guildId: el,
                                                                channelId: er,
                                                                themeType: ee.l.MODAL_V2,
                                                                hasEntered: eu === c.Dvm.ENTERED,
                                                                prompt: ew && t.id === eo.id ? eD : null,
                                                                disableToolbar: eh,
                                                            }),
                                                        ],
                                                    }),
                                                    (0, o.jsxs)(c.Ttm, {
                                                        fade: !0,
                                                        className: et.profileBody,
                                                        children: [
                                                            (0, o.jsx)(F.Z, {
                                                                user: t,
                                                                onClose: em,
                                                                nickname: I.ZP.useName(
                                                                    null == eT ? void 0 : eT.guildId,
                                                                    er,
                                                                    t,
                                                                ),
                                                                nicknameIcons: (0, o.jsx)(B.Z, {
                                                                    size: "sm",
                                                                    userId: t.id,
                                                                }),
                                                                nicknameVariant: "heading-xl/semibold",
                                                                pronouns: null == eT ? void 0 : eT.pronouns,
                                                                tags: (0, o.jsx)(E.Z, {
                                                                    displayProfile: eT,
                                                                    themeType: ee.l.MODAL_V2,
                                                                    onClose: em,
                                                                }),
                                                            }),
                                                            eA === $.OGo.PENDING_INCOMING &&
                                                                (0, o.jsx)(V.Z.Overlay, {
                                                                    className: et.profileOverlay,
                                                                    children: (0, o.jsx)(R.Z, {
                                                                        user: t,
                                                                        applicationId: eC,
                                                                        guildId:
                                                                            null !=
                                                                            (n = null == eT ? void 0 : eT.guildId)
                                                                                ? n
                                                                                : void 0,
                                                                        channelId: er,
                                                                        className: et.profileBanner,
                                                                    }),
                                                                }),
                                                            eR.map((e) => {
                                                                var n;
                                                                let { applicationId: l } = e;
                                                                return (0, o.jsx)(
                                                                    V.Z.Overlay,
                                                                    {
                                                                        className: et.profileOverlay,
                                                                        children: (0, o.jsx)(R.Z, {
                                                                            user: t,
                                                                            guildId:
                                                                                null !=
                                                                                (n = null == eT ? void 0 : eT.guildId)
                                                                                    ? n
                                                                                    : void 0,
                                                                            channelId: er,
                                                                            isGameRelationship: !0,
                                                                            applicationId: l,
                                                                            className: et.profileBanner,
                                                                        }),
                                                                    },
                                                                    l,
                                                                );
                                                            }),
                                                            t.isProvisional &&
                                                                (0, o.jsx)(V.Z.Overlay, {
                                                                    className: et.profileOverlay,
                                                                    children: (0, o.jsx)(W.Z, {
                                                                        heading: en.intl.string(en.t.Iyka0d),
                                                                        headingVariant: "text-md/semibold",
                                                                        headingIcon: (0, o.jsx)(c.Mgn, {
                                                                            size: "xs",
                                                                            color: "currentColor",
                                                                        }),
                                                                        className: et.profileBanner,
                                                                        children: (0, o.jsx)(g.n, {
                                                                            userId: t.id,
                                                                            variant: "text-sm/normal",
                                                                        }),
                                                                    }),
                                                                }),
                                                            t.id === eo.id &&
                                                                (0, o.jsx)(D.Z, {
                                                                    isPremiumUser: (0, O.I5)(eo),
                                                                    onInteraction: em,
                                                                }),
                                                            (0, o.jsx)(k.Z, {
                                                                user: t,
                                                                className: et.profileBanner,
                                                            }),
                                                            (0, o.jsx)("div", {
                                                                className: et.profileButtons,
                                                                children: (0, o.jsx)(K.Z, {
                                                                    user: t,
                                                                    currentUser: eo,
                                                                    guildId: el,
                                                                    channelId: er,
                                                                    displayProfile: eT,
                                                                    relationshipType: eA,
                                                                    onClose: em,
                                                                }),
                                                            }),
                                                            (null == eT ? void 0 : eT.bio) != null &&
                                                                (null == eT ? void 0 : eT.bio) !== "" &&
                                                                !eE &&
                                                                (0, o.jsx)(w.Z, {
                                                                    userBio: eT.bio,
                                                                    setLineClamp: !1,
                                                                }),
                                                            eL.length > 0 &&
                                                                (0, o.jsx)(W.Z, {
                                                                    heading: en.intl.string(en.t["Uv/eT0"]),
                                                                    children: (0, o.jsx)(L.Z, { applicationIds: eL }),
                                                                }),
                                                            (0, o.jsx)(W.Z, {
                                                                heading: en.intl.string(en.t.a6XYDw),
                                                                children: (0, o.jsx)(U.Z, {
                                                                    userId: t.id,
                                                                    guildId: null == eT ? void 0 : eT.guildId,
                                                                    tooltipDelay: Q.vB,
                                                                }),
                                                            }),
                                                            (null == eT ? void 0 : eT.guildId) != null &&
                                                                (0, o.jsx)(z.Z, {
                                                                    user: t,
                                                                    currentUser: eo,
                                                                    guildId: eT.guildId,
                                                                    className: et.profileRolesSection,
                                                                    headingVariant: "text-xs/medium",
                                                                    headingColor: "currentColor",
                                                                    scrollIntoView: ed === Q.Tb.ROLES,
                                                                }),
                                                            eM.length > 0 &&
                                                                (0, o.jsx)(W.Z, {
                                                                    heading: en.intl.string(en.t["3fe7U1"]),
                                                                    scrollIntoView: ed === Q.Tb.CONNECTIONS,
                                                                    children: (0, o.jsx)(H.Z, {
                                                                        connections: eM,
                                                                        userId: t.id,
                                                                        className: et.profileAppConnections,
                                                                    }),
                                                                }),
                                                            (0, o.jsx)(W.Z, {
                                                                heading: en.intl.string(en.t["mQKv+v"]),
                                                                scrollIntoView: ed === Q.Tb.NOTE,
                                                                children: (0, o.jsx)(a.Z, {
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
                                                                            })({ action: "SET_NOTE" }, eg),
                                                                        ),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    (null == eT ? void 0 : eT.profileEffect) != null &&
                                                        (0, o.jsx)(j.Z, {
                                                            profileEffectId: null == eT ? void 0 : eT.profileEffect.id,
                                                            isHovering: ey,
                                                        }),
                                                ],
                                            }),
                                            (0, o.jsx)(Y.Z, {
                                                user: t,
                                                currentUser: eo,
                                                displayProfile: eT,
                                                guildId: el,
                                                channelId: er,
                                                items: eB,
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
