n.d(t, { Z: () => $ }), n(388685);
var r = n(255367),
    l = n(73800),
    o = n(126663),
    i = n(442837),
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
    h = n(680295),
    y = n(189156),
    O = n(699516),
    x = n(246946),
    v = n(5192),
    _ = n(111361),
    I = n(785717),
    P = n(221292),
    E = n(687158),
    Z = n(771362),
    N = n(510659),
    T = n(113557),
    S = n(648052),
    A = n(867176),
    w = n(280885),
    C = n(537006),
    R = n(681837),
    G = n(78806),
    L = n(91433),
    M = n(451834),
    D = n(900927),
    k = n(944043),
    B = n(502762),
    U = n(530),
    F = n(4517),
    V = n(179828),
    Y = n(993160),
    W = n(574887),
    J = n(693408),
    H = n(661462),
    K = n(768111),
    z = n(228168),
    X = n(981631),
    q = n(388032),
    Q = n(517603);
function $(e) {
    var t;
    let {
            user: n,
            currentUser: $,
            guildId: ee,
            channelId: et,
            messageId: en,
            roleId: er,
            sessionId: el,
            initialSection: eo,
            initialSubsection: ei,
            transitionState: ea,
            customStatusPrompt: ec,
            openedAt: es,
            onClose: ed,
            showGuildProfile: eu = !0,
            sourceAnalyticsLocations: ef = [],
            disableActionsForPreview: ep = !1,
        } = e,
        { analyticsLocations: em } = (0, f.ZP)([...ef, u.Z.USER_PROFILE_MODAL_V2]),
        eg = (0, I.ZB)({
            layout: "MODAL_V2",
            userId: n.id,
            sourceSessionId: el,
            guildId: ee,
            channelId: et,
            messageId: en,
            roleId: er,
            showGuildProfile: eu,
        }),
        eb = l.useRef(null),
        ej = (0, s.Z)(eb),
        eh = (0, N.$m)(),
        ey = (0, a.q_F)({
            opacity: +(null != eh.interactionType),
            config: { duration: 150 },
        }),
        eO = l.useMemo(() => (null != ee ? { [ee]: [n.id] } : {}), [ee, n.id]);
    (0, d.$)(eO);
    let ex = (0, E.ZP)(n.id, eu ? ee : void 0),
        ev = v.ZP.useName(null == ex ? void 0 : ex.guildId, et, n),
        { relationshipType: e_, originApplicationId: eI } = (0, i.cj)([O.Z], () => ({
            relationshipType: O.Z.getRelationshipType(n.id),
            originApplicationId: O.Z.getOriginApplicationId(n.id),
        })),
        eP = (0, i.e7)([x.Z], () => x.Z.hidePersonalInformation),
        eE =
            null == ex
                ? void 0
                : ex.getBannerURL({
                      canAnimate: !1,
                      size: 1024,
                  }),
        eZ = (0, m.p)({ location: "UserProfileModalV2" }),
        eN = l.useMemo(() => (null != ec ? ec : (0, g.Z)()), [ec]),
        eT = (0, K.Z)({
            user: n,
            currentUser: $,
        }),
        eS = (0, j.Y)({ userId: n.id }),
        eA = (0, b.vh)(n.id),
        ew = (0, Z.Z)(n.id),
        eC = (0, p.Dt)(),
        eR = q.intl.format(q.t.KRe1Fh, { name: ev });
    return (0, r.jsx)(f.Gt, {
        value: em,
        children: (0, r.jsx)(I.Mt, {
            value: eg,
            openedAt: es,
            fetchStartedAt: null == ex ? void 0 : ex.fetchStartedAt,
            fetchEndedAt: null == ex ? void 0 : ex.fetchEndedAt,
            isLoaded: null == ex ? void 0 : ex.isLoaded,
            children: (0, r.jsx)(N.NJ, {
                value: eh,
                children: (0, r.jsxs)(a.Y0X, {
                    "data-migration-pending": !0,
                    hideShadow: !0,
                    className: Q.root,
                    transitionState: ea,
                    "aria-labelledby": eC,
                    parentComponent: "UserProfileModalV2",
                    children: [
                        ep
                            ? (0, r.jsxs)("div", {
                                  className: Q.previewBar,
                                  children: [
                                      (0, r.jsxs)(a.X6q, {
                                          id: eC,
                                          variant: "heading-sm/normal",
                                          color: "text-primary",
                                          children: [
                                              (0, r.jsx)(a.nn4, {
                                                  children: "".concat(q.intl.string(q.t.apViam), ": ").concat(eR),
                                              }),
                                              (0, r.jsx)("span", {
                                                  "aria-hidden": !0,
                                                  children: q.intl.string(q.t.apViam),
                                              }),
                                          ],
                                      }),
                                      (0, r.jsx)(a.zxk, {
                                          size: "sm",
                                          variant: "secondary",
                                          text: q.intl.string(q.t.ojM1xM),
                                          onClick: ed,
                                          "aria-label": q.intl.string(q.t.cpT0Cg),
                                      }),
                                  ],
                              })
                            : (0, r.jsx)(a.nn4, {
                                  children: (0, r.jsx)(a.H, {
                                      id: eC,
                                      children: eR,
                                  }),
                              }),
                        (0, r.jsx)(a.y5t, {
                            children: (0, r.jsxs)(B.Z, {
                                className: ep ? Q.disabled : void 0,
                                user: n,
                                displayProfile: ex,
                                themeType: z.lY.MODAL_V2,
                                children: [
                                    null != eE &&
                                        (0, r.jsx)("div", {
                                            className: Q.backgroundImage,
                                            style: { backgroundImage: "url(".concat(eE, ")") },
                                        }),
                                    null != eh.interactionType &&
                                        (0, r.jsx)(o.animated.div, {
                                            style: ey,
                                            className: Q.backdrop,
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: Q.profile,
                                        ref: (null == ex ? void 0 : ex.profileEffectId) != null ? eb : void 0,
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: Q.profileHeader,
                                                children: [
                                                    (0, r.jsx)(A.Z, {
                                                        user: n,
                                                        displayProfile: ex,
                                                        themeType: z.lY.MODAL_V2,
                                                    }),
                                                    (0, r.jsx)(M.Z, {
                                                        userId: n.id,
                                                        onClose: ed,
                                                        className: Q.toast,
                                                    }),
                                                    (0, r.jsx)(T.Z, {
                                                        location: "UserProfileModalV2",
                                                        user: n,
                                                        displayProfile: ex,
                                                        guildId: ee,
                                                        channelId: et,
                                                        themeType: z.lY.MODAL_V2,
                                                    }),
                                                    (0, r.jsx)(F.Z, {
                                                        location: "UserProfileModalV2",
                                                        user: n,
                                                        guildId: ee,
                                                        channelId: et,
                                                        themeType: z.lY.MODAL_V2,
                                                        hasEntered: ea === a.Dvm.ENTERED,
                                                        prompt: eZ && n.id === $.id ? eN : null,
                                                        disableToolbar: ep,
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)(a.Ttm, {
                                                fade: !0,
                                                className: Q.profileBody,
                                                children: [
                                                    (0, r.jsx)(U.Z, {
                                                        user: n,
                                                        onClose: ed,
                                                        nickname: v.ZP.useName(null == ex ? void 0 : ex.guildId, et, n),
                                                        nicknameIcons: (0, r.jsx)(R.Z, {
                                                            size: "sm",
                                                            userId: n.id,
                                                        }),
                                                        nicknameVariant: "heading-xl/semibold",
                                                        pronouns: null == ex ? void 0 : ex.pronouns,
                                                        tags: (0, r.jsx)(S.Z, {
                                                            displayProfile: ex,
                                                            themeType: z.lY.MODAL_V2,
                                                            onClose: ed,
                                                        }),
                                                    }),
                                                    e_ === X.OGo.PENDING_INCOMING &&
                                                        (0, r.jsx)(B.Z.Overlay, {
                                                            className: Q.profileOverlay,
                                                            children: (0, r.jsx)(L.Z, {
                                                                user: n,
                                                                applicationId: eI,
                                                                guildId:
                                                                    null != (t = null == ex ? void 0 : ex.guildId)
                                                                        ? t
                                                                        : void 0,
                                                                channelId: et,
                                                                className: Q.profileBanner,
                                                            }),
                                                        }),
                                                    eA.map((e) => {
                                                        var t;
                                                        let { applicationId: l } = e;
                                                        return (0, r.jsx)(
                                                            B.Z.Overlay,
                                                            {
                                                                className: Q.profileOverlay,
                                                                children: (0, r.jsx)(L.Z, {
                                                                    user: n,
                                                                    guildId:
                                                                        null != (t = null == ex ? void 0 : ex.guildId)
                                                                            ? t
                                                                            : void 0,
                                                                    channelId: et,
                                                                    isGameRelationship: !0,
                                                                    applicationId: l,
                                                                    className: Q.profileBanner,
                                                                }),
                                                            },
                                                            l,
                                                        );
                                                    }),
                                                    n.isProvisional &&
                                                        (0, r.jsx)(B.Z.Overlay, {
                                                            className: Q.profileOverlay,
                                                            children: (0, r.jsx)(J.Z, {
                                                                heading: q.intl.string(q.t.Iyka0d),
                                                                headingVariant: "text-md/semibold",
                                                                headingIcon: (0, r.jsx)(a.Mgn, {
                                                                    size: "xs",
                                                                    color: "currentColor",
                                                                }),
                                                                className: Q.profileBanner,
                                                                children: (0, r.jsx)(y.n, {
                                                                    userId: n.id,
                                                                    variant: "text-sm/normal",
                                                                }),
                                                            }),
                                                        }),
                                                    n.id === $.id &&
                                                        (0, r.jsx)(C.Z, {
                                                            isPremiumUser: (0, _.I5)($),
                                                            onInteraction: ed,
                                                        }),
                                                    (0, r.jsx)(k.Z, {
                                                        user: n,
                                                        className: Q.profileBanner,
                                                    }),
                                                    (0, r.jsx)("div", {
                                                        className: Q.profileButtons,
                                                        children: (0, r.jsx)(Y.Z, {
                                                            user: n,
                                                            currentUser: $,
                                                            guildId: ee,
                                                            channelId: et,
                                                            displayProfile: ex,
                                                            relationshipType: e_,
                                                            onClose: ed,
                                                        }),
                                                    }),
                                                    (null == ex ? void 0 : ex.bio) != null &&
                                                        (null == ex ? void 0 : ex.bio) !== "" &&
                                                        !eP &&
                                                        (0, r.jsx)(w.Z, {
                                                            userBio: ex.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                    eS.length > 0 &&
                                                        (0, r.jsx)(J.Z, {
                                                            heading: q.intl.string(q.t["Uv/eT0"]),
                                                            children: (0, r.jsx)(G.Z, { applicationIds: eS }),
                                                        }),
                                                    (0, r.jsx)(J.Z, {
                                                        heading: q.intl.string(q.t.a6XYDw),
                                                        children: (0, r.jsx)(D.Z, {
                                                            userId: n.id,
                                                            guildId: null == ex ? void 0 : ex.guildId,
                                                            tooltipDelay: z.vB,
                                                        }),
                                                    }),
                                                    (null == ex ? void 0 : ex.guildId) != null &&
                                                        (0, r.jsx)(V.Z, {
                                                            user: n,
                                                            currentUser: $,
                                                            guildId: ex.guildId,
                                                            className: Q.profileRolesSection,
                                                            headingVariant: "text-xs/medium",
                                                            headingColor: "currentColor",
                                                            scrollIntoView: ei === z.Tb.ROLES,
                                                        }),
                                                    ew.length > 0 &&
                                                        (0, r.jsx)(J.Z, {
                                                            heading: q.intl.string(q.t["3fe7U1"]),
                                                            scrollIntoView: ei === z.Tb.CONNECTIONS,
                                                            children: (0, r.jsx)(W.Z, {
                                                                connections: ew,
                                                                userId: n.id,
                                                                className: Q.profileAppConnections,
                                                            }),
                                                        }),
                                                    (0, r.jsx)(J.Z, {
                                                        heading: q.intl.string(q.t["mQKv+v"]),
                                                        scrollIntoView: ei === z.Tb.NOTE,
                                                        children: (0, r.jsx)(c.Z, {
                                                            userId: n.id,
                                                            className: Q.profileNote,
                                                            autoFocus: ei === z.Tb.NOTE,
                                                            onUpdate: () =>
                                                                (0, P.pQ)(
                                                                    (function (e) {
                                                                        for (var t = 1; t < arguments.length; t++) {
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
                                                                                                      enumerable: !0,
                                                                                                      configurable: !0,
                                                                                                      writable: !0,
                                                                                                  },
                                                                                              )
                                                                                            : (e[t] = r);
                                                                                });
                                                                        }
                                                                        return e;
                                                                    })({ action: "SET_NOTE" }, eg),
                                                                ),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (null == ex ? void 0 : ex.profileEffectId) != null &&
                                                (0, r.jsx)(h.Z, {
                                                    profileEffectId: null == ex ? void 0 : ex.profileEffectId,
                                                    isHovering: ej,
                                                }),
                                        ],
                                    }),
                                    (0, r.jsx)(H.Z, {
                                        user: n,
                                        currentUser: $,
                                        displayProfile: ex,
                                        guildId: ee,
                                        channelId: et,
                                        items: eT,
                                        initialSection: eo,
                                        initialSubsection: ei,
                                        onClose: ed,
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
