n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    o = n(335854),
    a = n(481060),
    s = n(626135),
    l = n(981631),
    c = n(388032);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let m = (e) => {
    var { href: t, className: n, iconClassName: u, rel: f, target: h, mimeType: m, fileName: g, focusProps: E, onClick: b } = e,
        y = p(e, ['href', 'className', 'iconClassName', 'rel', 'target', 'mimeType', 'fileName', 'focusProps', 'onClick']);
    let v = i.useMemo(() => o.X.getDefaultLinkInterceptor(t), [t]),
        O = i.useCallback(
            (e) => {
                s.default.track(l.rMx.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                    attachment_type: null == m ? void 0 : m[0],
                    attachment_subtype: null == m ? void 0 : m[1]
                }),
                    null == b || b(),
                    null == v || v(e);
            },
            [v, m, b]
        );
    return null != g
        ? (0, r.jsx)(
              a.eee,
              _(
                  d(
                      {
                          href: t,
                          onClick: O,
                          target: h,
                          rel: f,
                          className: n,
                          'aria-label': c.NW.string(c.t['1WjMbG']),
                          focusProps: E
                      },
                      y
                  ),
                  { children: g }
              )
          )
        : (0, r.jsx)(
              a.eee,
              _(
                  d(
                      {
                          href: t,
                          onClick: O,
                          target: h,
                          rel: f,
                          className: n,
                          'aria-label': c.NW.string(c.t['1WjMbG']),
                          focusProps: E
                      },
                      y
                  ),
                  {
                      children: (0, r.jsx)(a._8t, {
                          size: 'md',
                          color: 'currentColor',
                          className: u
                      })
                  }
              )
          );
};
