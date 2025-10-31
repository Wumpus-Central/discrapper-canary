let r;
n.d(t, { Z: () => U }), n(388685), n(781311), n(539854), n(642613);
var i,
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
    _ = n(594174),
    y = n(981631);
let C = !1,
    v = "",
    O = 0,
    x = [],
    E = !1,
    j = new Set(),
    S = null;
function P() {
    (v = ""), (O = 0), (x = []), (j = new Set()), (C = !1), (S = null);
}
function I(e) {
    (v = e), (O = 0), Z();
}
function Z() {
    if (!C) return !1;
    let e = h.Z.getChannel(S);
    if (0 === v.trim().length)
        return (
            null != r && r.clearQuery(),
            (x = (function (e) {
                let t = b.Z.getFriendIDs(),
                    n = _.default.getCurrentUser();
                return (
                    (null == n ? void 0 : n.isStaff()) &&
                        (t = Array.from(
                            new Set([
                                ...t,
                                ..._.default.filter((e) => e.isStaff() && e.id !== n.id, !1).map((e) => e.id),
                            ]),
                        )),
                    (null == e ? void 0 : e.isPrivate()) && (t = t.filter((t) => !e.recipients.includes(t))),
                    t
                        .reduce((e, t) => {
                            let n = _.default.getUser(t);
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
    if (null != r) {
        var n;
        let e = _.default.getCurrentUser(),
            i = null != (n = null == e ? void 0 : e.isStaff()) && n;
        r.setQuery({
            query: v,
            filters: {
                friends: !0,
                staff: i,
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
                        let r = g.Z.getScoreWithoutFetchingLatest(e.id),
                            i = e.getRecipientId(),
                            l = 0.2 * !!b.Z.isFriend(i),
                            a = 0.1 * (null != h.Z.getDMFromUserId(i));
                        n[i] = 1 + r / t + l + a;
                    }),
                    n
                );
            })(),
        });
    }
    return !1;
}
function T() {
    if (!C) return !1;
    let e = E;
    return (E = b.Z.getFriendCount() > 0) !== e;
}
function N(e, t) {
    if (m.Z.hasConsented(y.pjP.PERSONALIZATION)) {
        var n, r, i, l;
        let a =
                null != (i = null == (n = u.Z.getUserAffinity(e.user.id)) ? void 0 : n.communicationProbability)
                    ? i
                    : 0,
            o =
                null != (l = null == (r = u.Z.getUserAffinity(t.user.id)) ? void 0 : r.communicationProbability)
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
    if (!C || "" === v) return;
    let n = [];
    for (let { id: e, comparator: r } of t) {
        let t = _.default.getUser(e);
        null != t &&
            n.push({
                user: t,
                comparator: r,
            });
    }
    (x = n), k.emitChange();
}
function w() {
    return null != r && (r.destroy(), (r = null)), s.Z.getUserSearchContext(A, 1000);
}
function M(e) {
    if (e.key !== y.vTt) return !1;
    (C = !0), T(), (r = w()), (S = null), I("");
}
function R(e) {
    if (e.key !== y.vTt) return !1;
    D();
}
function D() {
    null != r && (r.destroy(), (r = null)), P();
}
class L extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, m.Z, c.Z, g.Z, b.Z, u.Z, _.default),
            this.syncWith([_.default, h.Z], Z),
            this.syncWith([b.Z], T);
    }
    getResults() {
        return x;
    }
    hasFriends() {
        return E;
    }
    getSelectedUsers() {
        return j;
    }
    getQuery() {
        return v;
    }
    getState() {
        return {
            query: v,
            selectedRow: O,
            selectedUsers: j,
            results: x,
            hasFriends: E,
        };
    }
}
(l = "displayName") in L
    ? Object.defineProperty(L, l, {
          value: "PrivateChannelRecipientsInviteStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (L[l] = "PrivateChannelRecipientsInviteStore");
let k = new L(o.Z, {
        CONNECTION_OPEN: function () {
            P();
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let r = C;
            return P(), (C = r), (S = n), Z();
        },
        MODAL_PUSH: M,
        SHOW_ACTION_SHEET: M,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (C = !0), T(), (r = w()), (S = e.channelId), I("");
        },
        MODAL_POP: R,
        HIDE_ACTION_SHEET: R,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: D,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            (S = e.channelId), I(e.query);
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            O = e.row;
        },
        PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function (e) {
            let { userId: t } = e;
            j.add(t), (j = new Set(j));
        },
        PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function (e) {
            let { userId: t } = e;
            j.delete(t), (j = new Set(j));
        },
    }),
    U = k;
