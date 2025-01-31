n.d(t, { V: () => I });
var i = n(573654),
    r = n(40284),
    a = n(481732),
    s = n(478413),
    o = n(919513),
    l = n(158851);
function u(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function c(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function d(e, t, n) {
    return t && c(e.prototype, t), n && c(e, n), e;
}
function f(e, t) {
    return g(e) || m(e, t) || p(e, t) || _();
}
function _() {
    throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function p(e, t) {
    if (e) {
        if ('string' == typeof e) return h(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t);
    }
}
function h(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i;
}
function m(e, t) {
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
function g(e) {
    if (Array.isArray(e)) return e;
}
function E(e) {
    var t = (0, a.p)().toString();
    switch (e) {
        case s.t.SOURCE:
            return 'S'.concat(t);
        case s.t.TARGET:
            return 'T'.concat(t);
        default:
            throw Error('Unknown Handler Role: '.concat(e));
    }
}
function v(e) {
    switch (e[0]) {
        case 'S':
            return s.t.SOURCE;
        case 'T':
            return s.t.TARGET;
        default:
            (0, i.k)(!1, 'Cannot parse handler ID: '.concat(e));
    }
}
function y(e, t) {
    var n = e.entries(),
        i = !1;
    do {
        var r = n.next(),
            a = r.done;
        if (f(r.value, 2)[1] === t) return !0;
        i = !!a;
    } while (!i);
    return !1;
}
var I = (function () {
    function e(t) {
        u(this, e), (this.types = new Map()), (this.dragSources = new Map()), (this.dropTargets = new Map()), (this.pinnedSourceId = null), (this.pinnedSource = null), (this.store = t);
    }
    return (
        d(e, [
            {
                key: 'addSource',
                value: function (e, t) {
                    (0, o.sM)(e), (0, o.up)(t);
                    var n = this.addHandler(s.t.SOURCE, e, t);
                    return this.store.dispatch((0, r.j1)(n)), n;
                }
            },
            {
                key: 'addTarget',
                value: function (e, t) {
                    (0, o.sM)(e, !0), (0, o.JP)(t);
                    var n = this.addHandler(s.t.TARGET, e, t);
                    return this.store.dispatch((0, r.jn)(n)), n;
                }
            },
            {
                key: 'containsHandler',
                value: function (e) {
                    return y(this.dragSources, e) || y(this.dropTargets, e);
                }
            },
            {
                key: 'getSource',
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return (0, i.k)(this.isSourceId(e), 'Expected a valid source ID.'), t && e === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(e);
                }
            },
            {
                key: 'getTarget',
                value: function (e) {
                    return (0, i.k)(this.isTargetId(e), 'Expected a valid target ID.'), this.dropTargets.get(e);
                }
            },
            {
                key: 'getSourceType',
                value: function (e) {
                    return (0, i.k)(this.isSourceId(e), 'Expected a valid source ID.'), this.types.get(e);
                }
            },
            {
                key: 'getTargetType',
                value: function (e) {
                    return (0, i.k)(this.isTargetId(e), 'Expected a valid target ID.'), this.types.get(e);
                }
            },
            {
                key: 'isSourceId',
                value: function (e) {
                    return v(e) === s.t.SOURCE;
                }
            },
            {
                key: 'isTargetId',
                value: function (e) {
                    return v(e) === s.t.TARGET;
                }
            },
            {
                key: 'removeSource',
                value: function (e) {
                    var t = this;
                    (0, i.k)(this.getSource(e), 'Expected an existing source.'),
                        this.store.dispatch((0, r.wZ)(e)),
                        (0, l.eM)(function () {
                            t.dragSources.delete(e), t.types.delete(e);
                        });
                }
            },
            {
                key: 'removeTarget',
                value: function (e) {
                    (0, i.k)(this.getTarget(e), 'Expected an existing target.'), this.store.dispatch((0, r.BT)(e)), this.dropTargets.delete(e), this.types.delete(e);
                }
            },
            {
                key: 'pinSource',
                value: function (e) {
                    var t = this.getSource(e);
                    (0, i.k)(t, 'Expected an existing source.'), (this.pinnedSourceId = e), (this.pinnedSource = t);
                }
            },
            {
                key: 'unpinSource',
                value: function () {
                    (0, i.k)(this.pinnedSource, 'No source is pinned at the time.'), (this.pinnedSourceId = null), (this.pinnedSource = null);
                }
            },
            {
                key: 'addHandler',
                value: function (e, t, n) {
                    var i = E(e);
                    return this.types.set(i, t), e === s.t.SOURCE ? this.dragSources.set(i, n) : e === s.t.TARGET && this.dropTargets.set(i, n), i;
                }
            }
        ]),
        e
    );
})();
