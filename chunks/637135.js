"use strict";
let i;
n.d(t, { A: () => W }), n(321073);
var r = n(17928),
    s = n(228366),
    a = n(450827),
    o = n(736056);
let l = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-05-frictionless-gdms",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function u() {
    return l.getConfig({ location: "PrivateChannelRecipientsInviteModal" }).enabled;
}
var c = n(427358),
    d = n(95701),
    _ = n(695184),
    f = n(240248),
    h = n(427262),
    p = n(734057),
    E = n(153488),
    m = n(205761),
    g = n(696451),
    A = n(71393),
    I = n(994500),
    T = n(287809),
    S = n(652215);
let N = !1,
    y = "",
    C = 0,
    v = [],
    O = !1,
    R = new Set(),
    b = null,
    D = new Set();
function L() {
    (y = ""), (C = 0), (v = []), (R = new Set()), (N = !1), (b = null);
}
function w(e) {
    (y = e), (C = 0), M();
}
function M() {
    let e, t, n;
    if (!N) return !1;
    let r = p.A.getChannel(b);
    if (0 === y.trim().length) {
        var s;
        let e, t, n, a;
        return (
            null != i && i.clearQuery(),
            (s = r),
            (e = T.default.getCurrentUser()),
            (t = u()),
            (n = [...I.A.getFriendIDs()]),
            e?.isStaff() &&
                (n = Array.from(
                    new Set([...n, ...T.default.filter((t) => t.isStaff() && t.id !== e.id, !1).map((e) => e.id)]),
                )),
            (a = null),
            t &&
                ((a = new Set(A.A.getGuildIds())),
                (n = Array.from(
                    new Set([
                        ...n,
                        ...c.A.getUserAffinities()
                            .map((e) => e.otherUserId)
                            .filter((e) => !I.A.isBlockedOrIgnored(e))
                            .filter((e) => !I.A.isFriend(e))
                            .filter((e) => D.has(e)),
                    ]),
                ))),
            s?.isGroupDM() && (n = n.filter((e) => !s.recipients.includes(e))),
            (v = n
                .reduce((n, i) => {
                    let r = T.default.getUser(i);
                    if (null == r || r.isProvisional || (r.bot && !(r.isStaff() && e?.isStaff()))) return n;
                    let s = { user: r, comparator: h.Ay.getName(r) };
                    if (t && null != a && !I.A.isFriend(r.id)) {
                        let t = U(r.id, a);
                        if (0 === t.length && !(r.isStaff() && e?.isStaff())) return n;
                        t.length > 0 && (s.mutualGuilds = t);
                    }
                    return n.push(s), n;
                }, [])
                .sort(x)),
            !0
        );
    }
    let a = T.default.getCurrentUser(),
        o = a?.isStaff() ?? !1,
        l = u();
    l && _.A.requestMembers(null, y);
    let f = null != r ? r.recipients : [];
    return (
        null != i &&
            i.setQuery({
                query: y,
                filters: l ? void 0 : { friends: !0, staff: o, provisional: !1 },
                blacklist: f,
                boosters:
                    ((t = Math.max(
                        ...(e = m.A.getFrequentlyWithoutFetchingLatest().filter(
                            (e) => e instanceof d.cq && e.isDM(),
                        )).map((e) => {
                            let { id: t } = e;
                            return m.A.getScoreWithoutFetchingLatest(t);
                        }),
                    )),
                    (n = {}),
                    e.forEach((e) => {
                        let i = m.A.getScoreWithoutFetchingLatest(e.id),
                            r = e.getRecipientId(),
                            s = 0.2 * !!I.A.isFriend(r),
                            a = 0.1 * (null != p.A.getDMFromUserId(r));
                        n[r] = 1 + i / t + s + a;
                    }),
                    n),
            }),
        !1
    );
}
function P() {
    if (!N) return !1;
    let e = O;
    return (O = I.A.getFriendCount() > 0) !== e;
}
function x(e, t) {
    if (E.A.hasConsented(S.YAq.PERSONALIZATION)) {
        let n = c.A.getUserAffinity(e.user.id)?.communicationProbability ?? 0,
            i = c.A.getUserAffinity(t.user.id)?.communicationProbability ?? 0;
        if (n !== i) return i - n;
    }
    return (0, f.sS)(h.Ay.getName(e.user).toLocaleLowerCase()).localeCompare(
        (0, f.sS)(h.Ay.getName(t.user).toLocaleLowerCase()),
    );
}
function U(e, t) {
    let n = [];
    for (let i of t) {
        if (!g.Ay.isMember(i, e)) continue;
        let t = A.A.getGuild(i);
        null != t && n.push(t);
    }
    return n;
}
function k(e) {
    let { results: t } = e;
    if (!N || "" === y) return;
    let n = T.default.getCurrentUser(),
        i = u(),
        r = i ? new Set(A.A.getGuildIds()) : null,
        s = [];
    for (let { id: e, comparator: a } of t) {
        let t = T.default.getUser(e);
        if (null == t || t.isProvisional || (t.bot && !(t.isStaff() && n?.isStaff()))) continue;
        let o = { user: t, comparator: a };
        if (i && null != r && !I.A.isFriend(t.id)) {
            let e = U(t.id, r);
            if (0 === e.length && !(t.isStaff() && n?.isStaff())) continue;
            e.length > 0 && (o.mutualGuilds = e);
        }
        s.push(o);
    }
    (v = s), Y.emitChange();
}
function G() {
    return null != i && (i.destroy(), (i = null)), a.A.getUserSearchContext(k, 1e3);
}
function F(e) {
    if (e.key !== S.TLS) return !1;
    (N = !0), P(), (i = G()), (b = null), w("");
}
function V(e) {
    if (e.key !== S.TLS) return !1;
    B();
}
function B() {
    null != i && (i.destroy(), (i = null)), (D = new Set()), L();
}
function H() {
    return !!N && !!u() && M();
}
class j extends r.Ay.Store {
    static displayName = "PrivateChannelRecipientsInviteStore";
    initialize() {
        this.waitFor(p.A, E.A, o.A, m.A, g.Ay, A.A, I.A, c.A, T.default),
            this.syncWith([T.default, p.A], M),
            this.syncWith([c.A], H),
            this.syncWith([I.A], P);
    }
    getResults() {
        return v;
    }
    hasFriends() {
        return O;
    }
    getSelectedUsers() {
        return R;
    }
    getQuery() {
        return y;
    }
    getState() {
        return { query: y, selectedRow: C, selectedUsers: R, results: v, hasFriends: O };
    }
}
let Y = new j(s.h, {
        CONNECTION_OPEN: function () {
            L(), (D = new Set());
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            let { guilds: t } = e;
            if (!N || !u()) return !1;
            for (let e of t) for (let t of e.members) D.add(t.user.id);
            return !1;
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            if (!N || !u()) return !1;
            for (let e of t.members) D.add(e.user.id);
            return !1;
        },
        GUILD_MEMBER_ADD: function (e) {
            let { user: t } = e;
            return !!N && !!u() && (D.add(t.id), !1);
        },
        GUILD_MEMBER_REMOVE: function (e) {
            let { user: t } = e;
            return !!N && !!u() && 0 === g.Ay.memberOf(t.id).length && (D.delete(t.id), !1);
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
            let { chunks: t } = e;
            if (!N || !u()) return !1;
            for (let e of t) for (let t of e.members) D.add(t.user.id);
            return !1;
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let i = N;
            return L(), (N = i), (b = n), M();
        },
        MODAL_PUSH: F,
        SHOW_ACTION_SHEET: F,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (N = !0),
                (function () {
                    if (((D = new Set()), !u())) return;
                    let e = g.Ay.getMutableAllGuildsAndMembers();
                    for (let t in e) for (let n in e[t]) D.add(n);
                })(),
                P(),
                (i = G()),
                (b = e.channelId),
                w("");
        },
        MODAL_POP: V,
        HIDE_ACTION_SHEET: V,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: B,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            (b = e.channelId), w(e.query);
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            C = e.row;
        },
        PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function (e) {
            let { userId: t } = e;
            R.add(t), (R = new Set(R));
        },
        PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function (e) {
            let { userId: t } = e;
            R.delete(t), (R = new Set(R));
        },
    }),
    W = Y;
