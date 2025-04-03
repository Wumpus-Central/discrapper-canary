n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(518950),
    a = n(182294),
    l = n(388032),
    o = n(416820),
    c = n(144343);
function d(e) {
    let { referrer: t, isMarketingPageV2Enabled: n } = e,
        d = (e) => (null != e.globalName ? e.globalName : e.username),
        { avatarSrc: u, eventHandlers: m } = (0, s.Z)({
            user: t,
            size: a.EF.SIZE_32,
            animateOnHover: !0
        });
    return (0, r.jsx)('div', {
        className: o.attributionBannerContainer,
        children: (0, r.jsxs)('div', {
            className: n ? o.attributionBannerContentV2 : o.attributionBannerContent,
            children: [
                (0, r.jsx)('div', {
                    className: n ? o.iconContainerV2 : o.iconContainer,
                    children: (0, r.jsx)(
                        i.qEK,
                        (function (e) {
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
                        })(
                            {
                                className: o.icon,
                                src: u,
                                'aria-label': t.username,
                                size: a.EF.SIZE_32
                            },
                            m
                        )
                    )
                }),
                n
                    ? (0, r.jsx)(i.X6q, {
                          variant: 'heading-lg/medium',
                          className: o.textContainer,
                          children: l.NW.format(l.t.IqxblZ, { username: d(t) })
                      })
                    : (0, r.jsx)(i.Text, {
                          variant: 'text-sm/normal',
                          className: o.textContainer,
                          children: l.NW.format(l.t.IqxblZ, { username: d(t) })
                      }),
                !n &&
                    (0, r.jsx)('img', {
                        src: c,
                        alt: '',
                        className: o.attributionIcon
                    })
            ]
        })
    });
}
