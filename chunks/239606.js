i.d(t, { A: () => ep });
var l = i(627968),
    n = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(490249),
    o = i(311907),
    d = i(397927),
    c = i(770178),
    u = i(80682),
    A = i(793574),
    m = i(688810),
    p = i(915089),
    x = i(713517),
    g = i(645507),
    h = i(922590),
    f = i(821269),
    I = i(182592),
    j = i(437774),
    v = i(594832),
    N = i(994500),
    y = i(351906),
    E = i(203982),
    T = i(562153),
    _ = i(474090),
    C = i(183555),
    P = i(622543),
    b = i(950191),
    O = i(837529),
    R = i(346713),
    S = i(484509),
    L = i(716804),
    D = i(679492),
    U = i(718019),
    G = i(31432),
    M = i(915614),
    F = i(389996),
    k = i(223330),
    w = i(559506),
    V = i(361311),
    W = i(886891),
    B = i(439053),
    z = i(743987),
    K = i(312381),
    H = i(383448),
    $ = i(946356),
    Y = i(810396),
    Z = i(159218),
    J = i(280645),
    q = i(291335),
    X = i(807651),
    Q = i(463156),
    ee = i(510059),
    et = i(982599),
    ei = i(399122),
    el = i(83013),
    en = i(515054),
    es = i(513265),
    ea = i(384377),
    er = i(160983),
    eo = i(518477),
    ed = i(652215),
    ec = i(996988),
    eu = i(985018),
    eA = i(661388);
let em = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3J.SIZE_96, avatarOffsetX: 16 } };
function ep(e) {
    let {
            user: t,
            currentUser: i,
            guildId: s,
            channelId: ep,
            messageId: ex,
            roleId: eg,
            sessionId: eh,
            initialTabSection: ef,
            initialScrollTarget: eI,
            transitionState: ej,
            customStatusPrompt: ev,
            openedAt: eN,
            onClose: ey,
            showGuildProfile: eE = !0,
            sourceAnalyticsLocations: eT = [],
            themeContainerClassName: e_,
        } = e,
        { analyticsLocations: eC } = (0, m.Ay)([...eT, A.A.USER_PROFILE_MODAL_V2]),
        eP = (0, C.pb)({
            layout: "MODAL_V2",
            userId: t.id,
            sourceSessionId: eh,
            guildId: s,
            channelId: ep,
            messageId: ex,
            roleId: eg,
            showGuildProfile: eE,
        }),
        eb = n.useRef(null),
        eO = (0, x.M)(eb),
        [eR, eS] = n.useState(!1),
        [eL, eD] = n.useState(),
        eU = n.useCallback((e) => {
            let t = e.contentRect.width;
            t <= 350 ? eD("compact-xs") : t <= 380 ? eD("compact-sm") : eD(void 0);
        }, []);
    (0, c.g)(eb, eU, [], { fireOnMount: !0 });
    let eG = null != eL ? em[eL] : void 0,
        { defaultWishlistId: eM } = (0, o.cf)([P.A], () => ({ defaultWishlistId: P.A.getFirstWishlistId(t.id) }));
    (0, v.fw)({ wishlistId: eM, userId: t.id });
    let eF = (0, D.fC)(),
        ek = (0, d.zhh)({ opacity: +(null != eF.interactionType), config: { duration: 150 } }),
        ew = n.useMemo(() => (null != s ? { [s]: [t.id] } : {}), [s, t.id]);
    (0, u.Eq)(ew, "UserProfileModalV2");
    let eV = (0, b.Ay)(t.id, eE ? s : void 0),
        eW = T.Ay.useName(eV?.guildId, ep, t),
        { relationshipType: eB, originApplicationId: ez } = (0, o.cf)([N.A], () => ({
            relationshipType: N.A.getRelationshipType(t.id),
            originApplicationId: N.A.getOriginApplicationId(t.id),
        })),
        eK = (0, o.bG)([y.A], () => y.A.hidePersonalInformation),
        eH = (0, O.Nx)() ? null : eV?.getBannerURL({ canAnimate: !1, size: 1024 }),
        e$ = n.useMemo(() => ev ?? (0, g.A)(), [ev]),
        eY = (0, er.A)({ user: t, currentUser: i }),
        eZ = (0, f.q)({ userId: t.id }),
        eJ = (0, h.fi)(t.id),
        eq = (0, S.A)(t.id),
        eX = (0, R.A)(t.id),
        eQ = (0, p.GV)(),
        e0 = eu.intl.format(eu.t.KRe1Fk, { name: eW });
    return (
        n.useEffect(() => {
            let e = () => {
                eS(!0),
                    setTimeout(() => {
                        eS(!1);
                    }, 1e3);
            };
            return (
                E._.subscribe(ed.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    E._.unsubscribe(ed.jej.SHAKE_PROFILE_MODAL, e), (0, ea.XA)(null);
                }
            );
        }, []),
        (0, l.jsx)(m.f5, {
            value: eC,
            children: (0, l.jsx)(C.of, {
                value: eP,
                openedAt: eN,
                fetchStartedAt: eV?.fetchStartedAt,
                fetchEndedAt: eV?.fetchEndedAt,
                isLoaded: eV?.isLoaded,
                children: (0, l.jsx)(D.Hl, {
                    value: eF,
                    children: (0, l.jsx)(L.N, {
                        value: eI,
                        children: (0, l.jsxs)(d.EOs, {
                            "data-migration-pending": !0,
                            hideShadow: !0,
                            className: eA.root,
                            transitionState: ej,
                            "aria-labelledby": eQ,
                            parentComponent: "UserProfileModalV2",
                            children: [
                                (0, l.jsxs)(d.bfh, {
                                    isShaking: eR,
                                    intensity: 1.4,
                                    children: [
                                        (0, l.jsx)(d.AC4, { children: (0, l.jsx)(d.H, { id: eQ, children: e0 }) }),
                                        (0, l.jsx)(d.Fmo, {
                                            children: (0, l.jsxs)($.A, {
                                                className: e_,
                                                user: t,
                                                displayProfile: eV,
                                                themeType: ec.d.MODAL_V2,
                                                privateBanner: eV?.private === !0 ? (0, l.jsx)(K.A, {}) : void 0,
                                                children: [
                                                    null != eH &&
                                                        (0, l.jsx)("div", {
                                                            className: eA.backgroundImage,
                                                            style: { backgroundImage: `url(${eH})` },
                                                        }),
                                                    null != eF.interactionType &&
                                                        (0, l.jsx)(r.animated.div, {
                                                            style: ek,
                                                            className: eA.backdrop,
                                                        }),
                                                    (0, l.jsx)(Q.A, {
                                                        className: eA.closeButton,
                                                        isCurrentUser: t.id === i.id,
                                                        onClose: ey,
                                                    }),
                                                    (0, l.jsx)(es.A, {
                                                        onAutoHide: () => (0, ea.XA)(null),
                                                        className: eA.toast,
                                                    }),
                                                    (0, l.jsxs)("div", {
                                                        className: a()(eA.profile, null != eL && eA[eL]),
                                                        ref: eb,
                                                        children: [
                                                            (0, l.jsxs)("div", {
                                                                className: eA.profileHeader,
                                                                children: [
                                                                    (0, l.jsx)(M.A, {
                                                                        user: t,
                                                                        displayProfile: eV,
                                                                        themeType: ec.d.MODAL_V2,
                                                                        specOverrides: eG,
                                                                    }),
                                                                    (0, l.jsx)(B.A, {
                                                                        userId: t.id,
                                                                        onClose: ey,
                                                                        className: eA.interactionToast,
                                                                    }),
                                                                    (0, l.jsx)(U.A, {
                                                                        user: t,
                                                                        displayProfile: eV,
                                                                        guildId: s,
                                                                        channelId: ep,
                                                                        themeType: ec.d.MODAL_V2,
                                                                        specOverrides: eG,
                                                                    }),
                                                                    (0, l.jsx)(Z.A, {
                                                                        user: t,
                                                                        guildId: s,
                                                                        channelId: ep,
                                                                        themeType: ec.d.MODAL_V2,
                                                                        hasEntered: ej === d.ip4.ENTERED,
                                                                        prompt: t.id === i.id ? e$ : null,
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, l.jsxs)(d.HOs, {
                                                                fade: !0,
                                                                className: eA.profileBody,
                                                                children: [
                                                                    (0, l.jsx)(w.A, { userId: t.id }),
                                                                    (0, l.jsx)(Y.A, {
                                                                        user: t,
                                                                        guildId: eV?.guildId ?? void 0,
                                                                        onClose: ey,
                                                                        nickname: T.Ay.useName(eV?.guildId, ep, t),
                                                                        nicknameVariant: "heading-xl/semibold",
                                                                        pronouns: eV?.pronouns,
                                                                        tags: (0, l.jsx)(G.A, {
                                                                            displayProfile: eV,
                                                                            themeType: ec.d.MODAL_V2,
                                                                            onClose: ey,
                                                                        }),
                                                                    }),
                                                                    eB === ed.eA$.PENDING_INCOMING &&
                                                                        (0, l.jsx)($.A.Overlay, {
                                                                            className: eA.profileOverlay,
                                                                            children: (0, l.jsx)(W.A, {
                                                                                user: t,
                                                                                applicationId: ez,
                                                                                guildId: eV?.guildId ?? void 0,
                                                                                channelId: ep,
                                                                                className: eA.profileBanner,
                                                                            }),
                                                                        }),
                                                                    eJ.map((e) => {
                                                                        let { applicationId: i } = e;
                                                                        return (0, l.jsx)(
                                                                            $.A.Overlay,
                                                                            {
                                                                                className: eA.profileOverlay,
                                                                                children: (0, l.jsx)(W.A, {
                                                                                    user: t,
                                                                                    guildId: eV?.guildId ?? void 0,
                                                                                    channelId: ep,
                                                                                    isGameRelationship: !0,
                                                                                    applicationId: i,
                                                                                    className: eA.profileBanner,
                                                                                }),
                                                                            },
                                                                            i,
                                                                        );
                                                                    }),
                                                                    t.isProvisional &&
                                                                        (0, l.jsx)($.A.Overlay, {
                                                                            className: eA.profileOverlay,
                                                                            children: (0, l.jsx)(el.A, {
                                                                                heading: eu.intl.string(eu.t.Iyka0U),
                                                                                headingVariant: "text-md/semibold",
                                                                                headingIcon: (0, l.jsx)(d.EpV, {
                                                                                    size: "xs",
                                                                                    color: "currentColor",
                                                                                }),
                                                                                className: eA.profileBanner,
                                                                                children: (0, l.jsx)(j.T, {
                                                                                    userId: t.id,
                                                                                    variant: "text-sm/normal",
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    t.id === i.id &&
                                                                        (0, l.jsx)(k.A, {
                                                                            isPremiumUser: (0, _.ki)(i),
                                                                            onInteraction: ey,
                                                                        }),
                                                                    (0, l.jsx)(H.A, {
                                                                        user: t,
                                                                        className: eA.profileBanner,
                                                                    }),
                                                                    (0, l.jsx)("div", {
                                                                        className: eA.profileButtons,
                                                                        children: (0, l.jsx)(X.A, {
                                                                            user: t,
                                                                            currentUser: i,
                                                                            guildId: s,
                                                                            channelId: ep,
                                                                            displayProfile: eV,
                                                                            relationshipType: eB,
                                                                            onClose: ey,
                                                                        }),
                                                                    }),
                                                                    eV?.bio != null &&
                                                                        eV?.bio !== "" &&
                                                                        !eK &&
                                                                        (0, l.jsx)(F.A, {
                                                                            userBio: eV.bio,
                                                                            setLineClamp: !1,
                                                                        }),
                                                                    eZ.length > 0 &&
                                                                        (0, l.jsx)(el.A, {
                                                                            heading: eu.intl.string(eu.t["Uv/eTx"]),
                                                                            children: (0, l.jsx)(V.A, {
                                                                                applicationIds: eZ,
                                                                            }),
                                                                        }),
                                                                    (0, l.jsx)(el.A, {
                                                                        heading: eu.intl.string(eu.t.a6XYD9),
                                                                        children: (0, l.jsx)(z.A, {
                                                                            userId: t.id,
                                                                            guildId: eV?.guildId,
                                                                            tooltipDelay: eo.In,
                                                                        }),
                                                                    }),
                                                                    eV?.guildId != null &&
                                                                        (0, l.jsx)(J.A, {
                                                                            userId: t.id,
                                                                            guildId: eV.guildId,
                                                                            className: eA.profileRolesSection,
                                                                            headingVariant: "text-xs/medium",
                                                                            headingColor: "currentColor",
                                                                        }),
                                                                    eq.length > 0 &&
                                                                        (0, l.jsx)(el.A, {
                                                                            heading: eu.intl.string(eu.t["3fe7U5"]),
                                                                            scrollTargetId: eo.bk.CONNECTIONS,
                                                                            children: (0, l.jsx)(ee.A, {
                                                                                connections: eq,
                                                                                userId: t.id,
                                                                                className: eA.profileAppConnections,
                                                                            }),
                                                                        }),
                                                                    eX.length > 0 &&
                                                                        (0, l.jsx)(el.A, {
                                                                            heading: eu.intl.string(eu.t.PHjkRE),
                                                                            scrollTargetId: eo.bk.APPS,
                                                                            children: (0, l.jsx)(q.A, {
                                                                                applicationRoleConnections: eX,
                                                                                onClose: ey,
                                                                                className: eA.profileAppConnections,
                                                                            }),
                                                                        }),
                                                                    (0, l.jsx)(ei.A, { userId: t.id }),
                                                                ],
                                                            }),
                                                            eV?.profileEffect != null &&
                                                                (0, l.jsx)(I.A, {
                                                                    skuId: eV?.profileEffect.skuId,
                                                                    isHovering: eO,
                                                                }),
                                                        ],
                                                    }),
                                                    (0, l.jsx)(en.A, {
                                                        user: t,
                                                        currentUser: i,
                                                        displayProfile: eV,
                                                        guildId: s,
                                                        channelId: ep,
                                                        items: eY,
                                                        initialSection: ef,
                                                        onClose: ey,
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(et.A, { userId: t.id, className: eA.editingToolbar }),
                            ],
                        }),
                    }),
                }),
            }),
        })
    );
}
