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
    p = n(388032),
    g = n(412142),
    h = n(174361);
let f = (e) => {
        let { setWelcomeView: t, setShowCreateModal: i } = e,
            s = [
                {
                    emoji: '\uD83D\uDCAC',
                    description: p.NW.string(p.t['s/ent7']),
                    name: p.NW.string(p.t['v/gQ4e'])
                },
                {
                    emoji: '\uD83C\uDFF9',
                    description: p.NW.string(p.t.Y9So0N),
                    name: p.NW.string(p.t['7mUf0d'])
                },
                {
                    emoji: '\uD83D\uDDDE',
                    description: p.NW.string(p.t.wsJcws),
                    name: p.NW.string(p.t.vrGLjo)
                }
            ];
        return (0, r.jsxs)(a.hjN, {
            title: p.NW.string(p.t['2rkmDg']),
            tag: 'h1',
            children: [
                (0, r.jsxs)('div', {
                    className: g.welcomeDescription,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            children: p.NW.format(p.t.a59UeH, {})
                        }),
                        (0, r.jsx)(a.zxk, {
                            onClick: () => {
                                i(!0), t(2);
                            },
                            children: p.NW.string(p.t.RWdjPz)
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: g.exampleContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: g.exampleWumpus,
                            children: [
                                (0, r.jsx)('img', {
                                    className: g.wumpus,
                                    alt: '',
                                    src: n(663346)
                                }),
                                (0, r.jsx)('div', { className: g.tooltipPointer }),
                                (0, r.jsx)('div', {
                                    className: g.tooltip,
                                    children: p.NW.string(p.t.aHNFSE)
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: g.exampleModal,
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
                                    className: g.header,
                                    children: p.NW.format(p.t['5NJlXl'], {})
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    className: h.guildDescription,
                                    children: p.NW.string(p.t.Xvsuk5)
                                }),
                                (0, r.jsx)(a.vwX, {
                                    className: h.choiceHeader,
                                    children: p.NW.string(p.t['haj5+v'])
                                }),
                                (0, r.jsx)('div', {
                                    className: h.options,
                                    children: s.map((e) =>
                                        (0, r.jsxs)(
                                            'div',
                                            {
                                                className: g.optionContainer,
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
            [o, p] = i.useState(!1);
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
                    setShowCreateModal: p
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
