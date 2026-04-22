n.d(t, { P: () => A });
var i = n(627968),
    l = n(503698),
    s = n.n(l),
    a = n(990078),
    r = n(240248),
    o = n(594832),
    d = n(360469),
    c = n(985018),
    u = n(831350);
function h(e) {
    let { spec: t, icon: n, tooltipText: l } = e,
        d = !(0, r.uJ)(l),
        c = (0, i.jsx)("div", {
            className: s()(u.Fx, { [u.Y_]: d }),
            style: { top: t.iconInset, insetInlineStart: t.iconInset },
            children: n,
        });
    return d ? (0, i.jsx)(a.m, { text: l, position: "top", delay: o.Zh, children: c }) : c;
}
function A(e) {
    let { spec: t, application: n } = e,
        l = null != n ? n.getIconURL(d.iu.SMALL) : void 0;
    return null == l
        ? null
        : (0, i.jsx)(h, {
              spec: t,
              icon: (0, i.jsx)("div", {
                  className: u.In,
                  style: { width: t.iconSize, height: t.iconSize },
                  children: (0, i.jsx)("img", { src: l, alt: n?.name }),
              }),
              tooltipText: c.intl.string(c.t["4yiU7x"]),
          });
}
