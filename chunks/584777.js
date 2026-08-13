let i;
n.d(t, { A: () => Y }), n(321073);
var l = n(17928),
    s = n(228366),
    r = n(450827),
    a = n(736056),
    o = n(427358),
    u = n(885386),
    d = n(95701),
    c = n(695184),
    h = n(240248),
    g = n(427262),
    f = n(734057),
    A = n(153488),
    E = n(205761),
    I = n(696451),
    p = n(71393),
    m = n(994500),
    S = n(287809),
    _ = n(652215);
let C = !1,
    N = "",
    T = 0,
    v = [],
    M = !1,
    y = !1,
    D = new Set(),
    R = null;
function O() {
    (N = ""), (T = 0), (v = []), (D = new Set()), (C = !1), (R = null), (y = !1);
}
function x(e) {
    return y !== e && ((y = e), !0);
}
function U(e) {
    return (N = e), (T = 0), w();
}
function w() {
    let e, t, n;
    if (!C) return !1;
    let l = f.A.getChannel(R);
    if (0 === N.trim().length) {
        var s;
        let e, t, n;
        return (
            null != i && i.clearQuery(),
            (s = l),
            (e = S.default.getCurrentUser()),
            (t = [...m.A.getFriendIDs()]),
            e?.isStaff() &&
                (t = Array.from(
                    new Set([...t, ...S.default.filter((t) => t.isStaff() && t.id !== e.id, !1).map((e) => e.id)]),
                )),
            (n = null),
            (n = new Set(p.A.getGuildIds())),
            (t = Array.from(
                new Set([
                    ...t,
                    ...o.A.getUserAffinities()
                        .map((e) => e.otherUserId)
                        .filter((t) => t !== e?.id)
                        .filter((e) => !m.A.isBlockedOrIgnored(e))
                        .filter((e) => !m.A.isFriend(e)),
                ]),
            )),
            s?.isGroupDM() && (t = t.filter((e) => !s.recipients.includes(e))),
            (v = t
                .reduce((t, i) => {
                    let l = S.default.getUser(i);
                    if (null == l || l.isProvisional || (l.bot && !(l.isStaff() && e?.isStaff()))) return t;
                    let s = { user: l, comparator: g.Ay.getName(l) };
                    if (null != n && !m.A.isFriend(l.id)) {
                        let i = G(l.id, n);
                        if (0 === i.length && !(l.isStaff() && e?.isStaff())) return t;
                        i.length > 0 && (s.mutualGuilds = i);
                    }
                    return t.push(s), t;
                }, [])
                .sort(P)),
            x(!1),
            !0
        );
    }
    let r = S.default.getCurrentUser();
    r?.isStaff(), c.A.requestMembers(null, N);
    let a = null != l ? l.recipients : [];
    return (
        null != i &&
            i.setQuery({
                query: N,
                filters: void 0,
                blacklist: a,
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
                            s = 0.2 * !!m.A.isFriend(l),
                            r = 0.1 * (null != f.A.getDMFromUserId(l));
                        n[l] = 1 + i / t + s + r;
                    }),
                    n),
            }),
        !1
    );
}
function L() {
    if (!C) return !1;
    let e = M;
    return (M = m.A.getFriendCount() > 0) !== e;
}
function P(e, t) {
    if (A.A.hasConsented(_.YAq.PERSONALIZATION)) {
        let n = o.A.getUserAffinity(e.user.id)?.communicationProbability ?? 0,
            i = o.A.getUserAffinity(t.user.id)?.communicationProbability ?? 0;
        if (n !== i) return i - n;
    }
    return (0, h.sS)(g.Ay.getName(e.user).toLocaleLowerCase()).localeCompare(
        (0, h.sS)(g.Ay.getName(t.user).toLocaleLowerCase()),
    );
}
function G(e, t) {
    let n = u.$s.getSetting(),
        i = [];
    for (let l of t) {
        if (n.includes(l) || !I.Ay.isMember(l, e)) continue;
        let t = p.A.getGuild(l);
        null != t && i.push(t);
    }
    return i;
}
function b(e) {
    let { results: t } = e;
    if (!C || "" === N) return;
    let n = S.default.getCurrentUser(),
        i = new Set(p.A.getGuildIds()),
        l = [];
    for (let { id: e, comparator: s } of t) {
        if (null != n && e === n.id) continue;
        let t = S.default.getUser(e);
        if (null == t || t.isProvisional || (t.bot && !(t.isStaff() && n?.isStaff()))) continue;
        let r = { user: t, comparator: s };
        if (null != i && !m.A.isFriend(t.id)) {
            let e = G(t.id, i);
            if (0 === e.length && !(t.isStaff() && n?.isStaff())) continue;
            e.length > 0 && (r.mutualGuilds = e);
        }
        l.push(r);
    }
    (v = l), W.emitChange();
}
function F() {
    return null != i && (i.destroy(), (i = null)), r.A.getUserSearchContext(b, 1e3);
}
function j(e) {
    if (e.key !== _.TLS) return !1;
    (C = !0), L(), (i = F()), (R = null), U("");
}
function V(e) {
    if (e.key !== _.TLS) return !1;
    k();
}
function k() {
    null != i && (i.destroy(), (i = null)), O();
}
function H() {
    return !!C && w();
}
class B extends l.Ay.Store {
    static displayName = "PrivateChannelRecipientsInviteStore";
    initialize() {
        this.waitFor(f.A, A.A, a.A, E.A, I.Ay, p.A, m.A, o.A, S.default),
            this.syncWith([S.default, f.A], w),
            this.syncWith([o.A], H),
            this.syncWith([m.A], L);
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
let W = new B(s.h, {
        CONNECTION_OPEN: function () {
            O();
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
            return !!C && x(!1);
        },
        GUILD_MEMBERS_REQUEST: function (e) {
            let { query: t } = e;
            return !!C && t === N.toLocaleLowerCase() && x(!0);
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let i = C;
            return O(), (C = i), (R = n), w();
        },
        MODAL_PUSH: j,
        SHOW_ACTION_SHEET: j,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (C = !0), L(), (i = F()), (R = e.channelId), U("");
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
    Y = W;
