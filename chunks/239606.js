t.d(n, { A: () => ew });
var l = t(627968),
    i = t(64700),
    r = t(503698),
    a = t.n(r),
    s = t(311907),
    o = t(778712),
    d = t(866323),
    u = t(573613),
    c = t(695366),
    g = t(935462),
    A = t(140735),
    m = t(707554),
    f = t(231723),
    p = t(241524),
    x = t(770178),
    h = t(80682),
    v = t(793574),
    j = t(688810),
    I = t(351966),
    b = t(361628),
    C = t(744808),
    N = t(915089),
    y = t(713517),
    E = t(645507),
    P = t(922590),
    R = t(821269),
    O = t(437774),
    T = t(594832),
    _ = t(994500),
    S = t(351906),
    D = t(562153),
    k = t(474090),
    L = t(183555),
    M = t(622543),
    G = t(591179),
    w = t(950191),
    U = t(101928),
    F = t(837529),
    V = t(346713),
    B = t(672691),
    W = t(195898),
    z = t(486678),
    H = t(567915),
    Y = t(425815),
    K = t(716804),
    X = t(679492),
    q = t(718019),
    $ = t(31432),
    J = t(915614),
    Z = t(389996),
    Q = t(223330),
    ee = t(559506),
    en = t(361311),
    et = t(886891),
    el = t(439053),
    ei = t(743987),
    er = t(312381),
    ea = t(501193),
    es = t(383448),
    eo = t(946356),
    ed = t(810396),
    eu = t(159218),
    ec = t(280645),
    eg = t(291335),
    eA = t(807651),
    em = t(463156),
    ef = t(510059),
    ep = t(546136),
    ex = t(982599),
    eh = t(399122),
    ev = t(358826),
    ej = t(83013),
    eI = t(878210),
    eb = t(515054),
    eC = t(513265),
    eN = t(828822),
    ey = t(629747),
    eE = t(160983),
    eP = t(518477),
    eR = t(652215),
    eO = t(996988),
    eT = t(985018),
    e_ = t(645625);
let eS = (e) => e * (2 - e),
    eD = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } };
function ek(e) {
    let { displayProfile: n, pendingBanner: t } = e,
        r = (0, F.Nx)(),
        [a, s] = i.useState(void 0);
    if (
        (i.useEffect(() => {
            if (null == t || r) return;
            let e = !1;
            return (
                (0, Y.t)(t, 1024)
                    .then((n) => {
                        e || s(n);
                    })
                    .catch(() => {
                        e || s(t);
                    }),
                () => {
                    (e = !0), s(void 0);
                }
            );
        }, [r, t]),
        r)
    )
        return null;
    let o = null != t ? (a ?? null) : n?.getPreviewBanner(t, !1, 1024);
    return null == o
        ? null
        : (0, l.jsx)("div", { className: e_.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function eL(e) {
    let { displayProfile: n, profileEffectOverride: t, isHovering: i } = e,
        r = void 0 !== t ? t : n?.profileEffect;
    return null == r ? null : (0, l.jsx)(I.A, { skuId: r.skuId, isHovering: i });
}
function eM(e) {
    let {
            user: n,
            currentUser: t,
            guildId: r,
            originGuildId: o,
            channelId: d,
            displayProfile: g,
            nickname: A,
            hasEntered: m,
            customStatusPrompt: f,
            onClose: p,
            avatarDecorationOverride: h,
            avatarOverride: v,
            bannerOverride: j,
            profileEffectOverride: I,
            allowEditing: b = !1,
            isLoading: C = !1,
        } = e,
        N = n.id === t.id,
        T = i.useRef(null),
        { isHoveringOrFocusing: D } = (0, y.A)(T),
        [L, M] = i.useState(),
        G = i.useCallback((e) => {
            let n = e.contentRect.width;
            n <= 350 ? M("compact-xs") : n <= 380 ? M("compact-sm") : M(void 0);
        }, []);
    (0, x.g)(T, G, [], { fireOnMount: !0 });
    let w = null != L ? eD[L] : void 0,
        U = i.useMemo(() => f ?? (0, E.A)(), [f]),
        { relationshipType: F, originApplicationId: W } = (0, s.cf)([_.A], () => ({
            relationshipType: _.A.getRelationshipType(n.id),
            originApplicationId: _.A.getOriginApplicationId(n.id),
        })),
        z = (0, s.bG)([S.A], () => S.A.hidePersonalInformation),
        H = (0, R.q)({ userId: n.id }),
        Y = (0, P.fi)(n.id),
        { appIdentities: K, connections: X } = (0, B.A)(n.id),
        er = (0, V.A)(n.id),
        em = b ? ey.A : J.A,
        ep = b ? eN.A : q.A;
    return (0, l.jsxs)("main", {
        className: a()(e_.profile, null != L && e_[L]),
        ref: T,
        "aria-busy": C,
        children: [
            (0, l.jsxs)("div", {
                className: e_.profileHeader,
                children: [
                    (0, l.jsx)(em, {
                        user: n,
                        displayProfile: g,
                        guildId: r,
                        themeType: eO.d.MODAL_V2,
                        specOverrides: w,
                        pendingBanner: j,
                    }),
                    (0, l.jsx)(el.A, { userId: n.id, onClose: p, className: e_.interactionToast }),
                    (0, l.jsx)(ep, {
                        user: n,
                        displayProfile: g,
                        guildId: r,
                        channelId: d,
                        themeType: eO.d.MODAL_V2,
                        specOverrides: w,
                        avatarDecorationOverride: h,
                        avatarOverride: v,
                    }),
                    (0, l.jsx)(eu.A, {
                        user: n,
                        guildId: r,
                        channelId: d,
                        themeType: eO.d.MODAL_V2,
                        hasEntered: m,
                        prompt: N ? U : null,
                    }),
                ],
            }),
            (0, l.jsxs)(u.Ip, {
                fade: !0,
                className: e_.profileBody,
                children: [
                    (0, l.jsx)(ee.A, { userId: n.id }),
                    (0, l.jsx)(ed.A, {
                        user: n,
                        guildId: g?.guildId ?? void 0,
                        onClose: p,
                        nickname: A,
                        nicknameVariant: "heading-xl/semibold",
                        pronouns: g?.pronouns,
                        tags: (0, l.jsx)($.A, { displayProfile: g, themeType: eO.d.MODAL_V2, onClose: p }),
                    }),
                    F === eR.eA$.PENDING_INCOMING &&
                        (0, l.jsx)(eo.A.Overlay, {
                            className: e_.profileOverlay,
                            children: (0, l.jsx)(et.A, {
                                user: n,
                                applicationId: W,
                                guildId: g?.guildId ?? void 0,
                                channelId: d,
                                className: e_.profileBanner,
                            }),
                        }),
                    Y.map((e) => {
                        let { applicationId: t } = e;
                        return (0, l.jsx)(
                            eo.A.Overlay,
                            {
                                className: e_.profileOverlay,
                                children: (0, l.jsx)(et.A, {
                                    user: n,
                                    guildId: g?.guildId ?? void 0,
                                    channelId: d,
                                    isGameRelationship: !0,
                                    applicationId: t,
                                    className: e_.profileBanner,
                                }),
                            },
                            t,
                        );
                    }),
                    n.isProvisional &&
                        (0, l.jsx)(eo.A.Overlay, {
                            className: e_.profileOverlay,
                            children: (0, l.jsx)(ej.A, {
                                heading: eT.intl.string(eT.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, l.jsx)(c.E, { size: "xs", color: "currentColor" }),
                                className: e_.profileBanner,
                                children: (0, l.jsx)(O.T, { userId: n.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, l.jsx)(es.A, { user: n, className: e_.profileBanner }),
                    g?.private &&
                        (0, l.jsx)(eo.A.Overlay, {
                            className: e_.profileOverlay,
                            children: (0, l.jsx)(ea.A, { username: A }),
                        }),
                    (0, l.jsx)("div", {
                        className: e_.profileButtons,
                        children: (0, l.jsx)(eA.A, {
                            user: n,
                            currentUser: t,
                            guildId: r,
                            originGuildId: o,
                            channelId: d,
                            displayProfile: g,
                            relationshipType: F,
                            onClose: p,
                        }),
                    }),
                    N && (0, l.jsx)(Q.A, { isPremiumUser: (0, k.ki)(t), onInteraction: p }),
                    !z && (0, l.jsx)(Z.E, { userBio: g?.bio, setLineClamp: !1 }),
                    H.length > 0 &&
                        (0, l.jsx)(ej.A, {
                            heading: eT.intl.string(eT.t["Uv/eTx"]),
                            children: (0, l.jsx)(en.A, { applicationIds: H }),
                        }),
                    (0, l.jsx)(ej.A, {
                        heading: eT.intl.string(eT.t.a6XYD9),
                        children: (0, l.jsx)(ei.A, { userId: n.id, guildId: g?.guildId, tooltipDelay: eP.In }),
                    }),
                    g?.guildId != null &&
                        (0, l.jsx)(ec.A, {
                            userId: n.id,
                            guildId: g.guildId,
                            className: e_.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "currentColor",
                        }),
                    (X.length > 0 || K.length > 0) &&
                        (0, l.jsx)(ej.A, {
                            heading: eT.intl.string(eT.t["3fe7U5"]),
                            scrollTargetId: eP.bk.CONNECTIONS,
                            children: (0, l.jsx)(ef.A, {
                                applicationIdentities: K,
                                connections: X,
                                userId: n.id,
                                className: e_.profileAppConnections,
                            }),
                        }),
                    er.length > 0 &&
                        (0, l.jsx)(ej.A, {
                            heading: eT.intl.string(eT.t.PHjkRE),
                            scrollTargetId: eP.bk.APPS,
                            children: (0, l.jsx)(eg.A, {
                                applicationRoleConnections: er,
                                onClose: p,
                                className: e_.profileAppConnections,
                            }),
                        }),
                    (0, l.jsx)(eh.A, { userId: n.id }),
                ],
            }),
            (0, l.jsx)(eL, { displayProfile: g, profileEffectOverride: I, isHovering: D }),
        ],
    });
}
function eG(e) {
    let { user: n, displayProfile: t, pendingThemeColors: i, children: r } = e,
        {
            theme: a,
            primaryColor: s,
            secondaryColor: o,
        } = (0, U.A)({ user: n, displayProfile: t, pendingThemeColors: i }),
        { profileThemeStyle: d, profileThemeClassName: u } = (0, W.A)({
            theme: a,
            themeType: null,
            primaryColor: s,
            secondaryColor: o,
        });
    return (0, l.jsx)("div", { className: u, style: d, children: r });
}
function ew(e) {
    let {
            user: n,
            currentUser: t,
            guildId: r,
            originGuildId: o,
            channelId: u,
            messageId: c,
            roleId: x,
            sessionId: I,
            initialTabSection: y,
            initialScrollTarget: E,
            transitionState: P,
            customStatusPrompt: R,
            openedAt: O,
            onClose: _,
            sourceAnalyticsLocations: S = [],
            themeContainerClassName: k,
        } = e,
        U = n.id === t.id,
        {
            guildId: F,
            pendingGuildId: V,
            isLoading: B,
            selectUserProfile: W,
        } = (0, H.A)({ userId: n.id, initialGuildId: r }),
        Y = i.useMemo(() => (null != F ? { [F]: [n.id] } : {}), [F, n.id]);
    (0, h.Eq)(Y, "UserProfileModalV2");
    let q = (0, w.Ay)(n.id, F),
        $ = (0, b.A)(q?.profileFrame?.skuId, "UserProfileModalV2"),
        J = (0, G.X)("UserProfileModalV2"),
        Z = U && J,
        {
            pendingThemeColors: Q,
            avatarDecorationOverride: ee,
            avatarOverride: en,
            bannerOverride: et,
            profileEffectOverride: el,
        } = (0, z.A)({ user: n, allowEditingInModal: Z, guildId: F }),
        {
            isExpanded: ei,
            isAnimating: ea,
            transition: es,
            canShowExpand: ed,
            handleExpand: eu,
            handleCollapse: ec,
            refs: { expandIconButtonRef: eg, expandTabButtonRef: eA, collapseButtonRef: ef },
        } = (function () {
            let [e, n] = i.useState(() => window.innerWidth > 928),
                [t, l] = i.useState(!1),
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: eS },
                    onRest: () => l(!1),
                }),
                a = (0, p.A)("(min-width: 929px) and (min-height: 550px)"),
                s = i.useRef(null),
                o = i.useRef(null),
                u = i.useRef(null),
                c = i.useRef(null),
                g = i.useCallback(() => {
                    (c.current = "collapse"), l(!0), n(!0);
                }, []),
                A = i.useCallback(() => {
                    (c.current = "expand"), l(!0), n(!1);
                }, []);
            return (
                i.useEffect(() => {
                    if (!t) {
                        if ("collapse" === c.current && e) (c.current = null), u.current?.focus();
                        else if ("expand" === c.current && !e) {
                            c.current = null;
                            let e = a ? o.current : s.current;
                            e?.focus();
                        }
                    }
                }, [e, t, a]),
                {
                    isExpanded: e,
                    isAnimating: t,
                    transition: r,
                    canShowExpand: !e && !t,
                    handleExpand: g,
                    handleCollapse: A,
                    refs: { expandIconButtonRef: s, expandTabButtonRef: o, collapseButtonRef: u },
                }
            );
        })(),
        eh = Z && ed,
        { defaultWishlistId: ej } = (0, s.cf)([M.A], () => ({ defaultWishlistId: M.A.getFirstWishlistId(n.id) }));
    (0, T.fw)({ wishlistId: ej, userId: n.id });
    let eN = (0, X.fC)(),
        ey = B || null != eN.interactionType,
        eP = (0, eE.A)({ user: n, currentUser: t }),
        { analyticsLocations: eR } = (0, j.Ay)([...S, v.A.USER_PROFILE_MODAL_V2]),
        eD = (0, L.pb)({
            layout: "MODAL_V2",
            userId: n.id,
            sourceSessionId: I,
            guildId: F,
            channelId: u,
            messageId: c,
            roleId: x,
        }),
        eL = D.Ay.useName(q?.guildId, u, n),
        ew = (0, N.GV)(),
        eU = eT.intl.format(eT.t.KRe1Fk, { name: eL });
    return (0, l.jsx)(j.f5, {
        value: eR,
        children: (0, l.jsx)(L.of, {
            value: eD,
            openedAt: O,
            fetchStartedAt: q?.fetchStartedAt,
            fetchEndedAt: q?.fetchEndedAt,
            isLoaded: q?.isLoaded,
            children: (0, l.jsx)(X.Hl, {
                value: eN,
                children: (0, l.jsx)(K.N, {
                    value: E,
                    children: (0, l.jsxs)(g.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: e_.root,
                        transitionState: P,
                        "aria-labelledby": ew,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, l.jsx)(eI.A, {
                                children: (0, l.jsxs)("div", {
                                    className: a()(e_.layoutContainer, {
                                        [e_.editingPanelEnabled]: Z,
                                        [e_.editingPanelExpanded]: Z && ei,
                                        [e_.isAnimating]: ea,
                                        [e_.hasPrivateBanner]: q?.private === !0,
                                    }),
                                    children: [
                                        (0, l.jsxs)(eG, {
                                            user: n,
                                            displayProfile: q,
                                            pendingThemeColors: Q,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: e_.modalHeaderButtons,
                                                    children: [
                                                        (0, l.jsx)(em.A, { isCurrentUser: U, onClose: _ }),
                                                        (0, l.jsx)(A.A, {
                                                            children: (0, l.jsx)(m.H, { id: ew, children: eU }),
                                                        }),
                                                        Z &&
                                                            (!ei || ea) &&
                                                            (0, l.jsx)(ep._T, {
                                                                buttonRef: eg,
                                                                onClick: eu,
                                                                className: e_.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eh &&
                                                    (0, l.jsx)(ep.oA, {
                                                        innerRef: eA,
                                                        onClick: eu,
                                                        className: e_.editingPanelExpandButtonDefault,
                                                    }),
                                            ],
                                        }),
                                        (0, l.jsxs)(m.F, {
                                            children: [
                                                Z &&
                                                    es((e, t) =>
                                                        t
                                                            ? (0, l.jsx)(ep.Ay, {
                                                                  className: a()(e_.editingPanel, {
                                                                      [e_.isExpanded]: ei,
                                                                  }),
                                                                  user: n,
                                                                  selectedGuildId: V,
                                                                  onSelectGuildId: W,
                                                                  onClose: ec,
                                                                  collapseButtonRef: ef,
                                                                  isLoading: B,
                                                              })
                                                            : null,
                                                    ),
                                                (0, l.jsxs)(eo.A, {
                                                    className: a()(k, e_.profileContentContainer),
                                                    user: n,
                                                    displayProfile: q,
                                                    themeType: eO.d.MODAL_V2,
                                                    pendingThemeColors: Q,
                                                    privateBanner: q?.private === !0 ? (0, l.jsx)(er.A, {}) : void 0,
                                                    children: [
                                                        (0, l.jsx)(ek, { displayProfile: q, pendingBanner: et }),
                                                        (0, l.jsx)(ev.A, { isVisible: ey, showLoadingSpinner: B }),
                                                        (0, l.jsx)(eC.A, { className: e_.toast }),
                                                        (0, l.jsx)(eM, {
                                                            user: n,
                                                            currentUser: t,
                                                            guildId: F,
                                                            channelId: u,
                                                            displayProfile: q,
                                                            nickname: eL,
                                                            originGuildId: o,
                                                            hasEntered: P === f.ip.ENTERED,
                                                            customStatusPrompt: R,
                                                            onClose: _,
                                                            avatarDecorationOverride: ee,
                                                            avatarOverride: en,
                                                            bannerOverride: et,
                                                            profileEffectOverride: el,
                                                            allowEditing: Z,
                                                            isLoading: B,
                                                        }),
                                                        (0, l.jsx)(eb.A, {
                                                            user: n,
                                                            currentUser: t,
                                                            displayProfile: q,
                                                            guildId: F,
                                                            channelId: u,
                                                            items: eP,
                                                            initialSection: y,
                                                            onClose: _,
                                                        }),
                                                        null != $ && (0, l.jsx)(C.A, { frame: $, layout: "MODAL_V2" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, l.jsx)(ex.A, { userId: n.id, guildId: F, className: e_.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
