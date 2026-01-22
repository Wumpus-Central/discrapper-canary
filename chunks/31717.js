n.d(t, {
    A: () => j,
    C: () => E,
}),
    n(896048),
    n(733351);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(73153),
    l = n(403362),
    c = n(661191),
    u = n(961350),
    d = n(734057),
    f = n(919638);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = n(652215).CS1 + 500;
var E = (function (e) {
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
let b = {};
function y(e) {
    return e.length > g && (e = e.substr(0, g)), e;
}
function O(e) {
    let t = b[e];
    return null == t && (t = b[e] = {}), t;
}
function A(e) {
    let { type: t, channelId: n, draft: r, draftType: i } = e,
        a = d.A.getChannel(n);
    r === (null == a ? void 0 : a.template) && (r = "");
    let s = u.default.getId();
    if (null != s && null != r && "" !== r) {
        var o;
        let e = O(s),
            t = e[n];
        null == t && (t = e[n] = {}),
            (r = y(r)) !== (null == (o = t[i]) ? void 0 : o.draft) &&
                (t[i] = {
                    timestamp: Date.now(),
                    draft: r,
                });
    } else I(n, i);
    return "DRAFT_SAVE" === t;
}
function v(e) {
    let { channelId: t, draftType: n } = e;
    return I(t, n);
}
function S(e) {
    let { channelId: t, draft: n } = e,
        r = u.default.getId();
    if (null == r) return;
    let i = O(r),
        a = i[t];
    null == a && (a = i[t] = {}), (a[1] = m(_({ timestamp: Date.now() }, a[1], n), { parentChannelId: t }));
}
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.default.getId();
    if (null == n) return !1;
    let r = O(n),
        i = r[e];
    if (null == i) return !1;
    delete i[t], a().isEmpty(i) && delete r[e];
}
function T() {
    let e = u.default.getId();
    if (null == e || f.A.totalUnavailableGuilds > 0) return;
    let t = O(e);
    for (let e in t) null == d.A.getChannel(e) && delete t[e];
}
function C() {
    let e = u.default.getId();
    return e in b || (b[e] = {}), T(), !1;
}
function N() {
    return T(), !1;
}
function R(e) {
    let {
            channel: { id: t },
        } = e,
        n = u.default.getId();
    if (null == n) return !1;
    let r = O(n);
    return delete r[t], !1;
}
function w(e) {
    let { channel: t } = e,
        n = u.default.getId();
    if (null == n || t.ownerId === n) return !1;
    let r = O(n),
        i = r[t.parent_id];
    if (null == i) return !1;
    let a = i[1];
    if (null == a || a.parentMessageId !== c.default.castChannelIdAsMessageId(t.id)) return !1;
    {
        var s, o;
        let e = r[t.parent_id];
        if (null == e) return !1;
        let n = null != (s = null == (o = e[2]) ? void 0 : o.draft) ? s : "";
        "" !== n &&
            (r[t.id] = {
                0: {
                    timestamp: Date.now(),
                    draft: n,
                },
            }),
            I(t.parent_id, 1),
            I(t.parent_id, 2);
    }
}
function P(e) {
    e.isSwitchingAccount || (b = {});
}
function D(e) {
    e.userId in b && delete b[e.userId];
}
function x() {
    for (let [e, t] of c.default.entries(b))
        for (let [n, r] of c.default.entries(t)) {
            let t = r[0];
            null != t && ("" === t.draft || "" === t.draft.trim()) && I(n, 0, e);
        }
}
class L extends (r = s.Ay.PersistedStore) {
    initialize(e) {
        (b = null != e ? e : {}), x(), this.waitFor(u.default, d.A, f.A);
    }
    getState() {
        return b;
    }
    getThreadDraftWithParentMessageId(e) {
        let t = u.default.getId();
        if (null == t) return;
        let n = O(t),
            r = c.default.keys(n).find((t) => {
                let n = this.getThreadSettings(t);
                return (null == n ? void 0 : n.parentMessageId) === e;
            });
        return null != r ? this.getThreadSettings(r) : void 0;
    }
    getRecentlyEditedDrafts(e) {
        let t = u.default.getId();
        if (null == t) return [];
        let n = O(t);
        return a()(n)
            .mapValues((t) => (null == t ? void 0 : t[e]))
            .pickBy(l.Vq)
            .toPairs()
            .map((e) => {
                let [t, { timestamp: n, draft: r }] = e;
                return {
                    channelId: t,
                    timestamp: n,
                    draft: r,
                };
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
        let r = O(n)[e];
        if (null != r) {
            let e = r[t];
            if (null != e) return e.draft;
        }
        return "";
    }
    getThreadSettings(e) {
        let t = u.default.getId();
        if (null == t) return null;
        let n = O(t)[e];
        return null == n ? null : n[1];
    }
}
p(L, "displayName", "DraftStore"),
    p(L, "persistKey", "DraftStore"),
    p(L, "migrations", [
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
    ]);
let j = new L(o.h, {
    CONNECTION_OPEN: C,
    LOGOUT: P,
    MULTI_ACCOUNT_REMOVE_ACCOUNT: D,
    GUILD_DELETE: N,
    CHANNEL_DELETE: R,
    THREAD_DELETE: R,
    THREAD_CREATE: w,
    DRAFT_SAVE: A,
    DRAFT_CHANGE: A,
    DRAFT_CLEAR: v,
    THREAD_SETTINGS_DRAFT_CHANGE: S,
});
