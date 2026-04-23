n.d(t, { A: () => W });
var i = n(627968),
    l = n(311907),
    s = n(990078),
    r = n(696986),
    a = n(683071),
    o = n(289873),
    d = n(331322),
    c = n(534514),
    u = n(834730),
    m = n(761508),
    g = n(821609),
    h = n(44892),
    x = n(833448),
    _ = n(997509),
    p = n(555337),
    A = n(529942),
    E = n(209700),
    f = n(976860),
    j = n(130771),
    N = n(260509),
    I = n(317525),
    C = n(287809),
    b = n(403362),
    v = n(300233),
    S = n(599941),
    T = n(11351),
    y = n(739455),
    R = n(535876),
    L = n(299824),
    D = n(859016),
    O = n(623529),
    G = n(328031),
    M = n(646296),
    k = n(700458),
    U = n(159719),
    w = n(652215),
    P = n(746080),
    B = n(269927),
    F = n(985018),
    H = n(416211);
function V(e) {
    let { application: t, guild: n } = e,
        s = (0, S.Tq)(n.id),
        r = (0, S.uP)(n.id),
        a = r.some(
            (e) => null != e.name && null != e.subscription_plans[0] && null != e.description && null != e.image_asset,
        ),
        o = (0, l.yK)([I.A], () => r.map((e) => I.A.getRole(n.id, e.role_id)), [n.id, r]).some(
            (e) => null != e && 0 !== e.color,
        ),
        d = r.some((e) => e.role_benefits.benefits.length > 0),
        c = null != t && n.features.has(w.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED),
        u = [
            { title: F.intl.string(F.t.p2Rsdl), items: [{ description: F.intl.string(F.t.zbO7fU), completed: c }] },
            {
                title: F.intl.string(F.t["/CfKoD"]),
                items: [
                    { description: F.intl.string(F.t.zvuI3S), completed: !0 },
                    {
                        description: F.intl.string(F.t.cVcEYK),
                        completed: s?.description != null && "" !== s.description,
                    },
                    { description: F.intl.string(F.t["88XnXE"]), completed: s?.cover_image_asset != null },
                ],
            },
            {
                title: F.intl.string(F.t.pXbGYc),
                items: [
                    { description: F.intl.string(F.t.pCxWKL), completed: a },
                    { description: F.intl.string(F.t["+amv5Z"]), completed: o },
                    { description: F.intl.string(F.t["/P03C6"]), completed: d },
                ],
            },
        ];
    return (0, i.jsx)(G.A, { children: u });
}
function z(e) {
    let { application: t } = e,
        { teams: n } = (0, j.A)({ refreshOnDepChange: !1 }),
        l = n.find((e) => e.id === t?.team?.id),
        s = [B.y.ACTION_REQUIRED, B.y.BLOCKED, B.y.SUSPENDED];
    return l?.payout_account_status != null && s.includes(l?.payout_account_status)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(r.h, { size: 16 }),
                  (0, i.jsx)(a.w, {
                      type: "warning",
                      children: F.intl.format(F.t.Yo0ZB2, { url: w.X7G.DEVELOPER_PORTAL_PAYOUT_SETTINGS(l.id) }),
                  }),
                  (0, i.jsx)(r.h, { size: 16 }),
              ],
          })
        : null;
}
function W(e) {
    let t,
        { guild: n, application: s } = e,
        r = (0, l.bG)([p.A], () => p.A.getProps().subsection),
        a = null != s && n.features.has(w.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED);
    return (
        (0, x.T)(n),
        (t = a ? (r === w.nd0.ROLE_SUBSCRIPTION_EMOJI ? k.Oi.EMOJIS : k.Oi.TIERS) : k.Oi.PAYMENT),
        (0, i.jsx)(v.H, {
            guildId: n.id,
            refetchOnMount: !0,
            children: (0, i.jsx)(T.p6, {
                guildId: n.id,
                children: (0, i.jsx)(k.ZM, { initialTab: t, children: (0, i.jsx)(Y, { guild: n, application: s }) }),
            }),
        })
    );
}
function Y(e) {
    let t,
        { guild: n, application: r } = e,
        a = null != r && n.features.has(w.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED),
        { currentTab: x, setCurrentTab: p } = (0, k.Tj)(),
        j = (0, v.X)(),
        S = (0, l.bG)([C.default], () => C.default.getCurrentUser()),
        T = (0, R.A)(n.id),
        G = null != n && (0, N.bM)(n, S);
    if (!j) return (0, i.jsx)(o.y, {});
    switch (x) {
        case k.Oi.BASIC_INFO:
            t = (0, i.jsx)(O.A, { guild: n });
            break;
        case k.Oi.TIERS:
            t = (0, i.jsx)(M.A, { guildId: n.id });
            break;
        case k.Oi.PAYMENT:
            t = (0, i.jsx)(D.A, { guild: n });
            break;
        case k.Oi.EMOJIS:
            t = (0, i.jsx)(U.A, { guild: n });
            break;
        default:
            (0, b.xb)(x);
    }
    return (0, i.jsxs)("div", {
        className: H.kL,
        children: [
            (0, i.jsxs)("div", {
                className: H.rb,
                children: [
                    (0, i.jsxs)(d.B, {
                        gap: 8,
                        children: [
                            (0, i.jsx)(c.D, { variant: "heading-lg/semibold", children: F.intl.string(F.t["KzCF/6"]) }),
                            (0, i.jsx)(u.E, { variant: "text-sm/normal", children: F.intl.string(F.t.KyGv0k) }),
                        ],
                    }),
                    (0, i.jsx)(L.A, { guild: n }),
                    a && (0, i.jsx)(z, { application: r }),
                    (0, i.jsxs)("div", {
                        className: H.Mv,
                        children: [
                            (0, i.jsxs)(m.V, {
                                className: H.$H,
                                "aria-label": F.intl.string(F.t["+1H47t"]),
                                selectedItem: x,
                                type: "top",
                                look: "brand",
                                onItemSelect: p,
                                children: [
                                    (0, i.jsx)(h.A, {
                                        id: k.Oi.BASIC_INFO,
                                        disabledTooltip: F.intl.string(F.t.NVDuUX),
                                        disabled: !a,
                                        children: F.intl.string(F.t["/CfKoD"]),
                                    }),
                                    (0, i.jsx)(h.A, {
                                        id: k.Oi.TIERS,
                                        disabledTooltip: F.intl.string(F.t.NVDuUX),
                                        disabled: !a,
                                        children: F.intl.string(F.t.pXbGYc),
                                    }),
                                    (0, i.jsx)(h.A, {
                                        id: k.Oi.EMOJIS,
                                        disabledTooltip: F.intl.string(F.t.NVDuUX),
                                        disabled: !a,
                                        children: F.intl.string(F.t.XBkDoA),
                                    }),
                                    G
                                        ? (0, i.jsx)(m.V.Item, {
                                              className: H.__invalid_tabBarItem,
                                              id: k.Oi.PAYMENT,
                                              children: F.intl.string(F.t.p2Rsdl),
                                          })
                                        : null,
                                ],
                            }),
                            a &&
                                (0, i.jsx)("div", {
                                    className: H.jc,
                                    children: (0, i.jsx)(s.m, {
                                        text: F.intl.string(F.t["1wCH4M"]),
                                        children: (0, i.jsx)(g.$, {
                                            disabled: T,
                                            onClick: () => {
                                                let e = I.A.getEveryoneRole(n);
                                                _.A.close();
                                                let t = { [e.id]: e };
                                                (0, A.Tk)(n.id, {
                                                    type: E._.SERVER_SHOP,
                                                    roles: t,
                                                    initialTab: "role_subscriptions",
                                                    returnToSection: w.BEX.ROLE_SUBSCRIPTIONS,
                                                }),
                                                    (0, y.SY)(n.id),
                                                    (0, f.pX)(w.BVt.CHANNEL(n.id, P.VV.ROLE_SUBSCRIPTIONS));
                                            },
                                            text: F.intl.string(F.t.vM81yY),
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
            (0, i.jsx)(V, { application: r, guild: n }),
        ],
    });
}
