t.d(n, { A: () => a });
var i = t(200651);
t(192379);
var l = t(481060),
    s = t(826020);
function a(e) {
    let { text: n, tooltipText: t, onClick: a } = e;
    return (0, i.jsx)(l.ua7, {
        text: t,
        shouldShow: null != t,
        children: (e) =>
            (0, i.jsxs)(l.P3F, {
                ...e,
                className: s.container,
                onClick: a,
                children: [
                    (0, i.jsx)(l.qJs, {
                        size: 'md',
                        color: 'currentColor',
                        className: s.icon
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
