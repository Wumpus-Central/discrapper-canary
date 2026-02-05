r.d(t, { A: () => i });
var s = r(627968),
    n = r(397927),
    l = r(704456),
    a = r(252645);
function i(e) {
    let { reminder: t, throttledNow: r } = e,
        { dueInText: i, isOverdue: o } = (0, l.Ce)({ dueAt: t?.saveData.dueAt, now: r, type: l.kh.SHORT });
    if (null == t.saveData.dueAt) return null;
    let u = o ? "text-feedback-critical" : "text-default";
    return (0, s.jsxs)("div", {
        className: a.k,
        children: [
            (0, s.jsx)("div", {
                className: a.K,
                children: (0, s.jsx)(n.O4, {
                    size: "xxs",
                    color:
                        "text-feedback-critical" === u
                            ? n.LU0.colors.TEXT_FEEDBACK_CRITICAL
                            : n.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
                }),
            }),
            (0, s.jsx)(n.Heading, { variant: "text-md/semibold", color: u, children: i }),
        ],
    });
}
