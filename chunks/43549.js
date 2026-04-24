t.d(n, { A: () => tQ });
var l = t(627968),
    i = t(64700),
    r = t(503698),
    a = t.n(r),
    s = t(17928),
    o = t(778712),
    d = t(866323),
    u = t(364522),
    c = t(695366),
    g = t(935462),
    m = t(140735),
    f = t(707554),
    p = t(231723),
    x = t(241524),
    A = t(770178),
    h = t(80682),
    v = t(793574),
    j = t(688810),
    I = t(480335),
    b = t(361628),
    C = t(744808),
    N = t(915089),
    y = t(713517),
    E = t(645507),
    P = t(922590),
    R = t(821269),
    O = t(93246),
    T = t(594832),
    _ = t(994500),
    S = t(351906),
    D = t(562153),
    k = t(474090),
    L = t(183555),
    M = t(841595),
    G = t(591179),
    w = t(999291),
    U = t(101928),
    F = t(837529),
    V = t(346713),
    B = t(573648),
    W = t(941314),
    z = t(429913),
    H = t(321078),
    Y = t(403362),
    K = t(484509),
    X = t(920601),
    q = t(919395),
    $ = t(101058),
    J = t(836602),
    Z = t(996988),
    Q = t(985253);
let ee = (0, o.FT)(Q.T[Z.d.MODAL_V2].avatarSize),
    en = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        profileEffectOverride: void 0,
    };
var et = t(576622);
async function el(e, n) {
    let t = new Image();
    await new Promise((n, l) => {
        (t.onload = () => n()), (t.onerror = () => l(Error(`Failed to load image: ${e}`))), (t.src = e);
    });
    let l = null != n ? Math.min(1, n / Math.max(t.naturalWidth, t.naturalHeight)) : 1,
        i = document.createElement("canvas");
    (i.width = Math.round(t.naturalWidth * l)), (i.height = Math.round(t.naturalHeight * l));
    let r = i.getContext("2d");
    if (null == r) throw Error("Canvas 2d context unavailable");
    return r.drawImage(t, 0, 0, i.width, i.height), i.toDataURL("image/png");
}
var ei = t(716804),
    er = t(679492),
    ea = t(718019),
    es = t(694720),
    eo = t(915614),
    ed = t(308244),
    eu = t(744753),
    ec = t(559506),
    eg = t(361311),
    em = t(886891),
    ef = t(439053),
    ep = t(743987),
    ex = t(312381),
    eA = t(501193),
    eh = t(383448),
    ev = t(946356),
    ej = t(878555),
    eI = t(983495),
    eb = t(280645),
    eC = t(109112),
    eN = t(939249),
    ey = t(834730),
    eE = t(730134),
    eP = t(169869),
    eR = t(837057),
    eO = t(310419),
    eT = t(773669),
    e_ = t(889227),
    eS = t(967198),
    eD = t(488995),
    ek = t(985018),
    eL = t(985176);
function eM(e) {
    let { applicationRoleConnection: n, locale: t, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, eP.VW)(n, t);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: eL.k_,
                children:
                    null != n.application.bot
                        ? (0, l.jsx)(eE.A, { user: new e_.A(n.application.bot), size: o._3.SIZE_16 })
                        : (0, l.jsx)(eC._, { color: "currentColor", size: "sm" }),
            }),
            (0, l.jsxs)("div", {
                className: eL.Hd,
                children: [
                    (0, l.jsxs)(eN.D, {
                        className: eL.OB,
                        onClick: () => {
                            i?.(),
                                (0, eR.transitionToGlobalDiscovery)({
                                    tab: eD.GlobalDiscoveryTab.APPS,
                                    applicationId: n.application.id,
                                    newSessionState: {
                                        entrypoint: { name: eO.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                });
                        },
                        children: [
                            null != n.platform_name
                                ? (0, l.jsx)(ey.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_name,
                                  })
                                : null,
                            null != n.platform_username
                                ? (0, l.jsx)(ey.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_username,
                                  })
                                : null,
                            (0, l.jsx)(ey.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: eL.nk,
                                children: ek.intl.format(ek.t.zIT9YA, { applicationHook: () => n.application.name }),
                            }),
                        ],
                    }),
                    null != a && a.length > 0 ? (0, l.jsx)("div", { className: eL.yu, children: a }) : null,
                ],
            }),
        ],
    });
}
function eG(e) {
    let { applicationRoleConnections: n, className: t, onClose: i } = e,
        { trackUserProfileAction: r } = (0, L.NJ)(),
        o = (0, s.bG)([eT.default], () => eT.default.locale),
        d = (0, s.bG)([eS.A], () => eS.A.getGuildId());
    return 0 === n.length
        ? null
        : (0, l.jsx)("ul", {
              className: a()(eL.kL, t),
              children: n.map((e, n) =>
                  (0, l.jsx)(
                      "li",
                      {
                          className: eL.FI,
                          children: (0, l.jsx)(eM, {
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
var ew = t(982168),
    eU = t(722868),
    eF = t(822775),
    eV = t(597770),
    eB = t(751188),
    eW = t(746174),
    ez = t(993401),
    eH = t(518477),
    eY = t(652215);
function eK(e) {
    let { user: n, onClose: t } = e,
        { analyticsLocations: r } = (0, j.Ay)(),
        a = (0, eW.j)("UserProfileGiftButton"),
        { openGiftModal: s } = (0, eB.$)({
            giftRecipient: n,
            analyticsLocations: r,
            analyticsObject: {
                page: eY.liQ.USER_PROFILE,
                section: eY.JJy.USER_PROFILE,
                object: eY.ZSU.BUTTON_ICON,
                objectType: eY.AnalyticsObjectTypes.GIFT,
            },
            location: "user-profile-gift-button",
        }),
        o = i.useCallback(() => {
            s(), t?.();
        }, [s, t]);
    return a
        ? (0, l.jsx)(ez.q3, { action: eH.pt.GIFT, icon: eV.o, tooltipText: ek.intl.string(ek.t.PEjaCx), onClick: o })
        : null;
}
var eX = t(982985),
    eq = t(700174),
    e$ = t(34188),
    eJ = t(29292),
    eZ = t(207803),
    eQ = t(485745);
function e0(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        t = (0, eQ.A)(),
        l = i.useRef(e);
    return (
        i.useLayoutEffect(() => {
            l.current = e;
        }),
        i.useCallback(
            function () {
                for (var e = arguments.length, i = Array(e), r = 0; r < e; r++) i[r] = arguments[r];
                n && t ? (0, eZ.VQ)() : l.current(...i);
            },
            [n, t],
        )
    );
}
function e1(e) {
    let { onClose: n, ...t } = e,
        { analyticsLocations: i, newestAnalyticsLocation: r } = (0, j.Ay)(),
        a = e0(() => {
            (0, eJ.Cz)({ analyticsLocations: i, analyticsSource: r }), n?.();
        });
    return (0, l.jsx)(ez.q3, {
        action: "VISIT_SHOP",
        icon: e$.U,
        tooltipText: ek.intl.string(ek.t.b2d0N0),
        onClick: a,
        ...t,
    });
}
var e2 = t(573355),
    e8 = t(102951);
function e5(e) {
    let {
            user: n,
            currentUser: t,
            guildId: i,
            originGuildId: r,
            channelId: a,
            displayProfile: s,
            relationshipType: o,
            onClose: d,
        } = e,
        u = (0, G.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: c } = (0, j.Ay)(),
        g = (0, eU.A)({ user: n, guildId: r, channelId: a, displayProfile: s, onClose: d }),
        {
            gameFriends: m,
            hasOutgoingPendingGameFriends: f,
            hasIncomingPendingGameFriends: p,
        } = (0, e8.J)({ userId: n.id }),
        x = m.length > 0 || f || p;
    return o === eY.eA$.BLOCKED
        ? null
        : n.id === t.id
          ? u
              ? (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(eX.e, { userId: n.id, variant: "primary", disabled: !0 }),
                        (0, l.jsx)(e1, { onClose: d }),
                        (0, l.jsx)(eq.Zt, { user: n, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(eF.A, { user: n, guildId: i, onClose: d }),
                        (0, l.jsx)(e1, { onClose: d }),
                        (0, l.jsx)(eq.Zt, { user: n, guildId: i, viewProfileItem: g }),
                    ],
                })
          : n.bot
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(eX.e, { userId: n.id, onClose: ew.A.popAll, autoFocus: !0 }),
                      (0, l.jsx)(eq.Zt, { user: n, guildId: i, viewProfileItem: g }),
                  ],
              })
            : o === eY.eA$.PENDING_INCOMING
              ? (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(eX.e, { userId: n.id, onClose: ew.A.popAll, autoFocus: !0 }),
                        (0, l.jsx)(eK, { user: n }),
                        (0, l.jsx)(eq.Zt, { user: n, guildId: i }),
                    ],
                })
              : o === eY.eA$.FRIEND || o === eY.eA$.PENDING_OUTGOING
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(eX.e, { userId: n.id, onClose: ew.A.popAll, autoFocus: !0 }),
                          (0, l.jsx)(e2.Ef, { user: n, relationshipType: o, analyticsLocation: c }),
                          (0, l.jsx)(eK, { user: n }),
                          (0, l.jsx)(eq.Zt, { user: n, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === eY.eA$.NONE && x
                  ? (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(eX.e, { userId: n.id, onClose: ew.A.popAll, autoFocus: !0 }),
                            (0, l.jsx)(e2.ES, {
                                user: n,
                                analyticsLocation: c,
                                gameFriends: m,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: f,
                            }),
                            (0, l.jsx)(eK, { user: n }),
                            (0, l.jsx)(eq.Zt, { user: n, guildId: i, viewProfileItem: g }),
                        ],
                    })
                  : (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(e2.cO, {
                                variant: "primary",
                                userId: n.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, l.jsx)(eX.l, { userId: n.id, onClose: ew.A.popAll, variant: "secondary" }),
                            (0, l.jsx)(eK, { user: n }),
                            (0, l.jsx)(eq.Zt, { user: n, guildId: i, viewProfileItem: g }),
                        ],
                    });
}
var e9 = t(408278),
    e7 = t(789645);
function e3(e) {
    let { isCurrentUser: n, onClose: t } = e,
        i = e0(t, n);
    return (0, l.jsx)(e9.K, {
        "aria-label": ek.intl.string(ek.t.cpT0Cq),
        icon: e7.P,
        onClick: i,
        variant: "secondary",
        size: "sm",
    });
}
var e6 = t(990078),
    e4 = t(349288),
    ne = t(509434),
    nn = t(58149),
    nt = t(681819),
    nl = t(370480),
    ni = t(486020),
    nr = t(76843),
    na = t(783419);
function ns(e) {
    let { account: n, locale: t, userId: i } = e,
        r = n.metadata ?? {},
        a = (0, nl.An)(r[na.pK.CREATED_AT], t),
        s = B.A.get((0, nt.ML)(n.type));
    return (0, l.jsx)(nd, {
        renderAccountName: () => {
            let e = s?.getPlatformUserUrl?.(n);
            return null == e
                ? (0, l.jsx)(e6.m, {
                      overflowOnly: !0,
                      text: n.name,
                      children: (0, l.jsx)(ey.E, { variant: "text-sm/normal", className: eL.GW, children: n.name }),
                  })
                : (0, l.jsx)(e4.Anchor, {
                      href: e,
                      className: eL.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${n.name}, ${ek.intl.string(ek.t.q5jLJB)}`
                              : `${n.name}, ${ek.intl.string(ek.t.q5jLJB)}`,
                      onClick: (t) => {
                          (0, nn.zV)(eY.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: n.type, other_user_id: i }),
                              (0, nr.h)({ href: e, trusted: s?.type !== eY.fg2.DOMAIN }, t);
                      },
                      children: (0, l.jsxs)("div", {
                          className: eL.vi,
                          children: [
                              (0, l.jsx)(e6.m, {
                                  overflowOnly: !0,
                                  text: n.name,
                                  children: (0, l.jsx)(ey.E, {
                                      variant: "text-sm/normal",
                                      className: eL.GW,
                                      children: n.name,
                                  }),
                              }),
                              (0, l.jsx)(ne.I, { size: "xs", color: "currentColor" }),
                          ],
                      }),
                  });
        },
        renderMetadata: () =>
            n.type === eY.fg2.REDDIT
                ? (0, eP.xE)(r)
                : n.type === eY.fg2.STEAM
                  ? (0, eP.dy)(r)
                  : n.type === eY.fg2.BLUESKY || n.type === eY.fg2.MASTODON || n.type === eY.fg2.TWITTER
                    ? (0, eP.ED)(r)
                    : n.type === eY.fg2.PAYPAL
                      ? (0, eP.gZ)(r)
                      : n.type === eY.fg2.EBAY
                        ? (0, eP.ub)(r)
                        : n.type === eY.fg2.TIKTOK
                          ? (0, eP.HU)(r)
                          : null,
        platformIcon: s?.icon.lightPNG,
        platformName: s?.name,
        createdAtDate: a,
    });
}
function no(e) {
    let { identityWithApplication: n } = e,
        { identity: t, application: i } = n;
    if (null == t.profile || null == t.profile.username || null == i) return null;
    let r = ni.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, l.jsx)(nd, {
        renderAccountName: () =>
            (0, l.jsx)(e6.m, {
                overflowOnly: !0,
                text: t.profile.username,
                children: (0, l.jsx)(ey.E, {
                    variant: "text-sm/normal",
                    className: eL.GW,
                    children: t.profile.username,
                }),
            }),
        renderMetadata: () => null,
        platformIcon: r,
        platformName: i.name,
        createdAtDate: void 0,
        applyIconBorderRadius: !0,
    });
}
function nd(e) {
    let {
        renderAccountName: n,
        renderMetadata: t,
        platformName: i,
        platformIcon: r,
        createdAtDate: s,
        applyIconBorderRadius: o = !1,
    } = e;
    return (0, l.jsxs)("li", {
        className: eL.FI,
        children: [
            (0, l.jsx)(e6.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, l.jsx)("div", {
                    className: eL.k_,
                    children: (0, l.jsx)("img", {
                        alt: ek.intl.formatToPlainString(ek.t.rtm15P, { name: i }),
                        className: a()(eL.tV, o ? eL.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, l.jsxs)("div", {
                className: eL.Hd,
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            n(),
                            null != s &&
                                (0, l.jsx)(ey.E, {
                                    variant: "text-xs/normal",
                                    children: ek.intl.format(ek.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, l.jsx)("div", { className: eL.yu, children: t() }),
                ],
            }),
        ],
    });
}
function nu(e) {
    let { connections: n, applicationIdentities: t, userId: i, className: r } = e,
        o = (0, s.bG)([eT.default], () => eT.default.locale);
    return 0 === n.length && 0 === t.length
        ? null
        : (0, l.jsxs)("ul", {
              className: a()(eL.kL, r),
              children: [
                  n.map((e) => (0, l.jsx)(ns, { account: e, userId: i, locale: o }, `${e.type}:${e.id}`)),
                  t?.map((e) => (0, l.jsx)(no, { identityWithApplication: e }, e.identity.application_id)),
              ],
          });
}
var nc = t(200219),
    ng = t(661531),
    nm = t(320448),
    nf = t(534514),
    np = t(927578),
    nx = t(487233),
    nA = t(230635),
    nh = t(317097),
    nv = t(602853),
    nj = t(922016),
    nI = t(508274),
    nb = t(654107),
    nC = t(84540),
    nN = t(930349);
function ny(e) {
    let { user: n, disabled: t = !1 } = e,
        r = i.useRef(null),
        a = (0, nv.r)(ng.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, nb.rh)(n.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([J.A, M.A], () => ({
            pendingAccentColor: J.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: M.A.getUserProfile(n.id)?.accentColor,
        })),
        c = d ?? u ?? (0, nh.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, nC.p)({ accentColor: e }), []);
    return (0, l.jsx)(nj.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, l.jsx)(nI.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, l.jsx)(nN.NW, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: t,
                accessibleLabel: ek.intl.string(ek.t["/X3fkf"]),
                children: (0, l.jsx)("div", {
                    style: { width: "100%", height: "100%", backgroundColor: (0, nh.Hl)(c) },
                }),
            }),
    });
}
var nE = t(450373),
    nP = t(252732),
    nR = t(287809),
    nO = t(339984),
    nT = t(111242);
function n_(e) {
    let { backgroundColor: n } = e;
    return (0, l.jsx)("div", { className: nT.o, style: { backgroundColor: n } });
}
function nS(e) {
    let { src: n } = e;
    return (0, l.jsx)("img", { src: n, alt: "", className: nT._ });
}
function nD(e) {
    let { userId: n, guildId: t, disabled: i } = e,
        { newestAnalyticsLocation: r } = (0, j.Ay)(),
        a = null != t,
        o = (0, w.Ay)(n, t),
        d = (0, s.bG)([J.A], () => J.A.getPendingChanges(t ?? void 0).pendingBanner),
        u = (0, s.bG)([nR.default], () => nR.default.getCurrentUser()?.banner != null),
        c = (0, s.bG)([M.A], () =>
            null != t ? M.A.getGuildMemberProfile(n, t)?.banner : M.A.getUserProfile(n)?.banner,
        ),
        g = null === d,
        m = void 0 !== d,
        f = a && (o?.isUsingGuildMemberBanner() ?? !1),
        p = g && a ? u : (0, q.Ac)(d, o?.banner),
        x = a ? f : o?.banner != null,
        A = m ? null != d : x,
        h = o?.getPreviewBanner(g && a && !f ? void 0 : d, !1, 296) ?? void 0,
        v = (0, nv.r)(ng.A.unsafe_rawColors.PRIMARY_800).hex(),
        I = o?.primaryColor ?? (0, nh.LX)(v),
        { hex: b } = (0, nE.A)(I),
        C = () =>
            (0, nP.XD)({
                uploadType: nO.HL.BANNER,
                analyticsSource: r,
                guildId: t ?? void 0,
                stackingBehavior: "stack",
            }),
        N = null != h ? (0, l.jsx)(nS, { src: h }) : (0, l.jsx)(n_, { backgroundColor: b });
    if (!p)
        return (0, l.jsx)(nN.kL, {
            variant: "square",
            onClick: C,
            accessibleLabel: ek.intl.string(ek.t.N0bC3P),
            disabled: i,
            children: N,
        });
    let y = a && u,
        E = A
            ? {
                  onClick: () => (0, nP.rM)(null, c, (e) => (0, nC.p)({ guildId: t ?? void 0, banner: e })),
                  type: y ? "reset" : "remove",
                  accessibleLabel: ek.intl.string(y ? ek.t.jHlJNS : ek.t.tT9n7D),
              }
            : void 0;
    return (0, l.jsx)(nN.NW, {
        variant: "square",
        onClick: C,
        accessibleLabel: ek.intl.string(ek.t.N0bC3P),
        deleteButtonConfig: E,
        disabled: i,
        children: N,
    });
}
var nk = t(473219),
    nL = t(33851),
    nM = t.n(nL),
    nG = t(298387);
function nw(e) {
    let { color: n, suggestedColors: t, disabled: r, ariaLabel: a, onSelect: s } = e,
        o = i.useRef(null),
        d = (0, nh.Hl)(n);
    return (0, l.jsx)(nj.Y, {
        targetElementRef: o,
        renderPopout: (e) => (0, l.jsx)(nI.VN, { ...e, value: n, onChange: s, suggestedColors: t, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: n, ...t } = e;
            return (0, l.jsx)(eN.D, {
                ...t,
                innerRef: o,
                className: nG.Dh,
                onClick: r ? void 0 : n,
                "aria-label": a,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, l.jsx)("div", { className: nG.Hy, style: { backgroundColor: d } }),
            });
        },
    });
}
function nU(e) {
    let {
            primaryColor: n,
            secondaryColor: t,
            onSelectPrimaryColor: i,
            onSelectSecondaryColor: r,
            suggestedColors: a,
            disabled: s = !1,
        } = e,
        o = (0, nh.Hl)(n),
        d = (0, nh.Hl)(t),
        u = `linear-gradient(to bottom, ${o}, ${d})`,
        c = ek.intl.formatToPlainString(ek.t.FquTfm, { colorLabel: o }),
        g = ek.intl.formatToPlainString(ek.t.xOnm4z, { colorLabel: d });
    return (0, l.jsx)(nN.Yt, {
        variant: "square",
        disabled: s,
        children: (0, l.jsxs)("div", {
            className: nG.D7,
            style: { background: u },
            children: [
                (0, l.jsx)(nw, { color: n, suggestedColors: a, ariaLabel: c, onSelect: i, disabled: s }),
                (0, l.jsx)(nw, { color: t, suggestedColors: a, ariaLabel: g, onSelect: r, disabled: s }),
            ],
        }),
    });
}
function nF(e) {
    let { user: n, guildId: t, disabled: r = !1 } = e,
        a = (0, w.Ay)(n.id, t),
        { pendingThemeColors: o, pendingAvatar: d } = (0, s.cf)([J.A], () => {
            let e = J.A.getPendingChanges(t ?? void 0);
            return { pendingThemeColors: e.pendingThemeColors, pendingAvatar: e.pendingAvatar };
        }),
        u = (0, $.V7)({ userId: n.id, image: d }),
        { primaryColor: c, secondaryColor: g } = (0, U.A)({
            user: n,
            displayProfile: a,
            pendingThemeColors: o,
            pendingAvatarSrc: u ?? void 0,
            isPreview: !0,
        }),
        m = (0, nv.r)(ng.A.unsafe_rawColors.PRIMARY_530).hex(),
        f = null != u ? u : n.getAvatarURL(t ?? void 0, 80),
        p = (0, nb.rh)(f, m, !1),
        x = i.useCallback(
            (e) => {
                let n = nM()(e, a?.themeColors);
                (0, nC.p)({ guildId: t ?? void 0, themeColors: n ? void 0 : e });
            },
            [a?.themeColors, t],
        );
    return null == c || null == g
        ? null
        : (0, l.jsx)(nU, {
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
var nV = t(315629),
    nB = t(821609),
    nW = t(403581),
    nz = t(835071),
    nH = t(235684);
function nY() {
    let e = () => {
        (0, nz.K)({ stackingBehavior: "stack" });
    };
    return (0, l.jsxs)(nV.h, {
        color: "nitro-pink",
        className: nH.k,
        children: [
            (0, l.jsx)(ey.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: ek.intl.format(ek.t.TmfgI2, { onClick: e }),
            }),
            (0, l.jsx)(nB.$, {
                variant: "expressive",
                size: "md",
                icon: nW.t,
                text: ek.intl.string(ek.t.pj0XBN),
                onClick: e,
                fullWidth: !0,
            }),
        ],
    });
}
t(667532);
var nK = t(111159),
    nX = t(783878),
    nq = t(548118),
    n$ = t(71393),
    nJ = t(711014),
    nZ = t(308696);
let nQ = "MAIN_PROFILE";
function n0(e) {
    let { selectedGuildId: n, onChange: t, loading: r } = e,
        a = (0, s.bG)([nJ.Ay], () => nJ.Ay.getFlattenedGuildIds()),
        o = (0, s.bG)([n$.A], () => n$.A.getGuilds()),
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
                              leading: (0, l.jsx)(nq.Ay, {
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
                    leading: (0, l.jsx)(nK.p, { size: "sm", color: ng.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                e
            );
        }, [a, o]),
        u = i.useCallback(
            (e) => {
                t(e === nQ ? null : e);
            },
            [t],
        );
    return (0, l.jsx)(nX.Z, {
        label: ek.intl.string(ek.t.rki38K),
        hideLabel: !0,
        selectionMode: "single",
        onSelectionChange: u,
        value: n ?? nQ,
        options: d,
        loading: r,
    });
}
var n1 = t(809467);
let n2 = "profile-modal-editing-panel",
    n8 = "profile-modal-editing-panel-heading";
function n5(e) {
    let { onClick: n, className: t, innerRef: i } = e;
    return (0, l.jsx)(eN.D, {
        innerRef: i,
        "aria-label": ek.intl.string(ek.t.N8XQDE),
        "aria-expanded": !1,
        "aria-controls": n2,
        className: a()(n1.eg, t),
        onClick: n,
        focusProps: { offset: { right: 6 } },
        children: (0, l.jsx)(nc.N, { size: "sm", color: ng.A.colors.ICON_STRONG }),
    });
}
function n9(e) {
    let { onClick: n, className: t, buttonRef: i } = e;
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsx)(e9.K, {
            buttonRef: i,
            "aria-label": ek.intl.string(ek.t.N8XQDE),
            "aria-expanded": !1,
            "aria-controls": n2,
            icon: nc.N,
            onClick: n,
            variant: "secondary",
            size: "sm",
        }),
    });
}
function n7(e) {
    let { onClick: n, innerRef: t } = e;
    return (0, l.jsxs)(eN.D, {
        innerRef: t,
        className: n1.cS,
        "aria-label": ek.intl.string(ek.t.X6NklS),
        onClick: n,
        "aria-controls": n2,
        "aria-expanded": !0,
        children: [
            (0, l.jsx)(nm._, { size: "md", color: "currentColor" }),
            (0, l.jsx)(nm._, { size: "md", color: "currentColor" }),
        ],
    });
}
function n3(e) {
    let {
            user: n,
            selectedGuildId: t,
            onSelectGuildId: i,
            isLoading: r = !1,
            onClose: s,
            className: o,
            collapseButtonRef: d,
        } = e,
        c = e0(i),
        g = null != t,
        p = np.Ay.canUsePremiumProfileCustomization(n);
    return (0, l.jsxs)("aside", {
        id: n2,
        "aria-labelledby": n8,
        className: a()(n1.nd, o),
        "aria-busy": r,
        children: [
            (0, l.jsx)(m.A, { children: (0, l.jsx)(f.H, { id: n8, children: ek.intl.string(ek.t["L+ch00"]) }) }),
            (0, l.jsxs)("div", {
                className: n1.wx,
                children: [
                    (0, l.jsx)(n7, { innerRef: d, onClick: s }),
                    (0, l.jsx)(n0, { selectedGuildId: t ?? null, onChange: c, loading: r }),
                ],
            }),
            (0, l.jsx)(f.F, {
                children: (0, l.jsxs)(u.Ip, {
                    className: n1.XG,
                    fade: !0,
                    children: [
                        (0, l.jsxs)("div", {
                            className: n1.Os,
                            children: [
                                (0, l.jsx)(nf.D, {
                                    variant: "text-sm/medium",
                                    className: n1.AM,
                                    children: ek.intl.string(ek.t.x5CoXR),
                                }),
                                (0, l.jsx)(nk.A, { user: n, guildId: t, disabled: r || (g && !p) }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: n1.Os,
                            children: [
                                (0, l.jsx)(nf.D, {
                                    variant: "text-sm/medium",
                                    className: n1.AM,
                                    children: ek.intl.string(ek.t["50Nwpc"]),
                                }),
                                (0, l.jsx)(nx.A, { user: n, guildId: t, disabled: r || (g && !p) }),
                                (0, l.jsx)(nA.A, { user: n, guildId: t, disabled: r || (g && !p) }),
                            ],
                        }),
                        p &&
                            (0, l.jsxs)("div", {
                                className: n1.Os,
                                children: [
                                    (0, l.jsx)(nf.D, {
                                        variant: "text-sm/medium",
                                        className: n1.AM,
                                        children: ek.intl.string(ek.t.Zenogr),
                                    }),
                                    (0, l.jsx)(nF, { user: n, guildId: t, disabled: r }),
                                    (0, l.jsx)(nD, { userId: n.id, guildId: t, disabled: r }),
                                ],
                            }),
                        !p &&
                            (0, l.jsxs)("div", {
                                className: n1.Os,
                                children: [
                                    (0, l.jsx)(nf.D, {
                                        variant: "text-sm/medium",
                                        className: n1.AM,
                                        children: ek.intl.string(ek.t["/X3fkf"]),
                                    }),
                                    (0, l.jsx)(ny, { user: n, disabled: r || g }),
                                ],
                            }),
                    ],
                }),
            }),
            !p && (0, l.jsx)(nY, {}),
        ],
    });
}
var n6 = t(982599),
    n4 = t(756634),
    te = t(83013),
    tn = t(77085);
function tt(e) {
    let { userId: n } = e,
        t = (0, ei.g)(),
        { trackUserProfileAction: i } = (0, L.NJ)();
    return (0, l.jsx)(te.A, {
        heading: ek.intl.string(ek.t["mQKv+v"]),
        scrollTargetId: eH.bk.NOTE,
        children: (0, l.jsx)(n4.A, {
            userId: n,
            className: tn.N,
            autoFocus: t === eH.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var tl = t(289873),
    ti = t(778599);
function tr(e) {
    let { isVisible: n, showLoadingSpinner: t, className: i } = e;
    return (0, l.jsx)("div", {
        className: a()(ti.f, n && ti.z, i),
        children: t && (0, l.jsx)(tl.y, { type: tl.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
    });
}
var ta = t(568602),
    ts = t(625494);
function to(e) {
    let { children: n } = e,
        [t, r] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = () => {
                r(!0),
                    setTimeout(() => {
                        r(!1);
                    }, 300);
            };
            return (
                ts._.subscribe(eY.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    ts._.unsubscribe(eY.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, l.jsx)(ta.b, { isShaking: t, intensity: 1.4, children: n })
    );
}
var td = t(515054),
    tu = t(419354),
    tc = t(933832),
    tg = t(972213),
    tm = t(97483),
    tf = t(765178),
    tp = t(775602),
    tx = t(606758),
    tA = t(707238),
    th = t(861173);
let tv = {
        [eH.jM.WIDGET_ADDED]: {
            message: ek.intl.string(ek.t.fFP1Uy),
            icon: (0, l.jsx)(tc.A, { size: "sm", color: ng.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_added",
        },
        [eH.jM.WIDGET_REMOVED]: {
            message: ek.intl.string(ek.t.zzsK7h),
            icon: (0, l.jsx)(tc.A, { size: "sm", color: ng.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_removed",
        },
        [eH.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: ek.intl.string(ek.t["84MExs"]),
            icon: (0, l.jsx)(tg.d, { size: "sm", color: ng.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_save_generic_failure",
            type: tm.Ck.FAILURE,
        },
        [eH.jM.SOMETHING_WENT_WRONG]: {
            message: ek.intl.string(ek.t.F8FvUy),
            icon: (0, l.jsx)(tg.d, { size: "sm", color: ng.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_something_went_wrong",
            type: tm.Ck.FAILURE,
        },
    },
    tj = (e) => {
        let { message: n, icon: t, type: i } = e;
        return (0, l.jsxs)("div", {
            className: a()(th.oR, tA.oR),
            "data-type": i,
            children: [
                (0, l.jsx)("div", { className: tA.RC, children: t }),
                (0, l.jsx)(ey.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
            ],
        });
    },
    tI = (e) => {
        let { className: n } = e,
            t = (0, tx.fu)(),
            r = (0, s.bG)([tp.A], () => tp.A.useReducedMotion),
            [o, u] = i.useState(!1),
            [c, g] = i.useState(null);
        i.useEffect(() => {
            null !== t ? (u(!0), g(tv[t]), tf.O.announce(tv[t].message)) : u(!1);
        }, [t]);
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
            i.useEffect(() => () => (0, tx.XA)(null), []),
            i.useEffect(() => {
                if (o) {
                    let e = setTimeout(() => {
                        (0, tx.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [o]),
            (0, l.jsx)(l.Fragment, {
                children: m(
                    (e, t) =>
                        t &&
                        null !== c &&
                        (0, l.jsx)(tu.animated.div, {
                            className: a()(n, tA.Jt),
                            style: e,
                            children: (0, l.jsx)(tj, { ...c }),
                        }),
                ),
            })
        );
    };
t(321073);
var tb = t(97808),
    tC = t(550079),
    tN = t(477782),
    ty = t(22231),
    tE = t(601255),
    tP = t(562819),
    tR = t(696451),
    tO = t(19575),
    tT = t(106106),
    t_ = t(338165);
let tS = tO.Ay.getEnableHardwareAcceleration() ? tb.Js : tb.eu;
function tD(e) {
    let { onMenuClose: n, items: t, ...i } = e;
    return (0, l.jsx)(tC.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": ek.intl.string(ek.t.YAgq3W),
        children: (0, l.jsx)(tN.rX, { children: t }),
    });
}
function tk(e) {
    let { user: n, guildId: t } = e,
        { avatarProps: r, eventHandlers: o } = (0, ea.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useCallback(() => u(!1), []),
        m = (function (e) {
            let { user: n, guildId: t, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, j.Ay)(),
                d = null != t,
                u = (0, s.bG)([tR.Ay], () => (null != t ? tR.Ay.getMember(t, n.id) : null)),
                c = (0, s.bG)([J.A], () => J.A.getPendingChanges(t ?? void 0).pendingAvatar),
                g = d ? u?.avatar : n.avatar,
                m = (0, q.z5)(c, g),
                f = d && null != n.avatar,
                p = np.Ay.canUsePremiumProfileCustomization(n),
                x = p || null == t,
                A = p || null == t,
                h = (0, s.bG)([n$.A], () => (null != t ? n$.A.getGuild(t) : null)),
                v = (0, q.a4)({ user: n }),
                I = (0, q.a4)({ user: n, guildId: t ?? void 0 }),
                { pendingAvatarDecoration: b } = (0, q.CP)(t ?? void 0),
                C = void 0 !== b,
                N = null != (0, tE.A)(C ? b : I) && (C ? null != b : null != I),
                y = d && null != v,
                E = i.useCallback(() => {
                    r(),
                        (0, nP.XD)({
                            uploadType: nO.HL.AVATAR,
                            analyticsSource: a,
                            guildId: t ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, t]),
                P = i.useCallback(() => {
                    r(), (0, tP.L)({ analyticsLocations: o, guild: h ?? void 0, stackingBehavior: "stack" });
                }, [r, o, h]),
                R = i.useCallback(() => {
                    r(),
                        (0, nP.rM)(null, g, (e) => (0, nC.p)({ guildId: t ?? void 0, avatar: e })),
                        (0, q.WU)(f ? "reset" : "remove");
                }, [r, t, g, f]),
                O = i.useCallback(() => {
                    r(), (0, nC.p)({ guildId: t ?? void 0, avatarDecoration: null });
                }, [r, t]);
            return i.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, l.jsx)(
                                tN.Dr,
                                { id: "change-avatar", label: ek.intl.string(ek.t["4OynCD"]), action: E },
                                "change-avatar",
                            ),
                        ),
                    A &&
                        e.push(
                            (0, l.jsx)(
                                tN.Dr,
                                { id: "change-decoration", label: ek.intl.string(ek.t.BVcYCx), action: P },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        m &&
                        e.push(
                            f
                                ? (0, l.jsx)(
                                      tN.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: ek.intl.string(ek.t.TDjKDm),
                                          action: R,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, l.jsx)(
                                      tN.Dr,
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
                                ? (0, l.jsx)(
                                      tN.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: ek.intl.string(ek.t.JvcEcq),
                                          action: O,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, l.jsx)(
                                      tN.Dr,
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
            }, [f, x, A, y, m, N, E, P, R, O]);
        })({ user: n, guildId: t, onClose: g });
    return 0 === m.length
        ? (0, l.jsx)(ea.A, { ...e })
        : (0, l.jsxs)("div", {
              ...o,
              className: a()(tT.my, tT.vk, t_.kL, { [t_.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, l.jsx)(tS, { ...r, imageClassName: a()(tT.Lw, t_.HU) }),
                  (0, l.jsx)(nj.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: nj.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: g,
                      renderPopout: (e) => (0, l.jsx)(tD, { ...e, items: m, onMenuClose: g }),
                      children: (e) =>
                          (0, l.jsx)("div", {
                              ref: c,
                              className: t_.r9,
                              children: (0, l.jsx)(e9.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: ty.R,
                                  "aria-label": ek.intl.string(ek.t.YAgq3W),
                                  onClick: (e) => {
                                      e.stopPropagation(), u((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var tL = t(617061),
    tM = t(976726);
function tG(e) {
    let { onMenuClose: n, items: t, ...i } = e;
    return (0, l.jsx)(tC.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": ek.intl.string(ek.t.FzU73A),
        children: (0, l.jsx)(tN.rX, { children: t }),
    });
}
function tw(e) {
    let { user: n, guildId: t } = e,
        [r, o] = i.useState(!1),
        d = i.useRef(null),
        u = i.useCallback(() => o(!1), []),
        c = (function (e) {
            let { user: n, guildId: t, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, j.Ay)(),
                d = (0, q.N2)({ user: n, guildId: t ?? void 0 }),
                u = np.Ay.canUsePremiumProfileCustomization(n),
                c = u || null == t,
                g = null != t,
                { pendingBanner: m, pendingProfileEffect: f } = (0, s.bG)([J.A], () =>
                    J.A.getPendingChanges(t ?? void 0),
                ),
                p = (0, s.bG)([M.A], () =>
                    null != t ? M.A.getGuildMemberProfile(n.id, t)?.banner : M.A.getUserProfile(n.id)?.banner,
                ),
                x = (0, s.bG)([nR.default], () => nR.default.getCurrentUser()?.banner != null),
                A = (0, s.bG)([M.A], () => M.A.getUserProfile(n.id)?.profileEffect != null),
                h = (0, q.Ac)(m, p),
                v = g && x,
                I = g && A,
                b = void 0 === f ? null != d : null != f,
                C = i.useCallback(() => {
                    r(),
                        (0, nP.XD)({
                            uploadType: nO.HL.BANNER,
                            analyticsSource: a,
                            guildId: t ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, t]),
                N = i.useCallback(() => {
                    r(),
                        (0, tL.W)({
                            analyticsLocations: o,
                            guild: null != t ? (n$.A.getGuild(t) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                        });
                }, [r, o, t, d]),
                y = i.useCallback(() => {
                    r(), (0, nP.rM)(null, p, (e) => (0, nC.p)({ guildId: t ?? void 0, banner: e }));
                }, [r, t, p]),
                E = i.useCallback(() => {
                    r(), (0, nC.p)({ guildId: t ?? void 0, profileEffect: null });
                }, [r, t]);
            return i.useMemo(() => {
                let e = [];
                return (
                    u &&
                        e.push(
                            (0, l.jsx)(
                                tN.Dr,
                                { id: "change-banner", label: ek.intl.string(ek.t.N0bC3P), action: C },
                                "change-banner",
                            ),
                        ),
                    c &&
                        e.push(
                            (0, l.jsx)(
                                tN.Dr,
                                { id: "change-effect", label: ek.intl.string(ek.t["/dRfCf"]), action: N },
                                "change-effect",
                            ),
                        ),
                    u &&
                        h &&
                        e.push(
                            v
                                ? (0, l.jsx)(
                                      tN.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: ek.intl.string(ek.t.jHlJNS),
                                          action: y,
                                      },
                                      "reset-banner",
                                  )
                                : (0, l.jsx)(
                                      tN.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: ek.intl.string(ek.t.tT9n7D),
                                          action: y,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    c &&
                        b &&
                        e.push(
                            I
                                ? (0, l.jsx)(
                                      tN.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: ek.intl.string(ek.t["SQy/Po"]),
                                          action: E,
                                      },
                                      "reset-effect",
                                  )
                                : (0, l.jsx)(
                                      tN.Dr,
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
            }, [v, u, c, I, h, b, C, N, y, E]);
        })({ user: n, guildId: t, onClose: u });
    return 0 === c.length
        ? (0, l.jsx)(eo.A, { ...e })
        : (0, l.jsxs)("div", {
              className: a()(tM.kL, { [tM.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, l.jsx)(eo.A, { ...e, className: tM.Pr }),
                  (0, l.jsx)(nj.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: nj.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: u,
                      renderPopout: (e) => (0, l.jsx)(tG, { ...e, items: c, onMenuClose: u }),
                      children: (e) =>
                          (0, l.jsx)("div", {
                              ref: d,
                              className: tM.r9,
                              children: (0, l.jsx)(e9.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: ty.R,
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
var tU = t(777480),
    tF = t(107563),
    tV = t(570287);
t(938796);
var tB = t(913453),
    tW = t(667049),
    tz = t(837531),
    tH = t(186272),
    tY = t(645625);
let tK = (e) => e * (2 - e),
    tX = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } };
function tq(e) {
    let { displayProfile: n, pendingBanner: t } = e,
        r = (0, F.Nx)(),
        [a, s] = i.useState(void 0);
    if (
        (i.useEffect(() => {
            if (null == t || r) return;
            let e = !1;
            return (
                el(t, 1024)
                    .then((n) => {
                        e || s(n);
                    })
                    .catch(() => {
                        e || s(t);
                    }),
                () => {
                    (e = !0), s(void 0);
                }
            );
        }, [r, t]),
        r)
    )
        return null;
    let o = null != t ? (a ?? null) : n?.getPreviewBanner(t, !1, 1024);
    return null == o
        ? null
        : (0, l.jsx)("div", { className: tY.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function t$(e) {
    let { displayProfile: n, profileEffectOverride: t, isHovering: i } = e,
        r = void 0 !== t ? t : n?.profileEffect;
    return null == r ? null : (0, l.jsx)(I.A, { skuId: r.skuId, isHovering: i });
}
function tJ(e) {
    let {
            user: n,
            currentUser: t,
            guildId: r,
            originGuildId: o,
            channelId: d,
            displayProfile: g,
            nickname: m,
            hasEntered: f,
            customStatusPrompt: p,
            onClose: x,
            avatarDecorationOverride: h,
            avatarOverride: v,
            bannerOverride: j,
            profileEffectOverride: I,
            allowEditing: b = !1,
            isLoading: C = !1,
        } = e,
        N = n.id === t.id,
        T = i.useRef(null),
        { isHoveringOrFocusing: D } = (0, y.A)(T),
        [L, M] = i.useState(),
        G = i.useCallback((e) => {
            let n = e.contentRect.width;
            n <= 350 ? M("compact-xs") : n <= 380 ? M("compact-sm") : M(void 0);
        }, []);
    (0, A.g)(T, G, [], { fireOnMount: !0 });
    let w = null != L ? tX[L] : void 0,
        U = i.useMemo(() => p ?? (0, E.A)(), [p]),
        { relationshipType: F, originApplicationId: X } = (0, s.cf)([_.A], () => ({
            relationshipType: _.A.getRelationshipType(n.id),
            originApplicationId: _.A.getOriginApplicationId(n.id),
        })),
        q = (0, s.bG)([S.A], () => S.A.hidePersonalInformation),
        $ = (0, R.q)({ userId: n.id }),
        J = (0, P.fi)(n.id),
        { appIdentities: Q, connections: ee } = (function (e) {
            let { filteredAppIdentities: n } = (0, H.A)(e),
                t = (0, K.A)(e),
                l = W.A.useConfig({ location: "useVisibleUserProfileConnectionsAndAppIdentities" }),
                r = i.useMemo(() => new Set(l.enabled ? (n?.map((e) => e.application_id) ?? []) : []), [n, l.enabled]),
                a = (0, z.A)([...r]).filter(Y.Vq);
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
                        l.enabled
                            ? t.filter((e) => {
                                  let n = B.A.get(e.type);
                                  return n?.replacedBy == null || !r.has(n.replacedBy);
                              })
                            : t,
                    [t, r, l.enabled],
                ),
            };
        })(n.id),
        en = (0, V.A)(n.id),
        et = b ? tw : eo.A,
        el = b ? tk : ea.A;
    return (0, l.jsxs)("main", {
        className: a()(tY.profile, null != L && tY[L]),
        ref: T,
        "aria-busy": C,
        children: [
            (0, l.jsxs)("div", {
                className: tY.profileHeader,
                children: [
                    (0, l.jsx)(et, {
                        user: n,
                        displayProfile: g,
                        guildId: r,
                        themeType: Z.d.MODAL_V2,
                        specOverrides: w,
                        pendingBanner: j,
                    }),
                    (0, l.jsx)(ef.A, { userId: n.id, onClose: x, className: tY.interactionToast }),
                    (0, l.jsx)(el, {
                        user: n,
                        displayProfile: g,
                        guildId: r,
                        channelId: d,
                        themeType: Z.d.MODAL_V2,
                        specOverrides: w,
                        avatarDecorationOverride: h,
                        avatarOverride: v,
                    }),
                    (0, l.jsx)(eI.A, {
                        user: n,
                        guildId: r,
                        channelId: d,
                        themeType: Z.d.MODAL_V2,
                        hasEntered: f,
                        prompt: N ? U : null,
                    }),
                ],
            }),
            (0, l.jsxs)(u.Ip, {
                fade: !0,
                className: tY.profileBody,
                children: [
                    (0, l.jsx)(ec.A, { userId: n.id }),
                    (0, l.jsx)(ej.Ay, {
                        user: n,
                        guildId: g?.guildId ?? void 0,
                        displayName: m,
                        displayNameSize: "lg",
                        pronouns: g?.pronouns,
                        onClose: x,
                        trailing: (0, l.jsx)(es.A, { displayProfile: g, themeType: Z.d.MODAL_V2, onClose: x }),
                    }),
                    F === eY.eA$.PENDING_INCOMING &&
                        (0, l.jsx)(ev.A.Overlay, {
                            className: tY.profileOverlay,
                            children: (0, l.jsx)(em.A, {
                                user: n,
                                applicationId: X,
                                guildId: g?.guildId ?? void 0,
                                channelId: d,
                                className: tY.profileBanner,
                            }),
                        }),
                    J.map((e) => {
                        let { applicationId: t } = e;
                        return (0, l.jsx)(
                            ev.A.Overlay,
                            {
                                className: tY.profileOverlay,
                                children: (0, l.jsx)(em.A, {
                                    user: n,
                                    guildId: g?.guildId ?? void 0,
                                    channelId: d,
                                    isGameRelationship: !0,
                                    applicationId: t,
                                    className: tY.profileBanner,
                                }),
                            },
                            t,
                        );
                    }),
                    n.isProvisional &&
                        (0, l.jsx)(ev.A.Overlay, {
                            className: tY.profileOverlay,
                            children: (0, l.jsx)(te.A, {
                                heading: ek.intl.string(ek.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, l.jsx)(c.E, { size: "xs", color: "currentColor" }),
                                className: tY.profileBanner,
                                children: (0, l.jsx)(O.T, { userId: n.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, l.jsx)(eh.A, { user: n, className: tY.profileBanner }),
                    g?.private &&
                        (0, l.jsx)(ev.A.Overlay, {
                            className: tY.profileOverlay,
                            children: (0, l.jsx)(eA.A, { username: m }),
                        }),
                    (0, l.jsx)("div", {
                        className: tY.profileButtons,
                        children: (0, l.jsx)(e5, {
                            user: n,
                            currentUser: t,
                            guildId: r,
                            originGuildId: o,
                            channelId: d,
                            displayProfile: g,
                            relationshipType: F,
                            onClose: x,
                        }),
                    }),
                    N && (0, l.jsx)(eu.A, { isPremiumUser: (0, k.ki)(t), onInteraction: x }),
                    !q && (0, l.jsx)(ed.E, { userBio: g?.bio, setLineClamp: !1 }),
                    $.length > 0 &&
                        (0, l.jsx)(te.A, {
                            heading: ek.intl.string(ek.t["Uv/eTx"]),
                            children: (0, l.jsx)(eg.A, { applicationIds: $ }),
                        }),
                    (0, l.jsx)(te.A, {
                        heading: ek.intl.string(ek.t.a6XYD9),
                        children: (0, l.jsx)(ep.A, { userId: n.id, guildId: g?.guildId, tooltipDelay: eH.In }),
                    }),
                    g?.guildId != null &&
                        (0, l.jsx)(eb.A, {
                            userId: n.id,
                            guildId: g.guildId,
                            className: tY.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "currentColor",
                        }),
                    (ee.length > 0 || Q.length > 0) &&
                        (0, l.jsx)(te.A, {
                            heading: ek.intl.string(ek.t["3fe7U5"]),
                            scrollTargetId: eH.bk.CONNECTIONS,
                            children: (0, l.jsx)(nu, {
                                applicationIdentities: Q,
                                connections: ee,
                                userId: n.id,
                                className: tY.profileAppConnections,
                            }),
                        }),
                    en.length > 0 &&
                        (0, l.jsx)(te.A, {
                            heading: ek.intl.string(ek.t.PHjkRE),
                            scrollTargetId: eH.bk.APPS,
                            children: (0, l.jsx)(eG, {
                                applicationRoleConnections: en,
                                onClose: x,
                                className: tY.profileAppConnections,
                            }),
                        }),
                    (0, l.jsx)(tt, { userId: n.id }),
                ],
            }),
            (0, l.jsx)(t$, { displayProfile: g, profileEffectOverride: I, isHovering: D }),
        ],
    });
}
function tZ(e) {
    let { user: n, displayProfile: t, pendingThemeColors: i, children: r } = e,
        {
            theme: a,
            primaryColor: s,
            secondaryColor: o,
        } = (0, U.A)({ user: n, displayProfile: t, pendingThemeColors: i }),
        { profileThemeStyle: d, profileThemeClassName: u } = (0, X.A)({
            theme: a,
            themeType: null,
            primaryColor: s,
            secondaryColor: o,
        });
    return (0, l.jsx)("div", { className: u, style: d, children: r });
}
function tQ(e) {
    let {
            user: n,
            currentUser: t,
            guildId: r,
            originGuildId: o,
            channelId: u,
            messageId: c,
            roleId: A,
            sessionId: I,
            initialTabSection: y,
            initialScrollTarget: E,
            transitionState: P,
            customStatusPrompt: R,
            openedAt: O,
            onClose: S,
            sourceAnalyticsLocations: k = [],
            themeContainerClassName: U,
        } = e,
        F = n.id === t.id,
        {
            guildId: V,
            pendingGuildId: B,
            isLoading: W,
            selectUserProfile: z,
        } = (function (e) {
            let { userId: n, initialGuildId: t } = e,
                [l, r] = i.useState(t),
                [a, s] = i.useState(t),
                o = i.useRef(a),
                d = i.useCallback((e) => {
                    r(e ?? void 0);
                }, []);
            return (
                i.useEffect(() => {
                    let e = !1;
                    return (
                        (0, et.A)(n, void 0, {
                            type: "modal",
                            guildId: l,
                            withMutualFriendsCount: !0,
                            withMutualFriends: !1,
                            withMutualGuilds: !0,
                        }).then(
                            () => {
                                e || (s(l), (o.current = l));
                            },
                            () => {
                                e || r(o.current);
                            },
                        ),
                        () => {
                            e = !0;
                        }
                    );
                }, [l, n]),
                { guildId: a, pendingGuildId: l, isLoading: l !== a, selectUserProfile: d }
            );
        })({ userId: n.id, initialGuildId: r }),
        H = i.useMemo(() => (null != V ? { [V]: [n.id] } : {}), [V, n.id]);
    (0, h.Eq)(H, "UserProfileModalV2");
    let Y = (0, w.Ay)(n.id, V),
        K = (0, b.A)(Y?.profileFrame?.skuId, "UserProfileModalV2"),
        X = (0, G.X)("UserProfileModalV2"),
        Q = F && X,
        {
            pendingThemeColors: el,
            avatarDecorationOverride: ea,
            avatarOverride: es,
            bannerOverride: eo,
            profileEffectOverride: ed,
        } = (function (e) {
            let { user: n, guildId: t, allowEditingInModal: l } = e;
            return (0, s.cf)([J.A], () => {
                if (!l) return en;
                let {
                    pendingThemeColors: e,
                    pendingAvatarDecoration: i,
                    pendingAvatar: r,
                    pendingBanner: a,
                    pendingProfileEffect: s,
                } = J.A.getPendingChanges(t);
                return {
                    pendingThemeColors: e,
                    avatarDecorationOverride:
                        void 0 === i
                            ? void 0
                            : (0, q.lw)({ userValue: n.avatarDecoration, pendingValue: i, guildId: t }),
                    avatarOverride: (0, $.V7)({ userId: n.id, image: r, size: ee }),
                    bannerOverride: a,
                    profileEffectOverride: s,
                };
            }, [n, t, l]);
        })({ user: n, allowEditingInModal: Q, guildId: V }),
        {
            isExpanded: eu,
            isAnimating: ec,
            transition: eg,
            canShowExpand: em,
            handleExpand: ef,
            handleCollapse: ep,
            refs: { expandIconButtonRef: eA, expandTabButtonRef: eh, collapseButtonRef: ej },
        } = (function () {
            let [e, n] = i.useState(() => window.innerWidth > 928),
                [t, l] = i.useState(!1),
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: tK },
                    onRest: () => l(!1),
                }),
                a = (0, x.A)("(min-width: 929px) and (min-height: 550px)"),
                s = i.useRef(null),
                o = i.useRef(null),
                u = i.useRef(null),
                c = i.useRef(null),
                g = i.useCallback(() => {
                    (c.current = "collapse"), l(!0), n(!0);
                }, []),
                m = i.useCallback(() => {
                    (c.current = "expand"), l(!0), n(!1);
                }, []);
            return (
                i.useEffect(() => {
                    if (!t) {
                        if ("collapse" === c.current && e) (c.current = null), u.current?.focus();
                        else if ("expand" === c.current && !e) {
                            c.current = null;
                            let e = a ? o.current : s.current;
                            e?.focus();
                        }
                    }
                }, [e, t, a]),
                {
                    isExpanded: e,
                    isAnimating: t,
                    transition: r,
                    canShowExpand: !e && !t,
                    handleExpand: g,
                    handleCollapse: m,
                    refs: { expandIconButtonRef: s, expandTabButtonRef: o, collapseButtonRef: u },
                }
            );
        })(),
        eI = Q && em,
        { defaultWishlistId: eb } = (0, s.cf)([M.A], () => ({ defaultWishlistId: M.A.getFirstWishlistId(n.id) }));
    (0, T.fw)({ wishlistId: eb, userId: n.id });
    let eC = (0, er.fC)(),
        eN = W || null != eC.interactionType,
        ey = (function (e) {
            let n,
                t,
                l,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, tB.A)(i),
                d = o?.length,
                u =
                    ((n = (0, s.bG)([nR.default], () => nR.default.getCurrentUser())),
                    (t = (0, s.bG)([M.A], () => M.A.getUserProfile(i.id))),
                    (l =
                        t?.bio === "" &&
                        t?.pronouns === "" &&
                        t?.banner === void 0 &&
                        t?.accentColor === void 0 &&
                        t?.banner === void 0 &&
                        i.flags === i.publicFlags &&
                        (t?.badges == null || t?.badges?.length === 0)),
                    n?.id !== i.id && !l),
                c = (0, tW.A)(i.id),
                g = (0, tV.A)(i.id),
                m = [],
                f = i.id === r?.id,
                p = M.A.getFirstWishlistId(i.id),
                x = null != p,
                A = x ? M.A.getWishlistSettings(i.id, p) : null,
                h = (x ? tF.A.getWishlistItems(p) : []).length > 0,
                v = c.length > 0;
            (f || v) && m.push({ text: ek.intl.string(ek.t.laViwx), section: eH.RP.WIDGETS }),
                m.push({ text: ek.intl.string(ek.t.chq59f), section: eH.RP.ACTIVITY });
            let j = !1 === i.nsfwAllowed,
                I = _.A.isFriend(i.id),
                b = A?.visibility === tU.a.PUBLIC;
            return (
                (f || (!f && h && b && g && (!j || (j && I)))) &&
                    m.push({ text: ek.intl.string(ek.t["7lZ31J"]), section: eH.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (m.push({ text: (0, tz.A)(a), section: eH.RP.MUTUAL_FRIENDS }),
                    m.push({ text: (0, tH.A)(d), section: eH.RP.MUTUAL_GUILDS })),
                m
            );
        })({ user: n, currentUser: t }),
        { analyticsLocations: eE } = (0, j.Ay)([...k, v.A.USER_PROFILE_MODAL_V2]),
        eP = (0, L.pb)({
            layout: "MODAL_V2",
            userId: n.id,
            sourceSessionId: I,
            guildId: V,
            channelId: u,
            messageId: c,
            roleId: A,
        }),
        eR = D.Ay.useName(Y?.guildId, u, n),
        eO = (0, N.GV)(),
        eT = ek.intl.format(ek.t.KRe1Fk, { name: eR });
    return (0, l.jsx)(j.f5, {
        value: eE,
        children: (0, l.jsx)(L.of, {
            value: eP,
            openedAt: O,
            fetchStartedAt: Y?.fetchStartedAt,
            fetchEndedAt: Y?.fetchEndedAt,
            isLoaded: Y?.isLoaded,
            children: (0, l.jsx)(er.Hl, {
                value: eC,
                children: (0, l.jsx)(ei.N, {
                    value: E,
                    children: (0, l.jsxs)(g.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: tY.root,
                        transitionState: P,
                        "aria-labelledby": eO,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, l.jsx)(to, {
                                children: (0, l.jsxs)("div", {
                                    className: a()(tY.layoutContainer, {
                                        [tY.editingPanelEnabled]: Q,
                                        [tY.editingPanelExpanded]: Q && eu,
                                        [tY.isAnimating]: ec,
                                        [tY.hasPrivateBanner]: Y?.private === !0,
                                    }),
                                    children: [
                                        (0, l.jsxs)(tZ, {
                                            user: n,
                                            displayProfile: Y,
                                            pendingThemeColors: el,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: tY.modalHeaderButtons,
                                                    children: [
                                                        (0, l.jsx)(e3, { isCurrentUser: F, onClose: S }),
                                                        (0, l.jsx)(m.A, {
                                                            children: (0, l.jsx)(f.H, { id: eO, children: eT }),
                                                        }),
                                                        Q &&
                                                            (!eu || ec) &&
                                                            (0, l.jsx)(n9, {
                                                                buttonRef: eA,
                                                                onClick: ef,
                                                                className: tY.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eI &&
                                                    (0, l.jsx)(n5, {
                                                        innerRef: eh,
                                                        onClick: ef,
                                                        className: tY.editingPanelExpandButtonDefault,
                                                    }),
                                            ],
                                        }),
                                        (0, l.jsxs)(f.F, {
                                            children: [
                                                Q &&
                                                    eg((e, t) =>
                                                        t
                                                            ? (0, l.jsx)(n3, {
                                                                  className: a()(tY.editingPanel, {
                                                                      [tY.isExpanded]: eu,
                                                                  }),
                                                                  user: n,
                                                                  selectedGuildId: B,
                                                                  onSelectGuildId: z,
                                                                  onClose: ep,
                                                                  collapseButtonRef: ej,
                                                                  isLoading: W,
                                                              })
                                                            : null,
                                                    ),
                                                (0, l.jsxs)(ev.A, {
                                                    className: a()(U, tY.profileContentContainer),
                                                    user: n,
                                                    displayProfile: Y,
                                                    themeType: Z.d.MODAL_V2,
                                                    pendingThemeColors: el,
                                                    privateBanner: Y?.private === !0 ? (0, l.jsx)(ex.A, {}) : void 0,
                                                    children: [
                                                        (0, l.jsx)(tq, { displayProfile: Y, pendingBanner: eo }),
                                                        (0, l.jsx)(tr, { isVisible: eN, showLoadingSpinner: W }),
                                                        (0, l.jsx)(tI, { className: tY.toast }),
                                                        (0, l.jsx)(tJ, {
                                                            user: n,
                                                            currentUser: t,
                                                            guildId: V,
                                                            channelId: u,
                                                            displayProfile: Y,
                                                            nickname: eR,
                                                            originGuildId: o,
                                                            hasEntered: P === p.ip.ENTERED,
                                                            customStatusPrompt: R,
                                                            onClose: S,
                                                            avatarDecorationOverride: ea,
                                                            avatarOverride: es,
                                                            bannerOverride: eo,
                                                            profileEffectOverride: ed,
                                                            allowEditing: Q,
                                                            isLoading: W,
                                                        }),
                                                        (0, l.jsx)(td.A, {
                                                            user: n,
                                                            currentUser: t,
                                                            displayProfile: Y,
                                                            guildId: V,
                                                            channelId: u,
                                                            items: ey,
                                                            initialSection: y,
                                                            onClose: S,
                                                        }),
                                                        null != K && (0, l.jsx)(C.A, { frame: K, layout: "MODAL_V2" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, l.jsx)(n6.A, { userId: n.id, guildId: V, className: tY.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
