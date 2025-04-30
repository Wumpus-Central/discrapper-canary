n.d(t, { R: () => d });
var r = n(73800),
    i = n(136954);
function a(e, t) {
    return u(e) || c(e, t) || s(e, t) || o();
}
function o() {
    throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function s(e, t) {
    if (e) {
        if ('string' == typeof e) return l(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t);
    }
}
function l(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function c(e, t) {
    if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
        var n = [],
            r = !0,
            i = !1,
            a = void 0;
        try {
            for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
        } catch (e) {
            (i = !0), (a = e);
        } finally {
            try {
                r || null == s.return || s.return();
            } finally {
                if (i) throw a;
            }
        }
        return n;
    }
}
function u(e) {
    if (Array.isArray(e)) return e;
}
var d = function () {
    var e = a((0, r.useState)(!1), 2),
        t = e[0],
        n = e[1],
        o = (0, r.useContext)(i.L);
    return (
        (0, r.useEffect)(
            function () {
                var e,
                    t = null == o || null == (e = o.dragDropManager) ? void 0 : e.getBackend(),
                    r = {
                        backendChanged: function (e) {
                            n(e.previewEnabled());
                        }
                    };
                return (
                    n(t.previewEnabled()),
                    t.previewsList().register(r),
                    function () {
                        t.previewsList().unregister(r);
                    }
                );
            },
            [o, o.dragDropManager]
        ),
        t
    );
};
