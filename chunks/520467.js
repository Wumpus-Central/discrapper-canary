n.d(t, {
    A: () => o,
});
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    s = n(397927),
    a = n(751679);

function o(e) {
    let { steps: t, stepIndex: n, onClick: r } = e;
    return (0, l.jsx)("div", {
        className: a.kL,
        children: t.map((e, t) => {
            let o = n === t;
            return (0, l.jsxs)(
                s.DUT,
                {
                    onClick: () => r(t),
                    className: a._h,
                    children: [
                        (0, l.jsx)("div", {
                            className: i()(a.hr, {
                                [a.YD]: o,
                            }),
                        }),
                        (0, l.jsx)(s.Text, {
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
