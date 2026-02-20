i.d(t, { A: () => eu });
var l = i(627968),
    n = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(475539),
    o = i(311907),
    d = i(397927),
    c = i(80682),
    u = i(793574),
    A = i(688810),
    m = i(915089),
    x = i(713517),
    g = i(645507),
    p = i(922590),
    h = i(821269),
    I = i(182592),
    f = i(437774),
    j = i(594832),
    v = i(994500),
    N = i(351906),
    E = i(203982),
    y = i(562153),
    T = i(474090),
    _ = i(183555),
    C = i(622543),
    P = i(950191),
    b = i(837529),
    O = i(346713),
    R = i(484509),
    S = i(716804),
    L = i(679492),
    D = i(718019),
    G = i(31432),
    U = i(915614),
    M = i(389996),
    F = i(223330),
    k = i(559506),
    V = i(361311),
    w = i(886891),
    W = i(439053),
    K = i(743987),
    $ = i(312381),
    z = i(383448),
    B = i(946356),
    H = i(810396),
    Y = i(159218),
    J = i(280645),
    Z = i(291335),
    q = i(807651),
    X = i(510059),
    Q = i(982599),
    ee = i(399122),
    et = i(83013),
    ei = i(515054),
    el = i(513265),
    en = i(384377),
    es = i(160983),
    ea = i(518477),
    er = i(652215),
    eo = i(996988),
    ed = i(985018),
    ec = i(661388);
function eu(e) {
    let {
            user: t,
            currentUser: i,
            guildId: s,
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
            disableActionsForPreview: eE = !1,
            themeContainerClassName: ey,
        } = e,
        { analyticsLocations: eT } = (0, A.Ay)([...eN, u.A.USER_PROFILE_MODAL_V2]),
        e_ = (0, _.pb)({
            layout: "MODAL_V2",
            userId: t.id,
            sourceSessionId: ex,
            guildId: s,
            channelId: eu,
            messageId: eA,
            roleId: em,
            showGuildProfile: ev,
        }),
        eC = n.useRef(null),
        eP = (0, x.M)(eC),
        [eb, eO] = n.useState(!1),
        { defaultWishlistId: eR } = (0, o.cf)([C.A], () => ({ defaultWishlistId: C.A.getFirstWishlistId(t.id) }));
    (0, j.fw)({ wishlistId: eR, userId: t.id });
    let eS = (0, L.fC)(),
        eL = (0, d.zhh)({ opacity: +(null != eS.interactionType), config: { duration: 150 } }),
        eD = n.useMemo(() => (null != s ? { [s]: [t.id] } : {}), [s, t.id]);
    (0, c.E)(eD, "UserProfileModalV2");
    let eG = (0, P.Ay)(t.id, ev ? s : void 0),
        eU = y.Ay.useName(eG?.guildId, eu, t),
        { relationshipType: eM, originApplicationId: eF } = (0, o.cf)([v.A], () => ({
            relationshipType: v.A.getRelationshipType(t.id),
            originApplicationId: v.A.getOriginApplicationId(t.id),
        })),
        ek = (0, o.bG)([N.A], () => N.A.hidePersonalInformation),
        eV = (0, b.Nx)() ? null : eG?.getBannerURL({ canAnimate: !1, size: 1024 }),
        ew = n.useMemo(() => eI ?? (0, g.A)(), [eI]),
        eW = (0, es.A)({ user: t, currentUser: i }),
        eK = (0, h.q)({ userId: t.id }),
        e$ = (0, p.fi)(t.id),
        ez = (0, R.A)(t.id),
        eB = (0, O.A)(t.id),
        eH = (0, m.GV)(),
        eY = ed.intl.format(ed.t.KRe1Fk, { name: eU });
    return (
        n.useEffect(() => {
            let e = () => {
                eO(!0),
                    setTimeout(() => {
                        eO(!1);
                    }, 1e3);
            };
            return (
                E._.subscribe(er.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    E._.unsubscribe(er.jej.SHAKE_PROFILE_MODAL, e), (0, en.XA)(null);
                }
            );
        }, []),
        (0, l.jsx)(A.f5, {
            value: eT,
            children: (0, l.jsx)(_.of, {
                value: e_,
                openedAt: ef,
                fetchStartedAt: eG?.fetchStartedAt,
                fetchEndedAt: eG?.fetchEndedAt,
                isLoaded: eG?.isLoaded,
                children: (0, l.jsx)(L.Hl, {
                    value: eS,
                    children: (0, l.jsx)(S.N, {
                        value: ep,
                        children: (0, l.jsxs)(d.EOs, {
                            "data-migration-pending": !0,
                            hideShadow: !0,
                            className: ec.zr,
                            transitionState: eh,
                            "aria-labelledby": eH,
                            parentComponent: "UserProfileModalV2",
                            children: [
                                (0, l.jsxs)(d.bfh, {
                                    isShaking: eb,
                                    intensity: 1.4,
                                    children: [
                                        eE
                                            ? (0, l.jsxs)("div", {
                                                  className: ec.sr,
                                                  children: [
                                                      (0, l.jsxs)(d.Heading, {
                                                          id: eH,
                                                          variant: "heading-sm/normal",
                                                          color: "text-strong",
                                                          children: [
                                                              (0, l.jsx)(d.AC4, {
                                                                  children: `${ed.intl.string(ed.t.apVial)}: ${eY}`,
                                                              }),
                                                              (0, l.jsx)("span", {
                                                                  "aria-hidden": !0,
                                                                  children: ed.intl.string(ed.t.apVial),
                                                              }),
                                                          ],
                                                      }),
                                                      (0, l.jsx)(d.Button, {
                                                          size: "sm",
                                                          variant: "secondary",
                                                          text: ed.intl.string(ed.t.ojM1xJ),
                                                          onClick: ej,
                                                          "aria-label": ed.intl.string(ed.t.cpT0Cq),
                                                      }),
                                                  ],
                                              })
                                            : (0, l.jsx)(d.AC4, {
                                                  children: (0, l.jsx)(d.H, { id: eH, children: eY }),
                                              }),
                                        (0, l.jsx)(d.Fmo, {
                                            children: (0, l.jsxs)(B.A, {
                                                className: a()(eE && ec.r9, ey),
                                                user: t,
                                                displayProfile: eG,
                                                themeType: eo.d.MODAL_V2,
                                                privateBanner: eG?.private === !0 ? (0, l.jsx)($.A, {}) : void 0,
                                                children: [
                                                    null != eV &&
                                                        (0, l.jsx)("div", {
                                                            className: ec.iL,
                                                            style: { backgroundImage: `url(${eV})` },
                                                        }),
                                                    null != eS.interactionType &&
                                                        (0, l.jsx)(r.animated.div, { style: eL, className: ec.tB }),
                                                    (0, l.jsx)(el.A, {
                                                        onAutoHide: () => (0, en.XA)(null),
                                                        className: ec.oR,
                                                    }),
                                                    (0, l.jsxs)("div", {
                                                        className: ec.ME,
                                                        ref: eG?.profileEffect != null ? eC : void 0,
                                                        children: [
                                                            (0, l.jsxs)("div", {
                                                                className: ec.Nr,
                                                                children: [
                                                                    (0, l.jsx)(U.A, {
                                                                        user: t,
                                                                        displayProfile: eG,
                                                                        themeType: eo.d.MODAL_V2,
                                                                    }),
                                                                    (0, l.jsx)(W.A, {
                                                                        userId: t.id,
                                                                        onClose: ej,
                                                                        className: ec.aX,
                                                                    }),
                                                                    (0, l.jsx)(D.A, {
                                                                        user: t,
                                                                        displayProfile: eG,
                                                                        guildId: s,
                                                                        channelId: eu,
                                                                        themeType: eo.d.MODAL_V2,
                                                                    }),
                                                                    (0, l.jsx)(Y.A, {
                                                                        user: t,
                                                                        guildId: s,
                                                                        channelId: eu,
                                                                        themeType: eo.d.MODAL_V2,
                                                                        hasEntered: eh === d.ip4.ENTERED,
                                                                        prompt: t.id === i.id ? ew : null,
                                                                        disableToolbar: eE,
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, l.jsxs)(d.HOs, {
                                                                fade: !0,
                                                                className: ec.kI,
                                                                children: [
                                                                    (0, l.jsx)(k.A, { userId: t.id }),
                                                                    (0, l.jsx)(H.A, {
                                                                        user: t,
                                                                        guildId: eG?.guildId ?? void 0,
                                                                        onClose: ej,
                                                                        nickname: y.Ay.useName(eG?.guildId, eu, t),
                                                                        nicknameVariant: "heading-xl/semibold",
                                                                        pronouns: eG?.pronouns,
                                                                        tags: (0, l.jsx)(G.A, {
                                                                            displayProfile: eG,
                                                                            themeType: eo.d.MODAL_V2,
                                                                            onClose: ej,
                                                                        }),
                                                                    }),
                                                                    eM === er.eA$.PENDING_INCOMING &&
                                                                        (0, l.jsx)(B.A.Overlay, {
                                                                            className: ec.uD,
                                                                            children: (0, l.jsx)(w.A, {
                                                                                user: t,
                                                                                applicationId: eF,
                                                                                guildId: eG?.guildId ?? void 0,
                                                                                channelId: eu,
                                                                                className: ec.CK,
                                                                            }),
                                                                        }),
                                                                    e$.map((e) => {
                                                                        let { applicationId: i } = e;
                                                                        return (0, l.jsx)(
                                                                            B.A.Overlay,
                                                                            {
                                                                                className: ec.uD,
                                                                                children: (0, l.jsx)(w.A, {
                                                                                    user: t,
                                                                                    guildId: eG?.guildId ?? void 0,
                                                                                    channelId: eu,
                                                                                    isGameRelationship: !0,
                                                                                    applicationId: i,
                                                                                    className: ec.CK,
                                                                                }),
                                                                            },
                                                                            i,
                                                                        );
                                                                    }),
                                                                    t.isProvisional &&
                                                                        (0, l.jsx)(B.A.Overlay, {
                                                                            className: ec.uD,
                                                                            children: (0, l.jsx)(et.A, {
                                                                                heading: ed.intl.string(ed.t.Iyka0U),
                                                                                headingVariant: "text-md/semibold",
                                                                                headingIcon: (0, l.jsx)(d.EpV, {
                                                                                    size: "xs",
                                                                                    color: "currentColor",
                                                                                }),
                                                                                className: ec.CK,
                                                                                children: (0, l.jsx)(f.T, {
                                                                                    userId: t.id,
                                                                                    variant: "text-sm/normal",
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    t.id === i.id &&
                                                                        (0, l.jsx)(F.A, {
                                                                            isPremiumUser: (0, T.ki)(i),
                                                                            onInteraction: ej,
                                                                        }),
                                                                    (0, l.jsx)(z.A, { user: t, className: ec.CK }),
                                                                    (0, l.jsx)("div", {
                                                                        className: ec.De,
                                                                        children: (0, l.jsx)(q.A, {
                                                                            user: t,
                                                                            currentUser: i,
                                                                            guildId: s,
                                                                            channelId: eu,
                                                                            displayProfile: eG,
                                                                            relationshipType: eM,
                                                                            onClose: ej,
                                                                        }),
                                                                    }),
                                                                    eG?.bio != null &&
                                                                        eG?.bio !== "" &&
                                                                        !ek &&
                                                                        (0, l.jsx)(M.A, {
                                                                            userBio: eG.bio,
                                                                            setLineClamp: !1,
                                                                        }),
                                                                    eK.length > 0 &&
                                                                        (0, l.jsx)(et.A, {
                                                                            heading: ed.intl.string(ed.t["Uv/eTx"]),
                                                                            children: (0, l.jsx)(V.A, {
                                                                                applicationIds: eK,
                                                                            }),
                                                                        }),
                                                                    (0, l.jsx)(et.A, {
                                                                        heading: ed.intl.string(ed.t.a6XYD9),
                                                                        children: (0, l.jsx)(K.A, {
                                                                            userId: t.id,
                                                                            guildId: eG?.guildId,
                                                                            tooltipDelay: ea.In,
                                                                        }),
                                                                    }),
                                                                    eG?.guildId != null &&
                                                                        (0, l.jsx)(J.A, {
                                                                            userId: t.id,
                                                                            guildId: eG.guildId,
                                                                            className: ec.UO,
                                                                            headingVariant: "text-xs/medium",
                                                                            headingColor: "currentColor",
                                                                        }),
                                                                    ez.length > 0 &&
                                                                        (0, l.jsx)(et.A, {
                                                                            heading: ed.intl.string(ed.t["3fe7U5"]),
                                                                            scrollTargetId: ea.bk.CONNECTIONS,
                                                                            children: (0, l.jsx)(X.A, {
                                                                                connections: ez,
                                                                                userId: t.id,
                                                                                className: ec.kG,
                                                                            }),
                                                                        }),
                                                                    eB.length > 0 &&
                                                                        (0, l.jsx)(et.A, {
                                                                            heading: ed.intl.string(ed.t.PHjkRE),
                                                                            scrollTargetId: ea.bk.APPS,
                                                                            children: (0, l.jsx)(Z.A, {
                                                                                applicationRoleConnections: eB,
                                                                                onClose: ej,
                                                                                className: ec.kG,
                                                                            }),
                                                                        }),
                                                                    (0, l.jsx)(ee.A, { userId: t.id }),
                                                                ],
                                                            }),
                                                            eG?.profileEffect != null &&
                                                                (0, l.jsx)(I.A, {
                                                                    skuId: eG?.profileEffect.skuId,
                                                                    isHovering: eP,
                                                                }),
                                                        ],
                                                    }),
                                                    (0, l.jsx)(ei.A, {
                                                        user: t,
                                                        currentUser: i,
                                                        displayProfile: eG,
                                                        guildId: s,
                                                        channelId: eu,
                                                        items: eW,
                                                        initialSection: eg,
                                                        onClose: ej,
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(Q.A, { userId: t.id, className: ec.Q0 }),
                            ],
                        }),
                    }),
                }),
            }),
        })
    );
}
