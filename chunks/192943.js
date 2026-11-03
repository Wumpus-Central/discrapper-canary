n.d(t, { A: () => Y });
var r = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    i = n(331322),
    u = n(834730),
    c = n(406810),
    d = n(534514),
    p = n(866665),
    m = n(408278),
    g = n(885574),
    h = n(975807),
    E = n(688810),
    f = n(812095),
    C = n(288106),
    v = n(604913),
    _ = n(65238),
    x = n(773669),
    y = n(975571),
    A = n(304210),
    I = n(324157),
    L = n(480750),
    S = n(727142);
let k = function (e) {
    let { text: t, icon: n, indicatorColor: l } = e;
    return (0, r.jsxs)("span", {
        className: S.I,
        children: [
            null != l &&
                (0, r.jsx)("svg", {
                    className: S.q,
                    viewBox: "0 0 8 8",
                    "aria-hidden": !0,
                    children: (0, r.jsx)("circle", { cx: "4", cy: "4", r: "3.5", fill: l }),
                }),
            null != n && (0, r.jsx)(n, { size: "xxs", color: "currentColor" }),
            (0, r.jsx)(u.E, { variant: "text-xs/medium", color: "none", children: t }),
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
let w = function (e) {
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
var T = n(821609),
    R = n(450481),
    B = n(105292),
    P = n(634293);
function D(e) {
    let { product: t, onUseNowClick: n, useNowButtonVariant: l = "overlay-secondary" } = e,
        { handleUseNow: s, isApplying: a } = (0, R.p)({ product: t });
    return (0, r.jsx)("div", {
        className: P.l,
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
    return t === C.GM.CONSUMED && null != n
        ? (0, r.jsx)(D, { product: n, onUseNowClick: i, useNowButtonVariant: s })
        : t === C.GM.EARNED
          ? (0, r.jsx)("div", {
                className: P.l,
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
var H = n(436733),
    $ = n(497901),
    G = n(61750),
    U = n(602051),
    K = n(119739);
let F = { [v.RB.LIGHT]: "theme-light", [v.RB.DARK]: "theme-dark" },
    W = { [v.RB.LIGHT]: "overlay-secondary", [v.RB.DARK]: "overlay-primary" },
    V = v.RB.DARK;
function X(e, t, n) {
    let r = l.useCallback((n) => (0, L.h)(n, e, t), [e, t]);
    return {
        handleInlineHelpTextClick: r,
        handleClaim: l.useCallback(() => {
            ((0, L.l)(e, t, U.Z.CLAIM_BUTTON_CLICKED), n());
        }, [e, t, n]),
        handleUseNowClick: l.useCallback(() => {
            (0, L.l)(e, t, U.Z.USE_NOW_BUTTON_CLICKED);
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
            onClaim: C,
        } = e,
        v = null != s ? d : o,
        { handleInlineHelpTextClick: _, handleClaim: x, handleUseNowClick: y } = X(t, n, C);
    return (0, r.jsxs)(i.B, {
        direction: "horizontal",
        gap: 16,
        align: "center",
        className: m,
        children: [
            (0, r.jsx)(w, { assetPath: l, progress: s, progressText: d, progressColor: a }),
            (0, r.jsxs)(i.B, {
                direction: "vertical",
                gap: 8,
                align: "start",
                className: K._,
                onClick: _,
                children: [
                    null != v &&
                        (0, r.jsx)(u.E, { variant: "text-md/semibold", color: "text-strong", children: (0, f.U)(v) }),
                    null != p && (0, r.jsx)(k, { icon: c.ClockIcon, text: p }),
                    (0, r.jsx)(M, {
                        promotionRewardStatus: t.rewardStatus,
                        rewardProduct: g,
                        claimRewardButtonVariant: h,
                        useNowButtonVariant: h,
                        isClaiming: E,
                        onClaim: x,
                        onUseNowClick: y,
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
            title: _,
            description: x,
            progressText: A,
            timeLeftText: I,
            contentThemeClassName: S,
            rewardProduct: O,
            claimRewardButtonVariant: j,
            helpCenterId: N,
            isClaiming: T,
            onClaim: R,
        } = e,
        P = null != N && "" !== N ? y.A.getArticleURL(N) : null,
        { handleInlineHelpTextClick: D, handleClaim: H, handleUseNowClick: $ } = X(t, n, R),
        G = l.useCallback(() => {
            null != P && ((0, L.l)(t, n, U.Z.INFO_BUTTON_CLICKED), (0, h.A)(P));
        }, [t, n, P]);
    return (0, r.jsxs)(i.B, {
        direction: "horizontal",
        gap: 16,
        padding: { top: 16, bottom: 16, left: 24, right: 24 },
        align: "center",
        justify: "space-between",
        className: a()(K.N, S),
        style: { backgroundImage: `url(${v})` },
        children: [
            (0, r.jsx)(w, { assetPath: s, progress: o, progressText: A, progressColor: E }),
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
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: (0, f.U)(_),
                            }),
                            null != x &&
                                (0, r.jsx)(u.E, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: (0, f.U)(x),
                                }),
                        ],
                    }),
                    (0, r.jsxs)(i.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "center",
                        wrap: !0,
                        children: [
                            null != A && (0, r.jsx)(k, { text: A, indicatorColor: E ?? b.W }),
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
                    (0, r.jsx)(M, {
                        promotionRewardStatus: t.rewardStatus,
                        rewardProduct: O,
                        claimRewardButtonVariant: j,
                        isClaiming: T,
                        onClaim: H,
                        onUseNowClick: $,
                    }),
                    t.rewardStatus !== C.GM.EARNED &&
                        null != P &&
                        (0, r.jsx)(p.m, {
                            text: B.intl.string(B.t.FdGl5A),
                            ariaHidden: !0,
                            children: (0, r.jsx)(m.K, {
                                "aria-label": B.intl.string(B.t.FdGl5A),
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
    let { variant: t, surface: n, promotion: s, collectAndClaim: a, rewardProduct: i, isClaiming: u, onClaim: c } = e,
        d = (0, o.bG)([x.default], () => x.default.locale);
    l.useEffect(() => {
        (0, L.l)(s, n, U.Z.PROMO_VIEWED);
    }, [s.id, n]);
    let { shared: p } = a,
        { assets: m, style: g } = p.progressIndicator,
        h = p.helpCenter?.id,
        E = g?.contentTheme ?? V,
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
        v = (0, $.A)(f?.timeLeftDate);
    if (null == f) return null;
    let { progress: _ } = s;
    if (
        (null == _ &&
            (s.rewardStatus === C.GM.EARNED || s.rewardStatus === C.GM.CONSUMED) &&
            (_ = { current: 4, target: 4, label: "collected" }),
        f.showProgressRing && null == _)
    )
        return null;
    let y = f.showProgressRing && null != _,
        {
            title: A,
            description: S,
            progressText: k,
            timeLeftText: b,
        } = (0, I.MZ)({
            promotion: s,
            promotionProgress: _,
            progressIndicator: p.progressIndicator,
            helpCenterId: h,
            daysRemaining: v,
            locale: d,
        }),
        O = {
            promotion: s,
            surface: n,
            assetPath: f.assetPath,
            progress: y ? _ : null,
            progressColor: g?.progressColor,
            backgroundUrl: m.backgroundUrl,
            title: A,
            description: S,
            progressText: k,
            timeLeftText: b,
            contentThemeClassName: F[E],
            rewardProduct: i,
            claimRewardButtonVariant: W[E],
            helpCenterId: h,
            isClaiming: u,
            onClaim: c,
        };
    return "condensed" === t ? (0, r.jsx)(z, { ...O }) : (0, r.jsx)(Z, { ...O });
}
let Y = function (e) {
    let { variant: t, surface: n, collectionId: s } = e,
        a = (0, A.ST)(),
        { analyticsLocations: o } = (0, E.Ay)(),
        i = l.useCallback(
            (e) => {
                (0, G.A)({ product: e, analyticsLocations: o });
            },
            [o],
        ),
        { onClaim: u, isClaiming: c, rewardProduct: d } = (0, H.G)(a, i),
        p = (0, _.XF)(a);
    return null == a || null == p || null == s || p.collectionId !== s
        ? null
        : (0, r.jsx)(q, {
              variant: t,
              surface: n,
              promotion: a,
              collectAndClaim: p,
              rewardProduct: d,
              isClaiming: c,
              onClaim: u,
          });
};
