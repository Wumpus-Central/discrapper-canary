n.d(t, { Z: () => h }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(70097),
    c = n(19780),
    u = n(881474),
    d = n(168352),
    f = n(379839),
    _ = n(359135),
    p = n(873841);
function h(e) {
    let { nameplate: t, hovered: n, selected: o, content: l, placement: d } = e,
        h = (0, f.p)(l, t, n, o, d),
        g = (0, u.C)(n, o),
        E = (0, s.e7)([c.Z], () => c.Z.getChannelId()),
        [b, v] = i.useState(t),
        [y, O] = i.useState(!0),
        I = null != t;
    i.useLayoutEffect(
        () => () => {
            O(!1);
        },
        [I]
    ),
        i.useEffect(() => {
            null != t && v(t);
        }, [t]);
    let S = null != t ? t : b;
    return null == S
        ? null
        : (0, r.jsx)('div', {
              onAnimationEnd: () => {
                  I || v(null);
              },
              className: a()(p.container, {
                  [p.rtcOpened]: d === _.i.ACCOUNT && null != E,
                  [p.fadeOut]: !y && !I,
                  [p.noFade]: y,
                  [p.fadeIn]: !y && I
              }),
              style: { background: h.background },
              children: (0, r.jsx)(m, {
                  nameplate: S,
                  className: a()(p.img, {
                      [p.hover]: n,
                      [p.selected]: o,
                      [p.account]: d === _.i.ACCOUNT,
                      [p.preview]: d === _.i.PREVIEW
                  }),
                  style: { maskImage: h.maskImage },
                  animate: g,
                  loop: !0 === g && !0 === n
              })
          });
}
function m(e) {
    let { nameplate: t, className: n, style: o, animate: a, loop: s } = e,
        c = i.useRef(null);
    i.useEffect(() => {
        null != c.current && (a || s ? c.current.play() : c.current.pause());
    }, [a, s]);
    let { defaultAsset: u, webmAsset: f, staticAsset: _ } = (0, d._)(t, a);
    return (null == u ? void 0 : u.endsWith('.png')) || t.preview
        ? (0, r.jsx)('img', {
              src: u,
              className: n,
              style: o,
              alt: t.imgAlt
          })
        : (0, r.jsx)('div', {
              className: p.videoContainer,
              style: o,
              children: (0, r.jsx)(l.Z, {
                  src: f,
                  poster: _,
                  ref: c,
                  playsInline: !0,
                  loop: s,
                  controls: !1,
                  className: n
              })
          });
}
