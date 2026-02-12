n.d(t, { A: () => eo });
var i = n(627968),
    s = n(64700),
    l = n(40153),
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
    w = n(312381),
    W = n(383448),
    z = n(946356),
    H = n(810396),
    K = n(159218),
    Y = n(280645),
    $ = n(291335),
    J = n(807651),
    X = n(510059),
    Q = n(982599),
    Z = n(399122),
    q = n(83013),
    ee = n(515054),
    et = n(513265),
    en = n(384377),
    ei = n(160983),
    es = n(518477),
    el = n(652215),
    ea = n(996988),
    er = n(985018),
    ed = n(661388);
function eo(e) {
    let {
            user: t,
            currentUser: n,
            guildId: eo,
            channelId: ec,
            messageId: eu,
            roleId: eA,
            sessionId: ex,
            initialTabSection: em,
            initialScrollTarget: ep,
            transitionState: eh,
            customStatusPrompt: ef,
            openedAt: eg,
            onClose: eI,
            showGuildProfile: ej = !0,
            sourceAnalyticsLocations: e_ = [],
            disableActionsForPreview: eN = !1,
        } = e,
        { analyticsLocations: ev } = (0, c.Ay)([...e_, o.A.USER_PROFILE_MODAL_V2]),
        eb = (0, T.pb)({
            layout: "MODAL_V2",
            userId: t.id,
            sourceSessionId: ex,
            guildId: eo,
            channelId: ec,
            messageId: eu,
            roleId: eA,
            showGuildProfile: ej,
        }),
        eT = s.useRef(null),
        eE = (0, A.M)(eT),
        [ey, eC] = s.useState(!1),
        { defaultWishlistId: eP } = (0, a.cf)([E.A], () => ({ defaultWishlistId: E.A.getFirstWishlistId(t.id) }));
    (0, I.fw)({ wishlistId: eP, userId: t.id });
    let eS = (0, L.fC)(),
        eL = (0, r.zhh)({ opacity: +(null != eS.interactionType), config: { duration: 150 } }),
        eO = s.useMemo(() => (null != eo ? { [eo]: [t.id] } : {}), [eo, t.id]);
    (0, d.E)(eO, "UserProfileModalV2");
    let eR = (0, y.Ay)(t.id, ej ? eo : void 0),
        eD = v.Ay.useName(eR?.guildId, ec, t),
        { relationshipType: eM, originApplicationId: eG } = (0, a.cf)([j.A], () => ({
            relationshipType: j.A.getRelationshipType(t.id),
            originApplicationId: j.A.getOriginApplicationId(t.id),
        })),
        eU = (0, a.bG)([_.A], () => _.A.hidePersonalInformation),
        ek = eR?.getBannerURL({ canAnimate: !1, size: 1024 }),
        eF = (0, x.h)({ location: "UserProfileModalV2" }),
        eV = s.useMemo(() => ef ?? (0, m.A)(), [ef]),
        eB = (0, ei.A)({ user: t, currentUser: n }),
        ew = (0, h.q)({ userId: t.id }),
        eW = (0, p.fi)(t.id),
        ez = (0, P.A)(t.id),
        eH = (0, C.A)(t.id),
        eK = (0, u.GV)(),
        eY = er.intl.format(er.t.KRe1Fk, { name: eD });
    return (
        s.useEffect(() => {
            let e = () => {
                eC(!0),
                    setTimeout(() => {
                        eC(!1);
                    }, 1e3);
            };
            return (
                N._.subscribe(el.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    N._.unsubscribe(el.jej.SHAKE_PROFILE_MODAL, e), (0, en.XA)(null);
                }
            );
        }, []),
        (0, i.jsx)(c.f5, {
            value: ev,
            children: (0, i.jsx)(T.of, {
                value: eb,
                openedAt: eg,
                fetchStartedAt: eR?.fetchStartedAt,
                fetchEndedAt: eR?.fetchEndedAt,
                isLoaded: eR?.isLoaded,
                children: (0, i.jsx)(L.Hl, {
                    value: eS,
                    children: (0, i.jsx)(S.N, {
                        value: ep,
                        children: (0, i.jsxs)(r.EOs, {
                            "data-migration-pending": !0,
                            hideShadow: !0,
                            className: ed.zr,
                            transitionState: eh,
                            "aria-labelledby": eK,
                            parentComponent: "UserProfileModalV2",
                            children: [
                                (0, i.jsxs)(r.bfh, {
                                    isShaking: ey,
                                    intensity: 1.4,
                                    children: [
                                        eN
                                            ? (0, i.jsxs)("div", {
                                                  className: ed.sr,
                                                  children: [
                                                      (0, i.jsxs)(r.Heading, {
                                                          id: eK,
                                                          variant: "heading-sm/normal",
                                                          color: "text-strong",
                                                          children: [
                                                              (0, i.jsx)(r.AC4, {
                                                                  children: `${er.intl.string(er.t.apVial)}: ${eY}`,
                                                              }),
                                                              (0, i.jsx)("span", {
                                                                  "aria-hidden": !0,
                                                                  children: er.intl.string(er.t.apVial),
                                                              }),
                                                          ],
                                                      }),
                                                      (0, i.jsx)(r.Button, {
                                                          size: "sm",
                                                          variant: "secondary",
                                                          text: er.intl.string(er.t.ojM1xJ),
                                                          onClick: eI,
                                                          "aria-label": er.intl.string(er.t.cpT0Cq),
                                                      }),
                                                  ],
                                              })
                                            : (0, i.jsx)(r.AC4, {
                                                  children: (0, i.jsx)(r.H, { id: eK, children: eY }),
                                              }),
                                        (0, i.jsx)(r.Fmo, {
                                            children: (0, i.jsxs)(z.A, {
                                                className: eN ? ed.r9 : void 0,
                                                user: t,
                                                displayProfile: eR,
                                                themeType: ea.d.MODAL_V2,
                                                privateBanner:
                                                    eR?.private === !0
                                                        ? (0, i.jsx)(w.A, { primaryColor: eR?.primaryColor })
                                                        : void 0,
                                                children: [
                                                    null != ek &&
                                                        (0, i.jsx)("div", {
                                                            className: ed.iL,
                                                            style: { backgroundImage: `url(${ek})` },
                                                        }),
                                                    null != eS.interactionType &&
                                                        (0, i.jsx)(l.animated.div, { style: eL, className: ed.tB }),
                                                    (0, i.jsx)(et.A, {
                                                        onAutoHide: () => (0, en.XA)(null),
                                                        className: ed.oR,
                                                    }),
                                                    (0, i.jsxs)("div", {
                                                        className: ed.ME,
                                                        ref: eR?.profileEffect != null ? eT : void 0,
                                                        children: [
                                                            (0, i.jsxs)("div", {
                                                                className: ed.Nr,
                                                                children: [
                                                                    (0, i.jsx)(D.A, {
                                                                        user: t,
                                                                        displayProfile: eR,
                                                                        themeType: ea.d.MODAL_V2,
                                                                    }),
                                                                    (0, i.jsx)(V.A, {
                                                                        userId: t.id,
                                                                        onClose: eI,
                                                                        className: ed.aX,
                                                                    }),
                                                                    (0, i.jsx)(O.A, {
                                                                        user: t,
                                                                        displayProfile: eR,
                                                                        guildId: eo,
                                                                        channelId: ec,
                                                                        themeType: ea.d.MODAL_V2,
                                                                    }),
                                                                    (0, i.jsx)(K.A, {
                                                                        user: t,
                                                                        guildId: eo,
                                                                        channelId: ec,
                                                                        themeType: ea.d.MODAL_V2,
                                                                        hasEntered: eh === r.ip4.ENTERED,
                                                                        prompt: eF && t.id === n.id ? eV : null,
                                                                        disableToolbar: eN,
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, i.jsxs)(r.HOs, {
                                                                fade: !0,
                                                                className: ed.kI,
                                                                children: [
                                                                    (0, i.jsx)(U.A, { userId: t.id }),
                                                                    (0, i.jsx)(H.A, {
                                                                        user: t,
                                                                        guildId: eR?.guildId ?? void 0,
                                                                        onClose: eI,
                                                                        nickname: v.Ay.useName(eR?.guildId, ec, t),
                                                                        nicknameVariant: "heading-xl/semibold",
                                                                        pronouns: eR?.pronouns,
                                                                        tags: (0, i.jsx)(R.A, {
                                                                            displayProfile: eR,
                                                                            themeType: ea.d.MODAL_V2,
                                                                            onClose: eI,
                                                                        }),
                                                                    }),
                                                                    eM === el.eA$.PENDING_INCOMING &&
                                                                        (0, i.jsx)(z.A.Overlay, {
                                                                            className: ed.uD,
                                                                            children: (0, i.jsx)(F.A, {
                                                                                user: t,
                                                                                applicationId: eG,
                                                                                guildId: eR?.guildId ?? void 0,
                                                                                channelId: ec,
                                                                                className: ed.CK,
                                                                            }),
                                                                        }),
                                                                    eW.map((e) => {
                                                                        let { applicationId: n } = e;
                                                                        return (0, i.jsx)(
                                                                            z.A.Overlay,
                                                                            {
                                                                                className: ed.uD,
                                                                                children: (0, i.jsx)(F.A, {
                                                                                    user: t,
                                                                                    guildId: eR?.guildId ?? void 0,
                                                                                    channelId: ec,
                                                                                    isGameRelationship: !0,
                                                                                    applicationId: n,
                                                                                    className: ed.CK,
                                                                                }),
                                                                            },
                                                                            n,
                                                                        );
                                                                    }),
                                                                    t.isProvisional &&
                                                                        (0, i.jsx)(z.A.Overlay, {
                                                                            className: ed.uD,
                                                                            children: (0, i.jsx)(q.A, {
                                                                                heading: er.intl.string(er.t.Iyka0U),
                                                                                headingVariant: "text-md/semibold",
                                                                                headingIcon: (0, i.jsx)(r.EpV, {
                                                                                    size: "xs",
                                                                                    color: "currentColor",
                                                                                }),
                                                                                className: ed.CK,
                                                                                children: (0, i.jsx)(g.T, {
                                                                                    userId: t.id,
                                                                                    variant: "text-sm/normal",
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    t.id === n.id &&
                                                                        (0, i.jsx)(G.A, {
                                                                            isPremiumUser: (0, b.ki)(n),
                                                                            onInteraction: eI,
                                                                        }),
                                                                    (0, i.jsx)(W.A, { user: t, className: ed.CK }),
                                                                    (0, i.jsx)("div", {
                                                                        className: ed.De,
                                                                        children: (0, i.jsx)(J.A, {
                                                                            user: t,
                                                                            currentUser: n,
                                                                            guildId: eo,
                                                                            channelId: ec,
                                                                            displayProfile: eR,
                                                                            relationshipType: eM,
                                                                            onClose: eI,
                                                                        }),
                                                                    }),
                                                                    eR?.bio != null &&
                                                                        eR?.bio !== "" &&
                                                                        !eU &&
                                                                        (0, i.jsx)(M.A, {
                                                                            userBio: eR.bio,
                                                                            setLineClamp: !1,
                                                                        }),
                                                                    ew.length > 0 &&
                                                                        (0, i.jsx)(q.A, {
                                                                            heading: er.intl.string(er.t["Uv/eTx"]),
                                                                            children: (0, i.jsx)(k.A, {
                                                                                applicationIds: ew,
                                                                            }),
                                                                        }),
                                                                    (0, i.jsx)(q.A, {
                                                                        heading: er.intl.string(er.t.a6XYD9),
                                                                        children: (0, i.jsx)(B.A, {
                                                                            userId: t.id,
                                                                            guildId: eR?.guildId,
                                                                            tooltipDelay: es.In,
                                                                        }),
                                                                    }),
                                                                    eR?.guildId != null &&
                                                                        (0, i.jsx)(Y.A, {
                                                                            userId: t.id,
                                                                            guildId: eR.guildId,
                                                                            className: ed.UO,
                                                                            headingVariant: "text-xs/medium",
                                                                            headingColor: "currentColor",
                                                                        }),
                                                                    ez.length > 0 &&
                                                                        (0, i.jsx)(q.A, {
                                                                            heading: er.intl.string(er.t["3fe7U5"]),
                                                                            scrollTargetId: es.bk.CONNECTIONS,
                                                                            children: (0, i.jsx)(X.A, {
                                                                                connections: ez,
                                                                                userId: t.id,
                                                                                className: ed.kG,
                                                                            }),
                                                                        }),
                                                                    eH.length > 0 &&
                                                                        (0, i.jsx)(q.A, {
                                                                            heading: er.intl.string(er.t.PHjkRE),
                                                                            scrollTargetId: es.bk.APPS,
                                                                            children: (0, i.jsx)($.A, {
                                                                                applicationRoleConnections: eH,
                                                                                onClose: eI,
                                                                                className: ed.kG,
                                                                            }),
                                                                        }),
                                                                    (0, i.jsx)(Z.A, { userId: t.id }),
                                                                ],
                                                            }),
                                                            eR?.profileEffect != null &&
                                                                (0, i.jsx)(f.A, {
                                                                    skuId: eR?.profileEffect.skuId,
                                                                    isHovering: eE,
                                                                }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)(ee.A, {
                                                        user: t,
                                                        currentUser: n,
                                                        displayProfile: eR,
                                                        guildId: eo,
                                                        channelId: ec,
                                                        items: eB,
                                                        initialSection: em,
                                                        onClose: eI,
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(Q.A, { userId: t.id, className: ed.Q0 }),
                            ],
                        }),
                    }),
                }),
            }),
        })
    );
}
