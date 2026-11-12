t.d(l, { default: () => ld });
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
    _ = t(702476),
    h = t(403777),
    b = t(287809),
    v = t(682618),
    j = t(982240);
let y = (0, t(945810).mj)({
    name: "2026-10-badge-directory-updates",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var p = t(620143),
    N = t(988341),
    f = t(129230),
    E = t(652215);
function A(e) {
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
        o = null != t && null != d ? j.Ay.getBadgeById(t.badge_id, d) : void 0,
        c = null != t && null != d ? j.Ay.getRemainingToNextTier(t.badge_id, d) : void 0,
        u = null != a ? j.Ay.getBadges(a).filter((e) => e.owned).length : void 0;
    f.default.track(E.HAw.BADGE_DIRECTORY_ACTION, {
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
var I = t(248284),
    S = t(73153);
let w = { seenBadgeIndicatorIds: new Set() };
class T extends s.Ay.PersistedStore {
    static displayName = "BadgeDirectorySeenStore";
    static persistKey = "BadgeDirectorySeenStore";
    initialize(e) {
        w = { seenBadgeIndicatorIds: new Set(e?.seenBadgeIndicatorIds ?? []) };
    }
    getState() {
        return { seenBadgeIndicatorIds: Array.from(w.seenBadgeIndicatorIds) };
    }
    getSeenBadgeIndicators() {
        return w.seenBadgeIndicatorIds;
    }
}
let C = new T(S.h, {
        BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN: function (e) {
            let { badgeId: l } = e;
            if (w.seenBadgeIndicatorIds.has(l)) return !1;
            w = { ...w, seenBadgeIndicatorIds: new Set([...w.seenBadgeIndicatorIds, l]) };
        },
    }),
    B = N.sC;
t(321073);
var U = t(503698),
    O = t.n(U),
    k = t(70283),
    R = t(805251),
    D = t(97808),
    F = t(123292),
    L = t(683071),
    $ = t(707554),
    G = t(95362),
    M = t(404778),
    P = t(136969),
    z = t(775602),
    V = t(640708),
    H = t(780964),
    Y = t(766075),
    Z = t(153488),
    q = t(240248),
    J = t(731309),
    K = t(837381),
    Q = t(116903),
    W = t(741918),
    X = t(939249),
    ee = t(643056),
    el = t(486020);
function et(e, l, t) {
    let a = (0, s.bG)([b.default], () => (null != e ? b.default.getUser(e) : void 0), [e]);
    if (null != a && l) return (0, el.ku)({ id: a.id, avatar: a.avatar, discriminator: a.discriminator }, !1, t);
}
var ea = t(696292),
    en = t(975807),
    ei = t(990820),
    es = t(216934),
    er = t(976860),
    ed = t(758836),
    eo = t(682901),
    ec = t(792996);
let eu = {
        [k.$.STAFF]: {
            ctaLabel: () => ec.intl.string(ec.t.q7A8hP),
            ctaAction: () => (0, en.A)("https://discord.com/careers"),
        },
        [k.$.PREMIUM_TENURE]: {
            ctaLabel: (e) => {
                let { owned: l, isViewerOnUpgradeableNitro: t } = e;
                return !0 === t
                    ? ec.intl.string(ec.t.uKFeS1)
                    : l
                      ? ec.intl.string(ec.t.xGjjkd)
                      : ec.intl.string(ec.t.BTxm69);
            },
            ctaAction: () => (0, er.pX)(E.BVt.NITRO_HOME),
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
            ctaAction: () => (0, er.pX)(E.BVt.COLLECTIBLES_SHOP_WITH_TAB(ed.G2.ORBS)),
        },
        [k.$.QUEST_COMPLETED]: {
            ctaLabel: () => ec.intl.string(ec.t.swICIT),
            ctaAction: () => (0, es.m)({ fromContent: ea.u.QUEST_BADGE }),
        },
        [k.$.GIFTING]: {
            ctaLabel: () => ec.intl.string(ec.t["nUA/JW"]),
            ctaAction: () => (0, ei.A)({ giftingOrigin: eo.vQ.BADGE_DIRECTORY }),
        },
    },
    em = "badge-details";
var eg = t(778712),
    ex = t(177861);
function e_(e) {
    return `badge-tab-${e}`;
}
function eh(e) {
    let l = Array.from(e);
    return l.length > 19 ? `${l.slice(0, 19).join("")}...` : e;
}
function eb(e) {
    let { badge: l, isSelected: t, onSelect: i, itemId: s, showBadgeIndicator: r } = e,
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
    return (0, a.jsxs)(X.D, {
        ...d,
        innerRef: x,
        role: "tab",
        id: e_(l.badge_id),
        "aria-label": g,
        "aria-selected": t,
        "aria-controls": t ? em : void 0,
        className: O()(ex.oL, t && ex.xO),
        onFocus: d.onFocus,
        onClick: () => {
            (x.current?.focus(), i());
        },
        children: [
            r && (0, a.jsx)("span", { "aria-hidden": !0, className: ex.Dn }),
            null != l.simple_icon_url &&
                (0, a.jsx)("img", {
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
    let { label: l, navId: t, badges: n, selectedBadgeId: i, onSelectBadge: s, badgeIndicatorIds: r } = e,
        d = (0, Q.Ay)({
            id: t,
            isEnabled: !0,
            orientation: W.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, a.jsxs)("div", {
        className: ex.zE,
        children: [
            "heading" === l.type &&
                (0, a.jsx)(u.D, { id: l.id, variant: "heading-xs/medium", color: "text-default", children: l.text }),
            (0, a.jsx)(K.hD, {
                navigator: d,
                children: (0, a.jsx)(K.PR, {
                    children: (e) =>
                        (0, a.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === l.type ? l.id : void 0,
                            "aria-label": "aria" === l.type ? l.text : void 0,
                            className: ex.yq,
                            children: n.map((e, l) => {
                                let t = e.badge_id === i;
                                return (0, a.jsx)(
                                    eb,
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
function ej(e) {
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
        _ = (0, s.yK)([j.Ay], () => (null != i ? j.Ay.getBadges(i) : []), [i]),
        { earnable: h, owned: b } = n.useMemo(() => (0, N.in)(_), [_]),
        v = n.useMemo(() => [...b, ...h], [b, h]),
        { badgeIndicatorIds: y } = (function (e) {
            let { badges: l, enabled: t } = e,
                a = (0, s.bG)([C], () => C.getSeenBadgeIndicators());
            return {
                badgeIndicatorIds: n.useMemo(
                    () =>
                        t
                            ? new Set(
                                  l
                                      .filter((e) => {
                                          let { badge_id: l } = e;
                                          return B.has(l) && !a.has(l);
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
        f = n.useMemo(() => new Set(x ? v.filter((e) => !0 === e.has_updates).map((e) => e.badge_id) : []), [x, v]),
        E = (0, p.e)({ location: "BadgeDirectoryPanel", hasUnread: f.size > 0 }) ? f : y,
        A = et(i, r, 48),
        I = (0, ee.d)({ location: "BadgeDirectoryPanel" }),
        S = null != d ? eh(d) : null,
        w = null != d && S !== d,
        T =
            null != S && w && null != A
                ? (0, a.jsxs)("span", {
                      className: ex._p,
                      children: [(0, a.jsx)(D.eu, { src: A, size: eg._3.SIZE_24, "aria-hidden": !0 }), S],
                  })
                : S,
        U = r && null != T ? ec.intl.format(ec.t.EIcwoe, { username: T }) : ec.intl.string(ec.t.UqnlQF),
        O = r && null != d ? ec.intl.string(ec.t["75s2Rq"]) : ec.intl.string(ec.t["62xU4E"]),
        k = r && null != d ? ec.intl.formatToPlainString(ec.t.BCjSZy, { username: d }) : ec.intl.string(ec.t.UqnlQF);
    return (0, a.jsx)("div", {
        className: ex.ws,
        children: (0, a.jsxs)($.F, {
            component: (0, a.jsxs)("div", {
                className: ex.NG,
                children: [
                    (0, a.jsxs)("div", {
                        className: ex.kc,
                        children: [
                            !w && null != A && (0, a.jsx)(D.eu, { src: A, size: eg._3.SIZE_24, "aria-hidden": !0 }),
                            (0, a.jsx)(u.D, { variant: "heading-lg/semibold", color: "text-strong", children: U }),
                        ],
                    }),
                    (0, a.jsx)(m.E, { variant: "body-sm/medium", color: "text-subtle", children: O }),
                ],
            }),
            children: [
                (0, a.jsxs)(G.Ip, {
                    className: ex.hG,
                    children: [
                        b.length > 0 &&
                            (0, a.jsx)(ev, {
                                label: { type: "aria", text: k },
                                navId: "badge-directory-owned",
                                badges: b,
                                selectedBadgeId: l,
                                onSelectBadge: t,
                                badgeIndicatorIds: E,
                            }),
                        !r &&
                            h.length > 0 &&
                            (0, a.jsx)(ev, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: ec.intl.string(ec.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: h,
                                selectedBadgeId: l,
                                onSelectBadge: t,
                                badgeIndicatorIds: E,
                            }),
                    ],
                }),
                (r || I) &&
                    (0, a.jsx)("div", {
                        className: ex.HO,
                        children: r
                            ? (0, a.jsx)(g.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: o,
                                  text: ec.intl.string(ec.t.msyp90),
                              })
                            : (0, a.jsx)(g.$, {
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
var ey = t(911608),
    ep = t(847374),
    eN = t(770178),
    ef = t(194261),
    eE = t(140735),
    eA = t(836825);
function eI(e) {
    let { badge: l, isViewingOtherUser: t, targetUsername: i, isViewerOnUpgradeableNitro: s = !1 } = e,
        r = n.useId(),
        d = t && null != i;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            d &&
                (0, a.jsx)("div", {
                    className: eA.u4,
                    children: (0, a.jsx)(m.E, {
                        id: r,
                        variant: "body-xs/medium",
                        color: "text-subtle",
                        children: ec.intl.formatToPlainString(ec.t.KyTwIh, { username: i }),
                    }),
                }),
            (0, a.jsx)("div", {
                className: eA.SV,
                role: "list",
                "aria-label": d ? void 0 : l.name,
                "aria-labelledby": d ? r : void 0,
                children: l.tiers.map((e) => {
                    let n = e.owned,
                        i = !n && l.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        o = (0, N.Vs)({ tier: e, isUnlocked: n, isViewingOtherUser: t, isViewerOnUpgradeableNitro: s });
                    return (0, a.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: O()(eA.zh, i && eA.ZF),
                            children: [
                                null != r &&
                                    (0, a.jsx)("img", {
                                        className: eA.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, a.jsxs)(m.E, {
                                    variant: "footnote/medium",
                                    color: n ? "text-default" : "text-muted",
                                    className: eA.hI,
                                    children: [
                                        null != d &&
                                            (0, a.jsxs)("span", {
                                                className: eA.nU,
                                                children: [
                                                    !n &&
                                                        (0, a.jsx)(ef.LockIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: eA.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    d,
                                                ],
                                            }),
                                        "" !== o && (0, a.jsx)("span", { className: eA.nU, children: o }),
                                    ],
                                }),
                                (0, a.jsx)(eE.A, { children: ec.intl.string(n ? ec.t.sTFApF : ec.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var eS = t(600409);
function ew(e) {
    let { badge: l, viewerBadge: t, isViewingOtherUser: i, targetUsername: r, isViewerOnUpgradeableNitro: d } = e,
        [o, c] = n.useState(!1),
        [u, g] = n.useState(l.badge_id),
        x = n.useId(),
        _ = n.useId(),
        h = n.useRef(null),
        b = n.useRef(null);
    l.badge_id !== u && (g(l.badge_id), c(!1));
    let v = n.useCallback(() => {
            let e = h.current;
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
    (0, eN.g)(b, j, [o], { enabled: o });
    let y = t ?? l,
        p = (0, s.bG)([Z.A], () => Z.A.hasConsented(E.YAq.PERSONALIZATION)),
        f = !i && (0, N.Jn)(l.badge_id) && !p,
        A = i ? void 0 : y.next_tier,
        I = i ? void 0 : y.current_tier,
        S = null != A ? y.tiers.find((e) => e.key === A) : void 0,
        w = null != I ? y.tiers.find((e) => e.key === I) : void 0,
        T = i ? void 0 : y.progress?.[0],
        C = T?.threshold ?? S?.requirements[0]?.threshold ?? null,
        B = !i && y.owned && null != S,
        U = i || (0, q.uJ)(y.leveling_instructions) || B ? void 0 : y.leveling_instructions,
        k = S?.name != null ? ec.intl.formatToPlainString(ec.t["Jn+COZ"], { tier_name: S.name }) : void 0,
        R = o ? ec.intl.string(ec.t["065Hig"]) : ec.intl.string(ec.t.MylOvg),
        D = i ? l : y,
        F = w?.complex_icon_static_url ?? w?.simple_icon_url,
        L = S?.complex_icon_static_url ?? S?.simple_icon_url,
        $ = !(0, q.uJ)(T?.progress_helper_text),
        G = null != k ? { "aria-labelledby": _ } : { "aria-label": ec.intl.string(ec.t.Uwhb1l) };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != U && (0, a.jsx)(m.E, { variant: "body-xs/medium", color: "text-subtle", children: U }),
            B &&
                !f &&
                (0, a.jsxs)("div", {
                    className: eS.ES,
                    children: [
                        null != F &&
                            (0, a.jsx)("img", { className: eS.Tw, src: F, alt: "", "aria-hidden": !0, draggable: !1 }),
                        (0, a.jsxs)("div", {
                            className: eS.Bd,
                            children: [
                                null != k && (0, a.jsx)(m.E, { id: _, variant: "body-sm/medium", children: k }),
                                null != C
                                    ? (0, a.jsx)(ey.z, {
                                          value: T?.current ?? 0,
                                          minValue: T?.floor ?? 0,
                                          maxValue: C,
                                          size: "md",
                                          className: eS.hr,
                                          ...G,
                                      })
                                    : null != T &&
                                      (0, a.jsx)(ey.z, { isIndeterminate: !0, size: "md", className: eS.hr, ...G }),
                                $ &&
                                    (0, a.jsx)(m.E, {
                                        variant: "body-xs/medium",
                                        color: "text-subtle",
                                        children: T?.progress_helper_text,
                                    }),
                            ],
                        }),
                        null != L &&
                            (0, a.jsx)("img", { className: eS.Tw, src: L, alt: "", "aria-hidden": !0, draggable: !1 }),
                    ],
                }),
            B && !f
                ? (0, a.jsxs)("div", {
                      className: eS.JC,
                      children: [
                          (0, a.jsx)("div", {
                              ref: b,
                              className: O()(eS.ne, o && eS.GB),
                              id: x,
                              children: (0, a.jsx)("div", {
                                  className: eS.zL,
                                  inert: !o,
                                  children: (0, a.jsxs)("div", {
                                      className: eS.GA,
                                      children: [
                                          (0, a.jsx)(M.c, { className: eS.yF }),
                                          (0, a.jsx)(eI, {
                                              badge: D,
                                              isViewingOtherUser: i,
                                              targetUsername: r,
                                              isViewerOnUpgradeableNitro: d,
                                          }),
                                      ],
                                  }),
                              }),
                          }),
                          (0, a.jsxs)(X.D, {
                              innerRef: h,
                              className: eS.tw,
                              "aria-expanded": o,
                              "aria-controls": x,
                              onClick: () => c(!o),
                              children: [
                                  (0, a.jsx)(m.E, {
                                      className: eS.Yi,
                                      variant: "body-xs/medium",
                                      color: "text-subtle",
                                      children: R,
                                  }),
                                  (0, a.jsx)(ep.ChevronSmallDownIcon, {
                                      size: "sm",
                                      color: "currentColor",
                                      "aria-hidden": !0,
                                      className: O()(eS.ai, o && eS.hg),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, a.jsx)(eI, { badge: D, isViewingOtherUser: i, targetUsername: r, isViewerOnUpgradeableNitro: d }),
        ],
    });
}
var eT = t(536001),
    eC = t(260981),
    eB = t(540418),
    eU = t(907085),
    eO = t(179820);
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
    let { earnedDateText: l, label: t } = e;
    return (0, a.jsxs)("div", {
        className: O()(ex.AX, ex.aS),
        children: [
            (0, a.jsx)(m.E, { variant: "body-xs/medium", color: "text-default", className: ex.NM, children: l }),
            (0, a.jsx)(m.E, { variant: "body-xs/medium", color: "text-subtle", className: ex.MZ, children: t }),
        ],
    });
}
function eL(e) {
    let { rarityBadgeProps: l } = e;
    return (0, a.jsxs)("div", {
        className: O()(ex.AX, ex.sn),
        children: [
            (0, a.jsx)(R.E, { ...l }),
            (0, a.jsx)(m.E, {
                variant: "body-xs/medium",
                color: "text-subtle",
                children: ec.intl.string(ec.t["phYZe+"]),
            }),
        ],
    });
}
function e$() {
    return (0, a.jsx)(V.A, { height: 3, width: 3, "aria-hidden": "true", className: ex.zN });
}
function eG(e) {
    let { segments: l } = e;
    return 0 === l.length
        ? null
        : (0, a.jsx)("div", {
              className: ex.U3,
              children: l.map((e, l) => {
                  let { key: t, node: n } = e;
                  return (0, a.jsxs)("span", { className: ex.Hq, children: [l > 0 && (0, a.jsx)(e$, {}), n] }, t);
              }),
          });
}
function eM(e) {
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
        u = (0, q.uJ)(l.info_label) ? void 0 : l.info_label,
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
                        : ec.intl.string(ec.t.uHtDcT)
                    : i && null != s
                      ? ec.intl.formatToPlainString(ec.t.Eo5Cnp, { username: eh(s) })
                      : a.owned
                        ? o
                        : ec.intl.string(ec.t.uHtDcT)),
                !n)
            ) {
                let e = !i && r && null != s;
                i && d
                    ? (t = ec.intl.string(ec.t.yxEAGH))
                    : e && (t = ec.intl.formatToPlainString(ec.t["9GNsge"], { username: eh(s) }));
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
        _ = [];
    (null != g &&
        _.push({
            key: "status",
            node: (0, a.jsxs)("span", {
                className: ex.pC,
                children: [
                    !t && null != s && (0, a.jsx)(D.eu, { src: s, size: eg._3.SIZE_16, "aria-hidden": !0 }),
                    (0, a.jsx)(m.E, {
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
            _.push({
                key: "info",
                node: (0, a.jsx)(m.E, {
                    tag: "span",
                    variant: "body-xs/medium",
                    color: "text-subtle",
                    className: ex.$L,
                    children: u,
                }),
            }));
    let h = _.length >= 3 && null != x,
        b =
            null != x
                ? {
                      key: "toggle",
                      node: (0, a.jsx)(F.Q, {
                          variant: "primary",
                          size: "sm",
                          textVariant: "body-xs/medium",
                          onClick: c,
                          text: x,
                      }),
                  }
                : void 0,
        v = h || null == b ? _ : [..._, b];
    return 0 === v.length && null == b
        ? null
        : (0, a.jsxs)("div", {
              className: ex.rI,
              children: [(0, a.jsx)(eG, { segments: v }), h && null != b && (0, a.jsx)(eG, { segments: [b] })],
          });
}
function eP(e) {
    let l,
        t,
        i,
        r,
        d,
        c,
        x,
        {
            badge: _,
            viewerBadge: h,
            onClose: v,
            isOwnProfile: y,
            isViewingOtherUser: p,
            targetUsername: f,
            displayedUserId: I,
            targetOwnsBadge: S,
            viewerOwnsBadge: w,
            onToggleViewedUser: T,
            onViewOwnCatalog: C,
        } = e,
        B = et(I, p, 32),
        U = (0, N.DW)(_),
        R = (0, s.bG)([z.Ay], () => z.Ay.useReducedMotion)
            ? void 0
            : (U?.complex_icon_animated_url ?? _.complex_icon_animated_url),
        D = U?.complex_icon_static_url ?? _.complex_icon_static_url,
        F = U?.simple_icon_url ?? _.simple_icon_url,
        V = R ?? D ?? F,
        K = ek(U?.rarity ?? _.rarity) ?? void 0,
        Q = eu[_.badge_id],
        W = _.badge_id === k.$.PREMIUM_TENURE,
        X = W ? (U?.name ?? U?.key) : U?.name,
        ee = W ? ec.intl.string(ec.t.Ipxkog) : _.name;
    W ? (r = null != X ? `${ee} ${X}` : ee) : null != X ? ((i = ee), (r = X)) : (r = ee);
    let el = (0, J.ie)(_.badge_id) && !_.is_earnable && _.badge_id !== k.$.STAFF,
        ea = (_.tiers?.length ?? 0) > 0,
        en = (0, j.H5)(_),
        ei = (function (e) {
            let [l, t] = n.useState(eD),
                [a, i] = n.useState(e);
            return (e !== a && (i(e), t(eD())), l);
        })(_.badge_id);
    d = _.owned
        ? _.badge_id === k.$.APRIL_FOOLS_2026
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
        : ea
          ? "--"
          : void 0;
    let es = ((t = null == (l = _.tiers?.[0]?.key) || U?.key === l), ec.intl.string(t ? ec.t.WDhIz2 : ec.t.wYaDmz)),
        er = null != d && _.badge_id !== k.$.STAFF,
        ed = null != K,
        eg = null;
    ((er || ed) &&
        (eg = (0, a.jsxs)("div", {
            className: O()(ex.$S, (!er || !ed) && ex.jQ),
            children: [
                er && null != d && (0, a.jsx)(eF, { earnedDateText: d, label: es }),
                ed && (0, a.jsx)(eL, { rarityBadgeProps: K }),
            ],
        })),
        er || (c = ec.intl.string(ec.t.sTFApF)));
    let eh = b.default.getCurrentUser()?.premiumType,
        eb = W && (eh === eo.PremiumTypes.TIER_0 || eh === eo.PremiumTypes.TIER_1);
    x =
        !eb && h?.owned === !0 && (h.tiers?.length ?? 0) > 0 && null == h.next_tier
            ? ec.intl.string(ec.t.jY5xAL)
            : eb
              ? ec.intl.string(ec.t.qkwSSp)
              : (h?.description ?? _.description);
    let ev = n.useCallback(() => {
            null != Q &&
                (A({
                    actionName: "primary_badge_action_clicked",
                    badge: _,
                    displayedUserId: I,
                    isSociallyNavigated: p,
                }),
                v(),
                P.A.popAll(),
                Q.ctaAction());
        }, [_, I, p, Q, v]),
        ej =
            !p || _.is_earnable || w || _.badge_id === k.$.STAFF
                ? null
                : (0, a.jsx)(L.w, {
                      type: "info",
                      message: ec.intl.format(ec.t.vFekBs, { onViewBadges: C }),
                      role: "none",
                  }),
        ey = (0, s.bG)([Z.A], () => Z.A.hasConsented(E.YAq.PERSONALIZATION)),
        ep = (0, N.Jn)(_.badge_id) && !p && !ey;
    return (0, a.jsx)($.F, {
        forceLevel: 2,
        children: (0, a.jsx)("div", {
            id: em,
            role: "tabpanel",
            "aria-labelledby": e_(_.badge_id),
            className: ex.SV,
            children: (0, a.jsxs)(G.d_, {
                className: ex.C9,
                children: [
                    (0, a.jsx)("div", { className: ex.Gw, children: (0, a.jsx)(o.J, { onClick: v, size: "sm" }) }),
                    null != V &&
                        (0, a.jsx)("img", {
                            className: O()(ex.y2, null != R && V === R && ex.hu),
                            src: V,
                            alt: "",
                            "aria-hidden": !0,
                            draggable: !1,
                        }),
                    (0, a.jsxs)("div", {
                        className: ex.OU,
                        children: [
                            (0, a.jsx)("div", {
                                className: ex.cQ,
                                children: (0, a.jsxs)("div", {
                                    className: ex.nj,
                                    children: [
                                        (0, a.jsxs)(u.D, {
                                            variant: W ? "nitro-sm" : "display-sm",
                                            color: "text-strong",
                                            className: O()(ex._r, W && ex.ve),
                                            children: [
                                                null != i &&
                                                    (0, a.jsx)(m.E, {
                                                        tag: "span",
                                                        variant: "body-sm/medium",
                                                        color: "text-subtle",
                                                        className: ex.$g,
                                                        children: i,
                                                    }),
                                                r,
                                            ],
                                        }),
                                        (0, a.jsx)(eM, {
                                            badge: _,
                                            isOwnProfile: y,
                                            isViewingOtherUser: p,
                                            targetUsername: f,
                                            viewedAvatarSrc: B,
                                            targetOwnsBadge: S,
                                            viewerOwnsBadge: w,
                                            unlockedStatusText: c,
                                            onToggleViewedUser: T,
                                        }),
                                    ],
                                }),
                            }),
                            (0, a.jsxs)("div", {
                                className: ex.oA,
                                children: [
                                    ep &&
                                        (0, a.jsx)(L.w, {
                                            type: "info",
                                            message: ec.intl.format(ec.t.Zh44ni, {
                                                onGoToSettings: () =>
                                                    (0, Y.openUserSettings)(H.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                            }),
                                            role: "none",
                                        }),
                                    eg,
                                    !(0, q.uJ)(x) &&
                                        (0, a.jsxs)("div", {
                                            className: ex.d9,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: ex.E4,
                                                    children: [
                                                        (0, a.jsxs)("div", {
                                                            className: ex.jv,
                                                            children: [
                                                                el &&
                                                                    (0, a.jsx)(m.E, {
                                                                        variant: "body-xs/medium",
                                                                        color: "text-subtle",
                                                                        className: ex.c$,
                                                                        children: ec.intl.string(ec.t["/Gmn3f"]),
                                                                    }),
                                                                (0, a.jsx)(m.E, {
                                                                    variant: "body-sm/medium",
                                                                    color: "text-default",
                                                                    className: ex.ij,
                                                                    children: x,
                                                                }),
                                                            ],
                                                        }),
                                                        null != Q &&
                                                            (0, a.jsx)(g.$, {
                                                                variant: eb
                                                                    ? "expressive"
                                                                    : w
                                                                      ? "secondary"
                                                                      : W
                                                                        ? "expressive"
                                                                        : "primary",
                                                                size: "sm",
                                                                onClick: ev,
                                                                text: Q.ctaLabel({
                                                                    owned: w,
                                                                    isViewerOnUpgradeableNitro: eb,
                                                                }),
                                                            }),
                                                    ],
                                                }),
                                                ea &&
                                                    (0, a.jsxs)("div", {
                                                        className: ex.cJ,
                                                        children: [
                                                            (0, a.jsx)(M.c, {}),
                                                            (0, a.jsx)(ew, {
                                                                badge: _,
                                                                viewerBadge: h,
                                                                isViewingOtherUser: p,
                                                                targetUsername: f,
                                                                isViewerOnUpgradeableNitro: eb,
                                                            }),
                                                        ],
                                                    }),
                                                null != ej && (0, a.jsx)("div", { className: ex.Z6, children: ej }),
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
var ez = t(470739),
    eV = t(515718);
function eH(e, l, t) {
    let a = t ? void 0 : (l?.complex_icon_animated_url ?? e.complex_icon_animated_url),
        n = a ?? l?.complex_icon_static_url ?? e.complex_icon_static_url ?? l?.simple_icon_url ?? e.simple_icon_url;
    return { animatedUrl: a, imageUrl: n };
}
function eY(e) {
    return (0, J.ie)(e.badge_id) && !e.is_earnable && e.badge_id !== k.$.STAFF;
}
let eZ = [ec.t["6zFA/T"], ec.t.wzZHKl, ec.t["+ED/nf"]];
function eq() {
    let e = Math.floor(Math.random() * eZ.length);
    return ec.intl.string(eZ[e]);
}
var eJ = t(765178),
    eK = t(943654),
    eQ = t(998304),
    eW = t(253400);
let eX = t(646514).A.unsafe_rawColors.NEUTRAL_35.resolve({ saturation: 1 }).hex();
function e0(e) {
    let [l, t] = n.useState(null);
    return (n.useEffect(() => {
        if (null == e) return;
        let l = !1;
        return (
            !(async function (e) {
                try {
                    let a,
                        n,
                        i = await (0, eV.S4)(e),
                        s =
                            (null != i
                                ? ((n =
                                      (a = i.filter((e) => {
                                          let [l, t, a] = e,
                                              { lightness: n } = (0, eQ.IB)(l, t, a);
                                          return n > 0.15 && n < 0.85;
                                      })).find((e) => {
                                          let [l, t, a] = e;
                                          return (0, eQ.IB)(l, t, a).saturation > 0.3;
                                      }) ?? a[0]),
                                  null != n ? (0, eQ.Ob)(n[0], n[1], n[2]) : null)
                                : null) ?? eX;
                    l || t({ url: e, color: s });
                } catch {
                    l || t({ url: e, color: eX });
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
var e1 = t(589801);
function e2(e, l) {
    return { previousTier: (0, N.YU)(e, l), currentTier: (0, N.DW)(e) };
}
function e3(e, l, t) {
    return t ? l?.simple_icon_raster_url : (l?.simple_icon_raster_url ?? e.simple_icon_raster_url);
}
function e8(e) {
    let { badge: l, tier: t, isStarted: i, isPreviousTier: s = !1, onLoad: r, className: d, fillClassName: o } = e,
        c = s ? (t?.complex_icon_static_url ?? t?.simple_icon_url) : eH(l, t, !0).imageUrl,
        u = e0(e3(l, t, s)),
        m = u ?? eX,
        [g, x] = n.useState(!1),
        _ = n.useCallback(() => x(!0), []),
        h = g && null != u,
        [b, v] = n.useState(null);
    n.useEffect(() => {
        h && (v(i ? "fade-in" : "with-start"), r());
    }, [h]);
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
        : (0, a.jsx)("div", {
              className: O()(e1.qd, (null == b || !i) && e1.R, "fade-in" === b && e1.qG),
              style: j,
              children: (0, a.jsxs)("div", {
                  className: O()(e1.qS, d),
                  children: [
                      (0, a.jsx)("img", {
                          className: e1.Qw,
                          src: c,
                          alt: "",
                          crossOrigin: "anonymous",
                          draggable: !1,
                          onLoad: _,
                          onError: _,
                      }),
                      (0, a.jsx)("div", {
                          className: O()(e1.ys, o),
                          children: (0, a.jsx)("div", { className: e1.GS }),
                      }),
                  ],
              }),
          });
}
function e9(e) {
    let { badge: l, previousTierKey: t, size: i, delay: r, canStart: d = !0, onStart: o } = e,
        c = (0, s.bG)([z.Ay], () => z.Ay.useReducedMotion),
        { previousTier: u, currentTier: m } = e2(l, t),
        g = null != u,
        x = g && !c,
        _ = r + 250 * !!g,
        [h, b] = n.useState(0),
        v = n.useCallback(() => b((e) => e + 1), []),
        [j, y] = n.useState(!1),
        p = h >= (x ? 2 : 1),
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
    let I = n.useMemo(() => ({ "--custom-badge-unlock-swap": `${_}ms` }), [_]);
    return (0, a.jsxs)("div", {
        className: O()(e1.Os, "large" === i ? e1.as : e1.EX, A && (g ? e1.xH : e1.YC)),
        style: I,
        children: [
            x &&
                !f &&
                (0, a.jsx)(e8, {
                    badge: l,
                    tier: u,
                    isStarted: N,
                    isPreviousTier: !0,
                    onLoad: v,
                    className: O()(A && e1.rH),
                    fillClassName: O()(e1.Nl, A && e1.Rt),
                }),
            (0, a.jsx)(e8, {
                badge: l,
                tier: m,
                isStarted: N,
                onLoad: v,
                className: O()(A && e1.CN),
                fillClassName: O()(A && e1.Eq),
            }),
        ],
    });
}
var e7 = t(193579);
let e4 = eW.Ay.getEnableHardwareAcceleration();
function e6(e) {
    let { badge: l, previousTierKey: t, canStart: i, onStart: r } = e,
        d = (0, s.bG)([z.Ay], () => z.Ay.useReducedMotion),
        { previousTier: o, currentTier: c } = e2(l, t),
        u = null != o,
        [m, g] = n.useState(!1),
        [x, _] = n.useState(!1),
        [h, b] = n.useState(!1),
        v = e4 && !d,
        j = e0(e3(l, c, !1)) ?? eX,
        y = n.useMemo(() => ({ fill: (0, eQ.E2)(j) }), [j]),
        p = n.useCallback(
            (e) => {
                (g(!0), b(e), r?.());
            },
            [r],
        );
    return (
        n.useEffect(() => {
            m && eJ.O.announce((0, N.kD)(l, t), "polite");
        }, [m]),
        n.useEffect(() => {
            if (!m || !v || h) return;
            let e = setTimeout(() => _(!0), 200 + 250 * !!u + 1e3);
            return () => clearTimeout(e);
        }, [v, u, h, m]),
        (0, a.jsxs)("div", {
            className: e7.Tl,
            "aria-hidden": !0,
            children: [
                v &&
                    (0, a.jsx)(eK.x, {
                        artboard: "Web",
                        autoplay: x,
                        dataBinding: y,
                        className: O()(e7.U6, !x && e7.qJ),
                    }),
                (0, a.jsx)(e9, { badge: l, previousTierKey: t, size: "large", delay: 200, canStart: i, onStart: p }),
            ],
        })
    );
}
var e5 = t(229667);
function le(e) {
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
            helperText: _,
        } = ((l = d ?? r),
        (t = (0, N.YU)(l, l.current_tier)),
        (i = (0, N.YU)(l, l.next_tier)),
        {
            progress: (s = l.progress?.[0]),
            threshold: s?.threshold ?? i?.requirements[0]?.threshold ?? null,
            currentArtUrl: t?.simple_icon_url ?? t?.complex_icon_static_url,
            nextArtUrl: i?.simple_icon_url ?? i?.complex_icon_static_url,
            helperText: (0, q.uJ)(s?.progress_helper_text) ? void 0 : s?.progress_helper_text,
        }),
        h = null != _ ? { "aria-labelledby": o } : { "aria-label": ec.intl.string(ec.t.Uwhb1l) };
    return (0, a.jsxs)("div", {
        className: e5.NE,
        children: [
            (0, a.jsx)(m.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: ec.intl.string(ec.t["2m/g2c"]),
            }),
            (0, a.jsxs)("div", {
                className: e5.ES,
                children: [
                    null != g &&
                        (0, a.jsx)("img", { className: e5.Tw, src: g, alt: "", "aria-hidden": !0, draggable: !1 }),
                    (0, a.jsxs)("div", {
                        className: e5.Bd,
                        children: [
                            null != _ && (0, a.jsx)(m.E, { id: o, variant: "body-sm/medium", children: _ }),
                            null != u
                                ? (0, a.jsx)(ey.z, {
                                      value: c?.current ?? 0,
                                      minValue: c?.floor ?? 0,
                                      maxValue: u,
                                      size: "md",
                                      className: e5.hr,
                                      ...h,
                                  })
                                : null != c &&
                                  (0, a.jsx)(ey.z, { isIndeterminate: !0, size: "md", className: e5.hr, ...h }),
                        ],
                    }),
                    null != x &&
                        (0, a.jsx)("img", { className: e5.Tw, src: x, alt: "", "aria-hidden": !0, draggable: !1 }),
                ],
            }),
        ],
    });
}
var ll = t(149285);
function lt(e) {
    let { badge: l, isViewingOtherUser: t, targetUsername: i, isViewerOnUpgradeableNitro: s = !1 } = e,
        r = n.useId(),
        d = t && null != i;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            d &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(M.c, {}),
                        (0, a.jsx)("div", {
                            className: ll.u4,
                            children: (0, a.jsx)(m.E, {
                                id: r,
                                variant: "body-sm/medium",
                                children: ec.intl.formatToPlainString(ec.t.KyTwIh, { username: i }),
                            }),
                        }),
                    ],
                }),
            (0, a.jsx)("div", {
                className: ll.SV,
                role: "list",
                "aria-label": d ? void 0 : l.name,
                "aria-labelledby": d ? r : void 0,
                children: l.tiers.map((e) => {
                    let n = e.owned,
                        i = !n && l.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        o = (0, N.Vs)({ tier: e, isUnlocked: n, isViewingOtherUser: t, isViewerOnUpgradeableNitro: s });
                    return (0, a.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: O()(ll.zh, i && ll.ZF),
                            children: [
                                null != r &&
                                    (0, a.jsx)("img", {
                                        className: ll.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, a.jsxs)("div", {
                                    className: ll.hI,
                                    children: [
                                        null != d &&
                                            (0, a.jsx)(m.E, {
                                                variant: "body-xs/semibold",
                                                color: n ? "text-default" : "text-muted",
                                                className: ll.nU,
                                                children: d,
                                            }),
                                        "" !== o &&
                                            (0, a.jsxs)(m.E, {
                                                variant: "body-xs/normal",
                                                color: n ? "text-subtle" : "text-muted",
                                                className: ll.nU,
                                                children: [
                                                    !n &&
                                                        (0, a.jsx)(ef.LockIcon, {
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
                                (0, a.jsx)(eE.A, { children: ec.intl.string(n ? ec.t.sTFApF : ec.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var la = t(148204);
function ln() {
    return (0, a.jsx)(V.A, { height: 3, width: 3, "aria-hidden": "true", className: la.zN });
}
function li(e) {
    let { segments: l } = e;
    return 0 === l.length
        ? null
        : (0, a.jsx)("div", {
              className: la.U3,
              children: l.map((e, l) => {
                  let { key: t, node: n } = e;
                  return (0, a.jsxs)("span", { className: la.Hq, children: [l > 0 && (0, a.jsx)(ln, {}), n] }, t);
              }),
          });
}
function ls(e) {
    let l,
        t,
        i,
        r,
        {
            badge: d,
            viewerBadge: c,
            onClose: x,
            isViewingOtherUser: _,
            targetUsername: h,
            displayedUserId: v,
            viewerOwnsBadge: y,
            onViewOwnCatalog: p,
            isUnread: f = !1,
            unlock: I,
        } = e,
        S = I ?? d,
        w = I ?? c,
        T = (0, N.DW)(S),
        C = (0, s.bG)([z.Ay], () => z.Ay.useReducedMotion),
        [B, U] = n.useState(null),
        D = null != I && B === I,
        F = n.useCallback(() => U(I ?? null), [I]),
        V = !C && (null != I ? !D : f),
        J = !C && D,
        K = n.useMemo(() => {
            var e;
            return null != I
                ? ((e = null != (0, N.YU)(I, I.previous_acked_tier)),
                  { "--custom-badge-unlock-reveal": `${200 + 250 * !!e + 1e3}ms` })
                : void 0;
        }, [I]);
    n.useEffect(() => {
        if (!f) return;
        let { previousTier: e, currentTier: l } = e2(S, S.previous_acked_tier);
        async function t(e) {
            if (null != e)
                try {
                    await (0, eV.S4)(e);
                } catch {}
        }
        (t(e3(S, e, !0)), t(e3(S, l, !1)));
    }, [S, f]);
    let { animatedUrl: Q, imageUrl: W } = eH(S, T, C),
        X = T?.rarity ?? S.rarity,
        ee = ek(X) ?? void 0,
        el = eu[S.badge_id],
        {
            isNitro: et,
            eyebrow: ea,
            displayName: en,
        } = ((t = (l = S.badge_id === k.$.PREMIUM_TENURE) ? (T?.name ?? T?.key) : T?.name),
        (i = l ? ec.intl.string(ec.t.Ipxkog) : S.name),
        l
            ? { isNitro: l, eyebrow: void 0, displayName: null != t ? `${i} ${t}` : i }
            : null != t && S.owned
              ? { isNitro: l, eyebrow: i, displayName: t }
              : { isNitro: l, eyebrow: void 0, displayName: i }),
        ei = eY(S),
        es = (S.tiers?.length ?? 0) > 0,
        er = (function (e) {
            let [l, t] = n.useState(eq),
                [a, i] = n.useState(e);
            return (e !== a && (i(e), t(eq())), l);
        })(S.badge_id),
        ed =
            ((r = (0, j.H5)(S)),
            S.owned
                ? S.badge_id === k.$.APRIL_FOOLS_2026
                    ? ec.intl.string(ec.t["5LcHT0"])
                    : eY(S) && null == r
                      ? er
                      : null != r && S.badge_id !== k.$.STAFF
                        ? ec.intl.formatToPlainString(ec.t.XmaiRQ, { date: new Date(r) })
                        : ec.intl.string(ec.t.sTFApF)
                : ec.intl.string(ec.t.uHtDcT)),
        eg = (0, q.uJ)(S.info_label) ? void 0 : S.info_label,
        ex = S.owned && X !== eT.x.COMMON && null != ee,
        eh = [];
    (null != eg &&
        eh.push({
            key: "info",
            node: (0, a.jsx)(m.E, {
                tag: "span",
                variant: "body-xs/medium",
                color: "text-subtle",
                className: la.$L,
                children: eg,
            }),
        }),
        eh.push({
            key: "status",
            node: (0, a.jsx)(m.E, {
                tag: "span",
                variant: "body-xs/medium",
                color: "text-subtle",
                className: la.$L,
                children: ed,
            }),
        }),
        ex && eh.push({ key: "rarity", node: (0, a.jsx)(R.E, { ...ee }) }));
    let eb = b.default.getCurrentUser()?.premiumType,
        ev = S.badge_id === k.$.PREMIUM_TENURE && (eb === eo.PremiumTypes.TIER_0 || eb === eo.PremiumTypes.TIER_1),
        ej = (function (e) {
            let { badge: l, viewerBadge: t, isViewerOnUpgradeableNitro: a } = e;
            return !a && t?.owned === !0 && (t.tiers?.length ?? 0) > 0 && null == t.next_tier
                ? ec.intl.string(ec.t.jY5xAL)
                : a
                  ? ec.intl.string(ec.t.qkwSSp)
                  : (t?.description ?? l.description);
        })({ badge: S, viewerBadge: w, isViewerOnUpgradeableNitro: ev }),
        ey = n.useCallback(() => {
            null != el &&
                (A({
                    actionName: "primary_badge_action_clicked",
                    badge: S,
                    displayedUserId: v,
                    isSociallyNavigated: _,
                }),
                x(),
                P.A.popAll(),
                el.ctaAction());
        }, [S, v, _, el, x]),
        ep = !(function (e) {
            let { badge: l, isViewingOtherUser: t, viewerOwnsBadge: a } = e;
            return t && !l.is_earnable && !a && l.badge_id !== k.$.STAFF;
        })({ badge: S, isViewingOtherUser: _, viewerOwnsBadge: y })
            ? null
            : (0, a.jsx)(L.w, {
                  type: "info",
                  message: ec.intl.format(ec.t.vFekBs, { onViewBadges: p }),
                  role: "none",
              }),
        eN = (function (e) {
            let { badge: l, isViewingOtherUser: t } = e,
                a = (0, s.bG)([Z.A], () => Z.A.hasConsented(E.YAq.PERSONALIZATION));
            return (0, N.Jn)(l.badge_id) && !t && !a;
        })({ badge: S, isViewingOtherUser: _ }),
        ef = (function (e) {
            let { badge: l, viewerBadge: t, isViewingOtherUser: a } = e,
                n = (0, s.bG)([Z.A], () => Z.A.hasConsented(E.YAq.PERSONALIZATION)),
                i = t ?? l,
                r = null != (0, N.YU)(i, i.next_tier),
                d = (0, N.Jn)(l.badge_id) && !n;
            return !a && i.owned && r && !d;
        })({ badge: S, viewerBadge: w, isViewingOtherUser: _ }),
        eE = !(0, q.uJ)(ej),
        eA = ef || eE || es,
        eI = _ ? S : (w ?? S);
    return (0, a.jsx)($.F, {
        forceLevel: 2,
        children: (0, a.jsxs)("div", {
            id: em,
            role: "tabpanel",
            "aria-labelledby": e_(S.badge_id),
            className: la.SV,
            style: K,
            children: [
                (0, a.jsx)("div", { className: la.Gw, children: (0, a.jsx)(o.J, { onClick: x, size: "sm" }) }),
                (0, a.jsxs)(G.d_, {
                    className: O()(la.C9, V && la.uT, J && la.CY),
                    children: [
                        (0, a.jsx)("div", { className: la.Rm }),
                        null != I
                            ? (0, a.jsx)(
                                  e6,
                                  { badge: I, previousTierKey: I.previous_acked_tier, canStart: !0, onStart: F },
                                  `${I.badge_id}:${I.current_tier}`,
                              )
                            : null != W &&
                              (0, a.jsx)("img", {
                                  className: O()(la.y2, null != Q && et && la.Zl),
                                  src: W,
                                  alt: "",
                                  "aria-hidden": !0,
                                  crossOrigin: f ? "anonymous" : void 0,
                                  draggable: !1,
                              }),
                        (0, a.jsxs)("div", {
                            className: la.OU,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: la.cQ,
                                    children: [
                                        (null != I || f) &&
                                            !C &&
                                            (0, a.jsx)(u.D, {
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                className: O()(la.BI, D && la.Dp),
                                                "aria-hidden": !0,
                                                children: (0, N.kD)(S, S.previous_acked_tier),
                                            }),
                                        (0, a.jsxs)("div", {
                                            className: la.nj,
                                            children: [
                                                (0, a.jsxs)(u.D, {
                                                    variant: et ? "nitro-sm" : "display-sm",
                                                    color: "text-strong",
                                                    className: O()(la._r, et && la.ve),
                                                    children: [
                                                        null != ea &&
                                                            (0, a.jsx)(m.E, {
                                                                tag: "span",
                                                                variant: "body-sm/medium",
                                                                color: "text-subtle",
                                                                className: la.$g,
                                                                children: ea,
                                                            }),
                                                        en,
                                                    ],
                                                }),
                                                (0, a.jsx)(li, { segments: eh }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: la.oA,
                                    children: [
                                        eN &&
                                            (0, a.jsx)(L.w, {
                                                type: "info",
                                                message: ec.intl.format(ec.t.Zh44ni, {
                                                    onGoToSettings: () =>
                                                        (0, Y.openUserSettings)(H.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                                }),
                                                role: "none",
                                            }),
                                        eA &&
                                            (0, a.jsxs)("div", {
                                                className: la.d9,
                                                children: [
                                                    ef &&
                                                        (0, a.jsxs)(a.Fragment, {
                                                            children: [
                                                                (0, a.jsx)(le, { badge: S, viewerBadge: w }),
                                                                (0, a.jsx)(M.c, {}),
                                                            ],
                                                        }),
                                                    eE &&
                                                        (0, a.jsxs)("div", {
                                                            className: O()(la.E4, !es && la.H),
                                                            children: [
                                                                (0, a.jsxs)("div", {
                                                                    className: la.jv,
                                                                    children: [
                                                                        ei &&
                                                                            (0, a.jsx)(m.E, {
                                                                                variant: "body-xs/medium",
                                                                                color: "text-subtle",
                                                                                className: la.c$,
                                                                                children: ec.intl.string(
                                                                                    ec.t["/Gmn3f"],
                                                                                ),
                                                                            }),
                                                                        (0, a.jsx)(m.E, {
                                                                            variant: "body-sm/medium",
                                                                            color: "text-default",
                                                                            className: la.ij,
                                                                            children: ej,
                                                                        }),
                                                                    ],
                                                                }),
                                                                null != el &&
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
                                                                            isNitro: et,
                                                                            isViewerOnUpgradeableNitro: ev,
                                                                            viewerOwnsBadge: y,
                                                                        }),
                                                                        size: "sm",
                                                                        onClick: ey,
                                                                        text: el.ctaLabel({
                                                                            owned: y,
                                                                            isViewerOnUpgradeableNitro: ev,
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                    es &&
                                                        (0, a.jsx)("div", {
                                                            className: la.cJ,
                                                            children: (0, a.jsx)(lt, {
                                                                badge: eI,
                                                                isViewingOtherUser: _,
                                                                targetUsername: h,
                                                                isViewerOnUpgradeableNitro: ev,
                                                            }),
                                                        }),
                                                    null != ep && (0, a.jsx)("div", { className: la.Z6, children: ep }),
                                                ],
                                            }),
                                        !eA && ep,
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
var lr = t(921121);
function ld(e) {
    let {
            transitionState: l,
            onClose: t,
            initialBadgeId: f,
            targetUserId: E,
            targetUsername: S,
            viewingCurrentUserBadges: w,
        } = e,
        T = (0, s.bG)([b.default], () => b.default.getCurrentUser()?.id),
        C = null == E || E === T,
        U = (function (e) {
            let { location: l } = e;
            return y.useConfig({ location: l }).enabled;
        })({ location: "BadgeDirectoryModal" }),
        O = !C && null != E && !0 !== w,
        k = O ? E : T,
        R = null != k ? `viewed_user:${O ? "other" : "self"}` : void 0,
        [D, F] = n.useState(f ?? null),
        L = (0, s.yK)([j.Ay], () => (null != k ? j.Ay.getBadges(k) : []), [k]),
        $ = (0, s.bG)([j.Ay], () => null != k && j.Ay.hasCatalogFor(k), [k]),
        G = (0, s.bG)([j.Ay], () => j.Ay.hasCatalogFetchErrorFor(k), [k]),
        M = (0, s.bG)([j.Ay], () => null != k && !j.Ay.isCatalogStaleFor(k), [k]),
        P = !O && L.some((e) => e.owned && !0 === e.has_updates),
        z = (0, p.e)({ location: "BadgeDirectoryModal", hasUnread: P });
    (n.useEffect(() => {
        null != k && (j.Ay.hasCatalogFor(k) ? j.Ay.isCatalogStaleFor(k) && (0, v.RS)(k) : (0, v.RS)(k));
        let e = O ? T : E;
        C || null == e || j.Ay.hasCatalogFor(e) || (0, v.RS)(e);
    }, [k, C, O, T, E]),
        n.useEffect(() => {
            null != R && x.A.increment({ name: i.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [R] });
        }, [R]));
    let V = n.useMemo(() => {
            let { earnable: e, owned: l } = (0, N.in)(L);
            if (O) return l[0]?.badge_id ?? null;
            let t = z ? l.find((e) => !0 === e.has_updates) : void 0;
            return t?.badge_id ?? l[0]?.badge_id ?? e[0]?.badge_id ?? null;
        }, [L, z, O]),
        H = null != D && null != k ? j.Ay.getBadgeById(D, k) : void 0,
        Y = null != V && null != k ? j.Ay.getBadgeById(V, k) : void 0,
        Z = H ?? Y,
        q = !$ && !G,
        J = !$ && G,
        K = !O;
    n.useEffect(() => {
        J && null != R && x.A.increment({ name: i.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [R] });
    }, [J, R]);
    let Q = (0, s.bG)([j.Ay], () => null != E && null != Z && (j.Ay.getBadgeById(Z.badge_id, E)?.owned ?? !1), [Z, E]),
        W = (0, s.bG)([j.Ay], () => (null != T && null != Z ? j.Ay.getBadgeById(Z.badge_id, T) : void 0), [Z, T]),
        X = W?.owned ?? !1,
        ee = n.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, ez.openBadgeDirectoryModal)({ ...e, stackingBehavior: "replace" }).then(() => {
                    t();
                });
            },
            [t],
        ),
        el = n.useCallback(() => {
            null != E &&
                null != Z &&
                (O
                    ? ee({
                          initialBadgeId: Z.badge_id,
                          targetUserId: E,
                          targetUsername: S,
                          viewingCurrentUserBadges: !0,
                      })
                    : ee({ initialBadgeId: Z.badge_id, targetUserId: E, targetUsername: S }));
        }, [O, Z, ee, E, S]),
        et = n.useCallback(() => {
            null != T &&
                null != E &&
                (A({ actionName: "view_your_badges_pressed", badge: Z, displayedUserId: k, isSociallyNavigated: O }),
                ee({ targetUserId: E, targetUsername: S, viewingCurrentUserBadges: !0 }));
        }, [T, k, O, Z, ee, E, S]),
        ea = n.useCallback(() => {
            null != k && (0, v.RS)(k, { isRetry: !0 });
        }, [k]),
        en = n.useCallback(() => {
            (A({ actionName: "badge_directory_closed", badge: Z, displayedUserId: k, isSociallyNavigated: O }), t());
        }, [k, O, t, Z]),
        ei = n.useCallback(() => {
            null != T &&
                (A({
                    actionName: "customize_your_badges_pressed",
                    badge: Z,
                    displayedUserId: k,
                    isSociallyNavigated: O,
                }),
                en(),
                I.A.setState({ isOpen: !0 }),
                (0, h.kN)(T) || (0, _.openUserProfileModal)({ userId: T }));
        }, [T, k, en, O, Z]),
        es = Z?.badge_id;
    !(function (e) {
        let { badgeId: l, enabled: t } = e;
        n.useEffect(() => {
            null != l && t && B.has(l) && (0, v.PV)(l);
        }, [l, t]);
    })({ badgeId: es, enabled: K });
    let er = z && !O && Z?.has_updates === !0,
        ed = l === d.ip.ENTERED && (M || G),
        [eo, eu] = n.useState(null);
    return (
        null != eo && eo.badge_id !== es ? eu(null) : null == eo && er && ed && null != Z && eu({ ...Z }),
        n.useEffect(() => {
            null != eo && (F(eo.badge_id), (0, v.zd)(eo.badge_id));
        }, [eo]),
        n.useEffect(() => {
            null != Z && A({ actionName: "badge_detail_viewed", badge: Z, displayedUserId: k, isSociallyNavigated: O });
        }, [es, k, O]),
        (0, a.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": ec.intl.string(ec.t.PEjP4L),
            transitionState: l,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: U ? lr.C : ex.CR,
            children: (0, a.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: ex.jE,
                children: [
                    (q || J || null == Z) &&
                        (0, a.jsx)("div", { className: ex.b, children: (0, a.jsx)(o.J, { onClick: en, size: "sm" }) }),
                    q
                        ? (0, a.jsx)("div", { className: ex.Lq, children: (0, a.jsx)(c.y, {}) })
                        : J
                          ? (0, a.jsxs)("div", {
                                className: ex.IU,
                                children: [
                                    (0, a.jsx)(u.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: ec.intl.string(ec.t.iufib1),
                                    }),
                                    (0, a.jsx)(m.E, {
                                        variant: "body-sm/medium",
                                        color: "text-subtle",
                                        className: ex.TQ,
                                        children: ec.intl.string(ec.t.eAn6z2),
                                    }),
                                    (0, a.jsx)(g.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: ea,
                                        text: ec.intl.string(ec.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(ej, {
                                        selectedBadgeId: Z?.badge_id ?? null,
                                        onSelectBadge: F,
                                        displayedUserId: k,
                                        isViewingOtherUser: O,
                                        targetUsername: S,
                                        onViewOwnCatalog: et,
                                        onCustomizeBadges: ei,
                                        showBadgeIndicators: K,
                                    }),
                                    null != Z &&
                                        (U
                                            ? (0, a.jsx)(ls, {
                                                  badge: Z,
                                                  viewerBadge: W,
                                                  onClose: en,
                                                  isViewingOtherUser: O,
                                                  targetUsername: S,
                                                  displayedUserId: k,
                                                  viewerOwnsBadge: X,
                                                  onViewOwnCatalog: et,
                                                  isUnread: er,
                                                  unlock: eo,
                                              })
                                            : (0, a.jsx)(eP, {
                                                  badge: Z,
                                                  viewerBadge: W,
                                                  onClose: en,
                                                  isOwnProfile: C,
                                                  isViewingOtherUser: O,
                                                  targetUsername: S,
                                                  displayedUserId: k,
                                                  targetOwnsBadge: Q,
                                                  viewerOwnsBadge: X,
                                                  onToggleViewedUser: el,
                                                  onViewOwnCatalog: et,
                                              })),
                                ],
                            }),
                ],
            }),
        })
    );
}
