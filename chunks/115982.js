(n.d(t, { B4: () => c, C6: () => h, CT: () => x, Jf: () => g, Lf: () => j, SY: () => u, WQ: () => s, lt: () => k }),
    n(321073),
    n(134528),
    n(947204));
var l = n(248675),
    a = n(105292);
function i(e) {
    return e?.label_key === "testing_app";
}
let r = {
    healthcheck_failed: l.default.iwOTgo,
    preview_ready: l.default.okkgSB,
    working: l.default.t8skVB,
    error: l.default.avt0ax,
    error_service_unavailable: l.default.yreXyD,
    error_rate_limited: l.default.d8lNBq,
    error_timeout: l.default.t1R7Rt,
};
function s(e) {
    if (null != e.labelText && "" !== e.labelText) return e.labelText;
    let t = null != e.labelKey ? r[e.labelKey] : void 0;
    return a.intl.string(t ?? l.default.t8skVB);
}
function o(e, t, n) {
    return e.map((e, l) => {
        let a = t?.[l] ?? null,
            i = n?.[l] ?? null;
        return { text: e, ...(null != a ? { error: a } : {}), ...(null != i ? { driven_by: i } : {}) };
    });
}
function u(e) {
    let t;
    for (let n of e) (null == t || n.touched > t.touched) && (t = n);
    return t;
}
function d(e) {
    return (
        "node" === e.kind &&
        null != e.node &&
        null == e.task_id &&
        ("task" === e.node.node_kind || "task" === e.node.id)
    );
}
function c(e) {
    return f(e).items;
}
function f(e) {
    let t = [],
        n = [],
        l = null,
        a = null,
        r = 0;
    for (let [o, u] of e.entries()) {
        var s;
        let e = u.segment;
        if (
            (n.push(e ?? r),
            "thinking" === u.kind ||
                ((null == (s = u).task_id || "" === s.task_id) &&
                    ("error" === s.kind ||
                        "terminal_error" === s.kind ||
                        (!("node" !== s.kind || null == s.node || d(s)) && !i(s.node)))))
        ) {
            l = null;
            continue;
        }
        if ("todos" === u.kind) {
            if (null != u.task_id && "" !== u.task_id) continue;
            let n = u.items ?? [];
            if (0 === n.length) continue;
            null != a
                ? (a.todos = n)
                : ((a = { type: "todos", key: `todos-${o}`, segment: e ?? r, todos: n }), t.push(a));
            continue;
        }
        if ("assistant_delta" !== u.kind || (null != u.task_id && "" !== u.task_id)) continue;
        let c = u.message ?? "";
        if ("" !== c)
            if (null == l) {
                r++;
                let a = e ?? r;
                ((n[o] = a), (l = { type: "message", key: `message-${o}`, segment: a, content: c }), t.push(l));
            } else l.content = c;
        !0 === u.message_finished && (l = null);
    }
    return { items: t, segmentOf: n };
}
let m = new WeakMap(),
    p = new WeakMap();
function g(e, t) {
    let n = p.get(e);
    null == n && ((n = {}), p.set(e, n));
    let l = t ? "active" : "settled";
    return (n[l] ??= (function (e) {
        let t,
            { turnActive: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            l = [],
            a = new Map(),
            s = new Map(),
            u = 0,
            d = new Map(),
            c = new Map(),
            { segmentOf: m } = f(e);
        function p(e, t, n) {
            return {
                id: e,
                kind: t,
                detail: [],
                detailDrivenBy: [],
                detailError: [],
                status: "running",
                screenshots: [],
                browserSessions: [],
                attachments: [],
                touched: 0,
                segment: n,
            };
        }
        function g(e, t) {
            let n = a.get(e);
            if (null != n) return n;
            let l = { taskId: e, task: p("task", "task", t), steps: [] };
            return (a.set(e, l), l);
        }
        function h(e, n, a, i) {
            if ("task" === a || "task" === n) return null != e ? g(e, i).task : (t = t ?? p("task", "task", i));
            let r = `${e ?? ""} ${n}`,
                o = s.get(r);
            if (null != o) return o;
            let u = p(n, "step", i);
            return (s.set(r, u), null != e ? g(e, i).steps.push(u) : l.push(u), u);
        }
        let x = (function (e) {
                let t = new Set();
                for (let n of e) {
                    if ("node" !== n.kind || null == n.node) continue;
                    let e = n.task_id;
                    null != e &&
                        "" !== e &&
                        ("task" === n.node.node_kind || "task" === n.node.id) &&
                        "cancelled" === n.node.status &&
                        t.add(e);
                }
                return t;
            })(e),
            j = (function (e) {
                let t = new Set();
                for (let n of e)
                    "node" === n.kind &&
                        null != n.node &&
                        (null == n.task_id || "" === n.task_id) &&
                        i(n.node) &&
                        t.add(n.node.id);
                return t;
            })(e);
        for (let [t, n] of e.entries()) {
            if (
                (0 !== x.size &&
                    "error" !== n.kind &&
                    "terminal_error" !== n.kind &&
                    null != n.task_id &&
                    "" !== n.task_id &&
                    x.has(n.task_id)) ||
                (0 !== j.size &&
                    "node" === n.kind &&
                    null != n.node &&
                    (null == n.task_id || "" === n.task_id) &&
                    j.has(n.node.id))
            )
                continue;
            let e = m[t] ?? 0;
            if ("node" === n.kind && null != n.node) {
                let t = n.node,
                    l = h(n.task_id, t.id, t.node_kind ?? "step", e);
                if (
                    ((l.touched = ++u),
                    null != t.label_key && (l.labelKey = t.label_key),
                    null != t.label_text && (l.labelText = t.label_text),
                    null != t.group_label && (l.groupLabel = t.group_label),
                    null != t.helper_name && (l.helperName = t.helper_name),
                    null != t.helper_mark && (l.helperMark = t.helper_mark),
                    null != t.todo_id && (l.todoId = t.todo_id),
                    null != t.tier && (l.tier = t.tier),
                    null != t.detail && c.set(l, o(t.detail, t.detail_error, t.detail_driven_by)),
                    null != t.append_detail)
                ) {
                    let e = t.driven_by ?? null,
                        n = o(
                            t.append_detail,
                            t.append_detail_error,
                            t.append_detail.map(() => e),
                        );
                    c.set(l, [...(c.get(l) ?? []), ...n]);
                }
                if (null != t.lines) {
                    let e = d.get(l) ?? new Map();
                    for (let n of (d.set(l, e), t.lines)) {
                        let t = n.set ?? e.get(n.key) ?? [];
                        e.set(n.key, null != n.add ? [...t, ...n.add] : t);
                    }
                }
                (null != t.status && (l.status = t.status),
                    null != t.duration && (l.durationMs = t.duration),
                    null != t.screenshots && (l.screenshots = t.screenshots),
                    null != t.browser_sessions && (l.browserSessions = t.browser_sessions),
                    null != t.attachments && (l.attachments = t.attachments));
                continue;
            }
            if ("error" === n.kind || "terminal_error" === n.kind) {
                let l = h(void 0, `${n.kind}-${t}`, "step", e);
                ((l.touched = ++u),
                    (l.labelKey = (function (e) {
                        let t = "error" === e.kind ? e.failure_kind : void 0,
                            n = `error_${t ?? "unknown"}`;
                        return n in r ? n : "error";
                    })(n)),
                    (l.status = "failed"),
                    null != n.message && "" !== n.message && (l.detail = [n.message]));
            }
        }
        for (let e of new Set([...c.keys(), ...d.keys()])) {
            let t = [...(c.get(e) ?? []), ...[...(d.get(e)?.values() ?? [])].flat()];
            ((e.detail = t.map((e) => e.text)),
                (e.detailDrivenBy = t.map((e) => e.driven_by ?? null)),
                (e.detailError = t.map((e) => e.error ?? null)));
        }
        let k = [...a.values()];
        for (let e of k) n || "running" !== e.task.status || (e.task.status = "incomplete");
        return { steps: l, tasks: k, ...(null != t ? { turn: t } : {}) };
    })(e, { turnActive: t }));
}
function h(e) {
    let t,
        { turnActive: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { items: l } = (null == (t = m.get(e)) && ((t = f(e)), m.set(e, t)), t),
        a = g(e, n),
        i = (function (e) {
            let t = new Map();
            for (let n of e)
                "segment_settled" === n.kind &&
                    (null == n.task_id || "" === n.task_id) &&
                    null != n.segment &&
                    null != n.duration &&
                    t.set(n.segment, n.duration);
            return t;
        })(e),
        r = new Map();
    for (let e of l) "message" === e.type && r.set(e.segment, e);
    let s = new Set();
    for (let e of a.steps) s.add(e.segment);
    for (let e of a.tasks) s.add(e.task.segment);
    let o = l.find((e) => "todos" === e.type)?.segment,
        u = null == o ? void 0 : Math.max(o, ...s),
        d = Math.max(0, ...r.keys(), ...s, ...(null != u ? [u] : [])),
        c = [];
    for (let e = 0; e <= d; e++) {
        let t = r.get(e),
            n = s.has(e),
            l = u === e;
        (null != t || n || l) &&
            c.push({
                key: t?.key ?? `work-${e}`,
                index: e,
                ...(null != t ? { prose: t } : {}),
                hasWork: n,
                hasTodos: l,
                ...(i.has(e) ? { durationMs: i.get(e) } : {}),
            });
    }
    return c;
}
function x(e, t) {
    let { turnActive: n } = t,
        l = e.filter((e) => e.hasWork || e.hasTodos).at(-1)?.index,
        a = e.at(-1)?.index,
        i = n && null != l && l === a ? l : void 0;
    return { ...(null != l ? { lastWork: l } : {}), ...(null != i ? { open: i } : {}) };
}
function j(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (null != n) {
            if ("assistant_delta" === n.kind && null != n.message && "" !== n.message) return !0;
            if (
                !(d(n) || ("node" === n.kind && i(n.node))) &&
                ("node" === n.kind || "error" === n.kind || "terminal_error" === n.kind)
            )
                break;
        }
    }
    return !1;
}
function k(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (n?.kind === "todos" && (null == n.task_id || "" === n.task_id) && null != n.items && n.items.length > 0)
            return n.items;
    }
    return null;
}
