"use strict";
n.d(t, { A: () => u });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(194261),
    o = n(573435),
    d = n(260509),
    c = n(830861);
let u = function (e) {
    let {
            className: t,
            guild: n,
            isSelected: a = !0,
            width: u = 32,
            height: _ = 32,
            shouldAnimate: E = !0,
            isLocked: A = !1,
        } = e,
        [h, I] = r.useState(!1),
        f = (0, d.Iv)(n, 32, E && a);
    function p() {
        return I(!0);
    }
    function T() {
        return I(!1);
    }
    return (0, i.jsxs)("div", {
        onFocus: p,
        onBlur: T,
        onMouseOver: p,
        onMouseLeave: T,
        children: [
            (0, i.jsx)(o.Ay, {
                className: s()(c.dK, t),
                mask: a || h ? o.hW.SQUIRCLE : o.hW.AVATAR_DEFAULT,
                width: u,
                height: _,
                children:
                    null == f
                        ? (0, i.jsx)("div", {
                              className: s()(c.$f, c.Gc),
                              children: (0, i.jsx)("div", { className: c.Hj, children: (0, d.Rb)(n) }),
                          })
                        : (0, i.jsx)("img", { alt: n.name, src: f, className: c.$f }),
            }),
            A
                ? (0, i.jsx)("div", {
                      className: c.bg,
                      children: (0, i.jsx)(l.X, {
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
