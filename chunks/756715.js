r.r(n),
    r.d(n, {
        Anchor: function () {
            return p;
        }
    });
var i = r(411104);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(532712),
    c = r(1561),
    d = r(84735),
    f = r(335854),
    _ = r(645499),
    h = r(287330);
function p(e) {
    let { href: n, onClick: r, className: i, children: o, rel: p, target: m, useDefaultUnderlineStyles: g = !0, title: E, style: v, focusProps: I, ...T } = e;
    null != n && null == r && (r = f.X.getDefaultLinkInterceptor(n));
    let b = s.useContext(u.g),
        y = {
            className: l()(h.anchor, { [h.anchorUnderlineOnHover]: g }, i),
            href: n,
            onClick: r,
            rel: null != p ? p : void 0,
            target: null != m ? m : void 0,
            title: null != E ? E : void 0,
            style: null != v ? v : void 0
        };
    return (null != n && !(0, _.B)(n) && ((y.rel = 'noreferrer noopener'), (y.target = '_blank')), b && delete y.href, null != r)
        ? (0, a.jsx)(c.P, {
              tag: 'a',
              ...T,
              ...y,
              onClick: r,
              focusProps: I,
              children: o
          })
        : (0, a.jsx)(d.t, {
              ...I,
              children: (0, a.jsx)('a', {
                  ...T,
                  ...y,
                  children: o
              })
          });
}
