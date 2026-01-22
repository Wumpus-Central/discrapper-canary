var t =
    t ||
    (function (e) {
        if (!("u" > typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
            var t = e.document,
                n = function () {
                    return e.URL || e.webkitURL || e;
                },
                r = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
                i = "download" in r,
                a = function (e) {
                    var t = new MouseEvent("click");
                    e.dispatchEvent(t);
                },
                s = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                o = e.webkitRequestFileSystem,
                l = e.requestFileSystem || o || e.mozRequestFileSystem,
                c = function (t) {
                    (e.setImmediate || e.setTimeout)(function () {
                        throw t;
                    }, 0);
                },
                u = "application/octet-stream",
                d = 0,
                f = 4e4,
                p = function (e) {
                    setTimeout(function () {
                        "string" == typeof e ? n().revokeObjectURL(e) : e.remove();
                    }, f);
                },
                _ = function (e, t, n) {
                    for (var r = (t = [].concat(t)).length; r--; ) {
                        var i = e["on" + t[r]];
                        if ("function" == typeof i)
                            try {
                                i.call(e, n || e);
                            } catch (e) {
                                c(e);
                            }
                    }
                },
                h = function (e) {
                    return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)
                        ? new Blob(["\xef\xbb\xbf", e], {
                              type: e.type,
                          })
                        : e;
                },
                m = function (t, c, f) {
                    f || (t = h(t));
                    var m,
                        g,
                        E = this,
                        b = t.type,
                        y = !1,
                        O = function () {
                            _(E, "writestart progress write writeend".split(" "));
                        },
                        A = function () {
                            if (g && s && "u" > typeof FileReader) {
                                var r = new FileReader();
                                (r.onloadend = function () {
                                    var e = r.result;
                                    (g.location.href = "data:attachment/file" + e.slice(e.search(/[,;]/))),
                                        (E.readyState = E.DONE),
                                        O();
                                }),
                                    r.readAsDataURL(t),
                                    (E.readyState = E.INIT);
                                return;
                            }
                            (y || !m) && (m = n().createObjectURL(t)),
                                g
                                    ? (g.location.href = m)
                                    : void 0 === e.open(m, "_blank") && s && (e.location.href = m),
                                (E.readyState = E.DONE),
                                O(),
                                p(m);
                        },
                        v = function (e) {
                            return function () {
                                if (E.readyState !== E.DONE) return e.apply(this, arguments);
                            };
                        },
                        S = {
                            create: !0,
                            exclusive: !1,
                        };
                    if (((E.readyState = E.INIT), c || (c = "download"), i)) {
                        (m = n().createObjectURL(t)),
                            setTimeout(function () {
                                (r.href = m), (r.download = c), a(r), O(), p(m), (E.readyState = E.DONE);
                            });
                        return;
                    }
                    (e.chrome && b && b !== u && ((t = (t.slice || t.webkitSlice).call(t, 0, t.size, u)), (y = !0)),
                    o && "download" !== c && (c += ".download"),
                    (b === u || o) && (g = e),
                    l)
                        ? ((d += t.size),
                          l(
                              e.TEMPORARY,
                              d,
                              v(function (e) {
                                  e.root.getDirectory(
                                      "saved",
                                      S,
                                      v(function (e) {
                                          var n = function () {
                                              e.getFile(
                                                  c,
                                                  S,
                                                  v(function (e) {
                                                      e.createWriter(
                                                          v(function (n) {
                                                              (n.onwriteend = function (t) {
                                                                  (g.location.href = e.toURL()),
                                                                      (E.readyState = E.DONE),
                                                                      _(E, "writeend", t),
                                                                      p(e);
                                                              }),
                                                                  (n.onerror = function () {
                                                                      var e = n.error;
                                                                      e.code !== e.ABORT_ERR && A();
                                                                  }),
                                                                  "writestart progress write abort"
                                                                      .split(" ")
                                                                      .forEach(function (e) {
                                                                          n["on" + e] = E["on" + e];
                                                                      }),
                                                                  n.write(t),
                                                                  (E.abort = function () {
                                                                      n.abort(), (E.readyState = E.DONE);
                                                                  }),
                                                                  (E.readyState = E.WRITING);
                                                          }),
                                                          A,
                                                      );
                                                  }),
                                                  A,
                                              );
                                          };
                                          e.getFile(
                                              c,
                                              {
                                                  create: !1,
                                              },
                                              v(function (e) {
                                                  e.remove(), n();
                                              }),
                                              v(function (e) {
                                                  e.code === e.NOT_FOUND_ERR ? n() : A();
                                              }),
                                          );
                                      }),
                                      A,
                                  );
                              }),
                              A,
                          ))
                        : A();
                },
                g = m.prototype,
                E = function (e, t, n) {
                    return new m(e, t, n);
                };
            return "u" > typeof navigator && navigator.msSaveOrOpenBlob
                ? function (e, t, n) {
                      return n || (e = h(e)), navigator.msSaveOrOpenBlob(e, t || "download");
                  }
                : ((g.abort = function () {
                      var e = this;
                      (e.readyState = e.DONE), _(e, "abort");
                  }),
                  (g.readyState = g.INIT = 0),
                  (g.WRITING = 1),
                  (g.DONE = 2),
                  (g.error = g.onwritestart = g.onprogress = g.onwrite = g.onabort = g.onerror = g.onwriteend = null),
                  E);
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
