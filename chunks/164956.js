"use strict";
n.d(t, { A: () => h }), n(938796);
var i = n(665260),
    r = n(17928),
    a = n(228366),
    s = n(317525),
    l = n(71393),
    o = n(583613),
    d = n(935208),
    c = n(209700),
    u = n(652215),
    _ = n(355097);
let E = {};
class A extends r.Ay.Store {
    static displayName = "ImpersonateStore";
    initialize() {
        this.waitFor(l.A, s.A);
    }
    hasViewingRoles() {
        return !(0, o.DJ)(E);
    }
    isViewingRoles(e) {
        return null != e && null != E[e];
    }
    getViewingRoles(e) {
        return E[e]?.roles;
    }
    getViewingRolesTimestamp(e) {
        return null != e ? E[e]?.timestamp : null;
    }
    getData(e) {
        return E[e];
    }
    isFullServerPreview(e) {
        return E[e]?.type === c._.NEW_MEMBER;
    }
    isOptInEnabled(e) {
        let t = E[e];
        return null != t && t.type === c._.NEW_MEMBER && t.optInEnabled;
    }
    isOnboardingEnabled(e) {
        let t = E[e];
        return null != t && t.type === c._.NEW_MEMBER && t.onboardingEnabled;
    }
    getViewingChannels(e) {
        let t = E[e];
        return null == t || t.type !== c._.NEW_MEMBER ? null : t.optInChannels;
    }
    getOnboardingResponses(e) {
        let t = E[e];
        return null == t || t.type !== c._.NEW_MEMBER ? null : t.onboardingResponses;
    }
    getMemberOptions(e) {
        let t = E[e];
        return null == t || t.type !== c._.NEW_MEMBER ? null : t.memberOptions;
    }
    isChannelOptedIn(e, t) {
        let n = this.getViewingChannels(e);
        return null != n && n.has(t);
    }
    isViewingServerShop(e) {
        return null != e && E[e]?.type === c._.SERVER_SHOP;
    }
    getImpersonateType(e) {
        if (null == e) return null;
        let t = E[e];
        return null == t ? null : t.type;
    }
    getBackNavigationSection(e) {
        if (null == e) return u.BEX.ROLES;
        let t = E[e];
        if (null == t) return u.BEX.ROLES;
        switch (t.type) {
            case c._.ROLES:
            case c._.SERVER_SHOP:
                return t.returnToSection;
            case c._.NEW_MEMBER:
                return u.BEX.ONBOARDING;
            default:
                return u.BEX.ROLES;
        }
    }
}
let h = new A(a.h, {
    IMPERSONATE_UPDATE: function (e) {
        let { guildId: t, data: n } = e;
        delete n.roles[d.default.castGuildIdAsEveryoneGuildRoleId(t)], (E[t] = { ...n, timestamp: Date.now() });
    },
    IMPERSONATE_STOP: function (e) {
        let { guildId: t } = e;
        if (null == E[t]) return !1;
        delete E[t];
    },
    GUILD_ROLE_DELETE: function (e) {
        let { guildId: t, roleId: n } = e;
        if (null == E[t]) return !1;
        delete E[t].roles[n];
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function (e) {
        let { guildId: t, overrides: n } = e;
        if (null == t || null == E[t]) return !1;
        let r = E[t];
        if (null == r || r.type !== c._.NEW_MEMBER) return !1;
        let a = r.optInChannels ?? new Set();
        return (
            d.default.keys(n).forEach((e) => {
                let t = n[e];
                i.Lt(t.flags ?? 0, _.vv.OPT_IN_ENABLED) ? a.add(e) : a.delete(e);
            }),
            (r.optInChannels = a),
            !0
        );
    },
    GUILD_ONBOARDING_SELECT_OPTION: function (e) {
        let { guildId: t, optionId: n, selected: i, removedOptionIds: r } = e;
        if (null == t || null == E[t]) return !1;
        let a = E[t];
        if (null == a || a.type !== c._.NEW_MEMBER) return !1;
        let s = a.onboardingResponses ?? new Set();
        return (
            null != r && r.length > 0 && r.forEach((e) => s.delete(e)),
            i ? s.add(n) : s.delete(n),
            (a.onboardingResponses = s),
            !0
        );
    },
    GUILD_MEMBER_UPDATE_LOCAL: function (e) {
        let { guildId: t, roles: n, flags: i } = e;
        if (null == t) return !1;
        let r = E[t];
        return (
            null != r &&
            (null != n &&
                (r.roles = n.reduce((e, n) => {
                    let i = s.A.getRole(t, n);
                    return null != i && (e[n] = i), e;
                }, {})),
            null != i && r.type === c._.NEW_MEMBER && (r.memberOptions.flags = i),
            !0)
        );
    },
});
