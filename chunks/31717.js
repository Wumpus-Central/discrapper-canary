"use strict";
n.d(t, { A: () => D, C: () => f });
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(73153),
    o = n(403362),
    l = n(661191),
    u = n(961350),
    c = n(734057),
    d = n(919638);
let _ = n(652215).CS1 + 500;
var f = (function (e) {
    return (
        (e[(e.ChannelMessage = 0)] = "ChannelMessage"),
        (e[(e.ThreadSettings = 1)] = "ThreadSettings"),
        (e[(e.FirstThreadMessage = 2)] = "FirstThreadMessage"),
        (e[(e.ApplicationLauncherCommand = 3)] = "ApplicationLauncherCommand"),
        (e[(e.Poll = 4)] = "Poll"),
        (e[(e.SlashCommand = 5)] = "SlashCommand"),
        (e[(e.ForwardContextMessage = 6)] = "ForwardContextMessage"),
        (e[(e.InteractionModal = 7)] = "InteractionModal"),
        e
    );
})({});
let p = {};
function h(e) {
    return e.length > _ && (e = e.substr(0, _)), e;
}
function m(e) {
    let t = p[e];
    return null == t && (t = p[e] = {}), t;
}
function g(e) {
    let { type: t, channelId: n, draft: r, draftType: i } = e,
        a = c.A.getChannel(n);
    r === a?.template && (r = "");
    let s = u.default.getId();
    if (null != s && null != r && "" !== r) {
        let e = m(s),
            t = e[n];
        null == t && (t = e[n] = {}), (r = h(r)) !== t[i]?.draft && (t[i] = { timestamp: Date.now(), draft: r });
    } else I(n, i);
    return "DRAFT_SAVE" === t;
}
function E(e) {
    let { channelId: t, draftType: n } = e;
    return I(t, n);
}
function A(e) {
    let { channelId: t, draft: n } = e,
        r = u.default.getId();
    if (null == r) return;
    let i = m(r),
        a = i[t];
    null == a && (a = i[t] = {}), (a[1] = { timestamp: Date.now(), ...a[1], ...n, parentChannelId: t });
}
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.default.getId();
    if (null == n) return !1;
    let r = m(n),
        a = r[e];
    if (null == a) return !1;
    delete a[t], i().isEmpty(a) && delete r[e];
}
function T() {
    let e = u.default.getId();
    if (null == e || d.A.totalUnavailableGuilds > 0) return;
    let t = m(e);
    for (let e in t) null == c.A.getChannel(e) && delete t[e];
}
function y() {
    let e = u.default.getId();
    return e in p || (p[e] = {}), T(), !1;
}
function S() {
    return T(), !1;
}
function v(e) {
    let {
            channel: { id: t },
        } = e,
        n = u.default.getId();
    if (null == n) return !1;
    let r = m(n);
    return delete r[t], !1;
}
function C(e) {
    let { channel: t } = e,
        n = u.default.getId();
    if (null == n || t.ownerId === n) return !1;
    let r = m(n),
        i = r[t.parent_id];
    if (null == i) return !1;
    let a = i[1];
    if (null == a || a.parentMessageId !== l.default.castChannelIdAsMessageId(t.id)) return !1;
    {
        let e = r[t.parent_id];
        if (null == e) return !1;
        let n = e[2]?.draft ?? "";
        "" !== n && (r[t.id] = { 0: { timestamp: Date.now(), draft: n } }), I(t.parent_id, 1), I(t.parent_id, 2);
    }
}
function b(e) {
    e.isSwitchingAccount || (p = {});
}
function N(e) {
    e.userId in p && delete p[e.userId];
}
function R() {
    for (let [e, t] of l.default.entries(p))
        for (let [n, r] of l.default.entries(t)) {
            let t = r[0];
            null != t && ("" === t.draft || "" === t.draft.trim()) && I(n, 0, e);
        }
}
class O extends a.Ay.PersistedStore {
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
                r = (n[t] = {});
            for (let t in e) r[t] = e[t];
            return n;
        },
    ];
    initialize(e) {
        (p = e ?? {}), R(), this.waitFor(u.default, c.A, d.A);
    }
    getState() {
        return p;
    }
    getThreadDraftWithParentMessageId(e) {
        let t = u.default.getId();
        if (null == t) return;
        let n = m(t),
            r = l.default.keys(n).find((t) => {
                let n = this.getThreadSettings(t);
                return n?.parentMessageId === e;
            });
        return null != r ? this.getThreadSettings(r) : void 0;
    }
    getRecentlyEditedDrafts(e) {
        let t = u.default.getId();
        if (null == t) return [];
        let n = m(t);
        return i()(n)
            .mapValues((t) => t?.[e])
            .pickBy(o.Vq)
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
        let n = u.default.getId();
        if (null == n) return "";
        let r = m(n)[e];
        if (null != r) {
            let e = r[t];
            if (null != e) return e.draft;
        }
        return "";
    }
    getThreadSettings(e) {
        let t = u.default.getId();
        if (null == t) return null;
        let n = m(t)[e];
        return null == n ? null : n[1];
    }
}
let D = new O(s.h, {
    CONNECTION_OPEN: y,
    LOGOUT: b,
    MULTI_ACCOUNT_REMOVE_ACCOUNT: N,
    GUILD_DELETE: S,
    CHANNEL_DELETE: v,
    THREAD_DELETE: v,
    THREAD_CREATE: C,
    DRAFT_SAVE: g,
    DRAFT_CHANGE: g,
    DRAFT_CLEAR: E,
    THREAD_SETTINGS_DRAFT_CHANGE: A,
});
