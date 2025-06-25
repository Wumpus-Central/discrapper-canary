n.d(t, { Z: () => g });
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(518950),
    l = n(304480),
    a = n(182294),
    o = n(388032),
    c = n(416820);
function d(e) {
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
let u = (e) => (null != e.globalName ? e.globalName : e.username),
    m = (e) => {
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
                            d(
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
                        children: o.intl.format(o.t.IqxblZ, { username: u(t) })
                    })
                ]
            })
        });
    };
function g(e) {
    let { referrer: t } = e,
        n = l.Z.useExperiment({ location: 'UserTrialOfferAttribution' }),
        { avatarSrc: g, eventHandlers: p } = (0, s.Z)({
            user: t,
            size: a.EF.SIZE_32,
            animateOnHover: !0
        });
    return !0 === n.enabled
        ? (0, i.jsx)(m, {
              referrer: t,
              avatarSrc: g,
              eventHandlers: p
          })
        : (0, i.jsx)('div', {
              className: c.attributionBannerContainer,
              children: (0, i.jsxs)('div', {
                  className: c.attributionBannerContentApplicationHome,
                  children: [
                      (0, i.jsx)('div', {
                          className: c.iconContainerApplicationHome,
                          children: (0, i.jsx)(
                              r.qEK,
                              d(
                                  {
                                      className: c.icon,
                                      src: g,
                                      'aria-label': t.username,
                                      size: a.EF.SIZE_32
                                  },
                                  p
                              )
                          )
                      }),
                      (0, i.jsx)(r.X6q, {
                          variant: 'heading-lg/medium',
                          className: c.textContainer,
                          color: 'header-primary',
                          children: o.intl.format(o.t.IqxblZ, { username: u(t) })
                      })
                  ]
              })
          });
}
