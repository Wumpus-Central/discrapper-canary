n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651),
    r = n(481060),
    l = n(575016),
    a = n(415327);
function o(e) {
    let { reminder: t, throttledNow: n } = e,
        { dueInText: o, isOverdue: s } = (0, l.AT)({
            dueAt: null == t ? void 0 : t.saveData.dueAt,
            now: n,
            type: l.hQ.SHORT
        });
    if (null == t.saveData.dueAt) return null;
    let c = s ? 'text-danger' : 'text-normal';
    return (0, i.jsxs)('div', {
        className: a.container,
        children: [
            (0, i.jsx)('div', {
                className: a.icon,
                children: (0, i.jsx)(r.ClockIcon, {
                    size: 'xxs',
                    color: 'text-danger' === c ? r.tokens.colors.TEXT_DANGER : r.tokens.colors.INTERACTIVE_ACTIVE
                })
            }),
            (0, i.jsx)(r.Heading, {
                variant: 'text-md/semibold',
                color: c,
                children: o
            })
        ]
    });
}
