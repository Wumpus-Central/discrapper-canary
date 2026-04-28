"use strict";
n.d(t, { A: () => d });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(194261),
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
        [f, g] = i.useState(!1),
        _ = (0, c.Iv)(n, 32, m && s),
        x = () => g(!0),
        C = () => g(!1);
    return (0, l.jsxs)("div", {
        onFocus: x,
        onBlur: C,
        onMouseOver: x,
        onMouseLeave: C,
        children: [
            (0, l.jsx)(o.Ay, {
                className: a()(u.dK, t),
                mask: s || f ? o.hW.SQUIRCLE : o.hW.AVATAR_DEFAULT,
                width: d,
                height: h,
                children:
                    null == _
                        ? (0, l.jsx)("div", {
                              className: a()(u.$f, u.Gc),
                              children: (0, l.jsx)("div", { className: u.Hj, children: (0, c.Rb)(n) }),
                          })
                        : (0, l.jsx)("img", { alt: n.name, src: _, className: u.$f }),
            }),
            p
                ? (0, l.jsx)("div", {
                      className: u.bg,
                      children: (0, l.jsx)(r.X, {
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
