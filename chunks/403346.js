i.d(t, { default: () => ei });
var l = i(627968),
    n = i(64700),
    a = i(17928),
    r = i(935462),
    s = i(815021),
    d = i(289873),
    c = i(287809),
    o = i(682618),
    u = i(982240),
    g = i(503698),
    m = i.n(g),
    x = i(70283),
    h = i(834730),
    _ = i(97808),
    b = i(123292),
    v = i(364522),
    j = i(534514),
    y = i(508770),
    f = i(821609),
    p = i(404778),
    N = i(683071),
    w = i(982168),
    A = i(775602),
    B = i(240248);
i(321073);
var E = i(837381),
    C = i(741918),
    I = i(939249),
    k = i(707554),
    S = i(260762),
    T = i(486020);
function U(e, t, i) {
    let l = (0, a.bG)([c.default], () => (null != e ? c.default.getUser(e) : void 0), [e]);
    if (null != l && t) return (0, T.ku)({ id: l.id, avatar: l.avatar, discriminator: l.discriminator }, !1, i);
}
var F = i(92111),
    O = i(778712),
    P = i(375708),
    D = i(490308);
function G(e) {
    return `badge-tab-${e}`;
}
function R(e) {
    let t = Array.from(e);
    return t.length > 19 ? `${t.slice(0, 19).join("")}...` : e;
}
function V(e) {
    let { badge: t, isSelected: i, onSelect: n, itemId: a } = e,
        r = (0, E.rm)(a);
    return (0, l.jsx)(I.D, {
        ...r,
        role: "tab",
        id: G(t.badge_id),
        "aria-label": t.name,
        "aria-selected": i,
        "aria-controls": i ? F.hJ : void 0,
        className: m()(D.oL, i && D.xO),
        onFocus: r.onFocus,
        onClick: n,
        children:
            null != t.simple_icon_url &&
            (0, l.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: D.pW }),
    });
}
function z(e) {
    let { label: t, navId: i, badges: n, selectedBadgeId: a, onSelectBadge: r } = e,
        s = (0, S.A)(i, C.Gl.HORIZONTAL);
    return (0, l.jsxs)("div", {
        className: D.zE,
        children: [
            "heading" === t.type &&
                (0, l.jsx)(j.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
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
                            className: D.yq,
                            children: n.map((e, t) =>
                                (0, l.jsx)(
                                    V,
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
function M(e) {
    let t = [],
        i = [];
    for (let l of e) l.owned ? i.push(l) : l.is_earnable && t.push(l);
    return { earnable: t, owned: i };
}
function $(e) {
    let {
            selectedBadgeId: t,
            onSelectBadge: i,
            displayedUserId: r,
            isViewingOtherUser: s,
            targetUsername: d,
            onViewOwnCatalog: c,
        } = e,
        o = (0, a.bG)([u.Ay], () => (null != r ? u.Ay.getBadges(r) : []), [r]),
        { earnable: g, owned: m } = n.useMemo(() => M(o), [o]),
        x = U(r, s, 48),
        b = null != d ? R(d) : null,
        v = null != d && b !== d,
        y =
            null != b && v && null != x
                ? (0, l.jsxs)("span", {
                      className: D._p,
                      children: [(0, l.jsx)(_.eu, { src: x, size: O._3.SIZE_24, "aria-hidden": !0 }), b],
                  })
                : b,
        p = s && null != y ? P.intl.format(P.t.EIcwoe, { username: y }) : P.intl.string(P.t.UqnlQF),
        N = s && null != d ? P.intl.string(P.t["75s2Rq"]) : P.intl.string(P.t["62xU4E"]),
        w = s && null != d ? P.intl.formatToPlainString(P.t.BCjSZy, { username: d }) : P.intl.string(P.t.UqnlQF);
    return (0, l.jsx)("div", {
        className: D.ws,
        children: (0, l.jsxs)(k.F, {
            component: (0, l.jsxs)("div", {
                className: D.NG,
                children: [
                    (0, l.jsxs)("div", {
                        className: D.kc,
                        children: [
                            !v && null != x && (0, l.jsx)(_.eu, { src: x, size: O._3.SIZE_24, "aria-hidden": !0 }),
                            (0, l.jsx)(j.D, { variant: "heading-lg/semibold", color: "text-strong", children: p }),
                        ],
                    }),
                    (0, l.jsx)(h.E, { variant: "text-sm/medium", color: "text-subtle", children: N }),
                ],
            }),
            children: [
                (0, l.jsxs)("div", {
                    className: D.hG,
                    children: [
                        m.length > 0 &&
                            (0, l.jsx)(z, {
                                label: { type: "aria", text: w },
                                navId: "badge-directory-owned",
                                badges: m,
                                selectedBadgeId: t,
                                onSelectBadge: i,
                            }),
                        !s &&
                            g.length > 0 &&
                            (0, l.jsx)(z, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: P.intl.string(P.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: g,
                                selectedBadgeId: t,
                                onSelectBadge: i,
                            }),
                    ],
                }),
                s &&
                    (0, l.jsx)("div", {
                        className: D.HO,
                        children: (0, l.jsx)(f.$, {
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
var H = i(140735),
    L = i(899696);
function q(e) {
    if (null == e || "" === e) return null;
    let t = new Date(e);
    return Number.isNaN(t.getTime()) ? null : t;
}
function Z(e) {
    return null == e ? null : e.toLocaleDateString(P.intl.currentLocale, { month: "short", year: "numeric" });
}
function Y(e) {
    var t;
    let i,
        { badge: a, isViewingOtherUser: r, targetUsername: s } = e,
        d = (function (e) {
            if (!e.owned) return 0;
            let t = e.tiers.find((t) => t.key === e.current_tier),
                i = t?.requirements[0]?.threshold ?? 0;
            return Math.max(e.progress?.[0]?.current ?? 0, i);
        })(a),
        c = Z(q(a.obtained_at)) ?? P.intl.string(P.t.sTFApF),
        o = n.useId(),
        u = r && null != s,
        g = a.badge_id === x.$.PREMIUM_TENURE ? P.intl.string(P.t.crwYbF) : null,
        _ = u ? P.intl.formatToPlainString(P.t.KyTwIh, { username: s }) : g,
        b = null != _ && "" !== _,
        v =
            ((i = (t = a.tiers).length <= 4 ? t.length : Math.ceil(t.length / 2)),
            [t.slice(0, i), t.slice(i)].filter((e) => e.length > 0)),
        j = v[0]?.length ?? 0;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            b &&
                (0, l.jsx)(h.E, {
                    id: o,
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    className: L.u4,
                    children: _,
                }),
            (0, l.jsx)("div", {
                className: m()(L.SV, j > 4 && L.Li),
                role: "list",
                "aria-labelledby": b ? o : void 0,
                children: v.map((e, t) =>
                    (0, l.jsx)(
                        "div",
                        {
                            className: L._1,
                            role: "presentation",
                            children: e.map((e) => {
                                let t = e.requirements[0]?.threshold ?? 0,
                                    i = a.owned && d >= t,
                                    n = e.complex_icon_static_url ?? e.simple_icon_url,
                                    s = e.name ?? e.key,
                                    o = a.tier_obtained_at?.[e.key],
                                    u = (function (e) {
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
                                        return l ? P.intl.string(P.t.sTFApF) : (Z(q(n)) ?? a);
                                    })({
                                        tier: e,
                                        isUnlocked: i,
                                        isViewingOtherUser: r,
                                        tierObtainedAt: o,
                                        badgeObtainedAtText: c,
                                    });
                                return (0, l.jsxs)(
                                    "div",
                                    {
                                        role: "listitem",
                                        className: m()(L.zh, !i && L.ZF),
                                        children: [
                                            null != n &&
                                                (0, l.jsx)("img", {
                                                    className: L.Hw,
                                                    src: n,
                                                    alt: "",
                                                    "aria-hidden": !0,
                                                }),
                                            (0, l.jsxs)(h.E, {
                                                variant: "text-xxs/medium",
                                                color: i ? "text-default" : "text-muted",
                                                className: L.hI,
                                                children: [s, (0, l.jsx)("br", {}), u],
                                            }),
                                            (0, l.jsx)(H.A, { children: P.intl.string(i ? P.t.sTFApF : P.t.uHtDcT) }),
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
var J = i(731454),
    Q = i(174459),
    K = i(652215);
function W(e) {
    let { actionName: t, badge: i, displayedUserId: l, isSociallyNavigated: n } = e,
        a = c.default.getCurrentUser()?.id,
        r = null != i && null != a ? u.Ay.getBadgeById(i.badge_id, a) : void 0,
        s = null != i && null != a ? u.Ay.getRemainingToNextTier(i.badge_id, a) : void 0,
        d = null != l ? u.Ay.getBadges(l).filter((e) => e.owned).length : void 0;
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
            onToggleViewedUser: o,
        } = e,
        g = (0, u.H5)(i),
        m = null != g ? P.intl.formatToPlainString(P.t["0aEh2a"], { date: new Date(g) }) : P.intl.string(P.t.sTFApF);
    if (
        ((t = n
            ? i.owned
                ? m
                : P.intl.string(P.t.uHtDcT)
            : a && null != r
              ? P.intl.formatToPlainString(P.t.Eo5Cnp, { username: R(r) })
              : i.owned
                ? m
                : P.intl.string(P.t.uHtDcT)),
        n)
    )
        return (0, l.jsx)(h.E, { variant: "text-xs/medium", color: "text-subtle", children: t });
    let x = a && c,
        v = !a && d && null != r;
    return (0, l.jsxs)("div", {
        className: D.bn,
        children: [
            null != s && (0, l.jsx)(_.eu, { src: s, size: O._3.SIZE_16, "aria-hidden": !0 }),
            (0, l.jsx)(h.E, { variant: "text-xs/medium", color: "text-subtle", className: D.CT, children: t }),
            (x || v) &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(h.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: D.CT,
                            "aria-hidden": !0,
                            children: "\xb7",
                        }),
                        (0, l.jsx)(b.Q, {
                            variant: "primary",
                            size: "sm",
                            textVariant: "text-xs/medium",
                            onClick: o,
                            text: x
                                ? P.intl.string(P.t.yxEAGH)
                                : P.intl.formatToPlainString(P.t["9GNsge"], { username: R(r) }),
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
            isViewingOtherUser: c,
            targetUsername: o,
            displayedUserId: u,
            targetOwnsBadge: g,
            viewerOwnsBadge: _,
            onToggleViewedUser: b,
            onViewOwnCatalog: E,
        } = e,
        C = U(u, c, 32),
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
        T = I?.simple_icon_url ?? i.simple_icon_url,
        O = k ?? S ?? T,
        R = (0, J.V)(I?.rarity ?? i.rarity),
        V = (0, F.Om)(i.badge_id),
        z = i.badge_id === x.$.PREMIUM_TENURE,
        M = z ? (I?.name ?? I?.key) : I?.name,
        $ = z ? P.intl.string(P.t.Ipxkog) : i.name,
        H = null != M ? `${$} ${M}` : $;
    t =
        r?.owned === !0 && (r.tiers?.length ?? 0) > 0 && null == r.next_tier
            ? P.intl.string(P.t.jY5xAL)
            : (r?.description ?? i.description);
    let L = n.useCallback(() => {
            null != V &&
                (W({
                    actionName: "primary_badge_action_clicked",
                    badge: i,
                    displayedUserId: u,
                    isSociallyNavigated: c,
                }),
                s(),
                w.A.popAll(),
                V.ctaAction());
        }, [i, u, c, V, s]),
        q = (0, F.ie)(i.badge_id) && !i.is_earnable,
        Z = c && !i.is_earnable && !_;
    return (0, l.jsx)("div", {
        id: F.hJ,
        role: "tabpanel",
        "aria-labelledby": G(i.badge_id),
        className: D.SV,
        children: (0, l.jsxs)(v.d_, {
            className: D.C9,
            children: [
                null != O &&
                    (0, l.jsx)("img", {
                        className: m()(D.y2, null != k && O === k && D.hu),
                        src: O,
                        alt: "",
                        "aria-hidden": !0,
                    }),
                (0, l.jsxs)("div", {
                    className: D.OU,
                    children: [
                        (0, l.jsxs)("div", {
                            className: D.cQ,
                            children: [
                                (0, l.jsx)(j.D, {
                                    variant: "display-sm",
                                    color: "text-strong",
                                    className: m()(D._r, z && D.tN),
                                    children: H,
                                }),
                                (0, l.jsx)(X, {
                                    badge: i,
                                    isOwnProfile: d,
                                    isViewingOtherUser: c,
                                    targetUsername: o,
                                    viewedAvatarSrc: C,
                                    targetOwnsBadge: g,
                                    viewerOwnsBadge: _,
                                    onToggleViewedUser: b,
                                }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: D.oA,
                            children: [
                                null != R &&
                                    (0, l.jsxs)("div", {
                                        className: D.sn,
                                        children: [
                                            (0, l.jsx)(y.E, { ...R }),
                                            (0, l.jsx)(h.E, {
                                                variant: "text-xs/medium",
                                                color: "text-subtle",
                                                children: P.intl.string(P.t["phYZe+"]),
                                            }),
                                        ],
                                    }),
                                !(0, B.uJ)(t) &&
                                    (0, l.jsxs)("div", {
                                        className: D.d9,
                                        children: [
                                            (0, l.jsxs)("div", {
                                                className: D.E4,
                                                children: [
                                                    (0, l.jsxs)("div", {
                                                        className: D.jv,
                                                        children: [
                                                            q &&
                                                                (0, l.jsx)(h.E, {
                                                                    variant: "text-xs/medium",
                                                                    color: "text-subtle",
                                                                    className: D.c$,
                                                                    children: P.intl.string(P.t["/Gmn3f"]),
                                                                }),
                                                            (0, l.jsx)(h.E, {
                                                                variant: "text-sm/medium",
                                                                color: "text-default",
                                                                className: D.ij,
                                                                children: t,
                                                            }),
                                                        ],
                                                    }),
                                                    null != V &&
                                                        (0, l.jsx)(f.$, {
                                                            variant: _ ? "secondary" : z ? "expressive" : "primary",
                                                            size: "sm",
                                                            onClick: L,
                                                            text: V.ctaLabel({ owned: _ }),
                                                        }),
                                                ],
                                            }),
                                            (i.tiers?.length ?? 0) > 0 &&
                                                (0, l.jsxs)("div", {
                                                    className: D.cJ,
                                                    children: [
                                                        (0, l.jsx)(p.c, {}),
                                                        (0, l.jsx)(Y, {
                                                            badge: i,
                                                            isViewingOtherUser: c,
                                                            targetUsername: o,
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                Z &&
                                    (0, l.jsx)(N.w, {
                                        type: "info",
                                        children: P.intl.format(P.t.vFekBs, { onViewBadges: E }),
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
            initialBadgeId: g,
            targetUserId: m,
            targetUsername: x,
            viewingCurrentUserBadges: h,
        } = e,
        _ = (0, a.bG)([c.default], () => c.default.getCurrentUser()?.id),
        b = null == m || m === _,
        v = !b && null != m && !0 !== h,
        j = v ? m : _,
        [y, f] = n.useState(g ?? null),
        p = (0, a.bG)([u.Ay], () => (null != j ? u.Ay.getBadges(j) : []), [j]);
    n.useEffect(() => {
        null == j || u.Ay.hasCatalogFor(j) || (0, o.R)(j);
        let e = v ? _ : m;
        b || null == e || u.Ay.hasCatalogFor(e) || (0, o.R)(e);
    }, [j, b, v, _, m]);
    let N = n.useMemo(() => {
            let { earnable: e, owned: t } = M(p);
            return v ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [p, v]),
        w = null != y && null != j ? u.Ay.getBadgeById(y, j) : void 0,
        A = null != N && null != j ? u.Ay.getBadgeById(N, j) : void 0,
        B = w ?? A,
        E = 0 === p.length,
        C = (0, a.bG)([u.Ay], () => null != m && null != B && (u.Ay.getBadgeById(B.badge_id, m)?.owned ?? !1), [B, m]),
        I = (0, a.bG)([u.Ay], () => (null != _ && null != B ? u.Ay.getBadgeById(B.badge_id, _) : void 0), [B, _]),
        k = I?.owned ?? !1,
        S = n.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, et._)({ ...e, stackingBehavior: "replace" }).then(() => {
                    i();
                });
            },
            [i],
        ),
        T = n.useCallback(() => {
            null != m &&
                null != B &&
                (v
                    ? S({
                          initialBadgeId: B.badge_id,
                          targetUserId: m,
                          targetUsername: x,
                          viewingCurrentUserBadges: !0,
                      })
                    : S({ initialBadgeId: B.badge_id, targetUserId: m, targetUsername: x }));
        }, [v, B, S, m, x]),
        U = n.useCallback(() => {
            null != _ &&
                null != m &&
                (W({ actionName: "view_your_badges_pressed", badge: B, displayedUserId: j, isSociallyNavigated: v }),
                S({ targetUserId: m, targetUsername: x, viewingCurrentUserBadges: !0 }));
        }, [_, j, v, B, S, m, x]),
        F = n.useCallback(() => {
            W({ actionName: "badge_directory_closed", badge: B, displayedUserId: j, isSociallyNavigated: v }), i();
        }, [j, v, i, B]),
        O = B?.badge_id;
    return (
        n.useEffect(() => {
            null != B && W({ actionName: "badge_detail_viewed", badge: B, displayedUserId: j, isSociallyNavigated: v });
        }, [O, j, v]),
        (0, l.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": P.intl.string(P.t.PEjP4L),
            transitionState: t,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: D.CR,
            children: (0, l.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: D.jE,
                children: [
                    (0, l.jsx)("div", { className: D.b, children: (0, l.jsx)(s.J, { onClick: F, size: "sm" }) }),
                    E
                        ? (0, l.jsx)("div", { className: D.Lq, children: (0, l.jsx)(d.y, {}) })
                        : (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)($, {
                                      selectedBadgeId: B?.badge_id ?? null,
                                      onSelectBadge: f,
                                      displayedUserId: j,
                                      isViewingOtherUser: v,
                                      targetUsername: x,
                                      onViewOwnCatalog: U,
                                  }),
                                  null != B &&
                                      (0, l.jsx)(ee, {
                                          badge: B,
                                          viewerBadge: I,
                                          onClose: F,
                                          isOwnProfile: b,
                                          isViewingOtherUser: v,
                                          targetUsername: x,
                                          displayedUserId: j,
                                          targetOwnsBadge: C,
                                          viewerOwnsBadge: k,
                                          onToggleViewedUser: T,
                                          onViewOwnCatalog: U,
                                      }),
                              ],
                          }),
                ],
            }),
        })
    );
}
