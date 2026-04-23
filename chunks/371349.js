t.d(s, { A: () => d });
var a = t(627968),
    n = t(406810),
    l = t(827734),
    i = t(534514),
    r = t(704456),
    c = t(953424);
function d(e) {
    let { reminder: s, throttledNow: t } = e,
        { dueInText: d, isOverdue: o } = (0, r.Ce)({ dueAt: s?.saveData.dueAt, now: t, type: r.kh.SHORT });
    if (null == s.saveData.dueAt) return null;
    let u = o ? "text-feedback-critical" : "text-default";
    return (0, a.jsxs)("div", {
        className: c.k,
        children: [
            (0, a.jsx)("div", {
                className: c.K,
                children: (0, a.jsx)(n.O, {
                    size: "xxs",
                    color:
                        "text-feedback-critical" === u
                            ? l.A.colors.TEXT_FEEDBACK_CRITICAL
                            : l.A.colors.INTERACTIVE_TEXT_ACTIVE,
                }),
            }),
            (0, a.jsx)(i.D, { variant: "text-md/semibold", color: u, children: d }),
        ],
    });
}
