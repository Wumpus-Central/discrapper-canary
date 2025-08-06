let r;
(n.d(t, { Z: () => q }), n(388685), n(781311), n(539854), n(642613));
var i,
    o = n(442837),
    a = n(570140),
    s = n(279779),
    l = n(353926),
    c = n(752048),
    u = n(131704),
    d = n(624138),
    f = n(51144),
    _ = n(592125),
    p = n(480294),
    h = n(580005),
    m = n(699516),
    g = n(594174),
    E = n(981631);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let y = 1000,
    O = !1,
    v = '',
    I = 0,
    T = [],
    S = !1,
    A = new Set(),
    N = null;
function C() {
    ((v = ''), (I = 0), (T = []), (A = new Set()), (O = !1), (N = null));
}
function R(e) {
    ((v = e), (I = 0), P());
}
function P() {
    if (!O) return !1;
    let e = _.Z.getChannel(N);
    if (0 === v.trim().length) return (null != r && r.clearQuery(), (T = k(e)), !0);
    let t = null != e ? e.recipients : [];
    if (null != r) {
        var n;
        let e = g.default.getCurrentUser(),
            i = null != (n = null == e ? void 0 : e.isStaff()) && n;
        r.setQuery({
            query: v,
            filters: {
                friends: !0,
                staff: i,
                provisional: !1
            },
            blacklist: t,
            boosters: U()
        });
    }
    return !1;
}
function w() {
    if (!O) return !1;
    let e = S;
    return (S = m.Z.getFriendCount() > 0) !== e;
}
function D(e, t) {
    if (p.Z.hasConsented(E.pjP.PERSONALIZATION)) {
        var n, r, i, o;
        let a = null != (i = null == (n = c.Z.getUserAffinity(e.user.id)) ? void 0 : n.communicationProbability) ? i : 0,
            s = null != (o = null == (r = c.Z.getUserAffinity(t.user.id)) ? void 0 : r.communicationProbability) ? o : 0;
        if (a !== s) return s - a;
    }
    return (0, d._I)(f.ZP.getName(e.user).toLocaleLowerCase()).localeCompare((0, d._I)(f.ZP.getName(t.user).toLocaleLowerCase()));
}
function L() {
    C();
}
function x(e) {
    let { guildId: t, channelId: n } = e;
    if (null != t) return !1;
    let r = O;
    return (C(), (O = r), (N = n), P());
}
function M(e) {
    ((N = e.channelId), R(e.query));
}
function k(e) {
    let t = m.Z.getFriendIDs(),
        n = g.default.getCurrentUser();
    return (
        (null == n ? void 0 : n.isStaff()) && (t = Array.from(new Set([...t, ...g.default.filter((e) => e.isStaff() && e.id !== n.id, !1).map((e) => e.id)]))),
        (null == e ? void 0 : e.isPrivate()) && (t = t.filter((t) => !e.recipients.includes(t))),
        t
            .reduce((e, t) => {
                let n = g.default.getUser(t);
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
            .sort(D)
    );
}
function j(e) {
    let { results: t } = e;
    if (!O || '' === v) return;
    let n = [];
    for (let { id: e, comparator: r } of t) {
        let t = g.default.getUser(e);
        null != t &&
            n.push({
                user: t,
                comparator: r
            });
    }
    ((T = n), z.emitChange());
}
function U() {
    let e = h.Z.getFrequentlyWithoutFetchingLatest().filter((e) => e instanceof u.mn && e.isDM()),
        t = Math.max(
            ...e.map((e) => {
                let { id: t } = e;
                return h.Z.getScoreWithoutFetchingLatest(t);
            })
        ),
        n = {};
    return (
        e.forEach((e) => {
            let r = h.Z.getScoreWithoutFetchingLatest(e.id),
                i = e.getRecipientId(),
                o = 0.2 * !!m.Z.isFriend(i),
                a = 0.1 * (null != _.Z.getDMFromUserId(i));
            n[i] = 1 + r / t + o + a;
        }),
        n
    );
}
function G(e) {
    I = e.row;
}
function B() {
    return (null != r && (r.destroy(), (r = null)), s.Z.getUserSearchContext(j, y));
}
function Z(e) {
    if (e.key !== E.vTt) return !1;
    ((O = !0), w(), (r = B()), (N = null), R(''));
}
function F(e) {
    ((O = !0), w(), (r = B()), (N = e.channelId), R(''));
}
function V(e) {
    if (e.key !== E.vTt) return !1;
    H();
}
function H() {
    (null != r && (r.destroy(), (r = null)), C());
}
function Y(e) {
    let { userId: t } = e;
    (A.add(t), (A = new Set(A)));
}
function W(e) {
    let { userId: t } = e;
    (A.delete(t), (A = new Set(A)));
}
class K extends (i = o.ZP.Store) {
    initialize() {
        (this.waitFor(g.default, _.Z, m.Z, l.Z, p.Z), this.syncWith([g.default, _.Z], P), this.syncWith([m.Z], w));
    }
    getResults() {
        return T;
    }
    hasFriends() {
        return S;
    }
    getSelectedUsers() {
        return A;
    }
    getQuery() {
        return v;
    }
    getState() {
        return {
            query: v,
            selectedRow: I,
            selectedUsers: A,
            results: T,
            hasFriends: S
        };
    }
}
b(K, 'displayName', 'PrivateChannelRecipientsInviteStore');
let z = new K(a.Z, {
        CONNECTION_OPEN: L,
        CHANNEL_SELECT: x,
        MODAL_PUSH: Z,
        SHOW_ACTION_SHEET: Z,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: F,
        MODAL_POP: V,
        HIDE_ACTION_SHEET: V,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: H,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: M,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: G,
        PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: Y,
        PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: W
    }),
    q = z;
