n.d(l, { A: () => eI });
var i = n(627968),
    t = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(490249),
    o = n(311907),
    d = n(397927),
    c = n(770178),
    u = n(80682),
    A = n(793574),
    m = n(688810),
    p = n(915089),
    x = n(713517),
    g = n(645507),
    h = n(922590),
    f = n(821269),
    I = n(182592),
    j = n(437774),
    v = n(594832),
    N = n(994500),
    y = n(351906),
    E = n(203982),
    T = n(562153),
    C = n(474090),
    _ = n(183555),
    P = n(622543),
    b = n(591179),
    O = n(950191),
    R = n(101928),
    S = n(837529),
    L = n(346713),
    D = n(484509),
    U = n(195898),
    G = n(716804),
    M = n(679492),
    F = n(718019),
    k = n(31432),
    w = n(915614),
    V = n(389996),
    B = n(223330),
    W = n(559506),
    z = n(361311),
    H = n(886891),
    K = n(439053),
    $ = n(743987),
    Y = n(312381),
    Z = n(383448),
    J = n(946356),
    X = n(810396),
    q = n(159218),
    Q = n(280645),
    ee = n(291335),
    el = n(807651),
    en = n(463156),
    ei = n(510059),
    et = n(546136),
    es = n(982599),
    ea = n(399122),
    er = n(83013),
    eo = n(515054),
    ed = n(513265),
    ec = n(384377),
    eu = n(160983),
    eA = n(518477),
    em = n(652215),
    ep = n(996988),
    ex = n(985018),
    eg = n(156614);
let eh = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3J.SIZE_96, avatarOffsetX: 16 } };
function ef(e) {
    let { user: l, isCurrentUser: n, displayProfile: s, children: r } = e,
        o = (0, b.X)("UserProfileModalV2EditingPanelWrapper"),
        c = n && o,
        [u, A] = t.useState(!0),
        { theme: m, primaryColor: p, secondaryColor: x } = (0, R.A)({ user: l, displayProfile: s }),
        { profileThemeStyle: g, profileThemeClassName: h } = (0, U.A)({
            theme: m,
            themeType: null,
            primaryColor: p,
            secondaryColor: x,
        });
    return (0, i.jsxs)("div", {
        className: a()(eg.layoutContainer, { [eg.hasEditingPanel]: c && u }),
        children: [
            c &&
                (u
                    ? (0, i.jsx)(et.A, { className: eg.editingPanel, onClose: () => A(!1) })
                    : (0, i.jsx)(d.DUT, {
                          className: a()(h, eg.editingPanelExpandButton),
                          style: g,
                          "aria-label": "Open editing panel",
                          onClick: () => A(!0),
                          children: (0, i.jsx)(d.NDp, { size: "sm", color: d.LU0.colors.ICON_STRONG }),
                      })),
            r,
        ],
    });
}
function eI(e) {
    let {
            user: l,
            currentUser: n,
            guildId: s,
            channelId: b,
            messageId: R,
            roleId: U,
            sessionId: et,
            initialTabSection: eI,
            initialScrollTarget: ej,
            transitionState: ev,
            customStatusPrompt: eN,
            onClose: ey,
            showGuildProfile: eE = !0,
            sourceAnalyticsLocations: eT = [],
            themeContainerClassName: eC,
        } = e,
        { analyticsLocations: e_ } = (0, m.Ay)([...eT, A.A.USER_PROFILE_MODAL_V2]),
        eP = (0, _.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: et,
            guildId: s,
            channelId: b,
            messageId: R,
            roleId: U,
            showGuildProfile: eE,
        }),
        eb = l.id === n.id,
        eO = t.useRef(null),
        eR = (0, x.M)(eO),
        [eS, eL] = t.useState(!1),
        [eD, eU] = t.useState(),
        eG = t.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? eU("compact-xs") : l <= 380 ? eU("compact-sm") : eU(void 0);
        }, []);
    (0, c.g)(eO, eG, [], { fireOnMount: !0 });
    let eM = null != eD ? eh[eD] : void 0,
        { defaultWishlistId: eF } = (0, o.cf)([P.A], () => ({ defaultWishlistId: P.A.getFirstWishlistId(l.id) }));
    (0, v.fw)({ wishlistId: eF, userId: l.id });
    let ek = (0, M.fC)(),
        ew = (0, d.zhh)({ opacity: +(null != ek.interactionType), config: { duration: 150 } }),
        eV = t.useMemo(() => (null != s ? { [s]: [l.id] } : {}), [s, l.id]);
    (0, u.Eq)(eV, "UserProfileModalV2");
    let eB = (0, O.Ay)(l.id, eE ? s : void 0),
        eW = T.Ay.useName(eB?.guildId, b, l),
        { relationshipType: ez, originApplicationId: eH } = (0, o.cf)([N.A], () => ({
            relationshipType: N.A.getRelationshipType(l.id),
            originApplicationId: N.A.getOriginApplicationId(l.id),
        })),
        eK = (0, o.bG)([y.A], () => y.A.hidePersonalInformation),
        e$ = (0, S.Nx)() ? null : eB?.getBannerURL({ canAnimate: !1, size: 1024 }),
        eY = t.useMemo(() => eN ?? (0, g.A)(), [eN]),
        eZ = (0, eu.A)({ user: l, currentUser: n }),
        eJ = (0, f.q)({ userId: l.id }),
        eX = (0, h.fi)(l.id),
        eq = (0, D.A)(l.id),
        eQ = (0, L.A)(l.id),
        e0 = (0, p.GV)(),
        e9 = ex.intl.format(ex.t.KRe1Fk, { name: eW });
    return (
        t.useEffect(() => {
            let e = () => {
                eL(!0),
                    setTimeout(() => {
                        eL(!1);
                    }, 1e3);
            };
            return (
                E._.subscribe(em.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    E._.unsubscribe(em.jej.SHAKE_PROFILE_MODAL, e), (0, ec.XA)(null);
                }
            );
        }, []),
        (0, i.jsx)(m.f5, {
            value: e_,
            children: (0, i.jsx)(_.of, {
                value: eP,
                isLoaded: eB?.isLoaded,
                children: (0, i.jsx)(M.Hl, {
                    value: ek,
                    children: (0, i.jsx)(G.N, {
                        value: ej,
                        children: (0, i.jsxs)(d.EOs, {
                            "data-migration-pending": !0,
                            hideShadow: !0,
                            className: eg.root,
                            transitionState: ev,
                            "aria-labelledby": e0,
                            parentComponent: "UserProfileModalV2",
                            children: [
                                (0, i.jsxs)(d.bfh, {
                                    isShaking: eS,
                                    intensity: 1.4,
                                    children: [
                                        (0, i.jsx)(d.AC4, { children: (0, i.jsx)(d.H, { id: e0, children: e9 }) }),
                                        (0, i.jsx)(d.Fmo, {
                                            children: (0, i.jsx)(ef, {
                                                user: l,
                                                isCurrentUser: eb,
                                                displayProfile: eB,
                                                children: (0, i.jsxs)(J.A, {
                                                    className: a()(eC, eg.themeContainer),
                                                    user: l,
                                                    displayProfile: eB,
                                                    themeType: ep.d.MODAL_V2,
                                                    privateBanner: eB?.private === !0 ? (0, i.jsx)(Y.A, {}) : void 0,
                                                    children: [
                                                        null != e$ &&
                                                            (0, i.jsx)("div", {
                                                                className: eg.backgroundImage,
                                                                style: { backgroundImage: `url(${e$})` },
                                                            }),
                                                        null != ek.interactionType &&
                                                            (0, i.jsx)(r.animated.div, {
                                                                style: ew,
                                                                className: eg.backdrop,
                                                            }),
                                                        (0, i.jsx)(en.A, {
                                                            className: eg.modalCloseButton,
                                                            isCurrentUser: eb,
                                                            onClose: ey,
                                                        }),
                                                        (0, i.jsx)(ed.A, {
                                                            onAutoHide: () => (0, ec.XA)(null),
                                                            className: eg.toast,
                                                        }),
                                                        (0, i.jsxs)("div", {
                                                            className: a()(eg.profile, null != eD && eg[eD]),
                                                            ref: eO,
                                                            children: [
                                                                (0, i.jsxs)("div", {
                                                                    className: eg.profileHeader,
                                                                    children: [
                                                                        (0, i.jsx)(w.A, {
                                                                            user: l,
                                                                            displayProfile: eB,
                                                                            themeType: ep.d.MODAL_V2,
                                                                            specOverrides: eM,
                                                                        }),
                                                                        (0, i.jsx)(K.A, {
                                                                            userId: l.id,
                                                                            onClose: ey,
                                                                            className: eg.interactionToast,
                                                                        }),
                                                                        (0, i.jsx)(F.A, {
                                                                            user: l,
                                                                            displayProfile: eB,
                                                                            guildId: s,
                                                                            channelId: b,
                                                                            themeType: ep.d.MODAL_V2,
                                                                            specOverrides: eM,
                                                                        }),
                                                                        (0, i.jsx)(q.A, {
                                                                            user: l,
                                                                            guildId: s,
                                                                            channelId: b,
                                                                            themeType: ep.d.MODAL_V2,
                                                                            hasEntered: ev === d.ip4.ENTERED,
                                                                            prompt: eb ? eY : null,
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, i.jsxs)(d.HOs, {
                                                                    fade: !0,
                                                                    className: eg.profileBody,
                                                                    children: [
                                                                        (0, i.jsx)(W.A, { userId: l.id }),
                                                                        (0, i.jsx)(X.A, {
                                                                            user: l,
                                                                            guildId: eB?.guildId ?? void 0,
                                                                            onClose: ey,
                                                                            nickname: T.Ay.useName(eB?.guildId, b, l),
                                                                            nicknameVariant: "heading-xl/semibold",
                                                                            pronouns: eB?.pronouns,
                                                                            tags: (0, i.jsx)(k.A, {
                                                                                displayProfile: eB,
                                                                                themeType: ep.d.MODAL_V2,
                                                                                onClose: ey,
                                                                            }),
                                                                        }),
                                                                        ez === em.eA$.PENDING_INCOMING &&
                                                                            (0, i.jsx)(J.A.Overlay, {
                                                                                className: eg.profileOverlay,
                                                                                children: (0, i.jsx)(H.A, {
                                                                                    user: l,
                                                                                    applicationId: eH,
                                                                                    guildId: eB?.guildId ?? void 0,
                                                                                    channelId: b,
                                                                                    className: eg.profileBanner,
                                                                                }),
                                                                            }),
                                                                        eX.map((e) => {
                                                                            let { applicationId: n } = e;
                                                                            return (0, i.jsx)(
                                                                                J.A.Overlay,
                                                                                {
                                                                                    className: eg.profileOverlay,
                                                                                    children: (0, i.jsx)(H.A, {
                                                                                        user: l,
                                                                                        guildId: eB?.guildId ?? void 0,
                                                                                        channelId: b,
                                                                                        isGameRelationship: !0,
                                                                                        applicationId: n,
                                                                                        className: eg.profileBanner,
                                                                                    }),
                                                                                },
                                                                                n,
                                                                            );
                                                                        }),
                                                                        l.isProvisional &&
                                                                            (0, i.jsx)(J.A.Overlay, {
                                                                                className: eg.profileOverlay,
                                                                                children: (0, i.jsx)(er.A, {
                                                                                    heading: ex.intl.string(
                                                                                        ex.t.Iyka0U,
                                                                                    ),
                                                                                    headingVariant: "text-md/semibold",
                                                                                    headingIcon: (0, i.jsx)(d.EpV, {
                                                                                        size: "xs",
                                                                                        color: "currentColor",
                                                                                    }),
                                                                                    className: eg.profileBanner,
                                                                                    children: (0, i.jsx)(j.T, {
                                                                                        userId: l.id,
                                                                                        variant: "text-sm/normal",
                                                                                    }),
                                                                                }),
                                                                            }),
                                                                        eb &&
                                                                            (0, i.jsx)(B.A, {
                                                                                isPremiumUser: (0, C.ki)(n),
                                                                                onInteraction: ey,
                                                                            }),
                                                                        (0, i.jsx)(Z.A, {
                                                                            user: l,
                                                                            className: eg.profileBanner,
                                                                        }),
                                                                        (0, i.jsx)("div", {
                                                                            className: eg.profileButtons,
                                                                            children: (0, i.jsx)(el.A, {
                                                                                user: l,
                                                                                currentUser: n,
                                                                                guildId: s,
                                                                                channelId: b,
                                                                                displayProfile: eB,
                                                                                relationshipType: ez,
                                                                                onClose: ey,
                                                                            }),
                                                                        }),
                                                                        eB?.bio != null &&
                                                                            eB?.bio !== "" &&
                                                                            !eK &&
                                                                            (0, i.jsx)(V.A, {
                                                                                userBio: eB.bio,
                                                                                setLineClamp: !1,
                                                                            }),
                                                                        eJ.length > 0 &&
                                                                            (0, i.jsx)(er.A, {
                                                                                heading: ex.intl.string(ex.t["Uv/eTx"]),
                                                                                children: (0, i.jsx)(z.A, {
                                                                                    applicationIds: eJ,
                                                                                }),
                                                                            }),
                                                                        (0, i.jsx)(er.A, {
                                                                            heading: ex.intl.string(ex.t.a6XYD9),
                                                                            children: (0, i.jsx)($.A, {
                                                                                userId: l.id,
                                                                                guildId: eB?.guildId,
                                                                                tooltipDelay: eA.In,
                                                                            }),
                                                                        }),
                                                                        eB?.guildId != null &&
                                                                            (0, i.jsx)(Q.A, {
                                                                                userId: l.id,
                                                                                guildId: eB.guildId,
                                                                                className: eg.profileRolesSection,
                                                                                headingVariant: "text-xs/medium",
                                                                                headingColor: "currentColor",
                                                                            }),
                                                                        eq.length > 0 &&
                                                                            (0, i.jsx)(er.A, {
                                                                                heading: ex.intl.string(ex.t["3fe7U5"]),
                                                                                scrollTargetId: eA.bk.CONNECTIONS,
                                                                                children: (0, i.jsx)(ei.A, {
                                                                                    connections: eq,
                                                                                    userId: l.id,
                                                                                    className: eg.profileAppConnections,
                                                                                }),
                                                                            }),
                                                                        eQ.length > 0 &&
                                                                            (0, i.jsx)(er.A, {
                                                                                heading: ex.intl.string(ex.t.PHjkRE),
                                                                                scrollTargetId: eA.bk.APPS,
                                                                                children: (0, i.jsx)(ee.A, {
                                                                                    applicationRoleConnections: eQ,
                                                                                    onClose: ey,
                                                                                    className: eg.profileAppConnections,
                                                                                }),
                                                                            }),
                                                                        (0, i.jsx)(ea.A, { userId: l.id }),
                                                                    ],
                                                                }),
                                                                eB?.profileEffect != null &&
                                                                    (0, i.jsx)(I.A, {
                                                                        skuId: eB?.profileEffect.skuId,
                                                                        isHovering: eR,
                                                                    }),
                                                            ],
                                                        }),
                                                        (0, i.jsx)(eo.A, {
                                                            user: l,
                                                            currentUser: n,
                                                            displayProfile: eB,
                                                            guildId: s,
                                                            channelId: b,
                                                            items: eZ,
                                                            initialSection: eI,
                                                            onClose: ey,
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(es.A, { userId: l.id, className: eg.pendingChangesToolbar }),
                            ],
                        }),
                    }),
                }),
            }),
        })
    );
}
