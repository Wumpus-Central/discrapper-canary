n.r(a),
    n.d(a, {
        default: function () {
            return f;
        }
    }),
    n(47120);
var e = n(200651),
    i = n(192379),
    s = n(442837),
    r = n(481060),
    o = n(313201),
    l = n(430824),
    c = n(496675),
    d = n(228392),
    m = n(941848),
    g = n(710352),
    u = n(981631),
    x = n(921944),
    h = n(388032),
    p = n(898118);
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
function f(t) {
    let { guildId: a, shouldUpsellCreation: f, transitionState: j, onClose: N } = t,
        b = (0, s.e7)([l.Z], () => l.Z.getGuild(a), [a]),
        C = (0, s.e7)([c.Z], () => c.Z.can(u.Plq.MANAGE_CHANNELS, b)),
        S = v(),
        [P, y] = i.useState(0),
        T = (0, o.Dt)();
    return (0, e.jsxs)(r.ModalRoot, {
        transitionState: j,
        'aria-labelledby': T,
        size: r.ModalSize.LARGE,
        children: [
            (0, e.jsxs)(r.ModalHeader, {
                separator: !1,
                className: p.header,
                children: [
                    (0, e.jsx)(r.Heading, {
                        variant: 'heading-xl/semibold',
                        children: h.intl.string(h.t['6S6WCQ'])
                    }),
                    (0, e.jsx)(r.ModalCloseButton, { onClick: () => N() })
                ]
            }),
            (0, e.jsx)(r.ModalContent, {
                children: (0, e.jsxs)('div', {
                    className: p.content,
                    children: [
                        (0, e.jsx)(r.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: h.intl.string(h.t.I2BA8P)
                        }),
                        (0, e.jsx)('div', {
                            className: p.tabBar,
                            children: (0, e.jsx)(r.TabBar, {
                                selectedItem: P,
                                type: 'top',
                                onItemSelect: (t) => {
                                    y(t), (0, d.ws)({ forumDemoId: t });
                                },
                                className: p.tags,
                                children: S.map((t, a) =>
                                    (0, e.jsx)(
                                        r.TabBar.Item,
                                        {
                                            id: a,
                                            children: t.name
                                        },
                                        a
                                    )
                                )
                            })
                        }),
                        (0, e.jsx)(m.Z, { id: P })
                    ]
                })
            }),
            C &&
                (0, e.jsxs)(r.ModalFooter, {
                    className: p.footer,
                    children: [
                        (0, e.jsxs)('div', {
                            className: p.buttons,
                            children: [
                                (0, e.jsx)(r.Button, {
                                    look: r.Button.Looks.BLANK,
                                    color: r.Button.Colors.PRIMARY,
                                    onClick: () => N(x.L.SECONDARY),
                                    className: p.button,
                                    children: f ? h.intl.string(h.t.TulDPj) : h.intl.string(h.t['NX+WJC'])
                                }),
                                f &&
                                    (0, e.jsx)(r.Button, {
                                        onClick: () => {
                                            (0, r.openModalLazy)(async () => {
                                                let { default: t } = await Promise.all([n.e('45094'), n.e('5506')]).then(n.bind(n, 218613));
                                                return (n) =>
                                                    (0, e.jsx)(t, {
                                                        ...n,
                                                        channelType: u.d4z.GUILD_FORUM,
                                                        guildId: a,
                                                        prefillChannelName: f ? h.intl.string(h.t['5z1Xam']) : void 0
                                                    });
                                            }),
                                                N(x.L.PRIMARY);
                                        },
                                        children: h.intl.string(h.t['1X8SKy'])
                                    })
                            ]
                        }),
                        (0, e.jsx)(r.Button, {
                            look: r.Button.Looks.LINK,
                            color: r.Button.Colors.LINK,
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
