n.d(t, { default: () => f });
var l = n(200651),
    a = n(192379),
    r = n(481060),
    i = n(144535),
    s = n(332664),
    c = n(142497),
    o = n(626135),
    d = n(798733),
    u = n(559187),
    m = n(981631),
    _ = n(190378),
    x = n(388032);
function f(e) {
    let { reportId: t, reportType: f, ...h } = e;
    a.useEffect(() => {
        o.default.track(m.rMx.IAR_FEEDBACK_MODAL_VIEWED, {
            report_id: t,
            report_type: f
        });
    }, [t, f]);
    let p = (0, i.I)('CALL_FEEDBACK_OPTION_OTHER');
    return (0, l.jsx)(s.Z, {
        modalType: 'in_app_report',
        header: x.intl.string(x.t.MP5lDg),
        body: x.intl.string(x.t['7Ct0Dg']),
        problemTitle: x.intl.string(x.t.FJmoxM),
        problems: (0, d.Z)(),
        feedbackProblems: [p],
        onSubmit: function (e) {
            let { rating: a, problem: i, dontShowAgain: s, feedback: o } = e;
            s && (0, c.Kw)(_.v.IN_APP_REPORTS_FEEDBACK),
                (0, u.Z)({
                    rating: a,
                    problem: i,
                    feedback: o,
                    reportId: t,
                    reportType: f,
                    dontShowAgain: s
                }),
                null != a &&
                    null != i &&
                    (0, r.ZDy)(async () => {
                        let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                        return (t) =>
                            (0, l.jsx)(e, {
                                body: x.intl.string(x.t['d9+vQ0']),
                                ...t
                            });
                    });
        },
        otherKey: p,
        ...h
    });
}
