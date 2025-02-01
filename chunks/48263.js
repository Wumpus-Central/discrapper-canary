n(47120), n(653041), n(312677), n(411104);
var t = n(658722),
    o = n.n(t),
    l = n(954955),
    i = n.n(l),
    a = n(226951),
    u = n(624138),
    c = n(620490);
let s = {
        UPDATE_USERS: 'UPDATE_USERS',
        USER_RESULTS: 'USER_RESULTS',
        QUERY_SET: 'QUERY_SET',
        QUERY_CLEAR: 'QUERY_CLEAR'
    },
    f = new Map(),
    d = new Map(),
    p = new Set(),
    v = 'username',
    E = 'friendNickname',
    h = 'globalName',
    m = new Set(['isFriend', 'isBot', 'isProvisional', v, E, h]),
    g = i()(
        () => {
            0 !== p.size &&
                (p.forEach((e) => {
                    let r = d.get(e);
                    null != r && b(e, r);
                }),
                p.clear());
        },
        100,
        {
            leading: !0,
            trailing: !0
        }
    );
function S(e, r) {
    return e * (null != r ? r : 1);
}
function b(e, r) {
    var n, t;
    let { query: l, limit: i, filters: s, blacklist: d, whitelist: p } = r,
        m = null != s && s.strict && null !== (n = s.guild) && void 0 !== n ? n : null,
        g = null !== (t = r.boosters) && void 0 !== t ? t : {},
        b = RegExp('^'.concat(a.Z.escape(l)), 'i'),
        _ = RegExp(a.Z.escape(l), 'i'),
        w = [];
    if ('' === l) return R(l, w, e);
    let y = l.toLocaleLowerCase(),
        U = (0, u.Fv)(y);
    f.forEach((e, r) => {
        let n;
        if (
            !(function (e, r, n, t, o) {
                if (null != t && t.indexOf(e) >= 0) return !1;
                if (null != o && o.indexOf(e) >= 0) return !0;
                if (null != n) {
                    let { friends: e, guild: t, provisional: o } = n;
                    return (null == o || r.isProvisional === o) && ((!0 === e && !0 === r.isFriend) || (null != t && (null != r[t] || null === r[t])));
                }
                return !0;
            })(r, e, s, d, p)
        )
            return;
        let { username: t } = e;
        r === l
            ? (n = {
                  id: r,
                  username: t,
                  comparator: r,
                  score: S(10, g[r])
              })
            : Object.keys(e).forEach((l) => {
                  let i;
                  let a = e[l];
                  if ('boolean' == typeof a || null == a || (null != m && l !== v && l !== E && l !== h && m !== l)) return;
                  let c = (0, u._I)(a.toLocaleLowerCase());
                  b.test(a)
                      ? (i = {
                            comparator: a,
                            score: S(10, g[r])
                        })
                      : _.test(a)
                        ? (i = {
                              comparator: a,
                              score: S(5, g[r])
                          })
                        : o()(y, c)
                          ? (i = {
                                comparator: a,
                                score: S(1, g[r])
                            })
                          : o()(U, (0, u.Fv)(c)) &&
                            (i = {
                                comparator: a,
                                score: S(1, g[r])
                            }),
                      null != i &&
                          (null == n || n.score < i.score) &&
                          (n = {
                              ...i,
                              id: r,
                              username: t
                          });
              }),
            null != n && w.push(n);
    }),
        w.sort(c.Z),
        w.length > i && (w.length = i),
        R(l, w, e);
}
function R(e, r, n) {
    let t = {
        type: s.USER_RESULTS,
        uuid: n,
        payload: {
            query: e,
            results: r
        }
    };
    self.postMessage(t);
}
self.addEventListener('message', (e) => {
    let { data: r } = e;
    if (null == r || null == r.type) throw Error('Invalid data');
    switch (r.type) {
        case s.UPDATE_USERS:
            return (function (e) {
                let { payload: r } = e,
                    n = !1,
                    t = new Set();
                r.forEach((e) => {
                    var r;
                    let { id: o, ...l } = e,
                        i = null !== (r = f.get(o)) && void 0 !== r ? r : null,
                        a = {
                            ...i,
                            ...l
                        };
                    f.set(o, a),
                        d.size > 0 &&
                            ((a.isFriend !== (null == i ? void 0 : i.isFriend) || a.friendNickname !== (null == i ? void 0 : i.friendNickname)) && (n = !0),
                            Object.keys(a).forEach((e) => {
                                !m.has(e) && t.add(e);
                            }));
                }),
                    d.forEach((e, r) => {
                        let { filters: o } = e;
                        (null == o || o.friends === n || t.has(o.guild)) && p.add(r);
                    }),
                    g();
            })(r);
        case s.QUERY_SET:
            return (function (e) {
                let { uuid: r, payload: n } = e;
                d.set(r, n), b(r, n);
            })(r);
        case s.QUERY_CLEAR:
            return (function (e) {
                let { uuid: r } = e;
                d.delete(r), p.delete(r), 0 === p.size && g.cancel();
            })(r);
    }
});
