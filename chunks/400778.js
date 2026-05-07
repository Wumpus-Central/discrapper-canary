l.d(n, { A: () => tv });
var t = l(627968),
    i = l(64700),
    r = l(503698),
    a = l.n(r),
    s = l(17928),
    o = l(778712),
    d = l(866323),
    u = l(364522),
    c = l(695366),
    g = l(935462),
    m = l(140735),
    p = l(707554),
    f = l(231723),
    x = l(241524),
    h = l(770178),
    v = l(80682),
    A = l(793574),
    j = l(688810),
    b = l(480335),
    I = l(31956),
    C = l(361628),
    N = l(744808),
    y = l(282389),
    E = l(915089),
    P = l(713517),
    k = l(645507),
    R = l(922590),
    S = l(821269),
    O = l(93246),
    T = l(561794),
    _ = l(994500),
    L = l(351906),
    D = l(562153),
    G = l(474090),
    w = l(183555),
    M = l(841595),
    U = l(591179),
    F = l(999291),
    B = l(101928),
    V = l(837529),
    z = l(346713),
    H = l(573648),
    W = l(941314),
    K = l(429913),
    q = l(321078),
    Y = l(403362),
    X = l(484509),
    $ = l(920601),
    Z = l(919395),
    J = l(101058),
    Q = l(836602),
    ee = l(996988),
    en = l(985253);
let el = (0, o.FT)(en.T[ee.d.MODAL_V2].avatarSize),
    et = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        profileEffectOverride: void 0,
    };
var ei = l(903209);
async function er(e, n) {
    let l = new Image();
    await new Promise((n, t) => {
        (l.onload = () => n()), (l.onerror = () => t(Error(`Failed to load image: ${e}`))), (l.src = e);
    });
    let t = null != n ? Math.min(1, n / Math.max(l.naturalWidth, l.naturalHeight)) : 1,
        i = document.createElement("canvas");
    (i.width = Math.round(l.naturalWidth * t)), (i.height = Math.round(l.naturalHeight * t));
    let r = i.getContext("2d");
    if (null == r) throw Error("Canvas 2d context unavailable");
    return r.drawImage(l, 0, 0, i.width, i.height), i.toDataURL("image/png");
}
var ea = l(716804),
    es = l(679492),
    eo = l(718019),
    ed = l(694720),
    eu = l(915614),
    ec = l(308244),
    eg = l(744753),
    em = l(559506),
    ep = l(361311),
    ef = l(886891),
    ex = l(439053),
    eh = l(743987),
    ev = l(312381),
    eA = l(501193),
    ej = l(383448),
    eb = l(946356),
    eI = l(983495),
    eC = l(280645),
    eN = l(109112),
    ey = l(939249),
    eE = l(834730),
    eP = l(730134),
    ek = l(169869),
    eR = l(837057),
    eS = l(310419),
    eO = l(773669),
    eT = l(889227),
    e_ = l(967198),
    eL = l(488995),
    eD = l(375708),
    eG = l(985176);
function ew(e) {
    let { applicationRoleConnection: n, locale: l, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, ek.VW)(n, l);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: eG.k_,
                children:
                    null != n.application.bot
                        ? (0, t.jsx)(eP.A, { user: new eT.A(n.application.bot), size: o._3.SIZE_16 })
                        : (0, t.jsx)(eN._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: eG.Hd,
                children: [
                    (0, t.jsxs)(ey.D, {
                        className: eG.OB,
                        onClick: () => {
                            i?.(),
                                (0, eR.transitionToGlobalDiscovery)({
                                    tab: eL.GlobalDiscoveryTab.APPS,
                                    applicationId: n.application.id,
                                    newSessionState: {
                                        entrypoint: { name: eS.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                });
                        },
                        children: [
                            null != n.platform_name
                                ? (0, t.jsx)(eE.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_name,
                                  })
                                : null,
                            null != n.platform_username
                                ? (0, t.jsx)(eE.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_username,
                                  })
                                : null,
                            (0, t.jsx)(eE.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: eG.nk,
                                children: eD.intl.format(eD.t.zIT9YA, { applicationHook: () => n.application.name }),
                            }),
                        ],
                    }),
                    null != a && a.length > 0 ? (0, t.jsx)("div", { className: eG.yu, children: a }) : null,
                ],
            }),
        ],
    });
}
function eM(e) {
    let { applicationRoleConnections: n, className: l, onClose: i } = e,
        { trackUserProfileAction: r } = (0, w.NJ)(),
        o = (0, s.bG)([eO.default], () => eO.default.locale),
        d = (0, s.bG)([e_.A], () => e_.A.getGuildId());
    return 0 === n.length
        ? null
        : (0, t.jsx)("ul", {
              className: a()(eG.kL, l),
              children: n.map((e, n) =>
                  (0, t.jsx)(
                      "li",
                      {
                          className: eG.FI,
                          children: (0, t.jsx)(ew, {
                              applicationRoleConnection: e,
                              locale: o,
                              onApplicationClicked: () => {
                                  r({ action: "PRESS_APP_CONNECTION" }), i();
                              },
                              selectedGuildId: d ?? void 0,
                          }),
                      },
                      `${n}-${e.application.id}`,
                  ),
              ),
          });
}
var eU = l(982168),
    eF = l(722868),
    eB = l(822775),
    eV = l(597770),
    ez = l(751188),
    eH = l(746174),
    eW = l(993401),
    eK = l(518477),
    eq = l(652215);
function eY(e) {
    let { user: n, onClose: l } = e,
        { analyticsLocations: r } = (0, j.Ay)(),
        a = (0, eH.j)("UserProfileGiftButton"),
        { openGiftModal: s } = (0, ez.$)({
            giftRecipient: n,
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
            s(), l?.();
        }, [s, l]);
    return a
        ? (0, t.jsx)(eW.q3, { action: eK.pt.GIFT, icon: eV.o, tooltipText: eD.intl.string(eD.t.PEjaCx), onClick: o })
        : null;
}
var eX = l(982985),
    e$ = l(700174),
    eZ = l(34188),
    eJ = l(859040),
    eQ = l(207803),
    e0 = l(485745);
function e1(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        l = (0, e0.A)(),
        t = i.useRef(e);
    return (
        i.useLayoutEffect(() => {
            t.current = e;
        }),
        i.useCallback(
            function () {
                for (var e = arguments.length, i = Array(e), r = 0; r < e; r++) i[r] = arguments[r];
                n && l ? (0, eQ.VQ)() : t.current(...i);
            },
            [n, l],
        )
    );
}
function e7(e) {
    let { onClose: n, ...l } = e,
        { analyticsLocations: i, newestAnalyticsLocation: r } = (0, j.Ay)(),
        a = e1(() => {
            (0, eJ.Cz)({ analyticsLocations: i, analyticsSource: r }), n?.();
        });
    return (0, t.jsx)(eW.q3, {
        action: "VISIT_SHOP",
        icon: eZ.U,
        tooltipText: eD.intl.string(eD.t.b2d0N0),
        onClick: a,
        ...l,
    });
}
var e8 = l(573355),
    e9 = l(102951);
function e2(e) {
    let {
            user: n,
            currentUser: l,
            guildId: i,
            originGuildId: r,
            channelId: a,
            displayProfile: s,
            relationshipType: o,
            onClose: d,
        } = e,
        u = (0, U.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: c } = (0, j.Ay)(),
        g = (0, eF.A)({ user: n, guildId: r, channelId: a, displayProfile: s, onClose: d }),
        {
            gameFriends: m,
            hasOutgoingPendingGameFriends: p,
            hasIncomingPendingGameFriends: f,
        } = (0, e9.J)({ userId: n.id }),
        x = m.length > 0 || p || f;
    return o === eq.eA$.BLOCKED
        ? null
        : n.id === l.id
          ? u
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(eX.e, { userId: n.id, variant: "primary", disabled: !0 }),
                        (0, t.jsx)(e7, { onClose: d }),
                        (0, t.jsx)(e$.Zt, { user: n, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(eB.A, { user: n, guildId: i, onClose: d }),
                        (0, t.jsx)(e7, { onClose: d }),
                        (0, t.jsx)(e$.Zt, { user: n, guildId: i, viewProfileItem: g }),
                    ],
                })
          : n.bot
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)(eX.e, { userId: n.id, onClose: eU.A.popAll, autoFocus: !0 }),
                      (0, t.jsx)(e$.Zt, { user: n, guildId: i, viewProfileItem: g }),
                  ],
              })
            : o === eq.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(eX.e, { userId: n.id, onClose: eU.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(eY, { user: n }),
                        (0, t.jsx)(e$.Zt, { user: n, guildId: i }),
                    ],
                })
              : o === eq.eA$.FRIEND || o === eq.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(eX.e, { userId: n.id, onClose: eU.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(e8.Ef, { user: n, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(eY, { user: n }),
                          (0, t.jsx)(e$.Zt, { user: n, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === eq.eA$.NONE && x
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(eX.e, { userId: n.id, onClose: eU.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(e8.ES, {
                                user: n,
                                analyticsLocation: c,
                                gameFriends: m,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: f,
                                hasOutgoingPendingGameFriends: p,
                            }),
                            (0, t.jsx)(eY, { user: n }),
                            (0, t.jsx)(e$.Zt, { user: n, guildId: i, viewProfileItem: g }),
                        ],
                    })
                  : (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(e8.cO, {
                                variant: "primary",
                                userId: n.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, t.jsx)(eX.l, { userId: n.id, onClose: eU.A.popAll, variant: "secondary" }),
                            (0, t.jsx)(eY, { user: n }),
                            (0, t.jsx)(e$.Zt, { user: n, guildId: i, viewProfileItem: g }),
                        ],
                    });
}
var e5 = l(408278),
    e3 = l(789645);
function e6(e) {
    let { isCurrentUser: n, onClose: l } = e,
        i = e1(l, n);
    return (0, t.jsx)(e5.K, {
        "aria-label": eD.intl.string(eD.t.cpT0Cq),
        icon: e3.P,
        onClick: i,
        variant: "secondary",
        size: "sm",
    });
}
var e4 = l(990078),
    ne = l(349288),
    nn = l(509434),
    nl = l(95561),
    nt = l(874490),
    ni = l(370480),
    nr = l(486020),
    na = l(76843),
    ns = l(783419);
function no(e) {
    let { account: n, locale: l, userId: i } = e,
        r = n.metadata ?? {},
        a = (0, ni.An)(r[ns.pK.CREATED_AT], l),
        s = H.A.get((0, nt.ML)(n.type));
    return (0, t.jsx)(nu, {
        renderAccountName: () => {
            let e = s?.getPlatformUserUrl?.(n);
            return null == e
                ? (0, t.jsx)(e4.m, {
                      overflowOnly: !0,
                      text: n.name,
                      children: (0, t.jsx)(eE.E, { variant: "text-sm/normal", className: eG.GW, children: n.name }),
                  })
                : (0, t.jsx)(ne.Anchor, {
                      href: e,
                      className: eG.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${n.name}, ${eD.intl.string(eD.t.q5jLJB)}`
                              : `${n.name}, ${eD.intl.string(eD.t.q5jLJB)}`,
                      onClick: (l) => {
                          (0, nl.zV)(eq.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: n.type, other_user_id: i }),
                              (0, na.h)({ href: e, trusted: s?.type !== eq.fg2.DOMAIN }, l);
                      },
                      children: (0, t.jsxs)("div", {
                          className: eG.vi,
                          children: [
                              (0, t.jsx)(e4.m, {
                                  overflowOnly: !0,
                                  text: n.name,
                                  children: (0, t.jsx)(eE.E, {
                                      variant: "text-sm/normal",
                                      className: eG.GW,
                                      children: n.name,
                                  }),
                              }),
                              (0, t.jsx)(nn.I, { size: "xs", color: "currentColor" }),
                          ],
                      }),
                  });
        },
        renderMetadata: () =>
            n.type === eq.fg2.REDDIT
                ? (0, ek.xE)(r)
                : n.type === eq.fg2.STEAM
                  ? (0, ek.dy)(r)
                  : n.type === eq.fg2.BLUESKY || n.type === eq.fg2.MASTODON || n.type === eq.fg2.TWITTER
                    ? (0, ek.ED)(r)
                    : n.type === eq.fg2.PAYPAL
                      ? (0, ek.gZ)(r)
                      : n.type === eq.fg2.EBAY
                        ? (0, ek.ub)(r)
                        : n.type === eq.fg2.TIKTOK
                          ? (0, ek.HU)(r)
                          : null,
        platformIcon: s?.icon.lightPNG,
        platformName: s?.name,
        createdAtDate: a,
    });
}
function nd(e) {
    let { identityWithApplication: n } = e,
        { identity: l, application: i } = n;
    if (null == l.profile || null == l.profile.username || null == i) return null;
    let r = nr.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(nu, {
        renderAccountName: () =>
            (0, t.jsx)(e4.m, {
                overflowOnly: !0,
                text: l.profile.username,
                children: (0, t.jsx)(eE.E, {
                    variant: "text-sm/normal",
                    className: eG.GW,
                    children: l.profile.username,
                }),
            }),
        renderMetadata: () => null,
        platformIcon: r,
        platformName: i.name,
        createdAtDate: void 0,
        applyIconBorderRadius: !0,
    });
}
function nu(e) {
    let {
        renderAccountName: n,
        renderMetadata: l,
        platformName: i,
        platformIcon: r,
        createdAtDate: s,
        applyIconBorderRadius: o = !1,
    } = e;
    return (0, t.jsxs)("li", {
        className: eG.FI,
        children: [
            (0, t.jsx)(e4.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, t.jsx)("div", {
                    className: eG.k_,
                    children: (0, t.jsx)("img", {
                        alt: eD.intl.formatToPlainString(eD.t.rtm15P, { name: i }),
                        className: a()(eG.tV, o ? eG.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, t.jsxs)("div", {
                className: eG.Hd,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            n(),
                            null != s &&
                                (0, t.jsx)(eE.E, {
                                    variant: "text-xs/normal",
                                    children: eD.intl.format(eD.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: eG.yu, children: l() }),
                ],
            }),
        ],
    });
}
function nc(e) {
    let { connections: n, applicationIdentities: l, userId: i, className: r } = e,
        o = (0, s.bG)([eO.default], () => eO.default.locale);
    return 0 === n.length && 0 === l.length
        ? null
        : (0, t.jsxs)("ul", {
              className: a()(eG.kL, r),
              children: [
                  n.map((e) => (0, t.jsx)(no, { account: e, userId: i, locale: o }, `${e.type}:${e.id}`)),
                  l?.map((e) => (0, t.jsx)(nd, { identityWithApplication: e }, e.identity.application_id)),
              ],
          });
}
var ng = l(200219),
    nm = l(661531),
    np = l(320448),
    nf = l(534514),
    nx = l(403581),
    nh = l(287809),
    nv = l(927578),
    nA = l(487233),
    nj = l(120386),
    nb = l(317097),
    nI = l(602853),
    nC = l(922016),
    nN = l(508274),
    ny = l(654107),
    nE = l(84540),
    nP = l(930349);
function nk(e) {
    let { user: n, disabled: l = !1 } = e,
        r = i.useRef(null),
        a = (0, nI.r)(nm.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, ny.rh)(n.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([Q.A, M.A], () => ({
            pendingAccentColor: Q.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: M.A.getUserProfile(n.id)?.accentColor,
        })),
        c = d ?? u ?? (0, nb.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, nE.p)({ accentColor: e }), []);
    return (0, t.jsx)(nC.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(nN.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(nP.NW, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: l,
                accessibleLabel: eD.intl.string(eD.t["/X3fkf"]),
                showOverlayOnHover: !0,
                children: (0, t.jsx)("div", {
                    style: { width: "100%", height: "100%", backgroundColor: (0, nb.Hl)(c) },
                }),
            }),
    });
}
var nR = l(450373),
    nS = l(252732),
    nO = l(339984),
    nT = l(111242);
function n_(e) {
    let { backgroundColor: n } = e;
    return (0, t.jsx)("div", { className: nT.o, style: { backgroundColor: n } });
}
function nL(e) {
    let { src: n } = e;
    return (0, t.jsx)("img", { src: n, alt: "", className: nT._ });
}
function nD(e) {
    let { displayProfile: n, pendingBanner: l } = e,
        i = (0, nI.r)(nm.A.unsafe_rawColors.PRIMARY_800).hex(),
        r = n?.primaryColor ?? (0, nb.LX)(i),
        { hex: a } = (0, nR.A)(r),
        s = n?.getPreviewBanner(l, !1, 296) ?? void 0;
    return null != s ? (0, t.jsx)(nL, { src: s }) : (0, t.jsx)(n_, { backgroundColor: a });
}
function nG(e) {
    let { userId: n, guildId: l, disabled: i } = e,
        { newestAnalyticsLocation: r } = (0, j.Ay)(),
        a = null != l,
        o = (0, F.Ay)(n, l),
        d = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(l ?? void 0).pendingBanner),
        u = (0, s.bG)([nh.default], () => nh.default.getCurrentUser()?.banner),
        c = (0, s.bG)([M.A], () =>
            null != l ? M.A.getGuildMemberProfile(n, l)?.banner : M.A.getUserProfile(n)?.banner,
        ),
        g = void 0 !== d,
        m = null === d,
        p = m || (!g && null == c),
        f = a && null != u,
        x = a && (o?.isUsingGuildMemberBanner() ?? !1),
        h = (0, Z.Ac)(d, c)
            ? {
                  onClick: () => (0, nS.rM)(null, c, (e) => (0, nE.p)({ guildId: l ?? void 0, banner: e })),
                  type: f ? "reset" : "remove",
                  accessibleLabel: eD.intl.string(f ? eD.t.jHlJNS : eD.t.tT9n7D),
              }
            : void 0,
        v = () =>
            (0, nS.XD)({
                uploadType: nO.HL.BANNER,
                analyticsSource: r,
                guildId: l ?? void 0,
                stackingBehavior: "stack",
            }),
        A = (0, t.jsx)(nD, { displayProfile: o, pendingBanner: m && a && !x ? void 0 : d });
    return p
        ? (0, t.jsx)(nP.kL, {
              variant: "square",
              onClick: v,
              accessibleLabel: eD.intl.string(eD.t.N0bC3P),
              disabled: i,
              dimContent: p && f,
              showOverlayOnHover: !0,
              children: A,
          })
        : (0, t.jsx)(nP.NW, {
              variant: "square",
              onClick: v,
              accessibleLabel: eD.intl.string(eD.t.N0bC3P),
              deleteButtonConfig: h,
              disabled: i,
              showOverlayOnHover: !0,
              children: A,
          });
}
var nw = l(473219),
    nM = l(942426),
    nU = l(617061),
    nF = l(71393),
    nB = l(466681),
    nV = l(423393);
function nz(e) {
    let { effect: n } = e,
        l = (0, nM.A)(n?.skuId);
    return (0, t.jsxs)("div", {
        className: nB.B0,
        "aria-hidden": !0,
        children: [
            (0, t.jsx)("img", { src: nV.A, alt: "", className: nB.AH }),
            null != l && (0, t.jsx)("img", { src: l.thumbnailPreviewSrc, alt: "", className: nB.H2 }),
        ],
    });
}
function nH(e) {
    let { user: n, guildId: l, disabled: r } = e,
        { analyticsLocations: a } = (0, j.Ay)(),
        o = null != l,
        d = (0, s.bG)([nF.A], () => (null != l ? nF.A.getGuild(l) : null)),
        u = (0, Z.N2)({ user: n }),
        c = (0, Z.N2)({ user: n, guildId: l ?? void 0 }),
        { pendingProfileEffect: g } = (0, Z.nZ)(l ?? void 0),
        m = void 0 !== g,
        p = null === g || (!m && null == c),
        f = o && null != u,
        x = (0, Z.lw)({ pendingValue: g, userValue: u, guildValue: c, guildId: l ?? void 0 }),
        h =
            null != x && (m ? null != g : null != c)
                ? {
                      onClick: () => (0, nE.p)({ guildId: l ?? void 0, profileEffect: null }),
                      type: f ? "reset" : "remove",
                      accessibleLabel: eD.intl.string(f ? eD.t["SQy/Po"] : eD.t.uMuafO),
                  }
                : void 0,
        v = i.useCallback(() => {
            (0, nU.W)({
                analyticsLocations: a,
                guild: d ?? void 0,
                initialSelectedEffect: x ?? void 0,
                stackingBehavior: "stack",
            });
        }, [a, d, x]),
        A = (0, t.jsx)(nz, { effect: x });
    return p
        ? (0, t.jsx)(nP.kL, {
              variant: "full-height-bar",
              onClick: v,
              accessibleLabel: eD.intl.string(eD.t["/dRfCf"]),
              disabled: r,
              dimContent: p && f,
              children: A,
          })
        : (0, t.jsx)(nP.NW, {
              variant: "full-height-bar",
              onClick: v,
              accessibleLabel: eD.intl.string(eD.t["/dRfCf"]),
              deleteButtonConfig: h,
              disabled: r,
              children: A,
          });
}
var nW = l(33851),
    nK = l.n(nW),
    nq = l(298387);
function nY(e) {
    let { color: n, suggestedColors: l, disabled: r, ariaLabel: a, onSelect: s } = e,
        o = i.useRef(null),
        d = (0, nb.Hl)(n);
    return (0, t.jsx)(nC.Y, {
        targetElementRef: o,
        renderPopout: (e) => (0, t.jsx)(nN.VN, { ...e, value: n, onChange: s, suggestedColors: l, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: n, ...l } = e;
            return (0, t.jsx)(ey.D, {
                ...l,
                innerRef: o,
                className: nq.Dh,
                onClick: r ? void 0 : n,
                "aria-label": a,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)("div", { className: nq.Hy, style: { backgroundColor: d } }),
            });
        },
    });
}
function nX(e) {
    let {
            primaryColor: n,
            secondaryColor: l,
            onSelectPrimaryColor: i,
            onSelectSecondaryColor: r,
            suggestedColors: a,
            disabled: s = !1,
        } = e,
        o = (0, nb.Hl)(n),
        d = (0, nb.Hl)(l),
        u = `linear-gradient(to bottom, ${o}, ${d})`,
        c = eD.intl.formatToPlainString(eD.t.FquTfm, { colorLabel: o }),
        g = eD.intl.formatToPlainString(eD.t.xOnm4z, { colorLabel: d });
    return (0, t.jsx)(nP.Yt, {
        variant: "square",
        disabled: s,
        children: (0, t.jsxs)("div", {
            className: nq.D7,
            style: { background: u },
            children: [
                (0, t.jsx)(nY, { color: n, suggestedColors: a, ariaLabel: c, onSelect: i, disabled: s }),
                (0, t.jsx)(nY, { color: l, suggestedColors: a, ariaLabel: g, onSelect: r, disabled: s }),
            ],
        }),
    });
}
function n$(e) {
    let { user: n, guildId: l, disabled: r = !1 } = e,
        a = (0, F.Ay)(n.id, l),
        { pendingThemeColors: o, pendingAvatar: d } = (0, s.cf)([Q.A], () => {
            let e = Q.A.getPendingChanges(l ?? void 0);
            return { pendingThemeColors: e.pendingThemeColors, pendingAvatar: e.pendingAvatar };
        }),
        u = (0, J.V7)({ userId: n.id, image: d }),
        { primaryColor: c, secondaryColor: g } = (0, B.A)({
            user: n,
            displayProfile: a,
            pendingThemeColors: o,
            pendingAvatarSrc: u ?? void 0,
            isPreview: !0,
        }),
        m = (0, nI.r)(nm.A.unsafe_rawColors.PRIMARY_530).hex(),
        p = null != u ? u : n.getAvatarURL(l ?? void 0, 80),
        f = (0, ny.rh)(p, m, !1),
        x = i.useCallback(
            (e) => {
                let n = nK()(e, a?.themeColors);
                (0, nE.p)({ guildId: l ?? void 0, themeColors: n ? void 0 : e });
            },
            [a?.themeColors, l],
        );
    return null == c || null == g
        ? null
        : (0, t.jsx)(nX, {
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
var nZ = l(315629),
    nJ = l(821609),
    nQ = l(835071),
    n0 = l(235684);
function n1() {
    let e = () => {
        (0, nQ.K)({ stackingBehavior: "stack" });
    };
    return (0, t.jsxs)(nZ.h, {
        color: "nitro-pink",
        className: n0.k,
        children: [
            (0, t.jsx)(eE.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eD.intl.format(eD.t.TmfgI2, { onClick: e }),
            }),
            (0, t.jsx)(nJ.$, {
                variant: "expressive",
                size: "md",
                icon: nx.t,
                text: eD.intl.string(eD.t.pj0XBN),
                onClick: e,
                fullWidth: !0,
            }),
        ],
    });
}
l(667532);
var n7 = l(111159),
    n8 = l(783878),
    n9 = l(548118),
    n2 = l(711014),
    n5 = l(308696);
let n3 = "MAIN_PROFILE";
function n6(e) {
    let { selectedGuildId: n, onChange: l, loading: r } = e,
        a = (0, s.bG)([n2.Ay], () => n2.Ay.getFlattenedGuildIds()),
        o = (0, s.bG)([nF.A], () => nF.A.getGuilds()),
        d = i.useMemo(() => {
            let e = a
                .map((e) => {
                    let n = o[e];
                    return null == n
                        ? null
                        : {
                              id: n.id,
                              label: n.name,
                              value: n.id,
                              leading: (0, t.jsx)(n9.Ay, {
                                  className: n5.$,
                                  guild: n,
                                  size: n9.Ay.Sizes.SMALLER,
                                  active: !0,
                              }),
                          };
                })
                .filter(Y.Vq);
            return (
                e.unshift({
                    id: n3,
                    label: eD.intl.string(eD.t["2p07FR"]),
                    value: n3,
                    leading: (0, t.jsx)(n7.p, { size: "sm", color: nm.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                e
            );
        }, [a, o]),
        u = i.useCallback(
            (e) => {
                l(e === n3 ? null : e);
            },
            [l],
        );
    return (0, t.jsx)(n8.Z, {
        label: eD.intl.string(eD.t.rki38K),
        hideLabel: !0,
        selectionMode: "single",
        onSelectionChange: u,
        value: n ?? n3,
        options: d,
        loading: r,
    });
}
var n4 = l(809467);
let le = "profile-modal-editing-panel",
    ln = "profile-modal-editing-panel-heading";
function ll(e) {
    let { onClick: n, className: l, innerRef: i } = e;
    return (0, t.jsx)(ey.D, {
        innerRef: i,
        "aria-label": eD.intl.string(eD.t.N8XQDE),
        "aria-expanded": !1,
        "aria-controls": le,
        className: a()(n4.eg, l),
        onClick: n,
        focusProps: { offset: { right: 6 } },
        children: (0, t.jsx)(ng.N, { size: "sm", color: nm.A.colors.ICON_STRONG }),
    });
}
function lt(e) {
    let { onClick: n, className: l, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: l,
        children: (0, t.jsx)(e5.K, {
            buttonRef: i,
            "aria-label": eD.intl.string(eD.t.N8XQDE),
            "aria-expanded": !1,
            "aria-controls": le,
            icon: ng.N,
            onClick: n,
            variant: "secondary",
            size: "sm",
        }),
    });
}
function li(e) {
    let { onClick: n, innerRef: l } = e;
    return (0, t.jsxs)(ey.D, {
        innerRef: l,
        className: n4.cS,
        "aria-label": eD.intl.string(eD.t.X6NklS),
        onClick: n,
        "aria-controls": le,
        "aria-expanded": !0,
        children: [
            (0, t.jsx)(np._, { size: "md", color: "currentColor" }),
            (0, t.jsx)(np._, { size: "md", color: "currentColor" }),
        ],
    });
}
function lr(e) {
    let { heading: n, children: l, disabled: i = !1, showNitroIcon: r = !1 } = e;
    return (0, t.jsxs)("div", {
        className: n4.Os,
        children: [
            (0, t.jsxs)("div", {
                className: n4.AM,
                children: [
                    (0, t.jsx)(nf.D, {
                        className: n4.i_,
                        variant: "text-sm/medium",
                        color: i ? "text-muted" : "text-strong",
                        children: n,
                    }),
                    r &&
                        (0, t.jsx)(e4.m, {
                            text: eD.intl.string(eD.t.BNg1ir),
                            shouldShow: !i,
                            ariaHidden: !0,
                            children: (0, t.jsx)(nx.t, {
                                className: n4.l3,
                                size: "xs",
                                color: i ? nm.A.colors.ICON_MUTED : nm.A.colors.ICON_STRONG,
                                "aria-hidden": !0,
                            }),
                        }),
                ],
            }),
            l,
        ],
    });
}
function la(e) {
    let {
            selectedGuildId: n,
            onSelectGuildId: l,
            isLoading: i = !1,
            onClose: r,
            className: o,
            collapseButtonRef: d,
        } = e,
        c = e1(l),
        g = (0, s.bG)([nh.default], () => nh.default.getCurrentUser());
    if (null == g) return null;
    let f = null != n,
        x = nv.Ay.canUsePremiumProfileCustomization(g);
    return (0, t.jsxs)("aside", {
        id: le,
        "aria-labelledby": ln,
        className: a()(n4.nd, o),
        "aria-busy": i,
        children: [
            (0, t.jsx)(m.A, { children: (0, t.jsx)(p.H, { id: ln, children: eD.intl.string(eD.t["L+ch00"]) }) }),
            (0, t.jsxs)("div", {
                className: n4.wx,
                children: [
                    (0, t.jsx)(li, { innerRef: d, onClick: r }),
                    (0, t.jsx)(n6, { selectedGuildId: n ?? null, onChange: c, loading: i }),
                ],
            }),
            (0, t.jsx)(p.F, {
                children: (0, t.jsxs)(u.Ip, {
                    className: n4.XG,
                    fade: !0,
                    children: [
                        (0, t.jsx)(lr, {
                            heading: eD.intl.string(eD.t.x5CoXR),
                            disabled: i,
                            children: (0, t.jsx)(nw.A, { user: g, guildId: n, disabled: i || (f && !x) }),
                        }),
                        (0, t.jsxs)(lr, {
                            heading: eD.intl.string(eD.t["50Nwpc"]),
                            disabled: i,
                            children: [
                                (0, t.jsx)(nA.A, { user: g, guildId: n, disabled: i || (f && !x) }),
                                (0, t.jsx)(nj.A, { user: g, guildId: n, disabled: i || (f && !x) }),
                            ],
                        }),
                        x &&
                            (0, t.jsxs)(lr, {
                                heading: eD.intl.string(eD.t.Zenogr),
                                disabled: i,
                                showNitroIcon: !0,
                                children: [
                                    (0, t.jsx)(n$, { user: g, guildId: n, disabled: i }),
                                    (0, t.jsx)(nG, { userId: g.id, guildId: n, disabled: i }),
                                ],
                            }),
                        (0, t.jsx)(lr, {
                            heading: eD.intl.string(eD.t.wR5wOo),
                            disabled: i,
                            children: (0, t.jsx)(nH, { user: g, guildId: n, disabled: i || (f && !x) }),
                        }),
                        !x &&
                            (0, t.jsx)(lr, {
                                heading: eD.intl.string(eD.t["/X3fkf"]),
                                disabled: i,
                                children: (0, t.jsx)(nk, { user: g, disabled: i || f }),
                            }),
                    ],
                }),
            }),
            !x && (0, t.jsx)(n1, {}),
        ],
    });
}
var ls = l(982599),
    lo = l(756634),
    ld = l(83013),
    lu = l(77085);
function lc(e) {
    let { userId: n } = e,
        l = (0, ea.g)(),
        { trackUserProfileAction: i } = (0, w.NJ)();
    return (0, t.jsx)(ld.A, {
        heading: eD.intl.string(eD.t["mQKv+v"]),
        scrollTargetId: eK.bk.NOTE,
        children: (0, t.jsx)(lo.A, {
            userId: n,
            className: lu.N,
            autoFocus: l === eK.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var lg = l(289873),
    lm = l(778599);
function lp(e) {
    let { isVisible: n, showLoadingSpinner: l, className: i } = e;
    return (0, t.jsx)("div", {
        className: a()(lm.f, n && lm.z, i),
        children: l && (0, t.jsx)(lg.y, { type: lg.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
    });
}
var lf = l(568602),
    lx = l(625494);
function lh(e) {
    let { children: n } = e,
        [l, r] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = () => {
                r(!0),
                    setTimeout(() => {
                        r(!1);
                    }, 300);
            };
            return (
                lx._.subscribe(eq.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    lx._.unsubscribe(eq.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, t.jsx)(lf.b, { isShaking: l, intensity: 1.4, children: n })
    );
}
var lv = l(515054),
    lA = l(873174),
    lj = l(933832),
    lb = l(972213),
    lI = l(97483),
    lC = l(765178),
    lN = l(775602),
    ly = l(606758),
    lE = l(707238),
    lP = l(861173);
let lk = {
        [eK.jM.WIDGET_ADDED]: {
            message: eD.intl.string(eD.t.fFP1Uy),
            icon: (0, t.jsx)(lj.A, { size: "sm", color: nm.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_added",
        },
        [eK.jM.WIDGET_REMOVED]: {
            message: eD.intl.string(eD.t.zzsK7h),
            icon: (0, t.jsx)(lj.A, { size: "sm", color: nm.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_removed",
        },
        [eK.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eD.intl.string(eD.t["84MExs"]),
            icon: (0, t.jsx)(lb.d, { size: "sm", color: nm.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_save_generic_failure",
            type: lI.Ck.FAILURE,
        },
        [eK.jM.SOMETHING_WENT_WRONG]: {
            message: eD.intl.string(eD.t.F8FvUy),
            icon: (0, t.jsx)(lb.d, { size: "sm", color: nm.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_something_went_wrong",
            type: lI.Ck.FAILURE,
        },
    },
    lR = (e) => {
        let { message: n, icon: l, type: i } = e;
        return (0, t.jsxs)("div", {
            className: a()(lP.oR, lE.oR),
            "data-type": i,
            children: [
                (0, t.jsx)("div", { className: lE.RC, children: l }),
                (0, t.jsx)(eE.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
            ],
        });
    },
    lS = (e) => {
        let { className: n } = e,
            l = (0, ly.fu)(),
            r = (0, s.bG)([lN.A], () => lN.A.useReducedMotion),
            [o, u] = i.useState(!1),
            [c, g] = i.useState(null);
        i.useEffect(() => {
            null !== l ? (u(!0), g(lk[l]), lC.O.announce(lk[l].message)) : u(!1);
        }, [l]);
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
            i.useEffect(() => () => (0, ly.XA)(null), []),
            i.useEffect(() => {
                if (o) {
                    let e = setTimeout(() => {
                        (0, ly.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [o]),
            (0, t.jsx)(t.Fragment, {
                children: m(
                    (e, l) =>
                        l &&
                        null !== c &&
                        (0, t.jsx)(lA.animated.div, {
                            className: a()(n, lE.Jt),
                            style: e,
                            children: (0, t.jsx)(lR, { ...c }),
                        }),
                ),
            })
        );
    };
var lO = l(297413),
    lT = l(534400),
    l_ = l(878555),
    lL = l(193885),
    lD = l(259065),
    lG = l(696451),
    lw = l(621466),
    lM = l(219869),
    lU = l(292666),
    lF = l(539396);
function lB(e, n) {
    let [l, t] = i.useState("idle"),
        [r, a] = i.useState(e),
        o = "editing" === l,
        d = (0, s.bG)([lN.A], () => lN.A.useReducedMotion),
        u = i.useRef(null),
        c = i.useRef(null),
        g = i.useRef(null),
        m = i.useRef(!1),
        p = i.useId(),
        f = i.useCallback(() => {
            a(e), t("editing");
        }, [e]),
        x = i.useCallback(() => {
            n(r), t("done");
        }, [r, n]),
        h = i.useCallback(() => {
            t("done");
        }, []);
    i.useEffect(() => {
        "done" === l && (m.current && u.current?.focus({ preventScroll: !0 }), (m.current = !1));
    }, [l]),
        i.useEffect(() => {
            o &&
                null != c.current &&
                (g.current?.scrollIntoView({ block: "nearest", behavior: d ? "auto" : "smooth" }),
                c.current.focus({ preventScroll: !0 }),
                c.current.setSelectionRange(c.current.value.length, c.current.value.length));
        }, [o, d]);
    let v = i.useCallback(
            (e) => {
                !o || (null != g.current && (0, lw.vq)(e.relatedTarget) && g.current.contains(e.relatedTarget)) || x();
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
function lV(e) {
    let { text: n, htmlFor: l } = e;
    return (0, t.jsx)(m.A, { tag: "label", htmlFor: l, children: n });
}
function lz(e) {
    let {
            inputId: n,
            inputRef: l,
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
        p = i.useCallback(
            (e) => {
                "Enter" === e.key
                    ? (e.preventDefault(), o())
                    : "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), d());
            },
            [o, d],
        );
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(lV, { text: r, htmlFor: n }),
            (0, t.jsx)(lU.k, {
                id: n,
                inputRef: l,
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
function lH(e) {
    let { tooltip: n, ...l } = e,
        i = (0, t.jsx)("div", {
            className: lF.L7,
            children: (0, t.jsx)(lM.T, { ...l, size: "sm", variant: "input-accessory" }),
        });
    return null == n ? i : (0, t.jsx)(e4.m, { text: n, ariaHidden: !0, children: i });
}
function lW(e) {
    let {
            isEditing: n,
            preview: l,
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
        h = i.useRef(null),
        v = i.useId(),
        A = null == l,
        j = (0, t.jsxs)("div", {
            ref: h,
            className: lF.LL,
            onClick: u,
            children: [
                A
                    ? (0, t.jsx)(eE.E, {
                          id: v,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: lF.qf,
                          children: r,
                      })
                    : l,
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
                null != g && (0, t.jsx)("div", { className: lF.lD, children: (0, t.jsx)(lH, { ...g }) }),
            ],
        });
    return (0, t.jsx)("div", {
        ref: p,
        className: a()(lF.kL, { [lF.oE]: "compact" === c }, m),
        onBlur: f,
        onKeyDown: x,
        children: (0, t.jsx)(
            "div",
            { className: lF.qG, children: n ? s : (0, t.jsx)("div", { className: lF.VH, children: j }) },
            n ? "editing" : "preview",
        ),
    });
}
var lK = l(35783);
function lq(e) {
    let n,
        l,
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
        v = nv.Ay.canUsePremiumProfileCustomization(m),
        {
            value: A,
            previewValue: b,
            onCommit: I,
        } = ((n = p?.guildId ?? null),
        (l = p?.guildId != null),
        (r = (0, s.bG)([nh.default], () => nh.default.getCurrentUser()?.globalName ?? null)),
        (a = (0, s.bG)([lG.Ay], () => (null != n ? (lG.Ay.getMember(n, m.id)?.nick ?? null) : null))),
        (o = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(n).pendingNickname)),
        (u = l ? (d ?? a ?? "") : (o ?? r ?? "")),
        (c = (e) => (null == e || "" === e ? void 0 : e)),
        (g = void 0 !== o ? o : r),
        {
            value: u,
            previewValue: l ? (c(void 0 !== d ? d : a) ?? c(r)) : (c(g) ?? m.username),
            onCommit: i.useCallback(
                (e) => {
                    l
                        ? (0, nE.p)({ nickname: e.trim(), guildId: p?.guildId ?? void 0 })
                        : (0, nE.p)({ globalName: e.trim() });
                },
                [l, p?.guildId],
            ),
        }),
        { isEditing: C, previewProps: N, inputProps: y, handleCommit: E } = lB(A, I),
        P = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(h ?? null).pendingDisplayNameStyles),
        k = eD.intl.string(x ? eD.t.mq6Cg9 : eD.t.XuZU7A),
        R = x ? (m.globalName ?? m.username) : m.username,
        S = eD.intl.string(x ? eD.t["g7OSZ/"] : eD.t.kyfzzc),
        O = i.useRef(null),
        T = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    C && E(),
                    (0, lD.L)({ analyticsLocations: f, guildId: h, stackingBehavior: "stack", returnRef: O });
            },
            [C, E, f, h],
        ),
        _ = {
            icon: lL.V,
            tooltip: eD.intl.string(eD.t.lqKKI2),
            "aria-label": eD.intl.string(eD.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: T,
            buttonRef: O,
        },
        L = v ? _ : void 0,
        D =
            null != b
                ? (0, t.jsx)(l_.c$, {
                      user: m,
                      guildId: h,
                      displayName: b,
                      size: "lg",
                      pendingDisplayNameStyles: P,
                      className: lK.d,
                  })
                : null;
    return (0, t.jsx)(lW, {
        ...N,
        preview: D,
        placeholder: R,
        editButtonAriaLabel: S,
        trailing: L,
        input: (0, t.jsx)(lz, { ...y, label: k, maxLength: eq.zzC, placeholder: R, trailing: L }),
    });
}
var lY = l(469432);
function lX(e) {
    let n,
        l,
        r,
        o,
        d,
        { displayProfile: u } = e,
        {
            value: c,
            previewValue: g,
            onCommit: m,
        } = ((n = u?.guildId ?? null),
        (l = u?.guildId != null),
        (r = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(n).pendingPronouns)),
        (o = l ? u?._guildMemberProfile?.pronouns : u?.pronouns),
        (d = u?.getPreviewPronouns(r) ?? void 0),
        {
            value: r ?? o ?? "",
            previewValue: d,
            onCommit: i.useCallback(
                (e) => {
                    (0, nE.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        { previewProps: p, inputProps: f, isEditing: x } = lB(c, m),
        h = null != g && g.length > 0;
    return (0, t.jsx)(lW, {
        ...p,
        variant: "compact",
        className: a()(lY.k, x && lY.J),
        preview: h ? (0, t.jsx)(l_.n2, { pronouns: g }) : null,
        placeholder: eD.intl.string(eD.t["76Aqhl"]),
        editButtonAriaLabel: eD.intl.string(eD.t.h6VAO7),
        input: (0, t.jsx)(lz, {
            ...f,
            label: eD.intl.string(eD.t["rniRE+"]),
            placeholder: eD.intl.string(eD.t["76Aqhl"]),
            maxLength: eq.VE5,
        }),
    });
}
var l$ = l(874644);
function lZ(e) {
    let { user: n, displayProfile: l, nickname: i, primaryGuild: r, trailing: a, onClose: s, allowEditing: o } = e;
    if (!o)
        return (0, t.jsx)(l_.Ay, {
            user: n,
            guildId: l?.guildId ?? void 0,
            displayName: i,
            displayNameSize: "lg",
            pronouns: l?.pronouns,
            primaryGuild: r,
            trailing: a,
            onClose: s,
        });
    let d = n.isProvisional
        ? null
        : (0, t.jsx)(lO.A, {
              user: n,
              forceUsername: !0,
              className: l$.a1,
              usernameClass: l$.eb,
              discriminatorClass: l$.sw,
              hideBotTag: !0,
          });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(lq, { displayProfile: l, user: n }),
            (0, t.jsxs)("div", {
                className: `${l$.AK} ${l$.j6}`,
                children: [
                    d,
                    (0, t.jsx)(l_.Ce, {}),
                    (0, t.jsx)(lX, { displayProfile: l }),
                    (0, t.jsx)(lT.Ay, {
                        primaryGuild: r,
                        userId: n.id,
                        onClose: s,
                        containerClassName: l$.L4,
                        className: l$.Mp,
                    }),
                    a,
                ],
            }),
        ],
    });
}
l(321073);
var lJ = l(97808),
    lQ = l(980707),
    l0 = l(477782),
    l1 = l(22231),
    l7 = l(601255),
    l8 = l(562819),
    l9 = l(19575),
    l2 = l(106106),
    l5 = l(338165);
let l3 = l9.Ay.getEnableHardwareAcceleration() ? lJ.Js : lJ.eu;
function l6(e) {
    let { onMenuClose: n, items: l, ...i } = e;
    return (0, t.jsx)(lQ.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": eD.intl.string(eD.t.YAgq3W),
        children: (0, t.jsx)(l0.rX, { children: l }),
    });
}
function l4(e) {
    let { user: n, guildId: l } = e,
        { avatarProps: r, eventHandlers: o } = (0, eo.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useCallback(() => u(!1), []),
        m = (function (e) {
            let { user: n, guildId: l, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, j.Ay)(),
                d = null != l,
                u = (0, s.bG)([lG.Ay], () => (null != l ? lG.Ay.getMember(l, n.id) : null)),
                c = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(l ?? void 0).pendingAvatar),
                g = d ? u?.avatar : n.avatar,
                m = (0, Z.z5)(c, g),
                p = d && null != n.avatar,
                f = nv.Ay.canUsePremiumProfileCustomization(n),
                x = f || null == l,
                h = f || null == l,
                v = (0, s.bG)([nF.A], () => (null != l ? nF.A.getGuild(l) : null)),
                A = (0, Z.a4)({ user: n }),
                b = (0, Z.a4)({ user: n, guildId: l ?? void 0 }),
                { pendingAvatarDecoration: I } = (0, Z.CP)(l ?? void 0),
                C = void 0 !== I,
                N = null != (0, l7.A)(C ? I : b) && (C ? null != I : null != b),
                y = d && null != A,
                E = i.useCallback(() => {
                    r(),
                        (0, nS.XD)({
                            uploadType: nO.HL.AVATAR,
                            analyticsSource: a,
                            guildId: l ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, l]),
                P = i.useCallback(() => {
                    r(), (0, l8.L)({ analyticsLocations: o, guild: v ?? void 0, stackingBehavior: "stack" });
                }, [r, o, v]),
                k = i.useCallback(() => {
                    r(),
                        (0, nS.rM)(null, g, (e) => (0, nE.p)({ guildId: l ?? void 0, avatar: e })),
                        (0, Z.WU)(p ? "reset" : "remove");
                }, [r, l, g, p]),
                R = i.useCallback(() => {
                    r(), (0, nE.p)({ guildId: l ?? void 0, avatarDecoration: null });
                }, [r, l]);
            return i.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, t.jsx)(
                                l0.Dr,
                                { id: "change-avatar", label: eD.intl.string(eD.t["4OynCD"]), action: E },
                                "change-avatar",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, t.jsx)(
                                l0.Dr,
                                { id: "change-decoration", label: eD.intl.string(eD.t.HykynS), action: P },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        m &&
                        e.push(
                            p
                                ? (0, t.jsx)(
                                      l0.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eD.intl.string(eD.t.TDjKDm),
                                          action: k,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      l0.Dr,
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
                                ? (0, t.jsx)(
                                      l0.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eD.intl.string(eD.t["2u5yu0"]),
                                          action: R,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      l0.Dr,
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
        })({ user: n, guildId: l, onClose: g });
    return 0 === m.length
        ? (0, t.jsx)(eo.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(l2.my, l2.vk, l5.kL, { [l5.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(l3, { ...r, imageClassName: a()(l2.Lw, l5.HU) }),
                  (0, t.jsx)(nC.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: nC.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: g,
                      renderPopout: (e) => (0, t.jsx)(l6, { ...e, items: m, onMenuClose: g }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: l5.r9,
                              children: (0, t.jsx)(e5.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: l1.R,
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
var te = l(976726);
function tn(e) {
    let { onMenuClose: n, items: l, ...i } = e;
    return (0, t.jsx)(lQ.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": eD.intl.string(eD.t.FzU73A),
        children: (0, t.jsx)(l0.rX, { children: l }),
    });
}
function tl(e) {
    let { user: n, guildId: l } = e,
        [r, o] = i.useState(!1),
        d = i.useRef(null),
        u = i.useCallback(() => o(!1), []),
        c = (function (e) {
            let { user: n, guildId: l, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, j.Ay)(),
                d = (0, Z.N2)({ user: n, guildId: l ?? void 0 }),
                u = nv.Ay.canUsePremiumProfileCustomization(n),
                c = u || null == l,
                g = null != l,
                { pendingBanner: m, pendingProfileEffect: p } = (0, s.bG)([Q.A], () =>
                    Q.A.getPendingChanges(l ?? void 0),
                ),
                f = (0, s.bG)([M.A], () =>
                    null != l ? M.A.getGuildMemberProfile(n.id, l)?.banner : M.A.getUserProfile(n.id)?.banner,
                ),
                x = (0, s.bG)([nh.default], () => nh.default.getCurrentUser()?.banner != null),
                h = (0, s.bG)([M.A], () => M.A.getUserProfile(n.id)?.profileEffect != null),
                v = (0, Z.Ac)(m, f),
                A = g && x,
                b = g && h,
                I = void 0 === p ? null != d : null != p,
                C = i.useCallback(() => {
                    r(),
                        (0, nS.XD)({
                            uploadType: nO.HL.BANNER,
                            analyticsSource: a,
                            guildId: l ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, l]),
                N = i.useCallback(() => {
                    r(),
                        (0, nU.W)({
                            analyticsLocations: o,
                            guild: null != l ? (nF.A.getGuild(l) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                        });
                }, [r, o, l, d]),
                y = i.useCallback(() => {
                    r(), (0, nS.rM)(null, f, (e) => (0, nE.p)({ guildId: l ?? void 0, banner: e }));
                }, [r, l, f]),
                E = i.useCallback(() => {
                    r(), (0, nE.p)({ guildId: l ?? void 0, profileEffect: null });
                }, [r, l]);
            return i.useMemo(() => {
                let e = [];
                return (
                    u &&
                        e.push(
                            (0, t.jsx)(
                                l0.Dr,
                                { id: "change-banner", label: eD.intl.string(eD.t.N0bC3P), action: C },
                                "change-banner",
                            ),
                        ),
                    c &&
                        e.push(
                            (0, t.jsx)(
                                l0.Dr,
                                { id: "change-effect", label: eD.intl.string(eD.t["/6nv6N"]), action: N },
                                "change-effect",
                            ),
                        ),
                    u &&
                        v &&
                        e.push(
                            A
                                ? (0, t.jsx)(
                                      l0.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eD.intl.string(eD.t.jHlJNS),
                                          action: y,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      l0.Dr,
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
                                ? (0, t.jsx)(
                                      l0.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eD.intl.string(eD.t.Lb7lu9),
                                          action: E,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      l0.Dr,
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
        })({ user: n, guildId: l, onClose: u });
    return 0 === c.length
        ? (0, t.jsx)(eu.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(te.kL, { [te.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(eu.A, { ...e, className: te.Pr }),
                  (0, t.jsx)(nC.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: nC.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: u,
                      renderPopout: (e) => (0, t.jsx)(tn, { ...e, items: c, onMenuClose: u }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: te.r9,
                              children: (0, t.jsx)(e5.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: l1.R,
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
var tt = l(777480),
    ti = l(107563),
    tr = l(570287);
l(938796);
var ta = l(913453),
    ts = l(667049),
    to = l(837531),
    td = l(186272),
    tu = l(645625);
let tc = (e) => e * (2 - e),
    tg = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } },
    tm = (e) => {
        let { type: n, anchor: l } = e;
        return "staple" !== n || "bottom" !== l;
    };
function tp(e) {
    let { displayProfile: n, pendingBanner: l } = e,
        r = (0, V.Nx)(),
        [a, s] = i.useState(void 0);
    if (
        (i.useEffect(() => {
            if (null == l || r) return;
            let e = !1;
            return (
                er(l, 1024)
                    .then((n) => {
                        e || s(n);
                    })
                    .catch(() => {
                        e || s(l);
                    }),
                () => {
                    (e = !0), s(void 0);
                }
            );
        }, [r, l]),
        r)
    )
        return null;
    let o = null != l ? (a ?? null) : n?.getPreviewBanner(l, !1, 1024);
    return null == o
        ? null
        : (0, t.jsx)("div", { className: tu.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function tf(e) {
    let { displayProfile: n, profileEffectOverride: l, isHovering: i } = e,
        r = void 0 !== l ? l : n?.profileEffect;
    return null == r ? null : (0, t.jsx)(b.A, { skuId: r.skuId, isHovering: i });
}
function tx(e) {
    let {
            user: n,
            currentUser: l,
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
        E = n.id === l.id,
        T = i.useRef(null),
        { isHoveringOrFocusing: D } = (0, P.A)(T),
        [w, M] = i.useState(),
        U = i.useCallback((e) => {
            let n = e.contentRect.width;
            n <= 350 ? M("compact-xs") : n <= 380 ? M("compact-sm") : M(void 0);
        }, []);
    (0, h.g)(T, U, [], { fireOnMount: !0 });
    let F = null != w ? tg[w] : void 0,
        B = i.useMemo(() => f ?? (0, k.A)(), [f]),
        { relationshipType: V, originApplicationId: $ } = (0, s.cf)([_.A], () => ({
            relationshipType: _.A.getRelationshipType(n.id),
            originApplicationId: _.A.getOriginApplicationId(n.id),
        })),
        Z = (0, s.bG)([L.A], () => L.A.hidePersonalInformation),
        J = (0, S.q)({ userId: n.id }),
        Q = (0, R.fi)(n.id),
        { appIdentities: en, connections: el } = (function (e) {
            let { filteredAppIdentities: n } = (0, q.A)(e),
                l = (0, X.A)(e),
                t = W.A.useConfig({ location: "useVisibleUserProfileConnectionsAndAppIdentities" }),
                r = i.useMemo(() => new Set(t.enabled ? (n?.map((e) => e.application_id) ?? []) : []), [n, t.enabled]),
                a = (0, K.A)([...r]).filter(Y.Vq);
            return {
                appIdentities: i.useMemo(
                    () =>
                        n
                            .map((e) => ({ identity: e, application: a.find((n) => n.id === e.application_id) }))
                            .filter((e) => {
                                let { application: n } = e;
                                return null != n;
                            }),
                    [n, a],
                ),
                connections: i.useMemo(
                    () =>
                        t.enabled
                            ? l.filter((e) => {
                                  let n = H.A.get(e.type);
                                  return n?.replacedBy == null || !r.has(n.replacedBy);
                              })
                            : l,
                    [l, r, t.enabled],
                ),
            };
        })(n.id),
        et = (0, z.A)(n.id),
        ei = C ? tl : eu.A,
        er = C ? l4 : eo.A;
    return (0, t.jsxs)("main", {
        className: a()(tu.profile, null != w && tu[w]),
        ref: T,
        "aria-busy": y,
        children: [
            (0, t.jsxs)("div", {
                className: tu.profileHeader,
                children: [
                    (0, t.jsx)(ei, {
                        user: n,
                        displayProfile: g,
                        guildId: r,
                        themeType: ee.d.MODAL_V2,
                        specOverrides: F,
                        pendingBanner: j,
                    }),
                    (0, t.jsx)(ex.A, { userId: n.id, onClose: x, className: tu.interactionToast }),
                    (0, t.jsx)(er, {
                        user: n,
                        displayProfile: g,
                        guildId: r,
                        channelId: d,
                        themeType: ee.d.MODAL_V2,
                        specOverrides: F,
                        avatarDecorationOverride: v,
                        avatarOverride: A,
                    }),
                    (0, t.jsx)(eI.A, {
                        user: n,
                        guildId: r,
                        channelId: d,
                        themeType: ee.d.MODAL_V2,
                        hasEntered: p,
                        prompt: E ? B : null,
                    }),
                ],
            }),
            (0, t.jsxs)(u.Ip, {
                fade: !0,
                className: tu.profileBody,
                children: [
                    (0, t.jsx)(em.A, { userId: n.id }),
                    (0, t.jsx)(lZ, {
                        user: n,
                        displayProfile: g,
                        nickname: m,
                        trailing: (0, t.jsx)(ed.A, { displayProfile: g, themeType: ee.d.MODAL_V2, onClose: x }),
                        onClose: x,
                        allowEditing: C,
                    }),
                    V === eq.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(eb.A.Overlay, {
                            className: tu.profileOverlay,
                            children: (0, t.jsx)(ef.A, {
                                user: n,
                                applicationId: $,
                                guildId: g?.guildId ?? void 0,
                                channelId: d,
                                className: tu.profileBanner,
                            }),
                        }),
                    Q.map((e) => {
                        let { applicationId: l } = e;
                        return (0, t.jsx)(
                            eb.A.Overlay,
                            {
                                className: tu.profileOverlay,
                                children: (0, t.jsx)(ef.A, {
                                    user: n,
                                    guildId: g?.guildId ?? void 0,
                                    channelId: d,
                                    isGameRelationship: !0,
                                    applicationId: l,
                                    className: tu.profileBanner,
                                }),
                            },
                            l,
                        );
                    }),
                    n.isProvisional &&
                        (0, t.jsx)(eb.A.Overlay, {
                            className: tu.profileOverlay,
                            children: (0, t.jsx)(ld.A, {
                                heading: eD.intl.string(eD.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(c.E, { size: "xs", color: "currentColor" }),
                                className: tu.profileBanner,
                                children: (0, t.jsx)(O.T, { userId: n.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(ej.A, { user: n, className: tu.profileBanner }),
                    g?.private &&
                        (0, t.jsx)(eb.A.Overlay, {
                            className: tu.profileOverlay,
                            children: (0, t.jsx)(eA.A, { username: m }),
                        }),
                    (0, t.jsx)("div", {
                        className: tu.profileButtons,
                        children: (0, t.jsx)(e2, {
                            user: n,
                            currentUser: l,
                            guildId: r,
                            originGuildId: o,
                            channelId: d,
                            displayProfile: g,
                            relationshipType: V,
                            onClose: x,
                        }),
                    }),
                    E && (0, t.jsx)(eg.A, { isPremiumUser: (0, G.ki)(l), onInteraction: x }),
                    !Z && (0, t.jsx)(ec.E, { userBio: g?.bio, setLineClamp: !1 }),
                    J.length > 0 &&
                        (0, t.jsx)(ld.A, {
                            heading: eD.intl.string(eD.t["Uv/eTx"]),
                            children: (0, t.jsx)(ep.A, { applicationIds: J }),
                        }),
                    (0, t.jsx)(ld.A, {
                        heading: eD.intl.string(eD.t.a6XYD9),
                        children: (0, t.jsx)(eh.A, { userId: n.id, guildId: g?.guildId, tooltipDelay: eK.In }),
                    }),
                    g?.guildId != null &&
                        (0, t.jsx)(eC.A, {
                            userId: n.id,
                            guildId: g.guildId,
                            className: tu.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "currentColor",
                        }),
                    (el.length > 0 || en.length > 0) &&
                        (0, t.jsx)(ld.A, {
                            heading: eD.intl.string(eD.t["3fe7U5"]),
                            scrollTargetId: eK.bk.CONNECTIONS,
                            children: (0, t.jsx)(nc, {
                                applicationIdentities: en,
                                connections: el,
                                userId: n.id,
                                className: tu.profileAppConnections,
                            }),
                        }),
                    et.length > 0 &&
                        (0, t.jsx)(ld.A, {
                            heading: eD.intl.string(eD.t.PHjkRE),
                            scrollTargetId: eK.bk.APPS,
                            children: (0, t.jsx)(eM, {
                                applicationRoleConnections: et,
                                onClose: x,
                                className: tu.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(lc, { userId: n.id }),
                ],
            }),
            (0, t.jsx)(tf, { displayProfile: g, profileEffectOverride: b, isHovering: D }),
            null != I && (0, t.jsx)(N.A, { frame: I, filterLayer: tm }),
        ],
    });
}
function th(e) {
    let { user: n, displayProfile: l, pendingThemeColors: i, children: r } = e,
        {
            theme: a,
            primaryColor: s,
            secondaryColor: o,
        } = (0, B.A)({ user: n, displayProfile: l, pendingThemeColors: i }),
        { profileThemeStyle: d, profileThemeClassName: u } = (0, $.A)({
            theme: a,
            themeType: null,
            primaryColor: s,
            secondaryColor: o,
        });
    return (0, t.jsx)("div", { className: u, style: d, children: r });
}
function tv(e) {
    let {
            user: n,
            currentUser: l,
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
            onClose: O,
            sourceAnalyticsLocations: L = [],
            themeContainerClassName: G,
        } = e,
        B = n.id === l.id,
        {
            guildId: V,
            pendingGuildId: z,
            isLoading: H,
            selectUserProfile: W,
        } = (function (e) {
            let { userId: n, initialGuildId: l } = e,
                [t, r] = i.useState(l),
                [a, s] = i.useState(l),
                o = i.useRef(a),
                d = i.useCallback((e) => {
                    r(e ?? void 0);
                }, []);
            return (
                i.useEffect(() => {
                    let e = !1;
                    return (
                        (0, ei.A)(n, void 0, {
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
                }, [t, n]),
                { guildId: a, pendingGuildId: t, isLoading: t !== a, selectUserProfile: d }
            );
        })({ userId: n.id, initialGuildId: r }),
        K = i.useMemo(() => (null != V ? { [V]: [n.id] } : {}), [V, n.id]);
    (0, v.Eq)(K, "UserProfileModalV2");
    let q = (0, U.X)("UserProfileModalV2"),
        Y = B && q,
        {
            pendingThemeColors: X,
            avatarDecorationOverride: $,
            avatarOverride: en,
            bannerOverride: er,
            profileEffectOverride: eo,
        } = (function (e) {
            let { user: n, guildId: l, allowEditingInModal: t } = e;
            return (0, s.cf)([Q.A], () => {
                if (!t) return et;
                let {
                    pendingThemeColors: e,
                    pendingAvatarDecoration: i,
                    pendingAvatar: r,
                    pendingBanner: a,
                    pendingProfileEffect: s,
                } = Q.A.getPendingChanges(l);
                return {
                    pendingThemeColors: e,
                    avatarDecorationOverride:
                        void 0 === i
                            ? void 0
                            : (0, Z.lw)({ userValue: n.avatarDecoration, pendingValue: i, guildId: l }),
                    avatarOverride: (0, J.V7)({ userId: n.id, image: r, size: el }),
                    bannerOverride: a,
                    profileEffectOverride: s,
                };
            }, [n, l, t]);
        })({ user: n, allowEditingInModal: Y, guildId: V }),
        {
            isExpanded: ed,
            isAnimating: eu,
            transition: ec,
            canShowExpand: eg,
            handleExpand: em,
            handleCollapse: ep,
            refs: { expandIconButtonRef: ef, expandTabButtonRef: ex, collapseButtonRef: eh },
        } = (function () {
            let [e, n] = i.useState(() => window.innerWidth > 928),
                [l, t] = i.useState(!1),
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: tc },
                    onRest: () => t(!1),
                }),
                a = (0, x.A)("(min-width: 929px) and (min-height: 550px)"),
                s = i.useRef(null),
                o = i.useRef(null),
                u = i.useRef(null),
                c = i.useRef(null),
                g = i.useCallback(() => {
                    (c.current = "collapse"), t(!0), n(!0);
                }, []),
                m = i.useCallback(() => {
                    (c.current = "expand"), t(!0), n(!1);
                }, []);
            return (
                i.useEffect(() => {
                    if (!l) {
                        if ("collapse" === c.current && e) (c.current = null), u.current?.focus();
                        else if ("expand" === c.current && !e) {
                            c.current = null;
                            let e = a ? o.current : s.current;
                            e?.focus();
                        }
                    }
                }, [e, l, a]),
                {
                    isExpanded: e,
                    isAnimating: l,
                    transition: r,
                    canShowExpand: !e && !l,
                    handleExpand: g,
                    handleCollapse: m,
                    refs: { expandIconButtonRef: s, expandTabButtonRef: o, collapseButtonRef: u },
                }
            );
        })(),
        eA = Y && eg,
        { defaultWishlistId: ej } = (0, s.cf)([M.A], () => ({ defaultWishlistId: M.A.getFirstWishlistId(n.id) }));
    (0, T.fw)({ wishlistId: ej, userId: n.id });
    let eI = (0, es.fC)(),
        eC = H || null != eI.interactionType,
        eN = (function (e) {
            let n,
                l,
                t,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, ta.A)(i),
                d = o?.length,
                u =
                    ((n = (0, s.bG)([nh.default], () => nh.default.getCurrentUser())),
                    (l = (0, s.bG)([M.A], () => M.A.getUserProfile(i.id))),
                    (t =
                        l?.bio === "" &&
                        l?.pronouns === "" &&
                        l?.banner === void 0 &&
                        l?.accentColor === void 0 &&
                        l?.banner === void 0 &&
                        i.flags === i.publicFlags &&
                        (l?.badges == null || l?.badges?.length === 0)),
                    n?.id !== i.id && !t),
                c = (0, ts.A)(i.id),
                g = (0, tr.A)(i.id),
                m = [],
                p = i.id === r?.id,
                f = M.A.getFirstWishlistId(i.id),
                x = null != f,
                h = x ? M.A.getWishlistSettings(i.id, f) : null,
                v = (x ? ti.A.getWishlistItems(f) : []).length > 0,
                A = c.length > 0;
            (p || A) && m.push({ text: eD.intl.string(eD.t.laViwx), section: eK.RP.WIDGETS }),
                m.push({ text: eD.intl.string(eD.t.chq59f), section: eK.RP.ACTIVITY });
            let j = !1 === i.nsfwAllowed,
                b = _.A.isFriend(i.id),
                I = h?.visibility === tt.a.PUBLIC;
            return (
                (p || (!p && v && I && g && (!j || (j && b)))) &&
                    m.push({ text: eD.intl.string(eD.t["7lZ31J"]), section: eK.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (m.push({ text: (0, to.A)(a), section: eK.RP.MUTUAL_FRIENDS }),
                    m.push({ text: (0, td.A)(d), section: eK.RP.MUTUAL_GUILDS })),
                m
            );
        })({ user: n, currentUser: l }),
        { analyticsLocations: ey } = (0, j.Ay)([...L, A.A.USER_PROFILE_MODAL_V2]),
        eE = (0, w.pb)({
            layout: "MODAL_V2",
            userId: n.id,
            sourceSessionId: b,
            guildId: V,
            channelId: u,
            messageId: c,
            roleId: h,
        }),
        eP = (0, F.Ay)(n.id, V),
        ek = (0, C.A)(eP?.profileFrame?.skuId, "UserProfileModalV2"),
        eR = (0, y.A)(eP?.profileFrame?.skuId);
    (0, I.A)({ skuId: eP?.profileFrame?.skuId, openedAt: S, context: eE, analyticsLocations: ey });
    let eS = D.Ay.useName(eP?.guildId, u, n),
        eO = (0, E.GV)(),
        eT = eD.intl.format(eD.t.KRe1Fk, { name: eS });
    return (0, t.jsx)(j.f5, {
        value: ey,
        children: (0, t.jsx)(w.of, {
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
                        className: tu.root,
                        transitionState: k,
                        "aria-labelledby": eO,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(lh, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(tu.layoutContainer, eR, {
                                        [tu.editingPanelEnabled]: Y,
                                        [tu.editingPanelExpanded]: Y && ed,
                                        [tu.isAnimating]: eu,
                                        [tu.hasPrivateBanner]: eP?.private === !0,
                                    }),
                                    children: [
                                        (0, t.jsxs)(th, {
                                            user: n,
                                            displayProfile: eP,
                                            pendingThemeColors: X,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: tu.modalHeaderButtons,
                                                    children: [
                                                        (0, t.jsx)(e6, { isCurrentUser: B, onClose: O }),
                                                        (0, t.jsx)(m.A, {
                                                            children: (0, t.jsx)(p.H, { id: eO, children: eT }),
                                                        }),
                                                        Y &&
                                                            (!ed || eu) &&
                                                            (0, t.jsx)(lt, {
                                                                buttonRef: ef,
                                                                onClick: em,
                                                                className: tu.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eA &&
                                                    (0, t.jsx)(ll, {
                                                        innerRef: ex,
                                                        onClick: em,
                                                        className: tu.editingPanelExpandButtonDefault,
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(p.F, {
                                            children: [
                                                Y &&
                                                    ec((e, n) =>
                                                        n
                                                            ? (0, t.jsx)(la, {
                                                                  className: a()(tu.editingPanel, {
                                                                      [tu.isExpanded]: ed,
                                                                  }),
                                                                  selectedGuildId: z,
                                                                  onSelectGuildId: W,
                                                                  onClose: ep,
                                                                  collapseButtonRef: eh,
                                                                  isLoading: H,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(eb.A, {
                                                    className: a()(G, tu.profileContentContainer),
                                                    user: n,
                                                    displayProfile: eP,
                                                    themeType: ee.d.MODAL_V2,
                                                    pendingThemeColors: X,
                                                    isPrivate: eP?.private === !0,
                                                    children: [
                                                        (0, t.jsx)(tp, { displayProfile: eP, pendingBanner: er }),
                                                        eP?.private === !0 && (0, t.jsx)(ev.A, {}),
                                                        (0, t.jsx)(lp, { isVisible: eC, showLoadingSpinner: H }),
                                                        (0, t.jsx)(lS, { className: tu.toast }),
                                                        (0, t.jsx)(tx, {
                                                            user: n,
                                                            currentUser: l,
                                                            guildId: V,
                                                            channelId: u,
                                                            displayProfile: eP,
                                                            nickname: eS,
                                                            originGuildId: o,
                                                            hasEntered: k === f.ip.ENTERED,
                                                            customStatusPrompt: R,
                                                            onClose: O,
                                                            avatarDecorationOverride: $,
                                                            avatarOverride: en,
                                                            bannerOverride: er,
                                                            profileEffectOverride: eo,
                                                            profileFrame: ek,
                                                            allowEditing: Y,
                                                            isLoading: H,
                                                        }),
                                                        (0, t.jsx)(lv.A, {
                                                            user: n,
                                                            currentUser: l,
                                                            displayProfile: eP,
                                                            guildId: V,
                                                            channelId: u,
                                                            items: eN,
                                                            initialSection: N,
                                                            onClose: O,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, t.jsx)(ls.A, { userId: n.id, guildId: V, className: tu.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
