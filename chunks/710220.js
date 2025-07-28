n.d(t, { Z: () => d });
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(518950),
    a = n(182294),
    l = n(388032),
    o = n(416820);
let c = (e) => (null != e.globalName ? e.globalName : e.username);
function d(e) {
    let { referrer: t, enablePremiumBrandRefresh: n } = e,
        { avatarSrc: d, eventHandlers: u } = (0, s.Z)({
            userId: null == t ? void 0 : t.id,
            size: n ? a.EF.SIZE_24 : a.EF.SIZE_32,
            animateOnHover: !0
        });
    return (0, i.jsx)('div', {
        className: o.attributionBannerContainerRebranded,
        children: (0, i.jsxs)('div', {
            className: o.attributionBannerContentApplicationHomeRebranded,
            children: [
                (0, i.jsx)('div', {
                    className: o.iconContainerApplicationHome,
                    children: (0, i.jsx)(
                        r.qEK,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        ((i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = i));
                                    }));
                            }
                            return e;
                        })(
                            {
                                className: o.icon,
                                src: d,
                                'aria-label': t.username,
                                size: a.EF.SIZE_32
                            },
                            u
                        )
                    )
                }),
                (0, i.jsx)(r.X6q, {
                    variant: 'heading-sm/normal',
                    className: o.textContainerRebranded,
                    color: 'header-primary',
                    children: l.intl.format(l.t.IqxblZ, { username: c(t) })
                })
            ]
        })
    });
}
