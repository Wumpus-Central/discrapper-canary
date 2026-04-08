let i;
n.d(t, { A: () => w }), n(321073);
var l = n(311907),
    s = n(73153),
    a = n(450827),
    r = n(49463),
    o = n(21119),
    c = n(95701),
    d = n(240248),
    u = n(427262),
    h = n(734057),
    m = n(153488),
    A = n(205761),
    p = n(994500),
    g = n(287809),
    f = n(652215);
let _ = !1,
    E = "",
    x = 0,
    C = [],
    S = !1,
    T = new Set(),
    N = null;
function I() {
    (E = ""), (x = 0), (C = []), (T = new Set()), (_ = !1), (N = null);
}
function v(e) {
    (E = e), (x = 0), y();
}
function y() {
    if (!_) return !1;
    let e = h.A.getChannel(N);
    if (0 === E.trim().length) {
        var t;
        let n, l;
        return (
            null != i && i.clearQuery(),
            (t = e),
            (n = p.A.getFriendIDs()),
            (l = g.default.getCurrentUser()),
            l?.isStaff() &&
                (n = Array.from(
                    new Set([...n, ...g.default.filter((e) => e.isStaff() && e.id !== l.id, !1).map((e) => e.id)]),
                )),
            t?.isPrivate() && (n = n.filter((e) => !t.recipients.includes(e))),
            (C = n
                .reduce((e, t) => {
                    let n = g.default.getUser(t);
                    return null == n || n.isProvisional || e.push({ user: n, comparator: u.Ay.getName(n) }), e;
                }, [])
                .sort(j)),
            !0
        );
    }
    let n = null != e ? e.recipients : [];
    if (null != i) {
        let e,
            t,
            l,
            s = g.default.getCurrentUser(),
            a = s?.isStaff() ?? !1;
        i.setQuery({
            query: E,
            filters: { friends: !0, staff: a, provisional: !1 },
            blacklist: n,
            boosters:
                ((t = Math.max(
                    ...(e = A.A.getFrequentlyWithoutFetchingLatest().filter((e) => e instanceof c.cq && e.isDM())).map(
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
                        s = 0.2 * !!p.A.isFriend(i),
                        a = 0.1 * (null != h.A.getDMFromUserId(i));
                    l[i] = 1 + n / t + s + a;
                }),
                l),
        });
    }
    return !1;
}
function b() {
    if (!_) return !1;
    let e = S;
    return (S = p.A.getFriendCount() > 0) !== e;
}
function j(e, t) {
    if (m.A.hasConsented(f.YAq.PERSONALIZATION)) {
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
    if (!_ || "" === E) return;
    let n = [];
    for (let { id: e, comparator: i } of t) {
        let t = g.default.getUser(e);
        null != t && n.push({ user: t, comparator: i });
    }
    (C = n), k.emitChange();
}
function M() {
    return null != i && (i.destroy(), (i = null)), a.A.getUserSearchContext(R, 1e3);
}
function D(e) {
    if (e.key !== f.TLS) return !1;
    (_ = !0), b(), (i = M()), (N = null), v("");
}
function O(e) {
    if (e.key !== f.TLS) return !1;
    L();
}
function L() {
    null != i && (i.destroy(), (i = null)), I();
}
class P extends l.Ay.Store {
    static displayName = "PrivateChannelRecipientsInviteStore";
    initialize() {
        this.waitFor(h.A, m.A, r.A, A.A, p.A, o.A, g.default),
            this.syncWith([g.default, h.A], y),
            this.syncWith([p.A], b);
    }
    getResults() {
        return C;
    }
    hasFriends() {
        return S;
    }
    getSelectedUsers() {
        return T;
    }
    getQuery() {
        return E;
    }
    getState() {
        return { query: E, selectedRow: x, selectedUsers: T, results: C, hasFriends: S };
    }
}
let k = new P(s.h, {
        CONNECTION_OPEN: function () {
            I();
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let i = _;
            return I(), (_ = i), (N = n), y();
        },
        MODAL_PUSH: D,
        SHOW_ACTION_SHEET: D,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (_ = !0), b(), (i = M()), (N = e.channelId), v("");
        },
        MODAL_POP: O,
        HIDE_ACTION_SHEET: O,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: L,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            (N = e.channelId), v(e.query);
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            x = e.row;
        },
        PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function (e) {
            let { userId: t } = e;
            T.add(t), (T = new Set(T));
        },
        PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function (e) {
            let { userId: t } = e;
            T.delete(t), (T = new Set(T));
        },
    }),
    w = k;
