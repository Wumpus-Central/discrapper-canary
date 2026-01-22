let r;
n.d(t, { A: () => U }), n(896048), n(733351), n(321073), n(638769);
var l,
    i,
    a = n(311907),
    s = n(73153),
    o = n(450827),
    c = n(49463),
    u = n(21119),
    d = n(95701),
    f = n(240248),
    p = n(427262),
    h = n(734057),
    b = n(153488),
    g = n(205761),
    m = n(994500),
    A = n(287809),
    y = n(652215);
let O = !1,
    j = "",
    v = 0,
    x = [],
    E = !1,
    _ = new Set(),
    C = null;
function S() {
    (j = ""), (v = 0), (x = []), (_ = new Set()), (O = !1), (C = null);
}
function I(e) {
    (j = e), (v = 0), N();
}
function N() {
    var e, t;
    if (!O) return !1;
    let n = h.A.getChannel(C);
    if (0 === j.trim().length) {
        let t, l;
        return (
            null != r && r.clearQuery(),
            (e = n),
            (t = m.A.getFriendIDs()),
            (null == (l = A.default.getCurrentUser()) ? void 0 : l.isStaff()) &&
                (t = Array.from(
                    new Set([...t, ...A.default.filter((e) => e.isStaff() && e.id !== l.id, !1).map((e) => e.id)]),
                )),
            (null == e ? void 0 : e.isPrivate()) && (t = t.filter((t) => !e.recipients.includes(t))),
            (x = t
                .reduce((e, t) => {
                    let n = A.default.getUser(t);
                    return (
                        null == n ||
                            n.isProvisional ||
                            e.push({
                                user: n,
                                comparator: p.Ay.getName(n),
                            }),
                        e
                    );
                }, [])
                .sort(P)),
            !0
        );
    }
    let l = null != n ? n.recipients : [];
    if (null != r) {
        let e,
            n,
            i,
            a = A.default.getCurrentUser(),
            s = null != (t = null == a ? void 0 : a.isStaff()) && t;
        r.setQuery({
            query: j,
            filters: {
                friends: !0,
                staff: s,
                provisional: !1,
            },
            blacklist: l,
            boosters:
                ((n = Math.max(
                    ...(e = g.A.getFrequentlyWithoutFetchingLatest().filter((e) => e instanceof d.cq && e.isDM())).map(
                        (e) => {
                            let { id: t } = e;
                            return g.A.getScoreWithoutFetchingLatest(t);
                        },
                    ),
                )),
                (i = {}),
                e.forEach((e) => {
                    let t = g.A.getScoreWithoutFetchingLatest(e.id),
                        r = e.getRecipientId(),
                        l = 0.2 * !!m.A.isFriend(r),
                        a = 0.1 * (null != h.A.getDMFromUserId(r));
                    i[r] = 1 + t / n + l + a;
                }),
                i),
        });
    }
    return !1;
}
function T() {
    if (!O) return !1;
    let e = E;
    return (E = m.A.getFriendCount() > 0) !== e;
}
function P(e, t) {
    if (b.A.hasConsented(y.YAq.PERSONALIZATION)) {
        var n, r, l, i;
        let a =
                null != (n = null == (l = u.A.getUserAffinity(e.user.id)) ? void 0 : l.communicationProbability)
                    ? n
                    : 0,
            s =
                null != (r = null == (i = u.A.getUserAffinity(t.user.id)) ? void 0 : i.communicationProbability)
                    ? r
                    : 0;
        if (a !== s) return s - a;
    }
    return (0, f.sS)(p.Ay.getName(e.user).toLocaleLowerCase()).localeCompare(
        (0, f.sS)(p.Ay.getName(t.user).toLocaleLowerCase()),
    );
}
function w(e) {
    let { results: t } = e;
    if (!O || "" === j) return;
    let n = [];
    for (let { id: e, comparator: r } of t) {
        let t = A.default.getUser(e);
        null != t &&
            n.push({
                user: t,
                comparator: r,
            });
    }
    (x = n), k.emitChange();
}
function R() {
    return null != r && (r.destroy(), (r = null)), o.A.getUserSearchContext(w, 1000);
}
function D(e) {
    if (e.key !== y.TLS) return !1;
    (O = !0), T(), (r = R()), (C = null), I("");
}
function M(e) {
    if (e.key !== y.TLS) return !1;
    L();
}
function L() {
    null != r && (r.destroy(), (r = null)), S();
}
class G extends (l = a.Ay.Store) {
    initialize() {
        this.waitFor(h.A, b.A, c.A, g.A, m.A, u.A, A.default),
            this.syncWith([A.default, h.A], N),
            this.syncWith([m.A], T);
    }
    getResults() {
        return x;
    }
    hasFriends() {
        return E;
    }
    getSelectedUsers() {
        return _;
    }
    getQuery() {
        return j;
    }
    getState() {
        return {
            query: j,
            selectedRow: v,
            selectedUsers: _,
            results: x,
            hasFriends: E,
        };
    }
}
(i = "displayName") in G
    ? Object.defineProperty(G, i, {
          value: "PrivateChannelRecipientsInviteStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (G[i] = "PrivateChannelRecipientsInviteStore");
let k = new G(s.h, {
        CONNECTION_OPEN: function () {
            S();
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let r = O;
            return S(), (O = r), (C = n), N();
        },
        MODAL_PUSH: D,
        SHOW_ACTION_SHEET: D,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (O = !0), T(), (r = R()), (C = e.channelId), I("");
        },
        MODAL_POP: M,
        HIDE_ACTION_SHEET: M,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: L,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            (C = e.channelId), I(e.query);
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            v = e.row;
        },
        PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function (e) {
            let { userId: t } = e;
            _.add(t), (_ = new Set(_));
        },
        PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function (e) {
            let { userId: t } = e;
            _.delete(t), (_ = new Set(_));
        },
    }),
    U = k;
