r.d(t, {
    default: () => P,
}),
    r(228524);
var n = r(627968),
    o = r(64700),
    s = r(397927),
    i = r(793574),
    l = r(688810),
    c = r(156312),
    a = r(166532),
    p = r(632638),
    d = r(901017),
    u = r(473145),
    b = r(721923),
    j = r(652215),
    m = r(985018),
    f = r(942609),
    y = r(473169);

function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
let x = "premium-guild-subscription-upsell-modal-header";

function O(e) {
    let { title: t, subtitle: r, image: o } = e;
    return (0, n.jsxs)("div", {
        className: f.wx,
        children: [
            (0, n.jsx)(s.Heading, {
                variant: "heading-xl/semibold",
                id: x,
                color: "text-strong",
                className: y.QB,
                children: t,
            }),
            (0, n.jsx)(s.Text, {
                variant: "text-md/normal",
                className: f.o4,
                children: r,
            }),
            o,
        ],
    });
}
let h = (e) => {
        let { onClose: t, perks: r, perkIntro: o = m.intl.string(m.t.Dr3GoS), headerProps: i } = e;
        return (0, n.jsxs)("div", {
            className: f.iE,
            children: [
                (0, n.jsx)(s.s_y, {
                    "data-migration-pending": !0,
                    className: f.b,
                    onClick: () => {
                        t();
                    },
                }),
                (0, n.jsx)(_, {
                    headerProps: i,
                    perkIntro: o,
                }),
                (0, n.jsx)("div", {
                    className: f.md,
                    children: r.map((e, t) => {
                        let { icon: r, iconClassName: o, description: s, color: i } = e;
                        return (0, n.jsx)(
                            d.A,
                            {
                                icon: r,
                                iconClassName: o,
                                description: s,
                                color: i,
                            },
                            t,
                        );
                    }),
                }),
            ],
        });
    },
    _ = (e) => {
        let { headerProps: t, perkIntro: i } = e;
        return (0, n.jsxs)(o.Fragment, {
            children: [
                null != t
                    ? (0, n.jsx)(O, g({}, t))
                    : (0, n.jsx)("img", {
                          className: f.c8,
                          src: r(69522),
                          alt: m.intl.string(m.t.PkcaAH),
                      }),
                (0, n.jsx)(s.Text, {
                    variant: "text-md/normal",
                    className: f.R_,
                    children: i,
                }),
            ],
        });
    },
    v = (e) => {
        let { guild: t, targetBoostedGuildTier: r, onClose: o, analyticsSourceLocation: i } = e,
            l = {
                section: j.JJy.PREMIUM_GUILD_UPSELL_MODAL,
                object: j.ZSU.BUTTON_CTA,
                objectType: null != r ? (0, u.k1)(r) : null,
            };
        return (0, n.jsxs)(s.jlY, {
            className: f.qr,
            "data-migration-pending": !0,
            children: [
                (0, n.jsx)(s.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: m.intl.string(m.t.cpT0Cq),
                    onClick: () => {
                        o();
                    },
                }),
                (0, n.jsx)(b.A, {
                    analyticsLocation: l,
                    analyticsSourceLocation: i,
                    guild: t,
                    targetBoostedGuildTier: r,
                    onClose: () => {
                        o();
                    },
                }),
            ],
        });
    };

function P(e) {
    var t, r;
    let {
            analyticsSourceLocation: o,
            guild: d,
            targetBoostedGuildTier: u,
            perks: b,
            perkIntro: j,
            headerProps: m,
            onClose: f,
        } = e,
        y = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o,
                s = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
                return s;
            }
            if (
                ((s = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        s = Object.getOwnPropertyNames(e);
                    for (n = 0; n < s.length; n++)
                        (r = s[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                    return o;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
            return s;
        })(e, [
            "analyticsSourceLocation",
            "guild",
            "targetBoostedGuildTier",
            "perks",
            "perkIntro",
            "headerProps",
            "onClose",
        ]),
        { analyticsLocations: O } = (0, l.Ay)(i.A.ACTIVITY_DIRECTORY);
    return (0, n.jsx)(l.f5, {
        value: O,
        children: (0, n.jsx)(c.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            children: (0, n.jsx)(
                s.EOs,
                ((t = g({}, y)),
                (r = r =
                    {
                        "aria-labelledby": x,
                        "data-migration-pending": !0,
                        parentComponent: "GuildBoostingUpsellModal",
                        children: (0, n.jsx)(p.A, {
                            hideBreadcrumbs: !0,
                            body: (0, n.jsx)(h, {
                                onClose: f,
                                perks: b,
                                perkIntro: j,
                                headerProps: m,
                            }),
                            footer: (0, n.jsx)(v, {
                                guild: d,
                                targetBoostedGuildTier: u,
                                onClose: f,
                                analyticsSourceLocation: o,
                            }),
                            steps: [a.pn.PREMIUM_GUILD_UPSELL],
                            currentStep: a.pn.PREMIUM_GUILD_UPSELL,
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                t),
            ),
        }),
    });
}
