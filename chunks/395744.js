n.d(t, { A: () => d });
var a = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    i = n(744808),
    s = n(744053),
    o = n(778765),
    c = n(423393);
let d = (e) => {
    let { profileFrame: t, isMini: n = !1 } = e,
        r = t.layers.some((e) => "staple" === e.type && "bottom" === e.anchor);
    return (0, a.jsx)("div", {
        className: l()(s.i1, { [s.w1]: !r }),
        children: (0, a.jsxs)("div", {
            className: s.HX,
            children: [
                (0, a.jsx)("img", {
                    src: n ? c.A : o.A,
                    alt: "",
                    className: l()(s.wt, { [s.WD]: n }),
                    "aria-hidden": !0,
                    draggable: !1,
                }),
                (0, a.jsx)(i.A, { frame: t }),
            ],
        }),
    });
};
