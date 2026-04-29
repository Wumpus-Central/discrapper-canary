l.d(n, { A: () => tu });
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
    A = l(80682),
    v = l(793574),
    j = l(688810),
    I = l(480335),
    b = l(31956),
    C = l(361628),
    N = l(744808),
    y = l(282389),
    E = l(915089),
    P = l(713517),
    R = l(645507),
    k = l(922590),
    S = l(821269),
    O = l(93246),
    T = l(594832),
    _ = l(994500),
    D = l(351906),
    L = l(562153),
    M = l(474090),
    G = l(183555),
    w = l(841595),
    U = l(591179),
    F = l(999291),
    B = l(101928),
    V = l(837529),
    z = l(346713),
    W = l(573648),
    H = l(941314),
    K = l(429913),
    q = l(321078),
    Y = l(403362),
    X = l(484509),
    $ = l(920601),
    J = l(919395),
    Z = l(101058),
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
var ei = l(576622);
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
    eA = l(312381),
    ev = l(501193),
    ej = l(383448),
    eI = l(946356),
    eb = l(983495),
    eC = l(280645),
    eN = l(109112),
    ey = l(939249),
    eE = l(834730),
    eP = l(730134),
    eR = l(169869),
    ek = l(837057),
    eS = l(310419),
    eO = l(773669),
    eT = l(889227),
    e_ = l(967198),
    eD = l(488995),
    eL = l(985018),
    eM = l(985176);
function eG(e) {
    let { applicationRoleConnection: n, locale: l, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, eR.VW)(n, l);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: eM.k_,
                children:
                    null != n.application.bot
                        ? (0, t.jsx)(eP.A, { user: new eT.A(n.application.bot), size: o._3.SIZE_16 })
                        : (0, t.jsx)(eN._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: eM.Hd,
                children: [
                    (0, t.jsxs)(ey.D, {
                        className: eM.OB,
                        onClick: () => {
                            i?.(),
                                (0, ek.transitionToGlobalDiscovery)({
                                    tab: eD.GlobalDiscoveryTab.APPS,
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
                                className: eM.nk,
                                children: eL.intl.format(eL.t.zIT9YA, { applicationHook: () => n.application.name }),
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
    let { applicationRoleConnections: n, className: l, onClose: i } = e,
        { trackUserProfileAction: r } = (0, G.NJ)(),
        o = (0, s.bG)([eO.default], () => eO.default.locale),
        d = (0, s.bG)([e_.A], () => e_.A.getGuildId());
    return 0 === n.length
        ? null
        : (0, t.jsx)("ul", {
              className: a()(eM.kL, l),
              children: n.map((e, n) =>
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
    eW = l(746174),
    eH = l(993401),
    eK = l(518477),
    eq = l(652215);
function eY(e) {
    let { user: n, onClose: l } = e,
        { analyticsLocations: r } = (0, j.Ay)(),
        a = (0, eW.j)("UserProfileGiftButton"),
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
        ? (0, t.jsx)(eH.q3, { action: eK.pt.GIFT, icon: eV.o, tooltipText: eL.intl.string(eL.t.PEjaCx), onClick: o })
        : null;
}
var eX = l(982985),
    e$ = l(700174),
    eJ = l(34188),
    eZ = l(693477),
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
function e8(e) {
    let { onClose: n, ...l } = e,
        { analyticsLocations: i, newestAnalyticsLocation: r } = (0, j.Ay)(),
        a = e1(() => {
            (0, eZ.Cz)({ analyticsLocations: i, analyticsSource: r }), n?.();
        });
    return (0, t.jsx)(eH.q3, {
        action: "VISIT_SHOP",
        icon: eJ.U,
        tooltipText: eL.intl.string(eL.t.b2d0N0),
        onClick: a,
        ...l,
    });
}
var e9 = l(573355),
    e7 = l(102951);
function e5(e) {
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
        } = (0, e7.J)({ userId: n.id }),
        x = m.length > 0 || p || f;
    return o === eq.eA$.BLOCKED
        ? null
        : n.id === l.id
          ? u
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(eX.e, { userId: n.id, variant: "primary", disabled: !0 }),
                        (0, t.jsx)(e8, { onClose: d }),
                        (0, t.jsx)(e$.Zt, { user: n, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(eB.A, { user: n, guildId: i, onClose: d }),
                        (0, t.jsx)(e8, { onClose: d }),
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
                          (0, t.jsx)(e9.Ef, { user: n, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(eY, { user: n }),
                          (0, t.jsx)(e$.Zt, { user: n, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === eq.eA$.NONE && x
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(eX.e, { userId: n.id, onClose: eU.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(e9.ES, {
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
                            (0, t.jsx)(e9.cO, {
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
var e2 = l(408278),
    e3 = l(789645);
function e6(e) {
    let { isCurrentUser: n, onClose: l } = e,
        i = e1(l, n);
    return (0, t.jsx)(e2.K, {
        "aria-label": eL.intl.string(eL.t.cpT0Cq),
        icon: e3.P,
        onClick: i,
        variant: "secondary",
        size: "sm",
    });
}
var e4 = l(990078),
    ne = l(349288),
    nn = l(509434),
    nl = l(58149),
    nt = l(681819),
    ni = l(370480),
    nr = l(486020),
    na = l(76843),
    ns = l(783419);
function no(e) {
    let { account: n, locale: l, userId: i } = e,
        r = n.metadata ?? {},
        a = (0, ni.An)(r[ns.pK.CREATED_AT], l),
        s = W.A.get((0, nt.ML)(n.type));
    return (0, t.jsx)(nu, {
        renderAccountName: () => {
            let e = s?.getPlatformUserUrl?.(n);
            return null == e
                ? (0, t.jsx)(e4.m, {
                      overflowOnly: !0,
                      text: n.name,
                      children: (0, t.jsx)(eE.E, { variant: "text-sm/normal", className: eM.GW, children: n.name }),
                  })
                : (0, t.jsx)(ne.Anchor, {
                      href: e,
                      className: eM.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${n.name}, ${eL.intl.string(eL.t.q5jLJB)}`
                              : `${n.name}, ${eL.intl.string(eL.t.q5jLJB)}`,
                      onClick: (l) => {
                          (0, nl.zV)(eq.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: n.type, other_user_id: i }),
                              (0, na.h)({ href: e, trusted: s?.type !== eq.fg2.DOMAIN }, l);
                      },
                      children: (0, t.jsxs)("div", {
                          className: eM.vi,
                          children: [
                              (0, t.jsx)(e4.m, {
                                  overflowOnly: !0,
                                  text: n.name,
                                  children: (0, t.jsx)(eE.E, {
                                      variant: "text-sm/normal",
                                      className: eM.GW,
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
                ? (0, eR.xE)(r)
                : n.type === eq.fg2.STEAM
                  ? (0, eR.dy)(r)
                  : n.type === eq.fg2.BLUESKY || n.type === eq.fg2.MASTODON || n.type === eq.fg2.TWITTER
                    ? (0, eR.ED)(r)
                    : n.type === eq.fg2.PAYPAL
                      ? (0, eR.gZ)(r)
                      : n.type === eq.fg2.EBAY
                        ? (0, eR.ub)(r)
                        : n.type === eq.fg2.TIKTOK
                          ? (0, eR.HU)(r)
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
                    className: eM.GW,
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
        className: eM.FI,
        children: [
            (0, t.jsx)(e4.m, {
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
                            n(),
                            null != s &&
                                (0, t.jsx)(eE.E, {
                                    variant: "text-xs/normal",
                                    children: eL.intl.format(eL.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: eM.yu, children: l() }),
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
              className: a()(eM.kL, r),
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
    nx = l(927578),
    nh = l(487233),
    nA = l(230635),
    nv = l(317097),
    nj = l(602853),
    nI = l(922016),
    nb = l(508274),
    nC = l(654107),
    nN = l(84540),
    ny = l(930349);
function nE(e) {
    let { user: n, disabled: l = !1 } = e,
        r = i.useRef(null),
        a = (0, nj.r)(nm.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, nC.rh)(n.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([Q.A, w.A], () => ({
            pendingAccentColor: Q.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: w.A.getUserProfile(n.id)?.accentColor,
        })),
        c = d ?? u ?? (0, nv.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, nN.p)({ accentColor: e }), []);
    return (0, t.jsx)(nI.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(nb.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(ny.NW, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: l,
                accessibleLabel: eL.intl.string(eL.t["/X3fkf"]),
                children: (0, t.jsx)("div", {
                    style: { width: "100%", height: "100%", backgroundColor: (0, nv.Hl)(c) },
                }),
            }),
    });
}
var nP = l(450373),
    nR = l(252732),
    nk = l(287809),
    nS = l(339984),
    nO = l(111242);
function nT(e) {
    let { backgroundColor: n } = e;
    return (0, t.jsx)("div", { className: nO.o, style: { backgroundColor: n } });
}
function n_(e) {
    let { src: n } = e;
    return (0, t.jsx)("img", { src: n, alt: "", className: nO._ });
}
function nD(e) {
    let { userId: n, guildId: l, disabled: i } = e,
        { newestAnalyticsLocation: r } = (0, j.Ay)(),
        a = null != l,
        o = (0, F.Ay)(n, l),
        d = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(l ?? void 0).pendingBanner),
        u = (0, s.bG)([nk.default], () => nk.default.getCurrentUser()?.banner != null),
        c = (0, s.bG)([w.A], () =>
            null != l ? w.A.getGuildMemberProfile(n, l)?.banner : w.A.getUserProfile(n)?.banner,
        ),
        g = null === d,
        m = void 0 !== d,
        p = a && (o?.isUsingGuildMemberBanner() ?? !1),
        f = g && a ? u : (0, J.Ac)(d, o?.banner),
        x = a ? p : o?.banner != null,
        h = m ? null != d : x,
        A = o?.getPreviewBanner(g && a && !p ? void 0 : d, !1, 296) ?? void 0,
        v = (0, nj.r)(nm.A.unsafe_rawColors.PRIMARY_800).hex(),
        I = o?.primaryColor ?? (0, nv.LX)(v),
        { hex: b } = (0, nP.A)(I),
        C = () =>
            (0, nR.XD)({
                uploadType: nS.HL.BANNER,
                analyticsSource: r,
                guildId: l ?? void 0,
                stackingBehavior: "stack",
            }),
        N = null != A ? (0, t.jsx)(n_, { src: A }) : (0, t.jsx)(nT, { backgroundColor: b });
    if (!f)
        return (0, t.jsx)(ny.kL, {
            variant: "square",
            onClick: C,
            accessibleLabel: eL.intl.string(eL.t.N0bC3P),
            disabled: i,
            children: N,
        });
    let y = a && u,
        E = h
            ? {
                  onClick: () => (0, nR.rM)(null, c, (e) => (0, nN.p)({ guildId: l ?? void 0, banner: e })),
                  type: y ? "reset" : "remove",
                  accessibleLabel: eL.intl.string(y ? eL.t.jHlJNS : eL.t.tT9n7D),
              }
            : void 0;
    return (0, t.jsx)(ny.NW, {
        variant: "square",
        onClick: C,
        accessibleLabel: eL.intl.string(eL.t.N0bC3P),
        deleteButtonConfig: E,
        disabled: i,
        children: N,
    });
}
var nL = l(473219),
    nM = l(33851),
    nG = l.n(nM),
    nw = l(298387);
function nU(e) {
    let { color: n, suggestedColors: l, disabled: r, ariaLabel: a, onSelect: s } = e,
        o = i.useRef(null),
        d = (0, nv.Hl)(n);
    return (0, t.jsx)(nI.Y, {
        targetElementRef: o,
        renderPopout: (e) => (0, t.jsx)(nb.VN, { ...e, value: n, onChange: s, suggestedColors: l, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: n, ...l } = e;
            return (0, t.jsx)(ey.D, {
                ...l,
                innerRef: o,
                className: nw.Dh,
                onClick: r ? void 0 : n,
                "aria-label": a,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)("div", { className: nw.Hy, style: { backgroundColor: d } }),
            });
        },
    });
}
function nF(e) {
    let {
            primaryColor: n,
            secondaryColor: l,
            onSelectPrimaryColor: i,
            onSelectSecondaryColor: r,
            suggestedColors: a,
            disabled: s = !1,
        } = e,
        o = (0, nv.Hl)(n),
        d = (0, nv.Hl)(l),
        u = `linear-gradient(to bottom, ${o}, ${d})`,
        c = eL.intl.formatToPlainString(eL.t.FquTfm, { colorLabel: o }),
        g = eL.intl.formatToPlainString(eL.t.xOnm4z, { colorLabel: d });
    return (0, t.jsx)(ny.Yt, {
        variant: "square",
        disabled: s,
        children: (0, t.jsxs)("div", {
            className: nw.D7,
            style: { background: u },
            children: [
                (0, t.jsx)(nU, { color: n, suggestedColors: a, ariaLabel: c, onSelect: i, disabled: s }),
                (0, t.jsx)(nU, { color: l, suggestedColors: a, ariaLabel: g, onSelect: r, disabled: s }),
            ],
        }),
    });
}
function nB(e) {
    let { user: n, guildId: l, disabled: r = !1 } = e,
        a = (0, F.Ay)(n.id, l),
        { pendingThemeColors: o, pendingAvatar: d } = (0, s.cf)([Q.A], () => {
            let e = Q.A.getPendingChanges(l ?? void 0);
            return { pendingThemeColors: e.pendingThemeColors, pendingAvatar: e.pendingAvatar };
        }),
        u = (0, Z.V7)({ userId: n.id, image: d }),
        { primaryColor: c, secondaryColor: g } = (0, B.A)({
            user: n,
            displayProfile: a,
            pendingThemeColors: o,
            pendingAvatarSrc: u ?? void 0,
            isPreview: !0,
        }),
        m = (0, nj.r)(nm.A.unsafe_rawColors.PRIMARY_530).hex(),
        p = null != u ? u : n.getAvatarURL(l ?? void 0, 80),
        f = (0, nC.rh)(p, m, !1),
        x = i.useCallback(
            (e) => {
                let n = nG()(e, a?.themeColors);
                (0, nN.p)({ guildId: l ?? void 0, themeColors: n ? void 0 : e });
            },
            [a?.themeColors, l],
        );
    return null == c || null == g
        ? null
        : (0, t.jsx)(nF, {
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
var nV = l(315629),
    nz = l(821609),
    nW = l(403581),
    nH = l(835071),
    nK = l(235684);
function nq() {
    let e = () => {
        (0, nH.K)({ stackingBehavior: "stack" });
    };
    return (0, t.jsxs)(nV.h, {
        color: "nitro-pink",
        className: nK.k,
        children: [
            (0, t.jsx)(eE.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eL.intl.format(eL.t.TmfgI2, { onClick: e }),
            }),
            (0, t.jsx)(nz.$, {
                variant: "expressive",
                size: "md",
                icon: nW.t,
                text: eL.intl.string(eL.t.pj0XBN),
                onClick: e,
                fullWidth: !0,
            }),
        ],
    });
}
l(667532);
var nY = l(111159),
    nX = l(783878),
    n$ = l(548118),
    nJ = l(71393),
    nZ = l(711014),
    nQ = l(308696);
let n0 = "MAIN_PROFILE";
function n1(e) {
    let { selectedGuildId: n, onChange: l, loading: r } = e,
        a = (0, s.bG)([nZ.Ay], () => nZ.Ay.getFlattenedGuildIds()),
        o = (0, s.bG)([nJ.A], () => nJ.A.getGuilds()),
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
                              leading: (0, t.jsx)(n$.Ay, {
                                  className: nQ.$,
                                  guild: n,
                                  size: n$.Ay.Sizes.SMALLER,
                                  active: !0,
                              }),
                          };
                })
                .filter(Y.Vq);
            return (
                e.unshift({
                    id: n0,
                    label: eL.intl.string(eL.t["2p07FR"]),
                    value: n0,
                    leading: (0, t.jsx)(nY.p, { size: "sm", color: nm.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                e
            );
        }, [a, o]),
        u = i.useCallback(
            (e) => {
                l(e === n0 ? null : e);
            },
            [l],
        );
    return (0, t.jsx)(nX.Z, {
        label: eL.intl.string(eL.t.rki38K),
        hideLabel: !0,
        selectionMode: "single",
        onSelectionChange: u,
        value: n ?? n0,
        options: d,
        loading: r,
    });
}
var n8 = l(809467);
let n9 = "profile-modal-editing-panel",
    n7 = "profile-modal-editing-panel-heading";
function n5(e) {
    let { onClick: n, className: l, innerRef: i } = e;
    return (0, t.jsx)(ey.D, {
        innerRef: i,
        "aria-label": eL.intl.string(eL.t.N8XQDE),
        "aria-expanded": !1,
        "aria-controls": n9,
        className: a()(n8.eg, l),
        onClick: n,
        focusProps: { offset: { right: 6 } },
        children: (0, t.jsx)(ng.N, { size: "sm", color: nm.A.colors.ICON_STRONG }),
    });
}
function n2(e) {
    let { onClick: n, className: l, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: l,
        children: (0, t.jsx)(e2.K, {
            buttonRef: i,
            "aria-label": eL.intl.string(eL.t.N8XQDE),
            "aria-expanded": !1,
            "aria-controls": n9,
            icon: ng.N,
            onClick: n,
            variant: "secondary",
            size: "sm",
        }),
    });
}
function n3(e) {
    let { onClick: n, innerRef: l } = e;
    return (0, t.jsxs)(ey.D, {
        innerRef: l,
        className: n8.cS,
        "aria-label": eL.intl.string(eL.t.X6NklS),
        onClick: n,
        "aria-controls": n9,
        "aria-expanded": !0,
        children: [
            (0, t.jsx)(np._, { size: "md", color: "currentColor" }),
            (0, t.jsx)(np._, { size: "md", color: "currentColor" }),
        ],
    });
}
function n6(e) {
    let {
            user: n,
            selectedGuildId: l,
            onSelectGuildId: i,
            isLoading: r = !1,
            onClose: s,
            className: o,
            collapseButtonRef: d,
        } = e,
        c = e1(i),
        g = null != l,
        f = nx.Ay.canUsePremiumProfileCustomization(n);
    return (0, t.jsxs)("aside", {
        id: n9,
        "aria-labelledby": n7,
        className: a()(n8.nd, o),
        "aria-busy": r,
        children: [
            (0, t.jsx)(m.A, { children: (0, t.jsx)(p.H, { id: n7, children: eL.intl.string(eL.t["L+ch00"]) }) }),
            (0, t.jsxs)("div", {
                className: n8.wx,
                children: [
                    (0, t.jsx)(n3, { innerRef: d, onClick: s }),
                    (0, t.jsx)(n1, { selectedGuildId: l ?? null, onChange: c, loading: r }),
                ],
            }),
            (0, t.jsx)(p.F, {
                children: (0, t.jsxs)(u.Ip, {
                    className: n8.XG,
                    fade: !0,
                    children: [
                        (0, t.jsxs)("div", {
                            className: n8.Os,
                            children: [
                                (0, t.jsx)(nf.D, {
                                    variant: "text-sm/medium",
                                    className: n8.AM,
                                    children: eL.intl.string(eL.t.x5CoXR),
                                }),
                                (0, t.jsx)(nL.A, { user: n, guildId: l, disabled: r || (g && !f) }),
                            ],
                        }),
                        (0, t.jsxs)("div", {
                            className: n8.Os,
                            children: [
                                (0, t.jsx)(nf.D, {
                                    variant: "text-sm/medium",
                                    className: n8.AM,
                                    children: eL.intl.string(eL.t["50Nwpc"]),
                                }),
                                (0, t.jsx)(nh.A, { user: n, guildId: l, disabled: r || (g && !f) }),
                                (0, t.jsx)(nA.A, { user: n, guildId: l, disabled: r || (g && !f) }),
                            ],
                        }),
                        f &&
                            (0, t.jsxs)("div", {
                                className: n8.Os,
                                children: [
                                    (0, t.jsx)(nf.D, {
                                        variant: "text-sm/medium",
                                        className: n8.AM,
                                        children: eL.intl.string(eL.t.Zenogr),
                                    }),
                                    (0, t.jsx)(nB, { user: n, guildId: l, disabled: r }),
                                    (0, t.jsx)(nD, { userId: n.id, guildId: l, disabled: r }),
                                ],
                            }),
                        !f &&
                            (0, t.jsxs)("div", {
                                className: n8.Os,
                                children: [
                                    (0, t.jsx)(nf.D, {
                                        variant: "text-sm/medium",
                                        className: n8.AM,
                                        children: eL.intl.string(eL.t["/X3fkf"]),
                                    }),
                                    (0, t.jsx)(nE, { user: n, disabled: r || g }),
                                ],
                            }),
                    ],
                }),
            }),
            !f && (0, t.jsx)(nq, {}),
        ],
    });
}
var n4 = l(982599),
    le = l(756634),
    ln = l(83013),
    ll = l(77085);
function lt(e) {
    let { userId: n } = e,
        l = (0, ea.g)(),
        { trackUserProfileAction: i } = (0, G.NJ)();
    return (0, t.jsx)(ln.A, {
        heading: eL.intl.string(eL.t["mQKv+v"]),
        scrollTargetId: eK.bk.NOTE,
        children: (0, t.jsx)(le.A, {
            userId: n,
            className: ll.N,
            autoFocus: l === eK.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var li = l(289873),
    lr = l(778599);
function la(e) {
    let { isVisible: n, showLoadingSpinner: l, className: i } = e;
    return (0, t.jsx)("div", {
        className: a()(lr.f, n && lr.z, i),
        children: l && (0, t.jsx)(li.y, { type: li.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
    });
}
var ls = l(568602),
    lo = l(625494);
function ld(e) {
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
                lo._.subscribe(eq.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    lo._.unsubscribe(eq.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, t.jsx)(ls.b, { isShaking: l, intensity: 1.4, children: n })
    );
}
var lu = l(515054),
    lc = l(519244),
    lg = l(933832),
    lm = l(972213),
    lp = l(97483),
    lf = l(765178),
    lx = l(775602),
    lh = l(606758),
    lA = l(707238),
    lv = l(861173);
let lj = {
        [eK.jM.WIDGET_ADDED]: {
            message: eL.intl.string(eL.t.fFP1Uy),
            icon: (0, t.jsx)(lg.A, { size: "sm", color: nm.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_added",
        },
        [eK.jM.WIDGET_REMOVED]: {
            message: eL.intl.string(eL.t.zzsK7h),
            icon: (0, t.jsx)(lg.A, { size: "sm", color: nm.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_removed",
        },
        [eK.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eL.intl.string(eL.t["84MExs"]),
            icon: (0, t.jsx)(lm.d, { size: "sm", color: nm.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_save_generic_failure",
            type: lp.Ck.FAILURE,
        },
        [eK.jM.SOMETHING_WENT_WRONG]: {
            message: eL.intl.string(eL.t.F8FvUy),
            icon: (0, t.jsx)(lm.d, { size: "sm", color: nm.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_something_went_wrong",
            type: lp.Ck.FAILURE,
        },
    },
    lI = (e) => {
        let { message: n, icon: l, type: i } = e;
        return (0, t.jsxs)("div", {
            className: a()(lv.oR, lA.oR),
            "data-type": i,
            children: [
                (0, t.jsx)("div", { className: lA.RC, children: l }),
                (0, t.jsx)(eE.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
            ],
        });
    },
    lb = (e) => {
        let { className: n } = e,
            l = (0, lh.fu)(),
            r = (0, s.bG)([lx.A], () => lx.A.useReducedMotion),
            [o, u] = i.useState(!1),
            [c, g] = i.useState(null);
        i.useEffect(() => {
            null !== l ? (u(!0), g(lj[l]), lf.O.announce(lj[l].message)) : u(!1);
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
            i.useEffect(() => () => (0, lh.XA)(null), []),
            i.useEffect(() => {
                if (o) {
                    let e = setTimeout(() => {
                        (0, lh.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [o]),
            (0, t.jsx)(t.Fragment, {
                children: m(
                    (e, l) =>
                        l &&
                        null !== c &&
                        (0, t.jsx)(lc.animated.div, {
                            className: a()(n, lA.Jt),
                            style: e,
                            children: (0, t.jsx)(lI, { ...c }),
                        }),
                ),
            })
        );
    };
var lC = l(297413),
    lN = l(534400),
    ly = l(878555),
    lE = l(193885),
    lP = l(259065),
    lR = l(696451),
    lk = l(621466),
    lS = l(219869),
    lO = l(292666),
    lT = l(539396);
function l_(e, n) {
    let [l, t] = i.useState("idle"),
        [r, a] = i.useState(e),
        o = "editing" === l,
        d = (0, s.bG)([lx.A], () => lx.A.useReducedMotion),
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
    let A = i.useCallback(
            (e) => {
                !o || (null != g.current && (0, lk.vq)(e.relatedTarget) && g.current.contains(e.relatedTarget)) || x();
            },
            [o, x],
        ),
        v = i.useCallback(
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
        previewProps: { isEditing: o, editButtonRef: u, onStartEditing: f, wrapperRef: g, onBlur: A, onKeyDown: v },
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
function lD(e) {
    let { text: n, htmlFor: l } = e;
    return (0, t.jsx)(m.A, { tag: "label", htmlFor: l, children: n });
}
function lL(e) {
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
            (0, t.jsx)(lD, { text: r, htmlFor: n }),
            (0, t.jsx)(lO.k, {
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
function lM(e) {
    let { tooltip: n, ...l } = e,
        i = (0, t.jsx)("div", {
            className: lT.L7,
            children: (0, t.jsx)(lS.T, { ...l, size: "sm", variant: "input-accessory" }),
        });
    return null == n ? i : (0, t.jsx)(e4.m, { text: n, ariaHidden: !0, children: i });
}
function lG(e) {
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
        A = i.useId(),
        v = null == l,
        j = (0, t.jsxs)("div", {
            ref: h,
            className: lT.LL,
            onClick: u,
            children: [
                v
                    ? (0, t.jsx)(eE.E, {
                          id: A,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: lT.qf,
                          children: r,
                      })
                    : l,
                (0, t.jsx)(ey.D, {
                    innerRef: o,
                    "aria-label": d,
                    "aria-describedby": v ? A : void 0,
                    "aria-expanded": !1,
                    onClick: (e) => {
                        e.stopPropagation(), u();
                    },
                    focusProps: { ringTarget: h },
                }),
                null != g && (0, t.jsx)("div", { className: lT.lD, children: (0, t.jsx)(lM, { ...g }) }),
            ],
        });
    return (0, t.jsx)("div", {
        ref: p,
        className: a()(lT.kL, { [lT.oE]: "compact" === c }, m),
        onBlur: f,
        onKeyDown: x,
        children: (0, t.jsx)(
            "div",
            { className: lT.qG, children: n ? s : (0, t.jsx)("div", { className: lT.VH, children: j }) },
            n ? "editing" : "preview",
        ),
    });
}
var lw = l(35783);
function lU(e) {
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
        A = nx.Ay.canUsePremiumProfileCustomization(m),
        {
            value: v,
            previewValue: I,
            onCommit: b,
        } = ((n = p?.guildId ?? null),
        (l = p?.guildId != null),
        (r = (0, s.bG)([nk.default], () => nk.default.getCurrentUser()?.globalName ?? null)),
        (a = (0, s.bG)([lR.Ay], () => (null != n ? (lR.Ay.getMember(n, m.id)?.nick ?? null) : null))),
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
                        ? (0, nN.p)({ nickname: e.trim(), guildId: p?.guildId ?? void 0 })
                        : (0, nN.p)({ globalName: e.trim() });
                },
                [l, p?.guildId],
            ),
        }),
        { isEditing: C, previewProps: N, inputProps: y, handleCommit: E } = l_(v, b),
        P = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(h ?? null).pendingDisplayNameStyles),
        R = eL.intl.string(x ? eL.t.mq6Cg9 : eL.t.XuZU7A),
        k = x ? (m.globalName ?? m.username) : m.username,
        S = eL.intl.string(x ? eL.t["g7OSZ/"] : eL.t.kyfzzc),
        O = i.useRef(null),
        T = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    C && E(),
                    (0, lP.L)({ analyticsLocations: f, guildId: h, stackingBehavior: "stack", returnRef: O });
            },
            [C, E, f, h],
        ),
        _ = {
            icon: lE.V,
            tooltip: eL.intl.string(eL.t.lqKKI2),
            "aria-label": eL.intl.string(eL.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: T,
            buttonRef: O,
        },
        D = A ? _ : void 0,
        L =
            null != I
                ? (0, t.jsx)(ly.c$, {
                      user: m,
                      guildId: h,
                      displayName: I,
                      size: "lg",
                      pendingDisplayNameStyles: P,
                      className: lw.d,
                  })
                : null;
    return (0, t.jsx)(lG, {
        ...N,
        preview: L,
        placeholder: k,
        editButtonAriaLabel: S,
        trailing: D,
        input: (0, t.jsx)(lL, { ...y, label: R, maxLength: eq.zzC, placeholder: k, trailing: D }),
    });
}
var lF = l(469432);
function lB(e) {
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
                    (0, nN.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        { previewProps: p, inputProps: f, isEditing: x } = l_(c, m),
        h = null != g && g.length > 0;
    return (0, t.jsx)(lG, {
        ...p,
        variant: "compact",
        className: a()(lF.k, x && lF.J),
        preview: h ? (0, t.jsx)(ly.n2, { pronouns: g }) : null,
        placeholder: eL.intl.string(eL.t["76Aqhl"]),
        editButtonAriaLabel: eL.intl.string(eL.t.h6VAO7),
        input: (0, t.jsx)(lL, {
            ...f,
            label: eL.intl.string(eL.t["rniRE+"]),
            placeholder: eL.intl.string(eL.t["76Aqhl"]),
            maxLength: eq.VE5,
        }),
    });
}
var lV = l(874644);
function lz(e) {
    let { user: n, displayProfile: l, nickname: i, primaryGuild: r, trailing: a, onClose: s, allowEditing: o } = e;
    if (!o)
        return (0, t.jsx)(ly.Ay, {
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
        : (0, t.jsx)(lC.A, {
              user: n,
              forceUsername: !0,
              className: lV.a1,
              usernameClass: lV.eb,
              discriminatorClass: lV.sw,
              hideBotTag: !0,
          });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(lU, { displayProfile: l, user: n }),
            (0, t.jsxs)("div", {
                className: `${lV.AK} ${lV.j6}`,
                children: [
                    d,
                    (0, t.jsx)(ly.Ce, {}),
                    (0, t.jsx)(lB, { displayProfile: l }),
                    (0, t.jsx)(lN.Ay, {
                        primaryGuild: r,
                        userId: n.id,
                        onClose: s,
                        containerClassName: lV.L4,
                        className: lV.Mp,
                    }),
                    a,
                ],
            }),
        ],
    });
}
l(321073);
var lW = l(97808),
    lH = l(550079),
    lK = l(477782),
    lq = l(22231),
    lY = l(601255),
    lX = l(562819),
    l$ = l(19575),
    lJ = l(106106),
    lZ = l(338165);
let lQ = l$.Ay.getEnableHardwareAcceleration() ? lW.Js : lW.eu;
function l0(e) {
    let { onMenuClose: n, items: l, ...i } = e;
    return (0, t.jsx)(lH.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": eL.intl.string(eL.t.YAgq3W),
        children: (0, t.jsx)(lK.rX, { children: l }),
    });
}
function l1(e) {
    let { user: n, guildId: l } = e,
        { avatarProps: r, eventHandlers: o } = (0, eo.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useCallback(() => u(!1), []),
        m = (function (e) {
            let { user: n, guildId: l, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, j.Ay)(),
                d = null != l,
                u = (0, s.bG)([lR.Ay], () => (null != l ? lR.Ay.getMember(l, n.id) : null)),
                c = (0, s.bG)([Q.A], () => Q.A.getPendingChanges(l ?? void 0).pendingAvatar),
                g = d ? u?.avatar : n.avatar,
                m = (0, J.z5)(c, g),
                p = d && null != n.avatar,
                f = nx.Ay.canUsePremiumProfileCustomization(n),
                x = f || null == l,
                h = f || null == l,
                A = (0, s.bG)([nJ.A], () => (null != l ? nJ.A.getGuild(l) : null)),
                v = (0, J.a4)({ user: n }),
                I = (0, J.a4)({ user: n, guildId: l ?? void 0 }),
                { pendingAvatarDecoration: b } = (0, J.CP)(l ?? void 0),
                C = void 0 !== b,
                N = null != (0, lY.A)(C ? b : I) && (C ? null != b : null != I),
                y = d && null != v,
                E = i.useCallback(() => {
                    r(),
                        (0, nR.XD)({
                            uploadType: nS.HL.AVATAR,
                            analyticsSource: a,
                            guildId: l ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, l]),
                P = i.useCallback(() => {
                    r(), (0, lX.L)({ analyticsLocations: o, guild: A ?? void 0, stackingBehavior: "stack" });
                }, [r, o, A]),
                R = i.useCallback(() => {
                    r(),
                        (0, nR.rM)(null, g, (e) => (0, nN.p)({ guildId: l ?? void 0, avatar: e })),
                        (0, J.WU)(p ? "reset" : "remove");
                }, [r, l, g, p]),
                k = i.useCallback(() => {
                    r(), (0, nN.p)({ guildId: l ?? void 0, avatarDecoration: null });
                }, [r, l]);
            return i.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, t.jsx)(
                                lK.Dr,
                                { id: "change-avatar", label: eL.intl.string(eL.t["4OynCD"]), action: E },
                                "change-avatar",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, t.jsx)(
                                lK.Dr,
                                { id: "change-decoration", label: eL.intl.string(eL.t.BVcYCx), action: P },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        m &&
                        e.push(
                            p
                                ? (0, t.jsx)(
                                      lK.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.TDjKDm),
                                          action: R,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      lK.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.twB3fz),
                                          action: R,
                                      },
                                      "remove-avatar",
                                  ),
                        ),
                    h &&
                        N &&
                        e.push(
                            y
                                ? (0, t.jsx)(
                                      lK.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.JvcEcq),
                                          action: k,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      lK.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.OrokWm),
                                          action: k,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [p, x, h, y, m, N, E, P, R, k]);
        })({ user: n, guildId: l, onClose: g });
    return 0 === m.length
        ? (0, t.jsx)(eo.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(lJ.my, lJ.vk, lZ.kL, { [lZ.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(lQ, { ...r, imageClassName: a()(lJ.Lw, lZ.HU) }),
                  (0, t.jsx)(nI.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: nI.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: g,
                      renderPopout: (e) => (0, t.jsx)(l0, { ...e, items: m, onMenuClose: g }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: lZ.r9,
                              children: (0, t.jsx)(e2.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: lq.R,
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
var l8 = l(617061),
    l9 = l(976726);
function l7(e) {
    let { onMenuClose: n, items: l, ...i } = e;
    return (0, t.jsx)(lH.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": eL.intl.string(eL.t.FzU73A),
        children: (0, t.jsx)(lK.rX, { children: l }),
    });
}
function l5(e) {
    let { user: n, guildId: l } = e,
        [r, o] = i.useState(!1),
        d = i.useRef(null),
        u = i.useCallback(() => o(!1), []),
        c = (function (e) {
            let { user: n, guildId: l, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, j.Ay)(),
                d = (0, J.N2)({ user: n, guildId: l ?? void 0 }),
                u = nx.Ay.canUsePremiumProfileCustomization(n),
                c = u || null == l,
                g = null != l,
                { pendingBanner: m, pendingProfileEffect: p } = (0, s.bG)([Q.A], () =>
                    Q.A.getPendingChanges(l ?? void 0),
                ),
                f = (0, s.bG)([w.A], () =>
                    null != l ? w.A.getGuildMemberProfile(n.id, l)?.banner : w.A.getUserProfile(n.id)?.banner,
                ),
                x = (0, s.bG)([nk.default], () => nk.default.getCurrentUser()?.banner != null),
                h = (0, s.bG)([w.A], () => w.A.getUserProfile(n.id)?.profileEffect != null),
                A = (0, J.Ac)(m, f),
                v = g && x,
                I = g && h,
                b = void 0 === p ? null != d : null != p,
                C = i.useCallback(() => {
                    r(),
                        (0, nR.XD)({
                            uploadType: nS.HL.BANNER,
                            analyticsSource: a,
                            guildId: l ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, l]),
                N = i.useCallback(() => {
                    r(),
                        (0, l8.W)({
                            analyticsLocations: o,
                            guild: null != l ? (nJ.A.getGuild(l) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                        });
                }, [r, o, l, d]),
                y = i.useCallback(() => {
                    r(), (0, nR.rM)(null, f, (e) => (0, nN.p)({ guildId: l ?? void 0, banner: e }));
                }, [r, l, f]),
                E = i.useCallback(() => {
                    r(), (0, nN.p)({ guildId: l ?? void 0, profileEffect: null });
                }, [r, l]);
            return i.useMemo(() => {
                let e = [];
                return (
                    u &&
                        e.push(
                            (0, t.jsx)(
                                lK.Dr,
                                { id: "change-banner", label: eL.intl.string(eL.t.N0bC3P), action: C },
                                "change-banner",
                            ),
                        ),
                    c &&
                        e.push(
                            (0, t.jsx)(
                                lK.Dr,
                                { id: "change-effect", label: eL.intl.string(eL.t["/dRfCf"]), action: N },
                                "change-effect",
                            ),
                        ),
                    u &&
                        A &&
                        e.push(
                            v
                                ? (0, t.jsx)(
                                      lK.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.jHlJNS),
                                          action: y,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      lK.Dr,
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
                        b &&
                        e.push(
                            I
                                ? (0, t.jsx)(
                                      lK.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eL.intl.string(eL.t["SQy/Po"]),
                                          action: E,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      lK.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.uMuafO),
                                          action: E,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    e
                );
            }, [v, u, c, I, A, b, C, N, y, E]);
        })({ user: n, guildId: l, onClose: u });
    return 0 === c.length
        ? (0, t.jsx)(eu.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(l9.kL, { [l9.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(eu.A, { ...e, className: l9.Pr }),
                  (0, t.jsx)(nI.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: nI.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: u,
                      renderPopout: (e) => (0, t.jsx)(l7, { ...e, items: c, onMenuClose: u }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: l9.r9,
                              children: (0, t.jsx)(e2.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: lq.R,
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
var l2 = l(777480),
    l3 = l(107563),
    l6 = l(570287);
l(938796);
var l4 = l(913453),
    te = l(667049),
    tn = l(837531),
    tl = l(186272),
    tt = l(645625);
let ti = (e) => e * (2 - e),
    tr = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } };
function ta(e) {
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
        : (0, t.jsx)("div", { className: tt.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function ts(e) {
    let { displayProfile: n, profileEffectOverride: l, isHovering: i } = e,
        r = void 0 !== l ? l : n?.profileEffect;
    return null == r ? null : (0, t.jsx)(I.A, { skuId: r.skuId, isHovering: i });
}
function to(e) {
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
            avatarDecorationOverride: A,
            avatarOverride: v,
            bannerOverride: j,
            profileEffectOverride: I,
            allowEditing: b = !1,
            isLoading: C = !1,
        } = e,
        N = n.id === l.id,
        y = i.useRef(null),
        { isHoveringOrFocusing: E } = (0, P.A)(y),
        [T, L] = i.useState(),
        G = i.useCallback((e) => {
            let n = e.contentRect.width;
            n <= 350 ? L("compact-xs") : n <= 380 ? L("compact-sm") : L(void 0);
        }, []);
    (0, h.g)(y, G, [], { fireOnMount: !0 });
    let w = null != T ? tr[T] : void 0,
        U = i.useMemo(() => f ?? (0, R.A)(), [f]),
        { relationshipType: F, originApplicationId: B } = (0, s.cf)([_.A], () => ({
            relationshipType: _.A.getRelationshipType(n.id),
            originApplicationId: _.A.getOriginApplicationId(n.id),
        })),
        V = (0, s.bG)([D.A], () => D.A.hidePersonalInformation),
        $ = (0, S.q)({ userId: n.id }),
        J = (0, k.fi)(n.id),
        { appIdentities: Z, connections: Q } = (function (e) {
            let { filteredAppIdentities: n } = (0, q.A)(e),
                l = (0, X.A)(e),
                t = H.A.useConfig({ location: "useVisibleUserProfileConnectionsAndAppIdentities" }),
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
                                  let n = W.A.get(e.type);
                                  return n?.replacedBy == null || !r.has(n.replacedBy);
                              })
                            : l,
                    [l, r, t.enabled],
                ),
            };
        })(n.id),
        en = (0, z.A)(n.id),
        el = b ? l5 : eu.A,
        et = b ? l1 : eo.A;
    return (0, t.jsxs)("main", {
        className: a()(tt.profile, null != T && tt[T]),
        ref: y,
        "aria-busy": C,
        children: [
            (0, t.jsxs)("div", {
                className: tt.profileHeader,
                children: [
                    (0, t.jsx)(el, {
                        user: n,
                        displayProfile: g,
                        guildId: r,
                        themeType: ee.d.MODAL_V2,
                        specOverrides: w,
                        pendingBanner: j,
                    }),
                    (0, t.jsx)(ex.A, { userId: n.id, onClose: x, className: tt.interactionToast }),
                    (0, t.jsx)(et, {
                        user: n,
                        displayProfile: g,
                        guildId: r,
                        channelId: d,
                        themeType: ee.d.MODAL_V2,
                        specOverrides: w,
                        avatarDecorationOverride: A,
                        avatarOverride: v,
                    }),
                    (0, t.jsx)(eb.A, {
                        user: n,
                        guildId: r,
                        channelId: d,
                        themeType: ee.d.MODAL_V2,
                        hasEntered: p,
                        prompt: N ? U : null,
                    }),
                ],
            }),
            (0, t.jsxs)(u.Ip, {
                fade: !0,
                className: tt.profileBody,
                children: [
                    (0, t.jsx)(em.A, { userId: n.id }),
                    (0, t.jsx)(lz, {
                        user: n,
                        displayProfile: g,
                        nickname: m,
                        trailing: (0, t.jsx)(ed.A, { displayProfile: g, themeType: ee.d.MODAL_V2, onClose: x }),
                        onClose: x,
                        allowEditing: b,
                    }),
                    F === eq.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(eI.A.Overlay, {
                            className: tt.profileOverlay,
                            children: (0, t.jsx)(ef.A, {
                                user: n,
                                applicationId: B,
                                guildId: g?.guildId ?? void 0,
                                channelId: d,
                                className: tt.profileBanner,
                            }),
                        }),
                    J.map((e) => {
                        let { applicationId: l } = e;
                        return (0, t.jsx)(
                            eI.A.Overlay,
                            {
                                className: tt.profileOverlay,
                                children: (0, t.jsx)(ef.A, {
                                    user: n,
                                    guildId: g?.guildId ?? void 0,
                                    channelId: d,
                                    isGameRelationship: !0,
                                    applicationId: l,
                                    className: tt.profileBanner,
                                }),
                            },
                            l,
                        );
                    }),
                    n.isProvisional &&
                        (0, t.jsx)(eI.A.Overlay, {
                            className: tt.profileOverlay,
                            children: (0, t.jsx)(ln.A, {
                                heading: eL.intl.string(eL.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(c.E, { size: "xs", color: "currentColor" }),
                                className: tt.profileBanner,
                                children: (0, t.jsx)(O.T, { userId: n.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(ej.A, { user: n, className: tt.profileBanner }),
                    g?.private &&
                        (0, t.jsx)(eI.A.Overlay, {
                            className: tt.profileOverlay,
                            children: (0, t.jsx)(ev.A, { username: m }),
                        }),
                    (0, t.jsx)("div", {
                        className: tt.profileButtons,
                        children: (0, t.jsx)(e5, {
                            user: n,
                            currentUser: l,
                            guildId: r,
                            originGuildId: o,
                            channelId: d,
                            displayProfile: g,
                            relationshipType: F,
                            onClose: x,
                        }),
                    }),
                    N && (0, t.jsx)(eg.A, { isPremiumUser: (0, M.ki)(l), onInteraction: x }),
                    !V && (0, t.jsx)(ec.E, { userBio: g?.bio, setLineClamp: !1 }),
                    $.length > 0 &&
                        (0, t.jsx)(ln.A, {
                            heading: eL.intl.string(eL.t["Uv/eTx"]),
                            children: (0, t.jsx)(ep.A, { applicationIds: $ }),
                        }),
                    (0, t.jsx)(ln.A, {
                        heading: eL.intl.string(eL.t.a6XYD9),
                        children: (0, t.jsx)(eh.A, { userId: n.id, guildId: g?.guildId, tooltipDelay: eK.In }),
                    }),
                    g?.guildId != null &&
                        (0, t.jsx)(eC.A, {
                            userId: n.id,
                            guildId: g.guildId,
                            className: tt.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "currentColor",
                        }),
                    (Q.length > 0 || Z.length > 0) &&
                        (0, t.jsx)(ln.A, {
                            heading: eL.intl.string(eL.t["3fe7U5"]),
                            scrollTargetId: eK.bk.CONNECTIONS,
                            children: (0, t.jsx)(nc, {
                                applicationIdentities: Z,
                                connections: Q,
                                userId: n.id,
                                className: tt.profileAppConnections,
                            }),
                        }),
                    en.length > 0 &&
                        (0, t.jsx)(ln.A, {
                            heading: eL.intl.string(eL.t.PHjkRE),
                            scrollTargetId: eK.bk.APPS,
                            children: (0, t.jsx)(ew, {
                                applicationRoleConnections: en,
                                onClose: x,
                                className: tt.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(lt, { userId: n.id }),
                ],
            }),
            (0, t.jsx)(ts, { displayProfile: g, profileEffectOverride: I, isHovering: E }),
        ],
    });
}
function td(e) {
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
function tu(e) {
    let {
            user: n,
            currentUser: l,
            guildId: r,
            originGuildId: o,
            channelId: u,
            messageId: c,
            roleId: h,
            sessionId: I,
            initialTabSection: P,
            initialScrollTarget: R,
            transitionState: k,
            customStatusPrompt: S,
            openedAt: O,
            onClose: D,
            sourceAnalyticsLocations: M = [],
            themeContainerClassName: B,
        } = e,
        V = n.id === l.id,
        {
            guildId: z,
            pendingGuildId: W,
            isLoading: H,
            selectUserProfile: K,
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
        q = i.useMemo(() => (null != z ? { [z]: [n.id] } : {}), [z, n.id]);
    (0, A.Eq)(q, "UserProfileModalV2");
    let Y = (0, U.X)("UserProfileModalV2"),
        X = V && Y,
        {
            pendingThemeColors: $,
            avatarDecorationOverride: en,
            avatarOverride: er,
            bannerOverride: eo,
            profileEffectOverride: ed,
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
                            : (0, J.lw)({ userValue: n.avatarDecoration, pendingValue: i, guildId: l }),
                    avatarOverride: (0, Z.V7)({ userId: n.id, image: r, size: el }),
                    bannerOverride: a,
                    profileEffectOverride: s,
                };
            }, [n, l, t]);
        })({ user: n, allowEditingInModal: X, guildId: z }),
        {
            isExpanded: eu,
            isAnimating: ec,
            transition: eg,
            canShowExpand: em,
            handleExpand: ep,
            handleCollapse: ef,
            refs: { expandIconButtonRef: ex, expandTabButtonRef: eh, collapseButtonRef: ev },
        } = (function () {
            let [e, n] = i.useState(() => window.innerWidth > 928),
                [l, t] = i.useState(!1),
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: ti },
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
        ej = X && em,
        { defaultWishlistId: eb } = (0, s.cf)([w.A], () => ({ defaultWishlistId: w.A.getFirstWishlistId(n.id) }));
    (0, T.fw)({ wishlistId: eb, userId: n.id });
    let eC = (0, es.fC)(),
        eN = H || null != eC.interactionType,
        ey = (function (e) {
            let n,
                l,
                t,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, l4.A)(i),
                d = o?.length,
                u =
                    ((n = (0, s.bG)([nk.default], () => nk.default.getCurrentUser())),
                    (l = (0, s.bG)([w.A], () => w.A.getUserProfile(i.id))),
                    (t =
                        l?.bio === "" &&
                        l?.pronouns === "" &&
                        l?.banner === void 0 &&
                        l?.accentColor === void 0 &&
                        l?.banner === void 0 &&
                        i.flags === i.publicFlags &&
                        (l?.badges == null || l?.badges?.length === 0)),
                    n?.id !== i.id && !t),
                c = (0, te.A)(i.id),
                g = (0, l6.A)(i.id),
                m = [],
                p = i.id === r?.id,
                f = w.A.getFirstWishlistId(i.id),
                x = null != f,
                h = x ? w.A.getWishlistSettings(i.id, f) : null,
                A = (x ? l3.A.getWishlistItems(f) : []).length > 0,
                v = c.length > 0;
            (p || v) && m.push({ text: eL.intl.string(eL.t.laViwx), section: eK.RP.WIDGETS }),
                m.push({ text: eL.intl.string(eL.t.chq59f), section: eK.RP.ACTIVITY });
            let j = !1 === i.nsfwAllowed,
                I = _.A.isFriend(i.id),
                b = h?.visibility === l2.a.PUBLIC;
            return (
                (p || (!p && A && b && g && (!j || (j && I)))) &&
                    m.push({ text: eL.intl.string(eL.t["7lZ31J"]), section: eK.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (m.push({ text: (0, tn.A)(a), section: eK.RP.MUTUAL_FRIENDS }),
                    m.push({ text: (0, tl.A)(d), section: eK.RP.MUTUAL_GUILDS })),
                m
            );
        })({ user: n, currentUser: l }),
        { analyticsLocations: eE } = (0, j.Ay)([...M, v.A.USER_PROFILE_MODAL_V2]),
        eP = (0, G.pb)({
            layout: "MODAL_V2",
            userId: n.id,
            sourceSessionId: I,
            guildId: z,
            channelId: u,
            messageId: c,
            roleId: h,
        }),
        eR = (0, F.Ay)(n.id, z),
        ek = (0, C.A)(eR?.profileFrame?.skuId, "UserProfileModalV2"),
        eS = (0, y.A)(eR?.profileFrame?.skuId);
    (0, b.A)({ skuId: eR?.profileFrame?.skuId, openedAt: O, context: eP, analyticsLocations: eE });
    let eO = L.Ay.useName(eR?.guildId, u, n),
        eT = (0, E.GV)(),
        e_ = eL.intl.format(eL.t.KRe1Fk, { name: eO });
    return (0, t.jsx)(j.f5, {
        value: eE,
        children: (0, t.jsx)(G.of, {
            value: eP,
            openedAt: O,
            fetchStartedAt: eR?.fetchStartedAt,
            fetchEndedAt: eR?.fetchEndedAt,
            isLoaded: eR?.isLoaded,
            children: (0, t.jsx)(es.Hl, {
                value: eC,
                children: (0, t.jsx)(ea.N, {
                    value: R,
                    children: (0, t.jsxs)(g.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: tt.root,
                        transitionState: k,
                        "aria-labelledby": eT,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(ld, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(tt.layoutContainer, eS, {
                                        [tt.editingPanelEnabled]: X,
                                        [tt.editingPanelExpanded]: X && eu,
                                        [tt.isAnimating]: ec,
                                        [tt.hasPrivateBanner]: eR?.private === !0,
                                    }),
                                    children: [
                                        (0, t.jsxs)(td, {
                                            user: n,
                                            displayProfile: eR,
                                            pendingThemeColors: $,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: tt.modalHeaderButtons,
                                                    children: [
                                                        (0, t.jsx)(e6, { isCurrentUser: V, onClose: D }),
                                                        (0, t.jsx)(m.A, {
                                                            children: (0, t.jsx)(p.H, { id: eT, children: e_ }),
                                                        }),
                                                        X &&
                                                            (!eu || ec) &&
                                                            (0, t.jsx)(n2, {
                                                                buttonRef: ex,
                                                                onClick: ep,
                                                                className: tt.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                ej &&
                                                    (0, t.jsx)(n5, {
                                                        innerRef: eh,
                                                        onClick: ep,
                                                        className: tt.editingPanelExpandButtonDefault,
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(p.F, {
                                            children: [
                                                X &&
                                                    eg((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(n6, {
                                                                  className: a()(tt.editingPanel, {
                                                                      [tt.isExpanded]: eu,
                                                                  }),
                                                                  user: n,
                                                                  selectedGuildId: W,
                                                                  onSelectGuildId: K,
                                                                  onClose: ef,
                                                                  collapseButtonRef: ev,
                                                                  isLoading: H,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(eI.A, {
                                                    className: a()(B, tt.profileContentContainer),
                                                    user: n,
                                                    displayProfile: eR,
                                                    themeType: ee.d.MODAL_V2,
                                                    pendingThemeColors: $,
                                                    isPrivate: eR?.private === !0,
                                                    children: [
                                                        (0, t.jsx)(ta, { displayProfile: eR, pendingBanner: eo }),
                                                        eR?.private === !0 && (0, t.jsx)(eA.A, {}),
                                                        (0, t.jsx)(la, { isVisible: eN, showLoadingSpinner: H }),
                                                        (0, t.jsx)(lb, { className: tt.toast }),
                                                        (0, t.jsxs)("div", {
                                                            className: tt.profileCard,
                                                            children: [
                                                                (0, t.jsx)(to, {
                                                                    user: n,
                                                                    currentUser: l,
                                                                    guildId: z,
                                                                    channelId: u,
                                                                    displayProfile: eR,
                                                                    nickname: eO,
                                                                    originGuildId: o,
                                                                    hasEntered: k === f.ip.ENTERED,
                                                                    customStatusPrompt: S,
                                                                    onClose: D,
                                                                    avatarDecorationOverride: en,
                                                                    avatarOverride: er,
                                                                    bannerOverride: eo,
                                                                    profileEffectOverride: ed,
                                                                    allowEditing: X,
                                                                    isLoading: H,
                                                                }),
                                                                null != ek &&
                                                                    (0, t.jsx)(N.A, { frame: ek, layout: "MODAL_V2" }),
                                                            ],
                                                        }),
                                                        (0, t.jsx)(lu.A, {
                                                            user: n,
                                                            currentUser: l,
                                                            displayProfile: eR,
                                                            guildId: z,
                                                            channelId: u,
                                                            items: ey,
                                                            initialSection: P,
                                                            onClose: D,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, t.jsx)(n4.A, { userId: n.id, guildId: z, className: tt.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
