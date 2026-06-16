"use strict";
n.d(t, { MO: () => s, NB: () => a, n4: () => l, qi: () => u, vg: () => o }), n(321073);
var i = n(696451),
    r = n(70738);
let s = [12, 25, 50, 100],
    a = 7;
function o() {
    return {
        pageSize: s[0],
        currentPage: 1,
        continuationToken: null,
        sort: r.mF.ORDER_BY_UNSPECIFIED,
        elasticSearchCursor: null,
    };
}
function l(e) {
    return Math.max(5 * e.pageSize, 250);
}
class u {
    guildId;
    _sortedMemberIds;
    _paginationState;
    _version;
    _cachedPaginationChunks;
    constructor(e, t) {
        (this.guildId = e), (this._paginationState = o()), (this._version = 0);
        const [n, i] = this._initPaginationFromRawMembers(t);
        (this._sortedMemberIds = n), (this._cachedPaginationChunks = i), (this._version += 1);
    }
    reset() {
        (this._paginationState = o()),
            (this._sortedMemberIds = []),
            (this._cachedPaginationChunks = {}),
            (this._version += 1);
    }
    isMemberOnCurrentPage(e) {
        return (this._cachedPaginationChunks[this._paginationState.currentPage] ?? []).includes(e);
    }
    isMemberInAnyChunk(e) {
        return this._sortedMemberIds.includes(e);
    }
    _initPaginationFromRawMembers(e) {
        let t = [],
            n = e.reduce(
                (e, n, i) => ((e = this._reduceMemberIdsToPaginationChunks(e, n.userId, i)), t.push(n.userId), e),
                {},
            );
        return [t, n];
    }
    _reduceMemberIdsToPaginationChunks = (e, t, n) => {
        let i = Math.floor(n / this._paginationState.pageSize) + 1;
        return null == e[i] && (e[i] = []), e[i].push(t), e;
    };
    _buildPaginationFromMemberIds(e) {
        return e.reduce(this._reduceMemberIdsToPaginationChunks, {});
    }
    _rebuildPaginationChunksFromStoredMembers() {
        return (
            (this._cachedPaginationChunks = this._buildPaginationFromMemberIds(this._sortedMemberIds)),
            (this._version += 1),
            !0
        );
    }
    getPaginationState() {
        return this._paginationState;
    }
    updatePaginationToken(e) {
        return (
            e !== this._paginationState.continuationToken &&
            ((this._paginationState = { ...this._paginationState, continuationToken: e }), !0)
        );
    }
    _calculateNewPageFromPageSizeChange(e, t) {
        let { currentPage: n, pageSize: i } = this._paginationState;
        return e * i <= this._sortedMemberIds.length ? Math.max(Math.ceil((i / e) * (t ?? n)), 1) : 1;
    }
    updatePaginationState(e) {
        let t = !1;
        return (
            null != e.pageSize &&
                e.pageSize !== this._paginationState.pageSize &&
                ((t = !0),
                (e.currentPage = this._calculateNewPageFromPageSizeChange(
                    e.pageSize ?? this._paginationState.pageSize,
                    e.currentPage,
                ))),
            (this._paginationState = { ...this._paginationState, ...e }),
            t && this._rebuildPaginationChunksFromStoredMembers(),
            [!0, t]
        );
    }
    updateSortedMembers(e) {
        let [t, n] = this._initPaginationFromRawMembers(e);
        return (this._sortedMemberIds = t), (this._cachedPaginationChunks = n), (this._version += 1), !0;
    }
    updateSortedMembersByUserIds(e) {
        return (this._sortedMemberIds = e), this._rebuildPaginationChunksFromStoredMembers(), !0;
    }
    _findMember(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
            n = e;
        n < this._sortedMemberIds.length && (n = this._sortedMemberIds.length - 1), n < 0 && (n = 0);
        let r = this._sortedMemberIds[e],
            s = i.Ay.getMember(this.guildId, r);
        for (; null == s && !((e += t) < 0) && !(e >= this._sortedMemberIds.length); )
            (r = this._sortedMemberIds[e]), (s = i.Ay.getMember(this.guildId, r)), s?.joinedAt == null && (s = null);
        return s;
    }
    getElasticSearchPagination() {
        return this.getPaginationState().elasticSearchCursor;
    }
    get paginatedMembers() {
        return this._cachedPaginationChunks;
    }
    get version() {
        return this._version;
    }
}
