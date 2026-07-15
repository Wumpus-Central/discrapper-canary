"use strict";
n.d(t, { Tu: () => A, z8: () => p }), n(321073);
var i,
    r = n(811315),
    a = n.n(r),
    s = n(713402),
    l = n(694318),
    o = n(287809),
    d = n(157347),
    c = n(70738),
    u = n(166233),
    _ = n(230959);
let E = Date.now();
var A =
    (((i = {}).NEW_GUILD_MEMBER = "NEW_GUILD_MEMBER"),
    (i.CURRENT_GUILD_MEMBER = "CURRENT_GUILD_MEMBER"),
    (i.INCLUDED_IN_SEARCH_RESULTS = "INCLUDED_IN_SEARCH_RESULTS"),
    i);
function h(e) {
    let t = [e.isCurrentGuildMemberByTimestamp ? "CURRENT_GUILD_MEMBER" : "NEW_GUILD_MEMBER"];
    return e.isIncludedInSearchResults && t.push("INCLUDED_IN_SEARCH_RESULTS"), t;
}
function I(e) {
    return e.sort;
}
function f() {
    return new s.J(h, I);
}
class p {
    guildId;
    _membersMap;
    newMemberTimestamp = Date.now();
    constructor(e) {
        (this.guildId = e), (this._membersMap = f());
    }
    reset() {
        this._membersMap.clear(), (this._membersMap = f()), this.resetNewMemberTimestamp();
    }
    resetNewMemberTimestamp() {
        this.newMemberTimestamp = Date.now();
    }
    enhanceNewMember(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = (0, d.vn)(e.joinedAt),
            {
                hasUnusualDmActivity: r,
                hasUnusualAccountActivity: a,
                sourceInviteCode: s,
                joinSourceType: l,
                inviterId: u,
                integrationType: E,
                joinSourceApplicationId: A,
                joinSourceChannelId: h,
            } = this._computeMemberSupplementals(e.userId, e.unusualDMActivityUntil),
            I = o.default.getUser(e.userId);
        return {
            hasUnusualDmActivity: r,
            hasUnusualAccountActivity: a,
            sourceInviteCode: s,
            joinSourceType: l,
            inviterId: u,
            integrationType: E,
            joinSourceApplicationId: A,
            joinSourceChannelId: h,
            ...e,
            isCurrentGuildMemberByTimestamp: i <= this.newMemberTimestamp,
            isIncludedInSearchResults: !1,
            user: I,
            sort: (0, _.R)(e, t.selectedSort ?? c.mF.ORDER_BY_UNSPECIFIED),
            joinedAtTimestamp: i,
            ...n,
        };
    }
    _computeMemberSupplementals(e, t) {
        let {
            sourceInviteCode: n,
            joinSourceType: i,
            inviterId: r,
            integrationType: a,
            joinSourceApplicationId: s,
            joinSourceChannelId: o,
        } = (0, u.Oe)(this.guildId)[e] ?? {};
        return {
            sourceInviteCode: n ?? null,
            joinSourceType: i ?? null,
            inviterId: r ?? null,
            integrationType: a ?? null,
            joinSourceApplicationId: s ?? null,
            joinSourceChannelId: o ?? null,
            hasUnusualDmActivity: null != t && new Date(t).getTime() >= E - c.tX,
            hasUnusualAccountActivity: (0, l.cx)(e),
        };
    }
    createMember(e) {
        return this._membersMap.set(e.userId, e);
    }
    updateMember(e, t) {
        if (null == t) return this._membersMap.set(e.userId, e);
        let n = { ...e },
            i = { ...t },
            r = !1,
            {
                sourceInviteCode: s,
                hasUnusualDmActivity: l,
                hasUnusualAccountActivity: o,
                joinSourceType: d,
                inviterId: c,
                integrationType: u,
                joinSourceApplicationId: _,
                joinSourceChannelId: E,
            } = this._computeMemberSupplementals(n.userId, i.unusualDMActivityUntil ?? n.unusualDMActivityUntil);
        for (let e in (n.sourceInviteCode !== s && (i.sourceInviteCode = s),
        n.hasUnusualDmActivity !== l && (i.hasUnusualDmActivity = l),
        n.hasUnusualAccountActivity !== o && (i.hasUnusualAccountActivity = o),
        n.joinSourceType !== d && (i.joinSourceType = d),
        n.joinSourceApplicationId !== _ && (i.joinSourceApplicationId = _),
        n.joinSourceChannelId !== E && (i.joinSourceChannelId = E),
        n.inviterId !== c && (i.inviterId = c),
        n.integrationType !== u && (i.integrationType = u),
        i)) {
            let t = i[e],
                s = n[e];
            a()(t, s) || ((n[e] = t), (r = !0));
        }
        return this._membersMap.set(n.userId, n) || r;
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
