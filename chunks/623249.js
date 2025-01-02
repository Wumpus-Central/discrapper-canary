n.r(t),
    n.d(t, {
        default: function () {
            return N;
        },
        openConsoleConnectionErrorsModal: function () {
            return B;
        }
    }),
    n(47120);
var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(442837),
    l = n(780384),
    c = n(481060),
    d = n(607070),
    u = n(600164),
    p = n(210887),
    m = n(617136),
    x = n(113434),
    g = n(497505),
    f = n(918701),
    h = n(475595),
    C = n(667105),
    v = n(981631),
    j = n(388032),
    _ = n(506430),
    b = n(708901);
function N(e) {
    let { questId: t, errorHints: n, transitionState: s, onClose: N } = e,
        B = (0, x.B4)(t);
    null == B && N();
    let [T, S] = (0, r.useState)(n),
        A = (0, x.KX)(),
        y = (0, i.e7)([d.Z], () => d.Z.useReducedMotion),
        R = (0, C.g2)({
            useReducedMotion: y,
            className: _.colorTransition
        }),
        w = T.filter((e) => ['xbox', 'playstation'].includes(e.connected_account_type)),
        I = (0, f.Bz)(B),
        k = (0, i.e7)([p.Z], () => p.Z.getState().theme),
        q = (0, l.wj)(k) ? v.BRd.DARK : v.BRd.LIGHT,
        { startConsoleQuest: P, startingConsoleQuest: M } = (0, x.GI)({
            questId: B.id,
            beforeRequest: () => {
                R.startAnimation(),
                    (0, m._3)({
                        questId: B.id,
                        questContent: g.jn.CONNECTIONS_MODAL,
                        questContentCTA: m.jZ.DEFIBRILLATOR
                    });
            },
            afterRequest: (e) => {
                R.stopAnimation(), S(e);
            }
        });
    return (0, o.jsxs)(c.ModalRoot, {
        transitionState: s,
        size: c.ModalSize.DYNAMIC,
        className: _.modalRoot,
        children: [
            (0, o.jsxs)(c.ModalHeader, {
                direction: u.Z.Direction.VERTICAL,
                separator: !1,
                className: _.modalHeader,
                children: [
                    (0, o.jsxs)('div', {
                        className: _.modalTop,
                        children: [
                            (0, o.jsx)('div', {
                                className: _.iconFrame,
                                children: (0, o.jsx)('img', {
                                    className: _.icon,
                                    alt: '',
                                    src: b
                                })
                            }),
                            (0, o.jsx)(c.ModalCloseButton, {
                                className: _.closeBtn,
                                onClick: N
                            })
                        ]
                    }),
                    (0, o.jsx)(c.Heading, {
                        variant: 'heading-xl/bold',
                        children: j.intl.string(j.t.W5lmKi)
                    }),
                    (0, o.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        className: _.upperBodyText,
                        children: A.message
                    })
                ]
            }),
            (0, o.jsxs)(c.ModalContent, {
                className: _.modalContent,
                children: [
                    (0, o.jsxs)('div', {
                        className: _.contentHeader,
                        children: [
                            (0, o.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'header-secondary',
                                children: j.intl.string(j.t['+/hZMz'])
                            }),
                            (0, o.jsxs)(c.Clickable, {
                                className: a()(_.refreshWrapper, { [_.disabled]: M }),
                                onClick: P,
                                children: [
                                    R.render(),
                                    (0, o.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'currentColor',
                                        className: _.colorTransition,
                                        children: j.intl.string(j.t.wzzjk5)
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, o.jsxs)('div', {
                        className: _.accountsWrapper,
                        children: [
                            (0, o.jsx)(E, {
                                icon: (0, o.jsx)(c.ScreenIcon, { size: 'sm' }),
                                text: j.intl.string(j.t.br3uIi)
                            }),
                            (0, o.jsx)(E, {
                                icon: (0, o.jsx)(c.GameControllerIcon, { size: 'sm' }),
                                text: j.intl.string(j.t.XF4wuL),
                                errors: I ? void 0 : w.map((e) => e.message),
                                gameTile: I
                                    ? (0, o.jsx)(c.Tooltip, {
                                          'aria-label': B.config.messages.gameTitle,
                                          text: () =>
                                              (0, o.jsxs)('div', {
                                                  className: _.tooltip,
                                                  children: [
                                                      (0, o.jsx)(c.Text, {
                                                          variant: 'text-sm/medium',
                                                          children: B.config.messages.gameTitle
                                                      }),
                                                      (0, o.jsx)(c.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-muted',
                                                          children: j.intl.string(j.t.STpNEB)
                                                      })
                                                  ]
                                              }),
                                          children: (e) =>
                                              (0, o.jsx)('img', {
                                                  ...e,
                                                  className: _.gameTile,
                                                  alt: B.config.messages.gameTitle,
                                                  src: (0, h.fh)(B, h.eC.GAME_TILE, q).url
                                              })
                                      })
                                    : null
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsxs)(c.ModalFooter, {
                className: _.footer,
                children: [
                    (0, o.jsx)(c.Button, {
                        size: c.ButtonSizes.MIN,
                        onClick: N,
                        className: _.footerCloseButton,
                        children: j.intl.string(j.t.cpT0Cg)
                    }),
                    (0, o.jsx)(c.Button, {
                        look: c.ButtonLooks.LINK,
                        color: c.ButtonColors.PRIMARY,
                        onClick: () => {
                            N(),
                                (0, f.V$)(
                                    { quest: B },
                                    {
                                        content: g.jn.CONNECTIONS_MODAL,
                                        ctaContent: m.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
                                    }
                                );
                        },
                        children: j.intl.string(j.t['qiS+xs'])
                    })
                ]
            })
        ]
    });
}
function E(e) {
    let { icon: t, text: n, errors: r = [], gameTile: s } = e,
        i = r.length > 0,
        l = i ? c.ConnectionUnknownIcon : c.ConnectionFineIcon;
    return (0, o.jsxs)('div', {
        className: _.connectionRow,
        children: [
            (0, o.jsxs)('div', {
                className: a()(_.connectionRowHeader, { [_.connectionRowHeaderError]: i }),
                children: [
                    (0, o.jsxs)('div', {
                        className: _.connectionRowHeaderContent,
                        children: [
                            t,
                            (0, o.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-normal',
                                children: n
                            })
                        ]
                    }),
                    (0, o.jsxs)('div', {
                        className: _.connectionRowHeaderContent,
                        children: [
                            s,
                            (0, o.jsx)(l, {
                                color: 'currentColor',
                                size: 'sm',
                                className: a()({
                                    [_.success]: !i,
                                    [_.error]: i
                                })
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsx)('div', {
                className: _.errorsContainer,
                children: r.map((e) =>
                    (0, o.jsxs)(
                        'div',
                        {
                            className: _.errorRow,
                            children: [
                                (0, o.jsx)(c.WarningIcon, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: _.error
                                }),
                                (0, o.jsx)(c.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-muted',
                                    children: e
                                })
                            ]
                        },
                        e
                    )
                )
            })
        ]
    });
}
function B(e) {
    (0, c.openModalLazy)(async () => {
        let { default: t } = await Promise.resolve().then(n.bind(n, 623249));
        return (n) =>
            (0, o.jsx)(t, {
                ...n,
                ...e
            });
    });
}
