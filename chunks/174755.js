s.d(t, { A: () => h });
var l = s(627968),
    a = s(64700),
    r = s(503698),
    n = s.n(r),
    o = s(607470),
    u = s(17928),
    c = s(775602),
    i = s(531685),
    m = s(253292),
    d = s(351952),
    C = s(88686),
    I = s(381588);
function h(e) {
    let t,
        s,
        { nameplate: r, hovered: o, selected: m, content: h, placement: A } = e,
        p = (0, d._)(h, r, o, m, A),
        f =
            ((t = (0, u.bG)([i.A], () => i.A.isFocused())),
            (s = (0, u.bG)([c.A], () => c.A.useReducedMotion)),
            !!t && !s && ((o || m) ?? !1)),
        k = a.useRef(null == r);
    return (a.useEffect(() => {
        k.current || null != r || (k.current = !0);
    }, [r]),
    null == r)
        ? null
        : (0, l.jsx)("div", {
              className: n()(I.kL, { [I.qG]: k.current, [I.WB]: A === C.u.ACCOUNT }),
              style: { background: p.background },
              "aria-hidden": !0,
              children: (0, l.jsx)(g, {
                  nameplate: r,
                  className: n()(I._8, {
                      [I.PT]: o,
                      [I.wH]: m,
                      [I.ct]: A === C.u.ACCOUNT,
                      [I.VH]: A === C.u.PREVIEW,
                      [I.Hh]: A === C.u.MINI_PREVIEW,
                      [I.Ix]: A === C.u.CHANNEL,
                  }),
                  style: { maskImage: p.maskImage },
                  animate: f,
                  loop: !0 === f && !0 === o,
              }),
          });
}
function g(e) {
    let { nameplate: t, className: s, style: a, animate: r, loop: n } = e,
        { staticImageUrl: o, animatedImageUrl: u, videoUrl: c } = (0, m.K)(t);
    if (null == o) return null;
    if (null != c)
        return (0, l.jsx)(A, { animatedAsset: c, staticAsset: o, animate: r, loop: n, style: a, className: s });
    let i = r && null != u ? u : o;
    return (0, l.jsx)(p, { asset: i, className: s, style: a });
}
function A(e) {
    let { staticAsset: t, animatedAsset: s, animate: r, loop: n, className: u, style: c } = e,
        i = a.useRef(null);
    return (
        a.useEffect(() => {
            null != i.current && (r || n ? i.current.play() : i.current.pause());
        }, [r, n]),
        (0, l.jsx)("div", {
            className: I.j,
            style: c,
            children: (0, l.jsx)(o.A, {
                src: s,
                poster: t,
                ref: i,
                playsInline: !0,
                loop: n,
                controls: !1,
                className: u,
                tabIndex: -1,
            }),
        })
    );
}
function p(e) {
    let { asset: t, className: s, style: a } = e;
    return (0, l.jsx)("img", { src: t, className: s, style: a, alt: "" });
}
