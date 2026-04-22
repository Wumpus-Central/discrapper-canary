a.d(t, { A: () => u });
var l = a(627968);
a(64700);
var n = a(503698),
    r = a.n(n),
    i = a(187322),
    o = a(297362);
let s = (e) => {
        let { data: t, disabled: a } = e,
            { content: n, className: s, onClick: u, disabled: d } = t;
        return (0, l.jsx)(i.vN, {
            children: (0, l.jsx)("button", {
                type: "button",
                className: r()(o.A, s),
                onClick: u,
                disabled: a || d,
                children: n,
            }),
        });
    },
    u = (e) => {
        let { buttons: t, disabled: a, className: n } = e;
        return (0, l.jsx)("div", {
            role: "group",
            className: r()(o.O, n),
            children: t.map((e, t) => (0, l.jsx)(s, { data: e, disabled: a }, t)),
        });
    };
