t.d(s, { default: () => N });
var r = t(627968),
    n = t(64700),
    a = t(397927),
    i = t(793574),
    l = t(688810),
    o = t(285871),
    c = t(156312),
    d = t(166532),
    p = t(632638),
    u = t(901017),
    x = t(473145),
    _ = t(721923),
    m = t(652215),
    j = t(985018),
    h = t(637744),
    g = t(818050);
let C = "premium-guild-subscription-upsell-modal-header";
function k(e) {
    let { title: s, subtitle: t, image: n } = e;
    return (0, r.jsxs)("div", {
        className: h.wx,
        children: [
            (0, r.jsx)(a.Heading, {
                variant: "heading-xl/semibold",
                id: C,
                color: "text-strong",
                className: g.QB,
                children: s,
            }),
            (0, r.jsx)(a.Text, { variant: "text-md/normal", className: h.o4, children: t }),
            n,
        ],
    });
}
let b = (e) => {
        let { onClose: s, perks: t, perkIntro: n = j.intl.string(j.t.Dr3GoS), headerProps: i } = e;
        return (0, r.jsxs)("div", {
            className: h.iE,
            children: [
                (0, r.jsx)(a.s_y, {
                    "data-migration-pending": !0,
                    className: h.b,
                    onClick: () => {
                        s();
                    },
                }),
                (0, r.jsx)(v, { headerProps: i, perkIntro: n }),
                (0, r.jsx)("div", {
                    className: h.md,
                    children: t.map((e, s) => {
                        let { icon: t, iconClassName: n, description: a, color: i } = e;
                        return (0, r.jsx)(u.A, { icon: t, iconClassName: n, description: a, color: i }, s);
                    }),
                }),
            ],
        });
    },
    v = (e) => {
        let { headerProps: s, perkIntro: i } = e;
        return (0, r.jsxs)(n.Fragment, {
            children: [
                null != s
                    ? (0, r.jsx)(k, { ...s })
                    : (0, r.jsx)("img", { className: h.c8, src: t(69522), alt: j.intl.string(j.t.PkcaAH) }),
                (0, r.jsx)(a.Text, { variant: "text-md/normal", className: h.R_, children: i }),
            ],
        });
    },
    I = (e) => {
        let { guild: s, targetBoostedGuildTier: t, onClose: n, analyticsSourceLocation: i } = e,
            l = {
                section: m.JJy.PREMIUM_GUILD_UPSELL_MODAL,
                object: m.ZSU.BUTTON_CTA,
                objectType: null != t ? (0, x.k1)(t) : null,
            };
        return (0, r.jsxs)(a.jlY, {
            className: h.qr,
            "data-migration-pending": !0,
            children: [
                (0, r.jsx)(a.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: j.intl.string(j.t.cpT0Cq),
                    onClick: () => {
                        n();
                    },
                }),
                (0, r.jsx)(_.A, {
                    analyticsLocation: l,
                    analyticsSourceLocation: i,
                    guild: s,
                    targetBoostedGuildTier: t,
                    onClose: () => {
                        n();
                    },
                }),
            ],
        });
    };
function N(e) {
    let {
            analyticsSourceLocation: s,
            guild: t,
            targetBoostedGuildTier: n,
            perks: u,
            perkIntro: x,
            headerProps: _,
            onClose: m,
            ...j
        } = e,
        { analyticsLocations: h } = (0, l.Ay)(i.A.ACTIVITY_DIRECTORY);
    return (0, r.jsx)(l.f5, {
        value: h,
        children: (0, r.jsx)(c.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            unifiedCheckoutFlow: o.C.GUILD_BOOST_CHECKOUT,
            children: (0, r.jsx)(a.EOs, {
                ...j,
                "aria-labelledby": C,
                "data-migration-pending": !0,
                parentComponent: "GuildBoostingUpsellModal",
                children: (0, r.jsx)(p.A, {
                    hideBreadcrumbs: !0,
                    body: (0, r.jsx)(b, { onClose: m, perks: u, perkIntro: x, headerProps: _ }),
                    footer: (0, r.jsx)(I, {
                        guild: t,
                        targetBoostedGuildTier: n,
                        onClose: m,
                        analyticsSourceLocation: s,
                    }),
                    steps: [d.pn.PREMIUM_GUILD_UPSELL],
                    currentStep: d.pn.PREMIUM_GUILD_UPSELL,
                }),
            }),
        }),
    });
}
