let i;
n.d(t, { A: () => F }), n(321073);
var l = n(17928),
    s = n(228366),
    r = n(450827),
    a = n(736056),
    u = n(427358),
    o = n(95701),
    d = n(240248),
    c = n(427262),
    h = n(734057),
    A = n(153488),
    f = n(205761),
    g = n(994500),
    E = n(287809),
    I = n(652215);
let S = !1,
    _ = "",
    T = 0,
    C = [],
    m = !1,
    p = new Set(),
    N = null;
function M() {
    (_ = ""), (T = 0), (C = []), (p = new Set()), (S = !1), (N = null);
}
function D(e) {
    (_ = e), (T = 0), v();
}
function v() {
    if (!S) return !1;
    let e = h.A.getChannel(N);
    if (0 === _.trim().length) {
        var t;
        let n, l;
        return (
            null != i && i.clearQuery(),
            (t = e),
            (n = g.A.getFriendIDs()),
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
                .sort(U)),
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
            query: _,
            filters: { friends: !0, staff: r, provisional: !1 },
            blacklist: n,
            boosters:
                ((t = Math.max(
                    ...(e = f.A.getFrequentlyWithoutFetchingLatest().filter((e) => e instanceof o.cq && e.isDM())).map(
                        (e) => {
                            let { id: t } = e;
                            return f.A.getScoreWithoutFetchingLatest(t);
                        },
                    ),
                )),
                (l = {}),
                e.forEach((e) => {
                    let n = f.A.getScoreWithoutFetchingLatest(e.id),
                        i = e.getRecipientId(),
                        s = 0.2 * !!g.A.isFriend(i),
                        r = 0.1 * (null != h.A.getDMFromUserId(i));
                    l[i] = 1 + n / t + s + r;
                }),
                l),
        });
    }
    return !1;
}
function y() {
    if (!S) return !1;
    let e = m;
    return (m = g.A.getFriendCount() > 0) !== e;
}
function U(e, t) {
    if (A.A.hasConsented(I.YAq.PERSONALIZATION)) {
        let n = u.A.getUserAffinity(e.user.id)?.communicationProbability ?? 0,
            i = u.A.getUserAffinity(t.user.id)?.communicationProbability ?? 0;
        if (n !== i) return i - n;
    }
    return (0, d.sS)(c.Ay.getName(e.user).toLocaleLowerCase()).localeCompare(
        (0, d.sS)(c.Ay.getName(t.user).toLocaleLowerCase()),
    );
}
function O(e) {
    let { results: t } = e;
    if (!S || "" === _) return;
    let n = [];
    for (let { id: e, comparator: i } of t) {
        let t = E.default.getUser(e);
        null != t && n.push({ user: t, comparator: i });
    }
    (C = n), x.emitChange();
}
function L() {
    return null != i && (i.destroy(), (i = null)), r.A.getUserSearchContext(O, 1e3);
}
function R(e) {
    if (e.key !== I.TLS) return !1;
    (S = !0), y(), (i = L()), (N = null), D("");
}
function w(e) {
    if (e.key !== I.TLS) return !1;
    P();
}
function P() {
    null != i && (i.destroy(), (i = null)), M();
}
class G extends l.Ay.Store {
    static displayName = "PrivateChannelRecipientsInviteStore";
    initialize() {
        this.waitFor(h.A, A.A, a.A, f.A, g.A, u.A, E.default),
            this.syncWith([E.default, h.A], v),
            this.syncWith([g.A], y);
    }
    getResults() {
        return C;
    }
    hasFriends() {
        return m;
    }
    getSelectedUsers() {
        return p;
    }
    getQuery() {
        return _;
    }
    getState() {
        return { query: _, selectedRow: T, selectedUsers: p, results: C, hasFriends: m };
    }
}
let x = new G(s.h, {
        CONNECTION_OPEN: function () {
            M();
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let i = S;
            return M(), (S = i), (N = n), v();
        },
        MODAL_PUSH: R,
        SHOW_ACTION_SHEET: R,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (S = !0), y(), (i = L()), (N = e.channelId), D("");
        },
        MODAL_POP: w,
        HIDE_ACTION_SHEET: w,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: P,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            (N = e.channelId), D(e.query);
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            T = e.row;
        },
        PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function (e) {
            let { userId: t } = e;
            p.add(t), (p = new Set(p));
        },
        PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function (e) {
            let { userId: t } = e;
            p.delete(t), (p = new Set(p));
        },
    }),
    F = x;
