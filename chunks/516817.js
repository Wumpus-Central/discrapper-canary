n.d(t, { Z: () => _ }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(70097),
    l = n(904588),
    c = n(881474),
    u = n(168352),
    d = n(379839),
    f = n(873841);
function _(e) {
    let { nameplate: t, hovered: n, selected: o, content: s, isSpeaking: u, account: _ } = e,
        h = (0, d.p)(t, n, o, s, _),
        m = (0, l.i)(u, 2000),
        g = (0, c.C)(n, o, m),
        [E, v] = (0, i.useState)(t),
        [b, y] = (0, i.useState)(!1);
    if (
        ((0, i.useEffect)(() => {
            if (null == E || null != t || b) null != t && (v(t), y(!1));
            else {
                y(!0);
                let e = setTimeout(() => {
                    y(!1), v(null);
                }, 400);
                return () => clearTimeout(e);
            }
        }, [t, E, b]),
        null == t)
    )
        return null;
    let O = null != t ? t : E;
    return null == O
        ? null
        : (0, r.jsx)('div', {
              className: a()(f.container, {
                  [f.containerExit]: b,
                  [f.accountContainer]: _
              }),
              style: { background: h.background },
              children: (0, r.jsx)(p, {
                  nameplate: O,
                  className: a()(f.img, {
                      [f.hover]: n,
                      [f.selected]: o,
                      [f.account]: _
                  }),
                  style: h,
                  animate: g,
                  loop: !!(n || u)
              })
          });
}
function p(e) {
    let { nameplate: t, className: n, style: o, animate: a, loop: l } = e,
        c = (0, i.useRef)(null);
    i.useEffect(() => {
        null != c.current && (a ? c.current.play() : c.current.pause());
    }, [a]);
    let d = (0, u._)(t, a);
    return (null == d ? void 0 : d.endsWith('.png')) || t.preview
        ? (0, r.jsx)('img', {
              src: d,
              className: n,
              style: o,
              alt: t.imgAlt
          })
        : (0, r.jsx)(s.Z, {
              src: d,
              ref: c,
              playsInline: !0,
              loop: l,
              controls: !1,
              className: n,
              style: o
          });
}
