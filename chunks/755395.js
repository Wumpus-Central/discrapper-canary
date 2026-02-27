n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    a = n(397927),
    s = n(60747);
function o(e) {
    let {
        padded: t = !0,
        inset: n = !1,
        active: r = !1,
        className: o,
        children: d,
        onClick: c,
        ref: u,
        noBackground: A = !1,
        ...h
    } = e;
    return null != c
        ? (0, i.jsx)(a.DUT, {
              innerRef: u,
              onClick: c,
              tabIndex: null != c ? 0 : -1,
              className: l()(o, { [s.A7]: !n, [s.C5]: n, [s.jC]: t, [s.vu]: r, [s.bG]: null != c, [s._$]: A }),
              ...h,
              children: d,
          })
        : (0, i.jsx)("div", {
              ref: u,
              className: l()(o, { [s.A7]: !n, [s.C5]: n, [s.jC]: t, [s.vu]: r, [s._$]: A }),
              ...h,
              children: d,
          });
}
