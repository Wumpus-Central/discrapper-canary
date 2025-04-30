n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(282338);
function s(e) {
    let { step: t, header: n, children: s } = e;
    return (0, r.jsxs)('div', {
        className: l.triggerContainer,
        children: [
            (0, r.jsx)('div', {
                className: l.triggerCounterContainer,
                children: (0, r.jsx)('div', {
                    className: l.stepCountIcon,
                    children: (0, r.jsx)(i.Text, {
                        className: l.stepCount,
                        variant: 'text-sm/bold',
                        children: t
                    })
                })
            }),
            (0, r.jsxs)('div', {
                className: l.triggerMainContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: l.__invalid_triggerHeaderContainer,
                        children: (0, r.jsx)(i.Text, {
                            className: l.triggerHeader,
                            variant: 'text-sm/normal',
                            children: n
                        })
                    }),
                    null != s &&
                        (0, r.jsx)('div', {
                            className: l.triggerSettingsContainer,
                            children: s
                        })
                ]
            })
        ]
    });
}
