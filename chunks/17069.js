"use strict";
n.d(t, { A: () => l });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(30474);
function l(e) {
    let { thumbnails: t, variant: n = "gallery", className: r } = e;
    if ("stacked" === n) {
        let e = Math.min(t.length, 2);
        return (0, i.jsx)("div", {
            className: s()(a.qH, r, { [a.qK]: 1 === e, [a.xs]: 2 === e }),
            children: t
                .slice(0, 2)
                .map((e, t) =>
                    (0, i.jsx)("img", { alt: "Clip preview", className: a.M3, src: e, "data-index": t }, `${e}-${t}`),
                ),
        });
    }
    let l = Math.min(t.length, 4);
    return (0, i.jsx)("div", {
        className: s()(a.bF, r, { [a.tK]: 1 === l, [a.y0]: 2 === l, [a.rm]: 3 === l, [a.E1]: l >= 4 }),
        children: t
            .slice(0, 4)
            .map((e, t) =>
                (0, i.jsx)("img", { alt: "Clip preview", className: a.N3, src: e, "data-index": t }, `${e}-${t}`),
            )
            .reverse(),
    });
}
