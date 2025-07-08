n.d(t, { Z: () => i });
var r = n(255367),
    l = n(481060),
    s = n(575016),
    a = n(294117);
function i(e) {
    let { reminder: t, throttledNow: n } = e,
        { dueInText: i, isOverdue: o } = (0, s.AT)({
            dueAt: null == t ? void 0 : t.saveData.dueAt,
            now: n,
            type: s.hQ.SHORT
        });
    if (null == t.saveData.dueAt) return null;
    let c = o ? 'text-danger' : 'text-default';
    return (0, r.jsxs)('div', {
        className: a.container,
        children: [
            (0, r.jsx)('div', {
                className: a.icon,
                children: (0, r.jsx)(l.T39, {
                    size: 'xxs',
                    color: 'text-danger' === c ? l.TVs.colors.TEXT_DANGER : l.TVs.colors.INTERACTIVE_ACTIVE
                })
            }),
            (0, r.jsx)(l.X6q, {
                variant: 'text-md/semibold',
                color: c,
                children: i
            })
        ]
    });
}
