"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(194261),
    o = n(573435),
    c = n(260509),
    u = n(428930);
let d = (e) => {
    let {
            className: t,
            guild: n,
            isSelected: s = !0,
            width: d = 32,
            height: h = 32,
            shouldAnimate: m = !0,
            isLocked: p = !1,
        } = e,
        [f, g] = l.useState(!1),
        _ = (0, c.Iv)(n, 32, m && s),
        x = () => g(!0),
        A = () => g(!1);
    return (0, i.jsxs)("div", {
        onFocus: x,
        onBlur: A,
        onMouseOver: x,
        onMouseLeave: A,
        children: [
            (0, i.jsx)(o.Ay, {
                className: r()(u.dK, t),
                mask: s || f ? o.hW.SQUIRCLE : o.hW.AVATAR_DEFAULT,
                width: d,
                height: h,
                children:
                    null == _
                        ? (0, i.jsx)("div", {
                              className: r()(u.$f, u.Gc),
                              children: (0, i.jsx)("div", { className: u.Hj, children: (0, c.Rb)(n) }),
                          })
                        : (0, i.jsx)("img", { alt: n.name, src: _, className: u.$f }),
            }),
            p
                ? (0, i.jsx)("div", {
                      className: u.bg,
                      children: (0, i.jsx)(a.X, {
                          size: "custom",
                          color: "currentColor",
                          width: 10,
                          height: 10,
                          className: u.YL,
                      }),
                  })
                : null,
        ],
    });
};
