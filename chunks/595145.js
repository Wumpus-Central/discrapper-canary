t.d(n, { Z: () => er }), t(388685);
var r = t(951288),
    o = t(647438),
    l = t(803948),
    i = t(442837),
    c = t(481060),
    a = t(666520),
    s = t(727637),
    d = t(616780),
    u = t(100527),
    f = t(906732),
    m = t(313201),
    p = t(368326),
    b = t(429467),
    g = t(320582),
    x = t(246016),
    h = t(680295),
    j = t(189156),
    v = t(699516),
    _ = t(246946),
    y = t(585483),
    I = t(5192),
    O = t(111361),
    P = t(785717),
    Z = t(221292),
    T = t(687158),
    A = t(771362),
    C = t(510659),
    N = t(113557),
    E = t(648052),
    S = t(867176),
    w = t(280885),
    B = t(537006),
    D = t(681837),
    L = t(78806),
    R = t(91433),
    U = t(451834),
    M = t(900927),
    k = t(944043),
    G = t(502762),
    V = t(530),
    F = t(4517),
    Y = t(179828),
    W = t(993160),
    H = t(574887),
    z = t(693408),
    K = t(661462),
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
            guildId: eo,
            channelId: el,
            messageId: ei,
            roleId: ec,
            sessionId: ea,
            initialSection: es,
            initialSubsection: ed,
            transitionState: eu,
            customStatusPrompt: ef,
            openedAt: em,
            onClose: ep,
            showGuildProfile: eb = !0,
            sourceAnalyticsLocations: eg = [],
            disableActionsForPreview: ex = !1,
        } = e,
        { analyticsLocations: eh } = (0, f.ZP)([...eg, u.Z.USER_PROFILE_MODAL_V2]),
        ej = (0, P.ZB)({
            layout: "MODAL_V2",
            userId: t.id,
            sourceSessionId: ea,
            guildId: eo,
            channelId: el,
            messageId: ei,
            roleId: ec,
            showGuildProfile: eb,
        }),
        ev = o.useRef(null),
        e_ = (0, s.Z)(ev),
        [ey, eI] = o.useState(!1),
        eO = (0, C.$m)(),
        eP = (0, c.q_F)({
            opacity: +(null != eO.interactionType),
            config: { duration: 150 },
        }),
        eZ = o.useMemo(() => (null != eo ? { [eo]: [t.id] } : {}), [eo, t.id]);
    (0, d.$)(eZ);
    let eT = (0, T.ZP)(t.id, eb ? eo : void 0),
        eA = I.ZP.useName(null == eT ? void 0 : eT.guildId, el, t),
        { relationshipType: eC, originApplicationId: eN } = (0, i.cj)([v.Z], () => ({
            relationshipType: v.Z.getRelationshipType(t.id),
            originApplicationId: v.Z.getOriginApplicationId(t.id),
        })),
        eE = (0, i.e7)([_.Z], () => _.Z.hidePersonalInformation),
        eS =
            null == eT
                ? void 0
                : eT.getBannerURL({
                      canAnimate: !1,
                      size: 1024,
                  }),
        ew = (0, p.p)({ location: "UserProfileModalV2" }),
        eB = o.useMemo(() => (null != ef ? ef : (0, b.Z)()), [ef]),
        eD = (0, q.Z)({
            user: t,
            currentUser: er,
        }),
        eL = (0, x.Y)({ userId: t.id }),
        eR = (0, g.vh)(t.id),
        eU = (0, A.Z)(t.id),
        eM = (0, m.Dt)(),
        ek = en.intl.format(en.t.KRe1Fh, { name: eA });
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
                    y.S.unsubscribe($.CkL.SHAKE_PROFILE_MODAL, e), (0, X.L$)(null);
                }
            );
        }, []),
        (0, r.jsx)(f.Gt, {
            value: eh,
            children: (0, r.jsx)(P.Mt, {
                value: ej,
                openedAt: em,
                fetchStartedAt: null == eT ? void 0 : eT.fetchStartedAt,
                fetchEndedAt: null == eT ? void 0 : eT.fetchEndedAt,
                isLoaded: null == eT ? void 0 : eT.isLoaded,
                children: (0, r.jsx)(C.NJ, {
                    value: eO,
                    children: (0, r.jsx)(c.UkV, {
                        isShaking: ey,
                        intensity: 1.4,
                        children: (0, r.jsxs)(c.Y0X, {
                            "data-migration-pending": !0,
                            hideShadow: !0,
                            className: et.root,
                            transitionState: eu,
                            "aria-labelledby": eM,
                            parentComponent: "UserProfileModalV2",
                            children: [
                                ex
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
                                        className: ex ? et.disabled : void 0,
                                        user: t,
                                        displayProfile: eT,
                                        themeType: ee.l.MODAL_V2,
                                        children: [
                                            null != eS &&
                                                (0, r.jsx)("div", {
                                                    className: et.backgroundImage,
                                                    style: { backgroundImage: "url(".concat(eS, ")") },
                                                }),
                                            null != eO.interactionType &&
                                                (0, r.jsx)(l.animated.div, {
                                                    style: eP,
                                                    className: et.backdrop,
                                                }),
                                            (0, r.jsx)(J.Z, {
                                                onAutoHide: () => (0, X.L$)(null),
                                                className: et.toast,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: et.profile,
                                                ref: (null == eT ? void 0 : eT.profileEffectId) != null ? ev : void 0,
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
                                                            (0, r.jsx)(N.Z, {
                                                                location: "UserProfileModalV2",
                                                                user: t,
                                                                displayProfile: eT,
                                                                guildId: eo,
                                                                channelId: el,
                                                                themeType: ee.l.MODAL_V2,
                                                            }),
                                                            (0, r.jsx)(F.Z, {
                                                                location: "UserProfileModalV2",
                                                                user: t,
                                                                guildId: eo,
                                                                channelId: el,
                                                                themeType: ee.l.MODAL_V2,
                                                                hasEntered: eu === c.Dvm.ENTERED,
                                                                prompt: ew && t.id === er.id ? eB : null,
                                                                disableToolbar: ex,
                                                            }),
                                                        ],
                                                    }),
                                                    (0, r.jsxs)(c.Ttm, {
                                                        fade: !0,
                                                        className: et.profileBody,
                                                        children: [
                                                            (0, r.jsx)(V.Z, {
                                                                user: t,
                                                                onClose: ep,
                                                                nickname: I.ZP.useName(
                                                                    null == eT ? void 0 : eT.guildId,
                                                                    el,
                                                                    t,
                                                                ),
                                                                nicknameIcons: (0, r.jsx)(D.Z, {
                                                                    size: "sm",
                                                                    userId: t.id,
                                                                }),
                                                                nicknameVariant: "heading-xl/semibold",
                                                                pronouns: null == eT ? void 0 : eT.pronouns,
                                                                tags: (0, r.jsx)(E.Z, {
                                                                    displayProfile: eT,
                                                                    themeType: ee.l.MODAL_V2,
                                                                    onClose: ep,
                                                                }),
                                                            }),
                                                            eC === $.OGo.PENDING_INCOMING &&
                                                                (0, r.jsx)(G.Z.Overlay, {
                                                                    className: et.profileOverlay,
                                                                    children: (0, r.jsx)(R.Z, {
                                                                        user: t,
                                                                        applicationId: eN,
                                                                        guildId:
                                                                            null !=
                                                                            (n = null == eT ? void 0 : eT.guildId)
                                                                                ? n
                                                                                : void 0,
                                                                        channelId: el,
                                                                        className: et.profileBanner,
                                                                    }),
                                                                }),
                                                            eR.map((e) => {
                                                                var n;
                                                                let { applicationId: o } = e;
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
                                                                            channelId: el,
                                                                            isGameRelationship: !0,
                                                                            applicationId: o,
                                                                            className: et.profileBanner,
                                                                        }),
                                                                    },
                                                                    o,
                                                                );
                                                            }),
                                                            t.isProvisional &&
                                                                (0, r.jsx)(G.Z.Overlay, {
                                                                    className: et.profileOverlay,
                                                                    children: (0, r.jsx)(z.Z, {
                                                                        heading: en.intl.string(en.t.Iyka0d),
                                                                        headingVariant: "text-md/semibold",
                                                                        headingIcon: (0, r.jsx)(c.Mgn, {
                                                                            size: "xs",
                                                                            color: "currentColor",
                                                                        }),
                                                                        className: et.profileBanner,
                                                                        children: (0, r.jsx)(j.n, {
                                                                            userId: t.id,
                                                                            variant: "text-sm/normal",
                                                                        }),
                                                                    }),
                                                                }),
                                                            t.id === er.id &&
                                                                (0, r.jsx)(B.Z, {
                                                                    isPremiumUser: (0, O.I5)(er),
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
                                                                    guildId: eo,
                                                                    channelId: el,
                                                                    displayProfile: eT,
                                                                    relationshipType: eC,
                                                                    onClose: ep,
                                                                }),
                                                            }),
                                                            (null == eT ? void 0 : eT.bio) != null &&
                                                                (null == eT ? void 0 : eT.bio) !== "" &&
                                                                !eE &&
                                                                (0, r.jsx)(w.Z, {
                                                                    userBio: eT.bio,
                                                                    setLineClamp: !1,
                                                                }),
                                                            eL.length > 0 &&
                                                                (0, r.jsx)(z.Z, {
                                                                    heading: en.intl.string(en.t["Uv/eT0"]),
                                                                    children: (0, r.jsx)(L.Z, { applicationIds: eL }),
                                                                }),
                                                            (0, r.jsx)(z.Z, {
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
                                                                (0, r.jsx)(z.Z, {
                                                                    heading: en.intl.string(en.t["3fe7U1"]),
                                                                    scrollIntoView: ed === Q.Tb.CONNECTIONS,
                                                                    children: (0, r.jsx)(H.Z, {
                                                                        connections: eU,
                                                                        userId: t.id,
                                                                        className: et.profileAppConnections,
                                                                    }),
                                                                }),
                                                            (0, r.jsx)(z.Z, {
                                                                heading: en.intl.string(en.t["mQKv+v"]),
                                                                scrollIntoView: ed === Q.Tb.NOTE,
                                                                children: (0, r.jsx)(a.Z, {
                                                                    userId: t.id,
                                                                    className: et.profileNote,
                                                                    autoFocus: ed === Q.Tb.NOTE,
                                                                    onUpdate: () =>
                                                                        (0, Z.pQ)(
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
                                                                            })({ action: "SET_NOTE" }, ej),
                                                                        ),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    (null == eT ? void 0 : eT.profileEffectId) != null &&
                                                        (0, r.jsx)(h.Z, {
                                                            profileEffectId: null == eT ? void 0 : eT.profileEffectId,
                                                            isHovering: e_,
                                                        }),
                                                ],
                                            }),
                                            (0, r.jsx)(K.Z, {
                                                user: t,
                                                currentUser: er,
                                                displayProfile: eT,
                                                guildId: eo,
                                                channelId: el,
                                                items: eD,
                                                initialSection: es,
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
