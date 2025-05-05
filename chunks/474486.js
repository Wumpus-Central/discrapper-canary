n.d(t, {
    C: () => u,
    l: () => d
});
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(119269),
    o = n(227140),
    s = n(388032),
    c = n(742116);
let u = (e) => {
        let { children: t } = e,
            n = (0, r.jsxs)('div', {
                className: c.coachTipContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: c.iconContainer,
                        children: (0, r.jsx)(a.ZP, {
                            staticPercentage: 100,
                            iconClassName: c.icon,
                            showAnimations: !0,
                            progressCircleVariation: a.Qo.NITRO_LOGO,
                            ellipseOpacity: 1,
                            customAnimationClassName: c.customCircleAnimation,
                            circleColor: 'url(#purple-gradient)'
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: c.coachtipContent,
                        children: [
                            (0, r.jsx)(l.X6q, {
                                variant: 'heading-sm/bold',
                                children: s.intl.string(s.t.USo4s7)
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-xs/normal',
                                children: s.intl.format(s.t.AGKQq6, { numReferrals: 3 })
                            })
                        ]
                    })
                ]
            });
        return (0, r.jsx)(l.ua7, {
            text: n,
            position: 'right',
            'aria-label': s.intl.string(s.t.USo4s7),
            tooltipClassName: c.marketingBadgeTooltip,
            allowOverflow: !0,
            tooltipContentClassName: c.tooltipContent,
            children: (e) => {
                var n, i;
                return (0, r.jsx)(
                    'div',
                    ((n = (function (e) {
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
                    })({}, e)),
                    (i = i = { children: t }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    n)
                );
            }
        });
    },
    d = (e) => {
        let { isSelected: t, onSelect: n } = e;
        return (
            i.useEffect(() => {
                t && n();
            }, [t, n]),
            (0, r.jsx)(o.Z, { copy: s.intl.string(s.t.y2b7CA) })
        );
    };
