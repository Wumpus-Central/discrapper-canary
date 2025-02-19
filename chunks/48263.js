t(47120), t(474991), t(398202), t(301563), t(653041), t(230036), t(411104);
var n = t(658722),
    o = t.n(n),
    l = t(954955),
    i = t.n(l),
    u = t(226951),
    c = t(624138),
    a = t(620490);
function f(e) {
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
let s = {
        UPDATE_USERS: 'UPDATE_USERS',
        USER_RESULTS: 'USER_RESULTS',
        QUERY_SET: 'QUERY_SET',
        QUERY_CLEAR: 'QUERY_CLEAR'
    },
    p = new Map(),
    d = new Map(),
    v = new Set(),
    b = 'username',
    y = 'friendNickname',
    O = 'globalName',
    g = new Set(['isFriend', 'isBot', 'isProvisional', b, y, O]),
    E = i()(
        () => {
            0 !== v.size &&
                (v.forEach((e) => {
                    let r = d.get(e);
                    null != r && m(e, r);
                }),
                v.clear());
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
    let { query: l, limit: i, filters: s, blacklist: d, whitelist: v } = r,
        g = null != s && s.strict && null !== (t = s.guild) && void 0 !== t ? t : null,
        E = null !== (n = r.boosters) && void 0 !== n ? n : {},
        m = RegExp('^'.concat(u.Z.escape(l)), 'i'),
        S = RegExp(u.Z.escape(l), 'i'),
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
            })(r, e, s, d, v)
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
                  let i;
                  let u = e[l];
                  if ('boolean' == typeof u || null == u || (null != g && l !== b && l !== y && l !== O && g !== l)) return;
                  let a = (0, c._I)(u.toLocaleLowerCase());
                  if (
                      (m.test(u)
                          ? (i = {
                                comparator: u,
                                score: h(10, E[r])
                            })
                          : S.test(u)
                            ? (i = {
                                  comparator: u,
                                  score: h(5, E[r])
                              })
                            : o()(P, a)
                              ? (i = {
                                    comparator: u,
                                    score: h(1, E[r])
                                })
                              : o()(R, (0, c.Fv)(a)) &&
                                (i = {
                                    comparator: u,
                                    score: h(1, E[r])
                                }),
                      null != i && (null == t || t.score < i.score))
                  ) {
                      var s, p;
                      (s = f({}, i)),
                          (p = p =
                              {
                                  id: r,
                                  username: n
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(p))
                              : (function (e, r) {
                                    var t = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var n = Object.getOwnPropertySymbols(e);
                                        t.push.apply(t, n);
                                    }
                                    return t;
                                })(Object(p)).forEach(function (e) {
                                    Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(p, e));
                                }),
                          (t = s);
                  }
              }),
            null != t && j.push(t);
    }),
        j.sort(a.Z),
        j.length > i && (j.length = i),
        w(l, j, e);
}
function w(e, r, t) {
    let n = {
        type: s.USER_RESULTS,
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
        case s.UPDATE_USERS:
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
                    let i = null !== (r = p.get(o)) && void 0 !== r ? r : null,
                        u = f({}, i, l);
                    p.set(o, u),
                        d.size > 0 &&
                            ((u.isFriend !== (null == i ? void 0 : i.isFriend) || u.friendNickname !== (null == i ? void 0 : i.friendNickname)) && (t = !0),
                            Object.keys(u).forEach((e) => {
                                !g.has(e) && n.add(e);
                            }));
                }),
                    d.forEach((e, r) => {
                        let { filters: o } = e;
                        (null == o || o.friends === t || n.has(o.guild)) && v.add(r);
                    }),
                    E();
            })(r);
        case s.QUERY_SET:
            return (function (e) {
                let { uuid: r, payload: t } = e;
                d.set(r, t), m(r, t);
            })(r);
        case s.QUERY_CLEAR:
            return (function (e) {
                let { uuid: r } = e;
                d.delete(r), v.delete(r), 0 === v.size && E.cancel();
            })(r);
    }
});
