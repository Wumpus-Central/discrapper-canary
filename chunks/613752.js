n.d(t, { default: () => Q });
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
    y = n(775602);
n(321073);
var A = n(837381),
    E = n(741918),
    C = n(939249),
    S = n(707554),
    B = n(260762),
    T = n(486020);
function I(e, t, n) {
    let l = (0, a.bG)([c.default], () => (null != e ? c.default.getUser(e) : void 0), [e]);
    if (null != l && t) return (0, T.ku)({ id: l.id, avatar: l.avatar, discriminator: l.discriminator }, !1, n);
}
var k = n(92111),
    F = n(778712),
    U = n(375708),
    O = n(490308);
function P(e) {
    return `badge-tab-${e}`;
}
function V(e) {
    let t = Array.from(e);
    return t.length > 19 ? `${t.slice(0, 19).join("")}...` : e;
}
function z(e) {
    let { badge: t, isSelected: n, onSelect: i, itemId: a } = e,
        s = (0, A.rm)(a);
    return (0, l.jsx)(C.D, {
        ...s,
        role: "tab",
        id: P(t.badge_id),
        "aria-label": t.name,
        "aria-selected": n,
        "aria-controls": n ? k.hJ : void 0,
        className: g()(O.oL, n && O.xO),
        onFocus: s.onFocus,
        onClick: i,
        children:
            null != t.simple_icon_url &&
            (0, l.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: O.pW }),
    });
}
function D(e) {
    let { label: t, navId: n, badges: i, selectedBadgeId: a, onSelectBadge: s } = e,
        r = (0, B.A)(n, E.Gl.HORIZONTAL);
    return (0, l.jsxs)("div", {
        className: O.zE,
        children: [
            "heading" === t.type &&
                (0, l.jsx)(_.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, l.jsx)(A.hD, {
                navigator: r,
                children: (0, l.jsx)(A.PR, {
                    children: (e) =>
                        (0, l.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: O.yq,
                            children: i.map((e, t) =>
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
function G(e) {
    let t = [],
        n = [];
    for (let l of e) l.owned ? n.push(l) : l.is_earnable && t.push(l);
    return { earnable: t, owned: n };
}
function M(e) {
    let {
            selectedBadgeId: t,
            onSelectBadge: n,
            displayedUserId: s,
            isViewingOtherUser: r,
            targetUsername: d,
            onViewOwnCatalog: c,
        } = e,
        o = (0, a.bG)([u.A], () => (null != s ? u.A.getBadges(s) : []), [s]),
        { earnable: m, owned: g } = i.useMemo(() => G(o), [o]),
        x = I(s, r, 48),
        j = null != d ? V(d) : null,
        v = null != d && j !== d,
        f =
            null != j && v && null != x
                ? (0, l.jsxs)("span", {
                      className: O._p,
                      children: [(0, l.jsx)(b.eu, { src: x, size: F._3.SIZE_24, "aria-hidden": !0 }), j],
                  })
                : j,
        N = r && null != f ? U.intl.format(U.t.BCjSZy, { username: f }) : U.intl.string(U.t.sl2irJ),
        w = r && null != d ? U.intl.string(U.t["75s2Rq"]) : U.intl.string(U.t["62xU4E"]),
        y = r && null != d ? U.intl.formatToPlainString(U.t.BCjSZy, { username: d }) : U.intl.string(U.t.UqnlQF);
    return (0, l.jsx)("div", {
        className: O.ws,
        children: (0, l.jsxs)(S.F, {
            component: (0, l.jsxs)("div", {
                className: O.NG,
                children: [
                    (0, l.jsxs)("div", {
                        className: O.kc,
                        children: [
                            !v && null != x && (0, l.jsx)(b.eu, { src: x, size: F._3.SIZE_24, "aria-hidden": !0 }),
                            (0, l.jsx)(_.D, { variant: "heading-lg/semibold", color: "text-strong", children: N }),
                        ],
                    }),
                    (0, l.jsx)(h.E, { variant: "text-sm/medium", color: "text-subtle", children: w }),
                ],
            }),
            children: [
                (0, l.jsxs)("div", {
                    className: O.hG,
                    children: [
                        g.length > 0 &&
                            (0, l.jsx)(D, {
                                label: { type: "aria", text: y },
                                navId: "badge-directory-owned",
                                badges: g,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                            }),
                        !r &&
                            m.length > 0 &&
                            (0, l.jsx)(D, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: U.intl.string(U.t["0YzU//"]),
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
                        className: O.HO,
                        children: (0, l.jsx)(p.$, {
                            variant: "secondary",
                            size: "sm",
                            fullWidth: !0,
                            onClick: c,
                            text: U.intl.string(U.t.msyp90),
                        }),
                    }),
            ],
        }),
    });
}
var R = n(140735),
    $ = n(899696);
function L(e) {
    if (null == e || "" === e) return null;
    let t = new Date(e);
    return Number.isNaN(t.getTime()) ? null : t;
}
function H(e) {
    return null == e ? null : e.toLocaleDateString(U.intl.currentLocale, { month: "short", year: "numeric" });
}
function Z(e) {
    var t;
    let n,
        { badge: a, isViewingOtherUser: s, targetUsername: r } = e,
        d = (function (e) {
            if (!e.owned) return 0;
            let t = e.tiers.find((t) => t.key === e.current_tier),
                n = t?.requirements[0]?.threshold ?? 0;
            return Math.max(e.progress?.[0]?.current ?? 0, n);
        })(a),
        c = H(L(a.obtained_at)) ?? U.intl.string(U.t.sTFApF),
        o = i.useId(),
        u = s && null != r,
        m = a.badge_id === x.$.PREMIUM_TENURE ? U.intl.string(U.t.crwYbF) : null,
        b = u ? U.intl.formatToPlainString(U.t.KyTwIh, { username: r }) : m,
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
                    className: $.u4,
                    children: b,
                }),
            (0, l.jsx)("div", {
                className: g()($.SV, _ > 4 && $.Li),
                role: "list",
                "aria-labelledby": j ? o : void 0,
                children: v.map((e, t) =>
                    (0, l.jsx)(
                        "div",
                        {
                            className: $._1,
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
                                                              return U.intl.formatToPlainString(U.t.kridzK, {
                                                                  months: e,
                                                              });
                                                          let t = e / 12;
                                                          return t >= 6
                                                              ? U.intl.string(U.t.nPrx97)
                                                              : U.intl.formatToPlainString(U.t.PClsrw, { years: t });
                                                      }
                                                      return String(e);
                                                  })(e.threshold, e.unit)
                                                : "";
                                        }
                                        return l ? U.intl.string(U.t.sTFApF) : (H(L(t.obtained_at)) ?? i);
                                    })({ tier: e, isUnlocked: n, isViewingOtherUser: s, badgeObtainedAtText: c });
                                return (0, l.jsxs)(
                                    "div",
                                    {
                                        role: "listitem",
                                        className: g()($.zh, !n && $.ZF),
                                        children: [
                                            null != i &&
                                                (0, l.jsx)("img", {
                                                    className: $.Hw,
                                                    src: i,
                                                    alt: "",
                                                    "aria-hidden": !0,
                                                }),
                                            (0, l.jsxs)(h.E, {
                                                variant: "text-xxs/medium",
                                                color: n ? "text-default" : "text-muted",
                                                className: $.hI,
                                                children: [r, (0, l.jsx)("br", {}), o],
                                            }),
                                            (0, l.jsx)(R.A, { children: U.intl.string(n ? U.t.sTFApF : U.t.uHtDcT) }),
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
var q = n(731454);
function J(e) {
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
                ? U.intl.string(U.t.sTFApF)
                : U.intl.string(U.t.uHtDcT)
            : a && null != s
              ? U.intl.formatToPlainString(U.t.Eo5Cnp, { username: V(s) })
              : n.owned
                ? null != n.obtained_at
                    ? U.intl.formatToPlainString(U.t["0aEh2a"], { date: new Date(n.obtained_at) })
                    : U.intl.string(U.t.sTFApF)
                : U.intl.string(U.t.uHtDcT)),
        i)
    )
        return (0, l.jsx)(h.E, { variant: "text-xs/medium", color: "text-subtle", children: t });
    let u = a && c,
        m = !a && d && null != s;
    return (0, l.jsxs)("div", {
        className: O.bn,
        children: [
            null != r && (0, l.jsx)(b.eu, { src: r, size: F._3.SIZE_16, "aria-hidden": !0 }),
            (0, l.jsx)(h.E, { variant: "text-xs/medium", color: "text-subtle", className: O.CT, children: t }),
            (u || m) &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(h.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: O.CT,
                            "aria-hidden": !0,
                            children: "\xb7",
                        }),
                        (0, l.jsx)(j.Q, {
                            variant: "primary",
                            size: "sm",
                            textVariant: "text-xs/medium",
                            onClick: o,
                            text: u
                                ? U.intl.string(U.t.yxEAGH)
                                : U.intl.formatToPlainString(U.t["9GNsge"], { username: V(s) }),
                        }),
                    ],
                }),
        ],
    });
}
function Y(e) {
    let {
            badge: t,
            viewerBadge: n,
            onClose: s,
            isOwnProfile: r,
            isViewingOtherUser: d,
            targetUsername: c,
            displayedUserId: o,
            targetOwnsBadge: u,
            viewerOwnsBadge: m,
            onToggleViewedUser: b,
            onViewOwnCatalog: j,
        } = e,
        A = I(o, d, 32),
        E = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let n = e.owned ? e.current_tier : e.next_tier;
            return (null != n ? t.find((e) => e.key === n) : void 0) ?? t[0];
        })(t),
        C = (0, a.bG)([y.A], () => y.A.useReducedMotion)
            ? void 0
            : (E?.complex_icon_animated_url ?? t.complex_icon_animated_url),
        S = E?.complex_icon_static_url ?? t.complex_icon_static_url,
        B = E?.simple_icon_url ?? t.simple_icon_url,
        T = C ?? S ?? B,
        F = (0, q.V)(E?.rarity ?? t.rarity),
        V = (0, k.Om)(t.badge_id),
        z = t.badge_id === x.$.PREMIUM_TENURE,
        D = z ? (E?.name ?? E?.key) : E?.name,
        G = z ? U.intl.string(U.t.Ipxkog) : t.name,
        M = null != D ? `${G} ${D}` : G,
        R = n?.owned === !0 && (n.tiers?.length ?? 0) > 0 && null == n.next_tier,
        $ = "";
    R
        ? ($ = U.intl.string(U.t.jY5xAL))
        : n?.description != null
          ? ($ = n.description)
          : d || t.is_earnable
            ? !d && t.owned && ($ = U.intl.string(U.t.W87dHj))
            : ($ = t.owned ? U.intl.string(U.t["m++6Ll"]) : U.intl.string(U.t.VaSz3l));
    let L = i.useCallback(() => {
            null != V && (s(), V.ctaAction());
        }, [V, s]),
        H = (0, k.ie)(t.badge_id) && !t.is_earnable,
        Y = d && !t.is_earnable && !m;
    return (0, l.jsx)("div", {
        id: k.hJ,
        role: "tabpanel",
        "aria-labelledby": P(t.badge_id),
        className: O.SV,
        children: (0, l.jsxs)(v.d_, {
            className: O.C9,
            children: [
                null != T && (0, l.jsx)("img", { className: O.y2, src: T, alt: "", "aria-hidden": !0 }),
                (0, l.jsxs)("div", {
                    className: O.OU,
                    children: [
                        (0, l.jsxs)("div", {
                            className: O.cQ,
                            children: [
                                (0, l.jsx)(_.D, {
                                    variant: "display-sm",
                                    color: "text-strong",
                                    className: g()(O._r, z && O.tN),
                                    children: M,
                                }),
                                (0, l.jsx)(J, {
                                    badge: t,
                                    isOwnProfile: r,
                                    isViewingOtherUser: d,
                                    targetUsername: c,
                                    viewedAvatarSrc: A,
                                    targetOwnsBadge: u,
                                    viewerOwnsBadge: m,
                                    onToggleViewedUser: b,
                                }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: O.oA,
                            children: [
                                null != F &&
                                    (0, l.jsxs)("div", {
                                        className: O.sn,
                                        children: [
                                            (0, l.jsx)(f.E, { ...F }),
                                            (0, l.jsx)(h.E, {
                                                variant: "text-xs/medium",
                                                color: "text-subtle",
                                                children: U.intl.string(U.t["phYZe+"]),
                                            }),
                                        ],
                                    }),
                                ("" !== $ || null != V) &&
                                    (0, l.jsxs)("div", {
                                        className: O.d9,
                                        children: [
                                            (0, l.jsxs)("div", {
                                                className: O.E4,
                                                children: [
                                                    (0, l.jsxs)("div", {
                                                        className: O.jv,
                                                        children: [
                                                            H &&
                                                                (0, l.jsx)(h.E, {
                                                                    variant: "text-xs/medium",
                                                                    color: "text-subtle",
                                                                    className: O.c$,
                                                                    children: U.intl.string(U.t["/Gmn3f"]),
                                                                }),
                                                            "" !== $ &&
                                                                (0, l.jsx)(h.E, {
                                                                    variant: "text-sm/medium",
                                                                    color: "text-default",
                                                                    className: O.ij,
                                                                    children: $,
                                                                }),
                                                        ],
                                                    }),
                                                    null != V &&
                                                        (0, l.jsx)(p.$, {
                                                            variant: m ? "secondary" : z ? "expressive" : "primary",
                                                            size: "sm",
                                                            onClick: L,
                                                            text: V.ctaLabel({ owned: m }),
                                                        }),
                                                ],
                                            }),
                                            (t.tiers?.length ?? 0) > 0 &&
                                                (0, l.jsxs)("div", {
                                                    className: O.cJ,
                                                    children: [
                                                        (0, l.jsx)(N.c, {}),
                                                        (0, l.jsx)(Z, {
                                                            badge: t,
                                                            isViewingOtherUser: d,
                                                            targetUsername: c,
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                Y &&
                                    (0, l.jsx)(w.w, {
                                        type: "info",
                                        children: U.intl.format(U.t.vFekBs, { onViewBadges: j }),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function Q(e) {
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
            let { earnable: e, owned: t } = G(N);
            return j ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [N, j]),
        E = null != f && null != _ ? u.A.getBadgeById(f, _) : void 0,
        C = null != A && null != _ ? u.A.getBadgeById(A, _) : void 0,
        S = E ?? C,
        B = 0 === N.length,
        T = (0, a.bG)([u.A], () => null != g && null != S && (u.A.getBadgeById(S.badge_id, g)?.owned ?? !1), [S, g]),
        I = (0, a.bG)([u.A], () => (null != h && null != S ? u.A.getBadgeById(S.badge_id, h) : void 0), [S, h]),
        k = I?.owned ?? !1,
        F = i.useCallback(() => {
            n();
        }, [n]);
    return (0, l.jsx)(s.EO, {
        "data-migration-pending": !0,
        parentComponent: "BadgeDirectoryModal",
        "aria-label": U.intl.string(U.t.PEjP4L),
        transitionState: t,
        size: s.rI.DYNAMIC,
        hideShadow: !0,
        className: O.CR,
        children: (0, l.jsxs)(s.$m, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: O.jE,
            children: [
                (0, l.jsx)("div", { className: O.b, children: (0, l.jsx)(r.J, { onClick: F, size: "sm" }) }),
                B
                    ? (0, l.jsx)("div", { className: O.Lq, children: (0, l.jsx)(d.y, {}) })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(M, {
                                  selectedBadgeId: S?.badge_id ?? null,
                                  onSelectBadge: p,
                                  displayedUserId: _,
                                  isViewingOtherUser: j,
                                  targetUsername: x,
                                  onViewOwnCatalog: y,
                              }),
                              null != S &&
                                  (0, l.jsx)(Y, {
                                      badge: S,
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
