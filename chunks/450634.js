a.d(e, { default: () => f });
var n = a(54381),
    i = a(473749),
    c = a(481060),
    o = a(957115),
    d = a(332664),
    l = a(626135),
    r = a(672655),
    b = a(768015),
    u = a(701488),
    s = a(981631),
    _ = a(531578),
    m = a(388032);
let p = [u.K8.OTHER, u.K8.ADS, u.K8.NOT_FUN];
function f(t) {
    var e;
    let {
        channel: f,
        embeddedActivityLocation: v,
        activityApplication: g,
        onClose: y,
        transitionState: O,
        analyticsData: h,
    } = t;
    i.useEffect(() => {
        l.default.track(s.rMx.OPEN_MODAL, {
            type: "Activity Feedback Modal",
            application_id: g.id,
            application_name: g.name,
            game_id: g.id,
            source: "Activity End",
        });
    }, [g]);
    let j = (null == (e = g.embeddedActivityConfig) ? void 0 : e.displays_advertisements) === !0;
    return (0, n.jsx)(d.Z, {
        modalType: "activity",
        header: m.intl.formatToPlainString(m.t.QXYwoD, { applicationName: g.name }),
        body: m.intl.string(m.t["9hk2KF"]),
        problemTitle: m.intl.string(m.t.g1q5fr),
        problems: (0, r.Z)(!0, j),
        freeformNeededProblems: p,
        onSubmit: function (t) {
            var e;
            let { rating: i, problem: d, dontShowAgain: r, feedback: u } = t;
            r &&
                (l.default.track(s.rMx.ACTIVITY_REPORT_DONT_SHOW, {
                    application_id: g.id,
                    rating: i,
                }),
                (0, o.Uv)({
                    feedbackType: _.nw.ACTIVITY,
                    location: "ActivityFeedback",
                })),
                null != i &&
                    ((0, b.Z)({
                        problem: null != (e = null == d ? void 0 : d.value) ? e : null,
                        channel: f,
                        embeddedActivityLocation: v,
                        feedback: u,
                        activityApplication: g,
                        analyticsData: h,
                        location: "Activity End",
                        rating: i,
                    }),
                    null != d &&
                        (0, c.ZDy)(async () => {
                            let { default: t } = await a.e("14466").then(a.bind(a, 729328));
                            return (e) =>
                                (0, n.jsx)(
                                    t,
                                    (function (t) {
                                        for (var e = 1; e < arguments.length; e++) {
                                            var a = null != arguments[e] ? arguments[e] : {},
                                                n = Object.keys(a);
                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                (n = n.concat(
                                                    Object.getOwnPropertySymbols(a).filter(function (t) {
                                                        return Object.getOwnPropertyDescriptor(a, t).enumerable;
                                                    }),
                                                )),
                                                n.forEach(function (e) {
                                                    var n;
                                                    (n = a[e]),
                                                        e in t
                                                            ? Object.defineProperty(t, e, {
                                                                  value: n,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0,
                                                              })
                                                            : (t[e] = n);
                                                });
                                        }
                                        return t;
                                    })({ body: m.intl.string(m.t["zuHR+y"]) }, e),
                                );
                        }));
        },
        onClose: y,
        transitionState: O,
        otherKey: u.K8.OTHER,
    });
}
