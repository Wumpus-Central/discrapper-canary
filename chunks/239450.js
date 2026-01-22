n.d(t, {
    A: () => o,
}),
    n(264879);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(610145);

function o(e) {
    let { thumbnails: t, variant: n = "gallery", className: i } = e;
    if ("stacked" === n) {
        let e = Math.min(t.length, 2);
        return (0, r.jsx)("div", {
            className: a()(s.qH, i, {
                [s.qK]: 1 === e,
                [s.xs]: 2 === e,
            }),
            children: t.slice(0, 2).map((e, t) =>
                (0, r.jsx)(
                    "img",
                    {
                        alt: "Clip preview",
                        className: s.M3,
                        src: e,
                        "data-index": t,
                    },
                    "".concat(e, "-").concat(t),
                ),
            ),
        });
    }
    let o = Math.min(t.length, 4);
    return (0, r.jsx)("div", {
        className: a()(s.bF, i, {
            [s.tK]: 1 === o,
            [s.y0]: 2 === o,
            [s.rm]: 3 === o,
            [s.E1]: o >= 4,
        }),
        children: t
            .slice(0, 4)
            .map((e, t) =>
                (0, r.jsx)(
                    "img",
                    {
                        alt: "Clip preview",
                        className: s.N3,
                        src: e,
                        "data-index": t,
                    },
                    "".concat(e, "-").concat(t),
                ),
            )
            .reverse(),
    });
}
