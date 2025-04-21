n.d(t, { default: () => x });
var i = n(200651),
    l = n(192379),
    a = n(481060),
    o = n(332664),
    c = n(142497),
    s = n(626135),
    r = n(672655),
    d = n(768015),
    u = n(701488),
    m = n(981631),
    _ = n(190378),
    p = n(388032);
let b = [u.K8.OTHER, u.K8.ADS, u.K8.NOT_FUN];
function x(e) {
    var t;
    let { channel: x, embeddedActivityLocation: f, activityApplication: h, onClose: v, transitionState: g, analyticsData: j } = e;
    l.useEffect(() => {
        s.default.track(m.rMx.OPEN_MODAL, {
            type: 'Activity Feedback Modal',
            application_id: h.id,
            application_name: h.name,
            game_id: h.id,
            source: 'Activity End'
        });
    }, [h]);
    let O = (null == (t = h.embeddedActivityConfig) ? void 0 : t.displays_advertisements) === !0;
    return (0, i.jsx)(o.Z, {
        modalType: 'activity',
        header: p.intl.formatToPlainString(p.t.QXYwoK, { applicationName: h.name }),
        body: p.intl.string(p.t['9hk2KC']),
        problemTitle: p.intl.string(p.t.g1q5fn),
        problems: (0, r.Z)(!0, O),
        freeformNeededProblems: b,
        onSubmit: function (e) {
            var t;
            let { rating: l, problem: o, dontShowAgain: r, feedback: u } = e;
            r &&
                (function (e) {
                    let { applicationId: t, rating: n } = e;
                    s.default.track(m.rMx.ACTIVITY_REPORT_DONT_SHOW, {
                        application_id: t,
                        rating: n
                    }),
                        (0, c.Kw)(_.v.POST_ACTIVITY_FEEDBACK);
                })({
                    rating: l,
                    applicationId: h.id
                }),
                null != l &&
                    ((0, d.Z)({
                        problem: null != (t = null == o ? void 0 : o.value) ? t : null,
                        channel: x,
                        embeddedActivityLocation: f,
                        feedback: u,
                        activityApplication: h,
                        analyticsData: j,
                        location: 'Activity End',
                        rating: l
                    }),
                    null != o &&
                        (0, a.ZDy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, i.jsx)(
                                    e,
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                i = Object.keys(n);
                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                (i = i.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                i.forEach(function (t) {
                                                    var i;
                                                    (i = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: i,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = i);
                                                });
                                        }
                                        return e;
                                    })({ body: p.intl.string(p.t['zuHR+/']) }, t)
                                );
                        }));
        },
        onClose: v,
        transitionState: g,
        otherKey: u.K8.OTHER
    });
}
