n.d(t, { default: () => h });
var a = n(200651),
    l = n(192379),
    s = n(481060),
    o = n(332664),
    c = n(142497),
    i = n(626135),
    r = n(798733),
    d = n(559187),
    u = n(981631),
    _ = n(190378),
    x = n(388032);
let m = [r.f.OTHER];
function h(e) {
    let { reportId: t, reportType: h, ...f } = e;
    return (
        l.useEffect(() => {
            i.default.track(u.rMx.IAR_FEEDBACK_MODAL_VIEWED, {
                report_id: t,
                report_type: h
            });
        }, [t, h]),
        (0, a.jsx)(o.Z, {
            modalType: 'in_app_report',
            header: x.NW.string(x.t.MP5lDg),
            body: x.NW.string(x.t['7Ct0Dg']),
            problemTitle: x.NW.string(x.t.FJmoxM),
            problems: (0, r.Z)(),
            freeformNeededProblems: m,
            onSubmit: function (e) {
                let { rating: l, problem: o, dontShowAgain: i, feedback: r } = e;
                i && (0, c.Kw)(_.v.IN_APP_REPORTS_FEEDBACK),
                    (0, d.Z)({
                        rating: l,
                        problem: o,
                        feedback: r,
                        reportId: t,
                        reportType: h,
                        dontShowAgain: i
                    }),
                    null != l &&
                        null != o &&
                        (0, s.ZDy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, a.jsx)(e, {
                                    body: x.NW.string(x.t['d9+vQ0']),
                                    ...t
                                });
                        });
            },
            otherKey: r.f.OTHER,
            ...f
        })
    );
}
