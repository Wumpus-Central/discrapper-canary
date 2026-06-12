"use strict";
var i = n(64700),
    r =
        "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
    s = i.useState,
    a = i.useEffect,
    o = i.useLayoutEffect,
    l = i.useDebugValue;
function u(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !r(e, n);
    } catch (e) {
        return !0;
    }
}
var c =
    "u" < typeof window || void 0 === window.document || void 0 === window.document.createElement
        ? function (e, t) {
              return t();
          }
        : function (e, t) {
              var n = t(),
                  i = s({ inst: { value: n, getSnapshot: t } }),
                  r = i[0].inst,
                  c = i[1];
              return (
                  o(
                      function () {
                          (r.value = n), (r.getSnapshot = t), u(r) && c({ inst: r });
                      },
                      [e, n, t],
                  ),
                  a(
                      function () {
                          return (
                              u(r) && c({ inst: r }),
                              e(function () {
                                  u(r) && c({ inst: r });
                              })
                          );
                      },
                      [e],
                  ),
                  l(n),
                  n
              );
          };
t.useSyncExternalStore = void 0 !== i.useSyncExternalStore ? i.useSyncExternalStore : c;
