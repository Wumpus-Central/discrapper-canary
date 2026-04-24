let i;
n.d(t, { A: () => F }), n(321073);
var a = n(17928),
    r = n(228366),
    l = n(450827),
    s = n(736056),
    o = n(427358),
    c = n(95701),
    d = n(240248),
    u = n(427262),
    _ = n(734057),
    E = n(153488),
    f = n(205761),
    A = n(994500),
    S = n(287809),
    g = n(652215);
let m = !1,
    h = "",
    p = 0,
    C = [],
    N = !1,
    b = new Set(),
    T = null;
function I() {
    (h = ""), (p = 0), (C = []), (b = new Set()), (m = !1), (T = null);
}
function L(e) {
    (h = e), (p = 0), v();
}
function v() {
    if (!m) return !1;
    let e = _.A.getChannel(T);
    if (0 === h.trim().length) {
        var t;
        let n, a;
        return (
            null != i && i.clearQuery(),
            (t = e),
            (n = A.A.getFriendIDs()),
            (a = S.default.getCurrentUser()),
            a?.isStaff() &&
                (n = Array.from(
                    new Set([...n, ...S.default.filter((e) => e.isStaff() && e.id !== a.id, !1).map((e) => e.id)]),
                )),
            t?.isPrivate() && (n = n.filter((e) => !t.recipients.includes(e))),
            (C = n
                .reduce((e, t) => {
                    let n = S.default.getUser(t);
                    return null == n || n.isProvisional || e.push({ user: n, comparator: u.Ay.getName(n) }), e;
                }, [])
                .sort(M)),
            !0
        );
    }
    let n = null != e ? e.recipients : [];
    if (null != i) {
        let e,
            t,
            a,
            r = S.default.getCurrentUser(),
            l = r?.isStaff() ?? !1;
        i.setQuery({
            query: h,
            filters: { friends: !0, staff: l, provisional: !1 },
            blacklist: n,
            boosters:
                ((t = Math.max(
                    ...(e = f.A.getFrequentlyWithoutFetchingLatest().filter((e) => e instanceof c.cq && e.isDM())).map(
                        (e) => {
                            let { id: t } = e;
                            return f.A.getScoreWithoutFetchingLatest(t);
                        },
                    ),
                )),
                (a = {}),
                e.forEach((e) => {
                    let n = f.A.getScoreWithoutFetchingLatest(e.id),
                        i = e.getRecipientId(),
                        r = 0.2 * !!A.A.isFriend(i),
                        l = 0.1 * (null != _.A.getDMFromUserId(i));
                    a[i] = 1 + n / t + r + l;
                }),
                a),
        });
    }
    return !1;
}
function D() {
    if (!m) return !1;
    let e = N;
    return (N = A.A.getFriendCount() > 0) !== e;
}
function M(e, t) {
    if (E.A.hasConsented(g.YAq.PERSONALIZATION)) {
        let n = o.A.getUserAffinity(e.user.id)?.communicationProbability ?? 0,
            i = o.A.getUserAffinity(t.user.id)?.communicationProbability ?? 0;
        if (n !== i) return i - n;
    }
    return (0, d.sS)(u.Ay.getName(e.user).toLocaleLowerCase()).localeCompare(
        (0, d.sS)(u.Ay.getName(t.user).toLocaleLowerCase()),
    );
}
function R(e) {
    let { results: t } = e;
    if (!m || "" === h) return;
    let n = [];
    for (let { id: e, comparator: i } of t) {
        let t = S.default.getUser(e);
        null != t && n.push({ user: t, comparator: i });
    }
    (C = n), w.emitChange();
}
function O() {
    return null != i && (i.destroy(), (i = null)), l.A.getUserSearchContext(R, 1e3);
}
function x(e) {
    if (e.key !== g.TLS) return !1;
    (m = !0), D(), (i = O()), (T = null), L("");
}
function y(e) {
    if (e.key !== g.TLS) return !1;
    U();
}
function U() {
    null != i && (i.destroy(), (i = null)), I();
}
class P extends a.Ay.Store {
    static displayName = "PrivateChannelRecipientsInviteStore";
    initialize() {
        this.waitFor(_.A, E.A, s.A, f.A, A.A, o.A, S.default),
            this.syncWith([S.default, _.A], v),
            this.syncWith([A.A], D);
    }
    getResults() {
        return C;
    }
    hasFriends() {
        return N;
    }
    getSelectedUsers() {
        return b;
    }
    getQuery() {
        return h;
    }
    getState() {
        return { query: h, selectedRow: p, selectedUsers: b, results: C, hasFriends: N };
    }
}
let w = new P(r.h, {
        CONNECTION_OPEN: function () {
            I();
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let i = m;
            return I(), (m = i), (T = n), v();
        },
        MODAL_PUSH: x,
        SHOW_ACTION_SHEET: x,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (m = !0), D(), (i = O()), (T = e.channelId), L("");
        },
        MODAL_POP: y,
        HIDE_ACTION_SHEET: y,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: U,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            (T = e.channelId), L(e.query);
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            p = e.row;
        },
        PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function (e) {
            let { userId: t } = e;
            b.add(t), (b = new Set(b));
        },
        PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function (e) {
            let { userId: t } = e;
            b.delete(t), (b = new Set(b));
        },
    }),
    F = w;
