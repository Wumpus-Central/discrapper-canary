let i;
n.d(t, { Z: () => U }), n(388685), n(781311), n(539854), n(642613);
var r,
    l,
    a = n(442837),
    o = n(570140),
    s = n(279779),
    c = n(353926),
    u = n(752048),
    d = n(131704),
    p = n(624138),
    f = n(51144),
    h = n(592125),
    m = n(480294),
    g = n(580005),
    b = n(699516),
    C = n(594174),
    y = n(981631);
let v = !1,
    x = "",
    O = 0,
    E = [],
    j = !1,
    S = new Set(),
    _ = null;
function P() {
    (x = ""), (O = 0), (E = []), (S = new Set()), (v = !1), (_ = null);
}
function I(e) {
    (x = e), (O = 0), Z();
}
function Z() {
    if (!v) return !1;
    let e = h.Z.getChannel(_);
    if (0 === x.trim().length)
        return (
            null != i && i.clearQuery(),
            (E = (function (e) {
                let t = b.Z.getFriendIDs(),
                    n = C.default.getCurrentUser();
                return (
                    (null == n ? void 0 : n.isStaff()) &&
                        (t = Array.from(
                            new Set([
                                ...t,
                                ...C.default.filter((e) => e.isStaff() && e.id !== n.id, !1).map((e) => e.id),
                            ]),
                        )),
                    (null == e ? void 0 : e.isPrivate()) && (t = t.filter((t) => !e.recipients.includes(t))),
                    t
                        .reduce((e, t) => {
                            let n = C.default.getUser(t);
                            return (
                                null == n ||
                                    n.isProvisional ||
                                    e.push({
                                        user: n,
                                        comparator: f.ZP.getName(n),
                                    }),
                                e
                            );
                        }, [])
                        .sort(N)
                );
            })(e)),
            !0
        );
    let t = null != e ? e.recipients : [];
    if (null != i) {
        var n;
        let e = C.default.getCurrentUser(),
            r = null != (n = null == e ? void 0 : e.isStaff()) && n;
        i.setQuery({
            query: x,
            filters: {
                friends: !0,
                staff: r,
                provisional: !1,
            },
            blacklist: t,
            boosters: (function () {
                let e = g.Z.getFrequentlyWithoutFetchingLatest().filter((e) => e instanceof d.mn && e.isDM()),
                    t = Math.max(
                        ...e.map((e) => {
                            let { id: t } = e;
                            return g.Z.getScoreWithoutFetchingLatest(t);
                        }),
                    ),
                    n = {};
                return (
                    e.forEach((e) => {
                        let i = g.Z.getScoreWithoutFetchingLatest(e.id),
                            r = e.getRecipientId(),
                            l = 0.2 * !!b.Z.isFriend(r),
                            a = 0.1 * (null != h.Z.getDMFromUserId(r));
                        n[r] = 1 + i / t + l + a;
                    }),
                    n
                );
            })(),
        });
    }
    return !1;
}
function T() {
    if (!v) return !1;
    let e = j;
    return (j = b.Z.getFriendCount() > 0) !== e;
}
function N(e, t) {
    if (m.Z.hasConsented(y.pjP.PERSONALIZATION)) {
        var n, i, r, l;
        let a =
                null != (r = null == (n = u.Z.getUserAffinity(e.user.id)) ? void 0 : n.communicationProbability)
                    ? r
                    : 0,
            o =
                null != (l = null == (i = u.Z.getUserAffinity(t.user.id)) ? void 0 : i.communicationProbability)
                    ? l
                    : 0;
        if (a !== o) return o - a;
    }
    return (0, p._I)(f.ZP.getName(e.user).toLocaleLowerCase()).localeCompare(
        (0, p._I)(f.ZP.getName(t.user).toLocaleLowerCase()),
    );
}
function A(e) {
    let { results: t } = e;
    if (!v || "" === x) return;
    let n = [];
    for (let { id: e, comparator: i } of t) {
        let t = C.default.getUser(e);
        null != t &&
            n.push({
                user: t,
                comparator: i,
            });
    }
    (E = n), k.emitChange();
}
function w() {
    return null != i && (i.destroy(), (i = null)), s.Z.getUserSearchContext(A, 1000);
}
function M(e) {
    if (e.key !== y.vTt) return !1;
    (v = !0), T(), (i = w()), (_ = null), I("");
}
function R(e) {
    if (e.key !== y.vTt) return !1;
    L();
}
function L() {
    null != i && (i.destroy(), (i = null)), P();
}
class D extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, m.Z, c.Z, g.Z, b.Z, u.Z, C.default),
            this.syncWith([C.default, h.Z], Z),
            this.syncWith([b.Z], T);
    }
    getResults() {
        return E;
    }
    hasFriends() {
        return j;
    }
    getSelectedUsers() {
        return S;
    }
    getQuery() {
        return x;
    }
    getState() {
        return {
            query: x,
            selectedRow: O,
            selectedUsers: S,
            results: E,
            hasFriends: j,
        };
    }
}
(l = "displayName") in D
    ? Object.defineProperty(D, l, {
          value: "PrivateChannelRecipientsInviteStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (D[l] = "PrivateChannelRecipientsInviteStore");
let k = new D(o.Z, {
        CONNECTION_OPEN: function () {
            P();
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let i = v;
            return P(), (v = i), (_ = n), Z();
        },
        MODAL_PUSH: M,
        SHOW_ACTION_SHEET: M,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (v = !0), T(), (i = w()), (_ = e.channelId), I("");
        },
        MODAL_POP: R,
        HIDE_ACTION_SHEET: R,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: L,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            (_ = e.channelId), I(e.query);
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            O = e.row;
        },
        PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function (e) {
            let { userId: t } = e;
            S.add(t), (S = new Set(S));
        },
        PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function (e) {
            let { userId: t } = e;
            S.delete(t), (S = new Set(S));
        },
    }),
    U = k;
