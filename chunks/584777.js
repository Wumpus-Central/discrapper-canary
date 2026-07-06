"use strict";
let i;
n.d(t, { A: () => K }), n(321073);
var r = n(17928),
    s = n(228366),
    a = n(450827),
    o = n(736056),
    l = n(18707),
    u = n(427358),
    c = n(885386),
    d = n(95701),
    _ = n(695184),
    h = n(240248),
    f = n(427262),
    E = n(734057),
    p = n(153488),
    m = n(205761),
    g = n(696451),
    A = n(71393),
    I = n(994500),
    T = n(287809),
    S = n(652215);
let N = !1,
    C = "",
    y = 0,
    O = [],
    R = !1,
    v = !1,
    b = new Set(),
    L = null;
function D() {
    (C = ""), (y = 0), (O = []), (b = new Set()), (N = !1), (L = null), (v = !1);
}
function w(e) {
    return v !== e && ((v = e), !0);
}
function P(e) {
    return (C = e), (y = 0), M();
}
function M() {
    let e, t, n;
    if (!N) return !1;
    let r = E.A.getChannel(L);
    if (0 === C.trim().length) {
        var s;
        let e, t, n, a;
        return (
            null != i && i.clearQuery(),
            (s = r),
            (e = T.default.getCurrentUser()),
            (t = (0, l.G)("PrivateChannelRecipientsInviteStore")),
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
                        ...u.A.getUserAffinities()
                            .map((e) => e.otherUserId)
                            .filter((t) => t !== e?.id)
                            .filter((e) => !I.A.isBlockedOrIgnored(e))
                            .filter((e) => !I.A.isFriend(e)),
                    ]),
                ))),
            s?.isGroupDM() && (n = n.filter((e) => !s.recipients.includes(e))),
            (O = n
                .reduce((n, i) => {
                    let r = T.default.getUser(i);
                    if (null == r || r.isProvisional || (r.bot && !(r.isStaff() && e?.isStaff()))) return n;
                    let s = { user: r, comparator: f.Ay.getName(r) };
                    if (t && null != a && !I.A.isFriend(r.id)) {
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
    let a = T.default.getCurrentUser(),
        o = a?.isStaff() ?? !1,
        c = (0, l.G)("PrivateChannelRecipientsInviteStore");
    c && _.A.requestMembers(null, C);
    let h = null != r ? r.recipients : [];
    return (
        null != i &&
            i.setQuery({
                query: C,
                filters: c ? void 0 : { friends: !0, staff: o, provisional: !1 },
                blacklist: h,
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
                            a = 0.1 * (null != E.A.getDMFromUserId(r));
                        n[r] = 1 + i / t + s + a;
                    }),
                    n),
            }),
        !1
    );
}
function x() {
    if (!N) return !1;
    let e = R;
    return (R = I.A.getFriendCount() > 0) !== e;
}
function U(e, t) {
    if (p.A.hasConsented(S.YAq.PERSONALIZATION)) {
        let n = u.A.getUserAffinity(e.user.id)?.communicationProbability ?? 0,
            i = u.A.getUserAffinity(t.user.id)?.communicationProbability ?? 0;
        if (n !== i) return i - n;
    }
    return (0, h.sS)(f.Ay.getName(e.user).toLocaleLowerCase()).localeCompare(
        (0, h.sS)(f.Ay.getName(t.user).toLocaleLowerCase()),
    );
}
function k(e, t) {
    let n = c.$s.getSetting(),
        i = [];
    for (let r of t) {
        if (n.includes(r) || !g.Ay.isMember(r, e)) continue;
        let t = A.A.getGuild(r);
        null != t && i.push(t);
    }
    return i;
}
function G(e) {
    let { results: t } = e;
    if (!N || "" === C) return;
    let n = T.default.getCurrentUser(),
        i = (0, l.G)("PrivateChannelRecipientsInviteStore"),
        r = i ? new Set(A.A.getGuildIds()) : null,
        s = [];
    for (let { id: e, comparator: a } of t) {
        if (null != n && e === n.id) continue;
        let t = T.default.getUser(e);
        if (null == t || t.isProvisional || (t.bot && !(t.isStaff() && n?.isStaff()))) continue;
        let o = { user: t, comparator: a };
        if (i && null != r && !I.A.isFriend(t.id)) {
            let e = k(t.id, r);
            if (0 === e.length && !(t.isStaff() && n?.isStaff())) continue;
            e.length > 0 && (o.mutualGuilds = e);
        }
        s.push(o);
    }
    (O = s), Y.emitChange();
}
function V() {
    return null != i && (i.destroy(), (i = null)), a.A.getUserSearchContext(G, 1e3);
}
function F(e) {
    if (e.key !== S.TLS) return !1;
    (N = !0), x(), (i = V()), (L = null), P("");
}
function B(e) {
    if (e.key !== S.TLS) return !1;
    H();
}
function H() {
    null != i && (i.destroy(), (i = null)), D();
}
function j() {
    return !!N && !!(0, l.G)("PrivateChannelRecipientsInviteStore") && M();
}
class W extends r.Ay.Store {
    static displayName = "PrivateChannelRecipientsInviteStore";
    initialize() {
        this.waitFor(E.A, p.A, o.A, m.A, g.Ay, A.A, I.A, u.A, T.default),
            this.syncWith([T.default, E.A], M),
            this.syncWith([u.A], j),
            this.syncWith([I.A], x);
    }
    getResults() {
        return O;
    }
    hasFriends() {
        return R;
    }
    getSelectedUsers() {
        return b;
    }
    getQuery() {
        return C;
    }
    getState() {
        return { query: C, selectedRow: y, selectedUsers: b, results: O, hasFriends: R, isLoading: v };
    }
}
let Y = new W(s.h, {
        CONNECTION_OPEN: function () {
            D();
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
            return !!N && !!(0, l.G)("PrivateChannelRecipientsInviteStore") && w(!1);
        },
        GUILD_MEMBERS_REQUEST: function (e) {
            let { query: t } = e;
            return !!N && !!(0, l.G)("PrivateChannelRecipientsInviteStore") && t === C.toLocaleLowerCase() && w(!0);
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let i = N;
            return D(), (N = i), (L = n), M();
        },
        MODAL_PUSH: F,
        SHOW_ACTION_SHEET: F,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (N = !0), x(), (i = V()), (L = e.channelId), P("");
        },
        MODAL_POP: B,
        HIDE_ACTION_SHEET: B,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: H,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            (L = e.channelId), P(e.query);
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            y = e.row;
        },
        PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function (e) {
            let { userId: t } = e;
            b.add(t), (b = new Set(b));
        },
        PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function (e) {
            let { userId: t } = e;
            b.delete(t), (b = new Set(b));
        },
    }),
    K = Y;
