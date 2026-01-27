n.d(t, {
    Ay: () => m,
    CB: () => p,
    c0: () => h,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    o = n(317525),
    s = n(370480),
    l = n(985018);

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
let p = "guild-connection-roles";

function _() {
    return {
        modalKey: p,
        contextKey: a.SYi,
        onCloseRequest: () => {
            (0, a.OoC)(p, a.SYi);
        },
    };
}

function h(e) {
    (0, a.mMO)(async () => {
        let { default: t } = await n.e("92837").then(n.bind(n, 480900));
        return (n) =>
            (0, r.jsx)(
                t,
                f(u({}, n), {
                    guildId: e,
                }),
            );
    }, _());
}

function m(e) {
    return (0, i.bG)([o.A], () => (0, s.N8)(o.A.getSortedRoles(e.id)), [e])
        ? (0, r.jsx)(a.Drp, {
              id: "guild-connection-roles",
              label: l.intl.string(l.t.ghtnss),
              icon: a.qYV,
              leadingAccessory: {
                  type: "icon",
                  icon: a.qYV,
              },
              action: () => h(e.id),
          })
        : null;
}
