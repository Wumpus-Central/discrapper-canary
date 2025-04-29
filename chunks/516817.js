n.d(t, { Z: () => _ });
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(70097),
    l = n(881474),
    c = n(168352),
    u = n(379839),
    d = n(359135),
    f = n(187182);
function _(e) {
    let { nameplate: t, hovered: n, selected: o, content: s, placement: c } = e,
        _ = (0, u.p)(s, t, n, o, c, !0),
        h = (0, l.C)(n, o),
        m = i.useRef(null == t);
    return (i.useEffect(() => {
        m.current || null != t || (m.current = !0);
    }, [t]),
    null == t)
        ? null
        : (0, r.jsx)('div', {
              className: a()(f.container, { [f.fadeIn]: m.current }),
              style: { background: _.background },
              children: (0, r.jsx)(p, {
                  nameplate: t,
                  className: a()(f.img, {
                      [f.hover]: n,
                      [f.selected]: o,
                      [f.account]: c === d.i.ACCOUNT,
                      [f.preview]: c === d.i.PREVIEW,
                      [f.channel]: c === d.i.CHANNEL
                  }),
                  style: { maskImage: _.maskImage },
                  animate: h,
                  loop: !0 === h && !0 === n
              })
          });
}
function p(e) {
    let { nameplate: t, className: n, style: i, animate: o, loop: a } = e,
        { staticAsset: s, animatedAsset: l } = (0, c._)(t),
        u = null == l ? void 0 : l.endsWith('.png');
    return null == s || null == l
        ? null
        : u
          ? (0, r.jsx)(m, {
                nameplate: t,
                asset: o ? l : s,
                className: n,
                style: i
            })
          : (0, r.jsx)(h, {
                animatedAsset: l,
                staticAsset: s,
                animate: o,
                loop: a,
                style: i,
                className: n
            });
}
function h(e) {
    let { staticAsset: t, animatedAsset: n, animate: o, loop: a, className: l, style: c } = e,
        u = i.useRef(null);
    return (
        i.useEffect(() => {
            null != u.current && (o || a ? u.current.play() : u.current.pause());
        }, [o, a]),
        (0, r.jsx)('div', {
            className: f.videoContainer,
            style: c,
            children: (0, r.jsx)(s.Z, {
                src: n,
                poster: t,
                ref: u,
                playsInline: !0,
                loop: a,
                controls: !1,
                className: l
            })
        })
    );
}
function m(e) {
    let { nameplate: t, asset: n, className: i, style: o } = e;
    return (0, r.jsx)('img', {
        src: n,
        className: i,
        style: o,
        alt: t.imgAlt
    });
}
