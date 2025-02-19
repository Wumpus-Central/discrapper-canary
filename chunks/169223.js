n.d(t, { Z: () => I }), n(47120);
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(16609),
    a = n(812206),
    s = n(569545),
    l = n(687516),
    c = n(981283),
    u = n(928518),
    d = n(314897),
    f = n(592125),
    p = n(158776),
    _ = n(19780),
    h = n(959457),
    m = n(178635),
    g = n(531578),
    E = n(981631);
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
function b(e) {
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
function y(e, t) {
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
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class S extends m.Z {
    _initialize() {
        c.Z.init();
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
                this.possiblyShowFeedbackModal(g.nw.VOICE, () => {
                    (0, i.ZDy)(async () => {
                        let { default: e } = await n.e('96888').then(n.bind(n, 988645));
                        return (n) => (0, r.jsx)(e, O(b({}, n), { analyticsData: t }));
                    });
                });
            }),
            v(this, 'handleStreamClose', (e) => {
                var t;
                let { streamKey: o, canShowFeedback: a } = e,
                    c = (0, s.my)(o),
                    u = (0, l.L2)(c, p.Z),
                    f = null !== (t = h.Z.getVideoStats(o)) && void 0 !== t ? t : {},
                    _ = b(
                        {
                            media_session_id: h.Z.getMediaSessionId(o),
                            rtc_connection_id: h.Z.getRtcConnectionId(o),
                            stream_region: h.Z.getRegion(o),
                            max_viewers: h.Z.getMaxViewers(o)
                        },
                        f
                    );
                a &&
                    this.possiblyShowFeedbackModal(g.nw.STREAM, () => {
                        (0, i.ZDy)(async () => {
                            let { default: e } = await n.e('23657').then(n.bind(n, 142402));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    O(
                                        b(
                                            {
                                                stream: c,
                                                streamApplication: u,
                                                isStreamer: c.ownerId === d.default.getId()
                                            },
                                            t
                                        ),
                                        { analyticsData: _ }
                                    )
                                );
                        });
                    });
            }),
            v(this, 'handleVideoBackgroundShowFeedback', (e) => {
                let { analyticsData: t } = e;
                this.possiblyShowFeedbackModal(g.nw.VIDEO_BACKGROUND, () => {
                    (0, i.ZDy)(async () => {
                        let { default: e } = await n.e('11495').then(n.bind(n, 801320));
                        return (n) => (0, r.jsx)(e, O(b({}, n), { analyticsData: t }));
                    });
                });
            }),
            v(this, 'handleActivityClose', (e) => {
                let { applicationId: t, location: s, showFeedback: l } = e,
                    c = a.Z.getApplication(t),
                    d = (0, o.pY)(s),
                    p = f.Z.getChannel(d),
                    h = {
                        rtc_connection_id: _.Z.getRTCConnectionId(),
                        media_session_id: _.Z.getMediaSessionId()
                    },
                    m = u.Z.getWindowOpen(E.KJ3.CHANNEL_CALL_POPOUT) ? i.u1M : i.z1l;
                null != c &&
                    null != p &&
                    l &&
                    this.possiblyShowFeedbackModal(g.nw.ACTIVITY, () => {
                        (0, i.ZDy)(
                            async () => {
                                let { default: e } = await n.e('4413').then(n.bind(n, 450634));
                                return (t) =>
                                    (0, r.jsx)(
                                        e,
                                        O(b({}, t), {
                                            activityApplication: c,
                                            channel: p,
                                            analyticsData: h
                                        })
                                    );
                            },
                            { contextKey: m }
                        );
                    });
            }),
            v(this, 'handleInAppReportsFeedback', (e) => {
                let { reportId: t, reportType: o } = e;
                this.possiblyShowFeedbackModal(g.nw.IN_APP_REPORTS, () => {
                    (0, i.ZDy)(async () => {
                        let { default: e } = await n.e('72135').then(n.bind(n, 442173));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                O(b({}, n), {
                                    reportId: t,
                                    reportType: o
                                })
                            );
                    });
                });
            }),
            v(this, 'handleUserDmMuteFeedback', (e) => {
                let { channel: t } = e;
                this.possiblyShowFeedbackModal(g.nw.USER_DM_MUTE, () => {
                    (0, i.ZDy)(async () => {
                        let { default: e } = await n.e('10620').then(n.bind(n, 408561));
                        return (n) => (0, r.jsx)(e, O(b({}, n), { channel: t }));
                    });
                });
            }),
            v(this, 'handleBlockUserFeedback', () => {
                this.possiblyShowFeedbackModal(g.nw.BLOCK_USER, () => {
                    (0, i.ZDy)(async () => {
                        let { default: e } = await n.e('87995').then(n.bind(n, 180970));
                        return (t) => (0, r.jsx)(e, b({}, t));
                    });
                });
            });
    }
}
let I = new S();
