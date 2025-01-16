n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(202513);
function s(e) {
    let { label: t, sublabel: n, value: s, additionalContent: a, tooltip: o } = e;
    return (0, i.jsxs)('div', {
        className: l.metricCard,
        'aria-label': t,
        children: [
            (0, i.jsxs)('div', {
                className: l.metricCardLabelContainer,
                children: [
                    (0, i.jsx)(r.Text, {
                        className: l.metricCardLabel,
                        variant: 'text-xs/medium',
                        color: 'interactive-normal',
                        'aria-hidden': !0,
                        children: t
                    }),
                    null != o &&
                        (0, i.jsx)(r.Tooltip, {
                            text: o,
                            children: (e) =>
                                (0, i.jsx)(r.CircleInformationIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: l.__invalid_labelTooltipIcon,
                                    ...e
                                })
                        }),
                    null != n
                        ? (0, i.jsx)(r.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: n
                          })
                        : null
                ]
            }),
            (0, i.jsx)(r.Text, {
                tag: 'span',
                variant: 'heading-xl/medium',
                color: 'header-primary',
                children: s
            }),
            a
        ]
    });
}
