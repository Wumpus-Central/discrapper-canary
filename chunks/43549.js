t.d(n, { A: () => t0 });
var l = t(627968),
    i = t(64700),
    a = t(503698),
    r = t.n(a),
    s = t(17928),
    o = t(778712),
    d = t(866323),
    c = t(364522),
    u = t(695366),
    p = t(935462),
    g = t(140735),
    f = t(707554),
    m = t(231723),
    x = t(241524),
    A = t(770178),
    h = t(80682),
    v = t(793574),
    b = t(688810),
    j = t(480335),
    _ = t(361628),
    I = t(744808),
    C = t(282389),
    N = t(915089),
    y = t(713517),
    E = t(645507),
    P = t(922590),
    R = t(821269),
    O = t(93246),
    S = t(594832),
    T = t(994500),
    D = t(351906),
    k = t(562153),
    L = t(474090),
    M = t(183555),
    G = t(841595),
    w = t(591179),
    B = t(999291),
    U = t(101928),
    F = t(837529),
    V = t(346713),
    W = t(573648),
    z = t(941314),
    H = t(429913),
    Y = t(321078),
    X = t(403362),
    K = t(484509),
    $ = t(920601),
    J = t(919395),
    q = t(101058),
    Z = t(836602),
    Q = t(996988),
    ee = t(985253);
let en = (0, o.FT)(ee.T[Q.d.MODAL_V2].avatarSize),
    et = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        profileEffectOverride: void 0,
    };
var el = t(576622);
async function ei(e, n) {
    let t = new Image();
    await new Promise((n, l) => {
        (t.onload = () => n()), (t.onerror = () => l(Error(`Failed to load image: ${e}`))), (t.src = e);
    });
    let l = null != n ? Math.min(1, n / Math.max(t.naturalWidth, t.naturalHeight)) : 1,
        i = document.createElement("canvas");
    (i.width = Math.round(t.naturalWidth * l)), (i.height = Math.round(t.naturalHeight * l));
    let a = i.getContext("2d");
    if (null == a) throw Error("Canvas 2d context unavailable");
    return a.drawImage(t, 0, 0, i.width, i.height), i.toDataURL("image/png");
}
var ea = t(716804),
    er = t(679492),
    es = t(718019),
    eo = t(694720),
    ed = t(915614),
    ec = t(308244),
    eu = t(744753),
    ep = t(559506),
    eg = t(361311),
    ef = t(886891),
    em = t(439053),
    ex = t(743987),
    eA = t(312381),
    eh = t(501193),
    ev = t(383448),
    eb = t(946356),
    ej = t(878555),
    e_ = t(983495),
    eI = t(280645),
    eC = t(109112),
    eN = t(939249),
    ey = t(834730),
    eE = t(730134),
    eP = t(169869),
    eR = t(837057),
    eO = t(310419),
    eS = t(773669),
    eT = t(889227),
    eD = t(967198),
    ek = t(488995),
    eL = t(985018),
    eM = t(985176);
function eG(e) {
    let { applicationRoleConnection: n, locale: t, onApplicationClicked: i, selectedGuildId: a } = e,
        r = (0, eP.VW)(n, t);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: eM.k_,
                children:
                    null != n.application.bot
                        ? (0, l.jsx)(eE.A, { user: new eT.A(n.application.bot), size: o._3.SIZE_16 })
                        : (0, l.jsx)(eC._, { color: "currentColor", size: "sm" }),
            }),
            (0, l.jsxs)("div", {
                className: eM.Hd,
                children: [
                    (0, l.jsxs)(eN.D, {
                        className: eM.OB,
                        onClick: () => {
                            i?.(),
                                (0, eR.transitionToGlobalDiscovery)({
                                    tab: ek.GlobalDiscoveryTab.APPS,
                                    applicationId: n.application.id,
                                    newSessionState: {
                                        entrypoint: { name: eO.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: a,
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
                                className: eM.nk,
                                children: eL.intl.format(eL.t.zIT9YA, { applicationHook: () => n.application.name }),
                            }),
                        ],
                    }),
                    null != r && r.length > 0 ? (0, l.jsx)("div", { className: eM.yu, children: r }) : null,
                ],
            }),
        ],
    });
}
function ew(e) {
    let { applicationRoleConnections: n, className: t, onClose: i } = e,
        { trackUserProfileAction: a } = (0, M.NJ)(),
        o = (0, s.bG)([eS.default], () => eS.default.locale),
        d = (0, s.bG)([eD.A], () => eD.A.getGuildId());
    return 0 === n.length
        ? null
        : (0, l.jsx)("ul", {
              className: r()(eM.kL, t),
              children: n.map((e, n) =>
                  (0, l.jsx)(
                      "li",
                      {
                          className: eM.FI,
                          children: (0, l.jsx)(eG, {
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
var eB = t(982168),
    eU = t(722868),
    eF = t(822775),
    eV = t(597770),
    eW = t(751188),
    ez = t(746174),
    eH = t(993401),
    eY = t(518477),
    eX = t(652215);
function eK(e) {
    let { user: n, onClose: t } = e,
        { analyticsLocations: a } = (0, b.Ay)(),
        r = (0, ez.j)("UserProfileGiftButton"),
        { openGiftModal: s } = (0, eW.$)({
            giftRecipient: n,
            analyticsLocations: a,
            analyticsObject: {
                page: eX.liQ.USER_PROFILE,
                section: eX.JJy.USER_PROFILE,
                object: eX.ZSU.BUTTON_ICON,
                objectType: eX.AnalyticsObjectTypes.GIFT,
            },
            location: "user-profile-gift-button",
        }),
        o = i.useCallback(() => {
            s(), t?.();
        }, [s, t]);
    return r
        ? (0, l.jsx)(eH.q3, { action: eY.pt.GIFT, icon: eV.o, tooltipText: eL.intl.string(eL.t.PEjaCx), onClick: o })
        : null;
}
var e$ = t(982985),
    eJ = t(700174),
    eq = t(34188),
    eZ = t(693477),
    eQ = t(207803),
    e0 = t(485745);
function e1(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        t = (0, e0.A)(),
        l = i.useRef(e);
    return (
        i.useLayoutEffect(() => {
            l.current = e;
        }),
        i.useCallback(
            function () {
                for (var e = arguments.length, i = Array(e), a = 0; a < e; a++) i[a] = arguments[a];
                n && t ? (0, eQ.VQ)() : l.current(...i);
            },
            [n, t],
        )
    );
}
function e9(e) {
    let { onClose: n, ...t } = e,
        { analyticsLocations: i, newestAnalyticsLocation: a } = (0, b.Ay)(),
        r = e1(() => {
            (0, eZ.Cz)({ analyticsLocations: i, analyticsSource: a }), n?.();
        });
    return (0, l.jsx)(eH.q3, {
        action: "VISIT_SHOP",
        icon: eq.U,
        tooltipText: eL.intl.string(eL.t.b2d0N0),
        onClick: r,
        ...t,
    });
}
var e8 = t(573355),
    e3 = t(102951);
function e7(e) {
    let {
            user: n,
            currentUser: t,
            guildId: i,
            originGuildId: a,
            channelId: r,
            displayProfile: s,
            relationshipType: o,
            onClose: d,
        } = e,
        c = (0, w.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: u } = (0, b.Ay)(),
        p = (0, eU.A)({ user: n, guildId: a, channelId: r, displayProfile: s, onClose: d }),
        {
            gameFriends: g,
            hasOutgoingPendingGameFriends: f,
            hasIncomingPendingGameFriends: m,
        } = (0, e3.J)({ userId: n.id }),
        x = g.length > 0 || f || m;
    return o === eX.eA$.BLOCKED
        ? null
        : n.id === t.id
          ? c
              ? (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(e$.e, { userId: n.id, variant: "primary", disabled: !0 }),
                        (0, l.jsx)(e9, { onClose: d }),
                        (0, l.jsx)(eJ.Zt, { user: n, guildId: i, viewProfileItem: p }),
                    ],
                })
              : (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(eF.A, { user: n, guildId: i, onClose: d }),
                        (0, l.jsx)(e9, { onClose: d }),
                        (0, l.jsx)(eJ.Zt, { user: n, guildId: i, viewProfileItem: p }),
                    ],
                })
          : n.bot
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(e$.e, { userId: n.id, onClose: eB.A.popAll, autoFocus: !0 }),
                      (0, l.jsx)(eJ.Zt, { user: n, guildId: i, viewProfileItem: p }),
                  ],
              })
            : o === eX.eA$.PENDING_INCOMING
              ? (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(e$.e, { userId: n.id, onClose: eB.A.popAll, autoFocus: !0 }),
                        (0, l.jsx)(eK, { user: n }),
                        (0, l.jsx)(eJ.Zt, { user: n, guildId: i }),
                    ],
                })
              : o === eX.eA$.FRIEND || o === eX.eA$.PENDING_OUTGOING
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(e$.e, { userId: n.id, onClose: eB.A.popAll, autoFocus: !0 }),
                          (0, l.jsx)(e8.Ef, { user: n, relationshipType: o, analyticsLocation: u }),
                          (0, l.jsx)(eK, { user: n }),
                          (0, l.jsx)(eJ.Zt, { user: n, guildId: i, viewProfileItem: p }),
                      ],
                  })
                : o === eX.eA$.NONE && x
                  ? (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(e$.e, { userId: n.id, onClose: eB.A.popAll, autoFocus: !0 }),
                            (0, l.jsx)(e8.ES, {
                                user: n,
                                analyticsLocation: u,
                                gameFriends: g,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: m,
                                hasOutgoingPendingGameFriends: f,
                            }),
                            (0, l.jsx)(eK, { user: n }),
                            (0, l.jsx)(eJ.Zt, { user: n, guildId: i, viewProfileItem: p }),
                        ],
                    })
                  : (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(e8.cO, {
                                variant: "primary",
                                userId: n.id,
                                analyticsLocation: u,
                                autoFocus: !0,
                            }),
                            (0, l.jsx)(e$.l, { userId: n.id, onClose: eB.A.popAll, variant: "secondary" }),
                            (0, l.jsx)(eK, { user: n }),
                            (0, l.jsx)(eJ.Zt, { user: n, guildId: i, viewProfileItem: p }),
                        ],
                    });
}
var e2 = t(408278),
    e5 = t(789645);
function e4(e) {
    let { isCurrentUser: n, onClose: t } = e,
        i = e1(t, n);
    return (0, l.jsx)(e2.K, {
        "aria-label": eL.intl.string(eL.t.cpT0Cq),
        icon: e5.P,
        onClick: i,
        variant: "secondary",
        size: "sm",
    });
}
var e6 = t(990078),
    ne = t(349288),
    nn = t(509434),
    nt = t(58149),
    nl = t(681819),
    ni = t(370480),
    na = t(486020),
    nr = t(76843),
    ns = t(783419);
function no(e) {
    let { account: n, locale: t, userId: i } = e,
        a = n.metadata ?? {},
        r = (0, ni.An)(a[ns.pK.CREATED_AT], t),
        s = W.A.get((0, nl.ML)(n.type));
    return (0, l.jsx)(nc, {
        renderAccountName: () => {
            let e = s?.getPlatformUserUrl?.(n);
            return null == e
                ? (0, l.jsx)(e6.m, {
                      overflowOnly: !0,
                      text: n.name,
                      children: (0, l.jsx)(ey.E, { variant: "text-sm/normal", className: eM.GW, children: n.name }),
                  })
                : (0, l.jsx)(ne.Anchor, {
                      href: e,
                      className: eM.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${n.name}, ${eL.intl.string(eL.t.q5jLJB)}`
                              : `${n.name}, ${eL.intl.string(eL.t.q5jLJB)}`,
                      onClick: (t) => {
                          (0, nt.zV)(eX.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: n.type, other_user_id: i }),
                              (0, nr.h)({ href: e, trusted: s?.type !== eX.fg2.DOMAIN }, t);
                      },
                      children: (0, l.jsxs)("div", {
                          className: eM.vi,
                          children: [
                              (0, l.jsx)(e6.m, {
                                  overflowOnly: !0,
                                  text: n.name,
                                  children: (0, l.jsx)(ey.E, {
                                      variant: "text-sm/normal",
                                      className: eM.GW,
                                      children: n.name,
                                  }),
                              }),
                              (0, l.jsx)(nn.I, { size: "xs", color: "currentColor" }),
                          ],
                      }),
                  });
        },
        renderMetadata: () =>
            n.type === eX.fg2.REDDIT
                ? (0, eP.xE)(a)
                : n.type === eX.fg2.STEAM
                  ? (0, eP.dy)(a)
                  : n.type === eX.fg2.BLUESKY || n.type === eX.fg2.MASTODON || n.type === eX.fg2.TWITTER
                    ? (0, eP.ED)(a)
                    : n.type === eX.fg2.PAYPAL
                      ? (0, eP.gZ)(a)
                      : n.type === eX.fg2.EBAY
                        ? (0, eP.ub)(a)
                        : n.type === eX.fg2.TIKTOK
                          ? (0, eP.HU)(a)
                          : null,
        platformIcon: s?.icon.lightPNG,
        platformName: s?.name,
        createdAtDate: r,
    });
}
function nd(e) {
    let { identityWithApplication: n } = e,
        { identity: t, application: i } = n;
    if (null == t.profile || null == t.profile.username || null == i) return null;
    let a = na.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, l.jsx)(nc, {
        renderAccountName: () =>
            (0, l.jsx)(e6.m, {
                overflowOnly: !0,
                text: t.profile.username,
                children: (0, l.jsx)(ey.E, {
                    variant: "text-sm/normal",
                    className: eM.GW,
                    children: t.profile.username,
                }),
            }),
        renderMetadata: () => null,
        platformIcon: a,
        platformName: i.name,
        createdAtDate: void 0,
        applyIconBorderRadius: !0,
    });
}
function nc(e) {
    let {
        renderAccountName: n,
        renderMetadata: t,
        platformName: i,
        platformIcon: a,
        createdAtDate: s,
        applyIconBorderRadius: o = !1,
    } = e;
    return (0, l.jsxs)("li", {
        className: eM.FI,
        children: [
            (0, l.jsx)(e6.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, l.jsx)("div", {
                    className: eM.k_,
                    children: (0, l.jsx)("img", {
                        alt: eL.intl.formatToPlainString(eL.t.rtm15P, { name: i }),
                        className: r()(eM.tV, o ? eM.sN : null),
                        src: a,
                    }),
                }),
            }),
            (0, l.jsxs)("div", {
                className: eM.Hd,
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            n(),
                            null != s &&
                                (0, l.jsx)(ey.E, {
                                    variant: "text-xs/normal",
                                    children: eL.intl.format(eL.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, l.jsx)("div", { className: eM.yu, children: t() }),
                ],
            }),
        ],
    });
}
function nu(e) {
    let { connections: n, applicationIdentities: t, userId: i, className: a } = e,
        o = (0, s.bG)([eS.default], () => eS.default.locale);
    return 0 === n.length && 0 === t.length
        ? null
        : (0, l.jsxs)("ul", {
              className: r()(eM.kL, a),
              children: [
                  n.map((e) => (0, l.jsx)(no, { account: e, userId: i, locale: o }, `${e.type}:${e.id}`)),
                  t?.map((e) => (0, l.jsx)(nd, { identityWithApplication: e }, e.identity.application_id)),
              ],
          });
}
var np = t(200219),
    ng = t(661531),
    nf = t(320448),
    nm = t(534514),
    nx = t(927578),
    nA = t(487233),
    nh = t(230635),
    nv = t(317097),
    nb = t(602853),
    nj = t(922016),
    n_ = t(508274),
    nI = t(654107),
    nC = t(84540),
    nN = t(930349);
function ny(e) {
    let { user: n, disabled: t = !1 } = e,
        a = i.useRef(null),
        r = (0, nb.r)(ng.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, nI.rh)(n.getAvatarURL(null, 80), r, !1),
        { pendingAccentColor: d, savedAccentColor: c } = (0, s.cf)([Z.A, G.A], () => ({
            pendingAccentColor: Z.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: G.A.getUserProfile(n.id)?.accentColor,
        })),
        u = d ?? c ?? (0, nv.LX)(o[0] ?? r),
        p = i.useCallback((e) => (0, nC.p)({ accentColor: e }), []);
    return (0, l.jsx)(nj.Y, {
        targetElementRef: a,
        renderPopout: (e) => (0, l.jsx)(n_.VN, { ...e, value: u, onChange: p, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, l.jsx)(nN.NW, {
                ...e,
                variant: "bar",
                buttonRef: a,
                disabled: t,
                accessibleLabel: eL.intl.string(eL.t["/X3fkf"]),
                children: (0, l.jsx)("div", {
                    style: { width: "100%", height: "100%", backgroundColor: (0, nv.Hl)(u) },
                }),
            }),
    });
}
var nE = t(450373),
    nP = t(252732),
    nR = t(287809),
    nO = t(339984),
    nS = t(111242);
function nT(e) {
    let { backgroundColor: n } = e;
    return (0, l.jsx)("div", { className: nS.o, style: { backgroundColor: n } });
}
function nD(e) {
    let { src: n } = e;
    return (0, l.jsx)("img", { src: n, alt: "", className: nS._ });
}
function nk(e) {
    let { userId: n, guildId: t, disabled: i } = e,
        { newestAnalyticsLocation: a } = (0, b.Ay)(),
        r = null != t,
        o = (0, B.Ay)(n, t),
        d = (0, s.bG)([Z.A], () => Z.A.getPendingChanges(t ?? void 0).pendingBanner),
        c = (0, s.bG)([nR.default], () => nR.default.getCurrentUser()?.banner != null),
        u = (0, s.bG)([G.A], () =>
            null != t ? G.A.getGuildMemberProfile(n, t)?.banner : G.A.getUserProfile(n)?.banner,
        ),
        p = null === d,
        g = void 0 !== d,
        f = r && (o?.isUsingGuildMemberBanner() ?? !1),
        m = p && r ? c : (0, J.Ac)(d, o?.banner),
        x = r ? f : o?.banner != null,
        A = g ? null != d : x,
        h = o?.getPreviewBanner(p && r && !f ? void 0 : d, !1, 296) ?? void 0,
        v = (0, nb.r)(ng.A.unsafe_rawColors.PRIMARY_800).hex(),
        j = o?.primaryColor ?? (0, nv.LX)(v),
        { hex: _ } = (0, nE.A)(j),
        I = () =>
            (0, nP.XD)({
                uploadType: nO.HL.BANNER,
                analyticsSource: a,
                guildId: t ?? void 0,
                stackingBehavior: "stack",
            }),
        C = null != h ? (0, l.jsx)(nD, { src: h }) : (0, l.jsx)(nT, { backgroundColor: _ });
    if (!m)
        return (0, l.jsx)(nN.kL, {
            variant: "square",
            onClick: I,
            accessibleLabel: eL.intl.string(eL.t.N0bC3P),
            disabled: i,
            children: C,
        });
    let N = r && c,
        y = A
            ? {
                  onClick: () => (0, nP.rM)(null, u, (e) => (0, nC.p)({ guildId: t ?? void 0, banner: e })),
                  type: N ? "reset" : "remove",
                  accessibleLabel: eL.intl.string(N ? eL.t.jHlJNS : eL.t.tT9n7D),
              }
            : void 0;
    return (0, l.jsx)(nN.NW, {
        variant: "square",
        onClick: I,
        accessibleLabel: eL.intl.string(eL.t.N0bC3P),
        deleteButtonConfig: y,
        disabled: i,
        children: C,
    });
}
var nL = t(473219),
    nM = t(33851),
    nG = t.n(nM),
    nw = t(298387);
function nB(e) {
    let { color: n, suggestedColors: t, disabled: a, ariaLabel: r, onSelect: s } = e,
        o = i.useRef(null),
        d = (0, nv.Hl)(n);
    return (0, l.jsx)(nj.Y, {
        targetElementRef: o,
        renderPopout: (e) => (0, l.jsx)(n_.VN, { ...e, value: n, onChange: s, suggestedColors: t, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: n, ...t } = e;
            return (0, l.jsx)(eN.D, {
                ...t,
                innerRef: o,
                className: nw.Dh,
                onClick: a ? void 0 : n,
                "aria-label": r,
                "aria-disabled": a,
                tabIndex: a ? -1 : 0,
                children: (0, l.jsx)("div", { className: nw.Hy, style: { backgroundColor: d } }),
            });
        },
    });
}
function nU(e) {
    let {
            primaryColor: n,
            secondaryColor: t,
            onSelectPrimaryColor: i,
            onSelectSecondaryColor: a,
            suggestedColors: r,
            disabled: s = !1,
        } = e,
        o = (0, nv.Hl)(n),
        d = (0, nv.Hl)(t),
        c = `linear-gradient(to bottom, ${o}, ${d})`,
        u = eL.intl.formatToPlainString(eL.t.FquTfm, { colorLabel: o }),
        p = eL.intl.formatToPlainString(eL.t.xOnm4z, { colorLabel: d });
    return (0, l.jsx)(nN.Yt, {
        variant: "square",
        disabled: s,
        children: (0, l.jsxs)("div", {
            className: nw.D7,
            style: { background: c },
            children: [
                (0, l.jsx)(nB, { color: n, suggestedColors: r, ariaLabel: u, onSelect: i, disabled: s }),
                (0, l.jsx)(nB, { color: t, suggestedColors: r, ariaLabel: p, onSelect: a, disabled: s }),
            ],
        }),
    });
}
function nF(e) {
    let { user: n, guildId: t, disabled: a = !1 } = e,
        r = (0, B.Ay)(n.id, t),
        { pendingThemeColors: o, pendingAvatar: d } = (0, s.cf)([Z.A], () => {
            let e = Z.A.getPendingChanges(t ?? void 0);
            return { pendingThemeColors: e.pendingThemeColors, pendingAvatar: e.pendingAvatar };
        }),
        c = (0, q.V7)({ userId: n.id, image: d }),
        { primaryColor: u, secondaryColor: p } = (0, U.A)({
            user: n,
            displayProfile: r,
            pendingThemeColors: o,
            pendingAvatarSrc: c ?? void 0,
            isPreview: !0,
        }),
        g = (0, nb.r)(ng.A.unsafe_rawColors.PRIMARY_530).hex(),
        f = null != c ? c : n.getAvatarURL(t ?? void 0, 80),
        m = (0, nI.rh)(f, g, !1),
        x = i.useCallback(
            (e) => {
                let n = nG()(e, r?.themeColors);
                (0, nC.p)({ guildId: t ?? void 0, themeColors: n ? void 0 : e });
            },
            [r?.themeColors, t],
        );
    return null == u || null == p
        ? null
        : (0, l.jsx)(nU, {
              primaryColor: u,
              secondaryColor: p,
              onSelectPrimaryColor: (e) => {
                  e !== u && x([e, p]);
              },
              onSelectSecondaryColor: (e) => {
                  e !== p && x([u, e]);
              },
              suggestedColors: m,
              disabled: a,
          });
}
var nV = t(315629),
    nW = t(821609),
    nz = t(403581),
    nH = t(835071),
    nY = t(235684);
function nX() {
    let e = () => {
        (0, nH.K)({ stackingBehavior: "stack" });
    };
    return (0, l.jsxs)(nV.h, {
        color: "nitro-pink",
        className: nY.k,
        children: [
            (0, l.jsx)(ey.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eL.intl.format(eL.t.TmfgI2, { onClick: e }),
            }),
            (0, l.jsx)(nW.$, {
                variant: "expressive",
                size: "md",
                icon: nz.t,
                text: eL.intl.string(eL.t.pj0XBN),
                onClick: e,
                fullWidth: !0,
            }),
        ],
    });
}
t(667532);
var nK = t(111159),
    n$ = t(783878),
    nJ = t(548118),
    nq = t(71393),
    nZ = t(711014),
    nQ = t(308696);
let n0 = "MAIN_PROFILE";
function n1(e) {
    let { selectedGuildId: n, onChange: t, loading: a } = e,
        r = (0, s.bG)([nZ.Ay], () => nZ.Ay.getFlattenedGuildIds()),
        o = (0, s.bG)([nq.A], () => nq.A.getGuilds()),
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
                              leading: (0, l.jsx)(nJ.Ay, {
                                  className: nQ.$,
                                  guild: n,
                                  size: nJ.Ay.Sizes.SMALLER,
                                  active: !0,
                              }),
                          };
                })
                .filter(X.Vq);
            return (
                e.unshift({
                    id: n0,
                    label: eL.intl.string(eL.t["2p07FR"]),
                    value: n0,
                    leading: (0, l.jsx)(nK.p, { size: "sm", color: ng.A.colors.ICON_DEFAULT, "aria-hidden": !0 }),
                }),
                e
            );
        }, [r, o]),
        c = i.useCallback(
            (e) => {
                t(e === n0 ? null : e);
            },
            [t],
        );
    return (0, l.jsx)(n$.Z, {
        label: eL.intl.string(eL.t.rki38K),
        hideLabel: !0,
        selectionMode: "single",
        onSelectionChange: c,
        value: n ?? n0,
        options: d,
        loading: a,
    });
}
var n9 = t(809467);
let n8 = "profile-modal-editing-panel",
    n3 = "profile-modal-editing-panel-heading";
function n7(e) {
    let { onClick: n, className: t, innerRef: i } = e;
    return (0, l.jsx)(eN.D, {
        innerRef: i,
        "aria-label": eL.intl.string(eL.t.N8XQDE),
        "aria-expanded": !1,
        "aria-controls": n8,
        className: r()(n9.eg, t),
        onClick: n,
        focusProps: { offset: { right: 6 } },
        children: (0, l.jsx)(np.N, { size: "sm", color: ng.A.colors.ICON_STRONG }),
    });
}
function n2(e) {
    let { onClick: n, className: t, buttonRef: i } = e;
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsx)(e2.K, {
            buttonRef: i,
            "aria-label": eL.intl.string(eL.t.N8XQDE),
            "aria-expanded": !1,
            "aria-controls": n8,
            icon: np.N,
            onClick: n,
            variant: "secondary",
            size: "sm",
        }),
    });
}
function n5(e) {
    let { onClick: n, innerRef: t } = e;
    return (0, l.jsxs)(eN.D, {
        innerRef: t,
        className: n9.cS,
        "aria-label": eL.intl.string(eL.t.X6NklS),
        onClick: n,
        "aria-controls": n8,
        "aria-expanded": !0,
        children: [
            (0, l.jsx)(nf._, { size: "md", color: "currentColor" }),
            (0, l.jsx)(nf._, { size: "md", color: "currentColor" }),
        ],
    });
}
function n4(e) {
    let {
            user: n,
            selectedGuildId: t,
            onSelectGuildId: i,
            isLoading: a = !1,
            onClose: s,
            className: o,
            collapseButtonRef: d,
        } = e,
        u = e1(i),
        p = null != t,
        m = nx.Ay.canUsePremiumProfileCustomization(n);
    return (0, l.jsxs)("aside", {
        id: n8,
        "aria-labelledby": n3,
        className: r()(n9.nd, o),
        "aria-busy": a,
        children: [
            (0, l.jsx)(g.A, { children: (0, l.jsx)(f.H, { id: n3, children: eL.intl.string(eL.t["L+ch00"]) }) }),
            (0, l.jsxs)("div", {
                className: n9.wx,
                children: [
                    (0, l.jsx)(n5, { innerRef: d, onClick: s }),
                    (0, l.jsx)(n1, { selectedGuildId: t ?? null, onChange: u, loading: a }),
                ],
            }),
            (0, l.jsx)(f.F, {
                children: (0, l.jsxs)(c.Ip, {
                    className: n9.XG,
                    fade: !0,
                    children: [
                        (0, l.jsxs)("div", {
                            className: n9.Os,
                            children: [
                                (0, l.jsx)(nm.D, {
                                    variant: "text-sm/medium",
                                    className: n9.AM,
                                    children: eL.intl.string(eL.t.x5CoXR),
                                }),
                                (0, l.jsx)(nL.A, { user: n, guildId: t, disabled: a || (p && !m) }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: n9.Os,
                            children: [
                                (0, l.jsx)(nm.D, {
                                    variant: "text-sm/medium",
                                    className: n9.AM,
                                    children: eL.intl.string(eL.t["50Nwpc"]),
                                }),
                                (0, l.jsx)(nA.A, { user: n, guildId: t, disabled: a || (p && !m) }),
                                (0, l.jsx)(nh.A, { user: n, guildId: t, disabled: a || (p && !m) }),
                            ],
                        }),
                        m &&
                            (0, l.jsxs)("div", {
                                className: n9.Os,
                                children: [
                                    (0, l.jsx)(nm.D, {
                                        variant: "text-sm/medium",
                                        className: n9.AM,
                                        children: eL.intl.string(eL.t.Zenogr),
                                    }),
                                    (0, l.jsx)(nF, { user: n, guildId: t, disabled: a }),
                                    (0, l.jsx)(nk, { userId: n.id, guildId: t, disabled: a }),
                                ],
                            }),
                        !m &&
                            (0, l.jsxs)("div", {
                                className: n9.Os,
                                children: [
                                    (0, l.jsx)(nm.D, {
                                        variant: "text-sm/medium",
                                        className: n9.AM,
                                        children: eL.intl.string(eL.t["/X3fkf"]),
                                    }),
                                    (0, l.jsx)(ny, { user: n, disabled: a || p }),
                                ],
                            }),
                    ],
                }),
            }),
            !m && (0, l.jsx)(nX, {}),
        ],
    });
}
var n6 = t(982599),
    te = t(756634),
    tn = t(83013),
    tt = t(77085);
function tl(e) {
    let { userId: n } = e,
        t = (0, ea.g)(),
        { trackUserProfileAction: i } = (0, M.NJ)();
    return (0, l.jsx)(tn.A, {
        heading: eL.intl.string(eL.t["mQKv+v"]),
        scrollTargetId: eY.bk.NOTE,
        children: (0, l.jsx)(te.A, {
            userId: n,
            className: tt.N,
            autoFocus: t === eY.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var ti = t(289873),
    ta = t(778599);
function tr(e) {
    let { isVisible: n, showLoadingSpinner: t, className: i } = e;
    return (0, l.jsx)("div", {
        className: r()(ta.f, n && ta.z, i),
        children: t && (0, l.jsx)(ti.y, { type: ti.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
    });
}
var ts = t(568602),
    to = t(625494);
function td(e) {
    let { children: n } = e,
        [t, a] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = () => {
                a(!0),
                    setTimeout(() => {
                        a(!1);
                    }, 300);
            };
            return (
                to._.subscribe(eX.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    to._.unsubscribe(eX.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, l.jsx)(ts.b, { isShaking: t, intensity: 1.4, children: n })
    );
}
var tc = t(515054),
    tu = t(419354),
    tp = t(933832),
    tg = t(972213),
    tf = t(97483),
    tm = t(765178),
    tx = t(775602),
    tA = t(606758),
    th = t(707238),
    tv = t(861173);
let tb = {
        [eY.jM.WIDGET_ADDED]: {
            message: eL.intl.string(eL.t.fFP1Uy),
            icon: (0, l.jsx)(tp.A, { size: "sm", color: ng.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_added",
        },
        [eY.jM.WIDGET_REMOVED]: {
            message: eL.intl.string(eL.t.zzsK7h),
            icon: (0, l.jsx)(tp.A, { size: "sm", color: ng.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_removed",
        },
        [eY.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eL.intl.string(eL.t["84MExs"]),
            icon: (0, l.jsx)(tg.d, { size: "sm", color: ng.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_save_generic_failure",
            type: tf.Ck.FAILURE,
        },
        [eY.jM.SOMETHING_WENT_WRONG]: {
            message: eL.intl.string(eL.t.F8FvUy),
            icon: (0, l.jsx)(tg.d, { size: "sm", color: ng.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_something_went_wrong",
            type: tf.Ck.FAILURE,
        },
    },
    tj = (e) => {
        let { message: n, icon: t, type: i } = e;
        return (0, l.jsxs)("div", {
            className: r()(tv.oR, th.oR),
            "data-type": i,
            children: [
                (0, l.jsx)("div", { className: th.RC, children: t }),
                (0, l.jsx)(ey.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
            ],
        });
    },
    t_ = (e) => {
        let { className: n } = e,
            t = (0, tA.fu)(),
            a = (0, s.bG)([tx.A], () => tx.A.useReducedMotion),
            [o, c] = i.useState(!1),
            [u, p] = i.useState(null);
        i.useEffect(() => {
            null !== t ? (c(!0), p(tb[t]), tm.O.announce(tb[t].message)) : c(!1);
        }, [t]);
        let g = (0, d.p)(
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
            i.useEffect(() => () => (0, tA.XA)(null), []),
            i.useEffect(() => {
                if (o) {
                    let e = setTimeout(() => {
                        (0, tA.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [o]),
            (0, l.jsx)(l.Fragment, {
                children: g(
                    (e, t) =>
                        t &&
                        null !== u &&
                        (0, l.jsx)(tu.animated.div, {
                            className: r()(n, th.Jt),
                            style: e,
                            children: (0, l.jsx)(tj, { ...u }),
                        }),
                ),
            })
        );
    };
t(321073);
var tI = t(97808),
    tC = t(550079),
    tN = t(477782),
    ty = t(22231),
    tE = t(601255),
    tP = t(562819),
    tR = t(696451),
    tO = t(19575),
    tS = t(106106),
    tT = t(338165);
let tD = tO.Ay.getEnableHardwareAcceleration() ? tI.Js : tI.eu;
function tk(e) {
    let { onMenuClose: n, items: t, ...i } = e;
    return (0, l.jsx)(tC.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": eL.intl.string(eL.t.YAgq3W),
        children: (0, l.jsx)(tN.rX, { children: t }),
    });
}
function tL(e) {
    let { user: n, guildId: t } = e,
        { avatarProps: a, eventHandlers: o } = (0, es.V)(e),
        [d, c] = i.useState(!1),
        u = i.useRef(null),
        p = i.useCallback(() => c(!1), []),
        g = (function (e) {
            let { user: n, guildId: t, onClose: a } = e,
                { newestAnalyticsLocation: r, analyticsLocations: o } = (0, b.Ay)(),
                d = null != t,
                c = (0, s.bG)([tR.Ay], () => (null != t ? tR.Ay.getMember(t, n.id) : null)),
                u = (0, s.bG)([Z.A], () => Z.A.getPendingChanges(t ?? void 0).pendingAvatar),
                p = d ? c?.avatar : n.avatar,
                g = (0, J.z5)(u, p),
                f = d && null != n.avatar,
                m = nx.Ay.canUsePremiumProfileCustomization(n),
                x = m || null == t,
                A = m || null == t,
                h = (0, s.bG)([nq.A], () => (null != t ? nq.A.getGuild(t) : null)),
                v = (0, J.a4)({ user: n }),
                j = (0, J.a4)({ user: n, guildId: t ?? void 0 }),
                { pendingAvatarDecoration: _ } = (0, J.CP)(t ?? void 0),
                I = void 0 !== _,
                C = null != (0, tE.A)(I ? _ : j) && (I ? null != _ : null != j),
                N = d && null != v,
                y = i.useCallback(() => {
                    a(),
                        (0, nP.XD)({
                            uploadType: nO.HL.AVATAR,
                            analyticsSource: r,
                            guildId: t ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [a, r, t]),
                E = i.useCallback(() => {
                    a(), (0, tP.L)({ analyticsLocations: o, guild: h ?? void 0, stackingBehavior: "stack" });
                }, [a, o, h]),
                P = i.useCallback(() => {
                    a(),
                        (0, nP.rM)(null, p, (e) => (0, nC.p)({ guildId: t ?? void 0, avatar: e })),
                        (0, J.WU)(f ? "reset" : "remove");
                }, [a, t, p, f]),
                R = i.useCallback(() => {
                    a(), (0, nC.p)({ guildId: t ?? void 0, avatarDecoration: null });
                }, [a, t]);
            return i.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, l.jsx)(
                                tN.Dr,
                                { id: "change-avatar", label: eL.intl.string(eL.t["4OynCD"]), action: y },
                                "change-avatar",
                            ),
                        ),
                    A &&
                        e.push(
                            (0, l.jsx)(
                                tN.Dr,
                                { id: "change-decoration", label: eL.intl.string(eL.t.BVcYCx), action: E },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        g &&
                        e.push(
                            f
                                ? (0, l.jsx)(
                                      tN.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.TDjKDm),
                                          action: P,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, l.jsx)(
                                      tN.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.twB3fz),
                                          action: P,
                                      },
                                      "remove-avatar",
                                  ),
                        ),
                    A &&
                        C &&
                        e.push(
                            N
                                ? (0, l.jsx)(
                                      tN.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.JvcEcq),
                                          action: R,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, l.jsx)(
                                      tN.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.OrokWm),
                                          action: R,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [f, x, A, N, g, C, y, E, P, R]);
        })({ user: n, guildId: t, onClose: p });
    return 0 === g.length
        ? (0, l.jsx)(es.A, { ...e })
        : (0, l.jsxs)("div", {
              ...o,
              className: r()(tS.my, tS.vk, tT.kL, { [tT.MO]: d }),
              onMouseDown: (e) => {
                  u.current?.contains(e.target) || c(!0);
              },
              children: [
                  (0, l.jsx)(tD, { ...a, imageClassName: r()(tS.Lw, tT.HU) }),
                  (0, l.jsx)(nj.Y, {
                      targetElementRef: u,
                      shouldShow: d,
                      animation: nj.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: p,
                      renderPopout: (e) => (0, l.jsx)(tk, { ...e, items: g, onMenuClose: p }),
                      children: (e) =>
                          (0, l.jsx)("div", {
                              ref: u,
                              className: tT.r9,
                              children: (0, l.jsx)(e2.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: ty.R,
                                  "aria-label": eL.intl.string(eL.t.YAgq3W),
                                  onClick: (e) => {
                                      e.stopPropagation(), c((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var tM = t(617061),
    tG = t(976726);
function tw(e) {
    let { onMenuClose: n, items: t, ...i } = e;
    return (0, l.jsx)(tC.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": eL.intl.string(eL.t.FzU73A),
        children: (0, l.jsx)(tN.rX, { children: t }),
    });
}
function tB(e) {
    let { user: n, guildId: t } = e,
        [a, o] = i.useState(!1),
        d = i.useRef(null),
        c = i.useCallback(() => o(!1), []),
        u = (function (e) {
            let { user: n, guildId: t, onClose: a } = e,
                { newestAnalyticsLocation: r, analyticsLocations: o } = (0, b.Ay)(),
                d = (0, J.N2)({ user: n, guildId: t ?? void 0 }),
                c = nx.Ay.canUsePremiumProfileCustomization(n),
                u = c || null == t,
                p = null != t,
                { pendingBanner: g, pendingProfileEffect: f } = (0, s.bG)([Z.A], () =>
                    Z.A.getPendingChanges(t ?? void 0),
                ),
                m = (0, s.bG)([G.A], () =>
                    null != t ? G.A.getGuildMemberProfile(n.id, t)?.banner : G.A.getUserProfile(n.id)?.banner,
                ),
                x = (0, s.bG)([nR.default], () => nR.default.getCurrentUser()?.banner != null),
                A = (0, s.bG)([G.A], () => G.A.getUserProfile(n.id)?.profileEffect != null),
                h = (0, J.Ac)(g, m),
                v = p && x,
                j = p && A,
                _ = void 0 === f ? null != d : null != f,
                I = i.useCallback(() => {
                    a(),
                        (0, nP.XD)({
                            uploadType: nO.HL.BANNER,
                            analyticsSource: r,
                            guildId: t ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [a, r, t]),
                C = i.useCallback(() => {
                    a(),
                        (0, tM.W)({
                            analyticsLocations: o,
                            guild: null != t ? (nq.A.getGuild(t) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                        });
                }, [a, o, t, d]),
                N = i.useCallback(() => {
                    a(), (0, nP.rM)(null, m, (e) => (0, nC.p)({ guildId: t ?? void 0, banner: e }));
                }, [a, t, m]),
                y = i.useCallback(() => {
                    a(), (0, nC.p)({ guildId: t ?? void 0, profileEffect: null });
                }, [a, t]);
            return i.useMemo(() => {
                let e = [];
                return (
                    c &&
                        e.push(
                            (0, l.jsx)(
                                tN.Dr,
                                { id: "change-banner", label: eL.intl.string(eL.t.N0bC3P), action: I },
                                "change-banner",
                            ),
                        ),
                    u &&
                        e.push(
                            (0, l.jsx)(
                                tN.Dr,
                                { id: "change-effect", label: eL.intl.string(eL.t["/dRfCf"]), action: C },
                                "change-effect",
                            ),
                        ),
                    c &&
                        h &&
                        e.push(
                            v
                                ? (0, l.jsx)(
                                      tN.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.jHlJNS),
                                          action: N,
                                      },
                                      "reset-banner",
                                  )
                                : (0, l.jsx)(
                                      tN.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.tT9n7D),
                                          action: N,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    u &&
                        _ &&
                        e.push(
                            j
                                ? (0, l.jsx)(
                                      tN.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eL.intl.string(eL.t["SQy/Po"]),
                                          action: y,
                                      },
                                      "reset-effect",
                                  )
                                : (0, l.jsx)(
                                      tN.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.uMuafO),
                                          action: y,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    e
                );
            }, [v, c, u, j, h, _, I, C, N, y]);
        })({ user: n, guildId: t, onClose: c });
    return 0 === u.length
        ? (0, l.jsx)(ed.A, { ...e })
        : (0, l.jsxs)("div", {
              className: r()(tG.kL, { [tG.MO]: a }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, l.jsx)(ed.A, { ...e, className: tG.Pr }),
                  (0, l.jsx)(nj.Y, {
                      targetElementRef: d,
                      shouldShow: a,
                      animation: nj.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, l.jsx)(tw, { ...e, items: u, onMenuClose: c }),
                      children: (e) =>
                          (0, l.jsx)("div", {
                              ref: d,
                              className: tG.r9,
                              children: (0, l.jsx)(e2.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: ty.R,
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
var tU = t(777480),
    tF = t(107563),
    tV = t(570287);
t(938796);
var tW = t(913453),
    tz = t(667049),
    tH = t(837531),
    tY = t(186272),
    tX = t(645625);
let tK = (e) => e * (2 - e),
    t$ = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } };
function tJ(e) {
    let { displayProfile: n, pendingBanner: t } = e,
        a = (0, F.Nx)(),
        [r, s] = i.useState(void 0);
    if (
        (i.useEffect(() => {
            if (null == t || a) return;
            let e = !1;
            return (
                ei(t, 1024)
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
        }, [a, t]),
        a)
    )
        return null;
    let o = null != t ? (r ?? null) : n?.getPreviewBanner(t, !1, 1024);
    return null == o
        ? null
        : (0, l.jsx)("div", { className: tX.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function tq(e) {
    let { displayProfile: n, profileEffectOverride: t, isHovering: i } = e,
        a = void 0 !== t ? t : n?.profileEffect;
    return null == a ? null : (0, l.jsx)(j.A, { skuId: a.skuId, isHovering: i });
}
function tZ(e) {
    let {
            user: n,
            currentUser: t,
            guildId: a,
            originGuildId: o,
            channelId: d,
            displayProfile: p,
            nickname: g,
            hasEntered: f,
            customStatusPrompt: m,
            onClose: x,
            avatarDecorationOverride: h,
            avatarOverride: v,
            bannerOverride: b,
            profileEffectOverride: j,
            allowEditing: _ = !1,
            isLoading: I = !1,
        } = e,
        C = n.id === t.id,
        N = i.useRef(null),
        { isHoveringOrFocusing: S } = (0, y.A)(N),
        [k, M] = i.useState(),
        G = i.useCallback((e) => {
            let n = e.contentRect.width;
            n <= 350 ? M("compact-xs") : n <= 380 ? M("compact-sm") : M(void 0);
        }, []);
    (0, A.g)(N, G, [], { fireOnMount: !0 });
    let w = null != k ? t$[k] : void 0,
        B = i.useMemo(() => m ?? (0, E.A)(), [m]),
        { relationshipType: U, originApplicationId: F } = (0, s.cf)([T.A], () => ({
            relationshipType: T.A.getRelationshipType(n.id),
            originApplicationId: T.A.getOriginApplicationId(n.id),
        })),
        $ = (0, s.bG)([D.A], () => D.A.hidePersonalInformation),
        J = (0, R.q)({ userId: n.id }),
        q = (0, P.fi)(n.id),
        { appIdentities: Z, connections: ee } = (function (e) {
            let { filteredAppIdentities: n } = (0, Y.A)(e),
                t = (0, K.A)(e),
                l = z.A.useConfig({ location: "useVisibleUserProfileConnectionsAndAppIdentities" }),
                a = i.useMemo(() => new Set(l.enabled ? (n?.map((e) => e.application_id) ?? []) : []), [n, l.enabled]),
                r = (0, H.A)([...a]).filter(X.Vq);
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
                        l.enabled
                            ? t.filter((e) => {
                                  let n = W.A.get(e.type);
                                  return n?.replacedBy == null || !a.has(n.replacedBy);
                              })
                            : t,
                    [t, a, l.enabled],
                ),
            };
        })(n.id),
        en = (0, V.A)(n.id),
        et = _ ? tB : ed.A,
        el = _ ? tL : es.A;
    return (0, l.jsxs)("main", {
        className: r()(tX.profile, null != k && tX[k]),
        ref: N,
        "aria-busy": I,
        children: [
            (0, l.jsxs)("div", {
                className: tX.profileHeader,
                children: [
                    (0, l.jsx)(et, {
                        user: n,
                        displayProfile: p,
                        guildId: a,
                        themeType: Q.d.MODAL_V2,
                        specOverrides: w,
                        pendingBanner: b,
                    }),
                    (0, l.jsx)(em.A, { userId: n.id, onClose: x, className: tX.interactionToast }),
                    (0, l.jsx)(el, {
                        user: n,
                        displayProfile: p,
                        guildId: a,
                        channelId: d,
                        themeType: Q.d.MODAL_V2,
                        specOverrides: w,
                        avatarDecorationOverride: h,
                        avatarOverride: v,
                    }),
                    (0, l.jsx)(e_.A, {
                        user: n,
                        guildId: a,
                        channelId: d,
                        themeType: Q.d.MODAL_V2,
                        hasEntered: f,
                        prompt: C ? B : null,
                    }),
                ],
            }),
            (0, l.jsxs)(c.Ip, {
                fade: !0,
                className: tX.profileBody,
                children: [
                    (0, l.jsx)(ep.A, { userId: n.id }),
                    (0, l.jsx)(ej.Ay, {
                        user: n,
                        guildId: p?.guildId ?? void 0,
                        displayName: g,
                        displayNameSize: "lg",
                        pronouns: p?.pronouns,
                        onClose: x,
                        trailing: (0, l.jsx)(eo.A, { displayProfile: p, themeType: Q.d.MODAL_V2, onClose: x }),
                    }),
                    U === eX.eA$.PENDING_INCOMING &&
                        (0, l.jsx)(eb.A.Overlay, {
                            className: tX.profileOverlay,
                            children: (0, l.jsx)(ef.A, {
                                user: n,
                                applicationId: F,
                                guildId: p?.guildId ?? void 0,
                                channelId: d,
                                className: tX.profileBanner,
                            }),
                        }),
                    q.map((e) => {
                        let { applicationId: t } = e;
                        return (0, l.jsx)(
                            eb.A.Overlay,
                            {
                                className: tX.profileOverlay,
                                children: (0, l.jsx)(ef.A, {
                                    user: n,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: d,
                                    isGameRelationship: !0,
                                    applicationId: t,
                                    className: tX.profileBanner,
                                }),
                            },
                            t,
                        );
                    }),
                    n.isProvisional &&
                        (0, l.jsx)(eb.A.Overlay, {
                            className: tX.profileOverlay,
                            children: (0, l.jsx)(tn.A, {
                                heading: eL.intl.string(eL.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, l.jsx)(u.E, { size: "xs", color: "currentColor" }),
                                className: tX.profileBanner,
                                children: (0, l.jsx)(O.T, { userId: n.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, l.jsx)(ev.A, { user: n, className: tX.profileBanner }),
                    p?.private &&
                        (0, l.jsx)(eb.A.Overlay, {
                            className: tX.profileOverlay,
                            children: (0, l.jsx)(eh.A, { username: g }),
                        }),
                    (0, l.jsx)("div", {
                        className: tX.profileButtons,
                        children: (0, l.jsx)(e7, {
                            user: n,
                            currentUser: t,
                            guildId: a,
                            originGuildId: o,
                            channelId: d,
                            displayProfile: p,
                            relationshipType: U,
                            onClose: x,
                        }),
                    }),
                    C && (0, l.jsx)(eu.A, { isPremiumUser: (0, L.ki)(t), onInteraction: x }),
                    !$ && (0, l.jsx)(ec.E, { userBio: p?.bio, setLineClamp: !1 }),
                    J.length > 0 &&
                        (0, l.jsx)(tn.A, {
                            heading: eL.intl.string(eL.t["Uv/eTx"]),
                            children: (0, l.jsx)(eg.A, { applicationIds: J }),
                        }),
                    (0, l.jsx)(tn.A, {
                        heading: eL.intl.string(eL.t.a6XYD9),
                        children: (0, l.jsx)(ex.A, { userId: n.id, guildId: p?.guildId, tooltipDelay: eY.In }),
                    }),
                    p?.guildId != null &&
                        (0, l.jsx)(eI.A, {
                            userId: n.id,
                            guildId: p.guildId,
                            className: tX.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "currentColor",
                        }),
                    (ee.length > 0 || Z.length > 0) &&
                        (0, l.jsx)(tn.A, {
                            heading: eL.intl.string(eL.t["3fe7U5"]),
                            scrollTargetId: eY.bk.CONNECTIONS,
                            children: (0, l.jsx)(nu, {
                                applicationIdentities: Z,
                                connections: ee,
                                userId: n.id,
                                className: tX.profileAppConnections,
                            }),
                        }),
                    en.length > 0 &&
                        (0, l.jsx)(tn.A, {
                            heading: eL.intl.string(eL.t.PHjkRE),
                            scrollTargetId: eY.bk.APPS,
                            children: (0, l.jsx)(ew, {
                                applicationRoleConnections: en,
                                onClose: x,
                                className: tX.profileAppConnections,
                            }),
                        }),
                    (0, l.jsx)(tl, { userId: n.id }),
                ],
            }),
            (0, l.jsx)(tq, { displayProfile: p, profileEffectOverride: j, isHovering: S }),
        ],
    });
}
function tQ(e) {
    let { user: n, displayProfile: t, pendingThemeColors: i, children: a } = e,
        {
            theme: r,
            primaryColor: s,
            secondaryColor: o,
        } = (0, U.A)({ user: n, displayProfile: t, pendingThemeColors: i }),
        { profileThemeStyle: d, profileThemeClassName: c } = (0, $.A)({
            theme: r,
            themeType: null,
            primaryColor: s,
            secondaryColor: o,
        });
    return (0, l.jsx)("div", { className: c, style: d, children: a });
}
function t0(e) {
    let {
            user: n,
            currentUser: t,
            guildId: a,
            originGuildId: o,
            channelId: c,
            messageId: u,
            roleId: A,
            sessionId: j,
            initialTabSection: y,
            initialScrollTarget: E,
            transitionState: P,
            customStatusPrompt: R,
            openedAt: O,
            onClose: D,
            sourceAnalyticsLocations: L = [],
            themeContainerClassName: U,
        } = e,
        F = n.id === t.id,
        {
            guildId: V,
            pendingGuildId: W,
            isLoading: z,
            selectUserProfile: H,
        } = (function (e) {
            let { userId: n, initialGuildId: t } = e,
                [l, a] = i.useState(t),
                [r, s] = i.useState(t),
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
                            guildId: l,
                            withMutualFriendsCount: !0,
                            withMutualFriends: !1,
                            withMutualGuilds: !0,
                        }).then(
                            () => {
                                e || (s(l), (o.current = l));
                            },
                            () => {
                                e || a(o.current);
                            },
                        ),
                        () => {
                            e = !0;
                        }
                    );
                }, [l, n]),
                { guildId: r, pendingGuildId: l, isLoading: l !== r, selectUserProfile: d }
            );
        })({ userId: n.id, initialGuildId: a }),
        Y = i.useMemo(() => (null != V ? { [V]: [n.id] } : {}), [V, n.id]);
    (0, h.Eq)(Y, "UserProfileModalV2");
    let X = (0, B.Ay)(n.id, V),
        K = (0, _.A)(X?.profileFrame?.skuId, "UserProfileModalV2"),
        $ = (0, C.A)(X?.profileFrame?.skuId),
        ee = (0, w.X)("UserProfileModalV2"),
        ei = F && ee,
        {
            pendingThemeColors: es,
            avatarDecorationOverride: eo,
            avatarOverride: ed,
            bannerOverride: ec,
            profileEffectOverride: eu,
        } = (function (e) {
            let { user: n, guildId: t, allowEditingInModal: l } = e;
            return (0, s.cf)([Z.A], () => {
                if (!l) return et;
                let {
                    pendingThemeColors: e,
                    pendingAvatarDecoration: i,
                    pendingAvatar: a,
                    pendingBanner: r,
                    pendingProfileEffect: s,
                } = Z.A.getPendingChanges(t);
                return {
                    pendingThemeColors: e,
                    avatarDecorationOverride:
                        void 0 === i
                            ? void 0
                            : (0, J.lw)({ userValue: n.avatarDecoration, pendingValue: i, guildId: t }),
                    avatarOverride: (0, q.V7)({ userId: n.id, image: a, size: en }),
                    bannerOverride: r,
                    profileEffectOverride: s,
                };
            }, [n, t, l]);
        })({ user: n, allowEditingInModal: ei, guildId: V }),
        {
            isExpanded: ep,
            isAnimating: eg,
            transition: ef,
            canShowExpand: em,
            handleExpand: ex,
            handleCollapse: eh,
            refs: { expandIconButtonRef: ev, expandTabButtonRef: ej, collapseButtonRef: e_ },
        } = (function () {
            let [e, n] = i.useState(() => window.innerWidth > 928),
                [t, l] = i.useState(!1),
                a = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: tK },
                    onRest: () => l(!1),
                }),
                r = (0, x.A)("(min-width: 929px) and (min-height: 550px)"),
                s = i.useRef(null),
                o = i.useRef(null),
                c = i.useRef(null),
                u = i.useRef(null),
                p = i.useCallback(() => {
                    (u.current = "collapse"), l(!0), n(!0);
                }, []),
                g = i.useCallback(() => {
                    (u.current = "expand"), l(!0), n(!1);
                }, []);
            return (
                i.useEffect(() => {
                    if (!t) {
                        if ("collapse" === u.current && e) (u.current = null), c.current?.focus();
                        else if ("expand" === u.current && !e) {
                            u.current = null;
                            let e = r ? o.current : s.current;
                            e?.focus();
                        }
                    }
                }, [e, t, r]),
                {
                    isExpanded: e,
                    isAnimating: t,
                    transition: a,
                    canShowExpand: !e && !t,
                    handleExpand: p,
                    handleCollapse: g,
                    refs: { expandIconButtonRef: s, expandTabButtonRef: o, collapseButtonRef: c },
                }
            );
        })(),
        eI = ei && em,
        { defaultWishlistId: eC } = (0, s.cf)([G.A], () => ({ defaultWishlistId: G.A.getFirstWishlistId(n.id) }));
    (0, S.fw)({ wishlistId: eC, userId: n.id });
    let eN = (0, er.fC)(),
        ey = z || null != eN.interactionType,
        eE = (function (e) {
            let n,
                t,
                l,
                { user: i, currentUser: a } = e,
                { mutualFriendsCount: r, mutualGuilds: o } = (0, tW.A)(i),
                d = o?.length,
                c =
                    ((n = (0, s.bG)([nR.default], () => nR.default.getCurrentUser())),
                    (t = (0, s.bG)([G.A], () => G.A.getUserProfile(i.id))),
                    (l =
                        t?.bio === "" &&
                        t?.pronouns === "" &&
                        t?.banner === void 0 &&
                        t?.accentColor === void 0 &&
                        t?.banner === void 0 &&
                        i.flags === i.publicFlags &&
                        (t?.badges == null || t?.badges?.length === 0)),
                    n?.id !== i.id && !l),
                u = (0, tz.A)(i.id),
                p = (0, tV.A)(i.id),
                g = [],
                f = i.id === a?.id,
                m = G.A.getFirstWishlistId(i.id),
                x = null != m,
                A = x ? G.A.getWishlistSettings(i.id, m) : null,
                h = (x ? tF.A.getWishlistItems(m) : []).length > 0,
                v = u.length > 0;
            (f || v) && g.push({ text: eL.intl.string(eL.t.laViwx), section: eY.RP.WIDGETS }),
                g.push({ text: eL.intl.string(eL.t.chq59f), section: eY.RP.ACTIVITY });
            let b = !1 === i.nsfwAllowed,
                j = T.A.isFriend(i.id),
                _ = A?.visibility === tU.a.PUBLIC;
            return (
                (f || (!f && h && _ && p && (!b || (b && j)))) &&
                    g.push({ text: eL.intl.string(eL.t["7lZ31J"]), section: eY.RP.WISHLIST }),
                i.id !== a?.id &&
                    c &&
                    (g.push({ text: (0, tH.A)(r), section: eY.RP.MUTUAL_FRIENDS }),
                    g.push({ text: (0, tY.A)(d), section: eY.RP.MUTUAL_GUILDS })),
                g
            );
        })({ user: n, currentUser: t }),
        { analyticsLocations: eP } = (0, b.Ay)([...L, v.A.USER_PROFILE_MODAL_V2]),
        eR = (0, M.pb)({
            layout: "MODAL_V2",
            userId: n.id,
            sourceSessionId: j,
            guildId: V,
            channelId: c,
            messageId: u,
            roleId: A,
        }),
        eO = k.Ay.useName(X?.guildId, c, n),
        eS = (0, N.GV)(),
        eT = eL.intl.format(eL.t.KRe1Fk, { name: eO });
    return (0, l.jsx)(b.f5, {
        value: eP,
        children: (0, l.jsx)(M.of, {
            value: eR,
            openedAt: O,
            fetchStartedAt: X?.fetchStartedAt,
            fetchEndedAt: X?.fetchEndedAt,
            isLoaded: X?.isLoaded,
            children: (0, l.jsx)(er.Hl, {
                value: eN,
                children: (0, l.jsx)(ea.N, {
                    value: E,
                    children: (0, l.jsxs)(p.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: tX.root,
                        transitionState: P,
                        "aria-labelledby": eS,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, l.jsx)(td, {
                                children: (0, l.jsxs)("div", {
                                    className: r()(tX.layoutContainer, $, {
                                        [tX.editingPanelEnabled]: ei,
                                        [tX.editingPanelExpanded]: ei && ep,
                                        [tX.isAnimating]: eg,
                                        [tX.hasPrivateBanner]: X?.private === !0,
                                    }),
                                    children: [
                                        (0, l.jsxs)(tQ, {
                                            user: n,
                                            displayProfile: X,
                                            pendingThemeColors: es,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: tX.modalHeaderButtons,
                                                    children: [
                                                        (0, l.jsx)(e4, { isCurrentUser: F, onClose: D }),
                                                        (0, l.jsx)(g.A, {
                                                            children: (0, l.jsx)(f.H, { id: eS, children: eT }),
                                                        }),
                                                        ei &&
                                                            (!ep || eg) &&
                                                            (0, l.jsx)(n2, {
                                                                buttonRef: ev,
                                                                onClick: ex,
                                                                className: tX.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eI &&
                                                    (0, l.jsx)(n7, {
                                                        innerRef: ej,
                                                        onClick: ex,
                                                        className: tX.editingPanelExpandButtonDefault,
                                                    }),
                                            ],
                                        }),
                                        (0, l.jsxs)(f.F, {
                                            children: [
                                                ei &&
                                                    ef((e, t) =>
                                                        t
                                                            ? (0, l.jsx)(n4, {
                                                                  className: r()(tX.editingPanel, {
                                                                      [tX.isExpanded]: ep,
                                                                  }),
                                                                  user: n,
                                                                  selectedGuildId: W,
                                                                  onSelectGuildId: H,
                                                                  onClose: eh,
                                                                  collapseButtonRef: e_,
                                                                  isLoading: z,
                                                              })
                                                            : null,
                                                    ),
                                                (0, l.jsxs)(eb.A, {
                                                    className: r()(U, tX.profileContentContainer),
                                                    user: n,
                                                    displayProfile: X,
                                                    themeType: Q.d.MODAL_V2,
                                                    pendingThemeColors: es,
                                                    isPrivate: X?.private === !0,
                                                    children: [
                                                        (0, l.jsx)(tJ, { displayProfile: X, pendingBanner: ec }),
                                                        X?.private === !0 && (0, l.jsx)(eA.A, {}),
                                                        (0, l.jsx)(tr, { isVisible: ey, showLoadingSpinner: z }),
                                                        (0, l.jsx)(t_, { className: tX.toast }),
                                                        (0, l.jsxs)("div", {
                                                            className: tX.profileCard,
                                                            children: [
                                                                (0, l.jsx)(tZ, {
                                                                    user: n,
                                                                    currentUser: t,
                                                                    guildId: V,
                                                                    channelId: c,
                                                                    displayProfile: X,
                                                                    nickname: eO,
                                                                    originGuildId: o,
                                                                    hasEntered: P === m.ip.ENTERED,
                                                                    customStatusPrompt: R,
                                                                    onClose: D,
                                                                    avatarDecorationOverride: eo,
                                                                    avatarOverride: ed,
                                                                    bannerOverride: ec,
                                                                    profileEffectOverride: eu,
                                                                    allowEditing: ei,
                                                                    isLoading: z,
                                                                }),
                                                                null != K &&
                                                                    (0, l.jsx)(I.A, { frame: K, layout: "MODAL_V2" }),
                                                            ],
                                                        }),
                                                        (0, l.jsx)(tc.A, {
                                                            user: n,
                                                            currentUser: t,
                                                            displayProfile: X,
                                                            guildId: V,
                                                            channelId: c,
                                                            items: eE,
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
                            (0, l.jsx)(n6.A, { userId: n.id, guildId: V, className: tX.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
