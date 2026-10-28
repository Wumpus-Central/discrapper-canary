(n.d(t, { A: () => b, b: () => I }), n(667532), n(321073), n(30146));
var l = n(17928),
    i = n(73153),
    s = n(260498),
    r = n(417461),
    u = n(187308),
    o = n(891784),
    d = n(886540),
    a = n(149987),
    c = n(248675),
    f = n(105292);
let _ = new Map(),
    p = new Map(),
    h = new Map(),
    g = [],
    C = new Map(),
    E = new Map(),
    S = new Set(),
    T = new Set(),
    R = [];
function k(e, t, n) {
    let l = _.get(e);
    if (null == l) return;
    let i = (0, d.Si)(l, t);
    if (-1 === i) return void _.set(e, [...l, n((0, o.iW)("assistant", "", null != t ? { turnId: t } : {}))]);
    let s = l[i],
        r = n(null == t || null != s.turn_id || (0, d.s3)(s, t) ? s : { ...s, turn_id: t });
    r !== s && _.set(e, (0, d._D)(l, i, r));
}
function w(e) {
    return (0, d.q2)(_.get(e));
}
function N(e) {
    let t = h.get(e) ?? !1,
        n = w(e);
    if (t === n) return;
    h.set(e, n);
    let l = g.indexOf(e);
    if ((-1 !== l && g.splice(l, 1), g.unshift(e), n)) p.delete(e);
    else {
        let t;
        (null !=
            (t = (function (e) {
                let t = _.get(e);
                if (null == t) return null;
                for (let e = t.length - 1; e >= 0; e--) if ("assistant" === t[e].role && !(0, d.B5)(t[e])) return t[e];
                return null;
            })(e)) &&
        ("" !== t.content.trim() ||
            null != t.proposal ||
            null != t.clarification ||
            null != t.intake ||
            t.steps.some((e) => a.Wq.has(e.kind) && "terminal_error" !== e.kind))
            ? p.set(e, Date.now())
            : p.delete(e),
            !(function (e) {
                let t = _.get(e);
                if (null != t)
                    for (let n = t.length - 1; n >= 0; n--) {
                        let l = t[n];
                        if ("assistant" === l.role) {
                            if (null != l.finished_at || !(0, d.BL)(l)) return;
                            _.set(e, [...t.slice(0, n), { ...l, finished_at: Date.now() }, ...t.slice(n + 1)]);
                            return;
                        }
                    }
            })(e));
    }
}
function A(e) {
    let t = _.delete(e),
        n = v.delete(e),
        l = m.delete(e),
        i = p.delete(e),
        s = h.delete(e),
        r = C.delete(e),
        u = E.delete(e),
        o = S.delete(e),
        d = T.delete(e),
        a = g.indexOf(e);
    return (-1 !== a && g.splice(a, 1), t || n || l || i || s || r || u || o || d || -1 !== a);
}
class O extends l.Ay.Store {
    initialize() {
        this.waitFor(s.Ay);
    }
    getMessages(e) {
        return _.get(e) ?? R;
    }
    hasPendingSettingsRequest(e) {
        let t = this.getMessages(e),
            n = t[t.length - 1];
        return null != n && "assistant" === n.role && null != n.settingsRequest;
    }
    isThinking(e) {
        return w(e);
    }
    hasLoadedHistory(e) {
        return v.has(e);
    }
    getHistoryLoads(e) {
        return q.get(e) ?? 0;
    }
    isHistoryUnavailable(e) {
        return m.has(e);
    }
    getFinishedAt(e) {
        return w(e) ? null : (p.get(e) ?? null);
    }
    getProjectUsage(e) {
        return C.get(e) ?? null;
    }
    getThinkingActivity(e) {
        return E.get(e) ?? null;
    }
    isCompacting(e) {
        return S.has(e);
    }
    isSaving(e) {
        return T.has(e);
    }
    getActivityOrderedProjectIds() {
        return g.slice();
    }
}
let v = new Map(),
    m = new Set(),
    q = new Map();
function I(e) {
    return v.get(e) ?? null;
}
function U(e) {
    let t = new Map();
    for (let n of e)
        if ("assistant" === n.role)
            for (let e of n.steps) {
                if ("reaction" !== e.kind || null == e.message_id) continue;
                let n = (0, u.xN)(e);
                null != n && t.set(e.message_id, n);
            }
    return 0 === t.size
        ? e
        : e.map((e) => {
              let n = "user" === e.role ? t.get(e.id) : void 0;
              return null == n || (0, u.tH)(e.agentReaction, n) ? e : { ...e, agentReaction: n };
          });
}
function H(e) {
    return (
        null != e &&
        "assistant" === e.role &&
        null == e.turn_id &&
        e.steps.every((e) => "preview_ready" === e.kind) &&
        !(0, d.B5)(e) &&
        !(0, d.BL)(e)
    );
}
let b = new O(i.h, {
    LOGOUT: function () {
        if (
            0 === _.size &&
            0 === p.size &&
            0 === h.size &&
            0 === C.size &&
            0 === E.size &&
            0 === S.size &&
            0 === T.size &&
            0 === v.size &&
            0 === m.size &&
            0 === g.length
        )
            return !1;
        (_.clear(),
            p.clear(),
            h.clear(),
            C.clear(),
            E.clear(),
            S.clear(),
            T.clear(),
            v.clear(),
            m.clear(),
            (g.length = 0));
    },
    CONJURE_CHAT_HISTORY_SET: function (e) {
        let { projectId: t, entries: n, cursor: l, degraded: i } = e;
        q.set(t, (q.get(t) ?? 0) + 1);
        let s = v.get(t),
            r = v.has(t) ? (_.get(t) ?? []) : [];
        (v.set(t, l ?? null), !0 === i ? m.add(t) : m.delete(t), E.delete(t), S.delete(t), T.delete(t));
        let u = new Set(),
            d = n.filter((e) => null == e.id || (!u.has(e.id) && (u.add(e.id), !0))),
            a = (0, o.Bd)(d),
            c = null != l && !0 !== i ? a.findIndex((e) => null != e.id) : -1,
            f = -1 === c ? -1 : r.findIndex((e) => e.id === a[c].id);
        (-1 !== f && v.set(t, s ?? null),
            _.set(t, U((0, o.YF)(-1 === f ? a : [...r.slice(0, f), ...a.slice(c)]))),
            N(t));
    },
    CONJURE_CHAT_HISTORY_PREPEND: function (e) {
        let { projectId: t, entries: n, cursor: l } = e;
        if ((v.set(t, l), 0 === n.length)) return;
        let i = _.get(t) ?? [],
            s = (0, o.Bd)(n),
            r = new Set(i.flatMap((e) => (null == e.id ? [] : [e.id]))),
            u = s.filter((e) => null == e.id || !r.has(e.id));
        _.set(t, U((0, o.YF)([...u, ...i])));
    },
    CONJURE_CHAT_MESSAGE_APPEND: function (e) {
        let { projectId: t, content: n, id: l, optimisticId: i, userId: s, timestamp: u, attachments: a, held: c } = e,
            f = _.get(t) ?? [],
            p = f.findIndex((e) => e.id === l);
        if (-1 !== p) {
            if (!0 !== f[p].held || !0 === c) return !1;
            let e = f.map((e, t) => (t === p ? { ...e, held: void 0 } : e));
            return ((0, r.b)(n) || (0, d.q2)(e) || e.push((0, o.iW)("assistant", "")), _.set(t, e), void N(t));
        }
        let h = (0, o.iW)("user", n, { ts: u, id: l, userId: s, attachments: a });
        !0 === c && (h.held = !0);
        let g = null == i ? -1 : f.findIndex((e) => e.id === i);
        if (-1 !== g) {
            ((h.render_id = f[g].render_id), _.set(t, [...f.slice(0, g), h, ...f.slice(g + 1)]), N(t));
            return;
        }
        let C = [...f, h];
        (!0 === c || (0, r.b)(n) || (0, d.q2)(C) || C.push((0, o.iW)("assistant", "")), _.set(t, C), N(t));
    },
    CONJURE_CHAT_MESSAGE_DISPOSITION: function (e) {
        let { projectId: t, id: n, activeTurnId: l, disposition: i } = e,
            s = _.get(t);
        if (null == s) return !1;
        let r = s.findIndex((e) => e.id === n);
        if (-1 === r) return !1;
        let u = "steered" === i ? s.filter((e, t) => t <= r || e.in_reply_to !== n || "queued" !== e.acknowledges) : s,
            a = u[r].disposition === i ? u : [...u.slice(0, r), { ...u[r], disposition: i }, ...u.slice(r + 1)],
            c = "steered" === i ? (0, d.gi)(a, l) : -1;
        if ("steered" === i && -1 === c && null != l) {
            let e = (0, d.Si)(a, l);
            if (-1 !== e && e < r) {
                let n = { ...a[e], turn_id: l };
                if (0 === n.steps.length) {
                    (_.set(t, [...a.slice(0, e), ...a.slice(e + 1, r + 1), n, ...a.slice(r + 1)]), N(t));
                    return;
                }
                ((a = [...a.slice(0, e), n, ...a.slice(e + 1)]), (c = e));
            }
        }
        if (-1 === c || c > r) return a !== s && void _.set(t, a);
        let f = H(a[r + 1]) ? r + 2 : r + 1;
        (_.set(t, [
            ...a.slice(0, c),
            { ...a[c], continued: !0, finished_at: a[c].finished_at ?? Date.now() },
            ...a.slice(c + 1, r + 1),
            (0, o.iW)("assistant", "", { turnId: l }),
            ...a.slice(f),
        ]),
            N(t));
    },
    CONJURE_CHAT_MESSAGE_REACTION: function (e) {
        let { projectId: t, id: n, reaction: l } = e,
            i = _.get(t);
        if (null == i) return !1;
        let s = i.findIndex((e) => "user" === e.role && e.id === n);
        if (-1 === s || (0, u.tH)(i[s].agentReaction, l)) return !1;
        _.set(t, (0, d._D)(i, s, { ...i[s], agentReaction: l }));
    },
    CONJURE_CHAT_MESSAGE_CANCELLED: function (e) {
        let { projectId: t, id: n, withdrawn: l } = e,
            i = _.get(t);
        if (null == i) return !1;
        let s = !0 === l ? i[i.findIndex((e) => e.id === n) + 1] : void 0,
            r =
                null != s && "assistant" === s.role && "" === s.content && null == s.turn_id && 0 === s.steps.length
                    ? s.id
                    : null,
            u = i.filter((e) => e.id !== n && e.in_reply_to !== n && e.id !== r);
        if (u.length === i.length) return !1;
        (_.set(t, u), null != r && N(t));
    },
    CONJURE_CHAT_SIDE_REPLY: function (e) {
        let { projectId: t, id: n, inReplyTo: l, content: i, timestamp: s } = e,
            r = _.get(t);
        if (null == r || r.some((e) => e.id === n)) return !1;
        let u = (0, o.iW)("assistant", i, { ts: s, id: n });
        ((u.kind = "side_reply"), (u.in_reply_to = l));
        let d = r.findIndex((e) => e.id === l);
        if (-1 === d) return void _.set(t, [...r, u]);
        let { disposition: a } = r[d];
        null != a && (u.acknowledges = a);
        let c = "answered" === a && H(r[d + 1]);
        (_.set(t, [...r.slice(0, d + 1), u, ...r.slice(c ? d + 2 : d + 1)]), c && N(t));
    },
    CONJURE_CHAT_PUBLISH_NOTICE: function (e) {
        let { projectId: t, id: n, content: l, timestamp: i, publishNotice: s } = e,
            r = _.get(t);
        if (null == r || r.some((e) => e.id === n)) return !1;
        let u = (0, o.iW)("assistant", l, { ts: i, id: n });
        ((u.kind = "publish_notice"), (u.publishNotice = s), (u.finished = !0));
        let a = r.findLastIndex((e) => "assistant" === e.role && !(0, d.B5)(e)),
            c = -1 === a || (0, d.BL)(r[a]) ? null : r[a];
        null == c
            ? _.set(t, [...r, u])
            : 0 === c.steps.length
              ? _.set(t, [...r.slice(0, a), ...r.slice(a + 1), u, c])
              : _.set(t, [
                    ...r.slice(0, a),
                    { ...c, continued: !0, finished_at: c.finished_at ?? Date.now() },
                    ...r.slice(a + 1),
                    u,
                    (0, o.iW)("assistant", "", null != c.turn_id ? { turnId: c.turn_id } : {}),
                ]);
    },
    CONJURE_CHAT_PROJECT_EVENT: function (e) {
        let { projectId: t, event: n } = e,
            l = _.get(t);
        if (null == l || l.some((e) => e.id === n.id)) return !1;
        let i = (0, o.iW)("assistant", "", { ts: n.ts, id: n.id });
        ((i.kind = "project_event"), (i.projectEvent = n), (i.finished = !0), _.set(t, [...l, i]));
    },
    CONJURE_CHAT_CONTEXT_SWITCH: function (e) {
        let { projectId: t, contextSwitch: n } = e,
            l = _.get(t);
        if (null == l) return !1;
        let i = l.findIndex((e) => e.contextSwitch?.id === n.id);
        if ("undone" === n.status) return -1 !== i && void _.set(t, [...l.slice(0, i), ...l.slice(i + 1)]);
        if (-1 !== i) return void _.set(t, (0, d._D)(l, i, { ...l[i], contextSwitch: n }));
        if ("active" !== n.status && "reverted" !== n.status) return !1;
        let s = (0, o.iW)("assistant", "", { ts: n.ts, id: n.id });
        ((s.kind = "context_boundary"), (s.contextSwitch = n), (s.finished = !0));
        let r = "reverted" === n.status ? -1 : l.findIndex((e) => "user" === e.role && e.id === n.message_id);
        -1 === r ? _.set(t, [...l, s]) : _.set(t, [...l.slice(0, r), s, ...l.slice(r)]);
    },
    CONJURE_CHAT_STEP_APPEND: function (e) {
        let { projectId: t, step: n, turnId: l } = e,
            i = _.get(t);
        return (
            ("preview_ready" !== n.kind || null != l || (null != i && -1 !== (0, d.Si)(i, void 0))) &&
            (k(t, l, (e) => {
                let t = (0, a.IC)(e.steps, n);
                return t === e.steps ? e : { ...e, steps: t };
            }),
            _.get(t) !== i && void N(t))
        );
    },
    CONJURE_CHAT_TURN_FINISHED: function (e) {
        let { projectId: t, summary: n, turnId: l } = e,
            i = _.get(t);
        (null != i &&
            i.some((e) => null != e.disposition) &&
            _.set(
                t,
                i.map((e) => {
                    if (null == e.disposition) return e;
                    let { disposition: t, ...n } = e;
                    return n;
                }),
            ),
            k(t, l, (e) => ({
                ...e,
                finished: !0,
                finished_at: Date.now(),
                provisionalTodo: void 0,
                content: "" !== e.content ? e.content : (n ?? ""),
            })),
            w(t) || (E.delete(t), S.delete(t)),
            T.delete(t),
            N(t));
    },
    CONJURE_CHAT_INTERRUPTED: function (e) {
        let { projectId: t } = e,
            n = _.get(t);
        if (null == n) return !1;
        let l = (0, o.iW)("assistant", "");
        ((l.finished = !0), (l.finished_at = Date.now()), (l.interrupted = !0), _.set(t, [...n, l]));
    },
    CONJURE_CHAT_STOP_REQUESTED: function (e) {
        let { projectId: t } = e,
            n = _.get(t);
        if (null == n || !n.some(d.pZ)) return !1;
        _.set(
            t,
            n.map((e) => ((0, d.pZ)(e) ? { ...e, stopRequested: !0 } : e)),
        );
    },
    CONJURE_CHAT_PROVISIONAL_TODO: function (e) {
        let { projectId: t, turnId: n, text: l } = e;
        if (
            !(function (e, t, n) {
                let l = _.get(e);
                if (null == l) return !1;
                let i = (0, d.gi)(l, t);
                return -1 !== i && (_.set(e, (0, d._D)(l, i, n(l[i]))), !0);
            })(t, n, (e) => ({ ...e, provisionalTodo: l }))
        )
            return !1;
    },
    CONJURE_CHAT_SOURCE_CHECKPOINT: function (e) {
        let { projectId: t, turnId: n, sourceSha: l } = e,
            i = _.get(t);
        if (null == i) return !1;
        let s = i.map((e) =>
            "assistant" === e.role && e.sourceSha !== l && (0, d.s3)(e, n) ? { ...e, sourceSha: l } : e,
        );
        if (s.every((e, t) => e === i[t])) return !1;
        _.set(t, s);
    },
    CONJURE_CHAT_THINKING_SET: function (e) {
        let { projectId: t, activity: n } = e;
        if (null == n) return !!E.delete(t) && void 0;
        let l = E.get(t);
        if (null != l && n.session === l.session && n.seq <= l.seq) return !1;
        E.set(t, n);
    },
    CONJURE_CHAT_COMPACTING_SET: function (e) {
        let { projectId: t, compacting: n } = e;
        if (n === S.has(t)) return !1;
        n ? S.add(t) : S.delete(t);
    },
    CONJURE_CHAT_SAVING_SET: function (e) {
        let { projectId: t, saving: n } = e;
        if (n === T.has(t)) return !1;
        n ? T.add(t) : T.delete(t);
    },
    CONJURE_CHAT_USAGE_SET: function (e) {
        let { projectId: t, project: n } = e;
        C.set(t, n);
    },
    CONJURE_CHAT_TURN_PATCH: function (e) {
        let { projectId: t, patch: n, turnId: l } = e;
        (k(t, l, (e) => {
            let t = { ...e, ...n };
            return ("todos" in n && (t.provisionalTodo = void 0), t);
        }),
            N(t));
    },
    CONJURE_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("closed" !== n && "failed" !== n) return !1;
        let l = S.delete(t),
            i = T.delete(t),
            s = E.delete(t),
            r = _.get(t);
        if (null == r || !r.some((e) => "assistant" === e.role && !(0, d.BL)(e))) return (!!s || !!l || !!i) && void 0;
        (_.set(
            t,
            r.map((e) => {
                if (null != e.disposition) {
                    let { disposition: t, ...n } = e;
                    return n;
                }
                return "assistant" !== e.role || (0, d.BL)(e)
                    ? e
                    : {
                          ...e,
                          provisionalTodo: void 0,
                          steps: [
                              ...e.steps,
                              { type: "step", kind: "terminal_error", message: f.intl.string(c.default.lmiuFX) },
                          ],
                      };
            }),
        ),
            N(t));
    },
    CONJURE_PROJECT_CREATE_SUCCESS: function (e) {
        let { project: t } = e;
        if (v.has(t.id)) return !1;
        v.set(t.id, null);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!A(t)) return !1;
    },
    CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = new Set([..._.keys(), ...v.keys(), ...p.keys(), ...h.keys(), ...C.keys()]),
            n = !1;
        for (let e of t) null == s.Ay.getProject(e) && A(e) && (n = !0);
        if (!n) return !1;
    },
});
