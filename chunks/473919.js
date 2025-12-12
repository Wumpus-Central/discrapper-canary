n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(28664),
    s = n(481060),
    l = n(556638),
    c = n(175996);
function u(e) {
    let { icon: t, tooltipText: n, tooltipAriaLabel: i, className: u, onTooltipShow: d } = e,
        f = (0, s.vjg)(s.Skl.ONLINE);
    return null == n
        ? (0, r.jsx)(t, {
              size: "custom",
              color: f,
              className: a()(c.icon, u),
          })
        : (0, r.jsx)(o.u, {
              ariaHidden: !0,
              text: n,
              delay: l.X,
              onTooltipShow: d,
              children: (0, r.jsx)(t, {
                  size: "custom",
                  color: f,
                  className: a()(c.icon, u),
                  "aria-label": i,
              }),
          });
}
