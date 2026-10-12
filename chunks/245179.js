(n.d(t, { A: () => v, b: () => U }), n(667532), n(321073), n(30146));
var i = n(17928),
    l = n(73153),
    s = n(260498),
    r = n(891784),
    u = n(886540),
    o = n(149987),
    d = n(248675),
    a = n(660183);
let c = new Map(),
    f = new Map(),
    _ = new Map(),
    p = [],
    h = new Map(),
    g = new Map(),
    C = new Set(),
    E = new Set(),
    S = 0,
    T = [];
function k(e, t, n) {
    let i = c.get(e);
    if (null == i) return;
    let l = (0, u.Si)(i, t);
    if (-1 === l) return void c.set(e, [...i, n((0, r.iW)("assistant", "", null != t ? { turnId: t } : {}))]);
    let s = i[l],
        o = n(null == t || null != s.turn_id || (0, u.s3)(s, t) ? s : { ...s, turn_id: t });
    o !== s && c.set(e, (0, u._D)(i, l, o));
}
function A(e) {
    return (0, u.q2)(c.get(e));
}
function N(e) {
    let t = _.get(e) ?? !1,
        n = A(e);
    if (t === n) return;
    _.set(e, n);
    let i = p.indexOf(e);
    if ((-1 !== i && p.splice(i, 1), p.unshift(e), n)) f.delete(e);
    else {
        let t;
        (null !=
            (t = (function (e) {
                let t = c.get(e);
                if (null == t) return null;
                for (let e = t.length - 1; e >= 0; e--) if ("assistant" === t[e].role && !(0, u.B5)(t[e])) return t[e];
                return null;
            })(e)) &&
        ("" !== t.content.trim() ||
            null != t.proposal ||
            null != t.clarification ||
            null != t.intake ||
            t.steps.some((e) => o.Wq.has(e.kind) && "terminal_error" !== e.kind))
            ? f.set(e, Date.now())
            : f.delete(e),
            !(function (e) {
                let t = c.get(e);
                if (null != t)
                    for (let n = t.length - 1; n >= 0; n--) {
                        let i = t[n];
                        if ("assistant" === i.role) {
                            if (null != i.finished_at || !(0, u.BL)(i)) return;
                            c.set(e, [...t.slice(0, n), { ...i, finished_at: Date.now() }, ...t.slice(n + 1)]);
                            return;
                        }
                    }
            })(e));
    }
}
function O(e) {
    let t = c.delete(e),
        n = w.delete(e),
        i = q.delete(e),
        l = f.delete(e),
        s = _.delete(e),
        r = h.delete(e),
        u = g.delete(e),
        o = C.delete(e),
        d = E.delete(e),
        a = p.indexOf(e);
    return (-1 !== a && p.splice(a, 1), t || n || i || l || s || r || u || o || d || -1 !== a);
}
class R extends i.Ay.Store {
    initialize() {
        this.waitFor(s.Ay);
    }
    getMessages(e) {
        return c.get(e) ?? T;
    }
    hasPendingSettingsRequest(e) {
        let t = this.getMessages(e),
            n = t[t.length - 1];
        return null != n && "assistant" === n.role && null != n.settingsRequest;
    }
    isThinking(e) {
        return A(e);
    }
    hasLoadedHistory(e) {
        return w.has(e);
    }
    isHistoryUnavailable(e) {
        return q.has(e);
    }
    getFinishedAt(e) {
        return A(e) ? null : (f.get(e) ?? null);
    }
    getProjectUsage(e) {
        return h.get(e) ?? null;
    }
    getThinkingActivity(e) {
        return g.get(e) ?? null;
    }
    isCompacting(e) {
        return C.has(e);
    }
    isSaving(e) {
        return E.has(e);
    }
    getSidebarWidth() {
        return S;
    }
    getActivityOrderedProjectIds() {
        return p.slice();
    }
    isAnyThinking() {
        for (let e of c.keys()) if (this.isThinking(e)) return !0;
        return !1;
    }
}
let w = new Map(),
    q = new Set();
function U(e) {
    return w.get(e) ?? null;
}
let v = new R(l.h, {
    LOGOUT: function () {
        if (
            0 === c.size &&
            0 === f.size &&
            0 === _.size &&
            0 === h.size &&
            0 === g.size &&
            0 === C.size &&
            0 === E.size &&
            0 === w.size &&
            0 === q.size &&
            0 === p.length &&
            0 === S
        )
            return !1;
        (c.clear(),
            f.clear(),
            _.clear(),
            h.clear(),
            g.clear(),
            C.clear(),
            E.clear(),
            w.clear(),
            q.clear(),
            (p.length = 0),
            (S = 0));
    },
    CONJURE_CHAT_HISTORY_SET: function (e) {
        let { projectId: t, entries: n, cursor: i, degraded: l } = e,
            s = w.get(t),
            u = w.has(t) ? (c.get(t) ?? []) : [];
        (w.set(t, i ?? null), !0 === l ? q.add(t) : q.delete(t), g.delete(t), C.delete(t), E.delete(t));
        let o = new Set(),
            d = n.filter((e) => null == e.id || (!o.has(e.id) && (o.add(e.id), !0))),
            a = (0, r.Bd)(d),
            f = null != i && !0 !== l ? a.findIndex((e) => null != e.id) : -1,
            _ = -1 === f ? -1 : u.findIndex((e) => e.id === a[f].id);
        (-1 !== _ && w.set(t, s ?? null), c.set(t, (0, r.YF)(-1 === _ ? a : [...u.slice(0, _), ...a.slice(f)])), N(t));
    },
    CONJURE_CHAT_HISTORY_PREPEND: function (e) {
        let { projectId: t, entries: n, cursor: i } = e;
        if ((w.set(t, i), 0 === n.length)) return;
        let l = c.get(t) ?? [],
            s = (0, r.Bd)(n),
            u = new Set(l.flatMap((e) => (null == e.id ? [] : [e.id]))),
            o = s.filter((e) => null == e.id || !u.has(e.id));
        c.set(t, (0, r.YF)([...o, ...l]));
    },
    CONJURE_CHAT_MESSAGE_APPEND: function (e) {
        let { projectId: t, content: n, id: i, optimisticId: l, userId: s, timestamp: o, attachments: d } = e,
            a = c.get(t) ?? [];
        if (a.some((e) => e.id === i)) return !1;
        let f = (0, r.iW)("user", n, { ts: o, id: i, userId: s, attachments: d }),
            _ = null == l ? -1 : a.findIndex((e) => e.id === l);
        if (-1 !== _) {
            ((f.render_id = a[_].render_id), c.set(t, [...a.slice(0, _), f, ...a.slice(_ + 1)]), N(t));
            return;
        }
        let p = [...a, f];
        ((0, u.q2)(p) || p.push((0, r.iW)("assistant", "")), c.set(t, p), N(t));
    },
    CONJURE_CHAT_MESSAGE_DISPOSITION: function (e) {
        let { projectId: t, id: n, activeTurnId: i, disposition: l } = e,
            s = c.get(t);
        if (null == s) return !1;
        let o = s.findIndex((e) => e.id === n);
        if (-1 === o) return !1;
        let d = "steered" === l ? s.filter((e, t) => t <= o || e.in_reply_to !== n || "queued" !== e.acknowledges) : s,
            a = d[o].disposition === l ? d : [...d.slice(0, o), { ...d[o], disposition: l }, ...d.slice(o + 1)],
            f = "steered" === l ? (0, u.gi)(a, i) : -1;
        if ("steered" === l && -1 === f && null != i) {
            let e = (0, u.Si)(a, i);
            if (-1 !== e && e < o) {
                let n = { ...a[e], turn_id: i };
                if (0 === n.steps.length) {
                    (c.set(t, [...a.slice(0, e), ...a.slice(e + 1, o + 1), n, ...a.slice(o + 1)]), N(t));
                    return;
                }
                ((a = [...a.slice(0, e), n, ...a.slice(e + 1)]), (f = e));
            }
        }
        if (-1 === f || f > o) return a !== s && void c.set(t, a);
        (c.set(t, [
            ...a.slice(0, f),
            { ...a[f], continued: !0, finished_at: a[f].finished_at ?? Date.now() },
            ...a.slice(f + 1, o + 1),
            (0, r.iW)("assistant", "", { turnId: i }),
            ...a.slice(o + 1),
        ]),
            N(t));
    },
    CONJURE_CHAT_MESSAGE_CANCELLED: function (e) {
        let { projectId: t, id: n } = e,
            i = c.get(t);
        if (null == i) return !1;
        let l = i.filter((e) => e.id !== n && e.in_reply_to !== n);
        if (l.length === i.length) return !1;
        c.set(t, l);
    },
    CONJURE_CHAT_SIDE_REPLY: function (e) {
        let { projectId: t, id: n, inReplyTo: i, content: l, timestamp: s } = e,
            u = c.get(t);
        if (null == u || u.some((e) => e.id === n)) return !1;
        let o = (0, r.iW)("assistant", l, { ts: s, id: n });
        ((o.kind = "side_reply"), (o.in_reply_to = i));
        let d = u.findIndex((e) => e.id === i);
        if (-1 === d) return void c.set(t, [...u, o]);
        let { disposition: a } = u[d];
        (null != a && (o.acknowledges = a), c.set(t, [...u.slice(0, d + 1), o, ...u.slice(d + 1)]));
    },
    CONJURE_CHAT_PUBLISH_NOTICE: function (e) {
        let { projectId: t, id: n, content: i, timestamp: l, publishNotice: s } = e,
            o = c.get(t);
        if (null == o || o.some((e) => e.id === n)) return !1;
        let d = (0, r.iW)("assistant", i, { ts: l, id: n });
        ((d.kind = "publish_notice"), (d.publishNotice = s), (d.finished = !0));
        let a = o.findLastIndex((e) => "assistant" === e.role && !(0, u.B5)(e)),
            f = -1 === a || (0, u.BL)(o[a]) ? null : o[a];
        null == f
            ? c.set(t, [...o, d])
            : 0 === f.steps.length
              ? c.set(t, [...o.slice(0, a), ...o.slice(a + 1), d, f])
              : c.set(t, [
                    ...o.slice(0, a),
                    { ...f, continued: !0, finished_at: f.finished_at ?? Date.now() },
                    ...o.slice(a + 1),
                    d,
                    (0, r.iW)("assistant", "", null != f.turn_id ? { turnId: f.turn_id } : {}),
                ]);
    },
    CONJURE_CHAT_PROJECT_EVENT: function (e) {
        let { projectId: t, event: n } = e,
            i = c.get(t);
        if (null == i || i.some((e) => e.id === n.id)) return !1;
        let l = (0, r.iW)("assistant", "", { ts: n.ts, id: n.id });
        ((l.kind = "project_event"), (l.projectEvent = n), (l.finished = !0), c.set(t, [...i, l]));
    },
    CONJURE_CHAT_CONTEXT_SWITCH: function (e) {
        let { projectId: t, contextSwitch: n } = e,
            i = c.get(t);
        if (null == i) return !1;
        let l = i.findIndex((e) => e.contextSwitch?.id === n.id);
        if ("undone" === n.status) return -1 !== l && void c.set(t, [...i.slice(0, l), ...i.slice(l + 1)]);
        if (-1 !== l) return void c.set(t, (0, u._D)(i, l, { ...i[l], contextSwitch: n }));
        if ("active" !== n.status && "reverted" !== n.status) return !1;
        let s = (0, r.iW)("assistant", "", { ts: n.ts, id: n.id });
        ((s.kind = "context_boundary"), (s.contextSwitch = n), (s.finished = !0));
        let o = "reverted" === n.status ? -1 : i.findIndex((e) => "user" === e.role && e.id === n.message_id);
        -1 === o ? c.set(t, [...i, s]) : c.set(t, [...i.slice(0, o), s, ...i.slice(o)]);
    },
    CONJURE_CHAT_STEP_APPEND: function (e) {
        let { projectId: t, step: n, turnId: i } = e;
        if ("preview_ready" === n.kind && null == i && !A(t)) return !1;
        let l = c.get(t);
        if (
            (k(t, i, (e) => {
                let t = (0, o.IC)(e.steps, n);
                return t === e.steps ? e : { ...e, steps: t };
            }),
            c.get(t) === l)
        )
            return !1;
        N(t);
    },
    CONJURE_CHAT_TURN_FINISHED: function (e) {
        let { projectId: t, summary: n, turnId: i } = e,
            l = c.get(t);
        (null != l &&
            l.some((e) => null != e.disposition) &&
            c.set(
                t,
                l.map((e) => {
                    if (null == e.disposition) return e;
                    let { disposition: t, ...n } = e;
                    return n;
                }),
            ),
            k(t, i, (e) => ({
                ...e,
                finished: !0,
                finished_at: Date.now(),
                provisionalTodo: void 0,
                content: "" !== e.content ? e.content : (n ?? ""),
            })),
            A(t) || (g.delete(t), C.delete(t)),
            E.delete(t),
            N(t));
    },
    CONJURE_CHAT_INTERRUPTED: function (e) {
        let { projectId: t } = e,
            n = c.get(t);
        if (null == n) return !1;
        let i = (0, r.iW)("assistant", "");
        ((i.finished = !0), (i.finished_at = Date.now()), (i.interrupted = !0), c.set(t, [...n, i]));
    },
    CONJURE_CHAT_STOP_REQUESTED: function (e) {
        let { projectId: t } = e,
            n = c.get(t);
        if (null == n || !n.some(u.pZ)) return !1;
        c.set(
            t,
            n.map((e) => ((0, u.pZ)(e) ? { ...e, stopRequested: !0 } : e)),
        );
    },
    CONJURE_CHAT_PROVISIONAL_TODO: function (e) {
        let { projectId: t, turnId: n, text: i } = e;
        if (
            !(function (e, t, n) {
                let i = c.get(e);
                if (null == i) return !1;
                let l = (0, u.gi)(i, t);
                return -1 !== l && (c.set(e, (0, u._D)(i, l, n(i[l]))), !0);
            })(t, n, (e) => ({ ...e, provisionalTodo: i }))
        )
            return !1;
    },
    CONJURE_CHAT_SOURCE_CHECKPOINT: function (e) {
        let { projectId: t, turnId: n, sourceSha: i } = e,
            l = c.get(t);
        if (null == l) return !1;
        let s = l.map((e) =>
            "assistant" === e.role && e.sourceSha !== i && (0, u.s3)(e, n) ? { ...e, sourceSha: i } : e,
        );
        if (s.every((e, t) => e === l[t])) return !1;
        c.set(t, s);
    },
    CONJURE_CHAT_THINKING_SET: function (e) {
        let { projectId: t, activity: n } = e;
        if (null == n) return !!g.delete(t) && void 0;
        let i = g.get(t);
        if (null != i && n.session === i.session && n.seq <= i.seq) return !1;
        g.set(t, n);
    },
    CONJURE_CHAT_COMPACTING_SET: function (e) {
        let { projectId: t, compacting: n } = e;
        if (n === C.has(t)) return !1;
        n ? C.add(t) : C.delete(t);
    },
    CONJURE_CHAT_SAVING_SET: function (e) {
        let { projectId: t, saving: n } = e;
        if (n === E.has(t)) return !1;
        n ? E.add(t) : E.delete(t);
    },
    CONJURE_CHAT_USAGE_SET: function (e) {
        let { projectId: t, project: n } = e;
        h.set(t, n);
    },
    CONJURE_CHAT_SIDEBAR_WIDTH_SET: function (e) {
        let { width: t } = e;
        if (S === t) return !1;
        S = t;
    },
    CONJURE_CHAT_TURN_PATCH: function (e) {
        let { projectId: t, patch: n, turnId: i } = e;
        (k(t, i, (e) => {
            let t = { ...e, ...n };
            return ("todos" in n && (t.provisionalTodo = void 0), t);
        }),
            N(t));
    },
    CONJURE_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("closed" !== n && "failed" !== n) return !1;
        let i = C.delete(t),
            l = E.delete(t),
            s = g.delete(t),
            r = c.get(t);
        if (null == r || !r.some((e) => "assistant" === e.role && !(0, u.BL)(e))) return (!!s || !!i || !!l) && void 0;
        (c.set(
            t,
            r.map((e) => {
                if (null != e.disposition) {
                    let { disposition: t, ...n } = e;
                    return n;
                }
                return "assistant" !== e.role || (0, u.BL)(e)
                    ? e
                    : {
                          ...e,
                          provisionalTodo: void 0,
                          steps: [
                              ...e.steps,
                              { type: "step", kind: "terminal_error", message: a.intl.string(d.default.lmiuFX) },
                          ],
                      };
            }),
        ),
            N(t));
    },
    CONJURE_PROJECT_CREATE_SUCCESS: function (e) {
        let { project: t } = e;
        if (w.has(t.id)) return !1;
        w.set(t.id, null);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!O(t)) return !1;
    },
    CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = new Set([...c.keys(), ...w.keys(), ...f.keys(), ..._.keys(), ...h.keys()]),
            n = !1;
        for (let e of t) null == s.Ay.getProject(e) && O(e) && (n = !0);
        if (!n) return !1;
    },
});
