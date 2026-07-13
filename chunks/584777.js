let i;
n.d(t, { A: () => z }), n(321073);
var l = n(17928),
    s = n(228366),
    r = n(450827),
    a = n(736056),
    o = n(18707),
    u = n(427358),
    d = n(885386),
    c = n(95701),
    h = n(695184),
    g = n(240248),
    f = n(427262),
    A = n(734057),
    E = n(153488),
    I = n(205761),
    S = n(696451),
    p = n(71393),
    m = n(994500),
    _ = n(287809),
    C = n(652215);
let N = !1,
    T = "",
    v = 0,
    M = [],
    y = !1,
    D = !1,
    R = new Set(),
    x = null;
function O() {
    (T = ""), (v = 0), (M = []), (R = new Set()), (N = !1), (x = null), (D = !1);
}
function U(e) {
    return D !== e && ((D = e), !0);
}
function w(e) {
    return (T = e), (v = 0), L();
}
function L() {
    let e, t, n;
    if (!N) return !1;
    let l = A.A.getChannel(x);
    if (0 === T.trim().length) {
        var s;
        let e, t, n, r;
        return (
            null != i && i.clearQuery(),
            (s = l),
            (e = _.default.getCurrentUser()),
            (t = (0, o.G)("PrivateChannelRecipientsInviteStore")),
            (n = [...m.A.getFriendIDs()]),
            e?.isStaff() &&
                (n = Array.from(
                    new Set([...n, ..._.default.filter((t) => t.isStaff() && t.id !== e.id, !1).map((e) => e.id)]),
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
                            .filter((e) => !m.A.isBlockedOrIgnored(e))
                            .filter((e) => !m.A.isFriend(e)),
                    ]),
                ))),
            s?.isGroupDM() && (n = n.filter((e) => !s.recipients.includes(e))),
            (M = n
                .reduce((n, i) => {
                    let l = _.default.getUser(i);
                    if (null == l || l.isProvisional || (l.bot && !(l.isStaff() && e?.isStaff()))) return n;
                    let s = { user: l, comparator: f.Ay.getName(l) };
                    if (t && null != r && !m.A.isFriend(l.id)) {
                        let t = F(l.id, r);
                        if (0 === t.length && !(l.isStaff() && e?.isStaff())) return n;
                        t.length > 0 && (s.mutualGuilds = t);
                    }
                    return n.push(s), n;
                }, [])
                .sort(G)),
            U(!1),
            !0
        );
    }
    let r = _.default.getCurrentUser(),
        a = r?.isStaff() ?? !1,
        d = (0, o.G)("PrivateChannelRecipientsInviteStore");
    d && h.A.requestMembers(null, T);
    let g = null != l ? l.recipients : [];
    return (
        null != i &&
            i.setQuery({
                query: T,
                filters: d ? void 0 : { friends: !0, staff: a, provisional: !1 },
                blacklist: g,
                boosters:
                    ((t = Math.max(
                        ...(e = I.A.getFrequentlyWithoutFetchingLatest().filter(
                            (e) => e instanceof c.cq && e.isDM(),
                        )).map((e) => {
                            let { id: t } = e;
                            return I.A.getScoreWithoutFetchingLatest(t);
                        }),
                    )),
                    (n = {}),
                    e.forEach((e) => {
                        let i = I.A.getScoreWithoutFetchingLatest(e.id),
                            l = e.getRecipientId(),
                            s = 0.2 * !!m.A.isFriend(l),
                            r = 0.1 * (null != A.A.getDMFromUserId(l));
                        n[l] = 1 + i / t + s + r;
                    }),
                    n),
            }),
        !1
    );
}
function P() {
    if (!N) return !1;
    let e = y;
    return (y = m.A.getFriendCount() > 0) !== e;
}
function G(e, t) {
    if (E.A.hasConsented(C.YAq.PERSONALIZATION)) {
        let n = u.A.getUserAffinity(e.user.id)?.communicationProbability ?? 0,
            i = u.A.getUserAffinity(t.user.id)?.communicationProbability ?? 0;
        if (n !== i) return i - n;
    }
    return (0, g.sS)(f.Ay.getName(e.user).toLocaleLowerCase()).localeCompare(
        (0, g.sS)(f.Ay.getName(t.user).toLocaleLowerCase()),
    );
}
function F(e, t) {
    let n = d.$s.getSetting(),
        i = [];
    for (let l of t) {
        if (n.includes(l) || !S.Ay.isMember(l, e)) continue;
        let t = p.A.getGuild(l);
        null != t && i.push(t);
    }
    return i;
}
function b(e) {
    let { results: t } = e;
    if (!N || "" === T) return;
    let n = _.default.getCurrentUser(),
        i = (0, o.G)("PrivateChannelRecipientsInviteStore"),
        l = i ? new Set(p.A.getGuildIds()) : null,
        s = [];
    for (let { id: e, comparator: r } of t) {
        if (null != n && e === n.id) continue;
        let t = _.default.getUser(e);
        if (null == t || t.isProvisional || (t.bot && !(t.isStaff() && n?.isStaff()))) continue;
        let a = { user: t, comparator: r };
        if (i && null != l && !m.A.isFriend(t.id)) {
            let e = F(t.id, l);
            if (0 === e.length && !(t.isStaff() && n?.isStaff())) continue;
            e.length > 0 && (a.mutualGuilds = e);
        }
        s.push(a);
    }
    (M = s), W.emitChange();
}
function j() {
    return null != i && (i.destroy(), (i = null)), r.A.getUserSearchContext(b, 1e3);
}
function V(e) {
    if (e.key !== C.TLS) return !1;
    (N = !0), P(), (i = j()), (x = null), w("");
}
function k(e) {
    if (e.key !== C.TLS) return !1;
    H();
}
function H() {
    null != i && (i.destroy(), (i = null)), O();
}
function B() {
    return !!N && !!(0, o.G)("PrivateChannelRecipientsInviteStore") && L();
}
class Y extends l.Ay.Store {
    static displayName = "PrivateChannelRecipientsInviteStore";
    initialize() {
        this.waitFor(A.A, E.A, a.A, I.A, S.Ay, p.A, m.A, u.A, _.default),
            this.syncWith([_.default, A.A], L),
            this.syncWith([u.A], B),
            this.syncWith([m.A], P);
    }
    getResults() {
        return M;
    }
    hasFriends() {
        return y;
    }
    getSelectedUsers() {
        return R;
    }
    getQuery() {
        return T;
    }
    getState() {
        return { query: T, selectedRow: v, selectedUsers: R, results: M, hasFriends: y, isLoading: D };
    }
}
let W = new Y(s.h, {
        CONNECTION_OPEN: function () {
            O();
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
            return !!N && !!(0, o.G)("PrivateChannelRecipientsInviteStore") && U(!1);
        },
        GUILD_MEMBERS_REQUEST: function (e) {
            let { query: t } = e;
            return !!N && !!(0, o.G)("PrivateChannelRecipientsInviteStore") && t === T.toLocaleLowerCase() && U(!0);
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let i = N;
            return O(), (N = i), (x = n), L();
        },
        MODAL_PUSH: V,
        SHOW_ACTION_SHEET: V,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (N = !0), P(), (i = j()), (x = e.channelId), w("");
        },
        MODAL_POP: k,
        HIDE_ACTION_SHEET: k,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: H,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            (x = e.channelId), w(e.query);
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            v = e.row;
        },
        PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function (e) {
            let { userId: t } = e;
            R.add(t), (R = new Set(R));
        },
        PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function (e) {
            let { userId: t } = e;
            R.delete(t), (R = new Set(R));
        },
    }),
    z = W;
