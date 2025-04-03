let r;
n.d(t, { Z: () => H }), n(47120), n(566702), n(653041), n(230036);
var i,
    l,
    o,
    a = n(392711),
    s = n.n(a),
    c = n(442837),
    u = n(570140),
    d = n(279779),
    p = n(353926),
    h = n(752048),
    f = n(131704),
    m = n(624138),
    g = n(51144),
    b = n(592125),
    _ = n(480294),
    C = n(580005),
    y = n(699516),
    x = n(594174),
    v = n(981631);
let j = !1,
    O = '',
    E = 0,
    N = [],
    I = !1,
    P = new Set(),
    S = null;
function Z() {
    (O = ''), (E = 0), (N = []), (P = new Set()), (j = !1), (S = null);
}
function T(e) {
    (O = e), (E = 0), A();
}
function A() {
    if (!j) return !1;
    let e = b.Z.getChannel(S);
    if (0 === O.trim().length) {
        var t;
        let n;
        return (
            null != r && r.clearQuery(),
            (t = e),
            (n = y.Z.getFriendIDs()),
            (null == t ? void 0 : t.isPrivate()) && (n = n.filter((e) => !t.recipients.includes(e))),
            (N = n
                .reduce((e, t) => {
                    let n = x.default.getUser(t);
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
                .sort(R)),
            !0
        );
    }
    let n = null != e ? e.recipients : [];
    return (
        null != r &&
            r.setQuery(
                O,
                {
                    friends: !0,
                    provisional: !1
                },
                n,
                (function () {
                    let e = C.Z.getFrequentlyWithoutFetchingLatest().filter((e) => e instanceof f.mn && e.isDM()),
                        t = Math.max(
                            ...e.map((e) => {
                                let { id: t } = e;
                                return C.Z.getScoreWithoutFetchingLatest(t);
                            })
                        ),
                        n = {};
                    return (
                        e.forEach((e) => {
                            let r = C.Z.getScoreWithoutFetchingLatest(e.id),
                                i = e.getRecipientId(),
                                l = 0.2 * !!y.Z.isFriend(i),
                                o = 0.1 * (null != b.Z.getDMFromUserId(i));
                            n[i] = 1 + r / t + l + o;
                        }),
                        n
                    );
                })()
            ),
        !1
    );
}
function w() {
    if (!j) return !1;
    let e = I;
    return (I = s().some(y.Z.getRelationships(), (e) => e === v.OGo.FRIEND)) !== e;
}
function R(e, t) {
    if (_.Z.hasConsented(v.pjP.PERSONALIZATION)) {
        var n, r, i, l;
        let o = null != (i = null == (n = h.Z.getUserAffinity(e.user.id)) ? void 0 : n.communicationProbability) ? i : 0,
            a = null != (l = null == (r = h.Z.getUserAffinity(t.user.id)) ? void 0 : r.communicationProbability) ? l : 0;
        if (o !== a) return a - o;
    }
    return (0, m._I)(g.ZP.getName(e.user).toLocaleLowerCase()).localeCompare((0, m._I)(g.ZP.getName(t.user).toLocaleLowerCase()));
}
function M(e) {
    let { results: t } = e;
    if (!j || '' === O) return;
    let n = [];
    for (let { id: e, comparator: r } of t) {
        let t = x.default.getUser(e);
        null != t &&
            n.push({
                user: t,
                comparator: r
            });
    }
    (N = n), B.emitChange();
}
function k() {
    return null != r && (r.destroy(), (r = null)), d.Z.getSearchContext(M, 1000);
}
function L(e) {
    if (e.key !== v.vTt) return !1;
    (j = !0), w(), (r = k()), (S = null), T('');
}
function D(e) {
    if (e.key !== v.vTt) return !1;
    W();
}
function W() {
    null != r && (r.destroy(), (r = null)), Z();
}
class U extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(x.default, b.Z, y.Z, p.Z, _.Z), this.syncWith([x.default, b.Z], A), this.syncWith([y.Z], w);
    }
    getResults() {
        return N;
    }
    hasFriends() {
        return I;
    }
    getSelectedUsers() {
        return P;
    }
    getQuery() {
        return O;
    }
    getState() {
        return {
            query: O,
            selectedRow: E,
            selectedUsers: P,
            results: N,
            hasFriends: I
        };
    }
}
(o = 'PrivateChannelRecipientsInviteStore'),
    (l = 'displayName') in U
        ? Object.defineProperty(U, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (U[l] = o);
let B = new U(u.Z, {
        CONNECTION_OPEN: function () {
            Z();
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let r = j;
            return Z(), (j = r), (S = n), A();
        },
        MODAL_PUSH: L,
        SHOW_ACTION_SHEET: L,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (j = !0), w(), (r = k()), (S = e.channelId), T('');
        },
        MODAL_POP: D,
        HIDE_ACTION_SHEET: D,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: W,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            (S = e.channelId), T(e.query);
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            E = e.row;
        },
        PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function (e) {
            let { userId: t } = e;
            P.add(t), (P = new Set(P));
        },
        PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function (e) {
            let { userId: t } = e;
            P.delete(t), (P = new Set(P));
        }
    }),
    H = B;
