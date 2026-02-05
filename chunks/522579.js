var t =
    t ||
    (function (e) {
        "use strict";
        if (!("u" > typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
            var t = e.document,
                r = function () {
                    return e.URL || e.webkitURL || e;
                },
                n = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
                o = "download" in n,
                i = function (e) {
                    var t = new MouseEvent("click");
                    e.dispatchEvent(t);
                },
                a = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                s = e.webkitRequestFileSystem,
                c = e.requestFileSystem || s || e.mozRequestFileSystem,
                u = function (t) {
                    (e.setImmediate || e.setTimeout)(function () {
                        throw t;
                    }, 0);
                },
                d = "application/octet-stream",
                p = 0,
                f = function (e) {
                    setTimeout(function () {
                        "string" == typeof e ? r().revokeObjectURL(e) : e.remove();
                    }, 4e4);
                },
                l = function (e, t, r) {
                    for (var n = (t = [].concat(t)).length; n--; ) {
                        var o = e["on" + t[n]];
                        if ("function" == typeof o)
                            try {
                                o.call(e, r || e);
                            } catch (e) {
                                u(e);
                            }
                    }
                },
                h = function (e) {
                    return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)
                        ? new Blob(["\xef\xbb\xbf", e], { type: e.type })
                        : e;
                },
                v = function (t, u, v) {
                    v || (t = h(t));
                    var y,
                        g,
                        b = this,
                        m = t.type,
                        w = !1,
                        D = function () {
                            l(b, "writestart progress write writeend".split(" "));
                        },
                        S = function () {
                            if (g && a && "u" > typeof FileReader) {
                                var n = new FileReader();
                                (n.onloadend = function () {
                                    var e = n.result;
                                    (g.location.href = "data:attachment/file" + e.slice(e.search(/[,;]/))),
                                        (b.readyState = b.DONE),
                                        D();
                                }),
                                    n.readAsDataURL(t),
                                    (b.readyState = b.INIT);
                                return;
                            }
                            (w || !y) && (y = r().createObjectURL(t)),
                                g
                                    ? (g.location.href = y)
                                    : void 0 === e.open(y, "_blank") && a && (e.location.href = y),
                                (b.readyState = b.DONE),
                                D(),
                                f(y);
                        },
                        k = function (e) {
                            return function () {
                                if (b.readyState !== b.DONE) return e.apply(this, arguments);
                            };
                        },
                        O = { create: !0, exclusive: !1 };
                    if (((b.readyState = b.INIT), u || (u = "download"), o)) {
                        (y = r().createObjectURL(t)),
                            setTimeout(function () {
                                (n.href = y), (n.download = u), i(n), D(), f(y), (b.readyState = b.DONE);
                            });
                        return;
                    }
                    (e.chrome && m && m !== d && ((t = (t.slice || t.webkitSlice).call(t, 0, t.size, d)), (w = !0)),
                    s && "download" !== u && (u += ".download"),
                    (m === d || s) && (g = e),
                    c)
                        ? ((p += t.size),
                          c(
                              e.TEMPORARY,
                              p,
                              k(function (e) {
                                  e.root.getDirectory(
                                      "saved",
                                      O,
                                      k(function (e) {
                                          var r = function () {
                                              e.getFile(
                                                  u,
                                                  O,
                                                  k(function (e) {
                                                      e.createWriter(
                                                          k(function (r) {
                                                              (r.onwriteend = function (t) {
                                                                  (g.location.href = e.toURL()),
                                                                      (b.readyState = b.DONE),
                                                                      l(b, "writeend", t),
                                                                      f(e);
                                                              }),
                                                                  (r.onerror = function () {
                                                                      var e = r.error;
                                                                      e.code !== e.ABORT_ERR && S();
                                                                  }),
                                                                  "writestart progress write abort"
                                                                      .split(" ")
                                                                      .forEach(function (e) {
                                                                          r["on" + e] = b["on" + e];
                                                                      }),
                                                                  r.write(t),
                                                                  (b.abort = function () {
                                                                      r.abort(), (b.readyState = b.DONE);
                                                                  }),
                                                                  (b.readyState = b.WRITING);
                                                          }),
                                                          S,
                                                      );
                                                  }),
                                                  S,
                                              );
                                          };
                                          e.getFile(
                                              u,
                                              { create: !1 },
                                              k(function (e) {
                                                  e.remove(), r();
                                              }),
                                              k(function (e) {
                                                  e.code === e.NOT_FOUND_ERR ? r() : S();
                                              }),
                                          );
                                      }),
                                      S,
                                  );
                              }),
                              S,
                          ))
                        : S();
                },
                y = v.prototype;
            return "u" > typeof navigator && navigator.msSaveOrOpenBlob
                ? function (e, t, r) {
                      return r || (e = h(e)), navigator.msSaveOrOpenBlob(e, t || "download");
                  }
                : ((y.abort = function () {
                      (this.readyState = this.DONE), l(this, "abort");
                  }),
                  (y.readyState = y.INIT = 0),
                  (y.WRITING = 1),
                  (y.DONE = 2),
                  (y.error = y.onwritestart = y.onprogress = y.onwrite = y.onabort = y.onerror = y.onwriteend = null),
                  function (e, t, r) {
                      return new v(e, t, r);
                  });
        }
    })(("u" > typeof self && self) || ("u" > typeof window && window) || this.content);
e.exports
    ? (e.exports.saveAs = t)
    : "u" > typeof define &&
      null !== define &&
      null !== define.amd &&
      define([], function () {
          return t;
      });
