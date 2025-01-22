r.d(n, {
    V: function () {
        return I;
    }
});
var i = r(573654),
    a = r(40284),
    o = r(481732),
    s = r(478413),
    l = r(919513),
    u = r(158851);
function c(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function d(e, n) {
    for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function f(e, n, r) {
    return n && d(e.prototype, n), r && d(e, r), e;
}
function p(e, n) {
    return E(e) || g(e, n) || _(e, n) || h();
}
function h() {
    throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
function _(e, n) {
    if (e) {
        if ('string' == typeof e) return m(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
        if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return m(e, n);
    }
}
function m(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var r = 0, i = Array(n); r < n; r++) i[r] = e[r];
    return i;
}
function g(e, n) {
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
function E(e) {
    if (Array.isArray(e)) return e;
}
function v(e) {
    var n = (0, o.p)().toString();
    switch (e) {
        case s.t.SOURCE:
            return 'S'.concat(n);
        case s.t.TARGET:
            return 'T'.concat(n);
        default:
            throw Error('Unknown Handler Role: '.concat(e));
    }
}
function y(e) {
    switch (e[0]) {
        case 'S':
            return s.t.SOURCE;
        case 'T':
            return s.t.TARGET;
        default:
            (0, i.k)(!1, 'Cannot parse handler ID: '.concat(e));
    }
}
function b(e, n) {
    var r = e.entries(),
        i = !1;
    do {
        var a = r.next(),
            o = a.done;
        if (p(a.value, 2)[1] === n) return !0;
        i = !!o;
    } while (!i);
    return !1;
}
var I = (function () {
    function e(n) {
        c(this, e), (this.types = new Map()), (this.dragSources = new Map()), (this.dropTargets = new Map()), (this.pinnedSourceId = null), (this.pinnedSource = null), (this.store = n);
    }
    return (
        f(e, [
            {
                key: 'addSource',
                value: function (e, n) {
                    (0, l.sM)(e), (0, l.up)(n);
                    var r = this.addHandler(s.t.SOURCE, e, n);
                    return this.store.dispatch((0, a.j1)(r)), r;
                }
            },
            {
                key: 'addTarget',
                value: function (e, n) {
                    (0, l.sM)(e, !0), (0, l.JP)(n);
                    var r = this.addHandler(s.t.TARGET, e, n);
                    return this.store.dispatch((0, a.jn)(r)), r;
                }
            },
            {
                key: 'containsHandler',
                value: function (e) {
                    return b(this.dragSources, e) || b(this.dropTargets, e);
                }
            },
            {
                key: 'getSource',
                value: function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return (0, i.k)(this.isSourceId(e), 'Expected a valid source ID.'), n && e === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(e);
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
                    return y(e) === s.t.SOURCE;
                }
            },
            {
                key: 'isTargetId',
                value: function (e) {
                    return y(e) === s.t.TARGET;
                }
            },
            {
                key: 'removeSource',
                value: function (e) {
                    var n = this;
                    (0, i.k)(this.getSource(e), 'Expected an existing source.'),
                        this.store.dispatch((0, a.wZ)(e)),
                        (0, u.eM)(function () {
                            n.dragSources.delete(e), n.types.delete(e);
                        });
                }
            },
            {
                key: 'removeTarget',
                value: function (e) {
                    (0, i.k)(this.getTarget(e), 'Expected an existing target.'), this.store.dispatch((0, a.BT)(e)), this.dropTargets.delete(e), this.types.delete(e);
                }
            },
            {
                key: 'pinSource',
                value: function (e) {
                    var n = this.getSource(e);
                    (0, i.k)(n, 'Expected an existing source.'), (this.pinnedSourceId = e), (this.pinnedSource = n);
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
                value: function (e, n, r) {
                    var i = v(e);
                    return this.types.set(i, n), e === s.t.SOURCE ? this.dragSources.set(i, r) : e === s.t.TARGET && this.dropTargets.set(i, r), i;
                }
            }
        ]),
        e
    );
})();
