n.d(t, { Z: () => f }), n(47120);
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
    let { nameplate: t, hovered: n, selected: o, content: s, isSpeaking: c, account: f } = e,
        p = (0, u.p)(t, n, o, s, f),
        h = (0, l.C)(n, o, c),
        [m, g] = (0, i.useState)(t),
        [E, v] = (0, i.useState)(!1);
    if (
        ((0, i.useEffect)(() => {
            if (null == m || null != t || E) null != t && (g(t), v(!1));
            else {
                v(!0);
                let e = setTimeout(() => {
                    v(!1), g(null);
                }, 400);
                return () => clearTimeout(e);
            }
        }, [t, m, E]),
        null == t)
    )
        return null;
    let b = null != t ? t : m;
    return null == b
        ? null
        : (0, r.jsx)('div', {
              className: a()(d.container, {
                  [d.containerExit]: E,
                  [d.accountContainer]: f
              }),
              style: { background: p.background },
              children: (0, r.jsx)(_, {
                  nameplate: b,
                  className: a()(d.img, {
                      [d.hover]: n,
                      [d.selected]: o,
                      [d.account]: f
                  }),
                  style: p,
                  animate: h,
                  hover: null != n && n,
                  isSpeaking: null != c && c
              })
          });
}
function _(e) {
    let { nameplate: t, className: n, style: o, animate: a, hover: l, isSpeaking: u } = e,
        d = (0, i.useRef)(null);
    i.useEffect(() => {
        null != d.current && (a || l || u ? d.current.play() : d.current.pause());
    }, [a, l, u]);
    let f = (0, c._)(t, a);
    return (null == f ? void 0 : f.endsWith('.png')) || t.preview
        ? (0, r.jsx)('img', {
              src: f,
              className: n,
              style: o,
              alt: t.imgAlt
          })
        : (0, r.jsx)(s.Z, {
              src: f,
              ref: d,
              playsInline: !0,
              loop: l || u,
              controls: !1,
              className: n,
              style: o
          });
}
