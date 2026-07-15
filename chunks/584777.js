"use strict";
let i;
n.d(t, { A: () => K }), n(321073);
var r = n(17928),
    a = n(228366),
    s = n(450827),
    l = n(736056),
    o = n(18707),
    d = n(427358),
    c = n(885386),
    u = n(95701),
    _ = n(695184),
    E = n(240248),
    A = n(427262),
    h = n(734057),
    I = n(153488),
    f = n(205761),
    p = n(696451),
    T = n(71393),
    m = n(994500),
    g = n(287809),
    S = n(652215);
let N = !1,
    C = "",
    R = 0,
    O = [],
    L = !1,
    D = !1,
    y = new Set(),
    v = null;
function b() {
    (C = ""), (R = 0), (O = []), (y = new Set()), (N = !1), (v = null), (D = !1);
}
function M(e) {
    return D !== e && ((D = e), !0);
}
function P(e) {
    return (C = e), (R = 0), U();
}
function U() {
    let e, t, n;
    if (!N) return !1;
    let r = h.A.getChannel(v);
    if (0 === C.trim().length) {
        var a;
        let e, t, n, s;
        return (
            null != i && i.clearQuery(),
            (a = r),
            (e = g.default.getCurrentUser()),
            (t = (0, o.G)("PrivateChannelRecipientsInviteStore")),
            (n = [...m.A.getFriendIDs()]),
            e?.isStaff() &&
                (n = Array.from(
                    new Set([...n, ...g.default.filter((t) => t.isStaff() && t.id !== e.id, !1).map((e) => e.id)]),
                )),
            (s = null),
            t &&
                ((s = new Set(T.A.getGuildIds())),
                (n = Array.from(
                    new Set([
                        ...n,
                        ...d.A.getUserAffinities()
                            .map((e) => e.otherUserId)
                            .filter((t) => t !== e?.id)
                            .filter((e) => !m.A.isBlockedOrIgnored(e))
                            .filter((e) => !m.A.isFriend(e)),
                    ]),
                ))),
            a?.isGroupDM() && (n = n.filter((e) => !a.recipients.includes(e))),
            (O = n
                .reduce((n, i) => {
                    let r = g.default.getUser(i);
                    if (null == r || r.isProvisional || (r.bot && !(r.isStaff() && e?.isStaff()))) return n;
                    let a = { user: r, comparator: A.Ay.getName(r) };
                    if (t && null != s && !m.A.isFriend(r.id)) {
                        let t = x(r.id, s);
                        if (0 === t.length && !(r.isStaff() && e?.isStaff())) return n;
                        t.length > 0 && (a.mutualGuilds = t);
                    }
                    return n.push(a), n;
                }, [])
                .sort(G)),
            M(!1),
            !0
        );
    }
    let s = g.default.getCurrentUser(),
        l = s?.isStaff() ?? !1,
        c = (0, o.G)("PrivateChannelRecipientsInviteStore");
    c && _.A.requestMembers(null, C);
    let E = null != r ? r.recipients : [];
    return (
        null != i &&
            i.setQuery({
                query: C,
                filters: c ? void 0 : { friends: !0, staff: l, provisional: !1 },
                blacklist: E,
                boosters:
                    ((t = Math.max(
                        ...(e = f.A.getFrequentlyWithoutFetchingLatest().filter(
                            (e) => e instanceof u.cq && e.isDM(),
                        )).map((e) => {
                            let { id: t } = e;
                            return f.A.getScoreWithoutFetchingLatest(t);
                        }),
                    )),
                    (n = {}),
                    e.forEach((e) => {
                        let i = f.A.getScoreWithoutFetchingLatest(e.id),
                            r = e.getRecipientId(),
                            a = 0.2 * !!m.A.isFriend(r),
                            s = 0.1 * (null != h.A.getDMFromUserId(r));
                        n[r] = 1 + i / t + a + s;
                    }),
                    n),
            }),
        !1
    );
}
function w() {
    if (!N) return !1;
    let e = L;
    return (L = m.A.getFriendCount() > 0) !== e;
}
function G(e, t) {
    if (I.A.hasConsented(S.YAq.PERSONALIZATION)) {
        let n = d.A.getUserAffinity(e.user.id)?.communicationProbability ?? 0,
            i = d.A.getUserAffinity(t.user.id)?.communicationProbability ?? 0;
        if (n !== i) return i - n;
    }
    return (0, E.sS)(A.Ay.getName(e.user).toLocaleLowerCase()).localeCompare(
        (0, E.sS)(A.Ay.getName(t.user).toLocaleLowerCase()),
    );
}
function x(e, t) {
    let n = c.$s.getSetting(),
        i = [];
    for (let r of t) {
        if (n.includes(r) || !p.Ay.isMember(r, e)) continue;
        let t = T.A.getGuild(r);
        null != t && i.push(t);
    }
    return i;
}
function k(e) {
    let { results: t } = e;
    if (!N || "" === C) return;
    let n = g.default.getCurrentUser(),
        i = (0, o.G)("PrivateChannelRecipientsInviteStore"),
        r = i ? new Set(T.A.getGuildIds()) : null,
        a = [];
    for (let { id: e, comparator: s } of t) {
        if (null != n && e === n.id) continue;
        let t = g.default.getUser(e);
        if (null == t || t.isProvisional || (t.bot && !(t.isStaff() && n?.isStaff()))) continue;
        let l = { user: t, comparator: s };
        if (i && null != r && !m.A.isFriend(t.id)) {
            let e = x(t.id, r);
            if (0 === e.length && !(t.isStaff() && n?.isStaff())) continue;
            e.length > 0 && (l.mutualGuilds = e);
        }
        a.push(l);
    }
    (O = a), Y.emitChange();
}
function F() {
    return null != i && (i.destroy(), (i = null)), s.A.getUserSearchContext(k, 1e3);
}
function V(e) {
    if (e.key !== S.TLS) return !1;
    (N = !0), w(), (i = F()), (v = null), P("");
}
function B(e) {
    if (e.key !== S.TLS) return !1;
    H();
}
function H() {
    null != i && (i.destroy(), (i = null)), b();
}
function j() {
    return !!N && !!(0, o.G)("PrivateChannelRecipientsInviteStore") && U();
}
class W extends r.Ay.Store {
    static displayName = "PrivateChannelRecipientsInviteStore";
    initialize() {
        this.waitFor(h.A, I.A, l.A, f.A, p.Ay, T.A, m.A, d.A, g.default),
            this.syncWith([g.default, h.A], U),
            this.syncWith([d.A], j),
            this.syncWith([m.A], w);
    }
    getResults() {
        return O;
    }
    hasFriends() {
        return L;
    }
    getSelectedUsers() {
        return y;
    }
    getQuery() {
        return C;
    }
    getState() {
        return { query: C, selectedRow: R, selectedUsers: y, results: O, hasFriends: L, isLoading: D };
    }
}
let Y = new W(a.h, {
        CONNECTION_OPEN: function () {
            b();
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
            return !!N && !!(0, o.G)("PrivateChannelRecipientsInviteStore") && M(!1);
        },
        GUILD_MEMBERS_REQUEST: function (e) {
            let { query: t } = e;
            return !!N && !!(0, o.G)("PrivateChannelRecipientsInviteStore") && t === C.toLocaleLowerCase() && M(!0);
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let i = N;
            return b(), (N = i), (v = n), U();
        },
        MODAL_PUSH: V,
        SHOW_ACTION_SHEET: V,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (N = !0), w(), (i = F()), (v = e.channelId), P("");
        },
        MODAL_POP: B,
        HIDE_ACTION_SHEET: B,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: H,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            (v = e.channelId), P(e.query);
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            R = e.row;
        },
        PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function (e) {
            let { userId: t } = e;
            y.add(t), (y = new Set(y));
        },
        PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function (e) {
            let { userId: t } = e;
            y.delete(t), (y = new Set(y));
        },
    }),
    K = Y;
