n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(58642),
    a = n(626135),
    c = n(630388),
    o = n(981631),
    u = n(388032);
function s(e) {
    return null == e
        ? null
        : (0, r.jsx)(i.S89, {
              id: 'private',
              label: u.NW.string(u.t.fHDNJi),
              action: function () {
                  if (null == e) return;
                  let t = (0, c.x9)(e.getFlags(), o.eHb.PRIVATE);
                  l.h(e.id, e.branchId, t),
                      a.default.track(
                          o.rMx.APPLICATION_SETTINGS_UPDATED,
                          (function (e) {
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
                                          var r;
                                          (r = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[t] = r);
                                      });
                              }
                              return e;
                          })({ private_enabled: (0, c.yE)(t, o.eHb.PRIVATE) }, e.getAnalyticsData())
                      );
              },
              checked: e.hasFlag(o.eHb.PRIVATE)
          });
}
