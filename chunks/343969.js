"use strict";
n.d(t, { Ay: () => Y, Ms: () => B, Wl: () => j });
var r = n(812729),
    i = n.n(r),
    a = n(735438),
    s = n(353640),
    o = n(121894),
    l = n(499979),
    u = n(439372),
    c = n(626584),
    d = n(403362),
    _ = n(661191),
    f = n(233693),
    p = n(859126),
    h = n(70738),
    m = n(902822),
    g = n(266047);
let E = -1,
    A = new c.A("MemberSafetySearchManager");
function I(e) {
    return `guild_${e}`;
}
function T(e) {
    return {
        requestState: e,
        abortController: null,
        lastUpdated: Date.now(),
        query: null,
        cursor: null,
        previousPagination: null,
        sort: null,
        elasticSearchCursor: null,
    };
}
let y = (0, s.v)((e) => ({}));
function S(e, t) {
    let n = y.getState()[e];
    return (
        null == n && (n = T(1)),
        (n = { ...n, ...t }),
        (0, o.r)(() => {
            y.setState((t) => ({ ...t, [e]: n }));
        }),
        n
    );
}
function v(e) {
    return y.getState()[e];
}
function C(e) {
    let t = v(e);
    return null == t && S(e, (t = T(1))), t;
}
function b(e) {
    (0, o.r)(() => {
        y.setState((t) => {
            let n = { ...t };
            return delete n[e], n;
        });
    });
}
function N(e, t, n, r, i) {
    let a = v(e);
    return (
        a?.requestState === 2 && a.abortController?.abort(),
        S(e, {
            requestState: 2,
            abortController: new AbortController(),
            lastUpdated: Date.now(),
            query: t,
            cursor: n,
            previousPagination: r,
            sort: i,
        })
    );
}
function R(e) {
    null != v(e) && S(e, { requestState: 0, abortController: null, lastUpdated: Date.now() });
}
async function O(e) {
    await (0, l.yy)(200), null != v(e) && S(e, { requestState: 3, abortController: null, lastUpdated: Date.now() });
}
function D(e) {
    S(e, { requestState: 4, abortController: null, lastUpdated: Date.now() });
}
function L(e) {
    b(I(e));
}
function w(e) {
    return null != e && e.length > 1;
}
function x(e) {
    let t = {},
        n = {},
        { query: r } = e;
    if (w(r)) {
        let [e, n] = (0, p.H)(r);
        e.length > 0 && (t.usernames = { or_query: e }), n.length > 0 && (t.user_id = { or_query: n });
    }
    let {
            requireUnusualDmActivity: i,
            requireCommunicationDisabled: a,
            requireUnusualAccountActivity: s,
            requireUsernameQuarantined: o,
        } = e,
        l = {};
    i && (l.unusual_dm_activity_until = { range: { gte: Date.now() - h.tX } }),
        a && (l.communication_disabled_until = { range: { gte: Date.now() } }),
        s && (l.unusual_account_activity = s),
        o && (l.automod_quarantined_username = o),
        Object.keys(l).length > 0 && (n.safety_signals = l);
    let { selectedRoleIds: u } = e;
    u.size > 0 && (t.role_ids = { and_query: Array.from(u) });
    let { selectedJoinDateOption: c } = e;
    null != c.afterDate && (t.guild_joined_at = { range: { gte: c.afterDate, lte: c.beforeDate ?? void 0 } });
    let { selectedAccountAgeOption: d } = e;
    if (null != d.afterDate) {
        let e = t.user_id;
        t.user_id = {
            ...e,
            range: {
                gte: _.default.fromTimestamp(d.afterDate),
                lte: null != d.beforeDate ? _.default.fromTimestamp(d.beforeDate) : void 0,
            },
        };
    }
    let { selectedSourceInviteCode: f } = e;
    null != f && (t.source_invite_code = { or_query: [f] });
    let { selectedJoinSourceType: m } = e;
    null != m && (t.join_source_type = { or_query: [m] });
    let g = { or_query: n, and_query: t },
        { selectedSort: E } = e;
    return null != E && (g.sort = E), g;
}
function P(e, t) {
    return null == t ? e : { ...e, ...t };
}
function M(e, t) {
    return Math.floor(Math.max(e - 1, 0) / t);
}
function k(e) {
    let t = (0, f.n4)(e),
        n = e.pageSize * (e.currentPage - 1),
        r = e.pageSize * e.currentPage,
        i = e.pageSize * (e.currentPage + 1);
    return { previousPageChunkNumber: M(n, t), currentPageChunkNumber: M(r, t), nextPageChunkNumber: M(i, t) };
}
function U(e, t) {
    let { currentPageChunkNumber: n, previousPageChunkNumber: r, nextPageChunkNumber: i } = k(t),
        { previousPagination: a } = C(I(e)),
        s = t.currentPage,
        o = a?.currentPage ?? 0,
        l = g.A.getElasticSearchPaginationByGuildId(e);
    switch (!0) {
        case null == l:
        case n === i && 0 === n:
            return 0;
        case n === i && n === r:
            return 1;
        case o < s && n < i:
            return 2;
        case o > s && n >= r:
            if (0 < n) return 3;
            return 0;
        default:
            return 1;
    }
}
function G(e, t, n) {
    let r = U(e, n),
        i = g.A.getElasticSearchPaginationByGuildId(e),
        a = (0, f.n4)(n);
    switch (r) {
        case 0:
            return [null, { limit: a }];
        case 1:
            return [t.cursor ?? null, { limit: a, after: t.cursor ?? void 0 }];
        case 2:
            return [i?.after ?? null, { limit: a, after: i?.after ?? void 0 }];
        case 3:
            return [i?.before ?? null, { limit: a, before: i?.before ?? void 0 }];
        default:
            (0, d.xb)(r);
    }
}
function V(e, t) {
    let n = C(e);
    return i()(n.query, t);
}
async function F(e) {
    let t = g.A.getSearchStateByGuildId(e),
        n = g.A.getPaginationStateByGuildId(e),
        r = I(e),
        i = C(r),
        [s, o] = G(e, i, n),
        l = P(x(t), o),
        u = t.selectedSort ?? h.mF.ORDER_BY_GUILD_JOINED_AT_DESC;
    if (V(r, l) && (0, a.isEqual)(s, i.cursor)) return;
    let c = N(r, l, s, n, u);
    try {
        if ((A.info("Making member search request", { query: c.query, guildId: e }), null == c.query))
            throw Error("Query is null");
        await (0, m.N)(e, c.query, { signal: c.abortController?.signal ?? void 0 });
    } catch (e) {
        if (E === e.code) return;
        R(r);
        return;
    }
    await O(r);
}
function B(e) {
    return y((t) => {
        let n = I(e);
        return t[n]?.requestState === 2;
    });
}
function j(e) {
    return y((t) => {
        let n = I(e);
        return t[n]?.requestState === 4;
    });
}
class H extends u.A {
    actions = {
        INITIALIZE_MEMBER_SAFETY_STORE: (e) => this.handleInitialize(e),
        GUILD_DELETE: (e) => this.handleGuildDelete(e),
        MEMBER_SAFETY_SEARCH_STATE_UPDATE: (e) => this.handleSearchStateUpdate(e),
        MEMBER_SAFETY_PAGINATION_UPDATE: (e) => this.handlePaginationUpdate(e),
        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: (e) => this.handleGuildMemberSearchSuccess(e),
        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING: (e) => this.handleGuildMemberSearchStillIndexing(e),
        MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: (e) => this.handleNewMemberTimestampRefresh(e),
    };
    handleInitialize(e) {
        let { guildId: t } = e;
        return L(t), F(t);
    }
    handleGuildDelete(e) {
        let { guild: t } = e;
        return L(t.id);
    }
    handleSearchStateUpdate(e) {
        let { guildId: t } = e;
        return F(t);
    }
    handlePaginationUpdate(e) {
        let { guildId: t } = e;
        return F(t);
    }
    handleGuildMemberSearchSuccess(e) {
        let { guildId: t } = e;
        return O(I(t));
    }
    handleGuildMemberSearchStillIndexing(e) {
        let { guildId: t } = e;
        return D(I(t));
    }
    handleNewMemberTimestampRefresh(e) {
        let { guildId: t } = e;
        return F(t);
    }
}
let Y = new H();
