(n.d(t, { B4: () => c, C6: () => g, CT: () => p, Jf: () => x, Lf: () => j, SY: () => d, WQ: () => s, lt: () => k }),
    n(321073),
    n(134528),
    n(947204));
var l = n(248675),
    a = n(105292);
function r(e) {
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
};
function s(e) {
    if (null != e.labelText && "" !== e.labelText) return e.labelText;
    let t = null != e.labelKey ? i[e.labelKey] : void 0;
    return a.intl.string(t ?? l.default.t8skVB);
}
function u(e, t, n) {
    return e.map((e, l) => {
        let a = t?.[l] ?? null,
            r = n?.[l] ?? null;
        return { text: e, ...(null != a ? { error: a } : {}), ...(null != r ? { driven_by: r } : {}) };
    });
}
function d(e) {
    let t;
    for (let n of e) (null == t || n.touched > t.touched) && (t = n);
    return t;
}
function o(e) {
    return (
        "node" === e.kind &&
        null != e.node &&
        null == e.task_id &&
        ("task" === e.node.node_kind || "task" === e.node.id)
    );
}
function c(e) {
    return m(e).items;
}
function m(e) {
    let t = [],
        n = [],
        l = null,
        a = null,
        i = 0;
    for (let [u, d] of e.entries()) {
        var s;
        let e = d.segment;
        if (
            (n.push(e ?? i),
            "thinking" === d.kind ||
                ((null == (s = d).task_id || "" === s.task_id) &&
                    ("error" === s.kind ||
                        "terminal_error" === s.kind ||
                        (!("node" !== s.kind || null == s.node || o(s)) && !r(s.node)))))
        ) {
            l = null;
            continue;
        }
        if ("todos" === d.kind) {
            if (null != d.task_id && "" !== d.task_id) continue;
            let n = d.items ?? [];
            if (0 === n.length) continue;
            null != a
                ? (a.todos = n)
                : ((a = { type: "todos", key: `todos-${u}`, segment: e ?? i, todos: n }), t.push(a));
            continue;
        }
        if ("assistant_delta" !== d.kind || (null != d.task_id && "" !== d.task_id)) continue;
        let c = d.message ?? "";
        if ("" !== c)
            if (null == l) {
                i++;
                let a = e ?? i;
                ((n[u] = a), (l = { type: "message", key: `message-${u}`, segment: a, content: c }), t.push(l));
            } else l.content = c;
        !0 === d.message_finished && (l = null);
    }
    return { items: t, segmentOf: n };
}
let f = new WeakMap(),
    h = new WeakMap();
function x(e, t) {
    let n = h.get(e);
    null == n && ((n = {}), h.set(e, n));
    let l = t ? "active" : "settled";
    return (n[l] ??= (function (e) {
        let t,
            { turnActive: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            l = [],
            a = new Map(),
            s = new Map(),
            d = 0,
            o = new Map(),
            c = new Map(),
            { segmentOf: f } = m(e);
        function h(e, t, n) {
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
        function x(e, t) {
            let n = a.get(e);
            if (null != n) return n;
            let l = { taskId: e, task: h("task", "task", t), steps: [] };
            return (a.set(e, l), l);
        }
        function g(e, n, a, r) {
            if ("task" === a || "task" === n) return null != e ? x(e, r).task : (t = t ?? h("task", "task", r));
            let i = `${e ?? ""} ${n}`,
                u = s.get(i);
            if (null != u) return u;
            let d = h(n, "step", r);
            return (s.set(i, d), null != e ? x(e, r).steps.push(d) : l.push(d), d);
        }
        let p = (function (e) {
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
                        r(n.node) &&
                        t.add(n.node.id);
                return t;
            })(e);
        for (let [t, n] of e.entries()) {
            if (
                (0 !== p.size &&
                    "error" !== n.kind &&
                    "terminal_error" !== n.kind &&
                    null != n.task_id &&
                    "" !== n.task_id &&
                    p.has(n.task_id)) ||
                (0 !== j.size &&
                    "node" === n.kind &&
                    null != n.node &&
                    (null == n.task_id || "" === n.task_id) &&
                    j.has(n.node.id))
            )
                continue;
            let e = f[t] ?? 0;
            if ("node" === n.kind && null != n.node) {
                let t = n.node,
                    l = g(n.task_id, t.id, t.node_kind ?? "step", e);
                if (
                    ((l.touched = ++d),
                    null != t.label_key && (l.labelKey = t.label_key),
                    null != t.label_text && (l.labelText = t.label_text),
                    null != t.group_label && (l.groupLabel = t.group_label),
                    null != t.helper_name && (l.helperName = t.helper_name),
                    null != t.helper_mark && (l.helperMark = t.helper_mark),
                    null != t.todo_id && (l.todoId = t.todo_id),
                    null != t.tier && (l.tier = t.tier),
                    null != t.detail && c.set(l, u(t.detail, t.detail_error, t.detail_driven_by)),
                    null != t.append_detail)
                ) {
                    let e = t.driven_by ?? null,
                        n = u(
                            t.append_detail,
                            t.append_detail_error,
                            t.append_detail.map(() => e),
                        );
                    c.set(l, [...(c.get(l) ?? []), ...n]);
                }
                if (null != t.lines) {
                    let e = o.get(l) ?? new Map();
                    for (let n of (o.set(l, e), t.lines)) {
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
                ((l.touched = ++d),
                    (l.labelKey = (function (e) {
                        let t = "error" === e.kind ? e.failure_kind : void 0,
                            n = `error_${t ?? "unknown"}`;
                        return n in i ? n : "error";
                    })(n)),
                    (l.status = "failed"),
                    null != n.message && "" !== n.message && (l.detail = [n.message]));
            }
        }
        for (let e of new Set([...c.keys(), ...o.keys()])) {
            let t = [...(c.get(e) ?? []), ...[...(o.get(e)?.values() ?? [])].flat()];
            ((e.detail = t.map((e) => e.text)),
                (e.detailDrivenBy = t.map((e) => e.driven_by ?? null)),
                (e.detailError = t.map((e) => e.error ?? null)));
        }
        let k = [...a.values()];
        for (let e of k) n || "running" !== e.task.status || (e.task.status = "incomplete");
        return { steps: l, tasks: k, ...(null != t ? { turn: t } : {}) };
    })(e, { turnActive: t }));
}
function g(e) {
    let t,
        { turnActive: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { items: l } = (null == (t = f.get(e)) && ((t = m(e)), f.set(e, t)), t),
        a = x(e, n),
        r = (function (e) {
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
    for (let e of a.steps) s.add(e.segment);
    for (let e of a.tasks) s.add(e.task.segment);
    let u = l.find((e) => "todos" === e.type)?.segment,
        d = null == u ? void 0 : Math.max(u, ...s),
        o = Math.max(0, ...i.keys(), ...s, ...(null != d ? [d] : [])),
        c = [];
    for (let e = 0; e <= o; e++) {
        let t = i.get(e),
            n = s.has(e),
            l = d === e;
        (null != t || n || l) &&
            c.push({
                key: t?.key ?? `work-${e}`,
                index: e,
                ...(null != t ? { prose: t } : {}),
                hasWork: n,
                hasTodos: l,
                ...(r.has(e) ? { durationMs: r.get(e) } : {}),
            });
    }
    return c;
}
function p(e, t) {
    let { turnActive: n } = t,
        l = e.filter((e) => e.hasWork || e.hasTodos).at(-1)?.index,
        a = e.at(-1)?.index,
        r = n && null != l && l === a ? l : void 0;
    return { ...(null != l ? { lastWork: l } : {}), ...(null != r ? { open: r } : {}) };
}
function j(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (null != n) {
            if ("assistant_delta" === n.kind && null != n.message && "" !== n.message) return !0;
            if (
                !(o(n) || ("node" === n.kind && r(n.node))) &&
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
