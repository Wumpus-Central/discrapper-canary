n.d(t, { A: () => E }), n(938796);
var i = n(627968);
n(64700);
var s = n(311907),
    a = n(732955),
    l = n(397927),
    r = n(943775),
    o = n(147441),
    c = n(511968),
    d = n(263063),
    u = n(71393),
    _ = n(67480),
    m = n(163437),
    A = n(185438),
    g = n(572566),
    h = n(652215),
    x = n(985018),
    p = n(103224);
function E(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: a,
            alternativeListings: A,
            navigateToHome: h,
            subscriptionGroup: E,
            renewalSkuId: T,
        } = e,
        S = (0, r.A)(t, 100),
        I = (0, m.PJ)(E.flags),
        f = I ? l.RR9 : l.nys,
        N = I ? x.intl.string(x.t["46YF2D"]) : x.intl.string(x.t.fFyGiA),
        b = n.metadata?.application_subscription_guild_id,
        j = (0, s.bG)([u.A], () => (I && null != b ? u.A.getGuild(b) : void 0), [b, I]),
        v = (0, s.bG)([_.A], () => {
            if (null != T) return _.A.get(T);
        }, [T]),
        O = (0, g.Y)(n.currentPeriodEnd);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsxs)("div", {
                className: p.wx,
                children: [
                    null != S && (0, i.jsx)(l._V3, { src: S.href, imageClassName: p.Z2, width: 48, height: 48 }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(l.Heading, { variant: "heading-xl/semibold", children: t.name }),
                            (0, i.jsxs)("div", {
                                className: p.p4,
                                children: [
                                    (0, i.jsxs)(l.Heading, {
                                        variant: "heading-md/normal",
                                        className: p.N4,
                                        children: [(0, i.jsx)(f, { size: "xs", color: "currentColor" }), " ", N],
                                    }),
                                    null != j &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(l.Text, { variant: "text-md/normal", children: "•" }),
                                                (0, i.jsxs)("span", {
                                                    className: p.vP,
                                                    children: [
                                                        (0, i.jsx)(d.Ay, { guild: j, size: d.Ay.Sizes.SMOL }),
                                                        (0, i.jsx)(l.Heading, {
                                                            variant: "heading-md/semibold",
                                                            color: "text-muted",
                                                            children: x.intl.format(x.t["7ZD8p1"], {
                                                                guildName: j.name,
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
                            (0, i.jsx)(l.Text, { variant: "text-md/normal", children: x.intl.string(x.t["goe+hk"]) }),
                            e &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(l.Text, {
                                            variant: "text-md/normal",
                                            children: x.intl.format(x.t["Q8qJ+5"], {}),
                                        }),
                                        (0, i.jsx)(l.Text, {
                                            variant: "text-md/normal",
                                            children: x.intl.format(x.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, i.jsx)(o.A.Toggle, {
                                text: e ? x.intl.string(x.t["1Rkq/E"]) : x.intl.string(x.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, i.jsxs)("div", {
                className: p.x0,
                children: [
                    (0, i.jsx)(c.A, {
                        storeListing: a,
                        className: p.o3,
                        cta: (0, i.jsxs)("div", {
                            className: p.cJ,
                            children: [
                                (0, i.jsx)(l.Text, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: x.intl.string(x.t.fHIpOY),
                                }),
                                null != v &&
                                    (0, i.jsx)(l.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: x.intl.format(x.t["OQk+jr"], { endDate: O }),
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
                                      cta: (0, i.jsx)(l.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: x.intl.format(x.t.nn88hB, { startDate: O }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, i.jsx)(C, { storeListing: e, guildId: b, navigateToHome: h }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function C(e) {
    let { storeListing: t, guildId: n, navigateToHome: s } = e,
        { openModal: l } = (0, A.A)({
            analyticsLocation: h.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: s,
        });
    return (0, i.jsx)(c.A, {
        storeListing: t,
        cta: (0, i.jsx)(a.$nd, { variant: "primary", size: "sm", text: x.intl.string(x.t["+KwmBt"]), onClick: l }),
    });
}
