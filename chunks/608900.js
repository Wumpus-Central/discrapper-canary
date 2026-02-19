"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(835245),
    o = n(397927),
    c = n(709562),
    d = n(985018),
    u = n(529414);
function h(e) {
    let { width: t = 24, height: n = 24, isBadged: l = !1 } = e,
        [r] = s.useState(() => (0, a.A)());
    return (0, i.jsxs)("svg", {
        width: t,
        height: n,
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("defs", {
                children: (0, i.jsxs)("mask", {
                    id: r,
                    children: [
                        (0, i.jsx)("rect", { fill: "white", width: "100%", height: "100%" }),
                        l && (0, i.jsx)("circle", { cx: "20", cy: "19", r: "10", fill: "black" }),
                    ],
                }),
            }),
            (0, i.jsx)("g", { mask: `url(#${r})`, children: (0, i.jsx)(o.cJi, {}) }),
        ],
    });
}
function A(e) {
    let { className: t, numRequestToSpeak: n } = e,
        s = n > 0;
    return (0, i.jsxs)("div", {
        className: r()(u.v, t),
        children: [
            (0, i.jsx)(h, { isBadged: s }),
            s
                ? (0, i.jsx)(o.Text, { className: u.F, variant: "text-xs/semibold", children: n > 99 ? "99+" : n })
                : null,
        ],
    });
}
function p(e) {
    let {
            toggleRequestToSpeakSidebar: t,
            showRequestToSpeakSidebar: n,
            className: l,
            numRequestToSpeak: r,
            onClick: a,
            ...o
        } = e,
        u = s.useCallback(() => {
            a?.(), t();
        }, [a, t]);
    return (0, i.jsx)(c.A, {
        onClick: u,
        label: n ? d.intl.string(d.t.gKGz7A) : d.intl.string(d.t.ImQ4dW),
        className: l,
        iconComponent: () => (0, i.jsx)(A, { numRequestToSpeak: r, className: l }),
        ...o,
    });
}
