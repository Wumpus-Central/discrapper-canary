"use strict";
n.d(t, { P: () => f });
var i = n(627968),
    r = n(503698),
    s = n.n(r),
    a = n(990078),
    o = n(240248),
    l = n(561794),
    u = n(360469),
    c = n(375708),
    d = n(831350);
function _(e) {
    let { spec: t, icon: n, tooltipText: r } = e,
        u = !(0, o.uJ)(r),
        c = (0, i.jsx)("div", {
            className: s()(d.Fx, { [d.Y_]: u }),
            style: { top: t.iconInset, insetInlineStart: t.iconInset },
            children: n,
        });
    return u ? (0, i.jsx)(a.m, { text: r, position: "top", delay: l.Zh, children: c }) : c;
}
function f(e) {
    let { spec: t, application: n } = e,
        r = null != n ? n.getIconURL(u.iu.SMALL) : void 0;
    return null == r
        ? null
        : (0, i.jsx)(_, {
              spec: t,
              icon: (0, i.jsx)("div", {
                  className: d.In,
                  style: { width: t.iconSize, height: t.iconSize },
                  children: (0, i.jsx)("img", { src: r, alt: n?.name }),
              }),
              tooltipText: c.intl.string(c.t["4yiU7x"]),
          });
}
