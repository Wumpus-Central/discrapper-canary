n.d(t, { Z: () => L }), n(953529);
var r = n(200651);
n(192379);
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
    p = n(430824),
    h = n(594174),
    f = n(823379),
    x = n(730647),
    b = n(584825),
    j = n(723047),
    _ = n(303737),
    v = n(568074),
    O = n(411667),
    C = n(903773),
    y = n(822531),
    N = n(909656),
    I = n(210591),
    E = n(927731),
    S = n(798680),
    T = n(509026),
    P = n(981631),
    w = n(176505),
    R = n(829857),
    Z = n(388032),
    D = n(173409);
function A(e) {
    let { application: t, guild: n } = e,
        l = (0, b.YB)(n.id),
        s = (0, b.qi)(n.id),
        a = s.some((e) => null != e.name && null != e.subscription_plans[0] && null != e.description && null != e.image_asset),
        o = (0, i.e7)([p.Z], () => p.Z.getRoles(n.id)),
        c = s.map((e) => o[e.role_id]).some((e) => null != e && 0 !== e.color),
        d = s.some((e) => e.role_benefits.benefits.length > 0),
        u = null != t && n.hasFeature(P.oNc.ROLE_SUBSCRIPTIONS_ENABLED),
        m = [
            {
                title: Z.intl.string(Z.t.p2Rsdn),
                items: [
                    {
                        description: Z.intl.string(Z.t.zbO7fX),
                        completed: u
                    }
                ]
            },
            {
                title: Z.intl.string(Z.t['/CfKoK']),
                items: [
                    {
                        description: Z.intl.string(Z.t.zvuI3d),
                        completed: !0
                    },
                    {
                        description: Z.intl.string(Z.t.cVcEYG),
                        completed: (null == l ? void 0 : l.description) != null && '' !== l.description
                    },
                    {
                        description: Z.intl.string(Z.t['88XnXF']),
                        completed: (null == l ? void 0 : l.cover_image_asset) != null
                    }
                ]
            },
            {
                title: Z.intl.string(Z.t.pXbGYW),
                items: [
                    {
                        description: Z.intl.string(Z.t.pCxWKC),
                        completed: a
                    },
                    {
                        description: Z.intl.string(Z.t['+amv5e']),
                        completed: c
                    },
                    {
                        description: Z.intl.string(Z.t['/P03Cw']),
                        completed: d
                    }
                ]
            }
        ];
    return (0, r.jsx)(I.Z, { children: m });
}
function k(e) {
    let { application: t } = e,
        { teams: n } = (0, g.Z)({ refreshOnDepChange: !1 }),
        i = n.find((e) => {
            var n;
            return e.id === (null == t || null == (n = t.team) ? void 0 : n.id);
        }),
        s = [R.C.ACTION_REQUIRED, R.C.BLOCKED, R.C.SUSPENDED];
    return (null == i ? void 0 : i.payout_account_status) != null && s.includes(null == i ? void 0 : i.payout_account_status)
        ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(l.LZC, { size: 16 }), (0, r.jsx)(C.Z, { children: Z.intl.format(Z.t.Yo0ZBw, { url: P.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(i.id) }) }), (0, r.jsx)(l.LZC, { size: 16 })]
          })
        : null;
}
function L(e) {
    let t,
        { guild: n, application: l } = e,
        s = (0, i.e7)([c.Z], () => c.Z.getProps().subsection),
        o = null != l && n.hasFeature(P.oNc.ROLE_SUBSCRIPTIONS_ENABLED);
    return (
        (0, a.P)(n),
        (t = o ? (s === P.KsC.ROLE_SUBSCRIPTION_EMOJI ? S.ue.EMOJIS : S.ue.TIERS) : S.ue.PAYMENT),
        (0, r.jsx)(x.l, {
            guildId: n.id,
            refetchOnMount: !0,
            children: (0, r.jsx)(j.in, {
                guildId: n.id,
                children: (0, r.jsx)(S.M7, {
                    initialTab: t,
                    children: (0, r.jsx)(M, {
                        guild: n,
                        application: l
                    })
                })
            })
        })
    );
}
function M(e) {
    let t,
        { guild: n, application: a } = e,
        c = null != a && n.hasFeature(P.oNc.ROLE_SUBSCRIPTIONS_ENABLED),
        { currentTab: g, setCurrentTab: b } = (0, S.dw)(),
        j = (0, x.f)(),
        C = (0, i.e7)([h.default], () => h.default.getCurrentUser()),
        I = (0, v.Z)(n.id),
        R = n.isOwner(C),
        L = () => {
            let e = p.Z.getRole(n.id, n.getEveryoneRoleId());
            if (null == e) return;
            o.Z.close();
            let t = { [e.id]: e };
            (0, d.iD)(n.id, {
                type: u.z.SERVER_SHOP,
                roles: t,
                initialTab: 'role_subscriptions',
                returnToSection: P.pNK.ROLE_SUBSCRIPTIONS
            }),
                (0, _.be)(n.id),
                (0, m.uL)(P.Z5c.CHANNEL(n.id, w.oC.ROLE_SUBSCRIPTIONS));
        };
    if (!j) return (0, r.jsx)(l.$jN, {});
    switch (g) {
        case S.ue.BASIC_INFO:
            t = (0, r.jsx)(N.Z, { guild: n });
            break;
        case S.ue.TIERS:
            t = (0, r.jsx)(E.Z, { guildId: n.id });
            break;
        case S.ue.PAYMENT:
            t = (0, r.jsx)(y.Z, { guild: n });
            break;
        case S.ue.EMOJIS:
            t = (0, r.jsx)(T.Z, { guild: n });
            break;
        default:
            (0, f.vE)(g);
    }
    return (0, r.jsxs)('div', {
        className: D.container,
        children: [
            (0, r.jsxs)('div', {
                className: D.mainContent,
                children: [
                    (0, r.jsx)(l.vwX, {
                        tag: 'h1',
                        children: Z.intl.string(Z.t['KzCF//'])
                    }),
                    (0, r.jsx)(l.R94, {
                        type: l.R94.Types.DESCRIPTION,
                        children: Z.intl.string(Z.t.KyGv0t)
                    }),
                    (0, r.jsx)(O.Z, { guild: n }),
                    c && (0, r.jsx)(k, { application: a }),
                    (0, r.jsxs)('div', {
                        className: D.tabBarContainer,
                        children: [
                            (0, r.jsxs)(l.njP, {
                                className: D.tabBar,
                                'aria-label': Z.intl.string(Z.t['+1H47u']),
                                selectedItem: g,
                                type: 'top',
                                look: 'brand',
                                onItemSelect: b,
                                children: [
                                    (0, r.jsx)(s.Z, {
                                        id: S.ue.BASIC_INFO,
                                        disabledTooltip: Z.intl.string(Z.t.NVDuUV),
                                        disabled: !c,
                                        children: Z.intl.string(Z.t['/CfKoK'])
                                    }),
                                    (0, r.jsx)(s.Z, {
                                        id: S.ue.TIERS,
                                        disabledTooltip: Z.intl.string(Z.t.NVDuUV),
                                        disabled: !c,
                                        children: Z.intl.string(Z.t.pXbGYW)
                                    }),
                                    (0, r.jsx)(s.Z, {
                                        id: S.ue.EMOJIS,
                                        disabledTooltip: Z.intl.string(Z.t.NVDuUV),
                                        disabled: !c,
                                        children: Z.intl.string(Z.t.XBkDoK)
                                    }),
                                    R
                                        ? (0, r.jsx)(l.njP.Item, {
                                              className: D.__invalid_tabBarItem,
                                              id: S.ue.PAYMENT,
                                              children: Z.intl.string(Z.t.p2Rsdn)
                                          })
                                        : null
                                ]
                            }),
                            c &&
                                (0, r.jsx)('div', {
                                    className: D.previewButton,
                                    children: (0, r.jsx)(l.ua7, {
                                        text: Z.intl.string(Z.t['1wCH4O']),
                                        children: (e) => {
                                            let { onMouseEnter: t, onMouseLeave: n } = e;
                                            return (0, r.jsx)(l.zxk, {
                                                disabled: I,
                                                onMouseEnter: I ? t : void 0,
                                                onMouseLeave: I ? n : void 0,
                                                onClick: L,
                                                color: l.zxk.Colors.PRIMARY,
                                                size: l.zxk.Sizes.SMALL,
                                                grow: !I,
                                                look: l.zxk.Looks.OUTLINED,
                                                className: D.previewButton,
                                                children: Z.intl.string(Z.t.vM81yc)
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
