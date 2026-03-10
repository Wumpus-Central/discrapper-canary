i.d(t, { A: () => ec });
var l = i(627968),
    n = i(64700),
    s = i(490249),
    a = i(311907),
    r = i(397927),
    o = i(80682),
    d = i(793574),
    c = i(688810),
    u = i(915089),
    A = i(713517),
    m = i(645507),
    x = i(922590),
    g = i(821269),
    p = i(182592),
    h = i(437774),
    I = i(594832),
    f = i(994500),
    j = i(351906),
    v = i(203982),
    N = i(562153),
    E = i(474090),
    y = i(183555),
    T = i(622543),
    _ = i(950191),
    C = i(837529),
    P = i(346713),
    b = i(484509),
    O = i(716804),
    R = i(679492),
    S = i(718019),
    L = i(31432),
    D = i(915614),
    G = i(389996),
    U = i(223330),
    M = i(559506),
    F = i(361311),
    k = i(886891),
    w = i(439053),
    V = i(743987),
    W = i(312381),
    K = i(383448),
    z = i(946356),
    B = i(810396),
    $ = i(159218),
    H = i(280645),
    Y = i(291335),
    Z = i(807651),
    J = i(463156),
    q = i(510059),
    X = i(982599),
    Q = i(399122),
    ee = i(83013),
    et = i(515054),
    ei = i(513265),
    el = i(384377),
    en = i(160983),
    es = i(518477),
    ea = i(652215),
    er = i(996988),
    eo = i(985018),
    ed = i(661388);
function ec(e) {
    let {
            user: t,
            currentUser: i,
            guildId: ec,
            channelId: eu,
            messageId: eA,
            roleId: em,
            sessionId: ex,
            initialTabSection: eg,
            initialScrollTarget: ep,
            transitionState: eh,
            customStatusPrompt: eI,
            openedAt: ef,
            onClose: ej,
            showGuildProfile: ev = !0,
            sourceAnalyticsLocations: eN = [],
            themeContainerClassName: eE,
        } = e,
        { analyticsLocations: ey } = (0, c.Ay)([...eN, d.A.USER_PROFILE_MODAL_V2]),
        eT = (0, y.pb)({
            layout: "MODAL_V2",
            userId: t.id,
            sourceSessionId: ex,
            guildId: ec,
            channelId: eu,
            messageId: eA,
            roleId: em,
            showGuildProfile: ev,
        }),
        e_ = n.useRef(null),
        eC = (0, A.M)(e_),
        [eP, eb] = n.useState(!1),
        { defaultWishlistId: eO } = (0, a.cf)([T.A], () => ({ defaultWishlistId: T.A.getFirstWishlistId(t.id) }));
    (0, I.fw)({ wishlistId: eO, userId: t.id });
    let eR = (0, R.fC)(),
        eS = (0, r.zhh)({ opacity: +(null != eR.interactionType), config: { duration: 150 } }),
        eL = n.useMemo(() => (null != ec ? { [ec]: [t.id] } : {}), [ec, t.id]);
    (0, o.Eq)(eL, "UserProfileModalV2");
    let eD = (0, _.Ay)(t.id, ev ? ec : void 0),
        eG = N.Ay.useName(eD?.guildId, eu, t),
        { relationshipType: eU, originApplicationId: eM } = (0, a.cf)([f.A], () => ({
            relationshipType: f.A.getRelationshipType(t.id),
            originApplicationId: f.A.getOriginApplicationId(t.id),
        })),
        eF = (0, a.bG)([j.A], () => j.A.hidePersonalInformation),
        ek = (0, C.Nx)() ? null : eD?.getBannerURL({ canAnimate: !1, size: 1024 }),
        ew = n.useMemo(() => eI ?? (0, m.A)(), [eI]),
        eV = (0, en.A)({ user: t, currentUser: i }),
        eW = (0, g.q)({ userId: t.id }),
        eK = (0, x.fi)(t.id),
        ez = (0, b.A)(t.id),
        eB = (0, P.A)(t.id),
        e$ = (0, u.GV)(),
        eH = eo.intl.format(eo.t.KRe1Fk, { name: eG });
    return (
        n.useEffect(() => {
            let e = () => {
                eb(!0),
                    setTimeout(() => {
                        eb(!1);
                    }, 1e3);
            };
            return (
                v._.subscribe(ea.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    v._.unsubscribe(ea.jej.SHAKE_PROFILE_MODAL, e), (0, el.XA)(null);
                }
            );
        }, []),
        (0, l.jsx)(c.f5, {
            value: ey,
            children: (0, l.jsx)(y.of, {
                value: eT,
                openedAt: ef,
                fetchStartedAt: eD?.fetchStartedAt,
                fetchEndedAt: eD?.fetchEndedAt,
                isLoaded: eD?.isLoaded,
                children: (0, l.jsx)(R.Hl, {
                    value: eR,
                    children: (0, l.jsx)(O.N, {
                        value: ep,
                        children: (0, l.jsxs)(r.EOs, {
                            "data-migration-pending": !0,
                            hideShadow: !0,
                            className: ed.zr,
                            transitionState: eh,
                            "aria-labelledby": e$,
                            parentComponent: "UserProfileModalV2",
                            children: [
                                (0, l.jsxs)(r.bfh, {
                                    isShaking: eP,
                                    intensity: 1.4,
                                    children: [
                                        (0, l.jsx)(r.AC4, { children: (0, l.jsx)(r.H, { id: e$, children: eH }) }),
                                        (0, l.jsx)(r.Fmo, {
                                            children: (0, l.jsxs)(z.A, {
                                                className: eE,
                                                user: t,
                                                displayProfile: eD,
                                                themeType: er.d.MODAL_V2,
                                                privateBanner: eD?.private === !0 ? (0, l.jsx)(W.A, {}) : void 0,
                                                children: [
                                                    null != ek &&
                                                        (0, l.jsx)("div", {
                                                            className: ed.iL,
                                                            style: { backgroundImage: `url(${ek})` },
                                                        }),
                                                    null != eR.interactionType &&
                                                        (0, l.jsx)(s.animated.div, { style: eS, className: ed.tB }),
                                                    (0, l.jsx)(J.A, {
                                                        className: ed.b,
                                                        isCurrentUser: t.id === i.id,
                                                        onClose: ej,
                                                    }),
                                                    (0, l.jsx)(ei.A, {
                                                        onAutoHide: () => (0, el.XA)(null),
                                                        className: ed.oR,
                                                    }),
                                                    (0, l.jsxs)("div", {
                                                        className: ed.ME,
                                                        ref: eD?.profileEffect != null ? e_ : void 0,
                                                        children: [
                                                            (0, l.jsxs)("div", {
                                                                className: ed.Nr,
                                                                children: [
                                                                    (0, l.jsx)(D.A, {
                                                                        user: t,
                                                                        displayProfile: eD,
                                                                        themeType: er.d.MODAL_V2,
                                                                    }),
                                                                    (0, l.jsx)(w.A, {
                                                                        userId: t.id,
                                                                        onClose: ej,
                                                                        className: ed.aX,
                                                                    }),
                                                                    (0, l.jsx)(S.A, {
                                                                        user: t,
                                                                        displayProfile: eD,
                                                                        guildId: ec,
                                                                        channelId: eu,
                                                                        themeType: er.d.MODAL_V2,
                                                                    }),
                                                                    (0, l.jsx)($.A, {
                                                                        user: t,
                                                                        guildId: ec,
                                                                        channelId: eu,
                                                                        themeType: er.d.MODAL_V2,
                                                                        hasEntered: eh === r.ip4.ENTERED,
                                                                        prompt: t.id === i.id ? ew : null,
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, l.jsxs)(r.HOs, {
                                                                fade: !0,
                                                                className: ed.kI,
                                                                children: [
                                                                    (0, l.jsx)(M.A, { userId: t.id }),
                                                                    (0, l.jsx)(B.A, {
                                                                        user: t,
                                                                        guildId: eD?.guildId ?? void 0,
                                                                        onClose: ej,
                                                                        nickname: N.Ay.useName(eD?.guildId, eu, t),
                                                                        nicknameVariant: "heading-xl/semibold",
                                                                        pronouns: eD?.pronouns,
                                                                        tags: (0, l.jsx)(L.A, {
                                                                            displayProfile: eD,
                                                                            themeType: er.d.MODAL_V2,
                                                                            onClose: ej,
                                                                        }),
                                                                    }),
                                                                    eU === ea.eA$.PENDING_INCOMING &&
                                                                        (0, l.jsx)(z.A.Overlay, {
                                                                            className: ed.uD,
                                                                            children: (0, l.jsx)(k.A, {
                                                                                user: t,
                                                                                applicationId: eM,
                                                                                guildId: eD?.guildId ?? void 0,
                                                                                channelId: eu,
                                                                                className: ed.CK,
                                                                            }),
                                                                        }),
                                                                    eK.map((e) => {
                                                                        let { applicationId: i } = e;
                                                                        return (0, l.jsx)(
                                                                            z.A.Overlay,
                                                                            {
                                                                                className: ed.uD,
                                                                                children: (0, l.jsx)(k.A, {
                                                                                    user: t,
                                                                                    guildId: eD?.guildId ?? void 0,
                                                                                    channelId: eu,
                                                                                    isGameRelationship: !0,
                                                                                    applicationId: i,
                                                                                    className: ed.CK,
                                                                                }),
                                                                            },
                                                                            i,
                                                                        );
                                                                    }),
                                                                    t.isProvisional &&
                                                                        (0, l.jsx)(z.A.Overlay, {
                                                                            className: ed.uD,
                                                                            children: (0, l.jsx)(ee.A, {
                                                                                heading: eo.intl.string(eo.t.Iyka0U),
                                                                                headingVariant: "text-md/semibold",
                                                                                headingIcon: (0, l.jsx)(r.EpV, {
                                                                                    size: "xs",
                                                                                    color: "currentColor",
                                                                                }),
                                                                                className: ed.CK,
                                                                                children: (0, l.jsx)(h.T, {
                                                                                    userId: t.id,
                                                                                    variant: "text-sm/normal",
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    t.id === i.id &&
                                                                        (0, l.jsx)(U.A, {
                                                                            isPremiumUser: (0, E.ki)(i),
                                                                            onInteraction: ej,
                                                                        }),
                                                                    (0, l.jsx)(K.A, { user: t, className: ed.CK }),
                                                                    (0, l.jsx)("div", {
                                                                        className: ed.De,
                                                                        children: (0, l.jsx)(Z.A, {
                                                                            user: t,
                                                                            currentUser: i,
                                                                            guildId: ec,
                                                                            channelId: eu,
                                                                            displayProfile: eD,
                                                                            relationshipType: eU,
                                                                            onClose: ej,
                                                                        }),
                                                                    }),
                                                                    eD?.bio != null &&
                                                                        eD?.bio !== "" &&
                                                                        !eF &&
                                                                        (0, l.jsx)(G.A, {
                                                                            userBio: eD.bio,
                                                                            setLineClamp: !1,
                                                                        }),
                                                                    eW.length > 0 &&
                                                                        (0, l.jsx)(ee.A, {
                                                                            heading: eo.intl.string(eo.t["Uv/eTx"]),
                                                                            children: (0, l.jsx)(F.A, {
                                                                                applicationIds: eW,
                                                                            }),
                                                                        }),
                                                                    (0, l.jsx)(ee.A, {
                                                                        heading: eo.intl.string(eo.t.a6XYD9),
                                                                        children: (0, l.jsx)(V.A, {
                                                                            userId: t.id,
                                                                            guildId: eD?.guildId,
                                                                            tooltipDelay: es.In,
                                                                        }),
                                                                    }),
                                                                    eD?.guildId != null &&
                                                                        (0, l.jsx)(H.A, {
                                                                            userId: t.id,
                                                                            guildId: eD.guildId,
                                                                            className: ed.UO,
                                                                            headingVariant: "text-xs/medium",
                                                                            headingColor: "currentColor",
                                                                        }),
                                                                    ez.length > 0 &&
                                                                        (0, l.jsx)(ee.A, {
                                                                            heading: eo.intl.string(eo.t["3fe7U5"]),
                                                                            scrollTargetId: es.bk.CONNECTIONS,
                                                                            children: (0, l.jsx)(q.A, {
                                                                                connections: ez,
                                                                                userId: t.id,
                                                                                className: ed.kG,
                                                                            }),
                                                                        }),
                                                                    eB.length > 0 &&
                                                                        (0, l.jsx)(ee.A, {
                                                                            heading: eo.intl.string(eo.t.PHjkRE),
                                                                            scrollTargetId: es.bk.APPS,
                                                                            children: (0, l.jsx)(Y.A, {
                                                                                applicationRoleConnections: eB,
                                                                                onClose: ej,
                                                                                className: ed.kG,
                                                                            }),
                                                                        }),
                                                                    (0, l.jsx)(Q.A, { userId: t.id }),
                                                                ],
                                                            }),
                                                            eD?.profileEffect != null &&
                                                                (0, l.jsx)(p.A, {
                                                                    skuId: eD?.profileEffect.skuId,
                                                                    isHovering: eC,
                                                                }),
                                                        ],
                                                    }),
                                                    (0, l.jsx)(et.A, {
                                                        user: t,
                                                        currentUser: i,
                                                        displayProfile: eD,
                                                        guildId: ec,
                                                        channelId: eu,
                                                        items: eV,
                                                        initialSection: eg,
                                                        onClose: ej,
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(X.A, { userId: t.id, className: ed.Q0 }),
                            ],
                        }),
                    }),
                }),
            }),
        })
    );
}
