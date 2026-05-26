n.d(l, { A: () => t5 });
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
    L = n(562153),
    G = n(474090),
    M = n(183555),
    w = n(841595),
    U = n(591179),
    V = n(999291),
    F = n(101928),
    B = n(837529),
    z = n(346713),
    H = n(573648),
    W = n(941314),
    K = n(429913),
    Y = n(321078),
    q = n(403362),
    $ = n(484509),
    X = n(920601),
    Z = n(919395),
    J = n(101058),
    Q = n(696451),
    ee = n(287809),
    el = n(836602),
    en = n(996988),
    et = n(985253);
let ei = (0, o.FT)(et.T[en.d.MODAL_V2].avatarSize),
    er = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        profileEffectOverride: void 0,
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
    ec = n(694720),
    eg = n(915614),
    em = n(308244),
    ef = n(744753),
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
    eL = n(967198),
    eG = n(488995),
    eM = n(375708),
    ew = n(815e3);
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
                                        entrypoint: { name: eT.sW.APPLICATION_DIRECTORY_URL },
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
                                children: eM.intl.format(eM.t.zIT9YA, { applicationHook: () => l.application.name }),
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
        { trackUserProfileAction: r } = (0, M.NJ)(),
        o = (0, s.bG)([eO.default], () => eO.default.locale),
        d = (0, s.bG)([eL.A], () => eL.A.getGuildId());
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
    eY = n(859040),
    eq = n(23722),
    e$ = n(993401);
function eX(e) {
    let { onClose: l, ...n } = e,
        { analyticsLocations: i, newestAnalyticsLocation: r } = (0, j.Ay)(),
        a = (0, eq.A)(() => {
            (0, eY.Cz)({ analyticsLocations: i, analyticsSource: r }), l?.();
        });
    return (0, t.jsx)(e$.q3, {
        action: "VISIT_SHOP",
        icon: eK.U,
        tooltipText: eM.intl.string(eM.t.b2d0N0),
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
            gameFriends: m,
            hasOutgoingPendingGameFriends: f,
            hasIncomingPendingGameFriends: p,
        } = (0, eJ.J)({ userId: l.id }),
        x = m.length > 0 || f || p;
    return o === eQ.eA$.BLOCKED
        ? null
        : l.id === n.id
          ? u
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(eH.e, { userId: l.id, variant: "primary", disabled: !0 }),
                        (0, t.jsx)(eX, { onClose: d }),
                        (0, t.jsx)(eW.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(ez.A, { user: l, guildId: i, onClose: d }),
                        (0, t.jsx)(eX, { onClose: d }),
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
                                gameFriends: m,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: f,
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
    e9 = n(349288),
    e2 = n(509434),
    e3 = n(307301),
    e5 = n(228366),
    e8 = n(95561),
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
    e5.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: la, stackingBehavior: "stack" });
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
                : (0, t.jsx)(e9.Anchor, {
                      href: e,
                      className: ew.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${l.name}, ${eM.intl.string(eM.t.q5jLJB)}`
                              : `${l.name}, ${eM.intl.string(eM.t.q5jLJB)}`,
                      onClick: (n) => {
                          (0, e8.zV)(eQ.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: i }),
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
                        alt: eM.intl.formatToPlainString(eM.t.rtm15P, { name: i }),
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
                                    children: eM.intl.format(eM.t["9rfonh"], { date: s }),
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
        d = (0, s.bG)([eO.default], () => eO.default.locale);
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
                        (0, t.jsx)(e3.j, { size: "sm", color: "currentColor" }),
                        (0, t.jsx)(ek.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: eM.intl.string(eM.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var lg = n(873174),
    lm = n(193885),
    lf = n(661531),
    lp = n(408278),
    lx = n(890377),
    lh = n(789645),
    lv = n(534514),
    lA = n(821609),
    lj = n(403581),
    lb = n(194261),
    lI = n(689175),
    lC = n(517461),
    ly = n(835071),
    lN = n(428262),
    lE = n(487233),
    lP = n(120386),
    lk = n(317097),
    lR = n(602853),
    lS = n(922016),
    lD = n(508274),
    lT = n(654107),
    lO = n(84540),
    l_ = n(930349);
function lL(e) {
    let { user: l, disabled: n = !1 } = e,
        r = i.useRef(null),
        a = (0, lR.r)(lf.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, lT.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([el.A, w.A], () => ({
            pendingAccentColor: el.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: w.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, lk.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, lO.p)({ accentColor: e }), []);
    return (0, t.jsx)(lS.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(lD.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(l_.V, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                accessibleLabel: eM.intl.string(eM.t["/X3fkf"]),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, t.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, lk.Hl)(c) } }),
            }),
    });
}
var lG = n(450373),
    lM = n(252732),
    lw = n(339984),
    lU = n(633949);
function lV(e) {
    let { backgroundColor: l } = e;
    return (0, t.jsx)("div", { className: lU.o, style: { backgroundColor: l } });
}
function lF(e) {
    let { src: l } = e;
    return (0, t.jsx)("img", { src: l, alt: "", className: lU._ });
}
function lB(e) {
    let { displayProfile: l, pendingBanner: n, shouldAnimate: i } = e,
        r = (0, lR.r)(lf.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = l?.primaryColor ?? (0, lk.LX)(r),
        { hex: s } = (0, lG.A)(a),
        o = l?.getPreviewBanner(n, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(lF, { src: o }) : (0, t.jsx)(lV, { backgroundColor: s });
}
function lz(e) {
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
        m = a && (o?.isUsingGuildMemberBanner() ?? !1),
        f = g && a && !m ? void 0 : d,
        p = (0, Z.Ac)(d, c),
        x = a && null != u,
        h = p
            ? {
                  onClick: () => (0, lM.rM)(null, c, (e) => (0, lO.p)({ guildId: n ?? void 0, banner: e })),
                  type: x ? "reset" : "remove",
                  accessibleLabel: eM.intl.string(x ? eM.t.jHlJNS : eM.t.tT9n7D),
              }
            : void 0;
    return (0, t.jsx)(l_.V, {
        affordance: h,
        variant: "square",
        onClick: () =>
            (0, lM.XD)({
                uploadType: lw.HL.BANNER,
                analyticsSource: r,
                guildId: n ?? void 0,
                stackingBehavior: "stack",
            }),
        accessibleLabel: eM.intl.string(eM.t.N0bC3P),
        "aria-haspopup": "dialog",
        disabled: i,
        showOverlayOnHover: !0,
        renderPreview: (e) => (0, t.jsx)(lB, { displayProfile: o, pendingBanner: f, shouldAnimate: e }),
    });
}
var lH = n(922301),
    lW = n(368919),
    lK = n(259065),
    lY = n(759767);
let lq = "heading-lg/bold";
function l$(e) {
    let { displayName: l, stylesPreview: n, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: lY.M,
        children:
            null != n
                ? (0, t.jsx)(ek.E, {
                      variant: lq,
                      children: (0, t.jsx)(lW.A, {
                          userName: l,
                          displayNameStyles: n,
                          effectDisplayType: i ? lH.G.ANIMATED : lH.G.STATIC,
                          textClassName: lY.W,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, t.jsx)(ek.E, { variant: lq, className: lY.W, color: "text-muted", children: l }),
    });
}
function lX(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: a } = (0, j.Ay)(),
        o = null != n,
        d = (0, s.bG)([Q.Ay], () => (null != n ? (Q.Ay.getMember(n, l.id)?.nick ?? null) : null)),
        u = (0, s.bG)([ee.default], () => ee.default.getCurrentUser()?.globalName ?? null),
        c = (0, s.bG)([el.A], () => el.A.getPendingChanges(null).pendingGlobalName),
        g = (0, s.bG)([el.A], () => el.A.getPendingChanges(n ?? null).pendingNickname),
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
        y = o ? (I(void 0 !== g ? g : d) ?? I(C) ?? l.username) : (I(C) ?? l.username),
        N =
            null != b && (h ? null != p : null != x)
                ? {
                      onClick: () => (0, lO.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: A ? "reset" : "remove",
                      accessibleLabel: eM.intl.string(A ? eM.t.en3ogK : eM.t["Wqmi/h"]),
                  }
                : void 0,
        E = i.useCallback(() => {
            (0, lK.L)({ analyticsLocations: a, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [a, n]);
    return (0, t.jsx)(l_.V, {
        affordance: (!v && (h || null != x)) || A ? N : "add",
        variant: "bar",
        onClick: E,
        accessibleLabel: eM.intl.string(eM.t.XJ4oOO),
        "aria-haspopup": "dialog",
        renderPreview: (e) => (0, t.jsx)(l$, { stylesPreview: b, displayName: y, shouldAnimate: e }),
        disabled: r,
    });
}
var lZ = n(473219),
    lJ = n(366010),
    lQ = n(736653),
    l0 = n(617061),
    l1 = n(203632),
    l7 = n(71393),
    l9 = n(897145);
function l2(e) {
    let { effect: l, shouldAnimate: n } = e,
        i = (0, lQ.Ay)(),
        r = (0, lJ.M)(i)
            ? "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png"
            : "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
    return (0, t.jsxs)("div", {
        className: l9.B0,
        "aria-hidden": !0,
        children: [
            (0, t.jsx)("img", { src: r, alt: "", className: l9.AH }),
            l?.skuId != null &&
                (0, t.jsx)(b.A, {
                    skuId: l.skuId,
                    autoPlay: !1,
                    resetOnHover: !0,
                    restartMethod: l1.HL.FromStart,
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
        d = (0, s.bG)([l7.A], () => (null != n ? l7.A.getGuild(n) : null)),
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
                      onClick: () => (0, lO.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: p ? "reset" : "remove",
                      accessibleLabel: eM.intl.string(p ? eM.t["SQy/Po"] : eM.t.uMuafO),
                  }
                : void 0,
        v = i.useCallback(() => {
            (0, l0.W)({
                analyticsLocations: a,
                guild: d ?? void 0,
                initialSelectedEffect: x ?? void 0,
                stackingBehavior: "stack",
            });
        }, [a, d, x]);
    return (0, t.jsx)(l_.V, {
        affordance: f && !p ? "add" : h,
        variant: "full-height-bar",
        onClick: v,
        accessibleLabel: eM.intl.string(eM.t["/dRfCf"]),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) => (0, t.jsx)(l2, { effect: x, shouldAnimate: e }),
    });
}
var l5 = n(33851),
    l8 = n.n(l5),
    l6 = n(684732),
    l4 = n(458217),
    ne = n(698195);
function nl(e) {
    let { color: l, suggestedColors: n, disabled: r, ariaLabel: s, onSelect: o, buttonRef: d } = e,
        u = i.useRef(null),
        c = d ?? u,
        g = (0, lk.Hl)(l),
        m = (0, lk.bJ)(l, 0xffffff) < l4.Tr.NonText;
    return (0, t.jsx)(lS.Y, {
        targetElementRef: c,
        renderPopout: (e) => (0, t.jsx)(lD.VN, { ...e, value: l, onChange: o, suggestedColors: n, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: l, ...n } = e;
            return (0, t.jsx)(eP.D, {
                ...n,
                innerRef: c,
                className: ne.Dh,
                onClick: r ? void 0 : l,
                "aria-label": s,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)("div", { className: a()(ne.Hy, { [ne.rY]: m }), style: { backgroundColor: g } }),
            });
        },
    });
}
function nn(e) {
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
        c = (0, lk.Hl)(l),
        g = (0, lk.Hl)(n),
        m = `linear-gradient(to bottom, ${c}, ${g})`,
        f = eM.intl.formatToPlainString(eM.t.FquTfm, { colorLabel: c }),
        p = eM.intl.formatToPlainString(eM.t.xOnm4z, { colorLabel: g }),
        x =
            null != d
                ? {
                      ...d,
                      onClick: () => {
                          d.onClick(), u.current?.focus();
                      },
                  }
                : void 0;
    return (0, t.jsx)(l_.Y, {
        variant: "square",
        disabled: o,
        deleteButton: x,
        children: (0, t.jsxs)("div", {
            className: ne.D7,
            style: { background: m },
            children: [
                (0, t.jsx)(nl, { color: l, suggestedColors: s, ariaLabel: f, onSelect: r, disabled: o, buttonRef: u }),
                (0, t.jsx)(nl, { color: n, suggestedColors: s, ariaLabel: p, onSelect: a, disabled: o }),
            ],
        }),
    });
}
function nt(e) {
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
        { primaryColor: g, secondaryColor: m } = (0, F.A)({
            user: l,
            displayProfile: a,
            pendingThemeColors: o,
            pendingAvatarSrc: c ?? void 0,
            isPreview: !0,
        }),
        f = (0, lR.r)(lf.A.unsafe_rawColors.PRIMARY_530).hex(),
        p = null != c ? c : l.getAvatarURL(n ?? void 0, 80),
        x = (0, lT.rh)(p, f, !1),
        h = i.useCallback(
            (e) => {
                let l = l8()(e, a?.themeColors);
                (0, lO.p)({ guildId: n ?? void 0, themeColors: l ? void 0 : e });
            },
            [a?.themeColors, n],
        ),
        v =
            null != n && (0, l6.l)(o, u)
                ? {
                      onClick: () => (0, lO.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eM.intl.string(eM.t["L+GmoR"]),
                  }
                : void 0;
    return null == g || null == m
        ? null
        : (0, t.jsx)(nn, {
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
var ni = n(315629),
    nr = n(783420),
    na = n(788868),
    ns = n(979172);
function no() {
    return (0, t.jsx)(nr.A, {
        subscriptionTier: na.pe.TIER_2,
        children: (e) => {
            let { onClick: l } = e;
            return (0, t.jsxs)(ni.h, {
                color: "nitro-pink",
                className: ns.U,
                children: [
                    (0, t.jsx)(ek.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: eM.intl.format(eM.t.TmfgI2, { onClick: (e) => l(e) }),
                    }),
                    (0, t.jsx)(lA.$, {
                        variant: "expressive",
                        size: "md",
                        icon: lj.t,
                        text: eM.intl.string(eM.t.pj0XBN),
                        onClick: l,
                        fullWidth: !0,
                    }),
                ],
            });
        },
    });
}
var nd = n(55619),
    nu = n(749668);
function nc() {
    return (0, t.jsxs)("div", {
        className: nu.k,
        children: [
            (0, t.jsx)(ek.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eM.intl.string(eM.t.JFY17v),
            }),
            (0, t.jsx)(lA.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eM.intl.string(eM.t.R9GHya),
                onClick: () => nd.A.setEnabled(!1),
            }),
        ],
    });
}
var ng = n(847374),
    nm = n(111159),
    nf = n(548118),
    np = n(711014),
    nx = n(540637),
    nh = n(801461),
    nv = n(44482),
    nA = n(844222),
    nj = n(561392),
    nb = n(716263),
    nI = n(15626),
    nC = n(365736);
function ny(e) {
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
            let { reducedMotion: e } = i.useContext(nA.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, nj.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, nb.DL)(o, {
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
        y = i.useContext(nI._),
        N = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        R = i.useRef(null),
        [S, D] = i.useState(null),
        T = null != S ? (0, nh.ZN)(P, S) : void 0,
        O = i.useRef(!1),
        _ = i.useRef(!1),
        L = i.useMemo(() => l.filter((e) => (0, nh.fI)(e.value, [n])), [n, l]),
        G = i.useCallback(() => {
            u || h(!x);
        }, [u, h, x]),
        M = i.useCallback(
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
        { activeIndex: F, handleKeyDown: B } = (0, nx.l)(!0, l),
        z = i.useRef(null);
    i.useEffect(() => {
        let e = F !== z.current;
        (z.current = F), null != F && e && (D(F), x || ((O.current = !0), h(!0)));
    }, [F, x, h]);
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
            l.findIndex((e) => e.id === L[L.length - 1]?.id),
            0,
        ),
        K = i.useRef(!1);
    i.useEffect(() => {
        c || !x || K.current
            ? x || ((K.current = !1), D(null), (O.current = !1))
            : ((K.current = !0), O.current || D(l.length > 0 ? W : null), (O.current = !1), k.current?.focus());
    }, [c, x, W, l.length]);
    let Y = {
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
        onClick: G,
        onMouseDown: M,
        onKeyDown: H,
        onBlur: U,
    };
    return (0, t.jsxs)("div", {
        ref: (e) => {
            (R.current = e), v.setReference(e);
        },
        className: o,
        ...j(),
        children: [
            null != s && (0, t.jsx)(m.A, { tag: "label", id: N, children: s }),
            p({ buttonRef: k, selectButtonProps: Y }),
            !u &&
                x &&
                (0, t.jsx)("div", {
                    ref: C,
                    className: a()(nC.S_, d),
                    ...b(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(nx.q, {
                        id: P,
                        tabIndex: -1,
                        items: l,
                        selectionMode: "single",
                        selectedItems: L,
                        onSelectionChange: V,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: S,
                        renderListItem: (e) => (null != f ? f(e) : (0, t.jsx)(nv.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var nN = n(833749);
let nE = "MAIN_PROFILE";
function nP(e) {
    let { guild: l } = e;
    return (0, t.jsx)(nf.Ay, { className: nN.$f, guild: l, size: nf.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function nk(e) {
    let { leading: l, label: n, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(eP.D, {
        innerRef: r,
        className: a()(nN.L5, { [nN.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            l,
            (0, t.jsx)(ek.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: nN.v9,
                children: n,
            }),
            (0, t.jsx)(ng.a, {
                className: nN.u4,
                size: "sm",
                color: !0 === i ? lf.A.colors.ICON_MUTED : lf.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function nR(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([np.Ay], () => np.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([l7.A], () => l7.A.getGuilds()),
        c = (0, s.bG)([eL.A], () => {
            let e = eL.A.getGuildId();
            return null == e || el._.has(e) ? null : e;
        }),
        g = i.useMemo(() => {
            let e = {
                    id: nE,
                    label: eM.intl.string(eM.t["2p07FR"]),
                    value: nE,
                    leading: (0, t.jsx)(nm.p, { size: "refresh_sm", color: lf.A.colors.ICON_DEFAULT }),
                },
                l = n ?? c,
                i = d
                    .map((e) => {
                        if (e === l) return null;
                        let n = u[e];
                        return null == n
                            ? null
                            : { id: n.id, label: n.name, value: n.id, leading: (0, t.jsx)(nP, { guild: n }) };
                    })
                    .filter(q.Vq),
                r = null != l ? u[l] : null;
            return null == r
                ? [e, ...i]
                : [e, { id: r.id, label: r.name, value: r.id, leading: (0, t.jsx)(nP, { guild: r }) }, ...i];
        }, [d, u, n, c]),
        m = l ?? nE,
        f = g.find((e) => e.value === m) ?? g[0],
        p = i.useCallback(
            (e) => {
                r(e === nE ? null : e);
            },
            [r],
        );
    return (0, t.jsx)(ny, {
        className: nN.kL,
        label: eM.intl.string(eM.t.rki38K),
        listboxClassName: nN.yt,
        options: g,
        value: m,
        onSelectionChange: p,
        loading: a,
        disabled: o,
        children: (e) =>
            (0, t.jsx)(nk, { leading: f.value === nE ? null : f.leading, label: f.label, disabled: o, ...e }),
    });
}
var nS = n(455611);
let nD = "profile-modal-editing-panel",
    nT = "profile-modal-editing-panel-heading";
function nO(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(e7.m, {
        text: eM.intl.string(eM.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(eP.D, {
            innerRef: i,
            "aria-label": eM.intl.string(eM.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": nD,
            className: a()(nS.eg, n),
            onClick: l,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(lm.V, { size: "sm", color: lf.A.colors.ICON_STRONG }),
        }),
    });
}
function n_(e) {
    let { onClick: l, className: n, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(e7.m, {
            text: eM.intl.string(eM.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(lp.K, {
                buttonRef: i,
                "aria-label": eM.intl.string(eM.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": nD,
                icon: lm.V,
                onClick: l,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function nL(e) {
    let { onClick: l, innerRef: n } = e;
    return (0, t.jsx)(e7.m, {
        text: eM.intl.string(eM.t["l/A351"]),
        ariaHidden: !0,
        children: (0, t.jsx)(eP.D, {
            innerRef: n,
            className: nS.cS,
            "aria-label": eM.intl.string(eM.t["l/A351"]),
            onClick: l,
            "aria-controls": nD,
            "aria-expanded": !0,
            children: (0, t.jsx)(lx.V, { size: "md", color: "currentColor" }),
        }),
    });
}
function nG() {
    let [e, l] = (0, lC.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: nS.X6,
              children: [
                  (0, t.jsx)(ek.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eM.intl.string(eM.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(eP.D, {
                      "aria-label": eM.intl.string(eM.t.rSe9ra),
                      className: nS.TD,
                      onClick: () => l(!0),
                      children: (0, t.jsx)(lh.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function nM() {
    let e = () => {
        (0, ly.K)({ stackingBehavior: "stack" });
    };
    return (0, t.jsxs)("div", {
        className: nS.eW,
        children: [
            (0, t.jsxs)("div", {
                className: nS.tm,
                children: [
                    (0, t.jsx)(lv.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: eM.intl.string(eM.t.bO0TOe),
                    }),
                    (0, t.jsx)(ek.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: eM.intl.format(eM.t["3PujdE"], { onClick: e }),
                    }),
                ],
            }),
            (0, t.jsx)(lA.$, {
                variant: "expressive",
                size: "sm",
                icon: lj.t,
                text: eM.intl.string(eM.t["7IWwak"]),
                onClick: e,
                fullWidth: !0,
            }),
            (0, t.jsx)("div", {
                className: nS.D0,
                children: (0, t.jsx)("div", { className: nS.ZN, children: (0, t.jsx)(lb.X, { size: "xs" }) }),
            }),
        ],
    });
}
function nw(e) {
    let { heading: l, children: n, disabled: i = !1, showNitroIcon: r = !1 } = e;
    return (0, t.jsxs)("div", {
        className: nS.Os,
        children: [
            (0, t.jsxs)("div", {
                className: nS.AM,
                children: [
                    (0, t.jsx)(lv.D, {
                        className: nS.i_,
                        variant: "text-sm/medium",
                        color: i ? "text-muted" : "text-strong",
                        children: l,
                    }),
                    r &&
                        (0, t.jsx)(e7.m, {
                            text: eM.intl.string(eM.t.BNg1ir),
                            shouldShow: !i,
                            ariaHidden: !0,
                            children: (0, t.jsx)(lj.t, {
                                className: nS.l3,
                                size: "xs",
                                color: i ? lf.A.colors.ICON_MUTED : lf.A.colors.ICON_STRONG,
                                "aria-hidden": !0,
                            }),
                        }),
                ],
            }),
            n,
        ],
    });
}
function nU(e) {
    let { isDismissed: l } = e;
    return (0, d.p)(!l, {
        initial: { opacity: 1, y: 0 },
        from: { opacity: 0, y: 48 },
        enter: { opacity: 1, y: 0, config: { tension: 200, friction: 25 } },
        leave: { opacity: 0, y: 48, config: { tension: 300, friction: 25 } },
    })((e, l) =>
        l ? (0, t.jsx)(lg.animated.div, { className: nS.HT, style: e, children: (0, t.jsx)(no, {}) }) : null,
    );
}
function nV(e) {
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
        x = null != l,
        h = null != g && lN.Ay.canUsePremiumProfileCustomization(g),
        v = !h && !x,
        A = x && !h,
        j = (0, eq.A)(r),
        b = i.useRef(null),
        {
            isUpsellDismissed: I,
            handleScrollDismiss: C,
            shouldAddUpsellSafePadding: y,
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
        })({ scrollerRef: b, canShowUpsell: v });
    return null == g
        ? null
        : (0, t.jsxs)("aside", {
              id: nD,
              "aria-labelledby": nT,
              className: a()(nS.nd, { [nS.VU]: A && !p }, u),
              "aria-busy": o,
              children: [
                  (0, t.jsx)(m.A, { children: (0, t.jsx)(f.H, { id: nT, children: eM.intl.string(eM.t["L+ch00"]) }) }),
                  (0, t.jsxs)("div", {
                      className: nS.wx,
                      children: [
                          (0, t.jsx)(nL, { innerRef: c, onClick: d }),
                          (0, t.jsx)(nR, {
                              selectedGuildId: l ?? null,
                              originGuildId: n,
                              onChange: j,
                              loading: o,
                              disabled: p,
                          }),
                      ],
                  }),
                  p
                      ? (0, t.jsx)(nc, {})
                      : (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(f.F, {
                                    children: (0, t.jsxs)(lI.zC, {
                                        ref: b,
                                        className: a()(nS.XG, { [nS.uH]: y }),
                                        onScroll: C,
                                        children: [
                                            x && (h ? (0, t.jsx)(nG, {}) : (0, t.jsx)(nM, {})),
                                            (0, t.jsx)(nw, {
                                                heading: eM.intl.string(eM.t.x5CoXR),
                                                disabled: o || A,
                                                children: (0, t.jsx)(lZ.A, { user: g, guildId: l, disabled: o || A }),
                                            }),
                                            (0, t.jsxs)(nw, {
                                                heading: eM.intl.string(eM.t["50Nwpc"]),
                                                disabled: o || A,
                                                children: [
                                                    (0, t.jsx)(lE.A, { user: g, guildId: l, disabled: o || A }),
                                                    (0, t.jsx)(lP.A, { user: g, guildId: l, disabled: o || A }),
                                                ],
                                            }),
                                            (h || x) &&
                                                (0, t.jsx)(nw, {
                                                    heading: eM.intl.string(eM.t.NEzEws),
                                                    disabled: o || A,
                                                    children: (0, t.jsx)(lX, { user: g, guildId: l, disabled: o || A }),
                                                }),
                                            h || x
                                                ? (0, t.jsxs)(nw, {
                                                      heading: eM.intl.string(eM.t.Zenogr),
                                                      disabled: o || A,
                                                      showNitroIcon: !0,
                                                      children: [
                                                          (0, t.jsx)(nt, { user: g, guildId: l, disabled: o || !h }),
                                                          (0, t.jsx)(lz, {
                                                              userId: g.id,
                                                              guildId: l,
                                                              disabled: o || !h,
                                                          }),
                                                      ],
                                                  })
                                                : (0, t.jsx)(nw, {
                                                      heading: eM.intl.string(eM.t["/X3fkf"]),
                                                      disabled: o || A,
                                                      children: (0, t.jsx)(lL, { user: g, disabled: o }),
                                                  }),
                                            (0, t.jsx)(nw, {
                                                heading: eM.intl.string(eM.t.wR5wOo),
                                                disabled: o || A,
                                                children: (0, t.jsx)(l3, { user: g, guildId: l, disabled: o || A }),
                                            }),
                                        ],
                                    }),
                                }),
                                v && (0, t.jsx)(nU, { isDismissed: I }),
                            ],
                        }),
              ],
          });
}
var nF = n(982599),
    nB = n(756634),
    nz = n(83013),
    nH = n(518477),
    nW = n(723229);
function nK(e) {
    let { userId: l } = e,
        n = (0, eo.g)(),
        { trackUserProfileAction: i } = (0, M.NJ)();
    return (0, t.jsx)(nz.A, {
        heading: eM.intl.string(eM.t["mQKv+v"]),
        scrollTargetId: nH.bk.NOTE,
        children: (0, t.jsx)(nB.A, {
            userId: l,
            className: nW.N,
            autoFocus: n === nH.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var nY = n(289873),
    nq = n(852007);
function n$(e) {
    let { isVisible: l, showLoadingSpinner: n, className: i } = e;
    return (0, t.jsx)("div", {
        className: a()(nq.f, l && nq.z, i),
        children: n && (0, t.jsx)(nY.y, { type: nY.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
    });
}
var nX = n(568602),
    nZ = n(625494);
function nJ(e) {
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
                nZ._.subscribe(eQ.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    nZ._.unsubscribe(eQ.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, t.jsx)(nX.b, { isShaking: n, intensity: 1.4, children: l })
    );
}
var nQ = n(515054),
    n0 = n(933832),
    n1 = n(972213),
    n7 = n(97483),
    n9 = n(765178),
    n2 = n(775602),
    n3 = n(606758),
    n5 = n(296998),
    n8 = n(839029);
let n6 = {
        [nH.jM.WIDGET_ADDED]: {
            message: eM.intl.string(eM.t.fFP1Uy),
            icon: (0, t.jsx)(n0.A, { size: "sm", color: lf.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_added",
        },
        [nH.jM.WIDGET_REMOVED]: {
            message: eM.intl.string(eM.t.zzsK7h),
            icon: (0, t.jsx)(n0.A, { size: "sm", color: lf.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_removed",
        },
        [nH.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eM.intl.string(eM.t["84MExs"]),
            icon: (0, t.jsx)(n1.d, { size: "sm", color: lf.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_save_generic_failure",
            type: n7.Ck.FAILURE,
        },
        [nH.jM.SOMETHING_WENT_WRONG]: {
            message: eM.intl.string(eM.t.F8FvUy),
            icon: (0, t.jsx)(n1.d, { size: "sm", color: lf.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_something_went_wrong",
            type: n7.Ck.FAILURE,
        },
    },
    n4 = (e) => {
        let { message: l, icon: n, type: i } = e;
        return (0, t.jsxs)("div", {
            className: a()(n8.oR, n5.oR),
            "data-type": i,
            children: [
                (0, t.jsx)("div", { className: n5.RC, children: n }),
                (0, t.jsx)(ek.E, { color: "text-strong", variant: "text-sm/semibold", children: l }),
            ],
        });
    },
    te = (e) => {
        let { className: l } = e,
            n = (0, n3.fu)(),
            r = (0, s.bG)([n2.A], () => n2.A.useReducedMotion),
            [o, u] = i.useState(!1),
            [c, g] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (u(!0), g(n6[n]), n9.O.announce(n6[n].message)) : u(!1);
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
            i.useEffect(() => () => (0, n3.XA)(null), []),
            i.useEffect(() => {
                if (o) {
                    let e = setTimeout(() => {
                        (0, n3.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [o]),
            (0, t.jsx)(t.Fragment, {
                children: m(
                    (e, n) =>
                        n &&
                        null !== c &&
                        (0, t.jsx)(lg.animated.div, {
                            className: a()(l, n5.Jt),
                            style: e,
                            children: (0, t.jsx)(n4, { ...c }),
                        }),
                ),
            })
        );
    };
var tl = n(297413),
    tn = n(878555),
    tt = n(621466),
    ti = n(219869),
    tr = n(292666),
    ta = n(797956);
function ts(e, l) {
    let [n, t] = i.useState("idle"),
        [r, a] = i.useState(e),
        o = "editing" === n,
        d = (0, s.bG)([n2.A], () => n2.A.useReducedMotion),
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
                !o || (null != g.current && (0, tt.vq)(e.relatedTarget) && g.current.contains(e.relatedTarget)) || x();
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
function to(e) {
    let { text: l, htmlFor: n } = e;
    return (0, t.jsx)(m.A, { tag: "label", htmlFor: n, children: l });
}
function td(e) {
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
            (0, t.jsx)(to, { text: r, htmlFor: l }),
            (0, t.jsx)(tr.k, {
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
function tu(e) {
    let { tooltip: l, ...n } = e,
        i = (0, t.jsx)("div", {
            className: ta.L7,
            children: (0, t.jsx)(ti.T, { ...n, size: "sm", variant: "input-accessory" }),
        });
    return null == l ? i : (0, t.jsx)(e7.m, { text: l, ariaHidden: !0, children: i });
}
function tc(e) {
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
            className: ta.LL,
            onClick: u,
            children: [
                A
                    ? (0, t.jsx)(ek.E, {
                          id: v,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: ta.qf,
                          children: r,
                      })
                    : n,
                (0, t.jsx)(eP.D, {
                    innerRef: o,
                    "aria-label": d,
                    "aria-describedby": A ? v : void 0,
                    "aria-expanded": !1,
                    onClick: (e) => {
                        e.stopPropagation(), u();
                    },
                    focusProps: { ringTarget: h },
                }),
                null != g && (0, t.jsx)("div", { className: ta.lD, children: (0, t.jsx)(tu, { ...g }) }),
            ],
        });
    return (0, t.jsx)("div", {
        ref: f,
        className: a()(ta.kL, { [ta.oE]: "compact" === c }, m),
        onBlur: p,
        onKeyDown: x,
        children: (0, t.jsx)(
            "div",
            { className: ta.qG, children: l ? s : (0, t.jsx)("div", { className: ta.VH, children: j }) },
            l ? "editing" : "preview",
        ),
    });
}
var tg = n(406663);
function tm(e) {
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
        v = lN.Ay.canUsePremiumProfileCustomization(m),
        {
            value: A,
            previewValue: b,
            onCommit: I,
        } = ((l = f?.guildId ?? null),
        (n = f?.guildId != null),
        (r = (0, s.bG)([ee.default], () => ee.default.getCurrentUser()?.globalName ?? null)),
        (a = (0, s.bG)([Q.Ay], () => (null != l ? (Q.Ay.getMember(l, m.id)?.nick ?? null) : null))),
        (o = (0, s.bG)([el.A], () => el.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, s.bG)([el.A], () => el.A.getPendingChanges(l).pendingNickname)),
        (u = n ? (d ?? a ?? "") : (o ?? r ?? "")),
        (c = (e) => (null == e || "" === e ? void 0 : e)),
        (g = void 0 !== o ? o : r),
        {
            value: u,
            previewValue: n ? (c(void 0 !== d ? d : a) ?? c(r)) : (c(g) ?? m.username),
            onCommit: i.useCallback(
                (e) => {
                    n
                        ? (0, lO.p)({ nickname: e.trim(), guildId: f?.guildId ?? void 0 })
                        : (0, lO.p)({ globalName: e.trim() });
                },
                [n, f?.guildId],
            ),
        }),
        { isEditing: C, previewProps: y, inputProps: N, handleCommit: E } = ts(A, I),
        P = (0, s.bG)([el.A], () => el.A.getPendingChanges(h ?? null).pendingDisplayNameStyles),
        k = eM.intl.string(x ? eM.t.mq6Cg9 : eM.t.XuZU7A),
        R = x ? (m.globalName ?? m.username) : m.username,
        S = eM.intl.string(x ? eM.t["g7OSZ/"] : eM.t.kyfzzc),
        D = i.useRef(null),
        T = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    C && E(),
                    (0, lK.L)({ analyticsLocations: p, guildId: h, stackingBehavior: "stack", returnRef: D });
            },
            [C, E, p, h],
        ),
        O = {
            icon: lm.V,
            tooltip: eM.intl.string(eM.t.lqKKI2),
            "aria-label": eM.intl.string(eM.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: T,
            buttonRef: D,
        },
        _ = v ? O : void 0,
        L =
            null != b
                ? (0, t.jsx)(tn.c$, {
                      user: m,
                      guildId: h,
                      displayName: b,
                      size: "lg",
                      pendingDisplayNameStyles: P,
                      className: tg.d,
                  })
                : null;
    return (0, t.jsx)(tc, {
        ...y,
        preview: L,
        placeholder: R,
        editButtonAriaLabel: S,
        trailing: _,
        input: (0, t.jsx)(td, { ...N, label: k, maxLength: eQ.zzC, placeholder: R, trailing: _ }),
    });
}
var tf = n(461944);
function tp(e) {
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
        (r = (0, s.bG)([el.A], () => el.A.getPendingChanges(l).pendingPronouns)),
        (o = n ? u?._guildMemberProfile?.pronouns : u?.pronouns),
        (d = u?.getPreviewPronouns(r) ?? void 0),
        {
            value: r ?? o ?? "",
            previewValue: d,
            onCommit: i.useCallback(
                (e) => {
                    (0, lO.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        { previewProps: f, inputProps: p, isEditing: x } = ts(c, m),
        h = null != g && g.length > 0;
    return (0, t.jsx)(tc, {
        ...f,
        variant: "compact",
        className: a()(tf.k, x && tf.J),
        preview: h ? (0, t.jsx)(tn.n2, { pronouns: g }) : null,
        placeholder: eM.intl.string(eM.t["76Aqhl"]),
        editButtonAriaLabel: eM.intl.string(eM.t.h6VAO7),
        input: (0, t.jsx)(td, {
            ...p,
            label: eM.intl.string(eM.t["rniRE+"]),
            placeholder: eM.intl.string(eM.t["76Aqhl"]),
            maxLength: eQ.VE5,
        }),
    });
}
var tx = n(145497),
    th = n(685073),
    tv = n(318785),
    tA = n(534400),
    tj = n(743981),
    tb = n(39965),
    tI = n(729232);
let tC = "no-server-tag";
function ty(e) {
    let { buttonRef: l, guildId: n, guildTag: i, guildBadge: r, ...s } = e,
        o = null == i || null == n;
    return (0, t.jsx)(eP.D, {
        innerRef: l,
        className: a()(tb.L5, { [tb.wK]: o }),
        ...s,
        children: (0, t.jsxs)(ek.E, {
            variant: o ? "text-xs/normal" : "text-xs/semibold",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: tb.W3,
            tag: "span",
            children: [
                o
                    ? eM.intl.string(eM.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  tA.Z9,
                                  {
                                      src: (0, th.gC)(n, r, tj.Sl.SIZE_14),
                                      size: tj.Sl.SIZE_14,
                                      className: tb.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, th.gC)(n, r, tj.Sl.SIZE_14) ?? n,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(ng.a, { size: "xs", color: "currentColor", className: tb.u4 }),
            ],
        }),
    });
}
function tN() {
    let e = (0, tv.b)(),
        l = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        n = (0, s.bG)([ee.default], () => {
            let e = ee.default.getCurrentUser();
            return (0, th.Zo)(e?.primaryGuild).guildId ?? null;
        }),
        r = (0, s.bG)([el.A], () => el.A.getPendingChanges(null).pendingPrimaryGuildId),
        a = void 0 !== r ? r : n,
        o = null != a ? (l.get(a) ?? null) : null,
        d = o?.profile?.tag ?? null,
        u = o?.profile?.badge ?? void 0,
        c = i.useCallback(
            (e) =>
                e.id === tC
                    ? (0, t.jsx)("div", {
                          className: tI.uN,
                          children: (0, t.jsx)(ek.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: tb.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(nv.c, { ...e }),
            [],
        ),
        g = i.useMemo(
            () => [
                { id: tC, label: eM.intl.string(eM.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let l = e.profile?.tag;
                    if (null == l) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(tx.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(tA.o9, { guildId: e.id, guildTag: l, guildBadge: n }),
                        },
                    ];
                }),
            ],
            [e],
        ),
        m = i.useCallback((e) => {
            (0, lO.p)({ primaryGuildId: e });
        }, []);
    return 0 === e.length
        ? null
        : (0, t.jsx)(ny, {
              options: g,
              value: a,
              onSelectionChange: m,
              label: eM.intl.string(eM.t.Pdd1nd),
              listboxClassName: tb.yt,
              renderListItem: c,
              children: (e) => {
                  let { buttonRef: l, selectButtonProps: n } = e;
                  return (0, t.jsx)(ty, { buttonRef: l, guildId: a, guildTag: d, guildBadge: u, ...n });
              },
          });
}
var tE = n(578004),
    tP = n(897126);
function tk(e) {
    let { user: l, displayProfile: n, nickname: i, trailing: r, onClose: s, allowEditing: o } = e;
    if (!o)
        return (0, t.jsx)(tn.Ay, {
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
        : (0, t.jsx)(tl.A, {
              user: l,
              forceUsername: !0,
              className: tE.a1,
              usernameClass: a()(tE.eb, tP.W),
              discriminatorClass: a()(tE.sw, tP.W),
              hideBotTag: !0,
          });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(tm, { displayProfile: n, user: l }),
            (0, t.jsxs)("div", {
                className: a()(tE.AK, tE.j6),
                children: [d, (0, t.jsx)(tn.Ce, {}), (0, t.jsx)(tp, { displayProfile: n }), (0, t.jsx)(tN, {}), r],
            }),
        ],
    });
}
n(321073);
var tR = n(97808),
    tS = n(980707),
    tD = n(477782),
    tT = n(22231),
    tO = n(601255),
    t_ = n(562819),
    tL = n(19575),
    tG = n(400186),
    tM = n(653493);
let tw = tL.Ay.getEnableHardwareAcceleration() ? tR.Js : tR.eu;
function tU(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(tS.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eM.intl.string(eM.t.YAgq3W),
        children: (0, t.jsx)(tD.rX, { children: n }),
    });
}
function tV(e) {
    let { user: l, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, eu.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useCallback(() => u(!1), []),
        m = (function (e) {
            let { user: l, guildId: n, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, j.Ay)(),
                d = null != n,
                u = (0, s.bG)([Q.Ay], () => (null != n ? Q.Ay.getMember(n, l.id) : null)),
                c = (0, s.bG)([el.A], () => el.A.getPendingChanges(n ?? void 0).pendingAvatar),
                g = d ? u?.avatar : l.avatar,
                m = (0, Z.z5)(c, g),
                f = d && null != l.avatar,
                p = lN.Ay.canUsePremiumProfileCustomization(l),
                x = p || null == n,
                h = p || null == n,
                v = (0, s.bG)([l7.A], () => (null != n ? l7.A.getGuild(n) : null)),
                A = (0, Z.a4)({ user: l }),
                b = (0, Z.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: I } = (0, Z.CP)(n ?? void 0),
                C = void 0 !== I,
                y = null != (0, tO.A)(C ? I : b) && (C ? null != I : null != b),
                N = d && null != A,
                E = i.useCallback(() => {
                    r(),
                        (0, lM.XD)({
                            uploadType: lw.HL.AVATAR,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                P = i.useCallback(() => {
                    r(), (0, t_.L)({ analyticsLocations: o, guild: v ?? void 0, stackingBehavior: "stack" });
                }, [r, o, v]),
                k = i.useCallback(() => {
                    r(),
                        (0, lM.rM)(null, g, (e) => (0, lO.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, Z.WU)(f ? "reset" : "remove");
                }, [r, n, g, f]),
                R = i.useCallback(() => {
                    r(), (0, lO.p)({ guildId: n ?? void 0, avatarDecoration: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, t.jsx)(
                                tD.Dr,
                                { id: "change-avatar", label: eM.intl.string(eM.t["4OynCD"]), action: E },
                                "change-avatar",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, t.jsx)(
                                tD.Dr,
                                { id: "change-decoration", label: eM.intl.string(eM.t.HykynS), action: P },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        m &&
                        e.push(
                            f
                                ? (0, t.jsx)(
                                      tD.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eM.intl.string(eM.t.TDjKDm),
                                          action: k,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      tD.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eM.intl.string(eM.t.twB3fz),
                                          action: k,
                                      },
                                      "remove-avatar",
                                  ),
                        ),
                    h &&
                        y &&
                        e.push(
                            N
                                ? (0, t.jsx)(
                                      tD.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eM.intl.string(eM.t["2u5yu0"]),
                                          action: R,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      tD.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eM.intl.string(eM.t["9rx5GO"]),
                                          action: R,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [f, x, h, N, m, y, E, P, k, R]);
        })({ user: l, guildId: n, onClose: g });
    return 0 === m.length
        ? (0, t.jsx)(eu.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(tG.my, tG.vk, tM.kL, { [tM.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(tw, { ...r, imageClassName: a()(tG.Lw, tM.HU) }),
                  (0, t.jsx)(lS.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: lS.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: g,
                      renderPopout: (e) => (0, t.jsx)(tU, { ...e, items: m, onMenuClose: g }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: tM.r9,
                              children: (0, t.jsx)(lp.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: tT.R,
                                  "aria-label": eM.intl.string(eM.t.YAgq3W),
                                  onClick: (e) => {
                                      e.stopPropagation(), u((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var tF = n(292054);
function tB(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(tS.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eM.intl.string(eM.t.FzU73A),
        children: (0, t.jsx)(tD.rX, { children: n }),
    });
}
function tz(e) {
    let { user: l, guildId: n } = e,
        [r, o] = i.useState(!1),
        d = i.useRef(null),
        u = i.useCallback(() => o(!1), []),
        c = (function (e) {
            let { user: l, guildId: n, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, j.Ay)(),
                d = (0, Z.N2)({ user: l, guildId: n ?? void 0 }),
                u = lN.Ay.canUsePremiumProfileCustomization(l),
                c = u || null == n,
                g = null != n,
                { pendingBanner: m, pendingProfileEffect: f } = (0, s.bG)([el.A], () =>
                    el.A.getPendingChanges(n ?? void 0),
                ),
                p = (0, s.bG)([w.A], () =>
                    null != n ? w.A.getGuildMemberProfile(l.id, n)?.banner : w.A.getUserProfile(l.id)?.banner,
                ),
                x = (0, s.bG)([ee.default], () => ee.default.getCurrentUser()?.banner != null),
                h = (0, s.bG)([w.A], () => w.A.getUserProfile(l.id)?.profileEffect != null),
                v = (0, Z.Ac)(m, p),
                A = g && x,
                b = g && h,
                I = void 0 === f ? null != d : null != f,
                C = i.useCallback(() => {
                    r(),
                        (0, lM.XD)({
                            uploadType: lw.HL.BANNER,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                y = i.useCallback(() => {
                    r(),
                        (0, l0.W)({
                            analyticsLocations: o,
                            guild: null != n ? (l7.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, d]),
                N = i.useCallback(() => {
                    r(), (0, lM.rM)(null, p, (e) => (0, lO.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, p]),
                E = i.useCallback(() => {
                    r(), (0, lO.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    u &&
                        e.push(
                            (0, t.jsx)(
                                tD.Dr,
                                { id: "change-banner", label: eM.intl.string(eM.t.N0bC3P), action: C },
                                "change-banner",
                            ),
                        ),
                    c &&
                        e.push(
                            (0, t.jsx)(
                                tD.Dr,
                                { id: "change-effect", label: eM.intl.string(eM.t["/6nv6N"]), action: y },
                                "change-effect",
                            ),
                        ),
                    u &&
                        v &&
                        e.push(
                            A
                                ? (0, t.jsx)(
                                      tD.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eM.intl.string(eM.t.jHlJNS),
                                          action: N,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      tD.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eM.intl.string(eM.t.tT9n7D),
                                          action: N,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    c &&
                        I &&
                        e.push(
                            b
                                ? (0, t.jsx)(
                                      tD.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eM.intl.string(eM.t.Lb7lu9),
                                          action: E,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      tD.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eM.intl.string(eM.t.zUOlT6),
                                          action: E,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    e
                );
            }, [A, u, c, b, v, I, C, y, N, E]);
        })({ user: l, guildId: n, onClose: u });
    return 0 === c.length
        ? (0, t.jsx)(eg.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(tF.kL, { [tF.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(eg.A, { ...e, className: tF.Pr }),
                  (0, t.jsx)(lS.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: lS.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: u,
                      renderPopout: (e) => (0, t.jsx)(tB, { ...e, items: c, onMenuClose: u }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: tF.r9,
                              children: (0, t.jsx)(lp.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: tT.R,
                                  "aria-label": eM.intl.string(eM.t.FzU73A),
                                  onClick: (e) => {
                                      e.stopPropagation(), o((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var tH = n(777480),
    tW = n(107563),
    tK = n(570287);
n(938796);
var tY = n(913453),
    tq = n(667049),
    t$ = n(837531),
    tX = n(186272),
    tZ = n(80505),
    tJ = n(707972);
let tQ = (e) => e * (2 - e),
    t0 = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } },
    t1 = (e) => {
        let { type: l, anchor: n } = e;
        return "staple" !== l || "bottom" !== n;
    };
function t7(e) {
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
        : (0, t.jsx)("div", { className: tZ.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function t9(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: i } = e,
        r = void 0 !== n ? n : l?.profileEffect;
    return null == r ? null : (0, t.jsx)(b.A, { skuId: r.skuId, isHovering: i });
}
function t2(e) {
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
            isLoading: N = !1,
        } = e,
        E = l.id === n.id,
        T = i.useRef(null),
        { isHoveringOrFocusing: L } = (0, P.A)(T),
        [M, w] = i.useState(),
        U = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? w("compact-xs") : l <= 380 ? w("compact-sm") : w(void 0);
        }, []);
    (0, h.g)(T, U, [], { fireOnMount: !0 });
    let V = null != M ? t0[M] : void 0,
        F = i.useMemo(() => p ?? (0, k.A)(), [p]),
        { relationshipType: B, originApplicationId: X } = (0, s.cf)([O.A], () => ({
            relationshipType: O.A.getRelationshipType(l.id),
            originApplicationId: O.A.getOriginApplicationId(l.id),
        })),
        Z = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        J = (0, S.q)({ userId: l.id }),
        Q = (0, R.fi)(l.id),
        { appIdentities: ee, connections: el } = (function (e) {
            let { filteredAppIdentities: l } = (0, Y.A)(e),
                n = (0, $.A)(e),
                t = (0, W.useIsRiotSocialSDKMigrationEnabled)({
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
                                  let l = H.A.get(e.type);
                                  return l?.replacedBy == null || !r.has(l.replacedBy);
                              })
                            : n,
                    [n, r, t],
                ),
            };
        })(l.id),
        et = (0, z.A)(l.id),
        ei = el.length > 0 || ee.length > 0,
        er = et.length > 0,
        ea = C ? tz : eg.A,
        es = C ? tV : eu.A;
    return (0, t.jsxs)("main", {
        className: a()(tZ.profile, null != M && tZ[M]),
        ref: T,
        "aria-busy": N,
        children: [
            (0, t.jsxs)("div", {
                className: tZ.profileHeader,
                children: [
                    (0, t.jsx)(ea, {
                        user: l,
                        displayProfile: g,
                        guildId: r,
                        themeType: en.d.MODAL_V2,
                        specOverrides: V,
                        pendingBanner: j,
                    }),
                    (0, t.jsx)(ev.A, { userId: l.id, onClose: x, className: tZ.interactionToast }),
                    (0, t.jsx)(es, {
                        user: l,
                        displayProfile: g,
                        guildId: r,
                        channelId: d,
                        themeType: en.d.MODAL_V2,
                        specOverrides: V,
                        avatarDecorationOverride: v,
                        avatarOverride: A,
                    }),
                    (0, t.jsx)(ey.A, {
                        user: l,
                        guildId: r,
                        channelId: d,
                        themeType: en.d.MODAL_V2,
                        hasEntered: f,
                        prompt: E ? F : null,
                    }),
                ],
            }),
            (0, t.jsxs)(u.Ip, {
                fade: !0,
                className: tZ.profileBody,
                children: [
                    (0, t.jsx)(ep.A, { userId: l.id }),
                    (0, t.jsx)(tk, {
                        user: l,
                        displayProfile: g,
                        nickname: m,
                        trailing: (0, t.jsx)(ec.A, { displayProfile: g, themeType: en.d.MODAL_V2, onClose: x }),
                        onClose: x,
                        allowEditing: C,
                    }),
                    B === eQ.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(eC.A.Overlay, {
                            className: tZ.profileOverlay,
                            children: (0, t.jsx)(eh.A, {
                                user: l,
                                applicationId: X,
                                guildId: g?.guildId ?? void 0,
                                channelId: d,
                                className: tZ.profileBanner,
                            }),
                        }),
                    Q.map((e) => {
                        let { applicationId: n } = e;
                        return (0, t.jsx)(
                            eC.A.Overlay,
                            {
                                className: tZ.profileOverlay,
                                children: (0, t.jsx)(eh.A, {
                                    user: l,
                                    guildId: g?.guildId ?? void 0,
                                    channelId: d,
                                    isGameRelationship: !0,
                                    applicationId: n,
                                    className: tZ.profileBanner,
                                }),
                            },
                            n,
                        );
                    }),
                    l.isProvisional &&
                        (0, t.jsx)(eC.A.Overlay, {
                            className: tZ.profileOverlay,
                            children: (0, t.jsx)(nz.A, {
                                heading: eM.intl.string(eM.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(c.E, { size: "xs", color: "currentColor" }),
                                className: tZ.profileBanner,
                                children: (0, t.jsx)(D.T, { userId: l.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(eI.A, { user: l, className: tZ.profileBanner }),
                    g?.private &&
                        (0, t.jsx)(eC.A.Overlay, {
                            className: tZ.profileOverlay,
                            children: (0, t.jsx)(eb.A, { username: m }),
                        }),
                    (0, t.jsx)("div", {
                        className: tZ.profileButtons,
                        children: (0, t.jsx)(e0, {
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
                    E && (0, t.jsx)(ef.A, { isPremiumUser: (0, G.ki)(n), onInteraction: x }),
                    !Z && (0, t.jsx)(em.E, { userBio: g?.bio, setLineClamp: !1 }),
                    J.length > 0 &&
                        (0, t.jsx)(nz.A, {
                            heading: eM.intl.string(eM.t["Uv/eTx"]),
                            children: (0, t.jsx)(ex.A, { applicationIds: J }),
                        }),
                    (0, t.jsx)(nz.A, {
                        heading: eM.intl.string(eM.t.a6XYD9),
                        children: (0, t.jsx)(eA.A, {
                            userId: l.id,
                            guildId: g?.guildId,
                            tooltipDelay: nH.In,
                            textClassName: C ? tZ.memberSinceText : void 0,
                        }),
                    }),
                    g?.guildId != null &&
                        (0, t.jsx)(eN.A, {
                            userId: l.id,
                            guildId: g.guildId,
                            className: tZ.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "currentColor",
                        }),
                    !Z &&
                        (C || ei) &&
                        (0, t.jsx)(nz.A, {
                            heading: eM.intl.string(eM.t["3fe7U5"]),
                            scrollTargetId: nH.bk.CONNECTIONS,
                            children: (0, t.jsx)(lc, {
                                applicationIdentities: ee,
                                connections: el,
                                userId: l.id,
                                allowEditing: C,
                                className: tZ.profileAppConnections,
                            }),
                        }),
                    !Z &&
                        er &&
                        (0, t.jsx)(nz.A, {
                            heading: eM.intl.string(eM.t.PHjkRE),
                            scrollTargetId: nH.bk.APPS,
                            children: (0, t.jsx)(eV, {
                                applicationRoleConnections: et,
                                onClose: x,
                                className: tZ.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(nK, { userId: l.id }),
                ],
            }),
            (0, t.jsx)(t9, { displayProfile: g, profileEffectOverride: b, isHovering: L }),
            null != I && (0, t.jsx)(y.A, { frame: I, filterLayer: t1 }),
        ],
    });
}
function t3(e) {
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
function t5(e) {
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
        Y = i.useMemo(() => (null != z ? { [z]: [l.id] } : {}), [z, l.id]);
    (0, v.Eq)(Y, "UserProfileModalV2");
    let q = (0, U.X)("UserProfileModalV2"),
        $ = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        X = B && q,
        et = X && !$,
        {
            pendingThemeColors: es,
            avatarDecorationOverride: eu,
            avatarOverride: ec,
            bannerOverride: eg,
            profileEffectOverride: em,
        } = (function (e) {
            let { userId: l, guildId: n, allowEditingInModal: t } = e;
            return (0, s.cf)([el.A, ee.default, Q.Ay], () => {
                if (!t) return er;
                let e = ee.default.getUser(l);
                if (null == e) return er;
                let {
                        pendingThemeColors: i,
                        pendingAvatarDecoration: r,
                        pendingAvatar: a,
                        pendingBanner: s,
                        pendingProfileEffect: o,
                    } = el.A.getPendingChanges(n),
                    d = null != n ? Q.Ay.getMember(n, l) : null;
                return {
                    pendingThemeColors: i,
                    avatarDecorationOverride:
                        void 0 === r
                            ? void 0
                            : (0, Z.lw)({
                                  userValue: e.avatarDecoration,
                                  guildValue: d?.avatarDecoration,
                                  pendingValue: r,
                                  guildId: n,
                              }),
                    avatarOverride: (0, J.V7)({ userId: l, image: a, size: ei }),
                    bannerOverride: s,
                    profileEffectOverride: o,
                };
            }, [l, n, t]);
        })({ userId: l.id, allowEditingInModal: et, guildId: z }),
        {
            isExpanded: ef,
            isAnimating: ep,
            transition: ex,
            handleExpand: eh,
            handleCollapse: ev,
            refs: { expandIconButtonRef: eA, expandTabButtonRef: eb, collapseButtonRef: eI },
        } = (function () {
            let [e, l] = i.useState(() => window.innerWidth > 928),
                [n, t] = i.useState(!1),
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: tQ },
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
        ey = X && !ef,
        eN = X && (!ef || ep),
        { defaultWishlistId: eE } = (0, s.cf)([w.A], () => ({ defaultWishlistId: w.A.getFirstWishlistId(l.id) }));
    (0, T.fw)({ wishlistId: eE, userId: l.id });
    let eP = (0, ed.fC)(),
        ek = W || null != eP.interactionType,
        eR = (function (e) {
            let l,
                n,
                t,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, tY.A)(i),
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
                c = (0, tq.A)(i.id),
                g = (0, tK.A)(i.id),
                m = [],
                f = i.id === r?.id,
                p = w.A.getFirstWishlistId(i.id),
                x = null != p,
                h = x ? w.A.getWishlistSettings(i.id, p) : null,
                v = (x ? tW.A.getWishlistItems(p) : []).length > 0,
                A = c.length > 0;
            (f || A) && m.push({ text: eM.intl.string(eM.t.laViwx), section: nH.RP.WIDGETS }),
                m.push({ text: eM.intl.string(eM.t.chq59f), section: nH.RP.ACTIVITY });
            let j = !1 === i.nsfwAllowed,
                b = O.A.isFriend(i.id),
                I = h?.visibility === tH.a.PUBLIC;
            return (
                (f || (!f && v && I && g && (!j || (j && b)))) &&
                    m.push({ text: eM.intl.string(eM.t["7lZ31J"]), section: nH.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (m.push({ text: (0, t$.A)(a), section: nH.RP.MUTUAL_FRIENDS }),
                    m.push({ text: (0, tX.A)(d), section: nH.RP.MUTUAL_GUILDS })),
                m
            );
        })({ user: l, currentUser: n }),
        { analyticsLocations: eS } = (0, j.Ay)([...G, A.A.USER_PROFILE_MODAL_V2]),
        eD = (0, M.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: b,
            guildId: z,
            channelId: u,
            messageId: c,
            roleId: h,
        }),
        eT = (0, V.Ay)(l.id, z),
        eO = (0, C.A)(eT?.profileFrame?.skuId, "UserProfileModalV2"),
        e_ = (0, N.A)(eT?.profileFrame?.skuId);
    (0, I.A)({ skuId: eT?.profileFrame?.skuId, openedAt: S, context: eD, analyticsLocations: eS });
    let eL = L.Ay.useName(eT?.guildId, u, l),
        eG = (0, E.GV)(),
        ew = eM.intl.format(eM.t.KRe1Fk, { name: eL });
    return (0, t.jsx)(j.f5, {
        value: eS,
        children: (0, t.jsx)(M.of, {
            value: eD,
            openedAt: S,
            fetchStartedAt: eT?.fetchStartedAt,
            fetchEndedAt: eT?.fetchEndedAt,
            isLoaded: eT?.isLoaded,
            children: (0, t.jsx)(ed.Hl, {
                value: eP,
                children: (0, t.jsx)(eo.N, {
                    value: P,
                    children: (0, t.jsxs)(g.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(tJ.zr, { [tJ.QF]: eT?.private === !0 }),
                        transitionState: k,
                        "aria-labelledby": eG,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(nJ, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(tZ.layoutContainer, e_, {
                                        [tZ.editingPanelEnabled]: X,
                                        [tZ.editingPanelExpanded]: X && ef,
                                        [tZ.isAnimating]: ep,
                                    }),
                                    children: [
                                        (0, t.jsxs)(t3, {
                                            user: l,
                                            displayProfile: eT,
                                            pendingThemeColors: es,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: tJ.Oo,
                                                    children: [
                                                        (0, t.jsx)(e1.A, { isCurrentUser: B, onClose: D }),
                                                        (0, t.jsx)(m.A, {
                                                            children: (0, t.jsx)(f.H, { id: eG, children: ew }),
                                                        }),
                                                        eN &&
                                                            (0, t.jsx)(n_, {
                                                                buttonRef: eA,
                                                                onClick: eh,
                                                                className: tZ.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                ey &&
                                                    (0, t.jsx)("div", {
                                                        className: tZ.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(nO, {
                                                            innerRef: eb,
                                                            onClick: eh,
                                                            className: tZ.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(f.F, {
                                            children: [
                                                X &&
                                                    ex((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(nV, {
                                                                  className: a()(tZ.editingPanel, {
                                                                      [tZ.isExpanded]: ef,
                                                                  }),
                                                                  selectedGuildId: H,
                                                                  originGuildId: o,
                                                                  onSelectGuildId: K,
                                                                  onClose: ev,
                                                                  collapseButtonRef: eI,
                                                                  isLoading: W,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(eC.A, {
                                                    className: a()(F, tJ.A7, tZ.profileContentOuter),
                                                    innerClassName: tZ.profileContentInner,
                                                    user: l,
                                                    displayProfile: eT,
                                                    themeType: en.d.MODAL_V2,
                                                    pendingThemeColors: es,
                                                    isPrivate: eT?.private === !0,
                                                    children: [
                                                        (0, t.jsx)(t7, { displayProfile: eT, pendingBanner: eg }),
                                                        eT?.private === !0 && (0, t.jsx)(ej.A, {}),
                                                        (0, t.jsx)(n$, { isVisible: ek, showLoadingSpinner: W }),
                                                        (0, t.jsx)(te, { className: tZ.toast }),
                                                        (0, t.jsx)(t2, {
                                                            user: l,
                                                            currentUser: n,
                                                            guildId: z,
                                                            channelId: u,
                                                            displayProfile: eT,
                                                            nickname: eL,
                                                            originGuildId: o,
                                                            hasEntered: k === p.ip.ENTERED,
                                                            customStatusPrompt: R,
                                                            onClose: D,
                                                            avatarDecorationOverride: eu,
                                                            avatarOverride: ec,
                                                            bannerOverride: eg,
                                                            profileEffectOverride: em,
                                                            profileFrame: eO,
                                                            allowEditing: et,
                                                            isLoading: W,
                                                        }),
                                                        (0, t.jsx)(nQ.A, {
                                                            user: l,
                                                            currentUser: n,
                                                            displayProfile: eT,
                                                            guildId: z,
                                                            channelId: u,
                                                            items: eR,
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
                            (0, t.jsx)(nF.A, { userId: l.id, guildId: z, className: tZ.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
