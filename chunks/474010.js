n.d(l, { A: () => tw });
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
    O = n(821269),
    S = n(93246),
    D = n(561794),
    T = n(994500),
    _ = n(351906),
    L = n(562153),
    w = n(474090),
    G = n(183555),
    M = n(841595),
    U = n(591179),
    F = n(999291),
    B = n(101928),
    V = n(837529),
    z = n(346713),
    W = n(573648),
    H = n(941314),
    K = n(429913),
    q = n(321078),
    X = n(403362),
    Y = n(484509),
    $ = n(920601),
    J = n(919395),
    Z = n(101058),
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
    ep = n(886891),
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
    eO = n(310419),
    eS = n(773669),
    eD = n(889227),
    eT = n(967198),
    e_ = n(488995),
    eL = n(375708),
    ew = n(985176);
function eG(e) {
    let { applicationRoleConnection: l, locale: n, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, ek.VW)(l, n);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: ew.k_,
                children:
                    null != l.application.bot
                        ? (0, t.jsx)(eP.A, { user: new eD.A(l.application.bot), size: o._3.SIZE_16 })
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
                                        entrypoint: { name: eO.sW.APPLICATION_DIRECTORY_URL },
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
function eM(e) {
    let { applicationRoleConnections: l, className: n, onClose: i } = e,
        { trackUserProfileAction: r } = (0, G.NJ)(),
        o = (0, s.bG)([eS.default], () => eS.default.locale),
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
                          children: (0, t.jsx)(eG, {
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
    eF = n(722868),
    eB = n(822775),
    eV = n(597770),
    ez = n(751188),
    eW = n(746174),
    eH = n(993401),
    eK = n(518477),
    eq = n(652215);
function eX(e) {
    let { user: l, onClose: n } = e,
        { analyticsLocations: r } = (0, j.Ay)(),
        a = (0, eW.j)("UserProfileGiftButton"),
        { openGiftModal: s } = (0, ez.$)({
            giftRecipient: l,
            analyticsLocations: r,
            analyticsObject: {
                page: eq.liQ.USER_PROFILE,
                section: eq.JJy.USER_PROFILE,
                object: eq.ZSU.BUTTON_ICON,
                objectType: eq.AnalyticsObjectTypes.GIFT,
            },
            location: "user-profile-gift-button",
        }),
        o = i.useCallback(() => {
            s(), n?.();
        }, [s, n]);
    return a
        ? (0, t.jsx)(eH.q3, { action: eK.pt.GIFT, icon: eV.o, tooltipText: eL.intl.string(eL.t.PEjaCx), onClick: o })
        : null;
}
var eY = n(982985),
    e$ = n(700174),
    eJ = n(34188),
    eZ = n(859040),
    eQ = n(23722);
function e0(e) {
    let { onClose: l, ...n } = e,
        { analyticsLocations: i, newestAnalyticsLocation: r } = (0, j.Ay)(),
        a = (0, eQ.A)(() => {
            (0, eZ.Cz)({ analyticsLocations: i, analyticsSource: r }), l?.();
        });
    return (0, t.jsx)(eH.q3, {
        action: "VISIT_SHOP",
        icon: eJ.U,
        tooltipText: eL.intl.string(eL.t.b2d0N0),
        onClick: a,
        ...n,
    });
}
var e1 = n(573355),
    e7 = n(102951);
function e2(e) {
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
        g = (0, eF.A)({ user: l, guildId: r, channelId: a, displayProfile: s, onClose: d }),
        {
            gameFriends: m,
            hasOutgoingPendingGameFriends: f,
            hasIncomingPendingGameFriends: p,
        } = (0, e7.J)({ userId: l.id }),
        x = m.length > 0 || f || p;
    return o === eq.eA$.BLOCKED
        ? null
        : l.id === n.id
          ? u
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(eY.e, { userId: l.id, variant: "primary", disabled: !0 }),
                        (0, t.jsx)(e0, { onClose: d }),
                        (0, t.jsx)(e$.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(eB.A, { user: l, guildId: i, onClose: d }),
                        (0, t.jsx)(e0, { onClose: d }),
                        (0, t.jsx)(e$.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
          : l.bot
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)(eY.e, { userId: l.id, onClose: eU.A.popAll, autoFocus: !0 }),
                      (0, t.jsx)(e$.Zt, { user: l, guildId: i, viewProfileItem: g }),
                  ],
              })
            : o === eq.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(eY.e, { userId: l.id, onClose: eU.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(eX, { user: l }),
                        (0, t.jsx)(e$.Zt, { user: l, guildId: i }),
                    ],
                })
              : o === eq.eA$.FRIEND || o === eq.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(eY.e, { userId: l.id, onClose: eU.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(e1.Ef, { user: l, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(eX, { user: l }),
                          (0, t.jsx)(e$.Zt, { user: l, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === eq.eA$.NONE && x
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(eY.e, { userId: l.id, onClose: eU.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(e1.ES, {
                                user: l,
                                analyticsLocation: c,
                                gameFriends: m,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: f,
                            }),
                            (0, t.jsx)(eX, { user: l }),
                            (0, t.jsx)(e$.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    })
                  : (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(e1.cO, {
                                variant: "primary",
                                userId: l.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, t.jsx)(eY.l, { userId: l.id, onClose: eU.A.popAll, variant: "secondary" }),
                            (0, t.jsx)(eX, { user: l }),
                            (0, t.jsx)(e$.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    });
}
var e3 = n(463156),
    e8 = n(990078),
    e9 = n(349288),
    e5 = n(509434),
    e6 = n(95561),
    e4 = n(874490),
    le = n(370480),
    ll = n(486020),
    ln = n(123917),
    lt = n(783419);
function li(e) {
    let { account: l, locale: n, userId: i } = e,
        r = l.metadata ?? {},
        a = (0, le.An)(r[lt.pK.CREATED_AT], n),
        s = W.A.get((0, e4.ML)(l.type));
    return (0, t.jsx)(la, {
        renderAccountName: () => {
            let e = s?.getPlatformUserUrl?.(l);
            return null == e
                ? (0, t.jsx)(e8.m, {
                      overflowOnly: !0,
                      text: l.name,
                      children: (0, t.jsx)(eE.E, { variant: "text-sm/normal", className: ew.GW, children: l.name }),
                  })
                : (0, t.jsx)(e9.Anchor, {
                      href: e,
                      className: ew.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${l.name}, ${eL.intl.string(eL.t.q5jLJB)}`
                              : `${l.name}, ${eL.intl.string(eL.t.q5jLJB)}`,
                      onClick: (n) => {
                          (0, e6.zV)(eq.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: i }),
                              (0, ln.h)({ href: e, trusted: s?.type !== eq.fg2.DOMAIN }, n);
                      },
                      children: (0, t.jsxs)("div", {
                          className: ew.vi,
                          children: [
                              (0, t.jsx)(e8.m, {
                                  overflowOnly: !0,
                                  text: l.name,
                                  children: (0, t.jsx)(eE.E, {
                                      variant: "text-sm/normal",
                                      className: ew.GW,
                                      children: l.name,
                                  }),
                              }),
                              (0, t.jsx)(e5.I, { size: "xs", color: "currentColor" }),
                          ],
                      }),
                  });
        },
        renderMetadata: () =>
            l.type === eq.fg2.REDDIT
                ? (0, ek.xE)(r)
                : l.type === eq.fg2.STEAM
                  ? (0, ek.dy)(r)
                  : l.type === eq.fg2.BLUESKY || l.type === eq.fg2.MASTODON || l.type === eq.fg2.TWITTER
                    ? (0, ek.ED)(r)
                    : l.type === eq.fg2.PAYPAL
                      ? (0, ek.gZ)(r)
                      : l.type === eq.fg2.EBAY
                        ? (0, ek.ub)(r)
                        : l.type === eq.fg2.TIKTOK
                          ? (0, ek.HU)(r)
                          : null,
        platformIcon: s?.icon.lightPNG,
        platformName: s?.name,
        createdAtDate: a,
    });
}
function lr(e) {
    let { identityWithApplication: l } = e,
        { identity: n, application: i } = l;
    if (null == n.profile || null == n.profile.username || null == i) return null;
    let r = ll.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(la, {
        renderAccountName: () =>
            (0, t.jsx)(e8.m, {
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
function la(e) {
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
            (0, t.jsx)(e8.m, {
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
function ls(e) {
    let { connections: l, applicationIdentities: n, userId: i, className: r } = e,
        o = (0, s.bG)([eS.default], () => eS.default.locale);
    return 0 === l.length && 0 === n.length
        ? null
        : (0, t.jsxs)("ul", {
              className: a()(ew.kL, r),
              children: [
                  l.map((e) => (0, t.jsx)(li, { account: e, userId: i, locale: o }, `${e.type}:${e.id}`)),
                  n?.map((e) => (0, t.jsx)(lr, { identityWithApplication: e }, e.identity.application_id)),
              ],
          });
}
var lo = n(193885),
    ld = n(661531),
    lu = n(408278),
    lc = n(320448),
    lg = n(683071),
    lm = n(534514),
    lf = n(821609),
    lp = n(403581),
    lx = n(194261),
    lh = n(835071),
    lv = n(287809),
    lA = n(927578),
    lj = n(487233),
    lb = n(120386),
    lI = n(317097),
    lC = n(602853),
    lN = n(922016),
    ly = n(508274),
    lE = n(654107),
    lP = n(84540),
    lk = n(930349);
function lR(e) {
    let { user: l, disabled: n = !1 } = e,
        r = i.useRef(null),
        a = (0, lC.r)(ld.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, lE.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([Q.A, M.A], () => ({
            pendingAccentColor: Q.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: M.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, lI.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, lP.p)({ accentColor: e }), []);
    return (0, t.jsx)(lN.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(ly.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(lk.NW, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                accessibleLabel: eL.intl.string(eL.t["/X3fkf"]),
                showOverlayOnHover: !0,
                children: (0, t.jsx)("div", {
                    style: { width: "100%", height: "100%", backgroundColor: (0, lI.Hl)(c) },
                }),
            }),
    });
}
var lO = n(450373),
    lS = n(252732),
    lD = n(339984),
    lT = n(111242);
function l_(e) {
    let { backgroundColor: l } = e;
    return (0, t.jsx)("div", { className: lT.o, style: { backgroundColor: l } });
}
function lL(e) {
    let { src: l } = e;
    return (0, t.jsx)("img", { src: l, alt: "", className: lT._ });
}
function lw(e) {
    let { displayProfile: l, pendingBanner: n } = e,
        i = (0, lC.r)(ld.A.unsafe_rawColors.PRIMARY_800).hex(),
        r = l?.primaryColor ?? (0, lI.LX)(i),
        { hex: a } = (0, lO.A)(r),
        s = l?.getPreviewBanner(n, !1, 296) ?? void 0;
    return null != s ? (0, t.jsx)(lL, { src: s }) : (0, t.jsx)(l_, { backgroundColor: a });
}
function lG(e) {
    let { userId: l, guildId: n, disabled: i } = e,
        { newestAnalyticsLocation: r } = (0, j.Ay)(),
        a = null != n,
        o = (0, F.Ay)(l, n),
        d = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(n ?? void 0).pendingBanner),
        u = (0, s.bG)([lv.default], () => lv.default.getCurrentUser()?.banner),
        c = (0, s.bG)([M.A], () =>
            null != n ? M.A.getGuildMemberProfile(l, n)?.banner : M.A.getUserProfile(l)?.banner,
        ),
        g = void 0 !== d,
        m = null === d,
        f = m || (!g && null == c),
        p = a && null != u,
        x = a && (o?.isUsingGuildMemberBanner() ?? !1),
        h = (0, J.Ac)(d, c)
            ? {
                  onClick: () => (0, lS.rM)(null, c, (e) => (0, lP.p)({ guildId: n ?? void 0, banner: e })),
                  type: p ? "reset" : "remove",
                  accessibleLabel: eL.intl.string(p ? eL.t.jHlJNS : eL.t.tT9n7D),
              }
            : void 0,
        v = () =>
            (0, lS.XD)({
                uploadType: lD.HL.BANNER,
                analyticsSource: r,
                guildId: n ?? void 0,
                stackingBehavior: "stack",
            }),
        A = (0, t.jsx)(lw, { displayProfile: o, pendingBanner: m && a && !x ? void 0 : d });
    return f
        ? (0, t.jsx)(lk.kL, {
              variant: "square",
              onClick: v,
              accessibleLabel: eL.intl.string(eL.t.N0bC3P),
              disabled: i,
              dimContent: f && p,
              showOverlayOnHover: !0,
              children: A,
          })
        : (0, t.jsx)(lk.NW, {
              variant: "square",
              onClick: v,
              accessibleLabel: eL.intl.string(eL.t.N0bC3P),
              deleteButtonConfig: h,
              disabled: i,
              showOverlayOnHover: !0,
              children: A,
          });
}
var lM = n(922301),
    lU = n(368919),
    lF = n(259065),
    lB = n(696451),
    lV = n(283607);
let lz = "heading-lg/bold";
function lW(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: a } = (0, j.Ay)(),
        o = null != n,
        d = (0, s.bG)([lB.Ay], () => (null != n ? (lB.Ay.getMember(n, l.id)?.nick ?? null) : null)),
        u = (0, s.bG)([lv.default], () => lv.default.getCurrentUser()?.globalName ?? null),
        c = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(null).pendingGlobalName),
        g = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(n ?? null).pendingNickname),
        {
            userDisplayNameStyles: m,
            guildDisplayNameStyles: f,
            pendingDisplayNameStyles: p,
        } = (0, J.B0)(l, n ?? void 0),
        x = o ? f : m,
        h = void 0 !== p,
        v = null === p || (!h && null == x),
        A = o && null != m,
        b = (0, J.lw)({ pendingValue: p, userValue: m, guildValue: f, guildId: n ?? void 0 }),
        I = (e) => (null == e || "" === e ? void 0 : e),
        C = void 0 !== c ? c : u,
        N = o ? (I(void 0 !== g ? g : d) ?? I(C) ?? l.username) : (I(C) ?? l.username),
        y =
            null != b && (h ? null != p : null != x)
                ? {
                      onClick: () => (0, lP.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: A ? "reset" : "remove",
                      accessibleLabel: eL.intl.string(A ? eL.t.en3ogK : eL.t["Wqmi/h"]),
                  }
                : void 0,
        E = i.useCallback(() => {
            (0, lF.L)({ analyticsLocations: a, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [a, n]),
        P = (0, t.jsx)("div", {
            "aria-hidden": !0,
            className: lV.M,
            children:
                null != b
                    ? (0, t.jsx)(eE.E, {
                          variant: lz,
                          children: (0, t.jsx)(lU.A, {
                              userName: N,
                              displayNameStyles: b,
                              effectDisplayType: lM.G.ANIMATED,
                              textClassName: lV.W,
                              shouldWrap: !1,
                              loop: !0,
                              inProfile: !0,
                          }),
                      })
                    : (0, t.jsx)(eE.E, { variant: lz, className: lV.W, color: "text-muted", children: N }),
        });
    return v
        ? (0, t.jsx)(lk.kL, {
              variant: "bar",
              onClick: E,
              accessibleLabel: eL.intl.string(eL.t.XJ4oOO),
              disabled: r,
              dimContent: v && A,
              children: P,
          })
        : (0, t.jsx)(lk.NW, {
              variant: "bar",
              onClick: E,
              accessibleLabel: eL.intl.string(eL.t.XJ4oOO),
              deleteButtonConfig: y,
              disabled: r,
              children: P,
          });
}
var lH = n(473219),
    lK = n(942426),
    lq = n(617061),
    lX = n(71393),
    lY = n(466681),
    l$ = n(423393);
function lJ(e) {
    let { effect: l } = e,
        n = (0, lK.A)(l?.skuId);
    return (0, t.jsxs)("div", {
        className: lY.B0,
        "aria-hidden": !0,
        children: [
            (0, t.jsx)("img", { src: l$.A, alt: "", className: lY.AH }),
            null != n && (0, t.jsx)("img", { src: n.thumbnailPreviewSrc, alt: "", className: lY.H2 }),
        ],
    });
}
function lZ(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: a } = (0, j.Ay)(),
        o = null != n,
        d = (0, s.bG)([lX.A], () => (null != n ? lX.A.getGuild(n) : null)),
        u = (0, J.N2)({ user: l }),
        c = (0, J.N2)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileEffect: g } = (0, J.nZ)(n ?? void 0),
        m = void 0 !== g,
        f = null === g || (!m && null == c),
        p = o && null != u,
        x = (0, J.lw)({ pendingValue: g, userValue: u, guildValue: c, guildId: n ?? void 0 }),
        h =
            null != x && (m ? null != g : null != c)
                ? {
                      onClick: () => (0, lP.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: p ? "reset" : "remove",
                      accessibleLabel: eL.intl.string(p ? eL.t["SQy/Po"] : eL.t.uMuafO),
                  }
                : void 0,
        v = i.useCallback(() => {
            (0, lq.W)({
                analyticsLocations: a,
                guild: d ?? void 0,
                initialSelectedEffect: x ?? void 0,
                stackingBehavior: "stack",
            });
        }, [a, d, x]),
        A = (0, t.jsx)(lJ, { effect: x });
    return f
        ? (0, t.jsx)(lk.kL, {
              variant: "full-height-bar",
              onClick: v,
              accessibleLabel: eL.intl.string(eL.t["/dRfCf"]),
              disabled: r,
              dimContent: f && p,
              children: A,
          })
        : (0, t.jsx)(lk.NW, {
              variant: "full-height-bar",
              onClick: v,
              accessibleLabel: eL.intl.string(eL.t["/dRfCf"]),
              deleteButtonConfig: h,
              disabled: r,
              children: A,
          });
}
var lQ = n(33851),
    l0 = n.n(lQ),
    l1 = n(458217),
    l7 = n(298387);
function l2(e) {
    let { color: l, suggestedColors: n, disabled: r, ariaLabel: s, onSelect: o } = e,
        d = i.useRef(null),
        u = (0, lI.Hl)(l),
        c = (0, lI.bJ)(l, 0xffffff) < l1.Tr.NonText;
    return (0, t.jsx)(lN.Y, {
        targetElementRef: d,
        renderPopout: (e) => (0, t.jsx)(ly.VN, { ...e, value: l, onChange: o, suggestedColors: n, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: l, ...n } = e;
            return (0, t.jsx)(ey.D, {
                ...n,
                innerRef: d,
                className: l7.Dh,
                onClick: r ? void 0 : l,
                "aria-label": s,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)("div", { className: a()(l7.Hy, { [l7.rY]: c }), style: { backgroundColor: u } }),
            });
        },
    });
}
function l3(e) {
    let {
            primaryColor: l,
            secondaryColor: n,
            onSelectPrimaryColor: i,
            onSelectSecondaryColor: r,
            suggestedColors: a,
            disabled: s = !1,
        } = e,
        o = (0, lI.Hl)(l),
        d = (0, lI.Hl)(n),
        u = `linear-gradient(to bottom, ${o}, ${d})`,
        c = eL.intl.formatToPlainString(eL.t.FquTfm, { colorLabel: o }),
        g = eL.intl.formatToPlainString(eL.t.xOnm4z, { colorLabel: d });
    return (0, t.jsx)(lk.Yt, {
        variant: "square",
        disabled: s,
        children: (0, t.jsxs)("div", {
            className: l7.D7,
            style: { background: u },
            children: [
                (0, t.jsx)(l2, { color: l, suggestedColors: a, ariaLabel: c, onSelect: i, disabled: s }),
                (0, t.jsx)(l2, { color: n, suggestedColors: a, ariaLabel: g, onSelect: r, disabled: s }),
            ],
        }),
    });
}
function l8(e) {
    let { user: l, guildId: n, disabled: r = !1 } = e,
        a = (0, F.Ay)(l.id, n),
        { pendingThemeColors: o, pendingAvatar: d } = (0, s.cf)([Q.A], () => {
            let e = Q.A.getPendingChanges(n ?? void 0);
            return { pendingThemeColors: e.pendingThemeColors, pendingAvatar: e.pendingAvatar };
        }),
        u = (0, Z.V7)({ userId: l.id, image: d }),
        { primaryColor: c, secondaryColor: g } = (0, B.A)({
            user: l,
            displayProfile: a,
            pendingThemeColors: o,
            pendingAvatarSrc: u ?? void 0,
            isPreview: !0,
        }),
        m = (0, lC.r)(ld.A.unsafe_rawColors.PRIMARY_530).hex(),
        f = null != u ? u : l.getAvatarURL(n ?? void 0, 80),
        p = (0, lE.rh)(f, m, !1),
        x = i.useCallback(
            (e) => {
                let l = l0()(e, a?.themeColors);
                (0, lP.p)({ guildId: n ?? void 0, themeColors: l ? void 0 : e });
            },
            [a?.themeColors, n],
        );
    return null == c || null == g
        ? null
        : (0, t.jsx)(l3, {
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
var l9 = n(315629),
    l5 = n(235684);
function l6() {
    let e = () => {
        (0, lh.K)({ stackingBehavior: "stack" });
    };
    return (0, t.jsxs)(l9.h, {
        color: "nitro-pink",
        className: l5.k,
        children: [
            (0, t.jsx)(eE.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eL.intl.format(eL.t.TmfgI2, { onClick: e }),
            }),
            (0, t.jsx)(lf.$, {
                variant: "expressive",
                size: "md",
                icon: lp.t,
                text: eL.intl.string(eL.t.pj0XBN),
                onClick: e,
                fullWidth: !0,
            }),
        ],
    });
}
var l4 = n(847374),
    ne = n(111159),
    nl = n(548118),
    nn = n(711014),
    nt = n(540637),
    ni = n(801461),
    nr = n(44482),
    na = n(844222),
    ns = n(561392),
    no = n(716263),
    nd = n(15626),
    nu = n(930856);
function nc(e) {
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
            children: f,
        } = e,
        {
            isOpen: p,
            setIsOpen: x,
            refs: h,
            floatingStyles: v,
            getReferenceProps: A,
            getFloatingProps: j,
            transitionStyles: b,
        } = (function () {
            let { reducedMotion: e } = i.useContext(na.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, ns.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, no.DL)(o, {
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
        { setFloating: I } = h,
        C = i.useContext(nd._),
        N = i.useId(),
        y = i.useId(),
        E = i.useId(),
        P = i.useRef(null),
        k = i.useRef(null),
        [R, O] = i.useState(null),
        S = null != R ? (0, ni.ZN)(E, R) : void 0,
        D = i.useRef(!1),
        T = i.useRef(!1),
        _ = i.useMemo(() => {
            let e = null != n ? [n] : [];
            return l.filter((l) => (0, ni.fI)(l.value, e));
        }, [n, l]),
        L = i.useCallback(() => {
            u || x(!p);
        }, [u, x, p]),
        w = i.useCallback(
            (e) => {
                p && 0 === e.button && e.preventDefault();
            },
            [p],
        ),
        G = i.useCallback(() => {
            x(!1), P.current?.focus();
        }, [x]),
        M = i.useCallback(
            (e) => {
                if (!k.current?.contains(e.relatedTarget)) {
                    if (T.current) {
                        T.current = !1;
                        return;
                    }
                    if (p && null != R) {
                        let e = l[R];
                        null != e && !0 !== e.disabled && r(e.value);
                    }
                    p && x(!1);
                }
            },
            [p, R, l, r, x],
        ),
        U = i.useCallback(
            (e) => {
                if (u) return;
                let l = e[0];
                null != l && (r(l.value), G());
            },
            [u, r, G],
        ),
        { activeIndex: F, handleKeyDown: B } = (0, nt.l)(!0, l),
        V = i.useRef(null);
    i.useEffect(() => {
        let e = F !== V.current;
        (V.current = F), null != F && e && (O(F), p || ((D.current = !0), x(!0)));
    }, [F, p, x]);
    let z = i.useCallback(
            (e) => {
                if (u) return;
                let n = l.length;
                switch (e.key) {
                    case "ArrowDown":
                    case "PageDown": {
                        let l = "PageDown" === e.key ? 10 : 1;
                        if (0 === n) return;
                        if ((e.preventDefault(), !p || e.altKey)) {
                            p || x(!0);
                            return;
                        }
                        O((e) => (null === e ? 0 : Math.min(e + l, n - 1)));
                        break;
                    }
                    case "ArrowUp":
                    case "PageUp": {
                        let t = "PageUp" === e.key ? 10 : 1;
                        if (0 === n) return;
                        if ((e.preventDefault(), e.altKey && p)) {
                            if (null != R) {
                                let e = l[R];
                                if (null != e && !0 !== e.disabled) {
                                    U([e]);
                                    break;
                                }
                            }
                            G();
                            break;
                        }
                        if (!p) return void x(!0);
                        O((e) => (null === e ? 0 : Math.max(e - t, 0)));
                        break;
                    }
                    case "Enter":
                    case " ":
                        if ((e.preventDefault(), e.stopPropagation(), !p)) return void x(!0);
                        if (null == R || R > n - 1) return;
                        {
                            let e = l[R];
                            if (null == e || !0 === e.disabled) return;
                            U([e]);
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === n)) return;
                        O(0), p || ((D.current = !0), x(!0));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === n)) return;
                        O(n - 1), p || ((D.current = !0), x(!0));
                        break;
                    case "Tab":
                        if (p && null != R) {
                            let e = l[R];
                            null != e && !0 !== e.disabled && r(e.value);
                        }
                        (T.current = !0), x(!1);
                        break;
                    case "Escape":
                        p && (e.preventDefault(), e.stopPropagation(), G());
                        break;
                    default:
                        B(e);
                }
            },
            [u, p, l, R, U, G, r, x, B],
        ),
        W = Math.max(
            l.findIndex((e) => e.id === _[_.length - 1]?.id),
            0,
        ),
        H = i.useRef(!1);
    i.useEffect(() => {
        c || !p || H.current
            ? p || ((H.current = !1), O(null), (D.current = !1))
            : ((H.current = !0), D.current || O(l.length > 0 ? W : null), (D.current = !1), P.current?.focus());
    }, [c, p, W, l.length]);
    let K = {
        id: y,
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-controls": p ? E : void 0,
        "aria-expanded": p,
        "aria-activedescendant": S,
        "aria-disabled": !!u || void 0,
        "aria-labelledby": null != s ? `${N} ${y}` : void 0,
        "aria-errormessage": C?.errorMessageId,
        "aria-invalid": C?.errorMessageId != null || void 0,
        "aria-describedby": C?.describedById,
        onClick: L,
        onMouseDown: w,
        onKeyDown: z,
        onBlur: M,
    };
    return (0, t.jsxs)("div", {
        ref: (e) => {
            (k.current = e), h.setReference(e);
        },
        className: o,
        ...A(),
        children: [
            null != s && (0, t.jsx)(m.A, { tag: "label", id: N, children: s }),
            f({ buttonRef: P, selectButtonProps: K }),
            !u &&
                p &&
                (0, t.jsx)("div", {
                    ref: I,
                    className: a()(nu.S_, d),
                    ...j(),
                    style: { ...v, ...b },
                    children: (0, t.jsx)(nt.q, {
                        id: E,
                        tabIndex: -1,
                        items: l,
                        selectionMode: "single",
                        selectedItems: _,
                        onSelectionChange: U,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: R,
                        renderListItem: (e) => (0, t.jsx)(nr.c, { ...e }),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var ng = n(138325);
let nm = "MAIN_PROFILE";
function nf(e) {
    let { guild: l } = e;
    return (0, t.jsx)(nl.Ay, { className: ng.$f, guild: l, size: nl.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function np(e) {
    let { leading: l, label: n, buttonRef: i, selectButtonProps: r } = e;
    return (0, t.jsxs)(ey.D, {
        innerRef: i,
        className: ng.L5,
        ...r,
        children: [
            l,
            (0, t.jsx)(eE.E, {
                variant: "text-md/medium",
                color: "text-strong",
                lineClamp: 1,
                className: ng.v9,
                children: n,
            }),
            (0, t.jsx)(l4.a, { className: ng.u4, size: "sm", color: ld.A.colors.ICON_DEFAULT }),
        ],
    });
}
function nx(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a } = e,
        o = (0, s.bG)([nn.Ay], () => nn.Ay.getFlattenedGuildIds()),
        d = (0, s.bG)([lX.A], () => lX.A.getGuilds()),
        u = i.useMemo(() => {
            let e = {
                    id: nm,
                    label: eL.intl.string(eL.t["2p07FR"]),
                    value: nm,
                    leading: (0, t.jsx)(ne.p, { size: "refresh_sm", color: ld.A.colors.ICON_DEFAULT }),
                },
                l = o
                    .map((e) => {
                        if (e === n) return null;
                        let l = d[e];
                        return null == l
                            ? null
                            : { id: l.id, label: l.name, value: l.id, leading: (0, t.jsx)(nf, { guild: l }) };
                    })
                    .filter(X.Vq),
                i = null != n ? d[n] : null;
            return null == i
                ? [e, ...l]
                : [e, { id: i.id, label: i.name, value: i.id, leading: (0, t.jsx)(nf, { guild: i }) }, ...l];
        }, [o, d, n]),
        c = l ?? nm,
        g = u.find((e) => e.value === c) ?? u[0],
        m = i.useCallback(
            (e) => {
                r(e === nm ? null : e);
            },
            [r],
        );
    return (0, t.jsx)(nc, {
        className: ng.kL,
        label: eL.intl.string(eL.t.rki38K),
        listboxClassName: ng.yt,
        options: u,
        value: c,
        onSelectionChange: m,
        loading: a,
        children: (e) => (0, t.jsx)(np, { leading: g.value === nm ? null : g.leading, label: g.label, ...e }),
    });
}
var nh = n(809467);
let nv = "profile-modal-editing-panel",
    nA = "profile-modal-editing-panel-heading";
function nj(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(ey.D, {
        innerRef: i,
        "aria-label": eL.intl.string(eL.t.N8XQDE),
        "aria-expanded": !1,
        "aria-controls": nv,
        className: a()(nh.eg, n),
        onClick: l,
        focusProps: { offset: { right: 6 } },
        children: (0, t.jsx)(lo.V, { size: "sm", color: ld.A.colors.ICON_STRONG }),
    });
}
function nb(e) {
    let { onClick: l, className: n, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(lu.K, {
            buttonRef: i,
            "aria-label": eL.intl.string(eL.t.N8XQDE),
            "aria-expanded": !1,
            "aria-controls": nv,
            icon: lo.V,
            onClick: l,
            variant: "secondary",
            size: "sm",
        }),
    });
}
function nI(e) {
    let { onClick: l, innerRef: n } = e;
    return (0, t.jsxs)(ey.D, {
        innerRef: n,
        className: nh.cS,
        "aria-label": eL.intl.string(eL.t.X6NklS),
        onClick: l,
        "aria-controls": nv,
        "aria-expanded": !0,
        children: [
            (0, t.jsx)(lc._, { size: "md", color: "currentColor" }),
            (0, t.jsx)(lc._, { size: "md", color: "currentColor" }),
        ],
    });
}
function nC() {
    return (0, t.jsx)(lg.w, { type: "info", children: eL.intl.string(eL.t["gBIG/N"]) });
}
function nN() {
    let e = () => {
        (0, lh.K)({ stackingBehavior: "stack" });
    };
    return (0, t.jsxs)("div", {
        className: nh.eW,
        children: [
            (0, t.jsxs)("div", {
                className: nh.tm,
                children: [
                    (0, t.jsx)(lm.D, {
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
            (0, t.jsx)(lf.$, {
                variant: "expressive",
                size: "sm",
                icon: lp.t,
                text: eL.intl.string(eL.t["7IWwak"]),
                onClick: e,
                fullWidth: !0,
            }),
            (0, t.jsx)("div", {
                className: nh.D0,
                children: (0, t.jsx)("div", { className: nh.ZN, children: (0, t.jsx)(lx.X, { size: "xs" }) }),
            }),
        ],
    });
}
function ny(e) {
    let { heading: l, children: n, disabled: i = !1, showNitroIcon: r = !1 } = e;
    return (0, t.jsxs)("div", {
        className: nh.Os,
        children: [
            (0, t.jsxs)("div", {
                className: nh.AM,
                children: [
                    (0, t.jsx)(lm.D, {
                        className: nh.i_,
                        variant: "text-sm/medium",
                        color: i ? "text-muted" : "text-strong",
                        children: l,
                    }),
                    r &&
                        (0, t.jsx)(e8.m, {
                            text: eL.intl.string(eL.t.BNg1ir),
                            shouldShow: !i,
                            ariaHidden: !0,
                            children: (0, t.jsx)(lp.t, {
                                className: nh.l3,
                                size: "xs",
                                color: i ? ld.A.colors.ICON_MUTED : ld.A.colors.ICON_STRONG,
                                "aria-hidden": !0,
                            }),
                        }),
                ],
            }),
            n,
        ],
    });
}
function nE(e) {
    let {
            selectedGuildId: l,
            originGuildId: n,
            onSelectGuildId: i,
            isLoading: r = !1,
            onClose: o,
            className: d,
            collapseButtonRef: c,
        } = e,
        g = (0, s.bG)([lv.default], () => lv.default.getCurrentUser()),
        p = (0, eQ.A)(i),
        x = null != l,
        h = lA.Ay.canUsePremiumProfileCustomization(g),
        v = x && !h;
    return null == g
        ? null
        : (0, t.jsxs)("aside", {
              id: nv,
              "aria-labelledby": nA,
              className: a()(nh.nd, { [nh.VU]: v }, d),
              "aria-busy": r,
              children: [
                  (0, t.jsx)(m.A, { children: (0, t.jsx)(f.H, { id: nA, children: eL.intl.string(eL.t["L+ch00"]) }) }),
                  (0, t.jsxs)("div", {
                      className: nh.wx,
                      children: [
                          (0, t.jsx)(nI, { innerRef: c, onClick: o }),
                          (0, t.jsx)(nx, { selectedGuildId: l ?? null, originGuildId: n, onChange: p, loading: r }),
                      ],
                  }),
                  (0, t.jsx)(f.F, {
                      children: (0, t.jsxs)(u.d_, {
                          className: nh.XG,
                          children: [
                              x && (h ? (0, t.jsx)(nC, {}) : (0, t.jsx)(nN, {})),
                              (0, t.jsx)(ny, {
                                  heading: eL.intl.string(eL.t.x5CoXR),
                                  disabled: r || v,
                                  children: (0, t.jsx)(lH.A, { user: g, guildId: l, disabled: r || v }),
                              }),
                              (0, t.jsxs)(ny, {
                                  heading: eL.intl.string(eL.t["50Nwpc"]),
                                  disabled: r || v,
                                  children: [
                                      (0, t.jsx)(lj.A, { user: g, guildId: l, disabled: r || v }),
                                      (0, t.jsx)(lb.A, { user: g, guildId: l, disabled: r || v }),
                                  ],
                              }),
                              (h || x) &&
                                  (0, t.jsx)(ny, {
                                      heading: eL.intl.string(eL.t.NEzEws),
                                      disabled: r,
                                      children: (0, t.jsx)(lW, { user: g, guildId: l, disabled: r || (x && !h) }),
                                  }),
                              h || x
                                  ? (0, t.jsxs)(ny, {
                                        heading: eL.intl.string(eL.t.Zenogr),
                                        disabled: r || v,
                                        showNitroIcon: !0,
                                        children: [
                                            (0, t.jsx)(l8, { user: g, guildId: l, disabled: r || !h }),
                                            (0, t.jsx)(lG, { userId: g.id, guildId: l, disabled: r || !h }),
                                        ],
                                    })
                                  : (0, t.jsx)(ny, {
                                        heading: eL.intl.string(eL.t["/X3fkf"]),
                                        disabled: r || v,
                                        children: (0, t.jsx)(lR, { user: g, disabled: r || x }),
                                    }),
                              (0, t.jsx)(ny, {
                                  heading: eL.intl.string(eL.t.wR5wOo),
                                  disabled: r,
                                  children: (0, t.jsx)(lZ, { user: g, guildId: l, disabled: r || (x && !h) }),
                              }),
                          ],
                      }),
                  }),
                  !h && (0, t.jsx)(l6, {}),
              ],
          });
}
var nP = n(982599),
    nk = n(756634),
    nR = n(83013),
    nO = n(77085);
function nS(e) {
    let { userId: l } = e,
        n = (0, ea.g)(),
        { trackUserProfileAction: i } = (0, G.NJ)();
    return (0, t.jsx)(nR.A, {
        heading: eL.intl.string(eL.t["mQKv+v"]),
        scrollTargetId: eK.bk.NOTE,
        children: (0, t.jsx)(nk.A, {
            userId: l,
            className: nO.N,
            autoFocus: n === eK.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var nD = n(289873),
    nT = n(778599);
function n_(e) {
    let { isVisible: l, showLoadingSpinner: n, className: i } = e;
    return (0, t.jsx)("div", {
        className: a()(nT.f, l && nT.z, i),
        children: n && (0, t.jsx)(nD.y, { type: nD.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
    });
}
var nL = n(568602),
    nw = n(625494);
function nG(e) {
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
                nw._.subscribe(eq.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    nw._.unsubscribe(eq.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, t.jsx)(nL.b, { isShaking: n, intensity: 1.4, children: l })
    );
}
var nM = n(515054),
    nU = n(873174),
    nF = n(933832),
    nB = n(972213),
    nV = n(97483),
    nz = n(765178),
    nW = n(775602),
    nH = n(606758),
    nK = n(707238),
    nq = n(861173);
let nX = {
        [eK.jM.WIDGET_ADDED]: {
            message: eL.intl.string(eL.t.fFP1Uy),
            icon: (0, t.jsx)(nF.A, { size: "sm", color: ld.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_added",
        },
        [eK.jM.WIDGET_REMOVED]: {
            message: eL.intl.string(eL.t.zzsK7h),
            icon: (0, t.jsx)(nF.A, { size: "sm", color: ld.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_removed",
        },
        [eK.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eL.intl.string(eL.t["84MExs"]),
            icon: (0, t.jsx)(nB.d, { size: "sm", color: ld.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_save_generic_failure",
            type: nV.Ck.FAILURE,
        },
        [eK.jM.SOMETHING_WENT_WRONG]: {
            message: eL.intl.string(eL.t.F8FvUy),
            icon: (0, t.jsx)(nB.d, { size: "sm", color: ld.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_something_went_wrong",
            type: nV.Ck.FAILURE,
        },
    },
    nY = (e) => {
        let { message: l, icon: n, type: i } = e;
        return (0, t.jsxs)("div", {
            className: a()(nq.oR, nK.oR),
            "data-type": i,
            children: [
                (0, t.jsx)("div", { className: nK.RC, children: n }),
                (0, t.jsx)(eE.E, { color: "text-strong", variant: "text-sm/semibold", children: l }),
            ],
        });
    },
    n$ = (e) => {
        let { className: l } = e,
            n = (0, nH.fu)(),
            r = (0, s.bG)([nW.A], () => nW.A.useReducedMotion),
            [o, u] = i.useState(!1),
            [c, g] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (u(!0), g(nX[n]), nz.O.announce(nX[n].message)) : u(!1);
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
            i.useEffect(() => () => (0, nH.XA)(null), []),
            i.useEffect(() => {
                if (o) {
                    let e = setTimeout(() => {
                        (0, nH.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [o]),
            (0, t.jsx)(t.Fragment, {
                children: m(
                    (e, n) =>
                        n &&
                        null !== c &&
                        (0, t.jsx)(nU.animated.div, {
                            className: a()(l, nK.Jt),
                            style: e,
                            children: (0, t.jsx)(nY, { ...c }),
                        }),
                ),
            })
        );
    };
var nJ = n(297413),
    nZ = n(534400),
    nQ = n(878555),
    n0 = n(621466),
    n1 = n(219869),
    n7 = n(292666),
    n2 = n(539396);
function n3(e, l) {
    let [n, t] = i.useState("idle"),
        [r, a] = i.useState(e),
        o = "editing" === n,
        d = (0, s.bG)([nW.A], () => nW.A.useReducedMotion),
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
                !o || (null != g.current && (0, n0.vq)(e.relatedTarget) && g.current.contains(e.relatedTarget)) || x();
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
function n8(e) {
    let { text: l, htmlFor: n } = e;
    return (0, t.jsx)(m.A, { tag: "label", htmlFor: n, children: l });
}
function n9(e) {
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
            (0, t.jsx)(n8, { text: r, htmlFor: l }),
            (0, t.jsx)(n7.k, {
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
function n5(e) {
    let { tooltip: l, ...n } = e,
        i = (0, t.jsx)("div", {
            className: n2.L7,
            children: (0, t.jsx)(n1.T, { ...n, size: "sm", variant: "input-accessory" }),
        });
    return null == l ? i : (0, t.jsx)(e8.m, { text: l, ariaHidden: !0, children: i });
}
function n6(e) {
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
            className: n2.LL,
            onClick: u,
            children: [
                A
                    ? (0, t.jsx)(eE.E, {
                          id: v,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: n2.qf,
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
                null != g && (0, t.jsx)("div", { className: n2.lD, children: (0, t.jsx)(n5, { ...g }) }),
            ],
        });
    return (0, t.jsx)("div", {
        ref: f,
        className: a()(n2.kL, { [n2.oE]: "compact" === c }, m),
        onBlur: p,
        onKeyDown: x,
        children: (0, t.jsx)(
            "div",
            { className: n2.qG, children: l ? s : (0, t.jsx)("div", { className: n2.VH, children: j }) },
            l ? "editing" : "preview",
        ),
    });
}
var n4 = n(35783);
function te(e) {
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
        v = lA.Ay.canUsePremiumProfileCustomization(m),
        {
            value: A,
            previewValue: b,
            onCommit: I,
        } = ((l = f?.guildId ?? null),
        (n = f?.guildId != null),
        (r = (0, s.bG)([lv.default], () => lv.default.getCurrentUser()?.globalName ?? null)),
        (a = (0, s.bG)([lB.Ay], () => (null != l ? (lB.Ay.getMember(l, m.id)?.nick ?? null) : null))),
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
                        ? (0, lP.p)({ nickname: e.trim(), guildId: f?.guildId ?? void 0 })
                        : (0, lP.p)({ globalName: e.trim() });
                },
                [n, f?.guildId],
            ),
        }),
        { isEditing: C, previewProps: N, inputProps: y, handleCommit: E } = n3(A, I),
        P = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(h ?? null).pendingDisplayNameStyles),
        k = eL.intl.string(x ? eL.t.mq6Cg9 : eL.t.XuZU7A),
        R = x ? (m.globalName ?? m.username) : m.username,
        O = eL.intl.string(x ? eL.t["g7OSZ/"] : eL.t.kyfzzc),
        S = i.useRef(null),
        D = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    C && E(),
                    (0, lF.L)({ analyticsLocations: p, guildId: h, stackingBehavior: "stack", returnRef: S });
            },
            [C, E, p, h],
        ),
        T = {
            icon: lo.V,
            tooltip: eL.intl.string(eL.t.lqKKI2),
            "aria-label": eL.intl.string(eL.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: D,
            buttonRef: S,
        },
        _ = v ? T : void 0,
        L =
            null != b
                ? (0, t.jsx)(nQ.c$, {
                      user: m,
                      guildId: h,
                      displayName: b,
                      size: "lg",
                      pendingDisplayNameStyles: P,
                      className: n4.d,
                  })
                : null;
    return (0, t.jsx)(n6, {
        ...N,
        preview: L,
        placeholder: R,
        editButtonAriaLabel: O,
        trailing: _,
        input: (0, t.jsx)(n9, { ...y, label: k, maxLength: eq.zzC, placeholder: R, trailing: _ }),
    });
}
var tl = n(469432);
function tn(e) {
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
                    (0, lP.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        { previewProps: f, inputProps: p, isEditing: x } = n3(c, m),
        h = null != g && g.length > 0;
    return (0, t.jsx)(n6, {
        ...f,
        variant: "compact",
        className: a()(tl.k, x && tl.J),
        preview: h ? (0, t.jsx)(nQ.n2, { pronouns: g }) : null,
        placeholder: eL.intl.string(eL.t["76Aqhl"]),
        editButtonAriaLabel: eL.intl.string(eL.t.h6VAO7),
        input: (0, t.jsx)(n9, {
            ...p,
            label: eL.intl.string(eL.t["rniRE+"]),
            placeholder: eL.intl.string(eL.t["76Aqhl"]),
            maxLength: eq.VE5,
        }),
    });
}
var tt = n(874644);
function ti(e) {
    let { user: l, displayProfile: n, nickname: i, primaryGuild: r, trailing: a, onClose: s, allowEditing: o } = e;
    if (!o)
        return (0, t.jsx)(nQ.Ay, {
            user: l,
            guildId: n?.guildId ?? void 0,
            displayName: i,
            displayNameSize: "lg",
            pronouns: n?.pronouns,
            primaryGuild: r,
            trailing: a,
            onClose: s,
        });
    let d = l.isProvisional
        ? null
        : (0, t.jsx)(nJ.A, {
              user: l,
              forceUsername: !0,
              className: tt.a1,
              usernameClass: tt.eb,
              discriminatorClass: tt.sw,
              hideBotTag: !0,
          });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(te, { displayProfile: n, user: l }),
            (0, t.jsxs)("div", {
                className: `${tt.AK} ${tt.j6}`,
                children: [
                    d,
                    (0, t.jsx)(nQ.Ce, {}),
                    (0, t.jsx)(tn, { displayProfile: n }),
                    (0, t.jsx)(nZ.Ay, {
                        primaryGuild: r,
                        userId: l.id,
                        onClose: s,
                        containerClassName: tt.L4,
                        className: tt.Mp,
                    }),
                    a,
                ],
            }),
        ],
    });
}
n(321073);
var tr = n(97808),
    ta = n(980707),
    ts = n(477782),
    to = n(22231),
    td = n(601255),
    tu = n(562819),
    tc = n(19575),
    tg = n(106106),
    tm = n(338165);
let tf = tc.Ay.getEnableHardwareAcceleration() ? tr.Js : tr.eu;
function tp(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(ta.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eL.intl.string(eL.t.YAgq3W),
        children: (0, t.jsx)(ts.rX, { children: n }),
    });
}
function tx(e) {
    let { user: l, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, eo.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useCallback(() => u(!1), []),
        m = (function (e) {
            let { user: l, guildId: n, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, j.Ay)(),
                d = null != n,
                u = (0, s.bG)([lB.Ay], () => (null != n ? lB.Ay.getMember(n, l.id) : null)),
                c = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(n ?? void 0).pendingAvatar),
                g = d ? u?.avatar : l.avatar,
                m = (0, J.z5)(c, g),
                f = d && null != l.avatar,
                p = lA.Ay.canUsePremiumProfileCustomization(l),
                x = p || null == n,
                h = p || null == n,
                v = (0, s.bG)([lX.A], () => (null != n ? lX.A.getGuild(n) : null)),
                A = (0, J.a4)({ user: l }),
                b = (0, J.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: I } = (0, J.CP)(n ?? void 0),
                C = void 0 !== I,
                N = null != (0, td.A)(C ? I : b) && (C ? null != I : null != b),
                y = d && null != A,
                E = i.useCallback(() => {
                    r(),
                        (0, lS.XD)({
                            uploadType: lD.HL.AVATAR,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                P = i.useCallback(() => {
                    r(), (0, tu.L)({ analyticsLocations: o, guild: v ?? void 0, stackingBehavior: "stack" });
                }, [r, o, v]),
                k = i.useCallback(() => {
                    r(),
                        (0, lS.rM)(null, g, (e) => (0, lP.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, J.WU)(f ? "reset" : "remove");
                }, [r, n, g, f]),
                R = i.useCallback(() => {
                    r(), (0, lP.p)({ guildId: n ?? void 0, avatarDecoration: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, t.jsx)(
                                ts.Dr,
                                { id: "change-avatar", label: eL.intl.string(eL.t["4OynCD"]), action: E },
                                "change-avatar",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, t.jsx)(
                                ts.Dr,
                                { id: "change-decoration", label: eL.intl.string(eL.t.HykynS), action: P },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        m &&
                        e.push(
                            f
                                ? (0, t.jsx)(
                                      ts.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.TDjKDm),
                                          action: k,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      ts.Dr,
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
                                      ts.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eL.intl.string(eL.t["2u5yu0"]),
                                          action: R,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      ts.Dr,
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
              className: a()(tg.my, tg.vk, tm.kL, { [tm.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(tf, { ...r, imageClassName: a()(tg.Lw, tm.HU) }),
                  (0, t.jsx)(lN.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: lN.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: g,
                      renderPopout: (e) => (0, t.jsx)(tp, { ...e, items: m, onMenuClose: g }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: tm.r9,
                              children: (0, t.jsx)(lu.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: to.R,
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
var th = n(976726);
function tv(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(ta.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eL.intl.string(eL.t.FzU73A),
        children: (0, t.jsx)(ts.rX, { children: n }),
    });
}
function tA(e) {
    let { user: l, guildId: n } = e,
        [r, o] = i.useState(!1),
        d = i.useRef(null),
        u = i.useCallback(() => o(!1), []),
        c = (function (e) {
            let { user: l, guildId: n, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, j.Ay)(),
                d = (0, J.N2)({ user: l, guildId: n ?? void 0 }),
                u = lA.Ay.canUsePremiumProfileCustomization(l),
                c = u || null == n,
                g = null != n,
                { pendingBanner: m, pendingProfileEffect: f } = (0, s.bG)([Q.A], () =>
                    Q.A.getPendingChanges(n ?? void 0),
                ),
                p = (0, s.bG)([M.A], () =>
                    null != n ? M.A.getGuildMemberProfile(l.id, n)?.banner : M.A.getUserProfile(l.id)?.banner,
                ),
                x = (0, s.bG)([lv.default], () => lv.default.getCurrentUser()?.banner != null),
                h = (0, s.bG)([M.A], () => M.A.getUserProfile(l.id)?.profileEffect != null),
                v = (0, J.Ac)(m, p),
                A = g && x,
                b = g && h,
                I = void 0 === f ? null != d : null != f,
                C = i.useCallback(() => {
                    r(),
                        (0, lS.XD)({
                            uploadType: lD.HL.BANNER,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                N = i.useCallback(() => {
                    r(),
                        (0, lq.W)({
                            analyticsLocations: o,
                            guild: null != n ? (lX.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, d]),
                y = i.useCallback(() => {
                    r(), (0, lS.rM)(null, p, (e) => (0, lP.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, p]),
                E = i.useCallback(() => {
                    r(), (0, lP.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    u &&
                        e.push(
                            (0, t.jsx)(
                                ts.Dr,
                                { id: "change-banner", label: eL.intl.string(eL.t.N0bC3P), action: C },
                                "change-banner",
                            ),
                        ),
                    c &&
                        e.push(
                            (0, t.jsx)(
                                ts.Dr,
                                { id: "change-effect", label: eL.intl.string(eL.t["/6nv6N"]), action: N },
                                "change-effect",
                            ),
                        ),
                    u &&
                        v &&
                        e.push(
                            A
                                ? (0, t.jsx)(
                                      ts.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.jHlJNS),
                                          action: y,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      ts.Dr,
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
                                      ts.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.Lb7lu9),
                                          action: E,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      ts.Dr,
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
              className: a()(th.kL, { [th.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(eu.A, { ...e, className: th.Pr }),
                  (0, t.jsx)(lN.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: lN.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: u,
                      renderPopout: (e) => (0, t.jsx)(tv, { ...e, items: c, onMenuClose: u }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: th.r9,
                              children: (0, t.jsx)(lu.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: to.R,
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
var tj = n(777480),
    tb = n(107563),
    tI = n(570287);
n(938796);
var tC = n(913453),
    tN = n(667049),
    ty = n(837531),
    tE = n(186272),
    tP = n(645625),
    tk = n(337796);
let tR = (e) => e * (2 - e),
    tO = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } },
    tS = (e) => {
        let { type: l, anchor: n } = e;
        return "staple" !== l || "bottom" !== n;
    };
function tD(e) {
    let { displayProfile: l, pendingBanner: n } = e,
        r = (0, V.Nx)(),
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
        : (0, t.jsx)("div", { className: tP.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function tT(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: i } = e,
        r = void 0 !== n ? n : l?.profileEffect;
    return null == r ? null : (0, t.jsx)(b.A, { skuId: r.skuId, isHovering: i });
}
function t_(e) {
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
        D = i.useRef(null),
        { isHoveringOrFocusing: L } = (0, P.A)(D),
        [G, M] = i.useState(),
        U = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? M("compact-xs") : l <= 380 ? M("compact-sm") : M(void 0);
        }, []);
    (0, h.g)(D, U, [], { fireOnMount: !0 });
    let F = null != G ? tO[G] : void 0,
        B = i.useMemo(() => p ?? (0, k.A)(), [p]),
        { relationshipType: V, originApplicationId: $ } = (0, s.cf)([T.A], () => ({
            relationshipType: T.A.getRelationshipType(l.id),
            originApplicationId: T.A.getOriginApplicationId(l.id),
        })),
        J = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        Z = (0, O.q)({ userId: l.id }),
        Q = (0, R.fi)(l.id),
        { appIdentities: el, connections: en } = (function (e) {
            let { filteredAppIdentities: l } = (0, q.A)(e),
                n = (0, Y.A)(e),
                t = (0, H.useIsRiotSocialSDKMigrationEnabled)({
                    location: "useVisibleUserProfileConnectionsAndAppIdentities",
                }),
                r = i.useMemo(() => new Set(t ? (l?.map((e) => e.application_id) ?? []) : []), [l, t]),
                a = (0, K.A)([...r]).filter(X.Vq);
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
        ei = C ? tA : eu.A,
        er = C ? tx : eo.A;
    return (0, t.jsxs)("main", {
        className: a()(tP.profile, null != G && tP[G]),
        ref: D,
        "aria-busy": y,
        children: [
            (0, t.jsxs)("div", {
                className: tP.profileHeader,
                children: [
                    (0, t.jsx)(ei, {
                        user: l,
                        displayProfile: g,
                        guildId: r,
                        themeType: ee.d.MODAL_V2,
                        specOverrides: F,
                        pendingBanner: j,
                    }),
                    (0, t.jsx)(ex.A, { userId: l.id, onClose: x, className: tP.interactionToast }),
                    (0, t.jsx)(er, {
                        user: l,
                        displayProfile: g,
                        guildId: r,
                        channelId: d,
                        themeType: ee.d.MODAL_V2,
                        specOverrides: F,
                        avatarDecorationOverride: v,
                        avatarOverride: A,
                    }),
                    (0, t.jsx)(eI.A, {
                        user: l,
                        guildId: r,
                        channelId: d,
                        themeType: ee.d.MODAL_V2,
                        hasEntered: f,
                        prompt: E ? B : null,
                    }),
                ],
            }),
            (0, t.jsxs)(u.Ip, {
                fade: !0,
                className: tP.profileBody,
                children: [
                    (0, t.jsx)(em.A, { userId: l.id }),
                    (0, t.jsx)(ti, {
                        user: l,
                        displayProfile: g,
                        nickname: m,
                        trailing: (0, t.jsx)(ed.A, { displayProfile: g, themeType: ee.d.MODAL_V2, onClose: x }),
                        onClose: x,
                        allowEditing: C,
                    }),
                    V === eq.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(eb.A.Overlay, {
                            className: tP.profileOverlay,
                            children: (0, t.jsx)(ep.A, {
                                user: l,
                                applicationId: $,
                                guildId: g?.guildId ?? void 0,
                                channelId: d,
                                className: tP.profileBanner,
                            }),
                        }),
                    Q.map((e) => {
                        let { applicationId: n } = e;
                        return (0, t.jsx)(
                            eb.A.Overlay,
                            {
                                className: tP.profileOverlay,
                                children: (0, t.jsx)(ep.A, {
                                    user: l,
                                    guildId: g?.guildId ?? void 0,
                                    channelId: d,
                                    isGameRelationship: !0,
                                    applicationId: n,
                                    className: tP.profileBanner,
                                }),
                            },
                            n,
                        );
                    }),
                    l.isProvisional &&
                        (0, t.jsx)(eb.A.Overlay, {
                            className: tP.profileOverlay,
                            children: (0, t.jsx)(nR.A, {
                                heading: eL.intl.string(eL.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(c.E, { size: "xs", color: "currentColor" }),
                                className: tP.profileBanner,
                                children: (0, t.jsx)(S.T, { userId: l.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(ej.A, { user: l, className: tP.profileBanner }),
                    g?.private &&
                        (0, t.jsx)(eb.A.Overlay, {
                            className: tP.profileOverlay,
                            children: (0, t.jsx)(eA.A, { username: m }),
                        }),
                    (0, t.jsx)("div", {
                        className: tP.profileButtons,
                        children: (0, t.jsx)(e2, {
                            user: l,
                            currentUser: n,
                            guildId: r,
                            originGuildId: o,
                            channelId: d,
                            displayProfile: g,
                            relationshipType: V,
                            onClose: x,
                        }),
                    }),
                    E && (0, t.jsx)(eg.A, { isPremiumUser: (0, w.ki)(n), onInteraction: x }),
                    !J && (0, t.jsx)(ec.E, { userBio: g?.bio, setLineClamp: !1 }),
                    Z.length > 0 &&
                        (0, t.jsx)(nR.A, {
                            heading: eL.intl.string(eL.t["Uv/eTx"]),
                            children: (0, t.jsx)(ef.A, { applicationIds: Z }),
                        }),
                    (0, t.jsx)(nR.A, {
                        heading: eL.intl.string(eL.t.a6XYD9),
                        children: (0, t.jsx)(eh.A, { userId: l.id, guildId: g?.guildId, tooltipDelay: eK.In }),
                    }),
                    g?.guildId != null &&
                        (0, t.jsx)(eC.A, {
                            userId: l.id,
                            guildId: g.guildId,
                            className: tP.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "currentColor",
                        }),
                    (en.length > 0 || el.length > 0) &&
                        (0, t.jsx)(nR.A, {
                            heading: eL.intl.string(eL.t["3fe7U5"]),
                            scrollTargetId: eK.bk.CONNECTIONS,
                            children: (0, t.jsx)(ls, {
                                applicationIdentities: el,
                                connections: en,
                                userId: l.id,
                                className: tP.profileAppConnections,
                            }),
                        }),
                    et.length > 0 &&
                        (0, t.jsx)(nR.A, {
                            heading: eL.intl.string(eL.t.PHjkRE),
                            scrollTargetId: eK.bk.APPS,
                            children: (0, t.jsx)(eM, {
                                applicationRoleConnections: et,
                                onClose: x,
                                className: tP.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(nS, { userId: l.id }),
                ],
            }),
            (0, t.jsx)(tT, { displayProfile: g, profileEffectOverride: b, isHovering: L }),
            null != I && (0, t.jsx)(N.A, { frame: I, filterLayer: tS }),
        ],
    });
}
function tL(e) {
    let { user: l, displayProfile: n, pendingThemeColors: i, children: r } = e,
        {
            theme: a,
            primaryColor: s,
            secondaryColor: o,
        } = (0, B.A)({ user: l, displayProfile: n, pendingThemeColors: i }),
        { profileThemeStyle: d, profileThemeClassName: u } = (0, $.A)({
            theme: a,
            themeType: null,
            primaryColor: s,
            secondaryColor: o,
        });
    return (0, t.jsx)("div", { className: u, style: d, children: r });
}
function tw(e) {
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
            openedAt: O,
            onClose: S,
            sourceAnalyticsLocations: _ = [],
            themeContainerClassName: w,
        } = e,
        B = l.id === n.id,
        {
            guildId: V,
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
        K = i.useMemo(() => (null != V ? { [V]: [l.id] } : {}), [V, l.id]);
    (0, v.Eq)(K, "UserProfileModalV2");
    let q = (0, U.X)("UserProfileModalV2"),
        X = B && q,
        {
            pendingThemeColors: Y,
            avatarDecorationOverride: $,
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
                            : (0, J.lw)({ userValue: l.avatarDecoration, pendingValue: i, guildId: n }),
                    avatarOverride: (0, Z.V7)({ userId: l.id, image: r, size: en }),
                    bannerOverride: a,
                    profileEffectOverride: s,
                };
            }, [l, n, t]);
        })({ user: l, allowEditingInModal: X, guildId: V }),
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
                    config: { duration: 300, easing: tR },
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
        eh = X && !ed,
        eA = X && (!ed || eu),
        { defaultWishlistId: ej } = (0, s.cf)([M.A], () => ({ defaultWishlistId: M.A.getFirstWishlistId(l.id) }));
    (0, D.fw)({ wishlistId: ej, userId: l.id });
    let eI = (0, es.fC)(),
        eC = W || null != eI.interactionType,
        eN = (function (e) {
            let l,
                n,
                t,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, tC.A)(i),
                d = o?.length,
                u =
                    ((l = (0, s.bG)([lv.default], () => lv.default.getCurrentUser())),
                    (n = (0, s.bG)([M.A], () => M.A.getUserProfile(i.id))),
                    (t =
                        n?.bio === "" &&
                        n?.pronouns === "" &&
                        n?.banner === void 0 &&
                        n?.accentColor === void 0 &&
                        n?.banner === void 0 &&
                        i.flags === i.publicFlags &&
                        (n?.badges == null || n?.badges?.length === 0)),
                    l?.id !== i.id && !t),
                c = (0, tN.A)(i.id),
                g = (0, tI.A)(i.id),
                m = [],
                f = i.id === r?.id,
                p = M.A.getFirstWishlistId(i.id),
                x = null != p,
                h = x ? M.A.getWishlistSettings(i.id, p) : null,
                v = (x ? tb.A.getWishlistItems(p) : []).length > 0,
                A = c.length > 0;
            (f || A) && m.push({ text: eL.intl.string(eL.t.laViwx), section: eK.RP.WIDGETS }),
                m.push({ text: eL.intl.string(eL.t.chq59f), section: eK.RP.ACTIVITY });
            let j = !1 === i.nsfwAllowed,
                b = T.A.isFriend(i.id),
                I = h?.visibility === tj.a.PUBLIC;
            return (
                (f || (!f && v && I && g && (!j || (j && b)))) &&
                    m.push({ text: eL.intl.string(eL.t["7lZ31J"]), section: eK.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (m.push({ text: (0, ty.A)(a), section: eK.RP.MUTUAL_FRIENDS }),
                    m.push({ text: (0, tE.A)(d), section: eK.RP.MUTUAL_GUILDS })),
                m
            );
        })({ user: l, currentUser: n }),
        { analyticsLocations: ey } = (0, j.Ay)([..._, A.A.USER_PROFILE_MODAL_V2]),
        eE = (0, G.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: b,
            guildId: V,
            channelId: u,
            messageId: c,
            roleId: h,
        }),
        eP = (0, F.Ay)(l.id, V),
        ek = (0, C.A)(eP?.profileFrame?.skuId, "UserProfileModalV2"),
        eR = (0, y.A)(eP?.profileFrame?.skuId);
    (0, I.A)({ skuId: eP?.profileFrame?.skuId, openedAt: O, context: eE, analyticsLocations: ey });
    let eO = L.Ay.useName(eP?.guildId, u, l),
        eS = (0, E.GV)(),
        eD = eL.intl.format(eL.t.KRe1Fk, { name: eO });
    return (0, t.jsx)(j.f5, {
        value: ey,
        children: (0, t.jsx)(G.of, {
            value: eE,
            openedAt: O,
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
                        className: a()(tk.zr, { [tk.QF]: eP?.private === !0 }),
                        transitionState: k,
                        "aria-labelledby": eS,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(nG, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(tP.layoutContainer, eR, {
                                        [tP.editingPanelEnabled]: X,
                                        [tP.editingPanelExpanded]: X && ed,
                                        [tP.isAnimating]: eu,
                                    }),
                                    children: [
                                        (0, t.jsxs)(tL, {
                                            user: l,
                                            displayProfile: eP,
                                            pendingThemeColors: Y,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: tk.Oo,
                                                    children: [
                                                        (0, t.jsx)(e3.A, { isCurrentUser: B, onClose: S }),
                                                        (0, t.jsx)(m.A, {
                                                            children: (0, t.jsx)(f.H, { id: eS, children: eD }),
                                                        }),
                                                        eA &&
                                                            (0, t.jsx)(nb, {
                                                                buttonRef: ef,
                                                                onClick: eg,
                                                                className: tP.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eh &&
                                                    (0, t.jsx)("div", {
                                                        className: tP.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(nj, {
                                                            innerRef: ep,
                                                            onClick: eg,
                                                            className: tP.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(f.F, {
                                            children: [
                                                X &&
                                                    ec((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(nE, {
                                                                  className: a()(tP.editingPanel, {
                                                                      [tP.isExpanded]: ed,
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
                                                    className: a()(w, tk.A7, tP.profileContentOuter),
                                                    innerClassName: tP.profileContentInner,
                                                    user: l,
                                                    displayProfile: eP,
                                                    themeType: ee.d.MODAL_V2,
                                                    pendingThemeColors: Y,
                                                    isPrivate: eP?.private === !0,
                                                    children: [
                                                        (0, t.jsx)(tD, { displayProfile: eP, pendingBanner: er }),
                                                        eP?.private === !0 && (0, t.jsx)(ev.A, {}),
                                                        (0, t.jsx)(n_, { isVisible: eC, showLoadingSpinner: W }),
                                                        (0, t.jsx)(n$, { className: tP.toast }),
                                                        (0, t.jsx)(t_, {
                                                            user: l,
                                                            currentUser: n,
                                                            guildId: V,
                                                            channelId: u,
                                                            displayProfile: eP,
                                                            nickname: eO,
                                                            originGuildId: o,
                                                            hasEntered: k === p.ip.ENTERED,
                                                            customStatusPrompt: R,
                                                            onClose: S,
                                                            avatarDecorationOverride: $,
                                                            avatarOverride: el,
                                                            bannerOverride: er,
                                                            profileEffectOverride: eo,
                                                            profileFrame: ek,
                                                            allowEditing: X,
                                                            isLoading: W,
                                                        }),
                                                        (0, t.jsx)(nM.A, {
                                                            user: l,
                                                            currentUser: n,
                                                            displayProfile: eP,
                                                            guildId: V,
                                                            channelId: u,
                                                            items: eN,
                                                            initialSection: N,
                                                            onClose: S,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, t.jsx)(nP.A, { userId: l.id, guildId: V, className: tP.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
