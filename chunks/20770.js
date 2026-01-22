n.d(t, { A: () => b }), n(938796);
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(732955),
    s = n(397927),
    o = n(943775),
    l = n(147441),
    c = n(511968),
    u = n(263063),
    d = n(71393),
    f = n(67480),
    p = n(163437),
    _ = n(185438),
    h = n(572566),
    m = n(652215),
    g = n(985018),
    E = n(551934);
function b(e) {
    var t;
    let {
            app: n,
            currentSubscription: a,
            currentListing: _,
            alternativeListings: m,
            navigateToHome: b,
            subscriptionGroup: O,
            renewalSkuId: A,
        } = e,
        v = (0, o.A)(n, 100),
        S = (0, p.PJ)(O.flags),
        I = S ? s.RR9 : s.nys,
        T = S ? g.intl.string(g.t["46YF2D"]) : g.intl.string(g.t.fFyGiA),
        C = null == (t = a.metadata) ? void 0 : t.application_subscription_guild_id,
        N = (0, i.bG)([d.A], () => (S && null != C ? d.A.getGuild(C) : void 0), [C, S]),
        R = (0, i.bG)([f.A], () => {
            if (null != A) return f.A.get(A);
        }, [A]),
        w = (0, h.Y)(a.currentPeriodEnd);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)("div", {
                className: E.wx,
                children: [
                    null != v &&
                        (0, r.jsx)(s._V3, {
                            src: v.href,
                            imageClassName: E.Z2,
                            width: 48,
                            height: 48,
                        }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: "heading-xl/semibold",
                                children: n.name,
                            }),
                            (0, r.jsxs)("div", {
                                className: E.p4,
                                children: [
                                    (0, r.jsxs)(s.Heading, {
                                        variant: "heading-md/normal",
                                        className: E.N4,
                                        children: [
                                            (0, r.jsx)(I, {
                                                size: "xs",
                                                color: "currentColor",
                                            }),
                                            " ",
                                            T,
                                        ],
                                    }),
                                    null != N &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(s.Text, {
                                                    variant: "text-md/normal",
                                                    children: "\u2022",
                                                }),
                                                (0, r.jsxs)("span", {
                                                    className: E.vP,
                                                    children: [
                                                        (0, r.jsx)(u.A, {
                                                            guild: N,
                                                            size: u.A.Sizes.SMOL,
                                                        }),
                                                        (0, r.jsx)(s.Heading, {
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
            (0, r.jsx)(l.A, {
                children: (e) =>
                    (0, r.jsxs)("div", {
                        className: E._B,
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: "text-md/normal",
                                children: g.intl.string(g.t["goe+hk"]),
                            }),
                            e &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(s.Text, {
                                            variant: "text-md/normal",
                                            children: g.intl.format(g.t["Q8qJ+5"], {}),
                                        }),
                                        (0, r.jsx)(s.Text, {
                                            variant: "text-md/normal",
                                            children: g.intl.format(g.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, r.jsx)(l.A.Toggle, {
                                text: e ? g.intl.string(g.t["1Rkq/E"]) : g.intl.string(g.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, r.jsxs)("div", {
                className: E.x0,
                children: [
                    (0, r.jsx)(c.A, {
                        storeListing: _,
                        className: E.o3,
                        cta: (0, r.jsxs)("div", {
                            className: E.cJ,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: g.intl.string(g.t.fHIpOY),
                                }),
                                null != R &&
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: g.intl.format(g.t["OQk+jr"], { endDate: w }),
                                    }),
                            ],
                        }),
                    }),
                    m.map((e) =>
                        e.skuId === A
                            ? (0, r.jsx)(
                                  c.A,
                                  {
                                      storeListing: e,
                                      cta: (0, r.jsx)(s.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: g.intl.format(g.t.nn88hB, { startDate: w }),
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
        { openModal: s } = (0, _.A)({
            analyticsLocation: m.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, r.jsx)(c.A, {
        storeListing: t,
        cta: (0, r.jsx)(a.$nd, {
            variant: "primary",
            size: "sm",
            text: g.intl.string(g.t["+KwmBt"]),
            onClick: s,
        }),
    });
}
