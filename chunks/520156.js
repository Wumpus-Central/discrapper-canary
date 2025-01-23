s.r(e),
    s.d(e, {
        AnnouncementModal: function () {
            return x;
        }
    });
var n = s(200651);
s(192379);
var i = s(481060),
    o = s(388032),
    l = s(573782);
let a = s(691041),
    c = () =>
        (0, n.jsx)('div', {
            className: l.gifContainer,
            children: (0, n.jsx)('img', {
                src: s(709538),
                className: l.gif,
                alt: 'Orb GIF'
            })
        }),
    r = () =>
        (0, n.jsx)('div', {
            role: 'img',
            className: l.orbIconContainer,
            children: (0, n.jsx)('img', {
                src: a,
                alt: 'Orb Icon'
            })
        }),
    d = () =>
        (0, n.jsx)('div', {
            className: l.betaBadge,
            children: o.intl.string(o.t.oW0eUV)
        }),
    m = (t) => {
        let { icon: e, text: s } = t;
        return (0, n.jsxs)('div', {
            className: l.listItem,
            children: [
                'string' == typeof e
                    ? (0, n.jsx)('img', {
                          src: e,
                          className: l.listItemIcon,
                          alt: 'List Icon'
                      })
                    : e,
                (0, n.jsx)('div', {
                    className: l.listItemText,
                    children: s
                })
            ]
        });
    },
    f = (t) =>
        (0, n.jsx)(i.Button, {
            ...t,
            'aria-label': o.intl.string(o.t.cpT0Cg),
            look: i.Button.Looks.BLANK,
            size: i.Button.Sizes.NONE,
            children: (0, n.jsx)(i.XSmallBoldIcon, {
                size: 'md',
                color: 'currentColor',
                className: l.closeButtonIcon
            })
        }),
    x = (t) => {
        let { onClose: e, onCTA: a, transitionState: x } = t;
        return (0, n.jsxs)(i.ModalRoot, {
            size: i.ModalSize.DYNAMIC,
            className: l.container,
            transitionState: x,
            children: [
                (0, n.jsx)(f, {
                    className: l.closeButton,
                    onClick: e
                }),
                (0, n.jsxs)('div', {
                    className: l.marginContainer,
                    children: [
                        (0, n.jsx)(c, {}),
                        (0, n.jsx)('div', {
                            className: l.titleLeadIn,
                            children: o.intl.string(o.t.C1TOOD)
                        }),
                        (0, n.jsxs)('div', {
                            className: l.title,
                            children: [o.intl.string(o.t.XKlAys), (0, n.jsx)(d, {})]
                        }),
                        (0, n.jsxs)('div', {
                            className: l.list,
                            children: [
                                (0, n.jsx)(m, {
                                    icon: s(586248),
                                    text: o.intl.string(o.t.c7MXqK)
                                }),
                                (0, n.jsx)(m, {
                                    icon: s(126642),
                                    text: o.intl.string(o.t.bcmcCg)
                                }),
                                (0, n.jsx)(m, {
                                    icon: (0, n.jsx)(r, {}),
                                    text: o.intl.string(o.t.vt7mWl)
                                })
                            ]
                        }),
                        (0, n.jsx)(i.Button, {
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
e.default = x;
