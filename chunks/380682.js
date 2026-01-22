n.d(t, { A: () => M }), n(228524);
var r = n(627968),
    i = n(311907),
    l = n(990078),
    s = n(397927),
    a = n(44892),
    c = n(833448),
    o = n(997509),
    d = n(555337),
    u = n(529942),
    f = n(209700),
    g = n(976860),
    b = n(130771),
    m = n(260509),
    p = n(317525),
    x = n(287809),
    h = n(403362),
    j = n(300233),
    O = n(599941),
    y = n(11351),
    v = n(739455),
    A = n(535876),
    E = n(299824),
    N = n(859016),
    _ = n(623529),
    S = n(328031),
    T = n(646296),
    I = n(700458),
    C = n(159719),
    P = n(652215),
    w = n(746080),
    R = n(269927),
    D = n(985018),
    G = n(782356);
function L(e) {
    let { application: t, guild: n } = e,
        l = (0, O.Tq)(n.id),
        s = (0, O.uP)(n.id),
        a = s.some(
            (e) => null != e.name && null != e.subscription_plans[0] && null != e.description && null != e.image_asset,
        ),
        c = (0, i.yK)([p.A], () => s.map((e) => p.A.getRole(n.id, e.role_id)), [n.id, s]).some(
            (e) => null != e && 0 !== e.color,
        ),
        o = s.some((e) => e.role_benefits.benefits.length > 0),
        d = null != t && n.features.has(P.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED),
        u = [
            {
                title: D.intl.string(D.t.p2Rsdl),
                items: [
                    {
                        description: D.intl.string(D.t.zbO7fU),
                        completed: d,
                    },
                ],
            },
            {
                title: D.intl.string(D.t["/CfKoD"]),
                items: [
                    {
                        description: D.intl.string(D.t.zvuI3S),
                        completed: !0,
                    },
                    {
                        description: D.intl.string(D.t.cVcEYK),
                        completed: (null == l ? void 0 : l.description) != null && "" !== l.description,
                    },
                    {
                        description: D.intl.string(D.t["88XnXE"]),
                        completed: (null == l ? void 0 : l.cover_image_asset) != null,
                    },
                ],
            },
            {
                title: D.intl.string(D.t.pXbGYc),
                items: [
                    {
                        description: D.intl.string(D.t.pCxWKL),
                        completed: a,
                    },
                    {
                        description: D.intl.string(D.t["+amv5Z"]),
                        completed: c,
                    },
                    {
                        description: D.intl.string(D.t["/P03C6"]),
                        completed: o,
                    },
                ],
            },
        ];
    return (0, r.jsx)(S.A, { children: u });
}
function k(e) {
    let { application: t } = e,
        { teams: n } = (0, b.A)({ refreshOnDepChange: !1 }),
        i = n.find((e) => {
            var n;
            return e.id === (null == t || null == (n = t.team) ? void 0 : n.id);
        }),
        l = [R.y.ACTION_REQUIRED, R.y.BLOCKED, R.y.SUSPENDED];
    return (null == i ? void 0 : i.payout_account_status) != null &&
        l.includes(null == i ? void 0 : i.payout_account_status)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(s.hKd, { size: 16 }),
                  (0, r.jsx)(s.wx6, {
                      type: "warning",
                      children: D.intl.format(D.t.Yo0ZB2, { url: P.X7G.DEVELOPER_PORTAL_PAYOUT_SETTINGS(i.id) }),
                  }),
                  (0, r.jsx)(s.hKd, { size: 16 }),
              ],
          })
        : null;
}
function M(e) {
    let t,
        { guild: n, application: l } = e,
        s = (0, i.bG)([d.A], () => d.A.getProps().subsection),
        a = null != l && n.features.has(P.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED);
    return (
        (0, c.T)(n),
        (t = a ? (s === P.nd0.ROLE_SUBSCRIPTION_EMOJI ? I.Oi.EMOJIS : I.Oi.TIERS) : I.Oi.PAYMENT),
        (0, r.jsx)(j.H, {
            guildId: n.id,
            refetchOnMount: !0,
            children: (0, r.jsx)(y.p6, {
                guildId: n.id,
                children: (0, r.jsx)(I.ZM, {
                    initialTab: t,
                    children: (0, r.jsx)(U, {
                        guild: n,
                        application: l,
                    }),
                }),
            }),
        })
    );
}
function U(e) {
    let t,
        { guild: n, application: c } = e,
        d = null != c && n.features.has(P.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED),
        { currentTab: b, setCurrentTab: O } = (0, I.Tj)(),
        y = (0, j.X)(),
        S = (0, i.bG)([x.default], () => x.default.getCurrentUser()),
        R = (0, A.A)(n.id),
        M = null != n && (0, m.bM)(n, S);
    if (!y) return (0, r.jsx)(s.y$y, {});
    switch (b) {
        case I.Oi.BASIC_INFO:
            t = (0, r.jsx)(_.A, { guild: n });
            break;
        case I.Oi.TIERS:
            t = (0, r.jsx)(T.A, { guildId: n.id });
            break;
        case I.Oi.PAYMENT:
            t = (0, r.jsx)(N.A, { guild: n });
            break;
        case I.Oi.EMOJIS:
            t = (0, r.jsx)(C.A, { guild: n });
            break;
        default:
            (0, h.xb)(b);
    }
    return (0, r.jsxs)("div", {
        className: G.kL,
        children: [
            (0, r.jsxs)("div", {
                className: G.rb,
                children: [
                    (0, r.jsxs)(s.BJc, {
                        gap: 8,
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: "heading-lg/semibold",
                                children: D.intl.string(D.t["KzCF/6"]),
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                children: D.intl.string(D.t.KyGv0k),
                            }),
                        ],
                    }),
                    (0, r.jsx)(E.A, { guild: n }),
                    d && (0, r.jsx)(k, { application: c }),
                    (0, r.jsxs)("div", {
                        className: G.Mv,
                        children: [
                            (0, r.jsxs)(s.VQ0, {
                                className: G.$H,
                                "aria-label": D.intl.string(D.t["+1H47t"]),
                                selectedItem: b,
                                type: "top",
                                look: "brand",
                                onItemSelect: O,
                                children: [
                                    (0, r.jsx)(a.A, {
                                        id: I.Oi.BASIC_INFO,
                                        disabledTooltip: D.intl.string(D.t.NVDuUX),
                                        disabled: !d,
                                        children: D.intl.string(D.t["/CfKoD"]),
                                    }),
                                    (0, r.jsx)(a.A, {
                                        id: I.Oi.TIERS,
                                        disabledTooltip: D.intl.string(D.t.NVDuUX),
                                        disabled: !d,
                                        children: D.intl.string(D.t.pXbGYc),
                                    }),
                                    (0, r.jsx)(a.A, {
                                        id: I.Oi.EMOJIS,
                                        disabledTooltip: D.intl.string(D.t.NVDuUX),
                                        disabled: !d,
                                        children: D.intl.string(D.t.XBkDoA),
                                    }),
                                    M
                                        ? (0, r.jsx)(s.VQ0.Item, {
                                              className: G.__invalid_tabBarItem,
                                              id: I.Oi.PAYMENT,
                                              children: D.intl.string(D.t.p2Rsdl),
                                          })
                                        : null,
                                ],
                            }),
                            d &&
                                (0, r.jsx)("div", {
                                    className: G.jc,
                                    children: (0, r.jsx)(l.m, {
                                        text: D.intl.string(D.t["1wCH4M"]),
                                        children: (0, r.jsx)(s.Button, {
                                            disabled: R,
                                            onClick: () => {
                                                let e = p.A.getEveryoneRole(n);
                                                o.A.close();
                                                let t = { [e.id]: e };
                                                (0, u.Tk)(n.id, {
                                                    type: f._.SERVER_SHOP,
                                                    roles: t,
                                                    initialTab: "role_subscriptions",
                                                    returnToSection: P.BEX.ROLE_SUBSCRIPTIONS,
                                                }),
                                                    (0, v.SY)(n.id),
                                                    (0, g.pX)(P.BVt.CHANNEL(n.id, w.VV.ROLE_SUBSCRIPTIONS));
                                            },
                                            text: D.intl.string(D.t.vM81yY),
                                            size: "sm",
                                            variant: "secondary",
                                        }),
                                    }),
                                }),
                        ],
                    }),
                    t,
                ],
            }),
            (0, r.jsx)(L, {
                application: c,
                guild: n,
            }),
        ],
    });
}
