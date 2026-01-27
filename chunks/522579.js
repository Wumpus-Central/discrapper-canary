var e =
    e ||
    (function (t) {
        if (!("u" > typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
            var e = t.document,
                n = function () {
                    return t.URL || t.webkitURL || t;
                },
                r = e.createElementNS("http://www.w3.org/1999/xhtml", "a"),
                o = "download" in r,
                i = function (t) {
                    var e = new MouseEvent("click");
                    t.dispatchEvent(e);
                },
                a = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                s = t.webkitRequestFileSystem,
                l = t.requestFileSystem || s || t.mozRequestFileSystem,
                c = function (e) {
                    (t.setImmediate || t.setTimeout)(function () {
                        throw e;
                    }, 0);
                },
                u = "application/octet-stream",
                d = 0,
                f = function (t) {
                    setTimeout(function () {
                        "string" == typeof t ? n().revokeObjectURL(t) : t.remove();
                    }, 4e4);
                },
                p = function (t, e, n) {
                    for (var r = (e = [].concat(e)).length; r--; ) {
                        var o = t["on" + e[r]];
                        if ("function" == typeof o)
                            try {
                                o.call(t, n || t);
                            } catch (t) {
                                c(t);
                            }
                    }
                },
                h = function (t) {
                    return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)
                        ? new Blob(["\xef\xbb\xbf", t], {
                              type: t.type,
                          })
                        : t;
                },
                y = function (e, c, y) {
                    y || (e = h(e));
                    var b,
                        g,
                        m = this,
                        O = e.type,
                        w = !1,
                        S = function () {
                            p(m, "writestart progress write writeend".split(" "));
                        },
                        v = function () {
                            if (g && a && "u" > typeof FileReader) {
                                var r = new FileReader();
                                (r.onloadend = function () {
                                    var t = r.result;
                                    (g.location.href = "data:attachment/file" + t.slice(t.search(/[,;]/))),
                                        (m.readyState = m.DONE),
                                        S();
                                }),
                                    r.readAsDataURL(e),
                                    (m.readyState = m.INIT);
                                return;
                            }
                            (w || !b) && (b = n().createObjectURL(e)),
                                g
                                    ? (g.location.href = b)
                                    : void 0 === t.open(b, "_blank") && a && (t.location.href = b),
                                (m.readyState = m.DONE),
                                S(),
                                f(b);
                        },
                        E = function (t) {
                            return function () {
                                if (m.readyState !== m.DONE) return t.apply(this, arguments);
                            };
                        },
                        C = {
                            create: !0,
                            exclusive: !1,
                        };
                    if (((m.readyState = m.INIT), c || (c = "download"), o)) {
                        (b = n().createObjectURL(e)),
                            setTimeout(function () {
                                (r.href = b), (r.download = c), i(r), S(), f(b), (m.readyState = m.DONE);
                            });
                        return;
                    }
                    (t.chrome && O && O !== u && ((e = (e.slice || e.webkitSlice).call(e, 0, e.size, u)), (w = !0)),
                    s && "download" !== c && (c += ".download"),
                    (O === u || s) && (g = t),
                    l)
                        ? ((d += e.size),
                          l(
                              t.TEMPORARY,
                              d,
                              E(function (t) {
                                  t.root.getDirectory(
                                      "saved",
                                      C,
                                      E(function (t) {
                                          var n = function () {
                                              t.getFile(
                                                  c,
                                                  C,
                                                  E(function (t) {
                                                      t.createWriter(
                                                          E(function (n) {
                                                              (n.onwriteend = function (e) {
                                                                  (g.location.href = t.toURL()),
                                                                      (m.readyState = m.DONE),
                                                                      p(m, "writeend", e),
                                                                      f(t);
                                                              }),
                                                                  (n.onerror = function () {
                                                                      var t = n.error;
                                                                      t.code !== t.ABORT_ERR && v();
                                                                  }),
                                                                  "writestart progress write abort"
                                                                      .split(" ")
                                                                      .forEach(function (t) {
                                                                          n["on" + t] = m["on" + t];
                                                                      }),
                                                                  n.write(e),
                                                                  (m.abort = function () {
                                                                      n.abort(), (m.readyState = m.DONE);
                                                                  }),
                                                                  (m.readyState = m.WRITING);
                                                          }),
                                                          v,
                                                      );
                                                  }),
                                                  v,
                                              );
                                          };
                                          t.getFile(
                                              c,
                                              {
                                                  create: !1,
                                              },
                                              E(function (t) {
                                                  t.remove(), n();
                                              }),
                                              E(function (t) {
                                                  t.code === t.NOT_FOUND_ERR ? n() : v();
                                              }),
                                          );
                                      }),
                                      v,
                                  );
                              }),
                              v,
                          ))
                        : v();
                },
                b = y.prototype;
            return "u" > typeof navigator && navigator.msSaveOrOpenBlob
                ? function (t, e, n) {
                      return n || (t = h(t)), navigator.msSaveOrOpenBlob(t, e || "download");
                  }
                : ((b.abort = function () {
                      (this.readyState = this.DONE), p(this, "abort");
                  }),
                  (b.readyState = b.INIT = 0),
                  (b.WRITING = 1),
                  (b.DONE = 2),
                  (b.error = b.onwritestart = b.onprogress = b.onwrite = b.onabort = b.onerror = b.onwriteend = null),
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
