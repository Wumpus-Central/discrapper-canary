n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(799639);
function s(e) {
    let { step: t, header: n, children: s } = e;
    return (0, i.jsxs)('div', {
        className: l.triggerContainer,
        children: [
            (0, i.jsx)('div', {
                className: l.triggerCounterContainer,
                children: (0, i.jsx)('div', {
                    className: l.stepCountIcon,
                    children: (0, i.jsx)(r.Text, {
                        className: l.stepCount,
                        variant: 'text-sm/bold',
                        children: t
                    })
                })
            }),
            (0, i.jsxs)('div', {
                className: l.triggerMainContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: l.__invalid_triggerHeaderContainer,
                        children: (0, i.jsx)(r.Text, {
                            className: l.triggerHeader,
                            variant: 'text-sm/normal',
                            children: n
                        })
                    }),
                    null != s &&
                        (0, i.jsx)('div', {
                            className: l.triggerSettingsContainer,
                            children: s
                        })
                ]
            })
        ]
    });
}
