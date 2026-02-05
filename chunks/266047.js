"use strict";
n.d(t, { A: () => Z }), n(321073);
var r = n(311907),
    i = n(73153),
    a = n(961350),
    s = n(696451),
    o = n(71393),
    l = n(287809),
    u = n(403362),
    c = n(661191),
    d = n(486005),
    _ = n(70738),
    f = n(166233),
    p = n(11541),
    h = n(652215);
let m = !1,
    g = {};
function E(e) {
    return null == g[e] && (g[e] = new d.e(e)), g[e];
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    E(e).reset(t);
}
function I() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    for (let t in g) A(t, e);
}
function T(e) {
    let { guild: t } = e,
        n = E(t.id);
    A(t.id, n.isInitialized);
}
function y(e) {
    let {
        guild: { id: t },
    } = e;
    A(t);
}
function S() {
    return !1;
}
function v(e) {
    let { guildId: t, userIds: n } = e;
    return E(t).updateMembersByMemberIds(n);
}
function C(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t) n = E(e.guildId).updateServerMembers(e.members) || n;
    return n;
}
function b(e) {
    let { guildId: t } = e,
        n = a.default.getId();
    return E(t).updateMembersByMemberIds([n]);
}
function N(e) {
    let { guildId: t, user: n } = e;
    return E(t).removeMember(n.id);
}
function R(e) {
    let t = !1,
        n = E(e.guildId);
    return "GUILD_ROLE_DELETE" === e.type && (t = n.removeRoleFromSearchState(e.roleId)), n.rebuildAllMembers() || t;
}
function O(e) {
    let { guildId: t, userId: n } = e;
    return E(t).updateMembersByMemberIds([n]);
}
function D(e) {
    let { guildId: t, members: n } = e;
    if (null == n || 0 === n.length) return !1;
    let r = E(t),
        i = n.reduce((e, t) => {
            if (null != t.member) {
                let n = t.member.user.id;
                e.push(n);
            }
            return e;
        }, []);
    return r.updateMembersByMemberIds(i);
}
function L(e) {
    let { guildId: t, addedMembers: n } = e;
    if (null == n || 0 === n.length) return !1;
    let r = E(t),
        i = n.reduce((e, t) => {
            let n = t.userId;
            return e.push(n), e;
        }, []);
    return r.updateMembersByMemberIds(i);
}
function w(e) {
    let { guildId: t, members: n } = e;
    if (null == n || 0 === n.length) return !1;
    let r = E(t),
        i = n.reduce((e, t) => {
            let n = t.userId;
            return e.push(n), e;
        }, []);
    return r.updateMembersByMemberIds(i);
}
function x(e) {
    let { guildId: t, threads: n } = e,
        r = Object.values(n);
    if (0 === r.length) return !1;
    let i = E(t),
        a = r.reduce((e, t) => {
            if (null != t.owner) {
                let n = t.owner.user.id;
                e.push(n);
            }
            return e;
        }, []);
    return i.updateMembersByMemberIds(a);
}
function P(e) {
    let { guildId: t, guildMember: n } = e;
    return E(t).updateMembersByMemberIds([n.user.id]);
}
function M(e) {
    let t = !1;
    return (
        e.guilds.forEach((e) => {
            let { id: n, members: r } = e;
            t = E(n).updateServerMembers(r) || t;
        }),
        t
    );
}
function k(e) {
    let t = !1;
    return (
        e.guilds.forEach((e) => {
            let { id: n, activity_instances: r } = e,
                i = E(n),
                a = [];
            r?.forEach((e) => {
                e.participants?.forEach((e) => {
                    (0, u.Vq)(e.member) && a.push(e.member);
                });
            }),
                (t = i.updateServerMembers(a) || t);
        }),
        t
    );
}
function U(e) {
    return m ? (m = !1) : I(!0), M(e);
}
function G(e) {
    return k(e);
}
function V(e) {
    let { guildMembers: t } = e,
        n = !1;
    return (
        (m = !0),
        c.default.entries(t).forEach((e) => {
            let [t, r] = e;
            n = E(t).updateClientMembers(Object.values(r)) || n;
        }),
        n
    );
}
function F(e) {
    let { guildId: t, members: n } = e;
    if (null == t || null == o.A.getGuild(t)) return !1;
    m = !0;
    let r = E(t),
        i = [];
    for (let e of n) null == r.getMember(e.userId) && i.push(e);
    return i.length > 0 && r.updateClientMembers(i);
}
function B(e) {
    let { members: t, guildId: n } = e;
    return t.length > 0 && E(n).updateServerMembers(t);
}
function j(e) {
    let { guildId: t } = e;
    return E(t).initialize();
}
function H(e) {
    let { guildId: t } = e;
    return E(t).refreshNewMembersAndSearchResults();
}
function Y(e) {
    let { guildId: t, pagination: n } = e,
        [r] = E(t).updatePaginationState(n);
    return r;
}
function W(e) {
    let { guildId: t, continuationToken: n } = e;
    return E(t).updatePaginationToken(n);
}
function K(e) {
    let { guildId: t, searchState: n } = e;
    return E(t).updateSearchState(n);
}
function z(e) {
    let { guildId: t, memberSupplementals: n } = e,
        r = (0, f.Ob)(t, n);
    return r && E(t).updateMembersByMemberIds(n.map((e) => e.userId)), r;
}
function $(e) {
    let t,
        n,
        { guildId: r, members: i, total_result_count: a } = e,
        s = E(r),
        { memberIds: o, memberSupplementals: l } = i.reduce(
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
            { memberIds: [], memberSupplementals: [] },
        ),
        u = (0, f.Ob)(r, l);
    (0, p.uY)(r, o);
    let c = s.updateSearchedMembersByMemberIds(o);
    i.length > 0 && ((t = i[0]), (n = i[i.length - 1]));
    let [d] = s.updatePaginationState(
        {
            totalResultsCount: a,
            elasticSearchCursor: {
                before: (0, _.vf)({ joinedAt: t?.member?.joined_at, userId: t?.member?.user.id ?? h.dJq }),
                after: (0, _.vf)({ joinedAt: n?.member?.joined_at, userId: n?.member?.user.id ?? h.dJq }),
            },
        },
        !1,
    );
    return u || c || d;
}
class q extends r.Ay.Store {
    static displayName = "MemberSafetyStore";
    initialize() {
        this.waitFor(a.default, s.Ay, o.A, l.default);
    }
    isInitialized(e) {
        return E(e).isInitialized;
    }
    getMembersByGuildId(e, t) {
        return E(e).getMembersByIndex(t);
    }
    getMembersCountByGuildId(e, t) {
        return E(e).countMembersByIndex(t);
    }
    getEstimatedMemberSearchCountByGuildId(e) {
        let t = E(e),
            n = t.searchChunkSize,
            r = t.countMembersByIndex(t.getSearchIndex()),
            i = t.getTotalResultsCount();
        return null == i || i < n ? r : i;
    }
    getKnownMemberSearchCountByGuildId(e) {
        let t = E(e);
        return t.countMembersByIndex(t.getSearchIndex());
    }
    getCurrentMemberSearchResultsByGuildId(e) {
        let t = E(e);
        return t.getMembersByIndex(t.getSearchIndex());
    }
    getSearchStateByGuildId(e) {
        return E(e).getSearchState();
    }
    hasDefaultSearchStateByGuildId(e) {
        return E(e).hasDefaultSearchState();
    }
    getPagedMembersByGuildId(e) {
        return E(e).getPaginatedMembers();
    }
    getPaginationStateByGuildId(e) {
        return E(e).getPaginationState();
    }
    getElasticSearchPaginationByGuildId(e) {
        return E(e).getElasticSearchPagination();
    }
    getEnhancedMember(e, t) {
        return E(e).getMember(t);
    }
    getNewMemberTimestamp(e) {
        return E(e).getNewMemberTimestamp();
    }
    getLastRefreshTimestamp(e) {
        return E(e).lastRefreshTimestamp;
    }
    getLastCursorTimestamp(e) {
        return E(e).lastCursorTimestamp;
    }
}
let Z = new q(i.h, {
    CONNECTION_OPEN: U,
    CONNECTION_OPEN_SUPPLEMENTAL: G,
    LOCAL_MESSAGES_LOADED: F,
    CACHE_LOADED: V,
    PASSIVE_UPDATE_V2: B,
    GUILD_CREATE: T,
    GUILD_DELETE: y,
    GUILD_MEMBERS_CHUNK_BATCH: C,
    GUILD_MEMBER_ADD: S,
    GUILD_MEMBER_UPDATE: S,
    GUILD_MEMBER_UPDATE_LOCAL: b,
    GUILD_MEMBER_REMOVE: N,
    GUILD_ROLE_UPDATE: R,
    GUILD_ROLE_DELETE: R,
    GUILD_MEMBER_PROFILE_UPDATE: P,
    GUILD_ROLE_MEMBER_REMOVE: O,
    GUILD_ROLE_MEMBER_ADD: O,
    THREAD_MEMBER_LIST_UPDATE: D,
    THREAD_MEMBERS_UPDATE: L,
    LOAD_ARCHIVED_THREADS_SUCCESS: w,
    LOAD_FORUM_POSTS: x,
    INITIALIZE_MEMBER_SAFETY_STORE: j,
    MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: H,
    MEMBER_SAFETY_PAGINATION_UPDATE: Y,
    MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: W,
    MEMBER_SAFETY_SEARCH_STATE_UPDATE: K,
    FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: z,
    MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: $,
    MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH: v,
});
