n.d(t, { Z: () => S }), n(388685);
var r = n(200651);
n(192379);
var i = n(392711),
    a = n(481060),
    o = n(16609),
    s = n(812206),
    l = n(569545),
    c = n(687516),
    u = n(928518),
    d = n(314897),
    f = n(592125),
    _ = n(158776),
    p = n(19780),
    h = n(959457),
    m = n(178635),
    g = n(531578),
    E = n(981631);
function b(e, t, n) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class I extends m.Z {
    constructor(...e) {
        super(...e),
            b(this, 'actions', {
                VOICE_CHANNEL_SHOW_FEEDBACK: (e) => this.handleVoiceChannelFeedback(e),
                STREAM_CLOSE: (e) => this.handleStreamClose(e),
                VIDEO_BACKGROUND_SHOW_FEEDBACK: (e) => this.handleVideoBackgroundShowFeedback(e),
                EMBEDDED_ACTIVITY_CLOSE: (e) => this.handleActivityClose(e),
                IN_APP_REPORTS_SHOW_FEEDBACK: (e) => this.handleInAppReportsFeedback(e),
                USER_DM_MUTE_SHOW_FEEDBACK: (e) => this.handleUserDmMuteFeedback(e),
                BLOCK_USER_SHOW_FEEDBACK: () => this.handleBlockUserFeedback()
            }),
            b(this, 'handleVoiceChannelFeedback', (e) => {
                let { analyticsData: t } = e;
                (0, i.sum)(t.duration_speaking_voice_filter_ms) >= 5000 &&
                    this.possiblyShowFeedbackModal(g.nw.VOICE_FILTER, () => {
                        (0, a.ZDy)(async () => {
                            let { VoiceFilterFeedbackModal: e } = await n.e('95677').then(n.bind(n, 193543));
                            return (n) => (0, r.jsx)(e, O(y({}, n), { analyticsData: t }));
                        });
                    }),
                    this.possiblyShowFeedbackModal(g.nw.VOICE, () => {
                        (0, a.ZDy)(async () => {
                            let { default: e } = await n.e('96888').then(n.bind(n, 988645));
                            return (n) => (0, r.jsx)(e, O(y({}, n), { analyticsData: t }));
                        });
                    });
            }),
            b(this, 'handleStreamClose', (e) => {
                var t, i;
                let { streamKey: o, canShowFeedback: s } = e,
                    u = (0, l.my)(o),
                    f = (0, c.L2)(u, _.Z),
                    p = null != (i = h.Z.getVideoStats(o)) ? i : {},
                    m = y(
                        {
                            media_session_id: h.Z.getMediaSessionId(o),
                            rtc_connection_id: h.Z.getRtcConnectionId(o),
                            stream_region: h.Z.getRegion(o),
                            max_viewers: h.Z.getMaxViewers(o),
                            parent_media_session_id: null == (t = h.Z.getRTCConnection(o)) ? void 0 : t.parentMediaSessionId
                        },
                        p
                    );
                s &&
                    this.possiblyShowFeedbackModal(g.nw.STREAM, () => {
                        (0, a.ZDy)(async () => {
                            let { default: e } = await n.e('23657').then(n.bind(n, 142402));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    O(
                                        y(
                                            {
                                                stream: u,
                                                streamApplication: f,
                                                isStreamer: u.ownerId === d.default.getId()
                                            },
                                            t
                                        ),
                                        { analyticsData: m }
                                    )
                                );
                        });
                    });
            }),
            b(this, 'handleVideoBackgroundShowFeedback', (e) => {
                let { analyticsData: t } = e;
                this.possiblyShowFeedbackModal(g.nw.VIDEO_BACKGROUND, () => {
                    (0, a.ZDy)(async () => {
                        let { default: e } = await n.e('11495').then(n.bind(n, 801320));
                        return (n) => (0, r.jsx)(e, O(y({}, n), { analyticsData: t }));
                    });
                });
            }),
            b(this, 'handleActivityClose', (e) => {
                let { applicationId: t, location: i, showFeedback: l } = e,
                    c = s.Z.getApplication(t),
                    d = (0, o.pY)(i),
                    _ = f.Z.getChannel(d),
                    h = {
                        rtc_connection_id: p.Z.getRTCConnectionId(),
                        media_session_id: p.Z.getMediaSessionId()
                    },
                    m = u.Z.getWindowOpen(E.KJ3.CHANNEL_CALL_POPOUT) ? a.u1M : a.z1l;
                null != c &&
                    l &&
                    this.possiblyShowFeedbackModal(g.nw.ACTIVITY, () => {
                        (0, a.ZDy)(
                            async () => {
                                let { default: e } = await n.e('4413').then(n.bind(n, 450634));
                                return (t) =>
                                    (0, r.jsx)(
                                        e,
                                        O(y({}, t), {
                                            activityApplication: c,
                                            channel: _,
                                            embeddedActivityLocation: i,
                                            analyticsData: h
                                        })
                                    );
                            },
                            { contextKey: m }
                        );
                    });
            }),
            b(this, 'handleInAppReportsFeedback', (e) => {
                let { reportId: t, reportType: i } = e;
                this.possiblyShowFeedbackModal(g.nw.IN_APP_REPORTS, () => {
                    (0, a.ZDy)(async () => {
                        let { default: e } = await n.e('72135').then(n.bind(n, 442173));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                O(y({}, n), {
                                    reportId: t,
                                    reportType: i
                                })
                            );
                    });
                });
            }),
            b(this, 'handleUserDmMuteFeedback', (e) => {
                let { channel: t } = e;
                this.possiblyShowFeedbackModal(g.nw.USER_DM_MUTE, () => {
                    (0, a.ZDy)(async () => {
                        let { default: e } = await n.e('10620').then(n.bind(n, 408561));
                        return (n) => (0, r.jsx)(e, O(y({}, n), { channel: t }));
                    });
                });
            }),
            b(this, 'handleBlockUserFeedback', () => {
                this.possiblyShowFeedbackModal(g.nw.BLOCK_USER, () => {
                    (0, a.ZDy)(async () => {
                        let { default: e } = await n.e('87995').then(n.bind(n, 180970));
                        return (t) => (0, r.jsx)(e, y({}, t));
                    });
                });
            });
    }
}
let S = new I();
