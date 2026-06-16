n.d(t, { default: () => g });
var l,
    o = n(627968),
    a = n(64700),
    r = n(192308),
    i = n(930932),
    d = n(612479),
    u = n(174459),
    s = n(375708),
    p =
        (((l = {}).COULD_NOT_FIND = "I couldn't find what I was looking for"),
        (l.CONFUSING_LANGUAGE = "I found the language confusing"),
        (l.OTHER = "Other"),
        l),
    c = n(652215),
    f = n(670455);
let _ = [p.OTHER];
function g(e) {
    let { reportId: t, reportType: l, ...g } = e;
    return (
        a.useEffect(() => {
            u.default.track(c.HAw.IAR_FEEDBACK_MODAL_VIEWED, { report_id: t, report_type: l });
        }, [t, l]),
        (0, o.jsx)(d.A, {
            modalType: "in_app_report",
            header: s.intl.string(s.t.MP5lDj),
            body: s.intl.string(s.t["7Ct0Dj"]),
            problemTitle: s.intl.string(s.t.FJmoxF),
            problems: [
                { label: s.intl.string(s.t.cigGCe), code: 2, value: "I couldn't find what I was looking for" },
                { label: s.intl.string(s.t.ZyXA0q), code: 3, value: "I found the language confusing" },
                { label: s.intl.string(s.t.emlT91), code: 1, value: "Other" },
            ],
            freeformNeededProblems: _,
            onSubmit: function (e) {
                let { rating: a, problem: d, dontShowAgain: p, feedback: _ } = e;
                p && (0, i.n3)({ feedbackType: f.MW.IN_APP_REPORTS, location: "InAppReportsFeedbackModal" }),
                    (function (e) {
                        let {
                            problem: t,
                            feedback: n,
                            reportType: l,
                            reportId: o = null,
                            rating: a = null,
                            dontShowAgain: r,
                        } = e;
                        u.default.track(c.HAw.IAR_FEEDBACK_SUBMITTED, {
                            reason: t,
                            report_type: l,
                            report_id: o,
                            rating: a,
                            feedback: n,
                            dont_show_again: r,
                        });
                    })({
                        rating: a,
                        problem: d?.value ?? null,
                        feedback: _,
                        reportId: t,
                        reportType: l,
                        dontShowAgain: p,
                    }),
                    null != a &&
                        null != d &&
                        (0, r.openModalLazy)(async () => {
                            let { default: e } = await n.e("37836").then(n.bind(n, 845671));
                            return (t) => (0, o.jsx)(e, { body: s.intl.string(s.t["d9+vQ8"]), ...t });
                        });
            },
            otherKey: p.OTHER,
            ...g,
        })
    );
}
