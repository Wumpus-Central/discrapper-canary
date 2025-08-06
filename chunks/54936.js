n.d(t, { n: () => b }), n(415506);
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(910111),
    l = n(732559),
    c = n(723851),
    u = n(981631),
    d = n(388032),
    f = n(516417);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = {
    [u.TaA.WINDOWS]: {
        icon: c.Z,
        getLabel: () => d.intl.string(d.t["0/xHFB"]),
    },
    [u.TaA.MACOS]: {
        icon: l.Z,
        getLabel: () => d.intl.string(d.t.E4u4n5),
    },
    [u.TaA.LINUX]: {
        icon: s.Z,
        getLabel: () => d.intl.string(d.t.tcawo6),
    },
};
function E(e) {
    let { operatingSystem: t, className: n } = e,
        i = g[t];
    if (null == i) throw Error("Unexpected operating system: ".concat(t));
    let o = i.icon;
    return (0, r.jsx)(a.ua7, {
        text: i.getLabel(),
        children: (e) => (0, r.jsx)(o, m(p({}, e), { className: n })),
    });
}
let b = (e) => {
    let { systems: t, className: n, iconClassName: i } = e;
    return (0, r.jsx)("div", {
        className: o()(f.OSSection, n),
        children: t.map((e) =>
            (0, r.jsx)(
                E,
                {
                    operatingSystem: e,
                    className: o()(f.purchaseUnitOperatingSystem, i),
                },
                e,
            ),
        ),
    });
};
