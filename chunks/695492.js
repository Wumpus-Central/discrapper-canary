n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(607187),
    a = n(112560),
    s = n(981631),
    l = n(388032),
    c = n(967747),
    u = n(800350);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    let { channel: t, guild: d, width: _, inPopout: h } = e;
    return (0, r.jsx)(o.Z, {
        className: c.root,
        children: (0, r.jsx)(a.Z, {
            artURL: u,
            size: (0, a.L)(_),
            header: l.intl.string(l.t.O4FiWl),
            onCTAClick: () =>
                (0, i.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("7654"), n.e("49049"), n.e("36264")]).then(
                            n.bind(n, 560114),
                        );
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                p(f({}, n), {
                                    guild: d,
                                    channel: t,
                                    source: s.t4x.CHANNEL_CALL,
                                }),
                            );
                    },
                    { contextKey: h ? i.u1M : i.z1l },
                ),
            callToAction: l.intl.string(l.t.VINpSE),
        }),
    });
}
