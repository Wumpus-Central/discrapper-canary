let i;
n.d(t, { A: () => Y }), n(321073);
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
    m = n(71393),
    S = n(994500),
    p = n(287809),
    C = n(652215);
let _ = !1,
    N = "",
    T = 0,
    v = [],
    M = !1,
    y = new Set(),
    D = null,
    x = new Set();
function R() {
    (N = ""), (T = 0), (v = []), (y = new Set()), (_ = !1), (D = null);
}
function O(e) {
    (N = e), (T = 0), U();
}
function U() {
    let e, t, n;
    if (!_) return !1;
    let l = f.A.getChannel(D);
    if (0 === N.trim().length) {
        var s;
        let e, t, n, r;
        return (
            null != i && i.clearQuery(),
            (s = l),
            (e = p.default.getCurrentUser()),
            (t = (0, o.G)()),
            (n = [...S.A.getFriendIDs()]),
            e?.isStaff() &&
                (n = Array.from(
                    new Set([...n, ...p.default.filter((t) => t.isStaff() && t.id !== e.id, !1).map((e) => e.id)]),
                )),
            (r = null),
            t &&
                ((r = new Set(m.A.getGuildIds())),
                (n = Array.from(
                    new Set([
                        ...n,
                        ...u.A.getUserAffinities()
                            .map((e) => e.otherUserId)
                            .filter((e) => !S.A.isBlockedOrIgnored(e))
                            .filter((e) => !S.A.isFriend(e))
                            .filter((e) => x.has(e)),
                    ]),
                ))),
            s?.isGroupDM() && (n = n.filter((e) => !s.recipients.includes(e))),
            (v = n
                .reduce((n, i) => {
                    let l = p.default.getUser(i);
                    if (null == l || l.isProvisional || (l.bot && !(l.isStaff() && e?.isStaff()))) return n;
                    let s = { user: l, comparator: g.Ay.getName(l) };
                    if (t && null != r && !S.A.isFriend(l.id)) {
                        let t = P(l.id, r);
                        if (0 === t.length && !(l.isStaff() && e?.isStaff())) return n;
                        t.length > 0 && (s.mutualGuilds = t);
                    }
                    return n.push(s), n;
                }, [])
                .sort(w)),
            !0
        );
    }
    let r = p.default.getCurrentUser(),
        a = r?.isStaff() ?? !1,
        h = (0, o.G)();
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
function L() {
    if (!_) return !1;
    let e = M;
    return (M = S.A.getFriendCount() > 0) !== e;
}
function w(e, t) {
    if (A.A.hasConsented(C.YAq.PERSONALIZATION)) {
        let n = u.A.getUserAffinity(e.user.id)?.communicationProbability ?? 0,
            i = u.A.getUserAffinity(t.user.id)?.communicationProbability ?? 0;
        if (n !== i) return i - n;
    }
    return (0, h.sS)(g.Ay.getName(e.user).toLocaleLowerCase()).localeCompare(
        (0, h.sS)(g.Ay.getName(t.user).toLocaleLowerCase()),
    );
}
function P(e, t) {
    let n = [];
    for (let i of t) {
        if (!I.Ay.isMember(i, e)) continue;
        let t = m.A.getGuild(i);
        null != t && n.push(t);
    }
    return n;
}
function G(e) {
    let { results: t } = e;
    if (!_ || "" === N) return;
    let n = p.default.getCurrentUser(),
        i = (0, o.G)(),
        l = i ? new Set(m.A.getGuildIds()) : null,
        s = [];
    for (let { id: e, comparator: r } of t) {
        let t = p.default.getUser(e);
        if (null == t || t.isProvisional || (t.bot && !(t.isStaff() && n?.isStaff()))) continue;
        let a = { user: t, comparator: r };
        if (i && null != l && !S.A.isFriend(t.id)) {
            let e = P(t.id, l);
            if (0 === e.length && !(t.isStaff() && n?.isStaff())) continue;
            e.length > 0 && (a.mutualGuilds = e);
        }
        s.push(a);
    }
    (v = s), B.emitChange();
}
function b() {
    return null != i && (i.destroy(), (i = null)), r.A.getUserSearchContext(G, 1e3);
}
function j(e) {
    if (e.key !== C.TLS) return !1;
    (_ = !0), L(), (i = b()), (D = null), O("");
}
function F(e) {
    if (e.key !== C.TLS) return !1;
    V();
}
function V() {
    null != i && (i.destroy(), (i = null)), (x = new Set()), R();
}
function k() {
    return !!_ && !!(0, o.G)() && U();
}
class H extends l.Ay.Store {
    static displayName = "PrivateChannelRecipientsInviteStore";
    initialize() {
        this.waitFor(f.A, A.A, a.A, E.A, I.Ay, m.A, S.A, u.A, p.default),
            this.syncWith([p.default, f.A], U),
            this.syncWith([u.A], k),
            this.syncWith([S.A], L);
    }
    getResults() {
        return v;
    }
    hasFriends() {
        return M;
    }
    getSelectedUsers() {
        return y;
    }
    getQuery() {
        return N;
    }
    getState() {
        return { query: N, selectedRow: T, selectedUsers: y, results: v, hasFriends: M };
    }
}
let B = new H(s.h, {
        CONNECTION_OPEN: function () {
            R(), (x = new Set());
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            let { guilds: t } = e;
            if (!_ || !(0, o.G)()) return !1;
            for (let e of t) for (let t of e.members) x.add(t.user.id);
            return !1;
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            if (!_ || !(0, o.G)()) return !1;
            for (let e of t.members) x.add(e.user.id);
            return !1;
        },
        GUILD_MEMBER_ADD: function (e) {
            let { user: t } = e;
            return !!_ && !!(0, o.G)() && (x.add(t.id), !1);
        },
        GUILD_MEMBER_REMOVE: function (e) {
            let { user: t } = e;
            return !!_ && !!(0, o.G)() && 0 === I.Ay.memberOf(t.id).length && (x.delete(t.id), !1);
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
            let { chunks: t } = e;
            if (!_ || !(0, o.G)()) return !1;
            for (let e of t) for (let t of e.members) x.add(t.user.id);
            return !1;
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let i = _;
            return R(), (_ = i), (D = n), U();
        },
        MODAL_PUSH: j,
        SHOW_ACTION_SHEET: j,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (_ = !0),
                (function () {
                    if (((x = new Set()), !(0, o.G)())) return;
                    let e = I.Ay.getMutableAllGuildsAndMembers();
                    for (let t in e) for (let n in e[t]) x.add(n);
                })(),
                L(),
                (i = b()),
                (D = e.channelId),
                O("");
        },
        MODAL_POP: F,
        HIDE_ACTION_SHEET: F,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: V,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            (D = e.channelId), O(e.query);
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            T = e.row;
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
    Y = B;
