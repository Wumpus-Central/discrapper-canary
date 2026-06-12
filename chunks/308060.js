var i = n(72290);
!(function (e) {
    "use strict";
    if (!e.setImmediate) {
        var t,
            n,
            r,
            s,
            a,
            o = 1,
            l = {},
            u = !1,
            c = e.document,
            d = Object.getPrototypeOf && Object.getPrototypeOf(e);
        (d = d && d.setTimeout ? d : e),
            "[object process]" === {}.toString.call(e.process)
                ? (a = function (e) {
                      i.nextTick(function () {
                          h(e);
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
                            h(+n.data.slice(t.length));
                    }),
                    e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n),
                    (a = function (n) {
                        e.postMessage(t + n, "*");
                    }))
                  : e.MessageChannel
                    ? (((r = new MessageChannel()).port1.onmessage = function (e) {
                          h(e.data);
                      }),
                      (a = function (e) {
                          r.port2.postMessage(e);
                      }))
                    : c && "onreadystatechange" in c.createElement("script")
                      ? ((s = c.documentElement),
                        (a = function (e) {
                            var t = c.createElement("script");
                            (t.onreadystatechange = function () {
                                h(e), (t.onreadystatechange = null), s.removeChild(t), (t = null);
                            }),
                                s.appendChild(t);
                        }))
                      : (a = function (e) {
                            setTimeout(h, 0, e);
                        }),
            (d.setImmediate = function (e) {
                "function" != typeof e && (e = Function("" + e));
                for (var t = Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                var i = { callback: e, args: t };
                return (l[o] = i), a(o), o++;
            }),
            (d.clearImmediate = _);
    }
    function _(e) {
        delete l[e];
    }
    function h(e) {
        if (u) setTimeout(h, 0, e);
        else {
            var t = l[e];
            if (t) {
                u = !0;
                try {
                    var n = t.callback,
                        i = t.args;
                    switch (i.length) {
                        case 0:
                            n();
                            break;
                        case 1:
                            n(i[0]);
                            break;
                        case 2:
                            n(i[0], i[1]);
                            break;
                        case 3:
                            n(i[0], i[1], i[2]);
                            break;
                        default:
                            n.apply(void 0, i);
                    }
                } finally {
                    _(e), (u = !1);
                }
            }
        }
    }
})("u" < typeof self ? (void 0 === n.g ? this : n.g) : self);
