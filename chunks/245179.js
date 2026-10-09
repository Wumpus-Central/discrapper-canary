(n.d(t, { Ay: () => eo, B0: () => F, BL: () => O, bi: () => ei }), n(667532), n(321073));
var i = n(17928),
    l = n(73153),
    s = n(695515),
    r = n(400492),
    u = n(885386),
    o = n(617617),
    d = n(803224),
    a = n(309010),
    f = n(967198),
    c = n(461213),
    _ = n(935208),
    p = n(260498),
    g = n(189714),
    E = n(28480),
    h = n(246338),
    C = n(652215),
    T = n(746080),
    A = n(248675),
    S = n(660183);
let N = "bit_message1",
    R = new Set(["reply", "plan_proposed", "terminal_error"]);
function O(e) {
    return (
        !0 === e.finished ||
        !0 === e.continued ||
        "" !== e.content ||
        null != e.proposal ||
        null != e.clarification ||
        null != e.intake ||
        U(e.steps)
    );
}
let k = new WeakMap();
function U(e) {
    let t = k.get(e);
    return (null == t && ((t = e.some((e) => R.has(e.kind))), k.set(e, t)), t);
}
let m = new Map(),
    I = new Map(),
    q = new Map(),
    w = [],
    v = new Map(),
    H = new Map(),
    J = new Set(),
    y = new Set(),
    D = new Map(),
    P = 0,
    b = [],
    j = 0;
function M(e, t) {
    let {
            ts: n,
            id: i,
            userId: l,
            attachments: s,
            turnId: r,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        u = i ?? `m${++j}`;
    return {
        id: u,
        render_id: u,
        role: e,
        content: t,
        ...(null != l ? { user_id: l } : {}),
        ...(null != r ? { turn_id: r } : {}),
        steps: [],
        created_at: null != n ? Date.parse(n) : Date.now(),
        attachments: s,
    };
}
let L = "turn:";
function z(e) {
    let t = M(e.role, e.content, { ts: e.ts, id: e.id, userId: e.user_id, attachments: e.attachments }),
        n = (function (e) {
            let t = e?.startsWith(L) === !0 ? e.slice(L.length) : e;
            if (null == t || !/^\d+$/.test(t)) return null;
            let n = _.default.extractTimestamp(t);
            return Number.isFinite(n) && n > 0 ? n : null;
        })(e.id);
    if (
        (null != n && ("assistant" === e.role || null == e.ts) && (t.created_at = n),
        "assistant" === e.role && null != e.ts)
    ) {
        let n = Date.parse(e.ts);
        Number.isFinite(n) && (t.settled_at = n);
    }
    for (let n of (null != e.kind && (t.kind = e.kind),
    "interrupted" === e.kind && ((t.interrupted = !0), (t.content = ""), (t.finished = !0)),
    null != e.proposal && (t.proposal = e.proposal),
    null != e.ideas && e.ideas.length > 0 && (t.ideas = e.ideas),
    null != e.publish_cta && (t.publishCta = e.publish_cta),
    null != e.publish_notice && (t.publishNotice = e.publish_notice),
    null != e.project_event && (t.projectEvent = e.project_event),
    null != e.clarification && e.clarification.questions.length > 0 && (t.clarification = e.clarification),
    null != e.restore_proposal && (t.restoreProposal = e.restore_proposal),
    null != e.source_sha && (t.sourceSha = e.source_sha),
    null == e.steps && null == e.events && null != e.todos && e.todos.length > 0 && (t.todos = e.todos),
    null != e.steps
        ? (t.steps = (function (e) {
              let t = [],
                  n = { seenSeq: new Set(), todosAt: -1 };
              for (let i of e) er(t, n, i);
              return (es.set(t, n), t);
          })(e.steps))
        : null != e.events &&
          (t.steps = e.events.flatMap((e) =>
              "todos" === e.type ? [{ type: "step", kind: "todos", items: e.items }] : [],
          )),
    null != e.secret_request && e.secret_request.fields.length > 0 && (t.secretRequest = e.secret_request),
    null != e.settings_request && (t.settingsRequest = e.settings_request),
    null != e.intake && e.intake.questions.length > 0 && (t.intake = e.intake),
    e.steps ?? []))
        "awaiting_user" === n.kind && "secrets" === n.action && (t.awaitingUser = { action: n.action });
    return t;
}
function G(e, t) {
    return e.turn_id === t || e.id === `${L}${t}`;
}
function x(e, t) {
    if (null == t) return -1;
    for (let n = e.length - 1; n >= 0; n--) if (G(e[n], t)) return n;
    return -1;
}
function F(e, t) {
    let n = e[t],
        i = n?.turn_id;
    if (null == n || "assistant" !== n.role || null == i || "" !== n.content || O(n)) return !1;
    for (let n = t - 1; n >= 0; n--) {
        let t = e[n];
        if ("user" === t.role) break;
        if (G(t, i)) return O(t);
    }
    return !1;
}
function V(e, t) {
    let n = x(e, t);
    if (-1 !== n) return n;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (!("assistant" !== n.role || O(n)) && null == n.turn_id) return t;
    }
    return -1;
}
function W(e, t, n) {
    let i = m.get(e);
    if (null == i) return;
    let l = V(i, t);
    if (-1 === l) return void m.set(e, [...i, n(M("assistant", "", null != t ? { turnId: t } : {}))]);
    let s = i[l],
        r = n(null == t || null != s.turn_id || G(s, t) ? s : { ...s, turn_id: t });
    r !== s && m.set(e, B(i, l, r));
}
function B(e, t, n) {
    let i = e.slice();
    return ((i[t] = n), i);
}
function $(e) {
    return "side_reply" === e.kind || "publish_notice" === e.kind || "project_event" === e.kind;
}
function Y(e) {
    if (null == e) return !1;
    let t = !1;
    for (let n = e.length - 1; n >= 0; n--) {
        let i = e[n];
        if (!("assistant" !== i.role || $(i)) && ((!t && ((t = !0), !O(i))) || (null != i.turn_id && !O(i)))) return !0;
    }
    return !1;
}
function K(e) {
    return Y(m.get(e));
}
function Q(e, t, n, i, l) {
    if (null != l) {
        if (l <= (D.get(e) ?? 0)) return;
        D.set(e, l);
    }
    if (
        E.A.areTurnNotificationsDisabled() ||
        c.A.getStatus() === C.clD.DND ||
        u.NO.getSetting() ||
        s.A.isCurrentUserInRestrictedHours() ||
        (0, g.j)(o.A.settings, e)
    )
        return;
    let _ = !d.A.isSoundDisabled("message1"),
        A = f.A.getGuildId();
    if (
        null != A &&
        p.Ay.getSelectedProjectId(A) === e &&
        a.Ay.getChannelId() === T.VV.CONJURE &&
        E.A.isWindowFocused()
    ) {
        _ && (0, r.Ak)(N, 0.4);
        return;
    }
    let S = t ?? (0, h.oX)("VibegrationsChatStore");
    E.A.presentTurnNotification({
        projectId: e,
        guildId: S,
        title: n,
        body: i,
        route: null == S ? null : C.BVt.CHANNEL(S, T.VV.CONJURE, e),
        sound: _ ? N : void 0,
        volume: 0.4,
    });
}
function X(e) {
    let t = q.get(e) ?? !1,
        n = K(e);
    if (t === n) return;
    q.set(e, n);
    let i = w.indexOf(e);
    if ((-1 !== i && w.splice(i, 1), w.unshift(e), n)) I.delete(e);
    else {
        let t;
        (null !=
            (t = (function (e) {
                let t = m.get(e);
                if (null == t) return null;
                for (let e = t.length - 1; e >= 0; e--) if ("assistant" === t[e].role && !$(t[e])) return t[e];
                return null;
            })(e)) &&
        ("" !== t.content.trim() ||
            null != t.proposal ||
            null != t.clarification ||
            null != t.intake ||
            t.steps.some((e) => R.has(e.kind) && "terminal_error" !== e.kind))
            ? I.set(e, Date.now())
            : I.delete(e),
            !(function (e) {
                let t = m.get(e);
                if (null != t)
                    for (let n = t.length - 1; n >= 0; n--) {
                        let i = t[n];
                        if ("assistant" === i.role) {
                            if (null != i.finished_at || !O(i)) return;
                            m.set(e, [...t.slice(0, n), { ...i, finished_at: Date.now() }, ...t.slice(n + 1)]);
                            return;
                        }
                    }
            })(e));
    }
}
function Z(e) {
    let t = m.delete(e),
        n = et.delete(e),
        i = en.delete(e),
        l = I.delete(e),
        s = q.delete(e),
        r = v.delete(e),
        u = H.delete(e),
        o = J.delete(e),
        d = y.delete(e),
        a = w.indexOf(e);
    return (-1 !== a && w.splice(a, 1), t || n || i || l || s || r || u || o || d || -1 !== a);
}
class ee extends i.Ay.Store {
    initialize() {
        this.waitFor(s.A, d.A, a.Ay, f.A, c.A, o.A, p.Ay);
    }
    getMessages(e) {
        return m.get(e) ?? b;
    }
    hasPendingSettingsRequest(e) {
        let t = this.getMessages(e),
            n = t[t.length - 1];
        return null != n && "assistant" === n.role && null != n.settingsRequest;
    }
    isThinking(e) {
        return K(e);
    }
    hasLoadedHistory(e) {
        return et.has(e);
    }
    isHistoryUnavailable(e) {
        return en.has(e);
    }
    getFinishedAt(e) {
        return K(e) ? null : (I.get(e) ?? null);
    }
    getProjectUsage(e) {
        return v.get(e) ?? null;
    }
    getThinkingActivity(e) {
        return H.get(e) ?? null;
    }
    isCompacting(e) {
        return J.has(e);
    }
    isSaving(e) {
        return y.has(e);
    }
    getSidebarWidth() {
        return P;
    }
    getActivityOrderedProjectIds() {
        return w.slice();
    }
    isAnyThinking() {
        for (let e of m.keys()) if (this.isThinking(e)) return !0;
        return !1;
    }
}
let et = new Map(),
    en = new Set();
function ei(e) {
    return et.get(e) ?? null;
}
function el(e) {
    let t = new Map();
    for (let n of e)
        if ("assistant" === n.role)
            for (let e of n.steps)
                "reaction" === e.kind &&
                    null != e.message_id &&
                    null != e.emoji &&
                    "" !== e.emoji &&
                    t.set(e.message_id, e.emoji);
    return 0 === t.size
        ? e
        : e.map((e) => {
              let n = "user" === e.role && null != e.id ? t.get(e.id) : void 0;
              return null == n || e.agentReaction === n ? e : { ...e, agentReaction: n };
          });
}
let es = new WeakMap();
function er(e, t, n) {
    if (null != n.turn_seq && t.seenSeq.has(n.turn_seq)) return;
    if ("todos" !== n.kind || null != n.task_id) {
        (e.push(n), null != n.turn_seq && t.seenSeq.add(n.turn_seq));
        return;
    }
    if (-1 === t.todosAt) {
        ((t.todosAt = e.length), e.push(n), null != n.turn_seq && t.seenSeq.add(n.turn_seq));
        return;
    }
    let i = e[t.todosAt];
    (null != i.turn_seq && t.seenSeq.delete(i.turn_seq),
        (e[t.todosAt] = n),
        null != n.turn_seq && t.seenSeq.add(n.turn_seq));
}
function eu(e) {
    return "assistant" === e.role && !$(e) && !O(e) && !0 !== e.stopRequested;
}
let eo = new ee(l.h, {
    LOGOUT: function () {
        if (
            (D.clear(),
            0 === m.size &&
                0 === I.size &&
                0 === q.size &&
                0 === v.size &&
                0 === H.size &&
                0 === J.size &&
                0 === y.size &&
                0 === et.size &&
                0 === en.size &&
                0 === w.length &&
                0 === P)
        )
            return !1;
        (m.clear(),
            I.clear(),
            q.clear(),
            v.clear(),
            H.clear(),
            J.clear(),
            y.clear(),
            et.clear(),
            en.clear(),
            (w.length = 0),
            (P = 0));
    },
    CONJURE_CHAT_HISTORY_SET: function (e) {
        let { projectId: t, entries: n, cursor: i, degraded: l } = e,
            s = et.get(t),
            r = et.has(t) ? (m.get(t) ?? []) : [];
        (et.set(t, i ?? null), !0 === l ? en.add(t) : en.delete(t), H.delete(t), J.delete(t), y.delete(t));
        let u = new Set(),
            o = n.filter((e) => null == e.id || (!u.has(e.id) && (u.add(e.id), !0))).map(z),
            d = null != i && !0 !== l ? o.findIndex((e) => null != e.id) : -1,
            a = -1 === d ? -1 : r.findIndex((e) => e.id === o[d].id);
        (-1 !== a && et.set(t, s ?? null), m.set(t, el(-1 === a ? o : [...r.slice(0, a), ...o.slice(d)])), X(t));
    },
    CONJURE_CHAT_HISTORY_PREPEND: function (e) {
        let { projectId: t, entries: n, cursor: i } = e;
        if ((et.set(t, i), 0 === n.length)) return;
        let l = m.get(t) ?? [],
            s = n.map(z),
            r = new Set(l.flatMap((e) => (null == e.id ? [] : [e.id]))),
            u = s.filter((e) => null == e.id || !r.has(e.id));
        m.set(t, el([...u, ...l]));
    },
    CONJURE_CHAT_MESSAGE_APPEND: function (e) {
        let { projectId: t, content: n, id: i, optimisticId: l, userId: s, timestamp: r, attachments: u } = e,
            o = m.get(t) ?? [];
        if (o.some((e) => e.id === i)) return !1;
        let d = M("user", n, { ts: r, id: i, userId: s, attachments: u }),
            a = null == l ? -1 : o.findIndex((e) => e.id === l);
        if (-1 !== a) {
            ((d.render_id = o[a].render_id), m.set(t, [...o.slice(0, a), d, ...o.slice(a + 1)]), X(t));
            return;
        }
        let f = [...o, d];
        (Y(f) || f.push(M("assistant", "")), m.set(t, f), X(t));
    },
    CONJURE_CHAT_MESSAGE_DISPOSITION: function (e) {
        let { projectId: t, id: n, activeTurnId: i, disposition: l } = e,
            s = m.get(t);
        if (null == s) return !1;
        let r = s.findIndex((e) => e.id === n);
        if (-1 === r) return !1;
        let u = "steered" === l ? s.filter((e, t) => t <= r || e.in_reply_to !== n || "queued" !== e.acknowledges) : s,
            o = u[r].disposition === l ? u : [...u.slice(0, r), { ...u[r], disposition: l }, ...u.slice(r + 1)],
            d = "steered" === l ? x(o, i) : -1;
        if ("steered" === l && -1 === d && null != i) {
            let e = V(o, i);
            if (-1 !== e && e < r) {
                let n = { ...o[e], turn_id: i };
                if (0 === n.steps.length) {
                    (m.set(t, [...o.slice(0, e), ...o.slice(e + 1, r + 1), n, ...o.slice(r + 1)]), X(t));
                    return;
                }
                ((o = [...o.slice(0, e), n, ...o.slice(e + 1)]), (d = e));
            }
        }
        if (-1 === d || d > r) return o !== s && void m.set(t, o);
        (m.set(t, [
            ...o.slice(0, d),
            { ...o[d], continued: !0, finished_at: o[d].finished_at ?? Date.now() },
            ...o.slice(d + 1, r + 1),
            M("assistant", "", { turnId: i }),
            ...o.slice(r + 1),
        ]),
            X(t));
    },
    CONJURE_CHAT_MESSAGE_CANCELLED: function (e) {
        let { projectId: t, id: n } = e,
            i = m.get(t);
        if (null == i) return !1;
        let l = i.filter((e) => e.id !== n && e.in_reply_to !== n);
        if (l.length === i.length) return !1;
        m.set(t, l);
    },
    CONJURE_CHAT_MESSAGE_REACTION: function (e) {
        let { projectId: t, id: n, emoji: i } = e,
            l = m.get(t);
        if (null == l) return !1;
        let s = l.findIndex((e) => "user" === e.role && e.id === n);
        if (-1 === s || l[s].agentReaction === i) return !1;
        m.set(t, [...l.slice(0, s), { ...l[s], agentReaction: i }, ...l.slice(s + 1)]);
    },
    CONJURE_CHAT_SIDE_REPLY: function (e) {
        let { projectId: t, id: n, inReplyTo: i, content: l, timestamp: s } = e,
            r = m.get(t);
        if (null == r || r.some((e) => e.id === n)) return !1;
        let u = M("assistant", l, { ts: s, id: n });
        ((u.kind = "side_reply"), (u.in_reply_to = i));
        let o = r.findIndex((e) => e.id === i);
        if (-1 === o) return void m.set(t, [...r, u]);
        let { disposition: d } = r[o];
        (null != d && (u.acknowledges = d), m.set(t, [...r.slice(0, o + 1), u, ...r.slice(o + 1)]));
    },
    CONJURE_CHAT_PUBLISH_NOTICE: function (e) {
        let { projectId: t, id: n, content: i, timestamp: l, publishNotice: s } = e,
            r = m.get(t);
        if (null == r || r.some((e) => e.id === n)) return !1;
        let u = M("assistant", i, { ts: l, id: n });
        ((u.kind = "publish_notice"), (u.publishNotice = s), (u.finished = !0), m.set(t, [...r, u]));
    },
    CONJURE_CHAT_PROJECT_EVENT: function (e) {
        let { projectId: t, event: n } = e,
            i = m.get(t);
        if (null == i || i.some((e) => e.id === n.id)) return !1;
        let l = M("assistant", "", { ts: n.ts, id: n.id });
        ((l.kind = "project_event"), (l.projectEvent = n), (l.finished = !0), m.set(t, [...i, l]));
    },
    CONJURE_CHAT_STEP_APPEND: function (e) {
        let { projectId: t, step: n, turnId: i } = e;
        if ("preview_ready" === n.kind && null == i && !K(t)) return !1;
        let l = m.get(t);
        if (
            (W(t, i, (e) => {
                let t = (function (e, t) {
                    let n = (function (e) {
                        let t = es.get(e);
                        if (null != t) return t;
                        let n = new Set(),
                            i = -1;
                        for (let [t, l] of e.entries())
                            (null != l.turn_seq && n.add(l.turn_seq),
                                -1 === i && "todos" === l.kind && null == l.task_id && (i = t));
                        let l = { seenSeq: n, todosAt: i };
                        return (es.set(e, l), l);
                    })(e);
                    if (null != t.turn_seq && n.seenSeq.has(t.turn_seq)) return e;
                    let i = e.slice();
                    return (es.delete(e), er(i, n, t), es.set(i, n), k.set(i, U(e) || R.has(t.kind)), i);
                })(e.steps, n);
                return t === e.steps ? e : { ...e, steps: t };
            }),
            m.get(t) === l)
        )
            return !1;
        X(t);
    },
    CONJURE_CHAT_TURN_FINISHED: function (e) {
        let { projectId: t, summary: n, turnId: i } = e,
            l = m.get(t);
        (null != l &&
            l.some((e) => null != e.disposition) &&
            m.set(
                t,
                l.map((e) => {
                    if (null == e.disposition) return e;
                    let { disposition: t, ...n } = e;
                    return n;
                }),
            ),
            W(t, i, (e) => ({
                ...e,
                finished: !0,
                finished_at: Date.now(),
                provisionalTodo: void 0,
                content: "" !== e.content ? e.content : (n ?? ""),
            })),
            K(t) || (H.delete(t), J.delete(t)),
            y.delete(t),
            X(t));
    },
    CONJURE_CHAT_INTERRUPTED: function (e) {
        let { projectId: t } = e,
            n = m.get(t);
        if (null == n) return !1;
        let i = M("assistant", "");
        ((i.finished = !0), (i.finished_at = Date.now()), (i.interrupted = !0), m.set(t, [...n, i]));
    },
    CONJURE_CHAT_STOP_REQUESTED: function (e) {
        let { projectId: t } = e,
            n = m.get(t);
        if (null == n || !n.some(eu)) return !1;
        m.set(
            t,
            n.map((e) => (eu(e) ? { ...e, stopRequested: !0 } : e)),
        );
    },
    CONJURE_CHAT_PROVISIONAL_TODO: function (e) {
        let { projectId: t, turnId: n, text: i } = e;
        if (
            !(function (e, t, n) {
                let i = m.get(e);
                if (null == i) return !1;
                let l = x(i, t);
                return -1 !== l && (m.set(e, B(i, l, n(i[l]))), !0);
            })(t, n, (e) => ({ ...e, provisionalTodo: i }))
        )
            return !1;
    },
    CONJURE_CHAT_SOURCE_CHECKPOINT: function (e) {
        let { projectId: t, turnId: n, sourceSha: i } = e,
            l = m.get(t);
        if (null == l) return !1;
        let s = l.map((e) => ("assistant" === e.role && e.sourceSha !== i && G(e, n) ? { ...e, sourceSha: i } : e));
        if (s.every((e, t) => e === l[t])) return !1;
        m.set(t, s);
    },
    CONJURE_CHAT_THINKING_SET: function (e) {
        let { projectId: t, activity: n } = e;
        if (null == n) return !!H.delete(t) && void 0;
        let i = H.get(t);
        if (null != i && n.session === i.session && n.seq <= i.seq) return !1;
        H.set(t, n);
    },
    CONJURE_CHAT_COMPACTING_SET: function (e) {
        let { projectId: t, compacting: n } = e;
        if (n === J.has(t)) return !1;
        n ? J.add(t) : J.delete(t);
    },
    CONJURE_CHAT_SAVING_SET: function (e) {
        let { projectId: t, saving: n } = e;
        if (n === y.has(t)) return !1;
        n ? y.add(t) : y.delete(t);
    },
    CONJURE_CHAT_USAGE_SET: function (e) {
        let { projectId: t, project: n } = e;
        v.set(t, n);
    },
    CONJURE_CHAT_SIDEBAR_WIDTH_SET: function (e) {
        let { width: t } = e;
        if (P === t) return !1;
        P = t;
    },
    CONJURE_CHAT_TURN_PATCH: function (e) {
        let { projectId: t, patch: n, turnId: i } = e;
        (W(t, i, (e) => {
            let t = { ...e, ...n };
            return ("todos" in n && (t.provisionalTodo = void 0), t);
        }),
            X(t));
    },
    CONJURE_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("closed" !== n && "failed" !== n) return !1;
        let i = J.delete(t),
            l = y.delete(t),
            s = H.delete(t),
            r = m.get(t);
        if (null == r || !r.some((e) => "assistant" === e.role && !O(e))) return (!!s || !!i || !!l) && void 0;
        (m.set(
            t,
            r.map((e) => {
                if (null != e.disposition) {
                    let { disposition: t, ...n } = e;
                    return n;
                }
                return "assistant" !== e.role || O(e)
                    ? e
                    : {
                          ...e,
                          provisionalTodo: void 0,
                          steps: [
                              ...e.steps,
                              { type: "step", kind: "terminal_error", message: S.intl.string(A.default.lmiuFX) },
                          ],
                      };
            }),
        ),
            X(t));
    },
    CONJURE_PROJECT_CREATE_SUCCESS: function (e) {
        let { project: t } = e;
        if (et.has(t.id)) return !1;
        et.set(t.id, null);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!Z(t)) return !1;
    },
    CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = new Set([...m.keys(), ...et.keys(), ...I.keys(), ...q.keys(), ...v.keys()]),
            n = !1;
        for (let e of t) null == p.Ay.getProject(e) && Z(e) && (n = !0);
        if (!n) return !1;
    },
    CONJURE_TURN_SETTLED: function (e) {
        let { projectId: t, guildId: n, title: i, body: l, nonce: s } = e;
        return (Q(t, n, i, l, s), !1);
    },
    CONJURE_TURN_NOTIFICATION: function (e) {
        let { projectId: t, body: n, nonce: i } = e,
            l = p.Ay.getProject(t);
        return (null != l && Q(t, l.guild_id ?? l.preview_guild_id ?? null, l.name, n, i), !1);
    },
});
