n.d(t, { Z: () => _ }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(70097),
    l = n(881474),
    c = n(168352),
    u = n(379839),
    d = n(359135),
    f = n(873841);
function _(e) {
    let { nameplate: t, hovered: n, selected: o, content: s, placement: c } = e,
        _ = (0, u.p)(t, n, o, s, c),
        h = (0, l.C)(n, o),
        [m, g] = (0, i.useState)(t),
        [E, b] = (0, i.useState)(!1),
        [v, y] = (0, i.useState)(!1);
    if (
        ((0, i.useEffect)(() => {
            if (null == m || null != t || E) null != t && (g(t), b(!1));
            else {
                b(!0);
                let e = setTimeout(() => {
                    b(!1), g(null);
                }, 400);
                return () => clearTimeout(e);
            }
        }, [t, m, E]),
        null == t)
    )
        return null;
    let O = null != t ? t : m;
    return null == O
        ? null
        : (0, r.jsx)('div', {
              className: a()(f.container, {
                  [f.containerExit]: E,
                  [f.accountContainer]: c === d.i.ACCOUNT,
                  [f.fadeIn]: v && !E
              }),
              style: v ? { background: _.background } : void 0,
              children: (0, r.jsx)(p, {
                  nameplate: O,
                  className: a()(f.img, {
                      [f.hover]: n,
                      [f.selected]: o,
                      [f.account]: c === d.i.ACCOUNT,
                      [f.shopPreview]: c === d.i.SHOP_PREVIEW
                  }),
                  style: { maskImage: _.maskImage },
                  animate: h,
                  loop: !0 === h && !0 === n,
                  onLoad: () => y(!0)
              })
          });
}
function p(e) {
    let { nameplate: t, className: n, style: o, animate: a, loop: l, onLoad: u } = e,
        d = (0, i.useRef)(null);
    i.useEffect(() => {
        null != d.current && (a || l ? d.current.play() : d.current.pause());
    }, [a, l]);
    let _ = (0, c._)(t, a);
    return (null == _ ? void 0 : _.endsWith('.png')) || t.preview
        ? (0, r.jsx)('img', {
              src: _,
              className: n,
              style: o,
              alt: t.imgAlt,
              onLoad: u
          })
        : (0, r.jsx)('div', {
              className: f.videoContainer,
              style: o,
              children: (0, r.jsx)(s.Z, {
                  onLoadedData: u,
                  src: _,
                  ref: d,
                  playsInline: !0,
                  loop: l,
                  controls: !1,
                  className: n
              })
          });
}
