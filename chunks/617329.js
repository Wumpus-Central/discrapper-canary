r.d(n, {
    R: function () {
        return f;
    }
});
var i = r(192379),
    a = r(348288);
function o(e, n) {
    return d(e) || c(e, n) || l(e, n) || s();
}
function s() {
    throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function l(e, n) {
    if (e) {
        if ('string' == typeof e) return u(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
        if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u(e, n);
    }
}
function u(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var r = 0, i = Array(n); r < n; r++) i[r] = e[r];
    return i;
}
function c(e, n) {
    if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
        var r = [],
            i = !0,
            a = !1,
            o = void 0;
        try {
            for (var s, l = e[Symbol.iterator](); !(i = (s = l.next()).done) && (r.push(s.value), !n || r.length !== n); i = !0);
        } catch (e) {
            (a = !0), (o = e);
        } finally {
            try {
                !i && null != l.return && l.return();
            } finally {
                if (a) throw o;
            }
        }
        return r;
    }
}
function d(e) {
    if (Array.isArray(e)) return e;
}
var f = function () {
    var e = o((0, i.useState)(!1), 2),
        n = e[0],
        r = e[1],
        s = (0, i.useContext)(a.L);
    return (
        (0, i.useEffect)(
            function () {
                var e,
                    n = null == s ? void 0 : null === (e = s.dragDropManager) || void 0 === e ? void 0 : e.getBackend(),
                    i = {
                        backendChanged: function (e) {
                            r(e.previewEnabled());
                        }
                    };
                return (
                    r(n.previewEnabled()),
                    n.previewsList().register(i),
                    function () {
                        n.previewsList().unregister(i);
                    }
                );
            },
            [s, s.dragDropManager]
        ),
        n
    );
};
