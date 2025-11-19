n.d(t, { Z: () => s });
var r = n(54381),
    i = n(481060),
    a = n(575016),
    o = n(557144);
function s(e) {
    let { reminder: t, throttledNow: n } = e,
        { dueInText: s, isOverdue: l } = (0, a.AT)({
            dueAt: null == t ? void 0 : t.saveData.dueAt,
            now: n,
            type: a.hQ.SHORT,
        });
    if (null == t.saveData.dueAt) return null;
    let c = l ? "text-danger" : "text-default";
    return (0, r.jsxs)("div", {
        className: o.container,
        children: [
            (0, r.jsx)("div", {
                className: o.icon,
                children: (0, r.jsx)(i.T39, {
                    size: "xxs",
                    color: "text-danger" === c ? i.TVs.colors.TEXT_DANGER : i.TVs.colors.INTERACTIVE_ACTIVE,
                }),
            }),
            (0, r.jsx)(i.Heading, {
                variant: "text-md/semibold",
                color: c,
                children: s,
            }),
        ],
    });
}
