n.d(t, { Z: () => T }), n(47120);
var r = n(200651);
n(192379);
var i = n(392711),
    o = n(481060),
    a = n(16609),
    s = n(812206),
    l = n(569545),
    c = n(687516),
    u = n(981283),
    d = n(928518),
    f = n(314897),
    _ = n(592125),
    p = n(158776),
    h = n(19780),
    m = n(959457),
    g = n(178635),
    E = n(531578),
    b = n(981631);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class S extends g.Z {
    _initialize() {
        u.Z.init();
    }
    constructor(...e) {
        super(...e),
            v(this, 'actions', {
                VOICE_CHANNEL_SHOW_FEEDBACK: (e) => this.handleVoiceChannelFeedback(e),
                STREAM_CLOSE: (e) => this.handleStreamClose(e),
                VIDEO_BACKGROUND_SHOW_FEEDBACK: (e) => this.handleVideoBackgroundShowFeedback(e),
                EMBEDDED_ACTIVITY_CLOSE: (e) => this.handleActivityClose(e),
                IN_APP_REPORTS_SHOW_FEEDBACK: (e) => this.handleInAppReportsFeedback(e),
                USER_DM_MUTE_SHOW_FEEDBACK: (e) => this.handleUserDmMuteFeedback(e),
                BLOCK_USER_SHOW_FEEDBACK: () => this.handleBlockUserFeedback()
            }),
            v(this, 'handleVoiceChannelFeedback', (e) => {
                let { analyticsData: t } = e;
                (0, i.sum)(t.duration_speaking_voice_filter_ms) >= 5000 &&
                    this.possiblyShowFeedbackModal(E.nw.VOICE_FILTER, () => {
                        (0, o.ZDy)(async () => {
                            let { VoiceFilterFeedbackModal: e } = await n.e('95677').then(n.bind(n, 193543));
                            return (n) => (0, r.jsx)(e, I(y({}, n), { analyticsData: t }));
                        });
                    }),
                    this.possiblyShowFeedbackModal(E.nw.VOICE, () => {
                        (0, o.ZDy)(async () => {
                            let { default: e } = await n.e('96888').then(n.bind(n, 988645));
                            return (n) => (0, r.jsx)(e, I(y({}, n), { analyticsData: t }));
                        });
                    });
            }),
            v(this, 'handleStreamClose', (e) => {
                var t, i;
                let { streamKey: a, canShowFeedback: s } = e,
                    u = (0, l.my)(a),
                    d = (0, c.L2)(u, p.Z),
                    _ = null !== (i = m.Z.getVideoStats(a)) && void 0 !== i ? i : {},
                    h = y(
                        {
                            media_session_id: m.Z.getMediaSessionId(a),
                            rtc_connection_id: m.Z.getRtcConnectionId(a),
                            stream_region: m.Z.getRegion(a),
                            max_viewers: m.Z.getMaxViewers(a),
                            parent_media_session_id: null === (t = m.Z.getRTCConnection(a)) || void 0 === t ? void 0 : t.parentMediaSessionId
                        },
                        _
                    );
                s &&
                    this.possiblyShowFeedbackModal(E.nw.STREAM, () => {
                        (0, o.ZDy)(async () => {
                            let { default: e } = await n.e('23657').then(n.bind(n, 142402));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    I(
                                        y(
                                            {
                                                stream: u,
                                                streamApplication: d,
                                                isStreamer: u.ownerId === f.default.getId()
                                            },
                                            t
                                        ),
                                        { analyticsData: h }
                                    )
                                );
                        });
                    });
            }),
            v(this, 'handleVideoBackgroundShowFeedback', (e) => {
                let { analyticsData: t } = e;
                this.possiblyShowFeedbackModal(E.nw.VIDEO_BACKGROUND, () => {
                    (0, o.ZDy)(async () => {
                        let { default: e } = await n.e('11495').then(n.bind(n, 801320));
                        return (n) => (0, r.jsx)(e, I(y({}, n), { analyticsData: t }));
                    });
                });
            }),
            v(this, 'handleActivityClose', (e) => {
                let { applicationId: t, location: i, showFeedback: l } = e,
                    c = s.Z.getApplication(t),
                    u = (0, a.pY)(i),
                    f = _.Z.getChannel(u),
                    p = {
                        rtc_connection_id: h.Z.getRTCConnectionId(),
                        media_session_id: h.Z.getMediaSessionId()
                    },
                    m = d.Z.getWindowOpen(b.KJ3.CHANNEL_CALL_POPOUT) ? o.u1M : o.z1l;
                null != c &&
                    l &&
                    this.possiblyShowFeedbackModal(E.nw.ACTIVITY, () => {
                        (0, o.ZDy)(
                            async () => {
                                let { default: e } = await n.e('4413').then(n.bind(n, 450634));
                                return (t) =>
                                    (0, r.jsx)(
                                        e,
                                        I(y({}, t), {
                                            activityApplication: c,
                                            channel: f,
                                            embeddedActivityLocation: i,
                                            analyticsData: p
                                        })
                                    );
                            },
                            { contextKey: m }
                        );
                    });
            }),
            v(this, 'handleInAppReportsFeedback', (e) => {
                let { reportId: t, reportType: i } = e;
                this.possiblyShowFeedbackModal(E.nw.IN_APP_REPORTS, () => {
                    (0, o.ZDy)(async () => {
                        let { default: e } = await n.e('72135').then(n.bind(n, 442173));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                I(y({}, n), {
                                    reportId: t,
                                    reportType: i
                                })
                            );
                    });
                });
            }),
            v(this, 'handleUserDmMuteFeedback', (e) => {
                let { channel: t } = e;
                this.possiblyShowFeedbackModal(E.nw.USER_DM_MUTE, () => {
                    (0, o.ZDy)(async () => {
                        let { default: e } = await n.e('10620').then(n.bind(n, 408561));
                        return (n) => (0, r.jsx)(e, I(y({}, n), { channel: t }));
                    });
                });
            }),
            v(this, 'handleBlockUserFeedback', () => {
                this.possiblyShowFeedbackModal(E.nw.BLOCK_USER, () => {
                    (0, o.ZDy)(async () => {
                        let { default: e } = await n.e('87995').then(n.bind(n, 180970));
                        return (t) => (0, r.jsx)(e, y({}, t));
                    });
                });
            });
    }
}
let T = new S();
