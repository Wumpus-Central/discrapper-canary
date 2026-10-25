(n.d(t, { IC: () => i, T3: () => u, Wq: () => l, Zu: () => s }), n(321073));
let l = new Set(["reply", "plan_proposed", "terminal_error"]);
function i(e, t) {
    let n = (function (e) {
        let t = o.get(e);
        if (null != t) return t;
        let n = new Set(),
            l = -1;
        for (let [t, i] of e.entries())
            (null != i.turn_seq && n.add(i.turn_seq), -1 === l && "todos" === i.kind && null == i.task_id && (l = t));
        let i = { seenSeq: n, todosAt: l };
        return (o.set(e, i), i);
    })(e);
    if (null != t.turn_seq && n.seenSeq.has(t.turn_seq)) return e;
    let i = e.slice();
    return (o.delete(e), d(i, n, t), o.set(i, n), r.set(i, u(e) || l.has(t.kind)), i);
}
function s(e) {
    let t = [],
        n = { seenSeq: new Set(), todosAt: -1 };
    for (let l of e) d(t, n, l);
    return (o.set(t, n), t);
}
let r = new WeakMap();
function u(e) {
    let t = r.get(e);
    return (null == t && ((t = e.some((e) => l.has(e.kind))), r.set(e, t)), t);
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
    null != n.turn_seq && t.seenSeq.add(n.turn_seq);
    let l = e[t.todosAt].turn_seq;
    (null != n.turn_seq && null != l && n.turn_seq < l) || (e[t.todosAt] = n);
}
