n.d(t, { default: () => W });
var l = n(627968),
    i = n(64700),
    a = n(17928),
    r = n(935462),
    s = n(815021),
    d = n(289873),
    c = n(287809),
    o = n(682618),
    u = n(982240),
    g = n(503698),
    m = n.n(g),
    x = n(70283),
    h = n(834730),
    b = n(97808),
    j = n(123292),
    v = n(364522),
    _ = n(534514),
    f = n(508770),
    p = n(821609),
    y = n(404778),
    N = n(683071),
    w = n(775602),
    B = n(240248);
n(321073);
var C = n(837381),
    E = n(741918),
    A = n(939249),
    k = n(707554),
    I = n(260762),
    S = n(486020);
function T(e, t, n) {
    let l = (0, a.bG)([c.default], () => (null != e ? c.default.getUser(e) : void 0), [e]);
    if (null != l && t) return (0, S.ku)({ id: l.id, avatar: l.avatar, discriminator: l.discriminator }, !1, n);
}
var U = n(92111),
    F = n(778712),
    O = n(375708),
    P = n(490308);
function D(e) {
    return `badge-tab-${e}`;
}
function G(e) {
    let t = Array.from(e);
    return t.length > 19 ? `${t.slice(0, 19).join("")}...` : e;
}
function V(e) {
    let { badge: t, isSelected: n, onSelect: i, itemId: a } = e,
        r = (0, C.rm)(a);
    return (0, l.jsx)(A.D, {
        ...r,
        role: "tab",
        id: D(t.badge_id),
        "aria-label": t.name,
        "aria-selected": n,
        "aria-controls": n ? U.hJ : void 0,
        className: m()(P.oL, n && P.xO),
        onFocus: r.onFocus,
        onClick: i,
        children:
            null != t.simple_icon_url &&
            (0, l.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: P.pW }),
    });
}
function z(e) {
    let { label: t, navId: n, badges: i, selectedBadgeId: a, onSelectBadge: r } = e,
        s = (0, I.A)(n, E.Gl.HORIZONTAL);
    return (0, l.jsxs)("div", {
        className: P.zE,
        children: [
            "heading" === t.type &&
                (0, l.jsx)(_.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, l.jsx)(C.hD, {
                navigator: s,
                children: (0, l.jsx)(C.PR, {
                    children: (e) =>
                        (0, l.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: P.yq,
                            children: i.map((e, t) =>
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
        n = [];
    for (let l of e) l.owned ? n.push(l) : l.is_earnable && t.push(l);
    return { earnable: t, owned: n };
}
function R(e) {
    let {
            selectedBadgeId: t,
            onSelectBadge: n,
            displayedUserId: r,
            isViewingOtherUser: s,
            targetUsername: d,
            onViewOwnCatalog: c,
        } = e,
        o = (0, a.bG)([u.Ay], () => (null != r ? u.Ay.getBadges(r) : []), [r]),
        { earnable: g, owned: m } = i.useMemo(() => M(o), [o]),
        x = T(r, s, 48),
        j = null != d ? G(d) : null,
        v = null != d && j !== d,
        f =
            null != j && v && null != x
                ? (0, l.jsxs)("span", {
                      className: P._p,
                      children: [(0, l.jsx)(b.eu, { src: x, size: F._3.SIZE_24, "aria-hidden": !0 }), j],
                  })
                : j,
        y = s && null != f ? O.intl.format(O.t.BCjSZy, { username: f }) : O.intl.string(O.t.sl2irJ),
        N = s && null != d ? O.intl.string(O.t["75s2Rq"]) : O.intl.string(O.t["62xU4E"]),
        w = s && null != d ? O.intl.formatToPlainString(O.t.BCjSZy, { username: d }) : O.intl.string(O.t.UqnlQF);
    return (0, l.jsx)("div", {
        className: P.ws,
        children: (0, l.jsxs)(k.F, {
            component: (0, l.jsxs)("div", {
                className: P.NG,
                children: [
                    (0, l.jsxs)("div", {
                        className: P.kc,
                        children: [
                            !v && null != x && (0, l.jsx)(b.eu, { src: x, size: F._3.SIZE_24, "aria-hidden": !0 }),
                            (0, l.jsx)(_.D, { variant: "heading-lg/semibold", color: "text-strong", children: y }),
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
                            (0, l.jsx)(z, {
                                label: { type: "aria", text: w },
                                navId: "badge-directory-owned",
                                badges: m,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                            }),
                        !s &&
                            g.length > 0 &&
                            (0, l.jsx)(z, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: O.intl.string(O.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: g,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                            }),
                    ],
                }),
                s &&
                    (0, l.jsx)("div", {
                        className: P.HO,
                        children: (0, l.jsx)(p.$, {
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
var $ = n(140735),
    L = n(899696);
function H(e) {
    if (null == e || "" === e) return null;
    let t = new Date(e);
    return Number.isNaN(t.getTime()) ? null : t;
}
function Z(e) {
    return null == e ? null : e.toLocaleDateString(O.intl.currentLocale, { month: "short", year: "numeric" });
}
function q(e) {
    var t;
    let n,
        { badge: a, isViewingOtherUser: r, targetUsername: s } = e,
        d = (function (e) {
            if (!e.owned) return 0;
            let t = e.tiers.find((t) => t.key === e.current_tier),
                n = t?.requirements[0]?.threshold ?? 0;
            return Math.max(e.progress?.[0]?.current ?? 0, n);
        })(a),
        c = Z(H(a.obtained_at)) ?? O.intl.string(O.t.sTFApF),
        o = i.useId(),
        u = r && null != s,
        g = a.badge_id === x.$.PREMIUM_TENURE ? O.intl.string(O.t.crwYbF) : null,
        b = u ? O.intl.formatToPlainString(O.t.KyTwIh, { username: s }) : g,
        j = null != b && "" !== b,
        v =
            ((n = (t = a.tiers).length <= 4 ? t.length : Math.ceil(t.length / 2)),
            [t.slice(0, n), t.slice(n)].filter((e) => e.length > 0)),
        _ = v[0]?.length ?? 0;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            j &&
                (0, l.jsx)(h.E, {
                    id: o,
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    className: L.u4,
                    children: b,
                }),
            (0, l.jsx)("div", {
                className: m()(L.SV, _ > 4 && L.Li),
                role: "list",
                "aria-labelledby": j ? o : void 0,
                children: v.map((e, t) =>
                    (0, l.jsx)(
                        "div",
                        {
                            className: L._1,
                            role: "presentation",
                            children: e.map((e) => {
                                let t = e.requirements[0]?.threshold ?? 0,
                                    n = a.owned && d >= t,
                                    i = e.complex_icon_static_url ?? e.simple_icon_url,
                                    s = e.name ?? e.key,
                                    o = a.tier_obtained_at?.[e.key],
                                    u = (function (e) {
                                        let {
                                            tier: t,
                                            isUnlocked: n,
                                            isViewingOtherUser: l,
                                            tierObtainedAt: i,
                                            badgeObtainedAtText: a,
                                        } = e;
                                        if (!n) {
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
                                        return l ? O.intl.string(O.t.sTFApF) : (Z(H(i)) ?? a);
                                    })({
                                        tier: e,
                                        isUnlocked: n,
                                        isViewingOtherUser: r,
                                        tierObtainedAt: o,
                                        badgeObtainedAtText: c,
                                    });
                                return (0, l.jsxs)(
                                    "div",
                                    {
                                        role: "listitem",
                                        className: m()(L.zh, !n && L.ZF),
                                        children: [
                                            null != i &&
                                                (0, l.jsx)("img", {
                                                    className: L.Hw,
                                                    src: i,
                                                    alt: "",
                                                    "aria-hidden": !0,
                                                }),
                                            (0, l.jsxs)(h.E, {
                                                variant: "text-xxs/medium",
                                                color: n ? "text-default" : "text-muted",
                                                className: L.hI,
                                                children: [s, (0, l.jsx)("br", {}), u],
                                            }),
                                            (0, l.jsx)($.A, { children: O.intl.string(n ? O.t.sTFApF : O.t.uHtDcT) }),
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
var J = n(731454);
function Y(e) {
    let t,
        {
            badge: n,
            isOwnProfile: i,
            isViewingOtherUser: a,
            targetUsername: r,
            viewedAvatarSrc: s,
            targetOwnsBadge: d,
            viewerOwnsBadge: c,
            onToggleViewedUser: o,
        } = e,
        g = (0, u.H5)(n),
        m = null != g ? O.intl.formatToPlainString(O.t["0aEh2a"], { date: new Date(g) }) : O.intl.string(O.t.sTFApF);
    if (
        ((t = i
            ? n.owned
                ? m
                : O.intl.string(O.t.uHtDcT)
            : a && null != r
              ? O.intl.formatToPlainString(O.t.Eo5Cnp, { username: G(r) })
              : n.owned
                ? m
                : O.intl.string(O.t.uHtDcT)),
        i)
    )
        return (0, l.jsx)(h.E, { variant: "text-xs/medium", color: "text-subtle", children: t });
    let x = a && c,
        v = !a && d && null != r;
    return (0, l.jsxs)("div", {
        className: P.bn,
        children: [
            null != s && (0, l.jsx)(b.eu, { src: s, size: F._3.SIZE_16, "aria-hidden": !0 }),
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
                        (0, l.jsx)(j.Q, {
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
function Q(e) {
    let t,
        {
            badge: n,
            viewerBadge: r,
            onClose: s,
            isOwnProfile: d,
            isViewingOtherUser: c,
            targetUsername: o,
            displayedUserId: u,
            targetOwnsBadge: g,
            viewerOwnsBadge: b,
            onToggleViewedUser: j,
            onViewOwnCatalog: C,
        } = e,
        E = T(u, c, 32),
        A = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let n = e.owned ? e.current_tier : e.next_tier;
            return (null != n ? t.find((e) => e.key === n) : void 0) ?? t[0];
        })(n),
        k = (0, a.bG)([w.A], () => w.A.useReducedMotion)
            ? void 0
            : (A?.complex_icon_animated_url ?? n.complex_icon_animated_url),
        I = A?.complex_icon_static_url ?? n.complex_icon_static_url,
        S = A?.simple_icon_url ?? n.simple_icon_url,
        F = k ?? I ?? S,
        G = (0, J.V)(A?.rarity ?? n.rarity),
        V = (0, U.Om)(n.badge_id),
        z = n.badge_id === x.$.PREMIUM_TENURE,
        M = z ? (A?.name ?? A?.key) : A?.name,
        R = z ? O.intl.string(O.t.Ipxkog) : n.name,
        $ = null != M ? `${R} ${M}` : R;
    t =
        r?.owned === !0 && (r.tiers?.length ?? 0) > 0 && null == r.next_tier
            ? O.intl.string(O.t.jY5xAL)
            : (r?.description ?? n.description);
    let L = i.useCallback(() => {
            null != V && (s(), V.ctaAction());
        }, [V, s]),
        H = (0, U.ie)(n.badge_id) && !n.is_earnable,
        Z = c && !n.is_earnable && !b;
    return (0, l.jsx)("div", {
        id: U.hJ,
        role: "tabpanel",
        "aria-labelledby": D(n.badge_id),
        className: P.SV,
        children: (0, l.jsxs)(v.d_, {
            className: P.C9,
            children: [
                null != F &&
                    (0, l.jsx)("img", {
                        className: m()(P.y2, null != k && F === k && P.hu),
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
                                (0, l.jsx)(_.D, {
                                    variant: "display-sm",
                                    color: "text-strong",
                                    className: m()(P._r, z && P.tN),
                                    children: $,
                                }),
                                (0, l.jsx)(Y, {
                                    badge: n,
                                    isOwnProfile: d,
                                    isViewingOtherUser: c,
                                    targetUsername: o,
                                    viewedAvatarSrc: E,
                                    targetOwnsBadge: g,
                                    viewerOwnsBadge: b,
                                    onToggleViewedUser: j,
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
                                            (0, l.jsx)(f.E, { ...G }),
                                            (0, l.jsx)(h.E, {
                                                variant: "text-xs/medium",
                                                color: "text-subtle",
                                                children: O.intl.string(O.t["phYZe+"]),
                                            }),
                                        ],
                                    }),
                                !(0, B.uJ)(t) &&
                                    (0, l.jsxs)("div", {
                                        className: P.d9,
                                        children: [
                                            (0, l.jsxs)("div", {
                                                className: P.E4,
                                                children: [
                                                    (0, l.jsxs)("div", {
                                                        className: P.jv,
                                                        children: [
                                                            H &&
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
                                                    null != V &&
                                                        (0, l.jsx)(p.$, {
                                                            variant: b ? "secondary" : z ? "expressive" : "primary",
                                                            size: "sm",
                                                            onClick: L,
                                                            text: V.ctaLabel({ owned: b }),
                                                        }),
                                                ],
                                            }),
                                            (n.tiers?.length ?? 0) > 0 &&
                                                (0, l.jsxs)("div", {
                                                    className: P.cJ,
                                                    children: [
                                                        (0, l.jsx)(y.c, {}),
                                                        (0, l.jsx)(q, {
                                                            badge: n,
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
                                        children: O.intl.format(O.t.vFekBs, { onViewBadges: C }),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
var K = n(470739);
function W(e) {
    let {
            transitionState: t,
            onClose: n,
            initialBadgeId: g,
            targetUserId: m,
            targetUsername: x,
            viewingCurrentUserBadges: h,
        } = e,
        b = (0, a.bG)([c.default], () => c.default.getCurrentUser()?.id),
        j = null == m || m === b,
        v = !j && null != m && !0 !== h,
        _ = v ? m : b,
        [f, p] = i.useState(g ?? null),
        y = (0, a.bG)([u.Ay], () => (null != _ ? u.Ay.getBadges(_) : []), [_]);
    i.useEffect(() => {
        null == _ || u.Ay.hasCatalogFor(_) || (0, o.R)(_);
        let e = v ? b : m;
        j || null == e || u.Ay.hasCatalogFor(e) || (0, o.R)(e);
    }, [_, j, v, b, m]);
    let N = i.useMemo(() => {
            let { earnable: e, owned: t } = M(y);
            return v ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [y, v]),
        w = null != f && null != _ ? u.Ay.getBadgeById(f, _) : void 0,
        B = null != N && null != _ ? u.Ay.getBadgeById(N, _) : void 0,
        C = w ?? B,
        E = 0 === y.length,
        A = (0, a.bG)([u.Ay], () => null != m && null != C && (u.Ay.getBadgeById(C.badge_id, m)?.owned ?? !1), [C, m]),
        k = (0, a.bG)([u.Ay], () => (null != b && null != C ? u.Ay.getBadgeById(C.badge_id, b) : void 0), [C, b]),
        I = k?.owned ?? !1,
        S = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, K._)({ ...e, stackingBehavior: "replace" }).then(() => {
                    n();
                });
            },
            [n],
        ),
        T = i.useCallback(() => {
            null != m &&
                null != C &&
                (v
                    ? S({
                          initialBadgeId: C.badge_id,
                          targetUserId: m,
                          targetUsername: x,
                          viewingCurrentUserBadges: !0,
                      })
                    : S({ initialBadgeId: C.badge_id, targetUserId: m, targetUsername: x }));
        }, [v, C, S, m, x]),
        U = i.useCallback(() => {
            null != b && null != m && S({ targetUserId: m, targetUsername: x, viewingCurrentUserBadges: !0 });
        }, [b, S, m, x]),
        F = i.useCallback(() => {
            n();
        }, [n]);
    return (0, l.jsx)(r.EO, {
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
                              (0, l.jsx)(R, {
                                  selectedBadgeId: C?.badge_id ?? null,
                                  onSelectBadge: p,
                                  displayedUserId: _,
                                  isViewingOtherUser: v,
                                  targetUsername: x,
                                  onViewOwnCatalog: U,
                              }),
                              null != C &&
                                  (0, l.jsx)(Q, {
                                      badge: C,
                                      viewerBadge: k,
                                      onClose: F,
                                      isOwnProfile: j,
                                      isViewingOtherUser: v,
                                      targetUsername: x,
                                      displayedUserId: _,
                                      targetOwnsBadge: A,
                                      viewerOwnsBadge: I,
                                      onToggleViewedUser: T,
                                      onViewOwnCatalog: U,
                                  }),
                          ],
                      }),
            ],
        }),
    });
}
