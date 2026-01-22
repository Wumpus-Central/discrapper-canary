n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(607470),
    l = n(12228),
    c = n(763673),
    u = n(967054),
    d = n(226540),
    f = n(267987);
function p(e) {
    let { nameplate: t, hovered: n, selected: a, content: o, placement: c } = e,
        p = (0, u._)(o, t, n, a, c),
        h = (0, l.i)(n, a),
        m = i.useRef(null == t);
    return (i.useEffect(() => {
        m.current || null != t || (m.current = !0);
    }, [t]),
    null == t)
        ? null
        : (0, r.jsx)("div", {
              className: s()(f.kL, {
                  [f.qG]: m.current,
                  [f.WB]: c === d.u.ACCOUNT,
              }),
              style: { background: p.background },
              "aria-hidden": !0,
              children: (0, r.jsx)(_, {
                  nameplate: t,
                  className: s()(f._8, {
                      [f.PT]: n,
                      [f.wH]: a,
                      [f.ct]: c === d.u.ACCOUNT,
                      [f.VH]: c === d.u.PREVIEW,
                      [f.Hh]: c === d.u.MINI_PREVIEW,
                      [f.Ix]: c === d.u.CHANNEL,
                  }),
                  style: { maskImage: p.maskImage },
                  animate: h,
                  loop: !0 === h && !0 === n,
              }),
          });
}
function _(e) {
    let { nameplate: t, className: n, style: i, animate: a, loop: s } = e,
        { staticAsset: o, animatedAsset: l } = (0, c.r)(t),
        u = !(null == l ? void 0 : l.endsWith(".webm"));
    return null == o || null == l
        ? null
        : u
          ? (0, r.jsx)(m, {
                asset: a ? l : o,
                className: n,
                style: i,
            })
          : (0, r.jsx)(h, {
                animatedAsset: l,
                staticAsset: o,
                animate: a,
                loop: s,
                style: i,
                className: n,
            });
}
function h(e) {
    let { staticAsset: t, animatedAsset: n, animate: a, loop: s, className: l, style: c } = e,
        u = i.useRef(null);
    return (
        i.useEffect(() => {
            null != u.current && (a || s ? u.current.play() : u.current.pause());
        }, [a, s]),
        (0, r.jsx)("div", {
            className: f.j,
            style: c,
            children: (0, r.jsx)(o.A, {
                src: n,
                poster: t,
                ref: u,
                playsInline: !0,
                loop: s,
                controls: !1,
                className: l,
                tabIndex: -1,
            }),
        })
    );
}
function m(e) {
    let { asset: t, className: n, style: i } = e;
    return (0, r.jsx)("img", {
        src: t,
        className: n,
        style: i,
        alt: "",
    });
}
