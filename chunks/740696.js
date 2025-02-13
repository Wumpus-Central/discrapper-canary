a.d(e, { default: () => j }), a(47120);
var n = a(200651),
    i = a(192379),
    s = a(442837),
    r = a(481060),
    l = a(313201),
    o = a(430824),
    c = a(496675),
    d = a(228392),
    m = a(941848),
    g = a(710352),
    u = a(981631),
    x = a(921944),
    h = a(388032),
    p = a(6997);
let v = () => [
    {
        id: 0,
        name: h.intl.string(h.t.HTA519)
    },
    {
        id: 1,
        name: h.intl.string(h.t.IHjjY2)
    },
    {
        id: 2,
        name: h.intl.string(h.t.x3drh4)
    }
];
function j(t) {
    let { guildId: e, shouldUpsellCreation: j, transitionState: f, onClose: N } = t,
        b = (0, s.e7)([o.Z], () => o.Z.getGuild(e), [e]),
        C = (0, s.e7)([c.Z], () => c.Z.can(u.Plq.MANAGE_CHANNELS, b)),
        S = v(),
        [_, k] = i.useState(0),
        P = (0, l.Dt)();
    return (0, n.jsxs)(r.Y0X, {
        transitionState: f,
        'aria-labelledby': P,
        size: r.CgR.LARGE,
        children: [
            (0, n.jsxs)(r.xBx, {
                separator: !1,
                className: p.header,
                children: [
                    (0, n.jsx)(r.X6q, {
                        variant: 'heading-xl/semibold',
                        children: h.intl.string(h.t['6S6WCQ'])
                    }),
                    (0, n.jsx)(r.olH, { onClick: () => N() })
                ]
            }),
            (0, n.jsx)(r.hzk, {
                children: (0, n.jsxs)('div', {
                    className: p.content,
                    children: [
                        (0, n.jsx)(r.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: h.intl.string(h.t.I2BA8P)
                        }),
                        (0, n.jsx)('div', {
                            className: p.tabBar,
                            children: (0, n.jsx)(r.njP, {
                                selectedItem: _,
                                type: 'top',
                                onItemSelect: (t) => {
                                    k(t), (0, d.ws)({ forumDemoId: t });
                                },
                                className: p.tags,
                                children: S.map((t, e) =>
                                    (0, n.jsx)(
                                        r.njP.Item,
                                        {
                                            id: e,
                                            children: t.name
                                        },
                                        e
                                    )
                                )
                            })
                        }),
                        (0, n.jsx)(m.Z, { id: _ })
                    ]
                })
            }),
            C &&
                (0, n.jsxs)(r.mzw, {
                    className: p.footer,
                    children: [
                        (0, n.jsxs)('div', {
                            className: p.buttons,
                            children: [
                                (0, n.jsx)(r.zxk, {
                                    look: r.zxk.Looks.BLANK,
                                    color: r.zxk.Colors.PRIMARY,
                                    onClick: () => N(x.L.SECONDARY),
                                    className: p.button,
                                    children: j ? h.intl.string(h.t.TulDPj) : h.intl.string(h.t['NX+WJC'])
                                }),
                                j &&
                                    (0, n.jsx)(r.zxk, {
                                        onClick: () => {
                                            (0, r.ZDy)(async () => {
                                                let { default: t } = await Promise.all([a.e('45094'), a.e('20110')]).then(a.bind(a, 218613));
                                                return (a) =>
                                                    (0, n.jsx)(t, {
                                                        ...a,
                                                        channelType: u.d4z.GUILD_FORUM,
                                                        guildId: e,
                                                        prefillChannelName: j ? h.intl.string(h.t['5z1Xam']) : void 0
                                                    });
                                            }),
                                                N(x.L.PRIMARY);
                                        },
                                        children: h.intl.string(h.t['1X8SKy'])
                                    })
                            ]
                        }),
                        (0, n.jsx)(r.zxk, {
                            look: r.zxk.Looks.LINK,
                            color: r.zxk.Colors.LINK,
                            onClick: () => {
                                open(g.V8);
                            },
                            children: h.intl.string(h.t.hvVgAQ)
                        })
                    ]
                })
        ]
    });
}
