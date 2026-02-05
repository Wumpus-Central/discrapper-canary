"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(607470),
    l = n(12228),
    u = n(763673),
    c = n(967054),
    d = n(226540),
    _ = n(267987);
function f(e) {
    let { nameplate: t, hovered: n, selected: a, content: o, placement: u } = e,
        f = (0, c._)(o, t, n, a, u),
        h = (0, l.i)(n, a),
        m = i.useRef(null == t);
    return (i.useEffect(() => {
        m.current || null != t || (m.current = !0);
    }, [t]),
    null == t)
        ? null
        : (0, r.jsx)("div", {
              className: s()(_.kL, { [_.qG]: m.current, [_.WB]: u === d.u.ACCOUNT }),
              style: { background: f.background },
              "aria-hidden": !0,
              children: (0, r.jsx)(p, {
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
                  animate: h,
                  loop: !0 === h && !0 === n,
              }),
          });
}
function p(e) {
    let { nameplate: t, className: n, style: i, animate: a, loop: s } = e,
        { staticAsset: o, animatedAsset: l } = (0, u.r)(t),
        c = !l?.endsWith(".webm");
    return null == o || null == l
        ? null
        : c
          ? (0, r.jsx)(m, { asset: a ? l : o, className: n, style: i })
          : (0, r.jsx)(h, { animatedAsset: l, staticAsset: o, animate: a, loop: s, style: i, className: n });
}
function h(e) {
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
function m(e) {
    let { asset: t, className: n, style: i } = e;
    return (0, r.jsx)("img", { src: t, className: n, style: i, alt: "" });
}
