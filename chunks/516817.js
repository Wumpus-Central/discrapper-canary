n.d(t, { Z: () => c }), n(978209);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(545951),
    s = n(379839),
    l = n(513402);
function c(e) {
    let { nameplate: t, hovered: n, selected: i, reverse: c, content: u } = e,
        d = !!(n || i),
        f = (0, a.B)(null == t ? void 0 : t.src, d),
        _ = (0, s.p)(t, n, i, u);
    return null == t || null == f
        ? null
        : (0, r.jsx)('div', {
              className: o()(l.container),
              style: { background: _.background },
              children: (0, r.jsx)('img', {
                  className: o()(l.img, {
                      [l.hover]: n,
                      [l.selected]: i,
                      [l.reverse]: c
                  }),
                  src: f,
                  alt: t.imgAlt,
                  height: '100%',
                  width: 'auto',
                  style: { maskImage: _.maskImage }
              })
          });
}
