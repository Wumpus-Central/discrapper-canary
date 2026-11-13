t.d(l, { default: () => lo });
var a = t(477900),
    n = t(582128),
    i = t(731738),
    s = t(855986),
    r = t(935462),
    d = t(231723),
    o = t(815021),
    c = t(289873),
    u = t(534514),
    m = t(834730),
    g = t(821609),
    x = t(913379),
    h = t(702476),
    _ = t(403777),
    b = t(287809),
    v = t(682618),
    j = t(73153),
    y = t(988341);
let p = { seenBadgeIndicatorIds: new Set() };
function N(e) {
    if (p.seenBadgeIndicatorIds.has(e)) return !1;
    p = { ...p, seenBadgeIndicatorIds: new Set([...p.seenBadgeIndicatorIds, e]) };
}
class f extends s.Ay.PersistedStore {
    static displayName = "BadgeDirectorySeenStore";
    static persistKey = "BadgeDirectorySeenStore";
    initialize(e) {
        p = { seenBadgeIndicatorIds: new Set(e?.seenBadgeIndicatorIds ?? []) };
    }
    getState() {
        return { seenBadgeIndicatorIds: Array.from(p.seenBadgeIndicatorIds) };
    }
    getSeenBadgeIndicators() {
        return p.seenBadgeIndicatorIds;
    }
}
let E = new f(j.h, {
    BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN: function (e) {
        let { badgeId: l } = e;
        return N(l);
    },
    BADGE_ACK_SUCCESS: function (e) {
        let { badgeId: l } = e;
        return !!(0, y.HW)(l) && N(l);
    },
});
var A = t(982240);
let I = (0, t(945810).mj)({
    name: "2026-10-badge-directory-updates",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var S = t(620143),
    w = t(129230),
    T = t(652215);
function C(e) {
    let {
            actionName: l,
            badge: t,
            displayedUserId: a,
            isSociallyNavigated: n,
            hasUnreadIndicator: i,
            source: s,
            surface: r,
        } = e,
        d = b.default.getCurrentUser()?.id,
        o = null != t && null != d ? A.Ay.getBadgeById(t.badge_id, d) : void 0,
        c = null != t && null != d ? A.Ay.getRemainingToNextTier(t.badge_id, d) : void 0,
        u = null != a ? A.Ay.getBadges(a).filter((e) => e.owned).length : void 0;
    w.default.track(T.HAw.BADGE_DIRECTORY_ACTION, {
        badge_action: l,
        badge_id: t?.badge_id,
        badge_tier: null != t ? ((t.owned ? t.current_tier : t.next_tier) ?? t.tiers?.[0]?.key) : void 0,
        badge_owner_id: a,
        is_owned: o?.owned ?? !1,
        progress_to_next_tier: c,
        is_earnable: t?.is_earnable ?? !1,
        is_socially_navigated: n,
        total_badges_owned: u,
        has_unread_indicator: i,
        surface: r,
        source: s,
    });
}
var B = t(248284);
let U = y.sC;
t(321073);
var O = t(503698),
    k = t.n(O),
    R = t(70283),
    D = t(805251),
    F = t(97808),
    L = t(123292),
    G = t(683071),
    M = t(707554),
    $ = t(95362),
    P = t(404778),
    z = t(136969),
    V = t(775602),
    H = t(640708),
    Y = t(780964),
    Z = t(766075),
    q = t(153488),
    J = t(240248),
    K = t(731309),
    Q = t(837381),
    W = t(116903),
    X = t(741918),
    ee = t(939249),
    el = t(643056),
    et = t(486020);
function ea(e, l, t) {
    let a = (0, s.bG)([b.default], () => (null != e ? b.default.getUser(e) : void 0), [e]);
    if (null != a && l) return (0, et.ku)({ id: a.id, avatar: a.avatar, discriminator: a.discriminator }, !1, t);
}
var en = t(696292),
    ei = t(975807),
    es = t(990820),
    er = t(216934),
    ed = t(976860),
    eo = t(758836),
    ec = t(682901),
    eu = t(792996);
let em = {
        [R.$.STAFF]: {
            ctaLabel: () => eu.intl.string(eu.t.q7A8hP),
            ctaAction: () => (0, ei.A)("https://discord.com/careers"),
        },
        [R.$.PREMIUM_TENURE]: {
            ctaLabel: (e) => {
                let { owned: l, isViewerOnUpgradeableNitro: t } = e;
                return !0 === t
                    ? eu.intl.string(eu.t.uKFeS1)
                    : l
                      ? eu.intl.string(eu.t.xGjjkd)
                      : eu.intl.string(eu.t.BTxm69);
            },
            ctaAction: () => (0, ed.pX)(T.BVt.NITRO_HOME),
        },
        [R.$.GUILD_BOOSTER]: {
            ctaLabel: (e) => {
                let { owned: l } = e;
                return l ? eu.intl.string(eu.t.VMvz3m) : eu.intl.string(eu.t.xFVZeU);
            },
            ctaAction: () => (0, Z.openUserSettings)(Y.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
        },
        [R.$.ORB_PROFILE]: {
            ctaLabel: () => eu.intl.string(eu.t.fG3RIg),
            ctaAction: () => (0, ed.pX)(T.BVt.COLLECTIBLES_SHOP_WITH_TAB(eo.G2.ORBS)),
        },
        [R.$.QUEST_COMPLETED]: {
            ctaLabel: () => eu.intl.string(eu.t.swICIT),
            ctaAction: () => (0, er.m)({ fromContent: en.u.QUEST_BADGE }),
        },
        [R.$.GIFTING]: {
            ctaLabel: () => eu.intl.string(eu.t["nUA/JW"]),
            ctaAction: () => (0, es.A)({ giftingOrigin: ec.vQ.BADGE_DIRECTORY }),
        },
    },
    eg = "badge-details";
var ex = t(778712),
    eh = t(177861);
function e_(e) {
    return `badge-tab-${e}`;
}
function eb(e) {
    let l = Array.from(e);
    return l.length > 19 ? `${l.slice(0, 19).join("")}...` : e;
}
function ev(e) {
    let { badge: l, isSelected: t, onSelect: i, itemId: s, showBadgeIndicator: r } = e,
        d = (0, Q.rm)(s),
        o = l.owned ? l.current_tier : l.next_tier,
        c =
            null != o
                ? l.tiers.find((e) => {
                      let { key: l } = e;
                      return l === o;
                  })
                : void 0,
        u = l.badge_id === R.$.PREMIUM_TENURE ? (c?.name ?? c?.key) : c?.name,
        m = null != u ? `${l.name}, ${u}` : l.name,
        g = r ? `${m}, ${eu.intl.string(eu.t.y2b7CA)}` : m,
        x = n.useRef(null);
    return (0, a.jsxs)(ee.D, {
        ...d,
        innerRef: x,
        role: "tab",
        id: e_(l.badge_id),
        "aria-label": g,
        "aria-selected": t,
        "aria-controls": t ? eg : void 0,
        className: k()(eh.oL, t && eh.xO),
        onFocus: d.onFocus,
        onClick: () => {
            (x.current?.focus(), i());
        },
        children: [
            r && (0, a.jsx)("span", { "aria-hidden": !0, className: eh.Dn }),
            null != l.simple_icon_url &&
                (0, a.jsx)("img", {
                    src: l.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: eh.pW,
                }),
        ],
    });
}
function ej(e) {
    let { label: l, navId: t, badges: n, selectedBadgeId: i, onSelectBadge: s, badgeIndicatorIds: r } = e,
        d = (0, W.Ay)({
            id: t,
            isEnabled: !0,
            orientation: X.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, a.jsxs)("div", {
        className: eh.zE,
        children: [
            "heading" === l.type &&
                (0, a.jsx)(u.D, { id: l.id, variant: "heading-xs/medium", color: "text-default", children: l.text }),
            (0, a.jsx)(Q.hD, {
                navigator: d,
                children: (0, a.jsx)(Q.PR, {
                    children: (e) =>
                        (0, a.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === l.type ? l.id : void 0,
                            "aria-label": "aria" === l.type ? l.text : void 0,
                            className: eh.yq,
                            children: n.map((e, l) => {
                                let t = e.badge_id === i;
                                return (0, a.jsx)(
                                    ev,
                                    {
                                        itemId: `item-${l}`,
                                        badge: e,
                                        isSelected: t,
                                        onSelect: () => s(e.badge_id),
                                        showBadgeIndicator: !t && r.has(e.badge_id),
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
function ey(e) {
    let {
            selectedBadgeId: l,
            onSelectBadge: t,
            displayedUserId: i,
            isViewingOtherUser: r,
            targetUsername: d,
            onViewOwnCatalog: o,
            onCustomizeBadges: c,
            showBadgeIndicators: x,
        } = e,
        h = (0, s.yK)([A.Ay], () => (null != i ? A.Ay.getBadges(i) : []), [i]),
        { earnable: _, owned: b } = n.useMemo(() => (0, y.in)(h), [h]),
        v = n.useMemo(() => [...b, ..._], [b, _]),
        { badgeIndicatorIds: j } = (function (e) {
            let { badges: l, enabled: t } = e,
                a = (0, s.bG)([E], () => E.getSeenBadgeIndicators());
            return {
                badgeIndicatorIds: n.useMemo(
                    () =>
                        t
                            ? new Set(
                                  l
                                      .filter((e) => {
                                          let { badge_id: l } = e;
                                          return U.has(l) && !a.has(l);
                                      })
                                      .map((e) => {
                                          let { badge_id: l } = e;
                                          return l;
                                      }),
                              )
                            : new Set(),
                    [l, t, a],
                ),
            };
        })({ badges: v, enabled: x }),
        p = n.useMemo(() => new Set(x ? v.filter((e) => !0 === e.has_updates).map((e) => e.badge_id) : []), [x, v]),
        N = (0, S.e)({ location: "BadgeDirectoryPanel", hasUnread: p.size > 0 }),
        f = n.useMemo(() => (N ? new Set([...j, ...p]) : j), [N, j, p]),
        I = ea(i, r, 48),
        w = (0, el.d)({ location: "BadgeDirectoryPanel" }),
        T = null != d ? eb(d) : null,
        C = null != d && T !== d,
        B =
            null != T && C && null != I
                ? (0, a.jsxs)("span", {
                      className: eh._p,
                      children: [(0, a.jsx)(F.eu, { src: I, size: ex._3.SIZE_24, "aria-hidden": !0 }), T],
                  })
                : T,
        O = r && null != B ? eu.intl.format(eu.t.EIcwoe, { username: B }) : eu.intl.string(eu.t.UqnlQF),
        k = r && null != d ? eu.intl.string(eu.t["75s2Rq"]) : eu.intl.string(eu.t["62xU4E"]),
        R = r && null != d ? eu.intl.formatToPlainString(eu.t.BCjSZy, { username: d }) : eu.intl.string(eu.t.UqnlQF);
    return (0, a.jsx)("div", {
        className: eh.ws,
        children: (0, a.jsxs)(M.F, {
            component: (0, a.jsxs)("div", {
                className: eh.NG,
                children: [
                    (0, a.jsxs)("div", {
                        className: eh.kc,
                        children: [
                            !C && null != I && (0, a.jsx)(F.eu, { src: I, size: ex._3.SIZE_24, "aria-hidden": !0 }),
                            (0, a.jsx)(u.D, { variant: "heading-lg/semibold", color: "text-strong", children: O }),
                        ],
                    }),
                    (0, a.jsx)(m.E, { variant: "body-sm/medium", color: "text-subtle", children: k }),
                ],
            }),
            children: [
                (0, a.jsxs)($.Ip, {
                    className: eh.hG,
                    children: [
                        b.length > 0 &&
                            (0, a.jsx)(ej, {
                                label: { type: "aria", text: R },
                                navId: "badge-directory-owned",
                                badges: b,
                                selectedBadgeId: l,
                                onSelectBadge: t,
                                badgeIndicatorIds: f,
                            }),
                        !r &&
                            _.length > 0 &&
                            (0, a.jsx)(ej, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: eu.intl.string(eu.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: _,
                                selectedBadgeId: l,
                                onSelectBadge: t,
                                badgeIndicatorIds: f,
                            }),
                    ],
                }),
                (r || w) &&
                    (0, a.jsx)("div", {
                        className: eh.HO,
                        children: r
                            ? (0, a.jsx)(g.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: o,
                                  text: eu.intl.string(eu.t.msyp90),
                              })
                            : (0, a.jsx)(g.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: c,
                                  text: eu.intl.string(eu.t["6CLLyH"]),
                              }),
                    }),
            ],
        }),
    });
}
var ep = t(911608),
    eN = t(847374),
    ef = t(770178),
    eE = t(194261),
    eA = t(140735),
    eI = t(836825);
function eS(e) {
    let { badge: l, isViewingOtherUser: t, targetUsername: i, isViewerOnUpgradeableNitro: s = !1 } = e,
        r = n.useId(),
        d = t && null != i;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            d &&
                (0, a.jsx)("div", {
                    className: eI.u4,
                    children: (0, a.jsx)(m.E, {
                        id: r,
                        variant: "body-xs/medium",
                        color: "text-subtle",
                        children: eu.intl.formatToPlainString(eu.t.KyTwIh, { username: i }),
                    }),
                }),
            (0, a.jsx)("div", {
                className: eI.SV,
                role: "list",
                "aria-label": d ? void 0 : l.name,
                "aria-labelledby": d ? r : void 0,
                children: l.tiers.map((e) => {
                    let n = e.owned,
                        i = !n && l.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        o = (0, y.Vs)({ tier: e, isUnlocked: n, isViewingOtherUser: t, isViewerOnUpgradeableNitro: s });
                    return (0, a.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: k()(eI.zh, i && eI.ZF),
                            children: [
                                null != r &&
                                    (0, a.jsx)("img", {
                                        className: eI.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, a.jsxs)(m.E, {
                                    variant: "footnote/medium",
                                    color: n ? "text-default" : "text-muted",
                                    className: eI.hI,
                                    children: [
                                        null != d &&
                                            (0, a.jsxs)("span", {
                                                className: eI.nU,
                                                children: [
                                                    !n &&
                                                        (0, a.jsx)(eE.LockIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: eI.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    d,
                                                ],
                                            }),
                                        "" !== o && (0, a.jsx)("span", { className: eI.nU, children: o }),
                                    ],
                                }),
                                (0, a.jsx)(eA.A, { children: eu.intl.string(n ? eu.t.sTFApF : eu.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var ew = t(600409);
function eT(e) {
    let { badge: l, viewerBadge: t, isViewingOtherUser: i, targetUsername: r, isViewerOnUpgradeableNitro: d } = e,
        [o, c] = n.useState(!1),
        [u, g] = n.useState(l.badge_id),
        x = n.useId(),
        h = n.useId(),
        _ = n.useRef(null),
        b = n.useRef(null);
    l.badge_id !== u && (g(l.badge_id), c(!1));
    let v = n.useCallback(() => {
            let e = _.current;
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
    (0, ef.g)(b, j, [o], { enabled: o });
    let p = t ?? l,
        N = (0, s.bG)([q.A], () => q.A.hasConsented(T.YAq.PERSONALIZATION)),
        f = !i && (0, y.Jn)(l.badge_id) && !N,
        E = i ? void 0 : p.next_tier,
        A = i ? void 0 : p.current_tier,
        I = null != E ? p.tiers.find((e) => e.key === E) : void 0,
        S = null != A ? p.tiers.find((e) => e.key === A) : void 0,
        w = i ? void 0 : p.progress?.[0],
        C = w?.threshold ?? I?.requirements[0]?.threshold ?? null,
        B = !i && p.owned && null != I,
        U = i || (0, J.uJ)(p.leveling_instructions) || B ? void 0 : p.leveling_instructions,
        O = I?.name != null ? eu.intl.formatToPlainString(eu.t["Jn+COZ"], { tier_name: I.name }) : void 0,
        R = o ? eu.intl.string(eu.t["065Hig"]) : eu.intl.string(eu.t.MylOvg),
        D = i ? l : p,
        F = S?.complex_icon_static_url ?? S?.simple_icon_url,
        L = I?.complex_icon_static_url ?? I?.simple_icon_url,
        G = !(0, J.uJ)(w?.progress_helper_text),
        M = null != O ? { "aria-labelledby": h } : { "aria-label": eu.intl.string(eu.t.Uwhb1l) };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != U && (0, a.jsx)(m.E, { variant: "body-xs/medium", color: "text-subtle", children: U }),
            B &&
                !f &&
                (0, a.jsxs)("div", {
                    className: ew.ES,
                    children: [
                        null != F &&
                            (0, a.jsx)("img", { className: ew.Tw, src: F, alt: "", "aria-hidden": !0, draggable: !1 }),
                        (0, a.jsxs)("div", {
                            className: ew.Bd,
                            children: [
                                null != O && (0, a.jsx)(m.E, { id: h, variant: "body-sm/medium", children: O }),
                                null != C
                                    ? (0, a.jsx)(ep.z, {
                                          value: w?.current ?? 0,
                                          minValue: w?.floor ?? 0,
                                          maxValue: C,
                                          size: "md",
                                          className: ew.hr,
                                          ...M,
                                      })
                                    : null != w &&
                                      (0, a.jsx)(ep.z, { isIndeterminate: !0, size: "md", className: ew.hr, ...M }),
                                G &&
                                    (0, a.jsx)(m.E, {
                                        variant: "body-xs/medium",
                                        color: "text-subtle",
                                        children: w?.progress_helper_text,
                                    }),
                            ],
                        }),
                        null != L &&
                            (0, a.jsx)("img", { className: ew.Tw, src: L, alt: "", "aria-hidden": !0, draggable: !1 }),
                    ],
                }),
            B && !f
                ? (0, a.jsxs)("div", {
                      className: ew.JC,
                      children: [
                          (0, a.jsx)("div", {
                              ref: b,
                              className: k()(ew.ne, o && ew.GB),
                              id: x,
                              children: (0, a.jsx)("div", {
                                  className: ew.zL,
                                  inert: !o,
                                  children: (0, a.jsxs)("div", {
                                      className: ew.GA,
                                      children: [
                                          (0, a.jsx)(P.c, { className: ew.yF }),
                                          (0, a.jsx)(eS, {
                                              badge: D,
                                              isViewingOtherUser: i,
                                              targetUsername: r,
                                              isViewerOnUpgradeableNitro: d,
                                          }),
                                      ],
                                  }),
                              }),
                          }),
                          (0, a.jsxs)(ee.D, {
                              innerRef: _,
                              className: ew.tw,
                              "aria-expanded": o,
                              "aria-controls": x,
                              onClick: () => c(!o),
                              children: [
                                  (0, a.jsx)(m.E, {
                                      className: ew.Yi,
                                      variant: "body-xs/medium",
                                      color: "text-subtle",
                                      children: R,
                                  }),
                                  (0, a.jsx)(eN.ChevronSmallDownIcon, {
                                      size: "sm",
                                      color: "currentColor",
                                      "aria-hidden": !0,
                                      className: k()(ew.ai, o && ew.hg),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, a.jsx)(eS, { badge: D, isViewingOtherUser: i, targetUsername: r, isViewerOnUpgradeableNitro: d }),
        ],
    });
}
var eC = t(536001),
    eB = t(260981),
    eU = t(540418),
    eO = t(907085),
    ek = t(179820);
function eR(e) {
    if (null == e) return null;
    switch (e) {
        case eC.x.COMMON:
            return {
                type: { text: eu.intl.string(eu.t.L0K5ci) },
                variant: "rarity-common",
                icon: eB.ExperimentalCommonIcon,
            };
        case eC.x.RARE:
            return {
                type: { text: eu.intl.string(eu.t["sTx/5z"]) },
                variant: "rarity-rare",
                icon: eU.ExperimentalRareIcon,
            };
        case eC.x.EPIC:
            return {
                type: { text: eu.intl.string(eu.t.RD8RiN) },
                variant: "rarity-epic",
                icon: eO.ExperimentalEpicIcon,
            };
        case eC.x.MYTHIC:
            return {
                type: { text: eu.intl.string(eu.t.vqc1ol) },
                variant: "rarity-mythic",
                icon: ek.ExperimentalMythicIcon,
            };
        default:
            return null;
    }
}
let eD = [eu.t["6zFA/T"], eu.t.wzZHKl, eu.t["+ED/nf"]];
function eF() {
    let e = Math.floor(Math.random() * eD.length);
    return eu.intl.string(eD[e]);
}
function eL(e) {
    let { earnedDateText: l, label: t } = e;
    return (0, a.jsxs)("div", {
        className: k()(eh.AX, eh.aS),
        children: [
            (0, a.jsx)(m.E, { variant: "body-xs/medium", color: "text-default", className: eh.NM, children: l }),
            (0, a.jsx)(m.E, { variant: "body-xs/medium", color: "text-subtle", className: eh.MZ, children: t }),
        ],
    });
}
function eG(e) {
    let { rarityBadgeProps: l } = e;
    return (0, a.jsxs)("div", {
        className: k()(eh.AX, eh.sn),
        children: [
            (0, a.jsx)(D.E, { ...l }),
            (0, a.jsx)(m.E, {
                variant: "body-xs/medium",
                color: "text-subtle",
                children: eu.intl.string(eu.t["phYZe+"]),
            }),
        ],
    });
}
function eM() {
    return (0, a.jsx)(H.A, { height: 3, width: 3, "aria-hidden": "true", className: eh.zN });
}
function e$(e) {
    let { segments: l } = e;
    return 0 === l.length
        ? null
        : (0, a.jsx)("div", {
              className: eh.U3,
              children: l.map((e, l) => {
                  let { key: t, node: n } = e;
                  return (0, a.jsxs)("span", { className: eh.Hq, children: [l > 0 && (0, a.jsx)(eM, {}), n] }, t);
              }),
          });
}
function eP(e) {
    let {
            badge: l,
            isOwnProfile: t,
            isViewingOtherUser: n,
            targetUsername: i,
            viewedAvatarSrc: s,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: o,
            onToggleViewedUser: c,
        } = e,
        u = (0, J.uJ)(l.info_label) ? void 0 : l.info_label,
        { statusText: g, toggleText: x } = (function (e) {
            let l,
                t,
                {
                    badge: a,
                    isOwnProfile: n,
                    isViewingOtherUser: i,
                    targetUsername: s,
                    targetOwnsBadge: r,
                    viewerOwnsBadge: d,
                    unlockedStatusText: o,
                } = e;
            if (
                ((l = n
                    ? a.owned
                        ? o
                        : eu.intl.string(eu.t.uHtDcT)
                    : i && null != s
                      ? eu.intl.formatToPlainString(eu.t.Eo5Cnp, { username: eb(s) })
                      : a.owned
                        ? o
                        : eu.intl.string(eu.t.uHtDcT)),
                !n)
            ) {
                let e = !i && r && null != s;
                i && d
                    ? (t = eu.intl.string(eu.t.yxEAGH))
                    : e && (t = eu.intl.formatToPlainString(eu.t["9GNsge"], { username: eb(s) }));
            }
            return { statusText: l, toggleText: t };
        })({
            badge: l,
            isOwnProfile: t,
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
            node: (0, a.jsxs)("span", {
                className: eh.pC,
                children: [
                    !t && null != s && (0, a.jsx)(F.eu, { src: s, size: ex._3.SIZE_16, "aria-hidden": !0 }),
                    (0, a.jsx)(m.E, {
                        tag: "span",
                        variant: "body-xs/medium",
                        color: "text-subtle",
                        className: eh.$L,
                        children: g,
                    }),
                ],
            }),
        }),
        null != u &&
            h.push({
                key: "info",
                node: (0, a.jsx)(m.E, {
                    tag: "span",
                    variant: "body-xs/medium",
                    color: "text-subtle",
                    className: eh.$L,
                    children: u,
                }),
            }));
    let _ = h.length >= 3 && null != x,
        b =
            null != x
                ? {
                      key: "toggle",
                      node: (0, a.jsx)(L.Q, {
                          variant: "primary",
                          size: "sm",
                          textVariant: "body-xs/medium",
                          onClick: c,
                          text: x,
                      }),
                  }
                : void 0,
        v = _ || null == b ? h : [...h, b];
    return 0 === v.length && null == b
        ? null
        : (0, a.jsxs)("div", {
              className: eh.rI,
              children: [(0, a.jsx)(e$, { segments: v }), _ && null != b && (0, a.jsx)(e$, { segments: [b] })],
          });
}
function ez(e) {
    let l,
        t,
        i,
        r,
        d,
        c,
        x,
        {
            badge: h,
            viewerBadge: _,
            onClose: v,
            isOwnProfile: j,
            isViewingOtherUser: p,
            targetUsername: N,
            displayedUserId: f,
            targetOwnsBadge: E,
            viewerOwnsBadge: I,
            onToggleViewedUser: S,
            onViewOwnCatalog: w,
        } = e,
        B = ea(f, p, 32),
        U = (0, y.DW)(h),
        O = (0, s.bG)([V.Ay], () => V.Ay.useReducedMotion)
            ? void 0
            : (U?.complex_icon_animated_url ?? h.complex_icon_animated_url),
        D = U?.complex_icon_static_url ?? h.complex_icon_static_url,
        F = U?.simple_icon_url ?? h.simple_icon_url,
        L = O ?? D ?? F,
        H = eR(U?.rarity ?? h.rarity) ?? void 0,
        Q = em[h.badge_id],
        W = h.badge_id === R.$.PREMIUM_TENURE,
        X = W ? (U?.name ?? U?.key) : U?.name,
        ee = W ? eu.intl.string(eu.t.Ipxkog) : h.name;
    W ? (r = null != X ? `${ee} ${X}` : ee) : null != X ? ((i = ee), (r = X)) : (r = ee);
    let el = (0, K.ie)(h.badge_id) && !h.is_earnable && h.badge_id !== R.$.STAFF,
        et = (h.tiers?.length ?? 0) > 0,
        en = (0, A.H5)(h),
        ei = (function (e) {
            let [l, t] = n.useState(eF),
                [a, i] = n.useState(e);
            return (e !== a && (i(e), t(eF())), l);
        })(h.badge_id);
    d = h.owned
        ? h.badge_id === R.$.APRIL_FOOLS_2026
            ? eu.intl.string(eu.t["5LcHT0"])
            : el && null == en
              ? ei
              : (function (e) {
                    if (null == e) return;
                    let l = new Date(e);
                    if (!Number.isNaN(l.getTime()))
                        return l.toLocaleDateString(eu.intl.currentLocale, {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        });
                })(en)
        : et
          ? "--"
          : void 0;
    let es = ((t = null == (l = h.tiers?.[0]?.key) || U?.key === l), eu.intl.string(t ? eu.t.WDhIz2 : eu.t.wYaDmz)),
        er = null != d && h.badge_id !== R.$.STAFF,
        ed = null != H,
        eo = null;
    ((er || ed) &&
        (eo = (0, a.jsxs)("div", {
            className: k()(eh.$S, (!er || !ed) && eh.jQ),
            children: [
                er && null != d && (0, a.jsx)(eL, { earnedDateText: d, label: es }),
                ed && (0, a.jsx)(eG, { rarityBadgeProps: H }),
            ],
        })),
        er || (c = eu.intl.string(eu.t.sTFApF)));
    let ex = b.default.getCurrentUser()?.premiumType,
        eb = W && (ex === ec.PremiumTypes.TIER_0 || ex === ec.PremiumTypes.TIER_1);
    x =
        !eb && _?.owned === !0 && (_.tiers?.length ?? 0) > 0 && null == _.next_tier
            ? eu.intl.string(eu.t.jY5xAL)
            : eb
              ? eu.intl.string(eu.t.qkwSSp)
              : (_?.description ?? h.description);
    let ev = n.useCallback(() => {
            null != Q &&
                (C({
                    actionName: "primary_badge_action_clicked",
                    badge: h,
                    displayedUserId: f,
                    isSociallyNavigated: p,
                }),
                v(),
                z.A.popAll(),
                Q.ctaAction());
        }, [h, f, p, Q, v]),
        ej =
            !p || h.is_earnable || I || h.badge_id === R.$.STAFF
                ? null
                : (0, a.jsx)(G.w, {
                      type: "info",
                      message: eu.intl.format(eu.t.vFekBs, { onViewBadges: w }),
                      role: "none",
                  }),
        ey = (0, s.bG)([q.A], () => q.A.hasConsented(T.YAq.PERSONALIZATION)),
        ep = (0, y.Jn)(h.badge_id) && !p && !ey;
    return (0, a.jsx)(M.F, {
        forceLevel: 2,
        children: (0, a.jsx)("div", {
            id: eg,
            role: "tabpanel",
            "aria-labelledby": e_(h.badge_id),
            className: eh.SV,
            children: (0, a.jsxs)($.d_, {
                className: eh.C9,
                children: [
                    (0, a.jsx)("div", { className: eh.Gw, children: (0, a.jsx)(o.J, { onClick: v, size: "sm" }) }),
                    null != L &&
                        (0, a.jsx)("img", {
                            className: k()(eh.y2, null != O && L === O && eh.hu),
                            src: L,
                            alt: "",
                            "aria-hidden": !0,
                            draggable: !1,
                        }),
                    (0, a.jsxs)("div", {
                        className: eh.OU,
                        children: [
                            (0, a.jsx)("div", {
                                className: eh.cQ,
                                children: (0, a.jsxs)("div", {
                                    className: eh.nj,
                                    children: [
                                        (0, a.jsxs)(u.D, {
                                            variant: W ? "nitro-sm" : "display-sm",
                                            color: "text-strong",
                                            className: k()(eh._r, W && eh.ve),
                                            children: [
                                                null != i &&
                                                    (0, a.jsx)(m.E, {
                                                        tag: "span",
                                                        variant: "body-sm/medium",
                                                        color: "text-subtle",
                                                        className: eh.$g,
                                                        children: i,
                                                    }),
                                                r,
                                            ],
                                        }),
                                        (0, a.jsx)(eP, {
                                            badge: h,
                                            isOwnProfile: j,
                                            isViewingOtherUser: p,
                                            targetUsername: N,
                                            viewedAvatarSrc: B,
                                            targetOwnsBadge: E,
                                            viewerOwnsBadge: I,
                                            unlockedStatusText: c,
                                            onToggleViewedUser: S,
                                        }),
                                    ],
                                }),
                            }),
                            (0, a.jsxs)("div", {
                                className: eh.oA,
                                children: [
                                    ep &&
                                        (0, a.jsx)(G.w, {
                                            type: "info",
                                            message: eu.intl.format(eu.t.Zh44ni, {
                                                onGoToSettings: () =>
                                                    (0, Z.openUserSettings)(Y.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                            }),
                                            role: "none",
                                        }),
                                    eo,
                                    !(0, J.uJ)(x) &&
                                        (0, a.jsxs)("div", {
                                            className: eh.d9,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: eh.E4,
                                                    children: [
                                                        (0, a.jsxs)("div", {
                                                            className: eh.jv,
                                                            children: [
                                                                el &&
                                                                    (0, a.jsx)(m.E, {
                                                                        variant: "body-xs/medium",
                                                                        color: "text-subtle",
                                                                        className: eh.c$,
                                                                        children: eu.intl.string(eu.t["/Gmn3f"]),
                                                                    }),
                                                                (0, a.jsx)(m.E, {
                                                                    variant: "body-sm/medium",
                                                                    color: "text-default",
                                                                    className: eh.ij,
                                                                    children: x,
                                                                }),
                                                            ],
                                                        }),
                                                        null != Q &&
                                                            (0, a.jsx)(g.$, {
                                                                variant: eb
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
                                                                    isViewerOnUpgradeableNitro: eb,
                                                                }),
                                                            }),
                                                    ],
                                                }),
                                                et &&
                                                    (0, a.jsxs)("div", {
                                                        className: eh.cJ,
                                                        children: [
                                                            (0, a.jsx)(P.c, {}),
                                                            (0, a.jsx)(eT, {
                                                                badge: h,
                                                                viewerBadge: _,
                                                                isViewingOtherUser: p,
                                                                targetUsername: N,
                                                                isViewerOnUpgradeableNitro: eb,
                                                            }),
                                                        ],
                                                    }),
                                                null != ej && (0, a.jsx)("div", { className: eh.Z6, children: ej }),
                                            ],
                                        }),
                                    (0, J.uJ)(x) && ej,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var eV = t(470739),
    eH = t(515718);
function eY(e, l, t) {
    let a = t ? void 0 : (l?.complex_icon_animated_url ?? e.complex_icon_animated_url),
        n = a ?? l?.complex_icon_static_url ?? e.complex_icon_static_url ?? l?.simple_icon_url ?? e.simple_icon_url;
    return { animatedUrl: a, imageUrl: n };
}
function eZ(e) {
    return (0, K.ie)(e.badge_id) && !e.is_earnable && e.badge_id !== R.$.STAFF;
}
let eq = [eu.t["6zFA/T"], eu.t.wzZHKl, eu.t["+ED/nf"]];
function eJ() {
    let e = Math.floor(Math.random() * eq.length);
    return eu.intl.string(eq[e]);
}
var eK = t(765178),
    eQ = t(943654),
    eW = t(998304),
    eX = t(253400);
let e0 = t(646514).A.unsafe_rawColors.NEUTRAL_35.resolve({ saturation: 1 }).hex();
function e1(e) {
    let [l, t] = n.useState(null);
    return (n.useEffect(() => {
        if (null == e) return;
        let l = !1;
        return (
            !(async function (e) {
                try {
                    let a,
                        n,
                        i = await (0, eH.S4)(e),
                        s =
                            (null != i
                                ? ((n =
                                      (a = i.filter((e) => {
                                          let [l, t, a] = e,
                                              { lightness: n } = (0, eW.IB)(l, t, a);
                                          return n > 0.15 && n < 0.85;
                                      })).find((e) => {
                                          let [l, t, a] = e;
                                          return (0, eW.IB)(l, t, a).saturation > 0.3;
                                      }) ?? a[0]),
                                  null != n ? (0, eW.Ob)(n[0], n[1], n[2]) : null)
                                : null) ?? e0;
                    l || t({ url: e, color: s });
                } catch {
                    l || t({ url: e, color: e0 });
                }
            })(e),
            () => {
                l = !0;
            }
        );
    }, [e]),
    null == e)
        ? e0
        : l?.url === e
          ? l.color
          : void 0;
}
var e2 = t(589801);
function e3(e, l) {
    return { previousTier: (0, y.YU)(e, l), currentTier: (0, y.DW)(e) };
}
function e8(e, l, t) {
    return t ? l?.simple_icon_raster_url : (l?.simple_icon_raster_url ?? e.simple_icon_raster_url);
}
function e9(e) {
    let { badge: l, tier: t, isStarted: i, isPreviousTier: s = !1, onLoad: r, className: d, fillClassName: o } = e,
        c = s ? (t?.complex_icon_static_url ?? t?.simple_icon_url) : eY(l, t, !0).imageUrl,
        u = e1(e8(l, t, s)),
        m = u ?? e0,
        [g, x] = n.useState(!1),
        h = n.useCallback(() => x(!0), []),
        _ = g && null != u,
        [b, v] = n.useState(null);
    n.useEffect(() => {
        _ && (v(i ? "fade-in" : "with-start"), r());
    }, [_]);
    let j = n.useMemo(
        () => ({
            "--custom-badge-unlock-color": m,
            "--custom-badge-unlock-halo": (0, eW.KU)(m, 0.6),
            "--custom-badge-unlock-art": null != c ? `url("${c}")` : "none",
        }),
        [m, c],
    );
    return null == c
        ? null
        : (0, a.jsx)("div", {
              className: k()(e2.qd, (null == b || !i) && e2.R, "fade-in" === b && e2.qG),
              style: j,
              children: (0, a.jsxs)("div", {
                  className: k()(e2.qS, d),
                  children: [
                      (0, a.jsx)("img", {
                          className: e2.Qw,
                          src: c,
                          alt: "",
                          crossOrigin: "anonymous",
                          draggable: !1,
                          onLoad: h,
                          onError: h,
                      }),
                      (0, a.jsx)("div", {
                          className: k()(e2.ys, o),
                          children: (0, a.jsx)("div", { className: e2.GS }),
                      }),
                  ],
              }),
          });
}
function e7(e) {
    let { badge: l, previousTierKey: t, size: i, delay: r, canStart: d = !0, onStart: o } = e,
        c = (0, s.bG)([V.Ay], () => V.Ay.useReducedMotion),
        { previousTier: u, currentTier: m } = e3(l, t),
        g = null != u,
        x = g && !c,
        h = r + 250 * !!g,
        [_, b] = n.useState(0),
        v = n.useCallback(() => b((e) => e + 1), []),
        [j, y] = n.useState(!1),
        p = _ >= (x ? 2 : 1),
        N = d && (p || j),
        [f, E] = n.useState(!1);
    !N || p || f || E(!0);
    let A = N && !c && !f;
    (n.useEffect(() => {
        if (!d) return;
        let e = setTimeout(() => y(!0), 3e3);
        return () => clearTimeout(e);
    }, [d]),
        n.useEffect(() => {
            N && o?.(f);
        }, [N]));
    let I = n.useMemo(() => ({ "--custom-badge-unlock-swap": `${h}ms` }), [h]);
    return (0, a.jsxs)("div", {
        className: k()(e2.Os, "large" === i ? e2.as : e2.EX, A && (g ? e2.xH : e2.YC)),
        style: I,
        children: [
            x &&
                !f &&
                (0, a.jsx)(e9, {
                    badge: l,
                    tier: u,
                    isStarted: N,
                    isPreviousTier: !0,
                    onLoad: v,
                    className: k()(A && e2.rH),
                    fillClassName: k()(e2.Nl, A && e2.Rt),
                }),
            (0, a.jsx)(e9, {
                badge: l,
                tier: m,
                isStarted: N,
                onLoad: v,
                className: k()(A && e2.CN),
                fillClassName: k()(A && e2.Eq),
            }),
        ],
    });
}
var e4 = t(193579);
let e6 = eX.Ay.getEnableHardwareAcceleration();
function e5(e) {
    let { badge: l, previousTierKey: t, canStart: i, onStart: r } = e,
        d = (0, s.bG)([V.Ay], () => V.Ay.useReducedMotion),
        { previousTier: o, currentTier: c } = e3(l, t),
        u = null != o,
        [m, g] = n.useState(!1),
        [x, h] = n.useState(!1),
        [_, b] = n.useState(!1),
        v = e6 && !d,
        j = e1(e8(l, c, !1)) ?? e0,
        p = n.useMemo(() => ({ fill: (0, eW.E2)(j) }), [j]),
        N = n.useCallback(
            (e) => {
                (g(!0), b(e), r?.());
            },
            [r],
        );
    return (
        n.useEffect(() => {
            m && eK.O.announce((0, y.kD)(l, t), "polite");
        }, [m]),
        n.useEffect(() => {
            if (!m || !v || _) return;
            let e = setTimeout(() => h(!0), 200 + 250 * !!u + 1e3);
            return () => clearTimeout(e);
        }, [v, u, _, m]),
        (0, a.jsxs)("div", {
            className: e4.Tl,
            "aria-hidden": !0,
            children: [
                v &&
                    (0, a.jsx)(eQ.x, {
                        artboard: "Web",
                        autoplay: x,
                        dataBinding: p,
                        className: k()(e4.U6, !x && e4.qJ),
                    }),
                (0, a.jsx)(e7, { badge: l, previousTierKey: t, size: "large", delay: 200, canStart: i, onStart: N }),
            ],
        })
    );
}
var le = t(229667);
function ll(e) {
    let l,
        t,
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
        (t = (0, y.YU)(l, l.current_tier)),
        (i = (0, y.YU)(l, l.next_tier)),
        {
            progress: (s = l.progress?.[0]),
            threshold: s?.threshold ?? i?.requirements[0]?.threshold ?? null,
            currentArtUrl: t?.simple_icon_url ?? t?.complex_icon_static_url,
            nextArtUrl: i?.simple_icon_url ?? i?.complex_icon_static_url,
            helperText: (0, J.uJ)(s?.progress_helper_text) ? void 0 : s?.progress_helper_text,
        }),
        _ = null != h ? { "aria-labelledby": o } : { "aria-label": eu.intl.string(eu.t.Uwhb1l) };
    return (0, a.jsxs)("div", {
        className: le.NE,
        children: [
            (0, a.jsx)(m.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: eu.intl.string(eu.t["2m/g2c"]),
            }),
            (0, a.jsxs)("div", {
                className: le.ES,
                children: [
                    null != g &&
                        (0, a.jsx)("img", { className: le.Tw, src: g, alt: "", "aria-hidden": !0, draggable: !1 }),
                    (0, a.jsxs)("div", {
                        className: le.Bd,
                        children: [
                            null != h && (0, a.jsx)(m.E, { id: o, variant: "body-sm/medium", children: h }),
                            null != u
                                ? (0, a.jsx)(ep.z, {
                                      value: c?.current ?? 0,
                                      minValue: c?.floor ?? 0,
                                      maxValue: u,
                                      size: "md",
                                      className: le.hr,
                                      ..._,
                                  })
                                : null != c &&
                                  (0, a.jsx)(ep.z, { isIndeterminate: !0, size: "md", className: le.hr, ..._ }),
                        ],
                    }),
                    null != x &&
                        (0, a.jsx)("img", { className: le.Tw, src: x, alt: "", "aria-hidden": !0, draggable: !1 }),
                ],
            }),
        ],
    });
}
var lt = t(149285);
function la(e) {
    let { badge: l, isViewingOtherUser: t, targetUsername: i, isViewerOnUpgradeableNitro: s = !1 } = e,
        r = n.useId(),
        d = t && null != i;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            d &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(P.c, {}),
                        (0, a.jsx)("div", {
                            className: lt.u4,
                            children: (0, a.jsx)(m.E, {
                                id: r,
                                variant: "body-sm/medium",
                                children: eu.intl.formatToPlainString(eu.t.KyTwIh, { username: i }),
                            }),
                        }),
                    ],
                }),
            (0, a.jsx)("div", {
                className: lt.SV,
                role: "list",
                "aria-label": d ? void 0 : l.name,
                "aria-labelledby": d ? r : void 0,
                children: l.tiers.map((e) => {
                    let n = e.owned,
                        i = !n && l.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        o = (0, y.Vs)({ tier: e, isUnlocked: n, isViewingOtherUser: t, isViewerOnUpgradeableNitro: s });
                    return (0, a.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: k()(lt.zh, i && lt.ZF),
                            children: [
                                null != r &&
                                    (0, a.jsx)("img", {
                                        className: lt.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, a.jsxs)("div", {
                                    className: lt.hI,
                                    children: [
                                        null != d &&
                                            (0, a.jsx)(m.E, {
                                                variant: "body-xs/semibold",
                                                color: n ? "text-default" : "text-muted",
                                                className: lt.nU,
                                                children: d,
                                            }),
                                        "" !== o &&
                                            (0, a.jsxs)(m.E, {
                                                variant: "body-xs/normal",
                                                color: n ? "text-subtle" : "text-muted",
                                                className: lt.nU,
                                                children: [
                                                    !n &&
                                                        (0, a.jsx)(eE.LockIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: lt.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    o,
                                                ],
                                            }),
                                    ],
                                }),
                                (0, a.jsx)(eA.A, { children: eu.intl.string(n ? eu.t.sTFApF : eu.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var ln = t(148204);
function li() {
    return (0, a.jsx)(H.A, { height: 3, width: 3, "aria-hidden": "true", className: ln.zN });
}
function ls(e) {
    let { segments: l } = e;
    return 0 === l.length
        ? null
        : (0, a.jsx)("div", {
              className: ln.U3,
              children: l.map((e, l) => {
                  let { key: t, node: n } = e;
                  return (0, a.jsxs)("span", { className: ln.Hq, children: [l > 0 && (0, a.jsx)(li, {}), n] }, t);
              }),
          });
}
function lr(e) {
    let l,
        t,
        i,
        r,
        {
            badge: d,
            viewerBadge: c,
            onClose: x,
            isViewingOtherUser: h,
            targetUsername: _,
            displayedUserId: v,
            viewerOwnsBadge: j,
            onViewOwnCatalog: p,
            isUnread: N = !1,
            unlock: f,
            showNewTag: E = !1,
        } = e,
        I = f ?? d,
        S = f ?? c,
        w = (0, y.DW)(I),
        B = (0, s.bG)([V.Ay], () => V.Ay.useReducedMotion),
        [U, O] = n.useState(null),
        F = null != f && U === f,
        L = n.useCallback(() => O(f ?? null), [f]),
        H = !B && (null != f ? !F : N),
        K = !B && F,
        Q = n.useMemo(() => {
            var e;
            return null != f
                ? ((e = null != (0, y.YU)(f, f.previous_acked_tier)),
                  { "--custom-badge-unlock-reveal": `${200 + 250 * !!e + 1e3}ms` })
                : void 0;
        }, [f]);
    n.useEffect(() => {
        if (!N) return;
        let { previousTier: e, currentTier: l } = e3(I, I.previous_acked_tier);
        async function t(e) {
            if (null != e)
                try {
                    await (0, eH.S4)(e);
                } catch {}
        }
        (t(e8(I, e, !0)), t(e8(I, l, !1)));
    }, [I, N]);
    let { animatedUrl: W, imageUrl: X } = eY(I, w, B),
        ee = w?.rarity ?? I.rarity,
        el = eR(ee) ?? void 0,
        et = em[I.badge_id],
        {
            isNitro: ea,
            eyebrow: en,
            displayName: ei,
        } = ((t = (l = I.badge_id === R.$.PREMIUM_TENURE) ? (w?.name ?? w?.key) : w?.name),
        (i = l ? eu.intl.string(eu.t.Ipxkog) : I.name),
        l
            ? { isNitro: l, eyebrow: void 0, displayName: null != t ? `${i} ${t}` : i }
            : null != t && I.owned
              ? { isNitro: l, eyebrow: i, displayName: t }
              : { isNitro: l, eyebrow: void 0, displayName: i }),
        es = eZ(I),
        er = (I.tiers?.length ?? 0) > 0,
        ed = (function (e) {
            let [l, t] = n.useState(eJ),
                [a, i] = n.useState(e);
            return (e !== a && (i(e), t(eJ())), l);
        })(I.badge_id),
        eo =
            ((r = (0, A.H5)(I)),
            I.owned
                ? I.badge_id === R.$.APRIL_FOOLS_2026
                    ? eu.intl.string(eu.t["5LcHT0"])
                    : eZ(I) && null == r
                      ? ed
                      : null != r && I.badge_id !== R.$.STAFF
                        ? eu.intl.formatToPlainString(eu.t.XmaiRQ, { date: new Date(r) })
                        : eu.intl.string(eu.t.sTFApF)
                : eu.intl.string(eu.t.uHtDcT)),
        ex = (0, J.uJ)(I.info_label) ? void 0 : I.info_label,
        eh = I.owned && ee !== eC.x.COMMON && null != el,
        eb = [];
    (null != ex &&
        eb.push({
            key: "info",
            node: (0, a.jsx)(m.E, {
                tag: "span",
                variant: "body-xs/medium",
                color: "text-subtle",
                className: ln.$L,
                children: ex,
            }),
        }),
        eb.push({
            key: "status",
            node: (0, a.jsx)(m.E, {
                tag: "span",
                variant: "body-xs/medium",
                color: "text-subtle",
                className: ln.$L,
                children: eo,
            }),
        }),
        eh && eb.push({ key: "rarity", node: (0, a.jsx)(D.E, { ...el }) }));
    let ev = b.default.getCurrentUser()?.premiumType,
        ej = I.badge_id === R.$.PREMIUM_TENURE && (ev === ec.PremiumTypes.TIER_0 || ev === ec.PremiumTypes.TIER_1),
        ey = (function (e) {
            let { badge: l, viewerBadge: t, isViewerOnUpgradeableNitro: a } = e;
            return !a && t?.owned === !0 && (t.tiers?.length ?? 0) > 0 && null == t.next_tier
                ? eu.intl.string(eu.t.jY5xAL)
                : a
                  ? eu.intl.string(eu.t.qkwSSp)
                  : (t?.description ?? l.description);
        })({ badge: I, viewerBadge: S, isViewerOnUpgradeableNitro: ej }),
        ep = n.useCallback(() => {
            null != et &&
                (C({
                    actionName: "primary_badge_action_clicked",
                    badge: I,
                    displayedUserId: v,
                    isSociallyNavigated: h,
                }),
                x(),
                z.A.popAll(),
                et.ctaAction());
        }, [I, v, h, et, x]),
        eN = !(function (e) {
            let { badge: l, isViewingOtherUser: t, viewerOwnsBadge: a } = e;
            return t && !l.is_earnable && !a && l.badge_id !== R.$.STAFF;
        })({ badge: I, isViewingOtherUser: h, viewerOwnsBadge: j })
            ? null
            : (0, a.jsx)(G.w, {
                  type: "info",
                  message: eu.intl.format(eu.t.vFekBs, { onViewBadges: p }),
                  role: "none",
              }),
        ef = (function (e) {
            let { badge: l, isViewingOtherUser: t } = e,
                a = (0, s.bG)([q.A], () => q.A.hasConsented(T.YAq.PERSONALIZATION));
            return (0, y.Jn)(l.badge_id) && !t && !a;
        })({ badge: I, isViewingOtherUser: h }),
        eE = (function (e) {
            let { badge: l, viewerBadge: t, isViewingOtherUser: a } = e,
                n = (0, s.bG)([q.A], () => q.A.hasConsented(T.YAq.PERSONALIZATION)),
                i = t ?? l,
                r = null != (0, y.YU)(i, i.next_tier),
                d = (0, y.Jn)(l.badge_id) && !n;
            return !a && i.owned && r && !d;
        })({ badge: I, viewerBadge: S, isViewingOtherUser: h }),
        eA = !(0, J.uJ)(ey),
        eI = eE || eA || er,
        eS = h ? I : (S ?? I);
    return (0, a.jsx)(M.F, {
        forceLevel: 2,
        children: (0, a.jsxs)("div", {
            id: eg,
            role: "tabpanel",
            "aria-labelledby": e_(I.badge_id),
            className: ln.SV,
            style: Q,
            children: [
                (0, a.jsx)("div", { className: ln.Gw, children: (0, a.jsx)(o.J, { onClick: x, size: "sm" }) }),
                (0, a.jsxs)($.d_, {
                    className: k()(ln.C9, H && ln.uT, K && ln.CY),
                    children: [
                        (0, a.jsx)("div", {
                            className: ln.Rm,
                            children: E && (0, a.jsx)(D.E, { type: "new", variant: "primary" }),
                        }),
                        null != f
                            ? (0, a.jsx)(
                                  e5,
                                  { badge: f, previousTierKey: f.previous_acked_tier, canStart: !0, onStart: L },
                                  `${f.badge_id}:${f.current_tier}`,
                              )
                            : null != X &&
                              (0, a.jsx)("img", {
                                  className: k()(ln.y2, null != W && ea && ln.Zl),
                                  src: X,
                                  alt: "",
                                  "aria-hidden": !0,
                                  crossOrigin: N ? "anonymous" : void 0,
                                  draggable: !1,
                              }),
                        (0, a.jsxs)("div", {
                            className: ln.OU,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: ln.cQ,
                                    children: [
                                        (null != f || N) &&
                                            !B &&
                                            (0, a.jsx)(u.D, {
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                className: k()(ln.BI, F && ln.Dp),
                                                "aria-hidden": !0,
                                                children: (0, y.kD)(I, I.previous_acked_tier),
                                            }),
                                        (0, a.jsxs)("div", {
                                            className: ln.nj,
                                            children: [
                                                (0, a.jsxs)(u.D, {
                                                    variant: ea ? "nitro-sm" : "display-sm",
                                                    color: "text-strong",
                                                    className: k()(ln._r, ea && ln.ve),
                                                    children: [
                                                        null != en &&
                                                            (0, a.jsx)(m.E, {
                                                                tag: "span",
                                                                variant: "body-sm/medium",
                                                                color: "text-subtle",
                                                                className: ln.$g,
                                                                children: en,
                                                            }),
                                                        ei,
                                                    ],
                                                }),
                                                (0, a.jsx)(ls, { segments: eb }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: ln.oA,
                                    children: [
                                        ef &&
                                            (0, a.jsx)(G.w, {
                                                type: "info",
                                                message: eu.intl.format(eu.t.Zh44ni, {
                                                    onGoToSettings: () =>
                                                        (0, Z.openUserSettings)(Y.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                                }),
                                                role: "none",
                                            }),
                                        eI &&
                                            (0, a.jsxs)("div", {
                                                className: ln.d9,
                                                children: [
                                                    eE &&
                                                        (0, a.jsxs)(a.Fragment, {
                                                            children: [
                                                                (0, a.jsx)(ll, { badge: I, viewerBadge: S }),
                                                                (0, a.jsx)(P.c, {}),
                                                            ],
                                                        }),
                                                    eA &&
                                                        (0, a.jsxs)("div", {
                                                            className: k()(ln.E4, !er && ln.H),
                                                            children: [
                                                                (0, a.jsxs)("div", {
                                                                    className: ln.jv,
                                                                    children: [
                                                                        es &&
                                                                            (0, a.jsx)(m.E, {
                                                                                variant: "body-xs/medium",
                                                                                color: "text-subtle",
                                                                                className: ln.c$,
                                                                                children: eu.intl.string(
                                                                                    eu.t["/Gmn3f"],
                                                                                ),
                                                                            }),
                                                                        (0, a.jsx)(m.E, {
                                                                            variant: "body-sm/medium",
                                                                            color: "text-default",
                                                                            className: ln.ij,
                                                                            children: ey,
                                                                        }),
                                                                    ],
                                                                }),
                                                                null != et &&
                                                                    (0, a.jsx)(g.$, {
                                                                        variant: (function (e) {
                                                                            let {
                                                                                isNitro: l,
                                                                                isViewerOnUpgradeableNitro: t,
                                                                                viewerOwnsBadge: a,
                                                                            } = e;
                                                                            return t
                                                                                ? "expressive"
                                                                                : a
                                                                                  ? "secondary"
                                                                                  : l
                                                                                    ? "expressive"
                                                                                    : "primary";
                                                                        })({
                                                                            isNitro: ea,
                                                                            isViewerOnUpgradeableNitro: ej,
                                                                            viewerOwnsBadge: j,
                                                                        }),
                                                                        size: "sm",
                                                                        onClick: ep,
                                                                        text: et.ctaLabel({
                                                                            owned: j,
                                                                            isViewerOnUpgradeableNitro: ej,
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                    er &&
                                                        (0, a.jsx)("div", {
                                                            className: ln.cJ,
                                                            children: (0, a.jsx)(la, {
                                                                badge: eS,
                                                                isViewingOtherUser: h,
                                                                targetUsername: _,
                                                                isViewerOnUpgradeableNitro: ej,
                                                            }),
                                                        }),
                                                    null != eN && (0, a.jsx)("div", { className: ln.Z6, children: eN }),
                                                ],
                                            }),
                                        !eI && eN,
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
var ld = t(921121);
function lo(e) {
    let {
            transitionState: l,
            onClose: t,
            initialBadgeId: j,
            targetUserId: p,
            targetUsername: N,
            viewingCurrentUserBadges: f,
        } = e,
        w = (0, s.bG)([b.default], () => b.default.getCurrentUser()?.id),
        T = null == p || p === w,
        O = (function (e) {
            let { location: l } = e;
            return I.useConfig({ location: l }).enabled;
        })({ location: "BadgeDirectoryModal" }),
        k = !T && null != p && !0 !== f,
        R = k ? p : w,
        D = null != R ? `viewed_user:${k ? "other" : "self"}` : void 0,
        [F, L] = n.useState(j ?? null),
        G = (0, s.yK)([A.Ay], () => (null != R ? A.Ay.getBadges(R) : []), [R]),
        M = (0, s.bG)([A.Ay], () => null != R && A.Ay.hasCatalogFor(R), [R]),
        $ = (0, s.bG)([A.Ay], () => A.Ay.hasCatalogFetchErrorFor(R), [R]),
        P = (0, s.bG)([A.Ay], () => null != R && !A.Ay.isCatalogStaleFor(R), [R]),
        z = !k && G.some((e) => e.owned && !0 === e.has_updates),
        V = (0, S.e)({ location: "BadgeDirectoryModal", hasUnread: z });
    (n.useEffect(() => {
        null != R && (A.Ay.hasCatalogFor(R) ? A.Ay.isCatalogStaleFor(R) && (0, v.RS)(R) : (0, v.RS)(R));
        let e = k ? w : p;
        T || null == e || A.Ay.hasCatalogFor(e) || (0, v.RS)(e);
    }, [R, T, k, w, p]),
        n.useEffect(() => {
            null != D && x.A.increment({ name: i.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [D] });
        }, [D]));
    let H = n.useMemo(() => {
            let { earnable: e, owned: l } = (0, y.in)(G);
            if (k) return l[0]?.badge_id ?? null;
            let t = V ? l.find((e) => !0 === e.has_updates) : void 0;
            return t?.badge_id ?? l[0]?.badge_id ?? e[0]?.badge_id ?? null;
        }, [G, V, k]),
        Y = null != F && null != R ? A.Ay.getBadgeById(F, R) : void 0,
        Z = null != H && null != R ? A.Ay.getBadgeById(H, R) : void 0,
        q = Y ?? Z,
        J = !M && !$,
        K = !M && $,
        Q = !k;
    n.useEffect(() => {
        K && null != D && x.A.increment({ name: i.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [D] });
    }, [K, D]);
    let W = (0, s.bG)([A.Ay], () => null != p && null != q && (A.Ay.getBadgeById(q.badge_id, p)?.owned ?? !1), [q, p]),
        X = (0, s.bG)([A.Ay], () => (null != w && null != q ? A.Ay.getBadgeById(q.badge_id, w) : void 0), [q, w]),
        ee = X?.owned ?? !1,
        el = n.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, eV.openBadgeDirectoryModal)({ ...e, stackingBehavior: "replace" }).then(() => {
                    t();
                });
            },
            [t],
        ),
        et = n.useCallback(() => {
            null != p &&
                null != q &&
                (k
                    ? el({
                          initialBadgeId: q.badge_id,
                          targetUserId: p,
                          targetUsername: N,
                          viewingCurrentUserBadges: !0,
                      })
                    : el({ initialBadgeId: q.badge_id, targetUserId: p, targetUsername: N }));
        }, [k, q, el, p, N]),
        ea = n.useCallback(() => {
            null != w &&
                null != p &&
                (C({ actionName: "view_your_badges_pressed", badge: q, displayedUserId: R, isSociallyNavigated: k }),
                el({ targetUserId: p, targetUsername: N, viewingCurrentUserBadges: !0 }));
        }, [w, R, k, q, el, p, N]),
        en = n.useCallback(() => {
            null != R && (0, v.RS)(R, { isRetry: !0 });
        }, [R]),
        ei = n.useCallback(() => {
            (C({ actionName: "badge_directory_closed", badge: q, displayedUserId: R, isSociallyNavigated: k }), t());
        }, [R, k, t, q]),
        es = n.useCallback(() => {
            null != w &&
                (C({
                    actionName: "customize_your_badges_pressed",
                    badge: q,
                    displayedUserId: R,
                    isSociallyNavigated: k,
                }),
                ei(),
                B.A.setState({ isOpen: !0 }),
                (0, _.kN)(w) || (0, h.openUserProfileModal)({ userId: w }));
        }, [w, R, ei, k, q]),
        er = q?.badge_id;
    !(function (e) {
        let { badgeId: l, enabled: t } = e;
        n.useEffect(() => {
            null != l && t && U.has(l) && (0, v.PV)(l);
        }, [l, t]);
    })({ badgeId: er, enabled: Q });
    let ed = V && !k && q?.has_updates === !0,
        eo = (0, s.bG)([E], () => Q && null != er && U.has(er) && !E.getSeenBadgeIndicators().has(er), [er, Q]),
        [ec, em] = n.useState(null);
    ec?.badgeId !== er && em({ badgeId: er, hadNewIndicator: eo });
    let eg = null != ec && ec.badgeId === er && ec.hadNewIndicator,
        ex = (0, S.e)({ location: "BadgeDirectoryModal", hasUnread: eg }) && eg,
        e_ = l === d.ip.ENTERED && (P || $),
        [eb, ev] = n.useState(null);
    return (
        null != eb && eb.badge_id !== er ? ev(null) : null == eb && ed && e_ && null != q && ev({ ...q }),
        n.useEffect(() => {
            null != eb && (L(eb.badge_id), (0, v.zd)(eb.badge_id));
        }, [eb]),
        n.useEffect(() => {
            null != q && C({ actionName: "badge_detail_viewed", badge: q, displayedUserId: R, isSociallyNavigated: k });
        }, [er, R, k]),
        (0, a.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": eu.intl.string(eu.t.PEjP4L),
            transitionState: l,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: O ? ld.C : eh.CR,
            children: (0, a.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: eh.jE,
                children: [
                    (J || K || null == q) &&
                        (0, a.jsx)("div", { className: eh.b, children: (0, a.jsx)(o.J, { onClick: ei, size: "sm" }) }),
                    J
                        ? (0, a.jsx)("div", { className: eh.Lq, children: (0, a.jsx)(c.y, {}) })
                        : K
                          ? (0, a.jsxs)("div", {
                                className: eh.IU,
                                children: [
                                    (0, a.jsx)(u.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: eu.intl.string(eu.t.iufib1),
                                    }),
                                    (0, a.jsx)(m.E, {
                                        variant: "body-sm/medium",
                                        color: "text-subtle",
                                        className: eh.TQ,
                                        children: eu.intl.string(eu.t.eAn6z2),
                                    }),
                                    (0, a.jsx)(g.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: en,
                                        text: eu.intl.string(eu.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(ey, {
                                        selectedBadgeId: q?.badge_id ?? null,
                                        onSelectBadge: L,
                                        displayedUserId: R,
                                        isViewingOtherUser: k,
                                        targetUsername: N,
                                        onViewOwnCatalog: ea,
                                        onCustomizeBadges: es,
                                        showBadgeIndicators: Q,
                                    }),
                                    null != q &&
                                        (O
                                            ? (0, a.jsx)(lr, {
                                                  badge: q,
                                                  viewerBadge: X,
                                                  onClose: ei,
                                                  isViewingOtherUser: k,
                                                  targetUsername: N,
                                                  displayedUserId: R,
                                                  viewerOwnsBadge: ee,
                                                  onViewOwnCatalog: ea,
                                                  isUnread: ed,
                                                  unlock: eb,
                                                  showNewTag: ex,
                                              })
                                            : (0, a.jsx)(ez, {
                                                  badge: q,
                                                  viewerBadge: X,
                                                  onClose: ei,
                                                  isOwnProfile: T,
                                                  isViewingOtherUser: k,
                                                  targetUsername: N,
                                                  displayedUserId: R,
                                                  targetOwnsBadge: W,
                                                  viewerOwnsBadge: ee,
                                                  onToggleViewedUser: et,
                                                  onViewOwnCatalog: ea,
                                              })),
                                ],
                            }),
                ],
            }),
        })
    );
}
