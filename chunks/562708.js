"use strict";
let i, r, s, a, o, l, u, c;
n.r(t),
    n.d(t, {
        encodeProperties: () => E,
        isThrottled: () => eE,
        analyticsTrackingStoreMaker: () => K,
        getOS: () => es,
        getDevice: () => eo,
        getCampaignParams: () => eu,
        ImpressionNames: () => $.I,
        ImpressionGroups: () => z.q,
        getSuperPropertiesBase64: () => ef,
        trackMaker: () => em,
        AnalyticsActionHandlers: () => H,
        NetworkActionNames: () => $.D,
        getSuperProperties: () => e_,
        ImpressionTypes: () => z.z,
        extendSuperProperties: () => ed,
    });
var d = n(812729),
    _ = n.n(d),
    f = n(284009),
    h = n.n(f),
    p = n(264572).Buffer;
function E(e) {
    try {
        return p.from(JSON.stringify(e)).toString("base64");
    } catch (e) {
        return null;
    }
}
n(142703), n(667532), n(321073);
var m = n(835245);
n(423034);
var g = n(80703),
    A = n(17928),
    I = n(636537),
    T = n(187207),
    S = n(818348);
let N = "x-science-test",
    y = 1500,
    C = 0,
    v = 0,
    O = 0,
    R = 0,
    b = 0,
    D = null,
    L = 0,
    w = Number.MAX_SAFE_INTEGER,
    M = 0,
    P = 0,
    x = null,
    U = !1,
    k = null,
    G = null;
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return e + t;
}
let V = window.requestIdleCallback ?? ((e) => setImmediate(() => e())),
    B = new T.n(),
    H = {
        handleConnectionOpen: () => {},
        handleConnectionClosed: () => {},
        handleFingerprint: () => {},
        handleTrack: () => {},
        handleSetAnalyticsToken: () => {},
    },
    j = [],
    Y = null,
    W = () => Promise.resolve({ sessionId: void 0 }),
    K = (e) => {
        let {
            dispatcher: t,
            actionHandler: n,
            getFingerprint: s,
            getSessionId: a = W,
            TRACKING_URL: o,
            drainTimeoutOverride: l,
            waitFor: u,
            scheduleWhenIdle: c = V,
            getLaunchSignature: d = () => null,
        } = e;
        function _() {
            return 0 !== j.length && (null != r ? null != i : null != s());
        }
        function f(e) {
            let { shouldFlushOnNextTick: t = !1 } = e;
            null == Y && _() && (Y = t ? setTimeout(h, 0) : c(h, { timeout: y }));
        }
        function h() {
            if (((Y = null), !_())) return Promise.resolve();
            let e = j.slice();
            (j = []), (L = F(L));
            let t = e.length;
            (w = Math.min(w, t)), (M = Math.max(M, t)), (P = F(P, t));
            let n = p(e);
            return (
                n.then(
                    () => {
                        e.forEach((e) => {
                            e.resolve?.();
                        }),
                            (O = F(O));
                    },
                    (t) => {
                        j.unshift(...e), (R = F(R));
                        let { message: n } = t.body || t;
                        console.warn("[AnalyticsTrackingStore] Track:", n);
                    },
                ),
                n
            );
        }
        function p(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
                n = Date.now(),
                r = e.map((e) => ({ ...e, properties: { ...e.properties, client_send_timestamp: n } })),
                s = {};
            return (
                U || ((G = (0, m.A)()), (s[N] = G), (U = !0)),
                I.Bo.post({ url: t, headers: s, body: { token: i, events: r }, retries: 3, rejectWithError: !1 }).then(
                    (e) => (s[N] && (k = e?.headers?.[N] ?? null), e),
                )
            );
        }
        function E() {
            let e = {
                type: S.bZ.CLIENT_TELEMETRY,
                properties: {
                    client_track_timestamp: Date.now(),
                    rpc_success_count: O,
                    rpc_failure_count: R,
                    first_seen_event_sequence_number: b,
                    last_seen_event_sequence_number: C,
                    telemetry_period_start_timestamp: D,
                    telemetry_period_end_timestamp: Date.now(),
                    event_queue_rejection_count: v,
                    event_queue_batch_count: L,
                    event_queue_batch_min_size: w === Number.MAX_SAFE_INTEGER ? 0 : w,
                    event_queue_batch_max_size: M,
                    event_queue_batch_avg_size: L > 0 ? P / L : 0,
                    science_request_id: G,
                    science_response: k,
                    launch_signature: d(),
                },
            };
            return (
                (v = 0),
                (O = 0),
                (R = 0),
                (L = 0),
                (w = Number.MAX_SAFE_INTEGER),
                (M = 0),
                (P = 0),
                (D = Date.now()),
                (b = C),
                p([e], S.mX.CLIENT_TELEMETRY)
            );
        }
        (y = l ?? 1500),
            (H.handleConnectionOpen = function (e) {
                let { analyticsToken: t, user: n } = e;
                return (
                    null != t && (i = t),
                    null != n.id && (r = n.id),
                    !(function () {
                        if (null != x) return;
                        let e = () => {
                            x = {
                                type: "timeout",
                                id: setTimeout(
                                    () => {
                                        E(), e();
                                    },
                                    Math.max(36e5 + (Math.floor(36e4 * Math.random() * 2) - 36e4), 6e4),
                                ),
                            };
                        };
                        x = {
                            type: "timeout",
                            id: setTimeout(
                                () => {
                                    E(), e();
                                },
                                Math.floor(354e4 * Math.random() + 6e4),
                            ),
                        };
                    })(),
                    f({ shouldFlushOnNextTick: !1 }),
                    !1
                );
            }),
            (H.handleConnectionClosed = function () {
                return (
                    h(),
                    (function () {
                        if (null == x) return;
                        switch (x.type) {
                            case "timeout":
                                clearTimeout(x.id);
                                break;
                            case "interval":
                                clearInterval(x.id);
                                break;
                            default:
                                x.type;
                        }
                        x = null;
                    })(),
                    (i = null),
                    (r = null),
                    !1
                );
            }),
            (H.handleFingerprint = function () {
                return h(), !1;
            }),
            (H.handleTrack = function (e) {
                let { event: t, properties: n, flush: i, fingerprint: o, resolve: l } = e;
                return (
                    a().then((e) => {
                        let { sessionId: a } = e,
                            u = {
                                type: t,
                                fingerprint: o,
                                properties: {
                                    client_track_timestamp: Date.now(),
                                    client_heartbeat_session_id: a,
                                    event_sequence_number: ++C,
                                    ...n,
                                },
                                resolve: l,
                            },
                            c = (function (e) {
                                if (null != r) return r;
                                let t = e.fingerprint ?? s();
                                return null != t ? (0, g.d)(t) : null;
                            })(u);
                        if ((null != c && (u.properties.client_uuid = B.generate(c)), j.push(u), j.length > 1e4)) {
                            let e = j.length - 1e4;
                            (v = F(v, e)), (j = j.slice(-1e4));
                        }
                        i ? f({ shouldFlushOnNextTick: !0 }) : f({ shouldFlushOnNextTick: !1 });
                    }),
                    !1
                );
            }),
            (H.handleSetAnalyticsToken = function (e) {
                let { analyticsToken: t, userId: n } = e;
                return null == i && null != t && ((i = t), (r = n), f({ shouldFlushOnNextTick: !1 })), !1;
            });
        class T extends A.Ay.Store {
            static displayName = "AnalyticsTrackingStore";
            initialize() {
                null != u && this.waitFor(...u);
            }
            submitEventsImmediately = p;
        }
        return new T(t, n);
    };
var z = n(412728),
    $ = n(239947),
    q = n(214958),
    Z = n.n(q);
n(689953);
var X = n(70298),
    Q = n(175259),
    J = n(506774),
    ee = n(362474),
    et = n(71931);
let en = "deviceProperties",
    ei = "referralProperties",
    er = window.DiscordNative;
if (null != er) {
    let e,
        t = er.app.getVersion(),
        n = er.process.platform,
        i = er.os.release,
        r = er.os.arch,
        a = er.os.appArch,
        o = er.app.getReleaseChannel(),
        l = (0, Q.c)();
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
        ((s = {
            os: e,
            browser: "Discord Client",
            release_channel: o || "unknown",
            client_version: t,
            os_version: i,
            os_arch: r,
            app_arch: a,
            system_locale: l,
            has_client_mods: (0, X.b)(),
            client_launch_id: et.C,
        }),
        Z().name?.toLocaleLowerCase() === "electron" &&
            ((s.browser_user_agent = Z().ua || ""), (s.browser_version = Z().version || "")),
        "linux" === n)
    ) {
        let e = er.crashReporter.getMetadata();
        (s.window_manager = e.wm),
            (s.distro = e.distro),
            (s.runtime_environment = e.runtime_environment),
            (s.display_server = e.display_server);
    } else
        "darwin" === n ? (s.os_sdk_version = i?.split(".")[0]) : "win32" === n && (s.os_sdk_version = i?.split(".")[2]);
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
function ea(e, t) {
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
let el = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");
function eu(e) {
    let t = {};
    return (
        el.forEach((n) => {
            let i = ea(e, n);
            i.length > 0 && (t[n] = i);
        }),
        t
    );
}
function ec() {
    let e,
        t = {};
    return (
        (t.referrer = document.referrer),
        (t.referring_domain = (e = document.referrer.split("/")).length >= 3 ? e[2] : ""),
        (t = {
            ...t,
            ...eu(window.location.href),
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
                    let e = ea(n, "yahoo" !== i ? "q" : "p");
                    e.length > 0 && (t.mp_keyword = e);
                }
                return t;
            })(),
        })
    );
}
if (null == s)
    try {
        s = (function () {
            let e = J.w.get(en);
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
                    (t.system_locale = (0, Q.c)()),
                    (t.has_client_mods = (0, X.b)()),
                    (e = t),
                    J.w.set(en, e);
            }
            let t = J.w.get(ei);
            null == t && ((t = ec()), J.w.set(ei, t));
            let n = ee.u.get(ei);
            if (null == n) {
                var i;
                let e;
                (i = ec()), (e = {}), Object.keys(i).map((t) => (e[`${t}_current`] = i[t])), (n = e), ee.u.set(ei, n);
            }
            return {
                ...e,
                ...{
                    ...{ browser_user_agent: window.navigator.userAgent || "", browser_version: Z().version || "" },
                    os_version: Z()?.os?.version ?? "",
                },
                ...t,
                ...n,
            };
        })();
    } catch (e) {
        s = {};
    }
function ed(e) {
    a = E((s = { ...s, ...e }));
}
function e_() {
    return s;
}
function ef() {
    return a;
}
ed(
    ((o = {}),
    (l = window.GLOBAL_ENV.RELEASE_CHANNEL) &&
        (null == o.release_channel || "" === o.release_channel) &&
        (o.release_channel = l.split("-")[0]),
    isNaN((u = parseInt("538080", 10))) || (o.client_build_number = u),
    null == (c = er?.app.getBuildNumber()) || isNaN(c) || (o.native_build_number = c),
    (o.client_event_source = (function () {
        try {
            if (__OVERLAY__) return "OVERLAY";
        } catch (e) {}
        return null;
    })()),
    (o.has_client_mods = (0, X.b)()),
    (o.client_launch_id = et.C),
    o),
);
let eh = {},
    ep = {};
function eE(e) {
    return null != eh[e] && eh[e] > Date.now();
}
let em = (e) => {
    let { addBreadcrumb: t, analyticEventConfigs: i, dispatcher: r, TRACK_ACTION_NAME: s } = e,
        a = function (e, t, n) {
            return new Promise((i) => {
                r.dispatch({
                    type: s,
                    event: e,
                    properties: t,
                    flush: n?.flush ?? !1,
                    fingerprint: n?.fingerprint,
                    resolve: i,
                });
            });
        };
    return function (e, r) {
        let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null != n.g.isServerRendering && !0 === n.g.isServerRendering) return Promise.resolve();
        let o = r ?? {},
            l = i[e];
        if (("function" == typeof l && (l = l(o) ?? null), null != l))
            if ("throttlePeriod" in l) {
                let t = [e, ...l.throttleKeys(o)].join("_");
                if (eE(t) || ("number" == typeof l.throttlePercent && Math.random() > l.throttlePercent))
                    return Promise.resolve();
                if (l.deduplicate) {
                    let e = ep[t];
                    if (_()(e, o)) return Promise.resolve();
                    ep[t] = o;
                }
                eh[t] = Date.now() + l.throttlePeriod;
            } else if ("throttlePercent" in l) {
                if (Math.random() > l.throttlePercent) return Promise.resolve();
            } else h()(!1, `Unsupported analytics event config: ${l}`);
        return t?.(e), a(e, r, s);
    };
};
