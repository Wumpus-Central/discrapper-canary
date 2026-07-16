t.d(s, { P: () => x });
var i = t(627968),
    n = t(503698),
    a = t.n(n),
    r = t(866665),
    l = t(240248),
    c = t(561794),
    u = t(360469),
    d = t(375708),
    o = t(831350);
function h(e) {
    let { spec: s, icon: t, tooltipText: n } = e,
        u = !(0, l.uJ)(n),
        d = (0, i.jsx)("div", {
            className: a()(o.Fx, { [o.Y_]: u }),
            style: { top: s.iconInset, insetInlineStart: s.iconInset },
            children: t,
        });
    return u ? (0, i.jsx)(r.m, { text: n, position: "top", delay: c.Zh, children: d }) : d;
}
function x(e) {
    let { spec: s, application: t } = e,
        n = null != t ? t.getIconURL(u.iu.SMALL) : void 0;
    return null == n
        ? null
        : (0, i.jsx)(h, {
              spec: s,
              icon: (0, i.jsx)("div", {
                  className: o.In,
                  style: { width: s.iconSize, height: s.iconSize },
                  children: (0, i.jsx)("img", { src: n, alt: t?.name }),
              }),
              tooltipText: d.intl.string(d.t["4yiU7x"]),
          });
}
