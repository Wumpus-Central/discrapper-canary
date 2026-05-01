n(321073);
var t = n(91871),
    a = n.n(t),
    l = n(111956),
    i = n.n(l);
n(621466);
let o = /[\u0300-\u036f]/g,
    s = null == String.prototype.normalize ? (e) => e : (e) => e.normalize("NFD").replace(o, "").normalize("NFC"),
    c =
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
function u(e, r) {
    if (e.score === r.score) {
        let n = e.sortable ?? e.comparator?.toLocaleLowerCase() ?? "",
            t = e.sortable ?? r.comparator?.toLocaleLowerCase() ?? "";
        if (n < t) return -1;
        if (n > t) return 1;
    }
    return r.score - e.score;
}
let f = new Map(),
    p = new Map(),
    d = new Set(),
    m = i()(
        () => {
            0 !== d.size &&
                (d.forEach((e) => {
                    let r = p.get(e);
                    null != r && h(e, r);
                }),
                d.clear());
        },
        100,
        { leading: !0, trailing: !0 },
    );
function h(e, r) {
    let { query: n, limit: t, filters: l, blacklist: i, whitelist: o, boosters: p, boosterFallback: d } = r,
        m = null != l && l.strict ? (l.guild ?? null) : null,
        h = RegExp(`^${n.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")}`, "i"),
        b = RegExp(n.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&"), "i"),
        v = [];
    if ("" === n) return g(n, v, e);
    let E = n.toLocaleLowerCase(),
        k = c(E);
    f.forEach((e, r) => {
        let t;
        if (
            !(function (e, r, n, t, a) {
                if (null != t && t.indexOf(e) >= 0) return !1;
                if (null != a && a.indexOf(e) >= 0) return !0;
                if (null != n) {
                    let { friends: e, staff: t, guild: a, provisional: l } = n;
                    return (
                        (null == l || r.isProvisional === l) &&
                        ((!0 === e && !0 === r.isFriend) ||
                            (!0 === t && !0 === r.isStaff) ||
                            (null != a && (null != r.nicknames[a] || null === r.nicknames[a])))
                    );
                }
                return !0;
            })(r, e, l, i, o)
        )
            return;
        let { username: u } = e;
        if (r === n) {
            var f;
            t = { id: r, username: u, comparator: r, score: ((f = p[r]), 10 * (f ?? d)) };
        } else {
            let n = [e.username, e.friendNickname, e.globalName].filter((e) => null != e);
            if (null != m) {
                let r = e.nicknames[m];
                null != r && n.push(r);
            } else n.push(...Object.values(e.nicknames).filter((e) => null != e));
            n.forEach((e) => {
                var n, l, i, o;
                let f,
                    m = s(e.toLocaleLowerCase());
                h.test(e)
                    ? (f = { comparator: e, score: ((n = p[r]), 10 * (n ?? d)) })
                    : b.test(e)
                      ? (f = { comparator: e, score: ((l = p[r]), 5 * (l ?? d)) })
                      : a()(E, m)
                        ? (f = { comparator: e, score: ((i = p[r]), +(i ?? d)) })
                        : a()(k, c(m)) && (f = { comparator: e, score: ((o = p[r]), +(o ?? d)) }),
                    null != f && (null == t || t.score < f.score) && (t = { ...f, id: r, username: u });
            });
        }
        null != t && v.push(t);
    }),
        v.sort(u),
        v.length > t && (v.length = t),
        g(n, v, e);
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
                    let r = f.get(e.id) ?? null,
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
                    f.set(e.id, a),
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
                        (null == a || a.friends === n || a.staff === n || t.has(a.guild)) && d.add(r);
                    }),
                    m();
            })(r);
        case "QUERY_SET":
            return (function (e) {
                let { uuid: r, payload: n } = e;
                p.set(r, n), h(r, n);
            })(r);
        case "QUERY_CLEAR":
            return (function (e) {
                let { uuid: r } = e;
                p.delete(r), d.delete(r), 0 === d.size && m.cancel();
            })(r);
        case "REQUEST_DEBUG_STATE":
            return (function (e) {
                let { uuid: r } = e,
                    n = { type: "DEBUG_STATE", uuid: r, payload: { users: JSON.stringify(Object.fromEntries(f)) } };
                self.postMessage(n);
            })(r);
    }
});
