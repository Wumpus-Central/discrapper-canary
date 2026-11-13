n.d(t, { A: () => D });
var i = n(477900);
n(582128);
var r = n(192308),
    a = n(231723),
    s = n(969151),
    l = n(587895),
    o = n(652896),
    d = n(834757),
    c = n(869146),
    u = n(46653),
    _ = n(734057),
    E = n(290863),
    A = n(495867),
    f = n(753181),
    h = n(435558),
    I = n(506774),
    p = n(439372),
    m = n(891540),
    T = n(253932),
    g = n(409181),
    S = n(881520),
    N = n(670455);
function C(e) {
    let t = T.Yt.getSetting()[e.feedbackType]?.optOutExpiryTime,
        n = null != t && !Number.isNaN(t) && Date.now() < t,
        i = !m.A.hasHotspot(e.hotspot);
    return (
        i &&
            !n &&
            T.Yt.updateSetting((t) => ({ ...t, [e.feedbackType]: { ...t[e.feedbackType], optOutExpiryTime: N.fs } })),
        !n && !i
    );
}
function O(e) {
    return Math.random() < e.chance;
}
function R(e) {
    for (let t of Object.values(g.u).filter((t) => {
        let { group: n } = t;
        return n === e.group;
    }))
        if (
            !(function (e, t) {
                let n,
                    i = T.Yt.getSetting()[t.feedbackType]?.lastImpressionTime;
                return (
                    (null == i || Number.isNaN(i)) &&
                        null != t.storageKey &&
                        (null == (n = I.w.get(t.storageKey) ?? void 0) ||
                            Number.isNaN(n) ||
                            T.Yt.updateSetting((e) => ({
                                ...e,
                                [t.feedbackType]: { ...e[t.feedbackType], lastImpressionTime: n },
                            }))),
                    ((0, h.max)([i, n]) ?? 0) + e.cooldown < Date.now()
                );
            })(e, t)
        )
            return !1;
    return !0;
}
class L extends p.A {
    feedbackTypeToShow = null;
    possiblyShowFeedbackModal(e, t, n) {
        !(function (e) {
            if (__OVERLAY__) return !1;
            let t = S.A.getFeedbackConfig(e) ?? g.u[e],
                n = t.eligibilityChecks ?? [];
            return [O, C, R].every((e) => e(t)) && n.every((e) => e(t));
        })(e) ||
        (null != this.feedbackTypeToShow && N.uf[this.feedbackTypeToShow] < N.uf[e])
            ? n?.()
            : ((this.feedbackTypeToShow = e), this.showFeedbackModalDebounced(t, n));
    }
    showFeedbackModalDebounced = (0, h.debounce)((e, t) => {
        if (null != this.feedbackTypeToShow) {
            var n;
            ((n = this.feedbackTypeToShow),
                T.Yt.updateSetting((e) => ({ ...e, [n]: { ...e[n], lastImpressionTime: Date.now() } })),
                (this.feedbackTypeToShow = null),
                e());
        } else t?.();
    }, 200);
}
var y = n(652215);
let D = new (class extends L {
    actions = {
        VOICE_CHANNEL_SHOW_FEEDBACK: (e) => this.handleVoiceChannelFeedback(e),
        STREAM_CLOSE: (e) => this.handleStreamClose(e),
        VIDEO_BACKGROUND_SHOW_FEEDBACK: (e) => this.handleVideoBackgroundShowFeedback(e),
        EMBEDDED_ACTIVITY_CLOSE: (e) => this.handleActivityClose(e),
        IN_APP_REPORTS_SHOW_FEEDBACK: (e) => this.handleInAppReportsFeedback(e),
    };
    handleVoiceChannelFeedback = (e) => {
        let { analyticsData: t } = e;
        this.possiblyShowFeedbackModal(N.MW.VOICE, () => {
            (0, r.mM)(async () => {
                let { default: e } = await Promise.all([
                    n.e(142753),
                    n.e(415695),
                    n.e(570385),
                    n.e(36781),
                    n.e(713710),
                    n.e(268582),
                    n.e(314243),
                    n.e(161379),
                    n.e(776750),
                    n.e(346102),
                    n.e(139032),
                    n.e(155925),
                    n.e(988295),
                    n.e(137381),
                    n.e(259375),
                    n.e(364174),
                ]).then(n.bind(n, 9501));
                return (n) => (0, i.jsx)(e, { ...n, analyticsData: t });
            });
        });
    };
    handleStreamClose = (e) => {
        let { streamKey: t, canShowFeedback: a } = e,
            s = (0, o.Iy)(t),
            l = (0, d.Ee)(s, E.A),
            c = f.A.getVideoStats(t) ?? {},
            _ = {
                media_session_id: f.A.getMediaSessionId(t),
                rtc_connection_id: f.A.getRtcConnectionId(t),
                stream_region: f.A.getRegion(t),
                max_viewers: f.A.getMaxViewers(t),
                parent_media_session_id: f.A.getRTCConnection(t)?.parentMediaSessionId,
                ...c,
            };
        a &&
            this.possiblyShowFeedbackModal(N.MW.STREAM, () => {
                (0, r.mM)(async () => {
                    let { default: e } = await Promise.all([
                        n.e(142753),
                        n.e(415695),
                        n.e(570385),
                        n.e(36781),
                        n.e(713710),
                        n.e(268582),
                        n.e(314243),
                        n.e(161379),
                        n.e(776750),
                        n.e(346102),
                        n.e(139032),
                        n.e(155925),
                        n.e(988295),
                        n.e(137381),
                        n.e(259375),
                        n.e(617171),
                        n.e(862767),
                    ]).then(n.bind(n, 218738));
                    return (t) =>
                        (0, i.jsx)(e, {
                            stream: s,
                            streamApplication: l,
                            isStreamer: s.ownerId === u.default.getId(),
                            ...t,
                            analyticsData: _,
                        });
                });
            });
    };
    handleVideoBackgroundShowFeedback = (e) => {
        let { analyticsData: t } = e;
        this.possiblyShowFeedbackModal(N.MW.VIDEO_BACKGROUND, () => {
            (0, r.mM)(async () => {
                let { default: e } = await Promise.all([
                    n.e(142753),
                    n.e(415695),
                    n.e(570385),
                    n.e(36781),
                    n.e(268582),
                    n.e(314243),
                    n.e(161379),
                    n.e(776750),
                    n.e(346102),
                    n.e(139032),
                    n.e(155925),
                    n.e(988295),
                    n.e(137381),
                    n.e(326484),
                    n.e(319197),
                ]).then(n.bind(n, 932140));
                return (n) => (0, i.jsx)(e, { ...n, analyticsData: t });
            });
        });
    };
    handleActivityClose = (e) => {
        let { applicationId: t, location: o, showFeedback: d } = e,
            u = l.A.getApplication(t),
            E = (0, s.H)(o),
            f = _.A.getChannel(E),
            h = { rtc_connection_id: A.A.getRTCConnectionId(), media_session_id: A.A.getMediaSessionId() },
            I = c.A.getWindowOpen(y.MLl.CHANNEL_CALL_POPOUT) ? "popout" : a.SY;
        null != u &&
            d &&
            this.possiblyShowFeedbackModal(N.MW.ACTIVITY, () => {
                (0, r.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e(142753),
                            n.e(415695),
                            n.e(570385),
                            n.e(36781),
                            n.e(268582),
                            n.e(314243),
                            n.e(161379),
                            n.e(776750),
                            n.e(346102),
                            n.e(139032),
                            n.e(155925),
                            n.e(988295),
                            n.e(137381),
                            n.e(326484),
                            n.e(995068),
                        ]).then(n.bind(n, 121847));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                activityApplication: u,
                                channel: f,
                                embeddedActivityLocation: o,
                                analyticsData: h,
                            });
                    },
                    { contextKey: I },
                );
            });
    };
    handleInAppReportsFeedback = (e) => {
        let { reportId: t, reportType: a } = e;
        this.possiblyShowFeedbackModal(N.MW.IN_APP_REPORTS, () => {
            (0, r.mM)(async () => {
                let { default: e } = await Promise.all([
                    n.e(142753),
                    n.e(415695),
                    n.e(570385),
                    n.e(36781),
                    n.e(268582),
                    n.e(314243),
                    n.e(161379),
                    n.e(776750),
                    n.e(346102),
                    n.e(139032),
                    n.e(155925),
                    n.e(988295),
                    n.e(137381),
                    n.e(326484),
                    n.e(87591),
                ]).then(n.bind(n, 555738));
                return (n) => (0, i.jsx)(e, { ...n, reportId: t, reportType: a });
            });
        });
    };
})();
