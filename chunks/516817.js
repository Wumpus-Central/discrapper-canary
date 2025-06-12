n.d(t, { Z: () => f });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(70097),
    l = n(881474),
    c = n(168352),
    u = n(379839),
    d = n(359135),
    _ = n(187182);
function f(e) {
    let { nameplate: t, hovered: n, selected: a, content: s, placement: c } = e,
        f = (0, u.p)(s, t, n, a, c),
        h = (0, l.C)(n, a),
        m = i.useRef(null == t);
    return (i.useEffect(() => {
        m.current || null != t || (m.current = !0);
    }, [t]),
    null == t)
        ? null
        : (0, r.jsx)('div', {
              className: o()(_.container, { [_.fadeIn]: m.current }),
              style: { background: f.background },
              children: (0, r.jsx)(p, {
                  nameplate: t,
                  className: o()(_.img, {
                      [_.hover]: n,
                      [_.selected]: a,
                      [_.account]: c === d.i.ACCOUNT,
                      [_.preview]: c === d.i.PREVIEW,
                      [_.mini_preview]: c === d.i.MINI_PREVIEW,
                      [_.channel]: c === d.i.CHANNEL
                  }),
                  style: { maskImage: f.maskImage },
                  animate: h,
                  loop: !0 === h && !0 === n
              })
          });
}
function p(e) {
    let { nameplate: t, className: n, style: i, animate: a, loop: o } = e,
        { staticAsset: s, animatedAsset: l } = (0, c._)(t),
        u = !(null == l ? void 0 : l.endsWith('.webm'));
    return null == s || null == l
        ? null
        : u
          ? (0, r.jsx)(m, {
                nameplate: t,
                asset: a ? l : s,
                className: n,
                style: i
            })
          : (0, r.jsx)(h, {
                animatedAsset: l,
                staticAsset: s,
                animate: a,
                loop: o,
                style: i,
                className: n
            });
}
function h(e) {
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
                className: l,
                tabIndex: -1
            })
        })
    );
}
function m(e) {
    let { nameplate: t, asset: n, className: i, style: a } = e;
    return (0, r.jsx)('img', {
        src: n,
        className: i,
        style: a,
        alt: t.imgAlt
    });
}
