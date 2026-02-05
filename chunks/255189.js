_.d(t, { default: () => m });
var o = _(627968),
    n = _(64700),
    r = _(397927),
    c = _(930932),
    a = _(612479),
    l = _(954571),
    i = _(773822),
    d = _(507887),
    b = _(652215),
    u = _(670455),
    s = _(985018);
let p = [i.G.OTHER];
function m(e) {
    let { reportId: t, reportType: m, ...f } = e;
    return (
        n.useEffect(() => {
            l.default.track(b.HAw.IAR_FEEDBACK_MODAL_VIEWED, { report_id: t, report_type: m });
        }, [t, m]),
        (0, o.jsx)(a.A, {
            modalType: "in_app_report",
            header: s.intl.string(s.t.MP5lDj),
            body: s.intl.string(s.t["7Ct0Dj"]),
            problemTitle: s.intl.string(s.t.FJmoxF),
            problems: (0, i.A)(),
            freeformNeededProblems: p,
            onSubmit: function (e) {
                let { rating: n, problem: a, dontShowAgain: l, feedback: i } = e;
                l && (0, c.n3)({ feedbackType: u.MW.IN_APP_REPORTS, location: "InAppReportsFeedbackModal" }),
                    (0, d.A)({
                        rating: n,
                        problem: a?.value ?? null,
                        feedback: i,
                        reportId: t,
                        reportType: m,
                        dontShowAgain: l,
                    }),
                    null != n &&
                        null != a &&
                        (0, r.mMO)(async () => {
                            let { default: e } = await _.e("37836").then(_.bind(_, 845671));
                            return (t) => (0, o.jsx)(e, { body: s.intl.string(s.t["d9+vQ8"]), ...t });
                        });
            },
            otherKey: i.G.OTHER,
            ...f,
        })
    );
}
