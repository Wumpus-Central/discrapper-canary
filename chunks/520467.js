n.d(t, { A: () => d });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(397927),
    r = n(751679);
function d(e) {
    let { steps: t, stepIndex: n, onClick: i } = e;
    return (0, l.jsx)("div", {
        className: r.kL,
        children: t.map((e, t) => {
            let d = n === t;
            return (0, l.jsxs)(
                a.DUT,
                {
                    onClick: () => i(t),
                    className: r._h,
                    children: [
                        (0, l.jsx)("div", { className: s()(r.hr, { [r.YD]: d }) }),
                        (0, l.jsx)(a.Text, {
                            color: d ? "text-brand" : "text-muted",
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
