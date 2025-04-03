n.d(t, { Z: () => W }), n(266796);
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    a = n(204875),
    l = n(715796),
    o = n(434404),
    c = n(999382),
    d = n(962086),
    u = n(225675),
    m = n(703656),
    g = n(577275),
    p = n(430824),
    h = n(594174),
    f = n(823379),
    b = n(730647),
    x = n(584825),
    j = n(723047),
    N = n(303737),
    _ = n(568074),
    v = n(411667),
    C = n(903773),
    O = n(822531),
    y = n(909656),
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
        s = (0, x.YB)(n.id),
        a = (0, x.qi)(n.id),
        l = a.some((e) => null != e.name && null != e.subscription_plans[0] && null != e.description && null != e.image_asset),
        o = (0, i.e7)([p.Z], () => p.Z.getRoles(n.id)),
        c = a.map((e) => o[e.role_id]).some((e) => null != e && 0 !== e.color),
        d = a.some((e) => e.role_benefits.benefits.length > 0),
        u = null != t && n.hasFeature(P.oNc.ROLE_SUBSCRIPTIONS_ENABLED),
        m = [
            {
                title: Z.NW.string(Z.t.p2Rsdn),
                items: [
                    {
                        description: Z.NW.string(Z.t.zbO7fX),
                        completed: u
                    }
                ]
            },
            {
                title: Z.NW.string(Z.t['/CfKoK']),
                items: [
                    {
                        description: Z.NW.string(Z.t.zvuI3d),
                        completed: !0
                    },
                    {
                        description: Z.NW.string(Z.t.cVcEYG),
                        completed: (null == s ? void 0 : s.description) != null && '' !== s.description
                    },
                    {
                        description: Z.NW.string(Z.t['88XnXF']),
                        completed: (null == s ? void 0 : s.cover_image_asset) != null
                    }
                ]
            },
            {
                title: Z.NW.string(Z.t.pXbGYW),
                items: [
                    {
                        description: Z.NW.string(Z.t.pCxWKC),
                        completed: l
                    },
                    {
                        description: Z.NW.string(Z.t['+amv5e']),
                        completed: c
                    },
                    {
                        description: Z.NW.string(Z.t['/P03Cw']),
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
        a = [R.C.ACTION_REQUIRED, R.C.BLOCKED, R.C.SUSPENDED];
    return (null == i ? void 0 : i.payout_account_status) != null && a.includes(null == i ? void 0 : i.payout_account_status)
        ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(s.LZC, { size: 16 }), (0, r.jsx)(C.Z, { children: Z.NW.format(Z.t.Yo0ZBw, { url: P.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(i.id) }) }), (0, r.jsx)(s.LZC, { size: 16 })]
          })
        : null;
}
function W(e) {
    let t,
        { guild: n, application: s } = e,
        a = (0, i.e7)([c.Z], () => c.Z.getProps().subsection),
        o = null != s && n.hasFeature(P.oNc.ROLE_SUBSCRIPTIONS_ENABLED);
    return (
        (0, l.P)(n),
        (t = o ? (a === P.KsC.ROLE_SUBSCRIPTION_EMOJI ? S.ue.EMOJIS : S.ue.TIERS) : S.ue.PAYMENT),
        (0, r.jsx)(b.l, {
            guildId: n.id,
            refetchOnMount: !0,
            children: (0, r.jsx)(j.in, {
                guildId: n.id,
                children: (0, r.jsx)(S.M7, {
                    initialTab: t,
                    children: (0, r.jsx)(L, {
                        guild: n,
                        application: s
                    })
                })
            })
        })
    );
}
function L(e) {
    let t,
        { guild: n, application: l } = e,
        c = null != l && n.hasFeature(P.oNc.ROLE_SUBSCRIPTIONS_ENABLED),
        { currentTab: g, setCurrentTab: x } = (0, S.dw)(),
        j = (0, b.f)(),
        C = (0, i.e7)([h.default], () => h.default.getCurrentUser()),
        I = (0, _.Z)(n.id),
        R = n.isOwner(C),
        W = () => {
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
                (0, N.be)(n.id),
                (0, m.uL)(P.Z5c.CHANNEL(n.id, w.oC.ROLE_SUBSCRIPTIONS));
        };
    if (!j) return (0, r.jsx)(s.$jN, {});
    switch (g) {
        case S.ue.BASIC_INFO:
            t = (0, r.jsx)(y.Z, { guild: n });
            break;
        case S.ue.TIERS:
            t = (0, r.jsx)(E.Z, { guildId: n.id });
            break;
        case S.ue.PAYMENT:
            t = (0, r.jsx)(O.Z, { guild: n });
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
                    (0, r.jsx)(s.vwX, {
                        tag: 'h1',
                        children: Z.NW.string(Z.t['KzCF//'])
                    }),
                    (0, r.jsx)(s.R94, {
                        type: s.R94.Types.DESCRIPTION,
                        children: Z.NW.string(Z.t.KyGv0t)
                    }),
                    (0, r.jsx)(v.Z, { guild: n }),
                    c && (0, r.jsx)(k, { application: l }),
                    (0, r.jsxs)('div', {
                        className: D.tabBarContainer,
                        children: [
                            (0, r.jsxs)(s.njP, {
                                className: D.tabBar,
                                'aria-label': Z.NW.string(Z.t['+1H47u']),
                                selectedItem: g,
                                type: 'top',
                                look: 'brand',
                                onItemSelect: x,
                                children: [
                                    (0, r.jsx)(a.Z, {
                                        id: S.ue.BASIC_INFO,
                                        disabledTooltip: Z.NW.string(Z.t.NVDuUV),
                                        disabled: !c,
                                        children: Z.NW.string(Z.t['/CfKoK'])
                                    }),
                                    (0, r.jsx)(a.Z, {
                                        id: S.ue.TIERS,
                                        disabledTooltip: Z.NW.string(Z.t.NVDuUV),
                                        disabled: !c,
                                        children: Z.NW.string(Z.t.pXbGYW)
                                    }),
                                    (0, r.jsx)(a.Z, {
                                        id: S.ue.EMOJIS,
                                        disabledTooltip: Z.NW.string(Z.t.NVDuUV),
                                        disabled: !c,
                                        children: Z.NW.string(Z.t.XBkDoK)
                                    }),
                                    R
                                        ? (0, r.jsx)(s.njP.Item, {
                                              className: D.__invalid_tabBarItem,
                                              id: S.ue.PAYMENT,
                                              children: Z.NW.string(Z.t.p2Rsdn)
                                          })
                                        : null
                                ]
                            }),
                            c &&
                                (0, r.jsx)('div', {
                                    className: D.previewButton,
                                    children: (0, r.jsx)(s.ua7, {
                                        text: Z.NW.string(Z.t['1wCH4O']),
                                        children: (e) => {
                                            let { onMouseEnter: t, onMouseLeave: n } = e;
                                            return (0, r.jsx)(s.zxk, {
                                                disabled: I,
                                                onMouseEnter: I ? t : void 0,
                                                onMouseLeave: I ? n : void 0,
                                                onClick: W,
                                                color: s.zxk.Colors.PRIMARY,
                                                size: s.zxk.Sizes.SMALL,
                                                grow: !I,
                                                look: s.zxk.Looks.OUTLINED,
                                                className: D.previewButton,
                                                children: Z.NW.string(Z.t.vM81yc)
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
                application: l,
                guild: n
            })
        ]
    });
}
