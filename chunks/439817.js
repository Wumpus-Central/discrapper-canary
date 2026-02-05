"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(397927),
    o = n(855790),
    d = n(652215),
    c = n(985018),
    u = n(694869);
let h = function (e) {
    let t,
        { title: n, header: l, children: h, renderSettings: p, onDragStart: A } = e,
        f = s.useRef(null);
    return (
        (t =
            null != n
                ? (0, i.jsxs)(o.Ay.Bar, {
                      className: a()(u.wx, u.bl),
                      onMouseDown: A,
                      children: [
                          (0, i.jsx)(o.Ay.Content, { className: a()(u.qd, u.bl), dynamicSize: !0, children: n }),
                          (0, i.jsx)(o.Ay.Content, {
                              children: (0, i.jsx)(r.YNO, {
                                  targetElementRef: f,
                                  position: "right",
                                  renderPopout: p ?? d.tEg,
                                  autoInvert: !1,
                                  children: (e) =>
                                      (0, i.jsx)(o.Ay.Icon, {
                                          ...e,
                                          icon: r.Zes,
                                          label: c.intl.string(c.t["3D5yo/"]),
                                          ref: f,
                                      }),
                              }),
                          }),
                      ],
                  })
                : l),
        (0, i.jsxs)("div", { className: u.pz, children: [t, (0, i.jsx)("div", { className: u.Y_, children: h })] })
    );
};
