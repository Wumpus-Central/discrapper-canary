n.d(e, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(95015),
    l = n(481060),
    a = n(58642),
    c = n(626135),
    o = n(981631),
    u = n(388032);
function s(t) {
    return null == t
        ? null
        : (0, r.jsx)(l.S89, {
              id: "private",
              label: u.intl.string(u.t.fHDNJv),
              action: function () {
                  if (null == t) return;
                  let e = (0, i.x9)(t.getFlags(), o.eHb.PRIVATE);
                  a.h(t.id, t.branchId, e),
                      c.default.track(
                          o.rMx.APPLICATION_SETTINGS_UPDATED,
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
                          })({ private_enabled: (0, i.yE)(e, o.eHb.PRIVATE) }, t.getAnalyticsData()),
                      );
              },
              checked: t.hasFlag(o.eHb.PRIVATE),
          });
}
