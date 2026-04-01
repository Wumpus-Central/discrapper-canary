"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(816758),
    l = n(91299),
    u = n(178090),
    c = n(368054);
function d(e) {
    let {
            text: t,
            asset: n,
            disabled: s,
            onClick: d,
            color: _ = "white",
            className: f,
            textClassName: p,
            assetClassName: h,
        } = e,
        m = (0, i.useCallback)(() => {
            s || d();
        }, [s, d]);
    return (0, r.jsx)(l.A, {
        className: a()(f, c.x6, { [c.SU]: "black" === _, [c.AI]: "white" === _, [c.r9]: s }),
        onClick: m,
        disabled: s,
        children: (0, r.jsxs)(o.A, {
            className: a()(c.kL, { [c.Qz]: s }),
            children: [
                (0, r.jsx)("div", { className: c.Tp }),
                null != n && (0, r.jsx)("img", { src: n, alt: "", className: a()(c.LY, h) }),
                null != t &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(u.A, {
                                "aria-hidden": !0,
                                color: "currentColor",
                                variant: "heading-xxl/normal",
                                className: a()(c.CZ, { [c.Ro]: null != n }, p),
                                children: t,
                            }),
                            (0, r.jsx)(u.A, {
                                color: "currentColor",
                                variant: "heading-xxl/normal",
                                className: a()(c.Q6, { [c.Ro]: null != n }, p),
                                children: t,
                            }),
                        ],
                    }),
            ],
        }),
    });
}
