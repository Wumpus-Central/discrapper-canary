(n.d(t, { Z: () => G }), n(953529));
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(755721),
    s = n(481060),
    a = n(204875),
    o = n(715796),
    c = n(434404),
    d = n(999382),
    u = n(962086),
    m = n(225675),
    g = n(703656),
    p = n(577275),
    f = n(601964),
    h = n(485386),
    x = n(594174),
    b = n(823379),
    j = n(730647),
    _ = n(584825),
    v = n(723047),
    O = n(303737),
    C = n(568074),
    y = n(411667),
    N = n(903773),
    I = n(822531),
    E = n(909656),
    S = n(210591),
    T = n(927731),
    P = n(798680),
    w = n(509026),
    R = n(981631),
    Z = n(176505),
    D = n(829857),
    A = n(388032),
    L = n(173409);
function k(e) {
    let { application: t, guild: n } = e,
        l = (0, _.YB)(n.id),
        s = (0, _.qi)(n.id),
        a = s.some((e) => null != e.name && null != e.subscription_plans[0] && null != e.description && null != e.image_asset),
        o = (0, i.e7)([h.Z], () => h.Z.getRoles(n.id)),
        c = s.map((e) => o[e.role_id]).some((e) => null != e && 0 !== e.color),
        d = s.some((e) => e.role_benefits.benefits.length > 0),
        u = null != t && n.features.has(R.oNc.ROLE_SUBSCRIPTIONS_ENABLED),
        m = [
            {
                title: A.intl.string(A.t.p2Rsdn),
                items: [
                    {
                        description: A.intl.string(A.t.zbO7fX),
                        completed: u
                    }
                ]
            },
            {
                title: A.intl.string(A.t['/CfKoK']),
                items: [
                    {
                        description: A.intl.string(A.t.zvuI3d),
                        completed: !0
                    },
                    {
                        description: A.intl.string(A.t.cVcEYG),
                        completed: (null == l ? void 0 : l.description) != null && '' !== l.description
                    },
                    {
                        description: A.intl.string(A.t['88XnXF']),
                        completed: (null == l ? void 0 : l.cover_image_asset) != null
                    }
                ]
            },
            {
                title: A.intl.string(A.t.pXbGYW),
                items: [
                    {
                        description: A.intl.string(A.t.pCxWKC),
                        completed: a
                    },
                    {
                        description: A.intl.string(A.t['+amv5e']),
                        completed: c
                    },
                    {
                        description: A.intl.string(A.t['/P03Cw']),
                        completed: d
                    }
                ]
            }
        ];
    return (0, r.jsx)(S.Z, { children: m });
}
function M(e) {
    let { application: t } = e,
        { teams: n } = (0, p.Z)({ refreshOnDepChange: !1 }),
        i = n.find((e) => {
            var n;
            return e.id === (null == t || null == (n = t.team) ? void 0 : n.id);
        }),
        l = [D.C.ACTION_REQUIRED, D.C.BLOCKED, D.C.SUSPENDED];
    return (null == i ? void 0 : i.payout_account_status) != null && l.includes(null == i ? void 0 : i.payout_account_status)
        ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(s.LZC, { size: 16 }), (0, r.jsx)(N.Z, { children: A.intl.format(A.t.Yo0ZBw, { url: R.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(i.id) }) }), (0, r.jsx)(s.LZC, { size: 16 })]
          })
        : null;
}
function G(e) {
    let t,
        { guild: n, application: l } = e,
        s = (0, i.e7)([d.Z], () => d.Z.getProps().subsection),
        a = null != l && n.features.has(R.oNc.ROLE_SUBSCRIPTIONS_ENABLED);
    return (
        (0, o.P)(n),
        (t = a ? (s === R.KsC.ROLE_SUBSCRIPTION_EMOJI ? P.ue.EMOJIS : P.ue.TIERS) : P.ue.PAYMENT),
        (0, r.jsx)(j.l, {
            guildId: n.id,
            refetchOnMount: !0,
            children: (0, r.jsx)(v.in, {
                guildId: n.id,
                children: (0, r.jsx)(P.M7, {
                    initialTab: t,
                    children: (0, r.jsx)(U, {
                        guild: n,
                        application: l
                    })
                })
            })
        })
    );
}
function U(e) {
    let t,
        { guild: n, application: o } = e,
        d = null != o && n.features.has(R.oNc.ROLE_SUBSCRIPTIONS_ENABLED),
        { currentTab: p, setCurrentTab: _ } = (0, P.dw)(),
        v = (0, j.f)(),
        N = (0, i.e7)([x.default], () => x.default.getCurrentUser()),
        S = (0, C.Z)(n.id),
        D = null != n && (0, f.eM)(n, N),
        G = () => {
            let e = h.Z.getEveryoneRole(n);
            c.Z.close();
            let t = { [e.id]: e };
            ((0, u.iD)(n.id, {
                type: m.z.SERVER_SHOP,
                roles: t,
                initialTab: 'role_subscriptions',
                returnToSection: R.pNK.ROLE_SUBSCRIPTIONS
            }),
                (0, O.be)(n.id),
                (0, g.uL)(R.Z5c.CHANNEL(n.id, Z.oC.ROLE_SUBSCRIPTIONS)));
        };
    if (!v) return (0, r.jsx)(s.$jN, {});
    switch (p) {
        case P.ue.BASIC_INFO:
            t = (0, r.jsx)(E.Z, { guild: n });
            break;
        case P.ue.TIERS:
            t = (0, r.jsx)(T.Z, { guildId: n.id });
            break;
        case P.ue.PAYMENT:
            t = (0, r.jsx)(I.Z, { guild: n });
            break;
        case P.ue.EMOJIS:
            t = (0, r.jsx)(w.Z, { guild: n });
            break;
        default:
            (0, b.vE)(p);
    }
    return (0, r.jsxs)('div', {
        className: L.container,
        children: [
            (0, r.jsxs)('div', {
                className: L.mainContent,
                children: [
                    (0, r.jsx)(s.vwX, {
                        tag: 'h1',
                        children: A.intl.string(A.t['KzCF//'])
                    }),
                    (0, r.jsx)(s.R94, {
                        type: s.R94.Types.DESCRIPTION,
                        children: A.intl.string(A.t.KyGv0t)
                    }),
                    (0, r.jsx)(y.Z, { guild: n }),
                    d && (0, r.jsx)(M, { application: o }),
                    (0, r.jsxs)('div', {
                        className: L.tabBarContainer,
                        children: [
                            (0, r.jsxs)(s.njP, {
                                className: L.tabBar,
                                'aria-label': A.intl.string(A.t['+1H47u']),
                                selectedItem: p,
                                type: 'top',
                                look: 'brand',
                                onItemSelect: _,
                                children: [
                                    (0, r.jsx)(a.Z, {
                                        id: P.ue.BASIC_INFO,
                                        disabledTooltip: A.intl.string(A.t.NVDuUV),
                                        disabled: !d,
                                        children: A.intl.string(A.t['/CfKoK'])
                                    }),
                                    (0, r.jsx)(a.Z, {
                                        id: P.ue.TIERS,
                                        disabledTooltip: A.intl.string(A.t.NVDuUV),
                                        disabled: !d,
                                        children: A.intl.string(A.t.pXbGYW)
                                    }),
                                    (0, r.jsx)(a.Z, {
                                        id: P.ue.EMOJIS,
                                        disabledTooltip: A.intl.string(A.t.NVDuUV),
                                        disabled: !d,
                                        children: A.intl.string(A.t.XBkDoK)
                                    }),
                                    D
                                        ? (0, r.jsx)(s.njP.Item, {
                                              className: L.__invalid_tabBarItem,
                                              id: P.ue.PAYMENT,
                                              children: A.intl.string(A.t.p2Rsdn)
                                          })
                                        : null
                                ]
                            }),
                            d &&
                                (0, r.jsx)('div', {
                                    className: L.previewButton,
                                    children: (0, r.jsx)(s.ua7, {
                                        text: A.intl.string(A.t['1wCH4O']),
                                        children: (e) => {
                                            let { onMouseEnter: t, onMouseLeave: n } = e;
                                            return (0, r.jsx)(l.zx, {
                                                disabled: S,
                                                onMouseEnter: S ? t : void 0,
                                                onMouseLeave: S ? n : void 0,
                                                onClick: G,
                                                color: l.zx.Colors.PRIMARY,
                                                size: l.zx.Sizes.SMALL,
                                                grow: !S,
                                                look: l.zx.Looks.OUTLINED,
                                                className: L.previewButton,
                                                children: A.intl.string(A.t.vM81yc)
                                            });
                                        }
                                    })
                                })
                        ]
                    }),
                    t
                ]
            }),
            (0, r.jsx)(k, {
                application: o,
                guild: n
            })
        ]
    });
}
