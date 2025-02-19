n.d(t, { default: () => p });
var a = n(200651),
    i = n(192379),
    l = n(481060),
    r = n(332664),
    o = n(142497),
    c = n(626135),
    s = n(672655),
    u = n(768015),
    d = n(701488),
    m = n(981631),
    b = n(190378),
    _ = n(388032);
let f = [d.K8.OTHER, d.K8.ADS, d.K8.NOT_FUN];
function p(e) {
    var t;
    let { channel: p, activityApplication: x, onClose: h, transitionState: N, analyticsData: v } = e;
    i.useEffect(() => {
        c.default.track(m.rMx.OPEN_MODAL, {
            type: 'Activity Feedback Modal',
            application_id: x.id,
            application_name: x.name,
            game_id: x.id,
            source: 'Activity End'
        });
    }, [x]);
    let g = (null === (t = x.embeddedActivityConfig) || void 0 === t ? void 0 : t.displays_advertisements) === !0;
    return (0, a.jsx)(r.Z, {
        modalType: 'activity',
        header: _.NW.formatToPlainString(_.t.QXYwoK, { applicationName: x.name }),
        body: _.NW.string(_.t['9hk2KC']),
        problemTitle: _.NW.string(_.t.g1q5fn),
        problems: (0, s.Z)(!0, g),
        freeformNeededProblems: f,
        onSubmit: function (e) {
            let { rating: t, problem: i, dontShowAgain: r, feedback: s } = e;
            r &&
                (function (e) {
                    let { applicationId: t, rating: n } = e;
                    c.default.track(m.rMx.ACTIVITY_REPORT_DONT_SHOW, {
                        application_id: t,
                        rating: n
                    }),
                        (0, o.Kw)(b.v.POST_ACTIVITY_FEEDBACK);
                })({
                    rating: t,
                    applicationId: x.id
                }),
                null != t &&
                    ((0, u.Z)({
                        problem: i,
                        channel: p,
                        feedback: s,
                        activityApplication: x,
                        analyticsData: v,
                        location: 'Activity End',
                        rating: t
                    }),
                    null != i &&
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
                                    })({ body: _.NW.string(_.t['zuHR+/']) }, t)
                                );
                        }));
        },
        onClose: h,
        transitionState: N,
        otherKey: d.K8.OTHER
    });
}
