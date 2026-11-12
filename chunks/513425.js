(n.d(t, { A: () => v, b: () => y }), n(667532), n(321073), n(30146));
var i = n(855986),
    r = n(73153),
    a = n(260498),
    s = n(187308),
    l = n(891784),
    o = n(886540),
    d = n(149987),
    c = n(191850),
    u = n(792996);
let _ = new Map(),
    E = new Map(),
    A = new Map(),
    f = [],
    h = new Map(),
    I = new Map(),
    p = new Set(),
    m = new Set(),
    T = [];
function g(e, t, n) {
    let i = _.get(e);
    if (null == i) return;
    let r = (0, o.Si)(i, t);
    if (-1 === r) return void _.set(e, [...i, n((0, l.iW)("assistant", "", null != t ? { turnId: t } : {}))]);
    let a = i[r],
        s = n(null == t || null != a.turn_id || (0, o.s3)(a, t) ? a : { ...a, turn_id: t });
    s !== a && _.set(e, (0, o._D)(i, r, s));
}
function S(e) {
    return (0, o.q2)(_.get(e));
}
function N(e) {
    let t = A.get(e) ?? !1,
        n = S(e);
    if (t === n) return;
    A.set(e, n);
    let i = f.indexOf(e);
    if ((-1 !== i && f.splice(i, 1), f.unshift(e), n)) E.delete(e);
    else {
        let t;
        (null !=
            (t = (function (e) {
                let t = _.get(e);
                if (null == t) return null;
                for (let e = t.length - 1; e >= 0; e--) if ("assistant" === t[e].role && !(0, o.B5)(t[e])) return t[e];
                return null;
            })(e)) &&
        ("" !== t.content.trim() ||
            null != t.proposal ||
            null != t.clarification ||
            null != t.intake ||
            t.steps.some((e) => d.Wq.has(e.kind) && "terminal_error" !== e.kind))
            ? E.set(e, Date.now())
            : E.delete(e),
            !(function (e) {
                let t = _.get(e);
                if (null != t)
                    for (let n = t.length - 1; n >= 0; n--) {
                        let i = t[n];
                        if ("assistant" === i.role) {
                            if (null != i.finished_at || !(0, o.BL)(i)) return;
                            _.set(e, [...t.slice(0, n), { ...i, finished_at: Date.now() }, ...t.slice(n + 1)]);
                            return;
                        }
                    }
            })(e));
    }
}
function C(e) {
    let t = _.delete(e),
        n = R.delete(e),
        i = L.delete(e),
        r = E.delete(e),
        a = A.delete(e),
        s = h.delete(e),
        l = I.delete(e),
        o = p.delete(e),
        d = m.delete(e),
        c = f.indexOf(e);
    return (-1 !== c && f.splice(c, 1), t || n || i || r || a || s || l || o || d || -1 !== c);
}
class O extends i.Ay.Store {
    initialize() {
        this.waitFor(a.Ay);
    }
    getMessages(e) {
        return _.get(e) ?? T;
    }
    hasPendingSettingsRequest(e) {
        let t = this.getMessages(e),
            n = t[t.length - 1];
        return null != n && "assistant" === n.role && null != n.settingsRequest;
    }
    isThinking(e) {
        return S(e);
    }
    hasLoadedHistory(e) {
        return R.has(e);
    }
    isHistoryUnavailable(e) {
        return L.has(e);
    }
    getFinishedAt(e) {
        return S(e) ? null : (E.get(e) ?? null);
    }
    getProjectUsage(e) {
        return h.get(e) ?? null;
    }
    getThinkingActivity(e) {
        return I.get(e) ?? null;
    }
    isCompacting(e) {
        return p.has(e);
    }
    isSaving(e) {
        return m.has(e);
    }
    getActivityOrderedProjectIds() {
        return f.slice();
    }
}
let R = new Map(),
    L = new Set();
function y(e) {
    return R.get(e) ?? null;
}
function D(e) {
    let t = new Map();
    for (let n of e)
        if ("assistant" === n.role)
            for (let e of n.steps) {
                if ("reaction" !== e.kind || null == e.message_id) continue;
                let n = (0, s.xN)(e);
                null != n && t.set(e.message_id, n);
            }
    return 0 === t.size
        ? e
        : e.map((e) => {
              let n = "user" === e.role ? t.get(e.id) : void 0;
              return null == n || (0, s.tH)(e.agentReaction, n) ? e : { ...e, agentReaction: n };
          });
}
function b(e) {
    return (
        null != e &&
        "assistant" === e.role &&
        null == e.turn_id &&
        e.steps.every((e) => "preview_ready" === e.kind) &&
        !(0, o.B5)(e) &&
        !(0, o.BL)(e)
    );
}
let v = new O(r.h, {
    LOGOUT: function () {
        if (
            0 === _.size &&
            0 === E.size &&
            0 === A.size &&
            0 === h.size &&
            0 === I.size &&
            0 === p.size &&
            0 === m.size &&
            0 === R.size &&
            0 === L.size &&
            0 === f.length
        )
            return !1;
        (_.clear(),
            E.clear(),
            A.clear(),
            h.clear(),
            I.clear(),
            p.clear(),
            m.clear(),
            R.clear(),
            L.clear(),
            (f.length = 0));
    },
    CONJURE_CHAT_HISTORY_SET: function (e) {
        let { projectId: t, entries: n, cursor: i, degraded: r } = e,
            a = R.get(t),
            s = R.has(t) ? (_.get(t) ?? []) : [];
        (R.set(t, i ?? null), !0 === r ? L.add(t) : L.delete(t), I.delete(t), p.delete(t), m.delete(t));
        let o = new Set(),
            d = n.filter((e) => null == e.id || (!o.has(e.id) && (o.add(e.id), !0))),
            c = (0, l.Bd)(d),
            u = null != i && !0 !== r ? c.findIndex((e) => null != e.id) : -1,
            E = -1 === u ? -1 : s.findIndex((e) => e.id === c[u].id);
        (-1 !== E && R.set(t, a ?? null),
            _.set(t, D((0, l.YF)(-1 === E ? c : [...s.slice(0, E), ...c.slice(u)]))),
            N(t));
    },
    CONJURE_CHAT_HISTORY_PREPEND: function (e) {
        let { projectId: t, entries: n, cursor: i } = e;
        if ((R.set(t, i), 0 === n.length)) return;
        let r = _.get(t) ?? [],
            a = (0, l.Bd)(n),
            s = new Set(r.flatMap((e) => (null == e.id ? [] : [e.id]))),
            o = a.filter((e) => null == e.id || !s.has(e.id));
        _.set(t, D((0, l.YF)([...o, ...r])));
    },
    CONJURE_CHAT_MESSAGE_APPEND: function (e) {
        var t;
        let { projectId: n, content: i, id: r, optimisticId: a, userId: s, timestamp: d, attachments: c } = e,
            u = _.get(n) ?? [];
        if (u.some((e) => e.id === r)) return !1;
        let E = (0, l.iW)("user", i, { ts: d, id: r, userId: s, attachments: c }),
            A = null == a ? -1 : u.findIndex((e) => e.id === a);
        if (-1 !== A) {
            ((E.render_id = u[A].render_id), _.set(n, [...u.slice(0, A), E, ...u.slice(A + 1)]), N(n));
            return;
        }
        let f = [...u, E];
        (i.trimStart().startsWith("!!") ||
            (0, o.q2)(f) ||
            (f = (t = f).some((e) => "queued" === e.disposition)
                ? t.map((e) => {
                      if ("queued" !== e.disposition) return e;
                      let { disposition: t, ...n } = e;
                      return n;
                  })
                : t).push((0, l.iW)("assistant", "")),
            _.set(n, f),
            N(n));
    },
    CONJURE_CHAT_MESSAGE_DISPOSITION: function (e) {
        let { projectId: t, id: n, activeTurnId: i, disposition: r } = e,
            a = _.get(t);
        if (null == a) return !1;
        let s = a.findIndex((e) => e.id === n);
        if (-1 === s) return !1;
        let d = "steered" === r ? a.filter((e, t) => t <= s || e.in_reply_to !== n || "queued" !== e.acknowledges) : a,
            c = d[s].disposition === r ? d : [...d.slice(0, s), { ...d[s], disposition: r }, ...d.slice(s + 1)],
            u = "steered" === r ? (0, o.gi)(c, i) : -1;
        if ("steered" === r && -1 === u && null != i) {
            let e = (0, o.Si)(c, i);
            if (-1 !== e && e < s) {
                let n = { ...c[e], turn_id: i };
                if (0 === n.steps.length) {
                    (_.set(t, [...c.slice(0, e), ...c.slice(e + 1, s + 1), n, ...c.slice(s + 1)]), N(t));
                    return;
                }
                ((c = [...c.slice(0, e), n, ...c.slice(e + 1)]), (u = e));
            }
        }
        if (-1 === u || u > s) return c !== a && void _.set(t, c);
        let E = b(c[s + 1]) ? s + 2 : s + 1;
        (_.set(t, [
            ...c.slice(0, u),
            { ...c[u], continued: !0, finished_at: c[u].finished_at ?? Date.now() },
            ...c.slice(u + 1, s + 1),
            (0, l.iW)("assistant", "", { turnId: i }),
            ...c.slice(E),
        ]),
            N(t));
    },
    CONJURE_CHAT_MESSAGE_REACTION: function (e) {
        let { projectId: t, id: n, reaction: i } = e,
            r = _.get(t);
        if (null == r) return !1;
        let a = r.findIndex((e) => "user" === e.role && e.id === n);
        if (-1 === a || (0, s.tH)(r[a].agentReaction, i)) return !1;
        _.set(t, (0, o._D)(r, a, { ...r[a], agentReaction: i }));
    },
    CONJURE_CHAT_MESSAGE_CANCELLED: function (e) {
        let { projectId: t, id: n, withdrawn: i } = e,
            r = _.get(t);
        if (null == r) return !1;
        let a = !0 === i ? r[r.findIndex((e) => e.id === n) + 1] : void 0,
            s =
                null != a && "assistant" === a.role && "" === a.content && null == a.turn_id && 0 === a.steps.length
                    ? a.id
                    : null,
            l = r.filter((e) => e.id !== n && e.in_reply_to !== n && e.id !== s);
        if (l.length === r.length) return !1;
        (_.set(t, l), null != s && N(t));
    },
    CONJURE_CHAT_SIDE_REPLY: function (e) {
        let { projectId: t, id: n, inReplyTo: i, content: r, timestamp: a, attachments: s } = e,
            d = _.get(t);
        if (null == d || d.some((e) => e.id === n)) return !1;
        let c = (0, l.iW)("assistant", r, { ts: a, id: n, attachments: s });
        ((c.kind = "side_reply"), (c.in_reply_to = i));
        let u = d.findIndex((e) => e.id === i);
        if (-1 === u) return void _.set(t, [...d, c]);
        let { disposition: E } = d[u];
        null != E && (c.acknowledges = E);
        let A = "answered" === E && b(d[u + 1]),
            f = [...d.slice(0, u + 1), c, ...d.slice(A ? u + 2 : u + 1)],
            h = f.findLastIndex((e) => "assistant" === e.role && !(0, o.B5)(e));
        if ("answered" === E && -1 !== h && h < u && !(0, o.BL)(f[h])) {
            let [e] = f.splice(h, 1);
            f.splice(u + 1, 0, e);
        }
        (_.set(t, f), A && N(t));
    },
    CONJURE_CHAT_PUBLISH_NOTICE: function (e) {
        let { projectId: t, id: n, content: i, timestamp: r, publishNotice: a } = e,
            s = _.get(t);
        if (null == s || s.some((e) => e.id === n)) return !1;
        let d = (0, l.iW)("assistant", i, { ts: r, id: n });
        ((d.kind = "publish_notice"), (d.publishNotice = a), (d.finished = !0));
        let c = s.findLastIndex((e) => "assistant" === e.role && !(0, o.B5)(e)),
            u = -1 === c || (0, o.BL)(s[c]) ? null : s[c];
        null == u
            ? _.set(t, [...s, d])
            : 0 === u.steps.length
              ? _.set(t, [...s.slice(0, c), ...s.slice(c + 1), d, u])
              : _.set(t, [
                    ...s.slice(0, c),
                    { ...u, continued: !0, finished_at: u.finished_at ?? Date.now() },
                    ...s.slice(c + 1),
                    d,
                    (0, l.iW)("assistant", "", null != u.turn_id ? { turnId: u.turn_id } : {}),
                ]);
    },
    CONJURE_CHAT_PROJECT_EVENT: function (e) {
        let { projectId: t, event: n } = e,
            i = _.get(t);
        if (null == i || i.some((e) => e.id === n.id)) return !1;
        let r = (0, l.iW)("assistant", "", { ts: n.ts, id: n.id });
        ((r.kind = "project_event"), (r.projectEvent = n), (r.finished = !0), _.set(t, [...i, r]));
    },
    CONJURE_CHAT_CONTEXT_SWITCH: function (e) {
        let { projectId: t, contextSwitch: n } = e,
            i = _.get(t);
        if (null == i) return !1;
        let r = i.findIndex((e) => e.contextSwitch?.id === n.id);
        if ("undone" === n.status) return -1 !== r && void _.set(t, [...i.slice(0, r), ...i.slice(r + 1)]);
        if (-1 !== r) return void _.set(t, (0, o._D)(i, r, { ...i[r], contextSwitch: n }));
        if ("active" !== n.status && "reverted" !== n.status) return !1;
        let a = (0, l.iW)("assistant", "", { ts: n.ts, id: n.id });
        ((a.kind = "context_boundary"), (a.contextSwitch = n), (a.finished = !0));
        let s = "reverted" === n.status ? -1 : i.findIndex((e) => "user" === e.role && e.id === n.message_id);
        -1 === s ? _.set(t, [...i, a]) : _.set(t, [...i.slice(0, s), a, ...i.slice(s)]);
    },
    CONJURE_CHAT_STEP_APPEND: function (e) {
        let { projectId: t, step: n, turnId: i } = e,
            r = _.get(t);
        return (
            ("preview_ready" !== n.kind || null != i || (null != r && -1 !== (0, o.Si)(r, void 0))) &&
            (g(t, i, (e) => {
                let t = (0, d.IC)(e.steps, n);
                return t === e.steps ? e : { ...e, steps: t };
            }),
            _.get(t) !== r && void N(t))
        );
    },
    CONJURE_CHAT_TURN_FINISHED: function (e) {
        let { projectId: t, summary: n, turnId: i } = e,
            r = _.get(t);
        (null != r &&
            r.some((e) => null != e.disposition) &&
            _.set(
                t,
                r.map((e) => {
                    if (null == e.disposition) return e;
                    let { disposition: t, ...n } = e;
                    return n;
                }),
            ),
            g(t, i, (e) => ({
                ...e,
                finished: !0,
                finished_at: Date.now(),
                settledAsIdle: void 0,
                provisionalTodo: void 0,
                content: "" !== e.content ? e.content : (n ?? ""),
            })),
            S(t) || (I.delete(t), p.delete(t)),
            m.delete(t),
            N(t));
    },
    CONJURE_CHAT_INTERRUPTED: function (e) {
        let { projectId: t } = e,
            n = _.get(t);
        if (null == n) return !1;
        let i = (0, l.iW)("assistant", "");
        ((i.finished = !0), (i.finished_at = Date.now()), (i.interrupted = !0), _.set(t, [...n, i]));
    },
    CONJURE_CHAT_RUNNING_TURN_SET: function (e) {
        let { projectId: t, turnId: n } = e,
            i = _.get(t);
        if (null == i) return !1;
        let r = i.map((e, t) => {
            if (null != n && !0 === e.settledAsIdle && (0, o.s3)(e, n)) {
                let { finished: t, finished_at: n, settledAsIdle: i, ...r } = e;
                return r;
            }
            return "assistant" !== e.role ||
                (0, o.B5)(e) ||
                (0, o.BL)(e) ||
                (null != n && (0, o.s3)(e, n)) ||
                (function (e, t) {
                    let n = e[t];
                    if (null != n.turn_id || n.steps.length > 0) return !1;
                    for (let n = t - 1; n >= 0; n--) {
                        if ("user" === e[n].role) return !0;
                        if (!(0, o.B5)(e[n])) break;
                    }
                    return !1;
                })(i, t)
                ? e
                : { ...e, finished: !0, finished_at: Date.now(), provisionalTodo: void 0, settledAsIdle: !0 };
        });
        if (r.every((e, t) => e === i[t])) return !1;
        (_.set(t, r), N(t));
    },
    CONJURE_CHAT_STOP_REQUESTED: function (e) {
        let { projectId: t } = e,
            n = _.get(t);
        if (null == n || !n.some(o.pZ)) return !1;
        _.set(
            t,
            n.map((e) => ((0, o.pZ)(e) ? { ...e, stopRequested: !0 } : e)),
        );
    },
    CONJURE_CHAT_PROVISIONAL_TODO: function (e) {
        let { projectId: t, turnId: n, text: i } = e;
        if (
            !(function (e, t, n) {
                let i = _.get(e);
                if (null == i) return !1;
                let r = (0, o.gi)(i, t);
                return -1 !== r && (_.set(e, (0, o._D)(i, r, n(i[r]))), !0);
            })(t, n, (e) => ({ ...e, provisionalTodo: i }))
        )
            return !1;
    },
    CONJURE_CHAT_SOURCE_CHECKPOINT: function (e) {
        let { projectId: t, turnId: n, sourceSha: i } = e,
            r = _.get(t);
        if (null == r) return !1;
        let a = r.map((e) =>
            "assistant" === e.role && e.sourceSha !== i && (0, o.s3)(e, n) ? { ...e, sourceSha: i } : e,
        );
        if (a.every((e, t) => e === r[t])) return !1;
        _.set(t, a);
    },
    CONJURE_CHAT_THINKING_SET: function (e) {
        let { projectId: t, activity: n } = e;
        if (null == n) return !!I.delete(t) && void 0;
        let i = I.get(t);
        if (null != i && n.session === i.session && n.seq <= i.seq) return !1;
        I.set(t, n);
    },
    CONJURE_CHAT_COMPACTING_SET: function (e) {
        let { projectId: t, compacting: n } = e;
        if (n === p.has(t)) return !1;
        n ? p.add(t) : p.delete(t);
    },
    CONJURE_CHAT_SAVING_SET: function (e) {
        let { projectId: t, saving: n } = e;
        if (n === m.has(t)) return !1;
        n ? m.add(t) : m.delete(t);
    },
    CONJURE_CHAT_USAGE_SET: function (e) {
        let { projectId: t, project: n } = e;
        h.set(t, n);
    },
    CONJURE_CHAT_TURN_PATCH: function (e) {
        let { projectId: t, patch: n, turnId: i } = e;
        (g(t, i, (e) => {
            let t = { ...e, ...n };
            return ("todos" in n && (t.provisionalTodo = void 0), t);
        }),
            N(t));
    },
    CONJURE_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("closed" !== n && "failed" !== n) return !1;
        let i = p.delete(t),
            r = m.delete(t),
            a = I.delete(t),
            s = _.get(t);
        if (null == s || !s.some((e) => "assistant" === e.role && !(0, o.BL)(e))) return (!!a || !!i || !!r) && void 0;
        (_.set(
            t,
            s.map((e) => {
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
                              { type: "step", kind: "terminal_error", message: u.intl.string(c.default.lmiuFX) },
                          ],
                      };
            }),
        ),
            N(t));
    },
    CONJURE_PROJECT_CREATE_SUCCESS: function (e) {
        let { project: t } = e;
        if (R.has(t.id)) return !1;
        R.set(t.id, null);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!C(t)) return !1;
    },
    CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = new Set([..._.keys(), ...R.keys(), ...E.keys(), ...A.keys(), ...h.keys()]),
            n = !1;
        for (let e of t) null == a.Ay.getProject(e) && C(e) && (n = !0);
        if (!n) return !1;
    },
});
