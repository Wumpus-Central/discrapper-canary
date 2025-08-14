t(388685), t(413496), t(433524), t(35282), t(539854), t(642613), t(415506);
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
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            n.forEach(function (r) {
                var n;
                (n = t[r]),
                    r in e
                        ? Object.defineProperty(e, r, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[r] = n);
            });
    }
    return e;
}
let f = new Map(),
    p = new Map(),
    d = new Set(),
    v = a()(
        () => {
            0 !== d.size &&
                (d.forEach((e) => {
                    let r = p.get(e);
                    null != r && O(e, r);
                }),
                d.clear());
        },
        100,
        {
            leading: !0,
            trailing: !0,
        },
    );
function b(e, r, t) {
    return e * (null != r ? r : t);
}
function O(e, r) {
    var t;
    let { query: n, limit: o, filters: a, blacklist: p, whitelist: d, boosters: v, boosterFallback: O } = r,
        m = null != a && a.strict && null != (t = a.guild) ? t : null,
        g = RegExp("^".concat(i.Z.escape(n)), "i"),
        h = RegExp(i.Z.escape(n), "i"),
        w = [];
    if ("" === n) return y(n, w, e);
    let j = n.toLocaleLowerCase(),
        E = (0, c.Fv)(j);
    f.forEach((e, r) => {
        let t;
        if (
            !(function (e, r, t, n, l) {
                if (null != n && n.indexOf(e) >= 0) return !1;
                if (null != l && l.indexOf(e) >= 0) return !0;
                if (null != t) {
                    let { friends: e, staff: n, guild: l, provisional: o } = t;
                    return (
                        (null == o || r.isProvisional === o) &&
                        ((!0 === e && !0 === r.isFriend) ||
                            (!0 === n && !0 === r.isStaff) ||
                            (null != l && (null != r.nicknames[l] || null === r.nicknames[l])))
                    );
                }
                return !0;
            })(r, e, a, p, d)
        )
            return;
        let { username: o } = e;
        if (r === n)
            t = {
                id: r,
                username: o,
                comparator: r,
                score: b(10, v[r], O),
            };
        else {
            let n = [e.username, e.friendNickname, e.globalName].filter((e) => null != e);
            if (null != m) {
                let r = e.nicknames[m];
                null != r && n.push(r);
            } else n.push(...Object.values(e.nicknames).filter((e) => null != e));
            n.forEach((e) => {
                var n, a;
                let i,
                    u = (0, c._I)(e.toLocaleLowerCase());
                g.test(e)
                    ? (i = {
                          comparator: e,
                          score: b(10, v[r], O),
                      })
                    : h.test(e)
                      ? (i = {
                            comparator: e,
                            score: b(5, v[r], O),
                        })
                      : l()(j, u)
                        ? (i = {
                              comparator: e,
                              score: b(1, v[r], O),
                          })
                        : l()(E, (0, c.Fv)(u)) &&
                          (i = {
                              comparator: e,
                              score: b(1, v[r], O),
                          }),
                    null != i &&
                        (null == t || t.score < i.score) &&
                        ((n = s({}, i)),
                        (a = a =
                            {
                                id: r,
                                username: o,
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
                        (t = n));
            });
        }
        null != t && w.push(t);
    }),
        w.sort(u.Z),
        w.length > o && (w.length = o),
        y(n, w, e);
}
function y(e, r, t) {
    self.postMessage({
        type: "USER_RESULTS",
        uuid: t,
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
                    t = !1,
                    n = new Set();
                r.forEach((e) => {
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
                                    for (n = 0; n < o.length; n++) (t = o[n]), r.indexOf(t) >= 0 || (l[t] = e[t]);
                                    return l;
                                })(e, r);
                            if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < o.length; n++)
                                    (t = o[n]),
                                        !(r.indexOf(t) >= 0) &&
                                            Object.prototype.propertyIsEnumerable.call(e, t) &&
                                            (l[t] = e[t]);
                            }
                            return l;
                        })(e, ["id"]);
                    let a = null != (r = f.get(l)) ? r : null,
                        i = s({}, a, o);
                    f.set(l, i),
                        p.size > 0 &&
                            ((i.isFriend !== (null == a ? void 0 : a.isFriend) ||
                                i.friendNickname !== (null == a ? void 0 : a.friendNickname) ||
                                i.isStaff !== (null == a ? void 0 : a.isStaff)) &&
                                (t = !0),
                            Object.keys(i.nicknames).forEach((e) => {
                                n.add(e);
                            }));
                }),
                    p.forEach((e, r) => {
                        let { filters: l } = e;
                        (null == l || l.friends === t || l.staff === t || n.has(l.guild)) && d.add(r);
                    }),
                    v();
            })(r);
        case "QUERY_SET":
            return (function (e) {
                let { uuid: r, payload: t } = e;
                p.set(r, t), O(r, t);
            })(r);
        case "QUERY_CLEAR":
            return (function (e) {
                let { uuid: r } = e;
                p.delete(r), d.delete(r), 0 === d.size && v.cancel();
            })(r);
    }
});
