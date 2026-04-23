"use strict";
n.d(t, { s: () => _ });
var r = n(321733),
    i = n(681456),
    s = n(594578),
    a = n(950143),
    o = n(73768),
    l = n(964527);
function u(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function c(e) {
    switch (e[0]) {
        case "S":
            return a.z.SOURCE;
        case "T":
            return a.z.TARGET;
        default:
            (0, r.V)(!1, "Cannot parse handler ID: ".concat(e));
    }
}
function d(e, t) {
    var n = e.entries(),
        r = !1;
    do {
        var i,
            s = n.next(),
            a = s.done;
        if (
            ((function (e) {
                if (Array.isArray(e)) return e;
            })((i = s.value)) ||
                (function (e) {
                    if ("u" > typeof Symbol && Symbol.iterator in Object(e)) {
                        var t = [],
                            n = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (
                                var s, a = e[Symbol.iterator]();
                                !(n = (s = a.next()).done) && (t.push(s.value), 2 !== t.length);
                                n = !0
                            );
                        } catch (e) {
                            (r = !0), (i = e);
                        } finally {
                            try {
                                n || null == a.return || a.return();
                            } finally {
                                if (r) throw i;
                            }
                        }
                        return t;
                    }
                })(i) ||
                (function (e) {
                    if (e) {
                        if ("string" == typeof e) return u(e, 2);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                            return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return u(e, 2);
                    }
                })(i) ||
                (function () {
                    throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                })())[1] === t
        )
            return !0;
        r = !!a;
    } while (!r);
    return !1;
}
var _ = (function () {
    var e;
    function t(e) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        (this.types = new Map()),
            (this.dragSources = new Map()),
            (this.dropTargets = new Map()),
            (this.pinnedSourceId = null),
            (this.pinnedSource = null),
            (this.store = e);
    }
    return (
        (e = [
            {
                key: "addSource",
                value: function (e, t) {
                    (0, o.v2)(e), (0, o.Mv)(t);
                    var n = this.addHandler(a.z.SOURCE, e, t);
                    return this.store.dispatch((0, i.pM)(n)), n;
                },
            },
            {
                key: "addTarget",
                value: function (e, t) {
                    (0, o.v2)(e, !0), (0, o.kV)(t);
                    var n = this.addHandler(a.z.TARGET, e, t);
                    return this.store.dispatch((0, i.z9)(n)), n;
                },
            },
            {
                key: "containsHandler",
                value: function (e) {
                    return d(this.dragSources, e) || d(this.dropTargets, e);
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
                    return c(e) === a.z.SOURCE;
                },
            },
            {
                key: "isTargetId",
                value: function (e) {
                    return c(e) === a.z.TARGET;
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
                    var r = (function (e) {
                        var t = (0, s.Q)().toString();
                        switch (e) {
                            case a.z.SOURCE:
                                return "S".concat(t);
                            case a.z.TARGET:
                                return "T".concat(t);
                            default:
                                throw Error("Unknown Handler Role: ".concat(e));
                        }
                    })(e);
                    return (
                        this.types.set(r, t),
                        e === a.z.SOURCE ? this.dragSources.set(r, n) : e === a.z.TARGET && this.dropTargets.set(r, n),
                        r
                    );
                },
            },
        ]),
        (function (e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
            }
        })(t.prototype, e),
        t
    );
})();
