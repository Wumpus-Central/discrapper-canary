(n.d(t, {
    default: () => E,
    y: () => w
}),
    n(388685));
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(442837),
    l = n(780384),
    c = n(481060),
    u = n(607070),
    d = n(600164),
    p = n(210887),
    m = n(617136),
    f = n(915750),
    g = n(113434),
    x = n(497505),
    h = n(918701),
    b = n(475595),
    j = n(667105),
    _ = n(981631),
    v = n(388032),
    y = n(912621),
    C = n(708901);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function E(e) {
    var t;
    let { questId: n, errorHints: s, transitionState: E, onClose: w, sourceQuestContent: P } = e,
        T = (0, g.sf)(n);
    null == T && w();
    let [N, A] = (0, o.useState)(s),
        R = (0, g.KX)(),
        k = (0, m.O5)(),
        B = null == (t = (0, f.WD)()) ? void 0 : t.getId(),
        I = (0, i.e7)([u.Z], () => u.Z.useReducedMotion),
        q = (0, j.g2)({
            useReducedMotion: I,
            className: y.colorTransition
        }),
        D = N.filter((e) => ['xbox', 'playstation'].includes(e.connected_account_type)),
        Q = (0, h.Bz)(T),
        V = (0, i.e7)([p.Z], () => p.Z.getState().theme),
        L = (0, l.wj)(V) ? _.BRd.DARK : _.BRd.LIGHT,
        { startConsoleQuest: M, startingConsoleQuest: W } = (0, g.GI)({
            questId: T.id,
            beforeRequest: () => {
                (q.startAnimation(),
                    k({
                        questId: T.id,
                        questContent: x.jn.CONNECTIONS_MODAL,
                        questContentCTA: m.jZ.DEFIBRILLATOR,
                        sourceQuestContent: P
                    }));
            },
            afterRequest: (e) => {
                (q.stopAnimation(), A(e));
            }
        });
    return (0, r.jsxs)(c.Y0X, {
        transitionState: E,
        size: c.CgR.DYNAMIC,
        className: y.modalRoot,
        parentComponent: 'QuestConsoleConnectionErrorsModal',
        children: [
            (0, r.jsxs)(c.xBx, {
                direction: d.Z.Direction.VERTICAL,
                separator: !1,
                className: y.modalHeader,
                children: [
                    (0, r.jsxs)('div', {
                        className: y.modalTop,
                        children: [
                            (0, r.jsx)('div', {
                                className: y.iconFrame,
                                children: (0, r.jsx)('img', {
                                    className: y.icon,
                                    alt: '',
                                    src: C
                                })
                            }),
                            (0, r.jsx)(c.olH, {
                                className: y.closeBtn,
                                onClick: w
                            })
                        ]
                    }),
                    (0, r.jsx)(c.X6q, {
                        variant: 'heading-xl/bold',
                        children: v.intl.string(v.t.W5lmKi)
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        className: y.upperBodyText,
                        children: R.message
                    })
                ]
            }),
            (0, r.jsxs)(c.hzk, {
                className: y.modalContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: y.contentHeader,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'header-secondary',
                                children: v.intl.string(v.t['+/hZMz'])
                            }),
                            (0, r.jsxs)(c.P3F, {
                                className: a()(y.refreshWrapper, { [y.disabled]: W }),
                                onClick: M,
                                children: [
                                    q.render(),
                                    (0, r.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'currentColor',
                                        className: y.colorTransition,
                                        children: v.intl.string(v.t.wzzjk5)
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: y.accountsWrapper,
                        children: [
                            (0, r.jsx)(S, {
                                icon: (0, r.jsx)(c.pzj, { size: 'sm' }),
                                text: v.intl.string(v.t.br3uIi)
                            }),
                            (0, r.jsx)(S, {
                                icon: (0, r.jsx)(c.iWm, { size: 'sm' }),
                                text: v.intl.string(v.t.XF4wuL),
                                errors: Q ? void 0 : D.map((e) => e.message),
                                gameTile: Q
                                    ? (0, r.jsx)(c.ua7, {
                                          'aria-label': T.config.messages.gameTitle,
                                          text: () =>
                                              (0, r.jsxs)('div', {
                                                  className: y.tooltip,
                                                  children: [
                                                      (0, r.jsx)(c.Text, {
                                                          variant: 'text-sm/medium',
                                                          children: T.config.messages.gameTitle
                                                      }),
                                                      (0, r.jsx)(c.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-muted',
                                                          children: v.intl.string(v.t.STpNEB)
                                                      })
                                                  ]
                                              }),
                                          children: (e) => {
                                              var t, n;
                                              return (0, r.jsx)(
                                                  'img',
                                                  ((t = O({}, e)),
                                                  (n = n =
                                                      {
                                                          className: y.gameTile,
                                                          alt: T.config.messages.gameTitle,
                                                          src: (0, b.fh)(T, b.eC.GAME_TILE, L).url
                                                      }),
                                                  Object.getOwnPropertyDescriptors
                                                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                      : (function (e, t) {
                                                            var n = Object.keys(e);
                                                            if (Object.getOwnPropertySymbols) {
                                                                var r = Object.getOwnPropertySymbols(e);
                                                                n.push.apply(n, r);
                                                            }
                                                            return n;
                                                        })(Object(n)).forEach(function (e) {
                                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                        }),
                                                  t)
                                              );
                                          }
                                      })
                                    : null
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsxs)(c.mzw, {
                className: y.footer,
                children: [
                    (0, r.jsx)(c.zxk, {
                        size: c.PhG.MIN,
                        onClick: w,
                        className: y.footerCloseButton,
                        children: v.intl.string(v.t.cpT0Cg)
                    }),
                    (0, r.jsx)(c.zxk, {
                        look: c.iLD.LINK,
                        color: c.Ttl.PRIMARY,
                        onClick: () => {
                            (w(),
                                (0, h.V$)(
                                    { quest: T },
                                    {
                                        content: x.jn.CONNECTIONS_MODAL,
                                        ctaContent: m.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                                        impressionId: B,
                                        sourceQuestContent: P
                                    }
                                ));
                        },
                        children: v.intl.string(v.t['qiS+xs'])
                    })
                ]
            })
        ]
    });
}
function S(e) {
    let { icon: t, text: n, errors: o = [], gameTile: s } = e,
        i = o.length > 0,
        l = i ? c._3e : c.B_b;
    return (0, r.jsxs)('div', {
        className: y.connectionRow,
        children: [
            (0, r.jsxs)('div', {
                className: a()(y.connectionRowHeader, { [y.connectionRowHeaderError]: i }),
                children: [
                    (0, r.jsxs)('div', {
                        className: y.connectionRowHeaderContent,
                        children: [
                            t,
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-default',
                                children: n
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: y.connectionRowHeaderContent,
                        children: [
                            s,
                            (0, r.jsx)(l, {
                                color: 'currentColor',
                                size: 'sm',
                                className: a()({
                                    [y.success]: !i,
                                    [y.error]: i
                                })
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: y.errorsContainer,
                children: o.map((e) =>
                    (0, r.jsxs)(
                        'div',
                        {
                            className: y.errorRow,
                            children: [
                                (0, r.jsx)(c.aNP, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: y.error
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
function w(e) {
    (0, c.ZDy)(async () => {
        let { default: t } = await Promise.resolve().then(n.bind(n, 623249));
        return (n) => (0, r.jsx)(t, O({}, n, e));
    });
}
