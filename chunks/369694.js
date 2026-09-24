i.d(t, { default: () => e1 });
var n = i(477900),
    l = i(582128),
    a = i(731738),
    s = i(17928),
    r = i(935462),
    d = i(815021),
    c = i(289873),
    o = i(297264),
    u = i(834730),
    m = i(821609),
    g = i(807393),
    x = i(402860),
    h = i(403777),
    _ = i(287809),
    b = i(682618),
    j = i(982240);
let v = (0, i(945810).mj)({
    name: "2026-10-badge-directory-updates",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var N = i(988341),
    p = i(174459),
    y = i(652215);
function f(e) {
    let { actionName: t, badge: i, displayedUserId: n, isSociallyNavigated: l } = e,
        a = _.default.getCurrentUser()?.id,
        s = null != i && null != a ? j.Ay.getBadgeById(i.badge_id, a) : void 0,
        r = null != i && null != a ? j.Ay.getRemainingToNextTier(i.badge_id, a) : void 0,
        d = null != n ? j.Ay.getBadges(n).filter((e) => e.owned).length : void 0;
    p.default.track(y.HAw.BADGE_DIRECTORY_ACTION, {
        badge_action: t,
        badge_id: i?.badge_id,
        badge_tier: null != i ? ((i.owned ? i.current_tier : i.next_tier) ?? i.tiers?.[0]?.key) : void 0,
        badge_owner_id: n,
        is_owned: s?.owned ?? !1,
        progress_to_next_tier: r,
        is_earnable: i?.is_earnable ?? !1,
        is_socially_navigated: l,
        total_badges_owned: d,
    });
}
var A = i(248284);
i(321073);
var I = i(503698),
    E = i.n(I),
    w = i(70283),
    S = i(508770),
    T = i(866665),
    C = i(885574),
    B = i(97808),
    O = i(123292),
    U = i(683071),
    R = i(707554),
    k = i(364522),
    F = i(404778),
    D = i(700058),
    L = i(775602),
    z = i(640708),
    G = i(780964),
    P = i(766075),
    $ = i(153488),
    V = i(240248),
    M = i(609782),
    H = i(837381),
    Z = i(887129),
    J = i(741918),
    Y = i(939249),
    q = i(643056),
    K = i(228366);
let W = { seenBadgeIndicatorIds: new Set() };
class Q extends s.Ay.PersistedStore {
    static displayName = "BadgeDirectorySeenStore";
    static persistKey = "BadgeDirectorySeenStore";
    initialize(e) {
        W = { seenBadgeIndicatorIds: new Set(e?.seenBadgeIndicatorIds ?? []) };
    }
    getState() {
        return { seenBadgeIndicatorIds: Array.from(W.seenBadgeIndicatorIds) };
    }
    getSeenBadgeIndicators() {
        return W.seenBadgeIndicatorIds;
    }
}
let X = new Q(K.h, {
    BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN: function (e) {
        let { badgeId: t } = e;
        if (W.seenBadgeIndicatorIds.has(t)) return !1;
        W = { ...W, seenBadgeIndicatorIds: new Set([...W.seenBadgeIndicatorIds, t]) };
    },
});
var ee = i(696292),
    et = i(975807),
    ei = i(990820),
    en = i(216934),
    el = i(976860),
    ea = i(758836),
    es = i(202541),
    er = i(375708);
let ed = N.sC,
    ec = {
        [w.$.STAFF]: {
            ctaLabel: () => er.intl.string(er.t.q7A8hP),
            ctaAction: () => (0, et.A)("https://discord.com/careers"),
        },
        [w.$.PREMIUM_TENURE]: {
            ctaLabel: (e) => {
                let { owned: t, isViewerOnUpgradeableNitro: i } = e;
                return !0 === i
                    ? er.intl.string(er.t.uKFeS1)
                    : t
                      ? er.intl.string(er.t.xGjjkd)
                      : er.intl.string(er.t.BTxm69);
            },
            ctaAction: () => (0, el.pX)(y.BVt.NITRO_HOME),
        },
        [w.$.GUILD_BOOSTER]: {
            ctaLabel: (e) => {
                let { owned: t } = e;
                return t ? er.intl.string(er.t.VMvz3m) : er.intl.string(er.t.xFVZeU);
            },
            ctaAction: () => (0, P.openUserSettings)(G.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
        },
        [w.$.ORB_PROFILE]: {
            ctaLabel: () => er.intl.string(er.t.EBYkzk),
            ctaAction: () => (0, el.pX)(y.BVt.COLLECTIBLES_SHOP_WITH_TAB(ea.G2.ORBS)),
        },
        [w.$.QUEST_COMPLETED]: {
            ctaLabel: () => er.intl.string(er.t.swICIT),
            ctaAction: () => (0, en.m)({ fromContent: ee.u.QUEST_BADGE }),
        },
        [w.$.GIFTING]: {
            ctaLabel: () => er.intl.string(er.t["nUA/JW"]),
            ctaAction: () => (0, ei.A)({ giftingOrigin: es.vQ.BADGE_DIRECTORY }),
        },
    },
    eo = "badge-details";
var eu = i(486020);
function em(e, t, i) {
    let n = (0, s.bG)([_.default], () => (null != e ? _.default.getUser(e) : void 0), [e]);
    if (null != n && t) return (0, eu.ku)({ id: n.id, avatar: n.avatar, discriminator: n.discriminator }, !1, i);
}
var eg = i(778712),
    ex = i(177861);
function eh(e) {
    return `badge-tab-${e}`;
}
function e_(e) {
    let t = Array.from(e);
    return t.length > 19 ? `${t.slice(0, 19).join("")}...` : e;
}
function eb(e) {
    let { badge: t, isSelected: i, onSelect: a, itemId: s, showBadgeIndicator: r } = e,
        d = (0, H.rm)(s),
        c = t.owned ? t.current_tier : t.next_tier,
        o =
            null != c
                ? t.tiers.find((e) => {
                      let { key: t } = e;
                      return t === c;
                  })
                : void 0,
        u = t.badge_id === w.$.PREMIUM_TENURE ? (o?.name ?? o?.key) : o?.name,
        m = null != u ? `${t.name}, ${u}` : t.name,
        g = r ? `${m}, ${er.intl.string(er.t.y2b7CA)}` : m,
        x = l.useRef(null);
    return (0, n.jsxs)(Y.D, {
        ...d,
        innerRef: x,
        role: "tab",
        id: eh(t.badge_id),
        "aria-label": g,
        "aria-selected": i,
        "aria-controls": i ? eo : void 0,
        className: E()(ex.oL, i && ex.xO),
        onFocus: d.onFocus,
        onClick: () => {
            (x.current?.focus(), a());
        },
        children: [
            r && (0, n.jsx)("span", { "aria-hidden": !0, className: ex.Dn }),
            null != t.simple_icon_url &&
                (0, n.jsx)("img", {
                    src: t.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: ex.pW,
                }),
        ],
    });
}
function ej(e) {
    let { label: t, navId: i, badges: l, selectedBadgeId: a, onSelectBadge: s, badgeIndicatorIds: r } = e,
        d = (0, Z.Ay)({
            id: i,
            isEnabled: !0,
            orientation: J.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, n.jsxs)("div", {
        className: ex.zE,
        children: [
            "heading" === t.type &&
                (0, n.jsx)(o.D, { id: t.id, variant: "heading-sm/medium", color: "text-default", children: t.text }),
            (0, n.jsx)(H.hD, {
                navigator: d,
                children: (0, n.jsx)(H.PR, {
                    children: (e) =>
                        (0, n.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: ex.yq,
                            children: l.map((e, t) => {
                                let i = r.has(e.badge_id);
                                return (0, n.jsx)(
                                    eb,
                                    {
                                        itemId: `item-${t}`,
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
function ev(e) {
    let {
            selectedBadgeId: t,
            onSelectBadge: i,
            displayedUserId: a,
            isViewingOtherUser: r,
            targetUsername: d,
            onViewOwnCatalog: c,
            onCustomizeBadges: g,
            showBadgeIndicators: x,
        } = e,
        h = (0, s.yK)([j.Ay], () => (null != a ? j.Ay.getBadges(a) : []), [a]),
        { earnable: _, owned: b } = l.useMemo(() => (0, N.in)(h), [h]),
        { badgeIndicatorIds: v } = (function (e) {
            let { badges: t, enabled: i } = e,
                n = (0, s.bG)([X], () => X.getSeenBadgeIndicators());
            return {
                badgeIndicatorIds: l.useMemo(
                    () =>
                        i
                            ? new Set(
                                  t
                                      .filter((e) => {
                                          let { badge_id: t } = e;
                                          return ed.has(t) && !n.has(t);
                                      })
                                      .map((e) => {
                                          let { badge_id: t } = e;
                                          return t;
                                      }),
                              )
                            : new Set(),
                    [t, i, n],
                ),
            };
        })({ badges: l.useMemo(() => [...b, ..._], [b, _]), enabled: x }),
        p = em(a, r, 48),
        y = (0, q.d)({ location: "BadgeDirectoryPanel" }),
        f = null != d ? e_(d) : null,
        A = null != d && f !== d,
        I =
            null != f && A && null != p
                ? (0, n.jsxs)("span", {
                      className: ex._p,
                      children: [(0, n.jsx)(B.eu, { src: p, size: eg._3.SIZE_24, "aria-hidden": !0 }), f],
                  })
                : f,
        E = r && null != I ? er.intl.format(er.t.EIcwoe, { username: I }) : er.intl.string(er.t.UqnlQF),
        w = r && null != d ? er.intl.string(er.t["75s2Rq"]) : er.intl.string(er.t["62xU4E"]),
        S = r && null != d ? er.intl.formatToPlainString(er.t.BCjSZy, { username: d }) : er.intl.string(er.t.UqnlQF);
    return (0, n.jsx)("div", {
        className: ex.ws,
        children: (0, n.jsxs)(R.F, {
            component: (0, n.jsxs)("div", {
                className: ex.NG,
                children: [
                    (0, n.jsxs)("div", {
                        className: ex.kc,
                        children: [
                            !A && null != p && (0, n.jsx)(B.eu, { src: p, size: eg._3.SIZE_24, "aria-hidden": !0 }),
                            (0, n.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: E }),
                        ],
                    }),
                    (0, n.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", children: w }),
                ],
            }),
            children: [
                (0, n.jsxs)(k.Ip, {
                    className: ex.hG,
                    children: [
                        b.length > 0 &&
                            (0, n.jsx)(ej, {
                                label: { type: "aria", text: S },
                                navId: "badge-directory-owned",
                                badges: b,
                                selectedBadgeId: t,
                                onSelectBadge: i,
                                badgeIndicatorIds: v,
                            }),
                        !r &&
                            _.length > 0 &&
                            (0, n.jsx)(ej, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: er.intl.string(er.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: _,
                                selectedBadgeId: t,
                                onSelectBadge: i,
                                badgeIndicatorIds: v,
                            }),
                    ],
                }),
                (r || y) &&
                    (0, n.jsx)("div", {
                        className: ex.HO,
                        children: r
                            ? (0, n.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: c,
                                  text: er.intl.string(er.t.msyp90),
                              })
                            : (0, n.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: g,
                                  text: er.intl.string(er.t["6CLLyH"]),
                              }),
                    }),
            ],
        }),
    });
}
var eN = i(911608),
    ep = i(847374),
    ey = i(770178),
    ef = i(194261),
    eA = i(140735),
    eI = i(836825);
function eE(e) {
    let { badge: t, isViewingOtherUser: i, targetUsername: a, isViewerOnUpgradeableNitro: s = !1 } = e,
        r = l.useId(),
        d = i && null != a;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            d &&
                (0, n.jsx)("div", {
                    className: eI.u4,
                    children: (0, n.jsx)(u.E, {
                        id: r,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: er.intl.formatToPlainString(er.t.KyTwIh, { username: a }),
                    }),
                }),
            (0, n.jsx)("div", {
                className: eI.SV,
                role: "list",
                "aria-label": d ? void 0 : t.name,
                "aria-labelledby": d ? r : void 0,
                children: t.tiers.map((e) => {
                    let l = e.owned,
                        a = !l && t.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        c = (0, N.Vs)({ tier: e, isUnlocked: l, isViewingOtherUser: i, isViewerOnUpgradeableNitro: s });
                    return (0, n.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: E()(eI.zh, a && eI.ZF),
                            children: [
                                null != r &&
                                    (0, n.jsx)("img", {
                                        className: eI.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, n.jsxs)(u.E, {
                                    variant: "text-xxs/medium",
                                    color: l ? "text-default" : "text-muted",
                                    className: eI.hI,
                                    children: [
                                        null != d &&
                                            (0, n.jsxs)("span", {
                                                className: eI.nU,
                                                children: [
                                                    !l &&
                                                        (0, n.jsx)(ef.LockIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: eI.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    d,
                                                ],
                                            }),
                                        "" !== c && (0, n.jsx)("span", { className: eI.nU, children: c }),
                                    ],
                                }),
                                (0, n.jsx)(eA.A, { children: er.intl.string(l ? er.t.sTFApF : er.t.uHtDcT) }),
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
    let { badge: t, viewerBadge: i, isViewingOtherUser: a, targetUsername: r, isViewerOnUpgradeableNitro: d } = e,
        [c, o] = l.useState(!1),
        [m, g] = l.useState(t.badge_id),
        x = l.useId(),
        h = l.useId(),
        _ = l.useRef(null),
        b = l.useRef(null);
    t.badge_id !== m && (g(t.badge_id), o(!1));
    let j = l.useCallback(() => {
            let e = _.current;
            null != e &&
                e.contains(document.activeElement) &&
                e.scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" });
        }, []),
        v = l.useCallback(
            (e) => {
                null != e.target && c && j();
            },
            [c, j],
        );
    (0, ey.g)(b, v, [c], { enabled: c });
    let p = i ?? t,
        f = (0, s.bG)([$.A], () => $.A.hasConsented(y.YAq.PERSONALIZATION)),
        A = !a && (0, N.Jn)(t.badge_id) && !f,
        I = a ? void 0 : p.next_tier,
        w = a ? void 0 : p.current_tier,
        S = null != I ? p.tiers.find((e) => e.key === I) : void 0,
        T = null != w ? p.tiers.find((e) => e.key === w) : void 0,
        C = a ? void 0 : p.progress?.[0],
        B = C?.threshold ?? S?.requirements[0]?.threshold ?? null,
        O = !a && p.owned && null != S,
        U = a || (0, V.uJ)(p.leveling_instructions) || O ? void 0 : p.leveling_instructions,
        R = S?.name != null ? er.intl.formatToPlainString(er.t["Jn+COZ"], { tier_name: S.name }) : void 0,
        k = c ? er.intl.string(er.t["065Hig"]) : er.intl.string(er.t.MylOvg),
        D = a ? t : p,
        L = T?.complex_icon_static_url ?? T?.simple_icon_url,
        z = S?.complex_icon_static_url ?? S?.simple_icon_url,
        G = !(0, V.uJ)(C?.progress_helper_text),
        P = null != R ? { "aria-labelledby": h } : { "aria-label": er.intl.string(er.t.Uwhb1l) };
    return (0, n.jsxs)(n.Fragment, {
        children: [
            null != U && (0, n.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", children: U }),
            O &&
                !A &&
                (0, n.jsxs)("div", {
                    className: ew.ES,
                    children: [
                        null != L &&
                            (0, n.jsx)("img", { className: ew.Tw, src: L, alt: "", "aria-hidden": !0, draggable: !1 }),
                        (0, n.jsxs)("div", {
                            className: ew.Bd,
                            children: [
                                null != R && (0, n.jsx)(u.E, { id: h, variant: "text-sm/medium", children: R }),
                                null != B
                                    ? (0, n.jsx)(eN.z, {
                                          value: C?.current ?? 0,
                                          minValue: C?.floor ?? 0,
                                          maxValue: B,
                                          size: "md",
                                          className: ew.hr,
                                          ...P,
                                      })
                                    : null != C &&
                                      (0, n.jsx)(eN.z, { isIndeterminate: !0, size: "md", className: ew.hr, ...P }),
                                G &&
                                    (0, n.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: C?.progress_helper_text,
                                    }),
                            ],
                        }),
                        null != z &&
                            (0, n.jsx)("img", { className: ew.Tw, src: z, alt: "", "aria-hidden": !0, draggable: !1 }),
                    ],
                }),
            O && !A
                ? (0, n.jsxs)("div", {
                      className: ew.JC,
                      children: [
                          (0, n.jsx)("div", {
                              ref: b,
                              className: E()(ew.ne, c && ew.GB),
                              id: x,
                              children: (0, n.jsx)("div", {
                                  className: ew.zL,
                                  inert: !c,
                                  children: (0, n.jsxs)("div", {
                                      className: ew.GA,
                                      children: [
                                          (0, n.jsx)(F.c, { className: ew.yF }),
                                          (0, n.jsx)(eE, {
                                              badge: D,
                                              isViewingOtherUser: a,
                                              targetUsername: r,
                                              isViewerOnUpgradeableNitro: d,
                                          }),
                                      ],
                                  }),
                              }),
                          }),
                          (0, n.jsxs)(Y.D, {
                              innerRef: _,
                              className: ew.tw,
                              "aria-expanded": c,
                              "aria-controls": x,
                              onClick: () => o(!c),
                              children: [
                                  (0, n.jsx)(u.E, {
                                      className: ew.Yi,
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: k,
                                  }),
                                  (0, n.jsx)(ep.a, {
                                      size: "sm",
                                      color: "currentColor",
                                      "aria-hidden": !0,
                                      className: E()(ew.ai, c && ew.hg),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, n.jsx)(eE, { badge: D, isViewingOtherUser: a, targetUsername: r, isViewerOnUpgradeableNitro: d }),
        ],
    });
}
var eT = i(536001),
    eC = i(260981),
    eB = i(540418),
    eO = i(907085),
    eU = i(179820);
function eR(e) {
    if (null == e) return null;
    switch (e) {
        case eT.x.COMMON:
            return { type: { text: er.intl.string(er.t.L0K5ci) }, variant: "rarity-common", icon: eC.p };
        case eT.x.RARE:
            return { type: { text: er.intl.string(er.t["sTx/5z"]) }, variant: "rarity-rare", icon: eB.A };
        case eT.x.EPIC:
            return { type: { text: er.intl.string(er.t.RD8RiN) }, variant: "rarity-epic", icon: eO.b };
        case eT.x.MYTHIC:
            return { type: { text: er.intl.string(er.t.vqc1ol) }, variant: "rarity-mythic", icon: eU.O };
        default:
            return null;
    }
}
let ek = [er.t["6zFA/T"], er.t.wzZHKl, er.t["+ED/nf"]];
function eF() {
    let e = Math.floor(Math.random() * ek.length);
    return er.intl.string(ek[e]);
}
function eD(e) {
    let { earnedDateText: t, label: i } = e;
    return (0, n.jsxs)("div", {
        className: E()(ex.AX, ex.aS),
        children: [
            (0, n.jsx)(u.E, { variant: "text-xs/medium", color: "text-default", className: ex.NM, children: t }),
            (0, n.jsx)(u.E, { variant: "text-xs/medium", color: "text-subtle", className: ex.MZ, children: i }),
        ],
    });
}
function eL(e) {
    let { rarityBadgeProps: t } = e;
    return (0, n.jsxs)("div", {
        className: E()(ex.AX, ex.sn),
        children: [
            (0, n.jsx)(S.E, { ...t }),
            (0, n.jsx)(u.E, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: er.intl.string(er.t["phYZe+"]),
            }),
        ],
    });
}
function ez() {
    return (0, n.jsx)(T.m, {
        text: er.intl.string(er.t.goKu4e),
        children: (0, n.jsxs)("span", {
            className: ex.Gb,
            children: [
                (0, n.jsx)(C.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    className: ex.LS,
                    "aria-hidden": !0,
                }),
                (0, n.jsx)(u.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "none",
                    children: er.intl.string(er.t.oW0eUd),
                }),
            ],
        }),
    });
}
function eG() {
    return (0, n.jsx)(z.A, { height: 3, width: 3, "aria-hidden": "true", className: ex.zN });
}
function eP(e) {
    let { segments: t } = e;
    return 0 === t.length
        ? null
        : (0, n.jsx)("div", {
              className: ex.U3,
              children: t.map((e, t) => {
                  let { key: i, node: l } = e;
                  return (0, n.jsxs)("span", { className: ex.Hq, children: [t > 0 && (0, n.jsx)(eG, {}), l] }, i);
              }),
          });
}
function e$(e) {
    let {
            badge: t,
            isOwnProfile: i,
            isViewingOtherUser: l,
            targetUsername: a,
            viewedAvatarSrc: s,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
            onToggleViewedUser: o,
        } = e,
        m = (0, V.uJ)(t.info_label) ? void 0 : t.info_label,
        g = (0, N.HW)(t.badge_id),
        { statusText: x, toggleText: h } = (function (e) {
            let t,
                i,
                {
                    badge: n,
                    isOwnProfile: l,
                    isViewingOtherUser: a,
                    targetUsername: s,
                    targetOwnsBadge: r,
                    viewerOwnsBadge: d,
                    unlockedStatusText: c,
                } = e;
            if (
                ((t = l
                    ? n.owned
                        ? c
                        : er.intl.string(er.t.uHtDcT)
                    : a && null != s
                      ? er.intl.formatToPlainString(er.t.Eo5Cnp, { username: e_(s) })
                      : n.owned
                        ? c
                        : er.intl.string(er.t.uHtDcT)),
                !l)
            ) {
                let e = !a && r && null != s;
                a && d
                    ? (i = er.intl.string(er.t.yxEAGH))
                    : e && (i = er.intl.formatToPlainString(er.t["9GNsge"], { username: e_(s) }));
            }
            return { statusText: t, toggleText: i };
        })({
            badge: t,
            isOwnProfile: i,
            isViewingOtherUser: l,
            targetUsername: a,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: c,
        }),
        _ = [];
    (g && _.push({ key: "beta", node: (0, n.jsx)(ez, {}) }),
        null != x &&
            _.push({
                key: "status",
                node: (0, n.jsxs)("span", {
                    className: ex.pC,
                    children: [
                        !i && null != s && (0, n.jsx)(B.eu, { src: s, size: eg._3.SIZE_16, "aria-hidden": !0 }),
                        (0, n.jsx)(u.E, {
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
                node: (0, n.jsx)(u.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    className: ex.$L,
                    children: m,
                }),
            }));
    let b = _.length >= 3 && null != h,
        j =
            null != h
                ? {
                      key: "toggle",
                      node: (0, n.jsx)(O.Q, {
                          variant: "primary",
                          size: "sm",
                          textVariant: "text-xs/medium",
                          onClick: o,
                          text: h,
                      }),
                  }
                : void 0,
        v = b || null == j ? _ : [..._, j];
    return 0 === v.length && null == j
        ? null
        : (0, n.jsxs)("div", {
              className: ex.rI,
              children: [(0, n.jsx)(eP, { segments: v }), b && null != j && (0, n.jsx)(eP, { segments: [j] })],
          });
}
function eV(e) {
    let t,
        i,
        a,
        r,
        c,
        g,
        x,
        {
            badge: h,
            viewerBadge: b,
            onClose: v,
            isOwnProfile: p,
            isViewingOtherUser: A,
            targetUsername: I,
            displayedUserId: S,
            targetOwnsBadge: T,
            viewerOwnsBadge: C,
            onToggleViewedUser: B,
            onViewOwnCatalog: O,
        } = e,
        z = em(S, A, 32),
        H = (0, N.DW)(h),
        Z = (0, s.bG)([L.Ay], () => L.Ay.useReducedMotion)
            ? void 0
            : (H?.complex_icon_animated_url ?? h.complex_icon_animated_url),
        J = H?.complex_icon_static_url ?? h.complex_icon_static_url,
        Y = H?.simple_icon_url ?? h.simple_icon_url,
        q = Z ?? J ?? Y,
        K = eR(H?.rarity ?? h.rarity) ?? void 0,
        W = ec[h.badge_id],
        Q = h.badge_id === w.$.PREMIUM_TENURE,
        X = Q ? (H?.name ?? H?.key) : H?.name,
        ee = Q ? er.intl.string(er.t.Ipxkog) : h.name;
    Q ? (r = null != X ? `${ee} ${X}` : ee) : null != X ? ((a = ee), (r = X)) : (r = ee);
    let et = (0, M.ie)(h.badge_id) && !h.is_earnable && h.badge_id !== w.$.STAFF,
        ei = (h.tiers?.length ?? 0) > 0,
        en = (0, j.H5)(h),
        el = (function (e) {
            let [t, i] = l.useState(eF),
                [n, a] = l.useState(e);
            return (e !== n && (a(e), i(eF())), t);
        })(h.badge_id);
    c = h.owned
        ? h.badge_id === w.$.APRIL_FOOLS_2026
            ? er.intl.string(er.t["5LcHT0"])
            : et && null == en
              ? el
              : (function (e) {
                    if (null == e) return;
                    let t = new Date(e);
                    if (!Number.isNaN(t.getTime()))
                        return t.toLocaleDateString(er.intl.currentLocale, {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        });
                })(en)
        : ei
          ? "--"
          : void 0;
    let ea = ((i = null == (t = h.tiers?.[0]?.key) || H?.key === t), er.intl.string(i ? er.t.WDhIz2 : er.t.wYaDmz)),
        ed = null != c && h.badge_id !== w.$.STAFF,
        eu = null != K,
        eg = null;
    ((ed || eu) &&
        (eg = (0, n.jsxs)("div", {
            className: E()(ex.$S, (!ed || !eu) && ex.jQ),
            children: [
                ed && null != c && (0, n.jsx)(eD, { earnedDateText: c, label: ea }),
                eu && (0, n.jsx)(eL, { rarityBadgeProps: K }),
            ],
        })),
        ed || (g = er.intl.string(er.t.sTFApF)));
    let e_ = _.default.getCurrentUser()?.premiumType,
        eb = Q && (e_ === es.PremiumTypes.TIER_0 || e_ === es.PremiumTypes.TIER_1);
    x =
        !eb && b?.owned === !0 && (b.tiers?.length ?? 0) > 0 && null == b.next_tier
            ? er.intl.string(er.t.jY5xAL)
            : eb
              ? er.intl.string(er.t.qkwSSp)
              : (b?.description ?? h.description);
    let ej = l.useCallback(() => {
            null != W &&
                (f({
                    actionName: "primary_badge_action_clicked",
                    badge: h,
                    displayedUserId: S,
                    isSociallyNavigated: A,
                }),
                v(),
                D.A.popAll(),
                W.ctaAction());
        }, [h, S, A, W, v]),
        ev =
            !A || h.is_earnable || C || h.badge_id === w.$.STAFF
                ? null
                : (0, n.jsx)(U.w, { type: "info", children: er.intl.format(er.t.vFekBs, { onViewBadges: O }) }),
        eN = (0, s.bG)([$.A], () => $.A.hasConsented(y.YAq.PERSONALIZATION)),
        ep = (0, N.Jn)(h.badge_id) && !A && !eN;
    return (0, n.jsx)(R.F, {
        forceLevel: 2,
        children: (0, n.jsx)("div", {
            id: eo,
            role: "tabpanel",
            "aria-labelledby": eh(h.badge_id),
            className: ex.SV,
            children: (0, n.jsxs)(k.d_, {
                className: ex.C9,
                children: [
                    (0, n.jsx)("div", { className: ex.Gw, children: (0, n.jsx)(d.J, { onClick: v, size: "sm" }) }),
                    null != q &&
                        (0, n.jsx)("img", {
                            className: E()(ex.y2, null != Z && q === Z && ex.hu),
                            src: q,
                            alt: "",
                            "aria-hidden": !0,
                            draggable: !1,
                        }),
                    (0, n.jsxs)("div", {
                        className: ex.OU,
                        children: [
                            (0, n.jsx)("div", {
                                className: ex.cQ,
                                children: (0, n.jsxs)("div", {
                                    className: ex.nj,
                                    children: [
                                        (0, n.jsxs)(o.D, {
                                            variant: Q ? "nitro-sm" : "display-sm",
                                            color: "text-strong",
                                            className: E()(ex._r, Q && ex.ve),
                                            children: [
                                                null != a &&
                                                    (0, n.jsx)(u.E, {
                                                        tag: "span",
                                                        variant: "text-sm/medium",
                                                        color: "text-subtle",
                                                        className: ex.$g,
                                                        children: a,
                                                    }),
                                                r,
                                            ],
                                        }),
                                        (0, n.jsx)(e$, {
                                            badge: h,
                                            isOwnProfile: p,
                                            isViewingOtherUser: A,
                                            targetUsername: I,
                                            viewedAvatarSrc: z,
                                            targetOwnsBadge: T,
                                            viewerOwnsBadge: C,
                                            unlockedStatusText: g,
                                            onToggleViewedUser: B,
                                        }),
                                    ],
                                }),
                            }),
                            (0, n.jsxs)("div", {
                                className: ex.oA,
                                children: [
                                    ep &&
                                        (0, n.jsx)(U.w, {
                                            type: "info",
                                            children: er.intl.format(er.t.Zh44ni, {
                                                onGoToSettings: () =>
                                                    (0, P.openUserSettings)(G.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                            }),
                                        }),
                                    eg,
                                    !(0, V.uJ)(x) &&
                                        (0, n.jsxs)("div", {
                                            className: ex.d9,
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: ex.E4,
                                                    children: [
                                                        (0, n.jsxs)("div", {
                                                            className: ex.jv,
                                                            children: [
                                                                et &&
                                                                    (0, n.jsx)(u.E, {
                                                                        variant: "text-xs/medium",
                                                                        color: "text-subtle",
                                                                        className: ex.c$,
                                                                        children: er.intl.string(er.t["/Gmn3f"]),
                                                                    }),
                                                                (0, n.jsx)(u.E, {
                                                                    variant: "text-sm/medium",
                                                                    color: "text-default",
                                                                    className: ex.ij,
                                                                    children: x,
                                                                }),
                                                            ],
                                                        }),
                                                        null != W &&
                                                            (0, n.jsx)(m.$, {
                                                                variant: eb
                                                                    ? "expressive"
                                                                    : C
                                                                      ? "secondary"
                                                                      : Q
                                                                        ? "expressive"
                                                                        : "primary",
                                                                size: "sm",
                                                                onClick: ej,
                                                                text: W.ctaLabel({
                                                                    owned: C,
                                                                    isViewerOnUpgradeableNitro: eb,
                                                                }),
                                                            }),
                                                    ],
                                                }),
                                                ei &&
                                                    (0, n.jsxs)("div", {
                                                        className: ex.cJ,
                                                        children: [
                                                            (0, n.jsx)(F.c, {}),
                                                            (0, n.jsx)(eS, {
                                                                badge: h,
                                                                viewerBadge: b,
                                                                isViewingOtherUser: A,
                                                                targetUsername: I,
                                                                isViewerOnUpgradeableNitro: eb,
                                                            }),
                                                        ],
                                                    }),
                                                null != ev && (0, n.jsx)("div", { className: ex.Z6, children: ev }),
                                            ],
                                        }),
                                    (0, V.uJ)(x) && ev,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var eM = i(470739),
    eH = i(229667);
function eZ(e) {
    let { badge: t, viewerBadge: i } = e,
        a = l.useId(),
        s = i ?? t,
        r = (0, N.YU)(s, s.current_tier),
        d = (0, N.YU)(s, s.next_tier),
        c = s.progress?.[0],
        o = c?.threshold ?? d?.requirements[0]?.threshold ?? null,
        m = r?.complex_icon_static_url ?? r?.simple_icon_url,
        g = d?.complex_icon_static_url ?? d?.simple_icon_url,
        x = (0, V.uJ)(c?.progress_helper_text) ? void 0 : c?.progress_helper_text,
        h = null != x ? { "aria-labelledby": a } : { "aria-label": er.intl.string(er.t.Uwhb1l) };
    return (0, n.jsxs)("div", {
        className: eH.NE,
        children: [
            (0, n.jsx)(u.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: er.intl.string(er.t["2m/g2c"]),
            }),
            (0, n.jsxs)("div", {
                className: eH.ES,
                children: [
                    null != m &&
                        (0, n.jsx)("img", { className: eH.Tw, src: m, alt: "", "aria-hidden": !0, draggable: !1 }),
                    (0, n.jsxs)("div", {
                        className: eH.Bd,
                        children: [
                            null != x && (0, n.jsx)(u.E, { id: a, variant: "text-sm/medium", children: x }),
                            null != o
                                ? (0, n.jsx)(eN.z, {
                                      value: c?.current ?? 0,
                                      minValue: c?.floor ?? 0,
                                      maxValue: o,
                                      size: "md",
                                      className: eH.hr,
                                      ...h,
                                  })
                                : null != c &&
                                  (0, n.jsx)(eN.z, { isIndeterminate: !0, size: "md", className: eH.hr, ...h }),
                        ],
                    }),
                    null != g &&
                        (0, n.jsx)("img", { className: eH.Tw, src: g, alt: "", "aria-hidden": !0, draggable: !1 }),
                ],
            }),
        ],
    });
}
var eJ = i(149285);
function eY(e) {
    let { badge: t, isViewingOtherUser: i, targetUsername: a, isViewerOnUpgradeableNitro: s = !1 } = e,
        r = l.useId(),
        d = i && null != a;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            d &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(F.c, {}),
                        (0, n.jsx)("div", {
                            className: eJ.u4,
                            children: (0, n.jsx)(u.E, {
                                id: r,
                                variant: "text-sm/medium",
                                children: er.intl.formatToPlainString(er.t.KyTwIh, { username: a }),
                            }),
                        }),
                    ],
                }),
            (0, n.jsx)("div", {
                className: eJ.SV,
                role: "list",
                "aria-label": d ? void 0 : t.name,
                "aria-labelledby": d ? r : void 0,
                children: t.tiers.map((e) => {
                    let l = e.owned,
                        a = !l && t.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        c = (0, N.Vs)({ tier: e, isUnlocked: l, isViewingOtherUser: i, isViewerOnUpgradeableNitro: s });
                    return (0, n.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: E()(eJ.zh, a && eJ.ZF),
                            children: [
                                null != r &&
                                    (0, n.jsx)("img", {
                                        className: eJ.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, n.jsxs)("div", {
                                    className: eJ.hI,
                                    children: [
                                        null != d &&
                                            (0, n.jsx)(u.E, {
                                                variant: "text-xs/semibold",
                                                color: l ? "text-default" : "text-muted",
                                                className: eJ.nU,
                                                children: d,
                                            }),
                                        "" !== c &&
                                            (0, n.jsxs)(u.E, {
                                                variant: "text-xs/normal",
                                                color: l ? "text-subtle" : "text-muted",
                                                className: eJ.nU,
                                                children: [
                                                    !l &&
                                                        (0, n.jsx)(ef.LockIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: eJ.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    c,
                                                ],
                                            }),
                                    ],
                                }),
                                (0, n.jsx)(eA.A, { children: er.intl.string(l ? er.t.sTFApF : er.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var eq = i(148204);
let eK = [er.t["6zFA/T"], er.t.wzZHKl, er.t["+ED/nf"]];
function eW() {
    let e = Math.floor(Math.random() * eK.length);
    return er.intl.string(eK[e]);
}
function eQ() {
    return (0, n.jsx)(z.A, { height: 3, width: 3, "aria-hidden": "true", className: eq.zN });
}
function eX(e) {
    let { segments: t } = e;
    return 0 === t.length
        ? null
        : (0, n.jsx)("div", {
              className: eq.U3,
              children: t.map((e, t) => {
                  let { key: i, node: l } = e;
                  return (0, n.jsxs)("span", { className: eq.Hq, children: [t > 0 && (0, n.jsx)(eQ, {}), l] }, i);
              }),
          });
}
function e0(e) {
    let t,
        i,
        a,
        r,
        {
            badge: c,
            viewerBadge: g,
            onClose: x,
            isViewingOtherUser: h,
            targetUsername: b,
            displayedUserId: v,
            viewerOwnsBadge: p,
            onViewOwnCatalog: A,
        } = e,
        I = (0, N.DW)(c),
        C = (0, s.bG)([L.Ay], () => L.Ay.useReducedMotion)
            ? void 0
            : (I?.complex_icon_animated_url ?? c.complex_icon_animated_url),
        B = I?.complex_icon_static_url ?? c.complex_icon_static_url,
        O = I?.simple_icon_url ?? c.simple_icon_url,
        z = C ?? B ?? O,
        H = I?.rarity ?? c.rarity,
        Z = eR(H) ?? void 0,
        J = ec[c.badge_id],
        Y = c.badge_id === w.$.PREMIUM_TENURE,
        q = Y ? (I?.name ?? I?.key) : I?.name,
        K = Y ? er.intl.string(er.t.Ipxkog) : c.name;
    Y ? (i = null != q ? `${K} ${q}` : K) : null != q && c.owned ? ((t = K), (i = q)) : (i = K);
    let W = (0, M.ie)(c.badge_id) && !c.is_earnable && c.badge_id !== w.$.STAFF,
        Q = (c.tiers?.length ?? 0) > 0,
        X = (0, j.H5)(c),
        ee = (function (e) {
            let [t, i] = l.useState(eW),
                [n, a] = l.useState(e);
            return (e !== n && (a(e), i(eW())), t);
        })(c.badge_id);
    a = c.owned
        ? c.badge_id === w.$.APRIL_FOOLS_2026
            ? er.intl.string(er.t["5LcHT0"])
            : W && null == X
              ? ee
              : null != X && c.badge_id !== w.$.STAFF
                ? er.intl.formatToPlainString(er.t.XmaiRQ, { date: new Date(X) })
                : er.intl.string(er.t.sTFApF)
        : er.intl.string(er.t.uHtDcT);
    let et = (0, V.uJ)(c.info_label) ? void 0 : c.info_label,
        ei = c.owned && H !== eT.x.COMMON && null != Z,
        en = [];
    (null != et &&
        en.push({
            key: "info",
            node: (0, n.jsx)(u.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: "text-subtle",
                className: eq.$L,
                children: et,
            }),
        }),
        en.push({
            key: "status",
            node: (0, n.jsx)(u.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: "text-subtle",
                className: eq.$L,
                children: a,
            }),
        }),
        ei && en.push({ key: "rarity", node: (0, n.jsx)(S.E, { ...Z }) }));
    let el = _.default.getCurrentUser()?.premiumType,
        ea = Y && (el === es.PremiumTypes.TIER_0 || el === es.PremiumTypes.TIER_1);
    r =
        !ea && g?.owned === !0 && (g.tiers?.length ?? 0) > 0 && null == g.next_tier
            ? er.intl.string(er.t.jY5xAL)
            : ea
              ? er.intl.string(er.t.qkwSSp)
              : (g?.description ?? c.description);
    let ed = l.useCallback(() => {
            null != J &&
                (f({
                    actionName: "primary_badge_action_clicked",
                    badge: c,
                    displayedUserId: v,
                    isSociallyNavigated: h,
                }),
                x(),
                D.A.popAll(),
                J.ctaAction());
        }, [c, v, h, J, x]),
        eu =
            !h || c.is_earnable || p || c.badge_id === w.$.STAFF
                ? null
                : (0, n.jsx)(U.w, { type: "info", children: er.intl.format(er.t.vFekBs, { onViewBadges: A }) }),
        em = (0, s.bG)([$.A], () => $.A.hasConsented(y.YAq.PERSONALIZATION)),
        eg = (0, N.Jn)(c.badge_id) && !h && !em,
        ex = (function (e) {
            let { badge: t, viewerBadge: i, isViewingOtherUser: n } = e,
                l = (0, s.bG)([$.A], () => $.A.hasConsented(y.YAq.PERSONALIZATION)),
                a = i ?? t,
                r = null != (0, N.YU)(a, a.next_tier),
                d = (0, N.Jn)(t.badge_id) && !l;
            return !n && a.owned && r && !d;
        })({ badge: c, viewerBadge: g, isViewingOtherUser: h }),
        e_ = !(0, V.uJ)(r),
        eb = ex || e_ || Q,
        ej = h ? c : (g ?? c);
    return (0, n.jsx)(R.F, {
        forceLevel: 2,
        children: (0, n.jsxs)("div", {
            id: eo,
            role: "tabpanel",
            "aria-labelledby": eh(c.badge_id),
            className: eq.SV,
            children: [
                (0, n.jsx)("div", { className: eq.Gw, children: (0, n.jsx)(d.J, { onClick: x, size: "sm" }) }),
                (0, n.jsxs)(k.d_, {
                    className: eq.C9,
                    children: [
                        (0, n.jsx)("div", {
                            className: eq.Rm,
                            children:
                                (0, N.HW)(c.badge_id) &&
                                (0, n.jsx)(T.m, {
                                    text: er.intl.string(er.t.goKu4e),
                                    children: (0, n.jsx)("span", {
                                        className: eq.mC,
                                        children: (0, n.jsx)(S.E, { type: "beta" }),
                                    }),
                                }),
                        }),
                        null != z &&
                            (0, n.jsx)("img", {
                                className: E()(eq.y2, null != C && z === C && eq.hu),
                                src: z,
                                alt: "",
                                "aria-hidden": !0,
                                draggable: !1,
                            }),
                        (0, n.jsxs)("div", {
                            className: eq.OU,
                            children: [
                                (0, n.jsx)("div", {
                                    className: eq.cQ,
                                    children: (0, n.jsxs)("div", {
                                        className: eq.nj,
                                        children: [
                                            (0, n.jsxs)(o.D, {
                                                variant: Y ? "nitro-sm" : "display-sm",
                                                color: "text-strong",
                                                className: E()(eq._r, Y && eq.ve),
                                                children: [
                                                    null != t &&
                                                        (0, n.jsx)(u.E, {
                                                            tag: "span",
                                                            variant: "text-sm/medium",
                                                            color: "text-subtle",
                                                            className: eq.$g,
                                                            children: t,
                                                        }),
                                                    i,
                                                ],
                                            }),
                                            (0, n.jsx)(eX, { segments: en }),
                                        ],
                                    }),
                                }),
                                (0, n.jsxs)("div", {
                                    className: eq.oA,
                                    children: [
                                        eg &&
                                            (0, n.jsx)(U.w, {
                                                type: "info",
                                                children: er.intl.format(er.t.Zh44ni, {
                                                    onGoToSettings: () =>
                                                        (0, P.openUserSettings)(G.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                                }),
                                            }),
                                        eb &&
                                            (0, n.jsxs)("div", {
                                                className: eq.d9,
                                                children: [
                                                    ex &&
                                                        (0, n.jsxs)(n.Fragment, {
                                                            children: [
                                                                (0, n.jsx)(eZ, {
                                                                    badge: c,
                                                                    viewerBadge: g,
                                                                    isViewingOtherUser: h,
                                                                }),
                                                                (0, n.jsx)(F.c, {}),
                                                            ],
                                                        }),
                                                    e_ &&
                                                        (0, n.jsxs)("div", {
                                                            className: E()(eq.E4, !Q && eq.H),
                                                            children: [
                                                                (0, n.jsxs)("div", {
                                                                    className: eq.jv,
                                                                    children: [
                                                                        W &&
                                                                            (0, n.jsx)(u.E, {
                                                                                variant: "text-xs/medium",
                                                                                color: "text-subtle",
                                                                                className: eq.c$,
                                                                                children: er.intl.string(
                                                                                    er.t["/Gmn3f"],
                                                                                ),
                                                                            }),
                                                                        (0, n.jsx)(u.E, {
                                                                            variant: "text-sm/medium",
                                                                            color: "text-default",
                                                                            className: eq.ij,
                                                                            children: r,
                                                                        }),
                                                                    ],
                                                                }),
                                                                null != J &&
                                                                    (0, n.jsx)(m.$, {
                                                                        variant: ea
                                                                            ? "expressive"
                                                                            : p
                                                                              ? "secondary"
                                                                              : Y
                                                                                ? "expressive"
                                                                                : "primary",
                                                                        size: "sm",
                                                                        onClick: ed,
                                                                        text: J.ctaLabel({
                                                                            owned: p,
                                                                            isViewerOnUpgradeableNitro: ea,
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                    Q &&
                                                        (0, n.jsx)("div", {
                                                            className: eq.cJ,
                                                            children: (0, n.jsx)(eY, {
                                                                badge: ej,
                                                                isViewingOtherUser: h,
                                                                targetUsername: b,
                                                                isViewerOnUpgradeableNitro: ea,
                                                            }),
                                                        }),
                                                    null != eu && (0, n.jsx)("div", { className: eq.Z6, children: eu }),
                                                ],
                                            }),
                                        !eb && eu,
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
function e1(e) {
    let {
            transitionState: t,
            onClose: i,
            initialBadgeId: p,
            targetUserId: y,
            targetUsername: I,
            viewingCurrentUserBadges: E,
        } = e,
        w = (0, s.bG)([_.default], () => _.default.getCurrentUser()?.id),
        S = null == y || y === w,
        T = (function (e) {
            let { location: t } = e;
            return v.useConfig({ location: t }).enabled;
        })({ location: "BadgeDirectoryModal" }),
        C = !S && null != y && !0 !== E,
        B = C ? y : w,
        O = null != B ? `viewed_user:${C ? "other" : "self"}` : void 0,
        [U, R] = l.useState(p ?? null),
        k = (0, s.yK)([j.Ay], () => (null != B ? j.Ay.getBadges(B) : []), [B]),
        F = (0, s.bG)([j.Ay], () => null != B && j.Ay.hasCatalogFor(B), [B]),
        D = (0, s.bG)([j.Ay], () => j.Ay.hasCatalogFetchErrorFor(B), [B]);
    (l.useEffect(() => {
        null != B && (j.Ay.hasCatalogFor(B) ? j.Ay.isCatalogStaleFor(B) && (0, b.RS)(B) : (0, b.RS)(B));
        let e = C ? w : y;
        S || null == e || j.Ay.hasCatalogFor(e) || (0, b.RS)(e);
    }, [B, S, C, w, y]),
        l.useEffect(() => {
            null != O && g.A.increment({ name: a.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [O] });
        }, [O]));
    let L = l.useMemo(() => {
            let { earnable: e, owned: t } = (0, N.in)(k);
            return C ? (t[0]?.badge_id ?? null) : (t[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [k, C]),
        z = null != U && null != B ? j.Ay.getBadgeById(U, B) : void 0,
        G = null != L && null != B ? j.Ay.getBadgeById(L, B) : void 0,
        P = z ?? G,
        $ = !F && !D,
        V = !F && D,
        M = !C;
    l.useEffect(() => {
        V && null != O && g.A.increment({ name: a.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [O] });
    }, [V, O]);
    let H = (0, s.bG)([j.Ay], () => null != y && null != P && (j.Ay.getBadgeById(P.badge_id, y)?.owned ?? !1), [P, y]),
        Z = (0, s.bG)([j.Ay], () => (null != w && null != P ? j.Ay.getBadgeById(P.badge_id, w) : void 0), [P, w]),
        J = Z?.owned ?? !1,
        Y = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, eM._)({ ...e, stackingBehavior: "replace" }).then(() => {
                    i();
                });
            },
            [i],
        ),
        q = l.useCallback(() => {
            null != y &&
                null != P &&
                (C
                    ? Y({
                          initialBadgeId: P.badge_id,
                          targetUserId: y,
                          targetUsername: I,
                          viewingCurrentUserBadges: !0,
                      })
                    : Y({ initialBadgeId: P.badge_id, targetUserId: y, targetUsername: I }));
        }, [C, P, Y, y, I]),
        K = l.useCallback(() => {
            null != w &&
                null != y &&
                (f({ actionName: "view_your_badges_pressed", badge: P, displayedUserId: B, isSociallyNavigated: C }),
                Y({ targetUserId: y, targetUsername: I, viewingCurrentUserBadges: !0 }));
        }, [w, B, C, P, Y, y, I]),
        W = l.useCallback(() => {
            null != B && (0, b.RS)(B, { isRetry: !0 });
        }, [B]),
        Q = l.useCallback(() => {
            (f({ actionName: "badge_directory_closed", badge: P, displayedUserId: B, isSociallyNavigated: C }), i());
        }, [B, C, i, P]),
        X = l.useCallback(() => {
            null != w &&
                (f({
                    actionName: "customize_your_badges_pressed",
                    badge: P,
                    displayedUserId: B,
                    isSociallyNavigated: C,
                }),
                Q(),
                A.A.setState({ isOpen: !0 }),
                (0, h.kN)(w) || (0, x.openUserProfileModal)({ userId: w }));
        }, [w, B, Q, C, P]),
        ee = P?.badge_id;
    return (
        l.useEffect(() => {
            null != ee && M && ed.has(ee) && (0, b.PV)(ee);
        }, [ee, M]),
        l.useEffect(() => {
            null != P && f({ actionName: "badge_detail_viewed", badge: P, displayedUserId: B, isSociallyNavigated: C });
        }, [ee, B, C]),
        (0, n.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": er.intl.string(er.t.PEjP4L),
            transitionState: t,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: T ? e2.C : ex.CR,
            children: (0, n.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: ex.jE,
                children: [
                    ($ || V || null == P) &&
                        (0, n.jsx)("div", { className: ex.b, children: (0, n.jsx)(d.J, { onClick: Q, size: "sm" }) }),
                    $
                        ? (0, n.jsx)("div", { className: ex.Lq, children: (0, n.jsx)(c.y, {}) })
                        : V
                          ? (0, n.jsxs)("div", {
                                className: ex.IU,
                                children: [
                                    (0, n.jsx)(o.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: er.intl.string(er.t.iufib1),
                                    }),
                                    (0, n.jsx)(u.E, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        className: ex.TQ,
                                        children: er.intl.string(er.t.eAn6z2),
                                    }),
                                    (0, n.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: W,
                                        text: er.intl.string(er.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(ev, {
                                        selectedBadgeId: P?.badge_id ?? null,
                                        onSelectBadge: R,
                                        displayedUserId: B,
                                        isViewingOtherUser: C,
                                        targetUsername: I,
                                        onViewOwnCatalog: K,
                                        onCustomizeBadges: X,
                                        showBadgeIndicators: M,
                                    }),
                                    null != P &&
                                        (T
                                            ? (0, n.jsx)(e0, {
                                                  badge: P,
                                                  viewerBadge: Z,
                                                  onClose: Q,
                                                  isViewingOtherUser: C,
                                                  targetUsername: I,
                                                  displayedUserId: B,
                                                  viewerOwnsBadge: J,
                                                  onViewOwnCatalog: K,
                                              })
                                            : (0, n.jsx)(eV, {
                                                  badge: P,
                                                  viewerBadge: Z,
                                                  onClose: Q,
                                                  isOwnProfile: S,
                                                  isViewingOtherUser: C,
                                                  targetUsername: I,
                                                  displayedUserId: B,
                                                  targetOwnsBadge: H,
                                                  viewerOwnsBadge: J,
                                                  onToggleViewedUser: q,
                                                  onViewOwnCatalog: K,
                                              })),
                                ],
                            }),
                ],
            }),
        })
    );
}
