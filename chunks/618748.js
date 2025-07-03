(n.d(t, { Z: () => M }), n(953529));
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    s = n(204875),
    a = n(715796),
    o = n(434404),
    c = n(999382),
    d = n(962086),
    u = n(225675),
    m = n(703656),
    g = n(577275),
    p = n(601964),
    f = n(485386),
    h = n(594174),
    x = n(823379),
    b = n(730647),
    j = n(584825),
    _ = n(723047),
    v = n(303737),
    O = n(568074),
    C = n(411667),
    y = n(903773),
    N = n(822531),
    I = n(909656),
    E = n(210591),
    S = n(927731),
    T = n(798680),
    P = n(509026),
    w = n(981631),
    R = n(176505),
    Z = n(829857),
    D = n(388032),
    k = n(173409);
function A(e) {
    let { application: t, guild: n } = e,
        l = (0, j.YB)(n.id),
        s = (0, j.qi)(n.id),
        a = s.some((e) => null != e.name && null != e.subscription_plans[0] && null != e.description && null != e.image_asset),
        o = (0, i.e7)([f.Z], () => f.Z.getRoles(n.id)),
        c = s.map((e) => o[e.role_id]).some((e) => null != e && 0 !== e.color),
        d = s.some((e) => e.role_benefits.benefits.length > 0),
        u = null != t && n.features.has(w.oNc.ROLE_SUBSCRIPTIONS_ENABLED),
        m = [
            {
                title: D.intl.string(D.t.p2Rsdn),
                items: [
                    {
                        description: D.intl.string(D.t.zbO7fX),
                        completed: u
                    }
                ]
            },
            {
                title: D.intl.string(D.t['/CfKoK']),
                items: [
                    {
                        description: D.intl.string(D.t.zvuI3d),
                        completed: !0
                    },
                    {
                        description: D.intl.string(D.t.cVcEYG),
                        completed: (null == l ? void 0 : l.description) != null && '' !== l.description
                    },
                    {
                        description: D.intl.string(D.t['88XnXF']),
                        completed: (null == l ? void 0 : l.cover_image_asset) != null
                    }
                ]
            },
            {
                title: D.intl.string(D.t.pXbGYW),
                items: [
                    {
                        description: D.intl.string(D.t.pCxWKC),
                        completed: a
                    },
                    {
                        description: D.intl.string(D.t['+amv5e']),
                        completed: c
                    },
                    {
                        description: D.intl.string(D.t['/P03Cw']),
                        completed: d
                    }
                ]
            }
        ];
    return (0, r.jsx)(E.Z, { children: m });
}
function L(e) {
    let { application: t } = e,
        { teams: n } = (0, g.Z)({ refreshOnDepChange: !1 }),
        i = n.find((e) => {
            var n;
            return e.id === (null == t || null == (n = t.team) ? void 0 : n.id);
        }),
        s = [Z.C.ACTION_REQUIRED, Z.C.BLOCKED, Z.C.SUSPENDED];
    return (null == i ? void 0 : i.payout_account_status) != null && s.includes(null == i ? void 0 : i.payout_account_status)
        ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(l.LZC, { size: 16 }), (0, r.jsx)(y.Z, { children: D.intl.format(D.t.Yo0ZBw, { url: w.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(i.id) }) }), (0, r.jsx)(l.LZC, { size: 16 })]
          })
        : null;
}
function M(e) {
    let t,
        { guild: n, application: l } = e,
        s = (0, i.e7)([c.Z], () => c.Z.getProps().subsection),
        o = null != l && n.features.has(w.oNc.ROLE_SUBSCRIPTIONS_ENABLED);
    return (
        (0, a.P)(n),
        (t = o ? (s === w.KsC.ROLE_SUBSCRIPTION_EMOJI ? T.ue.EMOJIS : T.ue.TIERS) : T.ue.PAYMENT),
        (0, r.jsx)(b.l, {
            guildId: n.id,
            refetchOnMount: !0,
            children: (0, r.jsx)(_.in, {
                guildId: n.id,
                children: (0, r.jsx)(T.M7, {
                    initialTab: t,
                    children: (0, r.jsx)(G, {
                        guild: n,
                        application: l
                    })
                })
            })
        })
    );
}
function G(e) {
    let t,
        { guild: n, application: a } = e,
        c = null != a && n.features.has(w.oNc.ROLE_SUBSCRIPTIONS_ENABLED),
        { currentTab: g, setCurrentTab: j } = (0, T.dw)(),
        _ = (0, b.f)(),
        y = (0, i.e7)([h.default], () => h.default.getCurrentUser()),
        E = (0, O.Z)(n.id),
        Z = null != n && (0, p.eM)(n, y),
        M = () => {
            let e = f.Z.getEveryoneRole(n);
            o.Z.close();
            let t = { [e.id]: e };
            ((0, d.iD)(n.id, {
                type: u.z.SERVER_SHOP,
                roles: t,
                initialTab: 'role_subscriptions',
                returnToSection: w.pNK.ROLE_SUBSCRIPTIONS
            }),
                (0, v.be)(n.id),
                (0, m.uL)(w.Z5c.CHANNEL(n.id, R.oC.ROLE_SUBSCRIPTIONS)));
        };
    if (!_) return (0, r.jsx)(l.$jN, {});
    switch (g) {
        case T.ue.BASIC_INFO:
            t = (0, r.jsx)(I.Z, { guild: n });
            break;
        case T.ue.TIERS:
            t = (0, r.jsx)(S.Z, { guildId: n.id });
            break;
        case T.ue.PAYMENT:
            t = (0, r.jsx)(N.Z, { guild: n });
            break;
        case T.ue.EMOJIS:
            t = (0, r.jsx)(P.Z, { guild: n });
            break;
        default:
            (0, x.vE)(g);
    }
    return (0, r.jsxs)('div', {
        className: k.container,
        children: [
            (0, r.jsxs)('div', {
                className: k.mainContent,
                children: [
                    (0, r.jsx)(l.vwX, {
                        tag: 'h1',
                        children: D.intl.string(D.t['KzCF//'])
                    }),
                    (0, r.jsx)(l.R94, {
                        type: l.R94.Types.DESCRIPTION,
                        children: D.intl.string(D.t.KyGv0t)
                    }),
                    (0, r.jsx)(C.Z, { guild: n }),
                    c && (0, r.jsx)(L, { application: a }),
                    (0, r.jsxs)('div', {
                        className: k.tabBarContainer,
                        children: [
                            (0, r.jsxs)(l.njP, {
                                className: k.tabBar,
                                'aria-label': D.intl.string(D.t['+1H47u']),
                                selectedItem: g,
                                type: 'top',
                                look: 'brand',
                                onItemSelect: j,
                                children: [
                                    (0, r.jsx)(s.Z, {
                                        id: T.ue.BASIC_INFO,
                                        disabledTooltip: D.intl.string(D.t.NVDuUV),
                                        disabled: !c,
                                        children: D.intl.string(D.t['/CfKoK'])
                                    }),
                                    (0, r.jsx)(s.Z, {
                                        id: T.ue.TIERS,
                                        disabledTooltip: D.intl.string(D.t.NVDuUV),
                                        disabled: !c,
                                        children: D.intl.string(D.t.pXbGYW)
                                    }),
                                    (0, r.jsx)(s.Z, {
                                        id: T.ue.EMOJIS,
                                        disabledTooltip: D.intl.string(D.t.NVDuUV),
                                        disabled: !c,
                                        children: D.intl.string(D.t.XBkDoK)
                                    }),
                                    Z
                                        ? (0, r.jsx)(l.njP.Item, {
                                              className: k.__invalid_tabBarItem,
                                              id: T.ue.PAYMENT,
                                              children: D.intl.string(D.t.p2Rsdn)
                                          })
                                        : null
                                ]
                            }),
                            c &&
                                (0, r.jsx)('div', {
                                    className: k.previewButton,
                                    children: (0, r.jsx)(l.ua7, {
                                        text: D.intl.string(D.t['1wCH4O']),
                                        children: (e) => {
                                            let { onMouseEnter: t, onMouseLeave: n } = e;
                                            return (0, r.jsx)(l.zxk, {
                                                disabled: E,
                                                onMouseEnter: E ? t : void 0,
                                                onMouseLeave: E ? n : void 0,
                                                onClick: M,
                                                color: l.zxk.Colors.PRIMARY,
                                                size: l.zxk.Sizes.SMALL,
                                                grow: !E,
                                                look: l.zxk.Looks.OUTLINED,
                                                className: k.previewButton,
                                                children: D.intl.string(D.t.vM81yc)
                                            });
                                        }
                                    })
                                })
                        ]
                    }),
                    t
                ]
            }),
            (0, r.jsx)(A, {
                application: a,
                guild: n
            })
        ]
    });
}
