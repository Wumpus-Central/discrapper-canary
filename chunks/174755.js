r.d(t, { A: () => m });
var a = r(627968),
    s = r(64700),
    l = r(503698),
    n = r.n(l),
    i = r(607470),
    c = r(17928),
    o = r(775602),
    d = r(531685),
    u = r(253292),
    _ = r(351952),
    A = r(88686),
    f = r(381588);
function m(e) {
    let t,
        r,
        { nameplate: l, hovered: i, selected: u, content: m, placement: E } = e,
        h = (0, _._)(m, l, i, u, E),
        I =
            ((t = (0, c.bG)([d.A], () => d.A.isFocused())),
            (r = (0, c.bG)([o.A], () => o.A.useReducedMotion)),
            !!t && !r && ((i || u) ?? !1)),
        g = s.useRef(null == l);
    return (s.useEffect(() => {
        g.current || null != l || (g.current = !0);
    }, [l]),
    null == l)
        ? null
        : (0, a.jsx)("div", {
              className: n()(f.kL, { [f.qG]: g.current, [f.WB]: E === A.u.ACCOUNT }),
              style: { background: h.background },
              "aria-hidden": !0,
              children: (0, a.jsx)(p, {
                  nameplate: l,
                  className: n()(f._8, {
                      [f.PT]: i,
                      [f.wH]: u,
                      [f.ct]: E === A.u.ACCOUNT,
                      [f.VH]: E === A.u.PREVIEW,
                      [f.Hh]: E === A.u.MINI_PREVIEW,
                      [f.Ix]: E === A.u.CHANNEL,
                  }),
                  style: { maskImage: h.maskImage },
                  animate: I,
                  loop: !0 === I && !0 === i,
              }),
          });
}
function p(e) {
    let { nameplate: t, className: r, style: s, animate: l, loop: n } = e,
        { staticImageUrl: i, animatedImageUrl: c, videoUrl: o } = (0, u.K)(t);
    if (null == i) return null;
    if (null != o)
        return (0, a.jsx)(E, { animatedAsset: o, staticAsset: i, animate: l, loop: n, style: s, className: r });
    let d = l && null != c ? c : i;
    return (0, a.jsx)(h, { asset: d, className: r, style: s });
}
function E(e) {
    let { staticAsset: t, animatedAsset: r, animate: l, loop: n, className: c, style: o } = e,
        d = s.useRef(null);
    return (
        s.useEffect(() => {
            null != d.current && (l || n ? d.current.play() : d.current.pause());
        }, [l, n]),
        (0, a.jsx)("div", {
            className: f.j,
            style: o,
            children: (0, a.jsx)(i.A, {
                src: r,
                poster: t,
                ref: d,
                playsInline: !0,
                loop: n,
                controls: !1,
                className: c,
                tabIndex: -1,
            }),
        })
    );
}
function h(e) {
    let { asset: t, className: r, style: s } = e;
    return (0, a.jsx)("img", { src: t, className: r, style: s, alt: "" });
}
