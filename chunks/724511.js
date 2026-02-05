"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(573435),
    u = n(260509),
    c = n(515315);
let d = (e) => {
    let {
            className: t,
            guild: n,
            isSelected: a = !0,
            width: d = 32,
            height: _ = 32,
            shouldAnimate: f = !0,
            isLocked: p = !1,
        } = e,
        [h, m] = i.useState(!1),
        g = (0, u.Iv)(n, 32, f && a),
        E = () => m(!0),
        A = () => m(!1);
    return (0, r.jsxs)("div", {
        onFocus: E,
        onBlur: A,
        onMouseOver: E,
        onMouseLeave: A,
        children: [
            (0, r.jsx)(l.Ay, {
                className: s()(c.dK, t),
                mask: a || h ? l.hW.SQUIRCLE : l.hW.AVATAR_DEFAULT,
                width: d,
                height: _,
                children:
                    null == g
                        ? (0, r.jsx)("div", {
                              className: s()(c.$f, c.Gc),
                              children: (0, r.jsx)("div", { className: c.Hj, children: (0, u.Rb)(n) }),
                          })
                        : (0, r.jsx)("img", { alt: n.name, src: g, className: c.$f }),
            }),
            p
                ? (0, r.jsx)("div", {
                      className: c.bg,
                      children: (0, r.jsx)(o.XAi, {
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
