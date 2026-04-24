l.d(n, { A: () => lQ });
var t = l(627968),
    i = l(64700),
    a = l(503698),
    r = l.n(a),
    s = l(17928),
    o = l(778712),
    d = l(866323),
    c = l(364522),
    u = l(695366),
    g = l(935462),
    m = l(140735),
    p = l(707554),
    f = l(231723),
    x = l(241524),
    A = l(770178),
    h = l(80682),
    v = l(793574),
    j = l(688810),
    I = l(480335),
    b = l(361628),
    C = l(744808),
    N = l(915089),
    y = l(713517),
    E = l(645507),
    P = l(922590),
    R = l(821269),
    O = l(93246),
    T = l(594832),
    S = l(994500),
    _ = l(351906),
    D = l(562153),
    k = l(474090),
    L = l(183555),
    M = l(841595),
    G = l(591179),
    w = l(999291),
    U = l(101928),
    F = l(837529),
    V = l(346713),
    B = l(573648),
    z = l(941314),
    W = l(429913),
    H = l(321078),
    Y = l(403362),
    K = l(484509),
    X = l(920601),
    q = l(919395),
    $ = l(101058),
    J = l(836602),
    Z = l(996988),
    Q = l(985253);
let ee = (0, o.FT)(Q.T[Z.d.MODAL_V2].avatarSize),
    en = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        profileEffectOverride: void 0,
    };
var el = l(576622);
async function et(e, n) {
    let l = new Image();
    await new Promise((n, t) => {
        (l.onload = () => n()), (l.onerror = () => t(Error(`Failed to load image: ${e}`))), (l.src = e);
    });
    let t = null != n ? Math.min(1, n / Math.max(l.naturalWidth, l.naturalHeight)) : 1,
        i = document.createElement("canvas");
    (i.width = Math.round(l.naturalWidth * t)), (i.height = Math.round(l.naturalHeight * t));
    let a = i.getContext("2d");
    if (null == a) throw Error("Canvas 2d context unavailable");
    return a.drawImage(l, 0, 0, i.width, i.height), i.toDataURL("image/png");
}
var ei = l(716804),
    ea = l(679492),
    er = l(718019),
    es = l(694720),
    eo = l(915614),
    ed = l(308244),
    ec = l(744753),
    eu = l(559506),
    eg = l(361311),
    em = l(886891),
    ep = l(439053),
    ef = l(743987),
    ex = l(312381),
    eA = l(501193),
    eh = l(383448),
    ev = l(946356),
    ej = l(878555),
    eI = l(983495),
    eb = l(280645),
    eC = l(109112),
    eN = l(939249),
    ey = l(834730),
    eE = l(730134),
    eP = l(169869),
    eR = l(837057),
    eO = l(310419),
    eT = l(773669),
    eS = l(889227),
    e_ = l(967198),
    eD = l(488995),
    ek = l(985018),
    eL = l(985176);
function eM(e) {
    let { applicationRoleConnection: n, locale: l, onApplicationClicked: i, selectedGuildId: a } = e,
        r = (0, eP.VW)(n, l);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: eL.k_,
                children:
                    null != n.application.bot
                        ? (0, t.jsx)(eE.A, { user: new eS.A(n.application.bot), size: o._3.SIZE_16 })
                        : (0, t.jsx)(eC._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: eL.Hd,
                children: [
                    (0, t.jsxs)(eN.D, {
                        className: eL.OB,
                        onClick: () => {
                            i?.(),
                                (0, eR.transitionToGlobalDiscovery)({
                                    tab: eD.GlobalDiscoveryTab.APPS,
                                    applicationId: n.application.id,
                                    newSessionState: {
                                        entrypoint: { name: eO.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: a,
                                    },
                                });
                        },
                        children: [
                            null != n.platform_name
                                ? (0, t.jsx)(ey.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_name,
                                  })
                                : null,
                            null != n.platform_username
                                ? (0, t.jsx)(ey.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_username,
                                  })
                                : null,
                            (0, t.jsx)(ey.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: eL.nk,
                                children: ek.intl.format(ek.t.zIT9YA, { applicationHook: () => n.application.name }),
                            }),
                        ],
                    }),
                    null != r && r.length > 0 ? (0, t.jsx)("div", { className: eL.yu, children: r }) : null,
                ],
            }),
        ],
    });
}
function eG(e) {
    let { applicationRoleConnections: n, className: l, onClose: i } = e,
        { trackUserProfileAction: a } = (0, L.NJ)(),
        o = (0, s.bG)([eT.default], () => eT.default.locale),
        d = (0, s.bG)([e_.A], () => e_.A.getGuildId());
    return 0 === n.length
        ? null
        : (0, t.jsx)("ul", {
              className: r()(eL.kL, l),
              children: n.map((e, n) =>
                  (0, t.jsx)(
                      "li",
                      {
                          className: eL.FI,
                          children: (0, t.jsx)(eM, {
                              applicationRoleConnection: e,
                              locale: o,
                              onApplicationClicked: () => {
                                  a({ action: "PRESS_APP_CONNECTION" }), i();
                              },
                              selectedGuildId: d ?? void 0,
                          }),
                      },
                      `${n}-${e.application.id}`,
                  ),
              ),
          });
}
var ew = l(982168),
    eU = l(722868),
    eF = l(822775),
    eV = l(597770),
    eB = l(751188),
    ez = l(746174),
    eW = l(993401),
    eH = l(518477),
    eY = l(652215);
function eK(e) {
    let { user: n, onClose: l } = e,
        { analyticsLocations: a } = (0, j.Ay)(),
        r = (0, ez.j)("UserProfileGiftButton"),
        { openGiftModal: s } = (0, eB.$)({
            giftRecipient: n,
            analyticsLocations: a,
            analyticsObject: {
                page: eY.liQ.USER_PROFILE,
                section: eY.JJy.USER_PROFILE,
                object: eY.ZSU.BUTTON_ICON,
                objectType: eY.AnalyticsObjectTypes.GIFT,
            },
            location: "user-profile-gift-button",
        }),
        o = i.useCallback(() => {
            s(), l?.();
        }, [s, l]);
    return r
        ? (0, t.jsx)(eW.q3, { action: eH.pt.GIFT, icon: eV.o, tooltipText: ek.intl.string(ek.t.PEjaCx), onClick: o })
        : null;
}
var eX = l(982985),
    eq = l(700174),
    e$ = l(34188),
    eJ = l(693477),
    eZ = l(207803),
    eQ = l(485745);
function e0(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        l = (0, eQ.A)(),
        t = i.useRef(e);
    return (
        i.useLayoutEffect(() => {
            t.current = e;
        }),
        i.useCallback(
            function () {
                for (var e = arguments.length, i = Array(e), a = 0; a < e; a++) i[a] = arguments[a];
                n && l ? (0, eZ.VQ)() : t.current(...i);
            },
            [n, l],
        )
    );
}
function e1(e) {
    let { onClose: n, ...l } = e,
        { analyticsLocations: i, newestAnalyticsLocation: a } = (0, j.Ay)(),
        r = e0(() => {
            (0, eJ.Cz)({ analyticsLocations: i, analyticsSource: a }), n?.();
        });
    return (0, t.jsx)(eW.q3, {
        action: "VISIT_SHOP",
        icon: e$.U,
        tooltipText: ek.intl.string(ek.t.b2d0N0),
        onClick: r,
        ...l,
    });
}
var e8 = l(573355),
    e2 = l(102951);
function e9(e) {
    let {
            user: n,
            currentUser: l,
            guildId: i,
            originGuildId: a,
            channelId: r,
            displayProfile: s,
            relationshipType: o,
            onClose: d,
        } = e,
        c = (0, G.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: u } = (0, j.Ay)(),
        g = (0, eU.A)({ user: n, guildId: a, channelId: r, displayProfile: s, onClose: d }),
        {
            gameFriends: m,
            hasOutgoingPendingGameFriends: p,
            hasIncomingPendingGameFriends: f,
        } = (0, e2.J)({ userId: n.id }),
        x = m.length > 0 || p || f;
    return o === eY.eA$.BLOCKED
        ? null
        : n.id === l.id
          ? c
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(eX.e, { userId: n.id, variant: "primary", disabled: !0 }),
                        (0, t.jsx)(e1, { onClose: d }),
                        (0, t.jsx)(eq.Zt, { user: n, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(eF.A, { user: n, guildId: i, onClose: d }),
                        (0, t.jsx)(e1, { onClose: d }),
                        (0, t.jsx)(eq.Zt, { user: n, guildId: i, viewProfileItem: g }),
                    ],
                })
          : n.bot
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)(eX.e, { userId: n.id, onClose: ew.A.popAll, autoFocus: !0 }),
                      (0, t.jsx)(eq.Zt, { user: n, guildId: i, viewProfileItem: g }),
                  ],
              })
            : o === eY.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(eX.e, { userId: n.id, onClose: ew.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(eK, { user: n }),
                        (0, t.jsx)(eq.Zt, { user: n, guildId: i }),
                    ],
                })
              : o === eY.eA$.FRIEND || o === eY.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(eX.e, { userId: n.id, onClose: ew.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(e8.Ef, { user: n, relationshipType: o, analyticsLocation: u }),
                          (0, t.jsx)(eK, { user: n }),
                          (0, t.jsx)(eq.Zt, { user: n, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === eY.eA$.NONE && x
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(eX.e, { userId: n.id, onClose: ew.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(e8.ES, {
                                user: n,
                                analyticsLocation: u,
                                gameFriends: m,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: f,
                                hasOutgoingPendingGameFriends: p,
                            }),
                            (0, t.jsx)(eK, { user: n }),
                            (0, t.jsx)(eq.Zt, { user: n, guildId: i, viewProfileItem: g }),
                        ],
                    })
                  : (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(e8.cO, {
                                variant: "primary",
                                userId: n.id,
                                analyticsLocation: u,
                                autoFocus: !0,
                            }),
                            (0, t.jsx)(eX.l, { userId: n.id, onClose: ew.A.popAll, variant: "secondary" }),
                            (0, t.jsx)(eK, { user: n }),
                            (0, t.jsx)(eq.Zt, { user: n, guildId: i, viewProfileItem: g }),
                        ],
                    });
}
var e5 = l(408278),
    e7 = l(789645);
function e3(e) {
    let { isCurrentUser: n, onClose: l } = e,
        i = e0(l, n);
    return (0, t.jsx)(e5.K, {
        "aria-label": ek.intl.string(ek.t.cpT0Cq),
        icon: e7.P,
        onClick: i,
        variant: "secondary",
        size: "sm",
    });
}
var e6 = l(990078),
    e4 = l(349288),
    ne = l(509434),
    nn = l(58149),
    nl = l(681819),
    nt = l(370480),
    ni = l(486020),
    na = l(76843),
    nr = l(783419);
function ns(e) {
    let { account: n, locale: l, userId: i } = e,
        a = n.metadata ?? {},
        r = (0, nt.An)(a[nr.pK.CREATED_AT], l),
        s = B.A.get((0, nl.ML)(n.type));
    return (0, t.jsx)(nd, {
        renderAccountName: () => {
            let e = s?.getPlatformUserUrl?.(n);
            return null == e
                ? (0, t.jsx)(e6.m, {
                      overflowOnly: !0,
                      text: n.name,
                      children: (0, t.jsx)(ey.E, { variant: "text-sm/normal", className: eL.GW, children: n.name }),
                  })
                : (0, t.jsx)(e4.Anchor, {
                      href: e,
                      className: eL.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${n.name}, ${ek.intl.string(ek.t.q5jLJB)}`
                              : `${n.name}, ${ek.intl.string(ek.t.q5jLJB)}`,
                      onClick: (l) => {
                          (0, nn.zV)(eY.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: n.type, other_user_id: i }),
                              (0, na.h)({ href: e, trusted: s?.type !== eY.fg2.DOMAIN }, l);
                      },
                      children: (0, t.jsxs)("div", {
                          className: eL.vi,
                          children: [
                              (0, t.jsx)(e6.m, {
                                  overflowOnly: !0,
                                  text: n.name,
                                  children: (0, t.jsx)(ey.E, {
                                      variant: "text-sm/normal",
                                      className: eL.GW,
                                      children: n.name,
                                  }),
                              }),
                              (0, t.jsx)(ne.I, { size: "xs", color: "currentColor" }),
                          ],
                      }),
                  });
        },
        renderMetadata: () =>
            n.type === eY.fg2.REDDIT
                ? (0, eP.xE)(a)
                : n.type === eY.fg2.STEAM
                  ? (0, eP.dy)(a)
                  : n.type === eY.fg2.BLUESKY || n.type === eY.fg2.MASTODON || n.type === eY.fg2.TWITTER
                    ? (0, eP.ED)(a)
                    : n.type === eY.fg2.PAYPAL
                      ? (0, eP.gZ)(a)
                      : n.type === eY.fg2.EBAY
                        ? (0, eP.ub)(a)
                        : n.type === eY.fg2.TIKTOK
                          ? (0, eP.HU)(a)
                          : null,
        platformIcon: s?.icon.lightPNG,
        platformName: s?.name,
        createdAtDate: r,
    });
}
function no(e) {
    let { identityWithApplication: n } = e,
        { identity: l, application: i } = n;
    if (null == l.profile || null == l.profile.username || null == i) return null;
    let a = ni.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(nd, {
        renderAccountName: () =>
            (0, t.jsx)(e6.m, {
                overflowOnly: !0,
                text: l.profile.username,
                children: (0, t.jsx)(ey.E, {
                    variant: "text-sm/normal",
                    className: eL.GW,
                    children: l.profile.username,
                }),
            }),
        renderMetadata: () => null,
        platformIcon: a,
        platformName: i.name,
        createdAtDate: void 0,
        applyIconBorderRadius: !0,
    });
}
function nd(e) {
    let {
        renderAccountName: n,
        renderMetadata: l,
        platformName: i,
        platformIcon: a,
        createdAtDate: s,
        applyIconBorderRadius: o = !1,
    } = e;
    return (0, t.jsxs)("li", {
        className: eL.FI,
        children: [
            (0, t.jsx)(e6.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, t.jsx)("div", {
                    className: eL.k_,
                    children: (0, t.jsx)("img", {
                        alt: ek.intl.formatToPlainString(ek.t.rtm15P, { name: i }),
                        className: r()(eL.tV, o ? eL.sN : null),
                        src: a,
                    }),
                }),
            }),
            (0, t.jsxs)("div", {
                className: eL.Hd,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            n(),
                            null != s &&
                                (0, t.jsx)(ey.E, {
                                    variant: "text-xs/normal",
                                    children: ek.intl.format(ek.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: eL.yu, children: l() }),
                ],
            }),
        ],
    });
}
function nc(e) {
    let { connections: n, applicationIdentities: l, userId: i, className: a } = e,
        o = (0, s.bG)([eT.default], () => eT.default.locale);
    return 0 === n.length && 0 === l.length
        ? null
        : (0, t.jsxs)("ul", {
              className: r()(eL.kL, a),
              children: [
                  n.map((e) => (0, t.jsx)(ns, { account: e, userId: i, locale: o }, `${e.type}:${e.id}`)),
                  l?.map((e) => (0, t.jsx)(no, { identityWithApplication: e }, e.identity.application_id)),
              ],
          });
}
var nu = l(200219),
    ng = l(661531),
    nm = l(320448),
    np = l(534514),
    nf = l(927578),
    nx = l(487233),
    nA = l(230635),
    nh = l(317097),
    nv = l(602853),
    nj = l(922016),
    nI = l(508274),
    nb = l(654107),
    nC = l(84540),
    nN = l(930349);
function ny(e) {
    let { user: n, disabled: l = !1 } = e,
        a = i.useRef(null),
        r = (0, nv.r)(ng.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, nb.rh)(n.getAvatarURL(null, 80), r, !1),
        { pendingAccentColor: d, savedAccentColor: c } = (0, s.cf)([J.A, M.A], () => ({
            pendingAccentColor: J.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: M.A.getUserProfile(n.id)?.accentColor,
        })),
        u = d ?? c ?? (0, nh.LX)(o[0] ?? r),
        g = i.useCallback((e) => (0, nC.p)({ accentColor: e }), []);
    return (0, t.jsx)(nj.Y, {
        targetElementRef: a,
        renderPopout: (e) => (0, t.jsx)(nI.VN, { ...e, value: u, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(nN.NW, {
                ...e,
                variant: "bar",
                buttonRef: a,
                disabled: l,
                accessibleLabel: ek.intl.string(ek.t["/X3fkf"]),
                children: (0, t.jsx)("div", {
                    style: { width: "100%", height: "100%", backgroundColor: (0, nh.Hl)(u) },
                }),
            }),
    });
}
var nE = l(450373),
    nP = l(252732),
    nR = l(287809),
    nO = l(339984),
    nT = l(111242);
function nS(e) {
    let { backgroundColor: n } = e;
    return (0, t.jsx)("div", { className: nT.o, style: { backgroundColor: n } });
}
function n_(e) {
    let { src: n } = e;
    return (0, t.jsx)("img", { src: n, alt: "", className: nT._ });
}
function nD(e) {
    let { userId: n, guildId: l, disabled: i } = e,
        { newestAnalyticsLocation: a } = (0, j.Ay)(),
        r = null != l,
        o = (0, w.Ay)(n, l),
        d = (0, s.bG)([J.A], () => J.A.getPendingChanges(l ?? void 0).pendingBanner),
        c = (0, s.bG)([nR.default], () => nR.default.getCurrentUser()?.banner != null),
        u = (0, s.bG)([M.A], () =>
            null != l ? M.A.getGuildMemberProfile(n, l)?.banner : M.A.getUserProfile(n)?.banner,
        ),
        g = null === d,
        m = void 0 !== d,
        p = r && (o?.isUsingGuildMemberBanner() ?? !1),
        f = g && r ? c : (0, q.Ac)(d, o?.banner),
        x = r ? p : o?.banner != null,
        A = m ? null != d : x,
        h = o?.getPreviewBanner(g && r && !p ? void 0 : d, !1, 296) ?? void 0,
        v = (0, nv.r)(ng.A.unsafe_rawColors.PRIMARY_800).hex(),
        I = o?.primaryColor ?? (0, nh.LX)(v),
        { hex: b } = (0, nE.A)(I),
        C = () =>
            (0, nP.XD)({
                uploadType: nO.HL.BANNER,
                analyticsSource: a,
                guildId: l ?? void 0,
                stackingBehavior: "stack",
            }),
        N = null != h ? (0, t.jsx)(n_, { src: h }) : (0, t.jsx)(nS, { backgroundColor: b });
    if (!f)
        return (0, t.jsx)(nN.kL, {
            variant: "square",
            onClick: C,
            accessibleLabel: ek.intl.string(ek.t.N0bC3P),
            disabled: i,
            children: N,
        });
    let y = r && c,
        E = A
            ? {
                  onClick: () => (0, nP.rM)(null, u, (e) => (0, nC.p)({ guildId: l ?? void 0, banner: e })),
                  type: y ? "reset" : "remove",
                  accessibleLabel: ek.intl.string(y ? ek.t.jHlJNS : ek.t.tT9n7D),
              }
            : void 0;
    return (0, t.jsx)(nN.NW, {
        variant: "square",
        onClick: C,
        accessibleLabel: ek.intl.string(ek.t.N0bC3P),
        deleteButtonConfig: E,
        disabled: i,
        children: N,
    });
}
var nk = l(473219),
    nL = l(33851),
    nM = l.n(nL),
    nG = l(298387);
function nw(e) {
    let { color: n, suggestedColors: l, disabled: a, ariaLabel: r, onSelect: s } = e,
        o = i.useRef(null),
        d = (0, nh.Hl)(n);
    return (0, t.jsx)(nj.Y, {
        targetElementRef: o,
        renderPopout: (e) => (0, t.jsx)(nI.VN, { ...e, value: n, onChange: s, suggestedColors: l, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: n, ...l } = e;
            return (0, t.jsx)(eN.D, {
                ...l,
                innerRef: o,
                className: nG.Dh,
                onClick: a ? void 0 : n,
                "aria-label": r,
                "aria-disabled": a,
                tabIndex: a ? -1 : 0,
                children: (0, t.jsx)("div", { className: nG.Hy, style: { backgroundColor: d } }),
            });
        },
    });
}
function nU(e) {
    let {
            primaryColor: n,
            secondaryColor: l,
            onSelectPrimaryColor: i,
            onSelectSecondaryColor: a,
            suggestedColors: r,
            disabled: s = !1,
        } = e,
        o = (0, nh.Hl)(n),
        d = (0, nh.Hl)(l),
        c = `linear-gradient(to bottom, ${o}, ${d})`,
        u = ek.intl.formatToPlainString(ek.t.FquTfm, { colorLabel: o }),
        g = ek.intl.formatToPlainString(ek.t.xOnm4z, { colorLabel: d });
    return (0, t.jsx)(nN.Yt, {
        variant: "square",
        disabled: s,
        children: (0, t.jsxs)("div", {
            className: nG.D7,
            style: { background: c },
            children: [
                (0, t.jsx)(nw, { color: n, suggestedColors: r, ariaLabel: u, onSelect: i, disabled: s }),
                (0, t.jsx)(nw, { color: l, suggestedColors: r, ariaLabel: g, onSelect: a, disabled: s }),
            ],
        }),
    });
}
function nF(e) {
    let { user: n, guildId: l, disabled: a = !1 } = e,
        r = (0, w.Ay)(n.id, l),
        { pendingThemeColors: o, pendingAvatar: d } = (0, s.cf)([J.A], () => {
            let e = J.A.getPendingChanges(l ?? void 0);
            return { pendingThemeColors: e.pendingThemeColors, pendingAvatar: e.pendingAvatar };
        }),
        c = (0, $.V7)({ userId: n.id, image: d }),
        { primaryColor: u, secondaryColor: g } = (0, U.A)({
            user: n,
            displayProfile: r,
            pendingThemeColors: o,
            pendingAvatarSrc: c ?? void 0,
            isPreview: !0,
        }),
        m = (0, nv.r)(ng.A.unsafe_rawColors.PRIMARY_530).hex(),
        p = null != c ? c : n.getAvatarURL(l ?? void 0, 80),
        f = (0, nb.rh)(p, m, !1),
        x = i.useCallback(
            (e) => {
                let n = nM()(e, r?.themeColors);
                (0, nC.p)({ guildId: l ?? void 0, themeColors: n ? void 0 : e });
            },
            [r?.themeColors, l],
        );
    return null == u || null == g
        ? null
        : (0, t.jsx)(nU, {
              primaryColor: u,
              secondaryColor: g,
              onSelectPrimaryColor: (e) => {
                  e !== u && x([e, g]);
              },
              onSelectSecondaryColor: (e) => {
                  e !== g && x([u, e]);
              },
              suggestedColors: f,
              disabled: a,
          });
}
var nV = l(315629),
    nB = l(821609),
    nz = l(403581),
    nW = l(835071),
    nH = l(235684);
function nY() {
    let e = () => {
        (0, nW.K)({ stackingBehavior: "stack" });
    };
    return (0, t.jsxs)(nV.h, {
        color: "nitro-pink",
        className: nH.k,
        children: [
            (0, t.jsx)(ey.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: ek.intl.format(ek.t.TmfgI2, { onClick: e }),
            }),
            (0, t.jsx)(nB.$, {
                variant: "expressive",
                size: "md",
                icon: nz.t,
                text: ek.intl.string(ek.t.pj0XBN),
                onClick: e,
                fullWidth: !0,
            }),
        ],
    });
}
l(667532);
var nK = l(111159),
    nX = l(783878),
    nq = l(548118),
    n$ = l(71393),
    nJ = l(711014),
    nZ = l(308696);
let nQ = "MAIN_PROFILE";
function n0(e) {
    let { selectedGuildId: n, onChange: l, loading: a } = e,
        r = (0, s.bG)([nJ.Ay], () => nJ.Ay.getFlattenedGuildIds()),
        o = (0, s.bG)([n$.A], () => n$.A.getGuilds()),
        d = i.useMemo(() => {
            let e = r
                .map((e) => {
                    let n = o[e];
                    return null == n
                        ? null
                        : {
                              id: n.id,
                              label: n.name,
                              value: n.id,
                              leading: (0, t.jsx)(nq.Ay, {
                                  className: nZ.$,
                                  guild: n,
                                  size: nq.Ay.Sizes.SMALLER,
                                  active: !0,
                              }),
                          };
                })
                .filter(Y.Vq);
            return (
                e.unshift({
                    id: nQ,
                    label: ek.intl.string(ek.t["2p07FR"]),
                    value: nQ,
                    leading: (0, t.jsx)(nK.p, { size: "sm", color: ng.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                e
            );
        }, [r, o]),
        c = i.useCallback(
            (e) => {
                l(e === nQ ? null : e);
            },
            [l],
        );
    return (0, t.jsx)(nX.Z, {
        label: ek.intl.string(ek.t.rki38K),
        hideLabel: !0,
        selectionMode: "single",
        onSelectionChange: c,
        value: n ?? nQ,
        options: d,
        loading: a,
    });
}
var n1 = l(809467);
let n8 = "profile-modal-editing-panel",
    n2 = "profile-modal-editing-panel-heading";
function n9(e) {
    let { onClick: n, className: l, innerRef: i } = e;
    return (0, t.jsx)(eN.D, {
        innerRef: i,
        "aria-label": ek.intl.string(ek.t.N8XQDE),
        "aria-expanded": !1,
        "aria-controls": n8,
        className: r()(n1.eg, l),
        onClick: n,
        focusProps: { offset: { right: 6 } },
        children: (0, t.jsx)(nu.N, { size: "sm", color: ng.A.colors.ICON_STRONG }),
    });
}
function n5(e) {
    let { onClick: n, className: l, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: l,
        children: (0, t.jsx)(e5.K, {
            buttonRef: i,
            "aria-label": ek.intl.string(ek.t.N8XQDE),
            "aria-expanded": !1,
            "aria-controls": n8,
            icon: nu.N,
            onClick: n,
            variant: "secondary",
            size: "sm",
        }),
    });
}
function n7(e) {
    let { onClick: n, innerRef: l } = e;
    return (0, t.jsxs)(eN.D, {
        innerRef: l,
        className: n1.cS,
        "aria-label": ek.intl.string(ek.t.X6NklS),
        onClick: n,
        "aria-controls": n8,
        "aria-expanded": !0,
        children: [
            (0, t.jsx)(nm._, { size: "md", color: "currentColor" }),
            (0, t.jsx)(nm._, { size: "md", color: "currentColor" }),
        ],
    });
}
function n3(e) {
    let {
            user: n,
            selectedGuildId: l,
            onSelectGuildId: i,
            isLoading: a = !1,
            onClose: s,
            className: o,
            collapseButtonRef: d,
        } = e,
        u = e0(i),
        g = null != l,
        f = nf.Ay.canUsePremiumProfileCustomization(n);
    return (0, t.jsxs)("aside", {
        id: n8,
        "aria-labelledby": n2,
        className: r()(n1.nd, o),
        "aria-busy": a,
        children: [
            (0, t.jsx)(m.A, { children: (0, t.jsx)(p.H, { id: n2, children: ek.intl.string(ek.t["L+ch00"]) }) }),
            (0, t.jsxs)("div", {
                className: n1.wx,
                children: [
                    (0, t.jsx)(n7, { innerRef: d, onClick: s }),
                    (0, t.jsx)(n0, { selectedGuildId: l ?? null, onChange: u, loading: a }),
                ],
            }),
            (0, t.jsx)(p.F, {
                children: (0, t.jsxs)(c.Ip, {
                    className: n1.XG,
                    fade: !0,
                    children: [
                        (0, t.jsxs)("div", {
                            className: n1.Os,
                            children: [
                                (0, t.jsx)(np.D, {
                                    variant: "text-sm/medium",
                                    className: n1.AM,
                                    children: ek.intl.string(ek.t.x5CoXR),
                                }),
                                (0, t.jsx)(nk.A, { user: n, guildId: l, disabled: a || (g && !f) }),
                            ],
                        }),
                        (0, t.jsxs)("div", {
                            className: n1.Os,
                            children: [
                                (0, t.jsx)(np.D, {
                                    variant: "text-sm/medium",
                                    className: n1.AM,
                                    children: ek.intl.string(ek.t["50Nwpc"]),
                                }),
                                (0, t.jsx)(nx.A, { user: n, guildId: l, disabled: a || (g && !f) }),
                                (0, t.jsx)(nA.A, { user: n, guildId: l, disabled: a || (g && !f) }),
                            ],
                        }),
                        f &&
                            (0, t.jsxs)("div", {
                                className: n1.Os,
                                children: [
                                    (0, t.jsx)(np.D, {
                                        variant: "text-sm/medium",
                                        className: n1.AM,
                                        children: ek.intl.string(ek.t.Zenogr),
                                    }),
                                    (0, t.jsx)(nF, { user: n, guildId: l, disabled: a }),
                                    (0, t.jsx)(nD, { userId: n.id, guildId: l, disabled: a }),
                                ],
                            }),
                        !f &&
                            (0, t.jsxs)("div", {
                                className: n1.Os,
                                children: [
                                    (0, t.jsx)(np.D, {
                                        variant: "text-sm/medium",
                                        className: n1.AM,
                                        children: ek.intl.string(ek.t["/X3fkf"]),
                                    }),
                                    (0, t.jsx)(ny, { user: n, disabled: a || g }),
                                ],
                            }),
                    ],
                }),
            }),
            !f && (0, t.jsx)(nY, {}),
        ],
    });
}
var n6 = l(982599),
    n4 = l(756634),
    le = l(83013),
    ln = l(77085);
function ll(e) {
    let { userId: n } = e,
        l = (0, ei.g)(),
        { trackUserProfileAction: i } = (0, L.NJ)();
    return (0, t.jsx)(le.A, {
        heading: ek.intl.string(ek.t["mQKv+v"]),
        scrollTargetId: eH.bk.NOTE,
        children: (0, t.jsx)(n4.A, {
            userId: n,
            className: ln.N,
            autoFocus: l === eH.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var lt = l(289873),
    li = l(778599);
function la(e) {
    let { isVisible: n, showLoadingSpinner: l, className: i } = e;
    return (0, t.jsx)("div", {
        className: r()(li.f, n && li.z, i),
        children: l && (0, t.jsx)(lt.y, { type: lt.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
    });
}
var lr = l(568602),
    ls = l(625494);
function lo(e) {
    let { children: n } = e,
        [l, a] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = () => {
                a(!0),
                    setTimeout(() => {
                        a(!1);
                    }, 300);
            };
            return (
                ls._.subscribe(eY.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    ls._.unsubscribe(eY.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, t.jsx)(lr.b, { isShaking: l, intensity: 1.4, children: n })
    );
}
var ld = l(515054),
    lc = l(419354),
    lu = l(933832),
    lg = l(972213),
    lm = l(97483),
    lp = l(765178),
    lf = l(775602),
    lx = l(606758),
    lA = l(707238),
    lh = l(861173);
let lv = {
        [eH.jM.WIDGET_ADDED]: {
            message: ek.intl.string(ek.t.fFP1Uy),
            icon: (0, t.jsx)(lu.A, { size: "sm", color: ng.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_added",
        },
        [eH.jM.WIDGET_REMOVED]: {
            message: ek.intl.string(ek.t.zzsK7h),
            icon: (0, t.jsx)(lu.A, { size: "sm", color: ng.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_removed",
        },
        [eH.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: ek.intl.string(ek.t["84MExs"]),
            icon: (0, t.jsx)(lg.d, { size: "sm", color: ng.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_save_generic_failure",
            type: lm.Ck.FAILURE,
        },
        [eH.jM.SOMETHING_WENT_WRONG]: {
            message: ek.intl.string(ek.t.F8FvUy),
            icon: (0, t.jsx)(lg.d, { size: "sm", color: ng.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_something_went_wrong",
            type: lm.Ck.FAILURE,
        },
    },
    lj = (e) => {
        let { message: n, icon: l, type: i } = e;
        return (0, t.jsxs)("div", {
            className: r()(lh.oR, lA.oR),
            "data-type": i,
            children: [
                (0, t.jsx)("div", { className: lA.RC, children: l }),
                (0, t.jsx)(ey.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
            ],
        });
    },
    lI = (e) => {
        let { className: n } = e,
            l = (0, lx.fu)(),
            a = (0, s.bG)([lf.A], () => lf.A.useReducedMotion),
            [o, c] = i.useState(!1),
            [u, g] = i.useState(null);
        i.useEffect(() => {
            null !== l ? (c(!0), g(lv[l]), lp.O.announce(lv[l].message)) : c(!1);
        }, [l]);
        let m = (0, d.p)(
            o,
            {
                from: { transform: a ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                enter: { transform: "translateY(0)", opacity: 1 },
                leave: { transform: a ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                config: { mass: 1, tension: 200, friction: 18, clamp: !0 },
            },
            "animate-always",
        );
        return (
            i.useEffect(() => () => (0, lx.XA)(null), []),
            i.useEffect(() => {
                if (o) {
                    let e = setTimeout(() => {
                        (0, lx.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [o]),
            (0, t.jsx)(t.Fragment, {
                children: m(
                    (e, l) =>
                        l &&
                        null !== u &&
                        (0, t.jsx)(lc.animated.div, {
                            className: r()(n, lA.Jt),
                            style: e,
                            children: (0, t.jsx)(lj, { ...u }),
                        }),
                ),
            })
        );
    };
l(321073);
var lb = l(97808),
    lC = l(550079),
    lN = l(477782),
    ly = l(22231),
    lE = l(601255),
    lP = l(562819),
    lR = l(696451),
    lO = l(19575),
    lT = l(106106),
    lS = l(338165);
let l_ = lO.Ay.getEnableHardwareAcceleration() ? lb.Js : lb.eu;
function lD(e) {
    let { onMenuClose: n, items: l, ...i } = e;
    return (0, t.jsx)(lC.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": ek.intl.string(ek.t.YAgq3W),
        children: (0, t.jsx)(lN.rX, { children: l }),
    });
}
function lk(e) {
    let { user: n, guildId: l } = e,
        { avatarProps: a, eventHandlers: o } = (0, er.V)(e),
        [d, c] = i.useState(!1),
        u = i.useRef(null),
        g = i.useCallback(() => c(!1), []),
        m = (function (e) {
            let { user: n, guildId: l, onClose: a } = e,
                { newestAnalyticsLocation: r, analyticsLocations: o } = (0, j.Ay)(),
                d = null != l,
                c = (0, s.bG)([lR.Ay], () => (null != l ? lR.Ay.getMember(l, n.id) : null)),
                u = (0, s.bG)([J.A], () => J.A.getPendingChanges(l ?? void 0).pendingAvatar),
                g = d ? c?.avatar : n.avatar,
                m = (0, q.z5)(u, g),
                p = d && null != n.avatar,
                f = nf.Ay.canUsePremiumProfileCustomization(n),
                x = f || null == l,
                A = f || null == l,
                h = (0, s.bG)([n$.A], () => (null != l ? n$.A.getGuild(l) : null)),
                v = (0, q.a4)({ user: n }),
                I = (0, q.a4)({ user: n, guildId: l ?? void 0 }),
                { pendingAvatarDecoration: b } = (0, q.CP)(l ?? void 0),
                C = void 0 !== b,
                N = null != (0, lE.A)(C ? b : I) && (C ? null != b : null != I),
                y = d && null != v,
                E = i.useCallback(() => {
                    a(),
                        (0, nP.XD)({
                            uploadType: nO.HL.AVATAR,
                            analyticsSource: r,
                            guildId: l ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [a, r, l]),
                P = i.useCallback(() => {
                    a(), (0, lP.L)({ analyticsLocations: o, guild: h ?? void 0, stackingBehavior: "stack" });
                }, [a, o, h]),
                R = i.useCallback(() => {
                    a(),
                        (0, nP.rM)(null, g, (e) => (0, nC.p)({ guildId: l ?? void 0, avatar: e })),
                        (0, q.WU)(p ? "reset" : "remove");
                }, [a, l, g, p]),
                O = i.useCallback(() => {
                    a(), (0, nC.p)({ guildId: l ?? void 0, avatarDecoration: null });
                }, [a, l]);
            return i.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, t.jsx)(
                                lN.Dr,
                                { id: "change-avatar", label: ek.intl.string(ek.t["4OynCD"]), action: E },
                                "change-avatar",
                            ),
                        ),
                    A &&
                        e.push(
                            (0, t.jsx)(
                                lN.Dr,
                                { id: "change-decoration", label: ek.intl.string(ek.t.BVcYCx), action: P },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        m &&
                        e.push(
                            p
                                ? (0, t.jsx)(
                                      lN.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: ek.intl.string(ek.t.TDjKDm),
                                          action: R,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      lN.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: ek.intl.string(ek.t.twB3fz),
                                          action: R,
                                      },
                                      "remove-avatar",
                                  ),
                        ),
                    A &&
                        N &&
                        e.push(
                            y
                                ? (0, t.jsx)(
                                      lN.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: ek.intl.string(ek.t.JvcEcq),
                                          action: O,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      lN.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: ek.intl.string(ek.t.OrokWm),
                                          action: O,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [p, x, A, y, m, N, E, P, R, O]);
        })({ user: n, guildId: l, onClose: g });
    return 0 === m.length
        ? (0, t.jsx)(er.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: r()(lT.my, lT.vk, lS.kL, { [lS.MO]: d }),
              onMouseDown: (e) => {
                  u.current?.contains(e.target) || c(!0);
              },
              children: [
                  (0, t.jsx)(l_, { ...a, imageClassName: r()(lT.Lw, lS.HU) }),
                  (0, t.jsx)(nj.Y, {
                      targetElementRef: u,
                      shouldShow: d,
                      animation: nj.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: g,
                      renderPopout: (e) => (0, t.jsx)(lD, { ...e, items: m, onMenuClose: g }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: u,
                              className: lS.r9,
                              children: (0, t.jsx)(e5.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: ly.R,
                                  "aria-label": ek.intl.string(ek.t.YAgq3W),
                                  onClick: (e) => {
                                      e.stopPropagation(), c((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var lL = l(617061),
    lM = l(976726);
function lG(e) {
    let { onMenuClose: n, items: l, ...i } = e;
    return (0, t.jsx)(lC.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": ek.intl.string(ek.t.FzU73A),
        children: (0, t.jsx)(lN.rX, { children: l }),
    });
}
function lw(e) {
    let { user: n, guildId: l } = e,
        [a, o] = i.useState(!1),
        d = i.useRef(null),
        c = i.useCallback(() => o(!1), []),
        u = (function (e) {
            let { user: n, guildId: l, onClose: a } = e,
                { newestAnalyticsLocation: r, analyticsLocations: o } = (0, j.Ay)(),
                d = (0, q.N2)({ user: n, guildId: l ?? void 0 }),
                c = nf.Ay.canUsePremiumProfileCustomization(n),
                u = c || null == l,
                g = null != l,
                { pendingBanner: m, pendingProfileEffect: p } = (0, s.bG)([J.A], () =>
                    J.A.getPendingChanges(l ?? void 0),
                ),
                f = (0, s.bG)([M.A], () =>
                    null != l ? M.A.getGuildMemberProfile(n.id, l)?.banner : M.A.getUserProfile(n.id)?.banner,
                ),
                x = (0, s.bG)([nR.default], () => nR.default.getCurrentUser()?.banner != null),
                A = (0, s.bG)([M.A], () => M.A.getUserProfile(n.id)?.profileEffect != null),
                h = (0, q.Ac)(m, f),
                v = g && x,
                I = g && A,
                b = void 0 === p ? null != d : null != p,
                C = i.useCallback(() => {
                    a(),
                        (0, nP.XD)({
                            uploadType: nO.HL.BANNER,
                            analyticsSource: r,
                            guildId: l ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [a, r, l]),
                N = i.useCallback(() => {
                    a(),
                        (0, lL.W)({
                            analyticsLocations: o,
                            guild: null != l ? (n$.A.getGuild(l) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                        });
                }, [a, o, l, d]),
                y = i.useCallback(() => {
                    a(), (0, nP.rM)(null, f, (e) => (0, nC.p)({ guildId: l ?? void 0, banner: e }));
                }, [a, l, f]),
                E = i.useCallback(() => {
                    a(), (0, nC.p)({ guildId: l ?? void 0, profileEffect: null });
                }, [a, l]);
            return i.useMemo(() => {
                let e = [];
                return (
                    c &&
                        e.push(
                            (0, t.jsx)(
                                lN.Dr,
                                { id: "change-banner", label: ek.intl.string(ek.t.N0bC3P), action: C },
                                "change-banner",
                            ),
                        ),
                    u &&
                        e.push(
                            (0, t.jsx)(
                                lN.Dr,
                                { id: "change-effect", label: ek.intl.string(ek.t["/dRfCf"]), action: N },
                                "change-effect",
                            ),
                        ),
                    c &&
                        h &&
                        e.push(
                            v
                                ? (0, t.jsx)(
                                      lN.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: ek.intl.string(ek.t.jHlJNS),
                                          action: y,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      lN.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: ek.intl.string(ek.t.tT9n7D),
                                          action: y,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    u &&
                        b &&
                        e.push(
                            I
                                ? (0, t.jsx)(
                                      lN.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: ek.intl.string(ek.t["SQy/Po"]),
                                          action: E,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      lN.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: ek.intl.string(ek.t.uMuafO),
                                          action: E,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    e
                );
            }, [v, c, u, I, h, b, C, N, y, E]);
        })({ user: n, guildId: l, onClose: c });
    return 0 === u.length
        ? (0, t.jsx)(eo.A, { ...e })
        : (0, t.jsxs)("div", {
              className: r()(lM.kL, { [lM.MO]: a }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(eo.A, { ...e, className: lM.Pr }),
                  (0, t.jsx)(nj.Y, {
                      targetElementRef: d,
                      shouldShow: a,
                      animation: nj.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, t.jsx)(lG, { ...e, items: u, onMenuClose: c }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: lM.r9,
                              children: (0, t.jsx)(e5.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: ly.R,
                                  "aria-label": ek.intl.string(ek.t.FzU73A),
                                  onClick: (e) => {
                                      e.stopPropagation(), o((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var lU = l(777480),
    lF = l(107563),
    lV = l(570287);
l(938796);
var lB = l(913453),
    lz = l(667049),
    lW = l(837531),
    lH = l(186272),
    lY = l(645625);
let lK = (e) => e * (2 - e),
    lX = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } };
function lq(e) {
    let { displayProfile: n, pendingBanner: l } = e,
        a = (0, F.Nx)(),
        [r, s] = i.useState(void 0);
    if (
        (i.useEffect(() => {
            if (null == l || a) return;
            let e = !1;
            return (
                et(l, 1024)
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
        }, [a, l]),
        a)
    )
        return null;
    let o = null != l ? (r ?? null) : n?.getPreviewBanner(l, !1, 1024);
    return null == o
        ? null
        : (0, t.jsx)("div", { className: lY.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function l$(e) {
    let { displayProfile: n, profileEffectOverride: l, isHovering: i } = e,
        a = void 0 !== l ? l : n?.profileEffect;
    return null == a ? null : (0, t.jsx)(I.A, { skuId: a.skuId, isHovering: i });
}
function lJ(e) {
    let {
            user: n,
            currentUser: l,
            guildId: a,
            originGuildId: o,
            channelId: d,
            displayProfile: g,
            nickname: m,
            hasEntered: p,
            customStatusPrompt: f,
            onClose: x,
            avatarDecorationOverride: h,
            avatarOverride: v,
            bannerOverride: j,
            profileEffectOverride: I,
            allowEditing: b = !1,
            isLoading: C = !1,
        } = e,
        N = n.id === l.id,
        T = i.useRef(null),
        { isHoveringOrFocusing: D } = (0, y.A)(T),
        [L, M] = i.useState(),
        G = i.useCallback((e) => {
            let n = e.contentRect.width;
            n <= 350 ? M("compact-xs") : n <= 380 ? M("compact-sm") : M(void 0);
        }, []);
    (0, A.g)(T, G, [], { fireOnMount: !0 });
    let w = null != L ? lX[L] : void 0,
        U = i.useMemo(() => f ?? (0, E.A)(), [f]),
        { relationshipType: F, originApplicationId: X } = (0, s.cf)([S.A], () => ({
            relationshipType: S.A.getRelationshipType(n.id),
            originApplicationId: S.A.getOriginApplicationId(n.id),
        })),
        q = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        $ = (0, R.q)({ userId: n.id }),
        J = (0, P.fi)(n.id),
        { appIdentities: Q, connections: ee } = (function (e) {
            let { filteredAppIdentities: n } = (0, H.A)(e),
                l = (0, K.A)(e),
                t = z.A.useConfig({ location: "useVisibleUserProfileConnectionsAndAppIdentities" }),
                a = i.useMemo(() => new Set(t.enabled ? (n?.map((e) => e.application_id) ?? []) : []), [n, t.enabled]),
                r = (0, W.A)([...a]).filter(Y.Vq);
            return {
                appIdentities: i.useMemo(
                    () =>
                        n
                            .map((e) => ({ identity: e, application: r.find((n) => n.id === e.application_id) }))
                            .filter((e) => {
                                let { application: n } = e;
                                return null != n;
                            }),
                    [n, r],
                ),
                connections: i.useMemo(
                    () =>
                        t.enabled
                            ? l.filter((e) => {
                                  let n = B.A.get(e.type);
                                  return n?.replacedBy == null || !a.has(n.replacedBy);
                              })
                            : l,
                    [l, a, t.enabled],
                ),
            };
        })(n.id),
        en = (0, V.A)(n.id),
        el = b ? lw : eo.A,
        et = b ? lk : er.A;
    return (0, t.jsxs)("main", {
        className: r()(lY.profile, null != L && lY[L]),
        ref: T,
        "aria-busy": C,
        children: [
            (0, t.jsxs)("div", {
                className: lY.profileHeader,
                children: [
                    (0, t.jsx)(el, {
                        user: n,
                        displayProfile: g,
                        guildId: a,
                        themeType: Z.d.MODAL_V2,
                        specOverrides: w,
                        pendingBanner: j,
                    }),
                    (0, t.jsx)(ep.A, { userId: n.id, onClose: x, className: lY.interactionToast }),
                    (0, t.jsx)(et, {
                        user: n,
                        displayProfile: g,
                        guildId: a,
                        channelId: d,
                        themeType: Z.d.MODAL_V2,
                        specOverrides: w,
                        avatarDecorationOverride: h,
                        avatarOverride: v,
                    }),
                    (0, t.jsx)(eI.A, {
                        user: n,
                        guildId: a,
                        channelId: d,
                        themeType: Z.d.MODAL_V2,
                        hasEntered: p,
                        prompt: N ? U : null,
                    }),
                ],
            }),
            (0, t.jsxs)(c.Ip, {
                fade: !0,
                className: lY.profileBody,
                children: [
                    (0, t.jsx)(eu.A, { userId: n.id }),
                    (0, t.jsx)(ej.Ay, {
                        user: n,
                        guildId: g?.guildId ?? void 0,
                        displayName: m,
                        displayNameSize: "lg",
                        pronouns: g?.pronouns,
                        onClose: x,
                        trailing: (0, t.jsx)(es.A, { displayProfile: g, themeType: Z.d.MODAL_V2, onClose: x }),
                    }),
                    F === eY.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(ev.A.Overlay, {
                            className: lY.profileOverlay,
                            children: (0, t.jsx)(em.A, {
                                user: n,
                                applicationId: X,
                                guildId: g?.guildId ?? void 0,
                                channelId: d,
                                className: lY.profileBanner,
                            }),
                        }),
                    J.map((e) => {
                        let { applicationId: l } = e;
                        return (0, t.jsx)(
                            ev.A.Overlay,
                            {
                                className: lY.profileOverlay,
                                children: (0, t.jsx)(em.A, {
                                    user: n,
                                    guildId: g?.guildId ?? void 0,
                                    channelId: d,
                                    isGameRelationship: !0,
                                    applicationId: l,
                                    className: lY.profileBanner,
                                }),
                            },
                            l,
                        );
                    }),
                    n.isProvisional &&
                        (0, t.jsx)(ev.A.Overlay, {
                            className: lY.profileOverlay,
                            children: (0, t.jsx)(le.A, {
                                heading: ek.intl.string(ek.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(u.E, { size: "xs", color: "currentColor" }),
                                className: lY.profileBanner,
                                children: (0, t.jsx)(O.T, { userId: n.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(eh.A, { user: n, className: lY.profileBanner }),
                    g?.private &&
                        (0, t.jsx)(ev.A.Overlay, {
                            className: lY.profileOverlay,
                            children: (0, t.jsx)(eA.A, { username: m }),
                        }),
                    (0, t.jsx)("div", {
                        className: lY.profileButtons,
                        children: (0, t.jsx)(e9, {
                            user: n,
                            currentUser: l,
                            guildId: a,
                            originGuildId: o,
                            channelId: d,
                            displayProfile: g,
                            relationshipType: F,
                            onClose: x,
                        }),
                    }),
                    N && (0, t.jsx)(ec.A, { isPremiumUser: (0, k.ki)(l), onInteraction: x }),
                    !q && (0, t.jsx)(ed.E, { userBio: g?.bio, setLineClamp: !1 }),
                    $.length > 0 &&
                        (0, t.jsx)(le.A, {
                            heading: ek.intl.string(ek.t["Uv/eTx"]),
                            children: (0, t.jsx)(eg.A, { applicationIds: $ }),
                        }),
                    (0, t.jsx)(le.A, {
                        heading: ek.intl.string(ek.t.a6XYD9),
                        children: (0, t.jsx)(ef.A, { userId: n.id, guildId: g?.guildId, tooltipDelay: eH.In }),
                    }),
                    g?.guildId != null &&
                        (0, t.jsx)(eb.A, {
                            userId: n.id,
                            guildId: g.guildId,
                            className: lY.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "currentColor",
                        }),
                    (ee.length > 0 || Q.length > 0) &&
                        (0, t.jsx)(le.A, {
                            heading: ek.intl.string(ek.t["3fe7U5"]),
                            scrollTargetId: eH.bk.CONNECTIONS,
                            children: (0, t.jsx)(nc, {
                                applicationIdentities: Q,
                                connections: ee,
                                userId: n.id,
                                className: lY.profileAppConnections,
                            }),
                        }),
                    en.length > 0 &&
                        (0, t.jsx)(le.A, {
                            heading: ek.intl.string(ek.t.PHjkRE),
                            scrollTargetId: eH.bk.APPS,
                            children: (0, t.jsx)(eG, {
                                applicationRoleConnections: en,
                                onClose: x,
                                className: lY.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(ll, { userId: n.id }),
                ],
            }),
            (0, t.jsx)(l$, { displayProfile: g, profileEffectOverride: I, isHovering: D }),
        ],
    });
}
function lZ(e) {
    let { user: n, displayProfile: l, pendingThemeColors: i, children: a } = e,
        {
            theme: r,
            primaryColor: s,
            secondaryColor: o,
        } = (0, U.A)({ user: n, displayProfile: l, pendingThemeColors: i }),
        { profileThemeStyle: d, profileThemeClassName: c } = (0, X.A)({
            theme: r,
            themeType: null,
            primaryColor: s,
            secondaryColor: o,
        });
    return (0, t.jsx)("div", { className: c, style: d, children: a });
}
function lQ(e) {
    let {
            user: n,
            currentUser: l,
            guildId: a,
            originGuildId: o,
            channelId: c,
            messageId: u,
            roleId: A,
            sessionId: I,
            initialTabSection: y,
            initialScrollTarget: E,
            transitionState: P,
            customStatusPrompt: R,
            openedAt: O,
            onClose: _,
            sourceAnalyticsLocations: k = [],
            themeContainerClassName: U,
        } = e,
        F = n.id === l.id,
        {
            guildId: V,
            pendingGuildId: B,
            isLoading: z,
            selectUserProfile: W,
        } = (function (e) {
            let { userId: n, initialGuildId: l } = e,
                [t, a] = i.useState(l),
                [r, s] = i.useState(l),
                o = i.useRef(r),
                d = i.useCallback((e) => {
                    a(e ?? void 0);
                }, []);
            return (
                i.useEffect(() => {
                    let e = !1;
                    return (
                        (0, el.A)(n, void 0, {
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
                                e || a(o.current);
                            },
                        ),
                        () => {
                            e = !0;
                        }
                    );
                }, [t, n]),
                { guildId: r, pendingGuildId: t, isLoading: t !== r, selectUserProfile: d }
            );
        })({ userId: n.id, initialGuildId: a }),
        H = i.useMemo(() => (null != V ? { [V]: [n.id] } : {}), [V, n.id]);
    (0, h.Eq)(H, "UserProfileModalV2");
    let Y = (0, w.Ay)(n.id, V),
        K = (0, b.A)(Y?.profileFrame?.skuId, "UserProfileModalV2"),
        X = (0, G.X)("UserProfileModalV2"),
        Q = F && X,
        {
            pendingThemeColors: et,
            avatarDecorationOverride: er,
            avatarOverride: es,
            bannerOverride: eo,
            profileEffectOverride: ed,
        } = (function (e) {
            let { user: n, guildId: l, allowEditingInModal: t } = e;
            return (0, s.cf)([J.A], () => {
                if (!t) return en;
                let {
                    pendingThemeColors: e,
                    pendingAvatarDecoration: i,
                    pendingAvatar: a,
                    pendingBanner: r,
                    pendingProfileEffect: s,
                } = J.A.getPendingChanges(l);
                return {
                    pendingThemeColors: e,
                    avatarDecorationOverride:
                        void 0 === i
                            ? void 0
                            : (0, q.lw)({ userValue: n.avatarDecoration, pendingValue: i, guildId: l }),
                    avatarOverride: (0, $.V7)({ userId: n.id, image: a, size: ee }),
                    bannerOverride: r,
                    profileEffectOverride: s,
                };
            }, [n, l, t]);
        })({ user: n, allowEditingInModal: Q, guildId: V }),
        {
            isExpanded: ec,
            isAnimating: eu,
            transition: eg,
            canShowExpand: em,
            handleExpand: ep,
            handleCollapse: ef,
            refs: { expandIconButtonRef: eA, expandTabButtonRef: eh, collapseButtonRef: ej },
        } = (function () {
            let [e, n] = i.useState(() => window.innerWidth > 928),
                [l, t] = i.useState(!1),
                a = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: lK },
                    onRest: () => t(!1),
                }),
                r = (0, x.A)("(min-width: 929px) and (min-height: 550px)"),
                s = i.useRef(null),
                o = i.useRef(null),
                c = i.useRef(null),
                u = i.useRef(null),
                g = i.useCallback(() => {
                    (u.current = "collapse"), t(!0), n(!0);
                }, []),
                m = i.useCallback(() => {
                    (u.current = "expand"), t(!0), n(!1);
                }, []);
            return (
                i.useEffect(() => {
                    if (!l) {
                        if ("collapse" === u.current && e) (u.current = null), c.current?.focus();
                        else if ("expand" === u.current && !e) {
                            u.current = null;
                            let e = r ? o.current : s.current;
                            e?.focus();
                        }
                    }
                }, [e, l, r]),
                {
                    isExpanded: e,
                    isAnimating: l,
                    transition: a,
                    canShowExpand: !e && !l,
                    handleExpand: g,
                    handleCollapse: m,
                    refs: { expandIconButtonRef: s, expandTabButtonRef: o, collapseButtonRef: c },
                }
            );
        })(),
        eI = Q && em,
        { defaultWishlistId: eb } = (0, s.cf)([M.A], () => ({ defaultWishlistId: M.A.getFirstWishlistId(n.id) }));
    (0, T.fw)({ wishlistId: eb, userId: n.id });
    let eC = (0, ea.fC)(),
        eN = z || null != eC.interactionType,
        ey = (function (e) {
            let n,
                l,
                t,
                { user: i, currentUser: a } = e,
                { mutualFriendsCount: r, mutualGuilds: o } = (0, lB.A)(i),
                d = o?.length,
                c =
                    ((n = (0, s.bG)([nR.default], () => nR.default.getCurrentUser())),
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
                u = (0, lz.A)(i.id),
                g = (0, lV.A)(i.id),
                m = [],
                p = i.id === a?.id,
                f = M.A.getFirstWishlistId(i.id),
                x = null != f,
                A = x ? M.A.getWishlistSettings(i.id, f) : null,
                h = (x ? lF.A.getWishlistItems(f) : []).length > 0,
                v = u.length > 0;
            (p || v) && m.push({ text: ek.intl.string(ek.t.laViwx), section: eH.RP.WIDGETS }),
                m.push({ text: ek.intl.string(ek.t.chq59f), section: eH.RP.ACTIVITY });
            let j = !1 === i.nsfwAllowed,
                I = S.A.isFriend(i.id),
                b = A?.visibility === lU.a.PUBLIC;
            return (
                (p || (!p && h && b && g && (!j || (j && I)))) &&
                    m.push({ text: ek.intl.string(ek.t["7lZ31J"]), section: eH.RP.WISHLIST }),
                i.id !== a?.id &&
                    c &&
                    (m.push({ text: (0, lW.A)(r), section: eH.RP.MUTUAL_FRIENDS }),
                    m.push({ text: (0, lH.A)(d), section: eH.RP.MUTUAL_GUILDS })),
                m
            );
        })({ user: n, currentUser: l }),
        { analyticsLocations: eE } = (0, j.Ay)([...k, v.A.USER_PROFILE_MODAL_V2]),
        eP = (0, L.pb)({
            layout: "MODAL_V2",
            userId: n.id,
            sourceSessionId: I,
            guildId: V,
            channelId: c,
            messageId: u,
            roleId: A,
        }),
        eR = D.Ay.useName(Y?.guildId, c, n),
        eO = (0, N.GV)(),
        eT = ek.intl.format(ek.t.KRe1Fk, { name: eR });
    return (0, t.jsx)(j.f5, {
        value: eE,
        children: (0, t.jsx)(L.of, {
            value: eP,
            openedAt: O,
            fetchStartedAt: Y?.fetchStartedAt,
            fetchEndedAt: Y?.fetchEndedAt,
            isLoaded: Y?.isLoaded,
            children: (0, t.jsx)(ea.Hl, {
                value: eC,
                children: (0, t.jsx)(ei.N, {
                    value: E,
                    children: (0, t.jsxs)(g.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: lY.root,
                        transitionState: P,
                        "aria-labelledby": eO,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(lo, {
                                children: (0, t.jsxs)("div", {
                                    className: r()(lY.layoutContainer, {
                                        [lY.editingPanelEnabled]: Q,
                                        [lY.editingPanelExpanded]: Q && ec,
                                        [lY.isAnimating]: eu,
                                        [lY.hasPrivateBanner]: Y?.private === !0,
                                    }),
                                    children: [
                                        (0, t.jsxs)(lZ, {
                                            user: n,
                                            displayProfile: Y,
                                            pendingThemeColors: et,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: lY.modalHeaderButtons,
                                                    children: [
                                                        (0, t.jsx)(e3, { isCurrentUser: F, onClose: _ }),
                                                        (0, t.jsx)(m.A, {
                                                            children: (0, t.jsx)(p.H, { id: eO, children: eT }),
                                                        }),
                                                        Q &&
                                                            (!ec || eu) &&
                                                            (0, t.jsx)(n5, {
                                                                buttonRef: eA,
                                                                onClick: ep,
                                                                className: lY.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eI &&
                                                    (0, t.jsx)(n9, {
                                                        innerRef: eh,
                                                        onClick: ep,
                                                        className: lY.editingPanelExpandButtonDefault,
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(p.F, {
                                            children: [
                                                Q &&
                                                    eg((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(n3, {
                                                                  className: r()(lY.editingPanel, {
                                                                      [lY.isExpanded]: ec,
                                                                  }),
                                                                  user: n,
                                                                  selectedGuildId: B,
                                                                  onSelectGuildId: W,
                                                                  onClose: ef,
                                                                  collapseButtonRef: ej,
                                                                  isLoading: z,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(ev.A, {
                                                    className: r()(U, lY.profileContentContainer),
                                                    user: n,
                                                    displayProfile: Y,
                                                    themeType: Z.d.MODAL_V2,
                                                    pendingThemeColors: et,
                                                    privateBanner: Y?.private === !0 ? (0, t.jsx)(ex.A, {}) : void 0,
                                                    children: [
                                                        (0, t.jsx)(lq, { displayProfile: Y, pendingBanner: eo }),
                                                        (0, t.jsx)(la, { isVisible: eN, showLoadingSpinner: z }),
                                                        (0, t.jsx)(lI, { className: lY.toast }),
                                                        (0, t.jsxs)("div", {
                                                            className: lY.profileCard,
                                                            children: [
                                                                (0, t.jsx)(lJ, {
                                                                    user: n,
                                                                    currentUser: l,
                                                                    guildId: V,
                                                                    channelId: c,
                                                                    displayProfile: Y,
                                                                    nickname: eR,
                                                                    originGuildId: o,
                                                                    hasEntered: P === f.ip.ENTERED,
                                                                    customStatusPrompt: R,
                                                                    onClose: _,
                                                                    avatarDecorationOverride: er,
                                                                    avatarOverride: es,
                                                                    bannerOverride: eo,
                                                                    profileEffectOverride: ed,
                                                                    allowEditing: Q,
                                                                    isLoading: z,
                                                                }),
                                                                null != K &&
                                                                    (0, t.jsx)(C.A, { frame: K, layout: "MODAL_V2" }),
                                                            ],
                                                        }),
                                                        (0, t.jsx)(ld.A, {
                                                            user: n,
                                                            currentUser: l,
                                                            displayProfile: Y,
                                                            guildId: V,
                                                            channelId: c,
                                                            items: ey,
                                                            initialSection: y,
                                                            onClose: _,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, t.jsx)(n6.A, { userId: n.id, guildId: V, className: lY.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
