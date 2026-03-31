n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(835245),
    o = n(397927),
    c = n(709562),
    d = n(985018),
    u = n(152475);
function h(e) {
    let { width: t = 24, height: n = 24, isBadged: s = !1 } = e,
        [a] = l.useState(() => (0, r.A)());
    return (0, i.jsxs)("svg", {
        width: t,
        height: n,
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("defs", {
                children: (0, i.jsxs)("mask", {
                    id: a,
                    children: [
                        (0, i.jsx)("rect", { fill: "white", width: "100%", height: "100%" }),
                        s && (0, i.jsx)("circle", { cx: "20", cy: "19", r: "10", fill: "black" }),
                    ],
                }),
            }),
            (0, i.jsx)("g", { mask: `url(#${a})`, children: (0, i.jsx)(o.cJi, {}) }),
        ],
    });
}
function A(e) {
    let { className: t, numRequestToSpeak: n } = e,
        l = n > 0;
    return (0, i.jsxs)("div", {
        className: a()(u.v, t),
        children: [
            (0, i.jsx)(h, { isBadged: l }),
            l
                ? (0, i.jsx)(o.Text, { className: u.F, variant: "text-xs/semibold", children: n > 99 ? "99+" : n })
                : null,
        ],
    });
}
function _(e) {
    let {
            toggleRequestToSpeakSidebar: t,
            showRequestToSpeakSidebar: n,
            className: s,
            numRequestToSpeak: a,
            onClick: r,
            ...o
        } = e,
        u = l.useCallback(() => {
            r?.(), t();
        }, [r, t]);
    return (0, i.jsx)(c.A, {
        onClick: u,
        label: n ? d.intl.string(d.t.gKGz7A) : d.intl.string(d.t.ImQ4dW),
        className: s,
        iconComponent: () => (0, i.jsx)(A, { numRequestToSpeak: a, className: s }),
        ...o,
    });
}
