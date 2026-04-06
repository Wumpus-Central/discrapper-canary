t.d(l, { A: () => eC });
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
    p = t(793574),
    x = t(688810),
    A = t(351966),
    g = t(361628),
    f = t(744808),
    h = t(915089),
    j = t(713517),
    I = t(645507),
    v = t(922590),
    N = t(821269),
    y = t(437774),
    E = t(594832),
    C = t(994500),
    T = t(351906),
    b = t(562153),
    _ = t(474090),
    P = t(183555),
    O = t(622543),
    R = t(591179),
    S = t(950191),
    L = t(101928),
    G = t(837529),
    U = t(346713),
    M = t(484509),
    D = t(195898),
    F = t(567915),
    k = t(716804),
    w = t(679492),
    V = t(718019),
    B = t(31432),
    z = t(915614),
    W = t(389996),
    H = t(223330),
    K = t(559506),
    $ = t(361311),
    Z = t(886891),
    X = t(439053),
    J = t(743987),
    Y = t(312381),
    q = t(501193),
    Q = t(383448),
    ee = t(946356),
    el = t(810396),
    et = t(159218),
    en = t(280645),
    ei = t(291335),
    es = t(807651),
    ea = t(463156),
    er = t(510059),
    eo = t(546136),
    ed = t(982599),
    ec = t(399122),
    eu = t(83013),
    em = t(878210),
    ep = t(515054),
    ex = t(513265),
    eA = t(160983),
    eg = t(518477),
    ef = t(652215),
    eh = t(996988),
    ej = t(985018),
    eI = t(572841);
let ev = (e) => e * (2 - e),
    eN = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3J.SIZE_96, avatarOffsetX: 16 } };
function ey(e) {
    let {
            user: l,
            currentUser: t,
            guildId: s,
            originGuildId: r,
            channelId: c,
            displayProfile: m,
            nickname: p,
            hasEntered: x,
            customStatusPrompt: g,
            onClose: f,
        } = e,
        h = l.id === t.id,
        E = i.useRef(null),
        b = (0, j.M)(E),
        [P, O] = i.useState(),
        R = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? O("compact-xs") : l <= 380 ? O("compact-sm") : O(void 0);
        }, []);
    (0, u.g)(E, R, [], { fireOnMount: !0 });
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
    return (0, n.jsxs)("main", {
        className: a()(eI.profile, null != P && eI[P]),
        ref: E,
        children: [
            (0, n.jsxs)("div", {
                className: eI.profileHeader,
                children: [
                    (0, n.jsx)(z.A, { user: l, displayProfile: m, themeType: eh.d.MODAL_V2, specOverrides: S }),
                    (0, n.jsx)(X.A, { userId: l.id, onClose: f, className: eI.interactionToast }),
                    (0, n.jsx)(V.A, {
                        user: l,
                        displayProfile: m,
                        guildId: s,
                        channelId: c,
                        themeType: eh.d.MODAL_V2,
                        specOverrides: S,
                    }),
                    (0, n.jsx)(et.A, {
                        user: l,
                        guildId: s,
                        channelId: c,
                        themeType: eh.d.MODAL_V2,
                        hasEntered: x,
                        prompt: h ? L : null,
                    }),
                ],
            }),
            (0, n.jsxs)(d.HOs, {
                fade: !0,
                className: eI.profileBody,
                children: [
                    (0, n.jsx)(K.A, { userId: l.id }),
                    (0, n.jsx)(el.A, {
                        user: l,
                        guildId: m?.guildId ?? void 0,
                        onClose: f,
                        nickname: p,
                        nicknameVariant: "heading-xl/semibold",
                        pronouns: m?.pronouns,
                        tags: (0, n.jsx)(B.A, { displayProfile: m, themeType: eh.d.MODAL_V2, onClose: f }),
                    }),
                    G === ef.eA$.PENDING_INCOMING &&
                        (0, n.jsx)(ee.A.Overlay, {
                            className: eI.profileOverlay,
                            children: (0, n.jsx)(Z.A, {
                                user: l,
                                applicationId: D,
                                guildId: m?.guildId ?? void 0,
                                channelId: c,
                                className: eI.profileBanner,
                            }),
                        }),
                    w.map((e) => {
                        let { applicationId: t } = e;
                        return (0, n.jsx)(
                            ee.A.Overlay,
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
                        (0, n.jsx)(ee.A.Overlay, {
                            className: eI.profileOverlay,
                            children: (0, n.jsx)(eu.A, {
                                heading: ej.intl.string(ej.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, n.jsx)(d.EpV, { size: "xs", color: "currentColor" }),
                                className: eI.profileBanner,
                                children: (0, n.jsx)(y.T, { userId: l.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    h && (0, n.jsx)(H.A, { isPremiumUser: (0, _.ki)(t), onInteraction: f }),
                    (0, n.jsx)(Q.A, { user: l, className: eI.profileBanner }),
                    m?.private &&
                        (0, n.jsx)(ee.A.Overlay, {
                            className: eI.profileOverlay,
                            children: (0, n.jsx)(q.A, { username: p }),
                        }),
                    (0, n.jsx)("div", {
                        className: eI.profileButtons,
                        children: (0, n.jsx)(es.A, {
                            user: l,
                            currentUser: t,
                            guildId: s,
                            originGuildId: r,
                            channelId: c,
                            displayProfile: m,
                            relationshipType: G,
                            onClose: f,
                        }),
                    }),
                    !F && (0, n.jsx)(W.E, { userBio: m?.bio, setLineClamp: !1 }),
                    k.length > 0 &&
                        (0, n.jsx)(eu.A, {
                            heading: ej.intl.string(ej.t["Uv/eTx"]),
                            children: (0, n.jsx)($.A, { applicationIds: k }),
                        }),
                    (0, n.jsx)(eu.A, {
                        heading: ej.intl.string(ej.t.a6XYD9),
                        children: (0, n.jsx)(J.A, { userId: l.id, guildId: m?.guildId, tooltipDelay: eg.In }),
                    }),
                    m?.guildId != null &&
                        (0, n.jsx)(en.A, {
                            userId: l.id,
                            guildId: m.guildId,
                            className: eI.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "currentColor",
                        }),
                    Y.length > 0 &&
                        (0, n.jsx)(eu.A, {
                            heading: ej.intl.string(ej.t["3fe7U5"]),
                            scrollTargetId: eg.bk.CONNECTIONS,
                            children: (0, n.jsx)(er.A, {
                                connections: Y,
                                userId: l.id,
                                className: eI.profileAppConnections,
                            }),
                        }),
                    ea.length > 0 &&
                        (0, n.jsx)(eu.A, {
                            heading: ej.intl.string(ej.t.PHjkRE),
                            scrollTargetId: eg.bk.APPS,
                            children: (0, n.jsx)(ei.A, {
                                applicationRoleConnections: ea,
                                onClose: f,
                                className: eI.profileAppConnections,
                            }),
                        }),
                    (0, n.jsx)(ec.A, { userId: l.id }),
                ],
            }),
            m?.profileEffect != null && (0, n.jsx)(A.A, { skuId: m?.profileEffect.skuId, isHovering: b }),
        ],
    });
}
function eE(e) {
    let { user: l, displayProfile: t, children: i } = e,
        { theme: s, primaryColor: a, secondaryColor: r } = (0, L.A)({ user: l, displayProfile: t }),
        { profileThemeStyle: o, profileThemeClassName: d } = (0, D.A)({
            theme: s,
            themeType: null,
            primaryColor: a,
            secondaryColor: r,
        });
    return (0, n.jsx)("div", { className: d, style: o, children: i });
}
function eC(e) {
    let {
            user: l,
            currentUser: t,
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
        M = l.id === t.id,
        { guildId: D, pendingGuildId: V, selectUserProfile: B } = (0, F.A)({ userId: l.id, initialGuildId: s }),
        z = i.useMemo(() => (null != D ? { [D]: [l.id] } : {}), [D, l.id]);
    (0, m.Eq)(z, "UserProfileModalV2");
    let W = (0, S.Ay)(l.id, D),
        H = (0, g.A)(W?.profileFrame?.skuId, "UserProfileModalV2"),
        K = (0, R.X)("UserProfileModalV2"),
        $ = M && K,
        {
            isExpanded: Z,
            isAnimating: X,
            transition: J,
            canShowExpand: q,
            handleExpand: Q,
            handleCollapse: el,
            refs: { expandIconButtonRef: et, expandTabButtonRef: en, collapseButtonRef: ei },
        } = (function () {
            let [e, l] = i.useState(() => window.innerWidth > 928),
                [t, n] = i.useState(!1),
                s = (0, d.pnh)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: ev },
                    onRest: () => n(!1),
                }),
                a = (0, c.A)("(min-width: 929px) and (min-height: 550px)"),
                r = i.useRef(null),
                o = i.useRef(null),
                u = i.useRef(null),
                m = i.useRef(null),
                p = i.useCallback(() => {
                    (m.current = "collapse"), n(!0), l(!0);
                }, []),
                x = i.useCallback(() => {
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
                    handleExpand: p,
                    handleCollapse: x,
                    refs: { expandIconButtonRef: r, expandTabButtonRef: o, collapseButtonRef: u },
                }
            );
        })(),
        es = $ && q,
        { defaultWishlistId: er } = (0, o.cf)([O.A], () => ({ defaultWishlistId: O.A.getFirstWishlistId(l.id) }));
    (0, E.fw)({ wishlistId: er, userId: l.id });
    let ec = (0, w.fC)(),
        eu = (0, d.zhh)({ opacity: +(null != ec.interactionType), config: { duration: 150 } }),
        eg = (0, G.Nx)() ? null : W?.getBannerURL({ canAnimate: !1, size: 1024 }),
        ef = (0, eA.A)({ user: l, currentUser: t }),
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
    return (0, n.jsx)(x.f5, {
        value: eN,
        children: (0, n.jsx)(P.of, {
            value: eC,
            isLoaded: W?.isLoaded,
            children: (0, n.jsx)(w.Hl, {
                value: ec,
                children: (0, n.jsx)(k.N, {
                    value: y,
                    children: (0, n.jsxs)(d.EOs, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: eI.root,
                        transitionState: C,
                        "aria-labelledby": eb,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, n.jsx)(em.A, {
                                children: (0, n.jsxs)("div", {
                                    className: a()(eI.layoutContainer, {
                                        [eI.editingPanelEnabled]: $,
                                        [eI.editingPanelExpanded]: $ && Z,
                                        [eI.isAnimating]: X,
                                        [eI.hasPrivateBanner]: W?.private === !0,
                                    }),
                                    children: [
                                        (0, n.jsxs)(eE, {
                                            user: l,
                                            displayProfile: W,
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: eI.modalHeaderButtons,
                                                    children: [
                                                        (0, n.jsx)(ea.A, { isCurrentUser: M, onClose: _ }),
                                                        (0, n.jsx)(d.AC4, {
                                                            children: (0, n.jsx)(d.H, { id: eb, children: e_ }),
                                                        }),
                                                        $ &&
                                                            (!Z || X) &&
                                                            (0, n.jsx)(eo._T, {
                                                                buttonRef: et,
                                                                onClick: Q,
                                                                className: eI.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                es &&
                                                    (0, n.jsx)(eo.oA, {
                                                        innerRef: en,
                                                        onClick: Q,
                                                        className: eI.editingPanelExpandButtonDefault,
                                                    }),
                                            ],
                                        }),
                                        (0, n.jsxs)(d.Fmo, {
                                            children: [
                                                $ &&
                                                    J((e, l) =>
                                                        l
                                                            ? (0, n.jsx)(eo.Ay, {
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
                                                (0, n.jsxs)(ee.A, {
                                                    className: a()(U, eI.profileContentContainer),
                                                    user: l,
                                                    displayProfile: W,
                                                    themeType: eh.d.MODAL_V2,
                                                    privateBanner: W?.private === !0 ? (0, n.jsx)(Y.A, {}) : void 0,
                                                    children: [
                                                        null != eg &&
                                                            (0, n.jsx)("div", {
                                                                className: eI.backgroundImage,
                                                                style: { backgroundImage: `url(${eg})` },
                                                            }),
                                                        null != ec.interactionType &&
                                                            (0, n.jsx)(r.animated.div, {
                                                                style: eu,
                                                                className: eI.backdrop,
                                                            }),
                                                        (0, n.jsx)(ex.A, { className: eI.toast }),
                                                        (0, n.jsx)(ey, {
                                                            user: l,
                                                            currentUser: t,
                                                            guildId: D,
                                                            channelId: A,
                                                            displayProfile: W,
                                                            nickname: eT,
                                                            originGuildId: u,
                                                            hasEntered: C === d.ip4.ENTERED,
                                                            customStatusPrompt: T,
                                                            onClose: _,
                                                        }),
                                                        (0, n.jsx)(ep.A, {
                                                            user: l,
                                                            currentUser: t,
                                                            displayProfile: W,
                                                            guildId: D,
                                                            channelId: A,
                                                            items: ef,
                                                            initialSection: N,
                                                            onClose: _,
                                                        }),
                                                        null != H && (0, n.jsx)(f.A, { frame: H, layout: "MODAL_V2" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, n.jsx)(ed.A, { userId: l.id, className: eI.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
