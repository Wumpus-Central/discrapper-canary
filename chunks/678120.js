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
    y = t(257339),
    j = t(982240),
    f = t(620143),
    N = t(988341),
    p = t(129230),
    E = t(652215);
function A(e) {
    let {
            actionName: a,
            badge: t,
            displayedUserId: l,
            isSociallyNavigated: n,
            hasUnreadIndicator: i,
            source: s,
            surface: r,
        } = e,
        d = _.default.getCurrentUser()?.id,
        o = null != t && null != d ? j.Ay.getBadgeById(t.badge_id, d) : void 0,
        c = null != t && null != d ? j.Ay.getRemainingToNextTier(t.badge_id, d) : void 0,
        u = null != l ? j.Ay.getBadges(l).filter((e) => e.owned).length : void 0;
    p.default.track(E.HAw.BADGE_DIRECTORY_ACTION, {
        badge_action: a,
        badge_id: t?.badge_id,
        badge_tier: null != t ? ((t.owned ? t.current_tier : t.next_tier) ?? t.tiers?.[0]?.key) : void 0,
        badge_owner_id: l,
        is_owned: o?.owned ?? !1,
        progress_to_next_tier: c,
        is_earnable: t?.is_earnable ?? !1,
        is_socially_navigated: n,
        total_badges_owned: u,
        has_unread_indicator: i,
        surface: r,
        source: s,
    });
}
var I = t(248284),
    C = t(737667);
t(321073);
var T = t(503698),
    U = t.n(T),
    S = t(536001),
    w = t(805251),
    R = t(683071),
    B = t(707554),
    O = t(95362),
    D = t(404778),
    M = t(136969),
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
    J = t(837381),
    Z = t(116903),
    q = t(741918),
    Q = t(70283),
    W = t(939249),
    X = t(97808),
    ee = t(643056),
    ea = t(486020),
    et = t(696292),
    el = t(975807),
    en = t(224689),
    ei = t(192308),
    es = t(442928),
    er = t(475489),
    ed = t(990820),
    eo = t(216934),
    ec = t(976860),
    eu = t(758836),
    eg = t(682901);
let em = {
        [Q.$.STAFF]: {
            ctaLabel: () => V.intl.string(V.t.q7A8hP),
            ctaAction: () => (0, el.A)("https://discord.com/careers"),
        },
        [Q.$.PREMIUM_TENURE]: {
            ctaLabel: (e) => {
                let { owned: a, isViewerOnUpgradeableNitro: t } = e;
                return !0 === t ? V.intl.string(V.t.uKFeS1) : a ? V.intl.string(V.t.xGjjkd) : V.intl.string(V.t.BTxm69);
            },
            ctaAction: () => (0, ec.pX)(E.BVt.NITRO_HOME),
        },
        [Q.$.GUILD_BOOSTER]: {
            ctaLabel: (e) => {
                let { owned: a } = e;
                return a ? V.intl.string(V.t.VMvz3m) : V.intl.string(V.t.xFVZeU);
            },
            ctaAction: () => (0, L.openUserSettings)($.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
        },
        [Q.$.ORB_PROFILE]: {
            ctaLabel: () => V.intl.string(V.t.fG3RIg),
            ctaAction: () => (0, ec.pX)(E.BVt.COLLECTIBLES_SHOP_WITH_TAB(eu.G2.ORBS)),
        },
        [Q.$.QUEST_COMPLETED]: {
            ctaLabel: () => V.intl.string(V.t.swICIT),
            ctaAction: () => (0, eo.m)({ fromContent: et.u.QUEST_BADGE }),
        },
        [Q.$.ORB_VOID]: {
            ctaLabel: () => V.intl.string(V.t.IKc5D7),
            ctaAction: () => {
                ((0, es.O4)(),
                    (0, ei.mM)(
                        async () => {
                            let { default: e } = await Promise.all([
                                t.e(598981),
                                t.e(490028),
                                t.e(511527),
                                t.e(170653),
                                t.e(906723),
                                t.e(280559),
                                t.e(42611),
                                t.e(190820),
                            ]).then(t.bind(t, 609103));
                            return (a) => (0, l.jsx)(e, { ...a });
                        },
                        { modalKey: er.jK, onCloseCallback: es.sY },
                    ));
            },
            ctaButtonProps: { variant: "expressive", size: "md", fullWidth: !0 },
        },
        [Q.$.GIFTING]: {
            ctaLabel: () => V.intl.string(V.t["nUA/JW"]),
            ctaAction: () => (0, ed.A)({ giftingOrigin: eg.vQ.BADGE_DIRECTORY }),
        },
    },
    eb = "badge-details";
var ex = t(778712),
    eh = t(177861);
function e_(e) {
    return `badge-tab-${e}`;
}
function ev(e) {
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
        u = a.badge_id === Q.$.PREMIUM_TENURE ? (c?.name ?? c?.key) : c?.name,
        g = null != u ? `${a.name}, ${u}` : a.name,
        m = r ? `${g}, ${V.intl.string(V.t.y2b7CA)}` : g,
        b = n.useRef(null);
    return (0, l.jsxs)(W.D, {
        ...d,
        innerRef: b,
        role: "tab",
        id: e_(a.badge_id),
        "aria-label": m,
        "aria-selected": t,
        "aria-controls": t ? eb : void 0,
        className: U()(eh.oL, t && eh.xO),
        onFocus: d.onFocus,
        onClick: () => {
            (b.current?.focus(), i());
        },
        children: [
            r && (0, l.jsx)("span", { "aria-hidden": !0, className: eh.Dn }),
            null != a.simple_icon_url &&
                (0, l.jsx)("img", {
                    src: a.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: eh.pW,
                }),
        ],
    });
}
function ey(e) {
    let { label: a, navId: t, badges: n, selectedBadgeId: i, onSelectBadge: s, badgeIndicatorIds: r } = e,
        d = (0, Z.Ay)({
            id: t,
            isEnabled: !0,
            orientation: q.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, l.jsxs)("div", {
        className: eh.zE,
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
                            className: eh.yq,
                            children: n.map((e, a) => {
                                let t = e.badge_id === i;
                                return (0, l.jsx)(
                                    ev,
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
function ej(e) {
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
        { earnable: v, owned: y } = n.useMemo(() => (0, N.in)(h), [h]),
        p = n.useMemo(() => [...y, ...v], [y, v]),
        { badgeIndicatorIds: E } = (0, C.Vv)({ badges: p, enabled: x }),
        A = n.useMemo(() => new Set(x ? p.filter((e) => !0 === e.has_updates).map((e) => e.badge_id) : []), [x, p]),
        I = (0, f.e)({ location: "BadgeDirectoryPanel", hasUnread: A.size > 0 }),
        T = n.useMemo(() => (I ? new Set([...E, ...A]) : E), [I, E, A]),
        U = (function (e, a) {
            let t = (0, s.bG)([_.default], () => (null != e ? _.default.getUser(e) : void 0), [e]);
            if (null != t && a)
                return (0, ea.ku)({ id: t.id, avatar: t.avatar, discriminator: t.discriminator }, !1, 48);
        })(r, d),
        S = (0, ee.d)({ location: "BadgeDirectoryPanel" }),
        w = null != o ? ((a = Array.from(o)).length > 19 ? `${a.slice(0, 19).join("")}...` : o) : null,
        R = null != o && w !== o,
        D =
            null != w && R && null != U
                ? (0, l.jsxs)("span", {
                      className: eh._p,
                      children: [(0, l.jsx)(X.eu, { src: U, size: ex._3.SIZE_24, "aria-hidden": !0 }), w],
                  })
                : w,
        M = d && null != D ? V.intl.format(V.t.EIcwoe, { username: D }) : V.intl.string(V.t.UqnlQF),
        k = d && null != o ? V.intl.string(V.t["75s2Rq"]) : V.intl.string(V.t["62xU4E"]),
        G = d && null != o ? V.intl.formatToPlainString(V.t.BCjSZy, { username: o }) : V.intl.string(V.t.UqnlQF);
    return (0, l.jsx)("div", {
        className: eh.ws,
        children: (0, l.jsxs)(B.F, {
            component: (0, l.jsxs)("div", {
                className: eh.NG,
                children: [
                    (0, l.jsxs)("div", {
                        className: eh.kc,
                        children: [
                            !R && null != U && (0, l.jsx)(X.eu, { src: U, size: ex._3.SIZE_24, "aria-hidden": !0 }),
                            (0, l.jsx)(u.D, { variant: "heading-lg/semibold", color: "text-strong", children: M }),
                        ],
                    }),
                    (0, l.jsx)(g.E, { variant: "body-sm/medium", color: "text-subtle", children: k }),
                ],
            }),
            children: [
                (0, l.jsxs)(O.Ip, {
                    className: eh.hG,
                    children: [
                        y.length > 0 &&
                            (0, l.jsx)(ey, {
                                label: { type: "aria", text: G },
                                navId: "badge-directory-owned",
                                badges: y,
                                selectedBadgeId: t,
                                onSelectBadge: i,
                                badgeIndicatorIds: T,
                            }),
                        !d &&
                            v.length > 0 &&
                            (0, l.jsx)(ey, {
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
                        className: eh.HO,
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
var ef = t(911608),
    eN = t(10583);
function ep(e) {
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
                                ? (0, l.jsx)(ef.z, {
                                      value: s?.current ?? 0,
                                      minValue: s?.floor ?? 0,
                                      maxValue: r,
                                      size: "md",
                                      className: eN.hr,
                                      ...u,
                                  })
                                : null != s &&
                                  (0, l.jsx)(ef.z, { isIndeterminate: !0, size: "md", className: eN.hr, ...u }),
                        ],
                    }),
                    null != o &&
                        (0, l.jsx)("img", { className: eN.Tw, src: o, alt: "", "aria-hidden": !0, draggable: !1 }),
                ],
            }),
        ],
    });
}
var eE = t(824114);
let eA = (0, t(945810).mj)({
    name: "2026-11-badge-social-comparison",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var eI = t(725859);
function eC(e) {
    return e === Q.$.GAME_VARIETY || e === Q.$.STREAMING || e === Q.$.GAME_TIME;
}
function eT(e) {
    if (e.badge_id === Q.$.PREMIUM_TENURE || e.badge_id === Q.$.GUILD_BOOSTER)
        return (function (e) {
            if ((e.badge_id !== Q.$.PREMIUM_TENURE && e.badge_id !== Q.$.GUILD_BOOSTER) || null == e.obtained_at)
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
            let a = e.badge_id === Q.$.GAME_VARIETY ? eE.m.GAMES : eE.m.HOURS;
            return e.stats?.find((e) => e.unit === a)?.value;
        })(e);
        if (null == a) return;
        return e.badge_id === Q.$.GAME_VARIETY
            ? V.intl.formatToPlainString(V.t["r/EUap"], { count: a })
            : V.intl.formatToPlainString(V.t.xCjYxK, { hours: a });
    }
    return (0, F.uJ)(e.info_label) ? void 0 : e.info_label;
}
function eU(e) {
    let { badge: a, tier: t, label: n, avatarUrl: i, username: s } = e,
        r =
            t.simple_icon_url ??
            t.simple_icon_raster_url ??
            t.complex_icon_static_url ??
            a.simple_icon_url ??
            a.complex_icon_static_url;
    return (0, l.jsxs)("div", {
        className: eI.Nr,
        children: [
            null != r && (0, l.jsx)("img", { className: eI.Kk, src: r, alt: "", "aria-hidden": !0, draggable: !1 }),
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
                    (0, l.jsxs)("div", {
                        className: eI.kQ,
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
                    }),
                ],
            }),
        ],
    });
}
function eS(e) {
    let { badge: a, viewerBadge: t, displayedUserId: n, targetUsername: i, viewerTier: r, displayedTier: d } = e,
        o = eA.useConfig({ location: "BadgeSocialComparison" }).enabled,
        c = (0, s.bG)([_.default], () => _.default.getCurrentUser()),
        u = (0, s.bG)([_.default], () => (null != n ? _.default.getUser(n) : void 0), [n]);
    if (!o) return null;
    let g = eT(t),
        m = eT(a);
    return null == g || null == m
        ? null
        : (0, l.jsxs)("div", {
              className: eI.V,
              children: [
                  (0, l.jsx)(eU, {
                      badge: t,
                      tier: r,
                      label: g,
                      avatarUrl: c?.getAvatarURL(void 0, 32, !1),
                      username: V.intl.string(V.t.LuZzxn),
                  }),
                  (0, l.jsx)(eU, {
                      badge: a,
                      tier: d,
                      label: m,
                      avatarUrl: u?.getAvatarURL(void 0, 32, !1),
                      username: i ?? u?.username ?? V.intl.string(V.t.KD6OJJ),
                  }),
              ],
          });
}
function ew(e) {
    let { badge: a, viewerBadge: t } = e,
        n = (0, N.YU)(t, t.current_tier),
        i = (0, N.YU)(a, a.current_tier);
    return null == n || null == i ? null : (0, l.jsx)(eS, { ...e, viewerTier: n, displayedTier: i });
}
var eR = t(647729),
    eB = t(873571),
    eO = t(194261),
    eD = t(140735),
    eM = t(836825);
function ek(e) {
    let { badge: a, isViewingOtherUser: t, targetUsername: i, isViewerOnUpgradeableNitro: s = !1 } = e,
        r = n.useId(),
        d = t && null != i;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            d &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(D.c, {}),
                        (0, l.jsx)("div", {
                            className: eM.u4,
                            children: (0, l.jsx)(g.E, {
                                id: r,
                                variant: "body-sm/medium",
                                children: V.intl.formatToPlainString(V.t.KyTwIh, { username: i }),
                            }),
                        }),
                    ],
                }),
            (0, l.jsx)("div", {
                className: eM.SV,
                role: "list",
                "aria-label": d ? void 0 : a.name,
                "aria-labelledby": d ? r : void 0,
                children: a.tiers.map((e) => {
                    let n = e.owned,
                        i = !n && a.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        o = (0, N.Vs)({ tier: e, isUnlocked: n, isViewingOtherUser: t, isViewerOnUpgradeableNitro: s });
                    return (0, l.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: U()(eM.zh, i && eM.ZF),
                            children: [
                                null != r &&
                                    (0, l.jsx)("img", {
                                        className: eM.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, l.jsxs)("div", {
                                    className: eM.hI,
                                    children: [
                                        null != d &&
                                            (0, l.jsx)(g.E, {
                                                variant: "body-xs/semibold",
                                                color: n ? "text-default" : "text-muted",
                                                className: eM.nU,
                                                children: d,
                                            }),
                                        "" !== o &&
                                            (0, l.jsxs)(g.E, {
                                                variant: "body-xs/normal",
                                                color: n ? "text-subtle" : "text-muted",
                                                className: eM.nU,
                                                children: [
                                                    !n &&
                                                        (0, l.jsx)(eO.LockIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: eM.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    o,
                                                ],
                                            }),
                                    ],
                                }),
                                (0, l.jsx)(eD.A, { children: V.intl.string(n ? V.t.sTFApF : V.t.uHtDcT) }),
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
            onViewOwnCatalog: x,
            isUnread: h = !1,
            unlock: v,
            showNewTag: y = !1,
        } = e,
        j = v ?? a,
        f = v ?? t,
        p = (0, N.DW)(j),
        I = (0, s.bG)([k.Ay], () => k.Ay.useReducedMotion),
        [C, T] = n.useState(null),
        G = null != v && C?.unlock === v,
        Y = G && C?.isMotionSkipped === !0,
        J = n.useCallback((e) => T(null != v ? { unlock: v, isMotionSkipped: e } : null), [v]),
        Z = !I && (null != v ? !G : h),
        q = !I && G,
        W = n.useMemo(
            () =>
                null != v
                    ? (0, eR.$)({ isLevelUp: null != (0, N.YU)(v, v.previous_acked_tier), isMotionSkipped: Y })
                    : void 0,
            [Y, v],
        );
    n.useEffect(() => {
        if (!h) return;
        let { previousTier: e, currentTier: a } = (0, eB.VR)(j, j.previous_acked_tier);
        async function t(e) {
            if (null != e)
                try {
                    await (0, P.S4)(e);
                } catch {}
        }
        (t((0, eB.AO)(j, e, !0)), t((0, eB.AO)(j, a, !1)));
    }, [j, h]);
    let { animatedUrl: X, imageUrl: ee } = (0, z.NC)(j, p, I),
        ea = p?.rarity ?? j.rarity,
        et =
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
            })(ea) ?? void 0,
        el = (function (e) {
            if (e !== Q.$.ORB_VOID || en.T.getConfig({ location: "badge_directory_enter_void_cta" }).enabled)
                return em[e];
        })(j.badge_id),
        { isNitro: ei, eyebrow: es, displayName: er } = (0, z.iC)(j, p),
        ed = (0, z.f)(j),
        eo = (j.tiers?.length ?? 0) > 0,
        ec = (function (e) {
            let [a, t] = n.useState(K),
                [l, i] = n.useState(e);
            return (e !== l && (i(e), t(K())), a);
        })(j.badge_id),
        eu = (0, z.HA)(j, ec),
        eg = (0, F.uJ)(j.info_label) ? void 0 : j.info_label,
        ex = j.owned && ea !== S.x.COMMON && null != et,
        eh = [];
    (null != eg &&
        eh.push({
            key: "info",
            node: (0, l.jsx)(g.E, {
                tag: "span",
                variant: "body-xs/medium",
                color: "text-subtle",
                className: eF.$L,
                children: eg,
            }),
        }),
        eh.push({
            key: "status",
            node: (0, l.jsx)(g.E, {
                tag: "span",
                variant: "body-xs/medium",
                color: "text-subtle",
                className: eF.$L,
                children: eu,
            }),
        }),
        ex && eh.push({ key: "rarity", node: (0, l.jsx)(w.E, { ...et }) }));
    let ev = _.default.getCurrentUser()?.premiumType,
        ey = (0, z.Rt)(j, ev),
        ej = (0, z.JV)({ badge: j, viewerBadge: f, isViewerOnUpgradeableNitro: ey }),
        ef = n.useCallback(() => {
            null != el &&
                (A({
                    actionName: "primary_badge_action_clicked",
                    badge: j,
                    displayedUserId: c,
                    isSociallyNavigated: r,
                }),
                i(),
                M.A.popAll(),
                el.ctaAction());
        }, [j, c, r, el, i]),
        eN = (0, z.eJ)({ badge: j, isViewingOtherUser: r, viewerOwnsBadge: b })
            ? (0, l.jsx)(R.w, { type: "info", message: V.intl.format(V.t.vFekBs, { onViewBadges: x }), role: "none" })
            : null,
        eE = (function (e) {
            let { badge: a, isViewingOtherUser: t } = e,
                l = (0, s.bG)([H.A], () => H.A.hasConsented(E.YAq.PERSONALIZATION));
            return (0, N.Jn)(a.badge_id) && !t && !l;
        })({ badge: j, isViewingOtherUser: r }),
        eA = r && j.owned && null != j.current_tier && f?.owned === !0 && null != f.current_tier && eo,
        eI = (function (e) {
            let { badge: a, viewerBadge: t, isViewingOtherUser: l } = e,
                n = (0, s.bG)([H.A], () => H.A.hasConsented(E.YAq.PERSONALIZATION)),
                i = t ?? a,
                r = null != (0, N.YU)(i, i.next_tier),
                d = (0, N.Jn)(a.badge_id) && !n;
            return !l && i.owned && r && !d;
        })({ badge: j, viewerBadge: f, isViewingOtherUser: r }),
        eC = !(0, F.uJ)(ej),
        eT = eI || eC || eo,
        eU = r ? j : (f ?? j),
        eS = el?.ctaButtonProps?.fullWidth === !0;
    return (0, l.jsx)(B.F, {
        forceLevel: 2,
        children: (0, l.jsxs)("div", {
            id: eb,
            role: "tabpanel",
            "aria-labelledby": e_(j.badge_id),
            className: eF.SV,
            style: W,
            children: [
                (0, l.jsx)("div", { className: eF.Gw, children: (0, l.jsx)(o.J, { onClick: i, size: "sm" }) }),
                (0, l.jsxs)(O.d_, {
                    className: U()(eF.C9, Z && eF.uT, q && eF.CY),
                    children: [
                        (0, l.jsx)("div", {
                            className: eF.Rm,
                            children: y && (0, l.jsx)(w.E, { type: "new", variant: "primary" }),
                        }),
                        null != v
                            ? (0, l.jsx)(
                                  eR.A,
                                  { badge: v, previousTierKey: v.previous_acked_tier, canStart: !0, onStart: J },
                                  `${v.badge_id}:${v.current_tier}`,
                              )
                            : null != ee &&
                              (0, l.jsx)("img", {
                                  className: U()(eF.y2, null != X && ei && eF.Zl),
                                  src: ee,
                                  alt: "",
                                  "aria-hidden": !0,
                                  crossOrigin: h && null == X ? "anonymous" : void 0,
                                  draggable: !1,
                              }),
                        (0, l.jsxs)("div", {
                            className: eF.OU,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: eF.cQ,
                                    children: [
                                        (null != v || h) &&
                                            !I &&
                                            (0, l.jsx)(u.D, {
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                className: U()(eF.BI, G && eF.Dp),
                                                "aria-hidden": !0,
                                                children: (0, N.kD)(j, j.previous_acked_tier),
                                            }),
                                        (0, l.jsxs)("div", {
                                            className: eF.nj,
                                            children: [
                                                (0, l.jsxs)(u.D, {
                                                    variant: ei ? "nitro-sm" : "display-sm",
                                                    color: "text-strong",
                                                    className: U()(eF._r, ei && eF.ve),
                                                    children: [
                                                        null != es &&
                                                            (0, l.jsx)(g.E, {
                                                                tag: "span",
                                                                variant: "body-sm/medium",
                                                                color: "text-subtle",
                                                                className: eF.$g,
                                                                children: es,
                                                            }),
                                                        (0, l.jsx)("span", { className: eF.do, children: er }),
                                                    ],
                                                }),
                                                (0, l.jsx)(eV, { segments: eh }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: eF.oA,
                                    children: [
                                        eA &&
                                            (0, l.jsx)(ew, {
                                                badge: j,
                                                viewerBadge: f,
                                                displayedUserId: c,
                                                targetUsername: d,
                                            }),
                                        eE &&
                                            (0, l.jsx)(R.w, {
                                                type: "info",
                                                message: V.intl.format(V.t.Zh44ni, {
                                                    onGoToSettings: () =>
                                                        (0, L.openUserSettings)($.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                                }),
                                                role: "none",
                                            }),
                                        eT &&
                                            (0, l.jsxs)("div", {
                                                className: eF.d9,
                                                children: [
                                                    eI &&
                                                        (0, l.jsxs)(l.Fragment, {
                                                            children: [
                                                                (0, l.jsx)(ep, { badge: j, viewerBadge: f }),
                                                                (0, l.jsx)(D.c, {}),
                                                            ],
                                                        }),
                                                    eC &&
                                                        (0, l.jsxs)("div", {
                                                            className: U()(eF.E4, (!eo || eS) && eF.H),
                                                            children: [
                                                                (0, l.jsxs)("div", {
                                                                    className: eF.jv,
                                                                    children: [
                                                                        ed &&
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
                                                                            children: ej,
                                                                        }),
                                                                    ],
                                                                }),
                                                                null != el &&
                                                                    (0, l.jsx)(m.$, {
                                                                        variant: (0, z.Vg)({
                                                                            isNitro: ei,
                                                                            isViewerOnUpgradeableNitro: ey,
                                                                            viewerOwnsBadge: b,
                                                                        }),
                                                                        size: "sm",
                                                                        onClick: ef,
                                                                        text: el.ctaLabel({
                                                                            owned: b,
                                                                            isViewerOnUpgradeableNitro: ey,
                                                                        }),
                                                                        ...el.ctaButtonProps,
                                                                    }),
                                                            ],
                                                        }),
                                                    eo &&
                                                        (0, l.jsx)("div", {
                                                            className: eF.cJ,
                                                            children: (0, l.jsx)(ek, {
                                                                badge: eU,
                                                                isViewingOtherUser: r,
                                                                targetUsername: d,
                                                                isViewerOnUpgradeableNitro: ey,
                                                            }),
                                                        }),
                                                    null != eN && (0, l.jsx)("div", { className: eF.Z6, children: eN }),
                                                ],
                                            }),
                                        !eT && eN,
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
            initialBadgeId: p,
            targetUserId: E,
            targetUsername: T,
            viewingCurrentUserBadges: U,
        } = e,
        S = (0, s.bG)([_.default], () => _.default.getCurrentUser()?.id),
        w = null == E || E === S,
        R = !w && null != E && !0 !== U,
        B = R ? E : S,
        O = null != B ? `viewed_user:${R ? "other" : "self"}` : void 0,
        [D, M] = n.useState(p ?? null),
        k = (0, s.yK)([j.Ay], () => (null != B ? j.Ay.getBadges(B) : []), [B]),
        G = (0, s.bG)([j.Ay], () => null != B && j.Ay.hasCatalogFor(B), [B]),
        $ = (0, s.bG)([j.Ay], () => j.Ay.hasCatalogFetchErrorFor(B), [B]),
        L = (0, s.bG)([j.Ay], () => null != B && !j.Ay.isCatalogStaleFor(B), [B]),
        P = !R && k.some((e) => e.owned && !0 === e.has_updates),
        F = (0, f.e)({ location: "BadgeDirectoryModal", hasUnread: P });
    (n.useEffect(() => {
        null != B && (!j.Ay.hasCatalogFor(B) || j.Ay.isCatalogStaleFor(B)) && (0, v.RS)(B, { isAutomatic: !0 });
        let e = R ? S : E;
        !w && null != e && (!j.Ay.hasCatalogFor(e) || j.Ay.isCatalogStaleFor(e)) && (0, v.RS)(e, { isAutomatic: !0 });
    }, [B, w, R, S, E]),
        n.useEffect(() => {
            null != O && b.A.increment({ name: i.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [O] });
        }, [O]));
    let z = n.useMemo(() => {
            let { earnable: e, owned: a } = (0, N.in)(k);
            if (R) return a[0]?.badge_id ?? null;
            let t = F ? a.find((e) => !0 === e.has_updates) : void 0;
            return t?.badge_id ?? a[0]?.badge_id ?? e[0]?.badge_id ?? null;
        }, [k, F, R]),
        Y = null != D && null != B ? j.Ay.getBadgeById(D, B) : void 0,
        K = null != z && null != B ? j.Ay.getBadgeById(z, B) : void 0,
        H = Y ?? K,
        J = !G && !$,
        Z = !G && $,
        q = !R;
    n.useEffect(() => {
        Z && null != O && b.A.increment({ name: i.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [O] });
    }, [Z, O]);
    let Q = (0, s.bG)([j.Ay], () => (null != S && null != H ? j.Ay.getBadgeById(H.badge_id, S) : void 0), [H, S]),
        W = Q?.owned ?? !1,
        X = n.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, eK.openBadgeDirectoryModal)({ ...e, stackingBehavior: "replace" }).then(() => {
                    t();
                });
            },
            [t],
        ),
        ee = n.useCallback(() => {
            null != S &&
                null != E &&
                (A({ actionName: "view_your_badges_pressed", badge: H, displayedUserId: B, isSociallyNavigated: R }),
                X({ targetUserId: E, targetUsername: T, viewingCurrentUserBadges: !0 }));
        }, [S, B, R, H, X, E, T]),
        ea = n.useCallback(() => {
            null != B && (0, v.RS)(B, { isRetry: !0 });
        }, [B]),
        et = n.useCallback(() => {
            (A({ actionName: "badge_directory_closed", badge: H, displayedUserId: B, isSociallyNavigated: R }), t());
        }, [B, R, t, H]),
        el = n.useCallback(() => {
            null != S &&
                (A({
                    actionName: "customize_your_badges_pressed",
                    badge: H,
                    displayedUserId: B,
                    isSociallyNavigated: R,
                }),
                et(),
                I.A.setState({ isOpen: !0 }),
                (0, h.kN)(S) || (0, x.openUserProfileModal)({ userId: S }));
        }, [S, B, et, R, H]),
        en = H?.badge_id;
    (0, C.G5)({ badgeId: en, enabled: q });
    let ei = F && !R && H?.has_updates === !0,
        es = (0, s.bG)([y.A], () => q && null != en && (0, C.Ce)(en) && !y.A.getSeenBadgeIndicators().has(en), [en, q]),
        [er, ed] = n.useState(null);
    er?.badgeId !== en && ed({ badgeId: en, hadNewIndicator: es });
    let eo = null != er && er.badgeId === en && er.hadNewIndicator,
        ec = (0, f.e)({ location: "BadgeDirectoryModal", hasUnread: eo }) && eo,
        eu = a === d.ip.ENTERED && (L || $),
        [eg, em] = n.useState(null);
    return (
        null != eg && eg.badge_id !== en ? em(null) : null == eg && ei && eu && null != H && em({ ...H }),
        n.useEffect(() => {
            null != eg && (M(eg.badge_id), (0, v.zd)(eg.badge_id));
        }, [eg]),
        n.useEffect(() => {
            null != H && A({ actionName: "badge_detail_viewed", badge: H, displayedUserId: B, isSociallyNavigated: R });
        }, [en, B, R]),
        (0, l.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": V.intl.string(V.t.PEjP4L),
            transitionState: a,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: eh.CR,
            children: (0, l.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: eh.jE,
                children: [
                    (J || Z || null == H) &&
                        (0, l.jsx)("div", { className: eh.b, children: (0, l.jsx)(o.J, { onClick: et, size: "sm" }) }),
                    J
                        ? (0, l.jsx)("div", { className: eh.Lq, children: (0, l.jsx)(c.y, {}) })
                        : Z
                          ? (0, l.jsxs)("div", {
                                className: eh.IU,
                                children: [
                                    (0, l.jsx)(u.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: V.intl.string(V.t.iufib1),
                                    }),
                                    (0, l.jsx)(g.E, {
                                        variant: "body-sm/medium",
                                        color: "text-subtle",
                                        className: eh.TQ,
                                        children: V.intl.string(V.t.eAn6z2),
                                    }),
                                    (0, l.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: ea,
                                        text: V.intl.string(V.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(ej, {
                                        selectedBadgeId: H?.badge_id ?? null,
                                        onSelectBadge: M,
                                        displayedUserId: B,
                                        isViewingOtherUser: R,
                                        targetUsername: T,
                                        onViewOwnCatalog: ee,
                                        onCustomizeBadges: el,
                                        showBadgeIndicators: q,
                                    }),
                                    null != H &&
                                        (0, l.jsx)(eY, {
                                            badge: H,
                                            viewerBadge: Q,
                                            onClose: et,
                                            isViewingOtherUser: R,
                                            targetUsername: T,
                                            displayedUserId: B,
                                            viewerOwnsBadge: W,
                                            onViewOwnCatalog: ee,
                                            isUnread: ei,
                                            unlock: eg,
                                            showNewTag: ec,
                                        }),
                                ],
                            }),
                ],
            }),
        })
    );
}
