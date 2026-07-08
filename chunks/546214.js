l.d(t, { default: () => eI });
var n = l(627968),
    i = l(64700),
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
    C = l(364522),
    I = l(404778),
    U = l(982168),
    S = l(775602),
    k = l(640708),
    O = l(780964),
    B = l(766075),
    R = l(153488),
    D = l(240248),
    z = l(837381),
    V = l(887129),
    F = l(741918),
    G = l(939249),
    P = l(486020);
function L(e, t, l) {
    let n = (0, s.bG)([x.default], () => (null != e ? x.default.getUser(e) : void 0), [e]);
    if (null != n && t) return (0, P.ku)({ id: n.id, avatar: n.avatar, discriminator: n.discriminator }, !1, l);
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
        m = i.useRef(null);
    return (0, n.jsx)(G.D, {
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
            (0, n.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: H.pW }),
    });
}
function Q(e) {
    let { label: t, navId: l, badges: i, selectedBadgeId: a, onSelectBadge: s } = e,
        r = (0, V.Ay)({
            id: l,
            isEnabled: !0,
            orientation: F.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, n.jsxs)("div", {
        className: H.zE,
        children: [
            "heading" === t.type &&
                (0, n.jsx)(o.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, n.jsx)(z.hD, {
                navigator: r,
                children: (0, n.jsx)(z.PR, {
                    children: (e) =>
                        (0, n.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: H.yq,
                            children: i.map((e, t) =>
                                (0, n.jsx)(
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
    for (let n of e) n.owned ? l.push(n) : n.is_earnable && t.push(n);
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
        { earnable: x, owned: h } = i.useMemo(() => W(g), [g]),
        _ = L(a, r, 48),
        b = null != d ? Y(d) : null,
        j = null != d && b !== d,
        N =
            null != b && j && null != _
                ? (0, n.jsxs)("span", {
                      className: H._p,
                      children: [(0, n.jsx)(w.eu, { src: _, size: $._3.SIZE_24, "aria-hidden": !0 }), b],
                  })
                : b,
        p = r && null != N ? Z.intl.format(Z.t.EIcwoe, { username: N }) : Z.intl.string(Z.t.UqnlQF),
        y = r && null != d ? Z.intl.string(Z.t["75s2Rq"]) : Z.intl.string(Z.t["62xU4E"]),
        f = r && null != d ? Z.intl.formatToPlainString(Z.t.BCjSZy, { username: d }) : Z.intl.string(Z.t.UqnlQF);
    return (0, n.jsx)("div", {
        className: H.ws,
        children: (0, n.jsxs)(T.F, {
            component: (0, n.jsxs)("div", {
                className: H.NG,
                children: [
                    (0, n.jsxs)("div", {
                        className: H.kc,
                        children: [
                            !j && null != _ && (0, n.jsx)(w.eu, { src: _, size: $._3.SIZE_24, "aria-hidden": !0 }),
                            (0, n.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: p }),
                        ],
                    }),
                    (0, n.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", children: y }),
                ],
            }),
            children: [
                (0, n.jsxs)(C.Ip, {
                    className: H.hG,
                    children: [
                        h.length > 0 &&
                            (0, n.jsx)(Q, {
                                label: { type: "aria", text: f },
                                navId: "badge-directory-owned",
                                badges: h,
                                selectedBadgeId: t,
                                onSelectBadge: l,
                            }),
                        !r &&
                            x.length > 0 &&
                            (0, n.jsx)(Q, {
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
                    (0, n.jsx)("div", {
                        className: H.HO,
                        children: (0, n.jsx)(m.$, {
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
    et = l(770178),
    el = l(194261),
    en = l(140735),
    ei = l(899696);
function ea(e) {
    if (null == e || "" === e) return null;
    let t = new Date(e);
    return Number.isNaN(t.getTime()) ? null : t;
}
function es(e) {
    return null == e ? null : e.toLocaleDateString(Z.intl.currentLocale, { month: "short", year: "numeric" });
}
function er(e) {
    let {
            badge: t,
            isViewingOtherUser: l,
            targetUsername: a,
            isViewerOnUpgradeableNitro: s = !1,
            hideLabel: r = !1,
        } = e,
        d = es(ea(t.obtained_at)) ?? Z.intl.string(Z.t.sTFApF),
        c = i.useId(),
        o = l && null != a,
        m = t.badge_id === N.$.PREMIUM_TENURE ? Z.intl.string(s ? Z.t["5WS9pL"] : Z.t.crwYbF) : null,
        g = o ? Z.intl.formatToPlainString(Z.t.KyTwIh, { username: a }) : m,
        x = null != g && "" !== g;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            x &&
                !r &&
                (0, n.jsxs)("div", {
                    className: ei.u4,
                    children: [
                        s &&
                            !o &&
                            (0, n.jsx)(el.X, {
                                size: "xxs",
                                color: "currentColor",
                                className: ei.ZU,
                                "aria-hidden": !0,
                            }),
                        (0, n.jsx)(u.E, { id: c, variant: "text-xs/medium", color: "text-subtle", children: g }),
                    ],
                }),
            (0, n.jsx)("div", {
                className: ei.SV,
                role: "list",
                "aria-labelledby": x && !r ? c : void 0,
                children: t.tiers.map((e) => {
                    let i = e.owned,
                        a = !i && t.owned,
                        r = e.complex_icon_static_url ?? e.simple_icon_url,
                        c = e.name,
                        o = t.tier_obtained_at?.[e.key],
                        m = (function (e) {
                            let {
                                tier: t,
                                isUnlocked: l,
                                isViewingOtherUser: n,
                                isViewerOnUpgradeableNitro: i,
                                tierObtainedAt: a,
                                badgeObtainedAtText: s,
                            } = e;
                            return l
                                ? n
                                    ? Z.intl.string(Z.t.sTFApF)
                                    : (es(ea(a)) ?? s)
                                : i && !n
                                  ? Z.intl.string(Z.t.VPu695)
                                  : (t.milestone_text ?? "");
                        })({
                            tier: e,
                            isUnlocked: i,
                            isViewingOtherUser: l,
                            isViewerOnUpgradeableNitro: s,
                            tierObtainedAt: o,
                            badgeObtainedAtText: d,
                        });
                    return (0, n.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: j()(ei.zh, a && ei.ZF),
                            children: [
                                null != r &&
                                    (0, n.jsx)("img", { className: ei.Hw, src: r, alt: "", "aria-hidden": !0 }),
                                (0, n.jsxs)(u.E, {
                                    variant: "text-xxs/medium",
                                    color: i ? "text-default" : "text-muted",
                                    className: ei.hI,
                                    children: [
                                        null != c && (0, n.jsx)("span", { className: ei.nU, children: c }),
                                        (0, n.jsx)("span", { className: ei.nU, children: m }),
                                    ],
                                }),
                                (0, n.jsx)(en.A, { children: Z.intl.string(i ? Z.t.sTFApF : Z.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var ed = l(335140);
function ec(e) {
    let { badge: t, viewerBadge: l, isViewingOtherUser: a, targetUsername: s, isViewerOnUpgradeableNitro: r } = e,
        [d, c] = i.useState(!1),
        [o, m] = i.useState(t.badge_id),
        g = i.useId(),
        x = i.useId(),
        h = i.useRef(null),
        _ = i.useRef(null);
    t.badge_id !== o && (m(t.badge_id), c(!1));
    let v = i.useCallback(() => {
            let e = h.current;
            null != e &&
                e.contains(document.activeElement) &&
                e.scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" });
        }, []),
        b = i.useCallback(
            (e) => {
                null != e.target && d && v();
            },
            [d, v],
        );
    (0, et.g)(_, b, [d], { enabled: d });
    let N = l ?? t,
        p = a ? void 0 : N.next_tier,
        y = a ? void 0 : N.current_tier,
        f = null != p ? N.tiers.find((e) => e.key === p) : void 0,
        w = null != y ? N.tiers.find((e) => e.key === y) : void 0,
        E = a ? void 0 : N.progress?.[0],
        A = E?.threshold ?? f?.requirements[0]?.threshold ?? null,
        T = !a && N.owned && null != f,
        C = a || (0, D.uJ)(N.leveling_instructions) || T ? void 0 : N.leveling_instructions,
        U = f?.name != null ? Z.intl.formatToPlainString(Z.t["Jn+COZ"], { tier_name: f.name }) : void 0,
        S = d ? Z.intl.string(Z.t["065Hig"]) : Z.intl.string(Z.t.MylOvg),
        k = a ? t : N,
        O = w?.complex_icon_static_url ?? w?.simple_icon_url,
        B = f?.complex_icon_static_url ?? f?.simple_icon_url,
        R = !(0, D.uJ)(E?.progress_helper_text),
        z = null != U ? { "aria-labelledby": x } : { "aria-label": Z.intl.string(Z.t.Uwhb1l) };
    return (0, n.jsxs)(n.Fragment, {
        children: [
            null != C && (0, n.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: C }),
            T &&
                (0, n.jsxs)("div", {
                    className: ed.ES,
                    children: [
                        null != O && (0, n.jsx)("img", { className: ed.Tw, src: O, alt: "", "aria-hidden": !0 }),
                        (0, n.jsxs)("div", {
                            className: ed.Bd,
                            children: [
                                null != U && (0, n.jsx)(u.E, { id: x, variant: "text-sm/medium", children: U }),
                                null != A
                                    ? (0, n.jsx)(X.z, {
                                          value: E?.current ?? 0,
                                          maxValue: A,
                                          size: "md",
                                          valueLabel: E?.progress_helper_text,
                                          className: ed.hr,
                                          ...z,
                                      })
                                    : null != E &&
                                      (0, n.jsx)(X.z, { isIndeterminate: !0, size: "md", className: ed.hr, ...z }),
                                R &&
                                    (0, n.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: E?.progress_helper_text,
                                    }),
                            ],
                        }),
                        null != B && (0, n.jsx)("img", { className: ed.Tw, src: B, alt: "", "aria-hidden": !0 }),
                    ],
                }),
            T
                ? (0, n.jsxs)("div", {
                      className: ed.JC,
                      children: [
                          (0, n.jsx)("div", {
                              ref: _,
                              className: j()(ed.ne, d && ed.GB),
                              id: g,
                              children: (0, n.jsx)("div", {
                                  className: ed.zL,
                                  inert: !d,
                                  children: (0, n.jsxs)("div", {
                                      className: ed.GA,
                                      children: [
                                          (0, n.jsx)(I.c, { className: ed.yF }),
                                          (0, n.jsx)(er, {
                                              badge: k,
                                              isViewingOtherUser: a,
                                              targetUsername: s,
                                              isViewerOnUpgradeableNitro: r,
                                              hideLabel: !0,
                                          }),
                                      ],
                                  }),
                              }),
                          }),
                          (0, n.jsxs)(G.D, {
                              innerRef: h,
                              className: ed.tw,
                              "aria-expanded": d,
                              "aria-controls": g,
                              onClick: () => c(!d),
                              children: [
                                  (0, n.jsx)(u.E, {
                                      className: ed.Yi,
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: S,
                                  }),
                                  (0, n.jsx)(ee.a, {
                                      size: "sm",
                                      color: "currentColor",
                                      "aria-hidden": !0,
                                      className: j()(ed.ai, d && ed.hg),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, n.jsx)(er, { badge: k, isViewingOtherUser: a, targetUsername: s, isViewerOnUpgradeableNitro: r }),
        ],
    });
}
var eo = l(536001),
    eu = l(260981),
    em = l(540418),
    eg = l(907085),
    ex = l(179820),
    eh = l(174459),
    e_ = l(652215);
function ev(e) {
    let { actionName: t, badge: l, displayedUserId: n, isSociallyNavigated: i } = e,
        a = x.default.getCurrentUser()?.id,
        s = null != l && null != a ? v.Ay.getBadgeById(l.badge_id, a) : void 0,
        r = null != l && null != a ? v.Ay.getRemainingToNextTier(l.badge_id, a) : void 0,
        d = null != n ? v.Ay.getBadges(n).filter((e) => e.owned).length : void 0;
    eh.default.track(e_.HAw.BADGE_DIRECTORY_ACTION, {
        badge_action: t,
        badge_id: l?.badge_id,
        badge_tier: null != l ? ((l.owned ? l.current_tier : l.next_tier) ?? l.tiers?.[0]?.key) : void 0,
        badge_owner_id: n,
        is_owned: s?.owned ?? !1,
        progress_to_next_tier: r,
        is_earnable: l?.is_earnable ?? !1,
        is_socially_navigated: i,
        total_badges_owned: d,
    });
}
var eb = l(202541);
function ej(e) {
    let { earnedDateText: t, label: l } = e;
    return (0, n.jsxs)("div", {
        className: j()(H.AX, H.aS),
        children: [
            (0, n.jsx)(u.E, { variant: "text-xs/medium", color: "text-default", className: H.NM, children: t }),
            (0, n.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", className: H.MZ, children: l }),
        ],
    });
}
function eN(e) {
    let { rarityBadgeProps: t } = e;
    return (0, n.jsxs)("div", {
        className: j()(H.AX, H.sn),
        children: [
            (0, n.jsx)(y.E, { ...t }),
            (0, n.jsx)(u.E, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: Z.intl.string(Z.t["phYZe+"]),
            }),
        ],
    });
}
function ep() {
    return (0, n.jsx)(p.m, {
        text: Z.intl.string(Z.t.goKu4e),
        children: (0, n.jsxs)("span", {
            className: H.Gb,
            children: [
                (0, n.jsx)(f.m, { size: "xxs", color: "currentColor", className: H.LS, "aria-hidden": !0 }),
                (0, n.jsx)(u.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "none",
                    children: Z.intl.string(Z.t.oW0eUd),
                }),
            ],
        }),
    });
}
function ey(e) {
    let t,
        l,
        {
            badge: n,
            isOwnProfile: i,
            isViewingOtherUser: a,
            targetUsername: s,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
        } = e;
    if (
        ((t = i
            ? n.owned
                ? c
                : Z.intl.string(Z.t.uHtDcT)
            : a && null != s
              ? Z.intl.formatToPlainString(Z.t.Eo5Cnp, { username: Y(s) })
              : n.owned
                ? c
                : Z.intl.string(Z.t.uHtDcT)),
        !i)
    ) {
        let e = !a && r && null != s;
        a && d
            ? (l = Z.intl.string(Z.t.yxEAGH))
            : e && (l = Z.intl.formatToPlainString(Z.t["9GNsge"], { username: Y(s) }));
    }
    return { statusText: t, toggleText: l };
}
function ef() {
    return (0, n.jsx)(k.A, { height: 3, width: 3, "aria-hidden": "true", className: H.zN });
}
function ew(e) {
    let { segments: t } = e;
    return 0 === t.length
        ? null
        : (0, n.jsx)("div", {
              className: H.U3,
              children: t.map((e, t) => {
                  let { key: l, node: i } = e;
                  return (0, n.jsxs)("span", { className: H.Hq, children: [t > 0 && (0, n.jsx)(ef, {}), i] }, l);
              }),
          });
}
function eE(e) {
    let {
            badge: t,
            isOwnProfile: l,
            isViewingOtherUser: i,
            targetUsername: a,
            viewedAvatarSrc: s,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
            onToggleViewedUser: o,
        } = e,
        m = (0, D.uJ)(t.info_label) ? void 0 : t.info_label,
        g = (0, M.HW)(t.badge_id),
        { statusText: x, toggleText: h } = ey({
            badge: t,
            isOwnProfile: l,
            isViewingOtherUser: i,
            targetUsername: a,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
        }),
        _ = [];
    g && _.push({ key: "beta", node: (0, n.jsx)(ep, {}) }),
        null != x &&
            _.push({
                key: "status",
                node: (0, n.jsxs)("span", {
                    className: H.pC,
                    children: [
                        !l && null != s && (0, n.jsx)(w.eu, { src: s, size: $._3.SIZE_16, "aria-hidden": !0 }),
                        (0, n.jsx)(u.E, {
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
                node: (0, n.jsx)(u.E, {
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
                      node: (0, n.jsx)(E.Q, {
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
        : (0, n.jsxs)("div", {
              className: H.rI,
              children: [(0, n.jsx)(ew, { segments: j }), v && null != b && (0, n.jsx)(ew, { segments: [b] })],
          });
}
function eA(e) {
    let {
            badge: t,
            isOwnProfile: l,
            isViewingOtherUser: i,
            targetUsername: a,
            viewedAvatarSrc: s,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
            onToggleViewedUser: o,
        } = e,
        { statusText: m, toggleText: g } = ey({
            badge: t,
            isOwnProfile: l,
            isViewingOtherUser: i,
            targetUsername: a,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
        }),
        x = null != m;
    return l
        ? x
            ? (0, n.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: m })
            : null
        : x || null != g
          ? (0, n.jsxs)("div", {
                className: H.bn,
                children: [
                    x &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                null != s && (0, n.jsx)(w.eu, { src: s, size: $._3.SIZE_16, "aria-hidden": !0 }),
                                (0, n.jsx)(u.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: H.CT,
                                    children: m,
                                }),
                                null != g &&
                                    (0, n.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        className: H.CT,
                                        "aria-hidden": !0,
                                        children: "\xb7",
                                    }),
                            ],
                        }),
                    null != g &&
                        (0, n.jsx)(E.Q, {
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
function eT(e) {
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
            viewerOwnsBadge: k,
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
                    case eo.x.COMMON:
                        return { type: { text: Z.intl.string(Z.t.L0K5ci) }, variant: "rarity-common", icon: eu.p };
                    case eo.x.RARE:
                        return { type: { text: Z.intl.string(Z.t["sTx/5z"]) }, variant: "rarity-rare", icon: em.A };
                    case eo.x.EPIC:
                        return { type: { text: Z.intl.string(Z.t.RD8RiN) }, variant: "rarity-epic", icon: eg.b };
                    case eo.x.MYTHIC:
                        return { type: { text: Z.intl.string(Z.t.vqc1ol) }, variant: "rarity-mythic", icon: ex.O };
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
        en = h.owned
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
        ei = ((l = null == (t = h.tiers?.[0]?.key) || P?.key === t), Z.intl.string(l ? Z.t.WDhIz2 : Z.t.wYaDmz)),
        ea = z && null != en,
        es = null != W,
        ed = null;
    z && (ea || es)
        ? (ed = (0, n.jsxs)("div", {
              className: j()(H.$S, (!ea || !es) && H.jQ),
              children: [
                  ea && (0, n.jsx)(ej, { earnedDateText: en, label: ei }),
                  es && (0, n.jsx)(eN, { rarityBadgeProps: W }),
              ],
          }))
        : es && (ed = (0, n.jsx)(eN, { rarityBadgeProps: W })),
        ea ||
            (c =
                z || null == el
                    ? Z.intl.string(Z.t.sTFApF)
                    : Z.intl.formatToPlainString(Z.t["0aEh2a"], { date: new Date(el) }));
    let eh = _?.owned === !0 && (_.tiers?.length ?? 0) > 0 && null == _.next_tier,
        ep = x.default.getCurrentUser()?.premiumType,
        ey = X && (ep === eb.PremiumTypes.TIER_0 || ep === eb.PremiumTypes.TIER_1);
    g = eh ? Z.intl.string(Z.t.jY5xAL) : ey ? Z.intl.string(Z.t.qkwSSp) : (_?.description ?? h.description);
    let ef = i.useCallback(() => {
            null != K &&
                (ev({
                    actionName: "primary_badge_action_clicked",
                    badge: h,
                    displayedUserId: w,
                    isSociallyNavigated: y,
                }),
                b(),
                U.A.popAll(),
                K.ctaAction());
        }, [h, w, y, K, b]),
        ew = (0, M.ie)(h.badge_id) && !h.is_earnable,
        eT =
            !y || h.is_earnable || k
                ? null
                : (0, n.jsx)(A.w, { type: "info", children: Z.intl.format(Z.t.vFekBs, { onViewBadges: F }) }),
        eC = (0, s.bG)([R.A], () => R.A.hasConsented(e_.YAq.PERSONALIZATION)),
        eI = z && (0, M.wM)(h.badge_id) && !y && !eC;
    return (0, n.jsx)(T.F, {
        forceLevel: 2,
        children: (0, n.jsx)("div", {
            id: M.hJ,
            role: "tabpanel",
            "aria-labelledby": J(h.badge_id),
            className: H.SV,
            children: (0, n.jsxs)(C.d_, {
                className: H.C9,
                children: [
                    (0, n.jsx)("div", { className: H.Gw, children: (0, n.jsx)(d.J, { onClick: b, size: "sm" }) }),
                    null != Q &&
                        (0, n.jsx)("img", {
                            className: j()(H.y2, null != $ && Q === $ && H.hu),
                            src: Q,
                            alt: "",
                            "aria-hidden": !0,
                        }),
                    (0, n.jsxs)("div", {
                        className: H.OU,
                        children: [
                            (0, n.jsxs)("div", {
                                className: H.cQ,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: H.nj,
                                        children: [
                                            (0, n.jsxs)(o.D, {
                                                variant: "display-sm",
                                                color: "text-strong",
                                                className: j()(H._r, X && H.tN),
                                                children: [
                                                    null != a &&
                                                        (0, n.jsx)(u.E, {
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
                                                (0, n.jsx)(eE, {
                                                    badge: h,
                                                    isOwnProfile: p,
                                                    isViewingOtherUser: y,
                                                    targetUsername: f,
                                                    viewedAvatarSrc: G,
                                                    targetOwnsBadge: E,
                                                    viewerOwnsBadge: k,
                                                    unlockedStatusText: c,
                                                    onToggleViewedUser: V,
                                                }),
                                        ],
                                    }),
                                    !z &&
                                        (0, n.jsx)(eA, {
                                            badge: h,
                                            isOwnProfile: p,
                                            isViewingOtherUser: y,
                                            targetUsername: f,
                                            viewedAvatarSrc: G,
                                            targetOwnsBadge: E,
                                            viewerOwnsBadge: k,
                                            unlockedStatusText: c,
                                            onToggleViewedUser: V,
                                        }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: H.oA,
                                children: [
                                    eI &&
                                        (0, n.jsx)(A.w, {
                                            type: "info",
                                            children: Z.intl.format(Z.t.Zh44ni, {
                                                onGoToSettings: () =>
                                                    (0, B.openUserSettings)(O.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                            }),
                                        }),
                                    ed,
                                    !(0, D.uJ)(g) &&
                                        (0, n.jsxs)("div", {
                                            className: H.d9,
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: H.E4,
                                                    children: [
                                                        (0, n.jsxs)("div", {
                                                            className: H.jv,
                                                            children: [
                                                                ew &&
                                                                    (0, n.jsx)(u.E, {
                                                                        variant: "text-xs/medium",
                                                                        color: "text-subtle",
                                                                        className: H.c$,
                                                                        children: Z.intl.string(Z.t["/Gmn3f"]),
                                                                    }),
                                                                (0, n.jsx)(u.E, {
                                                                    variant: "text-sm/medium",
                                                                    color: "text-default",
                                                                    className: H.ij,
                                                                    children: g,
                                                                }),
                                                            ],
                                                        }),
                                                        null != K &&
                                                            (0, n.jsx)(m.$, {
                                                                variant: ey
                                                                    ? "expressive"
                                                                    : k
                                                                      ? "secondary"
                                                                      : X
                                                                        ? "expressive"
                                                                        : "primary",
                                                                size: "sm",
                                                                onClick: ef,
                                                                text: K.ctaLabel({
                                                                    owned: k,
                                                                    isViewerOnUpgradeableNitro: ey,
                                                                }),
                                                            }),
                                                    ],
                                                }),
                                                (h.tiers?.length ?? 0) > 0 &&
                                                    (0, n.jsxs)("div", {
                                                        className: H.cJ,
                                                        children: [
                                                            (0, n.jsx)(I.c, {}),
                                                            z
                                                                ? (0, n.jsx)(ec, {
                                                                      badge: h,
                                                                      viewerBadge: _,
                                                                      isViewingOtherUser: y,
                                                                      targetUsername: f,
                                                                      isViewerOnUpgradeableNitro: ey,
                                                                  })
                                                                : (0, n.jsx)(er, {
                                                                      badge: y ? h : (_ ?? h),
                                                                      isViewingOtherUser: y,
                                                                      targetUsername: f,
                                                                      isViewerOnUpgradeableNitro: ey,
                                                                  }),
                                                        ],
                                                    }),
                                                null != eT && (0, n.jsx)("div", { className: H.Z6, children: eT }),
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
var eC = l(470739);
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
        [C, I] = i.useState(b ?? null),
        U = (0, s.bG)([v.Ay], () => (null != A ? v.Ay.getBadges(A) : []), [A]),
        S = (0, s.bG)([v.Ay], () => null != A && v.Ay.hasCatalogFor(A), [A]),
        k = (0, s.bG)([v.Ay], () => v.Ay.hasCatalogFetchErrorFor(A), [A]);
    i.useEffect(() => {
        null == A || v.Ay.hasCatalogFor(A) || (0, h.R)(A);
        let e = E ? y : j;
        w || null == e || v.Ay.hasCatalogFor(e) || (0, h.R)(e);
    }, [A, w, E, y, j]),
        i.useEffect(() => {
            null != T && g.A.increment({ name: a.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [T] });
        }, [T]);
    let O = i.useMemo(() => {
            let { earnable: e, owned: t } = W(U);
            return E ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [U, E]),
        B = null != C && null != A ? v.Ay.getBadgeById(C, A) : void 0,
        R = null != O && null != A ? v.Ay.getBadgeById(O, A) : void 0,
        D = B ?? R,
        z = !S && !k,
        V = !S && k;
    i.useEffect(() => {
        V && null != T && g.A.increment({ name: a.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [T] });
    }, [V, T]);
    let F = (0, s.bG)([v.Ay], () => null != j && null != D && (v.Ay.getBadgeById(D.badge_id, j)?.owned ?? !1), [D, j]),
        G = (0, s.bG)([v.Ay], () => (null != y && null != D ? v.Ay.getBadgeById(D.badge_id, y) : void 0), [D, y]),
        P = G?.owned ?? !1,
        L = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, eC._)({ ...e, stackingBehavior: "replace" }).then(() => {
                    l();
                });
            },
            [l],
        ),
        M = i.useCallback(() => {
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
        $ = i.useCallback(() => {
            null != y &&
                null != j &&
                (ev({ actionName: "view_your_badges_pressed", badge: D, displayedUserId: A, isSociallyNavigated: E }),
                L({ targetUserId: j, targetUsername: N, viewingCurrentUserBadges: !0 }));
        }, [y, A, E, D, L, j, N]),
        J = i.useCallback(() => {
            null != A && (0, h.R)(A, { isRetry: !0 });
        }, [A]),
        Y = i.useCallback(() => {
            ev({ actionName: "badge_directory_closed", badge: D, displayedUserId: A, isSociallyNavigated: E }), l();
        }, [A, E, l, D]),
        q = D?.badge_id;
    return (
        i.useEffect(() => {
            null != D &&
                ev({ actionName: "badge_detail_viewed", badge: D, displayedUserId: A, isSociallyNavigated: E });
        }, [q, A, E]),
        (0, n.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": Z.intl.string(Z.t.PEjP4L),
            transitionState: t,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: H.CR,
            children: (0, n.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: H.jE,
                children: [
                    (z || V || null == D) &&
                        (0, n.jsx)("div", { className: H.b, children: (0, n.jsx)(d.J, { onClick: Y, size: "sm" }) }),
                    z
                        ? (0, n.jsx)("div", { className: H.Lq, children: (0, n.jsx)(c.y, {}) })
                        : V
                          ? (0, n.jsxs)("div", {
                                className: H.IU,
                                children: [
                                    (0, n.jsx)(o.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: Z.intl.string(Z.t.iufib1),
                                    }),
                                    (0, n.jsx)(u.E, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        className: H.TQ,
                                        children: Z.intl.string(Z.t.eAn6z2),
                                    }),
                                    (0, n.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: J,
                                        text: Z.intl.string(Z.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(K, {
                                        selectedBadgeId: D?.badge_id ?? null,
                                        onSelectBadge: I,
                                        displayedUserId: A,
                                        isViewingOtherUser: E,
                                        targetUsername: N,
                                        onViewOwnCatalog: $,
                                    }),
                                    null != D &&
                                        (0, n.jsx)(eT, {
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
