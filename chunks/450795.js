var r = n(990547),
    i = n(570140),
    a = n(844889),
    o = n(314897),
    s = n(981631);
(0, r.analyticsTrackingStoreMaker)({
    dispatcher: i.Z,
    actionHandler: {
        CONNECTION_OPEN: (e) => r.AnalyticsActionHandlers.handleConnectionOpen(e),
        OVERLAY_INITIALIZE: (e) => r.AnalyticsActionHandlers.handleConnectionOpen(e),
        CURRENT_USER_UPDATE: (e) => r.AnalyticsActionHandlers.handleConnectionOpen(e),
        CONNECTION_CLOSED: () => r.AnalyticsActionHandlers.handleConnectionClosed(),
        FINGERPRINT: () => r.AnalyticsActionHandlers.handleFingerprint(),
        TRACK: (e) => r.AnalyticsActionHandlers.handleTrack(e)
    },
    TRACKING_URL: s.ANM.TRACK,
    waitFor: [o.default],
    getFingerprint: o.default.getFingerprint,
    getSessionId: () => (0, a.Gg)().then((e) => ({ sessionId: null == e ? void 0 : e.uuid }))
});
