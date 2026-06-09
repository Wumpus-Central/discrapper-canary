i.d(t, { default: () => eo });
var n = i(627968),
    l = i(64700),
    a = i(731738),
    r = i(17928),
    s = i(935462),
    d = i(815021),
    c = i(289873),
    o = i(534514),
    u = i(834730),
    g = i(821609),
    m = i(807393),
    x = i(287809),
    h = i(682618),
    _ = i(982240),
    b = i(503698),
    v = i.n(b),
    y = i(70283),
    j = i(97808),
    p = i(123292),
    f = i(364522),
    N = i(508770),
    w = i(404778),
    E = i(683071),
    A = i(982168),
    C = i(775602),
    T = i(240248);
i(321073);
var I = i(837381),
    B = i(741918),
    k = i(939249),
    R = i(707554),
    S = i(260762),
    U = i(486020);
function O(e, t, i) {
    let n = (0, r.bG)([x.default], () => (null != e ? x.default.getUser(e) : void 0), [e]);
    if (null != n && t) return (0, U.ku)({ id: n.id, avatar: n.avatar, discriminator: n.discriminator }, !1, i);
}
var D = i(975858),
    F = i(778712),
    P = i(375708),
    G = i(490308);
function $(e) {
    return `badge-tab-${e}`;
}
function z(e) {
    let t = Array.from(e);
    return t.length > 19 ? `${t.slice(0, 19).join("")}...` : e;
}
function M(e) {
    let { badge: t, isSelected: i, onSelect: l, itemId: a } = e,
        r = (0, I.rm)(a),
        s = t.owned ? t.current_tier : t.next_tier,
        d =
            null != s
                ? t.tiers.find((e) => {
                      let { key: t } = e;
                      return t === s;
                  })
                : void 0,
        c = t.badge_id === y.$.PREMIUM_TENURE ? (d?.name ?? d?.key) : d?.name,
        o = null != c ? `${t.name}, ${c}` : t.name;
    return (0, n.jsx)(k.D, {
        ...r,
        role: "tab",
        id: $(t.badge_id),
        "aria-label": o,
        "aria-selected": i,
        "aria-controls": i ? D.hJ : void 0,
        className: v()(G.oL, i && G.xO),
        onFocus: r.onFocus,
        onClick: l,
        children:
            null != t.simple_icon_url &&
            (0, n.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: G.pW }),
    });
}
function V(e) {
    let { label: t, navId: i, badges: l, selectedBadgeId: a, onSelectBadge: r } = e,
        s = (0, S.A)(i, B.Gl.HORIZONTAL);
    return (0, n.jsxs)("div", {
        className: G.zE,
        children: [
            "heading" === t.type &&
                (0, n.jsx)(o.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, n.jsx)(I.hD, {
                navigator: s,
                children: (0, n.jsx)(I.PR, {
                    children: (e) =>
                        (0, n.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: G.yq,
                            children: l.map((e, t) =>
                                (0, n.jsx)(
                                    M,
                                    {
                                        itemId: `item-${t}`,
                                        badge: e,
                                        isSelected: e.badge_id === a,
                                        onSelect: () => r(e.badge_id),
                                    },
                                    e.badge_id,
                                ),
                            ),
                        }),
                }),
            }),
        ],
    });
}
function L(e) {
    let t = [],
        i = [];
    for (let n of e) n.owned ? i.push(n) : n.is_earnable && t.push(n);
    return { earnable: t, owned: i };
}
function H(e) {
    let {
            selectedBadgeId: t,
            onSelectBadge: i,
            displayedUserId: a,
            isViewingOtherUser: s,
            targetUsername: d,
            onViewOwnCatalog: c,
        } = e,
        m = (0, r.bG)([_.Ay], () => (null != a ? _.Ay.getBadges(a) : []), [a]),
        { earnable: x, owned: h } = l.useMemo(() => L(m), [m]),
        b = O(a, s, 48),
        v = null != d ? z(d) : null,
        y = null != d && v !== d,
        p =
            null != v && y && null != b
                ? (0, n.jsxs)("span", {
                      className: G._p,
                      children: [(0, n.jsx)(j.eu, { src: b, size: F._3.SIZE_24, "aria-hidden": !0 }), v],
                  })
                : v,
        f = s && null != p ? P.intl.format(P.t.EIcwoe, { username: p }) : P.intl.string(P.t.UqnlQF),
        N = s && null != d ? P.intl.string(P.t["75s2Rq"]) : P.intl.string(P.t["62xU4E"]),
        w = s && null != d ? P.intl.formatToPlainString(P.t.BCjSZy, { username: d }) : P.intl.string(P.t.UqnlQF);
    return (0, n.jsx)("div", {
        className: G.ws,
        children: (0, n.jsxs)(R.F, {
            component: (0, n.jsxs)("div", {
                className: G.NG,
                children: [
                    (0, n.jsxs)("div", {
                        className: G.kc,
                        children: [
                            !y && null != b && (0, n.jsx)(j.eu, { src: b, size: F._3.SIZE_24, "aria-hidden": !0 }),
                            (0, n.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: f }),
                        ],
                    }),
                    (0, n.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", children: N }),
                ],
            }),
            children: [
                (0, n.jsxs)("div", {
                    className: G.hG,
                    children: [
                        h.length > 0 &&
                            (0, n.jsx)(V, {
                                label: { type: "aria", text: w },
                                navId: "badge-directory-owned",
                                badges: h,
                                selectedBadgeId: t,
                                onSelectBadge: i,
                            }),
                        !s &&
                            x.length > 0 &&
                            (0, n.jsx)(V, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: P.intl.string(P.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: x,
                                selectedBadgeId: t,
                                onSelectBadge: i,
                            }),
                    ],
                }),
                s &&
                    (0, n.jsx)("div", {
                        className: G.HO,
                        children: (0, n.jsx)(g.$, {
                            variant: "secondary",
                            size: "sm",
                            fullWidth: !0,
                            onClick: c,
                            text: P.intl.string(P.t.msyp90),
                        }),
                    }),
            ],
        }),
    });
}
var Y = i(194261),
    q = i(140735),
    Z = i(899696);
function J(e) {
    if (null == e || "" === e) return null;
    let t = new Date(e);
    return Number.isNaN(t.getTime()) ? null : t;
}
function K(e) {
    return null == e ? null : e.toLocaleDateString(P.intl.currentLocale, { month: "short", year: "numeric" });
}
function Q(e) {
    var t;
    let i,
        { badge: a, isViewingOtherUser: r, targetUsername: s, isViewerOnUpgradeableNitro: d = !1 } = e,
        c = K(J(a.obtained_at)) ?? P.intl.string(P.t.sTFApF),
        o = l.useId(),
        g = r && null != s,
        m = a.badge_id === y.$.PREMIUM_TENURE ? P.intl.string(d ? P.t["5WS9pL"] : P.t.crwYbF) : null,
        x = g ? P.intl.formatToPlainString(P.t.KyTwIh, { username: s }) : m,
        h = null != x && "" !== x,
        _ =
            ((i = (t = a.tiers).length <= 4 ? t.length : Math.ceil(t.length / 2)),
            [t.slice(0, i), t.slice(i)].filter((e) => e.length > 0)),
        b = _[0]?.length ?? 0;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            h &&
                (0, n.jsxs)("div", {
                    className: Z.u4,
                    children: [
                        d &&
                            !g &&
                            (0, n.jsx)(Y.X, { size: "xxs", color: "currentColor", className: Z.ZU, "aria-hidden": !0 }),
                        (0, n.jsx)(u.E, { id: o, variant: "text-xs/medium", color: "text-subtle", children: x }),
                    ],
                }),
            (0, n.jsx)("div", {
                className: v()(Z.SV, b > 4 && Z.Li),
                role: "list",
                "aria-labelledby": h ? o : void 0,
                children: _.map((e, t) =>
                    (0, n.jsx)(
                        "div",
                        {
                            className: Z._1,
                            role: "presentation",
                            children: e.map((e) => {
                                let t = e.owned,
                                    i = e.complex_icon_static_url ?? e.simple_icon_url,
                                    l = e.name ?? e.key,
                                    s = a.tier_obtained_at?.[e.key],
                                    o = (function (e) {
                                        let {
                                            tier: t,
                                            isUnlocked: i,
                                            isViewingOtherUser: n,
                                            isViewerOnUpgradeableNitro: l,
                                            tierObtainedAt: a,
                                            badgeObtainedAtText: r,
                                        } = e;
                                        if (!i) {
                                            if (l && !n) return P.intl.string(P.t.VPu695);
                                            let e = t.requirements[0];
                                            return null != e
                                                ? (function (e, t) {
                                                      if ("months" === t) {
                                                          if (e < 12)
                                                              return P.intl.formatToPlainString(P.t.kridzK, {
                                                                  months: e,
                                                              });
                                                          let t = e / 12;
                                                          return t >= 6
                                                              ? P.intl.string(P.t.nPrx97)
                                                              : P.intl.formatToPlainString(P.t.PClsrw, { years: t });
                                                      }
                                                      return String(e);
                                                  })(e.threshold, e.unit)
                                                : "";
                                        }
                                        return n ? P.intl.string(P.t.sTFApF) : (K(J(a)) ?? r);
                                    })({
                                        tier: e,
                                        isUnlocked: t,
                                        isViewingOtherUser: r,
                                        isViewerOnUpgradeableNitro: d,
                                        tierObtainedAt: s,
                                        badgeObtainedAtText: c,
                                    });
                                return (0, n.jsxs)(
                                    "div",
                                    {
                                        role: "listitem",
                                        className: v()(Z.zh, !t && Z.ZF),
                                        children: [
                                            null != i &&
                                                (0, n.jsx)("img", {
                                                    className: Z.Hw,
                                                    src: i,
                                                    alt: "",
                                                    "aria-hidden": !0,
                                                }),
                                            (0, n.jsxs)(u.E, {
                                                variant: "text-xxs/medium",
                                                color: t ? "text-default" : "text-muted",
                                                className: Z.hI,
                                                children: [l, (0, n.jsx)("br", {}), o],
                                            }),
                                            (0, n.jsx)(q.A, { children: P.intl.string(t ? P.t.sTFApF : P.t.uHtDcT) }),
                                        ],
                                    },
                                    e.key,
                                );
                            }),
                        },
                        t,
                    ),
                ),
            }),
        ],
    });
}
var W = i(536001),
    X = i(260981),
    ee = i(540418),
    et = i(907085),
    ei = i(179820),
    en = i(174459),
    el = i(652215);
function ea(e) {
    let { actionName: t, badge: i, displayedUserId: n, isSociallyNavigated: l } = e,
        a = x.default.getCurrentUser()?.id,
        r = null != i && null != a ? _.Ay.getBadgeById(i.badge_id, a) : void 0,
        s = null != i && null != a ? _.Ay.getRemainingToNextTier(i.badge_id, a) : void 0,
        d = null != n ? _.Ay.getBadges(n).filter((e) => e.owned).length : void 0;
    en.default.track(el.HAw.BADGE_DIRECTORY_ACTION, {
        badge_action: t,
        badge_id: i?.badge_id,
        badge_tier: null != i ? ((i.owned ? i.current_tier : i.next_tier) ?? i.tiers?.[0]?.key) : void 0,
        badge_owner_id: n,
        is_owned: r?.owned ?? !1,
        progress_to_next_tier: s,
        is_earnable: i?.is_earnable ?? !1,
        is_socially_navigated: l,
        total_badges_owned: d,
    });
}
var er = i(788868);
function es(e) {
    let t,
        {
            badge: i,
            isOwnProfile: l,
            isViewingOtherUser: a,
            targetUsername: r,
            viewedAvatarSrc: s,
            targetOwnsBadge: d,
            viewerOwnsBadge: c,
            onToggleViewedUser: o,
        } = e,
        g = (0, _.H5)(i),
        m = null != g ? P.intl.formatToPlainString(P.t["0aEh2a"], { date: new Date(g) }) : P.intl.string(P.t.sTFApF);
    if (
        ((t = l
            ? i.owned
                ? m
                : P.intl.string(P.t.uHtDcT)
            : a && null != r
              ? P.intl.formatToPlainString(P.t.Eo5Cnp, { username: z(r) })
              : i.owned
                ? m
                : P.intl.string(P.t.uHtDcT)),
        l)
    )
        return (0, n.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: t });
    let x = a && c,
        h = !a && d && null != r;
    return (0, n.jsxs)("div", {
        className: G.bn,
        children: [
            null != s && (0, n.jsx)(j.eu, { src: s, size: F._3.SIZE_16, "aria-hidden": !0 }),
            (0, n.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", className: G.CT, children: t }),
            (x || h) &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(u.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: G.CT,
                            "aria-hidden": !0,
                            children: "\xb7",
                        }),
                        (0, n.jsx)(p.Q, {
                            variant: "primary",
                            size: "sm",
                            textVariant: "text-xs/medium",
                            onClick: o,
                            text: x
                                ? P.intl.string(P.t.yxEAGH)
                                : P.intl.formatToPlainString(P.t["9GNsge"], { username: z(r) }),
                        }),
                    ],
                }),
        ],
    });
}
function ed(e) {
    let t,
        i,
        a,
        {
            badge: s,
            viewerBadge: d,
            onClose: c,
            isOwnProfile: m,
            isViewingOtherUser: h,
            targetUsername: _,
            displayedUserId: b,
            targetOwnsBadge: j,
            viewerOwnsBadge: p,
            onToggleViewedUser: I,
            onViewOwnCatalog: B,
        } = e,
        k = O(b, h, 32),
        R = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let i = e.owned ? e.current_tier : e.next_tier;
            return (null != i ? t.find((e) => e.key === i) : void 0) ?? t[0];
        })(s),
        S = (0, r.bG)([C.A], () => C.A.useReducedMotion)
            ? void 0
            : (R?.complex_icon_animated_url ?? s.complex_icon_animated_url),
        U = R?.complex_icon_static_url ?? s.complex_icon_static_url,
        F = R?.simple_icon_url ?? s.simple_icon_url,
        z = S ?? U ?? F,
        M = (function (e) {
            if (null == e) return null;
            switch (e) {
                case W.x.COMMON:
                    return { type: { text: P.intl.string(P.t.L0K5ci) }, variant: "rarity-common", icon: X.p };
                case W.x.RARE:
                    return { type: { text: P.intl.string(P.t["sTx/5z"]) }, variant: "rarity-rare", icon: ee.A };
                case W.x.EPIC:
                    return { type: { text: P.intl.string(P.t.RD8RiN) }, variant: "rarity-epic", icon: et.b };
                case W.x.MYTHIC:
                    return { type: { text: P.intl.string(P.t.vqc1ol) }, variant: "rarity-mythic", icon: ei.O };
                case W.x.LEGENDARY:
                default:
                    return null;
            }
        })(R?.rarity ?? s.rarity),
        V = (0, D.Om)(s.badge_id),
        L = s.badge_id === y.$.PREMIUM_TENURE,
        H = L ? (R?.name ?? R?.key) : R?.name,
        Y = L ? P.intl.string(P.t.Ipxkog) : s.name;
    L ? (i = null != H ? `${Y} ${H}` : Y) : null != H ? ((t = Y), (i = H)) : (i = Y);
    let q = d?.owned === !0 && (d.tiers?.length ?? 0) > 0 && null == d.next_tier,
        Z = x.default.getCurrentUser()?.premiumType,
        J = L && (Z === er.PremiumTypes.TIER_0 || Z === er.PremiumTypes.TIER_1);
    a = q ? P.intl.string(P.t.jY5xAL) : J ? P.intl.string(P.t.qkwSSp) : (d?.description ?? s.description);
    let K = l.useCallback(() => {
            null != V &&
                (ea({
                    actionName: "primary_badge_action_clicked",
                    badge: s,
                    displayedUserId: b,
                    isSociallyNavigated: h,
                }),
                c(),
                A.A.popAll(),
                V.ctaAction());
        }, [s, b, h, V, c]),
        en = (0, D.ie)(s.badge_id) && !s.is_earnable,
        el = h && !s.is_earnable && !p;
    return (0, n.jsx)("div", {
        id: D.hJ,
        role: "tabpanel",
        "aria-labelledby": $(s.badge_id),
        className: G.SV,
        children: (0, n.jsxs)(f.d_, {
            className: G.C9,
            children: [
                null != z &&
                    (0, n.jsx)("img", {
                        className: v()(G.y2, null != S && z === S && G.hu),
                        src: z,
                        alt: "",
                        "aria-hidden": !0,
                    }),
                (0, n.jsxs)("div", {
                    className: G.OU,
                    children: [
                        (0, n.jsxs)("div", {
                            className: G.cQ,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: G.nj,
                                    children: [
                                        null != t &&
                                            (0, n.jsx)(u.E, {
                                                variant: "text-sm/medium",
                                                color: "text-subtle",
                                                className: G.$g,
                                                children: t,
                                            }),
                                        (0, n.jsx)(o.D, {
                                            variant: "display-sm",
                                            color: "text-strong",
                                            className: v()(G._r, L && G.tN),
                                            children: i,
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(es, {
                                    badge: s,
                                    isOwnProfile: m,
                                    isViewingOtherUser: h,
                                    targetUsername: _,
                                    viewedAvatarSrc: k,
                                    targetOwnsBadge: j,
                                    viewerOwnsBadge: p,
                                    onToggleViewedUser: I,
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: G.oA,
                            children: [
                                null != M &&
                                    (0, n.jsxs)("div", {
                                        className: G.sn,
                                        children: [
                                            (0, n.jsx)(N.E, { ...M }),
                                            (0, n.jsx)(u.E, {
                                                variant: "text-xs/medium",
                                                color: "text-subtle",
                                                children: P.intl.string(P.t["phYZe+"]),
                                            }),
                                        ],
                                    }),
                                !(0, T.uJ)(a) &&
                                    (0, n.jsxs)("div", {
                                        className: G.d9,
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: G.E4,
                                                children: [
                                                    (0, n.jsxs)("div", {
                                                        className: G.jv,
                                                        children: [
                                                            en &&
                                                                (0, n.jsx)(u.E, {
                                                                    variant: "text-xs/medium",
                                                                    color: "text-subtle",
                                                                    className: G.c$,
                                                                    children: P.intl.string(P.t["/Gmn3f"]),
                                                                }),
                                                            (0, n.jsx)(u.E, {
                                                                variant: "text-sm/medium",
                                                                color: "text-default",
                                                                className: G.ij,
                                                                children: a,
                                                            }),
                                                        ],
                                                    }),
                                                    null != V &&
                                                        (0, n.jsx)(g.$, {
                                                            variant: J
                                                                ? "expressive"
                                                                : p
                                                                  ? "secondary"
                                                                  : L
                                                                    ? "expressive"
                                                                    : "primary",
                                                            size: "sm",
                                                            onClick: K,
                                                            text: V.ctaLabel({
                                                                owned: p,
                                                                isViewerOnUpgradeableNitro: J,
                                                            }),
                                                        }),
                                                ],
                                            }),
                                            (s.tiers?.length ?? 0) > 0 &&
                                                (0, n.jsxs)("div", {
                                                    className: G.cJ,
                                                    children: [
                                                        (0, n.jsx)(w.c, {}),
                                                        (0, n.jsx)(Q, {
                                                            badge: s,
                                                            isViewingOtherUser: h,
                                                            targetUsername: _,
                                                            isViewerOnUpgradeableNitro: J,
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                el &&
                                    (0, n.jsx)(E.w, {
                                        type: "info",
                                        children: P.intl.format(P.t.vFekBs, { onViewBadges: B }),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
var ec = i(470739);
function eo(e) {
    let {
            transitionState: t,
            onClose: i,
            initialBadgeId: b,
            targetUserId: v,
            targetUsername: y,
            viewingCurrentUserBadges: j,
        } = e,
        p = (0, r.bG)([x.default], () => x.default.getCurrentUser()?.id),
        f = null == v || v === p,
        N = !f && null != v && !0 !== j,
        w = N ? v : p,
        E = null != w ? `viewed_user:${N ? "other" : "self"}` : void 0,
        [A, C] = l.useState(b ?? null),
        T = (0, r.bG)([_.Ay], () => (null != w ? _.Ay.getBadges(w) : []), [w]),
        I = (0, r.bG)([_.Ay], () => null != w && _.Ay.hasCatalogFor(w), [w]),
        B = (0, r.bG)([_.Ay], () => _.Ay.hasCatalogFetchErrorFor(w), [w]);
    l.useEffect(() => {
        null == w || _.Ay.hasCatalogFor(w) || (0, h.R)(w);
        let e = N ? p : v;
        f || null == e || _.Ay.hasCatalogFor(e) || (0, h.R)(e);
    }, [w, f, N, p, v]),
        l.useEffect(() => {
            null != E && m.A.increment({ name: a.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [E] });
        }, [E]);
    let k = l.useMemo(() => {
            let { earnable: e, owned: t } = L(T);
            return N ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [T, N]),
        R = null != A && null != w ? _.Ay.getBadgeById(A, w) : void 0,
        S = null != k && null != w ? _.Ay.getBadgeById(k, w) : void 0,
        U = R ?? S,
        O = !I && !B,
        D = !I && B;
    l.useEffect(() => {
        D && null != E && m.A.increment({ name: a.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [E] });
    }, [D, E]);
    let F = (0, r.bG)([_.Ay], () => null != v && null != U && (_.Ay.getBadgeById(U.badge_id, v)?.owned ?? !1), [U, v]),
        $ = (0, r.bG)([_.Ay], () => (null != p && null != U ? _.Ay.getBadgeById(U.badge_id, p) : void 0), [U, p]),
        z = $?.owned ?? !1,
        M = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, ec._)({ ...e, stackingBehavior: "replace" }).then(() => {
                    i();
                });
            },
            [i],
        ),
        V = l.useCallback(() => {
            null != v &&
                null != U &&
                (N
                    ? M({
                          initialBadgeId: U.badge_id,
                          targetUserId: v,
                          targetUsername: y,
                          viewingCurrentUserBadges: !0,
                      })
                    : M({ initialBadgeId: U.badge_id, targetUserId: v, targetUsername: y }));
        }, [N, U, M, v, y]),
        Y = l.useCallback(() => {
            null != p &&
                null != v &&
                (ea({ actionName: "view_your_badges_pressed", badge: U, displayedUserId: w, isSociallyNavigated: N }),
                M({ targetUserId: v, targetUsername: y, viewingCurrentUserBadges: !0 }));
        }, [p, w, N, U, M, v, y]),
        q = l.useCallback(() => {
            null != w && (0, h.R)(w, { isRetry: !0 });
        }, [w]),
        Z = l.useCallback(() => {
            ea({ actionName: "badge_directory_closed", badge: U, displayedUserId: w, isSociallyNavigated: N }), i();
        }, [w, N, i, U]),
        J = U?.badge_id;
    return (
        l.useEffect(() => {
            null != U &&
                ea({ actionName: "badge_detail_viewed", badge: U, displayedUserId: w, isSociallyNavigated: N });
        }, [J, w, N]),
        (0, n.jsx)(s.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": P.intl.string(P.t.PEjP4L),
            transitionState: t,
            size: s.rI.DYNAMIC,
            hideShadow: !0,
            className: G.CR,
            children: (0, n.jsxs)(s.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: G.jE,
                children: [
                    (0, n.jsx)("div", { className: G.b, children: (0, n.jsx)(d.J, { onClick: Z, size: "sm" }) }),
                    O
                        ? (0, n.jsx)("div", { className: G.Lq, children: (0, n.jsx)(c.y, {}) })
                        : D
                          ? (0, n.jsxs)("div", {
                                className: G.IU,
                                children: [
                                    (0, n.jsx)(o.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: P.intl.string(P.t.iufib1),
                                    }),
                                    (0, n.jsx)(u.E, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        className: G.TQ,
                                        children: P.intl.string(P.t.eAn6z2),
                                    }),
                                    (0, n.jsx)(g.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: q,
                                        text: P.intl.string(P.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(H, {
                                        selectedBadgeId: U?.badge_id ?? null,
                                        onSelectBadge: C,
                                        displayedUserId: w,
                                        isViewingOtherUser: N,
                                        targetUsername: y,
                                        onViewOwnCatalog: Y,
                                    }),
                                    null != U &&
                                        (0, n.jsx)(ed, {
                                            badge: U,
                                            viewerBadge: $,
                                            onClose: Z,
                                            isOwnProfile: f,
                                            isViewingOtherUser: N,
                                            targetUsername: y,
                                            displayedUserId: w,
                                            targetOwnsBadge: F,
                                            viewerOwnsBadge: z,
                                            onToggleViewedUser: V,
                                            onViewOwnCatalog: Y,
                                        }),
                                ],
                            }),
                ],
            }),
        })
    );
}
