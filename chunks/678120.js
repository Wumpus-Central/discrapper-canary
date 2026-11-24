t.d(a, { default: () => eZ });
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
    _ = t(403777),
    h = t(287809),
    v = t(682618),
    y = t(257339),
    j = t(982240);
let f = (0, t(945810).mj)({
    name: "2026-11-badge-social-comparison",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function p(e) {
    let { location: a, autoTrackExposure: t } = e;
    return f.useConfig({ location: a }, { autoTrackExposure: t }).enabled;
}
var N = t(620143),
    E = t(988341),
    A = t(129230),
    I = t(652215);
function C(e) {
    let {
            actionName: a,
            badge: t,
            displayedUserId: l,
            isSociallyNavigated: n,
            hasUnreadIndicator: i,
            source: s,
            surface: r,
        } = e,
        d = h.default.getCurrentUser()?.id,
        o = null != t && null != d ? j.Ay.getBadgeById(t.badge_id, d) : void 0,
        c = null != t && null != d ? j.Ay.getRemainingToNextTier(t.badge_id, d) : void 0,
        u = null != l ? j.Ay.getBadges(l).filter((e) => e.owned).length : void 0;
    A.default.track(I.HAw.BADGE_DIRECTORY_ACTION, {
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
var T = t(248284),
    U = t(737667);
t(321073);
var w = t(503698),
    S = t.n(w),
    B = t(536001),
    O = t(805251),
    R = t(683071),
    D = t(707554),
    M = t(95362),
    k = t(404778),
    G = t(136969),
    $ = t(775602),
    L = t(640708),
    P = t(780964),
    F = t(766075),
    z = t(515718),
    V = t(240248),
    Y = t(49253),
    K = t(792996);
let H = [K.t["6zFA/T"], K.t.wzZHKl, K.t["+ED/nf"]];
function Z() {
    let e = Math.floor(Math.random() * H.length);
    return K.intl.string(H[e]);
}
var J = t(153488),
    q = t(837381),
    Q = t(116903),
    W = t(741918),
    X = t(70283),
    ee = t(939249),
    ea = t(97808),
    et = t(643056),
    el = t(486020),
    en = t(696292),
    ei = t(975807),
    es = t(224689),
    er = t(192308),
    ed = t(442928),
    eo = t(475489),
    ec = t(990820),
    eu = t(216934),
    eg = t(976860),
    em = t(758836),
    eb = t(682901);
let ex = {
        [X.$.STAFF]: {
            ctaLabel: () => K.intl.string(K.t.q7A8hP),
            ctaAction: () => (0, ei.A)("https://discord.com/careers"),
        },
        [X.$.PREMIUM_TENURE]: {
            ctaLabel: (e) => {
                let { owned: a, isViewerOnUpgradeableNitro: t } = e;
                return !0 === t ? K.intl.string(K.t.uKFeS1) : a ? K.intl.string(K.t.xGjjkd) : K.intl.string(K.t.BTxm69);
            },
            ctaAction: () => (0, eg.pX)(I.BVt.NITRO_HOME),
        },
        [X.$.GUILD_BOOSTER]: {
            ctaLabel: (e) => {
                let { owned: a } = e;
                return a ? K.intl.string(K.t.VMvz3m) : K.intl.string(K.t.xFVZeU);
            },
            ctaAction: () => (0, F.openUserSettings)(P.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
        },
        [X.$.ORB_PROFILE]: {
            ctaLabel: () => K.intl.string(K.t.fG3RIg),
            ctaAction: () => (0, eg.pX)(I.BVt.COLLECTIBLES_SHOP_WITH_TAB(em.G2.ORBS)),
        },
        [X.$.QUEST_COMPLETED]: {
            ctaLabel: () => K.intl.string(K.t.swICIT),
            ctaAction: () => (0, eu.m)({ fromContent: en.u.QUEST_BADGE }),
        },
        [X.$.ORB_VOID]: {
            ctaLabel: () => K.intl.string(K.t.IKc5D7),
            ctaAction: () => {
                ((0, ed.O4)(),
                    (0, er.mM)(
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
                        { modalKey: eo.jK, onCloseCallback: ed.sY },
                    ));
            },
            ctaButtonProps: { variant: "expressive", size: "md", fullWidth: !0 },
        },
        [X.$.GIFTING]: {
            ctaLabel: () => K.intl.string(K.t["nUA/JW"]),
            ctaAction: () => (0, ec.A)({ giftingOrigin: eb.vQ.BADGE_DIRECTORY }),
        },
    },
    e_ = "badge-details";
var eh = t(778712),
    ev = t(177861);
function ey(e) {
    return `badge-tab-${e}`;
}
function ej(e) {
    let { badge: a, isSelected: t, onSelect: i, itemId: s, showBadgeIndicator: r } = e,
        d = (0, q.rm)(s),
        o = a.owned ? a.current_tier : a.next_tier,
        c =
            null != o
                ? a.tiers.find((e) => {
                      let { key: a } = e;
                      return a === o;
                  })
                : void 0,
        u = a.badge_id === X.$.PREMIUM_TENURE ? (c?.name ?? c?.key) : c?.name,
        g = null != u ? `${a.name}, ${u}` : a.name,
        m = r ? `${g}, ${K.intl.string(K.t.y2b7CA)}` : g,
        b = n.useRef(null);
    return (0, l.jsxs)(ee.D, {
        ...d,
        innerRef: b,
        role: "tab",
        id: ey(a.badge_id),
        "aria-label": m,
        "aria-selected": t,
        "aria-controls": t ? e_ : void 0,
        className: S()(ev.oL, t && ev.xO),
        onFocus: d.onFocus,
        onClick: () => {
            (b.current?.focus(), i());
        },
        children: [
            r && (0, l.jsx)("span", { "aria-hidden": !0, className: ev.Dn }),
            null != a.simple_icon_url &&
                (0, l.jsx)("img", {
                    src: a.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: ev.pW,
                }),
        ],
    });
}
function ef(e) {
    let { label: a, navId: t, badges: n, selectedBadgeId: i, onSelectBadge: s, badgeIndicatorIds: r } = e,
        d = (0, Q.Ay)({
            id: t,
            isEnabled: !0,
            orientation: W.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, l.jsxs)("div", {
        className: ev.zE,
        children: [
            "heading" === a.type &&
                (0, l.jsx)(u.D, { id: a.id, variant: "heading-xs/medium", color: "text-default", children: a.text }),
            (0, l.jsx)(q.hD, {
                navigator: d,
                children: (0, l.jsx)(q.PR, {
                    children: (e) =>
                        (0, l.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === a.type ? a.id : void 0,
                            "aria-label": "aria" === a.type ? a.text : void 0,
                            className: ev.yq,
                            children: n.map((e, a) => {
                                let t = e.badge_id === i;
                                return (0, l.jsx)(
                                    ej,
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
function ep(e) {
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
        _ = (0, s.yK)([j.Ay], () => (null != r ? j.Ay.getBadges(r) : []), [r]),
        { earnable: v, owned: y } = n.useMemo(() => (0, E.in)(_), [_]),
        f = n.useMemo(() => [...y, ...v], [y, v]),
        { badgeIndicatorIds: p } = (0, U.Vv)({ badges: f, enabled: x }),
        A = n.useMemo(() => new Set(x ? f.filter((e) => !0 === e.has_updates).map((e) => e.badge_id) : []), [x, f]),
        I = (0, N.e)({ location: "BadgeDirectoryPanel", hasUnread: A.size > 0 }),
        C = n.useMemo(() => (I ? new Set([...p, ...A]) : p), [I, p, A]),
        T = (function (e, a) {
            let t = (0, s.bG)([h.default], () => (null != e ? h.default.getUser(e) : void 0), [e]);
            if (null != t && a)
                return (0, el.ku)({ id: t.id, avatar: t.avatar, discriminator: t.discriminator }, !1, 48);
        })(r, d),
        w = (0, et.d)({ location: "BadgeDirectoryPanel" }),
        S = null != o ? ((a = Array.from(o)).length > 19 ? `${a.slice(0, 19).join("")}...` : o) : null,
        B = null != o && S !== o,
        O =
            null != S && B && null != T
                ? (0, l.jsxs)("span", {
                      className: ev._p,
                      children: [(0, l.jsx)(ea.eu, { src: T, size: eh._3.SIZE_24, "aria-hidden": !0 }), S],
                  })
                : S,
        R = d && null != O ? K.intl.format(K.t.EIcwoe, { username: O }) : K.intl.string(K.t.UqnlQF),
        k = d && null != o ? K.intl.string(K.t["75s2Rq"]) : K.intl.string(K.t["62xU4E"]),
        G = d && null != o ? K.intl.formatToPlainString(K.t.BCjSZy, { username: o }) : K.intl.string(K.t.UqnlQF);
    return (0, l.jsx)("div", {
        className: ev.ws,
        children: (0, l.jsxs)(D.F, {
            component: (0, l.jsxs)("div", {
                className: ev.NG,
                children: [
                    (0, l.jsxs)("div", {
                        className: ev.kc,
                        children: [
                            !B && null != T && (0, l.jsx)(ea.eu, { src: T, size: eh._3.SIZE_24, "aria-hidden": !0 }),
                            (0, l.jsx)(u.D, { variant: "heading-lg/semibold", color: "text-strong", children: R }),
                        ],
                    }),
                    (0, l.jsx)(g.E, { variant: "body-sm/medium", color: "text-subtle", children: k }),
                ],
            }),
            children: [
                (0, l.jsxs)(M.Ip, {
                    className: ev.hG,
                    children: [
                        y.length > 0 &&
                            (0, l.jsx)(ef, {
                                label: { type: "aria", text: G },
                                navId: "badge-directory-owned",
                                badges: y,
                                selectedBadgeId: t,
                                onSelectBadge: i,
                                badgeIndicatorIds: C,
                            }),
                        !d &&
                            v.length > 0 &&
                            (0, l.jsx)(ef, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: K.intl.string(K.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: v,
                                selectedBadgeId: t,
                                onSelectBadge: i,
                                badgeIndicatorIds: C,
                            }),
                    ],
                }),
                (d || w) &&
                    (0, l.jsx)("div", {
                        className: ev.HO,
                        children: d
                            ? (0, l.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: c,
                                  text: K.intl.string(K.t.msyp90),
                              })
                            : (0, l.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: b,
                                  text: K.intl.string(K.t["6CLLyH"]),
                              }),
                    }),
            ],
        }),
    });
}
var eN = t(911608),
    eE = t(10583);
function eA(e) {
    let { badge: a, viewerBadge: t } = e,
        i = n.useId(),
        { progress: s, threshold: r, currentArtUrl: d, nextArtUrl: o, helperText: c } = (0, Y.dy)(a, t),
        u = null != c ? { "aria-labelledby": i } : { "aria-label": K.intl.string(K.t.Uwhb1l) };
    return (0, l.jsxs)("div", {
        className: eE.NE,
        children: [
            (0, l.jsx)(g.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: K.intl.string(K.t["2m/g2c"]),
            }),
            (0, l.jsxs)("div", {
                className: eE.ES,
                children: [
                    null != d &&
                        (0, l.jsx)("img", { className: eE.Tw, src: d, alt: "", "aria-hidden": !0, draggable: !1 }),
                    (0, l.jsxs)("div", {
                        className: eE.Bd,
                        children: [
                            null != c && (0, l.jsx)(g.E, { id: i, variant: "body-sm/medium", children: c }),
                            null != r
                                ? (0, l.jsx)(eN.z, {
                                      value: s?.current ?? 0,
                                      minValue: s?.floor ?? 0,
                                      maxValue: r,
                                      size: "md",
                                      className: eE.hr,
                                      ...u,
                                  })
                                : null != s &&
                                  (0, l.jsx)(eN.z, { isIndeterminate: !0, size: "md", className: eE.hr, ...u }),
                        ],
                    }),
                    null != o &&
                        (0, l.jsx)("img", { className: eE.Tw, src: o, alt: "", "aria-hidden": !0, draggable: !1 }),
                ],
            }),
        ],
    });
}
var eI = t(824114),
    eC = t(725859);
function eT(e) {
    return e === X.$.GAME_VARIETY || e === X.$.STREAMING || e === X.$.GAME_TIME;
}
function eU(e) {
    if (e.badge_id === X.$.PREMIUM_TENURE || e.badge_id === X.$.GUILD_BOOSTER)
        return (function (e) {
            if ((e.badge_id !== X.$.PREMIUM_TENURE && e.badge_id !== X.$.GUILD_BOOSTER) || null == e.obtained_at)
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
                ? K.intl.formatToPlainString(K.t.X3Qd8c, { years: s, months: r })
                : s > 0
                  ? K.intl.formatToPlainString(K.t.PClsrw, { years: s })
                  : r > 0
                    ? K.intl.formatToPlainString(K.t.kridzK, { months: r })
                    : K.intl.string(K.t["0GsO43"]);
        })(e);
    if (eT(e.badge_id)) {
        let a = (function (e) {
            if (!eT(e.badge_id)) return;
            let a = e.badge_id === X.$.GAME_VARIETY ? eI.m.GAMES : eI.m.HOURS;
            return e.stats?.find((e) => e.unit === a)?.value;
        })(e);
        if (null == a) return;
        return e.badge_id === X.$.GAME_VARIETY
            ? K.intl.formatToPlainString(K.t["r/EUap"], { count: a })
            : K.intl.formatToPlainString(K.t.xCjYxK, { hours: a });
    }
    return (0, V.uJ)(e.info_label) ? void 0 : e.info_label;
}
function ew(e) {
    let { badge: a, tier: t, label: n, avatarUrl: i, username: s, onClick: r } = e,
        d =
            t.simple_icon_url ??
            t.simple_icon_raster_url ??
            t.complex_icon_static_url ??
            a.simple_icon_url ??
            a.complex_icon_static_url,
        o = (0, l.jsxs)(l.Fragment, {
            children: [
                null != i && (0, l.jsx)("img", { className: eC.my, src: i, alt: "", "aria-hidden": !0 }),
                (0, l.jsx)(g.E, {
                    tag: "span",
                    variant: "body-xs/medium",
                    color: "text-subtle",
                    lineClamp: 1,
                    className: eC.Xh,
                    children: s,
                }),
            ],
        });
    return (0, l.jsxs)("div", {
        className: eC.Nr,
        children: [
            null != d && (0, l.jsx)("img", { className: eC.Kk, src: d, alt: "", "aria-hidden": !0, draggable: !1 }),
            (0, l.jsxs)("div", {
                className: eC.Pf,
                children: [
                    (0, l.jsx)(g.E, {
                        variant: "body-xs/semibold",
                        color: "text-default",
                        className: eC.TH,
                        lineClamp: 2,
                        children: n,
                    }),
                    null != r
                        ? (0, l.jsx)("button", {
                              type: "button",
                              className: eC.kQ,
                              "aria-label": `${K.intl.string(K.t.LuZzxn)}: ${K.intl.string(K.t.msyp90)}`,
                              onClick: r,
                              children: o,
                          })
                        : (0, l.jsx)("div", { className: eC.kQ, children: o }),
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
        u = (0, s.bG)([h.default], () => h.default.getCurrentUser()),
        g = (0, s.bG)([h.default], () => (null != n ? h.default.getUser(n) : void 0), [n]);
    if (!c) return null;
    let m = eU(t),
        b = eU(a);
    return null == m || null == b
        ? null
        : (0, l.jsxs)("div", {
              className: eC.V,
              children: [
                  (0, l.jsx)(ew, {
                      badge: t,
                      tier: d,
                      label: m,
                      avatarUrl: u?.getAvatarURL(void 0, 32, !1),
                      username: K.intl.string(K.t.LuZzxn),
                      onClick: r,
                  }),
                  (0, l.jsx)(ew, {
                      badge: a,
                      tier: o,
                      label: b,
                      avatarUrl: g?.getAvatarURL(void 0, 32, !1),
                      username: i ?? g?.username ?? K.intl.string(K.t.KD6OJJ),
                  }),
              ],
          });
}
function eB(e) {
    let { badge: a, viewerBadge: t } = e,
        n = (0, E.YU)(t, t.current_tier),
        i = (0, E.YU)(a, a.current_tier);
    return null == n || null == i ? null : (0, l.jsx)(eS, { ...e, viewerTier: n, displayedTier: i });
}
var eO = t(647729),
    eR = t(873571),
    eD = t(194261),
    eM = t(140735),
    ek = t(836825);
function eG(e) {
    let { badge: a, isViewingOtherUser: t, targetUsername: i, isViewerOnUpgradeableNitro: s = !1 } = e,
        r = n.useId(),
        d = t && null != i;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            d &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(k.c, {}),
                        (0, l.jsx)("div", {
                            className: ek.u4,
                            children: (0, l.jsx)(g.E, {
                                id: r,
                                variant: "body-sm/medium",
                                children: K.intl.formatToPlainString(K.t.KyTwIh, { username: i }),
                            }),
                        }),
                    ],
                }),
            (0, l.jsx)("div", {
                className: ek.SV,
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
                            className: S()(ek.zh, i && ek.ZF),
                            children: [
                                null != r &&
                                    (0, l.jsx)("img", {
                                        className: ek.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, l.jsxs)("div", {
                                    className: ek.hI,
                                    children: [
                                        null != d &&
                                            (0, l.jsx)(g.E, {
                                                variant: "body-xs/semibold",
                                                color: n ? "text-default" : "text-muted",
                                                className: ek.nU,
                                                children: d,
                                            }),
                                        "" !== o &&
                                            (0, l.jsxs)(g.E, {
                                                variant: "body-xs/normal",
                                                color: n ? "text-subtle" : "text-muted",
                                                className: ek.nU,
                                                children: [
                                                    !n &&
                                                        (0, l.jsx)(eD.LockIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: ek.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    o,
                                                ],
                                            }),
                                    ],
                                }),
                                (0, l.jsx)(eM.A, { children: K.intl.string(n ? K.t.sTFApF : K.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var e$ = t(260981),
    eL = t(540418),
    eP = t(907085),
    eF = t(179820),
    ez = t(954080);
function eV() {
    return (0, l.jsx)(L.A, { height: 3, width: 3, "aria-hidden": "true", className: ez.zN });
}
function eY(e) {
    let { segments: a } = e;
    return 0 === a.length
        ? null
        : (0, l.jsx)("div", {
              className: ez.U3,
              children: a.map((e, a) => {
                  let { key: t, node: n } = e;
                  return (0, l.jsxs)("span", { className: ez.Hq, children: [a > 0 && (0, l.jsx)(eV, {}), n] }, t);
              }),
          });
}
function eK(e) {
    let {
            badge: a,
            viewerBadge: t,
            onClose: i,
            isViewingOtherUser: r,
            targetUsername: d,
            displayedUserId: c,
            viewerOwnsBadge: b,
            isSocialComparisonEnabled: x,
            onViewOwnBadge: _,
            onViewOwnCatalog: v,
            isUnread: y = !1,
            unlock: j,
            showNewTag: f = !1,
        } = e,
        p = j ?? a,
        N = j ?? t,
        A = (0, E.DW)(p),
        T = (0, s.bG)([$.Ay], () => $.Ay.useReducedMotion),
        [U, w] = n.useState(null),
        L = null != j && U?.unlock === j,
        H = L && U?.isMotionSkipped === !0,
        q = n.useCallback((e) => w(null != j ? { unlock: j, isMotionSkipped: e } : null), [j]),
        Q = !T && (null != j ? !L : y),
        W = !T && L,
        ee = n.useMemo(
            () =>
                null != j
                    ? (0, eO.$)({ isLevelUp: null != (0, E.YU)(j, j.previous_acked_tier), isMotionSkipped: H })
                    : void 0,
            [H, j],
        );
    n.useEffect(() => {
        if (!y) return;
        let { previousTier: e, currentTier: a } = (0, eR.VR)(p, p.previous_acked_tier);
        async function t(e) {
            if (null != e)
                try {
                    await (0, z.S4)(e);
                } catch {}
        }
        (t((0, eR.AO)(p, e, !0)), t((0, eR.AO)(p, a, !1)));
    }, [p, y]);
    let { animatedUrl: ea, imageUrl: et } = (0, Y.NC)(p, A, T),
        el = A?.rarity ?? p.rarity,
        en =
            (function (e) {
                if (null == e) return null;
                switch (e) {
                    case B.x.COMMON:
                        return {
                            type: { text: K.intl.string(K.t.L0K5ci) },
                            variant: "rarity-common",
                            icon: e$.ExperimentalCommonIcon,
                        };
                    case B.x.RARE:
                        return {
                            type: { text: K.intl.string(K.t["sTx/5z"]) },
                            variant: "rarity-rare",
                            icon: eL.ExperimentalRareIcon,
                        };
                    case B.x.EPIC:
                        return {
                            type: { text: K.intl.string(K.t.RD8RiN) },
                            variant: "rarity-epic",
                            icon: eP.ExperimentalEpicIcon,
                        };
                    case B.x.MYTHIC:
                        return {
                            type: { text: K.intl.string(K.t.vqc1ol) },
                            variant: "rarity-mythic",
                            icon: eF.ExperimentalMythicIcon,
                        };
                    default:
                        return null;
                }
            })(el) ?? void 0,
        ei = (function (e) {
            if (e !== X.$.ORB_VOID || es.T.getConfig({ location: "badge_directory_enter_void_cta" }).enabled)
                return ex[e];
        })(p.badge_id),
        { isNitro: er, eyebrow: ed, displayName: eo } = (0, Y.iC)(p, A),
        ec = (0, Y.f)(p),
        eu = (p.tiers?.length ?? 0) > 0,
        eg = (function (e) {
            let [a, t] = n.useState(Z),
                [l, i] = n.useState(e);
            return (e !== l && (i(e), t(Z())), a);
        })(p.badge_id),
        em = (0, Y.HA)(p, eg),
        eb = (0, V.uJ)(p.info_label) ? void 0 : p.info_label,
        eh = p.owned && el !== B.x.COMMON && null != en,
        ev = [];
    (null != eb &&
        ev.push({
            key: "info",
            node: (0, l.jsx)(g.E, {
                tag: "span",
                variant: "body-xs/medium",
                color: "text-subtle",
                className: ez.$L,
                children: eb,
            }),
        }),
        ev.push({
            key: "status",
            node: (0, l.jsx)(g.E, {
                tag: "span",
                variant: "body-xs/medium",
                color: "text-subtle",
                className: ez.$L,
                children: em,
            }),
        }),
        eh && ev.push({ key: "rarity", node: (0, l.jsx)(O.E, { ...en }) }));
    let ej = h.default.getCurrentUser()?.premiumType,
        ef = (0, Y.Rt)(p, ej),
        ep = (0, Y.JV)({ badge: p, viewerBadge: N, isViewerOnUpgradeableNitro: ef }),
        eN = n.useCallback(() => {
            null != ei &&
                (C({
                    actionName: "primary_badge_action_clicked",
                    badge: p,
                    displayedUserId: c,
                    isSociallyNavigated: r,
                }),
                i(),
                G.A.popAll(),
                ei.ctaAction());
        }, [p, c, r, ei, i]),
        eE = (0, Y.eJ)({ badge: p, isViewingOtherUser: r, viewerOwnsBadge: b })
            ? (0, l.jsx)(R.w, { type: "info", message: K.intl.format(K.t.vFekBs, { onViewBadges: v }), role: "none" })
            : null,
        eI = (function (e) {
            let { badge: a, isViewingOtherUser: t } = e,
                l = (0, s.bG)([J.A], () => J.A.hasConsented(I.YAq.PERSONALIZATION));
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
        eT = x && eC && null != N && null != eU(p) && null != eU(N),
        ew = eT && !er,
        eS = (function (e) {
            let { badge: a, viewerBadge: t, isViewingOtherUser: l } = e,
                n = (0, s.bG)([J.A], () => J.A.hasConsented(I.YAq.PERSONALIZATION)),
                i = t ?? a,
                r = null != (0, E.YU)(i, i.next_tier),
                d = (0, E.Jn)(a.badge_id) && !n;
            return !l && i.owned && r && !d;
        })({ badge: p, viewerBadge: N, isViewingOtherUser: r }),
        eD = !(0, V.uJ)(ep),
        eM = eS || eD || eu,
        ek = r ? p : (N ?? p),
        eV = ei?.ctaButtonProps?.fullWidth === !0;
    return (0, l.jsx)(D.F, {
        forceLevel: 2,
        children: (0, l.jsxs)("div", {
            id: e_,
            role: "tabpanel",
            "aria-labelledby": ey(p.badge_id),
            className: S()(ez.SV, eT && ez.lo),
            style: ee,
            children: [
                (0, l.jsx)("div", { className: ez.Gw, children: (0, l.jsx)(o.J, { onClick: i, size: "sm" }) }),
                (0, l.jsxs)(M.d_, {
                    className: S()(ez.C9, Q && ez.uT, W && ez.CY),
                    children: [
                        (0, l.jsx)("div", {
                            className: S()(ez.Rm, ew && ez._c),
                            children: f
                                ? (0, l.jsx)(O.E, { type: "new", variant: "primary" })
                                : eT
                                  ? (0, l.jsx)(O.E, { type: "beta" })
                                  : null,
                        }),
                        null != j
                            ? (0, l.jsx)(
                                  eO.A,
                                  { badge: j, previousTierKey: j.previous_acked_tier, canStart: !0, onStart: q },
                                  `${j.badge_id}:${j.current_tier}`,
                              )
                            : null != et &&
                              (0, l.jsx)("img", {
                                  className: S()(ez.y2, null != ea && er && ez.Zl, ew && ez.tE),
                                  src: et,
                                  alt: "",
                                  "aria-hidden": !0,
                                  crossOrigin: y && null == ea ? "anonymous" : void 0,
                                  draggable: !1,
                              }),
                        (0, l.jsxs)("div", {
                            className: S()(ez.OU, ew && ez.bO),
                            children: [
                                (0, l.jsxs)("div", {
                                    className: ez.cQ,
                                    children: [
                                        (null != j || y) &&
                                            !T &&
                                            (0, l.jsx)(u.D, {
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                className: S()(ez.BI, L && ez.Dp),
                                                "aria-hidden": !0,
                                                children: (0, E.kD)(p, p.previous_acked_tier),
                                            }),
                                        (0, l.jsxs)("div", {
                                            className: ez.nj,
                                            children: [
                                                (0, l.jsxs)(u.D, {
                                                    variant: er ? "nitro-sm" : "display-sm",
                                                    color: "text-strong",
                                                    className: S()(ez._r, er && ez.ve),
                                                    children: [
                                                        null != ed &&
                                                            (0, l.jsx)(g.E, {
                                                                tag: "span",
                                                                variant: "body-sm/medium",
                                                                color: "text-subtle",
                                                                className: ez.$g,
                                                                children: ed,
                                                            }),
                                                        (0, l.jsx)("span", { className: ez.do, children: eo }),
                                                    ],
                                                }),
                                                (0, l.jsx)(eY, { segments: ev }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: ez.oA,
                                    children: [
                                        eC &&
                                            null != N &&
                                            (0, l.jsx)(eB, {
                                                badge: p,
                                                viewerBadge: N,
                                                displayedUserId: c,
                                                targetUsername: d,
                                                onViewOwnBadge: _,
                                            }),
                                        eI &&
                                            (0, l.jsx)(R.w, {
                                                type: "info",
                                                message: K.intl.format(K.t.Zh44ni, {
                                                    onGoToSettings: () =>
                                                        (0, F.openUserSettings)(P.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                                }),
                                                role: "none",
                                            }),
                                        eM &&
                                            (0, l.jsxs)("div", {
                                                className: ez.d9,
                                                children: [
                                                    eS &&
                                                        (0, l.jsxs)(l.Fragment, {
                                                            children: [
                                                                (0, l.jsx)(eA, { badge: p, viewerBadge: N }),
                                                                (0, l.jsx)(k.c, {}),
                                                            ],
                                                        }),
                                                    eD &&
                                                        (0, l.jsxs)("div", {
                                                            className: S()(ez.E4, (!eu || eV) && ez.H),
                                                            children: [
                                                                (0, l.jsxs)("div", {
                                                                    className: ez.jv,
                                                                    children: [
                                                                        ec &&
                                                                            (0, l.jsx)(g.E, {
                                                                                variant: "body-xs/medium",
                                                                                color: "text-subtle",
                                                                                className: ez.c$,
                                                                                children: K.intl.string(K.t["/Gmn3f"]),
                                                                            }),
                                                                        (0, l.jsx)(g.E, {
                                                                            variant: "body-sm/medium",
                                                                            color: "text-default",
                                                                            className: ez.ij,
                                                                            children: ep,
                                                                        }),
                                                                    ],
                                                                }),
                                                                null != ei &&
                                                                    (0, l.jsx)(m.$, {
                                                                        variant: (0, Y.Vg)({
                                                                            isNitro: er,
                                                                            isViewerOnUpgradeableNitro: ef,
                                                                            viewerOwnsBadge: b,
                                                                        }),
                                                                        size: "sm",
                                                                        onClick: eN,
                                                                        text: ei.ctaLabel({
                                                                            owned: b,
                                                                            isViewerOnUpgradeableNitro: ef,
                                                                        }),
                                                                        ...ei.ctaButtonProps,
                                                                    }),
                                                            ],
                                                        }),
                                                    eu &&
                                                        (0, l.jsx)("div", {
                                                            className: ez.cJ,
                                                            children: (0, l.jsx)(eG, {
                                                                badge: ek,
                                                                isViewingOtherUser: r,
                                                                targetUsername: d,
                                                                isViewerOnUpgradeableNitro: ef,
                                                            }),
                                                        }),
                                                    null != eE && (0, l.jsx)("div", { className: ez.Z6, children: eE }),
                                                ],
                                            }),
                                        !eM && eE,
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
var eH = t(470739);
function eZ(e) {
    let {
            transitionState: a,
            onClose: t,
            initialBadgeId: f,
            targetUserId: A,
            targetUsername: I,
            viewingCurrentUserBadges: w,
        } = e,
        S = (0, s.bG)([h.default], () => h.default.getCurrentUser()?.id),
        B = null == A || A === S,
        O = !B && null != A && !0 !== w,
        R = O ? A : S,
        D = null != R ? `viewed_user:${O ? "other" : "self"}` : void 0,
        [M, k] = n.useState(f ?? null),
        G = (0, s.yK)([j.Ay], () => (null != R ? j.Ay.getBadges(R) : []), [R]),
        $ = (0, s.bG)([j.Ay], () => null != R && j.Ay.hasCatalogFor(R), [R]),
        L = (0, s.bG)([j.Ay], () => j.Ay.hasCatalogFetchErrorFor(R), [R]),
        P = (0, s.bG)([j.Ay], () => null != R && !j.Ay.isCatalogStaleFor(R), [R]),
        F = !O && G.some((e) => e.owned && !0 === e.has_updates),
        z = (0, N.e)({ location: "BadgeDirectoryModal", hasUnread: F }),
        V = p({ location: "BadgeDirectoryModal", autoTrackExposure: !1 });
    (n.useEffect(() => {
        null != R && (!j.Ay.hasCatalogFor(R) || j.Ay.isCatalogStaleFor(R)) && (0, v.RS)(R, { isAutomatic: !0 });
        let e = O ? S : A;
        !B && null != e && (!j.Ay.hasCatalogFor(e) || j.Ay.isCatalogStaleFor(e)) && (0, v.RS)(e, { isAutomatic: !0 });
    }, [R, B, O, S, A]),
        n.useEffect(() => {
            null != D && b.A.increment({ name: i.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [D] });
        }, [D]));
    let Y = n.useMemo(() => {
            let { earnable: e, owned: a } = (0, E.in)(G);
            if (O) return a[0]?.badge_id ?? null;
            let t = z ? a.find((e) => !0 === e.has_updates) : void 0;
            return t?.badge_id ?? a[0]?.badge_id ?? e[0]?.badge_id ?? null;
        }, [G, z, O]),
        H = null != M && null != R ? j.Ay.getBadgeById(M, R) : void 0,
        Z = null != Y && null != R ? j.Ay.getBadgeById(Y, R) : void 0,
        J = H ?? Z,
        q = !$ && !L,
        Q = !$ && L,
        W = !O;
    n.useEffect(() => {
        Q && null != D && b.A.increment({ name: i.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [D] });
    }, [Q, D]);
    let X = (0, s.bG)([j.Ay], () => (null != S && null != J ? j.Ay.getBadgeById(J.badge_id, S) : void 0), [J, S]),
        ee = X?.owned ?? !1,
        ea = n.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, eH.openBadgeDirectoryModal)({ ...e, stackingBehavior: "replace" }).then(() => {
                    t();
                });
            },
            [t],
        ),
        et = n.useCallback(() => {
            null != S &&
                null != A &&
                (C({ actionName: "view_your_badges_pressed", badge: J, displayedUserId: R, isSociallyNavigated: O }),
                ea({ targetUserId: A, targetUsername: I, viewingCurrentUserBadges: !0 }));
        }, [S, R, O, J, ea, A, I]),
        el = n.useCallback(() => {
            null != A &&
                null != J &&
                (C({ actionName: "view_your_badges_pressed", badge: J, displayedUserId: R, isSociallyNavigated: O }),
                ea({ initialBadgeId: J.badge_id, targetUserId: A, targetUsername: I, viewingCurrentUserBadges: !0 }));
        }, [R, O, J, ea, A, I]),
        en = n.useCallback(() => {
            null != R && (0, v.RS)(R, { isRetry: !0 });
        }, [R]),
        ei = n.useCallback(() => {
            (C({ actionName: "badge_directory_closed", badge: J, displayedUserId: R, isSociallyNavigated: O }), t());
        }, [R, O, t, J]),
        es = n.useCallback(() => {
            null != S &&
                (C({
                    actionName: "customize_your_badges_pressed",
                    badge: J,
                    displayedUserId: R,
                    isSociallyNavigated: O,
                }),
                ei(),
                T.A.setState({ isOpen: !0 }),
                (0, _.kN)(S) || (0, x.openUserProfileModal)({ userId: S }));
        }, [S, R, ei, O, J]),
        er = J?.badge_id;
    (0, U.G5)({ badgeId: er, enabled: W });
    let ed = z && !O && J?.has_updates === !0,
        eo = (0, s.bG)([y.A], () => W && null != er && (0, U.Ce)(er) && !y.A.getSeenBadgeIndicators().has(er), [er, W]),
        [ec, eu] = n.useState(null);
    ec?.badgeId !== er && eu({ badgeId: er, hadNewIndicator: eo });
    let eg = null != ec && ec.badgeId === er && ec.hadNewIndicator,
        em = (0, N.e)({ location: "BadgeDirectoryModal", hasUnread: eg }) && eg,
        eb = a === d.ip.ENTERED && (P || L),
        [ex, e_] = n.useState(null);
    return (
        null != ex && ex.badge_id !== er ? e_(null) : null == ex && ed && eb && null != J && e_({ ...J }),
        n.useEffect(() => {
            null != ex && (k(ex.badge_id), (0, v.zd)(ex.badge_id));
        }, [ex]),
        n.useEffect(() => {
            null != J && C({ actionName: "badge_detail_viewed", badge: J, displayedUserId: R, isSociallyNavigated: O });
        }, [er, R, O]),
        (0, l.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": K.intl.string(K.t.PEjP4L),
            transitionState: a,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: ev.CR,
            children: (0, l.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: ev.jE,
                children: [
                    (q || Q || null == J) &&
                        (0, l.jsx)("div", { className: ev.b, children: (0, l.jsx)(o.J, { onClick: ei, size: "sm" }) }),
                    q
                        ? (0, l.jsx)("div", { className: ev.Lq, children: (0, l.jsx)(c.y, {}) })
                        : Q
                          ? (0, l.jsxs)("div", {
                                className: ev.IU,
                                children: [
                                    (0, l.jsx)(u.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: K.intl.string(K.t.iufib1),
                                    }),
                                    (0, l.jsx)(g.E, {
                                        variant: "body-sm/medium",
                                        color: "text-subtle",
                                        className: ev.TQ,
                                        children: K.intl.string(K.t.eAn6z2),
                                    }),
                                    (0, l.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: en,
                                        text: K.intl.string(K.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(ep, {
                                        selectedBadgeId: J?.badge_id ?? null,
                                        onSelectBadge: k,
                                        displayedUserId: R,
                                        isViewingOtherUser: O,
                                        targetUsername: I,
                                        onViewOwnCatalog: et,
                                        onCustomizeBadges: es,
                                        showBadgeIndicators: W,
                                    }),
                                    null != J &&
                                        (0, l.jsx)(eK, {
                                            badge: J,
                                            viewerBadge: X,
                                            onClose: ei,
                                            isViewingOtherUser: O,
                                            targetUsername: I,
                                            displayedUserId: R,
                                            viewerOwnsBadge: ee,
                                            isSocialComparisonEnabled: V,
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
