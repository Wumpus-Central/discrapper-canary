l.d(t, { default: () => eI });
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
    _ = l(992526),
    v = l(982240);
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
    T = l(707554),
    I = l(364522),
    C = l(404778),
    U = l(982168),
    S = l(775602),
    O = l(640708),
    k = l(780964),
    B = l(766075),
    R = l(153488),
    D = l(240248),
    z = l(837381),
    V = l(887129),
    F = l(741918),
    G = l(939249),
    P = l(486020);
function L(e, t, l) {
    let i = (0, s.bG)([x.default], () => (null != e ? x.default.getUser(e) : void 0), [e]);
    if (null != i && t) return (0, P.ku)({ id: i.id, avatar: i.avatar, discriminator: i.discriminator }, !1, l);
}
var M = l(975858),
    $ = l(778712),
    Z = l(375708),
    H = l(490308);
function J(e) {
    return `badge-tab-${e}`;
}
function Y(e) {
    let t = Array.from(e);
    return t.length > 19 ? `${t.slice(0, 19).join("")}...` : e;
}
function q(e) {
    let { badge: t, isSelected: l, onSelect: a, itemId: s } = e,
        r = (0, z.rm)(s),
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
    return (0, i.jsx)(G.D, {
        ...r,
        innerRef: m,
        role: "tab",
        id: J(t.badge_id),
        "aria-label": u,
        "aria-selected": l,
        "aria-controls": l ? M.hJ : void 0,
        className: j()(H.oL, l && H.xO),
        onFocus: r.onFocus,
        onClick: () => {
            m.current?.focus(), a();
        },
        children:
            null != t.simple_icon_url &&
            (0, i.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: H.pW }),
    });
}
function Q(e) {
    let { label: t, navId: l, badges: n, selectedBadgeId: a, onSelectBadge: s } = e,
        r = (0, V.Ay)({
            id: l,
            isEnabled: !0,
            orientation: F.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, i.jsxs)("div", {
        className: H.zE,
        children: [
            "heading" === t.type &&
                (0, i.jsx)(o.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, i.jsx)(z.hD, {
                navigator: r,
                children: (0, i.jsx)(z.PR, {
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: H.yq,
                            children: n.map((e, t) =>
                                (0, i.jsx)(
                                    q,
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
function W(e) {
    let t = [],
        l = [];
    for (let i of e) i.owned ? l.push(i) : i.is_earnable && t.push(i);
    return { earnable: t, owned: l };
}
function K(e) {
    let {
            selectedBadgeId: t,
            onSelectBadge: l,
            displayedUserId: a,
            isViewingOtherUser: r,
            targetUsername: d,
            onViewOwnCatalog: c,
        } = e,
        g = (0, s.bG)([v.Ay], () => (null != a ? v.Ay.getBadges(a) : []), [a]),
        { earnable: x, owned: h } = n.useMemo(() => W(g), [g]),
        _ = L(a, r, 48),
        b = null != d ? Y(d) : null,
        j = null != d && b !== d,
        N =
            null != b && j && null != _
                ? (0, i.jsxs)("span", {
                      className: H._p,
                      children: [(0, i.jsx)(w.eu, { src: _, size: $._3.SIZE_24, "aria-hidden": !0 }), b],
                  })
                : b,
        p = r && null != N ? Z.intl.format(Z.t.EIcwoe, { username: N }) : Z.intl.string(Z.t.UqnlQF),
        y = r && null != d ? Z.intl.string(Z.t["75s2Rq"]) : Z.intl.string(Z.t["62xU4E"]),
        f = r && null != d ? Z.intl.formatToPlainString(Z.t.BCjSZy, { username: d }) : Z.intl.string(Z.t.UqnlQF);
    return (0, i.jsx)("div", {
        className: H.ws,
        children: (0, i.jsxs)(T.F, {
            component: (0, i.jsxs)("div", {
                className: H.NG,
                children: [
                    (0, i.jsxs)("div", {
                        className: H.kc,
                        children: [
                            !j && null != _ && (0, i.jsx)(w.eu, { src: _, size: $._3.SIZE_24, "aria-hidden": !0 }),
                            (0, i.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: p }),
                        ],
                    }),
                    (0, i.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", children: y }),
                ],
            }),
            children: [
                (0, i.jsxs)(I.Ip, {
                    className: H.hG,
                    children: [
                        h.length > 0 &&
                            (0, i.jsx)(Q, {
                                label: { type: "aria", text: f },
                                navId: "badge-directory-owned",
                                badges: h,
                                selectedBadgeId: t,
                                onSelectBadge: l,
                            }),
                        !r &&
                            x.length > 0 &&
                            (0, i.jsx)(Q, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: Z.intl.string(Z.t["0YzU//"]),
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
                        className: H.HO,
                        children: (0, i.jsx)(m.$, {
                            variant: "secondary",
                            size: "sm",
                            fullWidth: !0,
                            onClick: c,
                            text: Z.intl.string(Z.t.msyp90),
                        }),
                    }),
            ],
        }),
    });
}
var X = l(911608),
    ee = l(847374),
    et = l(194261),
    el = l(140735),
    ei = l(899696);
function en(e) {
    if (null == e || "" === e) return null;
    let t = new Date(e);
    return Number.isNaN(t.getTime()) ? null : t;
}
function ea(e) {
    return null == e ? null : e.toLocaleDateString(Z.intl.currentLocale, { month: "short", year: "numeric" });
}
function es(e) {
    let {
            badge: t,
            isViewingOtherUser: l,
            targetUsername: a,
            isViewerOnUpgradeableNitro: s = !1,
            hideLabel: r = !1,
        } = e,
        d = ea(en(t.obtained_at)) ?? Z.intl.string(Z.t.sTFApF),
        c = n.useId(),
        o = l && null != a,
        m = t.badge_id === N.$.PREMIUM_TENURE ? Z.intl.string(s ? Z.t["5WS9pL"] : Z.t.crwYbF) : null,
        g = o ? Z.intl.formatToPlainString(Z.t.KyTwIh, { username: a }) : m,
        x = null != g && "" !== g;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            x &&
                !r &&
                (0, i.jsxs)("div", {
                    className: ei.u4,
                    children: [
                        s &&
                            !o &&
                            (0, i.jsx)(et.X, {
                                size: "xxs",
                                color: "currentColor",
                                className: ei.ZU,
                                "aria-hidden": !0,
                            }),
                        (0, i.jsx)(u.E, { id: c, variant: "text-xs/medium", color: "text-subtle", children: g }),
                    ],
                }),
            (0, i.jsx)("div", {
                className: ei.SV,
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
                                    ? Z.intl.string(Z.t.sTFApF)
                                    : (ea(en(a)) ?? s)
                                : n && !i
                                  ? Z.intl.string(Z.t.VPu695)
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
                            className: j()(ei.zh, a && ei.ZF),
                            children: [
                                null != r &&
                                    (0, i.jsx)("img", { className: ei.Hw, src: r, alt: "", "aria-hidden": !0 }),
                                (0, i.jsxs)(u.E, {
                                    variant: "text-xxs/medium",
                                    color: n ? "text-default" : "text-muted",
                                    className: ei.hI,
                                    children: [
                                        null != c && (0, i.jsx)("span", { className: ei.nU, children: c }),
                                        (0, i.jsx)("span", { className: ei.nU, children: m }),
                                    ],
                                }),
                                (0, i.jsx)(el.A, { children: Z.intl.string(n ? Z.t.sTFApF : Z.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var er = l(335140);
function ed(e) {
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
    let _ = l ?? t,
        v = a ? void 0 : _.next_tier,
        b = a ? void 0 : _.current_tier,
        N = null != v ? _.tiers.find((e) => e.key === v) : void 0,
        p = null != b ? _.tiers.find((e) => e.key === b) : void 0,
        y = a ? void 0 : _.progress?.[0],
        f = y?.threshold ?? N?.requirements[0]?.threshold ?? null,
        w = !a && _.owned && null != N,
        E = a || (0, D.uJ)(_.leveling_instructions) || w ? void 0 : _.leveling_instructions,
        A = N?.name != null ? Z.intl.formatToPlainString(Z.t["Jn+COZ"], { tier_name: N.name }) : void 0,
        T = d ? Z.intl.string(Z.t["065Hig"]) : Z.intl.string(Z.t.MylOvg),
        I = a ? t : _,
        U = p?.complex_icon_static_url ?? p?.simple_icon_url,
        S = N?.complex_icon_static_url ?? N?.simple_icon_url,
        O = !(0, D.uJ)(y?.progress_helper_text),
        k = null != A ? { "aria-labelledby": x } : { "aria-label": Z.intl.string(Z.t.Uwhb1l) };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != E && (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: E }),
            w &&
                (0, i.jsxs)("div", {
                    className: er.ES,
                    children: [
                        null != U && (0, i.jsx)("img", { className: er.Tw, src: U, alt: "", "aria-hidden": !0 }),
                        (0, i.jsxs)("div", {
                            className: er.Bd,
                            children: [
                                null != A && (0, i.jsx)(u.E, { id: x, variant: "text-sm/medium", children: A }),
                                null != f
                                    ? (0, i.jsx)(X.z, {
                                          value: y?.current ?? 0,
                                          maxValue: f,
                                          size: "md",
                                          valueLabel: y?.progress_helper_text,
                                          className: er.hr,
                                          ...k,
                                      })
                                    : null != y &&
                                      (0, i.jsx)(X.z, { isIndeterminate: !0, size: "md", className: er.hr, ...k }),
                                O &&
                                    (0, i.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: y?.progress_helper_text,
                                    }),
                            ],
                        }),
                        null != S && (0, i.jsx)("img", { className: er.Tw, src: S, alt: "", "aria-hidden": !0 }),
                    ],
                }),
            w
                ? (0, i.jsxs)("div", {
                      className: er.JC,
                      children: [
                          (0, i.jsx)("div", {
                              className: j()(er.ne, d && er.GB),
                              id: g,
                              ref: h,
                              children: (0, i.jsx)("div", {
                                  className: er.zL,
                                  inert: !d,
                                  children: (0, i.jsxs)("div", {
                                      className: er.GA,
                                      children: [
                                          (0, i.jsx)(C.c, { className: er.yF }),
                                          (0, i.jsx)(es, {
                                              badge: I,
                                              isViewingOtherUser: a,
                                              targetUsername: s,
                                              isViewerOnUpgradeableNitro: r,
                                              hideLabel: !0,
                                          }),
                                      ],
                                  }),
                              }),
                          }),
                          (0, i.jsxs)(G.D, {
                              className: er.tw,
                              "aria-expanded": d,
                              "aria-controls": g,
                              onClick: () => c(!d),
                              children: [
                                  (0, i.jsx)(u.E, {
                                      className: er.Yi,
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: T,
                                  }),
                                  (0, i.jsx)(ee.a, {
                                      size: "sm",
                                      color: "currentColor",
                                      "aria-hidden": !0,
                                      className: j()(er.ai, d && er.hg),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, i.jsx)(es, { badge: I, isViewingOtherUser: a, targetUsername: s, isViewerOnUpgradeableNitro: r }),
        ],
    });
}
var ec = l(536001),
    eo = l(260981),
    eu = l(540418),
    em = l(907085),
    eg = l(179820),
    ex = l(174459),
    eh = l(652215);
function e_(e) {
    let { actionName: t, badge: l, displayedUserId: i, isSociallyNavigated: n } = e,
        a = x.default.getCurrentUser()?.id,
        s = null != l && null != a ? v.Ay.getBadgeById(l.badge_id, a) : void 0,
        r = null != l && null != a ? v.Ay.getRemainingToNextTier(l.badge_id, a) : void 0,
        d = null != i ? v.Ay.getBadges(i).filter((e) => e.owned).length : void 0;
    ex.default.track(eh.HAw.BADGE_DIRECTORY_ACTION, {
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
var ev = l(202541);
function eb(e) {
    let { earnedDateText: t, label: l } = e;
    return (0, i.jsxs)("div", {
        className: j()(H.AX, H.aS),
        children: [
            (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-default", className: H.NM, children: t }),
            (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", className: H.MZ, children: l }),
        ],
    });
}
function ej(e) {
    let { rarityBadgeProps: t } = e;
    return (0, i.jsxs)("div", {
        className: j()(H.AX, H.sn),
        children: [
            (0, i.jsx)(y.E, { ...t }),
            (0, i.jsx)(u.E, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: Z.intl.string(Z.t["phYZe+"]),
            }),
        ],
    });
}
function eN() {
    return (0, i.jsx)(p.m, {
        text: Z.intl.string(Z.t.goKu4e),
        children: (0, i.jsxs)("span", {
            className: H.Gb,
            children: [
                (0, i.jsx)(f.m, { size: "xxs", color: "currentColor", className: H.LS, "aria-hidden": !0 }),
                (0, i.jsx)(u.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "none",
                    children: Z.intl.string(Z.t.oW0eUd),
                }),
            ],
        }),
    });
}
function ep(e) {
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
                : Z.intl.string(Z.t.uHtDcT)
            : a && null != s
              ? Z.intl.formatToPlainString(Z.t.Eo5Cnp, { username: Y(s) })
              : i.owned
                ? c
                : Z.intl.string(Z.t.uHtDcT)),
        !n)
    ) {
        let e = !a && r && null != s;
        a && d
            ? (l = Z.intl.string(Z.t.yxEAGH))
            : e && (l = Z.intl.formatToPlainString(Z.t["9GNsge"], { username: Y(s) }));
    }
    return { statusText: t, toggleText: l };
}
function ey() {
    return (0, i.jsx)(O.A, { height: 3, width: 3, "aria-hidden": "true", className: H.zN });
}
function ef(e) {
    let { segments: t } = e;
    return 0 === t.length
        ? null
        : (0, i.jsx)("div", {
              className: H.U3,
              children: t.map((e, t) => {
                  let { key: l, node: n } = e;
                  return (0, i.jsxs)("span", { className: H.Hq, children: [t > 0 && (0, i.jsx)(ey, {}), n] }, l);
              }),
          });
}
function ew(e) {
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
        m = (0, D.uJ)(t.info_label) ? void 0 : t.info_label,
        g = (0, M.HW)(t.badge_id),
        { statusText: x, toggleText: h } = ep({
            badge: t,
            isOwnProfile: l,
            isViewingOtherUser: n,
            targetUsername: a,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
        }),
        _ = [];
    g && _.push({ key: "beta", node: (0, i.jsx)(eN, {}) }),
        null != x &&
            _.push({
                key: "status",
                node: (0, i.jsxs)("span", {
                    className: H.pC,
                    children: [
                        !l && null != s && (0, i.jsx)(w.eu, { src: s, size: $._3.SIZE_16, "aria-hidden": !0 }),
                        (0, i.jsx)(u.E, {
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: H.$L,
                            children: x,
                        }),
                    ],
                }),
            }),
        null != m &&
            _.push({
                key: "info",
                node: (0, i.jsx)(u.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    className: H.$L,
                    children: m,
                }),
            });
    let v = _.length >= 3 && null != h,
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
        j = v || null == b ? _ : [..._, b];
    return 0 === j.length && null == b
        ? null
        : (0, i.jsxs)("div", {
              className: H.rI,
              children: [(0, i.jsx)(ef, { segments: j }), v && null != b && (0, i.jsx)(ef, { segments: [b] })],
          });
}
function eE(e) {
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
        { statusText: m, toggleText: g } = ep({
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
                className: H.bn,
                children: [
                    x &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != s && (0, i.jsx)(w.eu, { src: s, size: $._3.SIZE_16, "aria-hidden": !0 }),
                                (0, i.jsx)(u.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: H.CT,
                                    children: m,
                                }),
                                null != g &&
                                    (0, i.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        className: H.CT,
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
function eA(e) {
    let t,
        l,
        a,
        r,
        c,
        g,
        {
            badge: h,
            viewerBadge: _,
            onClose: b,
            isOwnProfile: p,
            isViewingOtherUser: y,
            targetUsername: f,
            displayedUserId: w,
            targetOwnsBadge: E,
            viewerOwnsBadge: O,
            isMilestone2Enabled: z,
            onToggleViewedUser: V,
            onViewOwnCatalog: F,
        } = e,
        G = L(w, y, 32),
        P = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let l = e.owned ? e.current_tier : e.next_tier;
            return (null != l ? t.find((e) => e.key === l) : void 0) ?? t[0];
        })(h),
        $ = (0, s.bG)([S.Ay], () => S.Ay.useReducedMotion)
            ? void 0
            : (P?.complex_icon_animated_url ?? h.complex_icon_animated_url),
        Y = P?.complex_icon_static_url ?? h.complex_icon_static_url,
        q = P?.simple_icon_url ?? h.simple_icon_url,
        Q = $ ?? Y ?? q,
        W =
            (function (e) {
                if (null == e) return null;
                switch (e) {
                    case ec.x.COMMON:
                        return { type: { text: Z.intl.string(Z.t.L0K5ci) }, variant: "rarity-common", icon: eo.p };
                    case ec.x.RARE:
                        return { type: { text: Z.intl.string(Z.t["sTx/5z"]) }, variant: "rarity-rare", icon: eu.A };
                    case ec.x.EPIC:
                        return { type: { text: Z.intl.string(Z.t.RD8RiN) }, variant: "rarity-epic", icon: em.b };
                    case ec.x.MYTHIC:
                        return { type: { text: Z.intl.string(Z.t.vqc1ol) }, variant: "rarity-mythic", icon: eg.O };
                    default:
                        return null;
                }
            })(P?.rarity ?? h.rarity) ?? void 0,
        K = (0, M.Om)(h.badge_id),
        X = h.badge_id === N.$.PREMIUM_TENURE,
        ee = X ? (P?.name ?? P?.key) : P?.name,
        et = X ? Z.intl.string(Z.t.Ipxkog) : h.name;
    X ? (r = null != ee ? `${et} ${ee}` : et) : null != ee ? ((a = et), (r = ee)) : (r = et);
    let el = (0, v.H5)(h),
        ei = h.owned
            ? (function (e) {
                  if (null == e) return;
                  let t = new Date(e);
                  if (!Number.isNaN(t.getTime()))
                      return t.toLocaleDateString(Z.intl.currentLocale, {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                      });
              })(el)
            : void 0,
        en = ((l = null == (t = h.tiers?.[0]?.key) || P?.key === t), Z.intl.string(l ? Z.t.WDhIz2 : Z.t.wYaDmz)),
        ea = z && null != ei,
        er = null != W,
        ex = null;
    z && (ea || er)
        ? (ex = (0, i.jsxs)("div", {
              className: j()(H.$S, (!ea || !er) && H.jQ),
              children: [
                  ea && (0, i.jsx)(eb, { earnedDateText: ei, label: en }),
                  er && (0, i.jsx)(ej, { rarityBadgeProps: W }),
              ],
          }))
        : er && (ex = (0, i.jsx)(ej, { rarityBadgeProps: W })),
        ea ||
            (c =
                z || null == el
                    ? Z.intl.string(Z.t.sTFApF)
                    : Z.intl.formatToPlainString(Z.t["0aEh2a"], { date: new Date(el) }));
    let eN = _?.owned === !0 && (_.tiers?.length ?? 0) > 0 && null == _.next_tier,
        ep = x.default.getCurrentUser()?.premiumType,
        ey = X && (ep === ev.PremiumTypes.TIER_0 || ep === ev.PremiumTypes.TIER_1);
    g = eN ? Z.intl.string(Z.t.jY5xAL) : ey ? Z.intl.string(Z.t.qkwSSp) : (_?.description ?? h.description);
    let ef = n.useCallback(() => {
            null != K &&
                (e_({
                    actionName: "primary_badge_action_clicked",
                    badge: h,
                    displayedUserId: w,
                    isSociallyNavigated: y,
                }),
                b(),
                U.A.popAll(),
                K.ctaAction());
        }, [h, w, y, K, b]),
        eA = (0, M.ie)(h.badge_id) && !h.is_earnable,
        eT =
            !y || h.is_earnable || O
                ? null
                : (0, i.jsx)(A.w, { type: "info", children: Z.intl.format(Z.t.vFekBs, { onViewBadges: F }) }),
        eI = (0, s.bG)([R.A], () => R.A.hasConsented(eh.YAq.PERSONALIZATION)),
        eC = z && (0, M.wM)(h.badge_id) && !y && !eI;
    return (0, i.jsx)(T.F, {
        forceLevel: 2,
        children: (0, i.jsx)("div", {
            id: M.hJ,
            role: "tabpanel",
            "aria-labelledby": J(h.badge_id),
            className: H.SV,
            children: (0, i.jsxs)(I.d_, {
                className: H.C9,
                children: [
                    (0, i.jsx)("div", { className: H.Gw, children: (0, i.jsx)(d.J, { onClick: b, size: "sm" }) }),
                    null != Q &&
                        (0, i.jsx)("img", {
                            className: j()(H.y2, null != $ && Q === $ && H.hu),
                            src: Q,
                            alt: "",
                            "aria-hidden": !0,
                        }),
                    (0, i.jsxs)("div", {
                        className: H.OU,
                        children: [
                            (0, i.jsxs)("div", {
                                className: H.cQ,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: H.nj,
                                        children: [
                                            (0, i.jsxs)(o.D, {
                                                variant: "display-sm",
                                                color: "text-strong",
                                                className: j()(H._r, X && H.tN),
                                                children: [
                                                    null != a &&
                                                        (0, i.jsx)(u.E, {
                                                            tag: "span",
                                                            variant: "text-sm/medium",
                                                            color: "text-subtle",
                                                            className: H.$g,
                                                            children: a,
                                                        }),
                                                    r,
                                                ],
                                            }),
                                            z &&
                                                (0, i.jsx)(ew, {
                                                    badge: h,
                                                    isOwnProfile: p,
                                                    isViewingOtherUser: y,
                                                    targetUsername: f,
                                                    viewedAvatarSrc: G,
                                                    targetOwnsBadge: E,
                                                    viewerOwnsBadge: O,
                                                    unlockedStatusText: c,
                                                    onToggleViewedUser: V,
                                                }),
                                        ],
                                    }),
                                    !z &&
                                        (0, i.jsx)(eE, {
                                            badge: h,
                                            isOwnProfile: p,
                                            isViewingOtherUser: y,
                                            targetUsername: f,
                                            viewedAvatarSrc: G,
                                            targetOwnsBadge: E,
                                            viewerOwnsBadge: O,
                                            unlockedStatusText: c,
                                            onToggleViewedUser: V,
                                        }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: H.oA,
                                children: [
                                    eC &&
                                        (0, i.jsx)(A.w, {
                                            type: "info",
                                            children: Z.intl.format(Z.t.Zh44ni, {
                                                onGoToSettings: () =>
                                                    (0, B.openUserSettings)(k.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                            }),
                                        }),
                                    ex,
                                    !(0, D.uJ)(g) &&
                                        (0, i.jsxs)("div", {
                                            className: H.d9,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: H.E4,
                                                    children: [
                                                        (0, i.jsxs)("div", {
                                                            className: H.jv,
                                                            children: [
                                                                eA &&
                                                                    (0, i.jsx)(u.E, {
                                                                        variant: "text-xs/medium",
                                                                        color: "text-subtle",
                                                                        className: H.c$,
                                                                        children: Z.intl.string(Z.t["/Gmn3f"]),
                                                                    }),
                                                                (0, i.jsx)(u.E, {
                                                                    variant: "text-sm/medium",
                                                                    color: "text-default",
                                                                    className: H.ij,
                                                                    children: g,
                                                                }),
                                                            ],
                                                        }),
                                                        null != K &&
                                                            (0, i.jsx)(m.$, {
                                                                variant: ey
                                                                    ? "expressive"
                                                                    : O
                                                                      ? "secondary"
                                                                      : X
                                                                        ? "expressive"
                                                                        : "primary",
                                                                size: "sm",
                                                                onClick: ef,
                                                                text: K.ctaLabel({
                                                                    owned: O,
                                                                    isViewerOnUpgradeableNitro: ey,
                                                                }),
                                                            }),
                                                    ],
                                                }),
                                                (h.tiers?.length ?? 0) > 0 &&
                                                    (0, i.jsxs)("div", {
                                                        className: H.cJ,
                                                        children: [
                                                            (0, i.jsx)(C.c, {}),
                                                            z
                                                                ? (0, i.jsx)(ed, {
                                                                      badge: h,
                                                                      viewerBadge: _,
                                                                      isViewingOtherUser: y,
                                                                      targetUsername: f,
                                                                      isViewerOnUpgradeableNitro: ey,
                                                                  })
                                                                : (0, i.jsx)(es, {
                                                                      badge: y ? h : (_ ?? h),
                                                                      isViewingOtherUser: y,
                                                                      targetUsername: f,
                                                                      isViewerOnUpgradeableNitro: ey,
                                                                  }),
                                                        ],
                                                    }),
                                                null != eT && (0, i.jsx)("div", { className: H.Z6, children: eT }),
                                            ],
                                        }),
                                    (0, D.uJ)(g) && eT,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var eT = l(470739);
function eI(e) {
    let {
            transitionState: t,
            onClose: l,
            initialBadgeId: b,
            targetUserId: j,
            targetUsername: N,
            viewingCurrentUserBadges: p,
        } = e,
        y = (0, s.bG)([x.default], () => x.default.getCurrentUser()?.id),
        f = (0, _.VV)({ location: "BadgeDirectoryModal" }),
        w = null == j || j === y,
        E = !w && null != j && !0 !== p,
        A = E ? j : y,
        T = null != A ? `viewed_user:${E ? "other" : "self"}` : void 0,
        [I, C] = n.useState(b ?? null),
        U = (0, s.bG)([v.Ay], () => (null != A ? v.Ay.getBadges(A) : []), [A]),
        S = (0, s.bG)([v.Ay], () => null != A && v.Ay.hasCatalogFor(A), [A]),
        O = (0, s.bG)([v.Ay], () => v.Ay.hasCatalogFetchErrorFor(A), [A]);
    n.useEffect(() => {
        null == A || v.Ay.hasCatalogFor(A) || (0, h.R)(A);
        let e = E ? y : j;
        w || null == e || v.Ay.hasCatalogFor(e) || (0, h.R)(e);
    }, [A, w, E, y, j]),
        n.useEffect(() => {
            null != T && g.A.increment({ name: a.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [T] });
        }, [T]);
    let k = n.useMemo(() => {
            let { earnable: e, owned: t } = W(U);
            return E ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [U, E]),
        B = null != I && null != A ? v.Ay.getBadgeById(I, A) : void 0,
        R = null != k && null != A ? v.Ay.getBadgeById(k, A) : void 0,
        D = B ?? R,
        z = !S && !O,
        V = !S && O;
    n.useEffect(() => {
        V && null != T && g.A.increment({ name: a.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [T] });
    }, [V, T]);
    let F = (0, s.bG)([v.Ay], () => null != j && null != D && (v.Ay.getBadgeById(D.badge_id, j)?.owned ?? !1), [D, j]),
        G = (0, s.bG)([v.Ay], () => (null != y && null != D ? v.Ay.getBadgeById(D.badge_id, y) : void 0), [D, y]),
        P = G?.owned ?? !1,
        L = n.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, eT._)({ ...e, stackingBehavior: "replace" }).then(() => {
                    l();
                });
            },
            [l],
        ),
        M = n.useCallback(() => {
            null != j &&
                null != D &&
                (E
                    ? L({
                          initialBadgeId: D.badge_id,
                          targetUserId: j,
                          targetUsername: N,
                          viewingCurrentUserBadges: !0,
                      })
                    : L({ initialBadgeId: D.badge_id, targetUserId: j, targetUsername: N }));
        }, [E, D, L, j, N]),
        $ = n.useCallback(() => {
            null != y &&
                null != j &&
                (e_({ actionName: "view_your_badges_pressed", badge: D, displayedUserId: A, isSociallyNavigated: E }),
                L({ targetUserId: j, targetUsername: N, viewingCurrentUserBadges: !0 }));
        }, [y, A, E, D, L, j, N]),
        J = n.useCallback(() => {
            null != A && (0, h.R)(A, { isRetry: !0 });
        }, [A]),
        Y = n.useCallback(() => {
            e_({ actionName: "badge_directory_closed", badge: D, displayedUserId: A, isSociallyNavigated: E }), l();
        }, [A, E, l, D]),
        q = D?.badge_id;
    return (
        n.useEffect(() => {
            null != D &&
                e_({ actionName: "badge_detail_viewed", badge: D, displayedUserId: A, isSociallyNavigated: E });
        }, [q, A, E]),
        (0, i.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": Z.intl.string(Z.t.PEjP4L),
            transitionState: t,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: H.CR,
            children: (0, i.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: H.jE,
                children: [
                    (z || V || null == D) &&
                        (0, i.jsx)("div", { className: H.b, children: (0, i.jsx)(d.J, { onClick: Y, size: "sm" }) }),
                    z
                        ? (0, i.jsx)("div", { className: H.Lq, children: (0, i.jsx)(c.y, {}) })
                        : V
                          ? (0, i.jsxs)("div", {
                                className: H.IU,
                                children: [
                                    (0, i.jsx)(o.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: Z.intl.string(Z.t.iufib1),
                                    }),
                                    (0, i.jsx)(u.E, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        className: H.TQ,
                                        children: Z.intl.string(Z.t.eAn6z2),
                                    }),
                                    (0, i.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: J,
                                        text: Z.intl.string(Z.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(K, {
                                        selectedBadgeId: D?.badge_id ?? null,
                                        onSelectBadge: C,
                                        displayedUserId: A,
                                        isViewingOtherUser: E,
                                        targetUsername: N,
                                        onViewOwnCatalog: $,
                                    }),
                                    null != D &&
                                        (0, i.jsx)(eA, {
                                            badge: D,
                                            viewerBadge: G,
                                            onClose: Y,
                                            isOwnProfile: w,
                                            isViewingOtherUser: E,
                                            targetUsername: N,
                                            displayedUserId: A,
                                            targetOwnsBadge: F,
                                            viewerOwnsBadge: P,
                                            isMilestone2Enabled: f,
                                            onToggleViewedUser: M,
                                            onViewOwnCatalog: $,
                                        }),
                                ],
                            }),
                ],
            }),
        })
    );
}
