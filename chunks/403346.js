i.d(t, { default: () => et });
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
    w = i(775602),
    A = i(240248);
i(321073);
var B = i(837381),
    E = i(741918),
    C = i(939249),
    I = i(707554),
    k = i(260762),
    S = i(486020);
function T(e, t, i) {
    let l = (0, a.bG)([c.default], () => (null != e ? c.default.getUser(e) : void 0), [e]);
    if (null != l && t) return (0, S.ku)({ id: l.id, avatar: l.avatar, discriminator: l.discriminator }, !1, i);
}
var U = i(92111),
    F = i(778712),
    O = i(375708),
    P = i(490308);
function D(e) {
    return `badge-tab-${e}`;
}
function G(e) {
    let t = Array.from(e);
    return t.length > 19 ? `${t.slice(0, 19).join("")}...` : e;
}
function R(e) {
    let { badge: t, isSelected: i, onSelect: n, itemId: a } = e,
        r = (0, B.rm)(a);
    return (0, l.jsx)(C.D, {
        ...r,
        role: "tab",
        id: D(t.badge_id),
        "aria-label": t.name,
        "aria-selected": i,
        "aria-controls": i ? U.hJ : void 0,
        className: m()(P.oL, i && P.xO),
        onFocus: r.onFocus,
        onClick: n,
        children:
            null != t.simple_icon_url &&
            (0, l.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: P.pW }),
    });
}
function V(e) {
    let { label: t, navId: i, badges: n, selectedBadgeId: a, onSelectBadge: r } = e,
        s = (0, k.A)(i, E.Gl.HORIZONTAL);
    return (0, l.jsxs)("div", {
        className: P.zE,
        children: [
            "heading" === t.type &&
                (0, l.jsx)(j.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, l.jsx)(B.hD, {
                navigator: s,
                children: (0, l.jsx)(B.PR, {
                    children: (e) =>
                        (0, l.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: P.yq,
                            children: n.map((e, t) =>
                                (0, l.jsx)(
                                    R,
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
function z(e) {
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
            onViewOwnCatalog: c,
        } = e,
        o = (0, a.bG)([u.Ay], () => (null != r ? u.Ay.getBadges(r) : []), [r]),
        { earnable: g, owned: m } = n.useMemo(() => z(o), [o]),
        x = T(r, s, 48),
        b = null != d ? G(d) : null,
        v = null != d && b !== d,
        y =
            null != b && v && null != x
                ? (0, l.jsxs)("span", {
                      className: P._p,
                      children: [(0, l.jsx)(_.eu, { src: x, size: F._3.SIZE_24, "aria-hidden": !0 }), b],
                  })
                : b,
        p = s && null != y ? O.intl.format(O.t.EIcwoe, { username: y }) : O.intl.string(O.t.UqnlQF),
        N = s && null != d ? O.intl.string(O.t["75s2Rq"]) : O.intl.string(O.t["62xU4E"]),
        w = s && null != d ? O.intl.formatToPlainString(O.t.BCjSZy, { username: d }) : O.intl.string(O.t.UqnlQF);
    return (0, l.jsx)("div", {
        className: P.ws,
        children: (0, l.jsxs)(I.F, {
            component: (0, l.jsxs)("div", {
                className: P.NG,
                children: [
                    (0, l.jsxs)("div", {
                        className: P.kc,
                        children: [
                            !v && null != x && (0, l.jsx)(_.eu, { src: x, size: F._3.SIZE_24, "aria-hidden": !0 }),
                            (0, l.jsx)(j.D, { variant: "heading-lg/semibold", color: "text-strong", children: p }),
                        ],
                    }),
                    (0, l.jsx)(h.E, { variant: "text-sm/medium", color: "text-subtle", children: N }),
                ],
            }),
            children: [
                (0, l.jsxs)("div", {
                    className: P.hG,
                    children: [
                        m.length > 0 &&
                            (0, l.jsx)(V, {
                                label: { type: "aria", text: w },
                                navId: "badge-directory-owned",
                                badges: m,
                                selectedBadgeId: t,
                                onSelectBadge: i,
                            }),
                        !s &&
                            g.length > 0 &&
                            (0, l.jsx)(V, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: O.intl.string(O.t["0YzU//"]),
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
                        className: P.HO,
                        children: (0, l.jsx)(f.$, {
                            variant: "secondary",
                            size: "sm",
                            fullWidth: !0,
                            onClick: c,
                            text: O.intl.string(O.t.msyp90),
                        }),
                    }),
            ],
        }),
    });
}
var $ = i(140735),
    H = i(899696);
function L(e) {
    if (null == e || "" === e) return null;
    let t = new Date(e);
    return Number.isNaN(t.getTime()) ? null : t;
}
function q(e) {
    return null == e ? null : e.toLocaleDateString(O.intl.currentLocale, { month: "short", year: "numeric" });
}
function Z(e) {
    var t;
    let i,
        { badge: a, isViewingOtherUser: r, targetUsername: s } = e,
        d = (function (e) {
            if (!e.owned) return 0;
            let t = e.tiers.find((t) => t.key === e.current_tier),
                i = t?.requirements[0]?.threshold ?? 0;
            return Math.max(e.progress?.[0]?.current ?? 0, i);
        })(a),
        c = q(L(a.obtained_at)) ?? O.intl.string(O.t.sTFApF),
        o = n.useId(),
        u = r && null != s,
        g = a.badge_id === x.$.PREMIUM_TENURE ? O.intl.string(O.t.crwYbF) : null,
        _ = u ? O.intl.formatToPlainString(O.t.KyTwIh, { username: s }) : g,
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
                    className: H.u4,
                    children: _,
                }),
            (0, l.jsx)("div", {
                className: m()(H.SV, j > 4 && H.Li),
                role: "list",
                "aria-labelledby": b ? o : void 0,
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
                                                              return O.intl.formatToPlainString(O.t.kridzK, {
                                                                  months: e,
                                                              });
                                                          let t = e / 12;
                                                          return t >= 6
                                                              ? O.intl.string(O.t.nPrx97)
                                                              : O.intl.formatToPlainString(O.t.PClsrw, { years: t });
                                                      }
                                                      return String(e);
                                                  })(e.threshold, e.unit)
                                                : "";
                                        }
                                        return l ? O.intl.string(O.t.sTFApF) : (q(L(n)) ?? a);
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
                                        className: m()(H.zh, !i && H.ZF),
                                        children: [
                                            null != n &&
                                                (0, l.jsx)("img", {
                                                    className: H.Hw,
                                                    src: n,
                                                    alt: "",
                                                    "aria-hidden": !0,
                                                }),
                                            (0, l.jsxs)(h.E, {
                                                variant: "text-xxs/medium",
                                                color: i ? "text-default" : "text-muted",
                                                className: H.hI,
                                                children: [s, (0, l.jsx)("br", {}), u],
                                            }),
                                            (0, l.jsx)($.A, { children: O.intl.string(i ? O.t.sTFApF : O.t.uHtDcT) }),
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
    J = i(174459),
    Q = i(652215);
function K(e) {
    let { actionName: t, badge: i, displayedUserId: l, isSociallyNavigated: n } = e,
        a = c.default.getCurrentUser()?.id,
        r = null != i && null != a ? u.Ay.getBadgeById(i.badge_id, a) : void 0,
        s = null != i && null != a ? u.Ay.getRemainingToNextTier(i.badge_id, a) : void 0,
        d = null != l ? u.Ay.getBadges(l).filter((e) => e.owned).length : void 0;
    J.default.track(Q.HAw.BADGE_DIRECTORY_ACTION, {
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
function W(e) {
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
        m = null != g ? O.intl.formatToPlainString(O.t["0aEh2a"], { date: new Date(g) }) : O.intl.string(O.t.sTFApF);
    if (
        ((t = n
            ? i.owned
                ? m
                : O.intl.string(O.t.uHtDcT)
            : a && null != r
              ? O.intl.formatToPlainString(O.t.Eo5Cnp, { username: G(r) })
              : i.owned
                ? m
                : O.intl.string(O.t.uHtDcT)),
        n)
    )
        return (0, l.jsx)(h.E, { variant: "text-xs/medium", color: "text-subtle", children: t });
    let x = a && c,
        v = !a && d && null != r;
    return (0, l.jsxs)("div", {
        className: P.bn,
        children: [
            null != s && (0, l.jsx)(_.eu, { src: s, size: F._3.SIZE_16, "aria-hidden": !0 }),
            (0, l.jsx)(h.E, { variant: "text-xs/medium", color: "text-subtle", className: P.CT, children: t }),
            (x || v) &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(h.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: P.CT,
                            "aria-hidden": !0,
                            children: "\xb7",
                        }),
                        (0, l.jsx)(b.Q, {
                            variant: "primary",
                            size: "sm",
                            textVariant: "text-xs/medium",
                            onClick: o,
                            text: x
                                ? O.intl.string(O.t.yxEAGH)
                                : O.intl.formatToPlainString(O.t["9GNsge"], { username: G(r) }),
                        }),
                    ],
                }),
        ],
    });
}
function X(e) {
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
            onViewOwnCatalog: B,
        } = e,
        E = T(u, c, 32),
        C = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let i = e.owned ? e.current_tier : e.next_tier;
            return (null != i ? t.find((e) => e.key === i) : void 0) ?? t[0];
        })(i),
        I = (0, a.bG)([w.A], () => w.A.useReducedMotion)
            ? void 0
            : (C?.complex_icon_animated_url ?? i.complex_icon_animated_url),
        k = C?.complex_icon_static_url ?? i.complex_icon_static_url,
        S = C?.simple_icon_url ?? i.simple_icon_url,
        F = I ?? k ?? S,
        G = (0, Y.V)(C?.rarity ?? i.rarity),
        R = (0, U.Om)(i.badge_id),
        V = i.badge_id === x.$.PREMIUM_TENURE,
        z = V ? (C?.name ?? C?.key) : C?.name,
        M = V ? O.intl.string(O.t.Ipxkog) : i.name,
        $ = null != z ? `${M} ${z}` : M;
    t =
        r?.owned === !0 && (r.tiers?.length ?? 0) > 0 && null == r.next_tier
            ? O.intl.string(O.t.jY5xAL)
            : (r?.description ?? i.description);
    let H = n.useCallback(() => {
            null != R &&
                (K({
                    actionName: "primary_badge_action_clicked",
                    badge: i,
                    displayedUserId: u,
                    isSociallyNavigated: c,
                }),
                s(),
                R.ctaAction());
        }, [i, u, c, R, s]),
        L = (0, U.ie)(i.badge_id) && !i.is_earnable,
        q = c && !i.is_earnable && !_;
    return (0, l.jsx)("div", {
        id: U.hJ,
        role: "tabpanel",
        "aria-labelledby": D(i.badge_id),
        className: P.SV,
        children: (0, l.jsxs)(v.d_, {
            className: P.C9,
            children: [
                null != F &&
                    (0, l.jsx)("img", {
                        className: m()(P.y2, null != I && F === I && P.hu),
                        src: F,
                        alt: "",
                        "aria-hidden": !0,
                    }),
                (0, l.jsxs)("div", {
                    className: P.OU,
                    children: [
                        (0, l.jsxs)("div", {
                            className: P.cQ,
                            children: [
                                (0, l.jsx)(j.D, {
                                    variant: "display-sm",
                                    color: "text-strong",
                                    className: m()(P._r, V && P.tN),
                                    children: $,
                                }),
                                (0, l.jsx)(W, {
                                    badge: i,
                                    isOwnProfile: d,
                                    isViewingOtherUser: c,
                                    targetUsername: o,
                                    viewedAvatarSrc: E,
                                    targetOwnsBadge: g,
                                    viewerOwnsBadge: _,
                                    onToggleViewedUser: b,
                                }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: P.oA,
                            children: [
                                null != G &&
                                    (0, l.jsxs)("div", {
                                        className: P.sn,
                                        children: [
                                            (0, l.jsx)(y.E, { ...G }),
                                            (0, l.jsx)(h.E, {
                                                variant: "text-xs/medium",
                                                color: "text-subtle",
                                                children: O.intl.string(O.t["phYZe+"]),
                                            }),
                                        ],
                                    }),
                                !(0, A.uJ)(t) &&
                                    (0, l.jsxs)("div", {
                                        className: P.d9,
                                        children: [
                                            (0, l.jsxs)("div", {
                                                className: P.E4,
                                                children: [
                                                    (0, l.jsxs)("div", {
                                                        className: P.jv,
                                                        children: [
                                                            L &&
                                                                (0, l.jsx)(h.E, {
                                                                    variant: "text-xs/medium",
                                                                    color: "text-subtle",
                                                                    className: P.c$,
                                                                    children: O.intl.string(O.t["/Gmn3f"]),
                                                                }),
                                                            (0, l.jsx)(h.E, {
                                                                variant: "text-sm/medium",
                                                                color: "text-default",
                                                                className: P.ij,
                                                                children: t,
                                                            }),
                                                        ],
                                                    }),
                                                    null != R &&
                                                        (0, l.jsx)(f.$, {
                                                            variant: _ ? "secondary" : V ? "expressive" : "primary",
                                                            size: "sm",
                                                            onClick: H,
                                                            text: R.ctaLabel({ owned: _ }),
                                                        }),
                                                ],
                                            }),
                                            (i.tiers?.length ?? 0) > 0 &&
                                                (0, l.jsxs)("div", {
                                                    className: P.cJ,
                                                    children: [
                                                        (0, l.jsx)(p.c, {}),
                                                        (0, l.jsx)(Z, {
                                                            badge: i,
                                                            isViewingOtherUser: c,
                                                            targetUsername: o,
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                q &&
                                    (0, l.jsx)(N.w, {
                                        type: "info",
                                        children: O.intl.format(O.t.vFekBs, { onViewBadges: B }),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
var ee = i(470739);
function et(e) {
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
            let { earnable: e, owned: t } = z(p);
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
                (0, ee._)({ ...e, stackingBehavior: "replace" }).then(() => {
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
                (K({ actionName: "view_your_badges_pressed", badge: B, displayedUserId: j, isSociallyNavigated: v }),
                S({ targetUserId: m, targetUsername: x, viewingCurrentUserBadges: !0 }));
        }, [_, j, v, B, S, m, x]),
        F = n.useCallback(() => {
            K({ actionName: "badge_directory_closed", badge: B, displayedUserId: j, isSociallyNavigated: v }), i();
        }, [j, v, i, B]),
        D = B?.badge_id;
    return (
        n.useEffect(() => {
            null != B && K({ actionName: "badge_detail_viewed", badge: B, displayedUserId: j, isSociallyNavigated: v });
        }, [D, j, v]),
        (0, l.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": O.intl.string(O.t.PEjP4L),
            transitionState: t,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: P.CR,
            children: (0, l.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: P.jE,
                children: [
                    (0, l.jsx)("div", { className: P.b, children: (0, l.jsx)(s.J, { onClick: F, size: "sm" }) }),
                    E
                        ? (0, l.jsx)("div", { className: P.Lq, children: (0, l.jsx)(d.y, {}) })
                        : (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(M, {
                                      selectedBadgeId: B?.badge_id ?? null,
                                      onSelectBadge: f,
                                      displayedUserId: j,
                                      isViewingOtherUser: v,
                                      targetUsername: x,
                                      onViewOwnCatalog: U,
                                  }),
                                  null != B &&
                                      (0, l.jsx)(X, {
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
