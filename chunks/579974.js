n(938796);
var l = n(158390),
    i = n(665260),
    r = n(451988),
    s = n(73153),
    a = n(778858),
    o = n(225123),
    u = n(963852),
    c = n(46653),
    d = n(696451),
    h = n(287809),
    m = n(340837);
let f = new Map(),
    p = new Map(),
    g = new Map(),
    x = new Map(),
    E = new Map(),
    S = new Map(),
    y = new Map(),
    C = null,
    A = 1 / 0,
    b = 0;
function I(e) {
    return null != e && !(0, i.Lt)(e.flags ?? 0, m.D.IS_GUEST);
}
function v(e, t) {
    return x.get(e)?.get(t);
}
function N(e, t, n) {
    let l = x.get(e);
    l?.get(t) === n && (l.delete(t), 0 === l.size && x.delete(e));
}
function T(e, t) {
    let n = p.get(e);
    (null == n && ((n = new Set()), p.set(e, n)), n.add(t));
}
function k(e, t) {
    let n = E.get(e);
    null != n && (n.delete(t), 0 === n.size && E.delete(e));
}
function j() {
    M.delay(!1);
}
function _(e) {
    (S.get(e)?.cancel(), S.delete(e));
}
function R(e) {
    if (null != C) {
        if (A <= e) return;
        clearTimeout(C);
    }
    ((A = e), (C = setTimeout(O, Math.max(0, e - Date.now()))));
}
function w() {
    (null != C && clearTimeout(C), (C = null), (A = 1 / 0));
}
function O() {
    ((C = null), (A = 1 / 0));
    let e = Date.now(),
        t = 1 / 0,
        n = !1;
    for (let [l, i] of y) {
        for (let [r, s] of i) {
            if (s > e) {
                t = Math.min(t, s);
                continue;
            }
            (i.delete(r), null == v(l, r) && (T(l, r), (n = !0)));
        }
        0 === i.size && y.delete(l);
    }
    (1 / 0 !== t && R(t), n && j());
}
let M = new r.J_(500, () => {
    var e;
    if (
        ((e = Date.now()),
        f.forEach((t, n) => {
            (t.forEach((n, l) => {
                e - n >= 3e5 && t.delete(l);
            }),
                0 === t.size && f.delete(n));
        }),
        o.A.isConnected())
    )
        for (let [e, t] of p) {
            if (S.get(e)?.pending === !0) continue;
            p.delete(e);
            let n = Array.from(t);
            for (let t = 0; t < n.length; t += 100)
                !(function (e, t) {
                    let n = new Map();
                    for (let l of t) {
                        let t = d.Ay.getTrueMember(e, l);
                        I(t) ? n.set(l, t) : k(e, l);
                    }
                    if (0 === n.size) return;
                    let i = ((b += 1), `gmv:${Date.now().toString(36)}:${b.toString(36)}`),
                        r = x.get(e);
                    for (let t of (null == r && ((r = new Map()), x.set(e, r)), n.keys())) r.set(t, i);
                    let s = setTimeout(
                        () =>
                            (function (e) {
                                let t = g.get(e);
                                if (null == t) return;
                                g.delete(e);
                                let { guildId: n } = t,
                                    i = E.get(n);
                                null == i && ((i = new Map()), E.set(n, i));
                                let r = !1;
                                for (let l of t.members.keys()) {
                                    N(n, l, e);
                                    let t = (i.get(l) ?? 0) + 1;
                                    t < 3 ? (i.set(l, t), T(n, l), (r = !0)) : i.delete(l);
                                }
                                if ((0 === i.size && E.delete(n), r)) {
                                    let e;
                                    (null == (e = S.get(n)) && ((e = new l.A(1e3, 6e4)), S.set(n, e)), e.fail(j));
                                } else (_(n), p.has(n) && j());
                            })(i),
                        3e4,
                    );
                    (g.set(i, { guildId: e, members: n, timeout: s }),
                        a.A.requestMembersByIdWithNonce(e, Array.from(n.keys()), i));
                })(e, n.slice(t, t + 100));
        }
});
function L() {
    for (let { timeout: e } of g.values()) clearTimeout(e);
    (g.clear(), x.clear());
}
function P() {
    for (let e of S.values()) e.cancel();
    S.clear();
}
(s.h.subscribe("GUILD_MEMBERS_CHUNK_BATCH", (e) => {
    let { chunks: t } = e;
    for (let e of t) {
        if (null == e.nonce) continue;
        let t = e.nonce,
            n = g.get(t);
        if (null == n || n.guildId !== e.guildId) continue;
        (clearTimeout(n.timeout), g.delete(t), _(e.guildId), p.has(e.guildId) && j());
        let l = new Set(e.members.map((e) => e.user.id)),
            i = new Set(e.notFound ?? []),
            r = Date.now();
        n.members.forEach((n, a) => {
            if ((N(e.guildId, a, t), k(e.guildId, a), l.has(a))) {
                let t = f.get(e.guildId);
                (null == t && ((t = new Map()), f.set(e.guildId, t)), t.set(a, r));
            } else {
                var o;
                i.has(a) &&
                    ((o = d.Ay.getTrueMember(e.guildId, a)) === n ||
                        (null != o && (o.joinedAt ?? null) === (n.joinedAt ?? null))) &&
                    (function (e, t) {
                        let n = h.default.getUser(t);
                        null != n
                            ? s.h.dispatch({ type: "GUILD_MEMBER_REMOVE", guildId: e, user: (0, u.Vi)(n) })
                            : s.h.dispatch({ type: "GUILD_MEMBER_REMOVE_LOCAL", guildId: e, userId: t });
                    })(e.guildId, a);
            }
        });
    }
}),
    s.h.subscribe("GUILD_DELETE", (e) => {
        let { guild: t } = e;
        var n = t.id;
        for (let [e, t] of (f.delete(n), p.delete(n), E.delete(n), y.delete(n), _(n), g))
            t.guildId === n && (clearTimeout(t.timeout), g.delete(e));
        x.delete(n);
    }),
    s.h.subscribe("CONNECTION_OPEN", function () {
        for (let e of g.values()) for (let t of e.members.keys()) T(e.guildId, t);
        for (let [e, t] of (L(), P(), E.clear(), f.clear(), y)) for (let n of t.keys()) T(e, n);
        (y.clear(), w(), p.size > 0 && j());
    }),
    s.h.subscribe("CONNECTION_RESUMED", function () {
        p.size > 0 && j();
    }),
    s.h.subscribe("LOGOUT", function () {
        (f.clear(), p.clear(), E.clear(), y.clear(), w(), L(), P(), M.cancel());
    }),
    n.d(
        t,
        {},
        {
            m: function (e, t) {
                let n = Date.now(),
                    l = c.default.getId(),
                    i = f.get(e),
                    r = !1;
                for (let s of t) {
                    if (s === l || null != v(e, s) || !I(d.Ay.getTrueMember(e, s))) continue;
                    let t = i?.get(s);
                    if (null != t && n - t < 3e5) {
                        !(function (e, t, n) {
                            let l = y.get(e);
                            (null == l && ((l = new Map()), y.set(e, l)), l.set(t, n), R(n));
                        })(e, s, t + 3e5);
                        continue;
                    }
                    (T(e, s), (r = !0));
                }
                r && j();
            },
        },
    ));
