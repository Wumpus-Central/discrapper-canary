n.d(t, {
    A: () => c,
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(882997),
    s = n(962173),
    o = n(985018);

function c(e) {
    let { platform: t, variant: n = "secondary", size: c = "sm", onAction: u, icon: d } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(e, ["platform", "variant", "size", "onAction", "icon"]);
    return (0, i.bG)([s.A], () => s.A.getAccounts().some((e) => e.type === t.type))
        ? null
        : (0, r.jsx)(
              l.Button,
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
                      onClick: () => {
                          null == u || u(),
                              (0, a.A)({
                                  platformType: t.type,
                                  location: "Activity Action",
                              });
                      },
                      variant: n,
                      size: c,
                      icon: d,
                      text: o.intl.format(o.t.XWSHTb, {
                          platform: t.name,
                      }),
                      fullWidth: !0,
                  },
                  p,
              ),
          );
}
