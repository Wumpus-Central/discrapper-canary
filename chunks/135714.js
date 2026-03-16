"use strict";
n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(35368);
let l = (e) => {
        let { data: t, disabled: n } = e,
            { content: i, className: l, onClick: u, disabled: c } = t;
        return (0, r.jsx)(a.vN3, {
            children: (0, r.jsx)("button", {
                type: "button",
                className: s()(o.A, l),
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
            className: s()(o.O, i),
            children: t.map((e, t) => (0, r.jsx)(l, { data: e, disabled: n }, t)),
        });
    };
