t.d(r, { default: () => P }), t(266796);
var n = t(200651),
    o = t(192379),
    s = t(481060),
    c = t(100527),
    i = t(906732),
    a = t(563132),
    l = t(409813),
    p = t(185139),
    u = t(263954),
    d = t(267642),
    j = t(678558),
    b = t(981631),
    h = t(388032),
    m = t(700817),
    x = t(20493);
function f(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {},
            n = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            n.forEach(function (r) {
                var n;
                (n = t[r]),
                    r in e
                        ? Object.defineProperty(e, r, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[r] = n);
            });
    }
    return e;
}
let g = 'premium-guild-subscription-upsell-modal-header';
function k(e) {
    let { title: r, subtitle: t, image: o } = e;
    return (0, n.jsxs)('div', {
        className: m.header,
        children: [
            (0, n.jsx)(s.X6q, {
                variant: 'heading-xl/semibold',
                id: g,
                color: 'header-primary',
                className: x.marginBottom8,
                children: r
            }),
            (0, n.jsx)(s.Text, {
                variant: 'text-md/normal',
                className: m.subtitleText,
                children: t
            }),
            o
        ]
    });
}
let y = (e) => {
        let { onClose: r, perks: t, perkIntro: o = h.NW.string(h.t.Dr3Goa), headerProps: c } = e;
        return (0, n.jsxs)('div', {
            className: m.wrapper,
            children: [
                (0, n.jsx)(s.olH, {
                    className: m.closeButton,
                    onClick: () => {
                        r();
                    }
                }),
                (0, n.jsx)(O, {
                    headerProps: c,
                    perkIntro: o
                }),
                (0, n.jsx)('div', {
                    className: m.perks,
                    children: t.map((e, r) => {
                        let { icon: t, iconClassName: o, description: s, color: c } = e;
                        return (0, n.jsx)(
                            u.Z,
                            {
                                icon: t,
                                iconClassName: o,
                                description: s,
                                color: c
                            },
                            r
                        );
                    })
                })
            ]
        });
    },
    O = (e) => {
        let { headerProps: r, perkIntro: c } = e;
        return (0, n.jsxs)(o.Fragment, {
            children: [
                null != r
                    ? (0, n.jsx)(k, f({}, r))
                    : (0, n.jsx)('img', {
                          className: m.heroImage,
                          src: t(438471),
                          alt: h.NW.string(h.t.PkcaAA)
                      }),
                (0, n.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    className: m.heading,
                    children: c
                })
            ]
        });
    },
    _ = (e) => {
        let { guild: r, targetBoostedGuildTier: t, onClose: o, analyticsSourceLocation: c } = e,
            i = {
                section: b.jXE.PREMIUM_GUILD_UPSELL_MODAL,
                object: b.qAy.BUTTON_CTA,
                objectType: null != t ? (0, d.ge)(t) : null
            };
        return (0, n.jsxs)(s.mzw, {
            className: m.footer,
            children: [
                (0, n.jsx)(s.zxk, {
                    size: s.zxk.Sizes.SMALL,
                    color: s.zxk.Colors.PRIMARY,
                    look: s.zxk.Looks.LINK,
                    onClick: () => {
                        o();
                    },
                    children: h.NW.string(h.t.cpT0Cg)
                }),
                (0, n.jsx)(j.Z, {
                    analyticsLocation: i,
                    analyticsSourceLocation: c,
                    guild: r,
                    targetBoostedGuildTier: t,
                    onClose: () => {
                        o();
                    }
                })
            ]
        });
    };
function P(e) {
    var r,
        t,
        { analyticsSourceLocation: o, guild: u, targetBoostedGuildTier: d, perks: j, perkIntro: b, headerProps: h, onClose: m } = e,
        x = (function (e, r) {
            if (null == e) return {};
            var t,
                n,
                o = (function (e, r) {
                    if (null == e) return {};
                    var t,
                        n,
                        o = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) (t = s[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o;
                })(e, r);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (n = 0; n < s.length; n++) (t = s[n]), !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        })(e, ['analyticsSourceLocation', 'guild', 'targetBoostedGuildTier', 'perks', 'perkIntro', 'headerProps', 'onClose']);
    let { analyticsLocations: k } = (0, i.ZP)(c.Z.ACTIVITY_DIRECTORY);
    return (0, n.jsx)(i.Gt, {
        value: k,
        children: (0, n.jsx)(a.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            children: (0, n.jsx)(
                s.Y0X,
                ((r = f({}, x)),
                (t = t =
                    {
                        'aria-labelledby': g,
                        children: (0, n.jsx)(p.Z, {
                            hideBreadcrumbs: !0,
                            body: (0, n.jsx)(y, {
                                onClose: m,
                                perks: j,
                                perkIntro: b,
                                headerProps: h
                            }),
                            footer: (0, n.jsx)(_, {
                                guild: u,
                                targetBoostedGuildTier: d,
                                onClose: m,
                                analyticsSourceLocation: o
                            }),
                            steps: [l.h8.PREMIUM_GUILD_UPSELL],
                            currentStep: l.h8.PREMIUM_GUILD_UPSELL
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
                    : (function (e, r) {
                          var t = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              t.push.apply(t, n);
                          }
                          return t;
                      })(Object(t)).forEach(function (e) {
                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
                      }),
                r)
            )
        })
    });
}
