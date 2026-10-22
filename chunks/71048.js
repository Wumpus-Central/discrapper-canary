l.d(t, { A: () => s });
var e = l(477900);
l(582128);
var r = l(12470),
    u = l(811893),
    i = l(58736),
    a = l(646973),
    c = l(165610),
    o = l(105292);
function s(n) {
    let { frame: t } = n,
        { canPopout: l, isPoppedOut: s, popOut: d, popIn: f } = (0, a.A)(t);
    return (0, c.x1)(t)
        ? s
            ? (0, e.jsx)(i.In, {
                  icon: r._,
                  tooltip: o.intl.string(o.t["NKV/MO"]),
                  "aria-label": o.intl.string(o.t["NKV/MO"]),
                  onClick: f,
              })
            : l
              ? (0, e.jsx)(i.In, {
                    icon: u.t,
                    tooltip: o.intl.string(o.t["3Zypbv"]),
                    "aria-label": o.intl.string(o.t["3Zypbv"]),
                    onClick: d,
                })
              : null
        : null;
}
