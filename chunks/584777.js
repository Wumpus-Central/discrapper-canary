let r;
n.d(t, {
    A: () => v,
    h: () => W,
}),
    n(896048),
    n(733351),
    n(321073),
    n(638769);
var l,
    i,
    s,
    a = n(311907),
    o = n(713402),
    c = n(73153),
    u = n(450827),
    d = n(49463),
    p = n(625788),
    h = n(21119),
    f = n(95701),
    g = n(240248),
    m = n(427262),
    b = n(734057),
    A = n(153488),
    y = n(205761),
    _ = n(994500),
    O = n(287809),
    j = n(652215),
    v = (((i = {})[(i.FRIENDS = 0)] = "FRIENDS"), (i[(i.GUILD_MEMBERS = 1)] = "GUILD_MEMBERS"), i);
let x = !1,
    E = "",
    C = 0,
    S = 0,
    I = [],
    N = !1,
    T = new Set(),
    P = null,
    w = new o.J(
        function (e) {
            let t = [],
                n = O.default.getCurrentUser();
            return (
                _.A.isFriend(e.user.id)
                    ? t.push("FRIENDS")
                    : e.user.id !== (null == n ? void 0 : n.id) && t.push("GUILD_MEMBERS"),
                t
            );
        },
        function (e) {
            if (A.A.hasConsented(j.YAq.PERSONALIZATION)) {
                var t, n;
                return -(null !=
                (t = null == (n = h.A.getUserAffinity(e.user.id)) ? void 0 : n.communicationProbability)
                    ? t
                    : 0);
            }
            return (0, g.sS)(m.Ay.getName(e.user).toLocaleLowerCase());
        },
    );

function R() {
    (E = ""), (C = 0), (S = 0), (I = []), (T = new Set()), (x = !1), (P = null), w.clear();
}

function D(e) {
    (E = e), (S = 0), M();
}

function M() {
    if (!x) return !1;
    let e = b.A.getChannel(P);
    if (0 === E.trim().length)
        return (
            null != r && r.clearQuery(),
            (I = (function (e) {
                let t = _.A.getFriendIDs(),
                    n = p.A.getConfig({
                        location: "PrivateChannelRecipientsInviteStore",
                    }).enabled,
                    r = O.default.getCurrentUser();
                if (
                    ((null == r ? void 0 : r.isStaff()) &&
                        (t = Array.from(
                            new Set([
                                ...t,
                                ...O.default.filter((e) => e.isStaff() && e.id !== r.id, !1).map((e) => e.id),
                            ]),
                        )),
                    (null == e ? void 0 : e.isPrivate()) && (t = t.filter((t) => !e.recipients.includes(t))),
                    n)
                )
                    for (let n of ((null == e ? void 0 : e.isPrivate()) &&
                        e.recipients.forEach((e) => {
                            w.delete(e);
                        }),
                    t))
                        !(function (e) {
                            if (_.A.getRelationshipType(e) === j.eA$.BLOCKED) return w.delete(e);
                            let t = O.default.getUser(e);
                            if (null == t) return w.delete(e);
                            w.set(e, {
                                user: t,
                                comparator: m.Ay.getName(t),
                            });
                        })(n);
                return t
                    .reduce((e, t) => {
                        let n = O.default.getUser(t);
                        return (
                            null == n ||
                                n.isProvisional ||
                                e.push({
                                    user: n,
                                    comparator: m.Ay.getName(n),
                                }),
                            e
                        );
                    }, [])
                    .sort(k);
            })(e)),
            !0
        );
    let t = null != e ? e.recipients : [];
    if (null != r) {
        var n;
        let e,
            l,
            i,
            s = O.default.getCurrentUser(),
            a = null != (n = null == s ? void 0 : s.isStaff()) && n,
            o = p.A.getConfig({
                location: "PrivateChannelRecipientsInviteStore",
            }).enabled;
        r.setQuery({
            query: E,
            filters: o
                ? void 0
                : {
                      friends: !0,
                      staff: a,
                      provisional: !1,
                  },
            blacklist: t,
            boosters:
                ((l = Math.max(
                    ...(e = y.A.getFrequentlyWithoutFetchingLatest().filter((e) => e instanceof f.cq && e.isDM())).map(
                        (e) => {
                            let { id: t } = e;
                            return y.A.getScoreWithoutFetchingLatest(t);
                        },
                    ),
                )),
                (i = {}),
                e.forEach((e) => {
                    let t = y.A.getScoreWithoutFetchingLatest(e.id),
                        n = e.getRecipientId(),
                        r = 0.2 * !!_.A.isFriend(n),
                        s = 0.1 * (null != b.A.getDMFromUserId(n));
                    i[n] = 1 + t / l + r + s;
                }),
                i),
        });
    }
    return !1;
}

function L() {
    if (!x) return !1;
    let e = N;
    return (N = _.A.getFriendCount() > 0) !== e;
}

function k(e, t) {
    if (A.A.hasConsented(j.YAq.PERSONALIZATION)) {
        var n, r, l, i;
        let s =
                null != (n = null == (l = h.A.getUserAffinity(e.user.id)) ? void 0 : l.communicationProbability)
                    ? n
                    : 0,
            a =
                null != (r = null == (i = h.A.getUserAffinity(t.user.id)) ? void 0 : i.communicationProbability)
                    ? r
                    : 0;
        if (s !== a) return a - s;
    }
    return (0, g.sS)(m.Ay.getName(e.user).toLocaleLowerCase()).localeCompare(
        (0, g.sS)(m.Ay.getName(t.user).toLocaleLowerCase()),
    );
}

function U(e) {
    let { results: t } = e;
    if (!x || "" === E) return;
    let n = [];
    for (let { id: e, comparator: r } of (w.clear(), t)) {
        let t = O.default.getUser(e);
        null == t ||
            t.isProvisional ||
            (n.push({
                user: t,
                comparator: r,
            }),
            w.set(e, {
                user: t,
                comparator: r,
            }));
    }
    (I = n), K.emitChange();
}

function G() {
    return null != r && (r.destroy(), (r = null)), u.A.getUserSearchContext(U, 1e3);
}

function B(e) {
    if (e.key !== j.TLS) return !1;
    (x = !0), L(), (r = G()), (P = null), D("");
}

function V(e) {
    if (e.key !== j.TLS) return !1;
    F();
}

function F() {
    null != r && (r.destroy(), (r = null)), R();
}
class H extends (l = a.Ay.Store) {
    initialize() {
        this.waitFor(b.A, A.A, d.A, y.A, _.A, h.A, O.default),
            this.syncWith([O.default, b.A], M),
            this.syncWith([_.A], L);
    }
    getResults() {
        return I;
    }
    hasFriends() {
        return N;
    }
    getSelectedUsers() {
        return T;
    }
    getQuery() {
        return E;
    }
    getState() {
        return {
            query: E,
            selectedRow: S,
            selectedSection: C,
            selectedUsers: T,
            results: I,
            hasFriends: N,
        };
    }
    getSections() {
        let e = w.indexes();
        return [e.FRIENDS, e.GUILD_MEMBERS];
    }
}
(s = "displayName") in H
    ? Object.defineProperty(H, s, {
          value: "PrivateChannelRecipientsInviteStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (H[s] = "PrivateChannelRecipientsInviteStore");
let K = new H(c.h, {
        CONNECTION_OPEN: function () {
            R();
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let r = x;
            return R(), (x = r), (P = n), M();
        },
        MODAL_PUSH: B,
        SHOW_ACTION_SHEET: B,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (x = !0), L(), (r = G()), (P = e.channelId), D("");
        },
        MODAL_POP: V,
        HIDE_ACTION_SHEET: V,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: F,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            (P = e.channelId), D(e.query);
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            (C = e.section), (S = e.row);
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
    W = K;
