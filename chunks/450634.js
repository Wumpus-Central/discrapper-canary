n.r(t),
    n.d(t, {
        default: function () {
            return h;
        }
    });
var i = n(200651),
    l = n(192379),
    a = n(481060),
    o = n(332664),
    r = n(142497),
    s = n(626135),
    c = n(672655),
    d = n(768015),
    u = n(701488),
    m = n(981631),
    b = n(190378),
    f = n(388032);
let p = [u.K8.OTHER, u.K8.ADS, u.K8.NOT_FUN];
function h(e) {
    var t;
    let { channel: h, activityApplication: x, onClose: g, transitionState: _, analyticsData: v } = e;
    l.useEffect(() => {
        s.default.track(m.rMx.OPEN_MODAL, {
            type: 'Activity Feedback Modal',
            application_id: x.id,
            application_name: x.name,
            game_id: x.id,
            source: 'Activity End'
        });
    }, [x]);
    let j = (null === (t = x.embeddedActivityConfig) || void 0 === t ? void 0 : t.displays_advertisements) === !0;
    return (0, i.jsx)(o.Z, {
        modalType: 'activity',
        header: f.intl.formatToPlainString(f.t.QXYwoK, { applicationName: x.name }),
        body: f.intl.string(f.t['9hk2KC']),
        problemTitle: f.intl.string(f.t.g1q5fn),
        problems: (0, c.Z)(!0, j),
        feedbackProblems: p,
        onSubmit: function (e) {
            let { rating: t, problem: l, dontShowAgain: o, feedback: c } = e;
            if (
                (o &&
                    !(function (e) {
                        let { applicationId: t, rating: n } = e;
                        s.default.track(m.rMx.ACTIVITY_REPORT_DONT_SHOW, {
                            application_id: t,
                            rating: n
                        }),
                            (0, r.Kw)(b.v.POST_ACTIVITY_FEEDBACK);
                    })({
                        rating: t,
                        applicationId: x.id
                    }),
                null != t)
            )
                (0, d.Z)({
                    problem: l,
                    channel: h,
                    feedback: c,
                    activityApplication: x,
                    analyticsData: v,
                    location: 'Activity End',
                    rating: t
                }),
                    null != l &&
                        (0, a.openModalLazy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    body: f.intl.string(f.t['zuHR+/']),
                                    ...t
                                });
                        });
        },
        onClose: g,
        transitionState: _,
        otherKey: u.K8.OTHER
    });
}
