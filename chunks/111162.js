"use strict";
let i, r, s, a;
n.r(t), n.d(t, { default: () => N }), n(938796);
var o = n(158390),
    l = n(247775),
    d = n(17928),
    _ = n(636537),
    u = n(506774),
    c = n(228366),
    E = n(926919),
    h = n(927813),
    m = n(38405),
    f = n(652215);
let g =
        ((i = `${location.protocol}//${location.host}/__development/source_maps`),
        (r = null),
        (s = new o.A(5 * h.A.Millis.SECOND, +h.A.Millis.MINUTE, !0)),
        (a = () => {
            _.Bo.put({ url: i, headers: { Authorization: l.getToken() }, oldFormErrors: !0, rejectWithError: !0 }).then(
                (e) => {
                    401 === e.status || 403 === e.status
                        ? ((r = null), (0, E.x)({ sourceMapsEnabled: !1 }))
                        : 200 !== e.status
                          ? (r = setTimeout(a, s.fail()))
                          : (s.succeed(),
                            (r = setTimeout(a, e.body.sourceMapCookieTTLSeconds * h.A.Millis.SECOND * 0.75)));
                },
                () => {
                    r = setTimeout(a, s.fail());
                },
            );
        }),
        {
            set: (e) => {
                e !== (null != r) &&
                    (e
                        ? (r = setTimeout(a, 0))
                        : (clearTimeout(r),
                          (r = null),
                          _.Bo.del({
                              url: i,
                              headers: { Authorization: l.getToken() },
                              oldFormErrors: !0,
                              rejectWithError: !0,
                          })));
            },
        }),
    p = "DeveloperOptionsStore",
    A = {
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
    I = { ...A };
function T(e) {
    (I = { ...A, ...I, ...e }), g.set(I.sourceMapsEnabled), u.w.set(p, I);
}
class S extends d.Ay.Store {
    static displayName = "DeveloperOptionsStore";
    initialize() {
        let e = u.w.get(p);
        null != e && (I = { ...A, ...e });
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
}
let N = new S(c.h, {
    LOGOUT: function (e) {
        T(A);
    },
    CONNECTION_OPEN: function (e) {
        let t = ((e.user.flags ?? 0) & f.nhx.STAFF) === f.nhx.STAFF,
            n = t || null != e.user.personal_connection_id;
        t && g.set(I.sourceMapsEnabled), m.A.setTags({ isStaff: n.toString() });
    },
    DEVELOPER_OPTIONS_UPDATE_SETTINGS: function (e) {
        let { settings: t } = e;
        T(t);
    },
});
