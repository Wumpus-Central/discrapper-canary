n.d(t, { A: () => ed });
var i = n(627968),
    s = n(64700),
    l = n(563495),
    a = n(311907),
    r = n(397927),
    d = n(80682),
    o = n(793574),
    c = n(688810),
    u = n(915089),
    A = n(713517),
    x = n(576241),
    m = n(645507),
    p = n(922590),
    h = n(821269),
    f = n(182592),
    g = n(437774),
    I = n(594832),
    j = n(994500),
    _ = n(351906),
    N = n(203982),
    v = n(562153),
    b = n(474090),
    T = n(183555),
    E = n(622543),
    y = n(950191),
    C = n(346713),
    P = n(484509),
    S = n(716804),
    L = n(679492),
    O = n(718019),
    R = n(31432),
    D = n(915614),
    M = n(389996),
    G = n(223330),
    U = n(559506),
    k = n(361311),
    F = n(886891),
    V = n(439053),
    B = n(743987),
    w = n(383448),
    W = n(946356),
    z = n(810396),
    H = n(159218),
    K = n(280645),
    Y = n(291335),
    $ = n(807651),
    J = n(510059),
    X = n(982599),
    Q = n(399122),
    Z = n(83013),
    q = n(515054),
    ee = n(513265),
    et = n(384377),
    en = n(160983),
    ei = n(518477),
    es = n(652215),
    el = n(996988),
    ea = n(985018),
    er = n(156614);
function ed(e) {
    let {
            user: t,
            currentUser: n,
            guildId: ed,
            channelId: eo,
            messageId: ec,
            roleId: eu,
            sessionId: eA,
            initialTabSection: ex,
            initialScrollTarget: em,
            transitionState: ep,
            customStatusPrompt: eh,
            openedAt: ef,
            onClose: eg,
            showGuildProfile: eI = !0,
            sourceAnalyticsLocations: ej = [],
            disableActionsForPreview: e_ = !1,
        } = e,
        { analyticsLocations: eN } = (0, c.Ay)([...ej, o.A.USER_PROFILE_MODAL_V2]),
        ev = (0, T.pb)({
            layout: "MODAL_V2",
            userId: t.id,
            sourceSessionId: eA,
            guildId: ed,
            channelId: eo,
            messageId: ec,
            roleId: eu,
            showGuildProfile: eI,
        }),
        eb = s.useRef(null),
        eT = (0, A.M)(eb),
        [eE, ey] = s.useState(!1),
        { defaultWishlistId: eC } = (0, a.cf)([E.A], () => ({ defaultWishlistId: E.A.getFirstWishlistId(t.id) }));
    (0, I.fw)({ wishlistId: eC, userId: t.id });
    let eP = (0, L.fC)(),
        eS = (0, r.zhh)({ opacity: +(null != eP.interactionType), config: { duration: 150 } }),
        eL = s.useMemo(() => (null != ed ? { [ed]: [t.id] } : {}), [ed, t.id]);
    (0, d.E)(eL, "UserProfileModalV2");
    let eO = (0, y.Ay)(t.id, eI ? ed : void 0),
        eR = v.Ay.useName(eO?.guildId, eo, t),
        { relationshipType: eD, originApplicationId: eM } = (0, a.cf)([j.A], () => ({
            relationshipType: j.A.getRelationshipType(t.id),
            originApplicationId: j.A.getOriginApplicationId(t.id),
        })),
        eG = (0, a.bG)([_.A], () => _.A.hidePersonalInformation),
        eU = eO?.getBannerURL({ canAnimate: !1, size: 1024 }),
        ek = (0, x.h)({ location: "UserProfileModalV2" }),
        eF = s.useMemo(() => eh ?? (0, m.A)(), [eh]),
        eV = (0, en.A)({ user: t, currentUser: n }),
        eB = (0, h.q)({ userId: t.id }),
        ew = (0, p.fi)(t.id),
        eW = (0, P.A)(t.id),
        ez = (0, C.A)(t.id),
        eH = (0, u.GV)(),
        eK = ea.intl.format(ea.t.KRe1Fk, { name: eR });
    return (
        s.useEffect(() => {
            let e = () => {
                ey(!0),
                    setTimeout(() => {
                        ey(!1);
                    }, 1e3);
            };
            return (
                N._.subscribe(es.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    N._.unsubscribe(es.jej.SHAKE_PROFILE_MODAL, e), (0, et.XA)(null);
                }
            );
        }, []),
        (0, i.jsx)(c.f5, {
            value: eN,
            children: (0, i.jsx)(T.of, {
                value: ev,
                openedAt: ef,
                fetchStartedAt: eO?.fetchStartedAt,
                fetchEndedAt: eO?.fetchEndedAt,
                isLoaded: eO?.isLoaded,
                children: (0, i.jsx)(L.Hl, {
                    value: eP,
                    children: (0, i.jsx)(S.N, {
                        value: em,
                        children: (0, i.jsxs)(r.EOs, {
                            "data-migration-pending": !0,
                            hideShadow: !0,
                            className: er.zr,
                            transitionState: ep,
                            "aria-labelledby": eH,
                            parentComponent: "UserProfileModalV2",
                            children: [
                                (0, i.jsxs)(r.bfh, {
                                    isShaking: eE,
                                    intensity: 1.4,
                                    children: [
                                        e_
                                            ? (0, i.jsxs)("div", {
                                                  className: er.sr,
                                                  children: [
                                                      (0, i.jsxs)(r.Heading, {
                                                          id: eH,
                                                          variant: "heading-sm/normal",
                                                          color: "text-strong",
                                                          children: [
                                                              (0, i.jsx)(r.AC4, {
                                                                  children: `${ea.intl.string(ea.t.apVial)}: ${eK}`,
                                                              }),
                                                              (0, i.jsx)("span", {
                                                                  "aria-hidden": !0,
                                                                  children: ea.intl.string(ea.t.apVial),
                                                              }),
                                                          ],
                                                      }),
                                                      (0, i.jsx)(r.Button, {
                                                          size: "sm",
                                                          variant: "secondary",
                                                          text: ea.intl.string(ea.t.ojM1xJ),
                                                          onClick: eg,
                                                          "aria-label": ea.intl.string(ea.t.cpT0Cq),
                                                      }),
                                                  ],
                                              })
                                            : (0, i.jsx)(r.AC4, {
                                                  children: (0, i.jsx)(r.H, { id: eH, children: eK }),
                                              }),
                                        (0, i.jsx)(r.Fmo, {
                                            children: (0, i.jsxs)(W.A, {
                                                className: e_ ? er.r9 : void 0,
                                                user: t,
                                                displayProfile: eO,
                                                themeType: el.d.MODAL_V2,
                                                children: [
                                                    null != eU &&
                                                        (0, i.jsx)("div", {
                                                            className: er.iL,
                                                            style: { backgroundImage: `url(${eU})` },
                                                        }),
                                                    null != eP.interactionType &&
                                                        (0, i.jsx)(l.animated.div, { style: eS, className: er.tB }),
                                                    (0, i.jsx)(ee.A, {
                                                        onAutoHide: () => (0, et.XA)(null),
                                                        className: er.oR,
                                                    }),
                                                    (0, i.jsxs)("div", {
                                                        className: er.ME,
                                                        ref: eO?.profileEffect != null ? eb : void 0,
                                                        children: [
                                                            (0, i.jsxs)("div", {
                                                                className: er.Nr,
                                                                children: [
                                                                    (0, i.jsx)(D.A, {
                                                                        user: t,
                                                                        displayProfile: eO,
                                                                        themeType: el.d.MODAL_V2,
                                                                    }),
                                                                    (0, i.jsx)(V.A, {
                                                                        userId: t.id,
                                                                        onClose: eg,
                                                                        className: er.aX,
                                                                    }),
                                                                    (0, i.jsx)(O.A, {
                                                                        user: t,
                                                                        displayProfile: eO,
                                                                        guildId: ed,
                                                                        channelId: eo,
                                                                        themeType: el.d.MODAL_V2,
                                                                    }),
                                                                    (0, i.jsx)(H.A, {
                                                                        user: t,
                                                                        guildId: ed,
                                                                        channelId: eo,
                                                                        themeType: el.d.MODAL_V2,
                                                                        hasEntered: ep === r.ip4.ENTERED,
                                                                        prompt: ek && t.id === n.id ? eF : null,
                                                                        disableToolbar: e_,
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, i.jsxs)(r.HOs, {
                                                                fade: !0,
                                                                className: er.kI,
                                                                children: [
                                                                    (0, i.jsx)(U.A, { userId: t.id }),
                                                                    (0, i.jsx)(z.A, {
                                                                        user: t,
                                                                        guildId: eO?.guildId ?? void 0,
                                                                        onClose: eg,
                                                                        nickname: v.Ay.useName(eO?.guildId, eo, t),
                                                                        nicknameVariant: "heading-xl/semibold",
                                                                        pronouns: eO?.pronouns,
                                                                        tags: (0, i.jsx)(R.A, {
                                                                            displayProfile: eO,
                                                                            themeType: el.d.MODAL_V2,
                                                                            onClose: eg,
                                                                        }),
                                                                    }),
                                                                    eD === es.eA$.PENDING_INCOMING &&
                                                                        (0, i.jsx)(W.A.Overlay, {
                                                                            className: er.uD,
                                                                            children: (0, i.jsx)(F.A, {
                                                                                user: t,
                                                                                applicationId: eM,
                                                                                guildId: eO?.guildId ?? void 0,
                                                                                channelId: eo,
                                                                                className: er.CK,
                                                                            }),
                                                                        }),
                                                                    ew.map((e) => {
                                                                        let { applicationId: n } = e;
                                                                        return (0, i.jsx)(
                                                                            W.A.Overlay,
                                                                            {
                                                                                className: er.uD,
                                                                                children: (0, i.jsx)(F.A, {
                                                                                    user: t,
                                                                                    guildId: eO?.guildId ?? void 0,
                                                                                    channelId: eo,
                                                                                    isGameRelationship: !0,
                                                                                    applicationId: n,
                                                                                    className: er.CK,
                                                                                }),
                                                                            },
                                                                            n,
                                                                        );
                                                                    }),
                                                                    t.isProvisional &&
                                                                        (0, i.jsx)(W.A.Overlay, {
                                                                            className: er.uD,
                                                                            children: (0, i.jsx)(Z.A, {
                                                                                heading: ea.intl.string(ea.t.Iyka0U),
                                                                                headingVariant: "text-md/semibold",
                                                                                headingIcon: (0, i.jsx)(r.EpV, {
                                                                                    size: "xs",
                                                                                    color: "currentColor",
                                                                                }),
                                                                                className: er.CK,
                                                                                children: (0, i.jsx)(g.T, {
                                                                                    userId: t.id,
                                                                                    variant: "text-sm/normal",
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    t.id === n.id &&
                                                                        (0, i.jsx)(G.A, {
                                                                            isPremiumUser: (0, b.ki)(n),
                                                                            onInteraction: eg,
                                                                        }),
                                                                    (0, i.jsx)(w.A, { user: t, className: er.CK }),
                                                                    (0, i.jsx)("div", {
                                                                        className: er.De,
                                                                        children: (0, i.jsx)($.A, {
                                                                            user: t,
                                                                            currentUser: n,
                                                                            guildId: ed,
                                                                            channelId: eo,
                                                                            displayProfile: eO,
                                                                            relationshipType: eD,
                                                                            onClose: eg,
                                                                        }),
                                                                    }),
                                                                    eO?.bio != null &&
                                                                        eO?.bio !== "" &&
                                                                        !eG &&
                                                                        (0, i.jsx)(M.A, {
                                                                            userBio: eO.bio,
                                                                            setLineClamp: !1,
                                                                        }),
                                                                    eB.length > 0 &&
                                                                        (0, i.jsx)(Z.A, {
                                                                            heading: ea.intl.string(ea.t["Uv/eTx"]),
                                                                            children: (0, i.jsx)(k.A, {
                                                                                applicationIds: eB,
                                                                            }),
                                                                        }),
                                                                    (0, i.jsx)(Z.A, {
                                                                        heading: ea.intl.string(ea.t.a6XYD9),
                                                                        children: (0, i.jsx)(B.A, {
                                                                            userId: t.id,
                                                                            guildId: eO?.guildId,
                                                                            tooltipDelay: ei.In,
                                                                        }),
                                                                    }),
                                                                    eO?.guildId != null &&
                                                                        (0, i.jsx)(K.A, {
                                                                            userId: t.id,
                                                                            guildId: eO.guildId,
                                                                            className: er.UO,
                                                                            headingVariant: "text-xs/medium",
                                                                            headingColor: "currentColor",
                                                                        }),
                                                                    eW.length > 0 &&
                                                                        (0, i.jsx)(Z.A, {
                                                                            heading: ea.intl.string(ea.t["3fe7U5"]),
                                                                            scrollTargetId: ei.bk.CONNECTIONS,
                                                                            children: (0, i.jsx)(J.A, {
                                                                                connections: eW,
                                                                                userId: t.id,
                                                                                className: er.kG,
                                                                            }),
                                                                        }),
                                                                    ez.length > 0 &&
                                                                        (0, i.jsx)(Z.A, {
                                                                            heading: ea.intl.string(ea.t.PHjkRE),
                                                                            scrollTargetId: ei.bk.APPS,
                                                                            children: (0, i.jsx)(Y.A, {
                                                                                applicationRoleConnections: ez,
                                                                                onClose: eg,
                                                                                className: er.kG,
                                                                            }),
                                                                        }),
                                                                    (0, i.jsx)(Q.A, { userId: t.id }),
                                                                ],
                                                            }),
                                                            eO?.profileEffect != null &&
                                                                (0, i.jsx)(f.A, {
                                                                    skuId: eO?.profileEffect.skuId,
                                                                    isHovering: eT,
                                                                }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)(q.A, {
                                                        user: t,
                                                        currentUser: n,
                                                        displayProfile: eO,
                                                        guildId: ed,
                                                        channelId: eo,
                                                        items: eV,
                                                        initialSection: ex,
                                                        onClose: eg,
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(X.A, { userId: t.id, className: er.Q0 }),
                            ],
                        }),
                    }),
                }),
            }),
        })
    );
}
