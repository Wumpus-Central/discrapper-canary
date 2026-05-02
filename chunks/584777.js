let i;
n.d(t, { A: () => j }), n(321073);
var l = n(17928),
    s = n(228366),
    r = n(450827),
    a = n(736056),
    o = n(427358),
    u = n(95701),
    d = n(240248),
    c = n(427262),
    h = n(734057),
    g = n(153488),
    A = n(205761),
    f = n(994500),
    E = n(287809),
    I = n(652215);
let S = !1,
    m = "",
    p = 0,
    C = [],
    _ = !1,
    N = new Set(),
    T = null;
function v() {
    (m = ""), (p = 0), (C = []), (N = new Set()), (S = !1), (T = null);
}
function M(e) {
    (m = e), (p = 0), y();
}
function y() {
    if (!S) return !1;
    let e = h.A.getChannel(T);
    if (0 === m.trim().length) {
        var t;
        let n, l;
        return (
            null != i && i.clearQuery(),
            (t = e),
            (n = f.A.getFriendIDs()),
            (l = E.default.getCurrentUser()),
            l?.isStaff() &&
                (n = Array.from(
                    new Set([...n, ...E.default.filter((e) => e.isStaff() && e.id !== l.id, !1).map((e) => e.id)]),
                )),
            t?.isGroupDM() && (n = n.filter((e) => !t.recipients.includes(e))),
            (C = n
                .reduce((e, t) => {
                    let n = E.default.getUser(t);
                    return null == n || n.isProvisional || e.push({ user: n, comparator: c.Ay.getName(n) }), e;
                }, [])
                .sort(x)),
            !0
        );
    }
    let n = null != e ? e.recipients : [];
    if (null != i) {
        let e,
            t,
            l,
            s = E.default.getCurrentUser(),
            r = s?.isStaff() ?? !1;
        i.setQuery({
            query: m,
            filters: { friends: !0, staff: r, provisional: !1 },
            blacklist: n,
            boosters:
                ((t = Math.max(
                    ...(e = A.A.getFrequentlyWithoutFetchingLatest().filter((e) => e instanceof u.cq && e.isDM())).map(
                        (e) => {
                            let { id: t } = e;
                            return A.A.getScoreWithoutFetchingLatest(t);
                        },
                    ),
                )),
                (l = {}),
                e.forEach((e) => {
                    let n = A.A.getScoreWithoutFetchingLatest(e.id),
                        i = e.getRecipientId(),
                        s = 0.2 * !!f.A.isFriend(i),
                        r = 0.1 * (null != h.A.getDMFromUserId(i));
                    l[i] = 1 + n / t + s + r;
                }),
                l),
        });
    }
    return !1;
}
function D() {
    if (!S) return !1;
    let e = _;
    return (_ = f.A.getFriendCount() > 0) !== e;
}
function x(e, t) {
    if (g.A.hasConsented(I.YAq.PERSONALIZATION)) {
        let n = o.A.getUserAffinity(e.user.id)?.communicationProbability ?? 0,
            i = o.A.getUserAffinity(t.user.id)?.communicationProbability ?? 0;
        if (n !== i) return i - n;
    }
    return (0, d.sS)(c.Ay.getName(e.user).toLocaleLowerCase()).localeCompare(
        (0, d.sS)(c.Ay.getName(t.user).toLocaleLowerCase()),
    );
}
function R(e) {
    let { results: t } = e;
    if (!S || "" === m) return;
    let n = [];
    for (let { id: e, comparator: i } of t) {
        let t = E.default.getUser(e);
        null != t && n.push({ user: t, comparator: i });
    }
    (C = n), G.emitChange();
}
function O() {
    return null != i && (i.destroy(), (i = null)), r.A.getUserSearchContext(R, 1e3);
}
function U(e) {
    if (e.key !== I.TLS) return !1;
    (S = !0), D(), (i = O()), (T = null), M("");
}
function L(e) {
    if (e.key !== I.TLS) return !1;
    w();
}
function w() {
    null != i && (i.destroy(), (i = null)), v();
}
class P extends l.Ay.Store {
    static displayName = "PrivateChannelRecipientsInviteStore";
    initialize() {
        this.waitFor(h.A, g.A, a.A, A.A, f.A, o.A, E.default),
            this.syncWith([E.default, h.A], y),
            this.syncWith([f.A], D);
    }
    getResults() {
        return C;
    }
    hasFriends() {
        return _;
    }
    getSelectedUsers() {
        return N;
    }
    getQuery() {
        return m;
    }
    getState() {
        return { query: m, selectedRow: p, selectedUsers: N, results: C, hasFriends: _ };
    }
}
let G = new P(s.h, {
        CONNECTION_OPEN: function () {
            v();
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let i = S;
            return v(), (S = i), (T = n), y();
        },
        MODAL_PUSH: U,
        SHOW_ACTION_SHEET: U,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (S = !0), D(), (i = O()), (T = e.channelId), M("");
        },
        MODAL_POP: L,
        HIDE_ACTION_SHEET: L,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: w,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            (T = e.channelId), M(e.query);
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            p = e.row;
        },
        PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function (e) {
            let { userId: t } = e;
            N.add(t), (N = new Set(N));
        },
        PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function (e) {
            let { userId: t } = e;
            N.delete(t), (N = new Set(N));
        },
    }),
    j = G;
