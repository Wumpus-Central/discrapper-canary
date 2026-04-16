var r = n(72290);
!(function (e) {
    "use strict";
    if (!e.setImmediate) {
        var t,
            n = 1,
            i = {},
            s = !1,
            a = e.document,
            o = Object.getPrototypeOf && Object.getPrototypeOf(e);
        (o = o && o.setTimeout ? o : e),
            "[object process]" === {}.toString.call(e.process)
                ? _()
                : f()
                  ? p()
                  : e.MessageChannel
                    ? h()
                    : a && "onreadystatechange" in a.createElement("script")
                      ? m()
                      : E(),
            (o.setImmediate = l),
            (o.clearImmediate = u);
    }
    function l(e) {
        "function" != typeof e && (e = Function("" + e));
        for (var r = Array(arguments.length - 1), s = 0; s < r.length; s++) r[s] = arguments[s + 1];
        var a = { callback: e, args: r };
        return (i[n] = a), t(n), n++;
    }
    function u(e) {
        delete i[e];
    }
    function c(e) {
        var t = e.callback,
            n = e.args;
        switch (n.length) {
            case 0:
                t();
                break;
            case 1:
                t(n[0]);
                break;
            case 2:
                t(n[0], n[1]);
                break;
            case 3:
                t(n[0], n[1], n[2]);
                break;
            default:
                t.apply(void 0, n);
        }
    }
    function d(e) {
        if (s) setTimeout(d, 0, e);
        else {
            var t = i[e];
            if (t) {
                s = !0;
                try {
                    c(t);
                } finally {
                    u(e), (s = !1);
                }
            }
        }
    }
    function _() {
        t = function (e) {
            r.nextTick(function () {
                d(e);
            });
        };
    }
    function f() {
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
    }
    function p() {
        var n = "setImmediate$" + Math.random() + "$",
            r = function (t) {
                t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(n) && d(+t.data.slice(n.length));
            };
        e.addEventListener ? e.addEventListener("message", r, !1) : e.attachEvent("onmessage", r),
            (t = function (t) {
                e.postMessage(n + t, "*");
            });
    }
    function h() {
        var e = new MessageChannel();
        (e.port1.onmessage = function (e) {
            d(e.data);
        }),
            (t = function (t) {
                e.port2.postMessage(t);
            });
    }
    function m() {
        var e = a.documentElement;
        t = function (t) {
            var n = a.createElement("script");
            (n.onreadystatechange = function () {
                d(t), (n.onreadystatechange = null), e.removeChild(n), (n = null);
            }),
                e.appendChild(n);
        };
    }
    function E() {
        t = function (e) {
            setTimeout(d, 0, e);
        };
    }
})("u" < typeof self ? (void 0 === n.g ? this : n.g) : self);
