n.d(t, { Z: () => u }), n(978209);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(614185),
    s = n(4242),
    l = n(318110),
    c = n(513402);
function u(e) {
    let { nameplate: t, hovered: n, selected: i, reverse: u, content: d } = e,
        f = (0, a.D)('Nameplate'),
        p = !!(n || i),
        _ = (0, s.BY)(null == t ? void 0 : t.src, p),
        h = (0, l.p)(t, n, i, d);
    return null != t && f && null != _
        ? (0, r.jsx)('div', {
              className: o()(c.container),
              style: { background: h.background },
              children: (0, r.jsx)('img', {
                  className: o()(c.img, {
                      [c.hover]: n,
                      [c.selected]: i,
                      [c.reverse]: u
                  }),
                  src: _,
                  alt: t.imgAlt,
                  height: '100%',
                  width: 'auto',
                  style: { maskImage: h.maskImage }
              })
          })
        : null;
}
