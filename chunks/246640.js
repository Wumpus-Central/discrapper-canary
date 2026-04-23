"use strict";
t(321073);
var n = t(91871),
    o = t.n(n),
    i = t(111956),
    a = t.n(i);
let l = /[\u0300-\u036f]/g,
    s = null == String.prototype.normalize ? (e) => e : (e) => e.normalize("NFD").replace(l, "").normalize("NFC"),
    u =
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
function c(e, r) {
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
    v = a()(
        () => {
            0 !== d.size &&
                (d.forEach((e) => {
                    let r = p.get(e);
                    null != r && m(e, r);
                }),
                d.clear());
        },
        100,
        { leading: !0, trailing: !0 },
    );
function m(e, r) {
    let { query: t, limit: n, filters: i, blacklist: a, whitelist: l, boosters: p, boosterFallback: d } = r,
        v = null != i && i.strict ? (i.guild ?? null) : null,
        m = RegExp(`^${t.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")}`, "i"),
        b = RegExp(t.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&"), "i"),
        h = [];
    if ("" === t) return g(t, h, e);
    let y = t.toLocaleLowerCase(),
        x = u(y);
    f.forEach((e, r) => {
        let n;
        if (
            !(function (e, r, t, n, o) {
                if (null != n && n.indexOf(e) >= 0) return !1;
                if (null != o && o.indexOf(e) >= 0) return !0;
                if (null != t) {
                    let { friends: e, staff: n, guild: o, provisional: i } = t;
                    return (
                        (null == i || r.isProvisional === i) &&
                        ((!0 === e && !0 === r.isFriend) ||
                            (!0 === n && !0 === r.isStaff) ||
                            (null != o && (null != r.nicknames[o] || null === r.nicknames[o])))
                    );
                }
                return !0;
            })(r, e, i, a, l)
        )
            return;
        let { username: c } = e;
        if (r === t) {
            var f;
            n = { id: r, username: c, comparator: r, score: ((f = p[r]), 10 * (f ?? d)) };
        } else {
            let t = [e.username, e.friendNickname, e.globalName].filter((e) => null != e);
            if (null != v) {
                let r = e.nicknames[v];
                null != r && t.push(r);
            } else t.push(...Object.values(e.nicknames).filter((e) => null != e));
            t.forEach((e) => {
                var t, i, a, l;
                let f,
                    v = s(e.toLocaleLowerCase());
                m.test(e)
                    ? (f = { comparator: e, score: ((t = p[r]), 10 * (t ?? d)) })
                    : b.test(e)
                      ? (f = { comparator: e, score: ((i = p[r]), 5 * (i ?? d)) })
                      : o()(y, v)
                        ? (f = { comparator: e, score: ((a = p[r]), +(a ?? d)) })
                        : o()(x, u(v)) && (f = { comparator: e, score: ((l = p[r]), +(l ?? d)) }),
                    null != f && (null == n || n.score < f.score) && (n = { ...f, id: r, username: c });
            });
        }
        null != n && h.push(n);
    }),
        h.sort(c),
        h.length > n && (h.length = n),
        g(t, h, e);
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
                        o =
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
                    f.set(e.id, o),
                        p.size > 0 &&
                            ((o.isFriend !== r?.isFriend ||
                                o.friendNickname !== r?.friendNickname ||
                                o.isStaff !== r?.isStaff) &&
                                (t = !0),
                            Object.keys(o.nicknames).forEach((e) => {
                                n.add(e);
                            }));
                }),
                    p.forEach((e, r) => {
                        let { filters: o } = e;
                        (null == o || o.friends === t || o.staff === t || n.has(o.guild)) && d.add(r);
                    }),
                    v();
            })(r);
        case "QUERY_SET":
            return (function (e) {
                let { uuid: r, payload: t } = e;
                p.set(r, t), m(r, t);
            })(r);
        case "QUERY_CLEAR":
            return (function (e) {
                let { uuid: r } = e;
                p.delete(r), d.delete(r), 0 === d.size && v.cancel();
            })(r);
        case "REQUEST_DEBUG_STATE":
            return (function (e) {
                let { uuid: r } = e,
                    t = { type: "DEBUG_STATE", uuid: r, payload: { users: JSON.stringify(Object.fromEntries(f)) } };
                self.postMessage(t);
            })(r);
    }
});
