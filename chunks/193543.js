n.d(t, { VoiceFilterFeedbackModal: () => p });
var o = n(255367);
n(73800);
var i = n(990547),
    a = n(957115),
    l = n(332664),
    r = n(882542),
    s = n(981631),
    c = n(531578),
    u = n(388032);
let d = [c.aZ.BAD, c.aZ.GOOD],
    _ = {
        [c.aZ.BAD]: u.intl.string(u.t.zGnUBQ),
        [c.aZ.GOOD]: u.intl.string(u.t.SqprKS)
    },
    m = ['other'],
    b = [
        {
            label: u.intl.string(u.t.DVEGuL),
            code: 1001,
            value: 'nobody_could_hear_me'
        },
        {
            label: u.intl.string(u.t.Q3e5wM),
            code: 1002,
            value: 'audio_not_understood'
        },
        {
            label: u.intl.string(u.t['D98z+/']),
            code: 1003,
            value: 'audio_cut'
        },
        {
            label: u.intl.string(u.t.lWtGvb),
            code: 1004,
            value: 'audio_robotic'
        },
        {
            label: u.intl.string(u.t.FARCFB),
            code: 1005,
            value: 'audio_delay'
        },
        {
            label: u.intl.string(u.t['4nEvAQ']),
            code: 1006,
            value: 'bad_volume'
        },
        {
            label: u.intl.string(u.t.xVRTjI),
            code: 1007,
            value: 'audio_echo'
        },
        {
            label: u.intl.string(u.t.qvP5v7),
            code: 1008,
            value: 'audio_unchanged'
        },
        {
            label: u.intl.string(u.t.fpevoa),
            code: 1099,
            value: 'other'
        }
    ];
function p(e) {
    let { onClose: t, transitionState: n, analyticsData: p } = e;
    return (0, o.jsx)(l.Z, {
        modalType: 'voice_filter',
        header: u.intl.string(u.t.zZAORE),
        impression: {
            impressionName: i.ImpressionNames.VOICE_FILTER_FEEDBACK_MODAL,
            impressionProperties: {
                rtc_connection_id: p.rtc_connection_id,
                media_session_id: p.media_session_id
            }
        },
        ratingOptions: d,
        ratingTextLabels: _,
        problemTitle: u.intl.string(u.t.FJmoxM),
        problems: b,
        freeformNeededProblems: m,
        onSubmit: function (e) {
            var t, n;
            let { rating: o, problem: i, dontShowAgain: l, feedback: u } = e;
            l &&
                (0, a.U)({
                    feedbackType: c.nw.VOICE_FILTER,
                    location: 'VoiceFilterFeedbackModal'
                }),
                null != o &&
                    (0, r.Z)(s.rMx.VOICE_FILTER_FEEDBACK, {
                        rating: o,
                        reasonCode: null != (t = null == i ? void 0 : i.code) ? t : null,
                        reasonDescription: null != (n = null == i ? void 0 : i.value) ? n : null,
                        feedback: u,
                        analyticsData: p
                    });
        },
        onClose: t,
        transitionState: n,
        otherKey: 'other'
    });
}
