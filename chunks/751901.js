i.d(t, { default: () => p });
var a = i(627968),
    n = i(64700),
    l = i(192308),
    r = i(930932),
    o = i(612479),
    d = i(954571);
i(321073);
var c = i(360469),
    s = i(985018),
    u = i(652215),
    _ = i(670455);
let b = [c.CS.OTHER, c.CS.ADS, c.CS.NOT_FUN];
function p(e) {
    let {
        channel: t,
        embeddedActivityLocation: p,
        activityApplication: g,
        onClose: m,
        transitionState: h,
        analyticsData: f,
    } = e;
    n.useEffect(() => {
        d.default.track(u.HAw.OPEN_MODAL, {
            type: "Activity Feedback Modal",
            application_id: g.id,
            application_name: g.name,
            game_id: g.id,
            source: "Activity End",
        });
    }, [g]);
    let y = g.embeddedActivityConfig?.displays_advertisements === !0;
    return (0, a.jsx)(o.A, {
        modalType: "activity",
        header: s.intl.formatToPlainString(s.t.QXYwoD, { applicationName: g.name }),
        body: s.intl.string(s.t["9hk2KF"]),
        problemTitle: s.intl.string(s.t.g1q5fr),
        problems: (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                i = [
                    { value: c.CS.FAILED_LOAD, label: e ? s.intl.string(s.t.uaiF6B) : s.intl.string(s.t.aO6OMZ) },
                    { value: c.CS.LAGGING, label: e ? s.intl.string(s.t["/nJOlj"]) : s.intl.string(s.t["79HFwf"]) },
                    { value: c.CS.CONFUSING, label: e ? s.intl.string(s.t["/8psS7"]) : s.intl.string(s.t.iSv55N) },
                    { value: c.CS.NOT_FUN, label: e ? s.intl.string(s.t["7GVmLm"]) : s.intl.string(s.t.GnVff5) },
                    { value: c.CS.OTHER, label: s.intl.string(s.t.emlT91) },
                ];
            return (
                t && i.push({ value: c.CS.ADS, label: e ? s.intl.string(s.t["5o1UL6"]) : s.intl.string(s.t.XeeDhK) }), i
            );
        })(!0, y),
        freeformNeededProblems: b,
        onSubmit: function (e) {
            let { rating: n, problem: o, dontShowAgain: c, feedback: b } = e;
            c &&
                (d.default.track(u.HAw.ACTIVITY_REPORT_DONT_SHOW, { application_id: g.id, rating: n }),
                (0, r.n3)({ feedbackType: _.MW.ACTIVITY, location: "ActivityFeedback" })),
                null == n ||
                    (!(function (e) {
                        let {
                            problem: t,
                            channel: i,
                            embeddedActivityLocation: a,
                            feedback: n,
                            activityApplication: l,
                            analyticsData: r = {},
                            location: o,
                            rating: c = null,
                        } = e;
                        d.default.track(u.HAw.ACTIVITY_REPORT_PROBLEM, {
                            reason: t,
                            guild_id: i?.getGuildId(),
                            channel_id: i?.id,
                            application_id: l?.id,
                            application_name: l?.name,
                            location: o,
                            rating: c,
                            feedback: n,
                            embedded_activity_location_kind: a.kind,
                            rtc_connection_id: r.rtc_connection_id,
                            media_session_id: r.media_session_id,
                        });
                    })({
                        problem: o?.value ?? null,
                        channel: t,
                        embeddedActivityLocation: p,
                        feedback: b,
                        activityApplication: g,
                        analyticsData: f,
                        location: "Activity End",
                        rating: n,
                    }),
                    null != o &&
                        (0, l.openModalLazy)(async () => {
                            let { default: e } = await i.e("37836").then(i.bind(i, 845671));
                            return (t) => (0, a.jsx)(e, { body: s.intl.string(s.t["zuHR+y"]), ...t });
                        }));
        },
        onClose: m,
        transitionState: h,
        otherKey: c.CS.OTHER,
    });
}
