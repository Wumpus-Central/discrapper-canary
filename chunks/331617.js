n.d(s, { default: () => v });
var t = n(627968),
    i = n(64700),
    a = n(534514),
    r = n(834730),
    l = n(935462),
    o = n(821609),
    c = n(793574),
    d = n(688810),
    u = n(75304),
    p = n(171835),
    m = n(166532),
    x = n(632638),
    j = n(901017),
    h = n(473145),
    g = n(944304),
    C = n(652215),
    _ = n(375708),
    b = n(637744),
    L = n(818050);
let U = "premium-guild-subscription-upsell-modal-header";
function k(e) {
    let { title: s, subtitle: n, image: i } = e;
    return (0, t.jsxs)("div", {
        className: b.wx,
        children: [
            (0, t.jsx)(a.D, {
                variant: "heading-xl/semibold",
                id: U,
                color: "text-strong",
                className: L.QB,
                children: s,
            }),
            (0, t.jsx)(r.E, { variant: "text-md/normal", className: b.o4, children: n }),
            i,
        ],
    });
}
function I(e) {
    let { onClose: s, perks: n, perkIntro: i = _.intl.string(_.t.Dr3GoS), headerProps: a } = e;
    return (0, t.jsxs)("div", {
        className: b.iE,
        children: [
            (0, t.jsx)(l.s_, {
                "data-migration-pending": !0,
                className: b.b,
                onClick: () => {
                    s();
                },
            }),
            (0, t.jsx)(E, { headerProps: a, perkIntro: i }),
            (0, t.jsx)("div", {
                className: b.md,
                children: n.map((e, s) => {
                    let { icon: n, iconClassName: i, description: a, color: r } = e;
                    return (0, t.jsx)(j.A, { icon: n, iconClassName: i, description: a, color: r }, s);
                }),
            }),
        ],
    });
}
function E(e) {
    let { headerProps: s, perkIntro: a } = e;
    return (0, t.jsxs)(i.Fragment, {
        children: [
            null != s
                ? (0, t.jsx)(k, { ...s })
                : (0, t.jsx)("img", { className: b.c8, src: n(69522), alt: _.intl.string(_.t.PkcaAH) }),
            (0, t.jsx)(r.E, { variant: "text-md/normal", className: b.R_, children: a }),
        ],
    });
}
function T(e) {
    let { guild: s, targetBoostedGuildTier: n, onClose: i, analyticsSourceLocation: a } = e,
        r = {
            section: C.JJy.PREMIUM_GUILD_UPSELL_MODAL,
            object: C.ZSU.BUTTON_CTA,
            objectType: null != n ? (0, h.k1)(n) : null,
        };
    return (0, t.jsxs)(l.jl, {
        className: b.qr,
        "data-migration-pending": !0,
        children: [
            (0, t.jsx)(o.$, {
                variant: "secondary",
                size: "sm",
                text: _.intl.string(_.t.cpT0Cq),
                onClick: () => {
                    i();
                },
            }),
            (0, t.jsx)(g.A, {
                analyticsLocation: r,
                analyticsSourceLocation: a,
                guild: s,
                targetBoostedGuildTier: n,
                onClose: () => {
                    i();
                },
            }),
        ],
    });
}
function v(e) {
    let {
            analyticsSourceLocation: s,
            guild: n,
            targetBoostedGuildTier: i,
            perks: a,
            perkIntro: r,
            headerProps: o,
            onClose: j,
            ...h
        } = e,
        { analyticsLocations: g } = (0, d.Ay)(c.A.ACTIVITY_DIRECTORY);
    return (0, t.jsx)(d.f5, {
        value: g,
        children: (0, t.jsx)(p.M, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            unifiedCheckoutFlow: u.C.GUILD_BOOST_CHECKOUT,
            children: (0, t.jsx)(l.EO, {
                ...h,
                "aria-labelledby": U,
                "data-migration-pending": !0,
                parentComponent: "GuildBoostingUpsellModal",
                children: (0, t.jsx)(x.A, {
                    hideBreadcrumbs: !0,
                    body: (0, t.jsx)(I, { onClose: j, perks: a, perkIntro: r, headerProps: o }),
                    footer: (0, t.jsx)(T, {
                        guild: n,
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
