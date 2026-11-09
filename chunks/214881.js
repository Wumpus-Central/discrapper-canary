n(508300);
var r = n(477900),
    l = n(582128),
    a = n(503698),
    u = n.n(a),
    s = n(607470),
    c = n(373054),
    i = n(253292),
    o = n(351952),
    d = n(88686),
    p = n(431939);
function f(e) {
    let { nameplate: t, className: n, style: l, animate: a, loop: u } = e,
        { staticImageUrl: s, animatedImageUrl: c, videoUrl: o } = (0, i.K)(t);
    if (null == s) return null;
    if (null != o)
        return (0, r.jsx)(m, { animatedAsset: o, staticAsset: s, animate: a, loop: u, style: l, className: n });
    let d = a && null != c ? c : s;
    return (0, r.jsx)(g, { asset: d, className: n, style: l });
}
function m(e) {
    let { staticAsset: t, animatedAsset: n, animate: a, loop: u, className: c, style: i } = e,
        o = l.useRef(null);
    return (
        l.useEffect(() => {
            null != o.current &&
                (a || u
                    ? o.current.play()?.catch((e) => {
                          if (!(e instanceof DOMException && "AbortError" === e.name)) throw e;
                      })
                    : o.current.pause());
        }, [a, u]),
        (0, r.jsx)("div", {
            className: p.j,
            style: i,
            children: (0, r.jsx)(s.A, {
                src: n,
                poster: t,
                preload: "none",
                ref: o,
                playsInline: !0,
                loop: u,
                controls: !1,
                className: c,
                tabIndex: -1,
            }),
        })
    );
}
function g(e) {
    let { asset: t, className: n, style: l } = e;
    return (0, r.jsx)("img", { src: t, className: n, style: l, alt: "" });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { nameplate: t, hovered: n, selected: a, content: s, placement: i } = e,
                m = (0, o._)(s, t, n, a, i),
                g = (0, c.i)(n, a),
                I = l.useRef(null == t);
            return (l.useEffect(() => {
                I.current || null != t || (I.current = !0);
            }, [t]),
            null == t)
                ? null
                : (0, r.jsx)("div", {
                      className: u()(p.kL, { [p.qG]: I.current, [p.WB]: i === d.u.ACCOUNT }),
                      style: { background: m.background },
                      "aria-hidden": !0,
                      children: (0, r.jsx)(f, {
                          nameplate: t,
                          className: u()(p._8, {
                              [p.PT]: n,
                              [p.wH]: a,
                              [p.ct]: i === d.u.ACCOUNT,
                              [p.VH]: i === d.u.PREVIEW,
                              [p.Hh]: i === d.u.MINI_PREVIEW,
                              [p.Ix]: i === d.u.CHANNEL,
                          }),
                          style: { maskImage: m.maskImage },
                          animate: g,
                          loop: !0 === g && !0 === n,
                      }),
                  });
        },
    },
);
