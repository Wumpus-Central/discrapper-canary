n.d(t, {
    A: () => S,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(735438),
    a = n(397927),
    s = n(969151),
    o = n(587895),
    l = n(652896),
    c = n(834757),
    u = n(869146),
    d = n(961350),
    f = n(734057),
    p = n(290863),
    _ = n(383501),
    h = n(162605),
    m = n(37962),
    g = n(670455),
    E = n(652215);

function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
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

function A(e, t) {
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
class v extends m.A {
    constructor(...e) {
        super(...e),
            b(this, "actions", {
                VOICE_CHANNEL_SHOW_FEEDBACK: (e) => this.handleVoiceChannelFeedback(e),
                STREAM_CLOSE: (e) => this.handleStreamClose(e),
                VIDEO_BACKGROUND_SHOW_FEEDBACK: (e) => this.handleVideoBackgroundShowFeedback(e),
                EMBEDDED_ACTIVITY_CLOSE: (e) => this.handleActivityClose(e),
                IN_APP_REPORTS_SHOW_FEEDBACK: (e) => this.handleInAppReportsFeedback(e),
                BLOCK_USER_SHOW_FEEDBACK: () => this.handleBlockUserFeedback(),
                AGE_VERIFICATION_SHOW_FEEDBACK: (e) => this.handleAgeVerificationFeedback(e),
            }),
            b(this, "handleVoiceChannelFeedback", (e) => {
                let { analyticsData: t } = e;
                (0, i.sum)(t.duration_speaking_voice_filter_ms) >= 5e3 &&
                    this.possiblyShowFeedbackModal(g.MW.VOICE_FILTER, () => {
                        (0, a.mMO)(async () => {
                            let { VoiceFilterFeedbackModal: e } = await Promise.all([
                                n.e("16833"),
                                n.e("26484"),
                                n.e("51997"),
                            ]).then(n.bind(n, 455071));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    A(y({}, n), {
                                        analyticsData: t,
                                    }),
                                );
                        });
                    }),
                    this.possiblyShowFeedbackModal(g.MW.VOICE, () => {
                        (0, a.mMO)(async () => {
                            let { default: e } = await Promise.all([n.e("16833"), n.e("49911"), n.e("36278")]).then(
                                n.bind(n, 302252),
                            );
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    A(y({}, n), {
                                        analyticsData: t,
                                    }),
                                );
                        });
                    });
            }),
            b(this, "handleStreamClose", (e) => {
                var t, i;
                let { streamKey: s, canShowFeedback: o } = e,
                    u = (0, l.Iy)(s),
                    f = (0, c.Ee)(u, p.A),
                    _ = null != (t = h.A.getVideoStats(s)) ? t : {},
                    m = y(
                        {
                            media_session_id: h.A.getMediaSessionId(s),
                            rtc_connection_id: h.A.getRtcConnectionId(s),
                            stream_region: h.A.getRegion(s),
                            max_viewers: h.A.getMaxViewers(s),
                            parent_media_session_id:
                                null == (i = h.A.getRTCConnection(s)) ? void 0 : i.parentMediaSessionId,
                        },
                        _,
                    );
                o &&
                    this.possiblyShowFeedbackModal(g.MW.STREAM, () => {
                        (0, a.mMO)(async () => {
                            let { default: e } = await Promise.all([n.e("16833"), n.e("49911"), n.e("80760")]).then(
                                n.bind(n, 218738),
                            );
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    A(
                                        y(
                                            {
                                                stream: u,
                                                streamApplication: f,
                                                isStreamer: u.ownerId === d.default.getId(),
                                            },
                                            t,
                                        ),
                                        {
                                            analyticsData: m,
                                        },
                                    ),
                                );
                        });
                    });
            }),
            b(this, "handleVideoBackgroundShowFeedback", (e) => {
                let { analyticsData: t } = e;
                this.possiblyShowFeedbackModal(g.MW.VIDEO_BACKGROUND, () => {
                    (0, a.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("23866")]).then(
                            n.bind(n, 932140),
                        );
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                A(y({}, n), {
                                    analyticsData: t,
                                }),
                            );
                    });
                });
            }),
            b(this, "handleActivityClose", (e) => {
                let { applicationId: t, location: i, showFeedback: l } = e,
                    c = o.A.getApplication(t),
                    d = (0, s.H)(i),
                    p = f.A.getChannel(d),
                    h = {
                        rtc_connection_id: _.A.getRTCConnectionId(),
                        media_session_id: _.A.getMediaSessionId(),
                    },
                    m = u.A.getWindowOpen(E.MLl.CHANNEL_CALL_POPOUT) ? a.KX8 : a.SYi;
                null != c &&
                    l &&
                    this.possiblyShowFeedbackModal(g.MW.ACTIVITY, () => {
                        (0, a.mMO)(
                            async () => {
                                let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("24921")]).then(
                                    n.bind(n, 969611),
                                );
                                return (t) =>
                                    (0, r.jsx)(
                                        e,
                                        A(y({}, t), {
                                            activityApplication: c,
                                            channel: p,
                                            embeddedActivityLocation: i,
                                            analyticsData: h,
                                        }),
                                    );
                            },
                            {
                                contextKey: m,
                            },
                        );
                    });
            }),
            b(this, "handleInAppReportsFeedback", (e) => {
                let { reportId: t, reportType: i } = e;
                this.possiblyShowFeedbackModal(g.MW.IN_APP_REPORTS, () => {
                    (0, a.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("94759")]).then(
                            n.bind(n, 255189),
                        );
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                A(y({}, n), {
                                    reportId: t,
                                    reportType: i,
                                }),
                            );
                    });
                });
            }),
            b(this, "handleBlockUserFeedback", () => {
                this.possiblyShowFeedbackModal(g.MW.BLOCK_USER, () => {
                    (0, a.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("38008")]).then(
                            n.bind(n, 307750),
                        );
                        return (t) => (0, r.jsx)(e, y({}, t));
                    });
                });
            }),
            b(this, "handleAgeVerificationFeedback", (e) => {
                let { dismissibleContent: t } = e;
                this.possiblyShowFeedbackModal(g.MW.AGE_VERIFICATION, () => {
                    (0, a.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("13146")]).then(
                            n.bind(n, 949004),
                        );
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                y(
                                    {
                                        dismissibleContent: t,
                                    },
                                    n,
                                ),
                            );
                    });
                });
            });
    }
}
let S = new v();
