n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(835245),
    o = n(280056),
    c = n(834730),
    d = n(709562),
    u = n(985018),
    _ = n(489643);
function A(e) {
    let { width: t = 24, height: n = 24, isBadged: a = !1 } = e,
        [s] = l.useState(() => (0, r.A)());
    return (0, i.jsxs)("svg", {
        width: t,
        height: n,
        viewBox: "0 0 24 24",
        children: [
            (0, i.jsx)("defs", {
                children: (0, i.jsxs)("mask", {
                    id: s,
                    children: [
                        (0, i.jsx)("rect", { fill: "white", width: "100%", height: "100%" }),
                        a && (0, i.jsx)("circle", { cx: "20", cy: "19", r: "10", fill: "black" }),
                    ],
                }),
            }),
            (0, i.jsx)("g", { mask: `url(#${s})`, children: (0, i.jsx)(o.c, {}) }),
        ],
    });
}
function p(e) {
    let { className: t, numRequestToSpeak: n } = e,
        l = n > 0;
    return (0, i.jsxs)("div", {
        className: s()(_.v, t),
        children: [
            (0, i.jsx)(A, { isBadged: l }),
            l ? (0, i.jsx)(c.E, { className: _.F, variant: "text-xs/semibold", children: n > 99 ? "99+" : n }) : null,
        ],
    });
}
function h(e) {
    let {
            toggleRequestToSpeakSidebar: t,
            showRequestToSpeakSidebar: n,
            className: a,
            numRequestToSpeak: s,
            onClick: r,
            ...o
        } = e,
        c = l.useCallback(() => {
            r?.(), t();
        }, [r, t]);
    return (0, i.jsx)(d.A, {
        onClick: c,
        label: n ? u.intl.string(u.t.gKGz7A) : u.intl.string(u.t.ImQ4dW),
        className: a,
        iconComponent: () => (0, i.jsx)(p, { numRequestToSpeak: s, className: a }),
        ...o,
    });
}
