var n = t(477900),
    s = t(503698),
    l = t.n(s),
    r = t(866665),
    a = t(240248);
t(634110);
var c = t(487887),
    o = t(792996),
    u = t(764035);
function d(i) {
    let { spec: e, icon: t, tooltipText: s } = i,
        c = !(0, a.uJ)(s),
        o = (0, n.jsx)("div", {
            className: l()(u.Fx, { [u.Y_]: c }),
            style: { top: e.iconInset, insetInlineStart: e.iconInset },
            children: t,
        });
    return c ? (0, n.jsx)(r.m, { text: s, position: "top", delay: 350, children: o }) : o;
}
t.d(
    e,
    {},
    {
        P: function (i) {
            let { spec: e, application: t } = i,
                s = null != t ? t.getIconURL(c.iu.SMALL) : void 0;
            return null == s
                ? null
                : (0, n.jsx)(d, {
                      spec: e,
                      icon: (0, n.jsx)("div", {
                          className: u.In,
                          style: { width: e.iconSize, height: e.iconSize },
                          children: (0, n.jsx)("img", { src: s, alt: t?.name }),
                      }),
                      tooltipText: o.intl.string(o.t["4yiU7x"]),
                  });
        },
    },
);
