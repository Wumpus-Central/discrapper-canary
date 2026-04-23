"use strict";
n.d(t, { A: () => m }), n(938796);
var i = n(665260),
    r = n(17928),
    s = n(228366),
    a = n(317525),
    o = n(71393),
    l = n(583613),
    d = n(935208),
    _ = n(209700),
    u = n(652215),
    c = n(355097);
let E = {};
class h extends r.Ay.Store {
    static displayName = "ImpersonateStore";
    initialize() {
        this.waitFor(o.A, a.A);
    }
    hasViewingRoles() {
        return !(0, l.DJ)(E);
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
        return E[e]?.type === _._.NEW_MEMBER;
    }
    isOptInEnabled(e) {
        let t = E[e];
        return null != t && t.type === _._.NEW_MEMBER && t.optInEnabled;
    }
    isOnboardingEnabled(e) {
        let t = E[e];
        return null != t && t.type === _._.NEW_MEMBER && t.onboardingEnabled;
    }
    getViewingChannels(e) {
        let t = E[e];
        return null == t || t.type !== _._.NEW_MEMBER ? null : t.optInChannels;
    }
    getOnboardingResponses(e) {
        let t = E[e];
        return null == t || t.type !== _._.NEW_MEMBER ? null : t.onboardingResponses;
    }
    getMemberOptions(e) {
        let t = E[e];
        return null == t || t.type !== _._.NEW_MEMBER ? null : t.memberOptions;
    }
    isChannelOptedIn(e, t) {
        let n = this.getViewingChannels(e);
        return null != n && n.has(t);
    }
    isViewingServerShop(e) {
        return null != e && E[e]?.type === _._.SERVER_SHOP;
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
            case _._.ROLES:
            case _._.SERVER_SHOP:
                return t.returnToSection;
            case _._.NEW_MEMBER:
                return u.BEX.ONBOARDING;
            default:
                return u.BEX.ROLES;
        }
    }
}
let m = new h(s.h, {
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
        if (null == r || r.type !== _._.NEW_MEMBER) return !1;
        let s = r.optInChannels ?? new Set();
        return (
            d.default.keys(n).forEach((e) => {
                let t = n[e];
                i.Lt(t.flags ?? 0, c.vv.OPT_IN_ENABLED) ? s.add(e) : s.delete(e);
            }),
            (r.optInChannels = s),
            !0
        );
    },
    GUILD_ONBOARDING_SELECT_OPTION: function (e) {
        let { guildId: t, optionId: n, selected: i, removedOptionIds: r } = e;
        if (null == t || null == E[t]) return !1;
        let s = E[t];
        if (null == s || s.type !== _._.NEW_MEMBER) return !1;
        let a = s.onboardingResponses ?? new Set();
        return (
            null != r && r.length > 0 && r.forEach((e) => a.delete(e)),
            i ? a.add(n) : a.delete(n),
            (s.onboardingResponses = a),
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
                    let i = a.A.getRole(t, n);
                    return null != i && (e[n] = i), e;
                }, {})),
            null != i && r.type === _._.NEW_MEMBER && (r.memberOptions.flags = i),
            !0)
        );
    },
});
