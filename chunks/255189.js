r.d(t, { default: () => g });
var o = r(627968),
    l = r(64700),
    a = r(192308),
    n = r(930932),
    i = r(612479),
    d = r(954571),
    u = r(773822),
    s = r(507887),
    c = r(652215),
    _ = r(670455),
    b = r(985018);
let p = [u.G.OTHER];
function g(e) {
    let { reportId: t, reportType: g, ...f } = e;
    return (
        l.useEffect(() => {
            d.default.track(c.HAw.IAR_FEEDBACK_MODAL_VIEWED, { report_id: t, report_type: g });
        }, [t, g]),
        (0, o.jsx)(i.A, {
            modalType: "in_app_report",
            header: b.intl.string(b.t.MP5lDj),
            body: b.intl.string(b.t["7Ct0Dj"]),
            problemTitle: b.intl.string(b.t.FJmoxF),
            problems: (0, u.A)(),
            freeformNeededProblems: p,
            onSubmit: function (e) {
                let { rating: l, problem: i, dontShowAgain: d, feedback: u } = e;
                d && (0, n.n3)({ feedbackType: _.MW.IN_APP_REPORTS, location: "InAppReportsFeedbackModal" }),
                    (0, s.A)({
                        rating: l,
                        problem: i?.value ?? null,
                        feedback: u,
                        reportId: t,
                        reportType: g,
                        dontShowAgain: d,
                    }),
                    null != l &&
                        null != i &&
                        (0, a.openModalLazy)(async () => {
                            let { default: e } = await r.e("37836").then(r.bind(r, 845671));
                            return (t) => (0, o.jsx)(e, { body: b.intl.string(b.t["d9+vQ8"]), ...t });
                        });
            },
            otherKey: u.G.OTHER,
            ...f,
        })
    );
}
