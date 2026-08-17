"use strict";
n.d(t, { A: () => d });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(194261),
    o = n(573435),
    u = n(260509),
    c = n(830861);
let d = function (e) {
    let {
            className: t,
            guild: n,
            isSelected: s = !0,
            width: d = 32,
            height: h = 32,
            shouldAnimate: m = !0,
            isLocked: f = !1,
        } = e,
        [p, g] = i.useState(!1),
        x = (0, u.Iv)(n, 32, m && s);
    function A() {
        return g(!0);
    }
    function C() {
        return g(!1);
    }
    return (0, l.jsxs)("div", {
        onFocus: A,
        onBlur: C,
        onMouseOver: A,
        onMouseLeave: C,
        children: [
            (0, l.jsx)(o.Ay, {
                className: r()(c.dK, t),
                mask: s || p ? o.hW.SQUIRCLE : o.hW.AVATAR_DEFAULT,
                width: d,
                height: h,
                children:
                    null == x
                        ? (0, l.jsx)("div", {
                              className: r()(c.$f, c.Gc),
                              children: (0, l.jsx)("div", { className: c.Hj, children: (0, u.Rb)(n) }),
                          })
                        : (0, l.jsx)("img", { alt: n.name, src: x, className: c.$f }),
            }),
            f
                ? (0, l.jsx)("div", {
                      className: c.bg,
                      children: (0, l.jsx)(a.LockIcon, {
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
