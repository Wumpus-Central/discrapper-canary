r.d(t, { A: () => ea });
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
    E = r(885574),
    m = r(975807),
    p = r(688810),
    _ = r(812095),
    h = r(288106),
    C = r(604913),
    v = r(65238),
    L = r(773669),
    S = r(975571),
    I = r(304210),
    f = r(324157),
    A = r(480750),
    x = r(727142);
let O = function (e) {
    let { text: t, icon: r, indicatorColor: l } = e;
    return (0, n.jsxs)("span", {
        className: x.I,
        children: [
            null != l &&
                (0, n.jsx)("svg", {
                    className: x.q,
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
    b = "var(--status-positive)",
    j = function (e) {
        let { current: t, target: r, progressColor: l = b, children: s } = e,
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
var B = r(295986);
function w(e) {
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
        (0, n.jsx)("canvas", { ref: r, className: B.C, width: 120, height: 120, "aria-hidden": "true" })
    );
}
let R = function (e) {
    let { assetPath: t, progress: r, progressText: l, progressColor: s } = e,
        a = (0, i.bG)([k.Ay], () => k.Ay.useReducedMotion)
            ? (0, n.jsx)(w, { assetPath: t })
            : (0, n.jsx)("img", { src: t, alt: "", className: B.C, width: 120, height: 120 });
    return null == r
        ? a
        : (0, n.jsx)("div", {
              className: B.U,
              role: "progressbar",
              "aria-valuenow": r.current,
              "aria-valuemin": 0,
              "aria-valuemax": r.target,
              "aria-valuetext": l ?? void 0,
              children: (0, n.jsx)(j, { current: r.current, target: r.target, progressColor: s, children: a }),
          });
};
var P = r(821609),
    D = r(450481),
    H = r(660183),
    G = r(634293);
function M(e) {
    let { product: t, onUseNowClick: r, useNowButtonVariant: l = "overlay-secondary" } = e,
        { handleUseNow: s, isApplying: a } = (0, D.p)({ product: t });
    return (0, n.jsx)("div", {
        className: G.l,
        children: (0, n.jsx)(P.$, {
            variant: l,
            onClick: () => {
                (r?.(), s());
            },
            size: "md",
            fullWidth: !0,
            minWidth: 96,
            loading: a,
            text: H.intl.string(H.t.MAS7uK),
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
    return t === h.GM.CONSUMED && null != r
        ? (0, n.jsx)(M, { product: r, onUseNowClick: o, useNowButtonVariant: s })
        : t === h.GM.EARNED
          ? (0, n.jsx)("div", {
                className: G.l,
                children: (0, n.jsx)(P.$, {
                    text: H.intl.string(H.t.pVBlCH),
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
    K = r(765178),
    V = r(39418),
    W = r(828596),
    X = r(815996),
    $ = r(674658),
    z = r(652215),
    Y = r(497901),
    Z = r(61750),
    q = r(602051),
    J = r(119739);
let Q = { [C.RB.LIGHT]: "theme-light", [C.RB.DARK]: "theme-dark" },
    ee = { [C.RB.LIGHT]: "overlay-secondary", [C.RB.DARK]: "overlay-primary" },
    et = C.RB.DARK;
function er(e, t, r) {
    let n = l.useCallback((r) => (0, A.h)(r, e, t), [e, t]);
    return {
        handleInlineHelpTextClick: n,
        handleClaim: l.useCallback(() => {
            ((0, A.l)(e, t, q.Z.CLAIM_BUTTON_CLICKED), r());
        }, [e, t, r]),
        handleUseNowClick: l.useCallback(() => {
            (0, A.l)(e, t, q.Z.USE_NOW_BUTTON_CLICKED);
        }, [e, t]),
    };
}
function en(e) {
    let {
            promotion: t,
            surface: r,
            assetPath: l,
            progress: s,
            progressColor: a,
            title: i,
            progressText: d,
            timeLeftText: g,
            contentThemeClassName: E,
            rewardProduct: m,
            claimRewardButtonVariant: p,
            isClaiming: h,
            onClaim: C,
        } = e,
        v = null != s ? d : i,
        { handleInlineHelpTextClick: L, handleClaim: S, handleUseNowClick: I } = er(t, r, C);
    return (0, n.jsxs)(o.B, {
        direction: "horizontal",
        gap: 16,
        align: "center",
        className: E,
        children: [
            (0, n.jsx)(R, { assetPath: l, progress: s, progressText: d, progressColor: a }),
            (0, n.jsxs)(o.B, {
                direction: "vertical",
                gap: 8,
                align: "start",
                className: J._,
                onClick: L,
                children: [
                    null != v &&
                        (0, n.jsx)(u.E, { variant: "text-md/bold", color: "text-strong", children: (0, _.U)(v) }),
                    null != g && (0, n.jsx)(O, { icon: c.ClockIcon, text: g }),
                    (0, n.jsx)(U, {
                        promotionRewardStatus: t.rewardStatus,
                        rewardProduct: m,
                        claimRewardButtonVariant: p,
                        useNowButtonVariant: p,
                        isClaiming: h,
                        onClaim: S,
                        onUseNowClick: I,
                    }),
                ],
            }),
        ],
    });
}
function el(e) {
    let {
            promotion: t,
            surface: r,
            assetPath: s,
            progress: i,
            progressColor: p,
            backgroundUrl: C,
            title: v,
            description: L,
            progressText: I,
            timeLeftText: f,
            contentThemeClassName: x,
            rewardProduct: y,
            claimRewardButtonVariant: k,
            helpCenterId: N,
            isClaiming: T,
            onClaim: j,
        } = e,
        B = null != N && "" !== N ? S.A.getArticleURL(N) : null,
        { handleInlineHelpTextClick: w, handleClaim: P, handleUseNowClick: D } = er(t, r, j),
        G = l.useCallback(() => {
            null != B && ((0, A.l)(t, r, q.Z.INFO_BUTTON_CLICKED), (0, m.A)(B));
        }, [t, r, B]);
    return (0, n.jsxs)(o.B, {
        direction: "horizontal",
        gap: 16,
        padding: 24,
        align: "center",
        justify: "space-between",
        className: a()(J.N, x),
        style: { backgroundImage: `url(${C})` },
        children: [
            (0, n.jsx)(R, { assetPath: s, progress: i, progressText: I, progressColor: p }),
            (0, n.jsxs)(o.B, {
                direction: "vertical",
                gap: 8,
                align: "start",
                className: J._,
                onClick: w,
                children: [
                    (0, n.jsx)(u.E, { variant: "text-md/bold", color: "text-strong", children: (0, _.U)(v) }),
                    null != L &&
                        (0, n.jsx)(u.E, { variant: "text-sm/normal", color: "text-subtle", children: (0, _.U)(L) }),
                    (0, n.jsxs)(o.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "center",
                        wrap: !0,
                        children: [
                            null != I && (0, n.jsx)(O, { text: I, indicatorColor: p ?? b }),
                            null != f && (0, n.jsx)(O, { icon: c.ClockIcon, text: f }),
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
                        onClaim: P,
                        onUseNowClick: D,
                    }),
                    t.rewardStatus !== h.GM.EARNED &&
                        null != B &&
                        (0, n.jsx)(d.m, {
                            text: H.intl.string(H.t.FdGl5A),
                            ariaHidden: !0,
                            children: (0, n.jsx)(g.K, {
                                "aria-label": H.intl.string(H.t.FdGl5A),
                                icon: E.CircleInformationIcon,
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
function es(e) {
    let { variant: t, surface: r, promotion: s, collectAndClaim: a, rewardProduct: o, isClaiming: u, onClaim: c } = e,
        d = (0, i.bG)([L.default], () => L.default.locale);
    l.useEffect(() => {
        (0, A.l)(s, r, q.Z.PROMO_VIEWED);
    }, [s.id, r]);
    let { shared: g } = a,
        { assets: E, style: m } = g.progressIndicator,
        p = g.helpCenter?.id,
        _ = m?.contentTheme ?? et,
        C = (function (e, t) {
            let { hiddenUrl: r, revealedUrl: n } = t;
            switch (e.rewardStatus) {
                case h.GM.IN_PROGRESS:
                    return { assetPath: r ?? n, showProgressRing: !0, timeLeftDate: e.endsAt };
                case h.GM.EARNED:
                    return { assetPath: r ?? n, showProgressRing: !0, timeLeftDate: e.redemptionEndsAt ?? e.endsAt };
                case h.GM.CONSUMED:
                    return { assetPath: n, showProgressRing: !1, timeLeftDate: null };
                default:
                    return null;
            }
        })(s, E.rewardPreview),
        v = (0, Y.A)(C?.timeLeftDate);
    if (null == C) return null;
    let { progress: S } = s;
    if (
        (null == S &&
            (s.rewardStatus === h.GM.EARNED || s.rewardStatus === h.GM.CONSUMED) &&
            (S = { current: 4, target: 4, label: "collected" }),
        C.showProgressRing && null == S)
    )
        return null;
    let I = C.showProgressRing && null != S,
        {
            title: x,
            description: O,
            progressText: y,
            timeLeftText: k,
        } = (0, f.MZ)({
            promotion: s,
            promotionProgress: S,
            progressIndicator: g.progressIndicator,
            helpCenterId: p,
            daysRemaining: v,
            locale: d,
        }),
        N = {
            promotion: s,
            surface: r,
            assetPath: C.assetPath,
            progress: I ? S : null,
            progressColor: m?.progressColor,
            backgroundUrl: E.backgroundUrl,
            title: x,
            description: O,
            progressText: y,
            timeLeftText: k,
            contentThemeClassName: Q[_],
            rewardProduct: o,
            claimRewardButtonVariant: ee[_],
            helpCenterId: p,
            isClaiming: u,
            onClaim: c,
        };
    return "condensed" === t ? (0, n.jsx)(en, { ...N }) : (0, n.jsx)(el, { ...N });
}
let ea = function (e) {
    let { variant: t, surface: r, collectionId: s } = e,
        a = (0, I.S)(),
        { analyticsLocations: i } = (0, p.Ay)(),
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
                { product: g } = (0, $.q)(u ?? c, !0);
            return (
                l.useEffect(() => {
                    s !== i.current && null != g && ((i.current = s), t?.(g));
                }, [s, g, t]),
                {
                    onClaim: l.useCallback(async () => {
                        if (null != o) {
                            (n(!0), d(u));
                            try {
                                await (0, W.cF)(o, z.FYj);
                            } catch (e) {
                                ((0, V.o)(e),
                                    (0, F.P0)((0, F.ox)(H.intl.string(H.t.F8FvUy), F.Ck.FAILURE)),
                                    K.O.announce(H.intl.string(H.t.F8FvUy)),
                                    n(!1));
                                return;
                            }
                            a((e) => e + 1);
                            try {
                                await (0, X.gB)();
                            } catch (e) {
                                (0, V.o)(e);
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
                    (0, Z.A)({ product: e, analyticsLocations: i });
                },
                [i],
            ),
        ),
        d = (0, v.XF)(a);
    return null == a || null == d || null == s || d.collectionId !== s
        ? null
        : (0, n.jsx)(es, {
              variant: t,
              surface: r,
              promotion: a,
              collectAndClaim: d,
              rewardProduct: c,
              isClaiming: u,
              onClaim: o,
          });
};
