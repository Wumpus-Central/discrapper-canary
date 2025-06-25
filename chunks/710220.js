n.d(t, { Z: () => p });
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(518950),
    l = n(304480),
    a = n(182294),
    o = n(388032),
    c = n(416820),
    d = n(144343);
function u(e) {
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
}
let m = (e) => (null != e.globalName ? e.globalName : e.username),
    g = (e) => {
        let { referrer: t, avatarSrc: n, eventHandlers: s } = e;
        return (0, i.jsx)('div', {
            className: c.attributionBannerContainerRebranded,
            children: (0, i.jsxs)('div', {
                className: c.attributionBannerContentApplicationHomeRebranded,
                children: [
                    (0, i.jsx)('div', {
                        className: c.iconContainerApplicationHome,
                        children: (0, i.jsx)(
                            r.qEK,
                            u(
                                {
                                    className: c.icon,
                                    src: n,
                                    'aria-label': t.username,
                                    size: a.EF.SIZE_32
                                },
                                s
                            )
                        )
                    }),
                    (0, i.jsx)(r.X6q, {
                        variant: 'heading-sm/normal',
                        className: c.textContainerRebranded,
                        color: 'header-primary',
                        children: o.intl.format(o.t.IqxblZ, { username: m(t) })
                    })
                ]
            })
        });
    };
function p(e) {
    let { referrer: t, isApplicationHome: n } = e,
        p = l.Z.useExperiment({ location: 'UserTrialOfferAttribution' }),
        { avatarSrc: h, eventHandlers: f } = (0, s.Z)({
            user: t,
            size: a.EF.SIZE_32,
            animateOnHover: !0
        });
    return !0 === p.enabled && n
        ? (0, i.jsx)(g, {
              referrer: t,
              avatarSrc: h,
              eventHandlers: f
          })
        : (0, i.jsx)('div', {
              className: c.attributionBannerContainer,
              children: (0, i.jsxs)('div', {
                  className: n ? c.attributionBannerContentApplicationHome : c.attributionBannerContent,
                  children: [
                      (0, i.jsx)('div', {
                          className: n ? c.iconContainerApplicationHome : c.iconContainer,
                          children: (0, i.jsx)(
                              r.qEK,
                              u(
                                  {
                                      className: c.icon,
                                      src: h,
                                      'aria-label': t.username,
                                      size: a.EF.SIZE_32
                                  },
                                  f
                              )
                          )
                      }),
                      n
                          ? (0, i.jsx)(r.X6q, {
                                variant: 'heading-lg/medium',
                                className: c.textContainer,
                                color: 'header-primary',
                                children: o.intl.format(o.t.IqxblZ, { username: m(t) })
                            })
                          : (0, i.jsx)(r.Text, {
                                variant: 'text-sm/normal',
                                className: c.textContainer,
                                color: 'header-primary',
                                children: o.intl.format(o.t.IqxblZ, { username: m(t) })
                            }),
                      !n &&
                          (0, i.jsx)('img', {
                              src: d,
                              alt: '',
                              className: c.attributionIcon
                          })
                  ]
              })
          });
}
