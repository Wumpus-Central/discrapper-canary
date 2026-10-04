(n.d(t, { Ay: () => er, B0: () => U, BL: () => y, bi: () => Q }), n(667532), n(321073));
var i = n(17928),
    r = n(73153),
    l = n(695515),
    a = n(400492),
    o = n(885386),
    s = n(617617),
    u = n(803224),
    d = n(309010),
    c = n(967198),
    f = n(461213),
    h = n(935208),
    p = n(488671),
    g = n(870440),
    _ = n(911947),
    m = n(26278),
    w = n(652215),
    E = n(746080),
    I = n(248675),
    A = n(375708);
let T = "bit_message1",
    v = new Set(["reply", "plan_proposed", "terminal_error"]);
function y(e) {
    return (
        !0 === e.finished ||
        !0 === e.continued ||
        "" !== e.content ||
        null != e.proposal ||
        null != e.clarification ||
        null != e.intake ||
        e.steps.some((e) => v.has(e.kind))
    );
}
let b = new Map(),
    R = new Map(),
    S = new Map(),
    O = [],
    C = new Map(),
    N = new Map(),
    x = new Set(),
    P = new Map(),
    k = 0,
    M = [],
    j = 0;
function D(e, t) {
    let {
            ts: n,
            id: i,
            userId: r,
            attachments: l,
            turnId: a,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        o = i ?? `m${++j}`;
    return {
        id: o,
        render_id: o,
        role: e,
        content: t,
        ...(null != r ? { user_id: r } : {}),
        ...(null != a ? { turn_id: a } : {}),
        steps: [],
        created_at: null != n ? Date.parse(n) : Date.now(),
        attachments: l,
    };
}
let B = "turn:";
function G(e) {
    let t = D(e.role, e.content, { ts: e.ts, id: e.id, userId: e.user_id, attachments: e.attachments }),
        n = (function (e) {
            let t = e?.startsWith(B) === !0 ? e.slice(B.length) : e;
            if (null == t || !/^\d+$/.test(t)) return null;
            let n = h.default.extractTimestamp(t);
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
    null != e.clarification && e.clarification.questions.length > 0 && (t.clarification = e.clarification),
    null != e.restore_proposal && (t.restoreProposal = e.restore_proposal),
    null != e.source_sha && (t.sourceSha = e.source_sha),
    null == e.steps && null == e.events && null != e.todos && e.todos.length > 0 && (t.todos = e.todos),
    null != e.steps
        ? (t.steps = (function (e) {
              let t = et();
              for (let n of e) en(t, n);
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
function L(e, t) {
    return e.turn_id === t || e.id === `${B}${t}`;
}
function W(e, t) {
    if (null == t) return -1;
    for (let n = e.length - 1; n >= 0; n--) if (L(e[n], t)) return n;
    return -1;
}
function U(e, t) {
    let n = e[t],
        i = n?.turn_id;
    if (null == n || "assistant" !== n.role || null == i || "" !== n.content || y(n)) return !1;
    for (let n = t - 1; n >= 0; n--) {
        let t = e[n];
        if ("user" === t.role) break;
        if (L(t, i)) return y(t);
    }
    return !1;
}
function V(e, t) {
    let n = W(e, t);
    if (-1 !== n) return n;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (!("assistant" !== n.role || y(n)) && null == n.turn_id) return t;
    }
    return -1;
}
function F(e, t, n) {
    let i = b.get(e);
    if (null == i) return;
    let r = V(i, t);
    if (-1 === r) return void b.set(e, [...i, n(D("assistant", "", null != t ? { turnId: t } : {}))]);
    let l = i[r],
        a = null == t || null != l.turn_id || L(l, t) ? l : { ...l, turn_id: t };
    b.set(e, [...i.slice(0, r), n(a), ...i.slice(r + 1)]);
}
function H(e) {
    return "side_reply" === e.kind || "publish_notice" === e.kind;
}
function q(e) {
    if (null == e) return !1;
    let t = !1;
    for (let n = e.length - 1; n >= 0; n--) {
        let i = e[n];
        if (!("assistant" !== i.role || H(i)) && ((!t && ((t = !0), !y(i))) || (null != i.turn_id && !y(i)))) return !0;
    }
    return !1;
}
function J(e) {
    return q(b.get(e));
}
function $(e, t, n, i, r) {
    if (null != r) {
        if (r <= (P.get(e) ?? 0)) return;
        P.set(e, r);
    }
    if (
        p.A.areTurnNotificationsDisabled() ||
        f.A.getStatus() === w.clD.DND ||
        o.NO.getSetting() ||
        l.A.isCurrentUserInRestrictedHours() ||
        (0, _.cI)(s.A.settings, e)
    )
        return;
    let h = !u.A.isSoundDisabled("message1"),
        I = c.A.getGuildId();
    if (
        null != I &&
        m.Ay.getSelectedProjectId(I) === e &&
        d.Ay.getChannelId() === E.VV.VIBEGRATIONS &&
        p.A.isWindowFocused()
    ) {
        h && (0, a.Ak)(T, 0.4);
        return;
    }
    let A = t ?? (0, g.$X)("VibegrationsChatStore");
    p.A.presentTurnNotification({
        projectId: e,
        guildId: A,
        title: n,
        body: i,
        route: null == A ? null : w.BVt.CHANNEL(A, E.VV.VIBEGRATIONS, e),
        sound: h ? T : void 0,
        volume: 0.4,
    });
}
function z(e) {
    let t = S.get(e) ?? !1,
        n = J(e);
    if (t === n) return;
    S.set(e, n);
    let i = O.indexOf(e);
    if ((-1 !== i && O.splice(i, 1), O.unshift(e), n)) R.delete(e);
    else {
        let t;
        (null !=
            (t = (function (e) {
                let t = b.get(e);
                if (null == t) return null;
                for (let e = t.length - 1; e >= 0; e--) if ("assistant" === t[e].role && !H(t[e])) return t[e];
                return null;
            })(e)) &&
        ("" !== t.content.trim() ||
            null != t.proposal ||
            null != t.clarification ||
            null != t.intake ||
            t.steps.some((e) => v.has(e.kind) && "terminal_error" !== e.kind))
            ? R.set(e, Date.now())
            : R.delete(e),
            !(function (e) {
                let t = b.get(e);
                if (null != t)
                    for (let n = t.length - 1; n >= 0; n--) {
                        let i = t[n];
                        if ("assistant" === i.role) {
                            if (null != i.finished_at || !y(i)) return;
                            b.set(e, [...t.slice(0, n), { ...i, finished_at: Date.now() }, ...t.slice(n + 1)]);
                            return;
                        }
                    }
            })(e));
    }
}
function K(e) {
    let t = b.delete(e),
        n = X.delete(e),
        i = Y.delete(e),
        r = R.delete(e),
        l = S.delete(e),
        a = C.delete(e),
        o = N.delete(e),
        s = x.delete(e),
        u = O.indexOf(e);
    return (-1 !== u && O.splice(u, 1), t || n || i || r || l || a || o || s || -1 !== u);
}
class Z extends i.Ay.Store {
    initialize() {
        this.waitFor(l.A, u.A, d.Ay, c.A, f.A, s.A, m.Ay);
    }
    getMessages(e) {
        return b.get(e) ?? M;
    }
    hasPendingSettingsRequest(e) {
        let t = this.getMessages(e),
            n = t[t.length - 1];
        return null != n && "assistant" === n.role && null != n.settingsRequest;
    }
    isThinking(e) {
        return J(e);
    }
    hasLoadedHistory(e) {
        return X.has(e);
    }
    isHistoryUnavailable(e) {
        return Y.has(e);
    }
    getFinishedAt(e) {
        return J(e) ? null : (R.get(e) ?? null);
    }
    getProjectUsage(e) {
        return C.get(e) ?? null;
    }
    getThinkingActivity(e) {
        return N.get(e) ?? null;
    }
    isCompacting(e) {
        return x.has(e);
    }
    getSidebarWidth() {
        return k;
    }
    getActivityOrderedProjectIds() {
        return O.slice();
    }
    isAnyThinking() {
        for (let e of b.keys()) if (this.isThinking(e)) return !0;
        return !1;
    }
}
let X = new Map(),
    Y = new Set();
function Q(e) {
    return X.get(e) ?? null;
}
function ee(e) {
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
function et() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = new Set(),
        n = -1;
    for (let [i, r] of e.entries())
        (null != r.turn_seq && t.add(r.turn_seq), -1 === n && "todos" === r.kind && null == r.task_id && (n = i));
    return { steps: [...e], seenSeq: t, todosAt: n };
}
function en(e, t) {
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
function ei(e) {
    return "assistant" === e.role && !H(e) && !y(e) && !0 !== e.stopRequested;
}
let er = new Z(r.h, {
    LOGOUT: function () {
        if (
            (P.clear(),
            0 === b.size &&
                0 === R.size &&
                0 === S.size &&
                0 === C.size &&
                0 === N.size &&
                0 === x.size &&
                0 === X.size &&
                0 === Y.size &&
                0 === O.length &&
                0 === k)
        )
            return !1;
        (b.clear(),
            R.clear(),
            S.clear(),
            C.clear(),
            N.clear(),
            x.clear(),
            X.clear(),
            Y.clear(),
            (O.length = 0),
            (k = 0));
    },
    VIBEGRATIONS_CHAT_HISTORY_SET: function (e) {
        let { projectId: t, entries: n, cursor: i, degraded: r } = e;
        (X.set(t, i ?? null), !0 === r ? Y.add(t) : Y.delete(t), N.delete(t), x.delete(t));
        let l = new Set(),
            a = n.filter((e) => null == e.id || (!l.has(e.id) && (l.add(e.id), !0)));
        (b.set(t, ee(a.map(G))), z(t));
    },
    VIBEGRATIONS_CHAT_HISTORY_PREPEND: function (e) {
        let { projectId: t, entries: n, cursor: i } = e;
        if ((X.set(t, i), 0 === n.length)) return;
        let r = b.get(t) ?? [],
            l = n.map(G),
            a = new Set(r.flatMap((e) => (null == e.id ? [] : [e.id]))),
            o = l.filter((e) => null == e.id || !a.has(e.id));
        b.set(t, ee([...o, ...r]));
    },
    VIBEGRATIONS_CHAT_MESSAGE_APPEND: function (e) {
        let { projectId: t, content: n, id: i, optimisticId: r, userId: l, timestamp: a, attachments: o } = e,
            s = b.get(t) ?? [];
        if (s.some((e) => e.id === i)) return !1;
        let u = D("user", n, { ts: a, id: i, userId: l, attachments: o }),
            d = null == r ? -1 : s.findIndex((e) => e.id === r);
        if (-1 !== d) {
            ((u.render_id = s[d].render_id), b.set(t, [...s.slice(0, d), u, ...s.slice(d + 1)]), z(t));
            return;
        }
        let c = [...s, u];
        (q(c) || c.push(D("assistant", "")), b.set(t, c), z(t));
    },
    VIBEGRATIONS_CHAT_MESSAGE_DISPOSITION: function (e) {
        let { projectId: t, id: n, activeTurnId: i, disposition: r } = e,
            l = b.get(t);
        if (null == l) return !1;
        let a = l.findIndex((e) => e.id === n);
        if (-1 === a) return !1;
        let o = l[a].disposition === r ? l : [...l.slice(0, a), { ...l[a], disposition: r }, ...l.slice(a + 1)],
            s = "steered" === r ? W(o, i) : -1;
        if ("steered" === r && -1 === s && null != i) {
            let e = V(o, i);
            if (-1 !== e && e < a) {
                let n = { ...o[e], turn_id: i };
                if (0 === n.steps.length) {
                    (b.set(t, [...o.slice(0, e), ...o.slice(e + 1, a + 1), n, ...o.slice(a + 1)]), z(t));
                    return;
                }
                ((o = [...o.slice(0, e), n, ...o.slice(e + 1)]), (s = e));
            }
        }
        if (-1 === s || s > a) return o !== l && void b.set(t, o);
        (b.set(t, [
            ...o.slice(0, s),
            { ...o[s], continued: !0, finished_at: o[s].finished_at ?? Date.now() },
            ...o.slice(s + 1, a + 1),
            D("assistant", "", { turnId: i }),
            ...o.slice(a + 1),
        ]),
            z(t));
    },
    VIBEGRATIONS_CHAT_MESSAGE_REACTION: function (e) {
        let { projectId: t, id: n, emoji: i } = e,
            r = b.get(t);
        if (null == r) return !1;
        let l = r.findIndex((e) => "user" === e.role && e.id === n);
        if (-1 === l || r[l].agentReaction === i) return !1;
        b.set(t, [...r.slice(0, l), { ...r[l], agentReaction: i }, ...r.slice(l + 1)]);
    },
    VIBEGRATIONS_CHAT_SIDE_REPLY: function (e) {
        let { projectId: t, id: n, inReplyTo: i, content: r, timestamp: l } = e,
            a = b.get(t);
        if (null == a || a.some((e) => e.id === n)) return !1;
        let o = D("assistant", r, { ts: l, id: n });
        ((o.kind = "side_reply"), (o.in_reply_to = i));
        let s = a.findIndex((e) => e.id === i);
        if (-1 === s) return void b.set(t, [...a, o]);
        let { disposition: u, ...d } = a[s];
        (null != u && (o.acknowledges = u), b.set(t, [...a.slice(0, s), d, o, ...a.slice(s + 1)]));
    },
    VIBEGRATIONS_CHAT_PUBLISH_NOTICE: function (e) {
        let { projectId: t, id: n, content: i, timestamp: r, publishNotice: l } = e,
            a = b.get(t);
        if (null == a || a.some((e) => e.id === n)) return !1;
        let o = D("assistant", i, { ts: r, id: n });
        ((o.kind = "publish_notice"), (o.publishNotice = l), (o.finished = !0), b.set(t, [...a, o]));
    },
    VIBEGRATIONS_CHAT_STEP_APPEND: function (e) {
        let { projectId: t, step: n, turnId: i } = e;
        if ("preview_ready" === n.kind && null == i && !J(t)) return !1;
        (F(t, i, (e) => {
            var t;
            let i;
            return { ...e, steps: ((t = e.steps), en((i = et(t)), n), i.steps) };
        }),
            z(t));
    },
    VIBEGRATIONS_CHAT_TURN_FINISHED: function (e) {
        let { projectId: t, summary: n, turnId: i } = e,
            r = b.get(t);
        (null != r &&
            r.some((e) => null != e.disposition) &&
            b.set(
                t,
                r.map((e) => {
                    if (null == e.disposition) return e;
                    let { disposition: t, ...n } = e;
                    return n;
                }),
            ),
            F(t, i, (e) => ({
                ...e,
                finished: !0,
                finished_at: Date.now(),
                provisionalTodo: void 0,
                content: "" !== e.content ? e.content : (n ?? ""),
            })),
            J(t) || (N.delete(t), x.delete(t)),
            z(t));
    },
    VIBEGRATIONS_CHAT_INTERRUPTED: function (e) {
        let { projectId: t } = e,
            n = b.get(t);
        if (null == n) return !1;
        let i = D("assistant", "");
        ((i.finished = !0), (i.finished_at = Date.now()), (i.interrupted = !0), b.set(t, [...n, i]));
    },
    VIBEGRATIONS_CHAT_STOP_REQUESTED: function (e) {
        let { projectId: t } = e,
            n = b.get(t);
        if (null == n || !n.some(ei)) return !1;
        b.set(
            t,
            n.map((e) => (ei(e) ? { ...e, stopRequested: !0 } : e)),
        );
    },
    VIBEGRATIONS_CHAT_PROVISIONAL_TODO: function (e) {
        let { projectId: t, turnId: n, text: i } = e;
        if (
            !(function (e, t, n) {
                let i = b.get(e);
                if (null == i) return !1;
                let r = W(i, t);
                return -1 !== r && (b.set(e, [...i.slice(0, r), n(i[r]), ...i.slice(r + 1)]), !0);
            })(t, n, (e) => ({ ...e, provisionalTodo: i }))
        )
            return !1;
    },
    VIBEGRATIONS_CHAT_SOURCE_CHECKPOINT: function (e) {
        let { projectId: t, turnId: n, sourceSha: i } = e,
            r = b.get(t);
        if (null == r) return !1;
        let l = r.map((e) => ("assistant" === e.role && e.sourceSha !== i && L(e, n) ? { ...e, sourceSha: i } : e));
        if (l.every((e, t) => e === r[t])) return !1;
        b.set(t, l);
    },
    VIBEGRATIONS_CHAT_THINKING_SET: function (e) {
        let { projectId: t, activity: n } = e;
        if (null == n) return !!N.delete(t) && void 0;
        let i = N.get(t);
        if (null != i && n.session === i.session && n.seq <= i.seq) return !1;
        N.set(t, n);
    },
    VIBEGRATIONS_CHAT_COMPACTING_SET: function (e) {
        let { projectId: t, compacting: n } = e;
        if (n === x.has(t)) return !1;
        n ? x.add(t) : x.delete(t);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, project: n } = e;
        C.set(t, n);
    },
    VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET: function (e) {
        let { width: t } = e;
        if (k === t) return !1;
        k = t;
    },
    VIBEGRATIONS_CHAT_TURN_PATCH: function (e) {
        let { projectId: t, patch: n, turnId: i } = e;
        (F(t, i, (e) => {
            let t = { ...e, ...n };
            return ("todos" in n && (t.provisionalTodo = void 0), t);
        }),
            z(t));
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("closed" !== n && "failed" !== n) return !1;
        let i = x.delete(t),
            r = N.delete(t),
            l = b.get(t);
        if (null == l || !l.some((e) => "assistant" === e.role && !y(e))) return (!!r || !!i) && void 0;
        (b.set(
            t,
            l.map((e) => {
                if (null != e.disposition) {
                    let { disposition: t, ...n } = e;
                    return n;
                }
                return "assistant" !== e.role || y(e)
                    ? e
                    : {
                          ...e,
                          provisionalTodo: void 0,
                          steps: [
                              ...e.steps,
                              { type: "step", kind: "terminal_error", message: A.intl.string(I.default["wjWm+/"]) },
                          ],
                      };
            }),
        ),
            z(t));
    },
    VIBEGRATIONS_PROJECT_CREATE_SUCCESS: function (e) {
        let { project: t } = e;
        if (X.has(t.id)) return !1;
        X.set(t.id, null);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!K(t)) return !1;
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = new Set([...b.keys(), ...X.keys(), ...R.keys(), ...S.keys(), ...C.keys()]),
            n = !1;
        for (let e of t) null == m.Ay.getProject(e) && K(e) && (n = !0);
        if (!n) return !1;
    },
    VIBEGRATIONS_TURN_SETTLED: function (e) {
        let { projectId: t, guildId: n, title: i, body: r, nonce: l } = e;
        return ($(t, n, i, r, l), !1);
    },
    VIBEGRATIONS_TURN_NOTIFICATION: function (e) {
        let { projectId: t, body: n, nonce: i } = e,
            r = m.Ay.getProject(t);
        return (null != r && $(t, r.guild_id ?? r.preview_guild_id ?? null, r.name, n, i), !1);
    },
});
