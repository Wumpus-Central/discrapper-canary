t.d(e, { P: () => p });
var n = t(477900),
    s = t(503698),
    l = t.n(s),
    r = t(866665),
    a = t(240248),
    c = t(594832),
    o = t(818023),
    u = t(375708),
    d = t(764035);
function h(i) {
    let { spec: e, icon: t, tooltipText: s } = i,
        o = !(0, a.uJ)(s),
        u = (0, n.jsx)("div", {
            className: l()(d.Fx, { [d.Y_]: o }),
            style: { top: e.iconInset, insetInlineStart: e.iconInset },
            children: t,
        });
    return o ? (0, n.jsx)(r.m, { text: s, position: "top", delay: c.Zh, children: u }) : u;
}
function p(i) {
    let { spec: e, application: t } = i,
        s = null != t ? t.getIconURL(o.iu.SMALL) : void 0;
    return null == s
        ? null
        : (0, n.jsx)(h, {
              spec: e,
              icon: (0, n.jsx)("div", {
                  className: d.In,
                  style: { width: e.iconSize, height: e.iconSize },
                  children: (0, n.jsx)("img", { src: s, alt: t?.name }),
              }),
              tooltipText: u.intl.string(u.t["4yiU7x"]),
          });
}
