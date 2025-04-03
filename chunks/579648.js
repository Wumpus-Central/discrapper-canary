n.d(t, { Z: () => b }), n(266796), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(570140),
    o = n(596454),
    c = n(524329),
    d = n(823379),
    u = n(999382),
    m = n(413584),
    g = n(388032),
    p = n(673305),
    h = n(62311);
let f = (e) => {
        let { setWelcomeView: t, setShowCreateModal: i } = e,
            s = [
                {
                    emoji: '\uD83D\uDCAC',
                    description: g.NW.string(g.t['s/ent7']),
                    name: g.NW.string(g.t['v/gQ4e'])
                },
                {
                    emoji: '\uD83C\uDFF9',
                    description: g.NW.string(g.t.Y9So0N),
                    name: g.NW.string(g.t['7mUf0d'])
                },
                {
                    emoji: '\uD83D\uDDDE',
                    description: g.NW.string(g.t.wsJcws),
                    name: g.NW.string(g.t.vrGLjo)
                }
            ];
        return (0, r.jsxs)(a.hjN, {
            title: g.NW.string(g.t['2rkmDg']),
            tag: 'h1',
            children: [
                (0, r.jsxs)('div', {
                    className: p.welcomeDescription,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            children: g.NW.format(g.t.a59UeH, {})
                        }),
                        (0, r.jsx)(a.zxk, {
                            onClick: () => {
                                i(!0), t(2);
                            },
                            children: g.NW.string(g.t.RWdjPz)
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: p.exampleContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: p.exampleWumpus,
                            children: [
                                (0, r.jsx)('img', {
                                    className: p.wumpus,
                                    alt: '',
                                    src: n(663346)
                                }),
                                (0, r.jsx)('div', { className: p.tooltipPointer }),
                                (0, r.jsx)('div', {
                                    className: p.tooltip,
                                    children: g.NW.string(g.t.aHNFSE)
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: p.exampleModal,
                            children: [
                                (0, r.jsx)('img', {
                                    alt: '',
                                    className: h.guildIcon,
                                    src: n(691466),
                                    width: 64,
                                    height: 64
                                }),
                                (0, r.jsx)(a.X6q, {
                                    variant: 'heading-xl/semibold',
                                    className: p.header,
                                    children: g.NW.format(g.t['5NJlXl'], {})
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    className: h.guildDescription,
                                    children: g.NW.string(g.t.Xvsuk5)
                                }),
                                (0, r.jsx)(a.vwX, {
                                    className: h.choiceHeader,
                                    children: g.NW.string(g.t['haj5+v'])
                                }),
                                (0, r.jsx)('div', {
                                    className: h.options,
                                    children: s.map((e) =>
                                        (0, r.jsxs)(
                                            'div',
                                            {
                                                className: p.optionContainer,
                                                children: [
                                                    (0, r.jsx)(o.Z, {
                                                        emojiName: e.emoji,
                                                        className: h.optionEmoji
                                                    }),
                                                    (0, r.jsxs)('div', {
                                                        className: h.optionTextContainer,
                                                        children: [
                                                            (0, r.jsx)(a.Text, {
                                                                variant: 'text-md/semibold',
                                                                className: h.channelDescription,
                                                                children: e.description
                                                            }),
                                                            (0, r.jsx)(a.Text, {
                                                                variant: 'text-xs/normal',
                                                                color: 'header-secondary',
                                                                children: '#'.concat(e.name)
                                                            })
                                                        ]
                                                    })
                                                ]
                                            },
                                            e.name
                                        )
                                    )
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    },
    b = () => {
        let { guild: e } = (0, s.e7)([u.Z], () => u.Z.getProps()),
            [t, n] = i.useState(0),
            [o, g] = i.useState(!1);
        switch (
            (i.useEffect(() => {
                null != e &&
                    l.Z.wait(() => {
                        (0, c.RM)(e.id).then((e) => {
                            n(null == e ? 1 : 2);
                        });
                    });
            }, [e]),
            t)
        ) {
            case 0:
                return (0, r.jsx)(a.$jN, { type: a.$jN.Type.SPINNING_CIRCLE });
            case 1:
                return (0, r.jsx)(f, {
                    setWelcomeView: n,
                    setShowCreateModal: g
                });
            case 2:
                return (0, r.jsx)(m.Z, {
                    guild: e,
                    showCreateModal: o
                });
            default:
                return (0, d.vE)(t);
        }
    };
