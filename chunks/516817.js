n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(614185),
    s = n(4242),
    l = n(513402);
function c(e) {
    let { nameplate: t, hovered: n, selected: i } = e,
        c = (0, a.D)('Nameplate'),
        u = !!(n || i),
        d = (0, s.BY)(null == t ? void 0 : t.src, u),
        f = (0, s.pJ)(t, n, i);
    return null != t && c && null != d
        ? (0, r.jsx)('div', {
              className: l.container,
              children: (0, r.jsx)('div', {
                  className: o()(l.nameplateContainer, { [l.border]: null != f.borderColor }),
                  style: {
                      borderColor: f.borderColor,
                      background: f.background
                  },
                  children: (0, r.jsx)('img', {
                      className: o()(l.img, {
                          [l.hover]: n,
                          [l.selected]: i
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
