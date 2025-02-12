n.d(s, { AnnouncementModal: () => f });
var e = n(200651);
n(192379);
var i = n(481060),
    o = n(388032),
    l = n(458816),
    a = n(660028);
let c = n(691041),
    r = () =>
        (0, e.jsx)('div', {
            className: l.gifContainer,
            children: (0, e.jsx)('img', {
                src: a.Z,
                className: l.gif,
                alt: 'Orb GIF'
            })
        }),
    d = () =>
        (0, e.jsx)('div', {
            role: 'img',
            className: l.orbIconContainer,
            children: (0, e.jsx)('img', {
                src: c,
                alt: 'Orb Icon'
            })
        }),
    x = () =>
        (0, e.jsx)('div', {
            className: l.betaBadge,
            children: o.intl.string(o.t.oW0eUV)
        }),
    b = (t) => {
        let { icon: s, text: n } = t;
        return (0, e.jsxs)('div', {
            className: l.listItem,
            children: [
                'string' == typeof s
                    ? (0, e.jsx)('img', {
                          src: s,
                          className: l.listItemIcon,
                          alt: 'List Icon'
                      })
                    : s,
                (0, e.jsx)('div', {
                    className: l.listItemText,
                    children: n
                })
            ]
        });
    },
    m = (t) =>
        (0, e.jsx)(i.zxk, {
            ...t,
            'aria-label': o.intl.string(o.t.cpT0Cg),
            look: i.zxk.Looks.BLANK,
            size: i.zxk.Sizes.NONE,
            children: (0, e.jsx)(i.P$X, {
                size: 'md',
                color: 'currentColor',
                className: l.closeButtonIcon
            })
        }),
    f = (t) => {
        let { onClose: s, ctaOnClick: a, transitionState: c } = t;
        return (0, e.jsxs)(i.Y0X, {
            size: i.CgR.DYNAMIC,
            className: l.container,
            transitionState: c,
            children: [
                (0, e.jsx)(m, {
                    className: l.closeButton,
                    onClick: s
                }),
                (0, e.jsxs)('div', {
                    className: l.marginContainer,
                    children: [
                        (0, e.jsx)(r, {}),
                        (0, e.jsx)('div', {
                            className: l.titleLeadIn,
                            children: o.intl.string(o.t.C1TOOD)
                        }),
                        (0, e.jsxs)('div', {
                            className: l.title,
                            children: [o.intl.string(o.t.XKlAys), (0, e.jsx)(x, {})]
                        }),
                        (0, e.jsxs)('div', {
                            className: l.list,
                            children: [
                                (0, e.jsx)(b, {
                                    icon: n(586248),
                                    text: o.intl.string(o.t.c7MXqK)
                                }),
                                (0, e.jsx)(b, {
                                    icon: n(126642),
                                    text: o.intl.string(o.t.bcmcCg)
                                }),
                                (0, e.jsx)(b, {
                                    icon: (0, e.jsx)(d, {}),
                                    text: o.intl.format(o.t.vt7mWl, { quantity: 100 })
                                })
                            ]
                        }),
                        (0, e.jsx)(i.zxk, {
                            onClick: a,
                            color: l.buttonColor,
                            className: l.button,
                            children: o.intl.string(o.t.LhlgY2)
                        })
                    ]
                })
            ]
        });
    };
