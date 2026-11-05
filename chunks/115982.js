(n(321073), n(134528), n(947204));
var l = n(191850),
    a = n(792996);
function r(e) {
    return e?.label_key === "testing_app";
}
let s = {
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
function i(e, t, n) {
    return e.map((e, l) => {
        let a = t?.[l] ?? null,
            r = n?.[l] ?? null;
        return { text: e, ...(null != a ? { error: a } : {}), ...(null != r ? { driven_by: r } : {}) };
    });
}
function u(e) {
    return (
        "node" === e.kind &&
        null != e.node &&
        null == e.task_id &&
        ("task" === e.node.node_kind || "task" === e.node.id)
    );
}
function o(e) {
    let t = [],
        n = [],
        l = null,
        a = null,
        s = 0;
    for (let [o, d] of e.entries()) {
        var i;
        let e = d.segment;
        if (
            (n.push(e ?? s),
            "thinking" === d.kind ||
                ((null == (i = d).task_id || "" === i.task_id) &&
                    ("error" === i.kind ||
                        "terminal_error" === i.kind ||
                        (!("node" !== i.kind || null == i.node || u(i)) && !r(i.node)))))
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
                : ((a = { type: "todos", key: `todos-${o}`, segment: e ?? s, todos: n }), t.push(a));
            continue;
        }
        if ("assistant_delta" !== d.kind || (null != d.task_id && "" !== d.task_id)) continue;
        let c = d.message ?? "";
        if ("" !== c)
            if (null == l) {
                s++;
                let a = e ?? s;
                ((n[o] = a), (l = { type: "message", key: `message-${o}`, segment: a, content: c }), t.push(l));
            } else l.content = c;
        !0 === d.message_finished && (l = null);
    }
    return { items: t, segmentOf: n };
}
let d = new WeakMap(),
    c = new WeakMap();
function m(e, t) {
    let n = c.get(e);
    null == n && ((n = {}), c.set(e, n));
    let l = t ? "active" : "settled";
    return (n[l] ??= (function (e) {
        let t,
            { turnActive: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            l = [],
            a = new Map(),
            u = new Map(),
            d = 0,
            c = new Map(),
            m = new Map(),
            { segmentOf: f } = o(e);
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
        function p(e, t) {
            let n = a.get(e);
            if (null != n) return n;
            let l = { taskId: e, task: h("task", "task", t), steps: [] };
            return (a.set(e, l), l);
        }
        function k(e, n, a, r) {
            if ("task" === a || "task" === n) return null != e ? p(e, r).task : (t = t ?? h("task", "task", r));
            let s = `${e ?? ""} ${n}`,
                i = u.get(s);
            if (null != i) return i;
            let o = h(n, "step", r);
            return (u.set(s, o), null != e ? p(e, r).steps.push(o) : l.push(o), o);
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
            g = (function (e) {
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
                (0 !== x.size &&
                    "error" !== n.kind &&
                    "terminal_error" !== n.kind &&
                    null != n.task_id &&
                    "" !== n.task_id &&
                    x.has(n.task_id)) ||
                (0 !== g.size &&
                    "node" === n.kind &&
                    null != n.node &&
                    (null == n.task_id || "" === n.task_id) &&
                    g.has(n.node.id))
            )
                continue;
            let e = f[t] ?? 0;
            if ("node" === n.kind && null != n.node) {
                let t = n.node,
                    l = k(n.task_id, t.id, t.node_kind ?? "step", e);
                if (
                    ((l.touched = ++d),
                    null != t.label_key && (l.labelKey = t.label_key),
                    null != t.label_text && (l.labelText = t.label_text),
                    null != t.group_label && (l.groupLabel = t.group_label),
                    null != t.helper_name && (l.helperName = t.helper_name),
                    null != t.helper_mark && (l.helperMark = t.helper_mark),
                    null != t.todo_id && (l.todoId = t.todo_id),
                    null != t.current_action && (l.currentAction = t.current_action),
                    null != t.result_text && (l.resultText = t.result_text),
                    null != t.tier && (l.tier = t.tier),
                    null != t.detail && m.set(l, i(t.detail, t.detail_error, t.detail_driven_by)),
                    null != t.append_detail)
                ) {
                    let e = t.driven_by ?? null,
                        n = i(
                            t.append_detail,
                            t.append_detail_error,
                            t.append_detail.map(() => e),
                        );
                    m.set(l, [...(m.get(l) ?? []), ...n]);
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
                let l = k(void 0, `${n.kind}-${t}`, "step", e);
                ((l.touched = ++d),
                    (l.labelKey = (function (e) {
                        let t = "error" === e.kind ? e.failure_kind : void 0,
                            n = `error_${t ?? "unknown"}`;
                        return n in s ? n : "error";
                    })(n)),
                    (l.status = "failed"),
                    null != n.message && "" !== n.message && (l.detail = [n.message]));
            }
        }
        for (let e of new Set([...m.keys(), ...c.keys()])) {
            let t = [...(m.get(e) ?? []), ...[...(c.get(e)?.values() ?? [])].flat()];
            ((e.detail = t.map((e) => e.text)),
                (e.detailDrivenBy = t.map((e) => e.driven_by ?? null)),
                (e.detailError = t.map((e) => e.error ?? null)));
        }
        let _ = [...a.values()];
        for (let e of _) n || "running" !== e.task.status || (e.task.status = "incomplete");
        return { steps: l, tasks: _, ...(null != t ? { turn: t } : {}) };
    })(e, { turnActive: t }));
}
n.d(
    t,
    {},
    {
        B4: function (e) {
            return o(e).items;
        },
        C6: function (e) {
            let t,
                { turnActive: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { items: l } = (null == (t = d.get(e)) && ((t = o(e)), d.set(e, t)), t),
                a = m(e, n),
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
                s = new Map();
            for (let e of l) "message" === e.type && s.set(e.segment, e);
            let i = new Set();
            for (let e of a.steps) i.add(e.segment);
            for (let e of a.tasks) i.add(e.task.segment);
            let u = l.find((e) => "todos" === e.type)?.segment,
                c = null == u ? void 0 : Math.max(u, ...i),
                f = Math.max(0, ...s.keys(), ...i, ...(null != c ? [c] : [])),
                h = [];
            for (let e = 0; e <= f; e++) {
                let t = s.get(e),
                    n = i.has(e),
                    l = c === e;
                (null != t || n || l) &&
                    h.push({
                        key: t?.key ?? `work-${e}`,
                        index: e,
                        ...(null != t ? { prose: t } : {}),
                        hasWork: n,
                        hasTodos: l,
                        ...(r.has(e) ? { durationMs: r.get(e) } : {}),
                    });
            }
            return h;
        },
        CT: function (e, t) {
            let { turnActive: n } = t,
                l = e.filter((e) => e.hasWork || e.hasTodos).at(-1)?.index,
                a = e.at(-1)?.index,
                r = n && null != l && l === a ? l : void 0;
            return { ...(null != l ? { lastWork: l } : {}), ...(null != r ? { open: r } : {}) };
        },
        Jf: m,
        Lf: function (e) {
            for (let t = e.length - 1; t >= 0; t--) {
                let n = e[t];
                if (null != n) {
                    if ("assistant_delta" === n.kind && null != n.message && "" !== n.message) return !0;
                    if (
                        !(u(n) || ("node" === n.kind && r(n.node))) &&
                        ("node" === n.kind || "error" === n.kind || "terminal_error" === n.kind)
                    )
                        break;
                }
            }
            return !1;
        },
        SY: function (e) {
            let t;
            for (let n of e) (null == t || n.touched > t.touched) && (t = n);
            return t;
        },
        WQ: function (e) {
            if ("running" === e.status && null != e.currentAction && "" !== e.currentAction) return e.currentAction;
            if (null != e.labelText && "" !== e.labelText) return e.labelText;
            let t = null != e.labelKey ? s[e.labelKey] : void 0;
            return a.intl.string(t ?? l.default.t8skVB);
        },
        lt: function (e) {
            for (let t = e.length - 1; t >= 0; t--) {
                let n = e[t];
                if (
                    n?.kind === "todos" &&
                    (null == n.task_id || "" === n.task_id) &&
                    null != n.items &&
                    n.items.length > 0
                )
                    return n.items;
            }
            return null;
        },
    },
);
