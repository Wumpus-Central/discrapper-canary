n.d(e, { c: () => p });
var i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    c = n(508770),
    r = n(990078),
    o = n(240248),
    d = n(561794),
    u = n(218606);
function l(t) {
    let { spec: e, icon: n, tooltipText: s } = t,
        c = !(0, o.uJ)(s),
        l = (0, i.jsx)("div", {
            className: a()(u.F, { [u.Y]: c }),
            style: { bottom: e.iconInset, insetInlineStart: e.iconInset },
            children: n,
        });
    return c ? (0, i.jsx)(r.m, { text: s, position: "top", delay: d.Zh, children: l }) : l;
}
function p(t) {
    let { spec: e, variant: n = "expressive", ...s } = t;
    return (0, i.jsx)(l, { spec: e, icon: (0, i.jsx)(c.E, { variant: n, ...s }) });
}
