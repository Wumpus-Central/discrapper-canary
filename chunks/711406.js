n.d(t, { Z: () => d });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(78891),
    l = n(766004),
    u = n(318870),
    c = n(47305);
function d(e) {
    let { children: t, namePlate: n, hover: a, selected: d, placement: f } = e,
        { canSee: _ } = (0, o.D)('NamePlate'),
        p = (0, r.useMemo)(() => ((a || d) && (null == n ? void 0 : n.animatedSrc) != null ? (null == n ? void 0 : n.animatedSrc) : null == n ? void 0 : n.src), [a, d, n]),
        h = (0, l.M)(n, a, d);
    return null != n && _ && null != p
        ? (0, i.jsxs)('div', {
              className: s()(c.container, {
                  [c.memberslist]: f === u.QY.Memberlist,
                  [c.privateChannel]: f === u.QY.PrivateChannel
              }),
              children: [
                  null != h.borderColor &&
                      (0, i.jsx)('div', {
                          style: { borderColor: h.borderColor },
                          className: c.borderLayer
                      }),
                  null != h.background &&
                      (0, i.jsx)('div', {
                          style: { background: h.background },
                          className: c.gradientLayer
                      }),
                  (0, i.jsx)('div', {
                      className: c.imgLayer,
                      children: (0, i.jsx)('img', {
                          className: s()(c.img, {
                              [c.hover]: a,
                              [c.selected]: d
                          }),
                          src: p,
                          alt: n.imgAlt
                      })
                  }),
                  (0, i.jsx)('div', {
                      className: c.content,
                      children: t
                  })
              ]
          })
        : (0, i.jsx)(i.Fragment, { children: t });
}
