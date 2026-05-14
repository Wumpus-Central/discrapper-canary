t.d(s, { default: () => T });
var n = t(627968),
    i = t(64700),
    a = t(534514),
    r = t(834730),
    l = t(935462),
    o = t(821609),
    c = t(793574),
    d = t(688810),
    u = t(75304),
    p = t(834252),
    m = t(166532),
    x = t(632638),
    j = t(901017),
    h = t(473145),
    g = t(944304),
    C = t(652215),
    _ = t(375708),
    b = t(637744),
    L = t(818050);
let U = "premium-guild-subscription-upsell-modal-header";
function k(e) {
    let { title: s, subtitle: t, image: i } = e;
    return (0, n.jsxs)("div", {
        className: b.wx,
        children: [
            (0, n.jsx)(a.D, {
                variant: "heading-xl/semibold",
                id: U,
                color: "text-strong",
                className: L.QB,
                children: s,
            }),
            (0, n.jsx)(r.E, { variant: "text-md/normal", className: b.o4, children: t }),
            i,
        ],
    });
}
let I = (e) => {
        let { onClose: s, perks: t, perkIntro: i = _.intl.string(_.t.Dr3GoS), headerProps: a } = e;
        return (0, n.jsxs)("div", {
            className: b.iE,
            children: [
                (0, n.jsx)(l.s_, {
                    "data-migration-pending": !0,
                    className: b.b,
                    onClick: () => {
                        s();
                    },
                }),
                (0, n.jsx)(v, { headerProps: a, perkIntro: i }),
                (0, n.jsx)("div", {
                    className: b.md,
                    children: t.map((e, s) => {
                        let { icon: t, iconClassName: i, description: a, color: r } = e;
                        return (0, n.jsx)(j.A, { icon: t, iconClassName: i, description: a, color: r }, s);
                    }),
                }),
            ],
        });
    },
    v = (e) => {
        let { headerProps: s, perkIntro: a } = e;
        return (0, n.jsxs)(i.Fragment, {
            children: [
                null != s
                    ? (0, n.jsx)(k, { ...s })
                    : (0, n.jsx)("img", { className: b.c8, src: t(69522), alt: _.intl.string(_.t.PkcaAH) }),
                (0, n.jsx)(r.E, { variant: "text-md/normal", className: b.R_, children: a }),
            ],
        });
    },
    E = (e) => {
        let { guild: s, targetBoostedGuildTier: t, onClose: i, analyticsSourceLocation: a } = e,
            r = {
                section: C.JJy.PREMIUM_GUILD_UPSELL_MODAL,
                object: C.ZSU.BUTTON_CTA,
                objectType: null != t ? (0, h.k1)(t) : null,
            };
        return (0, n.jsxs)(l.jl, {
            className: b.qr,
            "data-migration-pending": !0,
            children: [
                (0, n.jsx)(o.$, {
                    variant: "secondary",
                    size: "sm",
                    text: _.intl.string(_.t.cpT0Cq),
                    onClick: () => {
                        i();
                    },
                }),
                (0, n.jsx)(g.A, {
                    analyticsLocation: r,
                    analyticsSourceLocation: a,
                    guild: s,
                    targetBoostedGuildTier: t,
                    onClose: () => {
                        i();
                    },
                }),
            ],
        });
    };
function T(e) {
    let {
            analyticsSourceLocation: s,
            guild: t,
            targetBoostedGuildTier: i,
            perks: a,
            perkIntro: r,
            headerProps: o,
            onClose: j,
            ...h
        } = e,
        { analyticsLocations: g } = (0, d.Ay)(c.A.ACTIVITY_DIRECTORY);
    return (0, n.jsx)(d.f5, {
        value: g,
        children: (0, n.jsx)(p.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            unifiedCheckoutFlow: u.C.GUILD_BOOST_CHECKOUT,
            children: (0, n.jsx)(l.EO, {
                ...h,
                "aria-labelledby": U,
                "data-migration-pending": !0,
                parentComponent: "GuildBoostingUpsellModal",
                children: (0, n.jsx)(x.A, {
                    hideBreadcrumbs: !0,
                    body: (0, n.jsx)(I, { onClose: j, perks: a, perkIntro: r, headerProps: o }),
                    footer: (0, n.jsx)(E, {
                        guild: t,
                        targetBoostedGuildTier: i,
                        onClose: j,
                        analyticsSourceLocation: s,
                    }),
                    steps: [m.pn.PREMIUM_GUILD_UPSELL],
                    currentStep: m.pn.PREMIUM_GUILD_UPSELL,
                }),
            }),
        }),
    });
}
