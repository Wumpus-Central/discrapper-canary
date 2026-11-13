n(938796);
var i = n(158390),
    r = n(247775),
    a = n(855986),
    s = n(620632),
    l = n(506774),
    o = n(73153),
    d = n(926919),
    c = n(927813),
    u = n(856383),
    _ = n(652215);
let E = (() => {
        let e = `${location.protocol}//${location.host}/__development/source_maps`,
            t = null,
            n = new i.A(5 * c.A.Millis.SECOND, +c.A.Millis.MINUTE, !0);
        function a() {
            s.Bo.put({ url: e, headers: { Authorization: r.getToken() }, oldFormErrors: !0, rejectWithError: !0 }).then(
                (e) => {
                    401 === e.status || 403 === e.status
                        ? ((t = null), (0, d.x)({ sourceMapsEnabled: !1 }))
                        : 200 !== e.status
                          ? (t = setTimeout(a, n.fail()))
                          : (n.succeed(),
                            (t = setTimeout(a, e.body.sourceMapCookieTTLSeconds * c.A.Millis.SECOND * 0.75)));
                },
                () => {
                    t = setTimeout(a, n.fail());
                },
            );
        }
        return {
            set: function (n) {
                n !== (null != t) &&
                    (n
                        ? (t = setTimeout(a, 0))
                        : (clearTimeout(t),
                          (t = null),
                          s.Bo.del({
                              url: e,
                              headers: { Authorization: r.getToken() },
                              oldFormErrors: !0,
                              rejectWithError: !0,
                          })));
            },
        };
    })(),
    A = "DeveloperOptionsStore",
    f = {
        trace: !1,
        canary: !1,
        logGatewayEvents: !1,
        logOverlayEvents: !1,
        logAnalyticsEvents: !1,
        logInteractionTTIAnalytics: !1,
        sourceMapsEnabled: !1,
        axeEnabled: !1,
        cssDebuggingEnabled: !1,
        layoutDebuggingEnabled: !1,
        bugReporterEnabled: !0,
        idleStatusIndicatorEnabled: !1,
        onlyShowPreviewAppCollections: !1,
        disableAppCollectionsCache: !1,
        isStreamInfoOverlayEnabled: !1,
        preventPopoutClose: !1,
        logKeyboardMismatches: !1,
        alertStartupMetrics: !1,
        logQuestEvents: !1,
    },
    h = { ...f },
    I = "DeveloperOptionsRoutingKey",
    p = [];
function m(e) {
    ((h = { ...f, ...h, ...e }), E.set(h.sourceMapsEnabled), l.w.set(A, h));
}
function g(e) {
    ((p = e), l.w.set(I, p));
}
class T extends a.Ay.Store {
    static displayName = "DeveloperOptionsStore";
    initialize() {
        let e = l.w.get(A);
        null != e && (h = { ...f, ...e });
        let t = l.w.get(I);
        null != t && (p = t);
    }
    get isTracingRequests() {
        return h.trace;
    }
    get isForcedCanary() {
        return h.canary;
    }
    get isLoggingGatewayEvents() {
        return h.logGatewayEvents;
    }
    get isLoggingOverlayEvents() {
        return h.logOverlayEvents;
    }
    get isLoggingAnalyticsEvents() {
        return h.logAnalyticsEvents;
    }
    get isLoggingInteractionTTIAnalytics() {
        return h.logInteractionTTIAnalytics;
    }
    get isAxeEnabled() {
        return h.axeEnabled;
    }
    get cssDebuggingEnabled() {
        return h.cssDebuggingEnabled;
    }
    get layoutDebuggingEnabled() {
        return h.layoutDebuggingEnabled;
    }
    get sourceMapsEnabled() {
        return h.sourceMapsEnabled;
    }
    get isBugReporterEnabled() {
        return h.bugReporterEnabled;
    }
    get isIdleStatusIndicatorEnabled() {
        return h.idleStatusIndicatorEnabled;
    }
    get onlyShowPreviewAppCollections() {
        return h.onlyShowPreviewAppCollections;
    }
    get disableAppCollectionsCache() {
        return h.disableAppCollectionsCache;
    }
    get isStreamInfoOverlayEnabled() {
        return h.isStreamInfoOverlayEnabled;
    }
    get preventPopoutClose() {
        return h.preventPopoutClose;
    }
    get logKeyboardMismatches() {
        return h.logKeyboardMismatches;
    }
    get alertStartupMetrics() {
        return h.alertStartupMetrics;
    }
    get isLoggingQuestEvents() {
        return h.logQuestEvents;
    }
    getDebugOptionsHeaderValue() {
        return (
            Object.keys(h).map((e) => h[e]),
            Object.keys(h)
                .filter((e) => h[e])
                .join(",")
        );
    }
    get routingKeyTags() {
        return p;
    }
    getRoutingKeyHeaderValue() {
        return 0 === p.length ? null : p.join(",");
    }
}
let S = new T(o.h, {
    LOGOUT: function (e) {
        (m(f), g([]));
    },
    CONNECTION_OPEN: function (e) {
        let t = ((e.user.flags ?? 0) & _.nhx.STAFF) === _.nhx.STAFF,
            n = t || null != e.user.personal_connection_id;
        (t && E.set(h.sourceMapsEnabled), u.A.setTags({ isStaff: n.toString() }));
    },
    DEVELOPER_OPTIONS_UPDATE_SETTINGS: function (e) {
        let { settings: t } = e;
        m(t);
    },
    DEVELOPER_OPTIONS_SET_ROUTING_KEY: function (e) {
        let { tags: t } = e;
        g(t);
    },
});
n.d(t, {}, { default: S });
