n.d(t, { A: () => C }), n(938796);
var i = n(627968);
n(64700);
var s = n(311907),
    r = n(732955),
    a = n(397927),
    l = n(943775),
    o = n(147441),
    c = n(511968),
    d = n(263063),
    u = n(71393),
    _ = n(67480),
    m = n(163437),
    A = n(185438),
    g = n(572566),
    E = n(652215),
    h = n(985018),
    p = n(551934);
function C(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: r,
            alternativeListings: A,
            navigateToHome: E,
            subscriptionGroup: C,
            renewalSkuId: T,
        } = e,
        I = (0, l.A)(t, 100),
        S = (0, m.PJ)(C.flags),
        f = S ? a.RR9 : a.nys,
        N = S ? h.intl.string(h.t["46YF2D"]) : h.intl.string(h.t.fFyGiA),
        b = n.metadata?.application_subscription_guild_id,
        R = (0, s.bG)([u.A], () => (S && null != b ? u.A.getGuild(b) : void 0), [b, S]),
        v = (0, s.bG)([_.A], () => {
            if (null != T) return _.A.get(T);
        }, [T]),
        O = (0, g.Y)(n.currentPeriodEnd);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsxs)("div", {
                className: p.wx,
                children: [
                    null != I && (0, i.jsx)(a._V3, { src: I.href, imageClassName: p.Z2, width: 48, height: 48 }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(a.Heading, { variant: "heading-xl/semibold", children: t.name }),
                            (0, i.jsxs)("div", {
                                className: p.p4,
                                children: [
                                    (0, i.jsxs)(a.Heading, {
                                        variant: "heading-md/normal",
                                        className: p.N4,
                                        children: [(0, i.jsx)(f, { size: "xs", color: "currentColor" }), " ", N],
                                    }),
                                    null != R &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(a.Text, { variant: "text-md/normal", children: "•" }),
                                                (0, i.jsxs)("span", {
                                                    className: p.vP,
                                                    children: [
                                                        (0, i.jsx)(d.A, { guild: R, size: d.A.Sizes.SMOL }),
                                                        (0, i.jsx)(a.Heading, {
                                                            variant: "heading-md/semibold",
                                                            color: "text-muted",
                                                            children: h.intl.format(h.t["7ZD8p1"], {
                                                                guildName: R.name,
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
            (0, i.jsx)(o.A, {
                children: (e) =>
                    (0, i.jsxs)("div", {
                        className: p._B,
                        children: [
                            (0, i.jsx)(a.Text, { variant: "text-md/normal", children: h.intl.string(h.t["goe+hk"]) }),
                            e &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(a.Text, {
                                            variant: "text-md/normal",
                                            children: h.intl.format(h.t["Q8qJ+5"], {}),
                                        }),
                                        (0, i.jsx)(a.Text, {
                                            variant: "text-md/normal",
                                            children: h.intl.format(h.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, i.jsx)(o.A.Toggle, {
                                text: e ? h.intl.string(h.t["1Rkq/E"]) : h.intl.string(h.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, i.jsxs)("div", {
                className: p.x0,
                children: [
                    (0, i.jsx)(c.A, {
                        storeListing: r,
                        className: p.o3,
                        cta: (0, i.jsxs)("div", {
                            className: p.cJ,
                            children: [
                                (0, i.jsx)(a.Text, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: h.intl.string(h.t.fHIpOY),
                                }),
                                null != v &&
                                    (0, i.jsx)(a.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: h.intl.format(h.t["OQk+jr"], { endDate: O }),
                                    }),
                            ],
                        }),
                    }),
                    A.map((e) =>
                        e.skuId === T
                            ? (0, i.jsx)(
                                  c.A,
                                  {
                                      storeListing: e,
                                      cta: (0, i.jsx)(a.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: h.intl.format(h.t.nn88hB, { startDate: O }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, i.jsx)(x, { storeListing: e, guildId: b, navigateToHome: E }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function x(e) {
    let { storeListing: t, guildId: n, navigateToHome: s } = e,
        { openModal: a } = (0, A.A)({
            analyticsLocation: E.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: s,
        });
    return (0, i.jsx)(c.A, {
        storeListing: t,
        cta: (0, i.jsx)(r.$nd, { variant: "primary", size: "sm", text: h.intl.string(h.t["+KwmBt"]), onClick: a }),
    });
}
