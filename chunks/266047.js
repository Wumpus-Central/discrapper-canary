"use strict";
n.d(t, { A: () => N }), n(321073);
var r = n(311907),
    i = n(73153),
    s = n(961350),
    a = n(696451),
    o = n(71393),
    l = n(287809),
    u = n(403362),
    d = n(661191),
    c = n(486005),
    _ = n(70738),
    f = n(166233),
    E = n(11541),
    h = n(652215);
let p = !1,
    m = {};
function g(e) {
    return null == m[e] && (m[e] = new c.e(e)), m[e];
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    g(e).reset(t);
}
function I() {
    return !1;
}
function T(e) {
    let t = !1,
        n = g(e.guildId);
    return "GUILD_ROLE_DELETE" === e.type && (t = n.removeRoleFromSearchState(e.roleId)), n.rebuildAllMembers() || t;
}
function S(e) {
    let { guildId: t, userId: n } = e;
    return g(t).updateMembersByMemberIds([n]);
}
class y extends r.Ay.Store {
    static displayName = "MemberSafetyStore";
    initialize() {
        this.waitFor(s.default, a.Ay, o.A, l.default);
    }
    isInitialized(e) {
        return g(e).isInitialized;
    }
    getMembersByGuildId(e, t) {
        return g(e).getMembersByIndex(t);
    }
    getMembersCountByGuildId(e, t) {
        return g(e).countMembersByIndex(t);
    }
    getEstimatedMemberSearchCountByGuildId(e) {
        let t = g(e),
            n = t.searchChunkSize,
            r = t.countMembersByIndex(t.getSearchIndex()),
            i = t.getTotalResultsCount();
        return null == i || i < n ? r : i;
    }
    getKnownMemberSearchCountByGuildId(e) {
        let t = g(e);
        return t.countMembersByIndex(t.getSearchIndex());
    }
    getCurrentMemberSearchResultsByGuildId(e) {
        let t = g(e);
        return t.getMembersByIndex(t.getSearchIndex());
    }
    getSearchStateByGuildId(e) {
        return g(e).getSearchState();
    }
    hasDefaultSearchStateByGuildId(e) {
        return g(e).hasDefaultSearchState();
    }
    getPagedMembersByGuildId(e) {
        return g(e).getPaginatedMembers();
    }
    getPaginationStateByGuildId(e) {
        return g(e).getPaginationState();
    }
    getElasticSearchPaginationByGuildId(e) {
        return g(e).getElasticSearchPagination();
    }
    getEnhancedMember(e, t) {
        return g(e).getMember(t);
    }
    getNewMemberTimestamp(e) {
        return g(e).getNewMemberTimestamp();
    }
    getLastRefreshTimestamp(e) {
        return g(e).lastRefreshTimestamp;
    }
    getLastCursorTimestamp(e) {
        return g(e).lastCursorTimestamp;
    }
}
let N = new y(i.h, {
    CONNECTION_OPEN: function (e) {
        let t;
        return (
            p
                ? (p = !1)
                : (function () {
                      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      for (let t in m) A(t, e);
                  })(!0),
            (t = !1),
            e.guilds.forEach((e) => {
                let { id: n, members: r } = e;
                t = g(n).updateServerMembers(r) || t;
            }),
            t
        );
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let t;
        return (
            (t = !1),
            e.guilds.forEach((e) => {
                let { id: n, activity_instances: r } = e,
                    i = g(n),
                    s = [];
                r?.forEach((e) => {
                    e.participants?.forEach((e) => {
                        (0, u.Vq)(e.member) && s.push(e.member);
                    });
                }),
                    (t = i.updateServerMembers(s) || t);
            }),
            t
        );
    },
    LOCAL_MESSAGES_LOADED: function (e) {
        let { guildId: t, members: n } = e;
        if (null == t || null == o.A.getGuild(t)) return !1;
        p = !0;
        let r = g(t),
            i = [];
        for (let e of n) null == r.getMember(e.userId) && i.push(e);
        return i.length > 0 && r.updateClientMembers(i);
    },
    CACHE_LOADED: function (e) {
        let { guildMembers: t } = e,
            n = !1;
        return (
            (p = !0),
            d.default.entries(t).forEach((e) => {
                let [t, r] = e;
                n = g(t).updateClientMembers(Object.values(r)) || n;
            }),
            n
        );
    },
    PASSIVE_UPDATE_V2: function (e) {
        let { members: t, guildId: n } = e;
        return t.length > 0 && g(n).updateServerMembers(t);
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e,
            n = g(t.id);
        A(t.id, n.isInitialized);
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t },
        } = e;
        A(t);
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let { chunks: t } = e,
            n = !1;
        for (let e of t) n = g(e.guildId).updateServerMembers(e.members) || n;
        return n;
    },
    GUILD_MEMBER_ADD: I,
    GUILD_MEMBER_UPDATE: I,
    GUILD_MEMBER_UPDATE_LOCAL: function (e) {
        let { guildId: t } = e,
            n = s.default.getId();
        return g(t).updateMembersByMemberIds([n]);
    },
    GUILD_MEMBER_REMOVE: function (e) {
        let { guildId: t, user: n } = e;
        return g(t).removeMember(n.id);
    },
    GUILD_ROLE_UPDATE: T,
    GUILD_ROLE_DELETE: T,
    GUILD_MEMBER_PROFILE_UPDATE: function (e) {
        let { guildId: t, guildMember: n } = e;
        return g(t).updateMembersByMemberIds([n.user.id]);
    },
    GUILD_ROLE_MEMBER_REMOVE: S,
    GUILD_ROLE_MEMBER_ADD: S,
    THREAD_MEMBER_LIST_UPDATE: function (e) {
        let { guildId: t, members: n } = e;
        if (null == n || 0 === n.length) return !1;
        let r = g(t),
            i = n.reduce((e, t) => {
                if (null != t.member) {
                    let n = t.member.user.id;
                    e.push(n);
                }
                return e;
            }, []);
        return r.updateMembersByMemberIds(i);
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        let { guildId: t, addedMembers: n } = e;
        if (null == n || 0 === n.length) return !1;
        let r = g(t),
            i = n.reduce((e, t) => {
                let n = t.userId;
                return e.push(n), e;
            }, []);
        return r.updateMembersByMemberIds(i);
    },
    LOAD_ARCHIVED_THREADS_SUCCESS: function (e) {
        let { guildId: t, members: n } = e;
        if (null == n || 0 === n.length) return !1;
        let r = g(t),
            i = n.reduce((e, t) => {
                let n = t.userId;
                return e.push(n), e;
            }, []);
        return r.updateMembersByMemberIds(i);
    },
    LOAD_FORUM_POSTS: function (e) {
        let { guildId: t, threads: n } = e,
            r = Object.values(n);
        if (0 === r.length) return !1;
        let i = g(t),
            s = r.reduce((e, t) => {
                if (null != t.owner) {
                    let n = t.owner.user.id;
                    e.push(n);
                }
                return e;
            }, []);
        return i.updateMembersByMemberIds(s);
    },
    INITIALIZE_MEMBER_SAFETY_STORE: function (e) {
        let { guildId: t } = e;
        return g(t).initialize();
    },
    MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: function (e) {
        let { guildId: t } = e;
        return g(t).refreshNewMembersAndSearchResults();
    },
    MEMBER_SAFETY_PAGINATION_UPDATE: function (e) {
        let { guildId: t, pagination: n } = e,
            [r] = g(t).updatePaginationState(n);
        return r;
    },
    MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: function (e) {
        let { guildId: t, continuationToken: n } = e;
        return g(t).updatePaginationToken(n);
    },
    MEMBER_SAFETY_SEARCH_STATE_UPDATE: function (e) {
        let { guildId: t, searchState: n } = e;
        return g(t).updateSearchState(n);
    },
    FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: function (e) {
        let { guildId: t, memberSupplementals: n } = e,
            r = (0, f.Ob)(t, n);
        return r && g(t).updateMembersByMemberIds(n.map((e) => e.userId)), r;
    },
    MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function (e) {
        let t,
            n,
            { guildId: r, members: i, total_result_count: s } = e,
            a = g(r),
            { memberIds: o, memberSupplementals: l } = i.reduce(
                (e, t) => {
                    let {
                            member: n,
                            source_invite_code: r,
                            join_source_type: i,
                            join_source_application_id: s,
                            join_source_channel_id: a,
                            inviter_id: o,
                        } = t,
                        l = n.user;
                    return (
                        e.memberIds.push(l.id),
                        e.memberSupplementals.push({
                            userId: l.id,
                            sourceInviteCode: r,
                            joinSourceType: i,
                            joinSourceApplicationId: s,
                            joinSourceChannelId: a,
                            inviterId: o,
                        }),
                        e
                    );
                },
                { memberIds: [], memberSupplementals: [] },
            ),
            u = (0, f.Ob)(r, l);
        (0, E.uY)(r, o);
        let d = a.updateSearchedMembersByMemberIds(o);
        i.length > 0 && ((t = i[0]), (n = i[i.length - 1]));
        let [c] = a.updatePaginationState(
            {
                totalResultsCount: s,
                elasticSearchCursor: {
                    before: (0, _.vf)({ joinedAt: t?.member?.joined_at, userId: t?.member?.user.id ?? h.dJq }),
                    after: (0, _.vf)({ joinedAt: n?.member?.joined_at, userId: n?.member?.user.id ?? h.dJq }),
                },
            },
            !1,
        );
        return u || d || c;
    },
    MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH: function (e) {
        let { guildId: t, userIds: n } = e;
        return g(t).updateMembersByMemberIds(n);
    },
});
