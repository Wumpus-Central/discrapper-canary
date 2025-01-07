n.d(t, {
    Z: function () {
        return M;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(204875),
    s = n(715796),
    o = n(434404),
    c = n(999382),
    d = n(962086),
    u = n(225675),
    m = n(703656),
    h = n(577275),
    g = n(430824),
    x = n(594174),
    p = n(823379),
    f = n(730647),
    C = n(584825),
    v = n(723047),
    _ = n(303737),
    I = n(568074),
    N = n(411667),
    T = n(903773),
    j = n(822531),
    b = n(909656),
    S = n(210591),
    E = n(927731),
    R = n(798680),
    y = n(509026),
    A = n(981631),
    Z = n(176505),
    L = n(829857),
    D = n(388032),
    O = n(665393);
function k(e) {
    let { application: t, guild: n } = e,
        l = (0, C.YB)(n.id),
        a = (0, C.qi)(n.id),
        s = a.some((e) => null != e.name && null != e.subscription_plans[0] && null != e.description && null != e.image_asset),
        o = (0, r.e7)([g.Z], () => g.Z.getRoles(n.id)),
        c = a.map((e) => o[e.role_id]).some((e) => null != e && 0 !== e.color),
        d = a.some((e) => e.role_benefits.benefits.length > 0),
        u = null != t && n.hasFeature(A.oNc.ROLE_SUBSCRIPTIONS_ENABLED),
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
                        completed: s
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
    return (0, i.jsx)(S.Z, { children: m });
}
function P(e) {
    let { application: t } = e,
        { teams: n } = (0, h.Z)({ refreshOnDepChange: !1 }),
        r = n.find((e) => {
            var n;
            return e.id === (null == t ? void 0 : null === (n = t.team) || void 0 === n ? void 0 : n.id);
        }),
        a = [L.C.ACTION_REQUIRED, L.C.BLOCKED, L.C.SUSPENDED];
    return (null == r ? void 0 : r.payout_account_status) != null && a.includes(null == r ? void 0 : r.payout_account_status)
        ? (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(l.Spacer, { size: 16 }), (0, i.jsx)(T.Z, { children: D.intl.format(D.t.Yo0ZBw, { url: A.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(r.id) }) }), (0, i.jsx)(l.Spacer, { size: 16 })]
          })
        : null;
}
function M(e) {
    let t,
        { guild: n, application: l } = e,
        a = (0, r.e7)([c.Z], () => c.Z.getProps().subsection),
        o = null != l && n.hasFeature(A.oNc.ROLE_SUBSCRIPTIONS_ENABLED);
    return (
        (0, s.P)(n),
        (t = o
            ? (function (e) {
                  if (e === A.KsC.ROLE_SUBSCRIPTION_EMOJI) return R.ue.EMOJIS;
                  return R.ue.TIERS;
              })(a)
            : R.ue.PAYMENT),
        (0, i.jsx)(f.l, {
            guildId: n.id,
            refetchOnMount: !0,
            children: (0, i.jsx)(v.in, {
                guildId: n.id,
                children: (0, i.jsx)(R.M7, {
                    initialTab: t,
                    children: (0, i.jsx)(w, {
                        guild: n,
                        application: l
                    })
                })
            })
        })
    );
}
function w(e) {
    let t,
        { guild: n, application: s } = e,
        c = null != s && n.hasFeature(A.oNc.ROLE_SUBSCRIPTIONS_ENABLED),
        { currentTab: h, setCurrentTab: C } = (0, R.dw)(),
        v = (0, f.f)(),
        T = (0, r.e7)([x.default], () => x.default.getCurrentUser()),
        S = (0, I.Z)(n.id),
        L = n.isOwner(T),
        M = () => {
            let e = g.Z.getRole(n.id, n.getEveryoneRoleId());
            if (null == e) return;
            o.Z.close();
            let t = { [e.id]: e };
            (0, d.iD)(n.id, {
                type: u.z.SERVER_SHOP,
                roles: t,
                initialTab: 'role_subscriptions',
                returnToSection: A.pNK.ROLE_SUBSCRIPTIONS
            }),
                (0, _.be)(n.id),
                (0, m.uL)(A.Z5c.CHANNEL(n.id, Z.oC.ROLE_SUBSCRIPTIONS));
        };
    if (!v) return (0, i.jsx)(l.Spinner, {});
    switch (h) {
        case R.ue.BASIC_INFO:
            t = (0, i.jsx)(b.Z, { guild: n });
            break;
        case R.ue.TIERS:
            t = (0, i.jsx)(E.Z, { guildId: n.id });
            break;
        case R.ue.PAYMENT:
            t = (0, i.jsx)(j.Z, { guild: n });
            break;
        case R.ue.EMOJIS:
            t = (0, i.jsx)(y.Z, { guild: n });
            break;
        default:
            (0, p.vE)(h);
    }
    return (0, i.jsxs)('div', {
        className: O.container,
        children: [
            (0, i.jsxs)('div', {
                className: O.mainContent,
                children: [
                    (0, i.jsx)(l.FormTitle, {
                        tag: 'h1',
                        children: D.intl.string(D.t['KzCF//'])
                    }),
                    (0, i.jsx)(l.FormText, {
                        type: l.FormText.Types.DESCRIPTION,
                        children: D.intl.string(D.t.KyGv0t)
                    }),
                    (0, i.jsx)(N.Z, { guild: n }),
                    c && (0, i.jsx)(P, { application: s }),
                    (0, i.jsxs)('div', {
                        className: O.tabBarContainer,
                        children: [
                            (0, i.jsxs)(l.TabBar, {
                                className: O.tabBar,
                                'aria-label': D.intl.string(D.t['+1H47u']),
                                selectedItem: h,
                                type: 'top',
                                look: 'brand',
                                onItemSelect: C,
                                children: [
                                    (0, i.jsx)(a.Z, {
                                        id: R.ue.BASIC_INFO,
                                        disabledTooltip: D.intl.string(D.t.NVDuUV),
                                        disabled: !c,
                                        children: D.intl.string(D.t['/CfKoK'])
                                    }),
                                    (0, i.jsx)(a.Z, {
                                        id: R.ue.TIERS,
                                        disabledTooltip: D.intl.string(D.t.NVDuUV),
                                        disabled: !c,
                                        children: D.intl.string(D.t.pXbGYW)
                                    }),
                                    (0, i.jsx)(a.Z, {
                                        id: R.ue.EMOJIS,
                                        disabledTooltip: D.intl.string(D.t.NVDuUV),
                                        disabled: !c,
                                        children: D.intl.string(D.t.XBkDoK)
                                    }),
                                    L
                                        ? (0, i.jsx)(l.TabBar.Item, {
                                              className: O.__invalid_tabBarItem,
                                              id: R.ue.PAYMENT,
                                              children: D.intl.string(D.t.p2Rsdn)
                                          })
                                        : null
                                ]
                            }),
                            c &&
                                (0, i.jsx)('div', {
                                    className: O.previewButton,
                                    children: (0, i.jsx)(l.Tooltip, {
                                        text: D.intl.string(D.t['1wCH4O']),
                                        children: (e) => {
                                            let { onMouseEnter: t, onMouseLeave: n } = e;
                                            return (0, i.jsx)(l.Button, {
                                                disabled: S,
                                                onMouseEnter: S ? t : void 0,
                                                onMouseLeave: S ? n : void 0,
                                                onClick: M,
                                                color: l.Button.Colors.PRIMARY,
                                                size: l.Button.Sizes.SMALL,
                                                grow: !S,
                                                look: l.Button.Looks.OUTLINED,
                                                className: O.previewButton,
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
            (0, i.jsx)(k, {
                application: s,
                guild: n
            })
        ]
    });
}
