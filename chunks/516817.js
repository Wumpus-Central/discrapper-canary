n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(70097),
    l = n(881474),
    c = n(168352),
    u = n(379839),
    d = n(359135),
    f = n(899170);
function p(e) {
    let { nameplate: t, hovered: n, selected: a, content: s, placement: c } = e,
        p = (0, u.p)(s, t, n, a, c),
        m = (0, l.C)(n, a),
        h = i.useRef(null == t);
    return (i.useEffect(() => {
        h.current || null != t || (h.current = !0);
    }, [t]),
    null == t)
        ? null
        : (0, r.jsx)("div", {
              className: o()(f.container, {
                  [f.fadeIn]: h.current,
                  [f.fitInAccount]: c === d.i.ACCOUNT,
              }),
              style: { background: p.background },
              "aria-hidden": !0,
              children: (0, r.jsx)(_, {
                  nameplate: t,
                  className: o()(f.img, {
                      [f.hover]: n,
                      [f.selected]: a,
                      [f.account]: c === d.i.ACCOUNT,
                      [f.preview]: c === d.i.PREVIEW,
                      [f.mini_preview]: c === d.i.MINI_PREVIEW,
                      [f.channel]: c === d.i.CHANNEL,
                  }),
                  style: { maskImage: p.maskImage },
                  animate: m,
                  loop: !0 === m && !0 === n,
              }),
          });
}
function _(e) {
    let { nameplate: t, className: n, style: i, animate: a, loop: o } = e,
        { staticAsset: s, animatedAsset: l } = (0, c._)(t),
        u = !(null == l ? void 0 : l.endsWith(".webm"));
    return null == s || null == l
        ? null
        : u
          ? (0, r.jsx)(h, {
                asset: a ? l : s,
                className: n,
                style: i,
            })
          : (0, r.jsx)(m, {
                animatedAsset: l,
                staticAsset: s,
                animate: a,
                loop: o,
                style: i,
                className: n,
            });
}
function m(e) {
    let { staticAsset: t, animatedAsset: n, animate: a, loop: o, className: l, style: c } = e,
        u = i.useRef(null);
    return (
        i.useEffect(() => {
            null != u.current && (a || o ? u.current.play() : u.current.pause());
        }, [a, o]),
        (0, r.jsx)("div", {
            className: f.videoContainer,
            style: c,
            children: (0, r.jsx)(s.Z, {
                src: n,
                poster: t,
                ref: u,
                playsInline: !0,
                loop: o,
                controls: !1,
                className: l,
                tabIndex: -1,
            }),
        })
    );
}
function h(e) {
    let { asset: t, className: n, style: i } = e;
    return (0, r.jsx)("img", {
        src: t,
        className: n,
        style: i,
        alt: "",
    });
}
