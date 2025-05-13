n.d(t, { default: () => f });
var i = n(255367),
    l = n(73800),
    a = n(481060),
    r = n(957115),
    o = n(332664),
    c = n(626135),
    s = n(672655),
    u = n(768015),
    d = n(701488),
    m = n(981631),
    _ = n(531578),
    b = n(388032);
let p = [d.K8.OTHER, d.K8.ADS, d.K8.NOT_FUN];
function f(e) {
    var t;
    let { channel: f, embeddedActivityLocation: x, activityApplication: h, onClose: O, transitionState: v, analyticsData: g } = e;
    l.useEffect(() => {
        c.default.track(m.rMx.OPEN_MODAL, {
            type: 'Activity Feedback Modal',
            application_id: h.id,
            application_name: h.name,
            game_id: h.id,
            source: 'Activity End'
        });
    }, [h]);
    let j = (null == (t = h.embeddedActivityConfig) ? void 0 : t.displays_advertisements) === !0;
    return (0, i.jsx)(o.Z, {
        modalType: 'activity',
        header: b.intl.formatToPlainString(b.t.QXYwoK, { applicationName: h.name }),
        body: b.intl.string(b.t['9hk2KC']),
        problemTitle: b.intl.string(b.t.g1q5fn),
        problems: (0, s.Z)(!0, j),
        freeformNeededProblems: p,
        onSubmit: function (e) {
            var t;
            let { rating: l, problem: o, dontShowAgain: s, feedback: d } = e;
            s &&
                (c.default.track(m.rMx.ACTIVITY_REPORT_DONT_SHOW, {
                    application_id: h.id,
                    rating: l
                }),
                (0, r.U)({
                    feedbackType: _.nw.ACTIVITY,
                    location: 'ActivityFeedback'
                })),
                null != l &&
                    ((0, u.Z)({
                        problem: null != (t = null == o ? void 0 : o.value) ? t : null,
                        channel: f,
                        embeddedActivityLocation: x,
                        feedback: d,
                        activityApplication: h,
                        analyticsData: g,
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
                                    })({ body: b.intl.string(b.t['zuHR+/']) }, t)
                                );
                        }));
        },
        onClose: O,
        transitionState: v,
        otherKey: d.K8.OTHER
    });
}
