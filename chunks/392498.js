n.r(s), n.d(s, { default: () => _ });
var i = n(627968),
    t = n(64700),
    a = n(397927),
    c = n(429913),
    d = n(486020),
    l = n(341915),
    r = n(792620),
    u = n(646764),
    o = n(253393);
function _(e) {
    let { quest: s } = e,
        n = (0, c.h)((0, r.TP)(s)),
        _ = t.useMemo(
            () => (null == n ? null : d.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, size: 105 })),
            [n],
        );
    return (0, i.jsxs)("div", {
        className: o.CP,
        children: [
            null != _ &&
                (0, i.jsx)("div", {
                    className: o.es,
                    children: (0, i.jsx)(a._V3, { src: _, width: 105, height: 105, className: o.Qf }),
                }),
            (0, i.jsx)("div", {
                className: o.tE,
                children: (0, i.jsx)(u.A, {
                    quest: s,
                    questContent: l.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
                    sourceQuestContent: l.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
                    className: o.Qf,
                }),
            }),
        ],
    });
}
