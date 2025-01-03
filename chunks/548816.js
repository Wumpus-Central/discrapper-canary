n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    s = n(517055);
function o(e) {
    let { padded: t = !0, inset: n = !1, active: r = !1, className: o, children: c, onClick: d, ...u } = e;
    return null != d
        ? (0, i.jsx)(a.Clickable, {
              onClick: d,
              tabIndex: null != d ? 0 : -1,
              className: l()(o, {
                  [s.outer]: !n,
                  [s.inset]: n,
                  [s.padded]: t,
                  [s.active]: r,
                  [s.interactive]: null != d
              }),
              ...u,
              children: c
          })
        : (0, i.jsx)('div', {
              className: l()(o, {
                  [s.outer]: !n,
                  [s.inset]: n,
                  [s.padded]: t,
                  [s.active]: r
              }),
              ...u,
              children: c
          });
}
