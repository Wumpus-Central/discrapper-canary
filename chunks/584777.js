"use strict";
let i;
n.d(t, { A: () => Y }), n(321073);
var r = n(17928),
    s = n(228366),
    a = n(450827),
    o = n(736056),
    l = n(18707),
    u = n(427358),
    c = n(95701),
    d = n(695184),
    _ = n(240248),
    f = n(427262),
    h = n(734057),
    p = n(153488),
    E = n(205761),
    m = n(696451),
    g = n(71393),
    A = n(994500),
    I = n(287809),
    T = n(652215);
let S = !1,
    N = "",
    y = 0,
    C = [],
    v = !1,
    O = new Set(),
    R = null,
    b = new Set();
function D() {
    (N = ""), (y = 0), (C = []), (O = new Set()), (S = !1), (R = null);
}
function L(e) {
    (N = e), (y = 0), w();
}
function w() {
    let e, t, n;
    if (!S) return !1;
    let r = h.A.getChannel(R);
    if (0 === N.trim().length) {
        var s;
        let e, t, n, a;
        return (
            null != i && i.clearQuery(),
            (s = r),
            (e = I.default.getCurrentUser()),
            (t = (0, l.G)()),
            (n = [...A.A.getFriendIDs()]),
            e?.isStaff() &&
                (n = Array.from(
                    new Set([...n, ...I.default.filter((t) => t.isStaff() && t.id !== e.id, !1).map((e) => e.id)]),
                )),
            (a = null),
            t &&
                ((a = new Set(g.A.getGuildIds())),
                (n = Array.from(
                    new Set([
                        ...n,
                        ...u.A.getUserAffinities()
                            .map((e) => e.otherUserId)
                            .filter((e) => !A.A.isBlockedOrIgnored(e))
                            .filter((e) => !A.A.isFriend(e))
                            .filter((e) => b.has(e)),
                    ]),
                ))),
            s?.isGroupDM() && (n = n.filter((e) => !s.recipients.includes(e))),
            (C = n
                .reduce((n, i) => {
                    let r = I.default.getUser(i);
                    if (null == r || r.isProvisional || (r.bot && !(r.isStaff() && e?.isStaff()))) return n;
                    let s = { user: r, comparator: f.Ay.getName(r) };
                    if (t && null != a && !A.A.isFriend(r.id)) {
                        let t = x(r.id, a);
                        if (0 === t.length && !(r.isStaff() && e?.isStaff())) return n;
                        t.length > 0 && (s.mutualGuilds = t);
                    }
                    return n.push(s), n;
                }, [])
                .sort(P)),
            !0
        );
    }
    let a = I.default.getCurrentUser(),
        o = a?.isStaff() ?? !1,
        _ = (0, l.G)();
    _ && d.A.requestMembers(null, N);
    let p = null != r ? r.recipients : [];
    return (
        null != i &&
            i.setQuery({
                query: N,
                filters: _ ? void 0 : { friends: !0, staff: o, provisional: !1 },
                blacklist: p,
                boosters:
                    ((t = Math.max(
                        ...(e = E.A.getFrequentlyWithoutFetchingLatest().filter(
                            (e) => e instanceof c.cq && e.isDM(),
                        )).map((e) => {
                            let { id: t } = e;
                            return E.A.getScoreWithoutFetchingLatest(t);
                        }),
                    )),
                    (n = {}),
                    e.forEach((e) => {
                        let i = E.A.getScoreWithoutFetchingLatest(e.id),
                            r = e.getRecipientId(),
                            s = 0.2 * !!A.A.isFriend(r),
                            a = 0.1 * (null != h.A.getDMFromUserId(r));
                        n[r] = 1 + i / t + s + a;
                    }),
                    n),
            }),
        !1
    );
}
function M() {
    if (!S) return !1;
    let e = v;
    return (v = A.A.getFriendCount() > 0) !== e;
}
function P(e, t) {
    if (p.A.hasConsented(T.YAq.PERSONALIZATION)) {
        let n = u.A.getUserAffinity(e.user.id)?.communicationProbability ?? 0,
            i = u.A.getUserAffinity(t.user.id)?.communicationProbability ?? 0;
        if (n !== i) return i - n;
    }
    return (0, _.sS)(f.Ay.getName(e.user).toLocaleLowerCase()).localeCompare(
        (0, _.sS)(f.Ay.getName(t.user).toLocaleLowerCase()),
    );
}
function x(e, t) {
    let n = [];
    for (let i of t) {
        if (!m.Ay.isMember(i, e)) continue;
        let t = g.A.getGuild(i);
        null != t && n.push(t);
    }
    return n;
}
function U(e) {
    let { results: t } = e;
    if (!S || "" === N) return;
    let n = I.default.getCurrentUser(),
        i = (0, l.G)(),
        r = i ? new Set(g.A.getGuildIds()) : null,
        s = [];
    for (let { id: e, comparator: a } of t) {
        let t = I.default.getUser(e);
        if (null == t || t.isProvisional || (t.bot && !(t.isStaff() && n?.isStaff()))) continue;
        let o = { user: t, comparator: a };
        if (i && null != r && !A.A.isFriend(t.id)) {
            let e = x(t.id, r);
            if (0 === e.length && !(t.isStaff() && n?.isStaff())) continue;
            e.length > 0 && (o.mutualGuilds = e);
        }
        s.push(o);
    }
    (C = s), j.emitChange();
}
function k() {
    return null != i && (i.destroy(), (i = null)), a.A.getUserSearchContext(U, 1e3);
}
function G(e) {
    if (e.key !== T.TLS) return !1;
    (S = !0), M(), (i = k()), (R = null), L("");
}
function F(e) {
    if (e.key !== T.TLS) return !1;
    V();
}
function V() {
    null != i && (i.destroy(), (i = null)), (b = new Set()), D();
}
function B() {
    return !!S && !!(0, l.G)() && w();
}
class H extends r.Ay.Store {
    static displayName = "PrivateChannelRecipientsInviteStore";
    initialize() {
        this.waitFor(h.A, p.A, o.A, E.A, m.Ay, g.A, A.A, u.A, I.default),
            this.syncWith([I.default, h.A], w),
            this.syncWith([u.A], B),
            this.syncWith([A.A], M);
    }
    getResults() {
        return C;
    }
    hasFriends() {
        return v;
    }
    getSelectedUsers() {
        return O;
    }
    getQuery() {
        return N;
    }
    getState() {
        return { query: N, selectedRow: y, selectedUsers: O, results: C, hasFriends: v };
    }
}
let j = new H(s.h, {
        CONNECTION_OPEN: function () {
            D(), (b = new Set());
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            let { guilds: t } = e;
            if (!S || !(0, l.G)()) return !1;
            for (let e of t) for (let t of e.members) b.add(t.user.id);
            return !1;
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            if (!S || !(0, l.G)()) return !1;
            for (let e of t.members) b.add(e.user.id);
            return !1;
        },
        GUILD_MEMBER_ADD: function (e) {
            let { user: t } = e;
            return !!S && !!(0, l.G)() && (b.add(t.id), !1);
        },
        GUILD_MEMBER_REMOVE: function (e) {
            let { user: t } = e;
            return !!S && !!(0, l.G)() && 0 === m.Ay.memberOf(t.id).length && (b.delete(t.id), !1);
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
            let { chunks: t } = e;
            if (!S || !(0, l.G)()) return !1;
            for (let e of t) for (let t of e.members) b.add(t.user.id);
            return !1;
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let i = S;
            return D(), (S = i), (R = n), w();
        },
        MODAL_PUSH: G,
        SHOW_ACTION_SHEET: G,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (S = !0),
                (function () {
                    if (((b = new Set()), !(0, l.G)())) return;
                    let e = m.Ay.getMutableAllGuildsAndMembers();
                    for (let t in e) for (let n in e[t]) b.add(n);
                })(),
                M(),
                (i = k()),
                (R = e.channelId),
                L("");
        },
        MODAL_POP: F,
        HIDE_ACTION_SHEET: F,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: V,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            (R = e.channelId), L(e.query);
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            y = e.row;
        },
        PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function (e) {
            let { userId: t } = e;
            O.add(t), (O = new Set(O));
        },
        PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function (e) {
            let { userId: t } = e;
            O.delete(t), (O = new Set(O));
        },
    }),
    Y = j;
