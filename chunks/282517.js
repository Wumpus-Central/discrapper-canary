a.d(t, { default: () => eX });
var l = a(477900),
    n = a(582128),
    i = a(731738),
    s = a(855986),
    r = a(935462),
    d = a(231723),
    o = a(815021),
    c = a(289873),
    u = a(534514),
    g = a(834730),
    m = a(821609),
    _ = a(913379),
    x = a(702476),
    b = a(403777),
    h = a(287809),
    y = a(682618),
    v = a(73153),
    p = a(988341);
let f = { seenBadgeIndicatorIds: new Set() };
function N(e) {
    if (f.seenBadgeIndicatorIds.has(e)) return !1;
    f = { ...f, seenBadgeIndicatorIds: new Set([...f.seenBadgeIndicatorIds, e]) };
}
class j extends s.Ay.PersistedStore {
    static displayName = "BadgeDirectorySeenStore";
    static persistKey = "BadgeDirectorySeenStore";
    initialize(e) {
        f = { seenBadgeIndicatorIds: new Set(e?.seenBadgeIndicatorIds ?? []) };
    }
    getState() {
        return { seenBadgeIndicatorIds: Array.from(f.seenBadgeIndicatorIds) };
    }
    getSeenBadgeIndicators() {
        return f.seenBadgeIndicatorIds;
    }
}
let I = new j(v.h, {
    BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN: function (e) {
        let { badgeId: t } = e;
        return N(t);
    },
    BADGE_ACK_SUCCESS: function (e) {
        let { badgeId: t } = e;
        return !!(0, p.HW)(t) && N(t);
    },
});
var E = a(982240),
    A = a(620143),
    S = a(129230),
    w = a(652215);
function T(e) {
    let {
            actionName: t,
            badge: a,
            displayedUserId: l,
            isSociallyNavigated: n,
            hasUnreadIndicator: i,
            source: s,
            surface: r,
        } = e,
        d = h.default.getCurrentUser()?.id,
        o = null != a && null != d ? E.Ay.getBadgeById(a.badge_id, d) : void 0,
        c = null != a && null != d ? E.Ay.getRemainingToNextTier(a.badge_id, d) : void 0,
        u = null != l ? E.Ay.getBadges(l).filter((e) => e.owned).length : void 0;
    S.default.track(w.HAw.BADGE_DIRECTORY_ACTION, {
        badge_action: t,
        badge_id: a?.badge_id,
        badge_tier: null != a ? ((a.owned ? a.current_tier : a.next_tier) ?? a.tiers?.[0]?.key) : void 0,
        badge_owner_id: l,
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
let B = p.sC;
a(321073);
var R = a(503698),
    U = a.n(R),
    O = a(536001),
    k = a(805251),
    D = a(683071),
    M = a(707554),
    F = a(95362),
    G = a(404778),
    L = a(136969),
    $ = a(775602),
    P = a(640708),
    z = a(780964),
    H = a(766075),
    q = a(515718),
    V = a(240248),
    Y = a(70283),
    K = a(731309),
    Z = a(682901),
    J = a(792996);
function W(e, t, a) {
    let l = a ? void 0 : (t?.complex_icon_animated_url ?? e.complex_icon_animated_url),
        n = l ?? t?.complex_icon_static_url ?? e.complex_icon_static_url ?? t?.simple_icon_url ?? e.simple_icon_url;
    return { animatedUrl: l, imageUrl: n };
}
function Q(e) {
    return (0, K.ie)(e.badge_id) && !e.is_earnable && e.badge_id !== Y.$.STAFF;
}
let X = [J.t["6zFA/T"], J.t.wzZHKl, J.t["+ED/nf"]];
function ee() {
    let e = Math.floor(Math.random() * X.length);
    return J.intl.string(X[e]);
}
var et = a(153488),
    ea = a(837381),
    el = a(116903),
    en = a(741918),
    ei = a(939249),
    es = a(97808),
    er = a(643056),
    ed = a(486020),
    eo = a(696292),
    ec = a(975807),
    eu = a(990820),
    eg = a(216934),
    em = a(976860),
    e_ = a(758836);
let ex = {
        [Y.$.STAFF]: {
            ctaLabel: () => J.intl.string(J.t.q7A8hP),
            ctaAction: () => (0, ec.A)("https://discord.com/careers"),
        },
        [Y.$.PREMIUM_TENURE]: {
            ctaLabel: (e) => {
                let { owned: t, isViewerOnUpgradeableNitro: a } = e;
                return !0 === a ? J.intl.string(J.t.uKFeS1) : t ? J.intl.string(J.t.xGjjkd) : J.intl.string(J.t.BTxm69);
            },
            ctaAction: () => (0, em.pX)(w.BVt.NITRO_HOME),
        },
        [Y.$.GUILD_BOOSTER]: {
            ctaLabel: (e) => {
                let { owned: t } = e;
                return t ? J.intl.string(J.t.VMvz3m) : J.intl.string(J.t.xFVZeU);
            },
            ctaAction: () => (0, H.openUserSettings)(z.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
        },
        [Y.$.ORB_PROFILE]: {
            ctaLabel: () => J.intl.string(J.t.fG3RIg),
            ctaAction: () => (0, em.pX)(w.BVt.COLLECTIBLES_SHOP_WITH_TAB(e_.G2.ORBS)),
        },
        [Y.$.QUEST_COMPLETED]: {
            ctaLabel: () => J.intl.string(J.t.swICIT),
            ctaAction: () => (0, eg.m)({ fromContent: eo.u.QUEST_BADGE }),
        },
        [Y.$.GIFTING]: {
            ctaLabel: () => J.intl.string(J.t["nUA/JW"]),
            ctaAction: () => (0, eu.A)({ giftingOrigin: Z.vQ.BADGE_DIRECTORY }),
        },
    },
    eb = "badge-details";
var eh = a(778712),
    ey = a(177861);
function ev(e) {
    return `badge-tab-${e}`;
}
function ep(e) {
    let { badge: t, isSelected: a, onSelect: i, itemId: s, showBadgeIndicator: r } = e,
        d = (0, ea.rm)(s),
        o = t.owned ? t.current_tier : t.next_tier,
        c =
            null != o
                ? t.tiers.find((e) => {
                      let { key: t } = e;
                      return t === o;
                  })
                : void 0,
        u = t.badge_id === Y.$.PREMIUM_TENURE ? (c?.name ?? c?.key) : c?.name,
        g = null != u ? `${t.name}, ${u}` : t.name,
        m = r ? `${g}, ${J.intl.string(J.t.y2b7CA)}` : g,
        _ = n.useRef(null);
    return (0, l.jsxs)(ei.D, {
        ...d,
        innerRef: _,
        role: "tab",
        id: ev(t.badge_id),
        "aria-label": m,
        "aria-selected": a,
        "aria-controls": a ? eb : void 0,
        className: U()(ey.oL, a && ey.xO),
        onFocus: d.onFocus,
        onClick: () => {
            (_.current?.focus(), i());
        },
        children: [
            r && (0, l.jsx)("span", { "aria-hidden": !0, className: ey.Dn }),
            null != t.simple_icon_url &&
                (0, l.jsx)("img", {
                    src: t.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: ey.pW,
                }),
        ],
    });
}
function ef(e) {
    let { label: t, navId: a, badges: n, selectedBadgeId: i, onSelectBadge: s, badgeIndicatorIds: r } = e,
        d = (0, el.Ay)({
            id: a,
            isEnabled: !0,
            orientation: en.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, l.jsxs)("div", {
        className: ey.zE,
        children: [
            "heading" === t.type &&
                (0, l.jsx)(u.D, { id: t.id, variant: "heading-xs/medium", color: "text-default", children: t.text }),
            (0, l.jsx)(ea.hD, {
                navigator: d,
                children: (0, l.jsx)(ea.PR, {
                    children: (e) =>
                        (0, l.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === t.type ? t.id : void 0,
                            "aria-label": "aria" === t.type ? t.text : void 0,
                            className: ey.yq,
                            children: n.map((e, t) => {
                                let a = e.badge_id === i;
                                return (0, l.jsx)(
                                    ep,
                                    {
                                        itemId: `item-${t}`,
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
function eN(e) {
    let t,
        {
            selectedBadgeId: a,
            onSelectBadge: i,
            displayedUserId: r,
            isViewingOtherUser: d,
            targetUsername: o,
            onViewOwnCatalog: c,
            onCustomizeBadges: _,
            showBadgeIndicators: x,
        } = e,
        b = (0, s.yK)([E.Ay], () => (null != r ? E.Ay.getBadges(r) : []), [r]),
        { earnable: y, owned: v } = n.useMemo(() => (0, p.in)(b), [b]),
        f = n.useMemo(() => [...v, ...y], [v, y]),
        { badgeIndicatorIds: N } = (function (e) {
            let { badges: t, enabled: a } = e,
                l = (0, s.bG)([I], () => I.getSeenBadgeIndicators());
            return {
                badgeIndicatorIds: n.useMemo(
                    () =>
                        a
                            ? new Set(
                                  t
                                      .filter((e) => {
                                          let { badge_id: t } = e;
                                          return B.has(t) && !l.has(t);
                                      })
                                      .map((e) => {
                                          let { badge_id: t } = e;
                                          return t;
                                      }),
                              )
                            : new Set(),
                    [t, a, l],
                ),
            };
        })({ badges: f, enabled: x }),
        j = n.useMemo(() => new Set(x ? f.filter((e) => !0 === e.has_updates).map((e) => e.badge_id) : []), [x, f]),
        S = (0, A.e)({ location: "BadgeDirectoryPanel", hasUnread: j.size > 0 }),
        w = n.useMemo(() => (S ? new Set([...N, ...j]) : N), [S, N, j]),
        T = (function (e, t) {
            let a = (0, s.bG)([h.default], () => (null != e ? h.default.getUser(e) : void 0), [e]);
            if (null != a && t)
                return (0, ed.ku)({ id: a.id, avatar: a.avatar, discriminator: a.discriminator }, !1, 48);
        })(r, d),
        C = (0, er.d)({ location: "BadgeDirectoryPanel" }),
        R = null != o ? ((t = Array.from(o)).length > 19 ? `${t.slice(0, 19).join("")}...` : o) : null,
        U = null != o && R !== o,
        O =
            null != R && U && null != T
                ? (0, l.jsxs)("span", {
                      className: ey._p,
                      children: [(0, l.jsx)(es.eu, { src: T, size: eh._3.SIZE_24, "aria-hidden": !0 }), R],
                  })
                : R,
        k = d && null != O ? J.intl.format(J.t.EIcwoe, { username: O }) : J.intl.string(J.t.UqnlQF),
        D = d && null != o ? J.intl.string(J.t["75s2Rq"]) : J.intl.string(J.t["62xU4E"]),
        G = d && null != o ? J.intl.formatToPlainString(J.t.BCjSZy, { username: o }) : J.intl.string(J.t.UqnlQF);
    return (0, l.jsx)("div", {
        className: ey.ws,
        children: (0, l.jsxs)(M.F, {
            component: (0, l.jsxs)("div", {
                className: ey.NG,
                children: [
                    (0, l.jsxs)("div", {
                        className: ey.kc,
                        children: [
                            !U && null != T && (0, l.jsx)(es.eu, { src: T, size: eh._3.SIZE_24, "aria-hidden": !0 }),
                            (0, l.jsx)(u.D, { variant: "heading-lg/semibold", color: "text-strong", children: k }),
                        ],
                    }),
                    (0, l.jsx)(g.E, { variant: "body-sm/medium", color: "text-subtle", children: D }),
                ],
            }),
            children: [
                (0, l.jsxs)(F.Ip, {
                    className: ey.hG,
                    children: [
                        v.length > 0 &&
                            (0, l.jsx)(ef, {
                                label: { type: "aria", text: G },
                                navId: "badge-directory-owned",
                                badges: v,
                                selectedBadgeId: a,
                                onSelectBadge: i,
                                badgeIndicatorIds: w,
                            }),
                        !d &&
                            y.length > 0 &&
                            (0, l.jsx)(ef, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: J.intl.string(J.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: y,
                                selectedBadgeId: a,
                                onSelectBadge: i,
                                badgeIndicatorIds: w,
                            }),
                    ],
                }),
                (d || C) &&
                    (0, l.jsx)("div", {
                        className: ey.HO,
                        children: d
                            ? (0, l.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: c,
                                  text: J.intl.string(J.t.msyp90),
                              })
                            : (0, l.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: _,
                                  text: J.intl.string(J.t["6CLLyH"]),
                              }),
                    }),
            ],
        }),
    });
}
var ej = a(911608),
    eI = a(10583);
function eE(e) {
    let t,
        a,
        i,
        s,
        { badge: r, viewerBadge: d } = e,
        o = n.useId(),
        {
            progress: c,
            threshold: u,
            currentArtUrl: m,
            nextArtUrl: _,
            helperText: x,
        } = ((t = d ?? r),
        (a = (0, p.YU)(t, t.current_tier)),
        (i = (0, p.YU)(t, t.next_tier)),
        {
            progress: (s = t.progress?.[0]),
            threshold: s?.threshold ?? i?.requirements[0]?.threshold ?? null,
            currentArtUrl: a?.simple_icon_url ?? a?.complex_icon_static_url,
            nextArtUrl: i?.simple_icon_url ?? i?.complex_icon_static_url,
            helperText: (0, V.uJ)(s?.progress_helper_text) ? void 0 : s?.progress_helper_text,
        }),
        b = null != x ? { "aria-labelledby": o } : { "aria-label": J.intl.string(J.t.Uwhb1l) };
    return (0, l.jsxs)("div", {
        className: eI.NE,
        children: [
            (0, l.jsx)(g.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: J.intl.string(J.t["2m/g2c"]),
            }),
            (0, l.jsxs)("div", {
                className: eI.ES,
                children: [
                    null != m &&
                        (0, l.jsx)("img", { className: eI.Tw, src: m, alt: "", "aria-hidden": !0, draggable: !1 }),
                    (0, l.jsxs)("div", {
                        className: eI.Bd,
                        children: [
                            null != x && (0, l.jsx)(g.E, { id: o, variant: "body-sm/medium", children: x }),
                            null != u
                                ? (0, l.jsx)(ej.z, {
                                      value: c?.current ?? 0,
                                      minValue: c?.floor ?? 0,
                                      maxValue: u,
                                      size: "md",
                                      className: eI.hr,
                                      ...b,
                                  })
                                : null != c &&
                                  (0, l.jsx)(ej.z, { isIndeterminate: !0, size: "md", className: eI.hr, ...b }),
                        ],
                    }),
                    null != _ &&
                        (0, l.jsx)("img", { className: eI.Tw, src: _, alt: "", "aria-hidden": !0, draggable: !1 }),
                ],
            }),
        ],
    });
}
var eA = a(765178),
    eS = a(943654),
    ew = a(998304),
    eT = a(253400);
let eC = a(646514).A.unsafe_rawColors.NEUTRAL_35.resolve({ saturation: 1 }).hex();
function eB(e) {
    let [t, a] = n.useState(null);
    return (n.useEffect(() => {
        if (null == e) return;
        let t = !1;
        return (
            !(async function (e) {
                try {
                    let l,
                        n,
                        i = await (0, q.S4)(e),
                        s =
                            (null != i
                                ? ((n =
                                      (l = i.filter((e) => {
                                          let [t, a, l] = e,
                                              { lightness: n } = (0, ew.IB)(t, a, l);
                                          return n > 0.15 && n < 0.85;
                                      })).find((e) => {
                                          let [t, a, l] = e;
                                          return (0, ew.IB)(t, a, l).saturation > 0.3;
                                      }) ?? l[0]),
                                  null != n ? (0, ew.Ob)(n[0], n[1], n[2]) : null)
                                : null) ?? eC;
                    t || a({ url: e, color: s });
                } catch {
                    t || a({ url: e, color: eC });
                }
            })(e),
            () => {
                t = !0;
            }
        );
    }, [e]),
    null == e)
        ? eC
        : t?.url === e
          ? t.color
          : void 0;
}
var eR = a(589801);
function eU(e, t) {
    return { previousTier: (0, p.YU)(e, t), currentTier: (0, p.DW)(e) };
}
function eO(e, t, a) {
    return a ? t?.simple_icon_raster_url : (t?.simple_icon_raster_url ?? e.simple_icon_raster_url);
}
function ek(e) {
    let { badge: t, tier: a, isStarted: i, isPreviousTier: s = !1, onLoad: r, className: d, fillClassName: o } = e,
        c = s ? (a?.complex_icon_static_url ?? a?.simple_icon_url) : W(t, a, !0).imageUrl,
        u = eB(eO(t, a, s)),
        g = u ?? eC,
        [m, _] = n.useState(!1),
        x = n.useCallback(() => _(!0), []),
        b = m && null != u,
        [h, y] = n.useState(null);
    n.useEffect(() => {
        b && (y(i ? "fade-in" : "with-start"), r());
    }, [b]);
    let v = n.useMemo(
        () => ({
            "--custom-badge-unlock-color": g,
            "--custom-badge-unlock-halo": (0, ew.KU)(g, 0.6),
            "--custom-badge-unlock-art": null != c ? `url("${c}")` : "none",
        }),
        [g, c],
    );
    return null == c
        ? null
        : (0, l.jsx)("div", {
              className: U()(eR.qd, (null == h || !i) && eR.R, "fade-in" === h && eR.qG),
              style: v,
              children: (0, l.jsxs)("div", {
                  className: U()(eR.qS, d),
                  children: [
                      (0, l.jsx)("img", {
                          className: eR.Qw,
                          src: c,
                          alt: "",
                          crossOrigin: "anonymous",
                          draggable: !1,
                          onLoad: x,
                          onError: x,
                      }),
                      (0, l.jsx)("div", {
                          className: U()(eR.ys, o),
                          children: (0, l.jsx)("div", { className: eR.GS }),
                      }),
                  ],
              }),
          });
}
function eD(e) {
    let { badge: t, previousTierKey: a, size: i, delay: r, canStart: d = !0, onStart: o } = e,
        c = (0, s.bG)([$.Ay], () => $.Ay.useReducedMotion),
        { previousTier: u, currentTier: g } = eU(t, a),
        m = null != u,
        _ = m && !c,
        x = r + 250 * !!m,
        [b, h] = n.useState(0),
        y = n.useCallback(() => h((e) => e + 1), []),
        [v, p] = n.useState(!1),
        f = b >= (_ ? 2 : 1),
        N = d && (f || v),
        [j, I] = n.useState(!1);
    !N || f || j || I(!0);
    let E = N && !c && !j;
    (n.useEffect(() => {
        if (!d) return;
        let e = setTimeout(() => p(!0), 3e3);
        return () => clearTimeout(e);
    }, [d]),
        n.useEffect(() => {
            N && o?.(j);
        }, [N]));
    let A = n.useMemo(() => ({ "--custom-badge-unlock-swap": `${x}ms` }), [x]);
    return (0, l.jsxs)("div", {
        className: U()(eR.Os, "large" === i ? eR.as : eR.EX, E && (m ? eR.xH : eR.YC)),
        style: A,
        children: [
            _ &&
                !j &&
                (0, l.jsx)(ek, {
                    badge: t,
                    tier: u,
                    isStarted: N,
                    isPreviousTier: !0,
                    onLoad: y,
                    className: U()(E && eR.rH),
                    fillClassName: U()(eR.Nl, E && eR.Rt),
                }),
            (0, l.jsx)(ek, {
                badge: t,
                tier: g,
                isStarted: N,
                onLoad: y,
                className: U()(E && eR.CN),
                fillClassName: U()(E && eR.Eq),
            }),
        ],
    });
}
var eM = a(193579);
let eF = eT.Ay.getEnableHardwareAcceleration();
function eG(e) {
    let { badge: t, previousTierKey: a, canStart: i, onStart: r } = e,
        d = (0, s.bG)([$.Ay], () => $.Ay.useReducedMotion),
        { previousTier: o, currentTier: c } = eU(t, a),
        u = null != o,
        [g, m] = n.useState(!1),
        [_, x] = n.useState(!1),
        [b, h] = n.useState(!1),
        y = eF && !d,
        v = eB(eO(t, c, !1)) ?? eC,
        f = n.useMemo(() => ({ fill: (0, ew.E2)(v) }), [v]),
        N = n.useCallback(
            (e) => {
                (m(!0), h(e), r?.());
            },
            [r],
        );
    return (
        n.useEffect(() => {
            g && eA.O.announce((0, p.kD)(t, a), "polite");
        }, [g]),
        n.useEffect(() => {
            if (!g || !y || b) return;
            let e = setTimeout(() => x(!0), 200 + 250 * !!u + 1e3);
            return () => clearTimeout(e);
        }, [y, u, b, g]),
        (0, l.jsxs)("div", {
            className: eM.Tl,
            "aria-hidden": !0,
            children: [
                y &&
                    (0, l.jsx)(eS.x, {
                        artboard: "Web",
                        autoplay: _,
                        dataBinding: f,
                        className: U()(eM.U6, !_ && eM.qJ),
                    }),
                (0, l.jsx)(eD, { badge: t, previousTierKey: a, size: "large", delay: 200, canStart: i, onStart: N }),
            ],
        })
    );
}
var eL = a(194261),
    e$ = a(140735),
    eP = a(836825);
function ez(e) {
    let { badge: t, isViewingOtherUser: a, targetUsername: i, isViewerOnUpgradeableNitro: s = !1 } = e,
        r = n.useId(),
        d = a && null != i;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            d &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(G.c, {}),
                        (0, l.jsx)("div", {
                            className: eP.u4,
                            children: (0, l.jsx)(g.E, {
                                id: r,
                                variant: "body-sm/medium",
                                children: J.intl.formatToPlainString(J.t.KyTwIh, { username: i }),
                            }),
                        }),
                    ],
                }),
            (0, l.jsx)("div", {
                className: eP.SV,
                role: "list",
                "aria-label": d ? void 0 : t.name,
                "aria-labelledby": d ? r : void 0,
                children: t.tiers.map((e) => {
                    let n = e.owned,
                        i = !n && t.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        o = (0, p.Vs)({ tier: e, isUnlocked: n, isViewingOtherUser: a, isViewerOnUpgradeableNitro: s });
                    return (0, l.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: U()(eP.zh, i && eP.ZF),
                            children: [
                                null != r &&
                                    (0, l.jsx)("img", {
                                        className: eP.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, l.jsxs)("div", {
                                    className: eP.hI,
                                    children: [
                                        null != d &&
                                            (0, l.jsx)(g.E, {
                                                variant: "body-xs/semibold",
                                                color: n ? "text-default" : "text-muted",
                                                className: eP.nU,
                                                children: d,
                                            }),
                                        "" !== o &&
                                            (0, l.jsxs)(g.E, {
                                                variant: "body-xs/normal",
                                                color: n ? "text-subtle" : "text-muted",
                                                className: eP.nU,
                                                children: [
                                                    !n &&
                                                        (0, l.jsx)(eL.LockIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: eP.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    o,
                                                ],
                                            }),
                                    ],
                                }),
                                (0, l.jsx)(e$.A, { children: J.intl.string(n ? J.t.sTFApF : J.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var eH = a(260981),
    eq = a(540418),
    eV = a(907085),
    eY = a(179820),
    eK = a(954080);
function eZ() {
    return (0, l.jsx)(P.A, { height: 3, width: 3, "aria-hidden": "true", className: eK.zN });
}
function eJ(e) {
    let { segments: t } = e;
    return 0 === t.length
        ? null
        : (0, l.jsx)("div", {
              className: eK.U3,
              children: t.map((e, t) => {
                  let { key: a, node: n } = e;
                  return (0, l.jsxs)("span", { className: eK.Hq, children: [t > 0 && (0, l.jsx)(eZ, {}), n] }, a);
              }),
          });
}
function eW(e) {
    let t,
        a,
        i,
        r,
        {
            badge: d,
            viewerBadge: c,
            onClose: _,
            isViewingOtherUser: x,
            targetUsername: b,
            displayedUserId: y,
            viewerOwnsBadge: v,
            onViewOwnCatalog: f,
            isUnread: N = !1,
            unlock: j,
            showNewTag: I = !1,
        } = e,
        A = j ?? d,
        S = j ?? c,
        C = (0, p.DW)(A),
        B = (0, s.bG)([$.Ay], () => $.Ay.useReducedMotion),
        [R, P] = n.useState(null),
        K = null != j && R === j,
        X = n.useCallback(() => P(j ?? null), [j]),
        ea = !B && (null != j ? !K : N),
        el = !B && K,
        en = n.useMemo(() => {
            var e;
            return null != j
                ? ((e = null != (0, p.YU)(j, j.previous_acked_tier)),
                  { "--custom-badge-unlock-reveal": `${200 + 250 * !!e + 1e3}ms` })
                : void 0;
        }, [j]);
    n.useEffect(() => {
        if (!N) return;
        let { previousTier: e, currentTier: t } = eU(A, A.previous_acked_tier);
        async function a(e) {
            if (null != e)
                try {
                    await (0, q.S4)(e);
                } catch {}
        }
        (a(eO(A, e, !0)), a(eO(A, t, !1)));
    }, [A, N]);
    let { animatedUrl: ei, imageUrl: es } = W(A, C, B),
        er = C?.rarity ?? A.rarity,
        ed =
            (function (e) {
                if (null == e) return null;
                switch (e) {
                    case O.x.COMMON:
                        return {
                            type: { text: J.intl.string(J.t.L0K5ci) },
                            variant: "rarity-common",
                            icon: eH.ExperimentalCommonIcon,
                        };
                    case O.x.RARE:
                        return {
                            type: { text: J.intl.string(J.t["sTx/5z"]) },
                            variant: "rarity-rare",
                            icon: eq.ExperimentalRareIcon,
                        };
                    case O.x.EPIC:
                        return {
                            type: { text: J.intl.string(J.t.RD8RiN) },
                            variant: "rarity-epic",
                            icon: eV.ExperimentalEpicIcon,
                        };
                    case O.x.MYTHIC:
                        return {
                            type: { text: J.intl.string(J.t.vqc1ol) },
                            variant: "rarity-mythic",
                            icon: eY.ExperimentalMythicIcon,
                        };
                    default:
                        return null;
                }
            })(er) ?? void 0,
        eo = ex[A.badge_id],
        {
            isNitro: ec,
            eyebrow: eu,
            displayName: eg,
        } = ((a = (t = A.badge_id === Y.$.PREMIUM_TENURE) ? (C?.name ?? C?.key) : C?.name),
        (i = t ? J.intl.string(J.t.Ipxkog) : A.name),
        t
            ? { isNitro: t, eyebrow: void 0, displayName: null != a ? `${i} ${a}` : i }
            : null != a && A.owned
              ? { isNitro: t, eyebrow: i, displayName: a }
              : { isNitro: t, eyebrow: void 0, displayName: i }),
        em = Q(A),
        e_ = (A.tiers?.length ?? 0) > 0,
        eh = (function (e) {
            let [t, a] = n.useState(ee),
                [l, i] = n.useState(e);
            return (e !== l && (i(e), a(ee())), t);
        })(A.badge_id),
        ey =
            ((r = (0, E.H5)(A)),
            A.owned
                ? A.badge_id === Y.$.APRIL_FOOLS_2026
                    ? J.intl.string(J.t["5LcHT0"])
                    : Q(A) && null == r
                      ? eh
                      : null != r && A.badge_id !== Y.$.STAFF
                        ? J.intl.formatToPlainString(J.t.XmaiRQ, { date: new Date(r) })
                        : J.intl.string(J.t.sTFApF)
                : J.intl.string(J.t.uHtDcT)),
        ep = (0, V.uJ)(A.info_label) ? void 0 : A.info_label,
        ef = A.owned && er !== O.x.COMMON && null != ed,
        eN = [];
    (null != ep &&
        eN.push({
            key: "info",
            node: (0, l.jsx)(g.E, {
                tag: "span",
                variant: "body-xs/medium",
                color: "text-subtle",
                className: eK.$L,
                children: ep,
            }),
        }),
        eN.push({
            key: "status",
            node: (0, l.jsx)(g.E, {
                tag: "span",
                variant: "body-xs/medium",
                color: "text-subtle",
                className: eK.$L,
                children: ey,
            }),
        }),
        ef && eN.push({ key: "rarity", node: (0, l.jsx)(k.E, { ...ed }) }));
    let ej = h.default.getCurrentUser()?.premiumType,
        eI = A.badge_id === Y.$.PREMIUM_TENURE && (ej === Z.PremiumTypes.TIER_0 || ej === Z.PremiumTypes.TIER_1),
        eA = (function (e) {
            let { badge: t, viewerBadge: a, isViewerOnUpgradeableNitro: l } = e;
            return !l && a?.owned === !0 && (a.tiers?.length ?? 0) > 0 && null == a.next_tier
                ? J.intl.string(J.t.jY5xAL)
                : l
                  ? J.intl.string(J.t.qkwSSp)
                  : (a?.description ?? t.description);
        })({ badge: A, viewerBadge: S, isViewerOnUpgradeableNitro: eI }),
        eS = n.useCallback(() => {
            null != eo &&
                (T({
                    actionName: "primary_badge_action_clicked",
                    badge: A,
                    displayedUserId: y,
                    isSociallyNavigated: x,
                }),
                _(),
                L.A.popAll(),
                eo.ctaAction());
        }, [A, y, x, eo, _]),
        ew = !(function (e) {
            let { badge: t, isViewingOtherUser: a, viewerOwnsBadge: l } = e;
            return a && !t.is_earnable && !l && t.badge_id !== Y.$.STAFF;
        })({ badge: A, isViewingOtherUser: x, viewerOwnsBadge: v })
            ? null
            : (0, l.jsx)(D.w, { type: "info", message: J.intl.format(J.t.vFekBs, { onViewBadges: f }), role: "none" }),
        eT = (function (e) {
            let { badge: t, isViewingOtherUser: a } = e,
                l = (0, s.bG)([et.A], () => et.A.hasConsented(w.YAq.PERSONALIZATION));
            return (0, p.Jn)(t.badge_id) && !a && !l;
        })({ badge: A, isViewingOtherUser: x }),
        eC = (function (e) {
            let { badge: t, viewerBadge: a, isViewingOtherUser: l } = e,
                n = (0, s.bG)([et.A], () => et.A.hasConsented(w.YAq.PERSONALIZATION)),
                i = a ?? t,
                r = null != (0, p.YU)(i, i.next_tier),
                d = (0, p.Jn)(t.badge_id) && !n;
            return !l && i.owned && r && !d;
        })({ badge: A, viewerBadge: S, isViewingOtherUser: x }),
        eB = !(0, V.uJ)(eA),
        eR = eC || eB || e_,
        ek = x ? A : (S ?? A);
    return (0, l.jsx)(M.F, {
        forceLevel: 2,
        children: (0, l.jsxs)("div", {
            id: eb,
            role: "tabpanel",
            "aria-labelledby": ev(A.badge_id),
            className: eK.SV,
            style: en,
            children: [
                (0, l.jsx)("div", { className: eK.Gw, children: (0, l.jsx)(o.J, { onClick: _, size: "sm" }) }),
                (0, l.jsxs)(F.d_, {
                    className: U()(eK.C9, ea && eK.uT, el && eK.CY),
                    children: [
                        (0, l.jsx)("div", {
                            className: eK.Rm,
                            children: I && (0, l.jsx)(k.E, { type: "new", variant: "primary" }),
                        }),
                        null != j
                            ? (0, l.jsx)(
                                  eG,
                                  { badge: j, previousTierKey: j.previous_acked_tier, canStart: !0, onStart: X },
                                  `${j.badge_id}:${j.current_tier}`,
                              )
                            : null != es &&
                              (0, l.jsx)("img", {
                                  className: U()(eK.y2, null != ei && ec && eK.Zl),
                                  src: es,
                                  alt: "",
                                  "aria-hidden": !0,
                                  crossOrigin: N ? "anonymous" : void 0,
                                  draggable: !1,
                              }),
                        (0, l.jsxs)("div", {
                            className: eK.OU,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: eK.cQ,
                                    children: [
                                        (null != j || N) &&
                                            !B &&
                                            (0, l.jsx)(u.D, {
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                className: U()(eK.BI, K && eK.Dp),
                                                "aria-hidden": !0,
                                                children: (0, p.kD)(A, A.previous_acked_tier),
                                            }),
                                        (0, l.jsxs)("div", {
                                            className: eK.nj,
                                            children: [
                                                (0, l.jsxs)(u.D, {
                                                    variant: ec ? "nitro-sm" : "display-sm",
                                                    color: "text-strong",
                                                    className: U()(eK._r, ec && eK.ve),
                                                    children: [
                                                        null != eu &&
                                                            (0, l.jsx)(g.E, {
                                                                tag: "span",
                                                                variant: "body-sm/medium",
                                                                color: "text-subtle",
                                                                className: eK.$g,
                                                                children: eu,
                                                            }),
                                                        eg,
                                                    ],
                                                }),
                                                (0, l.jsx)(eJ, { segments: eN }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: eK.oA,
                                    children: [
                                        eT &&
                                            (0, l.jsx)(D.w, {
                                                type: "info",
                                                message: J.intl.format(J.t.Zh44ni, {
                                                    onGoToSettings: () =>
                                                        (0, H.openUserSettings)(z.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                                }),
                                                role: "none",
                                            }),
                                        eR &&
                                            (0, l.jsxs)("div", {
                                                className: eK.d9,
                                                children: [
                                                    eC &&
                                                        (0, l.jsxs)(l.Fragment, {
                                                            children: [
                                                                (0, l.jsx)(eE, { badge: A, viewerBadge: S }),
                                                                (0, l.jsx)(G.c, {}),
                                                            ],
                                                        }),
                                                    eB &&
                                                        (0, l.jsxs)("div", {
                                                            className: U()(eK.E4, !e_ && eK.H),
                                                            children: [
                                                                (0, l.jsxs)("div", {
                                                                    className: eK.jv,
                                                                    children: [
                                                                        em &&
                                                                            (0, l.jsx)(g.E, {
                                                                                variant: "body-xs/medium",
                                                                                color: "text-subtle",
                                                                                className: eK.c$,
                                                                                children: J.intl.string(J.t["/Gmn3f"]),
                                                                            }),
                                                                        (0, l.jsx)(g.E, {
                                                                            variant: "body-sm/medium",
                                                                            color: "text-default",
                                                                            className: eK.ij,
                                                                            children: eA,
                                                                        }),
                                                                    ],
                                                                }),
                                                                null != eo &&
                                                                    (0, l.jsx)(m.$, {
                                                                        variant: (function (e) {
                                                                            let {
                                                                                isNitro: t,
                                                                                isViewerOnUpgradeableNitro: a,
                                                                                viewerOwnsBadge: l,
                                                                            } = e;
                                                                            return a
                                                                                ? "expressive"
                                                                                : l
                                                                                  ? "secondary"
                                                                                  : t
                                                                                    ? "expressive"
                                                                                    : "primary";
                                                                        })({
                                                                            isNitro: ec,
                                                                            isViewerOnUpgradeableNitro: eI,
                                                                            viewerOwnsBadge: v,
                                                                        }),
                                                                        size: "sm",
                                                                        onClick: eS,
                                                                        text: eo.ctaLabel({
                                                                            owned: v,
                                                                            isViewerOnUpgradeableNitro: eI,
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                    e_ &&
                                                        (0, l.jsx)("div", {
                                                            className: eK.cJ,
                                                            children: (0, l.jsx)(ez, {
                                                                badge: ek,
                                                                isViewingOtherUser: x,
                                                                targetUsername: b,
                                                                isViewerOnUpgradeableNitro: eI,
                                                            }),
                                                        }),
                                                    null != ew && (0, l.jsx)("div", { className: eK.Z6, children: ew }),
                                                ],
                                            }),
                                        !eR && ew,
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
var eQ = a(470739);
function eX(e) {
    let {
            transitionState: t,
            onClose: a,
            initialBadgeId: v,
            targetUserId: f,
            targetUsername: N,
            viewingCurrentUserBadges: j,
        } = e,
        S = (0, s.bG)([h.default], () => h.default.getCurrentUser()?.id),
        w = null == f || f === S,
        R = !w && null != f && !0 !== j,
        U = R ? f : S,
        O = null != U ? `viewed_user:${R ? "other" : "self"}` : void 0,
        [k, D] = n.useState(v ?? null),
        M = (0, s.yK)([E.Ay], () => (null != U ? E.Ay.getBadges(U) : []), [U]),
        F = (0, s.bG)([E.Ay], () => null != U && E.Ay.hasCatalogFor(U), [U]),
        G = (0, s.bG)([E.Ay], () => E.Ay.hasCatalogFetchErrorFor(U), [U]),
        L = (0, s.bG)([E.Ay], () => null != U && !E.Ay.isCatalogStaleFor(U), [U]),
        $ = !R && M.some((e) => e.owned && !0 === e.has_updates),
        P = (0, A.e)({ location: "BadgeDirectoryModal", hasUnread: $ });
    (n.useEffect(() => {
        null != U && (!E.Ay.hasCatalogFor(U) || E.Ay.isCatalogStaleFor(U)) && (0, y.RS)(U, { isAutomatic: !0 });
        let e = R ? S : f;
        !w && null != e && (!E.Ay.hasCatalogFor(e) || E.Ay.isCatalogStaleFor(e)) && (0, y.RS)(e, { isAutomatic: !0 });
    }, [U, w, R, S, f]),
        n.useEffect(() => {
            null != O && _.A.increment({ name: i.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [O] });
        }, [O]));
    let z = n.useMemo(() => {
            let { earnable: e, owned: t } = (0, p.in)(M);
            if (R) return t[0]?.badge_id ?? null;
            let a = P ? t.find((e) => !0 === e.has_updates) : void 0;
            return a?.badge_id ?? t[0]?.badge_id ?? e[0]?.badge_id ?? null;
        }, [M, P, R]),
        H = null != k && null != U ? E.Ay.getBadgeById(k, U) : void 0,
        q = null != z && null != U ? E.Ay.getBadgeById(z, U) : void 0,
        V = H ?? q,
        Y = !F && !G,
        K = !F && G,
        Z = !R;
    n.useEffect(() => {
        K && null != O && _.A.increment({ name: i.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [O] });
    }, [K, O]);
    let W = (0, s.bG)([E.Ay], () => (null != S && null != V ? E.Ay.getBadgeById(V.badge_id, S) : void 0), [V, S]),
        Q = W?.owned ?? !1,
        X = n.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, eQ.openBadgeDirectoryModal)({ ...e, stackingBehavior: "replace" }).then(() => {
                    a();
                });
            },
            [a],
        ),
        ee = n.useCallback(() => {
            null != S &&
                null != f &&
                (T({ actionName: "view_your_badges_pressed", badge: V, displayedUserId: U, isSociallyNavigated: R }),
                X({ targetUserId: f, targetUsername: N, viewingCurrentUserBadges: !0 }));
        }, [S, U, R, V, X, f, N]),
        et = n.useCallback(() => {
            null != U && (0, y.RS)(U, { isRetry: !0 });
        }, [U]),
        ea = n.useCallback(() => {
            (T({ actionName: "badge_directory_closed", badge: V, displayedUserId: U, isSociallyNavigated: R }), a());
        }, [U, R, a, V]),
        el = n.useCallback(() => {
            null != S &&
                (T({
                    actionName: "customize_your_badges_pressed",
                    badge: V,
                    displayedUserId: U,
                    isSociallyNavigated: R,
                }),
                ea(),
                C.A.setState({ isOpen: !0 }),
                (0, b.kN)(S) || (0, x.openUserProfileModal)({ userId: S }));
        }, [S, U, ea, R, V]),
        en = V?.badge_id;
    !(function (e) {
        let { badgeId: t, enabled: a } = e;
        n.useEffect(() => {
            null != t && a && B.has(t) && (0, y.PV)(t);
        }, [t, a]);
    })({ badgeId: en, enabled: Z });
    let ei = P && !R && V?.has_updates === !0,
        es = (0, s.bG)([I], () => Z && null != en && B.has(en) && !I.getSeenBadgeIndicators().has(en), [en, Z]),
        [er, ed] = n.useState(null);
    er?.badgeId !== en && ed({ badgeId: en, hadNewIndicator: es });
    let eo = null != er && er.badgeId === en && er.hadNewIndicator,
        ec = (0, A.e)({ location: "BadgeDirectoryModal", hasUnread: eo }) && eo,
        eu = t === d.ip.ENTERED && (L || G),
        [eg, em] = n.useState(null);
    return (
        null != eg && eg.badge_id !== en ? em(null) : null == eg && ei && eu && null != V && em({ ...V }),
        n.useEffect(() => {
            null != eg && (D(eg.badge_id), (0, y.zd)(eg.badge_id));
        }, [eg]),
        n.useEffect(() => {
            null != V && T({ actionName: "badge_detail_viewed", badge: V, displayedUserId: U, isSociallyNavigated: R });
        }, [en, U, R]),
        (0, l.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": J.intl.string(J.t.PEjP4L),
            transitionState: t,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: ey.CR,
            children: (0, l.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: ey.jE,
                children: [
                    (Y || K || null == V) &&
                        (0, l.jsx)("div", { className: ey.b, children: (0, l.jsx)(o.J, { onClick: ea, size: "sm" }) }),
                    Y
                        ? (0, l.jsx)("div", { className: ey.Lq, children: (0, l.jsx)(c.y, {}) })
                        : K
                          ? (0, l.jsxs)("div", {
                                className: ey.IU,
                                children: [
                                    (0, l.jsx)(u.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: J.intl.string(J.t.iufib1),
                                    }),
                                    (0, l.jsx)(g.E, {
                                        variant: "body-sm/medium",
                                        color: "text-subtle",
                                        className: ey.TQ,
                                        children: J.intl.string(J.t.eAn6z2),
                                    }),
                                    (0, l.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: et,
                                        text: J.intl.string(J.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(eN, {
                                        selectedBadgeId: V?.badge_id ?? null,
                                        onSelectBadge: D,
                                        displayedUserId: U,
                                        isViewingOtherUser: R,
                                        targetUsername: N,
                                        onViewOwnCatalog: ee,
                                        onCustomizeBadges: el,
                                        showBadgeIndicators: Z,
                                    }),
                                    null != V &&
                                        (0, l.jsx)(eW, {
                                            badge: V,
                                            viewerBadge: W,
                                            onClose: ea,
                                            isViewingOtherUser: R,
                                            targetUsername: N,
                                            displayedUserId: U,
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
