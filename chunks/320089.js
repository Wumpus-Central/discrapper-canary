r.d(t, { A: () => q });
var n = r(477900),
    l = r(582128),
    s = r(503698),
    a = r.n(s),
    i = r(17928),
    o = r(331322),
    u = r(834730),
    c = r(406810),
    d = r(688810),
    g = r(812095),
    m = r(288106),
    p = r(604913),
    h = r(65238),
    E = r(773669),
    S = r(304210),
    x = r(324157),
    v = r(727142);
let C = function (e) {
    let { text: t, icon: r, indicatorColor: l } = e;
    return (0, n.jsxs)("span", {
        className: v.I,
        children: [
            null != l &&
                (0, n.jsx)("svg", {
                    className: v.q,
                    viewBox: "0 0 8 8",
                    "aria-hidden": !0,
                    children: (0, n.jsx)("circle", { cx: "4", cy: "4", r: "3.5", fill: l }),
                }),
            null != r && (0, n.jsx)(r, { size: "xxs", color: "currentColor" }),
            (0, n.jsx)(u.E, { variant: "text-xs/medium", color: "none", children: t }),
        ],
    });
};
var _ = r(435558),
    A = r(775602),
    I = r(577568);
let y = 2 * Math.PI * 57,
    L = "var(--status-positive)",
    f = function (e) {
        let { current: t, target: r, progressColor: l = L, children: s } = e,
            o = y * (1 - (r <= 0 ? 0.025 : (0, _.clamp)(t / r, 0.025, 1))),
            u = (0, i.bG)([A.Ay], () => A.Ay.useReducedMotion);
        return (0, n.jsxs)("div", {
            className: I.iE,
            children: [
                s,
                (0, n.jsxs)("svg", {
                    className: I.hN,
                    viewBox: "0 0 120 120",
                    children: [
                        (0, n.jsx)("circle", {
                            className: I.u4,
                            cx: 60,
                            cy: 60,
                            r: 57,
                            strokeWidth: 6,
                            stroke: "var(--background-mod-strong)",
                        }),
                        (0, n.jsx)("circle", {
                            className: a()(I.M0, { [I.Vr]: !u }),
                            cx: 60,
                            cy: 60,
                            r: 57,
                            strokeWidth: 6,
                            stroke: l,
                            strokeDasharray: y,
                            strokeDashoffset: o,
                        }),
                    ],
                }),
            ],
        });
    };
var k = r(295986);
let O = function (e) {
    let { assetPath: t, progress: r, progressText: l, progressColor: s } = e,
        a = (0, n.jsx)("img", { src: t, alt: "", className: k.C, width: 120, height: 120 });
    return null == r
        ? a
        : (0, n.jsx)("div", {
              className: k.U,
              role: "progressbar",
              "aria-valuenow": r.current,
              "aria-valuemin": 0,
              "aria-valuemax": r.target,
              "aria-valuetext": l ?? void 0,
              children: (0, n.jsx)(f, { current: r.current, target: r.target, progressColor: s, children: a }),
          });
};
var j = r(821609),
    b = r(450481),
    P = r(375708),
    T = r(634293);
function B(e) {
    let { product: t } = e,
        { handleUseNow: r, isApplying: l } = (0, b.p)({ product: t });
    return (0, n.jsx)("div", {
        className: T.l,
        children: (0, n.jsx)(j.$, {
            variant: "overlay-secondary",
            onClick: () => {
                r();
            },
            size: "md",
            fullWidth: !0,
            minWidth: 96,
            loading: l,
            text: P.intl.string(P.t.MAS7uK),
        }),
    });
}
let N = function (e) {
    let { promotionRewardStatus: t, rewardProduct: r, buttonVariant: l, isClaiming: s, onClaim: a } = e;
    return t === m.GM.CONSUMED && null != r
        ? (0, n.jsx)(B, { product: r })
        : t === m.GM.EARNED
          ? (0, n.jsx)("div", {
                className: T.l,
                children: (0, n.jsx)(j.$, {
                    text: P.intl.string(P.t.pVBlCH),
                    variant: l,
                    fullWidth: !0,
                    minWidth: 96,
                    loading: s,
                    onClick: a,
                }),
            })
          : null;
};
var R = r(691540),
    G = r(857250),
    H = r(97483),
    M = r(765178),
    D = r(39418),
    w = r(828596),
    U = r(839534),
    F = r(674658),
    V = r(652215),
    K = r(61750),
    W = r(119739);
let X = { [p.RB.LIGHT]: "theme-light", [p.RB.DARK]: "theme-dark" },
    z = { [p.RB.LIGHT]: "overlay-secondary", [p.RB.DARK]: "overlay-primary" };
function Y(e) {
    let {
            promotion: t,
            assetPath: r,
            progress: l,
            progressColor: s,
            title: a,
            progressText: i,
            timeLeftText: d,
            contentThemeClassName: m,
            rewardProduct: p,
            buttonVariant: h,
            isClaiming: E,
            onClaim: S,
        } = e,
        x = null != l ? i : a;
    return (0, n.jsxs)(o.B, {
        direction: "horizontal",
        gap: 16,
        align: "center",
        className: m,
        children: [
            (0, n.jsx)(O, { assetPath: r, progress: l, progressText: i, progressColor: s }),
            (0, n.jsxs)(o.B, {
                direction: "vertical",
                gap: 4,
                align: "start",
                className: W._,
                children: [
                    null != x &&
                        (0, n.jsx)(u.E, { variant: "text-md/bold", color: "text-strong", children: (0, g.U)(x) }),
                    null != d && (0, n.jsx)(C, { icon: c.ClockIcon, text: d }),
                    (0, n.jsx)(N, {
                        promotionRewardStatus: t.rewardStatus,
                        rewardProduct: p,
                        buttonVariant: h,
                        isClaiming: E,
                        onClaim: S,
                    }),
                ],
            }),
        ],
    });
}
function $(e) {
    let {
        promotion: t,
        assetPath: r,
        progress: l,
        progressColor: s,
        backgroundUrl: i,
        title: d,
        description: m,
        progressText: p,
        timeLeftText: h,
        contentThemeClassName: E,
        rewardProduct: S,
        buttonVariant: x,
        isClaiming: v,
        onClaim: _,
    } = e;
    return (0, n.jsxs)(o.B, {
        direction: "horizontal",
        gap: 16,
        padding: 24,
        align: "center",
        justify: "space-between",
        className: a()(W.N, E),
        style: { backgroundImage: `url(${i})` },
        children: [
            (0, n.jsx)(O, { assetPath: r, progress: l, progressText: p, progressColor: s }),
            (0, n.jsxs)(o.B, {
                direction: "vertical",
                gap: 8,
                align: "start",
                className: W._,
                children: [
                    (0, n.jsx)(u.E, { variant: "text-md/bold", color: "text-strong", children: (0, g.U)(d) }),
                    null != m &&
                        (0, n.jsx)(u.E, { variant: "text-sm/normal", color: "text-subtle", children: (0, g.U)(m) }),
                    (0, n.jsxs)(o.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "center",
                        wrap: !0,
                        children: [
                            null != p && (0, n.jsx)(C, { text: p, indicatorColor: s ?? L }),
                            null != h && (0, n.jsx)(C, { icon: c.ClockIcon, text: h }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(N, {
                promotionRewardStatus: t.rewardStatus,
                rewardProduct: S,
                buttonVariant: x,
                isClaiming: v,
                onClaim: _,
            }),
        ],
    });
}
let q = function (e) {
    let { variant: t, collectionId: r } = e,
        s = (0, S.S)(),
        a = (0, i.bG)([E.default], () => E.default.locale),
        { analyticsLocations: o } = (0, d.Ay)(),
        {
            onClaim: u,
            isClaiming: c,
            rewardProduct: g,
        } = (function (e, t) {
            let [r, n] = l.useState(!1),
                [s, a] = l.useState(0),
                i = l.useRef(0),
                o = e?.id,
                u = e?.rewardConfig?.action?.skuIds[0] ?? null,
                [c, d] = l.useState(null),
                { product: g } = (0, F.q)(u ?? c, !0);
            return (
                l.useEffect(() => {
                    s !== i.current && null != g && ((i.current = s), t?.(g));
                }, [s, g, t]),
                {
                    onClaim: l.useCallback(async () => {
                        if (null != o) {
                            (n(!0), d(u));
                            try {
                                await (0, w.cF)(o, V.FYj);
                            } catch (e) {
                                ((0, D.o)(e),
                                    (0, R.P0)((0, G.o)(P.intl.string(P.t.F8FvUy), H.Ck.FAILURE)),
                                    M.O.announce(P.intl.string(P.t.F8FvUy)),
                                    n(!1));
                                return;
                            }
                            a((e) => e + 1);
                            try {
                                await (0, U.gB)();
                            } catch (e) {
                                (0, D.o)(e);
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
            s,
            l.useCallback(
                (e) => {
                    (0, K.A)({ product: e, analyticsLocations: o });
                },
                [o],
            ),
        ),
        p = (0, h.XF)(s);
    if (null == s || null == p || null == r || p.collectionId !== r) return null;
    let { shared: v } = p,
        { assets: C, style: _ } = v.progressIndicator,
        A = (function (e, t) {
            let { hiddenUrl: r, revealedUrl: n } = t;
            switch (e.rewardStatus) {
                case m.GM.IN_PROGRESS:
                    return { assetPath: r ?? n, showProgressRing: !0, timeLeftDate: e.endsAt };
                case m.GM.EARNED:
                    return { assetPath: r ?? n, showProgressRing: !0, timeLeftDate: e.redemptionEndsAt ?? e.endsAt };
                case m.GM.CONSUMED:
                    return { assetPath: n, showProgressRing: !1, timeLeftDate: null };
                default:
                    return null;
            }
        })(s, C.rewardPreview);
    if (null == A) return null;
    let { progress: I } = s;
    if (
        (null == I &&
            (s.rewardStatus === m.GM.EARNED || s.rewardStatus === m.GM.CONSUMED) &&
            (I = { current: 4, target: 4, label: "collected" }),
        A.showProgressRing && null == I)
    )
        return null;
    let y = A.showProgressRing && null != I,
        {
            title: L,
            description: f,
            progressText: k,
            timeLeftText: O,
        } = (0, x.MZ)({
            promotion: s,
            promotionProgress: I,
            progressIndicator: v.progressIndicator,
            helpCenterId: v.helpCenter?.id,
            timeLeftDate: A.timeLeftDate,
            locale: a,
        }),
        j = {
            promotion: s,
            assetPath: A.assetPath,
            progress: y ? I : null,
            progressColor: _?.progressColor,
            backgroundUrl: C.backgroundUrl,
            title: L,
            description: f,
            progressText: k,
            timeLeftText: O,
            contentThemeClassName: _?.contentTheme != null ? X[_.contentTheme] : void 0,
            rewardProduct: g,
            buttonVariant: _?.contentTheme != null ? z[_.contentTheme] : "overlay-primary",
            isClaiming: c,
            onClaim: u,
        };
    return "condensed" === t ? (0, n.jsx)(Y, { ...j }) : (0, n.jsx)($, { ...j });
};
