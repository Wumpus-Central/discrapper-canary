n.d(t, { A: () => eo });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(990078),
    o = n(349288),
    d = n(464792),
    u = n(793574),
    c = n(688810);
let m = (0, n(945810).mj)({
    name: "2026-04-badge-discovery",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var g = n(192308);
let p = function () {
    let {
        initialBadgeId: e,
        targetUserId: t,
        targetUsername: l,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, g.openModalLazy)(
        async () => {
            let { default: i } = await Promise.all([n.e("13445"), n.e("73366")]).then(n.bind(n, 914256));
            return (n) => (0, r.jsx)(i, { ...n, initialBadgeId: e, targetUserId: t, targetUsername: l });
        },
        { stackingBehavior: "stack" },
    );
};
var f = n(859040),
    h = n(459192);
function _(e) {
    let { targetElementRef: t, delay: n, forceOpen: l, badgeDescription: i, children: a } = e;
    return (0, r.jsx)(h.u, {
        targetElementRef: t,
        delay: n,
        forceOpen: l,
        asset: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/c41152a51207aef6b145fd309053f9fa5d5bd5fab7208289710c70d61a47d2f4.svg",
        },
        title: "Last Meadow Online",
        body: i,
        children: a,
    });
}
var E = n(116833),
    x = n(704640),
    v = n(425713),
    R = n(716574),
    b = n(642481),
    j = n(720879),
    C = n(788868),
    A = n(49999),
    y = n(518477),
    I = n(375708);
let O = (e) => {
    let {
            badgeId: t = C.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: i,
            targetElementRef: a,
            progressCircleText: s,
            progressCirclePercent: o,
            progressCircleUrgency: d,
            onShow: u,
        } = e,
        c = C.VD[t].nameUnformattedNitro,
        m = I.intl.string(c).toLocaleUpperCase(),
        g = C.VD[t].rarity,
        p = (0, x.A)(t),
        f = (0, v.I)(t).standard;
    (0, l.useEffect)(() => {
        E.m[E.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = f);
    }, [f]);
    let h = (0, l.useCallback)(() => {
        n?.(A.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
        let t = (function (e, t, n) {
            if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
        })(s, o, d);
        return (0, r.jsx)(R.A, {
            targetElementRef: a,
            onShow: u,
            title: m,
            body: e.body,
            variant: "nitro",
            rarity: g,
            badgeImage: f,
            badgeName: m,
            progressCircle: t,
            children: i,
        });
    }
    let _ = {
        gradientColor: p,
        size: "lg",
        graphic: {
            type: "dynamic",
            component: E.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
            aspectRatio: "6/4",
            props: { src: f, alt: m, progressCircleText: s, progressCirclePercent: o, progressCircleUrgency: d },
        },
        title: m,
        body: e.body,
        actions: e.actions,
    };
    return "tooltip" === e.mode
        ? (0, r.jsx)(j.A, {
              targetElementRef: a,
              estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
              delay: y.In,
              onShow: u,
              ..._,
              children: i,
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  i,
                  (0, r.jsx)(b.A, {
                      targetElementRef: a,
                      shouldShow: !0,
                      onRequestClose: h,
                      align: "right",
                      position: "top",
                      caretConfig: { align: "center" },
                      ..._,
                  }),
              ],
          });
};
var T = n(534514),
    S = n(834730),
    N = n(775549);
let D = (e) => {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: l } = e;
    return (0, r.jsxs)("div", { className: N.R, children: [t, (0, r.jsx)("div", { className: N.A, children: n }), l] });
};
var U = n(224016),
    B = n(74824);
let k = (e) => {
    let { profileBadge: t, tenureBadge: n } = e,
        l = (0, v.I)(n.id).standard;
    return (0, r.jsxs)(D, {
        assetComponent: (0, r.jsx)("img", { src: l, alt: "" }),
        tooltipWordmarkComponent: (0, r.jsx)(U.A, { width: 56, className: B.R }),
        children: [
            (0, r.jsx)(T.D, { variant: "heading-xl/extrabold", children: I.intl.string(n.nameUnformatted) }),
            (0, r.jsx)(S.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: B.K,
                children: t.description,
            }),
        ],
    });
};
var L = n(30084),
    P = n(507107),
    M = n(590202),
    G = n(976860),
    $ = n(305003),
    w = n(312640),
    H = n(798618),
    V = n(752079),
    F = n(414690);
function Y(e) {
    let { children: t, targetElementRef: n, delay: i, showSubtext: a, forceOpen: s } = e,
        [o, d] = l.useState(!1),
        u = l.useRef(null),
        c = l.useCallback(() => {
            null != u.current && (clearTimeout(u.current), (u.current = null));
        }, []);
    l.useEffect(() => c, [c]);
    let m = l.useCallback(() => {
        c(),
            (u.current = window.setTimeout(() => {
                (u.current = null), d(!0);
            }, i));
    }, [i, c]);
    l.useEffect(() => {
        s && !o && m();
    }, [s, o, m]);
    let g = l.useCallback(() => {
            m();
        }, [m]),
        p = l.useCallback(() => {
            c(), d(!1);
        }, [c]);
    return (0, r.jsxs)("div", {
        onMouseEnter: g,
        onMouseLeave: p,
        children: [
            t,
            (0, r.jsxs)(w.x, {
                targetElementRef: n,
                shouldShow: !!(o || s),
                position: "top",
                caretConfig: { align: "center" },
                children: [(0, r.jsx)(q, { showSubtext: a }), (0, r.jsx)(H.F, {})],
            }),
        ],
    });
}
function q(e) {
    let { showSubtext: t = !1 } = e;
    return (0, r.jsxs)(D, {
        assetComponent: (0, r.jsx)(V.A, { className: F.jc }),
        tooltipWordmarkComponent: (0, r.jsx)(T.D, {
            variant: "heading-md/extrabold",
            className: F.RK,
            children: I.intl.string(I.t.ElYQFS),
        }),
        children: [
            (0, r.jsx)(T.D, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : F.Qn,
                children: I.intl.string(I.t.lTHkqd),
            }),
            t
                ? (0, r.jsx)(S.E, { variant: "text-xs/normal", className: F.lV, children: I.intl.string(I.t.MEV0GI) })
                : void 0,
        ],
    });
}
var Q = n(287809),
    W = n(174459),
    K = n(474090),
    z = n(439174),
    J = n(183555),
    X = n(47675);
let Z = (0, n(240921).Ay)({
    name: "2026-04-boosting-badge-hover-popup",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var ee = n(262),
    et = n(999291);
function en(e) {
    let { children: t, targetElementRef: n, delay: l, badgeIcon: i, premiumGuildSince: a } = e,
        s = (0, y.L7)(i),
        o = I.intl.string(I.t.OAq2KW).toLocaleUpperCase(),
        d = I.intl.formatToPlainString(I.t.rTUArF, { date: a });
    return (0, r.jsx)(j.A, {
        targetElementRef: n,
        estimatedTooltipHeight: 220,
        delay: l,
        gradientColor: "purple",
        size: "lg",
        graphic: { type: "image", src: s, aspectRatio: "6/4" },
        title: o,
        body: d,
        children: t,
    });
}
var er = n(652215),
    el = n(92111),
    ei = n(758836);
let ea = "premium";
var es = n(992028);
function eo(e) {
    let {
            badges: t,
            className: n,
            badgeClassName: i,
            displayProfile: g,
            onClose: h,
            shouldOpenBadgeTooltip: E,
            shouldGlowTenureBadge: x,
        } = e,
        v = l.useRef(null),
        R = l.useRef(null),
        b = l.useRef(null),
        j = l.useRef(null),
        { analyticsLocations: A } = (0, c.Ay)(u.A.BADGE),
        { context: T, trackUserProfileAction: S } = (0, J.NJ)(),
        N = Q.default.getCurrentUser(),
        D = (0, K.CC)(N?.premiumType, C.PremiumTypes.TIER_2),
        U = Z.useConfig({ location: "UserProfileBadgeList" }).enabled,
        B = (function (e) {
            let { location: t } = e;
            return m.useConfig({ location: t }).enabled;
        })({ location: "UserProfileBadgeList" }),
        w = (0, et.AP)(N?.id ?? null),
        H = (0, ee.A)(w).some((e) => e.id === $.A.ORB_PROFILE_BADGE);
    return (0, r.jsx)("div", {
        className: a()(es.k, n),
        "aria-label": I.intl.string(I.t.VWV0y5),
        role: "group",
        children: t.map((e, t) => {
            let n = e.id === $.A.ORB_PROFILE_BADGE,
                l = (0, z.e0)(e.id),
                c = null != l || e.id === ea,
                m = g?.userId === N?.id,
                C = "april_fools_2026" === e.id,
                w = e.id.startsWith(y.Ky),
                V = void 0 !== l && e.id !== ea,
                F = (0, r.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.iconSrc ?? (0, y.L7)(e.icon),
                    className: a()(es.q, i),
                }),
                q = null != E && E(e.id),
                K = {
                    onClick: (t) => {
                        S({ action: "PRESS_BADGE" }), (0, X.R9)({ badge: e.id, analyticsLocations: A, ...T });
                        let r = e.id.startsWith("staff") && !m;
                        if (B && !r) {
                            t.preventDefault();
                            let n = g?.userId != null ? Q.default.getUser(g.userId) : null;
                            p({
                                initialBadgeId: (0, el.P3)(e.id),
                                targetUserId: g?.userId,
                                targetUsername: n?.globalName ?? n?.username,
                            });
                            return;
                        }
                        if (n) {
                            (0, f.Cz)({
                                tab: ei.G2.ORBS,
                                analyticsLocations: A,
                                analyticsSource: u.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                            }),
                                h?.();
                            return;
                        }
                        if (c) {
                            if (
                                (t.preventDefault(),
                                W.default.track(er.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                    badge: e.id,
                                    premium_type: D,
                                    viewed_user_id: g?.userId,
                                }),
                                D)
                            ) {
                                m
                                    ? (0, G.pX)(er.BVt.NITRO_HOME)
                                    : (0, L.D)({ analyticsLocations: A, displayProfile: g }),
                                    h?.();
                                return;
                            }
                            if (m) {
                                let n = null != e.link ? (0, d.default)(e.link, { analyticsLocations: A }) : null;
                                if (null == n) return;
                                return h?.(), n(t);
                            }
                            return (0, L.D)({ analyticsLocations: A, displayProfile: g }), void h?.();
                        }
                        let l = null != e.link ? (0, d.default)(e.link, { analyticsLocations: A }) : null;
                        if (null != l) return h?.(), l(t);
                    },
                    onMouseEnter: () => {
                        e.id === ee.h &&
                            W.default.track(er.HAw.QUEST_CONTENT_VIEWED, {
                                ...(0, M.fF)(P.uF.QUEST_BADGE),
                                is_targeted: !1,
                            }),
                            S({ action: "HOVER_BADGE" }),
                            (0, X.sQ)({ badge: e.id, analyticsLocations: A, ...T });
                    },
                    href: e.link,
                    "aria-label": e.description,
                    style: { filter: x && null != l ? `drop-shadow(0 0 5px ${l.glowColor})` : void 0 },
                };
            if (V) {
                let n = B ? { ...K, "aria-label": I.intl.string(I.t["JEiq/c"]) } : K,
                    l = (0, r.jsx)(o.Anchor, { ...n, ref: v, children: F });
                return (0, r.jsx)(
                    "div",
                    {
                        children: B
                            ? (0, r.jsx)(O, {
                                  badgeId: e.id,
                                  targetElementRef: v,
                                  mode: "mini-tooltip",
                                  body: "string" == typeof e.description ? e.description : void 0,
                                  onShow: () => {
                                      W.default.track(er.HAw.TOOLTIP_VIEWED, {
                                          type: "tiered_tenure_badge_profile_" + (m ? "self" : "other"),
                                      });
                                  },
                                  children: l,
                              })
                            : (0, r.jsx)(O, {
                                  badgeId: e.id,
                                  targetElementRef: v,
                                  mode: "tooltip",
                                  body: e.description,
                                  onShow: () => {
                                      W.default.track(er.HAw.TOOLTIP_VIEWED, {
                                          type: "tiered_tenure_badge_profile_" + (m ? "self" : "other"),
                                      });
                                  },
                                  estimatedTooltipHeight: 220,
                                  children: l,
                              }),
                    },
                    `${e.id}-${t}`,
                );
            }
            if (n) {
                let n = (0, r.jsx)(o.Anchor, { ...K, ref: R, children: F });
                return (0, r.jsx)(
                    Y,
                    {
                        targetElementRef: R,
                        delay: y.In,
                        showSubtext: !H && !e.isPreviewMode,
                        forceOpen: q,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            if (C) {
                let n = (0, r.jsx)(o.Anchor, { ...K, ref: b, children: F });
                return (0, r.jsx)(
                    _,
                    { targetElementRef: b, delay: y.In, forceOpen: q, badgeDescription: e.description, children: n },
                    `${e.id}-${t}`,
                );
            }
            if (w && g?.premiumGuildSince != null && U) {
                let n = (0, r.jsx)(o.Anchor, { ...K, ref: j, children: F });
                return (0, r.jsx)(
                    en,
                    {
                        targetElementRef: j,
                        delay: y.In,
                        badgeIcon: e.icon,
                        premiumGuildSince: g.premiumGuildSince,
                        children: n,
                    },
                    `${e.id}-${t}`,
                );
            }
            let J = (0, r.jsx)(o.Anchor, { ...K, children: F }),
                Z = ((e) => {
                    let { badge: t, tieredTenureBadge: n } = e;
                    return void 0 !== n && t.id !== ea
                        ? (0, r.jsx)(k, { profileBadge: t, tenureBadge: n })
                        : t.description;
                })({ badge: e, tieredTenureBadge: c && e.id !== ea ? l : void 0 });
            return (0, r.jsx)(
                s.m,
                { __unsupportedReactNodeAsText: Z, forceOpen: q, delay: y.In, ariaHidden: !0, children: J },
                `${e.id}-${t}`,
            );
        }),
    });
}
