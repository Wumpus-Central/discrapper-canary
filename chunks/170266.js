var e = n(425184),
    o = n(459341),
    i = n(513270),
    u = n(324474),
    s = n(588383),
    c = n(372978),
    f = n(795462),
    a = n(689591),
    p = n(787899),
    l = n(999405),
    v = n(181794),
    y = n(54978).fastKey,
    h = n(89416),
    x = h.set,
    d = h.getterFor;
t.exports = {
    getConstructor: function (t, r, n, a) {
        var p = t(function (t, o) {
                s(t, l),
                    x(t, {
                        type: r,
                        index: e(null),
                        first: null,
                        last: null,
                        size: 0
                    }),
                    v || (t.size = 0),
                    c(o) ||
                        f(o, t[a], {
                            that: t,
                            AS_ENTRIES: n
                        });
            }),
            l = p.prototype,
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
                                  next: null,
                                  removed: !1
                              }),
                          i.first || (i.first = u),
                          e && (e.next = u),
                          v ? i.size++ : t.size++,
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
            i(l, {
                clear: function () {
                    for (var t = h(this), r = t.first; r; ) (r.removed = !0), r.previous && (r.previous = r.previous.next = null), (r = r.next);
                    (t.first = t.last = null), (t.index = e(null)), v ? (t.size = 0) : (this.size = 0);
                },
                delete: function (t) {
                    var r = h(this),
                        n = b(this, t);
                    if (n) {
                        var e = n.next,
                            o = n.previous;
                        delete r.index[n.index], (n.removed = !0), o && (o.next = e), e && (e.previous = o), r.first === n && (r.first = e), r.last === n && (r.last = o), v ? r.size-- : this.size--;
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
                l,
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
            v &&
                o(l, 'size', {
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
                    last: null
                });
            },
            function () {
                for (var t = i(this), r = t.kind, n = t.last; n && n.removed; ) n = n.previous;
                return t.target && (t.last = n = n ? n.next : t.state.first) ? ('keys' === r ? p(n.key, !1) : 'values' === r ? p(n.value, !1) : p([n.key, n.value], !1)) : ((t.target = null), p(void 0, !0));
            },
            n ? 'entries' : 'values',
            !n,
            !0
        ),
            l(r);
    }
};
