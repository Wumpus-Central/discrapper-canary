n.d(t, { Z: () => h }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(70097),
    c = n(19780),
    u = n(829030),
    d = n(168352),
    f = n(379839),
    _ = n(359135),
    p = n(873841);
function h(e) {
    let { nameplate: t, hovered: n, selected: o, content: l, placement: d } = e,
        h = (0, f.p)(t, n, o, l, d),
        g = (0, u.C)(n, o),
        E = (0, s.e7)([c.Z], () => c.Z.getChannelId()),
        [b, v] = (0, i.useState)(t),
        [y, O] = (0, i.useState)(!1),
        [I, S] = (0, i.useState)(!1),
        { fadeIn: T, noFade: A } = (0, u.X)(l, I, d);
    (0, i.useEffect)(() => {
        null == b || null != t || y ? null != t && (v(t), O(!1)) : O(!0);
    }, [t, b, y]);
    let N = (0, i.useCallback)(() => {
            y && (v(null), S(!1), O(!1));
        }, [y]),
        C = null != t ? t : b;
    return null == C
        ? null
        : (0, r.jsx)('div', {
              onAnimationEnd: N,
              className: a()(p.container, {
                  [p.rtcOpened]: d === _.i.ACCOUNT && null != E,
                  [p.fadeOut]: y,
                  [p.fadeIn]: T,
                  [p.noFade]: A
              }),
              style: I ? { background: h.background } : void 0,
              children: (0, r.jsx)(m, {
                  nameplate: C,
                  className: a()(p.img, {
                      [p.hover]: n,
                      [p.selected]: o,
                      [p.account]: d === _.i.ACCOUNT,
                      [p.preview]: d === _.i.PREVIEW
                  }),
                  style: { maskImage: h.maskImage },
                  animate: g,
                  loop: !0 === g && !0 === n,
                  onLoad: () => S(!0)
              })
          });
}
function m(e) {
    let { nameplate: t, className: n, style: o, animate: a, loop: s, onLoad: c } = e,
        u = (0, i.useRef)(null);
    i.useEffect(() => {
        null != u.current && (a || s ? u.current.play() : u.current.pause());
    }, [a, s]);
    let f = (0, d._)(t, a);
    return (null == f ? void 0 : f.endsWith('.png')) || t.preview
        ? (0, r.jsx)('img', {
              src: f,
              className: n,
              style: o,
              alt: t.imgAlt,
              onLoad: c
          })
        : (0, r.jsx)('div', {
              className: p.videoContainer,
              style: o,
              children: (0, r.jsx)(l.Z, {
                  onLoadedData: c,
                  src: f,
                  ref: u,
                  playsInline: !0,
                  loop: s,
                  controls: !1,
                  className: n
              })
          });
}
