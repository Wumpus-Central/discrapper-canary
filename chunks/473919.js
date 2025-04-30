n.d(t, { Z: () => _ });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(556638),
    l = n(843280);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e) {
    let { icon: t, tooltipText: n, tooltipAriaLabel: i, className: c } = e,
        d = (0, a.vjg)(a.Skl.ONLINE);
    return null == n
        ? (0, r.jsx)(t, {
              size: 'custom',
              color: d,
              className: o()(l.icon, c)
          })
        : (0, r.jsx)(a.ua7, {
              text: n,
              'aria-label': i,
              tooltipContentClassName: l.container,
              delay: s.X,
              children: (e) =>
                  (0, r.jsx)(
                      t,
                      f(u({}, e), {
                          size: 'custom',
                          color: d,
                          className: o()(l.icon, c)
                      })
                  )
          });
}
