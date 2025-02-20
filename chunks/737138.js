var r = n(224106),
    i = n(942282),
    o = n(151020),
    a = n(476508),
    s = n(13780),
    l = n(250765),
    c = n(730427),
    u = n(790142),
    d = n(215645),
    f = n(187592),
    p = n(447631),
    _ = n(938988).fastKey,
    h = n(29461),
    m = h.set,
    g = h.getterFor;
e.exports = {
    getConstructor: function (e, t, n, u) {
        var d = e(function (e, i) {
                s(e, f),
                    m(e, {
                        type: t,
                        index: r(null),
                        first: void 0,
                        last: void 0,
                        size: 0
                    }),
                    p || (e.size = 0),
                    l(i) ||
                        c(i, e[u], {
                            that: e,
                            AS_ENTRIES: n
                        });
            }),
            f = d.prototype,
            h = g(t),
            E = function (e, t, n) {
                var r,
                    i,
                    o = h(e),
                    a = v(e, t);
                return (
                    a
                        ? (a.value = n)
                        : ((o.last = a =
                              {
                                  index: (i = _(t, !0)),
                                  key: t,
                                  value: n,
                                  previous: (r = o.last),
                                  next: void 0,
                                  removed: !1
                              }),
                          o.first || (o.first = a),
                          r && (r.next = a),
                          p ? o.size++ : e.size++,
                          'F' !== i && (o.index[i] = a)),
                    e
                );
            },
            v = function (e, t) {
                var n,
                    r = h(e),
                    i = _(t);
                if ('F' !== i) return r.index[i];
                for (n = r.first; n; n = n.next) if (n.key === t) return n;
            };
        return (
            o(f, {
                clear: function () {
                    for (var e = this, t = h(e), n = t.index, r = t.first; r; ) (r.removed = !0), r.previous && (r.previous = r.previous.next = void 0), delete n[r.index], (r = r.next);
                    (t.first = t.last = void 0), p ? (t.size = 0) : (e.size = 0);
                },
                delete: function (e) {
                    var t = this,
                        n = h(t),
                        r = v(t, e);
                    if (r) {
                        var i = r.next,
                            o = r.previous;
                        delete n.index[r.index], (r.removed = !0), o && (o.next = i), i && (i.previous = o), n.first === r && (n.first = i), n.last === r && (n.last = o), p ? n.size-- : t.size--;
                    }
                    return !!r;
                },
                forEach: function (e) {
                    for (var t, n = h(this), r = a(e, arguments.length > 1 ? arguments[1] : void 0); (t = t ? t.next : n.first); ) for (r(t.value, t.key, this); t && t.removed; ) t = t.previous;
                },
                has: function (e) {
                    return !!v(this, e);
                }
            }),
            o(
                f,
                n
                    ? {
                          get: function (e) {
                              var t = v(this, e);
                              return t && t.value;
                          },
                          set: function (e, t) {
                              return E(this, 0 === e ? 0 : e, t);
                          }
                      }
                    : {
                          add: function (e) {
                              return E(this, (e = 0 === e ? 0 : e), e);
                          }
                      }
            ),
            p &&
                i(f, 'size', {
                    configurable: !0,
                    get: function () {
                        return h(this).size;
                    }
                }),
            d
        );
    },
    setStrong: function (e, t, n) {
        var r = t + ' Iterator',
            i = g(t),
            o = g(r);
        u(
            e,
            t,
            function (e, t) {
                m(this, {
                    type: r,
                    target: e,
                    state: i(e),
                    kind: t,
                    last: void 0
                });
            },
            function () {
                for (var e = o(this), t = e.kind, n = e.last; n && n.removed; ) n = n.previous;
                return e.target && (e.last = n = n ? n.next : e.state.first) ? ('keys' === t ? d(n.key, !1) : 'values' === t ? d(n.value, !1) : d([n.key, n.value], !1)) : ((e.target = void 0), d(void 0, !0));
            },
            n ? 'entries' : 'values',
            !n,
            !0
        ),
            f(t);
    }
};
