r.d(t, { default: () => b }), r(896048);
var n = r(627968),
    o = r(64700),
    l = r(158954),
    i = r(311907),
    c = r(397927),
    s = r(287809),
    a = r(725386),
    u = r(624160),
    p = r(985018),
    f = r(480676);
function b(e) {
    var t, r;
    let { onClose: b, trackUserProfileEditAction: O } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        l = Object.getOwnPropertyNames(e);
                    for (n = 0; n < l.length; n++)
                        (r = l[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                    return o;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, ["onClose", "trackUserProfileEditAction"]),
        y = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
        g = (function () {
            let e = (0, a.A)({ location: "UserProfileWidgetAddModal" }),
                [t, r] = o.useState(e);
            return (
                o.useEffect(() => {
                    e.length > t.length && r(e);
                }, [e, t]),
                t
            );
        })(),
        j = g.length > 0,
        [m, h] = o.useState(!1),
        w = {
            onClick: () => b(),
            text: p.intl.string(p.t.cpT0Cq),
        },
        P = o.useCallback(() => {
            h(!0), b();
        }, [b]);
    return null == y
        ? null
        : (0, n.jsx)(
              l.Modal,
              ((t = (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = null != arguments[t] ? arguments[t] : {},
                          n = Object.keys(r);
                      "function" == typeof Object.getOwnPropertySymbols &&
                          (n = n.concat(
                              Object.getOwnPropertySymbols(r).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                              }),
                          )),
                          n.forEach(function (t) {
                              var n;
                              (n = r[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: n,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (e[t] = n);
                          });
                  }
                  return e;
              })(
                  {
                      title: p.intl.string(p.t["grUgR+"]),
                      actions: j ? [] : [w],
                      size: j ? "md" : "sm",
                      onClose: b,
                  },
                  d,
              )),
              (r = r =
                  {
                      children: j
                          ? (0, n.jsx)("ul", {
                                "aria-label": p.intl.string(p.t["+EIBSA"]),
                                className: f.f,
                                children: g.map((e) =>
                                    (0, n.jsx)(
                                        u.A,
                                        {
                                            widget: e,
                                            onAddWidget: P,
                                            loading: m,
                                            trackUserProfileEditAction: O,
                                        },
                                        e.getUniqueKey(),
                                    ),
                                ),
                            })
                          : (0, n.jsx)(c.Text, {
                                variant: "text-md/medium",
                                color: "text-subtle",
                                children: p.intl.string(p.t["1nkDOs"]),
                            }),
                  }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                  : (function (e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            r.push.apply(r, n);
                        }
                        return r;
                    })(Object(r)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                    }),
              t),
          );
}
