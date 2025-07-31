(n.d(e, { default: () => b }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(399606),
    o = n(481060),
    c = n(607070),
    s = n(626135),
    l = n(832239),
    u = n(407383),
    d = n(981631),
    p = n(388032),
    _ = n(383721),
    O = n(617921);
function f(t) {
    let { onClose: e, source: f = u.I.INAPPROPRIATE_CONVERSATION } = t,
        b = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        [m, g] = i.useState(!1);
    i.useEffect(() => {
        let t = new Date();
        return (
            s.default.track(d.rMx.VIBING_WUMPUS_VIEWED, { source: f }),
            (0, l.JO)(),
            () => {
                (s.default.track(d.rMx.VIBING_WUMPUS_CLOSED, {
                    duration_open_ms: new Date().getTime() - t.getTime(),
                    source: f
                }),
                    (0, l.zu)());
            }
        );
    }, [f]);
    let N = () => {
        (m ? ((0, l.JO)(), s.default.track(d.rMx.VIBING_WUMPUS_ACTION, { action: u.G.PLAY })) : ((0, l.hW)(), s.default.track(d.rMx.VIBING_WUMPUS_ACTION, { action: u.G.PAUSE })), g(!m));
    };
    async function I() {
        let { default: t } = await n.e('29641').then(n.t.bind(n, 937359, 19));
        return t;
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: _.ringContainer,
                children: (0, r.jsx)('img', {
                    src: O,
                    alt: '',
                    className: _.__invalid_ringArt
                })
            }),
            (0, r.jsx)(o.Fmz, {
                importData: I,
                shouldAnimate: !m && !b,
                className: _.wumpus,
                pauseAtFrame: b ? 200 : void 0
            }),
            (0, r.jsx)(o.ua7, {
                text: m ? p.intl.string(p.t.RscU7O) : p.intl.string(p.t.ZcgDJS),
                position: 'top',
                'aria-label': m ? p.intl.string(p.t.RscU7O) : p.intl.string(p.t.ZcgDJS),
                children: (t) => {
                    var e, n;
                    return (0, r.jsx)(
                        o.P3F,
                        ((e = (function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {},
                                    r = Object.keys(n);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (t) {
                                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                        })
                                    )),
                                    r.forEach(function (e) {
                                        var r;
                                        ((r = n[e]),
                                            e in t
                                                ? Object.defineProperty(t, e, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (t[e] = r));
                                    }));
                            }
                            return t;
                        })({}, t)),
                        (n = n =
                            {
                                onClick: N,
                                className: _.iconButton,
                                children: m
                                    ? (0, r.jsx)(o.o1U, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: _.icon
                                      })
                                    : (0, r.jsx)(o.fpf, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: _.icon
                                      })
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                            : (function (t, e) {
                                  var n = Object.keys(t);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(t);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(n)).forEach(function (t) {
                                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                              }),
                        e)
                    );
                }
            }),
            (0, r.jsx)(o.hzk, {
                'data-migration-pending': !0,
                className: _.body,
                children: (0, r.jsxs)('div', {
                    className: _.textContainer,
                    children: [
                        (0, r.jsx)(o.X6q, {
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            children: p.intl.string(p.t.L4ifkZ)
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: p.intl.string(p.t.R8LCMT)
                        })
                    ]
                })
            }),
            (0, r.jsx)(o.mzw, {
                'data-migration-pending': !0,
                children: (0, r.jsx)('div', {
                    className: _.buttonContainer,
                    children: (0, r.jsx)(o.zxk, {
                        variant: 'primary',
                        text: p.intl.string(p.t['8eKkaW']),
                        fullWidth: !0,
                        onClick: () => {
                            (e(), s.default.track(d.rMx.VIBING_WUMPUS_ACTION, { action: u.G.BACK_TO_CONVERSATION }));
                        }
                    })
                })
            })
        ]
    });
}
let b = (t) => {
    let { onClose: e, transitionState: n } = t;
    return (0, r.jsx)(o.Y0X, {
        'data-migration-pending': !0,
        transitionState: n,
        parentComponent: 'VibingWumpusModal',
        children: (0, r.jsx)(f, { onClose: e })
    });
};
