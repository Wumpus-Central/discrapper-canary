n.d(t, { A: () => p });
var r = n(477900),
    l = n(582128),
    u = n(503698),
    a = n.n(u),
    s = n(607470),
    c = n(373054),
    i = n(253292),
    o = n(351952),
    d = n(88686),
    m = n(431939);
function p(e) {
    let { nameplate: t, hovered: n, selected: u, content: s, placement: i } = e,
        p = (0, o._)(s, t, n, u, i),
        g = (0, c.i)(n, u),
        I = l.useRef(null == t);
    return (l.useEffect(() => {
        I.current || null != t || (I.current = !0);
    }, [t]),
    null == t)
        ? null
        : (0, r.jsx)("div", {
              className: a()(m.kL, { [m.qG]: I.current, [m.WB]: i === d.u.ACCOUNT }),
              style: { background: p.background },
              "aria-hidden": !0,
              children: (0, r.jsx)(f, {
                  nameplate: t,
                  className: a()(m._8, {
                      [m.PT]: n,
                      [m.wH]: u,
                      [m.ct]: i === d.u.ACCOUNT,
                      [m.VH]: i === d.u.PREVIEW,
                      [m.Hh]: i === d.u.MINI_PREVIEW,
                      [m.Ix]: i === d.u.CHANNEL,
                  }),
                  style: { maskImage: p.maskImage },
                  animate: g,
                  loop: !0 === g && !0 === n,
              }),
          });
}
function f(e) {
    let { nameplate: t, className: n, style: l, animate: u, loop: a } = e,
        { staticImageUrl: s, animatedImageUrl: c, videoUrl: o } = (0, i.K)(t);
    if (null == s) return null;
    if (null != o)
        return (0, r.jsx)(g, { animatedAsset: o, staticAsset: s, animate: u, loop: a, style: l, className: n });
    let d = u && null != c ? c : s;
    return (0, r.jsx)(I, { asset: d, className: n, style: l });
}
function g(e) {
    let { staticAsset: t, animatedAsset: n, animate: u, loop: a, className: c, style: i } = e,
        o = l.useRef(null);
    return (
        l.useEffect(() => {
            null != o.current && (u || a ? o.current.play() : o.current.pause());
        }, [u, a]),
        (0, r.jsx)("div", {
            className: m.j,
            style: i,
            children: (0, r.jsx)(s.A, {
                src: n,
                poster: t,
                ref: o,
                playsInline: !0,
                loop: a,
                controls: !1,
                className: c,
                tabIndex: -1,
            }),
        })
    );
}
function I(e) {
    let { asset: t, className: n, style: l } = e;
    return (0, r.jsx)("img", { src: t, className: n, style: l, alt: "" });
}
