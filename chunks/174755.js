l.d(t, { A: () => C });
var a = l(627968),
    s = l(64700),
    r = l(503698),
    n = l.n(r),
    u = l(607470),
    o = l(17928),
    c = l(775602),
    i = l(531685),
    m = l(253292),
    d = l(351952),
    g = l(88686),
    I = l(381588);
function C(e) {
    let t,
        l,
        { nameplate: r, hovered: u, selected: m, content: C, placement: f } = e,
        p = (0, d._)(C, r, u, m, f),
        A =
            ((t = (0, o.bG)([i.A], () => i.A.isFocused())),
            (l = (0, o.bG)([c.Ay], () => c.Ay.useReducedMotion)),
            !!t && !l && ((u || m) ?? !1)),
        k = s.useRef(null == r);
    return (s.useEffect(() => {
        k.current || null != r || (k.current = !0);
    }, [r]),
    null == r)
        ? null
        : (0, a.jsx)("div", {
              className: n()(I.kL, { [I.qG]: k.current, [I.WB]: f === g.u.ACCOUNT }),
              style: { background: p.background },
              "aria-hidden": !0,
              children: (0, a.jsx)(h, {
                  nameplate: r,
                  className: n()(I._8, {
                      [I.PT]: u,
                      [I.wH]: m,
                      [I.ct]: f === g.u.ACCOUNT,
                      [I.VH]: f === g.u.PREVIEW,
                      [I.Hh]: f === g.u.MINI_PREVIEW,
                      [I.Ix]: f === g.u.CHANNEL,
                  }),
                  style: { maskImage: p.maskImage },
                  animate: A,
                  loop: !0 === A && !0 === u,
              }),
          });
}
function h(e) {
    let { nameplate: t, className: l, style: s, animate: r, loop: n } = e,
        { staticImageUrl: u, animatedImageUrl: o, videoUrl: c } = (0, m.K)(t);
    if (null == u) return null;
    if (null != c)
        return (0, a.jsx)(f, { animatedAsset: c, staticAsset: u, animate: r, loop: n, style: s, className: l });
    let i = r && null != o ? o : u;
    return (0, a.jsx)(p, { asset: i, className: l, style: s });
}
function f(e) {
    let { staticAsset: t, animatedAsset: l, animate: r, loop: n, className: o, style: c } = e,
        i = s.useRef(null);
    return (
        s.useEffect(() => {
            null != i.current && (r || n ? i.current.play() : i.current.pause());
        }, [r, n]),
        (0, a.jsx)("div", {
            className: I.j,
            style: c,
            children: (0, a.jsx)(u.A, {
                src: l,
                poster: t,
                ref: i,
                playsInline: !0,
                loop: n,
                controls: !1,
                className: o,
                tabIndex: -1,
            }),
        })
    );
}
function p(e) {
    let { asset: t, className: l, style: s } = e;
    return (0, a.jsx)("img", { src: t, className: l, style: s, alt: "" });
}
