i.d(t, { K: () => p }), i(388685), i(953529);
var n = i(473749),
    l = i(442837),
    r = i(172337),
    a = i(101492),
    o = i(710091),
    s = i(496675),
    u = i(388032);
let d = {
        "server-subscriptions-onboarding": o.Z,
        "server-subscriptions-finish-setting-up": a.Z,
        "server-subscriptions-create-tier-from-template": r.Z,
    },
    c = {
        title: () => u.intl.string(u.t.V42OaH),
        description: () => u.intl.string(u.t["7dJ16X"]),
        selectGuildCta: () => u.intl.string(u.t.LhlgY9),
        createGuildDescription: () => u.intl.string(u.t.anOisx),
        createGuildCta: () => u.intl.string(u.t.B44MTm),
        canCreateGuild: !0,
        useIsGuildSupported: () => (0, l.e7)([s.Z], () => (e) => s.Z.canAccessGuildSettings(e), [], l.pF),
    };
function p(e) {
    var t;
    let [i] = n.useState(null == e ? void 0 : d[e]),
        l = c.useIsGuildSupported(),
        r = null == i || null == (t = i.useIsGuildSupported) ? void 0 : t.call(i),
        a = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(i);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(i).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(i, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = i[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                    });
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
        isGuildSupported: (e, t) => l(e, t) && (null == r ? void 0 : r(e, t)) !== !1,
    };
}
