l.d(t, { default: () => ek });
var n = l(627968),
    i = l(64700),
    a = l(731738),
    s = l(17928),
    r = l(935462),
    d = l(815021),
    c = l(289873),
    o = l(297264),
    u = l(834730),
    m = l(821609),
    g = l(807393),
    x = l(287809),
    h = l(682618),
    _ = l(992526),
    b = l(982240);
l(321073);
var v = l(503698),
    j = l.n(v),
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
    S = l(982168),
    U = l(775602),
    k = l(640708),
    O = l(780964),
    B = l(766075),
    R = l(153488),
    D = l(240248),
    z = l(609782),
    F = l(837381),
    V = l(887129),
    G = l(741918),
    P = l(939249),
    M = l(486020);
function L(e, t, l) {
    let n = (0, s.bG)([x.default], () => (null != e ? x.default.getUser(e) : void 0), [e]);
    if (null != n && t) return (0, M.ku)({ id: n.id, avatar: n.avatar, discriminator: n.discriminator }, !1, l);
}
var $ = l(92111),
    Z = l(778712),
    H = l(375708),
    J = l(490308);
function Y(e) {
    return `badge-tab-${e}`;
}
function q(e) {
    let t = Array.from(e);
    return t.length > 19 ? `${t.slice(0, 19).join("")}...` : e;
}
function Q(e) {
    let { badge: t, isSelected: l, onSelect: a, itemId: s } = e,
        r = (0, F.rm)(s),
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
    return (0, n.jsx)(P.D, {
        ...r,
        innerRef: m,
        role: "tab",
        id: Y(t.badge_id),
        "aria-label": u,
        "aria-selected": l,
        "aria-controls": l ? $.hJ : void 0,
        className: j()(J.oL, l && J.xO),
        onFocus: r.onFocus,
        onClick: () => {
            m.current?.focus(), a();
        },
        children:
            null != t.simple_icon_url &&
            (0, n.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: J.pW }),
    });
}
function W(e) {
    let { label: t, navId: l, badges: i, selectedBadgeId: a, onSelectBadge: s } = e,
        r = (0, V.Ay)({
            id: l,
            isEnabled: !0,
            orientation: G.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, n.jsxs)("div", {
        className: J.zE,
        children: [
            "heading" === t.type &&
                (0, n.jsx)(o.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, n.jsx)(F.hD, {
                navigator: r,
                children: (0, n.jsx)(F.PR, {
                    children: (e) =>
                        (0, n.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: J.yq,
                            children: i.map((e, t) =>
                                (0, n.jsx)(
                                    Q,
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
function K(e) {
    let t = [],
        l = [];
    for (let n of e) n.owned ? l.push(n) : n.is_earnable && t.push(n);
    return { earnable: t, owned: l };
}
function X(e) {
    let {
            selectedBadgeId: t,
            onSelectBadge: l,
            displayedUserId: a,
            isViewingOtherUser: r,
            targetUsername: d,
            onViewOwnCatalog: c,
        } = e,
        g = (0, s.bG)([b.Ay], () => (null != a ? b.Ay.getBadges(a) : []), [a]),
        { earnable: x, owned: h } = i.useMemo(() => K(g), [g]),
        _ = L(a, r, 48),
        v = null != d ? q(d) : null,
        j = null != d && v !== d,
        N =
            null != v && j && null != _
                ? (0, n.jsxs)("span", {
                      className: J._p,
                      children: [(0, n.jsx)(w.eu, { src: _, size: Z._3.SIZE_24, "aria-hidden": !0 }), v],
                  })
                : v,
        p = r && null != N ? H.intl.format(H.t.EIcwoe, { username: N }) : H.intl.string(H.t.UqnlQF),
        y = r && null != d ? H.intl.string(H.t["75s2Rq"]) : H.intl.string(H.t["62xU4E"]),
        f = r && null != d ? H.intl.formatToPlainString(H.t.BCjSZy, { username: d }) : H.intl.string(H.t.UqnlQF);
    return (0, n.jsx)("div", {
        className: J.ws,
        children: (0, n.jsxs)(T.F, {
            component: (0, n.jsxs)("div", {
                className: J.NG,
                children: [
                    (0, n.jsxs)("div", {
                        className: J.kc,
                        children: [
                            !j && null != _ && (0, n.jsx)(w.eu, { src: _, size: Z._3.SIZE_24, "aria-hidden": !0 }),
                            (0, n.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: p }),
                        ],
                    }),
                    (0, n.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", children: y }),
                ],
            }),
            children: [
                (0, n.jsxs)(C.Ip, {
                    className: J.hG,
                    children: [
                        h.length > 0 &&
                            (0, n.jsx)(W, {
                                label: { type: "aria", text: f },
                                navId: "badge-directory-owned",
                                badges: h,
                                selectedBadgeId: t,
                                onSelectBadge: l,
                            }),
                        !r &&
                            x.length > 0 &&
                            (0, n.jsx)(W, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: H.intl.string(H.t["0YzU//"]),
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
                        className: J.HO,
                        children: (0, n.jsx)(m.$, {
                            variant: "secondary",
                            size: "sm",
                            fullWidth: !0,
                            onClick: c,
                            text: H.intl.string(H.t.msyp90),
                        }),
                    }),
            ],
        }),
    });
}
var ee = l(911608),
    et = l(847374),
    el = l(770178),
    en = l(194261),
    ei = l(140735),
    ea = l(899696);
function es(e) {
    if (null == e || "" === e) return null;
    let t = new Date(e);
    return Number.isNaN(t.getTime()) ? null : t;
}
function er(e) {
    return null == e ? null : e.toLocaleDateString(H.intl.currentLocale, { month: "short", year: "numeric" });
}
function ed(e) {
    let {
            badge: t,
            isViewingOtherUser: l,
            targetUsername: a,
            isViewerOnUpgradeableNitro: s = !1,
            hideLabel: r = !1,
        } = e,
        d = er(es(t.obtained_at)) ?? H.intl.string(H.t.sTFApF),
        c = i.useId(),
        o = l && null != a,
        m = t.badge_id === N.$.PREMIUM_TENURE ? H.intl.string(s ? H.t["5WS9pL"] : H.t.crwYbF) : null,
        g = o ? H.intl.formatToPlainString(H.t.KyTwIh, { username: a }) : m,
        x = null != g && "" !== g;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            x &&
                !r &&
                (0, n.jsxs)("div", {
                    className: ea.u4,
                    children: [
                        s &&
                            !o &&
                            (0, n.jsx)(en.X, {
                                size: "xxs",
                                color: "currentColor",
                                className: ea.ZU,
                                "aria-hidden": !0,
                            }),
                        (0, n.jsx)(u.E, { id: c, variant: "text-xs/medium", color: "text-subtle", children: g }),
                    ],
                }),
            (0, n.jsx)("div", {
                className: ea.SV,
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
                                    ? H.intl.string(H.t.sTFApF)
                                    : (er(es(a)) ?? s)
                                : i && !n
                                  ? H.intl.string(H.t.VPu695)
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
                            className: j()(ea.zh, a && ea.ZF),
                            children: [
                                null != r &&
                                    (0, n.jsx)("img", { className: ea.Hw, src: r, alt: "", "aria-hidden": !0 }),
                                (0, n.jsxs)(u.E, {
                                    variant: "text-xxs/medium",
                                    color: i ? "text-default" : "text-muted",
                                    className: ea.hI,
                                    children: [
                                        null != c && (0, n.jsx)("span", { className: ea.nU, children: c }),
                                        (0, n.jsx)("span", { className: ea.nU, children: m }),
                                    ],
                                }),
                                (0, n.jsx)(ei.A, { children: H.intl.string(i ? H.t.sTFApF : H.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var ec = l(335140);
function eo(e) {
    let { badge: t, viewerBadge: l, isViewingOtherUser: a, targetUsername: s, isViewerOnUpgradeableNitro: r } = e,
        [d, c] = i.useState(!1),
        [o, m] = i.useState(t.badge_id),
        g = i.useId(),
        x = i.useId(),
        h = i.useRef(null),
        _ = i.useRef(null);
    t.badge_id !== o && (m(t.badge_id), c(!1));
    let b = i.useCallback(() => {
            let e = h.current;
            null != e &&
                e.contains(document.activeElement) &&
                e.scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" });
        }, []),
        v = i.useCallback(
            (e) => {
                null != e.target && d && b();
            },
            [d, b],
        );
    (0, el.g)(_, v, [d], { enabled: d });
    let N = l ?? t,
        p = a ? void 0 : N.next_tier,
        y = a ? void 0 : N.current_tier,
        f = null != p ? N.tiers.find((e) => e.key === p) : void 0,
        w = null != y ? N.tiers.find((e) => e.key === y) : void 0,
        E = a ? void 0 : N.progress?.[0],
        A = E?.threshold ?? f?.requirements[0]?.threshold ?? null,
        T = !a && N.owned && null != f,
        C = a || (0, D.uJ)(N.leveling_instructions) || T ? void 0 : N.leveling_instructions,
        S = f?.name != null ? H.intl.formatToPlainString(H.t["Jn+COZ"], { tier_name: f.name }) : void 0,
        U = d ? H.intl.string(H.t["065Hig"]) : H.intl.string(H.t.MylOvg),
        k = a ? t : N,
        O = w?.complex_icon_static_url ?? w?.simple_icon_url,
        B = f?.complex_icon_static_url ?? f?.simple_icon_url,
        R = !(0, D.uJ)(E?.progress_helper_text),
        z = null != S ? { "aria-labelledby": x } : { "aria-label": H.intl.string(H.t.Uwhb1l) };
    return (0, n.jsxs)(n.Fragment, {
        children: [
            null != C && (0, n.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: C }),
            T &&
                (0, n.jsxs)("div", {
                    className: ec.ES,
                    children: [
                        null != O && (0, n.jsx)("img", { className: ec.Tw, src: O, alt: "", "aria-hidden": !0 }),
                        (0, n.jsxs)("div", {
                            className: ec.Bd,
                            children: [
                                null != S && (0, n.jsx)(u.E, { id: x, variant: "text-sm/medium", children: S }),
                                null != A
                                    ? (0, n.jsx)(ee.z, {
                                          value: E?.current ?? 0,
                                          maxValue: A,
                                          size: "md",
                                          valueLabel: E?.progress_helper_text,
                                          className: ec.hr,
                                          ...z,
                                      })
                                    : null != E &&
                                      (0, n.jsx)(ee.z, { isIndeterminate: !0, size: "md", className: ec.hr, ...z }),
                                R &&
                                    (0, n.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: E?.progress_helper_text,
                                    }),
                            ],
                        }),
                        null != B && (0, n.jsx)("img", { className: ec.Tw, src: B, alt: "", "aria-hidden": !0 }),
                    ],
                }),
            T
                ? (0, n.jsxs)("div", {
                      className: ec.JC,
                      children: [
                          (0, n.jsx)("div", {
                              ref: _,
                              className: j()(ec.ne, d && ec.GB),
                              id: g,
                              children: (0, n.jsx)("div", {
                                  className: ec.zL,
                                  inert: !d,
                                  children: (0, n.jsxs)("div", {
                                      className: ec.GA,
                                      children: [
                                          (0, n.jsx)(I.c, { className: ec.yF }),
                                          (0, n.jsx)(ed, {
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
                          (0, n.jsxs)(P.D, {
                              innerRef: h,
                              className: ec.tw,
                              "aria-expanded": d,
                              "aria-controls": g,
                              onClick: () => c(!d),
                              children: [
                                  (0, n.jsx)(u.E, {
                                      className: ec.Yi,
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: U,
                                  }),
                                  (0, n.jsx)(et.a, {
                                      size: "sm",
                                      color: "currentColor",
                                      "aria-hidden": !0,
                                      className: j()(ec.ai, d && ec.hg),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, n.jsx)(ed, { badge: k, isViewingOtherUser: a, targetUsername: s, isViewerOnUpgradeableNitro: r }),
        ],
    });
}
var eu = l(536001),
    em = l(260981),
    eg = l(540418),
    ex = l(907085),
    eh = l(179820),
    e_ = l(174459),
    eb = l(652215);
function ev(e) {
    let { actionName: t, badge: l, displayedUserId: n, isSociallyNavigated: i } = e,
        a = x.default.getCurrentUser()?.id,
        s = null != l && null != a ? b.Ay.getBadgeById(l.badge_id, a) : void 0,
        r = null != l && null != a ? b.Ay.getRemainingToNextTier(l.badge_id, a) : void 0,
        d = null != n ? b.Ay.getBadges(n).filter((e) => e.owned).length : void 0;
    e_.default.track(eb.HAw.BADGE_DIRECTORY_ACTION, {
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
var ej = l(202541);
let eN = [H.t["6zFA/T"], H.t.wzZHKl, H.t["+ED/nf"]];
function ep() {
    let e = Math.floor(Math.random() * eN.length);
    return H.intl.string(eN[e]);
}
function ey(e) {
    let { earnedDateText: t, label: l } = e;
    return (0, n.jsxs)("div", {
        className: j()(J.AX, J.aS),
        children: [
            (0, n.jsx)(u.E, { variant: "text-xs/medium", color: "text-default", className: J.NM, children: t }),
            (0, n.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", className: J.MZ, children: l }),
        ],
    });
}
function ef(e) {
    let { rarityBadgeProps: t } = e;
    return (0, n.jsxs)("div", {
        className: j()(J.AX, J.sn),
        children: [
            (0, n.jsx)(y.E, { ...t }),
            (0, n.jsx)(u.E, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: H.intl.string(H.t["phYZe+"]),
            }),
        ],
    });
}
function ew() {
    return (0, n.jsx)(p.m, {
        text: H.intl.string(H.t.goKu4e),
        children: (0, n.jsxs)("span", {
            className: J.Gb,
            children: [
                (0, n.jsx)(f.m, { size: "xxs", color: "currentColor", className: J.LS, "aria-hidden": !0 }),
                (0, n.jsx)(u.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "none",
                    children: H.intl.string(H.t.oW0eUd),
                }),
            ],
        }),
    });
}
function eE(e) {
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
                : H.intl.string(H.t.uHtDcT)
            : a && null != s
              ? H.intl.formatToPlainString(H.t.Eo5Cnp, { username: q(s) })
              : n.owned
                ? c
                : H.intl.string(H.t.uHtDcT)),
        !i)
    ) {
        let e = !a && r && null != s;
        a && d
            ? (l = H.intl.string(H.t.yxEAGH))
            : e && (l = H.intl.formatToPlainString(H.t["9GNsge"], { username: q(s) }));
    }
    return { statusText: t, toggleText: l };
}
function eA() {
    return (0, n.jsx)(k.A, { height: 3, width: 3, "aria-hidden": "true", className: J.zN });
}
function eT(e) {
    let { segments: t } = e;
    return 0 === t.length
        ? null
        : (0, n.jsx)("div", {
              className: J.U3,
              children: t.map((e, t) => {
                  let { key: l, node: i } = e;
                  return (0, n.jsxs)("span", { className: J.Hq, children: [t > 0 && (0, n.jsx)(eA, {}), i] }, l);
              }),
          });
}
function eC(e) {
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
        g = (0, $.HW)(t.badge_id),
        { statusText: x, toggleText: h } = eE({
            badge: t,
            isOwnProfile: l,
            isViewingOtherUser: i,
            targetUsername: a,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
        }),
        _ = [];
    g && _.push({ key: "beta", node: (0, n.jsx)(ew, {}) }),
        null != x &&
            _.push({
                key: "status",
                node: (0, n.jsxs)("span", {
                    className: J.pC,
                    children: [
                        !l && null != s && (0, n.jsx)(w.eu, { src: s, size: Z._3.SIZE_16, "aria-hidden": !0 }),
                        (0, n.jsx)(u.E, {
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: J.$L,
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
                    className: J.$L,
                    children: m,
                }),
            });
    let b = _.length >= 3 && null != h,
        v =
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
        j = b || null == v ? _ : [..._, v];
    return 0 === j.length && null == v
        ? null
        : (0, n.jsxs)("div", {
              className: J.rI,
              children: [(0, n.jsx)(eT, { segments: j }), b && null != v && (0, n.jsx)(eT, { segments: [v] })],
          });
}
function eI(e) {
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
        { statusText: m, toggleText: g } = eE({
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
                className: J.bn,
                children: [
                    x &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                null != s && (0, n.jsx)(w.eu, { src: s, size: Z._3.SIZE_16, "aria-hidden": !0 }),
                                (0, n.jsx)(u.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: J.CT,
                                    children: m,
                                }),
                                null != g &&
                                    (0, n.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        className: J.CT,
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
function eS(e) {
    let t,
        l,
        a,
        r,
        c,
        g,
        {
            badge: h,
            viewerBadge: _,
            onClose: v,
            isOwnProfile: p,
            isViewingOtherUser: y,
            targetUsername: f,
            displayedUserId: w,
            targetOwnsBadge: E,
            viewerOwnsBadge: k,
            isMilestone2Enabled: F,
            onToggleViewedUser: V,
            onViewOwnCatalog: G,
        } = e,
        P = L(w, y, 32),
        M = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let l = e.owned ? e.current_tier : e.next_tier;
            return (null != l ? t.find((e) => e.key === l) : void 0) ?? t[0];
        })(h),
        Z = (0, s.bG)([U.Ay], () => U.Ay.useReducedMotion)
            ? void 0
            : (M?.complex_icon_animated_url ?? h.complex_icon_animated_url),
        q = M?.complex_icon_static_url ?? h.complex_icon_static_url,
        Q = M?.simple_icon_url ?? h.simple_icon_url,
        W = Z ?? q ?? Q,
        K =
            (function (e) {
                if (null == e) return null;
                switch (e) {
                    case eu.x.COMMON:
                        return { type: { text: H.intl.string(H.t.L0K5ci) }, variant: "rarity-common", icon: em.p };
                    case eu.x.RARE:
                        return { type: { text: H.intl.string(H.t["sTx/5z"]) }, variant: "rarity-rare", icon: eg.A };
                    case eu.x.EPIC:
                        return { type: { text: H.intl.string(H.t.RD8RiN) }, variant: "rarity-epic", icon: ex.b };
                    case eu.x.MYTHIC:
                        return { type: { text: H.intl.string(H.t.vqc1ol) }, variant: "rarity-mythic", icon: eh.O };
                    default:
                        return null;
                }
            })(M?.rarity ?? h.rarity) ?? void 0,
        X = (0, $.Om)(h.badge_id),
        ee = h.badge_id === N.$.PREMIUM_TENURE,
        et = ee ? (M?.name ?? M?.key) : M?.name,
        el = ee ? H.intl.string(H.t.Ipxkog) : h.name;
    ee ? (r = null != et ? `${el} ${et}` : el) : null != et ? ((a = el), (r = et)) : (r = el);
    let en = (0, z.ie)(h.badge_id) && !h.is_earnable,
        ei = (h.tiers?.length ?? 0) > 0,
        ea = (0, b.H5)(h),
        [es, er] = i.useState(() => ep()),
        [ec, e_] = i.useState(h.badge_id);
    h.badge_id !== ec && (e_(h.badge_id), er(ep()));
    let eN = h.owned
            ? en && null == ea
                ? es
                : (function (e) {
                      if (null == e) return;
                      let t = new Date(e);
                      if (!Number.isNaN(t.getTime()))
                          return t.toLocaleDateString(H.intl.currentLocale, {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                          });
                  })(ea)
            : ei
              ? "--"
              : void 0,
        ew = ((l = null == (t = h.tiers?.[0]?.key) || M?.key === t), H.intl.string(l ? H.t.WDhIz2 : H.t.wYaDmz)),
        eE = F && null != eN,
        eA = null != K,
        eT = null;
    F && (eE || eA)
        ? (eT = (0, n.jsxs)("div", {
              className: j()(J.$S, (!eE || !eA) && J.jQ),
              children: [
                  eE && (0, n.jsx)(ey, { earnedDateText: eN, label: ew }),
                  eA && (0, n.jsx)(ef, { rarityBadgeProps: K }),
              ],
          }))
        : eA && (eT = (0, n.jsx)(ef, { rarityBadgeProps: K })),
        eE ||
            (c =
                F || null == ea
                    ? H.intl.string(H.t.sTFApF)
                    : H.intl.formatToPlainString(H.t["0aEh2a"], { date: new Date(ea) }));
    let eS = _?.owned === !0 && (_.tiers?.length ?? 0) > 0 && null == _.next_tier,
        eU = x.default.getCurrentUser()?.premiumType,
        ek = ee && (eU === ej.PremiumTypes.TIER_0 || eU === ej.PremiumTypes.TIER_1);
    g = eS ? H.intl.string(H.t.jY5xAL) : ek ? H.intl.string(H.t.qkwSSp) : (_?.description ?? h.description);
    let eO = i.useCallback(() => {
            null != X &&
                (ev({
                    actionName: "primary_badge_action_clicked",
                    badge: h,
                    displayedUserId: w,
                    isSociallyNavigated: y,
                }),
                v(),
                S.A.popAll(),
                X.ctaAction());
        }, [h, w, y, X, v]),
        eB =
            !y || h.is_earnable || k
                ? null
                : (0, n.jsx)(A.w, { type: "info", children: H.intl.format(H.t.vFekBs, { onViewBadges: G }) }),
        eR = (0, s.bG)([R.A], () => R.A.hasConsented(eb.YAq.PERSONALIZATION)),
        eD = F && (0, $.wM)(h.badge_id) && !y && !eR;
    return (0, n.jsx)(T.F, {
        forceLevel: 2,
        children: (0, n.jsx)("div", {
            id: $.hJ,
            role: "tabpanel",
            "aria-labelledby": Y(h.badge_id),
            className: J.SV,
            children: (0, n.jsxs)(C.d_, {
                className: J.C9,
                children: [
                    (0, n.jsx)("div", { className: J.Gw, children: (0, n.jsx)(d.J, { onClick: v, size: "sm" }) }),
                    null != W &&
                        (0, n.jsx)("img", {
                            className: j()(J.y2, null != Z && W === Z && J.hu),
                            src: W,
                            alt: "",
                            "aria-hidden": !0,
                        }),
                    (0, n.jsxs)("div", {
                        className: J.OU,
                        children: [
                            (0, n.jsxs)("div", {
                                className: J.cQ,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: J.nj,
                                        children: [
                                            (0, n.jsxs)(o.D, {
                                                variant: "display-sm",
                                                color: "text-strong",
                                                className: j()(J._r, ee && J.tN),
                                                children: [
                                                    null != a &&
                                                        (0, n.jsx)(u.E, {
                                                            tag: "span",
                                                            variant: "text-sm/medium",
                                                            color: "text-subtle",
                                                            className: J.$g,
                                                            children: a,
                                                        }),
                                                    r,
                                                ],
                                            }),
                                            F &&
                                                (0, n.jsx)(eC, {
                                                    badge: h,
                                                    isOwnProfile: p,
                                                    isViewingOtherUser: y,
                                                    targetUsername: f,
                                                    viewedAvatarSrc: P,
                                                    targetOwnsBadge: E,
                                                    viewerOwnsBadge: k,
                                                    unlockedStatusText: c,
                                                    onToggleViewedUser: V,
                                                }),
                                        ],
                                    }),
                                    !F &&
                                        (0, n.jsx)(eI, {
                                            badge: h,
                                            isOwnProfile: p,
                                            isViewingOtherUser: y,
                                            targetUsername: f,
                                            viewedAvatarSrc: P,
                                            targetOwnsBadge: E,
                                            viewerOwnsBadge: k,
                                            unlockedStatusText: c,
                                            onToggleViewedUser: V,
                                        }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: J.oA,
                                children: [
                                    eD &&
                                        (0, n.jsx)(A.w, {
                                            type: "info",
                                            children: H.intl.format(H.t.Zh44ni, {
                                                onGoToSettings: () =>
                                                    (0, B.openUserSettings)(O.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                            }),
                                        }),
                                    eT,
                                    !(0, D.uJ)(g) &&
                                        (0, n.jsxs)("div", {
                                            className: J.d9,
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: J.E4,
                                                    children: [
                                                        (0, n.jsxs)("div", {
                                                            className: J.jv,
                                                            children: [
                                                                en &&
                                                                    (0, n.jsx)(u.E, {
                                                                        variant: "text-xs/medium",
                                                                        color: "text-subtle",
                                                                        className: J.c$,
                                                                        children: H.intl.string(H.t["/Gmn3f"]),
                                                                    }),
                                                                (0, n.jsx)(u.E, {
                                                                    variant: "text-sm/medium",
                                                                    color: "text-default",
                                                                    className: J.ij,
                                                                    children: g,
                                                                }),
                                                            ],
                                                        }),
                                                        null != X &&
                                                            (0, n.jsx)(m.$, {
                                                                variant: ek
                                                                    ? "expressive"
                                                                    : k
                                                                      ? "secondary"
                                                                      : ee
                                                                        ? "expressive"
                                                                        : "primary",
                                                                size: "sm",
                                                                onClick: eO,
                                                                text: X.ctaLabel({
                                                                    owned: k,
                                                                    isViewerOnUpgradeableNitro: ek,
                                                                }),
                                                            }),
                                                    ],
                                                }),
                                                (h.tiers?.length ?? 0) > 0 &&
                                                    (0, n.jsxs)("div", {
                                                        className: J.cJ,
                                                        children: [
                                                            (0, n.jsx)(I.c, {}),
                                                            F
                                                                ? (0, n.jsx)(eo, {
                                                                      badge: h,
                                                                      viewerBadge: _,
                                                                      isViewingOtherUser: y,
                                                                      targetUsername: f,
                                                                      isViewerOnUpgradeableNitro: ek,
                                                                  })
                                                                : (0, n.jsx)(ed, {
                                                                      badge: y ? h : (_ ?? h),
                                                                      isViewingOtherUser: y,
                                                                      targetUsername: f,
                                                                      isViewerOnUpgradeableNitro: ek,
                                                                  }),
                                                        ],
                                                    }),
                                                null != eB && (0, n.jsx)("div", { className: J.Z6, children: eB }),
                                            ],
                                        }),
                                    (0, D.uJ)(g) && eB,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var eU = l(470739);
function ek(e) {
    let {
            transitionState: t,
            onClose: l,
            initialBadgeId: v,
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
        [C, I] = i.useState(v ?? null),
        S = (0, s.bG)([b.Ay], () => (null != A ? b.Ay.getBadges(A) : []), [A]),
        U = (0, s.bG)([b.Ay], () => null != A && b.Ay.hasCatalogFor(A), [A]),
        k = (0, s.bG)([b.Ay], () => b.Ay.hasCatalogFetchErrorFor(A), [A]);
    i.useEffect(() => {
        null != A && (b.Ay.hasCatalogFor(A) ? b.Ay.isCatalogStaleFor(A) && (0, h.R)(A) : (0, h.R)(A));
        let e = E ? y : j;
        w || null == e || b.Ay.hasCatalogFor(e) || (0, h.R)(e);
    }, [A, w, E, y, j]),
        i.useEffect(() => {
            null != T && g.A.increment({ name: a.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [T] });
        }, [T]);
    let O = i.useMemo(() => {
            let { earnable: e, owned: t } = K(S);
            return E ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [S, E]),
        B = null != C && null != A ? b.Ay.getBadgeById(C, A) : void 0,
        R = null != O && null != A ? b.Ay.getBadgeById(O, A) : void 0,
        D = B ?? R,
        z = !U && !k,
        F = !U && k;
    i.useEffect(() => {
        F && null != T && g.A.increment({ name: a.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [T] });
    }, [F, T]);
    let V = (0, s.bG)([b.Ay], () => null != j && null != D && (b.Ay.getBadgeById(D.badge_id, j)?.owned ?? !1), [D, j]),
        G = (0, s.bG)([b.Ay], () => (null != y && null != D ? b.Ay.getBadgeById(D.badge_id, y) : void 0), [D, y]),
        P = G?.owned ?? !1,
        M = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, eU._)({ ...e, stackingBehavior: "replace" }).then(() => {
                    l();
                });
            },
            [l],
        ),
        L = i.useCallback(() => {
            null != j &&
                null != D &&
                (E
                    ? M({
                          initialBadgeId: D.badge_id,
                          targetUserId: j,
                          targetUsername: N,
                          viewingCurrentUserBadges: !0,
                      })
                    : M({ initialBadgeId: D.badge_id, targetUserId: j, targetUsername: N }));
        }, [E, D, M, j, N]),
        $ = i.useCallback(() => {
            null != y &&
                null != j &&
                (ev({ actionName: "view_your_badges_pressed", badge: D, displayedUserId: A, isSociallyNavigated: E }),
                M({ targetUserId: j, targetUsername: N, viewingCurrentUserBadges: !0 }));
        }, [y, A, E, D, M, j, N]),
        Z = i.useCallback(() => {
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
            "aria-label": H.intl.string(H.t.PEjP4L),
            transitionState: t,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: J.CR,
            children: (0, n.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: J.jE,
                children: [
                    (z || F || null == D) &&
                        (0, n.jsx)("div", { className: J.b, children: (0, n.jsx)(d.J, { onClick: Y, size: "sm" }) }),
                    z
                        ? (0, n.jsx)("div", { className: J.Lq, children: (0, n.jsx)(c.y, {}) })
                        : F
                          ? (0, n.jsxs)("div", {
                                className: J.IU,
                                children: [
                                    (0, n.jsx)(o.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: H.intl.string(H.t.iufib1),
                                    }),
                                    (0, n.jsx)(u.E, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        className: J.TQ,
                                        children: H.intl.string(H.t.eAn6z2),
                                    }),
                                    (0, n.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: Z,
                                        text: H.intl.string(H.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(X, {
                                        selectedBadgeId: D?.badge_id ?? null,
                                        onSelectBadge: I,
                                        displayedUserId: A,
                                        isViewingOtherUser: E,
                                        targetUsername: N,
                                        onViewOwnCatalog: $,
                                    }),
                                    null != D &&
                                        (0, n.jsx)(eS, {
                                            badge: D,
                                            viewerBadge: G,
                                            onClose: Y,
                                            isOwnProfile: w,
                                            isViewingOtherUser: E,
                                            targetUsername: N,
                                            displayedUserId: A,
                                            targetOwnsBadge: V,
                                            viewerOwnsBadge: P,
                                            isMilestone2Enabled: f,
                                            onToggleViewedUser: L,
                                            onViewOwnCatalog: $,
                                        }),
                                ],
                            }),
                ],
            }),
        })
    );
}
