(n.d(t, { Z: () => C }), n(388685));
var i = n(255367);
n(73800);
var r = n(442837),
    l = n(481060),
    o = n(300284),
    s = n(314897),
    a = n(271383),
    c = n(715903),
    d = n(295474),
    u = n(372897),
    _ = n(526761),
    h = n(388032);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function I(e) {
    let { guildId: t, analyticsLocations: n, analyticsLocation: r } = e,
        [o, s] = (0, d.ww)({
            guildId: t,
            analyticsLocations: n,
            analyticsLocation: r,
            openWithoutBackstack: !0
        }),
        a = s ? h.intl.string(h.t['6ndMcn']) : h.intl.string(h.t['0eiu6O']),
        c = s ? h.intl.string(h.t.S09nw8) : h.intl.string(h.t.tEttXV);
    return (0, i.jsxs)(l.qXd, {
        color: l.DM8.DANGER,
        children: [
            a,
            (0, i.jsx)(l.EyT, {
                onClick: o,
                children: c
            })
        ]
    });
}
function p() {
    let e = (0, o.Z)({ scrollPosition: _.Y_.GUILD_TAG });
    return (0, i.jsxs)(l.qXd, {
        color: l.DM8.DANGER,
        children: [
            h.intl.string(h.t.ZqlecX),
            (0, i.jsx)(l.EyT, {
                onClick: e,
                children: h.intl.string(h.t.SJehVV)
            })
        ]
    });
}
function C(e) {
    let t = (0, r.e7)(
        [s.default, a.ZP],
        () => {
            if (null == e.guildId) return new Set();
            let t = s.default.getId();
            return (0, c.no)(a.ZP.getMember(e.guildId, t));
        },
        [e.guildId]
    );
    return t.has(u.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || t.has(u.q.AUTOMOD_QUARANTINED_BIO) ? (0, i.jsx)(I, E({}, e)) : t.has(u.q.AUTOMOD_QUARANTINED_SERVER_TAG) ? (0, i.jsx)(p, {}) : (0, i.jsx)(I, E({}, e));
}
