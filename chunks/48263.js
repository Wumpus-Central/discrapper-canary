n(388685), n(49124), n(467055), n(413496), n(433524), n(35282), n(539854), n(642613), n(415506);
var t = n(658722),
    l = n.n(t),
    o = n(954955),
    i = n.n(o),
    a = n(226951),
    s = n(624138),
    c = n(620490);
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
    v = i()(
        () => {
            0 !== d.size &&
                (d.forEach((e) => {
                    let r = p.get(e);
                    null != r && b(e, r);
                }),
                d.clear());
        },
        100,
        {
            leading: !0,
            trailing: !0,
        },
    );
function m(e, r, n) {
    return e * (null != r ? r : n);
}
function b(e, r) {
    var n;
    let { query: t, limit: o, filters: i, blacklist: p, whitelist: d, boosters: v, boosterFallback: b } = r,
        y = null != i && i.strict && null != (n = i.guild) ? n : null,
        O = RegExp("^".concat(a.Z.escape(t)), "i"),
        h = RegExp(a.Z.escape(t), "i"),
        E = [];
    if ("" === t) return g(t, E, e);
    let w = t.toLocaleLowerCase(),
        S = (0, s.Fv)(w);
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
            })(r, e, i, p, d)
        )
            return;
        let { username: o } = e;
        if (r === t)
            n = {
                id: r,
                username: o,
                comparator: r,
                score: m(10, v[r], b),
            };
        else {
            let t = [e.username, e.friendNickname, e.globalName].filter((e) => null != e);
            if (null != y) {
                let r = e.nicknames[y];
                null != r && t.push(r);
            } else t.push(...Object.values(e.nicknames).filter((e) => null != e));
            t.forEach((e) => {
                var t, i;
                let a,
                    c = (0, s._I)(e.toLocaleLowerCase());
                O.test(e)
                    ? (a = {
                          comparator: e,
                          score: m(10, v[r], b),
                      })
                    : h.test(e)
                      ? (a = {
                            comparator: e,
                            score: m(5, v[r], b),
                        })
                      : l()(w, c)
                        ? (a = {
                              comparator: e,
                              score: m(1, v[r], b),
                          })
                        : l()(S, (0, s.Fv)(c)) &&
                          (a = {
                              comparator: e,
                              score: m(1, v[r], b),
                          }),
                    null != a &&
                        (null == n || n.score < a.score) &&
                        ((t = u({}, a)),
                        (i = i =
                            {
                                id: r,
                                username: o,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                            : (function (e, r) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var t = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, t);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        (n = t));
            });
        }
        null != n && E.push(n);
    }),
        E.sort(c.Z),
        E.length > o && (E.length = o),
        g(t, E, e);
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
                    var r, l, o, i, a, s, c, d;
                    let v = null != (r = f.get(e.id)) ? r : null,
                        m =
                            null == v
                                ? e
                                : {
                                      id: e.id,
                                      username: null != (l = e.username) ? l : v.username,
                                      isFriend: null != (o = e.isFriend) ? o : v.isFriend,
                                      isStaff: null != (i = e.isStaff) ? i : v.isStaff,
                                      isBot: null != (a = e.isBot) ? a : v.isBot,
                                      isProvisional: null != (s = e.isProvisional) ? s : v.isProvisional,
                                      friendNickname: null != (c = e.friendNickname) ? c : v.friendNickname,
                                      globalName: null != (d = e.globalName) ? d : v.globalName,
                                      nicknames: u({}, v.nicknames, e.nicknames),
                                  };
                    f.set(e.id, m),
                        p.size > 0 &&
                            ((m.isFriend !== (null == v ? void 0 : v.isFriend) ||
                                m.friendNickname !== (null == v ? void 0 : v.friendNickname) ||
                                m.isStaff !== (null == v ? void 0 : v.isStaff)) &&
                                (n = !0),
                            Object.keys(m.nicknames).forEach((e) => {
                                t.add(e);
                            }));
                }),
                    p.forEach((e, r) => {
                        let { filters: l } = e;
                        (null == l || l.friends === n || l.staff === n || t.has(l.guild)) && d.add(r);
                    }),
                    v();
            })(r);
        case "QUERY_SET":
            return (function (e) {
                let { uuid: r, payload: n } = e;
                p.set(r, n), b(r, n);
            })(r);
        case "QUERY_CLEAR":
            return (function (e) {
                let { uuid: r } = e;
                p.delete(r), d.delete(r), 0 === d.size && v.cancel();
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
