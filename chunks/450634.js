n.d(t, { default: () => p });
var a = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(332664),
    r = n(142497),
    c = n(626135),
    s = n(672655),
    d = n(768015),
    u = n(701488),
    m = n(981631),
    b = n(190378),
    _ = n(388032);
let f = [u.K8.OTHER, u.K8.ADS, u.K8.NOT_FUN];
function p(e) {
    var t;
    let { channel: p, embeddedActivityLocation: x, activityApplication: h, onClose: v, transitionState: N, analyticsData: g } = e;
    i.useEffect(() => {
        c.default.track(m.rMx.OPEN_MODAL, {
            type: 'Activity Feedback Modal',
            application_id: h.id,
            application_name: h.name,
            game_id: h.id,
            source: 'Activity End'
        });
    }, [h]);
    let j = (null === (t = h.embeddedActivityConfig) || void 0 === t ? void 0 : t.displays_advertisements) === !0;
    return (0, a.jsx)(o.Z, {
        modalType: 'activity',
        header: _.NW.formatToPlainString(_.t.QXYwoK, { applicationName: h.name }),
        body: _.NW.string(_.t['9hk2KC']),
        problemTitle: _.NW.string(_.t.g1q5fn),
        problems: (0, s.Z)(!0, j),
        freeformNeededProblems: f,
        onSubmit: function (e) {
            let { rating: t, problem: i, dontShowAgain: o, feedback: s } = e;
            o &&
                (function (e) {
                    let { applicationId: t, rating: n } = e;
                    c.default.track(m.rMx.ACTIVITY_REPORT_DONT_SHOW, {
                        application_id: t,
                        rating: n
                    }),
                        (0, r.Kw)(b.v.POST_ACTIVITY_FEEDBACK);
                })({
                    rating: t,
                    applicationId: h.id
                }),
                null != t &&
                    ((0, d.Z)({
                        problem: i,
                        channel: p,
                        embeddedActivityLocation: x,
                        feedback: s,
                        activityApplication: h,
                        analyticsData: g,
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
        onClose: v,
        transitionState: N,
        otherKey: u.K8.OTHER
    });
}
