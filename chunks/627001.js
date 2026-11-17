var t = s(477900),
    n = s(503698),
    l = s.n(n),
    a = s(866665),
    r = s(240248);
s(634110);
var c = s(487887),
    d = s(792996),
    u = s(764035);
function o(e) {
    let { spec: i, icon: s, tooltipText: n } = e,
        c = !(0, r.uJ)(n),
        d = (0, t.jsx)("div", {
            className: l()(u.Fx, { [u.Y_]: c }),
            style: { top: i.iconInset, insetInlineStart: i.iconInset },
            children: s,
        });
    return c ? (0, t.jsx)(a.m, { text: n, position: "top", delay: 350, children: d }) : d;
}
s.d(
    i,
    {},
    {
        P: function (e) {
            let { spec: i, application: s } = e,
                n = null != s ? s.getIconURL(c.iu.SMALL) : void 0;
            return null == n
                ? null
                : (0, t.jsx)(o, {
                      spec: i,
                      icon: (0, t.jsx)("div", {
                          className: u.In,
                          style: { width: i.iconSize, height: i.iconSize },
                          children: (0, t.jsx)("img", { src: n, alt: s?.name }),
                      }),
                      tooltipText: d.intl.string(d.t["4yiU7x"]),
                  });
        },
    },
);
