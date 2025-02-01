var i = n(224106),
    r = n(942282),
    a = n(151020),
    s = n(476508),
    o = n(13780),
    l = n(250765),
    u = n(730427),
    c = n(790142),
    d = n(215645),
    f = n(187592),
    _ = n(447631),
    p = n(938988).fastKey,
    h = n(29461),
    m = h.set,
    g = h.getterFor;
e.exports = {
    getConstructor: function (e, t, n, c) {
        var d = e(function (e, r) {
                o(e, f),
                    m(e, {
                        type: t,
                        index: i(null),
                        first: void 0,
                        last: void 0,
                        size: 0
                    }),
                    _ || (e.size = 0),
                    l(r) ||
                        u(r, e[c], {
                            that: e,
                            AS_ENTRIES: n
                        });
            }),
            f = d.prototype,
            h = g(t),
            E = function (e, t, n) {
                var i,
                    r,
                    a = h(e),
                    s = v(e, t);
                return (
                    s
                        ? (s.value = n)
                        : ((a.last = s =
                              {
                                  index: (r = p(t, !0)),
                                  key: t,
                                  value: n,
                                  previous: (i = a.last),
                                  next: void 0,
                                  removed: !1
                              }),
                          a.first || (a.first = s),
                          i && (i.next = s),
                          _ ? a.size++ : e.size++,
                          'F' !== r && (a.index[r] = s)),
                    e
                );
            },
            v = function (e, t) {
                var n,
                    i = h(e),
                    r = p(t);
                if ('F' !== r) return i.index[r];
                for (n = i.first; n; n = n.next) if (n.key === t) return n;
            };
        return (
            a(f, {
                clear: function () {
                    for (var e = this, t = h(e), n = t.index, i = t.first; i; ) (i.removed = !0), i.previous && (i.previous = i.previous.next = void 0), delete n[i.index], (i = i.next);
                    (t.first = t.last = void 0), _ ? (t.size = 0) : (e.size = 0);
                },
                delete: function (e) {
                    var t = this,
                        n = h(t),
                        i = v(t, e);
                    if (i) {
                        var r = i.next,
                            a = i.previous;
                        delete n.index[i.index], (i.removed = !0), a && (a.next = r), r && (r.previous = a), n.first === i && (n.first = r), n.last === i && (n.last = a), _ ? n.size-- : t.size--;
                    }
                    return !!i;
                },
                forEach: function (e) {
                    for (var t, n = h(this), i = s(e, arguments.length > 1 ? arguments[1] : void 0); (t = t ? t.next : n.first); ) for (i(t.value, t.key, this); t && t.removed; ) t = t.previous;
                },
                has: function (e) {
                    return !!v(this, e);
                }
            }),
            a(
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
            _ &&
                r(f, 'size', {
                    configurable: !0,
                    get: function () {
                        return h(this).size;
                    }
                }),
            d
        );
    },
    setStrong: function (e, t, n) {
        var i = t + ' Iterator',
            r = g(t),
            a = g(i);
        c(
            e,
            t,
            function (e, t) {
                m(this, {
                    type: i,
                    target: e,
                    state: r(e),
                    kind: t,
                    last: void 0
                });
            },
            function () {
                for (var e = a(this), t = e.kind, n = e.last; n && n.removed; ) n = n.previous;
                return e.target && (e.last = n = n ? n.next : e.state.first) ? ('keys' === t ? d(n.key, !1) : 'values' === t ? d(n.value, !1) : d([n.key, n.value], !1)) : ((e.target = void 0), d(void 0, !0));
            },
            n ? 'entries' : 'values',
            !n,
            !0
        ),
            f(t);
    }
};
