(n.d(t, { IC: () => l, T3: () => u, Wq: () => i, Zu: () => s }), n(321073));
let i = new Set(["reply", "plan_proposed", "terminal_error"]);
function l(e, t) {
    let n = (function (e) {
        let t = o.get(e);
        if (null != t) return t;
        let n = new Set(),
            i = -1;
        for (let [t, l] of e.entries())
            (null != l.turn_seq && n.add(l.turn_seq), -1 === i && "todos" === l.kind && null == l.task_id && (i = t));
        let l = { seenSeq: n, todosAt: i };
        return (o.set(e, l), l);
    })(e);
    if (null != t.turn_seq && n.seenSeq.has(t.turn_seq)) return e;
    let l = e.slice();
    return (o.delete(e), d(l, n, t), o.set(l, n), r.set(l, u(e) || i.has(t.kind)), l);
}
function s(e) {
    let t = [],
        n = { seenSeq: new Set(), todosAt: -1 };
    for (let i of e) d(t, n, i);
    return (o.set(t, n), t);
}
let r = new WeakMap();
function u(e) {
    let t = r.get(e);
    return (null == t && ((t = e.some((e) => i.has(e.kind))), r.set(e, t)), t);
}
let o = new WeakMap();
function d(e, t, n) {
    if (null != n.turn_seq && t.seenSeq.has(n.turn_seq)) return;
    if ("todos" !== n.kind || null != n.task_id) {
        (e.push(n), null != n.turn_seq && t.seenSeq.add(n.turn_seq));
        return;
    }
    if (-1 === t.todosAt) {
        ((t.todosAt = e.length), e.push(n), null != n.turn_seq && t.seenSeq.add(n.turn_seq));
        return;
    }
    let i = e[t.todosAt];
    (null != i.turn_seq && t.seenSeq.delete(i.turn_seq),
        (e[t.todosAt] = n),
        null != n.turn_seq && t.seenSeq.add(n.turn_seq));
}
