"use strict";
let i;
n.d(t, { A: () => Y }), n(321073);
var r = n(17928),
    a = n(228366),
    s = n(450827),
    l = n(736056),
    o = n(427358),
    d = n(885386),
    c = n(95701),
    u = n(695184),
    _ = n(240248),
    E = n(427262),
    A = n(734057),
    h = n(153488),
    I = n(205761),
    f = n(696451),
    p = n(71393),
    T = n(994500),
    m = n(287809),
    g = n(652215);
let S = !1,
    N = "",
    C = 0,
    O = [],
    R = !1,
    L = !1,
    D = new Set(),
    y = null;
function v() {
    (N = ""), (C = 0), (O = []), (D = new Set()), (S = !1), (y = null), (L = !1);
}
function b(e) {
    return L !== e && ((L = e), !0);
}
function M(e) {
    return (N = e), (C = 0), P();
}
function P() {
    let e, t, n;
    if (!S) return !1;
    let r = A.A.getChannel(y);
    if (0 === N.trim().length) {
        var a;
        let e, t, n;
        return (
            null != i && i.clearQuery(),
            (a = r),
            (e = m.default.getCurrentUser()),
            (t = [...T.A.getFriendIDs()]),
            e?.isStaff() &&
                (t = Array.from(
                    new Set([...t, ...m.default.filter((t) => t.isStaff() && t.id !== e.id, !1).map((e) => e.id)]),
                )),
            (n = null),
            (n = new Set(p.A.getGuildIds())),
            (t = Array.from(
                new Set([
                    ...t,
                    ...o.A.getUserAffinities()
                        .map((e) => e.otherUserId)
                        .filter((t) => t !== e?.id)
                        .filter((e) => !T.A.isBlockedOrIgnored(e))
                        .filter((e) => !T.A.isFriend(e)),
                ]),
            )),
            a?.isGroupDM() && (t = t.filter((e) => !a.recipients.includes(e))),
            (O = t
                .reduce((t, i) => {
                    let r = m.default.getUser(i);
                    if (null == r || r.isProvisional || (r.bot && !(r.isStaff() && e?.isStaff()))) return t;
                    let a = { user: r, comparator: E.Ay.getName(r) };
                    if (null != n && !T.A.isFriend(r.id)) {
                        let i = G(r.id, n);
                        if (0 === i.length && !(r.isStaff() && e?.isStaff())) return t;
                        i.length > 0 && (a.mutualGuilds = i);
                    }
                    return t.push(a), t;
                }, [])
                .sort(w)),
            b(!1),
            !0
        );
    }
    let s = m.default.getCurrentUser();
    s?.isStaff(), u.A.requestMembers(null, N);
    let l = null != r ? r.recipients : [];
    return (
        null != i &&
            i.setQuery({
                query: N,
                filters: void 0,
                blacklist: l,
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
                            r = e.getRecipientId(),
                            a = 0.2 * !!T.A.isFriend(r),
                            s = 0.1 * (null != A.A.getDMFromUserId(r));
                        n[r] = 1 + i / t + a + s;
                    }),
                    n),
            }),
        !1
    );
}
function U() {
    if (!S) return !1;
    let e = R;
    return (R = T.A.getFriendCount() > 0) !== e;
}
function w(e, t) {
    if (h.A.hasConsented(g.YAq.PERSONALIZATION)) {
        let n = o.A.getUserAffinity(e.user.id)?.communicationProbability ?? 0,
            i = o.A.getUserAffinity(t.user.id)?.communicationProbability ?? 0;
        if (n !== i) return i - n;
    }
    return (0, _.sS)(E.Ay.getName(e.user).toLocaleLowerCase()).localeCompare(
        (0, _.sS)(E.Ay.getName(t.user).toLocaleLowerCase()),
    );
}
function G(e, t) {
    let n = d.$s.getSetting(),
        i = [];
    for (let r of t) {
        if (n.includes(r) || !f.Ay.isMember(r, e)) continue;
        let t = p.A.getGuild(r);
        null != t && i.push(t);
    }
    return i;
}
function x(e) {
    let { results: t } = e;
    if (!S || "" === N) return;
    let n = m.default.getCurrentUser(),
        i = new Set(p.A.getGuildIds()),
        r = [];
    for (let { id: e, comparator: a } of t) {
        if (null != n && e === n.id) continue;
        let t = m.default.getUser(e);
        if (null == t || t.isProvisional || (t.bot && !(t.isStaff() && n?.isStaff()))) continue;
        let s = { user: t, comparator: a };
        if (null != i && !T.A.isFriend(t.id)) {
            let e = G(t.id, i);
            if (0 === e.length && !(t.isStaff() && n?.isStaff())) continue;
            e.length > 0 && (s.mutualGuilds = e);
        }
        r.push(s);
    }
    (O = r), W.emitChange();
}
function k() {
    return null != i && (i.destroy(), (i = null)), s.A.getUserSearchContext(x, 1e3);
}
function F(e) {
    if (e.key !== g.TLS) return !1;
    (S = !0), U(), (i = k()), (y = null), M("");
}
function V(e) {
    if (e.key !== g.TLS) return !1;
    B();
}
function B() {
    null != i && (i.destroy(), (i = null)), v();
}
function H() {
    return !!S && P();
}
class j extends r.Ay.Store {
    static displayName = "PrivateChannelRecipientsInviteStore";
    initialize() {
        this.waitFor(A.A, h.A, l.A, I.A, f.Ay, p.A, T.A, o.A, m.default),
            this.syncWith([m.default, A.A], P),
            this.syncWith([o.A], H),
            this.syncWith([T.A], U);
    }
    getResults() {
        return O;
    }
    hasFriends() {
        return R;
    }
    getSelectedUsers() {
        return D;
    }
    getQuery() {
        return N;
    }
    getState() {
        return { query: N, selectedRow: C, selectedUsers: D, results: O, hasFriends: R, isLoading: L };
    }
}
let W = new j(a.h, {
        CONNECTION_OPEN: function () {
            v();
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
            return !!S && b(!1);
        },
        GUILD_MEMBERS_REQUEST: function (e) {
            let { query: t } = e;
            return !!S && t === N.toLocaleLowerCase() && b(!0);
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let i = S;
            return v(), (S = i), (y = n), P();
        },
        MODAL_PUSH: F,
        SHOW_ACTION_SHEET: F,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (S = !0), U(), (i = k()), (y = e.channelId), M("");
        },
        MODAL_POP: V,
        HIDE_ACTION_SHEET: V,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: B,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            (y = e.channelId), M(e.query);
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            C = e.row;
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
