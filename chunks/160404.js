var i,
    a = r(47120);
var s = r(789020);
var o = r(724458);
var l = r(442837),
    u = r(570140),
    c = r(430824),
    d = r(630388),
    f = r(251625),
    _ = r(709054),
    h = r(225675),
    p = r(981631),
    m = r(526761);
function g(e, n, r) {
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
let E = {};
function v(e) {
    let { guildId: n, data: r } = e;
    delete r.roles[_.default.castGuildIdAsEveryoneGuildRoleId(n)],
        (E[n] = {
            ...r,
            timestamp: Date.now()
        });
}
function I(e) {
    let { guildId: n } = e;
    if (null == E[n]) return !1;
    delete E[n];
}
function T(e) {
    let { guildId: n, roleId: r } = e;
    if (null == E[n]) return !1;
    delete E[n].roles[r];
}
function b(e) {
    var n;
    let { guildId: r, overrides: i } = e;
    if (null == r || null == E[r]) return !1;
    let a = E[r];
    if (null == a || a.type !== h.z.NEW_MEMBER) return !1;
    let s = null !== (n = a.optInChannels) && void 0 !== n ? n : new Set();
    return (
        _.default.keys(i).forEach((e) => {
            var n;
            let r = i[e];
            d.yE(null !== (n = r.flags) && void 0 !== n ? n : 0, m.ic.OPT_IN_ENABLED) ? s.add(e) : s.delete(e);
        }),
        (a.optInChannels = s),
        !0
    );
}
function y(e) {
    var n;
    let { guildId: r, optionId: i, selected: a, removedOptionIds: s } = e;
    if (null == r || null == E[r]) return !1;
    let o = E[r];
    if (null == o || o.type !== h.z.NEW_MEMBER) return !1;
    let l = null !== (n = o.onboardingResponses) && void 0 !== n ? n : new Set();
    return null != s && s.length > 0 && s.forEach((e) => l.delete(e)), a ? l.add(i) : l.delete(i), (o.onboardingResponses = l), !0;
}
function S(e) {
    let { guildId: n, roles: r, flags: i } = e;
    if (null == n) return !1;
    let a = E[n];
    return (
        null != a &&
        (null != r &&
            (a.roles = r.reduce((e, r) => {
                let i = c.Z.getRole(n, r);
                return null != i && (e[r] = i), e;
            }, {})),
        null != i && a.type === h.z.NEW_MEMBER && (a.memberOptions.flags = i),
        !0)
    );
}
class A extends (i = l.ZP.Store) {
    hasViewingRoles() {
        return !(0, f.ld)(E);
    }
    isViewingRoles(e) {
        return null != e && null != E[e];
    }
    getViewingRoles(e) {
        var n;
        return null === (n = E[e]) || void 0 === n ? void 0 : n.roles;
    }
    getViewingRolesTimestamp(e) {
        var n;
        return null != e ? (null === (n = E[e]) || void 0 === n ? void 0 : n.timestamp) : null;
    }
    getData(e) {
        return E[e];
    }
    isFullServerPreview(e) {
        var n;
        return (null === (n = E[e]) || void 0 === n ? void 0 : n.type) === h.z.NEW_MEMBER;
    }
    isOptInEnabled(e) {
        let n = E[e];
        return null != n && n.type === h.z.NEW_MEMBER && n.optInEnabled;
    }
    isOnboardingEnabled(e) {
        let n = E[e];
        return null != n && n.type === h.z.NEW_MEMBER && n.onboardingEnabled;
    }
    getViewingChannels(e) {
        let n = E[e];
        return null == n || n.type !== h.z.NEW_MEMBER ? null : n.optInChannels;
    }
    getOnboardingResponses(e) {
        let n = E[e];
        return null == n || n.type !== h.z.NEW_MEMBER ? null : n.onboardingResponses;
    }
    getMemberOptions(e) {
        let n = E[e];
        return null == n || n.type !== h.z.NEW_MEMBER ? null : n.memberOptions;
    }
    isChannelOptedIn(e, n) {
        let r = this.getViewingChannels(e);
        return null != r && r.has(n);
    }
    isViewingServerShop(e) {
        var n;
        return null != e && (null === (n = E[e]) || void 0 === n ? void 0 : n.type) === h.z.SERVER_SHOP;
    }
    getImpersonateType(e) {
        if (null == e) return null;
        let n = E[e];
        return null == n ? null : n.type;
    }
    getBackNavigationSection(e) {
        if (null == e) return p.pNK.ROLES;
        let n = E[e];
        if (null == n) return p.pNK.ROLES;
        switch (n.type) {
            case h.z.ROLES:
            case h.z.SERVER_SHOP:
                return n.returnToSection;
            case h.z.NEW_MEMBER:
                return p.pNK.ONBOARDING;
            default:
                return p.pNK.ROLES;
        }
    }
}
g(A, 'displayName', 'ImpersonateStore'),
    (n.Z = new A(u.Z, {
        IMPERSONATE_UPDATE: v,
        IMPERSONATE_STOP: I,
        GUILD_ROLE_DELETE: T,
        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: b,
        GUILD_ONBOARDING_SELECT_OPTION: y,
        GUILD_MEMBER_UPDATE_LOCAL: S
    }));
