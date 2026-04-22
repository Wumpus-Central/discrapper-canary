"use strict";
n.d(t, { Tu: () => E, z8: () => g }), n(321073);
var r,
    i = n(33851),
    s = n.n(i),
    a = n(713402),
    o = n(694318),
    l = n(287809),
    u = n(157347),
    d = n(70738),
    c = n(166233),
    _ = n(230959);
let f = Date.now();
var E =
    (((r = {}).NEW_GUILD_MEMBER = "NEW_GUILD_MEMBER"),
    (r.CURRENT_GUILD_MEMBER = "CURRENT_GUILD_MEMBER"),
    (r.INCLUDED_IN_SEARCH_RESULTS = "INCLUDED_IN_SEARCH_RESULTS"),
    r);
function h(e) {
    let t = [e.isCurrentGuildMemberByTimestamp ? "CURRENT_GUILD_MEMBER" : "NEW_GUILD_MEMBER"];
    return e.isIncludedInSearchResults && t.push("INCLUDED_IN_SEARCH_RESULTS"), t;
}
function p(e) {
    return e.sort;
}
function m() {
    return new a.J(h, p);
}
class g {
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
            r = (0, u.vn)(e.joinedAt),
            {
                hasUnusualDmActivity: i,
                hasUnusualAccountActivity: s,
                sourceInviteCode: a,
                joinSourceType: o,
                inviterId: c,
                integrationType: f,
                joinSourceApplicationId: E,
                joinSourceChannelId: h,
            } = this._computeMemberSupplementals(e.userId, e.unusualDMActivityUntil),
            p = l.default.getUser(e.userId);
        return {
            hasUnusualDmActivity: i,
            hasUnusualAccountActivity: s,
            sourceInviteCode: a,
            joinSourceType: o,
            inviterId: c,
            integrationType: f,
            joinSourceApplicationId: E,
            joinSourceChannelId: h,
            ...e,
            isCurrentGuildMemberByTimestamp: r <= this.newMemberTimestamp,
            isIncludedInSearchResults: !1,
            user: p,
            sort: (0, _.R)(e, t.selectedSort ?? d.mF.ORDER_BY_UNSPECIFIED),
            joinedAtTimestamp: r,
            ...n,
        };
    }
    _computeMemberSupplementals(e, t) {
        let {
            sourceInviteCode: n,
            joinSourceType: r,
            inviterId: i,
            integrationType: s,
            joinSourceApplicationId: a,
            joinSourceChannelId: l,
        } = (0, c.Oe)(this.guildId)[e] ?? {};
        return {
            sourceInviteCode: n ?? null,
            joinSourceType: r ?? null,
            inviterId: i ?? null,
            integrationType: s ?? null,
            joinSourceApplicationId: a ?? null,
            joinSourceChannelId: l ?? null,
            hasUnusualDmActivity: null != t && new Date(t).getTime() >= f - d.tX,
            hasUnusualAccountActivity: (0, o.cx)(e),
        };
    }
    createMember(e) {
        return this._membersMap.set(e.userId, e);
    }
    updateMember(e, t) {
        if (null == t) return this._membersMap.set(e.userId, e);
        let n = { ...e },
            r = { ...t },
            i = !1,
            {
                sourceInviteCode: a,
                hasUnusualDmActivity: o,
                hasUnusualAccountActivity: l,
                joinSourceType: u,
                inviterId: d,
                integrationType: c,
                joinSourceApplicationId: _,
                joinSourceChannelId: f,
            } = this._computeMemberSupplementals(n.userId, r.unusualDMActivityUntil ?? n.unusualDMActivityUntil);
        for (let e in (n.sourceInviteCode !== a && (r.sourceInviteCode = a),
        n.hasUnusualDmActivity !== o && (r.hasUnusualDmActivity = o),
        n.hasUnusualAccountActivity !== l && (r.hasUnusualAccountActivity = l),
        n.joinSourceType !== u && (r.joinSourceType = u),
        n.joinSourceApplicationId !== _ && (r.joinSourceApplicationId = _),
        n.joinSourceChannelId !== f && (r.joinSourceChannelId = f),
        n.inviterId !== d && (r.inviterId = d),
        n.integrationType !== c && (r.integrationType = c),
        r)) {
            let t = r[e],
                a = n[e];
            s()(t, a) || ((n[e] = t), (i = !0));
        }
        return this._membersMap.set(n.userId, n) || i;
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
