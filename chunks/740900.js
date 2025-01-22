r.d(n, {
    R_: function () {
        return i;
    },
    cm: function () {
        return I;
    }
});
var i,
    a = r(653041);
var o = r(47120);
var s = r(498607),
    l = r.n(s),
    u = r(759174),
    c = r(493892),
    d = r(594174),
    f = r(815790),
    p = r(588215),
    h = r(44715),
    _ = r(331551);
function m(e, n, r) {
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
let g = Date.now();
function E(e) {
    let n = [e.isCurrentGuildMemberByTimestamp ? 'CURRENT_GUILD_MEMBER' : 'NEW_GUILD_MEMBER'];
    return e.isIncludedInSearchResults && n.push('INCLUDED_IN_SEARCH_RESULTS'), n;
}
function v(e) {
    return e.sort;
}
function y() {
    return new u.h(E, v);
}
function b(e) {
    return null != e && new Date(e).getTime() >= g - p.rL;
}
!(function (e) {
    (e.NEW_GUILD_MEMBER = 'NEW_GUILD_MEMBER'), (e.CURRENT_GUILD_MEMBER = 'CURRENT_GUILD_MEMBER'), (e.INCLUDED_IN_SEARCH_RESULTS = 'INCLUDED_IN_SEARCH_RESULTS');
})(i || (i = {}));
class I {
    reset() {
        this._membersMap.clear(), (this._membersMap = y()), this.resetNewMemberTimestamp();
    }
    resetNewMemberTimestamp() {
        this.newMemberTimestamp = Date.now();
    }
    enhanceNewMember(e, n) {
        var r;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            a = (0, f.Dw)(e.joinedAt),
            { hasUnusualDmActivity: o, hasUnusualAccountActivity: s, sourceInviteCode: l, joinSourceType: u, inviterId: c, integrationType: h } = this._computeMemberSupplementals(e.userId, e.unusualDMActivityUntil),
            m = d.default.getUser(e.userId);
        return {
            hasUnusualDmActivity: o,
            hasUnusualAccountActivity: s,
            sourceInviteCode: l,
            joinSourceType: u,
            inviterId: c,
            integrationType: h,
            ...e,
            isCurrentGuildMemberByTimestamp: a <= this.newMemberTimestamp,
            isIncludedInSearchResults: !1,
            user: m,
            sort: (0, _.b)(e, null !== (r = n.selectedSort) && void 0 !== r ? r : p.d$.ORDER_BY_UNSPECIFIED),
            joinedAtTimestamp: a,
            ...i
        };
    }
    _computeMemberSupplementals(e, n) {
        var r;
        let { sourceInviteCode: i, joinSourceType: a, inviterId: o, integrationType: s } = null !== (r = (0, h.W2)(this.guildId)[e]) && void 0 !== r ? r : {};
        return {
            sourceInviteCode: null != i ? i : null,
            joinSourceType: null != a ? a : null,
            inviterId: null != o ? o : null,
            integrationType: null != s ? s : null,
            hasUnusualDmActivity: b(n),
            hasUnusualAccountActivity: (0, c.He)(e)
        };
    }
    createMember(e) {
        return this._membersMap.set(e.userId, e);
    }
    updateMember(e, n) {
        var r;
        if (null == n) return this._membersMap.set(e.userId, e);
        let i = { ...e },
            a = { ...n },
            o = !1,
            { sourceInviteCode: s, hasUnusualDmActivity: u, hasUnusualAccountActivity: c, joinSourceType: d, inviterId: f, integrationType: p } = this._computeMemberSupplementals(i.userId, null !== (r = a.unusualDMActivityUntil) && void 0 !== r ? r : i.unusualDMActivityUntil);
        for (let e in (i.sourceInviteCode !== s && (a.sourceInviteCode = s), i.hasUnusualDmActivity !== u && (a.hasUnusualDmActivity = u), i.hasUnusualAccountActivity !== c && (a.hasUnusualAccountActivity = c), i.joinSourceType !== d && (a.joinSourceType = d), i.inviterId !== f && (a.inviterId = f), i.integrationType !== p && (a.integrationType = p), a)) {
            let n = e,
                r = a[n],
                s = i[n];
            !l()(r, s) && ((i[n] = r), (o = !0));
        }
        return this._membersMap.set(i.userId, i) || o;
    }
    removeMember(e) {
        return this._membersMap.delete(e);
    }
    getMemberByUserId(e) {
        return this._membersMap.get(e);
    }
    values(e) {
        return this._membersMap.values(e, !0);
    }
    count(e) {
        return this._membersMap.size(e);
    }
    get version() {
        return this._membersMap.version;
    }
    constructor(e) {
        m(this, 'guildId', void 0), m(this, '_membersMap', void 0), m(this, 'newMemberTimestamp', Date.now()), (this.guildId = e), (this._membersMap = y());
    }
}
