n.d(e, { default: () => f }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(399606),
    c = n(481060),
    a = n(607070),
    s = n(626135),
    l = n(832239),
    u = n(407383),
    d = n(981631),
    _ = n(388032),
    p = n(383721),
    N = n(617921);
function O(t) {
    let { onClose: e, source: O = u.I.INAPPROPRIATE_CONVERSATION } = t,
        f = (0, o.e7)([a.Z], () => a.Z.useReducedMotion),
        [b, I] = i.useState(!1);
    i.useEffect(() => {
        let t = new Date();
        return (
            s.default.track(d.rMx.VIBING_WUMPUS_VIEWED, { source: O }),
            (0, l.JO)(),
            () => {
                s.default.track(d.rMx.VIBING_WUMPUS_CLOSED, {
                    duration_open_ms: new Date().getTime() - t.getTime(),
                    source: O
                }),
                    (0, l.zu)();
            }
        );
    }, [O]);
    let x = () => {
        b ? ((0, l.JO)(), s.default.track(d.rMx.VIBING_WUMPUS_ACTION, { action: u.G.PLAY })) : ((0, l.hW)(), s.default.track(d.rMx.VIBING_WUMPUS_ACTION, { action: u.G.PAUSE })), I(!b);
    };
    async function h() {
        let { default: t } = await n.e('29641').then(n.t.bind(n, 937359, 19));
        return t;
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: p.ringContainer,
                children: (0, r.jsx)('img', {
                    src: N,
                    alt: '',
                    className: p.__invalid_ringArt
                })
            }),
            (0, r.jsx)(c.Fmz, {
                importData: h,
                shouldAnimate: !b && !f,
                className: p.wumpus,
                pauseAtFrame: f ? 200 : void 0
            }),
            (0, r.jsx)(c.ua7, {
                text: b ? _.NW.string(_.t.RscU7O) : _.NW.string(_.t.ZcgDJS),
                position: 'top',
                'aria-label': b ? _.NW.string(_.t.RscU7O) : _.NW.string(_.t.ZcgDJS),
                children: (t) => {
                    var e, n;
                    return (0, r.jsx)(
                        c.P3F,
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
                                onClick: x,
                                className: p.iconButton,
                                children: b
                                    ? (0, r.jsx)(c.o1U, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: p.icon
                                      })
                                    : (0, r.jsx)(c.fpf, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: p.icon
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
            (0, r.jsx)(c.hzk, {
                className: p.body,
                children: (0, r.jsxs)('div', {
                    className: p.textContainer,
                    children: [
                        (0, r.jsx)(c.X6q, {
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            children: _.NW.string(_.t.L4ifkZ)
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: _.NW.string(_.t.R8LCMT)
                        })
                    ]
                })
            }),
            (0, r.jsx)(c.mzw, {
                children: (0, r.jsx)('div', {
                    className: p.buttonContainer,
                    children: (0, r.jsx)(c.zxk, {
                        fullWidth: !0,
                        color: c.zxk.Colors.BRAND,
                        size: c.zxk.Sizes.MEDIUM,
                        onClick: () => {
                            e(), s.default.track(d.rMx.VIBING_WUMPUS_ACTION, { action: u.G.BACK_TO_CONVERSATION });
                        },
                        children: _.NW.string(_.t['8eKkaW'])
                    })
                })
            })
        ]
    });
}
let f = (t) => {
    let { onClose: e, transitionState: n } = t;
    return (0, r.jsx)(c.Y0X, {
        transitionState: n,
        children: (0, r.jsx)(O, { onClose: e })
    });
};
