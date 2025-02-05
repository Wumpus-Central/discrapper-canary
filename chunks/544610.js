let i;
n.d(t, { Z: () => H }), n(47120), n(724458), n(653041);
var l,
    a,
    r,
    s = n(392711),
    o = n.n(s),
    c = n(442837),
    d = n(570140),
    u = n(279779),
    h = n(353926),
    p = n(428598),
    m = n(131704),
    f = n(624138),
    g = n(51144),
    _ = n(592125),
    C = n(480294),
    x = n(580005),
    v = n(699516),
    E = n(594174),
    I = n(981631);
let b = !1,
    Z = '',
    N = 0,
    T = [],
    S = !1,
    j = new Set(),
    y = null;
function A() {
    (Z = ''), (N = 0), (T = []), (j = new Set()), (b = !1), (y = null);
}
function P(e) {
    (Z = e), (N = 0), R();
}
function R() {
    if (!b) return !1;
    let e = _.Z.getChannel(y);
    if (0 === Z.trim().length) {
        var t;
        let n;
        return (
            null != i && i.clearQuery(),
            (t = e),
            (n = v.Z.getFriendIDs()),
            (null == t ? void 0 : t.isPrivate()) && (n = n.filter((e) => !t.recipients.includes(e))),
            (T = n
                .reduce((e, t) => {
                    let n = E.default.getUser(t);
                    return (
                        null == n ||
                            n.isProvisional ||
                            e.push({
                                user: n,
                                comparator: g.ZP.getName(n)
                            }),
                        e
                    );
                }, [])
                .sort(L)),
            !0
        );
    }
    let n = null != e ? e.recipients : [];
    return (
        null != i &&
            i.setQuery(
                Z,
                {
                    friends: !0,
                    provisional: !1
                },
                n,
                (function () {
                    let e = x.Z.getFrequentlyWithoutFetchingLatest().filter((e) => e instanceof m.mn && e.isDM()),
                        t = Math.max(
                            ...e.map((e) => {
                                let { id: t } = e;
                                return x.Z.getScoreWithoutFetchingLatest(t);
                            })
                        ),
                        n = {};
                    return (
                        e.forEach((e) => {
                            let i = x.Z.getScoreWithoutFetchingLatest(e.id),
                                l = e.getRecipientId(),
                                a = v.Z.isFriend(l) ? 0.2 : 0,
                                r = null != _.Z.getDMFromUserId(l) ? 0.1 : 0;
                            n[l] = 1 + i / t + a + r;
                        }),
                        n
                    );
                })()
            ),
        !1
    );
}
function M() {
    if (!b) return !1;
    let e = S;
    return (S = o().some(v.Z.getRelationships(), (e) => e === I.OGo.FRIEND)) !== e;
}
function L(e, t) {
    if (C.Z.hasConsented(I.pjP.PERSONALIZATION)) {
        var n, i, l, a;
        let r = null !== (l = null === (n = p.Z.getUserAffinity(e.user.id)) || void 0 === n ? void 0 : n.communicationProbability) && void 0 !== l ? l : 0,
            s = null !== (a = null === (i = p.Z.getUserAffinity(t.user.id)) || void 0 === i ? void 0 : i.communicationProbability) && void 0 !== a ? a : 0;
        if (r !== s) return s - r;
    }
    return (0, f._I)(g.ZP.getName(e.user).toLocaleLowerCase()).localeCompare((0, f._I)(g.ZP.getName(t.user).toLocaleLowerCase()));
}
function k(e) {
    let { results: t } = e;
    if (!b || '' === Z) return;
    let n = [];
    for (let { id: e, comparator: i } of t) {
        let t = E.default.getUser(e);
        null != t &&
            n.push({
                user: t,
                comparator: i
            });
    }
    (T = n), F.emitChange();
}
function O() {
    return null != i && (i.destroy(), (i = null)), u.Z.getSearchContext(k, 1000);
}
function D(e) {
    if (e.key !== I.vTt) return !1;
    (b = !0), M(), (i = O()), (y = null), P('');
}
function w(e) {
    if (e.key !== I.vTt) return !1;
    U();
}
function U() {
    null != i && (i.destroy(), (i = null)), A();
}
class B extends (l = c.ZP.Store) {
    initialize() {
        this.waitFor(E.default, _.Z, v.Z, h.Z, C.Z), this.syncWith([E.default, _.Z], R), this.syncWith([v.Z], M);
    }
    getResults() {
        return T;
    }
    hasFriends() {
        return S;
    }
    getSelectedUsers() {
        return j;
    }
    getQuery() {
        return Z;
    }
    getState() {
        return {
            query: Z,
            selectedRow: N,
            selectedUsers: j,
            results: T,
            hasFriends: S
        };
    }
}
(r = 'PrivateChannelRecipientsInviteStore'),
    (a = 'displayName') in B
        ? Object.defineProperty(B, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (B[a] = r);
let F = new B(d.Z, {
        CONNECTION_OPEN: function () {
            A();
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let i = b;
            return A(), (b = i), (y = n), R();
        },
        MODAL_PUSH: D,
        SHOW_ACTION_SHEET: D,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (b = !0), M(), (i = O()), (y = e.channelId), P('');
        },
        MODAL_POP: w,
        HIDE_ACTION_SHEET: w,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: U,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            (y = e.channelId), P(e.query);
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            N = e.row;
        },
        PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function (e) {
            let { userId: t } = e;
            j.add(t), (j = new Set(j));
        },
        PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function (e) {
            let { userId: t } = e;
            j.delete(t), (j = new Set(j));
        }
    }),
    H = F;
