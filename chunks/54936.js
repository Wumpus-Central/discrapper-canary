n.d(t, { n: () => h }), n(411104);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    l = n(481060),
    o = n(910111),
    s = n(732559),
    c = n(723851),
    u = n(981631),
    d = n(388032),
    p = n(516417);
let m = {
    [u.TaA.WINDOWS]: {
        icon: c.Z,
        getLabel: () => d.NW.string(d.t['0/xHFB'])
    },
    [u.TaA.MACOS]: {
        icon: s.Z,
        getLabel: () => d.NW.string(d.t.E4u4n5)
    },
    [u.TaA.LINUX]: {
        icon: o.Z,
        getLabel: () => d.NW.string(d.t.tcawo6)
    }
};
function f(e) {
    let { operatingSystem: t, className: n } = e,
        i = m[t];
    if (null == i) throw Error('Unexpected operating system: '.concat(t));
    let a = i.icon;
    return (0, r.jsx)(l.ua7, {
        text: i.getLabel(),
        children: (e) => {
            var t, i;
            return (0, r.jsx)(
                a,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, e)),
                (i = i = { className: n }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                t)
            );
        }
    });
}
let h = (e) => {
    let { systems: t, className: n, iconClassName: i } = e;
    return (0, r.jsx)('div', {
        className: a()(p.OSSection, n),
        children: t.map((e) =>
            (0, r.jsx)(
                f,
                {
                    operatingSystem: e,
                    className: a()(p.purchaseUnitOperatingSystem, i)
                },
                e
            )
        )
    });
};
