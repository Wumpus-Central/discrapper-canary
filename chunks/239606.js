n.d(t, { A: () => eI });
var l = n(627968),
    i = n(64700),
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
    S = n(101928),
    R = n(837529),
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
    et = n(807651),
    en = n(463156),
    el = n(510059),
    ei = n(546136),
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
    let { user: t, isCurrentUser: n, displayProfile: s, children: r } = e,
        o = (0, b.X)("UserProfileModalV2EditingPanelWrapper"),
        c = n && o,
        [u, A] = i.useState(!0),
        { theme: m, primaryColor: p, secondaryColor: x } = (0, S.A)({ user: t, displayProfile: s }),
        { profileThemeStyle: g, profileThemeClassName: h } = (0, U.A)({
            theme: m,
            themeType: null,
            primaryColor: p,
            secondaryColor: x,
        });
    return (0, l.jsxs)("div", {
        className: a()(eg.layoutContainer, { [eg.hasEditingPanel]: c && u }),
        children: [
            c &&
                (u
                    ? (0, l.jsx)(ei.A, { className: eg.editingPanel, onClose: () => A(!1) })
                    : (0, l.jsx)(d.DUT, {
                          className: a()(h, eg.editingPanelExpandButton),
                          style: g,
                          "aria-label": "Open editing panel",
                          onClick: () => A(!0),
                          children: (0, l.jsx)(d.NDp, { size: "sm", color: d.LU0.colors.ICON_STRONG }),
                      })),
            r,
        ],
    });
}
function eI(e) {
    let {
            user: t,
            currentUser: n,
            guildId: s,
            channelId: b,
            messageId: S,
            roleId: U,
            sessionId: ei,
            initialTabSection: eI,
            initialScrollTarget: ej,
            transitionState: ev,
            customStatusPrompt: eN,
            openedAt: ey,
            onClose: eE,
            showGuildProfile: eT = !0,
            sourceAnalyticsLocations: eC = [],
            themeContainerClassName: e_,
        } = e,
        { analyticsLocations: eP } = (0, m.Ay)([...eC, A.A.USER_PROFILE_MODAL_V2]),
        eb = (0, _.pb)({
            layout: "MODAL_V2",
            userId: t.id,
            sourceSessionId: ei,
            guildId: s,
            channelId: b,
            messageId: S,
            roleId: U,
            showGuildProfile: eT,
        }),
        eO = t.id === n.id,
        eS = i.useRef(null),
        eR = (0, x.M)(eS),
        [eL, eD] = i.useState(!1),
        [eU, eG] = i.useState(),
        eM = i.useCallback((e) => {
            let t = e.contentRect.width;
            t <= 350 ? eG("compact-xs") : t <= 380 ? eG("compact-sm") : eG(void 0);
        }, []);
    (0, c.g)(eS, eM, [], { fireOnMount: !0 });
    let eF = null != eU ? eh[eU] : void 0,
        { defaultWishlistId: ek } = (0, o.cf)([P.A], () => ({ defaultWishlistId: P.A.getFirstWishlistId(t.id) }));
    (0, v.fw)({ wishlistId: ek, userId: t.id });
    let ew = (0, M.fC)(),
        eV = (0, d.zhh)({ opacity: +(null != ew.interactionType), config: { duration: 150 } }),
        eB = i.useMemo(() => (null != s ? { [s]: [t.id] } : {}), [s, t.id]);
    (0, u.Eq)(eB, "UserProfileModalV2");
    let eW = (0, O.Ay)(t.id, eT ? s : void 0),
        ez = T.Ay.useName(eW?.guildId, b, t),
        { relationshipType: eH, originApplicationId: eK } = (0, o.cf)([N.A], () => ({
            relationshipType: N.A.getRelationshipType(t.id),
            originApplicationId: N.A.getOriginApplicationId(t.id),
        })),
        e$ = (0, o.bG)([y.A], () => y.A.hidePersonalInformation),
        eY = (0, R.Nx)() ? null : eW?.getBannerURL({ canAnimate: !1, size: 1024 }),
        eZ = i.useMemo(() => eN ?? (0, g.A)(), [eN]),
        eJ = (0, eu.A)({ user: t, currentUser: n }),
        eX = (0, f.q)({ userId: t.id }),
        eq = (0, h.fi)(t.id),
        eQ = (0, D.A)(t.id),
        e0 = (0, L.A)(t.id),
        e9 = (0, p.GV)(),
        e1 = ex.intl.format(ex.t.KRe1Fk, { name: ez });
    return (
        i.useEffect(() => {
            let e = () => {
                eD(!0),
                    setTimeout(() => {
                        eD(!1);
                    }, 1e3);
            };
            return (
                E._.subscribe(em.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    E._.unsubscribe(em.jej.SHAKE_PROFILE_MODAL, e), (0, ec.XA)(null);
                }
            );
        }, []),
        (0, l.jsx)(m.f5, {
            value: eP,
            children: (0, l.jsx)(_.of, {
                value: eb,
                openedAt: ey,
                fetchStartedAt: eW?.fetchStartedAt,
                fetchEndedAt: eW?.fetchEndedAt,
                isLoaded: eW?.isLoaded,
                children: (0, l.jsx)(M.Hl, {
                    value: ew,
                    children: (0, l.jsx)(G.N, {
                        value: ej,
                        children: (0, l.jsxs)(d.EOs, {
                            "data-migration-pending": !0,
                            hideShadow: !0,
                            className: eg.root,
                            transitionState: ev,
                            "aria-labelledby": e9,
                            parentComponent: "UserProfileModalV2",
                            children: [
                                (0, l.jsxs)(d.bfh, {
                                    isShaking: eL,
                                    intensity: 1.4,
                                    children: [
                                        (0, l.jsx)(d.AC4, { children: (0, l.jsx)(d.H, { id: e9, children: e1 }) }),
                                        (0, l.jsx)(d.Fmo, {
                                            children: (0, l.jsx)(ef, {
                                                user: t,
                                                isCurrentUser: eO,
                                                displayProfile: eW,
                                                children: (0, l.jsxs)(J.A, {
                                                    className: a()(e_, eg.themeContainer),
                                                    user: t,
                                                    displayProfile: eW,
                                                    themeType: ep.d.MODAL_V2,
                                                    privateBanner: eW?.private === !0 ? (0, l.jsx)(Y.A, {}) : void 0,
                                                    children: [
                                                        null != eY &&
                                                            (0, l.jsx)("div", {
                                                                className: eg.backgroundImage,
                                                                style: { backgroundImage: `url(${eY})` },
                                                            }),
                                                        null != ew.interactionType &&
                                                            (0, l.jsx)(r.animated.div, {
                                                                style: eV,
                                                                className: eg.backdrop,
                                                            }),
                                                        (0, l.jsx)(en.A, {
                                                            className: eg.modalCloseButton,
                                                            isCurrentUser: eO,
                                                            onClose: eE,
                                                        }),
                                                        (0, l.jsx)(ed.A, {
                                                            onAutoHide: () => (0, ec.XA)(null),
                                                            className: eg.toast,
                                                        }),
                                                        (0, l.jsxs)("div", {
                                                            className: a()(eg.profile, null != eU && eg[eU]),
                                                            ref: eS,
                                                            children: [
                                                                (0, l.jsxs)("div", {
                                                                    className: eg.profileHeader,
                                                                    children: [
                                                                        (0, l.jsx)(w.A, {
                                                                            user: t,
                                                                            displayProfile: eW,
                                                                            themeType: ep.d.MODAL_V2,
                                                                            specOverrides: eF,
                                                                        }),
                                                                        (0, l.jsx)(K.A, {
                                                                            userId: t.id,
                                                                            onClose: eE,
                                                                            className: eg.interactionToast,
                                                                        }),
                                                                        (0, l.jsx)(F.A, {
                                                                            user: t,
                                                                            displayProfile: eW,
                                                                            guildId: s,
                                                                            channelId: b,
                                                                            themeType: ep.d.MODAL_V2,
                                                                            specOverrides: eF,
                                                                        }),
                                                                        (0, l.jsx)(q.A, {
                                                                            user: t,
                                                                            guildId: s,
                                                                            channelId: b,
                                                                            themeType: ep.d.MODAL_V2,
                                                                            hasEntered: ev === d.ip4.ENTERED,
                                                                            prompt: eO ? eZ : null,
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, l.jsxs)(d.HOs, {
                                                                    fade: !0,
                                                                    className: eg.profileBody,
                                                                    children: [
                                                                        (0, l.jsx)(W.A, { userId: t.id }),
                                                                        (0, l.jsx)(X.A, {
                                                                            user: t,
                                                                            guildId: eW?.guildId ?? void 0,
                                                                            onClose: eE,
                                                                            nickname: T.Ay.useName(eW?.guildId, b, t),
                                                                            nicknameVariant: "heading-xl/semibold",
                                                                            pronouns: eW?.pronouns,
                                                                            tags: (0, l.jsx)(k.A, {
                                                                                displayProfile: eW,
                                                                                themeType: ep.d.MODAL_V2,
                                                                                onClose: eE,
                                                                            }),
                                                                        }),
                                                                        eH === em.eA$.PENDING_INCOMING &&
                                                                            (0, l.jsx)(J.A.Overlay, {
                                                                                className: eg.profileOverlay,
                                                                                children: (0, l.jsx)(H.A, {
                                                                                    user: t,
                                                                                    applicationId: eK,
                                                                                    guildId: eW?.guildId ?? void 0,
                                                                                    channelId: b,
                                                                                    className: eg.profileBanner,
                                                                                }),
                                                                            }),
                                                                        eq.map((e) => {
                                                                            let { applicationId: n } = e;
                                                                            return (0, l.jsx)(
                                                                                J.A.Overlay,
                                                                                {
                                                                                    className: eg.profileOverlay,
                                                                                    children: (0, l.jsx)(H.A, {
                                                                                        user: t,
                                                                                        guildId: eW?.guildId ?? void 0,
                                                                                        channelId: b,
                                                                                        isGameRelationship: !0,
                                                                                        applicationId: n,
                                                                                        className: eg.profileBanner,
                                                                                    }),
                                                                                },
                                                                                n,
                                                                            );
                                                                        }),
                                                                        t.isProvisional &&
                                                                            (0, l.jsx)(J.A.Overlay, {
                                                                                className: eg.profileOverlay,
                                                                                children: (0, l.jsx)(er.A, {
                                                                                    heading: ex.intl.string(
                                                                                        ex.t.Iyka0U,
                                                                                    ),
                                                                                    headingVariant: "text-md/semibold",
                                                                                    headingIcon: (0, l.jsx)(d.EpV, {
                                                                                        size: "xs",
                                                                                        color: "currentColor",
                                                                                    }),
                                                                                    className: eg.profileBanner,
                                                                                    children: (0, l.jsx)(j.T, {
                                                                                        userId: t.id,
                                                                                        variant: "text-sm/normal",
                                                                                    }),
                                                                                }),
                                                                            }),
                                                                        eO &&
                                                                            (0, l.jsx)(B.A, {
                                                                                isPremiumUser: (0, C.ki)(n),
                                                                                onInteraction: eE,
                                                                            }),
                                                                        (0, l.jsx)(Z.A, {
                                                                            user: t,
                                                                            className: eg.profileBanner,
                                                                        }),
                                                                        (0, l.jsx)("div", {
                                                                            className: eg.profileButtons,
                                                                            children: (0, l.jsx)(et.A, {
                                                                                user: t,
                                                                                currentUser: n,
                                                                                guildId: s,
                                                                                channelId: b,
                                                                                displayProfile: eW,
                                                                                relationshipType: eH,
                                                                                onClose: eE,
                                                                            }),
                                                                        }),
                                                                        eW?.bio != null &&
                                                                            eW?.bio !== "" &&
                                                                            !e$ &&
                                                                            (0, l.jsx)(V.A, {
                                                                                userBio: eW.bio,
                                                                                setLineClamp: !1,
                                                                            }),
                                                                        eX.length > 0 &&
                                                                            (0, l.jsx)(er.A, {
                                                                                heading: ex.intl.string(ex.t["Uv/eTx"]),
                                                                                children: (0, l.jsx)(z.A, {
                                                                                    applicationIds: eX,
                                                                                }),
                                                                            }),
                                                                        (0, l.jsx)(er.A, {
                                                                            heading: ex.intl.string(ex.t.a6XYD9),
                                                                            children: (0, l.jsx)($.A, {
                                                                                userId: t.id,
                                                                                guildId: eW?.guildId,
                                                                                tooltipDelay: eA.In,
                                                                            }),
                                                                        }),
                                                                        eW?.guildId != null &&
                                                                            (0, l.jsx)(Q.A, {
                                                                                userId: t.id,
                                                                                guildId: eW.guildId,
                                                                                className: eg.profileRolesSection,
                                                                                headingVariant: "text-xs/medium",
                                                                                headingColor: "currentColor",
                                                                            }),
                                                                        eQ.length > 0 &&
                                                                            (0, l.jsx)(er.A, {
                                                                                heading: ex.intl.string(ex.t["3fe7U5"]),
                                                                                scrollTargetId: eA.bk.CONNECTIONS,
                                                                                children: (0, l.jsx)(el.A, {
                                                                                    connections: eQ,
                                                                                    userId: t.id,
                                                                                    className: eg.profileAppConnections,
                                                                                }),
                                                                            }),
                                                                        e0.length > 0 &&
                                                                            (0, l.jsx)(er.A, {
                                                                                heading: ex.intl.string(ex.t.PHjkRE),
                                                                                scrollTargetId: eA.bk.APPS,
                                                                                children: (0, l.jsx)(ee.A, {
                                                                                    applicationRoleConnections: e0,
                                                                                    onClose: eE,
                                                                                    className: eg.profileAppConnections,
                                                                                }),
                                                                            }),
                                                                        (0, l.jsx)(ea.A, { userId: t.id }),
                                                                    ],
                                                                }),
                                                                eW?.profileEffect != null &&
                                                                    (0, l.jsx)(I.A, {
                                                                        skuId: eW?.profileEffect.skuId,
                                                                        isHovering: eR,
                                                                    }),
                                                            ],
                                                        }),
                                                        (0, l.jsx)(eo.A, {
                                                            user: t,
                                                            currentUser: n,
                                                            displayProfile: eW,
                                                            guildId: s,
                                                            channelId: b,
                                                            items: eJ,
                                                            initialSection: eI,
                                                            onClose: eE,
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(es.A, { userId: t.id, className: eg.pendingChangesToolbar }),
                            ],
                        }),
                    }),
                }),
            }),
        })
    );
}
