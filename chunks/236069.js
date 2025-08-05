(n.d(t, { Z: () => g }), n(388685));
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
    h = n(526761),
    _ = n(388032);
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
function p(e) {
    let { guildId: t, analyticsLocations: n, analyticsLocation: r } = e,
        [o, s] = (0, d.ww)({
            guildId: t,
            analyticsLocations: n,
            analyticsLocation: r,
            openWithoutBackstack: !0
        }),
        a = s ? _.intl.string(_.t['6ndMcn']) : _.intl.string(_.t['0eiu6O']),
        c = s ? _.intl.string(_.t.S09nw8) : _.intl.string(_.t.tEttXV);
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
function I() {
    let e = (0, o.Z)({ scrollPosition: h.Y_.GUILD_TAG });
    return (0, i.jsxs)(l.qXd, {
        color: l.DM8.DANGER,
        children: [
            _.intl.string(_.t.ZqlecX),
            (0, i.jsx)(l.EyT, {
                onClick: e,
                children: _.intl.string(_.t.SJehVV)
            })
        ]
    });
}
function g(e) {
    let t = (0, r.e7)(
        [s.default, a.ZP],
        () => {
            if (null == e.guildId) return new Set();
            let t = s.default.getId();
            return (0, c.no)(a.ZP.getMember(e.guildId, t));
        },
        [e.guildId]
    );
    return t.has(u.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || t.has(u.q.AUTOMOD_QUARANTINED_BIO) ? (0, i.jsx)(p, E({}, e)) : t.has(u.q.AUTOMOD_QUARANTINED_SERVER_TAG) ? (0, i.jsx)(I, {}) : (0, i.jsx)(p, E({}, e));
}
