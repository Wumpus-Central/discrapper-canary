n.d(t, { default: () => f });
var i = n(200651),
    l = n(192379),
    a = n(481060),
    s = n(332664),
    c = n(142497),
    o = n(626135),
    r = n(672655),
    d = n(768015),
    u = n(701488),
    m = n(981631),
    _ = n(190378),
    p = n(388032);
let x = [u.K8.OTHER, u.K8.ADS, u.K8.NOT_FUN];
function f(e) {
    var t;
    let { channel: f, activityApplication: h, onClose: g, transitionState: v, analyticsData: j } = e;
    l.useEffect(() => {
        o.default.track(m.rMx.OPEN_MODAL, {
            type: 'Activity Feedback Modal',
            application_id: h.id,
            application_name: h.name,
            game_id: h.id,
            source: 'Activity End'
        });
    }, [h]);
    let N = (null === (t = h.embeddedActivityConfig) || void 0 === t ? void 0 : t.displays_advertisements) === !0;
    return (0, i.jsx)(s.Z, {
        modalType: 'activity',
        header: p.intl.formatToPlainString(p.t.QXYwoK, { applicationName: h.name }),
        body: p.intl.string(p.t['9hk2KC']),
        problemTitle: p.intl.string(p.t.g1q5fn),
        problems: (0, r.Z)(!0, N),
        feedbackProblems: x,
        onSubmit: function (e) {
            let { rating: t, problem: l, dontShowAgain: s, feedback: r } = e;
            s &&
                (function (e) {
                    let { applicationId: t, rating: n } = e;
                    o.default.track(m.rMx.ACTIVITY_REPORT_DONT_SHOW, {
                        application_id: t,
                        rating: n
                    }),
                        (0, c.Kw)(_.v.POST_ACTIVITY_FEEDBACK);
                })({
                    rating: t,
                    applicationId: h.id
                }),
                null != t &&
                    ((0, d.Z)({
                        problem: l,
                        channel: f,
                        feedback: r,
                        activityApplication: h,
                        analyticsData: j,
                        location: 'Activity End',
                        rating: t
                    }),
                    null != l &&
                        (0, a.ZDy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    body: p.intl.string(p.t['zuHR+/']),
                                    ...t
                                });
                        }));
        },
        onClose: g,
        transitionState: v,
        otherKey: u.K8.OTHER
    });
}
