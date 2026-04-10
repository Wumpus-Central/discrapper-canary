"use strict";
n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    l = n(662714);
function a(e) {
    let { thumbnails: t, variant: n = "gallery", className: r } = e;
    if ("stacked" === n) {
        let e = Math.min(t.length, 2);
        return (0, i.jsx)("div", {
            className: s()(l.qH, r, { [l.qK]: 1 === e, [l.xs]: 2 === e }),
            children: t
                .slice(0, 2)
                .map((e, t) =>
                    (0, i.jsx)("img", { alt: "Clip preview", className: l.M3, src: e, "data-index": t }, `${e}-${t}`),
                ),
        });
    }
    let a = Math.min(t.length, 4);
    return (0, i.jsx)("div", {
        className: s()(l.bF, r, { [l.tK]: 1 === a, [l.y0]: 2 === a, [l.rm]: 3 === a, [l.E1]: a >= 4 }),
        children: t
            .slice(0, 4)
            .map((e, t) =>
                (0, i.jsx)("img", { alt: "Clip preview", className: l.N3, src: e, "data-index": t }, `${e}-${t}`),
            )
            .reverse(),
    });
}
