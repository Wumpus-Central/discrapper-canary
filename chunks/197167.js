n(321073);
var t = n(91871),
    a = n.n(t),
    i = n(111956),
    l = n.n(i),
    o = n(257120);
n(621466);
let s = /[\u0300-\u036f]/g,
    c = null == String.prototype.normalize ? (e) => e : (e) => e.normalize("NFD").replace(s, "").normalize("NFC"),
    u =
        null == String.prototype.normalize
            ? (e) => e
            : function (e) {
                  let r = n(209034),
                      t = "";
                  return (
                      [...e.normalize("NFD")].forEach((e) => {
                          t += r[e] ?? e;
                      }),
                      t.normalize("NFD").toLocaleLowerCase()
                  );
              };
function f(e, r) {
    if (e.score === r.score) {
        let n = e.sortable ?? e.comparator?.toLocaleLowerCase() ?? "",
            t = e.sortable ?? r.comparator?.toLocaleLowerCase() ?? "";
        if (n < t) return -1;
        if (n > t) return 1;
    }
    return r.score - e.score;
}
let d = new Map(),
    p = new Map(),
    m = new Set(),
    h = l()(
        () => {
            0 !== m.size &&
                (m.forEach((e) => {
                    let r = p.get(e);
                    null != r && b(e, r);
                }),
                m.clear());
        },
        100,
        { leading: !0, trailing: !0 },
    );
function b(e, r) {
    let { query: n, limit: t, filters: i, blacklist: l, whitelist: s, boosters: p, boosterFallback: m } = r,
        h = null != i && i.strict ? (i.guild ?? null) : null,
        b = RegExp(`^${o.A.escape(n)}`, "i"),
        v = RegExp(o.A.escape(n), "i"),
        E = [];
    if ("" === n) return g(n, E, e);
    let k = n.toLocaleLowerCase(),
        S = u(k);
    d.forEach((e, r) => {
        let t;
        if (
            !(function (e, r, n, t, a) {
                if (null != t && t.indexOf(e) >= 0) return !1;
                if (null != a && a.indexOf(e) >= 0) return !0;
                if (null != n) {
                    let { friends: e, staff: t, guild: a, provisional: i } = n;
                    return (
                        (null == i || r.isProvisional === i) &&
                        ((!0 === e && !0 === r.isFriend) ||
                            (!0 === t && !0 === r.isStaff) ||
                            (null != a && (null != r.nicknames[a] || null === r.nicknames[a])))
                    );
                }
                return !0;
            })(r, e, i, l, s)
        )
            return;
        let { username: o } = e;
        if (r === n) {
            var f;
            t = { id: r, username: o, comparator: r, score: ((f = p[r]), 10 * (f ?? m)) };
        } else {
            let n = [e.username, e.friendNickname, e.globalName].filter((e) => null != e);
            if (null != h) {
                let r = e.nicknames[h];
                null != r && n.push(r);
            } else n.push(...Object.values(e.nicknames).filter((e) => null != e));
            n.forEach((e) => {
                var n, i, l, s;
                let f,
                    d = c(e.toLocaleLowerCase());
                b.test(e)
                    ? (f = { comparator: e, score: ((n = p[r]), 10 * (n ?? m)) })
                    : v.test(e)
                      ? (f = { comparator: e, score: ((i = p[r]), 5 * (i ?? m)) })
                      : a()(k, d)
                        ? (f = { comparator: e, score: ((l = p[r]), +(l ?? m)) })
                        : a()(S, u(d)) && (f = { comparator: e, score: ((s = p[r]), +(s ?? m)) }),
                    null != f && (null == t || t.score < f.score) && (t = { ...f, id: r, username: o });
            });
        }
        null != t && E.push(t);
    }),
        E.sort(f),
        E.length > t && (E.length = t),
        g(n, E, e);
}
function g(e, r, n) {
    self.postMessage({ type: "USER_RESULTS", uuid: n, payload: { query: e, results: r } });
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
                    let r = d.get(e.id) ?? null,
                        a =
                            null == r
                                ? e
                                : {
                                      id: e.id,
                                      username: e.username ?? r.username,
                                      isFriend: e.isFriend ?? r.isFriend,
                                      isStaff: e.isStaff ?? r.isStaff,
                                      isBot: e.isBot ?? r.isBot,
                                      isProvisional: e.isProvisional ?? r.isProvisional,
                                      friendNickname: e.friendNickname ?? r.friendNickname,
                                      globalName: e.globalName ?? r.globalName,
                                      nicknames: { ...r.nicknames, ...e.nicknames },
                                  };
                    d.set(e.id, a),
                        p.size > 0 &&
                            ((a.isFriend !== r?.isFriend ||
                                a.friendNickname !== r?.friendNickname ||
                                a.isStaff !== r?.isStaff) &&
                                (n = !0),
                            Object.keys(a.nicknames).forEach((e) => {
                                t.add(e);
                            }));
                }),
                    p.forEach((e, r) => {
                        let { filters: a } = e;
                        (null == a || a.friends === n || a.staff === n || t.has(a.guild)) && m.add(r);
                    }),
                    h();
            })(r);
        case "QUERY_SET":
            return (function (e) {
                let { uuid: r, payload: n } = e;
                p.set(r, n), b(r, n);
            })(r);
        case "QUERY_CLEAR":
            return (function (e) {
                let { uuid: r } = e;
                p.delete(r), m.delete(r), 0 === m.size && h.cancel();
            })(r);
        case "REQUEST_DEBUG_STATE":
            return (function (e) {
                let { uuid: r } = e,
                    n = { type: "DEBUG_STATE", uuid: r, payload: { users: JSON.stringify(Object.fromEntries(d)) } };
                self.postMessage(n);
            })(r);
    }
});
