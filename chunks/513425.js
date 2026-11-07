(n.d(t, { A: () => M, b: () => b }), n(667532), n(321073), n(30146));
var i = n(855986),
    r = n(73153),
    a = n(260498);
function s(e) {
    return e.trimStart().startsWith("!!");
}
var l = n(187308),
    o = n(891784),
    d = n(886540),
    c = n(149987),
    u = n(191850),
    _ = n(792996);
let E = new Map(),
    A = new Map(),
    f = new Map(),
    h = [],
    I = new Map(),
    p = new Map(),
    m = new Set(),
    T = new Set(),
    g = [];
function S(e, t, n) {
    let i = E.get(e);
    if (null == i) return;
    let r = (0, d.Si)(i, t);
    if (-1 === r) return void E.set(e, [...i, n((0, o.iW)("assistant", "", null != t ? { turnId: t } : {}))]);
    let a = i[r],
        s = n(null == t || null != a.turn_id || (0, d.s3)(a, t) ? a : { ...a, turn_id: t });
    s !== a && E.set(e, (0, d._D)(i, r, s));
}
function N(e) {
    return (0, d.q2)(E.get(e));
}
function C(e) {
    let t = f.get(e) ?? !1,
        n = N(e);
    if (t === n) return;
    f.set(e, n);
    let i = h.indexOf(e);
    if ((-1 !== i && h.splice(i, 1), h.unshift(e), n)) A.delete(e);
    else {
        let t;
        (null !=
            (t = (function (e) {
                let t = E.get(e);
                if (null == t) return null;
                for (let e = t.length - 1; e >= 0; e--) if ("assistant" === t[e].role && !(0, d.B5)(t[e])) return t[e];
                return null;
            })(e)) &&
        ("" !== t.content.trim() ||
            null != t.proposal ||
            null != t.clarification ||
            null != t.intake ||
            t.steps.some((e) => c.Wq.has(e.kind) && "terminal_error" !== e.kind))
            ? A.set(e, Date.now())
            : A.delete(e),
            !(function (e) {
                let t = E.get(e);
                if (null != t)
                    for (let n = t.length - 1; n >= 0; n--) {
                        let i = t[n];
                        if ("assistant" === i.role) {
                            if (null != i.finished_at || !(0, d.BL)(i)) return;
                            E.set(e, [...t.slice(0, n), { ...i, finished_at: Date.now() }, ...t.slice(n + 1)]);
                            return;
                        }
                    }
            })(e));
    }
}
function O(e) {
    let t = E.delete(e),
        n = L.delete(e),
        i = y.delete(e),
        r = A.delete(e),
        a = f.delete(e),
        s = I.delete(e),
        l = p.delete(e),
        o = m.delete(e),
        d = T.delete(e),
        c = h.indexOf(e);
    return (-1 !== c && h.splice(c, 1), t || n || i || r || a || s || l || o || d || -1 !== c);
}
class R extends i.Ay.Store {
    initialize() {
        this.waitFor(a.Ay);
    }
    getMessages(e) {
        return E.get(e) ?? g;
    }
    hasPendingSettingsRequest(e) {
        let t = this.getMessages(e),
            n = t[t.length - 1];
        return null != n && "assistant" === n.role && null != n.settingsRequest;
    }
    isThinking(e) {
        return N(e);
    }
    hasLoadedHistory(e) {
        return L.has(e);
    }
    getHistoryLoads(e) {
        return D.get(e) ?? 0;
    }
    isHistoryUnavailable(e) {
        return y.has(e);
    }
    getFinishedAt(e) {
        return N(e) ? null : (A.get(e) ?? null);
    }
    getProjectUsage(e) {
        return I.get(e) ?? null;
    }
    getThinkingActivity(e) {
        return p.get(e) ?? null;
    }
    isCompacting(e) {
        return m.has(e);
    }
    isSaving(e) {
        return T.has(e);
    }
    getActivityOrderedProjectIds() {
        return h.slice();
    }
}
let L = new Map(),
    y = new Set(),
    D = new Map();
function b(e) {
    return L.get(e) ?? null;
}
function v(e) {
    let t = new Map();
    for (let n of e)
        if ("assistant" === n.role)
            for (let e of n.steps) {
                if ("reaction" !== e.kind || null == e.message_id) continue;
                let n = (0, l.xN)(e);
                null != n && t.set(e.message_id, n);
            }
    return 0 === t.size
        ? e
        : e.map((e) => {
              let n = "user" === e.role ? t.get(e.id) : void 0;
              return null == n || (0, l.tH)(e.agentReaction, n) ? e : { ...e, agentReaction: n };
          });
}
function P(e) {
    return (
        null != e &&
        "assistant" === e.role &&
        null == e.turn_id &&
        e.steps.every((e) => "preview_ready" === e.kind) &&
        !(0, d.B5)(e) &&
        !(0, d.BL)(e)
    );
}
let M = new R(r.h, {
    LOGOUT: function () {
        if (
            0 === E.size &&
            0 === A.size &&
            0 === f.size &&
            0 === I.size &&
            0 === p.size &&
            0 === m.size &&
            0 === T.size &&
            0 === L.size &&
            0 === y.size &&
            0 === h.length
        )
            return !1;
        (E.clear(),
            A.clear(),
            f.clear(),
            I.clear(),
            p.clear(),
            m.clear(),
            T.clear(),
            L.clear(),
            y.clear(),
            (h.length = 0));
    },
    CONJURE_CHAT_HISTORY_SET: function (e) {
        let { projectId: t, entries: n, cursor: i, degraded: r } = e;
        D.set(t, (D.get(t) ?? 0) + 1);
        let a = L.get(t),
            s = L.has(t) ? (E.get(t) ?? []) : [];
        (L.set(t, i ?? null), !0 === r ? y.add(t) : y.delete(t), p.delete(t), m.delete(t), T.delete(t));
        let l = new Set(),
            d = n.filter((e) => null == e.id || (!l.has(e.id) && (l.add(e.id), !0))),
            c = (0, o.Bd)(d),
            u = null != i && !0 !== r ? c.findIndex((e) => null != e.id) : -1,
            _ = -1 === u ? -1 : s.findIndex((e) => e.id === c[u].id);
        (-1 !== _ && L.set(t, a ?? null),
            E.set(t, v((0, o.YF)(-1 === _ ? c : [...s.slice(0, _), ...c.slice(u)]))),
            C(t));
    },
    CONJURE_CHAT_HISTORY_PREPEND: function (e) {
        let { projectId: t, entries: n, cursor: i } = e;
        if ((L.set(t, i), 0 === n.length)) return;
        let r = E.get(t) ?? [],
            a = (0, o.Bd)(n),
            s = new Set(r.flatMap((e) => (null == e.id ? [] : [e.id]))),
            l = a.filter((e) => null == e.id || !s.has(e.id));
        E.set(t, v((0, o.YF)([...l, ...r])));
    },
    CONJURE_CHAT_MESSAGE_APPEND: function (e) {
        let { projectId: t, content: n, id: i, optimisticId: r, userId: a, timestamp: l, attachments: c, held: u } = e,
            _ = E.get(t) ?? [],
            A = _.findIndex((e) => e.id === i);
        if (-1 !== A) {
            if (!0 !== _[A].held || !0 === u) return !1;
            let e = _.map((e, t) => (t === A ? { ...e, held: void 0 } : e));
            return (s(n) || (0, d.q2)(e) || e.push((0, o.iW)("assistant", "")), E.set(t, e), void C(t));
        }
        let f = (0, o.iW)("user", n, { ts: l, id: i, userId: a, attachments: c });
        !0 === u && (f.held = !0);
        let h = null == r ? -1 : _.findIndex((e) => e.id === r);
        if (-1 !== h) {
            ((f.render_id = _[h].render_id), E.set(t, [..._.slice(0, h), f, ..._.slice(h + 1)]), C(t));
            return;
        }
        let I = [..._, f];
        (!0 === u || s(n) || (0, d.q2)(I) || I.push((0, o.iW)("assistant", "")), E.set(t, I), C(t));
    },
    CONJURE_CHAT_MESSAGE_DISPOSITION: function (e) {
        let { projectId: t, id: n, activeTurnId: i, disposition: r } = e,
            a = E.get(t);
        if (null == a) return !1;
        let s = a.findIndex((e) => e.id === n);
        if (-1 === s) return !1;
        let l = "steered" === r ? a.filter((e, t) => t <= s || e.in_reply_to !== n || "queued" !== e.acknowledges) : a,
            c = l[s].disposition === r ? l : [...l.slice(0, s), { ...l[s], disposition: r }, ...l.slice(s + 1)],
            u = "steered" === r ? (0, d.gi)(c, i) : -1;
        if ("steered" === r && -1 === u && null != i) {
            let e = (0, d.Si)(c, i);
            if (-1 !== e && e < s) {
                let n = { ...c[e], turn_id: i };
                if (0 === n.steps.length) {
                    (E.set(t, [...c.slice(0, e), ...c.slice(e + 1, s + 1), n, ...c.slice(s + 1)]), C(t));
                    return;
                }
                ((c = [...c.slice(0, e), n, ...c.slice(e + 1)]), (u = e));
            }
        }
        if (-1 === u || u > s) return c !== a && void E.set(t, c);
        let _ = P(c[s + 1]) ? s + 2 : s + 1;
        (E.set(t, [
            ...c.slice(0, u),
            { ...c[u], continued: !0, finished_at: c[u].finished_at ?? Date.now() },
            ...c.slice(u + 1, s + 1),
            (0, o.iW)("assistant", "", { turnId: i }),
            ...c.slice(_),
        ]),
            C(t));
    },
    CONJURE_CHAT_MESSAGE_REACTION: function (e) {
        let { projectId: t, id: n, reaction: i } = e,
            r = E.get(t);
        if (null == r) return !1;
        let a = r.findIndex((e) => "user" === e.role && e.id === n);
        if (-1 === a || (0, l.tH)(r[a].agentReaction, i)) return !1;
        E.set(t, (0, d._D)(r, a, { ...r[a], agentReaction: i }));
    },
    CONJURE_CHAT_MESSAGE_CANCELLED: function (e) {
        let { projectId: t, id: n, withdrawn: i } = e,
            r = E.get(t);
        if (null == r) return !1;
        let a = !0 === i ? r[r.findIndex((e) => e.id === n) + 1] : void 0,
            s =
                null != a && "assistant" === a.role && "" === a.content && null == a.turn_id && 0 === a.steps.length
                    ? a.id
                    : null,
            l = r.filter((e) => e.id !== n && e.in_reply_to !== n && e.id !== s);
        if (l.length === r.length) return !1;
        (E.set(t, l), null != s && C(t));
    },
    CONJURE_CHAT_SIDE_REPLY: function (e) {
        let { projectId: t, id: n, inReplyTo: i, content: r, timestamp: a, attachments: s } = e,
            l = E.get(t);
        if (null == l || l.some((e) => e.id === n)) return !1;
        let c = (0, o.iW)("assistant", r, { ts: a, id: n, attachments: s });
        ((c.kind = "side_reply"), (c.in_reply_to = i));
        let u = l.findIndex((e) => e.id === i);
        if (-1 === u) return void E.set(t, [...l, c]);
        let { disposition: _ } = l[u];
        null != _ && (c.acknowledges = _);
        let A = "answered" === _ && P(l[u + 1]),
            f = [...l.slice(0, u + 1), c, ...l.slice(A ? u + 2 : u + 1)],
            h = f.findLastIndex((e) => "assistant" === e.role && !(0, d.B5)(e));
        if ("answered" === _ && -1 !== h && h < u && !(0, d.BL)(f[h])) {
            let [e] = f.splice(h, 1);
            f.splice(u + 1, 0, e);
        }
        (E.set(t, f), A && C(t));
    },
    CONJURE_CHAT_PUBLISH_NOTICE: function (e) {
        let { projectId: t, id: n, content: i, timestamp: r, publishNotice: a } = e,
            s = E.get(t);
        if (null == s || s.some((e) => e.id === n)) return !1;
        let l = (0, o.iW)("assistant", i, { ts: r, id: n });
        ((l.kind = "publish_notice"), (l.publishNotice = a), (l.finished = !0));
        let c = s.findLastIndex((e) => "assistant" === e.role && !(0, d.B5)(e)),
            u = -1 === c || (0, d.BL)(s[c]) ? null : s[c];
        null == u
            ? E.set(t, [...s, l])
            : 0 === u.steps.length
              ? E.set(t, [...s.slice(0, c), ...s.slice(c + 1), l, u])
              : E.set(t, [
                    ...s.slice(0, c),
                    { ...u, continued: !0, finished_at: u.finished_at ?? Date.now() },
                    ...s.slice(c + 1),
                    l,
                    (0, o.iW)("assistant", "", null != u.turn_id ? { turnId: u.turn_id } : {}),
                ]);
    },
    CONJURE_CHAT_PROJECT_EVENT: function (e) {
        let { projectId: t, event: n } = e,
            i = E.get(t);
        if (null == i || i.some((e) => e.id === n.id)) return !1;
        let r = (0, o.iW)("assistant", "", { ts: n.ts, id: n.id });
        ((r.kind = "project_event"), (r.projectEvent = n), (r.finished = !0), E.set(t, [...i, r]));
    },
    CONJURE_CHAT_CONTEXT_SWITCH: function (e) {
        let { projectId: t, contextSwitch: n } = e,
            i = E.get(t);
        if (null == i) return !1;
        let r = i.findIndex((e) => e.contextSwitch?.id === n.id);
        if ("undone" === n.status) return -1 !== r && void E.set(t, [...i.slice(0, r), ...i.slice(r + 1)]);
        if (-1 !== r) return void E.set(t, (0, d._D)(i, r, { ...i[r], contextSwitch: n }));
        if ("active" !== n.status && "reverted" !== n.status) return !1;
        let a = (0, o.iW)("assistant", "", { ts: n.ts, id: n.id });
        ((a.kind = "context_boundary"), (a.contextSwitch = n), (a.finished = !0));
        let s = "reverted" === n.status ? -1 : i.findIndex((e) => "user" === e.role && e.id === n.message_id);
        -1 === s ? E.set(t, [...i, a]) : E.set(t, [...i.slice(0, s), a, ...i.slice(s)]);
    },
    CONJURE_CHAT_STEP_APPEND: function (e) {
        let { projectId: t, step: n, turnId: i } = e,
            r = E.get(t);
        return (
            ("preview_ready" !== n.kind || null != i || (null != r && -1 !== (0, d.Si)(r, void 0))) &&
            (S(t, i, (e) => {
                let t = (0, c.IC)(e.steps, n);
                return t === e.steps ? e : { ...e, steps: t };
            }),
            E.get(t) !== r && void C(t))
        );
    },
    CONJURE_CHAT_TURN_FINISHED: function (e) {
        let { projectId: t, summary: n, turnId: i } = e,
            r = E.get(t);
        (null != r &&
            r.some((e) => null != e.disposition) &&
            E.set(
                t,
                r.map((e) => {
                    if (null == e.disposition) return e;
                    let { disposition: t, ...n } = e;
                    return n;
                }),
            ),
            S(t, i, (e) => ({
                ...e,
                finished: !0,
                finished_at: Date.now(),
                provisionalTodo: void 0,
                content: "" !== e.content ? e.content : (n ?? ""),
            })),
            N(t) || (p.delete(t), m.delete(t)),
            T.delete(t),
            C(t));
    },
    CONJURE_CHAT_INTERRUPTED: function (e) {
        let { projectId: t } = e,
            n = E.get(t);
        if (null == n) return !1;
        let i = (0, o.iW)("assistant", "");
        ((i.finished = !0), (i.finished_at = Date.now()), (i.interrupted = !0), E.set(t, [...n, i]));
    },
    CONJURE_CHAT_STOP_REQUESTED: function (e) {
        let { projectId: t } = e,
            n = E.get(t);
        if (null == n || !n.some(d.pZ)) return !1;
        E.set(
            t,
            n.map((e) => ((0, d.pZ)(e) ? { ...e, stopRequested: !0 } : e)),
        );
    },
    CONJURE_CHAT_PROVISIONAL_TODO: function (e) {
        let { projectId: t, turnId: n, text: i } = e;
        if (
            !(function (e, t, n) {
                let i = E.get(e);
                if (null == i) return !1;
                let r = (0, d.gi)(i, t);
                return -1 !== r && (E.set(e, (0, d._D)(i, r, n(i[r]))), !0);
            })(t, n, (e) => ({ ...e, provisionalTodo: i }))
        )
            return !1;
    },
    CONJURE_CHAT_SOURCE_CHECKPOINT: function (e) {
        let { projectId: t, turnId: n, sourceSha: i } = e,
            r = E.get(t);
        if (null == r) return !1;
        let a = r.map((e) =>
            "assistant" === e.role && e.sourceSha !== i && (0, d.s3)(e, n) ? { ...e, sourceSha: i } : e,
        );
        if (a.every((e, t) => e === r[t])) return !1;
        E.set(t, a);
    },
    CONJURE_CHAT_THINKING_SET: function (e) {
        let { projectId: t, activity: n } = e;
        if (null == n) return !!p.delete(t) && void 0;
        let i = p.get(t);
        if (null != i && n.session === i.session && n.seq <= i.seq) return !1;
        p.set(t, n);
    },
    CONJURE_CHAT_COMPACTING_SET: function (e) {
        let { projectId: t, compacting: n } = e;
        if (n === m.has(t)) return !1;
        n ? m.add(t) : m.delete(t);
    },
    CONJURE_CHAT_SAVING_SET: function (e) {
        let { projectId: t, saving: n } = e;
        if (n === T.has(t)) return !1;
        n ? T.add(t) : T.delete(t);
    },
    CONJURE_CHAT_USAGE_SET: function (e) {
        let { projectId: t, project: n } = e;
        I.set(t, n);
    },
    CONJURE_CHAT_TURN_PATCH: function (e) {
        let { projectId: t, patch: n, turnId: i } = e;
        (S(t, i, (e) => {
            let t = { ...e, ...n };
            return ("todos" in n && (t.provisionalTodo = void 0), t);
        }),
            C(t));
    },
    CONJURE_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("closed" !== n && "failed" !== n) return !1;
        let i = m.delete(t),
            r = T.delete(t),
            a = p.delete(t),
            s = E.get(t);
        if (null == s || !s.some((e) => "assistant" === e.role && !(0, d.BL)(e))) return (!!a || !!i || !!r) && void 0;
        (E.set(
            t,
            s.map((e) => {
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
                              { type: "step", kind: "terminal_error", message: _.intl.string(u.default.lmiuFX) },
                          ],
                      };
            }),
        ),
            C(t));
    },
    CONJURE_PROJECT_CREATE_SUCCESS: function (e) {
        let { project: t } = e;
        if (L.has(t.id)) return !1;
        L.set(t.id, null);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!O(t)) return !1;
    },
    CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = new Set([...E.keys(), ...L.keys(), ...A.keys(), ...f.keys(), ...I.keys()]),
            n = !1;
        for (let e of t) null == a.Ay.getProject(e) && O(e) && (n = !0);
        if (!n) return !1;
    },
});
