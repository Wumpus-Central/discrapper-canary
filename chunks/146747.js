r.d(t, { default: () => k }), r(953529);
var n = r(54381),
    o = r(473749),
    a = r(481060),
    s = r(100527),
    i = r(906732),
    l = r(563132),
    c = r(409813),
    u = r(185139),
    p = r(263954),
    d = r(267642),
    b = r(678558),
    g = r(981631),
    m = r(388032),
    j = r(261203),
    h = r(478411);
function f(e) {
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
function y(e) {
    let { title: t, subtitle: r, image: o } = e;
    return (0, n.jsxs)("div", {
        className: j.header,
        children: [
            (0, n.jsx)(a.Heading, {
                variant: "heading-xl/semibold",
                id: x,
                color: "text-strong",
                className: h.marginBottom8,
                children: t,
            }),
            (0, n.jsx)(a.Text, {
                variant: "text-md/normal",
                className: j.subtitleText,
                children: r,
            }),
            o,
        ],
    });
}
let O = (e) => {
        let { onClose: t, perks: r, perkIntro: o = m.intl.string(m.t.Dr3GoS), headerProps: s } = e;
        return (0, n.jsxs)("div", {
            className: j.wrapper,
            children: [
                (0, n.jsx)(a.olH, {
                    "data-migration-pending": !0,
                    className: j.closeButton,
                    onClick: () => {
                        t();
                    },
                }),
                (0, n.jsx)(P, {
                    headerProps: s,
                    perkIntro: o,
                }),
                (0, n.jsx)("div", {
                    className: j.perks,
                    children: r.map((e, t) => {
                        let { icon: r, iconClassName: o, description: a, color: s } = e;
                        return (0, n.jsx)(
                            p.Z,
                            {
                                icon: r,
                                iconClassName: o,
                                description: a,
                                color: s,
                            },
                            t,
                        );
                    }),
                }),
            ],
        });
    },
    P = (e) => {
        let { headerProps: t, perkIntro: s } = e;
        return (0, n.jsxs)(o.Fragment, {
            children: [
                null != t
                    ? (0, n.jsx)(y, f({}, t))
                    : (0, n.jsx)("img", {
                          className: j.heroImage,
                          src: r(438471),
                          alt: m.intl.string(m.t.PkcaAH),
                      }),
                (0, n.jsx)(a.Text, {
                    variant: "text-md/normal",
                    className: j.heading,
                    children: s,
                }),
            ],
        });
    },
    v = (e) => {
        let { guild: t, targetBoostedGuildTier: r, onClose: o, analyticsSourceLocation: s } = e,
            i = {
                section: g.jXE.PREMIUM_GUILD_UPSELL_MODAL,
                object: g.qAy.BUTTON_CTA,
                objectType: null != r ? (0, d.ge)(r) : null,
            };
        return (0, n.jsxs)(a.mzw, {
            className: j.footer,
            "data-migration-pending": !0,
            children: [
                (0, n.jsx)(a.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: m.intl.string(m.t.cpT0Cq),
                    onClick: () => {
                        o();
                    },
                }),
                (0, n.jsx)(b.Z, {
                    analyticsLocation: i,
                    analyticsSourceLocation: s,
                    guild: t,
                    targetBoostedGuildTier: r,
                    onClose: () => {
                        o();
                    },
                }),
            ],
        });
    };
function k(e) {
    var t,
        r,
        {
            analyticsSourceLocation: o,
            guild: p,
            targetBoostedGuildTier: d,
            perks: b,
            perkIntro: g,
            headerProps: m,
            onClose: j,
        } = e,
        h = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                    (r = a[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, [
            "analyticsSourceLocation",
            "guild",
            "targetBoostedGuildTier",
            "perks",
            "perkIntro",
            "headerProps",
            "onClose",
        ]);
    let { analyticsLocations: y } = (0, i.ZP)(s.Z.ACTIVITY_DIRECTORY);
    return (0, n.jsx)(i.Gt, {
        value: y,
        children: (0, n.jsx)(l.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            children: (0, n.jsx)(
                a.Y0X,
                ((t = f({}, h)),
                (r = r =
                    {
                        "aria-labelledby": x,
                        "data-migration-pending": !0,
                        parentComponent: "GuildBoostingUpsellModal",
                        children: (0, n.jsx)(u.Z, {
                            hideBreadcrumbs: !0,
                            body: (0, n.jsx)(O, {
                                onClose: j,
                                perks: b,
                                perkIntro: g,
                                headerProps: m,
                            }),
                            footer: (0, n.jsx)(v, {
                                guild: p,
                                targetBoostedGuildTier: d,
                                onClose: j,
                                analyticsSourceLocation: o,
                            }),
                            steps: [c.h8.PREMIUM_GUILD_UPSELL],
                            currentStep: c.h8.PREMIUM_GUILD_UPSELL,
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
