n.d(e, { default: () => f });
var i = n(255367),
    o = n(73800),
    a = n(481060),
    l = n(957115),
    c = n(332664),
    r = n(626135),
    _ = n(672655),
    d = n(768015),
    s = n(701488),
    u = n(981631),
    b = n(531578),
    p = n(388032);
let m = [s.K8.OTHER, s.K8.ADS, s.K8.NOT_FUN];
function f(t) {
    var e;
    let { channel: f, embeddedActivityLocation: g, activityApplication: v, onClose: y, transitionState: h, analyticsData: O } = t;
    o.useEffect(() => {
        r.default.track(u.rMx.OPEN_MODAL, {
            type: 'Activity Feedback Modal',
            application_id: v.id,
            application_name: v.name,
            game_id: v.id,
            source: 'Activity End'
        });
    }, [v]);
    let T = (null == (e = v.embeddedActivityConfig) ? void 0 : e.displays_advertisements) === !0;
    return (0, i.jsx)(c.Z, {
        modalType: 'activity',
        header: p.intl.formatToPlainString(p.t.QXYwoK, { applicationName: v.name }),
        body: p.intl.string(p.t['9hk2KC']),
        problemTitle: p.intl.string(p.t.g1q5fn),
        problems: (0, _.Z)(!0, T),
        freeformNeededProblems: m,
        onSubmit: function (t) {
            var e;
            let { rating: o, problem: c, dontShowAgain: _, feedback: s } = t;
            (_ &&
                (r.default.track(u.rMx.ACTIVITY_REPORT_DONT_SHOW, {
                    application_id: v.id,
                    rating: o
                }),
                (0, l.Uv)({
                    feedbackType: b.nw.ACTIVITY,
                    location: 'ActivityFeedback'
                })),
                null != o &&
                    ((0, d.Z)({
                        problem: null != (e = null == c ? void 0 : c.value) ? e : null,
                        channel: f,
                        embeddedActivityLocation: g,
                        feedback: s,
                        activityApplication: v,
                        analyticsData: O,
                        location: 'Activity End',
                        rating: o
                    }),
                    null != c &&
                        (0, a.ZDy)(async () => {
                            let { default: t } = await n.e('14466').then(n.bind(n, 729328));
                            return (e) =>
                                (0, i.jsx)(
                                    t,
                                    (function (t) {
                                        for (var e = 1; e < arguments.length; e++) {
                                            var n = null != arguments[e] ? arguments[e] : {},
                                                i = Object.keys(n);
                                            ('function' == typeof Object.getOwnPropertySymbols &&
                                                (i = i.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (t) {
                                                        return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                    })
                                                )),
                                                i.forEach(function (e) {
                                                    var i;
                                                    ((i = n[e]),
                                                        e in t
                                                            ? Object.defineProperty(t, e, {
                                                                  value: i,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (t[e] = i));
                                                }));
                                        }
                                        return t;
                                    })({ body: p.intl.string(p.t['zuHR+/']) }, e)
                                );
                        })));
        },
        onClose: y,
        transitionState: h,
        otherKey: s.K8.OTHER
    });
}
