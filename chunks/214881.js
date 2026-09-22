(n.d(t, { A: () => m }), n(508300));
var r = n(477900),
    l = n(582128),
    a = n(503698),
    u = n.n(a),
    s = n(607470),
    c = n(686527),
    i = n(373054),
    o = n(253292),
    d = n(351952),
    p = n(88686),
    f = n(431939);
function m(e) {
    let { nameplate: t, hovered: n, selected: a, content: s, placement: c } = e,
        o = (0, d._)(s, t, n, a, c),
        m = (0, i.i)(n, a),
        E = l.useRef(null == t);
    return (l.useEffect(() => {
        E.current || null != t || (E.current = !0);
    }, [t]),
    null == t)
        ? null
        : (0, r.jsx)("div", {
              className: u()(f.kL, { [f.qG]: E.current, [f.WB]: c === p.u.ACCOUNT }),
              style: { background: o.background },
              "aria-hidden": !0,
              children: (0, r.jsx)(g, {
                  nameplate: t,
                  className: u()(f._8, {
                      [f.PT]: n,
                      [f.wH]: a,
                      [f.ct]: c === p.u.ACCOUNT,
                      [f.VH]: c === p.u.PREVIEW,
                      [f.Hh]: c === p.u.MINI_PREVIEW,
                      [f.Ix]: c === p.u.CHANNEL,
                  }),
                  style: { maskImage: o.maskImage },
                  animate: m,
                  loop: !0 === m && !0 === n,
              }),
          });
}
function g(e) {
    let { nameplate: t, className: n, style: l, animate: a, loop: u } = e,
        { staticImageUrl: s, animatedImageUrl: i, videoUrl: d } = (0, o.K)(t),
        { preload: p } = c.A.getConfig({ location: "Nameplate_Asset" });
    if (null == s) return null;
    if (null != d)
        return (0, r.jsx)(E, {
            animatedAsset: d,
            staticAsset: s,
            animate: a,
            loop: u,
            preload: p,
            style: l,
            className: n,
        });
    let f = a && null != i ? i : s;
    return (0, r.jsx)(I, { asset: f, className: n, style: l });
}
function E(e) {
    let { staticAsset: t, animatedAsset: n, animate: a, loop: u, preload: c, className: i, style: o } = e,
        d = l.useRef(null);
    return (
        l.useEffect(() => {
            null != d.current &&
                (a || u
                    ? d.current.play().catch((e) => {
                          if (!(e instanceof DOMException && "AbortError" === e.name)) throw e;
                      })
                    : d.current.pause());
        }, [a, u]),
        (0, r.jsx)("div", {
            className: f.j,
            style: o,
            children: (0, r.jsx)(s.A, {
                src: n,
                poster: t,
                preload: c,
                ref: d,
                playsInline: !0,
                loop: u,
                controls: !1,
                className: i,
                tabIndex: -1,
            }),
        })
    );
}
function I(e) {
    let { asset: t, className: n, style: l } = e;
    return (0, r.jsx)("img", { src: t, className: n, style: l, alt: "" });
}
