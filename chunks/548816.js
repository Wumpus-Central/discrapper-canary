n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    s = n(747219);
function o(e) {
    let { padded: t = !0, inset: n = !1, active: l = !1, className: o, children: d, onClick: c, ...u } = e;
    return null != c
        ? (0, i.jsx)(a.P3F, {
              onClick: c,
              tabIndex: null != c ? 0 : -1,
              className: r()(o, {
                  [s.outer]: !n,
                  [s.inset]: n,
                  [s.padded]: t,
                  [s.active]: l,
                  [s.interactive]: null != c
              }),
              ...u,
              children: d
          })
        : (0, i.jsx)('div', {
              className: r()(o, {
                  [s.outer]: !n,
                  [s.inset]: n,
                  [s.padded]: t,
                  [s.active]: l
              }),
              ...u,
              children: d
          });
}
