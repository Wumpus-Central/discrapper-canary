i.d(l, { A: () => eE });
var t = i(627968),
    n = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(687498),
    o = i(311907),
    d = i(397927),
    c = i(770178),
    u = i(80682),
    m = i(793574),
    x = i(688810),
    A = i(351966),
    p = i(361628),
    g = i(744808),
    f = i(915089),
    h = i(713517),
    j = i(645507),
    I = i(922590),
    v = i(821269),
    N = i(437774),
    y = i(594832),
    E = i(994500),
    C = i(351906),
    T = i(562153),
    _ = i(474090),
    b = i(183555),
    P = i(622543),
    O = i(591179),
    S = i(950191),
    R = i(101928),
    L = i(837529),
    G = i(346713),
    U = i(484509),
    M = i(195898),
    D = i(567915),
    F = i(716804),
    k = i(679492),
    w = i(718019),
    V = i(31432),
    B = i(915614),
    z = i(389996),
    W = i(223330),
    H = i(559506),
    K = i(361311),
    $ = i(886891),
    Z = i(439053),
    X = i(743987),
    J = i(312381),
    Y = i(501193),
    q = i(383448),
    Q = i(946356),
    ee = i(810396),
    el = i(159218),
    ei = i(280645),
    et = i(291335),
    en = i(807651),
    es = i(463156),
    ea = i(510059),
    er = i(546136),
    eo = i(982599),
    ed = i(399122),
    ec = i(83013),
    eu = i(878210),
    em = i(515054),
    ex = i(513265),
    eA = i(160983),
    ep = i(518477),
    eg = i(652215),
    ef = i(996988),
    eh = i(985018),
    ej = i(572841);
let eI = (e) => e * (2 - e),
    ev = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3J.SIZE_96, avatarOffsetX: 16 } };
function eN(e) {
    let {
            user: l,
            currentUser: i,
            guildId: s,
            originGuildId: r,
            channelId: u,
            displayProfile: m,
            nickname: x,
            hasEntered: p,
            customStatusPrompt: g,
            onClose: f,
        } = e,
        y = l.id === i.id,
        T = n.useRef(null),
        b = (0, h.M)(T),
        [P, O] = n.useState(),
        S = n.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? O("compact-xs") : l <= 380 ? O("compact-sm") : O(void 0);
        }, []);
    (0, c.g)(T, S, [], { fireOnMount: !0 });
    let R = null != P ? ev[P] : void 0,
        L = n.useMemo(() => g ?? (0, j.A)(), [g]),
        { relationshipType: M, originApplicationId: D } = (0, o.cf)([E.A], () => ({
            relationshipType: E.A.getRelationshipType(l.id),
            originApplicationId: E.A.getOriginApplicationId(l.id),
        })),
        F = (0, o.bG)([C.A], () => C.A.hidePersonalInformation),
        k = (0, v.q)({ userId: l.id }),
        J = (0, I.fi)(l.id),
        es = (0, U.A)(l.id),
        er = (0, G.A)(l.id);
    return (0, t.jsxs)("main", {
        className: a()(ej.profile, null != P && ej[P]),
        ref: T,
        children: [
            (0, t.jsxs)("div", {
                className: ej.profileHeader,
                children: [
                    (0, t.jsx)(B.A, { user: l, displayProfile: m, themeType: ef.d.MODAL_V2, specOverrides: R }),
                    (0, t.jsx)(Z.A, { userId: l.id, onClose: f, className: ej.interactionToast }),
                    (0, t.jsx)(w.A, {
                        user: l,
                        displayProfile: m,
                        guildId: s,
                        channelId: u,
                        themeType: ef.d.MODAL_V2,
                        specOverrides: R,
                    }),
                    (0, t.jsx)(el.A, {
                        user: l,
                        guildId: s,
                        channelId: u,
                        themeType: ef.d.MODAL_V2,
                        hasEntered: p,
                        prompt: y ? L : null,
                    }),
                ],
            }),
            (0, t.jsxs)(d.HOs, {
                fade: !0,
                className: ej.profileBody,
                children: [
                    (0, t.jsx)(H.A, { userId: l.id }),
                    (0, t.jsx)(ee.A, {
                        user: l,
                        guildId: m?.guildId ?? void 0,
                        onClose: f,
                        nickname: x,
                        nicknameVariant: "heading-xl/semibold",
                        pronouns: m?.pronouns,
                        tags: (0, t.jsx)(V.A, { displayProfile: m, themeType: ef.d.MODAL_V2, onClose: f }),
                    }),
                    M === eg.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(Q.A.Overlay, {
                            className: ej.profileOverlay,
                            children: (0, t.jsx)($.A, {
                                user: l,
                                applicationId: D,
                                guildId: m?.guildId ?? void 0,
                                channelId: u,
                                className: ej.profileBanner,
                            }),
                        }),
                    J.map((e) => {
                        let { applicationId: i } = e;
                        return (0, t.jsx)(
                            Q.A.Overlay,
                            {
                                className: ej.profileOverlay,
                                children: (0, t.jsx)($.A, {
                                    user: l,
                                    guildId: m?.guildId ?? void 0,
                                    channelId: u,
                                    isGameRelationship: !0,
                                    applicationId: i,
                                    className: ej.profileBanner,
                                }),
                            },
                            i,
                        );
                    }),
                    l.isProvisional &&
                        (0, t.jsx)(Q.A.Overlay, {
                            className: ej.profileOverlay,
                            children: (0, t.jsx)(ec.A, {
                                heading: eh.intl.string(eh.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(d.EpV, { size: "xs", color: "currentColor" }),
                                className: ej.profileBanner,
                                children: (0, t.jsx)(N.T, { userId: l.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    y && (0, t.jsx)(W.A, { isPremiumUser: (0, _.ki)(i), onInteraction: f }),
                    (0, t.jsx)(q.A, { user: l, className: ej.profileBanner }),
                    m?.private &&
                        (0, t.jsx)(Q.A.Overlay, {
                            className: ej.profileOverlay,
                            children: (0, t.jsx)(Y.A, { username: x }),
                        }),
                    (0, t.jsx)("div", {
                        className: ej.profileButtons,
                        children: (0, t.jsx)(en.A, {
                            user: l,
                            currentUser: i,
                            guildId: s,
                            originGuildId: r,
                            channelId: u,
                            displayProfile: m,
                            relationshipType: M,
                            onClose: f,
                        }),
                    }),
                    !F && (0, t.jsx)(z.E, { userBio: m?.bio, setLineClamp: !1 }),
                    k.length > 0 &&
                        (0, t.jsx)(ec.A, {
                            heading: eh.intl.string(eh.t["Uv/eTx"]),
                            children: (0, t.jsx)(K.A, { applicationIds: k }),
                        }),
                    (0, t.jsx)(ec.A, {
                        heading: eh.intl.string(eh.t.a6XYD9),
                        children: (0, t.jsx)(X.A, { userId: l.id, guildId: m?.guildId, tooltipDelay: ep.In }),
                    }),
                    m?.guildId != null &&
                        (0, t.jsx)(ei.A, {
                            userId: l.id,
                            guildId: m.guildId,
                            className: ej.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "currentColor",
                        }),
                    es.length > 0 &&
                        (0, t.jsx)(ec.A, {
                            heading: eh.intl.string(eh.t["3fe7U5"]),
                            scrollTargetId: ep.bk.CONNECTIONS,
                            children: (0, t.jsx)(ea.A, {
                                connections: es,
                                userId: l.id,
                                className: ej.profileAppConnections,
                            }),
                        }),
                    er.length > 0 &&
                        (0, t.jsx)(ec.A, {
                            heading: eh.intl.string(eh.t.PHjkRE),
                            scrollTargetId: ep.bk.APPS,
                            children: (0, t.jsx)(et.A, {
                                applicationRoleConnections: er,
                                onClose: f,
                                className: ej.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(ed.A, { userId: l.id }),
                ],
            }),
            m?.profileEffect != null && (0, t.jsx)(A.A, { skuId: m?.profileEffect.skuId, isHovering: b }),
        ],
    });
}
function ey(e) {
    let { user: l, displayProfile: i, children: n } = e,
        { theme: s, primaryColor: a, secondaryColor: r } = (0, R.A)({ user: l, displayProfile: i }),
        { profileThemeStyle: o, profileThemeClassName: d } = (0, M.A)({
            theme: s,
            themeType: null,
            primaryColor: a,
            secondaryColor: r,
        });
    return (0, t.jsx)("div", { className: d, style: o, children: n });
}
function eE(e) {
    let {
            user: l,
            currentUser: i,
            guildId: s,
            originGuildId: c,
            channelId: A,
            messageId: h,
            roleId: j,
            sessionId: I,
            initialTabSection: v,
            initialScrollTarget: N,
            transitionState: E,
            customStatusPrompt: C,
            onClose: _,
            sourceAnalyticsLocations: R = [],
            themeContainerClassName: G,
        } = e,
        U = l.id === i.id,
        { guildId: M, pendingGuildId: w, selectUserProfile: V } = (0, D.A)({ userId: l.id, initialGuildId: s }),
        B = n.useMemo(() => (null != M ? { [M]: [l.id] } : {}), [M, l.id]);
    (0, u.Eq)(B, "UserProfileModalV2");
    let z = (0, S.Ay)(l.id, M),
        W = (0, p.A)(z?.profileFrame?.skuId, "UserProfileModalV2"),
        H = (0, O.X)("UserProfileModalV2"),
        K = U && H,
        {
            isExpanded: $,
            isAnimating: Z,
            transition: X,
            toggle: Y,
        } = (function () {
            let [e, l] = n.useState(() => window.innerWidth > 928),
                [i, t] = n.useState(!1),
                s = (0, d.pnh)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: eI },
                    onRest: () => t(!1),
                });
            return {
                isExpanded: e,
                isAnimating: i,
                transition: s,
                toggle: n.useCallback((e) => {
                    l((l) => (l === e ? l : (t(!0), e)));
                }, []),
            };
        })(),
        q = K && !$ && !Z,
        { defaultWishlistId: ee } = (0, o.cf)([P.A], () => ({ defaultWishlistId: P.A.getFirstWishlistId(l.id) }));
    (0, y.fw)({ wishlistId: ee, userId: l.id });
    let el = (0, k.fC)(),
        ei = (0, d.zhh)({ opacity: +(null != el.interactionType), config: { duration: 150 } }),
        et = (0, L.Nx)() ? null : z?.getBannerURL({ canAnimate: !1, size: 1024 }),
        en = (0, eA.A)({ user: l, currentUser: i }),
        { analyticsLocations: ea } = (0, x.Ay)([...R, m.A.USER_PROFILE_MODAL_V2]),
        ed = (0, b.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: I,
            guildId: M,
            channelId: A,
            messageId: h,
            roleId: j,
        }),
        ec = T.Ay.useName(z?.guildId, A, l),
        ep = (0, f.GV)(),
        eg = eh.intl.format(eh.t.KRe1Fk, { name: ec });
    return (0, t.jsx)(x.f5, {
        value: ea,
        children: (0, t.jsx)(b.of, {
            value: ed,
            isLoaded: z?.isLoaded,
            children: (0, t.jsx)(k.Hl, {
                value: el,
                children: (0, t.jsx)(F.N, {
                    value: N,
                    children: (0, t.jsxs)(d.EOs, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: ej.root,
                        transitionState: E,
                        "aria-labelledby": ep,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(eu.A, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(ej.layoutContainer, {
                                        [ej.editingPanelEnabled]: K,
                                        [ej.editingPanelExpanded]: K && $,
                                        [ej.isAnimating]: Z,
                                        [ej.hasPrivateBanner]: z?.private === !0,
                                    }),
                                    children: [
                                        (0, t.jsxs)(ey, {
                                            user: l,
                                            displayProfile: z,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: ej.modalHeaderButtons,
                                                    children: [
                                                        (0, t.jsx)(es.A, { isCurrentUser: U, onClose: _ }),
                                                        (0, t.jsx)(d.AC4, {
                                                            children: (0, t.jsx)(d.H, { id: ep, children: eg }),
                                                        }),
                                                        K &&
                                                            (!$ || Z) &&
                                                            (0, t.jsx)(er._T, {
                                                                onClick: () => Y(!0),
                                                                className: ej.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                q &&
                                                    (0, t.jsx)(er.oA, {
                                                        onClick: () => Y(!0),
                                                        className: ej.editingPanelExpandButtonDefault,
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(d.Fmo, {
                                            children: [
                                                K &&
                                                    X((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(er.Ay, {
                                                                  className: a()(ej.editingPanel, {
                                                                      [ej.isExpanded]: $,
                                                                  }),
                                                                  selectedGuildId: w,
                                                                  onSelectGuildId: V,
                                                                  onClose: () => Y(!1),
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(Q.A, {
                                                    className: a()(G, ej.profileContentContainer),
                                                    user: l,
                                                    displayProfile: z,
                                                    themeType: ef.d.MODAL_V2,
                                                    privateBanner: z?.private === !0 ? (0, t.jsx)(J.A, {}) : void 0,
                                                    children: [
                                                        null != et &&
                                                            (0, t.jsx)("div", {
                                                                className: ej.backgroundImage,
                                                                style: { backgroundImage: `url(${et})` },
                                                            }),
                                                        null != el.interactionType &&
                                                            (0, t.jsx)(r.animated.div, {
                                                                style: ei,
                                                                className: ej.backdrop,
                                                            }),
                                                        (0, t.jsx)(ex.A, { className: ej.toast }),
                                                        (0, t.jsx)(eN, {
                                                            user: l,
                                                            currentUser: i,
                                                            guildId: M,
                                                            channelId: A,
                                                            displayProfile: z,
                                                            nickname: ec,
                                                            originGuildId: c,
                                                            hasEntered: E === d.ip4.ENTERED,
                                                            customStatusPrompt: C,
                                                            onClose: _,
                                                        }),
                                                        (0, t.jsx)(em.A, {
                                                            user: l,
                                                            currentUser: i,
                                                            displayProfile: z,
                                                            guildId: M,
                                                            channelId: A,
                                                            items: en,
                                                            initialSection: v,
                                                            onClose: _,
                                                        }),
                                                        null != W && (0, t.jsx)(g.A, { frame: W, layout: "MODAL_V2" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, t.jsx)(eo.A, { userId: l.id, className: ej.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
