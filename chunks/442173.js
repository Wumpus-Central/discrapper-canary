n.r(t),
    n.d(t, {
        default: function () {
            return h;
        }
    });
var l = n(200651),
    r = n(192379),
    a = n(481060),
    o = n(144535),
    i = n(332664),
    s = n(142497),
    c = n(626135),
    u = n(798733),
    d = n(559187),
    b = n(981631),
    m = n(190378),
    f = n(388032);
function h(e) {
    let { reportId: t, reportType: h, ...x } = e;
    r.useEffect(() => {
        c.default.track(b.rMx.IAR_FEEDBACK_MODAL_VIEWED, {
            report_id: t,
            report_type: h
        });
    }, [t, h]);
    let g = (0, o.I)('CALL_FEEDBACK_OPTION_OTHER');
    return (0, l.jsx)(i.Z, {
        modalType: 'in_app_report',
        header: f.intl.string(f.t.MP5lDg),
        body: f.intl.string(f.t['7Ct0Dg']),
        problemTitle: f.intl.string(f.t.FJmoxM),
        problems: (0, u.Z)(),
        feedbackProblems: [g],
        onSubmit: function (e) {
            let { rating: r, problem: o, dontShowAgain: i, feedback: c } = e;
            if (
                (i && (0, s.Kw)(m.v.IN_APP_REPORTS_FEEDBACK),
                (0, d.Z)({
                    rating: r,
                    problem: o,
                    feedback: c,
                    reportId: t,
                    reportType: h,
                    dontShowAgain: i
                }),
                null != r && null != o)
            )
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                    return (t) =>
                        (0, l.jsx)(e, {
                            body: f.intl.string(f.t['d9+vQ0']),
                            ...t
                        });
                });
        },
        otherKey: g,
        ...x
    });
}
