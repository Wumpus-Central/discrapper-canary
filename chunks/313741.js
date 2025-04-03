i.d(t, { K: () => p }), i(47120), i(266796);
var n = i(192379),
    l = i(442837),
    r = i(172337),
    s = i(101492),
    u = i(710091),
    a = i(496675),
    d = i(388032);
let o = {
        'server-subscriptions-onboarding': u.Z,
        'server-subscriptions-finish-setting-up': s.Z,
        'server-subscriptions-create-tier-from-template': r.Z
    },
    c = {
        title: () => d.NW.string(d.t.V42OaG),
        description: () => d.NW.string(d.t['7dJ16e']),
        selectGuildCta: () => d.NW.string(d.t.LhlgY2),
        createGuildDescription: () => d.NW.string(d.t.anOis7),
        createGuildCta: () => d.NW.string(d.t.B44MTk),
        canCreateGuild: !0,
        useIsGuildSupported: () => (0, l.e7)([a.Z], () => (e) => a.Z.canAccessGuildSettings(e), [], l.pF)
    };
function p(e) {
    var t;
    let [i] = n.useState(null == e ? void 0 : o[e]),
        l = c.useIsGuildSupported(),
        r = null == i || null == (t = i.useIsGuildSupported) ? void 0 : t.call(i),
        s = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(i);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(i).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(i, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = i[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({}, c, null != i ? i : {});
    return {
        title: s.title(),
        description: s.description(),
        selectGuildCta: s.selectGuildCta(),
        createGuildDescription: s.createGuildDescription(),
        createGuildCta: s.createGuildCta(),
        canCreateGuild: s.canCreateGuild,
        isGuildSupported: (e, t) => l(e, t) && (null == r ? void 0 : r(e, t)) !== !1
    };
}
