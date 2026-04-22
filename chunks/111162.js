"use strict";
let r, i, s, a;
n.r(t), n.d(t, { default: () => y }), n(938796);
var o = n(158390),
    l = n(247775),
    u = n(311907),
    d = n(562465),
    c = n(506774),
    _ = n(73153),
    f = n(926919),
    E = n(927813),
    h = n(728458),
    p = n(652215);
let m =
        ((r = `${location.protocol}//${location.host}/__development/source_maps`),
        (i = null),
        (s = new o.A(5 * E.A.Millis.SECOND, +E.A.Millis.MINUTE, !0)),
        (a = () => {
            d.Bo.put({ url: r, headers: { Authorization: l.getToken() }, oldFormErrors: !0, rejectWithError: !0 }).then(
                (e) => {
                    401 === e.status || 403 === e.status
                        ? ((i = null), (0, f.x)({ sourceMapsEnabled: !1 }))
                        : 200 !== e.status
                          ? (i = setTimeout(a, s.fail()))
                          : (s.succeed(),
                            (i = setTimeout(a, e.body.sourceMapCookieTTLSeconds * E.A.Millis.SECOND * 0.75)));
                },
                () => {
                    i = setTimeout(a, s.fail());
                },
            );
        }),
        {
            set: (e) => {
                e !== (null != i) &&
                    (e
                        ? (i = setTimeout(a, 0))
                        : (clearTimeout(i),
                          (i = null),
                          d.Bo.del({
                              url: r,
                              headers: { Authorization: l.getToken() },
                              oldFormErrors: !0,
                              rejectWithError: !0,
                          })));
            },
        }),
    g = "DeveloperOptionsStore",
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
    (I = { ...A, ...I, ...e }), m.set(I.sourceMapsEnabled), c.w.set(g, I);
}
class S extends u.Ay.Store {
    static displayName = "DeveloperOptionsStore";
    initialize() {
        let e = c.w.get(g);
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
let y = new S(_.h, {
    LOGOUT: function (e) {
        T(A);
    },
    CONNECTION_OPEN: function (e) {
        let t = ((e.user.flags ?? 0) & p.nhx.STAFF) === p.nhx.STAFF,
            n = t || null != e.user.personal_connection_id;
        t && m.set(I.sourceMapsEnabled), h.A.setTags({ isStaff: n.toString() });
    },
    DEVELOPER_OPTIONS_UPDATE_SETTINGS: function (e) {
        let { settings: t } = e;
        T(t);
    },
});
