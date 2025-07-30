(n.d(t, { Z: () => I }), n(388685));
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(300284),
    o = n(314897),
    s = n(271383),
    c = n(715903),
    u = n(295474),
    d = n(372897),
    _ = n(526761),
    E = n(388032);
function p(e) {
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
function O(e) {
    let { guildId: t, analyticsLocations: n, analyticsLocation: i } = e,
        [a, o] = (0, u.ww)({
            guildId: t,
            analyticsLocations: n,
            analyticsLocation: i,
            openWithoutBackstack: !0
        }),
        s = o ? E.intl.string(E.t['6ndMcn']) : E.intl.string(E.t['0eiu6O']),
        c = o ? E.intl.string(E.t.S09nw8) : E.intl.string(E.t.tEttXV);
    return (0, r.jsxs)(l.qXd, {
        color: l.DM8.DANGER,
        children: [
            s,
            (0, r.jsx)(l.EyT, {
                onClick: a,
                children: c
            })
        ]
    });
}
function f() {
    let e = (0, a.Z)({ scrollPosition: _.Y_.GUILD_TAG });
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
function I(e) {
    let t = (0, i.e7)(
        [o.default, s.ZP],
        () => {
            if (null == e.guildId) return new Set();
            let t = o.default.getId();
            return (0, c.no)(s.ZP.getMember(e.guildId, t));
        },
        [e.guildId]
    );
    return t.has(d.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || t.has(d.q.AUTOMOD_QUARANTINED_BIO) ? (0, r.jsx)(O, p({}, e)) : t.has(d.q.AUTOMOD_QUARANTINED_SERVER_TAG) ? (0, r.jsx)(f, {}) : (0, r.jsx)(O, p({}, e));
}
