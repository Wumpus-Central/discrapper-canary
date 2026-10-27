let i;
(n.d(t, { A: () => Y }), n(321073));
var l = n(17928),
    r = n(73153),
    s = n(450827),
    a = n(736056),
    o = n(427358),
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
    T = "",
    N = 0,
    v = [],
    y = !1,
    M = !1,
    D = new Set(),
    R = null;
function O() {
    ((T = ""), (N = 0), (v = []), (D = new Set()), (_ = !1), (R = null), (M = !1));
}
function x(e) {
    return M !== e && ((M = e), !0);
}
function L(e) {
    return ((T = e), (N = 0), w());
}
function w() {
    let e, t, n;
    if (!_) return !1;
    let l = g.A.getChannel(R);
    if (0 === T.trim().length) {
        var r;
        let e, t, n;
        return (
            null != i && i.clearQuery(),
            (r = l),
            (e = S.default.getCurrentUser()),
            (t = [...E.A.getFriendIDs()]),
            e?.isStaff() &&
                (t = Array.from(
                    new Set([...t, ...S.default.filter((t) => t.isStaff() && t.id !== e.id, !1).map((e) => e.id)]),
                )),
            (n = null),
            (n = new Set(I.A.getGuildIds())),
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
            (v = t
                .reduce((t, i) => {
                    let l = S.default.getUser(i);
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
            x(!1),
            !0
        );
    }
    let s = S.default.getCurrentUser();
    (s?.isStaff(), c.A.requestMembers(null, T));
    let a = null != l ? l.recipients : [];
    return (
        null != i &&
            i.setQuery({
                query: T,
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
    let e = y;
    return (y = E.A.getFriendCount() > 0) !== e;
}
function P(e, t) {
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
    for (let l of t) {
        if (n.includes(l) || !m.Ay.isMember(l, e)) continue;
        let t = I.A.getGuild(l);
        null != t && i.push(t);
    }
    return i;
}
function G(e) {
    let { results: t } = e;
    if (!_ || "" === T) return;
    let n = S.default.getCurrentUser(),
        i = new Set(I.A.getGuildIds()),
        l = [];
    for (let { id: e, comparator: r } of t) {
        if (null != n && e === n.id) continue;
        let t = S.default.getUser(e);
        if (null == t || t.isProvisional || (t.bot && !(t.isStaff() && n?.isStaff()))) continue;
        let s = { user: t, comparator: r };
        if (null != i && !E.A.isFriend(t.id)) {
            let e = b(t.id, i);
            if (0 === e.length && !(t.isStaff() && n?.isStaff())) continue;
            e.length > 0 && (s.mutualGuilds = e);
        }
        l.push(s);
    }
    ((v = l), W.emitChange());
}
function F() {
    return (null != i && (i.destroy(), (i = null)), s.A.getUserSearchContext(G, 1e3));
}
function j(e) {
    if (e.key !== C.TLS) return !1;
    ((_ = !0), U(), (i = F()), (R = null), L(""));
}
function k(e) {
    if (e.key !== C.TLS) return !1;
    V();
}
function V() {
    (null != i && (i.destroy(), (i = null)), O());
}
function H() {
    return !!_ && w();
}
class B extends l.Ay.Store {
    static displayName = "PrivateChannelRecipientsInviteStore";
    initialize() {
        (this.waitFor(g.A, A.A, a.A, p.A, m.Ay, I.A, E.A, o.A, S.default),
            this.syncWith([S.default, g.A], w),
            this.syncWith([o.A], H),
            this.syncWith([E.A], U));
    }
    getResults() {
        return v;
    }
    hasFriends() {
        return y;
    }
    getSelectedUsers() {
        return D;
    }
    getQuery() {
        return T;
    }
    getState() {
        return { query: T, selectedRow: N, selectedUsers: D, results: v, hasFriends: y, isLoading: M };
    }
}
let W = new B(r.h, {
        CONNECTION_OPEN: function () {
            O();
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
            return !!_ && x(!1);
        },
        GUILD_MEMBERS_REQUEST: function (e) {
            let { query: t } = e;
            return !!_ && t === T.toLocaleLowerCase() && x(!0);
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let i = _;
            return (O(), (_ = i), (R = n), w());
        },
        MODAL_PUSH: j,
        SHOW_ACTION_SHEET: j,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            ((_ = !0), U(), (i = F()), (R = e.channelId), L(""));
        },
        MODAL_POP: k,
        HIDE_ACTION_SHEET: k,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: V,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            ((R = e.channelId), L(e.query));
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            N = e.row;
        },
        PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function (e) {
            let { userId: t } = e;
            (D.add(t), (D = new Set(D)));
        },
        PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function (e) {
            let { userId: t } = e;
            (D.delete(t), (D = new Set(D)));
        },
    }),
    Y = W;
