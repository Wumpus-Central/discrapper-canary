"use strict";
var t = Object.getOwnPropertySymbols,
    n = Object.prototype.hasOwnProperty,
    i = Object.prototype.propertyIsEnumerable;
e.exports = !(function () {
    try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
        var i = Object.getOwnPropertyNames(t).map(function (e) {
            return t[e];
        });
        if ("0123456789" !== i.join("")) return !1;
        var r = {};
        if (
            ("abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e;
            }),
            "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, r)).join(""))
        )
            return !1;
        return !0;
    } catch (e) {
        return !1;
    }
})()
    ? function (e, r) {
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
                  for (var c = 0; c < a.length; c++) i.call(s, a[c]) && (o[a[c]] = s[a[c]]);
              }
          }
          return o;
      }
    : Object.assign;
