let i;
n.d(t, { A: () => W }), n(321073);
var l = n(17928),
    r = n(228366),
    s = n(450827),
    a = n(736056),
    o = n(427358),
    u = n(885386),
    d = n(95701),
    c = n(695184),
    h = n(240248),
    g = n(427262),
    f = n(734057),
    A = n(153488),
    p = n(205761),
    E = n(696451),
    m = n(71393),
    I = n(994500),
    S = n(287809),
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
    return (N = e), (T = 0), w();
}
function w() {
    let e, t, n;
    if (!_) return !1;
    let l = f.A.getChannel(R);
    if (0 === N.trim().length) {
        var r;
        let e, t, n;
        return (
            null != i && i.clearQuery(),
            (r = l),
            (e = S.default.getCurrentUser()),
            (t = [...I.A.getFriendIDs()]),
            e?.isStaff() &&
                (t = Array.from(
                    new Set([...t, ...S.default.filter((t) => t.isStaff() && t.id !== e.id, !1).map((e) => e.id)]),
                )),
            (n = null),
            (n = new Set(m.A.getGuildIds())),
            (t = Array.from(
                new Set([
                    ...t,
                    ...o.A.getUserAffinities()
                        .map((e) => e.otherUserId)
                        .filter((t) => t !== e?.id)
                        .filter((e) => !I.A.isBlockedOrIgnored(e))
                        .filter((e) => !I.A.isFriend(e)),
                ]),
            )),
            r?.isGroupDM() && (t = t.filter((e) => !r.recipients.includes(e))),
            (v = t
                .reduce((t, i) => {
                    let l = S.default.getUser(i);
                    if (null == l || l.isProvisional || (l.bot && !(l.isStaff() && e?.isStaff()))) return t;
                    let r = { user: l, comparator: g.Ay.getName(l) };
                    if (null != n && !I.A.isFriend(l.id)) {
                        let i = b(l.id, n);
                        if (0 === i.length && !(l.isStaff() && e?.isStaff())) return t;
                        i.length > 0 && (r.mutualGuilds = i);
                    }
                    return t.push(r), t;
                }, [])
                .sort(L)),
            O(!1),
            !0
        );
    }
    let s = S.default.getCurrentUser();
    s?.isStaff(), c.A.requestMembers(null, N);
    let a = null != l ? l.recipients : [];
    return (
        null != i &&
            i.setQuery({
                query: N,
                filters: void 0,
                blacklist: a,
                boosters:
                    ((t = Math.max(
                        ...(e = p.A.getFrequentlyWithoutFetchingLatest().filter(
                            (e) => e instanceof d.cq && e.isDM(),
                        )).map((e) => {
                            let { id: t } = e;
                            return p.A.getScoreWithoutFetchingLatest(t);
                        }),
                    )),
                    (n = {}),
                    e.forEach((e) => {
                        let i = p.A.getScoreWithoutFetchingLatest(e.id),
                            l = e.getRecipientId(),
                            r = 0.2 * !!I.A.isFriend(l),
                            s = 0.1 * (null != f.A.getDMFromUserId(l));
                        n[l] = 1 + i / t + r + s;
                    }),
                    n),
            }),
        !1
    );
}
function P() {
    if (!_) return !1;
    let e = M;
    return (M = I.A.getFriendCount() > 0) !== e;
}
function L(e, t) {
    if (A.A.hasConsented(C.YAq.PERSONALIZATION)) {
        let n = o.A.getUserAffinity(e.user.id)?.communicationProbability ?? 0,
            i = o.A.getUserAffinity(t.user.id)?.communicationProbability ?? 0;
        if (n !== i) return i - n;
    }
    return (0, h.sS)(g.Ay.getName(e.user).toLocaleLowerCase()).localeCompare(
        (0, h.sS)(g.Ay.getName(t.user).toLocaleLowerCase()),
    );
}
function b(e, t) {
    let n = u.$s.getSetting(),
        i = [];
    for (let l of t) {
        if (n.includes(l) || !E.Ay.isMember(l, e)) continue;
        let t = m.A.getGuild(l);
        null != t && i.push(t);
    }
    return i;
}
function G(e) {
    let { results: t } = e;
    if (!_ || "" === N) return;
    let n = S.default.getCurrentUser(),
        i = new Set(m.A.getGuildIds()),
        l = [];
    for (let { id: e, comparator: r } of t) {
        if (null != n && e === n.id) continue;
        let t = S.default.getUser(e);
        if (null == t || t.isProvisional || (t.bot && !(t.isStaff() && n?.isStaff()))) continue;
        let s = { user: t, comparator: r };
        if (null != i && !I.A.isFriend(t.id)) {
            let e = b(t.id, i);
            if (0 === e.length && !(t.isStaff() && n?.isStaff())) continue;
            e.length > 0 && (s.mutualGuilds = e);
        }
        l.push(s);
    }
    (v = l), Y.emitChange();
}
function F() {
    return null != i && (i.destroy(), (i = null)), s.A.getUserSearchContext(G, 1e3);
}
function j(e) {
    if (e.key !== C.TLS) return !1;
    (_ = !0), P(), (i = F()), (R = null), U("");
}
function V(e) {
    if (e.key !== C.TLS) return !1;
    k();
}
function k() {
    null != i && (i.destroy(), (i = null)), x();
}
function H() {
    return !!_ && w();
}
class B extends l.Ay.Store {
    static displayName = "PrivateChannelRecipientsInviteStore";
    initialize() {
        this.waitFor(f.A, A.A, a.A, p.A, E.Ay, m.A, I.A, o.A, S.default),
            this.syncWith([S.default, f.A], w),
            this.syncWith([o.A], H),
            this.syncWith([I.A], P);
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
let Y = new B(r.h, {
        CONNECTION_OPEN: function () {
            x();
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
            return !!_ && O(!1);
        },
        GUILD_MEMBERS_REQUEST: function (e) {
            let { query: t } = e;
            return !!_ && t === N.toLocaleLowerCase() && O(!0);
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let i = _;
            return x(), (_ = i), (R = n), w();
        },
        MODAL_PUSH: j,
        SHOW_ACTION_SHEET: j,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (_ = !0), P(), (i = F()), (R = e.channelId), U("");
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
