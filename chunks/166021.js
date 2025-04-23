n.d(t, { Z: () => u }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(272573),
    o = n(481060),
    c = n(320319),
    d = n(687588);
let u = (e) => {
    let { cards: t, className: n, cardType: s } = e,
        u = () => (window.innerWidth < 910 ? 1 : window.innerWidth < 1400 ? 2 : 3),
        [m, g] = r.useState(0),
        [p, h] = r.useState(u()),
        f = t.length;
    r.useEffect(() => {
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
        r.useEffect(() => {
            g((e) => (f > p && e > f - p ? f - p : f <= p ? 0 : e));
        }, [f, p]);
    let b = m > 0,
        _ = r.useCallback((e) => ({ x: (e - m) * 100 }), [m]),
        [x, E] = (0, o.bYB)(t.length, _);
    return (
        r.useEffect(() => {
            E(_);
        }, [E, _]),
        (0, i.jsx)('div', {
            className: n,
            children: (0, i.jsxs)('div', {
                className: d.cardContainer,
                children: [
                    f > p &&
                        (0, i.jsx)(o.P3F, {
                            onClick: b
                                ? () => {
                                      g((e) => (0 === e ? f - p : e - 1));
                                  }
                                : void 0,
                            className: l()({
                                [d.leftArrow]: b,
                                [d.inactiveArrow]: !b
                            }),
                            children: (0, i.jsx)(o.whL, {
                                className: d.arrowIcon,
                                colorClass: d.arrowIcon
                            })
                        }),
                    (0, i.jsx)('div', {
                        className: d.cardInnerContainer,
                        children: x.map((e, n) => {
                            var r, l;
                            let { x: o } = e;
                            return (0, i.jsx)(
                                a.animated.div,
                                {
                                    className: d.card,
                                    style: { transform: null == o ? void 0 : o.to((e) => 'translate3d('.concat(e, '%,0,0)')) },
                                    children: (0, i.jsx)(
                                        c.Z,
                                        ((r = (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    i = Object.keys(n);
                                                'function' == typeof Object.getOwnPropertySymbols &&
                                                    (i = i.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                        })
                                                    )),
                                                    i.forEach(function (t) {
                                                        var i;
                                                        (i = n[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: i,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0
                                                                  })
                                                                : (e[t] = i);
                                                    });
                                            }
                                            return e;
                                        })({}, t[n])),
                                        (l = l = { cardType: s }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var i = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, i);
                                                  }
                                                  return n;
                                              })(Object(l)).forEach(function (e) {
                                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                                              }),
                                        r),
                                        ''.concat(t[n].name, '_').concat(n, '_perks_card')
                                    )
                                },
                                ''.concat(t[n].name, '_').concat(n, '_animated_div')
                            );
                        })
                    }),
                    f > p &&
                        (0, i.jsx)(o.P3F, {
                            onClick: () => {
                                g((e) => (e >= f - p ? 0 : e + 1));
                            },
                            className: d.rightArrow,
                            children: (0, i.jsx)(o.ZSh, {
                                className: d.arrowIcon,
                                colorClass: d.arrowIcon
                            })
                        }),
                    f > p &&
                        (0, i.jsx)('div', {
                            className: d.cardProgressBar,
                            children: t.map((e, t) => {
                                if (!(t > f - p)) return (0, i.jsx)('div', { className: t === m ? d.selectedDot : d.dot }, 'progress_bar_dot_'.concat(t));
                            })
                        })
                ]
            })
        })
    );
};
