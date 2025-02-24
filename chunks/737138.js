var e = n(224106),
    o = n(942282),
    i = n(151020),
    u = n(476508),
    s = n(13780),
    c = n(250765),
    f = n(730427),
    a = n(790142),
    p = n(215645),
    v = n(187592),
    l = n(447631),
    y = n(938988).fastKey,
    h = n(29461),
    x = h.set,
    d = h.getterFor;
t.exports = {
    getConstructor: function (t, r, n, a) {
        var p = t(function (t, o) {
                s(t, v),
                    x(t, {
                        type: r,
                        index: e(null),
                        first: void 0,
                        last: void 0,
                        size: 0
                    }),
                    l || (t.size = 0),
                    c(o) ||
                        f(o, t[a], {
                            that: t,
                            AS_ENTRIES: n
                        });
            }),
            v = p.prototype,
            h = d(r),
            g = function (t, r, n) {
                var e,
                    o,
                    i = h(t),
                    u = b(t, r);
                return (
                    u
                        ? (u.value = n)
                        : ((i.last = u =
                              {
                                  index: (o = y(r, !0)),
                                  key: r,
                                  value: n,
                                  previous: (e = i.last),
                                  next: void 0,
                                  removed: !1
                              }),
                          i.first || (i.first = u),
                          e && (e.next = u),
                          l ? i.size++ : t.size++,
                          'F' !== o && (i.index[o] = u)),
                    t
                );
            },
            b = function (t, r) {
                var n,
                    e = h(t),
                    o = y(r);
                if ('F' !== o) return e.index[o];
                for (n = e.first; n; n = n.next) if (n.key === r) return n;
            };
        return (
            i(v, {
                clear: function () {
                    for (var t = h(this), r = t.index, n = t.first; n; ) (n.removed = !0), n.previous && (n.previous = n.previous.next = void 0), delete r[n.index], (n = n.next);
                    (t.first = t.last = void 0), l ? (t.size = 0) : (this.size = 0);
                },
                delete: function (t) {
                    var r = h(this),
                        n = b(this, t);
                    if (n) {
                        var e = n.next,
                            o = n.previous;
                        delete r.index[n.index], (n.removed = !0), o && (o.next = e), e && (e.previous = o), r.first === n && (r.first = e), r.last === n && (r.last = o), l ? r.size-- : this.size--;
                    }
                    return !!n;
                },
                forEach: function (t) {
                    for (var r, n = h(this), e = u(t, arguments.length > 1 ? arguments[1] : void 0); (r = r ? r.next : n.first); ) for (e(r.value, r.key, this); r && r.removed; ) r = r.previous;
                },
                has: function (t) {
                    return !!b(this, t);
                }
            }),
            i(
                v,
                n
                    ? {
                          get: function (t) {
                              var r = b(this, t);
                              return r && r.value;
                          },
                          set: function (t, r) {
                              return g(this, 0 === t ? 0 : t, r);
                          }
                      }
                    : {
                          add: function (t) {
                              return g(this, (t = 0 === t ? 0 : t), t);
                          }
                      }
            ),
            l &&
                o(v, 'size', {
                    configurable: !0,
                    get: function () {
                        return h(this).size;
                    }
                }),
            p
        );
    },
    setStrong: function (t, r, n) {
        var e = r + ' Iterator',
            o = d(r),
            i = d(e);
        a(
            t,
            r,
            function (t, r) {
                x(this, {
                    type: e,
                    target: t,
                    state: o(t),
                    kind: r,
                    last: void 0
                });
            },
            function () {
                for (var t = i(this), r = t.kind, n = t.last; n && n.removed; ) n = n.previous;
                return t.target && (t.last = n = n ? n.next : t.state.first) ? ('keys' === r ? p(n.key, !1) : 'values' === r ? p(n.value, !1) : p([n.key, n.value], !1)) : ((t.target = void 0), p(void 0, !0));
            },
            n ? 'entries' : 'values',
            !n,
            !0
        ),
            v(r);
    }
};
