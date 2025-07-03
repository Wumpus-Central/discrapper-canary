(i.d(t, { K: () => p }), i(388685), i(953529));
var n = i(73800),
    l = i(442837),
    r = i(172337),
    a = i(101492),
    s = i(710091),
    u = i(496675),
    d = i(388032);
let o = {
        'server-subscriptions-onboarding': s.Z,
        'server-subscriptions-finish-setting-up': a.Z,
        'server-subscriptions-create-tier-from-template': r.Z
    },
    c = {
        title: () => d.intl.string(d.t.V42OaG),
        description: () => d.intl.string(d.t['7dJ16e']),
        selectGuildCta: () => d.intl.string(d.t.LhlgY2),
        createGuildDescription: () => d.intl.string(d.t.anOis7),
        createGuildCta: () => d.intl.string(d.t.B44MTk),
        canCreateGuild: !0,
        useIsGuildSupported: () => (0, l.e7)([u.Z], () => (e) => u.Z.canAccessGuildSettings(e), [], l.pF)
    };
function p(e) {
    var t;
    let [i] = n.useState(null == e ? void 0 : o[e]),
        l = c.useIsGuildSupported(),
        r = null == i || null == (t = i.useIsGuildSupported) ? void 0 : t.call(i),
        a = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(i);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(i).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(i, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        ((n = i[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n));
                    }));
            }
            return e;
        })({}, c, null != i ? i : {});
    return {
        title: a.title(),
        description: a.description(),
        selectGuildCta: a.selectGuildCta(),
        createGuildDescription: a.createGuildDescription(),
        createGuildCta: a.createGuildCta(),
        canCreateGuild: a.canCreateGuild,
        isGuildSupported: (e, t) => l(e, t) && (null == r ? void 0 : r(e, t)) !== !1
    };
}
