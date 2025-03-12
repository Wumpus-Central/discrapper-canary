n.d(t, { Z: () => p }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(70097),
    l = n(904588),
    c = n(881474),
    u = n(168352),
    d = n(379839),
    f = n(359135),
    _ = n(873841);
function p(e) {
    let { nameplate: t, hovered: n, selected: o, content: s, isSpeaking: u, placement: p } = e,
        m = (0, d.p)(t, n, o, s, p),
        g = (0, l.i)(u, 2000),
        E = (0, c.C)(n, o, g),
        [v, b] = (0, i.useState)(t),
        [y, O] = (0, i.useState)(!1),
        [I, S] = (0, i.useState)(!1);
    if (
        ((0, i.useEffect)(() => {
            if (null == v || null != t || y) null != t && (b(t), O(!1));
            else {
                O(!0);
                let e = setTimeout(() => {
                    O(!1), b(null);
                }, 400);
                return () => clearTimeout(e);
            }
        }, [t, v, y]),
        null == t)
    )
        return null;
    let T = null != t ? t : v;
    return null == T
        ? null
        : (0, r.jsx)('div', {
              className: a()(_.container, {
                  [_.containerExit]: y,
                  [_.accountContainer]: p === f.i.ACCOUNT,
                  [_.fadeIn]: I && !y
              }),
              style: I ? { background: m.background } : void 0,
              children: (0, r.jsx)(h, {
                  nameplate: T,
                  className: a()(_.img, {
                      [_.hover]: n,
                      [_.selected]: o,
                      [_.account]: p === f.i.ACCOUNT
                  }),
                  style: m,
                  animate: E,
                  loop: !!(n || u),
                  onLoad: () => S(!0)
              })
          });
}
function h(e) {
    let { nameplate: t, className: n, style: o, animate: a, loop: l, onLoad: c } = e,
        d = (0, i.useRef)(null);
    i.useEffect(() => {
        null != d.current && (a || l ? d.current.play() : d.current.pause());
    }, [a, l]);
    let f = (0, u._)(t, a);
    return (null == f ? void 0 : f.endsWith('.png')) || t.preview
        ? (0, r.jsx)('img', {
              src: f,
              className: n,
              style: o,
              alt: t.imgAlt,
              onLoad: c
          })
        : (0, r.jsx)(s.Z, {
              onLoadedData: c,
              src: f,
              ref: d,
              playsInline: !0,
              loop: l,
              controls: !1,
              className: n,
              style: o
          });
}
