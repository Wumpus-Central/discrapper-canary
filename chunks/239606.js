t.d(l, { A: () => eT });
var n = t(627968),
    i = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(687498),
    o = t(311907),
    d = t(397927),
    c = t(241524),
    u = t(770178),
    m = t(80682),
    x = t(793574),
    p = t(688810),
    A = t(351966),
    g = t(361628),
    f = t(744808),
    h = t(915089),
    j = t(713517),
    v = t(645507),
    I = t(922590),
    N = t(821269),
    y = t(437774),
    C = t(594832),
    E = t(994500),
    T = t(351906),
    b = t(562153),
    O = t(474090),
    P = t(183555),
    _ = t(622543),
    R = t(591179),
    S = t(950191),
    L = t(101928),
    D = t(837529),
    G = t(346713),
    U = t(484509),
    M = t(195898),
    k = t(486678),
    F = t(567915),
    w = t(716804),
    V = t(679492),
    B = t(718019),
    z = t(31432),
    W = t(915614),
    H = t(389996),
    $ = t(223330),
    K = t(559506),
    Y = t(361311),
    Z = t(886891),
    X = t(439053),
    q = t(743987),
    J = t(312381),
    Q = t(501193),
    ee = t(383448),
    el = t(946356),
    et = t(810396),
    en = t(159218),
    ei = t(280645),
    es = t(291335),
    ea = t(807651),
    er = t(463156),
    eo = t(510059),
    ed = t(546136),
    ec = t(982599),
    eu = t(399122),
    em = t(83013),
    ex = t(878210),
    ep = t(515054),
    eA = t(513265),
    eg = t(160983),
    ef = t(518477),
    eh = t(652215),
    ej = t(996988),
    ev = t(985018),
    eI = t(572841);
let eN = (e) => e * (2 - e),
    ey = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3J.SIZE_96, avatarOffsetX: 16 } };
function eC(e) {
    let {
            user: l,
            currentUser: t,
            guildId: s,
            originGuildId: r,
            channelId: c,
            displayProfile: m,
            nickname: x,
            hasEntered: p,
            customStatusPrompt: g,
            onClose: f,
            avatarDecorationOverride: h,
            avatarOverride: C,
        } = e,
        b = l.id === t.id,
        P = i.useRef(null),
        _ = (0, j.M)(P),
        [R, S] = i.useState(),
        L = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? S("compact-xs") : l <= 380 ? S("compact-sm") : S(void 0);
        }, []);
    (0, u.g)(P, L, [], { fireOnMount: !0 });
    let D = null != R ? ey[R] : void 0,
        M = i.useMemo(() => g ?? (0, v.A)(), [g]),
        { relationshipType: k, originApplicationId: F } = (0, o.cf)([E.A], () => ({
            relationshipType: E.A.getRelationshipType(l.id),
            originApplicationId: E.A.getOriginApplicationId(l.id),
        })),
        w = (0, o.bG)([T.A], () => T.A.hidePersonalInformation),
        V = (0, N.q)({ userId: l.id }),
        J = (0, I.fi)(l.id),
        er = (0, U.A)(l.id),
        ed = (0, G.A)(l.id);
    return (0, n.jsxs)("main", {
        className: a()(eI.profile, null != R && eI[R]),
        ref: P,
        children: [
            (0, n.jsxs)("div", {
                className: eI.profileHeader,
                children: [
                    (0, n.jsx)(W.A, { user: l, displayProfile: m, themeType: ej.d.MODAL_V2, specOverrides: D }),
                    (0, n.jsx)(X.A, { userId: l.id, onClose: f, className: eI.interactionToast }),
                    (0, n.jsx)(B.A, {
                        user: l,
                        displayProfile: m,
                        guildId: s,
                        channelId: c,
                        themeType: ej.d.MODAL_V2,
                        specOverrides: D,
                        avatarDecorationOverride: h,
                        avatarOverride: C,
                    }),
                    (0, n.jsx)(en.A, {
                        user: l,
                        guildId: s,
                        channelId: c,
                        themeType: ej.d.MODAL_V2,
                        hasEntered: p,
                        prompt: b ? M : null,
                    }),
                ],
            }),
            (0, n.jsxs)(d.HOs, {
                fade: !0,
                className: eI.profileBody,
                children: [
                    (0, n.jsx)(K.A, { userId: l.id }),
                    (0, n.jsx)(et.A, {
                        user: l,
                        guildId: m?.guildId ?? void 0,
                        onClose: f,
                        nickname: x,
                        nicknameVariant: "heading-xl/semibold",
                        pronouns: m?.pronouns,
                        tags: (0, n.jsx)(z.A, { displayProfile: m, themeType: ej.d.MODAL_V2, onClose: f }),
                    }),
                    k === eh.eA$.PENDING_INCOMING &&
                        (0, n.jsx)(el.A.Overlay, {
                            className: eI.profileOverlay,
                            children: (0, n.jsx)(Z.A, {
                                user: l,
                                applicationId: F,
                                guildId: m?.guildId ?? void 0,
                                channelId: c,
                                className: eI.profileBanner,
                            }),
                        }),
                    J.map((e) => {
                        let { applicationId: t } = e;
                        return (0, n.jsx)(
                            el.A.Overlay,
                            {
                                className: eI.profileOverlay,
                                children: (0, n.jsx)(Z.A, {
                                    user: l,
                                    guildId: m?.guildId ?? void 0,
                                    channelId: c,
                                    isGameRelationship: !0,
                                    applicationId: t,
                                    className: eI.profileBanner,
                                }),
                            },
                            t,
                        );
                    }),
                    l.isProvisional &&
                        (0, n.jsx)(el.A.Overlay, {
                            className: eI.profileOverlay,
                            children: (0, n.jsx)(em.A, {
                                heading: ev.intl.string(ev.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, n.jsx)(d.EpV, { size: "xs", color: "currentColor" }),
                                className: eI.profileBanner,
                                children: (0, n.jsx)(y.T, { userId: l.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    b && (0, n.jsx)($.A, { isPremiumUser: (0, O.ki)(t), onInteraction: f }),
                    (0, n.jsx)(ee.A, { user: l, className: eI.profileBanner }),
                    m?.private &&
                        (0, n.jsx)(el.A.Overlay, {
                            className: eI.profileOverlay,
                            children: (0, n.jsx)(Q.A, { username: x }),
                        }),
                    (0, n.jsx)("div", {
                        className: eI.profileButtons,
                        children: (0, n.jsx)(ea.A, {
                            user: l,
                            currentUser: t,
                            guildId: s,
                            originGuildId: r,
                            channelId: c,
                            displayProfile: m,
                            relationshipType: k,
                            onClose: f,
                        }),
                    }),
                    !w && (0, n.jsx)(H.E, { userBio: m?.bio, setLineClamp: !1 }),
                    V.length > 0 &&
                        (0, n.jsx)(em.A, {
                            heading: ev.intl.string(ev.t["Uv/eTx"]),
                            children: (0, n.jsx)(Y.A, { applicationIds: V }),
                        }),
                    (0, n.jsx)(em.A, {
                        heading: ev.intl.string(ev.t.a6XYD9),
                        children: (0, n.jsx)(q.A, { userId: l.id, guildId: m?.guildId, tooltipDelay: ef.In }),
                    }),
                    m?.guildId != null &&
                        (0, n.jsx)(ei.A, {
                            userId: l.id,
                            guildId: m.guildId,
                            className: eI.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "currentColor",
                        }),
                    er.length > 0 &&
                        (0, n.jsx)(em.A, {
                            heading: ev.intl.string(ev.t["3fe7U5"]),
                            scrollTargetId: ef.bk.CONNECTIONS,
                            children: (0, n.jsx)(eo.A, {
                                connections: er,
                                userId: l.id,
                                className: eI.profileAppConnections,
                            }),
                        }),
                    ed.length > 0 &&
                        (0, n.jsx)(em.A, {
                            heading: ev.intl.string(ev.t.PHjkRE),
                            scrollTargetId: ef.bk.APPS,
                            children: (0, n.jsx)(es.A, {
                                applicationRoleConnections: ed,
                                onClose: f,
                                className: eI.profileAppConnections,
                            }),
                        }),
                    (0, n.jsx)(eu.A, { userId: l.id }),
                ],
            }),
            m?.profileEffect != null && (0, n.jsx)(A.A, { skuId: m?.profileEffect.skuId, isHovering: _ }),
        ],
    });
}
function eE(e) {
    let { user: l, displayProfile: t, pendingThemeColors: i, children: s } = e,
        {
            theme: a,
            primaryColor: r,
            secondaryColor: o,
        } = (0, L.A)({ user: l, displayProfile: t, pendingThemeColors: i }),
        { profileThemeStyle: d, profileThemeClassName: c } = (0, M.A)({
            theme: a,
            themeType: null,
            primaryColor: r,
            secondaryColor: o,
        });
    return (0, n.jsx)("div", { className: c, style: d, children: s });
}
function eT(e) {
    let {
            user: l,
            currentUser: t,
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
            onClose: O,
            sourceAnalyticsLocations: L = [],
            themeContainerClassName: G,
        } = e,
        U = l.id === t.id,
        { guildId: M, pendingGuildId: B, selectUserProfile: z } = (0, F.A)({ userId: l.id, initialGuildId: s }),
        W = i.useMemo(() => (null != M ? { [M]: [l.id] } : {}), [M, l.id]);
    (0, m.Eq)(W, "UserProfileModalV2");
    let H = (0, S.Ay)(l.id, M),
        $ = (0, g.A)(H?.profileFrame?.skuId, "UserProfileModalV2"),
        K = (0, R.X)("UserProfileModalV2"),
        Y = U && K,
        {
            pendingThemeColors: Z,
            avatarDecorationOverride: X,
            avatarOverride: q,
        } = (0, k.A)({ user: l, allowEditingInModal: Y, guildId: M }),
        {
            isExpanded: Q,
            isAnimating: ee,
            transition: et,
            canShowExpand: en,
            handleExpand: ei,
            handleCollapse: es,
            refs: { expandIconButtonRef: ea, expandTabButtonRef: eo, collapseButtonRef: eu },
        } = (function () {
            let [e, l] = i.useState(() => window.innerWidth > 928),
                [t, n] = i.useState(!1),
                s = (0, d.pnh)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: eN },
                    onRest: () => n(!1),
                }),
                a = (0, c.A)("(min-width: 929px) and (min-height: 550px)"),
                r = i.useRef(null),
                o = i.useRef(null),
                u = i.useRef(null),
                m = i.useRef(null),
                x = i.useCallback(() => {
                    (m.current = "collapse"), n(!0), l(!0);
                }, []),
                p = i.useCallback(() => {
                    (m.current = "expand"), n(!0), l(!1);
                }, []);
            return (
                i.useEffect(() => {
                    if (!t) {
                        if ("collapse" === m.current && e) (m.current = null), u.current?.focus();
                        else if ("expand" === m.current && !e) {
                            m.current = null;
                            let e = a ? o.current : r.current;
                            e?.focus();
                        }
                    }
                }, [e, t, a]),
                {
                    isExpanded: e,
                    isAnimating: t,
                    transition: s,
                    canShowExpand: !e && !t,
                    handleExpand: x,
                    handleCollapse: p,
                    refs: { expandIconButtonRef: r, expandTabButtonRef: o, collapseButtonRef: u },
                }
            );
        })(),
        em = Y && en,
        { defaultWishlistId: ef } = (0, o.cf)([_.A], () => ({ defaultWishlistId: _.A.getFirstWishlistId(l.id) }));
    (0, C.fw)({ wishlistId: ef, userId: l.id });
    let eh = (0, V.fC)(),
        ey = (0, d.zhh)({ opacity: +(null != eh.interactionType), config: { duration: 150 } }),
        eT = (0, D.Nx)() ? null : H?.getBannerURL({ canAnimate: !1, size: 1024 }),
        eb = (0, eg.A)({ user: l, currentUser: t }),
        { analyticsLocations: eO } = (0, p.Ay)([...L, x.A.USER_PROFILE_MODAL_V2]),
        eP = (0, P.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: I,
            guildId: M,
            channelId: A,
            messageId: j,
            roleId: v,
        }),
        e_ = b.Ay.useName(H?.guildId, A, l),
        eR = (0, h.GV)(),
        eS = ev.intl.format(ev.t.KRe1Fk, { name: e_ });
    return (0, n.jsx)(p.f5, {
        value: eO,
        children: (0, n.jsx)(P.of, {
            value: eP,
            isLoaded: H?.isLoaded,
            children: (0, n.jsx)(V.Hl, {
                value: eh,
                children: (0, n.jsx)(w.N, {
                    value: y,
                    children: (0, n.jsxs)(d.EOs, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: eI.root,
                        transitionState: E,
                        "aria-labelledby": eR,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, n.jsx)(ex.A, {
                                children: (0, n.jsxs)("div", {
                                    className: a()(eI.layoutContainer, {
                                        [eI.editingPanelEnabled]: Y,
                                        [eI.editingPanelExpanded]: Y && Q,
                                        [eI.isAnimating]: ee,
                                        [eI.hasPrivateBanner]: H?.private === !0,
                                    }),
                                    children: [
                                        (0, n.jsxs)(eE, {
                                            user: l,
                                            displayProfile: H,
                                            pendingThemeColors: Z,
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: eI.modalHeaderButtons,
                                                    children: [
                                                        (0, n.jsx)(er.A, { isCurrentUser: U, onClose: O }),
                                                        (0, n.jsx)(d.AC4, {
                                                            children: (0, n.jsx)(d.H, { id: eR, children: eS }),
                                                        }),
                                                        Y &&
                                                            (!Q || ee) &&
                                                            (0, n.jsx)(ed._T, {
                                                                buttonRef: ea,
                                                                onClick: ei,
                                                                className: eI.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                em &&
                                                    (0, n.jsx)(ed.oA, {
                                                        innerRef: eo,
                                                        onClick: ei,
                                                        className: eI.editingPanelExpandButtonDefault,
                                                    }),
                                            ],
                                        }),
                                        (0, n.jsxs)(d.Fmo, {
                                            children: [
                                                Y &&
                                                    et((e, t) =>
                                                        t
                                                            ? (0, n.jsx)(ed.Ay, {
                                                                  className: a()(eI.editingPanel, {
                                                                      [eI.isExpanded]: Q,
                                                                  }),
                                                                  user: l,
                                                                  selectedGuildId: B,
                                                                  onSelectGuildId: z,
                                                                  onClose: es,
                                                                  collapseButtonRef: eu,
                                                              })
                                                            : null,
                                                    ),
                                                (0, n.jsxs)(el.A, {
                                                    className: a()(G, eI.profileContentContainer),
                                                    user: l,
                                                    displayProfile: H,
                                                    themeType: ej.d.MODAL_V2,
                                                    pendingThemeColors: Z,
                                                    privateBanner: H?.private === !0 ? (0, n.jsx)(J.A, {}) : void 0,
                                                    children: [
                                                        null != eT &&
                                                            (0, n.jsx)("div", {
                                                                className: eI.backgroundImage,
                                                                style: { backgroundImage: `url(${eT})` },
                                                            }),
                                                        null != eh.interactionType &&
                                                            (0, n.jsx)(r.animated.div, {
                                                                style: ey,
                                                                className: eI.backdrop,
                                                            }),
                                                        (0, n.jsx)(eA.A, { className: eI.toast }),
                                                        (0, n.jsx)(eC, {
                                                            user: l,
                                                            currentUser: t,
                                                            guildId: M,
                                                            channelId: A,
                                                            displayProfile: H,
                                                            nickname: e_,
                                                            originGuildId: u,
                                                            hasEntered: E === d.ip4.ENTERED,
                                                            customStatusPrompt: T,
                                                            onClose: O,
                                                            avatarDecorationOverride: X,
                                                            avatarOverride: q,
                                                        }),
                                                        (0, n.jsx)(ep.A, {
                                                            user: l,
                                                            currentUser: t,
                                                            displayProfile: H,
                                                            guildId: M,
                                                            channelId: A,
                                                            items: eb,
                                                            initialSection: N,
                                                            onClose: O,
                                                        }),
                                                        null != $ && (0, n.jsx)(f.A, { frame: $, layout: "MODAL_V2" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, n.jsx)(ec.A, { userId: l.id, guildId: M, className: eI.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
