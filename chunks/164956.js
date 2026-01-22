n.d(t, { A: () => T }), n(896048), n(938796);
var r,
    i = n(665260),
    a = n(311907),
    s = n(73153),
    o = n(317525),
    l = n(71393),
    c = n(583613),
    u = n(661191),
    d = n(209700),
    f = n(652215),
    p = n(355097);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = {};
function b(e) {
    let { guildId: t, data: n } = e;
    delete n.roles[u.default.castGuildIdAsEveryoneGuildRoleId(t)], (E[t] = g(h({}, n), { timestamp: Date.now() }));
}
function y(e) {
    let { guildId: t } = e;
    if (null == E[t]) return !1;
    delete E[t];
}
function O(e) {
    let { guildId: t, roleId: n } = e;
    if (null == E[t]) return !1;
    delete E[t].roles[n];
}
function A(e) {
    var t;
    let { guildId: n, overrides: r } = e;
    if (null == n || null == E[n]) return !1;
    let a = E[n];
    if (null == a || a.type !== d._.NEW_MEMBER) return !1;
    let s = null != (t = a.optInChannels) ? t : new Set();
    return (
        u.default.keys(r).forEach((e) => {
            var t;
            let n = r[e];
            i.Lt(null != (t = n.flags) ? t : 0, p.vv.OPT_IN_ENABLED) ? s.add(e) : s.delete(e);
        }),
        (a.optInChannels = s),
        !0
    );
}
function v(e) {
    var t;
    let { guildId: n, optionId: r, selected: i, removedOptionIds: a } = e;
    if (null == n || null == E[n]) return !1;
    let s = E[n];
    if (null == s || s.type !== d._.NEW_MEMBER) return !1;
    let o = null != (t = s.onboardingResponses) ? t : new Set();
    return (
        null != a && a.length > 0 && a.forEach((e) => o.delete(e)),
        i ? o.add(r) : o.delete(r),
        (s.onboardingResponses = o),
        !0
    );
}
function S(e) {
    let { guildId: t, roles: n, flags: r } = e;
    if (null == t) return !1;
    let i = E[t];
    return (
        null != i &&
        (null != n &&
            (i.roles = n.reduce((e, n) => {
                let r = o.A.getRole(t, n);
                return null != r && (e[n] = r), e;
            }, {})),
        null != r && i.type === d._.NEW_MEMBER && (i.memberOptions.flags = r),
        !0)
    );
}
class I extends (r = a.Ay.Store) {
    initialize() {
        this.waitFor(l.A, o.A);
    }
    hasViewingRoles() {
        return !(0, c.DJ)(E);
    }
    isViewingRoles(e) {
        return null != e && null != E[e];
    }
    getViewingRoles(e) {
        var t;
        return null == (t = E[e]) ? void 0 : t.roles;
    }
    getViewingRolesTimestamp(e) {
        var t;
        return null != e ? (null == (t = E[e]) ? void 0 : t.timestamp) : null;
    }
    getData(e) {
        return E[e];
    }
    isFullServerPreview(e) {
        var t;
        return (null == (t = E[e]) ? void 0 : t.type) === d._.NEW_MEMBER;
    }
    isOptInEnabled(e) {
        let t = E[e];
        return null != t && t.type === d._.NEW_MEMBER && t.optInEnabled;
    }
    isOnboardingEnabled(e) {
        let t = E[e];
        return null != t && t.type === d._.NEW_MEMBER && t.onboardingEnabled;
    }
    getViewingChannels(e) {
        let t = E[e];
        return null == t || t.type !== d._.NEW_MEMBER ? null : t.optInChannels;
    }
    getOnboardingResponses(e) {
        let t = E[e];
        return null == t || t.type !== d._.NEW_MEMBER ? null : t.onboardingResponses;
    }
    getMemberOptions(e) {
        let t = E[e];
        return null == t || t.type !== d._.NEW_MEMBER ? null : t.memberOptions;
    }
    isChannelOptedIn(e, t) {
        let n = this.getViewingChannels(e);
        return null != n && n.has(t);
    }
    isViewingServerShop(e) {
        var t;
        return null != e && (null == (t = E[e]) ? void 0 : t.type) === d._.SERVER_SHOP;
    }
    getImpersonateType(e) {
        if (null == e) return null;
        let t = E[e];
        return null == t ? null : t.type;
    }
    getBackNavigationSection(e) {
        if (null == e) return f.BEX.ROLES;
        let t = E[e];
        if (null == t) return f.BEX.ROLES;
        switch (t.type) {
            case d._.ROLES:
            case d._.SERVER_SHOP:
                return t.returnToSection;
            case d._.NEW_MEMBER:
                return f.BEX.ONBOARDING;
            default:
                return f.BEX.ROLES;
        }
    }
}
_(I, "displayName", "ImpersonateStore");
let T = new I(s.h, {
    IMPERSONATE_UPDATE: b,
    IMPERSONATE_STOP: y,
    GUILD_ROLE_DELETE: O,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: A,
    GUILD_ONBOARDING_SELECT_OPTION: v,
    GUILD_MEMBER_UPDATE_LOCAL: S,
});
