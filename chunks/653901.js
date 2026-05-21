n.d(l, { A: () => t7 });
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
    M = n(474090),
    G = n(183555),
    w = n(841595),
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
    eM = n(985176);
function eG(e) {
    let { applicationRoleConnection: l, locale: n, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, ek.VW)(l, n);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: eM.k_,
                children:
                    null != l.application.bot
                        ? (0, t.jsx)(eP.A, { user: new eO.A(l.application.bot), size: o._3.SIZE_16 })
                        : (0, t.jsx)(eN._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: eM.Hd,
                children: [
                    (0, t.jsxs)(ey.D, {
                        className: eM.OB,
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
                                className: eM.nk,
                                children: eL.intl.format(eL.t.zIT9YA, { applicationHook: () => l.application.name }),
                            }),
                        ],
                    }),
                    null != a && a.length > 0 ? (0, t.jsx)("div", { className: eM.yu, children: a }) : null,
                ],
            }),
        ],
    });
}
function ew(e) {
    let { applicationRoleConnections: l, className: n, onClose: i } = e,
        { trackUserProfileAction: r } = (0, G.NJ)(),
        o = (0, s.bG)([eD.default], () => eD.default.locale),
        d = (0, s.bG)([eT.A], () => eT.A.getGuildId());
    return 0 === l.length
        ? null
        : (0, t.jsx)("ul", {
              className: a()(eM.kL, n),
              children: l.map((e, l) =>
                  (0, t.jsx)(
                      "li",
                      {
                          className: eM.FI,
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
    e3 = n(307301),
    e2 = n(228366),
    e9 = n(95561),
    e5 = n(874490),
    e8 = n(370480),
    e6 = n(968309),
    e4 = n(174459),
    le = n(486020),
    ll = n(123917),
    ln = n(783419);
let lt = "User Profile Modal V2";
function li(e) {
    let l = W.A.get(e);
    (0, e6.A)({ platformType: l.type, location: lt }),
        e4.default.track(eZ.HAw.ACCOUNT_LINK_STEP, {
            previous_step: lt,
            current_step: "desktop oauth",
            platform_type: l.type,
        });
}
function lr() {
    e2.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: li, stackingBehavior: "stack" });
}
function la(e) {
    let { account: l, locale: n, userId: i } = e,
        r = l.metadata ?? {},
        a = (0, e8.An)(r[ln.pK.CREATED_AT], n),
        s = W.A.get((0, e5.ML)(l.type));
    return (0, t.jsx)(lo, {
        renderAccountName: () => {
            let e = s?.getPlatformUserUrl?.(l);
            return null == e
                ? (0, t.jsx)(e0.m, {
                      overflowOnly: !0,
                      text: l.name,
                      children: (0, t.jsx)(eE.E, { variant: "text-sm/normal", className: eM.GW, children: l.name }),
                  })
                : (0, t.jsx)(e1.Anchor, {
                      href: e,
                      className: eM.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${l.name}, ${eL.intl.string(eL.t.q5jLJB)}`
                              : `${l.name}, ${eL.intl.string(eL.t.q5jLJB)}`,
                      onClick: (n) => {
                          (0, e9.zV)(eZ.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: i }),
                              (0, ll.h)({ href: e, trusted: s?.type !== eZ.fg2.DOMAIN }, n);
                      },
                      children: (0, t.jsxs)("div", {
                          className: eM.vi,
                          children: [
                              (0, t.jsx)(e0.m, {
                                  overflowOnly: !0,
                                  text: l.name,
                                  children: (0, t.jsx)(eE.E, {
                                      variant: "text-sm/normal",
                                      className: eM.GW,
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
function ls(e) {
    let { identityWithApplication: l } = e,
        { identity: n, application: i } = l;
    if (null == n.profile || null == n.profile.username || null == i) return null;
    let r = le.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(lo, {
        renderAccountName: () =>
            (0, t.jsx)(e0.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, t.jsx)(eE.E, {
                    variant: "text-sm/normal",
                    className: eM.GW,
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
function lo(e) {
    let {
        renderAccountName: l,
        renderMetadata: n,
        platformName: i,
        platformIcon: r,
        createdAtDate: s,
        applyIconBorderRadius: o = !1,
    } = e;
    return (0, t.jsxs)("li", {
        className: eM.FI,
        children: [
            (0, t.jsx)(e0.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, t.jsx)("div", {
                    className: eM.k_,
                    children: (0, t.jsx)("img", {
                        alt: eL.intl.formatToPlainString(eL.t.rtm15P, { name: i }),
                        className: a()(eM.tV, o ? eM.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, t.jsxs)("div", {
                className: eM.Hd,
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
                    (0, t.jsx)("div", { className: eM.yu, children: n() }),
                ],
            }),
        ],
    });
}
function ld(e) {
    let { connections: l, applicationIdentities: n, userId: i, allowEditing: r, className: o } = e,
        d = (0, s.bG)([eD.default], () => eD.default.locale);
    if (!r && 0 === l.length && 0 === n.length) return null;
    let u = l.length > 0 || n.length > 0;
    return (0, t.jsxs)("div", {
        className: a()(eM.kL, o),
        children: [
            u &&
                (0, t.jsxs)("ul", {
                    className: eM.V,
                    children: [
                        l.map((e) => (0, t.jsx)(la, { account: e, userId: i, locale: d }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, t.jsx)(ls, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, t.jsxs)(ey.D, {
                    className: eM.qG,
                    onClick: lr,
                    children: [
                        (0, t.jsx)(e3.j, { size: "sm", color: "currentColor" }),
                        (0, t.jsx)(eE.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: eL.intl.string(eL.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var lu = n(193885),
    lc = n(661531),
    lg = n(408278),
    lm = n(890377),
    lf = n(789645),
    lp = n(534514),
    lx = n(821609),
    lh = n(403581),
    lv = n(194261),
    lA = n(517461),
    lj = n(835071),
    lb = n(287809),
    lI = n(428262),
    lC = n(487233),
    lN = n(120386),
    ly = n(317097),
    lE = n(602853),
    lP = n(922016),
    lk = n(508274),
    lR = n(654107),
    lS = n(84540),
    lD = n(930349);
function lO(e) {
    let { user: l, disabled: n = !1 } = e,
        r = i.useRef(null),
        a = (0, lE.r)(lc.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, lR.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([Q.A, w.A], () => ({
            pendingAccentColor: Q.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: w.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, ly.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, lS.p)({ accentColor: e }), []);
    return (0, t.jsx)(lP.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(lk.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(lD.V, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                accessibleLabel: eL.intl.string(eL.t["/X3fkf"]),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, t.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, ly.Hl)(c) } }),
            }),
    });
}
var lT = n(450373),
    l_ = n(252732),
    lL = n(339984),
    lM = n(111242);
function lG(e) {
    let { backgroundColor: l } = e;
    return (0, t.jsx)("div", { className: lM.o, style: { backgroundColor: l } });
}
function lw(e) {
    let { src: l } = e;
    return (0, t.jsx)("img", { src: l, alt: "", className: lM._ });
}
function lU(e) {
    let { displayProfile: l, pendingBanner: n, shouldAnimate: i } = e,
        r = (0, lE.r)(lc.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = l?.primaryColor ?? (0, ly.LX)(r),
        { hex: s } = (0, lT.A)(a),
        o = l?.getPreviewBanner(n, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(lw, { src: o }) : (0, t.jsx)(lG, { backgroundColor: s });
}
function lV(e) {
    let { userId: l, guildId: n, disabled: i } = e,
        { newestAnalyticsLocation: r } = (0, j.Ay)(),
        a = null != n,
        o = (0, V.Ay)(l, n),
        d = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(n ?? void 0).pendingBanner),
        u = (0, s.bG)([lb.default], () => lb.default.getCurrentUser()?.banner),
        c = (0, s.bG)([w.A], () =>
            null != n ? w.A.getGuildMemberProfile(l, n)?.banner : w.A.getUserProfile(l)?.banner,
        ),
        g = null === d,
        m = a && (o?.isUsingGuildMemberBanner() ?? !1),
        f = g && a && !m ? void 0 : d,
        p = (0, Z.Ac)(d, c),
        x = a && null != u,
        h = p
            ? {
                  onClick: () => (0, l_.rM)(null, c, (e) => (0, lS.p)({ guildId: n ?? void 0, banner: e })),
                  type: x ? "reset" : "remove",
                  accessibleLabel: eL.intl.string(x ? eL.t.jHlJNS : eL.t.tT9n7D),
              }
            : void 0;
    return (0, t.jsx)(lD.V, {
        affordance: h,
        variant: "square",
        onClick: () =>
            (0, l_.XD)({
                uploadType: lL.HL.BANNER,
                analyticsSource: r,
                guildId: n ?? void 0,
                stackingBehavior: "stack",
            }),
        accessibleLabel: eL.intl.string(eL.t.N0bC3P),
        "aria-haspopup": "dialog",
        disabled: i,
        showOverlayOnHover: !0,
        renderPreview: (e) => (0, t.jsx)(lU, { displayProfile: o, pendingBanner: f, shouldAnimate: e }),
    });
}
var lF = n(922301),
    lB = n(368919),
    lz = n(259065),
    lW = n(696451),
    lH = n(283607);
let lK = "heading-lg/bold";
function lY(e) {
    let { displayName: l, stylesPreview: n, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: lH.M,
        children:
            null != n
                ? (0, t.jsx)(eE.E, {
                      variant: lK,
                      children: (0, t.jsx)(lB.A, {
                          userName: l,
                          displayNameStyles: n,
                          effectDisplayType: i ? lF.G.ANIMATED : lF.G.STATIC,
                          textClassName: lH.W,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, t.jsx)(eE.E, { variant: lK, className: lH.W, color: "text-muted", children: l }),
    });
}
function lq(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: a } = (0, j.Ay)(),
        o = null != n,
        d = (0, s.bG)([lW.Ay], () => (null != n ? (lW.Ay.getMember(n, l.id)?.nick ?? null) : null)),
        u = (0, s.bG)([lb.default], () => lb.default.getCurrentUser()?.globalName ?? null),
        c = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(null).pendingGlobalName),
        g = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(n ?? null).pendingNickname),
        {
            userDisplayNameStyles: m,
            guildDisplayNameStyles: f,
            pendingDisplayNameStyles: p,
        } = (0, Z.B0)(l, n ?? void 0),
        x = o ? f : m,
        h = void 0 !== p,
        v = null === p,
        A = o && null != m,
        b = (0, Z.lw)({ pendingValue: p, userValue: m, guildValue: f, guildId: n ?? void 0 }),
        I = (e) => (null == e || "" === e ? void 0 : e),
        C = void 0 !== c ? c : u,
        N = o ? (I(void 0 !== g ? g : d) ?? I(C) ?? l.username) : (I(C) ?? l.username),
        y =
            null != b && (h ? null != p : null != x)
                ? {
                      onClick: () => (0, lS.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: A ? "reset" : "remove",
                      accessibleLabel: eL.intl.string(A ? eL.t.en3ogK : eL.t["Wqmi/h"]),
                  }
                : void 0,
        E = i.useCallback(() => {
            (0, lz.L)({ analyticsLocations: a, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [a, n]);
    return (0, t.jsx)(lD.V, {
        affordance: (!v && (h || null != x)) || A ? y : "add",
        variant: "bar",
        onClick: E,
        accessibleLabel: eL.intl.string(eL.t.XJ4oOO),
        "aria-haspopup": "dialog",
        renderPreview: (e) => (0, t.jsx)(lY, { stylesPreview: b, displayName: N, shouldAnimate: e }),
        disabled: r,
    });
}
var l$ = n(473219),
    lX = n(366010),
    lZ = n(736653),
    lJ = n(617061),
    lQ = n(203632),
    l0 = n(71393),
    l1 = n(466681);
function l7(e) {
    let { effect: l, shouldAnimate: n } = e,
        i = (0, lZ.Ay)(),
        r = (0, lX.M)(i)
            ? "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png"
            : "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
    return (0, t.jsxs)("div", {
        className: l1.B0,
        "aria-hidden": !0,
        children: [
            (0, t.jsx)("img", { src: r, alt: "", className: l1.AH }),
            l?.skuId != null &&
                (0, t.jsx)(b.A, {
                    skuId: l.skuId,
                    autoPlay: !1,
                    resetOnHover: !0,
                    restartMethod: lQ.HL.FromStart,
                    isHovering: n,
                    useOpacityOnHover: !1,
                    useThumbnail: !0,
                    delayIntro: !1,
                }),
        ],
    });
}
function l3(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: a } = (0, j.Ay)(),
        o = null != n,
        d = (0, s.bG)([l0.A], () => (null != n ? l0.A.getGuild(n) : null)),
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
                      onClick: () => (0, lS.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: p ? "reset" : "remove",
                      accessibleLabel: eL.intl.string(p ? eL.t["SQy/Po"] : eL.t.uMuafO),
                  }
                : void 0,
        v = i.useCallback(() => {
            (0, lJ.W)({
                analyticsLocations: a,
                guild: d ?? void 0,
                initialSelectedEffect: x ?? void 0,
                stackingBehavior: "stack",
            });
        }, [a, d, x]);
    return (0, t.jsx)(lD.V, {
        affordance: f && !p ? "add" : h,
        variant: "full-height-bar",
        onClick: v,
        accessibleLabel: eL.intl.string(eL.t["/dRfCf"]),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) => (0, t.jsx)(l7, { effect: x, shouldAnimate: e }),
    });
}
var l2 = n(33851),
    l9 = n.n(l2),
    l5 = n(684732),
    l8 = n(458217),
    l6 = n(298387);
function l4(e) {
    let { color: l, suggestedColors: n, disabled: r, ariaLabel: s, onSelect: o, buttonRef: d } = e,
        u = i.useRef(null),
        c = d ?? u,
        g = (0, ly.Hl)(l),
        m = (0, ly.bJ)(l, 0xffffff) < l8.Tr.NonText;
    return (0, t.jsx)(lP.Y, {
        targetElementRef: c,
        renderPopout: (e) => (0, t.jsx)(lk.VN, { ...e, value: l, onChange: o, suggestedColors: n, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: l, ...n } = e;
            return (0, t.jsx)(ey.D, {
                ...n,
                innerRef: c,
                className: l6.Dh,
                onClick: r ? void 0 : l,
                "aria-label": s,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)("div", { className: a()(l6.Hy, { [l6.rY]: m }), style: { backgroundColor: g } }),
            });
        },
    });
}
function ne(e) {
    let {
            primaryColor: l,
            secondaryColor: n,
            onSelectPrimaryColor: r,
            onSelectSecondaryColor: a,
            suggestedColors: s,
            disabled: o = !1,
            deleteButton: d,
        } = e,
        u = i.useRef(null),
        c = (0, ly.Hl)(l),
        g = (0, ly.Hl)(n),
        m = `linear-gradient(to bottom, ${c}, ${g})`,
        f = eL.intl.formatToPlainString(eL.t.FquTfm, { colorLabel: c }),
        p = eL.intl.formatToPlainString(eL.t.xOnm4z, { colorLabel: g }),
        x =
            null != d
                ? {
                      ...d,
                      onClick: () => {
                          d.onClick(), u.current?.focus();
                      },
                  }
                : void 0;
    return (0, t.jsx)(lD.Y, {
        variant: "square",
        disabled: o,
        deleteButton: x,
        children: (0, t.jsxs)("div", {
            className: l6.D7,
            style: { background: m },
            children: [
                (0, t.jsx)(l4, { color: l, suggestedColors: s, ariaLabel: f, onSelect: r, disabled: o, buttonRef: u }),
                (0, t.jsx)(l4, { color: n, suggestedColors: s, ariaLabel: p, onSelect: a, disabled: o }),
            ],
        }),
    });
}
function nl(e) {
    let { user: l, guildId: n, disabled: r = !1 } = e,
        a = (0, V.Ay)(l.id, n),
        {
            pendingThemeColors: o,
            pendingAvatar: d,
            savedThemeColors: u,
        } = (0, s.cf)([Q.A, w.A], () => {
            let e = Q.A.getPendingChanges(n ?? void 0);
            return {
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
                savedThemeColors: null != n ? w.A.getGuildMemberProfile(l.id, n)?.themeColors : void 0,
            };
        }),
        c = (0, J.V7)({ userId: l.id, image: d }),
        { primaryColor: g, secondaryColor: m } = (0, F.A)({
            user: l,
            displayProfile: a,
            pendingThemeColors: o,
            pendingAvatarSrc: c ?? void 0,
            isPreview: !0,
        }),
        f = (0, lE.r)(lc.A.unsafe_rawColors.PRIMARY_530).hex(),
        p = null != c ? c : l.getAvatarURL(n ?? void 0, 80),
        x = (0, lR.rh)(p, f, !1),
        h = i.useCallback(
            (e) => {
                let l = l9()(e, a?.themeColors);
                (0, lS.p)({ guildId: n ?? void 0, themeColors: l ? void 0 : e });
            },
            [a?.themeColors, n],
        ),
        v =
            null != n && (0, l5.l)(o, u)
                ? {
                      onClick: () => (0, lS.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eL.intl.string(eL.t["L+GmoR"]),
                  }
                : void 0;
    return null == g || null == m
        ? null
        : (0, t.jsx)(ne, {
              primaryColor: g,
              secondaryColor: m,
              onSelectPrimaryColor: (e) => {
                  e !== g && h([e, m]);
              },
              onSelectSecondaryColor: (e) => {
                  e !== m && h([g, e]);
              },
              suggestedColors: x,
              disabled: r,
              deleteButton: v,
          });
}
var nn = n(315629),
    nt = n(235684);
function ni() {
    let e = () => {
        (0, lj.K)({ stackingBehavior: "stack" });
    };
    return (0, t.jsxs)(nn.h, {
        color: "nitro-pink",
        className: nt.k,
        children: [
            (0, t.jsx)(eE.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eL.intl.format(eL.t.TmfgI2, { onClick: e }),
            }),
            (0, t.jsx)(lx.$, {
                variant: "expressive",
                size: "md",
                icon: lh.t,
                text: eL.intl.string(eL.t.pj0XBN),
                onClick: e,
                fullWidth: !0,
            }),
        ],
    });
}
var nr = n(55619),
    na = n(942308);
function ns() {
    return (0, t.jsxs)("div", {
        className: na.k,
        children: [
            (0, t.jsx)(eE.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eL.intl.string(eL.t.JFY17v),
            }),
            (0, t.jsx)(lx.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eL.intl.string(eL.t.R9GHya),
                onClick: () => nr.A.setEnabled(!1),
            }),
        ],
    });
}
var no = n(847374),
    nd = n(111159),
    nu = n(548118),
    nc = n(711014),
    ng = n(540637),
    nm = n(801461),
    nf = n(44482),
    np = n(844222),
    nx = n(561392),
    nh = n(716263),
    nv = n(15626),
    nA = n(930856);
function nj(e) {
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
            let { reducedMotion: e } = i.useContext(np.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, nx.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, nh.DL)(o, {
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
        N = i.useContext(nv._),
        y = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        R = i.useRef(null),
        [S, D] = i.useState(null),
        O = null != S ? (0, nm.ZN)(P, S) : void 0,
        T = i.useRef(!1),
        _ = i.useRef(!1),
        L = i.useMemo(() => l.filter((e) => (0, nm.fI)(e.value, [n])), [n, l]),
        M = i.useCallback(() => {
            u || h(!x);
        }, [u, h, x]),
        G = i.useCallback(
            (e) => {
                x && 0 === e.button && e.preventDefault();
            },
            [x],
        ),
        w = i.useCallback(() => {
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
                null != l && (r(l.value), w());
            },
            [u, r, w],
        ),
        { activeIndex: F, handleKeyDown: B } = (0, ng.l)(!0, l),
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
                            w();
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
                        x && (e.preventDefault(), e.stopPropagation(), w());
                        break;
                    default:
                        B(e);
                }
            },
            [u, x, l, S, V, w, r, h, B],
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
        onClick: M,
        onMouseDown: G,
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
                    className: a()(nA.S_, d),
                    ...b(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(ng.q, {
                        id: P,
                        tabIndex: -1,
                        items: l,
                        selectionMode: "single",
                        selectedItems: L,
                        onSelectionChange: V,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: S,
                        renderListItem: (e) => (null != f ? f(e) : (0, t.jsx)(nf.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var nb = n(138325);
let nI = "MAIN_PROFILE";
function nC(e) {
    let { guild: l } = e;
    return (0, t.jsx)(nu.Ay, { className: nb.$f, guild: l, size: nu.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function nN(e) {
    let { leading: l, label: n, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(ey.D, {
        innerRef: r,
        className: a()(nb.L5, { [nb.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            l,
            (0, t.jsx)(eE.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: nb.v9,
                children: n,
            }),
            (0, t.jsx)(no.a, {
                className: nb.u4,
                size: "sm",
                color: !0 === i ? lc.A.colors.ICON_MUTED : lc.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function ny(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([nc.Ay], () => nc.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([l0.A], () => l0.A.getGuilds()),
        c = i.useMemo(() => {
            let e = {
                    id: nI,
                    label: eL.intl.string(eL.t["2p07FR"]),
                    value: nI,
                    leading: (0, t.jsx)(nd.p, { size: "refresh_sm", color: lc.A.colors.ICON_DEFAULT }),
                },
                l = d
                    .map((e) => {
                        if (e === n) return null;
                        let l = u[e];
                        return null == l
                            ? null
                            : { id: l.id, label: l.name, value: l.id, leading: (0, t.jsx)(nC, { guild: l }) };
                    })
                    .filter(q.Vq),
                i = null != n ? u[n] : null;
            return null == i
                ? [e, ...l]
                : [e, { id: i.id, label: i.name, value: i.id, leading: (0, t.jsx)(nC, { guild: i }) }, ...l];
        }, [d, u, n]),
        g = l ?? nI,
        m = c.find((e) => e.value === g) ?? c[0],
        f = i.useCallback(
            (e) => {
                r(e === nI ? null : e);
            },
            [r],
        );
    return (0, t.jsx)(nj, {
        className: nb.kL,
        label: eL.intl.string(eL.t.rki38K),
        listboxClassName: nb.yt,
        options: c,
        value: g,
        onSelectionChange: f,
        loading: a,
        disabled: o,
        children: (e) =>
            (0, t.jsx)(nN, { leading: m.value === nI ? null : m.leading, label: m.label, disabled: o, ...e }),
    });
}
var nE = n(809467);
let nP = "profile-modal-editing-panel",
    nk = "profile-modal-editing-panel-heading";
function nR(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(e0.m, {
        text: eL.intl.string(eL.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(ey.D, {
            innerRef: i,
            "aria-label": eL.intl.string(eL.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": nP,
            className: a()(nE.eg, n),
            onClick: l,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(lu.V, { size: "sm", color: lc.A.colors.ICON_STRONG }),
        }),
    });
}
function nS(e) {
    let { onClick: l, className: n, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(e0.m, {
            text: eL.intl.string(eL.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(lg.K, {
                buttonRef: i,
                "aria-label": eL.intl.string(eL.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": nP,
                icon: lu.V,
                onClick: l,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function nD(e) {
    let { onClick: l, innerRef: n } = e;
    return (0, t.jsx)(e0.m, {
        text: eL.intl.string(eL.t["l/A351"]),
        ariaHidden: !0,
        children: (0, t.jsx)(ey.D, {
            innerRef: n,
            className: nE.cS,
            "aria-label": eL.intl.string(eL.t["l/A351"]),
            onClick: l,
            "aria-controls": nP,
            "aria-expanded": !0,
            children: (0, t.jsx)(lm.V, { size: "md", color: "currentColor" }),
        }),
    });
}
function nO() {
    let [e, l] = (0, lA.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: nE.X6,
              children: [
                  (0, t.jsx)(eE.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eL.intl.string(eL.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(ey.D, {
                      "aria-label": eL.intl.string(eL.t.rSe9ra),
                      className: nE.TD,
                      onClick: () => l(!0),
                      children: (0, t.jsx)(lf.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function nT() {
    let e = () => {
        (0, lj.K)({ stackingBehavior: "stack" });
    };
    return (0, t.jsxs)("div", {
        className: nE.eW,
        children: [
            (0, t.jsxs)("div", {
                className: nE.tm,
                children: [
                    (0, t.jsx)(lp.D, {
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
            (0, t.jsx)(lx.$, {
                variant: "expressive",
                size: "sm",
                icon: lh.t,
                text: eL.intl.string(eL.t["7IWwak"]),
                onClick: e,
                fullWidth: !0,
            }),
            (0, t.jsx)("div", {
                className: nE.D0,
                children: (0, t.jsx)("div", { className: nE.ZN, children: (0, t.jsx)(lv.X, { size: "xs" }) }),
            }),
        ],
    });
}
function n_(e) {
    let { heading: l, children: n, disabled: i = !1, showNitroIcon: r = !1 } = e;
    return (0, t.jsxs)("div", {
        className: nE.Os,
        children: [
            (0, t.jsxs)("div", {
                className: nE.AM,
                children: [
                    (0, t.jsx)(lp.D, {
                        className: nE.i_,
                        variant: "text-sm/medium",
                        color: i ? "text-muted" : "text-strong",
                        children: l,
                    }),
                    r &&
                        (0, t.jsx)(e0.m, {
                            text: eL.intl.string(eL.t.BNg1ir),
                            shouldShow: !i,
                            ariaHidden: !0,
                            children: (0, t.jsx)(lh.t, {
                                className: nE.l3,
                                size: "xs",
                                color: i ? lc.A.colors.ICON_MUTED : lc.A.colors.ICON_STRONG,
                                "aria-hidden": !0,
                            }),
                        }),
                ],
            }),
            n,
        ],
    });
}
function nL(e) {
    let {
            selectedGuildId: l,
            originGuildId: n,
            onSelectGuildId: i,
            isLoading: r = !1,
            onClose: o,
            className: d,
            collapseButtonRef: c,
        } = e,
        g = (0, s.bG)([lb.default], () => lb.default.getCurrentUser()),
        p = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        x = (0, eK.A)(i),
        h = null != l,
        v = lI.Ay.canUsePremiumProfileCustomization(g),
        A = h && !v;
    return null == g
        ? null
        : (0, t.jsxs)("aside", {
              id: nP,
              "aria-labelledby": nk,
              className: a()(nE.nd, { [nE.VU]: A && !p }, d),
              "aria-busy": r,
              children: [
                  (0, t.jsx)(m.A, { children: (0, t.jsx)(f.H, { id: nk, children: eL.intl.string(eL.t["L+ch00"]) }) }),
                  (0, t.jsxs)("div", {
                      className: nE.wx,
                      children: [
                          (0, t.jsx)(nD, { innerRef: c, onClick: o }),
                          (0, t.jsx)(ny, {
                              selectedGuildId: l ?? null,
                              originGuildId: n,
                              onChange: x,
                              loading: r,
                              disabled: p,
                          }),
                      ],
                  }),
                  p
                      ? (0, t.jsx)(ns, {})
                      : (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(f.F, {
                                    children: (0, t.jsxs)(u.d_, {
                                        className: nE.XG,
                                        children: [
                                            h && (v ? (0, t.jsx)(nO, {}) : (0, t.jsx)(nT, {})),
                                            (0, t.jsx)(n_, {
                                                heading: eL.intl.string(eL.t.x5CoXR),
                                                disabled: r || A,
                                                children: (0, t.jsx)(l$.A, { user: g, guildId: l, disabled: r || A }),
                                            }),
                                            (0, t.jsxs)(n_, {
                                                heading: eL.intl.string(eL.t["50Nwpc"]),
                                                disabled: r || A,
                                                children: [
                                                    (0, t.jsx)(lC.A, { user: g, guildId: l, disabled: r || A }),
                                                    (0, t.jsx)(lN.A, { user: g, guildId: l, disabled: r || A }),
                                                ],
                                            }),
                                            (v || h) &&
                                                (0, t.jsx)(n_, {
                                                    heading: eL.intl.string(eL.t.NEzEws),
                                                    disabled: r,
                                                    children: (0, t.jsx)(lq, {
                                                        user: g,
                                                        guildId: l,
                                                        disabled: r || (h && !v),
                                                    }),
                                                }),
                                            v || h
                                                ? (0, t.jsxs)(n_, {
                                                      heading: eL.intl.string(eL.t.Zenogr),
                                                      disabled: r || A,
                                                      showNitroIcon: !0,
                                                      children: [
                                                          (0, t.jsx)(nl, { user: g, guildId: l, disabled: r || !v }),
                                                          (0, t.jsx)(lV, {
                                                              userId: g.id,
                                                              guildId: l,
                                                              disabled: r || !v,
                                                          }),
                                                      ],
                                                  })
                                                : (0, t.jsx)(n_, {
                                                      heading: eL.intl.string(eL.t["/X3fkf"]),
                                                      disabled: r || A,
                                                      children: (0, t.jsx)(lO, { user: g, disabled: r || h }),
                                                  }),
                                            (0, t.jsx)(n_, {
                                                heading: eL.intl.string(eL.t.wR5wOo),
                                                disabled: r,
                                                children: (0, t.jsx)(l3, {
                                                    user: g,
                                                    guildId: l,
                                                    disabled: r || (h && !v),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                !v && (0, t.jsx)(ni, {}),
                            ],
                        }),
              ],
          });
}
var nM = n(982599),
    nG = n(756634),
    nw = n(83013),
    nU = n(518477),
    nV = n(77085);
function nF(e) {
    let { userId: l } = e,
        n = (0, ea.g)(),
        { trackUserProfileAction: i } = (0, G.NJ)();
    return (0, t.jsx)(nw.A, {
        heading: eL.intl.string(eL.t["mQKv+v"]),
        scrollTargetId: nU.bk.NOTE,
        children: (0, t.jsx)(nG.A, {
            userId: l,
            className: nV.N,
            autoFocus: n === nU.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var nB = n(289873),
    nz = n(778599);
function nW(e) {
    let { isVisible: l, showLoadingSpinner: n, className: i } = e;
    return (0, t.jsx)("div", {
        className: a()(nz.f, l && nz.z, i),
        children: n && (0, t.jsx)(nB.y, { type: nB.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
    });
}
var nH = n(568602),
    nK = n(625494);
function nY(e) {
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
                nK._.subscribe(eZ.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    nK._.unsubscribe(eZ.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, t.jsx)(nH.b, { isShaking: n, intensity: 1.4, children: l })
    );
}
var nq = n(515054),
    n$ = n(873174),
    nX = n(933832),
    nZ = n(972213),
    nJ = n(97483),
    nQ = n(765178),
    n0 = n(775602),
    n1 = n(606758),
    n7 = n(707238),
    n3 = n(861173);
let n2 = {
        [nU.jM.WIDGET_ADDED]: {
            message: eL.intl.string(eL.t.fFP1Uy),
            icon: (0, t.jsx)(nX.A, { size: "sm", color: lc.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_added",
        },
        [nU.jM.WIDGET_REMOVED]: {
            message: eL.intl.string(eL.t.zzsK7h),
            icon: (0, t.jsx)(nX.A, { size: "sm", color: lc.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_removed",
        },
        [nU.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eL.intl.string(eL.t["84MExs"]),
            icon: (0, t.jsx)(nZ.d, { size: "sm", color: lc.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_save_generic_failure",
            type: nJ.Ck.FAILURE,
        },
        [nU.jM.SOMETHING_WENT_WRONG]: {
            message: eL.intl.string(eL.t.F8FvUy),
            icon: (0, t.jsx)(nZ.d, { size: "sm", color: lc.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_something_went_wrong",
            type: nJ.Ck.FAILURE,
        },
    },
    n9 = (e) => {
        let { message: l, icon: n, type: i } = e;
        return (0, t.jsxs)("div", {
            className: a()(n3.oR, n7.oR),
            "data-type": i,
            children: [
                (0, t.jsx)("div", { className: n7.RC, children: n }),
                (0, t.jsx)(eE.E, { color: "text-strong", variant: "text-sm/semibold", children: l }),
            ],
        });
    },
    n5 = (e) => {
        let { className: l } = e,
            n = (0, n1.fu)(),
            r = (0, s.bG)([n0.A], () => n0.A.useReducedMotion),
            [o, u] = i.useState(!1),
            [c, g] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (u(!0), g(n2[n]), nQ.O.announce(n2[n].message)) : u(!1);
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
            i.useEffect(() => () => (0, n1.XA)(null), []),
            i.useEffect(() => {
                if (o) {
                    let e = setTimeout(() => {
                        (0, n1.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [o]),
            (0, t.jsx)(t.Fragment, {
                children: m(
                    (e, n) =>
                        n &&
                        null !== c &&
                        (0, t.jsx)(n$.animated.div, {
                            className: a()(l, n7.Jt),
                            style: e,
                            children: (0, t.jsx)(n9, { ...c }),
                        }),
                ),
            })
        );
    };
var n8 = n(297413),
    n6 = n(878555),
    n4 = n(621466),
    te = n(219869),
    tl = n(292666),
    tn = n(539396);
function tt(e, l) {
    let [n, t] = i.useState("idle"),
        [r, a] = i.useState(e),
        o = "editing" === n,
        d = (0, s.bG)([n0.A], () => n0.A.useReducedMotion),
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
                !o || (null != g.current && (0, n4.vq)(e.relatedTarget) && g.current.contains(e.relatedTarget)) || x();
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
function ti(e) {
    let { text: l, htmlFor: n } = e;
    return (0, t.jsx)(m.A, { tag: "label", htmlFor: n, children: l });
}
function tr(e) {
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
            (0, t.jsx)(ti, { text: r, htmlFor: l }),
            (0, t.jsx)(tl.k, {
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
function ta(e) {
    let { tooltip: l, ...n } = e,
        i = (0, t.jsx)("div", {
            className: tn.L7,
            children: (0, t.jsx)(te.T, { ...n, size: "sm", variant: "input-accessory" }),
        });
    return null == l ? i : (0, t.jsx)(e0.m, { text: l, ariaHidden: !0, children: i });
}
function ts(e) {
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
            className: tn.LL,
            onClick: u,
            children: [
                A
                    ? (0, t.jsx)(eE.E, {
                          id: v,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: tn.qf,
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
                null != g && (0, t.jsx)("div", { className: tn.lD, children: (0, t.jsx)(ta, { ...g }) }),
            ],
        });
    return (0, t.jsx)("div", {
        ref: f,
        className: a()(tn.kL, { [tn.oE]: "compact" === c }, m),
        onBlur: p,
        onKeyDown: x,
        children: (0, t.jsx)(
            "div",
            { className: tn.qG, children: l ? s : (0, t.jsx)("div", { className: tn.VH, children: j }) },
            l ? "editing" : "preview",
        ),
    });
}
var to = n(35783);
function td(e) {
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
        v = lI.Ay.canUsePremiumProfileCustomization(m),
        {
            value: A,
            previewValue: b,
            onCommit: I,
        } = ((l = f?.guildId ?? null),
        (n = f?.guildId != null),
        (r = (0, s.bG)([lb.default], () => lb.default.getCurrentUser()?.globalName ?? null)),
        (a = (0, s.bG)([lW.Ay], () => (null != l ? (lW.Ay.getMember(l, m.id)?.nick ?? null) : null))),
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
                        ? (0, lS.p)({ nickname: e.trim(), guildId: f?.guildId ?? void 0 })
                        : (0, lS.p)({ globalName: e.trim() });
                },
                [n, f?.guildId],
            ),
        }),
        { isEditing: C, previewProps: N, inputProps: y, handleCommit: E } = tt(A, I),
        P = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(h ?? null).pendingDisplayNameStyles),
        k = eL.intl.string(x ? eL.t.mq6Cg9 : eL.t.XuZU7A),
        R = x ? (m.globalName ?? m.username) : m.username,
        S = eL.intl.string(x ? eL.t["g7OSZ/"] : eL.t.kyfzzc),
        D = i.useRef(null),
        O = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    C && E(),
                    (0, lz.L)({ analyticsLocations: p, guildId: h, stackingBehavior: "stack", returnRef: D });
            },
            [C, E, p, h],
        ),
        T = {
            icon: lu.V,
            tooltip: eL.intl.string(eL.t.lqKKI2),
            "aria-label": eL.intl.string(eL.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: O,
            buttonRef: D,
        },
        _ = v ? T : void 0,
        L =
            null != b
                ? (0, t.jsx)(n6.c$, {
                      user: m,
                      guildId: h,
                      displayName: b,
                      size: "lg",
                      pendingDisplayNameStyles: P,
                      className: to.d,
                  })
                : null;
    return (0, t.jsx)(ts, {
        ...N,
        preview: L,
        placeholder: R,
        editButtonAriaLabel: S,
        trailing: _,
        input: (0, t.jsx)(tr, { ...y, label: k, maxLength: eZ.zzC, placeholder: R, trailing: _ }),
    });
}
var tu = n(469432);
function tc(e) {
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
                    (0, lS.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        { previewProps: f, inputProps: p, isEditing: x } = tt(c, m),
        h = null != g && g.length > 0;
    return (0, t.jsx)(ts, {
        ...f,
        variant: "compact",
        className: a()(tu.k, x && tu.J),
        preview: h ? (0, t.jsx)(n6.n2, { pronouns: g }) : null,
        placeholder: eL.intl.string(eL.t["76Aqhl"]),
        editButtonAriaLabel: eL.intl.string(eL.t.h6VAO7),
        input: (0, t.jsx)(tr, {
            ...p,
            label: eL.intl.string(eL.t["rniRE+"]),
            placeholder: eL.intl.string(eL.t["76Aqhl"]),
            maxLength: eZ.VE5,
        }),
    });
}
var tg = n(145497),
    tm = n(685073),
    tf = n(318785),
    tp = n(534400),
    tx = n(743981),
    th = n(724637),
    tv = n(329296);
let tA = "no-server-tag";
function tj(e) {
    let { buttonRef: l, guildId: n, guildTag: i, guildBadge: r, ...s } = e,
        o = null == i || null == n;
    return (0, t.jsx)(ey.D, {
        innerRef: l,
        className: a()(th.L5, { [th.wK]: o }),
        ...s,
        children: (0, t.jsxs)(eE.E, {
            variant: o ? "text-xs/normal" : "text-xs/semibold",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: th.W3,
            tag: "span",
            children: [
                o
                    ? eL.intl.string(eL.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  tp.Z9,
                                  {
                                      src: (0, tm.gC)(n, r, tx.Sl.SIZE_14),
                                      size: tx.Sl.SIZE_14,
                                      className: th.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, tm.gC)(n, r, tx.Sl.SIZE_14) ?? n,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(no.a, { size: "xs", color: "currentColor", className: th.u4 }),
            ],
        }),
    });
}
function tb() {
    let e = (0, tf.b)(),
        l = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        n = (0, s.bG)([lb.default], () => {
            let e = lb.default.getCurrentUser();
            return (0, tm.Zo)(e?.primaryGuild).guildId ?? null;
        }),
        r = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(null).pendingPrimaryGuildId),
        a = void 0 !== r ? r : n,
        o = null != a ? (l.get(a) ?? null) : null,
        d = o?.profile?.tag ?? null,
        u = o?.profile?.badge ?? void 0,
        c = i.useCallback(
            (e) =>
                e.id === tA
                    ? (0, t.jsx)("div", {
                          className: tv.uN,
                          children: (0, t.jsx)(eE.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: th.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(nf.c, { ...e }),
            [],
        ),
        g = i.useMemo(
            () => [
                { id: tA, label: eL.intl.string(eL.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let l = e.profile?.tag;
                    if (null == l) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(tg.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(tp.o9, { guildId: e.id, guildTag: l, guildBadge: n }),
                        },
                    ];
                }),
            ],
            [e],
        ),
        m = i.useCallback((e) => {
            (0, lS.p)({ primaryGuildId: e });
        }, []);
    return 0 === e.length
        ? null
        : (0, t.jsx)(nj, {
              options: g,
              value: a,
              onSelectionChange: m,
              label: eL.intl.string(eL.t.Pdd1nd),
              listboxClassName: th.yt,
              renderListItem: c,
              children: (e) => {
                  let { buttonRef: l, selectButtonProps: n } = e;
                  return (0, t.jsx)(tj, { buttonRef: l, guildId: a, guildTag: d, guildBadge: u, ...n });
              },
          });
}
var tI = n(874644),
    tC = n(246950);
function tN(e) {
    let { user: l, displayProfile: n, nickname: i, trailing: r, onClose: s, allowEditing: o } = e;
    if (!o)
        return (0, t.jsx)(n6.Ay, {
            user: l,
            guildId: n?.guildId ?? void 0,
            displayName: i,
            displayNameSize: "lg",
            pronouns: n?.pronouns,
            trailing: r,
            onClose: s,
        });
    let d = l.isProvisional
        ? null
        : (0, t.jsx)(n8.A, {
              user: l,
              forceUsername: !0,
              className: tI.a1,
              usernameClass: a()(tI.eb, tC.W),
              discriminatorClass: a()(tI.sw, tC.W),
              hideBotTag: !0,
          });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(td, { displayProfile: n, user: l }),
            (0, t.jsxs)("div", {
                className: a()(tI.AK, tI.j6),
                children: [d, (0, t.jsx)(n6.Ce, {}), (0, t.jsx)(tc, { displayProfile: n }), (0, t.jsx)(tb, {}), r],
            }),
        ],
    });
}
n(321073);
var ty = n(97808),
    tE = n(980707),
    tP = n(477782),
    tk = n(22231),
    tR = n(601255),
    tS = n(562819),
    tD = n(19575),
    tO = n(106106),
    tT = n(338165);
let t_ = tD.Ay.getEnableHardwareAcceleration() ? ty.Js : ty.eu;
function tL(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(tE.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eL.intl.string(eL.t.YAgq3W),
        children: (0, t.jsx)(tP.rX, { children: n }),
    });
}
function tM(e) {
    let { user: l, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, eo.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useCallback(() => u(!1), []),
        m = (function (e) {
            let { user: l, guildId: n, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, j.Ay)(),
                d = null != n,
                u = (0, s.bG)([lW.Ay], () => (null != n ? lW.Ay.getMember(n, l.id) : null)),
                c = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(n ?? void 0).pendingAvatar),
                g = d ? u?.avatar : l.avatar,
                m = (0, Z.z5)(c, g),
                f = d && null != l.avatar,
                p = lI.Ay.canUsePremiumProfileCustomization(l),
                x = p || null == n,
                h = p || null == n,
                v = (0, s.bG)([l0.A], () => (null != n ? l0.A.getGuild(n) : null)),
                A = (0, Z.a4)({ user: l }),
                b = (0, Z.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: I } = (0, Z.CP)(n ?? void 0),
                C = void 0 !== I,
                N = null != (0, tR.A)(C ? I : b) && (C ? null != I : null != b),
                y = d && null != A,
                E = i.useCallback(() => {
                    r(),
                        (0, l_.XD)({
                            uploadType: lL.HL.AVATAR,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                P = i.useCallback(() => {
                    r(), (0, tS.L)({ analyticsLocations: o, guild: v ?? void 0, stackingBehavior: "stack" });
                }, [r, o, v]),
                k = i.useCallback(() => {
                    r(),
                        (0, l_.rM)(null, g, (e) => (0, lS.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, Z.WU)(f ? "reset" : "remove");
                }, [r, n, g, f]),
                R = i.useCallback(() => {
                    r(), (0, lS.p)({ guildId: n ?? void 0, avatarDecoration: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, t.jsx)(
                                tP.Dr,
                                { id: "change-avatar", label: eL.intl.string(eL.t["4OynCD"]), action: E },
                                "change-avatar",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, t.jsx)(
                                tP.Dr,
                                { id: "change-decoration", label: eL.intl.string(eL.t.HykynS), action: P },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        m &&
                        e.push(
                            f
                                ? (0, t.jsx)(
                                      tP.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.TDjKDm),
                                          action: k,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      tP.Dr,
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
                                      tP.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eL.intl.string(eL.t["2u5yu0"]),
                                          action: R,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      tP.Dr,
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
              className: a()(tO.my, tO.vk, tT.kL, { [tT.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(t_, { ...r, imageClassName: a()(tO.Lw, tT.HU) }),
                  (0, t.jsx)(lP.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: lP.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: g,
                      renderPopout: (e) => (0, t.jsx)(tL, { ...e, items: m, onMenuClose: g }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: tT.r9,
                              children: (0, t.jsx)(lg.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: tk.R,
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
var tG = n(976726);
function tw(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(tE.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eL.intl.string(eL.t.FzU73A),
        children: (0, t.jsx)(tP.rX, { children: n }),
    });
}
function tU(e) {
    let { user: l, guildId: n } = e,
        [r, o] = i.useState(!1),
        d = i.useRef(null),
        u = i.useCallback(() => o(!1), []),
        c = (function (e) {
            let { user: l, guildId: n, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, j.Ay)(),
                d = (0, Z.N2)({ user: l, guildId: n ?? void 0 }),
                u = lI.Ay.canUsePremiumProfileCustomization(l),
                c = u || null == n,
                g = null != n,
                { pendingBanner: m, pendingProfileEffect: f } = (0, s.bG)([Q.A], () =>
                    Q.A.getPendingChanges(n ?? void 0),
                ),
                p = (0, s.bG)([w.A], () =>
                    null != n ? w.A.getGuildMemberProfile(l.id, n)?.banner : w.A.getUserProfile(l.id)?.banner,
                ),
                x = (0, s.bG)([lb.default], () => lb.default.getCurrentUser()?.banner != null),
                h = (0, s.bG)([w.A], () => w.A.getUserProfile(l.id)?.profileEffect != null),
                v = (0, Z.Ac)(m, p),
                A = g && x,
                b = g && h,
                I = void 0 === f ? null != d : null != f,
                C = i.useCallback(() => {
                    r(),
                        (0, l_.XD)({
                            uploadType: lL.HL.BANNER,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                N = i.useCallback(() => {
                    r(),
                        (0, lJ.W)({
                            analyticsLocations: o,
                            guild: null != n ? (l0.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, d]),
                y = i.useCallback(() => {
                    r(), (0, l_.rM)(null, p, (e) => (0, lS.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, p]),
                E = i.useCallback(() => {
                    r(), (0, lS.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    u &&
                        e.push(
                            (0, t.jsx)(
                                tP.Dr,
                                { id: "change-banner", label: eL.intl.string(eL.t.N0bC3P), action: C },
                                "change-banner",
                            ),
                        ),
                    c &&
                        e.push(
                            (0, t.jsx)(
                                tP.Dr,
                                { id: "change-effect", label: eL.intl.string(eL.t["/6nv6N"]), action: N },
                                "change-effect",
                            ),
                        ),
                    u &&
                        v &&
                        e.push(
                            A
                                ? (0, t.jsx)(
                                      tP.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.jHlJNS),
                                          action: y,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      tP.Dr,
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
                                      tP.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.Lb7lu9),
                                          action: E,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      tP.Dr,
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
              className: a()(tG.kL, { [tG.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(eu.A, { ...e, className: tG.Pr }),
                  (0, t.jsx)(lP.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: lP.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: u,
                      renderPopout: (e) => (0, t.jsx)(tw, { ...e, items: c, onMenuClose: u }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: tG.r9,
                              children: (0, t.jsx)(lg.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: tk.R,
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
var tV = n(777480),
    tF = n(107563),
    tB = n(570287);
n(938796);
var tz = n(913453),
    tW = n(667049),
    tH = n(837531),
    tK = n(186272),
    tY = n(645625),
    tq = n(337796);
let t$ = (e) => e * (2 - e),
    tX = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } },
    tZ = (e) => {
        let { type: l, anchor: n } = e;
        return "staple" !== l || "bottom" !== n;
    };
function tJ(e) {
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
        : (0, t.jsx)("div", { className: tY.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function tQ(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: i } = e,
        r = void 0 !== n ? n : l?.profileEffect;
    return null == r ? null : (0, t.jsx)(b.A, { skuId: r.skuId, isHovering: i });
}
function t0(e) {
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
        [G, w] = i.useState(),
        U = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? w("compact-xs") : l <= 380 ? w("compact-sm") : w(void 0);
        }, []);
    (0, h.g)(O, U, [], { fireOnMount: !0 });
    let V = null != G ? tX[G] : void 0,
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
        ei = C ? tU : eu.A,
        er = C ? tM : eo.A;
    return (0, t.jsxs)("main", {
        className: a()(tY.profile, null != G && tY[G]),
        ref: O,
        "aria-busy": y,
        children: [
            (0, t.jsxs)("div", {
                className: tY.profileHeader,
                children: [
                    (0, t.jsx)(ei, {
                        user: l,
                        displayProfile: g,
                        guildId: r,
                        themeType: ee.d.MODAL_V2,
                        specOverrides: V,
                        pendingBanner: j,
                    }),
                    (0, t.jsx)(ex.A, { userId: l.id, onClose: x, className: tY.interactionToast }),
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
                className: tY.profileBody,
                children: [
                    (0, t.jsx)(em.A, { userId: l.id }),
                    (0, t.jsx)(tN, {
                        user: l,
                        displayProfile: g,
                        nickname: m,
                        trailing: (0, t.jsx)(ed.A, { displayProfile: g, themeType: ee.d.MODAL_V2, onClose: x }),
                        onClose: x,
                        allowEditing: C,
                    }),
                    B === eZ.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(eb.A.Overlay, {
                            className: tY.profileOverlay,
                            children: (0, t.jsx)(ep.A, {
                                user: l,
                                applicationId: X,
                                guildId: g?.guildId ?? void 0,
                                channelId: d,
                                className: tY.profileBanner,
                            }),
                        }),
                    Q.map((e) => {
                        let { applicationId: n } = e;
                        return (0, t.jsx)(
                            eb.A.Overlay,
                            {
                                className: tY.profileOverlay,
                                children: (0, t.jsx)(ep.A, {
                                    user: l,
                                    guildId: g?.guildId ?? void 0,
                                    channelId: d,
                                    isGameRelationship: !0,
                                    applicationId: n,
                                    className: tY.profileBanner,
                                }),
                            },
                            n,
                        );
                    }),
                    l.isProvisional &&
                        (0, t.jsx)(eb.A.Overlay, {
                            className: tY.profileOverlay,
                            children: (0, t.jsx)(nw.A, {
                                heading: eL.intl.string(eL.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(c.E, { size: "xs", color: "currentColor" }),
                                className: tY.profileBanner,
                                children: (0, t.jsx)(D.T, { userId: l.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(ej.A, { user: l, className: tY.profileBanner }),
                    g?.private &&
                        (0, t.jsx)(eb.A.Overlay, {
                            className: tY.profileOverlay,
                            children: (0, t.jsx)(eA.A, { username: m }),
                        }),
                    (0, t.jsx)("div", {
                        className: tY.profileButtons,
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
                    E && (0, t.jsx)(eg.A, { isPremiumUser: (0, M.ki)(n), onInteraction: x }),
                    !Z && (0, t.jsx)(ec.E, { userBio: g?.bio, setLineClamp: !1 }),
                    J.length > 0 &&
                        (0, t.jsx)(nw.A, {
                            heading: eL.intl.string(eL.t["Uv/eTx"]),
                            children: (0, t.jsx)(ef.A, { applicationIds: J }),
                        }),
                    (0, t.jsx)(nw.A, {
                        heading: eL.intl.string(eL.t.a6XYD9),
                        children: (0, t.jsx)(eh.A, {
                            userId: l.id,
                            guildId: g?.guildId,
                            tooltipDelay: nU.In,
                            textClassName: C ? tY.memberSinceText : void 0,
                        }),
                    }),
                    g?.guildId != null &&
                        (0, t.jsx)(eC.A, {
                            userId: l.id,
                            guildId: g.guildId,
                            className: tY.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "currentColor",
                        }),
                    (C || en.length > 0 || el.length > 0) &&
                        (0, t.jsx)(nw.A, {
                            heading: eL.intl.string(eL.t["3fe7U5"]),
                            scrollTargetId: nU.bk.CONNECTIONS,
                            children: (0, t.jsx)(ld, {
                                applicationIdentities: el,
                                connections: en,
                                userId: l.id,
                                allowEditing: C,
                                className: tY.profileAppConnections,
                            }),
                        }),
                    et.length > 0 &&
                        (0, t.jsx)(nw.A, {
                            heading: eL.intl.string(eL.t.PHjkRE),
                            scrollTargetId: nU.bk.APPS,
                            children: (0, t.jsx)(ew, {
                                applicationRoleConnections: et,
                                onClose: x,
                                className: tY.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(nF, { userId: l.id }),
                ],
            }),
            (0, t.jsx)(tQ, { displayProfile: g, profileEffectOverride: b, isHovering: L }),
            null != I && (0, t.jsx)(N.A, { frame: I, filterLayer: tZ }),
        ],
    });
}
function t1(e) {
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
function t7(e) {
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
            sourceAnalyticsLocations: M = [],
            themeContainerClassName: F,
        } = e,
        B = l.id === n.id,
        {
            guildId: z,
            pendingGuildId: W,
            isLoading: H,
            selectUserProfile: K,
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
        Y = i.useMemo(() => (null != z ? { [z]: [l.id] } : {}), [z, l.id]);
    (0, v.Eq)(Y, "UserProfileModalV2");
    let q = (0, U.X)("UserProfileModalV2"),
        $ = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        X = B && q,
        el = X && !$,
        {
            pendingThemeColors: er,
            avatarDecorationOverride: eo,
            avatarOverride: ed,
            bannerOverride: eu,
            profileEffectOverride: ec,
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
        })({ user: l, allowEditingInModal: el, guildId: z }),
        {
            isExpanded: eg,
            isAnimating: em,
            transition: ef,
            handleExpand: ep,
            handleCollapse: ex,
            refs: { expandIconButtonRef: eh, expandTabButtonRef: eA, collapseButtonRef: ej },
        } = (function () {
            let [e, l] = i.useState(() => window.innerWidth > 928),
                [n, t] = i.useState(!1),
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: t$ },
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
        eI = X && !eg,
        eC = X && (!eg || em),
        { defaultWishlistId: eN } = (0, s.cf)([w.A], () => ({ defaultWishlistId: w.A.getFirstWishlistId(l.id) }));
    (0, O.fw)({ wishlistId: eN, userId: l.id });
    let ey = (0, es.fC)(),
        eE = H || null != ey.interactionType,
        eP = (function (e) {
            let l,
                n,
                t,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, tz.A)(i),
                d = o?.length,
                u =
                    ((l = (0, s.bG)([lb.default], () => lb.default.getCurrentUser())),
                    (n = (0, s.bG)([w.A], () => w.A.getUserProfile(i.id))),
                    (t =
                        n?.bio === "" &&
                        n?.pronouns === "" &&
                        n?.banner === void 0 &&
                        n?.accentColor === void 0 &&
                        n?.banner === void 0 &&
                        i.flags === i.publicFlags &&
                        (n?.badges == null || n?.badges?.length === 0)),
                    l?.id !== i.id && !t),
                c = (0, tW.A)(i.id),
                g = (0, tB.A)(i.id),
                m = [],
                f = i.id === r?.id,
                p = w.A.getFirstWishlistId(i.id),
                x = null != p,
                h = x ? w.A.getWishlistSettings(i.id, p) : null,
                v = (x ? tF.A.getWishlistItems(p) : []).length > 0,
                A = c.length > 0;
            (f || A) && m.push({ text: eL.intl.string(eL.t.laViwx), section: nU.RP.WIDGETS }),
                m.push({ text: eL.intl.string(eL.t.chq59f), section: nU.RP.ACTIVITY });
            let j = !1 === i.nsfwAllowed,
                b = T.A.isFriend(i.id),
                I = h?.visibility === tV.a.PUBLIC;
            return (
                (f || (!f && v && I && g && (!j || (j && b)))) &&
                    m.push({ text: eL.intl.string(eL.t["7lZ31J"]), section: nU.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (m.push({ text: (0, tH.A)(a), section: nU.RP.MUTUAL_FRIENDS }),
                    m.push({ text: (0, tK.A)(d), section: nU.RP.MUTUAL_GUILDS })),
                m
            );
        })({ user: l, currentUser: n }),
        { analyticsLocations: ek } = (0, j.Ay)([...M, A.A.USER_PROFILE_MODAL_V2]),
        eR = (0, G.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: b,
            guildId: z,
            channelId: u,
            messageId: c,
            roleId: h,
        }),
        eS = (0, V.Ay)(l.id, z),
        eD = (0, C.A)(eS?.profileFrame?.skuId, "UserProfileModalV2"),
        eO = (0, y.A)(eS?.profileFrame?.skuId);
    (0, I.A)({ skuId: eS?.profileFrame?.skuId, openedAt: S, context: eR, analyticsLocations: ek });
    let eT = L.Ay.useName(eS?.guildId, u, l),
        e_ = (0, E.GV)(),
        eM = eL.intl.format(eL.t.KRe1Fk, { name: eT });
    return (0, t.jsx)(j.f5, {
        value: ek,
        children: (0, t.jsx)(G.of, {
            value: eR,
            openedAt: S,
            fetchStartedAt: eS?.fetchStartedAt,
            fetchEndedAt: eS?.fetchEndedAt,
            isLoaded: eS?.isLoaded,
            children: (0, t.jsx)(es.Hl, {
                value: ey,
                children: (0, t.jsx)(ea.N, {
                    value: P,
                    children: (0, t.jsxs)(g.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(tq.zr, { [tq.QF]: eS?.private === !0 }),
                        transitionState: k,
                        "aria-labelledby": e_,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(nY, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(tY.layoutContainer, eO, {
                                        [tY.editingPanelEnabled]: X,
                                        [tY.editingPanelExpanded]: X && eg,
                                        [tY.isAnimating]: em,
                                    }),
                                    children: [
                                        (0, t.jsxs)(t1, {
                                            user: l,
                                            displayProfile: eS,
                                            pendingThemeColors: er,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: tq.Oo,
                                                    children: [
                                                        (0, t.jsx)(eQ.A, { isCurrentUser: B, onClose: D }),
                                                        (0, t.jsx)(m.A, {
                                                            children: (0, t.jsx)(f.H, { id: e_, children: eM }),
                                                        }),
                                                        eC &&
                                                            (0, t.jsx)(nS, {
                                                                buttonRef: eh,
                                                                onClick: ep,
                                                                className: tY.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eI &&
                                                    (0, t.jsx)("div", {
                                                        className: tY.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(nR, {
                                                            innerRef: eA,
                                                            onClick: ep,
                                                            className: tY.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(f.F, {
                                            children: [
                                                X &&
                                                    ef((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(nL, {
                                                                  className: a()(tY.editingPanel, {
                                                                      [tY.isExpanded]: eg,
                                                                  }),
                                                                  selectedGuildId: W,
                                                                  originGuildId: o,
                                                                  onSelectGuildId: K,
                                                                  onClose: ex,
                                                                  collapseButtonRef: ej,
                                                                  isLoading: H,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(eb.A, {
                                                    className: a()(F, tq.A7, tY.profileContentOuter),
                                                    innerClassName: tY.profileContentInner,
                                                    user: l,
                                                    displayProfile: eS,
                                                    themeType: ee.d.MODAL_V2,
                                                    pendingThemeColors: er,
                                                    isPrivate: eS?.private === !0,
                                                    children: [
                                                        (0, t.jsx)(tJ, { displayProfile: eS, pendingBanner: eu }),
                                                        eS?.private === !0 && (0, t.jsx)(ev.A, {}),
                                                        (0, t.jsx)(nW, { isVisible: eE, showLoadingSpinner: H }),
                                                        (0, t.jsx)(n5, { className: tY.toast }),
                                                        (0, t.jsx)(t0, {
                                                            user: l,
                                                            currentUser: n,
                                                            guildId: z,
                                                            channelId: u,
                                                            displayProfile: eS,
                                                            nickname: eT,
                                                            originGuildId: o,
                                                            hasEntered: k === p.ip.ENTERED,
                                                            customStatusPrompt: R,
                                                            onClose: D,
                                                            avatarDecorationOverride: eo,
                                                            avatarOverride: ed,
                                                            bannerOverride: eu,
                                                            profileEffectOverride: ec,
                                                            profileFrame: eD,
                                                            allowEditing: el,
                                                            isLoading: H,
                                                        }),
                                                        (0, t.jsx)(nq.A, {
                                                            user: l,
                                                            currentUser: n,
                                                            displayProfile: eS,
                                                            guildId: z,
                                                            channelId: u,
                                                            items: eP,
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
                            (0, t.jsx)(nM.A, { userId: l.id, guildId: z, className: tY.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
