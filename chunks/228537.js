n.d(l, { A: () => ii });
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
    f = n(140735),
    m = n(707554),
    p = n(231723),
    x = n(241524),
    v = n(770178),
    h = n(80682),
    A = n(793574),
    j = n(688810),
    b = n(480335),
    I = n(31956),
    C = n(361628),
    y = n(744808),
    N = n(875741),
    E = n(915089),
    P = n(713517),
    k = n(645507),
    R = n(922590),
    S = n(821269),
    D = n(93246),
    O = n(561794),
    T = n(994500),
    _ = n(351906),
    M = n(562153),
    G = n(474090),
    L = n(183555),
    w = n(841595),
    U = n(591179),
    V = n(999291),
    F = n(101928),
    B = n(837529),
    z = n(346713),
    H = n(573648),
    W = n(941314),
    K = n(429913),
    q = n(321078),
    X = n(403362),
    Y = n(484509),
    $ = n(920601),
    Z = n(919395),
    J = n(101058),
    Q = n(696451),
    ee = n(287809),
    el = n(836602),
    en = n(996988),
    et = n(207634);
let ei = (0, o.FT)(et.T[en.d.MODAL_V2].avatarSize),
    er = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        accentColorOverride: void 0,
        profileEffectOverride: void 0,
        profileFrameOverride: void 0,
    };
var ea = n(903209);
async function es(e, l) {
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
var eo = n(716804),
    ed = n(679492),
    eu = n(718019),
    ec = n(328296),
    eg = n(915614),
    ef = n(308244),
    em = n(744753),
    ep = n(559506),
    ex = n(361311),
    ev = n(931481),
    eh = n(439053),
    eA = n(743987),
    ej = n(312381),
    eb = n(501193),
    eI = n(383448),
    eC = n(946356),
    ey = n(983495),
    eN = n(280645),
    eE = n(109112),
    eP = n(939249),
    ek = n(834730),
    eR = n(730134),
    eS = n(169869),
    eD = n(837057),
    eO = n(310419),
    eT = n(773669),
    e_ = n(889227),
    eM = n(967198),
    eG = n(488995),
    eL = n(375708),
    ew = n(985176);
function eU(e) {
    let { applicationRoleConnection: l, locale: n, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, eS.VW)(l, n);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: ew.k_,
                children:
                    null != l.application.bot
                        ? (0, t.jsx)(eR.A, { user: new e_.A(l.application.bot), size: o._3.SIZE_16 })
                        : (0, t.jsx)(eE._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: ew.Hd,
                children: [
                    (0, t.jsxs)(eP.D, {
                        className: ew.OB,
                        onClick: () => {
                            i?.(),
                                (0, eD.transitionToGlobalDiscovery)({
                                    tab: eG.GlobalDiscoveryTab.APPS,
                                    applicationId: l.application.id,
                                    newSessionState: {
                                        entrypoint: { name: eO.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                });
                        },
                        children: [
                            null != l.platform_name
                                ? (0, t.jsx)(ek.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_name,
                                  })
                                : null,
                            null != l.platform_username
                                ? (0, t.jsx)(ek.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_username,
                                  })
                                : null,
                            (0, t.jsx)(ek.E, {
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
function eV(e) {
    let { applicationRoleConnections: l, className: n, onClose: i } = e,
        { trackUserProfileAction: r } = (0, L.NJ)(),
        o = (0, s.bG)([eT.default], () => eT.default.locale),
        d = (0, s.bG)([eM.A], () => eM.A.getGuildId());
    return 0 === l.length
        ? null
        : (0, t.jsx)("ul", {
              className: a()(ew.kL, n),
              children: l.map((e, l) =>
                  (0, t.jsx)(
                      "li",
                      {
                          className: ew.FI,
                          children: (0, t.jsx)(eU, {
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
var eF = n(982168),
    eB = n(722868),
    ez = n(822775),
    eH = n(982985),
    eW = n(700174),
    eK = n(34188),
    eq = n(859040),
    eX = n(23722),
    eY = n(993401);
function e$(e) {
    let { onClose: l, ...n } = e,
        { analyticsLocations: i, newestAnalyticsLocation: r } = (0, j.Ay)(),
        a = (0, eX.A)(() => {
            (0, eq.Cz)({ analyticsLocations: i, analyticsSource: r }), l?.();
        });
    return (0, t.jsx)(eY.q3, {
        action: "VISIT_SHOP",
        icon: eK.U,
        tooltipText: eL.intl.string(eL.t.b2d0N0),
        onClick: a,
        ...n,
    });
}
var eZ = n(573355),
    eJ = n(102951),
    eQ = n(652215);
function e0(e) {
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
        g = (0, eB.A)({ user: l, guildId: r, channelId: a, displayProfile: s, onClose: d }),
        {
            gameFriends: f,
            hasOutgoingPendingGameFriends: m,
            hasIncomingPendingGameFriends: p,
        } = (0, eJ.J)({ userId: l.id }),
        x = f.length > 0 || m || p;
    return o === eQ.eA$.BLOCKED
        ? null
        : l.id === n.id
          ? u
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(eH.e, { userId: l.id, variant: "primary", disabled: !0 }),
                        (0, t.jsx)(e$, { onClose: d }),
                        (0, t.jsx)(eW.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(ez.A, { user: l, guildId: i, onClose: d }),
                        (0, t.jsx)(e$, { onClose: d }),
                        (0, t.jsx)(eW.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
          : l.bot
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)(eH.e, { userId: l.id, onClose: eF.A.popAll, autoFocus: !0 }),
                      (0, t.jsx)(eW.Zt, { user: l, guildId: i, viewProfileItem: g }),
                  ],
              })
            : o === eQ.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(eH.e, { userId: l.id, onClose: eF.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(eW.Zt, { user: l, guildId: i }),
                    ],
                })
              : o === eQ.eA$.FRIEND || o === eQ.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(eH.e, { userId: l.id, onClose: eF.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(eZ.Ef, { user: l, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(eW.Zt, { user: l, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === eQ.eA$.NONE && x
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(eH.e, { userId: l.id, onClose: eF.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(eZ.ES, {
                                user: l,
                                analyticsLocation: c,
                                gameFriends: f,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: m,
                            }),
                            (0, t.jsx)(eW.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    })
                  : (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(eZ.cO, {
                                variant: "primary",
                                userId: l.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, t.jsx)(eH.l, { userId: l.id, onClose: eF.A.popAll, variant: "secondary" }),
                            (0, t.jsx)(eW.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    });
}
var e1 = n(463156),
    e7 = n(990078),
    e3 = n(349288),
    e2 = n(509434),
    e9 = n(307301),
    e8 = n(228366),
    e5 = n(95561),
    e6 = n(874490),
    e4 = n(370480),
    le = n(968309),
    ll = n(174459),
    ln = n(486020),
    lt = n(123917),
    li = n(783419);
let lr = "User Profile Modal V2";
function la(e) {
    let l = H.A.get(e);
    (0, le.A)({ platformType: l.type, location: lr }),
        ll.default.track(eQ.HAw.ACCOUNT_LINK_STEP, {
            previous_step: lr,
            current_step: "desktop oauth",
            platform_type: l.type,
        });
}
function ls() {
    e8.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: la, stackingBehavior: "stack" });
}
function lo(e) {
    let { account: l, locale: n, userId: i } = e,
        r = l.metadata ?? {},
        a = (0, e4.An)(r[li.pK.CREATED_AT], n),
        s = H.A.get((0, e6.ML)(l.type));
    return (0, t.jsx)(lu, {
        renderAccountName: () => {
            let e = s?.getPlatformUserUrl?.(l);
            return null == e
                ? (0, t.jsx)(e7.m, {
                      overflowOnly: !0,
                      text: l.name,
                      children: (0, t.jsx)(ek.E, { variant: "text-sm/normal", className: ew.GW, children: l.name }),
                  })
                : (0, t.jsx)(e3.Anchor, {
                      href: e,
                      className: ew.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${l.name}, ${eL.intl.string(eL.t.q5jLJB)}`
                              : `${l.name}, ${eL.intl.string(eL.t.q5jLJB)}`,
                      onClick: (n) => {
                          (0, e5.zV)(eQ.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: i }),
                              (0, lt.h)({ href: e, trusted: s?.type !== eQ.fg2.DOMAIN }, n);
                      },
                      children: (0, t.jsxs)("div", {
                          className: ew.vi,
                          children: [
                              (0, t.jsx)(e7.m, {
                                  overflowOnly: !0,
                                  text: l.name,
                                  children: (0, t.jsx)(ek.E, {
                                      variant: "text-sm/normal",
                                      className: ew.GW,
                                      children: l.name,
                                  }),
                              }),
                              (0, t.jsx)(e2.I, { size: "xs", color: "currentColor" }),
                          ],
                      }),
                  });
        },
        renderMetadata: () =>
            l.type === eQ.fg2.REDDIT
                ? (0, eS.xE)(r)
                : l.type === eQ.fg2.STEAM
                  ? (0, eS.dy)(r)
                  : l.type === eQ.fg2.BLUESKY || l.type === eQ.fg2.MASTODON || l.type === eQ.fg2.TWITTER
                    ? (0, eS.ED)(r)
                    : l.type === eQ.fg2.PAYPAL
                      ? (0, eS.gZ)(r)
                      : l.type === eQ.fg2.EBAY
                        ? (0, eS.ub)(r)
                        : l.type === eQ.fg2.TIKTOK
                          ? (0, eS.HU)(r)
                          : null,
        platformIcon: s?.icon.lightPNG,
        platformName: s?.name,
        createdAtDate: a,
    });
}
function ld(e) {
    let { identityWithApplication: l } = e,
        { identity: n, application: i } = l;
    if (null == n.profile || null == n.profile.username || null == i) return null;
    let r = ln.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(lu, {
        renderAccountName: () =>
            (0, t.jsx)(e7.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, t.jsx)(ek.E, {
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
function lu(e) {
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
            (0, t.jsx)(e7.m, {
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
                                (0, t.jsx)(ek.E, {
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
function lc(e) {
    let { connections: l, applicationIdentities: n, userId: i, allowEditing: r, className: o } = e,
        d = (0, s.bG)([eT.default], () => eT.default.locale);
    if (!r && 0 === l.length && 0 === n.length) return null;
    let u = l.length > 0 || n.length > 0;
    return (0, t.jsxs)("div", {
        className: a()(ew.kL, o),
        children: [
            u &&
                (0, t.jsxs)("ul", {
                    className: ew.V,
                    children: [
                        l.map((e) => (0, t.jsx)(lo, { account: e, userId: i, locale: d }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, t.jsx)(ld, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, t.jsxs)(eP.D, {
                    className: ew.qG,
                    onClick: ls,
                    children: [
                        (0, t.jsx)(e9.j, { size: "sm", color: "currentColor" }),
                        (0, t.jsx)(ek.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: eL.intl.string(eL.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var lg = n(922139),
    lf = n(193885),
    lm = n(661531),
    lp = n(408278),
    lx = n(890377),
    lv = n(789645),
    lh = n(534514),
    lA = n(821609),
    lj = n(403581),
    lb = n(194261),
    lI = n(689175),
    lC = n(517461),
    ly = n(13875),
    lN = n(835071),
    lE = n(428262),
    lP = n(487233),
    lk = n(120386),
    lR = n(317097),
    lS = n(602853),
    lD = n(922016),
    lO = n(508274),
    lT = n(654107),
    l_ = n(84540),
    lM = n(930349);
function lG(e) {
    let { user: l, disabled: n = !1 } = e,
        r = i.useRef(null),
        a = (0, lS.r)(lm.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, lT.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([el.A, w.A], () => ({
            pendingAccentColor: el.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: w.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, lR.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, l_.p)({ accentColor: e }), []);
    return (0, t.jsx)(lD.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(lO.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(lM.V, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                accessibleLabel: eL.intl.string(eL.t["/X3fkf"]),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, t.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, lR.Hl)(c) } }),
            }),
    });
}
var lL = n(450373),
    lw = n(252732),
    lU = n(339984),
    lV = n(111242);
function lF(e) {
    let { backgroundColor: l } = e;
    return (0, t.jsx)("div", { className: lV.o, style: { backgroundColor: l } });
}
function lB(e) {
    let { src: l } = e;
    return (0, t.jsx)("img", { src: l, alt: "", className: lV._ });
}
function lz(e) {
    let { displayProfile: l, pendingBanner: n, shouldAnimate: i } = e,
        r = (0, lS.r)(lm.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = l?.primaryColor ?? (0, lR.LX)(r),
        { hex: s } = (0, lL.A)(a),
        o = l?.getPreviewBanner(n, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(lB, { src: o }) : (0, t.jsx)(lF, { backgroundColor: s });
}
function lH(e) {
    let { userId: l, guildId: n, disabled: i } = e,
        { newestAnalyticsLocation: r } = (0, j.Ay)(),
        a = null != n,
        o = (0, V.Ay)(l, n),
        d = (0, s.bG)([el.A], () => el.A.getPendingChanges(n ?? void 0).pendingBanner),
        u = (0, s.bG)([ee.default], () => ee.default.getCurrentUser()?.banner),
        c = (0, s.bG)([w.A], () =>
            null != n ? w.A.getGuildMemberProfile(l, n)?.banner : w.A.getUserProfile(l)?.banner,
        ),
        g = null === d,
        f = a && (o?.isUsingGuildMemberBanner() ?? !1),
        m = g && a && !f ? void 0 : d,
        p = (0, Z.Ac)(d, c),
        x = a && null != u,
        v = p
            ? {
                  onClick: () => (0, lw.rM)(null, c, (e) => (0, l_.p)({ guildId: n ?? void 0, banner: e })),
                  type: x ? "reset" : "remove",
                  accessibleLabel: eL.intl.string(x ? eL.t.jHlJNS : eL.t.tT9n7D),
              }
            : void 0;
    return (0, t.jsx)(lM.V, {
        affordance: v,
        variant: "square",
        onClick: () =>
            (0, lw.XD)({
                uploadType: lU.HL.BANNER,
                analyticsSource: r,
                guildId: n ?? void 0,
                stackingBehavior: "stack",
            }),
        accessibleLabel: eL.intl.string(eL.t.N0bC3P),
        "aria-haspopup": "dialog",
        disabled: i,
        showOverlayOnHover: !0,
        renderPreview: (e) => (0, t.jsx)(lz, { displayProfile: o, pendingBanner: m, shouldAnimate: e }),
    });
}
var lW = n(922301),
    lK = n(368919),
    lq = n(259065),
    lX = n(283607);
let lY = "heading-lg/bold";
function l$(e) {
    let { displayName: l, stylesPreview: n, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: lX.M,
        children:
            null != n
                ? (0, t.jsx)(ek.E, {
                      variant: lY,
                      children: (0, t.jsx)(lK.A, {
                          userName: l,
                          displayNameStyles: n,
                          effectDisplayType: i ? lW.G.ANIMATED : lW.G.STATIC,
                          textClassName: lX.W,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, t.jsx)(ek.E, { variant: lY, className: lX.W, color: "text-muted", children: l }),
    });
}
function lZ(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: a } = (0, j.Ay)(),
        o = null != n,
        d = (0, s.bG)([Q.Ay], () => (null != n ? (Q.Ay.getMember(n, l.id)?.nick ?? null) : null)),
        u = (0, s.bG)([ee.default], () => ee.default.getCurrentUser()?.globalName ?? null),
        c = (0, s.bG)([el.A], () => el.A.getPendingChanges(null).pendingGlobalName),
        g = (0, s.bG)([el.A], () => el.A.getPendingChanges(n ?? null).pendingNickname),
        {
            userDisplayNameStyles: f,
            guildDisplayNameStyles: m,
            pendingDisplayNameStyles: p,
        } = (0, Z.B0)(l, n ?? void 0),
        x = o ? m : f,
        v = void 0 !== p,
        h = null === p,
        A = o && null != f,
        b = (0, Z.lw)({ pendingValue: p, userValue: f, guildValue: m, guildId: n ?? void 0 }),
        I = (e) => (null == e || "" === e ? void 0 : e),
        C = void 0 !== c ? c : u,
        y = o ? (I(void 0 !== g ? g : d) ?? I(C) ?? l.username) : (I(C) ?? l.username),
        N =
            null != b && (v ? null != p : null != x)
                ? {
                      onClick: () => (0, l_.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: A ? "reset" : "remove",
                      accessibleLabel: eL.intl.string(A ? eL.t.en3ogK : eL.t["Wqmi/h"]),
                  }
                : void 0,
        E = i.useCallback(() => {
            (0, lq.L)({ analyticsLocations: a, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [a, n]);
    return (0, t.jsx)(lM.V, {
        affordance: (!h && (v || null != x)) || A ? N : "add",
        variant: "bar",
        onClick: E,
        accessibleLabel: eL.intl.string(eL.t.XJ4oOO),
        "aria-haspopup": "dialog",
        renderPreview: (e) => (0, t.jsx)(l$, { stylesPreview: b, displayName: y, shouldAnimate: e }),
        disabled: r,
    });
}
var lJ = n(473219),
    lQ = n(366010),
    l0 = n(736653),
    l1 = n(617061),
    l7 = n(203632),
    l3 = n(71393),
    l2 = n(466681);
let l9 =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    l8 =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function l5(e) {
    let { effect: l, shouldAnimate: n } = e,
        i = (0, l0.Ay)(),
        r = (0, lQ.M)(i) ? l9 : l8;
    return (0, t.jsxs)("div", {
        className: l2.ti,
        "aria-hidden": !0,
        children: [
            (0, t.jsx)("img", { src: r, alt: "", className: l2.QQ }),
            l?.skuId != null &&
                (0, t.jsx)(b.A, {
                    skuId: l.skuId,
                    autoPlay: !1,
                    resetOnHover: !0,
                    restartMethod: l7.HL.FromStart,
                    isHovering: n,
                    useOpacityOnHover: !1,
                    useThumbnail: !0,
                    delayIntro: !1,
                }),
        ],
    });
}
function l6(e) {
    let { user: l, guildId: n, disabled: r, variant: a = "full-height-bar" } = e,
        { analyticsLocations: o } = (0, j.Ay)(),
        d = null != n,
        u = (0, s.bG)([l3.A], () => (null != n ? l3.A.getGuild(n) : null)),
        c = (0, Z.N2)({ user: l }),
        g = (0, Z.N2)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileEffect: f } = (0, Z.nZ)(n ?? void 0),
        m = void 0 !== f,
        p = null === f || (!m && null == g),
        x = d && null != c,
        v = (0, Z.lw)({ pendingValue: f, userValue: c, guildValue: g, guildId: n ?? void 0 }),
        h =
            null != v && (m ? null != f : null != g)
                ? {
                      onClick: () => (0, l_.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eL.intl.string(x ? eL.t["SQy/Po"] : eL.t.uMuafO),
                  }
                : void 0,
        A = i.useCallback(() => {
            (0, l1.W)({
                analyticsLocations: o,
                guild: u ?? void 0,
                initialSelectedEffect: v ?? void 0,
                stackingBehavior: "stack",
            });
        }, [o, u, v]);
    return (0, t.jsx)(lM.V, {
        affordance: p && !x ? "add" : h,
        variant: a,
        onClick: A,
        accessibleLabel: eL.intl.string(eL.t["/dRfCf"]),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) => (0, t.jsx)(l5, { effect: v, shouldAnimate: e }),
    });
}
var l4 = n(515727),
    ne = n(84391);
let nl = (e) => {
    let { responsive: l } = e;
    return !0 !== l;
};
function nn(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: o } = (0, j.Ay)(),
        d = (0, l0.Ay)(),
        u = (0, lQ.M)(d) ? l9 : l8,
        c = null != n,
        g = (0, s.bG)([l3.A], () => (null != n ? l3.A.getGuild(n) : null)),
        f = (0, Z.Xf)({ user: l }),
        m = (0, Z.Xf)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileFrame: p } = (0, Z.Tu)(n ?? void 0),
        x = void 0 !== p,
        v = null === p || (!x && null == m),
        h = c && null != f,
        A = (0, Z.lw)({ pendingValue: p, userValue: f, guildValue: m, guildId: n ?? void 0 }),
        b = (0, C.A)(A?.skuId, "EditableTileProfileFrameButton"),
        { profileFrameStyle: I, profileFrameClassName: E } = (0, N.A)(b?.skuId),
        P =
            null != A && (x ? null != p : null != m)
                ? {
                      onClick: () => (0, l_.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: h ? "reset" : "remove",
                      accessibleLabel: eL.intl.string(h ? eL.t.j6hZyM : eL.t.nQBruk),
                  }
                : void 0,
        k = i.useCallback(() => {
            (0, l4.w)({
                analyticsLocations: o,
                guild: g ?? void 0,
                initialSelectedProfileFrame: b,
                stackingBehavior: "stack",
            });
        }, [o, g, b]);
    return (0, t.jsx)(lM.V, {
        affordance: v && !h ? "add" : P,
        variant: "square",
        onClick: k,
        accessibleLabel: eL.intl.string(eL.t["9/hmle"]),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: () =>
            (0, t.jsxs)("div", {
                className: a()(ne.ti, { [ne.yT]: null == b }),
                children: [
                    (0, t.jsx)("img", { src: u, alt: "", className: ne.QQ, draggable: !1 }),
                    null != b &&
                        (0, t.jsx)("div", {
                            className: a()(ne.hm, E),
                            style: I,
                            children: (0, t.jsx)(y.A, { frame: b, filterLayer: nl }),
                        }),
                ],
            }),
    });
}
var nt = n(33851),
    ni = n.n(nt),
    nr = n(684732),
    na = n(458217),
    ns = n(298387);
function no(e) {
    let { color: l, suggestedColors: n, disabled: r, ariaLabel: s, onSelect: o, buttonRef: d } = e,
        u = i.useRef(null),
        c = d ?? u,
        g = (0, lR.Hl)(l),
        f = (0, lR.bJ)(l, 0xffffff) < na.Tr.NonText;
    return (0, t.jsx)(lD.Y, {
        targetElementRef: c,
        renderPopout: (e) => (0, t.jsx)(lO.VN, { ...e, value: l, onChange: o, suggestedColors: n, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: l, ...n } = e;
            return (0, t.jsx)(eP.D, {
                ...n,
                innerRef: c,
                className: ns.Dh,
                onClick: r ? void 0 : l,
                "aria-label": s,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)("div", { className: a()(ns.Hy, { [ns.rY]: f }), style: { backgroundColor: g } }),
            });
        },
    });
}
function nd(e) {
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
        c = (0, lR.Hl)(l),
        g = (0, lR.Hl)(n),
        f = `linear-gradient(to bottom, ${c}, ${g})`,
        m = eL.intl.formatToPlainString(eL.t.FquTfm, { colorLabel: c }),
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
    return (0, t.jsx)(lM.Y, {
        variant: "square",
        disabled: o,
        deleteButton: x,
        children: (0, t.jsxs)("div", {
            className: ns.D7,
            style: { background: f },
            children: [
                (0, t.jsx)(no, { color: l, suggestedColors: s, ariaLabel: m, onSelect: r, disabled: o, buttonRef: u }),
                (0, t.jsx)(no, { color: n, suggestedColors: s, ariaLabel: p, onSelect: a, disabled: o }),
            ],
        }),
    });
}
function nu(e) {
    let { user: l, guildId: n, disabled: r = !1 } = e,
        a = (0, V.Ay)(l.id, n),
        {
            pendingThemeColors: o,
            pendingAvatar: d,
            savedThemeColors: u,
        } = (0, s.cf)([el.A, w.A], () => {
            let e = el.A.getPendingChanges(n ?? void 0);
            return {
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
                savedThemeColors: null != n ? w.A.getGuildMemberProfile(l.id, n)?.themeColors : void 0,
            };
        }),
        c = (0, J.V7)({ userId: l.id, image: d }),
        { primaryColor: g, secondaryColor: f } = (0, F.A)({
            user: l,
            displayProfile: a,
            pendingThemeColors: o,
            pendingAvatarSrc: c ?? void 0,
            isPreview: !0,
        }),
        m = (0, lS.r)(lm.A.unsafe_rawColors.PRIMARY_530).hex(),
        p = null != c ? c : l.getAvatarURL(n ?? void 0, 80),
        x = (0, lT.rh)(p, m, !1),
        v = i.useCallback(
            (e) => {
                let l = ni()(e, a?.themeColors);
                (0, l_.p)({ guildId: n ?? void 0, themeColors: l ? void 0 : e });
            },
            [a?.themeColors, n],
        ),
        h =
            null != n && (0, nr.l)(o, u)
                ? {
                      onClick: () => (0, l_.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eL.intl.string(eL.t["L+GmoR"]),
                  }
                : void 0;
    return null == g || null == f
        ? null
        : (0, t.jsx)(nd, {
              primaryColor: g,
              secondaryColor: f,
              onSelectPrimaryColor: (e) => {
                  e !== g && v([e, f]);
              },
              onSelectSecondaryColor: (e) => {
                  e !== f && v([g, e]);
              },
              suggestedColors: x,
              disabled: r,
              deleteButton: h,
          });
}
var nc = n(315629),
    ng = n(783420),
    nf = n(788868),
    nm = n(235684);
function np() {
    return (0, t.jsx)(ng.A, {
        subscriptionTier: nf.pe.TIER_2,
        children: (e) => {
            let { onClick: l } = e;
            return (0, t.jsxs)(nc.h, {
                color: "nitro-pink",
                className: nm.U,
                children: [
                    (0, t.jsx)(ek.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: eL.intl.format(eL.t.TmfgI2, { onClick: (e) => l(e) }),
                    }),
                    (0, t.jsx)(lA.$, {
                        variant: "expressive",
                        size: "md",
                        icon: lj.t,
                        text: eL.intl.string(eL.t.pj0XBN),
                        onClick: l,
                        fullWidth: !0,
                    }),
                ],
            });
        },
    });
}
var nx = n(55619),
    nv = n(942308);
function nh() {
    return (0, t.jsxs)("div", {
        className: nv.k,
        children: [
            (0, t.jsx)(ek.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eL.intl.string(eL.t.JFY17v),
            }),
            (0, t.jsx)(lA.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eL.intl.string(eL.t.R9GHya),
                onClick: () => nx.A.setEnabled(!1),
            }),
        ],
    });
}
var nA = n(847374),
    nj = n(111159),
    nb = n(548118),
    nI = n(711014),
    nC = n(540637),
    ny = n(801461),
    nN = n(44482),
    nE = n(844222),
    nP = n(561392),
    nk = n(716263),
    nR = n(15626),
    nS = n(930856);
function nD(e) {
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
            renderListItem: m,
            children: p,
        } = e,
        {
            isOpen: x,
            setIsOpen: v,
            refs: h,
            floatingStyles: A,
            getReferenceProps: j,
            getFloatingProps: b,
            transitionStyles: I,
        } = (function () {
            let { reducedMotion: e } = i.useContext(nE.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, nP.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, nk.DL)(o, {
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
        { setFloating: C } = h,
        y = i.useContext(nR._),
        N = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        R = i.useRef(null),
        [S, D] = i.useState(null),
        O = null != S ? (0, ny.ZN)(P, S) : void 0,
        T = i.useRef(!1),
        _ = i.useRef(!1),
        M = i.useMemo(() => l.filter((e) => (0, ny.fI)(e.value, [n])), [n, l]),
        G = i.useCallback(() => {
            u || v(!x);
        }, [u, v, x]),
        L = i.useCallback(
            (e) => {
                x && 0 === e.button && e.preventDefault();
            },
            [x],
        ),
        w = i.useCallback(() => {
            v(!1), k.current?.focus();
        }, [v]),
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
                    x && v(!1);
                }
            },
            [x, S, l, r, v],
        ),
        V = i.useCallback(
            (e) => {
                if (u) return;
                let l = e[0];
                null != l && (r(l.value), w());
            },
            [u, r, w],
        ),
        { activeIndex: F, handleKeyDown: B } = (0, nC.l)(!0, l),
        z = i.useRef(null);
    i.useEffect(() => {
        let e = F !== z.current;
        (z.current = F), null != F && e && (D(F), x || ((T.current = !0), v(!0)));
    }, [F, x, v]);
    let H = i.useCallback(
            (e) => {
                if (u) return;
                let n = l.length;
                switch (e.key) {
                    case "ArrowDown":
                    case "PageDown": {
                        let l = "PageDown" === e.key ? 10 : 1;
                        if (0 === n) return;
                        if ((e.preventDefault(), !x || e.altKey)) {
                            x || v(!0);
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
                        if (!x) return void v(!0);
                        D((e) => (null === e ? 0 : Math.max(e - t, 0)));
                        break;
                    }
                    case "Enter":
                    case " ":
                        if ((e.preventDefault(), e.stopPropagation(), !x)) return void v(!0);
                        if (null == S || S > n - 1) return;
                        {
                            let e = l[S];
                            if (null == e || !0 === e.disabled) return;
                            V([e]);
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === n)) return;
                        D(0), x || ((T.current = !0), v(!0));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === n)) return;
                        D(n - 1), x || ((T.current = !0), v(!0));
                        break;
                    case "Tab":
                        if (x && null != S) {
                            let e = l[S];
                            null != e && !0 !== e.disabled && r(e.value);
                        }
                        (_.current = !0), v(!1);
                        break;
                    case "Escape":
                        x && (e.preventDefault(), e.stopPropagation(), w());
                        break;
                    default:
                        B(e);
                }
            },
            [u, x, l, S, V, w, r, v, B],
        ),
        W = Math.max(
            l.findIndex((e) => e.id === M[M.length - 1]?.id),
            0,
        ),
        K = i.useRef(!1);
    i.useEffect(() => {
        c || !x || K.current
            ? x || ((K.current = !1), D(null), (T.current = !1))
            : ((K.current = !0), T.current || D(l.length > 0 ? W : null), (T.current = !1), k.current?.focus());
    }, [c, x, W, l.length]);
    let q = {
        id: E,
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-controls": x ? P : void 0,
        "aria-expanded": x,
        "aria-activedescendant": O,
        "aria-disabled": !!u || void 0,
        "aria-labelledby": null != s ? `${N} ${E}` : void 0,
        "aria-errormessage": y?.errorMessageId,
        "aria-invalid": y?.errorMessageId != null || void 0,
        "aria-describedby": y?.describedById,
        onClick: G,
        onMouseDown: L,
        onKeyDown: H,
        onBlur: U,
    };
    return (0, t.jsxs)("div", {
        ref: (e) => {
            (R.current = e), h.setReference(e);
        },
        className: o,
        ...j(),
        children: [
            null != s && (0, t.jsx)(f.A, { tag: "label", id: N, children: s }),
            p({ buttonRef: k, selectButtonProps: q }),
            !u &&
                x &&
                (0, t.jsx)("div", {
                    ref: C,
                    className: a()(nS.S_, d),
                    ...b(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(nC.q, {
                        id: P,
                        tabIndex: -1,
                        items: l,
                        selectionMode: "single",
                        selectedItems: M,
                        onSelectionChange: V,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: S,
                        renderListItem: (e) => (null != m ? m(e) : (0, t.jsx)(nN.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var nO = n(138325);
let nT = "MAIN_PROFILE";
function n_(e) {
    let { guild: l } = e;
    return (0, t.jsx)(nb.Ay, { className: nO.$f, guild: l, size: nb.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function nM(e) {
    let { leading: l, label: n, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(eP.D, {
        innerRef: r,
        className: a()(nO.L5, { [nO.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            l,
            (0, t.jsx)(ek.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: nO.v9,
                children: n,
            }),
            (0, t.jsx)(nA.a, {
                className: nO.u4,
                size: "sm",
                color: !0 === i ? lm.A.colors.ICON_MUTED : lm.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function nG(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([nI.Ay], () => nI.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([l3.A], () => l3.A.getGuilds()),
        c = (0, s.bG)([eM.A], () => {
            let e = eM.A.getGuildId();
            return null == e || el._.has(e) ? null : e;
        }),
        g = i.useMemo(() => {
            let e = {
                    id: nT,
                    label: eL.intl.string(eL.t["2p07FR"]),
                    value: nT,
                    leading: (0, t.jsx)(nj.p, { size: "refresh_sm", color: lm.A.colors.ICON_DEFAULT }),
                },
                l = n ?? c,
                i = d
                    .map((e) => {
                        if (e === l) return null;
                        let n = u[e];
                        return null == n
                            ? null
                            : { id: n.id, label: n.name, value: n.id, leading: (0, t.jsx)(n_, { guild: n }) };
                    })
                    .filter(X.Vq),
                r = null != l ? u[l] : null;
            return null == r
                ? [e, ...i]
                : [e, { id: r.id, label: r.name, value: r.id, leading: (0, t.jsx)(n_, { guild: r }) }, ...i];
        }, [d, u, n, c]),
        f = l ?? nT,
        m = g.find((e) => e.value === f) ?? g[0],
        p = i.useCallback(
            (e) => {
                r(e === nT ? null : e);
            },
            [r],
        );
    return (0, t.jsx)(nD, {
        className: nO.kL,
        label: eL.intl.string(eL.t.rki38K),
        listboxClassName: nO.yt,
        options: g,
        value: f,
        onSelectionChange: p,
        loading: a,
        disabled: o,
        children: (e) =>
            (0, t.jsx)(nM, { leading: m.value === nT ? null : m.leading, label: m.label, disabled: o, ...e }),
    });
}
var nL = n(809467);
let nw = "profile-modal-editing-panel",
    nU = "profile-modal-editing-panel-heading";
function nV(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(e7.m, {
        text: eL.intl.string(eL.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(eP.D, {
            innerRef: i,
            "aria-label": eL.intl.string(eL.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": nw,
            className: a()(nL.eg, n),
            onClick: l,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(lf.V, { size: "sm", color: lm.A.colors.ICON_STRONG }),
        }),
    });
}
function nF(e) {
    let { onClick: l, className: n, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(e7.m, {
            text: eL.intl.string(eL.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(lp.K, {
                buttonRef: i,
                "aria-label": eL.intl.string(eL.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": nw,
                icon: lf.V,
                onClick: l,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function nB(e) {
    let { onClick: l, innerRef: n } = e;
    return (0, t.jsx)(e7.m, {
        text: eL.intl.string(eL.t["l/A351"]),
        ariaHidden: !0,
        children: (0, t.jsx)(eP.D, {
            innerRef: n,
            className: nL.cS,
            "aria-label": eL.intl.string(eL.t["l/A351"]),
            onClick: l,
            "aria-controls": nw,
            "aria-expanded": !0,
            children: (0, t.jsx)(lx.V, { size: "md", color: "currentColor" }),
        }),
    });
}
function nz() {
    let [e, l] = (0, lC.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: nL.X6,
              children: [
                  (0, t.jsx)(ek.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eL.intl.string(eL.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(eP.D, {
                      "aria-label": eL.intl.string(eL.t.rSe9ra),
                      className: nL.TD,
                      onClick: () => l(!0),
                      children: (0, t.jsx)(lv.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function nH() {
    let e = () => {
        (0, lN.K)({ stackingBehavior: "stack" });
    };
    return (0, t.jsxs)("div", {
        className: nL.eW,
        children: [
            (0, t.jsxs)("div", {
                className: nL.tm,
                children: [
                    (0, t.jsx)(lh.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: eL.intl.string(eL.t.bO0TOe),
                    }),
                    (0, t.jsx)(ek.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: eL.intl.format(eL.t["3PujdE"], { onClick: e }),
                    }),
                ],
            }),
            (0, t.jsx)(lA.$, {
                variant: "expressive",
                size: "sm",
                icon: lj.t,
                text: eL.intl.string(eL.t["7IWwak"]),
                onClick: e,
                fullWidth: !0,
            }),
            (0, t.jsx)("div", {
                className: nL.D0,
                children: (0, t.jsx)("div", { className: nL.ZN, children: (0, t.jsx)(lb.X, { size: "xs" }) }),
            }),
        ],
    });
}
function nW() {
    return (0, t.jsx)(ek.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: nL.BJ,
        "aria-hidden": !0,
        children: eL.intl.format(eL.t.kYv9DM, {
            nitroIconHook: () => (0, t.jsx)(lj.t, { size: "xxs", color: "currentColor", className: nL.qp }),
        }),
    });
}
function nK(e) {
    let { heading: l, children: n, disabled: i = !1, showNitroIcon: r = !1 } = e;
    return (0, t.jsxs)("div", {
        className: nL.Os,
        children: [
            (0, t.jsxs)("div", {
                className: nL.AM,
                children: [
                    (0, t.jsx)(lh.D, {
                        className: nL.i_,
                        variant: "text-sm/medium",
                        color: i ? "text-muted" : "text-strong",
                        children: l,
                    }),
                    r &&
                        (0, t.jsx)(e7.m, {
                            text: eL.intl.string(eL.t["5AFxuK"]),
                            shouldShow: !i,
                            ariaHidden: !0,
                            children: (0, t.jsx)(lj.t, {
                                className: nL.l3,
                                size: "xs",
                                color: i ? lm.A.colors.ICON_MUTED : lm.A.colors.ICON_STRONG,
                                "aria-hidden": !0,
                            }),
                        }),
                ],
            }),
            n,
        ],
    });
}
function nq(e) {
    let { isDismissed: l } = e;
    return (0, d.p)(!l, {
        initial: { opacity: 1, y: 0 },
        from: { opacity: 0, y: 48 },
        enter: { opacity: 1, y: 0, config: { tension: 200, friction: 25 } },
        leave: { opacity: 0, y: 48, config: { tension: 300, friction: 25 } },
    })((e, l) =>
        l ? (0, t.jsx)(lg.animated.div, { className: nL.HT, style: e, children: (0, t.jsx)(np, {}) }) : null,
    );
}
function nX(e) {
    let {
            selectedGuildId: l,
            originGuildId: n,
            onSelectGuildId: r,
            isLoading: o = !1,
            onClose: d,
            className: u,
            collapseButtonRef: c,
        } = e,
        g = (0, s.bG)([ee.default], () => ee.default.getCurrentUser()),
        p = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        x = (0, ly.sk)("UserProfileModalV2EditingPanel"),
        v = null != l,
        h = null != g && lE.Ay.canUsePremiumProfileCustomization(g),
        A = !h && !v,
        j = v && !h,
        b = (0, eX.A)(r),
        I = i.useRef(null),
        {
            isUpsellDismissed: C,
            handleScrollDismiss: y,
            shouldAddUpsellSafePadding: N,
        } = (function (e) {
            let { scrollerRef: l, canShowUpsell: n } = e,
                [t, r] = i.useState("pending-measurement"),
                [a, s] = i.useState(!1);
            i.useLayoutEffect(() => {
                if (!n) return void r("pending-measurement");
                let e = l.current?.getScrollerNode();
                null == e || (s(!1), r(e.scrollHeight - e.clientHeight >= 86 ? "dismiss-on-scroll" : "safe-padding"));
            }, [l, n]);
            let o = i.useCallback(
                (e) => {
                    if ("dismiss-on-scroll" !== t) return;
                    let { scrollTop: l } = e.currentTarget;
                    !a && l >= 86 ? s(!0) : a && l <= 43 && s(!1);
                },
                [t, a],
            );
            return {
                isUpsellDismissed: a,
                handleScrollDismiss: o,
                shouldAddUpsellSafePadding: "safe-padding" === t && n,
            };
        })({ scrollerRef: I, canShowUpsell: A });
    return null == g
        ? null
        : (0, t.jsxs)("aside", {
              id: nw,
              "aria-labelledby": nU,
              className: a()(nL.nd, { [nL.VU]: j && !p }, u),
              "aria-busy": o,
              children: [
                  (0, t.jsx)(f.A, { children: (0, t.jsx)(m.H, { id: nU, children: eL.intl.string(eL.t["L+ch00"]) }) }),
                  (0, t.jsxs)("div", {
                      className: nL.wx,
                      children: [
                          (0, t.jsx)(nB, { innerRef: c, onClick: d }),
                          (0, t.jsx)(nG, {
                              selectedGuildId: l ?? null,
                              originGuildId: n,
                              onChange: b,
                              loading: o,
                              disabled: p,
                          }),
                      ],
                  }),
                  p
                      ? (0, t.jsx)(nh, {})
                      : (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(m.F, {
                                    children: (0, t.jsxs)(lI.zC, {
                                        ref: I,
                                        className: a()(nL.XG, { [nL.uH]: N }),
                                        onScroll: y,
                                        children: [
                                            v && (h ? (0, t.jsx)(nz, {}) : (0, t.jsx)(nH, {})),
                                            (h || v) && (0, t.jsx)(nW, {}),
                                            (0, t.jsx)(nK, {
                                                heading: eL.intl.string(eL.t.x5CoXR),
                                                disabled: o || j,
                                                children: (0, t.jsx)(lJ.A, { user: g, guildId: l, disabled: o || j }),
                                            }),
                                            (0, t.jsxs)(nK, {
                                                heading: eL.intl.string(eL.t["50Nwpc"]),
                                                disabled: o || j,
                                                children: [
                                                    (0, t.jsx)(lP.A, { user: g, guildId: l, disabled: o || j }),
                                                    (0, t.jsx)(lk.A, { user: g, guildId: l, disabled: o || j }),
                                                ],
                                            }),
                                            (h || v) &&
                                                (0, t.jsx)(nK, {
                                                    heading: eL.intl.string(eL.t.NEzEws),
                                                    disabled: o || j,
                                                    showNitroIcon: !0,
                                                    children: (0, t.jsx)(lZ, { user: g, guildId: l, disabled: o || j }),
                                                }),
                                            h || v
                                                ? (0, t.jsxs)(nK, {
                                                      heading: eL.intl.string(eL.t.Zenogr),
                                                      disabled: o || j,
                                                      showNitroIcon: !0,
                                                      children: [
                                                          (0, t.jsx)(nu, { user: g, guildId: l, disabled: o || !h }),
                                                          (0, t.jsx)(lH, {
                                                              userId: g.id,
                                                              guildId: l,
                                                              disabled: o || !h,
                                                          }),
                                                      ],
                                                  })
                                                : (0, t.jsx)(nK, {
                                                      heading: eL.intl.string(eL.t["/X3fkf"]),
                                                      disabled: o || j,
                                                      children: (0, t.jsx)(lG, { user: g, disabled: o }),
                                                  }),
                                            (0, t.jsxs)(nK, {
                                                heading: eL.intl.string(x ? eL.t["Vfbar/"] : eL.t.wR5wOo),
                                                disabled: o || j,
                                                children: [
                                                    (0, t.jsx)(l6, {
                                                        user: g,
                                                        guildId: l,
                                                        disabled: o || j,
                                                        variant: x ? "square" : "full-height-bar",
                                                    }),
                                                    x && (0, t.jsx)(nn, { user: g, guildId: l, disabled: o || j }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                                A && (0, t.jsx)(nq, { isDismissed: C }),
                            ],
                        }),
              ],
          });
}
var nY = n(982599),
    n$ = n(756634),
    nZ = n(83013),
    nJ = n(518477),
    nQ = n(77085);
function n0(e) {
    let { userId: l } = e,
        n = (0, eo.g)(),
        { trackUserProfileAction: i } = (0, L.NJ)();
    return (0, t.jsx)(nZ.A, {
        heading: eL.intl.string(eL.t["mQKv+v"]),
        scrollTargetId: nJ.bk.NOTE,
        children: (0, t.jsx)(n$.A, {
            userId: l,
            className: nQ.N,
            autoFocus: n === nJ.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var n1 = n(289873),
    n7 = n(778599);
function n3(e) {
    let { isVisible: l, showLoadingSpinner: n, className: i } = e;
    return (0, t.jsx)("div", {
        className: a()(n7.f, l && n7.z, i),
        children: n && (0, t.jsx)(n1.y, { type: n1.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
    });
}
var n2 = n(568602),
    n9 = n(625494);
function n8(e) {
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
                n9._.subscribe(eQ.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    n9._.unsubscribe(eQ.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, t.jsx)(n2.b, { isShaking: n, intensity: 1.4, children: l })
    );
}
var n5 = n(515054),
    n6 = n(933832),
    n4 = n(972213),
    te = n(97483),
    tl = n(765178),
    tn = n(775602),
    tt = n(606758),
    ti = n(707238),
    tr = n(861173);
let ta = {
        [nJ.jM.WIDGET_ADDED]: {
            message: eL.intl.string(eL.t.fFP1Uy),
            icon: (0, t.jsx)(n6.A, { size: "sm", color: lm.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_added",
        },
        [nJ.jM.WIDGET_REMOVED]: {
            message: eL.intl.string(eL.t.zzsK7h),
            icon: (0, t.jsx)(n6.A, { size: "sm", color: lm.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_removed",
        },
        [nJ.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eL.intl.string(eL.t["84MExs"]),
            icon: (0, t.jsx)(n4.d, { size: "sm", color: lm.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_save_generic_failure",
            type: te.Ck.FAILURE,
        },
        [nJ.jM.SOMETHING_WENT_WRONG]: {
            message: eL.intl.string(eL.t.F8FvUy),
            icon: (0, t.jsx)(n4.d, { size: "sm", color: lm.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_something_went_wrong",
            type: te.Ck.FAILURE,
        },
    },
    ts = (e) => {
        let { message: l, icon: n, type: i } = e;
        return (0, t.jsxs)("div", {
            className: a()(tr.oR, ti.oR),
            "data-type": i,
            children: [
                (0, t.jsx)("div", { className: ti.RC, children: n }),
                (0, t.jsx)(ek.E, { color: "text-strong", variant: "text-sm/semibold", children: l }),
            ],
        });
    },
    to = (e) => {
        let { className: l } = e,
            n = (0, tt.fu)(),
            r = (0, s.bG)([tn.A], () => tn.A.useReducedMotion),
            [o, u] = i.useState(!1),
            [c, g] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (u(!0), g(ta[n]), tl.O.announce(ta[n].message)) : u(!1);
        }, [n]);
        let f = (0, d.p)(
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
            i.useEffect(() => () => (0, tt.XA)(null), []),
            i.useEffect(() => {
                if (o) {
                    let e = setTimeout(() => {
                        (0, tt.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [o]),
            (0, t.jsx)(t.Fragment, {
                children: f(
                    (e, n) =>
                        n &&
                        null !== c &&
                        (0, t.jsx)(lg.animated.div, {
                            className: a()(l, ti.Jt),
                            style: e,
                            children: (0, t.jsx)(ts, { ...c }),
                        }),
                ),
            })
        );
    };
var td = n(297413),
    tu = n(878555),
    tc = n(621466),
    tg = n(219869),
    tf = n(292666),
    tm = n(539396);
function tp(e, l) {
    let [n, t] = i.useState("idle"),
        [r, a] = i.useState(e),
        o = "editing" === n,
        d = (0, s.bG)([tn.A], () => tn.A.useReducedMotion),
        u = i.useRef(null),
        c = i.useRef(null),
        g = i.useRef(null),
        f = i.useRef(!1),
        m = i.useId(),
        p = i.useCallback(() => {
            a(e), t("editing");
        }, [e]),
        x = i.useCallback(() => {
            l(r), t("done");
        }, [r, l]),
        v = i.useCallback(() => {
            t("done");
        }, []);
    i.useEffect(() => {
        "done" === n && (f.current && u.current?.focus({ preventScroll: !0 }), (f.current = !1));
    }, [n]),
        i.useEffect(() => {
            o &&
                null != c.current &&
                (g.current?.scrollIntoView({ block: "nearest", behavior: d ? "auto" : "smooth" }),
                c.current.focus({ preventScroll: !0 }),
                c.current.setSelectionRange(c.current.value.length, c.current.value.length));
        }, [o, d]);
    let h = i.useCallback(
            (e) => {
                !o || (null != g.current && (0, tc.vq)(e.relatedTarget) && g.current.contains(e.relatedTarget)) || x();
            },
            [o, x],
        ),
        A = i.useCallback(
            (e) => {
                o && "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), (f.current = !0), v());
            },
            [o, v],
        );
    return {
        isEditing: o,
        editedValue: r,
        setEditedValue: a,
        editButtonRef: u,
        inputRef: c,
        inputId: m,
        handleStartEditing: p,
        handleCommit: x,
        handleCancel: v,
        previewProps: { isEditing: o, editButtonRef: u, onStartEditing: p, wrapperRef: g, onBlur: h, onKeyDown: A },
        inputProps: {
            inputId: m,
            inputRef: c,
            value: r,
            onChange: a,
            onCommit: () => {
                (f.current = !0), x();
            },
            onCancel: () => {
                (f.current = !0), v();
            },
        },
    };
}
function tx(e) {
    let { text: l, htmlFor: n } = e;
    return (0, t.jsx)(f.A, { tag: "label", htmlFor: n, children: l });
}
function tv(e) {
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
            trailing: f,
        } = e,
        m = i.useCallback(
            (e) => {
                "Enter" === e.key
                    ? (e.preventDefault(), o())
                    : "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), d());
            },
            [o, d],
        );
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(tx, { text: r, htmlFor: l }),
            (0, t.jsx)(tf.k, {
                id: l,
                inputRef: n,
                value: a,
                onChange: s,
                onBlur: u,
                onKeyDown: m,
                maxLength: c,
                placeholder: g,
                trailing: f,
            }),
        ],
    });
}
function th(e) {
    let { tooltip: l, ...n } = e,
        i = (0, t.jsx)("div", {
            className: tm.L7,
            children: (0, t.jsx)(tg.T, { ...n, size: "sm", variant: "input-accessory" }),
        });
    return null == l ? i : (0, t.jsx)(e7.m, { text: l, ariaHidden: !0, children: i });
}
function tA(e) {
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
            className: f,
            wrapperRef: m,
            onBlur: p,
            onKeyDown: x,
        } = e,
        v = i.useRef(null),
        h = i.useId(),
        A = null == n,
        j = (0, t.jsxs)("div", {
            ref: v,
            className: tm.LL,
            onClick: u,
            children: [
                A
                    ? (0, t.jsx)(ek.E, {
                          id: h,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: tm.qf,
                          children: r,
                      })
                    : n,
                (0, t.jsx)(eP.D, {
                    innerRef: o,
                    "aria-label": d,
                    "aria-describedby": A ? h : void 0,
                    "aria-expanded": !1,
                    onClick: (e) => {
                        e.stopPropagation(), u();
                    },
                    focusProps: { ringTarget: v },
                }),
                null != g && (0, t.jsx)("div", { className: tm.lD, children: (0, t.jsx)(th, { ...g }) }),
            ],
        });
    return (0, t.jsx)("div", {
        ref: m,
        className: a()(tm.kL, { [tm.oE]: "compact" === c }, f),
        onBlur: p,
        onKeyDown: x,
        children: (0, t.jsx)(
            "div",
            { className: tm.qG, children: l ? s : (0, t.jsx)("div", { className: tm.VH, children: j }) },
            l ? "editing" : "preview",
        ),
    });
}
var tj = n(35783);
function tb(e) {
    let l,
        n,
        r,
        a,
        o,
        d,
        u,
        c,
        g,
        { user: f, displayProfile: m } = e,
        { analyticsLocations: p } = (0, j.Ay)(),
        x = m?.guildId != null,
        v = m?.guildId ?? void 0,
        h = lE.Ay.canUsePremiumProfileCustomization(f),
        {
            value: A,
            previewValue: b,
            onCommit: I,
        } = ((l = m?.guildId ?? null),
        (n = m?.guildId != null),
        (r = (0, s.bG)([ee.default], () => ee.default.getCurrentUser()?.globalName ?? null)),
        (a = (0, s.bG)([Q.Ay], () => (null != l ? (Q.Ay.getMember(l, f.id)?.nick ?? null) : null))),
        (o = (0, s.bG)([el.A], () => el.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, s.bG)([el.A], () => el.A.getPendingChanges(l).pendingNickname)),
        (u = n ? (d ?? a ?? "") : (o ?? r ?? "")),
        (c = (e) => (null == e || "" === e ? void 0 : e)),
        (g = void 0 !== o ? o : r),
        {
            value: u,
            previewValue: n ? (c(void 0 !== d ? d : a) ?? c(r)) : (c(g) ?? f.username),
            onCommit: i.useCallback(
                (e) => {
                    n
                        ? (0, l_.p)({ nickname: e.trim(), guildId: m?.guildId ?? void 0 })
                        : (0, l_.p)({ globalName: e.trim() });
                },
                [n, m?.guildId],
            ),
        }),
        { isEditing: C, previewProps: y, inputProps: N, handleCommit: E } = tp(A, I),
        P = (0, s.bG)([el.A], () => el.A.getPendingChanges(v ?? null).pendingDisplayNameStyles),
        k = eL.intl.string(x ? eL.t.mq6Cg9 : eL.t.XuZU7A),
        R = x ? eL.intl.string(eL.t.YcDKr8) : f.username,
        S = eL.intl.string(x ? eL.t["g7OSZ/"] : eL.t.kyfzzc),
        D = i.useRef(null),
        O = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    C && E(),
                    (0, lq.L)({ analyticsLocations: p, guildId: v, stackingBehavior: "stack", returnRef: D });
            },
            [C, E, p, v],
        ),
        T = {
            icon: lf.V,
            tooltip: eL.intl.string(eL.t.lqKKI2),
            "aria-label": eL.intl.string(eL.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: O,
            buttonRef: D,
        },
        _ = h ? T : void 0,
        M =
            null != b
                ? (0, t.jsx)(tu.c$, {
                      user: f,
                      guildId: v,
                      displayName: b,
                      size: "lg",
                      pendingDisplayNameStyles: P,
                      className: tj.d,
                  })
                : null;
    return (0, t.jsx)(tA, {
        ...y,
        preview: M,
        placeholder: R,
        editButtonAriaLabel: S,
        trailing: _,
        input: (0, t.jsx)(tv, { ...N, label: k, maxLength: eQ.zzC, placeholder: R, trailing: _ }),
    });
}
var tI = n(469432);
function tC(e) {
    let l,
        n,
        r,
        o,
        d,
        { displayProfile: u } = e,
        {
            value: c,
            previewValue: g,
            onCommit: f,
        } = ((l = u?.guildId ?? null),
        (n = u?.guildId != null),
        (r = (0, s.bG)([el.A], () => el.A.getPendingChanges(l).pendingPronouns)),
        (o = n ? u?._guildMemberProfile?.pronouns : u?.pronouns),
        (d = u?.getPreviewPronouns(r) ?? void 0),
        {
            value: r ?? o ?? "",
            previewValue: d,
            onCommit: i.useCallback(
                (e) => {
                    (0, l_.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        { previewProps: m, inputProps: p, isEditing: x } = tp(c, f),
        v = u?.guildId != null,
        h = null != g && g.length > 0,
        A = eL.intl.string(v ? eL.t.AXiE0i : eL.t["76Aqhl"]);
    return (0, t.jsx)(tA, {
        ...m,
        variant: "compact",
        className: a()(tI.k, x && tI.J),
        preview: h ? (0, t.jsx)(tu.n2, { pronouns: g }) : null,
        placeholder: A,
        editButtonAriaLabel: eL.intl.string(eL.t.h6VAO7),
        input: (0, t.jsx)(tv, { ...p, label: eL.intl.string(eL.t["rniRE+"]), placeholder: A, maxLength: eQ.VE5 }),
    });
}
var ty = n(145497),
    tN = n(685073),
    tE = n(318785),
    tP = n(534400),
    tk = n(743981),
    tR = n(724637),
    tS = n(329296);
let tD = "no-server-tag";
function tO(e) {
    let { buttonRef: l, guildId: n, guildTag: i, guildBadge: r, ...s } = e,
        o = null == i || null == n;
    return (0, t.jsx)(eP.D, {
        innerRef: l,
        className: a()(tR.L5, { [tR.wK]: o }),
        ...s,
        children: (0, t.jsxs)(ek.E, {
            variant: o ? "text-xs/normal" : "text-xs/semibold",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: tR.W3,
            tag: "span",
            children: [
                o
                    ? eL.intl.string(eL.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  tP.Z9,
                                  {
                                      src: (0, tN.gC)(n, r, tk.Sl.SIZE_14),
                                      size: tk.Sl.SIZE_14,
                                      className: tR.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, tN.gC)(n, r, tk.Sl.SIZE_14) ?? n,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(nA.a, { size: "xs", color: "currentColor", className: tR.u4 }),
            ],
        }),
    });
}
function tT() {
    let e = (0, tE.b)(),
        l = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        n = (0, s.bG)([ee.default], () => {
            let e = ee.default.getCurrentUser();
            return (0, tN.Zo)(e?.primaryGuild).guildId ?? null;
        }),
        r = (0, s.bG)([el.A], () => el.A.getPendingChanges(null).pendingPrimaryGuildId),
        a = void 0 !== r ? r : n,
        o = null != a ? (l.get(a) ?? null) : null,
        d = o?.profile?.tag ?? null,
        u = o?.profile?.badge ?? void 0,
        c = i.useCallback(
            (e) =>
                e.id === tD
                    ? (0, t.jsx)("div", {
                          className: tS.uN,
                          children: (0, t.jsx)(ek.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: tR.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(nN.c, { ...e }),
            [],
        ),
        g = i.useMemo(
            () => [
                { id: tD, label: eL.intl.string(eL.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let l = e.profile?.tag;
                    if (null == l) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(ty.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(tP.o9, { guildId: e.id, guildTag: l, guildBadge: n }),
                        },
                    ];
                }),
            ],
            [e],
        ),
        f = i.useCallback((e) => {
            (0, l_.p)({ primaryGuildId: e });
        }, []);
    return 0 === e.length
        ? null
        : (0, t.jsx)(nD, {
              options: g,
              value: a,
              onSelectionChange: f,
              label: eL.intl.string(eL.t.Pdd1nd),
              listboxClassName: tR.yt,
              renderListItem: c,
              children: (e) => {
                  let { buttonRef: l, selectButtonProps: n } = e;
                  return (0, t.jsx)(tO, { buttonRef: l, guildId: a, guildTag: d, guildBadge: u, ...n });
              },
          });
}
var t_ = n(874644);
function tM(e) {
    let { user: l, displayProfile: n, nickname: i, trailing: r, onClose: s, allowEditing: o } = e;
    if (!o)
        return (0, t.jsx)(tu.Ay, {
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
        : (0, t.jsx)(td.A, {
              user: l,
              forceUsername: !0,
              className: t_.a1,
              usernameClass: t_.eb,
              discriminatorClass: t_.sw,
              hideBotTag: !0,
          });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(tb, { displayProfile: n, user: l }),
            (0, t.jsxs)("div", {
                className: a()(t_.AK, t_.j6),
                children: [d, (0, t.jsx)(tu.Ce, {}), (0, t.jsx)(tC, { displayProfile: n }), (0, t.jsx)(tT, {}), r],
            }),
        ],
    });
}
n(321073);
var tG = n(97808),
    tL = n(980707),
    tw = n(477782),
    tU = n(22231),
    tV = n(601255),
    tF = n(562819),
    tB = n(19575),
    tz = n(106106),
    tH = n(338165);
let tW = tB.Ay.getEnableHardwareAcceleration() ? tG.Js : tG.eu;
function tK(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(tL.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eL.intl.string(eL.t.YAgq3W),
        children: (0, t.jsx)(tw.rX, { children: n }),
    });
}
function tq(e) {
    let { user: l, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, eu.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useCallback(() => u(!1), []),
        f = (function (e) {
            let { user: l, guildId: n, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, j.Ay)(),
                d = null != n,
                u = (0, s.bG)([Q.Ay], () => (null != n ? Q.Ay.getMember(n, l.id) : null)),
                c = (0, s.bG)([el.A], () => el.A.getPendingChanges(n ?? void 0).pendingAvatar),
                g = d ? u?.avatar : l.avatar,
                f = (0, Z.z5)(c, g),
                m = d && null != l.avatar,
                p = lE.Ay.canUsePremiumProfileCustomization(l),
                x = p || null == n,
                v = p || null == n,
                h = (0, s.bG)([l3.A], () => (null != n ? l3.A.getGuild(n) : null)),
                A = (0, Z.a4)({ user: l }),
                b = (0, Z.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: I } = (0, Z.CP)(n ?? void 0),
                C = void 0 !== I,
                y = null != (0, tV.A)(C ? I : b) && (C ? null != I : null != b),
                N = d && null != A,
                E = i.useCallback(() => {
                    r(),
                        (0, lw.XD)({
                            uploadType: lU.HL.AVATAR,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                P = i.useCallback(() => {
                    r(), (0, tF.L)({ analyticsLocations: o, guild: h ?? void 0, stackingBehavior: "stack" });
                }, [r, o, h]),
                k = i.useCallback(() => {
                    r(),
                        (0, lw.rM)(null, g, (e) => (0, l_.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, Z.WU)(m ? "reset" : "remove");
                }, [r, n, g, m]),
                R = i.useCallback(() => {
                    r(), (0, l_.p)({ guildId: n ?? void 0, avatarDecoration: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, t.jsx)(
                                tw.Dr,
                                { id: "change-avatar", label: eL.intl.string(eL.t["4OynCD"]), action: E },
                                "change-avatar",
                            ),
                        ),
                    v &&
                        e.push(
                            (0, t.jsx)(
                                tw.Dr,
                                { id: "change-decoration", label: eL.intl.string(eL.t.HykynS), action: P },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        f &&
                        e.push(
                            m
                                ? (0, t.jsx)(
                                      tw.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.TDjKDm),
                                          action: k,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      tw.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.twB3fz),
                                          action: k,
                                      },
                                      "remove-avatar",
                                  ),
                        ),
                    v &&
                        y &&
                        e.push(
                            N
                                ? (0, t.jsx)(
                                      tw.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eL.intl.string(eL.t["2u5yu0"]),
                                          action: R,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      tw.Dr,
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
            }, [m, x, v, N, f, y, E, P, k, R]);
        })({ user: l, guildId: n, onClose: g });
    return 0 === f.length
        ? (0, t.jsx)(eu.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(tz.my, tz.vk, tH.kL, { [tH.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(tW, { ...r, imageClassName: a()(tz.Lw, tH.HU) }),
                  (0, t.jsx)(lD.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: lD.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: g,
                      renderPopout: (e) => (0, t.jsx)(tK, { ...e, items: f, onMenuClose: g }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: tH.r9,
                              children: (0, t.jsx)(lp.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: tU.R,
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
var tX = n(976726);
function tY(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(tL.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eL.intl.string(eL.t.FzU73A),
        children: (0, t.jsx)(tw.rX, { children: n }),
    });
}
function t$(e) {
    let { user: l, guildId: n } = e,
        [r, o] = i.useState(!1),
        d = i.useRef(null),
        u = i.useCallback(() => o(!1), []),
        c = (function (e) {
            let { user: l, guildId: n, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, j.Ay)(),
                d = (0, Z.N2)({ user: l, guildId: n ?? void 0 }),
                u = (0, Z.Xf)({ user: l, guildId: n ?? void 0 }),
                c = (0, Z.Xf)({ user: l, guildId: void 0 }),
                g = lE.Ay.canUsePremiumProfileCustomization(l),
                f = g || null == n,
                m = (0, ly.sk)("UserProfileModalV2EditableBanner"),
                p = null != n,
                {
                    pendingBanner: x,
                    pendingProfileEffect: v,
                    pendingProfileFrame: h,
                } = (0, s.bG)([el.A], () => el.A.getPendingChanges(n ?? void 0)),
                A = (0, s.bG)([w.A], () =>
                    null != n ? w.A.getGuildMemberProfile(l.id, n)?.banner : w.A.getUserProfile(l.id)?.banner,
                ),
                b = (0, s.bG)([ee.default], () => ee.default.getCurrentUser()?.banner != null),
                I = (0, s.bG)([w.A], () => w.A.getUserProfile(l.id)?.profileEffect != null),
                y = (0, s.bG)([w.A], () => w.A.getUserProfile(l.id)?.profileFrame != null),
                N = (0, Z.Ac)(x, A),
                E = p && b,
                P = p && I,
                k = p && y,
                R = void 0 === v ? null != d : null != v,
                S = void 0 === h ? null != u : null != h,
                D = (0, Z.lw)({
                    pendingValue: h,
                    userValue: c,
                    guildValue: null != n ? u : void 0,
                    guildId: n ?? void 0,
                }),
                O = (0, C.A)(D?.skuId, "UserProfileModalV2EditableBanner"),
                T = i.useCallback(() => {
                    r(),
                        (0, lw.XD)({
                            uploadType: lU.HL.BANNER,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                _ = i.useCallback(() => {
                    r(),
                        (0, l1.W)({
                            analyticsLocations: o,
                            guild: null != n ? (l3.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, d]),
                M = i.useCallback(() => {
                    r(), (0, lw.rM)(null, A, (e) => (0, l_.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, A]),
                G = i.useCallback(() => {
                    r(), (0, l_.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]),
                L = i.useCallback(() => {
                    r(),
                        (0, l4.w)({
                            analyticsLocations: o,
                            guild: null != n ? (l3.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: O,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, O]),
                U = i.useCallback(() => {
                    r(), (0, l_.p)({ guildId: n ?? void 0, profileFrame: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    g &&
                        e.push(
                            (0, t.jsx)(
                                tw.Dr,
                                { id: "change-banner", label: eL.intl.string(eL.t.N0bC3P), action: T },
                                "change-banner",
                            ),
                        ),
                    f &&
                        e.push(
                            (0, t.jsx)(
                                tw.Dr,
                                { id: "change-effect", label: eL.intl.string(eL.t["/6nv6N"]), action: _ },
                                "change-effect",
                            ),
                        ),
                    m &&
                        e.push(
                            (0, t.jsx)(
                                tw.Dr,
                                { id: "change-frame", label: eL.intl.string(eL.t["oTSa/q"]), action: L },
                                "change-frame",
                            ),
                        ),
                    g &&
                        N &&
                        e.push(
                            E
                                ? (0, t.jsx)(
                                      tw.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.jHlJNS),
                                          action: M,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      tw.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.tT9n7D),
                                          action: M,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    f &&
                        R &&
                        e.push(
                            P
                                ? (0, t.jsx)(
                                      tw.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.Lb7lu9),
                                          action: G,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      tw.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.zUOlT6),
                                          action: G,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    m &&
                        S &&
                        e.push(
                            k
                                ? (0, t.jsx)(
                                      tw.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.A0pzWn),
                                          action: U,
                                      },
                                      "reset-frame",
                                  )
                                : (0, t.jsx)(
                                      tw.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eL.intl.string(eL.t["8DfADq"]),
                                          action: U,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [E, g, f, m, P, k, N, R, S, T, _, L, M, G, U]);
        })({ user: l, guildId: n, onClose: u });
    return 0 === c.length
        ? (0, t.jsx)(eg.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(tX.kL, { [tX.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(eg.A, { ...e, className: tX.Pr }),
                  (0, t.jsx)(lD.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: lD.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: u,
                      renderPopout: (e) => (0, t.jsx)(tY, { ...e, items: c, onMenuClose: u }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: tX.r9,
                              children: (0, t.jsx)(lp.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: tU.R,
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
var tZ = n(777480),
    tJ = n(107563),
    tQ = n(570287);
n(938796);
var t0 = n(913453),
    t1 = n(667049),
    t7 = n(837531),
    t3 = n(186272),
    t2 = n(645625),
    t9 = n(337796);
let t8 = (e) => e * (2 - e),
    t5 = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } },
    t6 = (e) => {
        let { type: l, anchor: n } = e;
        return "staple" !== l || "bottom" !== n;
    };
function t4(e) {
    let { displayProfile: l, pendingBanner: n } = e,
        r = (0, B.Nx)(),
        [a, s] = i.useState(void 0);
    if (
        (i.useEffect(() => {
            if (null == n || r) return;
            let e = !1;
            return (
                es(n, 1024)
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
        : (0, t.jsx)("div", { className: t2.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function ie(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: i } = e,
        r = void 0 !== n ? n : l?.profileEffect;
    return null == r ? null : (0, t.jsx)(b.A, { skuId: r.skuId, isHovering: i });
}
function il(e) {
    let {
            user: l,
            currentUser: n,
            guildId: r,
            originGuildId: o,
            channelId: d,
            displayProfile: g,
            nickname: f,
            hasEntered: m,
            customStatusPrompt: p,
            onClose: x,
            avatarDecorationOverride: h,
            avatarOverride: A,
            bannerOverride: j,
            accentColorOverride: b,
            profileEffectOverride: I,
            profileFrame: C,
            allowEditing: N = !1,
            isLoading: E = !1,
        } = e,
        O = l.id === n.id,
        M = i.useRef(null),
        { isHoveringOrFocusing: L } = (0, P.A)(M),
        [w, U] = i.useState(),
        V = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? U("compact-xs") : l <= 380 ? U("compact-sm") : U(void 0);
        }, []);
    (0, v.g)(M, V, [], { fireOnMount: !0 });
    let F = null != w ? t5[w] : void 0,
        B = i.useMemo(() => p ?? (0, k.A)(), [p]),
        { relationshipType: $, originApplicationId: Z } = (0, s.cf)([T.A], () => ({
            relationshipType: T.A.getRelationshipType(l.id),
            originApplicationId: T.A.getOriginApplicationId(l.id),
        })),
        J = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        Q = (0, S.q)({ userId: l.id }),
        ee = (0, R.fi)(l.id),
        { appIdentities: el, connections: et } = (function (e) {
            let { filteredAppIdentities: l } = (0, q.A)(e),
                n = (0, Y.A)(e),
                t = (0, W.useIsRiotSocialSDKMigrationEnabled)({
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
                                  let l = H.A.get(e.type);
                                  return l?.replacedBy == null || !r.has(l.replacedBy);
                              })
                            : n,
                    [n, r, t],
                ),
            };
        })(l.id),
        ei = (0, z.A)(l.id),
        er = et.length > 0 || el.length > 0,
        ea = ei.length > 0,
        es = N ? t$ : eg.A,
        eo = N ? tq : eu.A;
    return (0, t.jsxs)("main", {
        className: a()(t2.profile, null != w && t2[w]),
        ref: M,
        "aria-busy": E,
        children: [
            (0, t.jsxs)("div", {
                className: t2.profileHeader,
                children: [
                    (0, t.jsx)(es, {
                        user: l,
                        displayProfile: g,
                        guildId: r,
                        themeType: en.d.MODAL_V2,
                        specOverrides: F,
                        pendingBanner: j,
                        pendingAccentColor: b,
                    }),
                    (0, t.jsx)(eh.A, { userId: l.id, onClose: x, className: t2.interactionToast }),
                    (0, t.jsx)(eo, {
                        user: l,
                        displayProfile: g,
                        guildId: r,
                        channelId: d,
                        themeType: en.d.MODAL_V2,
                        specOverrides: F,
                        avatarDecorationOverride: h,
                        avatarOverride: A,
                    }),
                    (0, t.jsx)(ey.A, {
                        user: l,
                        guildId: r,
                        channelId: d,
                        themeType: en.d.MODAL_V2,
                        hasEntered: m,
                        prompt: O ? B : null,
                    }),
                ],
            }),
            (0, t.jsxs)(u.Ip, {
                fade: !0,
                className: t2.profileBody,
                children: [
                    (0, t.jsx)(ep.A, { userId: l.id }),
                    (0, t.jsx)(tM, {
                        user: l,
                        displayProfile: g,
                        nickname: f,
                        trailing: (0, t.jsx)(ec.A, { displayProfile: g, themeType: en.d.MODAL_V2, onClose: x }),
                        onClose: x,
                        allowEditing: N,
                    }),
                    $ === eQ.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(eC.A.Overlay, {
                            className: t2.profileOverlay,
                            children: (0, t.jsx)(ev.A, {
                                user: l,
                                applicationId: Z,
                                guildId: g?.guildId ?? void 0,
                                channelId: d,
                                className: t2.profileBanner,
                            }),
                        }),
                    ee.map((e) => {
                        let { applicationId: n } = e;
                        return (0, t.jsx)(
                            eC.A.Overlay,
                            {
                                className: t2.profileOverlay,
                                children: (0, t.jsx)(ev.A, {
                                    user: l,
                                    guildId: g?.guildId ?? void 0,
                                    channelId: d,
                                    isGameRelationship: !0,
                                    applicationId: n,
                                    className: t2.profileBanner,
                                }),
                            },
                            n,
                        );
                    }),
                    l.isProvisional &&
                        (0, t.jsx)(eC.A.Overlay, {
                            className: t2.profileOverlay,
                            children: (0, t.jsx)(nZ.A, {
                                heading: eL.intl.string(eL.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(c.E, { size: "xs", color: "currentColor" }),
                                className: t2.profileBanner,
                                children: (0, t.jsx)(D.T, { userId: l.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(eI.A, { user: l, className: t2.profileBanner }),
                    g?.private &&
                        (0, t.jsx)(eC.A.Overlay, {
                            className: t2.profileOverlay,
                            children: (0, t.jsx)(eb.A, { username: f }),
                        }),
                    (0, t.jsx)("div", {
                        className: t2.profileButtons,
                        children: (0, t.jsx)(e0, {
                            user: l,
                            currentUser: n,
                            guildId: r,
                            originGuildId: o,
                            channelId: d,
                            displayProfile: g,
                            relationshipType: $,
                            onClose: x,
                        }),
                    }),
                    O && (0, t.jsx)(em.A, { isPremiumUser: (0, G.ki)(n), onInteraction: x }),
                    !J && (0, t.jsx)(ef.E, { userBio: g?.bio, setLineClamp: !1 }),
                    Q.length > 0 &&
                        (0, t.jsx)(nZ.A, {
                            heading: eL.intl.string(eL.t["Uv/eTx"]),
                            children: (0, t.jsx)(ex.A, { applicationIds: Q }),
                        }),
                    (0, t.jsx)(nZ.A, {
                        heading: eL.intl.string(eL.t.a6XYD9),
                        children: (0, t.jsx)(eA.A, { userId: l.id, guildId: g?.guildId, tooltipDelay: nJ.In }),
                    }),
                    g?.guildId != null &&
                        (0, t.jsx)(eN.A, {
                            userId: l.id,
                            guildId: g.guildId,
                            className: t2.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !J &&
                        (N || er) &&
                        (0, t.jsx)(nZ.A, {
                            heading: eL.intl.string(eL.t["3fe7U5"]),
                            scrollTargetId: nJ.bk.CONNECTIONS,
                            children: (0, t.jsx)(lc, {
                                applicationIdentities: el,
                                connections: et,
                                userId: l.id,
                                allowEditing: N,
                                className: t2.profileAppConnections,
                            }),
                        }),
                    !J &&
                        ea &&
                        (0, t.jsx)(nZ.A, {
                            heading: eL.intl.string(eL.t.PHjkRE),
                            scrollTargetId: nJ.bk.APPS,
                            children: (0, t.jsx)(eV, {
                                applicationRoleConnections: ei,
                                onClose: x,
                                className: t2.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(n0, { userId: l.id }),
                ],
            }),
            (0, t.jsx)(ie, { displayProfile: g, profileEffectOverride: I, isHovering: L }),
            null != C && (0, t.jsx)(y.A, { frame: C, filterLayer: t6 }),
        ],
    });
}
function it(e) {
    let { user: l, displayProfile: n, pendingThemeColors: i, children: r } = e,
        {
            theme: a,
            primaryColor: s,
            secondaryColor: o,
        } = (0, F.A)({ user: l, displayProfile: n, pendingThemeColors: i }),
        { profileThemeStyle: d, profileThemeClassName: u } = (0, $.A)({
            theme: a,
            themeType: null,
            primaryColor: s,
            secondaryColor: o,
        });
    return (0, t.jsx)("div", { className: u, style: d, children: r });
}
function ii(e) {
    let {
            user: l,
            currentUser: n,
            guildId: r,
            originGuildId: o,
            channelId: u,
            messageId: c,
            roleId: v,
            sessionId: b,
            initialTabSection: y,
            initialScrollTarget: P,
            transitionState: k,
            customStatusPrompt: R,
            openedAt: S,
            onClose: D,
            sourceAnalyticsLocations: G = [],
            themeContainerClassName: F,
        } = e,
        B = l.id === n.id,
        {
            guildId: z,
            pendingGuildId: H,
            isLoading: W,
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
                        (0, ea.A)(l, void 0, {
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
        q = i.useMemo(() => (null != z ? { [z]: [l.id] } : {}), [z, l.id]);
    (0, h.Eq)(q, "UserProfileModalV2");
    let X = (0, U.X)("UserProfileModalV2"),
        Y = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        $ = B && X,
        et = $ && !Y,
        {
            pendingThemeColors: es,
            avatarDecorationOverride: eu,
            avatarOverride: ec,
            bannerOverride: eg,
            accentColorOverride: ef,
            profileEffectOverride: em,
            profileFrameOverride: ep,
        } = (function (e) {
            let { userId: l, guildId: n, allowEditingInModal: t } = e;
            return (0, s.cf)([el.A, ee.default, Q.Ay, w.A], () => {
                if (!t) return er;
                let e = ee.default.getUser(l);
                if (null == e) return er;
                let {
                        pendingThemeColors: i,
                        pendingAvatarDecoration: r,
                        pendingAvatar: a,
                        pendingBanner: s,
                        pendingAccentColor: o,
                        pendingProfileEffect: d,
                        pendingProfileFrame: u,
                    } = el.A.getPendingChanges(n),
                    c = null != n ? Q.Ay.getMember(n, l) : null,
                    g = w.A.getUserProfile(l),
                    f = null != n ? w.A.getGuildMemberProfile(l, n) : null;
                return {
                    pendingThemeColors: i,
                    avatarDecorationOverride: (0, Z.us)({
                        userValue: e.avatarDecoration,
                        guildValue: c?.avatarDecoration,
                        pendingValue: r,
                        guildId: n,
                    }),
                    avatarOverride: (0, J.V7)({ userId: l, image: a, size: ei }),
                    bannerOverride: s,
                    accentColorOverride: o,
                    profileEffectOverride: (0, Z.us)({
                        userValue: g?.profileEffect,
                        guildValue: f?.profileEffect,
                        pendingValue: d,
                        guildId: n,
                    }),
                    profileFrameOverride: (0, Z.us)({
                        userValue: g?.profileFrame,
                        guildValue: f?.profileFrame,
                        pendingValue: u,
                        guildId: n,
                    }),
                };
            }, [l, n, t]);
        })({ userId: l.id, allowEditingInModal: et, guildId: z }),
        {
            isExpanded: ex,
            isAnimating: ev,
            transition: eh,
            handleExpand: eA,
            handleCollapse: eb,
            refs: { expandIconButtonRef: eI, expandTabButtonRef: ey, collapseButtonRef: eN },
        } = (function () {
            let [e, l] = i.useState(() => window.innerWidth > 928),
                [n, t] = i.useState(!1),
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: t8 },
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
                f = i.useCallback(() => {
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
                    handleCollapse: f,
                    refs: { expandIconButtonRef: s, expandTabButtonRef: o, collapseButtonRef: u },
                }
            );
        })(),
        eE = $ && !ex,
        eP = $ && (!ex || ev),
        { defaultWishlistId: ek } = (0, s.cf)([w.A], () => ({ defaultWishlistId: w.A.getFirstWishlistId(l.id) }));
    (0, O.fw)({ wishlistId: ek, userId: l.id });
    let eR = (0, ed.fC)(),
        eS = W || null != eR.interactionType,
        eD = (function (e) {
            let l,
                n,
                t,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, t0.A)(i),
                d = o?.length,
                u =
                    ((l = (0, s.bG)([ee.default], () => ee.default.getCurrentUser())),
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
                c = (0, t1.A)(i.id),
                g = (0, tQ.A)(i.id),
                f = [],
                m = i.id === r?.id,
                p = w.A.getFirstWishlistId(i.id),
                x = null != p,
                v = x ? w.A.getWishlistSettings(i.id, p) : null,
                h = (x ? tJ.A.getWishlistItems(p) : []).length > 0,
                A = c.length > 0;
            (m || A) && f.push({ text: eL.intl.string(eL.t.laViwx), section: nJ.RP.WIDGETS }),
                f.push({ text: eL.intl.string(eL.t.chq59f), section: nJ.RP.ACTIVITY });
            let j = !1 === i.nsfwAllowed,
                b = T.A.isFriend(i.id),
                I = v?.visibility === tZ.a.PUBLIC;
            return (
                (m || (!m && h && I && g && (!j || (j && b)))) &&
                    f.push({ text: eL.intl.string(eL.t["7lZ31J"]), section: nJ.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (f.push({ text: (0, t7.A)(a), section: nJ.RP.MUTUAL_FRIENDS }),
                    f.push({ text: (0, t3.A)(d), section: nJ.RP.MUTUAL_GUILDS })),
                f
            );
        })({ user: l, currentUser: n }),
        { analyticsLocations: eO } = (0, j.Ay)([...G, A.A.USER_PROFILE_MODAL_V2]),
        eT = (0, L.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: b,
            guildId: z,
            channelId: u,
            messageId: c,
            roleId: v,
        }),
        e_ = (0, V.Ay)(l.id, z),
        eM = void 0 !== ep ? ep?.skuId : e_?.profileFrame?.skuId,
        eG = (0, C.A)(eM, "UserProfileModalV2"),
        { profileFrameStyle: ew, profileFrameClassName: eU } = (0, N.A)(eM);
    (0, I.A)({ skuId: e_?.profileFrame?.skuId, openedAt: S, context: eT, analyticsLocations: eO });
    let eV = M.Ay.useName(e_?.guildId, u, l),
        eF = (0, E.GV)(),
        eB = eL.intl.format(eL.t.KRe1Fk, { name: eV });
    return (0, t.jsx)(j.f5, {
        value: eO,
        children: (0, t.jsx)(L.of, {
            value: eT,
            openedAt: S,
            fetchStartedAt: e_?.fetchStartedAt,
            fetchEndedAt: e_?.fetchEndedAt,
            isLoaded: e_?.isLoaded,
            children: (0, t.jsx)(ed.Hl, {
                value: eR,
                children: (0, t.jsx)(eo.N, {
                    value: P,
                    children: (0, t.jsxs)(g.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(t9.zr, { [t9.QF]: e_?.private === !0 }),
                        transitionState: k,
                        "aria-labelledby": eF,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(n8, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(t2.layoutContainer, eU, {
                                        [t2.editingPanelEnabled]: $,
                                        [t2.editingPanelExpanded]: $ && ex,
                                        [t2.isAnimating]: ev,
                                    }),
                                    style: ew,
                                    children: [
                                        (0, t.jsxs)(it, {
                                            user: l,
                                            displayProfile: e_,
                                            pendingThemeColors: es,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: t9.Oo,
                                                    children: [
                                                        (0, t.jsx)(e1.A, { isCurrentUser: B, onClose: D }),
                                                        (0, t.jsx)(f.A, {
                                                            children: (0, t.jsx)(m.H, { id: eF, children: eB }),
                                                        }),
                                                        eP &&
                                                            (0, t.jsx)(nF, {
                                                                buttonRef: eI,
                                                                onClick: eA,
                                                                className: t2.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eE &&
                                                    (0, t.jsx)("div", {
                                                        className: t2.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(nV, {
                                                            innerRef: ey,
                                                            onClick: eA,
                                                            className: t2.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(m.F, {
                                            children: [
                                                $ &&
                                                    eh((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(nX, {
                                                                  className: a()(t2.editingPanel, {
                                                                      [t2.isExpanded]: ex,
                                                                  }),
                                                                  selectedGuildId: H,
                                                                  originGuildId: o,
                                                                  onSelectGuildId: K,
                                                                  onClose: eb,
                                                                  collapseButtonRef: eN,
                                                                  isLoading: W,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(eC.A, {
                                                    className: a()(F, t9.A7, t2.profileContentOuter),
                                                    innerClassName: t2.profileContentInner,
                                                    user: l,
                                                    displayProfile: e_,
                                                    themeType: en.d.MODAL_V2,
                                                    pendingThemeColors: es,
                                                    isPrivate: e_?.private === !0,
                                                    children: [
                                                        (0, t.jsx)(t4, { displayProfile: e_, pendingBanner: eg }),
                                                        e_?.private === !0 && (0, t.jsx)(ej.A, {}),
                                                        (0, t.jsx)(n3, { isVisible: eS, showLoadingSpinner: W }),
                                                        (0, t.jsx)(to, { className: t2.toast }),
                                                        (0, t.jsx)(il, {
                                                            user: l,
                                                            currentUser: n,
                                                            guildId: z,
                                                            channelId: u,
                                                            displayProfile: e_,
                                                            nickname: eV,
                                                            originGuildId: o,
                                                            hasEntered: k === p.ip.ENTERED,
                                                            customStatusPrompt: R,
                                                            onClose: D,
                                                            avatarDecorationOverride: eu,
                                                            avatarOverride: ec,
                                                            bannerOverride: eg,
                                                            accentColorOverride: ef,
                                                            profileEffectOverride: em,
                                                            profileFrame: eG,
                                                            allowEditing: et,
                                                            isLoading: W,
                                                        }),
                                                        (0, t.jsx)(n5.A, {
                                                            user: l,
                                                            currentUser: n,
                                                            displayProfile: e_,
                                                            guildId: z,
                                                            channelId: u,
                                                            items: eD,
                                                            initialSection: y,
                                                            onClose: D,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, t.jsx)(nY.A, { userId: l.id, guildId: z, className: t2.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
