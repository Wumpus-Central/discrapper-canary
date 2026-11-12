a.d(l, { default: () => ld });
var t = a(477900),
    n = a(582128),
    i = a(731738),
    s = a(855986),
    r = a(935462),
    d = a(231723),
    o = a(815021),
    c = a(289873),
    u = a(534514),
    m = a(834730),
    g = a(821609),
    x = a(913379),
    h = a(702476),
    b = a(403777),
    _ = a(287809),
    v = a(682618),
    j = a(73153);
let y = { seenBadgeIndicatorIds: new Set() };
class p extends s.Ay.PersistedStore {
    static displayName = "BadgeDirectorySeenStore";
    static persistKey = "BadgeDirectorySeenStore";
    initialize(e) {
        y = { seenBadgeIndicatorIds: new Set(e?.seenBadgeIndicatorIds ?? []) };
    }
    getState() {
        return { seenBadgeIndicatorIds: Array.from(y.seenBadgeIndicatorIds) };
    }
    getSeenBadgeIndicators() {
        return y.seenBadgeIndicatorIds;
    }
}
let N = new p(j.h, {
    BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN: function (e) {
        let { badgeId: l } = e;
        if (y.seenBadgeIndicatorIds.has(l)) return !1;
        y = { ...y, seenBadgeIndicatorIds: new Set([...y.seenBadgeIndicatorIds, l]) };
    },
});
var f = a(982240);
let E = (0, a(945810).mj)({
    name: "2026-10-badge-directory-updates",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var I = a(620143),
    A = a(988341),
    w = a(129230),
    S = a(652215);
function T(e) {
    let {
            actionName: l,
            badge: a,
            displayedUserId: t,
            isSociallyNavigated: n,
            hasUnreadIndicator: i,
            source: s,
            surface: r,
        } = e,
        d = _.default.getCurrentUser()?.id,
        o = null != a && null != d ? f.Ay.getBadgeById(a.badge_id, d) : void 0,
        c = null != a && null != d ? f.Ay.getRemainingToNextTier(a.badge_id, d) : void 0,
        u = null != t ? f.Ay.getBadges(t).filter((e) => e.owned).length : void 0;
    w.default.track(S.HAw.BADGE_DIRECTORY_ACTION, {
        badge_action: l,
        badge_id: a?.badge_id,
        badge_tier: null != a ? ((a.owned ? a.current_tier : a.next_tier) ?? a.tiers?.[0]?.key) : void 0,
        badge_owner_id: t,
        is_owned: o?.owned ?? !1,
        progress_to_next_tier: c,
        is_earnable: a?.is_earnable ?? !1,
        is_socially_navigated: n,
        total_badges_owned: u,
        has_unread_indicator: i,
        surface: r,
        source: s,
    });
}
var C = a(248284);
let B = A.sC;
a(321073);
var U = a(503698),
    O = a.n(U),
    k = a(70283),
    R = a(805251),
    D = a(97808),
    F = a(123292),
    L = a(683071),
    M = a(707554),
    G = a(95362),
    $ = a(404778),
    P = a(136969),
    z = a(775602),
    V = a(640708),
    H = a(780964),
    Y = a(766075),
    Z = a(153488),
    q = a(240248),
    J = a(731309),
    K = a(837381),
    Q = a(116903),
    W = a(741918),
    X = a(939249),
    ee = a(643056),
    el = a(486020);
function ea(e, l, a) {
    let t = (0, s.bG)([_.default], () => (null != e ? _.default.getUser(e) : void 0), [e]);
    if (null != t && l) return (0, el.ku)({ id: t.id, avatar: t.avatar, discriminator: t.discriminator }, !1, a);
}
var et = a(696292),
    en = a(975807),
    ei = a(990820),
    es = a(216934),
    er = a(976860),
    ed = a(758836),
    eo = a(682901),
    ec = a(792996);
let eu = {
        [k.$.STAFF]: {
            ctaLabel: () => ec.intl.string(ec.t.q7A8hP),
            ctaAction: () => (0, en.A)("https://discord.com/careers"),
        },
        [k.$.PREMIUM_TENURE]: {
            ctaLabel: (e) => {
                let { owned: l, isViewerOnUpgradeableNitro: a } = e;
                return !0 === a
                    ? ec.intl.string(ec.t.uKFeS1)
                    : l
                      ? ec.intl.string(ec.t.xGjjkd)
                      : ec.intl.string(ec.t.BTxm69);
            },
            ctaAction: () => (0, er.pX)(S.BVt.NITRO_HOME),
        },
        [k.$.GUILD_BOOSTER]: {
            ctaLabel: (e) => {
                let { owned: l } = e;
                return l ? ec.intl.string(ec.t.VMvz3m) : ec.intl.string(ec.t.xFVZeU);
            },
            ctaAction: () => (0, Y.openUserSettings)(H.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
        },
        [k.$.ORB_PROFILE]: {
            ctaLabel: () => ec.intl.string(ec.t.fG3RIg),
            ctaAction: () => (0, er.pX)(S.BVt.COLLECTIBLES_SHOP_WITH_TAB(ed.G2.ORBS)),
        },
        [k.$.QUEST_COMPLETED]: {
            ctaLabel: () => ec.intl.string(ec.t.swICIT),
            ctaAction: () => (0, es.m)({ fromContent: et.u.QUEST_BADGE }),
        },
        [k.$.GIFTING]: {
            ctaLabel: () => ec.intl.string(ec.t["nUA/JW"]),
            ctaAction: () => (0, ei.A)({ giftingOrigin: eo.vQ.BADGE_DIRECTORY }),
        },
    },
    em = "badge-details";
var eg = a(778712),
    ex = a(177861);
function eh(e) {
    return `badge-tab-${e}`;
}
function eb(e) {
    let l = Array.from(e);
    return l.length > 19 ? `${l.slice(0, 19).join("")}...` : e;
}
function e_(e) {
    let { badge: l, isSelected: a, onSelect: i, itemId: s, showBadgeIndicator: r } = e,
        d = (0, K.rm)(s),
        o = l.owned ? l.current_tier : l.next_tier,
        c =
            null != o
                ? l.tiers.find((e) => {
                      let { key: l } = e;
                      return l === o;
                  })
                : void 0,
        u = l.badge_id === k.$.PREMIUM_TENURE ? (c?.name ?? c?.key) : c?.name,
        m = null != u ? `${l.name}, ${u}` : l.name,
        g = r ? `${m}, ${ec.intl.string(ec.t.y2b7CA)}` : m,
        x = n.useRef(null);
    return (0, t.jsxs)(X.D, {
        ...d,
        innerRef: x,
        role: "tab",
        id: eh(l.badge_id),
        "aria-label": g,
        "aria-selected": a,
        "aria-controls": a ? em : void 0,
        className: O()(ex.oL, a && ex.xO),
        onFocus: d.onFocus,
        onClick: () => {
            (x.current?.focus(), i());
        },
        children: [
            r && (0, t.jsx)("span", { "aria-hidden": !0, className: ex.Dn }),
            null != l.simple_icon_url &&
                (0, t.jsx)("img", {
                    src: l.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: ex.pW,
                }),
        ],
    });
}
function ev(e) {
    let { label: l, navId: a, badges: n, selectedBadgeId: i, onSelectBadge: s, badgeIndicatorIds: r } = e,
        d = (0, Q.Ay)({
            id: a,
            isEnabled: !0,
            orientation: W.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, t.jsxs)("div", {
        className: ex.zE,
        children: [
            "heading" === l.type &&
                (0, t.jsx)(u.D, { id: l.id, variant: "heading-xs/medium", color: "text-default", children: l.text }),
            (0, t.jsx)(K.hD, {
                navigator: d,
                children: (0, t.jsx)(K.PR, {
                    children: (e) =>
                        (0, t.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === l.type ? l.id : void 0,
                            "aria-label": "aria" === l.type ? l.text : void 0,
                            className: ex.yq,
                            children: n.map((e, l) => {
                                let a = e.badge_id === i;
                                return (0, t.jsx)(
                                    e_,
                                    {
                                        itemId: `item-${l}`,
                                        badge: e,
                                        isSelected: a,
                                        onSelect: () => s(e.badge_id),
                                        showBadgeIndicator: !a && r.has(e.badge_id),
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
            selectedBadgeId: l,
            onSelectBadge: a,
            displayedUserId: i,
            isViewingOtherUser: r,
            targetUsername: d,
            onViewOwnCatalog: o,
            onCustomizeBadges: c,
            showBadgeIndicators: x,
        } = e,
        h = (0, s.yK)([f.Ay], () => (null != i ? f.Ay.getBadges(i) : []), [i]),
        { earnable: b, owned: _ } = n.useMemo(() => (0, A.in)(h), [h]),
        v = n.useMemo(() => [..._, ...b], [_, b]),
        { badgeIndicatorIds: j } = (function (e) {
            let { badges: l, enabled: a } = e,
                t = (0, s.bG)([N], () => N.getSeenBadgeIndicators());
            return {
                badgeIndicatorIds: n.useMemo(
                    () =>
                        a
                            ? new Set(
                                  l
                                      .filter((e) => {
                                          let { badge_id: l } = e;
                                          return B.has(l) && !t.has(l);
                                      })
                                      .map((e) => {
                                          let { badge_id: l } = e;
                                          return l;
                                      }),
                              )
                            : new Set(),
                    [l, a, t],
                ),
            };
        })({ badges: v, enabled: x }),
        y = n.useMemo(() => new Set(x ? v.filter((e) => !0 === e.has_updates).map((e) => e.badge_id) : []), [x, v]),
        p = (0, I.e)({ location: "BadgeDirectoryPanel", hasUnread: y.size > 0 }),
        E = n.useMemo(() => (p ? new Set([...j, ...y]) : j), [p, j, y]),
        w = ea(i, r, 48),
        S = (0, ee.d)({ location: "BadgeDirectoryPanel" }),
        T = null != d ? eb(d) : null,
        C = null != d && T !== d,
        U =
            null != T && C && null != w
                ? (0, t.jsxs)("span", {
                      className: ex._p,
                      children: [(0, t.jsx)(D.eu, { src: w, size: eg._3.SIZE_24, "aria-hidden": !0 }), T],
                  })
                : T,
        O = r && null != U ? ec.intl.format(ec.t.EIcwoe, { username: U }) : ec.intl.string(ec.t.UqnlQF),
        k = r && null != d ? ec.intl.string(ec.t["75s2Rq"]) : ec.intl.string(ec.t["62xU4E"]),
        R = r && null != d ? ec.intl.formatToPlainString(ec.t.BCjSZy, { username: d }) : ec.intl.string(ec.t.UqnlQF);
    return (0, t.jsx)("div", {
        className: ex.ws,
        children: (0, t.jsxs)(M.F, {
            component: (0, t.jsxs)("div", {
                className: ex.NG,
                children: [
                    (0, t.jsxs)("div", {
                        className: ex.kc,
                        children: [
                            !C && null != w && (0, t.jsx)(D.eu, { src: w, size: eg._3.SIZE_24, "aria-hidden": !0 }),
                            (0, t.jsx)(u.D, { variant: "heading-lg/semibold", color: "text-strong", children: O }),
                        ],
                    }),
                    (0, t.jsx)(m.E, { variant: "body-sm/medium", color: "text-subtle", children: k }),
                ],
            }),
            children: [
                (0, t.jsxs)(G.Ip, {
                    className: ex.hG,
                    children: [
                        _.length > 0 &&
                            (0, t.jsx)(ev, {
                                label: { type: "aria", text: R },
                                navId: "badge-directory-owned",
                                badges: _,
                                selectedBadgeId: l,
                                onSelectBadge: a,
                                badgeIndicatorIds: E,
                            }),
                        !r &&
                            b.length > 0 &&
                            (0, t.jsx)(ev, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: ec.intl.string(ec.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: b,
                                selectedBadgeId: l,
                                onSelectBadge: a,
                                badgeIndicatorIds: E,
                            }),
                    ],
                }),
                (r || S) &&
                    (0, t.jsx)("div", {
                        className: ex.HO,
                        children: r
                            ? (0, t.jsx)(g.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: o,
                                  text: ec.intl.string(ec.t.msyp90),
                              })
                            : (0, t.jsx)(g.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: c,
                                  text: ec.intl.string(ec.t["6CLLyH"]),
                              }),
                    }),
            ],
        }),
    });
}
var ey = a(911608),
    ep = a(847374),
    eN = a(770178),
    ef = a(194261),
    eE = a(140735),
    eI = a(836825);
function eA(e) {
    let { badge: l, isViewingOtherUser: a, targetUsername: i, isViewerOnUpgradeableNitro: s = !1 } = e,
        r = n.useId(),
        d = a && null != i;
    return (0, t.jsxs)(t.Fragment, {
        children: [
            d &&
                (0, t.jsx)("div", {
                    className: eI.u4,
                    children: (0, t.jsx)(m.E, {
                        id: r,
                        variant: "body-xs/medium",
                        color: "text-subtle",
                        children: ec.intl.formatToPlainString(ec.t.KyTwIh, { username: i }),
                    }),
                }),
            (0, t.jsx)("div", {
                className: eI.SV,
                role: "list",
                "aria-label": d ? void 0 : l.name,
                "aria-labelledby": d ? r : void 0,
                children: l.tiers.map((e) => {
                    let n = e.owned,
                        i = !n && l.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        o = (0, A.Vs)({ tier: e, isUnlocked: n, isViewingOtherUser: a, isViewerOnUpgradeableNitro: s });
                    return (0, t.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: O()(eI.zh, i && eI.ZF),
                            children: [
                                null != r &&
                                    (0, t.jsx)("img", {
                                        className: eI.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, t.jsxs)(m.E, {
                                    variant: "footnote/medium",
                                    color: n ? "text-default" : "text-muted",
                                    className: eI.hI,
                                    children: [
                                        null != d &&
                                            (0, t.jsxs)("span", {
                                                className: eI.nU,
                                                children: [
                                                    !n &&
                                                        (0, t.jsx)(ef.LockIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: eI.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    d,
                                                ],
                                            }),
                                        "" !== o && (0, t.jsx)("span", { className: eI.nU, children: o }),
                                    ],
                                }),
                                (0, t.jsx)(eE.A, { children: ec.intl.string(n ? ec.t.sTFApF : ec.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var ew = a(600409);
function eS(e) {
    let { badge: l, viewerBadge: a, isViewingOtherUser: i, targetUsername: r, isViewerOnUpgradeableNitro: d } = e,
        [o, c] = n.useState(!1),
        [u, g] = n.useState(l.badge_id),
        x = n.useId(),
        h = n.useId(),
        b = n.useRef(null),
        _ = n.useRef(null);
    l.badge_id !== u && (g(l.badge_id), c(!1));
    let v = n.useCallback(() => {
            let e = b.current;
            null != e &&
                e.contains(document.activeElement) &&
                e.scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" });
        }, []),
        j = n.useCallback(
            (e) => {
                null != e.target && o && v();
            },
            [o, v],
        );
    (0, eN.g)(_, j, [o], { enabled: o });
    let y = a ?? l,
        p = (0, s.bG)([Z.A], () => Z.A.hasConsented(S.YAq.PERSONALIZATION)),
        N = !i && (0, A.Jn)(l.badge_id) && !p,
        f = i ? void 0 : y.next_tier,
        E = i ? void 0 : y.current_tier,
        I = null != f ? y.tiers.find((e) => e.key === f) : void 0,
        w = null != E ? y.tiers.find((e) => e.key === E) : void 0,
        T = i ? void 0 : y.progress?.[0],
        C = T?.threshold ?? I?.requirements[0]?.threshold ?? null,
        B = !i && y.owned && null != I,
        U = i || (0, q.uJ)(y.leveling_instructions) || B ? void 0 : y.leveling_instructions,
        k = I?.name != null ? ec.intl.formatToPlainString(ec.t["Jn+COZ"], { tier_name: I.name }) : void 0,
        R = o ? ec.intl.string(ec.t["065Hig"]) : ec.intl.string(ec.t.MylOvg),
        D = i ? l : y,
        F = w?.complex_icon_static_url ?? w?.simple_icon_url,
        L = I?.complex_icon_static_url ?? I?.simple_icon_url,
        M = !(0, q.uJ)(T?.progress_helper_text),
        G = null != k ? { "aria-labelledby": h } : { "aria-label": ec.intl.string(ec.t.Uwhb1l) };
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null != U && (0, t.jsx)(m.E, { variant: "body-xs/medium", color: "text-subtle", children: U }),
            B &&
                !N &&
                (0, t.jsxs)("div", {
                    className: ew.ES,
                    children: [
                        null != F &&
                            (0, t.jsx)("img", { className: ew.Tw, src: F, alt: "", "aria-hidden": !0, draggable: !1 }),
                        (0, t.jsxs)("div", {
                            className: ew.Bd,
                            children: [
                                null != k && (0, t.jsx)(m.E, { id: h, variant: "body-sm/medium", children: k }),
                                null != C
                                    ? (0, t.jsx)(ey.z, {
                                          value: T?.current ?? 0,
                                          minValue: T?.floor ?? 0,
                                          maxValue: C,
                                          size: "md",
                                          className: ew.hr,
                                          ...G,
                                      })
                                    : null != T &&
                                      (0, t.jsx)(ey.z, { isIndeterminate: !0, size: "md", className: ew.hr, ...G }),
                                M &&
                                    (0, t.jsx)(m.E, {
                                        variant: "body-xs/medium",
                                        color: "text-subtle",
                                        children: T?.progress_helper_text,
                                    }),
                            ],
                        }),
                        null != L &&
                            (0, t.jsx)("img", { className: ew.Tw, src: L, alt: "", "aria-hidden": !0, draggable: !1 }),
                    ],
                }),
            B && !N
                ? (0, t.jsxs)("div", {
                      className: ew.JC,
                      children: [
                          (0, t.jsx)("div", {
                              ref: _,
                              className: O()(ew.ne, o && ew.GB),
                              id: x,
                              children: (0, t.jsx)("div", {
                                  className: ew.zL,
                                  inert: !o,
                                  children: (0, t.jsxs)("div", {
                                      className: ew.GA,
                                      children: [
                                          (0, t.jsx)($.c, { className: ew.yF }),
                                          (0, t.jsx)(eA, {
                                              badge: D,
                                              isViewingOtherUser: i,
                                              targetUsername: r,
                                              isViewerOnUpgradeableNitro: d,
                                          }),
                                      ],
                                  }),
                              }),
                          }),
                          (0, t.jsxs)(X.D, {
                              innerRef: b,
                              className: ew.tw,
                              "aria-expanded": o,
                              "aria-controls": x,
                              onClick: () => c(!o),
                              children: [
                                  (0, t.jsx)(m.E, {
                                      className: ew.Yi,
                                      variant: "body-xs/medium",
                                      color: "text-subtle",
                                      children: R,
                                  }),
                                  (0, t.jsx)(ep.ChevronSmallDownIcon, {
                                      size: "sm",
                                      color: "currentColor",
                                      "aria-hidden": !0,
                                      className: O()(ew.ai, o && ew.hg),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, t.jsx)(eA, { badge: D, isViewingOtherUser: i, targetUsername: r, isViewerOnUpgradeableNitro: d }),
        ],
    });
}
var eT = a(536001),
    eC = a(260981),
    eB = a(540418),
    eU = a(907085),
    eO = a(179820);
function ek(e) {
    if (null == e) return null;
    switch (e) {
        case eT.x.COMMON:
            return {
                type: { text: ec.intl.string(ec.t.L0K5ci) },
                variant: "rarity-common",
                icon: eC.ExperimentalCommonIcon,
            };
        case eT.x.RARE:
            return {
                type: { text: ec.intl.string(ec.t["sTx/5z"]) },
                variant: "rarity-rare",
                icon: eB.ExperimentalRareIcon,
            };
        case eT.x.EPIC:
            return {
                type: { text: ec.intl.string(ec.t.RD8RiN) },
                variant: "rarity-epic",
                icon: eU.ExperimentalEpicIcon,
            };
        case eT.x.MYTHIC:
            return {
                type: { text: ec.intl.string(ec.t.vqc1ol) },
                variant: "rarity-mythic",
                icon: eO.ExperimentalMythicIcon,
            };
        default:
            return null;
    }
}
let eR = [ec.t["6zFA/T"], ec.t.wzZHKl, ec.t["+ED/nf"]];
function eD() {
    let e = Math.floor(Math.random() * eR.length);
    return ec.intl.string(eR[e]);
}
function eF(e) {
    let { earnedDateText: l, label: a } = e;
    return (0, t.jsxs)("div", {
        className: O()(ex.AX, ex.aS),
        children: [
            (0, t.jsx)(m.E, { variant: "body-xs/medium", color: "text-default", className: ex.NM, children: l }),
            (0, t.jsx)(m.E, { variant: "body-xs/medium", color: "text-subtle", className: ex.MZ, children: a }),
        ],
    });
}
function eL(e) {
    let { rarityBadgeProps: l } = e;
    return (0, t.jsxs)("div", {
        className: O()(ex.AX, ex.sn),
        children: [
            (0, t.jsx)(R.E, { ...l }),
            (0, t.jsx)(m.E, {
                variant: "body-xs/medium",
                color: "text-subtle",
                children: ec.intl.string(ec.t["phYZe+"]),
            }),
        ],
    });
}
function eM() {
    return (0, t.jsx)(V.A, { height: 3, width: 3, "aria-hidden": "true", className: ex.zN });
}
function eG(e) {
    let { segments: l } = e;
    return 0 === l.length
        ? null
        : (0, t.jsx)("div", {
              className: ex.U3,
              children: l.map((e, l) => {
                  let { key: a, node: n } = e;
                  return (0, t.jsxs)("span", { className: ex.Hq, children: [l > 0 && (0, t.jsx)(eM, {}), n] }, a);
              }),
          });
}
function e$(e) {
    let {
            badge: l,
            isOwnProfile: a,
            isViewingOtherUser: n,
            targetUsername: i,
            viewedAvatarSrc: s,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: o,
            onToggleViewedUser: c,
        } = e,
        u = (0, q.uJ)(l.info_label) ? void 0 : l.info_label,
        { statusText: g, toggleText: x } = (function (e) {
            let l,
                a,
                {
                    badge: t,
                    isOwnProfile: n,
                    isViewingOtherUser: i,
                    targetUsername: s,
                    targetOwnsBadge: r,
                    viewerOwnsBadge: d,
                    unlockedStatusText: o,
                } = e;
            if (
                ((l = n
                    ? t.owned
                        ? o
                        : ec.intl.string(ec.t.uHtDcT)
                    : i && null != s
                      ? ec.intl.formatToPlainString(ec.t.Eo5Cnp, { username: eb(s) })
                      : t.owned
                        ? o
                        : ec.intl.string(ec.t.uHtDcT)),
                !n)
            ) {
                let e = !i && r && null != s;
                i && d
                    ? (a = ec.intl.string(ec.t.yxEAGH))
                    : e && (a = ec.intl.formatToPlainString(ec.t["9GNsge"], { username: eb(s) }));
            }
            return { statusText: l, toggleText: a };
        })({
            badge: l,
            isOwnProfile: a,
            isViewingOtherUser: n,
            targetUsername: i,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: o,
        }),
        h = [];
    (null != g &&
        h.push({
            key: "status",
            node: (0, t.jsxs)("span", {
                className: ex.pC,
                children: [
                    !a && null != s && (0, t.jsx)(D.eu, { src: s, size: eg._3.SIZE_16, "aria-hidden": !0 }),
                    (0, t.jsx)(m.E, {
                        tag: "span",
                        variant: "body-xs/medium",
                        color: "text-subtle",
                        className: ex.$L,
                        children: g,
                    }),
                ],
            }),
        }),
        null != u &&
            h.push({
                key: "info",
                node: (0, t.jsx)(m.E, {
                    tag: "span",
                    variant: "body-xs/medium",
                    color: "text-subtle",
                    className: ex.$L,
                    children: u,
                }),
            }));
    let b = h.length >= 3 && null != x,
        _ =
            null != x
                ? {
                      key: "toggle",
                      node: (0, t.jsx)(F.Q, {
                          variant: "primary",
                          size: "sm",
                          textVariant: "body-xs/medium",
                          onClick: c,
                          text: x,
                      }),
                  }
                : void 0,
        v = b || null == _ ? h : [...h, _];
    return 0 === v.length && null == _
        ? null
        : (0, t.jsxs)("div", {
              className: ex.rI,
              children: [(0, t.jsx)(eG, { segments: v }), b && null != _ && (0, t.jsx)(eG, { segments: [_] })],
          });
}
function eP(e) {
    let l,
        a,
        i,
        r,
        d,
        c,
        x,
        {
            badge: h,
            viewerBadge: b,
            onClose: v,
            isOwnProfile: j,
            isViewingOtherUser: y,
            targetUsername: p,
            displayedUserId: N,
            targetOwnsBadge: E,
            viewerOwnsBadge: I,
            onToggleViewedUser: w,
            onViewOwnCatalog: C,
        } = e,
        B = ea(N, y, 32),
        U = (0, A.DW)(h),
        R = (0, s.bG)([z.Ay], () => z.Ay.useReducedMotion)
            ? void 0
            : (U?.complex_icon_animated_url ?? h.complex_icon_animated_url),
        D = U?.complex_icon_static_url ?? h.complex_icon_static_url,
        F = U?.simple_icon_url ?? h.simple_icon_url,
        V = R ?? D ?? F,
        K = ek(U?.rarity ?? h.rarity) ?? void 0,
        Q = eu[h.badge_id],
        W = h.badge_id === k.$.PREMIUM_TENURE,
        X = W ? (U?.name ?? U?.key) : U?.name,
        ee = W ? ec.intl.string(ec.t.Ipxkog) : h.name;
    W ? (r = null != X ? `${ee} ${X}` : ee) : null != X ? ((i = ee), (r = X)) : (r = ee);
    let el = (0, J.ie)(h.badge_id) && !h.is_earnable && h.badge_id !== k.$.STAFF,
        et = (h.tiers?.length ?? 0) > 0,
        en = (0, f.H5)(h),
        ei = (function (e) {
            let [l, a] = n.useState(eD),
                [t, i] = n.useState(e);
            return (e !== t && (i(e), a(eD())), l);
        })(h.badge_id);
    d = h.owned
        ? h.badge_id === k.$.APRIL_FOOLS_2026
            ? ec.intl.string(ec.t["5LcHT0"])
            : el && null == en
              ? ei
              : (function (e) {
                    if (null == e) return;
                    let l = new Date(e);
                    if (!Number.isNaN(l.getTime()))
                        return l.toLocaleDateString(ec.intl.currentLocale, {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        });
                })(en)
        : et
          ? "--"
          : void 0;
    let es = ((a = null == (l = h.tiers?.[0]?.key) || U?.key === l), ec.intl.string(a ? ec.t.WDhIz2 : ec.t.wYaDmz)),
        er = null != d && h.badge_id !== k.$.STAFF,
        ed = null != K,
        eg = null;
    ((er || ed) &&
        (eg = (0, t.jsxs)("div", {
            className: O()(ex.$S, (!er || !ed) && ex.jQ),
            children: [
                er && null != d && (0, t.jsx)(eF, { earnedDateText: d, label: es }),
                ed && (0, t.jsx)(eL, { rarityBadgeProps: K }),
            ],
        })),
        er || (c = ec.intl.string(ec.t.sTFApF)));
    let eb = _.default.getCurrentUser()?.premiumType,
        e_ = W && (eb === eo.PremiumTypes.TIER_0 || eb === eo.PremiumTypes.TIER_1);
    x =
        !e_ && b?.owned === !0 && (b.tiers?.length ?? 0) > 0 && null == b.next_tier
            ? ec.intl.string(ec.t.jY5xAL)
            : e_
              ? ec.intl.string(ec.t.qkwSSp)
              : (b?.description ?? h.description);
    let ev = n.useCallback(() => {
            null != Q &&
                (T({
                    actionName: "primary_badge_action_clicked",
                    badge: h,
                    displayedUserId: N,
                    isSociallyNavigated: y,
                }),
                v(),
                P.A.popAll(),
                Q.ctaAction());
        }, [h, N, y, Q, v]),
        ej =
            !y || h.is_earnable || I || h.badge_id === k.$.STAFF
                ? null
                : (0, t.jsx)(L.w, {
                      type: "info",
                      message: ec.intl.format(ec.t.vFekBs, { onViewBadges: C }),
                      role: "none",
                  }),
        ey = (0, s.bG)([Z.A], () => Z.A.hasConsented(S.YAq.PERSONALIZATION)),
        ep = (0, A.Jn)(h.badge_id) && !y && !ey;
    return (0, t.jsx)(M.F, {
        forceLevel: 2,
        children: (0, t.jsx)("div", {
            id: em,
            role: "tabpanel",
            "aria-labelledby": eh(h.badge_id),
            className: ex.SV,
            children: (0, t.jsxs)(G.d_, {
                className: ex.C9,
                children: [
                    (0, t.jsx)("div", { className: ex.Gw, children: (0, t.jsx)(o.J, { onClick: v, size: "sm" }) }),
                    null != V &&
                        (0, t.jsx)("img", {
                            className: O()(ex.y2, null != R && V === R && ex.hu),
                            src: V,
                            alt: "",
                            "aria-hidden": !0,
                            draggable: !1,
                        }),
                    (0, t.jsxs)("div", {
                        className: ex.OU,
                        children: [
                            (0, t.jsx)("div", {
                                className: ex.cQ,
                                children: (0, t.jsxs)("div", {
                                    className: ex.nj,
                                    children: [
                                        (0, t.jsxs)(u.D, {
                                            variant: W ? "nitro-sm" : "display-sm",
                                            color: "text-strong",
                                            className: O()(ex._r, W && ex.ve),
                                            children: [
                                                null != i &&
                                                    (0, t.jsx)(m.E, {
                                                        tag: "span",
                                                        variant: "body-sm/medium",
                                                        color: "text-subtle",
                                                        className: ex.$g,
                                                        children: i,
                                                    }),
                                                r,
                                            ],
                                        }),
                                        (0, t.jsx)(e$, {
                                            badge: h,
                                            isOwnProfile: j,
                                            isViewingOtherUser: y,
                                            targetUsername: p,
                                            viewedAvatarSrc: B,
                                            targetOwnsBadge: E,
                                            viewerOwnsBadge: I,
                                            unlockedStatusText: c,
                                            onToggleViewedUser: w,
                                        }),
                                    ],
                                }),
                            }),
                            (0, t.jsxs)("div", {
                                className: ex.oA,
                                children: [
                                    ep &&
                                        (0, t.jsx)(L.w, {
                                            type: "info",
                                            message: ec.intl.format(ec.t.Zh44ni, {
                                                onGoToSettings: () =>
                                                    (0, Y.openUserSettings)(H.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                            }),
                                            role: "none",
                                        }),
                                    eg,
                                    !(0, q.uJ)(x) &&
                                        (0, t.jsxs)("div", {
                                            className: ex.d9,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: ex.E4,
                                                    children: [
                                                        (0, t.jsxs)("div", {
                                                            className: ex.jv,
                                                            children: [
                                                                el &&
                                                                    (0, t.jsx)(m.E, {
                                                                        variant: "body-xs/medium",
                                                                        color: "text-subtle",
                                                                        className: ex.c$,
                                                                        children: ec.intl.string(ec.t["/Gmn3f"]),
                                                                    }),
                                                                (0, t.jsx)(m.E, {
                                                                    variant: "body-sm/medium",
                                                                    color: "text-default",
                                                                    className: ex.ij,
                                                                    children: x,
                                                                }),
                                                            ],
                                                        }),
                                                        null != Q &&
                                                            (0, t.jsx)(g.$, {
                                                                variant: e_
                                                                    ? "expressive"
                                                                    : I
                                                                      ? "secondary"
                                                                      : W
                                                                        ? "expressive"
                                                                        : "primary",
                                                                size: "sm",
                                                                onClick: ev,
                                                                text: Q.ctaLabel({
                                                                    owned: I,
                                                                    isViewerOnUpgradeableNitro: e_,
                                                                }),
                                                            }),
                                                    ],
                                                }),
                                                et &&
                                                    (0, t.jsxs)("div", {
                                                        className: ex.cJ,
                                                        children: [
                                                            (0, t.jsx)($.c, {}),
                                                            (0, t.jsx)(eS, {
                                                                badge: h,
                                                                viewerBadge: b,
                                                                isViewingOtherUser: y,
                                                                targetUsername: p,
                                                                isViewerOnUpgradeableNitro: e_,
                                                            }),
                                                        ],
                                                    }),
                                                null != ej && (0, t.jsx)("div", { className: ex.Z6, children: ej }),
                                            ],
                                        }),
                                    (0, q.uJ)(x) && ej,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var ez = a(470739),
    eV = a(515718);
function eH(e, l, a) {
    let t = a ? void 0 : (l?.complex_icon_animated_url ?? e.complex_icon_animated_url),
        n = t ?? l?.complex_icon_static_url ?? e.complex_icon_static_url ?? l?.simple_icon_url ?? e.simple_icon_url;
    return { animatedUrl: t, imageUrl: n };
}
function eY(e) {
    return (0, J.ie)(e.badge_id) && !e.is_earnable && e.badge_id !== k.$.STAFF;
}
let eZ = [ec.t["6zFA/T"], ec.t.wzZHKl, ec.t["+ED/nf"]];
function eq() {
    let e = Math.floor(Math.random() * eZ.length);
    return ec.intl.string(eZ[e]);
}
var eJ = a(765178),
    eK = a(943654),
    eQ = a(998304),
    eW = a(253400);
let eX = a(646514).A.unsafe_rawColors.NEUTRAL_35.resolve({ saturation: 1 }).hex();
function e0(e) {
    let [l, a] = n.useState(null);
    return (n.useEffect(() => {
        if (null == e) return;
        let l = !1;
        return (
            !(async function (e) {
                try {
                    let t,
                        n,
                        i = await (0, eV.S4)(e),
                        s =
                            (null != i
                                ? ((n =
                                      (t = i.filter((e) => {
                                          let [l, a, t] = e,
                                              { lightness: n } = (0, eQ.IB)(l, a, t);
                                          return n > 0.15 && n < 0.85;
                                      })).find((e) => {
                                          let [l, a, t] = e;
                                          return (0, eQ.IB)(l, a, t).saturation > 0.3;
                                      }) ?? t[0]),
                                  null != n ? (0, eQ.Ob)(n[0], n[1], n[2]) : null)
                                : null) ?? eX;
                    l || a({ url: e, color: s });
                } catch {
                    l || a({ url: e, color: eX });
                }
            })(e),
            () => {
                l = !0;
            }
        );
    }, [e]),
    null == e)
        ? eX
        : l?.url === e
          ? l.color
          : void 0;
}
var e1 = a(589801);
function e2(e, l) {
    return { previousTier: (0, A.YU)(e, l), currentTier: (0, A.DW)(e) };
}
function e3(e, l, a) {
    return a ? l?.simple_icon_raster_url : (l?.simple_icon_raster_url ?? e.simple_icon_raster_url);
}
function e8(e) {
    let { badge: l, tier: a, isStarted: i, isPreviousTier: s = !1, onLoad: r, className: d, fillClassName: o } = e,
        c = s ? (a?.complex_icon_static_url ?? a?.simple_icon_url) : eH(l, a, !0).imageUrl,
        u = e0(e3(l, a, s)),
        m = u ?? eX,
        [g, x] = n.useState(!1),
        h = n.useCallback(() => x(!0), []),
        b = g && null != u,
        [_, v] = n.useState(null);
    n.useEffect(() => {
        b && (v(i ? "fade-in" : "with-start"), r());
    }, [b]);
    let j = n.useMemo(
        () => ({
            "--custom-badge-unlock-color": m,
            "--custom-badge-unlock-halo": (0, eQ.KU)(m, 0.6),
            "--custom-badge-unlock-art": null != c ? `url("${c}")` : "none",
        }),
        [m, c],
    );
    return null == c
        ? null
        : (0, t.jsx)("div", {
              className: O()(e1.qd, (null == _ || !i) && e1.R, "fade-in" === _ && e1.qG),
              style: j,
              children: (0, t.jsxs)("div", {
                  className: O()(e1.qS, d),
                  children: [
                      (0, t.jsx)("img", {
                          className: e1.Qw,
                          src: c,
                          alt: "",
                          crossOrigin: "anonymous",
                          draggable: !1,
                          onLoad: h,
                          onError: h,
                      }),
                      (0, t.jsx)("div", {
                          className: O()(e1.ys, o),
                          children: (0, t.jsx)("div", { className: e1.GS }),
                      }),
                  ],
              }),
          });
}
function e9(e) {
    let { badge: l, previousTierKey: a, size: i, delay: r, canStart: d = !0, onStart: o } = e,
        c = (0, s.bG)([z.Ay], () => z.Ay.useReducedMotion),
        { previousTier: u, currentTier: m } = e2(l, a),
        g = null != u,
        x = g && !c,
        h = r + 250 * !!g,
        [b, _] = n.useState(0),
        v = n.useCallback(() => _((e) => e + 1), []),
        [j, y] = n.useState(!1),
        p = b >= (x ? 2 : 1),
        N = d && (p || j),
        [f, E] = n.useState(!1);
    !N || p || f || E(!0);
    let I = N && !c && !f;
    (n.useEffect(() => {
        if (!d) return;
        let e = setTimeout(() => y(!0), 3e3);
        return () => clearTimeout(e);
    }, [d]),
        n.useEffect(() => {
            N && o?.(f);
        }, [N]));
    let A = n.useMemo(() => ({ "--custom-badge-unlock-swap": `${h}ms` }), [h]);
    return (0, t.jsxs)("div", {
        className: O()(e1.Os, "large" === i ? e1.as : e1.EX, I && (g ? e1.xH : e1.YC)),
        style: A,
        children: [
            x &&
                !f &&
                (0, t.jsx)(e8, {
                    badge: l,
                    tier: u,
                    isStarted: N,
                    isPreviousTier: !0,
                    onLoad: v,
                    className: O()(I && e1.rH),
                    fillClassName: O()(e1.Nl, I && e1.Rt),
                }),
            (0, t.jsx)(e8, {
                badge: l,
                tier: m,
                isStarted: N,
                onLoad: v,
                className: O()(I && e1.CN),
                fillClassName: O()(I && e1.Eq),
            }),
        ],
    });
}
var e7 = a(193579);
let e4 = eW.Ay.getEnableHardwareAcceleration();
function e6(e) {
    let { badge: l, previousTierKey: a, canStart: i, onStart: r } = e,
        d = (0, s.bG)([z.Ay], () => z.Ay.useReducedMotion),
        { previousTier: o, currentTier: c } = e2(l, a),
        u = null != o,
        [m, g] = n.useState(!1),
        [x, h] = n.useState(!1),
        [b, _] = n.useState(!1),
        v = e4 && !d,
        j = e0(e3(l, c, !1)) ?? eX,
        y = n.useMemo(() => ({ fill: (0, eQ.E2)(j) }), [j]),
        p = n.useCallback(
            (e) => {
                (g(!0), _(e), r?.());
            },
            [r],
        );
    return (
        n.useEffect(() => {
            m && eJ.O.announce((0, A.kD)(l, a), "polite");
        }, [m]),
        n.useEffect(() => {
            if (!m || !v || b) return;
            let e = setTimeout(() => h(!0), 200 + 250 * !!u + 1e3);
            return () => clearTimeout(e);
        }, [v, u, b, m]),
        (0, t.jsxs)("div", {
            className: e7.Tl,
            "aria-hidden": !0,
            children: [
                v &&
                    (0, t.jsx)(eK.x, {
                        artboard: "Web",
                        autoplay: x,
                        dataBinding: y,
                        className: O()(e7.U6, !x && e7.qJ),
                    }),
                (0, t.jsx)(e9, { badge: l, previousTierKey: a, size: "large", delay: 200, canStart: i, onStart: p }),
            ],
        })
    );
}
var e5 = a(229667);
function le(e) {
    let l,
        a,
        i,
        s,
        { badge: r, viewerBadge: d } = e,
        o = n.useId(),
        {
            progress: c,
            threshold: u,
            currentArtUrl: g,
            nextArtUrl: x,
            helperText: h,
        } = ((l = d ?? r),
        (a = (0, A.YU)(l, l.current_tier)),
        (i = (0, A.YU)(l, l.next_tier)),
        {
            progress: (s = l.progress?.[0]),
            threshold: s?.threshold ?? i?.requirements[0]?.threshold ?? null,
            currentArtUrl: a?.simple_icon_url ?? a?.complex_icon_static_url,
            nextArtUrl: i?.simple_icon_url ?? i?.complex_icon_static_url,
            helperText: (0, q.uJ)(s?.progress_helper_text) ? void 0 : s?.progress_helper_text,
        }),
        b = null != h ? { "aria-labelledby": o } : { "aria-label": ec.intl.string(ec.t.Uwhb1l) };
    return (0, t.jsxs)("div", {
        className: e5.NE,
        children: [
            (0, t.jsx)(m.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: ec.intl.string(ec.t["2m/g2c"]),
            }),
            (0, t.jsxs)("div", {
                className: e5.ES,
                children: [
                    null != g &&
                        (0, t.jsx)("img", { className: e5.Tw, src: g, alt: "", "aria-hidden": !0, draggable: !1 }),
                    (0, t.jsxs)("div", {
                        className: e5.Bd,
                        children: [
                            null != h && (0, t.jsx)(m.E, { id: o, variant: "body-sm/medium", children: h }),
                            null != u
                                ? (0, t.jsx)(ey.z, {
                                      value: c?.current ?? 0,
                                      minValue: c?.floor ?? 0,
                                      maxValue: u,
                                      size: "md",
                                      className: e5.hr,
                                      ...b,
                                  })
                                : null != c &&
                                  (0, t.jsx)(ey.z, { isIndeterminate: !0, size: "md", className: e5.hr, ...b }),
                        ],
                    }),
                    null != x &&
                        (0, t.jsx)("img", { className: e5.Tw, src: x, alt: "", "aria-hidden": !0, draggable: !1 }),
                ],
            }),
        ],
    });
}
var ll = a(149285);
function la(e) {
    let { badge: l, isViewingOtherUser: a, targetUsername: i, isViewerOnUpgradeableNitro: s = !1 } = e,
        r = n.useId(),
        d = a && null != i;
    return (0, t.jsxs)(t.Fragment, {
        children: [
            d &&
                (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)($.c, {}),
                        (0, t.jsx)("div", {
                            className: ll.u4,
                            children: (0, t.jsx)(m.E, {
                                id: r,
                                variant: "body-sm/medium",
                                children: ec.intl.formatToPlainString(ec.t.KyTwIh, { username: i }),
                            }),
                        }),
                    ],
                }),
            (0, t.jsx)("div", {
                className: ll.SV,
                role: "list",
                "aria-label": d ? void 0 : l.name,
                "aria-labelledby": d ? r : void 0,
                children: l.tiers.map((e) => {
                    let n = e.owned,
                        i = !n && l.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        o = (0, A.Vs)({ tier: e, isUnlocked: n, isViewingOtherUser: a, isViewerOnUpgradeableNitro: s });
                    return (0, t.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: O()(ll.zh, i && ll.ZF),
                            children: [
                                null != r &&
                                    (0, t.jsx)("img", {
                                        className: ll.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, t.jsxs)("div", {
                                    className: ll.hI,
                                    children: [
                                        null != d &&
                                            (0, t.jsx)(m.E, {
                                                variant: "body-xs/semibold",
                                                color: n ? "text-default" : "text-muted",
                                                className: ll.nU,
                                                children: d,
                                            }),
                                        "" !== o &&
                                            (0, t.jsxs)(m.E, {
                                                variant: "body-xs/normal",
                                                color: n ? "text-subtle" : "text-muted",
                                                className: ll.nU,
                                                children: [
                                                    !n &&
                                                        (0, t.jsx)(ef.LockIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: ll.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    o,
                                                ],
                                            }),
                                    ],
                                }),
                                (0, t.jsx)(eE.A, { children: ec.intl.string(n ? ec.t.sTFApF : ec.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var lt = a(148204);
function ln() {
    return (0, t.jsx)(V.A, { height: 3, width: 3, "aria-hidden": "true", className: lt.zN });
}
function li(e) {
    let { segments: l } = e;
    return 0 === l.length
        ? null
        : (0, t.jsx)("div", {
              className: lt.U3,
              children: l.map((e, l) => {
                  let { key: a, node: n } = e;
                  return (0, t.jsxs)("span", { className: lt.Hq, children: [l > 0 && (0, t.jsx)(ln, {}), n] }, a);
              }),
          });
}
function ls(e) {
    let l,
        a,
        i,
        r,
        {
            badge: d,
            viewerBadge: c,
            onClose: x,
            isViewingOtherUser: h,
            targetUsername: b,
            displayedUserId: v,
            viewerOwnsBadge: j,
            onViewOwnCatalog: y,
            isUnread: p = !1,
            unlock: N,
            showNewTag: E = !1,
        } = e,
        I = N ?? d,
        w = N ?? c,
        C = (0, A.DW)(I),
        B = (0, s.bG)([z.Ay], () => z.Ay.useReducedMotion),
        [U, D] = n.useState(null),
        F = null != N && U === N,
        V = n.useCallback(() => D(N ?? null), [N]),
        J = !B && (null != N ? !F : p),
        K = !B && F,
        Q = n.useMemo(() => {
            var e;
            return null != N
                ? ((e = null != (0, A.YU)(N, N.previous_acked_tier)),
                  { "--custom-badge-unlock-reveal": `${200 + 250 * !!e + 1e3}ms` })
                : void 0;
        }, [N]);
    n.useEffect(() => {
        if (!p) return;
        let { previousTier: e, currentTier: l } = e2(I, I.previous_acked_tier);
        async function a(e) {
            if (null != e)
                try {
                    await (0, eV.S4)(e);
                } catch {}
        }
        (a(e3(I, e, !0)), a(e3(I, l, !1)));
    }, [I, p]);
    let { animatedUrl: W, imageUrl: X } = eH(I, C, B),
        ee = C?.rarity ?? I.rarity,
        el = ek(ee) ?? void 0,
        ea = eu[I.badge_id],
        {
            isNitro: et,
            eyebrow: en,
            displayName: ei,
        } = ((a = (l = I.badge_id === k.$.PREMIUM_TENURE) ? (C?.name ?? C?.key) : C?.name),
        (i = l ? ec.intl.string(ec.t.Ipxkog) : I.name),
        l
            ? { isNitro: l, eyebrow: void 0, displayName: null != a ? `${i} ${a}` : i }
            : null != a && I.owned
              ? { isNitro: l, eyebrow: i, displayName: a }
              : { isNitro: l, eyebrow: void 0, displayName: i }),
        es = eY(I),
        er = (I.tiers?.length ?? 0) > 0,
        ed = (function (e) {
            let [l, a] = n.useState(eq),
                [t, i] = n.useState(e);
            return (e !== t && (i(e), a(eq())), l);
        })(I.badge_id),
        eg =
            ((r = (0, f.H5)(I)),
            I.owned
                ? I.badge_id === k.$.APRIL_FOOLS_2026
                    ? ec.intl.string(ec.t["5LcHT0"])
                    : eY(I) && null == r
                      ? ed
                      : null != r && I.badge_id !== k.$.STAFF
                        ? ec.intl.formatToPlainString(ec.t.XmaiRQ, { date: new Date(r) })
                        : ec.intl.string(ec.t.sTFApF)
                : ec.intl.string(ec.t.uHtDcT)),
        ex = (0, q.uJ)(I.info_label) ? void 0 : I.info_label,
        eb = I.owned && ee !== eT.x.COMMON && null != el,
        e_ = [];
    (null != ex &&
        e_.push({
            key: "info",
            node: (0, t.jsx)(m.E, {
                tag: "span",
                variant: "body-xs/medium",
                color: "text-subtle",
                className: lt.$L,
                children: ex,
            }),
        }),
        e_.push({
            key: "status",
            node: (0, t.jsx)(m.E, {
                tag: "span",
                variant: "body-xs/medium",
                color: "text-subtle",
                className: lt.$L,
                children: eg,
            }),
        }),
        eb && e_.push({ key: "rarity", node: (0, t.jsx)(R.E, { ...el }) }));
    let ev = _.default.getCurrentUser()?.premiumType,
        ej = I.badge_id === k.$.PREMIUM_TENURE && (ev === eo.PremiumTypes.TIER_0 || ev === eo.PremiumTypes.TIER_1),
        ey = (function (e) {
            let { badge: l, viewerBadge: a, isViewerOnUpgradeableNitro: t } = e;
            return !t && a?.owned === !0 && (a.tiers?.length ?? 0) > 0 && null == a.next_tier
                ? ec.intl.string(ec.t.jY5xAL)
                : t
                  ? ec.intl.string(ec.t.qkwSSp)
                  : (a?.description ?? l.description);
        })({ badge: I, viewerBadge: w, isViewerOnUpgradeableNitro: ej }),
        ep = n.useCallback(() => {
            null != ea &&
                (T({
                    actionName: "primary_badge_action_clicked",
                    badge: I,
                    displayedUserId: v,
                    isSociallyNavigated: h,
                }),
                x(),
                P.A.popAll(),
                ea.ctaAction());
        }, [I, v, h, ea, x]),
        eN = !(function (e) {
            let { badge: l, isViewingOtherUser: a, viewerOwnsBadge: t } = e;
            return a && !l.is_earnable && !t && l.badge_id !== k.$.STAFF;
        })({ badge: I, isViewingOtherUser: h, viewerOwnsBadge: j })
            ? null
            : (0, t.jsx)(L.w, {
                  type: "info",
                  message: ec.intl.format(ec.t.vFekBs, { onViewBadges: y }),
                  role: "none",
              }),
        ef = (function (e) {
            let { badge: l, isViewingOtherUser: a } = e,
                t = (0, s.bG)([Z.A], () => Z.A.hasConsented(S.YAq.PERSONALIZATION));
            return (0, A.Jn)(l.badge_id) && !a && !t;
        })({ badge: I, isViewingOtherUser: h }),
        eE = (function (e) {
            let { badge: l, viewerBadge: a, isViewingOtherUser: t } = e,
                n = (0, s.bG)([Z.A], () => Z.A.hasConsented(S.YAq.PERSONALIZATION)),
                i = a ?? l,
                r = null != (0, A.YU)(i, i.next_tier),
                d = (0, A.Jn)(l.badge_id) && !n;
            return !t && i.owned && r && !d;
        })({ badge: I, viewerBadge: w, isViewingOtherUser: h }),
        eI = !(0, q.uJ)(ey),
        eA = eE || eI || er,
        ew = h ? I : (w ?? I);
    return (0, t.jsx)(M.F, {
        forceLevel: 2,
        children: (0, t.jsxs)("div", {
            id: em,
            role: "tabpanel",
            "aria-labelledby": eh(I.badge_id),
            className: lt.SV,
            style: Q,
            children: [
                (0, t.jsx)("div", { className: lt.Gw, children: (0, t.jsx)(o.J, { onClick: x, size: "sm" }) }),
                (0, t.jsxs)(G.d_, {
                    className: O()(lt.C9, J && lt.uT, K && lt.CY),
                    children: [
                        (0, t.jsx)("div", {
                            className: lt.Rm,
                            children: E && (0, t.jsx)(R.E, { type: "new", variant: "primary" }),
                        }),
                        null != N
                            ? (0, t.jsx)(
                                  e6,
                                  { badge: N, previousTierKey: N.previous_acked_tier, canStart: !0, onStart: V },
                                  `${N.badge_id}:${N.current_tier}`,
                              )
                            : null != X &&
                              (0, t.jsx)("img", {
                                  className: O()(lt.y2, null != W && et && lt.Zl),
                                  src: X,
                                  alt: "",
                                  "aria-hidden": !0,
                                  crossOrigin: p ? "anonymous" : void 0,
                                  draggable: !1,
                              }),
                        (0, t.jsxs)("div", {
                            className: lt.OU,
                            children: [
                                (0, t.jsxs)("div", {
                                    className: lt.cQ,
                                    children: [
                                        (null != N || p) &&
                                            !B &&
                                            (0, t.jsx)(u.D, {
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                className: O()(lt.BI, F && lt.Dp),
                                                "aria-hidden": !0,
                                                children: (0, A.kD)(I, I.previous_acked_tier),
                                            }),
                                        (0, t.jsxs)("div", {
                                            className: lt.nj,
                                            children: [
                                                (0, t.jsxs)(u.D, {
                                                    variant: et ? "nitro-sm" : "display-sm",
                                                    color: "text-strong",
                                                    className: O()(lt._r, et && lt.ve),
                                                    children: [
                                                        null != en &&
                                                            (0, t.jsx)(m.E, {
                                                                tag: "span",
                                                                variant: "body-sm/medium",
                                                                color: "text-subtle",
                                                                className: lt.$g,
                                                                children: en,
                                                            }),
                                                        ei,
                                                    ],
                                                }),
                                                (0, t.jsx)(li, { segments: e_ }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, t.jsxs)("div", {
                                    className: lt.oA,
                                    children: [
                                        ef &&
                                            (0, t.jsx)(L.w, {
                                                type: "info",
                                                message: ec.intl.format(ec.t.Zh44ni, {
                                                    onGoToSettings: () =>
                                                        (0, Y.openUserSettings)(H.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                                }),
                                                role: "none",
                                            }),
                                        eA &&
                                            (0, t.jsxs)("div", {
                                                className: lt.d9,
                                                children: [
                                                    eE &&
                                                        (0, t.jsxs)(t.Fragment, {
                                                            children: [
                                                                (0, t.jsx)(le, { badge: I, viewerBadge: w }),
                                                                (0, t.jsx)($.c, {}),
                                                            ],
                                                        }),
                                                    eI &&
                                                        (0, t.jsxs)("div", {
                                                            className: O()(lt.E4, !er && lt.H),
                                                            children: [
                                                                (0, t.jsxs)("div", {
                                                                    className: lt.jv,
                                                                    children: [
                                                                        es &&
                                                                            (0, t.jsx)(m.E, {
                                                                                variant: "body-xs/medium",
                                                                                color: "text-subtle",
                                                                                className: lt.c$,
                                                                                children: ec.intl.string(
                                                                                    ec.t["/Gmn3f"],
                                                                                ),
                                                                            }),
                                                                        (0, t.jsx)(m.E, {
                                                                            variant: "body-sm/medium",
                                                                            color: "text-default",
                                                                            className: lt.ij,
                                                                            children: ey,
                                                                        }),
                                                                    ],
                                                                }),
                                                                null != ea &&
                                                                    (0, t.jsx)(g.$, {
                                                                        variant: (function (e) {
                                                                            let {
                                                                                isNitro: l,
                                                                                isViewerOnUpgradeableNitro: a,
                                                                                viewerOwnsBadge: t,
                                                                            } = e;
                                                                            return a
                                                                                ? "expressive"
                                                                                : t
                                                                                  ? "secondary"
                                                                                  : l
                                                                                    ? "expressive"
                                                                                    : "primary";
                                                                        })({
                                                                            isNitro: et,
                                                                            isViewerOnUpgradeableNitro: ej,
                                                                            viewerOwnsBadge: j,
                                                                        }),
                                                                        size: "sm",
                                                                        onClick: ep,
                                                                        text: ea.ctaLabel({
                                                                            owned: j,
                                                                            isViewerOnUpgradeableNitro: ej,
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                    er &&
                                                        (0, t.jsx)("div", {
                                                            className: lt.cJ,
                                                            children: (0, t.jsx)(la, {
                                                                badge: ew,
                                                                isViewingOtherUser: h,
                                                                targetUsername: b,
                                                                isViewerOnUpgradeableNitro: ej,
                                                            }),
                                                        }),
                                                    null != eN && (0, t.jsx)("div", { className: lt.Z6, children: eN }),
                                                ],
                                            }),
                                        !eA && eN,
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
var lr = a(921121);
function ld(e) {
    let {
            transitionState: l,
            onClose: a,
            initialBadgeId: j,
            targetUserId: y,
            targetUsername: p,
            viewingCurrentUserBadges: w,
        } = e,
        S = (0, s.bG)([_.default], () => _.default.getCurrentUser()?.id),
        U = null == y || y === S,
        O = (function (e) {
            let { location: l } = e;
            return E.useConfig({ location: l }).enabled;
        })({ location: "BadgeDirectoryModal" }),
        k = !U && null != y && !0 !== w,
        R = k ? y : S,
        D = null != R ? `viewed_user:${k ? "other" : "self"}` : void 0,
        [F, L] = n.useState(j ?? null),
        M = (0, s.yK)([f.Ay], () => (null != R ? f.Ay.getBadges(R) : []), [R]),
        G = (0, s.bG)([f.Ay], () => null != R && f.Ay.hasCatalogFor(R), [R]),
        $ = (0, s.bG)([f.Ay], () => f.Ay.hasCatalogFetchErrorFor(R), [R]),
        P = (0, s.bG)([f.Ay], () => null != R && !f.Ay.isCatalogStaleFor(R), [R]),
        z = !k && M.some((e) => e.owned && !0 === e.has_updates),
        V = (0, I.e)({ location: "BadgeDirectoryModal", hasUnread: z });
    (n.useEffect(() => {
        null != R && (f.Ay.hasCatalogFor(R) ? f.Ay.isCatalogStaleFor(R) && (0, v.RS)(R) : (0, v.RS)(R));
        let e = k ? S : y;
        U || null == e || f.Ay.hasCatalogFor(e) || (0, v.RS)(e);
    }, [R, U, k, S, y]),
        n.useEffect(() => {
            null != D && x.A.increment({ name: i.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [D] });
        }, [D]));
    let H = n.useMemo(() => {
            let { earnable: e, owned: l } = (0, A.in)(M);
            if (k) return l[0]?.badge_id ?? null;
            let a = V ? l.find((e) => !0 === e.has_updates) : void 0;
            return a?.badge_id ?? l[0]?.badge_id ?? e[0]?.badge_id ?? null;
        }, [M, V, k]),
        Y = null != F && null != R ? f.Ay.getBadgeById(F, R) : void 0,
        Z = null != H && null != R ? f.Ay.getBadgeById(H, R) : void 0,
        q = Y ?? Z,
        J = !G && !$,
        K = !G && $,
        Q = !k;
    n.useEffect(() => {
        K && null != D && x.A.increment({ name: i.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [D] });
    }, [K, D]);
    let W = (0, s.bG)([f.Ay], () => null != y && null != q && (f.Ay.getBadgeById(q.badge_id, y)?.owned ?? !1), [q, y]),
        X = (0, s.bG)([f.Ay], () => (null != S && null != q ? f.Ay.getBadgeById(q.badge_id, S) : void 0), [q, S]),
        ee = X?.owned ?? !1,
        el = n.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, ez.openBadgeDirectoryModal)({ ...e, stackingBehavior: "replace" }).then(() => {
                    a();
                });
            },
            [a],
        ),
        ea = n.useCallback(() => {
            null != y &&
                null != q &&
                (k
                    ? el({
                          initialBadgeId: q.badge_id,
                          targetUserId: y,
                          targetUsername: p,
                          viewingCurrentUserBadges: !0,
                      })
                    : el({ initialBadgeId: q.badge_id, targetUserId: y, targetUsername: p }));
        }, [k, q, el, y, p]),
        et = n.useCallback(() => {
            null != S &&
                null != y &&
                (T({ actionName: "view_your_badges_pressed", badge: q, displayedUserId: R, isSociallyNavigated: k }),
                el({ targetUserId: y, targetUsername: p, viewingCurrentUserBadges: !0 }));
        }, [S, R, k, q, el, y, p]),
        en = n.useCallback(() => {
            null != R && (0, v.RS)(R, { isRetry: !0 });
        }, [R]),
        ei = n.useCallback(() => {
            (T({ actionName: "badge_directory_closed", badge: q, displayedUserId: R, isSociallyNavigated: k }), a());
        }, [R, k, a, q]),
        es = n.useCallback(() => {
            null != S &&
                (T({
                    actionName: "customize_your_badges_pressed",
                    badge: q,
                    displayedUserId: R,
                    isSociallyNavigated: k,
                }),
                ei(),
                C.A.setState({ isOpen: !0 }),
                (0, b.kN)(S) || (0, h.openUserProfileModal)({ userId: S }));
        }, [S, R, ei, k, q]),
        er = q?.badge_id;
    !(function (e) {
        let { badgeId: l, enabled: a } = e;
        n.useEffect(() => {
            null != l && a && B.has(l) && (0, v.PV)(l);
        }, [l, a]);
    })({ badgeId: er, enabled: Q });
    let ed = V && !k && q?.has_updates === !0,
        eo = (0, s.bG)([N], () => Q && null != er && B.has(er) && !N.getSeenBadgeIndicators().has(er), [er, Q]),
        [eu, em] = n.useState(null);
    eu?.badgeId !== er && em({ badgeId: er, hadNewIndicator: eo });
    let eg = null != eu && eu.badgeId === er && eu.hadNewIndicator,
        eh = (0, I.e)({ location: "BadgeDirectoryModal", hasUnread: eg }) && eg,
        eb = l === d.ip.ENTERED && (P || $),
        [e_, ev] = n.useState(null);
    return (
        null != e_ && e_.badge_id !== er ? ev(null) : null == e_ && ed && eb && null != q && ev({ ...q }),
        n.useEffect(() => {
            null != e_ && (L(e_.badge_id), (0, v.zd)(e_.badge_id));
        }, [e_]),
        n.useEffect(() => {
            null != q && T({ actionName: "badge_detail_viewed", badge: q, displayedUserId: R, isSociallyNavigated: k });
        }, [er, R, k]),
        (0, t.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": ec.intl.string(ec.t.PEjP4L),
            transitionState: l,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: O ? lr.C : ex.CR,
            children: (0, t.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: ex.jE,
                children: [
                    (J || K || null == q) &&
                        (0, t.jsx)("div", { className: ex.b, children: (0, t.jsx)(o.J, { onClick: ei, size: "sm" }) }),
                    J
                        ? (0, t.jsx)("div", { className: ex.Lq, children: (0, t.jsx)(c.y, {}) })
                        : K
                          ? (0, t.jsxs)("div", {
                                className: ex.IU,
                                children: [
                                    (0, t.jsx)(u.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: ec.intl.string(ec.t.iufib1),
                                    }),
                                    (0, t.jsx)(m.E, {
                                        variant: "body-sm/medium",
                                        color: "text-subtle",
                                        className: ex.TQ,
                                        children: ec.intl.string(ec.t.eAn6z2),
                                    }),
                                    (0, t.jsx)(g.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: en,
                                        text: ec.intl.string(ec.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, t.jsxs)(t.Fragment, {
                                children: [
                                    (0, t.jsx)(ej, {
                                        selectedBadgeId: q?.badge_id ?? null,
                                        onSelectBadge: L,
                                        displayedUserId: R,
                                        isViewingOtherUser: k,
                                        targetUsername: p,
                                        onViewOwnCatalog: et,
                                        onCustomizeBadges: es,
                                        showBadgeIndicators: Q,
                                    }),
                                    null != q &&
                                        (O
                                            ? (0, t.jsx)(ls, {
                                                  badge: q,
                                                  viewerBadge: X,
                                                  onClose: ei,
                                                  isViewingOtherUser: k,
                                                  targetUsername: p,
                                                  displayedUserId: R,
                                                  viewerOwnsBadge: ee,
                                                  onViewOwnCatalog: et,
                                                  isUnread: ed,
                                                  unlock: e_,
                                                  showNewTag: eh,
                                              })
                                            : (0, t.jsx)(eP, {
                                                  badge: q,
                                                  viewerBadge: X,
                                                  onClose: ei,
                                                  isOwnProfile: U,
                                                  isViewingOtherUser: k,
                                                  targetUsername: p,
                                                  displayedUserId: R,
                                                  targetOwnsBadge: W,
                                                  viewerOwnsBadge: ee,
                                                  onToggleViewedUser: ea,
                                                  onViewOwnCatalog: et,
                                              })),
                                ],
                            }),
                ],
            }),
        })
    );
}
