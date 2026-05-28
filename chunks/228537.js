n.d(l, { A: () => tr });
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
    f = n(140735),
    m = n(707554),
    p = n(231723),
    x = n(241524),
    h = n(770178),
    v = n(80682),
    A = n(793574),
    j = n(688810),
    b = n(480335),
    I = n(31956),
    C = n(361628),
    y = n(744808),
    N = n(282389),
    E = n(915089),
    P = n(713517),
    k = n(645507),
    R = n(922590),
    S = n(821269),
    D = n(93246),
    T = n(561794),
    O = n(994500),
    _ = n(351906),
    G = n(562153),
    M = n(474090),
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
    ei = n(985253);
let et = (0, o.FT)(ei.T[en.d.MODAL_V2].avatarSize),
    er = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        profileEffectOverride: void 0,
        profileFrameOverride: void 0,
    };
var ea = n(903209);
async function es(e, l) {
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
var eo = n(716804),
    ed = n(679492),
    eu = n(718019),
    ec = n(328296),
    eg = n(915614),
    ef = n(308244),
    em = n(744753),
    ep = n(559506),
    ex = n(361311),
    eh = n(931481),
    ev = n(439053),
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
    eT = n(310419),
    eO = n(773669),
    e_ = n(889227),
    eG = n(967198),
    eM = n(488995),
    eL = n(375708),
    ew = n(985176);
function eU(e) {
    let { applicationRoleConnection: l, locale: n, onApplicationClicked: t, selectedGuildId: r } = e,
        a = (0, eS.VW)(l, n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: ew.k_,
                children:
                    null != l.application.bot
                        ? (0, i.jsx)(eR.A, { user: new e_.A(l.application.bot), size: o._3.SIZE_16 })
                        : (0, i.jsx)(eE._, { color: "currentColor", size: "sm" }),
            }),
            (0, i.jsxs)("div", {
                className: ew.Hd,
                children: [
                    (0, i.jsxs)(eP.D, {
                        className: ew.OB,
                        onClick: () => {
                            t?.(),
                                (0, eD.transitionToGlobalDiscovery)({
                                    tab: eM.GlobalDiscoveryTab.APPS,
                                    applicationId: l.application.id,
                                    newSessionState: {
                                        entrypoint: { name: eT.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                });
                        },
                        children: [
                            null != l.platform_name
                                ? (0, i.jsx)(ek.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_name,
                                  })
                                : null,
                            null != l.platform_username
                                ? (0, i.jsx)(ek.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_username,
                                  })
                                : null,
                            (0, i.jsx)(ek.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: ew.nk,
                                children: eL.intl.format(eL.t.zIT9YA, { applicationHook: () => l.application.name }),
                            }),
                        ],
                    }),
                    null != a && a.length > 0 ? (0, i.jsx)("div", { className: ew.yu, children: a }) : null,
                ],
            }),
        ],
    });
}
function eV(e) {
    let { applicationRoleConnections: l, className: n, onClose: t } = e,
        { trackUserProfileAction: r } = (0, L.NJ)(),
        o = (0, s.bG)([eO.default], () => eO.default.locale),
        d = (0, s.bG)([eG.A], () => eG.A.getGuildId());
    return 0 === l.length
        ? null
        : (0, i.jsx)("ul", {
              className: a()(ew.kL, n),
              children: l.map((e, l) =>
                  (0, i.jsx)(
                      "li",
                      {
                          className: ew.FI,
                          children: (0, i.jsx)(eU, {
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
        { analyticsLocations: t, newestAnalyticsLocation: r } = (0, j.Ay)(),
        a = (0, eX.A)(() => {
            (0, eq.Cz)({ analyticsLocations: t, analyticsSource: r }), l?.();
        });
    return (0, i.jsx)(eY.q3, {
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
            guildId: t,
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
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(eH.e, { userId: l.id, variant: "primary", disabled: !0 }),
                        (0, i.jsx)(e$, { onClose: d }),
                        (0, i.jsx)(eW.Zt, { user: l, guildId: t, viewProfileItem: g }),
                    ],
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(ez.A, { user: l, guildId: t, onClose: d }),
                        (0, i.jsx)(e$, { onClose: d }),
                        (0, i.jsx)(eW.Zt, { user: l, guildId: t, viewProfileItem: g }),
                    ],
                })
          : l.bot
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(eH.e, { userId: l.id, onClose: eF.A.popAll, autoFocus: !0 }),
                      (0, i.jsx)(eW.Zt, { user: l, guildId: t, viewProfileItem: g }),
                  ],
              })
            : o === eQ.eA$.PENDING_INCOMING
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(eH.e, { userId: l.id, onClose: eF.A.popAll, autoFocus: !0 }),
                        (0, i.jsx)(eW.Zt, { user: l, guildId: t }),
                    ],
                })
              : o === eQ.eA$.FRIEND || o === eQ.eA$.PENDING_OUTGOING
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(eH.e, { userId: l.id, onClose: eF.A.popAll, autoFocus: !0 }),
                          (0, i.jsx)(eZ.Ef, { user: l, relationshipType: o, analyticsLocation: c }),
                          (0, i.jsx)(eW.Zt, { user: l, guildId: t, viewProfileItem: g }),
                      ],
                  })
                : o === eQ.eA$.NONE && x
                  ? (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(eH.e, { userId: l.id, onClose: eF.A.popAll, autoFocus: !0 }),
                            (0, i.jsx)(eZ.ES, {
                                user: l,
                                analyticsLocation: c,
                                gameFriends: f,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: m,
                            }),
                            (0, i.jsx)(eW.Zt, { user: l, guildId: t, viewProfileItem: g }),
                        ],
                    })
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(eZ.cO, {
                                variant: "primary",
                                userId: l.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, i.jsx)(eH.l, { userId: l.id, onClose: eF.A.popAll, variant: "secondary" }),
                            (0, i.jsx)(eW.Zt, { user: l, guildId: t, viewProfileItem: g }),
                        ],
                    });
}
var e1 = n(463156),
    e7 = n(990078),
    e3 = n(349288),
    e2 = n(509434),
    e8 = n(307301),
    e9 = n(228366),
    e5 = n(95561),
    e6 = n(874490),
    e4 = n(370480),
    le = n(968309),
    ll = n(174459),
    ln = n(486020),
    li = n(123917),
    lt = n(783419);
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
    e9.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: la, stackingBehavior: "stack" });
}
function lo(e) {
    let { account: l, locale: n, userId: t } = e,
        r = l.metadata ?? {},
        a = (0, e4.An)(r[lt.pK.CREATED_AT], n),
        s = H.A.get((0, e6.ML)(l.type));
    return (0, i.jsx)(lu, {
        renderAccountName: () => {
            let e = s?.getPlatformUserUrl?.(l);
            return null == e
                ? (0, i.jsx)(e7.m, {
                      overflowOnly: !0,
                      text: l.name,
                      children: (0, i.jsx)(ek.E, { variant: "text-sm/normal", className: ew.GW, children: l.name }),
                  })
                : (0, i.jsx)(e3.Anchor, {
                      href: e,
                      className: ew.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${l.name}, ${eL.intl.string(eL.t.q5jLJB)}`
                              : `${l.name}, ${eL.intl.string(eL.t.q5jLJB)}`,
                      onClick: (n) => {
                          (0, e5.zV)(eQ.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: t }),
                              (0, li.h)({ href: e, trusted: s?.type !== eQ.fg2.DOMAIN }, n);
                      },
                      children: (0, i.jsxs)("div", {
                          className: ew.vi,
                          children: [
                              (0, i.jsx)(e7.m, {
                                  overflowOnly: !0,
                                  text: l.name,
                                  children: (0, i.jsx)(ek.E, {
                                      variant: "text-sm/normal",
                                      className: ew.GW,
                                      children: l.name,
                                  }),
                              }),
                              (0, i.jsx)(e2.I, { size: "xs", color: "currentColor" }),
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
        { identity: n, application: t } = l;
    if (null == n.profile || null == n.profile.username || null == t) return null;
    let r = ln.Ay.getApplicationIconURL({ id: t.id, icon: t.icon });
    return (0, i.jsx)(lu, {
        renderAccountName: () =>
            (0, i.jsx)(e7.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, i.jsx)(ek.E, {
                    variant: "text-sm/normal",
                    className: ew.GW,
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
        className: ew.FI,
        children: [
            (0, i.jsx)(e7.m, {
                __unsupportedReactNodeAsText: t,
                children: (0, i.jsx)("div", {
                    className: ew.k_,
                    children: (0, i.jsx)("img", {
                        alt: eL.intl.formatToPlainString(eL.t.rtm15P, { name: t }),
                        className: a()(ew.tV, o ? ew.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, i.jsxs)("div", {
                className: ew.Hd,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            l(),
                            null != s &&
                                (0, i.jsx)(ek.E, {
                                    variant: "text-xs/normal",
                                    children: eL.intl.format(eL.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: ew.yu, children: n() }),
                ],
            }),
        ],
    });
}
function lc(e) {
    let { connections: l, applicationIdentities: n, userId: t, allowEditing: r, className: o } = e,
        d = (0, s.bG)([eO.default], () => eO.default.locale);
    if (!r && 0 === l.length && 0 === n.length) return null;
    let u = l.length > 0 || n.length > 0;
    return (0, i.jsxs)("div", {
        className: a()(ew.kL, o),
        children: [
            u &&
                (0, i.jsxs)("ul", {
                    className: ew.V,
                    children: [
                        l.map((e) => (0, i.jsx)(lo, { account: e, userId: t, locale: d }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, i.jsx)(ld, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, i.jsxs)(eP.D, {
                    className: ew.qG,
                    onClick: ls,
                    children: [
                        (0, i.jsx)(e8.j, { size: "sm", color: "currentColor" }),
                        (0, i.jsx)(ek.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: eL.intl.string(eL.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var lg = n(873174),
    lf = n(193885),
    lm = n(661531),
    lp = n(408278),
    lx = n(890377),
    lh = n(789645),
    lv = n(534514),
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
    lT = n(508274),
    lO = n(654107),
    l_ = n(84540),
    lG = n(930349);
function lM(e) {
    let { user: l, disabled: n = !1 } = e,
        r = t.useRef(null),
        a = (0, lS.r)(lm.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, lO.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([el.A, w.A], () => ({
            pendingAccentColor: el.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: w.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, lR.LX)(o[0] ?? a),
        g = t.useCallback((e) => (0, l_.p)({ accentColor: e }), []);
    return (0, i.jsx)(lD.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, i.jsx)(lT.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, i.jsx)(lG.V, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                accessibleLabel: eL.intl.string(eL.t["/X3fkf"]),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, i.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, lR.Hl)(c) } }),
            }),
    });
}
var lL = n(450373),
    lw = n(252732),
    lU = n(339984),
    lV = n(111242);
function lF(e) {
    let { backgroundColor: l } = e;
    return (0, i.jsx)("div", { className: lV.o, style: { backgroundColor: l } });
}
function lB(e) {
    let { src: l } = e;
    return (0, i.jsx)("img", { src: l, alt: "", className: lV._ });
}
function lz(e) {
    let { displayProfile: l, pendingBanner: n, shouldAnimate: t } = e,
        r = (0, lS.r)(lm.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = l?.primaryColor ?? (0, lR.LX)(r),
        { hex: s } = (0, lL.A)(a),
        o = l?.getPreviewBanner(n, t, 296) ?? void 0;
    return null != o ? (0, i.jsx)(lB, { src: o }) : (0, i.jsx)(lF, { backgroundColor: s });
}
function lH(e) {
    let { userId: l, guildId: n, disabled: t } = e,
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
        h = p
            ? {
                  onClick: () => (0, lw.rM)(null, c, (e) => (0, l_.p)({ guildId: n ?? void 0, banner: e })),
                  type: x ? "reset" : "remove",
                  accessibleLabel: eL.intl.string(x ? eL.t.jHlJNS : eL.t.tT9n7D),
              }
            : void 0;
    return (0, i.jsx)(lG.V, {
        affordance: h,
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
        disabled: t,
        showOverlayOnHover: !0,
        renderPreview: (e) => (0, i.jsx)(lz, { displayProfile: o, pendingBanner: m, shouldAnimate: e }),
    });
}
var lW = n(922301),
    lK = n(368919),
    lq = n(259065),
    lX = n(283607);
let lY = "heading-lg/bold";
function l$(e) {
    let { displayName: l, stylesPreview: n, shouldAnimate: t = !1 } = e;
    return (0, i.jsx)("div", {
        "aria-hidden": !0,
        className: lX.M,
        children:
            null != n
                ? (0, i.jsx)(ek.E, {
                      variant: lY,
                      children: (0, i.jsx)(lK.A, {
                          userName: l,
                          displayNameStyles: n,
                          effectDisplayType: t ? lW.G.ANIMATED : lW.G.STATIC,
                          textClassName: lX.W,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, i.jsx)(ek.E, { variant: lY, className: lX.W, color: "text-muted", children: l }),
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
        h = void 0 !== p,
        v = null === p,
        A = o && null != f,
        b = (0, Z.lw)({ pendingValue: p, userValue: f, guildValue: m, guildId: n ?? void 0 }),
        I = (e) => (null == e || "" === e ? void 0 : e),
        C = void 0 !== c ? c : u,
        y = o ? (I(void 0 !== g ? g : d) ?? I(C) ?? l.username) : (I(C) ?? l.username),
        N =
            null != b && (h ? null != p : null != x)
                ? {
                      onClick: () => (0, l_.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: A ? "reset" : "remove",
                      accessibleLabel: eL.intl.string(A ? eL.t.en3ogK : eL.t["Wqmi/h"]),
                  }
                : void 0,
        E = t.useCallback(() => {
            (0, lq.L)({ analyticsLocations: a, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [a, n]);
    return (0, i.jsx)(lG.V, {
        affordance: (!v && (h || null != x)) || A ? N : "add",
        variant: "bar",
        onClick: E,
        accessibleLabel: eL.intl.string(eL.t.XJ4oOO),
        "aria-haspopup": "dialog",
        renderPreview: (e) => (0, i.jsx)(l$, { stylesPreview: b, displayName: y, shouldAnimate: e }),
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
let l8 =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    l9 =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function l5(e) {
    let { effect: l, shouldAnimate: n } = e,
        t = (0, l0.Ay)(),
        r = (0, lQ.M)(t) ? l8 : l9;
    return (0, i.jsxs)("div", {
        className: l2.B0,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("img", { src: r, alt: "", className: l2.AH }),
            l?.skuId != null &&
                (0, i.jsx)(b.A, {
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
        h = (0, Z.lw)({ pendingValue: f, userValue: c, guildValue: g, guildId: n ?? void 0 }),
        v =
            null != h && (m ? null != f : null != g)
                ? {
                      onClick: () => (0, l_.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eL.intl.string(x ? eL.t["SQy/Po"] : eL.t.uMuafO),
                  }
                : void 0,
        A = t.useCallback(() => {
            (0, l1.W)({
                analyticsLocations: o,
                guild: u ?? void 0,
                initialSelectedEffect: h ?? void 0,
                stackingBehavior: "stack",
            });
        }, [o, u, h]);
    return (0, i.jsx)(lG.V, {
        affordance: p && !x ? "add" : v,
        variant: a,
        onClick: A,
        accessibleLabel: eL.intl.string(eL.t["/dRfCf"]),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) => (0, i.jsx)(l5, { effect: h, shouldAnimate: e }),
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
        u = (0, lQ.M)(d) ? l8 : l9,
        c = null != n,
        g = (0, s.bG)([l3.A], () => (null != n ? l3.A.getGuild(n) : null)),
        f = (0, Z.Xf)({ user: l }),
        m = (0, Z.Xf)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileFrame: p } = (0, Z.Tu)(n ?? void 0),
        x = void 0 !== p,
        h = null === p || (!x && null == m),
        v = c && null != f,
        A = (0, Z.lw)({ pendingValue: p, userValue: f, guildValue: m, guildId: n ?? void 0 }),
        b = (0, C.A)(A?.skuId, "EditableTileProfileFrameButton"),
        I = (0, N.A)(b?.skuId),
        E =
            null != A && (x ? null != p : null != m)
                ? {
                      onClick: () => (0, l_.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: v ? "reset" : "remove",
                      accessibleLabel: eL.intl.string(v ? eL.t.j6hZyM : eL.t.nQBruk),
                  }
                : void 0,
        P = t.useCallback(() => {
            (0, l4.w)({
                analyticsLocations: o,
                guild: g ?? void 0,
                initialSelectedProfileFrame: b,
                stackingBehavior: "stack",
            });
        }, [o, g, b]);
    return (0, i.jsx)(lG.V, {
        affordance: h && !v ? "add" : E,
        variant: "square",
        onClick: P,
        accessibleLabel: eL.intl.string(eL.t["9/hmle"]),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: () =>
            null != b
                ? (0, i.jsxs)("div", {
                      className: a()(ne.j_, ne.i1, I),
                      children: [
                          (0, i.jsx)("img", { src: u, alt: "", className: ne.wt, draggable: !1 }),
                          (0, i.jsx)(y.A, { frame: b, filterLayer: nl }),
                      ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("img", { src: u, alt: "", className: a()(ne.j_, ne.dJ) }),
                          (0, i.jsx)("div", { className: a()(ne.j_, ne.zC) }),
                      ],
                  }),
    });
}
var ni = n(33851),
    nt = n.n(ni),
    nr = n(684732),
    na = n(458217),
    ns = n(298387);
function no(e) {
    let { color: l, suggestedColors: n, disabled: r, ariaLabel: s, onSelect: o, buttonRef: d } = e,
        u = t.useRef(null),
        c = d ?? u,
        g = (0, lR.Hl)(l),
        f = (0, lR.bJ)(l, 0xffffff) < na.Tr.NonText;
    return (0, i.jsx)(lD.Y, {
        targetElementRef: c,
        renderPopout: (e) => (0, i.jsx)(lT.VN, { ...e, value: l, onChange: o, suggestedColors: n, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: l, ...n } = e;
            return (0, i.jsx)(eP.D, {
                ...n,
                innerRef: c,
                className: ns.Dh,
                onClick: r ? void 0 : l,
                "aria-label": s,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, i.jsx)("div", { className: a()(ns.Hy, { [ns.rY]: f }), style: { backgroundColor: g } }),
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
        u = t.useRef(null),
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
    return (0, i.jsx)(lG.Y, {
        variant: "square",
        disabled: o,
        deleteButton: x,
        children: (0, i.jsxs)("div", {
            className: ns.D7,
            style: { background: f },
            children: [
                (0, i.jsx)(no, { color: l, suggestedColors: s, ariaLabel: m, onSelect: r, disabled: o, buttonRef: u }),
                (0, i.jsx)(no, { color: n, suggestedColors: s, ariaLabel: p, onSelect: a, disabled: o }),
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
        x = (0, lO.rh)(p, m, !1),
        h = t.useCallback(
            (e) => {
                let l = nt()(e, a?.themeColors);
                (0, l_.p)({ guildId: n ?? void 0, themeColors: l ? void 0 : e });
            },
            [a?.themeColors, n],
        ),
        v =
            null != n && (0, nr.l)(o, u)
                ? {
                      onClick: () => (0, l_.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eL.intl.string(eL.t["L+GmoR"]),
                  }
                : void 0;
    return null == g || null == f
        ? null
        : (0, i.jsx)(nd, {
              primaryColor: g,
              secondaryColor: f,
              onSelectPrimaryColor: (e) => {
                  e !== g && h([e, f]);
              },
              onSelectSecondaryColor: (e) => {
                  e !== f && h([g, e]);
              },
              suggestedColors: x,
              disabled: r,
              deleteButton: v,
          });
}
var nc = n(315629),
    ng = n(783420),
    nf = n(788868),
    nm = n(235684);
function np() {
    return (0, i.jsx)(ng.A, {
        subscriptionTier: nf.pe.TIER_2,
        children: (e) => {
            let { onClick: l } = e;
            return (0, i.jsxs)(nc.h, {
                color: "nitro-pink",
                className: nm.U,
                children: [
                    (0, i.jsx)(ek.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: eL.intl.format(eL.t.TmfgI2, { onClick: (e) => l(e) }),
                    }),
                    (0, i.jsx)(lA.$, {
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
    nh = n(942308);
function nv() {
    return (0, i.jsxs)("div", {
        className: nh.k,
        children: [
            (0, i.jsx)(ek.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eL.intl.string(eL.t.JFY17v),
            }),
            (0, i.jsx)(lA.$, {
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
            setIsOpen: h,
            refs: v,
            floatingStyles: A,
            getReferenceProps: j,
            getFloatingProps: b,
            transitionStyles: I,
        } = (function () {
            let { reducedMotion: e } = t.useContext(nE.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: i,
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
                refs: i,
                floatingStyles: r,
                getReferenceProps: a,
                getFloatingProps: s,
                transitionStyles: e.enabled ? {} : d,
            };
        })(),
        { setFloating: C } = v,
        y = t.useContext(nR._),
        N = t.useId(),
        E = t.useId(),
        P = t.useId(),
        k = t.useRef(null),
        R = t.useRef(null),
        [S, D] = t.useState(null),
        T = null != S ? (0, ny.ZN)(P, S) : void 0,
        O = t.useRef(!1),
        _ = t.useRef(!1),
        G = t.useMemo(() => l.filter((e) => (0, ny.fI)(e.value, [n])), [n, l]),
        M = t.useCallback(() => {
            u || h(!x);
        }, [u, h, x]),
        L = t.useCallback(
            (e) => {
                x && 0 === e.button && e.preventDefault();
            },
            [x],
        ),
        w = t.useCallback(() => {
            h(!1), k.current?.focus();
        }, [h]),
        U = t.useCallback(
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
        V = t.useCallback(
            (e) => {
                if (u) return;
                let l = e[0];
                null != l && (r(l.value), w());
            },
            [u, r, w],
        ),
        { activeIndex: F, handleKeyDown: B } = (0, nC.l)(!0, l),
        z = t.useRef(null);
    t.useEffect(() => {
        let e = F !== z.current;
        (z.current = F), null != F && e && (D(F), x || ((O.current = !0), h(!0)));
    }, [F, x, h]);
    let H = t.useCallback(
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
                        let i = "PageUp" === e.key ? 10 : 1;
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
                        D((e) => (null === e ? 0 : Math.max(e - i, 0)));
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
                        D(0), x || ((O.current = !0), h(!0));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === n)) return;
                        D(n - 1), x || ((O.current = !0), h(!0));
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
        W = Math.max(
            l.findIndex((e) => e.id === G[G.length - 1]?.id),
            0,
        ),
        K = t.useRef(!1);
    t.useEffect(() => {
        c || !x || K.current
            ? x || ((K.current = !1), D(null), (O.current = !1))
            : ((K.current = !0), O.current || D(l.length > 0 ? W : null), (O.current = !1), k.current?.focus());
    }, [c, x, W, l.length]);
    let q = {
        id: E,
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-controls": x ? P : void 0,
        "aria-expanded": x,
        "aria-activedescendant": T,
        "aria-disabled": !!u || void 0,
        "aria-labelledby": null != s ? `${N} ${E}` : void 0,
        "aria-errormessage": y?.errorMessageId,
        "aria-invalid": y?.errorMessageId != null || void 0,
        "aria-describedby": y?.describedById,
        onClick: M,
        onMouseDown: L,
        onKeyDown: H,
        onBlur: U,
    };
    return (0, i.jsxs)("div", {
        ref: (e) => {
            (R.current = e), v.setReference(e);
        },
        className: o,
        ...j(),
        children: [
            null != s && (0, i.jsx)(f.A, { tag: "label", id: N, children: s }),
            p({ buttonRef: k, selectButtonProps: q }),
            !u &&
                x &&
                (0, i.jsx)("div", {
                    ref: C,
                    className: a()(nS.S_, d),
                    ...b(),
                    style: { ...A, ...I },
                    children: (0, i.jsx)(nC.q, {
                        id: P,
                        tabIndex: -1,
                        items: l,
                        selectionMode: "single",
                        selectedItems: G,
                        onSelectionChange: V,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: S,
                        renderListItem: (e) => (null != m ? m(e) : (0, i.jsx)(nN.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var nT = n(138325);
let nO = "MAIN_PROFILE";
function n_(e) {
    let { guild: l } = e;
    return (0, i.jsx)(nb.Ay, { className: nT.$f, guild: l, size: nb.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function nG(e) {
    let { leading: l, label: n, disabled: t, buttonRef: r, selectButtonProps: s } = e;
    return (0, i.jsxs)(eP.D, {
        innerRef: r,
        className: a()(nT.L5, { [nT.r9]: t }),
        tabIndex: !0 === t ? -1 : 0,
        ...s,
        children: [
            l,
            (0, i.jsx)(ek.E, {
                variant: "text-md/medium",
                color: !0 === t ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: nT.v9,
                children: n,
            }),
            (0, i.jsx)(nA.a, {
                className: nT.u4,
                size: "sm",
                color: !0 === t ? lm.A.colors.ICON_MUTED : lm.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function nM(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([nI.Ay], () => nI.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([l3.A], () => l3.A.getGuilds()),
        c = (0, s.bG)([eG.A], () => {
            let e = eG.A.getGuildId();
            return null == e || el._.has(e) ? null : e;
        }),
        g = t.useMemo(() => {
            let e = {
                    id: nO,
                    label: eL.intl.string(eL.t["2p07FR"]),
                    value: nO,
                    leading: (0, i.jsx)(nj.p, { size: "refresh_sm", color: lm.A.colors.ICON_DEFAULT }),
                },
                l = n ?? c,
                t = d
                    .map((e) => {
                        if (e === l) return null;
                        let n = u[e];
                        return null == n
                            ? null
                            : { id: n.id, label: n.name, value: n.id, leading: (0, i.jsx)(n_, { guild: n }) };
                    })
                    .filter(X.Vq),
                r = null != l ? u[l] : null;
            return null == r
                ? [e, ...t]
                : [e, { id: r.id, label: r.name, value: r.id, leading: (0, i.jsx)(n_, { guild: r }) }, ...t];
        }, [d, u, n, c]),
        f = l ?? nO,
        m = g.find((e) => e.value === f) ?? g[0],
        p = t.useCallback(
            (e) => {
                r(e === nO ? null : e);
            },
            [r],
        );
    return (0, i.jsx)(nD, {
        className: nT.kL,
        label: eL.intl.string(eL.t.rki38K),
        listboxClassName: nT.yt,
        options: g,
        value: f,
        onSelectionChange: p,
        loading: a,
        disabled: o,
        children: (e) =>
            (0, i.jsx)(nG, { leading: m.value === nO ? null : m.leading, label: m.label, disabled: o, ...e }),
    });
}
var nL = n(809467);
let nw = "profile-modal-editing-panel",
    nU = "profile-modal-editing-panel-heading";
function nV(e) {
    let { onClick: l, className: n, innerRef: t } = e;
    return (0, i.jsx)(e7.m, {
        text: eL.intl.string(eL.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, i.jsx)(eP.D, {
            innerRef: t,
            "aria-label": eL.intl.string(eL.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": nw,
            className: a()(nL.eg, n),
            onClick: l,
            focusProps: { offset: { right: 6 } },
            children: (0, i.jsx)(lf.V, { size: "sm", color: lm.A.colors.ICON_STRONG }),
        }),
    });
}
function nF(e) {
    let { onClick: l, className: n, buttonRef: t } = e;
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(e7.m, {
            text: eL.intl.string(eL.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, i.jsx)(lp.K, {
                buttonRef: t,
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
    return (0, i.jsx)(e7.m, {
        text: eL.intl.string(eL.t["l/A351"]),
        ariaHidden: !0,
        children: (0, i.jsx)(eP.D, {
            innerRef: n,
            className: nL.cS,
            "aria-label": eL.intl.string(eL.t["l/A351"]),
            onClick: l,
            "aria-controls": nw,
            "aria-expanded": !0,
            children: (0, i.jsx)(lx.V, { size: "md", color: "currentColor" }),
        }),
    });
}
function nz() {
    let [e, l] = (0, lC.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, i.jsxs)("div", {
              className: nL.X6,
              children: [
                  (0, i.jsx)(ek.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eL.intl.string(eL.t["gBIG/N"]),
                  }),
                  (0, i.jsx)(eP.D, {
                      "aria-label": eL.intl.string(eL.t.rSe9ra),
                      className: nL.TD,
                      onClick: () => l(!0),
                      children: (0, i.jsx)(lh.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function nH() {
    let e = () => {
        (0, lN.K)({ stackingBehavior: "stack" });
    };
    return (0, i.jsxs)("div", {
        className: nL.eW,
        children: [
            (0, i.jsxs)("div", {
                className: nL.tm,
                children: [
                    (0, i.jsx)(lv.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: eL.intl.string(eL.t.bO0TOe),
                    }),
                    (0, i.jsx)(ek.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: eL.intl.format(eL.t["3PujdE"], { onClick: e }),
                    }),
                ],
            }),
            (0, i.jsx)(lA.$, {
                variant: "expressive",
                size: "sm",
                icon: lj.t,
                text: eL.intl.string(eL.t["7IWwak"]),
                onClick: e,
                fullWidth: !0,
            }),
            (0, i.jsx)("div", {
                className: nL.D0,
                children: (0, i.jsx)("div", { className: nL.ZN, children: (0, i.jsx)(lb.X, { size: "xs" }) }),
            }),
        ],
    });
}
function nW(e) {
    let { heading: l, children: n, disabled: t = !1, showNitroIcon: r = !1 } = e;
    return (0, i.jsxs)("div", {
        className: nL.Os,
        children: [
            (0, i.jsxs)("div", {
                className: nL.AM,
                children: [
                    (0, i.jsx)(lv.D, {
                        className: nL.i_,
                        variant: "text-sm/medium",
                        color: t ? "text-muted" : "text-strong",
                        children: l,
                    }),
                    r &&
                        (0, i.jsx)(e7.m, {
                            text: eL.intl.string(eL.t.BNg1ir),
                            shouldShow: !t,
                            ariaHidden: !0,
                            children: (0, i.jsx)(lj.t, {
                                className: nL.l3,
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
function nK(e) {
    let { isDismissed: l } = e;
    return (0, d.p)(!l, {
        initial: { opacity: 1, y: 0 },
        from: { opacity: 0, y: 48 },
        enter: { opacity: 1, y: 0, config: { tension: 200, friction: 25 } },
        leave: { opacity: 0, y: 48, config: { tension: 300, friction: 25 } },
    })((e, l) =>
        l ? (0, i.jsx)(lg.animated.div, { className: nL.HT, style: e, children: (0, i.jsx)(np, {}) }) : null,
    );
}
function nq(e) {
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
        h = null != l,
        v = null != g && lE.Ay.canUsePremiumProfileCustomization(g),
        A = !v && !h,
        j = h && !v,
        b = (0, eX.A)(r),
        I = t.useRef(null),
        {
            isUpsellDismissed: C,
            handleScrollDismiss: y,
            shouldAddUpsellSafePadding: N,
        } = (function (e) {
            let { scrollerRef: l, canShowUpsell: n } = e,
                [i, r] = t.useState("pending-measurement"),
                [a, s] = t.useState(!1);
            t.useLayoutEffect(() => {
                if (!n) return void r("pending-measurement");
                let e = l.current?.getScrollerNode();
                null == e || (s(!1), r(e.scrollHeight - e.clientHeight >= 86 ? "dismiss-on-scroll" : "safe-padding"));
            }, [l, n]);
            let o = t.useCallback(
                (e) => {
                    if ("dismiss-on-scroll" !== i) return;
                    let { scrollTop: l } = e.currentTarget;
                    !a && l >= 86 ? s(!0) : a && l <= 43 && s(!1);
                },
                [i, a],
            );
            return {
                isUpsellDismissed: a,
                handleScrollDismiss: o,
                shouldAddUpsellSafePadding: "safe-padding" === i && n,
            };
        })({ scrollerRef: I, canShowUpsell: A });
    return null == g
        ? null
        : (0, i.jsxs)("aside", {
              id: nw,
              "aria-labelledby": nU,
              className: a()(nL.nd, { [nL.VU]: j && !p }, u),
              "aria-busy": o,
              children: [
                  (0, i.jsx)(f.A, { children: (0, i.jsx)(m.H, { id: nU, children: eL.intl.string(eL.t["L+ch00"]) }) }),
                  (0, i.jsxs)("div", {
                      className: nL.wx,
                      children: [
                          (0, i.jsx)(nB, { innerRef: c, onClick: d }),
                          (0, i.jsx)(nM, {
                              selectedGuildId: l ?? null,
                              originGuildId: n,
                              onChange: b,
                              loading: o,
                              disabled: p,
                          }),
                      ],
                  }),
                  p
                      ? (0, i.jsx)(nv, {})
                      : (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(m.F, {
                                    children: (0, i.jsxs)(lI.zC, {
                                        ref: I,
                                        className: a()(nL.XG, { [nL.uH]: N }),
                                        onScroll: y,
                                        children: [
                                            h && (v ? (0, i.jsx)(nz, {}) : (0, i.jsx)(nH, {})),
                                            (0, i.jsx)(nW, {
                                                heading: eL.intl.string(eL.t.x5CoXR),
                                                disabled: o || j,
                                                children: (0, i.jsx)(lJ.A, { user: g, guildId: l, disabled: o || j }),
                                            }),
                                            (0, i.jsxs)(nW, {
                                                heading: eL.intl.string(eL.t["50Nwpc"]),
                                                disabled: o || j,
                                                children: [
                                                    (0, i.jsx)(lP.A, { user: g, guildId: l, disabled: o || j }),
                                                    (0, i.jsx)(lk.A, { user: g, guildId: l, disabled: o || j }),
                                                ],
                                            }),
                                            (v || h) &&
                                                (0, i.jsx)(nW, {
                                                    heading: eL.intl.string(eL.t.NEzEws),
                                                    disabled: o || j,
                                                    showNitroIcon: !0,
                                                    children: (0, i.jsx)(lZ, { user: g, guildId: l, disabled: o || j }),
                                                }),
                                            v || h
                                                ? (0, i.jsxs)(nW, {
                                                      heading: eL.intl.string(eL.t.Zenogr),
                                                      disabled: o || j,
                                                      showNitroIcon: !0,
                                                      children: [
                                                          (0, i.jsx)(nu, { user: g, guildId: l, disabled: o || !v }),
                                                          (0, i.jsx)(lH, {
                                                              userId: g.id,
                                                              guildId: l,
                                                              disabled: o || !v,
                                                          }),
                                                      ],
                                                  })
                                                : (0, i.jsx)(nW, {
                                                      heading: eL.intl.string(eL.t["/X3fkf"]),
                                                      disabled: o || j,
                                                      children: (0, i.jsx)(lM, { user: g, disabled: o }),
                                                  }),
                                            (0, i.jsxs)(nW, {
                                                heading: eL.intl.string(x ? eL.t["Vfbar/"] : eL.t.wR5wOo),
                                                disabled: o || j,
                                                children: [
                                                    (0, i.jsx)(l6, {
                                                        user: g,
                                                        guildId: l,
                                                        disabled: o || j,
                                                        variant: x ? "square" : "full-height-bar",
                                                    }),
                                                    x && (0, i.jsx)(nn, { user: g, guildId: l, disabled: o || j }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                                A && (0, i.jsx)(nK, { isDismissed: C }),
                            ],
                        }),
              ],
          });
}
var nX = n(982599),
    nY = n(756634),
    n$ = n(83013),
    nZ = n(518477),
    nJ = n(77085);
function nQ(e) {
    let { userId: l } = e,
        n = (0, eo.g)(),
        { trackUserProfileAction: t } = (0, L.NJ)();
    return (0, i.jsx)(n$.A, {
        heading: eL.intl.string(eL.t["mQKv+v"]),
        scrollTargetId: nZ.bk.NOTE,
        children: (0, i.jsx)(nY.A, {
            userId: l,
            className: nJ.N,
            autoFocus: n === nZ.bk.NOTE,
            onUpdate: () => t({ action: "SET_NOTE" }),
        }),
    });
}
var n0 = n(289873),
    n1 = n(778599);
function n7(e) {
    let { isVisible: l, showLoadingSpinner: n, className: t } = e;
    return (0, i.jsx)("div", {
        className: a()(n1.f, l && n1.z, t),
        children: n && (0, i.jsx)(n0.y, { type: n0.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
    });
}
var n3 = n(568602),
    n2 = n(625494);
function n8(e) {
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
                n2._.subscribe(eQ.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    n2._.unsubscribe(eQ.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, i.jsx)(n3.b, { isShaking: n, intensity: 1.4, children: l })
    );
}
var n9 = n(515054),
    n5 = n(933832),
    n6 = n(972213),
    n4 = n(97483),
    ie = n(765178),
    il = n(775602),
    ii = n(606758),
    it = n(707238),
    ir = n(861173);
let ia = {
        [nZ.jM.WIDGET_ADDED]: {
            message: eL.intl.string(eL.t.fFP1Uy),
            icon: (0, i.jsx)(n5.A, { size: "sm", color: lm.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_added",
        },
        [nZ.jM.WIDGET_REMOVED]: {
            message: eL.intl.string(eL.t.zzsK7h),
            icon: (0, i.jsx)(n5.A, { size: "sm", color: lm.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_removed",
        },
        [nZ.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eL.intl.string(eL.t["84MExs"]),
            icon: (0, i.jsx)(n6.d, { size: "sm", color: lm.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_save_generic_failure",
            type: n4.Ck.FAILURE,
        },
        [nZ.jM.SOMETHING_WENT_WRONG]: {
            message: eL.intl.string(eL.t.F8FvUy),
            icon: (0, i.jsx)(n6.d, { size: "sm", color: lm.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_something_went_wrong",
            type: n4.Ck.FAILURE,
        },
    },
    is = (e) => {
        let { message: l, icon: n, type: t } = e;
        return (0, i.jsxs)("div", {
            className: a()(ir.oR, it.oR),
            "data-type": t,
            children: [
                (0, i.jsx)("div", { className: it.RC, children: n }),
                (0, i.jsx)(ek.E, { color: "text-strong", variant: "text-sm/semibold", children: l }),
            ],
        });
    },
    io = (e) => {
        let { className: l } = e,
            n = (0, ii.fu)(),
            r = (0, s.bG)([il.A], () => il.A.useReducedMotion),
            [o, u] = t.useState(!1),
            [c, g] = t.useState(null);
        t.useEffect(() => {
            null !== n ? (u(!0), g(ia[n]), ie.O.announce(ia[n].message)) : u(!1);
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
            t.useEffect(() => () => (0, ii.XA)(null), []),
            t.useEffect(() => {
                if (o) {
                    let e = setTimeout(() => {
                        (0, ii.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [o]),
            (0, i.jsx)(i.Fragment, {
                children: f(
                    (e, n) =>
                        n &&
                        null !== c &&
                        (0, i.jsx)(lg.animated.div, {
                            className: a()(l, it.Jt),
                            style: e,
                            children: (0, i.jsx)(is, { ...c }),
                        }),
                ),
            })
        );
    };
var id = n(297413),
    iu = n(878555),
    ic = n(621466),
    ig = n(219869),
    im = n(292666),
    ip = n(539396);
function ix(e, l) {
    let [n, i] = t.useState("idle"),
        [r, a] = t.useState(e),
        o = "editing" === n,
        d = (0, s.bG)([il.A], () => il.A.useReducedMotion),
        u = t.useRef(null),
        c = t.useRef(null),
        g = t.useRef(null),
        f = t.useRef(!1),
        m = t.useId(),
        p = t.useCallback(() => {
            a(e), i("editing");
        }, [e]),
        x = t.useCallback(() => {
            l(r), i("done");
        }, [r, l]),
        h = t.useCallback(() => {
            i("done");
        }, []);
    t.useEffect(() => {
        "done" === n && (f.current && u.current?.focus({ preventScroll: !0 }), (f.current = !1));
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
                !o || (null != g.current && (0, ic.vq)(e.relatedTarget) && g.current.contains(e.relatedTarget)) || x();
            },
            [o, x],
        ),
        A = t.useCallback(
            (e) => {
                o && "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), (f.current = !0), h());
            },
            [o, h],
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
        handleCancel: h,
        previewProps: { isEditing: o, editButtonRef: u, onStartEditing: p, wrapperRef: g, onBlur: v, onKeyDown: A },
        inputProps: {
            inputId: m,
            inputRef: c,
            value: r,
            onChange: a,
            onCommit: () => {
                (f.current = !0), x();
            },
            onCancel: () => {
                (f.current = !0), h();
            },
        },
    };
}
function ih(e) {
    let { text: l, htmlFor: n } = e;
    return (0, i.jsx)(f.A, { tag: "label", htmlFor: n, children: l });
}
function iv(e) {
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
        m = t.useCallback(
            (e) => {
                "Enter" === e.key
                    ? (e.preventDefault(), o())
                    : "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), d());
            },
            [o, d],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(ih, { text: r, htmlFor: l }),
            (0, i.jsx)(im.k, {
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
function iA(e) {
    let { tooltip: l, ...n } = e,
        t = (0, i.jsx)("div", {
            className: ip.L7,
            children: (0, i.jsx)(ig.T, { ...n, size: "sm", variant: "input-accessory" }),
        });
    return null == l ? t : (0, i.jsx)(e7.m, { text: l, ariaHidden: !0, children: t });
}
function ij(e) {
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
        h = t.useRef(null),
        v = t.useId(),
        A = null == n,
        j = (0, i.jsxs)("div", {
            ref: h,
            className: ip.LL,
            onClick: u,
            children: [
                A
                    ? (0, i.jsx)(ek.E, {
                          id: v,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: ip.qf,
                          children: r,
                      })
                    : n,
                (0, i.jsx)(eP.D, {
                    innerRef: o,
                    "aria-label": d,
                    "aria-describedby": A ? v : void 0,
                    "aria-expanded": !1,
                    onClick: (e) => {
                        e.stopPropagation(), u();
                    },
                    focusProps: { ringTarget: h },
                }),
                null != g && (0, i.jsx)("div", { className: ip.lD, children: (0, i.jsx)(iA, { ...g }) }),
            ],
        });
    return (0, i.jsx)("div", {
        ref: m,
        className: a()(ip.kL, { [ip.oE]: "compact" === c }, f),
        onBlur: p,
        onKeyDown: x,
        children: (0, i.jsx)(
            "div",
            { className: ip.qG, children: l ? s : (0, i.jsx)("div", { className: ip.VH, children: j }) },
            l ? "editing" : "preview",
        ),
    });
}
var ib = n(35783);
function iI(e) {
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
        h = m?.guildId ?? void 0,
        v = lE.Ay.canUsePremiumProfileCustomization(f),
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
            onCommit: t.useCallback(
                (e) => {
                    n
                        ? (0, l_.p)({ nickname: e.trim(), guildId: m?.guildId ?? void 0 })
                        : (0, l_.p)({ globalName: e.trim() });
                },
                [n, m?.guildId],
            ),
        }),
        { isEditing: C, previewProps: y, inputProps: N, handleCommit: E } = ix(A, I),
        P = (0, s.bG)([el.A], () => el.A.getPendingChanges(h ?? null).pendingDisplayNameStyles),
        k = eL.intl.string(x ? eL.t.mq6Cg9 : eL.t.XuZU7A),
        R = x ? eL.intl.string(eL.t.YcDKr8) : f.username,
        S = eL.intl.string(x ? eL.t["g7OSZ/"] : eL.t.kyfzzc),
        D = t.useRef(null),
        T = t.useCallback(
            (e) => {
                e.stopPropagation(),
                    C && E(),
                    (0, lq.L)({ analyticsLocations: p, guildId: h, stackingBehavior: "stack", returnRef: D });
            },
            [C, E, p, h],
        ),
        O = {
            icon: lf.V,
            tooltip: eL.intl.string(eL.t.lqKKI2),
            "aria-label": eL.intl.string(eL.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: T,
            buttonRef: D,
        },
        _ = v ? O : void 0,
        G =
            null != b
                ? (0, i.jsx)(iu.c$, {
                      user: f,
                      guildId: h,
                      displayName: b,
                      size: "lg",
                      pendingDisplayNameStyles: P,
                      className: ib.d,
                  })
                : null;
    return (0, i.jsx)(ij, {
        ...y,
        preview: G,
        placeholder: R,
        editButtonAriaLabel: S,
        trailing: _,
        input: (0, i.jsx)(iv, { ...N, label: k, maxLength: eQ.zzC, placeholder: R, trailing: _ }),
    });
}
var iC = n(469432);
function iy(e) {
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
            onCommit: t.useCallback(
                (e) => {
                    (0, l_.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        { previewProps: m, inputProps: p, isEditing: x } = ix(c, f),
        h = u?.guildId != null,
        v = null != g && g.length > 0,
        A = eL.intl.string(h ? eL.t.AXiE0i : eL.t["76Aqhl"]);
    return (0, i.jsx)(ij, {
        ...m,
        variant: "compact",
        className: a()(iC.k, x && iC.J),
        preview: v ? (0, i.jsx)(iu.n2, { pronouns: g }) : null,
        placeholder: A,
        editButtonAriaLabel: eL.intl.string(eL.t.h6VAO7),
        input: (0, i.jsx)(iv, { ...p, label: eL.intl.string(eL.t["rniRE+"]), placeholder: A, maxLength: eQ.VE5 }),
    });
}
var iN = n(145497),
    iE = n(685073),
    iP = n(318785),
    ik = n(534400),
    iR = n(743981),
    iS = n(724637),
    iD = n(329296);
let iT = "no-server-tag";
function iO(e) {
    let { buttonRef: l, guildId: n, guildTag: t, guildBadge: r, ...s } = e,
        o = null == t || null == n;
    return (0, i.jsx)(eP.D, {
        innerRef: l,
        className: a()(iS.L5, { [iS.wK]: o }),
        ...s,
        children: (0, i.jsxs)(ek.E, {
            variant: o ? "text-xs/normal" : "text-xs/semibold",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: iS.W3,
            tag: "span",
            children: [
                o
                    ? eL.intl.string(eL.t.Pdd1nd)
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(
                                  ik.Z9,
                                  {
                                      src: (0, iE.gC)(n, r, iR.Sl.SIZE_14),
                                      size: iR.Sl.SIZE_14,
                                      className: iS.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, iE.gC)(n, r, iR.Sl.SIZE_14) ?? n,
                              ),
                              t,
                          ],
                      }),
                (0, i.jsx)(nA.a, { size: "xs", color: "currentColor", className: iS.u4 }),
            ],
        }),
    });
}
function i_() {
    let e = (0, iP.b)(),
        l = t.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        n = (0, s.bG)([ee.default], () => {
            let e = ee.default.getCurrentUser();
            return (0, iE.Zo)(e?.primaryGuild).guildId ?? null;
        }),
        r = (0, s.bG)([el.A], () => el.A.getPendingChanges(null).pendingPrimaryGuildId),
        a = void 0 !== r ? r : n,
        o = null != a ? (l.get(a) ?? null) : null,
        d = o?.profile?.tag ?? null,
        u = o?.profile?.badge ?? void 0,
        c = t.useCallback(
            (e) =>
                e.id === iT
                    ? (0, i.jsx)("div", {
                          className: iD.uN,
                          children: (0, i.jsx)(ek.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: iS.ve,
                              children: e.label,
                          }),
                      })
                    : (0, i.jsx)(nN.c, { ...e }),
            [],
        ),
        g = t.useMemo(
            () => [
                { id: iT, label: eL.intl.string(eL.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let l = e.profile?.tag;
                    if (null == l) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, i.jsx)(iN.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, i.jsx)(ik.o9, { guildId: e.id, guildTag: l, guildBadge: n }),
                        },
                    ];
                }),
            ],
            [e],
        ),
        f = t.useCallback((e) => {
            (0, l_.p)({ primaryGuildId: e });
        }, []);
    return 0 === e.length
        ? null
        : (0, i.jsx)(nD, {
              options: g,
              value: a,
              onSelectionChange: f,
              label: eL.intl.string(eL.t.Pdd1nd),
              listboxClassName: iS.yt,
              renderListItem: c,
              children: (e) => {
                  let { buttonRef: l, selectButtonProps: n } = e;
                  return (0, i.jsx)(iO, { buttonRef: l, guildId: a, guildTag: d, guildBadge: u, ...n });
              },
          });
}
var iG = n(874644),
    iM = n(246950);
function iL(e) {
    let { user: l, displayProfile: n, nickname: t, trailing: r, onClose: s, allowEditing: o } = e;
    if (!o)
        return (0, i.jsx)(iu.Ay, {
            user: l,
            guildId: n?.guildId ?? void 0,
            displayName: t,
            displayNameSize: "lg",
            pronouns: n?.pronouns,
            trailing: r,
            onClose: s,
        });
    let d = l.isProvisional
        ? null
        : (0, i.jsx)(id.A, {
              user: l,
              forceUsername: !0,
              className: iG.a1,
              usernameClass: a()(iG.eb, iM.W),
              discriminatorClass: a()(iG.sw, iM.W),
              hideBotTag: !0,
          });
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(iI, { displayProfile: n, user: l }),
            (0, i.jsxs)("div", {
                className: a()(iG.AK, iG.j6),
                children: [d, (0, i.jsx)(iu.Ce, {}), (0, i.jsx)(iy, { displayProfile: n }), (0, i.jsx)(i_, {}), r],
            }),
        ],
    });
}
n(321073);
var iw = n(97808),
    iU = n(980707),
    iV = n(477782),
    iF = n(22231),
    iB = n(601255),
    iz = n(562819),
    iH = n(19575),
    iW = n(106106),
    iK = n(338165);
let iq = iH.Ay.getEnableHardwareAcceleration() ? iw.Js : iw.eu;
function iX(e) {
    let { onMenuClose: l, items: n, ...t } = e;
    return (0, i.jsx)(iU.W, {
        ...t,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eL.intl.string(eL.t.YAgq3W),
        children: (0, i.jsx)(iV.rX, { children: n }),
    });
}
function iY(e) {
    let { user: l, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, eu.V)(e),
        [d, u] = t.useState(!1),
        c = t.useRef(null),
        g = t.useCallback(() => u(!1), []),
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
                h = p || null == n,
                v = (0, s.bG)([l3.A], () => (null != n ? l3.A.getGuild(n) : null)),
                A = (0, Z.a4)({ user: l }),
                b = (0, Z.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: I } = (0, Z.CP)(n ?? void 0),
                C = void 0 !== I,
                y = null != (0, iB.A)(C ? I : b) && (C ? null != I : null != b),
                N = d && null != A,
                E = t.useCallback(() => {
                    r(),
                        (0, lw.XD)({
                            uploadType: lU.HL.AVATAR,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                P = t.useCallback(() => {
                    r(), (0, iz.L)({ analyticsLocations: o, guild: v ?? void 0, stackingBehavior: "stack" });
                }, [r, o, v]),
                k = t.useCallback(() => {
                    r(),
                        (0, lw.rM)(null, g, (e) => (0, l_.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, Z.WU)(m ? "reset" : "remove");
                }, [r, n, g, m]),
                R = t.useCallback(() => {
                    r(), (0, l_.p)({ guildId: n ?? void 0, avatarDecoration: null });
                }, [r, n]);
            return t.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, i.jsx)(
                                iV.Dr,
                                { id: "change-avatar", label: eL.intl.string(eL.t["4OynCD"]), action: E },
                                "change-avatar",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, i.jsx)(
                                iV.Dr,
                                { id: "change-decoration", label: eL.intl.string(eL.t.HykynS), action: P },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        f &&
                        e.push(
                            m
                                ? (0, i.jsx)(
                                      iV.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.TDjKDm),
                                          action: k,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, i.jsx)(
                                      iV.Dr,
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
                        y &&
                        e.push(
                            N
                                ? (0, i.jsx)(
                                      iV.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eL.intl.string(eL.t["2u5yu0"]),
                                          action: R,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, i.jsx)(
                                      iV.Dr,
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
            }, [m, x, h, N, f, y, E, P, k, R]);
        })({ user: l, guildId: n, onClose: g });
    return 0 === f.length
        ? (0, i.jsx)(eu.A, { ...e })
        : (0, i.jsxs)("div", {
              ...o,
              className: a()(iW.my, iW.vk, iK.kL, { [iK.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, i.jsx)(iq, { ...r, imageClassName: a()(iW.Lw, iK.HU) }),
                  (0, i.jsx)(lD.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: lD.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: g,
                      renderPopout: (e) => (0, i.jsx)(iX, { ...e, items: f, onMenuClose: g }),
                      children: (e) =>
                          (0, i.jsx)("div", {
                              ref: c,
                              className: iK.r9,
                              children: (0, i.jsx)(lp.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: iF.R,
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
var i$ = n(976726);
function iZ(e) {
    let { onMenuClose: l, items: n, ...t } = e;
    return (0, i.jsx)(iU.W, {
        ...t,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eL.intl.string(eL.t.FzU73A),
        children: (0, i.jsx)(iV.rX, { children: n }),
    });
}
function iJ(e) {
    let { user: l, guildId: n } = e,
        [r, o] = t.useState(!1),
        d = t.useRef(null),
        u = t.useCallback(() => o(!1), []),
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
                    pendingProfileEffect: h,
                    pendingProfileFrame: v,
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
                R = void 0 === h ? null != d : null != h,
                S = void 0 === v ? null != u : null != v,
                D = (0, Z.lw)({
                    pendingValue: v,
                    userValue: c,
                    guildValue: null != n ? u : void 0,
                    guildId: n ?? void 0,
                }),
                T = (0, C.A)(D?.skuId, "UserProfileModalV2EditableBanner"),
                O = t.useCallback(() => {
                    r(),
                        (0, lw.XD)({
                            uploadType: lU.HL.BANNER,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                _ = t.useCallback(() => {
                    r(),
                        (0, l1.W)({
                            analyticsLocations: o,
                            guild: null != n ? (l3.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, d]),
                G = t.useCallback(() => {
                    r(), (0, lw.rM)(null, A, (e) => (0, l_.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, A]),
                M = t.useCallback(() => {
                    r(), (0, l_.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]),
                L = t.useCallback(() => {
                    r(),
                        (0, l4.w)({
                            analyticsLocations: o,
                            guild: null != n ? (l3.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: T,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, T]),
                U = t.useCallback(() => {
                    r(), (0, l_.p)({ guildId: n ?? void 0, profileFrame: null });
                }, [r, n]);
            return t.useMemo(() => {
                let e = [];
                return (
                    g &&
                        e.push(
                            (0, i.jsx)(
                                iV.Dr,
                                { id: "change-banner", label: eL.intl.string(eL.t.N0bC3P), action: O },
                                "change-banner",
                            ),
                        ),
                    f &&
                        e.push(
                            (0, i.jsx)(
                                iV.Dr,
                                { id: "change-effect", label: eL.intl.string(eL.t["/6nv6N"]), action: _ },
                                "change-effect",
                            ),
                        ),
                    m &&
                        e.push(
                            (0, i.jsx)(
                                iV.Dr,
                                { id: "change-frame", label: eL.intl.string(eL.t["oTSa/q"]), action: L },
                                "change-frame",
                            ),
                        ),
                    g &&
                        N &&
                        e.push(
                            E
                                ? (0, i.jsx)(
                                      iV.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.jHlJNS),
                                          action: G,
                                      },
                                      "reset-banner",
                                  )
                                : (0, i.jsx)(
                                      iV.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.tT9n7D),
                                          action: G,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    f &&
                        R &&
                        e.push(
                            P
                                ? (0, i.jsx)(
                                      iV.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.Lb7lu9),
                                          action: M,
                                      },
                                      "reset-effect",
                                  )
                                : (0, i.jsx)(
                                      iV.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.zUOlT6),
                                          action: M,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    m &&
                        S &&
                        e.push(
                            k
                                ? (0, i.jsx)(
                                      iV.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.A0pzWn),
                                          action: U,
                                      },
                                      "reset-frame",
                                  )
                                : (0, i.jsx)(
                                      iV.Dr,
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
            }, [E, g, f, m, P, k, N, R, S, O, _, L, G, M, U]);
        })({ user: l, guildId: n, onClose: u });
    return 0 === c.length
        ? (0, i.jsx)(eg.A, { ...e })
        : (0, i.jsxs)("div", {
              className: a()(i$.kL, { [i$.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, i.jsx)(eg.A, { ...e, className: i$.Pr }),
                  (0, i.jsx)(lD.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: lD.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: u,
                      renderPopout: (e) => (0, i.jsx)(iZ, { ...e, items: c, onMenuClose: u }),
                      children: (e) =>
                          (0, i.jsx)("div", {
                              ref: d,
                              className: i$.r9,
                              children: (0, i.jsx)(lp.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: iF.R,
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
var iQ = n(777480),
    i0 = n(107563),
    i1 = n(570287);
n(938796);
var i7 = n(913453),
    i3 = n(667049),
    i2 = n(837531),
    i8 = n(186272),
    i9 = n(645625),
    i5 = n(337796);
let i6 = (e) => e * (2 - e),
    i4 = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } },
    te = (e) => {
        let { type: l, anchor: n } = e;
        return "staple" !== l || "bottom" !== n;
    };
function tl(e) {
    let { displayProfile: l, pendingBanner: n } = e,
        r = (0, B.Nx)(),
        [a, s] = t.useState(void 0);
    if (
        (t.useEffect(() => {
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
        : (0, i.jsx)("div", { className: i9.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function tn(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: t } = e,
        r = void 0 !== n ? n : l?.profileEffect;
    return null == r ? null : (0, i.jsx)(b.A, { skuId: r.skuId, isHovering: t });
}
function ti(e) {
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
            avatarDecorationOverride: v,
            avatarOverride: A,
            bannerOverride: j,
            profileEffectOverride: b,
            profileFrame: I,
            allowEditing: C = !1,
            isLoading: N = !1,
        } = e,
        E = l.id === n.id,
        T = t.useRef(null),
        { isHoveringOrFocusing: G } = (0, P.A)(T),
        [L, w] = t.useState(),
        U = t.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? w("compact-xs") : l <= 380 ? w("compact-sm") : w(void 0);
        }, []);
    (0, h.g)(T, U, [], { fireOnMount: !0 });
    let V = null != L ? i4[L] : void 0,
        F = t.useMemo(() => p ?? (0, k.A)(), [p]),
        { relationshipType: B, originApplicationId: $ } = (0, s.cf)([O.A], () => ({
            relationshipType: O.A.getRelationshipType(l.id),
            originApplicationId: O.A.getOriginApplicationId(l.id),
        })),
        Z = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        J = (0, S.q)({ userId: l.id }),
        Q = (0, R.fi)(l.id),
        { appIdentities: ee, connections: el } = (function (e) {
            let { filteredAppIdentities: l } = (0, q.A)(e),
                n = (0, Y.A)(e),
                i = (0, W.useIsRiotSocialSDKMigrationEnabled)({
                    location: "useVisibleUserProfileConnectionsAndAppIdentities",
                }),
                r = t.useMemo(() => new Set(i ? (l?.map((e) => e.application_id) ?? []) : []), [l, i]),
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
                        i
                            ? n.filter((e) => {
                                  let l = H.A.get(e.type);
                                  return l?.replacedBy == null || !r.has(l.replacedBy);
                              })
                            : n,
                    [n, r, i],
                ),
            };
        })(l.id),
        ei = (0, z.A)(l.id),
        et = el.length > 0 || ee.length > 0,
        er = ei.length > 0,
        ea = C ? iJ : eg.A,
        es = C ? iY : eu.A;
    return (0, i.jsxs)("main", {
        className: a()(i9.profile, null != L && i9[L]),
        ref: T,
        "aria-busy": N,
        children: [
            (0, i.jsxs)("div", {
                className: i9.profileHeader,
                children: [
                    (0, i.jsx)(ea, {
                        user: l,
                        displayProfile: g,
                        guildId: r,
                        themeType: en.d.MODAL_V2,
                        specOverrides: V,
                        pendingBanner: j,
                    }),
                    (0, i.jsx)(ev.A, { userId: l.id, onClose: x, className: i9.interactionToast }),
                    (0, i.jsx)(es, {
                        user: l,
                        displayProfile: g,
                        guildId: r,
                        channelId: d,
                        themeType: en.d.MODAL_V2,
                        specOverrides: V,
                        avatarDecorationOverride: v,
                        avatarOverride: A,
                    }),
                    (0, i.jsx)(ey.A, {
                        user: l,
                        guildId: r,
                        channelId: d,
                        themeType: en.d.MODAL_V2,
                        hasEntered: m,
                        prompt: E ? F : null,
                    }),
                ],
            }),
            (0, i.jsxs)(u.Ip, {
                fade: !0,
                className: i9.profileBody,
                children: [
                    (0, i.jsx)(ep.A, { userId: l.id }),
                    (0, i.jsx)(iL, {
                        user: l,
                        displayProfile: g,
                        nickname: f,
                        trailing: (0, i.jsx)(ec.A, { displayProfile: g, themeType: en.d.MODAL_V2, onClose: x }),
                        onClose: x,
                        allowEditing: C,
                    }),
                    B === eQ.eA$.PENDING_INCOMING &&
                        (0, i.jsx)(eC.A.Overlay, {
                            className: i9.profileOverlay,
                            children: (0, i.jsx)(eh.A, {
                                user: l,
                                applicationId: $,
                                guildId: g?.guildId ?? void 0,
                                channelId: d,
                                className: i9.profileBanner,
                            }),
                        }),
                    Q.map((e) => {
                        let { applicationId: n } = e;
                        return (0, i.jsx)(
                            eC.A.Overlay,
                            {
                                className: i9.profileOverlay,
                                children: (0, i.jsx)(eh.A, {
                                    user: l,
                                    guildId: g?.guildId ?? void 0,
                                    channelId: d,
                                    isGameRelationship: !0,
                                    applicationId: n,
                                    className: i9.profileBanner,
                                }),
                            },
                            n,
                        );
                    }),
                    l.isProvisional &&
                        (0, i.jsx)(eC.A.Overlay, {
                            className: i9.profileOverlay,
                            children: (0, i.jsx)(n$.A, {
                                heading: eL.intl.string(eL.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, i.jsx)(c.E, { size: "xs", color: "currentColor" }),
                                className: i9.profileBanner,
                                children: (0, i.jsx)(D.T, { userId: l.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, i.jsx)(eI.A, { user: l, className: i9.profileBanner }),
                    g?.private &&
                        (0, i.jsx)(eC.A.Overlay, {
                            className: i9.profileOverlay,
                            children: (0, i.jsx)(eb.A, { username: f }),
                        }),
                    (0, i.jsx)("div", {
                        className: i9.profileButtons,
                        children: (0, i.jsx)(e0, {
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
                    E && (0, i.jsx)(em.A, { isPremiumUser: (0, M.ki)(n), onInteraction: x }),
                    !Z && (0, i.jsx)(ef.E, { userBio: g?.bio, setLineClamp: !1 }),
                    J.length > 0 &&
                        (0, i.jsx)(n$.A, {
                            heading: eL.intl.string(eL.t["Uv/eTx"]),
                            children: (0, i.jsx)(ex.A, { applicationIds: J }),
                        }),
                    (0, i.jsx)(n$.A, {
                        heading: eL.intl.string(eL.t.a6XYD9),
                        children: (0, i.jsx)(eA.A, {
                            userId: l.id,
                            guildId: g?.guildId,
                            tooltipDelay: nZ.In,
                            textClassName: C ? i9.memberSinceText : void 0,
                        }),
                    }),
                    g?.guildId != null &&
                        (0, i.jsx)(eN.A, {
                            userId: l.id,
                            guildId: g.guildId,
                            className: i9.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "currentColor",
                        }),
                    !Z &&
                        (C || et) &&
                        (0, i.jsx)(n$.A, {
                            heading: eL.intl.string(eL.t["3fe7U5"]),
                            scrollTargetId: nZ.bk.CONNECTIONS,
                            children: (0, i.jsx)(lc, {
                                applicationIdentities: ee,
                                connections: el,
                                userId: l.id,
                                allowEditing: C,
                                className: i9.profileAppConnections,
                            }),
                        }),
                    !Z &&
                        er &&
                        (0, i.jsx)(n$.A, {
                            heading: eL.intl.string(eL.t.PHjkRE),
                            scrollTargetId: nZ.bk.APPS,
                            children: (0, i.jsx)(eV, {
                                applicationRoleConnections: ei,
                                onClose: x,
                                className: i9.profileAppConnections,
                            }),
                        }),
                    (0, i.jsx)(nQ, { userId: l.id }),
                ],
            }),
            (0, i.jsx)(tn, { displayProfile: g, profileEffectOverride: b, isHovering: G }),
            null != I && (0, i.jsx)(y.A, { frame: I, filterLayer: te }),
        ],
    });
}
function tt(e) {
    let { user: l, displayProfile: n, pendingThemeColors: t, children: r } = e,
        {
            theme: a,
            primaryColor: s,
            secondaryColor: o,
        } = (0, F.A)({ user: l, displayProfile: n, pendingThemeColors: t }),
        { profileThemeStyle: d, profileThemeClassName: u } = (0, $.A)({
            theme: a,
            themeType: null,
            primaryColor: s,
            secondaryColor: o,
        });
    return (0, i.jsx)("div", { className: u, style: d, children: r });
}
function tr(e) {
    let {
            user: l,
            currentUser: n,
            guildId: r,
            originGuildId: o,
            channelId: u,
            messageId: c,
            roleId: h,
            sessionId: b,
            initialTabSection: y,
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
            pendingGuildId: H,
            isLoading: W,
            selectUserProfile: K,
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
                        (0, ea.A)(l, void 0, {
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
        q = t.useMemo(() => (null != z ? { [z]: [l.id] } : {}), [z, l.id]);
    (0, v.Eq)(q, "UserProfileModalV2");
    let X = (0, U.X)("UserProfileModalV2"),
        Y = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        $ = B && X,
        ei = $ && !Y,
        {
            pendingThemeColors: es,
            avatarDecorationOverride: eu,
            avatarOverride: ec,
            bannerOverride: eg,
            profileEffectOverride: ef,
            profileFrameOverride: em,
        } = (function (e) {
            let { userId: l, guildId: n, allowEditingInModal: i } = e;
            return (0, s.cf)([el.A, ee.default, Q.Ay, w.A], () => {
                if (!i) return er;
                let e = ee.default.getUser(l);
                if (null == e) return er;
                let {
                        pendingThemeColors: t,
                        pendingAvatarDecoration: r,
                        pendingAvatar: a,
                        pendingBanner: s,
                        pendingProfileEffect: o,
                        pendingProfileFrame: d,
                    } = el.A.getPendingChanges(n),
                    u = null != n ? Q.Ay.getMember(n, l) : null,
                    c = w.A.getUserProfile(l),
                    g = null != n ? w.A.getGuildMemberProfile(l, n) : null;
                return {
                    pendingThemeColors: t,
                    avatarDecorationOverride: (0, Z.us)({
                        userValue: e.avatarDecoration,
                        guildValue: u?.avatarDecoration,
                        pendingValue: r,
                        guildId: n,
                    }),
                    avatarOverride: (0, J.V7)({ userId: l, image: a, size: et }),
                    bannerOverride: s,
                    profileEffectOverride: (0, Z.us)({
                        userValue: c?.profileEffect,
                        guildValue: g?.profileEffect,
                        pendingValue: o,
                        guildId: n,
                    }),
                    profileFrameOverride: (0, Z.us)({
                        userValue: c?.profileFrame,
                        guildValue: g?.profileFrame,
                        pendingValue: d,
                        guildId: n,
                    }),
                };
            }, [l, n, i]);
        })({ userId: l.id, allowEditingInModal: ei, guildId: z }),
        {
            isExpanded: ep,
            isAnimating: ex,
            transition: eh,
            handleExpand: ev,
            handleCollapse: eA,
            refs: { expandIconButtonRef: eb, expandTabButtonRef: eI, collapseButtonRef: ey },
        } = (function () {
            let [e, l] = t.useState(() => window.innerWidth > 928),
                [n, i] = t.useState(!1),
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: i6 },
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
                f = t.useCallback(() => {
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
                    handleExpand: g,
                    handleCollapse: f,
                    refs: { expandIconButtonRef: s, expandTabButtonRef: o, collapseButtonRef: u },
                }
            );
        })(),
        eN = $ && !ep,
        eE = $ && (!ep || ex),
        { defaultWishlistId: eP } = (0, s.cf)([w.A], () => ({ defaultWishlistId: w.A.getFirstWishlistId(l.id) }));
    (0, T.fw)({ wishlistId: eP, userId: l.id });
    let ek = (0, ed.fC)(),
        eR = W || null != ek.interactionType,
        eS = (function (e) {
            let l,
                n,
                i,
                { user: t, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, i7.A)(t),
                d = o?.length,
                u =
                    ((l = (0, s.bG)([ee.default], () => ee.default.getCurrentUser())),
                    (n = (0, s.bG)([w.A], () => w.A.getUserProfile(t.id))),
                    (i =
                        n?.bio === "" &&
                        n?.pronouns === "" &&
                        n?.banner === void 0 &&
                        n?.accentColor === void 0 &&
                        n?.banner === void 0 &&
                        t.flags === t.publicFlags &&
                        (n?.badges == null || n?.badges?.length === 0)),
                    l?.id !== t.id && !i),
                c = (0, i3.A)(t.id),
                g = (0, i1.A)(t.id),
                f = [],
                m = t.id === r?.id,
                p = w.A.getFirstWishlistId(t.id),
                x = null != p,
                h = x ? w.A.getWishlistSettings(t.id, p) : null,
                v = (x ? i0.A.getWishlistItems(p) : []).length > 0,
                A = c.length > 0;
            (m || A) && f.push({ text: eL.intl.string(eL.t.laViwx), section: nZ.RP.WIDGETS }),
                f.push({ text: eL.intl.string(eL.t.chq59f), section: nZ.RP.ACTIVITY });
            let j = !1 === t.nsfwAllowed,
                b = O.A.isFriend(t.id),
                I = h?.visibility === iQ.a.PUBLIC;
            return (
                (m || (!m && v && I && g && (!j || (j && b)))) &&
                    f.push({ text: eL.intl.string(eL.t["7lZ31J"]), section: nZ.RP.WISHLIST }),
                t.id !== r?.id &&
                    u &&
                    (f.push({ text: (0, i2.A)(a), section: nZ.RP.MUTUAL_FRIENDS }),
                    f.push({ text: (0, i8.A)(d), section: nZ.RP.MUTUAL_GUILDS })),
                f
            );
        })({ user: l, currentUser: n }),
        { analyticsLocations: eD } = (0, j.Ay)([...M, A.A.USER_PROFILE_MODAL_V2]),
        eT = (0, L.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: b,
            guildId: z,
            channelId: u,
            messageId: c,
            roleId: h,
        }),
        eO = (0, V.Ay)(l.id, z),
        e_ = void 0 !== em ? em?.skuId : eO?.profileFrame?.skuId,
        eG = (0, C.A)(e_, "UserProfileModalV2"),
        eM = (0, N.A)(e_);
    (0, I.A)({ skuId: eO?.profileFrame?.skuId, openedAt: S, context: eT, analyticsLocations: eD });
    let ew = G.Ay.useName(eO?.guildId, u, l),
        eU = (0, E.GV)(),
        eV = eL.intl.format(eL.t.KRe1Fk, { name: ew });
    return (0, i.jsx)(j.f5, {
        value: eD,
        children: (0, i.jsx)(L.of, {
            value: eT,
            openedAt: S,
            fetchStartedAt: eO?.fetchStartedAt,
            fetchEndedAt: eO?.fetchEndedAt,
            isLoaded: eO?.isLoaded,
            children: (0, i.jsx)(ed.Hl, {
                value: ek,
                children: (0, i.jsx)(eo.N, {
                    value: P,
                    children: (0, i.jsxs)(g.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(i5.zr, { [i5.QF]: eO?.private === !0 }),
                        transitionState: k,
                        "aria-labelledby": eU,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, i.jsx)(n8, {
                                children: (0, i.jsxs)("div", {
                                    className: a()(i9.layoutContainer, eM, {
                                        [i9.editingPanelEnabled]: $,
                                        [i9.editingPanelExpanded]: $ && ep,
                                        [i9.isAnimating]: ex,
                                    }),
                                    children: [
                                        (0, i.jsxs)(tt, {
                                            user: l,
                                            displayProfile: eO,
                                            pendingThemeColors: es,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: i5.Oo,
                                                    children: [
                                                        (0, i.jsx)(e1.A, { isCurrentUser: B, onClose: D }),
                                                        (0, i.jsx)(f.A, {
                                                            children: (0, i.jsx)(m.H, { id: eU, children: eV }),
                                                        }),
                                                        eE &&
                                                            (0, i.jsx)(nF, {
                                                                buttonRef: eb,
                                                                onClick: ev,
                                                                className: i9.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eN &&
                                                    (0, i.jsx)("div", {
                                                        className: i9.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, i.jsx)(nV, {
                                                            innerRef: eI,
                                                            onClick: ev,
                                                            className: i9.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, i.jsxs)(m.F, {
                                            children: [
                                                $ &&
                                                    eh((e, l) =>
                                                        l
                                                            ? (0, i.jsx)(nq, {
                                                                  className: a()(i9.editingPanel, {
                                                                      [i9.isExpanded]: ep,
                                                                  }),
                                                                  selectedGuildId: H,
                                                                  originGuildId: o,
                                                                  onSelectGuildId: K,
                                                                  onClose: eA,
                                                                  collapseButtonRef: ey,
                                                                  isLoading: W,
                                                              })
                                                            : null,
                                                    ),
                                                (0, i.jsxs)(eC.A, {
                                                    className: a()(F, i5.A7, i9.profileContentOuter),
                                                    innerClassName: i9.profileContentInner,
                                                    user: l,
                                                    displayProfile: eO,
                                                    themeType: en.d.MODAL_V2,
                                                    pendingThemeColors: es,
                                                    isPrivate: eO?.private === !0,
                                                    children: [
                                                        (0, i.jsx)(tl, { displayProfile: eO, pendingBanner: eg }),
                                                        eO?.private === !0 && (0, i.jsx)(ej.A, {}),
                                                        (0, i.jsx)(n7, { isVisible: eR, showLoadingSpinner: W }),
                                                        (0, i.jsx)(io, { className: i9.toast }),
                                                        (0, i.jsx)(ti, {
                                                            user: l,
                                                            currentUser: n,
                                                            guildId: z,
                                                            channelId: u,
                                                            displayProfile: eO,
                                                            nickname: ew,
                                                            originGuildId: o,
                                                            hasEntered: k === p.ip.ENTERED,
                                                            customStatusPrompt: R,
                                                            onClose: D,
                                                            avatarDecorationOverride: eu,
                                                            avatarOverride: ec,
                                                            bannerOverride: eg,
                                                            profileEffectOverride: ef,
                                                            profileFrame: eG,
                                                            allowEditing: ei,
                                                            isLoading: W,
                                                        }),
                                                        (0, i.jsx)(n9.A, {
                                                            user: l,
                                                            currentUser: n,
                                                            displayProfile: eO,
                                                            guildId: z,
                                                            channelId: u,
                                                            items: eS,
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
                            (0, i.jsx)(nX.A, { userId: l.id, guildId: z, className: i9.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
