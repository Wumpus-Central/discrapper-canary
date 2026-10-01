n.d(t, { A: () => u });
var l = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    a = n(834730),
    r = n(291747),
    o = n(866665),
    c = n(960850),
    d = n(999703);
let u = function (e) {
    let { rateLimitPerUser: t, slowmodeCooldownGuess: n, isBypassSlowmode: i, leadingIcon: u = !1 } = e,
        m = (0, c.VI)(t, !0),
        h = (0, c.pS)(n, i),
        x = (0, l.jsx)(a.E, { variant: "text-sm/normal", color: "text-muted", children: h }),
        g = (0, l.jsx)(r.x, { size: "xs", color: "currentColor", className: s()(d.Eq, { [d.iE]: u }) });
    return (0, l.jsx)(o.m, {
        text: m,
        children: (0, l.jsx)("div", {
            className: d.ns,
            children: u ? (0, l.jsxs)(l.Fragment, { children: [g, x] }) : (0, l.jsxs)(l.Fragment, { children: [x, g] }),
        }),
    });
};
