n.d(t, { default: () => f });
var i = n(255367),
    a = n(73800),
    o = n(481060),
    l = n(957115),
    c = n(332664),
    r = n(626135),
    _ = n(672655),
    d = n(768015),
    s = n(701488),
    u = n(981631),
    b = n(531578),
    m = n(388032);
let p = [s.K8.OTHER, s.K8.ADS, s.K8.NOT_FUN];
function f(e) {
    var t;
    let { channel: f, embeddedActivityLocation: g, activityApplication: v, onClose: y, transitionState: h, analyticsData: O } = e;
    a.useEffect(() => {
        r.default.track(u.rMx.OPEN_MODAL, {
            type: 'Activity Feedback Modal',
            application_id: v.id,
            application_name: v.name,
            game_id: v.id,
            source: 'Activity End'
        });
    }, [v]);
    let T = (null == (t = v.embeddedActivityConfig) ? void 0 : t.displays_advertisements) === !0;
    return (0, i.jsx)(c.Z, {
        modalType: 'activity',
        header: m.intl.formatToPlainString(m.t.QXYwoK, { applicationName: v.name }),
        body: m.intl.string(m.t['9hk2KC']),
        problemTitle: m.intl.string(m.t.g1q5fn),
        problems: (0, _.Z)(!0, T),
        freeformNeededProblems: p,
        onSubmit: function (e) {
            var t;
            let { rating: a, problem: c, dontShowAgain: _, feedback: s } = e;
            (_ &&
                (r.default.track(u.rMx.ACTIVITY_REPORT_DONT_SHOW, {
                    application_id: v.id,
                    rating: a
                }),
                (0, l.Uv)({
                    feedbackType: b.nw.ACTIVITY,
                    location: 'ActivityFeedback'
                })),
                null != a &&
                    ((0, d.Z)({
                        problem: null != (t = null == c ? void 0 : c.value) ? t : null,
                        channel: f,
                        embeddedActivityLocation: g,
                        feedback: s,
                        activityApplication: v,
                        analyticsData: O,
                        location: 'Activity End',
                        rating: a
                    }),
                    null != c &&
                        (0, o.ZDy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, i.jsx)(
                                    e,
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                i = Object.keys(n);
                                            ('function' == typeof Object.getOwnPropertySymbols &&
                                                (i = i.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                i.forEach(function (t) {
                                                    var i;
                                                    ((i = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: i,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = i));
                                                }));
                                        }
                                        return e;
                                    })({ body: m.intl.string(m.t['zuHR+/']) }, t)
                                );
                        })));
        },
        onClose: y,
        transitionState: h,
        otherKey: s.K8.OTHER
    });
}
