n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(282338);
function a(e) {
    let { step: t, header: n, children: a } = e;
    return (0, r.jsxs)('div', {
        className: s.triggerContainer,
        children: [
            (0, r.jsx)('div', {
                className: s.triggerCounterContainer,
                children: (0, r.jsx)('div', {
                    className: s.stepCountIcon,
                    children: (0, r.jsx)(i.Text, {
                        className: s.stepCount,
                        variant: 'text-sm/bold',
                        children: t
                    })
                })
            }),
            (0, r.jsxs)('div', {
                className: s.triggerMainContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: s.__invalid_triggerHeaderContainer,
                        children: (0, r.jsx)(i.Text, {
                            className: s.triggerHeader,
                            variant: 'text-sm/normal',
                            children: n
                        })
                    }),
                    null != a &&
                        (0, r.jsx)('div', {
                            className: s.triggerSettingsContainer,
                            children: a
                        })
                ]
            })
        ]
    });
}
