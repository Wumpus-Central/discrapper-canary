n.d(e, { default: () => I }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    c = n.n(o),
    a = n(399606),
    s = n(481060),
    l = n(607070),
    u = n(626135),
    d = n(832239),
    _ = n(407383),
    p = n(981631),
    N = n(388032),
    O = n(887372),
    f = n(617921);
function b(t) {
    let { onClose: e, source: o = _.I.INAPPROPRIATE_CONVERSATION } = t,
        b = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
        [I, x] = i.useState(!1);
    i.useEffect(() => {
        let t = new Date();
        return (
            u.default.track(p.rMx.VIBING_WUMPUS_VIEWED, { source: o }),
            (0, d.JO)(),
            () => {
                u.default.track(p.rMx.VIBING_WUMPUS_CLOSED, {
                    duration_open_ms: new Date().getTime() - t.getTime(),
                    source: o
                }),
                    (0, d.zu)();
            }
        );
    }, [o]);
    let h = () => {
        I ? ((0, d.JO)(), u.default.track(p.rMx.VIBING_WUMPUS_ACTION, { action: _.G.PLAY })) : ((0, d.hW)(), u.default.track(p.rMx.VIBING_WUMPUS_ACTION, { action: _.G.PAUSE })), x(!I);
    };
    async function j() {
        let { default: t } = await n.e('29641').then(n.t.bind(n, 937359, 19));
        return t;
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: O.ringContainer,
                children: (0, r.jsx)('img', {
                    src: f,
                    alt: '',
                    className: O.__invalid_ringArt
                })
            }),
            (0, r.jsx)(s.Fmz, {
                importData: j,
                shouldAnimate: !I && !b,
                className: O.wumpus,
                pauseAtFrame: b ? 200 : void 0
            }),
            (0, r.jsx)(s.ua7, {
                text: I ? N.NW.string(N.t.RscU7O) : N.NW.string(N.t.ZcgDJS),
                position: 'top',
                'aria-label': I ? N.NW.string(N.t.RscU7O) : N.NW.string(N.t.ZcgDJS),
                children: (t) => {
                    var e, n;
                    return (0, r.jsx)(
                        s.P3F,
                        ((e = (function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {},
                                    r = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (t) {
                                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                        })
                                    )),
                                    r.forEach(function (e) {
                                        var r;
                                        (r = n[e]),
                                            e in t
                                                ? Object.defineProperty(t, e, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (t[e] = r);
                                    });
                            }
                            return t;
                        })({}, t)),
                        (n = n =
                            {
                                onClick: h,
                                className: O.iconButton,
                                children: I
                                    ? (0, r.jsx)(s.o1U, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: O.icon
                                      })
                                    : (0, r.jsx)(s.fpf, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: O.icon
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
            (0, r.jsx)(s.hzk, {
                className: c()(O.body),
                children: (0, r.jsxs)('div', {
                    className: c()(O.textContainer),
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            children: N.NW.string(N.t.L4ifkZ)
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: N.NW.string(N.t.R8LCMT)
                        })
                    ]
                })
            }),
            (0, r.jsx)(s.mzw, {
                children: (0, r.jsx)('div', {
                    className: O.buttonContainer,
                    children: (0, r.jsx)(s.zxk, {
                        fullWidth: !0,
                        color: s.zxk.Colors.BRAND,
                        size: s.zxk.Sizes.MEDIUM,
                        onClick: () => {
                            e(), u.default.track(p.rMx.VIBING_WUMPUS_ACTION, { action: _.G.BACK_TO_CONVERSATION });
                        },
                        children: N.NW.string(N.t['8eKkaW'])
                    })
                })
            })
        ]
    });
}
let I = (t) => {
    let { onClose: e, transitionState: n } = t;
    return (0, r.jsx)(s.Y0X, {
        transitionState: n,
        children: (0, r.jsx)(b, { onClose: e })
    });
};
