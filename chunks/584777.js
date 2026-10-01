let i;
(n.d(t, { A: () => W }), n(321073));
var l = n(17928),
    r = n(73153),
    s = n(450827),
    a = n(736056),
    o = n(427358),
    u = n(885386),
    d = n(95701),
    c = n(695184),
    h = n(240248),
    f = n(427262),
    g = n(734057),
    C = n(153488),
    A = n(205761),
    p = n(696451),
    m = n(71393),
    E = n(994500),
    I = n(287809),
    S = n(652215);
let _ = !1,
    N = "",
    T = 0,
    M = [],
    v = !1,
    y = !1,
    L = new Set(),
    x = null;
function R() {
    ((N = ""), (T = 0), (M = []), (L = new Set()), (_ = !1), (x = null), (y = !1));
}
function D(e) {
    return y !== e && ((y = e), !0);
}
function O(e) {
    return ((N = e), (T = 0), w());
}
function w() {
    let e, t, n;
    if (!_) return !1;
    let l = g.A.getChannel(x);
    if (0 === N.trim().length) {
        var r;
        let e, t, n;
        return (
            null != i && i.clearQuery(),
            (r = l),
            (e = I.default.getCurrentUser()),
            (t = [...E.A.getFriendIDs()]),
            e?.isStaff() &&
                (t = Array.from(
                    new Set([...t, ...I.default.filter((t) => t.isStaff() && t.id !== e.id, !1).map((e) => e.id)]),
                )),
            (n = null),
            (n = new Set(m.A.getGuildIds())),
            (t = Array.from(
                new Set([
                    ...t,
                    ...o.A.getUserAffinities()
                        .map((e) => e.otherUserId)
                        .filter((t) => t !== e?.id)
                        .filter((e) => !E.A.isBlockedOrIgnored(e))
                        .filter((e) => !E.A.isFriend(e)),
                ]),
            )),
            r?.isGroupDM() && (t = t.filter((e) => !r.recipients.includes(e))),
            (M = t
                .reduce((t, i) => {
                    let l = I.default.getUser(i);
                    if (null == l || l.isProvisional || (l.bot && !(l.isStaff() && e?.isStaff()))) return t;
                    let r = { user: l, comparator: f.Ay.getName(l) };
                    if (null != n && !E.A.isFriend(l.id)) {
                        let i = b(l.id, n);
                        if (0 === i.length && !(l.isStaff() && e?.isStaff())) return t;
                        i.length > 0 && (r.mutualGuilds = i);
                    }
                    return (t.push(r), t);
                }, [])
                .sort(P)),
            D(!1),
            !0
        );
    }
    let s = I.default.getCurrentUser();
    (s?.isStaff(), c.A.requestMembers(null, N));
    let a = null != l ? l.recipients : [];
    return (
        null != i &&
            i.setQuery({
                query: N,
                filters: void 0,
                blacklist: a,
                boosters:
                    ((t = Math.max(
                        ...(e = A.A.getFrequentlyWithoutFetchingLatest().filter(
                            (e) => e instanceof d.cq && e.isDM(),
                        )).map((e) => {
                            let { id: t } = e;
                            return A.A.getScoreWithoutFetchingLatest(t);
                        }),
                    )),
                    (n = {}),
                    e.forEach((e) => {
                        let i = A.A.getScoreWithoutFetchingLatest(e.id),
                            l = e.getRecipientId(),
                            r = 0.2 * !!E.A.isFriend(l),
                            s = 0.1 * (null != g.A.getDMFromUserId(l));
                        n[l] = 1 + i / t + r + s;
                    }),
                    n),
            }),
        !1
    );
}
function U() {
    if (!_) return !1;
    let e = v;
    return (v = E.A.getFriendCount() > 0) !== e;
}
function P(e, t) {
    if (C.A.hasConsented(S.YAq.PERSONALIZATION)) {
        let n = o.A.getUserAffinity(e.user.id)?.communicationProbability ?? 0,
            i = o.A.getUserAffinity(t.user.id)?.communicationProbability ?? 0;
        if (n !== i) return i - n;
    }
    return (0, h.sS)(f.Ay.getName(e.user).toLocaleLowerCase()).localeCompare(
        (0, h.sS)(f.Ay.getName(t.user).toLocaleLowerCase()),
    );
}
function b(e, t) {
    let n = u.$s.getSetting(),
        i = [];
    for (let l of t) {
        if (n.includes(l) || !p.Ay.isMember(l, e)) continue;
        let t = m.A.getGuild(l);
        null != t && i.push(t);
    }
    return i;
}
function j(e) {
    let { results: t } = e;
    if (!_ || "" === N) return;
    let n = I.default.getCurrentUser(),
        i = new Set(m.A.getGuildIds()),
        l = [];
    for (let { id: e, comparator: r } of t) {
        if (null != n && e === n.id) continue;
        let t = I.default.getUser(e);
        if (null == t || t.isProvisional || (t.bot && !(t.isStaff() && n?.isStaff()))) continue;
        let s = { user: t, comparator: r };
        if (null != i && !E.A.isFriend(t.id)) {
            let e = b(t.id, i);
            if (0 === e.length && !(t.isStaff() && n?.isStaff())) continue;
            e.length > 0 && (s.mutualGuilds = e);
        }
        l.push(s);
    }
    ((M = l), B.emitChange());
}
function V() {
    return (null != i && (i.destroy(), (i = null)), s.A.getUserSearchContext(j, 1e3));
}
function F(e) {
    if (e.key !== S.TLS) return !1;
    ((_ = !0), U(), (i = V()), (x = null), O(""));
}
function G(e) {
    if (e.key !== S.TLS) return !1;
    H();
}
function H() {
    (null != i && (i.destroy(), (i = null)), R());
}
function k() {
    return !!_ && w();
}
class Z extends l.Ay.Store {
    static displayName = "PrivateChannelRecipientsInviteStore";
    initialize() {
        (this.waitFor(g.A, C.A, a.A, A.A, p.Ay, m.A, E.A, o.A, I.default),
            this.syncWith([I.default, g.A], w),
            this.syncWith([o.A], k),
            this.syncWith([E.A], U));
    }
    getResults() {
        return M;
    }
    hasFriends() {
        return v;
    }
    getSelectedUsers() {
        return L;
    }
    getQuery() {
        return N;
    }
    getState() {
        return { query: N, selectedRow: T, selectedUsers: L, results: M, hasFriends: v, isLoading: y };
    }
}
let B = new Z(r.h, {
        CONNECTION_OPEN: function () {
            R();
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
            return !!_ && D(!1);
        },
        GUILD_MEMBERS_REQUEST: function (e) {
            let { query: t } = e;
            return !!_ && t === N.toLocaleLowerCase() && D(!0);
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let i = _;
            return (R(), (_ = i), (x = n), w());
        },
        MODAL_PUSH: F,
        SHOW_ACTION_SHEET: F,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            ((_ = !0), U(), (i = V()), (x = e.channelId), O(""));
        },
        MODAL_POP: G,
        HIDE_ACTION_SHEET: G,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: H,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            ((x = e.channelId), O(e.query));
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            T = e.row;
        },
        PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function (e) {
            let { userId: t } = e;
            (L.add(t), (L = new Set(L)));
        },
        PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function (e) {
            let { userId: t } = e;
            (L.delete(t), (L = new Set(L)));
        },
    }),
    W = B;
