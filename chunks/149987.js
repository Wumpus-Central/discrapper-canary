n(321073);
let i = new Set(["reply", "plan_proposed", "terminal_error"]),
    r = new WeakMap();
function a(e) {
    let t = r.get(e);
    return (null == t && ((t = e.some((e) => i.has(e.kind))), r.set(e, t)), t);
}
let s = new WeakMap();
function l(e, t, n) {
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
    let i = e[t.todosAt].turn_seq;
    (null != n.turn_seq && null != i && n.turn_seq < i) || (e[t.todosAt] = n);
}
n.d(
    t,
    {},
    {
        IC: function (e, t) {
            let n = (function (e) {
                let t = s.get(e);
                if (null != t) return t;
                let n = new Set(),
                    i = -1;
                for (let [t, r] of e.entries())
                    (null != r.turn_seq && n.add(r.turn_seq),
                        -1 === i && "todos" === r.kind && null == r.task_id && (i = t));
                let r = { seenSeq: n, todosAt: i };
                return (s.set(e, r), r);
            })(e);
            if (null != t.turn_seq && n.seenSeq.has(t.turn_seq)) return e;
            let o = e.slice();
            return (s.delete(e), l(o, n, t), s.set(o, n), r.set(o, a(e) || i.has(t.kind)), o);
        },
        T3: a,
        Wq: i,
        Zu: function (e) {
            let t = [],
                n = { seenSeq: new Set(), todosAt: -1 };
            for (let i of e) l(t, n, i);
            return (s.set(t, n), t);
        },
    },
);
