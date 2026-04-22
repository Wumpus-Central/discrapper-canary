l.d(n, { A: () => eL });
var t = l(627968),
    i = l(64700),
    r = l(503698),
    s = l.n(r),
    a = l(311907),
    o = l(778712),
    d = l(866323),
    c = l(573613),
    u = l(695366),
    g = l(935462),
    A = l(140735),
    m = l(707554),
    f = l(231723),
    p = l(241524),
    x = l(770178),
    h = l(80682),
    v = l(793574),
    j = l(688810),
    I = l(351966),
    b = l(361628),
    C = l(744808),
    N = l(915089),
    y = l(713517),
    E = l(645507),
    P = l(922590),
    R = l(821269),
    _ = l(437774),
    T = l(594832),
    O = l(994500),
    S = l(351906),
    k = l(562153),
    D = l(474090),
    L = l(183555),
    M = l(622543),
    G = l(591179),
    U = l(950191),
    F = l(101928),
    w = l(837529),
    V = l(346713),
    B = l(672691),
    z = l(195898),
    W = l(486678),
    H = l(567915),
    K = l(716804),
    Y = l(679492),
    X = l(718019),
    Z = l(31432),
    $ = l(915614),
    J = l(389996),
    q = l(223330),
    Q = l(559506),
    ee = l(361311),
    en = l(886891),
    el = l(439053),
    et = l(743987),
    ei = l(312381),
    er = l(501193),
    es = l(383448),
    ea = l(946356),
    eo = l(810396),
    ed = l(159218),
    ec = l(280645),
    eu = l(291335),
    eg = l(807651),
    eA = l(463156),
    em = l(510059),
    ef = l(546136),
    ep = l(982599),
    ex = l(399122),
    eh = l(358826),
    ev = l(83013),
    ej = l(878210),
    eI = l(515054),
    eb = l(513265),
    eC = l(828822),
    eN = l(629747),
    ey = l(160983),
    eE = l(518477),
    eP = l(652215),
    eR = l(996988),
    e_ = l(985018),
    eT = l(645625);
let eO = (e) => e * (2 - e),
    eS = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } };
function ek(e) {
    let {
            user: n,
            currentUser: l,
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
            allowEditing: j = !1,
            isLoading: b = !1,
        } = e,
        C = n.id === l.id,
        N = i.useRef(null),
        { isHoveringOrFocusing: T } = (0, y.A)(N),
        [k, L] = i.useState(),
        M = i.useCallback((e) => {
            let n = e.contentRect.width;
            n <= 350 ? L("compact-xs") : n <= 380 ? L("compact-sm") : L(void 0);
        }, []);
    (0, x.g)(N, M, [], { fireOnMount: !0 });
    let G = null != k ? eS[k] : void 0,
        U = i.useMemo(() => f ?? (0, E.A)(), [f]),
        { relationshipType: F, originApplicationId: w } = (0, a.cf)([O.A], () => ({
            relationshipType: O.A.getRelationshipType(n.id),
            originApplicationId: O.A.getOriginApplicationId(n.id),
        })),
        z = (0, a.bG)([S.A], () => S.A.hidePersonalInformation),
        W = (0, R.q)({ userId: n.id }),
        H = (0, P.fi)(n.id),
        { appIdentities: K, connections: Y } = (0, B.A)(n.id),
        ei = (0, V.A)(n.id),
        eA = j ? eN.A : $.A,
        ef = j ? eC.A : X.A;
    return (0, t.jsxs)("main", {
        className: s()(eT.profile, null != k && eT[k]),
        ref: N,
        "aria-busy": b,
        children: [
            (0, t.jsxs)("div", {
                className: eT.profileHeader,
                children: [
                    (0, t.jsx)(eA, {
                        user: n,
                        displayProfile: g,
                        guildId: r,
                        themeType: eR.d.MODAL_V2,
                        specOverrides: G,
                    }),
                    (0, t.jsx)(el.A, { userId: n.id, onClose: p, className: eT.interactionToast }),
                    (0, t.jsx)(ef, {
                        user: n,
                        displayProfile: g,
                        guildId: r,
                        channelId: d,
                        themeType: eR.d.MODAL_V2,
                        specOverrides: G,
                        avatarDecorationOverride: h,
                        avatarOverride: v,
                    }),
                    (0, t.jsx)(ed.A, {
                        user: n,
                        guildId: r,
                        channelId: d,
                        themeType: eR.d.MODAL_V2,
                        hasEntered: m,
                        prompt: C ? U : null,
                    }),
                ],
            }),
            (0, t.jsxs)(c.Ip, {
                fade: !0,
                className: eT.profileBody,
                children: [
                    (0, t.jsx)(Q.A, { userId: n.id }),
                    (0, t.jsx)(eo.A, {
                        user: n,
                        guildId: g?.guildId ?? void 0,
                        onClose: p,
                        nickname: A,
                        nicknameVariant: "heading-xl/semibold",
                        pronouns: g?.pronouns,
                        tags: (0, t.jsx)(Z.A, { displayProfile: g, themeType: eR.d.MODAL_V2, onClose: p }),
                    }),
                    F === eP.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(ea.A.Overlay, {
                            className: eT.profileOverlay,
                            children: (0, t.jsx)(en.A, {
                                user: n,
                                applicationId: w,
                                guildId: g?.guildId ?? void 0,
                                channelId: d,
                                className: eT.profileBanner,
                            }),
                        }),
                    H.map((e) => {
                        let { applicationId: l } = e;
                        return (0, t.jsx)(
                            ea.A.Overlay,
                            {
                                className: eT.profileOverlay,
                                children: (0, t.jsx)(en.A, {
                                    user: n,
                                    guildId: g?.guildId ?? void 0,
                                    channelId: d,
                                    isGameRelationship: !0,
                                    applicationId: l,
                                    className: eT.profileBanner,
                                }),
                            },
                            l,
                        );
                    }),
                    n.isProvisional &&
                        (0, t.jsx)(ea.A.Overlay, {
                            className: eT.profileOverlay,
                            children: (0, t.jsx)(ev.A, {
                                heading: e_.intl.string(e_.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(u.E, { size: "xs", color: "currentColor" }),
                                className: eT.profileBanner,
                                children: (0, t.jsx)(_.T, { userId: n.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(es.A, { user: n, className: eT.profileBanner }),
                    g?.private &&
                        (0, t.jsx)(ea.A.Overlay, {
                            className: eT.profileOverlay,
                            children: (0, t.jsx)(er.A, { username: A }),
                        }),
                    (0, t.jsx)("div", {
                        className: eT.profileButtons,
                        children: (0, t.jsx)(eg.A, {
                            user: n,
                            currentUser: l,
                            guildId: r,
                            originGuildId: o,
                            channelId: d,
                            displayProfile: g,
                            relationshipType: F,
                            onClose: p,
                        }),
                    }),
                    C && (0, t.jsx)(q.A, { isPremiumUser: (0, D.ki)(l), onInteraction: p }),
                    !z && (0, t.jsx)(J.E, { userBio: g?.bio, setLineClamp: !1 }),
                    W.length > 0 &&
                        (0, t.jsx)(ev.A, {
                            heading: e_.intl.string(e_.t["Uv/eTx"]),
                            children: (0, t.jsx)(ee.A, { applicationIds: W }),
                        }),
                    (0, t.jsx)(ev.A, {
                        heading: e_.intl.string(e_.t.a6XYD9),
                        children: (0, t.jsx)(et.A, { userId: n.id, guildId: g?.guildId, tooltipDelay: eE.In }),
                    }),
                    g?.guildId != null &&
                        (0, t.jsx)(ec.A, {
                            userId: n.id,
                            guildId: g.guildId,
                            className: eT.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "currentColor",
                        }),
                    (Y.length > 0 || K.length > 0) &&
                        (0, t.jsx)(ev.A, {
                            heading: e_.intl.string(e_.t["3fe7U5"]),
                            scrollTargetId: eE.bk.CONNECTIONS,
                            children: (0, t.jsx)(em.A, {
                                applicationIdentities: K,
                                connections: Y,
                                userId: n.id,
                                className: eT.profileAppConnections,
                            }),
                        }),
                    ei.length > 0 &&
                        (0, t.jsx)(ev.A, {
                            heading: e_.intl.string(e_.t.PHjkRE),
                            scrollTargetId: eE.bk.APPS,
                            children: (0, t.jsx)(eu.A, {
                                applicationRoleConnections: ei,
                                onClose: p,
                                className: eT.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(ex.A, { userId: n.id }),
                ],
            }),
            g?.profileEffect != null && (0, t.jsx)(I.A, { skuId: g?.profileEffect.skuId, isHovering: T }),
        ],
    });
}
function eD(e) {
    let { user: n, displayProfile: l, pendingThemeColors: i, children: r } = e,
        {
            theme: s,
            primaryColor: a,
            secondaryColor: o,
        } = (0, F.A)({ user: n, displayProfile: l, pendingThemeColors: i }),
        { profileThemeStyle: d, profileThemeClassName: c } = (0, z.A)({
            theme: s,
            themeType: null,
            primaryColor: a,
            secondaryColor: o,
        });
    return (0, t.jsx)("div", { className: c, style: d, children: r });
}
function eL(e) {
    let {
            user: n,
            currentUser: l,
            guildId: r,
            originGuildId: o,
            channelId: c,
            messageId: u,
            roleId: x,
            sessionId: I,
            initialTabSection: y,
            initialScrollTarget: E,
            transitionState: P,
            customStatusPrompt: R,
            openedAt: _,
            onClose: O,
            sourceAnalyticsLocations: S = [],
            themeContainerClassName: D,
        } = e,
        F = n.id === l.id,
        {
            guildId: V,
            pendingGuildId: B,
            isLoading: z,
            selectUserProfile: X,
        } = (0, H.A)({ userId: n.id, initialGuildId: r }),
        Z = i.useMemo(() => (null != V ? { [V]: [n.id] } : {}), [V, n.id]);
    (0, h.Eq)(Z, "UserProfileModalV2");
    let $ = (0, U.Ay)(n.id, V),
        J = (0, b.A)($?.profileFrame?.skuId, "UserProfileModalV2"),
        q = (0, G.X)("UserProfileModalV2"),
        Q = F && q,
        {
            pendingThemeColors: ee,
            avatarDecorationOverride: en,
            avatarOverride: el,
        } = (0, W.A)({ user: n, allowEditingInModal: Q, guildId: V }),
        {
            isExpanded: et,
            isAnimating: er,
            transition: es,
            canShowExpand: eo,
            handleExpand: ed,
            handleCollapse: ec,
            refs: { expandIconButtonRef: eu, expandTabButtonRef: eg, collapseButtonRef: em },
        } = (function () {
            let [e, n] = i.useState(() => window.innerWidth > 928),
                [l, t] = i.useState(!1),
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: eO },
                    onRest: () => t(!1),
                }),
                s = (0, p.A)("(min-width: 929px) and (min-height: 550px)"),
                a = i.useRef(null),
                o = i.useRef(null),
                c = i.useRef(null),
                u = i.useRef(null),
                g = i.useCallback(() => {
                    (u.current = "collapse"), t(!0), n(!0);
                }, []),
                A = i.useCallback(() => {
                    (u.current = "expand"), t(!0), n(!1);
                }, []);
            return (
                i.useEffect(() => {
                    if (!l) {
                        if ("collapse" === u.current && e) (u.current = null), c.current?.focus();
                        else if ("expand" === u.current && !e) {
                            u.current = null;
                            let e = s ? o.current : a.current;
                            e?.focus();
                        }
                    }
                }, [e, l, s]),
                {
                    isExpanded: e,
                    isAnimating: l,
                    transition: r,
                    canShowExpand: !e && !l,
                    handleExpand: g,
                    handleCollapse: A,
                    refs: { expandIconButtonRef: a, expandTabButtonRef: o, collapseButtonRef: c },
                }
            );
        })(),
        ex = Q && eo,
        { defaultWishlistId: ev } = (0, a.cf)([M.A], () => ({ defaultWishlistId: M.A.getFirstWishlistId(n.id) }));
    (0, T.fw)({ wishlistId: ev, userId: n.id });
    let eC = (0, Y.fC)(),
        eN = z || null != eC.interactionType,
        eE = (0, w.Nx)() ? null : $?.getBannerURL({ canAnimate: !1, size: 1024 }),
        eP = (0, ey.A)({ user: n, currentUser: l }),
        { analyticsLocations: eS } = (0, j.Ay)([...S, v.A.USER_PROFILE_MODAL_V2]),
        eL = (0, L.pb)({
            layout: "MODAL_V2",
            userId: n.id,
            sourceSessionId: I,
            guildId: V,
            channelId: c,
            messageId: u,
            roleId: x,
        }),
        eM = k.Ay.useName($?.guildId, c, n),
        eG = (0, N.GV)(),
        eU = e_.intl.format(e_.t.KRe1Fk, { name: eM });
    return (0, t.jsx)(j.f5, {
        value: eS,
        children: (0, t.jsx)(L.of, {
            value: eL,
            openedAt: _,
            fetchStartedAt: $?.fetchStartedAt,
            fetchEndedAt: $?.fetchEndedAt,
            isLoaded: $?.isLoaded,
            children: (0, t.jsx)(Y.Hl, {
                value: eC,
                children: (0, t.jsx)(K.N, {
                    value: E,
                    children: (0, t.jsxs)(g.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: eT.root,
                        transitionState: P,
                        "aria-labelledby": eG,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(ej.A, {
                                children: (0, t.jsxs)("div", {
                                    className: s()(eT.layoutContainer, {
                                        [eT.editingPanelEnabled]: Q,
                                        [eT.editingPanelExpanded]: Q && et,
                                        [eT.isAnimating]: er,
                                        [eT.hasPrivateBanner]: $?.private === !0,
                                    }),
                                    children: [
                                        (0, t.jsxs)(eD, {
                                            user: n,
                                            displayProfile: $,
                                            pendingThemeColors: ee,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: eT.modalHeaderButtons,
                                                    children: [
                                                        (0, t.jsx)(eA.A, { isCurrentUser: F, onClose: O }),
                                                        (0, t.jsx)(A.A, {
                                                            children: (0, t.jsx)(m.H, { id: eG, children: eU }),
                                                        }),
                                                        Q &&
                                                            (!et || er) &&
                                                            (0, t.jsx)(ef._T, {
                                                                buttonRef: eu,
                                                                onClick: ed,
                                                                className: eT.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                ex &&
                                                    (0, t.jsx)(ef.oA, {
                                                        innerRef: eg,
                                                        onClick: ed,
                                                        className: eT.editingPanelExpandButtonDefault,
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(m.F, {
                                            children: [
                                                Q &&
                                                    es((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(ef.Ay, {
                                                                  className: s()(eT.editingPanel, {
                                                                      [eT.isExpanded]: et,
                                                                  }),
                                                                  user: n,
                                                                  selectedGuildId: B,
                                                                  onSelectGuildId: X,
                                                                  onClose: ec,
                                                                  collapseButtonRef: em,
                                                                  isLoading: z,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(ea.A, {
                                                    className: s()(D, eT.profileContentContainer),
                                                    user: n,
                                                    displayProfile: $,
                                                    themeType: eR.d.MODAL_V2,
                                                    pendingThemeColors: ee,
                                                    privateBanner: $?.private === !0 ? (0, t.jsx)(ei.A, {}) : void 0,
                                                    children: [
                                                        null != eE &&
                                                            (0, t.jsx)("div", {
                                                                className: eT.backgroundImage,
                                                                style: { backgroundImage: `url(${eE})` },
                                                            }),
                                                        (0, t.jsx)(eh.A, { isVisible: eN, showLoadingSpinner: z }),
                                                        (0, t.jsx)(eb.A, { className: eT.toast }),
                                                        (0, t.jsx)(ek, {
                                                            user: n,
                                                            currentUser: l,
                                                            guildId: V,
                                                            channelId: c,
                                                            displayProfile: $,
                                                            nickname: eM,
                                                            originGuildId: o,
                                                            hasEntered: P === f.ip.ENTERED,
                                                            customStatusPrompt: R,
                                                            onClose: O,
                                                            avatarDecorationOverride: en,
                                                            avatarOverride: el,
                                                            allowEditing: Q,
                                                            isLoading: z,
                                                        }),
                                                        (0, t.jsx)(eI.A, {
                                                            user: n,
                                                            currentUser: l,
                                                            displayProfile: $,
                                                            guildId: V,
                                                            channelId: c,
                                                            items: eP,
                                                            initialSection: y,
                                                            onClose: O,
                                                        }),
                                                        null != J && (0, t.jsx)(C.A, { frame: J, layout: "MODAL_V2" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, t.jsx)(ep.A, { userId: n.id, guildId: V, className: eT.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
