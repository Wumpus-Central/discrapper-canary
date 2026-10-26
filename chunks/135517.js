n.d(t, { A: () => en });
var r = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    i = n(331322),
    u = n(834730),
    c = n(406810),
    d = n(866665),
    p = n(408278),
    m = n(885574),
    g = n(975807),
    h = n(688810),
    E = n(812095),
    C = n(288106),
    f = n(604913),
    v = n(65238),
    x = n(773669),
    y = n(975571),
    _ = n(304210),
    I = n(324157),
    L = n(480750),
    A = n(727142);
let k = function (e) {
    let { text: t, icon: n, indicatorColor: l } = e;
    return (0, r.jsxs)("span", {
        className: A.I,
        children: [
            null != l &&
                (0, r.jsx)("svg", {
                    className: A.q,
                    viewBox: "0 0 8 8",
                    "aria-hidden": !0,
                    children: (0, r.jsx)("circle", { cx: "4", cy: "4", r: "3.5", fill: l }),
                }),
            null != n && (0, r.jsx)(n, { size: "xxs", color: "currentColor" }),
            (0, r.jsx)(u.E, { variant: "text-xs/medium", color: "none", children: t }),
        ],
    });
};
var S = n(262056),
    b = n(775602),
    O = n(295986);
function j(e) {
    let { assetPath: t } = e,
        n = l.useRef(null);
    return (
        l.useEffect(() => {
            let e = new Image();
            return (
                (e.onload = () => {
                    let t = n.current,
                        r = t?.getContext("2d");
                    null != t &&
                        null != r &&
                        ((t.width = e.naturalWidth), (t.height = e.naturalHeight), r.drawImage(e, 0, 0));
                }),
                (e.src = t),
                () => {
                    e.onload = null;
                }
            );
        }, [t]),
        (0, r.jsx)("canvas", { ref: n, className: O.C, width: 120, height: 120, "aria-hidden": "true" })
    );
}
let N = function (e) {
    let { assetPath: t, progress: n, progressText: l, progressColor: s } = e,
        a = (0, o.bG)([b.Ay], () => b.Ay.useReducedMotion)
            ? (0, r.jsx)(j, { assetPath: t })
            : (0, r.jsx)("img", { src: t, alt: "", className: O.C, width: 120, height: 120 });
    return null == n
        ? a
        : (0, r.jsx)("div", {
              className: O.U,
              role: "progressbar",
              "aria-valuenow": n.current,
              "aria-valuemin": 0,
              "aria-valuemax": n.target,
              "aria-valuetext": l ?? void 0,
              children: (0, r.jsx)(S.A, { current: n.current, target: n.target, progressColor: s, children: a }),
          });
};
var T = n(821609),
    w = n(450481),
    B = n(105292),
    R = n(634293);
function P(e) {
    let { product: t, onUseNowClick: n, useNowButtonVariant: l = "overlay-secondary" } = e,
        { handleUseNow: s, isApplying: a } = (0, w.p)({ product: t });
    return (0, r.jsx)("div", {
        className: R.l,
        children: (0, r.jsx)(T.$, {
            variant: l,
            onClick: () => {
                (n?.(), s());
            },
            size: "md",
            fullWidth: !0,
            minWidth: 96,
            loading: a,
            text: B.intl.string(B.t.MAS7uK),
        }),
    });
}
let D = function (e) {
    let {
        promotionRewardStatus: t,
        rewardProduct: n,
        claimRewardButtonVariant: l,
        useNowButtonVariant: s,
        isClaiming: a,
        onClaim: o,
        onUseNowClick: i,
    } = e;
    return t === C.GM.CONSUMED && null != n
        ? (0, r.jsx)(P, { product: n, onUseNowClick: i, useNowButtonVariant: s })
        : t === C.GM.EARNED
          ? (0, r.jsx)("div", {
                className: R.l,
                children: (0, r.jsx)(T.$, {
                    text: B.intl.string(B.t.pVBlCH),
                    variant: l,
                    fullWidth: !0,
                    minWidth: 96,
                    loading: a,
                    onClick: o,
                }),
            })
          : null;
};
var M = n(858899),
    H = n(765178),
    $ = n(39418),
    G = n(828596),
    U = n(815996),
    F = n(674658),
    K = n(652215),
    W = n(497901),
    V = n(61750),
    X = n(602051),
    z = n(119739);
let q = { [f.RB.LIGHT]: "theme-light", [f.RB.DARK]: "theme-dark" },
    Z = { [f.RB.LIGHT]: "overlay-secondary", [f.RB.DARK]: "overlay-primary" },
    Y = f.RB.DARK;
function J(e, t, n) {
    let r = l.useCallback((n) => (0, L.h)(n, e, t), [e, t]);
    return {
        handleInlineHelpTextClick: r,
        handleClaim: l.useCallback(() => {
            ((0, L.l)(e, t, X.Z.CLAIM_BUTTON_CLICKED), n());
        }, [e, t, n]),
        handleUseNowClick: l.useCallback(() => {
            (0, L.l)(e, t, X.Z.USE_NOW_BUTTON_CLICKED);
        }, [e, t]),
    };
}
function Q(e) {
    let {
            promotion: t,
            surface: n,
            assetPath: l,
            progress: s,
            progressColor: a,
            title: o,
            progressText: d,
            timeLeftText: p,
            contentThemeClassName: m,
            rewardProduct: g,
            claimRewardButtonVariant: h,
            isClaiming: C,
            onClaim: f,
        } = e,
        v = null != s ? d : o,
        { handleInlineHelpTextClick: x, handleClaim: y, handleUseNowClick: _ } = J(t, n, f);
    return (0, r.jsxs)(i.B, {
        direction: "horizontal",
        gap: 16,
        align: "center",
        className: m,
        children: [
            (0, r.jsx)(N, { assetPath: l, progress: s, progressText: d, progressColor: a }),
            (0, r.jsxs)(i.B, {
                direction: "vertical",
                gap: 8,
                align: "start",
                className: z._,
                onClick: x,
                children: [
                    null != v &&
                        (0, r.jsx)(u.E, { variant: "text-md/bold", color: "text-strong", children: (0, E.U)(v) }),
                    null != p && (0, r.jsx)(k, { icon: c.ClockIcon, text: p }),
                    (0, r.jsx)(D, {
                        promotionRewardStatus: t.rewardStatus,
                        rewardProduct: g,
                        claimRewardButtonVariant: h,
                        useNowButtonVariant: h,
                        isClaiming: C,
                        onClaim: y,
                        onUseNowClick: _,
                    }),
                ],
            }),
        ],
    });
}
function ee(e) {
    let {
            promotion: t,
            surface: n,
            assetPath: s,
            progress: o,
            progressColor: h,
            backgroundUrl: f,
            title: v,
            description: x,
            progressText: _,
            timeLeftText: I,
            contentThemeClassName: A,
            rewardProduct: b,
            claimRewardButtonVariant: O,
            helpCenterId: j,
            isClaiming: T,
            onClaim: w,
        } = e,
        R = null != j && "" !== j ? y.A.getArticleURL(j) : null,
        { handleInlineHelpTextClick: P, handleClaim: M, handleUseNowClick: H } = J(t, n, w),
        $ = l.useCallback(() => {
            null != R && ((0, L.l)(t, n, X.Z.INFO_BUTTON_CLICKED), (0, g.A)(R));
        }, [t, n, R]);
    return (0, r.jsxs)(i.B, {
        direction: "horizontal",
        gap: 16,
        padding: 24,
        align: "center",
        justify: "space-between",
        className: a()(z.N, A),
        style: { backgroundImage: `url(${f})` },
        children: [
            (0, r.jsx)(N, { assetPath: s, progress: o, progressText: _, progressColor: h }),
            (0, r.jsxs)(i.B, {
                direction: "vertical",
                gap: 8,
                align: "start",
                className: z._,
                onClick: P,
                children: [
                    (0, r.jsx)(u.E, { variant: "text-md/bold", color: "text-strong", children: (0, E.U)(v) }),
                    null != x &&
                        (0, r.jsx)(u.E, { variant: "text-sm/normal", color: "text-subtle", children: (0, E.U)(x) }),
                    (0, r.jsxs)(i.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "center",
                        wrap: !0,
                        children: [
                            null != _ && (0, r.jsx)(k, { text: _, indicatorColor: h ?? S.W }),
                            null != I && (0, r.jsx)(k, { icon: c.ClockIcon, text: I }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)(i.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                fullWidth: !1,
                children: [
                    (0, r.jsx)(D, {
                        promotionRewardStatus: t.rewardStatus,
                        rewardProduct: b,
                        claimRewardButtonVariant: O,
                        isClaiming: T,
                        onClaim: M,
                        onUseNowClick: H,
                    }),
                    t.rewardStatus !== C.GM.EARNED &&
                        null != R &&
                        (0, r.jsx)(d.m, {
                            text: B.intl.string(B.t.FdGl5A),
                            ariaHidden: !0,
                            children: (0, r.jsx)(p.K, {
                                "aria-label": B.intl.string(B.t.FdGl5A),
                                icon: m.CircleInformationIcon,
                                variant: "overlay-secondary",
                                size: "md",
                                onClick: $,
                            }),
                        }),
                ],
            }),
        ],
    });
}
function et(e) {
    let { variant: t, surface: n, promotion: s, collectAndClaim: a, rewardProduct: i, isClaiming: u, onClaim: c } = e,
        d = (0, o.bG)([x.default], () => x.default.locale);
    l.useEffect(() => {
        (0, L.l)(s, n, X.Z.PROMO_VIEWED);
    }, [s.id, n]);
    let { shared: p } = a,
        { assets: m, style: g } = p.progressIndicator,
        h = p.helpCenter?.id,
        E = g?.contentTheme ?? Y,
        f = (function (e, t) {
            let { hiddenUrl: n, revealedUrl: r } = t;
            switch (e.rewardStatus) {
                case C.GM.IN_PROGRESS:
                    return { assetPath: n ?? r, showProgressRing: !0, timeLeftDate: e.endsAt };
                case C.GM.EARNED:
                    return { assetPath: n ?? r, showProgressRing: !0, timeLeftDate: e.redemptionEndsAt ?? e.endsAt };
                case C.GM.CONSUMED:
                    return { assetPath: r, showProgressRing: !1, timeLeftDate: null };
                default:
                    return null;
            }
        })(s, m.rewardPreview),
        v = (0, W.A)(f?.timeLeftDate);
    if (null == f) return null;
    let { progress: y } = s;
    if (
        (null == y &&
            (s.rewardStatus === C.GM.EARNED || s.rewardStatus === C.GM.CONSUMED) &&
            (y = { current: 4, target: 4, label: "collected" }),
        f.showProgressRing && null == y)
    )
        return null;
    let _ = f.showProgressRing && null != y,
        {
            title: A,
            description: k,
            progressText: S,
            timeLeftText: b,
        } = (0, I.MZ)({
            promotion: s,
            promotionProgress: y,
            progressIndicator: p.progressIndicator,
            helpCenterId: h,
            daysRemaining: v,
            locale: d,
        }),
        O = {
            promotion: s,
            surface: n,
            assetPath: f.assetPath,
            progress: _ ? y : null,
            progressColor: g?.progressColor,
            backgroundUrl: m.backgroundUrl,
            title: A,
            description: k,
            progressText: S,
            timeLeftText: b,
            contentThemeClassName: q[E],
            rewardProduct: i,
            claimRewardButtonVariant: Z[E],
            helpCenterId: h,
            isClaiming: u,
            onClaim: c,
        };
    return "condensed" === t ? (0, r.jsx)(Q, { ...O }) : (0, r.jsx)(ee, { ...O });
}
let en = function (e) {
    let { variant: t, surface: n, collectionId: s } = e,
        a = (0, _.ST)(),
        { analyticsLocations: o } = (0, h.Ay)(),
        {
            onClaim: i,
            isClaiming: u,
            rewardProduct: c,
        } = (function (e, t) {
            let [n, r] = l.useState(!1),
                [s, a] = l.useState(0),
                o = l.useRef(0),
                i = e?.id,
                u = e?.rewardConfig?.action?.skuIds[0] ?? null,
                [c, d] = l.useState(null),
                { product: p } = (0, F.q)(u ?? c, !0);
            return (
                l.useEffect(() => {
                    s !== o.current && null != p && ((o.current = s), t?.(p));
                }, [s, p, t]),
                {
                    onClaim: l.useCallback(async () => {
                        if (null != i) {
                            (r(!0), d(u));
                            try {
                                await (0, G.cF)(i, K.FYj);
                            } catch (e) {
                                ((0, $.o)(e),
                                    (0, M.P0)({ text: B.intl.string(B.t.F8FvUy), variant: "critical" }),
                                    H.O.announce(B.intl.string(B.t.F8FvUy)),
                                    r(!1));
                                return;
                            }
                            a((e) => e + 1);
                            try {
                                await (0, U.gB)();
                            } catch (e) {
                                (0, $.o)(e);
                            } finally {
                                r(!1);
                            }
                        }
                    }, [i, u]),
                    isClaiming: n,
                    rewardProduct: p,
                }
            );
        })(
            a,
            l.useCallback(
                (e) => {
                    (0, V.A)({ product: e, analyticsLocations: o });
                },
                [o],
            ),
        ),
        d = (0, v.XF)(a);
    return null == a || null == d || null == s || d.collectionId !== s
        ? null
        : (0, r.jsx)(et, {
              variant: t,
              surface: n,
              promotion: a,
              collectAndClaim: d,
              rewardProduct: c,
              isClaiming: u,
              onClaim: i,
          });
};
