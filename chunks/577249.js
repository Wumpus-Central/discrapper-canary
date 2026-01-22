n.d(t, { s: () => O });
var r = n(321733),
    i = n(681456),
    a = n(594578),
    s = n(950143),
    o = n(73768),
    l = n(964527);
function c(e, t) {
    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function u(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
    }
}
function d(e, t, n) {
    return t && u(e.prototype, t), n && u(e, n), e;
}
function f(e, t) {
    return g(e) || m(e, t) || _(e, t) || p();
}
function p() {
    throw TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
    );
}
function _(e, t) {
    if (e) {
        if ("string" == typeof e) return h(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n))
            return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t);
    }
}
function h(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function m(e, t) {
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
function g(e) {
    if (Array.isArray(e)) return e;
}
function E(e) {
    var t = (0, a.Q)().toString();
    switch (e) {
        case s.z.SOURCE:
            return "S".concat(t);
        case s.z.TARGET:
            return "T".concat(t);
        default:
            throw Error("Unknown Handler Role: ".concat(e));
    }
}
function b(e) {
    switch (e[0]) {
        case "S":
            return s.z.SOURCE;
        case "T":
            return s.z.TARGET;
        default:
            (0, r.V)(!1, "Cannot parse handler ID: ".concat(e));
    }
}
function y(e, t) {
    var n = e.entries(),
        r = !1;
    do {
        var i = n.next(),
            a = i.done;
        if (f(i.value, 2)[1] === t) return !0;
        r = !!a;
    } while (!r);
    return !1;
}
var O = (function () {
    function e(t) {
        c(this, e),
            (this.types = new Map()),
            (this.dragSources = new Map()),
            (this.dropTargets = new Map()),
            (this.pinnedSourceId = null),
            (this.pinnedSource = null),
            (this.store = t);
    }
    return (
        d(e, [
            {
                key: "addSource",
                value: function (e, t) {
                    (0, o.v2)(e), (0, o.Mv)(t);
                    var n = this.addHandler(s.z.SOURCE, e, t);
                    return this.store.dispatch((0, i.pM)(n)), n;
                },
            },
            {
                key: "addTarget",
                value: function (e, t) {
                    (0, o.v2)(e, !0), (0, o.kV)(t);
                    var n = this.addHandler(s.z.TARGET, e, t);
                    return this.store.dispatch((0, i.z9)(n)), n;
                },
            },
            {
                key: "containsHandler",
                value: function (e) {
                    return y(this.dragSources, e) || y(this.dropTargets, e);
                },
            },
            {
                key: "getSource",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return (
                        (0, r.V)(this.isSourceId(e), "Expected a valid source ID."),
                        t && e === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(e)
                    );
                },
            },
            {
                key: "getTarget",
                value: function (e) {
                    return (0, r.V)(this.isTargetId(e), "Expected a valid target ID."), this.dropTargets.get(e);
                },
            },
            {
                key: "getSourceType",
                value: function (e) {
                    return (0, r.V)(this.isSourceId(e), "Expected a valid source ID."), this.types.get(e);
                },
            },
            {
                key: "getTargetType",
                value: function (e) {
                    return (0, r.V)(this.isTargetId(e), "Expected a valid target ID."), this.types.get(e);
                },
            },
            {
                key: "isSourceId",
                value: function (e) {
                    return b(e) === s.z.SOURCE;
                },
            },
            {
                key: "isTargetId",
                value: function (e) {
                    return b(e) === s.z.TARGET;
                },
            },
            {
                key: "removeSource",
                value: function (e) {
                    var t = this;
                    (0, r.V)(this.getSource(e), "Expected an existing source."),
                        this.store.dispatch((0, i.sn)(e)),
                        (0, l.Id)(function () {
                            t.dragSources.delete(e), t.types.delete(e);
                        });
                },
            },
            {
                key: "removeTarget",
                value: function (e) {
                    (0, r.V)(this.getTarget(e), "Expected an existing target."),
                        this.store.dispatch((0, i.iS)(e)),
                        this.dropTargets.delete(e),
                        this.types.delete(e);
                },
            },
            {
                key: "pinSource",
                value: function (e) {
                    var t = this.getSource(e);
                    (0, r.V)(t, "Expected an existing source."), (this.pinnedSourceId = e), (this.pinnedSource = t);
                },
            },
            {
                key: "unpinSource",
                value: function () {
                    (0, r.V)(this.pinnedSource, "No source is pinned at the time."),
                        (this.pinnedSourceId = null),
                        (this.pinnedSource = null);
                },
            },
            {
                key: "addHandler",
                value: function (e, t, n) {
                    var r = E(e);
                    return (
                        this.types.set(r, t),
                        e === s.z.SOURCE ? this.dragSources.set(r, n) : e === s.z.TARGET && this.dropTargets.set(r, n),
                        r
                    );
                },
            },
        ]),
        e
    );
})();
