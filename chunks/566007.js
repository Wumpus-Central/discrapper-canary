n.d(t, { Z: () => a });
var r = n(255367);
n(73800);
var i = n(750312),
    l = n(189988),
    o = n(623132);
function a(e) {
    var { user: t, widget: n, isGameFetching: a, containerClassName: c, disableInteraction: s } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["user", "widget", "isGameFetching", "containerClassName", "disableInteraction"]);
    let u = n.games[0];
    return (0, r.jsx)(i.Z, {
        userId: t.id,
        widget: n,
        className: c,
        disableInteraction: s,
        children:
            null != u
                ? (0, r.jsx)(
                      o.Z,
                      (function (e) {
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
                                      var r;
                                      (r = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = r);
                                  });
                          }
                          return e;
                      })(
                          {
                              user: t,
                              game: u,
                              widgetType: n.type,
                              loading: a(u.applicationId),
                              disableInteraction: s,
                          },
                          d,
                      ),
                  )
                : (0, r.jsx)(l.Z, { widgetType: n.type }),
    });
}
