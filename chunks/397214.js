n.d(t, { default: () => e8 });
var i = n(477900),
    l = n(582128),
    a = n(731738),
    s = n(17928),
    r = n(935462),
    d = n(815021),
    c = n(289873),
    o = n(297264),
    u = n(834730),
    m = n(821609),
    g = n(807393),
    x = n(402860),
    h = n(403777),
    _ = n(287809),
    b = n(682618),
    v = n(982240);
let j = (0, n(945810).mj)({
    name: "2026-10-badge-directory-updates",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var N = n(988341),
    p = n(174459),
    y = n(652215);
function f(e) {
    let { actionName: t, badge: n, displayedUserId: i, isSociallyNavigated: l } = e,
        a = _.default.getCurrentUser()?.id,
        s = null != n && null != a ? v.Ay.getBadgeById(n.badge_id, a) : void 0,
        r = null != n && null != a ? v.Ay.getRemainingToNextTier(n.badge_id, a) : void 0,
        d = null != i ? v.Ay.getBadges(i).filter((e) => e.owned).length : void 0;
    p.default.track(y.HAw.BADGE_DIRECTORY_ACTION, {
        badge_action: t,
        badge_id: n?.badge_id,
        badge_tier: null != n ? ((n.owned ? n.current_tier : n.next_tier) ?? n.tiers?.[0]?.key) : void 0,
        badge_owner_id: i,
        is_owned: s?.owned ?? !1,
        progress_to_next_tier: r,
        is_earnable: n?.is_earnable ?? !1,
        is_socially_navigated: l,
        total_badges_owned: d,
    });
}
var A = n(248284),
    I = n(228366);
let E = { seenBadgeIndicatorIds: new Set() };
class w extends s.Ay.PersistedStore {
    static displayName = "BadgeDirectorySeenStore";
    static persistKey = "BadgeDirectorySeenStore";
    initialize(e) {
        E = { seenBadgeIndicatorIds: new Set(e?.seenBadgeIndicatorIds ?? []) };
    }
    getState() {
        return { seenBadgeIndicatorIds: Array.from(E.seenBadgeIndicatorIds) };
    }
    getSeenBadgeIndicators() {
        return E.seenBadgeIndicatorIds;
    }
}
let S = new w(I.h, {
        BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN: function (e) {
            let { badgeId: t } = e;
            if (E.seenBadgeIndicatorIds.has(t)) return !1;
            E = { ...E, seenBadgeIndicatorIds: new Set([...E.seenBadgeIndicatorIds, t]) };
        },
    }),
    T = N.sC;
n(321073);
var C = n(503698),
    B = n.n(C),
    U = n(70283),
    O = n(508770),
    R = n(866665),
    k = n(885574),
    F = n(97808),
    D = n(123292),
    L = n(683071),
    z = n(707554),
    P = n(364522),
    $ = n(404778),
    G = n(700058),
    M = n(775602),
    V = n(640708),
    H = n(780964),
    Z = n(766075),
    J = n(153488),
    Y = n(240248),
    q = n(609782),
    K = n(837381),
    W = n(887129),
    Q = n(741918),
    X = n(939249),
    ee = n(643056),
    et = n(486020);
function en(e, t, n) {
    let i = (0, s.bG)([_.default], () => (null != e ? _.default.getUser(e) : void 0), [e]);
    if (null != i && t) return (0, et.ku)({ id: i.id, avatar: i.avatar, discriminator: i.discriminator }, !1, n);
}
var ei = n(696292),
    el = n(975807),
    ea = n(990820),
    es = n(216934),
    er = n(976860),
    ed = n(758836),
    ec = n(202541),
    eo = n(375708);
let eu = {
        [U.$.STAFF]: {
            ctaLabel: () => eo.intl.string(eo.t.q7A8hP),
            ctaAction: () => (0, el.A)("https://discord.com/careers"),
        },
        [U.$.PREMIUM_TENURE]: {
            ctaLabel: (e) => {
                let { owned: t, isViewerOnUpgradeableNitro: n } = e;
                return !0 === n
                    ? eo.intl.string(eo.t.uKFeS1)
                    : t
                      ? eo.intl.string(eo.t.xGjjkd)
                      : eo.intl.string(eo.t.BTxm69);
            },
            ctaAction: () => (0, er.pX)(y.BVt.NITRO_HOME),
        },
        [U.$.GUILD_BOOSTER]: {
            ctaLabel: (e) => {
                let { owned: t } = e;
                return t ? eo.intl.string(eo.t.VMvz3m) : eo.intl.string(eo.t.xFVZeU);
            },
            ctaAction: () => (0, Z.openUserSettings)(H.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
        },
        [U.$.ORB_PROFILE]: {
            ctaLabel: () => eo.intl.string(eo.t.EBYkzk),
            ctaAction: () => (0, er.pX)(y.BVt.COLLECTIBLES_SHOP_WITH_TAB(ed.G2.ORBS)),
        },
        [U.$.QUEST_COMPLETED]: {
            ctaLabel: () => eo.intl.string(eo.t.swICIT),
            ctaAction: () => (0, es.m)({ fromContent: ei.u.QUEST_BADGE }),
        },
        [U.$.GIFTING]: {
            ctaLabel: () => eo.intl.string(eo.t["nUA/JW"]),
            ctaAction: () => (0, ea.A)({ giftingOrigin: ec.vQ.BADGE_DIRECTORY }),
        },
    },
    em = "badge-details";
var eg = n(778712),
    ex = n(177861);
function eh(e) {
    return `badge-tab-${e}`;
}
function e_(e) {
    let t = Array.from(e);
    return t.length > 19 ? `${t.slice(0, 19).join("")}...` : e;
}
function eb(e) {
    let { badge: t, isSelected: n, onSelect: a, itemId: s, showBadgeIndicator: r } = e,
        d = (0, K.rm)(s),
        c = t.owned ? t.current_tier : t.next_tier,
        o =
            null != c
                ? t.tiers.find((e) => {
                      let { key: t } = e;
                      return t === c;
                  })
                : void 0,
        u = t.badge_id === U.$.PREMIUM_TENURE ? (o?.name ?? o?.key) : o?.name,
        m = null != u ? `${t.name}, ${u}` : t.name,
        g = r ? `${m}, ${eo.intl.string(eo.t.y2b7CA)}` : m,
        x = l.useRef(null);
    return (0, i.jsxs)(X.D, {
        ...d,
        innerRef: x,
        role: "tab",
        id: eh(t.badge_id),
        "aria-label": g,
        "aria-selected": n,
        "aria-controls": n ? em : void 0,
        className: B()(ex.oL, n && ex.xO),
        onFocus: d.onFocus,
        onClick: () => {
            (x.current?.focus(), a());
        },
        children: [
            r && (0, i.jsx)("span", { "aria-hidden": !0, className: ex.Dn }),
            null != t.simple_icon_url &&
                (0, i.jsx)("img", {
                    src: t.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: ex.pW,
                }),
        ],
    });
}
function ev(e) {
    let { label: t, navId: n, badges: l, selectedBadgeId: a, onSelectBadge: s, badgeIndicatorIds: r } = e,
        d = (0, W.Ay)({
            id: n,
            isEnabled: !0,
            orientation: Q.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, i.jsxs)("div", {
        className: ex.zE,
        children: [
            "heading" === t.type &&
                (0, i.jsx)(o.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, i.jsx)(K.hD, {
                navigator: d,
                children: (0, i.jsx)(K.PR, {
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: ex.yq,
                            children: l.map((e, t) => {
                                let n = r.has(e.badge_id);
                                return (0, i.jsx)(
                                    eb,
                                    {
                                        itemId: `item-${t}`,
                                        badge: e,
                                        isSelected: e.badge_id === a,
                                        onSelect: () => s(e.badge_id),
                                        showBadgeIndicator: n,
                                    },
                                    e.badge_id,
                                );
                            }),
                        }),
                }),
            }),
        ],
    });
}
function ej(e) {
    let {
            selectedBadgeId: t,
            onSelectBadge: n,
            displayedUserId: a,
            isViewingOtherUser: r,
            targetUsername: d,
            onViewOwnCatalog: c,
            onCustomizeBadges: g,
            showBadgeIndicators: x,
        } = e,
        h = (0, s.yK)([v.Ay], () => (null != a ? v.Ay.getBadges(a) : []), [a]),
        { earnable: _, owned: b } = l.useMemo(() => (0, N.in)(h), [h]),
        { badgeIndicatorIds: j } = (function (e) {
            let { badges: t, enabled: n } = e,
                i = (0, s.bG)([S], () => S.getSeenBadgeIndicators());
            return {
                badgeIndicatorIds: l.useMemo(
                    () =>
                        n
                            ? new Set(
                                  t
                                      .filter((e) => {
                                          let { badge_id: t } = e;
                                          return T.has(t) && !i.has(t);
                                      })
                                      .map((e) => {
                                          let { badge_id: t } = e;
                                          return t;
                                      }),
                              )
                            : new Set(),
                    [t, n, i],
                ),
            };
        })({ badges: l.useMemo(() => [...b, ..._], [b, _]), enabled: x }),
        p = en(a, r, 48),
        y = (0, ee.d)({ location: "BadgeDirectoryPanel" }),
        f = null != d ? e_(d) : null,
        A = null != d && f !== d,
        I =
            null != f && A && null != p
                ? (0, i.jsxs)("span", {
                      className: ex._p,
                      children: [(0, i.jsx)(F.eu, { src: p, size: eg._3.SIZE_24, "aria-hidden": !0 }), f],
                  })
                : f,
        E = r && null != I ? eo.intl.format(eo.t.EIcwoe, { username: I }) : eo.intl.string(eo.t.UqnlQF),
        w = r && null != d ? eo.intl.string(eo.t["75s2Rq"]) : eo.intl.string(eo.t["62xU4E"]),
        C = r && null != d ? eo.intl.formatToPlainString(eo.t.BCjSZy, { username: d }) : eo.intl.string(eo.t.UqnlQF);
    return (0, i.jsx)("div", {
        className: ex.ws,
        children: (0, i.jsxs)(z.F, {
            component: (0, i.jsxs)("div", {
                className: ex.NG,
                children: [
                    (0, i.jsxs)("div", {
                        className: ex.kc,
                        children: [
                            !A && null != p && (0, i.jsx)(F.eu, { src: p, size: eg._3.SIZE_24, "aria-hidden": !0 }),
                            (0, i.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: E }),
                        ],
                    }),
                    (0, i.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", children: w }),
                ],
            }),
            children: [
                (0, i.jsxs)(P.Ip, {
                    className: ex.hG,
                    children: [
                        b.length > 0 &&
                            (0, i.jsx)(ev, {
                                label: { type: "aria", text: C },
                                navId: "badge-directory-owned",
                                badges: b,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                                badgeIndicatorIds: j,
                            }),
                        !r &&
                            _.length > 0 &&
                            (0, i.jsx)(ev, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: eo.intl.string(eo.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: _,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                                badgeIndicatorIds: j,
                            }),
                    ],
                }),
                (r || y) &&
                    (0, i.jsx)("div", {
                        className: ex.HO,
                        children: r
                            ? (0, i.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: c,
                                  text: eo.intl.string(eo.t.msyp90),
                              })
                            : (0, i.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: g,
                                  text: eo.intl.string(eo.t["6CLLyH"]),
                              }),
                    }),
            ],
        }),
    });
}
var eN = n(911608),
    ep = n(847374),
    ey = n(770178),
    ef = n(194261),
    eA = n(140735),
    eI = n(836825);
function eE(e) {
    let { badge: t, isViewingOtherUser: n, targetUsername: a, isViewerOnUpgradeableNitro: s = !1 } = e,
        r = l.useId(),
        d = n && null != a;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            d &&
                (0, i.jsx)("div", {
                    className: eI.u4,
                    children: (0, i.jsx)(u.E, {
                        id: r,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: eo.intl.formatToPlainString(eo.t.KyTwIh, { username: a }),
                    }),
                }),
            (0, i.jsx)("div", {
                className: eI.SV,
                role: "list",
                "aria-label": d ? void 0 : t.name,
                "aria-labelledby": d ? r : void 0,
                children: t.tiers.map((e) => {
                    let l = e.owned,
                        a = !l && t.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        c = (0, N.Vs)({ tier: e, isUnlocked: l, isViewingOtherUser: n, isViewerOnUpgradeableNitro: s });
                    return (0, i.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: B()(eI.zh, a && eI.ZF),
                            children: [
                                null != r &&
                                    (0, i.jsx)("img", {
                                        className: eI.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, i.jsxs)(u.E, {
                                    variant: "text-xxs/medium",
                                    color: l ? "text-default" : "text-muted",
                                    className: eI.hI,
                                    children: [
                                        null != d &&
                                            (0, i.jsxs)("span", {
                                                className: eI.nU,
                                                children: [
                                                    !l &&
                                                        (0, i.jsx)(ef.LockIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: eI.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    d,
                                                ],
                                            }),
                                        "" !== c && (0, i.jsx)("span", { className: eI.nU, children: c }),
                                    ],
                                }),
                                (0, i.jsx)(eA.A, { children: eo.intl.string(l ? eo.t.sTFApF : eo.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var ew = n(600409);
function eS(e) {
    let { badge: t, viewerBadge: n, isViewingOtherUser: a, targetUsername: r, isViewerOnUpgradeableNitro: d } = e,
        [c, o] = l.useState(!1),
        [m, g] = l.useState(t.badge_id),
        x = l.useId(),
        h = l.useId(),
        _ = l.useRef(null),
        b = l.useRef(null);
    t.badge_id !== m && (g(t.badge_id), o(!1));
    let v = l.useCallback(() => {
            let e = _.current;
            null != e &&
                e.contains(document.activeElement) &&
                e.scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" });
        }, []),
        j = l.useCallback(
            (e) => {
                null != e.target && c && v();
            },
            [c, v],
        );
    (0, ey.g)(b, j, [c], { enabled: c });
    let p = n ?? t,
        f = (0, s.bG)([J.A], () => J.A.hasConsented(y.YAq.PERSONALIZATION)),
        A = !a && (0, N.Jn)(t.badge_id) && !f,
        I = a ? void 0 : p.next_tier,
        E = a ? void 0 : p.current_tier,
        w = null != I ? p.tiers.find((e) => e.key === I) : void 0,
        S = null != E ? p.tiers.find((e) => e.key === E) : void 0,
        T = a ? void 0 : p.progress?.[0],
        C = T?.threshold ?? w?.requirements[0]?.threshold ?? null,
        U = !a && p.owned && null != w,
        O = a || (0, Y.uJ)(p.leveling_instructions) || U ? void 0 : p.leveling_instructions,
        R = w?.name != null ? eo.intl.formatToPlainString(eo.t["Jn+COZ"], { tier_name: w.name }) : void 0,
        k = c ? eo.intl.string(eo.t["065Hig"]) : eo.intl.string(eo.t.MylOvg),
        F = a ? t : p,
        D = S?.complex_icon_static_url ?? S?.simple_icon_url,
        L = w?.complex_icon_static_url ?? w?.simple_icon_url,
        z = !(0, Y.uJ)(T?.progress_helper_text),
        P = null != R ? { "aria-labelledby": h } : { "aria-label": eo.intl.string(eo.t.Uwhb1l) };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != O && (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: O }),
            U &&
                !A &&
                (0, i.jsxs)("div", {
                    className: ew.ES,
                    children: [
                        null != D &&
                            (0, i.jsx)("img", { className: ew.Tw, src: D, alt: "", "aria-hidden": !0, draggable: !1 }),
                        (0, i.jsxs)("div", {
                            className: ew.Bd,
                            children: [
                                null != R && (0, i.jsx)(u.E, { id: h, variant: "text-sm/medium", children: R }),
                                null != C
                                    ? (0, i.jsx)(eN.z, {
                                          value: T?.current ?? 0,
                                          minValue: T?.floor ?? 0,
                                          maxValue: C,
                                          size: "md",
                                          className: ew.hr,
                                          ...P,
                                      })
                                    : null != T &&
                                      (0, i.jsx)(eN.z, { isIndeterminate: !0, size: "md", className: ew.hr, ...P }),
                                z &&
                                    (0, i.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: T?.progress_helper_text,
                                    }),
                            ],
                        }),
                        null != L &&
                            (0, i.jsx)("img", { className: ew.Tw, src: L, alt: "", "aria-hidden": !0, draggable: !1 }),
                    ],
                }),
            U && !A
                ? (0, i.jsxs)("div", {
                      className: ew.JC,
                      children: [
                          (0, i.jsx)("div", {
                              ref: b,
                              className: B()(ew.ne, c && ew.GB),
                              id: x,
                              children: (0, i.jsx)("div", {
                                  className: ew.zL,
                                  inert: !c,
                                  children: (0, i.jsxs)("div", {
                                      className: ew.GA,
                                      children: [
                                          (0, i.jsx)($.c, { className: ew.yF }),
                                          (0, i.jsx)(eE, {
                                              badge: F,
                                              isViewingOtherUser: a,
                                              targetUsername: r,
                                              isViewerOnUpgradeableNitro: d,
                                          }),
                                      ],
                                  }),
                              }),
                          }),
                          (0, i.jsxs)(X.D, {
                              innerRef: _,
                              className: ew.tw,
                              "aria-expanded": c,
                              "aria-controls": x,
                              onClick: () => o(!c),
                              children: [
                                  (0, i.jsx)(u.E, {
                                      className: ew.Yi,
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: k,
                                  }),
                                  (0, i.jsx)(ep.a, {
                                      size: "sm",
                                      color: "currentColor",
                                      "aria-hidden": !0,
                                      className: B()(ew.ai, c && ew.hg),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, i.jsx)(eE, { badge: F, isViewingOtherUser: a, targetUsername: r, isViewerOnUpgradeableNitro: d }),
        ],
    });
}
var eT = n(536001),
    eC = n(260981),
    eB = n(540418),
    eU = n(907085),
    eO = n(179820);
function eR(e) {
    if (null == e) return null;
    switch (e) {
        case eT.x.COMMON:
            return { type: { text: eo.intl.string(eo.t.L0K5ci) }, variant: "rarity-common", icon: eC.p };
        case eT.x.RARE:
            return { type: { text: eo.intl.string(eo.t["sTx/5z"]) }, variant: "rarity-rare", icon: eB.A };
        case eT.x.EPIC:
            return { type: { text: eo.intl.string(eo.t.RD8RiN) }, variant: "rarity-epic", icon: eU.b };
        case eT.x.MYTHIC:
            return { type: { text: eo.intl.string(eo.t.vqc1ol) }, variant: "rarity-mythic", icon: eO.O };
        default:
            return null;
    }
}
let ek = [eo.t["6zFA/T"], eo.t.wzZHKl, eo.t["+ED/nf"]];
function eF() {
    let e = Math.floor(Math.random() * ek.length);
    return eo.intl.string(ek[e]);
}
function eD(e) {
    let { earnedDateText: t, label: n } = e;
    return (0, i.jsxs)("div", {
        className: B()(ex.AX, ex.aS),
        children: [
            (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-default", className: ex.NM, children: t }),
            (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", className: ex.MZ, children: n }),
        ],
    });
}
function eL(e) {
    let { rarityBadgeProps: t } = e;
    return (0, i.jsxs)("div", {
        className: B()(ex.AX, ex.sn),
        children: [
            (0, i.jsx)(O.E, { ...t }),
            (0, i.jsx)(u.E, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: eo.intl.string(eo.t["phYZe+"]),
            }),
        ],
    });
}
function ez() {
    return (0, i.jsx)(R.m, {
        text: eo.intl.string(eo.t.goKu4e),
        children: (0, i.jsxs)("span", {
            className: ex.Gb,
            children: [
                (0, i.jsx)(k.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    className: ex.LS,
                    "aria-hidden": !0,
                }),
                (0, i.jsx)(u.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "none",
                    children: eo.intl.string(eo.t.oW0eUd),
                }),
            ],
        }),
    });
}
function eP() {
    return (0, i.jsx)(V.A, { height: 3, width: 3, "aria-hidden": "true", className: ex.zN });
}
function e$(e) {
    let { segments: t } = e;
    return 0 === t.length
        ? null
        : (0, i.jsx)("div", {
              className: ex.U3,
              children: t.map((e, t) => {
                  let { key: n, node: l } = e;
                  return (0, i.jsxs)("span", { className: ex.Hq, children: [t > 0 && (0, i.jsx)(eP, {}), l] }, n);
              }),
          });
}
function eG(e) {
    let {
            badge: t,
            isOwnProfile: n,
            isViewingOtherUser: l,
            targetUsername: a,
            viewedAvatarSrc: s,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
            onToggleViewedUser: o,
        } = e,
        m = (0, Y.uJ)(t.info_label) ? void 0 : t.info_label,
        g = (0, N.HW)(t.badge_id),
        { statusText: x, toggleText: h } = (function (e) {
            let t,
                n,
                {
                    badge: i,
                    isOwnProfile: l,
                    isViewingOtherUser: a,
                    targetUsername: s,
                    targetOwnsBadge: r,
                    viewerOwnsBadge: d,
                    unlockedStatusText: c,
                } = e;
            if (
                ((t = l
                    ? i.owned
                        ? c
                        : eo.intl.string(eo.t.uHtDcT)
                    : a && null != s
                      ? eo.intl.formatToPlainString(eo.t.Eo5Cnp, { username: e_(s) })
                      : i.owned
                        ? c
                        : eo.intl.string(eo.t.uHtDcT)),
                !l)
            ) {
                let e = !a && r && null != s;
                a && d
                    ? (n = eo.intl.string(eo.t.yxEAGH))
                    : e && (n = eo.intl.formatToPlainString(eo.t["9GNsge"], { username: e_(s) }));
            }
            return { statusText: t, toggleText: n };
        })({
            badge: t,
            isOwnProfile: n,
            isViewingOtherUser: l,
            targetUsername: a,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
        }),
        _ = [];
    (g && _.push({ key: "beta", node: (0, i.jsx)(ez, {}) }),
        null != x &&
            _.push({
                key: "status",
                node: (0, i.jsxs)("span", {
                    className: ex.pC,
                    children: [
                        !n && null != s && (0, i.jsx)(F.eu, { src: s, size: eg._3.SIZE_16, "aria-hidden": !0 }),
                        (0, i.jsx)(u.E, {
                            tag: "span",
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: ex.$L,
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
                    className: ex.$L,
                    children: m,
                }),
            }));
    let b = _.length >= 3 && null != h,
        v =
            null != h
                ? {
                      key: "toggle",
                      node: (0, i.jsx)(D.Q, {
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
        : (0, i.jsxs)("div", {
              className: ex.rI,
              children: [(0, i.jsx)(e$, { segments: j }), b && null != v && (0, i.jsx)(e$, { segments: [v] })],
          });
}
function eM(e) {
    let t,
        n,
        a,
        r,
        c,
        g,
        x,
        {
            badge: h,
            viewerBadge: b,
            onClose: j,
            isOwnProfile: p,
            isViewingOtherUser: A,
            targetUsername: I,
            displayedUserId: E,
            targetOwnsBadge: w,
            viewerOwnsBadge: S,
            onToggleViewedUser: T,
            onViewOwnCatalog: C,
        } = e,
        O = en(E, A, 32),
        R = (0, N.DW)(h),
        k = (0, s.bG)([M.Ay], () => M.Ay.useReducedMotion)
            ? void 0
            : (R?.complex_icon_animated_url ?? h.complex_icon_animated_url),
        F = R?.complex_icon_static_url ?? h.complex_icon_static_url,
        D = R?.simple_icon_url ?? h.simple_icon_url,
        V = k ?? F ?? D,
        K = eR(R?.rarity ?? h.rarity) ?? void 0,
        W = eu[h.badge_id],
        Q = h.badge_id === U.$.PREMIUM_TENURE,
        X = Q ? (R?.name ?? R?.key) : R?.name,
        ee = Q ? eo.intl.string(eo.t.Ipxkog) : h.name;
    Q ? (r = null != X ? `${ee} ${X}` : ee) : null != X ? ((a = ee), (r = X)) : (r = ee);
    let et = (0, q.ie)(h.badge_id) && !h.is_earnable && h.badge_id !== U.$.STAFF,
        ei = (h.tiers?.length ?? 0) > 0,
        el = (0, v.H5)(h),
        ea = (function (e) {
            let [t, n] = l.useState(eF),
                [i, a] = l.useState(e);
            return (e !== i && (a(e), n(eF())), t);
        })(h.badge_id);
    c = h.owned
        ? h.badge_id === U.$.APRIL_FOOLS_2026
            ? eo.intl.string(eo.t["5LcHT0"])
            : et && null == el
              ? ea
              : (function (e) {
                    if (null == e) return;
                    let t = new Date(e);
                    if (!Number.isNaN(t.getTime()))
                        return t.toLocaleDateString(eo.intl.currentLocale, {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        });
                })(el)
        : ei
          ? "--"
          : void 0;
    let es = ((n = null == (t = h.tiers?.[0]?.key) || R?.key === t), eo.intl.string(n ? eo.t.WDhIz2 : eo.t.wYaDmz)),
        er = null != c && h.badge_id !== U.$.STAFF,
        ed = null != K,
        eg = null;
    ((er || ed) &&
        (eg = (0, i.jsxs)("div", {
            className: B()(ex.$S, (!er || !ed) && ex.jQ),
            children: [
                er && null != c && (0, i.jsx)(eD, { earnedDateText: c, label: es }),
                ed && (0, i.jsx)(eL, { rarityBadgeProps: K }),
            ],
        })),
        er || (g = eo.intl.string(eo.t.sTFApF)));
    let e_ = _.default.getCurrentUser()?.premiumType,
        eb = Q && (e_ === ec.PremiumTypes.TIER_0 || e_ === ec.PremiumTypes.TIER_1);
    x =
        !eb && b?.owned === !0 && (b.tiers?.length ?? 0) > 0 && null == b.next_tier
            ? eo.intl.string(eo.t.jY5xAL)
            : eb
              ? eo.intl.string(eo.t.qkwSSp)
              : (b?.description ?? h.description);
    let ev = l.useCallback(() => {
            null != W &&
                (f({
                    actionName: "primary_badge_action_clicked",
                    badge: h,
                    displayedUserId: E,
                    isSociallyNavigated: A,
                }),
                j(),
                G.A.popAll(),
                W.ctaAction());
        }, [h, E, A, W, j]),
        ej =
            !A || h.is_earnable || S || h.badge_id === U.$.STAFF
                ? null
                : (0, i.jsx)(L.w, { type: "info", children: eo.intl.format(eo.t.vFekBs, { onViewBadges: C }) }),
        eN = (0, s.bG)([J.A], () => J.A.hasConsented(y.YAq.PERSONALIZATION)),
        ep = (0, N.Jn)(h.badge_id) && !A && !eN;
    return (0, i.jsx)(z.F, {
        forceLevel: 2,
        children: (0, i.jsx)("div", {
            id: em,
            role: "tabpanel",
            "aria-labelledby": eh(h.badge_id),
            className: ex.SV,
            children: (0, i.jsxs)(P.d_, {
                className: ex.C9,
                children: [
                    (0, i.jsx)("div", { className: ex.Gw, children: (0, i.jsx)(d.J, { onClick: j, size: "sm" }) }),
                    null != V &&
                        (0, i.jsx)("img", {
                            className: B()(ex.y2, null != k && V === k && ex.hu),
                            src: V,
                            alt: "",
                            "aria-hidden": !0,
                            draggable: !1,
                        }),
                    (0, i.jsxs)("div", {
                        className: ex.OU,
                        children: [
                            (0, i.jsx)("div", {
                                className: ex.cQ,
                                children: (0, i.jsxs)("div", {
                                    className: ex.nj,
                                    children: [
                                        (0, i.jsxs)(o.D, {
                                            variant: Q ? "nitro-sm" : "display-sm",
                                            color: "text-strong",
                                            className: B()(ex._r, Q && ex.ve),
                                            children: [
                                                null != a &&
                                                    (0, i.jsx)(u.E, {
                                                        tag: "span",
                                                        variant: "text-sm/medium",
                                                        color: "text-subtle",
                                                        className: ex.$g,
                                                        children: a,
                                                    }),
                                                r,
                                            ],
                                        }),
                                        (0, i.jsx)(eG, {
                                            badge: h,
                                            isOwnProfile: p,
                                            isViewingOtherUser: A,
                                            targetUsername: I,
                                            viewedAvatarSrc: O,
                                            targetOwnsBadge: w,
                                            viewerOwnsBadge: S,
                                            unlockedStatusText: g,
                                            onToggleViewedUser: T,
                                        }),
                                    ],
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: ex.oA,
                                children: [
                                    ep &&
                                        (0, i.jsx)(L.w, {
                                            type: "info",
                                            children: eo.intl.format(eo.t.Zh44ni, {
                                                onGoToSettings: () =>
                                                    (0, Z.openUserSettings)(H.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                            }),
                                        }),
                                    eg,
                                    !(0, Y.uJ)(x) &&
                                        (0, i.jsxs)("div", {
                                            className: ex.d9,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: ex.E4,
                                                    children: [
                                                        (0, i.jsxs)("div", {
                                                            className: ex.jv,
                                                            children: [
                                                                et &&
                                                                    (0, i.jsx)(u.E, {
                                                                        variant: "text-xs/medium",
                                                                        color: "text-subtle",
                                                                        className: ex.c$,
                                                                        children: eo.intl.string(eo.t["/Gmn3f"]),
                                                                    }),
                                                                (0, i.jsx)(u.E, {
                                                                    variant: "text-sm/medium",
                                                                    color: "text-default",
                                                                    className: ex.ij,
                                                                    children: x,
                                                                }),
                                                            ],
                                                        }),
                                                        null != W &&
                                                            (0, i.jsx)(m.$, {
                                                                variant: eb
                                                                    ? "expressive"
                                                                    : S
                                                                      ? "secondary"
                                                                      : Q
                                                                        ? "expressive"
                                                                        : "primary",
                                                                size: "sm",
                                                                onClick: ev,
                                                                text: W.ctaLabel({
                                                                    owned: S,
                                                                    isViewerOnUpgradeableNitro: eb,
                                                                }),
                                                            }),
                                                    ],
                                                }),
                                                ei &&
                                                    (0, i.jsxs)("div", {
                                                        className: ex.cJ,
                                                        children: [
                                                            (0, i.jsx)($.c, {}),
                                                            (0, i.jsx)(eS, {
                                                                badge: h,
                                                                viewerBadge: b,
                                                                isViewingOtherUser: A,
                                                                targetUsername: I,
                                                                isViewerOnUpgradeableNitro: eb,
                                                            }),
                                                        ],
                                                    }),
                                                null != ej && (0, i.jsx)("div", { className: ex.Z6, children: ej }),
                                            ],
                                        }),
                                    (0, Y.uJ)(x) && ej,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var eV = n(470739);
function eH(e) {
    return (0, q.ie)(e.badge_id) && !e.is_earnable && e.badge_id !== U.$.STAFF;
}
let eZ = [eo.t["6zFA/T"], eo.t.wzZHKl, eo.t["+ED/nf"]];
function eJ() {
    let e = Math.floor(Math.random() * eZ.length);
    return eo.intl.string(eZ[e]);
}
var eY = n(229667);
function eq(e) {
    let t,
        n,
        a,
        s,
        { badge: r, viewerBadge: d } = e,
        c = l.useId(),
        {
            progress: o,
            threshold: m,
            currentArtUrl: g,
            nextArtUrl: x,
            helperText: h,
        } = ((t = d ?? r),
        (n = (0, N.YU)(t, t.current_tier)),
        (a = (0, N.YU)(t, t.next_tier)),
        {
            progress: (s = t.progress?.[0]),
            threshold: s?.threshold ?? a?.requirements[0]?.threshold ?? null,
            currentArtUrl: n?.complex_icon_static_url ?? n?.simple_icon_url,
            nextArtUrl: a?.complex_icon_static_url ?? a?.simple_icon_url,
            helperText: (0, Y.uJ)(s?.progress_helper_text) ? void 0 : s?.progress_helper_text,
        }),
        _ = null != h ? { "aria-labelledby": c } : { "aria-label": eo.intl.string(eo.t.Uwhb1l) };
    return (0, i.jsxs)("div", {
        className: eY.NE,
        children: [
            (0, i.jsx)(u.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eo.intl.string(eo.t["2m/g2c"]),
            }),
            (0, i.jsxs)("div", {
                className: eY.ES,
                children: [
                    null != g &&
                        (0, i.jsx)("img", { className: eY.Tw, src: g, alt: "", "aria-hidden": !0, draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: eY.Bd,
                        children: [
                            null != h && (0, i.jsx)(u.E, { id: c, variant: "text-sm/medium", children: h }),
                            null != m
                                ? (0, i.jsx)(eN.z, {
                                      value: o?.current ?? 0,
                                      minValue: o?.floor ?? 0,
                                      maxValue: m,
                                      size: "md",
                                      className: eY.hr,
                                      ..._,
                                  })
                                : null != o &&
                                  (0, i.jsx)(eN.z, { isIndeterminate: !0, size: "md", className: eY.hr, ..._ }),
                        ],
                    }),
                    null != x &&
                        (0, i.jsx)("img", { className: eY.Tw, src: x, alt: "", "aria-hidden": !0, draggable: !1 }),
                ],
            }),
        ],
    });
}
var eK = n(149285);
function eW(e) {
    let { badge: t, isViewingOtherUser: n, targetUsername: a, isViewerOnUpgradeableNitro: s = !1 } = e,
        r = l.useId(),
        d = n && null != a;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            d &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)($.c, {}),
                        (0, i.jsx)("div", {
                            className: eK.u4,
                            children: (0, i.jsx)(u.E, {
                                id: r,
                                variant: "text-sm/medium",
                                children: eo.intl.formatToPlainString(eo.t.KyTwIh, { username: a }),
                            }),
                        }),
                    ],
                }),
            (0, i.jsx)("div", {
                className: eK.SV,
                role: "list",
                "aria-label": d ? void 0 : t.name,
                "aria-labelledby": d ? r : void 0,
                children: t.tiers.map((e) => {
                    let l = e.owned,
                        a = !l && t.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        c = (0, N.Vs)({ tier: e, isUnlocked: l, isViewingOtherUser: n, isViewerOnUpgradeableNitro: s });
                    return (0, i.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: B()(eK.zh, a && eK.ZF),
                            children: [
                                null != r &&
                                    (0, i.jsx)("img", {
                                        className: eK.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, i.jsxs)("div", {
                                    className: eK.hI,
                                    children: [
                                        null != d &&
                                            (0, i.jsx)(u.E, {
                                                variant: "text-xs/semibold",
                                                color: l ? "text-default" : "text-muted",
                                                className: eK.nU,
                                                children: d,
                                            }),
                                        "" !== c &&
                                            (0, i.jsxs)(u.E, {
                                                variant: "text-xs/normal",
                                                color: l ? "text-subtle" : "text-muted",
                                                className: eK.nU,
                                                children: [
                                                    !l &&
                                                        (0, i.jsx)(ef.LockIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: eK.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    c,
                                                ],
                                            }),
                                    ],
                                }),
                                (0, i.jsx)(eA.A, { children: eo.intl.string(l ? eo.t.sTFApF : eo.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var eQ = n(148204);
function eX() {
    return (0, i.jsx)(V.A, { height: 3, width: 3, "aria-hidden": "true", className: eQ.zN });
}
function e0(e) {
    let { segments: t } = e;
    return 0 === t.length
        ? null
        : (0, i.jsx)("div", {
              className: eQ.U3,
              children: t.map((e, t) => {
                  let { key: n, node: l } = e;
                  return (0, i.jsxs)("span", { className: eQ.Hq, children: [t > 0 && (0, i.jsx)(eX, {}), l] }, n);
              }),
          });
}
function e1(e) {
    let t,
        n,
        a,
        r,
        c,
        g,
        {
            badge: x,
            viewerBadge: h,
            onClose: b,
            isViewingOtherUser: j,
            targetUsername: p,
            displayedUserId: A,
            viewerOwnsBadge: I,
            onViewOwnCatalog: E,
        } = e,
        w = (0, N.DW)(x),
        { animatedUrl: S, imageUrl: T } =
            ((n =
                (t = (0, s.bG)([M.Ay], () => M.Ay.useReducedMotion)
                    ? void 0
                    : (w?.complex_icon_animated_url ?? x.complex_icon_animated_url)) ??
                w?.complex_icon_static_url ??
                x.complex_icon_static_url ??
                w?.simple_icon_url ??
                x.simple_icon_url),
            { animatedUrl: t, imageUrl: n }),
        C = w?.rarity ?? x.rarity,
        k = eR(C) ?? void 0,
        F = eu[x.badge_id],
        {
            isNitro: D,
            eyebrow: V,
            displayName: q,
        } = ((r = (a = x.badge_id === U.$.PREMIUM_TENURE) ? (w?.name ?? w?.key) : w?.name),
        (c = a ? eo.intl.string(eo.t.Ipxkog) : x.name),
        a
            ? { isNitro: a, eyebrow: void 0, displayName: null != r ? `${c} ${r}` : c }
            : null != r && x.owned
              ? { isNitro: a, eyebrow: c, displayName: r }
              : { isNitro: a, eyebrow: void 0, displayName: c }),
        K = eH(x),
        W = (x.tiers?.length ?? 0) > 0,
        Q = (function (e) {
            let [t, n] = l.useState(eJ),
                [i, a] = l.useState(e);
            return (e !== i && (a(e), n(eJ())), t);
        })(x.badge_id),
        X =
            ((g = (0, v.H5)(x)),
            x.owned
                ? x.badge_id === U.$.APRIL_FOOLS_2026
                    ? eo.intl.string(eo.t["5LcHT0"])
                    : eH(x) && null == g
                      ? Q
                      : null != g && x.badge_id !== U.$.STAFF
                        ? eo.intl.formatToPlainString(eo.t.XmaiRQ, { date: new Date(g) })
                        : eo.intl.string(eo.t.sTFApF)
                : eo.intl.string(eo.t.uHtDcT)),
        ee = (0, Y.uJ)(x.info_label) ? void 0 : x.info_label,
        et = x.owned && C !== eT.x.COMMON && null != k,
        en = [];
    (null != ee &&
        en.push({
            key: "info",
            node: (0, i.jsx)(u.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: "text-subtle",
                className: eQ.$L,
                children: ee,
            }),
        }),
        en.push({
            key: "status",
            node: (0, i.jsx)(u.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: "text-subtle",
                className: eQ.$L,
                children: X,
            }),
        }),
        et && en.push({ key: "rarity", node: (0, i.jsx)(O.E, { ...k }) }));
    let ei = _.default.getCurrentUser()?.premiumType,
        el = x.badge_id === U.$.PREMIUM_TENURE && (ei === ec.PremiumTypes.TIER_0 || ei === ec.PremiumTypes.TIER_1),
        ea = (function (e) {
            let { badge: t, viewerBadge: n, isViewerOnUpgradeableNitro: i } = e;
            return !i && n?.owned === !0 && (n.tiers?.length ?? 0) > 0 && null == n.next_tier
                ? eo.intl.string(eo.t.jY5xAL)
                : i
                  ? eo.intl.string(eo.t.qkwSSp)
                  : (n?.description ?? t.description);
        })({ badge: x, viewerBadge: h, isViewerOnUpgradeableNitro: el }),
        es = l.useCallback(() => {
            null != F &&
                (f({
                    actionName: "primary_badge_action_clicked",
                    badge: x,
                    displayedUserId: A,
                    isSociallyNavigated: j,
                }),
                b(),
                G.A.popAll(),
                F.ctaAction());
        }, [x, A, j, F, b]),
        er = !(function (e) {
            let { badge: t, isViewingOtherUser: n, viewerOwnsBadge: i } = e;
            return n && !t.is_earnable && !i && t.badge_id !== U.$.STAFF;
        })({ badge: x, isViewingOtherUser: j, viewerOwnsBadge: I })
            ? null
            : (0, i.jsx)(L.w, { type: "info", children: eo.intl.format(eo.t.vFekBs, { onViewBadges: E }) }),
        ed = (function (e) {
            let { badge: t, isViewingOtherUser: n } = e,
                i = (0, s.bG)([J.A], () => J.A.hasConsented(y.YAq.PERSONALIZATION));
            return (0, N.Jn)(t.badge_id) && !n && !i;
        })({ badge: x, isViewingOtherUser: j }),
        eg = (function (e) {
            let { badge: t, viewerBadge: n, isViewingOtherUser: i } = e,
                l = (0, s.bG)([J.A], () => J.A.hasConsented(y.YAq.PERSONALIZATION)),
                a = n ?? t,
                r = null != (0, N.YU)(a, a.next_tier),
                d = (0, N.Jn)(t.badge_id) && !l;
            return !i && a.owned && r && !d;
        })({ badge: x, viewerBadge: h, isViewingOtherUser: j }),
        ex = !(0, Y.uJ)(ea),
        e_ = eg || ex || W,
        eb = j ? x : (h ?? x);
    return (0, i.jsx)(z.F, {
        forceLevel: 2,
        children: (0, i.jsxs)("div", {
            id: em,
            role: "tabpanel",
            "aria-labelledby": eh(x.badge_id),
            className: eQ.SV,
            children: [
                (0, i.jsx)("div", { className: eQ.Gw, children: (0, i.jsx)(d.J, { onClick: b, size: "sm" }) }),
                (0, i.jsxs)(P.d_, {
                    className: eQ.C9,
                    children: [
                        (0, i.jsx)("div", {
                            className: eQ.Rm,
                            children:
                                (0, N.HW)(x.badge_id) &&
                                (0, i.jsx)(R.m, {
                                    text: eo.intl.string(eo.t.goKu4e),
                                    children: (0, i.jsx)("span", {
                                        className: eQ.mC,
                                        children: (0, i.jsx)(O.E, { type: "beta" }),
                                    }),
                                }),
                        }),
                        null != T &&
                            (0, i.jsx)("img", {
                                className: B()(eQ.y2, null != S && eQ.hu),
                                src: T,
                                alt: "",
                                "aria-hidden": !0,
                                draggable: !1,
                            }),
                        (0, i.jsxs)("div", {
                            className: eQ.OU,
                            children: [
                                (0, i.jsx)("div", {
                                    className: eQ.cQ,
                                    children: (0, i.jsxs)("div", {
                                        className: eQ.nj,
                                        children: [
                                            (0, i.jsxs)(o.D, {
                                                variant: D ? "nitro-sm" : "display-sm",
                                                color: "text-strong",
                                                className: B()(eQ._r, D && eQ.ve),
                                                children: [
                                                    null != V &&
                                                        (0, i.jsx)(u.E, {
                                                            tag: "span",
                                                            variant: "text-sm/medium",
                                                            color: "text-subtle",
                                                            className: eQ.$g,
                                                            children: V,
                                                        }),
                                                    q,
                                                ],
                                            }),
                                            (0, i.jsx)(e0, { segments: en }),
                                        ],
                                    }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: eQ.oA,
                                    children: [
                                        ed &&
                                            (0, i.jsx)(L.w, {
                                                type: "info",
                                                children: eo.intl.format(eo.t.Zh44ni, {
                                                    onGoToSettings: () =>
                                                        (0, Z.openUserSettings)(H.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                                }),
                                            }),
                                        e_ &&
                                            (0, i.jsxs)("div", {
                                                className: eQ.d9,
                                                children: [
                                                    eg &&
                                                        (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                (0, i.jsx)(eq, { badge: x, viewerBadge: h }),
                                                                (0, i.jsx)($.c, {}),
                                                            ],
                                                        }),
                                                    ex &&
                                                        (0, i.jsxs)("div", {
                                                            className: B()(eQ.E4, !W && eQ.H),
                                                            children: [
                                                                (0, i.jsxs)("div", {
                                                                    className: eQ.jv,
                                                                    children: [
                                                                        K &&
                                                                            (0, i.jsx)(u.E, {
                                                                                variant: "text-xs/medium",
                                                                                color: "text-subtle",
                                                                                className: eQ.c$,
                                                                                children: eo.intl.string(
                                                                                    eo.t["/Gmn3f"],
                                                                                ),
                                                                            }),
                                                                        (0, i.jsx)(u.E, {
                                                                            variant: "text-sm/medium",
                                                                            color: "text-default",
                                                                            className: eQ.ij,
                                                                            children: ea,
                                                                        }),
                                                                    ],
                                                                }),
                                                                null != F &&
                                                                    (0, i.jsx)(m.$, {
                                                                        variant: (function (e) {
                                                                            let {
                                                                                isNitro: t,
                                                                                isViewerOnUpgradeableNitro: n,
                                                                                viewerOwnsBadge: i,
                                                                            } = e;
                                                                            return n
                                                                                ? "expressive"
                                                                                : i
                                                                                  ? "secondary"
                                                                                  : t
                                                                                    ? "expressive"
                                                                                    : "primary";
                                                                        })({
                                                                            isNitro: D,
                                                                            isViewerOnUpgradeableNitro: el,
                                                                            viewerOwnsBadge: I,
                                                                        }),
                                                                        size: "sm",
                                                                        onClick: es,
                                                                        text: F.ctaLabel({
                                                                            owned: I,
                                                                            isViewerOnUpgradeableNitro: el,
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                    W &&
                                                        (0, i.jsx)("div", {
                                                            className: eQ.cJ,
                                                            children: (0, i.jsx)(eW, {
                                                                badge: eb,
                                                                isViewingOtherUser: j,
                                                                targetUsername: p,
                                                                isViewerOnUpgradeableNitro: el,
                                                            }),
                                                        }),
                                                    null != er && (0, i.jsx)("div", { className: eQ.Z6, children: er }),
                                                ],
                                            }),
                                        !e_ && er,
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
var e2 = n(921121);
function e8(e) {
    let {
            transitionState: t,
            onClose: n,
            initialBadgeId: p,
            targetUserId: y,
            targetUsername: I,
            viewingCurrentUserBadges: E,
        } = e,
        w = (0, s.bG)([_.default], () => _.default.getCurrentUser()?.id),
        S = null == y || y === w,
        C = (function (e) {
            let { location: t } = e;
            return j.useConfig({ location: t }).enabled;
        })({ location: "BadgeDirectoryModal" }),
        B = !S && null != y && !0 !== E,
        U = B ? y : w,
        O = null != U ? `viewed_user:${B ? "other" : "self"}` : void 0,
        [R, k] = l.useState(p ?? null),
        F = (0, s.yK)([v.Ay], () => (null != U ? v.Ay.getBadges(U) : []), [U]),
        D = (0, s.bG)([v.Ay], () => null != U && v.Ay.hasCatalogFor(U), [U]),
        L = (0, s.bG)([v.Ay], () => v.Ay.hasCatalogFetchErrorFor(U), [U]);
    (l.useEffect(() => {
        null != U && (v.Ay.hasCatalogFor(U) ? v.Ay.isCatalogStaleFor(U) && (0, b.RS)(U) : (0, b.RS)(U));
        let e = B ? w : y;
        S || null == e || v.Ay.hasCatalogFor(e) || (0, b.RS)(e);
    }, [U, S, B, w, y]),
        l.useEffect(() => {
            null != O && g.A.increment({ name: a.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [O] });
        }, [O]));
    let z = l.useMemo(() => {
            let { earnable: e, owned: t } = (0, N.in)(F);
            return B ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [F, B]),
        P = null != R && null != U ? v.Ay.getBadgeById(R, U) : void 0,
        $ = null != z && null != U ? v.Ay.getBadgeById(z, U) : void 0,
        G = P ?? $,
        M = !D && !L,
        V = !D && L,
        H = !B;
    l.useEffect(() => {
        V && null != O && g.A.increment({ name: a.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [O] });
    }, [V, O]);
    let Z = (0, s.bG)([v.Ay], () => null != y && null != G && (v.Ay.getBadgeById(G.badge_id, y)?.owned ?? !1), [G, y]),
        J = (0, s.bG)([v.Ay], () => (null != w && null != G ? v.Ay.getBadgeById(G.badge_id, w) : void 0), [G, w]),
        Y = J?.owned ?? !1,
        q = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, eV._)({ ...e, stackingBehavior: "replace" }).then(() => {
                    n();
                });
            },
            [n],
        ),
        K = l.useCallback(() => {
            null != y &&
                null != G &&
                (B
                    ? q({
                          initialBadgeId: G.badge_id,
                          targetUserId: y,
                          targetUsername: I,
                          viewingCurrentUserBadges: !0,
                      })
                    : q({ initialBadgeId: G.badge_id, targetUserId: y, targetUsername: I }));
        }, [B, G, q, y, I]),
        W = l.useCallback(() => {
            null != w &&
                null != y &&
                (f({ actionName: "view_your_badges_pressed", badge: G, displayedUserId: U, isSociallyNavigated: B }),
                q({ targetUserId: y, targetUsername: I, viewingCurrentUserBadges: !0 }));
        }, [w, U, B, G, q, y, I]),
        Q = l.useCallback(() => {
            null != U && (0, b.RS)(U, { isRetry: !0 });
        }, [U]),
        X = l.useCallback(() => {
            (f({ actionName: "badge_directory_closed", badge: G, displayedUserId: U, isSociallyNavigated: B }), n());
        }, [U, B, n, G]),
        ee = l.useCallback(() => {
            null != w &&
                (f({
                    actionName: "customize_your_badges_pressed",
                    badge: G,
                    displayedUserId: U,
                    isSociallyNavigated: B,
                }),
                X(),
                A.A.setState({ isOpen: !0 }),
                (0, h.kN)(w) || (0, x.openUserProfileModal)({ userId: w }));
        }, [w, U, X, B, G]),
        et = G?.badge_id;
    return (
        !(function (e) {
            let { badgeId: t, enabled: n } = e;
            l.useEffect(() => {
                null != t && n && T.has(t) && (0, b.PV)(t);
            }, [t, n]);
        })({ badgeId: et, enabled: H }),
        l.useEffect(() => {
            null != G && f({ actionName: "badge_detail_viewed", badge: G, displayedUserId: U, isSociallyNavigated: B });
        }, [et, U, B]),
        (0, i.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": eo.intl.string(eo.t.PEjP4L),
            transitionState: t,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: C ? e2.C : ex.CR,
            children: (0, i.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: ex.jE,
                children: [
                    (M || V || null == G) &&
                        (0, i.jsx)("div", { className: ex.b, children: (0, i.jsx)(d.J, { onClick: X, size: "sm" }) }),
                    M
                        ? (0, i.jsx)("div", { className: ex.Lq, children: (0, i.jsx)(c.y, {}) })
                        : V
                          ? (0, i.jsxs)("div", {
                                className: ex.IU,
                                children: [
                                    (0, i.jsx)(o.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: eo.intl.string(eo.t.iufib1),
                                    }),
                                    (0, i.jsx)(u.E, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        className: ex.TQ,
                                        children: eo.intl.string(eo.t.eAn6z2),
                                    }),
                                    (0, i.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: Q,
                                        text: eo.intl.string(eo.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(ej, {
                                        selectedBadgeId: G?.badge_id ?? null,
                                        onSelectBadge: k,
                                        displayedUserId: U,
                                        isViewingOtherUser: B,
                                        targetUsername: I,
                                        onViewOwnCatalog: W,
                                        onCustomizeBadges: ee,
                                        showBadgeIndicators: H,
                                    }),
                                    null != G &&
                                        (C
                                            ? (0, i.jsx)(e1, {
                                                  badge: G,
                                                  viewerBadge: J,
                                                  onClose: X,
                                                  isViewingOtherUser: B,
                                                  targetUsername: I,
                                                  displayedUserId: U,
                                                  viewerOwnsBadge: Y,
                                                  onViewOwnCatalog: W,
                                              })
                                            : (0, i.jsx)(eM, {
                                                  badge: G,
                                                  viewerBadge: J,
                                                  onClose: X,
                                                  isOwnProfile: S,
                                                  isViewingOtherUser: B,
                                                  targetUsername: I,
                                                  displayedUserId: U,
                                                  targetOwnsBadge: Z,
                                                  viewerOwnsBadge: Y,
                                                  onToggleViewedUser: K,
                                                  onViewOwnCatalog: W,
                                              })),
                                ],
                            }),
                ],
            }),
        })
    );
}
