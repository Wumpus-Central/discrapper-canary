n(47120);
var i,
    r,
    l = n(200651),
    s = n(192379),
    a = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(596454),
    u = n(524329),
    m = n(823379),
    h = n(999382),
    g = n(413584),
    x = n(388032),
    p = n(41691),
    f = n(908145);
((r = i || (i = {}))[(r.LOADING = 0)] = 'LOADING'), (r[(r.INTRO = 1)] = 'INTRO'), (r[(r.SETTINGS = 2)] = 'SETTINGS');
let C = (e) => {
    let { setWelcomeView: t, setShowCreateModal: i } = e,
        r = [
            {
                emoji: '\uD83D\uDCAC',
                description: x.intl.string(x.t['s/ent7']),
                name: x.intl.string(x.t['v/gQ4e'])
            },
            {
                emoji: '\uD83C\uDFF9',
                description: x.intl.string(x.t.Y9So0N),
                name: x.intl.string(x.t['7mUf0d'])
            },
            {
                emoji: '\uD83D\uDDDE',
                description: x.intl.string(x.t.wsJcws),
                name: x.intl.string(x.t.vrGLjo)
            }
        ];
    return (0, l.jsxs)(o.FormSection, {
        title: x.intl.string(x.t['2rkmDg']),
        tag: 'h1',
        children: [
            (0, l.jsxs)('div', {
                className: p.welcomeDescription,
                children: [
                    (0, l.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        children: x.intl.format(x.t.a59UeH, {})
                    }),
                    (0, l.jsx)(o.Button, {
                        onClick: () => {
                            i(!0), t(2);
                        },
                        children: x.intl.string(x.t.RWdjPz)
                    })
                ]
            }),
            (0, l.jsxs)('div', {
                className: p.exampleContainer,
                children: [
                    (0, l.jsxs)('div', {
                        className: p.exampleWumpus,
                        children: [
                            (0, l.jsx)('img', {
                                className: p.wumpus,
                                alt: '',
                                src: n(663346)
                            }),
                            (0, l.jsx)('div', { className: p.tooltipPointer }),
                            (0, l.jsx)('div', {
                                className: p.tooltip,
                                children: x.intl.string(x.t.aHNFSE)
                            })
                        ]
                    }),
                    (0, l.jsxs)('div', {
                        className: p.exampleModal,
                        children: [
                            (0, l.jsx)('img', {
                                alt: '',
                                className: f.guildIcon,
                                src: n(691466),
                                width: 64,
                                height: 64
                            }),
                            (0, l.jsx)(o.Heading, {
                                variant: 'heading-xl/semibold',
                                className: p.header,
                                children: x.intl.format(x.t['5NJlXl'], {})
                            }),
                            (0, l.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                className: f.guildDescription,
                                children: x.intl.string(x.t.Xvsuk5)
                            }),
                            (0, l.jsx)(o.FormTitle, {
                                className: f.choiceHeader,
                                children: x.intl.string(x.t['haj5+v'])
                            }),
                            (0, l.jsx)('div', {
                                className: f.options,
                                children: r.map((e) =>
                                    (0, l.jsxs)(
                                        'div',
                                        {
                                            className: p.optionContainer,
                                            children: [
                                                (0, l.jsx)(d.Z, {
                                                    emojiName: e.emoji,
                                                    className: f.optionEmoji
                                                }),
                                                (0, l.jsxs)('div', {
                                                    className: f.optionTextContainer,
                                                    children: [
                                                        (0, l.jsx)(o.Text, {
                                                            variant: 'text-md/semibold',
                                                            className: f.channelDescription,
                                                            children: e.description
                                                        }),
                                                        (0, l.jsx)(o.Text, {
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
};
t.Z = () => {
    let { guild: e } = (0, a.e7)([h.Z], () => h.Z.getProps()),
        [t, n] = s.useState(0),
        [i, r] = s.useState(!1);
    switch (
        (s.useEffect(() => {
            null != e &&
                c.Z.wait(() => {
                    (0, u.RM)(e.id).then((e) => {
                        n(null == e ? 1 : 2);
                    });
                });
        }, [e]),
        t)
    ) {
        case 0:
            return (0, l.jsx)(o.Spinner, { type: o.Spinner.Type.SPINNING_CIRCLE });
        case 1:
            return (0, l.jsx)(C, {
                setWelcomeView: n,
                setShowCreateModal: r
            });
        case 2:
            return (0, l.jsx)(g.Z, {
                guild: e,
                showCreateModal: i
            });
        default:
            return (0, m.vE)(t);
    }
};
