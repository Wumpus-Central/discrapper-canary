n.d(t, { Z: () => _ }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(570140),
    o = n(596454),
    c = n(524329),
    d = n(823379),
    u = n(999382),
    m = n(413584),
    h = n(388032),
    g = n(41691),
    x = n(908145);
let p = (e) => {
        let { setWelcomeView: t, setShowCreateModal: r } = e,
            l = [
                {
                    emoji: '\uD83D\uDCAC',
                    description: h.intl.string(h.t['s/ent7']),
                    name: h.intl.string(h.t['v/gQ4e'])
                },
                {
                    emoji: '\uD83C\uDFF9',
                    description: h.intl.string(h.t.Y9So0N),
                    name: h.intl.string(h.t['7mUf0d'])
                },
                {
                    emoji: '\uD83D\uDDDE',
                    description: h.intl.string(h.t.wsJcws),
                    name: h.intl.string(h.t.vrGLjo)
                }
            ];
        return (0, i.jsxs)(s.hjN, {
            title: h.intl.string(h.t['2rkmDg']),
            tag: 'h1',
            children: [
                (0, i.jsxs)('div', {
                    className: g.welcomeDescription,
                    children: [
                        (0, i.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: h.intl.format(h.t.a59UeH, {})
                        }),
                        (0, i.jsx)(s.zxk, {
                            onClick: () => {
                                r(!0), t(2);
                            },
                            children: h.intl.string(h.t.RWdjPz)
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: g.exampleContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: g.exampleWumpus,
                            children: [
                                (0, i.jsx)('img', {
                                    className: g.wumpus,
                                    alt: '',
                                    src: n(663346)
                                }),
                                (0, i.jsx)('div', { className: g.tooltipPointer }),
                                (0, i.jsx)('div', {
                                    className: g.tooltip,
                                    children: h.intl.string(h.t.aHNFSE)
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: g.exampleModal,
                            children: [
                                (0, i.jsx)('img', {
                                    alt: '',
                                    className: x.guildIcon,
                                    src: n(691466),
                                    width: 64,
                                    height: 64
                                }),
                                (0, i.jsx)(s.X6q, {
                                    variant: 'heading-xl/semibold',
                                    className: g.header,
                                    children: h.intl.format(h.t['5NJlXl'], {})
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    className: x.guildDescription,
                                    children: h.intl.string(h.t.Xvsuk5)
                                }),
                                (0, i.jsx)(s.vwX, {
                                    className: x.choiceHeader,
                                    children: h.intl.string(h.t['haj5+v'])
                                }),
                                (0, i.jsx)('div', {
                                    className: x.options,
                                    children: l.map((e) =>
                                        (0, i.jsxs)(
                                            'div',
                                            {
                                                className: g.optionContainer,
                                                children: [
                                                    (0, i.jsx)(o.Z, {
                                                        emojiName: e.emoji,
                                                        className: x.optionEmoji
                                                    }),
                                                    (0, i.jsxs)('div', {
                                                        className: x.optionTextContainer,
                                                        children: [
                                                            (0, i.jsx)(s.Text, {
                                                                variant: 'text-md/semibold',
                                                                className: x.channelDescription,
                                                                children: e.description
                                                            }),
                                                            (0, i.jsx)(s.Text, {
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
    _ = () => {
        let { guild: e } = (0, l.e7)([u.Z], () => u.Z.getProps()),
            [t, n] = r.useState(0),
            [o, h] = r.useState(!1);
        switch (
            (r.useEffect(() => {
                null != e &&
                    a.Z.wait(() => {
                        (0, c.RM)(e.id).then((e) => {
                            n(null == e ? 1 : 2);
                        });
                    });
            }, [e]),
            t)
        ) {
            case 0:
                return (0, i.jsx)(s.$jN, { type: s.$jN.Type.SPINNING_CIRCLE });
            case 1:
                return (0, i.jsx)(p, {
                    setWelcomeView: n,
                    setShowCreateModal: h
                });
            case 2:
                return (0, i.jsx)(m.Z, {
                    guild: e,
                    showCreateModal: o
                });
            default:
                return (0, d.vE)(t);
        }
    };
