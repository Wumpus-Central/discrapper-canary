var i = r(444675);
!(function (e, n) {
    if (!e.setImmediate) {
        var r,
            a = 1,
            o = {},
            s = !1,
            l = e.document;
        var u = Object.getPrototypeOf && Object.getPrototypeOf(e);
        (u = u && u.setTimeout ? u : e), '[object process]' === {}.toString.call(e.process) ? h() : _() ? m() : e.MessageChannel ? g() : l && 'onreadystatechange' in l.createElement('script') ? E() : v(), (u.setImmediate = c), (u.clearImmediate = d);
    }
    function c(e) {
        'function' != typeof e && (e = Function('' + e));
        for (var n = Array(arguments.length - 1), i = 0; i < n.length; i++) n[i] = arguments[i + 1];
        var s = {
            callback: e,
            args: n
        };
        return (o[a] = s), r(a), a++;
    }
    function d(e) {
        delete o[e];
    }
    function f(e) {
        var r = e.callback,
            i = e.args;
        switch (i.length) {
            case 0:
                r();
                break;
            case 1:
                r(i[0]);
                break;
            case 2:
                r(i[0], i[1]);
                break;
            case 3:
                r(i[0], i[1], i[2]);
                break;
            default:
                r.apply(n, i);
        }
    }
    function p(e) {
        if (s) setTimeout(p, 0, e);
        else {
            var n = o[e];
            if (n) {
                s = !0;
                try {
                    f(n);
                } finally {
                    d(e), (s = !1);
                }
            }
        }
    }
    function h() {
        r = function (e) {
            i.nextTick(function () {
                p(e);
            });
        };
    }
    function _() {
        if (e.postMessage && !e.importScripts) {
            var n = !0,
                r = e.onmessage;
            return (
                (e.onmessage = function () {
                    n = !1;
                }),
                e.postMessage('', '*'),
                (e.onmessage = r),
                n
            );
        }
    }
    function m() {
        var n = 'setImmediate$' + Math.random() + '$',
            i = function (r) {
                r.source === e && 'string' == typeof r.data && 0 === r.data.indexOf(n) && p(+r.data.slice(n.length));
            };
        e.addEventListener ? e.addEventListener('message', i, !1) : e.attachEvent('onmessage', i),
            (r = function (r) {
                e.postMessage(n + r, '*');
            });
    }
    function g() {
        var e = new MessageChannel();
        (e.port1.onmessage = function (e) {
            p(e.data);
        }),
            (r = function (n) {
                e.port2.postMessage(n);
            });
    }
    function E() {
        var e = l.documentElement;
        r = function (n) {
            var r = l.createElement('script');
            (r.onreadystatechange = function () {
                p(n), (r.onreadystatechange = null), e.removeChild(r), (r = null);
            }),
                e.appendChild(r);
        };
    }
    function v() {
        r = function (e) {
            setTimeout(p, 0, e);
        };
    }
})('undefined' == typeof self ? (void 0 === r.g ? this : r.g) : self);
