n.d(t, { Z: () => d });
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(518950),
    l = n(182294),
    a = n(388032),
    o = n(416820),
    c = n(144343);
function d(e) {
    let { referrer: t, isMarketingPageV2Enabled: n } = e,
        d = (e) => (null != e.globalName ? e.globalName : e.username),
        { avatarSrc: u, eventHandlers: m } = (0, s.Z)({
            user: t,
            size: l.EF.SIZE_32,
            animateOnHover: !0
        });
    return (0, i.jsx)('div', {
        className: o.attributionBannerContainer,
        children: (0, i.jsxs)('div', {
            className: n ? o.attributionBannerContentV2 : o.attributionBannerContent,
            children: [
                (0, i.jsx)('div', {
                    className: n ? o.iconContainerV2 : o.iconContainer,
                    children: (0, i.jsx)(
                        r.qEK,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })(
                            {
                                className: o.icon,
                                src: u,
                                'aria-label': t.username,
                                size: l.EF.SIZE_32
                            },
                            m
                        )
                    )
                }),
                n
                    ? (0, i.jsx)(r.X6q, {
                          variant: 'heading-lg/medium',
                          className: o.textContainer,
                          children: a.intl.format(a.t.IqxblZ, { username: d(t) })
                      })
                    : (0, i.jsx)(r.Text, {
                          variant: 'text-sm/normal',
                          className: o.textContainer,
                          children: a.intl.format(a.t.IqxblZ, { username: d(t) })
                      }),
                !n &&
                    (0, i.jsx)('img', {
                        src: c,
                        alt: '',
                        className: o.attributionIcon
                    })
            ]
        })
    });
}
