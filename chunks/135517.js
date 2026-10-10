r.d(t, { A: () => er });
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
    h = r(885574),
    m = r(975807),
    E = r(688810),
    p = r(812095),
    _ = r(288106),
    C = r(604913),
    v = r(65238),
    L = r(773669),
    f = r(975571),
    S = r(304210),
    I = r(324157),
    x = r(480750),
    A = r(727142);
let k = function (e) {
    let { text: t, icon: r, indicatorColor: l } = e;
    return (0, n.jsxs)("span", {
        className: A.I,
        children: [
            null != l &&
                (0, n.jsx)("svg", {
                    className: A.q,
                    viewBox: "0 0 8 8",
                    "aria-hidden": !0,
                    children: (0, n.jsx)("circle", { cx: "4", cy: "4", r: "3.5", fill: l }),
                }),
            null != r && (0, n.jsx)(r, { size: "xxs", color: "currentColor" }),
            (0, n.jsx)(u.E, { variant: "text-xs/medium", color: "none", children: t }),
        ],
    });
};
var y = r(262056),
    O = r(775602),
    N = r(295986);
function j(e) {
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
        (0, n.jsx)("canvas", { ref: r, className: N.C, width: 120, height: 120, "aria-hidden": "true" })
    );
}
let T = function (e) {
    let { assetPath: t, progress: r, progressText: l, progressColor: s } = e,
        a = (0, i.bG)([O.Ay], () => O.Ay.useReducedMotion)
            ? (0, n.jsx)(j, { assetPath: t })
            : (0, n.jsx)("img", { src: t, alt: "", className: N.C, width: 120, height: 120 });
    return null == r
        ? a
        : (0, n.jsx)("div", {
              className: N.U,
              role: "progressbar",
              "aria-valuenow": r.current,
              "aria-valuemin": 0,
              "aria-valuemax": r.target,
              "aria-valuetext": l ?? void 0,
              children: (0, n.jsx)(y.A, { current: r.current, target: r.target, progressColor: s, children: a }),
          });
};
var b = r(821609),
    B = r(450481),
    w = r(660183),
    P = r(634293);
function R(e) {
    let { product: t, onUseNowClick: r, useNowButtonVariant: l = "overlay-secondary" } = e,
        { handleUseNow: s, isApplying: a } = (0, B.p)({ product: t });
    return (0, n.jsx)("div", {
        className: P.l,
        children: (0, n.jsx)(b.$, {
            variant: l,
            onClick: () => {
                (r?.(), s());
            },
            size: "md",
            fullWidth: !0,
            minWidth: 96,
            loading: a,
            text: w.intl.string(w.t.MAS7uK),
        }),
    });
}
let D = function (e) {
    let {
        promotionRewardStatus: t,
        rewardProduct: r,
        claimRewardButtonVariant: l,
        useNowButtonVariant: s,
        isClaiming: a,
        onClaim: i,
        onUseNowClick: o,
    } = e;
    return t === _.GM.CONSUMED && null != r
        ? (0, n.jsx)(R, { product: r, onUseNowClick: o, useNowButtonVariant: s })
        : t === _.GM.EARNED
          ? (0, n.jsx)("div", {
                className: P.l,
                children: (0, n.jsx)(b.$, {
                    text: w.intl.string(w.t.pVBlCH),
                    variant: l,
                    fullWidth: !0,
                    minWidth: 96,
                    loading: a,
                    onClick: i,
                }),
            })
          : null;
};
var M = r(858899),
    H = r(765178),
    G = r(39418),
    U = r(828596),
    F = r(815996),
    K = r(674658),
    V = r(652215),
    W = r(497901),
    X = r(61750),
    $ = r(602051),
    z = r(119739);
let Y = { [C.RB.LIGHT]: "theme-light", [C.RB.DARK]: "theme-dark" },
    Z = { [C.RB.LIGHT]: "overlay-secondary", [C.RB.DARK]: "overlay-primary" },
    q = C.RB.DARK;
function J(e, t, r) {
    let n = l.useCallback((r) => (0, x.h)(r, e, t), [e, t]);
    return {
        handleInlineHelpTextClick: n,
        handleClaim: l.useCallback(() => {
            ((0, x.l)(e, t, $.Z.CLAIM_BUTTON_CLICKED), r());
        }, [e, t, r]),
        handleUseNowClick: l.useCallback(() => {
            (0, x.l)(e, t, $.Z.USE_NOW_BUTTON_CLICKED);
        }, [e, t]),
    };
}
function Q(e) {
    let {
            promotion: t,
            surface: r,
            assetPath: l,
            progress: s,
            progressColor: a,
            title: i,
            progressText: d,
            timeLeftText: g,
            contentThemeClassName: h,
            rewardProduct: m,
            claimRewardButtonVariant: E,
            isClaiming: _,
            onClaim: C,
        } = e,
        v = null != s ? d : i,
        { handleInlineHelpTextClick: L, handleClaim: f, handleUseNowClick: S } = J(t, r, C);
    return (0, n.jsxs)(o.B, {
        direction: "horizontal",
        gap: 16,
        align: "center",
        className: h,
        children: [
            (0, n.jsx)(T, { assetPath: l, progress: s, progressText: d, progressColor: a }),
            (0, n.jsxs)(o.B, {
                direction: "vertical",
                gap: 8,
                align: "start",
                className: z._,
                onClick: L,
                children: [
                    null != v &&
                        (0, n.jsx)(u.E, { variant: "text-md/bold", color: "text-strong", children: (0, p.U)(v) }),
                    null != g && (0, n.jsx)(k, { icon: c.ClockIcon, text: g }),
                    (0, n.jsx)(D, {
                        promotionRewardStatus: t.rewardStatus,
                        rewardProduct: m,
                        claimRewardButtonVariant: E,
                        useNowButtonVariant: E,
                        isClaiming: _,
                        onClaim: f,
                        onUseNowClick: S,
                    }),
                ],
            }),
        ],
    });
}
function ee(e) {
    let {
            promotion: t,
            surface: r,
            assetPath: s,
            progress: i,
            progressColor: E,
            backgroundUrl: C,
            title: v,
            description: L,
            progressText: S,
            timeLeftText: I,
            contentThemeClassName: A,
            rewardProduct: O,
            claimRewardButtonVariant: N,
            helpCenterId: j,
            isClaiming: b,
            onClaim: B,
        } = e,
        P = null != j && "" !== j ? f.A.getArticleURL(j) : null,
        { handleInlineHelpTextClick: R, handleClaim: M, handleUseNowClick: H } = J(t, r, B),
        G = l.useCallback(() => {
            null != P && ((0, x.l)(t, r, $.Z.INFO_BUTTON_CLICKED), (0, m.A)(P));
        }, [t, r, P]);
    return (0, n.jsxs)(o.B, {
        direction: "horizontal",
        gap: 16,
        padding: 24,
        align: "center",
        justify: "space-between",
        className: a()(z.N, A),
        style: { backgroundImage: `url(${C})` },
        children: [
            (0, n.jsx)(T, { assetPath: s, progress: i, progressText: S, progressColor: E }),
            (0, n.jsxs)(o.B, {
                direction: "vertical",
                gap: 8,
                align: "start",
                className: z._,
                onClick: R,
                children: [
                    (0, n.jsx)(u.E, { variant: "text-md/bold", color: "text-strong", children: (0, p.U)(v) }),
                    null != L &&
                        (0, n.jsx)(u.E, { variant: "text-sm/normal", color: "text-subtle", children: (0, p.U)(L) }),
                    (0, n.jsxs)(o.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "center",
                        wrap: !0,
                        children: [
                            null != S && (0, n.jsx)(k, { text: S, indicatorColor: E ?? y.W }),
                            null != I && (0, n.jsx)(k, { icon: c.ClockIcon, text: I }),
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
                    (0, n.jsx)(D, {
                        promotionRewardStatus: t.rewardStatus,
                        rewardProduct: O,
                        claimRewardButtonVariant: N,
                        isClaiming: b,
                        onClaim: M,
                        onUseNowClick: H,
                    }),
                    t.rewardStatus !== _.GM.EARNED &&
                        null != P &&
                        (0, n.jsx)(d.m, {
                            text: w.intl.string(w.t.FdGl5A),
                            ariaHidden: !0,
                            children: (0, n.jsx)(g.K, {
                                "aria-label": w.intl.string(w.t.FdGl5A),
                                icon: h.CircleInformationIcon,
                                variant: "overlay-secondary",
                                size: "md",
                                onClick: G,
                            }),
                        }),
                ],
            }),
        ],
    });
}
function et(e) {
    let { variant: t, surface: r, promotion: s, collectAndClaim: a, rewardProduct: o, isClaiming: u, onClaim: c } = e,
        d = (0, i.bG)([L.default], () => L.default.locale);
    l.useEffect(() => {
        (0, x.l)(s, r, $.Z.PROMO_VIEWED);
    }, [s.id, r]);
    let { shared: g } = a,
        { assets: h, style: m } = g.progressIndicator,
        E = g.helpCenter?.id,
        p = m?.contentTheme ?? q,
        C = (function (e, t) {
            let { hiddenUrl: r, revealedUrl: n } = t;
            switch (e.rewardStatus) {
                case _.GM.IN_PROGRESS:
                    return { assetPath: r ?? n, showProgressRing: !0, timeLeftDate: e.endsAt };
                case _.GM.EARNED:
                    return { assetPath: r ?? n, showProgressRing: !0, timeLeftDate: e.redemptionEndsAt ?? e.endsAt };
                case _.GM.CONSUMED:
                    return { assetPath: n, showProgressRing: !1, timeLeftDate: null };
                default:
                    return null;
            }
        })(s, h.rewardPreview),
        v = (0, W.A)(C?.timeLeftDate);
    if (null == C) return null;
    let { progress: f } = s;
    if (
        (null == f &&
            (s.rewardStatus === _.GM.EARNED || s.rewardStatus === _.GM.CONSUMED) &&
            (f = { current: 4, target: 4, label: "collected" }),
        C.showProgressRing && null == f)
    )
        return null;
    let S = C.showProgressRing && null != f,
        {
            title: A,
            description: k,
            progressText: y,
            timeLeftText: O,
        } = (0, I.MZ)({
            promotion: s,
            promotionProgress: f,
            progressIndicator: g.progressIndicator,
            helpCenterId: E,
            daysRemaining: v,
            locale: d,
        }),
        N = {
            promotion: s,
            surface: r,
            assetPath: C.assetPath,
            progress: S ? f : null,
            progressColor: m?.progressColor,
            backgroundUrl: h.backgroundUrl,
            title: A,
            description: k,
            progressText: y,
            timeLeftText: O,
            contentThemeClassName: Y[p],
            rewardProduct: o,
            claimRewardButtonVariant: Z[p],
            helpCenterId: E,
            isClaiming: u,
            onClaim: c,
        };
    return "condensed" === t ? (0, n.jsx)(Q, { ...N }) : (0, n.jsx)(ee, { ...N });
}
let er = function (e) {
    let { variant: t, surface: r, collectionId: s } = e,
        a = (0, S.S)(),
        { analyticsLocations: i } = (0, E.Ay)(),
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
                { product: g } = (0, K.q)(u ?? c, !0);
            return (
                l.useEffect(() => {
                    s !== i.current && null != g && ((i.current = s), t?.(g));
                }, [s, g, t]),
                {
                    onClaim: l.useCallback(async () => {
                        if (null != o) {
                            (n(!0), d(u));
                            try {
                                await (0, U.cF)(o, V.FYj);
                            } catch (e) {
                                ((0, G.o)(e),
                                    (0, M.P0)({ text: w.intl.string(w.t.F8FvUy), variant: "critical" }),
                                    H.O.announce(w.intl.string(w.t.F8FvUy)),
                                    n(!1));
                                return;
                            }
                            a((e) => e + 1);
                            try {
                                await (0, F.gB)();
                            } catch (e) {
                                (0, G.o)(e);
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
                    (0, X.A)({ product: e, analyticsLocations: i });
                },
                [i],
            ),
        ),
        d = (0, v.XF)(a);
    return null == a || null == d || null == s || d.collectionId !== s
        ? null
        : (0, n.jsx)(et, {
              variant: t,
              surface: r,
              promotion: a,
              collectAndClaim: d,
              rewardProduct: c,
              isClaiming: u,
              onClaim: o,
          });
};
