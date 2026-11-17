t.d(a, { default: () => eL });
var n = t(477900),
    l = t(582128),
    i = t(731738),
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
class f extends s.Ay.PersistedStore {
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
let p = new f(v.h, {
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
            isSociallyNavigated: l,
            hasUnreadIndicator: i,
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
        is_socially_navigated: l,
        total_badges_owned: u,
        has_unread_indicator: i,
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
    G = t(707554),
    M = t(95362),
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
    el = t(643056),
    ei = t(486020),
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
    let { badge: a, isSelected: t, onSelect: i, itemId: s, showBadgeIndicator: r } = e,
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
        x = l.useRef(null);
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
            (x.current?.focus(), i());
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
    let { label: a, navId: t, badges: l, selectedBadgeId: i, onSelectBadge: s, badgeIndicatorIds: r } = e,
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
                            children: l.map((e, a) => {
                                let t = e.badge_id === i;
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
            onSelectBadge: i,
            displayedUserId: r,
            isViewingOtherUser: d,
            targetUsername: o,
            onViewOwnCatalog: c,
            onCustomizeBadges: x,
            showBadgeIndicators: h,
        } = e,
        b = (0, s.yK)([A.Ay], () => (null != r ? A.Ay.getBadges(r) : []), [r]),
        { earnable: y, owned: v } = l.useMemo(() => (0, j.in)(b), [b]),
        I = l.useMemo(() => [...v, ...y], [v, y]),
        { badgeIndicatorIds: N } = (function (e) {
            let { badges: a, enabled: t } = e,
                n = (0, s.bG)([p], () => p.getSeenBadgeIndicators());
            return {
                badgeIndicatorIds: l.useMemo(
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
        f = l.useMemo(() => new Set(h ? I.filter((e) => !0 === e.has_updates).map((e) => e.badge_id) : []), [h, I]),
        S = (0, E.e)({ location: "BadgeDirectoryPanel", hasUnread: f.size > 0 }),
        B = l.useMemo(() => (S ? new Set([...N, ...f]) : N), [S, N, f]),
        w = (function (e, a) {
            let t = (0, s.bG)([_.default], () => (null != e ? _.default.getUser(e) : void 0), [e]);
            if (null != t && a)
                return (0, ei.ku)({ id: t.id, avatar: t.avatar, discriminator: t.discriminator }, !1, 48);
        })(r, d),
        C = (0, el.d)({ location: "BadgeDirectoryPanel" }),
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
        children: (0, n.jsxs)(G.F, {
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
                (0, n.jsxs)(M.Ip, {
                    className: eb.hG,
                    children: [
                        v.length > 0 &&
                            (0, n.jsx)(ev, {
                                label: { type: "aria", text: L },
                                navId: "badge-directory-owned",
                                badges: v,
                                selectedBadgeId: t,
                                onSelectBadge: i,
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
                                onSelectBadge: i,
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
function ef(e) {
    let { badge: a, viewerBadge: t } = e,
        i = l.useId(),
        { progress: s, threshold: r, currentArtUrl: d, nextArtUrl: o, helperText: c } = (0, Y.dy)(a, t),
        u = null != c ? { "aria-labelledby": i } : { "aria-label": Z.intl.string(Z.t.Uwhb1l) };
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
                            null != c && (0, n.jsx)(g.E, { id: i, variant: "body-sm/medium", children: c }),
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
var ep = t(647729),
    eA = t(873571),
    eE = t(194261),
    eS = t(140735),
    eB = t(836825);
function ew(e) {
    let { badge: a, isViewingOtherUser: t, targetUsername: i, isViewerOnUpgradeableNitro: s = !1 } = e,
        r = l.useId(),
        d = t && null != i;
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
                                children: Z.intl.formatToPlainString(Z.t.KyTwIh, { username: i }),
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
                    let l = e.owned,
                        i = !l && a.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        o = (0, j.Vs)({ tier: e, isUnlocked: l, isViewingOtherUser: t, isViewerOnUpgradeableNitro: s });
                    return (0, n.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: O()(eB.zh, i && eB.ZF),
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
                                                color: l ? "text-default" : "text-muted",
                                                className: eB.nU,
                                                children: d,
                                            }),
                                        "" !== o &&
                                            (0, n.jsxs)(g.E, {
                                                variant: "body-xs/normal",
                                                color: l ? "text-subtle" : "text-muted",
                                                className: eB.nU,
                                                children: [
                                                    !l &&
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
                                (0, n.jsx)(eS.A, { children: Z.intl.string(l ? Z.t.sTFApF : Z.t.uHtDcT) }),
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
                  let { key: t, node: l } = e;
                  return (0, n.jsxs)("span", { className: eU.Hq, children: [a > 0 && (0, n.jsx)(eD, {}), l] }, t);
              }),
          });
}
function eG(e) {
    let {
            badge: a,
            viewerBadge: t,
            onClose: i,
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
        f = (0, j.DW)(I),
        p = (0, s.bG)([z.Ay], () => z.Ay.useReducedMotion),
        [A, E] = l.useState(null),
        S = null != y && A === y,
        C = l.useCallback(() => E(y ?? null), [y]),
        T = !p && (null != y ? !S : b),
        R = !p && S,
        $ = l.useMemo(
            () => (null != y ? (0, ep.$)({ isLevelUp: null != (0, j.YU)(y, y.previous_acked_tier) }) : void 0),
            [y],
        );
    l.useEffect(() => {
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
    let { animatedUrl: q, imageUrl: Q } = (0, Y.NC)(I, f, p),
        X = f?.rarity ?? I.rarity,
        ee =
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
            })(X) ?? void 0,
        ea = em[I.badge_id],
        { isNitro: et, eyebrow: en, displayName: el } = (0, Y.iC)(I, f),
        ei = (0, Y.f)(I),
        es = (I.tiers?.length ?? 0) > 0,
        er = (function (e) {
            let [a, t] = l.useState(J),
                [n, i] = l.useState(e);
            return (e !== n && (i(e), t(J())), a);
        })(I.badge_id),
        ed = (0, Y.HA)(I, er),
        eo = (0, K.uJ)(I.info_label) ? void 0 : I.info_label,
        ec = I.owned && X !== U.x.COMMON && null != ee,
        eu = [];
    (null != eo &&
        eu.push({
            key: "info",
            node: (0, n.jsx)(g.E, {
                tag: "span",
                variant: "body-xs/medium",
                color: "text-subtle",
                className: eU.$L,
                children: eo,
            }),
        }),
        eu.push({
            key: "status",
            node: (0, n.jsx)(g.E, {
                tag: "span",
                variant: "body-xs/medium",
                color: "text-subtle",
                className: eU.$L,
                children: ed,
            }),
        }),
        ec && eu.push({ key: "rarity", node: (0, n.jsx)(D.E, { ...ee }) }));
    let eg = _.default.getCurrentUser()?.premiumType,
        eh = (0, Y.Rt)(I, eg),
        eb = (0, Y.JV)({ badge: I, viewerBadge: N, isViewerOnUpgradeableNitro: eh }),
        ey = l.useCallback(() => {
            null != ea &&
                (w({
                    actionName: "primary_badge_action_clicked",
                    badge: I,
                    displayedUserId: c,
                    isSociallyNavigated: r,
                }),
                i(),
                F.A.popAll(),
                ea.ctaAction());
        }, [I, c, r, ea, i]),
        ev = (0, Y.eJ)({ badge: I, isViewingOtherUser: r, viewerOwnsBadge: x })
            ? (0, n.jsx)(k.w, { type: "info", message: Z.intl.format(Z.t.vFekBs, { onViewBadges: h }), role: "none" })
            : null,
        ej = (function (e) {
            let { badge: a, isViewingOtherUser: t } = e,
                n = (0, s.bG)([W.A], () => W.A.hasConsented(B.YAq.PERSONALIZATION));
            return (0, j.Jn)(a.badge_id) && !t && !n;
        })({ badge: I, isViewingOtherUser: r }),
        eI = (function (e) {
            let { badge: a, viewerBadge: t, isViewingOtherUser: n } = e,
                l = (0, s.bG)([W.A], () => W.A.hasConsented(B.YAq.PERSONALIZATION)),
                i = t ?? a,
                r = null != (0, j.YU)(i, i.next_tier),
                d = (0, j.Jn)(a.badge_id) && !l;
            return !n && i.owned && r && !d;
        })({ badge: I, viewerBadge: N, isViewingOtherUser: r }),
        eN = !(0, K.uJ)(eb),
        eE = eI || eN || es,
        eS = r ? I : (N ?? I);
    return (0, n.jsx)(G.F, {
        forceLevel: 2,
        children: (0, n.jsxs)("div", {
            id: ex,
            role: "tabpanel",
            "aria-labelledby": e_(I.badge_id),
            className: eU.SV,
            style: $,
            children: [
                (0, n.jsx)("div", { className: eU.Gw, children: (0, n.jsx)(o.J, { onClick: i, size: "sm" }) }),
                (0, n.jsxs)(M.d_, {
                    className: O()(eU.C9, T && eU.uT, R && eU.CY),
                    children: [
                        (0, n.jsx)("div", {
                            className: eU.Rm,
                            children: v && (0, n.jsx)(D.E, { type: "new", variant: "primary" }),
                        }),
                        null != y
                            ? (0, n.jsx)(
                                  ep.A,
                                  { badge: y, previousTierKey: y.previous_acked_tier, canStart: !0, onStart: C },
                                  `${y.badge_id}:${y.current_tier}`,
                              )
                            : null != Q &&
                              (0, n.jsx)("img", {
                                  className: O()(eU.y2, null != q && et && eU.Zl),
                                  src: Q,
                                  alt: "",
                                  "aria-hidden": !0,
                                  crossOrigin: b ? "anonymous" : void 0,
                                  draggable: !1,
                              }),
                        (0, n.jsxs)("div", {
                            className: eU.OU,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: eU.cQ,
                                    children: [
                                        (null != y || b) &&
                                            !p &&
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
                                                    variant: et ? "nitro-sm" : "display-sm",
                                                    color: "text-strong",
                                                    className: O()(eU._r, et && eU.ve),
                                                    children: [
                                                        null != en &&
                                                            (0, n.jsx)(g.E, {
                                                                tag: "span",
                                                                variant: "body-sm/medium",
                                                                color: "text-subtle",
                                                                className: eU.$g,
                                                                children: en,
                                                            }),
                                                        el,
                                                    ],
                                                }),
                                                (0, n.jsx)(ek, { segments: eu }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: eU.oA,
                                    children: [
                                        ej &&
                                            (0, n.jsx)(k.w, {
                                                type: "info",
                                                message: Z.intl.format(Z.t.Zh44ni, {
                                                    onGoToSettings: () =>
                                                        (0, V.openUserSettings)(P.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                                }),
                                                role: "none",
                                            }),
                                        eE &&
                                            (0, n.jsxs)("div", {
                                                className: eU.d9,
                                                children: [
                                                    eI &&
                                                        (0, n.jsxs)(n.Fragment, {
                                                            children: [
                                                                (0, n.jsx)(ef, { badge: I, viewerBadge: N }),
                                                                (0, n.jsx)(L.c, {}),
                                                            ],
                                                        }),
                                                    eN &&
                                                        (0, n.jsxs)("div", {
                                                            className: O()(eU.E4, !es && eU.H),
                                                            children: [
                                                                (0, n.jsxs)("div", {
                                                                    className: eU.jv,
                                                                    children: [
                                                                        ei &&
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
                                                                            children: eb,
                                                                        }),
                                                                    ],
                                                                }),
                                                                null != ea &&
                                                                    (0, n.jsx)(m.$, {
                                                                        variant: (0, Y.Vg)({
                                                                            isNitro: et,
                                                                            isViewerOnUpgradeableNitro: eh,
                                                                            viewerOwnsBadge: x,
                                                                        }),
                                                                        size: "sm",
                                                                        onClick: ey,
                                                                        text: ea.ctaLabel({
                                                                            owned: x,
                                                                            isViewerOnUpgradeableNitro: eh,
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                    es &&
                                                        (0, n.jsx)("div", {
                                                            className: eU.cJ,
                                                            children: (0, n.jsx)(ew, {
                                                                badge: eS,
                                                                isViewingOtherUser: r,
                                                                targetUsername: d,
                                                                isViewerOnUpgradeableNitro: eh,
                                                            }),
                                                        }),
                                                    null != ev && (0, n.jsx)("div", { className: eU.Z6, children: ev }),
                                                ],
                                            }),
                                        !eE && ev,
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
var eM = t(470739);
function eL(e) {
    let {
            transitionState: a,
            onClose: t,
            initialBadgeId: v,
            targetUserId: I,
            targetUsername: N,
            viewingCurrentUserBadges: f,
        } = e,
        S = (0, s.bG)([_.default], () => _.default.getCurrentUser()?.id),
        B = null == I || I === S,
        R = !B && null != I && !0 !== f,
        O = R ? I : S,
        U = null != O ? `viewed_user:${R ? "other" : "self"}` : void 0,
        [D, k] = l.useState(v ?? null),
        G = (0, s.yK)([A.Ay], () => (null != O ? A.Ay.getBadges(O) : []), [O]),
        M = (0, s.bG)([A.Ay], () => null != O && A.Ay.hasCatalogFor(O), [O]),
        L = (0, s.bG)([A.Ay], () => A.Ay.hasCatalogFetchErrorFor(O), [O]),
        F = (0, s.bG)([A.Ay], () => null != O && !A.Ay.isCatalogStaleFor(O), [O]),
        z = !R && G.some((e) => e.owned && !0 === e.has_updates),
        $ = (0, E.e)({ location: "BadgeDirectoryModal", hasUnread: z });
    (l.useEffect(() => {
        null != O && (!A.Ay.hasCatalogFor(O) || A.Ay.isCatalogStaleFor(O)) && (0, y.RS)(O, { isAutomatic: !0 });
        let e = R ? S : I;
        !B && null != e && (!A.Ay.hasCatalogFor(e) || A.Ay.isCatalogStaleFor(e)) && (0, y.RS)(e, { isAutomatic: !0 });
    }, [O, B, R, S, I]),
        l.useEffect(() => {
            null != U && x.A.increment({ name: i.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [U] });
        }, [U]));
    let P = l.useMemo(() => {
            let { earnable: e, owned: a } = (0, j.in)(G);
            if (R) return a[0]?.badge_id ?? null;
            let t = $ ? a.find((e) => !0 === e.has_updates) : void 0;
            return t?.badge_id ?? a[0]?.badge_id ?? e[0]?.badge_id ?? null;
        }, [G, $, R]),
        V = null != D && null != O ? A.Ay.getBadgeById(D, O) : void 0,
        H = null != P && null != O ? A.Ay.getBadgeById(P, O) : void 0,
        K = V ?? H,
        Y = !M && !L,
        q = !M && L,
        J = !R;
    l.useEffect(() => {
        q && null != U && x.A.increment({ name: i.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [U] });
    }, [q, U]);
    let W = (0, s.bG)([A.Ay], () => (null != S && null != K ? A.Ay.getBadgeById(K.badge_id, S) : void 0), [K, S]),
        Q = W?.owned ?? !1,
        X = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, eM.openBadgeDirectoryModal)({ ...e, stackingBehavior: "replace" }).then(() => {
                    t();
                });
            },
            [t],
        ),
        ee = l.useCallback(() => {
            null != S &&
                null != I &&
                (w({ actionName: "view_your_badges_pressed", badge: K, displayedUserId: O, isSociallyNavigated: R }),
                X({ targetUserId: I, targetUsername: N, viewingCurrentUserBadges: !0 }));
        }, [S, O, R, K, X, I, N]),
        ea = l.useCallback(() => {
            null != O && (0, y.RS)(O, { isRetry: !0 });
        }, [O]),
        et = l.useCallback(() => {
            (w({ actionName: "badge_directory_closed", badge: K, displayedUserId: O, isSociallyNavigated: R }), t());
        }, [O, R, t, K]),
        en = l.useCallback(() => {
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
        el = K?.badge_id;
    !(function (e) {
        let { badgeId: a, enabled: t } = e;
        l.useEffect(() => {
            null != a && t && T.has(a) && (0, y.PV)(a);
        }, [a, t]);
    })({ badgeId: el, enabled: J });
    let ei = $ && !R && K?.has_updates === !0,
        es = (0, s.bG)([p], () => J && null != el && T.has(el) && !p.getSeenBadgeIndicators().has(el), [el, J]),
        [er, ed] = l.useState(null);
    er?.badgeId !== el && ed({ badgeId: el, hadNewIndicator: es });
    let eo = null != er && er.badgeId === el && er.hadNewIndicator,
        ec = (0, E.e)({ location: "BadgeDirectoryModal", hasUnread: eo }) && eo,
        eu = a === d.ip.ENTERED && (F || L),
        [eg, em] = l.useState(null);
    return (
        null != eg && eg.badge_id !== el ? em(null) : null == eg && ei && eu && null != K && em({ ...K }),
        l.useEffect(() => {
            null != eg && (k(eg.badge_id), (0, y.zd)(eg.badge_id));
        }, [eg]),
        l.useEffect(() => {
            null != K && w({ actionName: "badge_detail_viewed", badge: K, displayedUserId: O, isSociallyNavigated: R });
        }, [el, O, R]),
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
                                        (0, n.jsx)(eG, {
                                            badge: K,
                                            viewerBadge: W,
                                            onClose: et,
                                            isViewingOtherUser: R,
                                            targetUsername: N,
                                            displayedUserId: O,
                                            viewerOwnsBadge: Q,
                                            onViewOwnCatalog: ee,
                                            isUnread: ei,
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
