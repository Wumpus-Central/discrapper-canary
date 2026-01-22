var r = n(72290);
!(function (e, t) {
    if (!e.setImmediate) {
        var n,
            i = 1,
            a = {},
            s = !1,
            o = e.document,
            l = Object.getPrototypeOf && Object.getPrototypeOf(e);
        (l = l && l.setTimeout ? l : e),
            "[object process]" === {}.toString.call(e.process)
                ? p()
                : _()
                  ? h()
                  : e.MessageChannel
                    ? m()
                    : o && "onreadystatechange" in o.createElement("script")
                      ? g()
                      : E(),
            (l.setImmediate = c),
            (l.clearImmediate = u);
    }
    function c(e) {
        "function" != typeof e && (e = Function("" + e));
        for (var t = Array(arguments.length - 1), r = 0; r < t.length; r++) t[r] = arguments[r + 1];
        var s = {
            callback: e,
            args: t,
        };
        return (a[i] = s), n(i), i++;
    }
    function u(e) {
        delete a[e];
    }
    function d(e) {
        var n = e.callback,
            r = e.args;
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
                n.apply(t, r);
        }
    }
    function f(e) {
        if (s) setTimeout(f, 0, e);
        else {
            var t = a[e];
            if (t) {
                s = !0;
                try {
                    d(t);
                } finally {
                    u(e), (s = !1);
                }
            }
        }
    }
    function p() {
        n = function (e) {
            r.nextTick(function () {
                f(e);
            });
        };
    }
    function _() {
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
    function h() {
        var t = "setImmediate$" + Math.random() + "$",
            r = function (n) {
                n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && f(+n.data.slice(t.length));
            };
        e.addEventListener ? e.addEventListener("message", r, !1) : e.attachEvent("onmessage", r),
            (n = function (n) {
                e.postMessage(t + n, "*");
            });
    }
    function m() {
        var e = new MessageChannel();
        (e.port1.onmessage = function (e) {
            f(e.data);
        }),
            (n = function (t) {
                e.port2.postMessage(t);
            });
    }
    function g() {
        var e = o.documentElement;
        n = function (t) {
            var n = o.createElement("script");
            (n.onreadystatechange = function () {
                f(t), (n.onreadystatechange = null), e.removeChild(n), (n = null);
            }),
                e.appendChild(n);
        };
    }
    function E() {
        n = function (e) {
            setTimeout(f, 0, e);
        };
    }
})("u" < typeof self ? (void 0 === n.g ? this : n.g) : self);
