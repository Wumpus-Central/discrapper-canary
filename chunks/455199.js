var i,
    a = r(733860);
var s = r(653041);
var o = r(392711),
    l = r.n(o),
    u = r(442837),
    c = r(433517),
    d = r(379649),
    f = r(570140),
    _ = r(786761),
    h = r(572804),
    p = r(901461),
    m = r(814082),
    g = r(23750),
    E = r(314897),
    v = r(592125),
    I = r(375954),
    T = r(306680),
    b = r(699516),
    y = r(914010),
    S = r(9156),
    A = r(594174),
    N = r(981631);
function C(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let R = 'recentMentionFilterSettings',
    O = [],
    D = {},
    L = {},
    x = !1,
    w = !0,
    P = c.K.get(R, {
        guildFilter: N.NgX.ALL_SERVERS,
        everyoneFilter: !0,
        roleFilter: !0
    }),
    M = !1,
    k = 0,
    U = !1,
    B = !1;
function G(e) {
    (D = {}),
        e.forEach((e) => {
            null == D[e.getChannelId()] && (D[e.getChannelId()] = 0), D[e.getChannelId()]++;
        });
}
function F(e) {
    let { addedMessages: n, deletedMessages: r } = e;
    null != n &&
        n.forEach((e) => {
            null == D[e.getChannelId()] && (D[e.getChannelId()] = 0), D[e.getChannelId()]++;
        }),
        null != r &&
            r.forEach((e) => {
                null != D[e.getChannelId()] && (D[e.getChannelId()] = Math.max(0, D[e.getChannelId()] - 1));
            });
}
function Z() {
    U = !0;
}
function V() {
    U = !1;
}
function j(e) {
    let { guildId: n } = e;
    (x = !0), null == n && P.guildFilter === N.NgX.THIS_SERVER && $({ guildFilter: N.NgX.ALL_SERVERS });
}
function H(e) {
    if (e instanceof g.ZP) return e;
    let n = I.Z.getMessage(e.channel_id, e.id);
    return null != n ? n : (0, _.e5)(e);
}
function Y(e) {
    let { hasMoreAfter: n, messages: r, isAfter: i } = e,
        a = l().map(r, H);
    F({ addedMessages: a }),
        i ? (O = O.concat(a)) : ((O = a), (L = {})),
        l().forEach(a, (e) => {
            L[e.id] = !0;
        }),
        (x = !1),
        (w = n),
        (k = (0, d.zO)()),
        (M = !0);
}
function W() {
    x = !1;
}
function K(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if ((0, p.Z)(e) && !N.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
    null == n && (n = e.channel_id);
    let r = v.Z.getChannel(n);
    if (null == r || r.type === N.d4z.DM || (P.guildFilter === N.NgX.THIS_SERVER && r.getGuildId() !== y.Z.getGuildId())) return null;
    let i = E.default.getId();
    if (b.Z.isBlockedOrIgnoredForMessage(e) || (0, m.Z)(e, i)) return null;
    e = H(e);
    let a = !P.everyoneFilter,
        s = !P.roleFilter;
    return (0, h.ZP)({
        message: e,
        userId: i,
        suppressEveryone: a,
        suppressRoles: s
    })
        ? (B &&
              T.ZP.ackMessageId(r.id) !== e.id &&
              (0, h.ZP)({
                  message: e,
                  userId: i,
                  suppressEveryone: S.ZP.isSuppressEveryoneEnabled(r.getGuildId()),
                  suppressRoles: S.ZP.isSuppressRolesEnabled(r.getGuildId())
              }) &&
              (B = !1),
          e)
        : null;
}
function z(e) {
    let { channelId: n, message: r } = e,
        i = A.default.getCurrentUser();
    if (
        null == i ||
        !(0, h.Hl)({
            rawMessage: r,
            userId: i.id,
            suppressRoles: !1,
            suppressEveryone: !1
        })
    )
        return !1;
    let a = K(r, n);
    if (null == a) return !1;
    (O = O.slice()).unshift(a), (L[a.id] = !0), F({ addedMessages: [a] });
}
function q(e) {
    let n = e.message.id;
    if (null == L[String(n)]) return !1;
    let r = l().findIndex(O, (e) => {
            let { id: r } = e;
            return r === n;
        }),
        i = (O = O.slice())[r];
    null != i && (O[r] = (0, _.wi)(i, e.message));
}
function Q(e) {
    if (null == L[e]) return !1;
    delete L[e],
        F({
            deletedMessages: l().filter(O, (n) => {
                let { id: r } = n;
                return r === e;
            })
        }),
        (O = l().filter(O, (n) => {
            let { id: r } = n;
            return r !== e;
        }));
}
function X(e) {
    let { id: n } = e;
    return Q(n);
}
function J(e) {
    let { ids: n } = e;
    l().forEach(n, Q);
}
function $(e) {
    let n = { ...P };
    (P = l().defaults(l().pick(e, ['guildFilter', 'roleFilter', 'everyoneFilter']), P)), c.K.set(R, P);
    let r = (e, r) => n[e] !== P[e] && P[e] === r,
        i = r('guildFilter', N.NgX.THIS_SERVER) || r('everyoneFilter', !1) || r('roleFilter', !1);
    L = {};
    let a = [];
    i &&
        O.forEach((e) => {
            let n = K(e);
            null != n && (a.push(n), (L[n.id] = !0));
        }),
        G((O = a)),
        0 === O.length && (M = !1);
}
function ee() {
    if (P.guildFilter !== N.NgX.THIS_SERVER) return !1;
    M = !1;
}
function et() {
    (O = []), (L = {}), (M = !1), (B = !1), (D = {});
}
function en(e) {
    let { guild: n } = e,
        r = [];
    (O = l().filter(O, (e) => {
        let i = v.Z.getChannel(e.channel_id);
        return (null != i && i.getGuildId() !== n.id) || (delete L[e.id], r.push(e), !1);
    })),
        F({ deletedMessages: r });
}
function er() {
    F({ deletedMessages: l().filter(O, (e) => b.Z.isBlockedOrIgnoredForMessage(e)) }), (O = O.filter((e) => !b.Z.isBlockedOrIgnoredForMessage(e)));
}
function ei(e) {
    let { channel: n } = e,
        r = [];
    (O = l().filter(O, (e) => e.channel_id !== n.id || (delete L[e.id], r.push(e), !1))), F({ deletedMessages: r });
}
function ea(e) {
    et();
}
function es(e) {
    let { size: n } = e;
    F({ deletedMessages: O.slice(n) });
    for (let e = n; e < O.length; ++e) delete L[O[e].id];
    let r = O.length;
    r > (O = O.slice(0, n)).length && (w = !0);
}
function eo(e) {
    B = !0;
}
class el extends (i = u.ZP.Store) {
    initialize() {
        this.waitFor(A.default, v.Z, I.Z, T.ZP);
    }
    isOpen() {
        return U;
    }
    get hasLoadedEver() {
        return M;
    }
    get lastLoaded() {
        return k;
    }
    getMentions() {
        return M || O.length > 0 ? O : null;
    }
    hasMention(e) {
        return L[e];
    }
    get loading() {
        return x;
    }
    get hasMore() {
        return w;
    }
    get guildFilter() {
        return P.guildFilter;
    }
    get everyoneFilter() {
        return P.everyoneFilter;
    }
    get roleFilter() {
        return P.roleFilter;
    }
    get mentionsAreStale() {
        return B;
    }
    get mentionCountByChannel() {
        return D;
    }
    getMentionCountForChannel(e) {
        var n;
        return null !== (n = D[e]) && void 0 !== n ? n : 0;
    }
}
C(el, 'displayName', 'RecentMentionsStore'),
    (n.Z = new el(f.Z, {
        LOAD_RECENT_MENTIONS: j,
        LOAD_RECENT_MENTIONS_SUCCESS: Y,
        LOAD_RECENT_MENTIONS_FAILURE: W,
        SET_RECENT_MENTIONS_FILTER: $,
        CLEAR_MENTIONS: ea,
        TRUNCATE_MENTIONS: es,
        CHANNEL_SELECT: ee,
        CONNECTION_OPEN: et,
        GUILD_DELETE: en,
        MESSAGE_CREATE: z,
        MESSAGE_UPDATE: q,
        MESSAGE_DELETE: X,
        RECENT_MENTION_DELETE: X,
        MESSAGE_DELETE_BULK: J,
        CHANNEL_DELETE: ei,
        THREAD_DELETE: ei,
        RELATIONSHIP_ADD: er,
        RELATIONSHIP_REMOVE: er,
        RELATIONSHIP_UPDATE: er,
        MENTION_MODAL_OPEN: Z,
        MENTION_MODAL_CLOSE: V,
        SET_RECENT_MENTIONS_STALE: eo
    }));
