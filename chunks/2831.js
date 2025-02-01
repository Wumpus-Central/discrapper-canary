var i = n(444675);
!(function (e, t) {
    if (!e.setImmediate) {
        var n,
            r = 1,
            a = {},
            s = !1,
            o = e.document,
            l = Object.getPrototypeOf && Object.getPrototypeOf(e);
        (l = l && l.setTimeout ? l : e), '[object process]' === {}.toString.call(e.process) ? _() : p() ? h() : e.MessageChannel ? m() : o && 'onreadystatechange' in o.createElement('script') ? g() : E(), (l.setImmediate = u), (l.clearImmediate = c);
    }
    function u(e) {
        'function' != typeof e && (e = Function('' + e));
        for (var t = Array(arguments.length - 1), i = 0; i < t.length; i++) t[i] = arguments[i + 1];
        var s = {
            callback: e,
            args: t
        };
        return (a[r] = s), n(r), r++;
    }
    function c(e) {
        delete a[e];
    }
    function d(e) {
        var n = e.callback,
            i = e.args;
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
                n.apply(t, i);
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
                    c(e), (s = !1);
                }
            }
        }
    }
    function _() {
        n = function (e) {
            i.nextTick(function () {
                f(e);
            });
        };
    }
    function p() {
        if (e.postMessage && !e.importScripts) {
            var t = !0,
                n = e.onmessage;
            return (
                (e.onmessage = function () {
                    t = !1;
                }),
                e.postMessage('', '*'),
                (e.onmessage = n),
                t
            );
        }
    }
    function h() {
        var t = 'setImmediate$' + Math.random() + '$',
            i = function (n) {
                n.source === e && 'string' == typeof n.data && 0 === n.data.indexOf(t) && f(+n.data.slice(t.length));
            };
        e.addEventListener ? e.addEventListener('message', i, !1) : e.attachEvent('onmessage', i),
            (n = function (n) {
                e.postMessage(t + n, '*');
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
            var n = o.createElement('script');
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
})('undefined' == typeof self ? (void 0 === n.g ? this : n.g) : self);
