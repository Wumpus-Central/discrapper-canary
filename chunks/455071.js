a.d(t, { VoiceFilterFeedbackModal: () => p });
var i = a(627968);
a(64700);
var o = a(110259),
    n = a(930932),
    d = a(612479),
    l = a(131935),
    c = a(652215),
    r = a(670455),
    s = a(985018);
let u = [r.P0.BAD, r.P0.GOOD],
    _ = {
        [r.P0.BAD]: s.intl.string(s.t.zGnUBV),
        [r.P0.GOOD]: s.intl.string(s.t.SqprKf),
    },
    b = ["other"],
    f = [
        {
            label: s.intl.string(s.t.DVEGuL),
            code: 1001,
            value: "nobody_could_hear_me",
        },
        {
            label: s.intl.string(s.t.Q3e5wF),
            code: 1002,
            value: "audio_not_understood",
        },
        {
            label: s.intl.string(s.t["D98z+y"]),
            code: 1003,
            value: "audio_cut",
        },
        {
            label: s.intl.string(s.t.lWtGvX),
            code: 1004,
            value: "audio_robotic",
        },
        {
            label: s.intl.string(s.t.FARCFA),
            code: 1005,
            value: "audio_delay",
        },
        {
            label: s.intl.string(s.t["4nEvAa"]),
            code: 1006,
            value: "bad_volume",
        },
        {
            label: s.intl.string(s.t.xVRTjP),
            code: 1007,
            value: "audio_echo",
        },
        {
            label: s.intl.string(s.t.qvP5vz),
            code: 1008,
            value: "audio_unchanged",
        },
        {
            label: s.intl.string(s.t.fpevoR),
            code: 1099,
            value: "other",
        },
    ];
function p(e) {
    let { onClose: t, transitionState: a, analyticsData: p } = e;
    return (0, i.jsx)(d.A, {
        modalType: "voice_filter",
        header: s.intl.string(s.t.zZAORN),
        impression: {
            impressionName: o.ImpressionNames.VOICE_FILTER_FEEDBACK_MODAL,
            impressionProperties: {
                rtc_connection_id: p.rtc_connection_id,
                media_session_id: p.media_session_id,
            },
        },
        ratingOptions: u,
        ratingTextLabels: _,
        problemTitle: s.intl.string(s.t.FJmoxF),
        problems: f,
        freeformNeededProblems: b,
        onSubmit: function (e) {
            var t, a;
            let { rating: i, problem: o, dontShowAgain: d, feedback: s } = e;
            d &&
                (0, n.n3)({
                    feedbackType: r.MW.VOICE_FILTER,
                    location: "VoiceFilterFeedbackModal",
                }),
                null != i &&
                    (0, l.A)(c.HAw.VOICE_FILTER_FEEDBACK, {
                        rating: i,
                        reasonCode: null != (t = null == o ? void 0 : o.code) ? t : null,
                        reasonDescription: null != (a = null == o ? void 0 : o.value) ? a : null,
                        feedback: s,
                        analyticsData: p,
                    });
        },
        onClose: t,
        transitionState: a,
        otherKey: "other",
    });
}
