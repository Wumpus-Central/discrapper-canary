n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(834023),
    a = n(667202),
    o = n(648613),
    s = n(864218),
    l = n(388032);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            }));
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function _(e, t) {
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
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let h = (e) => {
    var { gradientColor: t, title: n, subtitle: c, onClose: d, onSecondaryClick: p, videoSrc: h, loopAt: m } = e,
        g = f(e, ['gradientColor', 'title', 'subtitle', 'onClose', 'onSecondaryClick', 'videoSrc', 'loopAt']);
    let { subscribeButtonProps: E } = (0, s.F)({ defaultTextOverride: l.intl.string(l.t.pj0XBA) });
    return (0, r.jsx)(o.Z, {
        children: (e) => {
            let { onClick: o } = e;
            return (0, r.jsx)(
                a.I,
                u(
                    {
                        size: 'md',
                        onClose: async () => {
                            await d();
                        },
                        gradientColor: t,
                        graphic: {
                            type: i.tK.LOOPING_VIDEO,
                            props: {
                                src: h,
                                loopAt: m
                            }
                        },
                        title: n,
                        subtitle: c,
                        actions: [
                            {
                                variant: 'secondary',
                                text: l.intl.string(l.t.ZnqyZ2),
                                onClick: p
                            },
                            _(u({}, E), { onClick: o })
                        ]
                    },
                    g
                )
            );
        }
    });
};
