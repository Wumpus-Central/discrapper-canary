r.d(s, { default: () => I });
var t = r(627968),
    n = r(64700),
    a = r(397927),
    i = r(793574),
    l = r(688810),
    o = r(156312),
    c = r(166532),
    d = r(632638),
    p = r(901017),
    u = r(473145),
    x = r(721923),
    m = r(652215),
    _ = r(985018),
    j = r(942609),
    h = r(473169);
let g = "premium-guild-subscription-upsell-modal-header";
function k(e) {
    let { title: s, subtitle: r, image: n } = e;
    return (0, t.jsxs)("div", {
        className: j.wx,
        children: [
            (0, t.jsx)(a.Heading, {
                variant: "heading-xl/semibold",
                id: g,
                color: "text-strong",
                className: h.QB,
                children: s,
            }),
            (0, t.jsx)(a.Text, { variant: "text-md/normal", className: j.o4, children: r }),
            n,
        ],
    });
}
let b = (e) => {
        let { onClose: s, perks: r, perkIntro: n = _.intl.string(_.t.Dr3GoS), headerProps: i } = e;
        return (0, t.jsxs)("div", {
            className: j.iE,
            children: [
                (0, t.jsx)(a.s_y, {
                    "data-migration-pending": !0,
                    className: j.b,
                    onClick: () => {
                        s();
                    },
                }),
                (0, t.jsx)(v, { headerProps: i, perkIntro: n }),
                (0, t.jsx)("div", {
                    className: j.md,
                    children: r.map((e, s) => {
                        let { icon: r, iconClassName: n, description: a, color: i } = e;
                        return (0, t.jsx)(p.A, { icon: r, iconClassName: n, description: a, color: i }, s);
                    }),
                }),
            ],
        });
    },
    v = (e) => {
        let { headerProps: s, perkIntro: i } = e;
        return (0, t.jsxs)(n.Fragment, {
            children: [
                null != s
                    ? (0, t.jsx)(k, { ...s })
                    : (0, t.jsx)("img", { className: j.c8, src: r(69522), alt: _.intl.string(_.t.PkcaAH) }),
                (0, t.jsx)(a.Text, { variant: "text-md/normal", className: j.R_, children: i }),
            ],
        });
    },
    C = (e) => {
        let { guild: s, targetBoostedGuildTier: r, onClose: n, analyticsSourceLocation: i } = e,
            l = {
                section: m.JJy.PREMIUM_GUILD_UPSELL_MODAL,
                object: m.ZSU.BUTTON_CTA,
                objectType: null != r ? (0, u.k1)(r) : null,
            };
        return (0, t.jsxs)(a.jlY, {
            className: j.qr,
            "data-migration-pending": !0,
            children: [
                (0, t.jsx)(a.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: _.intl.string(_.t.cpT0Cq),
                    onClick: () => {
                        n();
                    },
                }),
                (0, t.jsx)(x.A, {
                    analyticsLocation: l,
                    analyticsSourceLocation: i,
                    guild: s,
                    targetBoostedGuildTier: r,
                    onClose: () => {
                        n();
                    },
                }),
            ],
        });
    };
function I(e) {
    let {
            analyticsSourceLocation: s,
            guild: r,
            targetBoostedGuildTier: n,
            perks: p,
            perkIntro: u,
            headerProps: x,
            onClose: m,
            ..._
        } = e,
        { analyticsLocations: j } = (0, l.Ay)(i.A.ACTIVITY_DIRECTORY);
    return (0, t.jsx)(l.f5, {
        value: j,
        children: (0, t.jsx)(o.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            children: (0, t.jsx)(a.EOs, {
                ..._,
                "aria-labelledby": g,
                "data-migration-pending": !0,
                parentComponent: "GuildBoostingUpsellModal",
                children: (0, t.jsx)(d.A, {
                    hideBreadcrumbs: !0,
                    body: (0, t.jsx)(b, { onClose: m, perks: p, perkIntro: u, headerProps: x }),
                    footer: (0, t.jsx)(C, {
                        guild: r,
                        targetBoostedGuildTier: n,
                        onClose: m,
                        analyticsSourceLocation: s,
                    }),
                    steps: [c.pn.PREMIUM_GUILD_UPSELL],
                    currentStep: c.pn.PREMIUM_GUILD_UPSELL,
                }),
            }),
        }),
    });
}
