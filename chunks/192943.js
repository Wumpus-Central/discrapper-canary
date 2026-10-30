n.d(t, { A: () => Y });
var r = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    i = n(331322),
    c = n(834730),
    u = n(406810),
    d = n(297264),
    p = n(866665),
    m = n(408278),
    g = n(885574),
    h = n(975807),
    E = n(688810),
    C = n(812095),
    f = n(288106),
    v = n(604913),
    x = n(65238),
    y = n(773669),
    _ = n(975571),
    I = n(304210),
    L = n(324157),
    A = n(480750),
    k = n(727142);
let S = function (e) {
    let { text: t, icon: n, indicatorColor: l } = e;
    return (0, r.jsxs)("span", {
        className: k.I,
        children: [
            null != l &&
                (0, r.jsx)("svg", {
                    className: k.q,
                    viewBox: "0 0 8 8",
                    "aria-hidden": !0,
                    children: (0, r.jsx)("circle", { cx: "4", cy: "4", r: "3.5", fill: l }),
                }),
            null != n && (0, r.jsx)(n, { size: "xxs", color: "currentColor" }),
            (0, r.jsx)(c.E, { variant: "text-xs/medium", color: "none", children: t }),
        ],
    });
};
var b = n(262056),
    O = n(775602),
    j = n(295986);
function N(e) {
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
        (0, r.jsx)("canvas", { ref: n, className: j.C, width: 120, height: 120, "aria-hidden": "true" })
    );
}
let T = function (e) {
    let { assetPath: t, progress: n, progressText: l, progressColor: s } = e,
        a = (0, o.bG)([O.Ay], () => O.Ay.useReducedMotion)
            ? (0, r.jsx)(N, { assetPath: t })
            : (0, r.jsx)("img", { src: t, alt: "", className: j.C, width: 120, height: 120 });
    return null == n
        ? a
        : (0, r.jsx)("div", {
              className: j.U,
              role: "progressbar",
              "aria-valuenow": n.current,
              "aria-valuemin": 0,
              "aria-valuemax": n.target,
              "aria-valuetext": l ?? void 0,
              children: (0, r.jsx)(b.A, { current: n.current, target: n.target, progressColor: s, children: a }),
          });
};
var w = n(821609),
    B = n(450481),
    R = n(105292),
    P = n(634293);
function D(e) {
    let { product: t, onUseNowClick: n, useNowButtonVariant: l = "overlay-secondary" } = e,
        { handleUseNow: s, isApplying: a } = (0, B.p)({ product: t });
    return (0, r.jsx)("div", {
        className: P.l,
        children: (0, r.jsx)(w.$, {
            variant: l,
            onClick: () => {
                (n?.(), s());
            },
            size: "md",
            fullWidth: !0,
            minWidth: 96,
            loading: a,
            text: R.intl.string(R.t.MAS7uK),
        }),
    });
}
let M = function (e) {
    let {
        promotionRewardStatus: t,
        rewardProduct: n,
        claimRewardButtonVariant: l,
        useNowButtonVariant: s,
        isClaiming: a,
        onClaim: o,
        onUseNowClick: i,
    } = e;
    return t === f.GM.CONSUMED && null != n
        ? (0, r.jsx)(D, { product: n, onUseNowClick: i, useNowButtonVariant: s })
        : t === f.GM.EARNED
          ? (0, r.jsx)("div", {
                className: P.l,
                children: (0, r.jsx)(w.$, {
                    text: R.intl.string(R.t.pVBlCH),
                    variant: l,
                    fullWidth: !0,
                    minWidth: 96,
                    loading: a,
                    onClick: o,
                }),
            })
          : null;
};
var H = n(436733),
    $ = n(497901),
    G = n(61750),
    U = n(602051),
    K = n(119739);
let F = { [v.RB.LIGHT]: "theme-light", [v.RB.DARK]: "theme-dark" },
    W = { [v.RB.LIGHT]: "overlay-secondary", [v.RB.DARK]: "overlay-primary" },
    V = v.RB.DARK;
function X(e, t, n) {
    let r = l.useCallback((n) => (0, A.h)(n, e, t), [e, t]);
    return {
        handleInlineHelpTextClick: r,
        handleClaim: l.useCallback(() => {
            ((0, A.l)(e, t, U.Z.CLAIM_BUTTON_CLICKED), n());
        }, [e, t, n]),
        handleUseNowClick: l.useCallback(() => {
            (0, A.l)(e, t, U.Z.USE_NOW_BUTTON_CLICKED);
        }, [e, t]),
    };
}
function z(e) {
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
            isClaiming: E,
            onClaim: f,
        } = e,
        v = null != s ? d : o,
        { handleInlineHelpTextClick: x, handleClaim: y, handleUseNowClick: _ } = X(t, n, f);
    return (0, r.jsxs)(i.B, {
        direction: "horizontal",
        gap: 16,
        align: "center",
        className: m,
        children: [
            (0, r.jsx)(T, { assetPath: l, progress: s, progressText: d, progressColor: a }),
            (0, r.jsxs)(i.B, {
                direction: "vertical",
                gap: 8,
                align: "start",
                className: K._,
                onClick: x,
                children: [
                    null != v &&
                        (0, r.jsx)(c.E, { variant: "text-md/bold", color: "text-strong", children: (0, C.U)(v) }),
                    null != p && (0, r.jsx)(S, { icon: u.ClockIcon, text: p }),
                    (0, r.jsx)(M, {
                        promotionRewardStatus: t.rewardStatus,
                        rewardProduct: g,
                        claimRewardButtonVariant: h,
                        useNowButtonVariant: h,
                        isClaiming: E,
                        onClaim: y,
                        onUseNowClick: _,
                    }),
                ],
            }),
        ],
    });
}
function Z(e) {
    let {
            promotion: t,
            surface: n,
            assetPath: s,
            progress: o,
            progressColor: E,
            backgroundUrl: v,
            title: x,
            description: y,
            progressText: I,
            timeLeftText: L,
            contentThemeClassName: k,
            rewardProduct: O,
            claimRewardButtonVariant: j,
            helpCenterId: N,
            isClaiming: w,
            onClaim: B,
        } = e,
        P = null != N && "" !== N ? _.A.getArticleURL(N) : null,
        { handleInlineHelpTextClick: D, handleClaim: H, handleUseNowClick: $ } = X(t, n, B),
        G = l.useCallback(() => {
            null != P && ((0, A.l)(t, n, U.Z.INFO_BUTTON_CLICKED), (0, h.A)(P));
        }, [t, n, P]);
    return (0, r.jsxs)(i.B, {
        direction: "horizontal",
        gap: 16,
        padding: { top: 16, bottom: 16, left: 24, right: 24 },
        align: "center",
        justify: "space-between",
        className: a()(K.N, k),
        style: { backgroundImage: `url(${v})` },
        children: [
            (0, r.jsx)(T, { assetPath: s, progress: o, progressText: I, progressColor: E }),
            (0, r.jsxs)(i.B, {
                direction: "vertical",
                gap: 10,
                align: "start",
                className: K._,
                onClick: D,
                children: [
                    (0, r.jsxs)(i.B, {
                        direction: "vertical",
                        gap: 4,
                        align: "start",
                        children: [
                            (0, r.jsx)(d.D, {
                                variant: "heading-lg/bold",
                                color: "text-strong",
                                children: (0, C.U)(x),
                            }),
                            null != y &&
                                (0, r.jsx)(c.E, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: (0, C.U)(y),
                                }),
                        ],
                    }),
                    (0, r.jsxs)(i.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "center",
                        wrap: !0,
                        children: [
                            null != I && (0, r.jsx)(S, { text: I, indicatorColor: E ?? b.W }),
                            null != L && (0, r.jsx)(S, { icon: u.ClockIcon, text: L }),
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
                    (0, r.jsx)(M, {
                        promotionRewardStatus: t.rewardStatus,
                        rewardProduct: O,
                        claimRewardButtonVariant: j,
                        isClaiming: w,
                        onClaim: H,
                        onUseNowClick: $,
                    }),
                    t.rewardStatus !== f.GM.EARNED &&
                        null != P &&
                        (0, r.jsx)(p.m, {
                            text: R.intl.string(R.t.FdGl5A),
                            ariaHidden: !0,
                            children: (0, r.jsx)(m.K, {
                                "aria-label": R.intl.string(R.t.FdGl5A),
                                icon: g.CircleInformationIcon,
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
function q(e) {
    let { variant: t, surface: n, promotion: s, collectAndClaim: a, rewardProduct: i, isClaiming: c, onClaim: u } = e,
        d = (0, o.bG)([y.default], () => y.default.locale);
    l.useEffect(() => {
        (0, A.l)(s, n, U.Z.PROMO_VIEWED);
    }, [s.id, n]);
    let { shared: p } = a,
        { assets: m, style: g } = p.progressIndicator,
        h = p.helpCenter?.id,
        E = g?.contentTheme ?? V,
        C = (function (e, t) {
            let { hiddenUrl: n, revealedUrl: r } = t;
            switch (e.rewardStatus) {
                case f.GM.IN_PROGRESS:
                    return { assetPath: n ?? r, showProgressRing: !0, timeLeftDate: e.endsAt };
                case f.GM.EARNED:
                    return { assetPath: n ?? r, showProgressRing: !0, timeLeftDate: e.redemptionEndsAt ?? e.endsAt };
                case f.GM.CONSUMED:
                    return { assetPath: r, showProgressRing: !1, timeLeftDate: null };
                default:
                    return null;
            }
        })(s, m.rewardPreview),
        v = (0, $.A)(C?.timeLeftDate);
    if (null == C) return null;
    let { progress: x } = s;
    if (
        (null == x &&
            (s.rewardStatus === f.GM.EARNED || s.rewardStatus === f.GM.CONSUMED) &&
            (x = { current: 4, target: 4, label: "collected" }),
        C.showProgressRing && null == x)
    )
        return null;
    let _ = C.showProgressRing && null != x,
        {
            title: I,
            description: k,
            progressText: S,
            timeLeftText: b,
        } = (0, L.MZ)({
            promotion: s,
            promotionProgress: x,
            progressIndicator: p.progressIndicator,
            helpCenterId: h,
            daysRemaining: v,
            locale: d,
        }),
        O = {
            promotion: s,
            surface: n,
            assetPath: C.assetPath,
            progress: _ ? x : null,
            progressColor: g?.progressColor,
            backgroundUrl: m.backgroundUrl,
            title: I,
            description: k,
            progressText: S,
            timeLeftText: b,
            contentThemeClassName: F[E],
            rewardProduct: i,
            claimRewardButtonVariant: W[E],
            helpCenterId: h,
            isClaiming: c,
            onClaim: u,
        };
    return "condensed" === t ? (0, r.jsx)(z, { ...O }) : (0, r.jsx)(Z, { ...O });
}
let Y = function (e) {
    let { variant: t, surface: n, collectionId: s } = e,
        a = (0, I.ST)(),
        { analyticsLocations: o } = (0, E.Ay)(),
        i = l.useCallback(
            (e) => {
                (0, G.A)({ product: e, analyticsLocations: o });
            },
            [o],
        ),
        { onClaim: c, isClaiming: u, rewardProduct: d } = (0, H.G)(a, i),
        p = (0, x.XF)(a);
    return null == a || null == p || null == s || p.collectionId !== s
        ? null
        : (0, r.jsx)(q, {
              variant: t,
              surface: n,
              promotion: a,
              collectAndClaim: p,
              rewardProduct: d,
              isClaiming: u,
              onClaim: c,
          });
};
