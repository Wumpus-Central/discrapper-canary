n.d(t, {
    default: () => E,
    y: () => N
}),
    n(47120);
var s = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
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
    v = n(475595),
    _ = n(667105),
    C = n(981631),
    j = n(388032),
    b = n(430346),
    T = n(708901);
function E(e) {
    var t;
    let { questId: n, errorHints: a, transitionState: E, onClose: N } = e,
        y = (0, h.B4)(n);
    null == y && N();
    let [w, A] = (0, r.useState)(a),
        B = (0, h.KX)(),
        R = (0, m.O5)(),
        P = null === (t = (0, x.WD)()) || void 0 === t ? void 0 : t.getId(),
        k = (0, i.e7)([d.Z], () => d.Z.useReducedMotion),
        q = (0, _.g2)({
            useReducedMotion: k,
            className: b.colorTransition
        }),
        I = w.filter((e) => ['xbox', 'playstation'].includes(e.connected_account_type)),
        O = (0, f.Bz)(y),
        M = (0, i.e7)([p.Z], () => p.Z.getState().theme),
        L = (0, l.wj)(M) ? C.BRd.DARK : C.BRd.LIGHT,
        { startConsoleQuest: D, startingConsoleQuest: Z } = (0, h.GI)({
            questId: y.id,
            beforeRequest: () => {
                q.startAnimation(),
                    R({
                        questId: y.id,
                        questContent: g.jn.CONNECTIONS_MODAL,
                        questContentCTA: m.jZ.DEFIBRILLATOR
                    });
            },
            afterRequest: (e) => {
                q.stopAnimation(), A(e);
            }
        });
    return (0, s.jsxs)(c.Y0X, {
        transitionState: E,
        size: c.CgR.DYNAMIC,
        className: b.modalRoot,
        children: [
            (0, s.jsxs)(c.xBx, {
                direction: u.Z.Direction.VERTICAL,
                separator: !1,
                className: b.modalHeader,
                children: [
                    (0, s.jsxs)('div', {
                        className: b.modalTop,
                        children: [
                            (0, s.jsx)('div', {
                                className: b.iconFrame,
                                children: (0, s.jsx)('img', {
                                    className: b.icon,
                                    alt: '',
                                    src: T
                                })
                            }),
                            (0, s.jsx)(c.olH, {
                                className: b.closeBtn,
                                onClick: N
                            })
                        ]
                    }),
                    (0, s.jsx)(c.X6q, {
                        variant: 'heading-xl/bold',
                        children: j.intl.string(j.t.W5lmKi)
                    }),
                    (0, s.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        className: b.upperBodyText,
                        children: B.message
                    })
                ]
            }),
            (0, s.jsxs)(c.hzk, {
                className: b.modalContent,
                children: [
                    (0, s.jsxs)('div', {
                        className: b.contentHeader,
                        children: [
                            (0, s.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'header-secondary',
                                children: j.intl.string(j.t['+/hZMz'])
                            }),
                            (0, s.jsxs)(c.P3F, {
                                className: o()(b.refreshWrapper, { [b.disabled]: Z }),
                                onClick: D,
                                children: [
                                    q.render(),
                                    (0, s.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'currentColor',
                                        className: b.colorTransition,
                                        children: j.intl.string(j.t.wzzjk5)
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, s.jsxs)('div', {
                        className: b.accountsWrapper,
                        children: [
                            (0, s.jsx)(S, {
                                icon: (0, s.jsx)(c.pzj, { size: 'sm' }),
                                text: j.intl.string(j.t.br3uIi)
                            }),
                            (0, s.jsx)(S, {
                                icon: (0, s.jsx)(c.iWm, { size: 'sm' }),
                                text: j.intl.string(j.t.XF4wuL),
                                errors: O ? void 0 : I.map((e) => e.message),
                                gameTile: O
                                    ? (0, s.jsx)(c.ua7, {
                                          'aria-label': y.config.messages.gameTitle,
                                          text: () =>
                                              (0, s.jsxs)('div', {
                                                  className: b.tooltip,
                                                  children: [
                                                      (0, s.jsx)(c.Text, {
                                                          variant: 'text-sm/medium',
                                                          children: y.config.messages.gameTitle
                                                      }),
                                                      (0, s.jsx)(c.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-muted',
                                                          children: j.intl.string(j.t.STpNEB)
                                                      })
                                                  ]
                                              }),
                                          children: (e) =>
                                              (0, s.jsx)('img', {
                                                  ...e,
                                                  className: b.gameTile,
                                                  alt: y.config.messages.gameTitle,
                                                  src: (0, v.fh)(y, v.eC.GAME_TILE, L).url
                                              })
                                      })
                                    : null
                            })
                        ]
                    })
                ]
            }),
            (0, s.jsxs)(c.mzw, {
                className: b.footer,
                children: [
                    (0, s.jsx)(c.zxk, {
                        size: c.PhG.MIN,
                        onClick: N,
                        className: b.footerCloseButton,
                        children: j.intl.string(j.t.cpT0Cg)
                    }),
                    (0, s.jsx)(c.zxk, {
                        look: c.iLD.LINK,
                        color: c.Ttl.PRIMARY,
                        onClick: () => {
                            N(),
                                (0, f.V$)(
                                    { quest: y },
                                    {
                                        content: g.jn.CONNECTIONS_MODAL,
                                        ctaContent: m.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                                        impressionId: P
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
function S(e) {
    let { icon: t, text: n, errors: r = [], gameTile: a } = e,
        i = r.length > 0,
        l = i ? c._3e : c.B_b;
    return (0, s.jsxs)('div', {
        className: b.connectionRow,
        children: [
            (0, s.jsxs)('div', {
                className: o()(b.connectionRowHeader, { [b.connectionRowHeaderError]: i }),
                children: [
                    (0, s.jsxs)('div', {
                        className: b.connectionRowHeaderContent,
                        children: [
                            t,
                            (0, s.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-normal',
                                children: n
                            })
                        ]
                    }),
                    (0, s.jsxs)('div', {
                        className: b.connectionRowHeaderContent,
                        children: [
                            a,
                            (0, s.jsx)(l, {
                                color: 'currentColor',
                                size: 'sm',
                                className: o()({
                                    [b.success]: !i,
                                    [b.error]: i
                                })
                            })
                        ]
                    })
                ]
            }),
            (0, s.jsx)('div', {
                className: b.errorsContainer,
                children: r.map((e) =>
                    (0, s.jsxs)(
                        'div',
                        {
                            className: b.errorRow,
                            children: [
                                (0, s.jsx)(c.aNP, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: b.error
                                }),
                                (0, s.jsx)(c.Text, {
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
    (0, c.ZDy)(async () => {
        let { default: t } = await Promise.resolve().then(n.bind(n, 623249));
        return (n) =>
            (0, s.jsx)(t, {
                ...n,
                ...e
            });
    });
}
