n.d(t, { A: () => ur });
var i = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(855986),
    o = n(935462),
    d = n(778712),
    u = n(866323),
    c = n(95362),
    g = n(695366),
    m = n(140735),
    f = n(707554),
    h = n(738188),
    p = n(646514),
    x = n(231723),
    A = n(241524),
    I = n(770178),
    v = n(80682),
    j = n(793574),
    y = n(688810),
    b = n(248284),
    C = n(287809),
    E = n(620632),
    S = n(73153),
    N = n(627784),
    k = n(39418),
    T = n(652215),
    P = n(938595),
    O = n(971217),
    R = n(577390),
    _ = n(287727),
    L = n(31956),
    w = n(744808),
    M = n(875741),
    D = n(915089),
    G = n(713517),
    U = n(645507),
    F = n(922590),
    B = n(821269),
    W = n(397562),
    H = n(433380),
    V = n(634110),
    z = n(71393),
    Y = n(994500),
    K = n(351906),
    q = n(562153),
    X = n(474090),
    Z = n(448645),
    $ = n(183555),
    J = n(741534),
    Q = n(851767),
    ee = n(527212),
    et = n(164636),
    en = n(370480),
    ei = n(773669),
    el = n(101928),
    er = n(837529),
    es = n(346713),
    ea = n(573648),
    eo = n(429913),
    ed = n(321078),
    eu = n(403362),
    ec = n(484509),
    eg = n(487409),
    em = n(83931),
    ef = n(991988),
    eh = n(917445),
    ep = n(919395),
    ex = n(101058),
    eA = n(696451),
    eI = n(836602),
    ev = n(996988),
    ej = n(207634);
let ey = (0, d.FT)(ej.T[ev.d.MODAL_V2].avatarSize),
    eb = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        accentColorOverride: void 0,
        profileEffectOverride: void 0,
        profileFrameOverride: void 0,
    };
var eC = n(716804),
    eE = n(679492),
    eS = n(554146),
    eN = n(43105),
    ek = n(844222),
    eT = n(381791),
    eP = n(643056),
    eO = n(139523),
    eR = n(327791),
    e_ = n(70283),
    eL = n(982240);
function ew() {
    return (0, a.bG)([C.default, eL.Ay], () => {
        let e = C.default.getCurrentUser()?.id;
        return null != e && (eL.Ay.getBadgeById(e_.$.PREMIUM_TENURE, e)?.auto_unhidden ?? !1);
    });
}
var eM = n(262),
    eD = n(263775),
    eG = n(49999),
    eU = n(792996);
function eF(e) {
    let t,
        n,
        r,
        s,
        { targetElementRef: o } = e,
        d = (0, eP.d)({ location: "BadgeCustomizationProfileCoachmark" }),
        u = (0, eR.A)(),
        c =
            ((t = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.id)),
            (n = (0, a.bG)(
                [eL.Ay],
                () => (null != t && eL.Ay.hasCatalogFor(t) ? eL.Ay.getBadges(t).some((e) => e.owned) : null),
                [t],
            )),
            (r = (0, ee.Ay)(t)),
            (s = (0, eM.A)(r)),
            n ?? s.length > 0),
        g = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.id),
        m = (0, eO.V)({ currentUserId: g, enabled: d }),
        f = ew(),
        { reducedMotion: h } = l.useContext(ek.C),
        p = (0, b.A)((e) => e.isOpen),
        x = c && d && !m.isPending && !f,
        [A, I] = (0, eD.kn)(x && !p ? [eS.M.BADGE_CUSTOMIZATION_WEB_COACHMARK] : []),
        v = A === eS.M.BADGE_CUSTOMIZATION_WEB_COACHMARK;
    return (l.useLayoutEffect(() => {
        if (v)
            return () => {
                b.A.getState().isOpen && I(eG.i.TAKE_ACTION);
            };
    }, [v, I]),
    v)
        ? (0, i.jsx)(eN.A, {
              targetElementRef: o,
              position: "right",
              gradientColor: "blue",
              graphic: { type: "rive", rive: eT.U, props: { dataBinding: { on: !0, reducedMotion: h.enabled } } },
              title: eU.intl.string(eU.t["9JoKQb"]),
              body: eU.intl.string(u ? eU.t.p82vky : eU.t.IDh31t),
              onRequestClose: () => I(eG.i.USER_DISMISS),
              actions: [
                  {
                      text: eU.intl.string(eU.t["4P5I8V"]),
                      onClick: function () {
                          b.A.setState({ isOpen: !0 });
                      },
                  },
              ],
          })
        : null;
}
var eB = n(975571);
function eW(e) {
    let { targetElementRef: t } = e,
        n = ew(),
        [l, r] = (0, eD.kn)(n ? [eS.M.NITRO_BADGE_UNHIDDEN_NOTICE] : [], { bypassAutoDismiss: !0 });
    return l !== eS.M.NITRO_BADGE_UNHIDDEN_NOTICE
        ? null
        : (0, i.jsx)(eN.A, {
              targetElementRef: t,
              position: "right",
              title: eU.intl.string(eU.t.ZRLAIy),
              body: eU.intl.string(eU.t.sEGQaJ),
              onRequestClose: () => r(eG.i.USER_DISMISS),
              actions: [
                  {
                      text: eU.intl.string(eU.t.hvVgAZ),
                      onClick: function () {
                          (r(eG.i.TAKE_ACTION),
                              window.open(
                                  eB.A.getArticleURL(T.MVz.PROFILE_BADGES_MANAGEMENT),
                                  "_blank",
                                  "noopener,noreferrer",
                              ));
                      },
                  },
              ],
          });
}
var eH = n(718019),
    eV = n(56810),
    ez = n(915614),
    eY = n(689233),
    eK = n(834730);
function eq(e) {
    let { friendsSinceDate: t } = e;
    return (0, i.jsx)(eK.E, { variant: "body-sm/normal", children: t });
}
var eX = n(361311),
    eZ = n(477534),
    e$ = n(439053),
    eJ = n(743987),
    eQ = n(312381),
    e0 = n(501193),
    e1 = n(383448),
    e6 = n(946356),
    e2 = n(804329),
    e4 = n(503026),
    e3 = n(305385),
    e8 = n(109112),
    e7 = n(939249),
    e9 = n(730134),
    e5 = n(169869),
    te = n(837057),
    tt = n(310419),
    tn = n(619019),
    ti = n(967198),
    tl = n(488995),
    tr = n(576849);
function ts(e) {
    let { applicationRoleConnection: t, locale: n, onApplicationClicked: l, selectedGuildId: r } = e,
        s = (0, e5.VW)(t, n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: tr.k_,
                children:
                    null != t.application.bot
                        ? (0, i.jsx)(e9.A, { user: new tn.A(t.application.bot), size: d._3.SIZE_16 })
                        : (0, i.jsx)(e8.UnknownGameIcon, { color: "currentColor", size: "sm" }),
            }),
            (0, i.jsxs)("div", {
                className: tr.Hd,
                children: [
                    (0, i.jsxs)(e7.D, {
                        className: tr.OB,
                        onClick: function () {
                            (l?.(),
                                (0, te.transitionToGlobalDiscovery)({
                                    tab: tl.GlobalDiscoveryTab.APPS,
                                    applicationId: t.application.id,
                                    newSessionState: {
                                        entrypoint: { name: tt.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                }));
                        },
                        children: [
                            null != t.platform_name
                                ? (0, i.jsx)(eK.E, {
                                      variant: "body-sm/normal",
                                      color: "text-default",
                                      children: t.platform_name,
                                  })
                                : null,
                            null != t.platform_username
                                ? (0, i.jsx)(eK.E, {
                                      variant: "body-sm/normal",
                                      color: "text-default",
                                      children: t.platform_username,
                                  })
                                : null,
                            (0, i.jsx)(eK.E, {
                                variant: "footnote/normal",
                                color: "text-default",
                                className: tr.nk,
                                children: eU.intl.format(eU.t.zIT9YA, { applicationHook: () => t.application.name }),
                            }),
                        ],
                    }),
                    null != s && s.length > 0 ? (0, i.jsx)("div", { className: tr.yu, children: s }) : null,
                ],
            }),
        ],
    });
}
function ta(e) {
    let { applicationRoleConnections: t, className: n, onClose: l } = e,
        { trackUserProfileAction: r } = (0, $.NJ)(),
        o = (0, a.bG)([ei.default], () => ei.default.locale),
        d = (0, a.bG)([ti.A], () => ti.A.getGuildId());
    return 0 === t.length
        ? null
        : (0, i.jsx)("ul", {
              className: s()(tr.kL, n),
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      "li",
                      {
                          className: tr.FI,
                          children: (0, i.jsx)(ts, {
                              applicationRoleConnection: e,
                              locale: o,
                              onApplicationClicked: () => {
                                  (r({ action: "PRESS_APP_CONNECTION" }), l());
                              },
                              selectedGuildId: d ?? void 0,
                          }),
                      },
                      `${t}-${e.application.id}`,
                  ),
              ),
          });
}
var to = n(224316),
    td = n(136969),
    tu = n(738676),
    tc = n(708645),
    tg = n(722868),
    tm = n(982985),
    tf = n(666297),
    th = n(34188),
    tp = n(969935),
    tx = n(993401);
function tA(e) {
    let { analyticsLocations: t, newestAnalyticsLocation: n } = (0, y.Ay)(),
        r = l.useCallback(() => {
            (0, tp.Cz)({ analyticsLocations: t, analyticsSource: n });
        }, [t, n]);
    return (0, i.jsx)(tx.q3, {
        action: "VISIT_SHOP",
        icon: th.ShopIcon,
        tooltipText: eU.intl.string(eU.t.b2d0N0),
        onClick: r,
        ...e,
    });
}
var tI = n(508882),
    tv = n(102951);
function tj(e) {
    let {
            user: t,
            currentUser: n,
            guildId: l,
            originGuildId: r,
            channelId: s,
            displayProfile: a,
            relationshipType: o,
            onClose: d,
        } = e,
        { newestAnalyticsLocation: u } = (0, y.Ay)(),
        c = (0, tg.A)({ user: t, guildId: r, channelId: s, displayProfile: a, onClose: d }),
        {
            gameFriends: g,
            hasOutgoingPendingGameFriends: m,
            hasIncomingPendingGameFriends: f,
        } = (0, tv.J)({ userId: t.id }),
        h = g.length > 0 || m || f;
    return o === T.eA$.BLOCKED
        ? null
        : t.id === n.id
          ? (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(tm.e, { userId: t.id, variant: "primary", disabled: !0 }),
                    (0, i.jsx)(tA, {}),
                    (0, i.jsx)(tf.Zt, { user: t, guildId: l, viewProfileItem: c }),
                ],
            })
          : t.bot
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(tm.e, { userId: t.id, onClose: td.A.popAll, autoFocus: !0 }),
                      (0, i.jsx)(tu.kc, { user: t, guildId: l }),
                      (0, i.jsx)(tf.Zt, { user: t, guildId: l, viewProfileItem: c }),
                  ],
              })
            : o === T.eA$.PENDING_INCOMING
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tm.e, { userId: t.id, onClose: td.A.popAll, autoFocus: !0 }),
                        (0, i.jsx)(tu.kc, { user: t, guildId: l }),
                        (0, i.jsx)(tf.Zt, { user: t, guildId: l }),
                    ],
                })
              : o === T.eA$.FRIEND || o === T.eA$.PENDING_OUTGOING
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(tm.e, { userId: t.id, onClose: td.A.popAll, autoFocus: !0 }),
                          (0, i.jsx)(tI.Ef, { user: t, relationshipType: o, analyticsLocation: u }),
                          (0, i.jsx)(tu.kc, { user: t, guildId: l }),
                          (0, i.jsx)(tf.Zt, { user: t, guildId: l, viewProfileItem: c }),
                      ],
                  })
                : o === T.eA$.NONE && h
                  ? (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tm.e, { userId: t.id, onClose: td.A.popAll, autoFocus: !0 }),
                            (0, i.jsx)(tI.ES, {
                                user: t,
                                analyticsLocation: u,
                                gameFriends: g,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: f,
                                hasOutgoingPendingGameFriends: m,
                            }),
                            (0, i.jsx)(tu.kc, { user: t, guildId: l }),
                            (0, i.jsx)(tf.Zt, { user: t, guildId: l, viewProfileItem: c }),
                        ],
                    })
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tI.cO, {
                                variant: "primary",
                                userId: t.id,
                                analyticsLocation: u,
                                autoFocus: !0,
                            }),
                            (0, i.jsx)(tm.l, { userId: t.id, onClose: td.A.popAll, variant: "secondary" }),
                            (0, i.jsx)(tu.kc, { user: t, guildId: l }),
                            (0, i.jsx)(tf.Zt, { user: t, guildId: l, viewProfileItem: c }),
                        ],
                    });
}
function ty(e) {
    return e.user.id === e.currentUser.id || e.relationshipType === T.eA$.BLOCKED
        ? (0, i.jsx)(tj, { ...e })
        : (0, i.jsx)(tc.ZQ, {
              user: e.user,
              guildId: e.guildId,
              location: "FullProfileShopThisLook",
              children: (0, i.jsx)(tu.vy, { user: e.user, guildId: e.guildId, children: (0, i.jsx)(tj, { ...e }) }),
          });
}
var tb = n(463156),
    tC = n(866665),
    tE = n(28863),
    tS = n(509434),
    tN = n(307301),
    tk = n(149468),
    tT = n(643068),
    tP = n(522978),
    tO = n(129230),
    tR = n(486020),
    t_ = n(889558),
    tL = n(783419);
let tw = "User Profile Modal V2";
function tM(e) {
    let t = ea.A.get(e);
    ((0, tP.A)({ platformType: t.type, location: tw }),
        tO.default.track(T.HAw.ACCOUNT_LINK_STEP, {
            previous_step: tw,
            current_step: "desktop oauth",
            platform_type: t.type,
        }));
}
function tD() {
    S.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: tM, stackingBehavior: "stack" });
}
function tG(e) {
    let { account: t, locale: n, userId: l } = e,
        r = t.metadata ?? {},
        s = (0, en.An)(r[tL.pK.CREATED_AT], n),
        a = ea.A.get((0, tT.ML)(t.type));
    return (0, i.jsx)(tF, {
        renderAccountName: function () {
            let e = a?.getPlatformUserUrl?.(t);
            return null == e
                ? (0, i.jsx)(tC.m, {
                      overflowOnly: !0,
                      text: t.name,
                      children: (0, i.jsx)(eK.E, { variant: "body-sm/normal", className: tr.GW, children: t.name }),
                  })
                : (0, i.jsx)(tE.Anchor, {
                      href: e,
                      className: tr.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          a?.name != null
                              ? `${a.name}, ${t.name}, ${eU.intl.string(eU.t.q5jLJB)}`
                              : `${t.name}, ${eU.intl.string(eU.t.q5jLJB)}`,
                      onClick: (n) => {
                          ((0, tk.zV)(T.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: t.type, other_user_id: l }),
                              (0, t_.h)({ href: e, trusted: a?.type !== T.fg2.DOMAIN }, n));
                      },
                      children: (0, i.jsxs)("div", {
                          className: tr.vi,
                          children: [
                              (0, i.jsx)(tC.m, {
                                  overflowOnly: !0,
                                  text: t.name,
                                  children: (0, i.jsx)(eK.E, {
                                      variant: "body-sm/normal",
                                      className: tr.GW,
                                      children: t.name,
                                  }),
                              }),
                              (0, i.jsx)(tS.LinkExternalSmallIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: tr.wP,
                              }),
                          ],
                      }),
                  });
        },
        renderMetadata: function () {
            return t.type === T.fg2.REDDIT
                ? (0, e5.xE)(r)
                : t.type === T.fg2.STEAM
                  ? (0, e5.dy)(r)
                  : t.type === T.fg2.LETTERBOXD
                    ? (0, e5.uq)(r)
                    : t.type === T.fg2.BLUESKY || t.type === T.fg2.MASTODON || t.type === T.fg2.TWITTER
                      ? (0, e5.ED)(r)
                      : t.type === T.fg2.PAYPAL
                        ? (0, e5.gZ)(r)
                        : t.type === T.fg2.EBAY
                          ? (0, e5.ub)(r)
                          : t.type === T.fg2.TIKTOK
                            ? (0, e5.HU)(r)
                            : null;
        },
        platformIcon: a?.icon.lightPNG,
        platformName: a?.name,
        createdAtDate: s,
    });
}
function tU(e) {
    let { identityWithApplication: t } = e,
        { identity: n, application: l } = t;
    if (null == n.profile || null == n.profile.username || null == l) return null;
    let r = tR.Ay.getApplicationIconURL({ id: l.id, icon: l.icon });
    return (0, i.jsx)(tF, {
        renderAccountName: function () {
            return (0, i.jsx)(tC.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, i.jsx)(eK.E, {
                    variant: "body-sm/normal",
                    className: tr.GW,
                    children: n.profile.username,
                }),
            });
        },
        renderMetadata: function () {
            return null;
        },
        platformIcon: r,
        platformName: l.name,
        createdAtDate: void 0,
        applyIconBorderRadius: !0,
    });
}
function tF(e) {
    let {
        renderAccountName: t,
        renderMetadata: n,
        platformName: l,
        platformIcon: r,
        createdAtDate: a,
        applyIconBorderRadius: o = !1,
    } = e;
    return (0, i.jsxs)("li", {
        className: tr.FI,
        children: [
            (0, i.jsx)(tC.m, {
                __unsupportedReactNodeAsText: l,
                children: (0, i.jsx)("div", {
                    className: tr.k_,
                    children: (0, i.jsx)("img", {
                        alt: eU.intl.formatToPlainString(eU.t.rtm15P, { name: l }),
                        className: s()(tr.tV, o ? tr.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, i.jsxs)("div", {
                className: tr.Hd,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            t(),
                            null != a &&
                                (0, i.jsx)(eK.E, {
                                    variant: "body-xs/normal",
                                    children: eU.intl.format(eU.t["9rfonh"], { date: a }),
                                }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: tr.yu, children: n() }),
                ],
            }),
        ],
    });
}
function tB(e) {
    let { connections: t, applicationIdentities: n, userId: l, allowEditing: r, className: o } = e,
        d = (0, a.bG)([ei.default], () => ei.default.locale);
    if (!r && 0 === t.length && 0 === n.length) return null;
    let u = t.length > 0 || n.length > 0;
    return (0, i.jsxs)("div", {
        className: s()(tr.kL, o),
        children: [
            u &&
                (0, i.jsxs)("ul", {
                    className: tr.V,
                    children: [
                        t.map((e) => (0, i.jsx)(tG, { account: e, userId: l, locale: d }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, i.jsx)(tU, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, i.jsxs)(e7.D, {
                    className: tr.qG,
                    onClick: tD,
                    children: [
                        (0, i.jsx)(tN.PlusSmallIcon, { size: "sm", color: "currentColor" }),
                        (0, i.jsx)(eK.E, {
                            variant: "body-xs/medium",
                            color: "none",
                            children: eU.intl.string(eU.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var tW = n(193885),
    tH = n(408278),
    tV = n(23722);
let tz = { id: "default" },
    tY = l.createContext(null),
    tK = l.createContext(null);
function tq(e) {
    let { children: t } = e,
        [n, r] = l.useState(tz),
        [s, o] = l.useState(null),
        d = (0, tV.A)((e) => {
            r(e);
        }),
        u = l.useCallback(() => {
            r(tz);
        }, []),
        c = (0, a.bG)([C.default], () => Z.Ay.canUsePremiumProfileCustomization(C.default.getCurrentUser())),
        g = c ? tz : n,
        m = !c && s?.id === "premiumTryItOut",
        f = l.useCallback(() => {
            o(g);
        }, [g]),
        h = l.useMemo(
            () => ({ selectedPanel: g, readyPanel: s, handlePanelTransitionComplete: f, navigate: d, goBack: u }),
            [g, s, f, d, u],
        );
    return (0, i.jsx)(tK.Provider, { value: m, children: (0, i.jsx)(tY.Provider, { value: h, children: t }) });
}
function tX() {
    let e = l.useContext(tK);
    if (null == e)
        throw Error(
            "useIsUserProfileModalV2PremiumTryItOut must be used within UserProfileModalV2EditingPanelNavigationProvider",
        );
    return e;
}
function tZ() {
    let {
        selectedPanel: e,
        readyPanel: t,
        handlePanelTransitionComplete: n,
        navigate: i,
        goBack: r,
    } = (function () {
        let e = l.useContext(tY);
        if (null == e)
            throw Error("useNavigationContext must be used within UserProfileModalV2EditingPanelNavigationProvider");
        return e;
    })();
    return {
        selectedPanel: e,
        readyPanel: t,
        initialTarget: t?.initialTarget ?? null,
        handlePanelTransitionComplete: n,
        navigate: i,
        goBack: r,
    };
}
var t$ = n(194261),
    tJ = n(789645),
    tQ = n(534514),
    t0 = n(403581),
    t1 = n(805251),
    t6 = n(821609),
    t2 = n(39623),
    t4 = n(890377),
    t3 = n(517461),
    t8 = n(609425),
    t7 = n(145359),
    t9 = n(804661),
    t5 = n(465794),
    ne = n(468450),
    nt = n(462887),
    nn = n(765178),
    ni = n(736653),
    nl = n(461797),
    nr = n(469054),
    ns = n(601298),
    na = n(207803);
function no() {
    let e = (0, ni.Ay)(),
        t = (0, nt.q)(e),
        n = l.useCallback(
            (e) => {
                let n = (0, nl.Wt)(e);
                (0, na.w5)({
                    banner: (0, ns.X)({
                        assetOrigin: nr.E.NEW_ASSET,
                        imageUri: n.getBannerSrc(!1),
                        staticImageUri: n.getBannerSrc(!0),
                        description: n.getBannerAltText(),
                        originalAsset: void 0,
                    }),
                    themeColors: t ? n.themeColors.light : n.themeColors.dark,
                    displayNameStyles: n.displayNameStyles,
                    lastPreset: e,
                });
            },
            [t],
        );
    return (
        l.useEffect(() => {
            eI.A.hasTryItOutChanges() || n((0, nl.B$)());
        }, [n]),
        l.useCallback(() => {
            let e = eI.A.getTryItOutChanges().tryItOutLastPreset,
                t = (0, nl.B$)(e),
                i = (0, nl.Wt)(t);
            (tO.default.track(T.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: t }),
                n(t),
                nn.O.announce(eU.intl.formatToPlainString(eU.t.M2Hj9s, { presetName: i.getName() })));
        }, [n])
    );
}
var nd = n(487233),
    nu = n(999618),
    nc = n(317097),
    ng = n(602853),
    nm = n(265872),
    nf = n(508274),
    nh = n(654107),
    np = n(84540),
    nx = n(930349);
function nA(e) {
    let { user: t, disabled: n = !1 } = e,
        r = l.useRef(null),
        s = (0, ng.r)(p.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, nh.rh)(t.getAvatarURL(null, 80), s, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, a.cf)([eI.A, Q.A], () => ({
            pendingAccentColor: eI.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: Q.A.getUserProfile(t.id)?.accentColor,
        })),
        c = d ?? u ?? (0, nc.LX)(o[0] ?? s),
        g = l.useCallback((e) => (0, np.p)({ accentColor: e }), []);
    return (0, i.jsx)(nm.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, i.jsx)(nf.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, i.jsx)(nx.A, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                fieldA11yLabel: eU.intl.string(eU.t["/X3fkf"]),
                editButtonA11yLabel: eU.intl.string(eU.t.kRMJ1v),
                currentValueA11yLabel: (0, nc.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, i.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, nc.Hl)(c) } }),
            }),
    });
}
var nI = n(841183),
    nv = n(450373),
    nj = n(317139);
function ny(e) {
    let { backgroundColor: t } = e;
    return (0, i.jsx)("div", { className: nj.o, style: { backgroundColor: t } });
}
function nb(e) {
    let { src: t, imageDescription: n } = e;
    return (0, i.jsx)("img", { src: t, alt: n ?? "", className: nj._ });
}
function nC(e) {
    let { displayProfile: t, bannerChange: n, shouldAnimate: l, imageDescription: r } = e,
        s = (0, ng.r)(p.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = t?.primaryColor ?? (0, nc.LX)(s),
        { hex: o } = (0, nv.A)(a),
        d = t?.getPreviewBanner(n, l, 296) ?? void 0;
    return null != d ? (0, i.jsx)(nb, { src: d, imageDescription: r }) : (0, i.jsx)(ny, { backgroundColor: o });
}
function nE(e) {
    let {
        displayProfile: t,
        bannerChange: n,
        fieldA11yLabel: l = eU.intl.string(eU.t.yiRnNO),
        imageDescription: r,
        ...s
    } = e;
    return (0, i.jsx)(nx.A, {
        ...s,
        fieldA11yLabel: l,
        editButtonA11yLabel: eU.intl.string(eU.t["W86r+Q"]),
        showOverlayOnHover: !0,
        renderPreview: (e) =>
            (0, i.jsx)(nC, { displayProfile: t, bannerChange: n, shouldAnimate: e, imageDescription: r }),
    });
}
var nS = n(569059);
function nN(e) {
    let { userId: t, guildId: n, disabled: r, errorMessageId: s } = e,
        a = l.useRef(null),
        {
            displayProfile: o,
            pendingBanner: d,
            bannerChange: u,
            currentValueA11yLabel: c,
            currentProfileBanner: g,
            hasMainProfileFallback: m,
        } = (function (e, t) {
            let n = (0, ee.Ay)(e, t),
                {
                    pendingBanner: i,
                    mainProfileBanner: l,
                    currentProfileBanner: r,
                } = (0, et.cf)(
                    [eI.A, C.default, Q.A],
                    () => ({
                        pendingBanner: eI.A.getPendingChanges(t ?? void 0).pendingBanner,
                        mainProfileBanner: C.default.getCurrentUser()?.banner,
                        currentProfileBanner:
                            null != t ? Q.A.getGuildMemberProfile(e, t)?.banner : Q.A.getUserProfile(e)?.banner,
                    }),
                    [t, e],
                ),
                s = null != t,
                a = s && (n?.isUsingGuildMemberBanner() ?? !1),
                o = null === i;
            return {
                displayProfile: n,
                pendingBanner: i,
                bannerChange: o && s && !a ? void 0 : i,
                currentValueA11yLabel: (0, nI.ID)(i, r),
                currentProfileBanner: r,
                hasMainProfileFallback: s && null != l,
            };
        })(t, n),
        f = (0, ep.Ac)(d, g)
            ? {
                  onClick: () => (0, ne.rM)(null, g, (e) => (0, np.p)({ guildId: n ?? void 0, banner: e })),
                  type: m ? "reset" : "remove",
                  accessibleLabel: eU.intl.string(m ? eU.t.jHlJNS : eU.t.tT9n7D),
              }
            : void 0,
        h = (0, nS.P)({ guildId: n, returnRef: a });
    return (0, i.jsx)(nE, {
        buttonRef: a,
        displayProfile: o,
        bannerChange: u,
        currentValueA11yLabel: c,
        variant: "square",
        affordance: f,
        onClick: h,
        "aria-haspopup": "dialog",
        disabled: r,
        errorMessageId: s,
    });
}
var nk = n(259065),
    nT = n(922301),
    nP = n(16371),
    nO = n(523312);
let nR = "heading-xl/semibold";
function n_(e) {
    let { displayName: t, displayNameStyles: n, shouldAnimate: l = !1 } = e;
    return (0, i.jsx)("div", {
        "aria-hidden": !0,
        className: s()(nO.MC, { [nO.Xn]: null != n }),
        children:
            null != n
                ? (0, i.jsx)(eK.E, {
                      variant: nR,
                      children: (0, i.jsx)(nP.A, {
                          userName: t,
                          displayNameStyles: n,
                          effectDisplayType: l ? nT.G.ANIMATED : nT.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, i.jsx)(eK.E, { variant: nR, className: nO.kr, children: t }),
    });
}
function nL(e) {
    let {
        displayName: t,
        displayNameStyles: n,
        fieldA11yLabel: l = eU.intl.string(eU.t.vKBV4A),
        shouldAlwaysAnimate: r = !1,
        ...s
    } = e;
    return (0, i.jsx)(nx.A, {
        ...s,
        fieldA11yLabel: l,
        editButtonA11yLabel: eU.intl.string(eU.t.lsjENp),
        renderPreview: (e) => (0, i.jsx)(n_, { displayNameStyles: n, displayName: t, shouldAnimate: r || e }),
    });
}
function nw(e) {
    let { user: t, guildId: n, disabled: r, errorMessageId: s, onOpen: o } = e,
        { analyticsLocations: d } = (0, y.Ay)(),
        u = null != n,
        c = (0, a.bG)([eA.Ay], () => (null != n ? (eA.Ay.getMember(n, t.id)?.nick ?? null) : null)),
        g = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.globalName ?? null),
        m = (0, a.bG)([eI.A], () => eI.A.getPendingChanges(null).pendingGlobalName),
        f = (0, a.bG)([eI.A], () => eI.A.getPendingChanges(n ?? null).pendingNickname),
        {
            userDisplayNameStyles: h,
            guildDisplayNameStyles: p,
            pendingDisplayNameStyles: x,
        } = (0, ep.B0)(t, n ?? void 0),
        A = u ? p : h,
        I = void 0 !== x,
        v = null === x,
        j = u && null != h,
        b = (0, ep.lw)({ pendingValue: x, userValue: h, guildValue: p, guildId: n ?? void 0 }),
        E = (0, ep.lw)({ pendingValue: u ? f : m, guildValue: c, userValue: g, guildId: n ?? void 0 }) ?? t.username,
        S = I ? null != x : null != A,
        N =
            null != b && S
                ? {
                      onClick: () => (0, np.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: j ? "reset" : "remove",
                      accessibleLabel: eU.intl.string(j ? eU.t.en3ogK : eU.t["Wqmi/h"]),
                  }
                : void 0,
        k = l.useCallback(() => {
            (o?.(), (0, nk.L)({ analyticsLocations: d, guildId: n ?? void 0, stackingBehavior: "stack" }));
        }, [d, n, o]);
    return (0, i.jsx)(nL, {
        affordance: (!v && (I || null != A)) || j ? N : "add",
        variant: "bar",
        onClick: k,
        currentValueA11yLabel: (0, nI.I9)(b),
        "aria-haspopup": "dialog",
        errorMessageId: s,
        displayName: E,
        displayNameStyles: b,
        disabled: r,
    });
}
var nM = n(450232),
    nD = n(89851);
function nG(e) {
    let { heading: t, description: n, children: l, disabled: r = !1, showNitroIcon: a = !1, badge: o } = e;
    return (0, i.jsxs)("div", {
        className: nD.Os,
        children: [
            (0, i.jsxs)("div", {
                className: s()(nD.Pf, { [nD.r9]: r }),
                children: [
                    (0, i.jsx)(tQ.D, {
                        className: nD.DV,
                        variant: "body-sm/medium",
                        color: "currentColor",
                        children: t,
                    }),
                    a && (0, i.jsx)(nM.A, { className: nD.IX, size: "xs", color: "inherit", disabled: r }),
                    null != o && (0, i.jsx)("span", { className: nD.ot, children: o }),
                    null != n && (0, i.jsx)(eK.E, { variant: "body-xs/normal", color: "text-subtle", children: n }),
                ],
            }),
            l,
        ],
    });
}
function nU(e) {
    let { id: t, message: n } = e;
    return null == n
        ? null
        : (0, i.jsxs)("div", {
              className: nD.gJ,
              role: "alert",
              children: [
                  (0, i.jsx)(g.CircleErrorIcon, { size: "xs", color: p.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, i.jsx)(eK.E, { variant: "body-xs/normal", color: "text-feedback-critical", id: t, children: n }),
              ],
          });
}
var nF = n(897661),
    nB = n(332560),
    nW = n(659373),
    nH = n(192308),
    nV = n(506988),
    nz = n(211824);
function nY(e) {
    let { user: t, disabled: r, onOpen: s } = e;
    (0, nB.UF)(nV.uF.DISPLAY_NAME_STYLES_SETTINGS, nB.rl.NON_NITRO_CARD, !0);
    let a = (0, nF.b)(t),
        { isApplied: o, removeCampaignDisplayNameStyle: d } = (0, nW.K)(t),
        u = o ? nz.AA : null,
        c = l.useCallback(() => {
            (s?.(),
                (0, nH.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e(249169),
                            n.e(317446),
                            n.e(71866),
                            n.e(587882),
                            n.e(891473),
                            n.e(411938),
                            n.e(198496),
                            n.e(77413),
                            n.e(474750),
                            n.e(267526),
                            n.e(669174),
                            n.e(967062),
                            n.e(408734),
                            n.e(306968),
                            n.e(635014),
                            n.e(653383),
                            n.e(658961),
                            n.e(9796),
                            n.e(952068),
                            n.e(768289),
                            n.e(772565),
                            n.e(169191),
                            n.e(79492),
                            n.e(533781),
                            n.e(328276),
                            n.e(592e3),
                            n.e(524434),
                            n.e(653294),
                            n.e(672402),
                            n.e(226229),
                            n.e(118994),
                            n.e(516497),
                            n.e(24774),
                            n.e(326794),
                            n.e(670870),
                            n.e(684231),
                            n.e(570690),
                            n.e(886631),
                            n.e(435860),
                            n.e(426782),
                            n.e(406322),
                            n.e(942571),
                            n.e(464759),
                            n.e(763343),
                            n.e(775417),
                            n.e(194704),
                            n.e(3942),
                            n.e(274461),
                            n.e(270520),
                            n.e(384054),
                            n.e(731841),
                            n.e(544242),
                            n.e(616090),
                            n.e(796662),
                            n.e(801781),
                            n.e(816348),
                            n.e(109383),
                            n.e(818291),
                            n.e(243794),
                            n.e(301815),
                            n.e(713398),
                            n.e(10985),
                            n.e(171206),
                            n.e(828178),
                            n.e(45036),
                            n.e(974119),
                            n.e(206988),
                            n.e(434683),
                            n.e(920955),
                            n.e(505928),
                            n.e(752657),
                            n.e(747973),
                            n.e(314001),
                            n.e(885251),
                            n.e(857871),
                            n.e(529366),
                            n.e(390430),
                            n.e(990185),
                            n.e(752924),
                            n.e(849162),
                            n.e(660201),
                            n.e(770925),
                            n.e(179301),
                            n.e(918347),
                            n.e(102247),
                            n.e(689521),
                            n.e(237403),
                            n.e(10886),
                            n.e(84993),
                            n.e(592268),
                            n.e(374962),
                            n.e(553627),
                            n.e(887141),
                            n.e(736919),
                            n.e(631323),
                            n.e(464452),
                            n.e(243852),
                            n.e(714144),
                            n.e(458855),
                            n.e(305161),
                            n.e(141648),
                            n.e(17256),
                            n.e(377016),
                            n.e(60268),
                            n.e(598761),
                            n.e(60955),
                            n.e(887093),
                            n.e(393336),
                            n.e(126437),
                            n.e(481647),
                            n.e(749248),
                            n.e(704434),
                            n.e(900361),
                            n.e(21921),
                            n.e(811310),
                            n.e(676418),
                            n.e(166495),
                            n.e(362274),
                            n.e(49782),
                            n.e(570849),
                            n.e(45072),
                            n.e(942724),
                            n.e(139970),
                            n.e(173764),
                            n.e(940258),
                            n.e(161275),
                            n.e(830221),
                            n.e(761253),
                            n.e(357688),
                            n.e(308555),
                            n.e(857467),
                            n.e(508371),
                            n.e(858164),
                            n.e(885434),
                            n.e(586127),
                            n.e(977547),
                            n.e(41250),
                            n.e(179049),
                            n.e(132737),
                            n.e(344502),
                            n.e(146070),
                            n.e(836863),
                            n.e(854622),
                            n.e(834968),
                            n.e(590365),
                            n.e(989088),
                            n.e(37977),
                            n.e(136149),
                            n.e(470068),
                            n.e(817989),
                            n.e(147626),
                            n.e(647177),
                            n.e(613867),
                            n.e(689393),
                            n.e(727779),
                            n.e(412743),
                            n.e(717602),
                            n.e(585503),
                            n.e(891585),
                            n.e(203589),
                            n.e(382465),
                            n.e(294857),
                            n.e(15481),
                            n.e(668802),
                            n.e(631358),
                            n.e(459414),
                            n.e(335395),
                            n.e(882777),
                            n.e(945413),
                            n.e(402026),
                            n.e(163235),
                            n.e(632756),
                            n.e(564850),
                            n.e(941040),
                            n.e(124791),
                            n.e(35771),
                            n.e(648344),
                            n.e(170104),
                            n.e(491793),
                            n.e(102698),
                            n.e(902564),
                            n.e(731751),
                            n.e(423775),
                            n.e(704727),
                            n.e(374916),
                            n.e(214285),
                            n.e(248330),
                            n.e(373004),
                            n.e(803332),
                            n.e(938149),
                            n.e(408362),
                            n.e(741678),
                            n.e(852617),
                            n.e(177102),
                            n.e(256769),
                            n.e(125964),
                            n.e(415266),
                            n.e(737021),
                            n.e(775951),
                            n.e(254506),
                            n.e(874342),
                            n.e(911667),
                            n.e(533015),
                            n.e(976516),
                            n.e(400501),
                            n.e(985794),
                            n.e(695358),
                            n.e(767837),
                            n.e(473384),
                            n.e(432209),
                            n.e(229657),
                            n.e(996868),
                            n.e(368062),
                            n.e(859991),
                            n.e(667092),
                            n.e(709371),
                            n.e(330724),
                            n.e(599719),
                            n.e(987478),
                            n.e(858337),
                            n.e(97210),
                            n.e(260218),
                            n.e(649520),
                            n.e(493014),
                            n.e(935948),
                            n.e(562168),
                            n.e(215920),
                            n.e(24922),
                            n.e(401518),
                            n.e(698547),
                            n.e(355949),
                            n.e(24889),
                            n.e(522261),
                            n.e(213924),
                            n.e(932606),
                            n.e(593020),
                            n.e(338601),
                            n.e(334119),
                            n.e(702813),
                            n.e(39038),
                            n.e(678050),
                            n.e(901922),
                            n.e(557940),
                            n.e(9205),
                            n.e(720590),
                            n.e(68532),
                            n.e(428367),
                            n.e(144989),
                            n.e(179745),
                            n.e(529570),
                            n.e(93286),
                            n.e(763096),
                            n.e(431714),
                            n.e(36947),
                            n.e(225612),
                            n.e(108634),
                            n.e(836150),
                            n.e(365074),
                            n.e(472789),
                            n.e(137937),
                            n.e(100126),
                            n.e(497746),
                            n.e(803191),
                            n.e(111346),
                            n.e(940248),
                            n.e(271217),
                            n.e(396325),
                            n.e(141049),
                            n.e(288688),
                            n.e(238742),
                            n.e(864137),
                            n.e(512162),
                            n.e(866008),
                            n.e(743487),
                            n.e(531158),
                            n.e(482511),
                            n.e(504199),
                            n.e(150200),
                            n.e(285350),
                            n.e(829961),
                            n.e(769369),
                            n.e(311471),
                            n.e(122266),
                            n.e(70008),
                            n.e(655602),
                            n.e(486155),
                            n.e(244645),
                            n.e(561622),
                            n.e(44761),
                            n.e(398254),
                            n.e(207846),
                            n.e(143302),
                            n.e(561454),
                            n.e(886492),
                            n.e(172158),
                            n.e(574252),
                            n.e(298748),
                            n.e(893513),
                        ]).then(n.bind(n, 596016));
                        return (t) => (0, i.jsx)(e, { ...t });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [s]);
    return (0, i.jsx)(nL, {
        affordance: o ? { onClick: d, type: "remove", accessibleLabel: eU.intl.string(eU.t["Wqmi/h"]) } : void 0,
        variant: "bar",
        onClick: c,
        currentValueA11yLabel: (0, nI.I9)(u),
        "aria-haspopup": "dialog",
        displayName: a,
        displayNameStyles: u,
        disabled: r,
    });
}
var nK = n(887988),
    nq = n(366010),
    nX = n(674658),
    nZ = n(617061),
    n$ = n(203632),
    nJ = n(536572);
let nQ = new Set(),
    n0 = 0;
var n1 = n(993408),
    n6 = n(841702),
    n2 = n(515718),
    n4 = n(94039);
function n3(e) {
    "" !== e.thumbnailPreviewSrc && (0, n2.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var n8 = n(599752),
    n7 = n(249360);
let n9 =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    n5 =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function ie(e) {
    let { effect: t, shouldAnimate: n, isEmpty: r, hasMainProfileFallback: a, disabled: o } = e,
        d = (0, ni.Ay)(),
        u = (0, nq.M)(d) ? n9 : n5,
        c = (function (e) {
            let { enabled: t, isInteracting: n } = e,
                { categories: i, purchases: r } = (0, n6.Ay)({ stalePurchasesOK: !0, skipFetch: !t }),
                s = l.useMemo(() => (0, n1.wo)(r, i), [r, i]),
                a = (0, n4.A)({ enabled: t, isInteracting: n, items: s, preload: n3 });
            return null != a ? { skuId: a.skuId } : null;
        })({ enabled: r && !a && !o, isInteracting: n }),
        g = null != c,
        m = g ? c : t;
    return (
        l.useEffect(() => {
            n && ((n0 += 1), nQ.forEach((e) => e()));
        }, [n]),
        (0, i.jsxs)("div", {
            className: n8.ti,
            children: [
                (0, i.jsx)("img", { src: u, alt: "", className: n8.QQ }),
                m?.skuId != null &&
                    (0, i.jsx)("div", {
                        className: s()(n8.yY, { [n7.O]: g }),
                        "aria-hidden": g,
                        children: (0, i.jsx)(O.A, {
                            skuId: m.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: n$.HL.FromStart,
                            isHovering: n,
                            useOpacityOnHover: !1,
                            useThumbnail: !0,
                            delayIntro: !g,
                        }),
                    }),
            ],
        })
    );
}
function it(e) {
    let { user: t, guildId: n, disabled: r, variant: s = "full-height-bar" } = e,
        o = l.useRef(null),
        { analyticsLocations: d } = (0, y.Ay)(),
        u = null != n,
        c = (0, a.bG)([z.A], () => (null != n ? z.A.getGuild(n) : null)),
        g = (0, ep.N2)({ user: t }),
        m = (0, ep.N2)({ user: t, guildId: n ?? void 0 }),
        { pendingProfileEffect: f } = (0, ep.nZ)(n ?? void 0),
        h = void 0 !== f,
        p = null === f || (!h && null == m),
        x = u && null != g,
        A = (0, ep.lw)({ pendingValue: f, userValue: g, guildValue: m, guildId: n ?? void 0 }),
        { product: I } = (0, nX.q)(A?.skuId),
        v = h ? null != f : null != m,
        j =
            null != A && v
                ? {
                      onClick: () => (0, np.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eU.intl.string(x ? eU.t["SQy/Po"] : eU.t.uMuafO),
                  }
                : void 0,
        b = l.useCallback(() => {
            (0, nZ.W)({ analyticsLocations: d, guild: c ?? void 0, stackingBehavior: "stack", returnRef: o });
        }, [d, c]);
    return (0, i.jsx)(nx.A, {
        buttonRef: o,
        affordance: p && !x ? "add" : j,
        variant: s,
        onClick: b,
        fieldA11yLabel: eU.intl.string(eU.t.wR5wOo),
        editButtonA11yLabel: eU.intl.string(eU.t["/6nv6N"]),
        currentValueA11yLabel: (function (e) {
            let { profileEffectPreview: t, productName: n, hasPendingSelection: i } = e;
            return null == t
                ? eU.intl.string(eU.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eU.intl.string(i ? eU.t["1M4m8w"] : eU.t["+Du7ua"]);
        })({ profileEffectPreview: A, productName: (0, nJ.VG)(I), hasPendingSelection: null != f }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, i.jsx)(ie, { effect: A, shouldAnimate: e, isEmpty: p, hasMainProfileFallback: x, disabled: r }),
    });
}
var ii = n(163697),
    il = n(515727),
    ir = n(746002);
function is(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((t) => {
            let n = (0, ir.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: ir.CollectiblesItemAssetFormat.STATIC,
                assetId: t.id,
            });
            null != n && (0, n2.NN)(n).catch(() => {});
        });
}
var ia = n(715196);
function io(e) {
    let { responsive: t } = e;
    return !0 !== t;
}
function id(e) {
    let { profileFramePreview: t, isEmpty: n, hasMainProfileFallback: r, isInteracting: a, disabled: o } = e,
        d = (0, ni.Ay)(),
        u = (0, nq.M)(d) ? n9 : n5,
        c = (0, _.A)(t?.skuId),
        g = (function (e) {
            let { enabled: t, isInteracting: n } = e,
                { categories: i, purchases: r } = (0, n6.Ay)({ stalePurchasesOK: !0, skipFetch: !t }),
                s = l.useMemo(() => (0, n1.MG)(r, i), [r, i]);
            return (0, n4.A)({ enabled: t, isInteracting: n, items: s, preload: is });
        })({ enabled: n && !r && !o, isInteracting: a }),
        m = null != g,
        f = m ? g : c,
        { profileFrameStyle: h, profileFrameClassName: p } =
            null != f ? (0, ii.i)(f) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != f &&
                (0, i.jsx)("div", {
                    className: s()(ia.hm, p, { [n7.O]: m }),
                    style: h,
                    "aria-hidden": m,
                    children: (0, i.jsx)(w.A, { frame: f, filterLayer: io, isPreview: !0 }),
                }),
            (0, i.jsx)("div", {
                className: s()(ia.ti, { [ia.yT]: null == f }),
                children: (0, i.jsx)("img", { src: u, alt: "", className: ia.QQ, draggable: !1 }),
            }),
        ],
    });
}
function iu(e) {
    let { user: t, guildId: n, disabled: r } = e,
        s = l.useRef(null),
        { analyticsLocations: o } = (0, y.Ay)(),
        d = null != n,
        u = (0, a.bG)([z.A], () => (null != n ? z.A.getGuild(n) : null)),
        c = (0, ep.Xf)({ user: t }),
        g = (0, ep.Xf)({ user: t, guildId: n ?? void 0 }),
        { pendingProfileFrame: m } = (0, ep.Tu)(n ?? void 0),
        f = void 0 !== m,
        h = null === m || (!f && null == g),
        p = d && null != c,
        x = (0, ep.lw)({ pendingValue: m, userValue: c, guildValue: g, guildId: n ?? void 0 }),
        { product: A } = (0, nX.q)(x?.skuId),
        I = f ? null != m : null != g,
        v =
            null != x && I
                ? {
                      onClick: () => (0, np.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: p ? "reset" : "remove",
                      accessibleLabel: eU.intl.string(p ? eU.t.j6hZyM : eU.t.nQBruk),
                  }
                : void 0,
        j = l.useCallback(() => {
            (0, il.w)({ analyticsLocations: o, guild: u ?? void 0, stackingBehavior: "stack", returnRef: s });
        }, [o, u]);
    return (0, i.jsx)(nx.A, {
        buttonRef: s,
        affordance: h && !p ? "add" : v,
        variant: "square",
        onClick: j,
        fieldA11yLabel: eU.intl.string(eU.t.GWrZOd),
        editButtonA11yLabel: eU.intl.string(eU.t["oTSa/q"]),
        currentValueA11yLabel: (function (e) {
            let { profileFramePreview: t, productName: n, hasPendingSelection: i } = e;
            return null == t
                ? eU.intl.string(eU.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eU.intl.string(i ? eU.t.yFeGB5 : eU.t["2kAxKM"]);
        })({ profileFramePreview: x, productName: (0, nJ.VG)(A), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, i.jsx)(id, {
                profileFramePreview: x,
                isEmpty: h,
                hasMainProfileFallback: p,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var ic = n(684732),
    ig = n(498596),
    im = n(871524);
function ih(e) {
    let { primaryColor: t, secondaryColor: n, children: l } = e,
        r = `linear-gradient(to bottom, ${(0, nc.Hl)(t)}, ${(0, nc.Hl)(n)})`;
    return (0, i.jsx)("div", { className: im.D7, style: { background: r }, children: l });
}
function ip(e) {
    let { color: t } = e,
        n = (0, nc.Hl)(t),
        l = (0, nc.bJ)(t, 0xffffff) < ig.Tr.NonText;
    return (0, i.jsx)("div", {
        className: im.OS,
        children: (0, i.jsx)("div", { className: s()(im.Hy, { [im.rY]: l }), style: { backgroundColor: n } }),
    });
}
function ix(e) {
    let { color: t, disabled: n, onClick: r, buttonRef: s, ...a } = e,
        o = l.useRef(null);
    return (0, i.jsx)(e7.D, {
        ...a,
        innerRef: s ?? o,
        className: im.Dh,
        onClick: n ? void 0 : r,
        "aria-disabled": n,
        tabIndex: n ? -1 : 0,
        children: (0, i.jsx)(ip, { color: t }),
    });
}
function iA(e) {
    let {
        color: t,
        ariaLabel: n,
        ariaDescribedBy: l,
        suggestedColors: r,
        disabled: s,
        isOpen: a,
        onRequestOpen: o,
        onRequestClose: d,
        onSelect: u,
        buttonRef: c,
    } = e;
    return (0, i.jsx)(nm.Y, {
        targetElementRef: c,
        shouldShow: a,
        onRequestOpen: o,
        onRequestClose: d,
        renderPopout: (e) => (0, i.jsx)(nf.VN, { ...e, value: t, onChange: u, suggestedColors: r, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: r, ...a } = e;
            return (0, i.jsx)(ix, {
                color: t,
                onClick: r,
                disabled: s,
                buttonRef: c,
                "aria-label": n,
                "aria-describedby": l,
                ...a,
            });
        },
    });
}
function iI(e) {
    let {
            fieldA11yLabel: t,
            primaryColor: n,
            secondaryColor: r,
            onSelectPrimaryColor: s,
            onSelectSecondaryColor: a,
            suggestedColors: o,
            disabled: d = !1,
            deleteButton: u,
            variant: c = "square",
            initialOpenPopout: g,
        } = e,
        [f, h] = l.useState(null),
        p = l.useRef(null),
        x = l.useRef(null),
        A = (0, nc.Hl)(n),
        I = (0, nc.Hl)(r),
        v = l.useId(),
        j = l.useId();
    l.useEffect(() => {
        if (null == g) return;
        let e = requestAnimationFrame(() => {
            let e = "theme-primary" === g ? p : x;
            (e.current?.focus(), h(g));
        });
        return () => cancelAnimationFrame(e);
    }, [g]);
    let y =
        null != u
            ? {
                  ...u,
                  onClick: () => {
                      (u.onClick(), p.current?.focus());
                  },
              }
            : void 0;
    return (0, i.jsxs)(nx.Y, {
        fieldA11yLabel: t,
        variant: c,
        disabled: d,
        deleteButton: y,
        children: [
            (0, i.jsx)(m.A, { id: v, children: eU.intl.formatToPlainString(eU.t.v4X2kc, { colorHex: A }) }),
            (0, i.jsx)(m.A, { id: j, children: eU.intl.formatToPlainString(eU.t.I0tmru, { colorHex: I }) }),
            (0, i.jsxs)(ih, {
                primaryColor: n,
                secondaryColor: r,
                children: [
                    (0, i.jsx)(iA, {
                        color: n,
                        ariaLabel: eU.intl.string(eU.t["1PvTpO"]),
                        ariaDescribedBy: v,
                        suggestedColors: o,
                        onSelect: s,
                        disabled: d,
                        isOpen: "theme-primary" === f,
                        onRequestOpen: () => h("theme-primary"),
                        onRequestClose: () => h(null),
                        buttonRef: p,
                    }),
                    (0, i.jsx)(iA, {
                        color: r,
                        ariaLabel: eU.intl.string(eU.t.stG76C),
                        ariaDescribedBy: j,
                        suggestedColors: o,
                        onSelect: a,
                        disabled: d,
                        isOpen: "theme-secondary" === f,
                        onRequestOpen: () => h("theme-secondary"),
                        onRequestClose: () => h(null),
                        buttonRef: x,
                    }),
                ],
            }),
        ],
    });
}
function iv(e) {
    let { user: t, guildId: n, disabled: r = !1 } = e,
        s = (0, ee.Ay)(t.id, n),
        {
            currentProfileThemeColors: o,
            pendingThemeColors: d,
            pendingAvatar: u,
        } = (0, a.cf)([eI.A, Q.A], () => {
            let e = eI.A.getPendingChanges(n ?? void 0),
                i = Q.A.getUserProfile(t.id)?.themeColors ?? null;
            return {
                currentProfileThemeColors: null != n ? (Q.A.getGuildMemberProfile(t.id, n)?.themeColors ?? null) : i,
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
            };
        }),
        c = void 0 !== d ? d : o,
        g = (0, ex.V7)({ userId: t.id, image: u }),
        { primaryColor: m, secondaryColor: f } = (0, el.A)({
            user: t,
            displayProfile: s,
            pendingThemeColors: d,
            pendingAvatarSrc: g ?? void 0,
            isPreview: !0,
        }),
        h = (0, ng.r)(p.A.unsafe_rawColors.PRIMARY_530).hex(),
        x = null != g ? g : t.getAvatarURL(n ?? void 0, 80),
        A = (0, nh.rh)(x, h, !1),
        I = l.useCallback(
            (e) => {
                (0, np.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        v =
            null != n && (0, ic.l)(d, o)
                ? {
                      onClick: () => (0, np.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eU.intl.string(eU.t["L+GmoR"]),
                  }
                : void 0;
    return null == m || null == f
        ? null
        : (0, i.jsx)(iI, {
              fieldA11yLabel: eU.intl.string(eU.t.DMeO2X),
              primaryColor: m,
              secondaryColor: f,
              onSelectPrimaryColor: (e) => {
                  (c?.[0] == null || e !== c[0]) && I([e, f]);
              },
              onSelectSecondaryColor: (e) => {
                  (c?.[1] == null || e !== c[1]) && I([m, e]);
              },
              suggestedColors: A,
              disabled: r,
              deleteButton: v,
          });
}
var ij = n(629985);
function iy(e) {
    let { children: t, hasGradientBackground: n = !1 } = e;
    return (0, i.jsx)(f.F, { children: (0, i.jsx)("div", { className: s()(ij.k, { [ij.V]: n }), children: t }) });
}
var ib = n(516521),
    iC = n(424290);
function iE(e) {
    let { children: t } = e;
    return (0, i.jsx)(ib.zC, { className: iC.X, children: (0, i.jsx)("div", { className: iC.Q, children: t }) });
}
var iS = n(77528),
    iN = n(811611),
    ik = n(976860),
    iT = n(38145);
function iP() {
    return l.useCallback(() => {
        ((0, ik.pX)(T.BVt.NITRO_HOME), (0, iT.M)());
    }, []);
}
var iO = n(423814),
    iR = n(511484),
    i_ = n(682901);
function iL(e) {
    let t = (0, a.bG)([C.default], () => Z.Ay.isPremium(C.default.getCurrentUser())),
        n = (0, iO.O)();
    return t
        ? eU.intl.string(eU.t.AfRWI8)
        : (0, iR.U9)(n, i_.pe.TIER_2) && n?.discount.amount != null
          ? eU.intl.formatToPlainString(eU.t.bkQ4bH, { percent: n?.discount.amount })
          : e;
}
var iw = n(155053);
function iM() {
    let e = (0, iS.V)();
    return e?.subscriptionTrial?.skuId === i_.pe.TIER_2 ? e : null;
}
function iD() {
    let e = iL(eU.intl.string(eU.t.pj0XBN));
    return (0, i.jsx)(t5.A, { subscriptionTier: i_.pe.TIER_2, buttonTextOverride: e, size: "sm", fullWidth: !0 });
}
function iG(e) {
    let { trialOffer: t, onSubscribeClick: n, onSubscribeSuccess: l, onSubscribeClose: r } = e,
        s = iP(),
        a = (0, Z.FY)({
            intervalType: t.subscriptionTrial?.interval,
            intervalCount: t.subscriptionTrial?.intervalCount,
        }),
        o = (0, iN.ux)(t.expiresAt?.toISOString());
    return (0, i.jsxs)("div", {
        className: iw.nH,
        children: [
            (0, i.jsxs)("div", {
                className: iw.qf,
                children: [
                    (0, i.jsx)(m.A, { children: (0, i.jsx)(f.H, { children: eU.intl.string(eU.t.IBYG5U) }) }),
                    (0, i.jsx)("div", {
                        "aria-hidden": "true",
                        children: (0, i.jsx)(t1.E, { type: "free_trial", variant: "expressive" }),
                    }),
                ],
            }),
            (0, i.jsx)(eK.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: eU.intl.format(eU.t["fF+cgd"], { onClick: s }),
            }),
            (0, i.jsx)(t5.A, {
                subscriptionTier: i_.pe.TIER_2,
                buttonTextOverride: a,
                onClick: n,
                onSubscribeModalClose: (e) => {
                    (e && l?.(), r?.());
                },
                size: "sm",
                fullWidth: !0,
            }),
            null != o &&
                (0, i.jsx)(eK.E, { variant: "body-xs/normal", color: "text-muted", className: iw.u8, children: o }),
        ],
    });
}
function iU() {
    let e = iM();
    return null == e ? (0, i.jsx)(iD, {}) : (0, i.jsx)(iG, { trialOffer: e });
}
var iF = n(55619),
    iB = n(848717);
function iW() {
    return (0, i.jsxs)("div", {
        className: iB.k,
        children: [
            (0, i.jsx)(eK.E, {
                variant: "body-sm/medium",
                color: "text-strong",
                children: eU.intl.string(eU.t.JFY17v),
            }),
            (0, i.jsx)(t6.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eU.intl.string(eU.t.R9GHya),
                onClick: function () {
                    return iF.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var iH = n(342866),
    iV = n(968475);
function iz(e) {
    let { user: t, ...n } = e,
        { pendingAvatar: l, tryItOutAvatar: r } = (0, a.cf)([eI.A], () => ({
            pendingAvatar: eI.A.getPendingChanges().pendingAvatar,
            tryItOutAvatar: eI.A.getTryItOutChanges().tryItOutAvatar,
        })),
        s = void 0 !== r ? r : l;
    return (0, i.jsx)(iH.A, {
        ...n,
        fieldA11yLabel: eU.intl.string(eU.t["nP3V/U"]),
        variant: "full-height-bar",
        userId: t.id,
        avatarChange: s,
        currentValueA11yLabel: (0, nI.Fk)(s, t.avatar),
        imageInteractingClassName: null == r ? iV.$T : void 0,
    });
}
function iY(e) {
    let { userId: t, ...n } = e,
        l = (0, ee.Ay)(t),
        {
            pendingBanner: r,
            tryItOutBanner: s,
            currentProfileBanner: o,
        } = (0, a.cf)(
            [eI.A, Q.A],
            () => ({
                pendingBanner: eI.A.getPendingChanges().pendingBanner,
                tryItOutBanner: eI.A.getTryItOutChanges().tryItOutBanner,
                currentProfileBanner: Q.A.getUserProfile(t)?.banner,
            }),
            [t],
        ),
        d = void 0 !== s ? s : r,
        u = null != d ? d.description : void 0,
        c =
            null != u
                ? (function (e) {
                      if (e.length <= 25) return e;
                      let t = e.lastIndexOf(" ", 25),
                          n = t > 0 ? e.slice(0, t) : e.slice(0, 25);
                      return eU.intl.formatToPlainString(eU.t.OIhEjF, { truncatedText: n });
                  })(u)
                : (0, nI.ID)(d, o);
    return (0, i.jsx)(nE, {
        ...n,
        fieldA11yLabel: eU.intl.string(eU.t["1SrATP"]),
        currentValueA11yLabel: c,
        imageDescription: u,
        variant: "full-height-bar",
        displayProfile: l,
        bannerChange: d,
    });
}
function iK(e) {
    let { user: t, ...n } = e,
        {
            pendingDisplayNameStyles: l,
            tryItOutDisplayNameStyles: r,
            pendingGlobalName: s,
        } = (0, a.cf)([eI.A], () => ({
            pendingDisplayNameStyles: eI.A.getPendingChanges().pendingDisplayNameStyles,
            tryItOutDisplayNameStyles: eI.A.getTryItOutChanges().tryItOutDisplayNameStyles,
            pendingGlobalName: eI.A.getPendingChanges(null).pendingGlobalName,
        })),
        o = (0, a.cf)([C.default], () => ({ globalName: C.default.getCurrentUser()?.globalName ?? null })).globalName,
        d = void 0 !== r ? r : l,
        u = (0, ep.lw)({ pendingValue: s, userValue: o }) ?? t.username;
    return (0, i.jsx)(nL, {
        ...n,
        fieldA11yLabel: eU.intl.string(eU.t["3XtTTE"]),
        variant: "bar",
        displayNameStyles: d,
        displayName: u,
        currentValueA11yLabel: (0, nI.I9)(d),
        shouldAlwaysAnimate: null == r,
    });
}
function iq(e) {
    let t = (0, ee.Ay)(e.id),
        {
            tryItOutThemeColors: n,
            tryItOutAvatar: i,
            pendingAvatar: l,
        } = (0, a.cf)([eI.A], () => ({
            tryItOutThemeColors: eI.A.getTryItOutChanges().tryItOutThemeColors,
            tryItOutAvatar: eI.A.getTryItOutChanges().tryItOutAvatar,
            pendingAvatar: eI.A.getPendingChanges().pendingAvatar,
        })),
        r = (0, ex.V7)({ userId: e.id, image: void 0 !== i ? i : l }),
        { primaryColor: s, secondaryColor: o } = (0, el.A)({
            user: e,
            displayProfile: t,
            pendingThemeColors: n,
            pendingAvatarSrc: r ?? void 0,
            isPreview: !0,
        });
    return { primaryColor: s, secondaryColor: o, pendingAvatarSrc: r, tryItOutThemeColors: n };
}
function iX(e) {
    let { user: t, initialOpenPopout: n } = e,
        { primaryColor: r, secondaryColor: s, pendingAvatarSrc: a, tryItOutThemeColors: o } = iq(t),
        d = (0, ng.r)(p.A.unsafe_rawColors.PRIMARY_530).hex(),
        u = null != a ? a : t.getAvatarURL(void 0, 80),
        c = (0, nh.rh)(u, d, !1),
        g = l.useCallback((e) => {
            (0, na.a)(e);
        }, []);
    return null == r || null == s
        ? null
        : (0, i.jsx)(iI, {
              fieldA11yLabel: eU.intl.string(eU.t["/WsW/1"]),
              variant: "full-height-bar",
              primaryColor: r,
              secondaryColor: s,
              onSelectPrimaryColor: (e) => {
                  (o?.[0] == null || e !== o[0]) && g([e, s]);
              },
              onSelectSecondaryColor: (e) => {
                  (o?.[1] == null || e !== o[1]) && g([r, e]);
              },
              suggestedColors: c,
              initialOpenPopout: n,
          });
}
function iZ(e) {
    let { user: t, onClickPrimary: n, onClickSecondary: r } = e,
        { primaryColor: s, secondaryColor: a } = iq(t),
        o = l.useId(),
        d = l.useId();
    if (null == s || null == a) return null;
    let u = (0, nc.Hl)(s),
        c = (0, nc.Hl)(a);
    return (0, i.jsxs)(nx.Y, {
        fieldA11yLabel: eU.intl.string(eU.t["/WsW/1"]),
        variant: "full-height-bar",
        children: [
            (0, i.jsx)(m.A, { id: o, children: eU.intl.formatToPlainString(eU.t.v4X2kc, { colorHex: u }) }),
            (0, i.jsx)(m.A, { id: d, children: eU.intl.formatToPlainString(eU.t.I0tmru, { colorHex: c }) }),
            (0, i.jsxs)(ih, {
                primaryColor: s,
                secondaryColor: a,
                children: [
                    (0, i.jsx)(ix, {
                        color: s,
                        onClick: n,
                        "aria-label": eU.intl.string(eU.t["1PvTpO"]),
                        "aria-describedby": o,
                    }),
                    (0, i.jsx)(ix, {
                        color: a,
                        onClick: r,
                        "aria-label": eU.intl.string(eU.t.stG76C),
                        "aria-describedby": d,
                    }),
                ],
            }),
        ],
    });
}
var i$ = n(847081);
function iJ(e) {
    let { user: t, mode: n } = e,
        r = l.useRef(null),
        s = l.useRef(null),
        a = l.useRef(null),
        o = l.useRef(!1),
        { initialTarget: d, navigate: u } = tZ(),
        c = (function (e) {
            let { analyticsLocations: t } = (0, y.Ay)();
            return l.useCallback(() => {
                (0, nk.L)({ analyticsLocations: t, isPremiumTryItOut: !0, stackingBehavior: "stack", returnRef: e });
            }, [t, e]);
        })(r),
        g = (0, nS._)({ isPremiumTryItOut: !0, returnRef: s }),
        m = (0, nS.P)({ isPremiumTryItOut: !0, returnRef: a }),
        f = "edit" === n;
    return (
        l.useEffect(() => {
            if (f && !o.current) {
                switch (d) {
                    case "display-name-styles":
                        c();
                        break;
                    case "banner":
                        m();
                        break;
                    case "avatar":
                        g();
                        break;
                    default:
                        return;
                }
                o.current = !0;
            }
        }, [d, f, c, g, m]),
        (0, i.jsxs)("div", {
            className: i$.T,
            children: [
                (0, i.jsx)(nG, {
                    heading: eU.intl.string(eU.t.NEzEws),
                    children: (0, i.jsx)(iK, {
                        user: t,
                        buttonRef: r,
                        onClick: f ? c : () => u({ id: "premiumTryItOut", initialTarget: "display-name-styles" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, i.jsx)(nG, {
                    heading: eU.intl.string(eU.t.DMeO2X),
                    children: f
                        ? (0, i.jsx)(iX, {
                              user: t,
                              initialOpenPopout: "theme-primary" === d || "theme-secondary" === d ? d : void 0,
                          })
                        : (0, i.jsx)(iZ, {
                              user: t,
                              onClickPrimary: () => u({ id: "premiumTryItOut", initialTarget: "theme-primary" }),
                              onClickSecondary: () => u({ id: "premiumTryItOut", initialTarget: "theme-secondary" }),
                          }),
                }),
                (0, i.jsx)(nG, {
                    heading: eU.intl.string(eU.t.Vgdusv),
                    children: (0, i.jsx)(iY, {
                        userId: t.id,
                        buttonRef: a,
                        onClick: f ? m : () => u({ id: "premiumTryItOut", initialTarget: "banner" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, i.jsx)(nG, {
                    heading: eU.intl.string(eU.t.Dt3ZUr),
                    children: (0, i.jsx)(iz, {
                        user: t,
                        buttonRef: s,
                        onClick: f ? g : () => u({ id: "premiumTryItOut", initialTarget: "avatar" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
            ],
        })
    );
}
var iQ = n(847374),
    i0 = n(111159),
    i1 = n(682163),
    i6 = n(711014),
    i2 = n(941030),
    i4 = n(561392),
    i3 = n(286615),
    i8 = n(15626),
    i7 = n(715022),
    i9 = n(44482),
    i5 = n(470791);
function le(e) {
    let {
            options: t,
            value: n,
            onSelectionChange: r,
            label: a,
            className: o,
            listboxClassName: d,
            disabled: u = !1,
            loading: c = !1,
            maxOptionsVisible: g = 5,
            renderListItem: f,
            children: h,
        } = e,
        {
            isOpen: p,
            setIsOpen: x,
            refs: A,
            floatingStyles: I,
            getReferenceProps: v,
            getFloatingProps: j,
            transitionStyles: y,
        } = (function () {
            let { reducedMotion: e } = l.useContext(ek.C),
                {
                    isOpen: t,
                    setIsOpen: n,
                    refs: i,
                    floatingStyles: r,
                    getReferenceProps: s,
                    getFloatingProps: a,
                    context: o,
                } = (0, i4.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, i3.DL)(o, {
                    common: { transformOrigin: "top left" },
                    initial: { opacity: 0.5, transform: "scaleY(0.96)" },
                    duration: 100,
                });
            return {
                isOpen: t,
                setIsOpen: n,
                refs: i,
                floatingStyles: r,
                getReferenceProps: s,
                getFloatingProps: a,
                transitionStyles: e.enabled ? {} : d,
            };
        })(),
        { setFloating: b } = A,
        C = l.useContext(i8._),
        E = l.useId(),
        S = l.useId(),
        N = l.useId(),
        k = l.useRef(null),
        T = l.useRef(null),
        [P, O] = l.useState(null),
        R = null != P ? (0, i7.ZN)(N, P) : void 0,
        _ = l.useRef(!1),
        L = l.useRef(!1),
        w = l.useMemo(() => t.filter((e) => (0, i7.fI)(e.value, [n])), [n, t]),
        M = l.useCallback(() => {
            u || x(!p);
        }, [u, x, p]),
        D = l.useCallback(
            (e) => {
                p && 0 === e.button && e.preventDefault();
            },
            [p],
        ),
        G = l.useCallback(() => {
            (x(!1), k.current?.focus());
        }, [x]),
        U = l.useCallback(
            (e) => {
                if (!T.current?.contains(e.relatedTarget)) {
                    if (L.current) {
                        L.current = !1;
                        return;
                    }
                    if (p && null != P) {
                        let e = t[P];
                        null != e && !0 !== e.disabled && r(e.value);
                    }
                    p && x(!1);
                }
            },
            [p, P, t, r, x],
        ),
        F = l.useCallback(
            (e) => {
                if (u) return;
                let t = e[0];
                null != t && (r(t.value), G());
            },
            [u, r, G],
        ),
        { activeIndex: B, handleKeyDown: W } = (0, i2.l)(!0, t),
        H = l.useRef(null);
    l.useEffect(() => {
        let e = B !== H.current;
        ((H.current = B), null != B && e && (O(B), p || ((_.current = !0), x(!0))));
    }, [B, p, x]);
    let V = l.useCallback(
            (e) => {
                if (u) return;
                let n = t.length;
                switch (e.key) {
                    case "ArrowDown":
                    case "PageDown": {
                        let t = "PageDown" === e.key ? 10 : 1;
                        if (0 === n) return;
                        if ((e.preventDefault(), !p || e.altKey)) {
                            p || x(!0);
                            return;
                        }
                        O((e) => (null === e ? 0 : Math.min(e + t, n - 1)));
                        break;
                    }
                    case "ArrowUp":
                    case "PageUp": {
                        let i = "PageUp" === e.key ? 10 : 1;
                        if (0 === n) return;
                        if ((e.preventDefault(), e.altKey && p)) {
                            if (null != P) {
                                let e = t[P];
                                if (null != e && !0 !== e.disabled) {
                                    F([e]);
                                    break;
                                }
                            }
                            G();
                            break;
                        }
                        if (!p) return void x(!0);
                        O((e) => (null === e ? 0 : Math.max(e - i, 0)));
                        break;
                    }
                    case "Enter":
                    case " ":
                        if ((e.preventDefault(), e.stopPropagation(), !p)) return void x(!0);
                        if (null == P || P > n - 1) return;
                        {
                            let e = t[P];
                            if (null == e || !0 === e.disabled) return;
                            F([e]);
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === n)) return;
                        (O(0), p || ((_.current = !0), x(!0)));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === n)) return;
                        (O(n - 1), p || ((_.current = !0), x(!0)));
                        break;
                    case "Tab":
                        if (p && null != P) {
                            let e = t[P];
                            null != e && !0 !== e.disabled && r(e.value);
                        }
                        ((L.current = !0), x(!1));
                        break;
                    case "Escape":
                        p && (e.preventDefault(), e.stopPropagation(), G());
                        break;
                    default:
                        W(e);
                }
            },
            [u, p, t, P, F, G, r, x, W],
        ),
        z = Math.max(
            t.findIndex((e) => e.id === w[w.length - 1]?.id),
            0,
        ),
        Y = l.useRef(!1);
    l.useEffect(() => {
        c || !p || Y.current
            ? p || ((Y.current = !1), O(null), (_.current = !1))
            : ((Y.current = !0), _.current || O(t.length > 0 ? z : null), (_.current = !1), k.current?.focus());
    }, [c, p, z, t.length]);
    let K = {
        id: S,
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-controls": p ? N : void 0,
        "aria-expanded": p,
        "aria-activedescendant": R,
        "aria-disabled": !!u || void 0,
        "aria-labelledby": null != a ? `${E} ${S}` : void 0,
        "aria-errormessage": C?.errorMessageId,
        "aria-invalid": C?.errorMessageId != null || void 0,
        "aria-describedby": C?.describedById,
        onClick: M,
        onMouseDown: D,
        onKeyDown: V,
        onBlur: U,
    };
    return (0, i.jsxs)("div", {
        ref: (e) => {
            ((T.current = e), A.setReference(e));
        },
        className: o,
        ...v(),
        children: [
            null != a && (0, i.jsx)(m.A, { tag: "label", id: E, htmlFor: S, children: a }),
            h({ buttonRef: k, selectButtonProps: K }),
            !u &&
                p &&
                (0, i.jsx)("div", {
                    ref: b,
                    className: s()(i5.S_, d),
                    ...j(),
                    style: { ...I, ...y },
                    children: (0, i.jsx)(i2.q, {
                        id: N,
                        tabIndex: -1,
                        items: t,
                        selectionMode: "single",
                        selectedItems: w,
                        onSelectionChange: F,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: P,
                        renderListItem: (e) => (null != f ? f(e) : (0, i.jsx)(i9.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var lt = n(216384);
let ln = "MAIN_PROFILE";
function li(e) {
    let { guild: t } = e;
    return (0, i.jsx)(i1.Ay, { className: lt.$f, guild: t, size: i1.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function ll(e) {
    let { leading: t, label: n, description: l } = e;
    return (0, i.jsxs)("div", {
        className: lt.XE,
        children: [
            null != t && (0, i.jsx)("div", { className: lt.fZ, children: t }),
            (0, i.jsxs)("div", {
                className: lt.qL,
                children: [
                    (0, i.jsx)(eK.E, { variant: "body-md/normal", color: "currentColor", lineClamp: 1, children: n }),
                    null != l &&
                        "" !== l &&
                        (0, i.jsx)(eK.E, {
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            children: l,
                        }),
                ],
            }),
        ],
    });
}
function lr(e) {
    let { leading: t, label: n, disabled: l, buttonRef: r, selectButtonProps: a } = e;
    return (0, i.jsxs)(e7.D, {
        innerRef: r,
        className: s()(lt.L5, { [lt.r9]: l }),
        tabIndex: !0 === l ? -1 : 0,
        ...a,
        children: [
            t,
            (0, i.jsx)(eK.E, {
                variant: "body-md/medium",
                color: !0 === l ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: lt.v9,
                children: n,
            }),
            (0, i.jsx)(iQ.ChevronSmallDownIcon, {
                className: lt.u4,
                size: "sm",
                color: !0 === l ? p.A.colors.ICON_MUTED : p.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function ls(e) {
    let { selectedGuildId: t, originGuildId: n, onChange: r, loading: s, disabled: o } = e,
        d = (0, a.bG)([i6.Ay], () => i6.Ay.getFlattenedGuildIds()),
        u = (0, a.bG)([z.A], () => z.A.getGuilds()),
        c = (0, a.bG)([ti.A], () => {
            let e = ti.A.getGuildId();
            return null == e || eI._.has(e) ? null : e;
        }),
        g = (0, a.cf)([eA.Ay, i6.Ay], () => {
            let e = {};
            for (let t of i6.Ay.getFlattenedGuildIds()) {
                let n = eA.Ay.getSelfMember(t)?.nick;
                null != n && (e[t] = n);
            }
            return e;
        }),
        m = l.useMemo(() => {
            let e = {
                    id: ln,
                    label: eU.intl.string(eU.t["2p07FR"]),
                    value: ln,
                    leading: (0, i.jsx)(i0.ClydeIcon, { size: "refresh_sm", color: p.A.colors.ICON_DEFAULT }),
                },
                t = n ?? c,
                l = d
                    .map((e) => {
                        if (e === t) return null;
                        let n = u[e];
                        return null == n
                            ? null
                            : {
                                  id: n.id,
                                  label: n.name,
                                  value: n.id,
                                  leading: (0, i.jsx)(li, { guild: n }),
                                  description: g[n.id] ?? void 0,
                              };
                    })
                    .filter(eu.Vq),
                r = null != t ? u[t] : null;
            return null == r
                ? [e, ...l]
                : [
                      e,
                      {
                          id: r.id,
                          label: r.name,
                          value: r.id,
                          leading: (0, i.jsx)(li, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...l,
                  ];
        }, [d, u, n, c, g]),
        f = t ?? ln,
        h = m.find((e) => e.value === f) ?? m[0],
        x = l.useCallback(
            (e) => {
                let n = e === ln ? null : e;
                n !== t && r(n);
            },
            [r, t],
        );
    return (0, i.jsx)(le, {
        className: lt.kL,
        label: eU.intl.string(eU.t.rki38K),
        listboxClassName: lt.yt,
        options: m,
        value: f,
        onSelectionChange: x,
        loading: s,
        disabled: o,
        renderListItem: (e) => (0, i.jsx)(ll, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, i.jsx)(lr, { leading: h.value === ln ? null : h.leading, label: h.label, disabled: o, ...e }),
    });
}
var la = n(701256),
    lo = n(288490);
let ld = "profile-editing-nameplate-error",
    lu = "profile-editing-avatar-error",
    lc = "profile-editing-avatar-decoration-error",
    lg = "profile-editing-banner-error",
    lm = "profile-editing-display-name-style-error";
function lf(e) {
    let { className: t } = e;
    return (0, i.jsx)("div", {
        className: s()(lo.D0, t),
        children: (0, i.jsx)("div", { className: lo.ZN, children: (0, i.jsx)(t$.LockIcon, { size: "xs" }) }),
    });
}
function lh() {
    let [e, t] = (0, t3.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, i.jsxs)("div", {
              className: lo.X6,
              children: [
                  (0, i.jsx)(eK.E, {
                      variant: "body-sm/normal",
                      color: "text-default",
                      children: eU.intl.string(eU.t["gBIG/N"]),
                  }),
                  (0, i.jsx)(e7.D, {
                      "aria-label": eU.intl.string(eU.t.rSe9ra),
                      className: lo.TD,
                      onClick: () => t(!0),
                      children: (0, i.jsx)(tJ.XSmallIcon, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function lp() {
    let e = iP(),
        t = iL(eU.intl.string(eU.t["7IWwak"]));
    return (0, i.jsxs)("div", {
        className: lo.eW,
        children: [
            (0, i.jsxs)("div", {
                className: lo.tm,
                children: [
                    (0, i.jsx)(tQ.D, {
                        variant: "body-md/medium",
                        color: "text-default",
                        children: eU.intl.string(eU.t.bO0TOe),
                    }),
                    (0, i.jsx)(eK.E, {
                        variant: "body-xs/medium",
                        color: "text-default",
                        children: eU.intl.format(eU.t["3PujdE"], { onClick: e }),
                    }),
                ],
            }),
            (0, i.jsx)(t5.A, { subscriptionTier: i_.pe.TIER_2, buttonTextOverride: t, size: "sm", fullWidth: !0 }),
            (0, i.jsx)(lf, { className: lo.nd }),
        ],
    });
}
function lx() {
    return (0, i.jsx)(eK.E, {
        variant: "body-xs/normal",
        color: "text-subtle",
        className: lo.BJ,
        "aria-hidden": !0,
        children: eU.intl.format(eU.t.kYv9DM, {
            nitroIconHook: () =>
                (0, i.jsx)(t0.NitroWheelIcon, { size: "xxs", color: "currentColor", className: lo.qp }),
        }),
    });
}
function lA(e) {
    let { user: t, guildId: n, disabled: l, errorMessage: r } = e;
    return (0, i.jsxs)(nG, {
        heading: eU.intl.string(eU.t.x5CoXR),
        disabled: l,
        children: [
            (0, i.jsx)(nK.A, { user: t, guildId: n, disabled: l, errorMessageId: null != r ? ld : void 0 }),
            (0, i.jsx)(nU, { id: ld, message: r }),
        ],
    });
}
function lI(e) {
    let { user: t, guildId: n, disabled: l, avatarErrorMessage: r, avatarDecorationErrorMessage: s } = e;
    return (0, i.jsxs)(nG, {
        heading: eU.intl.string(eU.t["50Nwpc"]),
        disabled: l,
        children: [
            (0, i.jsx)(nd.A, { user: t, guildId: n, disabled: l, errorMessageId: null != r ? lu : void 0 }),
            (0, i.jsx)(nu.A, { user: t, guildId: n, disabled: l, errorMessageId: null != s ? lc : void 0 }),
            (0, i.jsx)(nU, { id: lu, message: (0, ne.d3)(r) }),
            (0, i.jsx)(nU, { id: lc, message: s }),
        ],
    });
}
function lv(e) {
    let { user: t, guildId: n, disabled: l, errorMessage: r } = e,
        [s, a] = (0, eD.kn)(l ? [] : [eS.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE]),
        o = s === eS.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        { pendingDisplayNameStyles: d } = (0, ep.B0)(t, n ?? void 0),
        u = (0, t8.A)({
            userId: t.id,
            guildId: n ?? void 0,
            pendingDisplayNameStyles: d,
            ignoreDisabledStylesSetting: !0,
        }),
        { showCampaignPromo: c, showCampaignNewBadge: g } = (0, t9.hh)({
            location: "UserProfileModalV2EditingPanel",
            displayNameStyles: u,
            disabled: l,
        });
    return (0, i.jsxs)(nG, {
        heading: eU.intl.string(eU.t.NEzEws),
        description: c ? eU.intl.string(la.default.WyZOg3) : void 0,
        disabled: l,
        showNitroIcon: !0,
        badge:
            o || g
                ? (0, i.jsx)("div", {
                      className: lo.IO,
                      "aria-hidden": !0,
                      children: (0, i.jsx)(t1.E, { type: "new", variant: "primary" }),
                  })
                : void 0,
        children: [
            (0, i.jsx)(nw, {
                user: t,
                guildId: n,
                disabled: l,
                errorMessageId: null != r ? lm : void 0,
                onOpen: o ? () => a(eG.i.TAKE_ACTION) : void 0,
            }),
            (0, i.jsx)(nU, { id: lm, message: r }),
        ],
    });
}
function lj(e) {
    let { user: t, disabled: n } = e,
        { showCampaignFontBadge: l, dismissCampaignFontBadge: r } = (0, t9.wP)("UserProfileModalV2EditingPanel");
    return (0, i.jsx)(nG, {
        heading: eU.intl.string(eU.t.NEzEws),
        description: eU.intl.string(la.default.WyZOg3),
        disabled: n,
        badge: l
            ? (0, i.jsx)("div", {
                  className: lo.IO,
                  "aria-hidden": !0,
                  children: (0, i.jsx)(t1.E, { type: "new", variant: "primary" }),
              })
            : void 0,
        children: (0, i.jsx)(nY, { user: t, disabled: n, onOpen: l ? r : void 0 }),
    });
}
function ly(e) {
    let { user: t, guildId: n, disabled: l, canUsePremiumProfileFeatures: r, bannerErrorMessage: s } = e;
    return (0, i.jsxs)(nG, {
        heading: eU.intl.string(eU.t.Zenogr),
        disabled: l,
        showNitroIcon: !0,
        children: [
            (0, i.jsx)(iv, { user: t, guildId: n, disabled: l || !r }),
            (0, i.jsx)(nN, { userId: t.id, guildId: n, disabled: l || !r, errorMessageId: null != s ? lg : void 0 }),
            (0, i.jsx)(nU, { id: lg, message: (0, ne.d3)(s) }),
        ],
    });
}
function lb(e) {
    let { user: t, disabled: n } = e;
    return (0, i.jsx)(nG, {
        heading: eU.intl.string(eU.t["/X3fkf"]),
        disabled: n,
        children: (0, i.jsx)(nA, { user: t, disabled: n }),
    });
}
function lC(e) {
    let { user: t, guildId: n, disabled: l } = e;
    return (0, i.jsxs)(nG, {
        heading: eU.intl.string(eU.t["Vfbar/"]),
        disabled: l,
        children: [
            (0, i.jsx)(it, { user: t, guildId: n, disabled: l, variant: "square" }),
            (0, i.jsx)(iu, { user: t, guildId: n, disabled: l }),
        ],
    });
}
let lE = "premium-try-it-out-description";
function lS(e) {
    let { user: t } = e,
        n = iP(),
        { navigate: l } = tZ();
    return (
        no(),
        (0, i.jsxs)("div", {
            role: "group",
            "aria-labelledby": lE,
            className: lo.DX,
            children: [
                (0, i.jsx)(lf, { className: lo.x$ }),
                (0, i.jsxs)("div", {
                    className: lo.sb,
                    children: [
                        (0, i.jsx)(eK.E, {
                            id: lE,
                            variant: "body-md/normal",
                            color: "text-default",
                            children: eU.intl.format(eU.t.TmfgI2, { onClick: n }),
                        }),
                        (0, i.jsx)(t6.$, {
                            variant: "primary",
                            size: "sm",
                            icon: t2.EyeIcon,
                            text: eU.intl.string(eU.t.PxUx8e),
                            onClick: () => l({ id: "premiumTryItOut" }),
                            fullWidth: !0,
                        }),
                    ],
                }),
                (0, i.jsx)(iJ, { user: t, mode: "entrypoint" }),
            ],
        })
    );
}
function lN(e) {
    let {
            user: t,
            panelId: n,
            selectedGuildId: l,
            originGuildId: r,
            isLoading: s,
            isEditingDisabled: o,
            collapseButtonRef: d,
            onClosePanel: u,
            onSelectGuildId: c,
        } = e,
        g = (0, a.bG)([K.A], () => K.A.hidePersonalInformation),
        m = (0, tV.A)(c),
        f = null != l,
        h = Z.Ay.canUsePremiumProfileCustomization(t),
        p = f && !h,
        x = !h && !f,
        A = (0, t7.Lz)(nz.vB.DISPLAY_NAME_STYLE, "UserProfileModalV2EditingPanel"),
        I = x && A === nz.S9.SELECTABLE,
        v = f && !h && !g,
        j = s || o,
        y = (0, a.bG)([eI.A], () => eI.A.getErrors(l)),
        b = y.nameplate?.[0] ?? y.nameplate_sku_id?.[0],
        C = y.avatar?.[0],
        E = y.avatar_decoration_sku_id?.[0],
        S = y.banner?.[0],
        N = y.display_name_font_id?.[0] ?? y.display_name_effect_id?.[0] ?? y.display_name_colors?.[0];
    return (0, i.jsxs)(iy, {
        hasGradientBackground: v,
        children: [
            (0, i.jsxs)("div", {
                className: lo.wx,
                children: [
                    (0, i.jsx)(tC.m, {
                        text: eU.intl.string(eU.t["l/A351"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(tH.K, {
                            buttonRef: d,
                            "aria-label": eU.intl.string(eU.t["l/A351"]),
                            icon: t4.DoubleChevronSmallRightIcon,
                            onClick: u,
                            "aria-controls": n,
                            "aria-expanded": !0,
                            variant: "icon-only",
                            size: "sm",
                        }),
                    }),
                    (0, i.jsx)(ls, {
                        selectedGuildId: l ?? null,
                        originGuildId: r,
                        onChange: m,
                        loading: s,
                        disabled: g,
                    }),
                ],
            }),
            g
                ? (0, i.jsx)(iW, {})
                : (0, i.jsx)(iE, {
                      children: (0, i.jsxs)(i.Fragment, {
                          children: [
                              f && (h ? (0, i.jsx)(lh, {}) : (0, i.jsx)(lp, {})),
                              h && (0, i.jsx)(lx, {}),
                              (0, i.jsx)(lA, { user: t, guildId: l, disabled: j || p, errorMessage: b }),
                              (0, i.jsx)(lI, {
                                  user: t,
                                  guildId: l,
                                  disabled: j || p,
                                  avatarErrorMessage: C,
                                  avatarDecorationErrorMessage: E,
                              }),
                              h || f
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(lv, { user: t, guildId: l, disabled: j || p, errorMessage: N }),
                                            (0, i.jsx)(ly, {
                                                user: t,
                                                guildId: l,
                                                disabled: j || p,
                                                canUsePremiumProfileFeatures: h,
                                                bannerErrorMessage: S,
                                            }),
                                        ],
                                    })
                                  : (0, i.jsx)(lb, { user: t, disabled: j || p }),
                              (0, i.jsx)(lC, { user: t, guildId: l, disabled: j || p }),
                              I && (0, i.jsx)(lj, { user: t, disabled: j }),
                              x &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [(0, i.jsx)(lS, { user: t }), (0, i.jsx)(iU, {})],
                                  }),
                          ],
                      }),
                  }),
        ],
    });
}
var lk = n(156150),
    lT = n(110654);
function lP(e) {
    return null;
}
function lO(e) {
    let { activeSlide: t, direction: n, onTransitionComplete: r, children: a } = e,
        o = new Map(a.map((e) => [e.props.id, e]));
    if (!o.has(t)) throw Error("EditingPanelSlides requires its active slide to be available");
    let [d, c] = l.useState(t),
        [g, m] = l.useState(!1),
        f = "forwards" === n ? 1 : -1,
        h = (0, u.p)(
            t,
            {
                offset: 0,
                initial: { offset: 0 },
                from: { offset: 1 },
                enter: { offset: 0 },
                leave: { offset: -1 },
                config: { duration: 150 },
                onStart: () => m(!0),
                onRest: (e, n) => {
                    let { item: i } = n;
                    e.finished && i === t && (m(!1), i !== d && (c(t), r()));
                },
            },
            "respect-motion-settings",
        ),
        p = g || t !== d;
    return (0, i.jsx)("div", {
        className: s()(lT.kL, p && lT.ez),
        children: (0, i.jsx)("div", {
            className: lT.u4,
            children: h((e, t, n) => {
                let { key: l } = n,
                    r = o.get(t);
                return null == r
                    ? null
                    : (0, i.jsx)(
                          lk.animated.div,
                          {
                              className: lT.M6,
                              style: p
                                  ? { transform: e.offset.to((e) => `translate3d(${e * f * 100}%, 0, 0)`) }
                                  : void 0,
                              inert: p || t !== d,
                              "aria-hidden": p || t !== d,
                              children: r.props.children,
                          },
                          l,
                      );
            }),
        }),
    });
}
var lR = n(926321),
    l_ = n(477155),
    lL = n(561243),
    lw = n(206697),
    lM = n(280406);
let lD = "shuffle-options-a11y-description";
function lG(e) {
    let { className: t, onShuffle: n } = e;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)(t6.$, {
                icon: lR.DiceIcon,
                text: eU.intl.string(eU.t.VzqqFC),
                onClick: n,
                variant: "secondary",
                size: "sm",
                "aria-describedby": lD,
                fullWidth: !0,
            }),
            (0, i.jsx)(m.A, { id: lD, children: eU.intl.string(eU.t.bBRdiB) }),
        ],
    });
}
function lU(e) {
    let { user: t, onBack: n, backButtonRef: l } = e,
        r = no(),
        s = iM();
    return (0, i.jsxs)(iy, {
        children: [
            (0, i.jsxs)("div", {
                className: lM.wx,
                children: [
                    (0, i.jsx)("div", {
                        className: lM.FS,
                        children: (0, i.jsx)(tC.m, {
                            text: eU.intl.string(eU.t["13/7kX"]),
                            ariaHidden: !0,
                            children: (0, i.jsx)(tH.K, {
                                buttonRef: l,
                                "aria-label": eU.intl.string(eU.t["4IYwrw"]),
                                icon: l_.ArrowSmallLeftIcon,
                                onClick: n,
                                variant: "icon-only",
                                size: "sm",
                            }),
                        }),
                    }),
                    (0, i.jsx)(tQ.D, {
                        variant: "body-md/medium",
                        color: "text-default",
                        className: lM.R_,
                        children: eU.intl.string(eU.t.PxUx8e),
                    }),
                    (0, i.jsx)(eK.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: lM.Ij,
                        children: eU.intl.string(eU.t.X0ir7L),
                    }),
                    (0, i.jsx)(lG, { className: lM.ZZ, onShuffle: r }),
                ],
            }),
            (0, i.jsx)(iE, {
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(iJ, { user: t, mode: "edit" }),
                        null != s &&
                            (0, i.jsx)(iG, {
                                trialOffer: s,
                                onSubscribeClick: lw.t,
                                onSubscribeSuccess: lw.T,
                                onSubscribeClose: lL.J,
                            }),
                    ],
                }),
            }),
        ],
    });
}
var lF = n(199016);
let lB = "user-profile-editing-panel",
    lW = "profile-modal-editing-panel-heading";
function lH(e) {
    let { onClick: t, className: n, innerRef: l } = e;
    return (0, i.jsx)(tC.m, {
        text: eU.intl.string(eU.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, i.jsx)(e7.D, {
            innerRef: l,
            "aria-label": eU.intl.string(eU.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": lB,
            className: s()(lF.eg, n),
            onClick: t,
            focusProps: { offset: { right: 6 } },
            children: (0, i.jsx)(tW.PaintbrushThinIcon, { size: "sm", color: "currentColor" }),
        }),
    });
}
function lV(e) {
    let { onClick: t, className: n, buttonRef: l } = e;
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(tC.m, {
            text: eU.intl.string(eU.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, i.jsx)(tH.K, {
                buttonRef: l,
                "aria-label": eU.intl.string(eU.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": lB,
                icon: tW.PaintbrushThinIcon,
                onClick: t,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function lz(e) {
    let {
            selectedGuildId: t,
            originGuildId: n,
            onSelectGuildId: r,
            isLoading: o = !1,
            isEditingDisabled: d = !1,
            onClose: u,
            className: c,
            collapseButtonRef: g,
        } = e,
        h = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        { selectedPanel: p, readyPanel: x, handlePanelTransitionComplete: A, goBack: I } = tZ(),
        v = l.useRef(null);
    return (l.useEffect(() => {
        if (null == x || "premiumTryItOut" !== x.id || null != x.initialTarget) return;
        let e = requestAnimationFrame(() => v.current?.focus());
        return () => cancelAnimationFrame(e);
    }, [x]),
    null == h)
        ? null
        : (0, i.jsx)("aside", {
              id: lB,
              "aria-labelledby": lW,
              className: s()(lF.nd, c),
              "aria-busy": o,
              children: (0, i.jsxs)("div", {
                  className: lF.l$,
                  children: [
                      (0, i.jsx)(m.A, {
                          children: (0, i.jsx)(f.H, { id: lW, children: eU.intl.string(eU.t["L+ch00"]) }),
                      }),
                      (0, i.jsxs)(lO, {
                          activeSlide: p.id,
                          direction: "premiumTryItOut" === p.id ? "forwards" : "backwards",
                          onTransitionComplete: A,
                          children: [
                              (0, i.jsx)(lP, {
                                  id: "default",
                                  children: (0, i.jsx)(lN, {
                                      panelId: lB,
                                      user: h,
                                      selectedGuildId: t,
                                      originGuildId: n,
                                      isLoading: o,
                                      isEditingDisabled: d,
                                      collapseButtonRef: g,
                                      onClosePanel: u,
                                      onSelectGuildId: r,
                                  }),
                              }),
                              (0, i.jsx)(lP, {
                                  id: "premiumTryItOut",
                                  children: (0, i.jsx)(lU, { user: h, onBack: I, backButtonRef: v }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var lY = n(425763),
    lK = n(447453),
    lq = n(46653),
    lX = n(783420),
    lZ = n(874402);
function l$() {
    let e = tX(),
        { goBack: t } = tZ(),
        n = iL(eU.intl.string(eU.t.pj0XBN));
    return (0, i.jsx)(lX.A, {
        subscriptionTier: i_.pe.TIER_2,
        onClick: lw.t,
        onSubscribeModalClose: (e) => {
            (e && (0, lw.T)(), (0, lL.J)());
        },
        children: (l) => {
            let { onClick: r } = l;
            return (0, i.jsx)(lZ.$, {
                isVisible: e,
                labelId: "premium-try-it-out-footer-bar-label",
                noticeText: eU.intl.string(eU.t.X0ir7L),
                a11yAnnounceOnShow: eU.intl.string(eU.t.X0ir7L),
                a11yAnnounceOnHide: eU.intl.string(eU.t.ZcyFYa),
                secondaryAction: { text: eU.intl.string(eU.t.V3S9WW), onClick: t },
                primaryAction: { text: n, onClick: r, icon: t0.NitroWheelIcon, variant: "expressive" },
            });
        },
    });
}
var lJ = n(803306),
    lQ = n(631670),
    l0 = n(682618),
    l1 = n(856383),
    l6 = n(234e3),
    l2 = n(159001),
    l4 = n(933725),
    l3 = n(189916),
    l8 = n(188567),
    l7 = n(435911),
    l9 = n(646976),
    l5 = n(289173),
    re = n(958805),
    rt = n(61881),
    rn = n(735321),
    ri = n(624826);
n(321073);
var rl = n(419490),
    rr = n(489496),
    rs = n(132319),
    ra = n(696016),
    ro = n(384377),
    rd = n(518477);
function ru(e) {
    let { guildId: t } = e,
        { trackUserProfileEditSaved: n } = (0, $.NJ)(),
        [r, s] = l.useState(!1),
        [o, d] = l.useState(!1),
        {
            widgetsToSave: u,
            changedWidgets: c,
            removedWidgets: g,
            hasUnsavedWidgets: m,
            canSaveWidgets: f,
        } = (function () {
            let e = (0, a.yK)([rt.A], () => rt.A.getSaveablePendingWidgets() ?? []),
                t = (0, a.yK)([rt.A], () => rt.A.getChangedWidgets()),
                n = (0, a.yK)([rt.A], () => rt.A.getRemovedWidgets()),
                { hasUnsavedWidgets: i, canSaveWidgets: l } = (0, a.cf)([rt.A], () => ({
                    hasUnsavedWidgets: rt.A.hasUnsavedChanges(),
                    canSaveWidgets: rt.A.canSaveChanges(),
                }));
            return { widgetsToSave: e, changedWidgets: t, removedWidgets: n, hasUnsavedWidgets: i, canSaveWidgets: l };
        })(),
        {
            hasUnsavedProfileChanges: h,
            canSubmitProfileChanges: p,
            hasBadgeChangesToSave: x,
        } = (0, a.cf)([eI.A], () => ({
            hasUnsavedProfileChanges: eI.A.hasUnsavedChanges(),
            canSubmitProfileChanges: eI.A.canSubmit(),
            hasBadgeChangesToSave: (0, l6.gz)(eI.A.getPendingChanges()),
        })),
        A = m || h || x,
        I = m && !f,
        v = l.useCallback(() => {
            (re.A.clearPendingWidgets(), (0, na.XQ)());
        }, []),
        j = l.useCallback(async () => {
            if (!eI.A.canSubmit()) return;
            d(!0);
            let e = !0;
            if (x) {
                let t = eI.A.getPendingChanges(),
                    n = await (async function (e) {
                        let { displayOrder: t, hiddenBadges: n } = e,
                            i = {
                                ...(null != t ? { display_order: t } : {}),
                                ...(null != n ? { hidden_badges: n } : {}),
                            };
                        if (0 === Object.keys(i).length) return !0;
                        try {
                            return (
                                await E.Bo.patch({ url: T.Rsh.USER_BADGE_SETTINGS, body: i, rejectWithError: !0 }), !0
                            );
                        } catch (e) {
                            return (l1.A.captureException(e), !1);
                        }
                    })({ displayOrder: t.pendingBadgeDisplayOrder, hiddenBadges: t.pendingBadgeHiddenBadges });
                if (n) {
                    let e = C.default.getCurrentUser()?.id;
                    (null != e && (await (0, lJ.eO)(e).catch(() => {})), await (0, l0.RS)(), (0, l6.Jp)());
                }
                e = n;
            }
            if (h)
                try {
                    if (null == t) {
                        let t = eI.A.getPendingChanges(),
                            n = (0, l7.Sk)(t),
                            i = (0, l7.yX)(t),
                            l =
                                (0, l3.Jy)(n.displayNameStyles) &&
                                !(0, l3.Jy)(C.default.getCurrentUser()?.displayNameStyles);
                        if (Object.keys(n).length > 0) {
                            let i = await (0, lQ._L)(n);
                            ((e = e && (i?.ok ?? !1)),
                                i?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, ri.t)({
                                            avatarHash: i.body.avatar,
                                            avatarId: n.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    l &&
                                        (0, nB.Cy)({
                                            perks: [nz.vB.DISPLAY_NAME_STYLE],
                                            content: nV.uF.DISPLAY_NAME_STYLES_SETTINGS,
                                            contentSurface: nB.rl.USER_PROFILE,
                                        }),
                                    (0, lQ.pZ)()));
                        }
                        if (Object.keys(i).length > 0) {
                            let { bannerOriginalMd5: t, ...n } = i,
                                l = await (0, na.gi)(n, void 0, t);
                            ((e = e && (l?.ok ?? !1)), l?.ok && (0, na.RE)());
                        }
                    } else {
                        let n = eI.A.getPendingChanges(t),
                            i = (0, l7.C5)(n),
                            l = (0, l7.yX)(n, t),
                            r = C.default.getCurrentUser()?.id,
                            s =
                                (0, l3.Jy)(i.displayNameStyles) &&
                                null != r &&
                                !(0, l3.Jy)(eA.Ay.getMember(t, r)?.displayNameStyles);
                        if (Object.keys(i).length > 0) {
                            let l = await (0, l2.GL)(t, i);
                            ((e = e && (l?.ok ?? !1)),
                                l?.ok &&
                                    (void 0 !== n.pendingAvatar &&
                                        (0, ri.t)({
                                            isGuildProfile: !0,
                                            avatarHash: l.body.avatar,
                                            avatarId: i.avatarId,
                                            avatarAssetOrigin: n.pendingAvatar?.assetOrigin,
                                        }),
                                    s &&
                                        (0, nB.Cy)({
                                            perks: [nz.vB.DISPLAY_NAME_STYLE],
                                            content: nV.uF.DISPLAY_NAME_STYLES_SETTINGS,
                                            contentSurface: nB.rl.GUILD_PROFILE,
                                        }),
                                    (0, lQ.pZ)()));
                        }
                        if (Object.keys(l).length > 0) {
                            let { bannerOriginalMd5: n, ...i } = l,
                                r = await (0, na.gi)(i, t, n);
                            ((e = e && (r?.ok ?? !1)), r?.ok && (0, na.RE)());
                        }
                    }
                    let n = (0, l7.yg)(eI.A.getPendingChanges());
                    if (Object.keys(n).length > 0) {
                        let { primaryGuildId: t } = n;
                        if (void 0 !== t) {
                            let n = await (0, l4.m)(t, null !== t);
                            ((e = e && (n?.ok ?? !1)), n?.ok && (0, lQ.fw)());
                        }
                    }
                } catch {
                    e = !1;
                }
            if (m)
                try {
                    let e = (0, rn.BF)();
                    for (let t of (await re.A.savePendingWidgets(u), c)) {
                        let i = { widgetEdited: t.type, isWidgetRemoved: !1 };
                        if ((0, l5.fu)(t))
                            ((i.gameIds = t.games.map((e) => e.gameId)),
                                (i.tags = t.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                                (i.numCharactersCommentary = t.games.reduce(
                                    (e, t) => e + (t.comment?.length ?? 0),
                                    0,
                                )));
                        else if (t instanceof l9.kM)
                            for (let { localClipId: n, name: l } of ((i.gameIds = t.clips.map((e) => e.gameId)),
                            (i.tags = t.clips.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                            (function (e, t) {
                                let n = e.find((e) => e instanceof l9.kM),
                                    i = new Map(n?.clips.map((e) => [e.id, e.title])),
                                    l = [];
                                for (let e of t.getUploadedClips()) {
                                    if (null == e.localClipId || ("saved" === e.status && i.get(e.id) === e.title))
                                        continue;
                                    let t = rl.Ay.getClipById(e.localClipId);
                                    null != t &&
                                        ((null == e.title
                                            ? null == t.name || "" === t.name
                                            : (0, rs.l)(t) === e.title) ||
                                            l.push({ localClipId: e.localClipId, name: e.title }));
                                }
                                return l;
                            })(e, t)))
                                !(async function (e, t) {
                                    try {
                                        await (0, rr.Yy)(e, { name: t });
                                    } catch (e) {
                                        ra.GU.warn(`Failed to sync profile clip title to the library: ${e}`);
                                    }
                                })(n, l);
                        n(i);
                    }
                    for (let e of g) n({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            (e ? (0, lQ.x8)() : (0, ro.XA)(rd.jM.PROFILE_SAVE_GENERIC_FAILURE), d(!1));
        }, [h, x, m, u, c, g, n, t]);
    return (
        l.useEffect(() => {
            let e = null;
            function t() {
                (null != e && clearTimeout(e),
                    s(!0),
                    (e = setTimeout(() => {
                        s(!1);
                    }, 2500)));
            }
            return (
                l8._.subscribe(T.jej.EMPHASIZE_NOTICE, t),
                () => {
                    (l8._.unsubscribe(T.jej.EMPHASIZE_NOTICE, t), null != e && clearTimeout(e));
                }
            );
        }, []),
        (0, i.jsx)(lZ.$, {
            preventsPopoutDismiss: !0,
            isVisible: A,
            labelId: "user-profile-save-reset-toolbar-label",
            noticeText: eU.intl.string(eU.t["/lQiX/"]),
            isEmphasized: r,
            a11yAnnounceOnShow: eU.intl.string(eU.t["0Y/qkL"]),
            secondaryAction: { text: eU.intl.string(eU.t.yBZMsQ), onClick: v, disabled: !A || o },
            primaryAction: { text: eU.intl.string(eU.t["R3BPH+"]), onClick: j, loading: o, disabled: !(!I && p) || !A },
        })
    );
}
var rc = n(485745),
    rg = n(893757);
function rm() {
    let e = (0, lY.VU)(),
        t = (0, rc.A)(),
        n = tX();
    return e ? "dnd" : n ? "premium-try-it-out" : t ? "save" : null;
}
function rf(e) {
    let { userId: t, guildId: n, className: r } = e,
        o = (0, a.bG)([lq.default], () => lq.default.getId() === t),
        d = rm(),
        [u, c] = l.useState(d);
    return (null != d && u !== d && c(d), o)
        ? (0, i.jsx)("div", {
              className: s()(rg.k, r),
              children:
                  "dnd" === u
                      ? (0, i.jsx)(lK.S, { className: rg.W })
                      : "premium-try-it-out" === u
                        ? (0, i.jsx)(l$, {})
                        : "save" === u
                          ? (0, i.jsx)(ru, { guildId: n })
                          : null,
          })
        : null;
}
var rh = n(34011),
    rp = n(629403),
    rx = n(612630),
    rA = n(404760),
    rI = n(61426);
function rv(e) {
    let { userId: t, className: n, autoFocus: r = !1, onUpdate: o } = e,
        d = (0, a.bG)([K.A], () => K.A.hidePersonalInformation),
        { loading: u, note: c } = (0, rx.A)(t),
        [g, m] = l.useState(),
        [f, h] = l.useState(),
        p = g ?? c,
        x = l.useCallback(
            async (e) => {
                if ((c ?? "") !== e) {
                    (h(void 0), m(e), o?.());
                    try {
                        await rp.A.updateNote(t, e);
                    } catch {
                        h(eU.intl.string(eU.t.F8FvUy));
                    }
                }
            },
            [t, c, o],
        ),
        A = u && null == p,
        I = l.useRef(null),
        v = l.useRef(!1);
    if (
        (l.useEffect(() => {
            !r || d || u || v.current || ((v.current = !0), I.current?.focus({ preventScroll: !0 }));
        }, [r, d, u]),
        d)
    )
        return null;
    let j =
        null != p && p.length > 0
            ? (0, i.jsx)(eK.E, { variant: "body-sm/normal", color: "text-default", className: rI.t, children: p })
            : null;
    return (0, i.jsx)("div", {
        className: s()(rA.kL, n),
        children: (0, i.jsx)(rh.w, {
            inputRef: I,
            value: p ?? "",
            onCommit: x,
            autoComplete: "off",
            defaultDirty: !0,
            hideLabel: !0,
            multiline: !0,
            paddingBlock: "md",
            scrollIntoViewOnFocus: !0,
            preview: j,
            label: eU.intl.string(eU.t.PbMNh2),
            placeholder: A ? eU.intl.string(eU.t["WLKx/9"]) : eU.intl.string(eU.t.VBhOe2),
            maxLength: 256,
            disabled: A,
            error: f,
        }),
    });
}
var rj = n(83013),
    ry = n(793222);
function rb(e) {
    let { userId: t } = e,
        n = (0, eC.g)(),
        { trackUserProfileAction: l } = (0, $.NJ)();
    return (0, i.jsx)(rj.A, {
        heading: eU.intl.string(eU.t["mQKv+v"]),
        scrollTargetId: rd.bk.NOTE,
        children: (0, i.jsx)(rv, {
            userId: t,
            className: ry.N,
            autoFocus: n === rd.bk.NOTE,
            onUpdate: () => l({ action: "SET_NOTE" }),
        }),
    });
}
var rC = n(123292),
    rE = n(667242);
function rS(e) {
    let { icon: t, message: n, actionLabel: r, onAction: s, actionDisabled: a, type: o, autoFocus: d } = e,
        u = l.useRef(null);
    return (
        l.useEffect(() => {
            d && u.current?.focus();
        }, [d]),
        (0, i.jsx)("div", {
            className: rE.kL,
            children: (0, i.jsxs)("div", {
                className: rE.Qs,
                "data-type": o,
                children: [
                    (0, i.jsx)("div", { className: rE.Kk, children: t }),
                    (0, i.jsx)(eK.E, { color: "text-strong", variant: "body-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, i.jsx)("div", {
                            className: rE.hP,
                            children: (0, i.jsx)(rC.Q, {
                                buttonRef: u,
                                variant: "primary",
                                textVariant: "body-sm/semibold",
                                text: r,
                                onClick: s,
                                disabled: a,
                            }),
                        }),
                ],
            }),
        })
    );
}
var rN = n(346055),
    rk = n(289873),
    rT = n(615019);
function rP(e) {
    let { showScrim: t, showLoadingSpinner: n, className: r, children: a } = e;
    l.useEffect(() => {
        n && nn.O.announce(eU.intl.string(eU.t["QR+vBP"]));
    }, [n]);
    let o = l.useRef(null);
    return (
        (0, rN.f)(o, t),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    className: s()(rT.f, t && rT.z),
                    children: n && (0, i.jsx)(rk.y, { type: rk.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, i.jsx)("div", { ref: o, "aria-hidden": t || void 0, className: r, children: a }),
            ],
        })
    );
}
var rO = n(568602);
function rR(e) {
    let { children: t } = e,
        [n, r] = l.useState(!1),
        [s, o] = l.useState(1.4),
        d = l.useRef(null),
        u = l.useRef(1.4),
        c = (0, a.bG)([rt.A, eI.A], () => rt.A.hasUnsavedChanges() || eI.A.hasUnsavedChanges());
    l.useEffect(() => {
        c || (u.current = 1.4);
    }, [c]);
    let g = l.useCallback(() => {
        (null != d.current && (clearTimeout(d.current), (d.current = null)), r(!1));
    }, []);
    return (
        l.useEffect(() => {
            function e() {
                (o(u.current),
                    (u.current = Math.min(u.current + 2, 15)),
                    r(!0),
                    null != d.current && clearTimeout(d.current),
                    (d.current = setTimeout(() => {
                        (r(!1), (d.current = null));
                    }, 300)));
            }
            return (
                l8._.subscribe(T.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    l8._.unsubscribe(T.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, [g]),
        l.useEffect(
            () => () => {
                null != d.current && (clearTimeout(d.current), (d.current = null));
            },
            [],
        ),
        (0, i.jsx)(rO.b, { isShaking: n, intensity: s, children: t })
    );
}
n(46121);
var r_ = n(761508),
    rL = n(329921),
    rw = n(695904),
    rM = n(573238),
    rD = n(107563),
    rG = n(517164),
    rU = n(290863),
    rF = n(894768),
    rB = n(146655),
    rW = n(489379);
function rH(e) {
    let { user: t, currentUser: n, displayProfile: i, guildId: l } = e,
        { live: r, recent: s, stream: o } = (0, rB.A)(t.id),
        { voiceChannel: d, voiceActivity: u } = (0, rW.A)({ userId: t.id, guildId: l }),
        c = (0, a.bG)([rG.A], () => rG.A.isFetchingUserOutbox(t.id)),
        g = t.id === n.id,
        m = (0, a.bG)([rF.A, rU.A], () => {
            let e = g ? rF.A.getStatus() : rU.A.getStatus(t.id);
            return e === T.clD.OFFLINE || e === T.clD.INVISIBLE;
        }),
        f = r.length > 0 || null != o,
        h = i?.private !== !0 && null == o && null == u && null != d,
        p = s.length > 0;
    return {
        live: r,
        recent: s,
        stream: o,
        voiceActivityChannel: h ? d : null,
        isFetching: c,
        isCurrentUser: g,
        hasCurrentActivity: !m && (f || h),
        hasRecentActivity: p,
    };
}
var rV = n(939496),
    rz = n(114212),
    rY = n(960549),
    rK = n(637865),
    rq = n(842241),
    rX = n(287746),
    rZ = n(435558),
    r$ = n(534890),
    rJ = n(308528),
    rQ = n(780964),
    r0 = n(766075),
    r1 = n(92795);
let r6 = [
        () => eU.intl.string(eU.t.madJdE),
        () => eU.intl.string(eU.t.NYmfoP),
        () => eU.intl.string(eU.t.R2PaCg),
        () => eU.intl.string(eU.t.laSR8h),
        () => eU.intl.string(eU.t.DnsJE8),
    ],
    r2 = [
        () => eU.intl.string(eU.t.nFSbeE),
        () => eU.intl.string(eU.t.gTcxOz),
        () => eU.intl.string(eU.t["8T0wYj"]),
        () => eU.intl.string(eU.t.BIHl1g),
        () => eU.intl.string(eU.t["jhBm0+"]),
    ],
    r4 = [
        () => eU.intl.string(eU.t.AyMGXA),
        () => eU.intl.string(eU.t.aAFW7V),
        (e) => eU.intl.formatToPlainString(eU.t.h2g0cM, { name: e }),
        () => eU.intl.string(eU.t.rrYh58),
        () => eU.intl.string(eU.t["HX3K+F"]),
        () => eU.intl.string(eU.t["/yW3aY"]),
        () => eU.intl.string(eU.t["PmL/v0"]),
        () => eU.intl.string(eU.t.IALa3h),
        () => eU.intl.string(eU.t.HRcTFL),
        () => eU.intl.string(eU.t.NuCqPt),
        () => eU.intl.string(eU.t["M1tw+4"]),
        () => eU.intl.string(eU.t.UBm1y2),
        () => eU.intl.string(eU.t.Cu95PQ),
        () => eU.intl.string(eU.t["R/wFuh"]),
        () => eU.intl.string(eU.t.HQPAVT),
        () => eU.intl.string(eU.t.YolGh4),
    ],
    r3 = [
        T.fg2.STEAM,
        T.fg2.PLAYSTATION,
        T.fg2.XBOX,
        T.fg2.TWITCH,
        T.fg2.BATTLENET,
        T.fg2.LEAGUE_OF_LEGENDS,
        T.fg2.EPIC_GAMES,
        T.fg2.RIOT_GAMES,
        T.fg2.ROBLOX,
        T.fg2.SPOTIFY,
        T.fg2.YOUTUBE,
        T.fg2.CRUNCHYROLL,
        T.fg2.BUNGIE,
    ];
function r8(e) {
    let { heading: t, bodyText: n, children: l } = e;
    return (0, i.jsxs)("div", {
        className: r1.Ie,
        children: [
            (0, i.jsxs)("div", {
                className: r1.FS,
                children: [
                    (0, i.jsx)(tQ.D, { variant: "heading-sm/medium", color: "text-strong", children: t }),
                    (0, i.jsx)(eK.E, { variant: "body-sm/normal", color: "text-default", children: n }),
                ],
            }),
            l,
        ],
    });
}
function r7() {
    let e = eU.intl.string(eU.t.RnD2yZ),
        [t] = l.useState(() => ((0, rZ.sample)(r6) ?? r6[0])());
    return (0, i.jsx)(r8, { heading: e, bodyText: t });
}
function r9() {
    let e = eU.intl.string(eU.t.bFgqYJ),
        [t] = l.useState(() => ((0, rZ.sample)(r2) ?? r2[0])());
    return (0, i.jsx)(r8, { heading: e, bodyText: t });
}
function r5(e) {
    let { user: t, guildId: n, channelId: r, onClose: s } = e,
        a = q.Ay.getName(n, r, t),
        o = eU.intl.formatToPlainString(eU.t.sjSitP, { name: a }),
        [d] = l.useState(() => ((0, rZ.sample)(r4) ?? r4[0])(a)),
        u = l.useCallback(() => {
            (rJ.A.openPrivateChannel({ recipientIds: t.id }), s?.());
        }, [t.id, s]);
    return (0, i.jsx)(r8, {
        heading: o,
        bodyText: d,
        children: (0, i.jsx)("div", {
            className: r1.v0,
            children: (0, i.jsx)(tx.FD, { icon: r$.ChatIcon, text: eU.intl.string(eU.t["g33r/P"]), onClick: u }),
        }),
    });
}
function se() {
    let e = (0, ni.Ay)();
    return (0, i.jsx)("div", {
        className: r1.HU,
        children: r3.map((t, n) => {
            let l = ea.A.get(t);
            if (null == l) return null;
            let r = (0, nq.M)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, i.jsx)("img", { src: r, alt: l.name, className: r1.gj }, n);
        }),
    });
}
function st(e) {
    let { onClose: t } = e,
        n = l.useCallback(() => {
            (t?.(), (0, r0.openUserSettings)(rQ.X.CONNECTIONS_CATEGORY));
        }, [t]),
        r = l.useCallback(() => {
            (t?.(), (0, r0.openUserSettings)(rQ.X.CONNECTED_GAMES_CATEGORY));
        }, [t]);
    return (0, i.jsxs)(r8, {
        heading: eU.intl.string(eU.t.VB6LWY),
        bodyText: eU.intl.string(eU.t.KpjsU9),
        children: [
            (0, i.jsx)(se, {}),
            (0, i.jsxs)("div", {
                className: r1.v0,
                children: [
                    (0, i.jsx)(tx.FD, { text: eU.intl.string(eU.t["/Hl24U"]), onClick: n }),
                    (0, i.jsx)(tx.FD, { text: eU.intl.string(eU.t.GTCx0p), onClick: r }),
                ],
            }),
        ],
    });
}
var sn = n(131058);
function si(e) {
    let { children: t, className: n, scrollerRef: l, ...r } = e;
    return (0, i.jsx)(c.Ip, { ref: l, className: s()(sn.gN, n), fade: !0, ...r, children: t });
}
var sl = n(587763);
function sr(e) {
    let { user: t, currentUser: n, displayProfile: l, guildId: r, channelId: s, onClose: a } = e,
        {
            live: o,
            recent: d,
            stream: u,
            voiceActivityChannel: c,
            isFetching: g,
            isCurrentUser: m,
            hasCurrentActivity: f,
            hasRecentActivity: h,
        } = rH({ user: t, currentUser: n, displayProfile: l, guildId: r });
    return f || h || !g
        ? f || h || g
            ? (0, i.jsxs)(si, {
                  className: sl.XG,
                  fade: !0,
                  children: [
                      f
                          ? (0, i.jsx)(rj.A, {
                                heading: eU.intl.string(eU.t.J6STd9),
                                children: (0, i.jsxs)("ul", {
                                    className: sl.kR,
                                    children: [
                                        null != u &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(rq.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    stream: u,
                                                    onClose: a,
                                                }),
                                            }),
                                        o.map((e, l) =>
                                            (0, i.jsx)(
                                                "li",
                                                {
                                                    children: (0, i.jsx)(rY.A, {
                                                        user: t,
                                                        currentUser: n,
                                                        activity: e,
                                                        onClose: a,
                                                    }),
                                                },
                                                `live-${l}`,
                                            ),
                                        ),
                                        null != c &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(rX.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    voiceChannel: c,
                                                    onClose: a,
                                                }),
                                            }),
                                    ],
                                }),
                            })
                          : null,
                      h
                          ? (0, i.jsx)(rj.A, {
                                heading: eU.intl.string(eU.t.jzgEoL),
                                introText: m
                                    ? eU.intl.format(eU.t["4bk9Ak"], {
                                          learnMoreHook: (e, t) =>
                                              (0, i.jsx)(
                                                  tE.Anchor,
                                                  {
                                                      href: eB.A.getArticleURL(T.MVz.ACTIVITY_STATUS_SETTINGS),
                                                      children: e,
                                                  },
                                                  t,
                                              ),
                                      })
                                    : void 0,
                                scrollTargetId: rd.bk.RECENT_ACTIVITY,
                                children: (0, i.jsx)("ul", {
                                    className: sl.kR,
                                    children: d.map((e) =>
                                        (0, i.jsx)(
                                            "li",
                                            { children: (0, i.jsx)(rK.A, { user: t, entry: e, onClose: a }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : m
              ? (0, i.jsx)(st, { onClose: a })
              : (0, i.jsx)(r5, { user: t, guildId: l?.guildId ?? r, channelId: s, onClose: a })
        : (0, i.jsx)("div", {
              className: sl.kR,
              children: Array.from({ length: 8 }).map((e, t) =>
                  (0, i.jsxs)(
                      "div",
                      {
                          className: sl.kr,
                          children: [
                              (0, i.jsx)(rz.F, { width: 60, opacity: 0.08 }),
                              (0, i.jsx)(rz.F, { width: 135, opacity: 0.08 }),
                          ],
                      },
                      t,
                  ),
              ),
          });
}
var ss = n(163126),
    sa = n(913453),
    so = n(229187),
    sd = n(100663),
    su = n(503062),
    sc = n(393213);
function sg(e) {
    let { user: t, guildId: n, channelId: r, onClose: s } = e,
        { analyticsLocations: a } = (0, y.Ay)(),
        { context: o, trackUserProfileAction: d } = (0, $.NJ)(),
        { mutualFriends: u, mutualFriendsCount: c } = (0, sa.A)(t),
        g = (0, ss.A)();
    return (
        l.useEffect(() => {
            (0, so.A)(t.id, g);
        }, [t.id, g]),
        (0, i.jsx)(si, {
            className: sc.XG,
            children:
                null == u
                    ? Array.from({ length: c ?? 10 }).map((e, t) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: sc.D$,
                                  children: [
                                      (0, i.jsx)(rz.F, { width: 40, opacity: 0.08 }),
                                      (0, i.jsx)(rz.F, { width: 135, opacity: 0.08 }),
                                  ],
                              },
                              t,
                          ),
                      )
                    : 0 === u.length
                      ? (0, i.jsx)(r7, {})
                      : u.map((e) => {
                            let { key: t, user: l, status: u } = e;
                            return (0, i.jsx)(
                                su.A,
                                {
                                    user: l,
                                    status: u,
                                    guildId: n,
                                    channelId: r,
                                    onSelect: () => {
                                        (s?.(),
                                            d({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (0, sd.openUserProfileModal)({
                                                ...o,
                                                userId: l.id,
                                                sourceAnalyticsLocations: a,
                                            }));
                                    },
                                },
                                t,
                            );
                        }),
        })
    );
}
var sm = n(398590),
    sf = n(345942),
    sh = n(51943);
function sp(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: l } = (0, $.NJ)(),
        { mutualGuilds: r, isFetching: s } = (0, sa.A)(t);
    return (0, i.jsx)(si, {
        className: sc.XG,
        fade: !0,
        children:
            null == r && s
                ? Array.from({ length: 10 }).map((e, t) =>
                      (0, i.jsxs)(
                          "div",
                          {
                              className: sc.Y7,
                              children: [
                                  (0, i.jsx)(rz.F, { width: 40, opacity: 0.08 }),
                                  (0, i.jsx)(rz.F, { width: 135, opacity: 0.08 }),
                              ],
                          },
                          t,
                      ),
                  )
                : (null != r || s) && r?.length !== 0
                  ? r?.map((e) => {
                        let { guild: r, nick: s } = e;
                        return (0, i.jsx)(
                            sh.A,
                            {
                                user: t,
                                guild: r,
                                nick: s,
                                onSelect: () => {
                                    (l({ action: "PRESS_MUTUAL_GUILD" }), (0, sf.u)(r.id), n(), (0, sm.jH)());
                                },
                            },
                            r.id,
                        );
                    })
                  : (0, i.jsx)(r9, {}),
    });
}
var sx = n(885574),
    sA = n(775602),
    sI = n(669815),
    sv = n(331322),
    sj = n(591410),
    sy = n(881116),
    sb = n(506774),
    sC = n(531913),
    sE = n(503275),
    sS = n(316601),
    sN = n(469958);
let sk = "conjureServerWidgetUpsellDismissals";
var sT = n(763314),
    sP = n(191850);
function sO(e) {
    let { widget: t, guildId: n, currentUser: r, onDismiss: s } = e,
        o = (function (e, t, n) {
            let { applicationId: i } = t,
                r = (0, a.bG)([z.A], () => z.A.getGuild(n)),
                s = (0, eo.h)(i),
                o = (0, a.bG)([sS.A], () => sS.A.getProject(i)?.owner_user_id, [i]),
                d = (0, sE.vm)(o),
                u = (0, sC.A)(e, i),
                c = l.useMemo(() => ({ ...u, isLoading: !1, hasIdentity: !0 }), [u]);
            return null == r || null == s
                ? null
                : { guild: r, application: s, creator: null != o ? d : null, rendererProps: c };
        })(r.id, t, n);
    if (null == o) return null;
    let { guild: d, application: u, creator: c, rendererProps: g } = o;
    return (0, i.jsx)(sv.B, {
        children: (0, i.jsx)(sj.A, {
            user: r,
            widget: t,
            rendererProps: g,
            allowEditing: !1,
            subtle: !0,
            exclusiveCTA: !0,
            cta: (0, i.jsx)(sj.A.Cta, {
                icon: (0, i.jsx)(i1.Ay, { guild: d, size: i1.Ay.Sizes.MEDIUM, active: !0, "aria-hidden": !0 }),
                heading: eU.intl.formatToPlainString(sP.default["uIb8U+"], { guildName: d.name }),
                content: eU.intl.formatToPlainString(sP.default.ZZywee, { applicationName: u.name }),
                attribution:
                    null != c
                        ? (0, i.jsx)(sv.B, {
                              direction: "horizontal",
                              gap: 8,
                              align: "center",
                              children: (0, i.jsx)(sy.A, { creator: c, guildId: n, color: "text-subtle" }),
                          })
                        : null,
                buttons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(rC.Q, {
                            variant: "secondary",
                            textVariant: "body-sm/medium",
                            text: eU.intl.string(eU.t.WAI6xu),
                            onClick: s,
                        }),
                        (0, i.jsx)(t6.$, {
                            variant: "primary",
                            size: "sm",
                            text: eU.intl.string(sP.default.j6ztO0),
                            onClick: () => (0, sT.A)(t.applicationId, s),
                        }),
                    ],
                }),
            }),
        }),
    });
}
function sR(e) {
    let { currentUser: t } = e,
        n = (function (e) {
            let t = (0, sN.A)(),
                [n, i] = l.useState(() => sb.w.get(sk)?.[e] ?? []),
                r = t.find((e) => {
                    let { guildId: t } = e;
                    return !n.includes(t);
                }),
                s = r?.guildId,
                a = r?.widgets[0],
                o = l.useCallback(() => {
                    if (null != s) {
                        let t;
                        ((t = sb.w.get(sk) ?? {}),
                            sb.w.set(sk, { ...t, [e]: [...(t[e] ?? []), s] }),
                            i((e) => [...e, s]));
                    }
                }, [e, s]);
            return null != s && null != a ? { guildId: s, widget: a, dismiss: o } : null;
        })(t.id);
    return null == n
        ? null
        : (0, i.jsx)(sO, { widget: n.widget, guildId: n.guildId, currentUser: t, onDismiss: n.dismiss }, n.guildId);
}
function s_() {
    let e = (0, a.bG)([C.default], () => C.default.getCurrentUser());
    return null != e ? (0, i.jsx)(sR, { currentUser: e }, e.id) : null;
}
var sL = n(840387),
    sw = n(201718),
    sM = n(615405),
    sD = n(633075),
    sG = n(813832),
    sU = n(600761),
    sF = n(667049);
function sB(e) {
    let t = (0, eg.A)(e),
        n = tX();
    return t && !n;
}
var sW = n(410453);
function sH(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: r } = (0, $.NJ)(),
        a = l.useCallback(() => {
            (r({ action: "PRESS_ADD_WIDGET" }),
                (0, nH.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e(546547),
                            n.e(487697),
                            n.e(752516),
                            n.e(360545),
                        ]).then(n.bind(n, 414904));
                        return (t) => (0, i.jsx)(e, { ...t, trackUserProfileEditAction: r });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [r]);
    return (0, i.jsxs)("div", {
        className: s()(sW.w, t),
        children: [
            (0, i.jsx)(eK.E, {
                className: sW.D,
                variant: "body-sm/semibold",
                color: "text-subtle",
                children: eU.intl.string(eU.t.OYlggR),
            }),
            (0, i.jsx)(t6.$, {
                icon: tN.PlusSmallIcon,
                text: eU.intl.string(eU.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: a,
            }),
        ],
    });
}
var sV = n(192),
    sz = n(704824),
    sY = n(382483),
    sK = n(385113),
    sq = n(334074),
    sX = n(657718),
    sZ = n(478016);
function s$(e) {
    let { user: t, application: n, onDismiss: r } = e,
        { trackUserProfileEditAction: s } = (0, $.NJ)(),
        a = l.useMemo(() => new sD.R({ applicationId: n.id }), [n.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, rn.Y5)(a),
                s({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, ro.XA)(rd.jM.WIDGET_ADDED));
        }, [a, s]);
    return (0, i.jsx)(sj.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, i.jsx)(sj.A.Cta, {
            showSuggestedForYou: !0,
            heading: eU.intl.format(eU.t.OIzLCy, { applicationName: n.name }),
            content: eU.intl.format(eU.t.BQySru, { applicationName: n.name }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(tC.m, {
                        text: eU.intl.string(eU.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, i.jsx)(sX.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: tJ.XSmallIcon,
                            "aria-label": eU.intl.string(eU.t.WAI6xu),
                            onClick: () => {
                                r(eG.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(tC.m, {
                        text: eU.intl.string(eU.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(sX.S, {
                            variant: "primary",
                            size: "sm",
                            icon: sZ.CheckmarkSmallIcon,
                            "aria-label": eU.intl.formatToPlainString(eU.t.KfGahB, { applicationName: n.name }),
                            onClick: () => {
                                (r(eG.i.TAKE_ACTION), o());
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function sJ() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: n,
        markAsDismissed: r,
    } = (function () {
        let e = (0, a.yK)([sK.A], () => sK.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, sY.Wq)();
        }, []);
        let t = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
            n = (0, eo.A)(e),
            { tokens: i, fetched: r } = (0, sz.j)(e),
            s = (0, sF.A)(t?.id),
            o = null == t || null == e || null == i || !r,
            d = l.useMemo(
                () =>
                    o
                        ? []
                        : n.filter(
                              (e) =>
                                  !(null == e || s.some((t) => t instanceof sD.R && t.applicationId === e.id)) &&
                                  null != i.find((t) => t.application.id === e.id),
                          ),
                [o, n, i, s],
            ),
            { eligibleToShow: u, markAsDismissed: c } = (0, sq.hj)({
                applications: d,
                dismissibleContent: eS.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: sq.SH,
            }),
            g = l.useMemo(() => d.filter((e) => u.includes(e.id)), [d, u]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: g, markAsDismissed: c };
    })();
    if (e || null == t) return null;
    let s = n[0];
    return null == s ? null : (0, i.jsx)(s$, { user: t, application: s, onDismiss: (e) => r([s.id], e) }, s.id);
}
var sQ = n(675816),
    s0 = n(575593),
    s1 = n(44120),
    s6 = n(778705),
    s2 = n(87719),
    s4 = n(317560),
    s3 = n(306984),
    s8 = n(661492);
let s7 = { sentGifts: {} };
function s9(e, t) {
    return `${e}:${t}`;
}
class s5 extends a.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((s7 = e), this.cleanupExpiredGifts());
    }
    getState() {
        return s7;
    }
    hasSentGift(e, t) {
        let n = s9(e, t),
            i = s7.sentGifts[n];
        return !(null == i || new Date(i.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let n = s9(e, t),
            i = s7.sentGifts[n];
        return null == i || new Date(i.expiresAt) < new Date() ? null : i;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, n] of Object.entries(s7.sentGifts)) new Date(n.expiresAt) < e && delete s7.sentGifts[t];
    }
}
let ae = new s5(S.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = s9(e.skuId, e.recipientId),
            n = new Date(),
            i = new Date(n.getTime() + 1728e5);
        s7.sentGifts[t] = {
            skuId: e.skuId,
            recipientId: e.recipientId,
            sentAt: n.toISOString(),
            expiresAt: i.toISOString(),
        };
    },
});
var at = n(88940),
    an = n(146423),
    ai = n(590180),
    al = n(301198),
    ar = n(349031),
    as = n(124557),
    aa = n(471505),
    ao = n(376932);
function ad(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function au(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([lq.default], () => lq.default.getId()),
        {
            isWishlisted: d,
            isBusy: u,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, aa.G)({ userId: o, sku: n, location: l, onError: r }),
        m = ap();
    return (0, i.jsx)("div", {
        className: ao.U,
        style: ad(t),
        children: (0, i.jsx)(al._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: d,
            isBusy: u,
            isFirstTimeWishlister: c,
            onClick: g,
            tooltipConfig: m,
            ...s,
        }),
    });
}
function ac(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([lq.default], () => lq.default.getId()),
        {
            isWishlisted: d,
            isBusy: u,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, as.c)({ userId: o, skuId: n.id, location: l, onError: r }),
        m = ap();
    return (0, i.jsx)("div", {
        className: ao.U,
        style: ad(t),
        children: (0, i.jsx)(al._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: d,
            isBusy: u,
            isFirstTimeWishlister: c,
            onClick: g,
            tooltipConfig: m,
            ...s,
        }),
    });
}
function ag(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([lq.default], () => lq.default.getId()),
        {
            isWishlisted: d,
            isBusy: u,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, as.c)({ userId: o, skuId: n.id, location: l, onError: r }),
        m = ap();
    return (0, i.jsx)("div", {
        className: ao.U,
        style: ad(t),
        children: (0, i.jsx)(al._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: d,
            isBusy: u,
            isFirstTimeWishlister: c,
            onClick: g,
            tooltipConfig: m,
            ...s,
        }),
    });
}
function am(e) {
    let { spec: t, product: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([lq.default], () => lq.default.getId()),
        {
            isWishlisted: d,
            isBusy: u,
            isFirstTimeWishlister: c,
            handleToggle: g,
            specificProductOrVariant: m,
            isPurchased: f,
        } = (0, ar.z)({ userId: o, product: n, location: l, onError: r }),
        h = (0, s8.q)(m),
        p = f && !d,
        x = !h || p,
        A = ap(h && p ? eU.intl.string(eU.t.nKA6v8) : void 0);
    return (0, i.jsx)("div", {
        className: ao.U,
        style: ad(t),
        children: (0, i.jsx)(al._, {
            skuId: m.skuId,
            productName: m.name,
            size: t.wishlistButtonSize,
            disabled: x,
            isWishlisted: d,
            isBusy: u,
            isFirstTimeWishlister: c,
            onClick: g,
            tooltipConfig: A,
            ...s,
        }),
    });
}
function af(e) {
    let { sku: t, isCardHovered: n, ...l } = e,
        r = (0, a.bG)([ai.A], () => ai.A.getProduct(t.id));
    switch (t.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(au, { sku: t, isVisuallyHidden: !n, ...l });
        case T.EZt.COLLECTIBLES:
            if (null == r) return (0, i.jsx)(ac, { sku: t, isVisuallyHidden: !n, ...l });
            return (0, i.jsx)(am, { product: r, isVisuallyHidden: !n, ...l });
        case T.EZt.PREMIUM:
            return (0, i.jsx)(ag, { sku: t, isVisuallyHidden: !n, ...l });
        default:
            return null;
    }
}
function ah(e) {
    let { location: t, ...n } = e;
    return (0, i.jsx)(af, { location: t, ...n });
}
function ap(e) {
    return l.useMemo(
        () => ({
            firstTimeBody: eU.intl.string(eU.t["5B3F2W"]),
            add: eU.intl.string(eU.t.Hcgz2S),
            remove: eU.intl.string(eU.t["19b82d"]),
            disabled: e,
        }),
        [e],
    );
}
var ax = n(460442),
    aA = n(662349),
    aI = n(802290),
    av = n(479026),
    aj = n(636374),
    ay = n(699976),
    ab = n(181554),
    aC = n(880465);
let aE = ay.Z.SIZE_133;
function aS(e) {
    var t;
    let n,
        {
            item: r,
            wishlistOwner: a,
            guildId: o,
            currentUser: d,
            style: u,
            isDragging: c,
            dragHandle: g,
            skuPreviewStyle: m,
            skuPreviewHoverStyle: f,
            skuAssetHoverClassName: h,
            isHoveringOrFocusing: p,
            setIsHoveringOrFocusing: x,
            onDetailsClick: A,
            onPurchaseClick: I,
            wishlistId: v,
            isItemOwned: j,
            cardBackdrop: y,
            isNew: b,
            onClick: C,
            showShopUnpublishLabel: E,
        } = e,
        S = l.useRef(null),
        N = l.useId(),
        k = (0, at.A)(E ? r.shopUnpublishedAt : void 0),
        T = l.useRef(x);
    (l.useEffect(() => {
        T.current = x;
    }, [x]),
        l.useEffect(() => {
            let e = S.current;
            if (null != e)
                return (
                    e.addEventListener("focusin", t),
                    () => {
                        e.removeEventListener("focusin", t);
                    }
                );
            function t() {
                T.current(!1);
            }
        }, []));
    let { trackUserProfileWishlistAction: P } = (0, $.NJ)(),
        O = l.useCallback(() => {
            (C?.(),
                null != v &&
                    (P({
                        wishlistId: v,
                        action: rd.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: r.sku.id,
                        productLines: new Set([r.sku.productLine]),
                    }),
                    A()));
        }, [A, r.sku, v, P, C]),
        R = l.useCallback(() => {
            (C?.(),
                null != v &&
                    (P({
                        wishlistId: v,
                        action: rd.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: r.sku.id,
                        productLines: new Set([r.sku.productLine]),
                    }),
                    I()));
        }, [I, r.sku, v, P, C]),
        _ = l.useCallback(() => {
            ((0, ro.XA)(rd.jM.SOMETHING_WENT_WRONG), nn.O.announce(eU.intl.string(eU.t.F8FvUy)));
        }, []),
        L = null != g ? (0, i.jsx)("div", { ref: S, className: ab.BU, children: g }) : null,
        {
            onBodyClick: w,
            onOverlayClick: M,
            showOverlayButton: D,
            routesToGift: G,
            label: U,
            icon: F,
        } = (0, aj.P)({ wishlistOwner: a, isOwned: j, onDetailsClick: O, onPurchaseClick: R }),
        B = p && D;
    return (0, i.jsxs)("div", {
        className: ab.kL,
        children: [
            (0, i.jsxs)(an.A, {
                sku: r.sku,
                user: a,
                guildId: o,
                spec: aE,
                cardStyle: s()(ab.Nr, u),
                skuPreviewStyle: s()(ab.ev, { [ab.go]: j && !p }, m, B ? f : void 0),
                skuAssetClassName: B ? h : void 0,
                disableHoverOrFocus: c,
                onHoverOrFocusChange: x,
                onClick: w,
                "aria-label":
                    ((t = r.sku),
                    (n = G ? (0, s8.T)(t) : eU.intl.formatToPlainString(eU.t.ZBB4Ty, { productName: (0, s8.T)(t) })),
                    !0 === b ? eU.intl.formatToPlainString(eU.t.s9RZ1r, { label: n }) : n),
                "aria-describedby": null != k ? N : void 0,
                topLeftContent: null != k ? (0, i.jsx)(aI.A, { id: N, countdown: k, variant: "profile" }) : void 0,
                children: [
                    !0 === b && (0, i.jsx)(rL.N, { className: ab.Pf }),
                    y,
                    D && (0, i.jsx)(aA.A, { spec: aE, onClick: M, isHoveringOrFocusing: p, label: U, icon: F }),
                    j && (0, i.jsx)(ax.gS, { isHoveringOrFocusing: p }),
                    a.id === d.id &&
                        null != v &&
                        (0, i.jsx)(ah, {
                            sku: r.sku,
                            isCardHovered: p,
                            spec: aE,
                            onError: _,
                            location: "UserProfileWishlistItemCardBase",
                        }),
                ],
            }),
            L,
        ],
    });
}
function aN(e) {
    let { item: t, isItemOwned: n, wishlistOwner: r, currentUser: s, analyticsLocations: a, ...o } = e,
        d = l.useCallback(() => {
            (0, s4.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: r,
                giftingOrigin: i_.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [t.sku.id, t.sku.applicationId, r, a]),
        u = l.useCallback(() => {
            let e = r.id === s.id;
            (0, s3.a)(
                t.sku,
                { isGift: !e, giftRecipient: r, giftingOrigin: i_.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...a, j.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, r, s.id, a]);
    return (0, i.jsx)(aS, {
        item: t,
        wishlistOwner: r,
        isItemOwned: n,
        onDetailsClick: d,
        onPurchaseClick: u,
        analyticsLocations: a,
        currentUser: s,
        ...o,
    });
}
function ak(e) {
    let {
            item: t,
            wishlistOwner: n,
            isItemOwned: r,
            analyticsLocations: a,
            currentUser: o,
            isHoveringOrFocusing: d,
            ...u
        } = e,
        c = (0, av.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: i_.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: a,
        }),
        g = l.useMemo(
            () => () => {
                let e = n.id === o.id;
                (0, s1.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: i_.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: a ?? [],
                    giftRecipient: n,
                });
            },
            [t.sku, n, o.id, a],
        ),
        m = t.sku.tenantMetadata?.collectibles?.type,
        f = m === s0.R.AVATAR_DECORATION || m === s0.R.PROFILE_FRAME;
    return (0, i.jsx)(aS, {
        item: t,
        wishlistOwner: n,
        isItemOwned: r,
        currentUser: o,
        onDetailsClick: c,
        onPurchaseClick: g,
        isHoveringOrFocusing: d,
        skuPreviewHoverStyle: s()({ [ab.mn]: f }),
        analyticsLocations: a,
        ...u,
    });
}
function aT(e) {
    let {
            item: t,
            isItemOwned: n,
            wishlistOwner: r,
            currentUser: s,
            analyticsLocations: a,
            isHoveringOrFocusing: o,
            ...d
        } = e,
        u = l.useCallback(() => {
            if (n) return void (0, s2.x)(iT.M);
            let e = r.id === s.id,
                i = t.skuId;
            (0, s6.A)({
                isGift: !e,
                giftRecipient: r,
                giftingOrigin: i_.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: i,
                analyticsLocations: a,
            });
        }, [n, t.skuId, r, s.id, a]);
    return (0, i.jsx)(aS, {
        item: t,
        wishlistOwner: r,
        isItemOwned: n,
        currentUser: s,
        onDetailsClick: u,
        onPurchaseClick: u,
        isHoveringOrFocusing: o,
        skuPreviewStyle: aC.MO,
        skuAssetHoverClassName: aC.iR,
        analyticsLocations: a,
        ...d,
    });
}
function aP(e) {
    let { item: t, wishlistOwner: n, wishlistId: r, analyticsLocations: s, ...o } = e,
        { analyticsLocations: d } = (0, y.Ay)(
            ...(s ?? []),
            t.sku?.productLine === T.EZt.SOCIAL_LAYER_GAME_ITEM ? j.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        u = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        [c, g] = l.useState(!1),
        m = (0, a.bG)([ae], () => ae.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        f = l.useMemo(
            () => t.skuProductLine !== T.EZt.PREMIUM && (!0 === t.isOwned || m),
            [t.isOwned, t.skuProductLine, m],
        );
    if (null == t.sku || null == u) return null;
    switch (t.sku.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(aN, {
                item: t,
                analyticsLocations: d,
                isHoveringOrFocusing: c,
                setIsHoveringOrFocusing: g,
                currentUser: u,
                isItemOwned: f,
                wishlistOwner: n,
                wishlistId: r,
                ...o,
            });
        case T.EZt.COLLECTIBLES:
            return (0, i.jsx)(ak, {
                item: t,
                analyticsLocations: d,
                isHoveringOrFocusing: c,
                setIsHoveringOrFocusing: g,
                currentUser: u,
                isItemOwned: f,
                wishlistOwner: n,
                wishlistId: r,
                ...o,
            });
        case T.EZt.PREMIUM:
            return (0, i.jsx)(aT, {
                item: t,
                analyticsLocations: d,
                isHoveringOrFocusing: c,
                setIsHoveringOrFocusing: g,
                currentUser: u,
                isItemOwned: f,
                wishlistOwner: n,
                wishlistId: r,
                ...o,
            });
        default:
            return null;
    }
}
var aO = n(788593),
    aR = n(132085),
    a_ = n(741934),
    aL = n(766529),
    aw = n(998556);
function aM(e) {
    let { scrollerRef: t } = e,
        {
            isDragging: n,
            item: r,
            sourceClientOffset: s,
        } = (0, sQ.V)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        o = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        d = (0, lY.VU)(),
        u = l.useMemo(
            () =>
                null == o || null == r
                    ? null
                    : (function (e, t) {
                          let { id: n, itemType: l, itemPreviewProps: r } = e;
                          if ("WIDGET" === l && r?.widget != null) {
                              let { widget: e, getWidth: n } = r,
                                  l = n?.() ?? 432;
                              return (0, i.jsx)("div", {
                                  className: aw.dt,
                                  style: { width: l },
                                  children: (0, i.jsx)(aL.u, {
                                      widget: e,
                                      user: t,
                                      allowEditing: !1,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("GAME_COVER" === l && r?.gameName != null) {
                              let { imageSrc: e, iconSrc: l, gameName: s, getWidth: a } = r,
                                  o = a?.() ?? 90;
                              return (0, i.jsx)("div", {
                                  style: { width: o },
                                  children: (0, i.jsx)(aO.A, {
                                      className: aw.XJ,
                                      imageSrc: e,
                                      iconSrc: l,
                                      gameName: s,
                                      gameId: n,
                                      userId: t?.id,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("GAME_DETAILS_CARD" === l && r?.game != null && r?.widgetType != null) {
                              let { game: e, widgetType: n, getWidth: l } = r,
                                  s = l?.() ?? 400;
                              return (0, i.jsx)("div", {
                                  className: aw.xB,
                                  style: { width: s },
                                  children: (0, i.jsx)(aR.A, {
                                      user: t,
                                      widgetType: n,
                                      game: e,
                                      allowEditing: !1,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("WIDGET_CLIP" === l && r?.item != null) {
                              let { item: e, getWidth: t } = r,
                                  n = t?.() ?? 96;
                              return (0, i.jsx)("div", {
                                  className: aw.Zo,
                                  style: { width: n },
                                  children: (0, i.jsx)(a_.A, { item: e, ringSize: "sm" }),
                              });
                          }
                          if ("WISHLIST_ITEM" === l && r?.item != null) {
                              let { item: e } = r;
                              return (0, i.jsx)("div", {
                                  className: aw.Xm,
                                  children: (0, i.jsx)(aP, {
                                      item: e,
                                      wishlistOwner: t,
                                      wishlistId: null,
                                      isDragging: !0,
                                  }),
                              });
                          }
                          return null;
                      })(r, o),
            [r, o],
        ),
        c = l.useRef(null),
        g = l.useCallback(() => {
            if (null == t.current) return;
            let e = t.current.getBoundingClientRect();
            c.current = { x: e.left, y: e.top };
        }, [t]);
    if (
        (l.useEffect(() => {
            if (!n) {
                c.current = null;
                return;
            }
            null == c.current && g();
        }, [n, g]),
        !0 !== n || null == s || null == u)
    )
        return null;
    null == c.current && g();
    let { x: m, y: f } = c.current ?? { x: 0, y: 0 },
        h = s.x - m - 60 * !!d,
        p = s.y - f;
    return (0, i.jsx)("div", { className: aw.kL, style: { transform: `translate3d(${h}px, ${p}px, 0)` }, children: u });
}
var aD = n(151869);
n(839272);
var aG = n(540185);
function aU(e) {
    let t,
        { addableWidgets: n, applicationAffinityData: i, hasClips: l } = e,
        r = [],
        s = new Set();
    function a(e) {
        s.has(e.getUniqueKey()) || (r.push(e), s.add(e.getUniqueKey()));
    }
    function o(e) {
        let t = n.find((t) => t.type === e);
        null != t && a(t);
    }
    function d(e) {
        let t = n.find((t) => (0, sD.E)(t, e));
        null != t && a(t);
    }
    return (
        ((t = Date.now()),
        i
            .filter((e) => {
                let { isConnected: n, lastPlayedAt: i } = e;
                return n || (null != i && t - i < 7776e6);
            })
            .toSorted((e, t) => {
                if (e.isConnected !== t.isConnected) return e.isConnected ? -1 : 1;
                let n = t.totalPlayDuration - e.totalPlayDuration;
                return 0 !== n ? n : (t.lastPlayedAt ?? 0) - (e.lastPlayedAt ?? 0);
            })
            .slice(0, 2)
            .map((e) => {
                let { applicationId: t } = e;
                return t;
            })).forEach(d),
        l && o(aG.x.CLIPS_GALLERY),
        o(aG.x.FAVORITE_GAMES),
        o(aG.x.PLAYED_GAMES),
        d("1346069614634864772"),
        o(aG.x.CURRENT_GAMES),
        o(aG.x.WANT_TO_PLAY_GAMES),
        d("1323482066758930452"),
        r.slice(0, 6)
    );
}
let aF = (0, n(945810).mj)({
    name: "2026-10-user-profile-widget-suggestions",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0, suggestionsLocation: "below" }, 2: { enabled: !0, suggestionsLocation: "above" } },
});
var aB = n(116281),
    aW = n(661439),
    aH = n(90165);
function aV(e) {
    let t = (0, a.bG)([sK.A], () => sK.A.getFeaturedApplicationIds()),
        n = l.useMemo(() => {
            let n = new Set(t);
            return e
                .filter((e) => e instanceof sD.R)
                .map((e) => e.applicationId)
                .filter((e) => n.has(e));
        }, [t, e]),
        i = (0, eo.A)(n),
        r = l.useMemo(() => n.map((e, t) => i[t]?.parentId ?? e), [n, i]),
        { tokens: s } = (0, sz.j)(r),
        o = n.length > 0;
    l.useEffect(() => {
        o && (0, aW.X)();
    }, [o]);
    let d = l.useMemo(() => i.map((e) => e?.getCanonicalGameId() ?? null), [i]),
        u = (0, a.yK)([aH.A], () => d.map((e) => (null != e ? aH.A.getGameDuration(e) : 0))),
        c = (0, a.yK)([aH.A], () => d.map((e) => (null != e ? aH.A.getLastPlayedDateTime(e) : null)));
    return l.useMemo(() => {
        let e = new Set(s.map((e) => e.application.id)),
            t = [];
        for (let i = 0; i < n.length; i++)
            t.push({
                applicationId: n[i],
                isConnected: e.has(r[i]),
                totalPlayDuration: u[i] ?? 0,
                lastPlayedAt: c[i] ?? null,
            });
        return t;
    }, [n, r, c, s, u]);
}
var az = n(224360),
    aY = n(942742),
    aK = n(843393);
function aq(e) {
    return e.getUniqueKey();
}
function aX(e) {
    let { children: t, onWidgetAddedFromBelow: n } = e,
        r = (0, aB.A)(),
        s = aV(r),
        o = (0, a.bG)([rl.Ay], () => rl.Ay.hasClips()),
        d = l.useMemo(() => aU({ addableWidgets: r, applicationAffinityData: s, hasClips: o }), [r, s, o]),
        u = d.length >= 2;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u && (0, i.jsx)(aZ, { suggestions: d, suggestionsLocation: "above" }),
            t,
            u && (0, i.jsx)(aZ, { suggestions: d, suggestionsLocation: "below", onWidgetAdded: n }),
        ],
    });
}
function aZ(e) {
    let t = aF.useConfig({ location: "UserProfileModalV2WidgetSuggestions" });
    return t.enabled && t.suggestionsLocation === e.suggestionsLocation ? (0, i.jsx)(a$, { ...e }) : null;
}
function a$(e) {
    let { suggestions: t, suggestionsLocation: n, onWidgetAdded: r } = e,
        { trackUserProfileEditAction: a } = (0, $.NJ)(),
        { focusAddedWidget: o } = (0, sV.r)(),
        [d, u] = (0, eD.kn)([eS.M.USER_PROFILE_WIDGET_SUGGESTIONS], { bypassAutoDismiss: !0 }),
        c = l.useCallback(
            (e, t) =>
                (0, i.jsx)(aY.A, {
                    widget: e,
                    size: "small",
                    compact: !0,
                    listItemProps: t,
                    onAddWidget: () => {
                        (o(e.getUniqueKey()), r?.());
                    },
                    trackUserProfileEditAction: a,
                }),
            [o, r, a],
        );
    return d !== eS.M.USER_PROFILE_WIDGET_SUGGESTIONS
        ? null
        : (0, i.jsx)(az.A, {
              className: s()(aK.uW, "above" === n && aK.G1),
              compactHeader: !0,
              headingVariant: "below" === n ? "body-xs/normal" : void 0,
              onDismiss: () => u(eG.i.USER_DISMISS),
              children: (0, i.jsx)(aD.A, {
                  items: t,
                  getItemKey: aq,
                  renderItem: c,
                  gap: 8,
                  edgeFade: 80,
                  scrollStep: "item",
                  iconButtonSize: "sm",
                  className: aK.Dk,
                  scrollerClassName: aK.jv,
                  itemClassName: aK.Vs,
                  actionsClassName: aK.o1,
                  maintainFocusOnReorder: !0,
                  "aria-label": eU.intl.string(eU.t["+EIBSA"]),
              }),
          });
}
var aJ = n(269507);
function aQ(e) {
    let { widgets: t, trackUserProfileEditAction: n } = e;
    return (0, i.jsx)("ul", {
        className: aJ.ZW,
        "aria-label": eU.intl.string(eU.t["+EIBSA"]),
        children: t.map((e) =>
            (0, i.jsx)(
                "li",
                { children: (0, i.jsx)(aY.A, { widget: e, size: "small", trackUserProfileEditAction: n }) },
                e.getUniqueKey(),
            ),
        ),
    });
}
function a0(e) {
    let { trackUserProfileEditAction: t } = e,
        r = (0, aB.A)(),
        s = aV(r),
        o = aU({ addableWidgets: r, applicationAffinityData: s, hasClips: (0, a.bG)([rl.Ay], () => rl.Ay.hasClips()) }),
        d = l.useCallback(() => {
            (t({ action: "PRESS_ADD_WIDGET" }),
                (0, nH.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e(546547),
                            n.e(487697),
                            n.e(752516),
                            n.e(360545),
                        ]).then(n.bind(n, 414904));
                        return (n) => (0, i.jsx)(e, { ...n, trackUserProfileEditAction: t });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [t]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(aQ, { widgets: o, trackUserProfileEditAction: t }),
            (0, i.jsx)(t6.$, { text: eU.intl.string(eU.t["/NKLK5"]), size: "sm", variant: "secondary", onClick: d }),
        ],
    });
}
function a1(e) {
    let { userId: t } = e,
        { trackUserProfileAction: n, trackUserProfileEditAction: r } = (0, $.NJ)(),
        s = l.useRef(!1),
        o = (0, a.bG)([Q.A], () => Q.A.getUserProfile(t)?.fetchError != null, [t]);
    return (
        l.useEffect(() => {
            s.current || o || (n({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (s.current = !0));
        }, [o, n]),
        (0, i.jsxs)("div", {
            className: aJ.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: aJ.FS,
                    children: [
                        (0, i.jsx)(tQ.D, {
                            variant: "heading-sm/medium",
                            color: "text-strong",
                            children: eU.intl.string(eU.t["oqalC+"]),
                        }),
                        (0, i.jsx)(eK.E, {
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: o ? eU.intl.string(eU.t["+W59o5"]) : eU.intl.string(eU.t.O9SQ1c),
                        }),
                    ],
                }),
                !o &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(s_, {}), (0, i.jsx)(a0, { trackUserProfileEditAction: r })],
                    }),
            ],
        })
    );
}
var a6 = n(366209);
function a2() {
    return (0, i.jsxs)("div", {
        className: a6.mJ,
        children: [
            (0, i.jsx)(sx.CircleInformationIcon, { size: "xs" }),
            (0, i.jsx)(eK.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                children: eU.intl.string(eU.t["7blcz6"]),
            }),
        ],
    });
}
function a4(e) {
    let { user: t, guildId: n, channelId: r, onWidgetAddedFromBelow: s } = e,
        o = (0, sF.A)(t.id),
        d = sB(t.id),
        u = (function () {
            let [e, t] = (0, a.yK)([sM.A], () => [sM.A.ipCountryCode, sM.A.ipCountryCodeRequest]),
                n = (0, sL.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && n && (0, sI.xe)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        c = 0 === o.length && d,
        g = l.useMemo(() => o.filter(l5.fu), [o]),
        m = l.useMemo(() => o.filter((e) => e instanceof sD.R), [o]);
    function f() {
        let e = o.map((e, l) =>
            (0, i.jsx)(
                aL.u,
                { widget: e, user: t, guildId: n, channelId: r, allowEditing: d, index: l },
                e.getUniqueKey(),
            ),
        );
        return (0, i.jsxs)(i.Fragment, {
            children: [
                d &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(sH, { className: a6.cG }),
                            u && (0, i.jsx)(a2, {}),
                            (0, i.jsx)(sJ, {}),
                            (0, i.jsx)(s_, {}),
                        ],
                    }),
                d ? (0, i.jsx)(aX, { onWidgetAddedFromBelow: s, children: e }) : e,
            ],
        });
    }
    return ((0, sG.Y)(d, g),
    !(function (e, t) {
        let n = l.useMemo(() => t.map((e) => e.applicationId), [t]);
        (0, eo.A)(n);
        let { data: i, refetch: r } = (0, sw.P)(e),
            s = l.useRef(null !== i);
        l.useEffect(() => {
            s.current && ((s.current = !1), r());
        }, [r]);
    })(t.id, m),
    c)
        ? (0, i.jsx)(a1, { userId: t.id })
        : d
          ? (0, i.jsx)(sV.D, { children: f() })
          : f();
}
function a3(e) {
    var t;
    let n,
        r,
        { user: o, ...d } = e,
        u = l.useRef(null);
    (0, sU.i)({ containerRef: u });
    let c = l.useCallback(() => {
            requestAnimationFrame(() => {
                u.current?.scrollTo({ top: 0, behavior: sA.Ay.useReducedMotion ? "auto" : "smooth" });
            });
        }, []),
        g = ((t = o.id), (n = (0, a.bG)([lq.default], () => lq.default.getId() === t)), (r = rm()), n && null != r);
    return (0, i.jsxs)(si, {
        "data-scroller": !0,
        scrollerRef: u,
        className: s()(a6.XG, { [a6.az]: g }),
        fade: !0,
        children: [(0, i.jsx)(aM, { scrollerRef: u }), (0, i.jsx)(a4, { user: o, onWidgetAddedFromBelow: c, ...d })],
    });
}
var a8 = n(115560),
    a7 = n(777480),
    a9 = n(825484),
    a5 = n(952270),
    oe = n(444927),
    ot = n(895360),
    on = n(267102),
    oi = n(521440),
    ol = n(721932),
    or = n(832163),
    os = n(501838),
    oa = n(44724),
    oo = n(808247),
    od = n(673843),
    ou = n(855052),
    oc = n(342442),
    og = n(658946),
    om = n(535089),
    of = n(698253),
    oh = n(174947),
    op = n(840411),
    ox = n(387325),
    oA = n(416415),
    oI = n(419731),
    ov = n(451395),
    oj = n(823016),
    oy = n(100741);
function ob(e) {
    let { item: t, index: n, wishlistId: l, onReorder: r, children: s } = e,
        { manageFocusOnReorder: a } = (0, oj.r)();
    return (0, i.jsx)(ov.mG, {
        index: n,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": eU.intl.formatToPlainString(eU.t["7SnyMA"], { positionNumber: n + 1 }),
        onReorder: r,
        onEnd: () => a(String(t.skuId)),
        className: oy.C,
        dropBeforeClassName: oy.A,
        dropAfterClassName: oy.Ze,
        draggingClassName: oy.Id,
        children: (0, i.jsx)("div", { className: oy.An, children: s }),
    });
}
let oC = l.memo(function (e) {
    let {
            item: t,
            index: n,
            profileOwner: r,
            guildId: s,
            showEditingControls: a,
            wishlistId: o,
            isDragging: d,
            onReorder: u,
            isNew: c,
            onClick: g,
            showShopUnpublishLabel: m,
        } = e,
        { registerDragHandleRef: f } = (0, oj.r)(),
        h = l.useCallback(() => {
            g(t.skuId);
        }, [g, t.skuId]),
        p = l.useMemo(
            () =>
                a
                    ? (0, i.jsx)(ov.jV, {
                          buttonRef: f(String(t.skuId)),
                          className: oy.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, f, t.skuId],
        ),
        x = l.useMemo(
            () =>
                (0, i.jsx)(aP, {
                    item: t,
                    wishlistOwner: r,
                    guildId: s,
                    wishlistId: o,
                    isDragging: d,
                    dragHandle: p,
                    isNew: c,
                    onClick: h,
                    showShopUnpublishLabel: m,
                }),
            [t, r, s, d, p, o, c, h, m],
        );
    return a
        ? (0, i.jsx)("li", {
              children: (0, i.jsx)(ob, { item: t, index: n, wishlistId: o, onReorder: u, children: x }),
          })
        : (0, i.jsx)("li", { children: x });
});
function oE(e) {
    let { items: t, profileOwner: n, guildId: r, showEditingControls: s, ackedAt: o } = e,
        d = C.default.getCurrentUser(),
        { labelsEnabled: u, reorderEnabled: c } = (0, ox.Zf)("UserProfileModalV2WishlistGrid"),
        g = l.useMemo(() => t.filter(oh.xZ).map((e) => e.shopUnpublishedAt), [t]),
        m = (0, at.N)(g),
        { defaultWishlistId: f } = (0, a.cf)([Q.A], () => ({ defaultWishlistId: Q.A.getFirstWishlistId(n.id) })),
        h = (0, oA.Ay)(t, c && null != d && d.id !== n.id),
        { isDragging: p } = (0, sQ.V)((e) => ({ isDragging: e.isDragging() })),
        [x, A] = l.useState([]),
        I = l.useCallback((e) => {
            A((t) => (t.includes(e) ? t : [...t, e]));
        }, []),
        v = l.useCallback(
            (e, t) => {
                if (e === t || null == f || 0 === h.length || e < 0 || e >= h.length || t < 0 || t >= h.length) return;
                let n = rD.A.getWishlist(f);
                if (null == n) return;
                let i = h[e],
                    { newWishlistData: l, previousSkuId: r, nextSkuId: s } = (0, op.Ap)(n, h, e, t);
                oo.A.reorderWishlistItem(f, i.skuId, { previousSkuId: r, nextSkuId: s, newWishlistData: l });
            },
            [f, h],
        );
    if (null == d || null == f) return null;
    let j = (0, i.jsxs)(i.Fragment, {
        children: [
            m && (0, i.jsx)(ox.m4, { location: "UserProfileModalV2WishlistGrid" }),
            (0, i.jsx)("ul", {
                className: oy.Vg,
                children: h.map((e, t) =>
                    (0, i.jsx)(
                        oC,
                        {
                            item: e,
                            index: t,
                            profileOwner: n,
                            guildId: r,
                            showEditingControls: s,
                            wishlistId: f,
                            isDragging: p,
                            onReorder: v,
                            isNew: (0, oI.f3)(e.addedAt, o) && !x.includes(e.skuId),
                            onClick: I,
                            showShopUnpublishLabel: u,
                        },
                        e.skuId,
                    ),
                ),
            }),
        ],
    });
    return s ? (0, i.jsx)(oj.B, { emptyListFallbackRef: null, children: j }) : j;
}
function oS(e) {
    let t = C.default.getCurrentUser()?.id,
        n = null != t && t !== e.profileOwner.id;
    return (0, i.jsx)(of.P, { isGifting: n, children: (0, i.jsx)(oE, { ...e }) });
}
var oN = n(815021),
    ok = n(299679),
    oT = n(820847);
n(667532);
var oP = n(802494),
    oO = n(172218),
    oR = n(858899),
    o_ = n(2157),
    oL = n(95817),
    ow = n(74135),
    oM = n(964164);
let oD = ay.Z.SIZE_90;
function oG(e) {
    let {
            sku: t,
            wishlistOwner: n,
            guildId: r,
            style: a,
            skuPreviewStyle: o,
            setIsHoveringOrFocusing: d,
            onClick: u,
            "aria-label": c,
            wishlistId: g,
            children: m,
        } = e,
        { trackUserProfileWishlistAction: f } = (0, $.NJ)(),
        h = (0, ok.Ar)(),
        p = (0, oe.A)(() => (0, a8.A)()),
        { handleVisibilityChange: x } = (0, oL.G)(p),
        A = (0, oO.K)(x, 0.5, h?.surface != null),
        I = l.useCallback(() => {
            (f({
                wishlistId: g,
                action: rd.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                h?.surface != null &&
                    tO.default.track(T.HAw.WISHLIST_ITEM_CLICKED, {
                        sku_id: t.id,
                        wishlist_id: g,
                        wishlist_owner_id: h.wishlistOwnerId,
                        surface: h.surface,
                        position_in_section: h.positionInSection,
                        item_source: h.itemSource,
                        click_type: "add_to_wishlist",
                        product_line: t.productLine,
                        card_id: p,
                        impression_session_id: h.impressionSessionId,
                        location_stack: h.analyticsLocations,
                    }),
                u());
        }, [u, t.id, t.productLine, f, g, h, p]);
    return (0, i.jsx)("div", {
        ref: A,
        children: (0, i.jsx)(an.A, {
            sku: t,
            user: n,
            guildId: r,
            spec: oD,
            cardStyle: s()(oM.Nr, a),
            skuPreviewStyle: s()(oM.ev, o),
            onHoverOrFocusChange: d,
            onClick: I,
            "aria-label": c,
            children: m,
        }),
    });
}
function oU(e) {
    let {
            sku: t,
            analyticsLocations: n,
            isHoveringOrFocusing: r,
            handleOpenUserProfileModal: a,
            skuPreviewStyle: o,
            wishlistOwner: d,
            onAddSuccess: u,
            promotion: c,
            ...g
        } = e,
        [m, f] = l.useState(!1),
        h = l.useCallback(async () => {
            if (!m) {
                f(!0);
                try {
                    (await oo.A.addSkuToWishlist(t.id, n), u?.(), a?.({ tabSection: rd.RP.WISHLIST }));
                } catch (e) {
                    ((0, oR.P0)({ text: eU.intl.string(eU.t.F8FvUy), variant: "critical" }),
                        nn.O.announce(eU.intl.string(eU.t.F8FvUy)));
                } finally {
                    f(!1);
                }
            }
        }, [t, n, m, a, u]),
        p = l.useMemo(() => s()({ [oM.zW]: r || m }, o), [r, m, o]);
    return (0, i.jsxs)(oG, {
        "aria-label": eU.intl.formatToPlainString(eU.t.xRjJBe, { productName: (0, s8.T)(t) }),
        sku: t,
        wishlistOwner: d,
        skuPreviewStyle: p,
        onClick: h,
        isHoveringOrFocusing: r,
        ...g,
        children: [(0, i.jsx)(ax.oU, { isHoveringOrFocusing: r, loading: m }), !r && !m && c],
    });
}
function oF(e) {
    let { sku: t, analyticsLocations: n, ...l } = e,
        { analyticsLocations: r } = (0, y.Ay)(...(n ?? []), j.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        s = (0, o_.D)({ surface: "sku_purchase_badge", applicationId: t.applicationId, skuId: t.id });
    return (0, i.jsx)(oU, {
        sku: t,
        analyticsLocations: r,
        promotion: null != s ? (0, i.jsx)(ow.s, { spec: oD, icon: s.Icon, tooltipText: s.tooltip }) : null,
        ...l,
    });
}
function oB(e) {
    let { sku: t, ...n } = e,
        r = l.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case s0.R.PROFILE_EFFECT:
                case s0.R.NAMEPLATE:
                case s0.R.BUNDLE:
                case s0.R.PROFILE_FRAME:
                    return;
                case s0.R.AVATAR_DECORATION:
                    return oM.ML;
                default:
                    return s()(oM.ML, oM.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(oU, { sku: t, skuPreviewStyle: r, ...n });
}
function oW(e) {
    let { sku: t, ...n } = e;
    return (0, i.jsx)(oU, { sku: t, skuPreviewStyle: aC.MO, ...n });
}
function oH(e) {
    let { sku: t, ...n } = e,
        [r, s] = l.useState(!1);
    switch (t.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(oF, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        case T.EZt.COLLECTIBLES:
            return (0, i.jsx)(oB, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        case T.EZt.PREMIUM:
            return (0, i.jsx)(oW, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        default:
            return null;
    }
}
var oV = n(609965);
function oz(e) {
    let { wishlist: t, guildId: n, handleOpenUserProfileModal: l, analyticsLocations: r, className: o, items: d } = e,
        u = (0, a.bG)([C.default], () => C.default.getUser(t?.userId));
    return (0, i.jsx)("ul", {
        className: s()(oV.Vg, o),
        children: d.map((e, s) => {
            let { sku: a, itemSource: o } = e;
            return (0, i.jsx)(
                ok.dB,
                {
                    newValue: { positionInSection: s, skuId: a.id, itemSource: o, productLine: a.productLine },
                    children: (0, i.jsx)(oH, {
                        sku: a,
                        wishlistId: t?.id,
                        wishlistOwner: u,
                        guildId: n,
                        handleOpenUserProfileModal: l,
                        analyticsLocations: r,
                    }),
                },
                a.id,
            );
        }),
    });
}
var oY = n(927813);
let oK = 90 * oY.A.Millis.DAY,
    oq = 90 * oY.A.Millis.DAY;
var oX = n(469364);
function oZ(e) {
    let {
            user: t,
            guildId: n,
            wishlist: r,
            hasFetchedWishlist: s = !1,
            analyticsLocations: o,
            impressionSessionId: d,
            className: u,
        } = e,
        {
            isVisible: c,
            isDismissible: g,
            markAsDismissed: m,
        } = (function (e) {
            let { userId: t, wishlist: n, hasFetchedWishlist: i } = e,
                r = (n?.items.length ?? 0) >= 3,
                [s, o] = l.useState(!1);
            !i || r || s || o(!0);
            let d = (0, a.bG)(
                    [Q.A],
                    () => (null != n ? new Date(Q.A.getWishlistSettings(t, n.id)?.updated_at ?? 0).valueOf() : 0),
                    [n, t],
                ),
                [u, c] = (0, eD.Wl)(
                    eS.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
                    { showAfterTimestamp: d + oq, cooldownDurationMs: oK },
                    void 0,
                    !0,
                ),
                g = u === eS.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
            return {
                isVisible: i && (g || s || !r),
                isDismissible: r,
                markAsDismissed: l.useCallback(() => {
                    (o(!1), c(eG.i.USER_DISMISS));
                }, [c]),
            };
        })({ userId: t.id, wishlist: r, hasFetchedWishlist: s });
    return c
        ? (0, i.jsx)(o$, {
              user: t,
              guildId: n,
              wishlist: r,
              analyticsLocations: o,
              impressionSessionId: d,
              className: u,
              isDismissible: g,
              markAsDismissed: m,
          })
        : null;
}
function o$(e) {
    let {
            user: t,
            guildId: n,
            wishlist: r,
            analyticsLocations: a,
            impressionSessionId: o,
            className: d,
            isDismissible: u,
            markAsDismissed: c,
        } = e,
        { items: g } = (function (e) {
            let {
                    userId: t,
                    wishlist: n,
                    numWishlistItemsToRecommend: i,
                    maxWishlistItemsToShow: r = i,
                    source: s,
                } = e,
                { recommendations: a, status: o } = (0, oP.Ul)({ userId: t, numItems: i, source: s }),
                d = l.useMemo(() => new Set(n?.items.map((e) => e.skuId) ?? []), [n]),
                u = "success" === o && !d.has(i_.pe.TIER_2);
            return {
                items: l.useMemo(() => {
                    let e = a.filter((e) => !d.has(e.id)).map((e) => ({ sku: e, itemSource: "recommendation" }));
                    return (u && e.unshift({ sku: (0, op.rI)(), itemSource: "takeover" }), e.slice(0, r));
                }, [a, d, u, r]),
                status: o,
            };
        })({
            userId: t.id,
            wishlist: r,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: 8,
            source: oT.B.USER_PROFILE,
        });
    return 0 === g.length
        ? null
        : (0, i.jsxs)("div", {
              className: s()(oX.kL, d),
              children: [
                  (0, i.jsxs)("div", {
                      className: oX.wx,
                      children: [
                          (0, i.jsx)(eK.E, {
                              variant: "body-xs/normal",
                              color: "text-subtle",
                              children: eU.intl.string(eU.t["+GB8Kt"]),
                          }),
                          u &&
                              (0, i.jsx)("div", {
                                  className: oX.b,
                                  children: (0, i.jsx)(oN.J, { size: "xs", onClick: c }),
                              }),
                      ],
                  }),
                  (0, i.jsx)(ok.dB, {
                      newValue: {
                          impressionSessionId: o,
                          surface: "user_profile_wishlist_suggestions_grid",
                          wishlistOwnerId: t.id,
                          wishlistId: r?.id,
                          analyticsLocations: a,
                      },
                      children: (0, i.jsx)(oz, {
                          items: g,
                          guildId: n,
                          wishlist: r,
                          className: s()(oX.Vg, oX.e6),
                          analyticsLocations: a,
                      }),
                  }),
              ],
          });
}
var oJ = n(477782),
    oQ = n(165862),
    o0 = n(431194);
function o1(e) {
    let {
            title: t,
            variant: n = "secondary",
            handleOpenCollectiblesShop: r,
            handleOpenGameShop: s,
            handleAddNitroToWishlist: a,
            socialLayerStorefrontApplicationIds: o,
        } = e,
        d = l.useRef(null),
        [u, c] = l.useState(!1),
        g = (function (e) {
            let { applications: t, handleOpenGameShop: n } = e;
            return l.useMemo(
                () =>
                    t.filter(eu.Vq).map((e) => {
                        let t = tR.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: eU.intl.formatToPlainString(eU.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft:
                                null != t ? () => (0, i.jsx)("img", { className: o0.I, src: t, alt: "" }) : th.ShopIcon,
                            leadingAccessory:
                                null != t ? { type: "image", src: t } : { type: "icon", icon: th.ShopIcon },
                            action: () => n?.(e.id),
                        };
                    }),
                [t, n],
            );
        })({ applications: (0, eo.A)(o), handleOpenGameShop: s }),
        m = l.useMemo(
            () =>
                (0, i.jsxs)(oJ.rX, {
                    children: [
                        null != r &&
                            (0, i.jsx)(oJ.Dr, {
                                id: "browse-collectibles-shop",
                                label: eU.intl.string(eU.t["5upuqx"]),
                                iconLeft: th.ShopIcon,
                                leadingAccessory: { type: "icon", icon: th.ShopIcon },
                                action: r,
                            }),
                        null != a &&
                            (0, i.jsx)(oJ.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: eU.intl.string(eU.t.lG6a5x),
                                iconLeft: t0.NitroWheelIcon,
                                leadingAccessory: { type: "icon", icon: t0.NitroWheelIcon },
                                action: a,
                            }),
                        null != s &&
                            g.map((e) => {
                                let { id: t, label: n, iconLeft: l, leadingAccessory: r, action: s } = e;
                                return (0, i.jsx)(
                                    oJ.Dr,
                                    { id: t, label: n, iconLeft: l, leadingAccessory: r, action: s },
                                    t,
                                );
                            }),
                    ],
                }),
            [r, s, a, g],
        );
    return (0, i.jsx)(nm.Y, {
        targetElementRef: d,
        position: "bottom",
        onRequestOpen: () => c(!0),
        onRequestClose: () => c(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(oQ.W, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": eU.intl.string(eU.t.GdNkvG),
                children: m,
            });
        },
        children: (e) =>
            (0, i.jsx)(t6.$, {
                buttonRef: d,
                variant: n,
                size: "sm",
                icon: u ? tJ.XSmallIcon : iQ.ChevronSmallDownIcon,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var o6 = n(365199);
let o2 = eB.A.getArticleURL(T.MVz.CUSTOM_PROFILES_WISHLIST);
function o4(e) {
    let { isOwner: t, isWishlistPublic: n, onToggleVisibility: r } = e,
        s = l.useRef(null),
        { analyticsLocations: a } = (0, y.Ay)(j.A.USER_PROFILE_WISHLIST),
        o = l.useMemo(
            () =>
                t
                    ? (0, i.jsxs)(oJ.rX, {
                          children: [
                              (0, i.jsx)(oJ.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: eU.intl.string(eU.t.b2nFyA),
                                  subtext: eU.intl.string(eU.t.dw58pE),
                                  checked: n,
                                  action: r,
                              }),
                              (0, i.jsx)(oJ.bX, {}),
                              (0, i.jsx)(oJ.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: eU.intl.string(eU.t.hvVgAZ),
                                  icon: tS.LinkExternalSmallIcon,
                                  trailingIndicator: { type: "icon", icon: tS.LinkExternalSmallIcon },
                                  action: () => window.open(o2),
                              }),
                          ],
                      })
                    : null,
            [t, n, r],
        );
    return null == o
        ? null
        : (0, i.jsx)(y.f5, {
              value: a,
              children: (0, i.jsx)(nm.Y, {
                  targetElementRef: s,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, i.jsx)(oQ.W, {
                          "data-menu-migrated": !0,
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": eU.intl.string(eU.t.GdNkvG),
                          children: o,
                      });
                  },
                  children: (e) =>
                      (0, i.jsx)(tx.q3, {
                          buttonRef: s,
                          icon: o6.MoreHorizontalIcon,
                          tooltipText: eU.intl.string(eU.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var o3 = n(526725);
function o8(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: n, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, i.jsx)(o1, {
              title: eU.intl.string(eU.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, i.jsx)(t6.$, {
              variant: "secondary",
              size: "sm",
              icon: th.ShopIcon,
              text: eU.intl.string(eU.t["i/yzHs"]),
              onClick: n,
          });
}
function o7(e) {
    let {
        showEditingControls: t,
        socialLayerStorefrontApplicationIds: n,
        isWishlistPublic: l,
        handleOpenShop: r,
        handleOpenGameShop: s,
        handleAddNitroToWishlist: a,
        handleToggleWishlistVisibility: o,
    } = e;
    return (0, i.jsxs)("div", {
        className: o3.$s,
        children: [
            t &&
                (n.length > 0 || null != a
                    ? (0, i.jsx)(o1, {
                          title: eU.intl.string(eU.t.SDUwM0),
                          handleOpenCollectiblesShop: r,
                          handleOpenGameShop: n.length > 0 ? s : void 0,
                          handleAddNitroToWishlist: a,
                          socialLayerStorefrontApplicationIds: n,
                      })
                    : (0, i.jsx)(t6.$, {
                          variant: "secondary",
                          size: "sm",
                          icon: tN.PlusSmallIcon,
                          text: eU.intl.string(eU.t.SDUwM0),
                          onClick: r,
                      })),
            (0, i.jsx)(o4, { isOwner: !0, isWishlistPublic: l, onToggleVisibility: o }),
        ],
    });
}
function o9(e) {
    let { application: t, handleOpenGameShop: n, handleOpenGameShopMouseDown: r } = e,
        s = l.useCallback(() => {
            n(t.id);
        }, [t, n]),
        a = l.useCallback(() => {
            r(t.id);
        }, [t, r]);
    return (0, i.jsx)(t6.$, {
        variant: "primary",
        size: "sm",
        icon: th.ShopIcon,
        text: eU.intl.formatToPlainString(eU.t["HDT/rg"], { applicationName: t.name }),
        onClick: s,
        onMouseDown: a,
    });
}
function o5(e) {
    let {
            showEditingControls: t,
            socialLayerStorefrontApplicationIds: n,
            handleOpenShop: r,
            handleOpenGameShop: s,
            handleOpenGameShopMouseDown: a,
        } = e,
        o = (0, on.Us)() === T.BRT.OVERLAY,
        d = (0, eo.A)(n),
        u = l.useMemo(() => {
            if (o || 0 === n.length) return null;
            let e = d.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === n.length) {
                let t = e[n[0]];
                return null == t
                    ? null
                    : (0, i.jsx)(o9, { application: t, handleOpenGameShop: s, handleOpenGameShopMouseDown: a });
            }
            return (0, i.jsx)(o1, {
                title: eU.intl.string(eU.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: s,
                socialLayerStorefrontApplicationIds: n,
            });
        }, [o, n, s, d, a]);
    return (0, i.jsxs)("div", {
        className: o3.y7,
        children: [
            (0, i.jsxs)("div", {
                className: o3.q6,
                children: [
                    (0, i.jsx)(tQ.D, {
                        variant: "heading-sm/medium",
                        color: "text-strong",
                        children: eU.intl.string(eU.t.HGnLLT),
                    }),
                    (0, i.jsx)(eK.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        children: eU.intl.string(eU.t["/X1ny6"]),
                    }),
                ],
            }),
            (t || null != u) &&
                (0, i.jsxs)(a9.e, {
                    size: "sm",
                    children: [
                        t &&
                            (0, i.jsx)(t6.$, {
                                variant: "primary",
                                size: "sm",
                                icon: th.ShopIcon,
                                text: eU.intl.string(eU.t.ZbS4QB),
                                onClick: r,
                            }),
                        u,
                    ],
                }),
        ],
    });
}
function de(e) {
    let {
            isOwner: t,
            showEditingControls: n,
            profileOwner: r,
            wishlist: s,
            socialLayerStorefrontApplicationIds: o,
            handleOpenShop: d,
            handleOpenGameShop: u,
            handleAddNitroToWishlist: c,
        } = e,
        g = s.id,
        m = (0, a.bG)([Q.A], () => Q.A.getWishlistSettings(r.id, g)),
        { trackUserProfileWishlistAction: f } = (0, $.NJ)(),
        h = !1 === r.nsfwAllowed,
        [p, x] = l.useState(!0);
    l.useEffect(() => {
        m?.visibility != null && x(m.visibility === a7.a.PUBLIC);
    }, [m?.visibility]);
    let A = l.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && f({ wishlistId: t, action: n, productLines: i });
            },
            [f],
        ),
        I = (0, om.A)({ wishlistId: g, onAction: A, productLines: null != s ? (0, ou.y9)(s) : null }),
        v = l.useCallback(() => {
            if (null == g) return;
            let e = p ? a7.a.PRIVATE : a7.a.PUBLIC;
            (x(!p),
                oo.A.updateWishlistVisibility(g, e),
                f({
                    wishlistId: g,
                    action: p ? rd.Mq.WISHLIST_TOGGLE_PRIVATE : rd.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != s ? (0, ou.y9)(s) : void 0,
                }));
        }, [g, p, f, s]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !p &&
                (0, i.jsxs)("div", {
                    className: o3.lm,
                    children: [
                        (0, i.jsx)(a5.EyeSlashIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(eK.E, {
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            children: eU.intl.string(eU.t.RX7D9h),
                        }),
                    ],
                }),
            p &&
                h &&
                (0, i.jsxs)("div", {
                    className: o3.lm,
                    children: [
                        (0, i.jsx)(sx.CircleInformationIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(eK.E, {
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            children: eU.intl.string(eU.t.d78ChW),
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                ref: I,
                className: o3.U1,
                children: [
                    (0, i.jsx)(eK.E, {
                        variant: "body-xs/semibold",
                        color: "text-subtle",
                        children: eU.intl.format(eU.t.r6Y1Lg, { count: s.items.length }),
                    }),
                    t
                        ? (0, i.jsx)(o7, {
                              showEditingControls: n,
                              socialLayerStorefrontApplicationIds: o,
                              isWishlistPublic: p,
                              handleOpenShop: d,
                              handleOpenGameShop: u,
                              handleAddNitroToWishlist: c,
                              handleToggleWishlistVisibility: v,
                          })
                        : (0, i.jsx)(o8, {
                              socialLayerStorefrontApplicationIds: o,
                              handleOpenShop: d,
                              handleOpenGameShop: u,
                          }),
                ],
            }),
        ],
    });
}
function dt(e) {
    let { profileOwner: t, guildId: n } = e,
        r = l.useRef(null);
    (0, sU.i)({ containerRef: r, itemType: "WISHLIST_ITEM" });
    let { wishlistId: o, currentUser: d } = (0, a.cf)([Q.A, C.default], () => ({
            wishlistId: Q.A.getFirstWishlistId(t.id),
            currentUser: C.default.getCurrentUser(),
        })),
        { analyticsLocations: u } = (0, y.Ay)(),
        c = (function (e) {
            let { ownerId: t, wishlistId: n, isVisible: i = !0 } = e,
                r = (0, rw.bq)(),
                s = (0, a.bG)(
                    [Q.A],
                    () => (null != t ? Q.A.getProfileReadStateSectionAckedAt(t, oc.o.WISHLIST) : null),
                    [t],
                ),
                [o, d] = l.useState(void 0);
            (i || void 0 === o || d(void 0), i && null != t && null != r && void 0 === o && d(r.enabled ? s : null));
            let u = (0, a.bG)([rD.A, Q.A], () => null != t && (0, og.Y)(t, n), [t, n]),
                c = void 0 !== o;
            return (
                l.useEffect(() => {
                    i && c && u && null != t && (0, og.U)(t);
                }, [i, c, u, t]),
                o
            );
        })({ ownerId: t.id, wishlistId: o }),
        g = sB(t.id),
        { wishlist: m, wasFetched: f, error: h } = (0, V.fw)({ wishlistId: o, userId: t.id }),
        [p, x] = l.useState(!1);
    (f && !p && x(!0), (0, od.A)(m));
    let A = (function (e) {
            let { wishlist: t, profileOwner: n, currentUser: i } = e,
                r = n.id === i?.id,
                s = l.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
                o = (0, a.bG)([or.A], () => or.A.getDetectableIdsToApplicationIds()),
                d = l.useMemo(() => {
                    let e = [];
                    for (let n of t?.items ?? [])
                        (0, ol.$)(n) && null != o[n.sku.applicationId] && e.push(n.sku.applicationId);
                    return e;
                }, [t, o]),
                u = (0, os.w)({ userIds: s }),
                c = (0, os.mn)({ userIds: s }),
                g = (0, os.tR)(s),
                m = (0, os.rY)(),
                f = (0, os.qx)(),
                h = (0, os.px)();
            return l.useMemo(
                () => (0, rZ.uniq)([...d, ...u, ...c, ...g, ...(r ? [...m, ...f, ...h] : [])].filter(eu.Vq)),
                [d, u, c, g, m, f, h, r],
            );
        })({ wishlist: m, profileOwner: t, currentUser: d }),
        I = (0, oe.A)(() => (0, a8.A)()),
        v = l.useCallback(() => {
            (0, tp.Cz)({ analyticsLocations: u, analyticsSource: j.A.USER_PROFILE_WISHLIST });
        }, [u]),
        b = l.useCallback((e) => {
            (0, oa.G)({ applicationId: e });
        }, []),
        E = l.useCallback((e) => {
            ((0, iT.M)(), (0, oa.default)({ applicationId: e }));
        }, []),
        { handleToggle: S } = (0, as.c)({
            userId: d?.id,
            skuId: i_.pe.TIER_2,
            nuxGraphic: oi.g,
            onNuxShow: ot.D,
            location: j.A.USER_PROFILE_WISHLIST,
        });
    if (null == d || null != h) return null;
    let N = null == m || 0 === m.items.length;
    return (0, i.jsxs)(si, {
        scrollerRef: r,
        className: s()({ [o3.XG]: !N }),
        fade: !0,
        children: [
            N
                ? (0, i.jsx)(o5, {
                      showEditingControls: g,
                      socialLayerStorefrontApplicationIds: A,
                      handleOpenShop: v,
                      handleOpenGameShop: E,
                      handleOpenGameShopMouseDown: b,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(aM, { scrollerRef: r }),
                          (0, i.jsx)(de, {
                              isOwner: d?.id === t.id,
                              showEditingControls: g,
                              profileOwner: t,
                              wishlist: m,
                              socialLayerStorefrontApplicationIds: A,
                              handleOpenShop: v,
                              handleOpenGameShop: E,
                              handleAddNitroToWishlist: (0, ou.C3)(m, i_.pe.TIER_2) ? void 0 : S,
                          }),
                          (0, i.jsx)(oS, {
                              items: m.items,
                              profileOwner: t,
                              guildId: n,
                              showEditingControls: g,
                              ackedAt: c,
                          }),
                      ],
                  }),
            g &&
                (0, i.jsx)(oZ, {
                    user: t,
                    guildId: n,
                    wishlist: m,
                    hasFetchedWishlist: p,
                    analyticsLocations: u,
                    impressionSessionId: I,
                    className: N ? o3._E : o3.HZ,
                }),
        ],
    });
}
function dn(e) {
    let { user: t, currentUser: n, section: l, displayProfile: r, guildId: s, channelId: a, onClose: o } = e;
    return l === rd.RP.ACTIVITY
        ? (0, i.jsx)(sr, { user: t, currentUser: n, displayProfile: r, guildId: s, channelId: a, onClose: o })
        : l === rd.RP.MUTUAL_FRIENDS
          ? (0, i.jsx)(sg, { user: t, guildId: s, channelId: a, onClose: o })
          : l === rd.RP.MUTUAL_GUILDS
            ? (0, i.jsx)(sp, { user: t, onClose: o })
            : l === rd.RP.WIDGETS
              ? (0, i.jsx)(a3, { user: t, guildId: s, channelId: a })
              : l === rd.RP.WISHLIST
                ? (0, i.jsx)(dt, { profileOwner: t, guildId: s })
                : null;
}
function di(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: r,
            guildId: s,
            channelId: o,
            items: d,
            initialSection: u,
            onClose: g,
        } = e,
        { trackUserProfileAction: h } = (0, $.NJ)(),
        { shouldLogExposure: p } = (0, rM.A)(t),
        { primaryColor: x } = (0, rV.E)(),
        A = null != x ? "neutral" : "primary",
        I = l.useRef(!1),
        v = d.some((e) => !0 === e.showNewContentDot);
    l.useEffect(() => {
        v && !I.current && ((I.current = !0), h({ action: "VIEW_NEW_CONTENT_TAB_BADGE" }));
    }, [v, h]);
    let [j, y] = l.useState(() => (d.find((e) => e.section === u) ?? d[0]).section),
        b = (function (e) {
            let { user: t, currentUser: n, displayProfile: i, guildId: l, items: r } = e,
                {
                    isFetching: s,
                    isCurrentUser: o,
                    hasCurrentActivity: d,
                    hasRecentActivity: u,
                } = rH({ user: t, currentUser: n, displayProfile: i, guildId: l }),
                c = (0, a.bG)(
                    [Q.A, rD.A],
                    () => {
                        if (null == Q.A.getUserProfile(t.id) || Q.A.isFetchingProfile(t.id, l)) return !0;
                        let e = Q.A.getFirstWishlistId(t.id);
                        if (null == e) return !1;
                        let n = rD.A.getStatus(e);
                        if ("not_loaded" === n || "fetching" === n) return !0;
                        let i = Q.A.getWishlistSettings(t.id, e)?.updated_at;
                        return "success" === n && null != i && rD.A.getUpdatedAt(e) !== i;
                    },
                    [t.id, l],
                );
            return (
                !o &&
                (c || s
                    ? null
                    : !r.some((e) => e.section === rd.RP.WIDGETS) &&
                      r.some((e) => e.section === rd.RP.WISHLIST) &&
                      !d &&
                      !u)
            );
        })({ user: t, currentUser: n, displayProfile: r, guildId: s, items: d }),
        [C, E] = l.useState(!1);
    !C && null != b && (E(!0), null == u && b && y(rd.RP.WISHLIST));
    let S = d.find((e) => e.section === j) ?? d[0];
    return (
        S.section !== j && y(S.section),
        (0, i.jsxs)("div", {
            className: sn.kL,
            children: [
                p && (0, i.jsx)(rw.kM, { location: "UserProfileModalV2Tabs" }),
                (0, i.jsx)(c.Ip, {
                    orientation: "horizontal",
                    className: sn.gU,
                    fade: !0,
                    scrollbarGutter: !1,
                    children: (0, i.jsx)(r_.V, {
                        type: "top",
                        look: "custom",
                        selectedItem: S.section,
                        onItemSelect: function (e) {
                            rt.A.hasUnsavedChanges() && S.section === rd.RP.WIDGETS
                                ? (0, na.VQ)()
                                : (h({ action: "PRESS_SECTION", section: e }), y(e), E(!0));
                        },
                        children: d.map((e) =>
                            (0, i.jsxs)(
                                r_.V.Item,
                                {
                                    className: sn.YU,
                                    id: e.section,
                                    "aria-label":
                                        !0 === e.showNewContentDot
                                            ? eU.intl.formatToPlainString(eU.t.c4JwHL, { tabName: e.text })
                                            : e.text,
                                    children: [
                                        e.text,
                                        !0 === e.showNewContentDot &&
                                            (0, i.jsx)(rL.N, { variant: A, className: sn.Pf }),
                                    ],
                                },
                                e.section,
                            ),
                        ),
                    }),
                }),
                (0, i.jsx)(r_.V.Panel, {
                    id: S.section,
                    "aria-label": S.text,
                    className: sn.NM,
                    children: (0, i.jsx)(f.F, {
                        component: (0, i.jsx)(m.A, { children: (0, i.jsx)(f.H, { children: S.text }) }),
                        children: (0, i.jsx)(dn, {
                            user: t,
                            currentUser: n,
                            displayProfile: r,
                            guildId: s,
                            channelId: o,
                            section: S.section,
                            onClose: g,
                        }),
                    }),
                }),
            ],
        })
    );
}
var dl = n(933832),
    dr = n(972213);
let ds = {
        [rd.jM.WIDGET_ADDED]: {
            message: eU.intl.string(eU.t.fFP1Uy),
            icon: (0, i.jsx)(dl.CheckmarkLargeIcon, { size: "sm", color: p.A.colors.STATUS_POSITIVE.css }),
        },
        [rd.jM.WIDGET_REMOVED]: {
            message: eU.intl.string(eU.t.zzsK7h),
            icon: (0, i.jsx)(dl.CheckmarkLargeIcon, { size: "sm", color: p.A.colors.STATUS_POSITIVE.css }),
        },
        [rd.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eU.intl.string(eU.t["84MExs"]),
            icon: (0, i.jsx)(dr.XLargeIcon, { size: "sm", color: p.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: "failure",
        },
        [rd.jM.SOMETHING_WENT_WRONG]: {
            message: eU.intl.string(eU.t.F8FvUy),
            icon: (0, i.jsx)(dr.XLargeIcon, { size: "sm", color: p.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: "failure",
        },
    },
    da = (e) => {
        let { className: t } = e,
            n = (0, ro.fu)(),
            r = (0, a.bG)([sA.Ay], () => sA.Ay.useReducedMotion),
            [s, o] = l.useState(!1),
            [d, c] = l.useState(null);
        l.useEffect(() => {
            null !== n ? (o(!0), c(ds[n]), nn.O.announce(ds[n].message)) : o(!1);
        }, [n]);
        let g = (0, u.p)(
            s,
            {
                from: { transform: r ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                enter: { transform: "translateY(0)", opacity: 1 },
                leave: { transform: r ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                config: { mass: 1, tension: 200, friction: 18, clamp: !0 },
            },
            "animate-always",
        );
        return (
            l.useEffect(() => () => (0, ro.XA)(null), []),
            l.useEffect(() => {
                if (s) {
                    let e = setTimeout(() => {
                        (0, ro.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [s]),
            (0, i.jsx)(i.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== d &&
                        (0, i.jsx)(lk.animated.div, { className: t, style: e, children: (0, i.jsx)(rS, { ...d }) }),
                ),
            })
        );
    };
var dd = n(297413),
    du = n(465829),
    dc = n(826673),
    dg = n(73392),
    dm = n(81400),
    df = n(576705),
    dh = n(997394);
function dp(e) {
    return null == e || "" === e ? void 0 : e;
}
function dx(e) {
    let t,
        n,
        r,
        o,
        d,
        u,
        c,
        g,
        m,
        f,
        { user: h, displayProfile: x } = e,
        { analyticsLocations: A } = (0, y.Ay)(),
        I = x?.guildId != null,
        v = x?.guildId ?? void 0,
        j = Z.Ay.canUsePremiumProfileCustomization(h),
        { canChangeDisplayName: b, permissionsLoaded: E } = (0, a.cf)([df.A, z.A], () => {
            if (!I || null == v) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = z.A.getGuild(v);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: df.A.can(T.xBc.CHANGE_NICKNAME, e) || df.A.can(T.xBc.MANAGE_NICKNAMES, e),
                      permissionsLoaded: !0,
                  };
        }),
        S = I && !b && E,
        {
            value: N,
            previewValue: k,
            fallbackDisplayName: P,
            onCommit: O,
        } = ((n = null != (t = x?.guildId ?? null)),
        (r = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.globalName ?? null)),
        (o = (0, a.bG)([eA.Ay], () => (null != t ? (eA.Ay.getMember(t, h.id)?.nick ?? null) : null))),
        (d = (0, a.bG)([eI.A], () => eI.A.getPendingChanges(null).pendingGlobalName)),
        (u = (0, a.bG)([eI.A], () => eI.A.getPendingChanges(t).pendingNickname)),
        (m = (g = void 0 !== (c = n ? u : d) ? c : n ? o : r) ?? ""),
        (f = n ? (dp(r) ?? h.username) : h.username),
        {
            value: m,
            previewValue: dp(g) ?? f,
            fallbackDisplayName: f,
            onCommit: l.useCallback(
                (e) => {
                    n ? (0, np.p)({ nickname: e.trim(), guildId: t ?? void 0 }) : (0, np.p)({ globalName: e.trim() });
                },
                [n, t],
            ),
        }),
        R = (0, a.bG)([eI.A], () => eI.A.getErrors(v ?? null)),
        _ = (0, dm.EC)(v ?? null),
        L = I ? R.nick?.[0] : R.global_name?.[0],
        w = _?.nick?.[0],
        M = (0, a.bG)([eI.A], () => eI.A.getPendingChanges(v).pendingDisplayNameStyles),
        D = (0, t8.A)({ userId: h.id, guildId: v, pendingDisplayNameStyles: M }),
        G = (0, dg.a)({ displayNameStyles: D, compensateForSafari: !1 }),
        U = eU.intl.string(I ? eU.t.mq6Cg9 : eU.t.XuZU7A),
        F = I ? eU.intl.string(eU.t.YcDKr8) : h.username,
        B = l.useRef(null),
        W = l.useCallback(
            (e) => {
                (e.stopPropagation(),
                    (0, dc.Dr)(eS.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                        dismissAction: eG.i.INDIRECT_ACTION,
                    }),
                    (0, nk.L)({ analyticsLocations: A, guildId: v, stackingBehavior: "stack", returnRef: B }));
            },
            [A, v],
        ),
        H = {
            icon: tW.PaintbrushThinIcon,
            tooltip: eU.intl.string(eU.t.lqKKI2),
            "aria-label": eU.intl.string(eU.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: W,
            buttonRef: B,
        },
        V = S
            ? (0, i.jsx)("span", {
                  className: dh.Cs,
                  children: (0, i.jsx)(t$.LockIcon, { size: "refresh_sm", color: p.A.colors.ICON_SUBTLE }),
              })
            : null;
    return (0, i.jsx)("div", {
        className: rA.kL,
        children: (0, i.jsx)(eK.E, {
            variant: du.gU.lg,
            color: "none",
            className: G,
            children: (0, i.jsx)(rh.w, {
                value: N,
                onCommit: O,
                autoComplete: "off",
                defaultDirty: !0,
                hideLabel: !0,
                fullWidth: !1,
                paddingBlock: "none",
                size: "md",
                scrollIntoViewOnFocus: !0,
                preview: (e, t) => {
                    let { focused: n } = t;
                    return (0, i.jsx)(du.c$, {
                        user: h,
                        guildId: v,
                        displayName: n ? (dp(e) ?? P) : k,
                        size: "lg",
                        pendingDisplayNameStyles: M,
                        className: s()(dh.dt, { [dh.jW]: n && "" === e }),
                        displayNameTrailing: V,
                    });
                },
                placeholder: F,
                label: U,
                maxLength: 32,
                textVariant: "inherit",
                trailing: b && j ? H : void 0,
                error: L,
                helperText: S ? eU.intl.string(eU.t.gzjxQi) : w,
                disabled: !b,
            }),
        }),
    });
}
var dA = n(628072);
function dI(e) {
    let t,
        n,
        r,
        o,
        d,
        { displayProfile: u } = e,
        {
            value: c,
            previewValue: g,
            onCommit: m,
        } = ((t = u?.guildId ?? null),
        (n = u?.guildId != null),
        (r = (0, a.bG)([eI.A], () => eI.A.getPendingChanges(t).pendingPronouns)),
        (o = n ? u?._guildMemberProfile?.pronouns : u?.pronouns),
        (d = u?.getPreviewPronouns(r) ?? void 0),
        {
            value: r ?? o ?? "",
            previewValue: d,
            onCommit: l.useCallback(
                (e) => {
                    (0, np.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        f = u?.guildId != null,
        h = null != g && g.length > 0,
        p = eU.intl.string(f ? eU.t.AXiE0i : eU.t["76Aqhl"]);
    return (0, i.jsx)("div", {
        className: s()(rA.kL, rA.oE, dA.k),
        children: (0, i.jsx)(rh.w, {
            value: c,
            onCommit: m,
            autoComplete: "off",
            defaultDirty: !0,
            hideLabel: !0,
            fullWidth: !1,
            paddingBlock: "md",
            paddingInline: "sm",
            size: "sm",
            scrollIntoViewOnFocus: !0,
            preview: h ? (0, i.jsx)(du.n2, { pronouns: g }) : null,
            label: eU.intl.string(eU.t["rniRE+"]),
            placeholder: p,
            maxLength: 40,
            spellCheck: !1,
        }),
    });
}
var dv = n(873200),
    dj = n(305866),
    dy = n(145497),
    db = n(685073),
    dC = n(2967),
    dE = n(318785),
    dS = n(534400),
    dN = n(152313),
    dk = n(830543),
    dT = n(415916),
    dP = n(743981),
    dO = n(295930),
    dR = n(594615);
let d_ = "no-server-tag";
function dL(e) {
    let { buttonRef: t, guildId: n, guildTag: l, guildBadge: r, ...a } = e,
        o = null == l || null == n;
    return (0, i.jsx)(e7.D, {
        innerRef: t,
        className: s()(dO.qJ, { [dO.wK]: o }),
        "aria-label": o ? eU.intl.string(eU.t.Pdd1nd) : eU.intl.formatToPlainString(eU.t.R1AXap, { tag: l }),
        "aria-haspopup": "dialog",
        ...a,
        children: (0, i.jsxs)(eK.E, {
            variant: "body-xs/normal",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: dO.W3,
            tag: "span",
            children: [
                o
                    ? eU.intl.string(eU.t.Pdd1nd)
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(
                                  dS.Z9,
                                  {
                                      src: (0, db.gC)(n, r, dP.Sl.SIZE_14),
                                      size: dP.Sl.SIZE_14,
                                      className: dO.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, db.gC)(n, r, dP.Sl.SIZE_14) ?? n,
                              ),
                              l,
                          ],
                      }),
                (0, i.jsx)(iQ.ChevronSmallDownIcon, { size: "xs", color: "currentColor", className: dO.u4 }),
            ],
        }),
    });
}
function dw() {
    let e = l.useRef(null),
        t = l.useId(),
        n = (0, dE.b)(),
        { creatableGuilds: r, isUpsellVisible: o } = (0, dC.Z)("UserProfileModalV2GuildTagSelect"),
        d = l.useMemo(() => new Map(n.map((e) => [e.id, e])), [n]),
        u = (0, a.cf)([C.default], () => {
            let e = C.default.getCurrentUser();
            return (0, db.Zo)(e?.primaryGuild);
        }),
        c = u.guildId ?? null,
        g = (0, a.bG)([eI.A], () => eI.A.getPendingChanges(null).pendingPrimaryGuildId),
        m = void 0 !== g ? g : c,
        f = null != m ? (d.get(m) ?? null) : null,
        h = null == f && m === c,
        p = f?.profile?.tag ?? (h ? (u.tag ?? null) : null),
        x = f?.profile?.badge ?? (h ? u.badge : void 0),
        A = l.useCallback(
            (e) =>
                e.id === d_
                    ? (0, i.jsx)("div", {
                          className: dR.uN,
                          children: (0, i.jsx)(eK.E, {
                              variant: "body-md/normal",
                              color: "input-placeholder-text-default",
                              className: dO.ve,
                              children: e.label,
                          }),
                      })
                    : (0, i.jsx)(i9.c, { ...e }),
            [],
        ),
        I = l.useMemo(
            () => [
                { id: d_, label: eU.intl.string(eU.t.VxdWWH), value: d_ },
                ...n.flatMap((e) => {
                    let t = e.profile?.tag;
                    if (null == t) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, i.jsx)(dy.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, i.jsx)(dS.o9, { guildId: e.id, guildTag: t, guildBadge: n }),
                        },
                    ];
                }),
            ],
            [n],
        ),
        v = 0 === n.length && null == c;
    if (v && !o) return null;
    function y(e) {
        (e(),
            (0, dT.A)(!0, () => {
                ((0, iT.M)(), (0, dk.default)(), (0, dN.A)(r, j.A.USER_PROFILE_MODAL_V2));
            }));
    }
    let b = (0, i.jsx)(dv.a3, {
        label: eU.intl.string(eU.t["5h0QOP"]),
        hideLabel: !0,
        placeholder: eU.intl.string(eU.t["5h0QOP"]),
        autoFocus: !0,
    });
    return (0, i.jsx)(nm.Y, {
        targetElementRef: e,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(dj.l, {
                className: s()(dO.yt, { [dO.R4]: o && !v, [dO.Lo]: v }),
                "aria-label": eU.intl.string(eU.t.Fo0g9x),
                "aria-describedby": v ? t : void 0,
                children: v
                    ? (0, i.jsxs)("div", {
                          className: dO.p$,
                          children: [
                              (0, i.jsx)(eK.E, {
                                  id: t,
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: eU.intl.string(eU.t["NV+MBV"]),
                              }),
                              (0, i.jsx)(t6.$, {
                                  text: eU.intl.string(eU.t["65zBhE"]),
                                  variant: "secondary",
                                  onClick: () => y(n),
                              }),
                          ],
                      })
                    : (0, i.jsxs)(dv.iS, {
                          selectionMode: "single",
                          options: I,
                          onSelectionChange: (e) => {
                              ((0, np.p)({ primaryGuildId: e === d_ ? null : e }), n());
                          },
                          children: [
                              o
                                  ? (0, i.jsxs)("div", {
                                        className: dO.wx,
                                        children: [
                                            b,
                                            (0, i.jsx)(t6.$, {
                                                text: eU.intl.string(eU.t.CumH4u),
                                                variant: "secondary",
                                                onClick: () => y(n),
                                            }),
                                        ],
                                    })
                                  : b,
                              (0, i.jsx)(dv.X2, { renderListItem: A }),
                          ],
                      }),
            });
        },
        children: (t) => (0, i.jsx)(dL, { buttonRef: e, guildId: m, guildTag: p, guildBadge: x, ...t }),
    });
}
var dM = n(956495);
function dD(e) {
    let { displayProfile: t, nickname: n, displayNameStylesOverride: l, ...r } = e;
    return (0, i.jsx)(du.Ay, {
        ...r,
        guildId: t?.guildId ?? void 0,
        displayName: n,
        displayNameSize: "lg",
        pronouns: t?.pronouns,
        pendingDisplayNameStyles: l,
    });
}
function dG(e) {
    let t = (0, a.bG)([eI.A], () => eI.A.getTryItOutChanges().tryItOutDisplayNameStyles);
    return (0, i.jsx)(dD, { ...e, displayNameStylesOverride: t });
}
function dU(e) {
    let { user: t, displayProfile: n, trailing: l } = e,
        r = t.isProvisional
            ? null
            : (0, i.jsx)(dd.A, {
                  user: t,
                  forceUsername: !0,
                  className: dM.a1,
                  usernameClass: dM.eb,
                  discriminatorClass: dM.sw,
                  hideBotTag: !0,
              });
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(dx, { displayProfile: n, user: t }),
            (0, i.jsxs)("div", {
                className: s()(dM.AK, dM.j6),
                children: [r, (0, i.jsx)(du.Ce, {}), (0, i.jsx)(dI, { displayProfile: n }), (0, i.jsx)(dw, {}), l],
            }),
        ],
    });
}
function dF(e) {
    let { editingMode: t, ...n } = e;
    switch (t) {
        case "read-only":
            return (0, i.jsx)(dD, { ...n });
        case "try-it-out":
            return (0, i.jsx)(dG, { ...n });
        case "edit":
            return (0, i.jsx)(dU, { ...n });
        default:
            return (0, eu.xb)(t);
    }
}
var dB = n(97808),
    dW = n(22231),
    dH = n(601255),
    dV = n(562819),
    dz = n(253400),
    dY = n(339984),
    dK = n(329801),
    dq = n(884362);
let dX = dz.Ay.getEnableHardwareAcceleration() ? dB.Js : dB.eu;
function dZ(e) {
    Promise.resolve().then(() => requestAnimationFrame(e));
}
function d$(e) {
    let { onMenuClose: t, items: n, ...l } = e;
    return (0, i.jsx)(oQ.W, {
        ...l,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: t,
        onSelect: t,
        "aria-label": eU.intl.string(eU.t.YAgq3W),
        children: (0, i.jsx)(oJ.rX, { children: n }),
    });
}
function dJ(e) {
    let { user: t, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, eH.V)(e),
        [d, u] = l.useState(!1),
        c = l.useRef(null),
        g = l.useRef(null),
        m = l.useCallback(() => u(!1), []),
        f = (function (e) {
            let { user: t, guildId: n, onClose: r, returnRef: s } = e,
                { newestAnalyticsLocation: o, analyticsLocations: d } = (0, y.Ay)(),
                u = null != n,
                c = (0, a.bG)([eA.Ay], () => (null != n ? eA.Ay.getMember(n, t.id) : null)),
                g = (0, a.bG)([eI.A], () => eI.A.getPendingChanges(n ?? void 0).pendingAvatar),
                m = u ? c?.avatar : t.avatar,
                f = (0, ep.z5)(g, m),
                h = u && null != t.avatar,
                p = Z.Ay.canUsePremiumProfileCustomization(t),
                x = p || null == n,
                A = p || null == n,
                I = (0, a.bG)([z.A], () => (null != n ? z.A.getGuild(n) : null)),
                v = (0, ep.a4)({ user: t }),
                j = (0, ep.a4)({ user: t, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: b } = (0, ep.CP)(n ?? void 0),
                C = void 0 !== b,
                E = null != (0, dH.A)(C ? b : j) && (C ? null != b : null != j),
                S = u && null != v,
                N = l.useCallback(() => {
                    (r(),
                        dZ(() =>
                            (0, ne.XD)({
                                uploadType: dY.HL.AVATAR,
                                analyticsSource: o,
                                guildId: n ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: s,
                            }),
                        ));
                }, [r, o, n, s]),
                k = l.useCallback(() => {
                    (r(),
                        dZ(() =>
                            (0, dV.L)({
                                analyticsLocations: d,
                                guild: I ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: s,
                            }),
                        ));
                }, [r, d, I, s]),
                T = l.useCallback(() => {
                    (r(),
                        (0, ne.rM)(null, m, (e) => (0, np.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, ep.WU)(h ? "reset" : "remove"));
                }, [r, n, m, h]),
                P = l.useCallback(() => {
                    (r(), (0, np.p)({ guildId: n ?? void 0, avatarDecoration: null }));
                }, [r, n]);
            return l.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, i.jsx)(
                                oJ.Dr,
                                { id: "change-avatar", label: eU.intl.string(eU.t["4OynCD"]), action: N },
                                "change-avatar",
                            ),
                        ),
                    A &&
                        e.push(
                            (0, i.jsx)(
                                oJ.Dr,
                                { id: "change-decoration", label: eU.intl.string(eU.t.HykynS), action: k },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        f &&
                        e.push(
                            h
                                ? (0, i.jsx)(
                                      oJ.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.TDjKDm),
                                          action: T,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, i.jsx)(
                                      oJ.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.twB3fz),
                                          action: T,
                                      },
                                      "remove-avatar",
                                  ),
                        ),
                    A &&
                        E &&
                        e.push(
                            S
                                ? (0, i.jsx)(
                                      oJ.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eU.intl.string(eU.t["2u5yu0"]),
                                          action: P,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, i.jsx)(
                                      oJ.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eU.intl.string(eU.t["9rx5GO"]),
                                          action: P,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [h, x, A, S, f, E, N, k, T, P]);
        })({ user: t, guildId: n, onClose: m, returnRef: g });
    return 0 === f.length
        ? (0, i.jsx)(eH.A, { ...e })
        : (0, i.jsxs)("div", {
              ...o,
              className: s()(dK.my, dK.vk, dq.kL, { [dq.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, i.jsx)(dX, { ...r, imageClassName: s()(dK.Lw, dq.HU) }),
                  (0, i.jsx)(nm.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: nm.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: m,
                      renderPopout: (e) => (0, i.jsx)(d$, { ...e, items: f, onMenuClose: m }),
                      children: (e) =>
                          (0, i.jsx)("div", {
                              ref: c,
                              className: dq.r9,
                              children: (0, i.jsx)(tH.K, {
                                  ...e,
                                  buttonRef: g,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: dW.PencilIcon,
                                  "aria-label": eU.intl.string(eU.t.YAgq3W),
                                  onClick: (e) => {
                                      (e.stopPropagation(), u((e) => !e));
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var dQ = n(514905);
function d0(e) {
    let { onMenuClose: t, items: n, ...l } = e;
    return (0, i.jsx)(oQ.W, {
        ...l,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: t,
        onSelect: t,
        "aria-label": eU.intl.string(eU.t.FzU73A),
        children: (0, i.jsx)(oJ.rX, { children: n }),
    });
}
function d1(e) {
    let { user: t, guildId: n } = e,
        [r, o] = l.useState(!1),
        d = l.useRef(null),
        u = l.useRef(null),
        c = l.useCallback(() => o(!1), []),
        g = (function (e) {
            let { user: t, guildId: n, onClose: r, returnRef: s } = e,
                { newestAnalyticsLocation: o, analyticsLocations: d } = (0, y.Ay)(),
                u = (0, ep.N2)({ user: t, guildId: n ?? void 0 }),
                c = (0, ep.Xf)({ user: t, guildId: n ?? void 0 }),
                g = (0, ep.Xf)({ user: t, guildId: void 0 }),
                m = Z.Ay.canUsePremiumProfileCustomization(t),
                f = null == n,
                h = f || m,
                p = f || m,
                x = null != n,
                {
                    pendingBanner: A,
                    pendingProfileEffect: I,
                    pendingProfileFrame: v,
                } = (0, a.bG)([eI.A], () => eI.A.getPendingChanges(n ?? void 0)),
                j = (0, a.bG)([Q.A], () =>
                    null != n ? Q.A.getGuildMemberProfile(t.id, n)?.banner : Q.A.getUserProfile(t.id)?.banner,
                ),
                b = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.banner != null),
                E = (0, a.bG)([Q.A], () => Q.A.getUserProfile(t.id)?.profileEffect != null),
                S = (0, a.bG)([Q.A], () => Q.A.getUserProfile(t.id)?.profileFrame != null),
                N = (0, ep.Ac)(A, j),
                k = x && b,
                T = x && E,
                P = x && S,
                O = void 0 === I ? null != u : null != I,
                R = void 0 === v ? null != c : null != v,
                L = (0, ep.lw)({
                    pendingValue: v,
                    userValue: g,
                    guildValue: null != n ? c : void 0,
                    guildId: n ?? void 0,
                }),
                w = (0, _.A)(L?.skuId),
                M = l.useCallback(() => {
                    (r(),
                        (0, ne.XD)({
                            uploadType: dY.HL.BANNER,
                            analyticsSource: o,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, o, n, s]),
                D = l.useCallback(() => {
                    (r(),
                        (0, nZ.W)({
                            analyticsLocations: d,
                            guild: null != n ? (z.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: u,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, d, n, u, s]),
                G = l.useCallback(() => {
                    (r(), (0, ne.rM)(null, j, (e) => (0, np.p)({ guildId: n ?? void 0, banner: e })));
                }, [r, n, j]),
                U = l.useCallback(() => {
                    (r(), (0, np.p)({ guildId: n ?? void 0, profileEffect: null }));
                }, [r, n]),
                F = l.useCallback(() => {
                    (r(),
                        (0, il.w)({
                            analyticsLocations: d,
                            guild: null != n ? (z.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: w,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, d, n, w, s]),
                B = l.useCallback(() => {
                    (r(), (0, np.p)({ guildId: n ?? void 0, profileFrame: null }));
                }, [r, n]);
            return l.useMemo(() => {
                let e = [];
                return (
                    m &&
                        e.push(
                            (0, i.jsx)(
                                oJ.Dr,
                                { id: "change-banner", label: eU.intl.string(eU.t.N0bC3P), action: M },
                                "change-banner",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, i.jsx)(
                                oJ.Dr,
                                { id: "change-effect", label: eU.intl.string(eU.t["/6nv6N"]), action: D },
                                "change-effect",
                            ),
                        ),
                    p &&
                        e.push(
                            (0, i.jsx)(
                                oJ.Dr,
                                { id: "change-frame", label: eU.intl.string(eU.t["oTSa/q"]), action: F },
                                "change-frame",
                            ),
                        ),
                    m &&
                        N &&
                        e.push(
                            k
                                ? (0, i.jsx)(
                                      oJ.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.jHlJNS),
                                          action: G,
                                      },
                                      "reset-banner",
                                  )
                                : (0, i.jsx)(
                                      oJ.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.tT9n7D),
                                          action: G,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    h &&
                        O &&
                        e.push(
                            T
                                ? (0, i.jsx)(
                                      oJ.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.Lb7lu9),
                                          action: U,
                                      },
                                      "reset-effect",
                                  )
                                : (0, i.jsx)(
                                      oJ.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.zUOlT6),
                                          action: U,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    p &&
                        R &&
                        e.push(
                            P
                                ? (0, i.jsx)(
                                      oJ.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.A0pzWn),
                                          action: B,
                                      },
                                      "reset-frame",
                                  )
                                : (0, i.jsx)(
                                      oJ.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eU.intl.string(eU.t["8DfADq"]),
                                          action: B,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [k, m, h, p, T, P, N, O, R, M, D, F, G, U, B]);
        })({ user: t, guildId: n, onClose: c, returnRef: u });
    return 0 === g.length
        ? (0, i.jsx)(ez.A, { ...e })
        : (0, i.jsxs)("div", {
              className: s()(dQ.kL, { [dQ.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, i.jsx)(ez.A, { ...e, className: dQ.Pr }),
                  (0, i.jsx)(nm.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: nm.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, i.jsx)(d0, { ...e, items: g, onMenuClose: c }),
                      children: (e) =>
                          (0, i.jsx)("div", {
                              ref: d,
                              className: dQ.r9,
                              children: (0, i.jsx)(tH.K, {
                                  ...e,
                                  buttonRef: u,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: dW.PencilIcon,
                                  "aria-label": eU.intl.string(eU.t.FzU73A),
                                  onClick: (e) => {
                                      (e.stopPropagation(), o((e) => !e));
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var d6 = n(419341),
    d2 = n(776879),
    d4 = n(837531),
    d3 = n(186272),
    d8 = n(447538);
let d7 = (e) => e * (2 - e),
    d9 = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3.SIZE_96, avatarOffsetX: 16 } };
function d5(e) {
    let { type: t, anchor: n } = e;
    return "staple" !== t || "bottom" !== n;
}
function ue(e) {
    let { displayProfile: t, pendingBanner: n } = e;
    if ((0, er.Nx)()) return null;
    let l = t?.getPreviewBanner(n, !1, 1024);
    return null == l
        ? null
        : (0, i.jsx)("div", { className: d8.backgroundImage, style: { backgroundImage: `url(${l})` } });
}
function ut(e) {
    let { displayProfile: t, profileEffectOverride: n, isHovering: r } = e,
        s = void 0 !== n ? n : t?.profileEffect,
        a = l.useSyncExternalStore(
            (e) => (nQ.add(e), () => nQ.delete(e)),
            () => n0,
        );
    return null == s ? null : (0, i.jsx)(O.A, { skuId: s.skuId, isHovering: r, restartKey: a });
}
function un(e) {
    var t;
    let n,
        r,
        {
            user: o,
            currentUser: d,
            guildId: u,
            originGuildId: m,
            channelId: f,
            displayProfile: h,
            nickname: p,
            hasEntered: x,
            customStatusPrompt: A,
            onClose: v,
            onCreateTag: j,
            avatarDecorationOverride: y,
            avatarOverride: C,
            bannerOverride: E,
            accentColorOverride: S,
            profileEffectOverride: N,
            profileFrame: k,
            fadeInProfileFrame: P,
            editingMode: O,
            isLoading: R = !1,
        } = e,
        _ = o.id === d.id,
        L = "edit" === O,
        M = l.useRef(null),
        D = l.useRef(null),
        W = l.useRef(null);
    l.useEffect(() => {
        if (_) return () => b.A.setState({ isOpen: !1 });
    }, [_]);
    let { isHoveringOrFocusing: V } = (0, G.A)(M),
        [z, q] = l.useState(),
        Z = l.useCallback((e) => {
            let t = e.contentRect.width;
            t <= 350 ? q("compact-xs") : t <= 380 ? q("compact-sm") : q(void 0);
        }, []);
    (0, I.g)(M, Z, [], { fireOnMount: !0 });
    let $ = null != z ? d9[z] : void 0,
        J = l.useMemo(() => A ?? (0, U.A)(), [A]),
        { relationshipType: Q, originApplicationId: ee } = (0, a.cf)([Y.A], () => ({
            relationshipType: Y.A.getRelationshipType(o.id),
            originApplicationId: Y.A.getOriginApplicationId(o.id),
        })),
        el =
            ((t = o.id),
            (n = (0, et.bG)([ei.default], () => ei.default.locale)),
            (r = (0, et.bG)([Y.A], () => (Y.A.getRelationshipType(t) === T.eA$.FRIEND ? Y.A.getSince(t) : null), [t])),
            (0, en.An)(r, n)),
        er = (0, a.bG)([K.A], () => K.A.hidePersonalInformation),
        eg = (0, B.q)({ userId: o.id }),
        em = (0, F.fi)(o.id),
        { appIdentities: ef, connections: eh } = (function (e) {
            let { filteredAppIdentities: t } = (0, ed.A)(e),
                n = (0, ec.A)(e),
                i = l.useMemo(() => new Set(t?.map((e) => e.application_id) ?? []), [t]),
                r = (0, eo.A)([...i]).filter(eu.Vq);
            return {
                appIdentities: l.useMemo(
                    () =>
                        t
                            .map((e) => ({ identity: e, application: r.find((t) => t.id === e.application_id) }))
                            .filter((e) => {
                                let { application: t } = e;
                                return null != t;
                            }),
                    [t, r],
                ),
                connections: l.useMemo(
                    () =>
                        n.filter((e) => {
                            let t = ea.A.get(e.type);
                            return t?.migrationData == null || !i.has(t.migrationData.replacedBy);
                        }),
                    [n, i],
                ),
            };
        })(o.id),
        ep = (0, es.A)(o.id),
        ex = eh.length > 0 || ef.length > 0,
        eA = ep.length > 0,
        eI = L ? d1 : ez.A,
        ey = h?.guildId ?? u,
        eb = {
            user: o,
            displayProfile: h,
            guildId: u,
            channelId: f,
            avatarSize: $?.avatarSize ?? ej.T[ev.d.MODAL_V2].avatarSize,
            avatarDecorationOverride: y,
            avatarOverride: C,
        },
        eC = l.useCallback(() => {
            (0, e3.A)({ user: o, guildId: ey, alt: p });
        }, [p, ey, o]);
    return (0, i.jsxs)("main", {
        className: s()(d8.profile, null != z && d8[z]),
        ref: M,
        "aria-busy": R,
        children: [
            (0, i.jsxs)("div", {
                className: d8.profileHeader,
                children: [
                    (0, i.jsx)("div", {
                        className: d8.profileHeaderBannerContainer,
                        children: (0, i.jsx)(eI, {
                            user: o,
                            displayProfile: h,
                            guildId: u,
                            themeType: ev.d.MODAL_V2,
                            specOverrides: $,
                            pendingBanner: E,
                            pendingAccentColor: S,
                        }),
                    }),
                    L
                        ? (0, i.jsx)(dJ, { ...eb })
                        : (0, i.jsx)(eH.A, {
                              ...eb,
                              onOpenAvatar: "read-only" === O ? eC : void 0,
                              imageAnimatingClassName: "try-it-out" === O && null == C ? iV.$T : void 0,
                          }),
                    (0, i.jsx)(e2.A, {
                        user: o,
                        guildId: u,
                        channelId: f,
                        themeType: ev.d.MODAL_V2,
                        hasEntered: x,
                        prompt: _ ? J : null,
                    }),
                ],
            }),
            (0, i.jsxs)(c.Ip, {
                fade: !0,
                className: d8.profileBody,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(dF, {
                                user: o,
                                displayProfile: h,
                                nickname: p,
                                trailing: (0, i.jsx)(eV.A, {
                                    displayProfile: h,
                                    themeType: ev.d.MODAL_V2,
                                    onClose: v,
                                    showPendingBadgeEdits: _,
                                    popoutAnchorRef: x ? D : void 0,
                                    containerRef: W,
                                }),
                                onClose: v,
                                onCreateTag: j,
                                editingMode: O,
                            }),
                            (0, i.jsx)("div", { ref: D }),
                            _ &&
                                x &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(eW, { targetElementRef: W }),
                                        (0, i.jsx)(eF, { targetElementRef: W }),
                                    ],
                                }),
                        ],
                    }),
                    Q === T.eA$.PENDING_INCOMING &&
                        (0, i.jsx)(e6.A.Overlay, {
                            className: d8.profileOverlay,
                            children: (0, i.jsx)(eZ.A, {
                                user: o,
                                applicationId: ee,
                                guildId: h?.guildId ?? void 0,
                                channelId: f,
                                className: d8.profileBanner,
                            }),
                        }),
                    em.map((e) => {
                        let { applicationId: t } = e;
                        return (0, i.jsx)(
                            e6.A.Overlay,
                            {
                                className: d8.profileOverlay,
                                children: (0, i.jsx)(eZ.A, {
                                    user: o,
                                    guildId: h?.guildId ?? void 0,
                                    channelId: f,
                                    isGameRelationship: !0,
                                    applicationId: t,
                                    className: d8.profileBanner,
                                }),
                            },
                            t,
                        );
                    }),
                    o.isProvisional &&
                        (0, i.jsx)(e6.A.Overlay, {
                            className: d8.profileOverlay,
                            children: (0, i.jsx)(rj.A, {
                                heading: eU.intl.string(eU.t.Iyka0U),
                                headingVariant: "body-md/semibold",
                                headingIcon: { icon: g.CircleErrorIcon, size: "xs" },
                                className: d8.profileBanner,
                                children: (0, i.jsx)(H.T, { userId: o.id, variant: "body-sm/normal" }),
                            }),
                        }),
                    (0, i.jsx)(e1.A, { user: o, className: d8.profileBanner }),
                    h?.private &&
                        (0, i.jsx)(e6.A.Overlay, {
                            className: d8.profileOverlay,
                            children: (0, i.jsx)(e0.A, { username: p }),
                        }),
                    (0, i.jsx)("div", {
                        className: d8.profileButtons,
                        children: (0, i.jsx)(ty, {
                            user: o,
                            currentUser: d,
                            guildId: u,
                            originGuildId: m,
                            channelId: f,
                            displayProfile: h,
                            relationshipType: Q,
                            onClose: v,
                        }),
                    }),
                    _ && "try-it-out" !== O && (0, i.jsx)(eY.A, { isPremiumUser: (0, X.ki)(d) }),
                    !er && (0, i.jsx)(to.A, { currentUser: d, displayProfile: h, canEditInPlace: L }),
                    eg.length > 0 &&
                        (0, i.jsx)(rj.A, {
                            heading: eU.intl.string(eU.t["Uv/eTx"]),
                            children: (0, i.jsx)(eX.A, { applicationIds: eg }),
                        }),
                    (0, i.jsx)(rj.A, {
                        heading: eU.intl.string(eU.t.a6XYD9),
                        children: (0, i.jsx)(eJ.A, { userId: o.id, guildId: h?.guildId, tooltipDelay: 300 }),
                    }),
                    null != el &&
                        (0, i.jsx)(rj.A, {
                            heading: eU.intl.string(eU.t.wlTO8v),
                            children: (0, i.jsx)(eq, { friendsSinceDate: el }),
                        }),
                    h?.guildId != null &&
                        (0, i.jsx)(e4.A, {
                            userId: o.id,
                            guildId: h.guildId,
                            className: d8.profileRolesSection,
                            headingVariant: "body-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !er &&
                        (L || ex) &&
                        (0, i.jsx)(rj.A, {
                            heading: eU.intl.string(eU.t["3fe7U5"]),
                            scrollTargetId: rd.bk.CONNECTIONS,
                            children: (0, i.jsx)(tB, {
                                applicationIdentities: ef,
                                connections: eh,
                                userId: o.id,
                                allowEditing: L,
                                className: d8.profileAppConnections,
                            }),
                        }),
                    !er &&
                        eA &&
                        (0, i.jsx)(rj.A, {
                            heading: eU.intl.string(eU.t.PHjkRE),
                            scrollTargetId: rd.bk.APPS,
                            children: (0, i.jsx)(ta, {
                                applicationRoleConnections: ep,
                                onClose: v,
                                className: d8.profileAppConnections,
                            }),
                        }),
                    (0, i.jsx)(rb, { userId: o.id }),
                ],
            }),
            (0, i.jsx)(ut, { displayProfile: h, profileEffectOverride: N, isHovering: V }),
            null != k && (0, i.jsx)(w.A, { frame: k, filterLayer: d5, fadeIn: P }),
        ],
    });
}
function ui(e) {
    let { user: t, displayProfile: n, pendingThemeColors: l, forceShowPremium: r, children: s } = e,
        {
            theme: a,
            primaryColor: o,
            secondaryColor: d,
        } = (0, el.A)({ user: t, displayProfile: n, pendingThemeColors: l, isPreview: r }),
        { profileThemeStyle: u, profileThemeClassName: c } = (0, ef.A)({
            theme: a,
            themeType: null,
            primaryColor: o,
            secondaryColor: d,
        });
    return (0, i.jsx)("div", { className: c, style: u, children: s });
}
function ul(e) {
    let t,
        n,
        {
            user: r,
            currentUser: d,
            guildId: c,
            originGuildId: g,
            channelId: I,
            messageId: b,
            roleId: O,
            sessionId: w,
            initialTabSection: G,
            initialScrollTarget: U,
            transitionState: F,
            customStatusPrompt: B,
            openedAt: H,
            onClose: Y,
            sourceAnalyticsLocations: X = [],
            themeContainerClassName: et,
        } = e,
        en = r.id === d.id,
        ei = l.useCallback(() => (0, dT.A)(en, Y), [en, Y]),
        el = l.useCallback(
            (e) =>
                (0, dT.A)(en, () => {
                    (Y(), e());
                }),
            [en, Y],
        ),
        {
            guildId: er,
            pendingGuildId: es,
            isFetching: ea,
            handleSelectUserProfile: eo,
            handleRetry: ed,
            hasError: eu,
        } = (function (e) {
            let { userId: t, initialGuildId: n } = e,
                [i, r] = l.useState(n),
                [s, o] = l.useState(n),
                [d, u] = l.useState("idle"),
                [c, g] = l.useState(0),
                m = (0, a.bG)([Q.A], () => Q.A.getUserProfile(t)?.fetchError?.status ?? null, [t]),
                f = l.useCallback(() => {
                    (u("retrying"), g((e) => e + 1));
                }, []),
                h = l.useCallback((e) => {
                    (u("loading"), r(e ?? void 0));
                }, []);
            return (
                l.useEffect(() => {
                    let e = !1;
                    return (
                        (0, eh.A)(t, void 0, {
                            type: "modal",
                            guildId: i,
                            withMutualFriendsCount: !0,
                            withMutualFriends: !1,
                            withMutualGuilds: !0,
                        }).then(
                            () => {
                                e || (o(i), u("idle"));
                            },
                            () => {
                                e || (o(i), u("idle"));
                            },
                        ),
                        () => {
                            e = !0;
                        }
                    );
                }, [i, t, c]),
                {
                    guildId: s,
                    pendingGuildId: i,
                    isFetching: "idle" !== d,
                    hasError: "retrying" === d || (null != m && "loading" !== d),
                    handleSelectUserProfile: h,
                    handleRetry: 404 !== m && 429 !== m ? f : void 0,
                }
            );
        })({ userId: r.id, initialGuildId: c }),
        ec = l.useMemo(() => (null != er ? { [er]: [r.id] } : {}), [er, r.id]);
    (0, v.Eq)(ec, "UserProfileModalV2");
    let ef = tX(),
        ej = (0, a.bG)([K.A], () => K.A.hidePersonalInformation),
        eS = (0, eg.A)(r.id),
        eN = (0, em.W)(r.id),
        ek = eu && !eN,
        eT = eS && !ej && !eu && !ef,
        eP = ef ? "try-it-out" : eT ? "edit" : "read-only",
        {
            pendingThemeColors: eO,
            avatarDecorationOverride: eR,
            avatarOverride: e_,
            bannerOverride: eL,
            accentColorOverride: ew,
            profileEffectOverride: eM,
            profileFrameOverride: eD,
        } = (function (e) {
            let { userId: t, guildId: n, editingMode: i } = e;
            return (0, a.cf)(
                [eI.A, C.default, eA.Ay, Q.A],
                () => {
                    if ("read-only" === i) return eb;
                    let e = C.default.getUser(t);
                    if (null == e) return eb;
                    let l = eI.A.getTryItOutChanges(),
                        r =
                            "try-it-out" === i
                                ? {
                                      pendingThemeColors: l.tryItOutThemeColors,
                                      pendingAvatar: l.tryItOutAvatar,
                                      pendingBanner: l.tryItOutBanner,
                                      pendingAvatarDecoration: void 0,
                                      pendingProfileEffect: void 0,
                                      pendingAccentColor: void 0,
                                      pendingProfileFrame: void 0,
                                  }
                                : eI.A.getPendingChanges(n),
                        s = null != n ? eA.Ay.getMember(n, t) : null,
                        a = Q.A.getUserProfile(t),
                        o = null != n ? Q.A.getGuildMemberProfile(t, n) : null;
                    return {
                        pendingThemeColors: r.pendingThemeColors,
                        avatarDecorationOverride: (0, ep.us)({
                            userValue: e.avatarDecoration,
                            guildValue: s?.avatarDecoration,
                            pendingValue: r.pendingAvatarDecoration,
                            guildId: n,
                        }),
                        avatarOverride: (0, ex.V7)({ userId: t, image: r.pendingAvatar, size: ey }),
                        bannerOverride: r.pendingBanner,
                        accentColorOverride: r.pendingAccentColor,
                        profileEffectOverride: (0, ep.us)({
                            userValue: a?.profileEffect,
                            guildValue: o?.profileEffect,
                            pendingValue: r.pendingProfileEffect,
                            guildId: n,
                        }),
                        profileFrameOverride: (0, ep.us)({
                            userValue: a?.profileFrame,
                            guildValue: o?.profileFrame,
                            pendingValue: r.pendingProfileFrame,
                            guildId: n,
                        }),
                    };
                },
                [t, n, i],
            );
        })({ userId: r.id, guildId: er, editingMode: eP }),
        {
            isExpanded: eG,
            isAnimating: eF,
            transition: eB,
            handleExpand: eW,
            handleCollapse: eH,
            refs: { expandIconButtonRef: eV, expandTabButtonRef: ez, collapseButtonRef: eY },
        } = (function () {
            let [e, t] = l.useState(() => window.innerWidth > 928),
                [n, i] = l.useState(!1),
                r = (0, u.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: d7 },
                    onRest: () => i(!1),
                }),
                s = (0, A.A)("(min-width: 929px) and (min-height: 550px)"),
                a = l.useRef(null),
                o = l.useRef(null),
                d = l.useRef(null),
                c = l.useRef(null),
                g = l.useCallback(() => {
                    ((c.current = "collapse"), i(!0), t(!0));
                }, []),
                m = l.useCallback(() => {
                    ((c.current = "expand"), i(!0), t(!1));
                }, []);
            return (
                l.useEffect(() => {
                    if (!n) {
                        if ("collapse" === c.current && e) ((c.current = null), d.current?.focus());
                        else if ("expand" === c.current && !e) {
                            c.current = null;
                            let e = s ? o.current : a.current;
                            e?.focus();
                        }
                    }
                }, [e, n, s]),
                {
                    isExpanded: e,
                    isAnimating: n,
                    transition: r,
                    handleExpand: g,
                    handleCollapse: m,
                    refs: { expandIconButtonRef: a, expandTabButtonRef: o, collapseButtonRef: d },
                }
            );
        })(),
        eK = eS && !eG,
        eq = eS && (!eG || eF),
        { defaultWishlistId: eX } = (0, a.cf)([Q.A], () => ({ defaultWishlistId: Q.A.getFirstWishlistId(r.id) }));
    ((0, V.fw)({ wishlistId: eX, userId: r.id }),
        (t = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.id)),
        (n = (0, a.bG)([P.A], () => P.A.shouldFetch())),
        (0, l.useEffect)(() => {
            null != t &&
                n &&
                (async function () {
                    S.h.dispatch({ type: "COLLECTIBLES_RECOMMENDATIONS_FETCH_START" });
                    try {
                        let e = await E.Bo.get({
                            url: "/storefront/recommended-items",
                            query: { application_ids: [T.FYj], limit: 100 },
                            rejectWithError: !0,
                        });
                        S.h.dispatch({
                            type: "COLLECTIBLES_RECOMMENDATIONS_FETCH_SUCCESS",
                            recommendation: {
                                skuIds: e.body.recommended_items.map((e) => {
                                    let { sku_id: t } = e;
                                    return t;
                                }),
                            },
                        });
                    } catch (t) {
                        let e = new N.LG(t);
                        ((0, k.o)(e), S.h.dispatch({ type: "COLLECTIBLES_RECOMMENDATIONS_FETCH_FAILURE" }));
                    }
                })();
        }, [t, n]));
    let eZ = (0, eE.fC)(),
        eJ = ek && (!eS || !ea),
        e0 = eS && eu,
        e1 = es !== er || e0 || null != eZ.interactionType,
        e2 = (function (e) {
            let { user: t, currentUser: n } = e,
                { mutualFriendsCount: i, mutualGuilds: l } = (0, sa.A)(t),
                r = l?.length,
                s = (0, d2.A)(t),
                a = (0, sF.A)(t.id),
                o = (0, d6.A)(t),
                { hasNewWishlistItems: d } = (0, rM.A)(t),
                u = [],
                c = t.id === n?.id,
                g = sB(t.id),
                m = a.length > 0;
            return (
                (g || m) && u.push({ text: eU.intl.string(eU.t.laViwx), section: rd.RP.WIDGETS }),
                u.push({ text: eU.intl.string(eU.t.chq59f), section: rd.RP.ACTIVITY }),
                (c || (!c && o)) &&
                    u.push({ text: eU.intl.string(eU.t["7lZ31J"]), section: rd.RP.WISHLIST, showNewContentDot: d }),
                t.id !== n?.id &&
                    s &&
                    (u.push({ text: (0, d4.A)(i), section: rd.RP.MUTUAL_FRIENDS }),
                    u.push({ text: (0, d3.A)(r), section: rd.RP.MUTUAL_GUILDS })),
                u
            );
        })({ user: r, currentUser: d }),
        { analyticsLocations: e4 } = (0, y.Ay)([...X, j.A.USER_PROFILE_MODAL_V2]),
        e3 = (0, $.pb)({
            layout: "MODAL_V2",
            userId: r.id,
            sourceSessionId: w,
            guildId: er,
            channelId: I,
            messageId: b,
            roleId: O,
        }),
        e8 = l.useCallback(() => {
            ((0, J.Wn)({ analyticsLocations: e4, ...e3, action: rd.pt.SHOW_STYLES_PANEL }), eW());
        }, [e4, e3, eW]),
        e7 = l.useCallback(() => {
            ((0, J.Wn)({ analyticsLocations: e4, ...e3, action: rd.pt.HIDE_STYLES_PANEL }), eH());
        }, [e4, e3, eH]),
        e9 = (0, ee.Ay)(r.id, er);
    (0, W.A)(e4, e9, rd.R7.MODAL_V2);
    let e5 = void 0 !== eD ? eD?.skuId : e9?.profileFrame?.skuId,
        te = (0, _.A)(e5),
        tt = (0, R.A)(e5),
        { profileFrameStyle: tn, profileFrameClassName: ti } = (0, M.A)(te);
    (0, L.A)({ skuId: e9?.profileFrame?.skuId, openedAt: H, context: e3, analyticsLocations: e4 });
    let tl = (0, a.bG)([C.default], () => Z.Ay.canUsePremiumProfileCustomization(C.default.getCurrentUser())),
        tr = ef || (en && null != e9 && tl),
        ts = q.Ay.useName(e9?.guildId, I, r),
        ta = (0, D.GV)(),
        to = (0, a.bG)([z.A], () => (null != er ? z.A.getGuild(er) : null)),
        td = en
            ? null != to
                ? eU.intl.formatToPlainString(eU.t.M7OhOF, { guildName: to.name })
                : eU.intl.string(eU.t.egQPgM)
            : eU.intl.format(eU.t.KRe1Fk, { name: ts });
    return (0, i.jsx)(y.f5, {
        value: e4,
        children: (0, i.jsx)($.of, {
            value: e3,
            openedAt: H,
            fetchStartedAt: e9?.fetchStartedAt,
            fetchEndedAt: e9?.fetchEndedAt,
            isLoaded: e9?.isLoaded,
            children: (0, i.jsx)(eE.Hl, {
                value: eZ,
                children: (0, i.jsx)(eC.N, {
                    value: U,
                    children: (0, i.jsxs)(o.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: s()(iV.zr, { [iV.QF]: e9?.private === !0 }),
                        transitionState: F,
                        "aria-labelledby": ta,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, i.jsx)(rR, {
                                children: (0, i.jsxs)("div", {
                                    className: s()(d8.layoutContainer, ti, {
                                        [d8.editingPanelEnabled]: eS,
                                        [d8.editingPanelExpanded]: eS && eG,
                                        [d8.isAnimating]: eF,
                                    }),
                                    style: tn,
                                    children: [
                                        (0, i.jsxs)(ui, {
                                            user: r,
                                            displayProfile: e9,
                                            pendingThemeColors: eO,
                                            forceShowPremium: tr,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: iV.Oo,
                                                    children: [
                                                        (0, i.jsx)(tb.A, { onClose: ei }),
                                                        (0, i.jsx)(m.A, {
                                                            children: (0, i.jsx)(f.H, { id: ta, children: td }),
                                                        }),
                                                        eq &&
                                                            (0, i.jsx)(lV, {
                                                                buttonRef: eV,
                                                                onClick: e8,
                                                                className: d8.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eK &&
                                                    (0, i.jsx)("div", {
                                                        className: d8.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, i.jsx)(lH, {
                                                            innerRef: ez,
                                                            onClick: e8,
                                                            className: d8.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, i.jsxs)(f.F, {
                                            children: [
                                                eS &&
                                                    eB((e, t) =>
                                                        t
                                                            ? (0, i.jsx)(lz, {
                                                                  className: s()(d8.editingPanel, {
                                                                      [d8.isExpanded]: eG,
                                                                  }),
                                                                  selectedGuildId: es,
                                                                  originGuildId: g,
                                                                  onSelectGuildId: eo,
                                                                  onClose: e7,
                                                                  collapseButtonRef: eY,
                                                                  isLoading: ea,
                                                                  isEditingDisabled: eu,
                                                              })
                                                            : null,
                                                    ),
                                                (0, i.jsxs)(e6.A, {
                                                    className: s()(et, iV.A7, d8.profileContentOuter),
                                                    innerClassName: d8.profileContentInner,
                                                    user: r,
                                                    displayProfile: e9,
                                                    themeType: ev.d.MODAL_V2,
                                                    pendingThemeColors: eO,
                                                    isPrivate: e9?.private === !0,
                                                    forceShowPremium: tr,
                                                    children: [
                                                        (0, i.jsx)(ue, { displayProfile: e9, pendingBanner: eL }),
                                                        e9?.private === !0 && (0, i.jsx)(eQ.A, {}),
                                                        !ek && (0, i.jsx)(da, { className: d8.noticeContainer }),
                                                        eJ &&
                                                            (0, i.jsx)("div", {
                                                                className: d8.noticeContainer,
                                                                role: "alert",
                                                                children: (0, i.jsx)(rS, {
                                                                    icon: (0, i.jsx)(h.WarningIcon, {
                                                                        size: "sm",
                                                                        color: p.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eU.intl.string(eU.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != ed
                                                                            ? eU.intl.string(eU.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: ed,
                                                                    actionDisabled: !eS && ea,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, i.jsx)("div", {
                                                            className: d8.profileCardToastContainer,
                                                            children: (0, i.jsx)(e$.A, {}),
                                                        }),
                                                        (0, i.jsxs)(rP, {
                                                            showScrim: e1,
                                                            showLoadingSpinner: ea,
                                                            className: d8.profileContentColumns,
                                                            children: [
                                                                (0, i.jsx)(un, {
                                                                    user: r,
                                                                    currentUser: d,
                                                                    guildId: er,
                                                                    channelId: I,
                                                                    displayProfile: e9,
                                                                    nickname: ts,
                                                                    originGuildId: g,
                                                                    hasEntered: F === x.ip.ENTERED,
                                                                    customStatusPrompt: B,
                                                                    onClose: ei,
                                                                    onCreateTag: el,
                                                                    avatarDecorationOverride: eR,
                                                                    avatarOverride: e_,
                                                                    bannerOverride: eL,
                                                                    accentColorOverride: ew,
                                                                    profileEffectOverride: eM,
                                                                    profileFrame: te,
                                                                    fadeInProfileFrame: tt,
                                                                    editingMode: eP,
                                                                    isLoading: ea,
                                                                }),
                                                                (0, i.jsx)(di, {
                                                                    user: r,
                                                                    currentUser: d,
                                                                    displayProfile: e9,
                                                                    guildId: er,
                                                                    channelId: I,
                                                                    items: e2,
                                                                    initialSection: G,
                                                                    onClose: ei,
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, i.jsx)(rf, { userId: r.id, guildId: er, className: d8.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function ur(e) {
    return (0, i.jsx)(tq, { children: (0, i.jsx)(ul, { ...e }) });
}
