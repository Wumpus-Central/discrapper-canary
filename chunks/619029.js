n.d(t, { A: () => S }), n(896048);
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(793574),
    o = n(688810),
    l = n(206835),
    c = n(961350),
    u = n(696451),
    d = n(229527),
    f = n(81400),
    p = n(340837),
    _ = n(355097),
    h = n(985018);
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = O(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function A(e) {
    let { guildId: t, analyticsLocations: n } = e,
        [i, s] = (0, f.j8)({
            guildId: t,
            analyticsLocations: n,
        }),
        o = s ? h.intl.string(h.t["6ndMcq"]) : h.intl.string(h.t["0eiu6J"]),
        l = s ? h.intl.string(h.t.S09nw4) : h.intl.string(h.t.tEttXd);
    return (0, r.jsxs)(a.$Td, {
        color: a.Hv$.DANGER,
        children: [
            o,
            (0, r.jsx)(a.zr9, {
                onClick: i,
                children: l,
            }),
        ],
    });
}
function v() {
    let e = (0, l.A)({ scrollPosition: _._F.GUILD_TAG });
    return (0, r.jsxs)(a.$Td, {
        color: a.Hv$.DANGER,
        children: [
            h.intl.string(h.t.Zqlecb),
            (0, r.jsx)(a.zr9, {
                onClick: e,
                children: h.intl.string(h.t.SJehVW),
            }),
        ],
    });
}
function S(e) {
    let { analyticsLocations: t } = e,
        n = y(e, ["analyticsLocations"]),
        { analyticsLocations: a } = (0, o.Ay)(t, s.A.AUTOMOD_NAGBAR_NOTICE),
        l = (0, i.bG)([c.default, u.Ay], () => {
            if (null == n.guildId) return new Set();
            let e = c.default.getId();
            return (0, d.wj)(u.Ay.getMember(n.guildId, e));
        }, [n.guildId]);
    return l.has(p.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || l.has(p.D.AUTOMOD_QUARANTINED_BIO)
        ? (0, r.jsx)(A, b(g({}, n), { analyticsLocations: a }))
        : l.has(p.D.AUTOMOD_QUARANTINED_SERVER_TAG)
          ? (0, r.jsx)(v, {})
          : (0, r.jsx)(A, b(g({}, n), { analyticsLocations: a }));
}
