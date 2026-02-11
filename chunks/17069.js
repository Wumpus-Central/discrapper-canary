n.d(t, { A: () => s });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(152563);
function s(e) {
    let { thumbnails: t, variant: n = "gallery", className: l } = e;
    if ("stacked" === n) {
        let e = Math.min(t.length, 2);
        return (0, i.jsx)("div", {
            className: a()(r.qH, l, { [r.qK]: 1 === e, [r.xs]: 2 === e }),
            children: t
                .slice(0, 2)
                .map((e, t) =>
                    (0, i.jsx)("img", { alt: "Clip preview", className: r.M3, src: e, "data-index": t }, `${e}-${t}`),
                ),
        });
    }
    let s = Math.min(t.length, 4);
    return (0, i.jsx)("div", {
        className: a()(r.bF, l, { [r.tK]: 1 === s, [r.y0]: 2 === s, [r.rm]: 3 === s, [r.E1]: s >= 4 }),
        children: t
            .slice(0, 4)
            .map((e, t) =>
                (0, i.jsx)("img", { alt: "Clip preview", className: r.N3, src: e, "data-index": t }, `${e}-${t}`),
            )
            .reverse(),
    });
}
