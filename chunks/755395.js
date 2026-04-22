n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(939249),
    r = n(516746);
function o(e) {
    let {
        padded: t = !0,
        inset: n = !1,
        active: s = !1,
        className: o,
        children: c,
        onClick: d,
        ref: u,
        noBackground: m = !1,
        ...A
    } = e;
    return null != d
        ? (0, i.jsx)(a.D, {
              innerRef: u,
              onClick: d,
              tabIndex: null != d ? 0 : -1,
              className: l()(o, { [r.A7]: !n, [r.C5]: n, [r.jC]: t, [r.vu]: s, [r.bG]: null != d, [r._$]: m }),
              ...A,
              children: c,
          })
        : (0, i.jsx)("div", {
              ref: u,
              className: l()(o, { [r.A7]: !n, [r.C5]: n, [r.jC]: t, [r.vu]: s, [r._$]: m }),
              ...A,
              children: c,
          });
}
