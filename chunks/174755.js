l.d(t, { A: () => h });
var r = l(627968),
    a = l(64700),
    s = l(503698),
    n = l.n(s),
    i = l(607470),
    o = l(17928),
    c = l(775602),
    u = l(531685),
    d = l(253292),
    m = l(351952),
    A = l(88686),
    p = l(381588);
function h(e) {
    let t,
        l,
        { nameplate: s, hovered: i, selected: d, content: h, placement: g } = e,
        f = (0, m._)(h, s, i, d, g),
        v =
            ((t = (0, o.bG)([u.A], () => u.A.isFocused())),
            (l = (0, o.bG)([c.A], () => c.A.useReducedMotion)),
            !!t && !l && ((i || d) ?? !1)),
        E = a.useRef(null == s);
    return (a.useEffect(() => {
        E.current || null != s || (E.current = !0);
    }, [s]),
    null == s)
        ? null
        : (0, r.jsx)("div", {
              className: n()(p.kL, { [p.qG]: E.current, [p.WB]: g === A.u.ACCOUNT }),
              style: { background: f.background },
              "aria-hidden": !0,
              children: (0, r.jsx)(_, {
                  nameplate: s,
                  className: n()(p._8, {
                      [p.PT]: i,
                      [p.wH]: d,
                      [p.ct]: g === A.u.ACCOUNT,
                      [p.VH]: g === A.u.PREVIEW,
                      [p.Hh]: g === A.u.MINI_PREVIEW,
                      [p.Ix]: g === A.u.CHANNEL,
                  }),
                  style: { maskImage: f.maskImage },
                  animate: v,
                  loop: !0 === v && !0 === i,
              }),
          });
}
function _(e) {
    let { nameplate: t, className: l, style: a, animate: s, loop: n } = e,
        { staticImageUrl: i, animatedImageUrl: o, videoUrl: c } = (0, d.K)(t);
    if (null == i) return null;
    if (null != c)
        return (0, r.jsx)(g, { animatedAsset: c, staticAsset: i, animate: s, loop: n, style: a, className: l });
    let u = s && null != o ? o : i;
    return (0, r.jsx)(f, { asset: u, className: l, style: a });
}
function g(e) {
    let { staticAsset: t, animatedAsset: l, animate: s, loop: n, className: o, style: c } = e,
        u = a.useRef(null);
    return (
        a.useEffect(() => {
            null != u.current && (s || n ? u.current.play() : u.current.pause());
        }, [s, n]),
        (0, r.jsx)("div", {
            className: p.j,
            style: c,
            children: (0, r.jsx)(i.A, {
                src: l,
                poster: t,
                ref: u,
                playsInline: !0,
                loop: n,
                controls: !1,
                className: o,
                tabIndex: -1,
            }),
        })
    );
}
function f(e) {
    let { asset: t, className: l, style: a } = e;
    return (0, r.jsx)("img", { src: t, className: l, style: a, alt: "" });
}
