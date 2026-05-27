let i;
n.d(t, { A: () => W }), n(321073);
var l = n(17928),
    s = n(228366),
    r = n(450827),
    a = n(736056),
    o = n(18707),
    u = n(427358),
    d = n(95701),
    c = n(695184),
    h = n(240248),
    g = n(427262),
    f = n(734057),
    A = n(153488),
    E = n(205761),
    I = n(696451),
    p = n(71393),
    S = n(994500),
    m = n(287809),
    C = n(652215);
let _ = !1,
    N = "",
    T = 0,
    v = [],
    M = !1,
    y = !1,
    D = new Set(),
    R = null;
function x() {
    (N = ""), (T = 0), (v = []), (D = new Set()), (_ = !1), (R = null), (y = !1);
}
function O(e) {
    return y !== e && ((y = e), !0);
}
function U(e) {
    return (N = e), (T = 0), L();
}
function L() {
    let e, t, n;
    if (!_) return !1;
    let l = f.A.getChannel(R);
    if (0 === N.trim().length) {
        var s;
        let e, t, n, r;
        return (
            null != i && i.clearQuery(),
            (s = l),
            (e = m.default.getCurrentUser()),
            (t = (0, o.G)("PrivateChannelRecipientsInviteStore")),
            (n = [...S.A.getFriendIDs()]),
            e?.isStaff() &&
                (n = Array.from(
                    new Set([...n, ...m.default.filter((t) => t.isStaff() && t.id !== e.id, !1).map((e) => e.id)]),
                )),
            (r = null),
            t &&
                ((r = new Set(p.A.getGuildIds())),
                (n = Array.from(
                    new Set([
                        ...n,
                        ...u.A.getUserAffinities()
                            .map((e) => e.otherUserId)
                            .filter((t) => t !== e?.id)
                            .filter((e) => !S.A.isBlockedOrIgnored(e))
                            .filter((e) => !S.A.isFriend(e)),
                    ]),
                ))),
            s?.isGroupDM() && (n = n.filter((e) => !s.recipients.includes(e))),
            (v = n
                .reduce((n, i) => {
                    let l = m.default.getUser(i);
                    if (null == l || l.isProvisional || (l.bot && !(l.isStaff() && e?.isStaff()))) return n;
                    let s = { user: l, comparator: g.Ay.getName(l) };
                    if (t && null != r && !S.A.isFriend(l.id)) {
                        let t = G(l.id, r);
                        if (0 === t.length && !(l.isStaff() && e?.isStaff())) return n;
                        t.length > 0 && (s.mutualGuilds = t);
                    }
                    return n.push(s), n;
                }, [])
                .sort(P)),
            O(!1),
            !0
        );
    }
    let r = m.default.getCurrentUser(),
        a = r?.isStaff() ?? !1,
        h = (0, o.G)("PrivateChannelRecipientsInviteStore");
    h && c.A.requestMembers(null, N);
    let A = null != l ? l.recipients : [];
    return (
        null != i &&
            i.setQuery({
                query: N,
                filters: h ? void 0 : { friends: !0, staff: a, provisional: !1 },
                blacklist: A,
                boosters:
                    ((t = Math.max(
                        ...(e = E.A.getFrequentlyWithoutFetchingLatest().filter(
                            (e) => e instanceof d.cq && e.isDM(),
                        )).map((e) => {
                            let { id: t } = e;
                            return E.A.getScoreWithoutFetchingLatest(t);
                        }),
                    )),
                    (n = {}),
                    e.forEach((e) => {
                        let i = E.A.getScoreWithoutFetchingLatest(e.id),
                            l = e.getRecipientId(),
                            s = 0.2 * !!S.A.isFriend(l),
                            r = 0.1 * (null != f.A.getDMFromUserId(l));
                        n[l] = 1 + i / t + s + r;
                    }),
                    n),
            }),
        !1
    );
}
function w() {
    if (!_) return !1;
    let e = M;
    return (M = S.A.getFriendCount() > 0) !== e;
}
function P(e, t) {
    if (A.A.hasConsented(C.YAq.PERSONALIZATION)) {
        let n = u.A.getUserAffinity(e.user.id)?.communicationProbability ?? 0,
            i = u.A.getUserAffinity(t.user.id)?.communicationProbability ?? 0;
        if (n !== i) return i - n;
    }
    return (0, h.sS)(g.Ay.getName(e.user).toLocaleLowerCase()).localeCompare(
        (0, h.sS)(g.Ay.getName(t.user).toLocaleLowerCase()),
    );
}
function G(e, t) {
    let n = [];
    for (let i of t) {
        if (!I.Ay.isMember(i, e)) continue;
        let t = p.A.getGuild(i);
        null != t && n.push(t);
    }
    return n;
}
function F(e) {
    let { results: t } = e;
    if (!_ || "" === N) return;
    let n = m.default.getCurrentUser(),
        i = (0, o.G)("PrivateChannelRecipientsInviteStore"),
        l = i ? new Set(p.A.getGuildIds()) : null,
        s = [];
    for (let { id: e, comparator: r } of t) {
        if (null != n && e === n.id) continue;
        let t = m.default.getUser(e);
        if (null == t || t.isProvisional || (t.bot && !(t.isStaff() && n?.isStaff()))) continue;
        let a = { user: t, comparator: r };
        if (i && null != l && !S.A.isFriend(t.id)) {
            let e = G(t.id, l);
            if (0 === e.length && !(t.isStaff() && n?.isStaff())) continue;
            e.length > 0 && (a.mutualGuilds = e);
        }
        s.push(a);
    }
    (v = s), Y.emitChange();
}
function b() {
    return null != i && (i.destroy(), (i = null)), r.A.getUserSearchContext(F, 1e3);
}
function j(e) {
    if (e.key !== C.TLS) return !1;
    (_ = !0), w(), (i = b()), (R = null), U("");
}
function V(e) {
    if (e.key !== C.TLS) return !1;
    k();
}
function k() {
    null != i && (i.destroy(), (i = null)), x();
}
function H() {
    return !!_ && !!(0, o.G)("PrivateChannelRecipientsInviteStore") && L();
}
class B extends l.Ay.Store {
    static displayName = "PrivateChannelRecipientsInviteStore";
    initialize() {
        this.waitFor(f.A, A.A, a.A, E.A, I.Ay, p.A, S.A, u.A, m.default),
            this.syncWith([m.default, f.A], L),
            this.syncWith([u.A], H),
            this.syncWith([S.A], w);
    }
    getResults() {
        return v;
    }
    hasFriends() {
        return M;
    }
    getSelectedUsers() {
        return D;
    }
    getQuery() {
        return N;
    }
    getState() {
        return { query: N, selectedRow: T, selectedUsers: D, results: v, hasFriends: M, isLoading: y };
    }
}
let Y = new B(s.h, {
        CONNECTION_OPEN: function () {
            x();
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
            return !!_ && !!(0, o.G)("PrivateChannelRecipientsInviteStore") && O(!1);
        },
        GUILD_MEMBERS_REQUEST: function (e) {
            let { query: t } = e;
            return !!_ && !!(0, o.G)("PrivateChannelRecipientsInviteStore") && t === N.toLocaleLowerCase() && O(!0);
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let i = _;
            return x(), (_ = i), (R = n), L();
        },
        MODAL_PUSH: j,
        SHOW_ACTION_SHEET: j,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (_ = !0), w(), (i = b()), (R = e.channelId), U("");
        },
        MODAL_POP: V,
        HIDE_ACTION_SHEET: V,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: k,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            (R = e.channelId), U(e.query);
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            T = e.row;
        },
        PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function (e) {
            let { userId: t } = e;
            D.add(t), (D = new Set(D));
        },
        PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function (e) {
            let { userId: t } = e;
            D.delete(t), (D = new Set(D));
        },
    }),
    W = Y;
