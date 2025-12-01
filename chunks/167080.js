n.d(t, { Z: () => h });
var r = n(54381),
    i = n(473749),
    a = n(335854),
    o = n(481060),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
function p(e, t) {
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
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let h = (e) => {
    var {
            href: t,
            className: n,
            iconClassName: u,
            rel: f,
            target: m,
            mimeType: h,
            fileName: g,
            focusProps: E,
            onClick: b,
        } = e,
        y = _(e, [
            "href",
            "className",
            "iconClassName",
            "rel",
            "target",
            "mimeType",
            "fileName",
            "focusProps",
            "onClick",
        ]);
    let O = i.useMemo(() => a.X.getDefaultLinkInterceptor(t), [t]),
        v = i.useCallback(
            (e) => {
                s.default.track(l.rMx.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                    attachment_type: null == h ? void 0 : h[0],
                    attachment_subtype: null == h ? void 0 : h[1],
                }),
                    null == b || b(),
                    null == O || O(e);
            },
            [O, h, b],
        );
    return null != g
        ? (0, r.jsx)(
              o.Anchor,
              p(
                  d(
                      {
                          href: t,
                          onClick: v,
                          target: m,
                          rel: f,
                          className: n,
                          "aria-label": c.intl.string(c.t["1WjMbC"]),
                          focusProps: E,
                      },
                      y,
                  ),
                  { children: g },
              ),
          )
        : (0, r.jsx)(
              o.Anchor,
              p(
                  d(
                      {
                          href: t,
                          onClick: v,
                          target: m,
                          rel: f,
                          className: n,
                          "aria-label": c.intl.string(c.t["1WjMbC"]),
                          focusProps: E,
                      },
                      y,
                  ),
                  {
                      children: (0, r.jsx)(o._8t, {
                          size: "md",
                          color: "currentColor",
                          className: u,
                      }),
                  },
              ),
          );
};
