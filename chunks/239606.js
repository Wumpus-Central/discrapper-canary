t.d(l, { A: () => eN });
var i = t(627968),
    n = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(880013),
    o = t(311907),
    d = t(397927),
    c = t(770178),
    u = t(80682),
    m = t(793574),
    A = t(688810),
    p = t(351966),
    x = t(361628),
    g = t(744808),
    f = t(915089),
    h = t(713517),
    j = t(645507),
    I = t(922590),
    v = t(821269),
    N = t(437774),
    y = t(594832),
    E = t(994500),
    T = t(351906),
    C = t(562153),
    _ = t(474090),
    b = t(183555),
    P = t(622543),
    O = t(591179),
    S = t(950191),
    R = t(101928),
    L = t(837529),
    G = t(346713),
    U = t(484509),
    M = t(195898),
    D = t(567915),
    F = t(716804),
    k = t(679492),
    w = t(718019),
    V = t(31432),
    B = t(915614),
    z = t(389996),
    W = t(223330),
    $ = t(559506),
    K = t(361311),
    H = t(886891),
    Z = t(439053),
    J = t(743987),
    Y = t(312381),
    X = t(501193),
    q = t(383448),
    Q = t(946356),
    ee = t(810396),
    el = t(159218),
    et = t(280645),
    ei = t(291335),
    en = t(807651),
    es = t(463156),
    ea = t(510059),
    er = t(546136),
    eo = t(982599),
    ed = t(399122),
    ec = t(83013),
    eu = t(878210),
    em = t(515054),
    eA = t(513265),
    ep = t(160983),
    ex = t(518477),
    eg = t(652215),
    ef = t(996988),
    eh = t(985018),
    ej = t(87862);
let eI = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3J.SIZE_96, avatarOffsetX: 16 } };
function ev(e) {
    let {
            user: l,
            currentUser: t,
            guildId: s,
            originGuildId: r,
            channelId: u,
            displayProfile: m,
            nickname: A,
            hasEntered: x,
            customStatusPrompt: g,
            onClose: f,
        } = e,
        y = l.id === t.id,
        C = n.useRef(null),
        b = (0, h.M)(C),
        [P, O] = n.useState(),
        S = n.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? O("compact-xs") : l <= 380 ? O("compact-sm") : O(void 0);
        }, []);
    (0, c.g)(C, S, [], { fireOnMount: !0 });
    let R = null != P ? eI[P] : void 0,
        L = n.useMemo(() => g ?? (0, j.A)(), [g]),
        { relationshipType: M, originApplicationId: D } = (0, o.cf)([E.A], () => ({
            relationshipType: E.A.getRelationshipType(l.id),
            originApplicationId: E.A.getOriginApplicationId(l.id),
        })),
        F = (0, o.bG)([T.A], () => T.A.hidePersonalInformation),
        k = (0, v.q)({ userId: l.id }),
        Y = (0, I.fi)(l.id),
        es = (0, U.A)(l.id),
        er = (0, G.A)(l.id);
    return (0, i.jsxs)("main", {
        className: a()(ej.profile, null != P && ej[P]),
        ref: C,
        children: [
            (0, i.jsxs)("div", {
                className: ej.profileHeader,
                children: [
                    (0, i.jsx)(B.A, { user: l, displayProfile: m, themeType: ef.d.MODAL_V2, specOverrides: R }),
                    (0, i.jsx)(Z.A, { userId: l.id, onClose: f, className: ej.interactionToast }),
                    (0, i.jsx)(w.A, {
                        user: l,
                        displayProfile: m,
                        guildId: s,
                        channelId: u,
                        themeType: ef.d.MODAL_V2,
                        specOverrides: R,
                    }),
                    (0, i.jsx)(el.A, {
                        user: l,
                        guildId: s,
                        channelId: u,
                        themeType: ef.d.MODAL_V2,
                        hasEntered: x,
                        prompt: y ? L : null,
                    }),
                ],
            }),
            (0, i.jsxs)(d.HOs, {
                fade: !0,
                className: ej.profileBody,
                children: [
                    (0, i.jsx)($.A, { userId: l.id }),
                    (0, i.jsx)(ee.A, {
                        user: l,
                        guildId: m?.guildId ?? void 0,
                        onClose: f,
                        nickname: A,
                        nicknameVariant: "heading-xl/semibold",
                        pronouns: m?.pronouns,
                        tags: (0, i.jsx)(V.A, { displayProfile: m, themeType: ef.d.MODAL_V2, onClose: f }),
                    }),
                    M === eg.eA$.PENDING_INCOMING &&
                        (0, i.jsx)(Q.A.Overlay, {
                            className: ej.profileOverlay,
                            children: (0, i.jsx)(H.A, {
                                user: l,
                                applicationId: D,
                                guildId: m?.guildId ?? void 0,
                                channelId: u,
                                className: ej.profileBanner,
                            }),
                        }),
                    Y.map((e) => {
                        let { applicationId: t } = e;
                        return (0, i.jsx)(
                            Q.A.Overlay,
                            {
                                className: ej.profileOverlay,
                                children: (0, i.jsx)(H.A, {
                                    user: l,
                                    guildId: m?.guildId ?? void 0,
                                    channelId: u,
                                    isGameRelationship: !0,
                                    applicationId: t,
                                    className: ej.profileBanner,
                                }),
                            },
                            t,
                        );
                    }),
                    l.isProvisional &&
                        (0, i.jsx)(Q.A.Overlay, {
                            className: ej.profileOverlay,
                            children: (0, i.jsx)(ec.A, {
                                heading: eh.intl.string(eh.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, i.jsx)(d.EpV, { size: "xs", color: "currentColor" }),
                                className: ej.profileBanner,
                                children: (0, i.jsx)(N.T, { userId: l.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    y && (0, i.jsx)(W.A, { isPremiumUser: (0, _.ki)(t), onInteraction: f }),
                    (0, i.jsx)(q.A, { user: l, className: ej.profileBanner }),
                    m?.private &&
                        (0, i.jsx)(Q.A.Overlay, {
                            className: ej.profileOverlay,
                            children: (0, i.jsx)(X.A, { username: A }),
                        }),
                    (0, i.jsx)("div", {
                        className: ej.profileButtons,
                        children: (0, i.jsx)(en.A, {
                            user: l,
                            currentUser: t,
                            guildId: s,
                            originGuildId: r,
                            channelId: u,
                            displayProfile: m,
                            relationshipType: M,
                            onClose: f,
                        }),
                    }),
                    !F && (0, i.jsx)(z.E, { userBio: m?.bio, setLineClamp: !1 }),
                    k.length > 0 &&
                        (0, i.jsx)(ec.A, {
                            heading: eh.intl.string(eh.t["Uv/eTx"]),
                            children: (0, i.jsx)(K.A, { applicationIds: k }),
                        }),
                    (0, i.jsx)(ec.A, {
                        heading: eh.intl.string(eh.t.a6XYD9),
                        children: (0, i.jsx)(J.A, { userId: l.id, guildId: m?.guildId, tooltipDelay: ex.In }),
                    }),
                    m?.guildId != null &&
                        (0, i.jsx)(et.A, {
                            userId: l.id,
                            guildId: m.guildId,
                            className: ej.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "currentColor",
                        }),
                    es.length > 0 &&
                        (0, i.jsx)(ec.A, {
                            heading: eh.intl.string(eh.t["3fe7U5"]),
                            scrollTargetId: ex.bk.CONNECTIONS,
                            children: (0, i.jsx)(ea.A, {
                                connections: es,
                                userId: l.id,
                                className: ej.profileAppConnections,
                            }),
                        }),
                    er.length > 0 &&
                        (0, i.jsx)(ec.A, {
                            heading: eh.intl.string(eh.t.PHjkRE),
                            scrollTargetId: ex.bk.APPS,
                            children: (0, i.jsx)(ei.A, {
                                applicationRoleConnections: er,
                                onClose: f,
                                className: ej.profileAppConnections,
                            }),
                        }),
                    (0, i.jsx)(ed.A, { userId: l.id }),
                ],
            }),
            m?.profileEffect != null && (0, i.jsx)(p.A, { skuId: m?.profileEffect.skuId, isHovering: b }),
        ],
    });
}
function eN(e) {
    let {
            user: l,
            currentUser: t,
            guildId: s,
            originGuildId: c,
            channelId: p,
            messageId: h,
            roleId: j,
            sessionId: I,
            initialTabSection: v,
            initialScrollTarget: N,
            transitionState: E,
            customStatusPrompt: T,
            onClose: _,
            sourceAnalyticsLocations: G = [],
            themeContainerClassName: U,
        } = e,
        w = l.id === t.id,
        { guildId: V, pendingGuildId: B, selectUserProfile: z } = (0, D.A)({ userId: l.id, initialGuildId: s }),
        W = n.useMemo(() => (null != V ? { [V]: [l.id] } : {}), [V, l.id]);
    (0, u.Eq)(W, "UserProfileModalV2");
    let $ = (0, S.Ay)(l.id, V),
        K = (0, x.A)($?.profileFrame?.skuId, "UserProfileModalV2"),
        H = (0, O.X)("UserProfileModalV2"),
        Z = w && H,
        [J, X] = n.useState(!0),
        { theme: q, primaryColor: ee, secondaryColor: el } = (0, R.A)({ user: l, displayProfile: $ }),
        { profileThemeStyle: et, profileThemeClassName: ei } = (0, M.A)({
            theme: q,
            themeType: null,
            primaryColor: ee,
            secondaryColor: el,
        }),
        { defaultWishlistId: en } = (0, o.cf)([P.A], () => ({ defaultWishlistId: P.A.getFirstWishlistId(l.id) }));
    (0, y.fw)({ wishlistId: en, userId: l.id });
    let ea = (0, k.fC)(),
        ed = (0, d.zhh)({ opacity: +(null != ea.interactionType), config: { duration: 150 } }),
        ec = (0, L.Nx)() ? null : $?.getBannerURL({ canAnimate: !1, size: 1024 }),
        ex = (0, ep.A)({ user: l, currentUser: t }),
        { analyticsLocations: eg } = (0, A.Ay)([...G, m.A.USER_PROFILE_MODAL_V2]),
        eI = (0, b.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: I,
            guildId: V,
            channelId: p,
            messageId: h,
            roleId: j,
        }),
        eN = C.Ay.useName($?.guildId, p, l),
        ey = (0, f.GV)(),
        eE = eh.intl.format(eh.t.KRe1Fk, { name: eN });
    return (0, i.jsx)(A.f5, {
        value: eg,
        children: (0, i.jsx)(b.of, {
            value: eI,
            isLoaded: $?.isLoaded,
            children: (0, i.jsx)(k.Hl, {
                value: ea,
                children: (0, i.jsx)(F.N, {
                    value: N,
                    children: (0, i.jsxs)(d.EOs, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: ej.root,
                        transitionState: E,
                        "aria-labelledby": ey,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, i.jsxs)(eu.A, {
                                children: [
                                    (0, i.jsx)(d.AC4, { children: (0, i.jsx)(d.H, { id: ey, children: eE }) }),
                                    (0, i.jsx)(d.Fmo, {
                                        children: (0, i.jsxs)("div", {
                                            className: a()(ej.layoutContainer, { [ej.hasEditingPanel]: Z && J }),
                                            children: [
                                                Z &&
                                                    (J
                                                        ? (0, i.jsx)(er.A, {
                                                              className: ej.editingPanel,
                                                              selectedGuildId: B,
                                                              onSelectGuildId: z,
                                                              onClose: () => X(!1),
                                                          })
                                                        : (0, i.jsx)(d.DUT, {
                                                              "aria-label": eh.intl.string(eh.t.N8XQDE),
                                                              "aria-expanded": !1,
                                                              className: a()(ei, ej.editingPanelExpandButton),
                                                              style: et,
                                                              onClick: () => X(!0),
                                                              children: (0, i.jsx)(d.NDp, {
                                                                  size: "sm",
                                                                  color: d.LU0.colors.ICON_STRONG,
                                                              }),
                                                          })),
                                                (0, i.jsxs)(Q.A, {
                                                    className: a()(U, ej.profileContentContainer),
                                                    user: l,
                                                    displayProfile: $,
                                                    themeType: ef.d.MODAL_V2,
                                                    privateBanner: $?.private === !0 ? (0, i.jsx)(Y.A, {}) : void 0,
                                                    children: [
                                                        null != ec &&
                                                            (0, i.jsx)("div", {
                                                                className: ej.backgroundImage,
                                                                style: { backgroundImage: `url(${ec})` },
                                                            }),
                                                        null != ea.interactionType &&
                                                            (0, i.jsx)(r.animated.div, {
                                                                style: ed,
                                                                className: ej.backdrop,
                                                            }),
                                                        (0, i.jsx)(es.A, {
                                                            className: ej.modalCloseButton,
                                                            isCurrentUser: w,
                                                            onClose: _,
                                                        }),
                                                        (0, i.jsx)(eA.A, { className: ej.toast }),
                                                        (0, i.jsx)(ev, {
                                                            user: l,
                                                            currentUser: t,
                                                            guildId: V,
                                                            channelId: p,
                                                            displayProfile: $,
                                                            nickname: eN,
                                                            originGuildId: c,
                                                            hasEntered: E === d.ip4.ENTERED,
                                                            customStatusPrompt: T,
                                                            onClose: _,
                                                        }),
                                                        (0, i.jsx)(em.A, {
                                                            user: l,
                                                            currentUser: t,
                                                            displayProfile: $,
                                                            guildId: V,
                                                            channelId: p,
                                                            items: ex,
                                                            initialSection: v,
                                                            onClose: _,
                                                        }),
                                                        null != K && (0, i.jsx)(g.A, { frame: K }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(eo.A, { userId: l.id, className: ej.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
