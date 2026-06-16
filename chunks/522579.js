var e =
    e ||
    (function (t) {
        "use strict";
        if (!("u" > typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
            var e = t.document,
                n = function () {
                    return t.URL || t.webkitURL || t;
                },
                o = e.createElementNS("http://www.w3.org/1999/xhtml", "a"),
                r = "download" in o,
                i = function (t) {
                    var e = new MouseEvent("click");
                    t.dispatchEvent(e);
                },
                a = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                c = t.webkitRequestFileSystem,
                u = t.requestFileSystem || c || t.mozRequestFileSystem,
                s = function (e) {
                    (t.setImmediate || t.setTimeout)(function () {
                        throw e;
                    }, 0);
                },
                f = "application/octet-stream",
                d = 0,
                l = function (t) {
                    setTimeout(function () {
                        "string" == typeof t ? n().revokeObjectURL(t) : t.remove();
                    }, 4e4);
                },
                p = function (t, e, n) {
                    for (var o = (e = [].concat(e)).length; o--; ) {
                        var r = t["on" + e[o]];
                        if ("function" == typeof r)
                            try {
                                r.call(t, n || t);
                            } catch (t) {
                                s(t);
                            }
                    }
                },
                w = function (t) {
                    return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)
                        ? new Blob(["\xef\xbb\xbf", t], { type: t.type })
                        : t;
                },
                y = function (e, s, y) {
                    y || (e = w(e));
                    var h,
                        v,
                        S = this,
                        m = e.type,
                        R = !1,
                        O = function () {
                            p(S, "writestart progress write writeend".split(" "));
                        },
                        b = function () {
                            if (v && a && "u" > typeof FileReader) {
                                var o = new FileReader();
                                (o.onloadend = function () {
                                    var t = o.result;
                                    (v.location.href = "data:attachment/file" + t.slice(t.search(/[,;]/))),
                                        (S.readyState = S.DONE),
                                        O();
                                }),
                                    o.readAsDataURL(e),
                                    (S.readyState = S.INIT);
                                return;
                            }
                            (R || !h) && (h = n().createObjectURL(e)),
                                v
                                    ? (v.location.href = h)
                                    : void 0 === t.open(h, "_blank") && a && (t.location.href = h),
                                (S.readyState = S.DONE),
                                O(),
                                l(h);
                        },
                        g = function (t) {
                            return function () {
                                if (S.readyState !== S.DONE) return t.apply(this, arguments);
                            };
                        },
                        E = { create: !0, exclusive: !1 };
                    if (((S.readyState = S.INIT), s || (s = "download"), r)) {
                        (h = n().createObjectURL(e)),
                            setTimeout(function () {
                                (o.href = h), (o.download = s), i(o), O(), l(h), (S.readyState = S.DONE);
                            });
                        return;
                    }
                    (t.chrome && m && m !== f && ((e = (e.slice || e.webkitSlice).call(e, 0, e.size, f)), (R = !0)),
                    c && "download" !== s && (s += ".download"),
                    (m === f || c) && (v = t),
                    u)
                        ? ((d += e.size),
                          u(
                              t.TEMPORARY,
                              d,
                              g(function (t) {
                                  t.root.getDirectory(
                                      "saved",
                                      E,
                                      g(function (t) {
                                          var n = function () {
                                              t.getFile(
                                                  s,
                                                  E,
                                                  g(function (t) {
                                                      t.createWriter(
                                                          g(function (n) {
                                                              (n.onwriteend = function (e) {
                                                                  (v.location.href = t.toURL()),
                                                                      (S.readyState = S.DONE),
                                                                      p(S, "writeend", e),
                                                                      l(t);
                                                              }),
                                                                  (n.onerror = function () {
                                                                      var t = n.error;
                                                                      t.code !== t.ABORT_ERR && b();
                                                                  }),
                                                                  "writestart progress write abort"
                                                                      .split(" ")
                                                                      .forEach(function (t) {
                                                                          n["on" + t] = S["on" + t];
                                                                      }),
                                                                  n.write(e),
                                                                  (S.abort = function () {
                                                                      n.abort(), (S.readyState = S.DONE);
                                                                  }),
                                                                  (S.readyState = S.WRITING);
                                                          }),
                                                          b,
                                                      );
                                                  }),
                                                  b,
                                              );
                                          };
                                          t.getFile(
                                              s,
                                              { create: !1 },
                                              g(function (t) {
                                                  t.remove(), n();
                                              }),
                                              g(function (t) {
                                                  t.code === t.NOT_FOUND_ERR ? n() : b();
                                              }),
                                          );
                                      }),
                                      b,
                                  );
                              }),
                              b,
                          ))
                        : b();
                },
                h = y.prototype;
            return "u" > typeof navigator && navigator.msSaveOrOpenBlob
                ? function (t, e, n) {
                      return n || (t = w(t)), navigator.msSaveOrOpenBlob(t, e || "download");
                  }
                : ((h.abort = function () {
                      (this.readyState = this.DONE), p(this, "abort");
                  }),
                  (h.readyState = h.INIT = 0),
                  (h.WRITING = 1),
                  (h.DONE = 2),
                  (h.error = h.onwritestart = h.onprogress = h.onwrite = h.onabort = h.onerror = h.onwriteend = null),
                  function (t, e, n) {
                      return new y(t, e, n);
                  });
        }
    })(("u" > typeof self && self) || ("u" > typeof window && window) || this.content);
t.exports
    ? (t.exports.saveAs = e)
    : "u" > typeof define &&
      null !== define &&
      null !== define.amd &&
      define([], function () {
          return e;
      });
