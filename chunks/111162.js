n.r(t),
    n.d(t, {
        default: () => I,
    }),
    n(938796);
var r,
    i = n(158390),
    a = n(247775),
    s = n(311907),
    o = n(562465),
    l = n(506774),
    c = n(73153),
    u = n(926919),
    d = n(927813),
    f = n(728458),
    p = n(652215);

function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
let m = (() => {
        let e = "".concat(location.protocol, "//").concat(location.host, "/__development/source_maps"),
            t = null,
            n = new i.A(5 * d.A.Millis.SECOND, +d.A.Millis.MINUTE, !0),
            r = () => {
                o.Bo.put({
                    url: e,
                    headers: {
                        Authorization: a.getToken(),
                    },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(
                    (e) => {
                        401 === e.status || 403 === e.status
                            ? ((t = null),
                              (0, u.x)({
                                  sourceMapsEnabled: !1,
                              }))
                            : 200 !== e.status
                              ? (t = setTimeout(r, n.fail()))
                              : (n.succeed(),
                                (t = setTimeout(r, e.body.sourceMapCookieTTLSeconds * d.A.Millis.SECOND * 0.75)));
                    },
                    () => {
                        t = setTimeout(r, n.fail());
                    },
                );
            };
        return {
            set: (n) => {
                n !== (null != t) &&
                    (n
                        ? (t = setTimeout(r, 0))
                        : (clearTimeout(t),
                          (t = null),
                          o.Bo.del({
                              url: e,
                              headers: {
                                  Authorization: a.getToken(),
                              },
                              oldFormErrors: !0,
                              rejectWithError: !0,
                          })));
            },
        };
    })(),
    g = "DeveloperOptionsStore",
    E = {
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
    b = h({}, E);

function y(e) {
    (b = h({}, E, b, e)), m.set(b.sourceMapsEnabled), l.w.set(g, b);
}

function O(e) {
    let { settings: t } = e;
    y(t);
}

function A(e) {
    y(E);
}

function v(e) {
    var t;
    let n = ((null != (t = e.user.flags) ? t : 0) & p.nhx.STAFF) === p.nhx.STAFF,
        r = n || null != e.user.personal_connection_id;
    n && m.set(b.sourceMapsEnabled),
        f.A.setTags({
            isStaff: r.toString(),
        });
}
class S extends (r = s.Ay.Store) {
    initialize() {
        let e = l.w.get(g);
        null != e && (b = h({}, E, e));
    }
    get isTracingRequests() {
        return b.trace;
    }
    get isForcedCanary() {
        return b.canary;
    }
    get isLoggingGatewayEvents() {
        return b.logGatewayEvents;
    }
    get isLoggingOverlayEvents() {
        return b.logOverlayEvents;
    }
    get isLoggingAnalyticsEvents() {
        return b.logAnalyticsEvents;
    }
    get isAxeEnabled() {
        return b.axeEnabled;
    }
    get cssDebuggingEnabled() {
        return b.cssDebuggingEnabled;
    }
    get layoutDebuggingEnabled() {
        return b.layoutDebuggingEnabled;
    }
    get sourceMapsEnabled() {
        return b.sourceMapsEnabled;
    }
    get isBugReporterEnabled() {
        return b.bugReporterEnabled;
    }
    get isIdleStatusIndicatorEnabled() {
        return b.idleStatusIndicatorEnabled;
    }
    get onlyShowPreviewAppCollections() {
        return b.onlyShowPreviewAppCollections;
    }
    get disableAppCollectionsCache() {
        return b.disableAppCollectionsCache;
    }
    get isStreamInfoOverlayEnabled() {
        return b.isStreamInfoOverlayEnabled;
    }
    get preventPopoutClose() {
        return b.preventPopoutClose;
    }
    get logKeyboardMismatches() {
        return b.logKeyboardMismatches;
    }
    get alertStartupMetrics() {
        return b.alertStartupMetrics;
    }
    get personaForceFaeFail() {
        return b.personaForceFaeFail;
    }
    get personaForceIdVerificationFail() {
        return b.personaForceIdVerificationFail;
    }
    get personaDisableModularPilotTestTemplate() {
        return b.personaDisableModularPilotTestTemplate;
    }
    getDebugOptionsHeaderValue() {
        return (
            Object.keys(b).map((e) => b[e]),
            Object.keys(b)
                .filter((e) => b[e])
                .join(",")
        );
    }
}
_(S, "displayName", "DeveloperOptionsStore");
let I = new S(c.h, {
    LOGOUT: A,
    CONNECTION_OPEN: v,
    DEVELOPER_OPTIONS_UPDATE_SETTINGS: O,
});
