n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(614185),
    l = n(4242),
    c = n(513402);
function u(e) {
    let { nameplate: t, hovered: n, selected: o } = e,
        u = (0, s.D)('Nameplate'),
        d = i.useMemo(() => ((n || o) && (null == t ? void 0 : t.animatedSrc) != null ? (null == t ? void 0 : t.animatedSrc) : null == t ? void 0 : t.src), [n, o, t]),
        f = (0, l.p)(t, n, o);
    return null != t && u && null != d
        ? (0, r.jsx)('div', {
              className: c.container,
              children: (0, r.jsx)('div', {
                  className: a()(c.nameplateContainer, { [c.border]: null != f.borderColor }),
                  style: {
                      borderColor: f.borderColor,
                      background: f.background
                  },
                  children: (0, r.jsx)('img', {
                      className: a()(c.img, {
                          [c.hover]: n,
                          [c.selected]: o
                      }),
                      src: d,
                      alt: t.imgAlt,
                      height: '100%',
                      width: 'auto'
                  })
              })
          })
        : null;
}
