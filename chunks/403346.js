i.d(t, { default: () => er });
var l = i(627968),
    n = i(64700),
    a = i(731738),
    r = i(17928),
    s = i(935462),
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
    f = i(123292),
    p = i(364522),
    N = i(508770),
    w = i(404778),
    E = i(683071),
    A = i(982168),
    C = i(775602),
    T = i(240248);
i(321073);
var I = i(837381),
    B = i(741918),
    k = i(939249),
    S = i(707554),
    U = i(260762),
    O = i(486020);
function R(e, t, i) {
    let l = (0, r.bG)([x.default], () => (null != e ? x.default.getUser(e) : void 0), [e]);
    if (null != l && t) return (0, O.ku)({ id: l.id, avatar: l.avatar, discriminator: l.discriminator }, !1, i);
}
var F = i(975858),
    D = i(778712),
    P = i(375708),
    G = i(490308);
function V(e) {
    return `badge-tab-${e}`;
}
function $(e) {
    let t = Array.from(e);
    return t.length > 19 ? `${t.slice(0, 19).join("")}...` : e;
}
function z(e) {
    let { badge: t, isSelected: i, onSelect: n, itemId: a } = e,
        r = (0, I.rm)(a),
        s = t.owned ? t.current_tier : t.next_tier,
        d =
            null != s
                ? t.tiers.find((e) => {
                      let { key: t } = e;
                      return t === s;
                  })
                : void 0,
        c = t.badge_id === j.$.PREMIUM_TENURE ? (d?.name ?? d?.key) : d?.name,
        o = null != c ? `${t.name}, ${c}` : t.name;
    return (0, l.jsx)(k.D, {
        ...r,
        role: "tab",
        id: V(t.badge_id),
        "aria-label": o,
        "aria-selected": i,
        "aria-controls": i ? F.hJ : void 0,
        className: v()(G.oL, i && G.xO),
        onFocus: r.onFocus,
        onClick: n,
        children:
            null != t.simple_icon_url &&
            (0, l.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: G.pW }),
    });
}
function M(e) {
    let { label: t, navId: i, badges: n, selectedBadgeId: a, onSelectBadge: r } = e,
        s = (0, U.A)(i, B.Gl.HORIZONTAL);
    return (0, l.jsxs)("div", {
        className: G.zE,
        children: [
            "heading" === t.type &&
                (0, l.jsx)(o.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, l.jsx)(I.hD, {
                navigator: s,
                children: (0, l.jsx)(I.PR, {
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
function L(e) {
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
            isViewingOtherUser: s,
            targetUsername: d,
            onViewOwnCatalog: c,
        } = e,
        m = (0, r.bG)([_.Ay], () => (null != a ? _.Ay.getBadges(a) : []), [a]),
        { earnable: x, owned: h } = n.useMemo(() => L(m), [m]),
        b = R(a, s, 48),
        v = null != d ? $(d) : null,
        j = null != d && v !== d,
        f =
            null != v && j && null != b
                ? (0, l.jsxs)("span", {
                      className: G._p,
                      children: [(0, l.jsx)(y.eu, { src: b, size: D._3.SIZE_24, "aria-hidden": !0 }), v],
                  })
                : v,
        p = s && null != f ? P.intl.format(P.t.EIcwoe, { username: f }) : P.intl.string(P.t.UqnlQF),
        N = s && null != d ? P.intl.string(P.t["75s2Rq"]) : P.intl.string(P.t["62xU4E"]),
        w = s && null != d ? P.intl.formatToPlainString(P.t.BCjSZy, { username: d }) : P.intl.string(P.t.UqnlQF);
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
                            (0, l.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: p }),
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
                            (0, l.jsx)(M, {
                                label: { type: "aria", text: w },
                                navId: "badge-directory-owned",
                                badges: h,
                                selectedBadgeId: t,
                                onSelectBadge: i,
                            }),
                        !s &&
                            x.length > 0 &&
                            (0, l.jsx)(M, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: P.intl.string(P.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: x,
                                selectedBadgeId: t,
                                onSelectBadge: i,
                            }),
                    ],
                }),
                s &&
                    (0, l.jsx)("div", {
                        className: G.HO,
                        children: (0, l.jsx)(g.$, {
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
var q = i(194261),
    Y = i(140735),
    Z = i(899696);
function J(e) {
    if (null == e || "" === e) return null;
    let t = new Date(e);
    return Number.isNaN(t.getTime()) ? null : t;
}
function Q(e) {
    return null == e ? null : e.toLocaleDateString(P.intl.currentLocale, { month: "short", year: "numeric" });
}
function K(e) {
    var t;
    let i,
        { badge: a, isViewingOtherUser: r, targetUsername: s, isViewerOnUpgradeableNitro: d = !1 } = e,
        c = Q(J(a.obtained_at)) ?? P.intl.string(P.t.sTFApF),
        o = n.useId(),
        g = r && null != s,
        m = a.badge_id === j.$.PREMIUM_TENURE ? P.intl.string(d ? P.t["5WS9pL"] : P.t.crwYbF) : null,
        x = g ? P.intl.formatToPlainString(P.t.KyTwIh, { username: s }) : m,
        h = null != x && "" !== x,
        _ =
            ((i = (t = a.tiers).length <= 4 ? t.length : Math.ceil(t.length / 2)),
            [t.slice(0, i), t.slice(i)].filter((e) => e.length > 0)),
        b = _[0]?.length ?? 0;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            h &&
                (0, l.jsxs)("div", {
                    className: Z.u4,
                    children: [
                        d &&
                            !g &&
                            (0, l.jsx)(q.X, { size: "xxs", color: "currentColor", className: Z.ZU, "aria-hidden": !0 }),
                        (0, l.jsx)(u.E, { id: o, variant: "text-xs/medium", color: "text-subtle", children: x }),
                    ],
                }),
            (0, l.jsx)("div", {
                className: v()(Z.SV, b > 4 && Z.Li),
                role: "list",
                "aria-labelledby": h ? o : void 0,
                children: _.map((e, t) =>
                    (0, l.jsx)(
                        "div",
                        {
                            className: Z._1,
                            role: "presentation",
                            children: e.map((e) => {
                                let t = e.owned,
                                    i = e.complex_icon_static_url ?? e.simple_icon_url,
                                    n = e.name ?? e.key,
                                    s = a.tier_obtained_at?.[e.key],
                                    o = (function (e) {
                                        let {
                                            tier: t,
                                            isUnlocked: i,
                                            isViewingOtherUser: l,
                                            isViewerOnUpgradeableNitro: n,
                                            tierObtainedAt: a,
                                            badgeObtainedAtText: r,
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
                                        return l ? P.intl.string(P.t.sTFApF) : (Q(J(a)) ?? r);
                                    })({
                                        tier: e,
                                        isUnlocked: t,
                                        isViewingOtherUser: r,
                                        isViewerOnUpgradeableNitro: d,
                                        tierObtainedAt: s,
                                        badgeObtainedAtText: c,
                                    });
                                return (0, l.jsxs)(
                                    "div",
                                    {
                                        role: "listitem",
                                        className: v()(Z.zh, !t && Z.ZF),
                                        children: [
                                            null != i &&
                                                (0, l.jsx)("img", {
                                                    className: Z.Hw,
                                                    src: i,
                                                    alt: "",
                                                    "aria-hidden": !0,
                                                }),
                                            (0, l.jsxs)(u.E, {
                                                variant: "text-xxs/medium",
                                                color: t ? "text-default" : "text-muted",
                                                className: Z.hI,
                                                children: [n, (0, l.jsx)("br", {}), o],
                                            }),
                                            (0, l.jsx)(Y.A, { children: P.intl.string(t ? P.t.sTFApF : P.t.uHtDcT) }),
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
        r = null != i && null != a ? _.Ay.getBadgeById(i.badge_id, a) : void 0,
        s = null != i && null != a ? _.Ay.getRemainingToNextTier(i.badge_id, a) : void 0,
        d = null != l ? _.Ay.getBadges(l).filter((e) => e.owned).length : void 0;
    X.default.track(ee.HAw.BADGE_DIRECTORY_ACTION, {
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
var ei = i(788868);
function el(e) {
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
        g = (0, _.H5)(i),
        m = null != g ? P.intl.formatToPlainString(P.t["0aEh2a"], { date: new Date(g) }) : P.intl.string(P.t.sTFApF);
    if (
        ((t = n
            ? i.owned
                ? m
                : P.intl.string(P.t.uHtDcT)
            : a && null != r
              ? P.intl.formatToPlainString(P.t.Eo5Cnp, { username: $(r) })
              : i.owned
                ? m
                : P.intl.string(P.t.uHtDcT)),
        n)
    )
        return (0, l.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: t });
    let x = a && c,
        h = !a && d && null != r;
    return (0, l.jsxs)("div", {
        className: G.bn,
        children: [
            null != s && (0, l.jsx)(y.eu, { src: s, size: D._3.SIZE_16, "aria-hidden": !0 }),
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
                        (0, l.jsx)(f.Q, {
                            variant: "primary",
                            size: "sm",
                            textVariant: "text-xs/medium",
                            onClick: o,
                            text: x
                                ? P.intl.string(P.t.yxEAGH)
                                : P.intl.formatToPlainString(P.t["9GNsge"], { username: $(r) }),
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
            onClose: s,
            isOwnProfile: d,
            isViewingOtherUser: c,
            targetUsername: m,
            displayedUserId: h,
            targetOwnsBadge: _,
            viewerOwnsBadge: b,
            onToggleViewedUser: y,
            onViewOwnCatalog: f,
        } = e,
        I = R(h, c, 32),
        B = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let i = e.owned ? e.current_tier : e.next_tier;
            return (null != i ? t.find((e) => e.key === i) : void 0) ?? t[0];
        })(i),
        k = (0, r.bG)([C.A], () => C.A.useReducedMotion)
            ? void 0
            : (B?.complex_icon_animated_url ?? i.complex_icon_animated_url),
        S = B?.complex_icon_static_url ?? i.complex_icon_static_url,
        U = B?.simple_icon_url ?? i.simple_icon_url,
        O = k ?? S ?? U,
        D = (0, W.V)(B?.rarity ?? i.rarity),
        $ = (0, F.Om)(i.badge_id),
        z = i.badge_id === j.$.PREMIUM_TENURE,
        M = z ? (B?.name ?? B?.key) : B?.name,
        L = z ? P.intl.string(P.t.Ipxkog) : i.name,
        H = null != M ? `${L} ${M}` : L,
        q = a?.owned === !0 && (a.tiers?.length ?? 0) > 0 && null == a.next_tier,
        Y = x.default.getCurrentUser()?.premiumType,
        Z = z && (Y === ei.PremiumTypes.TIER_0 || Y === ei.PremiumTypes.TIER_1);
    t = q ? P.intl.string(P.t.jY5xAL) : Z ? P.intl.string(P.t.qkwSSp) : (a?.description ?? i.description);
    let J = n.useCallback(() => {
            null != $ &&
                (et({
                    actionName: "primary_badge_action_clicked",
                    badge: i,
                    displayedUserId: h,
                    isSociallyNavigated: c,
                }),
                s(),
                A.A.popAll(),
                $.ctaAction());
        }, [i, h, c, $, s]),
        Q = (0, F.ie)(i.badge_id) && !i.is_earnable,
        X = c && !i.is_earnable && !b;
    return (0, l.jsx)("div", {
        id: F.hJ,
        role: "tabpanel",
        "aria-labelledby": V(i.badge_id),
        className: G.SV,
        children: (0, l.jsxs)(p.d_, {
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
                                    className: v()(G._r, z && G.tN),
                                    children: H,
                                }),
                                (0, l.jsx)(el, {
                                    badge: i,
                                    isOwnProfile: d,
                                    isViewingOtherUser: c,
                                    targetUsername: m,
                                    viewedAvatarSrc: I,
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
                                                children: P.intl.string(P.t["phYZe+"]),
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
                                                                    children: P.intl.string(P.t["/Gmn3f"]),
                                                                }),
                                                            (0, l.jsx)(u.E, {
                                                                variant: "text-sm/medium",
                                                                color: "text-default",
                                                                className: G.ij,
                                                                children: t,
                                                            }),
                                                        ],
                                                    }),
                                                    null != $ &&
                                                        (0, l.jsx)(g.$, {
                                                            variant: Z
                                                                ? "expressive"
                                                                : b
                                                                  ? "secondary"
                                                                  : z
                                                                    ? "expressive"
                                                                    : "primary",
                                                            size: "sm",
                                                            onClick: J,
                                                            text: $.ctaLabel({
                                                                owned: b,
                                                                isViewerOnUpgradeableNitro: Z,
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
                                                            isViewerOnUpgradeableNitro: Z,
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                X &&
                                    (0, l.jsx)(E.w, {
                                        type: "info",
                                        children: P.intl.format(P.t.vFekBs, { onViewBadges: f }),
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
function er(e) {
    let {
            transitionState: t,
            onClose: i,
            initialBadgeId: b,
            targetUserId: v,
            targetUsername: j,
            viewingCurrentUserBadges: y,
        } = e,
        f = (0, r.bG)([x.default], () => x.default.getCurrentUser()?.id),
        p = null == v || v === f,
        N = !p && null != v && !0 !== y,
        w = N ? v : f,
        E = null != w ? `viewed_user:${N ? "other" : "self"}` : void 0,
        [A, C] = n.useState(b ?? null),
        T = (0, r.bG)([_.Ay], () => (null != w ? _.Ay.getBadges(w) : []), [w]),
        I = (0, r.bG)([_.Ay], () => null != w && _.Ay.hasCatalogFor(w), [w]),
        B = (0, r.bG)([_.Ay], () => _.Ay.hasCatalogFetchErrorFor(w), [w]);
    n.useEffect(() => {
        null == w || _.Ay.hasCatalogFor(w) || (0, h.R)(w);
        let e = N ? f : v;
        p || null == e || _.Ay.hasCatalogFor(e) || (0, h.R)(e);
    }, [w, p, N, f, v]),
        n.useEffect(() => {
            null != E && m.A.increment({ name: a.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [E] });
        }, [E]);
    let k = n.useMemo(() => {
            let { earnable: e, owned: t } = L(T);
            return N ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [T, N]),
        S = null != A && null != w ? _.Ay.getBadgeById(A, w) : void 0,
        U = null != k && null != w ? _.Ay.getBadgeById(k, w) : void 0,
        O = S ?? U,
        R = !I && !B,
        F = !I && B;
    n.useEffect(() => {
        F && null != E && m.A.increment({ name: a.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [E] });
    }, [F, E]);
    let D = (0, r.bG)([_.Ay], () => null != v && null != O && (_.Ay.getBadgeById(O.badge_id, v)?.owned ?? !1), [O, v]),
        V = (0, r.bG)([_.Ay], () => (null != f && null != O ? _.Ay.getBadgeById(O.badge_id, f) : void 0), [O, f]),
        $ = V?.owned ?? !1,
        z = n.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, ea._)({ ...e, stackingBehavior: "replace" }).then(() => {
                    i();
                });
            },
            [i],
        ),
        M = n.useCallback(() => {
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
        q = n.useCallback(() => {
            null != f &&
                null != v &&
                (et({ actionName: "view_your_badges_pressed", badge: O, displayedUserId: w, isSociallyNavigated: N }),
                z({ targetUserId: v, targetUsername: j, viewingCurrentUserBadges: !0 }));
        }, [f, w, N, O, z, v, j]),
        Y = n.useCallback(() => {
            null != w && (0, h.R)(w, { isRetry: !0 });
        }, [w]),
        Z = n.useCallback(() => {
            et({ actionName: "badge_directory_closed", badge: O, displayedUserId: w, isSociallyNavigated: N }), i();
        }, [w, N, i, O]),
        J = O?.badge_id;
    return (
        n.useEffect(() => {
            null != O &&
                et({ actionName: "badge_detail_viewed", badge: O, displayedUserId: w, isSociallyNavigated: N });
        }, [J, w, N]),
        (0, l.jsx)(s.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": P.intl.string(P.t.PEjP4L),
            transitionState: t,
            size: s.rI.DYNAMIC,
            hideShadow: !0,
            className: G.CR,
            children: (0, l.jsxs)(s.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: G.jE,
                children: [
                    (0, l.jsx)("div", { className: G.b, children: (0, l.jsx)(d.J, { onClick: Z, size: "sm" }) }),
                    R
                        ? (0, l.jsx)("div", { className: G.Lq, children: (0, l.jsx)(c.y, {}) })
                        : F
                          ? (0, l.jsxs)("div", {
                                className: G.IU,
                                children: [
                                    (0, l.jsx)(o.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: P.intl.string(P.t.iufib1),
                                    }),
                                    (0, l.jsx)(u.E, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        className: G.TQ,
                                        children: P.intl.string(P.t.eAn6z2),
                                    }),
                                    (0, l.jsx)(g.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: Y,
                                        text: P.intl.string(P.t["7NqTJn"]),
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
                                        onViewOwnCatalog: q,
                                    }),
                                    null != O &&
                                        (0, l.jsx)(en, {
                                            badge: O,
                                            viewerBadge: V,
                                            onClose: Z,
                                            isOwnProfile: p,
                                            isViewingOtherUser: N,
                                            targetUsername: j,
                                            displayedUserId: w,
                                            targetOwnsBadge: D,
                                            viewerOwnsBadge: $,
                                            onToggleViewedUser: M,
                                            onViewOwnCatalog: q,
                                        }),
                                ],
                            }),
                ],
            }),
        })
    );
}
