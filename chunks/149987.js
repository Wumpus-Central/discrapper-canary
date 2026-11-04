n(321073);
let l = new Set(["reply", "plan_proposed", "terminal_error"]),
    i = new WeakMap();
function s(e) {
    let t = i.get(e);
    return (null == t && ((t = e.some((e) => l.has(e.kind))), i.set(e, t)), t);
}
let r = new WeakMap();
function u(e, t, n) {
    if (null != n.turn_seq && t.seenSeq.has(n.turn_seq)) return;
    if ("todos" !== n.kind || null != n.task_id) {
        (e.push(n), null != n.turn_seq && t.seenSeq.add(n.turn_seq));
        return;
    }
    if (-1 === t.todosAt) {
        ((t.todosAt = e.length), e.push(n), null != n.turn_seq && t.seenSeq.add(n.turn_seq));
        return;
    }
    null != n.turn_seq && t.seenSeq.add(n.turn_seq);
    let l = e[t.todosAt].turn_seq;
    (null != n.turn_seq && null != l && n.turn_seq < l) || (e[t.todosAt] = n);
}
n.d(
    t,
    {},
    {
        IC: function (e, t) {
            let n = (function (e) {
                let t = r.get(e);
                if (null != t) return t;
                let n = new Set(),
                    l = -1;
                for (let [t, i] of e.entries())
                    (null != i.turn_seq && n.add(i.turn_seq),
                        -1 === l && "todos" === i.kind && null == i.task_id && (l = t));
                let i = { seenSeq: n, todosAt: l };
                return (r.set(e, i), i);
            })(e);
            if (null != t.turn_seq && n.seenSeq.has(t.turn_seq)) return e;
            let o = e.slice();
            return (r.delete(e), u(o, n, t), r.set(o, n), i.set(o, s(e) || l.has(t.kind)), o);
        },
        T3: s,
        Wq: l,
        Zu: function (e) {
            let t = [],
                n = { seenSeq: new Set(), todosAt: -1 };
            for (let l of e) u(t, n, l);
            return (r.set(t, n), t);
        },
    },
);
