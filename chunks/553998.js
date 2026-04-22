s.d(t, { default: () => y });
var i = s(627968),
    a = s(64700),
    r = s(534514),
    n = s(834730),
    o = s(935462),
    l = s(821609),
    p = s(793574),
    c = s(688810),
    d = s(285871),
    h = s(156312),
    u = s(166532),
    m = s(632638),
    _ = s(901017),
    g = s(473145),
    x = s(721923),
    v = s(652215),
    b = s(985018),
    f = s(637744),
    S = s(818050);
let j = "premium-guild-subscription-upsell-modal-header";
function A(e) {
    let { title: t, subtitle: s, image: a } = e;
    return (0, i.jsxs)("div", {
        className: f.wx,
        children: [
            (0, i.jsx)(r.D, {
                variant: "heading-xl/semibold",
                id: j,
                color: "text-strong",
                className: S.QB,
                children: t,
            }),
            (0, i.jsx)(n.E, { variant: "text-md/normal", className: f.o4, children: s }),
            a,
        ],
    });
}
let N = (e) => {
        let { onClose: t, perks: s, perkIntro: a = b.intl.string(b.t.Dr3GoS), headerProps: r } = e;
        return (0, i.jsxs)("div", {
            className: f.iE,
            children: [
                (0, i.jsx)(o.s_, {
                    "data-migration-pending": !0,
                    className: f.b,
                    onClick: () => {
                        t();
                    },
                }),
                (0, i.jsx)(C, { headerProps: r, perkIntro: a }),
                (0, i.jsx)("div", {
                    className: f.md,
                    children: s.map((e, t) => {
                        let { icon: s, iconClassName: a, description: r, color: n } = e;
                        return (0, i.jsx)(_.A, { icon: s, iconClassName: a, description: r, color: n }, t);
                    }),
                }),
            ],
        });
    },
    C = (e) => {
        let { headerProps: t, perkIntro: r } = e;
        return (0, i.jsxs)(a.Fragment, {
            children: [
                null != t
                    ? (0, i.jsx)(A, { ...t })
                    : (0, i.jsx)("img", { className: f.c8, src: s(69522), alt: b.intl.string(b.t.PkcaAH) }),
                (0, i.jsx)(n.E, { variant: "text-md/normal", className: f.R_, children: r }),
            ],
        });
    },
    k = (e) => {
        let { guild: t, targetBoostedGuildTier: s, onClose: a, analyticsSourceLocation: r } = e,
            n = {
                section: v.JJy.PREMIUM_GUILD_UPSELL_MODAL,
                object: v.ZSU.BUTTON_CTA,
                objectType: null != s ? (0, g.k1)(s) : null,
            };
        return (0, i.jsxs)(o.jl, {
            className: f.qr,
            "data-migration-pending": !0,
            children: [
                (0, i.jsx)(l.$, {
                    variant: "secondary",
                    size: "sm",
                    text: b.intl.string(b.t.cpT0Cq),
                    onClick: () => {
                        a();
                    },
                }),
                (0, i.jsx)(x.A, {
                    analyticsLocation: n,
                    analyticsSourceLocation: r,
                    guild: t,
                    targetBoostedGuildTier: s,
                    onClose: () => {
                        a();
                    },
                }),
            ],
        });
    };
function y(e) {
    let {
            analyticsSourceLocation: t,
            guild: s,
            targetBoostedGuildTier: a,
            perks: r,
            perkIntro: n,
            headerProps: l,
            onClose: _,
            ...g
        } = e,
        { analyticsLocations: x } = (0, c.Ay)(p.A.ACTIVITY_DIRECTORY);
    return (0, i.jsx)(c.f5, {
        value: x,
        children: (0, i.jsx)(h.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            unifiedCheckoutFlow: d.C.GUILD_BOOST_CHECKOUT,
            children: (0, i.jsx)(o.EO, {
                ...g,
                "aria-labelledby": j,
                "data-migration-pending": !0,
                parentComponent: "GuildBoostingUpsellModal",
                children: (0, i.jsx)(m.A, {
                    hideBreadcrumbs: !0,
                    body: (0, i.jsx)(N, { onClose: _, perks: r, perkIntro: n, headerProps: l }),
                    footer: (0, i.jsx)(k, {
                        guild: s,
                        targetBoostedGuildTier: a,
                        onClose: _,
                        analyticsSourceLocation: t,
                    }),
                    steps: [u.pn.PREMIUM_GUILD_UPSELL],
                    currentStep: u.pn.PREMIUM_GUILD_UPSELL,
                }),
            }),
        }),
    });
}
