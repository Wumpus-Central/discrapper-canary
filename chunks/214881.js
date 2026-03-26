"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(607470),
    l = n(373054),
    u = n(253292),
    c = n(351952),
    d = n(88686),
    _ = n(43073);
function f(e) {
    let { nameplate: t, hovered: n, selected: s, content: o, placement: u } = e,
        f = (0, c._)(o, t, n, s, u),
        h = (0, l.i)(n, s),
        m = i.useRef(null == t);
    return (i.useEffect(() => {
        m.current || null != t || (m.current = !0);
    }, [t]),
    null == t)
        ? null
        : (0, r.jsx)("div", {
              className: a()(_.kL, { [_.qG]: m.current, [_.WB]: u === d.u.ACCOUNT }),
              style: { background: f.background },
              "aria-hidden": !0,
              children: (0, r.jsx)(p, {
                  nameplate: t,
                  className: a()(_._8, {
                      [_.PT]: n,
                      [_.wH]: s,
                      [_.ct]: u === d.u.ACCOUNT,
                      [_.VH]: u === d.u.PREVIEW,
                      [_.Hh]: u === d.u.MINI_PREVIEW,
                      [_.Ix]: u === d.u.CHANNEL,
                  }),
                  style: { maskImage: f.maskImage },
                  animate: h,
                  loop: !0 === h && !0 === n,
              }),
          });
}
function p(e) {
    let { nameplate: t, className: n, style: i, animate: s, loop: a } = e,
        { staticImageUrl: o, animatedImageUrl: l, videoUrl: c } = (0, u.K)(t);
    if (null == o) return null;
    if (null != c)
        return (0, r.jsx)(h, { animatedAsset: c, staticAsset: o, animate: s, loop: a, style: i, className: n });
    let d = s && null != l ? l : o;
    return (0, r.jsx)(m, { asset: d, className: n, style: i });
}
function h(e) {
    let { staticAsset: t, animatedAsset: n, animate: s, loop: a, className: l, style: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            null != c.current && (s || a ? c.current.play() : c.current.pause());
        }, [s, a]),
        (0, r.jsx)("div", {
            className: _.j,
            style: u,
            children: (0, r.jsx)(o.A, {
                src: n,
                poster: t,
                ref: c,
                playsInline: !0,
                loop: a,
                controls: !1,
                className: l,
                tabIndex: -1,
            }),
        })
    );
}
function m(e) {
    let { asset: t, className: n, style: i } = e;
    return (0, r.jsx)("img", { src: t, className: n, style: i, alt: "" });
}
