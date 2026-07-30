"use strict";
let i, r, a, s, l, o, d, c;
n.r(t),
    n.d(t, {
        encodeProperties: () => I,
        isThrottled: () => ef,
        analyticsTrackingStoreMaker: () => $,
        getOS: () => es,
        getDevice: () => eo,
        getCampaignParams: () => ec,
        ImpressionNames: () => q.I,
        ImpressionGroups: () => z.q,
        getSuperPropertiesBase64: () => eA,
        trackMaker: () => ep,
        AnalyticsActionHandlers: () => j,
        NetworkActionNames: () => q.D,
        getSuperProperties: () => eE,
        ImpressionTypes: () => z.z,
        extendSuperProperties: () => e_,
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
    m = n(562465),
    g = n(187207),
    S = n(818348);
let N = "x-science-test",
    C = [0, 100, 1e3],
    O = 1500,
    R = 0,
    L = 0,
    D = 0,
    y = 0,
    v = 0,
    b = null,
    M = 0,
    P = Number.MAX_SAFE_INTEGER,
    U = 0,
    w = 0,
    G = null,
    x = !1,
    k = null,
    F = null;
function V(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return e + t;
}
let B = window.requestIdleCallback ?? ((e) => setImmediate(() => e())),
    H = new g.n(),
    j = {
        handleConnectionOpen: () => {},
        handleConnectionClosed: () => {},
        handleFingerprint: () => {},
        handleTrack: () => {},
        handleSetAnalyticsToken: () => {},
    },
    W = [],
    Y = null,
    K = () => Promise.resolve({ sessionId: void 0 }),
    $ = (e) => {
        let {
            dispatcher: t,
            actionHandler: n,
            getFingerprint: a,
            getSessionId: s = K,
            TRACKING_URL: l,
            drainTimeoutOverride: o,
            waitFor: d,
            scheduleWhenIdle: c = B,
            getLaunchSignature: u = () => null,
            submitEvents: _,
        } = e;
        function E() {
            return 0 !== W.length && (null != r ? null != i : null != a());
        }
        function A(e) {
            let { shouldFlushOnNextTick: t = !1 } = e;
            null == Y && E() && (Y = t ? setTimeout(h, 0) : c(h, { timeout: O }));
        }
        function h() {
            if (((Y = null), !E())) return Promise.resolve();
            let e = W.slice();
            (W = []), (M = V(M));
            let t = e.length;
            (P = Math.min(P, t)), (U = Math.max(U, t)), (w = V(w, t));
            let n = I(e);
            return (
                n.then(
                    () => {
                        e.forEach((e) => {
                            e.resolve?.();
                        }),
                            (D = V(D));
                    },
                    (t) => {
                        W.unshift(...e), (y = V(y));
                        let { message: n } = t.body || t;
                        console.warn("[AnalyticsTrackingStore] Track:", n);
                    },
                ),
                n
            );
        }
        function I(e, t) {
            let n = Date.now(),
                r = e.map((e) => ({ ...e, properties: { ...e.properties, client_send_timestamp: n } }));
            if (null != _) return _(r, i);
            let a = {};
            return (
                x || ((F = (0, f.A)()), (a[N] = F), (x = !0)),
                m.Bo.post({
                    url: t ?? l,
                    headers: a,
                    body: { token: i, events: r },
                    retries: 3,
                    rejectWithError: !1,
                }).then((e) => (a[N] && (k = e?.headers?.[N] ?? null), e))
            );
        }
        function g() {
            let e = {
                type: S.bZ.CLIENT_TELEMETRY,
                properties: {
                    client_track_timestamp: Date.now(),
                    rpc_success_count: D,
                    rpc_failure_count: y,
                    first_seen_event_sequence_number: v,
                    last_seen_event_sequence_number: R,
                    telemetry_period_start_timestamp: b,
                    telemetry_period_end_timestamp: Date.now(),
                    event_queue_rejection_count: L,
                    event_queue_batch_count: M,
                    event_queue_batch_min_size: P === Number.MAX_SAFE_INTEGER ? 0 : P,
                    event_queue_batch_max_size: U,
                    event_queue_batch_avg_size: M > 0 ? w / M : 0,
                    science_request_id: F,
                    science_response: k,
                    launch_signature: u(),
                },
            };
            return (
                (L = 0),
                (D = 0),
                (y = 0),
                (M = 0),
                (P = Number.MAX_SAFE_INTEGER),
                (U = 0),
                (w = 0),
                (b = Date.now()),
                (v = R),
                I([e], S.mX.CLIENT_TELEMETRY)
            );
        }
        (O = o ?? 1500),
            (j.handleConnectionOpen = function (e) {
                let { analyticsToken: t, user: n } = e;
                return (
                    null != t && (i = t),
                    null != n.id && (r = n.id),
                    !(function () {
                        if (null != G) return;
                        let e = () => {
                            G = {
                                type: "timeout",
                                id: setTimeout(
                                    () => {
                                        g(), e();
                                    },
                                    Math.max(36e5 + (Math.floor(36e4 * Math.random() * 2) - 36e4), 6e4),
                                ),
                            };
                        };
                        G = {
                            type: "timeout",
                            id: setTimeout(
                                () => {
                                    g(), e();
                                },
                                Math.floor(354e4 * Math.random() + 6e4),
                            ),
                        };
                    })(),
                    A({ shouldFlushOnNextTick: !1 }),
                    !1
                );
            }),
            (j.handleConnectionClosed = function () {
                return (
                    h(),
                    (function () {
                        if (null == G) return;
                        switch (G.type) {
                            case "timeout":
                                clearTimeout(G.id);
                                break;
                            case "interval":
                                clearInterval(G.id);
                                break;
                            default:
                                G.type;
                        }
                        G = null;
                    })(),
                    (i = null),
                    (r = null),
                    !1
                );
            }),
            (j.handleFingerprint = function () {
                return h(), !1;
            }),
            (j.handleTrack = function (e) {
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
                                    event_sequence_number: ++R,
                                    ...n,
                                },
                                resolve: o,
                            },
                            c = (function (e) {
                                if (null != r) return r;
                                let t = e.fingerprint ?? a();
                                return null != t ? (0, p.d)(t) : null;
                            })(d);
                        if ((null != c && (d.properties.client_uuid = H.generate(c)), W.push(d), W.length > 1e4)) {
                            let e = W.length - 1e4;
                            (L = V(L, e)), (W = W.slice(-1e4));
                        }
                        i ? A({ shouldFlushOnNextTick: !0 }) : A({ shouldFlushOnNextTick: !1 });
                    }),
                    !1
                );
            }),
            (j.handleSetAnalyticsToken = function (e) {
                let { analyticsToken: t, userId: n } = e;
                return null == i && null != t && ((i = t), (r = n), A({ shouldFlushOnNextTick: !1 })), !1;
            });
        class $ extends T.Ay.Store {
            static displayName = "AnalyticsTrackingStore";
            initialize() {
                null != d && this.waitFor(...d);
            }
            submitEventsImmediately = I;
            requestDrain = () => {
                for (let e of (h(), C))
                    setTimeout(() => {
                        h();
                    }, e);
            };
        }
        return new $(t, n);
    };
var z = n(412728),
    q = n(239947),
    Z = n(214958),
    X = n.n(Z);
n(689953);
var Q = n(70298),
    J = n(175259),
    ee = n(506774),
    et = n(362474),
    en = n(71931);
let ei = "deviceProperties",
    er = "referralProperties",
    ea = window.DiscordNative;
if (null != ea) {
    let e,
        t = ea.app.getVersion(),
        n = ea.process.platform,
        i = ea.os.release,
        r = ea.os.arch,
        s = ea.os.appArch,
        l = ea.app.getReleaseChannel(),
        o = (0, J.c)();
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
            has_client_mods: (0, Q.b)(),
            client_launch_id: en.C,
        }),
        X().name?.toLocaleLowerCase() === "electron" &&
            ((a.browser_user_agent = X().ua || ""), (a.browser_version = X().version || "")),
        "linux" === n)
    ) {
        let e = ea.crashReporter.getMetadata();
        (a.window_manager = e.wm),
            (a.distro = e.distro),
            (a.runtime_environment = e.runtime_environment),
            (a.display_server = e.display_server);
    } else
        "darwin" === n ? (a.os_sdk_version = i?.split(".")[0]) : "win32" === n && (a.os_sdk_version = i?.split(".")[2]);
}
function es() {
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
function el(e, t) {
    if (null == e) return "";
    t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    let n = RegExp(`[\\?&]${t}=([^&#]*)`).exec(e);
    return null === n || ("string" != typeof n[1] && n[1].length) ? "" : decodeURIComponent(n[1]).replace(/\+/g, " ");
}
function eo() {
    let { userAgent: e } = window.navigator;
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
    if (/Windows Phone/i.test(e)) return "Windows Phone";
    if (/Android/.test(e)) return "Android";
    if (/iPhone/.test(e)) return "iPhone";
    if (/iPad/.test(e)) return "iPad";
    else return "";
}
let ed = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");
function ec(e) {
    let t = {};
    return (
        ed.forEach((n) => {
            let i = el(e, n);
            i.length > 0 && (t[n] = i);
        }),
        t
    );
}
function eu() {
    let e,
        t = {};
    return (
        (t.referrer = document.referrer),
        (t.referring_domain = (e = document.referrer.split("/")).length >= 3 ? e[2] : ""),
        (t = {
            ...t,
            ...ec(window.location.href),
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
                    let e = el(n, "yahoo" !== i ? "q" : "p");
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
            let e = ee.w.get(ei);
            if (null == e) {
                let t;
                ((t = {}).os = es()),
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
                    (t.device = eo()),
                    (t.system_locale = (0, J.c)()),
                    (t.has_client_mods = (0, Q.b)()),
                    (e = t),
                    ee.w.set(ei, e);
            }
            let t = ee.w.get(er);
            null == t && ((t = eu()), ee.w.set(er, t));
            let n = et.u.get(er);
            if (null == n) {
                var i;
                let e;
                (i = eu()), (e = {}), Object.keys(i).map((t) => (e[`${t}_current`] = i[t])), (n = e), et.u.set(er, n);
            }
            return {
                ...e,
                ...{
                    ...{ browser_user_agent: window.navigator.userAgent || "", browser_version: X().version || "" },
                    os_version: X()?.os?.version ?? "",
                },
                ...t,
                ...n,
            };
        })();
    } catch (e) {
        a = {};
    }
function e_(e) {
    s = I((a = { ...a, ...e }));
}
function eE() {
    return a;
}
function eA() {
    return s;
}
e_(
    ((l = {}),
    (o = window.GLOBAL_ENV.RELEASE_CHANNEL) &&
        (null == l.release_channel || "" === l.release_channel) &&
        (l.release_channel = o.split("-")[0]),
    isNaN((d = parseInt("586097", 10))) || (l.client_build_number = d),
    null == (c = ea?.app.getBuildNumber()) || isNaN(c) || (l.native_build_number = c),
    (l.client_event_source = (function () {
        try {
            if (__OVERLAY__) return "OVERLAY";
        } catch (e) {}
        return null;
    })()),
    (l.has_client_mods = (0, Q.b)()),
    (l.client_launch_id = en.C),
    l),
);
let eh = {},
    eI = {};
function ef(e) {
    return null != eh[e] && eh[e] > Date.now();
}
let ep = (e) => {
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
                if (ef(t) || ("number" == typeof o.throttlePercent && Math.random() > o.throttlePercent))
                    return Promise.resolve();
                if (o.deduplicate) {
                    let e = eI[t];
                    if (_()(e, l)) return Promise.resolve();
                    eI[t] = l;
                }
                eh[t] = Date.now() + o.throttlePeriod;
            } else if ("throttlePercent" in o) {
                if (Math.random() > o.throttlePercent) return Promise.resolve();
            } else A()(!1, `Unsupported analytics event config: ${o}`);
        return t?.(e), s(e, r, a);
    };
};
