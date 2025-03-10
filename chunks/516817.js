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
        [h, m] = (0, i.useState)(!1),
        [g, E] = (0, i.useState)(t),
        [v, b] = (0, i.useState)(!1),
        y = (0, i.useCallback)(() => m(!0), []);
    if (
        ((0, i.useEffect)(() => {
            if (null == g || null != t || v) null != t && (E(t), b(!1));
            else {
                b(!0);
                let e = setTimeout(() => {
                    b(!1), E(null);
                }, 400);
                return () => clearTimeout(e);
            }
        }, [t, g, v]),
        (null == t && !v) || h)
    )
        return null;
    let O = null != t ? t : g;
    return null == O
        ? null
        : (0, r.jsx)('div', {
              className: a()(d.container, { [d.containerExit]: v }),
              style: { background: f.background },
              children: (0, r.jsx)(_, {
                  nameplate: O,
                  className: a()(d.img, {
                      [d.hover]: n,
                      [d.selected]: o,
                      [d.reverse]: s
                  }),
                  style: f,
                  animate: p,
                  setVideoErrored: y
              })
          });
}
function _(e) {
    let { nameplate: t, className: n, style: o, animate: a, setVideoErrored: l } = e,
        u = (0, i.useRef)(null);
    i.useEffect(() => {
        null != u.current && (a ? u.current.play().catch(() => l(!0)) : u.current.pause());
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
              onError: () => l(!0),
              src: d,
              ref: u,
              playsInline: !0,
              controls: !1,
              className: n,
              style: o
          });
}
