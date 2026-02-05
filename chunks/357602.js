"use strict";
n.d(t, { H: () => d });
var r = n(64700),
    i = n(75375);
function a(e, t) {
    return c(e) || u(e, t) || o(e, t) || s();
}
function s() {
    throw TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
    );
}
function o(e, t) {
    if (e) {
        if ("string" == typeof e) return l(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n))
            return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t);
    }
}
function l(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function u(e, t) {
    if ("u" > typeof Symbol && Symbol.iterator in Object(e)) {
        var n = [],
            r = !0,
            i = !1,
            a = void 0;
        try {
            for (
                var s, o = e[Symbol.iterator]();
                !(r = (s = o.next()).done) && (n.push(s.value), !t || n.length !== t);
                r = !0
            );
        } catch (e) {
            (i = !0), (a = e);
        } finally {
            try {
                r || null == o.return || o.return();
            } finally {
                if (i) throw a;
            }
        }
        return n;
    }
}
function c(e) {
    if (Array.isArray(e)) return e;
}
var d = function () {
    var e = a((0, r.useState)(!1), 2),
        t = e[0],
        n = e[1],
        s = (0, r.useContext)(i.M);
    return (
        (0, r.useEffect)(
            function () {
                var e,
                    t = null == s || null == (e = s.dragDropManager) ? void 0 : e.getBackend(),
                    r = {
                        backendChanged: function (e) {
                            n(e.previewEnabled());
                        },
                    };
                return (
                    n(t.previewEnabled()),
                    t.previewsList().register(r),
                    function () {
                        t.previewsList().unregister(r);
                    }
                );
            },
            [s, s.dragDropManager],
        ),
        t
    );
};
