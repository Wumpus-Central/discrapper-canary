r.d(t, { A: () => es });
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
    f = r(727142);
let y = function (e) {
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
var L = r(435558),
    k = r(775602),
    O = r(577568);
let j = 2 * Math.PI * 57,
    B = "var(--status-positive)",
    N = function (e) {
        let { current: t, target: r, progressColor: l = B, children: s } = e,
            o = j * (1 - (r <= 0 ? 0.025 : (0, L.clamp)(t / r, 0.025, 1))),
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
function b(e) {
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
        (0, n.jsx)("canvas", { ref: r, className: P.C, width: 120, height: 120, "aria-hidden": "true" })
    );
}
let R = function (e) {
    let { assetPath: t, progress: r, progressText: l, progressColor: s } = e,
        a = (0, i.bG)([k.Ay], () => k.Ay.useReducedMotion)
            ? (0, n.jsx)(b, { assetPath: t })
            : (0, n.jsx)("img", { src: t, alt: "", className: P.C, width: 120, height: 120 });
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
    w = r(450481),
    G = r(375708),
    H = r(634293);
function M(e) {
    let { product: t, useNowButtonVariant: r = "overlay-secondary" } = e,
        { handleUseNow: l, isApplying: s } = (0, w.p)({ product: t });
    return (0, n.jsx)("div", {
        className: H.l,
        children: (0, n.jsx)(T.$, {
            variant: r,
            onClick: () => {
                l();
            },
            size: "md",
            fullWidth: !0,
            minWidth: 96,
            loading: s,
            text: G.intl.string(G.t.MAS7uK),
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
    } = e;
    return t === S.GM.CONSUMED && null != r
        ? (0, n.jsx)(M, { product: r, useNowButtonVariant: s })
        : t === S.GM.EARNED
          ? (0, n.jsx)("div", {
                className: H.l,
                children: (0, n.jsx)(T.$, {
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
var U = r(691540),
    F = r(857250),
    V = r(97483),
    K = r(765178),
    W = r(39418),
    z = r(828596),
    X = r(815996),
    Y = r(674658),
    $ = r(652215),
    q = r(497901),
    Z = r(61750),
    J = r(119739);
let Q = { [x.RB.LIGHT]: "theme-light", [x.RB.DARK]: "theme-dark" },
    ee = { [x.RB.LIGHT]: "overlay-secondary", [x.RB.DARK]: "overlay-primary" },
    et = x.RB.DARK;
function er(e) {
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
            claimRewardButtonVariant: p,
            isClaiming: h,
            onClaim: S,
        } = e,
        x = null != l ? i : a;
    return (0, n.jsxs)(o.B, {
        direction: "horizontal",
        gap: 16,
        align: "center",
        className: g,
        children: [
            (0, n.jsx)(R, { assetPath: r, progress: l, progressText: i, progressColor: s }),
            (0, n.jsxs)(o.B, {
                direction: "vertical",
                gap: 8,
                align: "start",
                className: J._,
                children: [
                    null != x &&
                        (0, n.jsx)(u.E, { variant: "text-md/bold", color: "text-strong", children: (0, E.U)(x) }),
                    null != d && (0, n.jsx)(y, { icon: c.ClockIcon, text: d }),
                    (0, n.jsx)(D, {
                        promotionRewardStatus: t.rewardStatus,
                        rewardProduct: m,
                        claimRewardButtonVariant: p,
                        useNowButtonVariant: p,
                        isClaiming: h,
                        onClaim: S,
                    }),
                ],
            }),
        ],
    });
}
function en(e) {
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
            claimRewardButtonVariant: f,
            helpCenterId: L,
            isClaiming: k,
            onClaim: O,
        } = e,
        j = null != L && "" !== L ? v.A.getArticleURL(L) : null;
    return (0, n.jsxs)(o.B, {
        direction: "horizontal",
        gap: 16,
        padding: 24,
        align: "center",
        justify: "space-between",
        className: a()(J.N, _),
        style: { backgroundImage: `url(${i})` },
        children: [
            (0, n.jsx)(R, { assetPath: r, progress: l, progressText: C, progressColor: s }),
            (0, n.jsxs)(o.B, {
                direction: "vertical",
                gap: 8,
                align: "start",
                className: J._,
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
                            null != C && (0, n.jsx)(y, { text: C, indicatorColor: s ?? B }),
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
                    (0, n.jsx)(D, {
                        promotionRewardStatus: t.rewardStatus,
                        rewardProduct: I,
                        claimRewardButtonVariant: f,
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
function el(e) {
    let { variant: t, promotion: r, collectAndClaim: l, rewardProduct: s, isClaiming: a, onClaim: o } = e,
        u = (0, i.bG)([A.default], () => A.default.locale),
        { shared: c } = l,
        { assets: d, style: g } = c.progressIndicator,
        m = c.helpCenter?.id,
        p = g?.contentTheme ?? et,
        h = (function (e, t) {
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
        })(r, d.rewardPreview),
        E = (0, q.A)(h?.timeLeftDate);
    if (null == h) return null;
    let { progress: x } = r;
    if (
        (null == x &&
            (r.rewardStatus === S.GM.EARNED || r.rewardStatus === S.GM.CONSUMED) &&
            (x = { current: 4, target: 4, label: "collected" }),
        h.showProgressRing && null == x)
    )
        return null;
    let C = h.showProgressRing && null != x,
        {
            title: v,
            description: _,
            progressText: f,
            timeLeftText: y,
        } = (0, I.MZ)({
            promotion: r,
            promotionProgress: x,
            progressIndicator: c.progressIndicator,
            helpCenterId: m,
            daysRemaining: E,
            locale: u,
        }),
        L = {
            promotion: r,
            assetPath: h.assetPath,
            progress: C ? x : null,
            progressColor: g?.progressColor,
            backgroundUrl: d.backgroundUrl,
            title: v,
            description: _,
            progressText: f,
            timeLeftText: y,
            contentThemeClassName: Q[p],
            rewardProduct: s,
            claimRewardButtonVariant: ee[p],
            helpCenterId: m,
            isClaiming: a,
            onClaim: o,
        };
    return "condensed" === t ? (0, n.jsx)(er, { ...L }) : (0, n.jsx)(en, { ...L });
}
let es = function (e) {
    let { variant: t, collectionId: r } = e,
        s = (0, _.S)(),
        { analyticsLocations: a } = (0, h.Ay)(),
        {
            onClaim: i,
            isClaiming: o,
            rewardProduct: u,
        } = (function (e, t) {
            let [r, n] = l.useState(!1),
                [s, a] = l.useState(0),
                i = l.useRef(0),
                o = e?.id,
                u = e?.rewardConfig?.action?.skuIds[0] ?? null,
                [c, d] = l.useState(null),
                { product: g } = (0, Y.q)(u ?? c, !0);
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
                                ((0, W.o)(e),
                                    (0, U.P0)((0, F.o)(G.intl.string(G.t.F8FvUy), V.Ck.FAILURE)),
                                    K.O.announce(G.intl.string(G.t.F8FvUy)),
                                    n(!1));
                                return;
                            }
                            a((e) => e + 1);
                            try {
                                await (0, X.gB)();
                            } catch (e) {
                                (0, W.o)(e);
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
                    (0, Z.A)({ product: e, analyticsLocations: a });
                },
                [a],
            ),
        ),
        c = (0, C.XF)(s);
    return null == s || null == c || null == r || c.collectionId !== r
        ? null
        : (0, n.jsx)(el, { variant: t, promotion: s, collectAndClaim: c, rewardProduct: u, isClaiming: o, onClaim: i });
};
