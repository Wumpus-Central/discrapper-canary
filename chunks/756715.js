r.r(n),
    r.d(n, {
        Anchor: function () {
            return _;
        }
    });
var i = r(411104);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(532712),
    c = r(1561),
    d = r(84735),
    f = r(335854),
    p = r(645499),
    h = r(287330);
function _(e) {
    let { href: n, onClick: r, className: i, children: s, rel: _, target: m, useDefaultUnderlineStyles: g = !0, title: E, style: v, focusProps: y, ...b } = e;
    null != n && null == r && (r = f.X.getDefaultLinkInterceptor(n));
    let I = o.useContext(u.g),
        T = {
            className: l()(h.anchor, { [h.anchorUnderlineOnHover]: g }, i),
            href: n,
            onClick: r,
            rel: null != _ ? _ : void 0,
            target: null != m ? m : void 0,
            title: null != E ? E : void 0,
            style: null != v ? v : void 0
        };
    return (null != n && !(0, p.B)(n) && ((T.rel = 'noreferrer noopener'), (T.target = '_blank')), I && delete T.href, null != r)
        ? (0, a.jsx)(c.P, {
              tag: 'a',
              ...b,
              ...T,
              onClick: r,
              focusProps: y,
              children: s
          })
        : (0, a.jsx)(d.t, {
              ...y,
              children: (0, a.jsx)('a', {
                  ...b,
                  ...T,
                  children: s
              })
          });
}
