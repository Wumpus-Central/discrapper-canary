l.d(t, { A: () => eb });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(311907),
    o = l(397927),
    d = l(241524),
    c = l(770178),
    u = l(80682),
    m = l(793574),
    p = l(688810),
    x = l(351966),
    A = l(361628),
    g = l(744808),
    f = l(915089),
    h = l(713517),
    j = l(645507),
    v = l(922590),
    I = l(821269),
    N = l(437774),
    y = l(594832),
    C = l(994500),
    E = l(351906),
    T = l(562153),
    b = l(474090),
    P = l(183555),
    _ = l(622543),
    O = l(591179),
    R = l(950191),
    S = l(101928),
    L = l(837529),
    D = l(346713),
    U = l(672691),
    G = l(195898),
    M = l(486678),
    k = l(567915),
    F = l(716804),
    w = l(679492),
    V = l(718019),
    B = l(31432),
    z = l(915614),
    W = l(389996),
    H = l(223330),
    $ = l(559506),
    K = l(361311),
    Y = l(886891),
    Z = l(439053),
    X = l(743987),
    q = l(312381),
    J = l(501193),
    Q = l(383448),
    ee = l(946356),
    et = l(810396),
    el = l(159218),
    en = l(280645),
    ei = l(291335),
    es = l(807651),
    ea = l(463156),
    er = l(510059),
    eo = l(546136),
    ed = l(982599),
    ec = l(399122),
    eu = l(358826),
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
    eC = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3J.SIZE_96, avatarOffsetX: 16 } };
function eE(e) {
    let {
            user: t,
            currentUser: l,
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
        O = t.id === l.id,
        R = i.useRef(null),
        { isHoveringOrFocusing: S } = (0, h.A)(R),
        [L, G] = i.useState(),
        M = i.useCallback((e) => {
            let t = e.contentRect.width;
            t <= 350 ? G("compact-xs") : t <= 380 ? G("compact-sm") : G(void 0);
        }, []);
    (0, c.g)(R, M, [], { fireOnMount: !0 });
    let k = null != L ? eC[L] : void 0,
        F = i.useMemo(() => g ?? (0, j.A)(), [g]),
        { relationshipType: w, originApplicationId: q } = (0, r.cf)([C.A], () => ({
            relationshipType: C.A.getRelationshipType(t.id),
            originApplicationId: C.A.getOriginApplicationId(t.id),
        })),
        ea = (0, r.bG)([E.A], () => E.A.hidePersonalInformation),
        eo = (0, I.q)({ userId: t.id }),
        ed = (0, v.fi)(t.id),
        { appIdentities: eu, connections: ep } = (0, U.A)(t.id),
        ex = (0, D.A)(t.id),
        eA = P ? eg.A : z.A;
    return (0, n.jsxs)("main", {
        className: a()(eN.profile, null != L && eN[L]),
        ref: R,
        "aria-busy": _,
        children: [
            (0, n.jsxs)("div", {
                className: eN.profileHeader,
                children: [
                    (0, n.jsx)(eA, { user: t, displayProfile: m, themeType: ev.d.MODAL_V2, specOverrides: k }),
                    (0, n.jsx)(Z.A, { userId: t.id, onClose: f, className: eN.interactionToast }),
                    (0, n.jsx)(V.A, {
                        user: t,
                        displayProfile: m,
                        guildId: s,
                        channelId: u,
                        themeType: ev.d.MODAL_V2,
                        specOverrides: k,
                        avatarDecorationOverride: y,
                        avatarOverride: T,
                    }),
                    (0, n.jsx)(el.A, {
                        user: t,
                        guildId: s,
                        channelId: u,
                        themeType: ev.d.MODAL_V2,
                        hasEntered: A,
                        prompt: O ? F : null,
                    }),
                ],
            }),
            (0, n.jsxs)(o.HOs, {
                fade: !0,
                className: eN.profileBody,
                children: [
                    (0, n.jsx)($.A, { userId: t.id }),
                    (0, n.jsx)(et.A, {
                        user: t,
                        guildId: m?.guildId ?? void 0,
                        onClose: f,
                        nickname: p,
                        nicknameVariant: "heading-xl/semibold",
                        pronouns: m?.pronouns,
                        tags: (0, n.jsx)(B.A, { displayProfile: m, themeType: ev.d.MODAL_V2, onClose: f }),
                    }),
                    w === ej.eA$.PENDING_INCOMING &&
                        (0, n.jsx)(ee.A.Overlay, {
                            className: eN.profileOverlay,
                            children: (0, n.jsx)(Y.A, {
                                user: t,
                                applicationId: q,
                                guildId: m?.guildId ?? void 0,
                                channelId: u,
                                className: eN.profileBanner,
                            }),
                        }),
                    ed.map((e) => {
                        let { applicationId: l } = e;
                        return (0, n.jsx)(
                            ee.A.Overlay,
                            {
                                className: eN.profileOverlay,
                                children: (0, n.jsx)(Y.A, {
                                    user: t,
                                    guildId: m?.guildId ?? void 0,
                                    channelId: u,
                                    isGameRelationship: !0,
                                    applicationId: l,
                                    className: eN.profileBanner,
                                }),
                            },
                            l,
                        );
                    }),
                    t.isProvisional &&
                        (0, n.jsx)(ee.A.Overlay, {
                            className: eN.profileOverlay,
                            children: (0, n.jsx)(em.A, {
                                heading: eI.intl.string(eI.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, n.jsx)(o.EpV, { size: "xs", color: "currentColor" }),
                                className: eN.profileBanner,
                                children: (0, n.jsx)(N.T, { userId: t.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    O && (0, n.jsx)(H.A, { isPremiumUser: (0, b.ki)(l), onInteraction: f }),
                    (0, n.jsx)(Q.A, { user: t, className: eN.profileBanner }),
                    m?.private &&
                        (0, n.jsx)(ee.A.Overlay, {
                            className: eN.profileOverlay,
                            children: (0, n.jsx)(J.A, { username: p }),
                        }),
                    (0, n.jsx)("div", {
                        className: eN.profileButtons,
                        children: (0, n.jsx)(es.A, {
                            user: t,
                            currentUser: l,
                            guildId: s,
                            originGuildId: d,
                            channelId: u,
                            displayProfile: m,
                            relationshipType: w,
                            onClose: f,
                        }),
                    }),
                    !ea && (0, n.jsx)(W.E, { userBio: m?.bio, setLineClamp: !1 }),
                    eo.length > 0 &&
                        (0, n.jsx)(em.A, {
                            heading: eI.intl.string(eI.t["Uv/eTx"]),
                            children: (0, n.jsx)(K.A, { applicationIds: eo }),
                        }),
                    (0, n.jsx)(em.A, {
                        heading: eI.intl.string(eI.t.a6XYD9),
                        children: (0, n.jsx)(X.A, { userId: t.id, guildId: m?.guildId, tooltipDelay: eh.In }),
                    }),
                    m?.guildId != null &&
                        (0, n.jsx)(en.A, {
                            userId: t.id,
                            guildId: m.guildId,
                            className: eN.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "currentColor",
                        }),
                    (ep.length > 0 || eu.length > 0) &&
                        (0, n.jsx)(em.A, {
                            heading: eI.intl.string(eI.t["3fe7U5"]),
                            scrollTargetId: eh.bk.CONNECTIONS,
                            children: (0, n.jsx)(er.A, {
                                applicationIdentities: eu,
                                connections: ep,
                                userId: t.id,
                                className: eN.profileAppConnections,
                            }),
                        }),
                    ex.length > 0 &&
                        (0, n.jsx)(em.A, {
                            heading: eI.intl.string(eI.t.PHjkRE),
                            scrollTargetId: eh.bk.APPS,
                            children: (0, n.jsx)(ei.A, {
                                applicationRoleConnections: ex,
                                onClose: f,
                                className: eN.profileAppConnections,
                            }),
                        }),
                    (0, n.jsx)(ec.A, { userId: t.id }),
                ],
            }),
            m?.profileEffect != null && (0, n.jsx)(x.A, { skuId: m?.profileEffect.skuId, isHovering: S }),
        ],
    });
}
function eT(e) {
    let { user: t, displayProfile: l, pendingThemeColors: i, children: s } = e,
        {
            theme: a,
            primaryColor: r,
            secondaryColor: o,
        } = (0, S.A)({ user: t, displayProfile: l, pendingThemeColors: i }),
        { profileThemeStyle: d, profileThemeClassName: c } = (0, G.A)({
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
        U = t.id === l.id,
        {
            guildId: G,
            pendingGuildId: V,
            isLoading: B,
            selectUserProfile: z,
        } = (0, k.A)({ userId: t.id, initialGuildId: s }),
        W = i.useMemo(() => (null != G ? { [G]: [t.id] } : {}), [G, t.id]);
    (0, u.Eq)(W, "UserProfileModalV2");
    let H = (0, R.Ay)(t.id, G),
        $ = (0, A.A)(H?.profileFrame?.skuId, "UserProfileModalV2"),
        K = (0, O.X)("UserProfileModalV2"),
        Y = U && K,
        {
            pendingThemeColors: Z,
            avatarDecorationOverride: X,
            avatarOverride: J,
        } = (0, M.A)({ user: t, allowEditingInModal: Y, guildId: G }),
        {
            isExpanded: Q,
            isAnimating: et,
            transition: el,
            canShowExpand: en,
            handleExpand: ei,
            handleCollapse: es,
            refs: { expandIconButtonRef: er, expandTabButtonRef: ec, collapseButtonRef: em },
        } = (function () {
            let [e, t] = i.useState(() => window.innerWidth > 928),
                [l, n] = i.useState(!1),
                s = (0, o.pnh)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: ey },
                    onRest: () => n(!1),
                }),
                a = (0, d.A)("(min-width: 929px) and (min-height: 550px)"),
                r = i.useRef(null),
                c = i.useRef(null),
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
                            let e = a ? c.current : r.current;
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
                    refs: { expandIconButtonRef: r, expandTabButtonRef: c, collapseButtonRef: u },
                }
            );
        })(),
        eg = Y && en,
        { defaultWishlistId: eh } = (0, r.cf)([_.A], () => ({ defaultWishlistId: _.A.getFirstWishlistId(t.id) }));
    (0, y.fw)({ wishlistId: eh, userId: t.id });
    let ej = (0, w.fC)(),
        eC = B || null != ej.interactionType,
        eb = (0, L.Nx)() ? null : H?.getBannerURL({ canAnimate: !1, size: 1024 }),
        eP = (0, ef.A)({ user: t, currentUser: l }),
        { analyticsLocations: e_ } = (0, p.Ay)([...S, m.A.USER_PROFILE_MODAL_V2]),
        eO = (0, P.pb)({
            layout: "MODAL_V2",
            userId: t.id,
            sourceSessionId: v,
            guildId: G,
            channelId: x,
            messageId: h,
            roleId: j,
        }),
        eR = T.Ay.useName(H?.guildId, x, t),
        eS = (0, f.GV)(),
        eL = eI.intl.format(eI.t.KRe1Fk, { name: eR });
    return (0, n.jsx)(p.f5, {
        value: e_,
        children: (0, n.jsx)(P.of, {
            value: eO,
            isLoaded: H?.isLoaded,
            children: (0, n.jsx)(w.Hl, {
                value: ej,
                children: (0, n.jsx)(F.N, {
                    value: N,
                    children: (0, n.jsxs)(o.EOs, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: eN.root,
                        transitionState: C,
                        "aria-labelledby": eS,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, n.jsx)(ep.A, {
                                children: (0, n.jsxs)("div", {
                                    className: a()(eN.layoutContainer, {
                                        [eN.editingPanelEnabled]: Y,
                                        [eN.editingPanelExpanded]: Y && Q,
                                        [eN.isAnimating]: et,
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
                                                        (0, n.jsx)(ea.A, { isCurrentUser: U, onClose: b }),
                                                        (0, n.jsx)(o.AC4, {
                                                            children: (0, n.jsx)(o.H, { id: eS, children: eL }),
                                                        }),
                                                        Y &&
                                                            (!Q || et) &&
                                                            (0, n.jsx)(eo._T, {
                                                                buttonRef: er,
                                                                onClick: ei,
                                                                className: eN.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eg &&
                                                    (0, n.jsx)(eo.oA, {
                                                        innerRef: ec,
                                                        onClick: ei,
                                                        className: eN.editingPanelExpandButtonDefault,
                                                    }),
                                            ],
                                        }),
                                        (0, n.jsxs)(o.Fmo, {
                                            children: [
                                                Y &&
                                                    el((e, l) =>
                                                        l
                                                            ? (0, n.jsx)(eo.Ay, {
                                                                  className: a()(eN.editingPanel, {
                                                                      [eN.isExpanded]: Q,
                                                                  }),
                                                                  user: t,
                                                                  selectedGuildId: V,
                                                                  onSelectGuildId: z,
                                                                  onClose: es,
                                                                  collapseButtonRef: em,
                                                                  isLoading: B,
                                                              })
                                                            : null,
                                                    ),
                                                (0, n.jsxs)(ee.A, {
                                                    className: a()(D, eN.profileContentContainer),
                                                    user: t,
                                                    displayProfile: H,
                                                    themeType: ev.d.MODAL_V2,
                                                    pendingThemeColors: Z,
                                                    privateBanner: H?.private === !0 ? (0, n.jsx)(q.A, {}) : void 0,
                                                    children: [
                                                        null != eb &&
                                                            (0, n.jsx)("div", {
                                                                className: eN.backgroundImage,
                                                                style: { backgroundImage: `url(${eb})` },
                                                            }),
                                                        (0, n.jsx)(eu.A, { isVisible: eC, showLoadingSpinner: B }),
                                                        (0, n.jsx)(eA.A, { className: eN.toast }),
                                                        (0, n.jsx)(eE, {
                                                            user: t,
                                                            currentUser: l,
                                                            guildId: G,
                                                            channelId: x,
                                                            displayProfile: H,
                                                            nickname: eR,
                                                            originGuildId: c,
                                                            hasEntered: C === o.ip4.ENTERED,
                                                            customStatusPrompt: E,
                                                            onClose: b,
                                                            avatarDecorationOverride: X,
                                                            avatarOverride: J,
                                                            allowEditing: Y,
                                                            isLoading: B,
                                                        }),
                                                        (0, n.jsx)(ex.A, {
                                                            user: t,
                                                            currentUser: l,
                                                            displayProfile: H,
                                                            guildId: G,
                                                            channelId: x,
                                                            items: eP,
                                                            initialSection: I,
                                                            onClose: b,
                                                        }),
                                                        null != $ && (0, n.jsx)(g.A, { frame: $, layout: "MODAL_V2" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, n.jsx)(ed.A, { userId: t.id, guildId: G, className: eN.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
