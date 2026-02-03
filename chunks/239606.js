n.d(t, {
    A: () => ea,
}),
    n(896048);
var l = n(627968),
    i = n(64700),
    r = n(92674),
    s = n(311907),
    o = n(397927),
    a = n(80682),
    d = n(793574),
    c = n(688810),
    u = n(915089),
    p = n(713517),
    f = n(576241),
    m = n(645507),
    A = n(922590),
    x = n(821269),
    g = n(182592),
    j = n(437774),
    h = n(594832),
    b = n(994500),
    v = n(351906),
    I = n(203982),
    y = n(562153),
    _ = n(474090),
    O = n(183555),
    N = n(622543),
    E = n(950191),
    P = n(346713),
    T = n(484509),
    C = n(716804),
    S = n(679492),
    L = n(718019),
    R = n(31432),
    D = n(915614),
    w = n(389996),
    M = n(223330),
    G = n(559506),
    U = n(361311),
    k = n(886891),
    F = n(439053),
    V = n(743987),
    B = n(383448),
    W = n(946356),
    K = n(810396),
    z = n(159218),
    H = n(280645),
    Y = n(291335),
    J = n(807651),
    X = n(510059),
    Q = n(982599),
    $ = n(399122),
    Z = n(83013),
    q = n(515054),
    ee = n(513265),
    et = n(384377),
    en = n(160983),
    el = n(518477),
    ei = n(652215),
    er = n(996988),
    es = n(985018),
    eo = n(661388);

function ea(e) {
    var t, n;
    let {
            user: ea,
            currentUser: ed,
            guildId: ec,
            channelId: eu,
            messageId: ep,
            roleId: ef,
            sessionId: em,
            initialTabSection: eA,
            initialScrollTarget: ex,
            transitionState: eg,
            customStatusPrompt: ej,
            openedAt: eh,
            onClose: eb,
            showGuildProfile: ev = !0,
            sourceAnalyticsLocations: eI = [],
            disableActionsForPreview: ey = !1,
        } = e,
        { analyticsLocations: e_ } = (0, c.Ay)([...eI, d.A.USER_PROFILE_MODAL_V2]),
        eO = (0, O.pb)({
            layout: "MODAL_V2",
            userId: ea.id,
            sourceSessionId: em,
            guildId: ec,
            channelId: eu,
            messageId: ep,
            roleId: ef,
            showGuildProfile: ev,
        }),
        eN = i.useRef(null),
        eE = (0, p.M)(eN),
        [eP, eT] = i.useState(!1),
        { defaultWishlistId: eC } = (0, s.cf)([N.A], () => ({
            defaultWishlistId: N.A.getFirstWishlistId(ea.id),
        }));
    (0, h.fw)({
        wishlistId: eC,
        userId: ea.id,
    });
    let eS = (0, S.fC)(),
        eL = (0, o.zhh)({
            opacity: +(null != eS.interactionType),
            config: {
                duration: 150,
            },
        }),
        eR = i.useMemo(
            () =>
                null != ec
                    ? {
                          [ec]: [ea.id],
                      }
                    : {},
            [ec, ea.id],
        );
    (0, a.E)(eR, "UserProfileModalV2");
    let eD = (0, E.Ay)(ea.id, ev ? ec : void 0),
        ew = y.Ay.useName(null == eD ? void 0 : eD.guildId, eu, ea),
        { relationshipType: eM, originApplicationId: eG } = (0, s.cf)([b.A], () => ({
            relationshipType: b.A.getRelationshipType(ea.id),
            originApplicationId: b.A.getOriginApplicationId(ea.id),
        })),
        eU = (0, s.bG)([v.A], () => v.A.hidePersonalInformation),
        ek =
            null == eD
                ? void 0
                : eD.getBannerURL({
                      canAnimate: !1,
                      size: 1024,
                  }),
        eF = (0, f.h)({
            location: "UserProfileModalV2",
        }),
        eV = i.useMemo(() => (null != ej ? ej : (0, m.A)()), [ej]),
        eB = (0, en.A)({
            user: ea,
            currentUser: ed,
        }),
        eW = (0, x.q)({
            userId: ea.id,
        }),
        eK = (0, A.fi)(ea.id),
        ez = (0, T.A)(ea.id),
        eH = (0, P.A)(ea.id),
        eY = (0, u.GV)(),
        eJ = es.intl.format(es.t.KRe1Fk, {
            name: ew,
        });
    return (
        i.useEffect(() => {
            let e = () => {
                eT(!0),
                    setTimeout(() => {
                        eT(!1);
                    }, 1e3);
            };
            return (
                I._.subscribe(ei.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    I._.unsubscribe(ei.jej.SHAKE_PROFILE_MODAL, e), (0, et.XA)(null);
                }
            );
        }, []),
        (0, l.jsx)(c.f5, {
            value: e_,
            children: (0, l.jsx)(O.of, {
                value: eO,
                openedAt: eh,
                fetchStartedAt: null == eD ? void 0 : eD.fetchStartedAt,
                fetchEndedAt: null == eD ? void 0 : eD.fetchEndedAt,
                isLoaded: null == eD ? void 0 : eD.isLoaded,
                children: (0, l.jsx)(S.Hl, {
                    value: eS,
                    children: (0, l.jsx)(C.N, {
                        value: ex,
                        children: (0, l.jsxs)(o.EOs, {
                            "data-migration-pending": !0,
                            hideShadow: !0,
                            className: eo.zr,
                            transitionState: eg,
                            "aria-labelledby": eY,
                            parentComponent: "UserProfileModalV2",
                            children: [
                                (0, l.jsxs)(o.bfh, {
                                    isShaking: eP,
                                    intensity: 1.4,
                                    children: [
                                        ey
                                            ? (0, l.jsxs)("div", {
                                                  className: eo.sr,
                                                  children: [
                                                      (0, l.jsxs)(o.Heading, {
                                                          id: eY,
                                                          variant: "heading-sm/normal",
                                                          color: "text-strong",
                                                          children: [
                                                              (0, l.jsx)(o.AC4, {
                                                                  children: ""
                                                                      .concat(es.intl.string(es.t.apVial), ": ")
                                                                      .concat(eJ),
                                                              }),
                                                              (0, l.jsx)("span", {
                                                                  "aria-hidden": !0,
                                                                  children: es.intl.string(es.t.apVial),
                                                              }),
                                                          ],
                                                      }),
                                                      (0, l.jsx)(o.Button, {
                                                          size: "sm",
                                                          variant: "secondary",
                                                          text: es.intl.string(es.t.ojM1xJ),
                                                          onClick: eb,
                                                          "aria-label": es.intl.string(es.t.cpT0Cq),
                                                      }),
                                                  ],
                                              })
                                            : (0, l.jsx)(o.AC4, {
                                                  children: (0, l.jsx)(o.H, {
                                                      id: eY,
                                                      children: eJ,
                                                  }),
                                              }),
                                        (0, l.jsx)(o.Fmo, {
                                            children: (0, l.jsxs)(W.A, {
                                                className: ey ? eo.r9 : void 0,
                                                user: ea,
                                                displayProfile: eD,
                                                themeType: er.d.MODAL_V2,
                                                children: [
                                                    null != ek &&
                                                        (0, l.jsx)("div", {
                                                            className: eo.iL,
                                                            style: {
                                                                backgroundImage: "url(".concat(ek, ")"),
                                                            },
                                                        }),
                                                    null != eS.interactionType &&
                                                        (0, l.jsx)(r.animated.div, {
                                                            style: eL,
                                                            className: eo.tB,
                                                        }),
                                                    (0, l.jsx)(ee.A, {
                                                        onAutoHide: () => (0, et.XA)(null),
                                                        className: eo.oR,
                                                    }),
                                                    (0, l.jsxs)("div", {
                                                        className: eo.ME,
                                                        ref:
                                                            (null == eD ? void 0 : eD.profileEffect) != null
                                                                ? eN
                                                                : void 0,
                                                        children: [
                                                            (0, l.jsxs)("div", {
                                                                className: eo.Nr,
                                                                children: [
                                                                    (0, l.jsx)(D.A, {
                                                                        user: ea,
                                                                        displayProfile: eD,
                                                                        themeType: er.d.MODAL_V2,
                                                                    }),
                                                                    (0, l.jsx)(F.A, {
                                                                        userId: ea.id,
                                                                        onClose: eb,
                                                                        className: eo.aX,
                                                                    }),
                                                                    (0, l.jsx)(L.A, {
                                                                        user: ea,
                                                                        displayProfile: eD,
                                                                        guildId: ec,
                                                                        channelId: eu,
                                                                        themeType: er.d.MODAL_V2,
                                                                    }),
                                                                    (0, l.jsx)(z.A, {
                                                                        user: ea,
                                                                        guildId: ec,
                                                                        channelId: eu,
                                                                        themeType: er.d.MODAL_V2,
                                                                        hasEntered: eg === o.ip4.ENTERED,
                                                                        prompt: eF && ea.id === ed.id ? eV : null,
                                                                        disableToolbar: ey,
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, l.jsxs)(o.HOs, {
                                                                fade: !0,
                                                                className: eo.kI,
                                                                children: [
                                                                    (0, l.jsx)(G.A, {
                                                                        userId: ea.id,
                                                                    }),
                                                                    (0, l.jsx)(K.A, {
                                                                        user: ea,
                                                                        guildId:
                                                                            null !=
                                                                            (t = null == eD ? void 0 : eD.guildId)
                                                                                ? t
                                                                                : void 0,
                                                                        onClose: eb,
                                                                        nickname: y.Ay.useName(
                                                                            null == eD ? void 0 : eD.guildId,
                                                                            eu,
                                                                            ea,
                                                                        ),
                                                                        nicknameVariant: "heading-xl/semibold",
                                                                        pronouns: null == eD ? void 0 : eD.pronouns,
                                                                        tags: (0, l.jsx)(R.A, {
                                                                            displayProfile: eD,
                                                                            themeType: er.d.MODAL_V2,
                                                                            onClose: eb,
                                                                        }),
                                                                    }),
                                                                    eM === ei.eA$.PENDING_INCOMING &&
                                                                        (0, l.jsx)(W.A.Overlay, {
                                                                            className: eo.uD,
                                                                            children: (0, l.jsx)(k.A, {
                                                                                user: ea,
                                                                                applicationId: eG,
                                                                                guildId:
                                                                                    null !=
                                                                                    (n =
                                                                                        null == eD
                                                                                            ? void 0
                                                                                            : eD.guildId)
                                                                                        ? n
                                                                                        : void 0,
                                                                                channelId: eu,
                                                                                className: eo.CK,
                                                                            }),
                                                                        }),
                                                                    eK.map((e) => {
                                                                        var t;
                                                                        let { applicationId: n } = e;
                                                                        return (0, l.jsx)(
                                                                            W.A.Overlay,
                                                                            {
                                                                                className: eo.uD,
                                                                                children: (0, l.jsx)(k.A, {
                                                                                    user: ea,
                                                                                    guildId:
                                                                                        null !=
                                                                                        (t =
                                                                                            null == eD
                                                                                                ? void 0
                                                                                                : eD.guildId)
                                                                                            ? t
                                                                                            : void 0,
                                                                                    channelId: eu,
                                                                                    isGameRelationship: !0,
                                                                                    applicationId: n,
                                                                                    className: eo.CK,
                                                                                }),
                                                                            },
                                                                            n,
                                                                        );
                                                                    }),
                                                                    ea.isProvisional &&
                                                                        (0, l.jsx)(W.A.Overlay, {
                                                                            className: eo.uD,
                                                                            children: (0, l.jsx)(Z.A, {
                                                                                heading: es.intl.string(es.t.Iyka0U),
                                                                                headingVariant: "text-md/semibold",
                                                                                headingIcon: (0, l.jsx)(o.EpV, {
                                                                                    size: "xs",
                                                                                    color: "currentColor",
                                                                                }),
                                                                                className: eo.CK,
                                                                                children: (0, l.jsx)(j.T, {
                                                                                    userId: ea.id,
                                                                                    variant: "text-sm/normal",
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    ea.id === ed.id &&
                                                                        (0, l.jsx)(M.A, {
                                                                            isPremiumUser: (0, _.ki)(ed),
                                                                            onInteraction: eb,
                                                                        }),
                                                                    (0, l.jsx)(B.A, {
                                                                        user: ea,
                                                                        className: eo.CK,
                                                                    }),
                                                                    (0, l.jsx)("div", {
                                                                        className: eo.De,
                                                                        children: (0, l.jsx)(J.A, {
                                                                            user: ea,
                                                                            currentUser: ed,
                                                                            guildId: ec,
                                                                            channelId: eu,
                                                                            displayProfile: eD,
                                                                            relationshipType: eM,
                                                                            onClose: eb,
                                                                        }),
                                                                    }),
                                                                    (null == eD ? void 0 : eD.bio) != null &&
                                                                        (null == eD ? void 0 : eD.bio) !== "" &&
                                                                        !eU &&
                                                                        (0, l.jsx)(w.A, {
                                                                            userBio: eD.bio,
                                                                            setLineClamp: !1,
                                                                        }),
                                                                    eW.length > 0 &&
                                                                        (0, l.jsx)(Z.A, {
                                                                            heading: es.intl.string(es.t["Uv/eTx"]),
                                                                            children: (0, l.jsx)(U.A, {
                                                                                applicationIds: eW,
                                                                            }),
                                                                        }),
                                                                    (0, l.jsx)(Z.A, {
                                                                        heading: es.intl.string(es.t.a6XYD9),
                                                                        children: (0, l.jsx)(V.A, {
                                                                            userId: ea.id,
                                                                            guildId: null == eD ? void 0 : eD.guildId,
                                                                            tooltipDelay: el.In,
                                                                        }),
                                                                    }),
                                                                    (null == eD ? void 0 : eD.guildId) != null &&
                                                                        (0, l.jsx)(H.A, {
                                                                            userId: ea.id,
                                                                            guildId: eD.guildId,
                                                                            className: eo.UO,
                                                                            headingVariant: "text-xs/medium",
                                                                            headingColor: "currentColor",
                                                                        }),
                                                                    ez.length > 0 &&
                                                                        (0, l.jsx)(Z.A, {
                                                                            heading: es.intl.string(es.t["3fe7U5"]),
                                                                            scrollTargetId: el.bk.CONNECTIONS,
                                                                            children: (0, l.jsx)(X.A, {
                                                                                connections: ez,
                                                                                userId: ea.id,
                                                                                className: eo.kG,
                                                                            }),
                                                                        }),
                                                                    eH.length > 0 &&
                                                                        (0, l.jsx)(Z.A, {
                                                                            heading: es.intl.string(es.t.PHjkRE),
                                                                            scrollTargetId: el.bk.APPS,
                                                                            children: (0, l.jsx)(Y.A, {
                                                                                applicationRoleConnections: eH,
                                                                                onClose: eb,
                                                                                className: eo.kG,
                                                                            }),
                                                                        }),
                                                                    (0, l.jsx)($.A, {
                                                                        userId: ea.id,
                                                                    }),
                                                                ],
                                                            }),
                                                            (null == eD ? void 0 : eD.profileEffect) != null &&
                                                                (0, l.jsx)(g.A, {
                                                                    skuId: null == eD ? void 0 : eD.profileEffect.skuId,
                                                                    isHovering: eE,
                                                                }),
                                                        ],
                                                    }),
                                                    (0, l.jsx)(q.A, {
                                                        user: ea,
                                                        currentUser: ed,
                                                        displayProfile: eD,
                                                        guildId: ec,
                                                        channelId: eu,
                                                        items: eB,
                                                        initialSection: eA,
                                                        onClose: eb,
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(Q.A, {
                                    userId: ea.id,
                                    className: eo.Q0,
                                }),
                            ],
                        }),
                    }),
                }),
            }),
        })
    );
}
