l.d(t, { default: () => em });
var i = l(627968),
    n = l(64700),
    a = l(731738),
    r = l(17928),
    s = l(935462),
    d = l(815021),
    c = l(289873),
    o = l(534514),
    u = l(834730),
    g = l(821609),
    m = l(807393),
    x = l(287809),
    h = l(682618),
    _ = l(992526),
    b = l(982240),
    v = l(503698),
    y = l.n(v),
    j = l(70283),
    p = l(508770),
    N = l(97808),
    f = l(123292),
    w = l(364522),
    E = l(404778),
    A = l(683071),
    T = l(982168),
    C = l(775602),
    I = l(240248);
l(321073);
var B = l(837381),
    R = l(887129),
    S = l(741918),
    U = l(939249),
    k = l(707554),
    D = l(486020);
function O(e, t, l) {
    let i = (0, r.bG)([x.default], () => (null != e ? x.default.getUser(e) : void 0), [e]);
    if (null != i && t) return (0, D.ku)({ id: i.id, avatar: i.avatar, discriminator: i.discriminator }, !1, l);
}
var F = l(975858),
    P = l(778712),
    G = l(375708),
    M = l(259588);
function $(e) {
    return `badge-tab-${e}`;
}
function z(e) {
    let t = Array.from(e);
    return t.length > 19 ? `${t.slice(0, 19).join("")}...` : e;
}
function V(e) {
    let { badge: t, isSelected: l, onSelect: a, itemId: r } = e,
        s = (0, B.rm)(r),
        d = t.owned ? t.current_tier : t.next_tier,
        c =
            null != d
                ? t.tiers.find((e) => {
                      let { key: t } = e;
                      return t === d;
                  })
                : void 0,
        o = t.badge_id === j.$.PREMIUM_TENURE ? (c?.name ?? c?.key) : c?.name,
        u = null != o ? `${t.name}, ${o}` : t.name,
        g = n.useRef(null);
    return (0, i.jsx)(U.D, {
        ...s,
        innerRef: g,
        role: "tab",
        id: $(t.badge_id),
        "aria-label": u,
        "aria-selected": l,
        "aria-controls": l ? F.hJ : void 0,
        className: y()(M.oL, l && M.xO),
        onFocus: s.onFocus,
        onClick: () => {
            g.current?.focus(), a();
        },
        children:
            null != t.simple_icon_url &&
            (0, i.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: M.pW }),
    });
}
function L(e) {
    let { label: t, navId: l, badges: n, selectedBadgeId: a, onSelectBadge: r } = e,
        s = (0, R.Ay)({
            id: l,
            isEnabled: !0,
            orientation: S.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, i.jsxs)("div", {
        className: M.zE,
        children: [
            "heading" === t.type &&
                (0, i.jsx)(o.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, i.jsx)(B.hD, {
                navigator: s,
                children: (0, i.jsx)(B.PR, {
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: M.yq,
                            children: n.map((e, t) =>
                                (0, i.jsx)(
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
function Y(e) {
    let t = [],
        l = [];
    for (let i of e) i.owned ? l.push(i) : i.is_earnable && t.push(i);
    return { earnable: t, owned: l };
}
function H(e) {
    let {
            selectedBadgeId: t,
            onSelectBadge: l,
            displayedUserId: a,
            isViewingOtherUser: s,
            targetUsername: d,
            onViewOwnCatalog: c,
        } = e,
        m = (0, r.bG)([b.Ay], () => (null != a ? b.Ay.getBadges(a) : []), [a]),
        { earnable: x, owned: h } = n.useMemo(() => Y(m), [m]),
        _ = O(a, s, 48),
        v = null != d ? z(d) : null,
        y = null != d && v !== d,
        j =
            null != v && y && null != _
                ? (0, i.jsxs)("span", {
                      className: M._p,
                      children: [(0, i.jsx)(N.eu, { src: _, size: P._3.SIZE_24, "aria-hidden": !0 }), v],
                  })
                : v,
        p = s && null != j ? G.intl.format(G.t.EIcwoe, { username: j }) : G.intl.string(G.t.UqnlQF),
        f = s && null != d ? G.intl.string(G.t["75s2Rq"]) : G.intl.string(G.t["62xU4E"]),
        w = s && null != d ? G.intl.formatToPlainString(G.t.BCjSZy, { username: d }) : G.intl.string(G.t.UqnlQF);
    return (0, i.jsx)("div", {
        className: M.ws,
        children: (0, i.jsxs)(k.F, {
            component: (0, i.jsxs)("div", {
                className: M.NG,
                children: [
                    (0, i.jsxs)("div", {
                        className: M.kc,
                        children: [
                            !y && null != _ && (0, i.jsx)(N.eu, { src: _, size: P._3.SIZE_24, "aria-hidden": !0 }),
                            (0, i.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: p }),
                        ],
                    }),
                    (0, i.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", children: f }),
                ],
            }),
            children: [
                (0, i.jsxs)("div", {
                    className: M.hG,
                    children: [
                        h.length > 0 &&
                            (0, i.jsx)(L, {
                                label: { type: "aria", text: w },
                                navId: "badge-directory-owned",
                                badges: h,
                                selectedBadgeId: t,
                                onSelectBadge: l,
                            }),
                        !s &&
                            x.length > 0 &&
                            (0, i.jsx)(L, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: G.intl.string(G.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: x,
                                selectedBadgeId: t,
                                onSelectBadge: l,
                            }),
                    ],
                }),
                s &&
                    (0, i.jsx)("div", {
                        className: M.HO,
                        children: (0, i.jsx)(g.$, {
                            variant: "secondary",
                            size: "sm",
                            fullWidth: !0,
                            onClick: c,
                            text: G.intl.string(G.t.msyp90),
                        }),
                    }),
            ],
        }),
    });
}
var Z = l(194261),
    q = l(140735),
    J = l(152624);
function Q(e) {
    if (null == e || "" === e) return null;
    let t = new Date(e);
    return Number.isNaN(t.getTime()) ? null : t;
}
function W(e) {
    return null == e ? null : e.toLocaleDateString(G.intl.currentLocale, { month: "short", year: "numeric" });
}
function K(e) {
    let { badge: t, isViewingOtherUser: l, targetUsername: a, isViewerOnUpgradeableNitro: r = !1 } = e,
        s = W(Q(t.obtained_at)) ?? G.intl.string(G.t.sTFApF),
        d = n.useId(),
        c = l && null != a,
        o = t.badge_id === j.$.PREMIUM_TENURE ? G.intl.string(r ? G.t["5WS9pL"] : G.t.crwYbF) : null,
        g = c ? G.intl.formatToPlainString(G.t.KyTwIh, { username: a }) : o,
        m = null != g && "" !== g;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            m &&
                (0, i.jsxs)("div", {
                    className: J.u4,
                    children: [
                        r &&
                            !c &&
                            (0, i.jsx)(Z.X, { size: "xxs", color: "currentColor", className: J.ZU, "aria-hidden": !0 }),
                        (0, i.jsx)(u.E, { id: d, variant: "text-xs/medium", color: "text-subtle", children: g }),
                    ],
                }),
            (0, i.jsx)("div", {
                className: J.SV,
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
                                isUnlocked: l,
                                isViewingOtherUser: i,
                                isViewerOnUpgradeableNitro: n,
                                tierObtainedAt: a,
                                badgeObtainedAtText: r,
                            } = e;
                            return l
                                ? i
                                    ? G.intl.string(G.t.sTFApF)
                                    : (W(Q(a)) ?? r)
                                : n && !i
                                  ? G.intl.string(G.t.VPu695)
                                  : (t.milestone_text ?? "");
                        })({
                            tier: e,
                            isUnlocked: n,
                            isViewingOtherUser: l,
                            isViewerOnUpgradeableNitro: r,
                            tierObtainedAt: c,
                            badgeObtainedAtText: s,
                        });
                    return (0, i.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: y()(J.zh, !n && J.ZF),
                            children: [
                                null != a && (0, i.jsx)("img", { className: J.Hw, src: a, alt: "", "aria-hidden": !0 }),
                                (0, i.jsxs)(u.E, {
                                    variant: "text-xxs/medium",
                                    color: n ? "text-default" : "text-muted",
                                    className: J.hI,
                                    children: [
                                        null != d && (0, i.jsx)("span", { className: J.nU, children: d }),
                                        (0, i.jsx)("span", { className: J.nU, children: o }),
                                    ],
                                }),
                                (0, i.jsx)(q.A, { children: G.intl.string(n ? G.t.sTFApF : G.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var X = l(536001),
    ee = l(260981),
    et = l(540418),
    el = l(907085),
    ei = l(179820),
    en = l(174459),
    ea = l(652215);
function er(e) {
    let { actionName: t, badge: l, displayedUserId: i, isSociallyNavigated: n } = e,
        a = x.default.getCurrentUser()?.id,
        r = null != l && null != a ? b.Ay.getBadgeById(l.badge_id, a) : void 0,
        s = null != l && null != a ? b.Ay.getRemainingToNextTier(l.badge_id, a) : void 0,
        d = null != i ? b.Ay.getBadges(i).filter((e) => e.owned).length : void 0;
    en.default.track(ea.HAw.BADGE_DIRECTORY_ACTION, {
        badge_action: t,
        badge_id: l?.badge_id,
        badge_tier: null != l ? ((l.owned ? l.current_tier : l.next_tier) ?? l.tiers?.[0]?.key) : void 0,
        badge_owner_id: i,
        is_owned: r?.owned ?? !1,
        progress_to_next_tier: s,
        is_earnable: l?.is_earnable ?? !1,
        is_socially_navigated: n,
        total_badges_owned: d,
    });
}
var es = l(788868);
function ed(e) {
    let { earnedDateText: t, label: l } = e;
    return (0, i.jsxs)("div", {
        className: y()(M.AX, M.aS),
        children: [
            (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-default", className: M.NM, children: t }),
            (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", className: M.MZ, children: l }),
        ],
    });
}
function ec(e) {
    let { rarityBadgeProps: t } = e;
    return (0, i.jsxs)("div", {
        className: y()(M.AX, M.sn),
        children: [
            (0, i.jsx)(p.E, { ...t }),
            (0, i.jsx)(u.E, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: G.intl.string(G.t["phYZe+"]),
            }),
        ],
    });
}
function eo(e) {
    let t,
        l,
        {
            badge: n,
            isOwnProfile: a,
            isViewingOtherUser: r,
            targetUsername: s,
            viewedAvatarSrc: d,
            targetOwnsBadge: c,
            viewerOwnsBadge: o,
            unlockedStatusText: g,
            onToggleViewedUser: m,
        } = e,
        x =
            null !=
            (t = a
                ? n.owned
                    ? g
                    : G.intl.string(G.t.uHtDcT)
                : r && null != s
                  ? G.intl.formatToPlainString(G.t.Eo5Cnp, { username: z(s) })
                  : n.owned
                    ? g
                    : G.intl.string(G.t.uHtDcT));
    if (a) return x ? (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: t }) : null;
    let h = !r && c && null != s;
    return (r && o
        ? (l = G.intl.string(G.t.yxEAGH))
        : h && (l = G.intl.formatToPlainString(G.t["9GNsge"], { username: z(s) })),
    x || null != l)
        ? (0, i.jsxs)("div", {
              className: M.bn,
              children: [
                  x &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              null != d && (0, i.jsx)(N.eu, { src: d, size: P._3.SIZE_16, "aria-hidden": !0 }),
                              (0, i.jsx)(u.E, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: M.CT,
                                  children: t,
                              }),
                              null != l &&
                                  (0, i.jsx)(u.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      className: M.CT,
                                      "aria-hidden": !0,
                                      children: "\xb7",
                                  }),
                          ],
                      }),
                  null != l &&
                      (0, i.jsx)(f.Q, {
                          variant: "primary",
                          size: "sm",
                          textVariant: "text-xs/medium",
                          onClick: m,
                          text: l,
                      }),
              ],
          })
        : null;
}
function eu(e) {
    let t,
        l,
        a,
        s,
        d,
        c,
        {
            badge: m,
            viewerBadge: h,
            onClose: _,
            isOwnProfile: v,
            isViewingOtherUser: p,
            targetUsername: N,
            displayedUserId: f,
            targetOwnsBadge: B,
            viewerOwnsBadge: R,
            isMilestone2Enabled: S,
            onToggleViewedUser: U,
            onViewOwnCatalog: k,
        } = e,
        D = O(f, p, 32),
        P = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let l = e.owned ? e.current_tier : e.next_tier;
            return (null != l ? t.find((e) => e.key === l) : void 0) ?? t[0];
        })(m),
        z = (0, r.bG)([C.Ay], () => C.Ay.useReducedMotion)
            ? void 0
            : (P?.complex_icon_animated_url ?? m.complex_icon_animated_url),
        V = P?.complex_icon_static_url ?? m.complex_icon_static_url,
        L = P?.simple_icon_url ?? m.simple_icon_url,
        Y = z ?? V ?? L,
        H =
            (function (e) {
                if (null == e) return null;
                switch (e) {
                    case X.x.COMMON:
                        return { type: { text: G.intl.string(G.t.L0K5ci) }, variant: "rarity-common", icon: ee.p };
                    case X.x.RARE:
                        return { type: { text: G.intl.string(G.t["sTx/5z"]) }, variant: "rarity-rare", icon: et.A };
                    case X.x.EPIC:
                        return { type: { text: G.intl.string(G.t.RD8RiN) }, variant: "rarity-epic", icon: el.b };
                    case X.x.MYTHIC:
                        return { type: { text: G.intl.string(G.t.vqc1ol) }, variant: "rarity-mythic", icon: ei.O };
                    case X.x.LEGENDARY:
                    default:
                        return null;
                }
            })(P?.rarity ?? m.rarity) ?? void 0,
        Z = (0, F.Om)(m.badge_id),
        q = m.badge_id === j.$.PREMIUM_TENURE,
        J = q ? (P?.name ?? P?.key) : P?.name,
        Q = q ? G.intl.string(G.t.Ipxkog) : m.name;
    q ? (s = null != J ? `${Q} ${J}` : Q) : null != J ? ((a = Q), (s = J)) : (s = Q);
    let W = (0, b.H5)(m),
        en = m.owned
            ? (function (e) {
                  if (null == e) return;
                  let t = new Date(e);
                  if (!Number.isNaN(t.getTime()))
                      return t.toLocaleDateString(G.intl.currentLocale, {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                      });
              })(W)
            : void 0,
        ea = ((l = null == (t = m.tiers?.[0]?.key) || P?.key === t), G.intl.string(l ? G.t.WDhIz2 : G.t.wYaDmz)),
        eu = S && null != en,
        eg = null != H,
        em = null;
    S && (eu || eg)
        ? (em = (0, i.jsxs)("div", {
              className: y()(M.$S, (!eu || !eg) && M.jQ),
              children: [
                  eu && (0, i.jsx)(ed, { earnedDateText: en, label: ea }),
                  eg && (0, i.jsx)(ec, { rarityBadgeProps: H }),
              ],
          }))
        : eg && (em = (0, i.jsx)(ec, { rarityBadgeProps: H })),
        eu ||
            (d =
                S || null == W
                    ? G.intl.string(G.t.sTFApF)
                    : G.intl.formatToPlainString(G.t["0aEh2a"], { date: new Date(W) }));
    let ex = h?.owned === !0 && (h.tiers?.length ?? 0) > 0 && null == h.next_tier,
        eh = x.default.getCurrentUser()?.premiumType,
        e_ = q && (eh === es.PremiumTypes.TIER_0 || eh === es.PremiumTypes.TIER_1);
    c = ex ? G.intl.string(G.t.jY5xAL) : e_ ? G.intl.string(G.t.qkwSSp) : (h?.description ?? m.description);
    let eb = n.useCallback(() => {
            null != Z &&
                (er({
                    actionName: "primary_badge_action_clicked",
                    badge: m,
                    displayedUserId: f,
                    isSociallyNavigated: p,
                }),
                _(),
                T.A.popAll(),
                Z.ctaAction());
        }, [m, f, p, Z, _]),
        ev = (0, F.ie)(m.badge_id) && !m.is_earnable,
        ey = p && !m.is_earnable && !R;
    return (0, i.jsx)("div", {
        id: F.hJ,
        role: "tabpanel",
        "aria-labelledby": $(m.badge_id),
        className: M.SV,
        children: (0, i.jsxs)(w.d_, {
            className: M.C9,
            children: [
                null != Y &&
                    (0, i.jsx)("img", {
                        className: y()(M.y2, null != z && Y === z && M.hu),
                        src: Y,
                        alt: "",
                        "aria-hidden": !0,
                    }),
                (0, i.jsxs)("div", {
                    className: M.OU,
                    children: [
                        (0, i.jsxs)("div", {
                            className: M.cQ,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: M.nj,
                                    children: [
                                        null != a &&
                                            (0, i.jsx)(u.E, {
                                                variant: "text-sm/medium",
                                                color: "text-subtle",
                                                className: M.$g,
                                                children: a,
                                            }),
                                        (0, i.jsx)(o.D, {
                                            variant: "display-sm",
                                            color: "text-strong",
                                            className: y()(M._r, q && M.tN),
                                            children: s,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(eo, {
                                    badge: m,
                                    isOwnProfile: v,
                                    isViewingOtherUser: p,
                                    targetUsername: N,
                                    viewedAvatarSrc: D,
                                    targetOwnsBadge: B,
                                    viewerOwnsBadge: R,
                                    unlockedStatusText: d,
                                    onToggleViewedUser: U,
                                }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: M.oA,
                            children: [
                                em,
                                !(0, I.uJ)(c) &&
                                    (0, i.jsxs)("div", {
                                        className: M.d9,
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: M.E4,
                                                children: [
                                                    (0, i.jsxs)("div", {
                                                        className: M.jv,
                                                        children: [
                                                            ev &&
                                                                (0, i.jsx)(u.E, {
                                                                    variant: "text-xs/medium",
                                                                    color: "text-subtle",
                                                                    className: M.c$,
                                                                    children: G.intl.string(G.t["/Gmn3f"]),
                                                                }),
                                                            (0, i.jsx)(u.E, {
                                                                variant: "text-sm/medium",
                                                                color: "text-default",
                                                                className: M.ij,
                                                                children: c,
                                                            }),
                                                        ],
                                                    }),
                                                    null != Z &&
                                                        (0, i.jsx)(g.$, {
                                                            variant: e_
                                                                ? "expressive"
                                                                : R
                                                                  ? "secondary"
                                                                  : q
                                                                    ? "expressive"
                                                                    : "primary",
                                                            size: "sm",
                                                            onClick: eb,
                                                            text: Z.ctaLabel({
                                                                owned: R,
                                                                isViewerOnUpgradeableNitro: e_,
                                                            }),
                                                        }),
                                                ],
                                            }),
                                            (m.tiers?.length ?? 0) > 0 &&
                                                (0, i.jsxs)("div", {
                                                    className: M.cJ,
                                                    children: [
                                                        (0, i.jsx)(E.c, {}),
                                                        (0, i.jsx)(K, {
                                                            badge: m,
                                                            isViewingOtherUser: p,
                                                            targetUsername: N,
                                                            isViewerOnUpgradeableNitro: e_,
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                ey &&
                                    (0, i.jsx)(A.w, {
                                        type: "info",
                                        children: G.intl.format(G.t.vFekBs, { onViewBadges: k }),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
var eg = l(470739);
function em(e) {
    let {
            transitionState: t,
            onClose: l,
            initialBadgeId: v,
            targetUserId: y,
            targetUsername: j,
            viewingCurrentUserBadges: p,
        } = e,
        N = (0, r.bG)([x.default], () => x.default.getCurrentUser()?.id),
        f = (0, _.VV)({ location: "BadgeDirectoryModal" }),
        w = null == y || y === N,
        E = !w && null != y && !0 !== p,
        A = E ? y : N,
        T = null != A ? `viewed_user:${E ? "other" : "self"}` : void 0,
        [C, I] = n.useState(v ?? null),
        B = (0, r.bG)([b.Ay], () => (null != A ? b.Ay.getBadges(A) : []), [A]),
        R = (0, r.bG)([b.Ay], () => null != A && b.Ay.hasCatalogFor(A), [A]),
        S = (0, r.bG)([b.Ay], () => b.Ay.hasCatalogFetchErrorFor(A), [A]);
    n.useEffect(() => {
        null == A || b.Ay.hasCatalogFor(A) || (0, h.R)(A);
        let e = E ? N : y;
        w || null == e || b.Ay.hasCatalogFor(e) || (0, h.R)(e);
    }, [A, w, E, N, y]),
        n.useEffect(() => {
            null != T && m.A.increment({ name: a.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [T] });
        }, [T]);
    let U = n.useMemo(() => {
            let { earnable: e, owned: t } = Y(B);
            return E ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [B, E]),
        k = null != C && null != A ? b.Ay.getBadgeById(C, A) : void 0,
        D = null != U && null != A ? b.Ay.getBadgeById(U, A) : void 0,
        O = k ?? D,
        F = !R && !S,
        P = !R && S;
    n.useEffect(() => {
        P && null != T && m.A.increment({ name: a.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [T] });
    }, [P, T]);
    let $ = (0, r.bG)([b.Ay], () => null != y && null != O && (b.Ay.getBadgeById(O.badge_id, y)?.owned ?? !1), [O, y]),
        z = (0, r.bG)([b.Ay], () => (null != N && null != O ? b.Ay.getBadgeById(O.badge_id, N) : void 0), [O, N]),
        V = z?.owned ?? !1,
        L = n.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, eg._)({ ...e, stackingBehavior: "replace" }).then(() => {
                    l();
                });
            },
            [l],
        ),
        Z = n.useCallback(() => {
            null != y &&
                null != O &&
                (E
                    ? L({
                          initialBadgeId: O.badge_id,
                          targetUserId: y,
                          targetUsername: j,
                          viewingCurrentUserBadges: !0,
                      })
                    : L({ initialBadgeId: O.badge_id, targetUserId: y, targetUsername: j }));
        }, [E, O, L, y, j]),
        q = n.useCallback(() => {
            null != N &&
                null != y &&
                (er({ actionName: "view_your_badges_pressed", badge: O, displayedUserId: A, isSociallyNavigated: E }),
                L({ targetUserId: y, targetUsername: j, viewingCurrentUserBadges: !0 }));
        }, [N, A, E, O, L, y, j]),
        J = n.useCallback(() => {
            null != A && (0, h.R)(A, { isRetry: !0 });
        }, [A]),
        Q = n.useCallback(() => {
            er({ actionName: "badge_directory_closed", badge: O, displayedUserId: A, isSociallyNavigated: E }), l();
        }, [A, E, l, O]),
        W = O?.badge_id;
    return (
        n.useEffect(() => {
            null != O &&
                er({ actionName: "badge_detail_viewed", badge: O, displayedUserId: A, isSociallyNavigated: E });
        }, [W, A, E]),
        (0, i.jsx)(s.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": G.intl.string(G.t.PEjP4L),
            transitionState: t,
            size: s.rI.DYNAMIC,
            hideShadow: !0,
            className: M.CR,
            children: (0, i.jsxs)(s.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: M.jE,
                children: [
                    (0, i.jsx)("div", { className: M.b, children: (0, i.jsx)(d.J, { onClick: Q, size: "sm" }) }),
                    F
                        ? (0, i.jsx)("div", { className: M.Lq, children: (0, i.jsx)(c.y, {}) })
                        : P
                          ? (0, i.jsxs)("div", {
                                className: M.IU,
                                children: [
                                    (0, i.jsx)(o.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: G.intl.string(G.t.iufib1),
                                    }),
                                    (0, i.jsx)(u.E, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        className: M.TQ,
                                        children: G.intl.string(G.t.eAn6z2),
                                    }),
                                    (0, i.jsx)(g.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: J,
                                        text: G.intl.string(G.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(H, {
                                        selectedBadgeId: O?.badge_id ?? null,
                                        onSelectBadge: I,
                                        displayedUserId: A,
                                        isViewingOtherUser: E,
                                        targetUsername: j,
                                        onViewOwnCatalog: q,
                                    }),
                                    null != O &&
                                        (0, i.jsx)(eu, {
                                            badge: O,
                                            viewerBadge: z,
                                            onClose: Q,
                                            isOwnProfile: w,
                                            isViewingOtherUser: E,
                                            targetUsername: j,
                                            displayedUserId: A,
                                            targetOwnsBadge: $,
                                            viewerOwnsBadge: V,
                                            isMilestone2Enabled: f,
                                            onToggleViewedUser: Z,
                                            onViewOwnCatalog: q,
                                        }),
                                ],
                            }),
                ],
            }),
        })
    );
}
