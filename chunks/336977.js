(n.d(e, { default: () => b }), n(388685));
var r = n(255367),
    i = n(73800),
    o = n(399606),
    a = n(481060),
    c = n(607070),
    s = n(626135),
    l = n(832239),
    u = n(407383),
    p = n(981631),
    d = n(388032),
    _ = n(383721),
    O = n(617921);
function f(t) {
    let { onClose: e, source: f = u.I.INAPPROPRIATE_CONVERSATION } = t,
        b = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        [N, I] = i.useState(!1);
    i.useEffect(() => {
        let t = new Date();
        return (
            s.default.track(p.rMx.VIBING_WUMPUS_VIEWED, { source: f }),
            (0, l.JO)(),
            () => {
                (s.default.track(p.rMx.VIBING_WUMPUS_CLOSED, {
                    duration_open_ms: new Date().getTime() - t.getTime(),
                    source: f
                }),
                    (0, l.zu)());
            }
        );
    }, [f]);
    let m = () => {
        (N ? ((0, l.JO)(), s.default.track(p.rMx.VIBING_WUMPUS_ACTION, { action: u.G.PLAY })) : ((0, l.hW)(), s.default.track(p.rMx.VIBING_WUMPUS_ACTION, { action: u.G.PAUSE })), I(!N));
    };
    async function x() {
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
            (0, r.jsx)(a.Fmz, {
                importData: x,
                shouldAnimate: !N && !b,
                className: _.wumpus,
                pauseAtFrame: b ? 200 : void 0
            }),
            (0, r.jsx)(a.ua7, {
                text: N ? d.intl.string(d.t.RscU7O) : d.intl.string(d.t.ZcgDJS),
                position: 'top',
                'aria-label': N ? d.intl.string(d.t.RscU7O) : d.intl.string(d.t.ZcgDJS),
                children: (t) => {
                    var e, n;
                    return (0, r.jsx)(
                        a.P3F,
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
                                onClick: m,
                                className: _.iconButton,
                                children: N
                                    ? (0, r.jsx)(a.o1U, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: _.icon
                                      })
                                    : (0, r.jsx)(a.fpf, {
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
            (0, r.jsx)(a.hzk, {
                className: _.body,
                children: (0, r.jsxs)('div', {
                    className: _.textContainer,
                    children: [
                        (0, r.jsx)(a.X6q, {
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            children: d.intl.string(d.t.L4ifkZ)
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: d.intl.string(d.t.R8LCMT)
                        })
                    ]
                })
            }),
            (0, r.jsx)(a.mzw, {
                children: (0, r.jsx)('div', {
                    className: _.buttonContainer,
                    children: (0, r.jsx)(a.zxk, {
                        variant: 'primary',
                        text: d.intl.string(d.t['8eKkaW']),
                        fullWidth: !0,
                        onClick: () => {
                            (e(), s.default.track(p.rMx.VIBING_WUMPUS_ACTION, { action: u.G.BACK_TO_CONVERSATION }));
                        }
                    })
                })
            })
        ]
    });
}
let b = (t) => {
    let { onClose: e, transitionState: n } = t;
    return (0, r.jsx)(a.Y0X, {
        transitionState: n,
        parentComponent: 'VibingWumpusModal',
        children: (0, r.jsx)(f, { onClose: e })
    });
};
