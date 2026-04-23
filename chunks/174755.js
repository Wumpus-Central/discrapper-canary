"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(607470),
    l = n(17928),
    d = n(775602),
    _ = n(531685),
    u = n(253292),
    c = n(351952),
    E = n(88686),
    h = n(381588);
function m(e) {
    let t,
        n,
        { nameplate: s, hovered: o, selected: u, content: m, placement: g } = e,
        p = (0, c._)(m, s, o, u, g),
        A =
            ((t = (0, l.bG)([_.A], () => _.A.isFocused())),
            (n = (0, l.bG)([d.A], () => d.A.useReducedMotion)),
            !!t && !n && ((o || u) ?? !1)),
        I = r.useRef(null == s);
    return (r.useEffect(() => {
        I.current || null != s || (I.current = !0);
    }, [s]),
    null == s)
        ? null
        : (0, i.jsx)("div", {
              className: a()(h.kL, { [h.qG]: I.current, [h.WB]: g === E.u.ACCOUNT }),
              style: { background: p.background },
              "aria-hidden": !0,
              children: (0, i.jsx)(f, {
                  nameplate: s,
                  className: a()(h._8, {
                      [h.PT]: o,
                      [h.wH]: u,
                      [h.ct]: g === E.u.ACCOUNT,
                      [h.VH]: g === E.u.PREVIEW,
                      [h.Hh]: g === E.u.MINI_PREVIEW,
                      [h.Ix]: g === E.u.CHANNEL,
                  }),
                  style: { maskImage: p.maskImage },
                  animate: A,
                  loop: !0 === A && !0 === o,
              }),
          });
}
function f(e) {
    let { nameplate: t, className: n, style: r, animate: s, loop: a } = e,
        { staticImageUrl: o, animatedImageUrl: l, videoUrl: d } = (0, u.K)(t);
    if (null == o) return null;
    if (null != d)
        return (0, i.jsx)(g, { animatedAsset: d, staticAsset: o, animate: s, loop: a, style: r, className: n });
    let _ = s && null != l ? l : o;
    return (0, i.jsx)(p, { asset: _, className: n, style: r });
}
function g(e) {
    let { staticAsset: t, animatedAsset: n, animate: s, loop: a, className: l, style: d } = e,
        _ = r.useRef(null);
    return (
        r.useEffect(() => {
            null != _.current && (s || a ? _.current.play() : _.current.pause());
        }, [s, a]),
        (0, i.jsx)("div", {
            className: h.j,
            style: d,
            children: (0, i.jsx)(o.A, {
                src: n,
                poster: t,
                ref: _,
                playsInline: !0,
                loop: a,
                controls: !1,
                className: l,
                tabIndex: -1,
            }),
        })
    );
}
function p(e) {
    let { asset: t, className: n, style: r } = e;
    return (0, i.jsx)("img", { src: t, className: n, style: r, alt: "" });
}
