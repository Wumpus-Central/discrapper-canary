(n.d(t, { B4: () => d, C6: () => g, CT: () => x, Jf: () => p, Lf: () => y, SY: () => o, WQ: () => s, lt: () => k }),
    n(321073),
    n(134528),
    n(947204));
var l = n(809526),
    r = n(105292);
function a(e) {
    return e?.label_key === "testing_app";
}
let i = {
    healthcheck_failed: l.default.iwOTgo,
    preview_ready: l.default.okkgSB,
    working: l.default.t8skVB,
    error: l.default.avt0ax,
    error_service_unavailable: l.default.yreXyD,
    error_rate_limited: l.default.d8lNBq,
    error_timeout: l.default.t1R7Rt,
    error_usage_limit: l.default["9zBM8L"],
    error_internal_error: l.default.ZnbiGS,
};
function s(e) {
    if ("running" === e.status && null != e.currentAction && "" !== e.currentAction) return e.currentAction;
    if (null != e.labelText && "" !== e.labelText) return e.labelText;
    let t = null != e.labelKey ? i[e.labelKey] : void 0;
    return r.intl.string(t ?? l.default.t8skVB);
}
function u(e, t, n) {
    return e.map((e, l) => {
        let r = t?.[l] ?? null,
            a = n?.[l] ?? null;
        return { text: e, ...(null != r ? { error: r } : {}), ...(null != a ? { driven_by: a } : {}) };
    });
}
function o(e) {
    let t;
    for (let n of e) (null == t || n.touched > t.touched) && (t = n);
    return t;
}
function c(e) {
    return (
        "node" === e.kind &&
        null != e.node &&
        null == e.task_id &&
        ("task" === e.node.node_kind || "task" === e.node.id)
    );
}
function d(e) {
    return f(e).items;
}
function f(e) {
    let t = [],
        n = [],
        l = null,
        r = null,
        i = 0;
    for (let [u, o] of e.entries()) {
        var s;
        let e = o.segment;
        if (
            (n.push(e ?? i),
            "thinking" === o.kind ||
                ((null == (s = o).task_id || "" === s.task_id) &&
                    ("error" === s.kind ||
                        "terminal_error" === s.kind ||
                        (!("node" !== s.kind || null == s.node || c(s)) && !a(s.node)))))
        ) {
            l = null;
            continue;
        }
        if ("todos" === o.kind) {
            if (null != o.task_id && "" !== o.task_id) continue;
            let n = o.items ?? [];
            if (0 === n.length) continue;
            null != r
                ? (r.todos = n)
                : ((r = { type: "todos", key: `todos-${u}`, segment: e ?? i, todos: n }), t.push(r));
            continue;
        }
        if ("assistant_delta" !== o.kind || (null != o.task_id && "" !== o.task_id)) continue;
        let d = o.message ?? "";
        if ("" !== d)
            if (null == l) {
                i++;
                let r = e ?? i;
                ((n[u] = r), (l = { type: "message", key: `message-${u}`, segment: r, content: d }), t.push(l));
            } else l.content = d;
        !0 === o.message_finished && (l = null);
    }
    return { items: t, segmentOf: n };
}
let h = new WeakMap(),
    m = new WeakMap();
function p(e, t) {
    let n = m.get(e);
    null == n && ((n = {}), m.set(e, n));
    let l = t ? "active" : "settled";
    return (n[l] ??= (function (e) {
        let t,
            { turnActive: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            l = [],
            r = new Map(),
            s = new Map(),
            o = 0,
            c = new Map(),
            d = new Map(),
            { segmentOf: h } = f(e);
        function m(e, t, n) {
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
        function p(e, t) {
            let n = r.get(e);
            if (null != n) return n;
            let l = { taskId: e, task: m("task", "task", t), steps: [] };
            return (r.set(e, l), l);
        }
        function g(e, n, r, a) {
            if ("task" === r || "task" === n) return null != e ? p(e, a).task : (t = t ?? m("task", "task", a));
            let i = `${e ?? ""} ${n}`,
                u = s.get(i);
            if (null != u) return u;
            let o = m(n, "step", a);
            return (s.set(i, o), null != e ? p(e, a).steps.push(o) : l.push(o), o);
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
            y = (function (e) {
                let t = new Set();
                for (let n of e)
                    "node" === n.kind &&
                        null != n.node &&
                        (null == n.task_id || "" === n.task_id) &&
                        a(n.node) &&
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
                (0 !== y.size &&
                    "node" === n.kind &&
                    null != n.node &&
                    (null == n.task_id || "" === n.task_id) &&
                    y.has(n.node.id))
            )
                continue;
            let e = h[t] ?? 0;
            if ("node" === n.kind && null != n.node) {
                let t = n.node,
                    l = g(n.task_id, t.id, t.node_kind ?? "step", e);
                if (
                    ((l.touched = ++o),
                    null != t.label_key && (l.labelKey = t.label_key),
                    null != t.label_text && (l.labelText = t.label_text),
                    null != t.group_label && (l.groupLabel = t.group_label),
                    null != t.helper_name && (l.helperName = t.helper_name),
                    null != t.helper_mark && (l.helperMark = t.helper_mark),
                    null != t.todo_id && (l.todoId = t.todo_id),
                    null != t.current_action && (l.currentAction = t.current_action),
                    null != t.result_text && (l.resultText = t.result_text),
                    null != t.tier && (l.tier = t.tier),
                    null != t.detail && d.set(l, u(t.detail, t.detail_error, t.detail_driven_by)),
                    null != t.append_detail)
                ) {
                    let e = t.driven_by ?? null,
                        n = u(
                            t.append_detail,
                            t.append_detail_error,
                            t.append_detail.map(() => e),
                        );
                    d.set(l, [...(d.get(l) ?? []), ...n]);
                }
                if (null != t.lines) {
                    let e = c.get(l) ?? new Map();
                    for (let n of (c.set(l, e), t.lines)) {
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
                let l = g(void 0, `${n.kind}-${t}`, "step", e);
                ((l.touched = ++o),
                    (l.labelKey = (function (e) {
                        let t = "error" === e.kind ? e.failure_kind : void 0,
                            n = `error_${t ?? "unknown"}`;
                        return n in i ? n : "error";
                    })(n)),
                    (l.status = "failed"),
                    null != n.message && "" !== n.message && (l.detail = [n.message]));
            }
        }
        for (let e of new Set([...d.keys(), ...c.keys()])) {
            let t = [...(d.get(e) ?? []), ...[...(c.get(e)?.values() ?? [])].flat()];
            ((e.detail = t.map((e) => e.text)),
                (e.detailDrivenBy = t.map((e) => e.driven_by ?? null)),
                (e.detailError = t.map((e) => e.error ?? null)));
        }
        let k = [...r.values()];
        for (let e of k) n || "running" !== e.task.status || (e.task.status = "incomplete");
        return { steps: l, tasks: k, ...(null != t ? { turn: t } : {}) };
    })(e, { turnActive: t }));
}
function g(e) {
    let t,
        { turnActive: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { items: l } = (null == (t = h.get(e)) && ((t = f(e)), h.set(e, t)), t),
        r = p(e, n),
        a = (function (e) {
            let t = new Map();
            for (let n of e)
                "segment_settled" === n.kind &&
                    (null == n.task_id || "" === n.task_id) &&
                    null != n.segment &&
                    null != n.duration &&
                    t.set(n.segment, n.duration);
            return t;
        })(e),
        i = new Map();
    for (let e of l) "message" === e.type && i.set(e.segment, e);
    let s = new Set();
    for (let e of r.steps) s.add(e.segment);
    for (let e of r.tasks) s.add(e.task.segment);
    let u = l.find((e) => "todos" === e.type)?.segment,
        o = null == u ? void 0 : Math.max(u, ...s),
        c = Math.max(0, ...i.keys(), ...s, ...(null != o ? [o] : [])),
        d = [];
    for (let e = 0; e <= c; e++) {
        let t = i.get(e),
            n = s.has(e),
            l = o === e;
        (null != t || n || l) &&
            d.push({
                key: t?.key ?? `work-${e}`,
                index: e,
                ...(null != t ? { prose: t } : {}),
                hasWork: n,
                hasTodos: l,
                ...(a.has(e) ? { durationMs: a.get(e) } : {}),
            });
    }
    return d;
}
function x(e, t) {
    let { turnActive: n } = t,
        l = e.filter((e) => e.hasWork || e.hasTodos).at(-1)?.index,
        r = e.at(-1)?.index,
        a = n && null != l && l === r ? l : void 0;
    return { ...(null != l ? { lastWork: l } : {}), ...(null != a ? { open: a } : {}) };
}
function y(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (null != n) {
            if ("assistant_delta" === n.kind && null != n.message && "" !== n.message) return !0;
            if (
                !(c(n) || ("node" === n.kind && a(n.node))) &&
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
