n.d(t, { A: () => u });
var i = n(477900);
n(582128);
var s = n(503698),
    l = n.n(s),
    r = n(194261),
    a = n(573435),
    o = n(260509),
    c = n(82477);
let u = function (e) {
    let {
            className: t,
            guild: n,
            isSelected: s = !0,
            width: u = 32,
            height: d = 32,
            shouldAnimate: m = !0,
            isLocked: f = !1,
        } = e,
        E = (0, o.Iv)(n, 32, m && s);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(a.Ay, {
                className: l()(c.dK, t),
                mask: a.hW.SQUIRCLE,
                width: u,
                height: d,
                children:
                    null == E
                        ? (0, i.jsx)("div", {
                              className: l()(c.$f, c.Gc),
                              children: (0, i.jsx)("div", { className: c.Hj, children: (0, o.Rb)(n) }),
                          })
                        : (0, i.jsx)("img", { alt: n.name, src: E, className: c.$f }),
            }),
            f
                ? (0, i.jsx)("div", {
                      className: c.bg,
                      children: (0, i.jsx)(r.LockIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: 10,
                          height: 10,
                          className: c.YL,
                      }),
                  })
                : null,
        ],
    });
};
