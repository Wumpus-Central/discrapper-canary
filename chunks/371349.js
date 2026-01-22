n.d(t, { A: () => o });
var r = n(627968),
    i = n(397927),
    a = n(704456),
    s = n(252645);
function o(e) {
    let { reminder: t, throttledNow: n } = e,
        { dueInText: o, isOverdue: l } = (0, a.Ce)({
            dueAt: null == t ? void 0 : t.saveData.dueAt,
            now: n,
            type: a.kh.SHORT,
        });
    if (null == t.saveData.dueAt) return null;
    let c = l ? "text-feedback-critical" : "text-default";
    return (0, r.jsxs)("div", {
        className: s.k,
        children: [
            (0, r.jsx)("div", {
                className: s.K,
                children: (0, r.jsx)(i.O4, {
                    size: "xxs",
                    color:
                        "text-feedback-critical" === c
                            ? i.LU0.colors.TEXT_FEEDBACK_CRITICAL
                            : i.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
                }),
            }),
            (0, r.jsx)(i.Heading, {
                variant: "text-md/semibold",
                color: c,
                children: o,
            }),
        ],
    });
}
