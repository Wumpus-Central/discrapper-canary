t.d(n, {
    Z: function () {
        return o;
    }
});
var l = t(200651);
t(192379);
var i = t(481060),
    r = t(195367),
    a = t(388032),
    s = t(115672);
function o(e) {
    let { isSlideReady: n, ...t } = e;
    return (0, l.jsxs)('div', {
        className: s.__invalid_slideContainer,
        children: [
            (0, l.jsxs)('div', {
                className: s.header,
                children: [
                    (0, l.jsx)(i.Heading, {
                        variant: 'heading-xl/semibold',
                        children: a.intl.string(a.t.GG6vbm)
                    }),
                    (0, l.jsx)(i.Text, {
                        color: 'header-secondary',
                        className: s.text,
                        variant: 'text-sm/normal',
                        children: a.intl.string(a.t.q5lgwc)
                    })
                ]
            }),
            (0, l.jsx)(r.Z, {
                ...t,
                canSetFocus: n
            })
        ]
    });
}
