n.d(t, { Z: () => u }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(642128),
    o = n(481060),
    c = n(320319),
    d = n(687588);
let u = (e) => {
    let { cards: t, className: n, cardType: s } = e,
        u = () => (window.innerWidth < 910 ? 1 : window.innerWidth < 1400 ? 2 : 3),
        [m, g] = i.useState(0),
        [p, h] = i.useState(u()),
        f = t.length;
    i.useEffect(() => {
        let e = () => {
            h(u());
        };
        return (
            window.addEventListener('resize', e),
            () => {
                window.removeEventListener('resize', e);
            }
        );
    }, []),
        i.useEffect(() => {
            g((e) => (f > p && e > f - p ? f - p : f <= p ? 0 : e));
        }, [f, p]);
    let b = m > 0,
        N = i.useCallback((e) => ({ x: (e - m) * 100 }), [m]),
        [x, _] = (0, o.bYB)(t.length, N);
    return (
        i.useEffect(() => {
            _(N);
        }, [_, N]),
        (0, r.jsx)('div', {
            className: n,
            children: (0, r.jsxs)('div', {
                className: d.cardContainer,
                children: [
                    f > p &&
                        (0, r.jsx)(o.P3F, {
                            onClick: b
                                ? () => {
                                      g((e) => (0 === e ? f - p : e - 1));
                                  }
                                : void 0,
                            className: a()({
                                [d.leftArrow]: b,
                                [d.inactiveArrow]: !b
                            }),
                            children: (0, r.jsx)(o.whL, {
                                className: d.arrowIcon,
                                colorClass: d.arrowIcon
                            })
                        }),
                    (0, r.jsx)('div', {
                        className: d.cardInnerContainer,
                        children: x.map((e, n) => {
                            var i, a;
                            let { x: o } = e;
                            return (0, r.jsx)(
                                l.animated.div,
                                {
                                    className: d.card,
                                    style: { transform: null == o ? void 0 : o.to((e) => 'translate3d('.concat(e, '%,0,0)')) },
                                    children: (0, r.jsx)(
                                        c.Z,
                                        ((i = (function (e) {
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
                                        })({}, t[n])),
                                        (a = a = { cardType: s }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(a)).forEach(function (e) {
                                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                                              }),
                                        i),
                                        ''.concat(t[n].name, '_').concat(n, '_perks_card')
                                    )
                                },
                                ''.concat(t[n].name, '_').concat(n, '_animated_div')
                            );
                        })
                    }),
                    f > p &&
                        (0, r.jsx)(o.P3F, {
                            onClick: () => {
                                g((e) => (e >= f - p ? 0 : e + 1));
                            },
                            className: d.rightArrow,
                            children: (0, r.jsx)(o.ZSh, {
                                className: d.arrowIcon,
                                colorClass: d.arrowIcon
                            })
                        }),
                    f > p &&
                        (0, r.jsx)('div', {
                            className: d.cardProgressBar,
                            children: t.map((e, t) => {
                                if (!(t > f - p)) return (0, r.jsx)('div', { className: t === m ? d.selectedDot : d.dot }, 'progress_bar_dot_'.concat(t));
                            })
                        })
                ]
            })
        })
    );
};
