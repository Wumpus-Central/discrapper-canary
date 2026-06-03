i.d(t, { default: () => es });
var l = i(627968),
    n = i(64700),
    a = i(731738),
    s = i(17928),
    r = i(935462),
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
    j = i(70283),
    y = i(97808),
    p = i(123292),
    f = i(364522),
    N = i(508770),
    w = i(404778),
    A = i(683071),
    E = i(982168),
    C = i(775602),
    T = i(240248);
i(321073);
var B = i(837381),
    I = i(741918),
    k = i(939249),
    S = i(707554),
    U = i(260762),
    O = i(486020);
function F(e, t, i) {
    let l = (0, s.bG)([x.default], () => (null != e ? x.default.getUser(e) : void 0), [e]);
    if (null != l && t) return (0, O.ku)({ id: l.id, avatar: l.avatar, discriminator: l.discriminator }, !1, i);
}
var P = i(975858),
    D = i(778712),
    R = i(375708),
    G = i(490308);
function z(e) {
    return `badge-tab-${e}`;
}
function V(e) {
    let t = Array.from(e);
    return t.length > 19 ? `${t.slice(0, 19).join("")}...` : e;
}
function $(e) {
    let { badge: t, isSelected: i, onSelect: n, itemId: a } = e,
        s = (0, B.rm)(a);
    return (0, l.jsx)(k.D, {
        ...s,
        role: "tab",
        id: z(t.badge_id),
        "aria-label": t.name,
        "aria-selected": i,
        "aria-controls": i ? P.hJ : void 0,
        className: v()(G.oL, i && G.xO),
        onFocus: s.onFocus,
        onClick: n,
        children:
            null != t.simple_icon_url &&
            (0, l.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: G.pW }),
    });
}
function L(e) {
    let { label: t, navId: i, badges: n, selectedBadgeId: a, onSelectBadge: s } = e,
        r = (0, U.A)(i, I.Gl.HORIZONTAL);
    return (0, l.jsxs)("div", {
        className: G.zE,
        children: [
            "heading" === t.type &&
                (0, l.jsx)(o.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, l.jsx)(B.hD, {
                navigator: r,
                children: (0, l.jsx)(B.PR, {
                    children: (e) =>
                        (0, l.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: G.yq,
                            children: n.map((e, t) =>
                                (0, l.jsx)(
                                    $,
                                    {
                                        itemId: `item-${t}`,
                                        badge: e,
                                        isSelected: e.badge_id === a,
                                        onSelect: () => s(e.badge_id),
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
function M(e) {
    let t = [],
        i = [];
    for (let l of e) l.owned ? i.push(l) : l.is_earnable && t.push(l);
    return { earnable: t, owned: i };
}
function H(e) {
    let {
            selectedBadgeId: t,
            onSelectBadge: i,
            displayedUserId: a,
            isViewingOtherUser: r,
            targetUsername: d,
            onViewOwnCatalog: c,
        } = e,
        m = (0, s.bG)([_.Ay], () => (null != a ? _.Ay.getBadges(a) : []), [a]),
        { earnable: x, owned: h } = n.useMemo(() => M(m), [m]),
        b = F(a, r, 48),
        v = null != d ? V(d) : null,
        j = null != d && v !== d,
        p =
            null != v && j && null != b
                ? (0, l.jsxs)("span", {
                      className: G._p,
                      children: [(0, l.jsx)(y.eu, { src: b, size: D._3.SIZE_24, "aria-hidden": !0 }), v],
                  })
                : v,
        f = r && null != p ? R.intl.format(R.t.EIcwoe, { username: p }) : R.intl.string(R.t.UqnlQF),
        N = r && null != d ? R.intl.string(R.t["75s2Rq"]) : R.intl.string(R.t["62xU4E"]),
        w = r && null != d ? R.intl.formatToPlainString(R.t.BCjSZy, { username: d }) : R.intl.string(R.t.UqnlQF);
    return (0, l.jsx)("div", {
        className: G.ws,
        children: (0, l.jsxs)(S.F, {
            component: (0, l.jsxs)("div", {
                className: G.NG,
                children: [
                    (0, l.jsxs)("div", {
                        className: G.kc,
                        children: [
                            !j && null != b && (0, l.jsx)(y.eu, { src: b, size: D._3.SIZE_24, "aria-hidden": !0 }),
                            (0, l.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: f }),
                        ],
                    }),
                    (0, l.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", children: N }),
                ],
            }),
            children: [
                (0, l.jsxs)("div", {
                    className: G.hG,
                    children: [
                        h.length > 0 &&
                            (0, l.jsx)(L, {
                                label: { type: "aria", text: w },
                                navId: "badge-directory-owned",
                                badges: h,
                                selectedBadgeId: t,
                                onSelectBadge: i,
                            }),
                        !r &&
                            x.length > 0 &&
                            (0, l.jsx)(L, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: R.intl.string(R.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: x,
                                selectedBadgeId: t,
                                onSelectBadge: i,
                            }),
                    ],
                }),
                r &&
                    (0, l.jsx)("div", {
                        className: G.HO,
                        children: (0, l.jsx)(g.$, {
                            variant: "secondary",
                            size: "sm",
                            fullWidth: !0,
                            onClick: c,
                            text: R.intl.string(R.t.msyp90),
                        }),
                    }),
            ],
        }),
    });
}
var q = i(194261),
    Z = i(140735),
    Y = i(899696);
function J(e) {
    if (null == e || "" === e) return null;
    let t = new Date(e);
    return Number.isNaN(t.getTime()) ? null : t;
}
function Q(e) {
    return null == e ? null : e.toLocaleDateString(R.intl.currentLocale, { month: "short", year: "numeric" });
}
function K(e) {
    var t;
    let i,
        { badge: a, isViewingOtherUser: s, targetUsername: r, isViewerOnUpgradeableNitro: d = !1 } = e,
        c = Q(J(a.obtained_at)) ?? R.intl.string(R.t.sTFApF),
        o = n.useId(),
        g = s && null != r,
        m = a.badge_id === j.$.PREMIUM_TENURE ? R.intl.string(d ? R.t["5WS9pL"] : R.t.crwYbF) : null,
        x = g ? R.intl.formatToPlainString(R.t.KyTwIh, { username: r }) : m,
        h = null != x && "" !== x,
        _ =
            ((i = (t = a.tiers).length <= 4 ? t.length : Math.ceil(t.length / 2)),
            [t.slice(0, i), t.slice(i)].filter((e) => e.length > 0)),
        b = _[0]?.length ?? 0;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            h &&
                (0, l.jsxs)("div", {
                    className: Y.u4,
                    children: [
                        d &&
                            !g &&
                            (0, l.jsx)(q.X, { size: "xxs", color: "currentColor", className: Y.ZU, "aria-hidden": !0 }),
                        (0, l.jsx)(u.E, { id: o, variant: "text-xs/medium", color: "text-subtle", children: x }),
                    ],
                }),
            (0, l.jsx)("div", {
                className: v()(Y.SV, b > 4 && Y.Li),
                role: "list",
                "aria-labelledby": h ? o : void 0,
                children: _.map((e, t) =>
                    (0, l.jsx)(
                        "div",
                        {
                            className: Y._1,
                            role: "presentation",
                            children: e.map((e) => {
                                let t = e.owned,
                                    i = e.complex_icon_static_url ?? e.simple_icon_url,
                                    n = e.name ?? e.key,
                                    r = a.tier_obtained_at?.[e.key],
                                    o = (function (e) {
                                        let {
                                            tier: t,
                                            isUnlocked: i,
                                            isViewingOtherUser: l,
                                            isViewerOnUpgradeableNitro: n,
                                            tierObtainedAt: a,
                                            badgeObtainedAtText: s,
                                        } = e;
                                        if (!i) {
                                            if (n && !l) return R.intl.string(R.t.VPu695);
                                            let e = t.requirements[0];
                                            return null != e
                                                ? (function (e, t) {
                                                      if ("months" === t) {
                                                          if (e < 12)
                                                              return R.intl.formatToPlainString(R.t.kridzK, {
                                                                  months: e,
                                                              });
                                                          let t = e / 12;
                                                          return t >= 6
                                                              ? R.intl.string(R.t.nPrx97)
                                                              : R.intl.formatToPlainString(R.t.PClsrw, { years: t });
                                                      }
                                                      return String(e);
                                                  })(e.threshold, e.unit)
                                                : "";
                                        }
                                        return l ? R.intl.string(R.t.sTFApF) : (Q(J(a)) ?? s);
                                    })({
                                        tier: e,
                                        isUnlocked: t,
                                        isViewingOtherUser: s,
                                        isViewerOnUpgradeableNitro: d,
                                        tierObtainedAt: r,
                                        badgeObtainedAtText: c,
                                    });
                                return (0, l.jsxs)(
                                    "div",
                                    {
                                        role: "listitem",
                                        className: v()(Y.zh, !t && Y.ZF),
                                        children: [
                                            null != i &&
                                                (0, l.jsx)("img", {
                                                    className: Y.Hw,
                                                    src: i,
                                                    alt: "",
                                                    "aria-hidden": !0,
                                                }),
                                            (0, l.jsxs)(u.E, {
                                                variant: "text-xxs/medium",
                                                color: t ? "text-default" : "text-muted",
                                                className: Y.hI,
                                                children: [n, (0, l.jsx)("br", {}), o],
                                            }),
                                            (0, l.jsx)(Z.A, { children: R.intl.string(t ? R.t.sTFApF : R.t.uHtDcT) }),
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
var W = i(731454),
    X = i(174459),
    ee = i(652215);
function et(e) {
    let { actionName: t, badge: i, displayedUserId: l, isSociallyNavigated: n } = e,
        a = x.default.getCurrentUser()?.id,
        s = null != i && null != a ? _.Ay.getBadgeById(i.badge_id, a) : void 0,
        r = null != i && null != a ? _.Ay.getRemainingToNextTier(i.badge_id, a) : void 0,
        d = null != l ? _.Ay.getBadges(l).filter((e) => e.owned).length : void 0;
    X.default.track(ee.HAw.BADGE_DIRECTORY_ACTION, {
        badge_action: t,
        badge_id: i?.badge_id,
        badge_tier: null != i ? ((i.owned ? i.current_tier : i.next_tier) ?? i.tiers?.[0]?.key) : void 0,
        badge_owner_id: l,
        is_owned: s?.owned ?? !1,
        progress_to_next_tier: r,
        is_earnable: i?.is_earnable ?? !1,
        is_socially_navigated: n,
        total_badges_owned: d,
    });
}
var ei = i(788868);
function el(e) {
    let t,
        {
            badge: i,
            isOwnProfile: n,
            isViewingOtherUser: a,
            targetUsername: s,
            viewedAvatarSrc: r,
            targetOwnsBadge: d,
            viewerOwnsBadge: c,
            onToggleViewedUser: o,
        } = e,
        g = (0, _.H5)(i),
        m = null != g ? R.intl.formatToPlainString(R.t["0aEh2a"], { date: new Date(g) }) : R.intl.string(R.t.sTFApF);
    if (
        ((t = n
            ? i.owned
                ? m
                : R.intl.string(R.t.uHtDcT)
            : a && null != s
              ? R.intl.formatToPlainString(R.t.Eo5Cnp, { username: V(s) })
              : i.owned
                ? m
                : R.intl.string(R.t.uHtDcT)),
        n)
    )
        return (0, l.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: t });
    let x = a && c,
        h = !a && d && null != s;
    return (0, l.jsxs)("div", {
        className: G.bn,
        children: [
            null != r && (0, l.jsx)(y.eu, { src: r, size: D._3.SIZE_16, "aria-hidden": !0 }),
            (0, l.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", className: G.CT, children: t }),
            (x || h) &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(u.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: G.CT,
                            "aria-hidden": !0,
                            children: "\xb7",
                        }),
                        (0, l.jsx)(p.Q, {
                            variant: "primary",
                            size: "sm",
                            textVariant: "text-xs/medium",
                            onClick: o,
                            text: x
                                ? R.intl.string(R.t.yxEAGH)
                                : R.intl.formatToPlainString(R.t["9GNsge"], { username: V(s) }),
                        }),
                    ],
                }),
        ],
    });
}
function en(e) {
    let t,
        {
            badge: i,
            viewerBadge: a,
            onClose: r,
            isOwnProfile: d,
            isViewingOtherUser: c,
            targetUsername: m,
            displayedUserId: h,
            targetOwnsBadge: _,
            viewerOwnsBadge: b,
            onToggleViewedUser: y,
            onViewOwnCatalog: p,
        } = e,
        B = F(h, c, 32),
        I = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let i = e.owned ? e.current_tier : e.next_tier;
            return (null != i ? t.find((e) => e.key === i) : void 0) ?? t[0];
        })(i),
        k = (0, s.bG)([C.A], () => C.A.useReducedMotion)
            ? void 0
            : (I?.complex_icon_animated_url ?? i.complex_icon_animated_url),
        S = I?.complex_icon_static_url ?? i.complex_icon_static_url,
        U = I?.simple_icon_url ?? i.simple_icon_url,
        O = k ?? S ?? U,
        D = (0, W.V)(I?.rarity ?? i.rarity),
        V = (0, P.Om)(i.badge_id),
        $ = i.badge_id === j.$.PREMIUM_TENURE,
        L = $ ? (I?.name ?? I?.key) : I?.name,
        M = $ ? R.intl.string(R.t.Ipxkog) : i.name,
        H = null != L ? `${M} ${L}` : M,
        q = a?.owned === !0 && (a.tiers?.length ?? 0) > 0 && null == a.next_tier,
        Z = x.default.getCurrentUser()?.premiumType,
        Y = $ && (Z === ei.PremiumTypes.TIER_0 || Z === ei.PremiumTypes.TIER_1);
    t = q ? R.intl.string(R.t.jY5xAL) : Y ? R.intl.string(R.t.qkwSSp) : (a?.description ?? i.description);
    let J = n.useCallback(() => {
            null != V &&
                (et({
                    actionName: "primary_badge_action_clicked",
                    badge: i,
                    displayedUserId: h,
                    isSociallyNavigated: c,
                }),
                r(),
                E.A.popAll(),
                V.ctaAction());
        }, [i, h, c, V, r]),
        Q = (0, P.ie)(i.badge_id) && !i.is_earnable,
        X = c && !i.is_earnable && !b;
    return (0, l.jsx)("div", {
        id: P.hJ,
        role: "tabpanel",
        "aria-labelledby": z(i.badge_id),
        className: G.SV,
        children: (0, l.jsxs)(f.d_, {
            className: G.C9,
            children: [
                null != O &&
                    (0, l.jsx)("img", {
                        className: v()(G.y2, null != k && O === k && G.hu),
                        src: O,
                        alt: "",
                        "aria-hidden": !0,
                    }),
                (0, l.jsxs)("div", {
                    className: G.OU,
                    children: [
                        (0, l.jsxs)("div", {
                            className: G.cQ,
                            children: [
                                (0, l.jsx)(o.D, {
                                    variant: "display-sm",
                                    color: "text-strong",
                                    className: v()(G._r, $ && G.tN),
                                    children: H,
                                }),
                                (0, l.jsx)(el, {
                                    badge: i,
                                    isOwnProfile: d,
                                    isViewingOtherUser: c,
                                    targetUsername: m,
                                    viewedAvatarSrc: B,
                                    targetOwnsBadge: _,
                                    viewerOwnsBadge: b,
                                    onToggleViewedUser: y,
                                }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: G.oA,
                            children: [
                                null != D &&
                                    (0, l.jsxs)("div", {
                                        className: G.sn,
                                        children: [
                                            (0, l.jsx)(N.E, { ...D }),
                                            (0, l.jsx)(u.E, {
                                                variant: "text-xs/medium",
                                                color: "text-subtle",
                                                children: R.intl.string(R.t["phYZe+"]),
                                            }),
                                        ],
                                    }),
                                !(0, T.uJ)(t) &&
                                    (0, l.jsxs)("div", {
                                        className: G.d9,
                                        children: [
                                            (0, l.jsxs)("div", {
                                                className: G.E4,
                                                children: [
                                                    (0, l.jsxs)("div", {
                                                        className: G.jv,
                                                        children: [
                                                            Q &&
                                                                (0, l.jsx)(u.E, {
                                                                    variant: "text-xs/medium",
                                                                    color: "text-subtle",
                                                                    className: G.c$,
                                                                    children: R.intl.string(R.t["/Gmn3f"]),
                                                                }),
                                                            (0, l.jsx)(u.E, {
                                                                variant: "text-sm/medium",
                                                                color: "text-default",
                                                                className: G.ij,
                                                                children: t,
                                                            }),
                                                        ],
                                                    }),
                                                    null != V &&
                                                        (0, l.jsx)(g.$, {
                                                            variant: Y
                                                                ? "expressive"
                                                                : b
                                                                  ? "secondary"
                                                                  : $
                                                                    ? "expressive"
                                                                    : "primary",
                                                            size: "sm",
                                                            onClick: J,
                                                            text: V.ctaLabel({
                                                                owned: b,
                                                                isViewerOnUpgradeableNitro: Y,
                                                            }),
                                                        }),
                                                ],
                                            }),
                                            (i.tiers?.length ?? 0) > 0 &&
                                                (0, l.jsxs)("div", {
                                                    className: G.cJ,
                                                    children: [
                                                        (0, l.jsx)(w.c, {}),
                                                        (0, l.jsx)(K, {
                                                            badge: i,
                                                            isViewingOtherUser: c,
                                                            targetUsername: m,
                                                            isViewerOnUpgradeableNitro: Y,
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                X &&
                                    (0, l.jsx)(A.w, {
                                        type: "info",
                                        children: R.intl.format(R.t.vFekBs, { onViewBadges: p }),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
var ea = i(470739);
function es(e) {
    let {
            transitionState: t,
            onClose: i,
            initialBadgeId: b,
            targetUserId: v,
            targetUsername: j,
            viewingCurrentUserBadges: y,
        } = e,
        p = (0, s.bG)([x.default], () => x.default.getCurrentUser()?.id),
        f = null == v || v === p,
        N = !f && null != v && !0 !== y,
        w = N ? v : p,
        A = null != w ? `viewed_user:${N ? "other" : "self"}` : void 0,
        [E, C] = n.useState(b ?? null),
        T = (0, s.bG)([_.Ay], () => (null != w ? _.Ay.getBadges(w) : []), [w]),
        B = (0, s.bG)([_.Ay], () => null != w && _.Ay.hasCatalogFor(w), [w]),
        I = (0, s.bG)([_.Ay], () => _.Ay.hasCatalogFetchErrorFor(w), [w]);
    n.useEffect(() => {
        null == w || _.Ay.hasCatalogFor(w) || (0, h.R)(w);
        let e = N ? p : v;
        f || null == e || _.Ay.hasCatalogFor(e) || (0, h.R)(e);
    }, [w, f, N, p, v]),
        n.useEffect(() => {
            null != A && m.A.increment({ name: a.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [A] });
        }, [A]);
    let k = n.useMemo(() => {
            let { earnable: e, owned: t } = M(T);
            return N ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [T, N]),
        S = null != E && null != w ? _.Ay.getBadgeById(E, w) : void 0,
        U = null != k && null != w ? _.Ay.getBadgeById(k, w) : void 0,
        O = S ?? U,
        F = (0, s.bG)([_.Ay], () => null != v && null != O && (_.Ay.getBadgeById(O.badge_id, v)?.owned ?? !1), [O, v]),
        P = (0, s.bG)([_.Ay], () => (null != p && null != O ? _.Ay.getBadgeById(O.badge_id, p) : void 0), [O, p]),
        D = P?.owned ?? !1,
        z = n.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, ea._)({ ...e, stackingBehavior: "replace" }).then(() => {
                    i();
                });
            },
            [i],
        ),
        V = n.useCallback(() => {
            null != v &&
                null != O &&
                (N
                    ? z({
                          initialBadgeId: O.badge_id,
                          targetUserId: v,
                          targetUsername: j,
                          viewingCurrentUserBadges: !0,
                      })
                    : z({ initialBadgeId: O.badge_id, targetUserId: v, targetUsername: j }));
        }, [N, O, z, v, j]),
        $ = n.useCallback(() => {
            null != p &&
                null != v &&
                (et({ actionName: "view_your_badges_pressed", badge: O, displayedUserId: w, isSociallyNavigated: N }),
                z({ targetUserId: v, targetUsername: j, viewingCurrentUserBadges: !0 }));
        }, [p, w, N, O, z, v, j]),
        L = n.useCallback(() => {
            null != w && (0, h.R)(w);
        }, [w]),
        q = n.useCallback(() => {
            et({ actionName: "badge_directory_closed", badge: O, displayedUserId: w, isSociallyNavigated: N }), i();
        }, [w, N, i, O]),
        Z = O?.badge_id;
    return (
        n.useEffect(() => {
            null != O &&
                et({ actionName: "badge_detail_viewed", badge: O, displayedUserId: w, isSociallyNavigated: N });
        }, [Z, w, N]),
        (0, l.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": R.intl.string(R.t.PEjP4L),
            transitionState: t,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: G.CR,
            children: (0, l.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: G.jE,
                children: [
                    (0, l.jsx)("div", { className: G.b, children: (0, l.jsx)(d.J, { onClick: q, size: "sm" }) }),
                    B || I
                        ? !B && I
                            ? (0, l.jsxs)("div", {
                                  className: G.IU,
                                  children: [
                                      (0, l.jsx)(o.D, {
                                          variant: "heading-lg/semibold",
                                          color: "text-strong",
                                          children: R.intl.string(R.t.iufib1),
                                      }),
                                      (0, l.jsx)(u.E, {
                                          variant: "text-sm/medium",
                                          color: "text-subtle",
                                          className: G.TQ,
                                          children: R.intl.string(R.t.eAn6z2),
                                      }),
                                      (0, l.jsx)(g.$, {
                                          variant: "primary",
                                          size: "sm",
                                          onClick: L,
                                          text: R.intl.string(R.t["7NqTJn"]),
                                      }),
                                  ],
                              })
                            : (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)(H, {
                                          selectedBadgeId: O?.badge_id ?? null,
                                          onSelectBadge: C,
                                          displayedUserId: w,
                                          isViewingOtherUser: N,
                                          targetUsername: j,
                                          onViewOwnCatalog: $,
                                      }),
                                      null != O &&
                                          (0, l.jsx)(en, {
                                              badge: O,
                                              viewerBadge: P,
                                              onClose: q,
                                              isOwnProfile: f,
                                              isViewingOtherUser: N,
                                              targetUsername: j,
                                              displayedUserId: w,
                                              targetOwnsBadge: F,
                                              viewerOwnsBadge: D,
                                              onToggleViewedUser: V,
                                              onViewOwnCatalog: $,
                                          }),
                                  ],
                              })
                        : (0, l.jsx)("div", { className: G.Lq, children: (0, l.jsx)(c.y, {}) }),
                ],
            }),
        })
    );
}
