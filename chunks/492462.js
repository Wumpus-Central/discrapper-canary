"use strict";
var i = n(948055),
    r = n(724039),
    s = n(389293);
function a(e, t) {
    return t.encode ? (t.strict ? i(e) : encodeURIComponent(e)) : e;
}
(t.extract = function (e) {
    return e.split("?")[1] || "";
}),
    (t.parse = function (e, t) {
        var n = (function (e) {
                var t;
                switch (e.arrayFormat) {
                    case "index":
                        return function (e, n, i) {
                            if (((t = /\[(\d*)\]$/.exec(e)), (e = e.replace(/\[\d*\]$/, "")), !t)) {
                                i[e] = n;
                                return;
                            }
                            void 0 === i[e] && (i[e] = {}), (i[e][t[1]] = n);
                        };
                    case "bracket":
                        return function (e, n, i) {
                            if (((t = /(\[\])$/.exec(e)), (e = e.replace(/\[\]$/, "")), t)) {
                                if (void 0 === i[e]) {
                                    i[e] = [n];
                                    return;
                                }
                            } else {
                                i[e] = n;
                                return;
                            }
                            i[e] = [].concat(i[e], n);
                        };
                    default:
                        return function (e, t, n) {
                            if (void 0 === n[e]) {
                                n[e] = t;
                                return;
                            }
                            n[e] = [].concat(n[e], t);
                        };
                }
            })((t = r({ arrayFormat: "none" }, t))),
            i = Object.create(null);
        return "string" == typeof e && (e = e.trim().replace(/^(\?|#|&)/, ""))
            ? (e.split("&").forEach(function (e) {
                  var t = e.replace(/\+/g, " ").split("="),
                      r = t.shift(),
                      a = t.length > 0 ? t.join("=") : void 0;
                  (a = void 0 === a ? null : s(a)), n(s(r), a, i);
              }),
              Object.keys(i)
                  .sort()
                  .reduce(function (e, t) {
                      var n = i[t];
                      return (
                          n && "object" == typeof n && !Array.isArray(n)
                              ? (e[t] = (function e(t) {
                                    return Array.isArray(t)
                                        ? t.sort()
                                        : "object" == typeof t
                                          ? e(Object.keys(t))
                                                .sort(function (e, t) {
                                                    return Number(e) - Number(t);
                                                })
                                                .map(function (e) {
                                                    return t[e];
                                                })
                                          : t;
                                })(n))
                              : (e[t] = n),
                          e
                      );
                  }, Object.create(null)))
            : i;
    }),
    (t.stringify = function (e, t) {
        var n = (function (e) {
            switch (e.arrayFormat) {
                case "index":
                    return function (t, n, i) {
                        return null === n
                            ? [a(t, e), "[", i, "]"].join("")
                            : [a(t, e), "[", a(i, e), "]=", a(n, e)].join("");
                    };
                case "bracket":
                    return function (t, n) {
                        return null === n ? a(t, e) : [a(t, e), "[]=", a(n, e)].join("");
                    };
                default:
                    return function (t, n) {
                        return null === n ? a(t, e) : [a(t, e), "=", a(n, e)].join("");
                    };
            }
        })((t = r({ encode: !0, strict: !0, arrayFormat: "none" }, t)));
        return e
            ? Object.keys(e)
                  .sort()
                  .map(function (i) {
                      var r = e[i];
                      if (void 0 === r) return "";
                      if (null === r) return a(i, t);
                      if (Array.isArray(r)) {
                          var s = [];
                          return (
                              r.slice().forEach(function (e) {
                                  void 0 !== e && s.push(n(i, e, s.length));
                              }),
                              s.join("&")
                          );
                      }
                      return a(i, t) + "=" + a(r, t);
                  })
                  .filter(function (e) {
                      return e.length > 0;
                  })
                  .join("&")
            : "";
    });
