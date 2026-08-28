"use strict";
n.d(t, { A: () => N, C: () => h });
var i,
    r = n(435558),
    a = n.n(r),
    s = n(17928),
    l = n(228366),
    o = n(458524),
    d = n(403362),
    c = n(935208),
    u = n(280450),
    _ = n(734057),
    E = n(919638);
let A = n(652215).CS1 + 500;
var h =
    (((i = {})[(i.ChannelMessage = 0)] = "ChannelMessage"),
    (i[(i.ThreadSettings = 1)] = "ThreadSettings"),
    (i[(i.FirstThreadMessage = 2)] = "FirstThreadMessage"),
    (i[(i.ApplicationLauncherCommand = 3)] = "ApplicationLauncherCommand"),
    (i[(i.Poll = 4)] = "Poll"),
    (i[(i.SlashCommand = 5)] = "SlashCommand"),
    (i[(i.ForwardContextMessage = 6)] = "ForwardContextMessage"),
    (i[(i.InteractionModal = 7)] = "InteractionModal"),
    (i[(i.ScheduledMessage = 8)] = "ScheduledMessage"),
    i);
let I = {};
function f(e) {
    let t = I[e];
    return null == t && (t = I[e] = {}), t;
}
function p(e) {
    let { type: t, channelId: n, draft: i, draftType: r, command: s } = e,
        l = _.A.getChannel(n);
    i === l?.template && (i = "");
    let d = u.default.getId();
    if (null != d && null != i && "" !== i) {
        var c;
        let e = f(d),
            t = e[n];
        null == t && (t = e[n] = {}), (c = i).length > A && (c = c.substr(0, A)), (i = c);
        let l = t[r],
            u = s ?? ((0, o.l)(l?.command, i) ? l?.command : void 0);
        (i === l?.draft && a().isEqual(u, l?.command)) || (t[r] = { timestamp: Date.now(), draft: i, command: u });
    } else T(n, r);
    return "DRAFT_SAVE" === t;
}
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.default.getId();
    if (null == n) return !1;
    let i = f(n),
        r = i[e];
    if (null == r) return !1;
    delete r[t], a().isEmpty(r) && delete i[e];
}
function m() {
    let e = u.default.getId();
    if (null == e || E.A.totalUnavailableGuilds > 0) return;
    let t = f(e);
    for (let e in t) null == _.A.getChannel(e) && delete t[e];
}
function g(e) {
    let {
            channel: { id: t },
        } = e,
        n = u.default.getId();
    if (null == n) return !1;
    let i = f(n);
    return delete i[t], !1;
}
class S extends s.Ay.PersistedStore {
    static displayName = "DraftStore";
    static persistKey = "DraftStore";
    static migrations = [
        (e) => {
            if (null == e) return {};
            for (let t in e) "timestamp" in e[t] && (e[t] = { 0: e[t] });
            return e;
        },
        (e) => {
            let t = u.default.getId();
            if (null == e || null == t) return {};
            let n = {},
                i = (n[t] = {});
            for (let t in e) i[t] = e[t];
            return n;
        },
    ];
    initialize(e) {
        for (let [t, n] of ((I = e ?? {}), c.default.entries(I)))
            for (let [e, i] of c.default.entries(n)) {
                let n = i[0];
                null != n && ("" === n.draft || "" === n.draft.trim()) && T(e, 0, t);
            }
        this.waitFor(u.default, _.A, E.A);
    }
    getState() {
        return I;
    }
    getThreadDraftWithParentMessageId(e) {
        let t = u.default.getId();
        if (null == t) return;
        let n = f(t),
            i = c.default.keys(n).find((t) => {
                let n = this.getThreadSettings(t);
                return n?.parentMessageId === e;
            });
        return null != i ? this.getThreadSettings(i) : void 0;
    }
    getRecentlyEditedDrafts(e) {
        let t = u.default.getId();
        if (null == t) return [];
        let n = f(t);
        return a()(n)
            .mapValues((t) => t?.[e])
            .pickBy(d.Vq)
            .toPairs()
            .map((e) => {
                let [t, { timestamp: n, draft: i }] = e;
                return { channelId: t, timestamp: n, draft: i };
            })
            .sortBy((e) => {
                let { timestamp: t } = e;
                return -t;
            })
            .value();
    }
    getDraft(e, t) {
        let n = u.default.getId();
        if (null == n) return "";
        let i = f(n)[e];
        if (null != i) {
            let e = i[t];
            if (null != e) return e.draft;
        }
        return "";
    }
    getDraftCommand(e, t) {
        let n = u.default.getId();
        if (null != n) return f(n)[e]?.[t]?.command;
    }
    getThreadSettings(e) {
        let t = u.default.getId();
        if (null == t) return null;
        let n = f(t)[e];
        return null == n ? null : n[1];
    }
    getScheduledMessage(e) {
        let t = u.default.getId();
        if (null != t) return f(t)[e]?.[8];
    }
}
let N = new S(l.h, {
    CONNECTION_OPEN: function () {
        let e = u.default.getId();
        return e in I || (I[e] = {}), m(), !1;
    },
    LOGOUT: function (e) {
        e.isSwitchingAccount || (I = {});
    },
    MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
        e.userId in I && delete I[e.userId];
    },
    GUILD_DELETE: function () {
        return m(), !1;
    },
    CHANNEL_DELETE: g,
    THREAD_DELETE: g,
    THREAD_CREATE: function (e) {
        let { channel: t } = e,
            n = u.default.getId();
        if (null == n || t.ownerId === n) return !1;
        let i = f(n),
            r = i[t.parent_id];
        if (null == r) return !1;
        let a = r[1];
        if (null == a || a.parentMessageId !== c.default.castChannelIdAsMessageId(t.id)) return !1;
        {
            let e = i[t.parent_id];
            if (null == e) return !1;
            let n = e[2]?.draft ?? "";
            "" !== n && (i[t.id] = { 0: { timestamp: Date.now(), draft: n } }), T(t.parent_id, 1), T(t.parent_id, 2);
        }
    },
    DRAFT_SAVE: p,
    DRAFT_CHANGE: p,
    DRAFT_CLEAR: function (e) {
        let { channelId: t, draftType: n } = e;
        return T(t, n);
    },
    DRAFT_COMMAND_CLEAR: function (e) {
        let { channelId: t, draftType: n } = e,
            i = u.default.getId();
        if (null == i) return !1;
        let r = f(i)[t]?.[n];
        return r?.command != null && ((r.command = void 0), !1);
    },
    THREAD_SETTINGS_DRAFT_CHANGE: function (e) {
        let { channelId: t, draft: n } = e,
            i = u.default.getId();
        if (null == i) return;
        let r = f(i),
            a = r[t];
        null == a && (a = r[t] = {}), (a[1] = { timestamp: Date.now(), ...a[1], ...n, parentChannelId: t });
    },
    SCHEDULED_MESSAGE_DRAFT_CHANGE: function (e) {
        let { channelId: t, draft: n } = e,
            i = u.default.getId();
        if (null == i) return;
        let r = f(i),
            a = r[t];
        null == a && (a = r[t] = {}), (a[8] = { ...a[8], ...n, timestamp: Date.now() });
    },
    SCHEDULED_MESSAGES_CREATE_SUCCESS: function (e) {
        let { channelId: t } = e;
        return T(t, 8);
    },
});
