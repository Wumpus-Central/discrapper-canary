"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(607470),
    l = n(12228),
    u = n(302086),
    c = n(967054),
    d = n(226540),
    _ = n(267987);
function f(e) {
    let { nameplate: t, hovered: n, selected: a, content: o, placement: u } = e,
        f = (0, c._)(o, t, n, a, u),
        p = (0, l.i)(n, a),
        g = i.useRef(null == t);
    return (i.useEffect(() => {
        g.current || null != t || (g.current = !0);
    }, [t]),
    null == t)
        ? null
        : (0, r.jsx)("div", {
              className: s()(_.kL, { [_.qG]: g.current, [_.WB]: u === d.u.ACCOUNT }),
              style: { background: f.background },
              "aria-hidden": !0,
              children: (0, r.jsx)(h, {
                  nameplate: t,
                  className: s()(_._8, {
                      [_.PT]: n,
                      [_.wH]: a,
                      [_.ct]: u === d.u.ACCOUNT,
                      [_.VH]: u === d.u.PREVIEW,
                      [_.Hh]: u === d.u.MINI_PREVIEW,
                      [_.Ix]: u === d.u.CHANNEL,
                  }),
                  style: { maskImage: f.maskImage },
                  animate: p,
                  loop: !0 === p && !0 === n,
              }),
          });
}
function h(e) {
    let { nameplate: t, className: n, style: i, animate: a, loop: s } = e,
        { staticImageUrl: o, animatedImageUrl: l, videoUrl: c } = (0, u.K)(t);
    if (null == o) return null;
    if (null != c)
        return (0, r.jsx)(p, { animatedAsset: c, staticAsset: o, animate: a, loop: s, style: i, className: n });
    let d = a && null != l ? l : o;
    return (0, r.jsx)(g, { asset: d, className: n, style: i });
}
function p(e) {
    let { staticAsset: t, animatedAsset: n, animate: a, loop: s, className: l, style: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            null != c.current && (a || s ? c.current.play() : c.current.pause());
        }, [a, s]),
        (0, r.jsx)("div", {
            className: _.j,
            style: u,
            children: (0, r.jsx)(o.A, {
                src: n,
                poster: t,
                ref: c,
                playsInline: !0,
                loop: s,
                controls: !1,
                className: l,
                tabIndex: -1,
            }),
        })
    );
}
function g(e) {
    let { asset: t, className: n, style: i } = e;
    return (0, r.jsx)("img", { src: t, className: n, style: i, alt: "" });
}
