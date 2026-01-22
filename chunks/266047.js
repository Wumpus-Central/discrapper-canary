n.d(t, {
    A: () => $,
}),
    n(896048),
    n(321073);
var r,
    i = n(311907),
    a = n(73153),
    s = n(961350),
    o = n(696451),
    l = n(71393),
    c = n(287809),
    u = n(403362),
    d = n(661191),
    f = n(486005),
    p = n(70738),
    _ = n(166233),
    h = n(11541),
    m = n(652215);

function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let E = !1,
    b = {};

function y(e) {
    return null == b[e] && (b[e] = new f.e(e)), b[e];
}

function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    y(e).reset(t);
}

function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    for (let t in b) O(t, e);
}

function v(e) {
    let { guild: t } = e,
        n = y(t.id);
    O(t.id, n.isInitialized);
}

function S(e) {
    let {
        guild: { id: t },
    } = e;
    O(t);
}

function I() {
    return !1;
}

function T(e) {
    let { guildId: t, userIds: n } = e;
    return y(t).updateMembersByMemberIds(n);
}

function C(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t) n = y(e.guildId).updateServerMembers(e.members) || n;
    return n;
}

function N(e) {
    let { guildId: t } = e,
        n = s.default.getId();
    return y(t).updateMembersByMemberIds([n]);
}

function R(e) {
    let { guildId: t, user: n } = e;
    return y(t).removeMember(n.id);
}

function w(e) {
    let t = !1,
        n = y(e.guildId);
    return "GUILD_ROLE_DELETE" === e.type && (t = n.removeRoleFromSearchState(e.roleId)), n.rebuildAllMembers() || t;
}

function P(e) {
    let { guildId: t, userId: n } = e;
    return y(t).updateMembersByMemberIds([n]);
}

function D(e) {
    let { guildId: t, members: n } = e;
    if (null == n || 0 === n.length) return !1;
    let r = y(t),
        i = n.reduce((e, t) => {
            if (null != t.member) {
                let n = t.member.user.id;
                e.push(n);
            }
            return e;
        }, []);
    return r.updateMembersByMemberIds(i);
}

function x(e) {
    let { guildId: t, addedMembers: n } = e;
    if (null == n || 0 === n.length) return !1;
    let r = y(t),
        i = n.reduce((e, t) => {
            let n = t.userId;
            return e.push(n), e;
        }, []);
    return r.updateMembersByMemberIds(i);
}

function L(e) {
    let { guildId: t, members: n } = e;
    if (null == n || 0 === n.length) return !1;
    let r = y(t),
        i = n.reduce((e, t) => {
            let n = t.userId;
            return e.push(n), e;
        }, []);
    return r.updateMembersByMemberIds(i);
}

function j(e) {
    let { guildId: t, threads: n } = e,
        r = Object.values(n);
    if (0 === r.length) return !1;
    let i = y(t),
        a = r.reduce((e, t) => {
            if (null != t.owner) {
                let n = t.owner.user.id;
                e.push(n);
            }
            return e;
        }, []);
    return i.updateMembersByMemberIds(a);
}

function M(e) {
    let { guildId: t, guildMember: n } = e;
    return y(t).updateMembersByMemberIds([n.user.id]);
}

function k(e) {
    let t = !1;
    return (
        e.guilds.forEach((e) => {
            let { id: n, members: r } = e;
            t = y(n).updateServerMembers(r) || t;
        }),
        t
    );
}

function U(e) {
    let t = !1;
    return (
        e.guilds.forEach((e) => {
            let { id: n, activity_instances: r } = e,
                i = y(n),
                a = [];
            null == r ||
                r.forEach((e) => {
                    var t;
                    null == (t = e.participants) ||
                        t.forEach((e) => {
                            (0, u.Vq)(e.member) && a.push(e.member);
                        });
                }),
                (t = i.updateServerMembers(a) || t);
        }),
        t
    );
}

function G(e) {
    return E ? (E = !1) : A(!0), k(e);
}

function V(e) {
    return U(e);
}

function F(e) {
    let { guildMembers: t } = e,
        n = !1;
    return (
        (E = !0),
        d.default.entries(t).forEach((e) => {
            let [t, r] = e;
            n = y(t).updateClientMembers(Object.values(r)) || n;
        }),
        n
    );
}

function B(e) {
    let { guildId: t, members: n } = e;
    if (null == t || null == l.A.getGuild(t)) return !1;
    E = !0;
    let r = y(t),
        i = [];
    for (let e of n) null == r.getMember(e.userId) && i.push(e);
    return i.length > 0 && r.updateClientMembers(i);
}

function H(e) {
    let { members: t, guildId: n } = e;
    return t.length > 0 && y(n).updateServerMembers(t);
}

function Y(e) {
    let { guildId: t } = e;
    return y(t).initialize();
}

function W(e) {
    let { guildId: t } = e;
    return y(t).refreshNewMembersAndSearchResults();
}

function K(e) {
    let { guildId: t, pagination: n } = e,
        [r] = y(t).updatePaginationState(n);
    return r;
}

function z(e) {
    let { guildId: t, continuationToken: n } = e;
    return y(t).updatePaginationToken(n);
}

function q(e) {
    let { guildId: t, searchState: n } = e;
    return y(t).updateSearchState(n);
}

function X(e) {
    let { guildId: t, memberSupplementals: n } = e,
        r = (0, _.Ob)(t, n);
    return r && y(t).updateMembersByMemberIds(n.map((e) => e.userId)), r;
}

function Z(e) {
    var t, n, r, i, a, s;
    let o,
        l,
        { guildId: c, members: u, total_result_count: d } = e,
        f = y(c),
        { memberIds: g, memberSupplementals: E } = u.reduce(
            (e, t) => {
                let {
                        member: n,
                        source_invite_code: r,
                        join_source_type: i,
                        join_source_application_id: a,
                        join_source_channel_id: s,
                        inviter_id: o,
                    } = t,
                    l = n.user;
                return (
                    e.memberIds.push(l.id),
                    e.memberSupplementals.push({
                        userId: l.id,
                        sourceInviteCode: r,
                        joinSourceType: i,
                        joinSourceApplicationId: a,
                        joinSourceChannelId: s,
                        inviterId: o,
                    }),
                    e
                );
            },
            {
                memberIds: [],
                memberSupplementals: [],
            },
        ),
        b = (0, _.Ob)(c, E);
    (0, h.uY)(c, g);
    let O = f.updateSearchedMembersByMemberIds(g);
    u.length > 0 && ((o = u[0]), (l = u[u.length - 1]));
    let [A] = f.updatePaginationState(
        {
            totalResultsCount: d,
            elasticSearchCursor: {
                before: (0, p.vf)({
                    joinedAt: null == o || null == (r = o.member) ? void 0 : r.joined_at,
                    userId: null != (t = null == o || null == (i = o.member) ? void 0 : i.user.id) ? t : m.dJq,
                }),
                after: (0, p.vf)({
                    joinedAt: null == l || null == (a = l.member) ? void 0 : a.joined_at,
                    userId: null != (n = null == l || null == (s = l.member) ? void 0 : s.user.id) ? n : m.dJq,
                }),
            },
        },
        !1,
    );
    return b || O || A;
}
class Q extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(s.default, o.Ay, l.A, c.default);
    }
    isInitialized(e) {
        return y(e).isInitialized;
    }
    getMembersByGuildId(e, t) {
        return y(e).getMembersByIndex(t);
    }
    getMembersCountByGuildId(e, t) {
        return y(e).countMembersByIndex(t);
    }
    getEstimatedMemberSearchCountByGuildId(e) {
        let t = y(e),
            n = t.searchChunkSize,
            r = t.countMembersByIndex(t.getSearchIndex()),
            i = t.getTotalResultsCount();
        return null == i || i < n ? r : i;
    }
    getKnownMemberSearchCountByGuildId(e) {
        let t = y(e);
        return t.countMembersByIndex(t.getSearchIndex());
    }
    getCurrentMemberSearchResultsByGuildId(e) {
        let t = y(e);
        return t.getMembersByIndex(t.getSearchIndex());
    }
    getSearchStateByGuildId(e) {
        return y(e).getSearchState();
    }
    hasDefaultSearchStateByGuildId(e) {
        return y(e).hasDefaultSearchState();
    }
    getPagedMembersByGuildId(e) {
        return y(e).getPaginatedMembers();
    }
    getPaginationStateByGuildId(e) {
        return y(e).getPaginationState();
    }
    getElasticSearchPaginationByGuildId(e) {
        return y(e).getElasticSearchPagination();
    }
    getEnhancedMember(e, t) {
        return y(e).getMember(t);
    }
    getNewMemberTimestamp(e) {
        return y(e).getNewMemberTimestamp();
    }
    getLastRefreshTimestamp(e) {
        return y(e).lastRefreshTimestamp;
    }
    getLastCursorTimestamp(e) {
        return y(e).lastCursorTimestamp;
    }
}
g(Q, "displayName", "MemberSafetyStore");
let $ = new Q(a.h, {
    CONNECTION_OPEN: G,
    CONNECTION_OPEN_SUPPLEMENTAL: V,
    LOCAL_MESSAGES_LOADED: B,
    CACHE_LOADED: F,
    PASSIVE_UPDATE_V2: H,
    GUILD_CREATE: v,
    GUILD_DELETE: S,
    GUILD_MEMBERS_CHUNK_BATCH: C,
    GUILD_MEMBER_ADD: I,
    GUILD_MEMBER_UPDATE: I,
    GUILD_MEMBER_UPDATE_LOCAL: N,
    GUILD_MEMBER_REMOVE: R,
    GUILD_ROLE_UPDATE: w,
    GUILD_ROLE_DELETE: w,
    GUILD_MEMBER_PROFILE_UPDATE: M,
    GUILD_ROLE_MEMBER_REMOVE: P,
    GUILD_ROLE_MEMBER_ADD: P,
    THREAD_MEMBER_LIST_UPDATE: D,
    THREAD_MEMBERS_UPDATE: x,
    LOAD_ARCHIVED_THREADS_SUCCESS: L,
    LOAD_FORUM_POSTS: j,
    INITIALIZE_MEMBER_SAFETY_STORE: Y,
    MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: W,
    MEMBER_SAFETY_PAGINATION_UPDATE: K,
    MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: z,
    MEMBER_SAFETY_SEARCH_STATE_UPDATE: q,
    FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: X,
    MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: Z,
    MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH: T,
});
