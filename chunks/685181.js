t(321073);
var n = t(91871),
    a = t.n(n),
    i = t(111956),
    l = t.n(i);
t(621466);
let o = /[\u0300-\u036f]/g,
    s = null == String.prototype.normalize ? (e) => e : (e) => e.normalize("NFD").replace(o, "").normalize("NFC"),
    c =
        null == String.prototype.normalize
            ? (e) => e
            : function (e) {
                  let r = t(209034),
                      n = "";
                  return (
                      [...e.normalize("NFD")].forEach((e) => {
                          n += r[e] ?? e;
                      }),
                      n.normalize("NFD").toLocaleLowerCase()
                  );
              };
function u(e, r) {
    if (e.score === r.score) {
        let t = e.sortable ?? e.comparator?.toLocaleLowerCase() ?? "",
            n = e.sortable ?? r.comparator?.toLocaleLowerCase() ?? "";
        if (t < n) return -1;
        if (t > n) return 1;
    }
    return r.score - e.score;
}
let f = new Map(),
    p = new Map(),
    d = new Set(),
    m = l()(
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
    let { query: t, limit: n, filters: i, blacklist: l, whitelist: o, boosters: p, boosterFallback: d } = r,
        m = null != i && i.strict ? (i.guild ?? null) : null,
        h = RegExp(`^${t.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")}`, "i"),
        v = RegExp(t.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&"), "i"),
        b = [];
    if ("" === t) return g(t, b, e);
    let E = t.toLocaleLowerCase(),
        k = c(E);
    f.forEach((e, r) => {
        let n;
        if (
            !(function (e, r, t, n, a) {
                if (null != n && n.indexOf(e) >= 0) return !1;
                if (null != a && a.indexOf(e) >= 0) return !0;
                if (null != t) {
                    let { friends: e, staff: n, guild: a, provisional: i } = t;
                    return (
                        (null == i || r.isProvisional === i) &&
                        ((!0 === e && !0 === r.isFriend) ||
                            (!0 === n && !0 === r.isStaff) ||
                            (null != a && a in r.nicknames))
                    );
                }
                return !0;
            })(r, e, i, l, o)
        )
            return;
        let { username: u } = e;
        if (r === t) {
            var f;
            n = { id: r, username: u, comparator: r, score: ((f = p[r]), 10 * (f ?? d)) };
        } else {
            let t = [e.username, e.friendNickname, e.globalName].filter((e) => null != e);
            if (null != m) {
                let r = e.nicknames[m];
                null != r && t.push(r);
            } else t.push(...Object.values(e.nicknames).filter((e) => null != e));
            t.forEach((e) => {
                var t, i, l, o;
                let f,
                    m = s(e.toLocaleLowerCase());
                h.test(e)
                    ? (f = { comparator: e, score: ((t = p[r]), 10 * (t ?? d)) })
                    : v.test(e)
                      ? (f = { comparator: e, score: ((i = p[r]), 5 * (i ?? d)) })
                      : a()(E, m)
                        ? (f = { comparator: e, score: ((l = p[r]), +(l ?? d)) })
                        : a()(k, c(m)) && (f = { comparator: e, score: ((o = p[r]), +(o ?? d)) }),
                    null != f && (null == n || n.score < f.score) && (n = { ...f, id: r, username: u });
            });
        }
        null != n && b.push(n);
    }),
        b.sort(u),
        b.length > n && (b.length = n),
        g(t, b, e);
}
function g(e, r, t) {
    self.postMessage({ type: "USER_RESULTS", uuid: t, payload: { query: e, results: r } });
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
                                (t = !0),
                            Object.keys(a.nicknames).forEach((e) => {
                                n.add(e);
                            }));
                }),
                    p.forEach((e, r) => {
                        let { filters: a } = e;
                        (null == a || a.friends === t || a.staff === t || n.has(a.guild)) && d.add(r);
                    }),
                    m();
            })(r);
        case "QUERY_SET":
            return (function (e) {
                let { uuid: r, payload: t } = e;
                p.set(r, t), h(r, t);
            })(r);
        case "QUERY_CLEAR":
            return (function (e) {
                let { uuid: r } = e;
                p.delete(r), d.delete(r), 0 === d.size && m.cancel();
            })(r);
        case "REQUEST_DEBUG_STATE":
            return (function (e) {
                let { uuid: r } = e,
                    t = { type: "DEBUG_STATE", uuid: r, payload: { users: JSON.stringify(Object.fromEntries(f)) } };
                self.postMessage(t);
            })(r);
    }
});
