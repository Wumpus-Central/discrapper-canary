r.d(t, { Z: () => o });
var n = r(951288);
r(647438);
var i = r(750312),
    l = r(189988),
    a = r(30344);
function o(e) {
    var { user: t, widget: r, containerClassName: o, disableInteraction: c } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++)
                    (r = l[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ["user", "widget", "containerClassName", "disableInteraction"]);
    return (0, n.jsx)(i.Z, {
        userId: t.id,
        widget: r,
        className: o,
        disableInteraction: c,
        children:
            r.games.length > 0
                ? (0, n.jsx)(
                      a.Z,
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
                              userId: t.id,
                              games: r.games,
                              disableInteraction: c,
                              widgetType: r.type,
                          },
                          s,
                      ),
                  )
                : (0, n.jsx)(l.Z, { widgetType: r.type }),
    });
}
