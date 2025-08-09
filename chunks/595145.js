n.d(t, { Z: () => ee }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(126663),
    o = n(442837),
    a = n(481060),
    c = n(666520),
    s = n(727637),
    d = n(616780),
    u = n(100527),
    f = n(906732),
    m = n(313201),
    p = n(368326),
    g = n(429467),
    b = n(320582),
    j = n(246016),
    h = n(680295),
    x = n(189156),
    y = n(699516),
    v = n(246946),
    O = n(585483),
    _ = n(5192),
    I = n(111361),
    P = n(785717),
    Z = n(221292),
    T = n(687158),
    N = n(771362),
    E = n(510659),
    S = n(113557),
    A = n(648052),
    w = n(867176),
    C = n(280885),
    L = n(537006),
    k = n(681837),
    D = n(78806),
    G = n(91433),
    R = n(451834),
    M = n(900927),
    B = n(944043),
    U = n(502762),
    F = n(530),
    V = n(4517),
    Y = n(179828),
    W = n(993160),
    H = n(574887),
    z = n(693408),
    K = n(661462),
    J = n(768111),
    X = n(228168),
    q = n(981631),
    Q = n(388032),
    $ = n(517603);
function ee(e) {
    var t;
    let {
            user: n,
            currentUser: ee,
            guildId: et,
            channelId: en,
            messageId: er,
            roleId: el,
            sessionId: ei,
            initialSection: eo,
            initialSubsection: ea,
            transitionState: ec,
            customStatusPrompt: es,
            openedAt: ed,
            onClose: eu,
            showGuildProfile: ef = !0,
            sourceAnalyticsLocations: em = [],
            disableActionsForPreview: ep = !1,
        } = e,
        { analyticsLocations: eg } = (0, f.ZP)([...em, u.Z.USER_PROFILE_MODAL_V2]),
        eb = (0, P.ZB)({
            layout: "MODAL_V2",
            userId: n.id,
            sourceSessionId: ei,
            guildId: et,
            channelId: en,
            messageId: er,
            roleId: el,
            showGuildProfile: ef,
        }),
        ej = l.useRef(null),
        eh = (0, s.Z)(ej),
        [ex, ey] = l.useState(!1),
        ev = (0, E.$m)(),
        eO = (0, a.q_F)({
            opacity: +(null != ev.interactionType),
            config: { duration: 150 },
        }),
        e_ = l.useMemo(() => (null != et ? { [et]: [n.id] } : {}), [et, n.id]);
    (0, d.$)(e_);
    let eI = (0, T.ZP)(n.id, ef ? et : void 0),
        eP = _.ZP.useName(null == eI ? void 0 : eI.guildId, en, n),
        { relationshipType: eZ, originApplicationId: eT } = (0, o.cj)([y.Z], () => ({
            relationshipType: y.Z.getRelationshipType(n.id),
            originApplicationId: y.Z.getOriginApplicationId(n.id),
        })),
        eN = (0, o.e7)([v.Z], () => v.Z.hidePersonalInformation),
        eE =
            null == eI
                ? void 0
                : eI.getBannerURL({
                      canAnimate: !1,
                      size: 1024,
                  }),
        eS = (0, p.p)({ location: "UserProfileModalV2" }),
        eA = l.useMemo(() => (null != es ? es : (0, g.Z)()), [es]),
        ew = (0, J.Z)({
            user: n,
            currentUser: ee,
        }),
        eC = (0, j.Y)({ userId: n.id }),
        eL = (0, b.vh)(n.id),
        ek = (0, N.Z)(n.id),
        eD = (0, m.Dt)(),
        eG = Q.intl.format(Q.t.KRe1Fh, { name: eP });
    return (
        l.useEffect(() => {
            let e = () => {
                ey(!0),
                    setTimeout(() => {
                        ey(!1);
                    }, 1000);
            };
            return (
                O.S.subscribe(q.CkL.SHAKE_PROFILE_MODAL, e),
                () => {
                    O.S.unsubscribe(q.CkL.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, r.jsx)(f.Gt, {
            value: eg,
            children: (0, r.jsx)(P.Mt, {
                value: eb,
                openedAt: ed,
                fetchStartedAt: null == eI ? void 0 : eI.fetchStartedAt,
                fetchEndedAt: null == eI ? void 0 : eI.fetchEndedAt,
                isLoaded: null == eI ? void 0 : eI.isLoaded,
                children: (0, r.jsx)(E.NJ, {
                    value: ev,
                    children: (0, r.jsx)(a.UkV, {
                        isShaking: ex,
                        intensity: 1.4,
                        children: (0, r.jsxs)(a.Y0X, {
                            "data-migration-pending": !0,
                            hideShadow: !0,
                            className: $.root,
                            transitionState: ec,
                            "aria-labelledby": eD,
                            parentComponent: "UserProfileModalV2",
                            children: [
                                ep
                                    ? (0, r.jsxs)("div", {
                                          className: $.previewBar,
                                          children: [
                                              (0, r.jsxs)(a.X6q, {
                                                  id: eD,
                                                  variant: "heading-sm/normal",
                                                  color: "text-primary",
                                                  children: [
                                                      (0, r.jsx)(a.nn4, {
                                                          children: ""
                                                              .concat(Q.intl.string(Q.t.apViam), ": ")
                                                              .concat(eG),
                                                      }),
                                                      (0, r.jsx)("span", {
                                                          "aria-hidden": !0,
                                                          children: Q.intl.string(Q.t.apViam),
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)(a.zxk, {
                                                  size: "sm",
                                                  variant: "secondary",
                                                  text: Q.intl.string(Q.t.ojM1xM),
                                                  onClick: eu,
                                                  "aria-label": Q.intl.string(Q.t.cpT0Cg),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(a.nn4, {
                                          children: (0, r.jsx)(a.H, {
                                              id: eD,
                                              children: eG,
                                          }),
                                      }),
                                (0, r.jsx)(a.y5t, {
                                    children: (0, r.jsxs)(U.Z, {
                                        className: ep ? $.disabled : void 0,
                                        user: n,
                                        displayProfile: eI,
                                        themeType: X.lY.MODAL_V2,
                                        children: [
                                            null != eE &&
                                                (0, r.jsx)("div", {
                                                    className: $.backgroundImage,
                                                    style: { backgroundImage: "url(".concat(eE, ")") },
                                                }),
                                            null != ev.interactionType &&
                                                (0, r.jsx)(i.animated.div, {
                                                    style: eO,
                                                    className: $.backdrop,
                                                }),
                                            (0, r.jsxs)("div", {
                                                className: $.profile,
                                                ref: (null == eI ? void 0 : eI.profileEffectId) != null ? ej : void 0,
                                                children: [
                                                    (0, r.jsxs)("div", {
                                                        className: $.profileHeader,
                                                        children: [
                                                            (0, r.jsx)(w.Z, {
                                                                user: n,
                                                                displayProfile: eI,
                                                                themeType: X.lY.MODAL_V2,
                                                            }),
                                                            (0, r.jsx)(R.Z, {
                                                                userId: n.id,
                                                                onClose: eu,
                                                                className: $.toast,
                                                            }),
                                                            (0, r.jsx)(S.Z, {
                                                                location: "UserProfileModalV2",
                                                                user: n,
                                                                displayProfile: eI,
                                                                guildId: et,
                                                                channelId: en,
                                                                themeType: X.lY.MODAL_V2,
                                                            }),
                                                            (0, r.jsx)(V.Z, {
                                                                location: "UserProfileModalV2",
                                                                user: n,
                                                                guildId: et,
                                                                channelId: en,
                                                                themeType: X.lY.MODAL_V2,
                                                                hasEntered: ec === a.Dvm.ENTERED,
                                                                prompt: eS && n.id === ee.id ? eA : null,
                                                                disableToolbar: ep,
                                                            }),
                                                        ],
                                                    }),
                                                    (0, r.jsxs)(a.Ttm, {
                                                        fade: !0,
                                                        className: $.profileBody,
                                                        children: [
                                                            (0, r.jsx)(F.Z, {
                                                                user: n,
                                                                onClose: eu,
                                                                nickname: _.ZP.useName(
                                                                    null == eI ? void 0 : eI.guildId,
                                                                    en,
                                                                    n,
                                                                ),
                                                                nicknameIcons: (0, r.jsx)(k.Z, {
                                                                    size: "sm",
                                                                    userId: n.id,
                                                                }),
                                                                nicknameVariant: "heading-xl/semibold",
                                                                pronouns: null == eI ? void 0 : eI.pronouns,
                                                                tags: (0, r.jsx)(A.Z, {
                                                                    displayProfile: eI,
                                                                    themeType: X.lY.MODAL_V2,
                                                                    onClose: eu,
                                                                }),
                                                            }),
                                                            eZ === q.OGo.PENDING_INCOMING &&
                                                                (0, r.jsx)(U.Z.Overlay, {
                                                                    className: $.profileOverlay,
                                                                    children: (0, r.jsx)(G.Z, {
                                                                        user: n,
                                                                        applicationId: eT,
                                                                        guildId:
                                                                            null !=
                                                                            (t = null == eI ? void 0 : eI.guildId)
                                                                                ? t
                                                                                : void 0,
                                                                        channelId: en,
                                                                        className: $.profileBanner,
                                                                    }),
                                                                }),
                                                            eL.map((e) => {
                                                                var t;
                                                                let { applicationId: l } = e;
                                                                return (0, r.jsx)(
                                                                    U.Z.Overlay,
                                                                    {
                                                                        className: $.profileOverlay,
                                                                        children: (0, r.jsx)(G.Z, {
                                                                            user: n,
                                                                            guildId:
                                                                                null !=
                                                                                (t = null == eI ? void 0 : eI.guildId)
                                                                                    ? t
                                                                                    : void 0,
                                                                            channelId: en,
                                                                            isGameRelationship: !0,
                                                                            applicationId: l,
                                                                            className: $.profileBanner,
                                                                        }),
                                                                    },
                                                                    l,
                                                                );
                                                            }),
                                                            n.isProvisional &&
                                                                (0, r.jsx)(U.Z.Overlay, {
                                                                    className: $.profileOverlay,
                                                                    children: (0, r.jsx)(z.Z, {
                                                                        heading: Q.intl.string(Q.t.Iyka0d),
                                                                        headingVariant: "text-md/semibold",
                                                                        headingIcon: (0, r.jsx)(a.Mgn, {
                                                                            size: "xs",
                                                                            color: "currentColor",
                                                                        }),
                                                                        className: $.profileBanner,
                                                                        children: (0, r.jsx)(x.n, {
                                                                            userId: n.id,
                                                                            variant: "text-sm/normal",
                                                                        }),
                                                                    }),
                                                                }),
                                                            n.id === ee.id &&
                                                                (0, r.jsx)(L.Z, {
                                                                    isPremiumUser: (0, I.I5)(ee),
                                                                    onInteraction: eu,
                                                                }),
                                                            (0, r.jsx)(B.Z, {
                                                                user: n,
                                                                className: $.profileBanner,
                                                            }),
                                                            (0, r.jsx)("div", {
                                                                className: $.profileButtons,
                                                                children: (0, r.jsx)(W.Z, {
                                                                    user: n,
                                                                    currentUser: ee,
                                                                    guildId: et,
                                                                    channelId: en,
                                                                    displayProfile: eI,
                                                                    relationshipType: eZ,
                                                                    onClose: eu,
                                                                }),
                                                            }),
                                                            (null == eI ? void 0 : eI.bio) != null &&
                                                                (null == eI ? void 0 : eI.bio) !== "" &&
                                                                !eN &&
                                                                (0, r.jsx)(C.Z, {
                                                                    userBio: eI.bio,
                                                                    setLineClamp: !1,
                                                                }),
                                                            eC.length > 0 &&
                                                                (0, r.jsx)(z.Z, {
                                                                    heading: Q.intl.string(Q.t["Uv/eT0"]),
                                                                    children: (0, r.jsx)(D.Z, { applicationIds: eC }),
                                                                }),
                                                            (0, r.jsx)(z.Z, {
                                                                heading: Q.intl.string(Q.t.a6XYDw),
                                                                children: (0, r.jsx)(M.Z, {
                                                                    userId: n.id,
                                                                    guildId: null == eI ? void 0 : eI.guildId,
                                                                    tooltipDelay: X.vB,
                                                                }),
                                                            }),
                                                            (null == eI ? void 0 : eI.guildId) != null &&
                                                                (0, r.jsx)(Y.Z, {
                                                                    user: n,
                                                                    currentUser: ee,
                                                                    guildId: eI.guildId,
                                                                    className: $.profileRolesSection,
                                                                    headingVariant: "text-xs/medium",
                                                                    headingColor: "currentColor",
                                                                    scrollIntoView: ea === X.Tb.ROLES,
                                                                }),
                                                            ek.length > 0 &&
                                                                (0, r.jsx)(z.Z, {
                                                                    heading: Q.intl.string(Q.t["3fe7U1"]),
                                                                    scrollIntoView: ea === X.Tb.CONNECTIONS,
                                                                    children: (0, r.jsx)(H.Z, {
                                                                        connections: ek,
                                                                        userId: n.id,
                                                                        className: $.profileAppConnections,
                                                                    }),
                                                                }),
                                                            (0, r.jsx)(z.Z, {
                                                                heading: Q.intl.string(Q.t["mQKv+v"]),
                                                                scrollIntoView: ea === X.Tb.NOTE,
                                                                children: (0, r.jsx)(c.Z, {
                                                                    userId: n.id,
                                                                    className: $.profileNote,
                                                                    autoFocus: ea === X.Tb.NOTE,
                                                                    onUpdate: () =>
                                                                        (0, Z.pQ)(
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
                                                                            })({ action: "SET_NOTE" }, eb),
                                                                        ),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    (null == eI ? void 0 : eI.profileEffectId) != null &&
                                                        (0, r.jsx)(h.Z, {
                                                            profileEffectId: null == eI ? void 0 : eI.profileEffectId,
                                                            isHovering: eh,
                                                        }),
                                                ],
                                            }),
                                            (0, r.jsx)(K.Z, {
                                                user: n,
                                                currentUser: ee,
                                                displayProfile: eI,
                                                guildId: et,
                                                channelId: en,
                                                items: ew,
                                                initialSection: eo,
                                                initialSubsection: ea,
                                                onClose: eu,
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
