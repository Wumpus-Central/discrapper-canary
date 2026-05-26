"use strict";
let i;
n.d(t, { A: () => K }), n(321073);
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
    O = !1,
    R = new Set(),
    b = null,
    D = new Set();
function L() {
    (N = ""), (y = 0), (C = []), (R = new Set()), (S = !1), (b = null), (O = !1);
}
function w(e) {
    return O !== e && ((O = e), !0);
}
function M(e) {
    return (N = e), (y = 0), P();
}
function P() {
    let e, t, n;
    if (!S) return !1;
    let r = h.A.getChannel(b);
    if (0 === N.trim().length) {
        var s;
        let e, t, n, a;
        return (
            null != i && i.clearQuery(),
            (s = r),
            (e = I.default.getCurrentUser()),
            (t = (0, l.G)("PrivateChannelRecipientsInviteStore")),
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
                            .filter((t) => t !== e?.id)
                            .filter((e) => !A.A.isBlockedOrIgnored(e))
                            .filter((e) => !A.A.isFriend(e))
                            .filter((e) => D.has(e)),
                    ]),
                ))),
            s?.isGroupDM() && (n = n.filter((e) => !s.recipients.includes(e))),
            (C = n
                .reduce((n, i) => {
                    let r = I.default.getUser(i);
                    if (null == r || r.isProvisional || (r.bot && !(r.isStaff() && e?.isStaff()))) return n;
                    let s = { user: r, comparator: f.Ay.getName(r) };
                    if (t && null != a && !A.A.isFriend(r.id)) {
                        let t = k(r.id, a);
                        if (0 === t.length && !(r.isStaff() && e?.isStaff())) return n;
                        t.length > 0 && (s.mutualGuilds = t);
                    }
                    return n.push(s), n;
                }, [])
                .sort(U)),
            w(!1),
            !0
        );
    }
    let a = I.default.getCurrentUser(),
        o = a?.isStaff() ?? !1,
        _ = (0, l.G)("PrivateChannelRecipientsInviteStore");
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
function x() {
    if (!S) return !1;
    let e = v;
    return (v = A.A.getFriendCount() > 0) !== e;
}
function U(e, t) {
    if (p.A.hasConsented(T.YAq.PERSONALIZATION)) {
        let n = u.A.getUserAffinity(e.user.id)?.communicationProbability ?? 0,
            i = u.A.getUserAffinity(t.user.id)?.communicationProbability ?? 0;
        if (n !== i) return i - n;
    }
    return (0, _.sS)(f.Ay.getName(e.user).toLocaleLowerCase()).localeCompare(
        (0, _.sS)(f.Ay.getName(t.user).toLocaleLowerCase()),
    );
}
function k(e, t) {
    let n = [];
    for (let i of t) {
        if (!m.Ay.isMember(i, e)) continue;
        let t = g.A.getGuild(i);
        null != t && n.push(t);
    }
    return n;
}
function G(e) {
    let { results: t } = e;
    if (!S || "" === N) return;
    let n = I.default.getCurrentUser(),
        i = (0, l.G)("PrivateChannelRecipientsInviteStore"),
        r = i ? new Set(g.A.getGuildIds()) : null,
        s = [];
    for (let { id: e, comparator: a } of t) {
        if (null != n && e === n.id) continue;
        let t = I.default.getUser(e);
        if (null == t || t.isProvisional || (t.bot && !(t.isStaff() && n?.isStaff()))) continue;
        let o = { user: t, comparator: a };
        if (i && null != r && !A.A.isFriend(t.id)) {
            let e = k(t.id, r);
            if (0 === e.length && !(t.isStaff() && n?.isStaff())) continue;
            e.length > 0 && (o.mutualGuilds = e);
        }
        s.push(o);
    }
    (C = s), W.emitChange();
}
function F() {
    return null != i && (i.destroy(), (i = null)), a.A.getUserSearchContext(G, 1e3);
}
function V(e) {
    if (e.key !== T.TLS) return !1;
    (S = !0), x(), (i = F()), (b = null), M("");
}
function B(e) {
    if (e.key !== T.TLS) return !1;
    H();
}
function H() {
    null != i && (i.destroy(), (i = null)), (D = new Set()), L();
}
function j() {
    return !!S && !!(0, l.G)("PrivateChannelRecipientsInviteStore") && P();
}
class Y extends r.Ay.Store {
    static displayName = "PrivateChannelRecipientsInviteStore";
    initialize() {
        this.waitFor(h.A, p.A, o.A, E.A, m.Ay, g.A, A.A, u.A, I.default),
            this.syncWith([I.default, h.A], P),
            this.syncWith([u.A], j),
            this.syncWith([A.A], x);
    }
    getResults() {
        return C;
    }
    hasFriends() {
        return v;
    }
    getSelectedUsers() {
        return R;
    }
    getQuery() {
        return N;
    }
    getState() {
        return { query: N, selectedRow: y, selectedUsers: R, results: C, hasFriends: v, isLoading: O };
    }
}
let W = new Y(s.h, {
        CONNECTION_OPEN: function () {
            L(), (D = new Set());
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            let { guilds: t } = e;
            if (!S || !(0, l.G)("PrivateChannelRecipientsInviteStore")) return !1;
            for (let e of t) for (let t of e.members) D.add(t.user.id);
            return !1;
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            if (!S || !(0, l.G)("PrivateChannelRecipientsInviteStore")) return !1;
            for (let e of t.members) D.add(e.user.id);
            return !1;
        },
        GUILD_MEMBER_ADD: function (e) {
            let { user: t } = e;
            return !!S && !!(0, l.G)("PrivateChannelRecipientsInviteStore") && (D.add(t.id), !1);
        },
        GUILD_MEMBER_REMOVE: function (e) {
            let { user: t } = e;
            return (
                !!S &&
                !!(0, l.G)("PrivateChannelRecipientsInviteStore") &&
                0 === m.Ay.memberOf(t.id).length &&
                (D.delete(t.id), !1)
            );
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
            let { chunks: t } = e;
            if (!S || !(0, l.G)("PrivateChannelRecipientsInviteStore")) return !1;
            for (let e of t) for (let t of e.members) D.add(t.user.id);
            return w(!1);
        },
        GUILD_MEMBERS_REQUEST: function (e) {
            let { query: t } = e;
            return !!S && !!(0, l.G)("PrivateChannelRecipientsInviteStore") && t === N.toLocaleLowerCase() && w(!0);
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let i = S;
            return L(), (S = i), (b = n), P();
        },
        MODAL_PUSH: V,
        SHOW_ACTION_SHEET: V,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (S = !0),
                (function () {
                    if (((D = new Set()), !(0, l.G)("PrivateChannelRecipientsInviteStore"))) return;
                    let e = m.Ay.getMutableAllGuildsAndMembers();
                    for (let t in e) for (let n in e[t]) D.add(n);
                })(),
                x(),
                (i = F()),
                (b = e.channelId),
                M("");
        },
        MODAL_POP: B,
        HIDE_ACTION_SHEET: B,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: H,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            (b = e.channelId), M(e.query);
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            y = e.row;
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
    K = W;
