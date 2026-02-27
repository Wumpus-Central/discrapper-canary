"use strict";
n.d(t, { P: () => h });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(435371),
    o = n(240248),
    l = n(594832),
    u = n(360469),
    c = n(985018),
    d = n(569261);
function _(e) {
    return { top: e.iconInset, insetInlineStart: e.iconInset };
}
function f(e) {
    return { width: e.iconSize, height: e.iconSize };
}
function p(e) {
    let { spec: t, icon: n, tooltipText: i } = e,
        u = !(0, o.uJ)(i),
        c = (0, r.jsx)("div", { className: s()(d.Fx, { [d.Y_]: u }), style: _(t), children: n });
    return u ? (0, r.jsx)(a.m_, { text: i, position: "top", delay: l.Zh, children: c }) : c;
}
function h(e) {
    let { spec: t, application: n } = e,
        i = null != n ? n.getIconURL(u.iu.SMALL) : void 0;
    return null == i
        ? null
        : (0, r.jsx)(p, {
              spec: t,
              icon: (0, r.jsx)("div", {
                  className: d.In,
                  style: f(t),
                  children: (0, r.jsx)("img", { src: i, alt: n?.name }),
              }),
              tooltipText: c.intl.string(c.t["4yiU7x"]),
          });
}
