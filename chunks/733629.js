n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(232203);
function s(e) {
    let { title: t, settings: n } = e;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(r.Heading, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                className: l.header,
                children: t
            }),
            n.map((e) => e.renderComponent())
        ]
    });
}
