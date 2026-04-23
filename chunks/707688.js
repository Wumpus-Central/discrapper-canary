r.d(t, { default: () => g });
var o,
    a = r(627968),
    n = r(64700),
    l = r(192308),
    i = r(930932),
    d = r(612479),
    u = r(954571),
    s = r(985018),
    c =
        (((o = {}).COULD_NOT_FIND = "I couldn't find what I was looking for"),
        (o.CONFUSING_LANGUAGE = "I found the language confusing"),
        (o.OTHER = "Other"),
        o),
    _ = r(652215),
    b = r(670455);
let p = [c.OTHER];
function g(e) {
    let { reportId: t, reportType: o, ...g } = e;
    return (
        n.useEffect(() => {
            u.default.track(_.HAw.IAR_FEEDBACK_MODAL_VIEWED, { report_id: t, report_type: o });
        }, [t, o]),
        (0, a.jsx)(d.A, {
            modalType: "in_app_report",
            header: s.intl.string(s.t.MP5lDj),
            body: s.intl.string(s.t["7Ct0Dj"]),
            problemTitle: s.intl.string(s.t.FJmoxF),
            problems: [
                { label: s.intl.string(s.t.cigGCe), code: 2, value: "I couldn't find what I was looking for" },
                { label: s.intl.string(s.t.ZyXA0q), code: 3, value: "I found the language confusing" },
                { label: s.intl.string(s.t.emlT91), code: 1, value: "Other" },
            ],
            freeformNeededProblems: p,
            onSubmit: function (e) {
                let { rating: n, problem: d, dontShowAgain: c, feedback: p } = e;
                c && (0, i.n3)({ feedbackType: b.MW.IN_APP_REPORTS, location: "InAppReportsFeedbackModal" }),
                    (function (e) {
                        let {
                            problem: t,
                            feedback: r,
                            reportType: o,
                            reportId: a = null,
                            rating: n = null,
                            dontShowAgain: l,
                        } = e;
                        u.default.track(_.HAw.IAR_FEEDBACK_SUBMITTED, {
                            reason: t,
                            report_type: o,
                            report_id: a,
                            rating: n,
                            feedback: r,
                            dont_show_again: l,
                        });
                    })({
                        rating: n,
                        problem: d?.value ?? null,
                        feedback: p,
                        reportId: t,
                        reportType: o,
                        dontShowAgain: c,
                    }),
                    null != n &&
                        null != d &&
                        (0, l.openModalLazy)(async () => {
                            let { default: e } = await r.e("37836").then(r.bind(r, 845671));
                            return (t) => (0, a.jsx)(e, { body: s.intl.string(s.t["d9+vQ8"]), ...t });
                        });
            },
            otherKey: c.OTHER,
            ...g,
        })
    );
}
