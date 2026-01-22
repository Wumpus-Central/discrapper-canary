t.d(l, {
    A: () => eo,
}),
    t(896048);
var n = t(627968),
    i = t(64700),
    r = t(108531),
    s = t(311907),
    a = t(397927),
    o = t(80682),
    d = t(793574),
    c = t(688810),
    u = t(915089),
    f = t(713517),
    p = t(576241),
    m = t(645507),
    x = t(922590),
    A = t(821269),
    j = t(182592),
    h = t(437774),
    g = t(594832),
    v = t(994500),
    b = t(351906),
    I = t(203982),
    y = t(562153),
    O = t(474090),
    N = t(183555),
    E = t(622543),
    _ = t(950191),
    T = t(346713),
    P = t(484509),
    S = t(716804),
    C = t(679492),
    L = t(718019),
    D = t(31432),
    R = t(915614),
    w = t(389996),
    G = t(223330),
    M = t(559506),
    U = t(361311),
    k = t(886891),
    F = t(439053),
    V = t(743987),
    B = t(383448),
    W = t(946356),
    K = t(810396),
    z = t(159218),
    H = t(280645),
    Y = t(291335),
    J = t(807651),
    X = t(510059),
    Z = t(982599),
    Q = t(399122),
    $ = t(83013),
    q = t(515054),
    ee = t(513265),
    el = t(384377),
    et = t(160983),
    en = t(518477),
    ei = t(652215),
    er = t(996988),
    es = t(985018),
    ea = t(661388);

function eo(e) {
    var l, t;
    let {
            user: eo,
            currentUser: ed,
            guildId: ec,
            channelId: eu,
            messageId: ef,
            roleId: ep,
            sessionId: em,
            initialTabSection: ex,
            initialScrollTarget: eA,
            transitionState: ej,
            customStatusPrompt: eh,
            openedAt: eg,
            onClose: ev,
            showGuildProfile: eb = !0,
            sourceAnalyticsLocations: eI = [],
            disableActionsForPreview: ey = !1,
        } = e,
        { analyticsLocations: eO } = (0, c.Ay)([...eI, d.A.USER_PROFILE_MODAL_V2]),
        eN = (0, N.pb)({
            layout: "MODAL_V2",
            userId: eo.id,
            sourceSessionId: em,
            guildId: ec,
            channelId: eu,
            messageId: ef,
            roleId: ep,
            showGuildProfile: eb,
        }),
        eE = i.useRef(null),
        e_ = (0, f.M)(eE),
        [eT, eP] = i.useState(!1),
        { defaultWishlistId: eS } = (0, s.cf)([E.A], () => ({
            defaultWishlistId: E.A.getFirstWishlistId(eo.id),
        }));
    (0, g.fw)({
        wishlistId: eS,
        userId: eo.id,
    });
    let eC = (0, C.fC)(),
        eL = (0, a.zhh)({
            opacity: +(null != eC.interactionType),
            config: {
                duration: 150,
            },
        }),
        eD = i.useMemo(
            () =>
                null != ec
                    ? {
                          [ec]: [eo.id],
                      }
                    : {},
            [ec, eo.id],
        );
    (0, o.E)(eD, "UserProfileModalV2");
    let eR = (0, _.Ay)(eo.id, eb ? ec : void 0),
        ew = y.Ay.useName(null == eR ? void 0 : eR.guildId, eu, eo),
        { relationshipType: eG, originApplicationId: eM } = (0, s.cf)([v.A], () => ({
            relationshipType: v.A.getRelationshipType(eo.id),
            originApplicationId: v.A.getOriginApplicationId(eo.id),
        })),
        eU = (0, s.bG)([b.A], () => b.A.hidePersonalInformation),
        ek =
            null == eR
                ? void 0
                : eR.getBannerURL({
                      canAnimate: !1,
                      size: 1024,
                  }),
        eF = (0, p.h)({
            location: "UserProfileModalV2",
        }),
        eV = i.useMemo(() => (null != eh ? eh : (0, m.A)()), [eh]),
        eB = (0, et.A)({
            user: eo,
            currentUser: ed,
        }),
        eW = (0, A.q)({
            userId: eo.id,
        }),
        eK = (0, x.fi)(eo.id),
        ez = (0, P.A)(eo.id),
        eH = (0, T.A)(eo.id),
        eY = (0, u.GV)(),
        eJ = es.intl.format(es.t.KRe1Fk, {
            name: ew,
        });
    return (
        i.useEffect(() => {
            let e = () => {
                eP(!0),
                    setTimeout(() => {
                        eP(!1);
                    }, 1e3);
            };
            return (
                I._.subscribe(ei.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    I._.unsubscribe(ei.jej.SHAKE_PROFILE_MODAL, e), (0, el.XA)(null);
                }
            );
        }, []),
        (0, n.jsx)(c.f5, {
            value: eO,
            children: (0, n.jsx)(N.of, {
                value: eN,
                openedAt: eg,
                fetchStartedAt: null == eR ? void 0 : eR.fetchStartedAt,
                fetchEndedAt: null == eR ? void 0 : eR.fetchEndedAt,
                isLoaded: null == eR ? void 0 : eR.isLoaded,
                children: (0, n.jsx)(C.Hl, {
                    value: eC,
                    children: (0, n.jsx)(S.N, {
                        value: eA,
                        children: (0, n.jsxs)(a.EOs, {
                            "data-migration-pending": !0,
                            hideShadow: !0,
                            className: ea.zr,
                            transitionState: ej,
                            "aria-labelledby": eY,
                            parentComponent: "UserProfileModalV2",
                            children: [
                                (0, n.jsxs)(a.bfh, {
                                    isShaking: eT,
                                    intensity: 1.4,
                                    children: [
                                        ey
                                            ? (0, n.jsxs)("div", {
                                                  className: ea.sr,
                                                  children: [
                                                      (0, n.jsxs)(a.Heading, {
                                                          id: eY,
                                                          variant: "heading-sm/normal",
                                                          color: "text-strong",
                                                          children: [
                                                              (0, n.jsx)(a.AC4, {
                                                                  children: ""
                                                                      .concat(es.intl.string(es.t.apVial), ": ")
                                                                      .concat(eJ),
                                                              }),
                                                              (0, n.jsx)("span", {
                                                                  "aria-hidden": !0,
                                                                  children: es.intl.string(es.t.apVial),
                                                              }),
                                                          ],
                                                      }),
                                                      (0, n.jsx)(a.Button, {
                                                          size: "sm",
                                                          variant: "secondary",
                                                          text: es.intl.string(es.t.ojM1xJ),
                                                          onClick: ev,
                                                          "aria-label": es.intl.string(es.t.cpT0Cq),
                                                      }),
                                                  ],
                                              })
                                            : (0, n.jsx)(a.AC4, {
                                                  children: (0, n.jsx)(a.H, {
                                                      id: eY,
                                                      children: eJ,
                                                  }),
                                              }),
                                        (0, n.jsx)(a.Fmo, {
                                            children: (0, n.jsxs)(W.A, {
                                                className: ey ? ea.r9 : void 0,
                                                user: eo,
                                                displayProfile: eR,
                                                themeType: er.d.MODAL_V2,
                                                children: [
                                                    null != ek &&
                                                        (0, n.jsx)("div", {
                                                            className: ea.iL,
                                                            style: {
                                                                backgroundImage: "url(".concat(ek, ")"),
                                                            },
                                                        }),
                                                    null != eC.interactionType &&
                                                        (0, n.jsx)(r.animated.div, {
                                                            style: eL,
                                                            className: ea.tB,
                                                        }),
                                                    (0, n.jsx)(ee.A, {
                                                        onAutoHide: () => (0, el.XA)(null),
                                                        className: ea.oR,
                                                    }),
                                                    (0, n.jsxs)("div", {
                                                        className: ea.ME,
                                                        ref:
                                                            (null == eR ? void 0 : eR.profileEffect) != null
                                                                ? eE
                                                                : void 0,
                                                        children: [
                                                            (0, n.jsxs)("div", {
                                                                className: ea.Nr,
                                                                children: [
                                                                    (0, n.jsx)(R.A, {
                                                                        user: eo,
                                                                        displayProfile: eR,
                                                                        themeType: er.d.MODAL_V2,
                                                                    }),
                                                                    (0, n.jsx)(F.A, {
                                                                        userId: eo.id,
                                                                        onClose: ev,
                                                                        className: ea.aX,
                                                                    }),
                                                                    (0, n.jsx)(L.A, {
                                                                        user: eo,
                                                                        displayProfile: eR,
                                                                        guildId: ec,
                                                                        channelId: eu,
                                                                        themeType: er.d.MODAL_V2,
                                                                    }),
                                                                    (0, n.jsx)(z.A, {
                                                                        user: eo,
                                                                        guildId: ec,
                                                                        channelId: eu,
                                                                        themeType: er.d.MODAL_V2,
                                                                        hasEntered: ej === a.ip4.ENTERED,
                                                                        prompt: eF && eo.id === ed.id ? eV : null,
                                                                        disableToolbar: ey,
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, n.jsxs)(a.HOs, {
                                                                fade: !0,
                                                                className: ea.kI,
                                                                children: [
                                                                    (0, n.jsx)(M.A, {
                                                                        userId: eo.id,
                                                                    }),
                                                                    (0, n.jsx)(K.A, {
                                                                        user: eo,
                                                                        guildId:
                                                                            null !=
                                                                            (l = null == eR ? void 0 : eR.guildId)
                                                                                ? l
                                                                                : void 0,
                                                                        onClose: ev,
                                                                        nickname: y.Ay.useName(
                                                                            null == eR ? void 0 : eR.guildId,
                                                                            eu,
                                                                            eo,
                                                                        ),
                                                                        nicknameVariant: "heading-xl/semibold",
                                                                        pronouns: null == eR ? void 0 : eR.pronouns,
                                                                        tags: (0, n.jsx)(D.A, {
                                                                            displayProfile: eR,
                                                                            themeType: er.d.MODAL_V2,
                                                                            onClose: ev,
                                                                        }),
                                                                    }),
                                                                    eG === ei.eA$.PENDING_INCOMING &&
                                                                        (0, n.jsx)(W.A.Overlay, {
                                                                            className: ea.uD,
                                                                            children: (0, n.jsx)(k.A, {
                                                                                user: eo,
                                                                                applicationId: eM,
                                                                                guildId:
                                                                                    null !=
                                                                                    (t =
                                                                                        null == eR
                                                                                            ? void 0
                                                                                            : eR.guildId)
                                                                                        ? t
                                                                                        : void 0,
                                                                                channelId: eu,
                                                                                className: ea.CK,
                                                                            }),
                                                                        }),
                                                                    eK.map((e) => {
                                                                        var l;
                                                                        let { applicationId: t } = e;
                                                                        return (0, n.jsx)(
                                                                            W.A.Overlay,
                                                                            {
                                                                                className: ea.uD,
                                                                                children: (0, n.jsx)(k.A, {
                                                                                    user: eo,
                                                                                    guildId:
                                                                                        null !=
                                                                                        (l =
                                                                                            null == eR
                                                                                                ? void 0
                                                                                                : eR.guildId)
                                                                                            ? l
                                                                                            : void 0,
                                                                                    channelId: eu,
                                                                                    isGameRelationship: !0,
                                                                                    applicationId: t,
                                                                                    className: ea.CK,
                                                                                }),
                                                                            },
                                                                            t,
                                                                        );
                                                                    }),
                                                                    eo.isProvisional &&
                                                                        (0, n.jsx)(W.A.Overlay, {
                                                                            className: ea.uD,
                                                                            children: (0, n.jsx)($.A, {
                                                                                heading: es.intl.string(es.t.Iyka0U),
                                                                                headingVariant: "text-md/semibold",
                                                                                headingIcon: (0, n.jsx)(a.EpV, {
                                                                                    size: "xs",
                                                                                    color: "currentColor",
                                                                                }),
                                                                                className: ea.CK,
                                                                                children: (0, n.jsx)(h.T, {
                                                                                    userId: eo.id,
                                                                                    variant: "text-sm/normal",
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    eo.id === ed.id &&
                                                                        (0, n.jsx)(G.A, {
                                                                            isPremiumUser: (0, O.ki)(ed),
                                                                            onInteraction: ev,
                                                                        }),
                                                                    (0, n.jsx)(B.A, {
                                                                        user: eo,
                                                                        className: ea.CK,
                                                                    }),
                                                                    (0, n.jsx)("div", {
                                                                        className: ea.De,
                                                                        children: (0, n.jsx)(J.A, {
                                                                            user: eo,
                                                                            currentUser: ed,
                                                                            guildId: ec,
                                                                            channelId: eu,
                                                                            displayProfile: eR,
                                                                            relationshipType: eG,
                                                                            onClose: ev,
                                                                        }),
                                                                    }),
                                                                    (null == eR ? void 0 : eR.bio) != null &&
                                                                        (null == eR ? void 0 : eR.bio) !== "" &&
                                                                        !eU &&
                                                                        (0, n.jsx)(w.A, {
                                                                            userBio: eR.bio,
                                                                            setLineClamp: !1,
                                                                        }),
                                                                    eW.length > 0 &&
                                                                        (0, n.jsx)($.A, {
                                                                            heading: es.intl.string(es.t["Uv/eTx"]),
                                                                            children: (0, n.jsx)(U.A, {
                                                                                applicationIds: eW,
                                                                            }),
                                                                        }),
                                                                    (0, n.jsx)($.A, {
                                                                        heading: es.intl.string(es.t.a6XYD9),
                                                                        children: (0, n.jsx)(V.A, {
                                                                            userId: eo.id,
                                                                            guildId: null == eR ? void 0 : eR.guildId,
                                                                            tooltipDelay: en.In,
                                                                        }),
                                                                    }),
                                                                    (null == eR ? void 0 : eR.guildId) != null &&
                                                                        (0, n.jsx)(H.A, {
                                                                            userId: eo.id,
                                                                            guildId: eR.guildId,
                                                                            className: ea.UO,
                                                                            headingVariant: "text-xs/medium",
                                                                            headingColor: "currentColor",
                                                                        }),
                                                                    ez.length > 0 &&
                                                                        (0, n.jsx)($.A, {
                                                                            heading: es.intl.string(es.t["3fe7U5"]),
                                                                            scrollTargetId: en.bk.CONNECTIONS,
                                                                            children: (0, n.jsx)(X.A, {
                                                                                connections: ez,
                                                                                userId: eo.id,
                                                                                className: ea.kG,
                                                                            }),
                                                                        }),
                                                                    eH.length > 0 &&
                                                                        (0, n.jsx)($.A, {
                                                                            heading: es.intl.string(es.t.PHjkRE),
                                                                            scrollTargetId: en.bk.APPS,
                                                                            children: (0, n.jsx)(Y.A, {
                                                                                applicationRoleConnections: eH,
                                                                                onClose: ev,
                                                                                className: ea.kG,
                                                                            }),
                                                                        }),
                                                                    (0, n.jsx)(Q.A, {
                                                                        userId: eo.id,
                                                                    }),
                                                                ],
                                                            }),
                                                            (null == eR ? void 0 : eR.profileEffect) != null &&
                                                                (0, n.jsx)(j.A, {
                                                                    skuId: null == eR ? void 0 : eR.profileEffect.skuId,
                                                                    isHovering: e_,
                                                                }),
                                                        ],
                                                    }),
                                                    (0, n.jsx)(q.A, {
                                                        user: eo,
                                                        currentUser: ed,
                                                        displayProfile: eR,
                                                        guildId: ec,
                                                        channelId: eu,
                                                        items: eB,
                                                        initialSection: ex,
                                                        onClose: ev,
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(Z.A, {
                                    userId: eo.id,
                                    className: ea.Q0,
                                }),
                            ],
                        }),
                    }),
                }),
            }),
        })
    );
}
