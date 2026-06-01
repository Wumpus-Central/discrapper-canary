i.d(t, { default: () => ei });
var l = i(627968),
    n = i(64700),
    a = i(17928),
    r = i(935462),
    s = i(815021),
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
    f = i(508770),
    p = i(404778),
    N = i(683071),
    w = i(982168),
    A = i(775602),
    C = i(240248);
i(321073);
var E = i(837381),
    B = i(741918),
    k = i(939249),
    I = i(707554),
    T = i(260762),
    S = i(486020);
function U(e, t, i) {
    let l = (0, a.bG)([g.default], () => (null != e ? g.default.getUser(e) : void 0), [e]);
    if (null != l && t) return (0, S.ku)({ id: l.id, avatar: l.avatar, discriminator: l.discriminator }, !1, i);
}
var F = i(92111),
    O = i(778712),
    D = i(375708),
    G = i(490308);
function P(e) {
    return `badge-tab-${e}`;
}
function R(e) {
    let t = Array.from(e);
    return t.length > 19 ? `${t.slice(0, 19).join("")}...` : e;
}
function z(e) {
    let { badge: t, isSelected: i, onSelect: n, itemId: a } = e,
        r = (0, E.rm)(a);
    return (0, l.jsx)(k.D, {
        ...r,
        role: "tab",
        id: P(t.badge_id),
        "aria-label": t.name,
        "aria-selected": i,
        "aria-controls": i ? F.hJ : void 0,
        className: b()(G.oL, i && G.xO),
        onFocus: r.onFocus,
        onClick: n,
        children:
            null != t.simple_icon_url &&
            (0, l.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: G.pW }),
    });
}
function V(e) {
    let { label: t, navId: i, badges: n, selectedBadgeId: a, onSelectBadge: r } = e,
        s = (0, T.A)(i, B.Gl.HORIZONTAL);
    return (0, l.jsxs)("div", {
        className: G.zE,
        children: [
            "heading" === t.type &&
                (0, l.jsx)(c.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, l.jsx)(E.hD, {
                navigator: s,
                children: (0, l.jsx)(E.PR, {
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
                                    z,
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
function $(e) {
    let t = [],
        i = [];
    for (let l of e) l.owned ? i.push(l) : l.is_earnable && t.push(l);
    return { earnable: t, owned: i };
}
function M(e) {
    let {
            selectedBadgeId: t,
            onSelectBadge: i,
            displayedUserId: r,
            isViewingOtherUser: s,
            targetUsername: d,
            onViewOwnCatalog: g,
        } = e,
        m = (0, a.bG)([x.Ay], () => (null != r ? x.Ay.getBadges(r) : []), [r]),
        { earnable: h, owned: b } = n.useMemo(() => $(m), [m]),
        _ = U(r, s, 48),
        j = null != d ? R(d) : null,
        y = null != d && j !== d,
        f =
            null != j && y && null != _
                ? (0, l.jsxs)("span", {
                      className: G._p,
                      children: [(0, l.jsx)(v.eu, { src: _, size: O._3.SIZE_24, "aria-hidden": !0 }), j],
                  })
                : j,
        p = s && null != f ? D.intl.format(D.t.EIcwoe, { username: f }) : D.intl.string(D.t.UqnlQF),
        N = s && null != d ? D.intl.string(D.t["75s2Rq"]) : D.intl.string(D.t["62xU4E"]),
        w = s && null != d ? D.intl.formatToPlainString(D.t.BCjSZy, { username: d }) : D.intl.string(D.t.UqnlQF);
    return (0, l.jsx)("div", {
        className: G.ws,
        children: (0, l.jsxs)(I.F, {
            component: (0, l.jsxs)("div", {
                className: G.NG,
                children: [
                    (0, l.jsxs)("div", {
                        className: G.kc,
                        children: [
                            !y && null != _ && (0, l.jsx)(v.eu, { src: _, size: O._3.SIZE_24, "aria-hidden": !0 }),
                            (0, l.jsx)(c.D, { variant: "heading-lg/semibold", color: "text-strong", children: p }),
                        ],
                    }),
                    (0, l.jsx)(o.E, { variant: "text-sm/medium", color: "text-subtle", children: N }),
                ],
            }),
            children: [
                (0, l.jsxs)("div", {
                    className: G.hG,
                    children: [
                        b.length > 0 &&
                            (0, l.jsx)(V, {
                                label: { type: "aria", text: w },
                                navId: "badge-directory-owned",
                                badges: b,
                                selectedBadgeId: t,
                                onSelectBadge: i,
                            }),
                        !s &&
                            h.length > 0 &&
                            (0, l.jsx)(V, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: D.intl.string(D.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: h,
                                selectedBadgeId: t,
                                onSelectBadge: i,
                            }),
                    ],
                }),
                s &&
                    (0, l.jsx)("div", {
                        className: G.HO,
                        children: (0, l.jsx)(u.$, {
                            variant: "secondary",
                            size: "sm",
                            fullWidth: !0,
                            onClick: g,
                            text: D.intl.string(D.t.msyp90),
                        }),
                    }),
            ],
        }),
    });
}
var q = i(140735),
    H = i(899696);
function L(e) {
    if (null == e || "" === e) return null;
    let t = new Date(e);
    return Number.isNaN(t.getTime()) ? null : t;
}
function Z(e) {
    return null == e ? null : e.toLocaleDateString(D.intl.currentLocale, { month: "short", year: "numeric" });
}
function J(e) {
    var t;
    let i,
        { badge: a, isViewingOtherUser: r, targetUsername: s } = e,
        d = (function (e) {
            if (!e.owned) return 0;
            let t = e.tiers.find((t) => t.key === e.current_tier),
                i = t?.requirements[0]?.threshold ?? 0;
            return Math.max(e.progress?.[0]?.current ?? 0, i);
        })(a),
        c = Z(L(a.obtained_at)) ?? D.intl.string(D.t.sTFApF),
        u = n.useId(),
        g = r && null != s,
        m = a.badge_id === _.$.PREMIUM_TENURE ? D.intl.string(D.t.crwYbF) : null,
        x = g ? D.intl.formatToPlainString(D.t.KyTwIh, { username: s }) : m,
        h = null != x && "" !== x,
        v =
            ((i = (t = a.tiers).length <= 4 ? t.length : Math.ceil(t.length / 2)),
            [t.slice(0, i), t.slice(i)].filter((e) => e.length > 0)),
        j = v[0]?.length ?? 0;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            h &&
                (0, l.jsx)(o.E, {
                    id: u,
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    className: H.u4,
                    children: x,
                }),
            (0, l.jsx)("div", {
                className: b()(H.SV, j > 4 && H.Li),
                role: "list",
                "aria-labelledby": h ? u : void 0,
                children: v.map((e, t) =>
                    (0, l.jsx)(
                        "div",
                        {
                            className: H._1,
                            role: "presentation",
                            children: e.map((e) => {
                                let t = e.requirements[0]?.threshold ?? 0,
                                    i = a.owned && d >= t,
                                    n = e.complex_icon_static_url ?? e.simple_icon_url,
                                    s = e.name ?? e.key,
                                    u = a.tier_obtained_at?.[e.key],
                                    g = (function (e) {
                                        let {
                                            tier: t,
                                            isUnlocked: i,
                                            isViewingOtherUser: l,
                                            tierObtainedAt: n,
                                            badgeObtainedAtText: a,
                                        } = e;
                                        if (!i) {
                                            let e = t.requirements[0];
                                            return null != e
                                                ? (function (e, t) {
                                                      if ("months" === t) {
                                                          if (e < 12)
                                                              return D.intl.formatToPlainString(D.t.kridzK, {
                                                                  months: e,
                                                              });
                                                          let t = e / 12;
                                                          return t >= 6
                                                              ? D.intl.string(D.t.nPrx97)
                                                              : D.intl.formatToPlainString(D.t.PClsrw, { years: t });
                                                      }
                                                      return String(e);
                                                  })(e.threshold, e.unit)
                                                : "";
                                        }
                                        return l ? D.intl.string(D.t.sTFApF) : (Z(L(n)) ?? a);
                                    })({
                                        tier: e,
                                        isUnlocked: i,
                                        isViewingOtherUser: r,
                                        tierObtainedAt: u,
                                        badgeObtainedAtText: c,
                                    });
                                return (0, l.jsxs)(
                                    "div",
                                    {
                                        role: "listitem",
                                        className: b()(H.zh, !i && H.ZF),
                                        children: [
                                            null != n &&
                                                (0, l.jsx)("img", {
                                                    className: H.Hw,
                                                    src: n,
                                                    alt: "",
                                                    "aria-hidden": !0,
                                                }),
                                            (0, l.jsxs)(o.E, {
                                                variant: "text-xxs/medium",
                                                color: i ? "text-default" : "text-muted",
                                                className: H.hI,
                                                children: [s, (0, l.jsx)("br", {}), g],
                                            }),
                                            (0, l.jsx)(q.A, { children: D.intl.string(i ? D.t.sTFApF : D.t.uHtDcT) }),
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
var Y = i(731454),
    Q = i(174459),
    K = i(652215);
function W(e) {
    let { actionName: t, badge: i, displayedUserId: l, isSociallyNavigated: n } = e,
        a = g.default.getCurrentUser()?.id,
        r = null != i && null != a ? x.Ay.getBadgeById(i.badge_id, a) : void 0,
        s = null != i && null != a ? x.Ay.getRemainingToNextTier(i.badge_id, a) : void 0,
        d = null != l ? x.Ay.getBadges(l).filter((e) => e.owned).length : void 0;
    Q.default.track(K.HAw.BADGE_DIRECTORY_ACTION, {
        badge_action: t,
        badge_id: i?.badge_id,
        badge_tier: null != i ? ((i.owned ? i.current_tier : i.next_tier) ?? i.tiers?.[0]?.key) : void 0,
        badge_owner_id: l,
        is_owned: r?.owned ?? !1,
        progress_to_next_tier: s,
        is_earnable: i?.is_earnable ?? !1,
        is_socially_navigated: n,
        total_badges_owned: d,
    });
}
function X(e) {
    let t,
        {
            badge: i,
            isOwnProfile: n,
            isViewingOtherUser: a,
            targetUsername: r,
            viewedAvatarSrc: s,
            targetOwnsBadge: d,
            viewerOwnsBadge: c,
            onToggleViewedUser: u,
        } = e,
        g = (0, x.H5)(i),
        m = null != g ? D.intl.formatToPlainString(D.t["0aEh2a"], { date: new Date(g) }) : D.intl.string(D.t.sTFApF);
    if (
        ((t = n
            ? i.owned
                ? m
                : D.intl.string(D.t.uHtDcT)
            : a && null != r
              ? D.intl.formatToPlainString(D.t.Eo5Cnp, { username: R(r) })
              : i.owned
                ? m
                : D.intl.string(D.t.uHtDcT)),
        n)
    )
        return (0, l.jsx)(o.E, { variant: "text-xs/medium", color: "text-subtle", children: t });
    let h = a && c,
        b = !a && d && null != r;
    return (0, l.jsxs)("div", {
        className: G.bn,
        children: [
            null != s && (0, l.jsx)(v.eu, { src: s, size: O._3.SIZE_16, "aria-hidden": !0 }),
            (0, l.jsx)(o.E, { variant: "text-xs/medium", color: "text-subtle", className: G.CT, children: t }),
            (h || b) &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(o.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: G.CT,
                            "aria-hidden": !0,
                            children: "\xb7",
                        }),
                        (0, l.jsx)(j.Q, {
                            variant: "primary",
                            size: "sm",
                            textVariant: "text-xs/medium",
                            onClick: u,
                            text: h
                                ? D.intl.string(D.t.yxEAGH)
                                : D.intl.formatToPlainString(D.t["9GNsge"], { username: R(r) }),
                        }),
                    ],
                }),
        ],
    });
}
function ee(e) {
    let t,
        {
            badge: i,
            viewerBadge: r,
            onClose: s,
            isOwnProfile: d,
            isViewingOtherUser: g,
            targetUsername: m,
            displayedUserId: x,
            targetOwnsBadge: h,
            viewerOwnsBadge: v,
            onToggleViewedUser: j,
            onViewOwnCatalog: E,
        } = e,
        B = U(x, g, 32),
        k = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let i = e.owned ? e.current_tier : e.next_tier;
            return (null != i ? t.find((e) => e.key === i) : void 0) ?? t[0];
        })(i),
        I = (0, a.bG)([A.A], () => A.A.useReducedMotion)
            ? void 0
            : (k?.complex_icon_animated_url ?? i.complex_icon_animated_url),
        T = k?.complex_icon_static_url ?? i.complex_icon_static_url,
        S = k?.simple_icon_url ?? i.simple_icon_url,
        O = I ?? T ?? S,
        R = (0, Y.V)(k?.rarity ?? i.rarity),
        z = (0, F.Om)(i.badge_id),
        V = i.badge_id === _.$.PREMIUM_TENURE,
        $ = V ? (k?.name ?? k?.key) : k?.name,
        M = V ? D.intl.string(D.t.Ipxkog) : i.name,
        q = null != $ ? `${M} ${$}` : M;
    t =
        r?.owned === !0 && (r.tiers?.length ?? 0) > 0 && null == r.next_tier
            ? D.intl.string(D.t.jY5xAL)
            : (r?.description ?? i.description);
    let H = n.useCallback(() => {
            null != z &&
                (W({
                    actionName: "primary_badge_action_clicked",
                    badge: i,
                    displayedUserId: x,
                    isSociallyNavigated: g,
                }),
                s(),
                w.A.popAll(),
                z.ctaAction());
        }, [i, x, g, z, s]),
        L = (0, F.ie)(i.badge_id) && !i.is_earnable,
        Z = g && !i.is_earnable && !v;
    return (0, l.jsx)("div", {
        id: F.hJ,
        role: "tabpanel",
        "aria-labelledby": P(i.badge_id),
        className: G.SV,
        children: (0, l.jsxs)(y.d_, {
            className: G.C9,
            children: [
                null != O &&
                    (0, l.jsx)("img", {
                        className: b()(G.y2, null != I && O === I && G.hu),
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
                                (0, l.jsx)(c.D, {
                                    variant: "display-sm",
                                    color: "text-strong",
                                    className: b()(G._r, V && G.tN),
                                    children: q,
                                }),
                                (0, l.jsx)(X, {
                                    badge: i,
                                    isOwnProfile: d,
                                    isViewingOtherUser: g,
                                    targetUsername: m,
                                    viewedAvatarSrc: B,
                                    targetOwnsBadge: h,
                                    viewerOwnsBadge: v,
                                    onToggleViewedUser: j,
                                }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: G.oA,
                            children: [
                                null != R &&
                                    (0, l.jsxs)("div", {
                                        className: G.sn,
                                        children: [
                                            (0, l.jsx)(f.E, { ...R }),
                                            (0, l.jsx)(o.E, {
                                                variant: "text-xs/medium",
                                                color: "text-subtle",
                                                children: D.intl.string(D.t["phYZe+"]),
                                            }),
                                        ],
                                    }),
                                !(0, C.uJ)(t) &&
                                    (0, l.jsxs)("div", {
                                        className: G.d9,
                                        children: [
                                            (0, l.jsxs)("div", {
                                                className: G.E4,
                                                children: [
                                                    (0, l.jsxs)("div", {
                                                        className: G.jv,
                                                        children: [
                                                            L &&
                                                                (0, l.jsx)(o.E, {
                                                                    variant: "text-xs/medium",
                                                                    color: "text-subtle",
                                                                    className: G.c$,
                                                                    children: D.intl.string(D.t["/Gmn3f"]),
                                                                }),
                                                            (0, l.jsx)(o.E, {
                                                                variant: "text-sm/medium",
                                                                color: "text-default",
                                                                className: G.ij,
                                                                children: t,
                                                            }),
                                                        ],
                                                    }),
                                                    null != z &&
                                                        (0, l.jsx)(u.$, {
                                                            variant: v ? "secondary" : V ? "expressive" : "primary",
                                                            size: "sm",
                                                            onClick: H,
                                                            text: z.ctaLabel({ owned: v }),
                                                        }),
                                                ],
                                            }),
                                            (i.tiers?.length ?? 0) > 0 &&
                                                (0, l.jsxs)("div", {
                                                    className: G.cJ,
                                                    children: [
                                                        (0, l.jsx)(p.c, {}),
                                                        (0, l.jsx)(J, {
                                                            badge: i,
                                                            isViewingOtherUser: g,
                                                            targetUsername: m,
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                Z &&
                                    (0, l.jsx)(N.w, {
                                        type: "info",
                                        children: D.intl.format(D.t.vFekBs, { onViewBadges: E }),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
var et = i(470739);
function ei(e) {
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
        f = !y && null != b && !0 !== v,
        p = f ? b : j,
        [N, w] = n.useState(h ?? null),
        A = (0, a.bG)([x.Ay], () => (null != p ? x.Ay.getBadges(p) : []), [p]),
        C = (0, a.bG)([x.Ay], () => null != p && x.Ay.hasCatalogFor(p), [p]),
        E = (0, a.bG)([x.Ay], () => x.Ay.hasCatalogFetchErrorFor(p), [p]);
    n.useEffect(() => {
        null == p || x.Ay.hasCatalogFor(p) || (0, m.R)(p);
        let e = f ? j : b;
        y || null == e || x.Ay.hasCatalogFor(e) || (0, m.R)(e);
    }, [p, y, f, j, b]);
    let B = n.useMemo(() => {
            let { earnable: e, owned: t } = $(A);
            return f ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [A, f]),
        k = null != N && null != p ? x.Ay.getBadgeById(N, p) : void 0,
        I = null != B && null != p ? x.Ay.getBadgeById(B, p) : void 0,
        T = k ?? I,
        S = (0, a.bG)([x.Ay], () => null != b && null != T && (x.Ay.getBadgeById(T.badge_id, b)?.owned ?? !1), [T, b]),
        U = (0, a.bG)([x.Ay], () => (null != j && null != T ? x.Ay.getBadgeById(T.badge_id, j) : void 0), [T, j]),
        F = U?.owned ?? !1,
        O = n.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, et._)({ ...e, stackingBehavior: "replace" }).then(() => {
                    i();
                });
            },
            [i],
        ),
        P = n.useCallback(() => {
            null != b &&
                null != T &&
                (f
                    ? O({
                          initialBadgeId: T.badge_id,
                          targetUserId: b,
                          targetUsername: _,
                          viewingCurrentUserBadges: !0,
                      })
                    : O({ initialBadgeId: T.badge_id, targetUserId: b, targetUsername: _ }));
        }, [f, T, O, b, _]),
        R = n.useCallback(() => {
            null != j &&
                null != b &&
                (W({ actionName: "view_your_badges_pressed", badge: T, displayedUserId: p, isSociallyNavigated: f }),
                O({ targetUserId: b, targetUsername: _, viewingCurrentUserBadges: !0 }));
        }, [j, p, f, T, O, b, _]),
        z = n.useCallback(() => {
            null != p && (0, m.R)(p);
        }, [p]),
        V = n.useCallback(() => {
            W({ actionName: "badge_directory_closed", badge: T, displayedUserId: p, isSociallyNavigated: f }), i();
        }, [p, f, i, T]),
        q = T?.badge_id;
    return (
        n.useEffect(() => {
            null != T && W({ actionName: "badge_detail_viewed", badge: T, displayedUserId: p, isSociallyNavigated: f });
        }, [q, p, f]),
        (0, l.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": D.intl.string(D.t.PEjP4L),
            transitionState: t,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: G.CR,
            children: (0, l.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: G.jE,
                children: [
                    (0, l.jsx)("div", { className: G.b, children: (0, l.jsx)(s.J, { onClick: V, size: "sm" }) }),
                    C || E
                        ? !C && E
                            ? (0, l.jsxs)("div", {
                                  className: G.IU,
                                  children: [
                                      (0, l.jsx)(c.D, {
                                          variant: "heading-lg/semibold",
                                          color: "text-strong",
                                          children: D.intl.string(D.t.iufib1),
                                      }),
                                      (0, l.jsx)(o.E, {
                                          variant: "text-sm/medium",
                                          color: "text-subtle",
                                          className: G.TQ,
                                          children: D.intl.string(D.t.eAn6z2),
                                      }),
                                      (0, l.jsx)(u.$, {
                                          variant: "primary",
                                          size: "sm",
                                          onClick: z,
                                          text: D.intl.string(D.t["7NqTJn"]),
                                      }),
                                  ],
                              })
                            : (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)(M, {
                                          selectedBadgeId: T?.badge_id ?? null,
                                          onSelectBadge: w,
                                          displayedUserId: p,
                                          isViewingOtherUser: f,
                                          targetUsername: _,
                                          onViewOwnCatalog: R,
                                      }),
                                      null != T &&
                                          (0, l.jsx)(ee, {
                                              badge: T,
                                              viewerBadge: U,
                                              onClose: V,
                                              isOwnProfile: y,
                                              isViewingOtherUser: f,
                                              targetUsername: _,
                                              displayedUserId: p,
                                              targetOwnsBadge: S,
                                              viewerOwnsBadge: F,
                                              onToggleViewedUser: P,
                                              onViewOwnCatalog: R,
                                          }),
                                  ],
                              })
                        : (0, l.jsx)("div", { className: G.Lq, children: (0, l.jsx)(d.y, {}) }),
                ],
            }),
        })
    );
}
