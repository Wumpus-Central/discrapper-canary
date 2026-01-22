n(896048), n(457529), n(446912), n(591487), n(727858), n(747238), n(321073), n(638769), n(65821);
var t = n(91871),
    l = n.n(t),
    o = n(111956),
    a = n.n(o),
    i = n(257120),
    s = n(240248),
    c = n(989133);
function u(e) {
    for (var r = 1; r < arguments.length; r++) {
        var n = null != arguments[r] ? arguments[r] : {},
            t = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            t.forEach(function (r) {
                var t;
                (t = n[r]),
                    r in e
                        ? Object.defineProperty(e, r, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[r] = t);
            });
    }
    return e;
}
let f = new Map(),
    p = new Map(),
    d = new Set(),
    m = a()(
        () => {
            0 !== d.size &&
                (d.forEach((e) => {
                    let r = p.get(e);
                    null != r && v(e, r);
                }),
                d.clear());
        },
        100,
        {
            leading: !0,
            trailing: !0,
        },
    );
function b(e, r, n) {
    return e * (null != r ? r : n);
}
function v(e, r) {
    var n;
    let { query: t, limit: o, filters: a, blacklist: p, whitelist: d, boosters: m, boosterFallback: v } = r,
        y = null != a && a.strict && null != (n = a.guild) ? n : null,
        O = RegExp("^".concat(i.A.escape(t)), "i"),
        h = RegExp(i.A.escape(t), "i"),
        S = [];
    if ("" === t) return g(t, S, e);
    let E = t.toLocaleLowerCase(),
        w = (0, s.S8)(E);
    f.forEach((e, r) => {
        let n;
        if (
            !(function (e, r, n, t, l) {
                if (null != t && t.indexOf(e) >= 0) return !1;
                if (null != l && l.indexOf(e) >= 0) return !0;
                if (null != n) {
                    let { friends: e, staff: t, guild: l, provisional: o } = n;
                    return (
                        (null == o || r.isProvisional === o) &&
                        ((!0 === e && !0 === r.isFriend) ||
                            (!0 === t && !0 === r.isStaff) ||
                            (null != l && (null != r.nicknames[l] || null === r.nicknames[l])))
                    );
                }
                return !0;
            })(r, e, a, p, d)
        )
            return;
        let { username: o } = e;
        if (r === t)
            n = {
                id: r,
                username: o,
                comparator: r,
                score: b(10, m[r], v),
            };
        else {
            let t = [e.username, e.friendNickname, e.globalName].filter((e) => null != e);
            if (null != y) {
                let r = e.nicknames[y];
                null != r && t.push(r);
            } else t.push(...Object.values(e.nicknames).filter((e) => null != e));
            t.forEach((e) => {
                var t, a;
                let i,
                    c = (0, s.sS)(e.toLocaleLowerCase());
                O.test(e)
                    ? (i = {
                          comparator: e,
                          score: b(10, m[r], v),
                      })
                    : h.test(e)
                      ? (i = {
                            comparator: e,
                            score: b(5, m[r], v),
                        })
                      : l()(E, c)
                        ? (i = {
                              comparator: e,
                              score: b(1, m[r], v),
                          })
                        : l()(w, (0, s.S8)(c)) &&
                          (i = {
                              comparator: e,
                              score: b(1, m[r], v),
                          }),
                    null != i &&
                        (null == n || n.score < i.score) &&
                        ((t = u({}, i)),
                        (a = a =
                            {
                                id: r,
                                username: o,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
                            : (function (e, r) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var t = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, t);
                                  }
                                  return n;
                              })(Object(a)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
                              }),
                        (n = t));
            });
        }
        null != n && S.push(n);
    }),
        S.sort(c.A),
        S.length > o && (S.length = o),
        g(t, S, e);
}
function g(e, r, n) {
    self.postMessage({
        type: "USER_RESULTS",
        uuid: n,
        payload: {
            query: e,
            results: r,
        },
    });
}
self.addEventListener("message", (e) => {
    let { data: r } = e;
    if (null == r || null == r.type) throw Error("Invalid data");
    switch (r.type) {
        case "UPDATE_USERS":
            return (function (e) {
                let { payload: r } = e,
                    n = !1,
                    t = new Set();
                r.forEach((e) => {
                    var r, l, o, a, i, s, c, d;
                    let m = null != (r = f.get(e.id)) ? r : null,
                        b =
                            null == m
                                ? e
                                : {
                                      id: e.id,
                                      username: null != (l = e.username) ? l : m.username,
                                      isFriend: null != (o = e.isFriend) ? o : m.isFriend,
                                      isStaff: null != (a = e.isStaff) ? a : m.isStaff,
                                      isBot: null != (i = e.isBot) ? i : m.isBot,
                                      isProvisional: null != (s = e.isProvisional) ? s : m.isProvisional,
                                      friendNickname: null != (c = e.friendNickname) ? c : m.friendNickname,
                                      globalName: null != (d = e.globalName) ? d : m.globalName,
                                      nicknames: u({}, m.nicknames, e.nicknames),
                                  };
                    f.set(e.id, b),
                        p.size > 0 &&
                            ((b.isFriend !== (null == m ? void 0 : m.isFriend) ||
                                b.friendNickname !== (null == m ? void 0 : m.friendNickname) ||
                                b.isStaff !== (null == m ? void 0 : m.isStaff)) &&
                                (n = !0),
                            Object.keys(b.nicknames).forEach((e) => {
                                t.add(e);
                            }));
                }),
                    p.forEach((e, r) => {
                        let { filters: l } = e;
                        (null == l || l.friends === n || l.staff === n || t.has(l.guild)) && d.add(r);
                    }),
                    m();
            })(r);
        case "QUERY_SET":
            return (function (e) {
                let { uuid: r, payload: n } = e;
                p.set(r, n), v(r, n);
            })(r);
        case "QUERY_CLEAR":
            return (function (e) {
                let { uuid: r } = e;
                p.delete(r), d.delete(r), 0 === d.size && m.cancel();
            })(r);
        case "REQUEST_DEBUG_STATE":
            return (function (e) {
                let { uuid: r } = e,
                    n = {
                        type: "DEBUG_STATE",
                        uuid: r,
                        payload: { users: JSON.stringify(Object.fromEntries(f)) },
                    };
                self.postMessage(n);
            })(r);
    }
});
