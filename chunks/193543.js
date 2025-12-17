a.d(t, { VoiceFilterFeedbackModal: () => p });
var o = a(54381);
a(473749);
var i = a(990547),
    n = a(957115),
    c = a(332664),
    d = a(445102),
    l = a(981631),
    r = a(531578),
    s = a(388032);
let u = [r.aZ.BAD, r.aZ.GOOD],
    _ = {
        [r.aZ.BAD]: s.intl.string(s.t.zGnUBV),
        [r.aZ.GOOD]: s.intl.string(s.t.SqprKf),
    },
    b = ["other"],
    m = [
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
    return (0, o.jsx)(c.Z, {
        modalType: "voice_filter",
        header: s.intl.string(s.t.zZAORN),
        impression: {
            impressionName: i.ImpressionNames.VOICE_FILTER_FEEDBACK_MODAL,
            impressionProperties: {
                rtc_connection_id: p.rtc_connection_id,
                media_session_id: p.media_session_id,
            },
        },
        ratingOptions: u,
        ratingTextLabels: _,
        problemTitle: s.intl.string(s.t.FJmoxF),
        problems: m,
        freeformNeededProblems: b,
        onSubmit: function (e) {
            var t, a;
            let { rating: o, problem: i, dontShowAgain: c, feedback: s } = e;
            c &&
                (0, n.Uv)({
                    feedbackType: r.nw.VOICE_FILTER,
                    location: "VoiceFilterFeedbackModal",
                }),
                null != o &&
                    (0, d.Z)(l.rMx.VOICE_FILTER_FEEDBACK, {
                        rating: o,
                        reasonCode: null != (t = null == i ? void 0 : i.code) ? t : null,
                        reasonDescription: null != (a = null == i ? void 0 : i.value) ? a : null,
                        feedback: s,
                        analyticsData: p,
                    });
        },
        onClose: t,
        transitionState: a,
        otherKey: "other",
    });
}
