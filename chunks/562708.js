let i, r, a, s, l, o, d, c;
n.r(t),
    n.d(t, {
        encodeProperties: () => I,
        isThrottled: () => em,
        analyticsTrackingStoreMaker: () => Z,
        getOS: () => ed,
        SpanTtiNames: () => Q.wJ,
        getDevice: () => eu,
        getCampaignParams: () => eE,
        ImpressionNames: () => Q.IJ,
        ImpressionGroups: () => X.q,
        getSuperPropertiesBase64: () => ef,
        trackMaker: () => eg,
        AnalyticsActionHandlers: () => Y,
        NetworkActionNames: () => Q.D3,
        getSuperProperties: () => eI,
        ImpressionTypes: () => X.z,
        extendSuperProperties: () => eh,
    });
var u = n(812729),
    _ = n.n(u),
    E = n(284009),
    A = n.n(E),
    h = n(264572).Buffer;
function I(e) {
    try {
        return h.from(JSON.stringify(e)).toString("base64");
    } catch (e) {
        return null;
    }
}
n(142703), n(667532), n(321073);
var f = n(132500);
n(423034);
var p = n(80703),
    T = n(17928),
    m = n(636537),
    g = n(187207),
    S = n(941426),
    N = n(818348);
let C = "x-science-test",
    O = new S.Vy("AnalyticsTrackingStore"),
    R = [0, 100, 1e3],
    L = 1500,
    y = 0,
    D = 0,
    v = 0,
    b = 0,
    M = 0,
    P = null,
    U = 0,
    w = Number.MAX_SAFE_INTEGER,
    G = 0,
    x = 0,
    k = null,
    F = !1,
    V = null,
    B = null;
function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return e + t;
}
let j = window.requestIdleCallback ?? ((e) => setImmediate(() => e())),
    W = new g.n(),
    Y = {
        handleConnectionOpen: () => {},
        handleConnectionClosed: () => {},
        handleFingerprint: () => {},
        handleTrack: () => {},
        handleSetAnalyticsToken: () => {},
    },
    K = [],
    $ = null,
    z = !1,
    q = () => Promise.resolve({ sessionId: void 0 }),
    Z = (e) => {
        let {
            dispatcher: t,
            actionHandler: n,
            getFingerprint: a,
            getSessionId: s = q,
            TRACKING_URL: l,
            drainTimeoutOverride: o,
            waitFor: d,
            scheduleWhenIdle: c = j,
            getLaunchSignature: u = () => null,
            submitEvents: _,
            sendUnloadRequest: E,
        } = e;
        function A() {
            return 0 !== K.length && (null != r ? null != i : null != a());
        }
        function h(e) {
            let { shouldFlushOnNextTick: t = !1 } = e;
            null == $ && A() && ($ = t ? setTimeout(I, 0) : c(I, { timeout: L }));
        }
        function I() {
            if ((($ = null), !A())) return Promise.resolve();
            let e = K.slice();
            (K = []), (U = H(U));
            let t = e.length;
            (w = Math.min(w, t)), (G = Math.max(G, t)), (x = H(x, t));
            let n = g(e);
            return (
                n.then(
                    () => {
                        e.forEach((e) => {
                            e.resolve?.();
                        }),
                            (v = H(v));
                    },
                    (t) => {
                        K.unshift(...e), (b = H(b));
                        let { message: n } = t.body || t;
                        console.warn("[AnalyticsTrackingStore] Track:", n);
                    },
                ),
                n
            );
        }
        function g(e, t) {
            let n = Date.now(),
                r = e.map((e) => ({ ...e, properties: { ...e.properties, client_send_timestamp: n } }));
            if (null != _) return _(r, i);
            let a = {};
            return (
                F || ((B = (0, f.A)()), (a[C] = B), (F = !0)),
                m.Bo.post({
                    url: t ?? l,
                    headers: a,
                    body: { token: i, events: r },
                    retries: 3,
                    rejectWithError: !1,
                }).then((e) => (a[C] && (V = e?.headers?.[C] ?? null), e))
            );
        }
        function S() {
            if (null != _ || null == E || 0 === K.length || !A()) return !1;
            let e = K.slice(),
                t = Date.now(),
                n = e.map((e) => ({ ...e, properties: { ...e.properties, client_send_timestamp: t } }));
            return (
                !!E(l, JSON.stringify({ token: i, events: n })) &&
                ((K = []), ($ = null), e.forEach((e) => e.resolve?.()), !0)
            );
        }
        function Z() {
            let e = {
                type: N.bZ.CLIENT_TELEMETRY,
                properties: {
                    client_track_timestamp: Date.now(),
                    rpc_success_count: v,
                    rpc_failure_count: b,
                    first_seen_event_sequence_number: M,
                    last_seen_event_sequence_number: y,
                    telemetry_period_start_timestamp: P,
                    telemetry_period_end_timestamp: Date.now(),
                    event_queue_rejection_count: D,
                    event_queue_batch_count: U,
                    event_queue_batch_min_size: w === Number.MAX_SAFE_INTEGER ? 0 : w,
                    event_queue_batch_max_size: G,
                    event_queue_batch_avg_size: U > 0 ? x / U : 0,
                    science_request_id: B,
                    science_response: V,
                    launch_signature: u(),
                },
            };
            return (
                (D = 0),
                (v = 0),
                (b = 0),
                (U = 0),
                (w = Number.MAX_SAFE_INTEGER),
                (G = 0),
                (x = 0),
                (P = Date.now()),
                (M = y),
                g([e], N.mX.CLIENT_TELEMETRY).catch((e) => {
                    O.trace(`client telemetry flush failed (status ${e?.status ?? "unknown"})`);
                })
            );
        }
        (L = o ?? 1500),
            !z &&
                "u" > typeof document &&
                ((z = !0),
                document.addEventListener("visibilitychange", () => {
                    "hidden" === document.visibilityState && S();
                }),
                window.addEventListener("pagehide", S)),
            (Y.handleConnectionOpen = function (e) {
                let { analyticsToken: t, user: n } = e;
                return (
                    null != t && (i = t),
                    null != n.id && (r = n.id),
                    !(function () {
                        if (null != k) return;
                        let e = () => {
                            k = {
                                type: "timeout",
                                id: setTimeout(
                                    () => {
                                        Z(), e();
                                    },
                                    Math.max(36e5 + (Math.floor(36e4 * Math.random() * 2) - 36e4), 6e4),
                                ),
                            };
                        };
                        k = {
                            type: "timeout",
                            id: setTimeout(
                                () => {
                                    Z(), e();
                                },
                                Math.floor(354e4 * Math.random() + 6e4),
                            ),
                        };
                    })(),
                    h({ shouldFlushOnNextTick: !1 }),
                    !1
                );
            }),
            (Y.handleConnectionClosed = function () {
                return (
                    I(),
                    (function () {
                        if (null == k) return;
                        switch (k.type) {
                            case "timeout":
                                clearTimeout(k.id);
                                break;
                            case "interval":
                                clearInterval(k.id);
                                break;
                            default:
                                k.type;
                        }
                        k = null;
                    })(),
                    (i = null),
                    (r = null),
                    !1
                );
            }),
            (Y.handleFingerprint = function () {
                return I(), !1;
            }),
            (Y.handleTrack = function (e) {
                let { event: t, properties: n, flush: i, fingerprint: l, resolve: o } = e;
                return (
                    s().then((e) => {
                        let { sessionId: s } = e,
                            d = {
                                type: t,
                                fingerprint: l,
                                properties: {
                                    client_track_timestamp: Date.now(),
                                    client_heartbeat_session_id: s,
                                    event_sequence_number: ++y,
                                    ...n,
                                },
                                resolve: o,
                            },
                            c = (function (e) {
                                if (null != r) return r;
                                let t = e.fingerprint ?? a();
                                return null != t ? (0, p.d)(t) : null;
                            })(d);
                        if ((null != c && (d.properties.client_uuid = W.generate(c)), K.push(d), K.length > 1e4)) {
                            let e = K.length - 1e4;
                            (D = H(D, e)), (K = K.slice(-1e4));
                        }
                        i ? h({ shouldFlushOnNextTick: !0 }) : h({ shouldFlushOnNextTick: !1 });
                    }),
                    !1
                );
            }),
            (Y.handleSetAnalyticsToken = function (e) {
                let { analyticsToken: t, userId: n } = e;
                return null == i && null != t && ((i = t), (r = n), h({ shouldFlushOnNextTick: !1 })), !1;
            });
        class X extends T.Ay.Store {
            static displayName = "AnalyticsTrackingStore";
            initialize() {
                null != d && this.waitFor(...d);
            }
            submitEventsImmediately = g;
            requestDrain = () => {
                for (let e of (I(), R))
                    setTimeout(() => {
                        I();
                    }, e);
            };
        }
        return new X(t, n);
    };
var X = n(412728),
    Q = n(239947),
    J = n(214958),
    ee = n.n(J);
n(689953);
var et = n(70298),
    en = n(175259),
    ei = n(506774),
    er = n(362474),
    ea = n(71931);
let es = "deviceProperties",
    el = "referralProperties",
    eo = window.DiscordNative;
if (null != eo) {
    let e,
        t = eo.app.getVersion(),
        n = eo.process.platform,
        i = eo.os.release,
        r = eo.os.arch,
        s = eo.os.appArch,
        l = eo.app.getReleaseChannel(),
        o = (0, en.c)();
    switch (n) {
        case "win32":
            e = "Windows";
            break;
        case "darwin":
            e = "Mac OS X";
            break;
        case "linux":
            e = "Linux";
            break;
        default:
            e = n;
    }
    if (
        ((a = {
            os: e,
            browser: "Discord Client",
            release_channel: l || "unknown",
            client_version: t,
            os_version: i,
            os_arch: r,
            app_arch: s,
            system_locale: o,
            has_client_mods: (0, et.b)(),
            client_launch_id: ea.C,
        }),
        ee().name?.toLocaleLowerCase() === "electron" &&
            ((a.browser_user_agent = ee().ua || ""), (a.browser_version = ee().version || "")),
        "linux" === n)
    ) {
        let e = eo.crashReporter.getMetadata();
        (a.window_manager = e.wm),
            (a.distro = e.distro),
            (a.runtime_environment = e.runtime_environment),
            (a.display_server = e.display_server);
    } else
        "darwin" === n ? (a.os_sdk_version = i?.split(".")[0]) : "win32" === n && (a.os_sdk_version = i?.split(".")[2]);
}
function ed() {
    let { userAgent: e } = window.navigator;
    if (/Windows/i.test(e)) return /Phone/.test(e) ? "Windows Mobile" : "Windows";
    if (/(iPhone|iPad|iPod)/.test(e)) return "iOS";
    if (/Android/.test(e)) return "Android";
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
    if (/Mac/i.test(e))
        return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "iOS" : "Mac OS X";
    else if (/Linux/i.test(e)) return "Linux";
    else return "";
}
function ec(e, t) {
    if (null == e) return "";
    t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    let n = RegExp(`[\\?&]${t}=([^&#]*)`).exec(e);
    return null === n || ("string" != typeof n[1] && n[1].length) ? "" : decodeURIComponent(n[1]).replace(/\+/g, " ");
}
function eu() {
    let { userAgent: e } = window.navigator;
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
    if (/Windows Phone/i.test(e)) return "Windows Phone";
    if (/Android/.test(e)) return "Android";
    if (/iPhone/.test(e)) return "iPhone";
    if (/iPad/.test(e)) return "iPad";
    else return "";
}
let e_ = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");
function eE(e) {
    let t = {};
    return (
        e_.forEach((n) => {
            let i = ec(e, n);
            i.length > 0 && (t[n] = i);
        }),
        t
    );
}
function eA() {
    let e,
        t = {};
    return (
        (t.referrer = document.referrer),
        (t.referring_domain = (e = document.referrer.split("/")).length >= 3 ? e[2] : ""),
        (t = {
            ...t,
            ...eE(window.location.href),
            ...(function () {
                let e,
                    t = {},
                    n = document.referrer,
                    i =
                        0 === (e = document.referrer).search("https?://(.*)google.([^/?]*)")
                            ? "google"
                            : 0 === e.search("https?://(.*)bing.com")
                              ? "bing"
                              : 0 === e.search("https?://(.*)yahoo.com")
                                ? "yahoo"
                                : 0 === e.search("https?://(.*)duckduckgo.com")
                                  ? "duckduckgo"
                                  : null;
                if (null != i) {
                    t.search_engine = i;
                    let e = ec(n, "yahoo" !== i ? "q" : "p");
                    e.length > 0 && (t.mp_keyword = e);
                }
                return t;
            })(),
        })
    );
}
if (null == a)
    try {
        a = (function () {
            let e = ei.w.get(es);
            if (null == e) {
                let t;
                ((t = {}).os = ed()),
                    (t.browser = (function () {
                        let { userAgent: e, vendor: t = "" } = window.navigator,
                            { opera: n } = window;
                        if (n) return /Mini/.test(e) ? "Opera Mini" : "Opera";
                        if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
                        if (/FBIOS/.test(e)) return "Facebook Mobile";
                        if (/CriOS/.test(e)) return "Chrome iOS";
                        if (/Apple/.test(t))
                            return /Mobile/.test(e) ||
                                (null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2)
                                ? "Mobile Safari"
                                : "Safari";
                        else if (/Android/.test(e)) return /Chrome/.test(e) ? "Android Chrome" : "Android Mobile";
                        else if (/Edge/.test(e)) return "Edge";
                        else if (/Chrome/.test(e)) return "Chrome";
                        else if (/Konqueror/.test(e)) return "Konqueror";
                        else if (/Firefox/.test(e)) return "Firefox";
                        else if (/MSIE|Trident\//.test(e)) return "Internet Explorer";
                        else if (/Gecko/.test(e)) return "Mozilla";
                        else return "";
                    })()),
                    (t.device = eu()),
                    (t.system_locale = (0, en.c)()),
                    (t.has_client_mods = (0, et.b)()),
                    (e = t),
                    ei.w.set(es, e);
            }
            let t = ei.w.get(el);
            null == t && ((t = eA()), ei.w.set(el, t));
            let n = er.u.get(el);
            if (null == n) {
                var i;
                let e;
                (i = eA()), (e = {}), Object.keys(i).map((t) => (e[`${t}_current`] = i[t])), (n = e), er.u.set(el, n);
            }
            return {
                ...e,
                ...{
                    ...{ browser_user_agent: window.navigator.userAgent || "", browser_version: ee().version || "" },
                    os_version: ee()?.os?.version ?? "",
                },
                ...t,
                ...n,
            };
        })();
    } catch (e) {
        a = {};
    }
function eh(e) {
    s = I((a = { ...a, ...e }));
}
function eI() {
    return a;
}
function ef() {
    return s;
}
eh(
    ((l = {}),
    (o = window.GLOBAL_ENV.RELEASE_CHANNEL) &&
        (null == l.release_channel || "" === l.release_channel) &&
        (l.release_channel = o.split("-")[0]),
    isNaN((d = parseInt("607158", 10))) || (l.client_build_number = d),
    null == (c = eo?.app.getBuildNumber()) || isNaN(c) || (l.native_build_number = c),
    (l.client_event_source = (function () {
        try {
            if (__OVERLAY__) return "OVERLAY";
        } catch (e) {}
        return null;
    })()),
    (l.has_client_mods = (0, et.b)()),
    (l.client_launch_id = ea.C),
    l),
);
let ep = {},
    eT = {};
function em(e) {
    return null != ep[e] && ep[e] > Date.now();
}
let eg = (e) => {
    let { addBreadcrumb: t, analyticEventConfigs: i, dispatcher: r, TRACK_ACTION_NAME: a } = e,
        s = function (e, t, n) {
            return new Promise((i) => {
                r.dispatch({
                    type: a,
                    event: e,
                    properties: t,
                    flush: n?.flush ?? !1,
                    fingerprint: n?.fingerprint,
                    resolve: i,
                });
            });
        };
    return function (e, r) {
        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null != n.g.isServerRendering && !0 === n.g.isServerRendering) return Promise.resolve();
        let l = r ?? {},
            o = i[e];
        if (("function" == typeof o && (o = o(l) ?? null), null != o))
            if ("throttlePeriod" in o) {
                let t = [e, ...o.throttleKeys(l)].join("_");
                if (em(t) || ("number" == typeof o.throttlePercent && Math.random() > o.throttlePercent))
                    return Promise.resolve();
                if (o.deduplicate) {
                    let e = eT[t];
                    if (_()(e, l)) return Promise.resolve();
                    eT[t] = l;
                }
                ep[t] = Date.now() + o.throttlePeriod;
            } else if ("throttlePercent" in o) {
                if (Math.random() > o.throttlePercent) return Promise.resolve();
            } else A()(!1, `Unsupported analytics event config: ${o}`);
        return t?.(e), s(e, r, a);
    };
};
