n.d(t, { P: () => E });
var i = n(627968),
    l = n(503698),
    a = n.n(l),
    r = n(990078),
    s = n(240248),
    o = n(594832),
    d = n(360469),
    u = n(985018),
    c = n(831350);
function h(e) {
    let { spec: t, icon: n, tooltipText: l } = e,
        d = !(0, s.uJ)(l),
        u = (0, i.jsx)("div", {
            className: a()(c.Fx, { [c.Y_]: d }),
            style: { top: t.iconInset, insetInlineStart: t.iconInset },
            children: n,
        });
    return d ? (0, i.jsx)(r.m, { text: l, position: "top", delay: o.Zh, children: u }) : u;
}
function E(e) {
    let { spec: t, application: n } = e,
        l = null != n ? n.getIconURL(d.iu.SMALL) : void 0;
    return null == l
        ? null
        : (0, i.jsx)(h, {
              spec: t,
              icon: (0, i.jsx)("div", {
                  className: c.In,
                  style: { width: t.iconSize, height: t.iconSize },
                  children: (0, i.jsx)("img", { src: l, alt: n?.name }),
              }),
              tooltipText: u.intl.string(u.t["4yiU7x"]),
          });
}
