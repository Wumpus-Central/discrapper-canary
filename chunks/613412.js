let i, r, a, s, l, o, d, c, u;
(n.r(t),
    n.d(t, {
        AnalyticsActionHandlers: () => $,
        ImpressionGroups: () => J.q,
        ImpressionNames: () => ee.IJ,
        ImpressionTypes: () => J.z,
        NetworkActionNames: () => ee.D3,
        SpanComponentNames: () => ee.yk,
        SpanTtiNames: () => ee.wJ,
        analyticsTrackingStoreMaker: () => Q,
        encodeProperties: () => p,
        extendSuperProperties: () => eT,
        getBrowser: () => ef,
        getCampaignParams: () => em,
        getDevice: () => eI,
        getOS: () => eA,
        getSuperProperties: () => eS,
        getSuperPropertiesBase64: () => eN,
        isThrottled: () => eR,
        trackMaker: () => eL,
    }));
var _,
    E = n(812729),
    A = n.n(E),
    h = n(284009),
    f = n.n(h),
    I = n(264572).hp;
function p(e) {
    try {
        return I.from(JSON.stringify(e)).toString("base64");
    } catch (e) {
        return null;
    }
}
(n(142703), n(667532), n(321073));
var m = n(115560);
n(423034);
var g = n(80703),
    T = n(855986),
    S = n(620632),
    N = n(187207),
    C = n(611599),
    O = n(818348);
let R = "x-science-test",
    L = new C.Vy("AnalyticsTrackingStore"),
    y = [0, 100, 1e3],
    D = 1500,
    b = 0,
    v = 0,
    P = 0,
    M = 0,
    U = 0,
    w = null,
    G = 0,
    x = Number.MAX_SAFE_INTEGER,
    k = 0,
    F = 0,
    B = null,
    V = !1,
    H = null,
    j = null;
function W(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return e + t;
}
let Y = window.requestIdleCallback ?? ((e) => setImmediate(() => e())),
    K = new N.n(),
    $ = {
        handleConnectionOpen: () => {},
        handleConnectionClosed: () => {},
        handleFingerprint: () => {},
        handleTrack: () => {},
        handleSetAnalyticsToken: () => {},
    },
    X = [],
    z = null,
    q = !1,
    Z = () => Promise.resolve({ sessionId: void 0 }),
    Q = (e) => {
        let {
            dispatcher: t,
            actionHandler: n,
            getFingerprint: a,
            getSessionId: s = Z,
            TRACKING_URL: l,
            drainTimeoutOverride: o,
            waitFor: d,
            scheduleWhenIdle: c = Y,
            getLaunchSignature: u = () => null,
            submitEvents: _,
            sendUnloadRequest: E,
        } = e;
        function A() {
            return 0 !== X.length && (null != r ? null != i : null != a());
        }
        function h(e) {
            let { shouldFlushOnNextTick: t = !1 } = e;
            null == z && A() && (z = t ? setTimeout(f, 0) : c(f, { timeout: D }));
        }
        function f() {
            if (((z = null), !A())) return Promise.resolve();
            let e = X.slice();
            ((X = []), (G = W(G)));
            let t = e.length;
            ((x = Math.min(x, t)), (k = Math.max(k, t)), (F = W(F, t)));
            let n = I(e);
            return (
                n.then(
                    () => {
                        (e.forEach((e) => {
                            e.resolve?.();
                        }),
                            (P = W(P)));
                    },
                    (t) => {
                        (X.unshift(...e), (M = W(M)));
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
                V || ((j = (0, m.A)()), (a[R] = j), (V = !0)),
                S.Bo.post({
                    url: t ?? l,
                    headers: a,
                    body: { token: i, events: r },
                    retries: 3,
                    rejectWithError: !1,
                }).then((e) => (a[R] && (H = e?.headers?.[R] ?? null), e))
            );
        }
        function p() {
            if (null != _ || null == E || 0 === X.length || !A()) return !1;
            let e = X.slice(),
                t = Date.now(),
                n = e.map((e) => ({ ...e, properties: { ...e.properties, client_send_timestamp: t } }));
            return (
                !!E(l, JSON.stringify({ token: i, events: n })) &&
                ((X = []), (z = null), e.forEach((e) => e.resolve?.()), !0)
            );
        }
        function N() {
            let e = {
                type: O.bZ.CLIENT_TELEMETRY,
                properties: {
                    client_track_timestamp: Date.now(),
                    rpc_success_count: P,
                    rpc_failure_count: M,
                    first_seen_event_sequence_number: U,
                    last_seen_event_sequence_number: b,
                    telemetry_period_start_timestamp: w,
                    telemetry_period_end_timestamp: Date.now(),
                    event_queue_rejection_count: v,
                    event_queue_batch_count: G,
                    event_queue_batch_min_size: x === Number.MAX_SAFE_INTEGER ? 0 : x,
                    event_queue_batch_max_size: k,
                    event_queue_batch_avg_size: G > 0 ? F / G : 0,
                    science_request_id: j,
                    science_response: H,
                    launch_signature: u(),
                },
            };
            return (
                (v = 0),
                (P = 0),
                (M = 0),
                (G = 0),
                (x = Number.MAX_SAFE_INTEGER),
                (k = 0),
                (F = 0),
                (w = Date.now()),
                (U = b),
                I([e], O.mX.CLIENT_TELEMETRY).catch((e) => {
                    L.trace(`client telemetry flush failed (status ${e?.status ?? "unknown"})`);
                })
            );
        }
        ((D = o ?? 1500),
            !q &&
                "u" > typeof document &&
                ((q = !0),
                document.addEventListener("visibilitychange", () => {
                    "hidden" === document.visibilityState && p();
                }),
                window.addEventListener("pagehide", p)),
            ($.handleConnectionOpen = function (e) {
                let { analyticsToken: t, user: n } = e;
                return (
                    null != t && (i = t),
                    null != n.id && (r = n.id),
                    !(function () {
                        if (null != B) return;
                        let e = () => {
                            B = {
                                type: "timeout",
                                id: setTimeout(
                                    () => {
                                        (N(), e());
                                    },
                                    Math.max(36e5 + (Math.floor(36e4 * Math.random() * 2) - 36e4), 6e4),
                                ),
                            };
                        };
                        B = {
                            type: "timeout",
                            id: setTimeout(
                                () => {
                                    (N(), e());
                                },
                                Math.floor(354e4 * Math.random() + 6e4),
                            ),
                        };
                    })(),
                    h({ shouldFlushOnNextTick: !1 }),
                    !1
                );
            }),
            ($.handleConnectionClosed = function () {
                return (
                    f(),
                    (function () {
                        if (null == B) return;
                        switch (B.type) {
                            case "timeout":
                                clearTimeout(B.id);
                                break;
                            case "interval":
                                clearInterval(B.id);
                                break;
                            default:
                                B.type;
                        }
                        B = null;
                    })(),
                    (i = null),
                    (r = null),
                    !1
                );
            }),
            ($.handleFingerprint = function () {
                return (f(), !1);
            }),
            ($.handleTrack = function (e) {
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
                                    event_sequence_number: ++b,
                                    ...n,
                                },
                                resolve: o,
                            },
                            c = (function (e) {
                                if (null != r) return r;
                                let t = e.fingerprint ?? a();
                                return null != t ? (0, g.d)(t) : null;
                            })(d);
                        if ((null != c && (d.properties.client_uuid = K.generate(c)), X.push(d), X.length > 1e4)) {
                            let e = X.length - 1e4;
                            ((v = W(v, e)), (X = X.slice(-1e4)));
                        }
                        i ? h({ shouldFlushOnNextTick: !0 }) : h({ shouldFlushOnNextTick: !1 });
                    }),
                    !1
                );
            }),
            ($.handleSetAnalyticsToken = function (e) {
                let { analyticsToken: t, userId: n } = e;
                return (null == i && null != t && ((i = t), (r = n), h({ shouldFlushOnNextTick: !1 })), !1);
            }));
        class C extends T.Ay.Store {
            static displayName = "AnalyticsTrackingStore";
            initialize() {
                null != d && this.waitFor(...d);
            }
            submitEventsImmediately = I;
            requestDrain = () => {
                for (let e of (f(), y))
                    setTimeout(() => {
                        f();
                    }, e);
            };
        }
        return new C(t, n);
    };
var J = n(412728),
    ee = n(239947),
    et = n(214958),
    en = n.n(et);
n(689953);
var ei = n(70298),
    er = n(574381),
    ea = n(175259),
    es = n(506774),
    el = n(362474),
    eo = n(71931);
let ed = "deviceProperties",
    ec = "devicePropertiesVersion",
    eu = "referralProperties";
function e_() {}
let eE = window.DiscordNative;
if (null != eE) {
    let e,
        t = eE.app.getVersion(),
        n = eE.process.platform,
        i = eE.os.release,
        r = eE.os.arch,
        s = eE.os.appArch,
        l = eE.app.getReleaseChannel(),
        o = (0, ea.c)();
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
            ...{
                os_version: (_ = eE.os.systemVersion) ?? ("darwin" === n ? "" : i),
                os_version_is_release: "darwin" !== n || null != _,
                ...("darwin" === n ? { os_sdk_version: i.split(".")[0] } : {}),
                ...("win32" === n ? { os_sdk_version: i.split(".")[2] } : {}),
            },
            os_arch: r,
            app_arch: s,
            system_locale: o,
            has_client_mods: (0, ei.b)(),
            client_launch_id: eo.C,
        }),
        en().name?.toLocaleLowerCase() === "electron" &&
            ((a.browser_user_agent = en().ua || ""), (a.browser_version = en().version || "")),
        "linux" === n)
    ) {
        let e = eE.crashReporter.getMetadata();
        ((a.window_manager = e.wm),
            (a.distro = e.distro),
            (a.runtime_environment = e.runtime_environment),
            (a.display_server = e.display_server));
    }
}
function eA() {
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
function eh(e, t) {
    if (null == e) return "";
    t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    let n = RegExp(`[\\?&]${t}=([^&#]*)`).exec(e);
    return null === n || ("string" != typeof n[1] && n[1].length) ? "" : decodeURIComponent(n[1]).replace(/\+/g, " ");
}
function ef() {
    let { userAgent: e, vendor: t = "" } = window.navigator,
        { opera: n } = window,
        i = (function (e) {
            let { userAgentData: t } = window.navigator;
            for (let { brand: n } of t?.brands ?? []) {
                if ("Microsoft Edge" === n) return "Edge";
                if ("Opera" === n) return /Mini/.test(e) ? "Opera Mini" : "Opera";
            }
            return null;
        })(e);
    if (n) return /Mini/.test(e) ? "Opera Mini" : "Opera";
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
    if (/FBIOS/.test(e)) return "Facebook Mobile";
    if (/CriOS/.test(e)) return "Chrome iOS";
    if (/FxiOS/.test(e)) return "Firefox iOS";
    else if (/EdgiOS/.test(e)) return "Edge iOS";
    else if (/EdgA/.test(e)) return "Android Edge";
    else if (/Apple/.test(t))
        return /Mobile/.test(e) || (null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2)
            ? "Mobile Safari"
            : "Safari";
    else if (null !== i) return i;
    else if (/Android/.test(e))
        return /Firefox/.test(e) ? "Android Firefox" : /Chrome/.test(e) ? "Android Chrome" : "Android Mobile";
    else if (/Edge/.test(e)) return "Edge";
    else if (/Chrome/.test(e)) return "Chrome";
    else if (/Konqueror/.test(e)) return "Konqueror";
    else if (/Firefox/.test(e)) return "Firefox";
    else if (/MSIE|Trident\//.test(e)) return "Internet Explorer";
    else if (/Gecko/.test(e)) return "Mozilla";
    else return "";
}
function eI() {
    let e = e_(),
        { userAgent: t } = window.navigator;
    if (null != e) return e.device;
    if (/(BlackBerry|PlayBook|BB10)/i.test(t)) return "BlackBerry";
    if (/Windows Phone/i.test(t)) return "Windows Phone";
    if (/Android/.test(t)) return "Android";
    if (/iPhone/.test(t)) return "iPhone";
    else if (/iPad/.test(t)) return "iPad";
    else return "";
}
let ep = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");
function em(e) {
    let t = {};
    return (
        ep.forEach((n) => {
            let i = eh(e, n);
            i.length > 0 && (t[n] = i);
        }),
        t
    );
}
function eg() {
    let e,
        t = {};
    return (
        (t.referrer = document.referrer),
        (t.referring_domain = (e = document.referrer.split("/")).length >= 3 ? e[2] : ""),
        (t = {
            ...t,
            ...em(window.location.href),
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
                    let e = eh(n, "yahoo" !== i ? "q" : "p");
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
            let e = es.w.get(ed);
            if (null == e || 1 !== es.w.get(ec)) {
                let t;
                (((t = {}).os = eA()),
                    (t.browser = ef()),
                    (t.device = eI()),
                    (t.device_model_name = ""),
                    (t.system_locale = (0, ea.c)()),
                    (t.has_client_mods = (0, ei.b)()),
                    (e = t),
                    es.w.set(ed, e),
                    es.w.set(ec, 1));
            }
            let t = es.w.get(eu);
            null == t && ((t = eg()), es.w.set(eu, t));
            let n = el.u.get(eu);
            if (null == n) {
                var i;
                let e;
                ((i = eg()), (e = {}), Object.keys(i).map((t) => (e[`${t}_current`] = i[t])), (n = e), el.u.set(eu, n));
            }
            return {
                ...e,
                ...(function () {
                    let e = {
                            browser_user_agent: window.navigator.userAgent || "",
                            browser_version: en().version || "",
                        },
                        t = e_();
                    if (null != t) {
                        var n;
                        return {
                            ...e,
                            ...{
                                os_version: (n = (0, er.un)()) ? t.systemVersion : (t.osVersion ?? ""),
                                os_version_is_release: n || null != t.osVersion,
                                os_sdk_version: n ? t.osSdkVersion || void 0 : t.systemVersion,
                            },
                        };
                    }
                    return { ...e, os_version: en()?.os?.version ?? "" };
                })(),
                ...t,
                ...n,
            };
        })();
    } catch (e) {
        a = {};
    }
function eT(e) {
    s = p((a = { ...a, ...e }));
}
function eS() {
    return a;
}
function eN() {
    return s;
}
eT(
    ((l = {}),
    (o = window.GLOBAL_ENV.RELEASE_CHANNEL) &&
        (null == l.release_channel || "" === l.release_channel) &&
        (l.release_channel = o.split("-")[0]),
    isNaN((d = parseInt("665314", 10))) || (l.client_build_number = d),
    null == (c = eE?.app.getBuildNumber()) || isNaN(c) || (l.native_build_number = c),
    (l.client_event_source = (function () {
        try {
            if (__OVERLAY__) return "OVERLAY";
        } catch (e) {}
        return null;
    })()),
    (l.has_client_mods = (0, ei.b)()),
    (l.client_launch_id = eo.C),
    null != (u = e_()?.installSource) && (l.install_source = u),
    l),
);
let eC = {},
    eO = {};
function eR(e) {
    return null != eC[e] && eC[e] > Date.now();
}
let eL = (e) => {
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
                if (eR(t) || ("number" == typeof o.throttlePercent && Math.random() > o.throttlePercent))
                    return Promise.resolve();
                if (o.deduplicate) {
                    let e = eO[t];
                    if (A()(e, l)) return Promise.resolve();
                    eO[t] = l;
                }
                eC[t] = Date.now() + o.throttlePeriod;
            } else if ("throttlePercent" in o) {
                if (Math.random() > o.throttlePercent) return Promise.resolve();
            } else f()(!1, `Unsupported analytics event config: ${o}`);
        return (t?.(e), s(e, r, a));
    };
};
