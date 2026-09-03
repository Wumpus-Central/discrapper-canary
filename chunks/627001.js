t.d(s, { P: () => g });
var i = t(477900),
    n = t(503698),
    l = t.n(n),
    r = t(866665),
    a = t(240248),
    c = t(594832),
    u = t(360469),
    d = t(375708),
    o = t(764035);
function h(e) {
    let { spec: s, icon: t, tooltipText: n } = e,
        u = !(0, a.uJ)(n),
        d = (0, i.jsx)("div", {
            className: l()(o.Fx, { [o.Y_]: u }),
            style: { top: s.iconInset, insetInlineStart: s.iconInset },
            children: t,
        });
    return u ? (0, i.jsx)(r.m, { text: n, position: "top", delay: c.Zh, children: d }) : d;
}
function g(e) {
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
