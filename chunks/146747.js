s.d(r, { default: () => b });
var t = s(200651),
    n = s(192379),
    o = s(481060),
    i = s(100527),
    a = s(906732),
    c = s(563132),
    l = s(409813),
    d = s(185139),
    p = s(263954),
    u = s(267642),
    x = s(678558),
    h = s(981631),
    m = s(388032),
    k = s(316798),
    _ = s(232186);
let j = 'premium-guild-subscription-upsell-modal-header';
function I(e) {
    let { title: r, subtitle: s, image: n } = e;
    return (0, t.jsxs)('div', {
        className: k.header,
        children: [
            (0, t.jsx)(o.X6q, {
                variant: 'heading-xl/semibold',
                id: j,
                color: 'header-primary',
                className: _.marginBottom8,
                children: r
            }),
            (0, t.jsx)(o.Text, {
                variant: 'text-md/normal',
                className: k.subtitleText,
                children: s
            }),
            n
        ]
    });
}
let g = (e) => {
        let { onClose: r, perks: s, perkIntro: n = m.intl.string(m.t.Dr3Goa), headerProps: i } = e;
        return (0, t.jsxs)('div', {
            className: k.wrapper,
            children: [
                (0, t.jsx)(o.olH, {
                    className: k.closeButton,
                    onClick: () => {
                        r();
                    }
                }),
                (0, t.jsx)(C, {
                    headerProps: i,
                    perkIntro: n
                }),
                (0, t.jsx)('div', {
                    className: k.perks,
                    children: s.map((e, r) => {
                        let { icon: s, iconClassName: n, description: o, color: i } = e;
                        return (0, t.jsx)(
                            p.Z,
                            {
                                icon: s,
                                iconClassName: n,
                                description: o,
                                color: i
                            },
                            r
                        );
                    })
                })
            ]
        });
    },
    C = (e) => {
        let { headerProps: r, perkIntro: i } = e;
        return (0, t.jsxs)(n.Fragment, {
            children: [
                null != r
                    ? (0, t.jsx)(I, { ...r })
                    : (0, t.jsx)('img', {
                          className: k.heroImage,
                          src: s(438471),
                          alt: m.intl.string(m.t.PkcaAA)
                      }),
                (0, t.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    className: k.heading,
                    children: i
                })
            ]
        });
    },
    L = (e) => {
        let { guild: r, targetBoostedGuildTier: s, onClose: n, analyticsSourceLocation: i } = e,
            a = {
                section: h.jXE.PREMIUM_GUILD_UPSELL_MODAL,
                object: h.qAy.BUTTON_CTA,
                objectType: null != s ? (0, u.ge)(s) : null
            };
        return (0, t.jsxs)(o.mzw, {
            className: k.footer,
            children: [
                (0, t.jsx)(o.zxk, {
                    size: o.zxk.Sizes.SMALL,
                    color: o.zxk.Colors.PRIMARY,
                    look: o.zxk.Looks.LINK,
                    onClick: () => {
                        n();
                    },
                    children: m.intl.string(m.t.cpT0Cg)
                }),
                (0, t.jsx)(x.Z, {
                    analyticsLocation: a,
                    analyticsSourceLocation: i,
                    guild: r,
                    targetBoostedGuildTier: s,
                    onClose: () => {
                        n();
                    }
                })
            ]
        });
    };
function b(e) {
    let { analyticsSourceLocation: r, guild: s, targetBoostedGuildTier: n, perks: p, perkIntro: u, headerProps: x, onClose: h, ...m } = e,
        { analyticsLocations: k } = (0, a.ZP)(i.Z.ACTIVITY_DIRECTORY);
    return (0, t.jsx)(a.Gt, {
        value: k,
        children: (0, t.jsx)(c.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            children: (0, t.jsx)(o.Y0X, {
                ...m,
                'aria-labelledby': j,
                children: (0, t.jsx)(d.Z, {
                    hideBreadcrumbs: !0,
                    body: (0, t.jsx)(g, {
                        onClose: h,
                        perks: p,
                        perkIntro: u,
                        headerProps: x
                    }),
                    footer: (0, t.jsx)(L, {
                        guild: s,
                        targetBoostedGuildTier: n,
                        onClose: h,
                        analyticsSourceLocation: r
                    }),
                    steps: [l.h8.PREMIUM_GUILD_UPSELL],
                    currentStep: l.h8.PREMIUM_GUILD_UPSELL
                })
            })
        })
    });
}
