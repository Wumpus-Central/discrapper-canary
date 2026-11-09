l.d(n, { default: () => e0 });
var i = l(477900),
    t = l(582128),
    a = l(731738),
    s = l(855986),
    r = l(935462),
    d = l(815021),
    o = l(289873),
    c = l(534514),
    u = l(834730),
    m = l(821609),
    g = l(913379),
    x = l(702476),
    h = l(403777),
    b = l(287809),
    _ = l(682618),
    v = l(982240);
let j = (0, l(945810).mj)({
    name: "2026-10-badge-directory-updates",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var y = l(988341),
    N = l(129230),
    p = l(652215);
function f(e) {
    let {
            actionName: n,
            badge: l,
            displayedUserId: i,
            isSociallyNavigated: t,
            hasUnreadIndicator: a,
            source: s,
            surface: r,
        } = e,
        d = b.default.getCurrentUser()?.id,
        o = null != l && null != d ? v.Ay.getBadgeById(l.badge_id, d) : void 0,
        c = null != l && null != d ? v.Ay.getRemainingToNextTier(l.badge_id, d) : void 0,
        u = null != i ? v.Ay.getBadges(i).filter((e) => e.owned).length : void 0;
    N.default.track(p.HAw.BADGE_DIRECTORY_ACTION, {
        badge_action: n,
        badge_id: l?.badge_id,
        badge_tier: null != l ? ((l.owned ? l.current_tier : l.next_tier) ?? l.tiers?.[0]?.key) : void 0,
        badge_owner_id: i,
        is_owned: o?.owned ?? !1,
        progress_to_next_tier: c,
        is_earnable: l?.is_earnable ?? !1,
        is_socially_navigated: t,
        total_badges_owned: u,
        has_unread_indicator: a,
        surface: r,
        source: s,
    });
}
var I = l(248284),
    A = l(73153);
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
let S = new w(A.h, {
        BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN: function (e) {
            let { badgeId: n } = e;
            if (E.seenBadgeIndicatorIds.has(n)) return !1;
            E = { ...E, seenBadgeIndicatorIds: new Set([...E.seenBadgeIndicatorIds, n]) };
        },
    }),
    T = y.sC;
l(321073);
var C = l(503698),
    B = l.n(C),
    U = l(70283),
    O = l(805251),
    R = l(97808),
    k = l(123292),
    F = l(683071),
    D = l(707554),
    L = l(95362),
    P = l(404778),
    $ = l(136969),
    G = l(775602),
    z = l(640708),
    M = l(780964),
    V = l(766075),
    H = l(153488),
    Z = l(240248),
    J = l(731309),
    Y = l(837381),
    q = l(116903),
    K = l(741918),
    Q = l(939249),
    W = l(643056),
    X = l(486020);
function ee(e, n, l) {
    let i = (0, s.bG)([b.default], () => (null != e ? b.default.getUser(e) : void 0), [e]);
    if (null != i && n) return (0, X.ku)({ id: i.id, avatar: i.avatar, discriminator: i.discriminator }, !1, l);
}
var en = l(696292),
    el = l(975807),
    ei = l(990820),
    et = l(216934),
    ea = l(976860),
    es = l(758836),
    er = l(682901),
    ed = l(792996);
let eo = {
        [U.$.STAFF]: {
            ctaLabel: () => ed.intl.string(ed.t.q7A8hP),
            ctaAction: () => (0, el.A)("https://discord.com/careers"),
        },
        [U.$.PREMIUM_TENURE]: {
            ctaLabel: (e) => {
                let { owned: n, isViewerOnUpgradeableNitro: l } = e;
                return !0 === l
                    ? ed.intl.string(ed.t.uKFeS1)
                    : n
                      ? ed.intl.string(ed.t.xGjjkd)
                      : ed.intl.string(ed.t.BTxm69);
            },
            ctaAction: () => (0, ea.pX)(p.BVt.NITRO_HOME),
        },
        [U.$.GUILD_BOOSTER]: {
            ctaLabel: (e) => {
                let { owned: n } = e;
                return n ? ed.intl.string(ed.t.VMvz3m) : ed.intl.string(ed.t.xFVZeU);
            },
            ctaAction: () => (0, V.openUserSettings)(M.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
        },
        [U.$.ORB_PROFILE]: {
            ctaLabel: () => ed.intl.string(ed.t.fG3RIg),
            ctaAction: () => (0, ea.pX)(p.BVt.COLLECTIBLES_SHOP_WITH_TAB(es.G2.ORBS)),
        },
        [U.$.QUEST_COMPLETED]: {
            ctaLabel: () => ed.intl.string(ed.t.swICIT),
            ctaAction: () => (0, et.m)({ fromContent: en.u.QUEST_BADGE }),
        },
        [U.$.GIFTING]: {
            ctaLabel: () => ed.intl.string(ed.t["nUA/JW"]),
            ctaAction: () => (0, ei.A)({ giftingOrigin: er.vQ.BADGE_DIRECTORY }),
        },
    },
    ec = "badge-details";
var eu = l(778712),
    em = l(177861);
function eg(e) {
    return `badge-tab-${e}`;
}
function ex(e) {
    let n = Array.from(e);
    return n.length > 19 ? `${n.slice(0, 19).join("")}...` : e;
}
function eh(e) {
    let { badge: n, isSelected: l, onSelect: a, itemId: s, showBadgeIndicator: r } = e,
        d = (0, Y.rm)(s),
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
        g = r ? `${m}, ${ed.intl.string(ed.t.y2b7CA)}` : m,
        x = t.useRef(null);
    return (0, i.jsxs)(Q.D, {
        ...d,
        innerRef: x,
        role: "tab",
        id: eg(n.badge_id),
        "aria-label": g,
        "aria-selected": l,
        "aria-controls": l ? ec : void 0,
        className: B()(em.oL, l && em.xO),
        onFocus: d.onFocus,
        onClick: () => {
            (x.current?.focus(), a());
        },
        children: [
            r && (0, i.jsx)("span", { "aria-hidden": !0, className: em.Dn }),
            null != n.simple_icon_url &&
                (0, i.jsx)("img", {
                    src: n.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: em.pW,
                }),
        ],
    });
}
function eb(e) {
    let { label: n, navId: l, badges: t, selectedBadgeId: a, onSelectBadge: s, badgeIndicatorIds: r } = e,
        d = (0, q.Ay)({
            id: l,
            isEnabled: !0,
            orientation: K.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, i.jsxs)("div", {
        className: em.zE,
        children: [
            "heading" === n.type &&
                (0, i.jsx)(c.D, { id: n.id, variant: "heading-xs/medium", color: "text-default", children: n.text }),
            (0, i.jsx)(Y.hD, {
                navigator: d,
                children: (0, i.jsx)(Y.PR, {
                    children: (e) =>
                        (0, i.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === n.type ? n.id : void 0,
                            "aria-label": "aria" === n.type ? n.text : void 0,
                            className: em.yq,
                            children: t.map((e, n) => {
                                let l = r.has(e.badge_id);
                                return (0, i.jsx)(
                                    eh,
                                    {
                                        itemId: `item-${n}`,
                                        badge: e,
                                        isSelected: e.badge_id === a,
                                        onSelect: () => s(e.badge_id),
                                        showBadgeIndicator: l,
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
function e_(e) {
    let {
            selectedBadgeId: n,
            onSelectBadge: l,
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
            let { badges: n, enabled: l } = e,
                i = (0, s.bG)([S], () => S.getSeenBadgeIndicators());
            return {
                badgeIndicatorIds: t.useMemo(
                    () =>
                        l
                            ? new Set(
                                  n
                                      .filter((e) => {
                                          let { badge_id: n } = e;
                                          return T.has(n) && !i.has(n);
                                      })
                                      .map((e) => {
                                          let { badge_id: n } = e;
                                          return n;
                                      }),
                              )
                            : new Set(),
                    [n, l, i],
                ),
            };
        })({ badges: t.useMemo(() => [..._, ...b], [_, b]), enabled: x }),
        N = ee(a, r, 48),
        p = (0, W.d)({ location: "BadgeDirectoryPanel" }),
        f = null != d ? ex(d) : null,
        I = null != d && f !== d,
        A =
            null != f && I && null != N
                ? (0, i.jsxs)("span", {
                      className: em._p,
                      children: [(0, i.jsx)(R.eu, { src: N, size: eu._3.SIZE_24, "aria-hidden": !0 }), f],
                  })
                : f,
        E = r && null != A ? ed.intl.format(ed.t.EIcwoe, { username: A }) : ed.intl.string(ed.t.UqnlQF),
        w = r && null != d ? ed.intl.string(ed.t["75s2Rq"]) : ed.intl.string(ed.t["62xU4E"]),
        C = r && null != d ? ed.intl.formatToPlainString(ed.t.BCjSZy, { username: d }) : ed.intl.string(ed.t.UqnlQF);
    return (0, i.jsx)("div", {
        className: em.ws,
        children: (0, i.jsxs)(D.F, {
            component: (0, i.jsxs)("div", {
                className: em.NG,
                children: [
                    (0, i.jsxs)("div", {
                        className: em.kc,
                        children: [
                            !I && null != N && (0, i.jsx)(R.eu, { src: N, size: eu._3.SIZE_24, "aria-hidden": !0 }),
                            (0, i.jsx)(c.D, { variant: "heading-lg/semibold", color: "text-strong", children: E }),
                        ],
                    }),
                    (0, i.jsx)(u.E, { variant: "body-sm/medium", color: "text-subtle", children: w }),
                ],
            }),
            children: [
                (0, i.jsxs)(L.Ip, {
                    className: em.hG,
                    children: [
                        _.length > 0 &&
                            (0, i.jsx)(eb, {
                                label: { type: "aria", text: C },
                                navId: "badge-directory-owned",
                                badges: _,
                                selectedBadgeId: n,
                                onSelectBadge: l,
                                badgeIndicatorIds: j,
                            }),
                        !r &&
                            b.length > 0 &&
                            (0, i.jsx)(eb, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: ed.intl.string(ed.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: b,
                                selectedBadgeId: n,
                                onSelectBadge: l,
                                badgeIndicatorIds: j,
                            }),
                    ],
                }),
                (r || p) &&
                    (0, i.jsx)("div", {
                        className: em.HO,
                        children: r
                            ? (0, i.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: o,
                                  text: ed.intl.string(ed.t.msyp90),
                              })
                            : (0, i.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: g,
                                  text: ed.intl.string(ed.t["6CLLyH"]),
                              }),
                    }),
            ],
        }),
    });
}
var ev = l(911608),
    ej = l(847374),
    ey = l(770178),
    eN = l(194261),
    ep = l(140735),
    ef = l(836825);
function eI(e) {
    let { badge: n, isViewingOtherUser: l, targetUsername: a, isViewerOnUpgradeableNitro: s = !1 } = e,
        r = t.useId(),
        d = l && null != a;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            d &&
                (0, i.jsx)("div", {
                    className: ef.u4,
                    children: (0, i.jsx)(u.E, {
                        id: r,
                        variant: "body-xs/medium",
                        color: "text-subtle",
                        children: ed.intl.formatToPlainString(ed.t.KyTwIh, { username: a }),
                    }),
                }),
            (0, i.jsx)("div", {
                className: ef.SV,
                role: "list",
                "aria-label": d ? void 0 : n.name,
                "aria-labelledby": d ? r : void 0,
                children: n.tiers.map((e) => {
                    let t = e.owned,
                        a = !t && n.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        o = (0, y.Vs)({ tier: e, isUnlocked: t, isViewingOtherUser: l, isViewerOnUpgradeableNitro: s });
                    return (0, i.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: B()(ef.zh, a && ef.ZF),
                            children: [
                                null != r &&
                                    (0, i.jsx)("img", {
                                        className: ef.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, i.jsxs)(u.E, {
                                    variant: "footnote/medium",
                                    color: t ? "text-default" : "text-muted",
                                    className: ef.hI,
                                    children: [
                                        null != d &&
                                            (0, i.jsxs)("span", {
                                                className: ef.nU,
                                                children: [
                                                    !t &&
                                                        (0, i.jsx)(eN.LockIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: ef.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    d,
                                                ],
                                            }),
                                        "" !== o && (0, i.jsx)("span", { className: ef.nU, children: o }),
                                    ],
                                }),
                                (0, i.jsx)(ep.A, { children: ed.intl.string(t ? ed.t.sTFApF : ed.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var eA = l(600409);
function eE(e) {
    let { badge: n, viewerBadge: l, isViewingOtherUser: a, targetUsername: r, isViewerOnUpgradeableNitro: d } = e,
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
    (0, ey.g)(_, j, [o], { enabled: o });
    let N = l ?? n,
        f = (0, s.bG)([H.A], () => H.A.hasConsented(p.YAq.PERSONALIZATION)),
        I = !a && (0, y.Jn)(n.badge_id) && !f,
        A = a ? void 0 : N.next_tier,
        E = a ? void 0 : N.current_tier,
        w = null != A ? N.tiers.find((e) => e.key === A) : void 0,
        S = null != E ? N.tiers.find((e) => e.key === E) : void 0,
        T = a ? void 0 : N.progress?.[0],
        C = T?.threshold ?? w?.requirements[0]?.threshold ?? null,
        U = !a && N.owned && null != w,
        O = a || (0, Z.uJ)(N.leveling_instructions) || U ? void 0 : N.leveling_instructions,
        R = w?.name != null ? ed.intl.formatToPlainString(ed.t["Jn+COZ"], { tier_name: w.name }) : void 0,
        k = o ? ed.intl.string(ed.t["065Hig"]) : ed.intl.string(ed.t.MylOvg),
        F = a ? n : N,
        D = S?.complex_icon_static_url ?? S?.simple_icon_url,
        L = w?.complex_icon_static_url ?? w?.simple_icon_url,
        $ = !(0, Z.uJ)(T?.progress_helper_text),
        G = null != R ? { "aria-labelledby": h } : { "aria-label": ed.intl.string(ed.t.Uwhb1l) };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != O && (0, i.jsx)(u.E, { variant: "body-xs/medium", color: "text-subtle", children: O }),
            U &&
                !I &&
                (0, i.jsxs)("div", {
                    className: eA.ES,
                    children: [
                        null != D &&
                            (0, i.jsx)("img", { className: eA.Tw, src: D, alt: "", "aria-hidden": !0, draggable: !1 }),
                        (0, i.jsxs)("div", {
                            className: eA.Bd,
                            children: [
                                null != R && (0, i.jsx)(u.E, { id: h, variant: "body-sm/medium", children: R }),
                                null != C
                                    ? (0, i.jsx)(ev.z, {
                                          value: T?.current ?? 0,
                                          minValue: T?.floor ?? 0,
                                          maxValue: C,
                                          size: "md",
                                          className: eA.hr,
                                          ...G,
                                      })
                                    : null != T &&
                                      (0, i.jsx)(ev.z, { isIndeterminate: !0, size: "md", className: eA.hr, ...G }),
                                $ &&
                                    (0, i.jsx)(u.E, {
                                        variant: "body-xs/medium",
                                        color: "text-subtle",
                                        children: T?.progress_helper_text,
                                    }),
                            ],
                        }),
                        null != L &&
                            (0, i.jsx)("img", { className: eA.Tw, src: L, alt: "", "aria-hidden": !0, draggable: !1 }),
                    ],
                }),
            U && !I
                ? (0, i.jsxs)("div", {
                      className: eA.JC,
                      children: [
                          (0, i.jsx)("div", {
                              ref: _,
                              className: B()(eA.ne, o && eA.GB),
                              id: x,
                              children: (0, i.jsx)("div", {
                                  className: eA.zL,
                                  inert: !o,
                                  children: (0, i.jsxs)("div", {
                                      className: eA.GA,
                                      children: [
                                          (0, i.jsx)(P.c, { className: eA.yF }),
                                          (0, i.jsx)(eI, {
                                              badge: F,
                                              isViewingOtherUser: a,
                                              targetUsername: r,
                                              isViewerOnUpgradeableNitro: d,
                                          }),
                                      ],
                                  }),
                              }),
                          }),
                          (0, i.jsxs)(Q.D, {
                              innerRef: b,
                              className: eA.tw,
                              "aria-expanded": o,
                              "aria-controls": x,
                              onClick: () => c(!o),
                              children: [
                                  (0, i.jsx)(u.E, {
                                      className: eA.Yi,
                                      variant: "body-xs/medium",
                                      color: "text-subtle",
                                      children: k,
                                  }),
                                  (0, i.jsx)(ej.ChevronSmallDownIcon, {
                                      size: "sm",
                                      color: "currentColor",
                                      "aria-hidden": !0,
                                      className: B()(eA.ai, o && eA.hg),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, i.jsx)(eI, { badge: F, isViewingOtherUser: a, targetUsername: r, isViewerOnUpgradeableNitro: d }),
        ],
    });
}
var ew = l(536001),
    eS = l(260981),
    eT = l(540418),
    eC = l(907085),
    eB = l(179820);
function eU(e) {
    if (null == e) return null;
    switch (e) {
        case ew.x.COMMON:
            return {
                type: { text: ed.intl.string(ed.t.L0K5ci) },
                variant: "rarity-common",
                icon: eS.ExperimentalCommonIcon,
            };
        case ew.x.RARE:
            return {
                type: { text: ed.intl.string(ed.t["sTx/5z"]) },
                variant: "rarity-rare",
                icon: eT.ExperimentalRareIcon,
            };
        case ew.x.EPIC:
            return {
                type: { text: ed.intl.string(ed.t.RD8RiN) },
                variant: "rarity-epic",
                icon: eC.ExperimentalEpicIcon,
            };
        case ew.x.MYTHIC:
            return {
                type: { text: ed.intl.string(ed.t.vqc1ol) },
                variant: "rarity-mythic",
                icon: eB.ExperimentalMythicIcon,
            };
        default:
            return null;
    }
}
let eO = [ed.t["6zFA/T"], ed.t.wzZHKl, ed.t["+ED/nf"]];
function eR() {
    let e = Math.floor(Math.random() * eO.length);
    return ed.intl.string(eO[e]);
}
function ek(e) {
    let { earnedDateText: n, label: l } = e;
    return (0, i.jsxs)("div", {
        className: B()(em.AX, em.aS),
        children: [
            (0, i.jsx)(u.E, { variant: "body-xs/medium", color: "text-default", className: em.NM, children: n }),
            (0, i.jsx)(u.E, { variant: "body-xs/medium", color: "text-subtle", className: em.MZ, children: l }),
        ],
    });
}
function eF(e) {
    let { rarityBadgeProps: n } = e;
    return (0, i.jsxs)("div", {
        className: B()(em.AX, em.sn),
        children: [
            (0, i.jsx)(O.E, { ...n }),
            (0, i.jsx)(u.E, {
                variant: "body-xs/medium",
                color: "text-subtle",
                children: ed.intl.string(ed.t["phYZe+"]),
            }),
        ],
    });
}
function eD() {
    return (0, i.jsx)(z.A, { height: 3, width: 3, "aria-hidden": "true", className: em.zN });
}
function eL(e) {
    let { segments: n } = e;
    return 0 === n.length
        ? null
        : (0, i.jsx)("div", {
              className: em.U3,
              children: n.map((e, n) => {
                  let { key: l, node: t } = e;
                  return (0, i.jsxs)("span", { className: em.Hq, children: [n > 0 && (0, i.jsx)(eD, {}), t] }, l);
              }),
          });
}
function eP(e) {
    let {
            badge: n,
            isOwnProfile: l,
            isViewingOtherUser: t,
            targetUsername: a,
            viewedAvatarSrc: s,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: o,
            onToggleViewedUser: c,
        } = e,
        m = (0, Z.uJ)(n.info_label) ? void 0 : n.info_label,
        { statusText: g, toggleText: x } = (function (e) {
            let n,
                l,
                {
                    badge: i,
                    isOwnProfile: t,
                    isViewingOtherUser: a,
                    targetUsername: s,
                    targetOwnsBadge: r,
                    viewerOwnsBadge: d,
                    unlockedStatusText: o,
                } = e;
            if (
                ((n = t
                    ? i.owned
                        ? o
                        : ed.intl.string(ed.t.uHtDcT)
                    : a && null != s
                      ? ed.intl.formatToPlainString(ed.t.Eo5Cnp, { username: ex(s) })
                      : i.owned
                        ? o
                        : ed.intl.string(ed.t.uHtDcT)),
                !t)
            ) {
                let e = !a && r && null != s;
                a && d
                    ? (l = ed.intl.string(ed.t.yxEAGH))
                    : e && (l = ed.intl.formatToPlainString(ed.t["9GNsge"], { username: ex(s) }));
            }
            return { statusText: n, toggleText: l };
        })({
            badge: n,
            isOwnProfile: l,
            isViewingOtherUser: t,
            targetUsername: a,
            targetOwnsBadge: r,
            viewerOwnsBadge: d,
            unlockedStatusText: o,
        }),
        h = [];
    (null != g &&
        h.push({
            key: "status",
            node: (0, i.jsxs)("span", {
                className: em.pC,
                children: [
                    !l && null != s && (0, i.jsx)(R.eu, { src: s, size: eu._3.SIZE_16, "aria-hidden": !0 }),
                    (0, i.jsx)(u.E, {
                        tag: "span",
                        variant: "body-xs/medium",
                        color: "text-subtle",
                        className: em.$L,
                        children: g,
                    }),
                ],
            }),
        }),
        null != m &&
            h.push({
                key: "info",
                node: (0, i.jsx)(u.E, {
                    tag: "span",
                    variant: "body-xs/medium",
                    color: "text-subtle",
                    className: em.$L,
                    children: m,
                }),
            }));
    let b = h.length >= 3 && null != x,
        _ =
            null != x
                ? {
                      key: "toggle",
                      node: (0, i.jsx)(k.Q, {
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
        : (0, i.jsxs)("div", {
              className: em.rI,
              children: [(0, i.jsx)(eL, { segments: v }), b && null != _ && (0, i.jsx)(eL, { segments: [_] })],
          });
}
function e$(e) {
    let n,
        l,
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
            isViewingOtherUser: I,
            targetUsername: A,
            displayedUserId: E,
            targetOwnsBadge: w,
            viewerOwnsBadge: S,
            onToggleViewedUser: T,
            onViewOwnCatalog: C,
        } = e,
        O = ee(E, I, 32),
        R = (0, y.DW)(h),
        k = (0, s.bG)([G.Ay], () => G.Ay.useReducedMotion)
            ? void 0
            : (R?.complex_icon_animated_url ?? h.complex_icon_animated_url),
        z = R?.complex_icon_static_url ?? h.complex_icon_static_url,
        Y = R?.simple_icon_url ?? h.simple_icon_url,
        q = k ?? z ?? Y,
        K = eU(R?.rarity ?? h.rarity) ?? void 0,
        Q = eo[h.badge_id],
        W = h.badge_id === U.$.PREMIUM_TENURE,
        X = W ? (R?.name ?? R?.key) : R?.name,
        en = W ? ed.intl.string(ed.t.Ipxkog) : h.name;
    W ? (r = null != X ? `${en} ${X}` : en) : null != X ? ((a = en), (r = X)) : (r = en);
    let el = (0, J.ie)(h.badge_id) && !h.is_earnable && h.badge_id !== U.$.STAFF,
        ei = (h.tiers?.length ?? 0) > 0,
        et = (0, v.H5)(h),
        ea = (function (e) {
            let [n, l] = t.useState(eR),
                [i, a] = t.useState(e);
            return (e !== i && (a(e), l(eR())), n);
        })(h.badge_id);
    o = h.owned
        ? h.badge_id === U.$.APRIL_FOOLS_2026
            ? ed.intl.string(ed.t["5LcHT0"])
            : el && null == et
              ? ea
              : (function (e) {
                    if (null == e) return;
                    let n = new Date(e);
                    if (!Number.isNaN(n.getTime()))
                        return n.toLocaleDateString(ed.intl.currentLocale, {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        });
                })(et)
        : ei
          ? "--"
          : void 0;
    let es = ((l = null == (n = h.tiers?.[0]?.key) || R?.key === n), ed.intl.string(l ? ed.t.WDhIz2 : ed.t.wYaDmz)),
        eu = null != o && h.badge_id !== U.$.STAFF,
        ex = null != K,
        eh = null;
    ((eu || ex) &&
        (eh = (0, i.jsxs)("div", {
            className: B()(em.$S, (!eu || !ex) && em.jQ),
            children: [
                eu && null != o && (0, i.jsx)(ek, { earnedDateText: o, label: es }),
                ex && (0, i.jsx)(eF, { rarityBadgeProps: K }),
            ],
        })),
        eu || (g = ed.intl.string(ed.t.sTFApF)));
    let eb = b.default.getCurrentUser()?.premiumType,
        e_ = W && (eb === er.PremiumTypes.TIER_0 || eb === er.PremiumTypes.TIER_1);
    x =
        !e_ && _?.owned === !0 && (_.tiers?.length ?? 0) > 0 && null == _.next_tier
            ? ed.intl.string(ed.t.jY5xAL)
            : e_
              ? ed.intl.string(ed.t.qkwSSp)
              : (_?.description ?? h.description);
    let ev = t.useCallback(() => {
            null != Q &&
                (f({
                    actionName: "primary_badge_action_clicked",
                    badge: h,
                    displayedUserId: E,
                    isSociallyNavigated: I,
                }),
                j(),
                $.A.popAll(),
                Q.ctaAction());
        }, [h, E, I, Q, j]),
        ej =
            !I || h.is_earnable || S || h.badge_id === U.$.STAFF
                ? null
                : (0, i.jsx)(F.w, {
                      type: "info",
                      message: ed.intl.format(ed.t.vFekBs, { onViewBadges: C }),
                      role: "none",
                  }),
        ey = (0, s.bG)([H.A], () => H.A.hasConsented(p.YAq.PERSONALIZATION)),
        eN = (0, y.Jn)(h.badge_id) && !I && !ey;
    return (0, i.jsx)(D.F, {
        forceLevel: 2,
        children: (0, i.jsx)("div", {
            id: ec,
            role: "tabpanel",
            "aria-labelledby": eg(h.badge_id),
            className: em.SV,
            children: (0, i.jsxs)(L.d_, {
                className: em.C9,
                children: [
                    (0, i.jsx)("div", { className: em.Gw, children: (0, i.jsx)(d.J, { onClick: j, size: "sm" }) }),
                    null != q &&
                        (0, i.jsx)("img", {
                            className: B()(em.y2, null != k && q === k && em.hu),
                            src: q,
                            alt: "",
                            "aria-hidden": !0,
                            draggable: !1,
                        }),
                    (0, i.jsxs)("div", {
                        className: em.OU,
                        children: [
                            (0, i.jsx)("div", {
                                className: em.cQ,
                                children: (0, i.jsxs)("div", {
                                    className: em.nj,
                                    children: [
                                        (0, i.jsxs)(c.D, {
                                            variant: W ? "nitro-sm" : "display-sm",
                                            color: "text-strong",
                                            className: B()(em._r, W && em.ve),
                                            children: [
                                                null != a &&
                                                    (0, i.jsx)(u.E, {
                                                        tag: "span",
                                                        variant: "body-sm/medium",
                                                        color: "text-subtle",
                                                        className: em.$g,
                                                        children: a,
                                                    }),
                                                r,
                                            ],
                                        }),
                                        (0, i.jsx)(eP, {
                                            badge: h,
                                            isOwnProfile: N,
                                            isViewingOtherUser: I,
                                            targetUsername: A,
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
                                className: em.oA,
                                children: [
                                    eN &&
                                        (0, i.jsx)(F.w, {
                                            type: "info",
                                            message: ed.intl.format(ed.t.Zh44ni, {
                                                onGoToSettings: () =>
                                                    (0, V.openUserSettings)(M.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                            }),
                                            role: "none",
                                        }),
                                    eh,
                                    !(0, Z.uJ)(x) &&
                                        (0, i.jsxs)("div", {
                                            className: em.d9,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: em.E4,
                                                    children: [
                                                        (0, i.jsxs)("div", {
                                                            className: em.jv,
                                                            children: [
                                                                el &&
                                                                    (0, i.jsx)(u.E, {
                                                                        variant: "body-xs/medium",
                                                                        color: "text-subtle",
                                                                        className: em.c$,
                                                                        children: ed.intl.string(ed.t["/Gmn3f"]),
                                                                    }),
                                                                (0, i.jsx)(u.E, {
                                                                    variant: "body-sm/medium",
                                                                    color: "text-default",
                                                                    className: em.ij,
                                                                    children: x,
                                                                }),
                                                            ],
                                                        }),
                                                        null != Q &&
                                                            (0, i.jsx)(m.$, {
                                                                variant: e_
                                                                    ? "expressive"
                                                                    : S
                                                                      ? "secondary"
                                                                      : W
                                                                        ? "expressive"
                                                                        : "primary",
                                                                size: "sm",
                                                                onClick: ev,
                                                                text: Q.ctaLabel({
                                                                    owned: S,
                                                                    isViewerOnUpgradeableNitro: e_,
                                                                }),
                                                            }),
                                                    ],
                                                }),
                                                ei &&
                                                    (0, i.jsxs)("div", {
                                                        className: em.cJ,
                                                        children: [
                                                            (0, i.jsx)(P.c, {}),
                                                            (0, i.jsx)(eE, {
                                                                badge: h,
                                                                viewerBadge: _,
                                                                isViewingOtherUser: I,
                                                                targetUsername: A,
                                                                isViewerOnUpgradeableNitro: e_,
                                                            }),
                                                        ],
                                                    }),
                                                null != ej && (0, i.jsx)("div", { className: em.Z6, children: ej }),
                                            ],
                                        }),
                                    (0, Z.uJ)(x) && ej,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var eG = l(470739);
function ez(e) {
    return (0, J.ie)(e.badge_id) && !e.is_earnable && e.badge_id !== U.$.STAFF;
}
let eM = [ed.t["6zFA/T"], ed.t.wzZHKl, ed.t["+ED/nf"]];
function eV() {
    let e = Math.floor(Math.random() * eM.length);
    return ed.intl.string(eM[e]);
}
var eH = l(229667);
function eZ(e) {
    let n,
        l,
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
        (l = (0, y.YU)(n, n.current_tier)),
        (a = (0, y.YU)(n, n.next_tier)),
        {
            progress: (s = n.progress?.[0]),
            threshold: s?.threshold ?? a?.requirements[0]?.threshold ?? null,
            currentArtUrl: l?.simple_icon_url ?? l?.complex_icon_static_url,
            nextArtUrl: a?.simple_icon_url ?? a?.complex_icon_static_url,
            helperText: (0, Z.uJ)(s?.progress_helper_text) ? void 0 : s?.progress_helper_text,
        }),
        b = null != h ? { "aria-labelledby": o } : { "aria-label": ed.intl.string(ed.t.Uwhb1l) };
    return (0, i.jsxs)("div", {
        className: eH.NE,
        children: [
            (0, i.jsx)(u.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: ed.intl.string(ed.t["2m/g2c"]),
            }),
            (0, i.jsxs)("div", {
                className: eH.ES,
                children: [
                    null != g &&
                        (0, i.jsx)("img", { className: eH.Tw, src: g, alt: "", "aria-hidden": !0, draggable: !1 }),
                    (0, i.jsxs)("div", {
                        className: eH.Bd,
                        children: [
                            null != h && (0, i.jsx)(u.E, { id: o, variant: "body-sm/medium", children: h }),
                            null != m
                                ? (0, i.jsx)(ev.z, {
                                      value: c?.current ?? 0,
                                      minValue: c?.floor ?? 0,
                                      maxValue: m,
                                      size: "md",
                                      className: eH.hr,
                                      ...b,
                                  })
                                : null != c &&
                                  (0, i.jsx)(ev.z, { isIndeterminate: !0, size: "md", className: eH.hr, ...b }),
                        ],
                    }),
                    null != x &&
                        (0, i.jsx)("img", { className: eH.Tw, src: x, alt: "", "aria-hidden": !0, draggable: !1 }),
                ],
            }),
        ],
    });
}
var eJ = l(149285);
function eY(e) {
    let { badge: n, isViewingOtherUser: l, targetUsername: a, isViewerOnUpgradeableNitro: s = !1 } = e,
        r = t.useId(),
        d = l && null != a;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            d &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(P.c, {}),
                        (0, i.jsx)("div", {
                            className: eJ.u4,
                            children: (0, i.jsx)(u.E, {
                                id: r,
                                variant: "body-sm/medium",
                                children: ed.intl.formatToPlainString(ed.t.KyTwIh, { username: a }),
                            }),
                        }),
                    ],
                }),
            (0, i.jsx)("div", {
                className: eJ.SV,
                role: "list",
                "aria-label": d ? void 0 : n.name,
                "aria-labelledby": d ? r : void 0,
                children: n.tiers.map((e) => {
                    let t = e.owned,
                        a = !t && n.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        o = (0, y.Vs)({ tier: e, isUnlocked: t, isViewingOtherUser: l, isViewerOnUpgradeableNitro: s });
                    return (0, i.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: B()(eJ.zh, a && eJ.ZF),
                            children: [
                                null != r &&
                                    (0, i.jsx)("img", {
                                        className: eJ.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, i.jsxs)("div", {
                                    className: eJ.hI,
                                    children: [
                                        null != d &&
                                            (0, i.jsx)(u.E, {
                                                variant: "body-xs/semibold",
                                                color: t ? "text-default" : "text-muted",
                                                className: eJ.nU,
                                                children: d,
                                            }),
                                        "" !== o &&
                                            (0, i.jsxs)(u.E, {
                                                variant: "body-xs/normal",
                                                color: t ? "text-subtle" : "text-muted",
                                                className: eJ.nU,
                                                children: [
                                                    !t &&
                                                        (0, i.jsx)(eN.LockIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: eJ.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    o,
                                                ],
                                            }),
                                    ],
                                }),
                                (0, i.jsx)(ep.A, { children: ed.intl.string(t ? ed.t.sTFApF : ed.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var eq = l(148204);
function eK() {
    return (0, i.jsx)(z.A, { height: 3, width: 3, "aria-hidden": "true", className: eq.zN });
}
function eQ(e) {
    let { segments: n } = e;
    return 0 === n.length
        ? null
        : (0, i.jsx)("div", {
              className: eq.U3,
              children: n.map((e, n) => {
                  let { key: l, node: t } = e;
                  return (0, i.jsxs)("span", { className: eq.Hq, children: [n > 0 && (0, i.jsx)(eK, {}), t] }, l);
              }),
          });
}
function eW(e) {
    let n,
        l,
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
            displayedUserId: I,
            viewerOwnsBadge: A,
            onViewOwnCatalog: E,
        } = e,
        w = (0, y.DW)(x),
        { animatedUrl: S, imageUrl: T } =
            ((l =
                (n = (0, s.bG)([G.Ay], () => G.Ay.useReducedMotion)
                    ? void 0
                    : (w?.complex_icon_animated_url ?? x.complex_icon_animated_url)) ??
                w?.complex_icon_static_url ??
                x.complex_icon_static_url ??
                w?.simple_icon_url ??
                x.simple_icon_url),
            { animatedUrl: n, imageUrl: l }),
        C = w?.rarity ?? x.rarity,
        R = eU(C) ?? void 0,
        k = eo[x.badge_id],
        {
            isNitro: z,
            eyebrow: J,
            displayName: Y,
        } = ((r = (a = x.badge_id === U.$.PREMIUM_TENURE) ? (w?.name ?? w?.key) : w?.name),
        (o = a ? ed.intl.string(ed.t.Ipxkog) : x.name),
        a
            ? { isNitro: a, eyebrow: void 0, displayName: null != r ? `${o} ${r}` : o }
            : null != r && x.owned
              ? { isNitro: a, eyebrow: o, displayName: r }
              : { isNitro: a, eyebrow: void 0, displayName: o }),
        q = ez(x),
        K = (x.tiers?.length ?? 0) > 0,
        Q = (function (e) {
            let [n, l] = t.useState(eV),
                [i, a] = t.useState(e);
            return (e !== i && (a(e), l(eV())), n);
        })(x.badge_id),
        W =
            ((g = (0, v.H5)(x)),
            x.owned
                ? x.badge_id === U.$.APRIL_FOOLS_2026
                    ? ed.intl.string(ed.t["5LcHT0"])
                    : ez(x) && null == g
                      ? Q
                      : null != g && x.badge_id !== U.$.STAFF
                        ? ed.intl.formatToPlainString(ed.t.XmaiRQ, { date: new Date(g) })
                        : ed.intl.string(ed.t.sTFApF)
                : ed.intl.string(ed.t.uHtDcT)),
        X = (0, Z.uJ)(x.info_label) ? void 0 : x.info_label,
        ee = x.owned && C !== ew.x.COMMON && null != R,
        en = [];
    (null != X &&
        en.push({
            key: "info",
            node: (0, i.jsx)(u.E, {
                tag: "span",
                variant: "body-xs/medium",
                color: "text-subtle",
                className: eq.$L,
                children: X,
            }),
        }),
        en.push({
            key: "status",
            node: (0, i.jsx)(u.E, {
                tag: "span",
                variant: "body-xs/medium",
                color: "text-subtle",
                className: eq.$L,
                children: W,
            }),
        }),
        ee && en.push({ key: "rarity", node: (0, i.jsx)(O.E, { ...R }) }));
    let el = b.default.getCurrentUser()?.premiumType,
        ei = x.badge_id === U.$.PREMIUM_TENURE && (el === er.PremiumTypes.TIER_0 || el === er.PremiumTypes.TIER_1),
        et = (function (e) {
            let { badge: n, viewerBadge: l, isViewerOnUpgradeableNitro: i } = e;
            return !i && l?.owned === !0 && (l.tiers?.length ?? 0) > 0 && null == l.next_tier
                ? ed.intl.string(ed.t.jY5xAL)
                : i
                  ? ed.intl.string(ed.t.qkwSSp)
                  : (l?.description ?? n.description);
        })({ badge: x, viewerBadge: h, isViewerOnUpgradeableNitro: ei }),
        ea = t.useCallback(() => {
            null != k &&
                (f({
                    actionName: "primary_badge_action_clicked",
                    badge: x,
                    displayedUserId: I,
                    isSociallyNavigated: j,
                }),
                _(),
                $.A.popAll(),
                k.ctaAction());
        }, [x, I, j, k, _]),
        es = !(function (e) {
            let { badge: n, isViewingOtherUser: l, viewerOwnsBadge: i } = e;
            return l && !n.is_earnable && !i && n.badge_id !== U.$.STAFF;
        })({ badge: x, isViewingOtherUser: j, viewerOwnsBadge: A })
            ? null
            : (0, i.jsx)(F.w, {
                  type: "info",
                  message: ed.intl.format(ed.t.vFekBs, { onViewBadges: E }),
                  role: "none",
              }),
        eu = (function (e) {
            let { badge: n, isViewingOtherUser: l } = e,
                i = (0, s.bG)([H.A], () => H.A.hasConsented(p.YAq.PERSONALIZATION));
            return (0, y.Jn)(n.badge_id) && !l && !i;
        })({ badge: x, isViewingOtherUser: j }),
        em = (function (e) {
            let { badge: n, viewerBadge: l, isViewingOtherUser: i } = e,
                t = (0, s.bG)([H.A], () => H.A.hasConsented(p.YAq.PERSONALIZATION)),
                a = l ?? n,
                r = null != (0, y.YU)(a, a.next_tier),
                d = (0, y.Jn)(n.badge_id) && !t;
            return !i && a.owned && r && !d;
        })({ badge: x, viewerBadge: h, isViewingOtherUser: j }),
        ex = !(0, Z.uJ)(et),
        eh = em || ex || K,
        eb = j ? x : (h ?? x);
    return (0, i.jsx)(D.F, {
        forceLevel: 2,
        children: (0, i.jsxs)("div", {
            id: ec,
            role: "tabpanel",
            "aria-labelledby": eg(x.badge_id),
            className: eq.SV,
            children: [
                (0, i.jsx)("div", { className: eq.Gw, children: (0, i.jsx)(d.J, { onClick: _, size: "sm" }) }),
                (0, i.jsxs)(L.d_, {
                    className: eq.C9,
                    children: [
                        (0, i.jsx)("div", { className: eq.Rm }),
                        null != T &&
                            (0, i.jsx)("img", {
                                className: B()(eq.y2, null != S && z && eq.Zl),
                                src: T,
                                alt: "",
                                "aria-hidden": !0,
                                draggable: !1,
                            }),
                        (0, i.jsxs)("div", {
                            className: eq.OU,
                            children: [
                                (0, i.jsx)("div", {
                                    className: eq.cQ,
                                    children: (0, i.jsxs)("div", {
                                        className: eq.nj,
                                        children: [
                                            (0, i.jsxs)(c.D, {
                                                variant: z ? "nitro-sm" : "display-sm",
                                                color: "text-strong",
                                                className: B()(eq._r, z && eq.ve),
                                                children: [
                                                    null != J &&
                                                        (0, i.jsx)(u.E, {
                                                            tag: "span",
                                                            variant: "body-sm/medium",
                                                            color: "text-subtle",
                                                            className: eq.$g,
                                                            children: J,
                                                        }),
                                                    Y,
                                                ],
                                            }),
                                            (0, i.jsx)(eQ, { segments: en }),
                                        ],
                                    }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: eq.oA,
                                    children: [
                                        eu &&
                                            (0, i.jsx)(F.w, {
                                                type: "info",
                                                message: ed.intl.format(ed.t.Zh44ni, {
                                                    onGoToSettings: () =>
                                                        (0, V.openUserSettings)(M.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                                }),
                                                role: "none",
                                            }),
                                        eh &&
                                            (0, i.jsxs)("div", {
                                                className: eq.d9,
                                                children: [
                                                    em &&
                                                        (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                (0, i.jsx)(eZ, { badge: x, viewerBadge: h }),
                                                                (0, i.jsx)(P.c, {}),
                                                            ],
                                                        }),
                                                    ex &&
                                                        (0, i.jsxs)("div", {
                                                            className: B()(eq.E4, !K && eq.H),
                                                            children: [
                                                                (0, i.jsxs)("div", {
                                                                    className: eq.jv,
                                                                    children: [
                                                                        q &&
                                                                            (0, i.jsx)(u.E, {
                                                                                variant: "body-xs/medium",
                                                                                color: "text-subtle",
                                                                                className: eq.c$,
                                                                                children: ed.intl.string(
                                                                                    ed.t["/Gmn3f"],
                                                                                ),
                                                                            }),
                                                                        (0, i.jsx)(u.E, {
                                                                            variant: "body-sm/medium",
                                                                            color: "text-default",
                                                                            className: eq.ij,
                                                                            children: et,
                                                                        }),
                                                                    ],
                                                                }),
                                                                null != k &&
                                                                    (0, i.jsx)(m.$, {
                                                                        variant: (function (e) {
                                                                            let {
                                                                                isNitro: n,
                                                                                isViewerOnUpgradeableNitro: l,
                                                                                viewerOwnsBadge: i,
                                                                            } = e;
                                                                            return l
                                                                                ? "expressive"
                                                                                : i
                                                                                  ? "secondary"
                                                                                  : n
                                                                                    ? "expressive"
                                                                                    : "primary";
                                                                        })({
                                                                            isNitro: z,
                                                                            isViewerOnUpgradeableNitro: ei,
                                                                            viewerOwnsBadge: A,
                                                                        }),
                                                                        size: "sm",
                                                                        onClick: ea,
                                                                        text: k.ctaLabel({
                                                                            owned: A,
                                                                            isViewerOnUpgradeableNitro: ei,
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                    K &&
                                                        (0, i.jsx)("div", {
                                                            className: eq.cJ,
                                                            children: (0, i.jsx)(eY, {
                                                                badge: eb,
                                                                isViewingOtherUser: j,
                                                                targetUsername: N,
                                                                isViewerOnUpgradeableNitro: ei,
                                                            }),
                                                        }),
                                                    null != es && (0, i.jsx)("div", { className: eq.Z6, children: es }),
                                                ],
                                            }),
                                        !eh && es,
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
var eX = l(921121);
function e0(e) {
    let {
            transitionState: n,
            onClose: l,
            initialBadgeId: N,
            targetUserId: p,
            targetUsername: A,
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
    let P = t.useMemo(() => {
            let { earnable: e, owned: n } = (0, y.in)(F);
            return B ? (n[0]?.badge_id ?? null) : (n[0]?.badge_id ?? e[0]?.badge_id ?? null);
        }, [F, B]),
        $ = null != R && null != U ? v.Ay.getBadgeById(R, U) : void 0,
        G = null != P && null != U ? v.Ay.getBadgeById(P, U) : void 0,
        z = $ ?? G,
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
                (0, eG.openBadgeDirectoryModal)({ ...e, stackingBehavior: "replace" }).then(() => {
                    l();
                });
            },
            [l],
        ),
        K = t.useCallback(() => {
            null != p &&
                null != z &&
                (B
                    ? q({
                          initialBadgeId: z.badge_id,
                          targetUserId: p,
                          targetUsername: A,
                          viewingCurrentUserBadges: !0,
                      })
                    : q({ initialBadgeId: z.badge_id, targetUserId: p, targetUsername: A }));
        }, [B, z, q, p, A]),
        Q = t.useCallback(() => {
            null != w &&
                null != p &&
                (f({ actionName: "view_your_badges_pressed", badge: z, displayedUserId: U, isSociallyNavigated: B }),
                q({ targetUserId: p, targetUsername: A, viewingCurrentUserBadges: !0 }));
        }, [w, U, B, z, q, p, A]),
        W = t.useCallback(() => {
            null != U && (0, _.RS)(U, { isRetry: !0 });
        }, [U]),
        X = t.useCallback(() => {
            (f({ actionName: "badge_directory_closed", badge: z, displayedUserId: U, isSociallyNavigated: B }), l());
        }, [U, B, l, z]),
        ee = t.useCallback(() => {
            null != w &&
                (f({
                    actionName: "customize_your_badges_pressed",
                    badge: z,
                    displayedUserId: U,
                    isSociallyNavigated: B,
                }),
                X(),
                I.A.setState({ isOpen: !0 }),
                (0, h.kN)(w) || (0, x.openUserProfileModal)({ userId: w }));
        }, [w, U, X, B, z]),
        en = z?.badge_id;
    return (
        !(function (e) {
            let { badgeId: n, enabled: l } = e;
            t.useEffect(() => {
                null != n && l && T.has(n) && (0, _.PV)(n);
            }, [n, l]);
        })({ badgeId: en, enabled: H }),
        t.useEffect(() => {
            null != z && f({ actionName: "badge_detail_viewed", badge: z, displayedUserId: U, isSociallyNavigated: B });
        }, [en, U, B]),
        (0, i.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": ed.intl.string(ed.t.PEjP4L),
            transitionState: n,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: C ? eX.C : em.CR,
            children: (0, i.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: em.jE,
                children: [
                    (M || V || null == z) &&
                        (0, i.jsx)("div", { className: em.b, children: (0, i.jsx)(d.J, { onClick: X, size: "sm" }) }),
                    M
                        ? (0, i.jsx)("div", { className: em.Lq, children: (0, i.jsx)(o.y, {}) })
                        : V
                          ? (0, i.jsxs)("div", {
                                className: em.IU,
                                children: [
                                    (0, i.jsx)(c.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: ed.intl.string(ed.t.iufib1),
                                    }),
                                    (0, i.jsx)(u.E, {
                                        variant: "body-sm/medium",
                                        color: "text-subtle",
                                        className: em.TQ,
                                        children: ed.intl.string(ed.t.eAn6z2),
                                    }),
                                    (0, i.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: W,
                                        text: ed.intl.string(ed.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(e_, {
                                        selectedBadgeId: z?.badge_id ?? null,
                                        onSelectBadge: k,
                                        displayedUserId: U,
                                        isViewingOtherUser: B,
                                        targetUsername: A,
                                        onViewOwnCatalog: Q,
                                        onCustomizeBadges: ee,
                                        showBadgeIndicators: H,
                                    }),
                                    null != z &&
                                        (C
                                            ? (0, i.jsx)(eW, {
                                                  badge: z,
                                                  viewerBadge: J,
                                                  onClose: X,
                                                  isViewingOtherUser: B,
                                                  targetUsername: A,
                                                  displayedUserId: U,
                                                  viewerOwnsBadge: Y,
                                                  onViewOwnCatalog: Q,
                                              })
                                            : (0, i.jsx)(e$, {
                                                  badge: z,
                                                  viewerBadge: J,
                                                  onClose: X,
                                                  isOwnProfile: S,
                                                  isViewingOtherUser: B,
                                                  targetUsername: A,
                                                  displayedUserId: U,
                                                  targetOwnsBadge: Z,
                                                  viewerOwnsBadge: Y,
                                                  onToggleViewedUser: K,
                                                  onViewOwnCatalog: Q,
                                              })),
                                ],
                            }),
                ],
            }),
        })
    );
}
