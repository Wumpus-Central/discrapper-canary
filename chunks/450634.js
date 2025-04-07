n.d(t, { default: () => x });
var a = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(332664),
    s = n(142497),
    c = n(626135),
    r = n(672655),
    d = n(768015),
    u = n(701488),
    _ = n(981631),
    m = n(190378),
    p = n(388032);
let b = [u.K8.OTHER, u.K8.ADS, u.K8.NOT_FUN];
function x(e) {
    var t;
    let { channel: x, embeddedActivityLocation: f, activityApplication: h, onClose: v, transitionState: N, analyticsData: g } = e;
    i.useEffect(() => {
        c.default.track(_.rMx.OPEN_MODAL, {
            type: 'Activity Feedback Modal',
            application_id: h.id,
            application_name: h.name,
            game_id: h.id,
            source: 'Activity End'
        });
    }, [h]);
    let j = (null == (t = h.embeddedActivityConfig) ? void 0 : t.displays_advertisements) === !0;
    return (0, a.jsx)(o.Z, {
        modalType: 'activity',
        header: p.NW.formatToPlainString(p.t.QXYwoK, { applicationName: h.name }),
        body: p.NW.string(p.t['9hk2KC']),
        problemTitle: p.NW.string(p.t.g1q5fn),
        problems: (0, r.Z)(!0, j),
        freeformNeededProblems: b,
        onSubmit: function (e) {
            var t;
            let { rating: i, problem: o, dontShowAgain: r, feedback: u } = e;
            r &&
                (function (e) {
                    let { applicationId: t, rating: n } = e;
                    c.default.track(_.rMx.ACTIVITY_REPORT_DONT_SHOW, {
                        application_id: t,
                        rating: n
                    }),
                        (0, s.Kw)(m.v.POST_ACTIVITY_FEEDBACK);
                })({
                    rating: i,
                    applicationId: h.id
                }),
                null != i &&
                    ((0, d.Z)({
                        problem: null != (t = null == o ? void 0 : o.value) ? t : null,
                        channel: x,
                        embeddedActivityLocation: f,
                        feedback: u,
                        activityApplication: h,
                        analyticsData: g,
                        location: 'Activity End',
                        rating: i
                    }),
                    null != o &&
                        (0, l.ZDy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, a.jsx)(
                                    e,
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                a = Object.keys(n);
                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                (a = a.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                a.forEach(function (t) {
                                                    var a;
                                                    (a = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: a,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = a);
                                                });
                                        }
                                        return e;
                                    })({ body: p.NW.string(p.t['zuHR+/']) }, t)
                                );
                        }));
        },
        onClose: v,
        transitionState: N,
        otherKey: u.K8.OTHER
    });
}
