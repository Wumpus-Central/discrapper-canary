var r = n(72290);
!(function (e) {
    "use strict";
    if (!e.setImmediate) {
        var t,
            n,
            i,
            s,
            a,
            o = 1,
            l = {},
            u = !1,
            d = e.document,
            c = Object.getPrototypeOf && Object.getPrototypeOf(e);
        (c = c && c.setTimeout ? c : e),
            "[object process]" === {}.toString.call(e.process)
                ? (a = function (e) {
                      r.nextTick(function () {
                          f(e);
                      });
                  })
                : (function () {
                        if (e.postMessage && !e.importScripts) {
                            var t = !0,
                                n = e.onmessage;
                            return (
                                (e.onmessage = function () {
                                    t = !1;
                                }),
                                e.postMessage("", "*"),
                                (e.onmessage = n),
                                t
                            );
                        }
                    })()
                  ? ((t = "setImmediate$" + Math.random() + "$"),
                    (n = function (n) {
                        n.source === e &&
                            "string" == typeof n.data &&
                            0 === n.data.indexOf(t) &&
                            f(+n.data.slice(t.length));
                    }),
                    e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n),
                    (a = function (n) {
                        e.postMessage(t + n, "*");
                    }))
                  : e.MessageChannel
                    ? (((i = new MessageChannel()).port1.onmessage = function (e) {
                          f(e.data);
                      }),
                      (a = function (e) {
                          i.port2.postMessage(e);
                      }))
                    : d && "onreadystatechange" in d.createElement("script")
                      ? ((s = d.documentElement),
                        (a = function (e) {
                            var t = d.createElement("script");
                            (t.onreadystatechange = function () {
                                f(e), (t.onreadystatechange = null), s.removeChild(t), (t = null);
                            }),
                                s.appendChild(t);
                        }))
                      : (a = function (e) {
                            setTimeout(f, 0, e);
                        }),
            (c.setImmediate = function (e) {
                "function" != typeof e && (e = Function("" + e));
                for (var t = Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                var r = { callback: e, args: t };
                return (l[o] = r), a(o), o++;
            }),
            (c.clearImmediate = _);
    }
    function _(e) {
        delete l[e];
    }
    function f(e) {
        if (u) setTimeout(f, 0, e);
        else {
            var t = l[e];
            if (t) {
                u = !0;
                try {
                    var n = t.callback,
                        r = t.args;
                    switch (r.length) {
                        case 0:
                            n();
                            break;
                        case 1:
                            n(r[0]);
                            break;
                        case 2:
                            n(r[0], r[1]);
                            break;
                        case 3:
                            n(r[0], r[1], r[2]);
                            break;
                        default:
                            n.apply(void 0, r);
                    }
                } finally {
                    _(e), (u = !1);
                }
            }
        }
    }
})("u" < typeof self ? (void 0 === n.g ? this : n.g) : self);
