t.d(n, {
    A: function () {
        return s;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    a = t(826020);
function s(e) {
    let { text: n, tooltipText: t, onClick: s } = e;
    return (0, i.jsx)(l.Tooltip, {
        text: t,
        shouldShow: null != t,
        children: (e) =>
            (0, i.jsxs)(l.Clickable, {
                ...e,
                className: a.container,
                onClick: s,
                children: [
                    (0, i.jsx)(l.PlusSmallIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: a.icon
                    }),
                    (0, i.jsx)(l.Text, {
                        color: 'interactive-active',
                        variant: 'text-md/semibold',
                        children: n
                    })
                ]
            })
    });
}
