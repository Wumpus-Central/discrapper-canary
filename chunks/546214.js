i.d(t, { default: () => eb });
var l = i(627968),
    n = i(64700),
    a = i(731738),
    s = i(17928),
    r = i(935462),
    d = i(815021),
    c = i(289873),
    o = i(534514),
    u = i(834730),
    m = i(821609),
    g = i(807393),
    x = i(287809),
    h = i(682618),
    _ = i(992526),
    b = i(982240),
    v = i(503698),
    j = i.n(v),
    y = i(70283),
    N = i(508770),
    p = i(97808),
    f = i(123292),
    w = i(364522),
    E = i(404778),
    A = i(683071),
    T = i(982168),
    C = i(775602),
    I = i(240248);
i(321073);
var U = i(837381),
    B = i(887129),
    O = i(741918),
    S = i(939249),
    k = i(707554),
    R = i(486020);
function D(e, t, i) {
    let l = (0, s.bG)([x.default], () => (null != e ? x.default.getUser(e) : void 0), [e]);
    if (null != l && t) return (0, R.ku)({ id: l.id, avatar: l.avatar, discriminator: l.discriminator }, !1, i);
}
var F = i(975858),
    V = i(778712),
    z = i(375708),
    P = i(259588);
function G(e) {
    return `badge-tab-${e}`;
}
function M(e) {
    let t = Array.from(e);
    return t.length > 19 ? `${t.slice(0, 19).join("")}...` : e;
}
function $(e) {
    let { badge: t, isSelected: i, onSelect: a, itemId: s } = e,
        r = (0, U.rm)(s),
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
        m = n.useRef(null);
    return (0, l.jsx)(S.D, {
        ...r,
        innerRef: m,
        role: "tab",
        id: G(t.badge_id),
        "aria-label": u,
        "aria-selected": i,
        "aria-controls": i ? F.hJ : void 0,
        className: j()(P.oL, i && P.xO),
        onFocus: r.onFocus,
        onClick: () => {
            m.current?.focus(), a();
        },
        children:
            null != t.simple_icon_url &&
            (0, l.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: P.pW }),
    });
}
function L(e) {
    let { label: t, navId: i, badges: n, selectedBadgeId: a, onSelectBadge: s } = e,
        r = (0, B.Ay)({
            id: i,
            isEnabled: !0,
            orientation: O.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, l.jsxs)("div", {
        className: P.zE,
        children: [
            "heading" === t.type &&
                (0, l.jsx)(o.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, l.jsx)(U.hD, {
                navigator: r,
                children: (0, l.jsx)(U.PR, {
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
                                    $,
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
function H(e) {
    let t = [],
        i = [];
    for (let l of e) l.owned ? i.push(l) : l.is_earnable && t.push(l);
    return { earnable: t, owned: i };
}
function Y(e) {
    let {
            selectedBadgeId: t,
            onSelectBadge: i,
            displayedUserId: a,
            isViewingOtherUser: r,
            targetUsername: d,
            onViewOwnCatalog: c,
        } = e,
        g = (0, s.bG)([b.Ay], () => (null != a ? b.Ay.getBadges(a) : []), [a]),
        { earnable: x, owned: h } = n.useMemo(() => H(g), [g]),
        _ = D(a, r, 48),
        v = null != d ? M(d) : null,
        j = null != d && v !== d,
        y =
            null != v && j && null != _
                ? (0, l.jsxs)("span", {
                      className: P._p,
                      children: [(0, l.jsx)(p.eu, { src: _, size: V._3.SIZE_24, "aria-hidden": !0 }), v],
                  })
                : v,
        N = r && null != y ? z.intl.format(z.t.EIcwoe, { username: y }) : z.intl.string(z.t.UqnlQF),
        f = r && null != d ? z.intl.string(z.t["75s2Rq"]) : z.intl.string(z.t["62xU4E"]),
        w = r && null != d ? z.intl.formatToPlainString(z.t.BCjSZy, { username: d }) : z.intl.string(z.t.UqnlQF);
    return (0, l.jsx)("div", {
        className: P.ws,
        children: (0, l.jsxs)(k.F, {
            component: (0, l.jsxs)("div", {
                className: P.NG,
                children: [
                    (0, l.jsxs)("div", {
                        className: P.kc,
                        children: [
                            !j && null != _ && (0, l.jsx)(p.eu, { src: _, size: V._3.SIZE_24, "aria-hidden": !0 }),
                            (0, l.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: N }),
                        ],
                    }),
                    (0, l.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", children: f }),
                ],
            }),
            children: [
                (0, l.jsxs)("div", {
                    className: P.hG,
                    children: [
                        h.length > 0 &&
                            (0, l.jsx)(L, {
                                label: { type: "aria", text: w },
                                navId: "badge-directory-owned",
                                badges: h,
                                selectedBadgeId: t,
                                onSelectBadge: i,
                            }),
                        !r &&
                            x.length > 0 &&
                            (0, l.jsx)(L, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: z.intl.string(z.t["0YzU//"]),
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
                        className: P.HO,
                        children: (0, l.jsx)(m.$, {
                            variant: "secondary",
                            size: "sm",
                            fullWidth: !0,
                            onClick: c,
                            text: z.intl.string(z.t.msyp90),
                        }),
                    }),
            ],
        }),
    });
}
var J = i(911608),
    Z = i(847374),
    q = i(194261),
    Q = i(140735),
    W = i(152624);
function K(e) {
    if (null == e || "" === e) return null;
    let t = new Date(e);
    return Number.isNaN(t.getTime()) ? null : t;
}
function X(e) {
    return null == e ? null : e.toLocaleDateString(z.intl.currentLocale, { month: "short", year: "numeric" });
}
function ee(e) {
    let {
            badge: t,
            isViewingOtherUser: i,
            targetUsername: a,
            isViewerOnUpgradeableNitro: s = !1,
            hideLabel: r = !1,
        } = e,
        d = X(K(t.obtained_at)) ?? z.intl.string(z.t.sTFApF),
        c = n.useId(),
        o = i && null != a,
        m = t.badge_id === y.$.PREMIUM_TENURE ? z.intl.string(s ? z.t["5WS9pL"] : z.t.crwYbF) : null,
        g = o ? z.intl.formatToPlainString(z.t.KyTwIh, { username: a }) : m,
        x = null != g && "" !== g;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            x &&
                !r &&
                (0, l.jsxs)("div", {
                    className: W.u4,
                    children: [
                        s &&
                            !o &&
                            (0, l.jsx)(q.X, { size: "xxs", color: "currentColor", className: W.ZU, "aria-hidden": !0 }),
                        (0, l.jsx)(u.E, { id: c, variant: "text-xs/medium", color: "text-subtle", children: g }),
                    ],
                }),
            (0, l.jsx)("div", {
                className: W.SV,
                role: "list",
                "aria-labelledby": x && !r ? c : void 0,
                children: t.tiers.map((e) => {
                    let n = e.owned,
                        a = e.complex_icon_static_url ?? e.simple_icon_url,
                        r = e.name,
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
                                    ? z.intl.string(z.t.sTFApF)
                                    : (X(K(a)) ?? s)
                                : n && !l
                                  ? z.intl.string(z.t.VPu695)
                                  : (t.milestone_text ?? "");
                        })({
                            tier: e,
                            isUnlocked: n,
                            isViewingOtherUser: i,
                            isViewerOnUpgradeableNitro: s,
                            tierObtainedAt: c,
                            badgeObtainedAtText: d,
                        });
                    return (0, l.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: j()(W.zh, !n && W.ZF),
                            children: [
                                null != a && (0, l.jsx)("img", { className: W.Hw, src: a, alt: "", "aria-hidden": !0 }),
                                (0, l.jsxs)(u.E, {
                                    variant: "text-xxs/medium",
                                    color: n ? "text-default" : "text-muted",
                                    className: W.hI,
                                    children: [
                                        null != r && (0, l.jsx)("span", { className: W.nU, children: r }),
                                        (0, l.jsx)("span", { className: W.nU, children: o }),
                                    ],
                                }),
                                (0, l.jsx)(Q.A, { children: z.intl.string(n ? z.t.sTFApF : z.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var et = i(592292);
function ei(e) {
    let { badge: t, viewerBadge: i, isViewingOtherUser: a, targetUsername: s, isViewerOnUpgradeableNitro: r } = e,
        [d, c] = n.useState(!1),
        [o, m] = n.useState(t.badge_id),
        g = n.useId(),
        x = n.useId(),
        h = n.useRef(null);
    t.badge_id !== o && (m(t.badge_id), c(!1)),
        n.useEffect(() => {
            if (!d) return;
            let e = setTimeout(() => {
                h.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }, 100);
            return () => clearTimeout(e);
        }, [d]);
    let _ = i ?? t,
        b = a ? void 0 : _.next_tier,
        v = a ? void 0 : _.current_tier,
        y = null != b ? _.tiers.find((e) => e.key === b) : void 0,
        N = null != v ? _.tiers.find((e) => e.key === v) : void 0,
        p = a ? void 0 : _.progress?.[0],
        f = p?.threshold ?? y?.requirements[0]?.threshold ?? null,
        w = !a && _.owned && null != y,
        A = a || (0, I.uJ)(_.leveling_instructions) || w ? void 0 : _.leveling_instructions,
        T = y?.name != null ? z.intl.formatToPlainString(z.t["Jn+COZ"], { tier_name: y.name }) : void 0,
        C = d ? z.intl.string(z.t["065Hig"]) : z.intl.string(z.t.MylOvg),
        U = a ? t : _,
        B = N?.complex_icon_static_url ?? N?.simple_icon_url,
        O = y?.complex_icon_static_url ?? y?.simple_icon_url,
        k = !(0, I.uJ)(p?.progress_helper_text),
        R = null != T ? { "aria-labelledby": x } : { "aria-label": z.intl.string(z.t.Uwhb1l) };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != A && (0, l.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: A }),
            w &&
                (0, l.jsxs)("div", {
                    className: et.ES,
                    children: [
                        null != B && (0, l.jsx)("img", { className: et.Tw, src: B, alt: "", "aria-hidden": !0 }),
                        (0, l.jsxs)("div", {
                            className: et.Bd,
                            children: [
                                null != T && (0, l.jsx)(u.E, { id: x, variant: "text-sm/medium", children: T }),
                                null != f
                                    ? (0, l.jsx)(J.z, {
                                          value: p?.current ?? 0,
                                          maxValue: f,
                                          size: "md",
                                          valueLabel: p?.progress_helper_text,
                                          className: et.hr,
                                          ...R,
                                      })
                                    : null != p &&
                                      (0, l.jsx)(J.z, { isIndeterminate: !0, size: "md", className: et.hr, ...R }),
                                k &&
                                    (0, l.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: p?.progress_helper_text,
                                    }),
                            ],
                        }),
                        null != O && (0, l.jsx)("img", { className: et.Tw, src: O, alt: "", "aria-hidden": !0 }),
                    ],
                }),
            w
                ? (0, l.jsxs)("div", {
                      className: et.JC,
                      children: [
                          (0, l.jsx)("div", {
                              className: j()(et.ne, d && et.GB),
                              id: g,
                              ref: h,
                              children: (0, l.jsx)("div", {
                                  className: et.zL,
                                  inert: !d,
                                  children: (0, l.jsxs)("div", {
                                      className: et.GA,
                                      children: [
                                          (0, l.jsx)(E.c, { className: et.yF }),
                                          (0, l.jsx)(ee, {
                                              badge: U,
                                              isViewingOtherUser: a,
                                              targetUsername: s,
                                              isViewerOnUpgradeableNitro: r,
                                              hideLabel: !0,
                                          }),
                                      ],
                                  }),
                              }),
                          }),
                          (0, l.jsxs)(S.D, {
                              className: et.tw,
                              "aria-expanded": d,
                              "aria-controls": g,
                              onClick: () => c(!d),
                              children: [
                                  (0, l.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: C }),
                                  (0, l.jsx)(Z.a, {
                                      size: "sm",
                                      color: "currentColor",
                                      "aria-hidden": !0,
                                      className: j()(et.ai, d && et.hg),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, l.jsx)(ee, { badge: U, isViewingOtherUser: a, targetUsername: s, isViewerOnUpgradeableNitro: r }),
        ],
    });
}
var el = i(536001),
    en = i(260981),
    ea = i(540418),
    es = i(907085),
    er = i(179820),
    ed = i(174459),
    ec = i(652215);
function eo(e) {
    let { actionName: t, badge: i, displayedUserId: l, isSociallyNavigated: n } = e,
        a = x.default.getCurrentUser()?.id,
        s = null != i && null != a ? b.Ay.getBadgeById(i.badge_id, a) : void 0,
        r = null != i && null != a ? b.Ay.getRemainingToNextTier(i.badge_id, a) : void 0,
        d = null != l ? b.Ay.getBadges(l).filter((e) => e.owned).length : void 0;
    ed.default.track(ec.HAw.BADGE_DIRECTORY_ACTION, {
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
var eu = i(788868);
function em(e) {
    let { earnedDateText: t, label: i } = e;
    return (0, l.jsxs)("div", {
        className: j()(P.AX, P.aS),
        children: [
            (0, l.jsx)(u.E, { variant: "text-xs/medium", color: "text-default", className: P.NM, children: t }),
            (0, l.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", className: P.MZ, children: i }),
        ],
    });
}
function eg(e) {
    let { rarityBadgeProps: t } = e;
    return (0, l.jsxs)("div", {
        className: j()(P.AX, P.sn),
        children: [
            (0, l.jsx)(N.E, { ...t }),
            (0, l.jsx)(u.E, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: z.intl.string(z.t["phYZe+"]),
            }),
        ],
    });
}
function ex(e) {
    let t,
        i,
        {
            badge: n,
            isOwnProfile: a,
            isViewingOtherUser: s,
            targetUsername: r,
            viewedAvatarSrc: d,
            targetOwnsBadge: c,
            viewerOwnsBadge: o,
            unlockedStatusText: m,
            onToggleViewedUser: g,
        } = e,
        x =
            null !=
            (t = a
                ? n.owned
                    ? m
                    : z.intl.string(z.t.uHtDcT)
                : s && null != r
                  ? z.intl.formatToPlainString(z.t.Eo5Cnp, { username: M(r) })
                  : n.owned
                    ? m
                    : z.intl.string(z.t.uHtDcT));
    if (a) return x ? (0, l.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: t }) : null;
    let h = !s && c && null != r;
    return (s && o
        ? (i = z.intl.string(z.t.yxEAGH))
        : h && (i = z.intl.formatToPlainString(z.t["9GNsge"], { username: M(r) })),
    x || null != i)
        ? (0, l.jsxs)("div", {
              className: P.bn,
              children: [
                  x &&
                      (0, l.jsxs)(l.Fragment, {
                          children: [
                              null != d && (0, l.jsx)(p.eu, { src: d, size: V._3.SIZE_16, "aria-hidden": !0 }),
                              (0, l.jsx)(u.E, {
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: P.CT,
                                  children: t,
                              }),
                              null != i &&
                                  (0, l.jsx)(u.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      className: P.CT,
                                      "aria-hidden": !0,
                                      children: "\xb7",
                                  }),
                          ],
                      }),
                  null != i &&
                      (0, l.jsx)(f.Q, {
                          variant: "primary",
                          size: "sm",
                          textVariant: "text-xs/medium",
                          onClick: g,
                          text: i,
                      }),
              ],
          })
        : null;
}
function eh(e) {
    let t,
        i,
        a,
        r,
        d,
        c,
        {
            badge: g,
            viewerBadge: h,
            onClose: _,
            isOwnProfile: v,
            isViewingOtherUser: N,
            targetUsername: p,
            displayedUserId: f,
            targetOwnsBadge: U,
            viewerOwnsBadge: B,
            isMilestone2Enabled: O,
            onToggleViewedUser: S,
            onViewOwnCatalog: k,
        } = e,
        R = D(f, N, 32),
        V = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let i = e.owned ? e.current_tier : e.next_tier;
            return (null != i ? t.find((e) => e.key === i) : void 0) ?? t[0];
        })(g),
        M = (0, s.bG)([C.Ay], () => C.Ay.useReducedMotion)
            ? void 0
            : (V?.complex_icon_animated_url ?? g.complex_icon_animated_url),
        $ = V?.complex_icon_static_url ?? g.complex_icon_static_url,
        L = V?.simple_icon_url ?? g.simple_icon_url,
        H = M ?? $ ?? L,
        Y =
            (function (e) {
                if (null == e) return null;
                switch (e) {
                    case el.x.COMMON:
                        return { type: { text: z.intl.string(z.t.L0K5ci) }, variant: "rarity-common", icon: en.p };
                    case el.x.RARE:
                        return { type: { text: z.intl.string(z.t["sTx/5z"]) }, variant: "rarity-rare", icon: ea.A };
                    case el.x.EPIC:
                        return { type: { text: z.intl.string(z.t.RD8RiN) }, variant: "rarity-epic", icon: es.b };
                    case el.x.MYTHIC:
                        return { type: { text: z.intl.string(z.t.vqc1ol) }, variant: "rarity-mythic", icon: er.O };
                    case el.x.LEGENDARY:
                    default:
                        return null;
                }
            })(V?.rarity ?? g.rarity) ?? void 0,
        J = (0, F.Om)(g.badge_id),
        Z = g.badge_id === y.$.PREMIUM_TENURE,
        q = Z ? (V?.name ?? V?.key) : V?.name,
        Q = Z ? z.intl.string(z.t.Ipxkog) : g.name;
    Z ? (r = null != q ? `${Q} ${q}` : Q) : null != q ? ((a = Q), (r = q)) : (r = Q);
    let W = (0, b.H5)(g),
        K = g.owned
            ? (function (e) {
                  if (null == e) return;
                  let t = new Date(e);
                  if (!Number.isNaN(t.getTime()))
                      return t.toLocaleDateString(z.intl.currentLocale, {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                      });
              })(W)
            : void 0,
        X = ((i = null == (t = g.tiers?.[0]?.key) || V?.key === t), z.intl.string(i ? z.t.WDhIz2 : z.t.wYaDmz)),
        et = O && null != K,
        ed = null != Y,
        ec = null;
    O && (et || ed)
        ? (ec = (0, l.jsxs)("div", {
              className: j()(P.$S, (!et || !ed) && P.jQ),
              children: [
                  et && (0, l.jsx)(em, { earnedDateText: K, label: X }),
                  ed && (0, l.jsx)(eg, { rarityBadgeProps: Y }),
              ],
          }))
        : ed && (ec = (0, l.jsx)(eg, { rarityBadgeProps: Y })),
        et ||
            (d =
                O || null == W
                    ? z.intl.string(z.t.sTFApF)
                    : z.intl.formatToPlainString(z.t["0aEh2a"], { date: new Date(W) }));
    let eh = h?.owned === !0 && (h.tiers?.length ?? 0) > 0 && null == h.next_tier,
        e_ = x.default.getCurrentUser()?.premiumType,
        eb = Z && (e_ === eu.PremiumTypes.TIER_0 || e_ === eu.PremiumTypes.TIER_1);
    c = eh ? z.intl.string(z.t.jY5xAL) : eb ? z.intl.string(z.t.qkwSSp) : (h?.description ?? g.description);
    let ev = n.useCallback(() => {
            null != J &&
                (eo({
                    actionName: "primary_badge_action_clicked",
                    badge: g,
                    displayedUserId: f,
                    isSociallyNavigated: N,
                }),
                _(),
                T.A.popAll(),
                J.ctaAction());
        }, [g, f, N, J, _]),
        ej = (0, F.ie)(g.badge_id) && !g.is_earnable,
        ey = N && !g.is_earnable && !B;
    return (0, l.jsx)("div", {
        id: F.hJ,
        role: "tabpanel",
        "aria-labelledby": G(g.badge_id),
        className: P.SV,
        children: (0, l.jsxs)(w.d_, {
            className: P.C9,
            children: [
                null != H &&
                    (0, l.jsx)("img", {
                        className: j()(P.y2, null != M && H === M && P.hu),
                        src: H,
                        alt: "",
                        "aria-hidden": !0,
                    }),
                (0, l.jsxs)("div", {
                    className: P.OU,
                    children: [
                        (0, l.jsxs)("div", {
                            className: P.cQ,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: P.nj,
                                    children: [
                                        null != a &&
                                            (0, l.jsx)(u.E, {
                                                variant: "text-sm/medium",
                                                color: "text-subtle",
                                                className: P.$g,
                                                children: a,
                                            }),
                                        (0, l.jsx)(o.D, {
                                            variant: "display-sm",
                                            color: "text-strong",
                                            className: j()(P._r, Z && P.tN),
                                            children: r,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(ex, {
                                    badge: g,
                                    isOwnProfile: v,
                                    isViewingOtherUser: N,
                                    targetUsername: p,
                                    viewedAvatarSrc: R,
                                    targetOwnsBadge: U,
                                    viewerOwnsBadge: B,
                                    unlockedStatusText: d,
                                    onToggleViewedUser: S,
                                }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: P.oA,
                            children: [
                                ec,
                                !(0, I.uJ)(c) &&
                                    (0, l.jsxs)("div", {
                                        className: P.d9,
                                        children: [
                                            (0, l.jsxs)("div", {
                                                className: P.E4,
                                                children: [
                                                    (0, l.jsxs)("div", {
                                                        className: P.jv,
                                                        children: [
                                                            ej &&
                                                                (0, l.jsx)(u.E, {
                                                                    variant: "text-xs/medium",
                                                                    color: "text-subtle",
                                                                    className: P.c$,
                                                                    children: z.intl.string(z.t["/Gmn3f"]),
                                                                }),
                                                            (0, l.jsx)(u.E, {
                                                                variant: "text-sm/medium",
                                                                color: "text-default",
                                                                className: P.ij,
                                                                children: c,
                                                            }),
                                                        ],
                                                    }),
                                                    null != J &&
                                                        (0, l.jsx)(m.$, {
                                                            variant: eb
                                                                ? "expressive"
                                                                : B
                                                                  ? "secondary"
                                                                  : Z
                                                                    ? "expressive"
                                                                    : "primary",
                                                            size: "sm",
                                                            onClick: ev,
                                                            text: J.ctaLabel({
                                                                owned: B,
                                                                isViewerOnUpgradeableNitro: eb,
                                                            }),
                                                        }),
                                                ],
                                            }),
                                            (g.tiers?.length ?? 0) > 0 &&
                                                (0, l.jsxs)("div", {
                                                    className: P.cJ,
                                                    children: [
                                                        (0, l.jsx)(E.c, {}),
                                                        O
                                                            ? (0, l.jsx)(ei, {
                                                                  badge: g,
                                                                  viewerBadge: h,
                                                                  isViewingOtherUser: N,
                                                                  targetUsername: p,
                                                                  isViewerOnUpgradeableNitro: eb,
                                                              })
                                                            : (0, l.jsx)(ee, {
                                                                  badge: N ? g : (h ?? g),
                                                                  isViewingOtherUser: N,
                                                                  targetUsername: p,
                                                                  isViewerOnUpgradeableNitro: eb,
                                                              }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                ey &&
                                    (0, l.jsx)(A.w, {
                                        type: "info",
                                        children: z.intl.format(z.t.vFekBs, { onViewBadges: k }),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
var e_ = i(470739);
function eb(e) {
    let {
            transitionState: t,
            onClose: i,
            initialBadgeId: v,
            targetUserId: j,
            targetUsername: y,
            viewingCurrentUserBadges: N,
        } = e,
        p = (0, s.bG)([x.default], () => x.default.getCurrentUser()?.id),
        f = (0, _.VV)({ location: "BadgeDirectoryModal" }),
        w = null == j || j === p,
        E = !w && null != j && !0 !== N,
        A = E ? j : p,
        T = null != A ? `viewed_user:${E ? "other" : "self"}` : void 0,
        [C, I] = n.useState(v ?? null),
        U = (0, s.bG)([b.Ay], () => (null != A ? b.Ay.getBadges(A) : []), [A]),
        B = (0, s.bG)([b.Ay], () => null != A && b.Ay.hasCatalogFor(A), [A]),
        O = (0, s.bG)([b.Ay], () => b.Ay.hasCatalogFetchErrorFor(A), [A]);
    n.useEffect(() => {
        null == A || b.Ay.hasCatalogFor(A) || (0, h.R)(A);
        let e = E ? p : j;
        w || null == e || b.Ay.hasCatalogFor(e) || (0, h.R)(e);
    }, [A, w, E, p, j]),
        n.useEffect(() => {
            null != T && g.A.increment({ name: a.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [T] });
        }, [T]);
    let S = n.useMemo(() => {
            let { earnable: e, owned: t } = H(U);
            return E ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [U, E]),
        k = null != C && null != A ? b.Ay.getBadgeById(C, A) : void 0,
        R = null != S && null != A ? b.Ay.getBadgeById(S, A) : void 0,
        D = k ?? R,
        F = !B && !O,
        V = !B && O;
    n.useEffect(() => {
        V && null != T && g.A.increment({ name: a.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [T] });
    }, [V, T]);
    let G = (0, s.bG)([b.Ay], () => null != j && null != D && (b.Ay.getBadgeById(D.badge_id, j)?.owned ?? !1), [D, j]),
        M = (0, s.bG)([b.Ay], () => (null != p && null != D ? b.Ay.getBadgeById(D.badge_id, p) : void 0), [D, p]),
        $ = M?.owned ?? !1,
        L = n.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, e_._)({ ...e, stackingBehavior: "replace" }).then(() => {
                    i();
                });
            },
            [i],
        ),
        J = n.useCallback(() => {
            null != j &&
                null != D &&
                (E
                    ? L({
                          initialBadgeId: D.badge_id,
                          targetUserId: j,
                          targetUsername: y,
                          viewingCurrentUserBadges: !0,
                      })
                    : L({ initialBadgeId: D.badge_id, targetUserId: j, targetUsername: y }));
        }, [E, D, L, j, y]),
        Z = n.useCallback(() => {
            null != p &&
                null != j &&
                (eo({ actionName: "view_your_badges_pressed", badge: D, displayedUserId: A, isSociallyNavigated: E }),
                L({ targetUserId: j, targetUsername: y, viewingCurrentUserBadges: !0 }));
        }, [p, A, E, D, L, j, y]),
        q = n.useCallback(() => {
            null != A && (0, h.R)(A, { isRetry: !0 });
        }, [A]),
        Q = n.useCallback(() => {
            eo({ actionName: "badge_directory_closed", badge: D, displayedUserId: A, isSociallyNavigated: E }), i();
        }, [A, E, i, D]),
        W = D?.badge_id;
    return (
        n.useEffect(() => {
            null != D &&
                eo({ actionName: "badge_detail_viewed", badge: D, displayedUserId: A, isSociallyNavigated: E });
        }, [W, A, E]),
        (0, l.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": z.intl.string(z.t.PEjP4L),
            transitionState: t,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: P.CR,
            children: (0, l.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: P.jE,
                children: [
                    (0, l.jsx)("div", { className: P.b, children: (0, l.jsx)(d.J, { onClick: Q, size: "sm" }) }),
                    F
                        ? (0, l.jsx)("div", { className: P.Lq, children: (0, l.jsx)(c.y, {}) })
                        : V
                          ? (0, l.jsxs)("div", {
                                className: P.IU,
                                children: [
                                    (0, l.jsx)(o.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: z.intl.string(z.t.iufib1),
                                    }),
                                    (0, l.jsx)(u.E, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        className: P.TQ,
                                        children: z.intl.string(z.t.eAn6z2),
                                    }),
                                    (0, l.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: q,
                                        text: z.intl.string(z.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(Y, {
                                        selectedBadgeId: D?.badge_id ?? null,
                                        onSelectBadge: I,
                                        displayedUserId: A,
                                        isViewingOtherUser: E,
                                        targetUsername: y,
                                        onViewOwnCatalog: Z,
                                    }),
                                    null != D &&
                                        (0, l.jsx)(eh, {
                                            badge: D,
                                            viewerBadge: M,
                                            onClose: Q,
                                            isOwnProfile: w,
                                            isViewingOtherUser: E,
                                            targetUsername: y,
                                            displayedUserId: A,
                                            targetOwnsBadge: G,
                                            viewerOwnsBadge: $,
                                            isMilestone2Enabled: f,
                                            onToggleViewedUser: J,
                                            onViewOwnCatalog: Z,
                                        }),
                                ],
                            }),
                ],
            }),
        })
    );
}
