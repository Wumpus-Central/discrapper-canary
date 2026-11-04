n.d(e, { default: () => g });
var l,
    o = n(477900),
    r = n(582128),
    a = n(192308),
    i = n(930932),
    d = n(612479),
    u = n(129230),
    s = n(792996),
    p =
        (((l = {}).COULD_NOT_FIND = "I couldn't find what I was looking for"),
        (l.CONFUSING_LANGUAGE = "I found the language confusing"),
        (l.OTHER = "Other"),
        l),
    c = n(652215),
    f = n(670455);
let _ = [p.OTHER];
function g(t) {
    let { reportId: e, reportType: l, ...g } = t;
    return (
        r.useEffect(() => {
            u.default.track(c.HAw.IAR_FEEDBACK_MODAL_VIEWED, { report_id: e, report_type: l });
        }, [e, l]),
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
            onSubmit: function (t) {
                let { rating: r, problem: d, dontShowAgain: p, feedback: _ } = t;
                (p && (0, i.n3)({ feedbackType: f.MW.IN_APP_REPORTS, location: "InAppReportsFeedbackModal" }),
                    (function (t) {
                        let {
                            problem: e,
                            feedback: n,
                            reportType: l,
                            reportId: o = null,
                            rating: r = null,
                            dontShowAgain: a,
                        } = t;
                        u.default.track(c.HAw.IAR_FEEDBACK_SUBMITTED, {
                            reason: e,
                            report_type: l,
                            report_id: o,
                            rating: r,
                            feedback: n,
                            dont_show_again: a,
                        });
                    })({
                        rating: r,
                        problem: d?.value ?? null,
                        feedback: _,
                        reportId: e,
                        reportType: l,
                        dontShowAgain: p,
                    }),
                    null != r &&
                        null != d &&
                        (0, a.mM)(async () => {
                            let { default: t } = await n.e(137836).then(n.bind(n, 845671));
                            return (e) => (0, o.jsx)(t, { body: s.intl.string(s.t["d9+vQ8"]), ...e });
                        }));
            },
            otherKey: p.OTHER,
            ...g,
        })
    );
}
