n.d(t, { Z: () => f }), n(978209), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(70097),
    l = n(881474),
    c = n(168352),
    u = n(379839),
    d = n(873841);
function f(e) {
    let { nameplate: t, hovered: n, selected: o, reverse: s, content: c } = e,
        f = (0, u.p)(t, n, o, c),
        p = (0, l.C)(n, o),
        [h, m] = (0, i.useState)(t),
        [g, E] = (0, i.useState)(!1);
    if (
        ((0, i.useEffect)(() => {
            if (null == h || null != t || g) null != t && (m(t), E(!1));
            else {
                E(!0);
                let e = setTimeout(() => {
                    E(!1), m(null);
                }, 400);
                return () => clearTimeout(e);
            }
        }, [t, h, g]),
        null == t)
    )
        return null;
    let v = null != t ? t : h;
    return null == v
        ? null
        : (0, r.jsx)('div', {
              className: a()(d.container, { [d.containerExit]: g }),
              style: { background: f.background },
              children: (0, r.jsx)(_, {
                  nameplate: v,
                  className: a()(d.img, {
                      [d.hover]: n,
                      [d.selected]: o,
                      [d.reverse]: s
                  }),
                  style: f,
                  animate: p,
                  hover: null != n && n
              })
          });
}
function _(e) {
    let { nameplate: t, className: n, style: o, animate: a, hover: l } = e,
        u = (0, i.useRef)(null);
    i.useEffect(() => {
        null != u.current && (a || l ? u.current.play() : u.current.pause());
    }, [a, l]);
    let d = (0, c._)(t, a);
    return d.endsWith('.png')
        ? (0, r.jsx)('img', {
              src: d,
              className: n,
              style: o,
              alt: t.imgAlt
          })
        : (0, r.jsx)(s.Z, {
              src: d,
              ref: u,
              playsInline: !0,
              loop: l,
              controls: !1,
              className: n,
              style: o
          });
}
