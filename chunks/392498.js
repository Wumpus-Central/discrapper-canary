i.r(e), i.d(e, { default: () => o });
var c = i(627968),
    t = i(64700),
    n = i(144165),
    a = i(429913),
    l = i(486020),
    u = i(507107),
    d = i(792620),
    h = i(646764),
    r = i(253393);
function o(s) {
    let { quest: e } = s,
        i = (0, a.h)((0, d.TP)(e)),
        o = t.useMemo(
            () => (null == i ? null : l.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, size: 105 })),
            [i],
        );
    return (0, c.jsxs)("div", {
        className: r.CP,
        children: [
            null != o &&
                (0, c.jsx)("div", {
                    className: r.es,
                    children: (0, c.jsx)(n._, { src: o, width: 105, height: 105, className: r.Qf }),
                }),
            (0, c.jsx)("div", {
                className: r.tE,
                children: (0, c.jsx)(h.A, {
                    quest: e,
                    questContent: u.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
                    sourceQuestContent: u.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
                    className: r.Qf,
                }),
            }),
        ],
    });
}
