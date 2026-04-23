"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(265872),
    o = n(625903),
    d = n(855790),
    c = n(652215),
    u = n(985018),
    h = n(609360);
let p = function (e) {
    let t,
        { title: n, header: l, children: p, renderSettings: A, onDragStart: f } = e,
        _ = s.useRef(null);
    return (
        (t =
            null != n
                ? (0, i.jsxs)(d.Ay.Bar, {
                      className: a()(h.wx, h.bl),
                      onMouseDown: f,
                      children: [
                          (0, i.jsx)(d.Ay.Content, { className: a()(h.qd, h.bl), dynamicSize: !0, children: n }),
                          (0, i.jsx)(d.Ay.Content, {
                              children: (0, i.jsx)(r.Y, {
                                  targetElementRef: _,
                                  position: "right",
                                  renderPopout: A ?? c.tEg,
                                  autoInvert: !1,
                                  children: (e) =>
                                      (0, i.jsx)(d.Ay.Icon, {
                                          ...e,
                                          icon: o.Z,
                                          label: u.intl.string(u.t["3D5yo/"]),
                                          ref: _,
                                      }),
                              }),
                          }),
                      ],
                  })
                : l),
        (0, i.jsxs)("div", { className: h.pz, children: [t, (0, i.jsx)("div", { className: h.Y_, children: p })] })
    );
};
