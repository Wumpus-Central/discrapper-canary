n.d(t, { KP: () => d, Kb: () => p, OH: () => x, lx: () => E, nY: () => c, pK: () => f, zj: () => m });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(158954),
    o = n(827734),
    u = n(221190);
function c(e) {
    let { url: t } = e;
    return null == t ? null : (0, r.jsx)("img", { src: t, alt: "", className: u.bU });
}
function d() {
    return (0, r.jsx)("div", { className: u.MM, "data-testid": "discord-web-video-player-end-screen" });
}
function m(e) {
    let { orientation: t, children: n } = e;
    return (0, r.jsx)("div", { className: a()(u.Pb, { [u.II]: "portrait" === t }), children: n });
}
function p(e) {
    let { url: t, orientation: n, ref: l } = e;
    return null == t
        ? null
        : (0, r.jsx)("img", {
              ref: l,
              src: t,
              alt: "Video thumbnail",
              className: a()(u.C, { [u.TW]: "portrait" === n }),
          });
}
function f(e) {
    let { url: t, ref: n } = e;
    return null == t ? null : (0, r.jsx)("img", { ref: n, src: t, alt: "Video thumbnail", className: u.xc });
}
function E(e) {
    let { title: t, subtitle: n, ctaBtnLabel: l, onCTAClick: i, orientation: s, ctaIcon: o } = e;
    return (0, r.jsxs)("div", {
        className: a()(u.pP, { [u.iC]: "portrait" === s }),
        children: [(0, r.jsx)(h, { title: t, subtitle: n }), (0, r.jsx)(v, { label: l, icon: o, onClick: i })],
    });
}
function h(e) {
    let { title: t, subtitle: n } = e;
    return (0, r.jsxs)("div", {
        className: u.PH,
        children: [
            (0, r.jsx)(s.DZT, { variant: "heading-md/semibold", className: u.m5, children: t }),
            (0, r.jsx)(s.DZT, { variant: "heading-sm/normal", className: u.s$, children: n }),
        ],
    });
}
function v(e) {
    let { label: t, icon: n, onClick: i, className: c } = e,
        [d, m] = l.useState(!1),
        p = () => {
            m(!0);
        },
        f = () => {
            m(!1);
        };
    return (0, r.jsxs)(s.DUT, {
        className: a()(u.uU, u.iM, c),
        onMouseEnter: p,
        onMouseLeave: f,
        onFocus: p,
        onBlur: f,
        onClick: i,
        children: [
            (0, r.jsx)(s.DZT, { variant: "heading-md/semibold", className: u.ce, children: t }),
            null != n && (0, r.jsx)(n, { size: "md", color: d ? o.A.colors.WHITE : "#B5BAC1", className: u.J5 }),
        ],
    });
}
function x(e) {
    let { title: t, subtitle: n, icon: i, onClick: o, className: c, divider: d } = e,
        [m, p] = l.useState(!1),
        f = () => {
            p(!0);
        },
        E = () => {
            p(!1);
        };
    return (0, r.jsx)(s.DUT, {
        className: a()(u.Mr, u.iM, c),
        onMouseEnter: f,
        onMouseLeave: E,
        onFocus: f,
        onBlur: E,
        onClick: o,
        children: (0, r.jsxs)("div", {
            className: u.ee,
            children: [
                (0, r.jsxs)("div", {
                    className: u.XU,
                    children: [
                        (0, r.jsx)(s.DZT, { variant: "heading-md/semibold", className: u.Zr, children: t }),
                        (0, r.jsx)(s.DZT, { variant: "heading-sm/normal", className: u.Hk, children: n }),
                    ],
                }),
                d,
                (0, r.jsx)(i, { size: "md", color: m ? "#FFFFFF" : "#B5BAC1", className: u.J5 }),
            ],
        }),
    });
}
