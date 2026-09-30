r.d(t, { A: () => eo });
var n = r(477900),
    l = r(582128),
    s = r(503698),
    a = r.n(s),
    i = r(17928),
    o = r(331322),
    u = r(834730),
    c = r(406810),
    d = r(866665),
    g = r(408278),
    m = r(885574),
    E = r(975807),
    _ = r(688810),
    C = r(812095),
    p = r(288106),
    h = r(604913),
    I = r(65238),
    S = r(773669),
    A = r(975571),
    L = r(304210),
    x = r(324157),
    v = r(480750),
    f = r(727142);
let O = function (e) {
    let { text: t, icon: r, indicatorColor: l } = e;
    return (0, n.jsxs)("span", {
        className: f.I,
        children: [
            null != l &&
                (0, n.jsx)("svg", {
                    className: f.q,
                    viewBox: "0 0 8 8",
                    "aria-hidden": !0,
                    children: (0, n.jsx)("circle", { cx: "4", cy: "4", r: "3.5", fill: l }),
                }),
            null != r && (0, n.jsx)(r, { size: "xxs", color: "currentColor" }),
            (0, n.jsx)(u.E, { variant: "text-xs/medium", color: "none", children: t }),
        ],
    });
};
var y = r(435558),
    k = r(775602),
    N = r(577568);
let T = 2 * Math.PI * 57,
    j = "var(--status-positive)",
    B = function (e) {
        let { current: t, target: r, progressColor: l = j, children: s } = e,
            o = T * (1 - (r <= 0 ? 0.025 : (0, y.clamp)(t / r, 0.025, 1))),
            u = (0, i.bG)([k.Ay], () => k.Ay.useReducedMotion);
        return (0, n.jsxs)("div", {
            className: N.iE,
            children: [
                s,
                (0, n.jsxs)("svg", {
                    className: N.hN,
                    viewBox: "0 0 120 120",
                    children: [
                        (0, n.jsx)("circle", {
                            className: N.u4,
                            cx: 60,
                            cy: 60,
                            r: 57,
                            strokeWidth: 6,
                            stroke: "var(--background-mod-strong)",
                        }),
                        (0, n.jsx)("circle", {
                            className: a()(N.M0, { [N.Vr]: !u }),
                            cx: 60,
                            cy: 60,
                            r: 57,
                            strokeWidth: 6,
                            stroke: l,
                            strokeDasharray: T,
                            strokeDashoffset: o,
                        }),
                    ],
                }),
            ],
        });
    };
var b = r(295986);
function P(e) {
    let { assetPath: t } = e,
        r = l.useRef(null);
    return (
        l.useEffect(() => {
            let e = new Image();
            return (
                (e.onload = () => {
                    let t = r.current,
                        n = t?.getContext("2d");
                    null != t &&
                        null != n &&
                        ((t.width = e.naturalWidth), (t.height = e.naturalHeight), n.drawImage(e, 0, 0));
                }),
                (e.src = t),
                () => {
                    e.onload = null;
                }
            );
        }, [t]),
        (0, n.jsx)("canvas", { ref: r, className: b.C, width: 120, height: 120, "aria-hidden": "true" })
    );
}
let R = function (e) {
    let { assetPath: t, progress: r, progressText: l, progressColor: s } = e,
        a = (0, i.bG)([k.Ay], () => k.Ay.useReducedMotion)
            ? (0, n.jsx)(P, { assetPath: t })
            : (0, n.jsx)("img", { src: t, alt: "", className: b.C, width: 120, height: 120 });
    return null == r
        ? a
        : (0, n.jsx)("div", {
              className: b.U,
              role: "progressbar",
              "aria-valuenow": r.current,
              "aria-valuemin": 0,
              "aria-valuemax": r.target,
              "aria-valuetext": l ?? void 0,
              children: (0, n.jsx)(B, { current: r.current, target: r.target, progressColor: s, children: a }),
          });
};
var w = r(821609),
    D = r(450481),
    G = r(375708),
    H = r(634293);
function M(e) {
    let { product: t, onUseNowClick: r, useNowButtonVariant: l = "overlay-secondary" } = e,
        { handleUseNow: s, isApplying: a } = (0, D.p)({ product: t });
    return (0, n.jsx)("div", {
        className: H.l,
        children: (0, n.jsx)(w.$, {
            variant: l,
            onClick: () => {
                (r?.(), s());
            },
            size: "md",
            fullWidth: !0,
            minWidth: 96,
            loading: a,
            text: G.intl.string(G.t.MAS7uK),
        }),
    });
}
let U = function (e) {
    let {
        promotionRewardStatus: t,
        rewardProduct: r,
        claimRewardButtonVariant: l,
        useNowButtonVariant: s,
        isClaiming: a,
        onClaim: i,
        onUseNowClick: o,
    } = e;
    return t === p.GM.CONSUMED && null != r
        ? (0, n.jsx)(M, { product: r, onUseNowClick: o, useNowButtonVariant: s })
        : t === p.GM.EARNED
          ? (0, n.jsx)("div", {
                className: H.l,
                children: (0, n.jsx)(w.$, {
                    text: G.intl.string(G.t.pVBlCH),
                    variant: l,
                    fullWidth: !0,
                    minWidth: 96,
                    loading: a,
                    onClick: i,
                }),
            })
          : null;
};
var F = r(376357),
    K = r(857250),
    V = r(97483),
    W = r(765178),
    X = r(39418),
    z = r(828596),
    Y = r(815996),
    Z = r(674658),
    $ = r(652215),
    q = r(497901),
    J = r(61750),
    Q = r(602051),
    ee = r(119739);
let et = { [h.RB.LIGHT]: "theme-light", [h.RB.DARK]: "theme-dark" },
    er = { [h.RB.LIGHT]: "overlay-secondary", [h.RB.DARK]: "overlay-primary" },
    en = h.RB.DARK;
function el(e, t, r) {
    let n = l.useCallback((r) => (0, v.h)(r, e, t), [e, t]);
    return {
        handleInlineHelpTextClick: n,
        handleClaim: l.useCallback(() => {
            ((0, v.l)(e, t, Q.Z.CLAIM_BUTTON_CLICKED), r());
        }, [e, t, r]),
        handleUseNowClick: l.useCallback(() => {
            (0, v.l)(e, t, Q.Z.USE_NOW_BUTTON_CLICKED);
        }, [e, t]),
    };
}
function es(e) {
    let {
            promotion: t,
            surface: r,
            assetPath: l,
            progress: s,
            progressColor: a,
            title: i,
            progressText: d,
            timeLeftText: g,
            contentThemeClassName: m,
            rewardProduct: E,
            claimRewardButtonVariant: _,
            isClaiming: p,
            onClaim: h,
        } = e,
        I = null != s ? d : i,
        { handleInlineHelpTextClick: S, handleClaim: A, handleUseNowClick: L } = el(t, r, h);
    return (0, n.jsxs)(o.B, {
        direction: "horizontal",
        gap: 16,
        align: "center",
        className: m,
        children: [
            (0, n.jsx)(R, { assetPath: l, progress: s, progressText: d, progressColor: a }),
            (0, n.jsxs)(o.B, {
                direction: "vertical",
                gap: 8,
                align: "start",
                className: ee._,
                onClick: S,
                children: [
                    null != I &&
                        (0, n.jsx)(u.E, { variant: "text-md/bold", color: "text-strong", children: (0, C.U)(I) }),
                    null != g && (0, n.jsx)(O, { icon: c.ClockIcon, text: g }),
                    (0, n.jsx)(U, {
                        promotionRewardStatus: t.rewardStatus,
                        rewardProduct: E,
                        claimRewardButtonVariant: _,
                        useNowButtonVariant: _,
                        isClaiming: p,
                        onClaim: A,
                        onUseNowClick: L,
                    }),
                ],
            }),
        ],
    });
}
function ea(e) {
    let {
            promotion: t,
            surface: r,
            assetPath: s,
            progress: i,
            progressColor: _,
            backgroundUrl: h,
            title: I,
            description: S,
            progressText: L,
            timeLeftText: x,
            contentThemeClassName: f,
            rewardProduct: y,
            claimRewardButtonVariant: k,
            helpCenterId: N,
            isClaiming: T,
            onClaim: B,
        } = e,
        b = null != N && "" !== N ? A.A.getArticleURL(N) : null,
        { handleInlineHelpTextClick: P, handleClaim: w, handleUseNowClick: D } = el(t, r, B),
        H = l.useCallback(() => {
            null != b && ((0, v.l)(t, r, Q.Z.INFO_BUTTON_CLICKED), (0, E.A)(b));
        }, [t, r, b]);
    return (0, n.jsxs)(o.B, {
        direction: "horizontal",
        gap: 16,
        padding: 24,
        align: "center",
        justify: "space-between",
        className: a()(ee.N, f),
        style: { backgroundImage: `url(${h})` },
        children: [
            (0, n.jsx)(R, { assetPath: s, progress: i, progressText: L, progressColor: _ }),
            (0, n.jsxs)(o.B, {
                direction: "vertical",
                gap: 8,
                align: "start",
                className: ee._,
                onClick: P,
                children: [
                    (0, n.jsx)(u.E, { variant: "text-md/bold", color: "text-strong", children: (0, C.U)(I) }),
                    null != S &&
                        (0, n.jsx)(u.E, { variant: "text-sm/normal", color: "text-subtle", children: (0, C.U)(S) }),
                    (0, n.jsxs)(o.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "center",
                        wrap: !0,
                        children: [
                            null != L && (0, n.jsx)(O, { text: L, indicatorColor: _ ?? j }),
                            null != x && (0, n.jsx)(O, { icon: c.ClockIcon, text: x }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)(o.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                fullWidth: !1,
                children: [
                    (0, n.jsx)(U, {
                        promotionRewardStatus: t.rewardStatus,
                        rewardProduct: y,
                        claimRewardButtonVariant: k,
                        isClaiming: T,
                        onClaim: w,
                        onUseNowClick: D,
                    }),
                    t.rewardStatus !== p.GM.EARNED &&
                        null != b &&
                        (0, n.jsx)(d.m, {
                            text: G.intl.string(G.t.FdGl5A),
                            ariaHidden: !0,
                            children: (0, n.jsx)(g.K, {
                                "aria-label": G.intl.string(G.t.FdGl5A),
                                icon: m.CircleInformationIcon,
                                variant: "overlay-secondary",
                                size: "md",
                                onClick: H,
                            }),
                        }),
                ],
            }),
        ],
    });
}
function ei(e) {
    let { variant: t, surface: r, promotion: s, collectAndClaim: a, rewardProduct: o, isClaiming: u, onClaim: c } = e,
        d = (0, i.bG)([S.default], () => S.default.locale);
    l.useEffect(() => {
        (0, v.l)(s, r, Q.Z.PROMO_VIEWED);
    }, [s.id, r]);
    let { shared: g } = a,
        { assets: m, style: E } = g.progressIndicator,
        _ = g.helpCenter?.id,
        C = E?.contentTheme ?? en,
        h = (function (e, t) {
            let { hiddenUrl: r, revealedUrl: n } = t;
            switch (e.rewardStatus) {
                case p.GM.IN_PROGRESS:
                    return { assetPath: r ?? n, showProgressRing: !0, timeLeftDate: e.endsAt };
                case p.GM.EARNED:
                    return { assetPath: r ?? n, showProgressRing: !0, timeLeftDate: e.redemptionEndsAt ?? e.endsAt };
                case p.GM.CONSUMED:
                    return { assetPath: n, showProgressRing: !1, timeLeftDate: null };
                default:
                    return null;
            }
        })(s, m.rewardPreview),
        I = (0, q.A)(h?.timeLeftDate);
    if (null == h) return null;
    let { progress: A } = s;
    if (
        (null == A &&
            (s.rewardStatus === p.GM.EARNED || s.rewardStatus === p.GM.CONSUMED) &&
            (A = { current: 4, target: 4, label: "collected" }),
        h.showProgressRing && null == A)
    )
        return null;
    let L = h.showProgressRing && null != A,
        {
            title: f,
            description: O,
            progressText: y,
            timeLeftText: k,
        } = (0, x.MZ)({
            promotion: s,
            promotionProgress: A,
            progressIndicator: g.progressIndicator,
            helpCenterId: _,
            daysRemaining: I,
            locale: d,
        }),
        N = {
            promotion: s,
            surface: r,
            assetPath: h.assetPath,
            progress: L ? A : null,
            progressColor: E?.progressColor,
            backgroundUrl: m.backgroundUrl,
            title: f,
            description: O,
            progressText: y,
            timeLeftText: k,
            contentThemeClassName: et[C],
            rewardProduct: o,
            claimRewardButtonVariant: er[C],
            helpCenterId: _,
            isClaiming: u,
            onClaim: c,
        };
    return "condensed" === t ? (0, n.jsx)(es, { ...N }) : (0, n.jsx)(ea, { ...N });
}
let eo = function (e) {
    let { variant: t, surface: r, collectionId: s } = e,
        a = (0, L.S)(),
        { analyticsLocations: i } = (0, _.Ay)(),
        {
            onClaim: o,
            isClaiming: u,
            rewardProduct: c,
        } = (function (e, t) {
            let [r, n] = l.useState(!1),
                [s, a] = l.useState(0),
                i = l.useRef(0),
                o = e?.id,
                u = e?.rewardConfig?.action?.skuIds[0] ?? null,
                [c, d] = l.useState(null),
                { product: g } = (0, Z.q)(u ?? c, !0);
            return (
                l.useEffect(() => {
                    s !== i.current && null != g && ((i.current = s), t?.(g));
                }, [s, g, t]),
                {
                    onClaim: l.useCallback(async () => {
                        if (null != o) {
                            (n(!0), d(u));
                            try {
                                await (0, z.cF)(o, $.FYj);
                            } catch (e) {
                                ((0, X.o)(e),
                                    (0, F.P)((0, K.o)(G.intl.string(G.t.F8FvUy), V.Ck.FAILURE)),
                                    W.O.announce(G.intl.string(G.t.F8FvUy)),
                                    n(!1));
                                return;
                            }
                            a((e) => e + 1);
                            try {
                                await (0, Y.gB)();
                            } catch (e) {
                                (0, X.o)(e);
                            } finally {
                                n(!1);
                            }
                        }
                    }, [o, u]),
                    isClaiming: r,
                    rewardProduct: g,
                }
            );
        })(
            a,
            l.useCallback(
                (e) => {
                    (0, J.A)({ product: e, analyticsLocations: i });
                },
                [i],
            ),
        ),
        d = (0, I.XF)(a);
    return null == a || null == d || null == s || d.collectionId !== s
        ? null
        : (0, n.jsx)(ei, {
              variant: t,
              surface: r,
              promotion: a,
              collectAndClaim: d,
              rewardProduct: c,
              isClaiming: u,
              onClaim: o,
          });
};
