"use strict";
var t = Object.getOwnPropertySymbols,
    n = Object.prototype.hasOwnProperty,
    r = Object.prototype.propertyIsEnumerable;
function i(e) {
    if (null == e) throw TypeError("Object.assign cannot be called with null or undefined");
    return Object(e);
}
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
    ? function (e, a) {
          for (var s, o, l = i(e), u = 1; u < arguments.length; u++) {
              for (var c in (s = Object(arguments[u]))) n.call(s, c) && (l[c] = s[c]);
              if (t) {
                  o = t(s);
                  for (var d = 0; d < o.length; d++) r.call(s, o[d]) && (l[o[d]] = s[o[d]]);
              }
          }
          return l;
      }
    : Object.assign;
