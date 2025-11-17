n.d(t, { Z: () => T }), n(388685);
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    l = n(300284),
    c = n(314897),
    u = n(271383),
    d = n(715903),
    f = n(295474),
    _ = n(372897),
    p = n(526761),
    h = n(388032);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function v(e) {
    let { guildId: t, analyticsLocations: n } = e,
        [i, o] = (0, f.ww)({
            guildId: t,
            analyticsLocations: n,
        }),
        s = o ? h.intl.string(h.t["6ndMcq"]) : h.intl.string(h.t["0eiu6J"]),
        l = o ? h.intl.string(h.t.S09nw4) : h.intl.string(h.t.tEttXd);
    return (0, r.jsxs)(a.qXd, {
        color: a.DM8.DANGER,
        children: [
            s,
            (0, r.jsx)(a.EyT, {
                onClick: i,
                children: l,
            }),
        ],
    });
}
function I() {
    let e = (0, l.Z)({ scrollPosition: p.Y_.GUILD_TAG });
    return (0, r.jsxs)(a.qXd, {
        color: a.DM8.DANGER,
        children: [
            h.intl.string(h.t.Zqlecb),
            (0, r.jsx)(a.EyT, {
                onClick: e,
                children: h.intl.string(h.t.SJehVW),
            }),
        ],
    });
}
function T(e) {
    var { analyticsLocations: t } = e,
        n = y(e, ["analyticsLocations"]);
    let { analyticsLocations: a } = (0, s.ZP)(t, o.Z.AUTOMOD_NAGBAR_NOTICE),
        l = (0, i.e7)([c.default, u.ZP], () => {
            if (null == n.guildId) return new Set();
            let e = c.default.getId();
            return (0, d.no)(u.ZP.getMember(n.guildId, e));
        }, [n.guildId]);
    return l.has(_.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || l.has(_.q.AUTOMOD_QUARANTINED_BIO)
        ? (0, r.jsx)(v, b(g({}, n), { analyticsLocations: a }))
        : l.has(_.q.AUTOMOD_QUARANTINED_SERVER_TAG)
          ? (0, r.jsx)(I, {})
          : (0, r.jsx)(v, b(g({}, n), { analyticsLocations: a }));
}
