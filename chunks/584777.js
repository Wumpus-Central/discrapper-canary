"use strict";
let i;
n.d(t, { A: () => k }), n(321073);
var r = n(17928),
    s = n(228366),
    a = n(450827),
    o = n(736056),
    l = n(427358),
    u = n(95701),
    c = n(240248),
    d = n(427262),
    _ = n(734057),
    f = n(153488),
    h = n(205761),
    p = n(994500),
    E = n(287809),
    m = n(652215);
let g = !1,
    A = "",
    I = 0,
    T = [],
    S = !1,
    N = new Set(),
    y = null;
function C() {
    (A = ""), (I = 0), (T = []), (N = new Set()), (g = !1), (y = null);
}
function v(e) {
    (A = e), (I = 0), O();
}
function O() {
    if (!g) return !1;
    let e = _.A.getChannel(y);
    if (0 === A.trim().length) {
        var t;
        let n, r;
        return (
            null != i && i.clearQuery(),
            (t = e),
            (n = p.A.getFriendIDs()),
            (r = E.default.getCurrentUser()),
            r?.isStaff() &&
                (n = Array.from(
                    new Set([...n, ...E.default.filter((e) => e.isStaff() && e.id !== r.id, !1).map((e) => e.id)]),
                )),
            t?.isGroupDM() && (n = n.filter((e) => !t.recipients.includes(e))),
            (T = n
                .reduce((e, t) => {
                    let n = E.default.getUser(t);
                    return null == n || n.isProvisional || e.push({ user: n, comparator: d.Ay.getName(n) }), e;
                }, [])
                .sort(b)),
            !0
        );
    }
    let n = null != e ? e.recipients : [];
    if (null != i) {
        let e,
            t,
            r,
            s = E.default.getCurrentUser(),
            a = s?.isStaff() ?? !1;
        i.setQuery({
            query: A,
            filters: { friends: !0, staff: a, provisional: !1 },
            blacklist: n,
            boosters:
                ((t = Math.max(
                    ...(e = h.A.getFrequentlyWithoutFetchingLatest().filter((e) => e instanceof u.cq && e.isDM())).map(
                        (e) => {
                            let { id: t } = e;
                            return h.A.getScoreWithoutFetchingLatest(t);
                        },
                    ),
                )),
                (r = {}),
                e.forEach((e) => {
                    let n = h.A.getScoreWithoutFetchingLatest(e.id),
                        i = e.getRecipientId(),
                        s = 0.2 * !!p.A.isFriend(i),
                        a = 0.1 * (null != _.A.getDMFromUserId(i));
                    r[i] = 1 + n / t + s + a;
                }),
                r),
        });
    }
    return !1;
}
function R() {
    if (!g) return !1;
    let e = S;
    return (S = p.A.getFriendCount() > 0) !== e;
}
function b(e, t) {
    if (f.A.hasConsented(m.YAq.PERSONALIZATION)) {
        let n = l.A.getUserAffinity(e.user.id)?.communicationProbability ?? 0,
            i = l.A.getUserAffinity(t.user.id)?.communicationProbability ?? 0;
        if (n !== i) return i - n;
    }
    return (0, c.sS)(d.Ay.getName(e.user).toLocaleLowerCase()).localeCompare(
        (0, c.sS)(d.Ay.getName(t.user).toLocaleLowerCase()),
    );
}
function D(e) {
    let { results: t } = e;
    if (!g || "" === A) return;
    let n = [];
    for (let { id: e, comparator: i } of t) {
        let t = E.default.getUser(e);
        null != t && n.push({ user: t, comparator: i });
    }
    (T = n), U.emitChange();
}
function L() {
    return null != i && (i.destroy(), (i = null)), a.A.getUserSearchContext(D, 1e3);
}
function w(e) {
    if (e.key !== m.TLS) return !1;
    (g = !0), R(), (i = L()), (y = null), v("");
}
function M(e) {
    if (e.key !== m.TLS) return !1;
    P();
}
function P() {
    null != i && (i.destroy(), (i = null)), C();
}
class x extends r.Ay.Store {
    static displayName = "PrivateChannelRecipientsInviteStore";
    initialize() {
        this.waitFor(_.A, f.A, o.A, h.A, p.A, l.A, E.default),
            this.syncWith([E.default, _.A], O),
            this.syncWith([p.A], R);
    }
    getResults() {
        return T;
    }
    hasFriends() {
        return S;
    }
    getSelectedUsers() {
        return N;
    }
    getQuery() {
        return A;
    }
    getState() {
        return { query: A, selectedRow: I, selectedUsers: N, results: T, hasFriends: S };
    }
}
let U = new x(s.h, {
        CONNECTION_OPEN: function () {
            C();
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let i = g;
            return C(), (g = i), (y = n), O();
        },
        MODAL_PUSH: w,
        SHOW_ACTION_SHEET: w,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (g = !0), R(), (i = L()), (y = e.channelId), v("");
        },
        MODAL_POP: M,
        HIDE_ACTION_SHEET: M,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: P,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            (y = e.channelId), v(e.query);
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            I = e.row;
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
    k = U;
