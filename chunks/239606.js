i.d(l, { A: () => eN });
var n = i(627968),
    t = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(497766),
    o = i(311907),
    d = i(397927),
    c = i(770178),
    u = i(80682),
    A = i(793574),
    m = i(688810),
    p = i(915089),
    g = i(713517),
    x = i(645507),
    h = i(922590),
    f = i(821269),
    I = i(182592),
    j = i(437774),
    v = i(594832),
    N = i(994500),
    y = i(351906),
    E = i(203982),
    C = i(562153),
    T = i(474090),
    _ = i(183555),
    b = i(622543),
    P = i(591179),
    O = i(950191),
    S = i(101928),
    R = i(837529),
    L = i(346713),
    G = i(484509),
    U = i(195898),
    D = i(576622),
    M = i(716804),
    F = i(679492),
    k = i(718019),
    w = i(31432),
    V = i(915614),
    B = i(389996),
    W = i(223330),
    z = i(559506),
    K = i(361311),
    H = i(886891),
    $ = i(439053),
    Z = i(743987),
    Y = i(312381),
    J = i(501193),
    X = i(383448),
    q = i(946356),
    Q = i(810396),
    ee = i(159218),
    el = i(280645),
    ei = i(291335),
    en = i(807651),
    et = i(463156),
    es = i(510059),
    ea = i(546136),
    er = i(982599),
    eo = i(399122),
    ed = i(83013),
    ec = i(515054),
    eu = i(513265),
    eA = i(384377),
    em = i(160983),
    ep = i(518477),
    eg = i(652215),
    ex = i(996988),
    eh = i(985018),
    ef = i(661388);
let eI = (0, d.FT9)(d._3J.SIZE_120),
    ej = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3J.SIZE_96, avatarOffsetX: 16 } };
function ev(e) {
    let { user: l, isCurrentUser: i, guildId: s, displayProfile: r, onChangeGuildId: o, children: c } = e,
        u = (0, P.X)("UserProfileModalV2EditingPanelWrapper"),
        A = i && u,
        [m, p] = t.useState(!0),
        { theme: g, primaryColor: x, secondaryColor: h } = (0, S.A)({ user: l, displayProfile: r }),
        { profileThemeStyle: f, profileThemeClassName: I } = (0, U.A)({
            theme: g,
            themeType: null,
            primaryColor: x,
            secondaryColor: h,
        });
    return (0, n.jsxs)("div", {
        className: a()(ef.layoutContainer, { [ef.hasEditingPanel]: A && m }),
        children: [
            A &&
                (m
                    ? (0, n.jsx)(ea.A, {
                          className: ef.editingPanel,
                          guildId: s,
                          onChangeGuildId: o,
                          onClose: () => p(!1),
                      })
                    : (0, n.jsx)(d.DUT, {
                          className: a()(I, ef.editingPanelExpandButton),
                          style: f,
                          "aria-label": "Open editing panel",
                          onClick: () => p(!0),
                          children: (0, n.jsx)(d.NDp, { size: "sm", color: d.LU0.colors.ICON_STRONG }),
                      })),
            c,
        ],
    });
}
function eN(e) {
    let {
            user: l,
            currentUser: i,
            guildId: s,
            originGuildId: S,
            channelId: U,
            messageId: ea,
            roleId: eN,
            sessionId: ey,
            initialTabSection: eE,
            initialScrollTarget: eC,
            transitionState: eT,
            customStatusPrompt: e_,
            onClose: eb,
            sourceAnalyticsLocations: eP = [],
            themeContainerClassName: eO,
        } = e,
        eS = l.id === i.id,
        eR = l.getAvatarURL(void 0, eI),
        eL = l.bot,
        eG = (0, P.X)("UserProfileModalV2"),
        [eU, eD] = t.useState(s),
        [eM, eF] = t.useState(s),
        ek = t.useRef(eM),
        ew = t.useCallback((e) => {
            eD(e ?? void 0);
        }, []);
    t.useEffect(() => {
        let e = !1;
        return (
            (0, D.A)(l.id, eR, {
                type: "modal",
                guildId: eU,
                withMutualFriendsCount: !eL,
                withMutualFriends: !1,
                withMutualGuilds: !0,
            }).then(
                () => {
                    e || (eF(eU), (ek.current = eU));
                },
                () => {
                    e || eD(ek.current);
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [eU, l.id, eR, eL]);
    let { analyticsLocations: eV } = (0, m.Ay)([...eP, A.A.USER_PROFILE_MODAL_V2]),
        eB = (0, _.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: ey,
            guildId: eM,
            channelId: U,
            messageId: ea,
            roleId: eN,
        }),
        eW = t.useRef(null),
        ez = (0, g.M)(eW),
        [eK, eH] = t.useState(!1),
        [e$, eZ] = t.useState(),
        eY = t.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? eZ("compact-xs") : l <= 380 ? eZ("compact-sm") : eZ(void 0);
        }, []);
    (0, c.g)(eW, eY, [], { fireOnMount: !0 });
    let eJ = null != e$ ? ej[e$] : void 0,
        { defaultWishlistId: eX } = (0, o.cf)([b.A], () => ({ defaultWishlistId: b.A.getFirstWishlistId(l.id) }));
    (0, v.fw)({ wishlistId: eX, userId: l.id });
    let eq = (0, F.fC)(),
        eQ = (0, d.zhh)({ opacity: +(null != eq.interactionType), config: { duration: 150 } }),
        e0 = t.useMemo(() => (null != eM ? { [eM]: [l.id] } : {}), [eM, l.id]);
    (0, u.Eq)(e0, "UserProfileModalV2");
    let e1 = (0, O.Ay)(l.id, eM),
        e9 = C.Ay.useName(e1?.guildId, U, l),
        { relationshipType: e7, originApplicationId: e6 } = (0, o.cf)([N.A], () => ({
            relationshipType: N.A.getRelationshipType(l.id),
            originApplicationId: N.A.getOriginApplicationId(l.id),
        })),
        e8 = (0, o.bG)([y.A], () => y.A.hidePersonalInformation),
        e5 = (0, R.Nx)() ? null : e1?.getBannerURL({ canAnimate: !1, size: 1024 }),
        e3 = t.useMemo(() => e_ ?? (0, x.A)(), [e_]),
        e2 = (0, em.A)({ user: l, currentUser: i }),
        e4 = (0, f.q)({ userId: l.id }),
        le = (0, h.fi)(l.id),
        ll = (0, G.A)(l.id),
        li = (0, L.A)(l.id),
        ln = (0, p.GV)(),
        lt = eh.intl.format(eh.t.KRe1Fk, { name: e9 });
    return (
        t.useEffect(() => {
            let e = () => {
                eH(!0),
                    setTimeout(() => {
                        eH(!1);
                    }, 1e3);
            };
            return (
                E._.subscribe(eg.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    E._.unsubscribe(eg.jej.SHAKE_PROFILE_MODAL, e), (0, eA.XA)(null);
                }
            );
        }, []),
        (0, n.jsx)(m.f5, {
            value: eV,
            children: (0, n.jsx)(_.of, {
                value: eB,
                isLoaded: e1?.isLoaded,
                children: (0, n.jsx)(F.Hl, {
                    value: eq,
                    children: (0, n.jsx)(M.N, {
                        value: eC,
                        children: (0, n.jsxs)(d.EOs, {
                            "data-migration-pending": !0,
                            hideShadow: !0,
                            className: ef.root,
                            transitionState: eT,
                            "aria-labelledby": ln,
                            parentComponent: "UserProfileModalV2",
                            children: [
                                (0, n.jsxs)(d.bfh, {
                                    isShaking: eK,
                                    intensity: 1.4,
                                    children: [
                                        (0, n.jsx)(d.AC4, { children: (0, n.jsx)(d.H, { id: ln, children: lt }) }),
                                        (0, n.jsx)(d.Fmo, {
                                            children: (0, n.jsx)(ev, {
                                                user: l,
                                                isCurrentUser: eS,
                                                guildId: eU,
                                                displayProfile: e1,
                                                onChangeGuildId: ew,
                                                children: (0, n.jsxs)(q.A, {
                                                    className: a()(eO, ef.themeContainer),
                                                    user: l,
                                                    displayProfile: e1,
                                                    themeType: ex.d.MODAL_V2,
                                                    privateBanner: e1?.private === !0 ? (0, n.jsx)(Y.A, {}) : void 0,
                                                    children: [
                                                        null != e5 &&
                                                            (0, n.jsx)("div", {
                                                                className: ef.backgroundImage,
                                                                style: { backgroundImage: `url(${e5})` },
                                                            }),
                                                        null != eq.interactionType &&
                                                            (0, n.jsx)(r.animated.div, {
                                                                style: eQ,
                                                                className: ef.backdrop,
                                                            }),
                                                        (0, n.jsx)(et.A, {
                                                            className: ef.modalCloseButton,
                                                            isCurrentUser: eS,
                                                            onClose: eb,
                                                        }),
                                                        (0, n.jsx)(eu.A, {
                                                            onAutoHide: () => (0, eA.XA)(null),
                                                            className: ef.toast,
                                                        }),
                                                        (0, n.jsxs)("div", {
                                                            className: a()(ef.profile, null != e$ && ef[e$]),
                                                            ref: eW,
                                                            children: [
                                                                (0, n.jsxs)("div", {
                                                                    className: ef.profileHeader,
                                                                    children: [
                                                                        (0, n.jsx)(V.A, {
                                                                            user: l,
                                                                            displayProfile: e1,
                                                                            themeType: ex.d.MODAL_V2,
                                                                            specOverrides: eJ,
                                                                        }),
                                                                        (0, n.jsx)($.A, {
                                                                            userId: l.id,
                                                                            onClose: eb,
                                                                            className: ef.interactionToast,
                                                                        }),
                                                                        (0, n.jsx)(k.A, {
                                                                            user: l,
                                                                            displayProfile: e1,
                                                                            guildId: eM,
                                                                            channelId: U,
                                                                            themeType: ex.d.MODAL_V2,
                                                                            specOverrides: eJ,
                                                                        }),
                                                                        (0, n.jsx)(ee.A, {
                                                                            user: l,
                                                                            guildId: eM,
                                                                            channelId: U,
                                                                            themeType: ex.d.MODAL_V2,
                                                                            hasEntered: eT === d.ip4.ENTERED,
                                                                            prompt: eS ? e3 : null,
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, n.jsxs)(d.HOs, {
                                                                    fade: !0,
                                                                    className: ef.profileBody,
                                                                    children: [
                                                                        (0, n.jsx)(z.A, { userId: l.id }),
                                                                        (0, n.jsx)(Q.A, {
                                                                            user: l,
                                                                            guildId: e1?.guildId ?? void 0,
                                                                            onClose: eb,
                                                                            nickname: C.Ay.useName(e1?.guildId, U, l),
                                                                            nicknameVariant: "heading-xl/semibold",
                                                                            pronouns: e1?.pronouns,
                                                                            tags: (0, n.jsx)(w.A, {
                                                                                displayProfile: e1,
                                                                                themeType: ex.d.MODAL_V2,
                                                                                onClose: eb,
                                                                            }),
                                                                        }),
                                                                        e7 === eg.eA$.PENDING_INCOMING &&
                                                                            (0, n.jsx)(q.A.Overlay, {
                                                                                className: ef.profileOverlay,
                                                                                children: (0, n.jsx)(H.A, {
                                                                                    user: l,
                                                                                    applicationId: e6,
                                                                                    guildId: e1?.guildId ?? void 0,
                                                                                    channelId: U,
                                                                                    className: ef.profileBanner,
                                                                                }),
                                                                            }),
                                                                        le.map((e) => {
                                                                            let { applicationId: i } = e;
                                                                            return (0, n.jsx)(
                                                                                q.A.Overlay,
                                                                                {
                                                                                    className: ef.profileOverlay,
                                                                                    children: (0, n.jsx)(H.A, {
                                                                                        user: l,
                                                                                        guildId: e1?.guildId ?? void 0,
                                                                                        channelId: U,
                                                                                        isGameRelationship: !0,
                                                                                        applicationId: i,
                                                                                        className: ef.profileBanner,
                                                                                    }),
                                                                                },
                                                                                i,
                                                                            );
                                                                        }),
                                                                        l.isProvisional &&
                                                                            (0, n.jsx)(q.A.Overlay, {
                                                                                className: ef.profileOverlay,
                                                                                children: (0, n.jsx)(ed.A, {
                                                                                    heading: eh.intl.string(
                                                                                        eh.t.Iyka0U,
                                                                                    ),
                                                                                    headingVariant: "text-md/semibold",
                                                                                    headingIcon: (0, n.jsx)(d.EpV, {
                                                                                        size: "xs",
                                                                                        color: "currentColor",
                                                                                    }),
                                                                                    className: ef.profileBanner,
                                                                                    children: (0, n.jsx)(j.T, {
                                                                                        userId: l.id,
                                                                                        variant: "text-sm/normal",
                                                                                    }),
                                                                                }),
                                                                            }),
                                                                        eS &&
                                                                            (0, n.jsx)(W.A, {
                                                                                isPremiumUser: (0, T.ki)(i),
                                                                                onInteraction: eb,
                                                                            }),
                                                                        (0, n.jsx)(X.A, {
                                                                            user: l,
                                                                            className: ef.profileBanner,
                                                                        }),
                                                                        e1?.private &&
                                                                            (0, n.jsx)(q.A.Overlay, {
                                                                                className: ef.profileOverlay,
                                                                                children: (0, n.jsx)(J.A, {
                                                                                    username: e9,
                                                                                }),
                                                                            }),
                                                                        (0, n.jsx)("div", {
                                                                            className: ef.profileButtons,
                                                                            children: (0, n.jsx)(en.A, {
                                                                                user: l,
                                                                                currentUser: i,
                                                                                guildId: eM,
                                                                                originGuildId: S,
                                                                                channelId: U,
                                                                                displayProfile: e1,
                                                                                relationshipType: e7,
                                                                                onClose: eb,
                                                                                onChangeGuildId: eG ? ew : void 0,
                                                                            }),
                                                                        }),
                                                                        e1?.bio != null &&
                                                                            e1?.bio !== "" &&
                                                                            !e8 &&
                                                                            (0, n.jsx)(B.A, {
                                                                                userBio: e1.bio,
                                                                                setLineClamp: !1,
                                                                            }),
                                                                        e4.length > 0 &&
                                                                            (0, n.jsx)(ed.A, {
                                                                                heading: eh.intl.string(eh.t["Uv/eTx"]),
                                                                                children: (0, n.jsx)(K.A, {
                                                                                    applicationIds: e4,
                                                                                }),
                                                                            }),
                                                                        (0, n.jsx)(ed.A, {
                                                                            heading: eh.intl.string(eh.t.a6XYD9),
                                                                            children: (0, n.jsx)(Z.A, {
                                                                                userId: l.id,
                                                                                guildId: e1?.guildId,
                                                                                tooltipDelay: ep.In,
                                                                            }),
                                                                        }),
                                                                        e1?.guildId != null &&
                                                                            (0, n.jsx)(el.A, {
                                                                                userId: l.id,
                                                                                guildId: e1.guildId,
                                                                                className: ef.profileRolesSection,
                                                                                headingVariant: "text-xs/medium",
                                                                                headingColor: "currentColor",
                                                                            }),
                                                                        ll.length > 0 &&
                                                                            (0, n.jsx)(ed.A, {
                                                                                heading: eh.intl.string(eh.t["3fe7U5"]),
                                                                                scrollTargetId: ep.bk.CONNECTIONS,
                                                                                children: (0, n.jsx)(es.A, {
                                                                                    connections: ll,
                                                                                    userId: l.id,
                                                                                    className: ef.profileAppConnections,
                                                                                }),
                                                                            }),
                                                                        li.length > 0 &&
                                                                            (0, n.jsx)(ed.A, {
                                                                                heading: eh.intl.string(eh.t.PHjkRE),
                                                                                scrollTargetId: ep.bk.APPS,
                                                                                children: (0, n.jsx)(ei.A, {
                                                                                    applicationRoleConnections: li,
                                                                                    onClose: eb,
                                                                                    className: ef.profileAppConnections,
                                                                                }),
                                                                            }),
                                                                        (0, n.jsx)(eo.A, { userId: l.id }),
                                                                    ],
                                                                }),
                                                                e1?.profileEffect != null &&
                                                                    (0, n.jsx)(I.A, {
                                                                        skuId: e1?.profileEffect.skuId,
                                                                        isHovering: ez,
                                                                    }),
                                                            ],
                                                        }),
                                                        (0, n.jsx)(ec.A, {
                                                            user: l,
                                                            currentUser: i,
                                                            displayProfile: e1,
                                                            guildId: eM,
                                                            channelId: U,
                                                            items: e2,
                                                            initialSection: eE,
                                                            onClose: eb,
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(er.A, { userId: l.id, className: ef.pendingChangesToolbar }),
                            ],
                        }),
                    }),
                }),
            }),
        })
    );
}
