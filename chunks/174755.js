"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(607470),
    l = n(17928),
    u = n(775602),
    c = n(531685),
    d = n(253292),
    _ = n(351952),
    f = n(88686),
    h = n(381588);
function p(e) {
    let t,
        n,
        { nameplate: s, hovered: o, selected: d, content: p, placement: m } = e,
        g = (0, _._)(p, s, o, d, m),
        A =
            ((t = (0, l.bG)([c.A], () => c.A.isFocused())),
            (n = (0, l.bG)([u.A], () => u.A.useReducedMotion)),
            !!t && !n && ((o || d) ?? !1)),
        I = r.useRef(null == s);
    return (r.useEffect(() => {
        I.current || null != s || (I.current = !0);
    }, [s]),
    null == s)
        ? null
        : (0, i.jsx)("div", {
              className: a()(h.kL, { [h.qG]: I.current, [h.WB]: m === f.u.ACCOUNT }),
              style: { background: g.background },
              "aria-hidden": !0,
              children: (0, i.jsx)(E, {
                  nameplate: s,
                  className: a()(h._8, {
                      [h.PT]: o,
                      [h.wH]: d,
                      [h.ct]: m === f.u.ACCOUNT,
                      [h.VH]: m === f.u.PREVIEW,
                      [h.Hh]: m === f.u.MINI_PREVIEW,
                      [h.Ix]: m === f.u.CHANNEL,
                  }),
                  style: { maskImage: g.maskImage },
                  animate: A,
                  loop: !0 === A && !0 === o,
              }),
          });
}
function E(e) {
    let { nameplate: t, className: n, style: r, animate: s, loop: a } = e,
        { staticImageUrl: o, animatedImageUrl: l, videoUrl: u } = (0, d.K)(t);
    if (null == o) return null;
    if (null != u)
        return (0, i.jsx)(m, { animatedAsset: u, staticAsset: o, animate: s, loop: a, style: r, className: n });
    let c = s && null != l ? l : o;
    return (0, i.jsx)(g, { asset: c, className: n, style: r });
}
function m(e) {
    let { staticAsset: t, animatedAsset: n, animate: s, loop: a, className: l, style: u } = e,
        c = r.useRef(null);
    return (
        r.useEffect(() => {
            null != c.current && (s || a ? c.current.play() : c.current.pause());
        }, [s, a]),
        (0, i.jsx)("div", {
            className: h.j,
            style: u,
            children: (0, i.jsx)(o.A, {
                src: n,
                poster: t,
                ref: c,
                playsInline: !0,
                loop: a,
                controls: !1,
                className: l,
                tabIndex: -1,
            }),
        })
    );
}
function g(e) {
    let { asset: t, className: n, style: r } = e;
    return (0, i.jsx)("img", { src: t, className: n, style: r, alt: "" });
}
