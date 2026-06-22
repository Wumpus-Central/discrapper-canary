i.d(t, { default: () => eo });
var l = i(627968),
    n = i(64700),
    a = i(731738),
    s = i(17928),
    r = i(935462),
    d = i(815021),
    c = i(289873),
    o = i(534514),
    u = i(834730),
    g = i(821609),
    m = i(807393),
    x = i(287809),
    _ = i(682618),
    h = i(982240),
    b = i(503698),
    v = i.n(b),
    y = i(70283),
    j = i(97808),
    p = i(123292),
    N = i(364522),
    f = i(508770),
    w = i(404778),
    E = i(683071),
    A = i(982168),
    C = i(775602),
    T = i(240248);
i(321073);
var I = i(837381),
    B = i(887129),
    R = i(741918),
    U = i(939249),
    k = i(707554),
    O = i(486020);
function S(e, t, i) {
    let l = (0, s.bG)([x.default], () => (null != e ? x.default.getUser(e) : void 0), [e]);
    if (null != l && t) return (0, O.ku)({ id: l.id, avatar: l.avatar, discriminator: l.discriminator }, !1, i);
}
var D = i(975858),
    F = i(778712),
    P = i(375708),
    G = i(490308);
function $(e) {
    return `badge-tab-${e}`;
}
function z(e) {
    let t = Array.from(e);
    return t.length > 19 ? `${t.slice(0, 19).join("")}...` : e;
}
function M(e) {
    let { badge: t, isSelected: i, onSelect: a, itemId: s } = e,
        r = (0, I.rm)(s),
        d = t.owned ? t.current_tier : t.next_tier,
        c =
            null != d
                ? t.tiers.find((e) => {
                      let { key: t } = e;
                      return t === d;
                  })
                : void 0,
        o = t.badge_id === y.$.PREMIUM_TENURE ? (c?.name ?? c?.key) : c?.name,
        u = null != o ? `${t.name}, ${o}` : t.name,
        g = n.useRef(null);
    return (0, l.jsx)(U.D, {
        ...r,
        innerRef: g,
        role: "tab",
        id: $(t.badge_id),
        "aria-label": u,
        "aria-selected": i,
        "aria-controls": i ? D.hJ : void 0,
        className: v()(G.oL, i && G.xO),
        onFocus: r.onFocus,
        onClick: () => {
            g.current?.focus(), a();
        },
        children:
            null != t.simple_icon_url &&
            (0, l.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: G.pW }),
    });
}
function V(e) {
    let { label: t, navId: i, badges: n, selectedBadgeId: a, onSelectBadge: s } = e,
        r = (0, B.Ay)({
            id: i,
            isEnabled: !0,
            orientation: R.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, l.jsxs)("div", {
        className: G.zE,
        children: [
            "heading" === t.type &&
                (0, l.jsx)(o.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, l.jsx)(I.hD, {
                navigator: r,
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
                                    M,
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
            isViewingOtherUser: r,
            targetUsername: d,
            onViewOwnCatalog: c,
        } = e,
        m = (0, s.bG)([h.Ay], () => (null != a ? h.Ay.getBadges(a) : []), [a]),
        { earnable: x, owned: _ } = n.useMemo(() => L(m), [m]),
        b = S(a, r, 48),
        v = null != d ? z(d) : null,
        y = null != d && v !== d,
        p =
            null != v && y && null != b
                ? (0, l.jsxs)("span", {
                      className: G._p,
                      children: [(0, l.jsx)(j.eu, { src: b, size: F._3.SIZE_24, "aria-hidden": !0 }), v],
                  })
                : v,
        N = r && null != p ? P.intl.format(P.t.EIcwoe, { username: p }) : P.intl.string(P.t.UqnlQF),
        f = r && null != d ? P.intl.string(P.t["75s2Rq"]) : P.intl.string(P.t["62xU4E"]),
        w = r && null != d ? P.intl.formatToPlainString(P.t.BCjSZy, { username: d }) : P.intl.string(P.t.UqnlQF);
    return (0, l.jsx)("div", {
        className: G.ws,
        children: (0, l.jsxs)(k.F, {
            component: (0, l.jsxs)("div", {
                className: G.NG,
                children: [
                    (0, l.jsxs)("div", {
                        className: G.kc,
                        children: [
                            !y && null != b && (0, l.jsx)(j.eu, { src: b, size: F._3.SIZE_24, "aria-hidden": !0 }),
                            (0, l.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: N }),
                        ],
                    }),
                    (0, l.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", children: f }),
                ],
            }),
            children: [
                (0, l.jsxs)("div", {
                    className: G.hG,
                    children: [
                        _.length > 0 &&
                            (0, l.jsx)(V, {
                                label: { type: "aria", text: w },
                                navId: "badge-directory-owned",
                                badges: _,
                                selectedBadgeId: t,
                                onSelectBadge: i,
                            }),
                        !r &&
                            x.length > 0 &&
                            (0, l.jsx)(V, {
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
                r &&
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
var Y = i(194261),
    q = i(140735),
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
    let { badge: t, isViewingOtherUser: i, targetUsername: a, isViewerOnUpgradeableNitro: s = !1 } = e,
        r = Q(J(t.obtained_at)) ?? P.intl.string(P.t.sTFApF),
        d = n.useId(),
        c = i && null != a,
        o = t.badge_id === y.$.PREMIUM_TENURE ? P.intl.string(s ? P.t["5WS9pL"] : P.t.crwYbF) : null,
        g = c ? P.intl.formatToPlainString(P.t.KyTwIh, { username: a }) : o,
        m = null != g && "" !== g;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            m &&
                (0, l.jsxs)("div", {
                    className: Z.u4,
                    children: [
                        s &&
                            !c &&
                            (0, l.jsx)(Y.X, { size: "xxs", color: "currentColor", className: Z.ZU, "aria-hidden": !0 }),
                        (0, l.jsx)(u.E, { id: d, variant: "text-xs/medium", color: "text-subtle", children: g }),
                    ],
                }),
            (0, l.jsx)("div", {
                className: Z.SV,
                role: "list",
                "aria-labelledby": m ? d : void 0,
                children: t.tiers.map((e) => {
                    let n = e.owned,
                        a = e.complex_icon_static_url ?? e.simple_icon_url,
                        d = e.name,
                        c = t.tier_obtained_at?.[e.key],
                        o = (function (e) {
                            let {
                                tier: t,
                                isUnlocked: i,
                                isViewingOtherUser: l,
                                isViewerOnUpgradeableNitro: n,
                                tierObtainedAt: a,
                                badgeObtainedAtText: s,
                            } = e;
                            return i
                                ? l
                                    ? P.intl.string(P.t.sTFApF)
                                    : (Q(J(a)) ?? s)
                                : n && !l
                                  ? P.intl.string(P.t.VPu695)
                                  : (t.milestone_text ?? "");
                        })({
                            tier: e,
                            isUnlocked: n,
                            isViewingOtherUser: i,
                            isViewerOnUpgradeableNitro: s,
                            tierObtainedAt: c,
                            badgeObtainedAtText: r,
                        });
                    return (0, l.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: v()(Z.zh, !n && Z.ZF),
                            children: [
                                null != a && (0, l.jsx)("img", { className: Z.Hw, src: a, alt: "", "aria-hidden": !0 }),
                                (0, l.jsxs)(u.E, {
                                    variant: "text-xxs/medium",
                                    color: n ? "text-default" : "text-muted",
                                    className: Z.hI,
                                    children: [
                                        null != d && (0, l.jsx)("span", { className: Z.nU, children: d }),
                                        (0, l.jsx)("span", { className: Z.nU, children: o }),
                                    ],
                                }),
                                (0, l.jsx)(q.A, { children: P.intl.string(n ? P.t.sTFApF : P.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var W = i(536001),
    X = i(260981),
    ee = i(540418),
    et = i(907085),
    ei = i(179820),
    el = i(174459),
    en = i(652215);
function ea(e) {
    let { actionName: t, badge: i, displayedUserId: l, isSociallyNavigated: n } = e,
        a = x.default.getCurrentUser()?.id,
        s = null != i && null != a ? h.Ay.getBadgeById(i.badge_id, a) : void 0,
        r = null != i && null != a ? h.Ay.getRemainingToNextTier(i.badge_id, a) : void 0,
        d = null != l ? h.Ay.getBadges(l).filter((e) => e.owned).length : void 0;
    el.default.track(en.HAw.BADGE_DIRECTORY_ACTION, {
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
var es = i(788868);
function er(e) {
    let t,
        {
            badge: i,
            isOwnProfile: n,
            isViewingOtherUser: a,
            targetUsername: s,
            viewedAvatarSrc: r,
            targetOwnsBadge: d,
            viewerOwnsBadge: c,
            onToggleViewedUser: o,
        } = e,
        g = (0, h.H5)(i),
        m = null != g ? P.intl.formatToPlainString(P.t["0aEh2a"], { date: new Date(g) }) : P.intl.string(P.t.sTFApF);
    if (
        ((t = n
            ? i.owned
                ? m
                : P.intl.string(P.t.uHtDcT)
            : a && null != s
              ? P.intl.formatToPlainString(P.t.Eo5Cnp, { username: z(s) })
              : i.owned
                ? m
                : P.intl.string(P.t.uHtDcT)),
        n)
    )
        return (0, l.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: t });
    let x = a && c,
        _ = !a && d && null != s;
    return (0, l.jsxs)("div", {
        className: G.bn,
        children: [
            null != r && (0, l.jsx)(j.eu, { src: r, size: F._3.SIZE_16, "aria-hidden": !0 }),
            (0, l.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", className: G.CT, children: t }),
            (x || _) &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(u.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: G.CT,
                            "aria-hidden": !0,
                            children: "\xb7",
                        }),
                        (0, l.jsx)(p.Q, {
                            variant: "primary",
                            size: "sm",
                            textVariant: "text-xs/medium",
                            onClick: o,
                            text: x
                                ? P.intl.string(P.t.yxEAGH)
                                : P.intl.formatToPlainString(P.t["9GNsge"], { username: z(s) }),
                        }),
                    ],
                }),
        ],
    });
}
function ed(e) {
    let t,
        i,
        a,
        {
            badge: r,
            viewerBadge: d,
            onClose: c,
            isOwnProfile: m,
            isViewingOtherUser: _,
            targetUsername: h,
            displayedUserId: b,
            targetOwnsBadge: j,
            viewerOwnsBadge: p,
            onToggleViewedUser: I,
            onViewOwnCatalog: B,
        } = e,
        R = S(b, _, 32),
        U = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let i = e.owned ? e.current_tier : e.next_tier;
            return (null != i ? t.find((e) => e.key === i) : void 0) ?? t[0];
        })(r),
        k = (0, s.bG)([C.Ay], () => C.Ay.useReducedMotion)
            ? void 0
            : (U?.complex_icon_animated_url ?? r.complex_icon_animated_url),
        O = U?.complex_icon_static_url ?? r.complex_icon_static_url,
        F = U?.simple_icon_url ?? r.simple_icon_url,
        z = k ?? O ?? F,
        M = (function (e) {
            if (null == e) return null;
            switch (e) {
                case W.x.COMMON:
                    return { type: { text: P.intl.string(P.t.L0K5ci) }, variant: "rarity-common", icon: X.p };
                case W.x.RARE:
                    return { type: { text: P.intl.string(P.t["sTx/5z"]) }, variant: "rarity-rare", icon: ee.A };
                case W.x.EPIC:
                    return { type: { text: P.intl.string(P.t.RD8RiN) }, variant: "rarity-epic", icon: et.b };
                case W.x.MYTHIC:
                    return { type: { text: P.intl.string(P.t.vqc1ol) }, variant: "rarity-mythic", icon: ei.O };
                case W.x.LEGENDARY:
                default:
                    return null;
            }
        })(U?.rarity ?? r.rarity),
        V = (0, D.Om)(r.badge_id),
        L = r.badge_id === y.$.PREMIUM_TENURE,
        H = L ? (U?.name ?? U?.key) : U?.name,
        Y = L ? P.intl.string(P.t.Ipxkog) : r.name;
    L ? (i = null != H ? `${Y} ${H}` : Y) : null != H ? ((t = Y), (i = H)) : (i = Y);
    let q = d?.owned === !0 && (d.tiers?.length ?? 0) > 0 && null == d.next_tier,
        Z = x.default.getCurrentUser()?.premiumType,
        J = L && (Z === es.PremiumTypes.TIER_0 || Z === es.PremiumTypes.TIER_1);
    a = q ? P.intl.string(P.t.jY5xAL) : J ? P.intl.string(P.t.qkwSSp) : (d?.description ?? r.description);
    let Q = n.useCallback(() => {
            null != V &&
                (ea({
                    actionName: "primary_badge_action_clicked",
                    badge: r,
                    displayedUserId: b,
                    isSociallyNavigated: _,
                }),
                c(),
                A.A.popAll(),
                V.ctaAction());
        }, [r, b, _, V, c]),
        el = (0, D.ie)(r.badge_id) && !r.is_earnable,
        en = _ && !r.is_earnable && !p;
    return (0, l.jsx)("div", {
        id: D.hJ,
        role: "tabpanel",
        "aria-labelledby": $(r.badge_id),
        className: G.SV,
        children: (0, l.jsxs)(N.d_, {
            className: G.C9,
            children: [
                null != z &&
                    (0, l.jsx)("img", {
                        className: v()(G.y2, null != k && z === k && G.hu),
                        src: z,
                        alt: "",
                        "aria-hidden": !0,
                    }),
                (0, l.jsxs)("div", {
                    className: G.OU,
                    children: [
                        (0, l.jsxs)("div", {
                            className: G.cQ,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: G.nj,
                                    children: [
                                        null != t &&
                                            (0, l.jsx)(u.E, {
                                                variant: "text-sm/medium",
                                                color: "text-subtle",
                                                className: G.$g,
                                                children: t,
                                            }),
                                        (0, l.jsx)(o.D, {
                                            variant: "display-sm",
                                            color: "text-strong",
                                            className: v()(G._r, L && G.tN),
                                            children: i,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(er, {
                                    badge: r,
                                    isOwnProfile: m,
                                    isViewingOtherUser: _,
                                    targetUsername: h,
                                    viewedAvatarSrc: R,
                                    targetOwnsBadge: j,
                                    viewerOwnsBadge: p,
                                    onToggleViewedUser: I,
                                }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: G.oA,
                            children: [
                                null != M &&
                                    (0, l.jsxs)("div", {
                                        className: G.sn,
                                        children: [
                                            (0, l.jsx)(f.E, { ...M }),
                                            (0, l.jsx)(u.E, {
                                                variant: "text-xs/medium",
                                                color: "text-subtle",
                                                children: P.intl.string(P.t["phYZe+"]),
                                            }),
                                        ],
                                    }),
                                !(0, T.uJ)(a) &&
                                    (0, l.jsxs)("div", {
                                        className: G.d9,
                                        children: [
                                            (0, l.jsxs)("div", {
                                                className: G.E4,
                                                children: [
                                                    (0, l.jsxs)("div", {
                                                        className: G.jv,
                                                        children: [
                                                            el &&
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
                                                                children: a,
                                                            }),
                                                        ],
                                                    }),
                                                    null != V &&
                                                        (0, l.jsx)(g.$, {
                                                            variant: J
                                                                ? "expressive"
                                                                : p
                                                                  ? "secondary"
                                                                  : L
                                                                    ? "expressive"
                                                                    : "primary",
                                                            size: "sm",
                                                            onClick: Q,
                                                            text: V.ctaLabel({
                                                                owned: p,
                                                                isViewerOnUpgradeableNitro: J,
                                                            }),
                                                        }),
                                                ],
                                            }),
                                            (r.tiers?.length ?? 0) > 0 &&
                                                (0, l.jsxs)("div", {
                                                    className: G.cJ,
                                                    children: [
                                                        (0, l.jsx)(w.c, {}),
                                                        (0, l.jsx)(K, {
                                                            badge: r,
                                                            isViewingOtherUser: _,
                                                            targetUsername: h,
                                                            isViewerOnUpgradeableNitro: J,
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                en &&
                                    (0, l.jsx)(E.w, {
                                        type: "info",
                                        children: P.intl.format(P.t.vFekBs, { onViewBadges: B }),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
var ec = i(470739);
function eo(e) {
    let {
            transitionState: t,
            onClose: i,
            initialBadgeId: b,
            targetUserId: v,
            targetUsername: y,
            viewingCurrentUserBadges: j,
        } = e,
        p = (0, s.bG)([x.default], () => x.default.getCurrentUser()?.id),
        N = null == v || v === p,
        f = !N && null != v && !0 !== j,
        w = f ? v : p,
        E = null != w ? `viewed_user:${f ? "other" : "self"}` : void 0,
        [A, C] = n.useState(b ?? null),
        T = (0, s.bG)([h.Ay], () => (null != w ? h.Ay.getBadges(w) : []), [w]),
        I = (0, s.bG)([h.Ay], () => null != w && h.Ay.hasCatalogFor(w), [w]),
        B = (0, s.bG)([h.Ay], () => h.Ay.hasCatalogFetchErrorFor(w), [w]);
    n.useEffect(() => {
        null == w || h.Ay.hasCatalogFor(w) || (0, _.R)(w);
        let e = f ? p : v;
        N || null == e || h.Ay.hasCatalogFor(e) || (0, _.R)(e);
    }, [w, N, f, p, v]),
        n.useEffect(() => {
            null != E && m.A.increment({ name: a.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [E] });
        }, [E]);
    let R = n.useMemo(() => {
            let { earnable: e, owned: t } = L(T);
            return f ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [T, f]),
        U = null != A && null != w ? h.Ay.getBadgeById(A, w) : void 0,
        k = null != R && null != w ? h.Ay.getBadgeById(R, w) : void 0,
        O = U ?? k,
        S = !I && !B,
        D = !I && B;
    n.useEffect(() => {
        D && null != E && m.A.increment({ name: a.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [E] });
    }, [D, E]);
    let F = (0, s.bG)([h.Ay], () => null != v && null != O && (h.Ay.getBadgeById(O.badge_id, v)?.owned ?? !1), [O, v]),
        $ = (0, s.bG)([h.Ay], () => (null != p && null != O ? h.Ay.getBadgeById(O.badge_id, p) : void 0), [O, p]),
        z = $?.owned ?? !1,
        M = n.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, ec._)({ ...e, stackingBehavior: "replace" }).then(() => {
                    i();
                });
            },
            [i],
        ),
        V = n.useCallback(() => {
            null != v &&
                null != O &&
                (f
                    ? M({
                          initialBadgeId: O.badge_id,
                          targetUserId: v,
                          targetUsername: y,
                          viewingCurrentUserBadges: !0,
                      })
                    : M({ initialBadgeId: O.badge_id, targetUserId: v, targetUsername: y }));
        }, [f, O, M, v, y]),
        Y = n.useCallback(() => {
            null != p &&
                null != v &&
                (ea({ actionName: "view_your_badges_pressed", badge: O, displayedUserId: w, isSociallyNavigated: f }),
                M({ targetUserId: v, targetUsername: y, viewingCurrentUserBadges: !0 }));
        }, [p, w, f, O, M, v, y]),
        q = n.useCallback(() => {
            null != w && (0, _.R)(w, { isRetry: !0 });
        }, [w]),
        Z = n.useCallback(() => {
            ea({ actionName: "badge_directory_closed", badge: O, displayedUserId: w, isSociallyNavigated: f }), i();
        }, [w, f, i, O]),
        J = O?.badge_id;
    return (
        n.useEffect(() => {
            null != O &&
                ea({ actionName: "badge_detail_viewed", badge: O, displayedUserId: w, isSociallyNavigated: f });
        }, [J, w, f]),
        (0, l.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": P.intl.string(P.t.PEjP4L),
            transitionState: t,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: G.CR,
            children: (0, l.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: G.jE,
                children: [
                    (0, l.jsx)("div", { className: G.b, children: (0, l.jsx)(d.J, { onClick: Z, size: "sm" }) }),
                    S
                        ? (0, l.jsx)("div", { className: G.Lq, children: (0, l.jsx)(c.y, {}) })
                        : D
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
                                        onClick: q,
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
                                        isViewingOtherUser: f,
                                        targetUsername: y,
                                        onViewOwnCatalog: Y,
                                    }),
                                    null != O &&
                                        (0, l.jsx)(ed, {
                                            badge: O,
                                            viewerBadge: $,
                                            onClose: Z,
                                            isOwnProfile: N,
                                            isViewingOtherUser: f,
                                            targetUsername: y,
                                            displayedUserId: w,
                                            targetOwnsBadge: F,
                                            viewerOwnsBadge: z,
                                            onToggleViewedUser: V,
                                            onViewOwnCatalog: Y,
                                        }),
                                ],
                            }),
                ],
            }),
        })
    );
}
