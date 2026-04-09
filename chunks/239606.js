n.d(l, { A: () => eE });
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
    x = n(793574),
    p = n(688810),
    A = n(351966),
    g = n(361628),
    f = n(744808),
    h = n(915089),
    j = n(713517),
    v = n(645507),
    I = n(922590),
    N = n(821269),
    y = n(437774),
    C = n(594832),
    E = n(994500),
    T = n(351906),
    b = n(562153),
    P = n(474090),
    _ = n(183555),
    R = n(622543),
    O = n(591179),
    S = n(950191),
    L = n(101928),
    U = n(837529),
    G = n(346713),
    k = n(484509),
    D = n(195898),
    M = n(567915),
    F = n(716804),
    w = n(679492),
    V = n(718019),
    B = n(31432),
    z = n(915614),
    W = n(389996),
    H = n(223330),
    $ = n(559506),
    K = n(361311),
    Y = n(886891),
    Z = n(439053),
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
    eu = n(83013),
    em = n(878210),
    ex = n(515054),
    ep = n(513265),
    eA = n(160983),
    eg = n(518477),
    ef = n(652215),
    eh = n(996988),
    ej = n(985018),
    ev = n(572841);
let eI = (e) => e * (2 - e),
    eN = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3J.SIZE_96, avatarOffsetX: 16 } };
function ey(e) {
    let {
            user: l,
            currentUser: n,
            guildId: s,
            originGuildId: r,
            channelId: c,
            displayProfile: m,
            nickname: x,
            hasEntered: p,
            customStatusPrompt: g,
            onClose: f,
        } = e,
        h = l.id === n.id,
        C = i.useRef(null),
        b = (0, j.M)(C),
        [_, R] = i.useState(),
        O = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? R("compact-xs") : l <= 380 ? R("compact-sm") : R(void 0);
        }, []);
    (0, u.g)(C, O, [], { fireOnMount: !0 });
    let S = null != _ ? eN[_] : void 0,
        L = i.useMemo(() => g ?? (0, v.A)(), [g]),
        { relationshipType: U, originApplicationId: D } = (0, o.cf)([E.A], () => ({
            relationshipType: E.A.getRelationshipType(l.id),
            originApplicationId: E.A.getOriginApplicationId(l.id),
        })),
        M = (0, o.bG)([T.A], () => T.A.hidePersonalInformation),
        F = (0, N.q)({ userId: l.id }),
        w = (0, I.fi)(l.id),
        q = (0, k.A)(l.id),
        ea = (0, G.A)(l.id);
    return (0, t.jsxs)("main", {
        className: a()(ev.profile, null != _ && ev[_]),
        ref: C,
        children: [
            (0, t.jsxs)("div", {
                className: ev.profileHeader,
                children: [
                    (0, t.jsx)(z.A, { user: l, displayProfile: m, themeType: eh.d.MODAL_V2, specOverrides: S }),
                    (0, t.jsx)(Z.A, { userId: l.id, onClose: f, className: ev.interactionToast }),
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
                        hasEntered: p,
                        prompt: h ? L : null,
                    }),
                ],
            }),
            (0, t.jsxs)(d.HOs, {
                fade: !0,
                className: ev.profileBody,
                children: [
                    (0, t.jsx)($.A, { userId: l.id }),
                    (0, t.jsx)(el.A, {
                        user: l,
                        guildId: m?.guildId ?? void 0,
                        onClose: f,
                        nickname: x,
                        nicknameVariant: "heading-xl/semibold",
                        pronouns: m?.pronouns,
                        tags: (0, t.jsx)(B.A, { displayProfile: m, themeType: eh.d.MODAL_V2, onClose: f }),
                    }),
                    U === ef.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(ee.A.Overlay, {
                            className: ev.profileOverlay,
                            children: (0, t.jsx)(Y.A, {
                                user: l,
                                applicationId: D,
                                guildId: m?.guildId ?? void 0,
                                channelId: c,
                                className: ev.profileBanner,
                            }),
                        }),
                    w.map((e) => {
                        let { applicationId: n } = e;
                        return (0, t.jsx)(
                            ee.A.Overlay,
                            {
                                className: ev.profileOverlay,
                                children: (0, t.jsx)(Y.A, {
                                    user: l,
                                    guildId: m?.guildId ?? void 0,
                                    channelId: c,
                                    isGameRelationship: !0,
                                    applicationId: n,
                                    className: ev.profileBanner,
                                }),
                            },
                            n,
                        );
                    }),
                    l.isProvisional &&
                        (0, t.jsx)(ee.A.Overlay, {
                            className: ev.profileOverlay,
                            children: (0, t.jsx)(eu.A, {
                                heading: ej.intl.string(ej.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(d.EpV, { size: "xs", color: "currentColor" }),
                                className: ev.profileBanner,
                                children: (0, t.jsx)(y.T, { userId: l.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    h && (0, t.jsx)(H.A, { isPremiumUser: (0, P.ki)(n), onInteraction: f }),
                    (0, t.jsx)(Q.A, { user: l, className: ev.profileBanner }),
                    m?.private &&
                        (0, t.jsx)(ee.A.Overlay, {
                            className: ev.profileOverlay,
                            children: (0, t.jsx)(J.A, { username: x }),
                        }),
                    (0, t.jsx)("div", {
                        className: ev.profileButtons,
                        children: (0, t.jsx)(es.A, {
                            user: l,
                            currentUser: n,
                            guildId: s,
                            originGuildId: r,
                            channelId: c,
                            displayProfile: m,
                            relationshipType: U,
                            onClose: f,
                        }),
                    }),
                    !M && (0, t.jsx)(W.E, { userBio: m?.bio, setLineClamp: !1 }),
                    F.length > 0 &&
                        (0, t.jsx)(eu.A, {
                            heading: ej.intl.string(ej.t["Uv/eTx"]),
                            children: (0, t.jsx)(K.A, { applicationIds: F }),
                        }),
                    (0, t.jsx)(eu.A, {
                        heading: ej.intl.string(ej.t.a6XYD9),
                        children: (0, t.jsx)(X.A, { userId: l.id, guildId: m?.guildId, tooltipDelay: eg.In }),
                    }),
                    m?.guildId != null &&
                        (0, t.jsx)(et.A, {
                            userId: l.id,
                            guildId: m.guildId,
                            className: ev.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "currentColor",
                        }),
                    q.length > 0 &&
                        (0, t.jsx)(eu.A, {
                            heading: ej.intl.string(ej.t["3fe7U5"]),
                            scrollTargetId: eg.bk.CONNECTIONS,
                            children: (0, t.jsx)(er.A, {
                                connections: q,
                                userId: l.id,
                                className: ev.profileAppConnections,
                            }),
                        }),
                    ea.length > 0 &&
                        (0, t.jsx)(eu.A, {
                            heading: ej.intl.string(ej.t.PHjkRE),
                            scrollTargetId: eg.bk.APPS,
                            children: (0, t.jsx)(ei.A, {
                                applicationRoleConnections: ea,
                                onClose: f,
                                className: ev.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(ec.A, { userId: l.id }),
                ],
            }),
            m?.profileEffect != null && (0, t.jsx)(A.A, { skuId: m?.profileEffect.skuId, isHovering: b }),
        ],
    });
}
function eC(e) {
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
function eE(e) {
    let {
            user: l,
            currentUser: n,
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
            themeContainerClassName: G,
        } = e,
        k = l.id === n.id,
        { guildId: D, pendingGuildId: V, selectUserProfile: B } = (0, M.A)({ userId: l.id, initialGuildId: s }),
        z = i.useMemo(() => (null != D ? { [D]: [l.id] } : {}), [D, l.id]);
    (0, m.Eq)(z, "UserProfileModalV2");
    let W = (0, S.Ay)(l.id, D),
        H = (0, g.A)(W?.profileFrame?.skuId, "UserProfileModalV2"),
        $ = (0, O.X)("UserProfileModalV2"),
        K = k && $,
        {
            isExpanded: Y,
            isAnimating: Z,
            transition: X,
            canShowExpand: J,
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
                    config: { duration: 300, easing: eI },
                    onRest: () => t(!1),
                }),
                a = (0, c.A)("(min-width: 929px) and (min-height: 550px)"),
                r = i.useRef(null),
                o = i.useRef(null),
                u = i.useRef(null),
                m = i.useRef(null),
                x = i.useCallback(() => {
                    (m.current = "collapse"), t(!0), l(!0);
                }, []),
                p = i.useCallback(() => {
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
                    handleExpand: x,
                    handleCollapse: p,
                    refs: { expandIconButtonRef: r, expandTabButtonRef: o, collapseButtonRef: u },
                }
            );
        })(),
        es = K && J,
        { defaultWishlistId: er } = (0, o.cf)([R.A], () => ({ defaultWishlistId: R.A.getFirstWishlistId(l.id) }));
    (0, C.fw)({ wishlistId: er, userId: l.id });
    let ec = (0, w.fC)(),
        eu = (0, d.zhh)({ opacity: +(null != ec.interactionType), config: { duration: 150 } }),
        eg = (0, U.Nx)() ? null : W?.getBannerURL({ canAnimate: !1, size: 1024 }),
        ef = (0, eA.A)({ user: l, currentUser: n }),
        { analyticsLocations: eN } = (0, p.Ay)([...L, x.A.USER_PROFILE_MODAL_V2]),
        eE = (0, _.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: I,
            guildId: D,
            channelId: A,
            messageId: j,
            roleId: v,
        }),
        eT = b.Ay.useName(W?.guildId, A, l),
        eb = (0, h.GV)(),
        eP = ej.intl.format(ej.t.KRe1Fk, { name: eT });
    return (0, t.jsx)(p.f5, {
        value: eN,
        children: (0, t.jsx)(_.of, {
            value: eE,
            isLoaded: W?.isLoaded,
            children: (0, t.jsx)(w.Hl, {
                value: ec,
                children: (0, t.jsx)(F.N, {
                    value: y,
                    children: (0, t.jsxs)(d.EOs, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: ev.root,
                        transitionState: E,
                        "aria-labelledby": eb,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(em.A, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(ev.layoutContainer, {
                                        [ev.editingPanelEnabled]: K,
                                        [ev.editingPanelExpanded]: K && Y,
                                        [ev.isAnimating]: Z,
                                        [ev.hasPrivateBanner]: W?.private === !0,
                                    }),
                                    children: [
                                        (0, t.jsxs)(eC, {
                                            user: l,
                                            displayProfile: W,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: ev.modalHeaderButtons,
                                                    children: [
                                                        (0, t.jsx)(ea.A, { isCurrentUser: k, onClose: P }),
                                                        (0, t.jsx)(d.AC4, {
                                                            children: (0, t.jsx)(d.H, { id: eb, children: eP }),
                                                        }),
                                                        K &&
                                                            (!Y || Z) &&
                                                            (0, t.jsx)(eo._T, {
                                                                buttonRef: en,
                                                                onClick: Q,
                                                                className: ev.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                es &&
                                                    (0, t.jsx)(eo.oA, {
                                                        innerRef: et,
                                                        onClick: Q,
                                                        className: ev.editingPanelExpandButtonDefault,
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(d.Fmo, {
                                            children: [
                                                K &&
                                                    X((e, n) =>
                                                        n
                                                            ? (0, t.jsx)(eo.Ay, {
                                                                  className: a()(ev.editingPanel, {
                                                                      [ev.isExpanded]: Y,
                                                                  }),
                                                                  user: l,
                                                                  selectedGuildId: V,
                                                                  onSelectGuildId: B,
                                                                  onClose: el,
                                                                  collapseButtonRef: ei,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(ee.A, {
                                                    className: a()(G, ev.profileContentContainer),
                                                    user: l,
                                                    displayProfile: W,
                                                    themeType: eh.d.MODAL_V2,
                                                    privateBanner: W?.private === !0 ? (0, t.jsx)(q.A, {}) : void 0,
                                                    children: [
                                                        null != eg &&
                                                            (0, t.jsx)("div", {
                                                                className: ev.backgroundImage,
                                                                style: { backgroundImage: `url(${eg})` },
                                                            }),
                                                        null != ec.interactionType &&
                                                            (0, t.jsx)(r.animated.div, {
                                                                style: eu,
                                                                className: ev.backdrop,
                                                            }),
                                                        (0, t.jsx)(ep.A, { className: ev.toast }),
                                                        (0, t.jsx)(ey, {
                                                            user: l,
                                                            currentUser: n,
                                                            guildId: D,
                                                            channelId: A,
                                                            displayProfile: W,
                                                            nickname: eT,
                                                            originGuildId: u,
                                                            hasEntered: E === d.ip4.ENTERED,
                                                            customStatusPrompt: T,
                                                            onClose: P,
                                                        }),
                                                        (0, t.jsx)(ex.A, {
                                                            user: l,
                                                            currentUser: n,
                                                            displayProfile: W,
                                                            guildId: D,
                                                            channelId: A,
                                                            items: ef,
                                                            initialSection: N,
                                                            onClose: P,
                                                        }),
                                                        null != H && (0, t.jsx)(f.A, { frame: H, layout: "MODAL_V2" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, t.jsx)(ed.A, { userId: l.id, guildId: D, className: ev.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
