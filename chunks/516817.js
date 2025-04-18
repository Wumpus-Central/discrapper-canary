n.d(t, { Z: () => m }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(70097),
    l = n(598062),
    c = n(881474),
    u = n(168352),
    d = n(379839),
    f = n(359135),
    _ = n(187182);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e) {
    return (0, l.PW)('Nameplate') ? (0, r.jsx)(g, h({}, e)) : (0, r.jsx)(E, h({}, e));
}
function g(e) {
    let { nameplate: t, hovered: n, selected: a, content: s, placement: l } = e,
        u = (0, d.p)(s, t, n, a, l, !0),
        p = (0, c.C)(n, a),
        h = i.useRef(null == t);
    return (i.useEffect(() => {
        h.current || null != t || (h.current = !0);
    }, [t]),
    null == t)
        ? null
        : (0, r.jsx)('div', {
              className: o()(_.container, { [_.fadeIn]: h.current }),
              style: { background: u.background },
              children: (0, r.jsx)(b, {
                  nameplate: t,
                  className: o()(_.img, _.updated, {
                      [_.hover]: n,
                      [_.selected]: a,
                      [_.account]: l === f.i.ACCOUNT,
                      [_.preview]: l === f.i.PREVIEW,
                      [_.channel]: l === f.i.CHANNEL
                  }),
                  style: { maskImage: u.maskImage },
                  animate: p,
                  loop: !0 === p && !0 === n
              })
          });
}
function E(e) {
    let { nameplate: t, hovered: n, selected: a, content: s, placement: l } = e,
        u = (0, d.p)(s, t, n, a, l),
        p = (0, c.C)(n, a),
        [h, m] = i.useState(t),
        [g, E] = i.useState(!0),
        y = null != t;
    i.useLayoutEffect(
        () => () => {
            E(!1);
        },
        [y]
    ),
        i.useEffect(() => {
            null != t && m(t);
        }, [t]);
    let v = null != t ? t : h;
    return null == v
        ? null
        : (0, r.jsx)('div', {
              onAnimationEnd: () => {
                  y || m(null);
              },
              className: o()(_.container, {
                  [_.fadeOut]: !g && !y,
                  [_.fadeIn]: !g && y
              }),
              style: { background: u.background },
              children: (0, r.jsx)(b, {
                  nameplate: v,
                  className: o()(_.img, {
                      [_.hover]: n,
                      [_.selected]: a,
                      [_.account]: l === f.i.ACCOUNT,
                      [_.preview]: l === f.i.PREVIEW
                  }),
                  style: { maskImage: u.maskImage },
                  animate: p,
                  loop: !0 === p && !0 === n
              })
          });
}
function b(e) {
    let { nameplate: t, className: n, style: i, animate: a, loop: o } = e,
        { staticAsset: s, animatedAsset: l } = (0, u._)(t),
        c = null == l ? void 0 : l.endsWith('.png');
    return null == s || null == l
        ? null
        : c
          ? (0, r.jsx)(v, {
                nameplate: t,
                asset: a ? l : s,
                className: n,
                style: i
            })
          : (0, r.jsx)(y, {
                animatedAsset: l,
                staticAsset: s,
                animate: a,
                loop: o,
                style: i,
                className: n
            });
}
function y(e) {
    let { staticAsset: t, animatedAsset: n, animate: a, loop: o, className: l, style: c } = e,
        u = i.useRef(null);
    return (
        i.useEffect(() => {
            null != u.current && (a || o ? u.current.play() : u.current.pause());
        }, [a, o]),
        (0, r.jsx)('div', {
            className: _.videoContainer,
            style: c,
            children: (0, r.jsx)(s.Z, {
                src: n,
                poster: t,
                ref: u,
                playsInline: !0,
                loop: o,
                controls: !1,
                className: l
            })
        })
    );
}
function v(e) {
    let { nameplate: t, asset: n, className: i, style: a } = e;
    return (0, r.jsx)('img', {
        src: n,
        className: i,
        style: a,
        alt: t.imgAlt
    });
}
