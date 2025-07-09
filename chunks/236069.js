(n.d(t, { Z: () => p }), n(388685));
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    o = n(300284),
    a = n(314897),
    c = n(271383),
    s = n(715903),
    u = n(295474),
    d = n(372897),
    _ = n(526761),
    E = n(388032);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function I(e) {
    let { guildId: t, analyticsLocations: n, analyticsLocation: i } = e,
        [o, a] = (0, u.ww)({
            guildId: t,
            analyticsLocations: n,
            analyticsLocation: i,
            openWithoutBackstack: !0
        }),
        c = a ? E.intl.string(E.t['6ndMcn']) : E.intl.string(E.t['0eiu6O']),
        s = a ? E.intl.string(E.t.S09nw8) : E.intl.string(E.t.tEttXV);
    return (0, r.jsxs)(l.qXd, {
        color: l.DM8.DANGER,
        children: [
            c,
            (0, r.jsx)(l.EyT, {
                onClick: o,
                children: s
            })
        ]
    });
}
function T() {
    let e = (0, o.Z)({ scrollPosition: _.Y_.GUILD_TAG });
    return (0, r.jsxs)(l.qXd, {
        color: l.DM8.DANGER,
        children: [
            E.intl.string(E.t.ZqlecX),
            (0, r.jsx)(l.EyT, {
                onClick: e,
                children: E.intl.string(E.t.SJehVV)
            })
        ]
    });
}
function p(e) {
    let t = (0, i.e7)(
        [a.default, c.ZP],
        () => {
            if (null == e.guildId) return new Set();
            let t = a.default.getId();
            return (0, s.no)(c.ZP.getMember(e.guildId, t));
        },
        [e.guildId]
    );
    return t.has(d.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || t.has(d.q.AUTOMOD_QUARANTINED_BIO) ? (0, r.jsx)(I, O({}, e)) : t.has(d.q.AUTOMOD_QUARANTINED_SERVER_TAG) ? (0, r.jsx)(T, {}) : (0, r.jsx)(I, O({}, e));
}
