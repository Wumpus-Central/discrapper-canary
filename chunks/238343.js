n.d(t, {
    Aw: () => y,
    KE: () => b,
    KT: () => m,
    _C: () => O,
});
var r = n(54381),
    i = n(473749),
    l = n(442837),
    o = n(481060),
    a = n(906732),
    s = n(879892),
    c = n(430824),
    u = n(278646),
    d = n(473952),
    f = n(343334),
    h = n(535396),
    p = n(981631);
function g(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function m(e) {
    i.useEffect(() => {
        null != e && (0, o.showToast)((0, o.createToast)(e, o.ToastType.FAILURE));
    }, [e]);
}
function b(e, t) {
    (0, o.ZDy)(
        async () => {
            switch (t.type) {
                case h.Us.LEVEL:
                    let { default: i } = await n.e("99014").then(n.bind(n, 271224));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            g(
                                {
                                    guildId: e,
                                    powerup: t,
                                },
                                n,
                            ),
                        );
                case h.Us.PERK: {
                    let { default: i } = await Promise.all([n.e("76692"), n.e("81242")]).then(n.bind(n, 326055));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            g(
                                {
                                    guildId: e,
                                    powerup: t,
                                },
                                n,
                            ),
                        );
                }
            }
        },
        { modalKey: h.H2 },
    );
}
function _(e, t, n) {
    n && (0, o.pTH)(), (0, u.h)(e, t);
}
function y(e, t) {
    (0, o.ZDy)(async () => {
        let { default: i } = await n.e("31924").then(n.bind(n, 625651));
        return (n) =>
            (0, r.jsx)(
                i,
                g(
                    {
                        guildId: e,
                        powerup: t,
                    },
                    n,
                ),
            );
    });
}
function O(e, t) {
    let { analyticsLocations: n } = (0, a.ZP)(),
        { onToggle: r } = (0, f.Z)(e, t),
        o = (0, l.e7)([c.Z], () => c.Z.getGuild(e)),
        u = (0, d.Z)(e, t);
    return {
        onActivate: i.useCallback(
            function () {
                var e;
                let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { shouldCloseAllModals: l = !0 } = i;
                if (null != o && null != t)
                    return u < t.cost
                        ? void (0, s.u)({
                              analyticsLocation: {
                                  page: p.ZY5.GUILD_POWERUPS_OVERVIEW,
                                  section: p.jXE.GUILD_POWERUPS_OVERVIEW_CARD,
                              },
                              numberOfBoostsToAdd: t.cost - u,
                              analyticsLocations: n,
                              guild: o,
                              intent: t.type === h.Us.LEVEL ? h.P2.LEVEL : h.P2.PERK,
                              onSubscribeComplete: () => {
                                  var e;
                                  return null == (e = r(!0))
                                      ? void 0
                                      : e.then(() => {
                                            _(o.id, t, l);
                                        });
                              },
                          })
                        : null == (e = r(!0))
                          ? void 0
                          : e.then(() => {
                                _(o.id, t, l);
                            });
            },
            [r, t, u, n, o],
        ),
    };
}
