n.d(t, { Z: () => s });
var r = n(255367),
    i = n(481060),
    o = n(575016),
    a = n(793714);
function s(e) {
    let { reminder: t, throttledNow: n } = e,
        { dueInText: s, isOverdue: l } = (0, o.AT)({
            dueAt: null == t ? void 0 : t.saveData.dueAt,
            now: n,
            type: o.hQ.SHORT,
        });
    if (null == t.saveData.dueAt) return null;
    let c = l ? "text-danger" : "text-default";
    return (0, r.jsxs)("div", {
        className: a.container,
        children: [
            (0, r.jsx)("div", {
                className: a.icon,
                children: (0, r.jsx)(i.T39, {
                    size: "xxs",
                    color: "text-danger" === c ? i.TVs.colors.TEXT_DANGER : i.TVs.colors.INTERACTIVE_ACTIVE,
                }),
            }),
            (0, r.jsx)(i.X6q, {
                variant: "text-md/semibold",
                color: c,
                children: s,
            }),
        ],
    });
}
