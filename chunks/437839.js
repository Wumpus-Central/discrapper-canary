n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(545428),
    c = n(985018),
    u = n(27551);
function d(e) {
    let { onClick: t, disabled: n = !1 } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { className: u.me }),
            (0, r.jsx)("div", {
                className: u.kL,
                children: (0, r.jsx)("div", {
                    className: u.UD,
                    children: (0, r.jsx)(l.A, {
                        className: u.x6,
                        childClassName: s()(u.Z4, {
                            [u.r9]: n,
                            [u.xb]: !n,
                        }),
                        onClick: t,
                        disabled: n,
                        isActive: !1,
                        noHover: n,
                        "aria-label": c.intl.string(c.t.oeb1vg),
                        children: (0, r.jsx)(o.lX7, {
                            size: "xs",
                            color: "currentColor",
                            className: u.AO,
                        }),
                    }),
                }),
            }),
        ],
    });
}
let f = i.memo(d);
