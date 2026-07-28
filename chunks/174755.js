"use strict";
n.d(t, { A: () => h });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(607470),
    o = n(17928),
    d = n(775602),
    c = n(531685),
    u = n(253292),
    _ = n(351952),
    E = n(88686),
    A = n(150284);
function h(e) {
    let t,
        n,
        { nameplate: a, hovered: l, selected: u, content: h, placement: f } = e,
        p = (0, _._)(h, a, l, u, f),
        T =
            ((t = (0, o.bG)([c.A], () => c.A.isFocused())),
            (n = (0, o.bG)([d.Ay], () => d.Ay.useReducedMotion)),
            !!t && !n && ((l || u) ?? !1)),
        m = r.useRef(null == a);
    return (r.useEffect(() => {
        m.current || null != a || (m.current = !0);
    }, [a]),
    null == a)
        ? null
        : (0, i.jsx)("div", {
              className: s()(A.kL, { [A.qG]: m.current, [A.WB]: f === E.u.ACCOUNT }),
              style: { background: p.background },
              "aria-hidden": !0,
              children: (0, i.jsx)(I, {
                  nameplate: a,
                  className: s()(A._8, {
                      [A.PT]: l,
                      [A.wH]: u,
                      [A.ct]: f === E.u.ACCOUNT,
                      [A.VH]: f === E.u.PREVIEW,
                      [A.Hh]: f === E.u.MINI_PREVIEW,
                      [A.Ix]: f === E.u.CHANNEL,
                  }),
                  style: { maskImage: p.maskImage },
                  animate: T,
                  loop: !0 === T && !0 === l,
              }),
          });
}
function I(e) {
    let { nameplate: t, className: n, style: r, animate: a, loop: s } = e,
        { staticImageUrl: l, animatedImageUrl: o, videoUrl: d } = (0, u.K)(t);
    if (null == l) return null;
    if (null != d)
        return (0, i.jsx)(f, { animatedAsset: d, staticAsset: l, animate: a, loop: s, style: r, className: n });
    let c = a && null != o ? o : l;
    return (0, i.jsx)(p, { asset: c, className: n, style: r });
}
function f(e) {
    let { staticAsset: t, animatedAsset: n, animate: a, loop: s, className: o, style: d } = e,
        c = r.useRef(null);
    return (
        r.useEffect(() => {
            null != c.current && (a || s ? c.current.play() : c.current.pause());
        }, [a, s]),
        (0, i.jsx)("div", {
            className: A.j,
            style: d,
            children: (0, i.jsx)(l.A, {
                src: n,
                poster: t,
                ref: c,
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
    let { asset: t, className: n, style: r } = e;
    return (0, i.jsx)("img", { src: t, className: n, style: r, alt: "" });
}
