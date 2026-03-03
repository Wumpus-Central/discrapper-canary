i.d(t, { A: () => ed });
var l = i(627968),
    n = i(64700),
    s = i(475539),
    a = i(311907),
    r = i(397927),
    o = i(80682),
    d = i(793574),
    c = i(688810),
    u = i(915089),
    A = i(713517),
    m = i(645507),
    x = i(922590),
    p = i(821269),
    g = i(182592),
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
    P = i(837529),
    C = i(346713),
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
    J = i(510059),
    q = i(982599),
    X = i(399122),
    Q = i(83013),
    ee = i(515054),
    et = i(513265),
    ei = i(384377),
    el = i(160983),
    en = i(518477),
    es = i(652215),
    ea = i(996988),
    er = i(985018),
    eo = i(661388);
function ed(e) {
    let {
            user: t,
            currentUser: i,
            guildId: ed,
            channelId: ec,
            messageId: eu,
            roleId: eA,
            sessionId: em,
            initialTabSection: ex,
            initialScrollTarget: ep,
            transitionState: eg,
            customStatusPrompt: eh,
            openedAt: eI,
            onClose: ef,
            showGuildProfile: ej = !0,
            sourceAnalyticsLocations: ev = [],
            themeContainerClassName: eN,
        } = e,
        { analyticsLocations: eE } = (0, c.Ay)([...ev, d.A.USER_PROFILE_MODAL_V2]),
        ey = (0, y.pb)({
            layout: "MODAL_V2",
            userId: t.id,
            sourceSessionId: em,
            guildId: ed,
            channelId: ec,
            messageId: eu,
            roleId: eA,
            showGuildProfile: ej,
        }),
        eT = n.useRef(null),
        e_ = (0, A.M)(eT),
        [eP, eC] = n.useState(!1),
        { defaultWishlistId: eb } = (0, a.cf)([T.A], () => ({ defaultWishlistId: T.A.getFirstWishlistId(t.id) }));
    (0, I.fw)({ wishlistId: eb, userId: t.id });
    let eO = (0, R.fC)(),
        eR = (0, r.zhh)({ opacity: +(null != eO.interactionType), config: { duration: 150 } }),
        eS = n.useMemo(() => (null != ed ? { [ed]: [t.id] } : {}), [ed, t.id]);
    (0, o.E)(eS, "UserProfileModalV2");
    let eL = (0, _.Ay)(t.id, ej ? ed : void 0),
        eD = N.Ay.useName(eL?.guildId, ec, t),
        { relationshipType: eG, originApplicationId: eU } = (0, a.cf)([f.A], () => ({
            relationshipType: f.A.getRelationshipType(t.id),
            originApplicationId: f.A.getOriginApplicationId(t.id),
        })),
        eM = (0, a.bG)([j.A], () => j.A.hidePersonalInformation),
        eF = (0, P.Nx)() ? null : eL?.getBannerURL({ canAnimate: !1, size: 1024 }),
        ek = n.useMemo(() => eh ?? (0, m.A)(), [eh]),
        ew = (0, el.A)({ user: t, currentUser: i }),
        eV = (0, p.q)({ userId: t.id }),
        eW = (0, x.fi)(t.id),
        eK = (0, b.A)(t.id),
        ez = (0, C.A)(t.id),
        eB = (0, u.GV)(),
        e$ = er.intl.format(er.t.KRe1Fk, { name: eD });
    return (
        n.useEffect(() => {
            let e = () => {
                eC(!0),
                    setTimeout(() => {
                        eC(!1);
                    }, 1e3);
            };
            return (
                v._.subscribe(es.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    v._.unsubscribe(es.jej.SHAKE_PROFILE_MODAL, e), (0, ei.XA)(null);
                }
            );
        }, []),
        (0, l.jsx)(c.f5, {
            value: eE,
            children: (0, l.jsx)(y.of, {
                value: ey,
                openedAt: eI,
                fetchStartedAt: eL?.fetchStartedAt,
                fetchEndedAt: eL?.fetchEndedAt,
                isLoaded: eL?.isLoaded,
                children: (0, l.jsx)(R.Hl, {
                    value: eO,
                    children: (0, l.jsx)(O.N, {
                        value: ep,
                        children: (0, l.jsxs)(r.EOs, {
                            "data-migration-pending": !0,
                            hideShadow: !0,
                            className: eo.zr,
                            transitionState: eg,
                            "aria-labelledby": eB,
                            parentComponent: "UserProfileModalV2",
                            children: [
                                (0, l.jsxs)(r.bfh, {
                                    isShaking: eP,
                                    intensity: 1.4,
                                    children: [
                                        (0, l.jsx)(r.AC4, { children: (0, l.jsx)(r.H, { id: eB, children: e$ }) }),
                                        (0, l.jsx)(r.Fmo, {
                                            children: (0, l.jsxs)(z.A, {
                                                className: eN,
                                                user: t,
                                                displayProfile: eL,
                                                themeType: ea.d.MODAL_V2,
                                                privateBanner: eL?.private === !0 ? (0, l.jsx)(W.A, {}) : void 0,
                                                children: [
                                                    null != eF &&
                                                        (0, l.jsx)("div", {
                                                            className: eo.iL,
                                                            style: { backgroundImage: `url(${eF})` },
                                                        }),
                                                    null != eO.interactionType &&
                                                        (0, l.jsx)(s.animated.div, { style: eR, className: eo.tB }),
                                                    (0, l.jsx)(et.A, {
                                                        onAutoHide: () => (0, ei.XA)(null),
                                                        className: eo.oR,
                                                    }),
                                                    (0, l.jsxs)("div", {
                                                        className: eo.ME,
                                                        ref: eL?.profileEffect != null ? eT : void 0,
                                                        children: [
                                                            (0, l.jsxs)("div", {
                                                                className: eo.Nr,
                                                                children: [
                                                                    (0, l.jsx)(D.A, {
                                                                        user: t,
                                                                        displayProfile: eL,
                                                                        themeType: ea.d.MODAL_V2,
                                                                    }),
                                                                    (0, l.jsx)(w.A, {
                                                                        userId: t.id,
                                                                        onClose: ef,
                                                                        className: eo.aX,
                                                                    }),
                                                                    (0, l.jsx)(S.A, {
                                                                        user: t,
                                                                        displayProfile: eL,
                                                                        guildId: ed,
                                                                        channelId: ec,
                                                                        themeType: ea.d.MODAL_V2,
                                                                    }),
                                                                    (0, l.jsx)($.A, {
                                                                        user: t,
                                                                        guildId: ed,
                                                                        channelId: ec,
                                                                        themeType: ea.d.MODAL_V2,
                                                                        hasEntered: eg === r.ip4.ENTERED,
                                                                        prompt: t.id === i.id ? ek : null,
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, l.jsxs)(r.HOs, {
                                                                fade: !0,
                                                                className: eo.kI,
                                                                children: [
                                                                    (0, l.jsx)(M.A, { userId: t.id }),
                                                                    (0, l.jsx)(B.A, {
                                                                        user: t,
                                                                        guildId: eL?.guildId ?? void 0,
                                                                        onClose: ef,
                                                                        nickname: N.Ay.useName(eL?.guildId, ec, t),
                                                                        nicknameVariant: "heading-xl/semibold",
                                                                        pronouns: eL?.pronouns,
                                                                        tags: (0, l.jsx)(L.A, {
                                                                            displayProfile: eL,
                                                                            themeType: ea.d.MODAL_V2,
                                                                            onClose: ef,
                                                                        }),
                                                                    }),
                                                                    eG === es.eA$.PENDING_INCOMING &&
                                                                        (0, l.jsx)(z.A.Overlay, {
                                                                            className: eo.uD,
                                                                            children: (0, l.jsx)(k.A, {
                                                                                user: t,
                                                                                applicationId: eU,
                                                                                guildId: eL?.guildId ?? void 0,
                                                                                channelId: ec,
                                                                                className: eo.CK,
                                                                            }),
                                                                        }),
                                                                    eW.map((e) => {
                                                                        let { applicationId: i } = e;
                                                                        return (0, l.jsx)(
                                                                            z.A.Overlay,
                                                                            {
                                                                                className: eo.uD,
                                                                                children: (0, l.jsx)(k.A, {
                                                                                    user: t,
                                                                                    guildId: eL?.guildId ?? void 0,
                                                                                    channelId: ec,
                                                                                    isGameRelationship: !0,
                                                                                    applicationId: i,
                                                                                    className: eo.CK,
                                                                                }),
                                                                            },
                                                                            i,
                                                                        );
                                                                    }),
                                                                    t.isProvisional &&
                                                                        (0, l.jsx)(z.A.Overlay, {
                                                                            className: eo.uD,
                                                                            children: (0, l.jsx)(Q.A, {
                                                                                heading: er.intl.string(er.t.Iyka0U),
                                                                                headingVariant: "text-md/semibold",
                                                                                headingIcon: (0, l.jsx)(r.EpV, {
                                                                                    size: "xs",
                                                                                    color: "currentColor",
                                                                                }),
                                                                                className: eo.CK,
                                                                                children: (0, l.jsx)(h.T, {
                                                                                    userId: t.id,
                                                                                    variant: "text-sm/normal",
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    t.id === i.id &&
                                                                        (0, l.jsx)(U.A, {
                                                                            isPremiumUser: (0, E.ki)(i),
                                                                            onInteraction: ef,
                                                                        }),
                                                                    (0, l.jsx)(K.A, { user: t, className: eo.CK }),
                                                                    (0, l.jsx)("div", {
                                                                        className: eo.De,
                                                                        children: (0, l.jsx)(Z.A, {
                                                                            user: t,
                                                                            currentUser: i,
                                                                            guildId: ed,
                                                                            channelId: ec,
                                                                            displayProfile: eL,
                                                                            relationshipType: eG,
                                                                            onClose: ef,
                                                                        }),
                                                                    }),
                                                                    eL?.bio != null &&
                                                                        eL?.bio !== "" &&
                                                                        !eM &&
                                                                        (0, l.jsx)(G.A, {
                                                                            userBio: eL.bio,
                                                                            setLineClamp: !1,
                                                                        }),
                                                                    eV.length > 0 &&
                                                                        (0, l.jsx)(Q.A, {
                                                                            heading: er.intl.string(er.t["Uv/eTx"]),
                                                                            children: (0, l.jsx)(F.A, {
                                                                                applicationIds: eV,
                                                                            }),
                                                                        }),
                                                                    (0, l.jsx)(Q.A, {
                                                                        heading: er.intl.string(er.t.a6XYD9),
                                                                        children: (0, l.jsx)(V.A, {
                                                                            userId: t.id,
                                                                            guildId: eL?.guildId,
                                                                            tooltipDelay: en.In,
                                                                        }),
                                                                    }),
                                                                    eL?.guildId != null &&
                                                                        (0, l.jsx)(H.A, {
                                                                            userId: t.id,
                                                                            guildId: eL.guildId,
                                                                            className: eo.UO,
                                                                            headingVariant: "text-xs/medium",
                                                                            headingColor: "currentColor",
                                                                        }),
                                                                    eK.length > 0 &&
                                                                        (0, l.jsx)(Q.A, {
                                                                            heading: er.intl.string(er.t["3fe7U5"]),
                                                                            scrollTargetId: en.bk.CONNECTIONS,
                                                                            children: (0, l.jsx)(J.A, {
                                                                                connections: eK,
                                                                                userId: t.id,
                                                                                className: eo.kG,
                                                                            }),
                                                                        }),
                                                                    ez.length > 0 &&
                                                                        (0, l.jsx)(Q.A, {
                                                                            heading: er.intl.string(er.t.PHjkRE),
                                                                            scrollTargetId: en.bk.APPS,
                                                                            children: (0, l.jsx)(Y.A, {
                                                                                applicationRoleConnections: ez,
                                                                                onClose: ef,
                                                                                className: eo.kG,
                                                                            }),
                                                                        }),
                                                                    (0, l.jsx)(X.A, { userId: t.id }),
                                                                ],
                                                            }),
                                                            eL?.profileEffect != null &&
                                                                (0, l.jsx)(g.A, {
                                                                    skuId: eL?.profileEffect.skuId,
                                                                    isHovering: e_,
                                                                }),
                                                        ],
                                                    }),
                                                    (0, l.jsx)(ee.A, {
                                                        user: t,
                                                        currentUser: i,
                                                        displayProfile: eL,
                                                        guildId: ed,
                                                        channelId: ec,
                                                        items: ew,
                                                        initialSection: ex,
                                                        onClose: ef,
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(q.A, { userId: t.id, className: eo.Q0 }),
                            ],
                        }),
                    }),
                }),
            }),
        })
    );
}
