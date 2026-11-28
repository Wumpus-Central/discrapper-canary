n(321073);
var r = n(582128),
    i = n(506774),
    u = n(513425);
n(891784);
var l = n(886540),
    a = n(233470);
let s = "conjureMoveSettling",
    o = new Map(),
    c = new Set(),
    d = new Set();
function m() {
    for (let e of [...d]) e();
}
function f() {
    return i.w.get(s) ?? {};
}
function h(e, t) {
    let { [e]: n, ...r } = f();
    (null != t && (r[e] = t), 0 === Object.keys(r).length ? i.w.remove(s) : i.w.set(s, r));
}
function g(e, t) {
    return f()[e]?.owner === t.owner;
}
function T(e, t) {
    h(e, { movedAt: t.movedAt, moved: t.moved, owner: t.owner });
}
function w(e) {
    (e.timers.forEach(clearTimeout),
        (e.timers = []),
        null != e.quietTimer && clearTimeout(e.quietTimer),
        (e.quietTimer = null));
}
function v(e, t) {
    o.get(e) === t &&
        (w(t), o.delete(e), c.add(e), g(e, t) && h(e, null), 0 === o.size && u.A.removeChangeListener(q), m());
}
function y(e, t) {
    o.get(e) !== t ||
        t.finishing ||
        ((t.finishing = !0),
        w(t),
        t.timers.push(setTimeout(() => v(e, t), 1e4)),
        (async function (e, t) {
            try {
                await (0, a._b)(e);
            } catch {}
            v(e, t);
        })(e, t));
}
function p(e, t) {
    (t.timers.forEach(clearTimeout),
        (t.timers = [setTimeout(() => y(e, t), Math.max(0, t.movedAt + 3e5 - Date.now()))]),
        null != t.turnStartBy &&
            t.timers.push(
                setTimeout(
                    () => {
                        t.turnSeen || y(e, t);
                    },
                    Math.max(0, t.turnStartBy - Date.now()),
                ),
            ));
}
function A(e) {
    return "assistant" !== e.role || (0, l.B5)(e)
        ? null
        : null != e.turn_id
          ? e.turn_id
          : e.id.startsWith("turn:")
            ? e.id.slice(5)
            : null;
}
function S(e, t) {
    if (!t.watching || t.finishing) return;
    if (
        (t.earlierTurn &&
            null != t.earlierTurns &&
            (function (e, t) {
                let n = u.A.getMessages(e);
                for (let e = n.length - 1; e >= 0; e--) {
                    let r = A(n[e]);
                    if (null != r) {
                        if (t.ids.has(r)) return !1;
                        if (!t.unnamed) return !0;
                        ((t.unnamed = !1), t.ids.add(r));
                        break;
                    }
                }
                return !1;
            })(e, t.earlierTurns) &&
            ((t.earlierTurn = !1),
            (t.earlierTurns = null),
            (t.turnSeen = !0),
            null != t.quietTimer && clearTimeout(t.quietTimer),
            (t.quietTimer = null)),
        u.A.isThinking(e))
    ) {
        (t.earlierTurn || (t.turnSeen = !0), null != t.quietTimer && clearTimeout(t.quietTimer), (t.quietTimer = null));
        return;
    }
    if (!t.earlierTurn && !t.turnSeen) return;
    let n = !(function (e) {
        let t = u.A.getMessages(e);
        for (let e = t.length - 1; e >= 0; e--) {
            let n = t[e];
            if ("assistant" !== n.role || !(0, l.B5)(n)) return !0 === n.settledAsIdle;
        }
        return !1;
    })(e)
        ? 1500
        : 3e4;
    (null == t.quietTimer || t.quietMs !== n) &&
        (null != t.quietTimer && clearTimeout(t.quietTimer),
        (t.quietMs = n),
        (t.quietTimer = setTimeout(() => {
            ((t.quietTimer = null), !t.earlierTurn)
                ? y(e, t)
                : ((t.earlierTurn = !1), (t.earlierTurns = null), (t.turnStartBy = Date.now() + 3e4), p(e, t));
        }, n)));
}
function q() {
    for (let [e, t] of o) S(e, t);
}
function M(e, t, n, r) {
    let i = o.get(e) ?? null;
    null != i && w(i);
    let l = {
        movedAt: t,
        moved: n,
        owner: r,
        watching: !1,
        earlierTurn: !1,
        earlierTurns: null,
        turnSeen: !1,
        turnStartBy: null,
        finishing: !1,
        timers: [],
        quietTimer: null,
        quietMs: 0,
        replaced: i,
    };
    return (0 === o.size && u.A.addChangeListener(q), o.set(e, l), c.delete(e), p(e, l), m(), l);
}
function b(e) {
    return (d.add(e), () => d.delete(e));
}
for (let [e, t] of Object.entries(f())) {
    if (o.has(e) || c.has(e)) continue;
    if ("number" != typeof t?.movedAt || Date.now() - t.movedAt >= 3e5) {
        h(e, null);
        continue;
    }
    let n = M(e, t.movedAt, !0 === t.moved, t.owner);
    ((n.watching = !0), n.moved && (n.turnStartBy = Date.now() + 3e4), p(e, n), S(e, n));
}
n.d(
    t,
    {},
    {
        E8: async function (e, t) {
            let n = o.get(e);
            if (null == n) return;
            ((n.moved = !0), (n.replaced = null), g(e, n) && T(e, n));
            let r = u.A.isThinking(e),
                i = r
                    ? (function (e) {
                          let t = u.A.getMessages(e),
                              n = new Set();
                          for (let e of t) {
                              let t = A(e);
                              null != t && n.add(t);
                          }
                          let r = (0, l.Ji)(t);
                          return { ids: n, unnamed: null == r || null == A(r) };
                      })(e)
                    : null,
                a = !1;
            try {
                a = await t;
            } catch {
                a = !1;
            }
            if (
                !n.finishing &&
                !n.watching &&
                ((n.watching = !0),
                (n.earlierTurn = a && r && u.A.isThinking(e)),
                (n.earlierTurns = n.earlierTurn ? i : null),
                a ? n.earlierTurn || (n.turnStartBy = Date.now() + 3e4) : (n.turnStartBy = Date.now()),
                o.get(e) === n)
            ) {
                if (!a) return void y(e, n);
                (p(e, n), S(e, n));
            }
        },
        MX: function (e) {
            let t = o.get(e);
            if (null == t) return;
            w(t);
            let n = t.replaced,
                r = g(e, t);
            if (null == n) {
                (o.delete(e), r && h(e, null), 0 === o.size && u.A.removeChangeListener(q), m());
                return;
            }
            (o.set(e, n), r && T(e, n), n.finishing) ? v(e, n) : (p(e, n), S(e, n));
        },
        ss: function (e) {
            return r.useSyncExternalStore(b, () =>
                null == e ? null : o.has(e) ? "settling" : c.has(e) ? "settled" : null,
            );
        },
        u6: function (e) {
            let t = Date.now();
            T(e, M(e, t, !1, `${t}:${Math.random()}`));
        },
    },
);
