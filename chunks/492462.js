var n = r(948055),
    i = r(724039),
    o = r(389293);
function a(e, t) {
    return t.encode ? (t.strict ? n(e) : encodeURIComponent(e)) : e;
}
((t.qg = function (e, t) {
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
        })((t = i({ arrayFormat: "none" }, t))),
        n = Object.create(null);
    return "string" == typeof e && (e = e.trim().replace(/^(\?|#|&)/, ""))
        ? (e.split("&").forEach(function (e) {
              var t = e.replace(/\+/g, " ").split("="),
                  i = t.shift(),
                  a = t.length > 0 ? t.join("=") : void 0;
              ((a = void 0 === a ? null : o(a)), r(o(i), a, n));
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
    (t.As = function (e, t) {
        var r = (function (e) {
            switch (e.arrayFormat) {
                case "index":
                    return function (t, r, n) {
                        return null === r
                            ? [a(t, e), "[", n, "]"].join("")
                            : [a(t, e), "[", a(n, e), "]=", a(r, e)].join("");
                    };
                case "bracket":
                    return function (t, r) {
                        return null === r ? a(t, e) : [a(t, e), "[]=", a(r, e)].join("");
                    };
                default:
                    return function (t, r) {
                        return null === r ? a(t, e) : [a(t, e), "=", a(r, e)].join("");
                    };
            }
        })((t = i({ encode: !0, strict: !0, arrayFormat: "none" }, t)));
        return e
            ? Object.keys(e)
                  .sort()
                  .map(function (n) {
                      var i = e[n];
                      if (void 0 === i) return "";
                      if (null === i) return a(n, t);
                      if (Array.isArray(i)) {
                          var o = [];
                          return (
                              i.slice().forEach(function (e) {
                                  void 0 !== e && o.push(r(n, e, o.length));
                              }),
                              o.join("&")
                          );
                      }
                      return a(n, t) + "=" + a(i, t);
                  })
                  .filter(function (e) {
                      return e.length > 0;
                  })
                  .join("&")
            : "";
    }));
