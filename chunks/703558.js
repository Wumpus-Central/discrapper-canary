n.d(t, {
    Z: () => M,
    d: () => E
}),
    n(47120),
    n(566702);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(823379),
    c = n(709054),
    u = n(314897),
    d = n(592125),
    f = n(486472);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
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
let g = n(981631).en1 + 500;
var E = (function (e) {
    return (e[(e.ChannelMessage = 0)] = 'ChannelMessage'), (e[(e.ThreadSettings = 1)] = 'ThreadSettings'), (e[(e.FirstThreadMessage = 2)] = 'FirstThreadMessage'), (e[(e.ApplicationLauncherCommand = 3)] = 'ApplicationLauncherCommand'), (e[(e.Poll = 4)] = 'Poll'), (e[(e.SlashCommand = 5)] = 'SlashCommand'), (e[(e.ForwardContextMessage = 6)] = 'ForwardContextMessage'), e;
})({});
let b = {};
function y(e) {
    return e.length > g && (e = e.substr(0, g)), e;
}
function v(e) {
    let t = b[e];
    return null == t && (t = b[e] = {}), t;
}
function O(e) {
    let { type: t, channelId: n, draft: r, draftType: i } = e,
        o = d.Z.getChannel(n);
    r === (null == o ? void 0 : o.template) && (r = '');
    let a = u.default.getId();
    if (null != a && null != r && '' !== r) {
        var s;
        let e = v(a),
            t = e[n];
        if ((null == t && (t = e[n] = {}), (r = y(r)) === (null == (s = t[i]) ? void 0 : s.draft))) return !1;
        t[i] = {
            timestamp: Date.now(),
            draft: r
        };
    } else T(n, i);
    return 'DRAFT_SAVE' === t;
}
function I(e) {
    let { channelId: t, draftType: n } = e;
    return T(t, n);
}
function S(e) {
    let { channelId: t, draft: n } = e,
        r = u.default.getId();
    if (null == r) return;
    let i = v(r),
        o = i[t];
    null == o && (o = i[t] = {}), (o[1] = m(p({ timestamp: Date.now() }, o[1], n), { parentChannelId: t }));
}
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.default.getId();
    if (null == n) return !1;
    let r = v(n),
        i = r[e];
    if (null == i) return !1;
    delete i[t], o().isEmpty(i) && delete r[e];
}
function N() {
    let e = u.default.getId();
    if (null == e || f.Z.totalUnavailableGuilds > 0) return;
    let t = v(e);
    for (let e in t) null == d.Z.getChannel(e) && delete t[e];
}
function A() {
    let e = u.default.getId();
    return e in b || (b[e] = {}), N(), !1;
}
function C() {
    return N(), !1;
}
function R(e) {
    let {
            channel: { id: t }
        } = e,
        n = u.default.getId();
    if (null == n) return !1;
    let r = v(n);
    return delete r[t], !1;
}
function P(e) {
    let { channel: t } = e,
        n = u.default.getId();
    if (null == n || t.ownerId === n) return !1;
    let r = v(n),
        i = r[t.parent_id];
    if (null == i) return !1;
    let o = i[1];
    if (null == o || o.parentMessageId !== c.default.castChannelIdAsMessageId(t.id)) return !1;
    {
        var a, s;
        let e = r[t.parent_id];
        if (null == e) return !1;
        let n = null != (s = null == (a = e[2]) ? void 0 : a.draft) ? s : '';
        '' !== n &&
            (r[t.id] = {
                0: {
                    timestamp: Date.now(),
                    draft: n
                }
            }),
            T(t.parent_id, 1),
            T(t.parent_id, 2);
    }
}
function w(e) {
    e.isSwitchingAccount || (b = {});
}
function D(e) {
    e.userId in b && delete b[e.userId];
}
function L() {
    for (let [e, t] of c.default.entries(b))
        for (let [n, r] of c.default.entries(t)) {
            let t = r[0];
            null != t && ('' === t.draft || '' === t.draft.trim()) && T(n, 0, e);
        }
}
class x extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        (b = null != e ? e : {}), L(), this.waitFor(u.default, d.Z, f.Z);
    }
    getState() {
        return b;
    }
    getThreadDraftWithParentMessageId(e) {
        let t = u.default.getId();
        if (null == t) return;
        let n = v(t),
            r = c.default.keys(n).find((t) => {
                let n = this.getThreadSettings(t);
                return (null == n ? void 0 : n.parentMessageId) === e;
            });
        return null != r ? this.getThreadSettings(r) : void 0;
    }
    getRecentlyEditedDrafts(e) {
        let t = u.default.getId();
        if (null == t) return [];
        let n = v(t);
        return o()(n)
            .mapValues((t) => (null == t ? void 0 : t[e]))
            .pickBy(l.lm)
            .toPairs()
            .map((e) => {
                let [t, { timestamp: n, draft: r }] = e;
                return {
                    channelId: t,
                    timestamp: n,
                    draft: r
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
        if (null == n) return '';
        let r = v(n)[e];
        if (null != r) {
            let e = r[t];
            if (null != e) return e.draft;
        }
        return '';
    }
    getThreadSettings(e) {
        let t = u.default.getId();
        if (null == t) return null;
        let n = v(t)[e];
        return null == n ? null : n[1];
    }
}
_(x, 'displayName', 'DraftStore'),
    _(x, 'persistKey', 'DraftStore'),
    _(x, 'migrations', [
        (e) => {
            if (null == e) return {};
            for (let t in e) 'timestamp' in e[t] && (e[t] = { 0: e[t] });
            return e;
        },
        (e) => {
            let t = u.default.getId();
            if (null == e || null == t) return {};
            let n = {},
                r = (n[t] = {});
            for (let t in e) r[t] = e[t];
            return n;
        }
    ]);
let M = new x(s.Z, {
    CONNECTION_OPEN: A,
    LOGOUT: w,
    MULTI_ACCOUNT_REMOVE_ACCOUNT: D,
    GUILD_DELETE: C,
    CHANNEL_DELETE: R,
    THREAD_DELETE: R,
    THREAD_CREATE: P,
    DRAFT_SAVE: O,
    DRAFT_CHANGE: O,
    DRAFT_CLEAR: I,
    THREAD_SETTINGS_DRAFT_CHANGE: S
});
