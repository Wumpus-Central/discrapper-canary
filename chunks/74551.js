n.d(t, { Z: () => s });
var i = n(200651),
    l = n(481060),
    a = n(575016),
    r = n(415327);
function s(e) {
    let { reminder: t, throttledNow: n } = e,
        { dueInText: s, isOverdue: o } = (0, a.AT)({
            dueAt: null == t ? void 0 : t.saveData.dueAt,
            now: n,
            type: a.hQ.SHORT
        });
    if (null == t.saveData.dueAt) return null;
    let c = o ? 'text-danger' : 'text-normal';
    return (0, i.jsxs)('div', {
        className: r.container,
        children: [
            (0, i.jsx)('div', {
                className: r.icon,
                children: (0, i.jsx)(l.T39, {
                    size: 'xxs',
                    color: 'text-danger' === c ? l.TVs.colors.TEXT_DANGER : l.TVs.colors.INTERACTIVE_ACTIVE
                })
            }),
            (0, i.jsx)(l.X6q, {
                variant: 'text-md/semibold',
                color: c,
                children: s
            })
        ]
    });
}
