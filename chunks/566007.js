r.d(t, { Z: () => o });
var n = r(951288);
r(647438);
var i = r(750312),
    a = r(189988),
    l = r(623132);
function o(e) {
    var { user: t, widget: r, isGameFetching: o, containerClassName: c, disableInteraction: s } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                    (r = a[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ["user", "widget", "isGameFetching", "containerClassName", "disableInteraction"]);
    let d = r.games[0];
    return (0, n.jsx)(i.Z, {
        userId: t.id,
        widget: r,
        className: c,
        disableInteraction: s,
        children:
            null != d
                ? (0, n.jsx)(
                      l.Z,
                      (function (e) {
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
                              user: t,
                              game: d,
                              widgetType: r.type,
                              loading: o(d.applicationId),
                              disableInteraction: s,
                          },
                          u,
                      ),
                  )
                : (0, n.jsx)(a.Z, { widgetType: r.type }),
    });
}
