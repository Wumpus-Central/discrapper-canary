n.r(r),
    n.d(r, {
        default: function () {
            return E;
        }
    });
var l = n(200651),
    t = n(192379),
    o = n(481060),
    s = n(100527),
    a = n(906732),
    c = n(563132),
    i = n(409813),
    d = n(185139),
    u = n(263954),
    p = n(267642),
    m = n(678558),
    f = n(981631),
    h = n(388032),
    _ = n(316798),
    x = n(232186);
let N = 'premium-guild-subscription-upsell-modal-header';
function S(e) {
    let { title: r, subtitle: n, image: t } = e;
    return (0, l.jsxs)('div', {
        className: _.header,
        children: [
            (0, l.jsx)(o.Heading, {
                variant: 'heading-xl/semibold',
                id: N,
                color: 'header-primary',
                className: x.marginBottom8,
                children: r
            }),
            (0, l.jsx)(o.Text, {
                variant: 'text-md/normal',
                className: _.subtitleText,
                children: n
            }),
            t
        ]
    });
}
let y = (e) => {
        let { onClose: r, perks: n, perkIntro: t = h.intl.string(h.t.Dr3Goa), headerProps: s } = e;
        return (0, l.jsxs)('div', {
            className: _.wrapper,
            children: [
                (0, l.jsx)(o.ModalCloseButton, {
                    className: _.closeButton,
                    onClick: () => {
                        r();
                    }
                }),
                (0, l.jsx)(b, {
                    headerProps: s,
                    perkIntro: t
                }),
                (0, l.jsx)('div', {
                    className: _.perks,
                    children: n.map((e, r) => {
                        let { icon: n, iconClassName: t, description: o, color: s } = e;
                        return (0, l.jsx)(
                            u.Z,
                            {
                                icon: n,
                                iconClassName: t,
                                description: o,
                                color: s
                            },
                            r
                        );
                    })
                })
            ]
        });
    },
    b = (e) => {
        let { headerProps: r, perkIntro: s } = e;
        return (0, l.jsxs)(t.Fragment, {
            children: [
                null != r
                    ? (0, l.jsx)(S, { ...r })
                    : (0, l.jsx)('img', {
                          className: _.heroImage,
                          src: n(438471),
                          alt: h.intl.string(h.t.PkcaAA)
                      }),
                (0, l.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    className: _.heading,
                    children: s
                })
            ]
        });
    },
    v = (e) => {
        let { guild: r, targetBoostedGuildTier: n, onClose: t, analyticsSourceLocation: s } = e,
            a = {
                section: f.jXE.PREMIUM_GUILD_UPSELL_MODAL,
                object: f.qAy.BUTTON_CTA,
                objectType: null != n ? (0, p.ge)(n) : null
            };
        return (0, l.jsxs)(o.ModalFooter, {
            className: _.footer,
            children: [
                (0, l.jsx)(o.Button, {
                    size: o.Button.Sizes.SMALL,
                    color: o.Button.Colors.PRIMARY,
                    look: o.Button.Looks.LINK,
                    onClick: () => {
                        t();
                    },
                    children: h.intl.string(h.t.cpT0Cg)
                }),
                (0, l.jsx)(m.Z, {
                    analyticsLocation: a,
                    analyticsSourceLocation: s,
                    guild: r,
                    targetBoostedGuildTier: n,
                    onClose: () => {
                        t();
                    }
                })
            ]
        });
    };
function E(e) {
    let { analyticsSourceLocation: r, guild: n, targetBoostedGuildTier: t, perks: u, perkIntro: p, headerProps: m, onClose: f, ...h } = e,
        { analyticsLocations: _ } = (0, a.ZP)(s.Z.ACTIVITY_DIRECTORY);
    return (0, l.jsx)(a.Gt, {
        value: _,
        children: (0, l.jsx)(c.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            children: (0, l.jsx)(o.ModalRoot, {
                ...h,
                'aria-labelledby': N,
                children: (0, l.jsx)(d.Z, {
                    hideBreadcrumbs: !0,
                    body: (0, l.jsx)(y, {
                        onClose: f,
                        perks: u,
                        perkIntro: p,
                        headerProps: m
                    }),
                    footer: (0, l.jsx)(v, {
                        guild: n,
                        targetBoostedGuildTier: t,
                        onClose: f,
                        analyticsSourceLocation: r
                    }),
                    steps: [i.h8.PREMIUM_GUILD_UPSELL],
                    currentStep: i.h8.PREMIUM_GUILD_UPSELL
                })
            })
        })
    });
}
