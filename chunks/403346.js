i.d(t, { default: () => en });
var l = i(627968),
    n = i(64700),
    a = i(17928),
    s = i(935462),
    r = i(815021),
    d = i(289873),
    c = i(534514),
    o = i(834730),
    u = i(821609),
    g = i(287809),
    m = i(682618),
    x = i(982240),
    h = i(503698),
    b = i.n(h),
    _ = i(70283),
    v = i(97808),
    j = i(123292),
    y = i(364522),
    p = i(508770),
    f = i(404778),
    N = i(683071),
    w = i(982168),
    A = i(775602),
    C = i(240248);
i(321073);
var E = i(837381),
    T = i(741918),
    B = i(939249),
    I = i(707554),
    k = i(260762),
    S = i(486020);
function U(e, t, i) {
    let l = (0, a.bG)([g.default], () => (null != e ? g.default.getUser(e) : void 0), [e]);
    if (null != l && t) return (0, S.ku)({ id: l.id, avatar: l.avatar, discriminator: l.discriminator }, !1, i);
}
var F = i(975858),
    O = i(778712),
    P = i(375708),
    R = i(490308);
function D(e) {
    return `badge-tab-${e}`;
}
function G(e) {
    let t = Array.from(e);
    return t.length > 19 ? `${t.slice(0, 19).join("")}...` : e;
}
function z(e) {
    let { badge: t, isSelected: i, onSelect: n, itemId: a } = e,
        s = (0, E.rm)(a);
    return (0, l.jsx)(B.D, {
        ...s,
        role: "tab",
        id: D(t.badge_id),
        "aria-label": t.name,
        "aria-selected": i,
        "aria-controls": i ? F.hJ : void 0,
        className: b()(R.oL, i && R.xO),
        onFocus: s.onFocus,
        onClick: n,
        children:
            null != t.simple_icon_url &&
            (0, l.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: R.pW }),
    });
}
function V(e) {
    let { label: t, navId: i, badges: n, selectedBadgeId: a, onSelectBadge: s } = e,
        r = (0, k.A)(i, T.Gl.HORIZONTAL);
    return (0, l.jsxs)("div", {
        className: R.zE,
        children: [
            "heading" === t.type &&
                (0, l.jsx)(c.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, l.jsx)(E.hD, {
                navigator: r,
                children: (0, l.jsx)(E.PR, {
                    children: (e) =>
                        (0, l.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: R.yq,
                            children: n.map((e, t) =>
                                (0, l.jsx)(
                                    z,
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
function $(e) {
    let t = [],
        i = [];
    for (let l of e) l.owned ? i.push(l) : l.is_earnable && t.push(l);
    return { earnable: t, owned: i };
}
function L(e) {
    let {
            selectedBadgeId: t,
            onSelectBadge: i,
            displayedUserId: s,
            isViewingOtherUser: r,
            targetUsername: d,
            onViewOwnCatalog: g,
        } = e,
        m = (0, a.bG)([x.Ay], () => (null != s ? x.Ay.getBadges(s) : []), [s]),
        { earnable: h, owned: b } = n.useMemo(() => $(m), [m]),
        _ = U(s, r, 48),
        j = null != d ? G(d) : null,
        y = null != d && j !== d,
        p =
            null != j && y && null != _
                ? (0, l.jsxs)("span", {
                      className: R._p,
                      children: [(0, l.jsx)(v.eu, { src: _, size: O._3.SIZE_24, "aria-hidden": !0 }), j],
                  })
                : j,
        f = r && null != p ? P.intl.format(P.t.EIcwoe, { username: p }) : P.intl.string(P.t.UqnlQF),
        N = r && null != d ? P.intl.string(P.t["75s2Rq"]) : P.intl.string(P.t["62xU4E"]),
        w = r && null != d ? P.intl.formatToPlainString(P.t.BCjSZy, { username: d }) : P.intl.string(P.t.UqnlQF);
    return (0, l.jsx)("div", {
        className: R.ws,
        children: (0, l.jsxs)(I.F, {
            component: (0, l.jsxs)("div", {
                className: R.NG,
                children: [
                    (0, l.jsxs)("div", {
                        className: R.kc,
                        children: [
                            !y && null != _ && (0, l.jsx)(v.eu, { src: _, size: O._3.SIZE_24, "aria-hidden": !0 }),
                            (0, l.jsx)(c.D, { variant: "heading-lg/semibold", color: "text-strong", children: f }),
                        ],
                    }),
                    (0, l.jsx)(o.E, { variant: "text-sm/medium", color: "text-subtle", children: N }),
                ],
            }),
            children: [
                (0, l.jsxs)("div", {
                    className: R.hG,
                    children: [
                        b.length > 0 &&
                            (0, l.jsx)(V, {
                                label: { type: "aria", text: w },
                                navId: "badge-directory-owned",
                                badges: b,
                                selectedBadgeId: t,
                                onSelectBadge: i,
                            }),
                        !r &&
                            h.length > 0 &&
                            (0, l.jsx)(V, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: P.intl.string(P.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: h,
                                selectedBadgeId: t,
                                onSelectBadge: i,
                            }),
                    ],
                }),
                r &&
                    (0, l.jsx)("div", {
                        className: R.HO,
                        children: (0, l.jsx)(u.$, {
                            variant: "secondary",
                            size: "sm",
                            fullWidth: !0,
                            onClick: g,
                            text: P.intl.string(P.t.msyp90),
                        }),
                    }),
            ],
        }),
    });
}
var M = i(194261),
    H = i(140735),
    q = i(899696);
function Z(e) {
    if (null == e || "" === e) return null;
    let t = new Date(e);
    return Number.isNaN(t.getTime()) ? null : t;
}
function J(e) {
    return null == e ? null : e.toLocaleDateString(P.intl.currentLocale, { month: "short", year: "numeric" });
}
function Y(e) {
    var t;
    let i,
        { badge: a, isViewingOtherUser: s, targetUsername: r, isViewerOnUpgradeableNitro: d = !1 } = e,
        c = J(Z(a.obtained_at)) ?? P.intl.string(P.t.sTFApF),
        u = n.useId(),
        g = s && null != r,
        m = a.badge_id === _.$.PREMIUM_TENURE ? P.intl.string(d ? P.t["5WS9pL"] : P.t.crwYbF) : null,
        x = g ? P.intl.formatToPlainString(P.t.KyTwIh, { username: r }) : m,
        h = null != x && "" !== x,
        v =
            ((i = (t = a.tiers).length <= 4 ? t.length : Math.ceil(t.length / 2)),
            [t.slice(0, i), t.slice(i)].filter((e) => e.length > 0)),
        j = v[0]?.length ?? 0;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            h &&
                (0, l.jsxs)("div", {
                    className: q.u4,
                    children: [
                        d &&
                            !g &&
                            (0, l.jsx)(M.X, { size: "xxs", color: "currentColor", className: q.ZU, "aria-hidden": !0 }),
                        (0, l.jsx)(o.E, { id: u, variant: "text-xs/medium", color: "text-subtle", children: x }),
                    ],
                }),
            (0, l.jsx)("div", {
                className: b()(q.SV, j > 4 && q.Li),
                role: "list",
                "aria-labelledby": h ? u : void 0,
                children: v.map((e, t) =>
                    (0, l.jsx)(
                        "div",
                        {
                            className: q._1,
                            role: "presentation",
                            children: e.map((e) => {
                                let t = e.owned,
                                    i = e.complex_icon_static_url ?? e.simple_icon_url,
                                    n = e.name ?? e.key,
                                    r = a.tier_obtained_at?.[e.key],
                                    u = (function (e) {
                                        let {
                                            tier: t,
                                            isUnlocked: i,
                                            isViewingOtherUser: l,
                                            isViewerOnUpgradeableNitro: n,
                                            tierObtainedAt: a,
                                            badgeObtainedAtText: s,
                                        } = e;
                                        if (!i) {
                                            if (n && !l) return P.intl.string(P.t.VPu695);
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
                                        return l ? P.intl.string(P.t.sTFApF) : (J(Z(a)) ?? s);
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
                                        className: b()(q.zh, !t && q.ZF),
                                        children: [
                                            null != i &&
                                                (0, l.jsx)("img", {
                                                    className: q.Hw,
                                                    src: i,
                                                    alt: "",
                                                    "aria-hidden": !0,
                                                }),
                                            (0, l.jsxs)(o.E, {
                                                variant: "text-xxs/medium",
                                                color: t ? "text-default" : "text-muted",
                                                className: q.hI,
                                                children: [n, (0, l.jsx)("br", {}), u],
                                            }),
                                            (0, l.jsx)(H.A, { children: P.intl.string(t ? P.t.sTFApF : P.t.uHtDcT) }),
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
var Q = i(731454),
    W = i(174459),
    K = i(652215);
function X(e) {
    let { actionName: t, badge: i, displayedUserId: l, isSociallyNavigated: n } = e,
        a = g.default.getCurrentUser()?.id,
        s = null != i && null != a ? x.Ay.getBadgeById(i.badge_id, a) : void 0,
        r = null != i && null != a ? x.Ay.getRemainingToNextTier(i.badge_id, a) : void 0,
        d = null != l ? x.Ay.getBadges(l).filter((e) => e.owned).length : void 0;
    W.default.track(K.HAw.BADGE_DIRECTORY_ACTION, {
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
var ee = i(788868);
function et(e) {
    let t,
        {
            badge: i,
            isOwnProfile: n,
            isViewingOtherUser: a,
            targetUsername: s,
            viewedAvatarSrc: r,
            targetOwnsBadge: d,
            viewerOwnsBadge: c,
            onToggleViewedUser: u,
        } = e,
        g = (0, x.H5)(i),
        m = null != g ? P.intl.formatToPlainString(P.t["0aEh2a"], { date: new Date(g) }) : P.intl.string(P.t.sTFApF);
    if (
        ((t = n
            ? i.owned
                ? m
                : P.intl.string(P.t.uHtDcT)
            : a && null != s
              ? P.intl.formatToPlainString(P.t.Eo5Cnp, { username: G(s) })
              : i.owned
                ? m
                : P.intl.string(P.t.uHtDcT)),
        n)
    )
        return (0, l.jsx)(o.E, { variant: "text-xs/medium", color: "text-subtle", children: t });
    let h = a && c,
        b = !a && d && null != s;
    return (0, l.jsxs)("div", {
        className: R.bn,
        children: [
            null != r && (0, l.jsx)(v.eu, { src: r, size: O._3.SIZE_16, "aria-hidden": !0 }),
            (0, l.jsx)(o.E, { variant: "text-xs/medium", color: "text-subtle", className: R.CT, children: t }),
            (h || b) &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(o.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: R.CT,
                            "aria-hidden": !0,
                            children: "\xb7",
                        }),
                        (0, l.jsx)(j.Q, {
                            variant: "primary",
                            size: "sm",
                            textVariant: "text-xs/medium",
                            onClick: u,
                            text: h
                                ? P.intl.string(P.t.yxEAGH)
                                : P.intl.formatToPlainString(P.t["9GNsge"], { username: G(s) }),
                        }),
                    ],
                }),
        ],
    });
}
function ei(e) {
    let t,
        {
            badge: i,
            viewerBadge: s,
            onClose: r,
            isOwnProfile: d,
            isViewingOtherUser: m,
            targetUsername: x,
            displayedUserId: h,
            targetOwnsBadge: v,
            viewerOwnsBadge: j,
            onToggleViewedUser: E,
            onViewOwnCatalog: T,
        } = e,
        B = U(h, m, 32),
        I = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let i = e.owned ? e.current_tier : e.next_tier;
            return (null != i ? t.find((e) => e.key === i) : void 0) ?? t[0];
        })(i),
        k = (0, a.bG)([A.A], () => A.A.useReducedMotion)
            ? void 0
            : (I?.complex_icon_animated_url ?? i.complex_icon_animated_url),
        S = I?.complex_icon_static_url ?? i.complex_icon_static_url,
        O = I?.simple_icon_url ?? i.simple_icon_url,
        G = k ?? S ?? O,
        z = (0, Q.V)(I?.rarity ?? i.rarity),
        V = (0, F.Om)(i.badge_id),
        $ = i.badge_id === _.$.PREMIUM_TENURE,
        L = $ ? (I?.name ?? I?.key) : I?.name,
        M = $ ? P.intl.string(P.t.Ipxkog) : i.name,
        H = null != L ? `${M} ${L}` : M,
        q = s?.owned === !0 && (s.tiers?.length ?? 0) > 0 && null == s.next_tier,
        Z = g.default.getCurrentUser()?.premiumType,
        J = $ && (Z === ee.PremiumTypes.TIER_0 || Z === ee.PremiumTypes.TIER_1);
    t = q ? P.intl.string(P.t.jY5xAL) : J ? P.intl.string(P.t.qkwSSp) : (s?.description ?? i.description);
    let W = n.useCallback(() => {
            null != V &&
                (X({
                    actionName: "primary_badge_action_clicked",
                    badge: i,
                    displayedUserId: h,
                    isSociallyNavigated: m,
                }),
                r(),
                w.A.popAll(),
                V.ctaAction());
        }, [i, h, m, V, r]),
        K = (0, F.ie)(i.badge_id) && !i.is_earnable,
        ei = m && !i.is_earnable && !j;
    return (0, l.jsx)("div", {
        id: F.hJ,
        role: "tabpanel",
        "aria-labelledby": D(i.badge_id),
        className: R.SV,
        children: (0, l.jsxs)(y.d_, {
            className: R.C9,
            children: [
                null != G &&
                    (0, l.jsx)("img", {
                        className: b()(R.y2, null != k && G === k && R.hu),
                        src: G,
                        alt: "",
                        "aria-hidden": !0,
                    }),
                (0, l.jsxs)("div", {
                    className: R.OU,
                    children: [
                        (0, l.jsxs)("div", {
                            className: R.cQ,
                            children: [
                                (0, l.jsx)(c.D, {
                                    variant: "display-sm",
                                    color: "text-strong",
                                    className: b()(R._r, $ && R.tN),
                                    children: H,
                                }),
                                (0, l.jsx)(et, {
                                    badge: i,
                                    isOwnProfile: d,
                                    isViewingOtherUser: m,
                                    targetUsername: x,
                                    viewedAvatarSrc: B,
                                    targetOwnsBadge: v,
                                    viewerOwnsBadge: j,
                                    onToggleViewedUser: E,
                                }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: R.oA,
                            children: [
                                null != z &&
                                    (0, l.jsxs)("div", {
                                        className: R.sn,
                                        children: [
                                            (0, l.jsx)(p.E, { ...z }),
                                            (0, l.jsx)(o.E, {
                                                variant: "text-xs/medium",
                                                color: "text-subtle",
                                                children: P.intl.string(P.t["phYZe+"]),
                                            }),
                                        ],
                                    }),
                                !(0, C.uJ)(t) &&
                                    (0, l.jsxs)("div", {
                                        className: R.d9,
                                        children: [
                                            (0, l.jsxs)("div", {
                                                className: R.E4,
                                                children: [
                                                    (0, l.jsxs)("div", {
                                                        className: R.jv,
                                                        children: [
                                                            K &&
                                                                (0, l.jsx)(o.E, {
                                                                    variant: "text-xs/medium",
                                                                    color: "text-subtle",
                                                                    className: R.c$,
                                                                    children: P.intl.string(P.t["/Gmn3f"]),
                                                                }),
                                                            (0, l.jsx)(o.E, {
                                                                variant: "text-sm/medium",
                                                                color: "text-default",
                                                                className: R.ij,
                                                                children: t,
                                                            }),
                                                        ],
                                                    }),
                                                    null != V &&
                                                        (0, l.jsx)(u.$, {
                                                            variant: J
                                                                ? "expressive"
                                                                : j
                                                                  ? "secondary"
                                                                  : $
                                                                    ? "expressive"
                                                                    : "primary",
                                                            size: "sm",
                                                            onClick: W,
                                                            text: V.ctaLabel({
                                                                owned: j,
                                                                isViewerOnUpgradeableNitro: J,
                                                            }),
                                                        }),
                                                ],
                                            }),
                                            (i.tiers?.length ?? 0) > 0 &&
                                                (0, l.jsxs)("div", {
                                                    className: R.cJ,
                                                    children: [
                                                        (0, l.jsx)(f.c, {}),
                                                        (0, l.jsx)(Y, {
                                                            badge: i,
                                                            isViewingOtherUser: m,
                                                            targetUsername: x,
                                                            isViewerOnUpgradeableNitro: J,
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                ei &&
                                    (0, l.jsx)(N.w, {
                                        type: "info",
                                        children: P.intl.format(P.t.vFekBs, { onViewBadges: T }),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
var el = i(470739);
function en(e) {
    let {
            transitionState: t,
            onClose: i,
            initialBadgeId: h,
            targetUserId: b,
            targetUsername: _,
            viewingCurrentUserBadges: v,
        } = e,
        j = (0, a.bG)([g.default], () => g.default.getCurrentUser()?.id),
        y = null == b || b === j,
        p = !y && null != b && !0 !== v,
        f = p ? b : j,
        [N, w] = n.useState(h ?? null),
        A = (0, a.bG)([x.Ay], () => (null != f ? x.Ay.getBadges(f) : []), [f]),
        C = (0, a.bG)([x.Ay], () => null != f && x.Ay.hasCatalogFor(f), [f]),
        E = (0, a.bG)([x.Ay], () => x.Ay.hasCatalogFetchErrorFor(f), [f]);
    n.useEffect(() => {
        null == f || x.Ay.hasCatalogFor(f) || (0, m.R)(f);
        let e = p ? j : b;
        y || null == e || x.Ay.hasCatalogFor(e) || (0, m.R)(e);
    }, [f, y, p, j, b]);
    let T = n.useMemo(() => {
            let { earnable: e, owned: t } = $(A);
            return p ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [A, p]),
        B = null != N && null != f ? x.Ay.getBadgeById(N, f) : void 0,
        I = null != T && null != f ? x.Ay.getBadgeById(T, f) : void 0,
        k = B ?? I,
        S = (0, a.bG)([x.Ay], () => null != b && null != k && (x.Ay.getBadgeById(k.badge_id, b)?.owned ?? !1), [k, b]),
        U = (0, a.bG)([x.Ay], () => (null != j && null != k ? x.Ay.getBadgeById(k.badge_id, j) : void 0), [k, j]),
        F = U?.owned ?? !1,
        O = n.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, el._)({ ...e, stackingBehavior: "replace" }).then(() => {
                    i();
                });
            },
            [i],
        ),
        D = n.useCallback(() => {
            null != b &&
                null != k &&
                (p
                    ? O({
                          initialBadgeId: k.badge_id,
                          targetUserId: b,
                          targetUsername: _,
                          viewingCurrentUserBadges: !0,
                      })
                    : O({ initialBadgeId: k.badge_id, targetUserId: b, targetUsername: _ }));
        }, [p, k, O, b, _]),
        G = n.useCallback(() => {
            null != j &&
                null != b &&
                (X({ actionName: "view_your_badges_pressed", badge: k, displayedUserId: f, isSociallyNavigated: p }),
                O({ targetUserId: b, targetUsername: _, viewingCurrentUserBadges: !0 }));
        }, [j, f, p, k, O, b, _]),
        z = n.useCallback(() => {
            null != f && (0, m.R)(f);
        }, [f]),
        V = n.useCallback(() => {
            X({ actionName: "badge_directory_closed", badge: k, displayedUserId: f, isSociallyNavigated: p }), i();
        }, [f, p, i, k]),
        M = k?.badge_id;
    return (
        n.useEffect(() => {
            null != k && X({ actionName: "badge_detail_viewed", badge: k, displayedUserId: f, isSociallyNavigated: p });
        }, [M, f, p]),
        (0, l.jsx)(s.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": P.intl.string(P.t.PEjP4L),
            transitionState: t,
            size: s.rI.DYNAMIC,
            hideShadow: !0,
            className: R.CR,
            children: (0, l.jsxs)(s.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: R.jE,
                children: [
                    (0, l.jsx)("div", { className: R.b, children: (0, l.jsx)(r.J, { onClick: V, size: "sm" }) }),
                    C || E
                        ? !C && E
                            ? (0, l.jsxs)("div", {
                                  className: R.IU,
                                  children: [
                                      (0, l.jsx)(c.D, {
                                          variant: "heading-lg/semibold",
                                          color: "text-strong",
                                          children: P.intl.string(P.t.iufib1),
                                      }),
                                      (0, l.jsx)(o.E, {
                                          variant: "text-sm/medium",
                                          color: "text-subtle",
                                          className: R.TQ,
                                          children: P.intl.string(P.t.eAn6z2),
                                      }),
                                      (0, l.jsx)(u.$, {
                                          variant: "primary",
                                          size: "sm",
                                          onClick: z,
                                          text: P.intl.string(P.t["7NqTJn"]),
                                      }),
                                  ],
                              })
                            : (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)(L, {
                                          selectedBadgeId: k?.badge_id ?? null,
                                          onSelectBadge: w,
                                          displayedUserId: f,
                                          isViewingOtherUser: p,
                                          targetUsername: _,
                                          onViewOwnCatalog: G,
                                      }),
                                      null != k &&
                                          (0, l.jsx)(ei, {
                                              badge: k,
                                              viewerBadge: U,
                                              onClose: V,
                                              isOwnProfile: y,
                                              isViewingOtherUser: p,
                                              targetUsername: _,
                                              displayedUserId: f,
                                              targetOwnsBadge: S,
                                              viewerOwnsBadge: F,
                                              onToggleViewedUser: D,
                                              onViewOwnCatalog: G,
                                          }),
                                  ],
                              })
                        : (0, l.jsx)("div", { className: R.Lq, children: (0, l.jsx)(d.y, {}) }),
                ],
            }),
        })
    );
}
