i.r(e);
var c = i(477900),
    t = i(582128),
    n = i(251843),
    a = i(429913),
    l = i(486020),
    u = i(506988),
    d = i(792620),
    o = i(639701),
    r = i(221596),
    h = i(968393);
i.d(
    e,
    {},
    {
        default: function (s) {
            let { quest: e } = s,
                i = (0, a.h)((0, d.TP)(e)),
                _ = t.useMemo(
                    () => (null == i ? null : l.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, size: 105 })),
                    [i],
                );
            return (0, c.jsxs)("div", {
                className: h.CP,
                children: [
                    null != _ &&
                        (0, c.jsx)("div", {
                            className: h.es,
                            children: (0, c.jsx)(n._, { src: _, width: 105, height: 105, className: h.Qf }),
                        }),
                    (0, c.jsx)("div", {
                        className: h.tE,
                        children: (0, c.jsx)(o.A, {
                            quest: e,
                            location: r.rE.QUEST_ACTIVITY_UNENROLLED_MODAL,
                            questContent: u.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
                            sourceQuestContent: u.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
                            className: h.Qf,
                        }),
                    }),
                ],
            });
        },
    },
);
