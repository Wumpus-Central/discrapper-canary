n.d(t, { Z: () => b }), n(997841);
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(159691),
    o = n(481060),
    s = n(601911),
    l = n(887818),
    c = n(824856),
    u = n(565138),
    d = n(430824),
    f = n(55563),
    _ = n(171246),
    p = n(263519),
    h = n(63487),
    m = n(981631),
    g = n(388032),
    E = n(691259);
function b(e) {
    var t;
    let {
            app: n,
            currentSubscription: a,
            currentListing: p,
            alternativeListings: m,
            navigateToHome: b,
            subscriptionGroup: O,
            renewalSkuId: v,
        } = e,
        I = (0, s.y)(n, 100),
        T = (0, _.KK)(O.flags),
        S = T ? o.QTo : o.tBG,
        A = T ? g.intl.string(g.t["46YF2D"]) : g.intl.string(g.t.fFyGiA),
        C = null == (t = a.metadata) ? void 0 : t.application_subscription_guild_id,
        N = (0, i.e7)([d.Z], () => (T && null != C ? d.Z.getGuild(C) : void 0), [C, T]),
        R = (0, i.e7)([f.Z], () => {
            if (null != v) return f.Z.get(v);
        }, [v]),
        P = (0, h.p)(a.currentPeriodEnd);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)("div", {
                className: E.header,
                children: [
                    null != I &&
                        (0, r.jsx)(o.Eep, {
                            src: I.href,
                            imageClassName: E.appIcon,
                            width: 48,
                            height: 48,
                        }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(o.Heading, {
                                variant: "heading-xl/semibold",
                                children: n.name,
                            }),
                            (0, r.jsxs)("div", {
                                className: E.subInfo,
                                children: [
                                    (0, r.jsxs)(o.Heading, {
                                        variant: "heading-md/normal",
                                        className: E.subInfoType,
                                        children: [
                                            (0, r.jsx)(S, {
                                                size: "xs",
                                                color: "currentColor",
                                            }),
                                            " ",
                                            A,
                                        ],
                                    }),
                                    null != N &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(o.Text, {
                                                    variant: "text-md/normal",
                                                    children: "\u2022",
                                                }),
                                                (0, r.jsxs)("span", {
                                                    className: E.guildSubscription,
                                                    children: [
                                                        (0, r.jsx)(u.Z, {
                                                            guild: N,
                                                            size: u.Z.Sizes.SMOL,
                                                        }),
                                                        (0, r.jsx)(o.Heading, {
                                                            variant: "heading-md/semibold",
                                                            color: "text-muted",
                                                            children: g.intl.format(g.t["7ZD8p1"], {
                                                                guildName: N.name,
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(l.Z, {
                children: (e) =>
                    (0, r.jsxs)("div", {
                        className: E.planNotice,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: "text-md/normal",
                                children: g.intl.string(g.t["goe+hk"]),
                            }),
                            e &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(o.Text, {
                                            variant: "text-md/normal",
                                            children: g.intl.format(g.t["Q8qJ+5"], {}),
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            variant: "text-md/normal",
                                            children: g.intl.format(g.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, r.jsx)(l.Z.Toggle, {
                                text: e ? g.intl.string(g.t["1Rkq/E"]) : g.intl.string(g.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, r.jsxs)("div", {
                className: E.subscriptions,
                children: [
                    (0, r.jsx)(c.Z, {
                        storeListing: p,
                        className: E.activeSubscriptionCard,
                        cta: (0, r.jsxs)("div", {
                            className: E.activeSubscriptionCTA,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: g.intl.string(g.t.fHIpOY),
                                }),
                                null != R &&
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-secondary",
                                        children: g.intl.format(g.t["OQk+jr"], { endDate: P }),
                                    }),
                            ],
                        }),
                    }),
                    m.map((e) =>
                        e.skuId === v
                            ? (0, r.jsx)(
                                  c.Z,
                                  {
                                      storeListing: e,
                                      cta: (0, r.jsx)(o.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-secondary",
                                          children: g.intl.format(g.t.nn88hB, { startDate: P }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, r.jsx)(
                                  y,
                                  {
                                      storeListing: e,
                                      guildId: C,
                                      navigateToHome: b,
                                  },
                                  e.id,
                              ),
                    ),
                ],
            }),
        ],
    });
}
function y(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: o } = (0, p.Z)({
            analyticsLocation: m.Sbl.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, r.jsx)(c.Z, {
        storeListing: t,
        cta: (0, r.jsx)(a.zxk, {
            variant: "primary",
            size: "sm",
            text: g.intl.string(g.t["+KwmBt"]),
            onClick: o,
        }),
    });
}
