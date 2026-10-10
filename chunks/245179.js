(n.d(t, { Ay: () => ec, B0: () => B, BL: () => U, bi: () => er }), n(667532), n(321073));
var i = n(17928),
    l = n(73153),
    s = n(695515),
    r = n(400492),
    u = n(885386),
    o = n(617617),
    d = n(803224),
    a = n(309010),
    c = n(967198),
    f = n(461213),
    _ = n(287809),
    p = n(935208),
    g = n(427262),
    h = n(42766),
    C = n(189714),
    E = n(28480),
    S = n(246338),
    T = n(652215),
    A = n(746080),
    N = n(248675),
    O = n(660183);
let R = "bit_message1",
    k = /<@!?(\d+)>/g,
    w = new Set(["reply", "plan_proposed", "terminal_error"]);
function U(e) {
    return (
        !0 === e.finished ||
        !0 === e.continued ||
        "" !== e.content ||
        null != e.proposal ||
        null != e.clarification ||
        null != e.intake ||
        m(e.steps)
    );
}
let I = new WeakMap();
function m(e) {
    let t = I.get(e);
    return (null == t && ((t = e.some((e) => w.has(e.kind))), I.set(e, t)), t);
}
let q = new Map(),
    v = new Map(),
    H = new Map(),
    y = [],
    J = new Map(),
    D = new Map(),
    P = new Set(),
    b = new Set(),
    x = new Map(),
    M = 0,
    j = [],
    z = 0;
function L(e, t) {
    let {
            ts: n,
            id: i,
            userId: l,
            attachments: s,
            turnId: r,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        u = i ?? `m${++z}`;
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
let F = "turn:";
function G(e) {
    let t = L(e.role, e.content, { ts: e.ts, id: e.id, userId: e.user_id, attachments: e.attachments }),
        n = (function (e) {
            let t = e?.startsWith(F) === !0 ? e.slice(F.length) : e;
            if (null == t || !/^\d+$/.test(t)) return null;
            let n = p.default.extractTimestamp(t);
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
    "context_boundary" === e.kind && (t.finished = !0),
    null != e.context_switch && (t.contextSwitch = e.context_switch),
    null != e.clarification && e.clarification.questions.length > 0 && (t.clarification = e.clarification),
    null != e.restore_proposal && (t.restoreProposal = e.restore_proposal),
    null != e.source_sha && (t.sourceSha = e.source_sha),
    null == e.steps && null == e.events && null != e.todos && e.todos.length > 0 && (t.todos = e.todos),
    null != e.steps
        ? (t.steps = (function (e) {
              let t = [],
                  n = { seenSeq: new Set(), todosAt: -1 };
              for (let i of e) ed(t, n, i);
              return (eo.set(t, n), t);
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
function V(e, t) {
    return e.turn_id === t || e.id === `${F}${t}`;
}
function W(e, t) {
    if (null == t) return -1;
    for (let n = e.length - 1; n >= 0; n--) if (V(e[n], t)) return n;
    return -1;
}
function B(e, t) {
    let n = e[t],
        i = n?.turn_id;
    if (null == n || "assistant" !== n.role || null == i || "" !== n.content || U(n)) return !1;
    for (let n = t - 1; n >= 0; n--) {
        let t = e[n];
        if ("user" === t.role) break;
        if (V(t, i)) return U(t);
    }
    return !1;
}
function $(e, t) {
    let n = W(e, t);
    if (-1 !== n) return n;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (!("assistant" !== n.role || U(n)) && null == n.turn_id) return t;
    }
    return -1;
}
function X(e, t, n) {
    let i = q.get(e);
    if (null == i) return;
    let l = $(i, t);
    if (-1 === l) return void q.set(e, [...i, n(L("assistant", "", null != t ? { turnId: t } : {}))]);
    let s = i[l],
        r = n(null == t || null != s.turn_id || V(s, t) ? s : { ...s, turn_id: t });
    r !== s && q.set(e, Y(i, l, r));
}
function Y(e, t, n) {
    let i = e.slice();
    return ((i[t] = n), i);
}
function K(e) {
    return (
        "side_reply" === e.kind ||
        "publish_notice" === e.kind ||
        "project_event" === e.kind ||
        "context_boundary" === e.kind
    );
}
function Q(e) {
    if (null == e) return !1;
    let t = !1;
    for (let n = e.length - 1; n >= 0; n--) {
        let i = e[n];
        if (!("assistant" !== i.role || K(i)) && ((!t && ((t = !0), !U(i))) || (null != i.turn_id && !U(i)))) return !0;
    }
    return !1;
}
function Z(e) {
    return Q(q.get(e));
}
function ee(e, t, n, i, l) {
    if (null != l) {
        if (l <= (x.get(e) ?? 0)) return;
        x.set(e, l);
    }
    if (
        E.A.areTurnNotificationsDisabled() ||
        f.A.getStatus() === T.clD.DND ||
        u.NO.getSetting() ||
        s.A.isCurrentUserInRestrictedHours() ||
        (0, C.j)(o.A.settings, e)
    )
        return;
    let p = !d.A.isSoundDisabled("message1"),
        N = c.A.getGuildId();
    if (
        null != N &&
        h.Ay.getSelectedProjectId(N) === e &&
        a.Ay.getChannelId() === A.VV.CONJURE &&
        E.A.isWindowFocused()
    ) {
        p && (0, r.Ak)(R, 0.4);
        return;
    }
    let O = t ?? (0, S.oX)("VibegrationsChatStore");
    E.A.presentTurnNotification({
        projectId: e,
        guildId: O,
        title: n,
        body: i.replace(k, (e, t) => {
            let n = _.default.getUser(t);
            return null == n ? e : `@${g.Ay.getName(n)}`;
        }),
        route: null == O ? null : T.BVt.CHANNEL(O, A.VV.CONJURE, e),
        sound: p ? R : void 0,
        volume: 0.4,
    });
}
function et(e) {
    let t = H.get(e) ?? !1,
        n = Z(e);
    if (t === n) return;
    H.set(e, n);
    let i = y.indexOf(e);
    if ((-1 !== i && y.splice(i, 1), y.unshift(e), n)) v.delete(e);
    else {
        let t;
        (null !=
            (t = (function (e) {
                let t = q.get(e);
                if (null == t) return null;
                for (let e = t.length - 1; e >= 0; e--) if ("assistant" === t[e].role && !K(t[e])) return t[e];
                return null;
            })(e)) &&
        ("" !== t.content.trim() ||
            null != t.proposal ||
            null != t.clarification ||
            null != t.intake ||
            t.steps.some((e) => w.has(e.kind) && "terminal_error" !== e.kind))
            ? v.set(e, Date.now())
            : v.delete(e),
            !(function (e) {
                let t = q.get(e);
                if (null != t)
                    for (let n = t.length - 1; n >= 0; n--) {
                        let i = t[n];
                        if ("assistant" === i.role) {
                            if (null != i.finished_at || !U(i)) return;
                            q.set(e, [...t.slice(0, n), { ...i, finished_at: Date.now() }, ...t.slice(n + 1)]);
                            return;
                        }
                    }
            })(e));
    }
}
function en(e) {
    let t = q.delete(e),
        n = el.delete(e),
        i = es.delete(e),
        l = v.delete(e),
        s = H.delete(e),
        r = J.delete(e),
        u = D.delete(e),
        o = P.delete(e),
        d = b.delete(e),
        a = y.indexOf(e);
    return (-1 !== a && y.splice(a, 1), t || n || i || l || s || r || u || o || d || -1 !== a);
}
class ei extends i.Ay.Store {
    initialize() {
        this.waitFor(s.A, d.A, a.Ay, c.A, f.A, o.A, _.default, h.Ay);
    }
    getMessages(e) {
        return q.get(e) ?? j;
    }
    hasPendingSettingsRequest(e) {
        let t = this.getMessages(e),
            n = t[t.length - 1];
        return null != n && "assistant" === n.role && null != n.settingsRequest;
    }
    isThinking(e) {
        return Z(e);
    }
    hasLoadedHistory(e) {
        return el.has(e);
    }
    isHistoryUnavailable(e) {
        return es.has(e);
    }
    getFinishedAt(e) {
        return Z(e) ? null : (v.get(e) ?? null);
    }
    getProjectUsage(e) {
        return J.get(e) ?? null;
    }
    getThinkingActivity(e) {
        return D.get(e) ?? null;
    }
    isCompacting(e) {
        return P.has(e);
    }
    isSaving(e) {
        return b.has(e);
    }
    getSidebarWidth() {
        return M;
    }
    getActivityOrderedProjectIds() {
        return y.slice();
    }
    isAnyThinking() {
        for (let e of q.keys()) if (this.isThinking(e)) return !0;
        return !1;
    }
}
let el = new Map(),
    es = new Set();
function er(e) {
    return el.get(e) ?? null;
}
function eu(e) {
    let t = new Map();
    for (let n of e) null != n.contextSwitch && t.set(n.contextSwitch.id, n.contextSwitch);
    if (0 === t.size) return e;
    let n = new Set();
    return e.flatMap((e) => {
        let i = e.contextSwitch?.id;
        if (null == i) return [e];
        if (n.has(i)) return [];
        n.add(i);
        let l = t.get(i);
        return l?.status === "undone" ? [] : [l === e.contextSwitch ? e : { ...e, contextSwitch: l }];
    });
}
let eo = new WeakMap();
function ed(e, t, n) {
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
function ea(e) {
    return "assistant" === e.role && !K(e) && !U(e) && !0 !== e.stopRequested;
}
let ec = new ei(l.h, {
    LOGOUT: function () {
        if (
            (x.clear(),
            0 === q.size &&
                0 === v.size &&
                0 === H.size &&
                0 === J.size &&
                0 === D.size &&
                0 === P.size &&
                0 === b.size &&
                0 === el.size &&
                0 === es.size &&
                0 === y.length &&
                0 === M)
        )
            return !1;
        (q.clear(),
            v.clear(),
            H.clear(),
            J.clear(),
            D.clear(),
            P.clear(),
            b.clear(),
            el.clear(),
            es.clear(),
            (y.length = 0),
            (M = 0));
    },
    CONJURE_CHAT_HISTORY_SET: function (e) {
        let { projectId: t, entries: n, cursor: i, degraded: l } = e,
            s = el.get(t),
            r = el.has(t) ? (q.get(t) ?? []) : [];
        (el.set(t, i ?? null), !0 === l ? es.add(t) : es.delete(t), D.delete(t), P.delete(t), b.delete(t));
        let u = new Set(),
            o = n.filter((e) => null == e.id || (!u.has(e.id) && (u.add(e.id), !0))).map(G),
            d = null != i && !0 !== l ? o.findIndex((e) => null != e.id) : -1,
            a = -1 === d ? -1 : r.findIndex((e) => e.id === o[d].id);
        (-1 !== a && el.set(t, s ?? null), q.set(t, eu(-1 === a ? o : [...r.slice(0, a), ...o.slice(d)])), et(t));
    },
    CONJURE_CHAT_HISTORY_PREPEND: function (e) {
        let { projectId: t, entries: n, cursor: i } = e;
        if ((el.set(t, i), 0 === n.length)) return;
        let l = q.get(t) ?? [],
            s = n.map(G),
            r = new Set(l.flatMap((e) => (null == e.id ? [] : [e.id]))),
            u = s.filter((e) => null == e.id || !r.has(e.id));
        q.set(t, eu([...u, ...l]));
    },
    CONJURE_CHAT_MESSAGE_APPEND: function (e) {
        let { projectId: t, content: n, id: i, optimisticId: l, userId: s, timestamp: r, attachments: u } = e,
            o = q.get(t) ?? [];
        if (o.some((e) => e.id === i)) return !1;
        let d = L("user", n, { ts: r, id: i, userId: s, attachments: u }),
            a = null == l ? -1 : o.findIndex((e) => e.id === l);
        if (-1 !== a) {
            ((d.render_id = o[a].render_id), q.set(t, [...o.slice(0, a), d, ...o.slice(a + 1)]), et(t));
            return;
        }
        let c = [...o, d];
        (Q(c) || c.push(L("assistant", "")), q.set(t, c), et(t));
    },
    CONJURE_CHAT_MESSAGE_DISPOSITION: function (e) {
        let { projectId: t, id: n, activeTurnId: i, disposition: l } = e,
            s = q.get(t);
        if (null == s) return !1;
        let r = s.findIndex((e) => e.id === n);
        if (-1 === r) return !1;
        let u = "steered" === l ? s.filter((e, t) => t <= r || e.in_reply_to !== n || "queued" !== e.acknowledges) : s,
            o = u[r].disposition === l ? u : [...u.slice(0, r), { ...u[r], disposition: l }, ...u.slice(r + 1)],
            d = "steered" === l ? W(o, i) : -1;
        if ("steered" === l && -1 === d && null != i) {
            let e = $(o, i);
            if (-1 !== e && e < r) {
                let n = { ...o[e], turn_id: i };
                if (0 === n.steps.length) {
                    (q.set(t, [...o.slice(0, e), ...o.slice(e + 1, r + 1), n, ...o.slice(r + 1)]), et(t));
                    return;
                }
                ((o = [...o.slice(0, e), n, ...o.slice(e + 1)]), (d = e));
            }
        }
        if (-1 === d || d > r) return o !== s && void q.set(t, o);
        (q.set(t, [
            ...o.slice(0, d),
            { ...o[d], continued: !0, finished_at: o[d].finished_at ?? Date.now() },
            ...o.slice(d + 1, r + 1),
            L("assistant", "", { turnId: i }),
            ...o.slice(r + 1),
        ]),
            et(t));
    },
    CONJURE_CHAT_MESSAGE_CANCELLED: function (e) {
        let { projectId: t, id: n } = e,
            i = q.get(t);
        if (null == i) return !1;
        let l = i.filter((e) => e.id !== n && e.in_reply_to !== n);
        if (l.length === i.length) return !1;
        q.set(t, l);
    },
    CONJURE_CHAT_SIDE_REPLY: function (e) {
        let { projectId: t, id: n, inReplyTo: i, content: l, timestamp: s } = e,
            r = q.get(t);
        if (null == r || r.some((e) => e.id === n)) return !1;
        let u = L("assistant", l, { ts: s, id: n });
        ((u.kind = "side_reply"), (u.in_reply_to = i));
        let o = r.findIndex((e) => e.id === i);
        if (-1 === o) return void q.set(t, [...r, u]);
        let { disposition: d } = r[o];
        (null != d && (u.acknowledges = d), q.set(t, [...r.slice(0, o + 1), u, ...r.slice(o + 1)]));
    },
    CONJURE_CHAT_PUBLISH_NOTICE: function (e) {
        let { projectId: t, id: n, content: i, timestamp: l, publishNotice: s } = e,
            r = q.get(t);
        if (null == r || r.some((e) => e.id === n)) return !1;
        let u = L("assistant", i, { ts: l, id: n });
        ((u.kind = "publish_notice"), (u.publishNotice = s), (u.finished = !0), q.set(t, [...r, u]));
    },
    CONJURE_CHAT_PROJECT_EVENT: function (e) {
        let { projectId: t, event: n } = e,
            i = q.get(t);
        if (null == i || i.some((e) => e.id === n.id)) return !1;
        let l = L("assistant", "", { ts: n.ts, id: n.id });
        ((l.kind = "project_event"), (l.projectEvent = n), (l.finished = !0), q.set(t, [...i, l]));
    },
    CONJURE_CHAT_CONTEXT_SWITCH: function (e) {
        let { projectId: t, contextSwitch: n } = e,
            i = q.get(t);
        if (null == i) return !1;
        let l = i.findIndex((e) => e.contextSwitch?.id === n.id);
        if ("undone" === n.status) return -1 !== l && void q.set(t, [...i.slice(0, l), ...i.slice(l + 1)]);
        if (-1 !== l) return void q.set(t, Y(i, l, { ...i[l], contextSwitch: n }));
        if ("active" !== n.status && "reverted" !== n.status) return !1;
        let s = L("assistant", "", { ts: n.ts, id: n.id });
        ((s.kind = "context_boundary"), (s.contextSwitch = n), (s.finished = !0));
        let r = "reverted" === n.status ? -1 : i.findIndex((e) => "user" === e.role && e.id === n.message_id);
        -1 === r ? q.set(t, [...i, s]) : q.set(t, [...i.slice(0, r), s, ...i.slice(r)]);
    },
    CONJURE_CHAT_STEP_APPEND: function (e) {
        let { projectId: t, step: n, turnId: i } = e;
        if ("preview_ready" === n.kind && null == i && !Z(t)) return !1;
        let l = q.get(t);
        if (
            (X(t, i, (e) => {
                let t = (function (e, t) {
                    let n = (function (e) {
                        let t = eo.get(e);
                        if (null != t) return t;
                        let n = new Set(),
                            i = -1;
                        for (let [t, l] of e.entries())
                            (null != l.turn_seq && n.add(l.turn_seq),
                                -1 === i && "todos" === l.kind && null == l.task_id && (i = t));
                        let l = { seenSeq: n, todosAt: i };
                        return (eo.set(e, l), l);
                    })(e);
                    if (null != t.turn_seq && n.seenSeq.has(t.turn_seq)) return e;
                    let i = e.slice();
                    return (eo.delete(e), ed(i, n, t), eo.set(i, n), I.set(i, m(e) || w.has(t.kind)), i);
                })(e.steps, n);
                return t === e.steps ? e : { ...e, steps: t };
            }),
            q.get(t) === l)
        )
            return !1;
        et(t);
    },
    CONJURE_CHAT_TURN_FINISHED: function (e) {
        let { projectId: t, summary: n, turnId: i } = e,
            l = q.get(t);
        (null != l &&
            l.some((e) => null != e.disposition) &&
            q.set(
                t,
                l.map((e) => {
                    if (null == e.disposition) return e;
                    let { disposition: t, ...n } = e;
                    return n;
                }),
            ),
            X(t, i, (e) => ({
                ...e,
                finished: !0,
                finished_at: Date.now(),
                provisionalTodo: void 0,
                content: "" !== e.content ? e.content : (n ?? ""),
            })),
            Z(t) || (D.delete(t), P.delete(t)),
            b.delete(t),
            et(t));
    },
    CONJURE_CHAT_INTERRUPTED: function (e) {
        let { projectId: t } = e,
            n = q.get(t);
        if (null == n) return !1;
        let i = L("assistant", "");
        ((i.finished = !0), (i.finished_at = Date.now()), (i.interrupted = !0), q.set(t, [...n, i]));
    },
    CONJURE_CHAT_STOP_REQUESTED: function (e) {
        let { projectId: t } = e,
            n = q.get(t);
        if (null == n || !n.some(ea)) return !1;
        q.set(
            t,
            n.map((e) => (ea(e) ? { ...e, stopRequested: !0 } : e)),
        );
    },
    CONJURE_CHAT_PROVISIONAL_TODO: function (e) {
        let { projectId: t, turnId: n, text: i } = e;
        if (
            !(function (e, t, n) {
                let i = q.get(e);
                if (null == i) return !1;
                let l = W(i, t);
                return -1 !== l && (q.set(e, Y(i, l, n(i[l]))), !0);
            })(t, n, (e) => ({ ...e, provisionalTodo: i }))
        )
            return !1;
    },
    CONJURE_CHAT_SOURCE_CHECKPOINT: function (e) {
        let { projectId: t, turnId: n, sourceSha: i } = e,
            l = q.get(t);
        if (null == l) return !1;
        let s = l.map((e) => ("assistant" === e.role && e.sourceSha !== i && V(e, n) ? { ...e, sourceSha: i } : e));
        if (s.every((e, t) => e === l[t])) return !1;
        q.set(t, s);
    },
    CONJURE_CHAT_THINKING_SET: function (e) {
        let { projectId: t, activity: n } = e;
        if (null == n) return !!D.delete(t) && void 0;
        let i = D.get(t);
        if (null != i && n.session === i.session && n.seq <= i.seq) return !1;
        D.set(t, n);
    },
    CONJURE_CHAT_COMPACTING_SET: function (e) {
        let { projectId: t, compacting: n } = e;
        if (n === P.has(t)) return !1;
        n ? P.add(t) : P.delete(t);
    },
    CONJURE_CHAT_SAVING_SET: function (e) {
        let { projectId: t, saving: n } = e;
        if (n === b.has(t)) return !1;
        n ? b.add(t) : b.delete(t);
    },
    CONJURE_CHAT_USAGE_SET: function (e) {
        let { projectId: t, project: n } = e;
        J.set(t, n);
    },
    CONJURE_CHAT_SIDEBAR_WIDTH_SET: function (e) {
        let { width: t } = e;
        if (M === t) return !1;
        M = t;
    },
    CONJURE_CHAT_TURN_PATCH: function (e) {
        let { projectId: t, patch: n, turnId: i } = e;
        (X(t, i, (e) => {
            let t = { ...e, ...n };
            return ("todos" in n && (t.provisionalTodo = void 0), t);
        }),
            et(t));
    },
    CONJURE_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("closed" !== n && "failed" !== n) return !1;
        let i = P.delete(t),
            l = b.delete(t),
            s = D.delete(t),
            r = q.get(t);
        if (null == r || !r.some((e) => "assistant" === e.role && !U(e))) return (!!s || !!i || !!l) && void 0;
        (q.set(
            t,
            r.map((e) => {
                if (null != e.disposition) {
                    let { disposition: t, ...n } = e;
                    return n;
                }
                return "assistant" !== e.role || U(e)
                    ? e
                    : {
                          ...e,
                          provisionalTodo: void 0,
                          steps: [
                              ...e.steps,
                              { type: "step", kind: "terminal_error", message: O.intl.string(N.default.lmiuFX) },
                          ],
                      };
            }),
        ),
            et(t));
    },
    CONJURE_PROJECT_CREATE_SUCCESS: function (e) {
        let { project: t } = e;
        if (el.has(t.id)) return !1;
        el.set(t.id, null);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!en(t)) return !1;
    },
    CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = new Set([...q.keys(), ...el.keys(), ...v.keys(), ...H.keys(), ...J.keys()]),
            n = !1;
        for (let e of t) null == h.Ay.getProject(e) && en(e) && (n = !0);
        if (!n) return !1;
    },
    CONJURE_TURN_SETTLED: function (e) {
        let { projectId: t, guildId: n, title: i, body: l, nonce: s } = e;
        return (ee(t, n, i, l, s), !1);
    },
    CONJURE_TURN_NOTIFICATION: function (e) {
        let { projectId: t, body: n, nonce: i } = e,
            l = h.Ay.getProject(t);
        return (null != l && ee(t, l.guild_id ?? l.preview_guild_id ?? null, l.name, n, i), !1);
    },
});
