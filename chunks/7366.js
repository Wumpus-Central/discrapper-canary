n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(834023),
    a = n(667202),
    o = n(648613),
    s = n(38273),
    l = n(717975),
    c = n(388032);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            }));
    }
    return e;
}
function _(e, t) {
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
function f(e, t) {
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
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let m = (e) => {
    var { gradientColor: t, title: n, subtitle: u, onClose: _, onSecondaryClick: h, videoSrc: m, loopAt: g } = e,
        E = p(e, ['gradientColor', 'title', 'subtitle', 'onClose', 'onSecondaryClick', 'videoSrc', 'loopAt']);
    let { subscribeButtonProps: b, subscriptionTier: y } = (0, s.G)({ defaultTextOverride: c.intl.string(c.t.pj0XBA) }),
        O = (0, l.Z)();
    return (0, r.jsx)(o.Z, {
        subscriptionTier: y,
        children: (e) => {
            let { onClick: o } = e;
            return (0, r.jsx)(
                a.I,
                d(
                    {
                        size: 'md',
                        onClose: async () => {
                            await _();
                        },
                        gradientColor: t,
                        graphic: {
                            type: i.tK.LOOPING_VIDEO,
                            props: {
                                src: m,
                                loopAt: g
                            }
                        },
                        title: n,
                        subtitle: u,
                        actions: [
                            {
                                variant: 'secondary',
                                text: c.intl.string(c.t.ZnqyZ2),
                                onClick: h
                            },
                            f(d({}, b), { onClick: o })
                        ]
                    },
                    null != O && { badge: { text: O } },
                    E
                )
            );
        }
    });
};
