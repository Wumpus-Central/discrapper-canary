n.d(l, { A: () => iE });
var i = n(627968),
    t = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(17928),
    o = n(778712),
    d = n(866323),
    u = n(364522),
    c = n(695366),
    g = n(935462),
    m = n(140735),
    p = n(707554),
    f = n(231723),
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
    T = n(561794),
    _ = n(994500),
    L = n(351906),
    D = n(562153),
    G = n(474090),
    w = n(183555),
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
    ei = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        profileEffectOverride: void 0,
    };
var et = n(903209);
async function er(e, l) {
    let n = new Image();
    await new Promise((l, i) => {
        (n.onload = () => l()), (n.onerror = () => i(Error(`Failed to load image: ${e}`))), (n.src = e);
    });
    let i = null != l ? Math.min(1, l / Math.max(n.naturalWidth, n.naturalHeight)) : 1,
        t = document.createElement("canvas");
    (t.width = Math.round(n.naturalWidth * i)), (t.height = Math.round(n.naturalHeight * i));
    let r = t.getContext("2d");
    if (null == r) throw Error("Canvas 2d context unavailable");
    return r.drawImage(n, 0, 0, t.width, t.height), t.toDataURL("image/png");
}
var ea = n(716804),
    es = n(679492),
    eo = n(718019),
    ed = n(694720),
    eu = n(915614),
    ec = n(308244),
    eg = n(744753),
    em = n(559506),
    ep = n(361311),
    ef = n(886891),
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
    eT = n(889227),
    e_ = n(967198),
    eL = n(488995),
    eD = n(375708),
    eG = n(985176);
function ew(e) {
    let { applicationRoleConnection: l, locale: n, onApplicationClicked: t, selectedGuildId: r } = e,
        a = (0, ek.VW)(l, n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: eG.k_,
                children:
                    null != l.application.bot
                        ? (0, i.jsx)(eP.A, { user: new eT.A(l.application.bot), size: o._3.SIZE_16 })
                        : (0, i.jsx)(eN._, { color: "currentColor", size: "sm" }),
            }),
            (0, i.jsxs)("div", {
                className: eG.Hd,
                children: [
                    (0, i.jsxs)(ey.D, {
                        className: eG.OB,
                        onClick: () => {
                            t?.(),
                                (0, eR.transitionToGlobalDiscovery)({
                                    tab: eL.GlobalDiscoveryTab.APPS,
                                    applicationId: l.application.id,
                                    newSessionState: {
                                        entrypoint: { name: eO.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                });
                        },
                        children: [
                            null != l.platform_name
                                ? (0, i.jsx)(eE.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_name,
                                  })
                                : null,
                            null != l.platform_username
                                ? (0, i.jsx)(eE.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_username,
                                  })
                                : null,
                            (0, i.jsx)(eE.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: eG.nk,
                                children: eD.intl.format(eD.t.zIT9YA, { applicationHook: () => l.application.name }),
                            }),
                        ],
                    }),
                    null != a && a.length > 0 ? (0, i.jsx)("div", { className: eG.yu, children: a }) : null,
                ],
            }),
        ],
    });
}
function eM(e) {
    let { applicationRoleConnections: l, className: n, onClose: t } = e,
        { trackUserProfileAction: r } = (0, w.NJ)(),
        o = (0, s.bG)([eS.default], () => eS.default.locale),
        d = (0, s.bG)([e_.A], () => e_.A.getGuildId());
    return 0 === l.length
        ? null
        : (0, i.jsx)("ul", {
              className: a()(eG.kL, n),
              children: l.map((e, l) =>
                  (0, i.jsx)(
                      "li",
                      {
                          className: eG.FI,
                          children: (0, i.jsx)(ew, {
                              applicationRoleConnection: e,
                              locale: o,
                              onApplicationClicked: () => {
                                  r({ action: "PRESS_APP_CONNECTION" }), t();
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
        o = t.useCallback(() => {
            s(), n?.();
        }, [s, n]);
    return a
        ? (0, i.jsx)(eH.q3, { action: eK.pt.GIFT, icon: eV.o, tooltipText: eD.intl.string(eD.t.PEjaCx), onClick: o })
        : null;
}
var eY = n(982985),
    e$ = n(700174),
    eJ = n(34188),
    eZ = n(859040),
    eQ = n(207803),
    e0 = n(485745);
function e1(e) {
    let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, e0.A)(),
        i = t.useRef(e);
    return (
        t.useLayoutEffect(() => {
            i.current = e;
        }),
        t.useCallback(
            function () {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                l && n ? (0, eQ.VQ)() : i.current(...t);
            },
            [l, n],
        )
    );
}
function e7(e) {
    let { onClose: l, ...n } = e,
        { analyticsLocations: t, newestAnalyticsLocation: r } = (0, j.Ay)(),
        a = e1(() => {
            (0, eZ.Cz)({ analyticsLocations: t, analyticsSource: r }), l?.();
        });
    return (0, i.jsx)(eH.q3, {
        action: "VISIT_SHOP",
        icon: eJ.U,
        tooltipText: eD.intl.string(eD.t.b2d0N0),
        onClick: a,
        ...n,
    });
}
var e8 = n(573355),
    e9 = n(102951);
function e2(e) {
    let {
            user: l,
            currentUser: n,
            guildId: t,
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
            hasOutgoingPendingGameFriends: p,
            hasIncomingPendingGameFriends: f,
        } = (0, e9.J)({ userId: l.id }),
        x = m.length > 0 || p || f;
    return o === eq.eA$.BLOCKED
        ? null
        : l.id === n.id
          ? u
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(eY.e, { userId: l.id, variant: "primary", disabled: !0 }),
                        (0, i.jsx)(e7, { onClose: d }),
                        (0, i.jsx)(e$.Zt, { user: l, guildId: t, viewProfileItem: g }),
                    ],
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(eB.A, { user: l, guildId: t, onClose: d }),
                        (0, i.jsx)(e7, { onClose: d }),
                        (0, i.jsx)(e$.Zt, { user: l, guildId: t, viewProfileItem: g }),
                    ],
                })
          : l.bot
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(eY.e, { userId: l.id, onClose: eU.A.popAll, autoFocus: !0 }),
                      (0, i.jsx)(e$.Zt, { user: l, guildId: t, viewProfileItem: g }),
                  ],
              })
            : o === eq.eA$.PENDING_INCOMING
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(eY.e, { userId: l.id, onClose: eU.A.popAll, autoFocus: !0 }),
                        (0, i.jsx)(eX, { user: l }),
                        (0, i.jsx)(e$.Zt, { user: l, guildId: t }),
                    ],
                })
              : o === eq.eA$.FRIEND || o === eq.eA$.PENDING_OUTGOING
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(eY.e, { userId: l.id, onClose: eU.A.popAll, autoFocus: !0 }),
                          (0, i.jsx)(e8.Ef, { user: l, relationshipType: o, analyticsLocation: c }),
                          (0, i.jsx)(eX, { user: l }),
                          (0, i.jsx)(e$.Zt, { user: l, guildId: t, viewProfileItem: g }),
                      ],
                  })
                : o === eq.eA$.NONE && x
                  ? (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(eY.e, { userId: l.id, onClose: eU.A.popAll, autoFocus: !0 }),
                            (0, i.jsx)(e8.ES, {
                                user: l,
                                analyticsLocation: c,
                                gameFriends: m,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: f,
                                hasOutgoingPendingGameFriends: p,
                            }),
                            (0, i.jsx)(eX, { user: l }),
                            (0, i.jsx)(e$.Zt, { user: l, guildId: t, viewProfileItem: g }),
                        ],
                    })
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(e8.cO, {
                                variant: "primary",
                                userId: l.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, i.jsx)(eY.l, { userId: l.id, onClose: eU.A.popAll, variant: "secondary" }),
                            (0, i.jsx)(eX, { user: l }),
                            (0, i.jsx)(e$.Zt, { user: l, guildId: t, viewProfileItem: g }),
                        ],
                    });
}
var e3 = n(408278),
    e5 = n(789645);
function e6(e) {
    let { isCurrentUser: l, onClose: n } = e,
        t = e1(n, l);
    return (0, i.jsx)(e3.K, {
        "aria-label": eD.intl.string(eD.t.cpT0Cq),
        icon: e5.P,
        onClick: t,
        variant: "secondary",
        size: "sm",
    });
}
var e4 = n(990078),
    le = n(349288),
    ll = n(509434),
    ln = n(95561),
    li = n(874490),
    lt = n(370480),
    lr = n(486020),
    la = n(76843),
    ls = n(783419);
function lo(e) {
    let { account: l, locale: n, userId: t } = e,
        r = l.metadata ?? {},
        a = (0, lt.An)(r[ls.pK.CREATED_AT], n),
        s = W.A.get((0, li.ML)(l.type));
    return (0, i.jsx)(lu, {
        renderAccountName: () => {
            let e = s?.getPlatformUserUrl?.(l);
            return null == e
                ? (0, i.jsx)(e4.m, {
                      overflowOnly: !0,
                      text: l.name,
                      children: (0, i.jsx)(eE.E, { variant: "text-sm/normal", className: eG.GW, children: l.name }),
                  })
                : (0, i.jsx)(le.Anchor, {
                      href: e,
                      className: eG.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${l.name}, ${eD.intl.string(eD.t.q5jLJB)}`
                              : `${l.name}, ${eD.intl.string(eD.t.q5jLJB)}`,
                      onClick: (n) => {
                          (0, ln.zV)(eq.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: t }),
                              (0, la.h)({ href: e, trusted: s?.type !== eq.fg2.DOMAIN }, n);
                      },
                      children: (0, i.jsxs)("div", {
                          className: eG.vi,
                          children: [
                              (0, i.jsx)(e4.m, {
                                  overflowOnly: !0,
                                  text: l.name,
                                  children: (0, i.jsx)(eE.E, {
                                      variant: "text-sm/normal",
                                      className: eG.GW,
                                      children: l.name,
                                  }),
                              }),
                              (0, i.jsx)(ll.I, { size: "xs", color: "currentColor" }),
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
function ld(e) {
    let { identityWithApplication: l } = e,
        { identity: n, application: t } = l;
    if (null == n.profile || null == n.profile.username || null == t) return null;
    let r = lr.Ay.getApplicationIconURL({ id: t.id, icon: t.icon });
    return (0, i.jsx)(lu, {
        renderAccountName: () =>
            (0, i.jsx)(e4.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, i.jsx)(eE.E, {
                    variant: "text-sm/normal",
                    className: eG.GW,
                    children: n.profile.username,
                }),
            }),
        renderMetadata: () => null,
        platformIcon: r,
        platformName: t.name,
        createdAtDate: void 0,
        applyIconBorderRadius: !0,
    });
}
function lu(e) {
    let {
        renderAccountName: l,
        renderMetadata: n,
        platformName: t,
        platformIcon: r,
        createdAtDate: s,
        applyIconBorderRadius: o = !1,
    } = e;
    return (0, i.jsxs)("li", {
        className: eG.FI,
        children: [
            (0, i.jsx)(e4.m, {
                __unsupportedReactNodeAsText: t,
                children: (0, i.jsx)("div", {
                    className: eG.k_,
                    children: (0, i.jsx)("img", {
                        alt: eD.intl.formatToPlainString(eD.t.rtm15P, { name: t }),
                        className: a()(eG.tV, o ? eG.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, i.jsxs)("div", {
                className: eG.Hd,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            l(),
                            null != s &&
                                (0, i.jsx)(eE.E, {
                                    variant: "text-xs/normal",
                                    children: eD.intl.format(eD.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: eG.yu, children: n() }),
                ],
            }),
        ],
    });
}
function lc(e) {
    let { connections: l, applicationIdentities: n, userId: t, className: r } = e,
        o = (0, s.bG)([eS.default], () => eS.default.locale);
    return 0 === l.length && 0 === n.length
        ? null
        : (0, i.jsxs)("ul", {
              className: a()(eG.kL, r),
              children: [
                  l.map((e) => (0, i.jsx)(lo, { account: e, userId: t, locale: o }, `${e.type}:${e.id}`)),
                  n?.map((e) => (0, i.jsx)(ld, { identityWithApplication: e }, e.identity.application_id)),
              ],
          });
}
var lg = n(200219),
    lm = n(661531),
    lp = n(320448),
    lf = n(534514),
    lx = n(403581),
    lh = n(287809),
    lv = n(927578),
    lA = n(487233),
    lj = n(120386),
    lb = n(317097),
    lI = n(602853),
    lC = n(922016),
    lN = n(508274),
    ly = n(654107),
    lE = n(84540),
    lP = n(930349);
function lk(e) {
    let { user: l, disabled: n = !1 } = e,
        r = t.useRef(null),
        a = (0, lI.r)(lm.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, ly.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([Q.A, M.A], () => ({
            pendingAccentColor: Q.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: M.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, lb.LX)(o[0] ?? a),
        g = t.useCallback((e) => (0, lE.p)({ accentColor: e }), []);
    return (0, i.jsx)(lC.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, i.jsx)(lN.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, i.jsx)(lP.NW, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                accessibleLabel: eD.intl.string(eD.t["/X3fkf"]),
                showOverlayOnHover: !0,
                children: (0, i.jsx)("div", {
                    style: { width: "100%", height: "100%", backgroundColor: (0, lb.Hl)(c) },
                }),
            }),
    });
}
var lR = n(450373),
    lO = n(252732),
    lS = n(339984),
    lT = n(111242);
function l_(e) {
    let { backgroundColor: l } = e;
    return (0, i.jsx)("div", { className: lT.o, style: { backgroundColor: l } });
}
function lL(e) {
    let { src: l } = e;
    return (0, i.jsx)("img", { src: l, alt: "", className: lT._ });
}
function lD(e) {
    let { displayProfile: l, pendingBanner: n } = e,
        t = (0, lI.r)(lm.A.unsafe_rawColors.PRIMARY_800).hex(),
        r = l?.primaryColor ?? (0, lb.LX)(t),
        { hex: a } = (0, lR.A)(r),
        s = l?.getPreviewBanner(n, !1, 296) ?? void 0;
    return null != s ? (0, i.jsx)(lL, { src: s }) : (0, i.jsx)(l_, { backgroundColor: a });
}
function lG(e) {
    let { userId: l, guildId: n, disabled: t } = e,
        { newestAnalyticsLocation: r } = (0, j.Ay)(),
        a = null != n,
        o = (0, F.Ay)(l, n),
        d = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(n ?? void 0).pendingBanner),
        u = (0, s.bG)([lh.default], () => lh.default.getCurrentUser()?.banner),
        c = (0, s.bG)([M.A], () =>
            null != n ? M.A.getGuildMemberProfile(l, n)?.banner : M.A.getUserProfile(l)?.banner,
        ),
        g = void 0 !== d,
        m = null === d,
        p = m || (!g && null == c),
        f = a && null != u,
        x = a && (o?.isUsingGuildMemberBanner() ?? !1),
        h = (0, J.Ac)(d, c)
            ? {
                  onClick: () => (0, lO.rM)(null, c, (e) => (0, lE.p)({ guildId: n ?? void 0, banner: e })),
                  type: f ? "reset" : "remove",
                  accessibleLabel: eD.intl.string(f ? eD.t.jHlJNS : eD.t.tT9n7D),
              }
            : void 0,
        v = () =>
            (0, lO.XD)({
                uploadType: lS.HL.BANNER,
                analyticsSource: r,
                guildId: n ?? void 0,
                stackingBehavior: "stack",
            }),
        A = (0, i.jsx)(lD, { displayProfile: o, pendingBanner: m && a && !x ? void 0 : d });
    return p
        ? (0, i.jsx)(lP.kL, {
              variant: "square",
              onClick: v,
              accessibleLabel: eD.intl.string(eD.t.N0bC3P),
              disabled: t,
              dimContent: p && f,
              showOverlayOnHover: !0,
              children: A,
          })
        : (0, i.jsx)(lP.NW, {
              variant: "square",
              onClick: v,
              accessibleLabel: eD.intl.string(eD.t.N0bC3P),
              deleteButtonConfig: h,
              disabled: t,
              showOverlayOnHover: !0,
              children: A,
          });
}
var lw = n(922301),
    lM = n(368919),
    lU = n(259065),
    lF = n(696451),
    lB = n(283607);
let lV = "heading-lg/bold";
function lz(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: a } = (0, j.Ay)(),
        o = null != n,
        d = (0, s.bG)([lF.Ay], () => (null != n ? (lF.Ay.getMember(n, l.id)?.nick ?? null) : null)),
        u = (0, s.bG)([lh.default], () => lh.default.getCurrentUser()?.globalName ?? null),
        c = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(null).pendingGlobalName),
        g = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(n ?? null).pendingNickname),
        {
            userDisplayNameStyles: m,
            guildDisplayNameStyles: p,
            pendingDisplayNameStyles: f,
        } = (0, J.B0)(l, n ?? void 0),
        x = o ? p : m,
        h = void 0 !== f,
        v = null === f || (!h && null == x),
        A = o && null != m,
        b = (0, J.lw)({ pendingValue: f, userValue: m, guildValue: p, guildId: n ?? void 0 }),
        I = (e) => (null == e || "" === e ? void 0 : e),
        C = void 0 !== c ? c : u,
        N = o ? (I(void 0 !== g ? g : d) ?? I(C) ?? l.username) : (I(C) ?? l.username),
        y =
            null != b && (h ? null != f : null != x)
                ? {
                      onClick: () => (0, lE.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: A ? "reset" : "remove",
                      accessibleLabel: eD.intl.string(A ? eD.t.en3ogK : eD.t["Wqmi/h"]),
                  }
                : void 0,
        E = t.useCallback(() => {
            (0, lU.L)({ analyticsLocations: a, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [a, n]),
        P = (0, i.jsx)("div", {
            "aria-hidden": !0,
            className: lB.M,
            children:
                null != b
                    ? (0, i.jsx)(eE.E, {
                          variant: lV,
                          children: (0, i.jsx)(lM.A, {
                              userName: N,
                              displayNameStyles: b,
                              effectDisplayType: lw.G.ANIMATED,
                              textClassName: lB.W,
                              shouldWrap: !1,
                              loop: !0,
                              inProfile: !0,
                          }),
                      })
                    : (0, i.jsx)(eE.E, { variant: lV, className: lB.W, children: N }),
        });
    return v
        ? (0, i.jsx)(lP.kL, {
              variant: "bar",
              onClick: E,
              accessibleLabel: eD.intl.string(eD.t.XJ4oOO),
              disabled: r,
              dimContent: v && A,
              children: P,
          })
        : (0, i.jsx)(lP.NW, {
              variant: "bar",
              onClick: E,
              accessibleLabel: eD.intl.string(eD.t.XJ4oOO),
              deleteButtonConfig: y,
              disabled: r,
              children: P,
          });
}
var lW = n(473219),
    lH = n(942426),
    lK = n(617061),
    lq = n(71393),
    lX = n(466681),
    lY = n(423393);
function l$(e) {
    let { effect: l } = e,
        n = (0, lH.A)(l?.skuId);
    return (0, i.jsxs)("div", {
        className: lX.B0,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("img", { src: lY.A, alt: "", className: lX.AH }),
            null != n && (0, i.jsx)("img", { src: n.thumbnailPreviewSrc, alt: "", className: lX.H2 }),
        ],
    });
}
function lJ(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: a } = (0, j.Ay)(),
        o = null != n,
        d = (0, s.bG)([lq.A], () => (null != n ? lq.A.getGuild(n) : null)),
        u = (0, J.N2)({ user: l }),
        c = (0, J.N2)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileEffect: g } = (0, J.nZ)(n ?? void 0),
        m = void 0 !== g,
        p = null === g || (!m && null == c),
        f = o && null != u,
        x = (0, J.lw)({ pendingValue: g, userValue: u, guildValue: c, guildId: n ?? void 0 }),
        h =
            null != x && (m ? null != g : null != c)
                ? {
                      onClick: () => (0, lE.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: f ? "reset" : "remove",
                      accessibleLabel: eD.intl.string(f ? eD.t["SQy/Po"] : eD.t.uMuafO),
                  }
                : void 0,
        v = t.useCallback(() => {
            (0, lK.W)({
                analyticsLocations: a,
                guild: d ?? void 0,
                initialSelectedEffect: x ?? void 0,
                stackingBehavior: "stack",
            });
        }, [a, d, x]),
        A = (0, i.jsx)(l$, { effect: x });
    return p
        ? (0, i.jsx)(lP.kL, {
              variant: "full-height-bar",
              onClick: v,
              accessibleLabel: eD.intl.string(eD.t["/dRfCf"]),
              disabled: r,
              dimContent: p && f,
              children: A,
          })
        : (0, i.jsx)(lP.NW, {
              variant: "full-height-bar",
              onClick: v,
              accessibleLabel: eD.intl.string(eD.t["/dRfCf"]),
              deleteButtonConfig: h,
              disabled: r,
              children: A,
          });
}
var lZ = n(33851),
    lQ = n.n(lZ),
    l0 = n(458217),
    l1 = n(298387);
function l7(e) {
    let { color: l, suggestedColors: n, disabled: r, ariaLabel: s, onSelect: o } = e,
        d = t.useRef(null),
        u = (0, lb.Hl)(l),
        c = (0, lb.bJ)(l, 0xffffff) < l0.Tr.NonText;
    return (0, i.jsx)(lC.Y, {
        targetElementRef: d,
        renderPopout: (e) => (0, i.jsx)(lN.VN, { ...e, value: l, onChange: o, suggestedColors: n, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: l, ...n } = e;
            return (0, i.jsx)(ey.D, {
                ...n,
                innerRef: d,
                className: l1.Dh,
                onClick: r ? void 0 : l,
                "aria-label": s,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, i.jsx)("div", { className: a()(l1.Hy, { [l1.rY]: c }), style: { backgroundColor: u } }),
            });
        },
    });
}
function l8(e) {
    let {
            primaryColor: l,
            secondaryColor: n,
            onSelectPrimaryColor: t,
            onSelectSecondaryColor: r,
            suggestedColors: a,
            disabled: s = !1,
        } = e,
        o = (0, lb.Hl)(l),
        d = (0, lb.Hl)(n),
        u = `linear-gradient(to bottom, ${o}, ${d})`,
        c = eD.intl.formatToPlainString(eD.t.FquTfm, { colorLabel: o }),
        g = eD.intl.formatToPlainString(eD.t.xOnm4z, { colorLabel: d });
    return (0, i.jsx)(lP.Yt, {
        variant: "square",
        disabled: s,
        children: (0, i.jsxs)("div", {
            className: l1.D7,
            style: { background: u },
            children: [
                (0, i.jsx)(l7, { color: l, suggestedColors: a, ariaLabel: c, onSelect: t, disabled: s }),
                (0, i.jsx)(l7, { color: n, suggestedColors: a, ariaLabel: g, onSelect: r, disabled: s }),
            ],
        }),
    });
}
function l9(e) {
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
        m = (0, lI.r)(lm.A.unsafe_rawColors.PRIMARY_530).hex(),
        p = null != u ? u : l.getAvatarURL(n ?? void 0, 80),
        f = (0, ly.rh)(p, m, !1),
        x = t.useCallback(
            (e) => {
                let l = lQ()(e, a?.themeColors);
                (0, lE.p)({ guildId: n ?? void 0, themeColors: l ? void 0 : e });
            },
            [a?.themeColors, n],
        );
    return null == c || null == g
        ? null
        : (0, i.jsx)(l8, {
              primaryColor: c,
              secondaryColor: g,
              onSelectPrimaryColor: (e) => {
                  e !== c && x([e, g]);
              },
              onSelectSecondaryColor: (e) => {
                  e !== g && x([c, e]);
              },
              suggestedColors: f,
              disabled: r,
          });
}
var l2 = n(315629),
    l3 = n(821609),
    l5 = n(835071),
    l6 = n(235684);
function l4() {
    let e = () => {
        (0, l5.K)({ stackingBehavior: "stack" });
    };
    return (0, i.jsxs)(l2.h, {
        color: "nitro-pink",
        className: l6.k,
        children: [
            (0, i.jsx)(eE.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eD.intl.format(eD.t.TmfgI2, { onClick: e }),
            }),
            (0, i.jsx)(l3.$, {
                variant: "expressive",
                size: "md",
                icon: lx.t,
                text: eD.intl.string(eD.t.pj0XBN),
                onClick: e,
                fullWidth: !0,
            }),
        ],
    });
}
n(667532);
var ne = n(111159),
    nl = n(783878),
    nn = n(548118),
    ni = n(711014),
    nt = n(308696);
let nr = "MAIN_PROFILE";
function na(e) {
    let { selectedGuildId: l, onChange: n, loading: r } = e,
        a = (0, s.bG)([ni.Ay], () => ni.Ay.getFlattenedGuildIds()),
        o = (0, s.bG)([lq.A], () => lq.A.getGuilds()),
        d = t.useMemo(() => {
            let e = a
                .map((e) => {
                    let l = o[e];
                    return null == l
                        ? null
                        : {
                              id: l.id,
                              label: l.name,
                              value: l.id,
                              leading: (0, i.jsx)(nn.Ay, {
                                  className: nt.$,
                                  guild: l,
                                  size: nn.Ay.Sizes.SMALLER,
                                  active: !0,
                              }),
                          };
                })
                .filter(X.Vq);
            return (
                e.unshift({
                    id: nr,
                    label: eD.intl.string(eD.t["2p07FR"]),
                    value: nr,
                    leading: (0, i.jsx)(ne.p, { size: "sm", color: lm.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                e
            );
        }, [a, o]),
        u = t.useCallback(
            (e) => {
                n(e === nr ? null : e);
            },
            [n],
        );
    return (0, i.jsx)(nl.Z, {
        label: eD.intl.string(eD.t.rki38K),
        hideLabel: !0,
        selectionMode: "single",
        onSelectionChange: u,
        value: l ?? nr,
        options: d,
        loading: r,
    });
}
var ns = n(809467);
let no = "profile-modal-editing-panel",
    nd = "profile-modal-editing-panel-heading";
function nu(e) {
    let { onClick: l, className: n, innerRef: t } = e;
    return (0, i.jsx)(ey.D, {
        innerRef: t,
        "aria-label": eD.intl.string(eD.t.N8XQDE),
        "aria-expanded": !1,
        "aria-controls": no,
        className: a()(ns.eg, n),
        onClick: l,
        focusProps: { offset: { right: 6 } },
        children: (0, i.jsx)(lg.N, { size: "sm", color: lm.A.colors.ICON_STRONG }),
    });
}
function nc(e) {
    let { onClick: l, className: n, buttonRef: t } = e;
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(e3.K, {
            buttonRef: t,
            "aria-label": eD.intl.string(eD.t.N8XQDE),
            "aria-expanded": !1,
            "aria-controls": no,
            icon: lg.N,
            onClick: l,
            variant: "secondary",
            size: "sm",
        }),
    });
}
function ng(e) {
    let { onClick: l, innerRef: n } = e;
    return (0, i.jsxs)(ey.D, {
        innerRef: n,
        className: ns.cS,
        "aria-label": eD.intl.string(eD.t.X6NklS),
        onClick: l,
        "aria-controls": no,
        "aria-expanded": !0,
        children: [
            (0, i.jsx)(lp._, { size: "md", color: "currentColor" }),
            (0, i.jsx)(lp._, { size: "md", color: "currentColor" }),
        ],
    });
}
function nm(e) {
    let { heading: l, children: n, disabled: t = !1, showNitroIcon: r = !1 } = e;
    return (0, i.jsxs)("div", {
        className: ns.Os,
        children: [
            (0, i.jsxs)("div", {
                className: ns.AM,
                children: [
                    (0, i.jsx)(lf.D, {
                        className: ns.i_,
                        variant: "text-sm/medium",
                        color: t ? "text-muted" : "text-strong",
                        children: l,
                    }),
                    r &&
                        (0, i.jsx)(e4.m, {
                            text: eD.intl.string(eD.t.BNg1ir),
                            shouldShow: !t,
                            ariaHidden: !0,
                            children: (0, i.jsx)(lx.t, {
                                className: ns.l3,
                                size: "xs",
                                color: t ? lm.A.colors.ICON_MUTED : lm.A.colors.ICON_STRONG,
                                "aria-hidden": !0,
                            }),
                        }),
                ],
            }),
            n,
        ],
    });
}
function np(e) {
    let {
            selectedGuildId: l,
            onSelectGuildId: n,
            isLoading: t = !1,
            onClose: r,
            className: o,
            collapseButtonRef: d,
        } = e,
        c = e1(n),
        g = (0, s.bG)([lh.default], () => lh.default.getCurrentUser());
    if (null == g) return null;
    let f = null != l,
        x = lv.Ay.canUsePremiumProfileCustomization(g);
    return (0, i.jsxs)("aside", {
        id: no,
        "aria-labelledby": nd,
        className: a()(ns.nd, o),
        "aria-busy": t,
        children: [
            (0, i.jsx)(m.A, { children: (0, i.jsx)(p.H, { id: nd, children: eD.intl.string(eD.t["L+ch00"]) }) }),
            (0, i.jsxs)("div", {
                className: ns.wx,
                children: [
                    (0, i.jsx)(ng, { innerRef: d, onClick: r }),
                    (0, i.jsx)(na, { selectedGuildId: l ?? null, onChange: c, loading: t }),
                ],
            }),
            (0, i.jsx)(p.F, {
                children: (0, i.jsxs)(u.d_, {
                    className: ns.XG,
                    children: [
                        (0, i.jsx)(nm, {
                            heading: eD.intl.string(eD.t.x5CoXR),
                            disabled: t,
                            children: (0, i.jsx)(lW.A, { user: g, guildId: l, disabled: t || (f && !x) }),
                        }),
                        (0, i.jsxs)(nm, {
                            heading: eD.intl.string(eD.t["50Nwpc"]),
                            disabled: t,
                            children: [
                                (0, i.jsx)(lA.A, { user: g, guildId: l, disabled: t || (f && !x) }),
                                (0, i.jsx)(lj.A, { user: g, guildId: l, disabled: t || (f && !x) }),
                            ],
                        }),
                        (0, i.jsx)(nm, {
                            heading: eD.intl.string(eD.t.NEzEws),
                            disabled: t,
                            children: (0, i.jsx)(lz, { user: g, guildId: l, disabled: t || (f && !x) }),
                        }),
                        x &&
                            (0, i.jsxs)(nm, {
                                heading: eD.intl.string(eD.t.Zenogr),
                                disabled: t,
                                showNitroIcon: !0,
                                children: [
                                    (0, i.jsx)(l9, { user: g, guildId: l, disabled: t }),
                                    (0, i.jsx)(lG, { userId: g.id, guildId: l, disabled: t }),
                                ],
                            }),
                        (0, i.jsx)(nm, {
                            heading: eD.intl.string(eD.t.wR5wOo),
                            disabled: t,
                            children: (0, i.jsx)(lJ, { user: g, guildId: l, disabled: t || (f && !x) }),
                        }),
                        !x &&
                            (0, i.jsx)(nm, {
                                heading: eD.intl.string(eD.t["/X3fkf"]),
                                disabled: t,
                                children: (0, i.jsx)(lk, { user: g, disabled: t || f }),
                            }),
                    ],
                }),
            }),
            !x && (0, i.jsx)(l4, {}),
        ],
    });
}
var nf = n(982599),
    nx = n(756634),
    nh = n(83013),
    nv = n(77085);
function nA(e) {
    let { userId: l } = e,
        n = (0, ea.g)(),
        { trackUserProfileAction: t } = (0, w.NJ)();
    return (0, i.jsx)(nh.A, {
        heading: eD.intl.string(eD.t["mQKv+v"]),
        scrollTargetId: eK.bk.NOTE,
        children: (0, i.jsx)(nx.A, {
            userId: l,
            className: nv.N,
            autoFocus: n === eK.bk.NOTE,
            onUpdate: () => t({ action: "SET_NOTE" }),
        }),
    });
}
var nj = n(289873),
    nb = n(778599);
function nI(e) {
    let { isVisible: l, showLoadingSpinner: n, className: t } = e;
    return (0, i.jsx)("div", {
        className: a()(nb.f, l && nb.z, t),
        children: n && (0, i.jsx)(nj.y, { type: nj.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
    });
}
var nC = n(568602),
    nN = n(625494);
function ny(e) {
    let { children: l } = e,
        [n, r] = t.useState(!1);
    return (
        t.useEffect(() => {
            let e = () => {
                r(!0),
                    setTimeout(() => {
                        r(!1);
                    }, 300);
            };
            return (
                nN._.subscribe(eq.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    nN._.unsubscribe(eq.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, i.jsx)(nC.b, { isShaking: n, intensity: 1.4, children: l })
    );
}
var nE = n(515054),
    nP = n(873174),
    nk = n(933832),
    nR = n(972213),
    nO = n(97483),
    nS = n(765178),
    nT = n(775602),
    n_ = n(606758),
    nL = n(707238),
    nD = n(861173);
let nG = {
        [eK.jM.WIDGET_ADDED]: {
            message: eD.intl.string(eD.t.fFP1Uy),
            icon: (0, i.jsx)(nk.A, { size: "sm", color: lm.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_added",
        },
        [eK.jM.WIDGET_REMOVED]: {
            message: eD.intl.string(eD.t.zzsK7h),
            icon: (0, i.jsx)(nk.A, { size: "sm", color: lm.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_removed",
        },
        [eK.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eD.intl.string(eD.t["84MExs"]),
            icon: (0, i.jsx)(nR.d, { size: "sm", color: lm.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_save_generic_failure",
            type: nO.Ck.FAILURE,
        },
        [eK.jM.SOMETHING_WENT_WRONG]: {
            message: eD.intl.string(eD.t.F8FvUy),
            icon: (0, i.jsx)(nR.d, { size: "sm", color: lm.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_something_went_wrong",
            type: nO.Ck.FAILURE,
        },
    },
    nw = (e) => {
        let { message: l, icon: n, type: t } = e;
        return (0, i.jsxs)("div", {
            className: a()(nD.oR, nL.oR),
            "data-type": t,
            children: [
                (0, i.jsx)("div", { className: nL.RC, children: n }),
                (0, i.jsx)(eE.E, { color: "text-strong", variant: "text-sm/semibold", children: l }),
            ],
        });
    },
    nM = (e) => {
        let { className: l } = e,
            n = (0, n_.fu)(),
            r = (0, s.bG)([nT.A], () => nT.A.useReducedMotion),
            [o, u] = t.useState(!1),
            [c, g] = t.useState(null);
        t.useEffect(() => {
            null !== n ? (u(!0), g(nG[n]), nS.O.announce(nG[n].message)) : u(!1);
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
            t.useEffect(() => () => (0, n_.XA)(null), []),
            t.useEffect(() => {
                if (o) {
                    let e = setTimeout(() => {
                        (0, n_.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [o]),
            (0, i.jsx)(i.Fragment, {
                children: m(
                    (e, n) =>
                        n &&
                        null !== c &&
                        (0, i.jsx)(nP.animated.div, {
                            className: a()(l, nL.Jt),
                            style: e,
                            children: (0, i.jsx)(nw, { ...c }),
                        }),
                ),
            })
        );
    };
var nU = n(297413),
    nF = n(534400),
    nB = n(878555),
    nV = n(193885),
    nz = n(621466),
    nW = n(219869),
    nH = n(292666),
    nK = n(539396);
function nq(e, l) {
    let [n, i] = t.useState("idle"),
        [r, a] = t.useState(e),
        o = "editing" === n,
        d = (0, s.bG)([nT.A], () => nT.A.useReducedMotion),
        u = t.useRef(null),
        c = t.useRef(null),
        g = t.useRef(null),
        m = t.useRef(!1),
        p = t.useId(),
        f = t.useCallback(() => {
            a(e), i("editing");
        }, [e]),
        x = t.useCallback(() => {
            l(r), i("done");
        }, [r, l]),
        h = t.useCallback(() => {
            i("done");
        }, []);
    t.useEffect(() => {
        "done" === n && (m.current && u.current?.focus({ preventScroll: !0 }), (m.current = !1));
    }, [n]),
        t.useEffect(() => {
            o &&
                null != c.current &&
                (g.current?.scrollIntoView({ block: "nearest", behavior: d ? "auto" : "smooth" }),
                c.current.focus({ preventScroll: !0 }),
                c.current.setSelectionRange(c.current.value.length, c.current.value.length));
        }, [o, d]);
    let v = t.useCallback(
            (e) => {
                !o || (null != g.current && (0, nz.vq)(e.relatedTarget) && g.current.contains(e.relatedTarget)) || x();
            },
            [o, x],
        ),
        A = t.useCallback(
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
        inputId: p,
        handleStartEditing: f,
        handleCommit: x,
        handleCancel: h,
        previewProps: { isEditing: o, editButtonRef: u, onStartEditing: f, wrapperRef: g, onBlur: v, onKeyDown: A },
        inputProps: {
            inputId: p,
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
function nX(e) {
    let { text: l, htmlFor: n } = e;
    return (0, i.jsx)(m.A, { tag: "label", htmlFor: n, children: l });
}
function nY(e) {
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
        p = t.useCallback(
            (e) => {
                "Enter" === e.key
                    ? (e.preventDefault(), o())
                    : "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), d());
            },
            [o, d],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(nX, { text: r, htmlFor: l }),
            (0, i.jsx)(nH.k, {
                id: l,
                inputRef: n,
                value: a,
                onChange: s,
                onBlur: u,
                onKeyDown: p,
                maxLength: c,
                placeholder: g,
                trailing: m,
            }),
        ],
    });
}
function n$(e) {
    let { tooltip: l, ...n } = e,
        t = (0, i.jsx)("div", {
            className: nK.L7,
            children: (0, i.jsx)(nW.T, { ...n, size: "sm", variant: "input-accessory" }),
        });
    return null == l ? t : (0, i.jsx)(e4.m, { text: l, ariaHidden: !0, children: t });
}
function nJ(e) {
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
            wrapperRef: p,
            onBlur: f,
            onKeyDown: x,
        } = e,
        h = t.useRef(null),
        v = t.useId(),
        A = null == n,
        j = (0, i.jsxs)("div", {
            ref: h,
            className: nK.LL,
            onClick: u,
            children: [
                A
                    ? (0, i.jsx)(eE.E, {
                          id: v,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: nK.qf,
                          children: r,
                      })
                    : n,
                (0, i.jsx)(ey.D, {
                    innerRef: o,
                    "aria-label": d,
                    "aria-describedby": A ? v : void 0,
                    "aria-expanded": !1,
                    onClick: (e) => {
                        e.stopPropagation(), u();
                    },
                    focusProps: { ringTarget: h },
                }),
                null != g && (0, i.jsx)("div", { className: nK.lD, children: (0, i.jsx)(n$, { ...g }) }),
            ],
        });
    return (0, i.jsx)("div", {
        ref: p,
        className: a()(nK.kL, { [nK.oE]: "compact" === c }, m),
        onBlur: f,
        onKeyDown: x,
        children: (0, i.jsx)(
            "div",
            { className: nK.qG, children: l ? s : (0, i.jsx)("div", { className: nK.VH, children: j }) },
            l ? "editing" : "preview",
        ),
    });
}
var nZ = n(35783);
function nQ(e) {
    let l,
        n,
        r,
        a,
        o,
        d,
        u,
        c,
        g,
        { user: m, displayProfile: p } = e,
        { analyticsLocations: f } = (0, j.Ay)(),
        x = p?.guildId != null,
        h = p?.guildId ?? void 0,
        v = lv.Ay.canUsePremiumProfileCustomization(m),
        {
            value: A,
            previewValue: b,
            onCommit: I,
        } = ((l = p?.guildId ?? null),
        (n = p?.guildId != null),
        (r = (0, s.bG)([lh.default], () => lh.default.getCurrentUser()?.globalName ?? null)),
        (a = (0, s.bG)([lF.Ay], () => (null != l ? (lF.Ay.getMember(l, m.id)?.nick ?? null) : null))),
        (o = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(l).pendingNickname)),
        (u = n ? (d ?? a ?? "") : (o ?? r ?? "")),
        (c = (e) => (null == e || "" === e ? void 0 : e)),
        (g = void 0 !== o ? o : r),
        {
            value: u,
            previewValue: n ? (c(void 0 !== d ? d : a) ?? c(r)) : (c(g) ?? m.username),
            onCommit: t.useCallback(
                (e) => {
                    n
                        ? (0, lE.p)({ nickname: e.trim(), guildId: p?.guildId ?? void 0 })
                        : (0, lE.p)({ globalName: e.trim() });
                },
                [n, p?.guildId],
            ),
        }),
        { isEditing: C, previewProps: N, inputProps: y, handleCommit: E } = nq(A, I),
        P = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(h ?? null).pendingDisplayNameStyles),
        k = eD.intl.string(x ? eD.t.mq6Cg9 : eD.t.XuZU7A),
        R = x ? (m.globalName ?? m.username) : m.username,
        O = eD.intl.string(x ? eD.t["g7OSZ/"] : eD.t.kyfzzc),
        S = t.useRef(null),
        T = t.useCallback(
            (e) => {
                e.stopPropagation(),
                    C && E(),
                    (0, lU.L)({ analyticsLocations: f, guildId: h, stackingBehavior: "stack", returnRef: S });
            },
            [C, E, f, h],
        ),
        _ = {
            icon: nV.V,
            tooltip: eD.intl.string(eD.t.lqKKI2),
            "aria-label": eD.intl.string(eD.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: T,
            buttonRef: S,
        },
        L = v ? _ : void 0,
        D =
            null != b
                ? (0, i.jsx)(nB.c$, {
                      user: m,
                      guildId: h,
                      displayName: b,
                      size: "lg",
                      pendingDisplayNameStyles: P,
                      className: nZ.d,
                  })
                : null;
    return (0, i.jsx)(nJ, {
        ...N,
        preview: D,
        placeholder: R,
        editButtonAriaLabel: O,
        trailing: L,
        input: (0, i.jsx)(nY, { ...y, label: k, maxLength: eq.zzC, placeholder: R, trailing: L }),
    });
}
var n0 = n(469432);
function n1(e) {
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
            onCommit: t.useCallback(
                (e) => {
                    (0, lE.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        { previewProps: p, inputProps: f, isEditing: x } = nq(c, m),
        h = null != g && g.length > 0;
    return (0, i.jsx)(nJ, {
        ...p,
        variant: "compact",
        className: a()(n0.k, x && n0.J),
        preview: h ? (0, i.jsx)(nB.n2, { pronouns: g }) : null,
        placeholder: eD.intl.string(eD.t["76Aqhl"]),
        editButtonAriaLabel: eD.intl.string(eD.t.h6VAO7),
        input: (0, i.jsx)(nY, {
            ...f,
            label: eD.intl.string(eD.t["rniRE+"]),
            placeholder: eD.intl.string(eD.t["76Aqhl"]),
            maxLength: eq.VE5,
        }),
    });
}
var n7 = n(874644);
function n8(e) {
    let { user: l, displayProfile: n, nickname: t, primaryGuild: r, trailing: a, onClose: s, allowEditing: o } = e;
    if (!o)
        return (0, i.jsx)(nB.Ay, {
            user: l,
            guildId: n?.guildId ?? void 0,
            displayName: t,
            displayNameSize: "lg",
            pronouns: n?.pronouns,
            primaryGuild: r,
            trailing: a,
            onClose: s,
        });
    let d = l.isProvisional
        ? null
        : (0, i.jsx)(nU.A, {
              user: l,
              forceUsername: !0,
              className: n7.a1,
              usernameClass: n7.eb,
              discriminatorClass: n7.sw,
              hideBotTag: !0,
          });
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(nQ, { displayProfile: n, user: l }),
            (0, i.jsxs)("div", {
                className: `${n7.AK} ${n7.j6}`,
                children: [
                    d,
                    (0, i.jsx)(nB.Ce, {}),
                    (0, i.jsx)(n1, { displayProfile: n }),
                    (0, i.jsx)(nF.Ay, {
                        primaryGuild: r,
                        userId: l.id,
                        onClose: s,
                        containerClassName: n7.L4,
                        className: n7.Mp,
                    }),
                    a,
                ],
            }),
        ],
    });
}
n(321073);
var n9 = n(97808),
    n2 = n(980707),
    n3 = n(477782),
    n5 = n(22231),
    n6 = n(601255),
    n4 = n(562819),
    ie = n(19575),
    il = n(106106),
    ii = n(338165);
let it = ie.Ay.getEnableHardwareAcceleration() ? n9.Js : n9.eu;
function ir(e) {
    let { onMenuClose: l, items: n, ...t } = e;
    return (0, i.jsx)(n2.W, {
        ...t,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eD.intl.string(eD.t.YAgq3W),
        children: (0, i.jsx)(n3.rX, { children: n }),
    });
}
function ia(e) {
    let { user: l, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, eo.V)(e),
        [d, u] = t.useState(!1),
        c = t.useRef(null),
        g = t.useCallback(() => u(!1), []),
        m = (function (e) {
            let { user: l, guildId: n, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, j.Ay)(),
                d = null != n,
                u = (0, s.bG)([lF.Ay], () => (null != n ? lF.Ay.getMember(n, l.id) : null)),
                c = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(n ?? void 0).pendingAvatar),
                g = d ? u?.avatar : l.avatar,
                m = (0, J.z5)(c, g),
                p = d && null != l.avatar,
                f = lv.Ay.canUsePremiumProfileCustomization(l),
                x = f || null == n,
                h = f || null == n,
                v = (0, s.bG)([lq.A], () => (null != n ? lq.A.getGuild(n) : null)),
                A = (0, J.a4)({ user: l }),
                b = (0, J.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: I } = (0, J.CP)(n ?? void 0),
                C = void 0 !== I,
                N = null != (0, n6.A)(C ? I : b) && (C ? null != I : null != b),
                y = d && null != A,
                E = t.useCallback(() => {
                    r(),
                        (0, lO.XD)({
                            uploadType: lS.HL.AVATAR,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                P = t.useCallback(() => {
                    r(), (0, n4.L)({ analyticsLocations: o, guild: v ?? void 0, stackingBehavior: "stack" });
                }, [r, o, v]),
                k = t.useCallback(() => {
                    r(),
                        (0, lO.rM)(null, g, (e) => (0, lE.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, J.WU)(p ? "reset" : "remove");
                }, [r, n, g, p]),
                R = t.useCallback(() => {
                    r(), (0, lE.p)({ guildId: n ?? void 0, avatarDecoration: null });
                }, [r, n]);
            return t.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, i.jsx)(
                                n3.Dr,
                                { id: "change-avatar", label: eD.intl.string(eD.t["4OynCD"]), action: E },
                                "change-avatar",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, i.jsx)(
                                n3.Dr,
                                { id: "change-decoration", label: eD.intl.string(eD.t.HykynS), action: P },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        m &&
                        e.push(
                            p
                                ? (0, i.jsx)(
                                      n3.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eD.intl.string(eD.t.TDjKDm),
                                          action: k,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, i.jsx)(
                                      n3.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eD.intl.string(eD.t.twB3fz),
                                          action: k,
                                      },
                                      "remove-avatar",
                                  ),
                        ),
                    h &&
                        N &&
                        e.push(
                            y
                                ? (0, i.jsx)(
                                      n3.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eD.intl.string(eD.t["2u5yu0"]),
                                          action: R,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, i.jsx)(
                                      n3.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eD.intl.string(eD.t["9rx5GO"]),
                                          action: R,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [p, x, h, y, m, N, E, P, k, R]);
        })({ user: l, guildId: n, onClose: g });
    return 0 === m.length
        ? (0, i.jsx)(eo.A, { ...e })
        : (0, i.jsxs)("div", {
              ...o,
              className: a()(il.my, il.vk, ii.kL, { [ii.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, i.jsx)(it, { ...r, imageClassName: a()(il.Lw, ii.HU) }),
                  (0, i.jsx)(lC.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: lC.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: g,
                      renderPopout: (e) => (0, i.jsx)(ir, { ...e, items: m, onMenuClose: g }),
                      children: (e) =>
                          (0, i.jsx)("div", {
                              ref: c,
                              className: ii.r9,
                              children: (0, i.jsx)(e3.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: n5.R,
                                  "aria-label": eD.intl.string(eD.t.YAgq3W),
                                  onClick: (e) => {
                                      e.stopPropagation(), u((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var is = n(976726);
function io(e) {
    let { onMenuClose: l, items: n, ...t } = e;
    return (0, i.jsx)(n2.W, {
        ...t,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eD.intl.string(eD.t.FzU73A),
        children: (0, i.jsx)(n3.rX, { children: n }),
    });
}
function id(e) {
    let { user: l, guildId: n } = e,
        [r, o] = t.useState(!1),
        d = t.useRef(null),
        u = t.useCallback(() => o(!1), []),
        c = (function (e) {
            let { user: l, guildId: n, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, j.Ay)(),
                d = (0, J.N2)({ user: l, guildId: n ?? void 0 }),
                u = lv.Ay.canUsePremiumProfileCustomization(l),
                c = u || null == n,
                g = null != n,
                { pendingBanner: m, pendingProfileEffect: p } = (0, s.bG)([Q.A], () =>
                    Q.A.getPendingChanges(n ?? void 0),
                ),
                f = (0, s.bG)([M.A], () =>
                    null != n ? M.A.getGuildMemberProfile(l.id, n)?.banner : M.A.getUserProfile(l.id)?.banner,
                ),
                x = (0, s.bG)([lh.default], () => lh.default.getCurrentUser()?.banner != null),
                h = (0, s.bG)([M.A], () => M.A.getUserProfile(l.id)?.profileEffect != null),
                v = (0, J.Ac)(m, f),
                A = g && x,
                b = g && h,
                I = void 0 === p ? null != d : null != p,
                C = t.useCallback(() => {
                    r(),
                        (0, lO.XD)({
                            uploadType: lS.HL.BANNER,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                N = t.useCallback(() => {
                    r(),
                        (0, lK.W)({
                            analyticsLocations: o,
                            guild: null != n ? (lq.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, d]),
                y = t.useCallback(() => {
                    r(), (0, lO.rM)(null, f, (e) => (0, lE.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, f]),
                E = t.useCallback(() => {
                    r(), (0, lE.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]);
            return t.useMemo(() => {
                let e = [];
                return (
                    u &&
                        e.push(
                            (0, i.jsx)(
                                n3.Dr,
                                { id: "change-banner", label: eD.intl.string(eD.t.N0bC3P), action: C },
                                "change-banner",
                            ),
                        ),
                    c &&
                        e.push(
                            (0, i.jsx)(
                                n3.Dr,
                                { id: "change-effect", label: eD.intl.string(eD.t["/6nv6N"]), action: N },
                                "change-effect",
                            ),
                        ),
                    u &&
                        v &&
                        e.push(
                            A
                                ? (0, i.jsx)(
                                      n3.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eD.intl.string(eD.t.jHlJNS),
                                          action: y,
                                      },
                                      "reset-banner",
                                  )
                                : (0, i.jsx)(
                                      n3.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eD.intl.string(eD.t.tT9n7D),
                                          action: y,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    c &&
                        I &&
                        e.push(
                            b
                                ? (0, i.jsx)(
                                      n3.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eD.intl.string(eD.t.Lb7lu9),
                                          action: E,
                                      },
                                      "reset-effect",
                                  )
                                : (0, i.jsx)(
                                      n3.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eD.intl.string(eD.t.zUOlT6),
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
        ? (0, i.jsx)(eu.A, { ...e })
        : (0, i.jsxs)("div", {
              className: a()(is.kL, { [is.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, i.jsx)(eu.A, { ...e, className: is.Pr }),
                  (0, i.jsx)(lC.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: lC.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: u,
                      renderPopout: (e) => (0, i.jsx)(io, { ...e, items: c, onMenuClose: u }),
                      children: (e) =>
                          (0, i.jsx)("div", {
                              ref: d,
                              className: is.r9,
                              children: (0, i.jsx)(e3.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: n5.R,
                                  "aria-label": eD.intl.string(eD.t.FzU73A),
                                  onClick: (e) => {
                                      e.stopPropagation(), o((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var iu = n(777480),
    ic = n(107563),
    ig = n(570287);
n(938796);
var im = n(913453),
    ip = n(667049),
    ix = n(837531),
    ih = n(186272),
    iv = n(645625);
let iA = (e) => e * (2 - e),
    ij = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } },
    ib = (e) => {
        let { type: l, anchor: n } = e;
        return "staple" !== l || "bottom" !== n;
    };
function iI(e) {
    let { displayProfile: l, pendingBanner: n } = e,
        r = (0, V.Nx)(),
        [a, s] = t.useState(void 0);
    if (
        (t.useEffect(() => {
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
        : (0, i.jsx)("div", { className: iv.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function iC(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: t } = e,
        r = void 0 !== n ? n : l?.profileEffect;
    return null == r ? null : (0, i.jsx)(b.A, { skuId: r.skuId, isHovering: t });
}
function iN(e) {
    let {
            user: l,
            currentUser: n,
            guildId: r,
            originGuildId: o,
            channelId: d,
            displayProfile: g,
            nickname: m,
            hasEntered: p,
            customStatusPrompt: f,
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
        T = t.useRef(null),
        { isHoveringOrFocusing: D } = (0, P.A)(T),
        [w, M] = t.useState(),
        U = t.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? M("compact-xs") : l <= 380 ? M("compact-sm") : M(void 0);
        }, []);
    (0, h.g)(T, U, [], { fireOnMount: !0 });
    let F = null != w ? ij[w] : void 0,
        B = t.useMemo(() => f ?? (0, k.A)(), [f]),
        { relationshipType: V, originApplicationId: $ } = (0, s.cf)([_.A], () => ({
            relationshipType: _.A.getRelationshipType(l.id),
            originApplicationId: _.A.getOriginApplicationId(l.id),
        })),
        J = (0, s.bG)([L.A], () => L.A.hidePersonalInformation),
        Z = (0, O.q)({ userId: l.id }),
        Q = (0, R.fi)(l.id),
        { appIdentities: el, connections: en } = (function (e) {
            let { filteredAppIdentities: l } = (0, q.A)(e),
                n = (0, Y.A)(e),
                i = H.A.useConfig({ location: "useVisibleUserProfileConnectionsAndAppIdentities" }),
                r = t.useMemo(() => new Set(i.enabled ? (l?.map((e) => e.application_id) ?? []) : []), [l, i.enabled]),
                a = (0, K.A)([...r]).filter(X.Vq);
            return {
                appIdentities: t.useMemo(
                    () =>
                        l
                            .map((e) => ({ identity: e, application: a.find((l) => l.id === e.application_id) }))
                            .filter((e) => {
                                let { application: l } = e;
                                return null != l;
                            }),
                    [l, a],
                ),
                connections: t.useMemo(
                    () =>
                        i.enabled
                            ? n.filter((e) => {
                                  let l = W.A.get(e.type);
                                  return l?.replacedBy == null || !r.has(l.replacedBy);
                              })
                            : n,
                    [n, r, i.enabled],
                ),
            };
        })(l.id),
        ei = (0, z.A)(l.id),
        et = C ? id : eu.A,
        er = C ? ia : eo.A;
    return (0, i.jsxs)("main", {
        className: a()(iv.profile, null != w && iv[w]),
        ref: T,
        "aria-busy": y,
        children: [
            (0, i.jsxs)("div", {
                className: iv.profileHeader,
                children: [
                    (0, i.jsx)(et, {
                        user: l,
                        displayProfile: g,
                        guildId: r,
                        themeType: ee.d.MODAL_V2,
                        specOverrides: F,
                        pendingBanner: j,
                    }),
                    (0, i.jsx)(ex.A, { userId: l.id, onClose: x, className: iv.interactionToast }),
                    (0, i.jsx)(er, {
                        user: l,
                        displayProfile: g,
                        guildId: r,
                        channelId: d,
                        themeType: ee.d.MODAL_V2,
                        specOverrides: F,
                        avatarDecorationOverride: v,
                        avatarOverride: A,
                    }),
                    (0, i.jsx)(eI.A, {
                        user: l,
                        guildId: r,
                        channelId: d,
                        themeType: ee.d.MODAL_V2,
                        hasEntered: p,
                        prompt: E ? B : null,
                    }),
                ],
            }),
            (0, i.jsxs)(u.Ip, {
                fade: !0,
                className: iv.profileBody,
                children: [
                    (0, i.jsx)(em.A, { userId: l.id }),
                    (0, i.jsx)(n8, {
                        user: l,
                        displayProfile: g,
                        nickname: m,
                        trailing: (0, i.jsx)(ed.A, { displayProfile: g, themeType: ee.d.MODAL_V2, onClose: x }),
                        onClose: x,
                        allowEditing: C,
                    }),
                    V === eq.eA$.PENDING_INCOMING &&
                        (0, i.jsx)(eb.A.Overlay, {
                            className: iv.profileOverlay,
                            children: (0, i.jsx)(ef.A, {
                                user: l,
                                applicationId: $,
                                guildId: g?.guildId ?? void 0,
                                channelId: d,
                                className: iv.profileBanner,
                            }),
                        }),
                    Q.map((e) => {
                        let { applicationId: n } = e;
                        return (0, i.jsx)(
                            eb.A.Overlay,
                            {
                                className: iv.profileOverlay,
                                children: (0, i.jsx)(ef.A, {
                                    user: l,
                                    guildId: g?.guildId ?? void 0,
                                    channelId: d,
                                    isGameRelationship: !0,
                                    applicationId: n,
                                    className: iv.profileBanner,
                                }),
                            },
                            n,
                        );
                    }),
                    l.isProvisional &&
                        (0, i.jsx)(eb.A.Overlay, {
                            className: iv.profileOverlay,
                            children: (0, i.jsx)(nh.A, {
                                heading: eD.intl.string(eD.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, i.jsx)(c.E, { size: "xs", color: "currentColor" }),
                                className: iv.profileBanner,
                                children: (0, i.jsx)(S.T, { userId: l.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, i.jsx)(ej.A, { user: l, className: iv.profileBanner }),
                    g?.private &&
                        (0, i.jsx)(eb.A.Overlay, {
                            className: iv.profileOverlay,
                            children: (0, i.jsx)(eA.A, { username: m }),
                        }),
                    (0, i.jsx)("div", {
                        className: iv.profileButtons,
                        children: (0, i.jsx)(e2, {
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
                    E && (0, i.jsx)(eg.A, { isPremiumUser: (0, G.ki)(n), onInteraction: x }),
                    !J && (0, i.jsx)(ec.E, { userBio: g?.bio, setLineClamp: !1 }),
                    Z.length > 0 &&
                        (0, i.jsx)(nh.A, {
                            heading: eD.intl.string(eD.t["Uv/eTx"]),
                            children: (0, i.jsx)(ep.A, { applicationIds: Z }),
                        }),
                    (0, i.jsx)(nh.A, {
                        heading: eD.intl.string(eD.t.a6XYD9),
                        children: (0, i.jsx)(eh.A, { userId: l.id, guildId: g?.guildId, tooltipDelay: eK.In }),
                    }),
                    g?.guildId != null &&
                        (0, i.jsx)(eC.A, {
                            userId: l.id,
                            guildId: g.guildId,
                            className: iv.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "currentColor",
                        }),
                    (en.length > 0 || el.length > 0) &&
                        (0, i.jsx)(nh.A, {
                            heading: eD.intl.string(eD.t["3fe7U5"]),
                            scrollTargetId: eK.bk.CONNECTIONS,
                            children: (0, i.jsx)(lc, {
                                applicationIdentities: el,
                                connections: en,
                                userId: l.id,
                                className: iv.profileAppConnections,
                            }),
                        }),
                    ei.length > 0 &&
                        (0, i.jsx)(nh.A, {
                            heading: eD.intl.string(eD.t.PHjkRE),
                            scrollTargetId: eK.bk.APPS,
                            children: (0, i.jsx)(eM, {
                                applicationRoleConnections: ei,
                                onClose: x,
                                className: iv.profileAppConnections,
                            }),
                        }),
                    (0, i.jsx)(nA, { userId: l.id }),
                ],
            }),
            (0, i.jsx)(iC, { displayProfile: g, profileEffectOverride: b, isHovering: D }),
            null != I && (0, i.jsx)(N.A, { frame: I, filterLayer: ib }),
        ],
    });
}
function iy(e) {
    let { user: l, displayProfile: n, pendingThemeColors: t, children: r } = e,
        {
            theme: a,
            primaryColor: s,
            secondaryColor: o,
        } = (0, B.A)({ user: l, displayProfile: n, pendingThemeColors: t }),
        { profileThemeStyle: d, profileThemeClassName: u } = (0, $.A)({
            theme: a,
            themeType: null,
            primaryColor: s,
            secondaryColor: o,
        });
    return (0, i.jsx)("div", { className: u, style: d, children: r });
}
function iE(e) {
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
            sourceAnalyticsLocations: L = [],
            themeContainerClassName: G,
        } = e,
        B = l.id === n.id,
        {
            guildId: V,
            pendingGuildId: z,
            isLoading: W,
            selectUserProfile: H,
        } = (function (e) {
            let { userId: l, initialGuildId: n } = e,
                [i, r] = t.useState(n),
                [a, s] = t.useState(n),
                o = t.useRef(a),
                d = t.useCallback((e) => {
                    r(e ?? void 0);
                }, []);
            return (
                t.useEffect(() => {
                    let e = !1;
                    return (
                        (0, et.A)(l, void 0, {
                            type: "modal",
                            guildId: i,
                            withMutualFriendsCount: !0,
                            withMutualFriends: !1,
                            withMutualGuilds: !0,
                        }).then(
                            () => {
                                e || (s(i), (o.current = i));
                            },
                            () => {
                                e || r(o.current);
                            },
                        ),
                        () => {
                            e = !0;
                        }
                    );
                }, [i, l]),
                { guildId: a, pendingGuildId: i, isLoading: i !== a, selectUserProfile: d }
            );
        })({ userId: l.id, initialGuildId: r }),
        K = t.useMemo(() => (null != V ? { [V]: [l.id] } : {}), [V, l.id]);
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
            let { user: l, guildId: n, allowEditingInModal: i } = e;
            return (0, s.cf)([Q.A], () => {
                if (!i) return ei;
                let {
                    pendingThemeColors: e,
                    pendingAvatarDecoration: t,
                    pendingAvatar: r,
                    pendingBanner: a,
                    pendingProfileEffect: s,
                } = Q.A.getPendingChanges(n);
                return {
                    pendingThemeColors: e,
                    avatarDecorationOverride:
                        void 0 === t
                            ? void 0
                            : (0, J.lw)({ userValue: l.avatarDecoration, pendingValue: t, guildId: n }),
                    avatarOverride: (0, Z.V7)({ userId: l.id, image: r, size: en }),
                    bannerOverride: a,
                    profileEffectOverride: s,
                };
            }, [l, n, i]);
        })({ user: l, allowEditingInModal: X, guildId: V }),
        {
            isExpanded: ed,
            isAnimating: eu,
            transition: ec,
            canShowExpand: eg,
            handleExpand: em,
            handleCollapse: ep,
            refs: { expandIconButtonRef: ef, expandTabButtonRef: ex, collapseButtonRef: eh },
        } = (function () {
            let [e, l] = t.useState(() => window.innerWidth > 928),
                [n, i] = t.useState(!1),
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: iA },
                    onRest: () => i(!1),
                }),
                a = (0, x.A)("(min-width: 929px) and (min-height: 550px)"),
                s = t.useRef(null),
                o = t.useRef(null),
                u = t.useRef(null),
                c = t.useRef(null),
                g = t.useCallback(() => {
                    (c.current = "collapse"), i(!0), l(!0);
                }, []),
                m = t.useCallback(() => {
                    (c.current = "expand"), i(!0), l(!1);
                }, []);
            return (
                t.useEffect(() => {
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
                    canShowExpand: !e && !n,
                    handleExpand: g,
                    handleCollapse: m,
                    refs: { expandIconButtonRef: s, expandTabButtonRef: o, collapseButtonRef: u },
                }
            );
        })(),
        eA = X && eg,
        { defaultWishlistId: ej } = (0, s.cf)([M.A], () => ({ defaultWishlistId: M.A.getFirstWishlistId(l.id) }));
    (0, T.fw)({ wishlistId: ej, userId: l.id });
    let eI = (0, es.fC)(),
        eC = W || null != eI.interactionType,
        eN = (function (e) {
            let l,
                n,
                i,
                { user: t, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, im.A)(t),
                d = o?.length,
                u =
                    ((l = (0, s.bG)([lh.default], () => lh.default.getCurrentUser())),
                    (n = (0, s.bG)([M.A], () => M.A.getUserProfile(t.id))),
                    (i =
                        n?.bio === "" &&
                        n?.pronouns === "" &&
                        n?.banner === void 0 &&
                        n?.accentColor === void 0 &&
                        n?.banner === void 0 &&
                        t.flags === t.publicFlags &&
                        (n?.badges == null || n?.badges?.length === 0)),
                    l?.id !== t.id && !i),
                c = (0, ip.A)(t.id),
                g = (0, ig.A)(t.id),
                m = [],
                p = t.id === r?.id,
                f = M.A.getFirstWishlistId(t.id),
                x = null != f,
                h = x ? M.A.getWishlistSettings(t.id, f) : null,
                v = (x ? ic.A.getWishlistItems(f) : []).length > 0,
                A = c.length > 0;
            (p || A) && m.push({ text: eD.intl.string(eD.t.laViwx), section: eK.RP.WIDGETS }),
                m.push({ text: eD.intl.string(eD.t.chq59f), section: eK.RP.ACTIVITY });
            let j = !1 === t.nsfwAllowed,
                b = _.A.isFriend(t.id),
                I = h?.visibility === iu.a.PUBLIC;
            return (
                (p || (!p && v && I && g && (!j || (j && b)))) &&
                    m.push({ text: eD.intl.string(eD.t["7lZ31J"]), section: eK.RP.WISHLIST }),
                t.id !== r?.id &&
                    u &&
                    (m.push({ text: (0, ix.A)(a), section: eK.RP.MUTUAL_FRIENDS }),
                    m.push({ text: (0, ih.A)(d), section: eK.RP.MUTUAL_GUILDS })),
                m
            );
        })({ user: l, currentUser: n }),
        { analyticsLocations: ey } = (0, j.Ay)([...L, A.A.USER_PROFILE_MODAL_V2]),
        eE = (0, w.pb)({
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
    let eO = D.Ay.useName(eP?.guildId, u, l),
        eS = (0, E.GV)(),
        eT = eD.intl.format(eD.t.KRe1Fk, { name: eO });
    return (0, i.jsx)(j.f5, {
        value: ey,
        children: (0, i.jsx)(w.of, {
            value: eE,
            openedAt: O,
            fetchStartedAt: eP?.fetchStartedAt,
            fetchEndedAt: eP?.fetchEndedAt,
            isLoaded: eP?.isLoaded,
            children: (0, i.jsx)(es.Hl, {
                value: eI,
                children: (0, i.jsx)(ea.N, {
                    value: P,
                    children: (0, i.jsxs)(g.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: iv.root,
                        transitionState: k,
                        "aria-labelledby": eS,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, i.jsx)(ny, {
                                children: (0, i.jsxs)("div", {
                                    className: a()(iv.layoutContainer, eR, {
                                        [iv.editingPanelEnabled]: X,
                                        [iv.editingPanelExpanded]: X && ed,
                                        [iv.isAnimating]: eu,
                                        [iv.hasPrivateBanner]: eP?.private === !0,
                                    }),
                                    children: [
                                        (0, i.jsxs)(iy, {
                                            user: l,
                                            displayProfile: eP,
                                            pendingThemeColors: Y,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: iv.modalHeaderButtons,
                                                    children: [
                                                        (0, i.jsx)(e6, { isCurrentUser: B, onClose: S }),
                                                        (0, i.jsx)(m.A, {
                                                            children: (0, i.jsx)(p.H, { id: eS, children: eT }),
                                                        }),
                                                        X &&
                                                            (!ed || eu) &&
                                                            (0, i.jsx)(nc, {
                                                                buttonRef: ef,
                                                                onClick: em,
                                                                className: iv.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eA &&
                                                    (0, i.jsx)(nu, {
                                                        innerRef: ex,
                                                        onClick: em,
                                                        className: iv.editingPanelExpandButtonDefault,
                                                    }),
                                            ],
                                        }),
                                        (0, i.jsxs)(p.F, {
                                            children: [
                                                X &&
                                                    ec((e, l) =>
                                                        l
                                                            ? (0, i.jsx)(np, {
                                                                  className: a()(iv.editingPanel, {
                                                                      [iv.isExpanded]: ed,
                                                                  }),
                                                                  selectedGuildId: z,
                                                                  onSelectGuildId: H,
                                                                  onClose: ep,
                                                                  collapseButtonRef: eh,
                                                                  isLoading: W,
                                                              })
                                                            : null,
                                                    ),
                                                (0, i.jsxs)(eb.A, {
                                                    className: a()(G, iv.profileContentContainer),
                                                    user: l,
                                                    displayProfile: eP,
                                                    themeType: ee.d.MODAL_V2,
                                                    pendingThemeColors: Y,
                                                    isPrivate: eP?.private === !0,
                                                    children: [
                                                        (0, i.jsx)(iI, { displayProfile: eP, pendingBanner: er }),
                                                        eP?.private === !0 && (0, i.jsx)(ev.A, {}),
                                                        (0, i.jsx)(nI, { isVisible: eC, showLoadingSpinner: W }),
                                                        (0, i.jsx)(nM, { className: iv.toast }),
                                                        (0, i.jsx)(iN, {
                                                            user: l,
                                                            currentUser: n,
                                                            guildId: V,
                                                            channelId: u,
                                                            displayProfile: eP,
                                                            nickname: eO,
                                                            originGuildId: o,
                                                            hasEntered: k === f.ip.ENTERED,
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
                                                        (0, i.jsx)(nE.A, {
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
                            (0, i.jsx)(nf.A, { userId: l.id, guildId: V, className: iv.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
