t.d(l, { A: () => eI });
var i = t(627968),
    n = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(497766),
    o = t(311907),
    d = t(397927),
    c = t(770178),
    u = t(80682),
    m = t(793574),
    A = t(688810),
    p = t(915089),
    x = t(713517),
    g = t(645507),
    f = t(922590),
    h = t(821269),
    j = t(182592),
    I = t(437774),
    v = t(594832),
    N = t(994500),
    y = t(351906),
    E = t(562153),
    T = t(474090),
    C = t(183555),
    _ = t(622543),
    b = t(591179),
    P = t(950191),
    O = t(101928),
    S = t(837529),
    R = t(346713),
    L = t(484509),
    G = t(195898),
    U = t(567915),
    M = t(716804),
    D = t(679492),
    F = t(718019),
    k = t(31432),
    w = t(915614),
    V = t(389996),
    B = t(223330),
    z = t(559506),
    W = t(361311),
    $ = t(886891),
    K = t(439053),
    H = t(743987),
    Z = t(312381),
    J = t(501193),
    Y = t(383448),
    X = t(946356),
    q = t(810396),
    Q = t(159218),
    ee = t(280645),
    el = t(291335),
    et = t(807651),
    ei = t(463156),
    en = t(510059),
    es = t(546136),
    ea = t(982599),
    er = t(399122),
    eo = t(83013),
    ed = t(878210),
    ec = t(515054),
    eu = t(513265),
    em = t(160983),
    eA = t(518477),
    ep = t(652215),
    ex = t(996988),
    eg = t(985018),
    ef = t(661388);
let eh = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3J.SIZE_96, avatarOffsetX: 16 } };
function ej(e) {
    let {
            user: l,
            currentUser: t,
            guildId: s,
            originGuildId: r,
            channelId: u,
            displayProfile: m,
            nickname: A,
            hasEntered: p,
            customStatusPrompt: v,
            onClose: E,
        } = e,
        C = l.id === t.id,
        _ = n.useRef(null),
        b = (0, x.M)(_),
        [P, O] = n.useState(),
        S = n.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? O("compact-xs") : l <= 380 ? O("compact-sm") : O(void 0);
        }, []);
    (0, c.g)(_, S, [], { fireOnMount: !0 });
    let G = null != P ? eh[P] : void 0,
        U = n.useMemo(() => v ?? (0, g.A)(), [v]),
        { relationshipType: M, originApplicationId: D } = (0, o.cf)([N.A], () => ({
            relationshipType: N.A.getRelationshipType(l.id),
            originApplicationId: N.A.getOriginApplicationId(l.id),
        })),
        Z = (0, o.bG)([y.A], () => y.A.hidePersonalInformation),
        ei = (0, h.q)({ userId: l.id }),
        es = (0, f.fi)(l.id),
        ea = (0, L.A)(l.id),
        ed = (0, R.A)(l.id);
    return (0, i.jsxs)("main", {
        className: a()(ef.profile, null != P && ef[P]),
        ref: _,
        children: [
            (0, i.jsxs)("div", {
                className: ef.profileHeader,
                children: [
                    (0, i.jsx)(w.A, { user: l, displayProfile: m, themeType: ex.d.MODAL_V2, specOverrides: G }),
                    (0, i.jsx)(K.A, { userId: l.id, onClose: E, className: ef.interactionToast }),
                    (0, i.jsx)(F.A, {
                        user: l,
                        displayProfile: m,
                        guildId: s,
                        channelId: u,
                        themeType: ex.d.MODAL_V2,
                        specOverrides: G,
                    }),
                    (0, i.jsx)(Q.A, {
                        user: l,
                        guildId: s,
                        channelId: u,
                        themeType: ex.d.MODAL_V2,
                        hasEntered: p,
                        prompt: C ? U : null,
                    }),
                ],
            }),
            (0, i.jsxs)(d.HOs, {
                fade: !0,
                className: ef.profileBody,
                children: [
                    (0, i.jsx)(z.A, { userId: l.id }),
                    (0, i.jsx)(q.A, {
                        user: l,
                        guildId: m?.guildId ?? void 0,
                        onClose: E,
                        nickname: A,
                        nicknameVariant: "heading-xl/semibold",
                        pronouns: m?.pronouns,
                        tags: (0, i.jsx)(k.A, { displayProfile: m, themeType: ex.d.MODAL_V2, onClose: E }),
                    }),
                    M === ep.eA$.PENDING_INCOMING &&
                        (0, i.jsx)(X.A.Overlay, {
                            className: ef.profileOverlay,
                            children: (0, i.jsx)($.A, {
                                user: l,
                                applicationId: D,
                                guildId: m?.guildId ?? void 0,
                                channelId: u,
                                className: ef.profileBanner,
                            }),
                        }),
                    es.map((e) => {
                        let { applicationId: t } = e;
                        return (0, i.jsx)(
                            X.A.Overlay,
                            {
                                className: ef.profileOverlay,
                                children: (0, i.jsx)($.A, {
                                    user: l,
                                    guildId: m?.guildId ?? void 0,
                                    channelId: u,
                                    isGameRelationship: !0,
                                    applicationId: t,
                                    className: ef.profileBanner,
                                }),
                            },
                            t,
                        );
                    }),
                    l.isProvisional &&
                        (0, i.jsx)(X.A.Overlay, {
                            className: ef.profileOverlay,
                            children: (0, i.jsx)(eo.A, {
                                heading: eg.intl.string(eg.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, i.jsx)(d.EpV, { size: "xs", color: "currentColor" }),
                                className: ef.profileBanner,
                                children: (0, i.jsx)(I.T, { userId: l.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    C && (0, i.jsx)(B.A, { isPremiumUser: (0, T.ki)(t), onInteraction: E }),
                    (0, i.jsx)(Y.A, { user: l, className: ef.profileBanner }),
                    m?.private &&
                        (0, i.jsx)(X.A.Overlay, {
                            className: ef.profileOverlay,
                            children: (0, i.jsx)(J.A, { username: A }),
                        }),
                    (0, i.jsx)("div", {
                        className: ef.profileButtons,
                        children: (0, i.jsx)(et.A, {
                            user: l,
                            currentUser: t,
                            guildId: s,
                            originGuildId: r,
                            channelId: u,
                            displayProfile: m,
                            relationshipType: M,
                            onClose: E,
                        }),
                    }),
                    !Z && (0, i.jsx)(V.E, { userBio: m?.bio, setLineClamp: !1 }),
                    ei.length > 0 &&
                        (0, i.jsx)(eo.A, {
                            heading: eg.intl.string(eg.t["Uv/eTx"]),
                            children: (0, i.jsx)(W.A, { applicationIds: ei }),
                        }),
                    (0, i.jsx)(eo.A, {
                        heading: eg.intl.string(eg.t.a6XYD9),
                        children: (0, i.jsx)(H.A, { userId: l.id, guildId: m?.guildId, tooltipDelay: eA.In }),
                    }),
                    m?.guildId != null &&
                        (0, i.jsx)(ee.A, {
                            userId: l.id,
                            guildId: m.guildId,
                            className: ef.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "currentColor",
                        }),
                    ea.length > 0 &&
                        (0, i.jsx)(eo.A, {
                            heading: eg.intl.string(eg.t["3fe7U5"]),
                            scrollTargetId: eA.bk.CONNECTIONS,
                            children: (0, i.jsx)(en.A, {
                                connections: ea,
                                userId: l.id,
                                className: ef.profileAppConnections,
                            }),
                        }),
                    ed.length > 0 &&
                        (0, i.jsx)(eo.A, {
                            heading: eg.intl.string(eg.t.PHjkRE),
                            scrollTargetId: eA.bk.APPS,
                            children: (0, i.jsx)(el.A, {
                                applicationRoleConnections: ed,
                                onClose: E,
                                className: ef.profileAppConnections,
                            }),
                        }),
                    (0, i.jsx)(er.A, { userId: l.id }),
                ],
            }),
            m?.profileEffect != null && (0, i.jsx)(j.A, { skuId: m?.profileEffect.skuId, isHovering: b }),
        ],
    });
}
function eI(e) {
    let {
            user: l,
            currentUser: t,
            guildId: s,
            originGuildId: c,
            channelId: x,
            messageId: g,
            roleId: f,
            sessionId: h,
            initialTabSection: j,
            initialScrollTarget: I,
            transitionState: N,
            customStatusPrompt: y,
            onClose: T,
            sourceAnalyticsLocations: R = [],
            themeContainerClassName: L,
        } = e,
        F = l.id === t.id,
        { guildId: k, pendingGuildId: w, selectUserProfile: V } = (0, U.A)({ userId: l.id, initialGuildId: s }),
        B = n.useMemo(() => (null != k ? { [k]: [l.id] } : {}), [k, l.id]);
    (0, u.Eq)(B, "UserProfileModalV2");
    let z = (0, P.Ay)(l.id, k),
        W = (0, b.X)("UserProfileModalV2"),
        $ = F && W,
        [K, H] = n.useState(!0),
        { theme: J, primaryColor: Y, secondaryColor: q } = (0, O.A)({ user: l, displayProfile: z }),
        { profileThemeStyle: Q, profileThemeClassName: ee } = (0, G.A)({
            theme: J,
            themeType: null,
            primaryColor: Y,
            secondaryColor: q,
        }),
        { defaultWishlistId: el } = (0, o.cf)([_.A], () => ({ defaultWishlistId: _.A.getFirstWishlistId(l.id) }));
    (0, v.fw)({ wishlistId: el, userId: l.id });
    let et = (0, D.fC)(),
        en = (0, d.zhh)({ opacity: +(null != et.interactionType), config: { duration: 150 } }),
        er = (0, S.Nx)() ? null : z?.getBannerURL({ canAnimate: !1, size: 1024 }),
        eo = (0, em.A)({ user: l, currentUser: t }),
        { analyticsLocations: eA } = (0, A.Ay)([...R, m.A.USER_PROFILE_MODAL_V2]),
        ep = (0, C.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: h,
            guildId: k,
            channelId: x,
            messageId: g,
            roleId: f,
        }),
        eh = E.Ay.useName(z?.guildId, x, l),
        eI = (0, p.GV)(),
        ev = eg.intl.format(eg.t.KRe1Fk, { name: eh });
    return (0, i.jsx)(A.f5, {
        value: eA,
        children: (0, i.jsx)(C.of, {
            value: ep,
            isLoaded: z?.isLoaded,
            children: (0, i.jsx)(D.Hl, {
                value: et,
                children: (0, i.jsx)(M.N, {
                    value: I,
                    children: (0, i.jsxs)(d.EOs, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: ef.root,
                        transitionState: N,
                        "aria-labelledby": eI,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, i.jsxs)(ed.A, {
                                children: [
                                    (0, i.jsx)(d.AC4, { children: (0, i.jsx)(d.H, { id: eI, children: ev }) }),
                                    (0, i.jsx)(d.Fmo, {
                                        children: (0, i.jsxs)("div", {
                                            className: a()(ef.layoutContainer, { [ef.hasEditingPanel]: $ && K }),
                                            children: [
                                                $ &&
                                                    (K
                                                        ? (0, i.jsx)(es.A, {
                                                              className: ef.editingPanel,
                                                              selectedGuildId: w,
                                                              onSelectGuildId: V,
                                                              onClose: () => H(!1),
                                                          })
                                                        : (0, i.jsx)(d.DUT, {
                                                              "aria-label": eg.intl.string(eg.t.N8XQDE),
                                                              "aria-expanded": !1,
                                                              className: a()(ee, ef.editingPanelExpandButton),
                                                              style: Q,
                                                              onClick: () => H(!0),
                                                              children: (0, i.jsx)(d.NDp, {
                                                                  size: "sm",
                                                                  color: d.LU0.colors.ICON_STRONG,
                                                              }),
                                                          })),
                                                (0, i.jsxs)(X.A, {
                                                    className: a()(L, ef.profileContentContainer),
                                                    user: l,
                                                    displayProfile: z,
                                                    themeType: ex.d.MODAL_V2,
                                                    privateBanner: z?.private === !0 ? (0, i.jsx)(Z.A, {}) : void 0,
                                                    children: [
                                                        null != er &&
                                                            (0, i.jsx)("div", {
                                                                className: ef.backgroundImage,
                                                                style: { backgroundImage: `url(${er})` },
                                                            }),
                                                        null != et.interactionType &&
                                                            (0, i.jsx)(r.animated.div, {
                                                                style: en,
                                                                className: ef.backdrop,
                                                            }),
                                                        (0, i.jsx)(ei.A, {
                                                            className: ef.modalCloseButton,
                                                            isCurrentUser: F,
                                                            onClose: T,
                                                        }),
                                                        (0, i.jsx)(eu.A, { className: ef.toast }),
                                                        (0, i.jsx)(ej, {
                                                            user: l,
                                                            currentUser: t,
                                                            guildId: k,
                                                            channelId: x,
                                                            displayProfile: z,
                                                            nickname: eh,
                                                            originGuildId: c,
                                                            hasEntered: N === d.ip4.ENTERED,
                                                            customStatusPrompt: y,
                                                            onClose: T,
                                                        }),
                                                        (0, i.jsx)(ec.A, {
                                                            user: l,
                                                            currentUser: t,
                                                            displayProfile: z,
                                                            guildId: k,
                                                            channelId: x,
                                                            items: eo,
                                                            initialSection: j,
                                                            onClose: T,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(ea.A, { userId: l.id, className: ef.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
