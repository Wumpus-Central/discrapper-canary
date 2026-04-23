"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(607470),
    o = n(373054),
    c = n(253292),
    u = n(351952),
    d = n(88686),
    h = n(502996);
function m(e) {
    let { nameplate: t, hovered: n, selected: s, content: a, placement: c } = e,
        m = (0, u._)(a, t, n, s, c),
        f = (0, o.i)(n, s),
        g = l.useRef(null == t);
    return (l.useEffect(() => {
        g.current || null != t || (g.current = !0);
    }, [t]),
    null == t)
        ? null
        : (0, i.jsx)("div", {
              className: r()(h.kL, { [h.qG]: g.current, [h.WB]: c === d.u.ACCOUNT }),
              style: { background: m.background },
              "aria-hidden": !0,
              children: (0, i.jsx)(p, {
                  nameplate: t,
                  className: r()(h._8, {
                      [h.PT]: n,
                      [h.wH]: s,
                      [h.ct]: c === d.u.ACCOUNT,
                      [h.VH]: c === d.u.PREVIEW,
                      [h.Hh]: c === d.u.MINI_PREVIEW,
                      [h.Ix]: c === d.u.CHANNEL,
                  }),
                  style: { maskImage: m.maskImage },
                  animate: f,
                  loop: !0 === f && !0 === n,
              }),
          });
}
function p(e) {
    let { nameplate: t, className: n, style: l, animate: s, loop: r } = e,
        { staticImageUrl: a, animatedImageUrl: o, videoUrl: u } = (0, c.K)(t);
    if (null == a) return null;
    if (null != u)
        return (0, i.jsx)(f, { animatedAsset: u, staticAsset: a, animate: s, loop: r, style: l, className: n });
    let d = s && null != o ? o : a;
    return (0, i.jsx)(g, { asset: d, className: n, style: l });
}
function f(e) {
    let { staticAsset: t, animatedAsset: n, animate: s, loop: r, className: o, style: c } = e,
        u = l.useRef(null);
    return (
        l.useEffect(() => {
            null != u.current && (s || r ? u.current.play() : u.current.pause());
        }, [s, r]),
        (0, i.jsx)("div", {
            className: h.j,
            style: c,
            children: (0, i.jsx)(a.A, {
                src: n,
                poster: t,
                ref: u,
                playsInline: !0,
                loop: r,
                controls: !1,
                className: o,
                tabIndex: -1,
            }),
        })
    );
}
function g(e) {
    let { asset: t, className: n, style: l } = e;
    return (0, i.jsx)("img", { src: t, className: n, style: l, alt: "" });
}
