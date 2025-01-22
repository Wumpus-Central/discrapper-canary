var i = r(990547),
    a = r(570140),
    o = r(844889),
    s = r(314897),
    l = r(981631);
(0, i.analyticsTrackingStoreMaker)({
    dispatcher: a.Z,
    actionHandler: {
        CONNECTION_OPEN: (e) => i.AnalyticsActionHandlers.handleConnectionOpen(e),
        OVERLAY_INITIALIZE: (e) => i.AnalyticsActionHandlers.handleConnectionOpen(e),
        CURRENT_USER_UPDATE: (e) => i.AnalyticsActionHandlers.handleConnectionOpen(e),
        CONNECTION_CLOSED: () => i.AnalyticsActionHandlers.handleConnectionClosed(),
        FINGERPRINT: () => i.AnalyticsActionHandlers.handleFingerprint(),
        TRACK: (e) => i.AnalyticsActionHandlers.handleTrack(e)
    },
    TRACKING_URL: l.ANM.TRACK,
    waitFor: [s.default],
    getFingerprint: s.default.getFingerprint,
    getSessionId: () => (0, o.Gg)().then((e) => ({ sessionId: null == e ? void 0 : e.uuid }))
});
