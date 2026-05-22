l.d(t, { default: () => K });
var n = l(627968),
    i = l(64700),
    a = l(17928),
    s = l(935462),
    r = l(815021),
    d = l(289873),
    c = l(287809),
    o = l(682618),
    u = l(982240),
    m = l(503698),
    g = l.n(m),
    x = l(70283),
    h = l(834730),
    b = l(97808),
    j = l(123292),
    v = l(364522),
    _ = l(534514),
    f = l(508770),
    p = l(821609),
    N = l(404778),
    w = l(683071),
    y = l(775602),
    A = l(240248);
l(321073);
var E = l(837381),
    C = l(741918),
    B = l(939249),
    S = l(707554),
    T = l(260762),
    I = l(486020);
function k(e, t, l) {
    let n = (0, a.bG)([c.default], () => (null != e ? c.default.getUser(e) : void 0), [e]);
    if (null != n && t) return (0, I.ku)({ id: n.id, avatar: n.avatar, discriminator: n.discriminator }, !1, l);
}
var F = l(92111),
    U = l(778712),
    O = l(375708),
    P = l(490308);
function D(e) {
    return `badge-tab-${e}`;
}
function G(e) {
    let t = Array.from(e);
    return t.length > 19 ? `${t.slice(0, 19).join("")}...` : e;
}
function V(e) {
    let { badge: t, isSelected: l, onSelect: i, itemId: a } = e,
        s = (0, E.rm)(a);
    return (0, n.jsx)(B.D, {
        ...s,
        role: "tab",
        id: D(t.badge_id),
        "aria-label": t.name,
        "aria-selected": l,
        "aria-controls": l ? F.hJ : void 0,
        className: g()(P.oL, l && P.xO),
        onFocus: s.onFocus,
        onClick: i,
        children:
            null != t.simple_icon_url &&
            (0, n.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: P.pW }),
    });
}
function z(e) {
    let { label: t, navId: l, badges: i, selectedBadgeId: a, onSelectBadge: s } = e,
        r = (0, T.A)(l, C.Gl.HORIZONTAL);
    return (0, n.jsxs)("div", {
        className: P.zE,
        children: [
            "heading" === t.type &&
                (0, n.jsx)(_.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, n.jsx)(E.hD, {
                navigator: r,
                children: (0, n.jsx)(E.PR, {
                    children: (e) =>
                        (0, n.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: P.yq,
                            children: i.map((e, t) =>
                                (0, n.jsx)(
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
        l = [];
    for (let n of e) n.owned ? l.push(n) : n.is_earnable && t.push(n);
    return { earnable: t, owned: l };
}
function R(e) {
    let {
            selectedBadgeId: t,
            onSelectBadge: l,
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
                ? (0, n.jsxs)("span", {
                      className: P._p,
                      children: [(0, n.jsx)(b.eu, { src: x, size: U._3.SIZE_24, "aria-hidden": !0 }), j],
                  })
                : j,
        N = r && null != f ? O.intl.format(O.t.BCjSZy, { username: f }) : O.intl.string(O.t.sl2irJ),
        w = r && null != d ? O.intl.string(O.t["75s2Rq"]) : O.intl.string(O.t["62xU4E"]),
        y = r && null != d ? O.intl.formatToPlainString(O.t.BCjSZy, { username: d }) : O.intl.string(O.t.UqnlQF);
    return (0, n.jsx)("div", {
        className: P.ws,
        children: (0, n.jsxs)(S.F, {
            component: (0, n.jsxs)("div", {
                className: P.NG,
                children: [
                    (0, n.jsxs)("div", {
                        className: P.kc,
                        children: [
                            !v && null != x && (0, n.jsx)(b.eu, { src: x, size: U._3.SIZE_24, "aria-hidden": !0 }),
                            (0, n.jsx)(_.D, { variant: "heading-lg/semibold", color: "text-strong", children: N }),
                        ],
                    }),
                    (0, n.jsx)(h.E, { variant: "text-sm/medium", color: "text-subtle", children: w }),
                ],
            }),
            children: [
                (0, n.jsxs)("div", {
                    className: P.hG,
                    children: [
                        g.length > 0 &&
                            (0, n.jsx)(z, {
                                label: { type: "aria", text: y },
                                navId: "badge-directory-owned",
                                badges: g,
                                selectedBadgeId: t,
                                onSelectBadge: l,
                            }),
                        !r &&
                            m.length > 0 &&
                            (0, n.jsx)(z, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: O.intl.string(O.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: m,
                                selectedBadgeId: t,
                                onSelectBadge: l,
                            }),
                    ],
                }),
                r &&
                    (0, n.jsx)("div", {
                        className: P.HO,
                        children: (0, n.jsx)(p.$, {
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
var $ = l(140735),
    L = l(899696);
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
    let l,
        { badge: a, isViewingOtherUser: s, targetUsername: r } = e,
        d = (function (e) {
            if (!e.owned) return 0;
            let t = e.tiers.find((t) => t.key === e.current_tier),
                l = t?.requirements[0]?.threshold ?? 0;
            return Math.max(e.progress?.[0]?.current ?? 0, l);
        })(a),
        c = q(Z(a.obtained_at)) ?? O.intl.string(O.t.sTFApF),
        o = i.useId(),
        u = s && null != r,
        m = a.badge_id === x.$.PREMIUM_TENURE ? O.intl.string(O.t.crwYbF) : null,
        b = u ? O.intl.formatToPlainString(O.t.KyTwIh, { username: r }) : m,
        j = null != b && "" !== b,
        v =
            ((l = (t = a.tiers).length <= 4 ? t.length : Math.ceil(t.length / 2)),
            [t.slice(0, l), t.slice(l)].filter((e) => e.length > 0)),
        _ = v[0]?.length ?? 0;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            j &&
                (0, n.jsx)(h.E, {
                    id: o,
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    className: L.u4,
                    children: b,
                }),
            (0, n.jsx)("div", {
                className: g()(L.SV, _ > 4 && L.Li),
                role: "list",
                "aria-labelledby": j ? o : void 0,
                children: v.map((e, t) =>
                    (0, n.jsx)(
                        "div",
                        {
                            className: L._1,
                            role: "presentation",
                            children: e.map((e) => {
                                let t = e.requirements[0]?.threshold ?? 0,
                                    l = a.owned && d >= t,
                                    i = e.complex_icon_static_url ?? e.simple_icon_url,
                                    r = e.name ?? e.key,
                                    o = (function (e) {
                                        let {
                                            tier: t,
                                            isUnlocked: l,
                                            isViewingOtherUser: n,
                                            badgeObtainedAtText: i,
                                        } = e;
                                        if (!l) {
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
                                        return n ? O.intl.string(O.t.sTFApF) : (q(Z(t.obtained_at)) ?? i);
                                    })({ tier: e, isUnlocked: l, isViewingOtherUser: s, badgeObtainedAtText: c });
                                return (0, n.jsxs)(
                                    "div",
                                    {
                                        role: "listitem",
                                        className: g()(L.zh, !l && L.ZF),
                                        children: [
                                            null != i &&
                                                (0, n.jsx)("img", {
                                                    className: L.Hw,
                                                    src: i,
                                                    alt: "",
                                                    "aria-hidden": !0,
                                                }),
                                            (0, n.jsxs)(h.E, {
                                                variant: "text-xxs/medium",
                                                color: l ? "text-default" : "text-muted",
                                                className: L.hI,
                                                children: [r, (0, n.jsx)("br", {}), o],
                                            }),
                                            (0, n.jsx)($.A, { children: O.intl.string(l ? O.t.sTFApF : O.t.uHtDcT) }),
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
var J = l(731454);
function Y(e) {
    let t,
        {
            badge: l,
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
            ? l.owned
                ? O.intl.string(O.t.sTFApF)
                : O.intl.string(O.t.uHtDcT)
            : a && null != s
              ? O.intl.formatToPlainString(O.t.Eo5Cnp, { username: G(s) })
              : l.owned
                ? null != l.obtained_at
                    ? O.intl.formatToPlainString(O.t["0aEh2a"], { date: new Date(l.obtained_at) })
                    : O.intl.string(O.t.sTFApF)
                : O.intl.string(O.t.uHtDcT)),
        i)
    )
        return (0, n.jsx)(h.E, { variant: "text-xs/medium", color: "text-subtle", children: t });
    let u = a && c,
        m = !a && d && null != s;
    return (0, n.jsxs)("div", {
        className: P.bn,
        children: [
            null != r && (0, n.jsx)(b.eu, { src: r, size: U._3.SIZE_16, "aria-hidden": !0 }),
            (0, n.jsx)(h.E, { variant: "text-xs/medium", color: "text-subtle", className: P.CT, children: t }),
            (u || m) &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(h.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: P.CT,
                            "aria-hidden": !0,
                            children: "\xb7",
                        }),
                        (0, n.jsx)(j.Q, {
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
            badge: l,
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
            let l = e.owned ? e.current_tier : e.next_tier;
            return (null != l ? t.find((e) => e.key === l) : void 0) ?? t[0];
        })(l),
        S = (0, a.bG)([y.A], () => y.A.useReducedMotion)
            ? void 0
            : (B?.complex_icon_animated_url ?? l.complex_icon_animated_url),
        T = B?.complex_icon_static_url ?? l.complex_icon_static_url,
        I = B?.simple_icon_url ?? l.simple_icon_url,
        U = S ?? T ?? I,
        G = (0, J.V)(B?.rarity ?? l.rarity),
        V = (0, F.Om)(l.badge_id),
        z = l.badge_id === x.$.PREMIUM_TENURE,
        M = z ? (B?.name ?? B?.key) : B?.name,
        R = z ? O.intl.string(O.t.Ipxkog) : l.name,
        $ = null != M ? `${R} ${M}` : R;
    t =
        s?.owned === !0 && (s.tiers?.length ?? 0) > 0 && null == s.next_tier
            ? O.intl.string(O.t.jY5xAL)
            : (s?.description ?? l.description);
    let L = i.useCallback(() => {
            null != V && (r(), V.ctaAction());
        }, [V, r]),
        Z = (0, F.ie)(l.badge_id) && !l.is_earnable,
        q = c && !l.is_earnable && !b;
    return (0, n.jsx)("div", {
        id: F.hJ,
        role: "tabpanel",
        "aria-labelledby": D(l.badge_id),
        className: P.SV,
        children: (0, n.jsxs)(v.d_, {
            className: P.C9,
            children: [
                null != U &&
                    (0, n.jsx)("img", {
                        className: g()(P.y2, null != S && U === S && P.hu),
                        src: U,
                        alt: "",
                        "aria-hidden": !0,
                    }),
                (0, n.jsxs)("div", {
                    className: P.OU,
                    children: [
                        (0, n.jsxs)("div", {
                            className: P.cQ,
                            children: [
                                (0, n.jsx)(_.D, {
                                    variant: "display-sm",
                                    color: "text-strong",
                                    className: g()(P._r, z && P.tN),
                                    children: $,
                                }),
                                (0, n.jsx)(Y, {
                                    badge: l,
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
                        (0, n.jsxs)("div", {
                            className: P.oA,
                            children: [
                                null != G &&
                                    (0, n.jsxs)("div", {
                                        className: P.sn,
                                        children: [
                                            (0, n.jsx)(f.E, { ...G }),
                                            (0, n.jsx)(h.E, {
                                                variant: "text-xs/medium",
                                                color: "text-subtle",
                                                children: O.intl.string(O.t["phYZe+"]),
                                            }),
                                        ],
                                    }),
                                !(0, A.uJ)(t) &&
                                    (0, n.jsxs)("div", {
                                        className: P.d9,
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: P.E4,
                                                children: [
                                                    (0, n.jsxs)("div", {
                                                        className: P.jv,
                                                        children: [
                                                            Z &&
                                                                (0, n.jsx)(h.E, {
                                                                    variant: "text-xs/medium",
                                                                    color: "text-subtle",
                                                                    className: P.c$,
                                                                    children: O.intl.string(O.t["/Gmn3f"]),
                                                                }),
                                                            (0, n.jsx)(h.E, {
                                                                variant: "text-sm/medium",
                                                                color: "text-default",
                                                                className: P.ij,
                                                                children: t,
                                                            }),
                                                        ],
                                                    }),
                                                    null != V &&
                                                        (0, n.jsx)(p.$, {
                                                            variant: b ? "secondary" : z ? "expressive" : "primary",
                                                            size: "sm",
                                                            onClick: L,
                                                            text: V.ctaLabel({ owned: b }),
                                                        }),
                                                ],
                                            }),
                                            (l.tiers?.length ?? 0) > 0 &&
                                                (0, n.jsxs)("div", {
                                                    className: P.cJ,
                                                    children: [
                                                        (0, n.jsx)(N.c, {}),
                                                        (0, n.jsx)(H, {
                                                            badge: l,
                                                            isViewingOtherUser: c,
                                                            targetUsername: o,
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                q &&
                                    (0, n.jsx)(w.w, {
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
    let { transitionState: t, onClose: l, initialBadgeId: m, targetUserId: g, targetUsername: x } = e,
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
            l();
        }, [l]);
    return (0, n.jsx)(s.EO, {
        "data-migration-pending": !0,
        parentComponent: "BadgeDirectoryModal",
        "aria-label": O.intl.string(O.t.PEjP4L),
        transitionState: t,
        size: s.rI.DYNAMIC,
        hideShadow: !0,
        className: P.CR,
        children: (0, n.jsxs)(s.$m, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: P.jE,
            children: [
                (0, n.jsx)("div", { className: P.b, children: (0, n.jsx)(r.J, { onClick: F, size: "sm" }) }),
                S
                    ? (0, n.jsx)("div", { className: P.Lq, children: (0, n.jsx)(d.y, {}) })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(R, {
                                  selectedBadgeId: B?.badge_id ?? null,
                                  onSelectBadge: p,
                                  displayedUserId: _,
                                  isViewingOtherUser: j,
                                  targetUsername: x,
                                  onViewOwnCatalog: y,
                              }),
                              null != B &&
                                  (0, n.jsx)(Q, {
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
