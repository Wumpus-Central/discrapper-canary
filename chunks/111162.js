"use strict";
n.r(t), n.d(t, { default: () => y }), n(938796);
var r = n(158390),
    i = n(247775),
    a = n(311907),
    s = n(562465),
    o = n(506774),
    l = n(73153),
    u = n(926919),
    c = n(927813),
    d = n(728458),
    _ = n(652215);
let f = (() => {
        let e = `${location.protocol}//${location.host}/__development/source_maps`,
            t = null,
            n = new r.A(5 * c.A.Millis.SECOND, +c.A.Millis.MINUTE, !0),
            a = () => {
                s.Bo.put({
                    url: e,
                    headers: { Authorization: i.getToken() },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(
                    (e) => {
                        401 === e.status || 403 === e.status
                            ? ((t = null), (0, u.x)({ sourceMapsEnabled: !1 }))
                            : 200 !== e.status
                              ? (t = setTimeout(a, n.fail()))
                              : (n.succeed(),
                                (t = setTimeout(a, e.body.sourceMapCookieTTLSeconds * c.A.Millis.SECOND * 0.75)));
                    },
                    () => {
                        t = setTimeout(a, n.fail());
                    },
                );
            };
        return {
            set: (n) => {
                n !== (null != t) &&
                    (n
                        ? (t = setTimeout(a, 0))
                        : (clearTimeout(t),
                          (t = null),
                          s.Bo.del({
                              url: e,
                              headers: { Authorization: i.getToken() },
                              oldFormErrors: !0,
                              rejectWithError: !0,
                          })));
            },
        };
    })(),
    p = "DeveloperOptionsStore",
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
        personaForceFaeFail: !1,
        personaForceIdVerificationFail: !1,
        personaDisableModularPilotTestTemplate: !1,
    },
    m = { ...h };
function g(e) {
    (m = { ...h, ...m, ...e }), f.set(m.sourceMapsEnabled), o.w.set(p, m);
}
function E(e) {
    let { settings: t } = e;
    g(t);
}
function A(e) {
    g(h);
}
function I(e) {
    let t = ((e.user.flags ?? 0) & _.nhx.STAFF) === _.nhx.STAFF,
        n = t || null != e.user.personal_connection_id;
    t && f.set(m.sourceMapsEnabled), d.A.setTags({ isStaff: n.toString() });
}
class T extends a.Ay.Store {
    static displayName = "DeveloperOptionsStore";
    initialize() {
        let e = o.w.get(p);
        null != e && (m = { ...h, ...e });
    }
    get isTracingRequests() {
        return m.trace;
    }
    get isForcedCanary() {
        return m.canary;
    }
    get isLoggingGatewayEvents() {
        return m.logGatewayEvents;
    }
    get isLoggingOverlayEvents() {
        return m.logOverlayEvents;
    }
    get isLoggingAnalyticsEvents() {
        return m.logAnalyticsEvents;
    }
    get isAxeEnabled() {
        return m.axeEnabled;
    }
    get cssDebuggingEnabled() {
        return m.cssDebuggingEnabled;
    }
    get layoutDebuggingEnabled() {
        return m.layoutDebuggingEnabled;
    }
    get sourceMapsEnabled() {
        return m.sourceMapsEnabled;
    }
    get isBugReporterEnabled() {
        return m.bugReporterEnabled;
    }
    get isIdleStatusIndicatorEnabled() {
        return m.idleStatusIndicatorEnabled;
    }
    get onlyShowPreviewAppCollections() {
        return m.onlyShowPreviewAppCollections;
    }
    get disableAppCollectionsCache() {
        return m.disableAppCollectionsCache;
    }
    get isStreamInfoOverlayEnabled() {
        return m.isStreamInfoOverlayEnabled;
    }
    get preventPopoutClose() {
        return m.preventPopoutClose;
    }
    get logKeyboardMismatches() {
        return m.logKeyboardMismatches;
    }
    get alertStartupMetrics() {
        return m.alertStartupMetrics;
    }
    get personaForceFaeFail() {
        return m.personaForceFaeFail;
    }
    get personaForceIdVerificationFail() {
        return m.personaForceIdVerificationFail;
    }
    get personaDisableModularPilotTestTemplate() {
        return m.personaDisableModularPilotTestTemplate;
    }
    getDebugOptionsHeaderValue() {
        return (
            Object.keys(m).map((e) => m[e]),
            Object.keys(m)
                .filter((e) => m[e])
                .join(",")
        );
    }
}
let y = new T(l.h, { LOGOUT: A, CONNECTION_OPEN: I, DEVELOPER_OPTIONS_UPDATE_SETTINGS: E });
