n.d(t, { A: () => u });
var a = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    i = n(744808),
    s = n(985018),
    o = n(744053),
    c = n(778765),
    d = n(423393);
let u = (e) => {
    let { profileFrame: t, isMini: n = !1 } = e,
        r = t.layers.some((e) => "staple" === e.type && "bottom" === e.anchor);
    return (0, a.jsx)("div", {
        className: l()(o.i1, { [o.w1]: !r }),
        role: "img",
        "aria-label": s.intl.formatToPlainString(s.t["DT/PwH"], { a11y_text: t.label }),
        children: (0, a.jsxs)("div", {
            className: o.HX,
            children: [
                (0, a.jsx)("img", {
                    src: n ? d.A : c.A,
                    alt: "",
                    className: l()(o.wt, { [o.WD]: n }),
                    "aria-hidden": !0,
                    draggable: !1,
                }),
                (0, a.jsx)(i.A, { frame: t }),
            ],
        }),
    });
};
