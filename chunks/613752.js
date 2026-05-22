n.d(t, { default: () => K });
var l = n(627968),
    i = n(64700),
    a = n(17928),
    s = n(935462),
    r = n(815021),
    d = n(289873),
    c = n(287809),
    o = n(682618),
    u = n(982240),
    m = n(503698),
    g = n.n(m),
    x = n(70283),
    h = n(834730),
    b = n(97808),
    j = n(123292),
    v = n(364522),
    _ = n(534514),
    f = n(508770),
    p = n(821609),
    N = n(404778),
    w = n(683071),
    y = n(775602),
    A = n(240248);
n(321073);
var E = n(837381),
    C = n(741918),
    B = n(939249),
    S = n(707554),
    T = n(260762),
    I = n(486020);
function k(e, t, n) {
    let l = (0, a.bG)([c.default], () => (null != e ? c.default.getUser(e) : void 0), [e]);
    if (null != l && t) return (0, I.ku)({ id: l.id, avatar: l.avatar, discriminator: l.discriminator }, !1, n);
}
var F = n(92111),
    U = n(778712),
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
        s = (0, E.rm)(a);
    return (0, l.jsx)(B.D, {
        ...s,
        role: "tab",
        id: D(t.badge_id),
        "aria-label": t.name,
        "aria-selected": n,
        "aria-controls": n ? F.hJ : void 0,
        className: g()(P.oL, n && P.xO),
        onFocus: s.onFocus,
        onClick: i,
        children:
            null != t.simple_icon_url &&
            (0, l.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: P.pW }),
    });
}
function z(e) {
    let { label: t, navId: n, badges: i, selectedBadgeId: a, onSelectBadge: s } = e,
        r = (0, T.A)(n, C.Gl.HORIZONTAL);
    return (0, l.jsxs)("div", {
        className: P.zE,
        children: [
            "heading" === t.type &&
                (0, l.jsx)(_.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
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
                            className: P.yq,
                            children: i.map((e, t) =>
                                (0, l.jsx)(
                                    V,
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
        n = [];
    for (let l of e) l.owned ? n.push(l) : l.is_earnable && t.push(l);
    return { earnable: t, owned: n };
}
function R(e) {
    let {
            selectedBadgeId: t,
            onSelectBadge: n,
            displayedUserId: s,
            isViewingOtherUser: r,
            targetUsername: d,
            onViewOwnCatalog: c,
        } = e,
        o = (0, a.bG)([u.A], () => (null != s ? u.A.getBadges(s) : []), [s]),
        { earnable: m, owned: g } = i.useMemo(() => M(o), [o]),
        x = k(s, r, 48),
        j = null != d ? G(d) : null,
        v = null != d && j !== d,
        f =
            null != j && v && null != x
                ? (0, l.jsxs)("span", {
                      className: P._p,
                      children: [(0, l.jsx)(b.eu, { src: x, size: U._3.SIZE_24, "aria-hidden": !0 }), j],
                  })
                : j,
        N = r && null != f ? O.intl.format(O.t.BCjSZy, { username: f }) : O.intl.string(O.t.sl2irJ),
        w = r && null != d ? O.intl.string(O.t["75s2Rq"]) : O.intl.string(O.t["62xU4E"]),
        y = r && null != d ? O.intl.formatToPlainString(O.t.BCjSZy, { username: d }) : O.intl.string(O.t.UqnlQF);
    return (0, l.jsx)("div", {
        className: P.ws,
        children: (0, l.jsxs)(S.F, {
            component: (0, l.jsxs)("div", {
                className: P.NG,
                children: [
                    (0, l.jsxs)("div", {
                        className: P.kc,
                        children: [
                            !v && null != x && (0, l.jsx)(b.eu, { src: x, size: U._3.SIZE_24, "aria-hidden": !0 }),
                            (0, l.jsx)(_.D, { variant: "heading-lg/semibold", color: "text-strong", children: N }),
                        ],
                    }),
                    (0, l.jsx)(h.E, { variant: "text-sm/medium", color: "text-subtle", children: w }),
                ],
            }),
            children: [
                (0, l.jsxs)("div", {
                    className: P.hG,
                    children: [
                        g.length > 0 &&
                            (0, l.jsx)(z, {
                                label: { type: "aria", text: y },
                                navId: "badge-directory-owned",
                                badges: g,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                            }),
                        !r &&
                            m.length > 0 &&
                            (0, l.jsx)(z, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: O.intl.string(O.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: m,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                            }),
                    ],
                }),
                r &&
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
function Z(e) {
    if (null == e || "" === e) return null;
    let t = new Date(e);
    return Number.isNaN(t.getTime()) ? null : t;
}
function q(e) {
    return null == e ? null : e.toLocaleDateString(O.intl.currentLocale, { month: "short", year: "numeric" });
}
function H(e) {
    var t;
    let n,
        { badge: a, isViewingOtherUser: s, targetUsername: r } = e,
        d = (function (e) {
            if (!e.owned) return 0;
            let t = e.tiers.find((t) => t.key === e.current_tier),
                n = t?.requirements[0]?.threshold ?? 0;
            return Math.max(e.progress?.[0]?.current ?? 0, n);
        })(a),
        c = q(Z(a.obtained_at)) ?? O.intl.string(O.t.sTFApF),
        o = i.useId(),
        u = s && null != r,
        m = a.badge_id === x.$.PREMIUM_TENURE ? O.intl.string(O.t.crwYbF) : null,
        b = u ? O.intl.formatToPlainString(O.t.KyTwIh, { username: r }) : m,
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
                className: g()(L.SV, _ > 4 && L.Li),
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
                                    r = e.name ?? e.key,
                                    o = (function (e) {
                                        let {
                                            tier: t,
                                            isUnlocked: n,
                                            isViewingOtherUser: l,
                                            badgeObtainedAtText: i,
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
                                        return l ? O.intl.string(O.t.sTFApF) : (q(Z(t.obtained_at)) ?? i);
                                    })({ tier: e, isUnlocked: n, isViewingOtherUser: s, badgeObtainedAtText: c });
                                return (0, l.jsxs)(
                                    "div",
                                    {
                                        role: "listitem",
                                        className: g()(L.zh, !n && L.ZF),
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
                                                children: [r, (0, l.jsx)("br", {}), o],
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
            targetUsername: s,
            viewedAvatarSrc: r,
            targetOwnsBadge: d,
            viewerOwnsBadge: c,
            onToggleViewedUser: o,
        } = e;
    if (
        ((t = i
            ? n.owned
                ? O.intl.string(O.t.sTFApF)
                : O.intl.string(O.t.uHtDcT)
            : a && null != s
              ? O.intl.formatToPlainString(O.t.Eo5Cnp, { username: G(s) })
              : n.owned
                ? null != n.obtained_at
                    ? O.intl.formatToPlainString(O.t["0aEh2a"], { date: new Date(n.obtained_at) })
                    : O.intl.string(O.t.sTFApF)
                : O.intl.string(O.t.uHtDcT)),
        i)
    )
        return (0, l.jsx)(h.E, { variant: "text-xs/medium", color: "text-subtle", children: t });
    let u = a && c,
        m = !a && d && null != s;
    return (0, l.jsxs)("div", {
        className: P.bn,
        children: [
            null != r && (0, l.jsx)(b.eu, { src: r, size: U._3.SIZE_16, "aria-hidden": !0 }),
            (0, l.jsx)(h.E, { variant: "text-xs/medium", color: "text-subtle", className: P.CT, children: t }),
            (u || m) &&
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
                            text: u
                                ? O.intl.string(O.t.yxEAGH)
                                : O.intl.formatToPlainString(O.t["9GNsge"], { username: G(s) }),
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
            viewerBadge: s,
            onClose: r,
            isOwnProfile: d,
            isViewingOtherUser: c,
            targetUsername: o,
            displayedUserId: u,
            targetOwnsBadge: m,
            viewerOwnsBadge: b,
            onToggleViewedUser: j,
            onViewOwnCatalog: E,
        } = e,
        C = k(u, c, 32),
        B = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let n = e.owned ? e.current_tier : e.next_tier;
            return (null != n ? t.find((e) => e.key === n) : void 0) ?? t[0];
        })(n),
        S = (0, a.bG)([y.A], () => y.A.useReducedMotion)
            ? void 0
            : (B?.complex_icon_animated_url ?? n.complex_icon_animated_url),
        T = B?.complex_icon_static_url ?? n.complex_icon_static_url,
        I = B?.simple_icon_url ?? n.simple_icon_url,
        U = S ?? T ?? I,
        G = (0, J.V)(B?.rarity ?? n.rarity),
        V = (0, F.Om)(n.badge_id),
        z = n.badge_id === x.$.PREMIUM_TENURE,
        M = z ? (B?.name ?? B?.key) : B?.name,
        R = z ? O.intl.string(O.t.Ipxkog) : n.name,
        $ = null != M ? `${R} ${M}` : R;
    t =
        s?.owned === !0 && (s.tiers?.length ?? 0) > 0 && null == s.next_tier
            ? O.intl.string(O.t.jY5xAL)
            : (s?.description ?? n.description);
    let L = i.useCallback(() => {
            null != V && (r(), V.ctaAction());
        }, [V, r]),
        Z = (0, F.ie)(n.badge_id) && !n.is_earnable,
        q = c && !n.is_earnable && !b;
    return (0, l.jsx)("div", {
        id: F.hJ,
        role: "tabpanel",
        "aria-labelledby": D(n.badge_id),
        className: P.SV,
        children: (0, l.jsxs)(v.d_, {
            className: P.C9,
            children: [
                null != U && (0, l.jsx)("img", { className: P.y2, src: U, alt: "", "aria-hidden": !0 }),
                (0, l.jsxs)("div", {
                    className: P.OU,
                    children: [
                        (0, l.jsxs)("div", {
                            className: P.cQ,
                            children: [
                                (0, l.jsx)(_.D, {
                                    variant: "display-sm",
                                    color: "text-strong",
                                    className: g()(P._r, z && P.tN),
                                    children: $,
                                }),
                                (0, l.jsx)(Y, {
                                    badge: n,
                                    isOwnProfile: d,
                                    isViewingOtherUser: c,
                                    targetUsername: o,
                                    viewedAvatarSrc: C,
                                    targetOwnsBadge: m,
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
                                                            Z &&
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
                                                        (0, l.jsx)(N.c, {}),
                                                        (0, l.jsx)(H, {
                                                            badge: n,
                                                            isViewingOtherUser: c,
                                                            targetUsername: o,
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                q &&
                                    (0, l.jsx)(w.w, {
                                        type: "info",
                                        children: O.intl.format(O.t.vFekBs, { onViewBadges: E }),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function K(e) {
    let { transitionState: t, onClose: n, initialBadgeId: m, targetUserId: g, targetUsername: x } = e,
        h = (0, a.bG)([c.default], () => c.default.getCurrentUser()?.id),
        b = null == g || g === h,
        [j, v] = i.useState(!b && null != g),
        _ = j ? g : h,
        [f, p] = i.useState(m ?? null),
        N = (0, a.bG)([u.A], () => (null != _ ? u.A.getBadges(_) : []), [_]);
    i.useEffect(() => {
        null == _ || u.A.hasCatalogFor(_) || (0, o.R)(_), b || null == h || u.A.hasCatalogFor(h) || (0, o.R)(h);
    }, [_, b, h]);
    let w = i.useCallback(() => {
            null != h && null != g && v((e) => !e);
        }, [h, g]),
        y = i.useCallback(() => {
            null != h && null != g && (v(!1), p(null));
        }, [h, g]),
        A = i.useMemo(() => {
            let { earnable: e, owned: t } = M(N);
            return j ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [N, j]),
        E = null != f && null != _ ? u.A.getBadgeById(f, _) : void 0,
        C = null != A && null != _ ? u.A.getBadgeById(A, _) : void 0,
        B = E ?? C,
        S = 0 === N.length,
        T = (0, a.bG)([u.A], () => null != g && null != B && (u.A.getBadgeById(B.badge_id, g)?.owned ?? !1), [B, g]),
        I = (0, a.bG)([u.A], () => (null != h && null != B ? u.A.getBadgeById(B.badge_id, h) : void 0), [B, h]),
        k = I?.owned ?? !1,
        F = i.useCallback(() => {
            n();
        }, [n]);
    return (0, l.jsx)(s.EO, {
        "data-migration-pending": !0,
        parentComponent: "BadgeDirectoryModal",
        "aria-label": O.intl.string(O.t.PEjP4L),
        transitionState: t,
        size: s.rI.DYNAMIC,
        hideShadow: !0,
        className: P.CR,
        children: (0, l.jsxs)(s.$m, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: P.jE,
            children: [
                (0, l.jsx)("div", { className: P.b, children: (0, l.jsx)(r.J, { onClick: F, size: "sm" }) }),
                S
                    ? (0, l.jsx)("div", { className: P.Lq, children: (0, l.jsx)(d.y, {}) })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(R, {
                                  selectedBadgeId: B?.badge_id ?? null,
                                  onSelectBadge: p,
                                  displayedUserId: _,
                                  isViewingOtherUser: j,
                                  targetUsername: x,
                                  onViewOwnCatalog: y,
                              }),
                              null != B &&
                                  (0, l.jsx)(Q, {
                                      badge: B,
                                      viewerBadge: I,
                                      onClose: F,
                                      isOwnProfile: b,
                                      isViewingOtherUser: j,
                                      targetUsername: x,
                                      displayedUserId: _,
                                      targetOwnsBadge: T,
                                      viewerOwnsBadge: k,
                                      onToggleViewedUser: w,
                                      onViewOwnCatalog: y,
                                  }),
                          ],
                      }),
            ],
        }),
    });
}
