n.d(t, { R: () => d });
var i = n(192379),
    r = n(348288);
function a(e, t) {
    return c(e) || u(e, t) || o(e, t) || s();
}
function s() {
    throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function o(e, t) {
    if (e) {
        if ('string' == typeof e) return l(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t);
    }
}
function l(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i;
}
function u(e, t) {
    if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
        var n = [],
            i = !0,
            r = !1,
            a = void 0;
        try {
            for (var s, o = e[Symbol.iterator](); !(i = (s = o.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
        } catch (e) {
            (r = !0), (a = e);
        } finally {
            try {
                i || null == o.return || o.return();
            } finally {
                if (r) throw a;
            }
        }
        return n;
    }
}
function c(e) {
    if (Array.isArray(e)) return e;
}
var d = function () {
    var e = a((0, i.useState)(!1), 2),
        t = e[0],
        n = e[1],
        s = (0, i.useContext)(r.L);
    return (
        (0, i.useEffect)(
            function () {
                var e,
                    t = null == s ? void 0 : null === (e = s.dragDropManager) || void 0 === e ? void 0 : e.getBackend(),
                    i = {
                        backendChanged: function (e) {
                            n(e.previewEnabled());
                        }
                    };
                return (
                    n(t.previewEnabled()),
                    t.previewsList().register(i),
                    function () {
                        t.previewsList().unregister(i);
                    }
                );
            },
            [s, s.dragDropManager]
        ),
        t
    );
};
