"use strict";
n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(384410);
let l = (e) => {
        let { data: t, disabled: n } = e,
            { content: i, className: l, onClick: u, disabled: c } = t;
        return (0, r.jsx)(s.vN3, {
            children: (0, r.jsx)("button", {
                type: "button",
                className: a()(o.A, l),
                onClick: u,
                disabled: n || c,
                children: i,
            }),
        });
    },
    u = (e) => {
        let { buttons: t, disabled: n, className: i } = e;
        return (0, r.jsx)("div", {
            role: "group",
            className: a()(o.O, i),
            children: t.map((e, t) => (0, r.jsx)(l, { data: e, disabled: n }, t)),
        });
    };
