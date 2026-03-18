t.d(l, { A: () => eN });
var i = t(627968),
    n = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(497766),
    o = t(311907),
    d = t(397927),
    c = t(770178),
    u = t(80682),
    m = t(793574),
    A = t(688810),
    p = t(915089),
    x = t(713517),
    g = t(645507),
    f = t(922590),
    h = t(821269),
    j = t(182592),
    I = t(437774),
    v = t(594832),
    N = t(994500),
    y = t(351906),
    E = t(203982),
    T = t(562153),
    C = t(474090),
    _ = t(183555),
    b = t(622543),
    O = t(591179),
    P = t(950191),
    R = t(101928),
    S = t(837529),
    G = t(346713),
    L = t(484509),
    U = t(195898),
    D = t(576622),
    M = t(716804),
    F = t(679492),
    k = t(718019),
    w = t(31432),
    V = t(915614),
    B = t(389996),
    z = t(223330),
    W = t(559506),
    $ = t(361311),
    K = t(886891),
    H = t(439053),
    Z = t(743987),
    J = t(312381),
    Y = t(501193),
    q = t(383448),
    X = t(946356),
    Q = t(810396),
    ee = t(159218),
    el = t(280645),
    et = t(291335),
    ei = t(807651),
    en = t(463156),
    es = t(510059),
    ea = t(546136),
    er = t(982599),
    eo = t(399122),
    ed = t(83013),
    ec = t(515054),
    eu = t(513265),
    em = t(384377),
    eA = t(160983),
    ep = t(518477),
    ex = t(652215),
    eg = t(996988),
    ef = t(985018),
    eh = t(661388);
let ej = (0, d.FT9)(d._3J.SIZE_120),
    eI = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3J.SIZE_96, avatarOffsetX: 16 } };
function ev(e) {
    let { user: l, isCurrentUser: t, guildId: s, displayProfile: r, onChangeGuildId: o, children: c } = e,
        u = (0, O.X)("UserProfileModalV2EditingPanelWrapper"),
        m = t && u,
        [A, p] = n.useState(!0),
        { theme: x, primaryColor: g, secondaryColor: f } = (0, R.A)({ user: l, displayProfile: r }),
        { profileThemeStyle: h, profileThemeClassName: j } = (0, U.A)({
            theme: x,
            themeType: null,
            primaryColor: g,
            secondaryColor: f,
        });
    return (0, i.jsxs)("div", {
        className: a()(eh.layoutContainer, { [eh.hasEditingPanel]: m && A }),
        children: [
            m &&
                (A
                    ? (0, i.jsx)(ea.A, {
                          className: eh.editingPanel,
                          guildId: s,
                          onChangeGuildId: o,
                          onClose: () => p(!1),
                      })
                    : (0, i.jsx)(d.DUT, {
                          className: a()(j, eh.editingPanelExpandButton),
                          style: h,
                          "aria-label": "Open editing panel",
                          onClick: () => p(!0),
                          children: (0, i.jsx)(d.NDp, { size: "sm", color: d.LU0.colors.ICON_STRONG }),
                      })),
            c,
        ],
    });
}
function eN(e) {
    let {
            user: l,
            currentUser: t,
            guildId: s,
            originGuildId: O,
            channelId: R,
            messageId: U,
            roleId: ea,
            sessionId: eN,
            initialTabSection: ey,
            initialScrollTarget: eE,
            transitionState: eT,
            customStatusPrompt: eC,
            onClose: e_,
            sourceAnalyticsLocations: eb = [],
            themeContainerClassName: eO,
        } = e,
        eP = l.id === t.id,
        eR = l.getAvatarURL(void 0, ej),
        eS = l.bot,
        [eG, eL] = n.useState(s),
        [eU, eD] = n.useState(s),
        eM = n.useRef(eU),
        eF = n.useCallback((e) => {
            eL(e ?? void 0);
        }, []);
    n.useEffect(() => {
        let e = !1;
        return (
            (0, D.A)(l.id, eR, {
                type: "modal",
                guildId: eG,
                withMutualFriendsCount: !eS,
                withMutualFriends: !1,
                withMutualGuilds: !0,
            }).then(
                () => {
                    e || (eD(eG), (eM.current = eG));
                },
                () => {
                    e || eL(eM.current);
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [eG, l.id, eR, eS]);
    let { analyticsLocations: ek } = (0, A.Ay)([...eb, m.A.USER_PROFILE_MODAL_V2]),
        ew = (0, _.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: eN,
            guildId: eU,
            channelId: R,
            messageId: U,
            roleId: ea,
        }),
        eV = n.useRef(null),
        eB = (0, x.M)(eV),
        [ez, eW] = n.useState(!1),
        [e$, eK] = n.useState(),
        eH = n.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? eK("compact-xs") : l <= 380 ? eK("compact-sm") : eK(void 0);
        }, []);
    (0, c.g)(eV, eH, [], { fireOnMount: !0 });
    let eZ = null != e$ ? eI[e$] : void 0,
        { defaultWishlistId: eJ } = (0, o.cf)([b.A], () => ({ defaultWishlistId: b.A.getFirstWishlistId(l.id) }));
    (0, v.fw)({ wishlistId: eJ, userId: l.id });
    let eY = (0, F.fC)(),
        eq = (0, d.zhh)({ opacity: +(null != eY.interactionType), config: { duration: 150 } }),
        eX = n.useMemo(() => (null != eU ? { [eU]: [l.id] } : {}), [eU, l.id]);
    (0, u.Eq)(eX, "UserProfileModalV2");
    let eQ = (0, P.Ay)(l.id, eU),
        e0 = T.Ay.useName(eQ?.guildId, R, l),
        { relationshipType: e9, originApplicationId: e1 } = (0, o.cf)([N.A], () => ({
            relationshipType: N.A.getRelationshipType(l.id),
            originApplicationId: N.A.getOriginApplicationId(l.id),
        })),
        e7 = (0, o.bG)([y.A], () => y.A.hidePersonalInformation),
        e6 = (0, S.Nx)() ? null : eQ?.getBannerURL({ canAnimate: !1, size: 1024 }),
        e8 = n.useMemo(() => eC ?? (0, g.A)(), [eC]),
        e2 = (0, eA.A)({ user: l, currentUser: t }),
        e3 = (0, h.q)({ userId: l.id }),
        e5 = (0, f.fi)(l.id),
        e4 = (0, L.A)(l.id),
        le = (0, G.A)(l.id),
        ll = (0, p.GV)(),
        lt = ef.intl.format(ef.t.KRe1Fk, { name: e0 });
    return (
        n.useEffect(() => {
            let e = () => {
                eW(!0),
                    setTimeout(() => {
                        eW(!1);
                    }, 1e3);
            };
            return (
                E._.subscribe(ex.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    E._.unsubscribe(ex.jej.SHAKE_PROFILE_MODAL, e), (0, em.XA)(null);
                }
            );
        }, []),
        (0, i.jsx)(A.f5, {
            value: ek,
            children: (0, i.jsx)(_.of, {
                value: ew,
                isLoaded: eQ?.isLoaded,
                children: (0, i.jsx)(F.Hl, {
                    value: eY,
                    children: (0, i.jsx)(M.N, {
                        value: eE,
                        children: (0, i.jsxs)(d.EOs, {
                            "data-migration-pending": !0,
                            hideShadow: !0,
                            className: eh.root,
                            transitionState: eT,
                            "aria-labelledby": ll,
                            parentComponent: "UserProfileModalV2",
                            children: [
                                (0, i.jsxs)(d.bfh, {
                                    isShaking: ez,
                                    intensity: 1.4,
                                    children: [
                                        (0, i.jsx)(d.AC4, { children: (0, i.jsx)(d.H, { id: ll, children: lt }) }),
                                        (0, i.jsx)(d.Fmo, {
                                            children: (0, i.jsx)(ev, {
                                                user: l,
                                                isCurrentUser: eP,
                                                guildId: eG,
                                                displayProfile: eQ,
                                                onChangeGuildId: eF,
                                                children: (0, i.jsxs)(X.A, {
                                                    className: a()(eO, eh.themeContainer),
                                                    user: l,
                                                    displayProfile: eQ,
                                                    themeType: eg.d.MODAL_V2,
                                                    privateBanner: eQ?.private === !0 ? (0, i.jsx)(J.A, {}) : void 0,
                                                    children: [
                                                        null != e6 &&
                                                            (0, i.jsx)("div", {
                                                                className: eh.backgroundImage,
                                                                style: { backgroundImage: `url(${e6})` },
                                                            }),
                                                        null != eY.interactionType &&
                                                            (0, i.jsx)(r.animated.div, {
                                                                style: eq,
                                                                className: eh.backdrop,
                                                            }),
                                                        (0, i.jsx)(en.A, {
                                                            className: eh.modalCloseButton,
                                                            isCurrentUser: eP,
                                                            onClose: e_,
                                                        }),
                                                        (0, i.jsx)(eu.A, {
                                                            onAutoHide: () => (0, em.XA)(null),
                                                            className: eh.toast,
                                                        }),
                                                        (0, i.jsxs)("div", {
                                                            className: a()(eh.profile, null != e$ && eh[e$]),
                                                            ref: eV,
                                                            children: [
                                                                (0, i.jsxs)("div", {
                                                                    className: eh.profileHeader,
                                                                    children: [
                                                                        (0, i.jsx)(V.A, {
                                                                            user: l,
                                                                            displayProfile: eQ,
                                                                            themeType: eg.d.MODAL_V2,
                                                                            specOverrides: eZ,
                                                                        }),
                                                                        (0, i.jsx)(H.A, {
                                                                            userId: l.id,
                                                                            onClose: e_,
                                                                            className: eh.interactionToast,
                                                                        }),
                                                                        (0, i.jsx)(k.A, {
                                                                            user: l,
                                                                            displayProfile: eQ,
                                                                            guildId: eU,
                                                                            channelId: R,
                                                                            themeType: eg.d.MODAL_V2,
                                                                            specOverrides: eZ,
                                                                        }),
                                                                        (0, i.jsx)(ee.A, {
                                                                            user: l,
                                                                            guildId: eU,
                                                                            channelId: R,
                                                                            themeType: eg.d.MODAL_V2,
                                                                            hasEntered: eT === d.ip4.ENTERED,
                                                                            prompt: eP ? e8 : null,
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, i.jsxs)(d.HOs, {
                                                                    fade: !0,
                                                                    className: eh.profileBody,
                                                                    children: [
                                                                        (0, i.jsx)(W.A, { userId: l.id }),
                                                                        (0, i.jsx)(Q.A, {
                                                                            user: l,
                                                                            guildId: eQ?.guildId ?? void 0,
                                                                            onClose: e_,
                                                                            nickname: T.Ay.useName(eQ?.guildId, R, l),
                                                                            nicknameVariant: "heading-xl/semibold",
                                                                            pronouns: eQ?.pronouns,
                                                                            tags: (0, i.jsx)(w.A, {
                                                                                displayProfile: eQ,
                                                                                themeType: eg.d.MODAL_V2,
                                                                                onClose: e_,
                                                                            }),
                                                                        }),
                                                                        e9 === ex.eA$.PENDING_INCOMING &&
                                                                            (0, i.jsx)(X.A.Overlay, {
                                                                                className: eh.profileOverlay,
                                                                                children: (0, i.jsx)(K.A, {
                                                                                    user: l,
                                                                                    applicationId: e1,
                                                                                    guildId: eQ?.guildId ?? void 0,
                                                                                    channelId: R,
                                                                                    className: eh.profileBanner,
                                                                                }),
                                                                            }),
                                                                        e5.map((e) => {
                                                                            let { applicationId: t } = e;
                                                                            return (0, i.jsx)(
                                                                                X.A.Overlay,
                                                                                {
                                                                                    className: eh.profileOverlay,
                                                                                    children: (0, i.jsx)(K.A, {
                                                                                        user: l,
                                                                                        guildId: eQ?.guildId ?? void 0,
                                                                                        channelId: R,
                                                                                        isGameRelationship: !0,
                                                                                        applicationId: t,
                                                                                        className: eh.profileBanner,
                                                                                    }),
                                                                                },
                                                                                t,
                                                                            );
                                                                        }),
                                                                        l.isProvisional &&
                                                                            (0, i.jsx)(X.A.Overlay, {
                                                                                className: eh.profileOverlay,
                                                                                children: (0, i.jsx)(ed.A, {
                                                                                    heading: ef.intl.string(
                                                                                        ef.t.Iyka0U,
                                                                                    ),
                                                                                    headingVariant: "text-md/semibold",
                                                                                    headingIcon: (0, i.jsx)(d.EpV, {
                                                                                        size: "xs",
                                                                                        color: "currentColor",
                                                                                    }),
                                                                                    className: eh.profileBanner,
                                                                                    children: (0, i.jsx)(I.T, {
                                                                                        userId: l.id,
                                                                                        variant: "text-sm/normal",
                                                                                    }),
                                                                                }),
                                                                            }),
                                                                        eP &&
                                                                            (0, i.jsx)(z.A, {
                                                                                isPremiumUser: (0, C.ki)(t),
                                                                                onInteraction: e_,
                                                                            }),
                                                                        (0, i.jsx)(q.A, {
                                                                            user: l,
                                                                            className: eh.profileBanner,
                                                                        }),
                                                                        eQ?.private &&
                                                                            (0, i.jsx)(X.A.Overlay, {
                                                                                className: eh.profileOverlay,
                                                                                children: (0, i.jsx)(Y.A, {
                                                                                    username: e0,
                                                                                }),
                                                                            }),
                                                                        (0, i.jsx)("div", {
                                                                            className: eh.profileButtons,
                                                                            children: (0, i.jsx)(ei.A, {
                                                                                user: l,
                                                                                currentUser: t,
                                                                                guildId: eU,
                                                                                originGuildId: O,
                                                                                channelId: R,
                                                                                displayProfile: eQ,
                                                                                relationshipType: e9,
                                                                                onClose: e_,
                                                                            }),
                                                                        }),
                                                                        eQ?.bio != null &&
                                                                            eQ?.bio !== "" &&
                                                                            !e7 &&
                                                                            (0, i.jsx)(B.A, {
                                                                                userBio: eQ.bio,
                                                                                setLineClamp: !1,
                                                                            }),
                                                                        e3.length > 0 &&
                                                                            (0, i.jsx)(ed.A, {
                                                                                heading: ef.intl.string(ef.t["Uv/eTx"]),
                                                                                children: (0, i.jsx)($.A, {
                                                                                    applicationIds: e3,
                                                                                }),
                                                                            }),
                                                                        (0, i.jsx)(ed.A, {
                                                                            heading: ef.intl.string(ef.t.a6XYD9),
                                                                            children: (0, i.jsx)(Z.A, {
                                                                                userId: l.id,
                                                                                guildId: eQ?.guildId,
                                                                                tooltipDelay: ep.In,
                                                                            }),
                                                                        }),
                                                                        eQ?.guildId != null &&
                                                                            (0, i.jsx)(el.A, {
                                                                                userId: l.id,
                                                                                guildId: eQ.guildId,
                                                                                className: eh.profileRolesSection,
                                                                                headingVariant: "text-xs/medium",
                                                                                headingColor: "currentColor",
                                                                            }),
                                                                        e4.length > 0 &&
                                                                            (0, i.jsx)(ed.A, {
                                                                                heading: ef.intl.string(ef.t["3fe7U5"]),
                                                                                scrollTargetId: ep.bk.CONNECTIONS,
                                                                                children: (0, i.jsx)(es.A, {
                                                                                    connections: e4,
                                                                                    userId: l.id,
                                                                                    className: eh.profileAppConnections,
                                                                                }),
                                                                            }),
                                                                        le.length > 0 &&
                                                                            (0, i.jsx)(ed.A, {
                                                                                heading: ef.intl.string(ef.t.PHjkRE),
                                                                                scrollTargetId: ep.bk.APPS,
                                                                                children: (0, i.jsx)(et.A, {
                                                                                    applicationRoleConnections: le,
                                                                                    onClose: e_,
                                                                                    className: eh.profileAppConnections,
                                                                                }),
                                                                            }),
                                                                        (0, i.jsx)(eo.A, { userId: l.id }),
                                                                    ],
                                                                }),
                                                                eQ?.profileEffect != null &&
                                                                    (0, i.jsx)(j.A, {
                                                                        skuId: eQ?.profileEffect.skuId,
                                                                        isHovering: eB,
                                                                    }),
                                                            ],
                                                        }),
                                                        (0, i.jsx)(ec.A, {
                                                            user: l,
                                                            currentUser: t,
                                                            displayProfile: eQ,
                                                            guildId: eU,
                                                            channelId: R,
                                                            items: e2,
                                                            initialSection: ey,
                                                            onClose: e_,
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(er.A, { userId: l.id, className: eh.pendingChangesToolbar }),
                            ],
                        }),
                    }),
                }),
            }),
        })
    );
}
