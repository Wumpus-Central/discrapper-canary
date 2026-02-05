"use strict";
n.d(t, { A: () => T }), n(938796);
var r = n(665260),
    i = n(311907),
    a = n(73153),
    s = n(317525),
    o = n(71393),
    l = n(583613),
    u = n(661191),
    c = n(209700),
    d = n(652215),
    _ = n(355097);
let f = {};
function p(e) {
    let { guildId: t, data: n } = e;
    delete n.roles[u.default.castGuildIdAsEveryoneGuildRoleId(t)], (f[t] = { ...n, timestamp: Date.now() });
}
function h(e) {
    let { guildId: t } = e;
    if (null == f[t]) return !1;
    delete f[t];
}
function m(e) {
    let { guildId: t, roleId: n } = e;
    if (null == f[t]) return !1;
    delete f[t].roles[n];
}
function g(e) {
    let { guildId: t, overrides: n } = e;
    if (null == t || null == f[t]) return !1;
    let i = f[t];
    if (null == i || i.type !== c._.NEW_MEMBER) return !1;
    let a = i.optInChannels ?? new Set();
    return (
        u.default.keys(n).forEach((e) => {
            let t = n[e];
            r.Lt(t.flags ?? 0, _.vv.OPT_IN_ENABLED) ? a.add(e) : a.delete(e);
        }),
        (i.optInChannels = a),
        !0
    );
}
function E(e) {
    let { guildId: t, optionId: n, selected: r, removedOptionIds: i } = e;
    if (null == t || null == f[t]) return !1;
    let a = f[t];
    if (null == a || a.type !== c._.NEW_MEMBER) return !1;
    let s = a.onboardingResponses ?? new Set();
    return (
        null != i && i.length > 0 && i.forEach((e) => s.delete(e)),
        r ? s.add(n) : s.delete(n),
        (a.onboardingResponses = s),
        !0
    );
}
function A(e) {
    let { guildId: t, roles: n, flags: r } = e;
    if (null == t) return !1;
    let i = f[t];
    return (
        null != i &&
        (null != n &&
            (i.roles = n.reduce((e, n) => {
                let r = s.A.getRole(t, n);
                return null != r && (e[n] = r), e;
            }, {})),
        null != r && i.type === c._.NEW_MEMBER && (i.memberOptions.flags = r),
        !0)
    );
}
class I extends i.Ay.Store {
    static displayName = "ImpersonateStore";
    initialize() {
        this.waitFor(o.A, s.A);
    }
    hasViewingRoles() {
        return !(0, l.DJ)(f);
    }
    isViewingRoles(e) {
        return null != e && null != f[e];
    }
    getViewingRoles(e) {
        return f[e]?.roles;
    }
    getViewingRolesTimestamp(e) {
        return null != e ? f[e]?.timestamp : null;
    }
    getData(e) {
        return f[e];
    }
    isFullServerPreview(e) {
        return f[e]?.type === c._.NEW_MEMBER;
    }
    isOptInEnabled(e) {
        let t = f[e];
        return null != t && t.type === c._.NEW_MEMBER && t.optInEnabled;
    }
    isOnboardingEnabled(e) {
        let t = f[e];
        return null != t && t.type === c._.NEW_MEMBER && t.onboardingEnabled;
    }
    getViewingChannels(e) {
        let t = f[e];
        return null == t || t.type !== c._.NEW_MEMBER ? null : t.optInChannels;
    }
    getOnboardingResponses(e) {
        let t = f[e];
        return null == t || t.type !== c._.NEW_MEMBER ? null : t.onboardingResponses;
    }
    getMemberOptions(e) {
        let t = f[e];
        return null == t || t.type !== c._.NEW_MEMBER ? null : t.memberOptions;
    }
    isChannelOptedIn(e, t) {
        let n = this.getViewingChannels(e);
        return null != n && n.has(t);
    }
    isViewingServerShop(e) {
        return null != e && f[e]?.type === c._.SERVER_SHOP;
    }
    getImpersonateType(e) {
        if (null == e) return null;
        let t = f[e];
        return null == t ? null : t.type;
    }
    getBackNavigationSection(e) {
        if (null == e) return d.BEX.ROLES;
        let t = f[e];
        if (null == t) return d.BEX.ROLES;
        switch (t.type) {
            case c._.ROLES:
            case c._.SERVER_SHOP:
                return t.returnToSection;
            case c._.NEW_MEMBER:
                return d.BEX.ONBOARDING;
            default:
                return d.BEX.ROLES;
        }
    }
}
let T = new I(a.h, {
    IMPERSONATE_UPDATE: p,
    IMPERSONATE_STOP: h,
    GUILD_ROLE_DELETE: m,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: g,
    GUILD_ONBOARDING_SELECT_OPTION: E,
    GUILD_MEMBER_UPDATE_LOCAL: A,
});
