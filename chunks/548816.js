n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    s = n(418451);
function o(e) {
    let { padded: t = !0, inset: n = !1, active: l = !1, className: o, children: c, onClick: d, ...u } = e;
    return null != d
        ? (0, i.jsx)(a.P3F, {
              onClick: d,
              tabIndex: null != d ? 0 : -1,
              className: r()(o, {
                  [s.outer]: !n,
                  [s.inset]: n,
                  [s.padded]: t,
                  [s.active]: l,
                  [s.interactive]: null != d
              }),
              ...u,
              children: c
          })
        : (0, i.jsx)('div', {
              className: r()(o, {
                  [s.outer]: !n,
                  [s.inset]: n,
                  [s.padded]: t,
                  [s.active]: l
              }),
              ...u,
              children: c
          });
}
