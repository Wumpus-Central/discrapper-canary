(t(388685), t(413496), t(433524), t(35282), t(539854), t(642613), t(415506));
var n = t(658722),
    l = t.n(n),
    o = t(954955),
    a = t.n(o),
    i = t(226951),
    c = t(624138),
    u = t(620490);
function s(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {},
            n = Object.keys(t);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            n.forEach(function (r) {
                var n;
                ((n = t[r]),
                    r in e
                        ? Object.defineProperty(e, r, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[r] = n));
            }));
    }
    return e;
}
let f = {
        UPDATE_USERS: 'UPDATE_USERS',
        USER_RESULTS: 'USER_RESULTS',
        QUERY_SET: 'QUERY_SET',
        QUERY_CLEAR: 'QUERY_CLEAR'
    },
    p = new Map(),
    d = new Map(),
    b = new Set(),
    v = a()(
        () => {
            0 !== b.size &&
                (b.forEach((e) => {
                    let r = d.get(e);
                    null != r && y(e, r);
                }),
                b.clear());
        },
        100,
        {
            leading: !0,
            trailing: !0
        }
    );
function O(e, r, t) {
    return e * (null != r ? r : t);
}
function y(e, r) {
    var t;
    let { query: n, limit: o, filters: a, blacklist: f, whitelist: d, boosters: b, boosterFallback: v } = r,
        y = null != a && a.strict && null != (t = a.guild) ? t : null,
        g = RegExp('^'.concat(i.Z.escape(n)), 'i'),
        h = RegExp(i.Z.escape(n), 'i'),
        E = [];
    if ('' === n) return m(n, E, e);
    let S = n.toLocaleLowerCase(),
        w = (0, c.Fv)(S);
    (p.forEach((e, r) => {
        let t;
        if (
            !(function (e, r, t, n, l) {
                if (null != n && n.indexOf(e) >= 0) return !1;
                if (null != l && l.indexOf(e) >= 0) return !0;
                if (null != t) {
                    let { friends: e, staff: n, guild: l, provisional: o } = t;
                    return (null == o || r.isProvisional === o) && ((!0 === e && !0 === r.isFriend) || (!0 === n && !0 === r.isStaff) || (null != l && (null != r.nicknames[l] || null === r.nicknames[l])));
                }
                return !0;
            })(r, e, a, f, d)
        )
            return;
        let { username: o } = e;
        if (r === n)
            t = {
                id: r,
                username: o,
                comparator: r,
                score: O(10, b[r], v)
            };
        else {
            let n = [e.username, e.friendNickname, e.globalName].filter((e) => null != e);
            if (null != y) {
                let r = e.nicknames[y];
                null != r && n.push(r);
            } else n.push(...Object.values(e.nicknames).filter((e) => null != e));
            n.forEach((e) => {
                var n, a;
                let i,
                    u = (0, c._I)(e.toLocaleLowerCase());
                (g.test(e)
                    ? (i = {
                          comparator: e,
                          score: O(10, b[r], v)
                      })
                    : h.test(e)
                      ? (i = {
                            comparator: e,
                            score: O(5, b[r], v)
                        })
                      : l()(S, u)
                        ? (i = {
                              comparator: e,
                              score: O(1, b[r], v)
                          })
                        : l()(w, (0, c.Fv)(u)) &&
                          (i = {
                              comparator: e,
                              score: O(1, b[r], v)
                          }),
                    null != i &&
                        (null == t || t.score < i.score) &&
                        ((n = s({}, i)),
                        (a = a =
                            {
                                id: r,
                                username: o
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                            : (function (e, r) {
                                  var t = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      t.push.apply(t, n);
                                  }
                                  return t;
                              })(Object(a)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                              }),
                        (t = n)));
            });
        }
        null != t && E.push(t);
    }),
        E.sort(u.Z),
        E.length > o && (E.length = o),
        m(n, E, e));
}
function m(e, r, t) {
    let n = {
        type: f.USER_RESULTS,
        uuid: t,
        payload: {
            query: e,
            results: r
        }
    };
    self.postMessage(n);
}
self.addEventListener('message', (e) => {
    let { data: r } = e;
    if (null == r || null == r.type) throw Error('Invalid data');
    switch (r.type) {
        case f.UPDATE_USERS:
            return (function (e) {
                let { payload: r } = e,
                    t = !1,
                    n = new Set();
                (r.forEach((e) => {
                    var r,
                        { id: l } = e,
                        o = (function (e, r) {
                            if (null == e) return {};
                            var t,
                                n,
                                l = (function (e, r) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        l = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) ((t = o[n]), r.indexOf(t) >= 0 || (l[t] = e[t]));
                                    return l;
                                })(e, r);
                            if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < o.length; n++) ((t = o[n]), !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t]));
                            }
                            return l;
                        })(e, ['id']);
                    let a = null != (r = p.get(l)) ? r : null,
                        i = s({}, a, o);
                    (p.set(l, i),
                        d.size > 0 &&
                            ((i.isFriend !== (null == a ? void 0 : a.isFriend) || i.friendNickname !== (null == a ? void 0 : a.friendNickname) || i.isStaff !== (null == a ? void 0 : a.isStaff)) && (t = !0),
                            Object.keys(i.nicknames).forEach((e) => {
                                n.add(e);
                            })));
                }),
                    d.forEach((e, r) => {
                        let { filters: l } = e;
                        (null == l || l.friends === t || l.staff === t || n.has(l.guild)) && b.add(r);
                    }),
                    v());
            })(r);
        case f.QUERY_SET:
            return (function (e) {
                let { uuid: r, payload: t } = e;
                (d.set(r, t), y(r, t));
            })(r);
        case f.QUERY_CLEAR:
            return (function (e) {
                let { uuid: r } = e;
                (d.delete(r), b.delete(r), 0 === b.size && v.cancel());
            })(r);
    }
});
