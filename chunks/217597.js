n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(380544);
function a(e) {
    let { label: t, sublabel: n, value: a, additionalContent: l, tooltip: o } = e;
    return (0, r.jsxs)('div', {
        className: s.metricCard,
        'aria-label': t,
        children: [
            (0, r.jsxs)('div', {
                className: s.metricCardLabelContainer,
                children: [
                    (0, r.jsx)(i.Text, {
                        className: s.metricCardLabel,
                        variant: 'text-xs/medium',
                        color: 'interactive-normal',
                        'aria-hidden': !0,
                        children: t
                    }),
                    null != o &&
                        (0, r.jsx)(i.ua7, {
                            text: o,
                            children: (e) =>
                                (0, r.jsx)(
                                    i.d3s,
                                    (function (e) {
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
                                    })(
                                        {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: s.__invalid_labelTooltipIcon
                                        },
                                        e
                                    )
                                )
                        }),
                    null != n
                        ? (0, r.jsx)(i.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: n
                          })
                        : null
                ]
            }),
            (0, r.jsx)(i.Text, {
                tag: 'span',
                variant: 'heading-xl/medium',
                color: 'header-primary',
                children: a
            }),
            l
        ]
    });
}
