"use strict";
n.r(t), n.d(t, { default: () => S }), n(938796);
var i = n(158390),
    r = n(247775),
    a = n(17928),
    s = n(636537),
    l = n(506774),
    o = n(228366),
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
    I = { ...h },
    f = "DeveloperOptionsRoutingKey",
    p = [];
function T(e) {
    (I = { ...h, ...I, ...e }), E.set(I.sourceMapsEnabled), l.w.set(A, I);
}
function m(e) {
    (p = e), l.w.set(f, p);
}
class g extends a.Ay.Store {
    static displayName = "DeveloperOptionsStore";
    initialize() {
        let e = l.w.get(A);
        null != e && (I = { ...h, ...e });
        let t = l.w.get(f);
        null != t && (p = t);
    }
    get isTracingRequests() {
        return I.trace;
    }
    get isForcedCanary() {
        return I.canary;
    }
    get isLoggingGatewayEvents() {
        return I.logGatewayEvents;
    }
    get isLoggingOverlayEvents() {
        return I.logOverlayEvents;
    }
    get isLoggingAnalyticsEvents() {
        return I.logAnalyticsEvents;
    }
    get isAxeEnabled() {
        return I.axeEnabled;
    }
    get cssDebuggingEnabled() {
        return I.cssDebuggingEnabled;
    }
    get layoutDebuggingEnabled() {
        return I.layoutDebuggingEnabled;
    }
    get sourceMapsEnabled() {
        return I.sourceMapsEnabled;
    }
    get isBugReporterEnabled() {
        return I.bugReporterEnabled;
    }
    get isIdleStatusIndicatorEnabled() {
        return I.idleStatusIndicatorEnabled;
    }
    get onlyShowPreviewAppCollections() {
        return I.onlyShowPreviewAppCollections;
    }
    get disableAppCollectionsCache() {
        return I.disableAppCollectionsCache;
    }
    get isStreamInfoOverlayEnabled() {
        return I.isStreamInfoOverlayEnabled;
    }
    get preventPopoutClose() {
        return I.preventPopoutClose;
    }
    get logKeyboardMismatches() {
        return I.logKeyboardMismatches;
    }
    get alertStartupMetrics() {
        return I.alertStartupMetrics;
    }
    get isLoggingQuestEvents() {
        return I.logQuestEvents;
    }
    getDebugOptionsHeaderValue() {
        return (
            Object.keys(I).map((e) => I[e]),
            Object.keys(I)
                .filter((e) => I[e])
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
        T(h), m([]);
    },
    CONNECTION_OPEN: function (e) {
        let t = ((e.user.flags ?? 0) & _.nhx.STAFF) === _.nhx.STAFF,
            n = t || null != e.user.personal_connection_id;
        t && E.set(I.sourceMapsEnabled), u.A.setTags({ isStaff: n.toString() });
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
