e.d(s, { AnnouncementModal: () => f });
var n = e(200651);
e(192379);
var i = e(481060),
    l = e(388032),
    o = e(458816),
    a = e(232474);
let c = e(788661),
    r = () =>
        (0, n.jsx)('div', {
            className: o.gifContainer,
            children: (0, n.jsx)('img', {
                src: a.Z,
                className: o.gif,
                alt: 'Orb GIF'
            })
        }),
    x = () =>
        (0, n.jsx)('img', {
            src: c,
            alt: 'Orb Icon',
            className: o.orbIconSVG
        }),
    b = () =>
        (0, n.jsx)('div', {
            className: o.betaBadge,
            children: l.intl.string(l.t.oW0eUV)
        }),
    d = (t) => {
        let { icon: s, text: e } = t;
        return (0, n.jsxs)('div', {
            className: o.listItem,
            children: [
                'string' == typeof s
                    ? (0, n.jsx)('img', {
                          src: s,
                          className: o.listItemIcon,
                          alt: 'List Icon'
                      })
                    : s,
                (0, n.jsx)('div', {
                    className: o.listItemText,
                    children: e
                })
            ]
        });
    },
    m = (t) =>
        (0, n.jsx)(i.zxk, {
            ...t,
            'aria-label': l.intl.string(l.t.cpT0Cg),
            look: i.zxk.Looks.BLANK,
            size: i.zxk.Sizes.NONE,
            children: (0, n.jsx)(i.P$X, {
                size: 'md',
                color: 'currentColor',
                className: o.closeButtonIcon
            })
        }),
    f = (t) => {
        let { onClose: s, ctaOnClick: a, transitionState: c } = t;
        return (0, n.jsxs)(i.Y0X, {
            size: i.CgR.DYNAMIC,
            className: o.container,
            transitionState: c,
            children: [
                (0, n.jsx)(m, {
                    className: o.closeButton,
                    onClick: s
                }),
                (0, n.jsxs)('div', {
                    className: o.marginContainer,
                    children: [
                        (0, n.jsx)(r, {}),
                        (0, n.jsx)('div', {
                            className: o.titleLeadIn,
                            children: l.intl.string(l.t.C1TOOD)
                        }),
                        (0, n.jsxs)('div', {
                            className: o.title,
                            children: [l.intl.string(l.t.XKlAys), (0, n.jsx)(b, {})]
                        }),
                        (0, n.jsxs)('div', {
                            className: o.list,
                            children: [
                                (0, n.jsx)(d, {
                                    icon: e(586248),
                                    text: l.intl.string(l.t.c7MXqK)
                                }),
                                (0, n.jsx)(d, {
                                    icon: e(126642),
                                    text: l.intl.string(l.t.bcmcCg)
                                }),
                                (0, n.jsx)(d, {
                                    icon: (0, n.jsx)(x, {}),
                                    text: l.intl.format(l.t.vt7mWl, { quantity: 200 })
                                })
                            ]
                        }),
                        (0, n.jsx)(i.zxk, {
                            onClick: a,
                            color: o.buttonColor,
                            className: o.button,
                            children: l.intl.string(l.t.LhlgY2)
                        })
                    ]
                })
            ]
        });
    };
