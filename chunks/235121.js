n.d(t, { default: () => Y });
var l = n(627968),
    i = n(64700),
    a = n(17928),
    s = n(935462),
    r = n(289873),
    d = n(287809),
    c = n(682618),
    o = n(982240),
    u = n(503698),
    m = n.n(u),
    g = n(70283),
    x = n(834730),
    h = n(140735),
    b = n(97808),
    j = n(123292),
    v = n(815021),
    _ = n(364522),
    p = n(534514),
    f = n(508770),
    N = n(821609),
    w = n(404778),
    y = n(683071),
    A = n(775602),
    C = n(425713);
n(321073);
var B = n(837381),
    E = n(741918),
    S = n(939249),
    T = n(707554),
    I = n(260762),
    O = n(486020);
function F(e, t, n) {
    let l = (0, a.bG)([d.default], () => (null != e ? d.default.getUser(e) : void 0), [e]);
    if (null != l && t) return (0, O.ku)({ id: l.id, avatar: l.avatar, discriminator: l.discriminator }, !1, n);
}
var U = n(92111),
    k = n(778712),
    P = n(375708),
    V = n(490308);
function D(e) {
    return `badge-tab-${e}`;
}
function G(e) {
    let t = Array.from(e);
    return t.length > 19 ? `${t.slice(0, 19).join("")}...` : e;
}
function z(e) {
    let { badge: t, isSelected: n, onSelect: i, itemId: a } = e,
        s = (0, B.rm)(a);
    return (0, l.jsx)(S.D, {
        ...s,
        role: "tab",
        id: D(t.badge_id),
        "aria-label": t.name,
        "aria-selected": n,
        "aria-controls": n ? U.hJ : void 0,
        className: m()(V.oL, n && V.xO),
        onFocus: s.onFocus,
        onClick: i,
        children:
            null != t.simple_icon_url &&
            (0, l.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: V.pW }),
    });
}
function $(e) {
    let { label: t, navId: n, badges: i, selectedBadgeId: a, onSelectBadge: s } = e,
        r = (0, I.A)(n, E.Gl.HORIZONTAL);
    return (0, l.jsxs)("div", {
        className: V.zE,
        children: [
            "heading" === t.type &&
                (0, l.jsx)(p.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
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
                            className: V.yq,
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
function R(e) {
    let t = [],
        n = [];
    for (let l of e) l.owned ? n.push(l) : l.is_earnable && t.push(l);
    return { earnable: t, owned: n };
}
function L(e) {
    let {
            selectedBadgeId: t,
            onSelectBadge: n,
            displayedUserId: s,
            isViewingOtherUser: r,
            targetUsername: d,
            onViewOwnCatalog: c,
        } = e,
        u = (0, a.bG)([o.A], () => (null != s ? o.A.getBadges(s) : []), [s]),
        { earnable: m, owned: g } = i.useMemo(() => R(u), [u]),
        h = F(s, r, 48),
        j = null != d ? G(d) : null,
        v = null != d && j !== d,
        _ =
            null != j && v && null != h
                ? (0, l.jsxs)("span", {
                      className: V._p,
                      children: [(0, l.jsx)(b.eu, { src: h, size: k._3.SIZE_24, "aria-hidden": !0 }), j],
                  })
                : j,
        f = r && null != _ ? P.intl.format(P.t.BCjSZy, { username: _ }) : P.intl.string(P.t.sl2irJ),
        w = r && null != d ? P.intl.string(P.t["75s2Rq"]) : P.intl.string(P.t["62xU4E"]),
        y = r && null != d ? P.intl.formatToPlainString(P.t.BCjSZy, { username: d }) : P.intl.string(P.t.UqnlQF);
    return (0, l.jsx)("div", {
        className: V.ws,
        children: (0, l.jsxs)(T.F, {
            component: (0, l.jsxs)("div", {
                className: V.NG,
                children: [
                    (0, l.jsxs)("div", {
                        className: V.kc,
                        children: [
                            !v && null != h && (0, l.jsx)(b.eu, { src: h, size: k._3.SIZE_24, "aria-hidden": !0 }),
                            (0, l.jsx)(p.D, { variant: "heading-lg/semibold", color: "text-strong", children: f }),
                        ],
                    }),
                    (0, l.jsx)(x.E, { variant: "text-sm/medium", color: "text-subtle", children: w }),
                ],
            }),
            children: [
                (0, l.jsxs)("div", {
                    className: V.hG,
                    children: [
                        g.length > 0 &&
                            (0, l.jsx)($, {
                                label: { type: "aria", text: y },
                                navId: "badge-directory-owned",
                                badges: g,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                            }),
                        !r &&
                            m.length > 0 &&
                            (0, l.jsx)($, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: P.intl.string(P.t["0YzU//"]),
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
                        className: V.HO,
                        children: (0, l.jsx)(N.$, {
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
var M = n(731454),
    H = n(788868);
function Z(e) {
    var t;
    let { badge: n, currentTier: a, isViewingOtherUser: s, targetUsername: r } = e,
        d = n.owned ? Math.max(n.progress?.[0]?.current ?? 0, (0, o.r)(a)) : 0,
        c = s
            ? P.intl.string(P.t.sTFApF)
            : ((null ==
              (t = (function (e) {
                  if (null == e) return null;
                  let t = new Date(e);
                  return Number.isNaN(t.getTime()) ? null : t;
              })(n.obtained_at))
                  ? null
                  : t.toLocaleDateString(P.intl.currentLocale, { month: "short", year: "numeric" })) ??
              P.intl.string(P.t.sTFApF)),
        u = i.useId(),
        m = s && null != r ? P.intl.formatToPlainString(P.t.KyTwIh, { username: r }) : P.intl.string(P.t.crwYbF);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(x.E, { id: u, variant: "text-xs/medium", color: "text-subtle", className: V.Hm, children: m }),
            (0, l.jsx)("ul", {
                className: V.by,
                "aria-labelledby": u,
                children: H.sp.map((e) => {
                    let t = H.VD[e],
                        i = t.tenureReqNumMonths,
                        a = n.owned && d >= i;
                    return (0, l.jsxs)(
                        "li",
                        {
                            className: a ? V.Oe : `${V.Oe} ${V.Kv}`,
                            children: [
                                (0, l.jsx)("img", {
                                    className: V.Qm,
                                    src: (0, C.I)(e).standard,
                                    alt: "",
                                    "aria-hidden": !0,
                                }),
                                (0, l.jsxs)(x.E, {
                                    variant: "text-xxs/medium",
                                    color: a ? "text-default" : "text-muted",
                                    className: V.Ou,
                                    children: [
                                        P.intl.string(t.nameUnformatted),
                                        (0, l.jsx)("br", {}),
                                        a
                                            ? c
                                            : (function (e) {
                                                  if (e < 12)
                                                      return P.intl.formatToPlainString(P.t.kridzK, { months: e });
                                                  let t = e / 12;
                                                  return t >= 6
                                                      ? P.intl.string(P.t.nPrx97)
                                                      : P.intl.formatToPlainString(P.t.PClsrw, { years: t });
                                              })(i),
                                    ],
                                }),
                                (0, l.jsx)(h.A, { children: P.intl.string(a ? P.t.sTFApF : P.t.uHtDcT) }),
                            ],
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}
function q(e) {
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
                ? P.intl.string(P.t.sTFApF)
                : P.intl.string(P.t.uHtDcT)
            : a && null != s
              ? P.intl.formatToPlainString(P.t.Eo5Cnp, { username: G(s) })
              : n.owned
                ? null != n.obtained_at
                    ? P.intl.formatToPlainString(P.t["0aEh2a"], { date: new Date(n.obtained_at) })
                    : P.intl.string(P.t.sTFApF)
                : P.intl.string(P.t.uHtDcT)),
        i)
    )
        return (0, l.jsx)(x.E, { variant: "text-xs/medium", color: "text-subtle", children: t });
    let u = a && c,
        m = !a && d && null != s;
    return (0, l.jsxs)("div", {
        className: V.bn,
        children: [
            null != r && (0, l.jsx)(b.eu, { src: r, size: k._3.SIZE_16, "aria-hidden": !0 }),
            (0, l.jsx)(x.E, { variant: "text-xs/medium", color: "text-subtle", className: V.CT, children: t }),
            (u || m) &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(x.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: V.CT,
                            "aria-hidden": !0,
                            children: "\xb7",
                        }),
                        (0, l.jsx)(j.Q, {
                            variant: "primary",
                            size: "sm",
                            textVariant: "text-xs/medium",
                            onClick: o,
                            text: u
                                ? P.intl.string(P.t.yxEAGH)
                                : P.intl.formatToPlainString(P.t["9GNsge"], { username: G(s) }),
                        }),
                    ],
                }),
        ],
    });
}
function J(e) {
    let {
            badge: t,
            viewerBadge: n,
            onClose: s,
            isOwnProfile: r,
            isViewingOtherUser: d,
            targetUsername: c,
            displayedUserId: o,
            targetOwnsBadge: u,
            viewerOwnsBadge: h,
            onToggleViewedUser: b,
            onViewOwnCatalog: j,
        } = e,
        C = F(o, d, 32),
        B = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let n = e.owned ? e.current_tier : e.next_tier;
            return (null != n ? t.find((e) => e.key === n) : void 0) ?? t[0];
        })(t),
        E = (0, a.bG)([A.A], () => A.A.useReducedMotion)
            ? void 0
            : (B?.complex_icon_animated_url ?? t.complex_icon_animated_url),
        S = B?.complex_icon_static_url ?? t.complex_icon_static_url,
        T = B?.simple_icon_url ?? t.simple_icon_url,
        I = E ?? S ?? T,
        O = (0, M.V)(B?.rarity ?? t.rarity),
        k = (0, U.Om)(t.badge_id),
        G = t.badge_id === g.$.PREMIUM_TENURE,
        z = G ? (B?.name ?? B?.key) : B?.name,
        $ = G ? P.intl.string(P.t.Ipxkog) : t.name,
        R = null != z ? `${$} ${z}` : $,
        L = n?.owned === !0 && (n.tiers?.length ?? 0) > 0 && null == n.next_tier,
        H = "";
    L
        ? (H = P.intl.string(P.t.jY5xAL))
        : n?.description != null
          ? (H = n.description)
          : d || t.is_earnable
            ? !d && t.owned && (H = P.intl.string(P.t.W87dHj))
            : (H = t.owned ? P.intl.string(P.t["m++6Ll"]) : P.intl.string(P.t.VaSz3l));
    let J = i.useCallback(() => {
            null != k && (s(), k.ctaAction());
        }, [k, s]),
        Y = (0, U.ie)(t.badge_id) && !t.is_earnable,
        Q = d && !t.is_earnable && !h;
    return (0, l.jsxs)("div", {
        id: U.hJ,
        role: "tabpanel",
        "aria-labelledby": D(t.badge_id),
        className: V.SV,
        children: [
            (0, l.jsx)("div", { className: V.b, children: (0, l.jsx)(v.J, { onClick: s, size: "sm" }) }),
            (0, l.jsxs)(_.d_, {
                className: V.C9,
                children: [
                    null != I && (0, l.jsx)("img", { className: V.y2, src: I, alt: "", "aria-hidden": !0 }),
                    (0, l.jsxs)("div", {
                        className: V.OU,
                        children: [
                            (0, l.jsxs)("div", {
                                className: V.cQ,
                                children: [
                                    (0, l.jsx)(p.D, {
                                        variant: "display-sm",
                                        color: "text-strong",
                                        className: m()(V._r, G && V.tN),
                                        children: R,
                                    }),
                                    (0, l.jsx)(q, {
                                        badge: t,
                                        isOwnProfile: r,
                                        isViewingOtherUser: d,
                                        targetUsername: c,
                                        viewedAvatarSrc: C,
                                        targetOwnsBadge: u,
                                        viewerOwnsBadge: h,
                                        onToggleViewedUser: b,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: V.oA,
                                children: [
                                    null != O &&
                                        (0, l.jsxs)("div", {
                                            className: V.sn,
                                            children: [
                                                (0, l.jsx)(f.E, { ...O }),
                                                (0, l.jsx)(x.E, {
                                                    variant: "text-xs/medium",
                                                    color: "text-subtle",
                                                    children: P.intl.string(P.t["phYZe+"]),
                                                }),
                                            ],
                                        }),
                                    ("" !== H || null != k) &&
                                        (0, l.jsxs)("div", {
                                            className: V.d9,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: V.E4,
                                                    children: [
                                                        (0, l.jsxs)("div", {
                                                            className: V.jv,
                                                            children: [
                                                                Y &&
                                                                    (0, l.jsx)(x.E, {
                                                                        variant: "text-xs/medium",
                                                                        color: "text-subtle",
                                                                        className: V.c$,
                                                                        children: P.intl.string(P.t["/Gmn3f"]),
                                                                    }),
                                                                "" !== H &&
                                                                    (0, l.jsx)(x.E, {
                                                                        variant: "text-sm/medium",
                                                                        color: "text-default",
                                                                        className: V.ij,
                                                                        children: H,
                                                                    }),
                                                            ],
                                                        }),
                                                        null != k &&
                                                            (0, l.jsx)(N.$, {
                                                                variant: k.ctaVariant({ owned: h }),
                                                                size: "sm",
                                                                onClick: J,
                                                                text: k.ctaLabel({ owned: h }),
                                                            }),
                                                    ],
                                                }),
                                                G &&
                                                    (0, l.jsxs)("div", {
                                                        className: V.cJ,
                                                        children: [
                                                            (0, l.jsx)(w.c, {}),
                                                            (0, l.jsx)(Z, {
                                                                badge: t,
                                                                currentTier: B,
                                                                isViewingOtherUser: d,
                                                                targetUsername: c,
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                    Q &&
                                        (0, l.jsx)(y.w, {
                                            type: "info",
                                            children: P.intl.format(P.t.vFekBs, { onViewBadges: j }),
                                        }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function Y(e) {
    let { transitionState: t, onClose: n, initialBadgeId: u, targetUserId: m, targetUsername: g } = e,
        x = (0, a.bG)([d.default], () => d.default.getCurrentUser()?.id),
        h = null == m || m === x,
        [b, j] = i.useState(!h && null != m),
        v = b ? m : x,
        [_, p] = i.useState(u ?? null),
        f = (0, a.bG)([o.A], () => (null != v ? o.A.getBadges(v) : []), [v]);
    i.useEffect(() => {
        null == v || o.A.hasCatalogFor(v) || (0, c.R)(v), h || null == x || o.A.hasCatalogFor(x) || (0, c.R)(x);
    }, [v, h, x]);
    let N = i.useCallback(() => {
            null != x && null != m && j((e) => !e);
        }, [x, m]),
        w = i.useCallback(() => {
            null != x && null != m && (j(!1), p(null));
        }, [x, m]),
        y = i.useMemo(() => {
            let { earnable: e, owned: t } = R(f);
            return b ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [f, b]),
        A = null != _ && null != v ? o.A.getBadgeById(_, v) : void 0,
        C = null != y && null != v ? o.A.getBadgeById(y, v) : void 0,
        B = A ?? C,
        E = 0 === f.length,
        S = (0, a.bG)([o.A], () => null != m && null != B && (o.A.getBadgeById(B.badge_id, m)?.owned ?? !1), [B, m]),
        T = (0, a.bG)([o.A], () => (null != x && null != B ? o.A.getBadgeById(B.badge_id, x) : void 0), [B, x]),
        I = T?.owned ?? !1,
        O = i.useCallback(() => {
            n();
        }, [n]);
    return (0, l.jsx)(s.EO, {
        "data-migration-pending": !0,
        parentComponent: "BadgeDirectoryModal",
        "aria-label": P.intl.string(P.t.PEjP4L),
        transitionState: t,
        size: s.rI.DYNAMIC,
        hideShadow: !0,
        className: V.CR,
        children: (0, l.jsx)(s.$m, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: V.jE,
            children: E
                ? (0, l.jsx)("div", { className: V.Lq, children: (0, l.jsx)(r.y, {}) })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(L, {
                              selectedBadgeId: B?.badge_id ?? null,
                              onSelectBadge: p,
                              displayedUserId: v,
                              isViewingOtherUser: b,
                              targetUsername: g,
                              onViewOwnCatalog: w,
                          }),
                          null != B &&
                              (0, l.jsx)(J, {
                                  badge: B,
                                  viewerBadge: T,
                                  onClose: O,
                                  isOwnProfile: h,
                                  isViewingOtherUser: b,
                                  targetUsername: g,
                                  displayedUserId: v,
                                  targetOwnsBadge: S,
                                  viewerOwnsBadge: I,
                                  onToggleViewedUser: N,
                                  onViewOwnCatalog: w,
                              }),
                      ],
                  }),
        }),
    });
}
