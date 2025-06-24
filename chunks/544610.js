let r;
n.d(t, { Z: () => B }), n(388685), n(781311), n(539854), n(642613);
var i,
    l,
    a,
    o = n(442837),
    s = n(570140),
    c = n(279779),
    u = n(353926),
    d = n(752048),
    p = n(131704),
    h = n(624138),
    f = n(51144),
    m = n(592125),
    g = n(480294),
    b = n(580005),
    _ = n(699516),
    y = n(594174),
    x = n(981631);
let C = !1,
    v = '',
    j = 0,
    O = [],
    E = !1,
    I = new Set(),
    S = null;
function P() {
    (v = ''), (j = 0), (O = []), (I = new Set()), (C = !1), (S = null);
}
function Z(e) {
    (v = e), (j = 0), N();
}
function N() {
    if (!C) return !1;
    let e = m.Z.getChannel(S);
    if (0 === v.trim().length)
        return (
            null != r && r.clearQuery(),
            (O = (function (e) {
                let t = _.Z.getFriendIDs(),
                    n = y.default.getCurrentUser();
                return (
                    (null == n ? void 0 : n.isStaff()) && (t = Array.from(new Set([...t, ...y.default.filter((e) => e.isStaff() && e.id !== n.id, !1).map((e) => e.id)]))),
                    (null == e ? void 0 : e.isPrivate()) && (t = t.filter((t) => !e.recipients.includes(t))),
                    t
                        .reduce((e, t) => {
                            let n = y.default.getUser(t);
                            return (
                                null == n ||
                                    n.isProvisional ||
                                    e.push({
                                        user: n,
                                        comparator: f.ZP.getName(n)
                                    }),
                                e
                            );
                        }, [])
                        .sort(A)
                );
            })(e)),
            !0
        );
    let t = null != e ? e.recipients : [];
    if (null != r) {
        var n;
        let e = y.default.getCurrentUser(),
            i = null != (n = null == e ? void 0 : e.isStaff()) && n;
        r.setQuery(
            v,
            {
                friends: !0,
                staff: i,
                provisional: !1
            },
            t,
            (function () {
                let e = b.Z.getFrequentlyWithoutFetchingLatest().filter((e) => e instanceof p.mn && e.isDM()),
                    t = Math.max(
                        ...e.map((e) => {
                            let { id: t } = e;
                            return b.Z.getScoreWithoutFetchingLatest(t);
                        })
                    ),
                    n = {};
                return (
                    e.forEach((e) => {
                        let r = b.Z.getScoreWithoutFetchingLatest(e.id),
                            i = e.getRecipientId(),
                            l = 0.2 * !!_.Z.isFriend(i),
                            a = 0.1 * (null != m.Z.getDMFromUserId(i));
                        n[i] = 1 + r / t + l + a;
                    }),
                    n
                );
            })()
        );
    }
    return !1;
}
function T() {
    if (!C) return !1;
    let e = E;
    return (E = _.Z.getFriendCount() > 0) !== e;
}
function A(e, t) {
    if (g.Z.hasConsented(x.pjP.PERSONALIZATION)) {
        var n, r, i, l;
        let a = null != (i = null == (n = d.Z.getUserAffinity(e.user.id)) ? void 0 : n.communicationProbability) ? i : 0,
            o = null != (l = null == (r = d.Z.getUserAffinity(t.user.id)) ? void 0 : r.communicationProbability) ? l : 0;
        if (a !== o) return o - a;
    }
    return (0, h._I)(f.ZP.getName(e.user).toLocaleLowerCase()).localeCompare((0, h._I)(f.ZP.getName(t.user).toLocaleLowerCase()));
}
function w(e) {
    let { results: t } = e;
    if (!C || '' === v) return;
    let n = [];
    for (let { id: e, comparator: r } of t) {
        let t = y.default.getUser(e);
        null != t &&
            n.push({
                user: t,
                comparator: r
            });
    }
    (O = n), U.emitChange();
}
function R() {
    return null != r && (r.destroy(), (r = null)), c.Z.getSearchContext(w, 1000);
}
function M(e) {
    if (e.key !== x.vTt) return !1;
    (C = !0), T(), (r = R()), (S = null), Z('');
}
function k(e) {
    if (e.key !== x.vTt) return !1;
    D();
}
function D() {
    null != r && (r.destroy(), (r = null)), P();
}
class L extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(y.default, m.Z, _.Z, u.Z, g.Z), this.syncWith([y.default, m.Z], N), this.syncWith([_.Z], T);
    }
    getResults() {
        return O;
    }
    hasFriends() {
        return E;
    }
    getSelectedUsers() {
        return I;
    }
    getQuery() {
        return v;
    }
    getState() {
        return {
            query: v,
            selectedRow: j,
            selectedUsers: I,
            results: O,
            hasFriends: E
        };
    }
}
(a = 'PrivateChannelRecipientsInviteStore'),
    (l = 'displayName') in L
        ? Object.defineProperty(L, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (L[l] = a);
let U = new L(s.Z, {
        CONNECTION_OPEN: function () {
            P();
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let r = C;
            return P(), (C = r), (S = n), N();
        },
        MODAL_PUSH: M,
        SHOW_ACTION_SHEET: M,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (C = !0), T(), (r = R()), (S = e.channelId), Z('');
        },
        MODAL_POP: k,
        HIDE_ACTION_SHEET: k,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: D,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            (S = e.channelId), Z(e.query);
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            j = e.row;
        },
        PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function (e) {
            let { userId: t } = e;
            I.add(t), (I = new Set(I));
        },
        PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function (e) {
            let { userId: t } = e;
            I.delete(t), (I = new Set(I));
        }
    }),
    B = U;
