n.d(t, { Z: () => er }), n(388685);
var r = n(951288),
    o = n(647438),
    i = n(815061),
    l = n(442837),
    a = n(481060),
    c = n(666520),
    s = n(727637),
    d = n(616780),
    u = n(100527),
    f = n(906732),
    p = n(313201),
    m = n(368326),
    b = n(429467),
    g = n(320582),
    h = n(246016),
    x = n(680295),
    _ = n(189156),
    j = n(699516),
    v = n(246946),
    y = n(585483),
    I = n(5192),
    O = n(111361),
    Z = n(785717),
    P = n(221292),
    T = n(687158),
    C = n(771362),
    A = n(510659),
    N = n(113557),
    E = n(648052),
    S = n(867176),
    w = n(280885),
    B = n(537006),
    L = n(681837),
    D = n(78806),
    M = n(91433),
    U = n(451834),
    R = n(900927),
    k = n(944043),
    G = n(502762),
    V = n(530),
    F = n(4517),
    Y = n(179828),
    W = n(993160),
    z = n(574887),
    H = n(693408),
    K = n(661462),
    X = n(76076),
    J = n(872269),
    q = n(768111),
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
            guildId: eo,
            channelId: ei,
            messageId: el,
            roleId: ea,
            sessionId: ec,
            initialSection: es,
            initialSubsection: ed,
            transitionState: eu,
            customStatusPrompt: ef,
            openedAt: ep,
            onClose: em,
            showGuildProfile: eb = !0,
            sourceAnalyticsLocations: eg = [],
            disableActionsForPreview: eh = !1,
        } = e,
        { analyticsLocations: ex } = (0, f.ZP)([...eg, u.Z.USER_PROFILE_MODAL_V2]),
        e_ = (0, Z.ZB)({
            layout: "MODAL_V2",
            userId: n.id,
            sourceSessionId: ec,
            guildId: eo,
            channelId: ei,
            messageId: el,
            roleId: ea,
            showGuildProfile: eb,
        }),
        ej = o.useRef(null),
        ev = (0, s.Z)(ej),
        [ey, eI] = o.useState(!1),
        eO = (0, A.$m)(),
        eZ = (0, a.q_F)({
            opacity: +(null != eO.interactionType),
            config: { duration: 150 },
        }),
        eP = o.useMemo(() => (null != eo ? { [eo]: [n.id] } : {}), [eo, n.id]);
    (0, d.$)(eP);
    let eT = (0, T.ZP)(n.id, eb ? eo : void 0),
        eC = I.ZP.useName(null == eT ? void 0 : eT.guildId, ei, n),
        { relationshipType: eA, originApplicationId: eN } = (0, l.cj)([j.Z], () => ({
            relationshipType: j.Z.getRelationshipType(n.id),
            originApplicationId: j.Z.getOriginApplicationId(n.id),
        })),
        eE = (0, l.e7)([v.Z], () => v.Z.hidePersonalInformation),
        eS =
            null == eT
                ? void 0
                : eT.getBannerURL({
                      canAnimate: !1,
                      size: 1024,
                  }),
        ew = (0, m.p)({ location: "UserProfileModalV2" }),
        eB = o.useMemo(() => (null != ef ? ef : (0, b.Z)()), [ef]),
        eL = (0, q.Z)({
            user: n,
            currentUser: er,
        }),
        eD = (0, h.Y)({ userId: n.id }),
        eM = (0, g.vh)(n.id),
        eU = (0, C.Z)(n.id),
        eR = (0, p.Dt)(),
        ek = et.intl.format(et.t.KRe1Fh, { name: eC });
    return (
        o.useEffect(() => {
            let e = () => {
                eI(!0),
                    setTimeout(() => {
                        eI(!1);
                    }, 1000);
            };
            return (
                y.S.subscribe($.CkL.SHAKE_PROFILE_MODAL, e),
                () => {
                    y.S.unsubscribe($.CkL.SHAKE_PROFILE_MODAL, e), (0, J.L$)(null);
                }
            );
        }, []),
        (0, r.jsx)(f.Gt, {
            value: ex,
            children: (0, r.jsx)(Z.Mt, {
                value: e_,
                openedAt: ep,
                fetchStartedAt: null == eT ? void 0 : eT.fetchStartedAt,
                fetchEndedAt: null == eT ? void 0 : eT.fetchEndedAt,
                isLoaded: null == eT ? void 0 : eT.isLoaded,
                children: (0, r.jsx)(A.NJ, {
                    value: eO,
                    children: (0, r.jsx)(a.UkV, {
                        isShaking: ey,
                        intensity: 1.4,
                        children: (0, r.jsxs)(a.Y0X, {
                            "data-migration-pending": !0,
                            hideShadow: !0,
                            className: en.root,
                            transitionState: eu,
                            "aria-labelledby": eR,
                            parentComponent: "UserProfileModalV2",
                            children: [
                                eh
                                    ? (0, r.jsxs)("div", {
                                          className: en.previewBar,
                                          children: [
                                              (0, r.jsxs)(a.X6q, {
                                                  id: eR,
                                                  variant: "heading-sm/normal",
                                                  color: "text-primary",
                                                  children: [
                                                      (0, r.jsx)(a.nn4, {
                                                          children: ""
                                                              .concat(et.intl.string(et.t.apViam), ": ")
                                                              .concat(ek),
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
                                              id: eR,
                                              children: ek,
                                          }),
                                      }),
                                (0, r.jsx)(a.y5t, {
                                    children: (0, r.jsxs)(G.Z, {
                                        className: eh ? en.disabled : void 0,
                                        user: n,
                                        displayProfile: eT,
                                        themeType: ee.l.MODAL_V2,
                                        children: [
                                            null != eS &&
                                                (0, r.jsx)("div", {
                                                    className: en.backgroundImage,
                                                    style: { backgroundImage: "url(".concat(eS, ")") },
                                                }),
                                            null != eO.interactionType &&
                                                (0, r.jsx)(i.animated.div, {
                                                    style: eZ,
                                                    className: en.backdrop,
                                                }),
                                            (0, r.jsx)(X.Z, {
                                                onAutoHide: () => (0, J.L$)(null),
                                                className: en.toast,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: en.profile,
                                                ref: (null == eT ? void 0 : eT.profileEffectId) != null ? ej : void 0,
                                                children: [
                                                    (0, r.jsxs)("div", {
                                                        className: en.profileHeader,
                                                        children: [
                                                            (0, r.jsx)(S.Z, {
                                                                user: n,
                                                                displayProfile: eT,
                                                                themeType: ee.l.MODAL_V2,
                                                            }),
                                                            (0, r.jsx)(U.Z, {
                                                                userId: n.id,
                                                                onClose: em,
                                                                className: en.interactionToast,
                                                            }),
                                                            (0, r.jsx)(N.Z, {
                                                                location: "UserProfileModalV2",
                                                                user: n,
                                                                displayProfile: eT,
                                                                guildId: eo,
                                                                channelId: ei,
                                                                themeType: ee.l.MODAL_V2,
                                                            }),
                                                            (0, r.jsx)(F.Z, {
                                                                location: "UserProfileModalV2",
                                                                user: n,
                                                                guildId: eo,
                                                                channelId: ei,
                                                                themeType: ee.l.MODAL_V2,
                                                                hasEntered: eu === a.Dvm.ENTERED,
                                                                prompt: ew && n.id === er.id ? eB : null,
                                                                disableToolbar: eh,
                                                            }),
                                                        ],
                                                    }),
                                                    (0, r.jsxs)(a.Ttm, {
                                                        fade: !0,
                                                        className: en.profileBody,
                                                        children: [
                                                            (0, r.jsx)(V.Z, {
                                                                user: n,
                                                                onClose: em,
                                                                nickname: I.ZP.useName(
                                                                    null == eT ? void 0 : eT.guildId,
                                                                    ei,
                                                                    n,
                                                                ),
                                                                nicknameIcons: (0, r.jsx)(L.Z, {
                                                                    size: "sm",
                                                                    userId: n.id,
                                                                }),
                                                                nicknameVariant: "heading-xl/semibold",
                                                                pronouns: null == eT ? void 0 : eT.pronouns,
                                                                tags: (0, r.jsx)(E.Z, {
                                                                    displayProfile: eT,
                                                                    themeType: ee.l.MODAL_V2,
                                                                    onClose: em,
                                                                }),
                                                            }),
                                                            eA === $.OGo.PENDING_INCOMING &&
                                                                (0, r.jsx)(G.Z.Overlay, {
                                                                    className: en.profileOverlay,
                                                                    children: (0, r.jsx)(M.Z, {
                                                                        user: n,
                                                                        applicationId: eN,
                                                                        guildId:
                                                                            null !=
                                                                            (t = null == eT ? void 0 : eT.guildId)
                                                                                ? t
                                                                                : void 0,
                                                                        channelId: ei,
                                                                        className: en.profileBanner,
                                                                    }),
                                                                }),
                                                            eM.map((e) => {
                                                                var t;
                                                                let { applicationId: o } = e;
                                                                return (0, r.jsx)(
                                                                    G.Z.Overlay,
                                                                    {
                                                                        className: en.profileOverlay,
                                                                        children: (0, r.jsx)(M.Z, {
                                                                            user: n,
                                                                            guildId:
                                                                                null !=
                                                                                (t = null == eT ? void 0 : eT.guildId)
                                                                                    ? t
                                                                                    : void 0,
                                                                            channelId: ei,
                                                                            isGameRelationship: !0,
                                                                            applicationId: o,
                                                                            className: en.profileBanner,
                                                                        }),
                                                                    },
                                                                    o,
                                                                );
                                                            }),
                                                            n.isProvisional &&
                                                                (0, r.jsx)(G.Z.Overlay, {
                                                                    className: en.profileOverlay,
                                                                    children: (0, r.jsx)(H.Z, {
                                                                        heading: et.intl.string(et.t.Iyka0d),
                                                                        headingVariant: "text-md/semibold",
                                                                        headingIcon: (0, r.jsx)(a.Mgn, {
                                                                            size: "xs",
                                                                            color: "currentColor",
                                                                        }),
                                                                        className: en.profileBanner,
                                                                        children: (0, r.jsx)(_.n, {
                                                                            userId: n.id,
                                                                            variant: "text-sm/normal",
                                                                        }),
                                                                    }),
                                                                }),
                                                            n.id === er.id &&
                                                                (0, r.jsx)(B.Z, {
                                                                    isPremiumUser: (0, O.I5)(er),
                                                                    onInteraction: em,
                                                                }),
                                                            (0, r.jsx)(k.Z, {
                                                                user: n,
                                                                className: en.profileBanner,
                                                            }),
                                                            (0, r.jsx)("div", {
                                                                className: en.profileButtons,
                                                                children: (0, r.jsx)(W.Z, {
                                                                    user: n,
                                                                    currentUser: er,
                                                                    guildId: eo,
                                                                    channelId: ei,
                                                                    displayProfile: eT,
                                                                    relationshipType: eA,
                                                                    onClose: em,
                                                                }),
                                                            }),
                                                            (null == eT ? void 0 : eT.bio) != null &&
                                                                (null == eT ? void 0 : eT.bio) !== "" &&
                                                                !eE &&
                                                                (0, r.jsx)(w.Z, {
                                                                    userBio: eT.bio,
                                                                    setLineClamp: !1,
                                                                }),
                                                            eD.length > 0 &&
                                                                (0, r.jsx)(H.Z, {
                                                                    heading: et.intl.string(et.t["Uv/eT0"]),
                                                                    children: (0, r.jsx)(D.Z, { applicationIds: eD }),
                                                                }),
                                                            (0, r.jsx)(H.Z, {
                                                                heading: et.intl.string(et.t.a6XYDw),
                                                                children: (0, r.jsx)(R.Z, {
                                                                    userId: n.id,
                                                                    guildId: null == eT ? void 0 : eT.guildId,
                                                                    tooltipDelay: Q.vB,
                                                                }),
                                                            }),
                                                            (null == eT ? void 0 : eT.guildId) != null &&
                                                                (0, r.jsx)(Y.Z, {
                                                                    user: n,
                                                                    currentUser: er,
                                                                    guildId: eT.guildId,
                                                                    className: en.profileRolesSection,
                                                                    headingVariant: "text-xs/medium",
                                                                    headingColor: "currentColor",
                                                                    scrollIntoView: ed === Q.Tb.ROLES,
                                                                }),
                                                            eU.length > 0 &&
                                                                (0, r.jsx)(H.Z, {
                                                                    heading: et.intl.string(et.t["3fe7U1"]),
                                                                    scrollIntoView: ed === Q.Tb.CONNECTIONS,
                                                                    children: (0, r.jsx)(z.Z, {
                                                                        connections: eU,
                                                                        userId: n.id,
                                                                        className: en.profileAppConnections,
                                                                    }),
                                                                }),
                                                            (0, r.jsx)(H.Z, {
                                                                heading: et.intl.string(et.t["mQKv+v"]),
                                                                scrollIntoView: ed === Q.Tb.NOTE,
                                                                children: (0, r.jsx)(c.Z, {
                                                                    userId: n.id,
                                                                    className: en.profileNote,
                                                                    autoFocus: ed === Q.Tb.NOTE,
                                                                    onUpdate: () =>
                                                                        (0, P.pQ)(
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
                                                                            })({ action: "SET_NOTE" }, e_),
                                                                        ),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    (null == eT ? void 0 : eT.profileEffectId) != null &&
                                                        (0, r.jsx)(x.Z, {
                                                            profileEffectId: null == eT ? void 0 : eT.profileEffectId,
                                                            isHovering: ev,
                                                        }),
                                                ],
                                            }),
                                            (0, r.jsx)(K.Z, {
                                                user: n,
                                                currentUser: er,
                                                displayProfile: eT,
                                                guildId: eo,
                                                channelId: ei,
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
