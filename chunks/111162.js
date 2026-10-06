(n.r(t), n.d(t, { default: () => S }), n(938796));
var i = n(158390),
    r = n(247775),
    a = n(17928),
    s = n(636537),
    l = n(506774),
    o = n(73153),
    d = n(926919),
    c = n(927813),
    u = n(38405),
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
    h = {
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
    f = { ...h },
    I = "DeveloperOptionsRoutingKey",
    p = [];
function T(e) {
    ((f = { ...h, ...f, ...e }), E.set(f.sourceMapsEnabled), l.w.set(A, f));
}
function m(e) {
    ((p = e), l.w.set(I, p));
}
class g extends a.Ay.Store {
    static displayName = "DeveloperOptionsStore";
    initialize() {
        let e = l.w.get(A);
        null != e && (f = { ...h, ...e });
        let t = l.w.get(I);
        null != t && (p = t);
    }
    get isTracingRequests() {
        return f.trace;
    }
    get isForcedCanary() {
        return f.canary;
    }
    get isLoggingGatewayEvents() {
        return f.logGatewayEvents;
    }
    get isLoggingOverlayEvents() {
        return f.logOverlayEvents;
    }
    get isLoggingAnalyticsEvents() {
        return f.logAnalyticsEvents;
    }
    get isLoggingInteractionTTIAnalytics() {
        return f.logInteractionTTIAnalytics;
    }
    get isAxeEnabled() {
        return f.axeEnabled;
    }
    get cssDebuggingEnabled() {
        return f.cssDebuggingEnabled;
    }
    get layoutDebuggingEnabled() {
        return f.layoutDebuggingEnabled;
    }
    get sourceMapsEnabled() {
        return f.sourceMapsEnabled;
    }
    get isBugReporterEnabled() {
        return f.bugReporterEnabled;
    }
    get isIdleStatusIndicatorEnabled() {
        return f.idleStatusIndicatorEnabled;
    }
    get onlyShowPreviewAppCollections() {
        return f.onlyShowPreviewAppCollections;
    }
    get disableAppCollectionsCache() {
        return f.disableAppCollectionsCache;
    }
    get isStreamInfoOverlayEnabled() {
        return f.isStreamInfoOverlayEnabled;
    }
    get preventPopoutClose() {
        return f.preventPopoutClose;
    }
    get logKeyboardMismatches() {
        return f.logKeyboardMismatches;
    }
    get alertStartupMetrics() {
        return f.alertStartupMetrics;
    }
    get isLoggingQuestEvents() {
        return f.logQuestEvents;
    }
    getDebugOptionsHeaderValue() {
        return (
            Object.keys(f).map((e) => f[e]),
            Object.keys(f)
                .filter((e) => f[e])
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
let S = new g(o.h, {
    LOGOUT: function (e) {
        (T(h), m([]));
    },
    CONNECTION_OPEN: function (e) {
        let t = ((e.user.flags ?? 0) & _.nhx.STAFF) === _.nhx.STAFF,
            n = t || null != e.user.personal_connection_id;
        (t && E.set(f.sourceMapsEnabled), u.A.setTags({ isStaff: n.toString() }));
    },
    DEVELOPER_OPTIONS_UPDATE_SETTINGS: function (e) {
        let { settings: t } = e;
        T(t);
    },
    DEVELOPER_OPTIONS_SET_ROUTING_KEY: function (e) {
        let { tags: t } = e;
        m(t);
    },
});
