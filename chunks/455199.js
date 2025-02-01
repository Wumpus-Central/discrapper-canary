n.d(t, { Z: () => ei }), n(733860), n(653041);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(433517),
    l = n(379649),
    u = n(570140),
    c = n(786761),
    d = n(572804),
    f = n(901461),
    _ = n(814082),
    p = n(23750),
    h = n(314897),
    m = n(592125),
    g = n(375954),
    E = n(306680),
    v = n(699516),
    y = n(914010),
    I = n(9156),
    T = n(594174),
    b = n(981631);
function S(e, t, n) {
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
let A = 'recentMentionFilterSettings',
    N = [],
    C = {},
    R = {},
    O = !1,
    D = !0,
    x = o.K.get(A, {
        guildFilter: b.NgX.ALL_SERVERS,
        everyoneFilter: !0,
        roleFilter: !0
    }),
    L = !1,
    P = 0,
    w = !1;
function M(e) {
    (C = {}),
        e.forEach((e) => {
            null == C[e.getChannelId()] && (C[e.getChannelId()] = 0), C[e.getChannelId()]++;
        });
}
function k(e) {
    let { addedMessages: t, deletedMessages: n } = e;
    null != t &&
        t.forEach((e) => {
            null == C[e.getChannelId()] && (C[e.getChannelId()] = 0), C[e.getChannelId()]++;
        }),
        null != n &&
            n.forEach((e) => {
                null != C[e.getChannelId()] && (C[e.getChannelId()] = Math.max(0, C[e.getChannelId()] - 1));
            });
}
function U(e) {
    let { guildId: t } = e;
    (O = !0), null == t && x.guildFilter === b.NgX.THIS_SERVER && K({ guildFilter: b.NgX.ALL_SERVERS });
}
function G(e) {
    if (e instanceof p.ZP) return e;
    let t = g.Z.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, c.e5)(e);
}
function B(e) {
    let { hasMoreAfter: t, messages: n, isAfter: i } = e,
        r = a().map(n, G);
    k({ addedMessages: r }),
        i ? (N = N.concat(r)) : ((N = r), (R = {})),
        a().forEach(r, (e) => {
            R[e.id] = !0;
        }),
        (O = !1),
        (D = t),
        (P = (0, l.zO)()),
        (L = !0);
}
function Z() {
    O = !1;
}
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if ((0, f.Z)(e) && !b.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
    null == t && (t = e.channel_id);
    let n = m.Z.getChannel(t);
    if (null == n || n.type === b.d4z.DM || (x.guildFilter === b.NgX.THIS_SERVER && n.getGuildId() !== y.Z.getGuildId())) return null;
    let i = h.default.getId();
    if (v.Z.isBlockedOrIgnoredForMessage(e) || (0, _.Z)(e, i)) return null;
    e = G(e);
    let r = !x.everyoneFilter,
        a = !x.roleFilter;
    return (0, d.ZP)({
        message: e,
        userId: i,
        suppressEveryone: r,
        suppressRoles: a
    })
        ? (w &&
              E.ZP.ackMessageId(n.id) !== e.id &&
              (0, d.ZP)({
                  message: e,
                  userId: i,
                  suppressEveryone: I.ZP.isSuppressEveryoneEnabled(n.getGuildId()),
                  suppressRoles: I.ZP.isSuppressRolesEnabled(n.getGuildId())
              }) &&
              (w = !1),
          e)
        : null;
}
function V(e) {
    let { channelId: t, message: n } = e,
        i = T.default.getCurrentUser();
    if (
        null == i ||
        !(0, d.Hl)({
            rawMessage: n,
            userId: i.id,
            suppressRoles: !1,
            suppressEveryone: !1
        })
    )
        return !1;
    let r = F(n, t);
    if (null == r) return !1;
    (N = N.slice()).unshift(r), (R[r.id] = !0), k({ addedMessages: [r] });
}
function j(e) {
    let t = e.message.id;
    if (null == R[String(t)]) return !1;
    let n = a().findIndex(N, (e) => {
            let { id: n } = e;
            return n === t;
        }),
        i = (N = N.slice())[n];
    null != i && (N[n] = (0, c.wi)(i, e.message));
}
function H(e) {
    if (null == R[e]) return !1;
    delete R[e],
        k({
            deletedMessages: a().filter(N, (t) => {
                let { id: n } = t;
                return n === e;
            })
        }),
        (N = a().filter(N, (t) => {
            let { id: n } = t;
            return n !== e;
        }));
}
function Y(e) {
    let { id: t } = e;
    return H(t);
}
function W(e) {
    let { ids: t } = e;
    a().forEach(t, H);
}
function K(e) {
    let t = { ...x };
    (x = a().defaults(a().pick(e, ['guildFilter', 'roleFilter', 'everyoneFilter']), x)), o.K.set(A, x);
    let n = (e, n) => t[e] !== x[e] && x[e] === n,
        i = n('guildFilter', b.NgX.THIS_SERVER) || n('everyoneFilter', !1) || n('roleFilter', !1);
    R = {};
    let r = [];
    i &&
        N.forEach((e) => {
            let t = F(e);
            null != t && (r.push(t), (R[t.id] = !0));
        }),
        M((N = r)),
        0 === N.length && (L = !1);
}
function z() {
    if (x.guildFilter !== b.NgX.THIS_SERVER) return !1;
    L = !1;
}
function q() {
    (N = []), (R = {}), (L = !1), (w = !1), (C = {});
}
function Q(e) {
    let { guild: t } = e,
        n = [];
    (N = a().filter(N, (e) => {
        let i = m.Z.getChannel(e.channel_id);
        return (null != i && i.getGuildId() !== t.id) || (delete R[e.id], n.push(e), !1);
    })),
        k({ deletedMessages: n });
}
function X() {
    k({ deletedMessages: a().filter(N, (e) => v.Z.isBlockedOrIgnoredForMessage(e)) }), (N = N.filter((e) => !v.Z.isBlockedOrIgnoredForMessage(e)));
}
function J(e) {
    let { channel: t } = e,
        n = [];
    (N = a().filter(N, (e) => e.channel_id !== t.id || (delete R[e.id], n.push(e), !1))), k({ deletedMessages: n });
}
function $(e) {
    q();
}
function ee(e) {
    let { size: t } = e;
    k({ deletedMessages: N.slice(t) });
    for (let e = t; e < N.length; ++e) delete R[N[e].id];
    N.length > (N = N.slice(0, t)).length && (D = !0);
}
function et(e) {
    w = !0;
}
class en extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(T.default, m.Z, g.Z, E.ZP);
    }
    get hasLoadedEver() {
        return L;
    }
    get lastLoaded() {
        return P;
    }
    getMentions() {
        return L || N.length > 0 ? N : null;
    }
    hasMention(e) {
        return R[e];
    }
    get loading() {
        return O;
    }
    get hasMore() {
        return D;
    }
    get guildFilter() {
        return x.guildFilter;
    }
    get everyoneFilter() {
        return x.everyoneFilter;
    }
    get roleFilter() {
        return x.roleFilter;
    }
    get mentionsAreStale() {
        return w;
    }
    get mentionCountByChannel() {
        return C;
    }
    getMentionCountForChannel(e) {
        var t;
        return null !== (t = C[e]) && void 0 !== t ? t : 0;
    }
}
S(en, 'displayName', 'RecentMentionsStore');
let ei = new en(u.Z, {
    LOAD_RECENT_MENTIONS: U,
    LOAD_RECENT_MENTIONS_SUCCESS: B,
    LOAD_RECENT_MENTIONS_FAILURE: Z,
    SET_RECENT_MENTIONS_FILTER: K,
    CLEAR_MENTIONS: $,
    TRUNCATE_MENTIONS: ee,
    CHANNEL_SELECT: z,
    CONNECTION_OPEN: q,
    GUILD_DELETE: Q,
    MESSAGE_CREATE: V,
    MESSAGE_UPDATE: j,
    MESSAGE_DELETE: Y,
    RECENT_MENTION_DELETE: Y,
    MESSAGE_DELETE_BULK: W,
    CHANNEL_DELETE: J,
    THREAD_DELETE: J,
    RELATIONSHIP_ADD: X,
    RELATIONSHIP_REMOVE: X,
    RELATIONSHIP_UPDATE: X,
    SET_RECENT_MENTIONS_STALE: et
});
