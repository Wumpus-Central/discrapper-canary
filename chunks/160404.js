n.d(t, { Z: () => b }), n(47120), n(789020), n(724458);
var i,
    r = n(442837),
    a = n(570140),
    s = n(430824),
    o = n(630388),
    l = n(251625),
    u = n(709054),
    c = n(225675),
    d = n(981631),
    f = n(526761);
function _(e, t, n) {
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
let p = {};
function h(e) {
    let { guildId: t, data: n } = e;
    delete n.roles[u.default.castGuildIdAsEveryoneGuildRoleId(t)],
        (p[t] = {
            ...n,
            timestamp: Date.now()
        });
}
function m(e) {
    let { guildId: t } = e;
    if (null == p[t]) return !1;
    delete p[t];
}
function g(e) {
    let { guildId: t, roleId: n } = e;
    if (null == p[t]) return !1;
    delete p[t].roles[n];
}
function E(e) {
    var t;
    let { guildId: n, overrides: i } = e;
    if (null == n || null == p[n]) return !1;
    let r = p[n];
    if (null == r || r.type !== c.z.NEW_MEMBER) return !1;
    let a = null !== (t = r.optInChannels) && void 0 !== t ? t : new Set();
    return (
        u.default.keys(i).forEach((e) => {
            var t;
            let n = i[e];
            o.yE(null !== (t = n.flags) && void 0 !== t ? t : 0, f.ic.OPT_IN_ENABLED) ? a.add(e) : a.delete(e);
        }),
        (r.optInChannels = a),
        !0
    );
}
function v(e) {
    var t;
    let { guildId: n, optionId: i, selected: r, removedOptionIds: a } = e;
    if (null == n || null == p[n]) return !1;
    let s = p[n];
    if (null == s || s.type !== c.z.NEW_MEMBER) return !1;
    let o = null !== (t = s.onboardingResponses) && void 0 !== t ? t : new Set();
    return null != a && a.length > 0 && a.forEach((e) => o.delete(e)), r ? o.add(i) : o.delete(i), (s.onboardingResponses = o), !0;
}
function y(e) {
    let { guildId: t, roles: n, flags: i } = e;
    if (null == t) return !1;
    let r = p[t];
    return (
        null != r &&
        (null != n &&
            (r.roles = n.reduce((e, n) => {
                let i = s.Z.getRole(t, n);
                return null != i && (e[n] = i), e;
            }, {})),
        null != i && r.type === c.z.NEW_MEMBER && (r.memberOptions.flags = i),
        !0)
    );
}
class I extends (i = r.ZP.Store) {
    hasViewingRoles() {
        return !(0, l.ld)(p);
    }
    isViewingRoles(e) {
        return null != e && null != p[e];
    }
    getViewingRoles(e) {
        var t;
        return null === (t = p[e]) || void 0 === t ? void 0 : t.roles;
    }
    getViewingRolesTimestamp(e) {
        var t;
        return null != e ? (null === (t = p[e]) || void 0 === t ? void 0 : t.timestamp) : null;
    }
    getData(e) {
        return p[e];
    }
    isFullServerPreview(e) {
        var t;
        return (null === (t = p[e]) || void 0 === t ? void 0 : t.type) === c.z.NEW_MEMBER;
    }
    isOptInEnabled(e) {
        let t = p[e];
        return null != t && t.type === c.z.NEW_MEMBER && t.optInEnabled;
    }
    isOnboardingEnabled(e) {
        let t = p[e];
        return null != t && t.type === c.z.NEW_MEMBER && t.onboardingEnabled;
    }
    getViewingChannels(e) {
        let t = p[e];
        return null == t || t.type !== c.z.NEW_MEMBER ? null : t.optInChannels;
    }
    getOnboardingResponses(e) {
        let t = p[e];
        return null == t || t.type !== c.z.NEW_MEMBER ? null : t.onboardingResponses;
    }
    getMemberOptions(e) {
        let t = p[e];
        return null == t || t.type !== c.z.NEW_MEMBER ? null : t.memberOptions;
    }
    isChannelOptedIn(e, t) {
        let n = this.getViewingChannels(e);
        return null != n && n.has(t);
    }
    isViewingServerShop(e) {
        var t;
        return null != e && (null === (t = p[e]) || void 0 === t ? void 0 : t.type) === c.z.SERVER_SHOP;
    }
    getImpersonateType(e) {
        if (null == e) return null;
        let t = p[e];
        return null == t ? null : t.type;
    }
    getBackNavigationSection(e) {
        if (null == e) return d.pNK.ROLES;
        let t = p[e];
        if (null == t) return d.pNK.ROLES;
        switch (t.type) {
            case c.z.ROLES:
            case c.z.SERVER_SHOP:
                return t.returnToSection;
            case c.z.NEW_MEMBER:
                return d.pNK.ONBOARDING;
            default:
                return d.pNK.ROLES;
        }
    }
}
_(I, 'displayName', 'ImpersonateStore');
let b = new I(a.Z, {
    IMPERSONATE_UPDATE: h,
    IMPERSONATE_STOP: m,
    GUILD_ROLE_DELETE: g,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: E,
    GUILD_ONBOARDING_SELECT_OPTION: v,
    GUILD_MEMBER_UPDATE_LOCAL: y
});
