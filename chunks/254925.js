n.d(t, { Z: () => g }), n(266796);
var r = n(200651),
    i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(550271),
    o = n(116175),
    c = n(502936),
    d = n(388032),
    u = n(935921);
let m = [o.ZD.LEAF, o.ZD.SWORD, o.ZD.HEART, o.ZD.FIRE, o.ZD.WATER_DROP, o.ZD.SKULL, o.ZD.MOON, o.ZD.LIGHTNING, o.ZD.COMPASS, o.ZD.TOADSTOOL],
    p = [
        {
            primary: '#ff1c90',
            secondary: '#ff7fc0'
        },
        {
            primary: '#ff8f1c',
            secondary: '#ffae77'
        },
        {
            primary: '#eebe1a',
            secondary: '#fffc7f'
        },
        {
            primary: '#32a070',
            secondary: '#57b59e'
        },
        {
            primary: '#32839a',
            secondary: '#71c2d9'
        },
        {
            primary: '#8a43ff',
            secondary: '#bd95ff'
        },
        {
            primary: '#9b3fe5',
            secondary: '#cc8dff'
        },
        {
            primary: '#942e8f',
            secondary: '#d46cb5'
        },
        {
            primary: '#d14242',
            secondary: '#ff8989'
        },
        {
            primary: '#814300',
            secondary: '#a88a6c'
        },
        {
            primary: '#717224',
            secondary: '#c3c3c3'
        },
        {
            primary: '#5d1d47',
            secondary: '#c58fbb'
        },
        {
            primary: '#222222',
            secondary: '#cccccc'
        }
    ],
    g = function () {
        return (0, r.jsxs)('div', {
            className: u.leftContent,
            children: [
                (0, r.jsx)(a.X6q, {
                    className: u.title,
                    variant: 'heading-lg/semibold',
                    children: d.NW.string(c.Z.gnwWr6)
                }),
                (0, r.jsx)(a.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-secondary',
                    className: u.description,
                    children: d.NW.string(c.Z['1Ts7QE'])
                }),
                (0, r.jsxs)('div', {
                    className: u.enableSwitchContainer,
                    children: [
                        (0, r.jsx)('label', {
                            htmlFor: 'enable-server-tag',
                            children: (0, r.jsx)(a.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: d.NW.string(c.Z.ZbFyIS)
                            })
                        }),
                        (0, r.jsx)(a.rsf, {
                            id: 'enable-server-tag',
                            onChange: () => {}
                        })
                    ]
                }),
                (0, r.jsx)(a.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-muted',
                    className: u.memberApplicationsInfo,
                    children: d.NW.format(c.Z.brTw0t, {
                        onClick: () => {}
                    })
                }),
                (0, r.jsxs)('div', {
                    className: u.section,
                    children: [
                        (0, r.jsx)(a.vwX, {
                            className: u.sectionTitle,
                            children: d.NW.string(c.Z['Wqj/DQ'])
                        }),
                        (0, r.jsxs)('div', {
                            className: u.tagContainer,
                            children: [
                                (0, r.jsx)('div', {
                                    className: u.tagInputContainer,
                                    children: (0, r.jsx)(a.oil, {
                                        className: u.tagInputWrapper,
                                        inputClassName: s()(u.tagInput, 'heading-sm/semibold'),
                                        maxLength: 4,
                                        autoFocus: !0,
                                        placeholder: 'WUMP',
                                        prefixElement: (0, r.jsx)(l.A, {
                                            badge: m[0],
                                            width: 40,
                                            height: 40,
                                            primaryTintColor: p[0].primary,
                                            secondaryTintColor: p[0].secondary
                                        })
                                    })
                                }),
                                (0, r.jsx)('div', {
                                    className: u.tagTooltip,
                                    children: (0, r.jsx)(a.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-muted',
                                        children: d.NW.string(c.Z.zd5Gjo)
                                    })
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: u.section,
                    children: [
                        (0, r.jsx)(a.vwX, {
                            className: u.sectionTitle,
                            children: d.NW.string(c.Z['4ER/6e'])
                        }),
                        (0, r.jsx)('div', {
                            className: u.pickerGrid,
                            children: m.map((e) =>
                                (0, r.jsx)(
                                    a.P3F,
                                    {
                                        className: s()(u.pickerItem, { [u.pickerItemSelected]: !1 }),
                                        children: (0, r.jsx)(l.A, {
                                            badge: e,
                                            width: 32,
                                            height: 32
                                        })
                                    },
                                    e
                                )
                            )
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: u.section,
                    children: [
                        (0, r.jsx)(a.vwX, {
                            className: u.sectionTitle,
                            children: d.NW.string(c.Z.OBstJi)
                        }),
                        (0, r.jsx)('div', {
                            className: u.pickerGrid,
                            children: p.map((e) => {
                                let { primary: t, secondary: n } = e;
                                return (0, r.jsx)(
                                    a.P3F,
                                    {
                                        className: s()(u.pickerItem, { [u.pickerItemSelected]: !1 }),
                                        children: (0, r.jsx)(l.A, {
                                            badge: m[0],
                                            width: 32,
                                            height: 32,
                                            primaryTintColor: t,
                                            secondaryTintColor: n
                                        })
                                    },
                                    t
                                );
                            })
                        })
                    ]
                })
            ]
        });
    };
