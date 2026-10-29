var n = r(948055),
    o = r(724039),
    a = r(389293);
function i(e, t) {
    return t.encode ? (t.strict ? n(e) : encodeURIComponent(e)) : e;
}
((t.extract = function (e) {
    return e.split("?")[1] || "";
}),
    (t.parse = function (e, t) {
        var r = (function (e) {
                var t;
                switch (e.arrayFormat) {
                    case "index":
                        return function (e, r, n) {
                            if (((t = /\[(\d*)\]$/.exec(e)), (e = e.replace(/\[\d*\]$/, "")), !t)) {
                                n[e] = r;
                                return;
                            }
                            (void 0 === n[e] && (n[e] = {}), (n[e][t[1]] = r));
                        };
                    case "bracket":
                        return function (e, r, n) {
                            if (((t = /(\[\])$/.exec(e)), (e = e.replace(/\[\]$/, "")), t)) {
                                if (void 0 === n[e]) {
                                    n[e] = [r];
                                    return;
                                }
                            } else {
                                n[e] = r;
                                return;
                            }
                            n[e] = [].concat(n[e], r);
                        };
                    default:
                        return function (e, t, r) {
                            if (void 0 === r[e]) {
                                r[e] = t;
                                return;
                            }
                            r[e] = [].concat(r[e], t);
                        };
                }
            })((t = o({ arrayFormat: "none" }, t))),
            n = Object.create(null);
        return "string" == typeof e && (e = e.trim().replace(/^(\?|#|&)/, ""))
            ? (e.split("&").forEach(function (e) {
                  var t = e.replace(/\+/g, " ").split("="),
                      o = t.shift(),
                      i = t.length > 0 ? t.join("=") : void 0;
                  ((i = void 0 === i ? null : a(i)), r(a(o), i, n));
              }),
              Object.keys(n)
                  .sort()
                  .reduce(function (e, t) {
                      var r = n[t];
                      return (
                          r && "object" == typeof r && !Array.isArray(r)
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
                                })(r))
                              : (e[t] = r),
                          e
                      );
                  }, Object.create(null)))
            : n;
    }),
    (t.stringify = function (e, t) {
        var r = (function (e) {
            switch (e.arrayFormat) {
                case "index":
                    return function (t, r, n) {
                        return null === r
                            ? [i(t, e), "[", n, "]"].join("")
                            : [i(t, e), "[", i(n, e), "]=", i(r, e)].join("");
                    };
                case "bracket":
                    return function (t, r) {
                        return null === r ? i(t, e) : [i(t, e), "[]=", i(r, e)].join("");
                    };
                default:
                    return function (t, r) {
                        return null === r ? i(t, e) : [i(t, e), "=", i(r, e)].join("");
                    };
            }
        })((t = o({ encode: !0, strict: !0, arrayFormat: "none" }, t)));
        return e
            ? Object.keys(e)
                  .sort()
                  .map(function (n) {
                      var o = e[n];
                      if (void 0 === o) return "";
                      if (null === o) return i(n, t);
                      if (Array.isArray(o)) {
                          var a = [];
                          return (
                              o.slice().forEach(function (e) {
                                  void 0 !== e && a.push(r(n, e, a.length));
                              }),
                              a.join("&")
                          );
                      }
                      return i(n, t) + "=" + i(o, t);
                  })
                  .filter(function (e) {
                      return e.length > 0;
                  })
                  .join("&")
            : "";
    }));
