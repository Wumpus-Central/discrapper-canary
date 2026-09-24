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
    m = r(885574),
    p = r(975807),
    h = r(688810),
    E = r(812095),
    S = r(288106),
    x = r(604913),
    C = r(65238),
    A = r(773669),
    v = r(975571),
    _ = r(304210),
    I = r(324157),
    L = r(727142);
let y = function (e) {
    let { text: t, icon: r, indicatorColor: l } = e;
    return (0, n.jsxs)("span", {
        className: L.I,
        children: [
            null != l &&
                (0, n.jsx)("svg", {
                    className: L.q,
                    viewBox: "0 0 8 8",
                    "aria-hidden": !0,
                    children: (0, n.jsx)("circle", { cx: "4", cy: "4", r: "3.5", fill: l }),
                }),
            null != r && (0, n.jsx)(r, { size: "xxs", color: "currentColor" }),
            (0, n.jsx)(u.E, { variant: "text-xs/medium", color: "none", children: t }),
        ],
    });
};
var f = r(435558),
    k = r(775602),
    O = r(577568);
let j = 2 * Math.PI * 57,
    b = "var(--status-positive)",
    N = function (e) {
        let { current: t, target: r, progressColor: l = b, children: s } = e,
            o = j * (1 - (r <= 0 ? 0.025 : (0, f.clamp)(t / r, 0.025, 1))),
            u = (0, i.bG)([k.Ay], () => k.Ay.useReducedMotion);
        return (0, n.jsxs)("div", {
            className: O.iE,
            children: [
                s,
                (0, n.jsxs)("svg", {
                    className: O.hN,
                    viewBox: "0 0 120 120",
                    children: [
                        (0, n.jsx)("circle", {
                            className: O.u4,
                            cx: 60,
                            cy: 60,
                            r: 57,
                            strokeWidth: 6,
                            stroke: "var(--background-mod-strong)",
                        }),
                        (0, n.jsx)("circle", {
                            className: a()(O.M0, { [O.Vr]: !u }),
                            cx: 60,
                            cy: 60,
                            r: 57,
                            strokeWidth: 6,
                            stroke: l,
                            strokeDasharray: j,
                            strokeDashoffset: o,
                        }),
                    ],
                }),
            ],
        });
    };
var P = r(295986);
let B = function (e) {
    let { assetPath: t, progress: r, progressText: l, progressColor: s } = e,
        a = (0, n.jsx)("img", { src: t, alt: "", className: P.C, width: 120, height: 120 });
    return null == r
        ? a
        : (0, n.jsx)("div", {
              className: P.U,
              role: "progressbar",
              "aria-valuenow": r.current,
              "aria-valuemin": 0,
              "aria-valuemax": r.target,
              "aria-valuetext": l ?? void 0,
              children: (0, n.jsx)(N, { current: r.current, target: r.target, progressColor: s, children: a }),
          });
};
var T = r(821609),
    R = r(450481),
    G = r(375708),
    H = r(634293);
function w(e) {
    let { product: t } = e,
        { handleUseNow: r, isApplying: l } = (0, R.p)({ product: t });
    return (0, n.jsx)("div", {
        className: H.l,
        children: (0, n.jsx)(T.$, {
            variant: "overlay-secondary",
            onClick: () => {
                r();
            },
            size: "md",
            fullWidth: !0,
            minWidth: 96,
            loading: l,
            text: G.intl.string(G.t.MAS7uK),
        }),
    });
}
let M = function (e) {
    let { promotionRewardStatus: t, rewardProduct: r, buttonVariant: l, isClaiming: s, onClaim: a } = e;
    return t === S.GM.CONSUMED && null != r
        ? (0, n.jsx)(w, { product: r })
        : t === S.GM.EARNED
          ? (0, n.jsx)("div", {
                className: H.l,
                children: (0, n.jsx)(T.$, {
                    text: G.intl.string(G.t.pVBlCH),
                    variant: l,
                    fullWidth: !0,
                    minWidth: 96,
                    loading: s,
                    onClick: a,
                }),
            })
          : null;
};
var D = r(691540),
    U = r(857250),
    F = r(97483),
    V = r(765178),
    K = r(39418),
    z = r(828596),
    W = r(839534),
    X = r(674658),
    Y = r(652215),
    $ = r(61750),
    q = r(119739);
let Z = { [x.RB.LIGHT]: "theme-light", [x.RB.DARK]: "theme-dark" },
    J = { [x.RB.LIGHT]: "overlay-secondary", [x.RB.DARK]: "overlay-primary" },
    Q = x.RB.DARK;
function ee(e) {
    let {
            promotion: t,
            assetPath: r,
            progress: l,
            progressColor: s,
            title: a,
            progressText: i,
            timeLeftText: d,
            contentThemeClassName: g,
            rewardProduct: m,
            buttonVariant: p,
            isClaiming: h,
            onClaim: x,
        } = e,
        C = null != l ? i : a;
    return (0, n.jsxs)(o.B, {
        direction: "horizontal",
        gap: 16,
        align: "center",
        className: g,
        children: [
            (0, n.jsx)(B, { assetPath: r, progress: l, progressText: i, progressColor: s }),
            (0, n.jsxs)(o.B, {
                direction: "vertical",
                gap: 8,
                align: "start",
                className: q._,
                children: [
                    null != C &&
                        (0, n.jsx)(u.E, { variant: "text-md/bold", color: "text-strong", children: (0, E.U)(C) }),
                    null != d && (0, n.jsx)(y, { icon: c.ClockIcon, text: d }),
                    t.rewardStatus !== S.GM.CONSUMED &&
                        (0, n.jsx)(M, {
                            promotionRewardStatus: t.rewardStatus,
                            rewardProduct: m,
                            buttonVariant: p,
                            isClaiming: h,
                            onClaim: x,
                        }),
                ],
            }),
        ],
    });
}
function et(e) {
    let {
            promotion: t,
            assetPath: r,
            progress: l,
            progressColor: s,
            backgroundUrl: i,
            title: h,
            description: x,
            progressText: C,
            timeLeftText: A,
            contentThemeClassName: _,
            rewardProduct: I,
            buttonVariant: L,
            helpCenterId: f,
            isClaiming: k,
            onClaim: O,
        } = e,
        j = null != f && "" !== f ? v.A.getArticleURL(f) : null;
    return (0, n.jsxs)(o.B, {
        direction: "horizontal",
        gap: 16,
        padding: 24,
        align: "center",
        justify: "space-between",
        className: a()(q.N, _),
        style: { backgroundImage: `url(${i})` },
        children: [
            (0, n.jsx)(B, { assetPath: r, progress: l, progressText: C, progressColor: s }),
            (0, n.jsxs)(o.B, {
                direction: "vertical",
                gap: 8,
                align: "start",
                className: q._,
                children: [
                    (0, n.jsx)(u.E, { variant: "text-md/bold", color: "text-strong", children: (0, E.U)(h) }),
                    null != x &&
                        (0, n.jsx)(u.E, { variant: "text-sm/normal", color: "text-subtle", children: (0, E.U)(x) }),
                    (0, n.jsxs)(o.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "center",
                        wrap: !0,
                        children: [
                            null != C && (0, n.jsx)(y, { text: C, indicatorColor: s ?? b }),
                            null != A && (0, n.jsx)(y, { icon: c.ClockIcon, text: A }),
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
                    (0, n.jsx)(M, {
                        promotionRewardStatus: t.rewardStatus,
                        rewardProduct: I,
                        buttonVariant: L,
                        isClaiming: k,
                        onClaim: O,
                    }),
                    t.rewardStatus !== S.GM.EARNED &&
                        null != j &&
                        (0, n.jsx)(d.m, {
                            text: G.intl.string(G.t.FdGl5A),
                            ariaHidden: !0,
                            children: (0, n.jsx)(g.K, {
                                "aria-label": G.intl.string(G.t.FdGl5A),
                                icon: m.CircleInformationIcon,
                                variant: "overlay-secondary",
                                size: "md",
                                onClick: () => (0, p.A)(j),
                            }),
                        }),
                ],
            }),
        ],
    });
}
let er = function (e) {
    let { variant: t, collectionId: r } = e,
        s = (0, _.S)(),
        a = (0, i.bG)([A.default], () => A.default.locale),
        { analyticsLocations: o } = (0, h.Ay)(),
        {
            onClaim: u,
            isClaiming: c,
            rewardProduct: d,
        } = (function (e, t) {
            let [r, n] = l.useState(!1),
                [s, a] = l.useState(0),
                i = l.useRef(0),
                o = e?.id,
                u = e?.rewardConfig?.action?.skuIds[0] ?? null,
                [c, d] = l.useState(null),
                { product: g } = (0, X.q)(u ?? c, !0);
            return (
                l.useEffect(() => {
                    s !== i.current && null != g && ((i.current = s), t?.(g));
                }, [s, g, t]),
                {
                    onClaim: l.useCallback(async () => {
                        if (null != o) {
                            (n(!0), d(u));
                            try {
                                await (0, z.cF)(o, Y.FYj);
                            } catch (e) {
                                ((0, K.o)(e),
                                    (0, D.P0)((0, U.o)(G.intl.string(G.t.F8FvUy), F.Ck.FAILURE)),
                                    V.O.announce(G.intl.string(G.t.F8FvUy)),
                                    n(!1));
                                return;
                            }
                            a((e) => e + 1);
                            try {
                                await (0, W.gB)();
                            } catch (e) {
                                (0, K.o)(e);
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
                    (0, $.A)({ product: e, analyticsLocations: o });
                },
                [o],
            ),
        ),
        g = (0, C.XF)(s);
    if (null == s || null == g || null == r || g.collectionId !== r) return null;
    let { shared: m } = g,
        { assets: p, style: E } = m.progressIndicator,
        x = m.helpCenter?.id,
        v = E?.contentTheme ?? Q,
        L = (function (e, t) {
            let { hiddenUrl: r, revealedUrl: n } = t;
            switch (e.rewardStatus) {
                case S.GM.IN_PROGRESS:
                    return { assetPath: r ?? n, showProgressRing: !0, timeLeftDate: e.endsAt };
                case S.GM.EARNED:
                    return { assetPath: r ?? n, showProgressRing: !0, timeLeftDate: e.redemptionEndsAt ?? e.endsAt };
                case S.GM.CONSUMED:
                    return { assetPath: n, showProgressRing: !1, timeLeftDate: null };
                default:
                    return null;
            }
        })(s, p.rewardPreview);
    if (null == L) return null;
    let { progress: y } = s;
    if (
        (null == y &&
            (s.rewardStatus === S.GM.EARNED || s.rewardStatus === S.GM.CONSUMED) &&
            (y = { current: 4, target: 4, label: "collected" }),
        L.showProgressRing && null == y)
    )
        return null;
    let f = L.showProgressRing && null != y,
        {
            title: k,
            description: O,
            progressText: j,
            timeLeftText: b,
        } = (0, I.MZ)({
            promotion: s,
            promotionProgress: y,
            progressIndicator: m.progressIndicator,
            helpCenterId: x,
            timeLeftDate: L.timeLeftDate,
            locale: a,
        }),
        N = {
            promotion: s,
            assetPath: L.assetPath,
            progress: f ? y : null,
            progressColor: E?.progressColor,
            backgroundUrl: p.backgroundUrl,
            title: k,
            description: O,
            progressText: j,
            timeLeftText: b,
            contentThemeClassName: Z[v],
            rewardProduct: d,
            buttonVariant: J[v],
            helpCenterId: x,
            isClaiming: c,
            onClaim: u,
        };
    return "condensed" === t ? (0, n.jsx)(ee, { ...N }) : (0, n.jsx)(et, { ...N });
};
