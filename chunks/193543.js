o.d(t, { VoiceFilterFeedbackModal: () => p });
var i = o(255367);
o(73800);
var n = o(990547),
    a = o(957115),
    c = o(332664),
    l = o(445102),
    r = o(981631),
    _ = o(531578),
    s = o(388032);
let d = [_.aZ.BAD, _.aZ.GOOD],
    u = {
        [_.aZ.BAD]: s.intl.string(s.t.zGnUBQ),
        [_.aZ.GOOD]: s.intl.string(s.t.SqprKS)
    },
    b = ['other'],
    m = [
        {
            label: s.intl.string(s.t.DVEGuL),
            code: 1001,
            value: 'nobody_could_hear_me'
        },
        {
            label: s.intl.string(s.t.Q3e5wM),
            code: 1002,
            value: 'audio_not_understood'
        },
        {
            label: s.intl.string(s.t['D98z+/']),
            code: 1003,
            value: 'audio_cut'
        },
        {
            label: s.intl.string(s.t.lWtGvb),
            code: 1004,
            value: 'audio_robotic'
        },
        {
            label: s.intl.string(s.t.FARCFB),
            code: 1005,
            value: 'audio_delay'
        },
        {
            label: s.intl.string(s.t['4nEvAQ']),
            code: 1006,
            value: 'bad_volume'
        },
        {
            label: s.intl.string(s.t.xVRTjI),
            code: 1007,
            value: 'audio_echo'
        },
        {
            label: s.intl.string(s.t.qvP5v7),
            code: 1008,
            value: 'audio_unchanged'
        },
        {
            label: s.intl.string(s.t.fpevoa),
            code: 1099,
            value: 'other'
        }
    ];
function p(e) {
    let { onClose: t, transitionState: o, analyticsData: p } = e;
    return (0, i.jsx)(c.Z, {
        modalType: 'voice_filter',
        header: s.intl.string(s.t.zZAORE),
        impression: {
            impressionName: n.ImpressionNames.VOICE_FILTER_FEEDBACK_MODAL,
            impressionProperties: {
                rtc_connection_id: p.rtc_connection_id,
                media_session_id: p.media_session_id
            }
        },
        ratingOptions: d,
        ratingTextLabels: u,
        problemTitle: s.intl.string(s.t.FJmoxM),
        problems: m,
        freeformNeededProblems: b,
        onSubmit: function (e) {
            var t, o;
            let { rating: i, problem: n, dontShowAgain: c, feedback: s } = e;
            (c &&
                (0, a.Uv)({
                    feedbackType: _.nw.VOICE_FILTER,
                    location: 'VoiceFilterFeedbackModal'
                }),
                null != i &&
                    (0, l.Z)(r.rMx.VOICE_FILTER_FEEDBACK, {
                        rating: i,
                        reasonCode: null != (t = null == n ? void 0 : n.code) ? t : null,
                        reasonDescription: null != (o = null == n ? void 0 : n.value) ? o : null,
                        feedback: s,
                        analyticsData: p
                    }));
        },
        onClose: t,
        transitionState: o,
        otherKey: 'other'
    });
}
