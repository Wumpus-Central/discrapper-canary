let i;
n.d(t, { A: () => S, h: () => W }), n(321073);
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
    _ = n(696451),
    E = n(994500),
    C = n(287809),
    x = n(652215),
    S = (((l = {})[(l.FRIENDS = 0)] = "FRIENDS"), (l[(l.GUILD_MEMBERS = 1)] = "GUILD_MEMBERS"), l);
let T = !1,
    I = "",
    N = 0,
    v = 0,
    y = [],
    b = !1,
    j = new Set(),
    R = null,
    M = new a.J(
        function (e) {
            let t = [],
                n = C.default.getCurrentUser();
            return (
                E.A.isFriend(e.user.id)
                    ? t.push("FRIENDS")
                    : e.user.id !== n?.id && D.has(e.user.id) && t.push("GUILD_MEMBERS"),
                t
            );
        },
        function (e) {
            return e.user.username === I
                ? -1e3
                : p.A.hasConsented(x.YAq.PERSONALIZATION)
                  ? -(u.A.getUserAffinity(e.user.id)?.communicationProbability ?? 0)
                  : (0, m.sS)(A.Ay.getName(e.user).toLocaleLowerCase());
        },
    ),
    D = new Set();
function O() {
    (I = ""), (N = 0), (v = 0), (y = []), (j = new Set()), (T = !1), (R = null), M.clear();
}
function L(e) {
    (I = e), (v = 0), P();
}
function P() {
    if (!T) return !1;
    let e = g.A.getChannel(R);
    if (0 === I.trim().length)
        return (
            null != i && i.clearQuery(),
            (y = (function (e) {
                let t = E.A.getFriendIDs(),
                    n = d.A.getConfig({ location: "PrivateChannelRecipientsInviteStore" }).enabled,
                    i = C.default.getCurrentUser();
                if (
                    (i?.isStaff() &&
                        (t = Array.from(
                            new Set([
                                ...t,
                                ...C.default.filter((e) => e.isStaff() && e.id !== i.id, !1).map((e) => e.id),
                            ]),
                        )),
                    e?.isPrivate() && (t = t.filter((t) => !e.recipients.includes(t))),
                    n)
                )
                    for (let n of (e?.isPrivate() &&
                        e.recipients.forEach((e) => {
                            M.delete(e);
                        }),
                    t))
                        !(function (e) {
                            if (E.A.getRelationshipType(e) === x.eA$.BLOCKED) return M.delete(e);
                            let t = C.default.getUser(e);
                            if (null == t) return M.delete(e);
                            M.set(e, { user: t, comparator: A.Ay.getName(t) });
                        })(n);
                return t
                    .reduce((e, t) => {
                        let n = C.default.getUser(t);
                        return (
                            null == n || n.isProvisional || n.bot || e.push({ user: n, comparator: A.Ay.getName(n) }), e
                        );
                    }, [])
                    .sort(k);
            })(e)),
            !0
        );
    let t = null != e ? e.recipients : [];
    if (null != i) {
        let e,
            n,
            l,
            s = C.default.getCurrentUser(),
            a = s?.isStaff() ?? !1,
            r = d.A.getConfig({ location: "PrivateChannelRecipientsInviteStore" }).enabled;
        i.setQuery({
            query: I,
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
                        s = 0.2 * !!E.A.isFriend(i),
                        a = 0.1 * (null != g.A.getDMFromUserId(i));
                    l[i] = 1 + t / n + s + a;
                }),
                l),
        });
    }
    return !1;
}
function w() {
    if (!T) return !1;
    let e = b;
    return (b = E.A.getFriendCount() > 0) !== e;
}
function k(e, t) {
    if (p.A.hasConsented(x.YAq.PERSONALIZATION)) {
        let n = u.A.getUserAffinity(e.user.id)?.communicationProbability ?? 0,
            i = u.A.getUserAffinity(t.user.id)?.communicationProbability ?? 0;
        if (n !== i) return i - n;
    }
    return (0, m.sS)(A.Ay.getName(e.user).toLocaleLowerCase()).localeCompare(
        (0, m.sS)(A.Ay.getName(t.user).toLocaleLowerCase()),
    );
}
function U(e) {
    let { results: t } = e;
    if (!T || "" === I) return;
    let n = [];
    for (let { id: e, comparator: i } of (M.clear(), t)) {
        let t = C.default.getUser(e);
        null == t ||
            t.isProvisional ||
            t.bot ||
            (n.push({ user: t, comparator: i }), M.set(e, { user: t, comparator: i }));
    }
    (y = n), K.emitChange();
}
function G() {
    return null != i && (i.destroy(), (i = null)), o.A.getUserSearchContext(U, 1e3);
}
function F(e) {
    if (e.key !== x.TLS) return !1;
    (T = !0), w(), (i = G()), (R = null), L("");
}
function H(e) {
    if (e.key !== x.TLS) return !1;
    B();
}
function B() {
    null != i && (i.destroy(), (i = null)), O();
}
class V extends s.Ay.Store {
    static displayName = "PrivateChannelRecipientsInviteStore";
    initialize() {
        this.waitFor(g.A, p.A, c.A, f.A, E.A, u.A, C.default, _.Ay),
            this.syncWith([C.default, g.A], P),
            this.syncWith([E.A], w);
    }
    getResults() {
        return y;
    }
    hasFriends() {
        return b;
    }
    getSelectedUsers() {
        return j;
    }
    getQuery() {
        return I;
    }
    getState() {
        return { query: I, selectedRow: v, selectedSection: N, selectedUsers: j, results: y, hasFriends: b };
    }
    getSections() {
        let e = M.indexes();
        return [e.FRIENDS, e.GUILD_MEMBERS];
    }
}
let K = new V(r.h, {
        CONNECTION_OPEN: function () {
            O(), (D = new Set());
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let i = T;
            return O(), (T = i), (R = n), P();
        },
        MODAL_PUSH: F,
        SHOW_ACTION_SHEET: F,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (T = !0), w(), (i = G()), (R = e.channelId), L("");
        },
        MODAL_POP: H,
        HIDE_ACTION_SHEET: H,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: B,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            (R = e.channelId), L(e.query);
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            (N = e.section), (v = e.row);
        },
        PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function (e) {
            let { userId: t } = e;
            j.add(t), (j = new Set(j));
        },
        PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function (e) {
            let { userId: t } = e;
            j.delete(t), (j = new Set(j));
        },
        GUILD_MEMBER_ADD: function (e) {
            let { user: t } = e;
            if (D.has(t.id)) return !1;
            D.add(t.id);
        },
        GUILD_MEMBER_REMOVE: function (e) {
            let { user: t } = e;
            if (!D.has(t.id) || 0 !== _.Ay.memberOf(t.id).length) return !1;
            D.delete(t.id);
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
            let { chunks: t } = e,
                n = !1;
            for (let e of t) for (let t of e.members) D.has(t.user.id) || (D.add(t.user.id), (n = !0));
            return n;
        },
    }),
    W = K;
