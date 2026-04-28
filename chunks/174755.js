"use strict";
n.d(t, { A: () => f });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(607470),
    o = n(17928),
    c = n(775602),
    u = n(531685),
    d = n(253292),
    h = n(351952),
    m = n(88686),
    p = n(381588);
function f(e) {
    let t,
        n,
        { nameplate: s, hovered: r, selected: d, content: f, placement: _ } = e,
        x = (0, h._)(f, s, r, d, _),
        C =
            ((t = (0, o.bG)([u.A], () => u.A.isFocused())),
            (n = (0, o.bG)([c.A], () => c.A.useReducedMotion)),
            !!t && !n && ((r || d) ?? !1)),
        A = i.useRef(null == s);
    return (i.useEffect(() => {
        A.current || null != s || (A.current = !0);
    }, [s]),
    null == s)
        ? null
        : (0, l.jsx)("div", {
              className: a()(p.kL, { [p.qG]: A.current, [p.WB]: _ === m.u.ACCOUNT }),
              style: { background: x.background },
              "aria-hidden": !0,
              children: (0, l.jsx)(g, {
                  nameplate: s,
                  className: a()(p._8, {
                      [p.PT]: r,
                      [p.wH]: d,
                      [p.ct]: _ === m.u.ACCOUNT,
                      [p.VH]: _ === m.u.PREVIEW,
                      [p.Hh]: _ === m.u.MINI_PREVIEW,
                      [p.Ix]: _ === m.u.CHANNEL,
                  }),
                  style: { maskImage: x.maskImage },
                  animate: C,
                  loop: !0 === C && !0 === r,
              }),
          });
}
function g(e) {
    let { nameplate: t, className: n, style: i, animate: s, loop: a } = e,
        { staticImageUrl: r, animatedImageUrl: o, videoUrl: c } = (0, d.K)(t);
    if (null == r) return null;
    if (null != c)
        return (0, l.jsx)(_, { animatedAsset: c, staticAsset: r, animate: s, loop: a, style: i, className: n });
    let u = s && null != o ? o : r;
    return (0, l.jsx)(x, { asset: u, className: n, style: i });
}
function _(e) {
    let { staticAsset: t, animatedAsset: n, animate: s, loop: a, className: o, style: c } = e,
        u = i.useRef(null);
    return (
        i.useEffect(() => {
            null != u.current && (s || a ? u.current.play() : u.current.pause());
        }, [s, a]),
        (0, l.jsx)("div", {
            className: p.j,
            style: c,
            children: (0, l.jsx)(r.A, {
                src: n,
                poster: t,
                ref: u,
                playsInline: !0,
                loop: a,
                controls: !1,
                className: o,
                tabIndex: -1,
            }),
        })
    );
}
function x(e) {
    let { asset: t, className: n, style: i } = e;
    return (0, l.jsx)("img", { src: t, className: n, style: i, alt: "" });
}
