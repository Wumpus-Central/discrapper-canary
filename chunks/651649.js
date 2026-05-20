"use strict";
n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(231723),
    a = n(969151),
    o = n(587895),
    l = n(652896),
    u = n(834757),
    c = n(869146),
    d = n(495544),
    _ = n(734057),
    f = n(290863),
    h = n(763827),
    p = n(116956),
    E = n(37962),
    m = n(670455),
    g = n(652215);
class A extends E.A {
    actions = {
        VOICE_CHANNEL_SHOW_FEEDBACK: (e) => this.handleVoiceChannelFeedback(e),
        STREAM_CLOSE: (e) => this.handleStreamClose(e),
        VIDEO_BACKGROUND_SHOW_FEEDBACK: (e) => this.handleVideoBackgroundShowFeedback(e),
        EMBEDDED_ACTIVITY_CLOSE: (e) => this.handleActivityClose(e),
        IN_APP_REPORTS_SHOW_FEEDBACK: (e) => this.handleInAppReportsFeedback(e),
    };
    handleVoiceChannelFeedback = (e) => {
        let { analyticsData: t } = e;
        this.possiblyShowFeedbackModal(m.MW.VOICE, () => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("8802"),
                    n.e("18320"),
                    n.e("56030"),
                    n.e("67829"),
                    n.e("61379"),
                    n.e("8891"),
                    n.e("18413"),
                    n.e("22255"),
                    n.e("55925"),
                    n.e("85033"),
                    n.e("80009"),
                    n.e("31389"),
                ]).then(n.bind(n, 492));
                return (n) => (0, i.jsx)(e, { ...n, analyticsData: t });
            });
        });
    };
    handleStreamClose = (e) => {
        let { streamKey: t, canShowFeedback: s } = e,
            a = (0, l.Iy)(t),
            o = (0, u.Ee)(a, f.A),
            c = p.A.getVideoStats(t) ?? {},
            _ = {
                media_session_id: p.A.getMediaSessionId(t),
                rtc_connection_id: p.A.getRtcConnectionId(t),
                stream_region: p.A.getRegion(t),
                max_viewers: p.A.getMaxViewers(t),
                parent_media_session_id: p.A.getRTCConnection(t)?.parentMediaSessionId,
                ...c,
            };
        s &&
            this.possiblyShowFeedbackModal(m.MW.STREAM, () => {
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("8802"),
                        n.e("18320"),
                        n.e("56030"),
                        n.e("67829"),
                        n.e("61379"),
                        n.e("8891"),
                        n.e("18413"),
                        n.e("22255"),
                        n.e("55925"),
                        n.e("85033"),
                        n.e("80009"),
                        n.e("17171"),
                        n.e("62767"),
                    ]).then(n.bind(n, 218738));
                    return (t) =>
                        (0, i.jsx)(e, {
                            stream: a,
                            streamApplication: o,
                            isStreamer: a.ownerId === d.default.getId(),
                            ...t,
                            analyticsData: _,
                        });
                });
            });
    };
    handleVideoBackgroundShowFeedback = (e) => {
        let { analyticsData: t } = e;
        this.possiblyShowFeedbackModal(m.MW.VIDEO_BACKGROUND, () => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("8802"),
                    n.e("18320"),
                    n.e("56030"),
                    n.e("61379"),
                    n.e("8891"),
                    n.e("18413"),
                    n.e("22255"),
                    n.e("55925"),
                    n.e("85033"),
                    n.e("26484"),
                    n.e("19197"),
                ]).then(n.bind(n, 932140));
                return (n) => (0, i.jsx)(e, { ...n, analyticsData: t });
            });
        });
    };
    handleActivityClose = (e) => {
        let { applicationId: t, location: l, showFeedback: u } = e,
            d = o.A.getApplication(t),
            f = (0, a.H)(l),
            p = _.A.getChannel(f),
            E = { rtc_connection_id: h.A.getRTCConnectionId(), media_session_id: h.A.getMediaSessionId() },
            A = c.A.getWindowOpen(g.MLl.CHANNEL_CALL_POPOUT) ? s.KX : s.SY;
        null != d &&
            u &&
            this.possiblyShowFeedbackModal(m.MW.ACTIVITY, () => {
                (0, r.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("8802"),
                            n.e("18320"),
                            n.e("56030"),
                            n.e("61379"),
                            n.e("8891"),
                            n.e("18413"),
                            n.e("22255"),
                            n.e("55925"),
                            n.e("85033"),
                            n.e("26484"),
                            n.e("43822"),
                        ]).then(n.bind(n, 751901));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                activityApplication: d,
                                channel: p,
                                embeddedActivityLocation: l,
                                analyticsData: E,
                            });
                    },
                    { contextKey: A },
                );
            });
    };
    handleInAppReportsFeedback = (e) => {
        let { reportId: t, reportType: s } = e;
        this.possiblyShowFeedbackModal(m.MW.IN_APP_REPORTS, () => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("8802"),
                    n.e("18320"),
                    n.e("56030"),
                    n.e("61379"),
                    n.e("8891"),
                    n.e("18413"),
                    n.e("22255"),
                    n.e("55925"),
                    n.e("85033"),
                    n.e("26484"),
                    n.e("66897"),
                ]).then(n.bind(n, 707688));
                return (n) => (0, i.jsx)(e, { ...n, reportId: t, reportType: s });
            });
        });
    };
}
let I = new A();
