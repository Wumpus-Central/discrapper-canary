(n.d(t, {
    default: () => w,
    y: () => T
}),
    n(388685));
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(442837),
    l = n(780384),
    c = n(755721),
    u = n(481060),
    d = n(607070),
    p = n(600164),
    m = n(210887),
    f = n(617136),
    g = n(915750),
    x = n(113434),
    h = n(497505),
    b = n(918701),
    j = n(475595),
    _ = n(667105),
    v = n(981631),
    y = n(388032),
    C = n(912621),
    O = n(708901);
function E(e) {
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
function w(e) {
    var t;
    let { questId: n, errorHints: s, transitionState: w, onClose: T, sourceQuestContent: P } = e,
        A = (0, x.sf)(n);
    null == A && T();
    let [N, R] = (0, o.useState)(s),
        B = (0, x.KX)(),
        k = (0, f.O5)(),
        I = null == (t = (0, g.WD)()) ? void 0 : t.getId(),
        q = (0, i.e7)([d.Z], () => d.Z.useReducedMotion),
        D = (0, _.g2)({
            useReducedMotion: q,
            className: C.colorTransition
        }),
        Q = N.filter((e) => ['xbox', 'playstation'].includes(e.connected_account_type)),
        V = (0, b.Bz)(A),
        L = (0, i.e7)([m.Z], () => m.Z.getState().theme),
        M = (0, l.wj)(L) ? v.BRd.DARK : v.BRd.LIGHT,
        { startConsoleQuest: W, startingConsoleQuest: Z } = (0, x.GI)({
            questId: A.id,
            beforeRequest: () => {
                (D.startAnimation(),
                    k({
                        questId: A.id,
                        questContent: h.jn.CONNECTIONS_MODAL,
                        questContentCTA: f.jZ.DEFIBRILLATOR,
                        sourceQuestContent: P
                    }));
            },
            afterRequest: (e) => {
                (D.stopAnimation(), R(e));
            }
        });
    return (0, r.jsxs)(u.Y0X, {
        transitionState: w,
        size: u.CgR.DYNAMIC,
        className: C.modalRoot,
        parentComponent: 'QuestConsoleConnectionErrorsModal',
        children: [
            (0, r.jsxs)(u.xBx, {
                direction: p.Z.Direction.VERTICAL,
                separator: !1,
                className: C.modalHeader,
                children: [
                    (0, r.jsxs)('div', {
                        className: C.modalTop,
                        children: [
                            (0, r.jsx)('div', {
                                className: C.iconFrame,
                                children: (0, r.jsx)('img', {
                                    className: C.icon,
                                    alt: '',
                                    src: O
                                })
                            }),
                            (0, r.jsx)(u.olH, {
                                className: C.closeBtn,
                                onClick: T
                            })
                        ]
                    }),
                    (0, r.jsx)(u.X6q, {
                        variant: 'heading-xl/bold',
                        children: y.intl.string(y.t.W5lmKi)
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        className: C.upperBodyText,
                        children: B.message
                    })
                ]
            }),
            (0, r.jsxs)(u.hzk, {
                className: C.modalContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: C.contentHeader,
                        children: [
                            (0, r.jsx)(u.Text, {
                                variant: 'eyebrow',
                                color: 'header-secondary',
                                children: y.intl.string(y.t['+/hZMz'])
                            }),
                            (0, r.jsxs)(u.P3F, {
                                className: a()(C.refreshWrapper, { [C.disabled]: Z }),
                                onClick: W,
                                children: [
                                    D.render(),
                                    (0, r.jsx)(u.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'currentColor',
                                        className: C.colorTransition,
                                        children: y.intl.string(y.t.wzzjk5)
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: C.accountsWrapper,
                        children: [
                            (0, r.jsx)(S, {
                                icon: (0, r.jsx)(u.pzj, { size: 'sm' }),
                                text: y.intl.string(y.t.br3uIi)
                            }),
                            (0, r.jsx)(S, {
                                icon: (0, r.jsx)(u.iWm, { size: 'sm' }),
                                text: y.intl.string(y.t.XF4wuL),
                                errors: V ? void 0 : Q.map((e) => e.message),
                                gameTile: V
                                    ? (0, r.jsx)(u.ua7, {
                                          'aria-label': A.config.messages.gameTitle,
                                          text: () =>
                                              (0, r.jsxs)('div', {
                                                  className: C.tooltip,
                                                  children: [
                                                      (0, r.jsx)(u.Text, {
                                                          variant: 'text-sm/medium',
                                                          children: A.config.messages.gameTitle
                                                      }),
                                                      (0, r.jsx)(u.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-muted',
                                                          children: y.intl.string(y.t.STpNEB)
                                                      })
                                                  ]
                                              }),
                                          children: (e) => {
                                              var t, n;
                                              return (0, r.jsx)(
                                                  'img',
                                                  ((t = E({}, e)),
                                                  (n = n =
                                                      {
                                                          className: C.gameTile,
                                                          alt: A.config.messages.gameTitle,
                                                          src: (0, j.fh)(A, j.eC.GAME_TILE, M).url
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
            (0, r.jsxs)(u.mzw, {
                className: C.footer,
                children: [
                    (0, r.jsx)(c.zx, {
                        size: c.Ph.MIN,
                        onClick: T,
                        className: C.footerCloseButton,
                        children: y.intl.string(y.t.cpT0Cg)
                    }),
                    (0, r.jsx)(u.zxk, {
                        variant: 'secondary',
                        text: y.intl.string(y.t['qiS+xs']),
                        onClick: () => {
                            (T(),
                                (0, b.V$)(
                                    { quest: A },
                                    {
                                        content: h.jn.CONNECTIONS_MODAL,
                                        ctaContent: f.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                                        impressionId: I,
                                        sourceQuestContent: P
                                    }
                                ));
                        }
                    })
                ]
            })
        ]
    });
}
function S(e) {
    let { icon: t, text: n, errors: o = [], gameTile: s } = e,
        i = o.length > 0,
        l = i ? u._3e : u.B_b;
    return (0, r.jsxs)('div', {
        className: C.connectionRow,
        children: [
            (0, r.jsxs)('div', {
                className: a()(C.connectionRowHeader, { [C.connectionRowHeaderError]: i }),
                children: [
                    (0, r.jsxs)('div', {
                        className: C.connectionRowHeaderContent,
                        children: [
                            t,
                            (0, r.jsx)(u.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-default',
                                children: n
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: C.connectionRowHeaderContent,
                        children: [
                            s,
                            (0, r.jsx)(l, {
                                color: 'currentColor',
                                size: 'sm',
                                className: a()({
                                    [C.success]: !i,
                                    [C.error]: i
                                })
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: C.errorsContainer,
                children: o.map((e) =>
                    (0, r.jsxs)(
                        'div',
                        {
                            className: C.errorRow,
                            children: [
                                (0, r.jsx)(u.aNP, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: C.error
                                }),
                                (0, r.jsx)(u.Text, {
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
    (0, u.ZDy)(async () => {
        let { default: t } = await Promise.resolve().then(n.bind(n, 623249));
        return (n) => (0, r.jsx)(t, E({}, n, e));
    });
}
