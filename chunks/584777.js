let i;
n(321073);
var r = n(855986),
    l = n(73153),
    s = n(450827),
    a = n(343446),
    o = n(812020),
    u = n(253932),
    d = n(95701),
    c = n(695184),
    h = n(240248),
    f = n(427262),
    g = n(734057),
    A = n(153488),
    p = n(205761),
    m = n(696451),
    I = n(71393),
    E = n(994500),
    S = n(287809),
    C = n(652215);
let _ = !1,
    N = "",
    T = 0,
    y = [],
    v = !1,
    M = !1,
    D = new Set(),
    R = null;
function O() {
    ((N = ""), (T = 0), (y = []), (D = new Set()), (_ = !1), (R = null), (M = !1));
}
function x(e) {
    return M !== e && ((M = e), !0);
}
function P(e) {
    return ((N = e), (T = 0), L());
}
function L() {
    let e, t, n;
    if (!_) return !1;
    let r = g.A.getChannel(R);
    if (0 === N.trim().length)
        return (
            null != i && i.clearQuery(),
            (y = (function (e) {
                let t = S.default.getCurrentUser(),
                    n = [...E.A.getFriendIDs()];
                if (t?.isStaff()) {
                    let e = S.default.filter((e) => e.isStaff() && e.id !== t.id, !1).map((e) => e.id);
                    n = Array.from(new Set([...n, ...e]));
                }
                let i = null;
                {
                    i = new Set(I.A.getGuildIds());
                    let e = o.A.getUserAffinities()
                        .map((e) => e.otherUserId)
                        .filter((e) => e !== t?.id)
                        .filter((e) => !E.A.isBlockedOrIgnored(e))
                        .filter((e) => !E.A.isFriend(e));
                    n = Array.from(new Set([...n, ...e]));
                }
                return (
                    e?.isGroupDM() && (n = n.filter((t) => !e.recipients.includes(t))),
                    n
                        .reduce((e, n) => {
                            let r = S.default.getUser(n);
                            if (null == r || r.isProvisional || (r.bot && !(r.isStaff() && t?.isStaff()))) return e;
                            let l = { user: r, comparator: f.Ay.getName(r) };
                            if (null != i && !E.A.isFriend(r.id)) {
                                let n = b(r.id, i);
                                if (0 === n.length && !(r.isStaff() && t?.isStaff())) return e;
                                n.length > 0 && (l.mutualGuilds = n);
                            }
                            return (e.push(l), e);
                        }, [])
                        .sort(w)
                );
            })(r)),
            x(!1),
            !0
        );
    let l = S.default.getCurrentUser();
    (l?.isStaff(), c.A.requestMembers(null, N));
    let s = null != r ? r.recipients : [];
    return (
        null != i &&
            i.setQuery({
                query: N,
                filters: void 0,
                blacklist: s,
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
                            r = e.getRecipientId(),
                            l = 0.2 * !!E.A.isFriend(r),
                            s = 0.1 * (null != g.A.getDMFromUserId(r));
                        n[r] = 1 + i / t + l + s;
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
function w(e, t) {
    if (A.A.hasConsented(C.YAq.PERSONALIZATION)) {
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
    for (let r of t) {
        if (n.includes(r) || !m.Ay.isMember(r, e)) continue;
        let t = I.A.getGuild(r);
        null != t && i.push(t);
    }
    return i;
}
function G(e) {
    let { results: t } = e;
    if (!_ || "" === N) return;
    let n = S.default.getCurrentUser(),
        i = new Set(I.A.getGuildIds()),
        r = [];
    for (let { id: e, comparator: l } of t) {
        if (null != n && e === n.id) continue;
        let t = S.default.getUser(e);
        if (null == t || t.isProvisional || (t.bot && !(t.isStaff() && n?.isStaff()))) continue;
        let s = { user: t, comparator: l };
        if (null != i && !E.A.isFriend(t.id)) {
            let e = b(t.id, i);
            if (0 === e.length && !(t.isStaff() && n?.isStaff())) continue;
            e.length > 0 && (s.mutualGuilds = e);
        }
        r.push(s);
    }
    ((y = r), W.emitChange());
}
function F() {
    return (null != i && (i.destroy(), (i = null)), s.A.getUserSearchContext(G, 1e3));
}
function j(e) {
    if (e.key !== C.TLS) return !1;
    ((_ = !0), U(), (i = F()), (R = null), P(""));
}
function k(e) {
    if (e.key !== C.TLS) return !1;
    V();
}
function V() {
    (null != i && (i.destroy(), (i = null)), O());
}
function H() {
    return !!_ && L();
}
class B extends r.Ay.Store {
    static displayName = "PrivateChannelRecipientsInviteStore";
    initialize() {
        (this.waitFor(g.A, A.A, a.A, p.A, m.Ay, I.A, E.A, o.A, S.default),
            this.syncWith([S.default, g.A], L),
            this.syncWith([o.A], H),
            this.syncWith([E.A], U));
    }
    getResults() {
        return y;
    }
    hasFriends() {
        return v;
    }
    getSelectedUsers() {
        return D;
    }
    getQuery() {
        return N;
    }
    getState() {
        return { query: N, selectedRow: T, selectedUsers: D, results: y, hasFriends: v, isLoading: M };
    }
}
let W = new B(l.h, {
    CONNECTION_OPEN: function () {
        O();
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        return !!_ && x(!1);
    },
    GUILD_MEMBERS_REQUEST: function (e) {
        let { query: t } = e;
        return !!_ && t === N.toLocaleLowerCase() && x(!0);
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        if (null != t) return !1;
        let i = _;
        return (O(), (_ = i), (R = n), L());
    },
    MODAL_PUSH: j,
    SHOW_ACTION_SHEET: j,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
        ((_ = !0), U(), (i = F()), (R = e.channelId), P(""));
    },
    MODAL_POP: k,
    HIDE_ACTION_SHEET: k,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: V,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
        ((R = e.channelId), P(e.query));
    },
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
        T = e.row;
    },
    PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function (e) {
        let { userId: t } = e;
        (D.add(t), (D = new Set(D)));
    },
    PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function (e) {
        let { userId: t } = e;
        (D.delete(t), (D = new Set(D)));
    },
});
n.d(t, {}, { A: W });
