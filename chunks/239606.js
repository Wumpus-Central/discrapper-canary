t.d(n, { A: () => ew });
var l = t(627968),
    i = t(64700),
    r = t(503698),
    a = t.n(r),
    s = t(311907),
    o = t(778712),
    d = t(866323),
    c = t(573613),
    u = t(695366),
    g = t(935462),
    A = t(140735),
    f = t(707554),
    m = t(231723),
    p = t(241524),
    x = t(770178),
    h = t(80682),
    v = t(793574),
    j = t(688810),
    I = t(351966),
    b = t(361628),
    C = t(744808),
    N = t(915089),
    E = t(713517),
    y = t(645507),
    P = t(922590),
    R = t(821269),
    _ = t(437774),
    T = t(594832),
    O = t(994500),
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
    K = t(425815),
    Y = t(716804),
    X = t(679492),
    $ = t(718019),
    Z = t(31432),
    J = t(915614),
    q = t(389996),
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
    ec = t(159218),
    eu = t(280645),
    eg = t(291335),
    eA = t(807651),
    ef = t(463156),
    em = t(510059),
    ep = t(546136),
    ex = t(982599),
    eh = t(399122),
    ev = t(358826),
    ej = t(83013),
    eI = t(878210),
    eb = t(515054),
    eC = t(513265),
    eN = t(828822),
    eE = t(629747),
    ey = t(160983),
    eP = t(518477),
    eR = t(652215),
    e_ = t(996988),
    eT = t(985018),
    eO = t(80505);
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
                (0, K.t)(t, 1024)
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
        : (0, l.jsx)("div", { className: eO.backgroundImage, style: { backgroundImage: `url(${o})` } });
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
            hasEntered: f,
            customStatusPrompt: m,
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
        { isHoveringOrFocusing: D } = (0, E.A)(T),
        [L, M] = i.useState(),
        G = i.useCallback((e) => {
            let n = e.contentRect.width;
            n <= 350 ? M("compact-xs") : n <= 380 ? M("compact-sm") : M(void 0);
        }, []);
    (0, x.g)(T, G, [], { fireOnMount: !0 });
    let w = null != L ? eD[L] : void 0,
        U = i.useMemo(() => m ?? (0, y.A)(), [m]),
        { relationshipType: F, originApplicationId: W } = (0, s.cf)([O.A], () => ({
            relationshipType: O.A.getRelationshipType(n.id),
            originApplicationId: O.A.getOriginApplicationId(n.id),
        })),
        z = (0, s.bG)([S.A], () => S.A.hidePersonalInformation),
        H = (0, R.q)({ userId: n.id }),
        K = (0, P.fi)(n.id),
        { appIdentities: Y, connections: X } = (0, B.A)(n.id),
        er = (0, V.A)(n.id),
        ef = b ? eE.A : J.A,
        ep = b ? eN.A : $.A;
    return (0, l.jsxs)("main", {
        className: a()(eO.profile, null != L && eO[L]),
        ref: T,
        "aria-busy": C,
        children: [
            (0, l.jsxs)("div", {
                className: eO.profileHeader,
                children: [
                    (0, l.jsx)(ef, {
                        user: n,
                        displayProfile: g,
                        guildId: r,
                        themeType: e_.d.MODAL_V2,
                        specOverrides: w,
                        pendingBanner: j,
                    }),
                    (0, l.jsx)(el.A, { userId: n.id, onClose: p, className: eO.interactionToast }),
                    (0, l.jsx)(ep, {
                        user: n,
                        displayProfile: g,
                        guildId: r,
                        channelId: d,
                        themeType: e_.d.MODAL_V2,
                        specOverrides: w,
                        avatarDecorationOverride: h,
                        avatarOverride: v,
                    }),
                    (0, l.jsx)(ec.A, {
                        user: n,
                        guildId: r,
                        channelId: d,
                        themeType: e_.d.MODAL_V2,
                        hasEntered: f,
                        prompt: N ? U : null,
                    }),
                ],
            }),
            (0, l.jsxs)(c.Ip, {
                fade: !0,
                className: eO.profileBody,
                children: [
                    (0, l.jsx)(ee.A, { userId: n.id }),
                    (0, l.jsx)(ed.A, {
                        user: n,
                        guildId: g?.guildId ?? void 0,
                        onClose: p,
                        nickname: A,
                        nicknameVariant: "heading-xl/semibold",
                        pronouns: g?.pronouns,
                        tags: (0, l.jsx)(Z.A, { displayProfile: g, themeType: e_.d.MODAL_V2, onClose: p }),
                    }),
                    F === eR.eA$.PENDING_INCOMING &&
                        (0, l.jsx)(eo.A.Overlay, {
                            className: eO.profileOverlay,
                            children: (0, l.jsx)(et.A, {
                                user: n,
                                applicationId: W,
                                guildId: g?.guildId ?? void 0,
                                channelId: d,
                                className: eO.profileBanner,
                            }),
                        }),
                    K.map((e) => {
                        let { applicationId: t } = e;
                        return (0, l.jsx)(
                            eo.A.Overlay,
                            {
                                className: eO.profileOverlay,
                                children: (0, l.jsx)(et.A, {
                                    user: n,
                                    guildId: g?.guildId ?? void 0,
                                    channelId: d,
                                    isGameRelationship: !0,
                                    applicationId: t,
                                    className: eO.profileBanner,
                                }),
                            },
                            t,
                        );
                    }),
                    n.isProvisional &&
                        (0, l.jsx)(eo.A.Overlay, {
                            className: eO.profileOverlay,
                            children: (0, l.jsx)(ej.A, {
                                heading: eT.intl.string(eT.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, l.jsx)(u.E, { size: "xs", color: "currentColor" }),
                                className: eO.profileBanner,
                                children: (0, l.jsx)(_.T, { userId: n.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, l.jsx)(es.A, { user: n, className: eO.profileBanner }),
                    g?.private &&
                        (0, l.jsx)(eo.A.Overlay, {
                            className: eO.profileOverlay,
                            children: (0, l.jsx)(ea.A, { username: A }),
                        }),
                    (0, l.jsx)("div", {
                        className: eO.profileButtons,
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
                    !z && (0, l.jsx)(q.E, { userBio: g?.bio, setLineClamp: !1 }),
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
                        (0, l.jsx)(eu.A, {
                            userId: n.id,
                            guildId: g.guildId,
                            className: eO.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "currentColor",
                        }),
                    (X.length > 0 || Y.length > 0) &&
                        (0, l.jsx)(ej.A, {
                            heading: eT.intl.string(eT.t["3fe7U5"]),
                            scrollTargetId: eP.bk.CONNECTIONS,
                            children: (0, l.jsx)(em.A, {
                                applicationIdentities: Y,
                                connections: X,
                                userId: n.id,
                                className: eO.profileAppConnections,
                            }),
                        }),
                    er.length > 0 &&
                        (0, l.jsx)(ej.A, {
                            heading: eT.intl.string(eT.t.PHjkRE),
                            scrollTargetId: eP.bk.APPS,
                            children: (0, l.jsx)(eg.A, {
                                applicationRoleConnections: er,
                                onClose: p,
                                className: eO.profileAppConnections,
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
        { profileThemeStyle: d, profileThemeClassName: c } = (0, W.A)({
            theme: a,
            themeType: null,
            primaryColor: s,
            secondaryColor: o,
        });
    return (0, l.jsx)("div", { className: c, style: d, children: r });
}
function ew(e) {
    let {
            user: n,
            currentUser: t,
            guildId: r,
            originGuildId: o,
            channelId: c,
            messageId: u,
            roleId: x,
            sessionId: I,
            initialTabSection: E,
            initialScrollTarget: y,
            transitionState: P,
            customStatusPrompt: R,
            openedAt: _,
            onClose: O,
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
        K = i.useMemo(() => (null != F ? { [F]: [n.id] } : {}), [F, n.id]);
    (0, h.Eq)(K, "UserProfileModalV2");
    let $ = (0, w.Ay)(n.id, F),
        Z = (0, b.A)($?.profileFrame?.skuId, "UserProfileModalV2"),
        J = (0, G.X)("UserProfileModalV2"),
        q = U && J,
        {
            pendingThemeColors: Q,
            avatarDecorationOverride: ee,
            avatarOverride: en,
            bannerOverride: et,
            profileEffectOverride: el,
        } = (0, z.A)({ user: n, allowEditingInModal: q, guildId: F }),
        {
            isExpanded: ei,
            isAnimating: ea,
            transition: es,
            canShowExpand: ed,
            handleExpand: ec,
            handleCollapse: eu,
            refs: { expandIconButtonRef: eg, expandTabButtonRef: eA, collapseButtonRef: em },
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
                c = i.useRef(null),
                u = i.useRef(null),
                g = i.useCallback(() => {
                    (u.current = "collapse"), l(!0), n(!0);
                }, []),
                A = i.useCallback(() => {
                    (u.current = "expand"), l(!0), n(!1);
                }, []);
            return (
                i.useEffect(() => {
                    if (!t) {
                        if ("collapse" === u.current && e) (u.current = null), c.current?.focus();
                        else if ("expand" === u.current && !e) {
                            u.current = null;
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
                    refs: { expandIconButtonRef: s, expandTabButtonRef: o, collapseButtonRef: c },
                }
            );
        })(),
        eh = q && ed,
        { defaultWishlistId: ej } = (0, s.cf)([M.A], () => ({ defaultWishlistId: M.A.getFirstWishlistId(n.id) }));
    (0, T.fw)({ wishlistId: ej, userId: n.id });
    let eN = (0, X.fC)(),
        eE = B || null != eN.interactionType,
        eP = (0, ey.A)({ user: n, currentUser: t }),
        { analyticsLocations: eR } = (0, j.Ay)([...S, v.A.USER_PROFILE_MODAL_V2]),
        eD = (0, L.pb)({
            layout: "MODAL_V2",
            userId: n.id,
            sourceSessionId: I,
            guildId: F,
            channelId: c,
            messageId: u,
            roleId: x,
        }),
        eL = D.Ay.useName($?.guildId, c, n),
        ew = (0, N.GV)(),
        eU = eT.intl.format(eT.t.KRe1Fk, { name: eL });
    return (0, l.jsx)(j.f5, {
        value: eR,
        children: (0, l.jsx)(L.of, {
            value: eD,
            openedAt: _,
            fetchStartedAt: $?.fetchStartedAt,
            fetchEndedAt: $?.fetchEndedAt,
            isLoaded: $?.isLoaded,
            children: (0, l.jsx)(X.Hl, {
                value: eN,
                children: (0, l.jsx)(Y.N, {
                    value: y,
                    children: (0, l.jsxs)(g.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: eO.root,
                        transitionState: P,
                        "aria-labelledby": ew,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, l.jsx)(eI.A, {
                                children: (0, l.jsxs)("div", {
                                    className: a()(eO.layoutContainer, {
                                        [eO.editingPanelEnabled]: q,
                                        [eO.editingPanelExpanded]: q && ei,
                                        [eO.isAnimating]: ea,
                                        [eO.hasPrivateBanner]: $?.private === !0,
                                    }),
                                    children: [
                                        (0, l.jsxs)(eG, {
                                            user: n,
                                            displayProfile: $,
                                            pendingThemeColors: Q,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: eO.modalHeaderButtons,
                                                    children: [
                                                        (0, l.jsx)(ef.A, { isCurrentUser: U, onClose: O }),
                                                        (0, l.jsx)(A.A, {
                                                            children: (0, l.jsx)(f.H, { id: ew, children: eU }),
                                                        }),
                                                        q &&
                                                            (!ei || ea) &&
                                                            (0, l.jsx)(ep._T, {
                                                                buttonRef: eg,
                                                                onClick: ec,
                                                                className: eO.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eh &&
                                                    (0, l.jsx)(ep.oA, {
                                                        innerRef: eA,
                                                        onClick: ec,
                                                        className: eO.editingPanelExpandButtonDefault,
                                                    }),
                                            ],
                                        }),
                                        (0, l.jsxs)(f.F, {
                                            children: [
                                                q &&
                                                    es((e, t) =>
                                                        t
                                                            ? (0, l.jsx)(ep.Ay, {
                                                                  className: a()(eO.editingPanel, {
                                                                      [eO.isExpanded]: ei,
                                                                  }),
                                                                  user: n,
                                                                  selectedGuildId: V,
                                                                  onSelectGuildId: W,
                                                                  onClose: eu,
                                                                  collapseButtonRef: em,
                                                                  isLoading: B,
                                                              })
                                                            : null,
                                                    ),
                                                (0, l.jsxs)(eo.A, {
                                                    className: a()(k, eO.profileContentContainer),
                                                    user: n,
                                                    displayProfile: $,
                                                    themeType: e_.d.MODAL_V2,
                                                    pendingThemeColors: Q,
                                                    privateBanner: $?.private === !0 ? (0, l.jsx)(er.A, {}) : void 0,
                                                    children: [
                                                        (0, l.jsx)(ek, { displayProfile: $, pendingBanner: et }),
                                                        (0, l.jsx)(ev.A, { isVisible: eE, showLoadingSpinner: B }),
                                                        (0, l.jsx)(eC.A, { className: eO.toast }),
                                                        (0, l.jsx)(eM, {
                                                            user: n,
                                                            currentUser: t,
                                                            guildId: F,
                                                            channelId: c,
                                                            displayProfile: $,
                                                            nickname: eL,
                                                            originGuildId: o,
                                                            hasEntered: P === m.ip.ENTERED,
                                                            customStatusPrompt: R,
                                                            onClose: O,
                                                            avatarDecorationOverride: ee,
                                                            avatarOverride: en,
                                                            bannerOverride: et,
                                                            profileEffectOverride: el,
                                                            allowEditing: q,
                                                            isLoading: B,
                                                        }),
                                                        (0, l.jsx)(eb.A, {
                                                            user: n,
                                                            currentUser: t,
                                                            displayProfile: $,
                                                            guildId: F,
                                                            channelId: c,
                                                            items: eP,
                                                            initialSection: E,
                                                            onClose: O,
                                                        }),
                                                        null != Z && (0, l.jsx)(C.A, { frame: Z, layout: "MODAL_V2" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, l.jsx)(ex.A, { userId: n.id, guildId: F, className: eO.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
