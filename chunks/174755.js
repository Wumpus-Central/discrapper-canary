l.d(t, { A: () => f });
var a = l(477900),
    n = l(582128),
    r = l(503698),
    s = l.n(r),
    u = l(607470),
    o = l(17928),
    c = l(775602),
    i = l(531685),
    m = l(253292),
    d = l(351952),
    g = l(88686),
    I = l(150284);
function f(e) {
    let t,
        l,
        { nameplate: r, hovered: u, selected: m, content: f, placement: h } = e,
        p = (0, d._)(f, r, u, m, h),
        A =
            ((t = (0, o.bG)([i.A], () => i.A.isFocused())),
            (l = (0, o.bG)([c.Ay], () => c.Ay.useReducedMotion)),
            !!t && !l && ((u || m) ?? !1)),
        k = n.useRef(null == r);
    return (n.useEffect(() => {
        k.current || null != r || (k.current = !0);
    }, [r]),
    null == r)
        ? null
        : (0, a.jsx)("div", {
              className: s()(I.kL, { [I.qG]: k.current, [I.WB]: h === g.u.ACCOUNT }),
              style: { background: p.background },
              "aria-hidden": !0,
              children: (0, a.jsx)(C, {
                  nameplate: r,
                  className: s()(I._8, {
                      [I.PT]: u,
                      [I.wH]: m,
                      [I.ct]: h === g.u.ACCOUNT,
                      [I.VH]: h === g.u.PREVIEW,
                      [I.Hh]: h === g.u.MINI_PREVIEW,
                      [I.Ix]: h === g.u.CHANNEL,
                  }),
                  style: { maskImage: p.maskImage },
                  animate: A,
                  loop: !0 === A && !0 === u,
              }),
          });
}
function C(e) {
    let { nameplate: t, className: l, style: n, animate: r, loop: s } = e,
        { staticImageUrl: u, animatedImageUrl: o, videoUrl: c } = (0, m.K)(t);
    if (null == u) return null;
    if (null != c)
        return (0, a.jsx)(h, { animatedAsset: c, staticAsset: u, animate: r, loop: s, style: n, className: l });
    let i = r && null != o ? o : u;
    return (0, a.jsx)(p, { asset: i, className: l, style: n });
}
function h(e) {
    let { staticAsset: t, animatedAsset: l, animate: r, loop: s, className: o, style: c } = e,
        i = n.useRef(null);
    return (
        n.useEffect(() => {
            null != i.current && (r || s ? i.current.play() : i.current.pause());
        }, [r, s]),
        (0, a.jsx)("div", {
            className: I.j,
            style: c,
            children: (0, a.jsx)(u.A, {
                src: l,
                poster: t,
                ref: i,
                playsInline: !0,
                loop: s,
                controls: !1,
                className: o,
                tabIndex: -1,
            }),
        })
    );
}
function p(e) {
    let { asset: t, className: l, style: n } = e;
    return (0, a.jsx)("img", { src: t, className: l, style: n, alt: "" });
}
