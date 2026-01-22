i.d(t, { q: () => b }), i(896048), i(228524);
var n = i(64700),
    l = i(311907),
    r = i(217238),
    a = i(641411),
    s = i(594792),
    d = i(576705),
    o = i(985018);
let u = {
        "server-subscriptions-onboarding": s.A,
        "server-subscriptions-finish-setting-up": a.A,
        "server-subscriptions-create-tier-from-template": r.A,
    },
    c = {
        title: () => o.intl.string(o.t.V42OaH),
        description: () => o.intl.string(o.t["7dJ16X"]),
        selectGuildCta: () => o.intl.string(o.t.LhlgY9),
        createGuildDescription: () => o.intl.string(o.t.anOisx),
        createGuildCta: () => o.intl.string(o.t.B44MTm),
        canCreateGuild: !0,
        useIsGuildSupported: () => (0, l.bG)([d.A], () => (e) => d.A.canAccessGuildSettings(e), [], l.My),
    };
function b(e) {
    var t;
    let [i] = n.useState(null == e ? void 0 : u[e]),
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
