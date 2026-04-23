l.d(t, { A: () => o });
var n = l(627968);
l(64700);
var i = l(503698),
    s = l.n(i),
    a = l(939249),
    r = l(834730),
    d = l(505244);
function o(e) {
    let { steps: t, stepIndex: l, onClick: i } = e;
    return (0, n.jsx)("div", {
        className: d.kL,
        role: "tablist",
        children: t.map((e, t) => {
            let o = l === t;
            return (0, n.jsxs)(
                a.D,
                {
                    onClick: () => i(t),
                    className: d._h,
                    role: "tab",
                    "aria-selected": o,
                    children: [
                        (0, n.jsx)("div", { className: s()(d.hr, { [d.YD]: o }) }),
                        (0, n.jsx)(r.E, {
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
