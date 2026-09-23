r.d(t, { A: () => P });
var n = r(477900),
    l = r(503698),
    s = r.n(l),
    a = r(17928),
    i = r(331322),
    o = r(834730),
    u = r(406810),
    c = r(812095),
    d = r(604913),
    g = r(65238),
    p = r(773669),
    m = r(304210),
    h = r(324157),
    E = r(288106);
r(582128);
var _ = r(727142);
let x = function (e) {
    let { text: t, icon: r, indicatorColor: l } = e;
    return (0, n.jsxs)("span", {
        className: _.I,
        children: [
            null != l &&
                (0, n.jsx)("svg", {
                    className: _.q,
                    viewBox: "0 0 8 8",
                    "aria-hidden": !0,
                    children: (0, n.jsx)("circle", { cx: "4", cy: "4", r: "3.5", fill: l }),
                }),
            null != r && (0, n.jsx)(r, { size: "xxs", color: "currentColor" }),
            (0, n.jsx)(o.E, { variant: "text-xs/medium", color: "none", children: t }),
        ],
    });
};
var S = r(435558),
    v = r(775602),
    I = r(577568);
let L = 2 * Math.PI * 57,
    A = "var(--status-positive)",
    C = function (e) {
        let { current: t, target: r, progressColor: l = A, children: i } = e,
            o = L * (1 - (r <= 0 ? 0.025 : (0, S.clamp)(t / r, 0.025, 1))),
            u = (0, a.bG)([v.Ay], () => v.Ay.useReducedMotion);
        return (0, n.jsxs)("div", {
            className: I.iE,
            children: [
                i,
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
                            className: s()(I.M0, { [I.Vr]: !u }),
                            cx: 60,
                            cy: 60,
                            r: 57,
                            strokeWidth: 6,
                            stroke: l,
                            strokeDasharray: L,
                            strokeDashoffset: o,
                        }),
                    ],
                }),
            ],
        });
    };
var y = r(295986);
let f = function (e) {
    let { assetPath: t, progress: r, progressText: l, progressColor: s } = e,
        a = (0, n.jsx)("img", { src: t, alt: "", className: y.C, width: 120, height: 120 });
    return null == r
        ? a
        : (0, n.jsx)("div", {
              className: y.U,
              role: "progressbar",
              "aria-valuenow": r.current,
              "aria-valuemin": 0,
              "aria-valuemax": r.target,
              "aria-valuetext": l ?? void 0,
              children: (0, n.jsx)(C, { current: r.current, target: r.target, progressColor: s, children: a }),
          });
};
var O = r(119739);
let k = { [d.RB.LIGHT]: "theme-light", [d.RB.DARK]: "theme-dark" };
function j(e) {
    let {
            assetPath: t,
            progress: r,
            progressColor: l,
            title: s,
            progressText: a,
            timeLeftText: d,
            contentThemeClassName: g,
        } = e,
        p = null != r ? a : s;
    return (0, n.jsxs)(i.B, {
        direction: "horizontal",
        gap: 16,
        align: "center",
        className: g,
        children: [
            (0, n.jsx)(f, { assetPath: t, progress: r, progressText: a, progressColor: l }),
            (0, n.jsxs)(i.B, {
                direction: "vertical",
                gap: 4,
                align: "start",
                className: O._,
                children: [
                    null != p &&
                        (0, n.jsx)(o.E, { variant: "text-md/bold", color: "text-strong", children: (0, c.U)(p) }),
                    null != d && (0, n.jsx)(x, { icon: u.ClockIcon, text: d }),
                ],
            }),
        ],
    });
}
function T(e) {
    let {
        assetPath: t,
        progress: r,
        progressColor: l,
        backgroundUrl: a,
        title: d,
        description: g,
        progressText: p,
        timeLeftText: m,
        contentThemeClassName: h,
    } = e;
    return (0, n.jsxs)(i.B, {
        direction: "horizontal",
        gap: 16,
        padding: 24,
        align: "center",
        className: s()(O.N, h),
        style: { backgroundImage: `url(${a})` },
        children: [
            (0, n.jsx)(f, { assetPath: t, progress: r, progressText: p, progressColor: l }),
            (0, n.jsxs)(i.B, {
                direction: "vertical",
                gap: 8,
                align: "start",
                className: O._,
                children: [
                    (0, n.jsx)(o.E, { variant: "text-md/bold", color: "text-strong", children: (0, c.U)(d) }),
                    null != g &&
                        (0, n.jsx)(o.E, { variant: "text-sm/normal", color: "text-subtle", children: (0, c.U)(g) }),
                    (0, n.jsxs)(i.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "center",
                        wrap: !0,
                        children: [
                            null != p && (0, n.jsx)(x, { text: p, indicatorColor: l ?? A }),
                            null != m && (0, n.jsx)(x, { icon: u.ClockIcon, text: m }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let P = function (e) {
    let { variant: t, collectionId: r } = e,
        l = (0, m.S)(),
        s = (0, a.bG)([p.default], () => p.default.locale),
        i = (0, g.XF)(l);
    if (null == l || null == i || null == r || i.collectionId !== r) return null;
    let { shared: o } = i,
        { assets: u, style: c } = o.progressIndicator,
        d = (function (e, t) {
            let { hiddenUrl: r, revealedUrl: n } = t;
            switch (e.rewardStatus) {
                case E.GM.IN_PROGRESS:
                    return { assetPath: r ?? n, showProgressRing: !0, timeLeftDate: e.endsAt };
                case E.GM.EARNED:
                    return { assetPath: r ?? n, showProgressRing: !0, timeLeftDate: e.redemptionEndsAt ?? e.endsAt };
                case E.GM.CONSUMED:
                    return { assetPath: n, showProgressRing: !1, timeLeftDate: null };
                default:
                    return null;
            }
        })(l, u.rewardPreview),
        { progress: _ } = l;
    if (null == d || (d.showProgressRing && null == _)) return null;
    let {
            title: x,
            description: S,
            progressText: v,
            timeLeftText: I,
        } = (0, h.MZ)({
            promotion: l,
            progressIndicator: o.progressIndicator,
            helpCenterId: o.helpCenter?.id,
            timeLeftDate: d.timeLeftDate,
            locale: s,
        }),
        L = {
            assetPath: d.assetPath,
            progress: d.showProgressRing ? _ : null,
            progressColor: c?.progressColor,
            backgroundUrl: u.backgroundUrl,
            title: x,
            description: S,
            progressText: v,
            timeLeftText: I,
            contentThemeClassName: c?.contentTheme != null ? k[c.contentTheme] : void 0,
        };
    return "condensed" === t ? (0, n.jsx)(j, { ...L }) : (0, n.jsx)(T, { ...L });
};
