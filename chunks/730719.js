n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(388032),
    s = n(96865);
let o = (e) => {
    let { errorMessage: t, onClose: n } = e;
    if (null == t || '' === t) return null;
    let o = () => {
        n();
    };
    return (0, i.jsxs)('div', {
        className: s.errorContainer,
        children: [
            (0, i.jsx)(r.P4T, {
                size: 'custom',
                color: 'currentColor',
                width: 20,
                height: 20,
                className: s.errorIcon
            }),
            (0, i.jsx)(r.Text, {
                className: s.errorText,
                variant: 'text-sm/normal',
                children: t
            }),
            (0, i.jsx)(r.P3F, {
                onClick: o,
                'aria-label': a.intl.string(a.t.WAI6xs),
                className: s.closeIcon
            })
        ]
    });
};
