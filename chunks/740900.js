n.d(t, {
    R_: () => p,
    cm: () => v
}),
    n(653041),
    n(47120);
var i = n(498607),
    r = n.n(i),
    a = n(759174),
    s = n(493892),
    o = n(594174),
    l = n(815790),
    u = n(588215),
    c = n(44715),
    d = n(331551);
function f(e, t, n) {
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
let _ = Date.now();
var p = (function (e) {
    return (e.NEW_GUILD_MEMBER = 'NEW_GUILD_MEMBER'), (e.CURRENT_GUILD_MEMBER = 'CURRENT_GUILD_MEMBER'), (e.INCLUDED_IN_SEARCH_RESULTS = 'INCLUDED_IN_SEARCH_RESULTS'), e;
})({});
function h(e) {
    let t = [e.isCurrentGuildMemberByTimestamp ? 'CURRENT_GUILD_MEMBER' : 'NEW_GUILD_MEMBER'];
    return e.isIncludedInSearchResults && t.push('INCLUDED_IN_SEARCH_RESULTS'), t;
}
function m(e) {
    return e.sort;
}
function g() {
    return new a.h(h, m);
}
function E(e) {
    return null != e && new Date(e).getTime() >= _ - u.rL;
}
class v {
    reset() {
        this._membersMap.clear(), (this._membersMap = g()), this.resetNewMemberTimestamp();
    }
    resetNewMemberTimestamp() {
        this.newMemberTimestamp = Date.now();
    }
    enhanceNewMember(e, t) {
        var n;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = (0, l.Dw)(e.joinedAt),
            { hasUnusualDmActivity: a, hasUnusualAccountActivity: s, sourceInviteCode: c, joinSourceType: f, inviterId: _, integrationType: p } = this._computeMemberSupplementals(e.userId, e.unusualDMActivityUntil),
            h = o.default.getUser(e.userId);
        return {
            hasUnusualDmActivity: a,
            hasUnusualAccountActivity: s,
            sourceInviteCode: c,
            joinSourceType: f,
            inviterId: _,
            integrationType: p,
            ...e,
            isCurrentGuildMemberByTimestamp: r <= this.newMemberTimestamp,
            isIncludedInSearchResults: !1,
            user: h,
            sort: (0, d.b)(e, null !== (n = t.selectedSort) && void 0 !== n ? n : u.d$.ORDER_BY_UNSPECIFIED),
            joinedAtTimestamp: r,
            ...i
        };
    }
    _computeMemberSupplementals(e, t) {
        var n;
        let { sourceInviteCode: i, joinSourceType: r, inviterId: a, integrationType: o } = null !== (n = (0, c.W2)(this.guildId)[e]) && void 0 !== n ? n : {};
        return {
            sourceInviteCode: null != i ? i : null,
            joinSourceType: null != r ? r : null,
            inviterId: null != a ? a : null,
            integrationType: null != o ? o : null,
            hasUnusualDmActivity: E(t),
            hasUnusualAccountActivity: (0, s.He)(e)
        };
    }
    createMember(e) {
        return this._membersMap.set(e.userId, e);
    }
    updateMember(e, t) {
        var n;
        if (null == t) return this._membersMap.set(e.userId, e);
        let i = { ...e },
            a = { ...t },
            s = !1,
            { sourceInviteCode: o, hasUnusualDmActivity: l, hasUnusualAccountActivity: u, joinSourceType: c, inviterId: d, integrationType: f } = this._computeMemberSupplementals(i.userId, null !== (n = a.unusualDMActivityUntil) && void 0 !== n ? n : i.unusualDMActivityUntil);
        for (let e in (i.sourceInviteCode !== o && (a.sourceInviteCode = o), i.hasUnusualDmActivity !== l && (a.hasUnusualDmActivity = l), i.hasUnusualAccountActivity !== u && (a.hasUnusualAccountActivity = u), i.joinSourceType !== c && (a.joinSourceType = c), i.inviterId !== d && (a.inviterId = d), i.integrationType !== f && (a.integrationType = f), a)) {
            let t = e,
                n = a[t],
                o = i[t];
            r()(n, o) || ((i[t] = n), (s = !0));
        }
        return this._membersMap.set(i.userId, i) || s;
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
        f(this, 'guildId', void 0), f(this, '_membersMap', void 0), f(this, 'newMemberTimestamp', Date.now()), (this.guildId = e), (this._membersMap = g());
    }
}
