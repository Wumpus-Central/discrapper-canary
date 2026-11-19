t.d(a, { default: () => eG });
var l = t(477900),
    i = t(582128),
    n = t(731738),
    s = t(855986),
    r = t(935462),
    d = t(231723),
    o = t(815021),
    c = t(289873),
    u = t(534514),
    g = t(834730),
    m = t(821609),
    x = t(913379),
    b = t(100663),
    h = t(403777),
    _ = t(287809),
    v = t(682618),
    y = t(257339),
    j = t(982240),
    N = t(620143),
    p = t(988341),
    f = t(129230),
    A = t(652215);
function E(e) {
    let {
            actionName: a,
            badge: t,
            displayedUserId: l,
            isSociallyNavigated: i,
            hasUnreadIndicator: n,
            source: s,
            surface: r,
        } = e,
        d = _.default.getCurrentUser()?.id,
        o = null != t && null != d ? j.Ay.getBadgeById(t.badge_id, d) : void 0,
        c = null != t && null != d ? j.Ay.getRemainingToNextTier(t.badge_id, d) : void 0,
        u = null != l ? j.Ay.getBadges(l).filter((e) => e.owned).length : void 0;
    f.default.track(A.HAw.BADGE_DIRECTORY_ACTION, {
        badge_action: a,
        badge_id: t?.badge_id,
        badge_tier: null != t ? ((t.owned ? t.current_tier : t.next_tier) ?? t.tiers?.[0]?.key) : void 0,
        badge_owner_id: l,
        is_owned: o?.owned ?? !1,
        progress_to_next_tier: c,
        is_earnable: t?.is_earnable ?? !1,
        is_socially_navigated: i,
        total_badges_owned: u,
        has_unread_indicator: n,
        surface: r,
        source: s,
    });
}
var I = t(248284),
    C = t(737667);
t(321073);
var w = t(503698),
    S = t.n(w),
    B = t(536001),
    T = t(805251),
    O = t(683071),
    R = t(707554),
    U = t(95362),
    k = t(404778),
    D = t(136969),
    M = t(775602),
    L = t(640708),
    G = t(780964),
    F = t(766075),
    $ = t(515718),
    z = t(240248),
    P = t(49253),
    V = t(792996);
let H = [V.t["6zFA/T"], V.t.wzZHKl, V.t["+ED/nf"]];
function K() {
    let e = Math.floor(Math.random() * H.length);
    return V.intl.string(H[e]);
}
var Y = t(153488),
    Z = t(837381),
    q = t(116903),
    J = t(741918),
    W = t(70283),
    Q = t(939249),
    X = t(97808),
    ee = t(643056),
    ea = t(486020),
    et = t(696292),
    el = t(975807),
    ei = t(224689),
    en = t(192308),
    es = t(442928),
    er = t(475489),
    ed = t(990820),
    eo = t(216934),
    ec = t(976860),
    eu = t(758836),
    eg = t(682901);
let em = {
        [W.$.STAFF]: {
            ctaLabel: () => V.intl.string(V.t.q7A8hP),
            ctaAction: () => (0, el.A)("https://discord.com/careers"),
        },
        [W.$.PREMIUM_TENURE]: {
            ctaLabel: (e) => {
                let { owned: a, isViewerOnUpgradeableNitro: t } = e;
                return !0 === t ? V.intl.string(V.t.uKFeS1) : a ? V.intl.string(V.t.xGjjkd) : V.intl.string(V.t.BTxm69);
            },
            ctaAction: () => (0, ec.pX)(A.BVt.NITRO_HOME),
        },
        [W.$.GUILD_BOOSTER]: {
            ctaLabel: (e) => {
                let { owned: a } = e;
                return a ? V.intl.string(V.t.VMvz3m) : V.intl.string(V.t.xFVZeU);
            },
            ctaAction: () => (0, F.openUserSettings)(G.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
        },
        [W.$.ORB_PROFILE]: {
            ctaLabel: () => V.intl.string(V.t.fG3RIg),
            ctaAction: () => (0, ec.pX)(A.BVt.COLLECTIBLES_SHOP_WITH_TAB(eu.G2.ORBS)),
        },
        [W.$.QUEST_COMPLETED]: {
            ctaLabel: () => V.intl.string(V.t.swICIT),
            ctaAction: () => (0, eo.m)({ fromContent: et.u.QUEST_BADGE }),
        },
        [W.$.ORB_VOID]: {
            ctaLabel: () => V.intl.string(V.t.IKc5D7),
            ctaAction: () => {
                ((0, es.O4)(),
                    (0, en.mM)(
                        async () => {
                            let { default: e } = await Promise.all([
                                t.e(598981),
                                t.e(490028),
                                t.e(511527),
                                t.e(170653),
                                t.e(906723),
                                t.e(280559),
                                t.e(42611),
                                t.e(190820),
                            ]).then(t.bind(t, 609103));
                            return (a) => (0, l.jsx)(e, { ...a });
                        },
                        { modalKey: er.jK, onCloseCallback: es.sY },
                    ));
            },
            ctaButtonProps: { variant: "expressive", size: "md", fullWidth: !0 },
        },
        [W.$.GIFTING]: {
            ctaLabel: () => V.intl.string(V.t["nUA/JW"]),
            ctaAction: () => (0, ed.A)({ giftingOrigin: eg.vQ.BADGE_DIRECTORY }),
        },
    },
    ex = "badge-details";
var eb = t(778712),
    eh = t(177861);
function e_(e) {
    return `badge-tab-${e}`;
}
function ev(e) {
    let { badge: a, isSelected: t, onSelect: n, itemId: s, showBadgeIndicator: r } = e,
        d = (0, Z.rm)(s),
        o = a.owned ? a.current_tier : a.next_tier,
        c =
            null != o
                ? a.tiers.find((e) => {
                      let { key: a } = e;
                      return a === o;
                  })
                : void 0,
        u = a.badge_id === W.$.PREMIUM_TENURE ? (c?.name ?? c?.key) : c?.name,
        g = null != u ? `${a.name}, ${u}` : a.name,
        m = r ? `${g}, ${V.intl.string(V.t.y2b7CA)}` : g,
        x = i.useRef(null);
    return (0, l.jsxs)(Q.D, {
        ...d,
        innerRef: x,
        role: "tab",
        id: e_(a.badge_id),
        "aria-label": m,
        "aria-selected": t,
        "aria-controls": t ? ex : void 0,
        className: S()(eh.oL, t && eh.xO),
        onFocus: d.onFocus,
        onClick: () => {
            (x.current?.focus(), n());
        },
        children: [
            r && (0, l.jsx)("span", { "aria-hidden": !0, className: eh.Dn }),
            null != a.simple_icon_url &&
                (0, l.jsx)("img", {
                    src: a.simple_icon_url,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    className: eh.pW,
                }),
        ],
    });
}
function ey(e) {
    let { label: a, navId: t, badges: i, selectedBadgeId: n, onSelectBadge: s, badgeIndicatorIds: r } = e,
        d = (0, q.Ay)({
            id: t,
            isEnabled: !0,
            orientation: J.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, l.jsxs)("div", {
        className: eh.zE,
        children: [
            "heading" === a.type &&
                (0, l.jsx)(u.D, { id: a.id, variant: "heading-xs/medium", color: "text-default", children: a.text }),
            (0, l.jsx)(Z.hD, {
                navigator: d,
                children: (0, l.jsx)(Z.PR, {
                    children: (e) =>
                        (0, l.jsx)("div", {
                            ...e,
                            ref: e.ref,
                            role: "tablist",
                            "aria-labelledby": "heading" === a.type ? a.id : void 0,
                            "aria-label": "aria" === a.type ? a.text : void 0,
                            className: eh.yq,
                            children: i.map((e, a) => {
                                let t = e.badge_id === n;
                                return (0, l.jsx)(
                                    ev,
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
            onSelectBadge: n,
            displayedUserId: r,
            isViewingOtherUser: d,
            targetUsername: o,
            onViewOwnCatalog: c,
            onCustomizeBadges: x,
            showBadgeIndicators: b,
        } = e,
        h = (0, s.yK)([j.Ay], () => (null != r ? j.Ay.getBadges(r) : []), [r]),
        { earnable: v, owned: y } = i.useMemo(() => (0, p.in)(h), [h]),
        f = i.useMemo(() => [...y, ...v], [y, v]),
        { badgeIndicatorIds: A } = (0, C.Vv)({ badges: f, enabled: b }),
        E = i.useMemo(() => new Set(b ? f.filter((e) => !0 === e.has_updates).map((e) => e.badge_id) : []), [b, f]),
        I = (0, N.e)({ location: "BadgeDirectoryPanel", hasUnread: E.size > 0 }),
        w = i.useMemo(() => (I ? new Set([...A, ...E]) : A), [I, A, E]),
        S = (function (e, a) {
            let t = (0, s.bG)([_.default], () => (null != e ? _.default.getUser(e) : void 0), [e]);
            if (null != t && a)
                return (0, ea.ku)({ id: t.id, avatar: t.avatar, discriminator: t.discriminator }, !1, 48);
        })(r, d),
        B = (0, ee.d)({ location: "BadgeDirectoryPanel" }),
        T = null != o ? ((a = Array.from(o)).length > 19 ? `${a.slice(0, 19).join("")}...` : o) : null,
        O = null != o && T !== o,
        k =
            null != T && O && null != S
                ? (0, l.jsxs)("span", {
                      className: eh._p,
                      children: [(0, l.jsx)(X.eu, { src: S, size: eb._3.SIZE_24, "aria-hidden": !0 }), T],
                  })
                : T,
        D = d && null != k ? V.intl.format(V.t.EIcwoe, { username: k }) : V.intl.string(V.t.UqnlQF),
        M = d && null != o ? V.intl.string(V.t["75s2Rq"]) : V.intl.string(V.t["62xU4E"]),
        L = d && null != o ? V.intl.formatToPlainString(V.t.BCjSZy, { username: o }) : V.intl.string(V.t.UqnlQF);
    return (0, l.jsx)("div", {
        className: eh.ws,
        children: (0, l.jsxs)(R.F, {
            component: (0, l.jsxs)("div", {
                className: eh.NG,
                children: [
                    (0, l.jsxs)("div", {
                        className: eh.kc,
                        children: [
                            !O && null != S && (0, l.jsx)(X.eu, { src: S, size: eb._3.SIZE_24, "aria-hidden": !0 }),
                            (0, l.jsx)(u.D, { variant: "heading-lg/semibold", color: "text-strong", children: D }),
                        ],
                    }),
                    (0, l.jsx)(g.E, { variant: "body-sm/medium", color: "text-subtle", children: M }),
                ],
            }),
            children: [
                (0, l.jsxs)(U.Ip, {
                    className: eh.hG,
                    children: [
                        y.length > 0 &&
                            (0, l.jsx)(ey, {
                                label: { type: "aria", text: L },
                                navId: "badge-directory-owned",
                                badges: y,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                                badgeIndicatorIds: w,
                            }),
                        !d &&
                            v.length > 0 &&
                            (0, l.jsx)(ey, {
                                label: {
                                    type: "heading",
                                    id: "badge-directory-section-earnable",
                                    text: V.intl.string(V.t["0YzU//"]),
                                },
                                navId: "badge-directory-earnable",
                                badges: v,
                                selectedBadgeId: t,
                                onSelectBadge: n,
                                badgeIndicatorIds: w,
                            }),
                    ],
                }),
                (d || B) &&
                    (0, l.jsx)("div", {
                        className: eh.HO,
                        children: d
                            ? (0, l.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: c,
                                  text: V.intl.string(V.t.msyp90),
                              })
                            : (0, l.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: x,
                                  text: V.intl.string(V.t["6CLLyH"]),
                              }),
                    }),
            ],
        }),
    });
}
var eN = t(911608),
    ep = t(10583);
function ef(e) {
    let { badge: a, viewerBadge: t } = e,
        n = i.useId(),
        { progress: s, threshold: r, currentArtUrl: d, nextArtUrl: o, helperText: c } = (0, P.dy)(a, t),
        u = null != c ? { "aria-labelledby": n } : { "aria-label": V.intl.string(V.t.Uwhb1l) };
    return (0, l.jsxs)("div", {
        className: ep.NE,
        children: [
            (0, l.jsx)(g.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: V.intl.string(V.t["2m/g2c"]),
            }),
            (0, l.jsxs)("div", {
                className: ep.ES,
                children: [
                    null != d &&
                        (0, l.jsx)("img", { className: ep.Tw, src: d, alt: "", "aria-hidden": !0, draggable: !1 }),
                    (0, l.jsxs)("div", {
                        className: ep.Bd,
                        children: [
                            null != c && (0, l.jsx)(g.E, { id: n, variant: "body-sm/medium", children: c }),
                            null != r
                                ? (0, l.jsx)(eN.z, {
                                      value: s?.current ?? 0,
                                      minValue: s?.floor ?? 0,
                                      maxValue: r,
                                      size: "md",
                                      className: ep.hr,
                                      ...u,
                                  })
                                : null != s &&
                                  (0, l.jsx)(eN.z, { isIndeterminate: !0, size: "md", className: ep.hr, ...u }),
                        ],
                    }),
                    null != o &&
                        (0, l.jsx)("img", { className: ep.Tw, src: o, alt: "", "aria-hidden": !0, draggable: !1 }),
                ],
            }),
        ],
    });
}
var eA = t(647729),
    eE = t(873571),
    eI = t(194261),
    eC = t(140735),
    ew = t(836825);
function eS(e) {
    let { badge: a, isViewingOtherUser: t, targetUsername: n, isViewerOnUpgradeableNitro: s = !1 } = e,
        r = i.useId(),
        d = t && null != n;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            d &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(k.c, {}),
                        (0, l.jsx)("div", {
                            className: ew.u4,
                            children: (0, l.jsx)(g.E, {
                                id: r,
                                variant: "body-sm/medium",
                                children: V.intl.formatToPlainString(V.t.KyTwIh, { username: n }),
                            }),
                        }),
                    ],
                }),
            (0, l.jsx)("div", {
                className: ew.SV,
                role: "list",
                "aria-label": d ? void 0 : a.name,
                "aria-labelledby": d ? r : void 0,
                children: a.tiers.map((e) => {
                    let i = e.owned,
                        n = !i && a.owned,
                        r = e.simple_icon_url ?? e.complex_icon_static_url,
                        d = e.name,
                        o = (0, p.Vs)({ tier: e, isUnlocked: i, isViewingOtherUser: t, isViewerOnUpgradeableNitro: s });
                    return (0, l.jsxs)(
                        "div",
                        {
                            role: "listitem",
                            className: S()(ew.zh, n && ew.ZF),
                            children: [
                                null != r &&
                                    (0, l.jsx)("img", {
                                        className: ew.Hw,
                                        src: r,
                                        alt: "",
                                        "aria-hidden": !0,
                                        draggable: !1,
                                    }),
                                (0, l.jsxs)("div", {
                                    className: ew.hI,
                                    children: [
                                        null != d &&
                                            (0, l.jsx)(g.E, {
                                                variant: "body-xs/semibold",
                                                color: i ? "text-default" : "text-muted",
                                                className: ew.nU,
                                                children: d,
                                            }),
                                        "" !== o &&
                                            (0, l.jsxs)(g.E, {
                                                variant: "body-xs/normal",
                                                color: i ? "text-subtle" : "text-muted",
                                                className: ew.nU,
                                                children: [
                                                    !i &&
                                                        (0, l.jsx)(eI.LockIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: ew.Ks,
                                                            "aria-hidden": !0,
                                                        }),
                                                    o,
                                                ],
                                            }),
                                    ],
                                }),
                                (0, l.jsx)(eC.A, { children: V.intl.string(i ? V.t.sTFApF : V.t.uHtDcT) }),
                            ],
                        },
                        e.key,
                    );
                }),
            }),
        ],
    });
}
var eB = t(260981),
    eT = t(540418),
    eO = t(907085),
    eR = t(179820),
    eU = t(954080);
function ek() {
    return (0, l.jsx)(L.A, { height: 3, width: 3, "aria-hidden": "true", className: eU.zN });
}
function eD(e) {
    let { segments: a } = e;
    return 0 === a.length
        ? null
        : (0, l.jsx)("div", {
              className: eU.U3,
              children: a.map((e, a) => {
                  let { key: t, node: i } = e;
                  return (0, l.jsxs)("span", { className: eU.Hq, children: [a > 0 && (0, l.jsx)(ek, {}), i] }, t);
              }),
          });
}
function eM(e) {
    let {
            badge: a,
            viewerBadge: t,
            onClose: n,
            isViewingOtherUser: r,
            targetUsername: d,
            displayedUserId: c,
            viewerOwnsBadge: x,
            onViewOwnCatalog: b,
            isUnread: h = !1,
            unlock: v,
            showNewTag: y = !1,
        } = e,
        j = v ?? a,
        N = v ?? t,
        f = (0, p.DW)(j),
        I = (0, s.bG)([M.Ay], () => M.Ay.useReducedMotion),
        [C, w] = i.useState(null),
        L = null != v && C?.unlock === v,
        H = L && C?.isMotionSkipped === !0,
        Z = i.useCallback((e) => w(null != v ? { unlock: v, isMotionSkipped: e } : null), [v]),
        q = !I && (null != v ? !L : h),
        J = !I && L,
        Q = i.useMemo(
            () =>
                null != v
                    ? (0, eA.$)({ isLevelUp: null != (0, p.YU)(v, v.previous_acked_tier), isMotionSkipped: H })
                    : void 0,
            [H, v],
        );
    i.useEffect(() => {
        if (!h) return;
        let { previousTier: e, currentTier: a } = (0, eE.VR)(j, j.previous_acked_tier);
        async function t(e) {
            if (null != e)
                try {
                    await (0, $.S4)(e);
                } catch {}
        }
        (t((0, eE.AO)(j, e, !0)), t((0, eE.AO)(j, a, !1)));
    }, [j, h]);
    let { animatedUrl: X, imageUrl: ee } = (0, P.NC)(j, f, I),
        ea = f?.rarity ?? j.rarity,
        et =
            (function (e) {
                if (null == e) return null;
                switch (e) {
                    case B.x.COMMON:
                        return {
                            type: { text: V.intl.string(V.t.L0K5ci) },
                            variant: "rarity-common",
                            icon: eB.ExperimentalCommonIcon,
                        };
                    case B.x.RARE:
                        return {
                            type: { text: V.intl.string(V.t["sTx/5z"]) },
                            variant: "rarity-rare",
                            icon: eT.ExperimentalRareIcon,
                        };
                    case B.x.EPIC:
                        return {
                            type: { text: V.intl.string(V.t.RD8RiN) },
                            variant: "rarity-epic",
                            icon: eO.ExperimentalEpicIcon,
                        };
                    case B.x.MYTHIC:
                        return {
                            type: { text: V.intl.string(V.t.vqc1ol) },
                            variant: "rarity-mythic",
                            icon: eR.ExperimentalMythicIcon,
                        };
                    default:
                        return null;
                }
            })(ea) ?? void 0,
        el = (function (e) {
            if (e !== W.$.ORB_VOID || ei.T.getConfig({ location: "badge_directory_enter_void_cta" }).enabled)
                return em[e];
        })(j.badge_id),
        { isNitro: en, eyebrow: es, displayName: er } = (0, P.iC)(j, f),
        ed = (0, P.f)(j),
        eo = (j.tiers?.length ?? 0) > 0,
        ec = (function (e) {
            let [a, t] = i.useState(K),
                [l, n] = i.useState(e);
            return (e !== l && (n(e), t(K())), a);
        })(j.badge_id),
        eu = (0, P.HA)(j, ec),
        eg = (0, z.uJ)(j.info_label) ? void 0 : j.info_label,
        eb = j.owned && ea !== B.x.COMMON && null != et,
        eh = [];
    (null != eg &&
        eh.push({
            key: "info",
            node: (0, l.jsx)(g.E, {
                tag: "span",
                variant: "body-xs/medium",
                color: "text-subtle",
                className: eU.$L,
                children: eg,
            }),
        }),
        eh.push({
            key: "status",
            node: (0, l.jsx)(g.E, {
                tag: "span",
                variant: "body-xs/medium",
                color: "text-subtle",
                className: eU.$L,
                children: eu,
            }),
        }),
        eb && eh.push({ key: "rarity", node: (0, l.jsx)(T.E, { ...et }) }));
    let ev = _.default.getCurrentUser()?.premiumType,
        ey = (0, P.Rt)(j, ev),
        ej = (0, P.JV)({ badge: j, viewerBadge: N, isViewerOnUpgradeableNitro: ey }),
        eN = i.useCallback(() => {
            null != el &&
                (E({
                    actionName: "primary_badge_action_clicked",
                    badge: j,
                    displayedUserId: c,
                    isSociallyNavigated: r,
                }),
                n(),
                D.A.popAll(),
                el.ctaAction());
        }, [j, c, r, el, n]),
        ep = (0, P.eJ)({ badge: j, isViewingOtherUser: r, viewerOwnsBadge: x })
            ? (0, l.jsx)(O.w, { type: "info", message: V.intl.format(V.t.vFekBs, { onViewBadges: b }), role: "none" })
            : null,
        eI = (function (e) {
            let { badge: a, isViewingOtherUser: t } = e,
                l = (0, s.bG)([Y.A], () => Y.A.hasConsented(A.YAq.PERSONALIZATION));
            return (0, p.Jn)(a.badge_id) && !t && !l;
        })({ badge: j, isViewingOtherUser: r }),
        eC = (function (e) {
            let { badge: a, viewerBadge: t, isViewingOtherUser: l } = e,
                i = (0, s.bG)([Y.A], () => Y.A.hasConsented(A.YAq.PERSONALIZATION)),
                n = t ?? a,
                r = null != (0, p.YU)(n, n.next_tier),
                d = (0, p.Jn)(a.badge_id) && !i;
            return !l && n.owned && r && !d;
        })({ badge: j, viewerBadge: N, isViewingOtherUser: r }),
        ew = !(0, z.uJ)(ej),
        ek = eC || ew || eo,
        eM = r ? j : (N ?? j),
        eL = el?.ctaButtonProps?.fullWidth === !0;
    return (0, l.jsx)(R.F, {
        forceLevel: 2,
        children: (0, l.jsxs)("div", {
            id: ex,
            role: "tabpanel",
            "aria-labelledby": e_(j.badge_id),
            className: eU.SV,
            style: Q,
            children: [
                (0, l.jsx)("div", { className: eU.Gw, children: (0, l.jsx)(o.J, { onClick: n, size: "sm" }) }),
                (0, l.jsxs)(U.d_, {
                    className: S()(eU.C9, q && eU.uT, J && eU.CY),
                    children: [
                        (0, l.jsx)("div", {
                            className: eU.Rm,
                            children: y && (0, l.jsx)(T.E, { type: "new", variant: "primary" }),
                        }),
                        null != v
                            ? (0, l.jsx)(
                                  eA.A,
                                  { badge: v, previousTierKey: v.previous_acked_tier, canStart: !0, onStart: Z },
                                  `${v.badge_id}:${v.current_tier}`,
                              )
                            : null != ee &&
                              (0, l.jsx)("img", {
                                  className: S()(eU.y2, null != X && en && eU.Zl),
                                  src: ee,
                                  alt: "",
                                  "aria-hidden": !0,
                                  crossOrigin: h && null == X ? "anonymous" : void 0,
                                  draggable: !1,
                              }),
                        (0, l.jsxs)("div", {
                            className: eU.OU,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: eU.cQ,
                                    children: [
                                        (null != v || h) &&
                                            !I &&
                                            (0, l.jsx)(u.D, {
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                className: S()(eU.BI, L && eU.Dp),
                                                "aria-hidden": !0,
                                                children: (0, p.kD)(j, j.previous_acked_tier),
                                            }),
                                        (0, l.jsxs)("div", {
                                            className: eU.nj,
                                            children: [
                                                (0, l.jsxs)(u.D, {
                                                    variant: en ? "nitro-sm" : "display-sm",
                                                    color: "text-strong",
                                                    className: S()(eU._r, en && eU.ve),
                                                    children: [
                                                        null != es &&
                                                            (0, l.jsx)(g.E, {
                                                                tag: "span",
                                                                variant: "body-sm/medium",
                                                                color: "text-subtle",
                                                                className: eU.$g,
                                                                children: es,
                                                            }),
                                                        (0, l.jsx)("span", { className: eU.do, children: er }),
                                                    ],
                                                }),
                                                (0, l.jsx)(eD, { segments: eh }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: eU.oA,
                                    children: [
                                        eI &&
                                            (0, l.jsx)(O.w, {
                                                type: "info",
                                                message: V.intl.format(V.t.Zh44ni, {
                                                    onGoToSettings: () =>
                                                        (0, F.openUserSettings)(G.X.DATA_USAGE_PERSONALIZATION_SETTING),
                                                }),
                                                role: "none",
                                            }),
                                        ek &&
                                            (0, l.jsxs)("div", {
                                                className: eU.d9,
                                                children: [
                                                    eC &&
                                                        (0, l.jsxs)(l.Fragment, {
                                                            children: [
                                                                (0, l.jsx)(ef, { badge: j, viewerBadge: N }),
                                                                (0, l.jsx)(k.c, {}),
                                                            ],
                                                        }),
                                                    ew &&
                                                        (0, l.jsxs)("div", {
                                                            className: S()(eU.E4, (!eo || eL) && eU.H),
                                                            children: [
                                                                (0, l.jsxs)("div", {
                                                                    className: eU.jv,
                                                                    children: [
                                                                        ed &&
                                                                            (0, l.jsx)(g.E, {
                                                                                variant: "body-xs/medium",
                                                                                color: "text-subtle",
                                                                                className: eU.c$,
                                                                                children: V.intl.string(V.t["/Gmn3f"]),
                                                                            }),
                                                                        (0, l.jsx)(g.E, {
                                                                            variant: "body-sm/medium",
                                                                            color: "text-default",
                                                                            className: eU.ij,
                                                                            children: ej,
                                                                        }),
                                                                    ],
                                                                }),
                                                                null != el &&
                                                                    (0, l.jsx)(m.$, {
                                                                        variant: (0, P.Vg)({
                                                                            isNitro: en,
                                                                            isViewerOnUpgradeableNitro: ey,
                                                                            viewerOwnsBadge: x,
                                                                        }),
                                                                        size: "sm",
                                                                        onClick: eN,
                                                                        text: el.ctaLabel({
                                                                            owned: x,
                                                                            isViewerOnUpgradeableNitro: ey,
                                                                        }),
                                                                        ...el.ctaButtonProps,
                                                                    }),
                                                            ],
                                                        }),
                                                    eo &&
                                                        (0, l.jsx)("div", {
                                                            className: eU.cJ,
                                                            children: (0, l.jsx)(eS, {
                                                                badge: eM,
                                                                isViewingOtherUser: r,
                                                                targetUsername: d,
                                                                isViewerOnUpgradeableNitro: ey,
                                                            }),
                                                        }),
                                                    null != ep && (0, l.jsx)("div", { className: eU.Z6, children: ep }),
                                                ],
                                            }),
                                        !ek && ep,
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
var eL = t(470739);
function eG(e) {
    let {
            transitionState: a,
            onClose: t,
            initialBadgeId: f,
            targetUserId: A,
            targetUsername: w,
            viewingCurrentUserBadges: S,
        } = e,
        B = (0, s.bG)([_.default], () => _.default.getCurrentUser()?.id),
        T = null == A || A === B,
        O = !T && null != A && !0 !== S,
        R = O ? A : B,
        U = null != R ? `viewed_user:${O ? "other" : "self"}` : void 0,
        [k, D] = i.useState(f ?? null),
        M = (0, s.yK)([j.Ay], () => (null != R ? j.Ay.getBadges(R) : []), [R]),
        L = (0, s.bG)([j.Ay], () => null != R && j.Ay.hasCatalogFor(R), [R]),
        G = (0, s.bG)([j.Ay], () => j.Ay.hasCatalogFetchErrorFor(R), [R]),
        F = (0, s.bG)([j.Ay], () => null != R && !j.Ay.isCatalogStaleFor(R), [R]),
        $ = !O && M.some((e) => e.owned && !0 === e.has_updates),
        z = (0, N.e)({ location: "BadgeDirectoryModal", hasUnread: $ });
    (i.useEffect(() => {
        null != R && (!j.Ay.hasCatalogFor(R) || j.Ay.isCatalogStaleFor(R)) && (0, v.RS)(R, { isAutomatic: !0 });
        let e = O ? B : A;
        !T && null != e && (!j.Ay.hasCatalogFor(e) || j.Ay.isCatalogStaleFor(e)) && (0, v.RS)(e, { isAutomatic: !0 });
    }, [R, T, O, B, A]),
        i.useEffect(() => {
            null != U && x.A.increment({ name: n.K.BADGE_DIRECTORY_MODAL_OPEN, tags: [U] });
        }, [U]));
    let P = i.useMemo(() => {
            let { earnable: e, owned: a } = (0, p.in)(M);
            if (O) return a[0]?.badge_id ?? null;
            let t = z ? a.find((e) => !0 === e.has_updates) : void 0;
            return t?.badge_id ?? a[0]?.badge_id ?? e[0]?.badge_id ?? null;
        }, [M, z, O]),
        H = null != k && null != R ? j.Ay.getBadgeById(k, R) : void 0,
        K = null != P && null != R ? j.Ay.getBadgeById(P, R) : void 0,
        Y = H ?? K,
        Z = !L && !G,
        q = !L && G,
        J = !O;
    i.useEffect(() => {
        q && null != U && x.A.increment({ name: n.K.BADGE_DIRECTORY_ERROR_STATE_VIEWED, tags: [U] });
    }, [q, U]);
    let W = (0, s.bG)([j.Ay], () => (null != B && null != Y ? j.Ay.getBadgeById(Y.badge_id, B) : void 0), [Y, B]),
        Q = W?.owned ?? !1,
        X = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, eL.openBadgeDirectoryModal)({ ...e, stackingBehavior: "replace" }).then(() => {
                    t();
                });
            },
            [t],
        ),
        ee = i.useCallback(() => {
            null != B &&
                null != A &&
                (E({ actionName: "view_your_badges_pressed", badge: Y, displayedUserId: R, isSociallyNavigated: O }),
                X({ targetUserId: A, targetUsername: w, viewingCurrentUserBadges: !0 }));
        }, [B, R, O, Y, X, A, w]),
        ea = i.useCallback(() => {
            null != R && (0, v.RS)(R, { isRetry: !0 });
        }, [R]),
        et = i.useCallback(() => {
            (E({ actionName: "badge_directory_closed", badge: Y, displayedUserId: R, isSociallyNavigated: O }), t());
        }, [R, O, t, Y]),
        el = i.useCallback(() => {
            null != B &&
                (E({
                    actionName: "customize_your_badges_pressed",
                    badge: Y,
                    displayedUserId: R,
                    isSociallyNavigated: O,
                }),
                et(),
                I.A.setState({ isOpen: !0 }),
                (0, h.kN)(B) || (0, b.openUserProfileModal)({ userId: B }));
        }, [B, R, et, O, Y]),
        ei = Y?.badge_id;
    (0, C.G5)({ badgeId: ei, enabled: J });
    let en = z && !O && Y?.has_updates === !0,
        es = (0, s.bG)([y.A], () => J && null != ei && (0, C.Ce)(ei) && !y.A.getSeenBadgeIndicators().has(ei), [ei, J]),
        [er, ed] = i.useState(null);
    er?.badgeId !== ei && ed({ badgeId: ei, hadNewIndicator: es });
    let eo = null != er && er.badgeId === ei && er.hadNewIndicator,
        ec = (0, N.e)({ location: "BadgeDirectoryModal", hasUnread: eo }) && eo,
        eu = a === d.ip.ENTERED && (F || G),
        [eg, em] = i.useState(null);
    return (
        null != eg && eg.badge_id !== ei ? em(null) : null == eg && en && eu && null != Y && em({ ...Y }),
        i.useEffect(() => {
            null != eg && (D(eg.badge_id), (0, v.zd)(eg.badge_id));
        }, [eg]),
        i.useEffect(() => {
            null != Y && E({ actionName: "badge_detail_viewed", badge: Y, displayedUserId: R, isSociallyNavigated: O });
        }, [ei, R, O]),
        (0, l.jsx)(r.EO, {
            "data-migration-pending": !0,
            parentComponent: "BadgeDirectoryModal",
            "aria-label": V.intl.string(V.t.PEjP4L),
            transitionState: a,
            size: r.rI.DYNAMIC,
            hideShadow: !0,
            className: eh.CR,
            children: (0, l.jsxs)(r.$m, {
                "data-migration-pending": !0,
                scrollbarType: "none",
                className: eh.jE,
                children: [
                    (Z || q || null == Y) &&
                        (0, l.jsx)("div", { className: eh.b, children: (0, l.jsx)(o.J, { onClick: et, size: "sm" }) }),
                    Z
                        ? (0, l.jsx)("div", { className: eh.Lq, children: (0, l.jsx)(c.y, {}) })
                        : q
                          ? (0, l.jsxs)("div", {
                                className: eh.IU,
                                children: [
                                    (0, l.jsx)(u.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: V.intl.string(V.t.iufib1),
                                    }),
                                    (0, l.jsx)(g.E, {
                                        variant: "body-sm/medium",
                                        color: "text-subtle",
                                        className: eh.TQ,
                                        children: V.intl.string(V.t.eAn6z2),
                                    }),
                                    (0, l.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: ea,
                                        text: V.intl.string(V.t["7NqTJn"]),
                                    }),
                                ],
                            })
                          : (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(ej, {
                                        selectedBadgeId: Y?.badge_id ?? null,
                                        onSelectBadge: D,
                                        displayedUserId: R,
                                        isViewingOtherUser: O,
                                        targetUsername: w,
                                        onViewOwnCatalog: ee,
                                        onCustomizeBadges: el,
                                        showBadgeIndicators: J,
                                    }),
                                    null != Y &&
                                        (0, l.jsx)(eM, {
                                            badge: Y,
                                            viewerBadge: W,
                                            onClose: et,
                                            isViewingOtherUser: O,
                                            targetUsername: w,
                                            displayedUserId: R,
                                            viewerOwnsBadge: Q,
                                            onViewOwnCatalog: ee,
                                            isUnread: en,
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
