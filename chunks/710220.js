n.d(t, { Z: () => h });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(481060),
    l = n(518950),
    o = n(304480),
    c = n(182294),
    d = n(388032),
    u = n(416820);
function m(e) {
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
}
let p = (e) => (null != e.globalName ? e.globalName : e.username),
    g = (e) => {
        let { referrer: t, avatarSrc: n, eventHandlers: r } = e;
        return (0, i.jsx)('div', {
            className: u.attributionBannerContainerRebranded,
            children: (0, i.jsxs)('div', {
                className: u.attributionBannerContentApplicationHomeRebranded,
                children: [
                    (0, i.jsx)('div', {
                        className: u.iconContainerApplicationHome,
                        children: (0, i.jsx)(
                            a.qEK,
                            m(
                                {
                                    className: u.icon,
                                    src: n,
                                    'aria-label': t.username,
                                    size: c.EF.SIZE_32
                                },
                                r
                            )
                        )
                    }),
                    (0, i.jsx)(a.X6q, {
                        variant: 'heading-sm/normal',
                        className: u.textContainerRebranded,
                        color: 'header-primary',
                        children: d.intl.format(d.t.IqxblZ, { username: p(t) })
                    })
                ]
            })
        });
    };
function h(e) {
    let { referrer: t, enablePremiumBrandRefresh: n } = e,
        r = o.Z.useExperiment({ location: 'UserTrialOfferAttribution' }),
        { avatarSrc: h, eventHandlers: f } = (0, l.Z)({
            userId: null == t ? void 0 : t.id,
            size: n ? c.EF.SIZE_24 : c.EF.SIZE_32,
            animateOnHover: !0
        });
    if (!0 === r.enabled)
        return (0, i.jsx)(g, {
            referrer: t,
            avatarSrc: h,
            eventHandlers: f
        });
    let b = d.intl.format(d.t.IqxblZ, { username: p(t) });
    return (0, i.jsxs)('div', {
        className: s()(n ? u.premiumBrandRefreshContainer : u.attributionBannerContainer),
        children: [
            (0, i.jsx)('div', {
                className: u.iconContainerApplicationHome,
                children: (0, i.jsx)(
                    a.qEK,
                    m(
                        {
                            className: u.icon,
                            src: h,
                            'aria-label': t.username,
                            size: n ? c.EF.SIZE_24 : c.EF.SIZE_32
                        },
                        f
                    )
                )
            }),
            n
                ? (0, i.jsx)(a.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-primary',
                      className: u.textContainer,
                      children: b
                  })
                : (0, i.jsx)(a.X6q, {
                      variant: 'heading-lg/medium',
                      className: u.textContainer,
                      color: 'header-primary',
                      children: b
                  })
        ]
    });
}
