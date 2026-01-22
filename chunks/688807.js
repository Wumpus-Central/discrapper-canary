n.d(t, {
    V: () => f,
});
var r = n(64700),
    i = n(190334),
    a = n(87515);

function s(e, t) {
    return d(e) || u(e, t) || l(e, t) || o();
}

function o() {
    throw TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
    );
}

function l(e, t) {
    if (e) {
        if ("string" == typeof e) return c(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n))
            return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t);
    }
}

function c(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}

function u(e, t) {
    var n,
        r,
        i = null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (null != i) {
        var a = [],
            s = !0,
            o = !1;
        try {
            for (i = i.call(e); !(s = (n = i.next()).done) && (a.push(n.value), !t || a.length !== t); s = !0);
        } catch (e) {
            (o = !0), (r = e);
        } finally {
            try {
                s || null == i.return || i.return();
            } finally {
                if (o) throw r;
            }
        }
        return a;
    }
}

function d(e) {
    if (Array.isArray(e)) return e;
}

function f(e) {
    var t = (0, i.u)().getMonitor(),
        n = s((0, a.F)(t, e), 2),
        o = n[0],
        l = n[1];
    return (
        (0, r.useEffect)(function () {
            return t.subscribeToOffsetChange(l);
        }),
        (0, r.useEffect)(function () {
            return t.subscribeToStateChange(l);
        }),
        o
    );
}
