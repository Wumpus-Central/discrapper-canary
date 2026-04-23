"use strict";
r(321073);
var n = r(91871),
    i = r.n(n),
    o = r(111956),
    a = r.n(o),
    l = r(257120),
    s = r(240248),
    u = r(989133);
let c = new Map(),
    f = new Map(),
    p = new Set(),
    d = a()(
        () => {
            0 !== p.size &&
                (p.forEach((e) => {
                    let t = f.get(e);
                    null != t && v(e, t);
                }),
                p.clear());
        },
        100,
        { leading: !0, trailing: !0 },
    );
function v(e, t) {
    let { query: r, limit: n, filters: o, blacklist: a, whitelist: f, boosters: p, boosterFallback: d } = t,
        v = null != o && o.strict ? (o.guild ?? null) : null,
        b = RegExp(`^${l.A.escape(r)}`, "i"),
        g = RegExp(l.A.escape(r), "i"),
        h = [];
    if ("" === r) return m(r, h, e);
    let y = r.toLocaleLowerCase(),
        S = (0, s.S8)(y);
    c.forEach((e, t) => {
        let n;
        if (
            !(function (e, t, r, n, i) {
                if (null != n && n.indexOf(e) >= 0) return !1;
                if (null != i && i.indexOf(e) >= 0) return !0;
                if (null != r) {
                    let { friends: e, staff: n, guild: i, provisional: o } = r;
                    return (
                        (null == o || t.isProvisional === o) &&
                        ((!0 === e && !0 === t.isFriend) ||
                            (!0 === n && !0 === t.isStaff) ||
                            (null != i && (null != t.nicknames[i] || null === t.nicknames[i])))
                    );
                }
                return !0;
            })(t, e, o, a, f)
        )
            return;
        let { username: l } = e;
        if (t === r) {
            var u;
            n = { id: t, username: l, comparator: t, score: ((u = p[t]), 10 * (u ?? d)) };
        } else {
            let r = [e.username, e.friendNickname, e.globalName].filter((e) => null != e);
            if (null != v) {
                let t = e.nicknames[v];
                null != t && r.push(t);
            } else r.push(...Object.values(e.nicknames).filter((e) => null != e));
            r.forEach((e) => {
                var r, o, a, u;
                let c,
                    f = (0, s.sS)(e.toLocaleLowerCase());
                b.test(e)
                    ? (c = { comparator: e, score: ((r = p[t]), 10 * (r ?? d)) })
                    : g.test(e)
                      ? (c = { comparator: e, score: ((o = p[t]), 5 * (o ?? d)) })
                      : i()(y, f)
                        ? (c = { comparator: e, score: ((a = p[t]), +(a ?? d)) })
                        : i()(S, (0, s.S8)(f)) && (c = { comparator: e, score: ((u = p[t]), +(u ?? d)) }),
                    null != c && (null == n || n.score < c.score) && (n = { ...c, id: t, username: l });
            });
        }
        null != n && h.push(n);
    }),
        h.sort(u.A),
        h.length > n && (h.length = n),
        m(r, h, e);
}
function m(e, t, r) {
    self.postMessage({ type: "USER_RESULTS", uuid: r, payload: { query: e, results: t } });
}
self.addEventListener("message", (e) => {
    let { data: t } = e;
    if (null == t || null == t.type) throw Error("Invalid data");
    switch (t.type) {
        case "UPDATE_USERS":
            return (function (e) {
                let { payload: t } = e,
                    r = !1,
                    n = new Set();
                t.forEach((e) => {
                    let t = c.get(e.id) ?? null,
                        i =
                            null == t
                                ? e
                                : {
                                      id: e.id,
                                      username: e.username ?? t.username,
                                      isFriend: e.isFriend ?? t.isFriend,
                                      isStaff: e.isStaff ?? t.isStaff,
                                      isBot: e.isBot ?? t.isBot,
                                      isProvisional: e.isProvisional ?? t.isProvisional,
                                      friendNickname: e.friendNickname ?? t.friendNickname,
                                      globalName: e.globalName ?? t.globalName,
                                      nicknames: { ...t.nicknames, ...e.nicknames },
                                  };
                    c.set(e.id, i),
                        f.size > 0 &&
                            ((i.isFriend !== t?.isFriend ||
                                i.friendNickname !== t?.friendNickname ||
                                i.isStaff !== t?.isStaff) &&
                                (r = !0),
                            Object.keys(i.nicknames).forEach((e) => {
                                n.add(e);
                            }));
                }),
                    f.forEach((e, t) => {
                        let { filters: i } = e;
                        (null == i || i.friends === r || i.staff === r || n.has(i.guild)) && p.add(t);
                    }),
                    d();
            })(t);
        case "QUERY_SET":
            return (function (e) {
                let { uuid: t, payload: r } = e;
                f.set(t, r), v(t, r);
            })(t);
        case "QUERY_CLEAR":
            return (function (e) {
                let { uuid: t } = e;
                f.delete(t), p.delete(t), 0 === p.size && d.cancel();
            })(t);
        case "REQUEST_DEBUG_STATE":
            return (function (e) {
                let { uuid: t } = e,
                    r = { type: "DEBUG_STATE", uuid: t, payload: { users: JSON.stringify(Object.fromEntries(c)) } };
                self.postMessage(r);
            })(t);
    }
});
