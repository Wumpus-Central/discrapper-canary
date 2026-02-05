"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(435371),
    l = n(397927),
    u = n(985018),
    c = n(915534);
let d = i.forwardRef(function (e, t) {
    let {
        className: n,
        src: i,
        unicodeEmoji: a,
        name: d,
        size: _ = 20,
        enableTooltip: f = !0,
        enableHeight: p = !0,
        onClick: h,
    } = e;
    if (null == i && null == a) return null;
    let m = () => {
        let e = (0, r.jsx)("img", {
            ref: t,
            alt: u.intl.formatToPlainString(u.t["9+YWrE"], { name: d }),
            className: s()(c.U, n, { [c.v]: null != h }),
            height: p ? _ : void 0,
            src: i,
            width: _,
        });
        return (null != a &&
            (e = (0, r.jsx)("img", {
                ref: t,
                alt: a.allNamesString,
                className: s()(c.U, n, { [c.v]: null != h }),
                height: p ? _ : void 0,
                src: a.url,
                width: _,
            })),
        null == h)
            ? (0, r.jsx)(l.vN3, { offset: { left: 5 }, children: e })
            : (0, r.jsx)(l.DUT, { onClick: h, tag: "span", focusProps: { offset: { left: 5 } }, children: e });
    };
    return (0, r.jsx)(o.m_, { asContainer: !0, text: d, "aria-label": !1, shouldShow: f, tag: "span", children: m() });
});
