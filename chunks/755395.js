n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    l = n(397927),
    s = n(260221);
function o(e) {
    let {
        padded: t = !0,
        inset: n = !1,
        active: a = !1,
        className: o,
        children: d,
        onClick: c,
        ref: u,
        noBackground: A = !1,
        ...h
    } = e;
    return null != c
        ? (0, i.jsx)(l.DUT, {
              innerRef: u,
              onClick: c,
              tabIndex: null != c ? 0 : -1,
              className: r()(o, { [s.A7]: !n, [s.C5]: n, [s.jC]: t, [s.vu]: a, [s.bG]: null != c, [s._$]: A }),
              ...h,
              children: d,
          })
        : (0, i.jsx)("div", {
              ref: u,
              className: r()(o, { [s.A7]: !n, [s.C5]: n, [s.jC]: t, [s.vu]: a, [s._$]: A }),
              ...h,
              children: d,
          });
}
