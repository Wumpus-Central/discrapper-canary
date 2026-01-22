n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    a = n(752239),
    s = n(397927),
    o = n(954571),
    l = n(652215),
    c = n(985018);
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = h(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let m = (e) => {
    let {
            href: t,
            className: n,
            iconClassName: u,
            rel: f,
            target: h,
            mimeType: m,
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
        ]),
        O = i.useMemo(() => a.V.getDefaultLinkInterceptor(t), [t]),
        A = i.useCallback(
            (e) => {
                o.default.track(l.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                    attachment_type: null == m ? void 0 : m[0],
                    attachment_subtype: null == m ? void 0 : m[1],
                }),
                    null == b || b(),
                    null == O || O(e);
            },
            [O, m, b],
        );
    return null != g
        ? (0, r.jsx)(
              s.MzZ,
              p(
                  d(
                      {
                          href: t,
                          onClick: A,
                          target: h,
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
              s.MzZ,
              p(
                  d(
                      {
                          href: t,
                          onClick: A,
                          target: h,
                          rel: f,
                          className: n,
                          "aria-label": c.intl.string(c.t["1WjMbC"]),
                          focusProps: E,
                      },
                      y,
                  ),
                  {
                      children: (0, r.jsx)(s.s3U, {
                          size: "md",
                          color: "currentColor",
                          className: u,
                      }),
                  },
              ),
          );
};
