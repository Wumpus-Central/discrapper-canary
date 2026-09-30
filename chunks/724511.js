n.d(t, { A: () => c });
var l = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    r = n(194261),
    a = n(573435),
    o = n(260509),
    u = n(82477);
let c = function (e) {
    let {
            className: t,
            guild: n,
            isSelected: i = !0,
            width: c = 32,
            height: d = 32,
            shouldAnimate: m = !0,
            isLocked: h = !1,
        } = e,
        p = (0, o.Iv)(n, 32, m && i);
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(a.Ay, {
                className: s()(u.dK, t),
                mask: a.hW.SQUIRCLE,
                width: c,
                height: d,
                children:
                    null == p
                        ? (0, l.jsx)("div", {
                              className: s()(u.$f, u.Gc),
                              children: (0, l.jsx)("div", { className: u.Hj, children: (0, o.Rb)(n) }),
                          })
                        : (0, l.jsx)("img", { alt: n.name, src: p, className: u.$f }),
            }),
            h
                ? (0, l.jsx)("div", {
                      className: u.bg,
                      children: (0, l.jsx)(r.LockIcon, {
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
