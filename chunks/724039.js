"use strict";
var t = Object.getOwnPropertySymbols,
    n = Object.prototype.hasOwnProperty,
    r = Object.prototype.propertyIsEnumerable;
e.exports = !(function () {
    try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
        var r = Object.getOwnPropertyNames(t).map(function (e) {
            return t[e];
        });
        if ("0123456789" !== r.join("")) return !1;
        var i = {};
        if (
            ("abcdefghijklmnopqrst".split("").forEach(function (e) {
                i[e] = e;
            }),
            "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, i)).join(""))
        )
            return !1;
        return !0;
    } catch (e) {
        return !1;
    }
})()
    ? function (e, i) {
          for (
              var s,
                  a,
                  o = (function (e) {
                      if (null == e) throw TypeError("Object.assign cannot be called with null or undefined");
                      return Object(e);
                  })(e),
                  l = 1;
              l < arguments.length;
              l++
          ) {
              for (var u in (s = Object(arguments[l]))) n.call(s, u) && (o[u] = s[u]);
              if (t) {
                  a = t(s);
                  for (var d = 0; d < a.length; d++) r.call(s, a[d]) && (o[a[d]] = s[a[d]]);
              }
          }
          return o;
      }
    : Object.assign;
