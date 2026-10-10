(n.d(t, { Ay: () => ea, B0: () => B, BL: () => q, bi: () => er }), n(667532), n(321073));
var l = n(17928),
    i = n(73153),
    s = n(695515),
    r = n(400492),
    u = n(885386),
    o = n(617617),
    d = n(803224),
    a = n(309010),
    f = n(967198),
    c = n(461213),
    _ = n(287809),
    p = n(935208),
    g = n(427262),
    h = n(42766),
    E = n(189714),
    C = n(28480),
    T = n(246338),
    A = n(652215),
    S = n(746080),
    N = n(248675),
    O = n(660183);
let R = "bit_message1",
    k = /<@!?(\d+)>/g,
    U = new Set(["reply", "plan_proposed", "terminal_error"]);
function q(e) {
    return (
        !0 === e.finished ||
        !0 === e.continued ||
        "" !== e.content ||
        null != e.proposal ||
        null != e.clarification ||
        null != e.intake ||
        I(e.steps)
    );
}
let m = new WeakMap();
function I(e) {
    let t = m.get(e);
    return (null == t && ((t = e.some((e) => U.has(e.kind))), m.set(e, t)), t);
}
let w = new Map(),
    H = new Map(),
    v = new Map(),
    y = [],
    J = new Map(),
    D = new Map(),
    P = new Set(),
    b = new Set(),
    M = new Map(),
    j = 0,
    L = [],
    z = 0;
function x(e, t) {
    let {
            ts: n,
            id: l,
            userId: i,
            attachments: s,
            turnId: r,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        u = l ?? `m${++z}`;
    return {
        id: u,
        render_id: u,
        role: e,
        content: t,
        ...(null != i ? { user_id: i } : {}),
        ...(null != r ? { turn_id: r } : {}),
        steps: [],
        created_at: null != n ? Date.parse(n) : Date.now(),
        attachments: s,
    };
}
let F = "turn:";
function G(e) {
    let t = x(e.role, e.content, { ts: e.ts, id: e.id, userId: e.user_id, attachments: e.attachments }),
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
    null != e.clarification && e.clarification.questions.length > 0 && (t.clarification = e.clarification),
    null != e.restore_proposal && (t.restoreProposal = e.restore_proposal),
    null != e.source_sha && (t.sourceSha = e.source_sha),
    null == e.steps && null == e.events && null != e.todos && e.todos.length > 0 && (t.todos = e.todos),
    null != e.steps
        ? (t.steps = (function (e) {
              let t = [],
                  n = { seenSeq: new Set(), todosAt: -1 };
              for (let l of e) eo(t, n, l);
              return (eu.set(t, n), t);
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
        l = n?.turn_id;
    if (null == n || "assistant" !== n.role || null == l || "" !== n.content || q(n)) return !1;
    for (let n = t - 1; n >= 0; n--) {
        let t = e[n];
        if ("user" === t.role) break;
        if (V(t, l)) return q(t);
    }
    return !1;
}
function $(e, t) {
    let n = W(e, t);
    if (-1 !== n) return n;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (!("assistant" !== n.role || q(n)) && null == n.turn_id) return t;
    }
    return -1;
}
function Y(e, t, n) {
    let l = w.get(e);
    if (null == l) return;
    let i = $(l, t);
    if (-1 === i) return void w.set(e, [...l, n(x("assistant", "", null != t ? { turnId: t } : {}))]);
    let s = l[i],
        r = n(null == t || null != s.turn_id || V(s, t) ? s : { ...s, turn_id: t });
    r !== s && w.set(e, K(l, i, r));
}
function K(e, t, n) {
    let l = e.slice();
    return ((l[t] = n), l);
}
function X(e) {
    return "side_reply" === e.kind || "publish_notice" === e.kind || "project_event" === e.kind;
}
function Q(e) {
    if (null == e) return !1;
    let t = !1;
    for (let n = e.length - 1; n >= 0; n--) {
        let l = e[n];
        if (!("assistant" !== l.role || X(l)) && ((!t && ((t = !0), !q(l))) || (null != l.turn_id && !q(l)))) return !0;
    }
    return !1;
}
function Z(e) {
    return Q(w.get(e));
}
function ee(e, t, n, l, i) {
    if (null != i) {
        if (i <= (M.get(e) ?? 0)) return;
        M.set(e, i);
    }
    if (
        C.A.areTurnNotificationsDisabled() ||
        c.A.getStatus() === A.clD.DND ||
        u.NO.getSetting() ||
        s.A.isCurrentUserInRestrictedHours() ||
        (0, E.j)(o.A.settings, e)
    )
        return;
    let p = !d.A.isSoundDisabled("message1"),
        N = f.A.getGuildId();
    if (
        null != N &&
        h.Ay.getSelectedProjectId(N) === e &&
        a.Ay.getChannelId() === S.VV.CONJURE &&
        C.A.isWindowFocused()
    ) {
        p && (0, r.Ak)(R, 0.4);
        return;
    }
    let O = t ?? (0, T.oX)("VibegrationsChatStore");
    C.A.presentTurnNotification({
        projectId: e,
        guildId: O,
        title: n,
        body: l.replace(k, (e, t) => {
            let n = _.default.getUser(t);
            return null == n ? e : `@${g.Ay.getName(n)}`;
        }),
        route: null == O ? null : A.BVt.CHANNEL(O, S.VV.CONJURE, e),
        sound: p ? R : void 0,
        volume: 0.4,
    });
}
function et(e) {
    let t = v.get(e) ?? !1,
        n = Z(e);
    if (t === n) return;
    v.set(e, n);
    let l = y.indexOf(e);
    if ((-1 !== l && y.splice(l, 1), y.unshift(e), n)) H.delete(e);
    else {
        let t;
        (null !=
            (t = (function (e) {
                let t = w.get(e);
                if (null == t) return null;
                for (let e = t.length - 1; e >= 0; e--) if ("assistant" === t[e].role && !X(t[e])) return t[e];
                return null;
            })(e)) &&
        ("" !== t.content.trim() ||
            null != t.proposal ||
            null != t.clarification ||
            null != t.intake ||
            t.steps.some((e) => U.has(e.kind) && "terminal_error" !== e.kind))
            ? H.set(e, Date.now())
            : H.delete(e),
            !(function (e) {
                let t = w.get(e);
                if (null != t)
                    for (let n = t.length - 1; n >= 0; n--) {
                        let l = t[n];
                        if ("assistant" === l.role) {
                            if (null != l.finished_at || !q(l)) return;
                            w.set(e, [...t.slice(0, n), { ...l, finished_at: Date.now() }, ...t.slice(n + 1)]);
                            return;
                        }
                    }
            })(e));
    }
}
function en(e) {
    let t = w.delete(e),
        n = ei.delete(e),
        l = es.delete(e),
        i = H.delete(e),
        s = v.delete(e),
        r = J.delete(e),
        u = D.delete(e),
        o = P.delete(e),
        d = b.delete(e),
        a = y.indexOf(e);
    return (-1 !== a && y.splice(a, 1), t || n || l || i || s || r || u || o || d || -1 !== a);
}
class el extends l.Ay.Store {
    initialize() {
        this.waitFor(s.A, d.A, a.Ay, f.A, c.A, o.A, _.default, h.Ay);
    }
    getMessages(e) {
        return w.get(e) ?? L;
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
        return ei.has(e);
    }
    isHistoryUnavailable(e) {
        return es.has(e);
    }
    getFinishedAt(e) {
        return Z(e) ? null : (H.get(e) ?? null);
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
        return j;
    }
    getActivityOrderedProjectIds() {
        return y.slice();
    }
    isAnyThinking() {
        for (let e of w.keys()) if (this.isThinking(e)) return !0;
        return !1;
    }
}
let ei = new Map(),
    es = new Set();
function er(e) {
    return ei.get(e) ?? null;
}
let eu = new WeakMap();
function eo(e, t, n) {
    if (null != n.turn_seq && t.seenSeq.has(n.turn_seq)) return;
    if ("todos" !== n.kind || null != n.task_id) {
        (e.push(n), null != n.turn_seq && t.seenSeq.add(n.turn_seq));
        return;
    }
    if (-1 === t.todosAt) {
        ((t.todosAt = e.length), e.push(n), null != n.turn_seq && t.seenSeq.add(n.turn_seq));
        return;
    }
    let l = e[t.todosAt];
    (null != l.turn_seq && t.seenSeq.delete(l.turn_seq),
        (e[t.todosAt] = n),
        null != n.turn_seq && t.seenSeq.add(n.turn_seq));
}
function ed(e) {
    return "assistant" === e.role && !X(e) && !q(e) && !0 !== e.stopRequested;
}
let ea = new el(i.h, {
    LOGOUT: function () {
        if (
            (M.clear(),
            0 === w.size &&
                0 === H.size &&
                0 === v.size &&
                0 === J.size &&
                0 === D.size &&
                0 === P.size &&
                0 === b.size &&
                0 === ei.size &&
                0 === es.size &&
                0 === y.length &&
                0 === j)
        )
            return !1;
        (w.clear(),
            H.clear(),
            v.clear(),
            J.clear(),
            D.clear(),
            P.clear(),
            b.clear(),
            ei.clear(),
            es.clear(),
            (y.length = 0),
            (j = 0));
    },
    CONJURE_CHAT_HISTORY_SET: function (e) {
        let { projectId: t, entries: n, cursor: l, degraded: i } = e,
            s = ei.get(t),
            r = ei.has(t) ? (w.get(t) ?? []) : [];
        (ei.set(t, l ?? null), !0 === i ? es.add(t) : es.delete(t), D.delete(t), P.delete(t), b.delete(t));
        let u = new Set(),
            o = n.filter((e) => null == e.id || (!u.has(e.id) && (u.add(e.id), !0))).map(G),
            d = null != l && !0 !== i ? o.findIndex((e) => null != e.id) : -1,
            a = -1 === d ? -1 : r.findIndex((e) => e.id === o[d].id);
        (-1 !== a && ei.set(t, s ?? null), w.set(t, -1 === a ? o : [...r.slice(0, a), ...o.slice(d)]), et(t));
    },
    CONJURE_CHAT_HISTORY_PREPEND: function (e) {
        let { projectId: t, entries: n, cursor: l } = e;
        if ((ei.set(t, l), 0 === n.length)) return;
        let i = w.get(t) ?? [],
            s = n.map(G),
            r = new Set(i.flatMap((e) => (null == e.id ? [] : [e.id]))),
            u = s.filter((e) => null == e.id || !r.has(e.id));
        w.set(t, [...u, ...i]);
    },
    CONJURE_CHAT_MESSAGE_APPEND: function (e) {
        let { projectId: t, content: n, id: l, optimisticId: i, userId: s, timestamp: r, attachments: u } = e,
            o = w.get(t) ?? [];
        if (o.some((e) => e.id === l)) return !1;
        let d = x("user", n, { ts: r, id: l, userId: s, attachments: u }),
            a = null == i ? -1 : o.findIndex((e) => e.id === i);
        if (-1 !== a) {
            ((d.render_id = o[a].render_id), w.set(t, [...o.slice(0, a), d, ...o.slice(a + 1)]), et(t));
            return;
        }
        let f = [...o, d];
        (Q(f) || f.push(x("assistant", "")), w.set(t, f), et(t));
    },
    CONJURE_CHAT_MESSAGE_DISPOSITION: function (e) {
        let { projectId: t, id: n, activeTurnId: l, disposition: i } = e,
            s = w.get(t);
        if (null == s) return !1;
        let r = s.findIndex((e) => e.id === n);
        if (-1 === r) return !1;
        let u = "steered" === i ? s.filter((e, t) => t <= r || e.in_reply_to !== n || "queued" !== e.acknowledges) : s,
            o = u[r].disposition === i ? u : [...u.slice(0, r), { ...u[r], disposition: i }, ...u.slice(r + 1)],
            d = "steered" === i ? W(o, l) : -1;
        if ("steered" === i && -1 === d && null != l) {
            let e = $(o, l);
            if (-1 !== e && e < r) {
                let n = { ...o[e], turn_id: l };
                if (0 === n.steps.length) {
                    (w.set(t, [...o.slice(0, e), ...o.slice(e + 1, r + 1), n, ...o.slice(r + 1)]), et(t));
                    return;
                }
                ((o = [...o.slice(0, e), n, ...o.slice(e + 1)]), (d = e));
            }
        }
        if (-1 === d || d > r) return o !== s && void w.set(t, o);
        (w.set(t, [
            ...o.slice(0, d),
            { ...o[d], continued: !0, finished_at: o[d].finished_at ?? Date.now() },
            ...o.slice(d + 1, r + 1),
            x("assistant", "", { turnId: l }),
            ...o.slice(r + 1),
        ]),
            et(t));
    },
    CONJURE_CHAT_MESSAGE_CANCELLED: function (e) {
        let { projectId: t, id: n } = e,
            l = w.get(t);
        if (null == l) return !1;
        let i = l.filter((e) => e.id !== n && e.in_reply_to !== n);
        if (i.length === l.length) return !1;
        w.set(t, i);
    },
    CONJURE_CHAT_SIDE_REPLY: function (e) {
        let { projectId: t, id: n, inReplyTo: l, content: i, timestamp: s } = e,
            r = w.get(t);
        if (null == r || r.some((e) => e.id === n)) return !1;
        let u = x("assistant", i, { ts: s, id: n });
        ((u.kind = "side_reply"), (u.in_reply_to = l));
        let o = r.findIndex((e) => e.id === l);
        if (-1 === o) return void w.set(t, [...r, u]);
        let { disposition: d } = r[o];
        (null != d && (u.acknowledges = d), w.set(t, [...r.slice(0, o + 1), u, ...r.slice(o + 1)]));
    },
    CONJURE_CHAT_PUBLISH_NOTICE: function (e) {
        let { projectId: t, id: n, content: l, timestamp: i, publishNotice: s } = e,
            r = w.get(t);
        if (null == r || r.some((e) => e.id === n)) return !1;
        let u = x("assistant", l, { ts: i, id: n });
        ((u.kind = "publish_notice"), (u.publishNotice = s), (u.finished = !0), w.set(t, [...r, u]));
    },
    CONJURE_CHAT_PROJECT_EVENT: function (e) {
        let { projectId: t, event: n } = e,
            l = w.get(t);
        if (null == l || l.some((e) => e.id === n.id)) return !1;
        let i = x("assistant", "", { ts: n.ts, id: n.id });
        ((i.kind = "project_event"), (i.projectEvent = n), (i.finished = !0), w.set(t, [...l, i]));
    },
    CONJURE_CHAT_STEP_APPEND: function (e) {
        let { projectId: t, step: n, turnId: l } = e;
        if ("preview_ready" === n.kind && null == l && !Z(t)) return !1;
        let i = w.get(t);
        if (
            (Y(t, l, (e) => {
                let t = (function (e, t) {
                    let n = (function (e) {
                        let t = eu.get(e);
                        if (null != t) return t;
                        let n = new Set(),
                            l = -1;
                        for (let [t, i] of e.entries())
                            (null != i.turn_seq && n.add(i.turn_seq),
                                -1 === l && "todos" === i.kind && null == i.task_id && (l = t));
                        let i = { seenSeq: n, todosAt: l };
                        return (eu.set(e, i), i);
                    })(e);
                    if (null != t.turn_seq && n.seenSeq.has(t.turn_seq)) return e;
                    let l = e.slice();
                    return (eu.delete(e), eo(l, n, t), eu.set(l, n), m.set(l, I(e) || U.has(t.kind)), l);
                })(e.steps, n);
                return t === e.steps ? e : { ...e, steps: t };
            }),
            w.get(t) === i)
        )
            return !1;
        et(t);
    },
    CONJURE_CHAT_TURN_FINISHED: function (e) {
        let { projectId: t, summary: n, turnId: l } = e,
            i = w.get(t);
        (null != i &&
            i.some((e) => null != e.disposition) &&
            w.set(
                t,
                i.map((e) => {
                    if (null == e.disposition) return e;
                    let { disposition: t, ...n } = e;
                    return n;
                }),
            ),
            Y(t, l, (e) => ({
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
            n = w.get(t);
        if (null == n) return !1;
        let l = x("assistant", "");
        ((l.finished = !0), (l.finished_at = Date.now()), (l.interrupted = !0), w.set(t, [...n, l]));
    },
    CONJURE_CHAT_STOP_REQUESTED: function (e) {
        let { projectId: t } = e,
            n = w.get(t);
        if (null == n || !n.some(ed)) return !1;
        w.set(
            t,
            n.map((e) => (ed(e) ? { ...e, stopRequested: !0 } : e)),
        );
    },
    CONJURE_CHAT_PROVISIONAL_TODO: function (e) {
        let { projectId: t, turnId: n, text: l } = e;
        if (
            !(function (e, t, n) {
                let l = w.get(e);
                if (null == l) return !1;
                let i = W(l, t);
                return -1 !== i && (w.set(e, K(l, i, n(l[i]))), !0);
            })(t, n, (e) => ({ ...e, provisionalTodo: l }))
        )
            return !1;
    },
    CONJURE_CHAT_SOURCE_CHECKPOINT: function (e) {
        let { projectId: t, turnId: n, sourceSha: l } = e,
            i = w.get(t);
        if (null == i) return !1;
        let s = i.map((e) => ("assistant" === e.role && e.sourceSha !== l && V(e, n) ? { ...e, sourceSha: l } : e));
        if (s.every((e, t) => e === i[t])) return !1;
        w.set(t, s);
    },
    CONJURE_CHAT_THINKING_SET: function (e) {
        let { projectId: t, activity: n } = e;
        if (null == n) return !!D.delete(t) && void 0;
        let l = D.get(t);
        if (null != l && n.session === l.session && n.seq <= l.seq) return !1;
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
        if (j === t) return !1;
        j = t;
    },
    CONJURE_CHAT_TURN_PATCH: function (e) {
        let { projectId: t, patch: n, turnId: l } = e;
        (Y(t, l, (e) => {
            let t = { ...e, ...n };
            return ("todos" in n && (t.provisionalTodo = void 0), t);
        }),
            et(t));
    },
    CONJURE_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("closed" !== n && "failed" !== n) return !1;
        let l = P.delete(t),
            i = b.delete(t),
            s = D.delete(t),
            r = w.get(t);
        if (null == r || !r.some((e) => "assistant" === e.role && !q(e))) return (!!s || !!l || !!i) && void 0;
        (w.set(
            t,
            r.map((e) => {
                if (null != e.disposition) {
                    let { disposition: t, ...n } = e;
                    return n;
                }
                return "assistant" !== e.role || q(e)
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
        if (ei.has(t.id)) return !1;
        ei.set(t.id, null);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!en(t)) return !1;
    },
    CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = new Set([...w.keys(), ...ei.keys(), ...H.keys(), ...v.keys(), ...J.keys()]),
            n = !1;
        for (let e of t) null == h.Ay.getProject(e) && en(e) && (n = !0);
        if (!n) return !1;
    },
    CONJURE_TURN_SETTLED: function (e) {
        let { projectId: t, guildId: n, title: l, body: i, nonce: s } = e;
        return (ee(t, n, l, i, s), !1);
    },
    CONJURE_TURN_NOTIFICATION: function (e) {
        let { projectId: t, body: n, nonce: l } = e,
            i = h.Ay.getProject(t);
        return (null != i && ee(t, i.guild_id ?? i.preview_guild_id ?? null, i.name, n, l), !1);
    },
});
