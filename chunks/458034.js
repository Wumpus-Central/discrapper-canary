n.d(t, {
    Am: () => h,
    ZP: () => m,
    s$: () => _,
});
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(485386),
    s = n(275759),
    l = n(388032);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = "guild-connection-roles";
function p() {
    return {
        modalKey: _,
        contextKey: a.z1l,
        onCloseRequest: () => {
            (0, a.Mr3)(_, a.z1l);
        },
    };
}
function h(e) {
    (0, a.ZDy)(async () => {
        let { default: t } = await n.e("40897").then(n.bind(n, 507294));
        return (n) => (0, r.jsx)(t, f(u({}, n), { guildId: e }));
    }, p());
}
function m(e) {
    return (0, i.e7)([o.Z], () => (0, s.kQ)(o.Z.getSortedRoles(e.id)), [e])
        ? (0, r.jsx)(a.sNh, {
              id: "guild-connection-roles",
              label: l.intl.string(l.t.ghtnss),
              icon: a.xPt,
              action: () => h(e.id),
          })
        : null;
}
