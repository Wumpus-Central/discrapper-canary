"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(194261),
    l = n(573435),
    u = n(260509),
    c = n(428930);
let d = function (e) {
    let {
            className: t,
            guild: n,
            isSelected: s = !0,
            width: d = 32,
            height: _ = 32,
            shouldAnimate: h = !0,
            isLocked: f = !1,
        } = e,
        [p, E] = r.useState(!1),
        m = (0, u.Iv)(n, 32, h && s);
    function g() {
        return E(!0);
    }
    function A() {
        return E(!1);
    }
    return (0, i.jsxs)("div", {
        onFocus: g,
        onBlur: A,
        onMouseOver: g,
        onMouseLeave: A,
        children: [
            (0, i.jsx)(l.Ay, {
                className: a()(c.dK, t),
                mask: s || p ? l.hW.SQUIRCLE : l.hW.AVATAR_DEFAULT,
                width: d,
                height: _,
                children:
                    null == m
                        ? (0, i.jsx)("div", {
                              className: a()(c.$f, c.Gc),
                              children: (0, i.jsx)("div", { className: c.Hj, children: (0, u.Rb)(n) }),
                          })
                        : (0, i.jsx)("img", { alt: n.name, src: m, className: c.$f }),
            }),
            f
                ? (0, i.jsx)("div", {
                      className: c.bg,
                      children: (0, i.jsx)(o.X, {
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
