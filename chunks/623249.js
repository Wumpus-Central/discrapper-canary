n.r(t),
    n.d(t, {
        default: function () {
            return N;
        },
        openConsoleConnectionErrorsModal: function () {
            return T;
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
    f = n(113434),
    g = n(497505),
    h = n(918701),
    C = n(475595),
    v = n(667105),
    j = n(981631),
    _ = n(388032),
    b = n(506430),
    E = n(708901);
function N(e) {
    var t;
    let { questId: n, errorHints: s, transitionState: N, onClose: T } = e,
        S = (0, f.B4)(n);
    null == S && T();
    let [y, A] = (0, r.useState)(s),
        R = (0, f.KX)(),
        w = (0, m.O5)(),
        I = null === (t = (0, x.WD)()) || void 0 === t ? void 0 : t.getId(),
        k = (0, i.e7)([d.Z], () => d.Z.useReducedMotion),
        q = (0, v.g2)({
            useReducedMotion: k,
            className: b.colorTransition
        }),
        P = y.filter((e) => ['xbox', 'playstation'].includes(e.connected_account_type)),
        M = (0, h.Bz)(S),
        O = (0, i.e7)([p.Z], () => p.Z.getState().theme),
        W = (0, l.wj)(O) ? j.BRd.DARK : j.BRd.LIGHT,
        { startConsoleQuest: L, startingConsoleQuest: Z } = (0, f.GI)({
            questId: S.id,
            beforeRequest: () => {
                q.startAnimation(),
                    w({
                        questId: S.id,
                        questContent: g.jn.CONNECTIONS_MODAL,
                        questContentCTA: m.jZ.DEFIBRILLATOR
                    });
            },
            afterRequest: (e) => {
                q.stopAnimation(), A(e);
            }
        });
    return (0, o.jsxs)(c.ModalRoot, {
        transitionState: N,
        size: c.ModalSize.DYNAMIC,
        className: b.modalRoot,
        children: [
            (0, o.jsxs)(c.ModalHeader, {
                direction: u.Z.Direction.VERTICAL,
                separator: !1,
                className: b.modalHeader,
                children: [
                    (0, o.jsxs)('div', {
                        className: b.modalTop,
                        children: [
                            (0, o.jsx)('div', {
                                className: b.iconFrame,
                                children: (0, o.jsx)('img', {
                                    className: b.icon,
                                    alt: '',
                                    src: E
                                })
                            }),
                            (0, o.jsx)(c.ModalCloseButton, {
                                className: b.closeBtn,
                                onClick: T
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
                        className: b.upperBodyText,
                        children: R.message
                    })
                ]
            }),
            (0, o.jsxs)(c.ModalContent, {
                className: b.modalContent,
                children: [
                    (0, o.jsxs)('div', {
                        className: b.contentHeader,
                        children: [
                            (0, o.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'header-secondary',
                                children: _.intl.string(_.t['+/hZMz'])
                            }),
                            (0, o.jsxs)(c.Clickable, {
                                className: a()(b.refreshWrapper, { [b.disabled]: Z }),
                                onClick: L,
                                children: [
                                    q.render(),
                                    (0, o.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'currentColor',
                                        className: b.colorTransition,
                                        children: _.intl.string(_.t.wzzjk5)
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, o.jsxs)('div', {
                        className: b.accountsWrapper,
                        children: [
                            (0, o.jsx)(B, {
                                icon: (0, o.jsx)(c.ScreenIcon, { size: 'sm' }),
                                text: _.intl.string(_.t.br3uIi)
                            }),
                            (0, o.jsx)(B, {
                                icon: (0, o.jsx)(c.GameControllerIcon, { size: 'sm' }),
                                text: _.intl.string(_.t.XF4wuL),
                                errors: M ? void 0 : P.map((e) => e.message),
                                gameTile: M
                                    ? (0, o.jsx)(c.Tooltip, {
                                          'aria-label': S.config.messages.gameTitle,
                                          text: () =>
                                              (0, o.jsxs)('div', {
                                                  className: b.tooltip,
                                                  children: [
                                                      (0, o.jsx)(c.Text, {
                                                          variant: 'text-sm/medium',
                                                          children: S.config.messages.gameTitle
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
                                                  className: b.gameTile,
                                                  alt: S.config.messages.gameTitle,
                                                  src: (0, C.fh)(S, C.eC.GAME_TILE, W).url
                                              })
                                      })
                                    : null
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsxs)(c.ModalFooter, {
                className: b.footer,
                children: [
                    (0, o.jsx)(c.Button, {
                        size: c.ButtonSizes.MIN,
                        onClick: T,
                        className: b.footerCloseButton,
                        children: _.intl.string(_.t.cpT0Cg)
                    }),
                    (0, o.jsx)(c.Button, {
                        look: c.ButtonLooks.LINK,
                        color: c.ButtonColors.PRIMARY,
                        onClick: () => {
                            T(),
                                (0, h.V$)(
                                    { quest: S },
                                    {
                                        content: g.jn.CONNECTIONS_MODAL,
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
function B(e) {
    let { icon: t, text: n, errors: r = [], gameTile: s } = e,
        i = r.length > 0,
        l = i ? c.ConnectionUnknownIcon : c.ConnectionFineIcon;
    return (0, o.jsxs)('div', {
        className: b.connectionRow,
        children: [
            (0, o.jsxs)('div', {
                className: a()(b.connectionRowHeader, { [b.connectionRowHeaderError]: i }),
                children: [
                    (0, o.jsxs)('div', {
                        className: b.connectionRowHeaderContent,
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
                        className: b.connectionRowHeaderContent,
                        children: [
                            s,
                            (0, o.jsx)(l, {
                                color: 'currentColor',
                                size: 'sm',
                                className: a()({
                                    [b.success]: !i,
                                    [b.error]: i
                                })
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsx)('div', {
                className: b.errorsContainer,
                children: r.map((e) =>
                    (0, o.jsxs)(
                        'div',
                        {
                            className: b.errorRow,
                            children: [
                                (0, o.jsx)(c.WarningIcon, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: b.error
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
function T(e) {
    (0, c.openModalLazy)(async () => {
        let { default: t } = await Promise.resolve().then(n.bind(n, 623249));
        return (n) =>
            (0, o.jsx)(t, {
                ...n,
                ...e
            });
    });
}
