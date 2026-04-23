"use strict";
n.d(t, { A: () => S, C: () => p });
var r,
    i = n(735438),
    s = n.n(i),
    a = n(311907),
    o = n(73153),
    l = n(403362),
    u = n(661191),
    c = n(961350),
    d = n(734057),
    _ = n(919638);
let f = n(652215).CS1 + 500;
var p =
    (((r = {})[(r.ChannelMessage = 0)] = "ChannelMessage"),
    (r[(r.ThreadSettings = 1)] = "ThreadSettings"),
    (r[(r.FirstThreadMessage = 2)] = "FirstThreadMessage"),
    (r[(r.ApplicationLauncherCommand = 3)] = "ApplicationLauncherCommand"),
    (r[(r.Poll = 4)] = "Poll"),
    (r[(r.SlashCommand = 5)] = "SlashCommand"),
    (r[(r.ForwardContextMessage = 6)] = "ForwardContextMessage"),
    (r[(r.InteractionModal = 7)] = "InteractionModal"),
    r);
let h = {};
function E(e) {
    let t = h[e];
    return null == t && (t = h[e] = {}), t;
}
function m(e) {
    let { type: t, channelId: n, draft: r, draftType: i } = e,
        s = d.A.getChannel(n);
    r === s?.template && (r = "");
    let a = c.default.getId();
    if (null != a && null != r && "" !== r) {
        var o;
        let e = E(a),
            t = e[n];
        null == t && (t = e[n] = {}),
            (o = r).length > f && (o = o.substr(0, f)),
            (r = o) !== t[i]?.draft && (t[i] = { timestamp: Date.now(), draft: r });
    } else g(n, i);
    return "DRAFT_SAVE" === t;
}
function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.default.getId();
    if (null == n) return !1;
    let r = E(n),
        i = r[e];
    if (null == i) return !1;
    delete i[t], s().isEmpty(i) && delete r[e];
}
function A() {
    let e = c.default.getId();
    if (null == e || _.A.totalUnavailableGuilds > 0) return;
    let t = E(e);
    for (let e in t) null == d.A.getChannel(e) && delete t[e];
}
function I(e) {
    let {
            channel: { id: t },
        } = e,
        n = c.default.getId();
    if (null == n) return !1;
    let r = E(n);
    return delete r[t], !1;
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
            let t = c.default.getId();
            if (null == e || null == t) return {};
            let n = {},
                r = (n[t] = {});
            for (let t in e) r[t] = e[t];
            return n;
        },
    ];
    initialize(e) {
        for (let [t, n] of ((h = e ?? {}), u.default.entries(h)))
            for (let [e, r] of u.default.entries(n)) {
                let n = r[0];
                null != n && ("" === n.draft || "" === n.draft.trim()) && g(e, 0, t);
            }
        this.waitFor(c.default, d.A, _.A);
    }
    getState() {
        return h;
    }
    getThreadDraftWithParentMessageId(e) {
        let t = c.default.getId();
        if (null == t) return;
        let n = E(t),
            r = u.default.keys(n).find((t) => {
                let n = this.getThreadSettings(t);
                return n?.parentMessageId === e;
            });
        return null != r ? this.getThreadSettings(r) : void 0;
    }
    getRecentlyEditedDrafts(e) {
        let t = c.default.getId();
        if (null == t) return [];
        let n = E(t);
        return s()(n)
            .mapValues((t) => t?.[e])
            .pickBy(l.Vq)
            .toPairs()
            .map((e) => {
                let [t, { timestamp: n, draft: r }] = e;
                return { channelId: t, timestamp: n, draft: r };
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
        let r = E(n)[e];
        if (null != r) {
            let e = r[t];
            if (null != e) return e.draft;
        }
        return "";
    }
    getThreadSettings(e) {
        let t = c.default.getId();
        if (null == t) return null;
        let n = E(t)[e];
        return null == n ? null : n[1];
    }
}
let S = new T(o.h, {
    CONNECTION_OPEN: function () {
        let e = c.default.getId();
        return e in h || (h[e] = {}), A(), !1;
    },
    LOGOUT: function (e) {
        e.isSwitchingAccount || (h = {});
    },
    MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
        e.userId in h && delete h[e.userId];
    },
    GUILD_DELETE: function () {
        return A(), !1;
    },
    CHANNEL_DELETE: I,
    THREAD_DELETE: I,
    THREAD_CREATE: function (e) {
        let { channel: t } = e,
            n = c.default.getId();
        if (null == n || t.ownerId === n) return !1;
        let r = E(n),
            i = r[t.parent_id];
        if (null == i) return !1;
        let s = i[1];
        if (null == s || s.parentMessageId !== u.default.castChannelIdAsMessageId(t.id)) return !1;
        {
            let e = r[t.parent_id];
            if (null == e) return !1;
            let n = e[2]?.draft ?? "";
            "" !== n && (r[t.id] = { 0: { timestamp: Date.now(), draft: n } }), g(t.parent_id, 1), g(t.parent_id, 2);
        }
    },
    DRAFT_SAVE: m,
    DRAFT_CHANGE: m,
    DRAFT_CLEAR: function (e) {
        let { channelId: t, draftType: n } = e;
        return g(t, n);
    },
    THREAD_SETTINGS_DRAFT_CHANGE: function (e) {
        let { channelId: t, draft: n } = e,
            r = c.default.getId();
        if (null == r) return;
        let i = E(r),
            s = i[t];
        null == s && (s = i[t] = {}), (s[1] = { timestamp: Date.now(), ...s[1], ...n, parentChannelId: t });
    },
});
