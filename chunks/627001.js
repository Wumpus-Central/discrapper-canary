"use strict";
n.d(t, { P: () => E });
var i = n(627968),
    r = n(503698),
    a = n.n(r),
    s = n(990078),
    l = n(240248),
    o = n(561794),
    d = n(360469),
    c = n(375708),
    u = n(951990);
function _(e) {
    let { spec: t, icon: n, tooltipText: r } = e,
        d = !(0, l.uJ)(r),
        c = (0, i.jsx)("div", {
            className: a()(u.Fx, { [u.Y_]: d }),
            style: { top: t.iconInset, insetInlineStart: t.iconInset },
            children: n,
        });
    return d ? (0, i.jsx)(s.m, { text: r, position: "top", delay: o.Zh, children: c }) : c;
}
function E(e) {
    let { spec: t, application: n } = e,
        r = null != n ? n.getIconURL(d.iu.SMALL) : void 0;
    return null == r
        ? null
        : (0, i.jsx)(_, {
              spec: t,
              icon: (0, i.jsx)("div", {
                  className: u.In,
                  style: { width: t.iconSize, height: t.iconSize },
                  children: (0, i.jsx)("img", { src: r, alt: n?.name }),
              }),
              tooltipText: c.intl.string(c.t["4yiU7x"]),
          });
}
