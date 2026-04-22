"use strict";
n.d(t, { A: () => d });
var a = n(627968);
n(64700);
var i = n(150934),
    r = n(834730),
    l = n(986188);
let s = (e) => {
        let { onChange: t, label: n, subtitle: r, selected: s } = e;
        return (0, a.jsx)("div", {
            className: l.yc,
            children: (0, a.jsx)(i.S, { checked: s, onChange: t, label: n, description: r }),
        });
    },
    d = (e) => {
        let { element: t, title: n, state: i, onChange: d } = e;
        if (t?.type !== "checkbox") return null;
        let { data: o } = t;
        return (0, a.jsxs)("div", {
            children: [
                null != n &&
                    (0, a.jsxs)(r.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: l.DD,
                        children: [n, t.should_submit_data && (0, a.jsx)("span", { className: l.mw, children: "*" })],
                    }),
                o.map((e, t) => {
                    let [n, r, l] = e;
                    return (0, a.jsx)(
                        s,
                        { onChange: () => d(n, r), selected: n in i, label: r, subtitle: l },
                        `${t}+button`,
                    );
                }),
            ],
        });
    };
