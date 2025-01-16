n.r(t),
    n.d(t, {
        default: function () {
            return h;
        }
    });
var l = n(200651),
    a = n(192379),
    o = n(481060),
    r = n(144535),
    i = n(332664),
    s = n(142497),
    c = n(626135),
    u = n(798733),
    d = n(559187),
    b = n(981631),
    f = n(190378),
    m = n(388032);
function h(e) {
    let { reportId: t, reportType: h, ...x } = e;
    a.useEffect(() => {
        c.default.track(b.rMx.IAR_FEEDBACK_MODAL_VIEWED, {
            report_id: t,
            report_type: h
        });
    }, [t, h]);
    let g = (0, r.I)('CALL_FEEDBACK_OPTION_OTHER');
    return (0, l.jsx)(i.Z, {
        modalType: 'in_app_report',
        header: m.intl.string(m.t.MP5lDg),
        body: m.intl.string(m.t['7Ct0Dg']),
        problemTitle: m.intl.string(m.t.FJmoxM),
        problems: (0, u.Z)(),
        feedbackProblems: [g],
        onSubmit: function (e) {
            let { rating: a, problem: r, dontShowAgain: i, feedback: c } = e;
            if (
                (i && (0, s.Kw)(f.v.IN_APP_REPORTS_FEEDBACK),
                (0, d.Z)({
                    rating: a,
                    problem: r,
                    feedback: c,
                    reportId: t,
                    reportType: h,
                    dontShowAgain: i
                }),
                null != a && null != r)
            )
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                    return (t) =>
                        (0, l.jsx)(e, {
                            body: m.intl.string(m.t['d9+vQ0']),
                            ...t
                        });
                });
        },
        otherKey: g,
        ...x
    });
}
