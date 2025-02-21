n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(614185),
    s = n(4242),
    l = n(318110),
    c = n(513402);
function u(e) {
    let { nameplate: t, hovered: n, selected: i } = e,
        u = (0, a.D)('Nameplate'),
        d = !!(n || i),
        f = (0, s.BY)(null == t ? void 0 : t.src, d),
        p = (0, l.p)(t, n, i);
    return null != t && u && null != f
        ? (0, r.jsx)('div', {
              className: o()(c.container, { [c.border]: null != p.borderColor }),
              style: p,
              children: (0, r.jsx)('img', {
                  className: o()(c.img, {
                      [c.hover]: n,
                      [c.selected]: i
                  }),
                  src: f,
                  alt: t.imgAlt,
                  height: '100%',
                  width: 'auto'
              })
          })
        : null;
}
