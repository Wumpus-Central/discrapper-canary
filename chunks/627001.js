"use strict";
n.d(t, { P: () => f });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(435371),
    o = n(240248),
    l = n(360469),
    u = n(114855);
function c(e) {
    return { top: e.iconInset, insetInlineStart: e.iconInset };
}
function d(e) {
    return { width: e.iconSize, height: e.iconSize };
}
function _(e) {
    let { spec: t, icon: n, tooltipText: i } = e,
        l = !(0, o.uJ)(i),
        d = (0, r.jsx)("div", { className: s()(u.Fx, { [u.Y_]: l }), style: c(t), children: n });
    return l ? (0, r.jsx)(a.m_, { text: i, position: "top", children: d }) : d;
}
function f(e) {
    let { spec: t, application: n, tooltipText: i } = e,
        s = null != n ? n.getIconURL(l.iu.SMALL) : void 0;
    return null == s
        ? null
        : (0, r.jsx)(_, {
              spec: t,
              icon: (0, r.jsx)("div", {
                  className: u.In,
                  style: d(t),
                  children: (0, r.jsx)("img", { src: s, alt: n?.name }),
              }),
              tooltipText: i,
          });
}
