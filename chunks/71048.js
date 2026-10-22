e.d(t, { A: () => s });
var l = e(477900);
e(582128);
var r = e(12470),
    u = e(811893),
    i = e(58736),
    a = e(6144),
    o = e(165610),
    c = e(105292);
function s(n) {
    let { frame: t } = n,
        { canPopout: e, isPoppedOut: s, popOut: d, popIn: p } = (0, a.A)(t);
    return (0, o.x1)(t)
        ? s
            ? (0, l.jsx)(i.In, {
                  icon: r._,
                  tooltip: c.intl.string(c.t["NKV/MO"]),
                  "aria-label": c.intl.string(c.t["NKV/MO"]),
                  onClick: p,
              })
            : e
              ? (0, l.jsx)(i.In, {
                    icon: u.t,
                    tooltip: c.intl.string(c.t["3Zypbv"]),
                    "aria-label": c.intl.string(c.t["3Zypbv"]),
                    onClick: d,
                })
              : null
        : null;
}
