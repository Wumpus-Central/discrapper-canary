n.d(t, { Z: () => G }), n(953529);
var r = n(54381),
    i = n(442837),
    l = n(28664),
    a = n(481060),
    s = n(204875),
    o = n(715796),
    c = n(434404),
    d = n(999382),
    u = n(962086),
    g = n(225675),
    f = n(703656),
    m = n(577275),
    b = n(601964),
    p = n(485386),
    h = n(594174),
    x = n(823379),
    j = n(730647),
    v = n(584825),
    O = n(723047),
    C = n(303737),
    y = n(568074),
    N = n(411667),
    E = n(822531),
    I = n(909656),
    S = n(210591),
    _ = n(927731),
    T = n(798680),
    P = n(509026),
    w = n(981631),
    Z = n(176505),
    R = n(829857),
    D = n(388032),
    A = n(629203);
function L(e) {
    let { application: t, guild: n } = e,
        l = (0, v.YB)(n.id),
        a = (0, v.qi)(n.id),
        s = a.some(
            (e) => null != e.name && null != e.subscription_plans[0] && null != e.description && null != e.image_asset,
        ),
        o = (0, i.Wu)([p.Z], () => a.map((e) => p.Z.getRole(n.id, e.role_id)), [n.id, a]).some(
            (e) => null != e && 0 !== e.color,
        ),
        c = a.some((e) => e.role_benefits.benefits.length > 0),
        d = null != t && n.features.has(w.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED),
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
                        completed: s,
                    },
                    {
                        description: D.intl.string(D.t["+amv5Z"]),
                        completed: o,
                    },
                    {
                        description: D.intl.string(D.t["/P03C6"]),
                        completed: c,
                    },
                ],
            },
        ];
    return (0, r.jsx)(S.Z, { children: u });
}
function k(e) {
    let { application: t } = e,
        { teams: n } = (0, m.Z)({ refreshOnDepChange: !1 }),
        i = n.find((e) => {
            var n;
            return e.id === (null == t || null == (n = t.team) ? void 0 : n.id);
        }),
        l = [R.C.ACTION_REQUIRED, R.C.BLOCKED, R.C.SUSPENDED];
    return (null == i ? void 0 : i.payout_account_status) != null &&
        l.includes(null == i ? void 0 : i.payout_account_status)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(a.LZC, { size: 16 }),
                  (0, r.jsx)(a.M14, {
                      type: "warning",
                      children: D.intl.format(D.t.Yo0ZB2, { url: w.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(i.id) }),
                  }),
                  (0, r.jsx)(a.LZC, { size: 16 }),
              ],
          })
        : null;
}
function G(e) {
    let t,
        { guild: n, application: l } = e,
        a = (0, i.e7)([d.Z], () => d.Z.getProps().subsection),
        s = null != l && n.features.has(w.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED);
    return (
        (0, o.P)(n),
        (t = s ? (a === w.KsC.ROLE_SUBSCRIPTION_EMOJI ? T.ue.EMOJIS : T.ue.TIERS) : T.ue.PAYMENT),
        (0, r.jsx)(j.l, {
            guildId: n.id,
            refetchOnMount: !0,
            children: (0, r.jsx)(O.in, {
                guildId: n.id,
                children: (0, r.jsx)(T.M7, {
                    initialTab: t,
                    children: (0, r.jsx)(M, {
                        guild: n,
                        application: l,
                    }),
                }),
            }),
        })
    );
}
function M(e) {
    let t,
        { guild: n, application: o } = e,
        d = null != o && n.features.has(w.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED),
        { currentTab: m, setCurrentTab: v } = (0, T.dw)(),
        O = (0, j.f)(),
        S = (0, i.e7)([h.default], () => h.default.getCurrentUser()),
        R = (0, y.Z)(n.id),
        G = null != n && (0, b.eM)(n, S);
    if (!O) return (0, r.jsx)(a.$jN, {});
    switch (m) {
        case T.ue.BASIC_INFO:
            t = (0, r.jsx)(I.Z, { guild: n });
            break;
        case T.ue.TIERS:
            t = (0, r.jsx)(_.Z, { guildId: n.id });
            break;
        case T.ue.PAYMENT:
            t = (0, r.jsx)(E.Z, { guild: n });
            break;
        case T.ue.EMOJIS:
            t = (0, r.jsx)(P.Z, { guild: n });
            break;
        default:
            (0, x.vE)(m);
    }
    return (0, r.jsxs)("div", {
        className: A.container,
        children: [
            (0, r.jsxs)("div", {
                className: A.mainContent,
                children: [
                    (0, r.jsxs)(a.Kqy, {
                        gap: 8,
                        children: [
                            (0, r.jsx)(a.Heading, {
                                variant: "heading-lg/semibold",
                                children: D.intl.string(D.t["KzCF/6"]),
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                children: D.intl.string(D.t.KyGv0k),
                            }),
                        ],
                    }),
                    (0, r.jsx)(N.Z, { guild: n }),
                    d && (0, r.jsx)(k, { application: o }),
                    (0, r.jsxs)("div", {
                        className: A.tabBarContainer,
                        children: [
                            (0, r.jsxs)(a.njP, {
                                className: A.tabBar,
                                "aria-label": D.intl.string(D.t["+1H47t"]),
                                selectedItem: m,
                                type: "top",
                                look: "brand",
                                onItemSelect: v,
                                children: [
                                    (0, r.jsx)(s.Z, {
                                        id: T.ue.BASIC_INFO,
                                        disabledTooltip: D.intl.string(D.t.NVDuUX),
                                        disabled: !d,
                                        children: D.intl.string(D.t["/CfKoD"]),
                                    }),
                                    (0, r.jsx)(s.Z, {
                                        id: T.ue.TIERS,
                                        disabledTooltip: D.intl.string(D.t.NVDuUX),
                                        disabled: !d,
                                        children: D.intl.string(D.t.pXbGYc),
                                    }),
                                    (0, r.jsx)(s.Z, {
                                        id: T.ue.EMOJIS,
                                        disabledTooltip: D.intl.string(D.t.NVDuUX),
                                        disabled: !d,
                                        children: D.intl.string(D.t.XBkDoA),
                                    }),
                                    G
                                        ? (0, r.jsx)(a.njP.Item, {
                                              className: A.__invalid_tabBarItem,
                                              id: T.ue.PAYMENT,
                                              children: D.intl.string(D.t.p2Rsdl),
                                          })
                                        : null,
                                ],
                            }),
                            d &&
                                (0, r.jsx)("div", {
                                    className: A.previewButton,
                                    children: (0, r.jsx)(l.u, {
                                        text: D.intl.string(D.t["1wCH4M"]),
                                        children: (0, r.jsx)(a.Button, {
                                            disabled: R,
                                            onClick: () => {
                                                let e = p.Z.getEveryoneRole(n);
                                                c.Z.close();
                                                let t = { [e.id]: e };
                                                (0, u.iD)(n.id, {
                                                    type: g.z.SERVER_SHOP,
                                                    roles: t,
                                                    initialTab: "role_subscriptions",
                                                    returnToSection: w.pNK.ROLE_SUBSCRIPTIONS,
                                                }),
                                                    (0, C.be)(n.id),
                                                    (0, f.uL)(w.Z5c.CHANNEL(n.id, Z.oC.ROLE_SUBSCRIPTIONS));
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
                application: o,
                guild: n,
            }),
        ],
    });
}
