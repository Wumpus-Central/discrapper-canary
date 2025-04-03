n.d(t, {
    default: () => w,
    y: () => P
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
    f = n(915750),
    g = n(113434),
    x = n(497505),
    h = n(918701),
    b = n(475595),
    j = n(667105),
    v = n(981631),
    y = n(388032),
    _ = n(912621),
    C = n(708901);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function w(e) {
    var t;
    let { questId: n, errorHints: s, transitionState: w, onClose: P } = e,
        N = (0, g.sf)(n);
    null == N && P();
    let [E, T] = (0, o.useState)(s),
        A = (0, g.KX)(),
        B = (0, m.O5)(),
        R = null == (t = (0, f.WD)()) ? void 0 : t.getId(),
        k = (0, i.e7)([d.Z], () => d.Z.useReducedMotion),
        q = (0, j.g2)({
            useReducedMotion: k,
            className: _.colorTransition
        }),
        D = E.filter((e) => ['xbox', 'playstation'].includes(e.connected_account_type)),
        I = (0, h.Bz)(N),
        W = (0, i.e7)([p.Z], () => p.Z.getState().theme),
        M = (0, l.wj)(W) ? v.BRd.DARK : v.BRd.LIGHT,
        { startConsoleQuest: L, startingConsoleQuest: Z } = (0, g.GI)({
            questId: N.id,
            beforeRequest: () => {
                q.startAnimation(),
                    B({
                        questId: N.id,
                        questContent: x.jn.CONNECTIONS_MODAL,
                        questContentCTA: m.jZ.DEFIBRILLATOR
                    });
            },
            afterRequest: (e) => {
                q.stopAnimation(), T(e);
            }
        });
    return (0, r.jsxs)(c.Y0X, {
        transitionState: w,
        size: c.CgR.DYNAMIC,
        className: _.modalRoot,
        children: [
            (0, r.jsxs)(c.xBx, {
                direction: u.Z.Direction.VERTICAL,
                separator: !1,
                className: _.modalHeader,
                children: [
                    (0, r.jsxs)('div', {
                        className: _.modalTop,
                        children: [
                            (0, r.jsx)('div', {
                                className: _.iconFrame,
                                children: (0, r.jsx)('img', {
                                    className: _.icon,
                                    alt: '',
                                    src: C
                                })
                            }),
                            (0, r.jsx)(c.olH, {
                                className: _.closeBtn,
                                onClick: P
                            })
                        ]
                    }),
                    (0, r.jsx)(c.X6q, {
                        variant: 'heading-xl/bold',
                        children: y.NW.string(y.t.W5lmKi)
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        className: _.upperBodyText,
                        children: A.message
                    })
                ]
            }),
            (0, r.jsxs)(c.hzk, {
                className: _.modalContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: _.contentHeader,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'header-secondary',
                                children: y.NW.string(y.t['+/hZMz'])
                            }),
                            (0, r.jsxs)(c.P3F, {
                                className: a()(_.refreshWrapper, { [_.disabled]: Z }),
                                onClick: L,
                                children: [
                                    q.render(),
                                    (0, r.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'currentColor',
                                        className: _.colorTransition,
                                        children: y.NW.string(y.t.wzzjk5)
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: _.accountsWrapper,
                        children: [
                            (0, r.jsx)(S, {
                                icon: (0, r.jsx)(c.pzj, { size: 'sm' }),
                                text: y.NW.string(y.t.br3uIi)
                            }),
                            (0, r.jsx)(S, {
                                icon: (0, r.jsx)(c.iWm, { size: 'sm' }),
                                text: y.NW.string(y.t.XF4wuL),
                                errors: I ? void 0 : D.map((e) => e.message),
                                gameTile: I
                                    ? (0, r.jsx)(c.ua7, {
                                          'aria-label': N.config.messages.gameTitle,
                                          text: () =>
                                              (0, r.jsxs)('div', {
                                                  className: _.tooltip,
                                                  children: [
                                                      (0, r.jsx)(c.Text, {
                                                          variant: 'text-sm/medium',
                                                          children: N.config.messages.gameTitle
                                                      }),
                                                      (0, r.jsx)(c.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-muted',
                                                          children: y.NW.string(y.t.STpNEB)
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
                                                          className: _.gameTile,
                                                          alt: N.config.messages.gameTitle,
                                                          src: (0, b.fh)(N, b.eC.GAME_TILE, M).url
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
                className: _.footer,
                children: [
                    (0, r.jsx)(c.zxk, {
                        size: c.PhG.MIN,
                        onClick: P,
                        className: _.footerCloseButton,
                        children: y.NW.string(y.t.cpT0Cg)
                    }),
                    (0, r.jsx)(c.zxk, {
                        look: c.iLD.LINK,
                        color: c.Ttl.PRIMARY,
                        onClick: () => {
                            P(),
                                (0, h.V$)(
                                    { quest: N },
                                    {
                                        content: x.jn.CONNECTIONS_MODAL,
                                        ctaContent: m.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                                        impressionId: R
                                    }
                                );
                        },
                        children: y.NW.string(y.t['qiS+xs'])
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
        className: _.connectionRow,
        children: [
            (0, r.jsxs)('div', {
                className: a()(_.connectionRowHeader, { [_.connectionRowHeaderError]: i }),
                children: [
                    (0, r.jsxs)('div', {
                        className: _.connectionRowHeaderContent,
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
                        className: _.connectionRowHeaderContent,
                        children: [
                            s,
                            (0, r.jsx)(l, {
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
            (0, r.jsx)('div', {
                className: _.errorsContainer,
                children: o.map((e) =>
                    (0, r.jsxs)(
                        'div',
                        {
                            className: _.errorRow,
                            children: [
                                (0, r.jsx)(c.aNP, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: _.error
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
function P(e) {
    (0, c.ZDy)(async () => {
        let { default: t } = await Promise.resolve().then(n.bind(n, 623249));
        return (n) => (0, r.jsx)(t, O({}, n, e));
    });
}
