var i = r(224106),
    a = r(942282),
    o = r(151020),
    s = r(476508),
    l = r(13780),
    u = r(250765),
    c = r(730427),
    d = r(790142),
    f = r(215645),
    p = r(187592),
    h = r(447631),
    _ = r(938988).fastKey,
    m = r(29461),
    g = m.set,
    E = m.getterFor;
e.exports = {
    getConstructor: function (e, n, r, d) {
        var f = e(function (e, a) {
                l(e, p),
                    g(e, {
                        type: n,
                        index: i(null),
                        first: void 0,
                        last: void 0,
                        size: 0
                    }),
                    !h && (e.size = 0),
                    !u(a) &&
                        c(a, e[d], {
                            that: e,
                            AS_ENTRIES: r
                        });
            }),
            p = f.prototype,
            m = E(n),
            v = function (e, n, r) {
                var i,
                    a,
                    o = m(e),
                    s = y(e, n);
                return (
                    s
                        ? (s.value = r)
                        : ((o.last = s =
                              {
                                  index: (a = _(n, !0)),
                                  key: n,
                                  value: r,
                                  previous: (i = o.last),
                                  next: void 0,
                                  removed: !1
                              }),
                          !o.first && (o.first = s),
                          i && (i.next = s),
                          h ? o.size++ : e.size++,
                          'F' !== a && (o.index[a] = s)),
                    e
                );
            },
            y = function (e, n) {
                var r,
                    i = m(e),
                    a = _(n);
                if ('F' !== a) return i.index[a];
                for (r = i.first; r; r = r.next) if (r.key === n) return r;
            };
        return (
            o(p, {
                clear: function () {
                    for (var e = this, n = m(e), r = n.index, i = n.first; i; ) (i.removed = !0), i.previous && (i.previous = i.previous.next = void 0), delete r[i.index], (i = i.next);
                    (n.first = n.last = void 0), h ? (n.size = 0) : (e.size = 0);
                },
                delete: function (e) {
                    var n = this,
                        r = m(n),
                        i = y(n, e);
                    if (i) {
                        var a = i.next,
                            o = i.previous;
                        delete r.index[i.index], (i.removed = !0), o && (o.next = a), a && (a.previous = o), r.first === i && (r.first = a), r.last === i && (r.last = o), h ? r.size-- : n.size--;
                    }
                    return !!i;
                },
                forEach: function (e) {
                    for (var n, r = m(this), i = s(e, arguments.length > 1 ? arguments[1] : void 0); (n = n ? n.next : r.first); ) for (i(n.value, n.key, this); n && n.removed; ) n = n.previous;
                },
                has: function (e) {
                    return !!y(this, e);
                }
            }),
            o(
                p,
                r
                    ? {
                          get: function (e) {
                              var n = y(this, e);
                              return n && n.value;
                          },
                          set: function (e, n) {
                              return v(this, 0 === e ? 0 : e, n);
                          }
                      }
                    : {
                          add: function (e) {
                              return v(this, (e = 0 === e ? 0 : e), e);
                          }
                      }
            ),
            h &&
                a(p, 'size', {
                    configurable: !0,
                    get: function () {
                        return m(this).size;
                    }
                }),
            f
        );
    },
    setStrong: function (e, n, r) {
        var i = n + ' Iterator',
            a = E(n),
            o = E(i);
        d(
            e,
            n,
            function (e, n) {
                g(this, {
                    type: i,
                    target: e,
                    state: a(e),
                    kind: n,
                    last: void 0
                });
            },
            function () {
                for (var e = o(this), n = e.kind, r = e.last; r && r.removed; ) r = r.previous;
                return e.target && (e.last = r = r ? r.next : e.state.first) ? ('keys' === n ? f(r.key, !1) : 'values' === n ? f(r.value, !1) : f([r.key, r.value], !1)) : ((e.target = void 0), f(void 0, !0));
            },
            r ? 'entries' : 'values',
            !r,
            !0
        ),
            p(n);
    }
};
