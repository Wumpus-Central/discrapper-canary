"use strict";
n.d(t, { A: () => S, C: () => A });
var i,
    r = n(435558),
    a = n.n(r),
    s = n(17928),
    l = n(228366),
    o = n(403362),
    d = n(935208),
    c = n(280450),
    u = n(734057),
    _ = n(919638);
let E = n(652215).CS1 + 500;
var A =
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
let h = {};
function I(e) {
    let t = h[e];
    return null == t && (t = h[e] = {}), t;
}
function f(e) {
    let { type: t, channelId: n, draft: i, draftType: r } = e,
        a = u.A.getChannel(n);
    i === a?.template && (i = "");
    let s = c.default.getId();
    if (null != s && null != i && "" !== i) {
        var l;
        let e = I(s),
            t = e[n];
        null == t && (t = e[n] = {}),
            (l = i).length > E && (l = l.substr(0, E)),
            (i = l) !== t[r]?.draft && (t[r] = { timestamp: Date.now(), draft: i });
    } else p(n, r);
    return "DRAFT_SAVE" === t;
}
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.default.getId();
    if (null == n) return !1;
    let i = I(n),
        r = i[e];
    if (null == r) return !1;
    delete r[t], a().isEmpty(r) && delete i[e];
}
function T() {
    let e = c.default.getId();
    if (null == e || _.A.totalUnavailableGuilds > 0) return;
    let t = I(e);
    for (let e in t) null == u.A.getChannel(e) && delete t[e];
}
function m(e) {
    let {
            channel: { id: t },
        } = e,
        n = c.default.getId();
    if (null == n) return !1;
    let i = I(n);
    return delete i[t], !1;
}
class g extends s.Ay.PersistedStore {
    static displayName = "DraftStore";
    static persistKey = "DraftStore";
    static migrations = [
        (e) => {
            if (null == e) return {};
            for (let t in e) "timestamp" in e[t] && (e[t] = { 0: e[t] });
            return e;
        },
        (e) => {
            let t = c.default.getId();
            if (null == e || null == t) return {};
            let n = {},
                i = (n[t] = {});
            for (let t in e) i[t] = e[t];
            return n;
        },
    ];
    initialize(e) {
        for (let [t, n] of ((h = e ?? {}), d.default.entries(h)))
            for (let [e, i] of d.default.entries(n)) {
                let n = i[0];
                null != n && ("" === n.draft || "" === n.draft.trim()) && p(e, 0, t);
            }
        this.waitFor(c.default, u.A, _.A);
    }
    getState() {
        return h;
    }
    getThreadDraftWithParentMessageId(e) {
        let t = c.default.getId();
        if (null == t) return;
        let n = I(t),
            i = d.default.keys(n).find((t) => {
                let n = this.getThreadSettings(t);
                return n?.parentMessageId === e;
            });
        return null != i ? this.getThreadSettings(i) : void 0;
    }
    getRecentlyEditedDrafts(e) {
        let t = c.default.getId();
        if (null == t) return [];
        let n = I(t);
        return a()(n)
            .mapValues((t) => t?.[e])
            .pickBy(o.Vq)
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
        let n = c.default.getId();
        if (null == n) return "";
        let i = I(n)[e];
        if (null != i) {
            let e = i[t];
            if (null != e) return e.draft;
        }
        return "";
    }
    getThreadSettings(e) {
        let t = c.default.getId();
        if (null == t) return null;
        let n = I(t)[e];
        return null == n ? null : n[1];
    }
    getScheduledMessage(e) {
        let t = c.default.getId();
        if (null != t) return I(t)[e]?.[8];
    }
}
let S = new g(l.h, {
    CONNECTION_OPEN: function () {
        let e = c.default.getId();
        return e in h || (h[e] = {}), T(), !1;
    },
    LOGOUT: function (e) {
        e.isSwitchingAccount || (h = {});
    },
    MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
        e.userId in h && delete h[e.userId];
    },
    GUILD_DELETE: function () {
        return T(), !1;
    },
    CHANNEL_DELETE: m,
    THREAD_DELETE: m,
    THREAD_CREATE: function (e) {
        let { channel: t } = e,
            n = c.default.getId();
        if (null == n || t.ownerId === n) return !1;
        let i = I(n),
            r = i[t.parent_id];
        if (null == r) return !1;
        let a = r[1];
        if (null == a || a.parentMessageId !== d.default.castChannelIdAsMessageId(t.id)) return !1;
        {
            let e = i[t.parent_id];
            if (null == e) return !1;
            let n = e[2]?.draft ?? "";
            "" !== n && (i[t.id] = { 0: { timestamp: Date.now(), draft: n } }), p(t.parent_id, 1), p(t.parent_id, 2);
        }
    },
    DRAFT_SAVE: f,
    DRAFT_CHANGE: f,
    DRAFT_CLEAR: function (e) {
        let { channelId: t, draftType: n } = e;
        return p(t, n);
    },
    THREAD_SETTINGS_DRAFT_CHANGE: function (e) {
        let { channelId: t, draft: n } = e,
            i = c.default.getId();
        if (null == i) return;
        let r = I(i),
            a = r[t];
        null == a && (a = r[t] = {}), (a[1] = { timestamp: Date.now(), ...a[1], ...n, parentChannelId: t });
    },
    SCHEDULED_MESSAGE_DRAFT_CHANGE: function (e) {
        let { channelId: t, draft: n } = e,
            i = c.default.getId();
        if (null == i) return;
        let r = I(i),
            a = r[t];
        null == a && (a = r[t] = {}), (a[8] = { ...a[8], ...n, timestamp: Date.now() });
    },
    SCHEDULED_MESSAGES_CREATE_SUCCESS: function (e) {
        let { channelId: t } = e;
        return p(t, 8);
    },
});
