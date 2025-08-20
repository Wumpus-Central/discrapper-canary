n.d(t, { Z: () => E }), n(997841);
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(601911),
    s = n(887818),
    l = n(824856),
    c = n(565138),
    u = n(430824),
    d = n(55563),
    f = n(171246),
    _ = n(263519),
    p = n(63487),
    h = n(981631),
    m = n(388032),
    g = n(875210);
function E(e) {
    var t;
    let {
            app: n,
            currentSubscription: _,
            currentListing: h,
            alternativeListings: E,
            navigateToHome: y,
            subscriptionGroup: O,
            renewalSkuId: v,
        } = e,
        I = (0, o.y)(n, 100),
        T = (0, f.KK)(O.flags),
        S = T ? a.QTo : a.tBG,
        A = T ? m.intl.string(m.t["46YF2N"]) : m.intl.string(m.t.fFyGiI),
        C = null == (t = _.metadata) ? void 0 : t.application_subscription_guild_id,
        N = (0, i.e7)([u.Z], () => (T && null != C ? u.Z.getGuild(C) : void 0), [C, T]),
        R = (0, i.e7)([d.Z], () => {
            if (null != v) return d.Z.get(v);
        }, [v]),
        P = (0, p.p)(_.currentPeriodEnd);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)("div", {
                className: g.header,
                children: [
                    null != I &&
                        (0, r.jsx)(a.Eep, {
                            src: I.href,
                            imageClassName: g.appIcon,
                            width: 48,
                            height: 48,
                        }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(a.X6q, {
                                variant: "heading-xl/semibold",
                                children: n.name,
                            }),
                            (0, r.jsxs)("div", {
                                className: g.subInfo,
                                children: [
                                    (0, r.jsxs)(a.X6q, {
                                        variant: "heading-md/normal",
                                        className: g.subInfoType,
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
                                                (0, r.jsx)(a.Text, {
                                                    variant: "text-md/normal",
                                                    children: "\u2022",
                                                }),
                                                (0, r.jsxs)("span", {
                                                    className: g.guildSubscription,
                                                    children: [
                                                        (0, r.jsx)(c.Z, {
                                                            guild: N,
                                                            size: c.Z.Sizes.SMOL,
                                                        }),
                                                        (0, r.jsx)(a.X6q, {
                                                            variant: "heading-md/semibold",
                                                            color: "text-muted",
                                                            children: m.intl.format(m.t["7ZD8p6"], {
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
            (0, r.jsx)(s.Z, {
                children: (e) =>
                    (0, r.jsxs)("div", {
                        className: g.planNotice,
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: m.intl.string(m.t["goe+ho"]),
                            }),
                            e &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(a.Text, {
                                            variant: "text-md/normal",
                                            children: m.intl.format(m.t["Q8qJ+/"], {}),
                                        }),
                                        (0, r.jsx)(a.Text, {
                                            variant: "text-md/normal",
                                            children: m.intl.format(m.t.sqowY2, {}),
                                        }),
                                    ],
                                }),
                            (0, r.jsx)(s.Z.Toggle, {
                                text: e ? m.intl.string(m.t["1Rkq/P"]) : m.intl.string(m.t.WsTHkZ),
                            }),
                        ],
                    }),
            }),
            (0, r.jsxs)("div", {
                className: g.subscriptions,
                children: [
                    (0, r.jsx)(l.Z, {
                        storeListing: h,
                        className: g.activeSubscriptionCard,
                        cta: (0, r.jsxs)("div", {
                            className: g.activeSubscriptionCTA,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: m.intl.string(m.t.fHIpOT),
                                }),
                                null != R &&
                                    (0, r.jsx)(a.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-secondary",
                                        children: m.intl.format(m.t["OQk+jo"], { endDate: P }),
                                    }),
                            ],
                        }),
                    }),
                    E.map((e) =>
                        e.skuId === v
                            ? (0, r.jsx)(
                                  l.Z,
                                  {
                                      storeListing: e,
                                      cta: (0, r.jsx)(a.Text, {
                                          variant: "text-sm/semibold",
                                          color: "text-secondary",
                                          children: m.intl.format(m.t.nn88hI, { startDate: P }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, r.jsx)(
                                  b,
                                  {
                                      storeListing: e,
                                      guildId: C,
                                      navigateToHome: y,
                                  },
                                  e.id,
                              ),
                    ),
                ],
            }),
        ],
    });
}
function b(e) {
    let { storeListing: t, guildId: n, navigateToHome: i } = e,
        { openModal: o } = (0, _.Z)({
            analyticsLocation: h.Sbl.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: n,
            disableGuildSelector: !0,
            onComplete: i,
        });
    return (0, r.jsx)(l.Z, {
        storeListing: t,
        cta: (0, r.jsx)(a.zxk, {
            variant: "primary",
            size: "sm",
            text: m.intl.string(m.t["+KwmBg"]),
            onClick: o,
        }),
    });
}
