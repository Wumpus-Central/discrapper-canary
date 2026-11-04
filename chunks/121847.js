n.d(i, { default: () => m });
var e = n(477900),
    l = n(582128),
    a = n(192308),
    d = n(930932),
    o = n(612479),
    c = n(129230);
n(321073);
var r = n(487887),
    s = n(792996),
    u = n(652215),
    _ = n(670455);
let p = [r.CS.OTHER, r.CS.ADS, r.CS.NOT_FUN];
function m(t) {
    let {
        channel: i,
        embeddedActivityLocation: m,
        activityApplication: b,
        onClose: g,
        transitionState: f,
        analyticsData: v,
    } = t;
    l.useEffect(() => {
        c.default.track(u.HAw.OPEN_MODAL, {
            type: "Activity Feedback Modal",
            application_id: b.id,
            application_name: b.name,
            game_id: b.id,
            source: "Activity End",
        });
    }, [b]);
    let A = b.embeddedActivityConfig?.displays_advertisements === !0;
    return (0, e.jsx)(o.A, {
        modalType: "activity",
        header: s.intl.formatToPlainString(s.t.QXYwoD, { applicationName: b.name }),
        body: s.intl.string(s.t["9hk2KF"]),
        problemTitle: s.intl.string(s.t.g1q5fr),
        problems: (function (t) {
            let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = [
                    { value: r.CS.FAILED_LOAD, label: t ? s.intl.string(s.t.uaiF6B) : s.intl.string(s.t.aO6OMZ) },
                    { value: r.CS.LAGGING, label: t ? s.intl.string(s.t["/nJOlj"]) : s.intl.string(s.t["79HFwf"]) },
                    { value: r.CS.CONFUSING, label: t ? s.intl.string(s.t["/8psS7"]) : s.intl.string(s.t.iSv55N) },
                    { value: r.CS.NOT_FUN, label: t ? s.intl.string(s.t["7GVmLm"]) : s.intl.string(s.t.GnVff5) },
                    { value: r.CS.OTHER, label: s.intl.string(s.t.emlT91) },
                ];
            return (
                i && n.push({ value: r.CS.ADS, label: t ? s.intl.string(s.t["5o1UL6"]) : s.intl.string(s.t.XeeDhK) }), n
            );
        })(!0, A),
        freeformNeededProblems: p,
        onSubmit: function (t) {
            let { rating: l, problem: o, dontShowAgain: r, feedback: p } = t;
            (r &&
                (c.default.track(u.HAw.ACTIVITY_REPORT_DONT_SHOW, { application_id: b.id, rating: l }),
                (0, d.n3)({ feedbackType: _.MW.ACTIVITY, location: "ActivityFeedback" })),
                null == l ||
                    (!(function (t) {
                        let {
                            problem: i,
                            channel: n,
                            embeddedActivityLocation: e,
                            feedback: l,
                            activityApplication: a,
                            analyticsData: d = {},
                            location: o,
                            rating: r = null,
                        } = t;
                        c.default.track(u.HAw.ACTIVITY_REPORT_PROBLEM, {
                            reason: i,
                            guild_id: n?.getGuildId(),
                            channel_id: n?.id,
                            application_id: a?.id,
                            application_name: a?.name,
                            location: o,
                            rating: r,
                            feedback: l,
                            embedded_activity_location_kind: e.kind,
                            rtc_connection_id: d.rtc_connection_id,
                            media_session_id: d.media_session_id,
                        });
                    })({
                        problem: o?.value ?? null,
                        channel: i,
                        embeddedActivityLocation: m,
                        feedback: p,
                        activityApplication: b,
                        analyticsData: v,
                        location: "Activity End",
                        rating: l,
                    }),
                    null != o &&
                        (0, a.mM)(async () => {
                            let { default: t } = await n.e(137836).then(n.bind(n, 845671));
                            return (i) => (0, e.jsx)(t, { body: s.intl.string(s.t["zuHR+y"]), ...i });
                        })));
        },
        onClose: g,
        transitionState: f,
        otherKey: r.CS.OTHER,
    });
}
