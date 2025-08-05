(n.d(t, { Z: () => E }), n(388685));
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(300284),
    s = n(314897),
    l = n(271383),
    c = n(715903),
    u = n(295474),
    d = n(372897),
    f = n(526761),
    _ = n(388032);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
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
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e) {
    let { guildId: t, analyticsLocations: n, analyticsLocation: i } = e,
        [o, s] = (0, u.ww)({
            guildId: t,
            analyticsLocations: n,
            analyticsLocation: i,
            openWithoutBackstack: !0
        }),
        l = s ? _.intl.string(_.t['6ndMcn']) : _.intl.string(_.t['0eiu6O']),
        c = s ? _.intl.string(_.t.S09nw8) : _.intl.string(_.t.tEttXV);
    return (0, r.jsxs)(a.qXd, {
        color: a.DM8.DANGER,
        children: [
            l,
            (0, r.jsx)(a.EyT, {
                onClick: o,
                children: c
            })
        ]
    });
}
function g() {
    let e = (0, o.Z)({ scrollPosition: f.Y_.GUILD_TAG });
    return (0, r.jsxs)(a.qXd, {
        color: a.DM8.DANGER,
        children: [
            _.intl.string(_.t.ZqlecX),
            (0, r.jsx)(a.EyT, {
                onClick: e,
                children: _.intl.string(_.t.SJehVV)
            })
        ]
    });
}
function E(e) {
    let t = (0, i.e7)(
        [s.default, l.ZP],
        () => {
            if (null == e.guildId) return new Set();
            let t = s.default.getId();
            return (0, c.no)(l.ZP.getMember(e.guildId, t));
        },
        [e.guildId]
    );
    return t.has(d.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || t.has(d.q.AUTOMOD_QUARANTINED_BIO) ? (0, r.jsx)(m, h({}, e)) : t.has(d.q.AUTOMOD_QUARANTINED_SERVER_TAG) ? (0, r.jsx)(g, {}) : (0, r.jsx)(m, h({}, e));
}
