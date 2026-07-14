l.d(t, { default: () => eU });
var i = l(627968),
    n = l(64700),
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
    C = l(707554),
    T = l(364522),
    I = l(404778),
    U = l(982168),
    S = l(775602),
    O = l(640708),
    k = l(780964),
    B = l(766075),
    R = l(153488),
    z = l(240248),
    D = l(609782),
    V = l(837381),
    F = l(887129),
    G = l(741918),
    P = l(939249),
    M = l(486020);
function L(e, t, l) {
    let i = (0, s.bG)([x.default], () => (null != e ? x.default.getUser(e) : void 0), [e]);
    if (null != i && t) return (0, M.ku)({ id: i.id, avatar: i.avatar, discriminator: i.discriminator }, !1, l);
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
function K(e) {
    let { badge: t, isSelected: l, onSelect: a, itemId: s } = e,
        r = (0, V.rm)(s),
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
    return (0, i.jsx)(P.D, {
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
            (0, i.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: J.pW }),
    });
}
function Q(e) {
    let { label: t, navId: l, badges: n, selectedBadgeId: a, onSelectBadge: s } = e,
        r = (0, F.Ay)({
            id: l,
            isEnabled: !0,
            orientation: G.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, i.jsxs)("div", {
        className: J.zE,
        children: [
            "heading" === t.type &&
                (0, i.jsx)(o.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, i.jsx)(V.hD, {
                navigator: r,
                children: (0, i.jsx)(V.PR, {
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: J.yq,
                            children: n.map((e, t) =>
                                (0, i.jsx)(
                                    K,
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
function X(e) {
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
        b = null != d ? q(d) : null,
        j = null != d && b !== d,
        N =
            null != b && j && null != _
                ? (0, i.jsxs)("span", {
                      className: J._p,
                      children: [(0, i.jsx)(w.eu, { src: _, size: Z._3.SIZE_24, "aria-hidden": !0 }), b],
                  })
                : b,
        p = r && null != N ? H.intl.format(H.t.EIcwoe, { username: N }) : H.intl.string(H.t.UqnlQF),
        y = r && null != d ? H.intl.string(H.t["75s2Rq"]) : H.intl.string(H.t["62xU4E"]),
        f = r && null != d ? H.intl.formatToPlainString(H.t.BCjSZy, { username: d }) : H.intl.string(H.t.UqnlQF);
    return (0, i.jsx)("div", {
        className: J.ws,
        children: (0, i.jsxs)(C.F, {
            component: (0, i.jsxs)("div", {
                className: J.NG,
                children: [
                    (0, i.jsxs)("div", {
                        className: J.kc,
                        children: [
                            !j && null != _ && (0, i.jsx)(w.eu, { src: _, size: Z._3.SIZE_24, "aria-hidden": !0 }),
                            (0, i.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: p }),
                        ],
                    }),
                    (0, i.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", children: y }),
                ],
            }),
            children: [
                (0, i.jsxs)(T.Ip, {
                    className: J.hG,
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
                    (0, i.jsx)("div", {
                        className: J.HO,
                        children: (0, i.jsx)(m.$, {
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
    ei = l(194261),
    en = l(140735),
    ea = l(899696);
function es(e) {
    let {
            badge: t,
            isViewingOtherUser: l,
            targetUsername: a,
            isViewerOnUpgradeableNitro: s = !1,
            hideLabel: r = !1,
        } = e,
        d = n.useId(),
        c = l && null != a,
        o = t.badge_id === N.$.PREMIUM_TENURE ? H.intl.string(s ? H.t["5WS9pL"] : H.t.crwYbF) : null,
        m = c ? H.intl.formatToPlainString(H.t.KyTwIh, { username: a }) : o,
        g = null != m && "" !== m;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            g &&
                !r &&
                (0, i.jsxs)("div", {
                    className: ea.u4,
                    children: [
                        s &&
                            !c &&
                            (0, i.jsx)(ei.X, {
                                size: "xxs",
                                color: "currentColor",
                                className: ea.ZU,
                                "aria-hidden": !0,
                            }),
                        (0, i.jsx)(u.E, { id: d, variant: "text-xs/medium", color: "text-subtle", children: m }),
                    ],
                }),
            (0, i.jsx)("div", {
                className: ea.SV,
                role: "list",
                "aria-labelledby": g && !r ? d : void 0,
                children: t.tiers.map((e) => {
                    let n = e.owned,
                        a = !n && t.owned,
                        r = e.complex_icon_static_url ?? e.simple_icon_url,
                        d = e.name,
                        c = (function (e) {
                            let { tier: t, isUnlocked: l, isViewingOtherUser: i, isViewerOnUpgradeableNitro: n } = e;
                            return l
                                ? i
                                    ? H.intl.string(H.t.sTFApF)
                                    : (t.milestone_text ?? "")
                                : n && !i
                                  ? H.intl.string(H.t.VPu695)
                                  : (t.milestone_text ?? "");
                        })({ tier: e, isUnlocked: n, isViewingOtherUser: l, isViewerOnUpgradeableNitro: s });
                    return (0, i.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: j()(ea.zh, a && ea.ZF),
                            children: [
                                null != r &&
                                    (0, i.jsx)("img", { className: ea.Hw, src: r, alt: "", "aria-hidden": !0 }),
                                (0, i.jsxs)(u.E, {
                                    variant: "text-xxs/medium",
                                    color: n ? "text-default" : "text-muted",
                                    className: ea.hI,
                                    children: [
                                        null != d &&
                                            (0, i.jsxs)("span", {
                                                className: ea.nU,
                                                children: [
                                                    !n &&
                                                        (0, i.jsx)(ei.X, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: ea.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    d,
                                                ],
                                            }),
                                        (0, i.jsx)("span", { className: ea.nU, children: c }),
                                    ],
                                }),
                                (0, i.jsx)(en.A, { children: H.intl.string(n ? H.t.sTFApF : H.t.uHtDcT) }),
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
        h = n.useRef(null),
        _ = n.useRef(null);
    t.badge_id !== o && (m(t.badge_id), c(!1));
    let v = n.useCallback(() => {
            let e = h.current;
            null != e &&
                e.contains(document.activeElement) &&
                e.scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" });
        }, []),
        b = n.useCallback(
            (e) => {
                null != e.target && d && v();
            },
            [d, v],
        );
    (0, el.g)(_, b, [d], { enabled: d });
    let N = l ?? t,
        p = a ? void 0 : N.next_tier,
        y = a ? void 0 : N.current_tier,
        f = null != p ? N.tiers.find((e) => e.key === p) : void 0,
        w = null != y ? N.tiers.find((e) => e.key === y) : void 0,
        E = a ? void 0 : N.progress?.[0],
        A = E?.threshold ?? f?.requirements[0]?.threshold ?? null,
        C = !a && N.owned && null != f,
        T = a || (0, z.uJ)(N.leveling_instructions) || C ? void 0 : N.leveling_instructions,
        U = f?.name != null ? H.intl.formatToPlainString(H.t["Jn+COZ"], { tier_name: f.name }) : void 0,
        S = d ? H.intl.string(H.t["065Hig"]) : H.intl.string(H.t.MylOvg),
        O = a ? t : N,
        k = w?.complex_icon_static_url ?? w?.simple_icon_url,
        B = f?.complex_icon_static_url ?? f?.simple_icon_url,
        R = !(0, z.uJ)(E?.progress_helper_text),
        D = null != U ? { "aria-labelledby": x } : { "aria-label": H.intl.string(H.t.Uwhb1l) };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != T && (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: T }),
            C &&
                (0, i.jsxs)("div", {
                    className: er.ES,
                    children: [
                        null != k && (0, i.jsx)("img", { className: er.Tw, src: k, alt: "", "aria-hidden": !0 }),
                        (0, i.jsxs)("div", {
                            className: er.Bd,
                            children: [
                                null != U && (0, i.jsx)(u.E, { id: x, variant: "text-sm/medium", children: U }),
                                null != A
                                    ? (0, i.jsx)(ee.z, {
                                          value: E?.current ?? 0,
                                          maxValue: A,
                                          size: "md",
                                          valueLabel: E?.progress_helper_text,
                                          className: er.hr,
                                          ...D,
                                      })
                                    : null != E &&
                                      (0, i.jsx)(ee.z, { isIndeterminate: !0, size: "md", className: er.hr, ...D }),
                                R &&
                                    (0, i.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: E?.progress_helper_text,
                                    }),
                            ],
                        }),
                        null != B && (0, i.jsx)("img", { className: er.Tw, src: B, alt: "", "aria-hidden": !0 }),
                    ],
                }),
            C
                ? (0, i.jsxs)("div", {
                      className: er.JC,
                      children: [
                          (0, i.jsx)("div", {
                              ref: _,
                              className: j()(er.ne, d && er.GB),
                              id: g,
                              children: (0, i.jsx)("div", {
                                  className: er.zL,
                                  inert: !d,
                                  children: (0, i.jsxs)("div", {
                                      className: er.GA,
                                      children: [
                                          (0, i.jsx)(I.c, { className: er.yF }),
                                          (0, i.jsx)(es, {
                                              badge: O,
                                              isViewingOtherUser: a,
                                              targetUsername: s,
                                              isViewerOnUpgradeableNitro: r,
                                              hideLabel: !0,
                                          }),
                                      ],
                                  }),
                              }),
                          }),
                          (0, i.jsxs)(P.D, {
                              innerRef: h,
                              className: er.tw,
                              "aria-expanded": d,
                              "aria-controls": g,
                              onClick: () => c(!d),
                              children: [
                                  (0, i.jsx)(u.E, {
                                      className: er.Yi,
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: S,
                                  }),
                                  (0, i.jsx)(et.a, {
                                      size: "sm",
                                      color: "currentColor",
                                      "aria-hidden": !0,
                                      className: j()(er.ai, d && er.hg),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, i.jsx)(es, { badge: O, isViewingOtherUser: a, targetUsername: s, isViewerOnUpgradeableNitro: r }),
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
let eb = [H.t["6zFA/T"], H.t.wzZHKl, H.t["+ED/nf"]];
function ej() {
    let e = Math.floor(Math.random() * eb.length);
    return H.intl.string(eb[e]);
}
function eN(e) {
    let { earnedDateText: t, label: l } = e;
    return (0, i.jsxs)("div", {
        className: j()(J.AX, J.aS),
        children: [
            (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-default", className: J.NM, children: t }),
            (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", className: J.MZ, children: l }),
        ],
    });
}
function ep(e) {
    let { rarityBadgeProps: t } = e;
    return (0, i.jsxs)("div", {
        className: j()(J.AX, J.sn),
        children: [
            (0, i.jsx)(y.E, { ...t }),
            (0, i.jsx)(u.E, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: H.intl.string(H.t["phYZe+"]),
            }),
        ],
    });
}
function ey() {
    return (0, i.jsx)(p.m, {
        text: H.intl.string(H.t.goKu4e),
        children: (0, i.jsxs)("span", {
            className: J.Gb,
            children: [
                (0, i.jsx)(f.m, { size: "xxs", color: "currentColor", className: J.LS, "aria-hidden": !0 }),
                (0, i.jsx)(u.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "none",
                    children: H.intl.string(H.t.oW0eUd),
                }),
            ],
        }),
    });
}
function ef(e) {
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
                : H.intl.string(H.t.uHtDcT)
            : a && null != s
              ? H.intl.formatToPlainString(H.t.Eo5Cnp, { username: q(s) })
              : i.owned
                ? c
                : H.intl.string(H.t.uHtDcT)),
        !n)
    ) {
        let e = !a && r && null != s;
        a && d
            ? (l = H.intl.string(H.t.yxEAGH))
            : e && (l = H.intl.formatToPlainString(H.t["9GNsge"], { username: q(s) }));
    }
    return { statusText: t, toggleText: l };
}
function ew() {
    return (0, i.jsx)(O.A, { height: 3, width: 3, "aria-hidden": "true", className: J.zN });
}
function eE(e) {
    let { segments: t } = e;
    return 0 === t.length
        ? null
        : (0, i.jsx)("div", {
              className: J.U3,
              children: t.map((e, t) => {
                  let { key: l, node: n } = e;
                  return (0, i.jsxs)("span", { className: J.Hq, children: [t > 0 && (0, i.jsx)(ew, {}), n] }, l);
              }),
          });
}
function eA(e) {
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
        m = (0, z.uJ)(t.info_label) ? void 0 : t.info_label,
        g = (0, $.HW)(t.badge_id),
        { statusText: x, toggleText: h } = ef({
            badge: t,
            isOwnProfile: l,
            isViewingOtherUser: n,
            targetUsername: a,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
        }),
        _ = [];
    g && _.push({ key: "beta", node: (0, i.jsx)(ey, {}) }),
        null != x &&
            _.push({
                key: "status",
                node: (0, i.jsxs)("span", {
                    className: J.pC,
                    children: [
                        !l && null != s && (0, i.jsx)(w.eu, { src: s, size: Z._3.SIZE_16, "aria-hidden": !0 }),
                        (0, i.jsx)(u.E, {
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
                node: (0, i.jsx)(u.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    className: J.$L,
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
              className: J.rI,
              children: [(0, i.jsx)(eE, { segments: j }), v && null != b && (0, i.jsx)(eE, { segments: [b] })],
          });
}
function eC(e) {
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
        { statusText: m, toggleText: g } = ef({
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
                className: J.bn,
                children: [
                    x &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != s && (0, i.jsx)(w.eu, { src: s, size: Z._3.SIZE_16, "aria-hidden": !0 }),
                                (0, i.jsx)(u.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: J.CT,
                                    children: m,
                                }),
                                null != g &&
                                    (0, i.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        className: J.CT,
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
            viewerOwnsBadge: O,
            isMilestone2Enabled: V,
            onToggleViewedUser: F,
            onViewOwnCatalog: G,
        } = e,
        P = L(w, y, 32),
        M = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let l = e.owned ? e.current_tier : e.next_tier;
            return (null != l ? t.find((e) => e.key === l) : void 0) ?? t[0];
        })(h),
        Z = (0, s.bG)([S.Ay], () => S.Ay.useReducedMotion)
            ? void 0
            : (M?.complex_icon_animated_url ?? h.complex_icon_animated_url),
        q = M?.complex_icon_static_url ?? h.complex_icon_static_url,
        K = M?.simple_icon_url ?? h.simple_icon_url,
        Q = Z ?? q ?? K,
        W =
            (function (e) {
                if (null == e) return null;
                switch (e) {
                    case ec.x.COMMON:
                        return { type: { text: H.intl.string(H.t.L0K5ci) }, variant: "rarity-common", icon: eo.p };
                    case ec.x.RARE:
                        return { type: { text: H.intl.string(H.t["sTx/5z"]) }, variant: "rarity-rare", icon: eu.A };
                    case ec.x.EPIC:
                        return { type: { text: H.intl.string(H.t.RD8RiN) }, variant: "rarity-epic", icon: em.b };
                    case ec.x.MYTHIC:
                        return { type: { text: H.intl.string(H.t.vqc1ol) }, variant: "rarity-mythic", icon: eg.O };
                    default:
                        return null;
                }
            })(M?.rarity ?? h.rarity) ?? void 0,
        X = (0, $.Om)(h.badge_id),
        ee = h.badge_id === N.$.PREMIUM_TENURE,
        et = ee ? (M?.name ?? M?.key) : M?.name,
        el = ee ? H.intl.string(H.t.Ipxkog) : h.name;
    ee ? (r = null != et ? `${el} ${et}` : el) : null != et ? ((a = el), (r = et)) : (r = el);
    let ei = (0, D.ie)(h.badge_id) && !h.is_earnable,
        en = (h.tiers?.length ?? 0) > 0,
        ea = (0, v.H5)(h),
        [er, ex] = n.useState(() => ej()),
        [eb, ey] = n.useState(h.badge_id);
    h.badge_id !== eb && (ey(h.badge_id), ex(ej()));
    let ef = h.owned
            ? ei && null == ea
                ? er
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
            : en
              ? "--"
              : void 0,
        ew = ((l = null == (t = h.tiers?.[0]?.key) || M?.key === t), H.intl.string(l ? H.t.WDhIz2 : H.t.wYaDmz)),
        eE = V && null != ef,
        eT = null != W,
        eI = null;
    V && (eE || eT)
        ? (eI = (0, i.jsxs)("div", {
              className: j()(J.$S, (!eE || !eT) && J.jQ),
              children: [
                  eE && (0, i.jsx)(eN, { earnedDateText: ef, label: ew }),
                  eT && (0, i.jsx)(ep, { rarityBadgeProps: W }),
              ],
          }))
        : eT && (eI = (0, i.jsx)(ep, { rarityBadgeProps: W })),
        eE ||
            (c =
                V || null == ea
                    ? H.intl.string(H.t.sTFApF)
                    : H.intl.formatToPlainString(H.t["0aEh2a"], { date: new Date(ea) }));
    let eU = _?.owned === !0 && (_.tiers?.length ?? 0) > 0 && null == _.next_tier,
        eS = x.default.getCurrentUser()?.premiumType,
        eO = ee && (eS === ev.PremiumTypes.TIER_0 || eS === ev.PremiumTypes.TIER_1);
    g = eU ? H.intl.string(H.t.jY5xAL) : eO ? H.intl.string(H.t.qkwSSp) : (_?.description ?? h.description);
    let ek = n.useCallback(() => {
            null != X &&
                (e_({
                    actionName: "primary_badge_action_clicked",
                    badge: h,
                    displayedUserId: w,
                    isSociallyNavigated: y,
                }),
                b(),
                U.A.popAll(),
                X.ctaAction());
        }, [h, w, y, X, b]),
        eB =
            !y || h.is_earnable || O
                ? null
                : (0, i.jsx)(A.w, { type: "info", children: H.intl.format(H.t.vFekBs, { onViewBadges: G }) }),
        eR = (0, s.bG)([R.A], () => R.A.hasConsented(eh.YAq.PERSONALIZATION)),
        ez = V && (0, $.wM)(h.badge_id) && !y && !eR;
    return (0, i.jsx)(C.F, {
        forceLevel: 2,
        children: (0, i.jsx)("div", {
            id: $.hJ,
            role: "tabpanel",
            "aria-labelledby": Y(h.badge_id),
            className: J.SV,
            children: (0, i.jsxs)(T.d_, {
                className: J.C9,
                children: [
                    (0, i.jsx)("div", { className: J.Gw, children: (0, i.jsx)(d.J, { onClick: b, size: "sm" }) }),
                    null != Q &&
                        (0, i.jsx)("img", {
                            className: j()(J.y2, null != Z && Q === Z && J.hu),
                            src: Q,
                            alt: "",
                            "aria-hidden": !0,
                        }),
                    (0, i.jsxs)("div", {
                        className: J.OU,
                        children: [
                            (0, i.jsxs)("div", {
                                className: J.cQ,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: J.nj,
                                        children: [
                                            (0, i.jsxs)(o.D, {
                                                variant: "display-sm",
                                                color: "text-strong",
                                                className: j()(J._r, ee && J.tN),
                                                children: [
                                                    null != a &&
                                                        (0, i.jsx)(u.E, {
                                                            tag: "span",
                                                            variant: "text-sm/medium",
                                                            color: "text-subtle",
                                                            className: J.$g,
                                                            children: a,
                                                        }),
                                                    r,
                                                ],
                                            }),
                                            V &&
                                                (0, i.jsx)(eA, {
                                                    badge: h,
                                                    isOwnProfile: p,
                                                    isViewingOtherUser: y,
                                                    targetUsername: f,
                                                    viewedAvatarSrc: P,
                                                    targetOwnsBadge: E,
                                                    viewerOwnsBadge: O,
                                                    unlockedStatusText: c,
                                                    onToggleViewedUser: F,
                                                }),
                                        ],
                                    }),
                                    !V &&
                                        (0, i.jsx)(eC, {
                                            badge: h,
                                            isOwnProfile: p,
                                            isViewingOtherUser: y,
                                            targetUsername: f,
                                            viewedAvatarSrc: P,
                                            targetOwnsBadge: E,
                                            viewerOwnsBadge: O,
                                            unlockedStatusText: c,
                                            onToggleViewedUser: F,
                                        }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: J.oA,
                                children: [
                                    ez &&
                                        (0, i.jsx)(A.w, {
                                            type: "info",
                                            children: H.intl.format(H.t.Zh44ni, {
                                                onGoToSettings: () =>
                                                    (0, B.openUserSettings)(k.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                            }),
                                        }),
                                    eI,
                                    !(0, z.uJ)(g) &&
                                        (0, i.jsxs)("div", {
                                            className: J.d9,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: J.E4,
                                                    children: [
                                                        (0, i.jsxs)("div", {
                                                            className: J.jv,
                                                            children: [
                                                                ei &&
                                                                    (0, i.jsx)(u.E, {
                                                                        variant: "text-xs/medium",
                                                                        color: "text-subtle",
                                                                        className: J.c$,
                                                                        children: H.intl.string(H.t["/Gmn3f"]),
                                                                    }),
                                                                (0, i.jsx)(u.E, {
                                                                    variant: "text-sm/medium",
                                                                    color: "text-default",
                                                                    className: J.ij,
                                                                    children: g,
                                                                }),
                                                            ],
                                                        }),
                                                        null != X &&
                                                            (0, i.jsx)(m.$, {
                                                                variant: eO
                                                                    ? "expressive"
                                                                    : O
                                                                      ? "secondary"
                                                                      : ee
                                                                        ? "expressive"
                                                                        : "primary",
                                                                size: "sm",
                                                                onClick: ek,
                                                                text: X.ctaLabel({
                                                                    owned: O,
                                                                    isViewerOnUpgradeableNitro: eO,
                                                                }),
                                                            }),
                                                    ],
                                                }),
                                                (h.tiers?.length ?? 0) > 0 &&
                                                    (0, i.jsxs)("div", {
                                                        className: J.cJ,
                                                        children: [
                                                            (0, i.jsx)(I.c, {}),
                                                            V
                                                                ? (0, i.jsx)(ed, {
                                                                      badge: h,
                                                                      viewerBadge: _,
                                                                      isViewingOtherUser: y,
                                                                      targetUsername: f,
                                                                      isViewerOnUpgradeableNitro: eO,
                                                                  })
                                                                : (0, i.jsx)(es, {
                                                                      badge: y ? h : (_ ?? h),
                                                                      isViewingOtherUser: y,
                                                                      targetUsername: f,
                                                                      isViewerOnUpgradeableNitro: eO,
                                                                  }),
                                                        ],
                                                    }),
                                                null != eB && (0, i.jsx)("div", { className: J.Z6, children: eB }),
                                            ],
                                        }),
                                    (0, z.uJ)(g) && eB,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var eI = l(470739);
function eU(e) {
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
        C = null != A ? `viewed_user:${E ? "other" : "self"}` : void 0,
        [T, I] = n.useState(b ?? null),
        U = (0, s.bG)([v.Ay], () => (null != A ? v.Ay.getBadges(A) : []), [A]),
        S = (0, s.bG)([v.Ay], () => null != A && v.Ay.hasCatalogFor(A), [A]),
        O = (0, s.bG)([v.Ay], () => v.Ay.hasCatalogFetchErrorFor(A), [A]);
    n.useEffect(() => {
        null != A && (v.Ay.hasCatalogFor(A) ? v.Ay.isCatalogStaleFor(A) && (0, h.R)(A) : (0, h.R)(A));
        let e = E ? y : j;
        w || null == e || v.Ay.hasCatalogFor(e) || (0, h.R)(e);
    }, [A, w, E, y, j]),
        n.useEffect(() => {
            null != C && g.A.increment({ name: a.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [C] });
        }, [C]);
    let k = n.useMemo(() => {
            let { earnable: e, owned: t } = W(U);
            return E ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [U, E]),
        B = null != T && null != A ? v.Ay.getBadgeById(T, A) : void 0,
        R = null != k && null != A ? v.Ay.getBadgeById(k, A) : void 0,
        z = B ?? R,
        D = !S && !O,
        V = !S && O;
    n.useEffect(() => {
        V && null != C && g.A.increment({ name: a.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [C] });
    }, [V, C]);
    let F = (0, s.bG)([v.Ay], () => null != j && null != z && (v.Ay.getBadgeById(z.badge_id, j)?.owned ?? !1), [z, j]),
        G = (0, s.bG)([v.Ay], () => (null != y && null != z ? v.Ay.getBadgeById(z.badge_id, y) : void 0), [z, y]),
        P = G?.owned ?? !1,
        M = n.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, eI._)({ ...e, stackingBehavior: "replace" }).then(() => {
                    l();
                });
            },
            [l],
        ),
        L = n.useCallback(() => {
            null != j &&
                null != z &&
                (E
                    ? M({
                          initialBadgeId: z.badge_id,
                          targetUserId: j,
                          targetUsername: N,
                          viewingCurrentUserBadges: !0,
                      })
                    : M({ initialBadgeId: z.badge_id, targetUserId: j, targetUsername: N }));
        }, [E, z, M, j, N]),
        $ = n.useCallback(() => {
            null != y &&
                null != j &&
                (e_({ actionName: "view_your_badges_pressed", badge: z, displayedUserId: A, isSociallyNavigated: E }),
                M({ targetUserId: j, targetUsername: N, viewingCurrentUserBadges: !0 }));
        }, [y, A, E, z, M, j, N]),
        Z = n.useCallback(() => {
            null != A && (0, h.R)(A, { isRetry: !0 });
        }, [A]),
        Y = n.useCallback(() => {
            e_({ actionName: "badge_directory_closed", badge: z, displayedUserId: A, isSociallyNavigated: E }), l();
        }, [A, E, l, z]),
        q = z?.badge_id;
    return (
        n.useEffect(() => {
            null != z &&
                e_({ actionName: "badge_detail_viewed", badge: z, displayedUserId: A, isSociallyNavigated: E });
        }, [q, A, E]),
        (0, i.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": H.intl.string(H.t.PEjP4L),
            transitionState: t,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: J.CR,
            children: (0, i.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: J.jE,
                children: [
                    (D || V || null == z) &&
                        (0, i.jsx)("div", { className: J.b, children: (0, i.jsx)(d.J, { onClick: Y, size: "sm" }) }),
                    D
                        ? (0, i.jsx)("div", { className: J.Lq, children: (0, i.jsx)(c.y, {}) })
                        : V
                          ? (0, i.jsxs)("div", {
                                className: J.IU,
                                children: [
                                    (0, i.jsx)(o.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: H.intl.string(H.t.iufib1),
                                    }),
                                    (0, i.jsx)(u.E, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        className: J.TQ,
                                        children: H.intl.string(H.t.eAn6z2),
                                    }),
                                    (0, i.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: Z,
                                        text: H.intl.string(H.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(X, {
                                        selectedBadgeId: z?.badge_id ?? null,
                                        onSelectBadge: I,
                                        displayedUserId: A,
                                        isViewingOtherUser: E,
                                        targetUsername: N,
                                        onViewOwnCatalog: $,
                                    }),
                                    null != z &&
                                        (0, i.jsx)(eT, {
                                            badge: z,
                                            viewerBadge: G,
                                            onClose: Y,
                                            isOwnProfile: w,
                                            isViewingOtherUser: E,
                                            targetUsername: N,
                                            displayedUserId: A,
                                            targetOwnsBadge: F,
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
