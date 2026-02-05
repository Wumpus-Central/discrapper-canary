"use strict";
n.d(t, { A: () => P });
var i = n(627968),
    s = n(311907),
    l = n(990078),
    r = n(397927),
    a = n(44892),
    o = n(833448),
    d = n(997509),
    c = n(555337),
    u = n(529942),
    m = n(209700),
    g = n(976860),
    x = n(130771),
    h = n(260509),
    _ = n(317525),
    A = n(287809),
    p = n(403362),
    f = n(300233),
    j = n(599941),
    N = n(11351),
    E = n(739455),
    b = n(535876),
    T = n(299824),
    C = n(859016),
    I = n(623529),
    v = n(328031),
    S = n(646296),
    y = n(700458),
    R = n(159719),
    O = n(652215),
    G = n(746080),
    L = n(269927),
    D = n(985018),
    M = n(782356);
function k(e) {
    let { application: t, guild: n } = e,
        l = (0, j.Tq)(n.id),
        r = (0, j.uP)(n.id),
        a = r.some(
            (e) => null != e.name && null != e.subscription_plans[0] && null != e.description && null != e.image_asset,
        ),
        o = (0, s.yK)([_.A], () => r.map((e) => _.A.getRole(n.id, e.role_id)), [n.id, r]).some(
            (e) => null != e && 0 !== e.color,
        ),
        d = r.some((e) => e.role_benefits.benefits.length > 0),
        c = null != t && n.features.has(O.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED),
        u = [
            { title: D.intl.string(D.t.p2Rsdl), items: [{ description: D.intl.string(D.t.zbO7fU), completed: c }] },
            {
                title: D.intl.string(D.t["/CfKoD"]),
                items: [
                    { description: D.intl.string(D.t.zvuI3S), completed: !0 },
                    {
                        description: D.intl.string(D.t.cVcEYK),
                        completed: l?.description != null && "" !== l.description,
                    },
                    { description: D.intl.string(D.t["88XnXE"]), completed: l?.cover_image_asset != null },
                ],
            },
            {
                title: D.intl.string(D.t.pXbGYc),
                items: [
                    { description: D.intl.string(D.t.pCxWKL), completed: a },
                    { description: D.intl.string(D.t["+amv5Z"]), completed: o },
                    { description: D.intl.string(D.t["/P03C6"]), completed: d },
                ],
            },
        ];
    return (0, i.jsx)(v.A, { children: u });
}
function U(e) {
    let { application: t } = e,
        { teams: n } = (0, x.A)({ refreshOnDepChange: !1 }),
        s = n.find((e) => e.id === t?.team?.id),
        l = [L.y.ACTION_REQUIRED, L.y.BLOCKED, L.y.SUSPENDED];
    return s?.payout_account_status != null && l.includes(s?.payout_account_status)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(r.hKd, { size: 16 }),
                  (0, i.jsx)(r.wx6, {
                      type: "warning",
                      children: D.intl.format(D.t.Yo0ZB2, { url: O.X7G.DEVELOPER_PORTAL_PAYOUT_SETTINGS(s.id) }),
                  }),
                  (0, i.jsx)(r.hKd, { size: 16 }),
              ],
          })
        : null;
}
function P(e) {
    let t,
        { guild: n, application: l } = e,
        r = (0, s.bG)([c.A], () => c.A.getProps().subsection),
        a = null != l && n.features.has(O.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED);
    return (
        (0, o.T)(n),
        (t = a ? (r === O.nd0.ROLE_SUBSCRIPTION_EMOJI ? y.Oi.EMOJIS : y.Oi.TIERS) : y.Oi.PAYMENT),
        (0, i.jsx)(f.H, {
            guildId: n.id,
            refetchOnMount: !0,
            children: (0, i.jsx)(N.p6, {
                guildId: n.id,
                children: (0, i.jsx)(y.ZM, { initialTab: t, children: (0, i.jsx)(w, { guild: n, application: l }) }),
            }),
        })
    );
}
function w(e) {
    let t,
        { guild: n, application: o } = e,
        c = null != o && n.features.has(O.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED),
        { currentTab: x, setCurrentTab: j } = (0, y.Tj)(),
        N = (0, f.X)(),
        v = (0, s.bG)([A.default], () => A.default.getCurrentUser()),
        L = (0, b.A)(n.id),
        P = null != n && (0, h.bM)(n, v);
    if (!N) return (0, i.jsx)(r.y$y, {});
    switch (x) {
        case y.Oi.BASIC_INFO:
            t = (0, i.jsx)(I.A, { guild: n });
            break;
        case y.Oi.TIERS:
            t = (0, i.jsx)(S.A, { guildId: n.id });
            break;
        case y.Oi.PAYMENT:
            t = (0, i.jsx)(C.A, { guild: n });
            break;
        case y.Oi.EMOJIS:
            t = (0, i.jsx)(R.A, { guild: n });
            break;
        default:
            (0, p.xb)(x);
    }
    return (0, i.jsxs)("div", {
        className: M.kL,
        children: [
            (0, i.jsxs)("div", {
                className: M.rb,
                children: [
                    (0, i.jsxs)(r.BJc, {
                        gap: 8,
                        children: [
                            (0, i.jsx)(r.Heading, {
                                variant: "heading-lg/semibold",
                                children: D.intl.string(D.t["KzCF/6"]),
                            }),
                            (0, i.jsx)(r.Text, { variant: "text-sm/normal", children: D.intl.string(D.t.KyGv0k) }),
                        ],
                    }),
                    (0, i.jsx)(T.A, { guild: n }),
                    c && (0, i.jsx)(U, { application: o }),
                    (0, i.jsxs)("div", {
                        className: M.Mv,
                        children: [
                            (0, i.jsxs)(r.VQ0, {
                                className: M.$H,
                                "aria-label": D.intl.string(D.t["+1H47t"]),
                                selectedItem: x,
                                type: "top",
                                look: "brand",
                                onItemSelect: j,
                                children: [
                                    (0, i.jsx)(a.A, {
                                        id: y.Oi.BASIC_INFO,
                                        disabledTooltip: D.intl.string(D.t.NVDuUX),
                                        disabled: !c,
                                        children: D.intl.string(D.t["/CfKoD"]),
                                    }),
                                    (0, i.jsx)(a.A, {
                                        id: y.Oi.TIERS,
                                        disabledTooltip: D.intl.string(D.t.NVDuUX),
                                        disabled: !c,
                                        children: D.intl.string(D.t.pXbGYc),
                                    }),
                                    (0, i.jsx)(a.A, {
                                        id: y.Oi.EMOJIS,
                                        disabledTooltip: D.intl.string(D.t.NVDuUX),
                                        disabled: !c,
                                        children: D.intl.string(D.t.XBkDoA),
                                    }),
                                    P
                                        ? (0, i.jsx)(r.VQ0.Item, {
                                              className: M.__invalid_tabBarItem,
                                              id: y.Oi.PAYMENT,
                                              children: D.intl.string(D.t.p2Rsdl),
                                          })
                                        : null,
                                ],
                            }),
                            c &&
                                (0, i.jsx)("div", {
                                    className: M.jc,
                                    children: (0, i.jsx)(l.m, {
                                        text: D.intl.string(D.t["1wCH4M"]),
                                        children: (0, i.jsx)(r.Button, {
                                            disabled: L,
                                            onClick: () => {
                                                let e = _.A.getEveryoneRole(n);
                                                d.A.close();
                                                let t = { [e.id]: e };
                                                (0, u.Tk)(n.id, {
                                                    type: m._.SERVER_SHOP,
                                                    roles: t,
                                                    initialTab: "role_subscriptions",
                                                    returnToSection: O.BEX.ROLE_SUBSCRIPTIONS,
                                                }),
                                                    (0, E.SY)(n.id),
                                                    (0, g.pX)(O.BVt.CHANNEL(n.id, G.VV.ROLE_SUBSCRIPTIONS));
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
            (0, i.jsx)(k, { application: o, guild: n }),
        ],
    });
}
