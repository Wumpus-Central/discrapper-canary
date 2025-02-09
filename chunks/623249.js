n.d(t, {
    default: () => E,
    y: () => S
}),
    n(47120);
var r = n(200651),
    o = n(192379),
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
    h = n(113434),
    g = n(497505),
    f = n(918701),
    _ = n(475595),
    C = n(667105),
    v = n(981631),
    j = n(388032),
    b = n(337460),
    T = n(708901);
function E(e) {
    var t;
    let { questId: n, errorHints: s, transitionState: E, onClose: S } = e,
        y = (0, h.B4)(n);
    null == y && S();
    let [A, B] = (0, o.useState)(s),
        R = (0, h.KX)(),
        w = (0, m.O5)(),
        q = null === (t = (0, x.WD)()) || void 0 === t ? void 0 : t.getId(),
        k = (0, i.e7)([d.Z], () => d.Z.useReducedMotion),
        P = (0, C.g2)({
            useReducedMotion: k,
            className: b.colorTransition
        }),
        I = A.filter((e) => ['xbox', 'playstation'].includes(e.connected_account_type)),
        O = (0, f.Bz)(y),
        M = (0, i.e7)([p.Z], () => p.Z.getState().theme),
        W = (0, l.wj)(M) ? v.BRd.DARK : v.BRd.LIGHT,
        { startConsoleQuest: D, startingConsoleQuest: L } = (0, h.GI)({
            questId: y.id,
            beforeRequest: () => {
                P.startAnimation(),
                    w({
                        questId: y.id,
                        questContent: g.jn.CONNECTIONS_MODAL,
                        questContentCTA: m.jZ.DEFIBRILLATOR
                    });
            },
            afterRequest: (e) => {
                P.stopAnimation(), B(e);
            }
        });
    return (0, r.jsxs)(c.Y0X, {
        transitionState: E,
        size: c.CgR.DYNAMIC,
        className: b.modalRoot,
        children: [
            (0, r.jsxs)(c.xBx, {
                direction: u.Z.Direction.VERTICAL,
                separator: !1,
                className: b.modalHeader,
                children: [
                    (0, r.jsxs)('div', {
                        className: b.modalTop,
                        children: [
                            (0, r.jsx)('div', {
                                className: b.iconFrame,
                                children: (0, r.jsx)('img', {
                                    className: b.icon,
                                    alt: '',
                                    src: T
                                })
                            }),
                            (0, r.jsx)(c.olH, {
                                className: b.closeBtn,
                                onClick: S
                            })
                        ]
                    }),
                    (0, r.jsx)(c.X6q, {
                        variant: 'heading-xl/bold',
                        children: j.intl.string(j.t.W5lmKi)
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        className: b.upperBodyText,
                        children: R.message
                    })
                ]
            }),
            (0, r.jsxs)(c.hzk, {
                className: b.modalContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: b.contentHeader,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'header-secondary',
                                children: j.intl.string(j.t['+/hZMz'])
                            }),
                            (0, r.jsxs)(c.P3F, {
                                className: a()(b.refreshWrapper, { [b.disabled]: L }),
                                onClick: D,
                                children: [
                                    P.render(),
                                    (0, r.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'currentColor',
                                        className: b.colorTransition,
                                        children: j.intl.string(j.t.wzzjk5)
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: b.accountsWrapper,
                        children: [
                            (0, r.jsx)(N, {
                                icon: (0, r.jsx)(c.pzj, { size: 'sm' }),
                                text: j.intl.string(j.t.br3uIi)
                            }),
                            (0, r.jsx)(N, {
                                icon: (0, r.jsx)(c.iWm, { size: 'sm' }),
                                text: j.intl.string(j.t.XF4wuL),
                                errors: O ? void 0 : I.map((e) => e.message),
                                gameTile: O
                                    ? (0, r.jsx)(c.ua7, {
                                          'aria-label': y.config.messages.gameTitle,
                                          text: () =>
                                              (0, r.jsxs)('div', {
                                                  className: b.tooltip,
                                                  children: [
                                                      (0, r.jsx)(c.Text, {
                                                          variant: 'text-sm/medium',
                                                          children: y.config.messages.gameTitle
                                                      }),
                                                      (0, r.jsx)(c.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-muted',
                                                          children: j.intl.string(j.t.STpNEB)
                                                      })
                                                  ]
                                              }),
                                          children: (e) =>
                                              (0, r.jsx)('img', {
                                                  ...e,
                                                  className: b.gameTile,
                                                  alt: y.config.messages.gameTitle,
                                                  src: (0, _.fh)(y, _.eC.GAME_TILE, W).url
                                              })
                                      })
                                    : null
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsxs)(c.mzw, {
                className: b.footer,
                children: [
                    (0, r.jsx)(c.zxk, {
                        size: c.PhG.MIN,
                        onClick: S,
                        className: b.footerCloseButton,
                        children: j.intl.string(j.t.cpT0Cg)
                    }),
                    (0, r.jsx)(c.zxk, {
                        look: c.iLD.LINK,
                        color: c.Ttl.PRIMARY,
                        onClick: () => {
                            S(),
                                (0, f.V$)(
                                    { quest: y },
                                    {
                                        content: g.jn.CONNECTIONS_MODAL,
                                        ctaContent: m.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                                        impressionId: q
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
function N(e) {
    let { icon: t, text: n, errors: o = [], gameTile: s } = e,
        i = o.length > 0,
        l = i ? c._3e : c.B_b;
    return (0, r.jsxs)('div', {
        className: b.connectionRow,
        children: [
            (0, r.jsxs)('div', {
                className: a()(b.connectionRowHeader, { [b.connectionRowHeaderError]: i }),
                children: [
                    (0, r.jsxs)('div', {
                        className: b.connectionRowHeaderContent,
                        children: [
                            t,
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-normal',
                                children: n
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: b.connectionRowHeaderContent,
                        children: [
                            s,
                            (0, r.jsx)(l, {
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
            (0, r.jsx)('div', {
                className: b.errorsContainer,
                children: o.map((e) =>
                    (0, r.jsxs)(
                        'div',
                        {
                            className: b.errorRow,
                            children: [
                                (0, r.jsx)(c.aNP, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: b.error
                                }),
                                (0, r.jsx)(c.Text, {
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
function S(e) {
    (0, c.ZDy)(async () => {
        let { default: t } = await Promise.resolve().then(n.bind(n, 623249));
        return (n) =>
            (0, r.jsx)(t, {
                ...n,
                ...e
            });
    });
}
