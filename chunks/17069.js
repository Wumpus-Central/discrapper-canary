"use strict";
n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    s = n(180426);
function a(e) {
    let { thumbnails: t, variant: n = "gallery", className: r } = e;
    if ("stacked" === n) {
        let e = Math.min(t.length, 2);
        return (0, i.jsx)("div", {
            className: l()(s.qH, r, { [s.qK]: 1 === e, [s.xs]: 2 === e }),
            children: t
                .slice(0, 2)
                .map((e, t) =>
                    (0, i.jsx)("img", { alt: "Clip preview", className: s.M3, src: e, "data-index": t }, `${e}-${t}`),
                ),
        });
    }
    let a = Math.min(t.length, 4);
    return (0, i.jsx)("div", {
        className: l()(s.bF, r, { [s.tK]: 1 === a, [s.y0]: 2 === a, [s.rm]: 3 === a, [s.E1]: a >= 4 }),
        children: t
            .slice(0, 4)
            .map((e, t) =>
                (0, i.jsx)("img", { alt: "Clip preview", className: s.N3, src: e, "data-index": t }, `${e}-${t}`),
            )
            .reverse(),
    });
}
