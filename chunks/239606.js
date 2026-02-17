l.d(t, { A: () => eA });
var i = l(627968),
    n = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(522160),
    o = l(311907),
    d = l(397927),
    c = l(80682),
    u = l(793574),
    A = l(688810),
    m = l(915089),
    x = l(713517),
    p = l(576241),
    g = l(645507),
    h = l(922590),
    f = l(821269),
    j = l(182592),
    I = l(437774),
    v = l(594832),
    N = l(994500),
    y = l(351906),
    E = l(203982),
    T = l(562153),
    _ = l(474090),
    C = l(183555),
    P = l(622543),
    b = l(950191),
    O = l(837529),
    R = l(346713),
    S = l(484509),
    L = l(716804),
    D = l(679492),
    G = l(718019),
    U = l(31432),
    M = l(915614),
    F = l(389996),
    w = l(223330),
    V = l(559506),
    k = l(361311),
    W = l(886891),
    z = l(439053),
    K = l(743987),
    $ = l(312381),
    B = l(383448),
    H = l(946356),
    Y = l(810396),
    J = l(159218),
    Z = l(280645),
    q = l(291335),
    X = l(807651),
    Q = l(510059),
    ee = l(982599),
    et = l(399122),
    el = l(83013),
    ei = l(515054),
    en = l(513265),
    es = l(384377),
    ea = l(160983),
    er = l(518477),
    eo = l(652215),
    ed = l(996988),
    ec = l(985018),
    eu = l(661388);
function eA(e) {
    let {
            user: t,
            currentUser: l,
            guildId: s,
            channelId: eA,
            messageId: em,
            roleId: ex,
            sessionId: ep,
            initialTabSection: eg,
            initialScrollTarget: eh,
            transitionState: ef,
            customStatusPrompt: ej,
            openedAt: eI,
            onClose: ev,
            showGuildProfile: eN = !0,
            sourceAnalyticsLocations: ey = [],
            disableActionsForPreview: eE = !1,
            themeContainerClassName: eT,
        } = e,
        { analyticsLocations: e_ } = (0, A.Ay)([...ey, u.A.USER_PROFILE_MODAL_V2]),
        eC = (0, C.pb)({
            layout: "MODAL_V2",
            userId: t.id,
            sourceSessionId: ep,
            guildId: s,
            channelId: eA,
            messageId: em,
            roleId: ex,
            showGuildProfile: eN,
        }),
        eP = n.useRef(null),
        eb = (0, x.M)(eP),
        [eO, eR] = n.useState(!1),
        { defaultWishlistId: eS } = (0, o.cf)([P.A], () => ({ defaultWishlistId: P.A.getFirstWishlistId(t.id) }));
    (0, v.fw)({ wishlistId: eS, userId: t.id });
    let eL = (0, D.fC)(),
        eD = (0, d.zhh)({ opacity: +(null != eL.interactionType), config: { duration: 150 } }),
        eG = n.useMemo(() => (null != s ? { [s]: [t.id] } : {}), [s, t.id]);
    (0, c.E)(eG, "UserProfileModalV2");
    let eU = (0, b.Ay)(t.id, eN ? s : void 0),
        eM = T.Ay.useName(eU?.guildId, eA, t),
        { relationshipType: eF, originApplicationId: ew } = (0, o.cf)([N.A], () => ({
            relationshipType: N.A.getRelationshipType(t.id),
            originApplicationId: N.A.getOriginApplicationId(t.id),
        })),
        eV = (0, o.bG)([y.A], () => y.A.hidePersonalInformation),
        ek = (0, O.Nx)() ? null : eU?.getBannerURL({ canAnimate: !1, size: 1024 }),
        eW = (0, p.h)({ location: "UserProfileModalV2" }),
        ez = n.useMemo(() => ej ?? (0, g.A)(), [ej]),
        eK = (0, ea.A)({ user: t, currentUser: l }),
        e$ = (0, f.q)({ userId: t.id }),
        eB = (0, h.fi)(t.id),
        eH = (0, S.A)(t.id),
        eY = (0, R.A)(t.id),
        eJ = (0, m.GV)(),
        eZ = ec.intl.format(ec.t.KRe1Fk, { name: eM });
    return (
        n.useEffect(() => {
            let e = () => {
                eR(!0),
                    setTimeout(() => {
                        eR(!1);
                    }, 1e3);
            };
            return (
                E._.subscribe(eo.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    E._.unsubscribe(eo.jej.SHAKE_PROFILE_MODAL, e), (0, es.XA)(null);
                }
            );
        }, []),
        (0, i.jsx)(A.f5, {
            value: e_,
            children: (0, i.jsx)(C.of, {
                value: eC,
                openedAt: eI,
                fetchStartedAt: eU?.fetchStartedAt,
                fetchEndedAt: eU?.fetchEndedAt,
                isLoaded: eU?.isLoaded,
                children: (0, i.jsx)(D.Hl, {
                    value: eL,
                    children: (0, i.jsx)(L.N, {
                        value: eh,
                        children: (0, i.jsxs)(d.EOs, {
                            "data-migration-pending": !0,
                            hideShadow: !0,
                            className: eu.zr,
                            transitionState: ef,
                            "aria-labelledby": eJ,
                            parentComponent: "UserProfileModalV2",
                            children: [
                                (0, i.jsxs)(d.bfh, {
                                    isShaking: eO,
                                    intensity: 1.4,
                                    children: [
                                        eE
                                            ? (0, i.jsxs)("div", {
                                                  className: eu.sr,
                                                  children: [
                                                      (0, i.jsxs)(d.Heading, {
                                                          id: eJ,
                                                          variant: "heading-sm/normal",
                                                          color: "text-strong",
                                                          children: [
                                                              (0, i.jsx)(d.AC4, {
                                                                  children: `${ec.intl.string(ec.t.apVial)}: ${eZ}`,
                                                              }),
                                                              (0, i.jsx)("span", {
                                                                  "aria-hidden": !0,
                                                                  children: ec.intl.string(ec.t.apVial),
                                                              }),
                                                          ],
                                                      }),
                                                      (0, i.jsx)(d.Button, {
                                                          size: "sm",
                                                          variant: "secondary",
                                                          text: ec.intl.string(ec.t.ojM1xJ),
                                                          onClick: ev,
                                                          "aria-label": ec.intl.string(ec.t.cpT0Cq),
                                                      }),
                                                  ],
                                              })
                                            : (0, i.jsx)(d.AC4, {
                                                  children: (0, i.jsx)(d.H, { id: eJ, children: eZ }),
                                              }),
                                        (0, i.jsx)(d.Fmo, {
                                            children: (0, i.jsxs)(H.A, {
                                                className: a()(eE && eu.r9, eT),
                                                user: t,
                                                displayProfile: eU,
                                                themeType: ed.d.MODAL_V2,
                                                privateBanner: eU?.private === !0 ? (0, i.jsx)($.A, {}) : void 0,
                                                children: [
                                                    null != ek &&
                                                        (0, i.jsx)("div", {
                                                            className: eu.iL,
                                                            style: { backgroundImage: `url(${ek})` },
                                                        }),
                                                    null != eL.interactionType &&
                                                        (0, i.jsx)(r.animated.div, { style: eD, className: eu.tB }),
                                                    (0, i.jsx)(en.A, {
                                                        onAutoHide: () => (0, es.XA)(null),
                                                        className: eu.oR,
                                                    }),
                                                    (0, i.jsxs)("div", {
                                                        className: eu.ME,
                                                        ref: eU?.profileEffect != null ? eP : void 0,
                                                        children: [
                                                            (0, i.jsxs)("div", {
                                                                className: eu.Nr,
                                                                children: [
                                                                    (0, i.jsx)(M.A, {
                                                                        user: t,
                                                                        displayProfile: eU,
                                                                        themeType: ed.d.MODAL_V2,
                                                                    }),
                                                                    (0, i.jsx)(z.A, {
                                                                        userId: t.id,
                                                                        onClose: ev,
                                                                        className: eu.aX,
                                                                    }),
                                                                    (0, i.jsx)(G.A, {
                                                                        user: t,
                                                                        displayProfile: eU,
                                                                        guildId: s,
                                                                        channelId: eA,
                                                                        themeType: ed.d.MODAL_V2,
                                                                    }),
                                                                    (0, i.jsx)(J.A, {
                                                                        user: t,
                                                                        guildId: s,
                                                                        channelId: eA,
                                                                        themeType: ed.d.MODAL_V2,
                                                                        hasEntered: ef === d.ip4.ENTERED,
                                                                        prompt: eW && t.id === l.id ? ez : null,
                                                                        disableToolbar: eE,
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, i.jsxs)(d.HOs, {
                                                                fade: !0,
                                                                className: eu.kI,
                                                                children: [
                                                                    (0, i.jsx)(V.A, { userId: t.id }),
                                                                    (0, i.jsx)(Y.A, {
                                                                        user: t,
                                                                        guildId: eU?.guildId ?? void 0,
                                                                        onClose: ev,
                                                                        nickname: T.Ay.useName(eU?.guildId, eA, t),
                                                                        nicknameVariant: "heading-xl/semibold",
                                                                        pronouns: eU?.pronouns,
                                                                        tags: (0, i.jsx)(U.A, {
                                                                            displayProfile: eU,
                                                                            themeType: ed.d.MODAL_V2,
                                                                            onClose: ev,
                                                                        }),
                                                                    }),
                                                                    eF === eo.eA$.PENDING_INCOMING &&
                                                                        (0, i.jsx)(H.A.Overlay, {
                                                                            className: eu.uD,
                                                                            children: (0, i.jsx)(W.A, {
                                                                                user: t,
                                                                                applicationId: ew,
                                                                                guildId: eU?.guildId ?? void 0,
                                                                                channelId: eA,
                                                                                className: eu.CK,
                                                                            }),
                                                                        }),
                                                                    eB.map((e) => {
                                                                        let { applicationId: l } = e;
                                                                        return (0, i.jsx)(
                                                                            H.A.Overlay,
                                                                            {
                                                                                className: eu.uD,
                                                                                children: (0, i.jsx)(W.A, {
                                                                                    user: t,
                                                                                    guildId: eU?.guildId ?? void 0,
                                                                                    channelId: eA,
                                                                                    isGameRelationship: !0,
                                                                                    applicationId: l,
                                                                                    className: eu.CK,
                                                                                }),
                                                                            },
                                                                            l,
                                                                        );
                                                                    }),
                                                                    t.isProvisional &&
                                                                        (0, i.jsx)(H.A.Overlay, {
                                                                            className: eu.uD,
                                                                            children: (0, i.jsx)(el.A, {
                                                                                heading: ec.intl.string(ec.t.Iyka0U),
                                                                                headingVariant: "text-md/semibold",
                                                                                headingIcon: (0, i.jsx)(d.EpV, {
                                                                                    size: "xs",
                                                                                    color: "currentColor",
                                                                                }),
                                                                                className: eu.CK,
                                                                                children: (0, i.jsx)(I.T, {
                                                                                    userId: t.id,
                                                                                    variant: "text-sm/normal",
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    t.id === l.id &&
                                                                        (0, i.jsx)(w.A, {
                                                                            isPremiumUser: (0, _.ki)(l),
                                                                            onInteraction: ev,
                                                                        }),
                                                                    (0, i.jsx)(B.A, { user: t, className: eu.CK }),
                                                                    (0, i.jsx)("div", {
                                                                        className: eu.De,
                                                                        children: (0, i.jsx)(X.A, {
                                                                            user: t,
                                                                            currentUser: l,
                                                                            guildId: s,
                                                                            channelId: eA,
                                                                            displayProfile: eU,
                                                                            relationshipType: eF,
                                                                            onClose: ev,
                                                                        }),
                                                                    }),
                                                                    eU?.bio != null &&
                                                                        eU?.bio !== "" &&
                                                                        !eV &&
                                                                        (0, i.jsx)(F.A, {
                                                                            userBio: eU.bio,
                                                                            setLineClamp: !1,
                                                                        }),
                                                                    e$.length > 0 &&
                                                                        (0, i.jsx)(el.A, {
                                                                            heading: ec.intl.string(ec.t["Uv/eTx"]),
                                                                            children: (0, i.jsx)(k.A, {
                                                                                applicationIds: e$,
                                                                            }),
                                                                        }),
                                                                    (0, i.jsx)(el.A, {
                                                                        heading: ec.intl.string(ec.t.a6XYD9),
                                                                        children: (0, i.jsx)(K.A, {
                                                                            userId: t.id,
                                                                            guildId: eU?.guildId,
                                                                            tooltipDelay: er.In,
                                                                        }),
                                                                    }),
                                                                    eU?.guildId != null &&
                                                                        (0, i.jsx)(Z.A, {
                                                                            userId: t.id,
                                                                            guildId: eU.guildId,
                                                                            className: eu.UO,
                                                                            headingVariant: "text-xs/medium",
                                                                            headingColor: "currentColor",
                                                                        }),
                                                                    eH.length > 0 &&
                                                                        (0, i.jsx)(el.A, {
                                                                            heading: ec.intl.string(ec.t["3fe7U5"]),
                                                                            scrollTargetId: er.bk.CONNECTIONS,
                                                                            children: (0, i.jsx)(Q.A, {
                                                                                connections: eH,
                                                                                userId: t.id,
                                                                                className: eu.kG,
                                                                            }),
                                                                        }),
                                                                    eY.length > 0 &&
                                                                        (0, i.jsx)(el.A, {
                                                                            heading: ec.intl.string(ec.t.PHjkRE),
                                                                            scrollTargetId: er.bk.APPS,
                                                                            children: (0, i.jsx)(q.A, {
                                                                                applicationRoleConnections: eY,
                                                                                onClose: ev,
                                                                                className: eu.kG,
                                                                            }),
                                                                        }),
                                                                    (0, i.jsx)(et.A, { userId: t.id }),
                                                                ],
                                                            }),
                                                            eU?.profileEffect != null &&
                                                                (0, i.jsx)(j.A, {
                                                                    skuId: eU?.profileEffect.skuId,
                                                                    isHovering: eb,
                                                                }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)(ei.A, {
                                                        user: t,
                                                        currentUser: l,
                                                        displayProfile: eU,
                                                        guildId: s,
                                                        channelId: eA,
                                                        items: eK,
                                                        initialSection: eg,
                                                        onClose: ev,
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(ee.A, { userId: t.id, className: eu.Q0 }),
                            ],
                        }),
                    }),
                }),
            }),
        })
    );
}
