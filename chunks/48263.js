t(47120), t(474991), t(398202), t(301563), t(653041), t(230036), t(411104);
var n = t(658722),
    o = t.n(n),
    l = t(954955),
    a = t.n(l),
    i = t(226951),
    c = t(624138),
    u = t(620490);
function s(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {},
            n = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            n.forEach(function (r) {
                var n;
                (n = t[r]),
                    r in e
                        ? Object.defineProperty(e, r, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[r] = n);
            });
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
    v = 'username',
    y = 'friendNickname',
    O = 'globalName',
    g = new Set(['isFriend', 'isBot', 'isProvisional', v, y, O]),
    E = a()(
        () => {
            0 !== b.size &&
                (b.forEach((e) => {
                    let r = d.get(e);
                    null != r && m(e, r);
                }),
                b.clear());
        },
        100,
        {
            leading: !0,
            trailing: !0
        }
    );
function h(e, r) {
    return e * (null != r ? r : 1);
}
function m(e, r) {
    var t, n;
    let { query: l, limit: a, filters: f, blacklist: d, whitelist: b } = r,
        g = null != f && f.strict && null != (t = f.guild) ? t : null,
        E = null != (n = r.boosters) ? n : {},
        m = RegExp('^'.concat(i.Z.escape(l)), 'i'),
        S = RegExp(i.Z.escape(l), 'i'),
        j = [];
    if ('' === l) return w(l, j, e);
    let P = l.toLocaleLowerCase(),
        R = (0, c.Fv)(P);
    p.forEach((e, r) => {
        let t;
        if (
            !(function (e, r, t, n, o) {
                if (null != n && n.indexOf(e) >= 0) return !1;
                if (null != o && o.indexOf(e) >= 0) return !0;
                if (null != t) {
                    let { friends: e, guild: n, provisional: o } = t;
                    return (null == o || r.isProvisional === o) && ((!0 === e && !0 === r.isFriend) || (null != n && (null != r[n] || null === r[n])));
                }
                return !0;
            })(r, e, f, d, b)
        )
            return;
        let { username: n } = e;
        r === l
            ? (t = {
                  id: r,
                  username: n,
                  comparator: r,
                  score: h(10, E[r])
              })
            : Object.keys(e).forEach((l) => {
                  var a, i;
                  let u,
                      f = e[l];
                  if ('boolean' == typeof f || null == f || (null != g && l !== v && l !== y && l !== O && g !== l)) return;
                  let p = (0, c._I)(f.toLocaleLowerCase());
                  m.test(f)
                      ? (u = {
                            comparator: f,
                            score: h(10, E[r])
                        })
                      : S.test(f)
                        ? (u = {
                              comparator: f,
                              score: h(5, E[r])
                          })
                        : o()(P, p)
                          ? (u = {
                                comparator: f,
                                score: h(1, E[r])
                            })
                          : o()(R, (0, c.Fv)(p)) &&
                            (u = {
                                comparator: f,
                                score: h(1, E[r])
                            }),
                      null != u &&
                          (null == t || t.score < u.score) &&
                          ((a = s({}, u)),
                          (i = i =
                              {
                                  id: r,
                                  username: n
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i))
                              : (function (e, r) {
                                    var t = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var n = Object.getOwnPropertySymbols(e);
                                        t.push.apply(t, n);
                                    }
                                    return t;
                                })(Object(i)).forEach(function (e) {
                                    Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e));
                                }),
                          (t = a));
              }),
            null != t && j.push(t);
    }),
        j.sort(u.Z),
        j.length > a && (j.length = a),
        w(l, j, e);
}
function w(e, r, t) {
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
                r.forEach((e) => {
                    var r,
                        { id: o } = e,
                        l = (function (e, r) {
                            if (null == e) return {};
                            var t,
                                n,
                                o = (function (e, r) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        o = {},
                                        l = Object.keys(e);
                                    for (n = 0; n < l.length; n++) (t = l[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
                                    return o;
                                })(e, r);
                            if (Object.getOwnPropertySymbols) {
                                var l = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < l.length; n++) (t = l[n]), !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
                            }
                            return o;
                        })(e, ['id']);
                    let a = null != (r = p.get(o)) ? r : null,
                        i = s({}, a, l);
                    p.set(o, i),
                        d.size > 0 &&
                            ((i.isFriend !== (null == a ? void 0 : a.isFriend) || i.friendNickname !== (null == a ? void 0 : a.friendNickname)) && (t = !0),
                            Object.keys(i).forEach((e) => {
                                g.has(e) || n.add(e);
                            }));
                }),
                    d.forEach((e, r) => {
                        let { filters: o } = e;
                        (null == o || o.friends === t || n.has(o.guild)) && b.add(r);
                    }),
                    E();
            })(r);
        case f.QUERY_SET:
            return (function (e) {
                let { uuid: r, payload: t } = e;
                d.set(r, t), m(r, t);
            })(r);
        case f.QUERY_CLEAR:
            return (function (e) {
                let { uuid: r } = e;
                d.delete(r), b.delete(r), 0 === b.size && E.cancel();
            })(r);
    }
});
