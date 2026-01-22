n.d(t, {
    A: () => d,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(573435),
    c = n(260509),
    u = n(515315);
let d = (e) => {
    let {
            className: t,
            guild: n,
            isSelected: a = !0,
            width: d = 32,
            height: f = 32,
            shouldAnimate: p = !0,
            isLocked: _ = !1,
        } = e,
        [h, m] = i.useState(!1),
        g = (0, c.Iv)(n, 32, p && a),
        E = () => m(!0),
        b = () => m(!1);
    return (0, r.jsxs)("div", {
        onFocus: E,
        onBlur: b,
        onMouseOver: E,
        onMouseLeave: b,
        children: [
            (0, r.jsx)(l.Ay, {
                className: s()(u.dK, t),
                mask: a || h ? l.hW.SQUIRCLE : l.hW.AVATAR_DEFAULT,
                width: d,
                height: f,
                children:
                    null == g
                        ? (0, r.jsx)("div", {
                              className: s()(u.$f, u.Gc),
                              children: (0, r.jsx)("div", {
                                  className: u.Hj,
                                  children: (0, c.Rb)(n),
                              }),
                          })
                        : (0, r.jsx)("img", {
                              alt: n.name,
                              src: g,
                              className: u.$f,
                          }),
            }),
            _
                ? (0, r.jsx)("div", {
                      className: u.bg,
                      children: (0, r.jsx)(o.XAi, {
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
