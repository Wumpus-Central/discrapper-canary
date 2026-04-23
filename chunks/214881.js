l.d(t, { A: () => A });
var r = l(627968),
    a = l(64700),
    s = l(503698),
    n = l.n(s),
    i = l(607470),
    c = l(373054),
    o = l(253292),
    u = l(351952),
    d = l(88686),
    m = l(502996);
function A(e) {
    let { nameplate: t, hovered: l, selected: s, content: i, placement: o } = e,
        A = (0, u._)(i, t, l, s, o),
        _ = (0, c.i)(l, s),
        h = a.useRef(null == t);
    return (a.useEffect(() => {
        h.current || null != t || (h.current = !0);
    }, [t]),
    null == t)
        ? null
        : (0, r.jsx)("div", {
              className: n()(m.kL, { [m.qG]: h.current, [m.WB]: o === d.u.ACCOUNT }),
              style: { background: A.background },
              "aria-hidden": !0,
              children: (0, r.jsx)(p, {
                  nameplate: t,
                  className: n()(m._8, {
                      [m.PT]: l,
                      [m.wH]: s,
                      [m.ct]: o === d.u.ACCOUNT,
                      [m.VH]: o === d.u.PREVIEW,
                      [m.Hh]: o === d.u.MINI_PREVIEW,
                      [m.Ix]: o === d.u.CHANNEL,
                  }),
                  style: { maskImage: A.maskImage },
                  animate: _,
                  loop: !0 === _ && !0 === l,
              }),
          });
}
function p(e) {
    let { nameplate: t, className: l, style: a, animate: s, loop: n } = e,
        { staticImageUrl: i, animatedImageUrl: c, videoUrl: u } = (0, o.K)(t);
    if (null == i) return null;
    if (null != u)
        return (0, r.jsx)(_, { animatedAsset: u, staticAsset: i, animate: s, loop: n, style: a, className: l });
    let d = s && null != c ? c : i;
    return (0, r.jsx)(h, { asset: d, className: l, style: a });
}
function _(e) {
    let { staticAsset: t, animatedAsset: l, animate: s, loop: n, className: c, style: o } = e,
        u = a.useRef(null);
    return (
        a.useEffect(() => {
            null != u.current && (s || n ? u.current.play() : u.current.pause());
        }, [s, n]),
        (0, r.jsx)("div", {
            className: m.j,
            style: o,
            children: (0, r.jsx)(i.A, {
                src: l,
                poster: t,
                ref: u,
                playsInline: !0,
                loop: n,
                controls: !1,
                className: c,
                tabIndex: -1,
            }),
        })
    );
}
function h(e) {
    let { asset: t, className: l, style: a } = e;
    return (0, r.jsx)("img", { src: t, className: l, style: a, alt: "" });
}
