(n.d(t, { Ay: () => es, B0: () => F, BL: () => O, bi: () => ee }), n(667532), n(321073));
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
    _ = n(935208),
    p = n(260498),
    g = n(189714),
    h = n(89505),
    E = n(246338),
    C = n(652215),
    T = n(746080),
    A = n(261425),
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
        e.steps.some((e) => R.has(e.kind))
    );
}
let U = new Map(),
    k = new Map(),
    m = new Map(),
    I = [],
    v = new Map(),
    H = new Map(),
    w = new Set(),
    q = new Set(),
    J = new Map(),
    y = 0,
    P = [],
    D = 0;
function b(e, t) {
    let {
            ts: n,
            id: i,
            userId: l,
            attachments: s,
            turnId: r,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        u = i ?? `m${++D}`;
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
let j = "turn:";
function M(e) {
    let t = b(e.role, e.content, { ts: e.ts, id: e.id, userId: e.user_id, attachments: e.attachments }),
        n = (function (e) {
            let t = e?.startsWith(j) === !0 ? e.slice(j.length) : e;
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
              let t = en();
              for (let n of e) ei(t, n);
              return t.steps;
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
function z(e, t) {
    return e.turn_id === t || e.id === `${j}${t}`;
}
function x(e, t) {
    if (null == t) return -1;
    for (let n = e.length - 1; n >= 0; n--) if (z(e[n], t)) return n;
    return -1;
}
function F(e, t) {
    let n = e[t],
        i = n?.turn_id;
    if (null == n || "assistant" !== n.role || null == i || "" !== n.content || O(n)) return !1;
    for (let n = t - 1; n >= 0; n--) {
        let t = e[n];
        if ("user" === t.role) break;
        if (z(t, i)) return O(t);
    }
    return !1;
}
function G(e, t) {
    let n = x(e, t);
    if (-1 !== n) return n;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (!("assistant" !== n.role || O(n)) && null == n.turn_id) return t;
    }
    return -1;
}
function L(e, t, n) {
    let i = U.get(e);
    if (null == i) return;
    let l = G(i, t);
    if (-1 === l) return void U.set(e, [...i, n(b("assistant", "", null != t ? { turnId: t } : {}))]);
    let s = i[l],
        r = null == t || null != s.turn_id || z(s, t) ? s : { ...s, turn_id: t };
    U.set(e, [...i.slice(0, l), n(r), ...i.slice(l + 1)]);
}
function V(e) {
    return "side_reply" === e.kind || "publish_notice" === e.kind || "project_event" === e.kind;
}
function B(e) {
    if (null == e) return !1;
    let t = !1;
    for (let n = e.length - 1; n >= 0; n--) {
        let i = e[n];
        if (!("assistant" !== i.role || V(i)) && ((!t && ((t = !0), !O(i))) || (null != i.turn_id && !O(i)))) return !0;
    }
    return !1;
}
function $(e) {
    return B(U.get(e));
}
function W(e, t, n, i, l) {
    if (null != l) {
        if (l <= (J.get(e) ?? 0)) return;
        J.set(e, l);
    }
    if (
        h.A.areTurnNotificationsDisabled() ||
        f.A.getStatus() === C.clD.DND ||
        u.NO.getSetting() ||
        s.A.isCurrentUserInRestrictedHours() ||
        (0, g.j)(o.A.settings, e)
    )
        return;
    let _ = !d.A.isSoundDisabled("message1"),
        A = c.A.getGuildId();
    if (
        null != A &&
        p.Ay.getSelectedProjectId(A) === e &&
        a.Ay.getChannelId() === T.VV.CONJURE &&
        h.A.isWindowFocused()
    ) {
        _ && (0, r.Ak)(N, 0.4);
        return;
    }
    let S = t ?? (0, E.oX)("VibegrationsChatStore");
    h.A.presentTurnNotification({
        projectId: e,
        guildId: S,
        title: n,
        body: i,
        route: null == S ? null : C.BVt.CHANNEL(S, T.VV.CONJURE, e),
        sound: _ ? N : void 0,
        volume: 0.4,
    });
}
function Y(e) {
    let t = m.get(e) ?? !1,
        n = $(e);
    if (t === n) return;
    m.set(e, n);
    let i = I.indexOf(e);
    if ((-1 !== i && I.splice(i, 1), I.unshift(e), n)) k.delete(e);
    else {
        let t;
        (null !=
            (t = (function (e) {
                let t = U.get(e);
                if (null == t) return null;
                for (let e = t.length - 1; e >= 0; e--) if ("assistant" === t[e].role && !V(t[e])) return t[e];
                return null;
            })(e)) &&
        ("" !== t.content.trim() ||
            null != t.proposal ||
            null != t.clarification ||
            null != t.intake ||
            t.steps.some((e) => R.has(e.kind) && "terminal_error" !== e.kind))
            ? k.set(e, Date.now())
            : k.delete(e),
            !(function (e) {
                let t = U.get(e);
                if (null != t)
                    for (let n = t.length - 1; n >= 0; n--) {
                        let i = t[n];
                        if ("assistant" === i.role) {
                            if (null != i.finished_at || !O(i)) return;
                            U.set(e, [...t.slice(0, n), { ...i, finished_at: Date.now() }, ...t.slice(n + 1)]);
                            return;
                        }
                    }
            })(e));
    }
}
function K(e) {
    let t = U.delete(e),
        n = X.delete(e),
        i = Z.delete(e),
        l = k.delete(e),
        s = m.delete(e),
        r = v.delete(e),
        u = H.delete(e),
        o = w.delete(e),
        d = q.delete(e),
        a = I.indexOf(e);
    return (-1 !== a && I.splice(a, 1), t || n || i || l || s || r || u || o || d || -1 !== a);
}
class Q extends i.Ay.Store {
    initialize() {
        this.waitFor(s.A, d.A, a.Ay, c.A, f.A, o.A, p.Ay);
    }
    getMessages(e) {
        return U.get(e) ?? P;
    }
    hasPendingSettingsRequest(e) {
        let t = this.getMessages(e),
            n = t[t.length - 1];
        return null != n && "assistant" === n.role && null != n.settingsRequest;
    }
    isThinking(e) {
        return $(e);
    }
    hasLoadedHistory(e) {
        return X.has(e);
    }
    isHistoryUnavailable(e) {
        return Z.has(e);
    }
    getFinishedAt(e) {
        return $(e) ? null : (k.get(e) ?? null);
    }
    getProjectUsage(e) {
        return v.get(e) ?? null;
    }
    getThinkingActivity(e) {
        return H.get(e) ?? null;
    }
    isCompacting(e) {
        return w.has(e);
    }
    isSaving(e) {
        return q.has(e);
    }
    getSidebarWidth() {
        return y;
    }
    getActivityOrderedProjectIds() {
        return I.slice();
    }
    isAnyThinking() {
        for (let e of U.keys()) if (this.isThinking(e)) return !0;
        return !1;
    }
}
let X = new Map(),
    Z = new Set();
function ee(e) {
    return X.get(e) ?? null;
}
function et(e) {
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
function en() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = new Set(),
        n = -1;
    for (let [i, l] of e.entries())
        (null != l.turn_seq && t.add(l.turn_seq), -1 === n && "todos" === l.kind && null == l.task_id && (n = i));
    return { steps: [...e], seenSeq: t, todosAt: n };
}
function ei(e, t) {
    if (null != t.turn_seq && e.seenSeq.has(t.turn_seq)) return;
    if ("todos" !== t.kind || null != t.task_id) {
        (e.steps.push(t), null != t.turn_seq && e.seenSeq.add(t.turn_seq));
        return;
    }
    if (-1 === e.todosAt) {
        ((e.todosAt = e.steps.length), e.steps.push(t), null != t.turn_seq && e.seenSeq.add(t.turn_seq));
        return;
    }
    let n = e.steps[e.todosAt];
    (null != n.turn_seq && e.seenSeq.delete(n.turn_seq),
        (e.steps[e.todosAt] = t),
        null != t.turn_seq && e.seenSeq.add(t.turn_seq));
}
function el(e) {
    return "assistant" === e.role && !V(e) && !O(e) && !0 !== e.stopRequested;
}
let es = new Q(l.h, {
    LOGOUT: function () {
        if (
            (J.clear(),
            0 === U.size &&
                0 === k.size &&
                0 === m.size &&
                0 === v.size &&
                0 === H.size &&
                0 === w.size &&
                0 === q.size &&
                0 === X.size &&
                0 === Z.size &&
                0 === I.length &&
                0 === y)
        )
            return !1;
        (U.clear(),
            k.clear(),
            m.clear(),
            v.clear(),
            H.clear(),
            w.clear(),
            q.clear(),
            X.clear(),
            Z.clear(),
            (I.length = 0),
            (y = 0));
    },
    CONJURE_CHAT_HISTORY_SET: function (e) {
        let { projectId: t, entries: n, cursor: i, degraded: l } = e,
            s = X.get(t),
            r = X.has(t) ? (U.get(t) ?? []) : [];
        (X.set(t, i ?? null), !0 === l ? Z.add(t) : Z.delete(t), H.delete(t), w.delete(t), q.delete(t));
        let u = new Set(),
            o = n.filter((e) => null == e.id || (!u.has(e.id) && (u.add(e.id), !0))).map(M),
            d = null != i && !0 !== l ? o.findIndex((e) => null != e.id) : -1,
            a = -1 === d ? -1 : r.findIndex((e) => e.id === o[d].id);
        (-1 !== a && X.set(t, s ?? null), U.set(t, et(-1 === a ? o : [...r.slice(0, a), ...o.slice(d)])), Y(t));
    },
    CONJURE_CHAT_HISTORY_PREPEND: function (e) {
        let { projectId: t, entries: n, cursor: i } = e;
        if ((X.set(t, i), 0 === n.length)) return;
        let l = U.get(t) ?? [],
            s = n.map(M),
            r = new Set(l.flatMap((e) => (null == e.id ? [] : [e.id]))),
            u = s.filter((e) => null == e.id || !r.has(e.id));
        U.set(t, et([...u, ...l]));
    },
    CONJURE_CHAT_MESSAGE_APPEND: function (e) {
        let { projectId: t, content: n, id: i, optimisticId: l, userId: s, timestamp: r, attachments: u } = e,
            o = U.get(t) ?? [];
        if (o.some((e) => e.id === i)) return !1;
        let d = b("user", n, { ts: r, id: i, userId: s, attachments: u }),
            a = null == l ? -1 : o.findIndex((e) => e.id === l);
        if (-1 !== a) {
            ((d.render_id = o[a].render_id), U.set(t, [...o.slice(0, a), d, ...o.slice(a + 1)]), Y(t));
            return;
        }
        let c = [...o, d];
        (B(c) || c.push(b("assistant", "")), U.set(t, c), Y(t));
    },
    CONJURE_CHAT_MESSAGE_DISPOSITION: function (e) {
        let { projectId: t, id: n, activeTurnId: i, disposition: l } = e,
            s = U.get(t);
        if (null == s) return !1;
        let r = s.findIndex((e) => e.id === n);
        if (-1 === r) return !1;
        let u = s[r].disposition === l ? s : [...s.slice(0, r), { ...s[r], disposition: l }, ...s.slice(r + 1)],
            o = "steered" === l ? x(u, i) : -1;
        if ("steered" === l && -1 === o && null != i) {
            let e = G(u, i);
            if (-1 !== e && e < r) {
                let n = { ...u[e], turn_id: i };
                if (0 === n.steps.length) {
                    (U.set(t, [...u.slice(0, e), ...u.slice(e + 1, r + 1), n, ...u.slice(r + 1)]), Y(t));
                    return;
                }
                ((u = [...u.slice(0, e), n, ...u.slice(e + 1)]), (o = e));
            }
        }
        if (-1 === o || o > r) return u !== s && void U.set(t, u);
        (U.set(t, [
            ...u.slice(0, o),
            { ...u[o], continued: !0, finished_at: u[o].finished_at ?? Date.now() },
            ...u.slice(o + 1, r + 1),
            b("assistant", "", { turnId: i }),
            ...u.slice(r + 1),
        ]),
            Y(t));
    },
    CONJURE_CHAT_MESSAGE_REACTION: function (e) {
        let { projectId: t, id: n, emoji: i } = e,
            l = U.get(t);
        if (null == l) return !1;
        let s = l.findIndex((e) => "user" === e.role && e.id === n);
        if (-1 === s || l[s].agentReaction === i) return !1;
        U.set(t, [...l.slice(0, s), { ...l[s], agentReaction: i }, ...l.slice(s + 1)]);
    },
    CONJURE_CHAT_SIDE_REPLY: function (e) {
        let { projectId: t, id: n, inReplyTo: i, content: l, timestamp: s } = e,
            r = U.get(t);
        if (null == r || r.some((e) => e.id === n)) return !1;
        let u = b("assistant", l, { ts: s, id: n });
        ((u.kind = "side_reply"), (u.in_reply_to = i));
        let o = r.findIndex((e) => e.id === i);
        if (-1 === o) return void U.set(t, [...r, u]);
        let { disposition: d, ...a } = r[o];
        (null != d && (u.acknowledges = d), U.set(t, [...r.slice(0, o), a, u, ...r.slice(o + 1)]));
    },
    CONJURE_CHAT_PUBLISH_NOTICE: function (e) {
        let { projectId: t, id: n, content: i, timestamp: l, publishNotice: s } = e,
            r = U.get(t);
        if (null == r || r.some((e) => e.id === n)) return !1;
        let u = b("assistant", i, { ts: l, id: n });
        ((u.kind = "publish_notice"), (u.publishNotice = s), (u.finished = !0), U.set(t, [...r, u]));
    },
    CONJURE_CHAT_PROJECT_EVENT: function (e) {
        let { projectId: t, event: n } = e,
            i = U.get(t);
        if (null == i || i.some((e) => e.id === n.id)) return !1;
        let l = b("assistant", "", { ts: n.ts, id: n.id });
        ((l.kind = "project_event"), (l.projectEvent = n), (l.finished = !0), U.set(t, [...i, l]));
    },
    CONJURE_CHAT_STEP_APPEND: function (e) {
        let { projectId: t, step: n, turnId: i } = e;
        if ("preview_ready" === n.kind && null == i && !$(t)) return !1;
        (L(t, i, (e) => {
            var t;
            let i;
            return { ...e, steps: ((t = e.steps), ei((i = en(t)), n), i.steps) };
        }),
            Y(t));
    },
    CONJURE_CHAT_TURN_FINISHED: function (e) {
        let { projectId: t, summary: n, turnId: i } = e,
            l = U.get(t);
        (null != l &&
            l.some((e) => null != e.disposition) &&
            U.set(
                t,
                l.map((e) => {
                    if (null == e.disposition) return e;
                    let { disposition: t, ...n } = e;
                    return n;
                }),
            ),
            L(t, i, (e) => ({
                ...e,
                finished: !0,
                finished_at: Date.now(),
                provisionalTodo: void 0,
                content: "" !== e.content ? e.content : (n ?? ""),
            })),
            $(t) || (H.delete(t), w.delete(t)),
            q.delete(t),
            Y(t));
    },
    CONJURE_CHAT_INTERRUPTED: function (e) {
        let { projectId: t } = e,
            n = U.get(t);
        if (null == n) return !1;
        let i = b("assistant", "");
        ((i.finished = !0), (i.finished_at = Date.now()), (i.interrupted = !0), U.set(t, [...n, i]));
    },
    CONJURE_CHAT_STOP_REQUESTED: function (e) {
        let { projectId: t } = e,
            n = U.get(t);
        if (null == n || !n.some(el)) return !1;
        U.set(
            t,
            n.map((e) => (el(e) ? { ...e, stopRequested: !0 } : e)),
        );
    },
    CONJURE_CHAT_PROVISIONAL_TODO: function (e) {
        let { projectId: t, turnId: n, text: i } = e;
        if (
            !(function (e, t, n) {
                let i = U.get(e);
                if (null == i) return !1;
                let l = x(i, t);
                return -1 !== l && (U.set(e, [...i.slice(0, l), n(i[l]), ...i.slice(l + 1)]), !0);
            })(t, n, (e) => ({ ...e, provisionalTodo: i }))
        )
            return !1;
    },
    CONJURE_CHAT_SOURCE_CHECKPOINT: function (e) {
        let { projectId: t, turnId: n, sourceSha: i } = e,
            l = U.get(t);
        if (null == l) return !1;
        let s = l.map((e) => ("assistant" === e.role && e.sourceSha !== i && z(e, n) ? { ...e, sourceSha: i } : e));
        if (s.every((e, t) => e === l[t])) return !1;
        U.set(t, s);
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
        if (n === w.has(t)) return !1;
        n ? w.add(t) : w.delete(t);
    },
    CONJURE_CHAT_SAVING_SET: function (e) {
        let { projectId: t, saving: n } = e;
        if (n === q.has(t)) return !1;
        n ? q.add(t) : q.delete(t);
    },
    CONJURE_CHAT_USAGE_SET: function (e) {
        let { projectId: t, project: n } = e;
        v.set(t, n);
    },
    CONJURE_CHAT_SIDEBAR_WIDTH_SET: function (e) {
        let { width: t } = e;
        if (y === t) return !1;
        y = t;
    },
    CONJURE_CHAT_TURN_PATCH: function (e) {
        let { projectId: t, patch: n, turnId: i } = e;
        (L(t, i, (e) => {
            let t = { ...e, ...n };
            return ("todos" in n && (t.provisionalTodo = void 0), t);
        }),
            Y(t));
    },
    CONJURE_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("closed" !== n && "failed" !== n) return !1;
        let i = w.delete(t),
            l = q.delete(t),
            s = H.delete(t),
            r = U.get(t);
        if (null == r || !r.some((e) => "assistant" === e.role && !O(e))) return (!!s || !!i || !!l) && void 0;
        (U.set(
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
            Y(t));
    },
    CONJURE_PROJECT_CREATE_SUCCESS: function (e) {
        let { project: t } = e;
        if (X.has(t.id)) return !1;
        X.set(t.id, null);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!K(t)) return !1;
    },
    CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = new Set([...U.keys(), ...X.keys(), ...k.keys(), ...m.keys(), ...v.keys()]),
            n = !1;
        for (let e of t) null == p.Ay.getProject(e) && K(e) && (n = !0);
        if (!n) return !1;
    },
    CONJURE_TURN_SETTLED: function (e) {
        let { projectId: t, guildId: n, title: i, body: l, nonce: s } = e;
        return (W(t, n, i, l, s), !1);
    },
    CONJURE_TURN_NOTIFICATION: function (e) {
        let { projectId: t, body: n, nonce: i } = e,
            l = p.Ay.getProject(t);
        return (null != l && W(t, l.guild_id ?? l.preview_guild_id ?? null, l.name, n, i), !1);
    },
});
