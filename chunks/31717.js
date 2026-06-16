"use strict";
n.d(t, { A: () => S, C: () => f });
var i,
    r = n(735438),
    s = n.n(r),
    a = n(17928),
    o = n(228366),
    l = n(403362),
    u = n(935208),
    c = n(495544),
    d = n(734057),
    _ = n(919638);
let h = n(652215).CS1 + 500;
var f =
    (((i = {})[(i.ChannelMessage = 0)] = "ChannelMessage"),
    (i[(i.ThreadSettings = 1)] = "ThreadSettings"),
    (i[(i.FirstThreadMessage = 2)] = "FirstThreadMessage"),
    (i[(i.ApplicationLauncherCommand = 3)] = "ApplicationLauncherCommand"),
    (i[(i.Poll = 4)] = "Poll"),
    (i[(i.SlashCommand = 5)] = "SlashCommand"),
    (i[(i.ForwardContextMessage = 6)] = "ForwardContextMessage"),
    (i[(i.InteractionModal = 7)] = "InteractionModal"),
    i);
let p = {};
function E(e) {
    let t = p[e];
    return null == t && (t = p[e] = {}), t;
}
function m(e) {
    let { type: t, channelId: n, draft: i, draftType: r } = e,
        s = d.A.getChannel(n);
    i === s?.template && (i = "");
    let a = c.default.getId();
    if (null != a && null != i && "" !== i) {
        var o;
        let e = E(a),
            t = e[n];
        null == t && (t = e[n] = {}),
            (o = i).length > h && (o = o.substr(0, h)),
            (i = o) !== t[r]?.draft && (t[r] = { timestamp: Date.now(), draft: i });
    } else g(n, r);
    return "DRAFT_SAVE" === t;
}
function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.default.getId();
    if (null == n) return !1;
    let i = E(n),
        r = i[e];
    if (null == r) return !1;
    delete r[t], s().isEmpty(r) && delete i[e];
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
    let i = E(n);
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
            let t = c.default.getId();
            if (null == e || null == t) return {};
            let n = {},
                i = (n[t] = {});
            for (let t in e) i[t] = e[t];
            return n;
        },
    ];
    initialize(e) {
        for (let [t, n] of ((p = e ?? {}), u.default.entries(p)))
            for (let [e, i] of u.default.entries(n)) {
                let n = i[0];
                null != n && ("" === n.draft || "" === n.draft.trim()) && g(e, 0, t);
            }
        this.waitFor(c.default, d.A, _.A);
    }
    getState() {
        return p;
    }
    getThreadDraftWithParentMessageId(e) {
        let t = c.default.getId();
        if (null == t) return;
        let n = E(t),
            i = u.default.keys(n).find((t) => {
                let n = this.getThreadSettings(t);
                return n?.parentMessageId === e;
            });
        return null != i ? this.getThreadSettings(i) : void 0;
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
        let i = E(n)[e];
        if (null != i) {
            let e = i[t];
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
        return e in p || (p[e] = {}), A(), !1;
    },
    LOGOUT: function (e) {
        e.isSwitchingAccount || (p = {});
    },
    MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
        e.userId in p && delete p[e.userId];
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
        let i = E(n),
            r = i[t.parent_id];
        if (null == r) return !1;
        let s = r[1];
        if (null == s || s.parentMessageId !== u.default.castChannelIdAsMessageId(t.id)) return !1;
        {
            let e = i[t.parent_id];
            if (null == e) return !1;
            let n = e[2]?.draft ?? "";
            "" !== n && (i[t.id] = { 0: { timestamp: Date.now(), draft: n } }), g(t.parent_id, 1), g(t.parent_id, 2);
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
            i = c.default.getId();
        if (null == i) return;
        let r = E(i),
            s = r[t];
        null == s && (s = r[t] = {}), (s[1] = { timestamp: Date.now(), ...s[1], ...n, parentChannelId: t });
    },
});
