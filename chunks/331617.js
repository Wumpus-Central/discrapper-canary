n.d(s, { default: () => T });
var t = n(477900),
    a = n(582128),
    i = n(935462),
    l = n(297264),
    r = n(834730),
    o = n(821609),
    c = n(793574),
    d = n(688810),
    u = n(901017),
    m = n(473145),
    p = n(944304),
    x = n(652215),
    j = n(375708),
    g = n(544891),
    h = n(221851);
let C = "premium-guild-subscription-upsell-modal-header";
function b(e) {
    let { title: s, subtitle: n, image: a } = e;
    return (0, t.jsxs)("div", {
        className: g.wx,
        children: [
            (0, t.jsx)(l.D, {
                variant: "heading-xl/semibold",
                id: C,
                color: "text-strong",
                className: h.QB,
                children: s,
            }),
            (0, t.jsx)(r.E, { variant: "text-md/normal", className: g.o4, children: n }),
            a,
        ],
    });
}
function k(e) {
    let { onClose: s, perks: n, perkIntro: a = j.intl.string(j.t.Dr3GoS), headerProps: l } = e;
    return (0, t.jsxs)("div", {
        className: g.iE,
        children: [
            (0, t.jsx)(i.s_, {
                "data-migration-pending": !0,
                className: g.b,
                onClick: () => {
                    s();
                },
            }),
            (0, t.jsx)(N, { headerProps: l, perkIntro: a }),
            (0, t.jsx)("div", {
                className: g.md,
                children: n.map((e, s) => {
                    let { icon: n, iconClassName: a, description: i, color: l } = e;
                    return (0, t.jsx)(u.A, { icon: n, iconClassName: a, description: i, color: l }, s);
                }),
            }),
        ],
    });
}
function N(e) {
    let { headerProps: s, perkIntro: i } = e;
    return (0, t.jsxs)(a.Fragment, {
        children: [
            null != s
                ? (0, t.jsx)(b, { ...s })
                : (0, t.jsx)("img", { className: g.c8, src: n(69522), alt: j.intl.string(j.t.PkcaAH) }),
            (0, t.jsx)(r.E, { variant: "text-md/normal", className: g.R_, children: i }),
        ],
    });
}
function v(e) {
    let { guild: s, targetBoostedGuildTier: n, onClose: a, analyticsSourceLocation: l } = e,
        r = {
            section: x.JJy.PREMIUM_GUILD_UPSELL_MODAL,
            object: x.ZSU.BUTTON_CTA,
            objectType: null != n ? (0, m.k1)(n) : null,
        };
    return (0, t.jsxs)(i.jl, {
        className: g.qr,
        "data-migration-pending": !0,
        children: [
            (0, t.jsx)(o.$, {
                variant: "secondary",
                size: "sm",
                text: j.intl.string(j.t.cpT0Cq),
                onClick: () => {
                    a();
                },
            }),
            (0, t.jsx)(p.A, {
                analyticsLocation: r,
                analyticsSourceLocation: l,
                guild: s,
                targetBoostedGuildTier: n,
                onClose: () => {
                    a();
                },
            }),
        ],
    });
}
function T(e) {
    let {
            analyticsSourceLocation: s,
            guild: n,
            targetBoostedGuildTier: a,
            perks: l,
            perkIntro: r,
            headerProps: o,
            onClose: u,
            ...m
        } = e,
        { analyticsLocations: p } = (0, d.Ay)(c.A.ACTIVITY_DIRECTORY);
    return (0, t.jsx)(d.f5, {
        value: p,
        children: (0, t.jsxs)(i.EO, {
            ...m,
            "aria-labelledby": C,
            "data-migration-pending": !0,
            parentComponent: "GuildBoostingUpsellModal",
            children: [
                (0, t.jsx)(k, { onClose: u, perks: l, perkIntro: r, headerProps: o }),
                (0, t.jsx)(v, { guild: n, targetBoostedGuildTier: a, onClose: u, analyticsSourceLocation: s }),
            ],
        }),
    });
}
