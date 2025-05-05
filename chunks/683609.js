n.d(e, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(58642),
    a = n(626135),
    c = n(630388),
    o = n(981631),
    u = n(388032);
function s(t) {
    return null == t
        ? null
        : (0, r.jsx)(i.S89, {
              id: 'on-overlay',
              label: u.intl.string(u.t.rgZKg4),
              action: function () {
                  if (null == t) return;
                  let e = (0, c.x9)(t.getFlags(), o.eHb.OVERLAY_DISABLED);
                  l.h(t.id, t.branchId, e),
                      a.default.track(
                          o.rMx.APPLICATION_SETTINGS_UPDATED,
                          (function (t) {
                              for (var e = 1; e < arguments.length; e++) {
                                  var n = null != arguments[e] ? arguments[e] : {},
                                      r = Object.keys(n);
                                  'function' == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (t) {
                                              return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                          })
                                      )),
                                      r.forEach(function (e) {
                                          var r;
                                          (r = n[e]),
                                              e in t
                                                  ? Object.defineProperty(t, e, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (t[e] = r);
                                      });
                              }
                              return t;
                          })({ overlay_disabled: (0, c.yE)(e, o.eHb.OVERLAY_DISABLED) }, t.getAnalyticsData())
                      );
              },
              checked: t.hasFlag(o.eHb.OVERLAY_DISABLED)
          });
}
