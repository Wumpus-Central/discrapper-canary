l.d(t, { default: () => eG });
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
    b = l(982240);
l(321073);
var v = l(503698),
    j = l.n(v),
    N = l(70283),
    p = l(990078),
    y = l(508770),
    E = l(885574),
    f = l(97808),
    w = l(123292),
    A = l(683071),
    T = l(707554),
    I = l(364522),
    C = l(404778),
    S = l(982168),
    U = l(775602),
    O = l(640708),
    B = l(780964),
    R = l(766075),
    k = l(153488),
    G = l(240248),
    D = l(609782),
    L = l(837381),
    M = l(887129),
    V = l(741918),
    P = l(939249),
    F = l(486020);
function z(e, t, l) {
    let n = (0, s.bG)([x.default], () => (null != e ? x.default.getUser(e) : void 0), [e]);
    if (null != n && t) return (0, F.ku)({ id: n.id, avatar: n.avatar, discriminator: n.discriminator }, !1, l);
}
var $ = l(696292),
    Z = l(216934),
    H = l(976860),
    Y = l(652215),
    q = l(758836),
    J = l(375708);
let Q = new Set([N.$.ACCOUNT_AGE, N.$.STREAMING, N.$.GAME_TIME, N.$.GAME_VARIETY]),
    W = {
        [N.$.PREMIUM_TENURE]: {
            ctaLabel: (e) => {
                let { owned: t, isViewerOnUpgradeableNitro: l } = e;
                return !0 === l ? J.intl.string(J.t.uKFeS1) : t ? J.intl.string(J.t.xGjjkd) : J.intl.string(J.t.BTxm69);
            },
            ctaAction: () => (0, H.pX)(Y.BVt.NITRO_HOME),
        },
        [N.$.GUILD_BOOSTER]: {
            ctaLabel: (e) => {
                let { owned: t } = e;
                return t ? J.intl.string(J.t.VMvz3m) : J.intl.string(J.t.xFVZeU);
            },
            ctaAction: () => (0, R.openUserSettings)(B.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
        },
        [N.$.ORB_PROFILE]: {
            ctaLabel: () => J.intl.string(J.t.EBYkzk),
            ctaAction: () => (0, H.pX)(Y.BVt.COLLECTIBLES_SHOP_WITH_TAB(q.G2.ORBS)),
        },
        [N.$.QUEST_COMPLETED]: {
            ctaLabel: () => J.intl.string(J.t.swICIT),
            ctaAction: () => (0, Z.m)({ fromContent: $.u.QUEST_BADGE }),
        },
    },
    X = "badge-details";
var K = l(778712),
    ee = l(259588);
function et(e) {
    return `badge-tab-${e}`;
}
function el(e) {
    let t = Array.from(e);
    return t.length > 19 ? `${t.slice(0, 19).join("")}...` : e;
}
function en(e) {
    let { badge: t, isSelected: l, onSelect: a, itemId: s } = e,
        r = (0, L.rm)(s),
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
        id: et(t.badge_id),
        "aria-label": u,
        "aria-selected": l,
        "aria-controls": l ? X : void 0,
        className: j()(ee.oL, l && ee.xO),
        onFocus: r.onFocus,
        onClick: () => {
            m.current?.focus(), a();
        },
        children:
            null != t.simple_icon_url &&
            (0, n.jsx)("img", { src: t.simple_icon_url, alt: "", "aria-hidden": !0, className: ee.pW }),
    });
}
function ei(e) {
    let { label: t, navId: l, badges: i, selectedBadgeId: a, onSelectBadge: s } = e,
        r = (0, M.Ay)({
            id: l,
            isEnabled: !0,
            orientation: V.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, n.jsxs)("div", {
        className: ee.zE,
        children: [
            "heading" === t.type &&
                (0, n.jsx)(o.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, n.jsx)(L.hD, {
                navigator: r,
                children: (0, n.jsx)(L.PR, {
                    children: (e) =>
                        (0, n.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: ee.yq,
                            children: i.map((e, t) =>
                                (0, n.jsx)(
                                    en,
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
function ea(e) {
    let t = [],
        l = [];
    for (let n of e) n.owned ? l.push(n) : n.is_earnable && t.push(n);
    return { earnable: t, owned: l };
}
function es(e) {
    let {
            selectedBadgeId: t,
            onSelectBadge: l,
            displayedUserId: a,
            isViewingOtherUser: r,
            targetUsername: d,
            onViewOwnCatalog: c,
        } = e,
        g = (0, s.bG)([b.Ay], () => (null != a ? b.Ay.getBadges(a) : []), [a]),
        { earnable: x, owned: h } = i.useMemo(() => ea(g), [g]),
        _ = z(a, r, 48),
        v = null != d ? el(d) : null,
        j = null != d && v !== d,
        N =
            null != v && j && null != _
                ? (0, n.jsxs)("span", {
                      className: ee._p,
                      children: [(0, n.jsx)(f.eu, { src: _, size: K._3.SIZE_24, "aria-hidden": !0 }), v],
                  })
                : v,
        p = r && null != N ? J.intl.format(J.t.EIcwoe, { username: N }) : J.intl.string(J.t.UqnlQF),
        y = r && null != d ? J.intl.string(J.t["75s2Rq"]) : J.intl.string(J.t["62xU4E"]),
        E = r && null != d ? J.intl.formatToPlainString(J.t.BCjSZy, { username: d }) : J.intl.string(J.t.UqnlQF);
    return (0, n.jsx)("div", {
        className: ee.ws,
        children: (0, n.jsxs)(T.F, {
            component: (0, n.jsxs)("div", {
                className: ee.NG,
                children: [
                    (0, n.jsxs)("div", {
                        className: ee.kc,
                        children: [
                            !j && null != _ && (0, n.jsx)(f.eu, { src: _, size: K._3.SIZE_24, "aria-hidden": !0 }),
                            (0, n.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: p }),
                        ],
                    }),
                    (0, n.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", children: y }),
                ],
            }),
            children: [
                (0, n.jsxs)(I.Ip, {
                    className: ee.hG,
                    children: [
                        h.length > 0 &&
                            (0, n.jsx)(ei, {
                                label: { type: "aria", text: E },
                                navId: "badge-directory-owned",
                                badges: h,
                                selectedBadgeId: t,
                                onSelectBadge: l,
                            }),
                        !r &&
                            x.length > 0 &&
                            (0, n.jsx)(ei, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: J.intl.string(J.t["0YzU//"]),
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
                        className: ee.HO,
                        children: (0, n.jsx)(m.$, {
                            variant: "secondary",
                            size: "sm",
                            fullWidth: !0,
                            onClick: c,
                            text: J.intl.string(J.t.msyp90),
                        }),
                    }),
            ],
        }),
    });
}
var er = l(911608),
    ed = l(847374),
    ec = l(770178),
    eo = l(194261),
    eu = l(140735),
    em = l(152624);
function eg(e) {
    if (null == e || "" === e) return null;
    let t = new Date(e);
    return Number.isNaN(t.getTime()) ? null : t;
}
function ex(e) {
    return null == e ? null : e.toLocaleDateString(J.intl.currentLocale, { month: "short", year: "numeric" });
}
function eh(e) {
    let {
            badge: t,
            isViewingOtherUser: l,
            targetUsername: a,
            isViewerOnUpgradeableNitro: s = !1,
            hideLabel: r = !1,
        } = e,
        d = ex(eg(t.obtained_at)) ?? J.intl.string(J.t.sTFApF),
        c = i.useId(),
        o = l && null != a,
        m = t.badge_id === N.$.PREMIUM_TENURE ? J.intl.string(s ? J.t["5WS9pL"] : J.t.crwYbF) : null,
        g = o ? J.intl.formatToPlainString(J.t.KyTwIh, { username: a }) : m,
        x = null != g && "" !== g;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            x &&
                !r &&
                (0, n.jsxs)("div", {
                    className: em.u4,
                    children: [
                        s &&
                            !o &&
                            (0, n.jsx)(eo.X, {
                                size: "xxs",
                                color: "currentColor",
                                className: em.ZU,
                                "aria-hidden": !0,
                            }),
                        (0, n.jsx)(u.E, { id: c, variant: "text-xs/medium", color: "text-subtle", children: g }),
                    ],
                }),
            (0, n.jsx)("div", {
                className: em.SV,
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
                                    ? J.intl.string(J.t.sTFApF)
                                    : (ex(eg(a)) ?? s)
                                : i && !n
                                  ? J.intl.string(J.t.VPu695)
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
                            className: j()(em.zh, a && em.ZF),
                            children: [
                                null != r &&
                                    (0, n.jsx)("img", { className: em.Hw, src: r, alt: "", "aria-hidden": !0 }),
                                (0, n.jsxs)(u.E, {
                                    variant: "text-xxs/medium",
                                    color: i ? "text-default" : "text-muted",
                                    className: em.hI,
                                    children: [
                                        null != c && (0, n.jsx)("span", { className: em.nU, children: c }),
                                        (0, n.jsx)("span", { className: em.nU, children: m }),
                                    ],
                                }),
                                (0, n.jsx)(eu.A, { children: J.intl.string(i ? J.t.sTFApF : J.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var e_ = l(592292);
function eb(e) {
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
    (0, ec.g)(_, v, [d], { enabled: d });
    let N = l ?? t,
        p = a ? void 0 : N.next_tier,
        y = a ? void 0 : N.current_tier,
        E = null != p ? N.tiers.find((e) => e.key === p) : void 0,
        f = null != y ? N.tiers.find((e) => e.key === y) : void 0,
        w = a ? void 0 : N.progress?.[0],
        A = w?.threshold ?? E?.requirements[0]?.threshold ?? null,
        T = !a && N.owned && null != E,
        I = a || (0, G.uJ)(N.leveling_instructions) || T ? void 0 : N.leveling_instructions,
        S = E?.name != null ? J.intl.formatToPlainString(J.t["Jn+COZ"], { tier_name: E.name }) : void 0,
        U = d ? J.intl.string(J.t["065Hig"]) : J.intl.string(J.t.MylOvg),
        O = a ? t : N,
        B = f?.complex_icon_static_url ?? f?.simple_icon_url,
        R = E?.complex_icon_static_url ?? E?.simple_icon_url,
        k = !(0, G.uJ)(w?.progress_helper_text),
        D = null != S ? { "aria-labelledby": x } : { "aria-label": J.intl.string(J.t.Uwhb1l) };
    return (0, n.jsxs)(n.Fragment, {
        children: [
            null != I && (0, n.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: I }),
            T &&
                (0, n.jsxs)("div", {
                    className: e_.ES,
                    children: [
                        null != B && (0, n.jsx)("img", { className: e_.Tw, src: B, alt: "", "aria-hidden": !0 }),
                        (0, n.jsxs)("div", {
                            className: e_.Bd,
                            children: [
                                null != S && (0, n.jsx)(u.E, { id: x, variant: "text-sm/medium", children: S }),
                                null != A
                                    ? (0, n.jsx)(er.z, {
                                          value: w?.current ?? 0,
                                          maxValue: A,
                                          size: "md",
                                          valueLabel: w?.progress_helper_text,
                                          className: e_.hr,
                                          ...D,
                                      })
                                    : null != w &&
                                      (0, n.jsx)(er.z, { isIndeterminate: !0, size: "md", className: e_.hr, ...D }),
                                k &&
                                    (0, n.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: w?.progress_helper_text,
                                    }),
                            ],
                        }),
                        null != R && (0, n.jsx)("img", { className: e_.Tw, src: R, alt: "", "aria-hidden": !0 }),
                    ],
                }),
            T
                ? (0, n.jsxs)("div", {
                      className: e_.JC,
                      children: [
                          (0, n.jsx)("div", {
                              ref: _,
                              className: j()(e_.ne, d && e_.GB),
                              id: g,
                              children: (0, n.jsx)("div", {
                                  className: e_.zL,
                                  inert: !d,
                                  children: (0, n.jsxs)("div", {
                                      className: e_.GA,
                                      children: [
                                          (0, n.jsx)(C.c, { className: e_.yF }),
                                          (0, n.jsx)(eh, {
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
                          (0, n.jsxs)(P.D, {
                              innerRef: h,
                              className: e_.tw,
                              "aria-expanded": d,
                              "aria-controls": g,
                              onClick: () => c(!d),
                              children: [
                                  (0, n.jsx)(u.E, {
                                      className: e_.Yi,
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: U,
                                  }),
                                  (0, n.jsx)(ed.a, {
                                      size: "sm",
                                      color: "currentColor",
                                      "aria-hidden": !0,
                                      className: j()(e_.ai, d && e_.hg),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, n.jsx)(eh, { badge: O, isViewingOtherUser: a, targetUsername: s, isViewerOnUpgradeableNitro: r }),
        ],
    });
}
var ev = l(536001),
    ej = l(260981),
    eN = l(540418),
    ep = l(907085),
    ey = l(179820),
    eE = l(174459);
function ef(e) {
    let { actionName: t, badge: l, displayedUserId: n, isSociallyNavigated: i } = e,
        a = x.default.getCurrentUser()?.id,
        s = null != l && null != a ? b.Ay.getBadgeById(l.badge_id, a) : void 0,
        r = null != l && null != a ? b.Ay.getRemainingToNextTier(l.badge_id, a) : void 0,
        d = null != n ? b.Ay.getBadges(n).filter((e) => e.owned).length : void 0;
    eE.default.track(Y.HAw.BADGE_DIRECTORY_ACTION, {
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
var ew = l(202541);
function eA(e) {
    let { earnedDateText: t, label: l } = e;
    return (0, n.jsxs)("div", {
        className: j()(ee.AX, ee.aS),
        children: [
            (0, n.jsx)(u.E, { variant: "text-xs/medium", color: "text-default", className: ee.NM, children: t }),
            (0, n.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", className: ee.MZ, children: l }),
        ],
    });
}
function eT(e) {
    let { rarityBadgeProps: t } = e;
    return (0, n.jsxs)("div", {
        className: j()(ee.AX, ee.sn),
        children: [
            (0, n.jsx)(y.E, { ...t }),
            (0, n.jsx)(u.E, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: J.intl.string(J.t["phYZe+"]),
            }),
        ],
    });
}
function eI() {
    return (0, n.jsx)(p.m, {
        text: J.intl.string(J.t.goKu4e),
        children: (0, n.jsxs)("span", {
            className: ee.Gb,
            children: [
                (0, n.jsx)(E.m, { size: "xxs", color: "currentColor", className: ee.LS, "aria-hidden": !0 }),
                (0, n.jsx)(u.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "none",
                    children: J.intl.string(J.t.oW0eUd),
                }),
            ],
        }),
    });
}
function eC(e) {
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
                : J.intl.string(J.t.uHtDcT)
            : a && null != s
              ? J.intl.formatToPlainString(J.t.Eo5Cnp, { username: el(s) })
              : n.owned
                ? c
                : J.intl.string(J.t.uHtDcT)),
        !i)
    ) {
        let e = !a && r && null != s;
        a && d
            ? (l = J.intl.string(J.t.yxEAGH))
            : e && (l = J.intl.formatToPlainString(J.t["9GNsge"], { username: el(s) }));
    }
    return { statusText: t, toggleText: l };
}
function eS() {
    return (0, n.jsx)(O.A, { height: 3, width: 3, "aria-hidden": "true", className: ee.zN });
}
function eU(e) {
    let { segments: t } = e;
    return 0 === t.length
        ? null
        : (0, n.jsx)("div", {
              className: ee.U3,
              children: t.map((e, t) => {
                  let { key: l, node: i } = e;
                  return (0, n.jsxs)("span", { className: ee.Hq, children: [t > 0 && (0, n.jsx)(eS, {}), i] }, l);
              }),
          });
}
function eO(e) {
    var t;
    let {
            badge: l,
            isOwnProfile: i,
            isViewingOtherUser: a,
            targetUsername: s,
            viewedAvatarSrc: r,
            targetOwnsBadge: d,
            viewerOwnsBadge: c,
            unlockedStatusText: o,
            onToggleViewedUser: m,
        } = e,
        g = (0, G.uJ)(l.info_label) ? void 0 : l.info_label,
        x = ((t = l.badge_id), Q.has(t)),
        { statusText: h, toggleText: _ } = eC({
            badge: l,
            isOwnProfile: i,
            isViewingOtherUser: a,
            targetUsername: s,
            targetOwnsBadge: d,
            viewerOwnsBadge: c,
            unlockedStatusText: o,
        }),
        b = [];
    x && b.push({ key: "beta", node: (0, n.jsx)(eI, {}) }),
        null != h &&
            b.push({
                key: "status",
                node: (0, n.jsxs)("span", {
                    className: ee.pC,
                    children: [
                        !i && null != r && (0, n.jsx)(f.eu, { src: r, size: K._3.SIZE_16, "aria-hidden": !0 }),
                        (0, n.jsx)(u.E, {
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: ee.$L,
                            children: h,
                        }),
                    ],
                }),
            }),
        null != g &&
            b.push({
                key: "info",
                node: (0, n.jsx)(u.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    className: ee.$L,
                    children: g,
                }),
            });
    let v = b.length >= 3 && null != _,
        j =
            null != _
                ? {
                      key: "toggle",
                      node: (0, n.jsx)(w.Q, {
                          variant: "primary",
                          size: "sm",
                          textVariant: "text-xs/medium",
                          onClick: m,
                          text: _,
                      }),
                  }
                : void 0,
        N = v || null == j ? b : [...b, j];
    return 0 === N.length && null == j
        ? null
        : (0, n.jsxs)("div", {
              className: ee.rI,
              children: [(0, n.jsx)(eU, { segments: N }), v && null != j && (0, n.jsx)(eU, { segments: [j] })],
          });
}
function eB(e) {
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
        { statusText: m, toggleText: g } = eC({
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
                className: ee.bn,
                children: [
                    x &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                null != s && (0, n.jsx)(f.eu, { src: s, size: K._3.SIZE_16, "aria-hidden": !0 }),
                                (0, n.jsx)(u.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: ee.CT,
                                    children: m,
                                }),
                                null != g &&
                                    (0, n.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        className: ee.CT,
                                        "aria-hidden": !0,
                                        children: "\xb7",
                                    }),
                            ],
                        }),
                    null != g &&
                        (0, n.jsx)(w.Q, {
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
function eR(e) {
    var t;
    let l,
        a,
        r,
        c,
        g,
        h,
        {
            badge: _,
            viewerBadge: v,
            onClose: p,
            isOwnProfile: y,
            isViewingOtherUser: E,
            targetUsername: f,
            displayedUserId: w,
            targetOwnsBadge: O,
            viewerOwnsBadge: L,
            isMilestone2Enabled: M,
            onToggleViewedUser: V,
            onViewOwnCatalog: P,
        } = e,
        F = z(w, E, 32),
        $ = (function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let l = e.owned ? e.current_tier : e.next_tier;
            return (null != l ? t.find((e) => e.key === l) : void 0) ?? t[0];
        })(_),
        Z = (0, s.bG)([U.Ay], () => U.Ay.useReducedMotion)
            ? void 0
            : ($?.complex_icon_animated_url ?? _.complex_icon_animated_url),
        H = $?.complex_icon_static_url ?? _.complex_icon_static_url,
        q = $?.simple_icon_url ?? _.simple_icon_url,
        Q = Z ?? H ?? q,
        K =
            (function (e) {
                if (null == e) return null;
                switch (e) {
                    case ev.x.COMMON:
                        return { type: { text: J.intl.string(J.t.L0K5ci) }, variant: "rarity-common", icon: ej.p };
                    case ev.x.RARE:
                        return { type: { text: J.intl.string(J.t["sTx/5z"]) }, variant: "rarity-rare", icon: eN.A };
                    case ev.x.EPIC:
                        return { type: { text: J.intl.string(J.t.RD8RiN) }, variant: "rarity-epic", icon: ep.b };
                    case ev.x.MYTHIC:
                        return { type: { text: J.intl.string(J.t.vqc1ol) }, variant: "rarity-mythic", icon: ey.O };
                    default:
                        return null;
                }
            })($?.rarity ?? _.rarity) ?? void 0,
        el = W[_.badge_id],
        en = _.badge_id === N.$.PREMIUM_TENURE,
        ei = en ? ($?.name ?? $?.key) : $?.name,
        ea = en ? J.intl.string(J.t.Ipxkog) : _.name;
    en ? (c = null != ei ? `${ea} ${ei}` : ea) : null != ei ? ((r = ea), (c = ei)) : (c = ea);
    let es = (0, b.H5)(_),
        er = _.owned
            ? (function (e) {
                  if (null == e) return;
                  let t = new Date(e);
                  if (!Number.isNaN(t.getTime()))
                      return t.toLocaleDateString(J.intl.currentLocale, {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                      });
              })(es)
            : void 0,
        ed = ((a = null == (l = _.tiers?.[0]?.key) || $?.key === l), J.intl.string(a ? J.t.WDhIz2 : J.t.wYaDmz)),
        ec = M && null != er,
        eo = null != K,
        eu = null;
    M && (ec || eo)
        ? (eu = (0, n.jsxs)("div", {
              className: j()(ee.$S, (!ec || !eo) && ee.jQ),
              children: [
                  ec && (0, n.jsx)(eA, { earnedDateText: er, label: ed }),
                  eo && (0, n.jsx)(eT, { rarityBadgeProps: K }),
              ],
          }))
        : eo && (eu = (0, n.jsx)(eT, { rarityBadgeProps: K })),
        ec ||
            (g =
                M || null == es
                    ? J.intl.string(J.t.sTFApF)
                    : J.intl.formatToPlainString(J.t["0aEh2a"], { date: new Date(es) }));
    let em = v?.owned === !0 && (v.tiers?.length ?? 0) > 0 && null == v.next_tier,
        eg = x.default.getCurrentUser()?.premiumType,
        ex = en && (eg === ew.PremiumTypes.TIER_0 || eg === ew.PremiumTypes.TIER_1);
    h = em ? J.intl.string(J.t.jY5xAL) : ex ? J.intl.string(J.t.qkwSSp) : (v?.description ?? _.description);
    let e_ = i.useCallback(() => {
            null != el &&
                (ef({
                    actionName: "primary_badge_action_clicked",
                    badge: _,
                    displayedUserId: w,
                    isSociallyNavigated: E,
                }),
                p(),
                S.A.popAll(),
                el.ctaAction());
        }, [_, w, E, el, p]),
        eE = (0, D.ie)(_.badge_id) && !_.is_earnable,
        eI =
            !E || _.is_earnable || L
                ? null
                : (0, n.jsx)(A.w, { type: "info", children: J.intl.format(J.t.vFekBs, { onViewBadges: P }) }),
        eC = (0, s.bG)([k.A], () => k.A.hasConsented(Y.YAq.PERSONALIZATION)),
        eS = M && ((t = _.badge_id) === N.$.GAME_VARIETY || t === N.$.GAME_TIME) && !E && !eC;
    return (0, n.jsx)(T.F, {
        forceLevel: 2,
        children: (0, n.jsx)("div", {
            id: X,
            role: "tabpanel",
            "aria-labelledby": et(_.badge_id),
            className: ee.SV,
            children: (0, n.jsxs)(I.d_, {
                className: ee.C9,
                children: [
                    (0, n.jsx)("div", { className: ee.Gw, children: (0, n.jsx)(d.J, { onClick: p, size: "sm" }) }),
                    null != Q &&
                        (0, n.jsx)("img", {
                            className: j()(ee.y2, null != Z && Q === Z && ee.hu),
                            src: Q,
                            alt: "",
                            "aria-hidden": !0,
                        }),
                    (0, n.jsxs)("div", {
                        className: ee.OU,
                        children: [
                            (0, n.jsxs)("div", {
                                className: ee.cQ,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: ee.nj,
                                        children: [
                                            (0, n.jsxs)(o.D, {
                                                variant: "display-sm",
                                                color: "text-strong",
                                                className: j()(ee._r, en && ee.tN),
                                                children: [
                                                    null != r &&
                                                        (0, n.jsx)(u.E, {
                                                            tag: "span",
                                                            variant: "text-sm/medium",
                                                            color: "text-subtle",
                                                            className: ee.$g,
                                                            children: r,
                                                        }),
                                                    c,
                                                ],
                                            }),
                                            M &&
                                                (0, n.jsx)(eO, {
                                                    badge: _,
                                                    isOwnProfile: y,
                                                    isViewingOtherUser: E,
                                                    targetUsername: f,
                                                    viewedAvatarSrc: F,
                                                    targetOwnsBadge: O,
                                                    viewerOwnsBadge: L,
                                                    unlockedStatusText: g,
                                                    onToggleViewedUser: V,
                                                }),
                                        ],
                                    }),
                                    !M &&
                                        (0, n.jsx)(eB, {
                                            badge: _,
                                            isOwnProfile: y,
                                            isViewingOtherUser: E,
                                            targetUsername: f,
                                            viewedAvatarSrc: F,
                                            targetOwnsBadge: O,
                                            viewerOwnsBadge: L,
                                            unlockedStatusText: g,
                                            onToggleViewedUser: V,
                                        }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: ee.oA,
                                children: [
                                    eS &&
                                        (0, n.jsx)(A.w, {
                                            type: "info",
                                            children: J.intl.format(J.t.Zh44ni, {
                                                onGoToSettings: () =>
                                                    (0, R.openUserSettings)(B.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                            }),
                                        }),
                                    eu,
                                    !(0, G.uJ)(h) &&
                                        (0, n.jsxs)("div", {
                                            className: ee.d9,
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: ee.E4,
                                                    children: [
                                                        (0, n.jsxs)("div", {
                                                            className: ee.jv,
                                                            children: [
                                                                eE &&
                                                                    (0, n.jsx)(u.E, {
                                                                        variant: "text-xs/medium",
                                                                        color: "text-subtle",
                                                                        className: ee.c$,
                                                                        children: J.intl.string(J.t["/Gmn3f"]),
                                                                    }),
                                                                (0, n.jsx)(u.E, {
                                                                    variant: "text-sm/medium",
                                                                    color: "text-default",
                                                                    className: ee.ij,
                                                                    children: h,
                                                                }),
                                                            ],
                                                        }),
                                                        null != el &&
                                                            (0, n.jsx)(m.$, {
                                                                variant: ex
                                                                    ? "expressive"
                                                                    : L
                                                                      ? "secondary"
                                                                      : en
                                                                        ? "expressive"
                                                                        : "primary",
                                                                size: "sm",
                                                                onClick: e_,
                                                                text: el.ctaLabel({
                                                                    owned: L,
                                                                    isViewerOnUpgradeableNitro: ex,
                                                                }),
                                                            }),
                                                    ],
                                                }),
                                                (_.tiers?.length ?? 0) > 0 &&
                                                    (0, n.jsxs)("div", {
                                                        className: ee.cJ,
                                                        children: [
                                                            (0, n.jsx)(C.c, {}),
                                                            M
                                                                ? (0, n.jsx)(eb, {
                                                                      badge: _,
                                                                      viewerBadge: v,
                                                                      isViewingOtherUser: E,
                                                                      targetUsername: f,
                                                                      isViewerOnUpgradeableNitro: ex,
                                                                  })
                                                                : (0, n.jsx)(eh, {
                                                                      badge: E ? _ : (v ?? _),
                                                                      isViewingOtherUser: E,
                                                                      targetUsername: f,
                                                                      isViewerOnUpgradeableNitro: ex,
                                                                  }),
                                                        ],
                                                    }),
                                                null != eI && (0, n.jsx)("div", { className: ee.Z6, children: eI }),
                                            ],
                                        }),
                                    (0, G.uJ)(h) && eI,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var ek = l(470739);
function eG(e) {
    let {
            transitionState: t,
            onClose: l,
            initialBadgeId: v,
            targetUserId: j,
            targetUsername: N,
            viewingCurrentUserBadges: p,
        } = e,
        y = (0, s.bG)([x.default], () => x.default.getCurrentUser()?.id),
        E = (0, _.VV)({ location: "BadgeDirectoryModal" }),
        f = null == j || j === y,
        w = !f && null != j && !0 !== p,
        A = w ? j : y,
        T = null != A ? `viewed_user:${w ? "other" : "self"}` : void 0,
        [I, C] = i.useState(v ?? null),
        S = (0, s.bG)([b.Ay], () => (null != A ? b.Ay.getBadges(A) : []), [A]),
        U = (0, s.bG)([b.Ay], () => null != A && b.Ay.hasCatalogFor(A), [A]),
        O = (0, s.bG)([b.Ay], () => b.Ay.hasCatalogFetchErrorFor(A), [A]);
    i.useEffect(() => {
        null != A && (b.Ay.hasCatalogFor(A) ? b.Ay.isCatalogStaleFor(A) && (0, h.R)(A) : (0, h.R)(A));
        let e = w ? y : j;
        f || null == e || b.Ay.hasCatalogFor(e) || (0, h.R)(e);
    }, [A, f, w, y, j]),
        i.useEffect(() => {
            null != T && g.A.increment({ name: a.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [T] });
        }, [T]);
    let B = i.useMemo(() => {
            let { earnable: e, owned: t } = ea(S);
            return w ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [S, w]),
        R = null != I && null != A ? b.Ay.getBadgeById(I, A) : void 0,
        k = null != B && null != A ? b.Ay.getBadgeById(B, A) : void 0,
        G = R ?? k,
        D = !U && !O,
        L = !U && O;
    i.useEffect(() => {
        L && null != T && g.A.increment({ name: a.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [T] });
    }, [L, T]);
    let M = (0, s.bG)([b.Ay], () => null != j && null != G && (b.Ay.getBadgeById(G.badge_id, j)?.owned ?? !1), [G, j]),
        V = (0, s.bG)([b.Ay], () => (null != y && null != G ? b.Ay.getBadgeById(G.badge_id, y) : void 0), [G, y]),
        P = V?.owned ?? !1,
        F = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, ek._)({ ...e, stackingBehavior: "replace" }).then(() => {
                    l();
                });
            },
            [l],
        ),
        z = i.useCallback(() => {
            null != j &&
                null != G &&
                (w
                    ? F({
                          initialBadgeId: G.badge_id,
                          targetUserId: j,
                          targetUsername: N,
                          viewingCurrentUserBadges: !0,
                      })
                    : F({ initialBadgeId: G.badge_id, targetUserId: j, targetUsername: N }));
        }, [w, G, F, j, N]),
        $ = i.useCallback(() => {
            null != y &&
                null != j &&
                (ef({ actionName: "view_your_badges_pressed", badge: G, displayedUserId: A, isSociallyNavigated: w }),
                F({ targetUserId: j, targetUsername: N, viewingCurrentUserBadges: !0 }));
        }, [y, A, w, G, F, j, N]),
        Z = i.useCallback(() => {
            null != A && (0, h.R)(A, { isRetry: !0 });
        }, [A]),
        H = i.useCallback(() => {
            ef({ actionName: "badge_directory_closed", badge: G, displayedUserId: A, isSociallyNavigated: w }), l();
        }, [A, w, l, G]),
        Y = G?.badge_id;
    return (
        i.useEffect(() => {
            null != G &&
                ef({ actionName: "badge_detail_viewed", badge: G, displayedUserId: A, isSociallyNavigated: w });
        }, [Y, A, w]),
        (0, n.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": J.intl.string(J.t.PEjP4L),
            transitionState: t,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: ee.CR,
            children: (0, n.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: ee.jE,
                children: [
                    (D || L || null == G) &&
                        (0, n.jsx)("div", { className: ee.b, children: (0, n.jsx)(d.J, { onClick: H, size: "sm" }) }),
                    D
                        ? (0, n.jsx)("div", { className: ee.Lq, children: (0, n.jsx)(c.y, {}) })
                        : L
                          ? (0, n.jsxs)("div", {
                                className: ee.IU,
                                children: [
                                    (0, n.jsx)(o.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: J.intl.string(J.t.iufib1),
                                    }),
                                    (0, n.jsx)(u.E, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        className: ee.TQ,
                                        children: J.intl.string(J.t.eAn6z2),
                                    }),
                                    (0, n.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: Z,
                                        text: J.intl.string(J.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(es, {
                                        selectedBadgeId: G?.badge_id ?? null,
                                        onSelectBadge: C,
                                        displayedUserId: A,
                                        isViewingOtherUser: w,
                                        targetUsername: N,
                                        onViewOwnCatalog: $,
                                    }),
                                    null != G &&
                                        (0, n.jsx)(eR, {
                                            badge: G,
                                            viewerBadge: V,
                                            onClose: H,
                                            isOwnProfile: f,
                                            isViewingOtherUser: w,
                                            targetUsername: N,
                                            displayedUserId: A,
                                            targetOwnsBadge: M,
                                            viewerOwnsBadge: P,
                                            isMilestone2Enabled: E,
                                            onToggleViewedUser: z,
                                            onViewOwnCatalog: $,
                                        }),
                                ],
                            }),
                ],
            }),
        })
    );
}
