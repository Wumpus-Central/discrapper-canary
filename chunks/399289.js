n.d(e, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(665260),
    l = n(397927),
    a = n(59636),
    c = n(954571),
    o = n(652215),
    u = n(985018);

function d(t) {
    return null == t
        ? null
        : (0, r.jsx)(l.sLh, {
              id: "private",
              label: u.intl.string(u.t.fHDNJv),
              action: function () {
                  if (null == t) return;
                  let e = (0, i.PQ)(t.getFlags(), o.hM6.PRIVATE);
                  a.V(t.id, t.branchId, e),
                      c.default.track(
                          o.HAw.APPLICATION_SETTINGS_UPDATED,
                          (function (t) {
                              for (var e = 1; e < arguments.length; e++) {
                                  var n = null != arguments[e] ? arguments[e] : {},
                                      r = Object.keys(n);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (t) {
                                              return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                          }),
                                      )),
                                      r.forEach(function (e) {
                                          var r;
                                          (r = n[e]),
                                              e in t
                                                  ? Object.defineProperty(t, e, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (t[e] = r);
                                      });
                              }
                              return t;
                          })(
                              {
                                  private_enabled: (0, i.Lt)(e, o.hM6.PRIVATE),
                              },
                              t.getAnalyticsData(),
                          ),
                      );
              },
              checked: t.hasFlag(o.hM6.PRIVATE),
          });
}
