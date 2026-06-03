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
    p = n(734057),
    E = n(153488),
    m = n(205761),
    g = n(696451),
    A = n(71393),
    I = n(994500),
    T = n(287809),
    S = n(652215);
let y = !1,
    N = "",
    v = 0,
    C = [],
    R = !1,
    O = !1,
    b = new Set(),
    D = null;
function L() {
    (N = ""), (v = 0), (C = []), (b = new Set()), (y = !1), (D = null), (O = !1);
}
function w(e) {
    return O !== e && ((O = e), !0);
}
function M(e) {
    return (N = e), (v = 0), P();
}
function P() {
    let e, t, n;
    if (!y) return !1;
    let r = p.A.getChannel(D);
    if (0 === N.trim().length) {
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
            (C = n
                .reduce((n, i) => {
                    let r = T.default.getUser(i);
                    if (null == r || r.isProvisional || (r.bot && !(r.isStaff() && e?.isStaff()))) return n;
                    let s = { user: r, comparator: f.Ay.getName(r) };
                    if (t && null != a && !I.A.isFriend(r.id)) {
                        let t = U(r.id, a);
                        if (0 === t.length && !(r.isStaff() && e?.isStaff())) return n;
                        t.length > 0 && (s.mutualGuilds = t);
                    }
                    return n.push(s), n;
                }, [])
                .sort(k)),
            w(!1),
            !0
        );
    }
    let a = T.default.getCurrentUser(),
        o = a?.isStaff() ?? !1,
        c = (0, l.G)("PrivateChannelRecipientsInviteStore");
    c && _.A.requestMembers(null, N);
    let h = null != r ? r.recipients : [];
    return (
        null != i &&
            i.setQuery({
                query: N,
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
                            a = 0.1 * (null != p.A.getDMFromUserId(r));
                        n[r] = 1 + i / t + s + a;
                    }),
                    n),
            }),
        !1
    );
}
function x() {
    if (!y) return !1;
    let e = R;
    return (R = I.A.getFriendCount() > 0) !== e;
}
function k(e, t) {
    if (E.A.hasConsented(S.YAq.PERSONALIZATION)) {
        let n = u.A.getUserAffinity(e.user.id)?.communicationProbability ?? 0,
            i = u.A.getUserAffinity(t.user.id)?.communicationProbability ?? 0;
        if (n !== i) return i - n;
    }
    return (0, h.sS)(f.Ay.getName(e.user).toLocaleLowerCase()).localeCompare(
        (0, h.sS)(f.Ay.getName(t.user).toLocaleLowerCase()),
    );
}
function U(e, t) {
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
    if (!y || "" === N) return;
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
            let e = U(t.id, r);
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
    if (e.key !== S.TLS) return !1;
    (y = !0), x(), (i = F()), (D = null), M("");
}
function B(e) {
    if (e.key !== S.TLS) return !1;
    H();
}
function H() {
    null != i && (i.destroy(), (i = null)), L();
}
function j() {
    return !!y && !!(0, l.G)("PrivateChannelRecipientsInviteStore") && P();
}
class Y extends r.Ay.Store {
    static displayName = "PrivateChannelRecipientsInviteStore";
    initialize() {
        this.waitFor(p.A, E.A, o.A, m.A, g.Ay, A.A, I.A, u.A, T.default),
            this.syncWith([T.default, p.A], P),
            this.syncWith([u.A], j),
            this.syncWith([I.A], x);
    }
    getResults() {
        return C;
    }
    hasFriends() {
        return R;
    }
    getSelectedUsers() {
        return b;
    }
    getQuery() {
        return N;
    }
    getState() {
        return { query: N, selectedRow: v, selectedUsers: b, results: C, hasFriends: R, isLoading: O };
    }
}
let W = new Y(s.h, {
        CONNECTION_OPEN: function () {
            L();
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
            return !!y && !!(0, l.G)("PrivateChannelRecipientsInviteStore") && w(!1);
        },
        GUILD_MEMBERS_REQUEST: function (e) {
            let { query: t } = e;
            return !!y && !!(0, l.G)("PrivateChannelRecipientsInviteStore") && t === N.toLocaleLowerCase() && w(!0);
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let i = y;
            return L(), (y = i), (D = n), P();
        },
        MODAL_PUSH: V,
        SHOW_ACTION_SHEET: V,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (y = !0), x(), (i = F()), (D = e.channelId), M("");
        },
        MODAL_POP: B,
        HIDE_ACTION_SHEET: B,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: H,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            (D = e.channelId), M(e.query);
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            v = e.row;
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
    K = W;
