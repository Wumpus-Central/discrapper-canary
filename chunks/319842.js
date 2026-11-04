i.d(n, { default: () => e8 });
var l = i(477900),
    t = i(582128),
    a = i(731738),
    s = i(855986),
    r = i(935462),
    d = i(815021),
    o = i(289873),
    c = i(534514),
    u = i(834730),
    m = i(821609),
    g = i(913379),
    x = i(702476),
    h = i(403777),
    b = i(287809),
    _ = i(682618),
    v = i(982240);
let j = (0, i(945810).mj)({
    name: "2026-10-badge-directory-updates",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var y = i(988341),
    N = i(129230),
    p = i(652215);
function f(e) {
    let { actionName: n, badge: i, displayedUserId: l, isSociallyNavigated: t } = e,
        a = b.default.getCurrentUser()?.id,
        s = null != i && null != a ? v.Ay.getBadgeById(i.badge_id, a) : void 0,
        r = null != i && null != a ? v.Ay.getRemainingToNextTier(i.badge_id, a) : void 0,
        d = null != l ? v.Ay.getBadges(l).filter((e) => e.owned).length : void 0;
    N.default.track(p.HAw.BADGE_DIRECTORY_ACTION, {
        badge_action: n,
        badge_id: i?.badge_id,
        badge_tier: null != i ? ((i.owned ? i.current_tier : i.next_tier) ?? i.tiers?.[0]?.key) : void 0,
        badge_owner_id: l,
        is_owned: s?.owned ?? !1,
        progress_to_next_tier: r,
        is_earnable: i?.is_earnable ?? !1,
        is_socially_navigated: t,
        total_badges_owned: d,
    });
}
var A = i(248284),
    I = i(73153);
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
            let { badgeId: n } = e;
            if (E.seenBadgeIndicatorIds.has(n)) return !1;
            E = { ...E, seenBadgeIndicatorIds: new Set([...E.seenBadgeIndicatorIds, n]) };
        },
    }),
    T = y.sC;
i(321073);
var C = i(503698),
    B = i.n(C),
    U = i(70283),
    O = i(805251),
    R = i(866665),
    k = i(885574),
    F = i(97808),
    D = i(123292),
    L = i(683071),
    G = i(707554),
    P = i(95362),
    $ = i(404778),
    z = i(136969),
    M = i(775602),
    V = i(640708),
    H = i(780964),
    Z = i(766075),
    J = i(153488),
    Y = i(240248),
    q = i(731309),
    K = i(837381),
    W = i(116903),
    Q = i(741918),
    X = i(939249),
    ee = i(643056),
    en = i(486020);
function ei(e, n, i) {
    let l = (0, s.bG)([b.default], () => (null != e ? b.default.getUser(e) : void 0), [e]);
    if (null != l && n) return (0, en.ku)({ id: l.id, avatar: l.avatar, discriminator: l.discriminator }, !1, i);
}
var el = i(696292),
    et = i(975807),
    ea = i(990820),
    es = i(216934),
    er = i(976860),
    ed = i(758836),
    eo = i(682901),
    ec = i(792996);
let eu = {
        [U.$.STAFF]: {
            ctaLabel: () => ec.intl.string(ec.t.q7A8hP),
            ctaAction: () => (0, et.A)("https://discord.com/careers"),
        },
        [U.$.PREMIUM_TENURE]: {
            ctaLabel: (e) => {
                let { owned: n, isViewerOnUpgradeableNitro: i } = e;
                return !0 === i
                    ? ec.intl.string(ec.t.uKFeS1)
                    : n
                      ? ec.intl.string(ec.t.xGjjkd)
                      : ec.intl.string(ec.t.BTxm69);
            },
            ctaAction: () => (0, er.pX)(p.BVt.NITRO_HOME),
        },
        [U.$.GUILD_BOOSTER]: {
            ctaLabel: (e) => {
                let { owned: n } = e;
                return n ? ec.intl.string(ec.t.VMvz3m) : ec.intl.string(ec.t.xFVZeU);
            },
            ctaAction: () => (0, Z.openUserSettings)(H.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
        },
        [U.$.ORB_PROFILE]: {
            ctaLabel: () => ec.intl.string(ec.t.fG3RIg),
            ctaAction: () => (0, er.pX)(p.BVt.COLLECTIBLES_SHOP_WITH_TAB(ed.G2.ORBS)),
        },
        [U.$.QUEST_COMPLETED]: {
            ctaLabel: () => ec.intl.string(ec.t.swICIT),
            ctaAction: () => (0, es.m)({ fromContent: el.u.QUEST_BADGE }),
        },
        [U.$.GIFTING]: {
            ctaLabel: () => ec.intl.string(ec.t["nUA/JW"]),
            ctaAction: () => (0, ea.A)({ giftingOrigin: eo.vQ.BADGE_DIRECTORY }),
        },
    },
    em = "badge-details";
var eg = i(778712),
    ex = i(177861);
function eh(e) {
    return `badge-tab-${e}`;
}
function eb(e) {
    let n = Array.from(e);
    return n.length > 19 ? `${n.slice(0, 19).join("")}...` : e;
}
function e_(e) {
    let { badge: n, isSelected: i, onSelect: a, itemId: s, showBadgeIndicator: r } = e,
        d = (0, K.rm)(s),
        o = n.owned ? n.current_tier : n.next_tier,
        c =
            null != o
                ? n.tiers.find((e) => {
                      let { key: n } = e;
                      return n === o;
                  })
                : void 0,
        u = n.badge_id === U.$.PREMIUM_TENURE ? (c?.name ?? c?.key) : c?.name,
        m = null != u ? `${n.name}, ${u}` : n.name,
        g = r ? `${m}, ${ec.intl.string(ec.t.y2b7CA)}` : m,
        x = t.useRef(null);
    return (0, l.jsxs)(X.D, {
        ...d,
        innerRef: x,
        role: "tab",
        id: eh(n.badge_id),
        "aria-label": g,
        "aria-selected": i,
        "aria-controls": i ? em : void 0,
        className: B()(ex.oL, i && ex.xO),
        onFocus: d.onFocus,
        onClick: () => {
            (x.current?.focus(), a());
        },
        children: [
            r && (0, l.jsx)("span", { "aria-hidden": !0, className: ex.Dn }),
            null != n.simple_icon_url &&
                (0, l.jsx)("img", {
                    src: n.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: ex.pW,
                }),
        ],
    });
}
function ev(e) {
    let { label: n, navId: i, badges: t, selectedBadgeId: a, onSelectBadge: s, badgeIndicatorIds: r } = e,
        d = (0, W.Ay)({
            id: i,
            isEnabled: !0,
            orientation: Q.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, l.jsxs)("div", {
        className: ex.zE,
        children: [
            "heading" === n.type &&
                (0, l.jsx)(c.D, { id: n.id, variant: "heading-xs/medium", color: "text-default", children: n.text }),
            (0, l.jsx)(K.hD, {
                navigator: d,
                children: (0, l.jsx)(K.PR, {
                    children: (e) =>
                        (0, l.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === n.type ? n.id : void 0,
                            "aria-label": "aria" === n.type ? n.text : void 0,
                            className: ex.yq,
                            children: t.map((e, n) => {
                                let i = r.has(e.badge_id);
                                return (0, l.jsx)(
                                    e_,
                                    {
                                        itemId: `item-${n}`,
                                        badge: e,
                                        isSelected: e.badge_id === a,
                                        onSelect: () => s(e.badge_id),
                                        showBadgeIndicator: i,
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
            selectedBadgeId: n,
            onSelectBadge: i,
            displayedUserId: a,
            isViewingOtherUser: r,
            targetUsername: d,
            onViewOwnCatalog: o,
            onCustomizeBadges: g,
            showBadgeIndicators: x,
        } = e,
        h = (0, s.yK)([v.Ay], () => (null != a ? v.Ay.getBadges(a) : []), [a]),
        { earnable: b, owned: _ } = t.useMemo(() => (0, y.in)(h), [h]),
        { badgeIndicatorIds: j } = (function (e) {
            let { badges: n, enabled: i } = e,
                l = (0, s.bG)([S], () => S.getSeenBadgeIndicators());
            return {
                badgeIndicatorIds: t.useMemo(
                    () =>
                        i
                            ? new Set(
                                  n
                                      .filter((e) => {
                                          let { badge_id: n } = e;
                                          return T.has(n) && !l.has(n);
                                      })
                                      .map((e) => {
                                          let { badge_id: n } = e;
                                          return n;
                                      }),
                              )
                            : new Set(),
                    [n, i, l],
                ),
            };
        })({ badges: t.useMemo(() => [..._, ...b], [_, b]), enabled: x }),
        N = ei(a, r, 48),
        p = (0, ee.d)({ location: "BadgeDirectoryPanel" }),
        f = null != d ? eb(d) : null,
        A = null != d && f !== d,
        I =
            null != f && A && null != N
                ? (0, l.jsxs)("span", {
                      className: ex._p,
                      children: [(0, l.jsx)(F.eu, { src: N, size: eg._3.SIZE_24, "aria-hidden": !0 }), f],
                  })
                : f,
        E = r && null != I ? ec.intl.format(ec.t.EIcwoe, { username: I }) : ec.intl.string(ec.t.UqnlQF),
        w = r && null != d ? ec.intl.string(ec.t["75s2Rq"]) : ec.intl.string(ec.t["62xU4E"]),
        C = r && null != d ? ec.intl.formatToPlainString(ec.t.BCjSZy, { username: d }) : ec.intl.string(ec.t.UqnlQF);
    return (0, l.jsx)("div", {
        className: ex.ws,
        children: (0, l.jsxs)(G.F, {
            component: (0, l.jsxs)("div", {
                className: ex.NG,
                children: [
                    (0, l.jsxs)("div", {
                        className: ex.kc,
                        children: [
                            !A && null != N && (0, l.jsx)(F.eu, { src: N, size: eg._3.SIZE_24, "aria-hidden": !0 }),
                            (0, l.jsx)(c.D, { variant: "heading-lg/semibold", color: "text-strong", children: E }),
                        ],
                    }),
                    (0, l.jsx)(u.E, { variant: "body-sm/medium", color: "text-subtle", children: w }),
                ],
            }),
            children: [
                (0, l.jsxs)(P.Ip, {
                    className: ex.hG,
                    children: [
                        _.length > 0 &&
                            (0, l.jsx)(ev, {
                                label: { type: "aria", text: C },
                                navId: "badge-directory-owned",
                                badges: _,
                                selectedBadgeId: n,
                                onSelectBadge: i,
                                badgeIndicatorIds: j,
                            }),
                        !r &&
                            b.length > 0 &&
                            (0, l.jsx)(ev, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: ec.intl.string(ec.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: b,
                                selectedBadgeId: n,
                                onSelectBadge: i,
                                badgeIndicatorIds: j,
                            }),
                    ],
                }),
                (r || p) &&
                    (0, l.jsx)("div", {
                        className: ex.HO,
                        children: r
                            ? (0, l.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: o,
                                  text: ec.intl.string(ec.t.msyp90),
                              })
                            : (0, l.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: g,
                                  text: ec.intl.string(ec.t["6CLLyH"]),
                              }),
                    }),
            ],
        }),
    });
}
var ey = i(911608),
    eN = i(847374),
    ep = i(770178),
    ef = i(194261),
    eA = i(140735),
    eI = i(836825);
function eE(e) {
    let { badge: n, isViewingOtherUser: i, targetUsername: a, isViewerOnUpgradeableNitro: s = !1 } = e,
        r = t.useId(),
        d = i && null != a;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            d &&
                (0, l.jsx)("div", {
                    className: eI.u4,
                    children: (0, l.jsx)(u.E, {
                        id: r,
                        variant: "body-xs/medium",
                        color: "text-subtle",
                        children: ec.intl.formatToPlainString(ec.t.KyTwIh, { username: a }),
                    }),
                }),
            (0, l.jsx)("div", {
                className: eI.SV,
                role: "list",
                "aria-label": d ? void 0 : n.name,
                "aria-labelledby": d ? r : void 0,
                children: n.tiers.map((e) => {
                    let t = e.owned,
                        a = !t && n.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        o = (0, y.Vs)({ tier: e, isUnlocked: t, isViewingOtherUser: i, isViewerOnUpgradeableNitro: s });
                    return (0, l.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: B()(eI.zh, a && eI.ZF),
                            children: [
                                null != r &&
                                    (0, l.jsx)("img", {
                                        className: eI.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, l.jsxs)(u.E, {
                                    variant: "footnote/medium",
                                    color: t ? "text-default" : "text-muted",
                                    className: eI.hI,
                                    children: [
                                        null != d &&
                                            (0, l.jsxs)("span", {
                                                className: eI.nU,
                                                children: [
                                                    !t &&
                                                        (0, l.jsx)(ef.LockIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: eI.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    d,
                                                ],
                                            }),
                                        "" !== o && (0, l.jsx)("span", { className: eI.nU, children: o }),
                                    ],
                                }),
                                (0, l.jsx)(eA.A, { children: ec.intl.string(t ? ec.t.sTFApF : ec.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var ew = i(600409);
function eS(e) {
    let { badge: n, viewerBadge: i, isViewingOtherUser: a, targetUsername: r, isViewerOnUpgradeableNitro: d } = e,
        [o, c] = t.useState(!1),
        [m, g] = t.useState(n.badge_id),
        x = t.useId(),
        h = t.useId(),
        b = t.useRef(null),
        _ = t.useRef(null);
    n.badge_id !== m && (g(n.badge_id), c(!1));
    let v = t.useCallback(() => {
            let e = b.current;
            null != e &&
                e.contains(document.activeElement) &&
                e.scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" });
        }, []),
        j = t.useCallback(
            (e) => {
                null != e.target && o && v();
            },
            [o, v],
        );
    (0, ep.g)(_, j, [o], { enabled: o });
    let N = i ?? n,
        f = (0, s.bG)([J.A], () => J.A.hasConsented(p.YAq.PERSONALIZATION)),
        A = !a && (0, y.Jn)(n.badge_id) && !f,
        I = a ? void 0 : N.next_tier,
        E = a ? void 0 : N.current_tier,
        w = null != I ? N.tiers.find((e) => e.key === I) : void 0,
        S = null != E ? N.tiers.find((e) => e.key === E) : void 0,
        T = a ? void 0 : N.progress?.[0],
        C = T?.threshold ?? w?.requirements[0]?.threshold ?? null,
        U = !a && N.owned && null != w,
        O = a || (0, Y.uJ)(N.leveling_instructions) || U ? void 0 : N.leveling_instructions,
        R = w?.name != null ? ec.intl.formatToPlainString(ec.t["Jn+COZ"], { tier_name: w.name }) : void 0,
        k = o ? ec.intl.string(ec.t["065Hig"]) : ec.intl.string(ec.t.MylOvg),
        F = a ? n : N,
        D = S?.complex_icon_static_url ?? S?.simple_icon_url,
        L = w?.complex_icon_static_url ?? w?.simple_icon_url,
        G = !(0, Y.uJ)(T?.progress_helper_text),
        P = null != R ? { "aria-labelledby": h } : { "aria-label": ec.intl.string(ec.t.Uwhb1l) };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != O && (0, l.jsx)(u.E, { variant: "body-xs/medium", color: "text-subtle", children: O }),
            U &&
                !A &&
                (0, l.jsxs)("div", {
                    className: ew.ES,
                    children: [
                        null != D &&
                            (0, l.jsx)("img", { className: ew.Tw, src: D, alt: "", "aria-hidden": !0, draggable: !1 }),
                        (0, l.jsxs)("div", {
                            className: ew.Bd,
                            children: [
                                null != R && (0, l.jsx)(u.E, { id: h, variant: "body-sm/medium", children: R }),
                                null != C
                                    ? (0, l.jsx)(ey.z, {
                                          value: T?.current ?? 0,
                                          minValue: T?.floor ?? 0,
                                          maxValue: C,
                                          size: "md",
                                          className: ew.hr,
                                          ...P,
                                      })
                                    : null != T &&
                                      (0, l.jsx)(ey.z, { isIndeterminate: !0, size: "md", className: ew.hr, ...P }),
                                G &&
                                    (0, l.jsx)(u.E, {
                                        variant: "body-xs/medium",
                                        color: "text-subtle",
                                        children: T?.progress_helper_text,
                                    }),
                            ],
                        }),
                        null != L &&
                            (0, l.jsx)("img", { className: ew.Tw, src: L, alt: "", "aria-hidden": !0, draggable: !1 }),
                    ],
                }),
            U && !A
                ? (0, l.jsxs)("div", {
                      className: ew.JC,
                      children: [
                          (0, l.jsx)("div", {
                              ref: _,
                              className: B()(ew.ne, o && ew.GB),
                              id: x,
                              children: (0, l.jsx)("div", {
                                  className: ew.zL,
                                  inert: !o,
                                  children: (0, l.jsxs)("div", {
                                      className: ew.GA,
                                      children: [
                                          (0, l.jsx)($.c, { className: ew.yF }),
                                          (0, l.jsx)(eE, {
                                              badge: F,
                                              isViewingOtherUser: a,
                                              targetUsername: r,
                                              isViewerOnUpgradeableNitro: d,
                                          }),
                                      ],
                                  }),
                              }),
                          }),
                          (0, l.jsxs)(X.D, {
                              innerRef: b,
                              className: ew.tw,
                              "aria-expanded": o,
                              "aria-controls": x,
                              onClick: () => c(!o),
                              children: [
                                  (0, l.jsx)(u.E, {
                                      className: ew.Yi,
                                      variant: "body-xs/medium",
                                      color: "text-subtle",
                                      children: k,
                                  }),
                                  (0, l.jsx)(eN.a, {
                                      size: "sm",
                                      color: "currentColor",
                                      "aria-hidden": !0,
                                      className: B()(ew.ai, o && ew.hg),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, l.jsx)(eE, { badge: F, isViewingOtherUser: a, targetUsername: r, isViewerOnUpgradeableNitro: d }),
        ],
    });
}
var eT = i(536001),
    eC = i(260981),
    eB = i(540418),
    eU = i(907085),
    eO = i(179820);
function eR(e) {
    if (null == e) return null;
    switch (e) {
        case eT.x.COMMON:
            return { type: { text: ec.intl.string(ec.t.L0K5ci) }, variant: "rarity-common", icon: eC.p };
        case eT.x.RARE:
            return { type: { text: ec.intl.string(ec.t["sTx/5z"]) }, variant: "rarity-rare", icon: eB.A };
        case eT.x.EPIC:
            return { type: { text: ec.intl.string(ec.t.RD8RiN) }, variant: "rarity-epic", icon: eU.b };
        case eT.x.MYTHIC:
            return { type: { text: ec.intl.string(ec.t.vqc1ol) }, variant: "rarity-mythic", icon: eO.O };
        default:
            return null;
    }
}
let ek = [ec.t["6zFA/T"], ec.t.wzZHKl, ec.t["+ED/nf"]];
function eF() {
    let e = Math.floor(Math.random() * ek.length);
    return ec.intl.string(ek[e]);
}
function eD(e) {
    let { earnedDateText: n, label: i } = e;
    return (0, l.jsxs)("div", {
        className: B()(ex.AX, ex.aS),
        children: [
            (0, l.jsx)(u.E, { variant: "body-xs/medium", color: "text-default", className: ex.NM, children: n }),
            (0, l.jsx)(u.E, { variant: "body-xs/medium", color: "text-subtle", className: ex.MZ, children: i }),
        ],
    });
}
function eL(e) {
    let { rarityBadgeProps: n } = e;
    return (0, l.jsxs)("div", {
        className: B()(ex.AX, ex.sn),
        children: [
            (0, l.jsx)(O.E, { ...n }),
            (0, l.jsx)(u.E, {
                variant: "body-xs/medium",
                color: "text-subtle",
                children: ec.intl.string(ec.t["phYZe+"]),
            }),
        ],
    });
}
function eG() {
    return (0, l.jsx)(R.m, {
        text: ec.intl.string(ec.t.goKu4e),
        children: (0, l.jsxs)("span", {
            className: ex.Gb,
            children: [
                (0, l.jsx)(k.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    className: ex.LS,
                    "aria-hidden": !0,
                }),
                (0, l.jsx)(u.E, {
                    tag: "span",
                    variant: "body-xs/medium",
                    color: "none",
                    children: ec.intl.string(ec.t.oW0eUd),
                }),
            ],
        }),
    });
}
function eP() {
    return (0, l.jsx)(V.A, { height: 3, width: 3, "aria-hidden": "true", className: ex.zN });
}
function e$(e) {
    let { segments: n } = e;
    return 0 === n.length
        ? null
        : (0, l.jsx)("div", {
              className: ex.U3,
              children: n.map((e, n) => {
                  let { key: i, node: t } = e;
                  return (0, l.jsxs)("span", { className: ex.Hq, children: [n > 0 && (0, l.jsx)(eP, {}), t] }, i);
              }),
          });
}
function ez(e) {
    let {
            badge: n,
            isOwnProfile: i,
            isViewingOtherUser: t,
            targetUsername: a,
            viewedAvatarSrc: s,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: o,
            onToggleViewedUser: c,
        } = e,
        m = (0, Y.uJ)(n.info_label) ? void 0 : n.info_label,
        g = (0, y.HW)(n.badge_id),
        { statusText: x, toggleText: h } = (function (e) {
            let n,
                i,
                {
                    badge: l,
                    isOwnProfile: t,
                    isViewingOtherUser: a,
                    targetUsername: s,
                    targetOwnsBadge: r,
                    viewerOwnsBadge: d,
                    unlockedStatusText: o,
                } = e;
            if (
                ((n = t
                    ? l.owned
                        ? o
                        : ec.intl.string(ec.t.uHtDcT)
                    : a && null != s
                      ? ec.intl.formatToPlainString(ec.t.Eo5Cnp, { username: eb(s) })
                      : l.owned
                        ? o
                        : ec.intl.string(ec.t.uHtDcT)),
                !t)
            ) {
                let e = !a && r && null != s;
                a && d
                    ? (i = ec.intl.string(ec.t.yxEAGH))
                    : e && (i = ec.intl.formatToPlainString(ec.t["9GNsge"], { username: eb(s) }));
            }
            return { statusText: n, toggleText: i };
        })({
            badge: n,
            isOwnProfile: i,
            isViewingOtherUser: t,
            targetUsername: a,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: o,
        }),
        b = [];
    (g && b.push({ key: "beta", node: (0, l.jsx)(eG, {}) }),
        null != x &&
            b.push({
                key: "status",
                node: (0, l.jsxs)("span", {
                    className: ex.pC,
                    children: [
                        !i && null != s && (0, l.jsx)(F.eu, { src: s, size: eg._3.SIZE_16, "aria-hidden": !0 }),
                        (0, l.jsx)(u.E, {
                            tag: "span",
                            variant: "body-xs/medium",
                            color: "text-subtle",
                            className: ex.$L,
                            children: x,
                        }),
                    ],
                }),
            }),
        null != m &&
            b.push({
                key: "info",
                node: (0, l.jsx)(u.E, {
                    tag: "span",
                    variant: "body-xs/medium",
                    color: "text-subtle",
                    className: ex.$L,
                    children: m,
                }),
            }));
    let _ = b.length >= 3 && null != h,
        v =
            null != h
                ? {
                      key: "toggle",
                      node: (0, l.jsx)(D.Q, {
                          variant: "primary",
                          size: "sm",
                          textVariant: "body-xs/medium",
                          onClick: c,
                          text: h,
                      }),
                  }
                : void 0,
        j = _ || null == v ? b : [...b, v];
    return 0 === j.length && null == v
        ? null
        : (0, l.jsxs)("div", {
              className: ex.rI,
              children: [(0, l.jsx)(e$, { segments: j }), _ && null != v && (0, l.jsx)(e$, { segments: [v] })],
          });
}
function eM(e) {
    let n,
        i,
        a,
        r,
        o,
        g,
        x,
        {
            badge: h,
            viewerBadge: _,
            onClose: j,
            isOwnProfile: N,
            isViewingOtherUser: A,
            targetUsername: I,
            displayedUserId: E,
            targetOwnsBadge: w,
            viewerOwnsBadge: S,
            onToggleViewedUser: T,
            onViewOwnCatalog: C,
        } = e,
        O = ei(E, A, 32),
        R = (0, y.DW)(h),
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
        ee = Q ? ec.intl.string(ec.t.Ipxkog) : h.name;
    Q ? (r = null != X ? `${ee} ${X}` : ee) : null != X ? ((a = ee), (r = X)) : (r = ee);
    let en = (0, q.ie)(h.badge_id) && !h.is_earnable && h.badge_id !== U.$.STAFF,
        el = (h.tiers?.length ?? 0) > 0,
        et = (0, v.H5)(h),
        ea = (function (e) {
            let [n, i] = t.useState(eF),
                [l, a] = t.useState(e);
            return (e !== l && (a(e), i(eF())), n);
        })(h.badge_id);
    o = h.owned
        ? h.badge_id === U.$.APRIL_FOOLS_2026
            ? ec.intl.string(ec.t["5LcHT0"])
            : en && null == et
              ? ea
              : (function (e) {
                    if (null == e) return;
                    let n = new Date(e);
                    if (!Number.isNaN(n.getTime()))
                        return n.toLocaleDateString(ec.intl.currentLocale, {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        });
                })(et)
        : el
          ? "--"
          : void 0;
    let es = ((i = null == (n = h.tiers?.[0]?.key) || R?.key === n), ec.intl.string(i ? ec.t.WDhIz2 : ec.t.wYaDmz)),
        er = null != o && h.badge_id !== U.$.STAFF,
        ed = null != K,
        eg = null;
    ((er || ed) &&
        (eg = (0, l.jsxs)("div", {
            className: B()(ex.$S, (!er || !ed) && ex.jQ),
            children: [
                er && null != o && (0, l.jsx)(eD, { earnedDateText: o, label: es }),
                ed && (0, l.jsx)(eL, { rarityBadgeProps: K }),
            ],
        })),
        er || (g = ec.intl.string(ec.t.sTFApF)));
    let eb = b.default.getCurrentUser()?.premiumType,
        e_ = Q && (eb === eo.PremiumTypes.TIER_0 || eb === eo.PremiumTypes.TIER_1);
    x =
        !e_ && _?.owned === !0 && (_.tiers?.length ?? 0) > 0 && null == _.next_tier
            ? ec.intl.string(ec.t.jY5xAL)
            : e_
              ? ec.intl.string(ec.t.qkwSSp)
              : (_?.description ?? h.description);
    let ev = t.useCallback(() => {
            null != W &&
                (f({
                    actionName: "primary_badge_action_clicked",
                    badge: h,
                    displayedUserId: E,
                    isSociallyNavigated: A,
                }),
                j(),
                z.A.popAll(),
                W.ctaAction());
        }, [h, E, A, W, j]),
        ej =
            !A || h.is_earnable || S || h.badge_id === U.$.STAFF
                ? null
                : (0, l.jsx)(L.w, {
                      type: "info",
                      message: ec.intl.format(ec.t.vFekBs, { onViewBadges: C }),
                      role: "none",
                  }),
        ey = (0, s.bG)([J.A], () => J.A.hasConsented(p.YAq.PERSONALIZATION)),
        eN = (0, y.Jn)(h.badge_id) && !A && !ey;
    return (0, l.jsx)(G.F, {
        forceLevel: 2,
        children: (0, l.jsx)("div", {
            id: em,
            role: "tabpanel",
            "aria-labelledby": eh(h.badge_id),
            className: ex.SV,
            children: (0, l.jsxs)(P.d_, {
                className: ex.C9,
                children: [
                    (0, l.jsx)("div", { className: ex.Gw, children: (0, l.jsx)(d.J, { onClick: j, size: "sm" }) }),
                    null != V &&
                        (0, l.jsx)("img", {
                            className: B()(ex.y2, null != k && V === k && ex.hu),
                            src: V,
                            alt: "",
                            "aria-hidden": !0,
                            draggable: !1,
                        }),
                    (0, l.jsxs)("div", {
                        className: ex.OU,
                        children: [
                            (0, l.jsx)("div", {
                                className: ex.cQ,
                                children: (0, l.jsxs)("div", {
                                    className: ex.nj,
                                    children: [
                                        (0, l.jsxs)(c.D, {
                                            variant: Q ? "nitro-sm" : "display-sm",
                                            color: "text-strong",
                                            className: B()(ex._r, Q && ex.ve),
                                            children: [
                                                null != a &&
                                                    (0, l.jsx)(u.E, {
                                                        tag: "span",
                                                        variant: "body-sm/medium",
                                                        color: "text-subtle",
                                                        className: ex.$g,
                                                        children: a,
                                                    }),
                                                r,
                                            ],
                                        }),
                                        (0, l.jsx)(ez, {
                                            badge: h,
                                            isOwnProfile: N,
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
                            (0, l.jsxs)("div", {
                                className: ex.oA,
                                children: [
                                    eN &&
                                        (0, l.jsx)(L.w, {
                                            type: "info",
                                            message: ec.intl.format(ec.t.Zh44ni, {
                                                onGoToSettings: () =>
                                                    (0, Z.openUserSettings)(H.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                            }),
                                            role: "none",
                                        }),
                                    eg,
                                    !(0, Y.uJ)(x) &&
                                        (0, l.jsxs)("div", {
                                            className: ex.d9,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: ex.E4,
                                                    children: [
                                                        (0, l.jsxs)("div", {
                                                            className: ex.jv,
                                                            children: [
                                                                en &&
                                                                    (0, l.jsx)(u.E, {
                                                                        variant: "body-xs/medium",
                                                                        color: "text-subtle",
                                                                        className: ex.c$,
                                                                        children: ec.intl.string(ec.t["/Gmn3f"]),
                                                                    }),
                                                                (0, l.jsx)(u.E, {
                                                                    variant: "body-sm/medium",
                                                                    color: "text-default",
                                                                    className: ex.ij,
                                                                    children: x,
                                                                }),
                                                            ],
                                                        }),
                                                        null != W &&
                                                            (0, l.jsx)(m.$, {
                                                                variant: e_
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
                                                                    isViewerOnUpgradeableNitro: e_,
                                                                }),
                                                            }),
                                                    ],
                                                }),
                                                el &&
                                                    (0, l.jsxs)("div", {
                                                        className: ex.cJ,
                                                        children: [
                                                            (0, l.jsx)($.c, {}),
                                                            (0, l.jsx)(eS, {
                                                                badge: h,
                                                                viewerBadge: _,
                                                                isViewingOtherUser: A,
                                                                targetUsername: I,
                                                                isViewerOnUpgradeableNitro: e_,
                                                            }),
                                                        ],
                                                    }),
                                                null != ej && (0, l.jsx)("div", { className: ex.Z6, children: ej }),
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
var eV = i(470739);
function eH(e) {
    return (0, q.ie)(e.badge_id) && !e.is_earnable && e.badge_id !== U.$.STAFF;
}
let eZ = [ec.t["6zFA/T"], ec.t.wzZHKl, ec.t["+ED/nf"]];
function eJ() {
    let e = Math.floor(Math.random() * eZ.length);
    return ec.intl.string(eZ[e]);
}
var eY = i(229667);
function eq(e) {
    let n,
        i,
        a,
        s,
        { badge: r, viewerBadge: d } = e,
        o = t.useId(),
        {
            progress: c,
            threshold: m,
            currentArtUrl: g,
            nextArtUrl: x,
            helperText: h,
        } = ((n = d ?? r),
        (i = (0, y.YU)(n, n.current_tier)),
        (a = (0, y.YU)(n, n.next_tier)),
        {
            progress: (s = n.progress?.[0]),
            threshold: s?.threshold ?? a?.requirements[0]?.threshold ?? null,
            currentArtUrl: i?.simple_icon_url ?? i?.complex_icon_static_url,
            nextArtUrl: a?.simple_icon_url ?? a?.complex_icon_static_url,
            helperText: (0, Y.uJ)(s?.progress_helper_text) ? void 0 : s?.progress_helper_text,
        }),
        b = null != h ? { "aria-labelledby": o } : { "aria-label": ec.intl.string(ec.t.Uwhb1l) };
    return (0, l.jsxs)("div", {
        className: eY.NE,
        children: [
            (0, l.jsx)(u.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: ec.intl.string(ec.t["2m/g2c"]),
            }),
            (0, l.jsxs)("div", {
                className: eY.ES,
                children: [
                    null != g &&
                        (0, l.jsx)("img", { className: eY.Tw, src: g, alt: "", "aria-hidden": !0, draggable: !1 }),
                    (0, l.jsxs)("div", {
                        className: eY.Bd,
                        children: [
                            null != h && (0, l.jsx)(u.E, { id: o, variant: "body-sm/medium", children: h }),
                            null != m
                                ? (0, l.jsx)(ey.z, {
                                      value: c?.current ?? 0,
                                      minValue: c?.floor ?? 0,
                                      maxValue: m,
                                      size: "md",
                                      className: eY.hr,
                                      ...b,
                                  })
                                : null != c &&
                                  (0, l.jsx)(ey.z, { isIndeterminate: !0, size: "md", className: eY.hr, ...b }),
                        ],
                    }),
                    null != x &&
                        (0, l.jsx)("img", { className: eY.Tw, src: x, alt: "", "aria-hidden": !0, draggable: !1 }),
                ],
            }),
        ],
    });
}
var eK = i(149285);
function eW(e) {
    let { badge: n, isViewingOtherUser: i, targetUsername: a, isViewerOnUpgradeableNitro: s = !1 } = e,
        r = t.useId(),
        d = i && null != a;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            d &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)($.c, {}),
                        (0, l.jsx)("div", {
                            className: eK.u4,
                            children: (0, l.jsx)(u.E, {
                                id: r,
                                variant: "body-sm/medium",
                                children: ec.intl.formatToPlainString(ec.t.KyTwIh, { username: a }),
                            }),
                        }),
                    ],
                }),
            (0, l.jsx)("div", {
                className: eK.SV,
                role: "list",
                "aria-label": d ? void 0 : n.name,
                "aria-labelledby": d ? r : void 0,
                children: n.tiers.map((e) => {
                    let t = e.owned,
                        a = !t && n.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        o = (0, y.Vs)({ tier: e, isUnlocked: t, isViewingOtherUser: i, isViewerOnUpgradeableNitro: s });
                    return (0, l.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: B()(eK.zh, a && eK.ZF),
                            children: [
                                null != r &&
                                    (0, l.jsx)("img", {
                                        className: eK.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, l.jsxs)("div", {
                                    className: eK.hI,
                                    children: [
                                        null != d &&
                                            (0, l.jsx)(u.E, {
                                                variant: "body-xs/semibold",
                                                color: t ? "text-default" : "text-muted",
                                                className: eK.nU,
                                                children: d,
                                            }),
                                        "" !== o &&
                                            (0, l.jsxs)(u.E, {
                                                variant: "body-xs/normal",
                                                color: t ? "text-subtle" : "text-muted",
                                                className: eK.nU,
                                                children: [
                                                    !t &&
                                                        (0, l.jsx)(ef.LockIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: eK.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    o,
                                                ],
                                            }),
                                    ],
                                }),
                                (0, l.jsx)(eA.A, { children: ec.intl.string(t ? ec.t.sTFApF : ec.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var eQ = i(148204);
function eX() {
    return (0, l.jsx)(V.A, { height: 3, width: 3, "aria-hidden": "true", className: eQ.zN });
}
function e0(e) {
    let { segments: n } = e;
    return 0 === n.length
        ? null
        : (0, l.jsx)("div", {
              className: eQ.U3,
              children: n.map((e, n) => {
                  let { key: i, node: t } = e;
                  return (0, l.jsxs)("span", { className: eQ.Hq, children: [n > 0 && (0, l.jsx)(eX, {}), t] }, i);
              }),
          });
}
function e1(e) {
    let n,
        i,
        a,
        r,
        o,
        g,
        {
            badge: x,
            viewerBadge: h,
            onClose: _,
            isViewingOtherUser: j,
            targetUsername: N,
            displayedUserId: A,
            viewerOwnsBadge: I,
            onViewOwnCatalog: E,
        } = e,
        w = (0, y.DW)(x),
        { animatedUrl: S, imageUrl: T } =
            ((i =
                (n = (0, s.bG)([M.Ay], () => M.Ay.useReducedMotion)
                    ? void 0
                    : (w?.complex_icon_animated_url ?? x.complex_icon_animated_url)) ??
                w?.complex_icon_static_url ??
                x.complex_icon_static_url ??
                w?.simple_icon_url ??
                x.simple_icon_url),
            { animatedUrl: n, imageUrl: i }),
        C = w?.rarity ?? x.rarity,
        k = eR(C) ?? void 0,
        F = eu[x.badge_id],
        {
            isNitro: D,
            eyebrow: V,
            displayName: q,
        } = ((r = (a = x.badge_id === U.$.PREMIUM_TENURE) ? (w?.name ?? w?.key) : w?.name),
        (o = a ? ec.intl.string(ec.t.Ipxkog) : x.name),
        a
            ? { isNitro: a, eyebrow: void 0, displayName: null != r ? `${o} ${r}` : o }
            : null != r && x.owned
              ? { isNitro: a, eyebrow: o, displayName: r }
              : { isNitro: a, eyebrow: void 0, displayName: o }),
        K = eH(x),
        W = (x.tiers?.length ?? 0) > 0,
        Q = (function (e) {
            let [n, i] = t.useState(eJ),
                [l, a] = t.useState(e);
            return (e !== l && (a(e), i(eJ())), n);
        })(x.badge_id),
        X =
            ((g = (0, v.H5)(x)),
            x.owned
                ? x.badge_id === U.$.APRIL_FOOLS_2026
                    ? ec.intl.string(ec.t["5LcHT0"])
                    : eH(x) && null == g
                      ? Q
                      : null != g && x.badge_id !== U.$.STAFF
                        ? ec.intl.formatToPlainString(ec.t.XmaiRQ, { date: new Date(g) })
                        : ec.intl.string(ec.t.sTFApF)
                : ec.intl.string(ec.t.uHtDcT)),
        ee = (0, Y.uJ)(x.info_label) ? void 0 : x.info_label,
        en = x.owned && C !== eT.x.COMMON && null != k,
        ei = [];
    (null != ee &&
        ei.push({
            key: "info",
            node: (0, l.jsx)(u.E, {
                tag: "span",
                variant: "body-xs/medium",
                color: "text-subtle",
                className: eQ.$L,
                children: ee,
            }),
        }),
        ei.push({
            key: "status",
            node: (0, l.jsx)(u.E, {
                tag: "span",
                variant: "body-xs/medium",
                color: "text-subtle",
                className: eQ.$L,
                children: X,
            }),
        }),
        en && ei.push({ key: "rarity", node: (0, l.jsx)(O.E, { ...k }) }));
    let el = b.default.getCurrentUser()?.premiumType,
        et = x.badge_id === U.$.PREMIUM_TENURE && (el === eo.PremiumTypes.TIER_0 || el === eo.PremiumTypes.TIER_1),
        ea = (function (e) {
            let { badge: n, viewerBadge: i, isViewerOnUpgradeableNitro: l } = e;
            return !l && i?.owned === !0 && (i.tiers?.length ?? 0) > 0 && null == i.next_tier
                ? ec.intl.string(ec.t.jY5xAL)
                : l
                  ? ec.intl.string(ec.t.qkwSSp)
                  : (i?.description ?? n.description);
        })({ badge: x, viewerBadge: h, isViewerOnUpgradeableNitro: et }),
        es = t.useCallback(() => {
            null != F &&
                (f({
                    actionName: "primary_badge_action_clicked",
                    badge: x,
                    displayedUserId: A,
                    isSociallyNavigated: j,
                }),
                _(),
                z.A.popAll(),
                F.ctaAction());
        }, [x, A, j, F, _]),
        er = !(function (e) {
            let { badge: n, isViewingOtherUser: i, viewerOwnsBadge: l } = e;
            return i && !n.is_earnable && !l && n.badge_id !== U.$.STAFF;
        })({ badge: x, isViewingOtherUser: j, viewerOwnsBadge: I })
            ? null
            : (0, l.jsx)(L.w, {
                  type: "info",
                  message: ec.intl.format(ec.t.vFekBs, { onViewBadges: E }),
                  role: "none",
              }),
        ed = (function (e) {
            let { badge: n, isViewingOtherUser: i } = e,
                l = (0, s.bG)([J.A], () => J.A.hasConsented(p.YAq.PERSONALIZATION));
            return (0, y.Jn)(n.badge_id) && !i && !l;
        })({ badge: x, isViewingOtherUser: j }),
        eg = (function (e) {
            let { badge: n, viewerBadge: i, isViewingOtherUser: l } = e,
                t = (0, s.bG)([J.A], () => J.A.hasConsented(p.YAq.PERSONALIZATION)),
                a = i ?? n,
                r = null != (0, y.YU)(a, a.next_tier),
                d = (0, y.Jn)(n.badge_id) && !t;
            return !l && a.owned && r && !d;
        })({ badge: x, viewerBadge: h, isViewingOtherUser: j }),
        ex = !(0, Y.uJ)(ea),
        eb = eg || ex || W,
        e_ = j ? x : (h ?? x);
    return (0, l.jsx)(G.F, {
        forceLevel: 2,
        children: (0, l.jsxs)("div", {
            id: em,
            role: "tabpanel",
            "aria-labelledby": eh(x.badge_id),
            className: eQ.SV,
            children: [
                (0, l.jsx)("div", { className: eQ.Gw, children: (0, l.jsx)(d.J, { onClick: _, size: "sm" }) }),
                (0, l.jsxs)(P.d_, {
                    className: eQ.C9,
                    children: [
                        (0, l.jsx)("div", {
                            className: eQ.Rm,
                            children:
                                (0, y.HW)(x.badge_id) &&
                                (0, l.jsx)(R.m, {
                                    text: ec.intl.string(ec.t.goKu4e),
                                    children: (0, l.jsx)("span", {
                                        className: eQ.mC,
                                        children: (0, l.jsx)(O.E, { type: "beta" }),
                                    }),
                                }),
                        }),
                        null != T &&
                            (0, l.jsx)("img", {
                                className: B()(eQ.y2, null != S && D && eQ.Zl),
                                src: T,
                                alt: "",
                                "aria-hidden": !0,
                                draggable: !1,
                            }),
                        (0, l.jsxs)("div", {
                            className: eQ.OU,
                            children: [
                                (0, l.jsx)("div", {
                                    className: eQ.cQ,
                                    children: (0, l.jsxs)("div", {
                                        className: eQ.nj,
                                        children: [
                                            (0, l.jsxs)(c.D, {
                                                variant: D ? "nitro-sm" : "display-sm",
                                                color: "text-strong",
                                                className: B()(eQ._r, D && eQ.ve),
                                                children: [
                                                    null != V &&
                                                        (0, l.jsx)(u.E, {
                                                            tag: "span",
                                                            variant: "body-sm/medium",
                                                            color: "text-subtle",
                                                            className: eQ.$g,
                                                            children: V,
                                                        }),
                                                    q,
                                                ],
                                            }),
                                            (0, l.jsx)(e0, { segments: ei }),
                                        ],
                                    }),
                                }),
                                (0, l.jsxs)("div", {
                                    className: eQ.oA,
                                    children: [
                                        ed &&
                                            (0, l.jsx)(L.w, {
                                                type: "info",
                                                message: ec.intl.format(ec.t.Zh44ni, {
                                                    onGoToSettings: () =>
                                                        (0, Z.openUserSettings)(H.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                                }),
                                                role: "none",
                                            }),
                                        eb &&
                                            (0, l.jsxs)("div", {
                                                className: eQ.d9,
                                                children: [
                                                    eg &&
                                                        (0, l.jsxs)(l.Fragment, {
                                                            children: [
                                                                (0, l.jsx)(eq, { badge: x, viewerBadge: h }),
                                                                (0, l.jsx)($.c, {}),
                                                            ],
                                                        }),
                                                    ex &&
                                                        (0, l.jsxs)("div", {
                                                            className: B()(eQ.E4, !W && eQ.H),
                                                            children: [
                                                                (0, l.jsxs)("div", {
                                                                    className: eQ.jv,
                                                                    children: [
                                                                        K &&
                                                                            (0, l.jsx)(u.E, {
                                                                                variant: "body-xs/medium",
                                                                                color: "text-subtle",
                                                                                className: eQ.c$,
                                                                                children: ec.intl.string(
                                                                                    ec.t["/Gmn3f"],
                                                                                ),
                                                                            }),
                                                                        (0, l.jsx)(u.E, {
                                                                            variant: "body-sm/medium",
                                                                            color: "text-default",
                                                                            className: eQ.ij,
                                                                            children: ea,
                                                                        }),
                                                                    ],
                                                                }),
                                                                null != F &&
                                                                    (0, l.jsx)(m.$, {
                                                                        variant: (function (e) {
                                                                            let {
                                                                                isNitro: n,
                                                                                isViewerOnUpgradeableNitro: i,
                                                                                viewerOwnsBadge: l,
                                                                            } = e;
                                                                            return i
                                                                                ? "expressive"
                                                                                : l
                                                                                  ? "secondary"
                                                                                  : n
                                                                                    ? "expressive"
                                                                                    : "primary";
                                                                        })({
                                                                            isNitro: D,
                                                                            isViewerOnUpgradeableNitro: et,
                                                                            viewerOwnsBadge: I,
                                                                        }),
                                                                        size: "sm",
                                                                        onClick: es,
                                                                        text: F.ctaLabel({
                                                                            owned: I,
                                                                            isViewerOnUpgradeableNitro: et,
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                    W &&
                                                        (0, l.jsx)("div", {
                                                            className: eQ.cJ,
                                                            children: (0, l.jsx)(eW, {
                                                                badge: e_,
                                                                isViewingOtherUser: j,
                                                                targetUsername: N,
                                                                isViewerOnUpgradeableNitro: et,
                                                            }),
                                                        }),
                                                    null != er && (0, l.jsx)("div", { className: eQ.Z6, children: er }),
                                                ],
                                            }),
                                        !eb && er,
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
var e2 = i(921121);
function e8(e) {
    let {
            transitionState: n,
            onClose: i,
            initialBadgeId: N,
            targetUserId: p,
            targetUsername: I,
            viewingCurrentUserBadges: E,
        } = e,
        w = (0, s.bG)([b.default], () => b.default.getCurrentUser()?.id),
        S = null == p || p === w,
        C = (function (e) {
            let { location: n } = e;
            return j.useConfig({ location: n }).enabled;
        })({ location: "BadgeDirectoryModal" }),
        B = !S && null != p && !0 !== E,
        U = B ? p : w,
        O = null != U ? `viewed_user:${B ? "other" : "self"}` : void 0,
        [R, k] = t.useState(N ?? null),
        F = (0, s.yK)([v.Ay], () => (null != U ? v.Ay.getBadges(U) : []), [U]),
        D = (0, s.bG)([v.Ay], () => null != U && v.Ay.hasCatalogFor(U), [U]),
        L = (0, s.bG)([v.Ay], () => v.Ay.hasCatalogFetchErrorFor(U), [U]);
    (t.useEffect(() => {
        null != U && (v.Ay.hasCatalogFor(U) ? v.Ay.isCatalogStaleFor(U) && (0, _.RS)(U) : (0, _.RS)(U));
        let e = B ? w : p;
        S || null == e || v.Ay.hasCatalogFor(e) || (0, _.RS)(e);
    }, [U, S, B, w, p]),
        t.useEffect(() => {
            null != O && g.A.increment({ name: a.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [O] });
        }, [O]));
    let G = t.useMemo(() => {
            let { earnable: e, owned: n } = (0, y.in)(F);
            return B ? (n[0]?.badge_id ?? null) : (n[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [F, B]),
        P = null != R && null != U ? v.Ay.getBadgeById(R, U) : void 0,
        $ = null != G && null != U ? v.Ay.getBadgeById(G, U) : void 0,
        z = P ?? $,
        M = !D && !L,
        V = !D && L,
        H = !B;
    t.useEffect(() => {
        V && null != O && g.A.increment({ name: a.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [O] });
    }, [V, O]);
    let Z = (0, s.bG)([v.Ay], () => null != p && null != z && (v.Ay.getBadgeById(z.badge_id, p)?.owned ?? !1), [z, p]),
        J = (0, s.bG)([v.Ay], () => (null != w && null != z ? v.Ay.getBadgeById(z.badge_id, w) : void 0), [z, w]),
        Y = J?.owned ?? !1,
        q = t.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, eV.openBadgeDirectoryModal)({ ...e, stackingBehavior: "replace" }).then(() => {
                    i();
                });
            },
            [i],
        ),
        K = t.useCallback(() => {
            null != p &&
                null != z &&
                (B
                    ? q({
                          initialBadgeId: z.badge_id,
                          targetUserId: p,
                          targetUsername: I,
                          viewingCurrentUserBadges: !0,
                      })
                    : q({ initialBadgeId: z.badge_id, targetUserId: p, targetUsername: I }));
        }, [B, z, q, p, I]),
        W = t.useCallback(() => {
            null != w &&
                null != p &&
                (f({ actionName: "view_your_badges_pressed", badge: z, displayedUserId: U, isSociallyNavigated: B }),
                q({ targetUserId: p, targetUsername: I, viewingCurrentUserBadges: !0 }));
        }, [w, U, B, z, q, p, I]),
        Q = t.useCallback(() => {
            null != U && (0, _.RS)(U, { isRetry: !0 });
        }, [U]),
        X = t.useCallback(() => {
            (f({ actionName: "badge_directory_closed", badge: z, displayedUserId: U, isSociallyNavigated: B }), i());
        }, [U, B, i, z]),
        ee = t.useCallback(() => {
            null != w &&
                (f({
                    actionName: "customize_your_badges_pressed",
                    badge: z,
                    displayedUserId: U,
                    isSociallyNavigated: B,
                }),
                X(),
                A.A.setState({ isOpen: !0 }),
                (0, h.kN)(w) || (0, x.openUserProfileModal)({ userId: w }));
        }, [w, U, X, B, z]),
        en = z?.badge_id;
    return (
        !(function (e) {
            let { badgeId: n, enabled: i } = e;
            t.useEffect(() => {
                null != n && i && T.has(n) && (0, _.PV)(n);
            }, [n, i]);
        })({ badgeId: en, enabled: H }),
        t.useEffect(() => {
            null != z && f({ actionName: "badge_detail_viewed", badge: z, displayedUserId: U, isSociallyNavigated: B });
        }, [en, U, B]),
        (0, l.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": ec.intl.string(ec.t.PEjP4L),
            transitionState: n,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: C ? e2.C : ex.CR,
            children: (0, l.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: ex.jE,
                children: [
                    (M || V || null == z) &&
                        (0, l.jsx)("div", { className: ex.b, children: (0, l.jsx)(d.J, { onClick: X, size: "sm" }) }),
                    M
                        ? (0, l.jsx)("div", { className: ex.Lq, children: (0, l.jsx)(o.y, {}) })
                        : V
                          ? (0, l.jsxs)("div", {
                                className: ex.IU,
                                children: [
                                    (0, l.jsx)(c.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: ec.intl.string(ec.t.iufib1),
                                    }),
                                    (0, l.jsx)(u.E, {
                                        variant: "body-sm/medium",
                                        color: "text-subtle",
                                        className: ex.TQ,
                                        children: ec.intl.string(ec.t.eAn6z2),
                                    }),
                                    (0, l.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: Q,
                                        text: ec.intl.string(ec.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(ej, {
                                        selectedBadgeId: z?.badge_id ?? null,
                                        onSelectBadge: k,
                                        displayedUserId: U,
                                        isViewingOtherUser: B,
                                        targetUsername: I,
                                        onViewOwnCatalog: W,
                                        onCustomizeBadges: ee,
                                        showBadgeIndicators: H,
                                    }),
                                    null != z &&
                                        (C
                                            ? (0, l.jsx)(e1, {
                                                  badge: z,
                                                  viewerBadge: J,
                                                  onClose: X,
                                                  isViewingOtherUser: B,
                                                  targetUsername: I,
                                                  displayedUserId: U,
                                                  viewerOwnsBadge: Y,
                                                  onViewOwnCatalog: W,
                                              })
                                            : (0, l.jsx)(eM, {
                                                  badge: z,
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
