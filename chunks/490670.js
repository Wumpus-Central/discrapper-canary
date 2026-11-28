t.d(a, { default: () => eH });
var l = t(477900),
    n = t(582128),
    i = t(731738),
    s = t(855986),
    r = t(935462),
    d = t(231723),
    o = t(815021),
    c = t(289873),
    u = t(534514),
    g = t(834730),
    m = t(821609),
    b = t(913379),
    x = t(100663),
    h = t(403777),
    _ = t(287809),
    v = t(682618),
    f = t(257339),
    j = t(982240);
let y = (0, t(945810).mj)({
    name: "2026-11-badge-social-comparison",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function p(e) {
    let { location: a, autoTrackExposure: t } = e;
    return y.useConfig({ location: a }, { autoTrackExposure: t }).enabled;
}
var N = t(620143),
    E = t(988341),
    A = t(861304),
    I = t(248284),
    C = t(737667);
t(321073);
var T = t(503698),
    U = t.n(T),
    S = t(536001),
    w = t(805251),
    B = t(683071),
    O = t(707554),
    R = t(95362),
    M = t(404778),
    D = t(136969),
    k = t(775602),
    G = t(640708),
    $ = t(780964),
    L = t(766075),
    P = t(515718),
    F = t(240248),
    z = t(49253),
    V = t(792996);
let Y = [V.t["6zFA/T"], V.t.wzZHKl, V.t["+ED/nf"]];
function K() {
    let e = Math.floor(Math.random() * Y.length);
    return V.intl.string(Y[e]);
}
var H = t(153488),
    Z = t(652215),
    J = t(837381),
    q = t(116903),
    Q = t(741918),
    W = t(70283),
    X = t(939249),
    ee = t(97808),
    ea = t(643056),
    et = t(486020),
    el = t(696292),
    en = t(975807),
    ei = t(224689),
    es = t(192308),
    er = t(442928),
    ed = t(475489),
    eo = t(990820),
    ec = t(216934),
    eu = t(976860),
    eg = t(758836),
    em = t(682901);
let eb = {
        [W.$.STAFF]: {
            ctaLabel: () => V.intl.string(V.t.q7A8hP),
            ctaAction: () => (0, en.A)("https://discord.com/careers"),
        },
        [W.$.PREMIUM_TENURE]: {
            ctaLabel: (e) => {
                let { owned: a, isViewerOnUpgradeableNitro: t } = e;
                return !0 === t ? V.intl.string(V.t.uKFeS1) : a ? V.intl.string(V.t.xGjjkd) : V.intl.string(V.t.BTxm69);
            },
            ctaAction: () => (0, eu.pX)(Z.BVt.NITRO_HOME),
        },
        [W.$.GUILD_BOOSTER]: {
            ctaLabel: (e) => {
                let { owned: a } = e;
                return a ? V.intl.string(V.t.VMvz3m) : V.intl.string(V.t.xFVZeU);
            },
            ctaAction: () => (0, L.openUserSettings)($.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
        },
        [W.$.ORB_PROFILE]: {
            ctaLabel: () => V.intl.string(V.t.fG3RIg),
            ctaAction: () => (0, eu.pX)(Z.BVt.COLLECTIBLES_SHOP_WITH_TAB(eg.G2.ORBS)),
        },
        [W.$.QUEST_COMPLETED]: {
            ctaLabel: () => V.intl.string(V.t.swICIT),
            ctaAction: () => (0, ec.m)({ fromContent: el.u.QUEST_BADGE }),
        },
        [W.$.ORB_VOID]: {
            ctaLabel: () => V.intl.string(V.t.IKc5D7),
            ctaAction: () => {
                ((0, er.O4)(),
                    (0, es.mM)(
                        async () => {
                            let { default: e } = await Promise.all([
                                t.e(889880),
                                t.e(999272),
                                t.e(640397),
                                t.e(490028),
                                t.e(511527),
                                t.e(621624),
                                t.e(170653),
                                t.e(784103),
                                t.e(86721),
                                t.e(906723),
                                t.e(280559),
                                t.e(913433),
                                t.e(803748),
                            ]).then(t.bind(t, 578255));
                            return (a) => (0, l.jsx)(e, { ...a });
                        },
                        { modalKey: ed.jK, onCloseCallback: er.sY },
                    ));
            },
            ctaButtonProps: { variant: "expressive", size: "md", fullWidth: !0 },
        },
        [W.$.GIFTING]: {
            ctaLabel: () => V.intl.string(V.t["nUA/JW"]),
            ctaAction: () => (0, eo.A)({ giftingOrigin: em.vQ.BADGE_DIRECTORY }),
        },
    },
    ex = "badge-details";
var eh = t(778712),
    e_ = t(177861);
function ev(e) {
    return `badge-tab-${e}`;
}
function ef(e) {
    let { badge: a, isSelected: t, onSelect: i, itemId: s, showBadgeIndicator: r } = e,
        d = (0, J.rm)(s),
        o = a.owned ? a.current_tier : a.next_tier,
        c =
            null != o
                ? a.tiers.find((e) => {
                      let { key: a } = e;
                      return a === o;
                  })
                : void 0,
        u = a.badge_id === W.$.PREMIUM_TENURE ? (c?.name ?? c?.key) : c?.name,
        g = null != u ? `${a.name}, ${u}` : a.name,
        m = r ? `${g}, ${V.intl.string(V.t.y2b7CA)}` : g,
        b = n.useRef(null);
    return (0, l.jsxs)(X.D, {
        ...d,
        innerRef: b,
        role: "tab",
        id: ev(a.badge_id),
        "aria-label": m,
        "aria-selected": t,
        "aria-controls": t ? ex : void 0,
        className: U()(e_.oL, t && e_.xO),
        onFocus: d.onFocus,
        onClick: () => {
            (b.current?.focus(), i());
        },
        children: [
            r && (0, l.jsx)("span", { "aria-hidden": !0, className: e_.Dn }),
            null != a.simple_icon_url &&
                (0, l.jsx)("img", {
                    src: a.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: e_.pW,
                }),
        ],
    });
}
function ej(e) {
    let { label: a, navId: t, badges: n, selectedBadgeId: i, onSelectBadge: s, badgeIndicatorIds: r } = e,
        d = (0, q.Ay)({
            id: t,
            isEnabled: !0,
            orientation: Q.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, l.jsxs)("div", {
        className: e_.zE,
        children: [
            "heading" === a.type &&
                (0, l.jsx)(u.D, { id: a.id, variant: "heading-xs/medium", color: "text-default", children: a.text }),
            (0, l.jsx)(J.hD, {
                navigator: d,
                children: (0, l.jsx)(J.PR, {
                    children: (e) =>
                        (0, l.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === a.type ? a.id : void 0,
                            "aria-label": "aria" === a.type ? a.text : void 0,
                            className: e_.yq,
                            children: n.map((e, a) => {
                                let t = e.badge_id === i;
                                return (0, l.jsx)(
                                    ef,
                                    {
                                        itemId: `item-${a}`,
                                        badge: e,
                                        isSelected: t,
                                        onSelect: () => s(e.badge_id),
                                        showBadgeIndicator: !t && r.has(e.badge_id),
                                    },
                                    e.badge_id,
                                );
                            }),
                        }),
                }),
            }),
        ],
    });
}
function ey(e) {
    let a,
        {
            selectedBadgeId: t,
            onSelectBadge: i,
            displayedUserId: r,
            isViewingOtherUser: d,
            targetUsername: o,
            onViewOwnCatalog: c,
            onCustomizeBadges: b,
            showBadgeIndicators: x,
        } = e,
        h = (0, s.yK)([j.Ay], () => (null != r ? j.Ay.getBadges(r) : []), [r]),
        { earnable: v, owned: f } = n.useMemo(() => (0, E.in)(h), [h]),
        y = n.useMemo(() => [...f, ...v], [f, v]),
        { badgeIndicatorIds: p } = (0, C.Vv)({ badges: y, enabled: x }),
        A = n.useMemo(() => new Set(x ? y.filter((e) => !0 === e.has_updates).map((e) => e.badge_id) : []), [x, y]),
        I = (0, N.e)({ location: "BadgeDirectoryPanel", hasUnread: A.size > 0 }),
        T = n.useMemo(() => (I ? new Set([...p, ...A]) : p), [I, p, A]),
        U = (function (e, a) {
            let t = (0, s.bG)([_.default], () => (null != e ? _.default.getUser(e) : void 0), [e]);
            if (null != t && a)
                return (0, et.ku)({ id: t.id, avatar: t.avatar, discriminator: t.discriminator }, !1, 48);
        })(r, d),
        S = (0, ea.d)({ location: "BadgeDirectoryPanel" }),
        w = null != o ? ((a = Array.from(o)).length > 19 ? `${a.slice(0, 19).join("")}...` : o) : null,
        B = null != o && w !== o,
        M =
            null != w && B && null != U
                ? (0, l.jsxs)("span", {
                      className: e_._p,
                      children: [(0, l.jsx)(ee.eu, { src: U, size: eh._3.SIZE_24, "aria-hidden": !0 }), w],
                  })
                : w,
        D = d && null != M ? V.intl.format(V.t.EIcwoe, { username: M }) : V.intl.string(V.t.UqnlQF),
        k = d && null != o ? V.intl.string(V.t["75s2Rq"]) : V.intl.string(V.t["62xU4E"]),
        G = d && null != o ? V.intl.formatToPlainString(V.t.BCjSZy, { username: o }) : V.intl.string(V.t.UqnlQF);
    return (0, l.jsx)("div", {
        className: e_.ws,
        children: (0, l.jsxs)(O.F, {
            component: (0, l.jsxs)("div", {
                className: e_.NG,
                children: [
                    (0, l.jsxs)("div", {
                        className: e_.kc,
                        children: [
                            !B && null != U && (0, l.jsx)(ee.eu, { src: U, size: eh._3.SIZE_24, "aria-hidden": !0 }),
                            (0, l.jsx)(u.D, { variant: "heading-lg/semibold", color: "text-strong", children: D }),
                        ],
                    }),
                    (0, l.jsx)(g.E, { variant: "body-sm/medium", color: "text-subtle", children: k }),
                ],
            }),
            children: [
                (0, l.jsxs)(R.Ip, {
                    className: e_.hG,
                    children: [
                        f.length > 0 &&
                            (0, l.jsx)(ej, {
                                label: { type: "aria", text: G },
                                navId: "badge-directory-owned",
                                badges: f,
                                selectedBadgeId: t,
                                onSelectBadge: i,
                                badgeIndicatorIds: T,
                            }),
                        !d &&
                            v.length > 0 &&
                            (0, l.jsx)(ej, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: V.intl.string(V.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: v,
                                selectedBadgeId: t,
                                onSelectBadge: i,
                                badgeIndicatorIds: T,
                            }),
                    ],
                }),
                (d || S) &&
                    (0, l.jsx)("div", {
                        className: e_.HO,
                        children: d
                            ? (0, l.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: c,
                                  text: V.intl.string(V.t.msyp90),
                              })
                            : (0, l.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: b,
                                  text: V.intl.string(V.t["6CLLyH"]),
                              }),
                    }),
            ],
        }),
    });
}
var ep = t(911608),
    eN = t(10583);
function eE(e) {
    let { badge: a, viewerBadge: t } = e,
        i = n.useId(),
        { progress: s, threshold: r, currentArtUrl: d, nextArtUrl: o, helperText: c } = (0, z.dy)(a, t),
        u = null != c ? { "aria-labelledby": i } : { "aria-label": V.intl.string(V.t.Uwhb1l) };
    return (0, l.jsxs)("div", {
        className: eN.NE,
        children: [
            (0, l.jsx)(g.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: V.intl.string(V.t["2m/g2c"]),
            }),
            (0, l.jsxs)("div", {
                className: eN.ES,
                children: [
                    null != d &&
                        (0, l.jsx)("img", { className: eN.Tw, src: d, alt: "", "aria-hidden": !0, draggable: !1 }),
                    (0, l.jsxs)("div", {
                        className: eN.Bd,
                        children: [
                            null != c && (0, l.jsx)(g.E, { id: i, variant: "body-sm/medium", children: c }),
                            null != r
                                ? (0, l.jsx)(ep.z, {
                                      value: s?.current ?? 0,
                                      minValue: s?.floor ?? 0,
                                      maxValue: r,
                                      size: "md",
                                      className: eN.hr,
                                      ...u,
                                  })
                                : null != s &&
                                  (0, l.jsx)(ep.z, { isIndeterminate: !0, size: "md", className: eN.hr, ...u }),
                        ],
                    }),
                    null != o &&
                        (0, l.jsx)("img", { className: eN.Tw, src: o, alt: "", "aria-hidden": !0, draggable: !1 }),
                ],
            }),
        ],
    });
}
var eA = t(824114),
    eI = t(725859);
function eC(e) {
    return e === W.$.GAME_VARIETY || e === W.$.STREAMING || e === W.$.GAME_TIME;
}
function eT(e) {
    if (e.badge_id === W.$.PREMIUM_TENURE || e.badge_id === W.$.GUILD_BOOSTER)
        return (function (e) {
            if ((e.badge_id !== W.$.PREMIUM_TENURE && e.badge_id !== W.$.GUILD_BOOSTER) || null == e.obtained_at)
                return;
            let a = new Date(e.obtained_at);
            if (Number.isNaN(a.getTime())) return;
            let t = new Date(),
                l = (t.getUTCFullYear() - a.getUTCFullYear()) * 12 + t.getUTCMonth() - a.getUTCMonth(),
                n = new Date(a);
            (n.setUTCDate(1), n.setUTCMonth(a.getUTCMonth() + l));
            let i = new Date(Date.UTC(n.getUTCFullYear(), n.getUTCMonth() + 1, 0)).getUTCDate();
            if ((n.setUTCDate(Math.min(a.getUTCDate(), i)), t < n && l--, l < 0)) return;
            let s = Math.floor(l / 12),
                r = l % 12;
            return s > 0 && r > 0
                ? V.intl.formatToPlainString(V.t.X3Qd8c, { years: s, months: r })
                : s > 0
                  ? V.intl.formatToPlainString(V.t.PClsrw, { years: s })
                  : r > 0
                    ? V.intl.formatToPlainString(V.t.kridzK, { months: r })
                    : V.intl.string(V.t["0GsO43"]);
        })(e);
    if (eC(e.badge_id)) {
        let a = (function (e) {
            if (!eC(e.badge_id)) return;
            let a = e.badge_id === W.$.GAME_VARIETY ? eA.m.GAMES : eA.m.HOURS;
            return e.stats?.find((e) => e.unit === a)?.value;
        })(e);
        if (null == a) return;
        return e.badge_id === W.$.GAME_VARIETY
            ? V.intl.formatToPlainString(V.t["r/EUap"], { count: a })
            : V.intl.formatToPlainString(V.t.xCjYxK, { hours: a });
    }
    return (0, F.uJ)(e.info_label) ? void 0 : e.info_label;
}
function eU(e) {
    let { badge: a, tier: t, label: n, avatarUrl: i, username: s, onClick: r } = e,
        d =
            t.simple_icon_url ??
            t.simple_icon_raster_url ??
            t.complex_icon_static_url ??
            a.simple_icon_url ??
            a.complex_icon_static_url,
        o = (0, l.jsxs)(l.Fragment, {
            children: [
                null != i && (0, l.jsx)("img", { className: eI.my, src: i, alt: "", "aria-hidden": !0 }),
                (0, l.jsx)(g.E, {
                    tag: "span",
                    variant: "body-xs/medium",
                    color: "text-subtle",
                    lineClamp: 1,
                    className: eI.Xh,
                    children: s,
                }),
            ],
        });
    return (0, l.jsxs)("div", {
        className: eI.Nr,
        children: [
            null != d && (0, l.jsx)("img", { className: eI.Kk, src: d, alt: "", "aria-hidden": !0, draggable: !1 }),
            (0, l.jsxs)("div", {
                className: eI.Pf,
                children: [
                    (0, l.jsx)(g.E, {
                        variant: "body-xs/semibold",
                        color: "text-default",
                        className: eI.TH,
                        lineClamp: 2,
                        children: n,
                    }),
                    null != r
                        ? (0, l.jsx)("button", {
                              type: "button",
                              className: eI.kQ,
                              "aria-label": `${V.intl.string(V.t.LuZzxn)}: ${V.intl.string(V.t.msyp90)}`,
                              onClick: r,
                              children: o,
                          })
                        : (0, l.jsx)("div", { className: eI.kQ, children: o }),
                ],
            }),
        ],
    });
}
function eS(e) {
    let {
            badge: a,
            viewerBadge: t,
            displayedUserId: n,
            targetUsername: i,
            onViewOwnBadge: r,
            viewerTier: d,
            displayedTier: o,
        } = e,
        c = p({ location: "BadgeSocialComparison" }),
        u = (0, s.bG)([_.default], () => _.default.getCurrentUser()),
        g = (0, s.bG)([_.default], () => (null != n ? _.default.getUser(n) : void 0), [n]);
    if (!c) return null;
    let m = eT(t),
        b = eT(a);
    return null == m || null == b
        ? null
        : (0, l.jsxs)("div", {
              className: eI.V,
              children: [
                  (0, l.jsx)(eU, {
                      badge: t,
                      tier: d,
                      label: m,
                      avatarUrl: u?.getAvatarURL(void 0, 32, !1),
                      username: V.intl.string(V.t.LuZzxn),
                      onClick: r,
                  }),
                  (0, l.jsx)(eU, {
                      badge: a,
                      tier: o,
                      label: b,
                      avatarUrl: g?.getAvatarURL(void 0, 32, !1),
                      username: i ?? g?.username ?? V.intl.string(V.t.KD6OJJ),
                  }),
              ],
          });
}
function ew(e) {
    let { badge: a, viewerBadge: t } = e,
        n = (0, E.YU)(t, t.current_tier),
        i = (0, E.YU)(a, a.current_tier);
    return null == n || null == i ? null : (0, l.jsx)(eS, { ...e, viewerTier: n, displayedTier: i });
}
var eB = t(647729),
    eO = t(873571),
    eR = t(194261),
    eM = t(140735),
    eD = t(836825);
function ek(e) {
    let { badge: a, isViewingOtherUser: t, targetUsername: i, isViewerOnUpgradeableNitro: s = !1 } = e,
        r = n.useId(),
        d = t && null != i;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            d &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(M.c, {}),
                        (0, l.jsx)("div", {
                            className: eD.u4,
                            children: (0, l.jsx)(g.E, {
                                id: r,
                                variant: "body-sm/medium",
                                children: V.intl.formatToPlainString(V.t.KyTwIh, { username: i }),
                            }),
                        }),
                    ],
                }),
            (0, l.jsx)("div", {
                className: eD.SV,
                role: "list",
                "aria-label": d ? void 0 : a.name,
                "aria-labelledby": d ? r : void 0,
                children: a.tiers.map((e) => {
                    let n = e.owned,
                        i = !n && a.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        o = (0, E.Vs)({ tier: e, isUnlocked: n, isViewingOtherUser: t, isViewerOnUpgradeableNitro: s });
                    return (0, l.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: U()(eD.zh, i && eD.ZF),
                            children: [
                                null != r &&
                                    (0, l.jsx)("img", {
                                        className: eD.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, l.jsxs)("div", {
                                    className: eD.hI,
                                    children: [
                                        null != d &&
                                            (0, l.jsx)(g.E, {
                                                variant: "body-xs/semibold",
                                                color: n ? "text-default" : "text-muted",
                                                className: eD.nU,
                                                children: d,
                                            }),
                                        "" !== o &&
                                            (0, l.jsxs)(g.E, {
                                                variant: "body-xs/normal",
                                                color: n ? "text-subtle" : "text-muted",
                                                className: eD.nU,
                                                children: [
                                                    !n &&
                                                        (0, l.jsx)(eR.LockIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: eD.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    o,
                                                ],
                                            }),
                                    ],
                                }),
                                (0, l.jsx)(eM.A, { children: V.intl.string(n ? V.t.sTFApF : V.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var eG = t(260981),
    e$ = t(540418),
    eL = t(907085),
    eP = t(179820),
    eF = t(954080);
function ez() {
    return (0, l.jsx)(G.A, { height: 3, width: 3, "aria-hidden": "true", className: eF.zN });
}
function eV(e) {
    let { segments: a } = e;
    return 0 === a.length
        ? null
        : (0, l.jsx)("div", {
              className: eF.U3,
              children: a.map((e, a) => {
                  let { key: t, node: n } = e;
                  return (0, l.jsxs)("span", { className: eF.Hq, children: [a > 0 && (0, l.jsx)(ez, {}), n] }, t);
              }),
          });
}
function eY(e) {
    let {
            badge: a,
            viewerBadge: t,
            onClose: i,
            isViewingOtherUser: r,
            targetUsername: d,
            displayedUserId: c,
            viewerOwnsBadge: b,
            isSocialComparisonEnabled: x,
            onViewOwnBadge: h,
            onViewOwnCatalog: v,
            isUnread: f = !1,
            unlock: j,
            showNewTag: y = !1,
        } = e,
        p = j ?? a,
        N = j ?? t,
        I = (0, E.DW)(p),
        C = (0, s.bG)([k.Ay], () => k.Ay.useReducedMotion),
        [T, G] = n.useState(null),
        Y = null != j && T?.unlock === j,
        J = Y && T?.isMotionSkipped === !0,
        q = n.useCallback((e) => G(null != j ? { unlock: j, isMotionSkipped: e } : null), [j]),
        Q = !C && (null != j ? !Y : f),
        X = !C && Y,
        ee = n.useMemo(
            () =>
                null != j
                    ? (0, eB.$)({ isLevelUp: null != (0, E.YU)(j, j.previous_acked_tier), isMotionSkipped: J })
                    : void 0,
            [J, j],
        );
    n.useEffect(() => {
        if (!f) return;
        let { previousTier: e, currentTier: a } = (0, eO.VR)(p, p.previous_acked_tier);
        async function t(e) {
            if (null != e)
                try {
                    await (0, P.S4)(e);
                } catch {}
        }
        (t((0, eO.AO)(p, e, !0)), t((0, eO.AO)(p, a, !1)));
    }, [p, f]);
    let { animatedUrl: ea, imageUrl: et } = (0, z.NC)(p, I, C),
        el = I?.rarity ?? p.rarity,
        en =
            (function (e) {
                if (null == e) return null;
                switch (e) {
                    case S.x.COMMON:
                        return {
                            type: { text: V.intl.string(V.t.L0K5ci) },
                            variant: "rarity-common",
                            icon: eG.ExperimentalCommonIcon,
                        };
                    case S.x.RARE:
                        return {
                            type: { text: V.intl.string(V.t["sTx/5z"]) },
                            variant: "rarity-rare",
                            icon: e$.ExperimentalRareIcon,
                        };
                    case S.x.EPIC:
                        return {
                            type: { text: V.intl.string(V.t.RD8RiN) },
                            variant: "rarity-epic",
                            icon: eL.ExperimentalEpicIcon,
                        };
                    case S.x.MYTHIC:
                        return {
                            type: { text: V.intl.string(V.t.vqc1ol) },
                            variant: "rarity-mythic",
                            icon: eP.ExperimentalMythicIcon,
                        };
                    default:
                        return null;
                }
            })(el) ?? void 0,
        es = (function (e) {
            if (e !== W.$.ORB_VOID || ei.T.getConfig({ location: "badge_directory_enter_void_cta" }).enabled)
                return eb[e];
        })(p.badge_id),
        { isNitro: er, eyebrow: ed, displayName: eo } = (0, z.iC)(p, I),
        ec = (0, z.f)(p),
        eu = (p.tiers?.length ?? 0) > 0,
        eg = (function (e) {
            let [a, t] = n.useState(K),
                [l, i] = n.useState(e);
            return (e !== l && (i(e), t(K())), a);
        })(p.badge_id),
        em = (0, z.HA)(p, eg),
        eh = (0, F.uJ)(p.info_label) ? void 0 : p.info_label,
        e_ = p.owned && el !== S.x.COMMON && null != en,
        ef = [];
    (null != eh &&
        ef.push({
            key: "info",
            node: (0, l.jsx)(g.E, {
                tag: "span",
                variant: "body-xs/medium",
                color: "text-subtle",
                className: eF.$L,
                children: eh,
            }),
        }),
        ef.push({
            key: "status",
            node: (0, l.jsx)(g.E, {
                tag: "span",
                variant: "body-xs/medium",
                color: "text-subtle",
                className: eF.$L,
                children: em,
            }),
        }),
        e_ && ef.push({ key: "rarity", node: (0, l.jsx)(w.E, { ...en }) }));
    let ej = _.default.getCurrentUser()?.premiumType,
        ey = (0, z.Rt)(p, ej),
        ep = (0, z.JV)({ badge: p, viewerBadge: N, isViewerOnUpgradeableNitro: ey }),
        eN = n.useCallback(() => {
            null != es &&
                ((0, A.default)({
                    actionName: "primary_badge_action_clicked",
                    badge: p,
                    displayedUserId: c,
                    isSociallyNavigated: r,
                }),
                i(),
                D.A.popAll(),
                es.ctaAction());
        }, [p, c, r, es, i]),
        eA = (0, z.eJ)({ badge: p, isViewingOtherUser: r, viewerOwnsBadge: b })
            ? (0, l.jsx)(B.w, { type: "info", message: V.intl.format(V.t.vFekBs, { onViewBadges: v }), role: "none" })
            : null,
        eI = (function (e) {
            let { badge: a, isViewingOtherUser: t } = e,
                l = (0, s.bG)([H.A], () => H.A.hasConsented(Z.YAq.PERSONALIZATION));
            return (0, E.Jn)(a.badge_id) && !t && !l;
        })({ badge: p, isViewingOtherUser: r }),
        eC =
            r &&
            p.owned &&
            null != p.current_tier &&
            N?.owned === !0 &&
            null != N.current_tier &&
            eu &&
            null != (0, E.YU)(N, N.current_tier) &&
            null != (0, E.YU)(p, p.current_tier),
        eU = x && eC && null != N && null != eT(p) && null != eT(N),
        eS = eU && !er,
        eR = (function (e) {
            let { badge: a, viewerBadge: t, isViewingOtherUser: l } = e,
                n = (0, s.bG)([H.A], () => H.A.hasConsented(Z.YAq.PERSONALIZATION)),
                i = t ?? a,
                r = null != (0, E.YU)(i, i.next_tier),
                d = (0, E.Jn)(a.badge_id) && !n;
            return !l && i.owned && r && !d;
        })({ badge: p, viewerBadge: N, isViewingOtherUser: r }),
        eM = !(0, F.uJ)(ep),
        eD = eR || eM || eu,
        ez = r ? p : (N ?? p),
        eY = es?.ctaButtonProps?.fullWidth === !0;
    return (0, l.jsx)(O.F, {
        forceLevel: 2,
        children: (0, l.jsxs)("div", {
            id: ex,
            role: "tabpanel",
            "aria-labelledby": ev(p.badge_id),
            className: U()(eF.SV, eU && eF.lo),
            style: ee,
            children: [
                (0, l.jsx)("div", { className: eF.Gw, children: (0, l.jsx)(o.J, { onClick: i, size: "sm" }) }),
                (0, l.jsxs)(R.d_, {
                    className: U()(eF.C9, Q && eF.uT, X && eF.CY),
                    children: [
                        (0, l.jsx)("div", {
                            className: U()(eF.Rm, eS && eF._c),
                            children: y
                                ? (0, l.jsx)(w.E, { type: "new", variant: "primary" })
                                : eU
                                  ? (0, l.jsx)(w.E, { type: "beta" })
                                  : null,
                        }),
                        null != j
                            ? (0, l.jsx)(
                                  eB.A,
                                  {
                                      badge: j,
                                      previousTierKey: j.previous_acked_tier,
                                      canStart: !0,
                                      surface: "badge_details",
                                      onStart: q,
                                  },
                                  `${j.badge_id}:${j.current_tier}`,
                              )
                            : null != et &&
                              (0, l.jsx)("img", {
                                  className: U()(eF.y2, null != ea && er && eF.Zl, eS && eF.tE),
                                  src: et,
                                  alt: "",
                                  "aria-hidden": !0,
                                  crossOrigin: f && null == ea ? "anonymous" : void 0,
                                  draggable: !1,
                              }),
                        (0, l.jsxs)("div", {
                            className: U()(eF.OU, eS && eF.bO),
                            children: [
                                (0, l.jsxs)("div", {
                                    className: eF.cQ,
                                    children: [
                                        (null != j || f) &&
                                            !C &&
                                            (0, l.jsx)(u.D, {
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                className: U()(eF.BI, Y && eF.Dp),
                                                "aria-hidden": !0,
                                                children: (0, E.kD)(p, p.previous_acked_tier),
                                            }),
                                        (0, l.jsxs)("div", {
                                            className: eF.nj,
                                            children: [
                                                (0, l.jsxs)(u.D, {
                                                    variant: er ? "nitro-sm" : "display-sm",
                                                    color: "text-strong",
                                                    className: U()(eF._r, er && eF.ve),
                                                    children: [
                                                        null != ed &&
                                                            (0, l.jsx)(g.E, {
                                                                tag: "span",
                                                                variant: "body-sm/medium",
                                                                color: "text-subtle",
                                                                className: eF.$g,
                                                                children: ed,
                                                            }),
                                                        (0, l.jsx)("span", { className: eF.do, children: eo }),
                                                    ],
                                                }),
                                                (0, l.jsx)(eV, { segments: ef }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: eF.oA,
                                    children: [
                                        eC &&
                                            null != N &&
                                            (0, l.jsx)(ew, {
                                                badge: p,
                                                viewerBadge: N,
                                                displayedUserId: c,
                                                targetUsername: d,
                                                onViewOwnBadge: h,
                                            }),
                                        eI &&
                                            (0, l.jsx)(B.w, {
                                                type: "info",
                                                message: V.intl.format(V.t.Zh44ni, {
                                                    onGoToSettings: () =>
                                                        (0, L.openUserSettings)($.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                                }),
                                                role: "none",
                                            }),
                                        eD &&
                                            (0, l.jsxs)("div", {
                                                className: eF.d9,
                                                children: [
                                                    eR &&
                                                        (0, l.jsxs)(l.Fragment, {
                                                            children: [
                                                                (0, l.jsx)(eE, { badge: p, viewerBadge: N }),
                                                                (0, l.jsx)(M.c, {}),
                                                            ],
                                                        }),
                                                    eM &&
                                                        (0, l.jsxs)("div", {
                                                            className: U()(eF.E4, (!eu || eY) && eF.H),
                                                            children: [
                                                                (0, l.jsxs)("div", {
                                                                    className: eF.jv,
                                                                    children: [
                                                                        ec &&
                                                                            (0, l.jsx)(g.E, {
                                                                                variant: "body-xs/medium",
                                                                                color: "text-subtle",
                                                                                className: eF.c$,
                                                                                children: V.intl.string(V.t["/Gmn3f"]),
                                                                            }),
                                                                        (0, l.jsx)(g.E, {
                                                                            variant: "body-sm/medium",
                                                                            color: "text-default",
                                                                            className: eF.ij,
                                                                            children: ep,
                                                                        }),
                                                                    ],
                                                                }),
                                                                null != es &&
                                                                    (0, l.jsx)(m.$, {
                                                                        variant: (0, z.Vg)({
                                                                            isNitro: er,
                                                                            isViewerOnUpgradeableNitro: ey,
                                                                            viewerOwnsBadge: b,
                                                                        }),
                                                                        size: "sm",
                                                                        onClick: eN,
                                                                        text: es.ctaLabel({
                                                                            owned: b,
                                                                            isViewerOnUpgradeableNitro: ey,
                                                                        }),
                                                                        ...es.ctaButtonProps,
                                                                    }),
                                                            ],
                                                        }),
                                                    eu &&
                                                        (0, l.jsx)("div", {
                                                            className: eF.cJ,
                                                            children: (0, l.jsx)(ek, {
                                                                badge: ez,
                                                                isViewingOtherUser: r,
                                                                targetUsername: d,
                                                                isViewerOnUpgradeableNitro: ey,
                                                            }),
                                                        }),
                                                    null != eA && (0, l.jsx)("div", { className: eF.Z6, children: eA }),
                                                ],
                                            }),
                                        !eD && eA,
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
var eK = t(470739);
function eH(e) {
    let {
            transitionState: a,
            onClose: t,
            initialBadgeId: y,
            targetUserId: T,
            targetUsername: U,
            viewingCurrentUserBadges: S,
        } = e,
        w = (0, s.bG)([_.default], () => _.default.getCurrentUser()?.id),
        B = null == T || T === w,
        O = !B && null != T && !0 !== S,
        R = O ? T : w,
        M = null != R ? `viewed_user:${O ? "other" : "self"}` : void 0,
        [D, k] = n.useState(y ?? null),
        G = (0, s.yK)([j.Ay], () => (null != R ? j.Ay.getBadges(R) : []), [R]),
        $ = (0, s.bG)([j.Ay], () => null != R && j.Ay.hasCatalogFor(R), [R]),
        L = (0, s.bG)([j.Ay], () => j.Ay.hasCatalogFetchErrorFor(R), [R]),
        P = (0, s.bG)([j.Ay], () => null != R && !j.Ay.isCatalogStaleFor(R), [R]),
        F = !O && G.some((e) => e.owned && !0 === e.has_updates),
        z = (0, N.e)({ location: "BadgeDirectoryModal", hasUnread: F }),
        Y = p({ location: "BadgeDirectoryModal", autoTrackExposure: !1 });
    (n.useEffect(() => {
        null != R && (!j.Ay.hasCatalogFor(R) || j.Ay.isCatalogStaleFor(R)) && (0, v.RS)(R, { isAutomatic: !0 });
        let e = O ? w : T;
        !B && null != e && (!j.Ay.hasCatalogFor(e) || j.Ay.isCatalogStaleFor(e)) && (0, v.RS)(e, { isAutomatic: !0 });
    }, [R, B, O, w, T]),
        n.useEffect(() => {
            null != M && b.A.increment({ name: i.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [M] });
        }, [M]));
    let K = n.useMemo(() => {
            let { earnable: e, owned: a } = (0, E.in)(G);
            if (O) return a[0]?.badge_id ?? null;
            let t = z ? a.find((e) => !0 === e.has_updates) : void 0;
            return t?.badge_id ?? a[0]?.badge_id ?? e[0]?.badge_id ?? null;
        }, [G, z, O]),
        H = null != D && null != R ? j.Ay.getBadgeById(D, R) : void 0,
        Z = null != K && null != R ? j.Ay.getBadgeById(K, R) : void 0,
        J = H ?? Z,
        q = !$ && !L,
        Q = !$ && L,
        W = !O;
    n.useEffect(() => {
        Q && null != M && b.A.increment({ name: i.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [M] });
    }, [Q, M]);
    let X = (0, s.bG)([j.Ay], () => (null != w && null != J ? j.Ay.getBadgeById(J.badge_id, w) : void 0), [J, w]),
        ee = X?.owned ?? !1,
        ea = n.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, eK.openBadgeDirectoryModal)({ ...e, stackingBehavior: "replace" }).then(() => {
                    t();
                });
            },
            [t],
        ),
        et = n.useCallback(() => {
            null != w &&
                null != T &&
                ((0, A.default)({
                    actionName: "view_your_badges_pressed",
                    badge: J,
                    displayedUserId: R,
                    isSociallyNavigated: O,
                }),
                ea({ targetUserId: T, targetUsername: U, viewingCurrentUserBadges: !0 }));
        }, [w, R, O, J, ea, T, U]),
        el = n.useCallback(() => {
            null != T &&
                null != J &&
                ((0, A.default)({
                    actionName: "view_your_badges_pressed",
                    badge: J,
                    displayedUserId: R,
                    isSociallyNavigated: O,
                }),
                ea({ initialBadgeId: J.badge_id, targetUserId: T, targetUsername: U, viewingCurrentUserBadges: !0 }));
        }, [R, O, J, ea, T, U]),
        en = n.useCallback(() => {
            null != R && (0, v.RS)(R, { isRetry: !0 });
        }, [R]),
        ei = n.useCallback(() => {
            ((0, A.default)({
                actionName: "badge_directory_closed",
                badge: J,
                displayedUserId: R,
                isSociallyNavigated: O,
            }),
                t());
        }, [R, O, t, J]),
        es = n.useCallback(() => {
            null != w &&
                ((0, A.default)({
                    actionName: "customize_your_badges_pressed",
                    badge: J,
                    displayedUserId: R,
                    isSociallyNavigated: O,
                }),
                ei(),
                I.A.setState({ isOpen: !0 }),
                (0, h.kN)(w) || (0, x.openUserProfileModal)({ userId: w }));
        }, [w, R, ei, O, J]),
        er = J?.badge_id;
    (0, C.G5)({ badgeId: er, enabled: W });
    let ed = z && !O && J?.has_updates === !0,
        eo = (0, s.bG)([f.A], () => W && null != er && (0, C.Ce)(er) && !f.A.getSeenBadgeIndicators().has(er), [er, W]),
        [ec, eu] = n.useState(null);
    ec?.badgeId !== er && eu({ badgeId: er, hadNewIndicator: eo });
    let eg = null != ec && ec.badgeId === er && ec.hadNewIndicator,
        em = (0, N.e)({ location: "BadgeDirectoryModal", hasUnread: eg }) && eg,
        eb = a === d.ip.ENTERED && (P || L),
        [ex, eh] = n.useState(null);
    return (
        null != ex && ex.badge_id !== er ? eh(null) : null == ex && ed && eb && null != J && eh({ ...J }),
        n.useEffect(() => {
            null != ex && (k(ex.badge_id), (0, v.zd)(ex.badge_id));
        }, [ex]),
        n.useEffect(() => {
            null != J &&
                (0, A.default)({
                    actionName: "badge_detail_viewed",
                    badge: J,
                    displayedUserId: R,
                    isSociallyNavigated: O,
                    hasUnreadIndicator: ed,
                });
        }, [er, R, O]),
        (0, l.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": V.intl.string(V.t.PEjP4L),
            transitionState: a,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: e_.CR,
            children: (0, l.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: e_.jE,
                children: [
                    (q || Q || null == J) &&
                        (0, l.jsx)("div", { className: e_.b, children: (0, l.jsx)(o.J, { onClick: ei, size: "sm" }) }),
                    q
                        ? (0, l.jsx)("div", { className: e_.Lq, children: (0, l.jsx)(c.y, {}) })
                        : Q
                          ? (0, l.jsxs)("div", {
                                className: e_.IU,
                                children: [
                                    (0, l.jsx)(u.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: V.intl.string(V.t.iufib1),
                                    }),
                                    (0, l.jsx)(g.E, {
                                        variant: "body-sm/medium",
                                        color: "text-subtle",
                                        className: e_.TQ,
                                        children: V.intl.string(V.t.eAn6z2),
                                    }),
                                    (0, l.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: en,
                                        text: V.intl.string(V.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(ey, {
                                        selectedBadgeId: J?.badge_id ?? null,
                                        onSelectBadge: k,
                                        displayedUserId: R,
                                        isViewingOtherUser: O,
                                        targetUsername: U,
                                        onViewOwnCatalog: et,
                                        onCustomizeBadges: es,
                                        showBadgeIndicators: W,
                                    }),
                                    null != J &&
                                        (0, l.jsx)(eY, {
                                            badge: J,
                                            viewerBadge: X,
                                            onClose: ei,
                                            isViewingOtherUser: O,
                                            targetUsername: U,
                                            displayedUserId: R,
                                            viewerOwnsBadge: ee,
                                            isSocialComparisonEnabled: Y,
                                            onViewOwnBadge: el,
                                            onViewOwnCatalog: et,
                                            isUnread: ed,
                                            unlock: ex,
                                            showNewTag: em,
                                        }),
                                ],
                            }),
                ],
            }),
        })
    );
}
