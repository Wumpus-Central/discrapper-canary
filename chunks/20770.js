n.d(t, { A: () => b }), n(938796);
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(821609),
    a = n(664121),
    r = n(950305),
    o = n(673698),
    d = n(534514),
    u = n(834730),
    c = n(943775),
    g = n(147441),
    m = n(511968),
    _ = n(263063),
    A = n(71393),
    h = n(67480),
    p = n(163437),
    x = n(185438),
    E = n(572566),
    T = n(652215),
    S = n(985018),
    f = n(386011);
function b(e) {
    let {
            app: t,
            currentSubscription: n,
            currentListing: l,
            alternativeListings: x,
            navigateToHome: T,
            subscriptionGroup: b,
            renewalSkuId: v,
        } = e,
        N = (0, c.A)(t, 100),
        I = (0, p.PJ)(b.flags),
        y = I ? a.R : r.n,
        j = I ? S.intl.string(S.t["46YF2D"]) : S.intl.string(S.t.fFyGiA),
        O = n.metadata?.application_subscription_guild_id,
        R = (0, s.bG)([A.A], () => (I && null != O ? A.A.getGuild(O) : void 0), [O, I]),
        L = (0, s.bG)([h.A], () => {
            if (null != v) return h.A.get(v);
        }, [v]),
        D = (0, E.Y)(n.currentPeriodEnd);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsxs)("div", {
                className: f.wx,
                children: [
                    null != N && (0, i.jsx)(o._, { src: N.href, imageClassName: f.Z2, width: 48, height: 48 }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(d.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, i.jsxs)("div", {
                                className: f.p4,
                                children: [
                                    (0, i.jsxs)(d.D, {
                                        variant: "heading-md/normal",
                                        className: f.N4,
                                        children: [(0, i.jsx)(y, { size: "xs", color: "currentColor" }), " ", j],
                                    }),
                                    null != R &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(u.E, { variant: "text-md/normal", children: "•" }),
                                                (0, i.jsxs)("span", {
                                                    className: f.vP,
                                                    children: [
                                                        (0, i.jsx)(_.Ay, { guild: R, size: _.Ay.Sizes.SMOL }),
                                                        (0, i.jsx)(d.D, {
                                                            variant: "heading-md/semibold",
                                                            color: "text-muted",
                                                            children: S.intl.format(S.t["7ZD8p1"], {
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
            (0, i.jsx)(g.A, {
                children: (e) =>
                    (0, i.jsxs)("div", {
                        className: f._B,
                        children: [
                            (0, i.jsx)(u.E, { variant: "text-md/normal", children: S.intl.string(S.t["goe+hk"]) }),
                            e &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(u.E, {
                                            variant: "text-md/normal",
                                            children: S.intl.format(S.t["Q8qJ+5"], {}),
                                        }),
                                        (0, i.jsx)(u.E, {
                                            variant: "text-md/normal",
                                            children: S.intl.format(S.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, i.jsx)(g.A.Toggle, {
                                text: e ? S.intl.string(S.t["1Rkq/E"]) : S.intl.string(S.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, i.jsxs)("div", {
                className: f.x0,
                children: [
                    (0, i.jsx)(m.A, {
                        storeListing: l,
                        className: f.o3,
                        cta: (0, i.jsxs)("div", {
                            className: f.cJ,
                            children: [
                                (0, i.jsx)(u.E, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: S.intl.string(S.t.fHIpOY),
                                }),
                                null != L &&
                                    (0, i.jsx)(u.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: S.intl.format(S.t["OQk+jr"], { endDate: D }),
                                    }),
                            ],
                        }),
                    }),
                    x.map((e) =>
                        e.skuId === v
                            ? (0, i.jsx)(
                                  m.A,
                                  {
                                      storeListing: e,
                                      cta: (0, i.jsx)(u.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: S.intl.format(S.t.nn88hB, { startDate: D }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, i.jsx)(C, { storeListing: e, guildId: O, navigateToHome: T }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function C(e) {
    let { storeListing: t, guildId: n, navigateToHome: s } = e,
        { openModal: a } = (0, x.A)({
            analyticsLocation: T.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: s,
        });
    return (0, i.jsx)(m.A, {
        storeListing: t,
        cta: (0, i.jsx)(l.$, { variant: "primary", size: "sm", text: S.intl.string(S.t["+KwmBt"]), onClick: a }),
    });
}
