"use strict";
n.d(t, { Tu: () => f, z8: () => E }), n(321073);
var r = n(33851),
    i = n.n(r),
    a = n(713402),
    s = n(694318),
    o = n(287809),
    l = n(157347),
    u = n(70738),
    c = n(166233),
    d = n(230959);
let _ = Date.now();
var f = (function (e) {
    return (
        (e.NEW_GUILD_MEMBER = "NEW_GUILD_MEMBER"),
        (e.CURRENT_GUILD_MEMBER = "CURRENT_GUILD_MEMBER"),
        (e.INCLUDED_IN_SEARCH_RESULTS = "INCLUDED_IN_SEARCH_RESULTS"),
        e
    );
})({});
function p(e) {
    let t = [e.isCurrentGuildMemberByTimestamp ? "CURRENT_GUILD_MEMBER" : "NEW_GUILD_MEMBER"];
    return e.isIncludedInSearchResults && t.push("INCLUDED_IN_SEARCH_RESULTS"), t;
}
function h(e) {
    return e.sort;
}
function m() {
    return new a.J(p, h);
}
function g(e) {
    return null != e && new Date(e).getTime() >= _ - u.tX;
}
class E {
    guildId;
    _membersMap;
    newMemberTimestamp = Date.now();
    constructor(e) {
        (this.guildId = e), (this._membersMap = m());
    }
    reset() {
        this._membersMap.clear(), (this._membersMap = m()), this.resetNewMemberTimestamp();
    }
    resetNewMemberTimestamp() {
        this.newMemberTimestamp = Date.now();
    }
    enhanceNewMember(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = (0, l.vn)(e.joinedAt),
            {
                hasUnusualDmActivity: i,
                hasUnusualAccountActivity: a,
                sourceInviteCode: s,
                joinSourceType: c,
                inviterId: _,
                integrationType: f,
                joinSourceApplicationId: p,
                joinSourceChannelId: h,
            } = this._computeMemberSupplementals(e.userId, e.unusualDMActivityUntil),
            m = o.default.getUser(e.userId);
        return {
            hasUnusualDmActivity: i,
            hasUnusualAccountActivity: a,
            sourceInviteCode: s,
            joinSourceType: c,
            inviterId: _,
            integrationType: f,
            joinSourceApplicationId: p,
            joinSourceChannelId: h,
            ...e,
            isCurrentGuildMemberByTimestamp: r <= this.newMemberTimestamp,
            isIncludedInSearchResults: !1,
            user: m,
            sort: (0, d.R)(e, t.selectedSort ?? u.mF.ORDER_BY_UNSPECIFIED),
            joinedAtTimestamp: r,
            ...n,
        };
    }
    _computeMemberSupplementals(e, t) {
        let {
            sourceInviteCode: n,
            joinSourceType: r,
            inviterId: i,
            integrationType: a,
            joinSourceApplicationId: o,
            joinSourceChannelId: l,
        } = (0, c.Oe)(this.guildId)[e] ?? {};
        return {
            sourceInviteCode: n ?? null,
            joinSourceType: r ?? null,
            inviterId: i ?? null,
            integrationType: a ?? null,
            joinSourceApplicationId: o ?? null,
            joinSourceChannelId: l ?? null,
            hasUnusualDmActivity: g(t),
            hasUnusualAccountActivity: (0, s.cx)(e),
        };
    }
    createMember(e) {
        return this._membersMap.set(e.userId, e);
    }
    updateMember(e, t) {
        if (null == t) return this._membersMap.set(e.userId, e);
        let n = { ...e },
            r = { ...t },
            a = !1,
            {
                sourceInviteCode: s,
                hasUnusualDmActivity: o,
                hasUnusualAccountActivity: l,
                joinSourceType: u,
                inviterId: c,
                integrationType: d,
                joinSourceApplicationId: _,
                joinSourceChannelId: f,
            } = this._computeMemberSupplementals(n.userId, r.unusualDMActivityUntil ?? n.unusualDMActivityUntil);
        for (let e in (n.sourceInviteCode !== s && (r.sourceInviteCode = s),
        n.hasUnusualDmActivity !== o && (r.hasUnusualDmActivity = o),
        n.hasUnusualAccountActivity !== l && (r.hasUnusualAccountActivity = l),
        n.joinSourceType !== u && (r.joinSourceType = u),
        n.joinSourceApplicationId !== _ && (r.joinSourceApplicationId = _),
        n.joinSourceChannelId !== f && (r.joinSourceChannelId = f),
        n.inviterId !== c && (r.inviterId = c),
        n.integrationType !== d && (r.integrationType = d),
        r)) {
            let t = e,
                s = r[t],
                o = n[t];
            i()(s, o) || ((n[t] = s), (a = !0));
        }
        return this._membersMap.set(n.userId, n) || a;
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
}
