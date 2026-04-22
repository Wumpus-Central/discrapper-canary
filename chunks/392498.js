a.r(t), a.d(t, { default: () => m });
var l = a(627968),
    r = a(64700),
    s = a(673698),
    n = a(429913),
    i = a(486020),
    d = a(341915),
    u = a(792620),
    o = a(646764),
    c = a(253393);
function m(e) {
    let { quest: t } = e,
        a = (0, n.h)((0, u.TP)(t)),
        m = r.useMemo(
            () => (null == a ? null : i.Ay.getApplicationIconURL({ id: a.id, icon: a.icon, size: 105 })),
            [a],
        );
    return (0, l.jsxs)("div", {
        className: c.CP,
        children: [
            null != m &&
                (0, l.jsx)("div", {
                    className: c.es,
                    children: (0, l.jsx)(s._, { src: m, width: 105, height: 105, className: c.Qf }),
                }),
            (0, l.jsx)("div", {
                className: c.tE,
                children: (0, l.jsx)(o.A, {
                    quest: t,
                    questContent: d.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
                    sourceQuestContent: d.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
                    className: c.Qf,
                }),
            }),
        ],
    });
}
