a.d(t, { A: () => h, e: () => p });
var r = a(627968),
    n = a(64700),
    l = a(310784),
    i = a.n(l),
    s = a(503698),
    o = a.n(s),
    c = a(654107),
    d = a(871123),
    u = a(705452);
function h(e) {
    let {
            cardImage: t,
            cardBackgroundImage: a,
            altText: l,
            containerClassName: s,
            backgroundImageClassName: d,
            foregroundImageClassName: h,
            shape: p,
        } = e,
        [m, f] = (0, c.rh)(t.toString(), "#000000"),
        b = n.useMemo(() => {
            let e = i()(m).brighten(1.5).saturate(0.3).alpha(0.8).hex(),
                t = f ?? i()(m).saturate(1.2).alpha(0.9).hex();
            return `linear-gradient(135deg, ${e}, ${t})`;
        }, [m, f]);
    return (0, r.jsxs)("div", {
        className: o()(u.Ui, { [u.Ew]: "square" === p }, s),
        children: [
            (0, r.jsx)("div", {
                className: o()(u.GC, d),
                style: null != a ? { backgroundImage: `url(${a.toString()})` } : { backgroundImage: b },
            }),
            (0, r.jsx)("img", {
                src: t.toString(),
                alt: l,
                draggable: !1,
                className: o()(u.LC, { [u.Ew]: "square" === p }, h),
            }),
        ],
    });
}
function p(e) {
    let { sku: t, containerClassName: a, backgroundImageClassName: n, foregroundImageClassName: l, shape: i } = e,
        s = (0, d.fq)(t),
        o = (0, d.xf)(t);
    return null == s
        ? null
        : (0, r.jsx)(h, {
              cardImage: s,
              cardBackgroundImage: o,
              altText: t.name,
              containerClassName: a,
              backgroundImageClassName: n,
              foregroundImageClassName: l,
              shape: i,
          });
}
