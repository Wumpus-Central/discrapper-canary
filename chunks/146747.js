n.r(r),
    n.d(r, {
        default: function () {
            return E;
        }
    });
var l = n(200651),
    o = n(192379),
    t = n(481060),
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
    let { title: r, subtitle: n, image: o } = e;
    return (0, l.jsxs)('div', {
        className: _.header,
        children: [
            (0, l.jsx)(t.Heading, {
                variant: 'heading-xl/semibold',
                id: N,
                color: 'header-primary',
                className: x.marginBottom8,
                children: r
            }),
            (0, l.jsx)(t.Text, {
                variant: 'text-md/normal',
                className: _.subtitleText,
                children: n
            }),
            o
        ]
    });
}
let y = (e) => {
        let { onClose: r, perks: n, perkIntro: o = h.intl.string(h.t.Dr3Goa), headerProps: s } = e;
        return (0, l.jsxs)('div', {
            className: _.wrapper,
            children: [
                (0, l.jsx)(t.ModalCloseButton, {
                    className: _.closeButton,
                    onClick: () => {
                        r();
                    }
                }),
                (0, l.jsx)(b, {
                    headerProps: s,
                    perkIntro: o
                }),
                (0, l.jsx)('div', {
                    className: _.perks,
                    children: n.map((e, r) => {
                        let { icon: n, iconClassName: o, description: t, color: s } = e;
                        return (0, l.jsx)(
                            u.Z,
                            {
                                icon: n,
                                iconClassName: o,
                                description: t,
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
        return (0, l.jsxs)(o.Fragment, {
            children: [
                null != r
                    ? (0, l.jsx)(S, { ...r })
                    : (0, l.jsx)('img', {
                          className: _.heroImage,
                          src: n(438471),
                          alt: h.intl.string(h.t.PkcaAA)
                      }),
                (0, l.jsx)(t.Text, {
                    variant: 'text-md/normal',
                    className: _.heading,
                    children: s
                })
            ]
        });
    },
    v = (e) => {
        let { guild: r, targetBoostedGuildTier: n, onClose: o, analyticsSourceLocation: s } = e,
            a = {
                section: f.jXE.PREMIUM_GUILD_UPSELL_MODAL,
                object: f.qAy.BUTTON_CTA,
                objectType: null != n ? (0, p.ge)(n) : null
            };
        return (0, l.jsxs)(t.ModalFooter, {
            className: _.footer,
            children: [
                (0, l.jsx)(t.Button, {
                    size: t.Button.Sizes.SMALL,
                    color: t.Button.Colors.PRIMARY,
                    look: t.Button.Looks.LINK,
                    onClick: () => {
                        o();
                    },
                    children: h.intl.string(h.t.cpT0Cg)
                }),
                (0, l.jsx)(m.Z, {
                    analyticsLocation: a,
                    analyticsSourceLocation: s,
                    guild: r,
                    targetBoostedGuildTier: n,
                    onClose: () => {
                        o();
                    }
                })
            ]
        });
    };
function E(e) {
    let { analyticsSourceLocation: r, guild: n, targetBoostedGuildTier: o, perks: u, perkIntro: p, headerProps: m, onClose: f, ...h } = e,
        { analyticsLocations: _ } = (0, a.ZP)(s.Z.ACTIVITY_DIRECTORY);
    return (0, l.jsx)(a.Gt, {
        value: _,
        children: (0, l.jsx)(c.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            children: (0, l.jsx)(t.ModalRoot, {
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
                        targetBoostedGuildTier: o,
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
