var i = r(200651);
r(192379);
var a = r(481060),
    o = r(388032),
    s = r(96865);
let l = (e) => {
    let { errorMessage: n, onClose: r } = e;
    if (null == n || '' === n) return null;
    let l = () => {
        r();
    };
    return (0, i.jsxs)('div', {
        className: s.errorContainer,
        children: [
            (0, i.jsx)(a.CircleWarningIcon, {
                size: 'custom',
                color: 'currentColor',
                width: 20,
                height: 20,
                className: s.errorIcon
            }),
            (0, i.jsx)(a.Text, {
                className: s.errorText,
                variant: 'text-sm/normal',
                children: n
            }),
            (0, i.jsx)(a.Clickable, {
                onClick: l,
                'aria-label': o.intl.string(o.t.WAI6xs),
                className: s.closeIcon
            })
        ]
    });
};
n.Z = l;
