r.d(t, { Z: () => o });
var n = r(255367),
    s = r(481060),
    l = r(575016),
    a = r(294117);
function o(e) {
    let { reminder: t, throttledNow: r } = e,
        { dueInText: o, isOverdue: i } = (0, l.AT)({
            dueAt: null == t ? void 0 : t.saveData.dueAt,
            now: r,
            type: l.hQ.SHORT
        });
    if (null == t.saveData.dueAt) return null;
    let c = i ? 'text-danger' : 'text-default';
    return (0, n.jsxs)('div', {
        className: a.container,
        children: [
            (0, n.jsx)('div', {
                className: a.icon,
                children: (0, n.jsx)(s.T39, {
                    size: 'xxs',
                    color: 'text-danger' === c ? s.TVs.colors.TEXT_DANGER : s.TVs.colors.INTERACTIVE_ACTIVE
                })
            }),
            (0, n.jsx)(s.X6q, {
                variant: 'text-md/semibold',
                color: c,
                children: o
            })
        ]
    });
}
