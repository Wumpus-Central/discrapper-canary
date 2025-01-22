r.d(n, {
    d: function () {
        return i;
    }
});
var i,
    a,
    o = r(47120);
var s = r(392711),
    l = r.n(s),
    u = r(442837),
    c = r(570140),
    d = r(823379),
    f = r(709054),
    p = r(314897),
    h = r(592125),
    _ = r(486472);
function m(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let g = r(981631).en1 + 500;
!(function (e) {
    (e[(e.ChannelMessage = 0)] = 'ChannelMessage'), (e[(e.ThreadSettings = 1)] = 'ThreadSettings'), (e[(e.FirstThreadMessage = 2)] = 'FirstThreadMessage'), (e[(e.ApplicationLauncherCommand = 3)] = 'ApplicationLauncherCommand'), (e[(e.Poll = 4)] = 'Poll'), (e[(e.SlashCommand = 5)] = 'SlashCommand'), (e[(e.ForwardContextMessage = 6)] = 'ForwardContextMessage');
})(i || (i = {}));
let E = {};
function v(e) {
    return e.length > g && (e = e.substr(0, g)), e;
}
function y(e) {
    let n = E[e];
    return null == n && (n = E[e] = {}), n;
}
function b(e) {
    let { type: n, channelId: r, draft: i, draftType: a } = e,
        o = h.Z.getChannel(r);
    i === (null == o ? void 0 : o.template) && (i = '');
    let s = p.default.getId();
    if (null != s && null != i && '' !== i) {
        var l;
        let e = y(s),
            n = e[r];
        if ((null == n && (n = e[r] = {}), (i = v(i)) === (null === (l = n[a]) || void 0 === l ? void 0 : l.draft))) return !1;
        n[a] = {
            timestamp: Date.now(),
            draft: i
        };
    } else S(r, a);
    return 'DRAFT_SAVE' === n;
}
function I(e) {
    let { channelId: n, draftType: r } = e;
    return S(n, r);
}
function T(e) {
    let { channelId: n, draft: r } = e,
        i = p.default.getId();
    if (null == i) return;
    let a = y(i),
        o = a[n];
    null == o && (o = a[n] = {}),
        (o[1] = {
            timestamp: Date.now(),
            ...o[1],
            ...r,
            parentChannelId: n
        });
}
function S(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.default.getId();
    if (null == r) return !1;
    let i = y(r),
        a = i[e];
    if (null == a) return !1;
    delete a[n], l().isEmpty(a) && delete i[e];
}
function A() {
    let e = p.default.getId();
    if (null == e || _.Z.totalUnavailableGuilds > 0) return;
    let n = y(e);
    for (let e in n) null == h.Z.getChannel(e) && delete n[e];
}
function C() {
    let e = p.default.getId();
    return !(e in E) && (E[e] = {}), A(), !1;
}
function N() {
    return A(), !1;
}
function R(e) {
    let {
            channel: { id: n }
        } = e,
        r = p.default.getId();
    if (null == r) return !1;
    let i = y(r);
    return delete i[n], !1;
}
function O(e) {
    let { channel: n } = e,
        r = p.default.getId();
    if (null == r || n.ownerId === r) return !1;
    let i = y(r),
        a = i[n.parent_id];
    if (null == a) return !1;
    let o = a[1];
    if (null == o) return !1;
    if (o.parentMessageId !== f.default.castChannelIdAsMessageId(n.id)) return !1;
    {
        var s, l;
        let e = i[n.parent_id];
        if (null == e) return !1;
        let r = null !== (l = null === (s = e[2]) || void 0 === s ? void 0 : s.draft) && void 0 !== l ? l : '';
        '' !== r &&
            (i[n.id] = {
                0: {
                    timestamp: Date.now(),
                    draft: r
                }
            }),
            S(n.parent_id, 1),
            S(n.parent_id, 2);
    }
}
function D(e) {
    !e.isSwitchingAccount && (E = {});
}
function x(e) {
    e.userId in E && delete E[e.userId];
}
function L() {
    for (let [e, n] of f.default.entries(E))
        for (let [r, i] of f.default.entries(n)) {
            let n = i[0];
            null != n && ('' === n.draft || '' === n.draft.trim()) && S(r, 0, e);
        }
}
class w extends (a = u.ZP.PersistedStore) {
    initialize(e) {
        (E = null != e ? e : {}), L(), this.waitFor(p.default, h.Z, _.Z);
    }
    getState() {
        return E;
    }
    getThreadDraftWithParentMessageId(e) {
        let n = p.default.getId();
        if (null == n) return;
        let r = y(n),
            i = f.default.keys(r).find((n) => {
                let r = this.getThreadSettings(n);
                return (null == r ? void 0 : r.parentMessageId) === e;
            });
        return null != i ? this.getThreadSettings(i) : void 0;
    }
    getRecentlyEditedDrafts(e) {
        let n = p.default.getId();
        if (null == n) return [];
        let r = y(n);
        return l()(r)
            .mapValues((n) => (null == n ? void 0 : n[e]))
            .pickBy(d.lm)
            .toPairs()
            .map((e) => {
                let [n, { timestamp: r, draft: i }] = e;
                return {
                    channelId: n,
                    timestamp: r,
                    draft: i
                };
            })
            .sortBy((e) => {
                let { timestamp: n } = e;
                return -n;
            })
            .value();
    }
    getDraft(e, n) {
        let r = p.default.getId();
        if (null == r) return '';
        let i = y(r)[e];
        if (null != i) {
            let e = i[n];
            if (null != e) return e.draft;
        }
        return '';
    }
    getThreadSettings(e) {
        let n = p.default.getId();
        if (null == n) return null;
        let r = y(n)[e];
        return null == r ? null : r[1];
    }
}
m(w, 'displayName', 'DraftStore'),
    m(w, 'persistKey', 'DraftStore'),
    m(w, 'migrations', [
        (e) => {
            if (null == e) return {};
            for (let n in e) 'timestamp' in e[n] && (e[n] = { 0: e[n] });
            return e;
        },
        (e) => {
            let n = p.default.getId();
            if (null == e || null == n) return {};
            let r = {},
                i = (r[n] = {});
            for (let n in e) i[n] = e[n];
            return r;
        }
    ]),
    (n.Z = new w(c.Z, {
        CONNECTION_OPEN: C,
        LOGOUT: D,
        MULTI_ACCOUNT_REMOVE_ACCOUNT: x,
        GUILD_DELETE: N,
        CHANNEL_DELETE: R,
        THREAD_DELETE: R,
        THREAD_CREATE: O,
        DRAFT_SAVE: b,
        DRAFT_CHANGE: b,
        DRAFT_CLEAR: I,
        THREAD_SETTINGS_DRAFT_CHANGE: T
    }));
