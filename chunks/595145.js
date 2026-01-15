t.d(n, { Z: () => ec }), t(388685);
var l = t(54381),
    i = t(473749),
    o = t(853590),
    r = t(442837),
    a = t(481060),
    c = t(616780),
    s = t(100527),
    d = t(906732),
    u = t(313201),
    f = t(104505),
    m = t(368326),
    p = t(429467),
    x = t(320582),
    h = t(246016),
    j = t(680295),
    v = t(189156),
    b = t(602733),
    g = t(699516),
    I = t(246946),
    y = t(585483),
    Z = t(5192),
    O = t(111361),
    N = t(785717),
    T = t(621853),
    A = t(687158),
    P = t(250822),
    E = t(771362),
    _ = t(104287),
    C = t(510659),
    S = t(899007),
    w = t(648052),
    D = t(867176),
    L = t(280885),
    B = t(537006),
    M = t(407699),
    R = t(78806),
    U = t(91433),
    k = t(451834),
    F = t(900927),
    G = t(944043),
    V = t(502762),
    W = t(530),
    z = t(4517),
    H = t(179828),
    K = t(769321),
    Y = t(993160),
    J = t(574887),
    q = t(996921),
    X = t(900011),
    Q = t(693408),
    $ = t(661462),
    ee = t(76076),
    en = t(872269),
    et = t(768111),
    el = t(228168),
    ei = t(981631),
    eo = t(671955),
    er = t(388032),
    ea = t(871893);
function ec(e) {
    var n, t;
    let {
            user: ec,
            currentUser: es,
            guildId: ed,
            channelId: eu,
            messageId: ef,
            roleId: em,
            sessionId: ep,
            initialTabSection: ex,
            initialScrollTarget: eh,
            transitionState: ej,
            customStatusPrompt: ev,
            openedAt: eb,
            onClose: eg,
            showGuildProfile: eI = !0,
            sourceAnalyticsLocations: ey = [],
            disableActionsForPreview: eZ = !1,
        } = e,
        { analyticsLocations: eO } = (0, d.ZP)([...ey, s.Z.USER_PROFILE_MODAL_V2]),
        eN = (0, N.ZB)({
            layout: "MODAL_V2",
            userId: ec.id,
            sourceSessionId: ep,
            guildId: ed,
            channelId: eu,
            messageId: ef,
            roleId: em,
            showGuildProfile: eI,
        }),
        eT = i.useRef(null),
        eA = (0, f.X)(eT),
        [eP, eE] = i.useState(!1),
        { defaultWishlistId: e_ } = (0, r.cj)([T.Z], () => ({ defaultWishlistId: T.Z.getFirstWishlistId(ec.id) }));
    (0, b.kZ)({
        wishlistId: e_,
        userId: ec.id,
    });
    let eC = (0, C.$m)(),
        eS = (0, a.q_F)({
            opacity: +(null != eC.interactionType),
            config: { duration: 150 },
        }),
        ew = i.useMemo(() => (null != ed ? { [ed]: [ec.id] } : {}), [ed, ec.id]);
    (0, c.$)(ew, "UserProfileModalV2");
    let eD = (0, A.ZP)(ec.id, eI ? ed : void 0),
        eL = Z.ZP.useName(null == eD ? void 0 : eD.guildId, eu, ec),
        { relationshipType: eB, originApplicationId: eM } = (0, r.cj)([g.Z], () => ({
            relationshipType: g.Z.getRelationshipType(ec.id),
            originApplicationId: g.Z.getOriginApplicationId(ec.id),
        })),
        eR = (0, r.e7)([I.Z], () => I.Z.hidePersonalInformation),
        eU =
            null == eD
                ? void 0
                : eD.getBannerURL({
                      canAnimate: !1,
                      size: 1024,
                  }),
        ek = (0, m.p)({ location: "UserProfileModalV2" }),
        eF = i.useMemo(() => (null != ev ? ev : (0, p.Z)()), [ev]),
        eG = (0, et.Z)({
            user: ec,
            currentUser: es,
        }),
        eV = (0, h.Y)({ userId: ec.id }),
        eW = (0, x.vh)(ec.id),
        ez = (0, E.Z)(ec.id),
        eH = (0, P.Z)(ec.id),
        eK = (0, u.Dt)(),
        eY = er.intl.format(er.t.KRe1Fk, { name: eL });
    return (
        i.useEffect(() => {
            let e = () => {
                eE(!0),
                    setTimeout(() => {
                        eE(!1);
                    }, 1000);
            };
            return (
                y.S.subscribe(ei.CkL.SHAKE_PROFILE_MODAL, e),
                () => {
                    y.S.unsubscribe(ei.CkL.SHAKE_PROFILE_MODAL, e), (0, en.L$)(null);
                }
            );
        }, []),
        (0, l.jsx)(d.Gt, {
            value: eO,
            children: (0, l.jsx)(N.Mt, {
                value: eN,
                openedAt: eb,
                fetchStartedAt: null == eD ? void 0 : eD.fetchStartedAt,
                fetchEndedAt: null == eD ? void 0 : eD.fetchEndedAt,
                isLoaded: null == eD ? void 0 : eD.isLoaded,
                children: (0, l.jsx)(C.NJ, {
                    value: eC,
                    children: (0, l.jsx)(_.n, {
                        value: eh,
                        children: (0, l.jsxs)(a.Y0X, {
                            "data-migration-pending": !0,
                            hideShadow: !0,
                            className: ea.root,
                            transitionState: ej,
                            "aria-labelledby": eK,
                            parentComponent: "UserProfileModalV2",
                            children: [
                                (0, l.jsxs)(a.UkV, {
                                    isShaking: eP,
                                    intensity: 1.4,
                                    children: [
                                        eZ
                                            ? (0, l.jsxs)("div", {
                                                  className: ea.previewBar,
                                                  children: [
                                                      (0, l.jsxs)(a.Heading, {
                                                          id: eK,
                                                          variant: "heading-sm/normal",
                                                          color: "text-strong",
                                                          children: [
                                                              (0, l.jsx)(a.nn4, {
                                                                  children: ""
                                                                      .concat(er.intl.string(er.t.apVial), ": ")
                                                                      .concat(eY),
                                                              }),
                                                              (0, l.jsx)("span", {
                                                                  "aria-hidden": !0,
                                                                  children: er.intl.string(er.t.apVial),
                                                              }),
                                                          ],
                                                      }),
                                                      (0, l.jsx)(a.Button, {
                                                          size: "sm",
                                                          variant: "secondary",
                                                          text: er.intl.string(er.t.ojM1xJ),
                                                          onClick: eg,
                                                          "aria-label": er.intl.string(er.t.cpT0Cq),
                                                      }),
                                                  ],
                                              })
                                            : (0, l.jsx)(a.nn4, {
                                                  children: (0, l.jsx)(a.H, {
                                                      id: eK,
                                                      children: eY,
                                                  }),
                                              }),
                                        (0, l.jsx)(a.y5t, {
                                            children: (0, l.jsxs)(V.Z, {
                                                className: eZ ? ea.disabled : void 0,
                                                user: ec,
                                                displayProfile: eD,
                                                themeType: eo.l.MODAL_V2,
                                                children: [
                                                    null != eU &&
                                                        (0, l.jsx)("div", {
                                                            className: ea.backgroundImage,
                                                            style: { backgroundImage: "url(".concat(eU, ")") },
                                                        }),
                                                    null != eC.interactionType &&
                                                        (0, l.jsx)(o.animated.div, {
                                                            style: eS,
                                                            className: ea.backdrop,
                                                        }),
                                                    (0, l.jsx)(ee.Z, {
                                                        onAutoHide: () => (0, en.L$)(null),
                                                        className: ea.toast,
                                                    }),
                                                    (0, l.jsxs)("div", {
                                                        className: ea.profile,
                                                        ref:
                                                            (null == eD ? void 0 : eD.profileEffect) != null
                                                                ? eT
                                                                : void 0,
                                                        children: [
                                                            (0, l.jsxs)("div", {
                                                                className: ea.profileHeader,
                                                                children: [
                                                                    (0, l.jsx)(D.Z, {
                                                                        user: ec,
                                                                        displayProfile: eD,
                                                                        themeType: eo.l.MODAL_V2,
                                                                    }),
                                                                    (0, l.jsx)(k.Z, {
                                                                        userId: ec.id,
                                                                        onClose: eg,
                                                                        className: ea.interactionToast,
                                                                    }),
                                                                    (0, l.jsx)(S.Z, {
                                                                        user: ec,
                                                                        displayProfile: eD,
                                                                        guildId: ed,
                                                                        channelId: eu,
                                                                        themeType: eo.l.MODAL_V2,
                                                                    }),
                                                                    (0, l.jsx)(z.Z, {
                                                                        user: ec,
                                                                        guildId: ed,
                                                                        channelId: eu,
                                                                        themeType: eo.l.MODAL_V2,
                                                                        hasEntered: ej === a.Dvm.ENTERED,
                                                                        prompt: ek && ec.id === es.id ? eF : null,
                                                                        disableToolbar: eZ,
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, l.jsxs)(a.Ttm, {
                                                                fade: !0,
                                                                className: ea.profileBody,
                                                                children: [
                                                                    (0, l.jsx)(M.Z, { userId: ec.id }),
                                                                    (0, l.jsx)(W.Z, {
                                                                        user: ec,
                                                                        guildId:
                                                                            null !=
                                                                            (n = null == eD ? void 0 : eD.guildId)
                                                                                ? n
                                                                                : void 0,
                                                                        onClose: eg,
                                                                        nickname: Z.ZP.useName(
                                                                            null == eD ? void 0 : eD.guildId,
                                                                            eu,
                                                                            ec,
                                                                        ),
                                                                        nicknameVariant: "heading-xl/semibold",
                                                                        pronouns: null == eD ? void 0 : eD.pronouns,
                                                                        tags: (0, l.jsx)(w.Z, {
                                                                            displayProfile: eD,
                                                                            themeType: eo.l.MODAL_V2,
                                                                            onClose: eg,
                                                                        }),
                                                                    }),
                                                                    eB === ei.OGo.PENDING_INCOMING &&
                                                                        (0, l.jsx)(V.Z.Overlay, {
                                                                            className: ea.profileOverlay,
                                                                            children: (0, l.jsx)(U.Z, {
                                                                                user: ec,
                                                                                applicationId: eM,
                                                                                guildId:
                                                                                    null !=
                                                                                    (t =
                                                                                        null == eD
                                                                                            ? void 0
                                                                                            : eD.guildId)
                                                                                        ? t
                                                                                        : void 0,
                                                                                channelId: eu,
                                                                                className: ea.profileBanner,
                                                                            }),
                                                                        }),
                                                                    eW.map((e) => {
                                                                        var n;
                                                                        let { applicationId: t } = e;
                                                                        return (0, l.jsx)(
                                                                            V.Z.Overlay,
                                                                            {
                                                                                className: ea.profileOverlay,
                                                                                children: (0, l.jsx)(U.Z, {
                                                                                    user: ec,
                                                                                    guildId:
                                                                                        null !=
                                                                                        (n =
                                                                                            null == eD
                                                                                                ? void 0
                                                                                                : eD.guildId)
                                                                                            ? n
                                                                                            : void 0,
                                                                                    channelId: eu,
                                                                                    isGameRelationship: !0,
                                                                                    applicationId: t,
                                                                                    className: ea.profileBanner,
                                                                                }),
                                                                            },
                                                                            t,
                                                                        );
                                                                    }),
                                                                    ec.isProvisional &&
                                                                        (0, l.jsx)(V.Z.Overlay, {
                                                                            className: ea.profileOverlay,
                                                                            children: (0, l.jsx)(Q.Z, {
                                                                                heading: er.intl.string(er.t.Iyka0U),
                                                                                headingVariant: "text-md/semibold",
                                                                                headingIcon: (0, l.jsx)(a.Mgn, {
                                                                                    size: "xs",
                                                                                    color: "currentColor",
                                                                                }),
                                                                                className: ea.profileBanner,
                                                                                children: (0, l.jsx)(v.n, {
                                                                                    userId: ec.id,
                                                                                    variant: "text-sm/normal",
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    ec.id === es.id &&
                                                                        (0, l.jsx)(B.Z, {
                                                                            isPremiumUser: (0, O.I5)(es),
                                                                            onInteraction: eg,
                                                                        }),
                                                                    (0, l.jsx)(G.Z, {
                                                                        user: ec,
                                                                        className: ea.profileBanner,
                                                                    }),
                                                                    (0, l.jsx)("div", {
                                                                        className: ea.profileButtons,
                                                                        children: (0, l.jsx)(Y.Z, {
                                                                            user: ec,
                                                                            currentUser: es,
                                                                            guildId: ed,
                                                                            channelId: eu,
                                                                            displayProfile: eD,
                                                                            relationshipType: eB,
                                                                            onClose: eg,
                                                                        }),
                                                                    }),
                                                                    (null == eD ? void 0 : eD.bio) != null &&
                                                                        (null == eD ? void 0 : eD.bio) !== "" &&
                                                                        !eR &&
                                                                        (0, l.jsx)(L.Z, {
                                                                            userBio: eD.bio,
                                                                            setLineClamp: !1,
                                                                        }),
                                                                    eV.length > 0 &&
                                                                        (0, l.jsx)(Q.Z, {
                                                                            heading: er.intl.string(er.t["Uv/eTx"]),
                                                                            children: (0, l.jsx)(R.Z, {
                                                                                applicationIds: eV,
                                                                            }),
                                                                        }),
                                                                    (0, l.jsx)(Q.Z, {
                                                                        heading: er.intl.string(er.t.a6XYD9),
                                                                        children: (0, l.jsx)(F.Z, {
                                                                            userId: ec.id,
                                                                            guildId: null == eD ? void 0 : eD.guildId,
                                                                            tooltipDelay: el.vB,
                                                                        }),
                                                                    }),
                                                                    (null == eD ? void 0 : eD.guildId) != null &&
                                                                        (0, l.jsx)(H.Z, {
                                                                            userId: ec.id,
                                                                            guildId: eD.guildId,
                                                                            className: ea.profileRolesSection,
                                                                            headingVariant: "text-xs/medium",
                                                                            headingColor: "currentColor",
                                                                        }),
                                                                    ez.length > 0 &&
                                                                        (0, l.jsx)(Q.Z, {
                                                                            heading: er.intl.string(er.t["3fe7U5"]),
                                                                            scrollTargetId: el.Tb.CONNECTIONS,
                                                                            children: (0, l.jsx)(J.Z, {
                                                                                connections: ez,
                                                                                userId: ec.id,
                                                                                className: ea.profileAppConnections,
                                                                            }),
                                                                        }),
                                                                    eH.length > 0 &&
                                                                        (0, l.jsx)(Q.Z, {
                                                                            heading: er.intl.string(er.t.PHjkRE),
                                                                            scrollTargetId: el.Tb.APPS,
                                                                            children: (0, l.jsx)(K.Z, {
                                                                                applicationRoleConnections: eH,
                                                                                onClose: eg,
                                                                                className: ea.profileAppConnections,
                                                                            }),
                                                                        }),
                                                                    (0, l.jsx)(X.Z, { userId: ec.id }),
                                                                ],
                                                            }),
                                                            (null == eD ? void 0 : eD.profileEffect) != null &&
                                                                (0, l.jsx)(j.Z, {
                                                                    skuId: null == eD ? void 0 : eD.profileEffect.skuId,
                                                                    isHovering: eA,
                                                                }),
                                                        ],
                                                    }),
                                                    (0, l.jsx)($.Z, {
                                                        user: ec,
                                                        currentUser: es,
                                                        displayProfile: eD,
                                                        guildId: ed,
                                                        channelId: eu,
                                                        items: eG,
                                                        initialSection: ex,
                                                        onClose: eg,
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(q.Z, {
                                    userId: ec.id,
                                    className: ea.editingToolbar,
                                }),
                            ],
                        }),
                    }),
                }),
            }),
        })
    );
}
