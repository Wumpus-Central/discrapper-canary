l.d(t, { A: () => eb });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(687498),
    o = l(311907),
    d = l(397927),
    c = l(241524),
    u = l(770178),
    m = l(80682),
    p = l(793574),
    x = l(688810),
    A = l(351966),
    g = l(361628),
    f = l(744808),
    h = l(915089),
    j = l(713517),
    v = l(645507),
    I = l(922590),
    N = l(821269),
    y = l(437774),
    C = l(594832),
    E = l(994500),
    T = l(351906),
    b = l(562153),
    P = l(474090),
    O = l(183555),
    _ = l(622543),
    R = l(591179),
    S = l(950191),
    L = l(101928),
    D = l(837529),
    U = l(346713),
    G = l(672691),
    M = l(195898),
    k = l(486678),
    F = l(567915),
    w = l(716804),
    V = l(679492),
    B = l(718019),
    z = l(31432),
    W = l(915614),
    H = l(389996),
    K = l(223330),
    $ = l(559506),
    Y = l(361311),
    Z = l(886891),
    X = l(439053),
    q = l(743987),
    J = l(312381),
    Q = l(501193),
    ee = l(383448),
    et = l(946356),
    el = l(810396),
    en = l(159218),
    ei = l(280645),
    es = l(291335),
    ea = l(807651),
    er = l(463156),
    eo = l(510059),
    ed = l(546136),
    ec = l(982599),
    eu = l(399122),
    em = l(83013),
    ep = l(878210),
    ex = l(515054),
    eA = l(513265),
    eg = l(629747),
    ef = l(160983),
    eh = l(518477),
    ej = l(652215),
    ev = l(996988),
    eI = l(985018),
    eN = l(572841);
let ey = (e) => e * (2 - e),
    eC = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3J.SIZE_96, avatarOffsetX: 16 } };
function eE(e) {
    let {
            user: t,
            currentUser: l,
            guildId: s,
            originGuildId: r,
            channelId: c,
            displayProfile: m,
            nickname: p,
            hasEntered: x,
            customStatusPrompt: g,
            onClose: f,
            avatarDecorationOverride: h,
            avatarOverride: C,
            allowEditing: b = !1,
        } = e,
        O = t.id === l.id,
        _ = i.useRef(null),
        { isHoveringOrFocusing: R } = (0, j.A)(_),
        [S, L] = i.useState(),
        D = i.useCallback((e) => {
            let t = e.contentRect.width;
            t <= 350 ? L("compact-xs") : t <= 380 ? L("compact-sm") : L(void 0);
        }, []);
    (0, u.g)(_, D, [], { fireOnMount: !0 });
    let M = null != S ? eC[S] : void 0,
        k = i.useMemo(() => g ?? (0, v.A)(), [g]),
        { relationshipType: F, originApplicationId: w } = (0, o.cf)([E.A], () => ({
            relationshipType: E.A.getRelationshipType(t.id),
            originApplicationId: E.A.getOriginApplicationId(t.id),
        })),
        V = (0, o.bG)([T.A], () => T.A.hidePersonalInformation),
        J = (0, N.q)({ userId: t.id }),
        er = (0, I.fi)(t.id),
        { appIdentities: ed, connections: ec } = (0, G.A)(t.id),
        ep = (0, U.A)(t.id),
        ex = b ? eg.A : W.A;
    return (0, n.jsxs)("main", {
        className: a()(eN.profile, null != S && eN[S]),
        ref: _,
        children: [
            (0, n.jsxs)("div", {
                className: eN.profileHeader,
                children: [
                    (0, n.jsx)(ex, { user: t, displayProfile: m, themeType: ev.d.MODAL_V2, specOverrides: M }),
                    (0, n.jsx)(X.A, { userId: t.id, onClose: f, className: eN.interactionToast }),
                    (0, n.jsx)(B.A, {
                        user: t,
                        displayProfile: m,
                        guildId: s,
                        channelId: c,
                        themeType: ev.d.MODAL_V2,
                        specOverrides: M,
                        avatarDecorationOverride: h,
                        avatarOverride: C,
                    }),
                    (0, n.jsx)(en.A, {
                        user: t,
                        guildId: s,
                        channelId: c,
                        themeType: ev.d.MODAL_V2,
                        hasEntered: x,
                        prompt: O ? k : null,
                    }),
                ],
            }),
            (0, n.jsxs)(d.HOs, {
                fade: !0,
                className: eN.profileBody,
                children: [
                    (0, n.jsx)($.A, { userId: t.id }),
                    (0, n.jsx)(el.A, {
                        user: t,
                        guildId: m?.guildId ?? void 0,
                        onClose: f,
                        nickname: p,
                        nicknameVariant: "heading-xl/semibold",
                        pronouns: m?.pronouns,
                        tags: (0, n.jsx)(z.A, { displayProfile: m, themeType: ev.d.MODAL_V2, onClose: f }),
                    }),
                    F === ej.eA$.PENDING_INCOMING &&
                        (0, n.jsx)(et.A.Overlay, {
                            className: eN.profileOverlay,
                            children: (0, n.jsx)(Z.A, {
                                user: t,
                                applicationId: w,
                                guildId: m?.guildId ?? void 0,
                                channelId: c,
                                className: eN.profileBanner,
                            }),
                        }),
                    er.map((e) => {
                        let { applicationId: l } = e;
                        return (0, n.jsx)(
                            et.A.Overlay,
                            {
                                className: eN.profileOverlay,
                                children: (0, n.jsx)(Z.A, {
                                    user: t,
                                    guildId: m?.guildId ?? void 0,
                                    channelId: c,
                                    isGameRelationship: !0,
                                    applicationId: l,
                                    className: eN.profileBanner,
                                }),
                            },
                            l,
                        );
                    }),
                    t.isProvisional &&
                        (0, n.jsx)(et.A.Overlay, {
                            className: eN.profileOverlay,
                            children: (0, n.jsx)(em.A, {
                                heading: eI.intl.string(eI.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, n.jsx)(d.EpV, { size: "xs", color: "currentColor" }),
                                className: eN.profileBanner,
                                children: (0, n.jsx)(y.T, { userId: t.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    O && (0, n.jsx)(K.A, { isPremiumUser: (0, P.ki)(l), onInteraction: f }),
                    (0, n.jsx)(ee.A, { user: t, className: eN.profileBanner }),
                    m?.private &&
                        (0, n.jsx)(et.A.Overlay, {
                            className: eN.profileOverlay,
                            children: (0, n.jsx)(Q.A, { username: p }),
                        }),
                    (0, n.jsx)("div", {
                        className: eN.profileButtons,
                        children: (0, n.jsx)(ea.A, {
                            user: t,
                            currentUser: l,
                            guildId: s,
                            originGuildId: r,
                            channelId: c,
                            displayProfile: m,
                            relationshipType: F,
                            onClose: f,
                        }),
                    }),
                    !V && (0, n.jsx)(H.E, { userBio: m?.bio, setLineClamp: !1 }),
                    J.length > 0 &&
                        (0, n.jsx)(em.A, {
                            heading: eI.intl.string(eI.t["Uv/eTx"]),
                            children: (0, n.jsx)(Y.A, { applicationIds: J }),
                        }),
                    (0, n.jsx)(em.A, {
                        heading: eI.intl.string(eI.t.a6XYD9),
                        children: (0, n.jsx)(q.A, { userId: t.id, guildId: m?.guildId, tooltipDelay: eh.In }),
                    }),
                    m?.guildId != null &&
                        (0, n.jsx)(ei.A, {
                            userId: t.id,
                            guildId: m.guildId,
                            className: eN.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "currentColor",
                        }),
                    (ec.length > 0 || ed.length > 0) &&
                        (0, n.jsx)(em.A, {
                            heading: eI.intl.string(eI.t["3fe7U5"]),
                            scrollTargetId: eh.bk.CONNECTIONS,
                            children: (0, n.jsx)(eo.A, {
                                applicationIdentities: ed,
                                connections: ec,
                                userId: t.id,
                                className: eN.profileAppConnections,
                            }),
                        }),
                    ep.length > 0 &&
                        (0, n.jsx)(em.A, {
                            heading: eI.intl.string(eI.t.PHjkRE),
                            scrollTargetId: eh.bk.APPS,
                            children: (0, n.jsx)(es.A, {
                                applicationRoleConnections: ep,
                                onClose: f,
                                className: eN.profileAppConnections,
                            }),
                        }),
                    (0, n.jsx)(eu.A, { userId: t.id }),
                ],
            }),
            m?.profileEffect != null && (0, n.jsx)(A.A, { skuId: m?.profileEffect.skuId, isHovering: R }),
        ],
    });
}
function eT(e) {
    let { user: t, displayProfile: l, pendingThemeColors: i, children: s } = e,
        {
            theme: a,
            primaryColor: r,
            secondaryColor: o,
        } = (0, L.A)({ user: t, displayProfile: l, pendingThemeColors: i }),
        { profileThemeStyle: d, profileThemeClassName: c } = (0, M.A)({
            theme: a,
            themeType: null,
            primaryColor: r,
            secondaryColor: o,
        });
    return (0, n.jsx)("div", { className: c, style: d, children: s });
}
function eb(e) {
    let {
            user: t,
            currentUser: l,
            guildId: s,
            originGuildId: u,
            channelId: A,
            messageId: j,
            roleId: v,
            sessionId: I,
            initialTabSection: N,
            initialScrollTarget: y,
            transitionState: E,
            customStatusPrompt: T,
            onClose: P,
            sourceAnalyticsLocations: L = [],
            themeContainerClassName: U,
        } = e,
        G = t.id === l.id,
        { guildId: M, pendingGuildId: B, selectUserProfile: z } = (0, F.A)({ userId: t.id, initialGuildId: s }),
        W = i.useMemo(() => (null != M ? { [M]: [t.id] } : {}), [M, t.id]);
    (0, m.Eq)(W, "UserProfileModalV2");
    let H = (0, S.Ay)(t.id, M),
        K = (0, g.A)(H?.profileFrame?.skuId, "UserProfileModalV2"),
        $ = (0, R.X)("UserProfileModalV2"),
        Y = G && $,
        {
            pendingThemeColors: Z,
            avatarDecorationOverride: X,
            avatarOverride: q,
        } = (0, k.A)({ user: t, allowEditingInModal: Y, guildId: M }),
        {
            isExpanded: Q,
            isAnimating: ee,
            transition: el,
            canShowExpand: en,
            handleExpand: ei,
            handleCollapse: es,
            refs: { expandIconButtonRef: ea, expandTabButtonRef: eo, collapseButtonRef: eu },
        } = (function () {
            let [e, t] = i.useState(() => window.innerWidth > 928),
                [l, n] = i.useState(!1),
                s = (0, d.pnh)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: ey },
                    onRest: () => n(!1),
                }),
                a = (0, c.A)("(min-width: 929px) and (min-height: 550px)"),
                r = i.useRef(null),
                o = i.useRef(null),
                u = i.useRef(null),
                m = i.useRef(null),
                p = i.useCallback(() => {
                    (m.current = "collapse"), n(!0), t(!0);
                }, []),
                x = i.useCallback(() => {
                    (m.current = "expand"), n(!0), t(!1);
                }, []);
            return (
                i.useEffect(() => {
                    if (!l) {
                        if ("collapse" === m.current && e) (m.current = null), u.current?.focus();
                        else if ("expand" === m.current && !e) {
                            m.current = null;
                            let e = a ? o.current : r.current;
                            e?.focus();
                        }
                    }
                }, [e, l, a]),
                {
                    isExpanded: e,
                    isAnimating: l,
                    transition: s,
                    canShowExpand: !e && !l,
                    handleExpand: p,
                    handleCollapse: x,
                    refs: { expandIconButtonRef: r, expandTabButtonRef: o, collapseButtonRef: u },
                }
            );
        })(),
        em = Y && en,
        { defaultWishlistId: eg } = (0, o.cf)([_.A], () => ({ defaultWishlistId: _.A.getFirstWishlistId(t.id) }));
    (0, C.fw)({ wishlistId: eg, userId: t.id });
    let eh = (0, V.fC)(),
        ej = (0, d.zhh)({ opacity: +(null != eh.interactionType), config: { duration: 150 } }),
        eC = (0, D.Nx)() ? null : H?.getBannerURL({ canAnimate: !1, size: 1024 }),
        eb = (0, ef.A)({ user: t, currentUser: l }),
        { analyticsLocations: eP } = (0, x.Ay)([...L, p.A.USER_PROFILE_MODAL_V2]),
        eO = (0, O.pb)({
            layout: "MODAL_V2",
            userId: t.id,
            sourceSessionId: I,
            guildId: M,
            channelId: A,
            messageId: j,
            roleId: v,
        }),
        e_ = b.Ay.useName(H?.guildId, A, t),
        eR = (0, h.GV)(),
        eS = eI.intl.format(eI.t.KRe1Fk, { name: e_ });
    return (0, n.jsx)(x.f5, {
        value: eP,
        children: (0, n.jsx)(O.of, {
            value: eO,
            isLoaded: H?.isLoaded,
            children: (0, n.jsx)(V.Hl, {
                value: eh,
                children: (0, n.jsx)(w.N, {
                    value: y,
                    children: (0, n.jsxs)(d.EOs, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: eN.root,
                        transitionState: E,
                        "aria-labelledby": eR,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, n.jsx)(ep.A, {
                                children: (0, n.jsxs)("div", {
                                    className: a()(eN.layoutContainer, {
                                        [eN.editingPanelEnabled]: Y,
                                        [eN.editingPanelExpanded]: Y && Q,
                                        [eN.isAnimating]: ee,
                                        [eN.hasPrivateBanner]: H?.private === !0,
                                    }),
                                    children: [
                                        (0, n.jsxs)(eT, {
                                            user: t,
                                            displayProfile: H,
                                            pendingThemeColors: Z,
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: eN.modalHeaderButtons,
                                                    children: [
                                                        (0, n.jsx)(er.A, { isCurrentUser: G, onClose: P }),
                                                        (0, n.jsx)(d.AC4, {
                                                            children: (0, n.jsx)(d.H, { id: eR, children: eS }),
                                                        }),
                                                        Y &&
                                                            (!Q || ee) &&
                                                            (0, n.jsx)(ed._T, {
                                                                buttonRef: ea,
                                                                onClick: ei,
                                                                className: eN.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                em &&
                                                    (0, n.jsx)(ed.oA, {
                                                        innerRef: eo,
                                                        onClick: ei,
                                                        className: eN.editingPanelExpandButtonDefault,
                                                    }),
                                            ],
                                        }),
                                        (0, n.jsxs)(d.Fmo, {
                                            children: [
                                                Y &&
                                                    el((e, l) =>
                                                        l
                                                            ? (0, n.jsx)(ed.Ay, {
                                                                  className: a()(eN.editingPanel, {
                                                                      [eN.isExpanded]: Q,
                                                                  }),
                                                                  user: t,
                                                                  selectedGuildId: B,
                                                                  onSelectGuildId: z,
                                                                  onClose: es,
                                                                  collapseButtonRef: eu,
                                                              })
                                                            : null,
                                                    ),
                                                (0, n.jsxs)(et.A, {
                                                    className: a()(U, eN.profileContentContainer),
                                                    user: t,
                                                    displayProfile: H,
                                                    themeType: ev.d.MODAL_V2,
                                                    pendingThemeColors: Z,
                                                    privateBanner: H?.private === !0 ? (0, n.jsx)(J.A, {}) : void 0,
                                                    children: [
                                                        null != eC &&
                                                            (0, n.jsx)("div", {
                                                                className: eN.backgroundImage,
                                                                style: { backgroundImage: `url(${eC})` },
                                                            }),
                                                        null != eh.interactionType &&
                                                            (0, n.jsx)(r.animated.div, {
                                                                style: ej,
                                                                className: eN.backdrop,
                                                            }),
                                                        (0, n.jsx)(eA.A, { className: eN.toast }),
                                                        (0, n.jsx)(eE, {
                                                            user: t,
                                                            currentUser: l,
                                                            guildId: M,
                                                            channelId: A,
                                                            displayProfile: H,
                                                            nickname: e_,
                                                            originGuildId: u,
                                                            hasEntered: E === d.ip4.ENTERED,
                                                            customStatusPrompt: T,
                                                            onClose: P,
                                                            avatarDecorationOverride: X,
                                                            avatarOverride: q,
                                                            allowEditing: Y,
                                                        }),
                                                        (0, n.jsx)(ex.A, {
                                                            user: t,
                                                            currentUser: l,
                                                            displayProfile: H,
                                                            guildId: M,
                                                            channelId: A,
                                                            items: eb,
                                                            initialSection: N,
                                                            onClose: P,
                                                        }),
                                                        null != K && (0, n.jsx)(f.A, { frame: K, layout: "MODAL_V2" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, n.jsx)(ec.A, { userId: t.id, guildId: M, className: eN.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
