n.d(l, { A: () => tz });
var t = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(17928),
    o = n(778712),
    d = n(866323),
    u = n(364522),
    c = n(695366),
    g = n(935462),
    m = n(140735),
    f = n(707554),
    p = n(231723),
    x = n(241524),
    h = n(770178),
    v = n(80682),
    A = n(793574),
    j = n(688810),
    b = n(480335),
    I = n(31956),
    C = n(361628),
    N = n(744808),
    y = n(282389),
    E = n(915089),
    P = n(713517),
    k = n(645507),
    R = n(922590),
    S = n(821269),
    D = n(93246),
    O = n(561794),
    T = n(994500),
    _ = n(351906),
    L = n(562153),
    w = n(474090),
    M = n(183555),
    G = n(841595),
    U = n(591179),
    V = n(999291),
    F = n(101928),
    B = n(837529),
    z = n(346713),
    W = n(573648),
    H = n(941314),
    K = n(429913),
    Y = n(321078),
    q = n(403362),
    $ = n(484509),
    X = n(920601),
    Z = n(919395),
    J = n(101058),
    Q = n(836602),
    ee = n(996988),
    el = n(985253);
let en = (0, o.FT)(el.T[ee.d.MODAL_V2].avatarSize),
    et = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        profileEffectOverride: void 0,
    };
var ei = n(903209);
async function er(e, l) {
    let n = new Image();
    await new Promise((l, t) => {
        (n.onload = () => l()), (n.onerror = () => t(Error(`Failed to load image: ${e}`))), (n.src = e);
    });
    let t = null != l ? Math.min(1, l / Math.max(n.naturalWidth, n.naturalHeight)) : 1,
        i = document.createElement("canvas");
    (i.width = Math.round(n.naturalWidth * t)), (i.height = Math.round(n.naturalHeight * t));
    let r = i.getContext("2d");
    if (null == r) throw Error("Canvas 2d context unavailable");
    return r.drawImage(n, 0, 0, i.width, i.height), i.toDataURL("image/png");
}
var ea = n(716804),
    es = n(679492),
    eo = n(718019),
    ed = n(694720),
    eu = n(915614),
    ec = n(308244),
    eg = n(744753),
    em = n(559506),
    ef = n(361311),
    ep = n(931481),
    ex = n(439053),
    eh = n(743987),
    ev = n(312381),
    eA = n(501193),
    ej = n(383448),
    eb = n(946356),
    eI = n(983495),
    eC = n(280645),
    eN = n(109112),
    ey = n(939249),
    eE = n(834730),
    eP = n(730134),
    ek = n(169869),
    eR = n(837057),
    eS = n(310419),
    eD = n(773669),
    eO = n(889227),
    eT = n(967198),
    e_ = n(488995),
    eL = n(375708),
    ew = n(985176);
function eM(e) {
    let { applicationRoleConnection: l, locale: n, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, ek.VW)(l, n);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: ew.k_,
                children:
                    null != l.application.bot
                        ? (0, t.jsx)(eP.A, { user: new eO.A(l.application.bot), size: o._3.SIZE_16 })
                        : (0, t.jsx)(eN._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: ew.Hd,
                children: [
                    (0, t.jsxs)(ey.D, {
                        className: ew.OB,
                        onClick: () => {
                            i?.(),
                                (0, eR.transitionToGlobalDiscovery)({
                                    tab: e_.GlobalDiscoveryTab.APPS,
                                    applicationId: l.application.id,
                                    newSessionState: {
                                        entrypoint: { name: eS.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                });
                        },
                        children: [
                            null != l.platform_name
                                ? (0, t.jsx)(eE.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_name,
                                  })
                                : null,
                            null != l.platform_username
                                ? (0, t.jsx)(eE.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_username,
                                  })
                                : null,
                            (0, t.jsx)(eE.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: ew.nk,
                                children: eL.intl.format(eL.t.zIT9YA, { applicationHook: () => l.application.name }),
                            }),
                        ],
                    }),
                    null != a && a.length > 0 ? (0, t.jsx)("div", { className: ew.yu, children: a }) : null,
                ],
            }),
        ],
    });
}
function eG(e) {
    let { applicationRoleConnections: l, className: n, onClose: i } = e,
        { trackUserProfileAction: r } = (0, M.NJ)(),
        o = (0, s.bG)([eD.default], () => eD.default.locale),
        d = (0, s.bG)([eT.A], () => eT.A.getGuildId());
    return 0 === l.length
        ? null
        : (0, t.jsx)("ul", {
              className: a()(ew.kL, n),
              children: l.map((e, l) =>
                  (0, t.jsx)(
                      "li",
                      {
                          className: ew.FI,
                          children: (0, t.jsx)(eM, {
                              applicationRoleConnection: e,
                              locale: o,
                              onApplicationClicked: () => {
                                  r({ action: "PRESS_APP_CONNECTION" }), i();
                              },
                              selectedGuildId: d ?? void 0,
                          }),
                      },
                      `${l}-${e.application.id}`,
                  ),
              ),
          });
}
var eU = n(982168),
    eV = n(722868),
    eF = n(822775),
    eB = n(982985),
    ez = n(700174),
    eW = n(34188),
    eH = n(859040),
    eK = n(23722),
    eY = n(993401);
function eq(e) {
    let { onClose: l, ...n } = e,
        { analyticsLocations: i, newestAnalyticsLocation: r } = (0, j.Ay)(),
        a = (0, eK.A)(() => {
            (0, eH.Cz)({ analyticsLocations: i, analyticsSource: r }), l?.();
        });
    return (0, t.jsx)(eY.q3, {
        action: "VISIT_SHOP",
        icon: eW.U,
        tooltipText: eL.intl.string(eL.t.b2d0N0),
        onClick: a,
        ...n,
    });
}
var e$ = n(573355),
    eX = n(102951),
    eZ = n(652215);
function eJ(e) {
    let {
            user: l,
            currentUser: n,
            guildId: i,
            originGuildId: r,
            channelId: a,
            displayProfile: s,
            relationshipType: o,
            onClose: d,
        } = e,
        u = (0, U.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: c } = (0, j.Ay)(),
        g = (0, eV.A)({ user: l, guildId: r, channelId: a, displayProfile: s, onClose: d }),
        {
            gameFriends: m,
            hasOutgoingPendingGameFriends: f,
            hasIncomingPendingGameFriends: p,
        } = (0, eX.J)({ userId: l.id }),
        x = m.length > 0 || f || p;
    return o === eZ.eA$.BLOCKED
        ? null
        : l.id === n.id
          ? u
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(eB.e, { userId: l.id, variant: "primary", disabled: !0 }),
                        (0, t.jsx)(eq, { onClose: d }),
                        (0, t.jsx)(ez.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(eF.A, { user: l, guildId: i, onClose: d }),
                        (0, t.jsx)(eq, { onClose: d }),
                        (0, t.jsx)(ez.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
          : l.bot
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)(eB.e, { userId: l.id, onClose: eU.A.popAll, autoFocus: !0 }),
                      (0, t.jsx)(ez.Zt, { user: l, guildId: i, viewProfileItem: g }),
                  ],
              })
            : o === eZ.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(eB.e, { userId: l.id, onClose: eU.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(ez.Zt, { user: l, guildId: i }),
                    ],
                })
              : o === eZ.eA$.FRIEND || o === eZ.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(eB.e, { userId: l.id, onClose: eU.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(e$.Ef, { user: l, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(ez.Zt, { user: l, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === eZ.eA$.NONE && x
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(eB.e, { userId: l.id, onClose: eU.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(e$.ES, {
                                user: l,
                                analyticsLocation: c,
                                gameFriends: m,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: f,
                            }),
                            (0, t.jsx)(ez.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    })
                  : (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(e$.cO, {
                                variant: "primary",
                                userId: l.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, t.jsx)(eB.l, { userId: l.id, onClose: eU.A.popAll, variant: "secondary" }),
                            (0, t.jsx)(ez.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    });
}
var eQ = n(463156),
    e0 = n(990078),
    e1 = n(349288),
    e7 = n(509434),
    e2 = n(95561),
    e3 = n(874490),
    e9 = n(370480),
    e5 = n(486020),
    e8 = n(123917),
    e6 = n(783419);
function e4(e) {
    let { account: l, locale: n, userId: i } = e,
        r = l.metadata ?? {},
        a = (0, e9.An)(r[e6.pK.CREATED_AT], n),
        s = W.A.get((0, e3.ML)(l.type));
    return (0, t.jsx)(ll, {
        renderAccountName: () => {
            let e = s?.getPlatformUserUrl?.(l);
            return null == e
                ? (0, t.jsx)(e0.m, {
                      overflowOnly: !0,
                      text: l.name,
                      children: (0, t.jsx)(eE.E, { variant: "text-sm/normal", className: ew.GW, children: l.name }),
                  })
                : (0, t.jsx)(e1.Anchor, {
                      href: e,
                      className: ew.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${l.name}, ${eL.intl.string(eL.t.q5jLJB)}`
                              : `${l.name}, ${eL.intl.string(eL.t.q5jLJB)}`,
                      onClick: (n) => {
                          (0, e2.zV)(eZ.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: i }),
                              (0, e8.h)({ href: e, trusted: s?.type !== eZ.fg2.DOMAIN }, n);
                      },
                      children: (0, t.jsxs)("div", {
                          className: ew.vi,
                          children: [
                              (0, t.jsx)(e0.m, {
                                  overflowOnly: !0,
                                  text: l.name,
                                  children: (0, t.jsx)(eE.E, {
                                      variant: "text-sm/normal",
                                      className: ew.GW,
                                      children: l.name,
                                  }),
                              }),
                              (0, t.jsx)(e7.I, { size: "xs", color: "currentColor" }),
                          ],
                      }),
                  });
        },
        renderMetadata: () =>
            l.type === eZ.fg2.REDDIT
                ? (0, ek.xE)(r)
                : l.type === eZ.fg2.STEAM
                  ? (0, ek.dy)(r)
                  : l.type === eZ.fg2.BLUESKY || l.type === eZ.fg2.MASTODON || l.type === eZ.fg2.TWITTER
                    ? (0, ek.ED)(r)
                    : l.type === eZ.fg2.PAYPAL
                      ? (0, ek.gZ)(r)
                      : l.type === eZ.fg2.EBAY
                        ? (0, ek.ub)(r)
                        : l.type === eZ.fg2.TIKTOK
                          ? (0, ek.HU)(r)
                          : null,
        platformIcon: s?.icon.lightPNG,
        platformName: s?.name,
        createdAtDate: a,
    });
}
function le(e) {
    let { identityWithApplication: l } = e,
        { identity: n, application: i } = l;
    if (null == n.profile || null == n.profile.username || null == i) return null;
    let r = e5.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(ll, {
        renderAccountName: () =>
            (0, t.jsx)(e0.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, t.jsx)(eE.E, {
                    variant: "text-sm/normal",
                    className: ew.GW,
                    children: n.profile.username,
                }),
            }),
        renderMetadata: () => null,
        platformIcon: r,
        platformName: i.name,
        createdAtDate: void 0,
        applyIconBorderRadius: !0,
    });
}
function ll(e) {
    let {
        renderAccountName: l,
        renderMetadata: n,
        platformName: i,
        platformIcon: r,
        createdAtDate: s,
        applyIconBorderRadius: o = !1,
    } = e;
    return (0, t.jsxs)("li", {
        className: ew.FI,
        children: [
            (0, t.jsx)(e0.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, t.jsx)("div", {
                    className: ew.k_,
                    children: (0, t.jsx)("img", {
                        alt: eL.intl.formatToPlainString(eL.t.rtm15P, { name: i }),
                        className: a()(ew.tV, o ? ew.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, t.jsxs)("div", {
                className: ew.Hd,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            l(),
                            null != s &&
                                (0, t.jsx)(eE.E, {
                                    variant: "text-xs/normal",
                                    children: eL.intl.format(eL.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: ew.yu, children: n() }),
                ],
            }),
        ],
    });
}
function ln(e) {
    let { connections: l, applicationIdentities: n, userId: i, className: r } = e,
        o = (0, s.bG)([eD.default], () => eD.default.locale);
    return 0 === l.length && 0 === n.length
        ? null
        : (0, t.jsxs)("ul", {
              className: a()(ew.kL, r),
              children: [
                  l.map((e) => (0, t.jsx)(e4, { account: e, userId: i, locale: o }, `${e.type}:${e.id}`)),
                  n?.map((e) => (0, t.jsx)(le, { identityWithApplication: e }, e.identity.application_id)),
              ],
          });
}
var lt = n(193885),
    li = n(661531),
    lr = n(408278),
    la = n(890377),
    ls = n(789645),
    lo = n(534514),
    ld = n(821609),
    lu = n(403581),
    lc = n(194261),
    lg = n(517461),
    lm = n(835071),
    lf = n(287809),
    lp = n(428262),
    lx = n(487233),
    lh = n(120386),
    lv = n(317097),
    lA = n(602853),
    lj = n(922016),
    lb = n(508274),
    lI = n(654107),
    lC = n(84540),
    lN = n(930349);
function ly(e) {
    let { user: l, disabled: n = !1 } = e,
        r = i.useRef(null),
        a = (0, lA.r)(li.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, lI.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([Q.A, G.A], () => ({
            pendingAccentColor: Q.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: G.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, lv.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, lC.p)({ accentColor: e }), []);
    return (0, t.jsx)(lj.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(lb.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(lN.V, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                accessibleLabel: eL.intl.string(eL.t["/X3fkf"]),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, t.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, lv.Hl)(c) } }),
            }),
    });
}
var lE = n(450373),
    lP = n(252732),
    lk = n(339984),
    lR = n(111242);
function lS(e) {
    let { backgroundColor: l } = e;
    return (0, t.jsx)("div", { className: lR.o, style: { backgroundColor: l } });
}
function lD(e) {
    let { src: l } = e;
    return (0, t.jsx)("img", { src: l, alt: "", className: lR._ });
}
function lO(e) {
    let { displayProfile: l, pendingBanner: n, shouldAnimate: i } = e,
        r = (0, lA.r)(li.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = l?.primaryColor ?? (0, lv.LX)(r),
        { hex: s } = (0, lE.A)(a),
        o = l?.getPreviewBanner(n, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(lD, { src: o }) : (0, t.jsx)(lS, { backgroundColor: s });
}
function lT(e) {
    let { userId: l, guildId: n, disabled: i } = e,
        { newestAnalyticsLocation: r } = (0, j.Ay)(),
        a = null != n,
        o = (0, V.Ay)(l, n),
        d = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(n ?? void 0).pendingBanner),
        u = (0, s.bG)([lf.default], () => lf.default.getCurrentUser()?.banner),
        c = (0, s.bG)([G.A], () =>
            null != n ? G.A.getGuildMemberProfile(l, n)?.banner : G.A.getUserProfile(l)?.banner,
        ),
        g = void 0 !== d,
        m = null === d,
        f = m || (!g && null == c),
        p = a && null != u,
        x = a && (o?.isUsingGuildMemberBanner() ?? !1),
        h = m && a && !x ? void 0 : d,
        v = (0, Z.Ac)(d, c)
            ? {
                  onClick: () => (0, lP.rM)(null, c, (e) => (0, lC.p)({ guildId: n ?? void 0, banner: e })),
                  type: p ? "reset" : "remove",
                  accessibleLabel: eL.intl.string(p ? eL.t.jHlJNS : eL.t.tT9n7D),
              }
            : void 0;
    return (0, t.jsx)(lN.V, {
        affordance: f ? "add" : v,
        variant: "square",
        onClick: () =>
            (0, lP.XD)({
                uploadType: lk.HL.BANNER,
                analyticsSource: r,
                guildId: n ?? void 0,
                stackingBehavior: "stack",
            }),
        accessibleLabel: eL.intl.string(eL.t.N0bC3P),
        "aria-haspopup": "dialog",
        disabled: i,
        dimContent: f && p,
        showOverlayOnHover: !0,
        renderPreview: (e) => (0, t.jsx)(lO, { displayProfile: o, pendingBanner: h, shouldAnimate: e }),
    });
}
var l_ = n(922301),
    lL = n(368919),
    lw = n(259065),
    lM = n(696451),
    lG = n(283607);
let lU = "heading-lg/bold";
function lV(e) {
    let { displayName: l, stylesPreview: n, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: lG.M,
        children:
            null != n
                ? (0, t.jsx)(eE.E, {
                      variant: lU,
                      children: (0, t.jsx)(lL.A, {
                          userName: l,
                          displayNameStyles: n,
                          effectDisplayType: i ? l_.G.ANIMATED : l_.G.STATIC,
                          textClassName: lG.W,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, t.jsx)(eE.E, { variant: lU, className: lG.W, color: "text-muted", children: l }),
    });
}
function lF(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: a } = (0, j.Ay)(),
        o = null != n,
        d = (0, s.bG)([lM.Ay], () => (null != n ? (lM.Ay.getMember(n, l.id)?.nick ?? null) : null)),
        u = (0, s.bG)([lf.default], () => lf.default.getCurrentUser()?.globalName ?? null),
        c = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(null).pendingGlobalName),
        g = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(n ?? null).pendingNickname),
        {
            userDisplayNameStyles: m,
            guildDisplayNameStyles: f,
            pendingDisplayNameStyles: p,
        } = (0, Z.B0)(l, n ?? void 0),
        x = o ? f : m,
        h = void 0 !== p,
        v = null === p || (!h && null == x),
        A = o && null != m,
        b = (0, Z.lw)({ pendingValue: p, userValue: m, guildValue: f, guildId: n ?? void 0 }),
        I = (e) => (null == e || "" === e ? void 0 : e),
        C = void 0 !== c ? c : u,
        N = o ? (I(void 0 !== g ? g : d) ?? I(C) ?? l.username) : (I(C) ?? l.username),
        y =
            null != b && (h ? null != p : null != x)
                ? {
                      onClick: () => (0, lC.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: A ? "reset" : "remove",
                      accessibleLabel: eL.intl.string(A ? eL.t.en3ogK : eL.t["Wqmi/h"]),
                  }
                : void 0,
        E = i.useCallback(() => {
            (0, lw.L)({ analyticsLocations: a, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [a, n]);
    return (0, t.jsx)(lN.V, {
        affordance: v ? "add" : y,
        variant: "bar",
        onClick: E,
        accessibleLabel: eL.intl.string(eL.t.XJ4oOO),
        "aria-haspopup": "dialog",
        dimContent: v && A,
        renderPreview: (e) => (0, t.jsx)(lV, { stylesPreview: b, displayName: N, shouldAnimate: e }),
        disabled: r,
    });
}
var lB = n(473219),
    lz = n(617061),
    lW = n(203632),
    lH = n(71393),
    lK = n(466681),
    lY = n(423393);
function lq(e) {
    let { effect: l, shouldAnimate: n } = e;
    return (0, t.jsxs)("div", {
        className: lK.B0,
        "aria-hidden": !0,
        children: [
            (0, t.jsx)("img", { src: lY.A, alt: "", className: lK.AH }),
            l?.skuId != null &&
                (0, t.jsx)(b.A, {
                    skuId: l.skuId,
                    autoPlay: !1,
                    resetOnHover: !0,
                    restartMethod: lW.HL.FromStart,
                    isHovering: n,
                    useOpacityOnHover: !1,
                    useThumbnail: !0,
                    delayIntro: !1,
                }),
        ],
    });
}
function l$(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: a } = (0, j.Ay)(),
        o = null != n,
        d = (0, s.bG)([lH.A], () => (null != n ? lH.A.getGuild(n) : null)),
        u = (0, Z.N2)({ user: l }),
        c = (0, Z.N2)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileEffect: g } = (0, Z.nZ)(n ?? void 0),
        m = void 0 !== g,
        f = null === g || (!m && null == c),
        p = o && null != u,
        x = (0, Z.lw)({ pendingValue: g, userValue: u, guildValue: c, guildId: n ?? void 0 }),
        h =
            null != x && (m ? null != g : null != c)
                ? {
                      onClick: () => (0, lC.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: p ? "reset" : "remove",
                      accessibleLabel: eL.intl.string(p ? eL.t["SQy/Po"] : eL.t.uMuafO),
                  }
                : void 0,
        v = i.useCallback(() => {
            (0, lz.W)({
                analyticsLocations: a,
                guild: d ?? void 0,
                initialSelectedEffect: x ?? void 0,
                stackingBehavior: "stack",
            });
        }, [a, d, x]);
    return (0, t.jsx)(lN.V, {
        affordance: f ? "add" : h,
        variant: "full-height-bar",
        onClick: v,
        accessibleLabel: eL.intl.string(eL.t["/dRfCf"]),
        "aria-haspopup": "dialog",
        disabled: r,
        dimContent: f && p,
        renderPreview: (e) => (0, t.jsx)(lq, { effect: x, shouldAnimate: e }),
    });
}
var lX = n(33851),
    lZ = n.n(lX),
    lJ = n(458217),
    lQ = n(298387);
function l0(e) {
    let { color: l, suggestedColors: n, disabled: r, ariaLabel: s, onSelect: o } = e,
        d = i.useRef(null),
        u = (0, lv.Hl)(l),
        c = (0, lv.bJ)(l, 0xffffff) < lJ.Tr.NonText;
    return (0, t.jsx)(lj.Y, {
        targetElementRef: d,
        renderPopout: (e) => (0, t.jsx)(lb.VN, { ...e, value: l, onChange: o, suggestedColors: n, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: l, ...n } = e;
            return (0, t.jsx)(ey.D, {
                ...n,
                innerRef: d,
                className: lQ.Dh,
                onClick: r ? void 0 : l,
                "aria-label": s,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)("div", { className: a()(lQ.Hy, { [lQ.rY]: c }), style: { backgroundColor: u } }),
            });
        },
    });
}
function l1(e) {
    let {
            primaryColor: l,
            secondaryColor: n,
            onSelectPrimaryColor: i,
            onSelectSecondaryColor: r,
            suggestedColors: a,
            disabled: s = !1,
        } = e,
        o = (0, lv.Hl)(l),
        d = (0, lv.Hl)(n),
        u = `linear-gradient(to bottom, ${o}, ${d})`,
        c = eL.intl.formatToPlainString(eL.t.FquTfm, { colorLabel: o }),
        g = eL.intl.formatToPlainString(eL.t.xOnm4z, { colorLabel: d });
    return (0, t.jsx)(lN.Y, {
        variant: "square",
        disabled: s,
        children: (0, t.jsxs)("div", {
            className: lQ.D7,
            style: { background: u },
            children: [
                (0, t.jsx)(l0, { color: l, suggestedColors: a, ariaLabel: c, onSelect: i, disabled: s }),
                (0, t.jsx)(l0, { color: n, suggestedColors: a, ariaLabel: g, onSelect: r, disabled: s }),
            ],
        }),
    });
}
function l7(e) {
    let { user: l, guildId: n, disabled: r = !1 } = e,
        a = (0, V.Ay)(l.id, n),
        { pendingThemeColors: o, pendingAvatar: d } = (0, s.cf)([Q.A], () => {
            let e = Q.A.getPendingChanges(n ?? void 0);
            return { pendingThemeColors: e.pendingThemeColors, pendingAvatar: e.pendingAvatar };
        }),
        u = (0, J.V7)({ userId: l.id, image: d }),
        { primaryColor: c, secondaryColor: g } = (0, F.A)({
            user: l,
            displayProfile: a,
            pendingThemeColors: o,
            pendingAvatarSrc: u ?? void 0,
            isPreview: !0,
        }),
        m = (0, lA.r)(li.A.unsafe_rawColors.PRIMARY_530).hex(),
        f = null != u ? u : l.getAvatarURL(n ?? void 0, 80),
        p = (0, lI.rh)(f, m, !1),
        x = i.useCallback(
            (e) => {
                let l = lZ()(e, a?.themeColors);
                (0, lC.p)({ guildId: n ?? void 0, themeColors: l ? void 0 : e });
            },
            [a?.themeColors, n],
        );
    return null == c || null == g
        ? null
        : (0, t.jsx)(l1, {
              primaryColor: c,
              secondaryColor: g,
              onSelectPrimaryColor: (e) => {
                  e !== c && x([e, g]);
              },
              onSelectSecondaryColor: (e) => {
                  e !== g && x([c, e]);
              },
              suggestedColors: p,
              disabled: r,
          });
}
var l2 = n(315629),
    l3 = n(235684);
function l9() {
    let e = () => {
        (0, lm.K)({ stackingBehavior: "stack" });
    };
    return (0, t.jsxs)(l2.h, {
        color: "nitro-pink",
        className: l3.k,
        children: [
            (0, t.jsx)(eE.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eL.intl.format(eL.t.TmfgI2, { onClick: e }),
            }),
            (0, t.jsx)(ld.$, {
                variant: "expressive",
                size: "md",
                icon: lu.t,
                text: eL.intl.string(eL.t.pj0XBN),
                onClick: e,
                fullWidth: !0,
            }),
        ],
    });
}
var l5 = n(847374),
    l8 = n(111159),
    l6 = n(548118),
    l4 = n(711014),
    ne = n(540637),
    nl = n(801461),
    nn = n(44482),
    nt = n(844222),
    ni = n(561392),
    nr = n(716263),
    na = n(15626),
    ns = n(930856);
function no(e) {
    let {
            options: l,
            value: n,
            onSelectionChange: r,
            label: s,
            className: o,
            listboxClassName: d,
            disabled: u = !1,
            loading: c = !1,
            maxOptionsVisible: g = 5,
            renderListItem: f,
            children: p,
        } = e,
        {
            isOpen: x,
            setIsOpen: h,
            refs: v,
            floatingStyles: A,
            getReferenceProps: j,
            getFloatingProps: b,
            transitionStyles: I,
        } = (function () {
            let { reducedMotion: e } = i.useContext(nt.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, ni.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, nr.DL)(o, {
                    common: { transformOrigin: "top left" },
                    initial: { opacity: 0.5, transform: "scaleY(0.96)" },
                    duration: 100,
                });
            return {
                isOpen: l,
                setIsOpen: n,
                refs: t,
                floatingStyles: r,
                getReferenceProps: a,
                getFloatingProps: s,
                transitionStyles: e.enabled ? {} : d,
            };
        })(),
        { setFloating: C } = v,
        N = i.useContext(na._),
        y = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        R = i.useRef(null),
        [S, D] = i.useState(null),
        O = null != S ? (0, nl.ZN)(P, S) : void 0,
        T = i.useRef(!1),
        _ = i.useRef(!1),
        L = i.useMemo(() => l.filter((e) => (0, nl.fI)(e.value, [n])), [n, l]),
        w = i.useCallback(() => {
            u || h(!x);
        }, [u, h, x]),
        M = i.useCallback(
            (e) => {
                x && 0 === e.button && e.preventDefault();
            },
            [x],
        ),
        G = i.useCallback(() => {
            h(!1), k.current?.focus();
        }, [h]),
        U = i.useCallback(
            (e) => {
                if (!R.current?.contains(e.relatedTarget)) {
                    if (_.current) {
                        _.current = !1;
                        return;
                    }
                    if (x && null != S) {
                        let e = l[S];
                        null != e && !0 !== e.disabled && r(e.value);
                    }
                    x && h(!1);
                }
            },
            [x, S, l, r, h],
        ),
        V = i.useCallback(
            (e) => {
                if (u) return;
                let l = e[0];
                null != l && (r(l.value), G());
            },
            [u, r, G],
        ),
        { activeIndex: F, handleKeyDown: B } = (0, ne.l)(!0, l),
        z = i.useRef(null);
    i.useEffect(() => {
        let e = F !== z.current;
        (z.current = F), null != F && e && (D(F), x || ((T.current = !0), h(!0)));
    }, [F, x, h]);
    let W = i.useCallback(
            (e) => {
                if (u) return;
                let n = l.length;
                switch (e.key) {
                    case "ArrowDown":
                    case "PageDown": {
                        let l = "PageDown" === e.key ? 10 : 1;
                        if (0 === n) return;
                        if ((e.preventDefault(), !x || e.altKey)) {
                            x || h(!0);
                            return;
                        }
                        D((e) => (null === e ? 0 : Math.min(e + l, n - 1)));
                        break;
                    }
                    case "ArrowUp":
                    case "PageUp": {
                        let t = "PageUp" === e.key ? 10 : 1;
                        if (0 === n) return;
                        if ((e.preventDefault(), e.altKey && x)) {
                            if (null != S) {
                                let e = l[S];
                                if (null != e && !0 !== e.disabled) {
                                    V([e]);
                                    break;
                                }
                            }
                            G();
                            break;
                        }
                        if (!x) return void h(!0);
                        D((e) => (null === e ? 0 : Math.max(e - t, 0)));
                        break;
                    }
                    case "Enter":
                    case " ":
                        if ((e.preventDefault(), e.stopPropagation(), !x)) return void h(!0);
                        if (null == S || S > n - 1) return;
                        {
                            let e = l[S];
                            if (null == e || !0 === e.disabled) return;
                            V([e]);
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === n)) return;
                        D(0), x || ((T.current = !0), h(!0));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === n)) return;
                        D(n - 1), x || ((T.current = !0), h(!0));
                        break;
                    case "Tab":
                        if (x && null != S) {
                            let e = l[S];
                            null != e && !0 !== e.disabled && r(e.value);
                        }
                        (_.current = !0), h(!1);
                        break;
                    case "Escape":
                        x && (e.preventDefault(), e.stopPropagation(), G());
                        break;
                    default:
                        B(e);
                }
            },
            [u, x, l, S, V, G, r, h, B],
        ),
        H = Math.max(
            l.findIndex((e) => e.id === L[L.length - 1]?.id),
            0,
        ),
        K = i.useRef(!1);
    i.useEffect(() => {
        c || !x || K.current
            ? x || ((K.current = !1), D(null), (T.current = !1))
            : ((K.current = !0), T.current || D(l.length > 0 ? H : null), (T.current = !1), k.current?.focus());
    }, [c, x, H, l.length]);
    let Y = {
        id: E,
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-controls": x ? P : void 0,
        "aria-expanded": x,
        "aria-activedescendant": O,
        "aria-disabled": !!u || void 0,
        "aria-labelledby": null != s ? `${y} ${E}` : void 0,
        "aria-errormessage": N?.errorMessageId,
        "aria-invalid": N?.errorMessageId != null || void 0,
        "aria-describedby": N?.describedById,
        onClick: w,
        onMouseDown: M,
        onKeyDown: W,
        onBlur: U,
    };
    return (0, t.jsxs)("div", {
        ref: (e) => {
            (R.current = e), v.setReference(e);
        },
        className: o,
        ...j(),
        children: [
            null != s && (0, t.jsx)(m.A, { tag: "label", id: y, children: s }),
            p({ buttonRef: k, selectButtonProps: Y }),
            !u &&
                x &&
                (0, t.jsx)("div", {
                    ref: C,
                    className: a()(ns.S_, d),
                    ...b(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(ne.q, {
                        id: P,
                        tabIndex: -1,
                        items: l,
                        selectionMode: "single",
                        selectedItems: L,
                        onSelectionChange: V,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: S,
                        renderListItem: (e) => (null != f ? f(e) : (0, t.jsx)(nn.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var nd = n(138325);
let nu = "MAIN_PROFILE";
function nc(e) {
    let { guild: l } = e;
    return (0, t.jsx)(l6.Ay, { className: nd.$f, guild: l, size: l6.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function ng(e) {
    let { leading: l, label: n, buttonRef: i, selectButtonProps: r } = e;
    return (0, t.jsxs)(ey.D, {
        innerRef: i,
        className: nd.L5,
        ...r,
        children: [
            l,
            (0, t.jsx)(eE.E, {
                variant: "text-md/medium",
                color: "text-strong",
                lineClamp: 1,
                className: nd.v9,
                children: n,
            }),
            (0, t.jsx)(l5.a, { className: nd.u4, size: "sm", color: li.A.colors.ICON_DEFAULT }),
        ],
    });
}
function nm(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a } = e,
        o = (0, s.bG)([l4.Ay], () => l4.Ay.getFlattenedGuildIds()),
        d = (0, s.bG)([lH.A], () => lH.A.getGuilds()),
        u = i.useMemo(() => {
            let e = {
                    id: nu,
                    label: eL.intl.string(eL.t["2p07FR"]),
                    value: nu,
                    leading: (0, t.jsx)(l8.p, { size: "refresh_sm", color: li.A.colors.ICON_DEFAULT }),
                },
                l = o
                    .map((e) => {
                        if (e === n) return null;
                        let l = d[e];
                        return null == l
                            ? null
                            : { id: l.id, label: l.name, value: l.id, leading: (0, t.jsx)(nc, { guild: l }) };
                    })
                    .filter(q.Vq),
                i = null != n ? d[n] : null;
            return null == i
                ? [e, ...l]
                : [e, { id: i.id, label: i.name, value: i.id, leading: (0, t.jsx)(nc, { guild: i }) }, ...l];
        }, [o, d, n]),
        c = l ?? nu,
        g = u.find((e) => e.value === c) ?? u[0],
        m = i.useCallback(
            (e) => {
                r(e === nu ? null : e);
            },
            [r],
        );
    return (0, t.jsx)(no, {
        className: nd.kL,
        label: eL.intl.string(eL.t.rki38K),
        listboxClassName: nd.yt,
        options: u,
        value: c,
        onSelectionChange: m,
        loading: a,
        children: (e) => (0, t.jsx)(ng, { leading: g.value === nu ? null : g.leading, label: g.label, ...e }),
    });
}
var nf = n(809467);
let np = "profile-modal-editing-panel",
    nx = "profile-modal-editing-panel-heading";
function nh(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(e0.m, {
        text: eL.intl.string(eL.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(ey.D, {
            innerRef: i,
            "aria-label": eL.intl.string(eL.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": np,
            className: a()(nf.eg, n),
            onClick: l,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(lt.V, { size: "sm", color: li.A.colors.ICON_STRONG }),
        }),
    });
}
function nv(e) {
    let { onClick: l, className: n, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(e0.m, {
            text: eL.intl.string(eL.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(lr.K, {
                buttonRef: i,
                "aria-label": eL.intl.string(eL.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": np,
                icon: lt.V,
                onClick: l,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function nA(e) {
    let { onClick: l, innerRef: n } = e;
    return (0, t.jsx)(e0.m, {
        text: eL.intl.string(eL.t["l/A351"]),
        ariaHidden: !0,
        children: (0, t.jsx)(ey.D, {
            innerRef: n,
            className: nf.cS,
            "aria-label": eL.intl.string(eL.t["l/A351"]),
            onClick: l,
            "aria-controls": np,
            "aria-expanded": !0,
            children: (0, t.jsx)(la.V, { size: "md", color: "currentColor" }),
        }),
    });
}
function nj() {
    let [e, l] = (0, lg.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: nf.X6,
              children: [
                  (0, t.jsx)(eE.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eL.intl.string(eL.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(ey.D, {
                      "aria-label": eL.intl.string(eL.t.rSe9ra),
                      className: nf.TD,
                      onClick: () => l(!0),
                      children: (0, t.jsx)(ls.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function nb() {
    let e = () => {
        (0, lm.K)({ stackingBehavior: "stack" });
    };
    return (0, t.jsxs)("div", {
        className: nf.eW,
        children: [
            (0, t.jsxs)("div", {
                className: nf.tm,
                children: [
                    (0, t.jsx)(lo.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: eL.intl.string(eL.t.bO0TOe),
                    }),
                    (0, t.jsx)(eE.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: eL.intl.format(eL.t["3PujdE"], { onClick: e }),
                    }),
                ],
            }),
            (0, t.jsx)(ld.$, {
                variant: "expressive",
                size: "sm",
                icon: lu.t,
                text: eL.intl.string(eL.t["7IWwak"]),
                onClick: e,
                fullWidth: !0,
            }),
            (0, t.jsx)("div", {
                className: nf.D0,
                children: (0, t.jsx)("div", { className: nf.ZN, children: (0, t.jsx)(lc.X, { size: "xs" }) }),
            }),
        ],
    });
}
function nI(e) {
    let { heading: l, children: n, disabled: i = !1, showNitroIcon: r = !1 } = e;
    return (0, t.jsxs)("div", {
        className: nf.Os,
        children: [
            (0, t.jsxs)("div", {
                className: nf.AM,
                children: [
                    (0, t.jsx)(lo.D, {
                        className: nf.i_,
                        variant: "text-sm/medium",
                        color: i ? "text-muted" : "text-strong",
                        children: l,
                    }),
                    r &&
                        (0, t.jsx)(e0.m, {
                            text: eL.intl.string(eL.t.BNg1ir),
                            shouldShow: !i,
                            ariaHidden: !0,
                            children: (0, t.jsx)(lu.t, {
                                className: nf.l3,
                                size: "xs",
                                color: i ? li.A.colors.ICON_MUTED : li.A.colors.ICON_STRONG,
                                "aria-hidden": !0,
                            }),
                        }),
                ],
            }),
            n,
        ],
    });
}
function nC(e) {
    let {
            selectedGuildId: l,
            originGuildId: n,
            onSelectGuildId: i,
            isLoading: r = !1,
            onClose: o,
            className: d,
            collapseButtonRef: c,
        } = e,
        g = (0, s.bG)([lf.default], () => lf.default.getCurrentUser()),
        p = (0, eK.A)(i),
        x = null != l,
        h = lp.Ay.canUsePremiumProfileCustomization(g),
        v = x && !h;
    return null == g
        ? null
        : (0, t.jsxs)("aside", {
              id: np,
              "aria-labelledby": nx,
              className: a()(nf.nd, { [nf.VU]: v }, d),
              "aria-busy": r,
              children: [
                  (0, t.jsx)(m.A, { children: (0, t.jsx)(f.H, { id: nx, children: eL.intl.string(eL.t["L+ch00"]) }) }),
                  (0, t.jsxs)("div", {
                      className: nf.wx,
                      children: [
                          (0, t.jsx)(nA, { innerRef: c, onClick: o }),
                          (0, t.jsx)(nm, { selectedGuildId: l ?? null, originGuildId: n, onChange: p, loading: r }),
                      ],
                  }),
                  (0, t.jsx)(f.F, {
                      children: (0, t.jsxs)(u.d_, {
                          className: nf.XG,
                          children: [
                              x && (h ? (0, t.jsx)(nj, {}) : (0, t.jsx)(nb, {})),
                              (0, t.jsx)(nI, {
                                  heading: eL.intl.string(eL.t.x5CoXR),
                                  disabled: r || v,
                                  children: (0, t.jsx)(lB.A, { user: g, guildId: l, disabled: r || v }),
                              }),
                              (0, t.jsxs)(nI, {
                                  heading: eL.intl.string(eL.t["50Nwpc"]),
                                  disabled: r || v,
                                  children: [
                                      (0, t.jsx)(lx.A, { user: g, guildId: l, disabled: r || v }),
                                      (0, t.jsx)(lh.A, { user: g, guildId: l, disabled: r || v }),
                                  ],
                              }),
                              (h || x) &&
                                  (0, t.jsx)(nI, {
                                      heading: eL.intl.string(eL.t.NEzEws),
                                      disabled: r,
                                      children: (0, t.jsx)(lF, { user: g, guildId: l, disabled: r || (x && !h) }),
                                  }),
                              h || x
                                  ? (0, t.jsxs)(nI, {
                                        heading: eL.intl.string(eL.t.Zenogr),
                                        disabled: r || v,
                                        showNitroIcon: !0,
                                        children: [
                                            (0, t.jsx)(l7, { user: g, guildId: l, disabled: r || !h }),
                                            (0, t.jsx)(lT, { userId: g.id, guildId: l, disabled: r || !h }),
                                        ],
                                    })
                                  : (0, t.jsx)(nI, {
                                        heading: eL.intl.string(eL.t["/X3fkf"]),
                                        disabled: r || v,
                                        children: (0, t.jsx)(ly, { user: g, disabled: r || x }),
                                    }),
                              (0, t.jsx)(nI, {
                                  heading: eL.intl.string(eL.t.wR5wOo),
                                  disabled: r,
                                  children: (0, t.jsx)(l$, { user: g, guildId: l, disabled: r || (x && !h) }),
                              }),
                          ],
                      }),
                  }),
                  !h && (0, t.jsx)(l9, {}),
              ],
          });
}
var nN = n(982599),
    ny = n(756634),
    nE = n(83013),
    nP = n(518477),
    nk = n(77085);
function nR(e) {
    let { userId: l } = e,
        n = (0, ea.g)(),
        { trackUserProfileAction: i } = (0, M.NJ)();
    return (0, t.jsx)(nE.A, {
        heading: eL.intl.string(eL.t["mQKv+v"]),
        scrollTargetId: nP.bk.NOTE,
        children: (0, t.jsx)(ny.A, {
            userId: l,
            className: nk.N,
            autoFocus: n === nP.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var nS = n(289873),
    nD = n(778599);
function nO(e) {
    let { isVisible: l, showLoadingSpinner: n, className: i } = e;
    return (0, t.jsx)("div", {
        className: a()(nD.f, l && nD.z, i),
        children: n && (0, t.jsx)(nS.y, { type: nS.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
    });
}
var nT = n(568602),
    n_ = n(625494);
function nL(e) {
    let { children: l } = e,
        [n, r] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = () => {
                r(!0),
                    setTimeout(() => {
                        r(!1);
                    }, 300);
            };
            return (
                n_._.subscribe(eZ.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    n_._.unsubscribe(eZ.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, t.jsx)(nT.b, { isShaking: n, intensity: 1.4, children: l })
    );
}
var nw = n(515054),
    nM = n(873174),
    nG = n(933832),
    nU = n(972213),
    nV = n(97483),
    nF = n(765178),
    nB = n(775602),
    nz = n(606758),
    nW = n(707238),
    nH = n(861173);
let nK = {
        [nP.jM.WIDGET_ADDED]: {
            message: eL.intl.string(eL.t.fFP1Uy),
            icon: (0, t.jsx)(nG.A, { size: "sm", color: li.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_added",
        },
        [nP.jM.WIDGET_REMOVED]: {
            message: eL.intl.string(eL.t.zzsK7h),
            icon: (0, t.jsx)(nG.A, { size: "sm", color: li.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_removed",
        },
        [nP.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eL.intl.string(eL.t["84MExs"]),
            icon: (0, t.jsx)(nU.d, { size: "sm", color: li.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_save_generic_failure",
            type: nV.Ck.FAILURE,
        },
        [nP.jM.SOMETHING_WENT_WRONG]: {
            message: eL.intl.string(eL.t.F8FvUy),
            icon: (0, t.jsx)(nU.d, { size: "sm", color: li.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_something_went_wrong",
            type: nV.Ck.FAILURE,
        },
    },
    nY = (e) => {
        let { message: l, icon: n, type: i } = e;
        return (0, t.jsxs)("div", {
            className: a()(nH.oR, nW.oR),
            "data-type": i,
            children: [
                (0, t.jsx)("div", { className: nW.RC, children: n }),
                (0, t.jsx)(eE.E, { color: "text-strong", variant: "text-sm/semibold", children: l }),
            ],
        });
    },
    nq = (e) => {
        let { className: l } = e,
            n = (0, nz.fu)(),
            r = (0, s.bG)([nB.A], () => nB.A.useReducedMotion),
            [o, u] = i.useState(!1),
            [c, g] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (u(!0), g(nK[n]), nF.O.announce(nK[n].message)) : u(!1);
        }, [n]);
        let m = (0, d.p)(
            o,
            {
                from: { transform: r ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                enter: { transform: "translateY(0)", opacity: 1 },
                leave: { transform: r ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                config: { mass: 1, tension: 200, friction: 18, clamp: !0 },
            },
            "animate-always",
        );
        return (
            i.useEffect(() => () => (0, nz.XA)(null), []),
            i.useEffect(() => {
                if (o) {
                    let e = setTimeout(() => {
                        (0, nz.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [o]),
            (0, t.jsx)(t.Fragment, {
                children: m(
                    (e, n) =>
                        n &&
                        null !== c &&
                        (0, t.jsx)(nM.animated.div, {
                            className: a()(l, nW.Jt),
                            style: e,
                            children: (0, t.jsx)(nY, { ...c }),
                        }),
                ),
            })
        );
    };
var n$ = n(297413),
    nX = n(878555),
    nZ = n(621466),
    nJ = n(219869),
    nQ = n(292666),
    n0 = n(539396);
function n1(e, l) {
    let [n, t] = i.useState("idle"),
        [r, a] = i.useState(e),
        o = "editing" === n,
        d = (0, s.bG)([nB.A], () => nB.A.useReducedMotion),
        u = i.useRef(null),
        c = i.useRef(null),
        g = i.useRef(null),
        m = i.useRef(!1),
        f = i.useId(),
        p = i.useCallback(() => {
            a(e), t("editing");
        }, [e]),
        x = i.useCallback(() => {
            l(r), t("done");
        }, [r, l]),
        h = i.useCallback(() => {
            t("done");
        }, []);
    i.useEffect(() => {
        "done" === n && (m.current && u.current?.focus({ preventScroll: !0 }), (m.current = !1));
    }, [n]),
        i.useEffect(() => {
            o &&
                null != c.current &&
                (g.current?.scrollIntoView({ block: "nearest", behavior: d ? "auto" : "smooth" }),
                c.current.focus({ preventScroll: !0 }),
                c.current.setSelectionRange(c.current.value.length, c.current.value.length));
        }, [o, d]);
    let v = i.useCallback(
            (e) => {
                !o || (null != g.current && (0, nZ.vq)(e.relatedTarget) && g.current.contains(e.relatedTarget)) || x();
            },
            [o, x],
        ),
        A = i.useCallback(
            (e) => {
                o && "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), (m.current = !0), h());
            },
            [o, h],
        );
    return {
        isEditing: o,
        editedValue: r,
        setEditedValue: a,
        editButtonRef: u,
        inputRef: c,
        inputId: f,
        handleStartEditing: p,
        handleCommit: x,
        handleCancel: h,
        previewProps: { isEditing: o, editButtonRef: u, onStartEditing: p, wrapperRef: g, onBlur: v, onKeyDown: A },
        inputProps: {
            inputId: f,
            inputRef: c,
            value: r,
            onChange: a,
            onCommit: () => {
                (m.current = !0), x();
            },
            onCancel: () => {
                (m.current = !0), h();
            },
        },
    };
}
function n7(e) {
    let { text: l, htmlFor: n } = e;
    return (0, t.jsx)(m.A, { tag: "label", htmlFor: n, children: l });
}
function n2(e) {
    let {
            inputId: l,
            inputRef: n,
            label: r,
            value: a,
            onChange: s,
            onCommit: o,
            onCancel: d,
            onBlur: u,
            maxLength: c,
            placeholder: g,
            trailing: m,
        } = e,
        f = i.useCallback(
            (e) => {
                "Enter" === e.key
                    ? (e.preventDefault(), o())
                    : "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), d());
            },
            [o, d],
        );
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(n7, { text: r, htmlFor: l }),
            (0, t.jsx)(nQ.k, {
                id: l,
                inputRef: n,
                value: a,
                onChange: s,
                onBlur: u,
                onKeyDown: f,
                maxLength: c,
                placeholder: g,
                trailing: m,
            }),
        ],
    });
}
function n3(e) {
    let { tooltip: l, ...n } = e,
        i = (0, t.jsx)("div", {
            className: n0.L7,
            children: (0, t.jsx)(nJ.T, { ...n, size: "sm", variant: "input-accessory" }),
        });
    return null == l ? i : (0, t.jsx)(e0.m, { text: l, ariaHidden: !0, children: i });
}
function n9(e) {
    let {
            isEditing: l,
            preview: n,
            placeholder: r,
            input: s,
            editButtonRef: o,
            editButtonAriaLabel: d,
            onStartEditing: u,
            variant: c,
            trailing: g,
            className: m,
            wrapperRef: f,
            onBlur: p,
            onKeyDown: x,
        } = e,
        h = i.useRef(null),
        v = i.useId(),
        A = null == n,
        j = (0, t.jsxs)("div", {
            ref: h,
            className: n0.LL,
            onClick: u,
            children: [
                A
                    ? (0, t.jsx)(eE.E, {
                          id: v,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: n0.qf,
                          children: r,
                      })
                    : n,
                (0, t.jsx)(ey.D, {
                    innerRef: o,
                    "aria-label": d,
                    "aria-describedby": A ? v : void 0,
                    "aria-expanded": !1,
                    onClick: (e) => {
                        e.stopPropagation(), u();
                    },
                    focusProps: { ringTarget: h },
                }),
                null != g && (0, t.jsx)("div", { className: n0.lD, children: (0, t.jsx)(n3, { ...g }) }),
            ],
        });
    return (0, t.jsx)("div", {
        ref: f,
        className: a()(n0.kL, { [n0.oE]: "compact" === c }, m),
        onBlur: p,
        onKeyDown: x,
        children: (0, t.jsx)(
            "div",
            { className: n0.qG, children: l ? s : (0, t.jsx)("div", { className: n0.VH, children: j }) },
            l ? "editing" : "preview",
        ),
    });
}
var n5 = n(35783);
function n8(e) {
    let l,
        n,
        r,
        a,
        o,
        d,
        u,
        c,
        g,
        { user: m, displayProfile: f } = e,
        { analyticsLocations: p } = (0, j.Ay)(),
        x = f?.guildId != null,
        h = f?.guildId ?? void 0,
        v = lp.Ay.canUsePremiumProfileCustomization(m),
        {
            value: A,
            previewValue: b,
            onCommit: I,
        } = ((l = f?.guildId ?? null),
        (n = f?.guildId != null),
        (r = (0, s.bG)([lf.default], () => lf.default.getCurrentUser()?.globalName ?? null)),
        (a = (0, s.bG)([lM.Ay], () => (null != l ? (lM.Ay.getMember(l, m.id)?.nick ?? null) : null))),
        (o = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(l).pendingNickname)),
        (u = n ? (d ?? a ?? "") : (o ?? r ?? "")),
        (c = (e) => (null == e || "" === e ? void 0 : e)),
        (g = void 0 !== o ? o : r),
        {
            value: u,
            previewValue: n ? (c(void 0 !== d ? d : a) ?? c(r)) : (c(g) ?? m.username),
            onCommit: i.useCallback(
                (e) => {
                    n
                        ? (0, lC.p)({ nickname: e.trim(), guildId: f?.guildId ?? void 0 })
                        : (0, lC.p)({ globalName: e.trim() });
                },
                [n, f?.guildId],
            ),
        }),
        { isEditing: C, previewProps: N, inputProps: y, handleCommit: E } = n1(A, I),
        P = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(h ?? null).pendingDisplayNameStyles),
        k = eL.intl.string(x ? eL.t.mq6Cg9 : eL.t.XuZU7A),
        R = x ? (m.globalName ?? m.username) : m.username,
        S = eL.intl.string(x ? eL.t["g7OSZ/"] : eL.t.kyfzzc),
        D = i.useRef(null),
        O = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    C && E(),
                    (0, lw.L)({ analyticsLocations: p, guildId: h, stackingBehavior: "stack", returnRef: D });
            },
            [C, E, p, h],
        ),
        T = {
            icon: lt.V,
            tooltip: eL.intl.string(eL.t.lqKKI2),
            "aria-label": eL.intl.string(eL.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: O,
            buttonRef: D,
        },
        _ = v ? T : void 0,
        L =
            null != b
                ? (0, t.jsx)(nX.c$, {
                      user: m,
                      guildId: h,
                      displayName: b,
                      size: "lg",
                      pendingDisplayNameStyles: P,
                      className: n5.d,
                  })
                : null;
    return (0, t.jsx)(n9, {
        ...N,
        preview: L,
        placeholder: R,
        editButtonAriaLabel: S,
        trailing: _,
        input: (0, t.jsx)(n2, { ...y, label: k, maxLength: eZ.zzC, placeholder: R, trailing: _ }),
    });
}
var n6 = n(469432);
function n4(e) {
    let l,
        n,
        r,
        o,
        d,
        { displayProfile: u } = e,
        {
            value: c,
            previewValue: g,
            onCommit: m,
        } = ((l = u?.guildId ?? null),
        (n = u?.guildId != null),
        (r = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(l).pendingPronouns)),
        (o = n ? u?._guildMemberProfile?.pronouns : u?.pronouns),
        (d = u?.getPreviewPronouns(r) ?? void 0),
        {
            value: r ?? o ?? "",
            previewValue: d,
            onCommit: i.useCallback(
                (e) => {
                    (0, lC.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        { previewProps: f, inputProps: p, isEditing: x } = n1(c, m),
        h = null != g && g.length > 0;
    return (0, t.jsx)(n9, {
        ...f,
        variant: "compact",
        className: a()(n6.k, x && n6.J),
        preview: h ? (0, t.jsx)(nX.n2, { pronouns: g }) : null,
        placeholder: eL.intl.string(eL.t["76Aqhl"]),
        editButtonAriaLabel: eL.intl.string(eL.t.h6VAO7),
        input: (0, t.jsx)(n2, {
            ...p,
            label: eL.intl.string(eL.t["rniRE+"]),
            placeholder: eL.intl.string(eL.t["76Aqhl"]),
            maxLength: eZ.VE5,
        }),
    });
}
var te = n(145497),
    tl = n(685073),
    tn = n(318785),
    tt = n(534400),
    ti = n(743981),
    tr = n(724637),
    ta = n(329296);
let ts = "no-server-tag";
function to(e) {
    let { buttonRef: l, guildId: n, guildTag: i, guildBadge: r, ...s } = e,
        o = null == i || null == n;
    return (0, t.jsx)(ey.D, {
        innerRef: l,
        className: a()(tr.L5, { [tr.wK]: o }),
        ...s,
        children: (0, t.jsxs)(eE.E, {
            variant: o ? "text-xs/normal" : "text-xs/semibold",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: tr.W3,
            tag: "span",
            children: [
                o
                    ? eL.intl.string(eL.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  tt.Z9,
                                  {
                                      src: (0, tl.gC)(n, r, ti.Sl.SIZE_14),
                                      size: ti.Sl.SIZE_14,
                                      className: tr.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, tl.gC)(n, r, ti.Sl.SIZE_14) ?? n,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(l5.a, { size: "xs", color: "currentColor", className: tr.u4 }),
            ],
        }),
    });
}
function td() {
    let e = (0, tn.b)(),
        l = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        n = (0, s.bG)([lf.default], () => {
            let e = lf.default.getCurrentUser();
            return (0, tl.Zo)(e?.primaryGuild).guildId ?? null;
        }),
        r = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(null).pendingPrimaryGuildId),
        a = void 0 !== r ? r : n,
        o = null != a ? (l.get(a) ?? null) : null,
        d = o?.profile?.tag ?? null,
        u = o?.profile?.badge ?? void 0,
        c = i.useCallback(
            (e) =>
                e.id === ts
                    ? (0, t.jsx)("div", {
                          className: ta.uN,
                          children: (0, t.jsx)(eE.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: tr.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(nn.c, { ...e }),
            [],
        ),
        g = i.useMemo(
            () => [
                { id: ts, label: eL.intl.string(eL.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let l = e.profile?.tag;
                    if (null == l) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(te.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(tt.o9, { guildId: e.id, guildTag: l, guildBadge: n }),
                        },
                    ];
                }),
            ],
            [e],
        ),
        m = i.useCallback((e) => {
            (0, lC.p)({ primaryGuildId: e });
        }, []);
    return 0 === e.length
        ? null
        : (0, t.jsx)(no, {
              options: g,
              value: a,
              onSelectionChange: m,
              label: eL.intl.string(eL.t.Pdd1nd),
              listboxClassName: tr.yt,
              renderListItem: c,
              children: (e) => {
                  let { buttonRef: l, selectButtonProps: n } = e;
                  return (0, t.jsx)(to, { buttonRef: l, guildId: a, guildTag: d, guildBadge: u, ...n });
              },
          });
}
var tu = n(874644);
function tc(e) {
    let { user: l, displayProfile: n, nickname: i, trailing: r, onClose: a, allowEditing: s } = e;
    if (!s)
        return (0, t.jsx)(nX.Ay, {
            user: l,
            guildId: n?.guildId ?? void 0,
            displayName: i,
            displayNameSize: "lg",
            pronouns: n?.pronouns,
            trailing: r,
            onClose: a,
        });
    let o = l.isProvisional
        ? null
        : (0, t.jsx)(n$.A, {
              user: l,
              forceUsername: !0,
              className: tu.a1,
              usernameClass: tu.eb,
              discriminatorClass: tu.sw,
              hideBotTag: !0,
          });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(n8, { displayProfile: n, user: l }),
            (0, t.jsxs)("div", {
                className: `${tu.AK} ${tu.j6}`,
                children: [o, (0, t.jsx)(nX.Ce, {}), (0, t.jsx)(n4, { displayProfile: n }), (0, t.jsx)(td, {}), r],
            }),
        ],
    });
}
n(321073);
var tg = n(97808),
    tm = n(980707),
    tf = n(477782),
    tp = n(22231),
    tx = n(601255),
    th = n(562819),
    tv = n(19575),
    tA = n(106106),
    tj = n(338165);
let tb = tv.Ay.getEnableHardwareAcceleration() ? tg.Js : tg.eu;
function tI(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(tm.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eL.intl.string(eL.t.YAgq3W),
        children: (0, t.jsx)(tf.rX, { children: n }),
    });
}
function tC(e) {
    let { user: l, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, eo.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useCallback(() => u(!1), []),
        m = (function (e) {
            let { user: l, guildId: n, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, j.Ay)(),
                d = null != n,
                u = (0, s.bG)([lM.Ay], () => (null != n ? lM.Ay.getMember(n, l.id) : null)),
                c = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(n ?? void 0).pendingAvatar),
                g = d ? u?.avatar : l.avatar,
                m = (0, Z.z5)(c, g),
                f = d && null != l.avatar,
                p = lp.Ay.canUsePremiumProfileCustomization(l),
                x = p || null == n,
                h = p || null == n,
                v = (0, s.bG)([lH.A], () => (null != n ? lH.A.getGuild(n) : null)),
                A = (0, Z.a4)({ user: l }),
                b = (0, Z.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: I } = (0, Z.CP)(n ?? void 0),
                C = void 0 !== I,
                N = null != (0, tx.A)(C ? I : b) && (C ? null != I : null != b),
                y = d && null != A,
                E = i.useCallback(() => {
                    r(),
                        (0, lP.XD)({
                            uploadType: lk.HL.AVATAR,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                P = i.useCallback(() => {
                    r(), (0, th.L)({ analyticsLocations: o, guild: v ?? void 0, stackingBehavior: "stack" });
                }, [r, o, v]),
                k = i.useCallback(() => {
                    r(),
                        (0, lP.rM)(null, g, (e) => (0, lC.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, Z.WU)(f ? "reset" : "remove");
                }, [r, n, g, f]),
                R = i.useCallback(() => {
                    r(), (0, lC.p)({ guildId: n ?? void 0, avatarDecoration: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, t.jsx)(
                                tf.Dr,
                                { id: "change-avatar", label: eL.intl.string(eL.t["4OynCD"]), action: E },
                                "change-avatar",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, t.jsx)(
                                tf.Dr,
                                { id: "change-decoration", label: eL.intl.string(eL.t.HykynS), action: P },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        m &&
                        e.push(
                            f
                                ? (0, t.jsx)(
                                      tf.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.TDjKDm),
                                          action: k,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      tf.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.twB3fz),
                                          action: k,
                                      },
                                      "remove-avatar",
                                  ),
                        ),
                    h &&
                        N &&
                        e.push(
                            y
                                ? (0, t.jsx)(
                                      tf.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eL.intl.string(eL.t["2u5yu0"]),
                                          action: R,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      tf.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eL.intl.string(eL.t["9rx5GO"]),
                                          action: R,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [f, x, h, y, m, N, E, P, k, R]);
        })({ user: l, guildId: n, onClose: g });
    return 0 === m.length
        ? (0, t.jsx)(eo.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(tA.my, tA.vk, tj.kL, { [tj.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(tb, { ...r, imageClassName: a()(tA.Lw, tj.HU) }),
                  (0, t.jsx)(lj.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: lj.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: g,
                      renderPopout: (e) => (0, t.jsx)(tI, { ...e, items: m, onMenuClose: g }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: tj.r9,
                              children: (0, t.jsx)(lr.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: tp.R,
                                  "aria-label": eL.intl.string(eL.t.YAgq3W),
                                  onClick: (e) => {
                                      e.stopPropagation(), u((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var tN = n(976726);
function ty(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(tm.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eL.intl.string(eL.t.FzU73A),
        children: (0, t.jsx)(tf.rX, { children: n }),
    });
}
function tE(e) {
    let { user: l, guildId: n } = e,
        [r, o] = i.useState(!1),
        d = i.useRef(null),
        u = i.useCallback(() => o(!1), []),
        c = (function (e) {
            let { user: l, guildId: n, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, j.Ay)(),
                d = (0, Z.N2)({ user: l, guildId: n ?? void 0 }),
                u = lp.Ay.canUsePremiumProfileCustomization(l),
                c = u || null == n,
                g = null != n,
                { pendingBanner: m, pendingProfileEffect: f } = (0, s.bG)([Q.A], () =>
                    Q.A.getPendingChanges(n ?? void 0),
                ),
                p = (0, s.bG)([G.A], () =>
                    null != n ? G.A.getGuildMemberProfile(l.id, n)?.banner : G.A.getUserProfile(l.id)?.banner,
                ),
                x = (0, s.bG)([lf.default], () => lf.default.getCurrentUser()?.banner != null),
                h = (0, s.bG)([G.A], () => G.A.getUserProfile(l.id)?.profileEffect != null),
                v = (0, Z.Ac)(m, p),
                A = g && x,
                b = g && h,
                I = void 0 === f ? null != d : null != f,
                C = i.useCallback(() => {
                    r(),
                        (0, lP.XD)({
                            uploadType: lk.HL.BANNER,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                N = i.useCallback(() => {
                    r(),
                        (0, lz.W)({
                            analyticsLocations: o,
                            guild: null != n ? (lH.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, d]),
                y = i.useCallback(() => {
                    r(), (0, lP.rM)(null, p, (e) => (0, lC.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, p]),
                E = i.useCallback(() => {
                    r(), (0, lC.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    u &&
                        e.push(
                            (0, t.jsx)(
                                tf.Dr,
                                { id: "change-banner", label: eL.intl.string(eL.t.N0bC3P), action: C },
                                "change-banner",
                            ),
                        ),
                    c &&
                        e.push(
                            (0, t.jsx)(
                                tf.Dr,
                                { id: "change-effect", label: eL.intl.string(eL.t["/6nv6N"]), action: N },
                                "change-effect",
                            ),
                        ),
                    u &&
                        v &&
                        e.push(
                            A
                                ? (0, t.jsx)(
                                      tf.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.jHlJNS),
                                          action: y,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      tf.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.tT9n7D),
                                          action: y,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    c &&
                        I &&
                        e.push(
                            b
                                ? (0, t.jsx)(
                                      tf.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.Lb7lu9),
                                          action: E,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      tf.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.zUOlT6),
                                          action: E,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    e
                );
            }, [A, u, c, b, v, I, C, N, y, E]);
        })({ user: l, guildId: n, onClose: u });
    return 0 === c.length
        ? (0, t.jsx)(eu.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(tN.kL, { [tN.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(eu.A, { ...e, className: tN.Pr }),
                  (0, t.jsx)(lj.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: lj.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: u,
                      renderPopout: (e) => (0, t.jsx)(ty, { ...e, items: c, onMenuClose: u }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: tN.r9,
                              children: (0, t.jsx)(lr.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: tp.R,
                                  "aria-label": eL.intl.string(eL.t.FzU73A),
                                  onClick: (e) => {
                                      e.stopPropagation(), o((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var tP = n(777480),
    tk = n(107563),
    tR = n(570287);
n(938796);
var tS = n(913453),
    tD = n(667049),
    tO = n(837531),
    tT = n(186272),
    t_ = n(645625),
    tL = n(337796);
let tw = (e) => e * (2 - e),
    tM = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } },
    tG = (e) => {
        let { type: l, anchor: n } = e;
        return "staple" !== l || "bottom" !== n;
    };
function tU(e) {
    let { displayProfile: l, pendingBanner: n } = e,
        r = (0, B.Nx)(),
        [a, s] = i.useState(void 0);
    if (
        (i.useEffect(() => {
            if (null == n || r) return;
            let e = !1;
            return (
                er(n, 1024)
                    .then((l) => {
                        e || s(l);
                    })
                    .catch(() => {
                        e || s(n);
                    }),
                () => {
                    (e = !0), s(void 0);
                }
            );
        }, [r, n]),
        r)
    )
        return null;
    let o = null != n ? (a ?? null) : l?.getPreviewBanner(n, !1, 1024);
    return null == o
        ? null
        : (0, t.jsx)("div", { className: t_.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function tV(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: i } = e,
        r = void 0 !== n ? n : l?.profileEffect;
    return null == r ? null : (0, t.jsx)(b.A, { skuId: r.skuId, isHovering: i });
}
function tF(e) {
    let {
            user: l,
            currentUser: n,
            guildId: r,
            originGuildId: o,
            channelId: d,
            displayProfile: g,
            nickname: m,
            hasEntered: f,
            customStatusPrompt: p,
            onClose: x,
            avatarDecorationOverride: v,
            avatarOverride: A,
            bannerOverride: j,
            profileEffectOverride: b,
            profileFrame: I,
            allowEditing: C = !1,
            isLoading: y = !1,
        } = e,
        E = l.id === n.id,
        O = i.useRef(null),
        { isHoveringOrFocusing: L } = (0, P.A)(O),
        [M, G] = i.useState(),
        U = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? G("compact-xs") : l <= 380 ? G("compact-sm") : G(void 0);
        }, []);
    (0, h.g)(O, U, [], { fireOnMount: !0 });
    let V = null != M ? tM[M] : void 0,
        F = i.useMemo(() => p ?? (0, k.A)(), [p]),
        { relationshipType: B, originApplicationId: X } = (0, s.cf)([T.A], () => ({
            relationshipType: T.A.getRelationshipType(l.id),
            originApplicationId: T.A.getOriginApplicationId(l.id),
        })),
        Z = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        J = (0, S.q)({ userId: l.id }),
        Q = (0, R.fi)(l.id),
        { appIdentities: el, connections: en } = (function (e) {
            let { filteredAppIdentities: l } = (0, Y.A)(e),
                n = (0, $.A)(e),
                t = (0, H.useIsRiotSocialSDKMigrationEnabled)({
                    location: "useVisibleUserProfileConnectionsAndAppIdentities",
                }),
                r = i.useMemo(() => new Set(t ? (l?.map((e) => e.application_id) ?? []) : []), [l, t]),
                a = (0, K.A)([...r]).filter(q.Vq);
            return {
                appIdentities: i.useMemo(
                    () =>
                        l
                            .map((e) => ({ identity: e, application: a.find((l) => l.id === e.application_id) }))
                            .filter((e) => {
                                let { application: l } = e;
                                return null != l;
                            }),
                    [l, a],
                ),
                connections: i.useMemo(
                    () =>
                        t
                            ? n.filter((e) => {
                                  let l = W.A.get(e.type);
                                  return l?.replacedBy == null || !r.has(l.replacedBy);
                              })
                            : n,
                    [n, r, t],
                ),
            };
        })(l.id),
        et = (0, z.A)(l.id),
        ei = C ? tE : eu.A,
        er = C ? tC : eo.A;
    return (0, t.jsxs)("main", {
        className: a()(t_.profile, null != M && t_[M]),
        ref: O,
        "aria-busy": y,
        children: [
            (0, t.jsxs)("div", {
                className: t_.profileHeader,
                children: [
                    (0, t.jsx)(ei, {
                        user: l,
                        displayProfile: g,
                        guildId: r,
                        themeType: ee.d.MODAL_V2,
                        specOverrides: V,
                        pendingBanner: j,
                    }),
                    (0, t.jsx)(ex.A, { userId: l.id, onClose: x, className: t_.interactionToast }),
                    (0, t.jsx)(er, {
                        user: l,
                        displayProfile: g,
                        guildId: r,
                        channelId: d,
                        themeType: ee.d.MODAL_V2,
                        specOverrides: V,
                        avatarDecorationOverride: v,
                        avatarOverride: A,
                    }),
                    (0, t.jsx)(eI.A, {
                        user: l,
                        guildId: r,
                        channelId: d,
                        themeType: ee.d.MODAL_V2,
                        hasEntered: f,
                        prompt: E ? F : null,
                    }),
                ],
            }),
            (0, t.jsxs)(u.Ip, {
                fade: !0,
                className: t_.profileBody,
                children: [
                    (0, t.jsx)(em.A, { userId: l.id }),
                    (0, t.jsx)(tc, {
                        user: l,
                        displayProfile: g,
                        nickname: m,
                        trailing: (0, t.jsx)(ed.A, { displayProfile: g, themeType: ee.d.MODAL_V2, onClose: x }),
                        onClose: x,
                        allowEditing: C,
                    }),
                    B === eZ.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(eb.A.Overlay, {
                            className: t_.profileOverlay,
                            children: (0, t.jsx)(ep.A, {
                                user: l,
                                applicationId: X,
                                guildId: g?.guildId ?? void 0,
                                channelId: d,
                                className: t_.profileBanner,
                            }),
                        }),
                    Q.map((e) => {
                        let { applicationId: n } = e;
                        return (0, t.jsx)(
                            eb.A.Overlay,
                            {
                                className: t_.profileOverlay,
                                children: (0, t.jsx)(ep.A, {
                                    user: l,
                                    guildId: g?.guildId ?? void 0,
                                    channelId: d,
                                    isGameRelationship: !0,
                                    applicationId: n,
                                    className: t_.profileBanner,
                                }),
                            },
                            n,
                        );
                    }),
                    l.isProvisional &&
                        (0, t.jsx)(eb.A.Overlay, {
                            className: t_.profileOverlay,
                            children: (0, t.jsx)(nE.A, {
                                heading: eL.intl.string(eL.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(c.E, { size: "xs", color: "currentColor" }),
                                className: t_.profileBanner,
                                children: (0, t.jsx)(D.T, { userId: l.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(ej.A, { user: l, className: t_.profileBanner }),
                    g?.private &&
                        (0, t.jsx)(eb.A.Overlay, {
                            className: t_.profileOverlay,
                            children: (0, t.jsx)(eA.A, { username: m }),
                        }),
                    (0, t.jsx)("div", {
                        className: t_.profileButtons,
                        children: (0, t.jsx)(eJ, {
                            user: l,
                            currentUser: n,
                            guildId: r,
                            originGuildId: o,
                            channelId: d,
                            displayProfile: g,
                            relationshipType: B,
                            onClose: x,
                        }),
                    }),
                    E && (0, t.jsx)(eg.A, { isPremiumUser: (0, w.ki)(n), onInteraction: x }),
                    !Z && (0, t.jsx)(ec.E, { userBio: g?.bio, setLineClamp: !1 }),
                    J.length > 0 &&
                        (0, t.jsx)(nE.A, {
                            heading: eL.intl.string(eL.t["Uv/eTx"]),
                            children: (0, t.jsx)(ef.A, { applicationIds: J }),
                        }),
                    (0, t.jsx)(nE.A, {
                        heading: eL.intl.string(eL.t.a6XYD9),
                        children: (0, t.jsx)(eh.A, { userId: l.id, guildId: g?.guildId, tooltipDelay: nP.In }),
                    }),
                    g?.guildId != null &&
                        (0, t.jsx)(eC.A, {
                            userId: l.id,
                            guildId: g.guildId,
                            className: t_.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "currentColor",
                        }),
                    (en.length > 0 || el.length > 0) &&
                        (0, t.jsx)(nE.A, {
                            heading: eL.intl.string(eL.t["3fe7U5"]),
                            scrollTargetId: nP.bk.CONNECTIONS,
                            children: (0, t.jsx)(ln, {
                                applicationIdentities: el,
                                connections: en,
                                userId: l.id,
                                className: t_.profileAppConnections,
                            }),
                        }),
                    et.length > 0 &&
                        (0, t.jsx)(nE.A, {
                            heading: eL.intl.string(eL.t.PHjkRE),
                            scrollTargetId: nP.bk.APPS,
                            children: (0, t.jsx)(eG, {
                                applicationRoleConnections: et,
                                onClose: x,
                                className: t_.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(nR, { userId: l.id }),
                ],
            }),
            (0, t.jsx)(tV, { displayProfile: g, profileEffectOverride: b, isHovering: L }),
            null != I && (0, t.jsx)(N.A, { frame: I, filterLayer: tG }),
        ],
    });
}
function tB(e) {
    let { user: l, displayProfile: n, pendingThemeColors: i, children: r } = e,
        {
            theme: a,
            primaryColor: s,
            secondaryColor: o,
        } = (0, F.A)({ user: l, displayProfile: n, pendingThemeColors: i }),
        { profileThemeStyle: d, profileThemeClassName: u } = (0, X.A)({
            theme: a,
            themeType: null,
            primaryColor: s,
            secondaryColor: o,
        });
    return (0, t.jsx)("div", { className: u, style: d, children: r });
}
function tz(e) {
    let {
            user: l,
            currentUser: n,
            guildId: r,
            originGuildId: o,
            channelId: u,
            messageId: c,
            roleId: h,
            sessionId: b,
            initialTabSection: N,
            initialScrollTarget: P,
            transitionState: k,
            customStatusPrompt: R,
            openedAt: S,
            onClose: D,
            sourceAnalyticsLocations: _ = [],
            themeContainerClassName: w,
        } = e,
        F = l.id === n.id,
        {
            guildId: B,
            pendingGuildId: z,
            isLoading: W,
            selectUserProfile: H,
        } = (function (e) {
            let { userId: l, initialGuildId: n } = e,
                [t, r] = i.useState(n),
                [a, s] = i.useState(n),
                o = i.useRef(a),
                d = i.useCallback((e) => {
                    r(e ?? void 0);
                }, []);
            return (
                i.useEffect(() => {
                    let e = !1;
                    return (
                        (0, ei.A)(l, void 0, {
                            type: "modal",
                            guildId: t,
                            withMutualFriendsCount: !0,
                            withMutualFriends: !1,
                            withMutualGuilds: !0,
                        }).then(
                            () => {
                                e || (s(t), (o.current = t));
                            },
                            () => {
                                e || r(o.current);
                            },
                        ),
                        () => {
                            e = !0;
                        }
                    );
                }, [t, l]),
                { guildId: a, pendingGuildId: t, isLoading: t !== a, selectUserProfile: d }
            );
        })({ userId: l.id, initialGuildId: r }),
        K = i.useMemo(() => (null != B ? { [B]: [l.id] } : {}), [B, l.id]);
    (0, v.Eq)(K, "UserProfileModalV2");
    let Y = (0, U.X)("UserProfileModalV2"),
        q = F && Y,
        {
            pendingThemeColors: $,
            avatarDecorationOverride: X,
            avatarOverride: el,
            bannerOverride: er,
            profileEffectOverride: eo,
        } = (function (e) {
            let { user: l, guildId: n, allowEditingInModal: t } = e;
            return (0, s.cf)([Q.A], () => {
                if (!t) return et;
                let {
                    pendingThemeColors: e,
                    pendingAvatarDecoration: i,
                    pendingAvatar: r,
                    pendingBanner: a,
                    pendingProfileEffect: s,
                } = Q.A.getPendingChanges(n);
                return {
                    pendingThemeColors: e,
                    avatarDecorationOverride:
                        void 0 === i
                            ? void 0
                            : (0, Z.lw)({ userValue: l.avatarDecoration, pendingValue: i, guildId: n }),
                    avatarOverride: (0, J.V7)({ userId: l.id, image: r, size: en }),
                    bannerOverride: a,
                    profileEffectOverride: s,
                };
            }, [l, n, t]);
        })({ user: l, allowEditingInModal: q, guildId: B }),
        {
            isExpanded: ed,
            isAnimating: eu,
            transition: ec,
            handleExpand: eg,
            handleCollapse: em,
            refs: { expandIconButtonRef: ef, expandTabButtonRef: ep, collapseButtonRef: ex },
        } = (function () {
            let [e, l] = i.useState(() => window.innerWidth > 928),
                [n, t] = i.useState(!1),
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: tw },
                    onRest: () => t(!1),
                }),
                a = (0, x.A)("(min-width: 929px) and (min-height: 550px)"),
                s = i.useRef(null),
                o = i.useRef(null),
                u = i.useRef(null),
                c = i.useRef(null),
                g = i.useCallback(() => {
                    (c.current = "collapse"), t(!0), l(!0);
                }, []),
                m = i.useCallback(() => {
                    (c.current = "expand"), t(!0), l(!1);
                }, []);
            return (
                i.useEffect(() => {
                    if (!n) {
                        if ("collapse" === c.current && e) (c.current = null), u.current?.focus();
                        else if ("expand" === c.current && !e) {
                            c.current = null;
                            let e = a ? o.current : s.current;
                            e?.focus();
                        }
                    }
                }, [e, n, a]),
                {
                    isExpanded: e,
                    isAnimating: n,
                    transition: r,
                    handleExpand: g,
                    handleCollapse: m,
                    refs: { expandIconButtonRef: s, expandTabButtonRef: o, collapseButtonRef: u },
                }
            );
        })(),
        eh = q && !ed,
        eA = q && (!ed || eu),
        { defaultWishlistId: ej } = (0, s.cf)([G.A], () => ({ defaultWishlistId: G.A.getFirstWishlistId(l.id) }));
    (0, O.fw)({ wishlistId: ej, userId: l.id });
    let eI = (0, es.fC)(),
        eC = W || null != eI.interactionType,
        eN = (function (e) {
            let l,
                n,
                t,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, tS.A)(i),
                d = o?.length,
                u =
                    ((l = (0, s.bG)([lf.default], () => lf.default.getCurrentUser())),
                    (n = (0, s.bG)([G.A], () => G.A.getUserProfile(i.id))),
                    (t =
                        n?.bio === "" &&
                        n?.pronouns === "" &&
                        n?.banner === void 0 &&
                        n?.accentColor === void 0 &&
                        n?.banner === void 0 &&
                        i.flags === i.publicFlags &&
                        (n?.badges == null || n?.badges?.length === 0)),
                    l?.id !== i.id && !t),
                c = (0, tD.A)(i.id),
                g = (0, tR.A)(i.id),
                m = [],
                f = i.id === r?.id,
                p = G.A.getFirstWishlistId(i.id),
                x = null != p,
                h = x ? G.A.getWishlistSettings(i.id, p) : null,
                v = (x ? tk.A.getWishlistItems(p) : []).length > 0,
                A = c.length > 0;
            (f || A) && m.push({ text: eL.intl.string(eL.t.laViwx), section: nP.RP.WIDGETS }),
                m.push({ text: eL.intl.string(eL.t.chq59f), section: nP.RP.ACTIVITY });
            let j = !1 === i.nsfwAllowed,
                b = T.A.isFriend(i.id),
                I = h?.visibility === tP.a.PUBLIC;
            return (
                (f || (!f && v && I && g && (!j || (j && b)))) &&
                    m.push({ text: eL.intl.string(eL.t["7lZ31J"]), section: nP.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (m.push({ text: (0, tO.A)(a), section: nP.RP.MUTUAL_FRIENDS }),
                    m.push({ text: (0, tT.A)(d), section: nP.RP.MUTUAL_GUILDS })),
                m
            );
        })({ user: l, currentUser: n }),
        { analyticsLocations: ey } = (0, j.Ay)([..._, A.A.USER_PROFILE_MODAL_V2]),
        eE = (0, M.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: b,
            guildId: B,
            channelId: u,
            messageId: c,
            roleId: h,
        }),
        eP = (0, V.Ay)(l.id, B),
        ek = (0, C.A)(eP?.profileFrame?.skuId, "UserProfileModalV2"),
        eR = (0, y.A)(eP?.profileFrame?.skuId);
    (0, I.A)({ skuId: eP?.profileFrame?.skuId, openedAt: S, context: eE, analyticsLocations: ey });
    let eS = L.Ay.useName(eP?.guildId, u, l),
        eD = (0, E.GV)(),
        eO = eL.intl.format(eL.t.KRe1Fk, { name: eS });
    return (0, t.jsx)(j.f5, {
        value: ey,
        children: (0, t.jsx)(M.of, {
            value: eE,
            openedAt: S,
            fetchStartedAt: eP?.fetchStartedAt,
            fetchEndedAt: eP?.fetchEndedAt,
            isLoaded: eP?.isLoaded,
            children: (0, t.jsx)(es.Hl, {
                value: eI,
                children: (0, t.jsx)(ea.N, {
                    value: P,
                    children: (0, t.jsxs)(g.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(tL.zr, { [tL.QF]: eP?.private === !0 }),
                        transitionState: k,
                        "aria-labelledby": eD,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(nL, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(t_.layoutContainer, eR, {
                                        [t_.editingPanelEnabled]: q,
                                        [t_.editingPanelExpanded]: q && ed,
                                        [t_.isAnimating]: eu,
                                    }),
                                    children: [
                                        (0, t.jsxs)(tB, {
                                            user: l,
                                            displayProfile: eP,
                                            pendingThemeColors: $,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: tL.Oo,
                                                    children: [
                                                        (0, t.jsx)(eQ.A, { isCurrentUser: F, onClose: D }),
                                                        (0, t.jsx)(m.A, {
                                                            children: (0, t.jsx)(f.H, { id: eD, children: eO }),
                                                        }),
                                                        eA &&
                                                            (0, t.jsx)(nv, {
                                                                buttonRef: ef,
                                                                onClick: eg,
                                                                className: t_.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eh &&
                                                    (0, t.jsx)("div", {
                                                        className: t_.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(nh, {
                                                            innerRef: ep,
                                                            onClick: eg,
                                                            className: t_.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(f.F, {
                                            children: [
                                                q &&
                                                    ec((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(nC, {
                                                                  className: a()(t_.editingPanel, {
                                                                      [t_.isExpanded]: ed,
                                                                  }),
                                                                  selectedGuildId: z,
                                                                  originGuildId: o,
                                                                  onSelectGuildId: H,
                                                                  onClose: em,
                                                                  collapseButtonRef: ex,
                                                                  isLoading: W,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(eb.A, {
                                                    className: a()(w, tL.A7, t_.profileContentOuter),
                                                    innerClassName: t_.profileContentInner,
                                                    user: l,
                                                    displayProfile: eP,
                                                    themeType: ee.d.MODAL_V2,
                                                    pendingThemeColors: $,
                                                    isPrivate: eP?.private === !0,
                                                    children: [
                                                        (0, t.jsx)(tU, { displayProfile: eP, pendingBanner: er }),
                                                        eP?.private === !0 && (0, t.jsx)(ev.A, {}),
                                                        (0, t.jsx)(nO, { isVisible: eC, showLoadingSpinner: W }),
                                                        (0, t.jsx)(nq, { className: t_.toast }),
                                                        (0, t.jsx)(tF, {
                                                            user: l,
                                                            currentUser: n,
                                                            guildId: B,
                                                            channelId: u,
                                                            displayProfile: eP,
                                                            nickname: eS,
                                                            originGuildId: o,
                                                            hasEntered: k === p.ip.ENTERED,
                                                            customStatusPrompt: R,
                                                            onClose: D,
                                                            avatarDecorationOverride: X,
                                                            avatarOverride: el,
                                                            bannerOverride: er,
                                                            profileEffectOverride: eo,
                                                            profileFrame: ek,
                                                            allowEditing: q,
                                                            isLoading: W,
                                                        }),
                                                        (0, t.jsx)(nw.A, {
                                                            user: l,
                                                            currentUser: n,
                                                            displayProfile: eP,
                                                            guildId: B,
                                                            channelId: u,
                                                            items: eN,
                                                            initialSection: N,
                                                            onClose: D,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, t.jsx)(nN.A, { userId: l.id, guildId: B, className: t_.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
