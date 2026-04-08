n.d(l, { A: () => eC });
var t = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(687498),
    o = n(311907),
    d = n(397927),
    c = n(241524),
    u = n(770178),
    m = n(80682),
    p = n(793574),
    x = n(688810),
    A = n(351966),
    g = n(361628),
    f = n(744808),
    h = n(915089),
    j = n(713517),
    I = n(645507),
    v = n(922590),
    N = n(821269),
    y = n(437774),
    E = n(594832),
    C = n(994500),
    T = n(351906),
    b = n(562153),
    _ = n(474090),
    P = n(183555),
    R = n(622543),
    O = n(591179),
    S = n(950191),
    L = n(101928),
    G = n(837529),
    U = n(346713),
    M = n(484509),
    D = n(195898),
    F = n(567915),
    k = n(716804),
    w = n(679492),
    V = n(718019),
    B = n(31432),
    z = n(915614),
    W = n(389996),
    H = n(223330),
    K = n(559506),
    $ = n(361311),
    Z = n(886891),
    X = n(439053),
    J = n(743987),
    Y = n(312381),
    q = n(501193),
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
    eu = n(83013),
    em = n(878210),
    ep = n(515054),
    ex = n(513265),
    eA = n(160983),
    eg = n(518477),
    ef = n(652215),
    eh = n(996988),
    ej = n(985018),
    eI = n(87862);
let ev = (e) => e * (2 - e),
    eN = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3J.SIZE_96, avatarOffsetX: 16 } };
function ey(e) {
    let {
            user: l,
            currentUser: n,
            guildId: s,
            originGuildId: r,
            channelId: c,
            displayProfile: m,
            nickname: p,
            hasEntered: x,
            customStatusPrompt: g,
            onClose: f,
        } = e,
        h = l.id === n.id,
        E = i.useRef(null),
        b = (0, j.M)(E),
        [P, R] = i.useState(),
        O = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? R("compact-xs") : l <= 380 ? R("compact-sm") : R(void 0);
        }, []);
    (0, u.g)(E, O, [], { fireOnMount: !0 });
    let S = null != P ? eN[P] : void 0,
        L = i.useMemo(() => g ?? (0, I.A)(), [g]),
        { relationshipType: G, originApplicationId: D } = (0, o.cf)([C.A], () => ({
            relationshipType: C.A.getRelationshipType(l.id),
            originApplicationId: C.A.getOriginApplicationId(l.id),
        })),
        F = (0, o.bG)([T.A], () => T.A.hidePersonalInformation),
        k = (0, N.q)({ userId: l.id }),
        w = (0, v.fi)(l.id),
        Y = (0, M.A)(l.id),
        ea = (0, U.A)(l.id);
    return (0, t.jsxs)("main", {
        className: a()(eI.profile, null != P && eI[P]),
        ref: E,
        children: [
            (0, t.jsxs)("div", {
                className: eI.profileHeader,
                children: [
                    (0, t.jsx)(z.A, { user: l, displayProfile: m, themeType: eh.d.MODAL_V2, specOverrides: S }),
                    (0, t.jsx)(X.A, { userId: l.id, onClose: f, className: eI.interactionToast }),
                    (0, t.jsx)(V.A, {
                        user: l,
                        displayProfile: m,
                        guildId: s,
                        channelId: c,
                        themeType: eh.d.MODAL_V2,
                        specOverrides: S,
                    }),
                    (0, t.jsx)(en.A, {
                        user: l,
                        guildId: s,
                        channelId: c,
                        themeType: eh.d.MODAL_V2,
                        hasEntered: x,
                        prompt: h ? L : null,
                    }),
                ],
            }),
            (0, t.jsxs)(d.HOs, {
                fade: !0,
                className: eI.profileBody,
                children: [
                    (0, t.jsx)(K.A, { userId: l.id }),
                    (0, t.jsx)(el.A, {
                        user: l,
                        guildId: m?.guildId ?? void 0,
                        onClose: f,
                        nickname: p,
                        nicknameVariant: "heading-xl/semibold",
                        pronouns: m?.pronouns,
                        tags: (0, t.jsx)(B.A, { displayProfile: m, themeType: eh.d.MODAL_V2, onClose: f }),
                    }),
                    G === ef.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(ee.A.Overlay, {
                            className: eI.profileOverlay,
                            children: (0, t.jsx)(Z.A, {
                                user: l,
                                applicationId: D,
                                guildId: m?.guildId ?? void 0,
                                channelId: c,
                                className: eI.profileBanner,
                            }),
                        }),
                    w.map((e) => {
                        let { applicationId: n } = e;
                        return (0, t.jsx)(
                            ee.A.Overlay,
                            {
                                className: eI.profileOverlay,
                                children: (0, t.jsx)(Z.A, {
                                    user: l,
                                    guildId: m?.guildId ?? void 0,
                                    channelId: c,
                                    isGameRelationship: !0,
                                    applicationId: n,
                                    className: eI.profileBanner,
                                }),
                            },
                            n,
                        );
                    }),
                    l.isProvisional &&
                        (0, t.jsx)(ee.A.Overlay, {
                            className: eI.profileOverlay,
                            children: (0, t.jsx)(eu.A, {
                                heading: ej.intl.string(ej.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(d.EpV, { size: "xs", color: "currentColor" }),
                                className: eI.profileBanner,
                                children: (0, t.jsx)(y.T, { userId: l.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    h && (0, t.jsx)(H.A, { isPremiumUser: (0, _.ki)(n), onInteraction: f }),
                    (0, t.jsx)(Q.A, { user: l, className: eI.profileBanner }),
                    m?.private &&
                        (0, t.jsx)(ee.A.Overlay, {
                            className: eI.profileOverlay,
                            children: (0, t.jsx)(q.A, { username: p }),
                        }),
                    (0, t.jsx)("div", {
                        className: eI.profileButtons,
                        children: (0, t.jsx)(es.A, {
                            user: l,
                            currentUser: n,
                            guildId: s,
                            originGuildId: r,
                            channelId: c,
                            displayProfile: m,
                            relationshipType: G,
                            onClose: f,
                        }),
                    }),
                    !F && (0, t.jsx)(W.E, { userBio: m?.bio, setLineClamp: !1 }),
                    k.length > 0 &&
                        (0, t.jsx)(eu.A, {
                            heading: ej.intl.string(ej.t["Uv/eTx"]),
                            children: (0, t.jsx)($.A, { applicationIds: k }),
                        }),
                    (0, t.jsx)(eu.A, {
                        heading: ej.intl.string(ej.t.a6XYD9),
                        children: (0, t.jsx)(J.A, { userId: l.id, guildId: m?.guildId, tooltipDelay: eg.In }),
                    }),
                    m?.guildId != null &&
                        (0, t.jsx)(et.A, {
                            userId: l.id,
                            guildId: m.guildId,
                            className: eI.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "currentColor",
                        }),
                    Y.length > 0 &&
                        (0, t.jsx)(eu.A, {
                            heading: ej.intl.string(ej.t["3fe7U5"]),
                            scrollTargetId: eg.bk.CONNECTIONS,
                            children: (0, t.jsx)(er.A, {
                                connections: Y,
                                userId: l.id,
                                className: eI.profileAppConnections,
                            }),
                        }),
                    ea.length > 0 &&
                        (0, t.jsx)(eu.A, {
                            heading: ej.intl.string(ej.t.PHjkRE),
                            scrollTargetId: eg.bk.APPS,
                            children: (0, t.jsx)(ei.A, {
                                applicationRoleConnections: ea,
                                onClose: f,
                                className: eI.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(ec.A, { userId: l.id }),
                ],
            }),
            m?.profileEffect != null && (0, t.jsx)(A.A, { skuId: m?.profileEffect.skuId, isHovering: b }),
        ],
    });
}
function eE(e) {
    let { user: l, displayProfile: n, children: i } = e,
        { theme: s, primaryColor: a, secondaryColor: r } = (0, L.A)({ user: l, displayProfile: n }),
        { profileThemeStyle: o, profileThemeClassName: d } = (0, D.A)({
            theme: s,
            themeType: null,
            primaryColor: a,
            secondaryColor: r,
        });
    return (0, t.jsx)("div", { className: d, style: o, children: i });
}
function eC(e) {
    let {
            user: l,
            currentUser: n,
            guildId: s,
            originGuildId: u,
            channelId: A,
            messageId: j,
            roleId: I,
            sessionId: v,
            initialTabSection: N,
            initialScrollTarget: y,
            transitionState: C,
            customStatusPrompt: T,
            onClose: _,
            sourceAnalyticsLocations: L = [],
            themeContainerClassName: U,
        } = e,
        M = l.id === n.id,
        { guildId: D, pendingGuildId: V, selectUserProfile: B } = (0, F.A)({ userId: l.id, initialGuildId: s }),
        z = i.useMemo(() => (null != D ? { [D]: [l.id] } : {}), [D, l.id]);
    (0, m.Eq)(z, "UserProfileModalV2");
    let W = (0, S.Ay)(l.id, D),
        H = (0, g.A)(W?.profileFrame?.skuId, "UserProfileModalV2"),
        K = (0, O.X)("UserProfileModalV2"),
        $ = M && K,
        {
            isExpanded: Z,
            isAnimating: X,
            transition: J,
            canShowExpand: q,
            handleExpand: Q,
            handleCollapse: el,
            refs: { expandIconButtonRef: en, expandTabButtonRef: et, collapseButtonRef: ei },
        } = (function () {
            let [e, l] = i.useState(() => window.innerWidth > 928),
                [n, t] = i.useState(!1),
                s = (0, d.pnh)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: ev },
                    onRest: () => t(!1),
                }),
                a = (0, c.A)("(min-width: 929px) and (min-height: 550px)"),
                r = i.useRef(null),
                o = i.useRef(null),
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
                            let e = a ? o.current : r.current;
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
                    refs: { expandIconButtonRef: r, expandTabButtonRef: o, collapseButtonRef: u },
                }
            );
        })(),
        es = $ && q,
        { defaultWishlistId: er } = (0, o.cf)([R.A], () => ({ defaultWishlistId: R.A.getFirstWishlistId(l.id) }));
    (0, E.fw)({ wishlistId: er, userId: l.id });
    let ec = (0, w.fC)(),
        eu = (0, d.zhh)({ opacity: +(null != ec.interactionType), config: { duration: 150 } }),
        eg = (0, G.Nx)() ? null : W?.getBannerURL({ canAnimate: !1, size: 1024 }),
        ef = (0, eA.A)({ user: l, currentUser: n }),
        { analyticsLocations: eN } = (0, x.Ay)([...L, p.A.USER_PROFILE_MODAL_V2]),
        eC = (0, P.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: v,
            guildId: D,
            channelId: A,
            messageId: j,
            roleId: I,
        }),
        eT = b.Ay.useName(W?.guildId, A, l),
        eb = (0, h.GV)(),
        e_ = ej.intl.format(ej.t.KRe1Fk, { name: eT });
    return (0, t.jsx)(x.f5, {
        value: eN,
        children: (0, t.jsx)(P.of, {
            value: eC,
            isLoaded: W?.isLoaded,
            children: (0, t.jsx)(w.Hl, {
                value: ec,
                children: (0, t.jsx)(k.N, {
                    value: y,
                    children: (0, t.jsxs)(d.EOs, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: eI.root,
                        transitionState: C,
                        "aria-labelledby": eb,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(em.A, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(eI.layoutContainer, {
                                        [eI.editingPanelEnabled]: $,
                                        [eI.editingPanelExpanded]: $ && Z,
                                        [eI.isAnimating]: X,
                                        [eI.hasPrivateBanner]: W?.private === !0,
                                    }),
                                    children: [
                                        (0, t.jsxs)(eE, {
                                            user: l,
                                            displayProfile: W,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: eI.modalHeaderButtons,
                                                    children: [
                                                        (0, t.jsx)(ea.A, { isCurrentUser: M, onClose: _ }),
                                                        (0, t.jsx)(d.AC4, {
                                                            children: (0, t.jsx)(d.H, { id: eb, children: e_ }),
                                                        }),
                                                        $ &&
                                                            (!Z || X) &&
                                                            (0, t.jsx)(eo._T, {
                                                                buttonRef: en,
                                                                onClick: Q,
                                                                className: eI.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                es &&
                                                    (0, t.jsx)(eo.oA, {
                                                        innerRef: et,
                                                        onClick: Q,
                                                        className: eI.editingPanelExpandButtonDefault,
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(d.Fmo, {
                                            children: [
                                                $ &&
                                                    J((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(eo.Ay, {
                                                                  className: a()(eI.editingPanel, {
                                                                      [eI.isExpanded]: Z,
                                                                  }),
                                                                  selectedGuildId: V,
                                                                  onSelectGuildId: B,
                                                                  onClose: el,
                                                                  collapseButtonRef: ei,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(ee.A, {
                                                    className: a()(U, eI.profileContentContainer),
                                                    user: l,
                                                    displayProfile: W,
                                                    themeType: eh.d.MODAL_V2,
                                                    privateBanner: W?.private === !0 ? (0, t.jsx)(Y.A, {}) : void 0,
                                                    children: [
                                                        null != eg &&
                                                            (0, t.jsx)("div", {
                                                                className: eI.backgroundImage,
                                                                style: { backgroundImage: `url(${eg})` },
                                                            }),
                                                        null != ec.interactionType &&
                                                            (0, t.jsx)(r.animated.div, {
                                                                style: eu,
                                                                className: eI.backdrop,
                                                            }),
                                                        (0, t.jsx)(ex.A, { className: eI.toast }),
                                                        (0, t.jsx)(ey, {
                                                            user: l,
                                                            currentUser: n,
                                                            guildId: D,
                                                            channelId: A,
                                                            displayProfile: W,
                                                            nickname: eT,
                                                            originGuildId: u,
                                                            hasEntered: C === d.ip4.ENTERED,
                                                            customStatusPrompt: T,
                                                            onClose: _,
                                                        }),
                                                        (0, t.jsx)(ep.A, {
                                                            user: l,
                                                            currentUser: n,
                                                            displayProfile: W,
                                                            guildId: D,
                                                            channelId: A,
                                                            items: ef,
                                                            initialSection: N,
                                                            onClose: _,
                                                        }),
                                                        null != H && (0, t.jsx)(f.A, { frame: H, layout: "MODAL_V2" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, t.jsx)(ed.A, { userId: l.id, guildId: D, className: eI.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
