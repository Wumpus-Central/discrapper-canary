var t = Object.getOwnPropertySymbols,
    r = Object.prototype.hasOwnProperty,
    n = Object.prototype.propertyIsEnumerable;
e.exports = !(function () {
    try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
        for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
        var n = Object.getOwnPropertyNames(t).map(function (e) {
            return t[e];
        });
        if ("0123456789" !== n.join("")) return !1;
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
              var o,
                  a,
                  s = (function (e) {
                      if (null == e) throw TypeError("Object.assign cannot be called with null or undefined");
                      return Object(e);
                  })(e),
                  l = 1;
              l < arguments.length;
              l++
          ) {
              for (var u in (o = Object(arguments[l]))) r.call(o, u) && (s[u] = o[u]);
              if (t) {
                  a = t(o);
                  for (var c = 0; c < a.length; c++) n.call(o, a[c]) && (s[a[c]] = o[a[c]]);
              }
          }
          return s;
      }
    : Object.assign;
