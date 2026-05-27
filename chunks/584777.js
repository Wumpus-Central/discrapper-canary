"use strict";
let i;
n.d(t, { A: () => W }), n(321073);
var r = n(17928),
    s = n(228366),
    a = n(450827),
    o = n(736056),
    l = n(18707),
    u = n(427358),
    c = n(95701),
    d = n(695184),
    _ = n(240248),
    h = n(427262),
    f = n(734057),
    p = n(153488),
    E = n(205761),
    m = n(696451),
    g = n(71393),
    A = n(994500),
    I = n(287809),
    T = n(652215);
let S = !1,
    y = "",
    N = 0,
    v = [],
    C = !1,
    R = !1,
    O = new Set(),
    b = null;
function D() {
    (y = ""), (N = 0), (v = []), (O = new Set()), (S = !1), (b = null), (R = !1);
}
function L(e) {
    return R !== e && ((R = e), !0);
}
function w(e) {
    return (y = e), (N = 0), M();
}
function M() {
    let e, t, n;
    if (!S) return !1;
    let r = f.A.getChannel(b);
    if (0 === y.trim().length) {
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
                            .filter((e) => !A.A.isFriend(e)),
                    ]),
                ))),
            s?.isGroupDM() && (n = n.filter((e) => !s.recipients.includes(e))),
            (v = n
                .reduce((n, i) => {
                    let r = I.default.getUser(i);
                    if (null == r || r.isProvisional || (r.bot && !(r.isStaff() && e?.isStaff()))) return n;
                    let s = { user: r, comparator: h.Ay.getName(r) };
                    if (t && null != a && !A.A.isFriend(r.id)) {
                        let t = k(r.id, a);
                        if (0 === t.length && !(r.isStaff() && e?.isStaff())) return n;
                        t.length > 0 && (s.mutualGuilds = t);
                    }
                    return n.push(s), n;
                }, [])
                .sort(x)),
            L(!1),
            !0
        );
    }
    let a = I.default.getCurrentUser(),
        o = a?.isStaff() ?? !1,
        _ = (0, l.G)("PrivateChannelRecipientsInviteStore");
    _ && d.A.requestMembers(null, y);
    let p = null != r ? r.recipients : [];
    return (
        null != i &&
            i.setQuery({
                query: y,
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
                            a = 0.1 * (null != f.A.getDMFromUserId(r));
                        n[r] = 1 + i / t + s + a;
                    }),
                    n),
            }),
        !1
    );
}
function P() {
    if (!S) return !1;
    let e = C;
    return (C = A.A.getFriendCount() > 0) !== e;
}
function x(e, t) {
    if (p.A.hasConsented(T.YAq.PERSONALIZATION)) {
        let n = u.A.getUserAffinity(e.user.id)?.communicationProbability ?? 0,
            i = u.A.getUserAffinity(t.user.id)?.communicationProbability ?? 0;
        if (n !== i) return i - n;
    }
    return (0, _.sS)(h.Ay.getName(e.user).toLocaleLowerCase()).localeCompare(
        (0, _.sS)(h.Ay.getName(t.user).toLocaleLowerCase()),
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
function U(e) {
    let { results: t } = e;
    if (!S || "" === y) return;
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
    (v = s), Y.emitChange();
}
function G() {
    return null != i && (i.destroy(), (i = null)), a.A.getUserSearchContext(U, 1e3);
}
function F(e) {
    if (e.key !== T.TLS) return !1;
    (S = !0), P(), (i = G()), (b = null), w("");
}
function V(e) {
    if (e.key !== T.TLS) return !1;
    B();
}
function B() {
    null != i && (i.destroy(), (i = null)), D();
}
function H() {
    return !!S && !!(0, l.G)("PrivateChannelRecipientsInviteStore") && M();
}
class j extends r.Ay.Store {
    static displayName = "PrivateChannelRecipientsInviteStore";
    initialize() {
        this.waitFor(f.A, p.A, o.A, E.A, m.Ay, g.A, A.A, u.A, I.default),
            this.syncWith([I.default, f.A], M),
            this.syncWith([u.A], H),
            this.syncWith([A.A], P);
    }
    getResults() {
        return v;
    }
    hasFriends() {
        return C;
    }
    getSelectedUsers() {
        return O;
    }
    getQuery() {
        return y;
    }
    getState() {
        return { query: y, selectedRow: N, selectedUsers: O, results: v, hasFriends: C, isLoading: R };
    }
}
let Y = new j(s.h, {
        CONNECTION_OPEN: function () {
            D();
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
            return !!S && !!(0, l.G)("PrivateChannelRecipientsInviteStore") && L(!1);
        },
        GUILD_MEMBERS_REQUEST: function (e) {
            let { query: t } = e;
            return !!S && !!(0, l.G)("PrivateChannelRecipientsInviteStore") && t === y.toLocaleLowerCase() && L(!0);
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let i = S;
            return D(), (S = i), (b = n), M();
        },
        MODAL_PUSH: F,
        SHOW_ACTION_SHEET: F,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (S = !0), P(), (i = G()), (b = e.channelId), w("");
        },
        MODAL_POP: V,
        HIDE_ACTION_SHEET: V,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: B,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            (b = e.channelId), w(e.query);
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            N = e.row;
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
    W = Y;
