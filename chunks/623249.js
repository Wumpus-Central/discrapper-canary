n.r(t),
    n.d(t, {
        default: function () {
            return S;
        },
        openConsoleConnectionErrorsModal: function () {
            return N;
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
    x = n(915750),
    g = n(113434),
    h = n(497505),
    f = n(918701),
    v = n(475595),
    C = n(667105),
    j = n(981631),
    _ = n(388032),
    T = n(839434),
    E = n(708901);
function S(e) {
    var t;
    let { questId: n, errorHints: s, transitionState: S, onClose: N } = e,
        B = (0, g.B4)(n);
    null == B && N();
    let [y, A] = (0, r.useState)(s),
        w = (0, g.KX)(),
        R = (0, m.O5)(),
        I = null === (t = (0, x.WD)()) || void 0 === t ? void 0 : t.getId(),
        P = (0, i.e7)([d.Z], () => d.Z.useReducedMotion),
        k = (0, C.g2)({
            useReducedMotion: P,
            className: T.colorTransition
        }),
        O = y.filter((e) => ['xbox', 'playstation'].includes(e.connected_account_type)),
        q = (0, f.Bz)(B),
        M = (0, i.e7)([p.Z], () => p.Z.getState().theme),
        L = (0, l.wj)(M) ? j.BRd.DARK : j.BRd.LIGHT,
        { startConsoleQuest: D, startingConsoleQuest: Z } = (0, g.GI)({
            questId: B.id,
            beforeRequest: () => {
                k.startAnimation(),
                    R({
                        questId: B.id,
                        questContent: h.jn.CONNECTIONS_MODAL,
                        questContentCTA: m.jZ.DEFIBRILLATOR
                    });
            },
            afterRequest: (e) => {
                k.stopAnimation(), A(e);
            }
        });
    return (0, o.jsxs)(c.ModalRoot, {
        transitionState: S,
        size: c.ModalSize.DYNAMIC,
        className: T.modalRoot,
        children: [
            (0, o.jsxs)(c.ModalHeader, {
                direction: u.Z.Direction.VERTICAL,
                separator: !1,
                className: T.modalHeader,
                children: [
                    (0, o.jsxs)('div', {
                        className: T.modalTop,
                        children: [
                            (0, o.jsx)('div', {
                                className: T.iconFrame,
                                children: (0, o.jsx)('img', {
                                    className: T.icon,
                                    alt: '',
                                    src: E
                                })
                            }),
                            (0, o.jsx)(c.ModalCloseButton, {
                                className: T.closeBtn,
                                onClick: N
                            })
                        ]
                    }),
                    (0, o.jsx)(c.Heading, {
                        variant: 'heading-xl/bold',
                        children: _.intl.string(_.t.W5lmKi)
                    }),
                    (0, o.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        className: T.upperBodyText,
                        children: w.message
                    })
                ]
            }),
            (0, o.jsxs)(c.ModalContent, {
                className: T.modalContent,
                children: [
                    (0, o.jsxs)('div', {
                        className: T.contentHeader,
                        children: [
                            (0, o.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'header-secondary',
                                children: _.intl.string(_.t['+/hZMz'])
                            }),
                            (0, o.jsxs)(c.Clickable, {
                                className: a()(T.refreshWrapper, { [T.disabled]: Z }),
                                onClick: D,
                                children: [
                                    k.render(),
                                    (0, o.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'currentColor',
                                        className: T.colorTransition,
                                        children: _.intl.string(_.t.wzzjk5)
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, o.jsxs)('div', {
                        className: T.accountsWrapper,
                        children: [
                            (0, o.jsx)(b, {
                                icon: (0, o.jsx)(c.ScreenIcon, { size: 'sm' }),
                                text: _.intl.string(_.t.br3uIi)
                            }),
                            (0, o.jsx)(b, {
                                icon: (0, o.jsx)(c.GameControllerIcon, { size: 'sm' }),
                                text: _.intl.string(_.t.XF4wuL),
                                errors: q ? void 0 : O.map((e) => e.message),
                                gameTile: q
                                    ? (0, o.jsx)(c.Tooltip, {
                                          'aria-label': B.config.messages.gameTitle,
                                          text: () =>
                                              (0, o.jsxs)('div', {
                                                  className: T.tooltip,
                                                  children: [
                                                      (0, o.jsx)(c.Text, {
                                                          variant: 'text-sm/medium',
                                                          children: B.config.messages.gameTitle
                                                      }),
                                                      (0, o.jsx)(c.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-muted',
                                                          children: _.intl.string(_.t.STpNEB)
                                                      })
                                                  ]
                                              }),
                                          children: (e) =>
                                              (0, o.jsx)('img', {
                                                  ...e,
                                                  className: T.gameTile,
                                                  alt: B.config.messages.gameTitle,
                                                  src: (0, v.fh)(B, v.eC.GAME_TILE, L).url
                                              })
                                      })
                                    : null
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsxs)(c.ModalFooter, {
                className: T.footer,
                children: [
                    (0, o.jsx)(c.Button, {
                        size: c.ButtonSizes.MIN,
                        onClick: N,
                        className: T.footerCloseButton,
                        children: _.intl.string(_.t.cpT0Cg)
                    }),
                    (0, o.jsx)(c.Button, {
                        look: c.ButtonLooks.LINK,
                        color: c.ButtonColors.PRIMARY,
                        onClick: () => {
                            N(),
                                (0, f.V$)(
                                    { quest: B },
                                    {
                                        content: h.jn.CONNECTIONS_MODAL,
                                        ctaContent: m.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                                        impressionId: I
                                    }
                                );
                        },
                        children: _.intl.string(_.t['qiS+xs'])
                    })
                ]
            })
        ]
    });
}
function b(e) {
    let { icon: t, text: n, errors: r = [], gameTile: s } = e,
        i = r.length > 0,
        l = i ? c.ConnectionUnknownIcon : c.ConnectionFineIcon;
    return (0, o.jsxs)('div', {
        className: T.connectionRow,
        children: [
            (0, o.jsxs)('div', {
                className: a()(T.connectionRowHeader, { [T.connectionRowHeaderError]: i }),
                children: [
                    (0, o.jsxs)('div', {
                        className: T.connectionRowHeaderContent,
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
                        className: T.connectionRowHeaderContent,
                        children: [
                            s,
                            (0, o.jsx)(l, {
                                color: 'currentColor',
                                size: 'sm',
                                className: a()({
                                    [T.success]: !i,
                                    [T.error]: i
                                })
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsx)('div', {
                className: T.errorsContainer,
                children: r.map((e) =>
                    (0, o.jsxs)(
                        'div',
                        {
                            className: T.errorRow,
                            children: [
                                (0, o.jsx)(c.WarningIcon, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: T.error
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
function N(e) {
    (0, c.openModalLazy)(async () => {
        let { default: t } = await Promise.resolve().then(n.bind(n, 623249));
        return (n) =>
            (0, o.jsx)(t, {
                ...n,
                ...e
            });
    });
}
