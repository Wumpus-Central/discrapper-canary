n.r(t), n.d(t, { Anchor: () => _ }), n(411104);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(532712),
    l = n(1561),
    u = n(84735),
    c = n(335854),
    d = n(645499),
    f = n(287330);
function _(e) {
    let { href: t, onClick: n, className: a, children: _, rel: p, target: h, useDefaultUnderlineStyles: m = !0, title: g, style: E, focusProps: v, ...y } = e;
    null != t && null == n && (n = c.X.getDefaultLinkInterceptor(t));
    let I = r.useContext(o.g),
        T = {
            className: s()(f.anchor, { [f.anchorUnderlineOnHover]: m }, a),
            href: t,
            onClick: n,
            rel: null != p ? p : void 0,
            target: null != h ? h : void 0,
            title: null != g ? g : void 0,
            style: null != E ? E : void 0
        };
    return (null == t || (0, d.B)(t) || ((T.rel = 'noreferrer noopener'), (T.target = '_blank')), I && delete T.href, null != n)
        ? (0, i.jsx)(l.P, {
              tag: 'a',
              ...y,
              ...T,
              onClick: n,
              focusProps: v,
              children: _
          })
        : (0, i.jsx)(u.t, {
              ...v,
              children: (0, i.jsx)('a', {
                  ...y,
                  ...T,
                  children: _
              })
          });
}
