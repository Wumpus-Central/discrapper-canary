n.d(t, { A: () => o });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    r = n(939249),
    a = n(834730),
    d = n(252316);
function o(e) {
    let { steps: t, stepIndex: n, onClick: i } = e;
    return (0, l.jsx)("div", {
        className: d.kL,
        children: t.map((e, t) => {
            let o = n === t;
            return (0, l.jsxs)(
                r.D,
                {
                    onClick: () => i(t),
                    className: d._h,
                    children: [
                        (0, l.jsx)("div", { className: s()(d.hr, { [d.YD]: o }) }),
                        (0, l.jsx)(a.E, {
                            color: o ? "text-brand" : "text-muted",
                            variant: "text-xs/normal",
                            children: e,
                        }),
                    ],
                },
                e,
            );
        }),
    });
}
