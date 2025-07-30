r.d(t, { Z: () => s });
var n = r(255367),
    o = r(526167),
    a = r(7366),
    c = r(388032),
    l = r(849188),
    i = r(269369);
let s = (e) => {
    var { handleLearnMore: t } = e,
        r = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) ((r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]));
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++) ((r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
            }
            return o;
        })(e, ['handleLearnMore']);
    let s = (0, o.rO)() ? l.Z : i.Z;
    return (0, n.jsx)(
        a.Z,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        ((n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n));
                    }));
            }
            return e;
        })(
            {
                gradientColor: 'nitro-pink',
                title: c.intl.string(c.t.ewxv3N),
                subtitle: c.intl.string(c.t.qlsCDA),
                videoSrc: s,
                loopAt: 5,
                onSecondaryClick: t
            },
            r
        )
    );
};
