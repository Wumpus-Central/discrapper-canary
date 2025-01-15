let i;
n(47120), n(724458), n(653041);
var l,
    r,
    a,
    s,
    o = n(392711),
    c = n.n(o),
    d = n(442837),
    u = n(570140),
    h = n(279779),
    p = n(353926),
    m = n(428598),
    f = n(131704),
    g = n(624138),
    C = n(51144),
    x = n(592125),
    v = n(480294),
    _ = n(580005),
    I = n(699516),
    E = n(594174),
    b = n(981631);
let Z = !1,
    S = '',
    N = 0,
    T = [],
    j = !1,
    A = new Set(),
    y = null;
function P() {
    (S = ''), (N = 0), (T = []), (A = new Set()), (Z = !1), (y = null);
}
function M(e) {
    (S = e), (N = 0), R();
}
function R() {
    if (!Z) return !1;
    let e = x.Z.getChannel(y);
    if (0 === S.trim().length)
        return (
            null != i && i.clearQuery(),
            (T = (function (e) {
                let t = I.Z.getFriendIDs();
                return (
                    (null == e ? void 0 : e.isPrivate()) && (t = t.filter((t) => !e.recipients.includes(t))),
                    t
                        .reduce((e, t) => {
                            let n = E.default.getUser(t);
                            return null == n || n.isProvisional
                                ? e
                                : (e.push({
                                      user: n,
                                      comparator: C.ZP.getName(n)
                                  }),
                                  e);
                        }, [])
                        .sort(k)
                );
            })(e)),
            !0
        );
    let t = null != e ? e.recipients : [];
    return (
        null != i &&
            i.setQuery(
                S,
                {
                    friends: !0,
                    provisional: !1
                },
                t,
                (function () {
                    let e = _.Z.getFrequentlyWithoutFetchingLatest().filter((e) => e instanceof f.mn && e.isDM()),
                        t = Math.max(
                            ...e.map((e) => {
                                let { id: t } = e;
                                return _.Z.getScoreWithoutFetchingLatest(t);
                            })
                        ),
                        n = {};
                    return (
                        e.forEach((e) => {
                            let i = _.Z.getScoreWithoutFetchingLatest(e.id),
                                l = e.getRecipientId(),
                                r = I.Z.isFriend(l) ? 0.2 : 0,
                                a = null != x.Z.getDMFromUserId(l) ? 0.1 : 0;
                            n[l] = 1 + i / t + r + a;
                        }),
                        n
                    );
                })()
            ),
        !1
    );
}
function L() {
    if (!Z) return !1;
    let e = j;
    return (j = c().some(I.Z.getRelationships(), (e) => e === b.OGo.FRIEND)) !== e;
}
function k(e, t) {
    if (v.Z.hasConsented(b.pjP.PERSONALIZATION)) {
        var n, i, l, r;
        let a = null !== (l = null === (n = m.Z.getUserAffinity(e.user.id)) || void 0 === n ? void 0 : n.communicationProbability) && void 0 !== l ? l : 0,
            s = null !== (r = null === (i = m.Z.getUserAffinity(t.user.id)) || void 0 === i ? void 0 : i.communicationProbability) && void 0 !== r ? r : 0;
        if (a !== s) return s - a;
    }
    return (0, g._I)(C.ZP.getName(e.user).toLocaleLowerCase()).localeCompare((0, g._I)(C.ZP.getName(t.user).toLocaleLowerCase()));
}
function O(e) {
    let { results: t } = e;
    if (!Z || '' === S) return;
    let n = [];
    for (let { id: e, comparator: i } of t) {
        let t = E.default.getUser(e);
        null != t &&
            n.push({
                user: t,
                comparator: i
            });
    }
    (T = n), G.emitChange();
}
function D() {
    return null != i && (i.destroy(), (i = null)), h.Z.getSearchContext(O, 1000);
}
function w(e) {
    if (e.key !== b.vTt) return !1;
    (Z = !0), L(), (i = D()), (y = null), M('');
}
function B(e) {
    if (e.key !== b.vTt) return !1;
    U();
}
function U() {
    null != i && (i.destroy(), (i = null)), P();
}
class H extends (l = d.ZP.Store) {
    initialize() {
        this.waitFor(E.default, x.Z, I.Z, p.Z, v.Z), this.syncWith([E.default, x.Z], R), this.syncWith([I.Z], L);
    }
    getResults() {
        return T;
    }
    hasFriends() {
        return j;
    }
    getSelectedUsers() {
        return A;
    }
    getQuery() {
        return S;
    }
    getState() {
        return {
            query: S,
            selectedRow: N,
            selectedUsers: A,
            results: T,
            hasFriends: j
        };
    }
}
(s = 'PrivateChannelRecipientsInviteStore'),
    (a = 'displayName') in (r = H)
        ? Object.defineProperty(r, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[a] = s);
let G = new H(u.Z, {
    CONNECTION_OPEN: function () {
        P();
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        if (null != t) return !1;
        let i = Z;
        return P(), (Z = i), (y = n), R();
    },
    MODAL_PUSH: w,
    SHOW_ACTION_SHEET: w,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
        (Z = !0), L(), (i = D()), (y = e.channelId), M('');
    },
    MODAL_POP: B,
    HIDE_ACTION_SHEET: B,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: U,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
        (y = e.channelId), M(e.query);
    },
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
        N = e.row;
    },
    PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function (e) {
        let { userId: t } = e;
        A.add(t), (A = new Set(A));
    },
    PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function (e) {
        let { userId: t } = e;
        A.delete(t), (A = new Set(A));
    }
});
t.Z = G;
