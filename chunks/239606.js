n.d(l, { A: () => eP });
var t = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(241524),
    c = n(770178),
    u = n(80682),
    m = n(793574),
    p = n(688810),
    x = n(351966),
    A = n(361628),
    g = n(744808),
    f = n(915089),
    h = n(713517),
    j = n(645507),
    v = n(922590),
    I = n(821269),
    N = n(437774),
    y = n(594832),
    C = n(994500),
    E = n(351906),
    T = n(562153),
    b = n(474090),
    P = n(183555),
    _ = n(622543),
    O = n(591179),
    R = n(950191),
    S = n(101928),
    L = n(837529),
    D = n(346713),
    U = n(672691),
    k = n(195898),
    G = n(486678),
    M = n(567915),
    F = n(716804),
    w = n(679492),
    V = n(718019),
    z = n(31432),
    B = n(915614),
    H = n(389996),
    W = n(223330),
    K = n(559506),
    $ = n(361311),
    Z = n(886891),
    Y = n(439053),
    X = n(743987),
    q = n(312381),
    J = n(501193),
    Q = n(383448),
    ee = n(946356),
    el = n(810396),
    en = n(159218),
    et = n(280645),
    ei = n(291335),
    es = n(807651),
    ea = n(463156),
    er = n(510059),
    eo = n(546136),
    ed = n(982599),
    ec = n(399122),
    eu = n(358826),
    em = n(83013),
    ep = n(878210),
    ex = n(515054),
    eA = n(513265),
    eg = n(828822),
    ef = n(629747),
    eh = n(160983),
    ej = n(518477),
    ev = n(652215),
    eI = n(996988),
    eN = n(985018),
    ey = n(572841);
let eC = (e) => e * (2 - e),
    eE = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3J.SIZE_96, avatarOffsetX: 16 } };
function eT(e) {
    let {
            user: l,
            currentUser: n,
            guildId: s,
            originGuildId: d,
            channelId: u,
            displayProfile: m,
            nickname: p,
            hasEntered: A,
            customStatusPrompt: g,
            onClose: f,
            avatarDecorationOverride: y,
            avatarOverride: T,
            allowEditing: P = !1,
            isLoading: _ = !1,
        } = e,
        O = l.id === n.id,
        R = i.useRef(null),
        { isHoveringOrFocusing: S } = (0, h.A)(R),
        [L, k] = i.useState(),
        G = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? k("compact-xs") : l <= 380 ? k("compact-sm") : k(void 0);
        }, []);
    (0, c.g)(R, G, [], { fireOnMount: !0 });
    let M = null != L ? eE[L] : void 0,
        F = i.useMemo(() => g ?? (0, j.A)(), [g]),
        { relationshipType: w, originApplicationId: q } = (0, r.cf)([C.A], () => ({
            relationshipType: C.A.getRelationshipType(l.id),
            originApplicationId: C.A.getOriginApplicationId(l.id),
        })),
        ea = (0, r.bG)([E.A], () => E.A.hidePersonalInformation),
        eo = (0, I.q)({ userId: l.id }),
        ed = (0, v.fi)(l.id),
        { appIdentities: eu, connections: ep } = (0, U.A)(l.id),
        ex = (0, D.A)(l.id),
        eA = P ? ef.A : B.A,
        eh = P ? eg.A : V.A;
    return (0, t.jsxs)("main", {
        className: a()(ey.profile, null != L && ey[L]),
        ref: R,
        "aria-busy": _,
        children: [
            (0, t.jsxs)("div", {
                className: ey.profileHeader,
                children: [
                    (0, t.jsx)(eA, { user: l, displayProfile: m, themeType: eI.d.MODAL_V2, specOverrides: M }),
                    (0, t.jsx)(Y.A, { userId: l.id, onClose: f, className: ey.interactionToast }),
                    (0, t.jsx)(eh, {
                        user: l,
                        displayProfile: m,
                        guildId: s,
                        channelId: u,
                        themeType: eI.d.MODAL_V2,
                        specOverrides: M,
                        avatarDecorationOverride: y,
                        avatarOverride: T,
                    }),
                    (0, t.jsx)(en.A, {
                        user: l,
                        guildId: s,
                        channelId: u,
                        themeType: eI.d.MODAL_V2,
                        hasEntered: A,
                        prompt: O ? F : null,
                    }),
                ],
            }),
            (0, t.jsxs)(o.HOs, {
                fade: !0,
                className: ey.profileBody,
                children: [
                    (0, t.jsx)(K.A, { userId: l.id }),
                    (0, t.jsx)(el.A, {
                        user: l,
                        guildId: m?.guildId ?? void 0,
                        onClose: f,
                        nickname: p,
                        nicknameVariant: "heading-xl/semibold",
                        pronouns: m?.pronouns,
                        tags: (0, t.jsx)(z.A, { displayProfile: m, themeType: eI.d.MODAL_V2, onClose: f }),
                    }),
                    w === ev.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(ee.A.Overlay, {
                            className: ey.profileOverlay,
                            children: (0, t.jsx)(Z.A, {
                                user: l,
                                applicationId: q,
                                guildId: m?.guildId ?? void 0,
                                channelId: u,
                                className: ey.profileBanner,
                            }),
                        }),
                    ed.map((e) => {
                        let { applicationId: n } = e;
                        return (0, t.jsx)(
                            ee.A.Overlay,
                            {
                                className: ey.profileOverlay,
                                children: (0, t.jsx)(Z.A, {
                                    user: l,
                                    guildId: m?.guildId ?? void 0,
                                    channelId: u,
                                    isGameRelationship: !0,
                                    applicationId: n,
                                    className: ey.profileBanner,
                                }),
                            },
                            n,
                        );
                    }),
                    l.isProvisional &&
                        (0, t.jsx)(ee.A.Overlay, {
                            className: ey.profileOverlay,
                            children: (0, t.jsx)(em.A, {
                                heading: eN.intl.string(eN.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(o.EpV, { size: "xs", color: "currentColor" }),
                                className: ey.profileBanner,
                                children: (0, t.jsx)(N.T, { userId: l.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(Q.A, { user: l, className: ey.profileBanner }),
                    m?.private &&
                        (0, t.jsx)(ee.A.Overlay, {
                            className: ey.profileOverlay,
                            children: (0, t.jsx)(J.A, { username: p }),
                        }),
                    (0, t.jsx)("div", {
                        className: ey.profileButtons,
                        children: (0, t.jsx)(es.A, {
                            user: l,
                            currentUser: n,
                            guildId: s,
                            originGuildId: d,
                            channelId: u,
                            displayProfile: m,
                            relationshipType: w,
                            onClose: f,
                        }),
                    }),
                    O && (0, t.jsx)(W.A, { isPremiumUser: (0, b.ki)(n), onInteraction: f }),
                    !ea && (0, t.jsx)(H.E, { userBio: m?.bio, setLineClamp: !1 }),
                    eo.length > 0 &&
                        (0, t.jsx)(em.A, {
                            heading: eN.intl.string(eN.t["Uv/eTx"]),
                            children: (0, t.jsx)($.A, { applicationIds: eo }),
                        }),
                    (0, t.jsx)(em.A, {
                        heading: eN.intl.string(eN.t.a6XYD9),
                        children: (0, t.jsx)(X.A, { userId: l.id, guildId: m?.guildId, tooltipDelay: ej.In }),
                    }),
                    m?.guildId != null &&
                        (0, t.jsx)(et.A, {
                            userId: l.id,
                            guildId: m.guildId,
                            className: ey.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "currentColor",
                        }),
                    (ep.length > 0 || eu.length > 0) &&
                        (0, t.jsx)(em.A, {
                            heading: eN.intl.string(eN.t["3fe7U5"]),
                            scrollTargetId: ej.bk.CONNECTIONS,
                            children: (0, t.jsx)(er.A, {
                                applicationIdentities: eu,
                                connections: ep,
                                userId: l.id,
                                className: ey.profileAppConnections,
                            }),
                        }),
                    ex.length > 0 &&
                        (0, t.jsx)(em.A, {
                            heading: eN.intl.string(eN.t.PHjkRE),
                            scrollTargetId: ej.bk.APPS,
                            children: (0, t.jsx)(ei.A, {
                                applicationRoleConnections: ex,
                                onClose: f,
                                className: ey.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(ec.A, { userId: l.id }),
                ],
            }),
            m?.profileEffect != null && (0, t.jsx)(x.A, { skuId: m?.profileEffect.skuId, isHovering: S }),
        ],
    });
}
function eb(e) {
    let { user: l, displayProfile: n, pendingThemeColors: i, children: s } = e,
        {
            theme: a,
            primaryColor: r,
            secondaryColor: o,
        } = (0, S.A)({ user: l, displayProfile: n, pendingThemeColors: i }),
        { profileThemeStyle: d, profileThemeClassName: c } = (0, k.A)({
            theme: a,
            themeType: null,
            primaryColor: r,
            secondaryColor: o,
        });
    return (0, t.jsx)("div", { className: c, style: d, children: s });
}
function eP(e) {
    let {
            user: l,
            currentUser: n,
            guildId: s,
            originGuildId: c,
            channelId: x,
            messageId: h,
            roleId: j,
            sessionId: v,
            initialTabSection: I,
            initialScrollTarget: N,
            transitionState: C,
            customStatusPrompt: E,
            onClose: b,
            sourceAnalyticsLocations: S = [],
            themeContainerClassName: D,
        } = e,
        U = l.id === n.id,
        {
            guildId: k,
            pendingGuildId: V,
            isLoading: z,
            selectUserProfile: B,
        } = (0, M.A)({ userId: l.id, initialGuildId: s }),
        H = i.useMemo(() => (null != k ? { [k]: [l.id] } : {}), [k, l.id]);
    (0, u.Eq)(H, "UserProfileModalV2");
    let W = (0, R.Ay)(l.id, k),
        K = (0, A.A)(W?.profileFrame?.skuId, "UserProfileModalV2"),
        $ = (0, O.X)("UserProfileModalV2"),
        Z = U && $,
        {
            pendingThemeColors: Y,
            avatarDecorationOverride: X,
            avatarOverride: J,
        } = (0, G.A)({ user: l, allowEditingInModal: Z, guildId: k }),
        {
            isExpanded: Q,
            isAnimating: el,
            transition: en,
            canShowExpand: et,
            handleExpand: ei,
            handleCollapse: es,
            refs: { expandIconButtonRef: er, expandTabButtonRef: ec, collapseButtonRef: em },
        } = (function () {
            let [e, l] = i.useState(() => window.innerWidth > 928),
                [n, t] = i.useState(!1),
                s = (0, o.pnh)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: eC },
                    onRest: () => t(!1),
                }),
                a = (0, d.A)("(min-width: 929px) and (min-height: 550px)"),
                r = i.useRef(null),
                c = i.useRef(null),
                u = i.useRef(null),
                m = i.useRef(null),
                p = i.useCallback(() => {
                    (m.current = "collapse"), t(!0), l(!0);
                }, []),
                x = i.useCallback(() => {
                    (m.current = "expand"), t(!0), l(!1);
                }, []);
            return (
                i.useEffect(() => {
                    if (!n) {
                        if ("collapse" === m.current && e) (m.current = null), u.current?.focus();
                        else if ("expand" === m.current && !e) {
                            m.current = null;
                            let e = a ? c.current : r.current;
                            e?.focus();
                        }
                    }
                }, [e, n, a]),
                {
                    isExpanded: e,
                    isAnimating: n,
                    transition: s,
                    canShowExpand: !e && !n,
                    handleExpand: p,
                    handleCollapse: x,
                    refs: { expandIconButtonRef: r, expandTabButtonRef: c, collapseButtonRef: u },
                }
            );
        })(),
        eg = Z && et,
        { defaultWishlistId: ef } = (0, r.cf)([_.A], () => ({ defaultWishlistId: _.A.getFirstWishlistId(l.id) }));
    (0, y.fw)({ wishlistId: ef, userId: l.id });
    let ej = (0, w.fC)(),
        ev = z || null != ej.interactionType,
        eE = (0, L.Nx)() ? null : W?.getBannerURL({ canAnimate: !1, size: 1024 }),
        eP = (0, eh.A)({ user: l, currentUser: n }),
        { analyticsLocations: e_ } = (0, p.Ay)([...S, m.A.USER_PROFILE_MODAL_V2]),
        eO = (0, P.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: v,
            guildId: k,
            channelId: x,
            messageId: h,
            roleId: j,
        }),
        eR = T.Ay.useName(W?.guildId, x, l),
        eS = (0, f.GV)(),
        eL = eN.intl.format(eN.t.KRe1Fk, { name: eR });
    return (0, t.jsx)(p.f5, {
        value: e_,
        children: (0, t.jsx)(P.of, {
            value: eO,
            isLoaded: W?.isLoaded,
            children: (0, t.jsx)(w.Hl, {
                value: ej,
                children: (0, t.jsx)(F.N, {
                    value: N,
                    children: (0, t.jsxs)(o.EOs, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: ey.root,
                        transitionState: C,
                        "aria-labelledby": eS,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(ep.A, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(ey.layoutContainer, {
                                        [ey.editingPanelEnabled]: Z,
                                        [ey.editingPanelExpanded]: Z && Q,
                                        [ey.isAnimating]: el,
                                        [ey.hasPrivateBanner]: W?.private === !0,
                                    }),
                                    children: [
                                        (0, t.jsxs)(eb, {
                                            user: l,
                                            displayProfile: W,
                                            pendingThemeColors: Y,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: ey.modalHeaderButtons,
                                                    children: [
                                                        (0, t.jsx)(ea.A, { isCurrentUser: U, onClose: b }),
                                                        (0, t.jsx)(o.AC4, {
                                                            children: (0, t.jsx)(o.H, { id: eS, children: eL }),
                                                        }),
                                                        Z &&
                                                            (!Q || el) &&
                                                            (0, t.jsx)(eo._T, {
                                                                buttonRef: er,
                                                                onClick: ei,
                                                                className: ey.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eg &&
                                                    (0, t.jsx)(eo.oA, {
                                                        innerRef: ec,
                                                        onClick: ei,
                                                        className: ey.editingPanelExpandButtonDefault,
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(o.Fmo, {
                                            children: [
                                                Z &&
                                                    en((e, n) =>
                                                        n
                                                            ? (0, t.jsx)(eo.Ay, {
                                                                  className: a()(ey.editingPanel, {
                                                                      [ey.isExpanded]: Q,
                                                                  }),
                                                                  user: l,
                                                                  selectedGuildId: V,
                                                                  onSelectGuildId: B,
                                                                  onClose: es,
                                                                  collapseButtonRef: em,
                                                                  isLoading: z,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(ee.A, {
                                                    className: a()(D, ey.profileContentContainer),
                                                    user: l,
                                                    displayProfile: W,
                                                    themeType: eI.d.MODAL_V2,
                                                    pendingThemeColors: Y,
                                                    privateBanner: W?.private === !0 ? (0, t.jsx)(q.A, {}) : void 0,
                                                    children: [
                                                        null != eE &&
                                                            (0, t.jsx)("div", {
                                                                className: ey.backgroundImage,
                                                                style: { backgroundImage: `url(${eE})` },
                                                            }),
                                                        (0, t.jsx)(eu.A, { isVisible: ev, showLoadingSpinner: z }),
                                                        (0, t.jsx)(eA.A, { className: ey.toast }),
                                                        (0, t.jsx)(eT, {
                                                            user: l,
                                                            currentUser: n,
                                                            guildId: k,
                                                            channelId: x,
                                                            displayProfile: W,
                                                            nickname: eR,
                                                            originGuildId: c,
                                                            hasEntered: C === o.ip4.ENTERED,
                                                            customStatusPrompt: E,
                                                            onClose: b,
                                                            avatarDecorationOverride: X,
                                                            avatarOverride: J,
                                                            allowEditing: Z,
                                                            isLoading: z,
                                                        }),
                                                        (0, t.jsx)(ex.A, {
                                                            user: l,
                                                            currentUser: n,
                                                            displayProfile: W,
                                                            guildId: k,
                                                            channelId: x,
                                                            items: eP,
                                                            initialSection: I,
                                                            onClose: b,
                                                        }),
                                                        null != K && (0, t.jsx)(g.A, { frame: K, layout: "MODAL_V2" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, t.jsx)(ed.A, { userId: l.id, guildId: k, className: ey.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
