n.d(t, {
    Z: () => L,
    d: () => h
}),
    n(47120);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(823379),
    u = n(709054),
    c = n(314897),
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
let p = n(981631).en1 + 500;
var h = (function (e) {
    return (e[(e.ChannelMessage = 0)] = 'ChannelMessage'), (e[(e.ThreadSettings = 1)] = 'ThreadSettings'), (e[(e.FirstThreadMessage = 2)] = 'FirstThreadMessage'), (e[(e.ApplicationLauncherCommand = 3)] = 'ApplicationLauncherCommand'), (e[(e.Poll = 4)] = 'Poll'), (e[(e.SlashCommand = 5)] = 'SlashCommand'), (e[(e.ForwardContextMessage = 6)] = 'ForwardContextMessage'), e;
})({});
let m = {};
function g(e) {
    return e.length > p && (e = e.substr(0, p)), e;
}
function E(e) {
    let t = m[e];
    return null == t && (t = m[e] = {}), t;
}
function v(e) {
    let { type: t, channelId: n, draft: i, draftType: r } = e,
        a = d.Z.getChannel(n);
    i === (null == a ? void 0 : a.template) && (i = '');
    let s = c.default.getId();
    if (null != s && null != i && '' !== i) {
        var o;
        let e = E(s),
            t = e[n];
        if ((null == t && (t = e[n] = {}), (i = g(i)) === (null === (o = t[r]) || void 0 === o ? void 0 : o.draft))) return !1;
        t[r] = {
            timestamp: Date.now(),
            draft: i
        };
    } else b(n, r);
    return 'DRAFT_SAVE' === t;
}
function y(e) {
    let { channelId: t, draftType: n } = e;
    return b(t, n);
}
function I(e) {
    let { channelId: t, draft: n } = e,
        i = c.default.getId();
    if (null == i) return;
    let r = E(i),
        a = r[t];
    null == a && (a = r[t] = {}),
        (a[1] = {
            timestamp: Date.now(),
            ...a[1],
            ...n,
            parentChannelId: t
        });
}
function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.default.getId();
    if (null == n) return !1;
    let i = E(n),
        r = i[e];
    if (null == r) return !1;
    delete r[t], a().isEmpty(r) && delete i[e];
}
function T() {
    let e = c.default.getId();
    if (null == e || f.Z.totalUnavailableGuilds > 0) return;
    let t = E(e);
    for (let e in t) null == d.Z.getChannel(e) && delete t[e];
}
function S() {
    let e = c.default.getId();
    return e in m || (m[e] = {}), T(), !1;
}
function A() {
    return T(), !1;
}
function N(e) {
    let {
            channel: { id: t }
        } = e,
        n = c.default.getId();
    if (null == n) return !1;
    let i = E(n);
    return delete i[t], !1;
}
function C(e) {
    let { channel: t } = e,
        n = c.default.getId();
    if (null == n || t.ownerId === n) return !1;
    let i = E(n),
        r = i[t.parent_id];
    if (null == r) return !1;
    let a = r[1];
    if (null == a || a.parentMessageId !== u.default.castChannelIdAsMessageId(t.id)) return !1;
    {
        var s, o;
        let e = i[t.parent_id];
        if (null == e) return !1;
        let n = null !== (o = null === (s = e[2]) || void 0 === s ? void 0 : s.draft) && void 0 !== o ? o : '';
        '' !== n &&
            (i[t.id] = {
                0: {
                    timestamp: Date.now(),
                    draft: n
                }
            }),
            b(t.parent_id, 1),
            b(t.parent_id, 2);
    }
}
function R(e) {
    e.isSwitchingAccount || (m = {});
}
function O(e) {
    e.userId in m && delete m[e.userId];
}
function D() {
    for (let [e, t] of u.default.entries(m))
        for (let [n, i] of u.default.entries(t)) {
            let t = i[0];
            null != t && ('' === t.draft || '' === t.draft.trim()) && b(n, 0, e);
        }
}
class x extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        (m = null != e ? e : {}), D(), this.waitFor(c.default, d.Z, f.Z);
    }
    getState() {
        return m;
    }
    getThreadDraftWithParentMessageId(e) {
        let t = c.default.getId();
        if (null == t) return;
        let n = E(t),
            i = u.default.keys(n).find((t) => {
                let n = this.getThreadSettings(t);
                return (null == n ? void 0 : n.parentMessageId) === e;
            });
        return null != i ? this.getThreadSettings(i) : void 0;
    }
    getRecentlyEditedDrafts(e) {
        let t = c.default.getId();
        if (null == t) return [];
        let n = E(t);
        return a()(n)
            .mapValues((t) => (null == t ? void 0 : t[e]))
            .pickBy(l.lm)
            .toPairs()
            .map((e) => {
                let [t, { timestamp: n, draft: i }] = e;
                return {
                    channelId: t,
                    timestamp: n,
                    draft: i
                };
            })
            .sortBy((e) => {
                let { timestamp: t } = e;
                return -t;
            })
            .value();
    }
    getDraft(e, t) {
        let n = c.default.getId();
        if (null == n) return '';
        let i = E(n)[e];
        if (null != i) {
            let e = i[t];
            if (null != e) return e.draft;
        }
        return '';
    }
    getThreadSettings(e) {
        let t = c.default.getId();
        if (null == t) return null;
        let n = E(t)[e];
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
            let t = c.default.getId();
            if (null == e || null == t) return {};
            let n = {},
                i = (n[t] = {});
            for (let t in e) i[t] = e[t];
            return n;
        }
    ]);
let L = new x(o.Z, {
    CONNECTION_OPEN: S,
    LOGOUT: R,
    MULTI_ACCOUNT_REMOVE_ACCOUNT: O,
    GUILD_DELETE: A,
    CHANNEL_DELETE: N,
    THREAD_DELETE: N,
    THREAD_CREATE: C,
    DRAFT_SAVE: v,
    DRAFT_CHANGE: v,
    DRAFT_CLEAR: y,
    THREAD_SETTINGS_DRAFT_CHANGE: I
});
