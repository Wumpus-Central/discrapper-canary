let i;
n.d(t, { A: () => x, h: () => V }), n(321073);
var l,
    s = n(311907),
    a = n(713402),
    r = n(73153),
    o = n(450827),
    c = n(49463),
    d = n(625788),
    u = n(21119),
    h = n(95701),
    m = n(240248),
    A = n(427262),
    g = n(734057),
    p = n(153488),
    f = n(205761),
    _ = n(994500),
    E = n(287809),
    C = n(652215),
    x = (((l = {})[(l.FRIENDS = 0)] = "FRIENDS"), (l[(l.GUILD_MEMBERS = 1)] = "GUILD_MEMBERS"), l);
let S = !1,
    T = "",
    N = 0,
    I = 0,
    v = [],
    y = !1,
    b = new Set(),
    j = null,
    R = new a.J(
        function (e) {
            let t = [],
                n = E.default.getCurrentUser();
            return _.A.isFriend(e.user.id) ? t.push("FRIENDS") : e.user.id !== n?.id && t.push("GUILD_MEMBERS"), t;
        },
        function (e) {
            return e.user.username === T
                ? -1e3
                : p.A.hasConsented(C.YAq.PERSONALIZATION)
                  ? -(u.A.getUserAffinity(e.user.id)?.communicationProbability ?? 0)
                  : (0, m.sS)(A.Ay.getName(e.user).toLocaleLowerCase());
        },
    );
function M() {
    (T = ""), (N = 0), (I = 0), (v = []), (b = new Set()), (S = !1), (j = null), R.clear();
}
function D(e) {
    (T = e), (I = 0), O();
}
function O() {
    if (!S) return !1;
    let e = g.A.getChannel(j);
    if (0 === T.trim().length)
        return (
            null != i && i.clearQuery(),
            (v = (function (e) {
                let t = _.A.getFriendIDs(),
                    n = d.A.getConfig({ location: "PrivateChannelRecipientsInviteStore" }).enabled,
                    i = E.default.getCurrentUser();
                if (
                    (i?.isStaff() &&
                        (t = Array.from(
                            new Set([
                                ...t,
                                ...E.default.filter((e) => e.isStaff() && e.id !== i.id, !1).map((e) => e.id),
                            ]),
                        )),
                    e?.isPrivate() && (t = t.filter((t) => !e.recipients.includes(t))),
                    n)
                )
                    for (let n of (e?.isPrivate() &&
                        e.recipients.forEach((e) => {
                            R.delete(e);
                        }),
                    t))
                        !(function (e) {
                            if (_.A.getRelationshipType(e) === C.eA$.BLOCKED) return R.delete(e);
                            let t = E.default.getUser(e);
                            if (null == t) return R.delete(e);
                            R.set(e, { user: t, comparator: A.Ay.getName(t) });
                        })(n);
                return t
                    .reduce((e, t) => {
                        let n = E.default.getUser(t);
                        return (
                            null == n || n.isProvisional || n.bot || e.push({ user: n, comparator: A.Ay.getName(n) }), e
                        );
                    }, [])
                    .sort(P);
            })(e)),
            !0
        );
    let t = null != e ? e.recipients : [];
    if (null != i) {
        let e,
            n,
            l,
            s = E.default.getCurrentUser(),
            a = s?.isStaff() ?? !1,
            r = d.A.getConfig({ location: "PrivateChannelRecipientsInviteStore" }).enabled;
        i.setQuery({
            query: T,
            filters: r ? void 0 : { friends: !0, staff: a, provisional: !1 },
            blacklist: t,
            boosters:
                ((n = Math.max(
                    ...(e = f.A.getFrequentlyWithoutFetchingLatest().filter((e) => e instanceof h.cq && e.isDM())).map(
                        (e) => {
                            let { id: t } = e;
                            return f.A.getScoreWithoutFetchingLatest(t);
                        },
                    ),
                )),
                (l = {}),
                e.forEach((e) => {
                    let t = f.A.getScoreWithoutFetchingLatest(e.id),
                        i = e.getRecipientId(),
                        s = 0.2 * !!_.A.isFriend(i),
                        a = 0.1 * (null != g.A.getDMFromUserId(i));
                    l[i] = 1 + t / n + s + a;
                }),
                l),
        });
    }
    return !1;
}
function L() {
    if (!S) return !1;
    let e = y;
    return (y = _.A.getFriendCount() > 0) !== e;
}
function P(e, t) {
    if (p.A.hasConsented(C.YAq.PERSONALIZATION)) {
        let n = u.A.getUserAffinity(e.user.id)?.communicationProbability ?? 0,
            i = u.A.getUserAffinity(t.user.id)?.communicationProbability ?? 0;
        if (n !== i) return i - n;
    }
    return (0, m.sS)(A.Ay.getName(e.user).toLocaleLowerCase()).localeCompare(
        (0, m.sS)(A.Ay.getName(t.user).toLocaleLowerCase()),
    );
}
function w(e) {
    let { results: t } = e;
    if (!S || "" === T) return;
    let n = [];
    for (let { id: e, comparator: i } of (R.clear(), t)) {
        let t = E.default.getUser(e);
        null == t ||
            t.isProvisional ||
            t.bot ||
            (n.push({ user: t, comparator: i }), R.set(e, { user: t, comparator: i }));
    }
    (v = n), B.emitChange();
}
function k() {
    return null != i && (i.destroy(), (i = null)), o.A.getUserSearchContext(w, 1e3);
}
function U(e) {
    if (e.key !== C.TLS) return !1;
    (S = !0), L(), (i = k()), (j = null), D("");
}
function G(e) {
    if (e.key !== C.TLS) return !1;
    F();
}
function F() {
    null != i && (i.destroy(), (i = null)), M();
}
class H extends s.Ay.Store {
    static displayName = "PrivateChannelRecipientsInviteStore";
    initialize() {
        this.waitFor(g.A, p.A, c.A, f.A, _.A, u.A, E.default),
            this.syncWith([E.default, g.A], O),
            this.syncWith([_.A], L);
    }
    getResults() {
        return v;
    }
    hasFriends() {
        return y;
    }
    getSelectedUsers() {
        return b;
    }
    getQuery() {
        return T;
    }
    getState() {
        return { query: T, selectedRow: I, selectedSection: N, selectedUsers: b, results: v, hasFriends: y };
    }
    getSections() {
        let e = R.indexes();
        return [e.FRIENDS, e.GUILD_MEMBERS];
    }
}
let B = new H(r.h, {
        CONNECTION_OPEN: function () {
            M();
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let i = S;
            return M(), (S = i), (j = n), O();
        },
        MODAL_PUSH: U,
        SHOW_ACTION_SHEET: U,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (S = !0), L(), (i = k()), (j = e.channelId), D("");
        },
        MODAL_POP: G,
        HIDE_ACTION_SHEET: G,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: F,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            (j = e.channelId), D(e.query);
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            (N = e.section), (I = e.row);
        },
        PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function (e) {
            let { userId: t } = e;
            b.add(t), (b = new Set(b));
        },
        PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function (e) {
            let { userId: t } = e;
            b.delete(t), (b = new Set(b));
        },
    }),
    V = B;
