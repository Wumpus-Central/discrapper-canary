t.d(a, { default: () => eL });
var n = t(477900),
    i = t(582128),
    l = t(731738),
    s = t(855986),
    r = t(935462),
    d = t(231723),
    o = t(815021),
    c = t(289873),
    u = t(534514),
    g = t(834730),
    m = t(821609),
    x = t(913379),
    h = t(702476),
    b = t(403777),
    _ = t(287809),
    y = t(682618),
    v = t(73153),
    j = t(988341);
let I = { seenBadgeIndicatorIds: new Set() };
function N(e) {
    if (I.seenBadgeIndicatorIds.has(e)) return !1;
    I = { ...I, seenBadgeIndicatorIds: new Set([...I.seenBadgeIndicatorIds, e]) };
}
class p extends s.Ay.PersistedStore {
    static displayName = "BadgeDirectorySeenStore";
    static persistKey = "BadgeDirectorySeenStore";
    initialize(e) {
        I = { seenBadgeIndicatorIds: new Set(e?.seenBadgeIndicatorIds ?? []) };
    }
    getState() {
        return { seenBadgeIndicatorIds: Array.from(I.seenBadgeIndicatorIds) };
    }
    getSeenBadgeIndicators() {
        return I.seenBadgeIndicatorIds;
    }
}
let f = new p(v.h, {
    BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN: function (e) {
        let { badgeId: a } = e;
        return N(a);
    },
    BADGE_ACK_SUCCESS: function (e) {
        let { badgeId: a } = e;
        return !!(0, j.HW)(a) && N(a);
    },
});
var A = t(982240),
    E = t(620143),
    S = t(129230),
    B = t(652215);
function w(e) {
    let {
            actionName: a,
            badge: t,
            displayedUserId: n,
            isSociallyNavigated: i,
            hasUnreadIndicator: l,
            source: s,
            surface: r,
        } = e,
        d = _.default.getCurrentUser()?.id,
        o = null != t && null != d ? A.Ay.getBadgeById(t.badge_id, d) : void 0,
        c = null != t && null != d ? A.Ay.getRemainingToNextTier(t.badge_id, d) : void 0,
        u = null != n ? A.Ay.getBadges(n).filter((e) => e.owned).length : void 0;
    S.default.track(B.HAw.BADGE_DIRECTORY_ACTION, {
        badge_action: a,
        badge_id: t?.badge_id,
        badge_tier: null != t ? ((t.owned ? t.current_tier : t.next_tier) ?? t.tiers?.[0]?.key) : void 0,
        badge_owner_id: n,
        is_owned: o?.owned ?? !1,
        progress_to_next_tier: c,
        is_earnable: t?.is_earnable ?? !1,
        is_socially_navigated: i,
        total_badges_owned: u,
        has_unread_indicator: l,
        surface: r,
        source: s,
    });
}
var C = t(248284);
let T = j.sC;
t(321073);
var R = t(503698),
    O = t.n(R),
    U = t(536001),
    D = t(805251),
    k = t(683071),
    M = t(707554),
    G = t(95362),
    L = t(404778),
    F = t(136969),
    z = t(775602),
    $ = t(640708),
    P = t(780964),
    V = t(766075),
    H = t(515718),
    K = t(240248),
    Y = t(49253),
    Z = t(792996);
let q = [Z.t["6zFA/T"], Z.t.wzZHKl, Z.t["+ED/nf"]];
function J() {
    let e = Math.floor(Math.random() * q.length);
    return Z.intl.string(q[e]);
}
var W = t(153488),
    Q = t(837381),
    X = t(116903),
    ee = t(741918),
    ea = t(70283),
    et = t(939249),
    en = t(97808),
    ei = t(643056),
    el = t(486020),
    es = t(696292),
    er = t(975807),
    ed = t(990820),
    eo = t(216934),
    ec = t(976860),
    eu = t(758836),
    eg = t(682901);
let em = {
        [ea.$.STAFF]: {
            ctaLabel: () => Z.intl.string(Z.t.q7A8hP),
            ctaAction: () => (0, er.A)("https://discord.com/careers"),
        },
        [ea.$.PREMIUM_TENURE]: {
            ctaLabel: (e) => {
                let { owned: a, isViewerOnUpgradeableNitro: t } = e;
                return !0 === t ? Z.intl.string(Z.t.uKFeS1) : a ? Z.intl.string(Z.t.xGjjkd) : Z.intl.string(Z.t.BTxm69);
            },
            ctaAction: () => (0, ec.pX)(B.BVt.NITRO_HOME),
        },
        [ea.$.GUILD_BOOSTER]: {
            ctaLabel: (e) => {
                let { owned: a } = e;
                return a ? Z.intl.string(Z.t.VMvz3m) : Z.intl.string(Z.t.xFVZeU);
            },
            ctaAction: () => (0, V.openUserSettings)(P.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
        },
        [ea.$.ORB_PROFILE]: {
            ctaLabel: () => Z.intl.string(Z.t.fG3RIg),
            ctaAction: () => (0, ec.pX)(B.BVt.COLLECTIBLES_SHOP_WITH_TAB(eu.G2.ORBS)),
        },
        [ea.$.QUEST_COMPLETED]: {
            ctaLabel: () => Z.intl.string(Z.t.swICIT),
            ctaAction: () => (0, eo.m)({ fromContent: es.u.QUEST_BADGE }),
        },
        [ea.$.GIFTING]: {
            ctaLabel: () => Z.intl.string(Z.t["nUA/JW"]),
            ctaAction: () => (0, ed.A)({ giftingOrigin: eg.vQ.BADGE_DIRECTORY }),
        },
    },
    ex = "badge-details";
var eh = t(778712),
    eb = t(177861);
function e_(e) {
    return `badge-tab-${e}`;
}
function ey(e) {
    let { badge: a, isSelected: t, onSelect: l, itemId: s, showBadgeIndicator: r } = e,
        d = (0, Q.rm)(s),
        o = a.owned ? a.current_tier : a.next_tier,
        c =
            null != o
                ? a.tiers.find((e) => {
                      let { key: a } = e;
                      return a === o;
                  })
                : void 0,
        u = a.badge_id === ea.$.PREMIUM_TENURE ? (c?.name ?? c?.key) : c?.name,
        g = null != u ? `${a.name}, ${u}` : a.name,
        m = r ? `${g}, ${Z.intl.string(Z.t.y2b7CA)}` : g,
        x = i.useRef(null);
    return (0, n.jsxs)(et.D, {
        ...d,
        innerRef: x,
        role: "tab",
        id: e_(a.badge_id),
        "aria-label": m,
        "aria-selected": t,
        "aria-controls": t ? ex : void 0,
        className: O()(eb.oL, t && eb.xO),
        onFocus: d.onFocus,
        onClick: () => {
            (x.current?.focus(), l());
        },
        children: [
            r && (0, n.jsx)("span", { "aria-hidden": !0, className: eb.Dn }),
            null != a.simple_icon_url &&
                (0, n.jsx)("img", {
                    src: a.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: eb.pW,
                }),
        ],
    });
}
function ev(e) {
    let { label: a, navId: t, badges: i, selectedBadgeId: l, onSelectBadge: s, badgeIndicatorIds: r } = e,
        d = (0, X.Ay)({
            id: t,
            isEnabled: !0,
            orientation: ee.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, n.jsxs)("div", {
        className: eb.zE,
        children: [
            "heading" === a.type &&
                (0, n.jsx)(u.D, { id: a.id, variant: "heading-xs/medium", color: "text-default", children: a.text }),
            (0, n.jsx)(Q.hD, {
                navigator: d,
                children: (0, n.jsx)(Q.PR, {
                    children: (e) =>
                        (0, n.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === a.type ? a.id : void 0,
                            "aria-label": "aria" === a.type ? a.text : void 0,
                            className: eb.yq,
                            children: i.map((e, a) => {
                                let t = e.badge_id === l;
                                return (0, n.jsx)(
                                    ey,
                                    {
                                        itemId: `item-${a}`,
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
    let a,
        {
            selectedBadgeId: t,
            onSelectBadge: l,
            displayedUserId: r,
            isViewingOtherUser: d,
            targetUsername: o,
            onViewOwnCatalog: c,
            onCustomizeBadges: x,
            showBadgeIndicators: h,
        } = e,
        b = (0, s.yK)([A.Ay], () => (null != r ? A.Ay.getBadges(r) : []), [r]),
        { earnable: y, owned: v } = i.useMemo(() => (0, j.in)(b), [b]),
        I = i.useMemo(() => [...v, ...y], [v, y]),
        { badgeIndicatorIds: N } = (function (e) {
            let { badges: a, enabled: t } = e,
                n = (0, s.bG)([f], () => f.getSeenBadgeIndicators());
            return {
                badgeIndicatorIds: i.useMemo(
                    () =>
                        t
                            ? new Set(
                                  a
                                      .filter((e) => {
                                          let { badge_id: a } = e;
                                          return T.has(a) && !n.has(a);
                                      })
                                      .map((e) => {
                                          let { badge_id: a } = e;
                                          return a;
                                      }),
                              )
                            : new Set(),
                    [a, t, n],
                ),
            };
        })({ badges: I, enabled: h }),
        p = i.useMemo(() => new Set(h ? I.filter((e) => !0 === e.has_updates).map((e) => e.badge_id) : []), [h, I]),
        S = (0, E.e)({ location: "BadgeDirectoryPanel", hasUnread: p.size > 0 }),
        B = i.useMemo(() => (S ? new Set([...N, ...p]) : N), [S, N, p]),
        w = (function (e, a) {
            let t = (0, s.bG)([_.default], () => (null != e ? _.default.getUser(e) : void 0), [e]);
            if (null != t && a)
                return (0, el.ku)({ id: t.id, avatar: t.avatar, discriminator: t.discriminator }, !1, 48);
        })(r, d),
        C = (0, ei.d)({ location: "BadgeDirectoryPanel" }),
        R = null != o ? ((a = Array.from(o)).length > 19 ? `${a.slice(0, 19).join("")}...` : o) : null,
        O = null != o && R !== o,
        U =
            null != R && O && null != w
                ? (0, n.jsxs)("span", {
                      className: eb._p,
                      children: [(0, n.jsx)(en.eu, { src: w, size: eh._3.SIZE_24, "aria-hidden": !0 }), R],
                  })
                : R,
        D = d && null != U ? Z.intl.format(Z.t.EIcwoe, { username: U }) : Z.intl.string(Z.t.UqnlQF),
        k = d && null != o ? Z.intl.string(Z.t["75s2Rq"]) : Z.intl.string(Z.t["62xU4E"]),
        L = d && null != o ? Z.intl.formatToPlainString(Z.t.BCjSZy, { username: o }) : Z.intl.string(Z.t.UqnlQF);
    return (0, n.jsx)("div", {
        className: eb.ws,
        children: (0, n.jsxs)(M.F, {
            component: (0, n.jsxs)("div", {
                className: eb.NG,
                children: [
                    (0, n.jsxs)("div", {
                        className: eb.kc,
                        children: [
                            !O && null != w && (0, n.jsx)(en.eu, { src: w, size: eh._3.SIZE_24, "aria-hidden": !0 }),
                            (0, n.jsx)(u.D, { variant: "heading-lg/semibold", color: "text-strong", children: D }),
                        ],
                    }),
                    (0, n.jsx)(g.E, { variant: "body-sm/medium", color: "text-subtle", children: k }),
                ],
            }),
            children: [
                (0, n.jsxs)(G.Ip, {
                    className: eb.hG,
                    children: [
                        v.length > 0 &&
                            (0, n.jsx)(ev, {
                                label: { type: "aria", text: L },
                                navId: "badge-directory-owned",
                                badges: v,
                                selectedBadgeId: t,
                                onSelectBadge: l,
                                badgeIndicatorIds: B,
                            }),
                        !d &&
                            y.length > 0 &&
                            (0, n.jsx)(ev, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: Z.intl.string(Z.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: y,
                                selectedBadgeId: t,
                                onSelectBadge: l,
                                badgeIndicatorIds: B,
                            }),
                    ],
                }),
                (d || C) &&
                    (0, n.jsx)("div", {
                        className: eb.HO,
                        children: d
                            ? (0, n.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: c,
                                  text: Z.intl.string(Z.t.msyp90),
                              })
                            : (0, n.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: x,
                                  text: Z.intl.string(Z.t["6CLLyH"]),
                              }),
                    }),
            ],
        }),
    });
}
var eI = t(911608),
    eN = t(10583);
function ep(e) {
    let { badge: a, viewerBadge: t } = e,
        l = i.useId(),
        { progress: s, threshold: r, currentArtUrl: d, nextArtUrl: o, helperText: c } = (0, Y.dy)(a, t),
        u = null != c ? { "aria-labelledby": l } : { "aria-label": Z.intl.string(Z.t.Uwhb1l) };
    return (0, n.jsxs)("div", {
        className: eN.NE,
        children: [
            (0, n.jsx)(g.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: Z.intl.string(Z.t["2m/g2c"]),
            }),
            (0, n.jsxs)("div", {
                className: eN.ES,
                children: [
                    null != d &&
                        (0, n.jsx)("img", { className: eN.Tw, src: d, alt: "", "aria-hidden": !0, draggable: !1 }),
                    (0, n.jsxs)("div", {
                        className: eN.Bd,
                        children: [
                            null != c && (0, n.jsx)(g.E, { id: l, variant: "body-sm/medium", children: c }),
                            null != r
                                ? (0, n.jsx)(eI.z, {
                                      value: s?.current ?? 0,
                                      minValue: s?.floor ?? 0,
                                      maxValue: r,
                                      size: "md",
                                      className: eN.hr,
                                      ...u,
                                  })
                                : null != s &&
                                  (0, n.jsx)(eI.z, { isIndeterminate: !0, size: "md", className: eN.hr, ...u }),
                        ],
                    }),
                    null != o &&
                        (0, n.jsx)("img", { className: eN.Tw, src: o, alt: "", "aria-hidden": !0, draggable: !1 }),
                ],
            }),
        ],
    });
}
var ef = t(647729),
    eA = t(873571),
    eE = t(194261),
    eS = t(140735),
    eB = t(836825);
function ew(e) {
    let { badge: a, isViewingOtherUser: t, targetUsername: l, isViewerOnUpgradeableNitro: s = !1 } = e,
        r = i.useId(),
        d = t && null != l;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            d &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(L.c, {}),
                        (0, n.jsx)("div", {
                            className: eB.u4,
                            children: (0, n.jsx)(g.E, {
                                id: r,
                                variant: "body-sm/medium",
                                children: Z.intl.formatToPlainString(Z.t.KyTwIh, { username: l }),
                            }),
                        }),
                    ],
                }),
            (0, n.jsx)("div", {
                className: eB.SV,
                role: "list",
                "aria-label": d ? void 0 : a.name,
                "aria-labelledby": d ? r : void 0,
                children: a.tiers.map((e) => {
                    let i = e.owned,
                        l = !i && a.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        o = (0, j.Vs)({ tier: e, isUnlocked: i, isViewingOtherUser: t, isViewerOnUpgradeableNitro: s });
                    return (0, n.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: O()(eB.zh, l && eB.ZF),
                            children: [
                                null != r &&
                                    (0, n.jsx)("img", {
                                        className: eB.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, n.jsxs)("div", {
                                    className: eB.hI,
                                    children: [
                                        null != d &&
                                            (0, n.jsx)(g.E, {
                                                variant: "body-xs/semibold",
                                                color: i ? "text-default" : "text-muted",
                                                className: eB.nU,
                                                children: d,
                                            }),
                                        "" !== o &&
                                            (0, n.jsxs)(g.E, {
                                                variant: "body-xs/normal",
                                                color: i ? "text-subtle" : "text-muted",
                                                className: eB.nU,
                                                children: [
                                                    !i &&
                                                        (0, n.jsx)(eE.LockIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: eB.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    o,
                                                ],
                                            }),
                                    ],
                                }),
                                (0, n.jsx)(eS.A, { children: Z.intl.string(i ? Z.t.sTFApF : Z.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var eC = t(260981),
    eT = t(540418),
    eR = t(907085),
    eO = t(179820),
    eU = t(954080);
function eD() {
    return (0, n.jsx)($.A, { height: 3, width: 3, "aria-hidden": "true", className: eU.zN });
}
function ek(e) {
    let { segments: a } = e;
    return 0 === a.length
        ? null
        : (0, n.jsx)("div", {
              className: eU.U3,
              children: a.map((e, a) => {
                  let { key: t, node: i } = e;
                  return (0, n.jsxs)("span", { className: eU.Hq, children: [a > 0 && (0, n.jsx)(eD, {}), i] }, t);
              }),
          });
}
function eM(e) {
    let {
            badge: a,
            viewerBadge: t,
            onClose: l,
            isViewingOtherUser: r,
            targetUsername: d,
            displayedUserId: c,
            viewerOwnsBadge: x,
            onViewOwnCatalog: h,
            isUnread: b = !1,
            unlock: y,
            showNewTag: v = !1,
        } = e,
        I = y ?? a,
        N = y ?? t,
        p = (0, j.DW)(I),
        f = (0, s.bG)([z.Ay], () => z.Ay.useReducedMotion),
        [A, E] = i.useState(null),
        S = null != y && A?.unlock === y,
        C = S && A?.isMotionSkipped === !0,
        T = i.useCallback((e) => E(null != y ? { unlock: y, isMotionSkipped: e } : null), [y]),
        R = !f && (null != y ? !S : b),
        $ = !f && S,
        q = i.useMemo(
            () =>
                null != y
                    ? (0, ef.$)({ isLevelUp: null != (0, j.YU)(y, y.previous_acked_tier), isMotionSkipped: C })
                    : void 0,
            [C, y],
        );
    i.useEffect(() => {
        if (!b) return;
        let { previousTier: e, currentTier: a } = (0, eA.VR)(I, I.previous_acked_tier);
        async function t(e) {
            if (null != e)
                try {
                    await (0, H.S4)(e);
                } catch {}
        }
        (t((0, eA.AO)(I, e, !0)), t((0, eA.AO)(I, a, !1)));
    }, [I, b]);
    let { animatedUrl: Q, imageUrl: X } = (0, Y.NC)(I, p, f),
        ee = p?.rarity ?? I.rarity,
        ea =
            (function (e) {
                if (null == e) return null;
                switch (e) {
                    case U.x.COMMON:
                        return {
                            type: { text: Z.intl.string(Z.t.L0K5ci) },
                            variant: "rarity-common",
                            icon: eC.ExperimentalCommonIcon,
                        };
                    case U.x.RARE:
                        return {
                            type: { text: Z.intl.string(Z.t["sTx/5z"]) },
                            variant: "rarity-rare",
                            icon: eT.ExperimentalRareIcon,
                        };
                    case U.x.EPIC:
                        return {
                            type: { text: Z.intl.string(Z.t.RD8RiN) },
                            variant: "rarity-epic",
                            icon: eR.ExperimentalEpicIcon,
                        };
                    case U.x.MYTHIC:
                        return {
                            type: { text: Z.intl.string(Z.t.vqc1ol) },
                            variant: "rarity-mythic",
                            icon: eO.ExperimentalMythicIcon,
                        };
                    default:
                        return null;
                }
            })(ee) ?? void 0,
        et = em[I.badge_id],
        { isNitro: en, eyebrow: ei, displayName: el } = (0, Y.iC)(I, p),
        es = (0, Y.f)(I),
        er = (I.tiers?.length ?? 0) > 0,
        ed = (function (e) {
            let [a, t] = i.useState(J),
                [n, l] = i.useState(e);
            return (e !== n && (l(e), t(J())), a);
        })(I.badge_id),
        eo = (0, Y.HA)(I, ed),
        ec = (0, K.uJ)(I.info_label) ? void 0 : I.info_label,
        eu = I.owned && ee !== U.x.COMMON && null != ea,
        eg = [];
    (null != ec &&
        eg.push({
            key: "info",
            node: (0, n.jsx)(g.E, {
                tag: "span",
                variant: "body-xs/medium",
                color: "text-subtle",
                className: eU.$L,
                children: ec,
            }),
        }),
        eg.push({
            key: "status",
            node: (0, n.jsx)(g.E, {
                tag: "span",
                variant: "body-xs/medium",
                color: "text-subtle",
                className: eU.$L,
                children: eo,
            }),
        }),
        eu && eg.push({ key: "rarity", node: (0, n.jsx)(D.E, { ...ea }) }));
    let eh = _.default.getCurrentUser()?.premiumType,
        eb = (0, Y.Rt)(I, eh),
        ey = (0, Y.JV)({ badge: I, viewerBadge: N, isViewerOnUpgradeableNitro: eb }),
        ev = i.useCallback(() => {
            null != et &&
                (w({
                    actionName: "primary_badge_action_clicked",
                    badge: I,
                    displayedUserId: c,
                    isSociallyNavigated: r,
                }),
                l(),
                F.A.popAll(),
                et.ctaAction());
        }, [I, c, r, et, l]),
        ej = (0, Y.eJ)({ badge: I, isViewingOtherUser: r, viewerOwnsBadge: x })
            ? (0, n.jsx)(k.w, { type: "info", message: Z.intl.format(Z.t.vFekBs, { onViewBadges: h }), role: "none" })
            : null,
        eI = (function (e) {
            let { badge: a, isViewingOtherUser: t } = e,
                n = (0, s.bG)([W.A], () => W.A.hasConsented(B.YAq.PERSONALIZATION));
            return (0, j.Jn)(a.badge_id) && !t && !n;
        })({ badge: I, isViewingOtherUser: r }),
        eN = (function (e) {
            let { badge: a, viewerBadge: t, isViewingOtherUser: n } = e,
                i = (0, s.bG)([W.A], () => W.A.hasConsented(B.YAq.PERSONALIZATION)),
                l = t ?? a,
                r = null != (0, j.YU)(l, l.next_tier),
                d = (0, j.Jn)(a.badge_id) && !i;
            return !n && l.owned && r && !d;
        })({ badge: I, viewerBadge: N, isViewingOtherUser: r }),
        eE = !(0, K.uJ)(ey),
        eS = eN || eE || er,
        eB = r ? I : (N ?? I);
    return (0, n.jsx)(M.F, {
        forceLevel: 2,
        children: (0, n.jsxs)("div", {
            id: ex,
            role: "tabpanel",
            "aria-labelledby": e_(I.badge_id),
            className: eU.SV,
            style: q,
            children: [
                (0, n.jsx)("div", { className: eU.Gw, children: (0, n.jsx)(o.J, { onClick: l, size: "sm" }) }),
                (0, n.jsxs)(G.d_, {
                    className: O()(eU.C9, R && eU.uT, $ && eU.CY),
                    children: [
                        (0, n.jsx)("div", {
                            className: eU.Rm,
                            children: v && (0, n.jsx)(D.E, { type: "new", variant: "primary" }),
                        }),
                        null != y
                            ? (0, n.jsx)(
                                  ef.A,
                                  { badge: y, previousTierKey: y.previous_acked_tier, canStart: !0, onStart: T },
                                  `${y.badge_id}:${y.current_tier}`,
                              )
                            : null != X &&
                              (0, n.jsx)("img", {
                                  className: O()(eU.y2, null != Q && en && eU.Zl),
                                  src: X,
                                  alt: "",
                                  "aria-hidden": !0,
                                  crossOrigin: b && null == Q ? "anonymous" : void 0,
                                  draggable: !1,
                              }),
                        (0, n.jsxs)("div", {
                            className: eU.OU,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: eU.cQ,
                                    children: [
                                        (null != y || b) &&
                                            !f &&
                                            (0, n.jsx)(u.D, {
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                className: O()(eU.BI, S && eU.Dp),
                                                "aria-hidden": !0,
                                                children: (0, j.kD)(I, I.previous_acked_tier),
                                            }),
                                        (0, n.jsxs)("div", {
                                            className: eU.nj,
                                            children: [
                                                (0, n.jsxs)(u.D, {
                                                    variant: en ? "nitro-sm" : "display-sm",
                                                    color: "text-strong",
                                                    className: O()(eU._r, en && eU.ve),
                                                    children: [
                                                        null != ei &&
                                                            (0, n.jsx)(g.E, {
                                                                tag: "span",
                                                                variant: "body-sm/medium",
                                                                color: "text-subtle",
                                                                className: eU.$g,
                                                                children: ei,
                                                            }),
                                                        el,
                                                    ],
                                                }),
                                                (0, n.jsx)(ek, { segments: eg }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: eU.oA,
                                    children: [
                                        eI &&
                                            (0, n.jsx)(k.w, {
                                                type: "info",
                                                message: Z.intl.format(Z.t.Zh44ni, {
                                                    onGoToSettings: () =>
                                                        (0, V.openUserSettings)(P.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                                }),
                                                role: "none",
                                            }),
                                        eS &&
                                            (0, n.jsxs)("div", {
                                                className: eU.d9,
                                                children: [
                                                    eN &&
                                                        (0, n.jsxs)(n.Fragment, {
                                                            children: [
                                                                (0, n.jsx)(ep, { badge: I, viewerBadge: N }),
                                                                (0, n.jsx)(L.c, {}),
                                                            ],
                                                        }),
                                                    eE &&
                                                        (0, n.jsxs)("div", {
                                                            className: O()(eU.E4, !er && eU.H),
                                                            children: [
                                                                (0, n.jsxs)("div", {
                                                                    className: eU.jv,
                                                                    children: [
                                                                        es &&
                                                                            (0, n.jsx)(g.E, {
                                                                                variant: "body-xs/medium",
                                                                                color: "text-subtle",
                                                                                className: eU.c$,
                                                                                children: Z.intl.string(Z.t["/Gmn3f"]),
                                                                            }),
                                                                        (0, n.jsx)(g.E, {
                                                                            variant: "body-sm/medium",
                                                                            color: "text-default",
                                                                            className: eU.ij,
                                                                            children: ey,
                                                                        }),
                                                                    ],
                                                                }),
                                                                null != et &&
                                                                    (0, n.jsx)(m.$, {
                                                                        variant: (0, Y.Vg)({
                                                                            isNitro: en,
                                                                            isViewerOnUpgradeableNitro: eb,
                                                                            viewerOwnsBadge: x,
                                                                        }),
                                                                        size: "sm",
                                                                        onClick: ev,
                                                                        text: et.ctaLabel({
                                                                            owned: x,
                                                                            isViewerOnUpgradeableNitro: eb,
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                    er &&
                                                        (0, n.jsx)("div", {
                                                            className: eU.cJ,
                                                            children: (0, n.jsx)(ew, {
                                                                badge: eB,
                                                                isViewingOtherUser: r,
                                                                targetUsername: d,
                                                                isViewerOnUpgradeableNitro: eb,
                                                            }),
                                                        }),
                                                    null != ej && (0, n.jsx)("div", { className: eU.Z6, children: ej }),
                                                ],
                                            }),
                                        !eS && ej,
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
var eG = t(470739);
function eL(e) {
    let {
            transitionState: a,
            onClose: t,
            initialBadgeId: v,
            targetUserId: I,
            targetUsername: N,
            viewingCurrentUserBadges: p,
        } = e,
        S = (0, s.bG)([_.default], () => _.default.getCurrentUser()?.id),
        B = null == I || I === S,
        R = !B && null != I && !0 !== p,
        O = R ? I : S,
        U = null != O ? `viewed_user:${R ? "other" : "self"}` : void 0,
        [D, k] = i.useState(v ?? null),
        M = (0, s.yK)([A.Ay], () => (null != O ? A.Ay.getBadges(O) : []), [O]),
        G = (0, s.bG)([A.Ay], () => null != O && A.Ay.hasCatalogFor(O), [O]),
        L = (0, s.bG)([A.Ay], () => A.Ay.hasCatalogFetchErrorFor(O), [O]),
        F = (0, s.bG)([A.Ay], () => null != O && !A.Ay.isCatalogStaleFor(O), [O]),
        z = !R && M.some((e) => e.owned && !0 === e.has_updates),
        $ = (0, E.e)({ location: "BadgeDirectoryModal", hasUnread: z });
    (i.useEffect(() => {
        null != O && (!A.Ay.hasCatalogFor(O) || A.Ay.isCatalogStaleFor(O)) && (0, y.RS)(O, { isAutomatic: !0 });
        let e = R ? S : I;
        !B && null != e && (!A.Ay.hasCatalogFor(e) || A.Ay.isCatalogStaleFor(e)) && (0, y.RS)(e, { isAutomatic: !0 });
    }, [O, B, R, S, I]),
        i.useEffect(() => {
            null != U && x.A.increment({ name: l.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [U] });
        }, [U]));
    let P = i.useMemo(() => {
            let { earnable: e, owned: a } = (0, j.in)(M);
            if (R) return a[0]?.badge_id ?? null;
            let t = $ ? a.find((e) => !0 === e.has_updates) : void 0;
            return t?.badge_id ?? a[0]?.badge_id ?? e[0]?.badge_id ?? null;
        }, [M, $, R]),
        V = null != D && null != O ? A.Ay.getBadgeById(D, O) : void 0,
        H = null != P && null != O ? A.Ay.getBadgeById(P, O) : void 0,
        K = V ?? H,
        Y = !G && !L,
        q = !G && L,
        J = !R;
    i.useEffect(() => {
        q && null != U && x.A.increment({ name: l.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [U] });
    }, [q, U]);
    let W = (0, s.bG)([A.Ay], () => (null != S && null != K ? A.Ay.getBadgeById(K.badge_id, S) : void 0), [K, S]),
        Q = W?.owned ?? !1,
        X = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, eG.openBadgeDirectoryModal)({ ...e, stackingBehavior: "replace" }).then(() => {
                    t();
                });
            },
            [t],
        ),
        ee = i.useCallback(() => {
            null != S &&
                null != I &&
                (w({ actionName: "view_your_badges_pressed", badge: K, displayedUserId: O, isSociallyNavigated: R }),
                X({ targetUserId: I, targetUsername: N, viewingCurrentUserBadges: !0 }));
        }, [S, O, R, K, X, I, N]),
        ea = i.useCallback(() => {
            null != O && (0, y.RS)(O, { isRetry: !0 });
        }, [O]),
        et = i.useCallback(() => {
            (w({ actionName: "badge_directory_closed", badge: K, displayedUserId: O, isSociallyNavigated: R }), t());
        }, [O, R, t, K]),
        en = i.useCallback(() => {
            null != S &&
                (w({
                    actionName: "customize_your_badges_pressed",
                    badge: K,
                    displayedUserId: O,
                    isSociallyNavigated: R,
                }),
                et(),
                C.A.setState({ isOpen: !0 }),
                (0, b.kN)(S) || (0, h.openUserProfileModal)({ userId: S }));
        }, [S, O, et, R, K]),
        ei = K?.badge_id;
    !(function (e) {
        let { badgeId: a, enabled: t } = e;
        i.useEffect(() => {
            null != a && t && T.has(a) && (0, y.PV)(a);
        }, [a, t]);
    })({ badgeId: ei, enabled: J });
    let el = $ && !R && K?.has_updates === !0,
        es = (0, s.bG)([f], () => J && null != ei && T.has(ei) && !f.getSeenBadgeIndicators().has(ei), [ei, J]),
        [er, ed] = i.useState(null);
    er?.badgeId !== ei && ed({ badgeId: ei, hadNewIndicator: es });
    let eo = null != er && er.badgeId === ei && er.hadNewIndicator,
        ec = (0, E.e)({ location: "BadgeDirectoryModal", hasUnread: eo }) && eo,
        eu = a === d.ip.ENTERED && (F || L),
        [eg, em] = i.useState(null);
    return (
        null != eg && eg.badge_id !== ei ? em(null) : null == eg && el && eu && null != K && em({ ...K }),
        i.useEffect(() => {
            null != eg && (k(eg.badge_id), (0, y.zd)(eg.badge_id));
        }, [eg]),
        i.useEffect(() => {
            null != K && w({ actionName: "badge_detail_viewed", badge: K, displayedUserId: O, isSociallyNavigated: R });
        }, [ei, O, R]),
        (0, n.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": Z.intl.string(Z.t.PEjP4L),
            transitionState: a,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: eb.CR,
            children: (0, n.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: eb.jE,
                children: [
                    (Y || q || null == K) &&
                        (0, n.jsx)("div", { className: eb.b, children: (0, n.jsx)(o.J, { onClick: et, size: "sm" }) }),
                    Y
                        ? (0, n.jsx)("div", { className: eb.Lq, children: (0, n.jsx)(c.y, {}) })
                        : q
                          ? (0, n.jsxs)("div", {
                                className: eb.IU,
                                children: [
                                    (0, n.jsx)(u.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: Z.intl.string(Z.t.iufib1),
                                    }),
                                    (0, n.jsx)(g.E, {
                                        variant: "body-sm/medium",
                                        color: "text-subtle",
                                        className: eb.TQ,
                                        children: Z.intl.string(Z.t.eAn6z2),
                                    }),
                                    (0, n.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: ea,
                                        text: Z.intl.string(Z.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(ej, {
                                        selectedBadgeId: K?.badge_id ?? null,
                                        onSelectBadge: k,
                                        displayedUserId: O,
                                        isViewingOtherUser: R,
                                        targetUsername: N,
                                        onViewOwnCatalog: ee,
                                        onCustomizeBadges: en,
                                        showBadgeIndicators: J,
                                    }),
                                    null != K &&
                                        (0, n.jsx)(eM, {
                                            badge: K,
                                            viewerBadge: W,
                                            onClose: et,
                                            isViewingOtherUser: R,
                                            targetUsername: N,
                                            displayedUserId: O,
                                            viewerOwnsBadge: Q,
                                            onViewOwnCatalog: ee,
                                            isUnread: el,
                                            unlock: eg,
                                            showNewTag: ec,
                                        }),
                                ],
                            }),
                ],
            }),
        })
    );
}
