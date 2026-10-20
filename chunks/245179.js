(n.d(t, { A: () => I, b: () => q }), n(667532), n(321073), n(30146));
var l = n(17928),
    i = n(73153),
    s = n(260498),
    r = n(187308),
    u = n(891784),
    o = n(886540),
    d = n(149987),
    a = n(261425),
    c = n(105292);
let f = new Map(),
    _ = new Map(),
    p = new Map(),
    h = [],
    g = new Map(),
    C = new Map(),
    E = new Set(),
    S = new Set(),
    T = [];
function N(e, t, n) {
    let l = f.get(e);
    if (null == l) return;
    let i = (0, o.Si)(l, t);
    if (-1 === i) return void f.set(e, [...l, n((0, u.iW)("assistant", "", null != t ? { turnId: t } : {}))]);
    let s = l[i],
        r = n(null == t || null != s.turn_id || (0, o.s3)(s, t) ? s : { ...s, turn_id: t });
    r !== s && f.set(e, (0, o._D)(l, i, r));
}
function R(e) {
    return (0, o.q2)(f.get(e));
}
function m(e) {
    let t = p.get(e) ?? !1,
        n = R(e);
    if (t === n) return;
    p.set(e, n);
    let l = h.indexOf(e);
    if ((-1 !== l && h.splice(l, 1), h.unshift(e), n)) _.delete(e);
    else {
        let t;
        (null !=
            (t = (function (e) {
                let t = f.get(e);
                if (null == t) return null;
                for (let e = t.length - 1; e >= 0; e--) if ("assistant" === t[e].role && !(0, o.B5)(t[e])) return t[e];
                return null;
            })(e)) &&
        ("" !== t.content.trim() ||
            null != t.proposal ||
            null != t.clarification ||
            null != t.intake ||
            t.steps.some((e) => d.Wq.has(e.kind) && "terminal_error" !== e.kind))
            ? _.set(e, Date.now())
            : _.delete(e),
            !(function (e) {
                let t = f.get(e);
                if (null != t)
                    for (let n = t.length - 1; n >= 0; n--) {
                        let l = t[n];
                        if ("assistant" === l.role) {
                            if (null != l.finished_at || !(0, o.BL)(l)) return;
                            f.set(e, [...t.slice(0, n), { ...l, finished_at: Date.now() }, ...t.slice(n + 1)]);
                            return;
                        }
                    }
            })(e));
    }
}
function A(e) {
    let t = f.delete(e),
        n = O.delete(e),
        l = w.delete(e),
        i = _.delete(e),
        s = p.delete(e),
        r = g.delete(e),
        u = C.delete(e),
        o = E.delete(e),
        d = S.delete(e),
        a = h.indexOf(e);
    return (-1 !== a && h.splice(a, 1), t || n || l || i || s || r || u || o || d || -1 !== a);
}
class k extends l.Ay.Store {
    initialize() {
        this.waitFor(s.Ay);
    }
    getMessages(e) {
        return f.get(e) ?? T;
    }
    hasPendingSettingsRequest(e) {
        let t = this.getMessages(e),
            n = t[t.length - 1];
        return null != n && "assistant" === n.role && null != n.settingsRequest;
    }
    isThinking(e) {
        return R(e);
    }
    hasLoadedHistory(e) {
        return O.has(e);
    }
    isHistoryUnavailable(e) {
        return w.has(e);
    }
    getFinishedAt(e) {
        return R(e) ? null : (_.get(e) ?? null);
    }
    getProjectUsage(e) {
        return g.get(e) ?? null;
    }
    getThinkingActivity(e) {
        return C.get(e) ?? null;
    }
    isCompacting(e) {
        return E.has(e);
    }
    isSaving(e) {
        return S.has(e);
    }
    getActivityOrderedProjectIds() {
        return h.slice();
    }
}
let O = new Map(),
    w = new Set();
function q(e) {
    return O.get(e) ?? null;
}
function v(e) {
    let t = new Map();
    for (let n of e)
        if ("assistant" === n.role)
            for (let e of n.steps) {
                if ("reaction" !== e.kind || null == e.message_id) continue;
                let n = (0, r.xN)(e);
                null != n && t.set(e.message_id, n);
            }
    return 0 === t.size
        ? e
        : e.map((e) => {
              let n = "user" === e.role ? t.get(e.id) : void 0;
              return null == n || (0, r.tH)(e.agentReaction, n) ? e : { ...e, agentReaction: n };
          });
}
let I = new k(i.h, {
    LOGOUT: function () {
        if (
            0 === f.size &&
            0 === _.size &&
            0 === p.size &&
            0 === g.size &&
            0 === C.size &&
            0 === E.size &&
            0 === S.size &&
            0 === O.size &&
            0 === w.size &&
            0 === h.length
        )
            return !1;
        (f.clear(),
            _.clear(),
            p.clear(),
            g.clear(),
            C.clear(),
            E.clear(),
            S.clear(),
            O.clear(),
            w.clear(),
            (h.length = 0));
    },
    CONJURE_CHAT_HISTORY_SET: function (e) {
        let { projectId: t, entries: n, cursor: l, degraded: i } = e,
            s = O.get(t),
            r = O.has(t) ? (f.get(t) ?? []) : [];
        (O.set(t, l ?? null), !0 === i ? w.add(t) : w.delete(t), C.delete(t), E.delete(t), S.delete(t));
        let o = new Set(),
            d = n.filter((e) => null == e.id || (!o.has(e.id) && (o.add(e.id), !0))),
            a = (0, u.Bd)(d),
            c = null != l && !0 !== i ? a.findIndex((e) => null != e.id) : -1,
            _ = -1 === c ? -1 : r.findIndex((e) => e.id === a[c].id);
        (-1 !== _ && O.set(t, s ?? null),
            f.set(t, v((0, u.YF)(-1 === _ ? a : [...r.slice(0, _), ...a.slice(c)]))),
            m(t));
    },
    CONJURE_CHAT_HISTORY_PREPEND: function (e) {
        let { projectId: t, entries: n, cursor: l } = e;
        if ((O.set(t, l), 0 === n.length)) return;
        let i = f.get(t) ?? [],
            s = (0, u.Bd)(n),
            r = new Set(i.flatMap((e) => (null == e.id ? [] : [e.id]))),
            o = s.filter((e) => null == e.id || !r.has(e.id));
        f.set(t, v((0, u.YF)([...o, ...i])));
    },
    CONJURE_CHAT_MESSAGE_APPEND: function (e) {
        let { projectId: t, content: n, id: l, optimisticId: i, userId: s, timestamp: r, attachments: d } = e,
            a = f.get(t) ?? [];
        if (a.some((e) => e.id === l)) return !1;
        let c = (0, u.iW)("user", n, { ts: r, id: l, userId: s, attachments: d }),
            _ = null == i ? -1 : a.findIndex((e) => e.id === i);
        if (-1 !== _) {
            ((c.render_id = a[_].render_id), f.set(t, [...a.slice(0, _), c, ...a.slice(_ + 1)]), m(t));
            return;
        }
        let p = [...a, c];
        ((0, o.q2)(p) || p.push((0, u.iW)("assistant", "")), f.set(t, p), m(t));
    },
    CONJURE_CHAT_MESSAGE_DISPOSITION: function (e) {
        let { projectId: t, id: n, activeTurnId: l, disposition: i } = e,
            s = f.get(t);
        if (null == s) return !1;
        let r = s.findIndex((e) => e.id === n);
        if (-1 === r) return !1;
        let d = "steered" === i ? s.filter((e, t) => t <= r || e.in_reply_to !== n || "queued" !== e.acknowledges) : s,
            a = d[r].disposition === i ? d : [...d.slice(0, r), { ...d[r], disposition: i }, ...d.slice(r + 1)],
            c = "steered" === i ? (0, o.gi)(a, l) : -1;
        if ("steered" === i && -1 === c && null != l) {
            let e = (0, o.Si)(a, l);
            if (-1 !== e && e < r) {
                let n = { ...a[e], turn_id: l };
                if (0 === n.steps.length) {
                    (f.set(t, [...a.slice(0, e), ...a.slice(e + 1, r + 1), n, ...a.slice(r + 1)]), m(t));
                    return;
                }
                ((a = [...a.slice(0, e), n, ...a.slice(e + 1)]), (c = e));
            }
        }
        if (-1 === c || c > r) return a !== s && void f.set(t, a);
        (f.set(t, [
            ...a.slice(0, c),
            { ...a[c], continued: !0, finished_at: a[c].finished_at ?? Date.now() },
            ...a.slice(c + 1, r + 1),
            (0, u.iW)("assistant", "", { turnId: l }),
            ...a.slice(r + 1),
        ]),
            m(t));
    },
    CONJURE_CHAT_MESSAGE_REACTION: function (e) {
        let { projectId: t, id: n, reaction: l } = e,
            i = f.get(t);
        if (null == i) return !1;
        let s = i.findIndex((e) => "user" === e.role && e.id === n);
        if (-1 === s || (0, r.tH)(i[s].agentReaction, l)) return !1;
        f.set(t, (0, o._D)(i, s, { ...i[s], agentReaction: l }));
    },
    CONJURE_CHAT_MESSAGE_CANCELLED: function (e) {
        let { projectId: t, id: n, withdrawn: l } = e,
            i = f.get(t);
        if (null == i) return !1;
        let s = !0 === l ? i[i.findIndex((e) => e.id === n) + 1] : void 0,
            r =
                null != s && "assistant" === s.role && "" === s.content && null == s.turn_id && 0 === s.steps.length
                    ? s.id
                    : null,
            u = i.filter((e) => e.id !== n && e.in_reply_to !== n && e.id !== r);
        if (u.length === i.length) return !1;
        (f.set(t, u), null != r && m(t));
    },
    CONJURE_CHAT_SIDE_REPLY: function (e) {
        let { projectId: t, id: n, inReplyTo: l, content: i, timestamp: s } = e,
            r = f.get(t);
        if (null == r || r.some((e) => e.id === n)) return !1;
        let o = (0, u.iW)("assistant", i, { ts: s, id: n });
        ((o.kind = "side_reply"), (o.in_reply_to = l));
        let d = r.findIndex((e) => e.id === l);
        if (-1 === d) return void f.set(t, [...r, o]);
        let { disposition: a } = r[d];
        (null != a && (o.acknowledges = a), f.set(t, [...r.slice(0, d + 1), o, ...r.slice(d + 1)]));
    },
    CONJURE_CHAT_PUBLISH_NOTICE: function (e) {
        let { projectId: t, id: n, content: l, timestamp: i, publishNotice: s } = e,
            r = f.get(t);
        if (null == r || r.some((e) => e.id === n)) return !1;
        let d = (0, u.iW)("assistant", l, { ts: i, id: n });
        ((d.kind = "publish_notice"), (d.publishNotice = s), (d.finished = !0));
        let a = r.findLastIndex((e) => "assistant" === e.role && !(0, o.B5)(e)),
            c = -1 === a || (0, o.BL)(r[a]) ? null : r[a];
        null == c
            ? f.set(t, [...r, d])
            : 0 === c.steps.length
              ? f.set(t, [...r.slice(0, a), ...r.slice(a + 1), d, c])
              : f.set(t, [
                    ...r.slice(0, a),
                    { ...c, continued: !0, finished_at: c.finished_at ?? Date.now() },
                    ...r.slice(a + 1),
                    d,
                    (0, u.iW)("assistant", "", null != c.turn_id ? { turnId: c.turn_id } : {}),
                ]);
    },
    CONJURE_CHAT_PROJECT_EVENT: function (e) {
        let { projectId: t, event: n } = e,
            l = f.get(t);
        if (null == l || l.some((e) => e.id === n.id)) return !1;
        let i = (0, u.iW)("assistant", "", { ts: n.ts, id: n.id });
        ((i.kind = "project_event"), (i.projectEvent = n), (i.finished = !0), f.set(t, [...l, i]));
    },
    CONJURE_CHAT_CONTEXT_SWITCH: function (e) {
        let { projectId: t, contextSwitch: n } = e,
            l = f.get(t);
        if (null == l) return !1;
        let i = l.findIndex((e) => e.contextSwitch?.id === n.id);
        if ("undone" === n.status) return -1 !== i && void f.set(t, [...l.slice(0, i), ...l.slice(i + 1)]);
        if (-1 !== i) return void f.set(t, (0, o._D)(l, i, { ...l[i], contextSwitch: n }));
        if ("active" !== n.status && "reverted" !== n.status) return !1;
        let s = (0, u.iW)("assistant", "", { ts: n.ts, id: n.id });
        ((s.kind = "context_boundary"), (s.contextSwitch = n), (s.finished = !0));
        let r = "reverted" === n.status ? -1 : l.findIndex((e) => "user" === e.role && e.id === n.message_id);
        -1 === r ? f.set(t, [...l, s]) : f.set(t, [...l.slice(0, r), s, ...l.slice(r)]);
    },
    CONJURE_CHAT_STEP_APPEND: function (e) {
        let { projectId: t, step: n, turnId: l } = e;
        if ("preview_ready" === n.kind && null == l && !R(t)) return !1;
        let i = f.get(t);
        if (
            (N(t, l, (e) => {
                let t = (0, d.IC)(e.steps, n);
                return t === e.steps ? e : { ...e, steps: t };
            }),
            f.get(t) === i)
        )
            return !1;
        m(t);
    },
    CONJURE_CHAT_TURN_FINISHED: function (e) {
        let { projectId: t, summary: n, turnId: l } = e,
            i = f.get(t);
        (null != i &&
            i.some((e) => null != e.disposition) &&
            f.set(
                t,
                i.map((e) => {
                    if (null == e.disposition) return e;
                    let { disposition: t, ...n } = e;
                    return n;
                }),
            ),
            N(t, l, (e) => ({
                ...e,
                finished: !0,
                finished_at: Date.now(),
                provisionalTodo: void 0,
                content: "" !== e.content ? e.content : (n ?? ""),
            })),
            R(t) || (C.delete(t), E.delete(t)),
            S.delete(t),
            m(t));
    },
    CONJURE_CHAT_INTERRUPTED: function (e) {
        let { projectId: t } = e,
            n = f.get(t);
        if (null == n) return !1;
        let l = (0, u.iW)("assistant", "");
        ((l.finished = !0), (l.finished_at = Date.now()), (l.interrupted = !0), f.set(t, [...n, l]));
    },
    CONJURE_CHAT_STOP_REQUESTED: function (e) {
        let { projectId: t } = e,
            n = f.get(t);
        if (null == n || !n.some(o.pZ)) return !1;
        f.set(
            t,
            n.map((e) => ((0, o.pZ)(e) ? { ...e, stopRequested: !0 } : e)),
        );
    },
    CONJURE_CHAT_PROVISIONAL_TODO: function (e) {
        let { projectId: t, turnId: n, text: l } = e;
        if (
            !(function (e, t, n) {
                let l = f.get(e);
                if (null == l) return !1;
                let i = (0, o.gi)(l, t);
                return -1 !== i && (f.set(e, (0, o._D)(l, i, n(l[i]))), !0);
            })(t, n, (e) => ({ ...e, provisionalTodo: l }))
        )
            return !1;
    },
    CONJURE_CHAT_SOURCE_CHECKPOINT: function (e) {
        let { projectId: t, turnId: n, sourceSha: l } = e,
            i = f.get(t);
        if (null == i) return !1;
        let s = i.map((e) =>
            "assistant" === e.role && e.sourceSha !== l && (0, o.s3)(e, n) ? { ...e, sourceSha: l } : e,
        );
        if (s.every((e, t) => e === i[t])) return !1;
        f.set(t, s);
    },
    CONJURE_CHAT_THINKING_SET: function (e) {
        let { projectId: t, activity: n } = e;
        if (null == n) return !!C.delete(t) && void 0;
        let l = C.get(t);
        if (null != l && n.session === l.session && n.seq <= l.seq) return !1;
        C.set(t, n);
    },
    CONJURE_CHAT_COMPACTING_SET: function (e) {
        let { projectId: t, compacting: n } = e;
        if (n === E.has(t)) return !1;
        n ? E.add(t) : E.delete(t);
    },
    CONJURE_CHAT_SAVING_SET: function (e) {
        let { projectId: t, saving: n } = e;
        if (n === S.has(t)) return !1;
        n ? S.add(t) : S.delete(t);
    },
    CONJURE_CHAT_USAGE_SET: function (e) {
        let { projectId: t, project: n } = e;
        g.set(t, n);
    },
    CONJURE_CHAT_TURN_PATCH: function (e) {
        let { projectId: t, patch: n, turnId: l } = e;
        (N(t, l, (e) => {
            let t = { ...e, ...n };
            return ("todos" in n && (t.provisionalTodo = void 0), t);
        }),
            m(t));
    },
    CONJURE_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("closed" !== n && "failed" !== n) return !1;
        let l = E.delete(t),
            i = S.delete(t),
            s = C.delete(t),
            r = f.get(t);
        if (null == r || !r.some((e) => "assistant" === e.role && !(0, o.BL)(e))) return (!!s || !!l || !!i) && void 0;
        (f.set(
            t,
            r.map((e) => {
                if (null != e.disposition) {
                    let { disposition: t, ...n } = e;
                    return n;
                }
                return "assistant" !== e.role || (0, o.BL)(e)
                    ? e
                    : {
                          ...e,
                          provisionalTodo: void 0,
                          steps: [
                              ...e.steps,
                              { type: "step", kind: "terminal_error", message: c.intl.string(a.default.lmiuFX) },
                          ],
                      };
            }),
        ),
            m(t));
    },
    CONJURE_PROJECT_CREATE_SUCCESS: function (e) {
        let { project: t } = e;
        if (O.has(t.id)) return !1;
        O.set(t.id, null);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!A(t)) return !1;
    },
    CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = new Set([...f.keys(), ...O.keys(), ..._.keys(), ...p.keys(), ...g.keys()]),
            n = !1;
        for (let e of t) null == s.Ay.getProject(e) && A(e) && (n = !0);
        if (!n) return !1;
    },
});
