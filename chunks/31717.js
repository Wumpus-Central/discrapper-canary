"use strict";
n.d(t, { A: () => S, C: () => h });
var i,
    r = n(735438),
    s = n.n(r),
    a = n(17928),
    o = n(228366),
    l = n(403362),
    d = n(935208),
    _ = n(495544),
    u = n(734057),
    c = n(919638);
let E = n(652215).CS1 + 500;
var h =
    (((i = {})[(i.ChannelMessage = 0)] = "ChannelMessage"),
    (i[(i.ThreadSettings = 1)] = "ThreadSettings"),
    (i[(i.FirstThreadMessage = 2)] = "FirstThreadMessage"),
    (i[(i.ApplicationLauncherCommand = 3)] = "ApplicationLauncherCommand"),
    (i[(i.Poll = 4)] = "Poll"),
    (i[(i.SlashCommand = 5)] = "SlashCommand"),
    (i[(i.ForwardContextMessage = 6)] = "ForwardContextMessage"),
    (i[(i.InteractionModal = 7)] = "InteractionModal"),
    i);
let m = {};
function f(e) {
    let t = m[e];
    return null == t && (t = m[e] = {}), t;
}
function g(e) {
    let { type: t, channelId: n, draft: i, draftType: r } = e,
        s = u.A.getChannel(n);
    i === s?.template && (i = "");
    let a = _.default.getId();
    if (null != a && null != i && "" !== i) {
        var o;
        let e = f(a),
            t = e[n];
        null == t && (t = e[n] = {}),
            (o = i).length > E && (o = o.substr(0, E)),
            (i = o) !== t[r]?.draft && (t[r] = { timestamp: Date.now(), draft: i });
    } else p(n, r);
    return "DRAFT_SAVE" === t;
}
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.default.getId();
    if (null == n) return !1;
    let i = f(n),
        r = i[e];
    if (null == r) return !1;
    delete r[t], s().isEmpty(r) && delete i[e];
}
function A() {
    let e = _.default.getId();
    if (null == e || c.A.totalUnavailableGuilds > 0) return;
    let t = f(e);
    for (let e in t) null == u.A.getChannel(e) && delete t[e];
}
function I(e) {
    let {
            channel: { id: t },
        } = e,
        n = _.default.getId();
    if (null == n) return !1;
    let i = f(n);
    return delete i[t], !1;
}
class T extends a.Ay.PersistedStore {
    static displayName = "DraftStore";
    static persistKey = "DraftStore";
    static migrations = [
        (e) => {
            if (null == e) return {};
            for (let t in e) "timestamp" in e[t] && (e[t] = { 0: e[t] });
            return e;
        },
        (e) => {
            let t = _.default.getId();
            if (null == e || null == t) return {};
            let n = {},
                i = (n[t] = {});
            for (let t in e) i[t] = e[t];
            return n;
        },
    ];
    initialize(e) {
        for (let [t, n] of ((m = e ?? {}), d.default.entries(m)))
            for (let [e, i] of d.default.entries(n)) {
                let n = i[0];
                null != n && ("" === n.draft || "" === n.draft.trim()) && p(e, 0, t);
            }
        this.waitFor(_.default, u.A, c.A);
    }
    getState() {
        return m;
    }
    getThreadDraftWithParentMessageId(e) {
        let t = _.default.getId();
        if (null == t) return;
        let n = f(t),
            i = d.default.keys(n).find((t) => {
                let n = this.getThreadSettings(t);
                return n?.parentMessageId === e;
            });
        return null != i ? this.getThreadSettings(i) : void 0;
    }
    getRecentlyEditedDrafts(e) {
        let t = _.default.getId();
        if (null == t) return [];
        let n = f(t);
        return s()(n)
            .mapValues((t) => t?.[e])
            .pickBy(l.Vq)
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
        let n = _.default.getId();
        if (null == n) return "";
        let i = f(n)[e];
        if (null != i) {
            let e = i[t];
            if (null != e) return e.draft;
        }
        return "";
    }
    getThreadSettings(e) {
        let t = _.default.getId();
        if (null == t) return null;
        let n = f(t)[e];
        return null == n ? null : n[1];
    }
}
let S = new T(o.h, {
    CONNECTION_OPEN: function () {
        let e = _.default.getId();
        return e in m || (m[e] = {}), A(), !1;
    },
    LOGOUT: function (e) {
        e.isSwitchingAccount || (m = {});
    },
    MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
        e.userId in m && delete m[e.userId];
    },
    GUILD_DELETE: function () {
        return A(), !1;
    },
    CHANNEL_DELETE: I,
    THREAD_DELETE: I,
    THREAD_CREATE: function (e) {
        let { channel: t } = e,
            n = _.default.getId();
        if (null == n || t.ownerId === n) return !1;
        let i = f(n),
            r = i[t.parent_id];
        if (null == r) return !1;
        let s = r[1];
        if (null == s || s.parentMessageId !== d.default.castChannelIdAsMessageId(t.id)) return !1;
        {
            let e = i[t.parent_id];
            if (null == e) return !1;
            let n = e[2]?.draft ?? "";
            "" !== n && (i[t.id] = { 0: { timestamp: Date.now(), draft: n } }), p(t.parent_id, 1), p(t.parent_id, 2);
        }
    },
    DRAFT_SAVE: g,
    DRAFT_CHANGE: g,
    DRAFT_CLEAR: function (e) {
        let { channelId: t, draftType: n } = e;
        return p(t, n);
    },
    THREAD_SETTINGS_DRAFT_CHANGE: function (e) {
        let { channelId: t, draft: n } = e,
            i = _.default.getId();
        if (null == i) return;
        let r = f(i),
            s = r[t];
        null == s && (s = r[t] = {}), (s[1] = { timestamp: Date.now(), ...s[1], ...n, parentChannelId: t });
    },
});
