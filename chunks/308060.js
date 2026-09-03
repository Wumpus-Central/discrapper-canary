var n = r(72290);
!(function (e) {
    if (!e.setImmediate) {
        var t,
            r,
            i,
            o,
            a,
            s = 1,
            l = {},
            u = !1,
            c = e.document,
            f = Object.getPrototypeOf && Object.getPrototypeOf(e);
        (f = f && f.setTimeout ? f : e),
            "[object process]" === {}.toString.call(e.process)
                ? (a = function (e) {
                      n.nextTick(function () {
                          p(e);
                      });
                  })
                : (function () {
                        if (e.postMessage && !e.importScripts) {
                            var t = !0,
                                r = e.onmessage;
                            return (
                                (e.onmessage = function () {
                                    t = !1;
                                }),
                                e.postMessage("", "*"),
                                (e.onmessage = r),
                                t
                            );
                        }
                    })()
                  ? ((t = "setImmediate$" + Math.random() + "$"),
                    (r = function (r) {
                        r.source === e &&
                            "string" == typeof r.data &&
                            0 === r.data.indexOf(t) &&
                            p(+r.data.slice(t.length));
                    }),
                    e.addEventListener ? e.addEventListener("message", r, !1) : e.attachEvent("onmessage", r),
                    (a = function (r) {
                        e.postMessage(t + r, "*");
                    }))
                  : e.MessageChannel
                    ? (((i = new MessageChannel()).port1.onmessage = function (e) {
                          p(e.data);
                      }),
                      (a = function (e) {
                          i.port2.postMessage(e);
                      }))
                    : c && "onreadystatechange" in c.createElement("script")
                      ? ((o = c.documentElement),
                        (a = function (e) {
                            var t = c.createElement("script");
                            (t.onreadystatechange = function () {
                                p(e), (t.onreadystatechange = null), o.removeChild(t), (t = null);
                            }),
                                o.appendChild(t);
                        }))
                      : (a = function (e) {
                            setTimeout(p, 0, e);
                        }),
            (f.setImmediate = function (e) {
                "function" != typeof e && (e = Function("" + e));
                for (var t = Array(arguments.length - 1), r = 0; r < t.length; r++) t[r] = arguments[r + 1];
                var n = { callback: e, args: t };
                return (l[s] = n), a(s), s++;
            }),
            (f.clearImmediate = d);
    }
    function d(e) {
        delete l[e];
    }
    function p(e) {
        if (u) setTimeout(p, 0, e);
        else {
            var t = l[e];
            if (t) {
                u = !0;
                try {
                    var r = t.callback,
                        n = t.args;
                    switch (n.length) {
                        case 0:
                            r();
                            break;
                        case 1:
                            r(n[0]);
                            break;
                        case 2:
                            r(n[0], n[1]);
                            break;
                        case 3:
                            r(n[0], n[1], n[2]);
                            break;
                        default:
                            r.apply(void 0, n);
                    }
                } finally {
                    d(e), (u = !1);
                }
            }
        }
    }
})("u" < typeof self ? (void 0 === r.g ? this : r.g) : self);
