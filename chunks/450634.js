n.d(e, { default: () => f });
var i = n(54381),
    a = n(473749),
    o = n(481060),
    l = n(957115),
    c = n(332664),
    r = n(626135),
    _ = n(672655),
    d = n(768015),
    u = n(701488),
    s = n(981631),
    b = n(531578),
    m = n(388032);
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
    a.useEffect(() => {
        r.default.track(s.rMx.OPEN_MODAL, {
            type: "Activity Feedback Modal",
            application_id: g.id,
            application_name: g.name,
            game_id: g.id,
            source: "Activity End",
        });
    }, [g]);
    let j = (null == (e = g.embeddedActivityConfig) ? void 0 : e.displays_advertisements) === !0;
    return (0, i.jsx)(c.Z, {
        modalType: "activity",
        header: m.intl.formatToPlainString(m.t.QXYwoD, { applicationName: g.name }),
        body: m.intl.string(m.t["9hk2KF"]),
        problemTitle: m.intl.string(m.t.g1q5fr),
        problems: (0, _.Z)(!0, j),
        freeformNeededProblems: p,
        onSubmit: function (t) {
            var e;
            let { rating: a, problem: c, dontShowAgain: _, feedback: u } = t;
            _ &&
                (r.default.track(s.rMx.ACTIVITY_REPORT_DONT_SHOW, {
                    application_id: g.id,
                    rating: a,
                }),
                (0, l.Uv)({
                    feedbackType: b.nw.ACTIVITY,
                    location: "ActivityFeedback",
                })),
                null != a &&
                    ((0, d.Z)({
                        problem: null != (e = null == c ? void 0 : c.value) ? e : null,
                        channel: f,
                        embeddedActivityLocation: v,
                        feedback: u,
                        activityApplication: g,
                        analyticsData: h,
                        location: "Activity End",
                        rating: a,
                    }),
                    null != c &&
                        (0, o.ZDy)(async () => {
                            let { default: t } = await n.e("14466").then(n.bind(n, 729328));
                            return (e) =>
                                (0, i.jsx)(
                                    t,
                                    (function (t) {
                                        for (var e = 1; e < arguments.length; e++) {
                                            var n = null != arguments[e] ? arguments[e] : {},
                                                i = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                (i = i.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (t) {
                                                        return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                    }),
                                                )),
                                                i.forEach(function (e) {
                                                    var i;
                                                    (i = n[e]),
                                                        e in t
                                                            ? Object.defineProperty(t, e, {
                                                                  value: i,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0,
                                                              })
                                                            : (t[e] = i);
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
