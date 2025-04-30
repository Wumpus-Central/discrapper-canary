n.d(t, { R: () => d });
var r = n(192379),
    i = n(348288);
function o(e, t) {
    return u(e) || c(e, t) || s(e, t) || a();
}
function a() {
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
            o = void 0;
        try {
            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
        } catch (e) {
            (i = !0), (o = e);
        } finally {
            try {
                r || null == s.return || s.return();
            } finally {
                if (i) throw o;
            }
        }
        return n;
    }
}
function u(e) {
    if (Array.isArray(e)) return e;
}
var d = function () {
    var e = o((0, r.useState)(!1), 2),
        t = e[0],
        n = e[1],
        a = (0, r.useContext)(i.L);
    return (
        (0, r.useEffect)(
            function () {
                var e,
                    t = null == a || null == (e = a.dragDropManager) ? void 0 : e.getBackend(),
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
            [a, a.dragDropManager]
        ),
        t
    );
};
