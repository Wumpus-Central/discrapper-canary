i.d(l, { A: () => eI });
var n = i(627968),
    t = i(64700),
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
    j = i(182592),
    I = i(437774),
    v = i(594832),
    N = i(994500),
    y = i(351906),
    E = i(203982),
    T = i(562153),
    C = i(474090),
    _ = i(183555),
    P = i(622543),
    O = i(591179),
    b = i(950191),
    R = i(101928),
    S = i(837529),
    L = i(346713),
    D = i(484509),
    U = i(195898),
    G = i(716804),
    M = i(679492),
    F = i(718019),
    k = i(31432),
    w = i(915614),
    V = i(389996),
    B = i(223330),
    W = i(559506),
    z = i(361311),
    H = i(886891),
    K = i(439053),
    $ = i(743987),
    Y = i(312381),
    Z = i(501193),
    J = i(383448),
    X = i(946356),
    q = i(810396),
    Q = i(159218),
    ee = i(280645),
    el = i(291335),
    ei = i(807651),
    en = i(463156),
    et = i(510059),
    es = i(546136),
    ea = i(982599),
    er = i(399122),
    eo = i(83013),
    ed = i(515054),
    ec = i(513265),
    eu = i(384377),
    eA = i(160983),
    em = i(518477),
    ep = i(652215),
    ex = i(996988),
    eg = i(985018),
    eh = i(156614);
let ef = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3J.SIZE_96, avatarOffsetX: 16 } };
function ej(e) {
    let { user: l, isCurrentUser: i, displayProfile: s, children: r } = e,
        o = (0, O.X)("UserProfileModalV2EditingPanelWrapper"),
        c = i && o,
        [u, A] = t.useState(!0),
        { theme: m, primaryColor: p, secondaryColor: x } = (0, R.A)({ user: l, displayProfile: s }),
        { profileThemeStyle: g, profileThemeClassName: h } = (0, U.A)({
            theme: m,
            themeType: null,
            primaryColor: p,
            secondaryColor: x,
        });
    return (0, n.jsxs)("div", {
        className: a()(eh.layoutContainer, { [eh.hasEditingPanel]: c && u }),
        children: [
            c &&
                (u
                    ? (0, n.jsx)(es.A, { className: eh.editingPanel, onClose: () => A(!1) })
                    : (0, n.jsx)(d.DUT, {
                          className: a()(h, eh.editingPanelExpandButton),
                          style: g,
                          "aria-label": "Open editing panel",
                          onClick: () => A(!0),
                          children: (0, n.jsx)(d.NDp, { size: "sm", color: d.LU0.colors.ICON_STRONG }),
                      })),
            r,
        ],
    });
}
function eI(e) {
    let {
            user: l,
            currentUser: i,
            guildId: s,
            channelId: O,
            messageId: R,
            roleId: U,
            sessionId: es,
            initialTabSection: eI,
            initialScrollTarget: ev,
            transitionState: eN,
            customStatusPrompt: ey,
            onClose: eE,
            showGuildProfile: eT = !0,
            sourceAnalyticsLocations: eC = [],
            themeContainerClassName: e_,
        } = e,
        { analyticsLocations: eP } = (0, m.Ay)([...eC, A.A.USER_PROFILE_MODAL_V2]),
        eO = (0, _.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: es,
            guildId: s,
            channelId: O,
            messageId: R,
            roleId: U,
            showGuildProfile: eT,
        }),
        eb = l.id === i.id,
        eR = t.useRef(null),
        eS = (0, x.M)(eR),
        [eL, eD] = t.useState(!1),
        [eU, eG] = t.useState(),
        eM = t.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? eG("compact-xs") : l <= 380 ? eG("compact-sm") : eG(void 0);
        }, []);
    (0, c.g)(eR, eM, [], { fireOnMount: !0 });
    let eF = null != eU ? ef[eU] : void 0,
        { defaultWishlistId: ek } = (0, o.cf)([P.A], () => ({ defaultWishlistId: P.A.getFirstWishlistId(l.id) }));
    (0, v.fw)({ wishlistId: ek, userId: l.id });
    let ew = (0, M.fC)(),
        eV = (0, d.zhh)({ opacity: +(null != ew.interactionType), config: { duration: 150 } }),
        eB = t.useMemo(() => (null != s ? { [s]: [l.id] } : {}), [s, l.id]);
    (0, u.Eq)(eB, "UserProfileModalV2");
    let eW = (0, b.Ay)(l.id, eT ? s : void 0),
        ez = T.Ay.useName(eW?.guildId, O, l),
        { relationshipType: eH, originApplicationId: eK } = (0, o.cf)([N.A], () => ({
            relationshipType: N.A.getRelationshipType(l.id),
            originApplicationId: N.A.getOriginApplicationId(l.id),
        })),
        e$ = (0, o.bG)([y.A], () => y.A.hidePersonalInformation),
        eY = (0, S.Nx)() ? null : eW?.getBannerURL({ canAnimate: !1, size: 1024 }),
        eZ = t.useMemo(() => ey ?? (0, g.A)(), [ey]),
        eJ = (0, eA.A)({ user: l, currentUser: i }),
        eX = (0, f.q)({ userId: l.id }),
        eq = (0, h.fi)(l.id),
        eQ = (0, D.A)(l.id),
        e0 = (0, L.A)(l.id),
        e9 = (0, p.GV)(),
        e1 = eg.intl.format(eg.t.KRe1Fk, { name: ez });
    return (
        t.useEffect(() => {
            let e = () => {
                eD(!0),
                    setTimeout(() => {
                        eD(!1);
                    }, 1e3);
            };
            return (
                E._.subscribe(ep.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    E._.unsubscribe(ep.jej.SHAKE_PROFILE_MODAL, e), (0, eu.XA)(null);
                }
            );
        }, []),
        (0, n.jsx)(m.f5, {
            value: eP,
            children: (0, n.jsx)(_.of, {
                value: eO,
                isLoaded: eW?.isLoaded,
                children: (0, n.jsx)(M.Hl, {
                    value: ew,
                    children: (0, n.jsx)(G.N, {
                        value: ev,
                        children: (0, n.jsxs)(d.EOs, {
                            "data-migration-pending": !0,
                            hideShadow: !0,
                            className: eh.root,
                            transitionState: eN,
                            "aria-labelledby": e9,
                            parentComponent: "UserProfileModalV2",
                            children: [
                                (0, n.jsxs)(d.bfh, {
                                    isShaking: eL,
                                    intensity: 1.4,
                                    children: [
                                        (0, n.jsx)(d.AC4, { children: (0, n.jsx)(d.H, { id: e9, children: e1 }) }),
                                        (0, n.jsx)(d.Fmo, {
                                            children: (0, n.jsx)(ej, {
                                                user: l,
                                                isCurrentUser: eb,
                                                displayProfile: eW,
                                                children: (0, n.jsxs)(X.A, {
                                                    className: a()(e_, eh.themeContainer),
                                                    user: l,
                                                    displayProfile: eW,
                                                    themeType: ex.d.MODAL_V2,
                                                    privateBanner: eW?.private === !0 ? (0, n.jsx)(Y.A, {}) : void 0,
                                                    children: [
                                                        null != eY &&
                                                            (0, n.jsx)("div", {
                                                                className: eh.backgroundImage,
                                                                style: { backgroundImage: `url(${eY})` },
                                                            }),
                                                        null != ew.interactionType &&
                                                            (0, n.jsx)(r.animated.div, {
                                                                style: eV,
                                                                className: eh.backdrop,
                                                            }),
                                                        (0, n.jsx)(en.A, {
                                                            className: eh.modalCloseButton,
                                                            isCurrentUser: eb,
                                                            onClose: eE,
                                                        }),
                                                        (0, n.jsx)(ec.A, {
                                                            onAutoHide: () => (0, eu.XA)(null),
                                                            className: eh.toast,
                                                        }),
                                                        (0, n.jsxs)("div", {
                                                            className: a()(eh.profile, null != eU && eh[eU]),
                                                            ref: eR,
                                                            children: [
                                                                (0, n.jsxs)("div", {
                                                                    className: eh.profileHeader,
                                                                    children: [
                                                                        (0, n.jsx)(w.A, {
                                                                            user: l,
                                                                            displayProfile: eW,
                                                                            themeType: ex.d.MODAL_V2,
                                                                            specOverrides: eF,
                                                                        }),
                                                                        (0, n.jsx)(K.A, {
                                                                            userId: l.id,
                                                                            onClose: eE,
                                                                            className: eh.interactionToast,
                                                                        }),
                                                                        (0, n.jsx)(F.A, {
                                                                            user: l,
                                                                            displayProfile: eW,
                                                                            guildId: s,
                                                                            channelId: O,
                                                                            themeType: ex.d.MODAL_V2,
                                                                            specOverrides: eF,
                                                                        }),
                                                                        (0, n.jsx)(Q.A, {
                                                                            user: l,
                                                                            guildId: s,
                                                                            channelId: O,
                                                                            themeType: ex.d.MODAL_V2,
                                                                            hasEntered: eN === d.ip4.ENTERED,
                                                                            prompt: eb ? eZ : null,
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, n.jsxs)(d.HOs, {
                                                                    fade: !0,
                                                                    className: eh.profileBody,
                                                                    children: [
                                                                        (0, n.jsx)(W.A, { userId: l.id }),
                                                                        (0, n.jsx)(q.A, {
                                                                            user: l,
                                                                            guildId: eW?.guildId ?? void 0,
                                                                            onClose: eE,
                                                                            nickname: T.Ay.useName(eW?.guildId, O, l),
                                                                            nicknameVariant: "heading-xl/semibold",
                                                                            pronouns: eW?.pronouns,
                                                                            tags: (0, n.jsx)(k.A, {
                                                                                displayProfile: eW,
                                                                                themeType: ex.d.MODAL_V2,
                                                                                onClose: eE,
                                                                            }),
                                                                        }),
                                                                        eH === ep.eA$.PENDING_INCOMING &&
                                                                            (0, n.jsx)(X.A.Overlay, {
                                                                                className: eh.profileOverlay,
                                                                                children: (0, n.jsx)(H.A, {
                                                                                    user: l,
                                                                                    applicationId: eK,
                                                                                    guildId: eW?.guildId ?? void 0,
                                                                                    channelId: O,
                                                                                    className: eh.profileBanner,
                                                                                }),
                                                                            }),
                                                                        eq.map((e) => {
                                                                            let { applicationId: i } = e;
                                                                            return (0, n.jsx)(
                                                                                X.A.Overlay,
                                                                                {
                                                                                    className: eh.profileOverlay,
                                                                                    children: (0, n.jsx)(H.A, {
                                                                                        user: l,
                                                                                        guildId: eW?.guildId ?? void 0,
                                                                                        channelId: O,
                                                                                        isGameRelationship: !0,
                                                                                        applicationId: i,
                                                                                        className: eh.profileBanner,
                                                                                    }),
                                                                                },
                                                                                i,
                                                                            );
                                                                        }),
                                                                        l.isProvisional &&
                                                                            (0, n.jsx)(X.A.Overlay, {
                                                                                className: eh.profileOverlay,
                                                                                children: (0, n.jsx)(eo.A, {
                                                                                    heading: eg.intl.string(
                                                                                        eg.t.Iyka0U,
                                                                                    ),
                                                                                    headingVariant: "text-md/semibold",
                                                                                    headingIcon: (0, n.jsx)(d.EpV, {
                                                                                        size: "xs",
                                                                                        color: "currentColor",
                                                                                    }),
                                                                                    className: eh.profileBanner,
                                                                                    children: (0, n.jsx)(I.T, {
                                                                                        userId: l.id,
                                                                                        variant: "text-sm/normal",
                                                                                    }),
                                                                                }),
                                                                            }),
                                                                        eb &&
                                                                            (0, n.jsx)(B.A, {
                                                                                isPremiumUser: (0, C.ki)(i),
                                                                                onInteraction: eE,
                                                                            }),
                                                                        (0, n.jsx)(J.A, {
                                                                            user: l,
                                                                            className: eh.profileBanner,
                                                                        }),
                                                                        eW?.private &&
                                                                            (0, n.jsx)(X.A.Overlay, {
                                                                                className: eh.profileOverlay,
                                                                                children: (0, n.jsx)(Z.A, {
                                                                                    username: ez,
                                                                                }),
                                                                            }),
                                                                        (0, n.jsx)("div", {
                                                                            className: eh.profileButtons,
                                                                            children: (0, n.jsx)(ei.A, {
                                                                                user: l,
                                                                                currentUser: i,
                                                                                guildId: s,
                                                                                channelId: O,
                                                                                displayProfile: eW,
                                                                                relationshipType: eH,
                                                                                onClose: eE,
                                                                            }),
                                                                        }),
                                                                        eW?.bio != null &&
                                                                            eW?.bio !== "" &&
                                                                            !e$ &&
                                                                            (0, n.jsx)(V.A, {
                                                                                userBio: eW.bio,
                                                                                setLineClamp: !1,
                                                                            }),
                                                                        eX.length > 0 &&
                                                                            (0, n.jsx)(eo.A, {
                                                                                heading: eg.intl.string(eg.t["Uv/eTx"]),
                                                                                children: (0, n.jsx)(z.A, {
                                                                                    applicationIds: eX,
                                                                                }),
                                                                            }),
                                                                        (0, n.jsx)(eo.A, {
                                                                            heading: eg.intl.string(eg.t.a6XYD9),
                                                                            children: (0, n.jsx)($.A, {
                                                                                userId: l.id,
                                                                                guildId: eW?.guildId,
                                                                                tooltipDelay: em.In,
                                                                            }),
                                                                        }),
                                                                        eW?.guildId != null &&
                                                                            (0, n.jsx)(ee.A, {
                                                                                userId: l.id,
                                                                                guildId: eW.guildId,
                                                                                className: eh.profileRolesSection,
                                                                                headingVariant: "text-xs/medium",
                                                                                headingColor: "currentColor",
                                                                            }),
                                                                        eQ.length > 0 &&
                                                                            (0, n.jsx)(eo.A, {
                                                                                heading: eg.intl.string(eg.t["3fe7U5"]),
                                                                                scrollTargetId: em.bk.CONNECTIONS,
                                                                                children: (0, n.jsx)(et.A, {
                                                                                    connections: eQ,
                                                                                    userId: l.id,
                                                                                    className: eh.profileAppConnections,
                                                                                }),
                                                                            }),
                                                                        e0.length > 0 &&
                                                                            (0, n.jsx)(eo.A, {
                                                                                heading: eg.intl.string(eg.t.PHjkRE),
                                                                                scrollTargetId: em.bk.APPS,
                                                                                children: (0, n.jsx)(el.A, {
                                                                                    applicationRoleConnections: e0,
                                                                                    onClose: eE,
                                                                                    className: eh.profileAppConnections,
                                                                                }),
                                                                            }),
                                                                        (0, n.jsx)(er.A, { userId: l.id }),
                                                                    ],
                                                                }),
                                                                eW?.profileEffect != null &&
                                                                    (0, n.jsx)(j.A, {
                                                                        skuId: eW?.profileEffect.skuId,
                                                                        isHovering: eS,
                                                                    }),
                                                            ],
                                                        }),
                                                        (0, n.jsx)(ed.A, {
                                                            user: l,
                                                            currentUser: i,
                                                            displayProfile: eW,
                                                            guildId: s,
                                                            channelId: O,
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
                                (0, n.jsx)(ea.A, { userId: l.id, className: eh.pendingChangesToolbar }),
                            ],
                        }),
                    }),
                }),
            }),
        })
    );
}
