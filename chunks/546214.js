l.d(t, { default: () => eE });
var i = l(627968),
    n = l(64700),
    a = l(731738),
    s = l(17928),
    r = l(935462),
    d = l(815021),
    c = l(289873),
    o = l(534514),
    u = l(834730),
    m = l(821609),
    g = l(807393),
    x = l(287809),
    h = l(682618),
    v = l(992526),
    _ = l(982240);
l(321073);
var b = l(503698),
    j = l.n(b),
    N = l(70283),
    p = l(990078),
    y = l(508770),
    f = l(885574),
    w = l(97808),
    E = l(123292),
    A = l(683071),
    T = l(364522),
    C = l(404778),
    U = l(982168),
    I = l(775602),
    k = l(640708),
    B = l(240248),
    O = l(837381),
    S = l(887129),
    R = l(741918),
    D = l(939249),
    z = l(707554),
    V = l(486020);
function F(e, t, l) {
    let i = (0, s.bG)([x.default], () => (null != e ? x.default.getUser(e) : void 0), [e]);
    if (null != i && t) return (0, V.ku)({ id: i.id, avatar: i.avatar, discriminator: i.discriminator }, !1, l);
}
var P = l(975858),
    G = l(778712),
    L = l(375708),
    M = l(490308);
function $(e) {
    return `badge-tab-${e}`;
}
function H(e) {
    let t = Array.from(e);
    return t.length > 19 ? `${t.slice(0, 19).join("")}...` : e;
}
function J(e) {
    let { badge: t, isSelected: l, onSelect: a, itemId: s } = e,
        r = (0, O.rm)(s),
        d = t.owned ? t.current_tier : t.next_tier,
        c =
            null != d
                ? t.tiers.find((e) => {
                      let { key: t } = e;
                      return t === d;
                  })
                : void 0,
        o = t.badge_id === N.$.PREMIUM_TENURE ? (c?.name ?? c?.key) : c?.name,
        u = null != o ? `${t.name}, ${o}` : t.name,
        m = n.useRef(null);
    return (0, i.jsx)(D.D, {
        ...r,
        innerRef: m,
        role: "tab",
        id: $(t.badge_id),
        "aria-label": u,
        "aria-selected": l,
        "aria-controls": l ? P.hJ : void 0,
        className: j()(M.oL, l && M.xO),
        onFocus: r.onFocus,
        onClick: () => {
            m.current?.focus(), a();
        },
        children:
            null != t.simple_icon_url &&
            (0, i.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: M.pW }),
    });
}
function Y(e) {
    let { label: t, navId: l, badges: n, selectedBadgeId: a, onSelectBadge: s } = e,
        r = (0, S.Ay)({
            id: l,
            isEnabled: !0,
            orientation: R.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, i.jsxs)("div", {
        className: M.zE,
        children: [
            "heading" === t.type &&
                (0, i.jsx)(o.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, i.jsx)(O.hD, {
                navigator: r,
                children: (0, i.jsx)(O.PR, {
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
                                    J,
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
function Z(e) {
    let t = [],
        l = [];
    for (let i of e) i.owned ? l.push(i) : i.is_earnable && t.push(i);
    return { earnable: t, owned: l };
}
function q(e) {
    let {
            selectedBadgeId: t,
            onSelectBadge: l,
            displayedUserId: a,
            isViewingOtherUser: r,
            targetUsername: d,
            onViewOwnCatalog: c,
        } = e,
        g = (0, s.bG)([_.Ay], () => (null != a ? _.Ay.getBadges(a) : []), [a]),
        { earnable: x, owned: h } = n.useMemo(() => Z(g), [g]),
        v = F(a, r, 48),
        b = null != d ? H(d) : null,
        j = null != d && b !== d,
        N =
            null != b && j && null != v
                ? (0, i.jsxs)("span", {
                      className: M._p,
                      children: [(0, i.jsx)(w.eu, { src: v, size: G._3.SIZE_24, "aria-hidden": !0 }), b],
                  })
                : b,
        p = r && null != N ? L.intl.format(L.t.EIcwoe, { username: N }) : L.intl.string(L.t.UqnlQF),
        y = r && null != d ? L.intl.string(L.t["75s2Rq"]) : L.intl.string(L.t["62xU4E"]),
        f = r && null != d ? L.intl.formatToPlainString(L.t.BCjSZy, { username: d }) : L.intl.string(L.t.UqnlQF);
    return (0, i.jsx)("div", {
        className: M.ws,
        children: (0, i.jsxs)(z.F, {
            component: (0, i.jsxs)("div", {
                className: M.NG,
                children: [
                    (0, i.jsxs)("div", {
                        className: M.kc,
                        children: [
                            !j && null != v && (0, i.jsx)(w.eu, { src: v, size: G._3.SIZE_24, "aria-hidden": !0 }),
                            (0, i.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: p }),
                        ],
                    }),
                    (0, i.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", children: y }),
                ],
            }),
            children: [
                (0, i.jsxs)(T.Ip, {
                    className: M.hG,
                    children: [
                        h.length > 0 &&
                            (0, i.jsx)(Y, {
                                label: { type: "aria", text: f },
                                navId: "badge-directory-owned",
                                badges: h,
                                selectedBadgeId: t,
                                onSelectBadge: l,
                            }),
                        !r &&
                            x.length > 0 &&
                            (0, i.jsx)(Y, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: L.intl.string(L.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: x,
                                selectedBadgeId: t,
                                onSelectBadge: l,
                            }),
                    ],
                }),
                r &&
                    (0, i.jsx)("div", {
                        className: M.HO,
                        children: (0, i.jsx)(m.$, {
                            variant: "secondary",
                            size: "sm",
                            fullWidth: !0,
                            onClick: c,
                            text: L.intl.string(L.t.msyp90),
                        }),
                    }),
            ],
        }),
    });
}
var Q = l(911608),
    W = l(847374),
    K = l(194261),
    X = l(140735),
    ee = l(899696);
function et(e) {
    if (null == e || "" === e) return null;
    let t = new Date(e);
    return Number.isNaN(t.getTime()) ? null : t;
}
function el(e) {
    return null == e ? null : e.toLocaleDateString(L.intl.currentLocale, { month: "short", year: "numeric" });
}
function ei(e) {
    let {
            badge: t,
            isViewingOtherUser: l,
            targetUsername: a,
            isViewerOnUpgradeableNitro: s = !1,
            hideLabel: r = !1,
        } = e,
        d = el(et(t.obtained_at)) ?? L.intl.string(L.t.sTFApF),
        c = n.useId(),
        o = l && null != a,
        m = t.badge_id === N.$.PREMIUM_TENURE ? L.intl.string(s ? L.t["5WS9pL"] : L.t.crwYbF) : null,
        g = o ? L.intl.formatToPlainString(L.t.KyTwIh, { username: a }) : m,
        x = null != g && "" !== g;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            x &&
                !r &&
                (0, i.jsxs)("div", {
                    className: ee.u4,
                    children: [
                        s &&
                            !o &&
                            (0, i.jsx)(K.X, {
                                size: "xxs",
                                color: "currentColor",
                                className: ee.ZU,
                                "aria-hidden": !0,
                            }),
                        (0, i.jsx)(u.E, { id: c, variant: "text-xs/medium", color: "text-subtle", children: g }),
                    ],
                }),
            (0, i.jsx)("div", {
                className: ee.SV,
                role: "list",
                "aria-labelledby": x && !r ? c : void 0,
                children: t.tiers.map((e) => {
                    let n = e.owned,
                        a = !n && t.owned,
                        r = e.complex_icon_static_url ?? e.simple_icon_url,
                        c = e.name,
                        o = t.tier_obtained_at?.[e.key],
                        m = (function (e) {
                            let {
                                tier: t,
                                isUnlocked: l,
                                isViewingOtherUser: i,
                                isViewerOnUpgradeableNitro: n,
                                tierObtainedAt: a,
                                badgeObtainedAtText: s,
                            } = e;
                            return l
                                ? i
                                    ? L.intl.string(L.t.sTFApF)
                                    : (el(et(a)) ?? s)
                                : n && !i
                                  ? L.intl.string(L.t.VPu695)
                                  : (t.milestone_text ?? "");
                        })({
                            tier: e,
                            isUnlocked: n,
                            isViewingOtherUser: l,
                            isViewerOnUpgradeableNitro: s,
                            tierObtainedAt: o,
                            badgeObtainedAtText: d,
                        });
                    return (0, i.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: j()(ee.zh, a && ee.ZF),
                            children: [
                                null != r &&
                                    (0, i.jsx)("img", { className: ee.Hw, src: r, alt: "", "aria-hidden": !0 }),
                                (0, i.jsxs)(u.E, {
                                    variant: "text-xxs/medium",
                                    color: n ? "text-default" : "text-muted",
                                    className: ee.hI,
                                    children: [
                                        null != c && (0, i.jsx)("span", { className: ee.nU, children: c }),
                                        (0, i.jsx)("span", { className: ee.nU, children: m }),
                                    ],
                                }),
                                (0, i.jsx)(X.A, { children: L.intl.string(n ? L.t.sTFApF : L.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var en = l(335140);
function ea(e) {
    let { badge: t, viewerBadge: l, isViewingOtherUser: a, targetUsername: s, isViewerOnUpgradeableNitro: r } = e,
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
    let v = l ?? t,
        _ = a ? void 0 : v.next_tier,
        b = a ? void 0 : v.current_tier,
        N = null != _ ? v.tiers.find((e) => e.key === _) : void 0,
        p = null != b ? v.tiers.find((e) => e.key === b) : void 0,
        y = a ? void 0 : v.progress?.[0],
        f = y?.threshold ?? N?.requirements[0]?.threshold ?? null,
        w = !a && v.owned && null != N,
        E = a || (0, B.uJ)(v.leveling_instructions) || w ? void 0 : v.leveling_instructions,
        A = N?.name != null ? L.intl.formatToPlainString(L.t["Jn+COZ"], { tier_name: N.name }) : void 0,
        T = d ? L.intl.string(L.t["065Hig"]) : L.intl.string(L.t.MylOvg),
        U = a ? t : v,
        I = p?.complex_icon_static_url ?? p?.simple_icon_url,
        k = N?.complex_icon_static_url ?? N?.simple_icon_url,
        O = !(0, B.uJ)(y?.progress_helper_text),
        S = null != A ? { "aria-labelledby": x } : { "aria-label": L.intl.string(L.t.Uwhb1l) };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != E && (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: E }),
            w &&
                (0, i.jsxs)("div", {
                    className: en.ES,
                    children: [
                        null != I && (0, i.jsx)("img", { className: en.Tw, src: I, alt: "", "aria-hidden": !0 }),
                        (0, i.jsxs)("div", {
                            className: en.Bd,
                            children: [
                                null != A && (0, i.jsx)(u.E, { id: x, variant: "text-sm/medium", children: A }),
                                null != f
                                    ? (0, i.jsx)(Q.z, {
                                          value: y?.current ?? 0,
                                          maxValue: f,
                                          size: "md",
                                          valueLabel: y?.progress_helper_text,
                                          className: en.hr,
                                          ...S,
                                      })
                                    : null != y &&
                                      (0, i.jsx)(Q.z, { isIndeterminate: !0, size: "md", className: en.hr, ...S }),
                                O &&
                                    (0, i.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: y?.progress_helper_text,
                                    }),
                            ],
                        }),
                        null != k && (0, i.jsx)("img", { className: en.Tw, src: k, alt: "", "aria-hidden": !0 }),
                    ],
                }),
            w
                ? (0, i.jsxs)("div", {
                      className: en.JC,
                      children: [
                          (0, i.jsx)("div", {
                              className: j()(en.ne, d && en.GB),
                              id: g,
                              ref: h,
                              children: (0, i.jsx)("div", {
                                  className: en.zL,
                                  inert: !d,
                                  children: (0, i.jsxs)("div", {
                                      className: en.GA,
                                      children: [
                                          (0, i.jsx)(C.c, { className: en.yF }),
                                          (0, i.jsx)(ei, {
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
                          (0, i.jsxs)(D.D, {
                              className: en.tw,
                              "aria-expanded": d,
                              "aria-controls": g,
                              onClick: () => c(!d),
                              children: [
                                  (0, i.jsx)(u.E, {
                                      className: en.Yi,
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: T,
                                  }),
                                  (0, i.jsx)(W.a, {
                                      size: "sm",
                                      color: "currentColor",
                                      "aria-hidden": !0,
                                      className: j()(en.ai, d && en.hg),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, i.jsx)(ei, { badge: U, isViewingOtherUser: a, targetUsername: s, isViewerOnUpgradeableNitro: r }),
        ],
    });
}
var es = l(536001),
    er = l(260981),
    ed = l(540418),
    ec = l(907085),
    eo = l(179820),
    eu = l(174459),
    em = l(652215);
function eg(e) {
    let { actionName: t, badge: l, displayedUserId: i, isSociallyNavigated: n } = e,
        a = x.default.getCurrentUser()?.id,
        s = null != l && null != a ? _.Ay.getBadgeById(l.badge_id, a) : void 0,
        r = null != l && null != a ? _.Ay.getRemainingToNextTier(l.badge_id, a) : void 0,
        d = null != i ? _.Ay.getBadges(i).filter((e) => e.owned).length : void 0;
    eu.default.track(em.HAw.BADGE_DIRECTORY_ACTION, {
        badge_action: t,
        badge_id: l?.badge_id,
        badge_tier: null != l ? ((l.owned ? l.current_tier : l.next_tier) ?? l.tiers?.[0]?.key) : void 0,
        badge_owner_id: i,
        is_owned: s?.owned ?? !1,
        progress_to_next_tier: r,
        is_earnable: l?.is_earnable ?? !1,
        is_socially_navigated: n,
        total_badges_owned: d,
    });
}
var ex = l(202541);
function eh(e) {
    let { earnedDateText: t, label: l } = e;
    return (0, i.jsxs)("div", {
        className: j()(M.AX, M.aS),
        children: [
            (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-default", className: M.NM, children: t }),
            (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", className: M.MZ, children: l }),
        ],
    });
}
function ev(e) {
    let { rarityBadgeProps: t } = e;
    return (0, i.jsxs)("div", {
        className: j()(M.AX, M.sn),
        children: [
            (0, i.jsx)(y.E, { ...t }),
            (0, i.jsx)(u.E, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: L.intl.string(L.t["phYZe+"]),
            }),
        ],
    });
}
function e_() {
    return (0, i.jsx)(p.m, {
        text: L.intl.string(L.t.goKu4e),
        children: (0, i.jsxs)("span", {
            className: M.Gb,
            children: [
                (0, i.jsx)(f.m, { size: "xxs", color: "currentColor", className: M.LS, "aria-hidden": !0 }),
                (0, i.jsx)(u.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "none",
                    children: L.intl.string(L.t.oW0eUd),
                }),
            ],
        }),
    });
}
function eb(e) {
    let t,
        l,
        {
            badge: i,
            isOwnProfile: n,
            isViewingOtherUser: a,
            targetUsername: s,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
        } = e;
    if (
        ((t = n
            ? i.owned
                ? c
                : L.intl.string(L.t.uHtDcT)
            : a && null != s
              ? L.intl.formatToPlainString(L.t.Eo5Cnp, { username: H(s) })
              : i.owned
                ? c
                : L.intl.string(L.t.uHtDcT)),
        !n)
    ) {
        let e = !a && r && null != s;
        a && d
            ? (l = L.intl.string(L.t.yxEAGH))
            : e && (l = L.intl.formatToPlainString(L.t["9GNsge"], { username: H(s) }));
    }
    return { statusText: t, toggleText: l };
}
function ej() {
    return (0, i.jsx)(k.A, { height: 3, width: 3, "aria-hidden": "true", className: M.zN });
}
function eN(e) {
    let { segments: t } = e;
    return 0 === t.length
        ? null
        : (0, i.jsx)("div", {
              className: M.U3,
              children: t.map((e, t) => {
                  let { key: l, node: n } = e;
                  return (0, i.jsxs)("span", { className: M.Hq, children: [t > 0 && (0, i.jsx)(ej, {}), n] }, l);
              }),
          });
}
function ep(e) {
    let {
            badge: t,
            isOwnProfile: l,
            isViewingOtherUser: n,
            targetUsername: a,
            viewedAvatarSrc: s,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
            onToggleViewedUser: o,
        } = e,
        m = (0, B.uJ)(t.info_label) ? void 0 : t.info_label,
        g = (0, P.HW)(t.badge_id),
        { statusText: x, toggleText: h } = eb({
            badge: t,
            isOwnProfile: l,
            isViewingOtherUser: n,
            targetUsername: a,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
        }),
        v = [];
    g && v.push({ key: "beta", node: (0, i.jsx)(e_, {}) }),
        null != x &&
            v.push({
                key: "status",
                node: (0, i.jsxs)("span", {
                    className: M.pC,
                    children: [
                        !l && null != s && (0, i.jsx)(w.eu, { src: s, size: G._3.SIZE_16, "aria-hidden": !0 }),
                        (0, i.jsx)(u.E, {
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: M.$L,
                            children: x,
                        }),
                    ],
                }),
            }),
        null != m &&
            v.push({
                key: "info",
                node: (0, i.jsx)(u.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    className: M.$L,
                    children: m,
                }),
            });
    let _ = v.length >= 3 && null != h,
        b =
            null != h
                ? {
                      key: "toggle",
                      node: (0, i.jsx)(E.Q, {
                          variant: "primary",
                          size: "sm",
                          textVariant: "text-xs/medium",
                          onClick: o,
                          text: h,
                      }),
                  }
                : void 0,
        j = _ || null == b ? v : [...v, b];
    return 0 === j.length && null == b
        ? null
        : (0, i.jsxs)("div", {
              className: M.rI,
              children: [(0, i.jsx)(eN, { segments: j }), _ && null != b && (0, i.jsx)(eN, { segments: [b] })],
          });
}
function ey(e) {
    let {
            badge: t,
            isOwnProfile: l,
            isViewingOtherUser: n,
            targetUsername: a,
            viewedAvatarSrc: s,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
            onToggleViewedUser: o,
        } = e,
        { statusText: m, toggleText: g } = eb({
            badge: t,
            isOwnProfile: l,
            isViewingOtherUser: n,
            targetUsername: a,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
        }),
        x = null != m;
    return l
        ? x
            ? (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: m })
            : null
        : x || null != g
          ? (0, i.jsxs)("div", {
                className: M.bn,
                children: [
                    x &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != s && (0, i.jsx)(w.eu, { src: s, size: G._3.SIZE_16, "aria-hidden": !0 }),
                                (0, i.jsx)(u.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: M.CT,
                                    children: m,
                                }),
                                null != g &&
                                    (0, i.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        className: M.CT,
                                        "aria-hidden": !0,
                                        children: "\xb7",
                                    }),
                            ],
                        }),
                    null != g &&
                        (0, i.jsx)(E.Q, {
                            variant: "primary",
                            size: "sm",
                            textVariant: "text-xs/medium",
                            onClick: o,
                            text: g,
                        }),
                ],
            })
          : null;
}
function ef(e) {
    let t,
        l,
        a,
        r,
        c,
        g,
        {
            badge: h,
            viewerBadge: v,
            onClose: b,
            isOwnProfile: p,
            isViewingOtherUser: y,
            targetUsername: f,
            displayedUserId: w,
            targetOwnsBadge: E,
            viewerOwnsBadge: k,
            isMilestone2Enabled: O,
            onToggleViewedUser: S,
            onViewOwnCatalog: R,
        } = e,
        D = F(w, y, 32),
        z = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let l = e.owned ? e.current_tier : e.next_tier;
            return (null != l ? t.find((e) => e.key === l) : void 0) ?? t[0];
        })(h),
        V = (0, s.bG)([I.Ay], () => I.Ay.useReducedMotion)
            ? void 0
            : (z?.complex_icon_animated_url ?? h.complex_icon_animated_url),
        G = z?.complex_icon_static_url ?? h.complex_icon_static_url,
        H = z?.simple_icon_url ?? h.simple_icon_url,
        J = V ?? G ?? H,
        Y =
            (function (e) {
                if (null == e) return null;
                switch (e) {
                    case es.x.COMMON:
                        return { type: { text: L.intl.string(L.t.L0K5ci) }, variant: "rarity-common", icon: er.p };
                    case es.x.RARE:
                        return { type: { text: L.intl.string(L.t["sTx/5z"]) }, variant: "rarity-rare", icon: ed.A };
                    case es.x.EPIC:
                        return { type: { text: L.intl.string(L.t.RD8RiN) }, variant: "rarity-epic", icon: ec.b };
                    case es.x.MYTHIC:
                        return { type: { text: L.intl.string(L.t.vqc1ol) }, variant: "rarity-mythic", icon: eo.O };
                    case es.x.LEGENDARY:
                    default:
                        return null;
                }
            })(z?.rarity ?? h.rarity) ?? void 0,
        Z = (0, P.Om)(h.badge_id),
        q = h.badge_id === N.$.PREMIUM_TENURE,
        Q = q ? (z?.name ?? z?.key) : z?.name,
        W = q ? L.intl.string(L.t.Ipxkog) : h.name;
    q ? (r = null != Q ? `${W} ${Q}` : W) : null != Q ? ((a = W), (r = Q)) : (r = W);
    let K = (0, _.H5)(h),
        X = h.owned
            ? (function (e) {
                  if (null == e) return;
                  let t = new Date(e);
                  if (!Number.isNaN(t.getTime()))
                      return t.toLocaleDateString(L.intl.currentLocale, {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                      });
              })(K)
            : void 0,
        ee = ((l = null == (t = h.tiers?.[0]?.key) || z?.key === t), L.intl.string(l ? L.t.WDhIz2 : L.t.wYaDmz)),
        et = O && null != X,
        el = null != Y,
        en = null;
    O && (et || el)
        ? (en = (0, i.jsxs)("div", {
              className: j()(M.$S, (!et || !el) && M.jQ),
              children: [
                  et && (0, i.jsx)(eh, { earnedDateText: X, label: ee }),
                  el && (0, i.jsx)(ev, { rarityBadgeProps: Y }),
              ],
          }))
        : el && (en = (0, i.jsx)(ev, { rarityBadgeProps: Y })),
        et ||
            (c =
                O || null == K
                    ? L.intl.string(L.t.sTFApF)
                    : L.intl.formatToPlainString(L.t["0aEh2a"], { date: new Date(K) }));
    let eu = v?.owned === !0 && (v.tiers?.length ?? 0) > 0 && null == v.next_tier,
        em = x.default.getCurrentUser()?.premiumType,
        e_ = q && (em === ex.PremiumTypes.TIER_0 || em === ex.PremiumTypes.TIER_1);
    g = eu ? L.intl.string(L.t.jY5xAL) : e_ ? L.intl.string(L.t.qkwSSp) : (v?.description ?? h.description);
    let eb = n.useCallback(() => {
            null != Z &&
                (eg({
                    actionName: "primary_badge_action_clicked",
                    badge: h,
                    displayedUserId: w,
                    isSociallyNavigated: y,
                }),
                b(),
                U.A.popAll(),
                Z.ctaAction());
        }, [h, w, y, Z, b]),
        ej = (0, P.ie)(h.badge_id) && !h.is_earnable,
        eN =
            !y || h.is_earnable || k
                ? null
                : (0, i.jsx)(A.w, { type: "info", children: L.intl.format(L.t.vFekBs, { onViewBadges: R }) });
    return (0, i.jsx)("div", {
        id: P.hJ,
        role: "tabpanel",
        "aria-labelledby": $(h.badge_id),
        className: M.SV,
        children: (0, i.jsxs)(T.d_, {
            className: M.C9,
            children: [
                (0, i.jsx)("div", { className: M.Gw, children: (0, i.jsx)(d.J, { onClick: b, size: "sm" }) }),
                null != J &&
                    (0, i.jsx)("img", {
                        className: j()(M.y2, null != V && J === V && M.hu),
                        src: J,
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
                                            className: j()(M._r, q && M.tN),
                                            children: r,
                                        }),
                                        O &&
                                            (0, i.jsx)(ep, {
                                                badge: h,
                                                isOwnProfile: p,
                                                isViewingOtherUser: y,
                                                targetUsername: f,
                                                viewedAvatarSrc: D,
                                                targetOwnsBadge: E,
                                                viewerOwnsBadge: k,
                                                unlockedStatusText: c,
                                                onToggleViewedUser: S,
                                            }),
                                    ],
                                }),
                                !O &&
                                    (0, i.jsx)(ey, {
                                        badge: h,
                                        isOwnProfile: p,
                                        isViewingOtherUser: y,
                                        targetUsername: f,
                                        viewedAvatarSrc: D,
                                        targetOwnsBadge: E,
                                        viewerOwnsBadge: k,
                                        unlockedStatusText: c,
                                        onToggleViewedUser: S,
                                    }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: M.oA,
                            children: [
                                en,
                                !(0, B.uJ)(g) &&
                                    (0, i.jsxs)("div", {
                                        className: M.d9,
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: M.E4,
                                                children: [
                                                    (0, i.jsxs)("div", {
                                                        className: M.jv,
                                                        children: [
                                                            ej &&
                                                                (0, i.jsx)(u.E, {
                                                                    variant: "text-xs/medium",
                                                                    color: "text-subtle",
                                                                    className: M.c$,
                                                                    children: L.intl.string(L.t["/Gmn3f"]),
                                                                }),
                                                            (0, i.jsx)(u.E, {
                                                                variant: "text-sm/medium",
                                                                color: "text-default",
                                                                className: M.ij,
                                                                children: g,
                                                            }),
                                                        ],
                                                    }),
                                                    null != Z &&
                                                        (0, i.jsx)(m.$, {
                                                            variant: e_
                                                                ? "expressive"
                                                                : k
                                                                  ? "secondary"
                                                                  : q
                                                                    ? "expressive"
                                                                    : "primary",
                                                            size: "sm",
                                                            onClick: eb,
                                                            text: Z.ctaLabel({
                                                                owned: k,
                                                                isViewerOnUpgradeableNitro: e_,
                                                            }),
                                                        }),
                                                ],
                                            }),
                                            (h.tiers?.length ?? 0) > 0 &&
                                                (0, i.jsxs)("div", {
                                                    className: M.cJ,
                                                    children: [
                                                        (0, i.jsx)(C.c, {}),
                                                        O
                                                            ? (0, i.jsx)(ea, {
                                                                  badge: h,
                                                                  viewerBadge: v,
                                                                  isViewingOtherUser: y,
                                                                  targetUsername: f,
                                                                  isViewerOnUpgradeableNitro: e_,
                                                              })
                                                            : (0, i.jsx)(ei, {
                                                                  badge: y ? h : (v ?? h),
                                                                  isViewingOtherUser: y,
                                                                  targetUsername: f,
                                                                  isViewerOnUpgradeableNitro: e_,
                                                              }),
                                                    ],
                                                }),
                                            null != eN && (0, i.jsx)("div", { className: M.Z6, children: eN }),
                                        ],
                                    }),
                                (0, B.uJ)(g) && eN,
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
var ew = l(470739);
function eE(e) {
    let {
            transitionState: t,
            onClose: l,
            initialBadgeId: b,
            targetUserId: j,
            targetUsername: N,
            viewingCurrentUserBadges: p,
        } = e,
        y = (0, s.bG)([x.default], () => x.default.getCurrentUser()?.id),
        f = (0, v.VV)({ location: "BadgeDirectoryModal" }),
        w = null == j || j === y,
        E = !w && null != j && !0 !== p,
        A = E ? j : y,
        T = null != A ? `viewed_user:${E ? "other" : "self"}` : void 0,
        [C, U] = n.useState(b ?? null),
        I = (0, s.bG)([_.Ay], () => (null != A ? _.Ay.getBadges(A) : []), [A]),
        k = (0, s.bG)([_.Ay], () => null != A && _.Ay.hasCatalogFor(A), [A]),
        B = (0, s.bG)([_.Ay], () => _.Ay.hasCatalogFetchErrorFor(A), [A]);
    n.useEffect(() => {
        null == A || _.Ay.hasCatalogFor(A) || (0, h.R)(A);
        let e = E ? y : j;
        w || null == e || _.Ay.hasCatalogFor(e) || (0, h.R)(e);
    }, [A, w, E, y, j]),
        n.useEffect(() => {
            null != T && g.A.increment({ name: a.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [T] });
        }, [T]);
    let O = n.useMemo(() => {
            let { earnable: e, owned: t } = Z(I);
            return E ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [I, E]),
        S = null != C && null != A ? _.Ay.getBadgeById(C, A) : void 0,
        R = null != O && null != A ? _.Ay.getBadgeById(O, A) : void 0,
        D = S ?? R,
        z = !k && !B,
        V = !k && B;
    n.useEffect(() => {
        V && null != T && g.A.increment({ name: a.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [T] });
    }, [V, T]);
    let F = (0, s.bG)([_.Ay], () => null != j && null != D && (_.Ay.getBadgeById(D.badge_id, j)?.owned ?? !1), [D, j]),
        P = (0, s.bG)([_.Ay], () => (null != y && null != D ? _.Ay.getBadgeById(D.badge_id, y) : void 0), [D, y]),
        G = P?.owned ?? !1,
        $ = n.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, ew._)({ ...e, stackingBehavior: "replace" }).then(() => {
                    l();
                });
            },
            [l],
        ),
        H = n.useCallback(() => {
            null != j &&
                null != D &&
                (E
                    ? $({
                          initialBadgeId: D.badge_id,
                          targetUserId: j,
                          targetUsername: N,
                          viewingCurrentUserBadges: !0,
                      })
                    : $({ initialBadgeId: D.badge_id, targetUserId: j, targetUsername: N }));
        }, [E, D, $, j, N]),
        J = n.useCallback(() => {
            null != y &&
                null != j &&
                (eg({ actionName: "view_your_badges_pressed", badge: D, displayedUserId: A, isSociallyNavigated: E }),
                $({ targetUserId: j, targetUsername: N, viewingCurrentUserBadges: !0 }));
        }, [y, A, E, D, $, j, N]),
        Y = n.useCallback(() => {
            null != A && (0, h.R)(A, { isRetry: !0 });
        }, [A]),
        Q = n.useCallback(() => {
            eg({ actionName: "badge_directory_closed", badge: D, displayedUserId: A, isSociallyNavigated: E }), l();
        }, [A, E, l, D]),
        W = D?.badge_id;
    return (
        n.useEffect(() => {
            null != D &&
                eg({ actionName: "badge_detail_viewed", badge: D, displayedUserId: A, isSociallyNavigated: E });
        }, [W, A, E]),
        (0, i.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": L.intl.string(L.t.PEjP4L),
            transitionState: t,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: M.CR,
            children: (0, i.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: M.jE,
                children: [
                    (z || V || null == D) &&
                        (0, i.jsx)("div", { className: M.b, children: (0, i.jsx)(d.J, { onClick: Q, size: "sm" }) }),
                    z
                        ? (0, i.jsx)("div", { className: M.Lq, children: (0, i.jsx)(c.y, {}) })
                        : V
                          ? (0, i.jsxs)("div", {
                                className: M.IU,
                                children: [
                                    (0, i.jsx)(o.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: L.intl.string(L.t.iufib1),
                                    }),
                                    (0, i.jsx)(u.E, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        className: M.TQ,
                                        children: L.intl.string(L.t.eAn6z2),
                                    }),
                                    (0, i.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: Y,
                                        text: L.intl.string(L.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(q, {
                                        selectedBadgeId: D?.badge_id ?? null,
                                        onSelectBadge: U,
                                        displayedUserId: A,
                                        isViewingOtherUser: E,
                                        targetUsername: N,
                                        onViewOwnCatalog: J,
                                    }),
                                    null != D &&
                                        (0, i.jsx)(ef, {
                                            badge: D,
                                            viewerBadge: P,
                                            onClose: Q,
                                            isOwnProfile: w,
                                            isViewingOtherUser: E,
                                            targetUsername: N,
                                            displayedUserId: A,
                                            targetOwnsBadge: F,
                                            viewerOwnsBadge: G,
                                            isMilestone2Enabled: f,
                                            onToggleViewedUser: H,
                                            onViewOwnCatalog: J,
                                        }),
                                ],
                            }),
                ],
            }),
        })
    );
}
